---
name: "English Dark Mild #01"
style: "Dark Mild"
batch_size_liters: 20.5
brew_date: 2026-05-23
bottle_date: ""
status: "planned"  # planned | fermenting | conditioning | ready | archived
show_body: true
body_position: bottom

og: 1.038
fg: 1.011
abv: 3.5
ibu: 24
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
    - name: "Fuggle"
      weight_g: 28
      time_min: 20
      use: "whirlpool"
      alpha_acid_pct: 4.5
  yeast:
    name: "Fermentis Safale S-04 (dry English Ale)"
    amount: "1 pack (11.5 g)"
  other:
    - name: "젤라틴 (청징제, 식용 — 집에 있는 것)"
      amount: "콜드 크래시 시 ~2–3 g, 70 °C 물에 풀어 투입 (젓지 않음)"
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

## 물 수지 (Water Balance)

| 단계 | 용량 |
|---|---|
| 스트라이크 워터 | 11 L |
| 스파지 워터 | 18 L |
| 물 총합 | 29 L |
| − 곡물 흡수 | −3.6 L |
| = 프리보일 | ≈ 26 L |
| − 보일 증발 (60분) | −4~5 L |
| − 트럽·칠러 손실 + 냉각 수축 | −0.5 L |
| = 발효조 | ≈ 20.5 L |

## 매시 계획 (Mash Plan)

| 스텝 | 온도 | 시간 | 목적 |
|---|---|---|---|
| Saccharification Rest | 69 °C | 75 분 | 당화 (알파아밀라아제 우세 → 덱스트린↑, 바디·잔당) |
| Mash Out | 76 °C | 10 분 | 효소 불활성·점도↓ → 스파징 수월 |
