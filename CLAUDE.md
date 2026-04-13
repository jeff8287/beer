# CLAUDE.md — Beer Brewing Log

이 프로젝트는 맥주 자가양조 기록 저장소입니다.

## 메모 → 템플릿 변환 규칙

사용자가 자유 형식 메모를 제공하면 아래 규칙에 따라 변환합니다.

### 분류 기준

- **레시피**: 재료, 공정, 비중, 배치 크기 등 양조 기록이 포함된 경우 → `recipes/<slug>.md`
- **학습 노트**: 팁, 실험 결과, 배운 점 등 → `notes/<slug>.md`
- 하나의 메모에 둘 다 포함되면 분리하여 각각 생성

### Slug 생성

배치명/제목을 kebab-case로 변환:
- `RAWR American Pale Ale` → `rawr-american-pale-ale`
- `스파징 온도 실험` → `sparging-temperature-experiment`
- 한글은 영문으로 번역하여 slug 생성

### 레시피 템플릿 (`templates/recipe.md`)

YAML frontmatter 필수 필드:
- `name`: 배치명 (string)
- `style`: 맥주 스타일 (string, e.g., "American Pale Ale")
- `batch_size_liters`: 배치 크기 (number, default 20)
- `brew_date`: 양조일 (string, YYYY-MM-DD)
- `bottle_date`: 병입일 (string, optional)
- `status`: planned | fermenting | conditioning | ready | archived
- `og`, `fg`, `abv`, `ibu`, `srm`: 수치 (number | null)
- `fermentation`: `{ temp_celsius, duration_days }` (optional)
- `ingredients`:
  - `malts`: `[{ name, weight_kg, lovibond }]` (lovibond: SRM 계산용, optional)
  - `hops`: `[{ name, weight_g, time_min, use, alpha_acid_pct }]` (use: boil | dryhop | whirlpool, alpha_acid_pct: IBU 계산용, optional)
  - `yeast`: `{ name, amount }`
  - `other`: `[]` (optional)
- `process`: mash/sparge/boil 상세 (optional)
- `cost`: `{ total_krw, breakdown: [{ item, cost_krw }] }` (optional)
- `photos`: 사진 경로 배열 (optional)
- `tags`: `[beer, ...]`

본문 섹션: Tasting Notes, Gravity Readings (table), Brew Notes

### 학습 노트 템플릿 (`templates/note.md`)

YAML frontmatter:
- `title`: 제목 (string)
- `created`: 생성일 (string, YYYY-MM-DD)
- `tags`: `[beer, learning]`
- `category`: sparging | sanitization | fermentation | equipment | ingredients | general

### ABV / IBU / SRM 자동 계산

frontmatter에 값이 비어 있으면 웹사이트에서 자동 계산됩니다. Claude Code가 변환 시에도 계산해서 채워주세요:

- **ABV** = `(OG - FG) × 131.25` (OG, FG만 있으면 계산 가능)
- **IBU** = Tinseth 공식 (홉별 `alpha_acid_pct` 필요)
- **SRM** = Morey 공식 (몰트별 `lovibond` 필요)

일반적인 alpha acid 값: Magnum 12%, Cascade 5.5%, Centennial 10%, Chinook 13%, Citra 12%, Simcoe 13%, Mosaic 12.5%
일반적인 lovibond 값: Pale Ale Malt 3.5, Munich 6, Caramel/Crystal 40L→40, Chocolate 350, Roasted Barley 300

### 이미지 규칙

- 사진은 `photos/<batch-slug>/` 폴더에 저장
- **반드시 표준 마크다운 문법 사용**: `![설명](../photos/<batch-slug>/filename.jpg)`
- **Obsidian 위키링크 사용 금지**: `![[image]]` 형식은 웹사이트에서 렌더링되지 않음

### 변환 예시

입력 (자유 메모):
```
오늘 ipa 만들었다. 20리터 배치.
페일몰트 5kg, 캐러멜40 0.5kg
센테니얼 30g 60분, 캐스케이드 20g 10분
us-05 효모 1팩
68도 60분 매싱, 스파지 78도
og 1.062
```

출력: `recipes/ipa-batch-2.md` (적절한 frontmatter + 본문)

## 디렉토리 구조

```
recipes/    # 배치별 레시피 (public, git tracked)
notes/      # 학습 노트 (private, .gitignored)
photos/     # 배치별 사진 (public)
templates/  # 템플릿 파일
website/    # Astro 웹사이트
```

## 웹사이트

- `website/` 디렉토리에서 `npm run dev`로 로컬 개발
- `recipes/`에 새 .md 추가 → 자동으로 웹 페이지 생성
- push하면 GitHub Actions가 자동 배포
