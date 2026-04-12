# Homebrew Beer Brewing Log

맥주 자가양조 기록을 체계적으로 관리하는 저장소. 레시피와 사진은 공개, 학습 노트와 비용은 비공개로 관리.

## Directory Structure

```
beer/
├── recipes/       # 배치별 레시피 (public)
├── notes/         # 학습 노트 (private, .gitignored)
├── photos/        # 배치별 사진 (public)
├── templates/     # 레시피/노트 템플릿
├── website/       # Astro 웹사이트 (GitHub Pages)
└── .github/       # CI/CD workflows
```

## Templates

### Recipe (`templates/recipe.md`)

각 배치의 양조 기록. YAML frontmatter에 다음 항목 포함:

- **기본 정보**: 배치명, 스타일, 배치 크기, 상태
- **날짜**: 양조일, 병입일
- **수치**: OG, FG, ABV, IBU, SRM
- **발효**: 온도, 기간
- **재료**: 몰트, 홉, 효모, 기타
- **공정**: 매싱, 스파징, 보일링 상세
- **비용**: 총액, 항목별 내역
- **사진**: 배치 사진 경로

본문에는 테이스팅 노트, 비중 기록, 양조 메모 작성.

> **참고**: `ingredients`, `process`, `cost` 등 중첩된 YAML 필드는 Obsidian의 Properties GUI에서 편집할 수 없습니다. Source mode에서 직접 편집하세요.

### Note (`templates/note.md`)

양조 과정에서 배운 점을 기록하는 학습 노트. 카테고리별 분류 가능 (sparging, sanitization, fermentation, equipment, ingredients, general).

## Workflow

### 새 레시피 기록

1. 양조 중 자유롭게 메모 (한국어/영어, 형식 자유)
2. Claude Code에 메모 내용 전달
3. Claude Code가 `recipes/<slug>.md` 형식으로 변환
4. 학습 내용은 `notes/<slug>.md`로 분리

### 사진 추가

1. 사진을 `photos/<batch-slug>/` 폴더에 저장
2. 레시피 frontmatter의 `photos` 배열에 경로 추가
3. 본문에서 참조: `![설명](../photos/<batch-slug>/filename.jpg)`

> **중요**: 레시피 본문에서 이미지를 참조할 때 표준 마크다운 문법(`![alt](path)`)을 사용하세요. Obsidian 위키링크(`![[image]]`)는 웹사이트에서 렌더링되지 않습니다.

### 웹사이트 업데이트

`recipes/`에 새 `.md` 파일을 추가하고 push하면 GitHub Actions가 자동으로 웹사이트를 빌드하여 배포합니다.

### 로컬 개발

```bash
cd website
npm run dev    # photos 자동 복사 후 dev server 시작
```

## Slug Convention

배치명을 kebab-case로 변환: `RAWL American Pale Ale` → `rawl-american-pale-ale`
