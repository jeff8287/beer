---
name: "English Dark Mild #01"
style: "Dark Mild"
batch_size_liters: 20.5
brew_date: ""
bottle_date: ""
status: "planned"  # planned | fermenting | conditioning | ready | archived

og: 1.038
fg: 1.011
abv: 3.5
ibu: 21
srm: 16

fermentation:
  temp_celsius: 19
  duration_days: 14

ingredients:
  malts:
    - name: "Simpsons Maris Otter (Base)"
      weight_kg: 3.0
      lovibond: 3
    - name: "Simpsons Crystal T50"
      weight_kg: 0.3
      lovibond: 50
    - name: "Simpsons DRC (Double Roasted Crystal, Special B 대체)"
      weight_kg: 0.18
      lovibond: 120
    - name: "Briess Chocolate Malt 350L"
      weight_kg: 0.1
      lovibond: 350
  hops:
    - name: "East Kent Goldings"
      weight_g: 28
      time_min: 60
      use: "boil"
      alpha_acid_pct: 5
  yeast:
    name: "Fermentis Safale S-04 (dry English Ale)"
    amount: "1 pack (11.5 g)"
  other:
    - name: "카라기난 (청징제)"
      amount: "보일 15분 남기고 1 tablet / 1 tsp"
    - name: "프라이밍 설탕 (병입용)"
      amount: "약 6 g/L (저탄산, ~120 g)"

process:
  mash_temp_celsius: 69
  mash_duration_min: 75
  strike_water_liters: 11
  strike_water_temp_celsius: 75
  sparge_water_liters: 18
  sparge_water_temp_celsius: 80
  boil_duration_min: 60
  preboil_volume_liters: 26

cost:
  total_krw: null
  breakdown: []

photos: []

tags:
  - beer
  - dark-mild
---

영국 펍 세션 에일. Brewer's Friend Top 10 + BYO 레시피 8종 분석([[dark-mild-recipe-analysis]]) 기반,
서울홈브루 재고 확정 재료로 구성. 저도수·몰트 중심·다크. 고온 매시로 바디 확보.

## 재료 구매 (서울홈브루)

> 2026-05-18 재고 확인 기준. 추천했던 Special B·Pale Chocolate는 품절 → DRC·Briess Chocolate로 대체.

| 재료 | 제품 | 가격 | 재고 | 링크 |
|---|---|---|---|---|
| 베이스 몰트 | Simpsons Maris Otter (Base) | 4,500원/단위 · 25kg 138,000원 | ✅ | [구매](https://seoulhomebrew.co.kr/product/simpsons-malt-maris-otter-malt-심슨-마리스-오터base/582/category/73/display/1/) ([25kg](https://seoulhomebrew.co.kr/product/simpsons-malt-maris-otter-malt-25kg-bulk-심슨-마리스-오터base/600/category/73/display/1/)) |
| 크리스털 | Simpsons Crystal T50 | 1,500원 | ✅ | [구매](https://seoulhomebrew.co.kr/product/simpsons-malt-crystal-t50-크리스탈-티-50-crystal/710/category/73/display/1/) |
| 다크 크리스털 | Simpsons DRC (Special B 대체) | 1,500원 | ✅ | [구매](https://seoulhomebrew.co.kr/product/simpsons-malt-simpsons-drc®-더블-로스티드-크리스탈crystal-special-b-대체-가능/826/category/73/display/1/) |
| 색 보정 | Briess Chocolate Malt 350L | 1,500원 | ✅ | [구매](https://seoulhomebrew.co.kr/product/briess-chocolate-malt-350l-specialtydark-roasted-초콜릿-맥아/323/category/73/display/1/) |
| 홉 | UK East Kent Golding 4–7.1% (pellet) | 4,000원 | ✅ | [구매](https://seoulhomebrew.co.kr/product/uk-east-kent-golding-4-71-pellets이스트-켄트-골딩/147/category/83/display/1/) |
| 효모 | Safale S-04 (dry) 11.5g | 6,500원 | ✅ | [구매](https://seoulhomebrew.co.kr/product/safale-s-04-ale-yeast-dry-115-g/156/category/84/display/1/) |
| 청징제 | 카라기난 (맥주 청징제) | 5,000원 | ✅ | [구매](https://seoulhomebrew.co.kr/product/카라기난맥주-청징제beer-fining-agent/390/category/85/display/1/) |

### 선택 옵션 (co-brewer 의견 반영)

- **홉 캐릭터**: 기본 EKG 단독. Fuggle로 바꾸거나 60분 EKG + 15분 Fuggle 가능 — [Fuggle 펠릿](https://seoulhomebrew.co.kr/product/fuggle-3-65-pellet-퍼글-홉/38/category/83/display/1/) (4,000원)
- **효모**: 기본 S-04. 더 드라이·중립 원하면 Nottingham — [Lallemand Nottingham](https://seoulhomebrew.co.kr/product/lallemand-nottingham-yeast-dry-11-g-노팅엄-건조-효모/804/category/84/display/1/) (8,500원)
- **몰트 깊이**: 기본 표준(SRM ~16). 진한 버전 = DRC 0.25kg + Chocolate 0.15kg로 증량 → SRM ~21, 토피·커피 강조
- **청징**: 카라기난(보일) + 콜드 크래시 시 마트 식용 젤라틴 병행 가능 — [[gelatin-vs-carrageenan]]

## 레시피 요약

- **배치**: 20.5 L (20 L에서 0.5 L 증량 → OG를 가이드라인 상한 1.038로 맞춤)
- **곡물 (총 3.58 kg)**: Maris Otter 3.0 / Crystal T50 0.3 / DRC 0.18 / Chocolate 350L 0.1 (kg)
- **홉**: EKG 28 g @ 60분 (AA 5% 기준 → 포장지 실측 AA로 양 보정, ~21 IBU)
- **효모**: S-04 1팩, 19 °C 발효
- **계산값 (Brewers Friend, 20.5 L)**: OG 1.038 / FG 1.011 / ABV 3.48% / IBU 21.2 / SRM 16.0 — 전부 BJCP Dark Mild 범위 내

## 공정

1. **매싱**: 69 °C 75분 (스트라이크 워터 ~11 L @ 75 °C, 곡물비 ~3 L/kg). 저도수라 고온 매시로 덱스트린 남겨 바디 확보 — 8종 레시피 공통 전략.
2. **매시아웃**: 76–78 °C
3. **스파징**: 80 °C 워터 ~18 L. **80 °C 초과 금지**(탄닌 — 다크 몰트 민감). 프리보일 ~26 L 목표.
4. **보일 60분**: 베이스가 Maris Otter(영국식 완전 변성 페일 몰트)라 SMM 거의 없음 → DMS 걱정 없어 60분이면 충분. 분석 8종 중 명시된 7종이 거의 60분(90분은 1종뿐)으로 이 스타일 표준. 보일 15분 남기고 **카라기난** 투입.
5. **칠링 → 발효**: 19 °C, ~10–14일 (효모 가라앉을 때까지 + 2일).
6. **콜드 크래시**: 0–4 °C 1–2일. (선택) 에어락 구멍으로 식용 젤라틴 투입, 젓지 않음.
7. **병입**: 프라이밍 설탕 ~6 g/L (영국식 저탄산, 1–2 vol). NEIPA 아니므로 8 g/L 기준에서 낮춤.

## Brewers Friend Calculator 입력값

[brewersfriend.com/homebrew/recipe/calculator](https://www.brewersfriend.com/homebrew/recipe/calculator) 에 그대로 입력.

**기본 설정**
- Method: **All Grain**
- Batch Size (into fermentor): **20.5 L**
- Boil Time: **60 min**
- Boil Size (pre-boil): **26 L**
- Brewhouse Efficiency: **70 %**
- Mash Thickness: **3 L/kg** (≈ 11 L 스트라이크)

**Fermentables** (이름 / 무게 / PPG / 색 °L / %)

| Fermentable | Amount | PPG | °L (Lovibond) | % |
|---|---|---|---|---|
| Maris Otter (Pale Ale, UK) | 3.0 kg | 38 | 3 | 83.8 |
| Crystal T50 (Caramel/Crystal) | 0.30 kg | 34 | 50 | 8.4 |
| Simpsons DRC (Dark Crystal) | 0.18 kg | 33 | 120 | 5.0 |
| Briess Chocolate Malt | 0.10 kg | 28 | 350 | 2.8 |
| **합계** | **3.58 kg** | | | 100 |

**Hops** (변종 / 형태 / AA% / 무게 / 시간 / 용도)

| Hop | Form | AA% | Amount | Time | Use |
|---|---|---|---|---|---|
| East Kent Goldings | Pellet | 5.0 | 28 g | 60 min | Boil |

**Yeast**
- Fermentis Safale S-04 — Attenuation 칸에 **70 %** 입력 (고온 매시 반영해 FG 1.011에 맞춤. 기본 75% 그대로 두면 FG가 1.009로 더 드라이하게 계산됨)

**Mash (Single Infusion)**
- Sacch Rest: **69 °C / 75 min**
- Mash Out: **76 °C / 10 min**

**Other / Misc**
- 카라기난(Whirlfloc 류): Boil 15 min
- Water: Trub/Chiller Loss, Fermenter Loss는 장비 기본값 유지

**검산 목표값** (20.5 L 기준, 입력 후 이 값들 나오면 정상)
- OG **1.038** / FG **1.011** / ABV **3.48 %** / IBU **21.2** (Tinseth) / SRM **16.0** (Morey)

> EKG 포장지 실측 AA가 5%와 다르면 AA만 바꾸고 IBU 맞춰 홉 g 재조정. IBU 21은 스타일(10–25) 내지만 약간 홉 쪽 — 더 몰티하게 원하면 EKG 23 g로 줄이면 ~18 IBU.

## Tasting Notes



## Gravity Readings

| Day | Date | SG |
|-----|------|----|

## Brew Notes

- 슬러그/번호 규칙: 같은 스타일 재양조 시 `2026-english-dark-mild-02`로.
- AA 보정: EKG 포장지 실측 알파산이 5%와 다르면 IBU 18 맞춰 g 재계산 (Tinseth).
- T50 ≈ 중간 크리스털(~50 °L), DRC ≈ 다크 크리스털(~120 °L, 건자두·토피) — Special B 직접 대체품.
- 분석 근거: [[dark-mild-recipe-analysis]] · 공정 일반: [[neipa-brewing-sia]] (단 Mild는 청징제 O·고온 매시·홉 최소로 NEIPA와 반대) · 소독 비율: [[homebrew-cheatsheet]]
