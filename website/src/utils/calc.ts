/**
 * 양조 수치 자동 계산 유틸리티
 */

/** ABV 계산: (OG - FG) × 131.25 */
export function calcABV(og: number | null, fg: number | null): number | null {
  if (og == null || fg == null) return null;
  return Math.round((og - fg) * 131.25 * 10) / 10;
}

/** Apparent Attenuation %: (OG - FG) / (OG - 1) × 100 */
export function calcAttenuation(og: number | null, fg: number | null): number | null {
  if (og == null || fg == null || og <= 1) return null;
  return Math.round(((og - fg) / (og - 1)) * 1000) / 10;
}

/** Tinseth IBU 계산 */
export function calcIBU(
  hops: { weight_g: number; time_min: number; use: string; alpha_acid_pct?: number }[],
  og: number | null,
  batchLiters: number,
): number | null {
  if (og == null || !hops.length) return null;

  const boilHops = hops.filter(h => h.use === 'boil' && h.alpha_acid_pct != null);
  if (boilHops.length === 0) return null;

  let totalIBU = 0;
  for (const hop of boilHops) {
    const bignessFactor = 1.65 * Math.pow(0.000125, og - 1);
    const boilTimeFactor = (1 - Math.exp(-0.04 * hop.time_min)) / 4.15;
    const utilization = bignessFactor * boilTimeFactor;
    const ibu = (utilization * hop.alpha_acid_pct! * hop.weight_g * 10) / batchLiters;
    totalIBU += ibu;
  }

  return Math.round(totalIBU);
}

/** BU:GU ratio (IBU / GU) — 밸런스 지표. <0.5 몰티, 0.5~0.8 균형, >0.8 홉피 */
export function calcBUGU(ibu: number | null, og: number | null): number | null {
  if (ibu == null || og == null || og <= 1) return null;
  const gu = (og - 1) * 1000;
  return Math.round((ibu / gu) * 100) / 100;
}

/** Morey SRM 계산 */
export function calcSRM(
  malts: { weight_kg: number; lovibond?: number }[],
  batchLiters: number,
): number | null {
  const colorMalts = malts.filter(m => m.lovibond != null);
  if (colorMalts.length === 0) return null;

  const batchGallons = batchLiters / 3.78541;
  let mcu = 0;
  for (const malt of colorMalts) {
    const weightLb = malt.weight_kg * 2.20462;
    mcu += (weightLb * malt.lovibond!) / batchGallons;
  }

  return Math.round(1.4922 * Math.pow(mcu, 0.6859) * 10) / 10;
}

/** Pre-boil gravity 추정: OG × (배치볼륨 / 프리보일볼륨) */
export function calcPreBoilGravity(
  og: number | null,
  batchLiters: number,
  preboilLiters: number | null,
): number | null {
  if (og == null || preboilLiters == null || preboilLiters <= 0) return null;
  const ogPoints = (og - 1) * 1000;
  const preBoilPoints = (ogPoints * batchLiters) / preboilLiters;
  return Math.round((1 + preBoilPoints / 1000) * 1000) / 1000;
}

/** 칼로리 per 12oz (355ml) — Daniels/Hall 공식 */
export function calcCalories(og: number | null, fg: number | null): number | null {
  if (og == null || fg == null) return null;
  const ogPlato = (-1 * 616.868 + 1111.14 * og - 630.272 * og * og + 135.997 * og * og * og);
  const fgPlato = (-1 * 616.868 + 1111.14 * fg - 630.272 * fg * fg + 135.997 * fg * fg * fg);
  const realExtract = 0.1808 * ogPlato + 0.8192 * fgPlato;
  const abw = (ogPlato - realExtract) / (2.0665 - 0.010665 * ogPlato);
  const calories = ((6.9 * abw + 4.0 * (realExtract - 0.1)) * fg * 3.55);
  return Math.round(calories);
}

/** 탄수화물 per 12oz (g) */
export function calcCarbs(og: number | null, fg: number | null): number | null {
  if (og == null || fg == null) return null;
  const ogPlato = (-1 * 616.868 + 1111.14 * og - 630.272 * og * og + 135.997 * og * og * og);
  const fgPlato = (-1 * 616.868 + 1111.14 * fg - 630.272 * fg * fg + 135.997 * fg * fg * fg);
  const realExtract = 0.1808 * ogPlato + 0.8192 * fgPlato;
  return Math.round((realExtract - 0.1) * fg * 3.55 * 10) / 10;
}

/** 프라이밍 슈가 계산 (g) — 목표 CO2 볼륨, 맥주 온도(°C), 맥주 볼륨(L) */
export function calcPrimingSugar(
  co2Vols: number,
  tempCelsius: number,
  beerLiters: number,
  sugarType: 'table' | 'corn' | 'dme' = 'table',
): number {
  // 맥주에 이미 녹아있는 CO2 (Henry's law 근사)
  const residualCO2 = 3.0378 - 0.050062 * tempCelsius + 0.00026555 * tempCelsius * tempCelsius;
  const neededCO2 = co2Vols - residualCO2;
  if (neededCO2 <= 0) return 0;

  // CO2 1볼륨 = 맥주 1L당 설탕 약 4g (table sugar 기준)
  const factors: Record<string, number> = {
    table: 4.0,   // sucrose
    corn: 4.35,   // dextrose (glucose)
    dme: 5.33,    // dry malt extract
  };

  return Math.round(neededCO2 * beerLiters * factors[sugarType] * 10) / 10;
}

/**
 * 스트라이크 워터 온도 계산 (°C)
 * R = 물/곡물 비율 (L/kg), Tt = 목표 매시 온도, Tg = 곡물 온도
 */
export function calcStrikeTemp(
  ratio: number,
  targetTemp: number,
  grainTemp: number,
): number {
  return Math.round(((0.41 / ratio) * (targetTemp - grainTemp) + targetTemp) * 10) / 10;
}

/**
 * 스파지 워터 계산 (L)
 * 목표 프리보일 볼륨 - (스트라이크 워터 - 곡물 흡수)
 * 곡물 흡수: ~1.04 L/kg
 */
export function calcSpargeWater(
  preboilLiters: number,
  strikeWaterLiters: number,
  grainWeightKg: number,
): number {
  const grainAbsorption = grainWeightKg * 1.04;
  const firstRunnings = strikeWaterLiters - grainAbsorption;
  return Math.round((preboilLiters - firstRunnings) * 10) / 10;
}

/** SRM → 대략적인 CSS 색상 */
export function srmToColor(srm: number): string {
  const colors: [number, string][] = [
    [2, '#FFE699'], [3, '#FFD878'], [4, '#FFCA5A'], [6, '#FFBF42'],
    [8, '#FBB123'], [10, '#F8A600'], [13, '#E58500'], [17, '#D17000'],
    [20, '#BE5C00'], [24, '#A84A00'], [29, '#8D3700'], [35, '#702600'],
    [40, '#5A1A00'], [70, '#261600'],
  ];
  for (const [threshold, color] of colors) {
    if (srm <= threshold) return color;
  }
  return '#0F0B00';
}
