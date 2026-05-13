/* =================================================================
   SNJ Industrial Systems — main.js (v3.2)
   - i18n (ko default, en switchable)
   - Language toggle in header (KR | EN segmented control)
   - localStorage persists selection + <html lang> sync
   - Growth chart looping animation (preserved, smoothed)
   ================================================================= */

const BRAND = {
  name:  "SNJ Industrial Systems",
  short: "SNJ"
};

const CONTACT = {
  ready: false,
  email: "",
  tel:   ""
};

const NAV = [
  { id: "company",     i18n: "nav.company",     href: "#company",     enabled: true,  anchor: true },
  { id: "business",    i18n: "nav.business",    href: "#business",    enabled: true,  anchor: true },
  { id: "capability",  i18n: "nav.capability",  href: "#capability",  enabled: true,  anchor: true },
  { id: "quality",     i18n: "nav.quality",     href: "#quality",     enabled: true,  anchor: true },
  { id: "portfolio",   i18n: "nav.portfolio",   href: "#portfolio",   enabled: true,  anchor: true },
  { id: "contact",     i18n: "nav.contact",     href: "#contact",     enabled: true,  anchor: true }
];

/* ---------- i18n DICTIONARY ----------
   Korean is the source of truth. English is the published B2B translation.
*/
const I18N = {
  ko: {
    meta: {
      title: "SNJ Industrial Systems — 반도체·자동화 장비 OEM/ODM 제조 파트너",
      desc:  "SNJ Industrial Systems · 반도체·자동화 장비의 OEM·ODM Turnkey 제조 파트너. 조립·전장·검사·출하 공정을 통합 관리합니다."
    },
    nav: { company: "Company", business: "Business", capability: "Capability",
           quality: "Quality", portfolio: "Portfolio", contact: "Contact" },
    header: { langKR: "KR", langEN: "EN" },
    hero: {
      eyebrow: "SNJ Industrial Systems · OEM · ODM · Turnkey",
      titleA:  "반도체·자동화 장비\n제조를 위한",
      titleB:  "정밀 OEM/ODM 파트너",
      lede:    "SNJ는 고객사의 장비 설계와 제조 요구사항을\n실제 생산 가능한 형태로 구현합니다.\n\n기구 조립, 전장 배선, 기능 검사, 출하 준비까지 주요 제조 공정을\n통합 관리하며, 반도체·디스플레이·자동화 장비 프로젝트에 대응합니다.",
      ctaBiz: "Business 보기", ctaContact: "문의하기",
      metaK1: "사업 영역", metaV1: "반도체 · 자동화\n자동차 부품 · 디스플레이",
      metaK2: "시설",      metaV2: "경기도 화성시 만세구 양감면 정문송산로93번길 10-8",
      metaV2sub: "Republic of Korea",
      metaK3: "수행 범위", metaV3: "조립 · 전장 · 검사 · 출하\nOEM · ODM · Turnkey",
      capCap: "SNJ · Production Facility",
      capLoc: "화성시 만세구 양감면"
    },
    co: {
      label: "§ 01 — Company Overview",
      h:     "SNJ는 어떤 회사인가",
      desc:  "SNJ Industrial Systems는 반도체·자동화 장비의 OEM·ODM 제조를 전문으로 하는 정밀 장비 제조사입니다.\n\n고객의 설계 자료를 바탕으로 조립·전장·검사·출하의 주요 공정을 통합 관리하며, 검사·자동화·이송 장비를 중심으로 제조 협업을 수행합니다.",
      lede:  "SNJ Industrial Systems는 정밀 장비 제조 프로젝트를 수행하는 산업장비 제조 파트너입니다.",
      p1:    "고객사가 보유한 도면, BOM, 조립 기준서, 검사 기준서를 바탕으로 장비 조립과 전장 배선, 기능 검사, 출하 준비까지의 제조 과정을 체계적으로 운영합니다.",
      p2:    "SNJ의 역할은 단순 부품 조립에 머물지 않습니다.\n\n프로젝트 요구사항을 검토하고, 제조 공정에서 발생할 수 있는 이슈를 사전에 확인하며, 고객 검수와 출하 단계까지 이어지는 제조 흐름을 안정적으로 관리합니다.",
      hl1t: "Turnkey 제조 구조", hl1sub: "END-TO-END MANUFACTURING",
      hl1b: "도면 검토 · 자재 입고 · 조립 · 전장 · 검사 · 출하의 주요 공정을 내부 시설에서 통합 관리합니다.",
      hl2t: "공정 단계별 품질 게이트", hl2sub: "STAGE-BASED QA",
      hl2b: "자재 입고 · 조립 · 전장 · 기능 · 출하의 5단계 검수 게이트를 운영하며, 각 단계의 검수 기록을 남깁니다.",
      hl3t: "공정별 구역 분리 운영 구조", hl3sub: "ZONE-SEPARATED LAYOUT",
      hl3b: "조립 · 전장 · 검사 · 출하 · 자재 보관 영역을 분리해, 공정 간 간섭과 자재 혼선을 줄이는 구조로 운영합니다.",
      hl4t: "화성 양감면 시설", hl4sub: "HWASEONG FACTORY",
      hl4b: "경기도 화성시 만세구 양감면 정문송산로93번길 10-8 소재. 검사·자동화·이송 장비 등 다양한 정밀 장비 제조에 대응합니다."
    },
    why: {
      label: "§ 02 — Why SNJ", h: "SNJ를 선택하는 이유",
      desc:  "SNJ는 단순 외주 조립사가 아니라, 도면 검토부터 출하까지의 제조 흐름을 고객과 함께 책임지는 OEM/ODM 파트너로 일합니다.\n\n다음 네 가지 기준이 SNJ의 작업 방식을 결정합니다.",
      c1t: "장비 제조 중심의 실행력", c1sub: "MANUFACTURING EXECUTION",
      c1b: "도면과 사양을 실제 장비로 구현하는 조립·전장·검사 중심의 제조 역량을 제공합니다.",
      c2t: "공정별 검수 체계", c2sub: "STAGE-BASED QA",
      c2b: "자재 입고, 조립, 전장, 기능 검사, 출하 점검으로 이어지는 단계별 검수 체계를 운영합니다.",
      c3t: "OEM/ODM 협업 대응", c3sub: "OEM · ODM COLLABORATION",
      c3b: "고객사의 설계 기준과 제조 요구사항에 맞춰 유연한 제조 협업 구조를 제공합니다.",
      c4t: "출하까지 고려한 관리", c4sub: "SHIPMENT MANAGEMENT",
      c4b: "장비 제작 후 포장, 출하, 고객 검수 대응까지 이어지는 후속 절차를 함께 관리합니다."
    },
    biz: {
      label: "§ 03 — Business", h: "사업 영역",
      desc:  "SNJ가 제조에 대응하는 장비군과, 협업 시 어떤 자료를 받아 어떤 수행을 거쳐 어떤 결과물을 전달하는지에 대한 안내입니다.\n\n모든 프로젝트는 고객의 도면과 사양을 기준으로 진행되며, 세부 범위는 문의 단계에서 함께 정의합니다.",
      rowK1: "장비 유형", rowK2: "고객 자료", rowK3: "SNJ 수행", rowK4: "결과물",
      c1t: "반도체 검사 장비", c1sub: "SEMICONDUCTOR INSPECTION",
      c1i: "반도체 후공정 라인의 검사·핸들링 장비 제조에 대응합니다.\n\n정밀 이송 부품과 광학 검사 모듈을 포함한 복합 장비의 조립·전장·검사를 SNJ 내부에서 처리합니다.",
      c1v1: "Loader · Handler · Vision Inspection · 검사·이송 장비",
      c1v2: "기계 도면 · 전장 회로도 · BOM · 작업 사양서",
      c1v3: "자재 입고 검수 · 조립 · 전장·배선 · 기능 검사 · 출하 검수",
      c1v4: "완성 장비 · 검수 기록 · 출하 문서",
      c2t: "산업 자동화 장비", c2sub: "INDUSTRIAL AUTOMATION",
      c2i: "산업 자동화 라인용 테스터, 이송 모듈, 유틸리티 장비의 제조에 대응합니다.\n\n정의된 작업 기준을 바탕으로 반복 제작 대응부터 신규 모델의 초기 제작 협의까지 폭넓게 검토합니다.",
      c2v1: "Tester · 이송 모듈 · 자동화 라인 부속 장비",
      c2v2: "기계 도면 · 제어 사양 · 시퀀스 자료 · BOM",
      c2v3: "기계 조립 · 전장 배선 · 시퀀스 동작 점검 · 출하 준비",
      c2v4: "완성 장비 · 동작 점검 기록 · 인수 자료",
      c3t: "자동차 부품 검사 장비", c3sub: "AUTOMOTIVE QA EQUIPMENT",
      c3i: "자동차 부품·전장 부품의 검사 장비 제조에 대응합니다.\n\n검사 셀, 전장 점검 장비, 부품 핸들링 장비 등의 조립·전장·검사를 수행합니다.",
      c3v1: "부품 검사 셀 · 전장 점검 장비 · 부품 핸들링 모듈",
      c3v2: "기계 도면 · 검사 시퀀스 · 전장 도면 · 사양서",
      c3v3: "조립 · 전장 · 검사 시퀀스 점검 · 출하 검수",
      c3v4: "완성 장비 · 검사 기록 · 출하 문서",
      c4t: "OEM · ODM Turnkey", c4sub: "TURNKEY MANUFACTURING",
      c4i: "자재 조달 범위 또는 입고 일정 협의부터 조립·전장·검사·출하까지의 주요 공정을 SNJ가 통합 관리하는 Turnkey 협업입니다.\n\n부분 공정 협업도 가능합니다.",
      c4v1: "정밀 장비 전반 · OEM 제조 협업 · ODM 제작 협의",
      c4v2: "도면 · BOM · 제조 사양 · 시운전 기준",
      c4v3: "자재 일정 협의 · 조립 · 전장 · 검사 · 시운전 · 출하",
      c4v4: "완성 장비 · 공정 검수 기록 · 인수 자료 · 출하 문서"
    },
    mp: {
      label: "§ 04 — Manufacturing Process", h: "제조 공정 흐름",
      desc:  "SNJ의 제조는 도면 검토에서 출하까지 8개 단계로 진행됩니다.\n\n각 단계는 담당자와 검수 기준이 정의되어 있으며, 단계 사이의 인계는 기록과 체크리스트를 기반으로 이루어집니다.",
      s1t:"도면 검토",        s1sub:"DRAWING REVIEW",   s1b:"기계·전장 도면, BOM, 사양을 검토하고 제조성 의견을 정리.",
      s2t:"자재 조달 범위 또는 입고 일정 협의", s2sub:"MATERIAL SCHEDULE", s2b:"BOM 기준 자재 조달 범위 또는 입고 일정을 협의.",
      s3t:"자재 입고",        s3sub:"INTAKE",           s3b:"입고 자재의 도면 일치 여부 검수 및 보관.",
      s4t:"기구 조립",        s4sub:"ASSEMBLY",         s4b:"도면 기반의 정밀 기계 조립 및 조립 품질 관리.",
      s5t:"전장 배선",        s5sub:"WIRING",           s5b:"회로도 기반 배선·라벨링 및 절연·연속성 점검.",
      s6t:"기능 검사",        s6sub:"FUNCTIONAL TEST",  s6b:"시퀀스·정밀도·반복 동작 검증 및 시운전.",
      s7t:"포장 · 출하 준비",  s7sub:"PACKING",          s7b:"출하 사양에 맞춘 포장·라벨링·출하 문서 준비.",
      s8t:"고객 검수",        s8sub:"SIGN-OFF",         s8b:"출하 직전 최종 점검 및 고객 인수 확인."
    },
    cap: {
      label: "§ 05 — Capability", h: "제조 역량",
      desc:  "정밀 장비 제조의 핵심 공정인 기구 조립부터 전장 배선, 센서·모터·실린더 장착, 유틸리티 연결, 기능 테스트, 출하 준비까지의 여섯 가지 작업을 내부에서 수행합니다.\n\n작업 단계와 검수 단계는 분리해 관리합니다.",
      photoTag: "Production Floor — Hwaseong Factory",
      c1t:"기구 조립",          c1sub:"MECHANICAL ASSEMBLY", c1b:"기계 도면 기반의 정밀 조립. 모델별 작업 기준에 따라 조립 품질을 관리합니다.",
      c2t:"전장 배선",          c2sub:"WIRING",              c2b:"전장 회로도 대조, 배선 라벨링, 절연·연속성 점검을 통한 전기·제어 배선 작업.",
      c3t:"센서·모터·실린더 장착",c3sub:"ACTUATOR MOUNTING",   c3b:"센서, 서보·스텝 모터, 공압 실린더 등 액추에이터의 장착·정렬·초기 셋업을 수행합니다.",
      c4t:"유틸리티 연결",       c4sub:"UTILITY CONNECTION",  c4b:"공압·진공·냉각수·전원 등 유틸리티 라인 연결과 누설·압력 점검을 함께 진행합니다.",
      c5t:"기능 테스트",        c5sub:"FUNCTIONAL TEST",     c5b:"시퀀스, 정밀도, 반복 동작에 대한 기능 검사 및 시운전을 통해 출하 가능 여부를 확인합니다.",
      c6t:"출하 준비",          c6sub:"SHIPMENT PREP",       c6b:"출하 사양 점검, 포장·라벨링, 출하 문서 작성을 통해 고객 인수 단계로 인계합니다."
    },
    qa: {
      label: "§ 06 — Quality System", h: "품질 관리 체계",
      desc:  "출하 단계의 단일 검사로 품질을 보장하기는 어렵다는 판단에 따라, SNJ는 제조 흐름 안에 5개의 검수 게이트를 두고 단계마다 분리된 기준으로 점검을 수행합니다.\n\n각 게이트는 체크리스트 기반으로 운영되며, 검수 결과는 프로젝트 단위로 기록됩니다.",
      s1t:"자재 입고 검수", s1sub:"MATERIAL INTAKE",  s1b:"입고 자재의 도면·사양 일치 여부, 수량, 외관 손상을 확인하고 보관 위치를 지정합니다.",
      s2t:"조립 검수",      s2sub:"ASSEMBLY REVIEW",  s2b:"조립 완료 후 도면 기준 점검, 체결부 정렬·고정 상태를 검수합니다.",
      s3t:"전장 검수",      s3sub:"WIRING AUDIT",     s3b:"전장 도면과 배선 라벨 대조, 절연·연속성 측정, 배선 정리 상태를 점검합니다.",
      s4t:"기능 검사",      s4sub:"FUNCTIONAL TEST",  s4b:"시퀀스 동작, 정밀도, 반복성, 안전 인터록을 검증하고 결과를 검수 기록에 남깁니다.",
      s5t:"출하 점검",      s5sub:"OUTBOUND SIGN-OFF",s5b:"최종 외관, 부속 자재, 라벨, 출하 문서를 확인하고 고객 인수 단계로 인계합니다.",
      noteStrong: "검사 기록 · 체크리스트.",
      noteBody:   " 작업 단계와 검수 단계를 분리해 관리하며, 모델별 표준 절차서에 따라 체크리스트 기반으로 점검을 수행합니다. 검수 결과는 프로젝트 단위로 기록되어 출하 시 고객에게 공유 가능한 형태로 정리됩니다."
    },
    wf: {
      label: "§ 07 — Project Workflow", h: "프로젝트 진행 흐름",
      desc:  "문의 접수에서 고객 검수까지, 한 프로젝트가 SNJ를 통해 진행되는 8단계의 흐름입니다.\n\n단계마다 고객과 공유하는 자료와 확인 시점이 정의되어 있어, 진행 상황을 양측이 일관된 기준으로 추적할 수 있습니다.",
      i1t:"상담 · 자료 접수",  i1p:"Intake",   i1b:"프로젝트 개요와 일정, 수행 범위를 협의하고 도면·BOM·사양 자료를 접수합니다.",
      i2t:"도면 · BOM 검토",   i2p:"Review",   i2b:"제조성·정합성 관점에서 도면과 BOM을 검토하고, 필요한 보완 사항을 정리해 공유합니다.",
      i3t:"제조 일정 수립",    i3p:"Schedule", i3b:"자재 입고 일정과 공정 순서를 반영해 제조 일정을 수립하고 고객과 확정합니다.",
      i4t:"자재 입고 확인",    i4p:"Intake",   i4b:"입고 자재를 검수하고 누락·불일치 항목은 고객과 협의 후 보완합니다.",
      i5t:"조립 · 전장",       i5p:"Build",    i5b:"기구 조립과 전장 배선을 수행하고 단계별 검수 결과를 기록합니다.",
      i6t:"검사 · 시운전",     i6p:"Verify",   i6b:"기능 검사와 시운전을 통해 동작·정밀도·반복성을 확인하고 필요한 조정을 진행합니다.",
      i7t:"포장 · 출하",       i7p:"Ship",     i7b:"출하 사양에 맞춰 포장·라벨링을 진행하고 출하 문서를 함께 정리합니다.",
      i8t:"고객 검수 대응",    i8p:"Sign-off", i8b:"고객 인수 단계의 점검 사항과 추가 조정 요청에 대응하고 인수 자료를 마무리합니다."
    },
    growth: {
      label: "§ 08 — SNJ Growth Overview", h: "SNJ의 성장 흐름",
      desc:  "SNJ는 반도체·자동화 장비 제조 분야에서 생산 운영의 안정화, 품질 체계 강화, 포트폴리오 확장을 바탕으로 지속적인 성장 흐름을 만들어가고 있습니다.",
      c1lbl: "CHART · 01 · LINE",  c1t: "사업 성장 흐름",  c1sub: "Business Growth Trend",
      c1cap: "사업 기반과 제조 실행력이 축적되면서 SNJ의 성장 흐름은 점진적인 상승세를 이어가고 있습니다.",
      c2lbl: "CHART · 02 · BAR",   c2t: "운영 확장 흐름",  c2sub: "Operational Expansion",
      c2cap: "프로젝트 수행 경험과 제조 대응력이 쌓이면서 생산 및 출하 운영 역량 역시 단계적으로 확대되고 있습니다.",
      c3lbl: "CHART · 03 · DONUT", c3t: "성장 기반 요소",  c3sub: "Growth Foundation",
      c3cap: "SNJ의 성장은 생산 실행력, 품질 관리, 납기 대응, 확장 준비 역량이 균형 있게 결합된 구조 위에서 이루어집니다.",
      legend1:"생산 실행력", legend2:"품질 관리", legend3:"납기 대응", legend4:"확장 준비",
      donutCenter1:"GROWTH", donutCenter2:"FOUNDATION"
    },
    port: {
      label: "§ 09 — Portfolio", h: "사례",
      desc:  "고객사 및 프로젝트 정보는 공개 가능 범위 내에서 소개합니다.\n\n각 사례는 익명으로 정리되며, 산업군·목적·SNJ 담당 범위·산출물 기준으로 안내합니다.",
      rowK1:"산업군", rowK2:"목적", rowK3:"담당 범위", rowK4:"산출물",
      c1cat:"Semiconductor", c1t:"반도체 검사 장비 제조 협업",
      c1v1:"반도체 후공정", c1v2:"검사 장비 OEM 제조 협업",
      c1v3:"조립 · 전장 · 검사 · 출하", c1v4:"완성 장비 · 검수 기록 · 출하 문서",
      c1note:"공개 제한 안내 · 자세한 자료는 NDA 후 별도로 공유 가능합니다.",
      c2cat:"Semiconductor", c2t:"정밀 검사 라인 통합 조립",
      c2v1:"반도체 후공정", c2v2:"정밀 검사 장비 제조",
      c2v3:"조립 · 전장 · 시운전", c2v4:"완성 장비 · 시운전 기록",
      c2note:"공개 제한 안내 · 도면·사양 자료는 비공개 적용 범위입니다.",
      c3cat:"Display · Module", c3t:"디스플레이 검사 모듈 제조",
      c3v1:"디스플레이", c3v2:"검사 모듈 부분 제조",
      c3v3:"기구 조립 · 전장 배선", c3v4:"모듈 완성품 · 출하 검수 기록",
      c3note:"공개 제한 안내 · 세부 사양은 비공개 처리됩니다."
    },
    fac: {
      label: "§ 10 — Facility", h: "시설",
      desc:  "경기도 화성시 만세구 양감면 정문송산로93번길 10-8 소재. 조립·전장·검사·출하·자재 보관의 공정별 구역 분리 운영 구조이며,\n각 구역은 작업 동선과 자재 흐름을 고려해 배치합니다.",
      z1t:"조립 구역",       z1sub:"ASSEMBLY",         z1b:"기계 조립 작업 공간. 모델별 작업대와 공구·계측기 보관 위치를 지정해 운영합니다.",
      z2t:"전장 · 배선 구역", z2sub:"WIRING",          z2b:"전장 배선과 절연·연속성 점검을 수행하는 공간. 회로도 검수 자료를 함께 보관합니다.",
      z3t:"검사 · 시운전 구역",z3sub:"TEST",            z3b:"기능 검사와 시운전이 진행되는 공간. 시퀀스 동작 확인과 정밀도 점검에 사용됩니다.",
      z4t:"포장 · 출하 구역", z4sub:"SHIPMENT",        z4b:"출하 직전 포장·라벨링·문서 작성을 수행하는 공간. 인수 자료가 함께 정리됩니다.",
      z5t:"자재 보관 구역",   z5sub:"MATERIAL STORAGE", z5b:"입고된 자재의 보관 공간. 도면·BOM 기준으로 위치 식별이 가능하도록 관리됩니다."
    },
    contact: {
      label:  "§ 11 — Contact",
      hA:     "SNJ와 제조 프로젝트를", hB: "논의해보세요",
      lede:   "도면, BOM, 조립 기준서, 검사 기준서를 바탕으로 제조 가능 범위와 진행 방식을 검토합니다.",
      infoK1:"회사",   infoV1:"SNJ Industrial Systems",
      infoK2:"시설",   infoV2:"경기도 화성시 만세구 양감면 정문송산로93번길 10-8",
      infoK3:"이메일", infoK4:"전화",
      pending:"문의 정보 입력 예정",
      inqHdr:"Inquiry Types · 문의 유형",
      inq1t:"OEM 제조 문의",       inq1s:"OEM Manufacturing",
      inq2t:"ODM 개발 문의", inq2s:"ODM Development",
      inq3t:"장비 조립 문의",      inq3s:"Assembly",
      inq4t:"전장 · 배선 문의",    inq4s:"Wiring",
      inq5t:"품질 · 출하 문의",    inq5s:"Quality · Shipment",
      inq6t:"회사소개서 요청",     inq6s:"Company Profile",
      locHdr:"Location · 오시는 길",
      addrShortKR:"정문송산로93번길 10-8",
      addrShortRegion:"화성시 만세구 양감면",
      openMap:"지도 열기"
    },
    foot: {
      sitemap:"Sitemap", location:"Location", contact:"Contact",
      addrKR:  "경기도 화성시 만세구 양감면 정문송산로93번길 10-8",
      addrEN:  "10-8 Jeongmunsongsan-ro 93beon-gil, Yanggam-myeon, Manse-gu, Hwaseong-si, Gyeonggi-do",
      desc:   "반도체·자동화 장비 OEM·ODM 제조 파트너\n검사·자동화 장비의 조립·전장·검사·출하 공정을 통합 관리합니다",
      tag:    "Precision Equipment Manufacturing"
    },
    slot: {
      hero:"정밀 장비 · 제조 현장", bizSemi:"반도체 모듈", bizAuto:"자동화 시스템",
      bizCar:"검사 시스템", bizTurnkey:"조립 공정", capFloor:"제조 시설",
      port:"프로젝트 이미지", fac:"제조 시설"
    }
  },

  en: {
    meta: {
      title: "SNJ Industrial Systems — OEM/ODM Manufacturing Partner for Semiconductor & Automation Equipment",
      desc:  "SNJ Industrial Systems · Turnkey OEM/ODM manufacturing partner for semiconductor and automation equipment. Assembly, wiring, inspection, and shipment under integrated process management."
    },
    nav: { company:"Company", business:"Business", capability:"Capability",
           quality:"Quality", portfolio:"Portfolio", contact:"Contact" },
    header: { langKR:"KR", langEN:"EN" },
    hero: {
      eyebrow: "SNJ Industrial Systems · OEM · ODM · Turnkey",
      titleA:  "Precision OEM/ODM Partner\nfor Semiconductor &",
      titleB:  "Automation Equipment",
      lede:    "SNJ delivers customer-designed equipment\nas production-ready machines.\n\nWe integrate mechanical assembly, electrical wiring,\nfunctional testing, and shipment preparation — supporting semiconductor,\ndisplay, and automation equipment projects.",
      ctaBiz:"Explore Business", ctaContact:"Contact Us",
      metaK1:"Business Areas", metaV1:"Semiconductor · Automation\nAutomotive · Display",
      metaK2:"Facility",       metaV2:"10-8 Jeongmunsongsan-ro 93beon-gil, Yanggam-myeon, Manse-gu, Hwaseong-si, Gyeonggi-do",
      metaV2sub:"Republic of Korea",
      metaK3:"Scope",          metaV3:"Assembly · Wiring · Inspection · Shipment\nOEM · ODM · Turnkey",
      capCap:"SNJ · Production Facility",
      capLoc:"Yanggam-myeon, Hwaseong"
    },
    co: {
      label:"§ 01 — Company Overview", h:"About SNJ",
      desc: "SNJ Industrial Systems is a precision equipment manufacturer specializing in OEM·ODM production of semiconductor and automation equipment.\n\nBased on customer design data, we integrate the core processes of assembly, wiring, inspection, and shipment — focusing on inspection, automation, and material-handling equipment.",
      lede: "SNJ Industrial Systems is an industrial equipment manufacturing partner for precision equipment projects.",
      p1:   "Based on the drawings, BOMs, assembly standards, and inspection criteria provided by our clients, we systematically operate the manufacturing process from equipment assembly and electrical wiring through functional testing and shipment preparation.",
      p2:   "Our role goes beyond simple parts assembly.\n\nWe review project requirements, identify potential manufacturing issues in advance, and reliably manage the flow from build through client sign-off and shipment.",
      hl1t:"Turnkey Manufacturing", hl1sub:"END-TO-END MANUFACTURING",
      hl1b:"We manage drawing review, material intake, assembly, wiring, inspection, and shipment as an integrated process inside our facility.",
      hl2t:"Stage-Based Quality Gates", hl2sub:"STAGE-BASED QA",
      hl2b:"Five inspection gates — material, assembly, wiring, function, shipment — each with separate criteria and recorded results.",
      hl3t:"Zone-Separated Operation", hl3sub:"ZONE-SEPARATED LAYOUT",
      hl3b:"Assembly, wiring, inspection, shipment, and material storage are operated as separated zones to minimize interference between processes.",
      hl4t:"Hwaseong Factory", hl4sub:"HWASEONG FACTORY",
      hl4b:"Located at 10-8 Jeongmunsongsan-ro 93beon-gil, Yanggam-myeon, Manse-gu, Hwaseong-si, Gyeonggi-do. We handle inspection, automation, and material-handling equipment across diverse precision manufacturing projects."
    },
    why: {
      label:"§ 02 — Why SNJ", h:"Why Choose SNJ",
      desc: "SNJ is not a simple sub-assembly vendor.\n\nWe operate as an OEM/ODM partner that owns the manufacturing flow from drawing review through shipment alongside the client. Four principles define how we work.",
      c1t:"Manufacturing-Centric Execution", c1sub:"MANUFACTURING EXECUTION",
      c1b:"We turn drawings and specifications into actual equipment through assembly, wiring, and inspection-focused manufacturing capabilities.",
      c2t:"Stage-Based Inspection", c2sub:"STAGE-BASED QA",
      c2b:"A multi-stage inspection system spanning material intake, assembly, wiring, functional testing, and shipment review.",
      c3t:"OEM/ODM Collaboration", c3sub:"OEM · ODM COLLABORATION",
      c3b:"Flexible manufacturing collaboration aligned with client design standards and project requirements.",
      c4t:"End-to-Shipment Management", c4sub:"SHIPMENT MANAGEMENT",
      c4b:"Packaging, shipment, and client sign-off procedures are managed as a continuation of manufacturing."
    },
    biz: {
      label:"§ 03 — Business", h:"Business Areas",
      desc: "An overview of the equipment categories SNJ manufactures, what materials we receive from clients, what we execute, and what we deliver.\n\nEvery project starts from client drawings and specifications, with detailed scope defined together during inquiry.",
      rowK1:"Equipment", rowK2:"Client Input", rowK3:"SNJ Scope", rowK4:"Deliverable",
      c1t:"Semiconductor Inspection Equipment", c1sub:"SEMICONDUCTOR INSPECTION",
      c1i:"Inspection and handling equipment for semiconductor back-end lines. Complex equipment combining precision transport modules and optical inspection units is assembled, wired, and tested in-house.",
      c1v1:"Loader · Handler · Vision Inspection · Inspection & Transport Equipment",
      c1v2:"Mechanical drawings · Wiring schematics · BOM · Work specifications",
      c1v3:"Material intake · Assembly · Wiring · Functional testing · Outbound review",
      c1v4:"Completed equipment · Inspection records · Shipment documents",
      c2t:"Industrial Automation Equipment", c2sub:"INDUSTRIAL AUTOMATION",
      c2i:"Testers, transport modules, and utility equipment for industrial automation lines. From repeatable production lines to early-stage manufacturing of new models.",
      c2v1:"Testers · Transport modules · Automation line modules",
      c2v2:"Mechanical drawings · Control specifications · Sequence data · BOM",
      c2v3:"Mechanical assembly · Wiring · Sequence verification · Shipment prep",
      c2v4:"Completed equipment · Operation records · Handover documents",
      c3t:"Automotive QA Equipment", c3sub:"AUTOMOTIVE QA EQUIPMENT",
      c3i:"Inspection equipment for automotive components and electronic parts. We assemble, wire, and test inspection cells, electrical-check stations, and component handling modules.",
      c3v1:"Inspection cells · Electrical check stations · Component handling modules",
      c3v2:"Mechanical drawings · Inspection sequences · Wiring drawings · Specifications",
      c3v3:"Assembly · Wiring · Inspection sequence verification · Outbound review",
      c3v4:"Completed equipment · Inspection records · Shipment documents",
      c4t:"OEM · ODM Turnkey", c4sub:"TURNKEY MANUFACTURING",
      c4i:"Turnkey collaboration where SNJ integrates the full flow from material scheduling through assembly, wiring, inspection, and shipment. Partial-scope collaboration is also available.",
      c4v1:"Precision equipment generally · OEM manufacturing · ODM development",
      c4v2:"Drawings · BOM · Manufacturing specs · Commissioning criteria",
      c4v3:"Material scheduling · Assembly · Wiring · Inspection · Commissioning · Shipment",
      c4v4:"Completed equipment · Process inspection records · Handover documents"
    },
    mp: {
      label:"§ 04 — Manufacturing Process", h:"Manufacturing Flow",
      desc: "SNJ's manufacturing runs in eight stages from drawing review through shipment.\n\nEach stage has defined ownership and inspection criteria, and stage transitions are governed by records and checklists.",
      s1t:"Drawing Review",       s1sub:"DRAWING REVIEW",   s1b:"Review of mechanical/electrical drawings, BOM, and specifications with manufacturability notes.",
      s2t:"Material Schedule",    s2sub:"MATERIAL SCHEDULE",s2b:"BOM-based material ordering or intake scheduling.",
      s3t:"Material Intake",      s3sub:"INTAKE",           s3b:"Verification of intake materials against drawings, then storage allocation.",
      s4t:"Mechanical Assembly",  s4sub:"ASSEMBLY",         s4b:"Precision mechanical assembly aligned with model-specific work standards.",
      s5t:"Wiring",               s5sub:"WIRING",           s5b:"Schematic-based wiring, labeling, and insulation/continuity checks.",
      s6t:"Functional Test",      s6sub:"FUNCTIONAL TEST",  s6b:"Sequence, precision, and repeatability verification with commissioning.",
      s7t:"Packing · Shipment",   s7sub:"PACKING",          s7b:"Packaging, labeling, and shipment documentation per outbound specification.",
      s8t:"Client Sign-off",      s8sub:"SIGN-OFF",         s8b:"Final inspection before shipment and client acceptance confirmation."
    },
    cap: {
      label:"§ 05 — Capability", h:"Manufacturing Capability",
      desc: "We execute six core processes in-house: mechanical assembly, electrical wiring, actuator mounting, utility connections, functional testing, and shipment preparation.\n\nBuild steps and inspection steps are managed separately.",
      photoTag:"Production Floor — Hwaseong Factory",
      c1t:"Mechanical Assembly", c1sub:"MECHANICAL ASSEMBLY", c1b:"Precision assembly based on mechanical drawings, with quality managed against model-specific standards.",
      c2t:"Wiring",              c2sub:"WIRING",              c2b:"Electrical and control wiring, schematic verification, labeling, and insulation/continuity testing.",
      c3t:"Actuator Mounting",   c3sub:"ACTUATOR MOUNTING",   c3b:"Installation, alignment, and initial setup of sensors, servo/stepper motors, and pneumatic cylinders.",
      c4t:"Utility Connection",  c4sub:"UTILITY CONNECTION",  c4b:"Pneumatic, vacuum, coolant, and power line connections, with leak and pressure verification.",
      c5t:"Functional Testing",  c5sub:"FUNCTIONAL TEST",     c5b:"Functional testing and commissioning to verify sequence, precision, and repeatability prior to shipment.",
      c6t:"Shipment Preparation",c6sub:"SHIPMENT PREP",       c6b:"Outbound specification review, packaging, labeling, and shipment documentation."
    },
    qa: {
      label:"§ 06 — Quality System", h:"Quality Management",
      desc: "Quality cannot be guaranteed by a single inspection at shipment.\n\nSNJ embeds five inspection gates inside the manufacturing flow, each with separated criteria. Every gate is operated via checklists, and results are recorded per project.",
      s1t:"Material Intake",  s1sub:"MATERIAL INTAKE",  s1b:"Verify intake materials against drawings/specifications, check quantity and external condition, then assign storage location.",
      s2t:"Assembly Review",  s2sub:"ASSEMBLY REVIEW",  s2b:"Drawing-based inspection after assembly, including alignment and fastening checks.",
      s3t:"Wiring Audit",     s3sub:"WIRING AUDIT",     s3b:"Cross-check wiring labels against schematics, measure insulation and continuity, and verify wiring layout.",
      s4t:"Functional Test",  s4sub:"FUNCTIONAL TEST",  s4b:"Verify sequence operation, precision, repeatability, and safety interlocks; results logged in inspection records.",
      s5t:"Outbound Sign-off",s5sub:"OUTBOUND SIGN-OFF",s5b:"Verify final appearance, accessories, labels, and shipment documents before client handover.",
      noteStrong: "Inspection records · Checklists.",
      noteBody:   " Build steps and inspection steps are managed separately, with checklists derived from model-specific standard procedures. Results are recorded per project and shared with the client at handover."
    },
    wf: {
      label:"§ 07 — Project Workflow", h:"Project Flow",
      desc: "From inquiry through client sign-off, SNJ projects move through eight defined stages.\n\nEach stage specifies the materials shared with the client and the verification points, so both sides track progress against a consistent baseline.",
      i1t:"Inquiry · Intake",          i1p:"Intake",   i1b:"Discuss project scope, timeline, and deliverables, and receive drawings, BOM, and specifications.",
      i2t:"Drawing · BOM Review",      i2p:"Review",   i2b:"Review drawings and BOM from a manufacturability standpoint and share required clarifications.",
      i3t:"Manufacturing Schedule",    i3p:"Schedule", i3b:"Build a manufacturing schedule reflecting material intake timing and process sequence, then confirm with the client.",
      i4t:"Material Intake Check",     i4p:"Intake",   i4b:"Verify incoming materials and resolve any missing or mismatched items with the client.",
      i5t:"Assembly · Wiring",         i5p:"Build",    i5b:"Execute mechanical assembly and wiring with stage-based inspection records.",
      i6t:"Inspection · Commissioning",i6p:"Verify",   i6b:"Verify operation, precision, and repeatability through functional testing and commissioning.",
      i7t:"Packing · Shipment",        i7p:"Ship",     i7b:"Pack and label per outbound spec, and finalize shipment documents together.",
      i8t:"Client Sign-off Support",   i8p:"Sign-off", i8b:"Respond to client acceptance checks and any final adjustments, and close out handover documentation."
    },
    growth: {
      label:"§ 08 — SNJ Growth Overview", h:"SNJ Growth Momentum",
      desc: "SNJ continues to build growth momentum through stable manufacturing operations, strengthened quality systems, and an expanding equipment portfolio for semiconductor and automation industries.",
      c1lbl:"CHART · 01 · LINE",  c1t:"Business Growth Trend", c1sub:"사업 성장 흐름",
      c1cap:"SNJ's growth trajectory continues to rise as its manufacturing execution and business foundation become more established.",
      c2lbl:"CHART · 02 · BAR",   c2t:"Operational Expansion", c2sub:"운영 확장 흐름",
      c2cap:"Operational capability continues to expand as SNJ accumulates project experience and manufacturing response capacity.",
      c3lbl:"CHART · 03 · DONUT", c3t:"Growth Foundation",     c3sub:"성장 기반 요소",
      c3cap:"SNJ's growth is supported by a balanced foundation of production capability, quality management, delivery execution, and expansion readiness.",
      legend1:"Production Capability", legend2:"Quality Management",
      legend3:"Delivery Execution",    legend4:"Expansion Readiness",
      donutCenter1:"GROWTH", donutCenter2:"FOUNDATION"
    },
    port: {
      label:"§ 09 — Portfolio", h:"Case References",
      desc: "Client and project information is presented within publicly shareable scope.\n\nEach case is anonymized and described by industry, purpose, SNJ's scope, and deliverables.",
      rowK1:"Industry", rowK2:"Purpose", rowK3:"SNJ Scope", rowK4:"Deliverable",
      c1cat:"Semiconductor", c1t:"Semiconductor Inspection Equipment",
      c1v1:"Semiconductor back-end", c1v2:"OEM inspection equipment manufacturing",
      c1v3:"Assembly · Wiring · Inspection · Shipment", c1v4:"Completed equipment · Inspection records · Shipment documents",
      c1note:"Disclosure note · Detailed information is available under separate agreement.",
      c2cat:"Semiconductor", c2t:"Precision Inspection Line Assembly",
      c2v1:"Semiconductor back-end", c2v2:"Precision inspection equipment manufacturing",
      c2v3:"Assembly · Wiring · Commissioning", c2v4:"Completed equipment · Commissioning records",
      c2note:"Disclosure note · Drawings and specifications are confidential.",
      c3cat:"Display · Module", c3t:"Display Inspection Module",
      c3v1:"Display", c3v2:"Inspection module partial manufacturing",
      c3v3:"Mechanical assembly · Wiring", c3v4:"Completed modules · Outbound inspection records",
      c3note:"Disclosure note · Detailed specifications are not publicly shared."
    },
    fac: {
      label:"§ 10 — Facility", h:"Facility",
      desc: "Located at 10-8 Jeongmunsongsan-ro 93beon-gil, Yanggam-myeon, Manse-gu, Hwaseong-si, Gyeonggi-do. The facility is operated with zone separation across assembly, wiring, inspection, shipment, and material storage,\narranged with consideration for workflow and material movement.",
      z1t:"Assembly Zone",    z1sub:"ASSEMBLY",         z1b:"Mechanical assembly workspace with model-specific workstations and designated tool/instrument locations.",
      z2t:"Wiring Zone",      z2sub:"WIRING",           z2b:"Wiring and insulation/continuity inspection workspace, with schematic review materials retained.",
      z3t:"Test Zone",        z3sub:"TEST",             z3b:"Workspace for functional testing and commissioning — sequence operation and precision verification.",
      z4t:"Shipment Zone",    z4sub:"SHIPMENT",         z4b:"Workspace for outbound packing, labeling, and documentation, including handover material assembly.",
      z5t:"Material Storage", z5sub:"MATERIAL STORAGE", z5b:"Storage for incoming materials, organized for location identification based on drawings and BOM."
    },
    contact: {
      label:"§ 11 — Contact",
      hA:"Discuss your manufacturing", hB:"project with SNJ",
      lede:"SNJ reviews drawings, BOMs, assembly standards, and inspection criteria to define a practical manufacturing scope and execution approach.",
      infoK1:"Company",  infoV1:"SNJ Industrial Systems",
      infoK2:"Facility", infoV2:"10-8 Jeongmunsongsan-ro 93beon-gil, Yanggam-myeon, Manse-gu, Hwaseong-si, Gyeonggi-do",
      infoK3:"Email",    infoK4:"Phone",
      pending:"Contact details to be announced",
      inqHdr:"Inquiry Types",
      inq1t:"OEM Manufacturing",  inq1s:"OEM 제조 문의",
      inq2t:"ODM Development",    inq2s:"ODM 개발 문의",
      inq3t:"Assembly",           inq3s:"장비 조립",
      inq4t:"Wiring",             inq4s:"전장 · 배선",
      inq5t:"Quality · Shipment", inq5s:"품질 · 출하",
      inq6t:"Company Profile",    inq6s:"회사소개서 요청",
      locHdr:"Location · Find Us",
      addrShortKR:"10-8 Jeongmunsongsan-ro 93beon-gil",
      addrShortRegion:"Yanggam-myeon, Hwaseong",
      openMap:"Open Map"
    },
    foot: {
      sitemap:"Sitemap", location:"Location", contact:"Contact",
      addrKR:  "경기도 화성시 만세구 양감면 정문송산로93번길 10-8",
      addrEN:  "10-8 Jeongmunsongsan-ro 93beon-gil, Yanggam-myeon, Manse-gu, Hwaseong-si, Gyeonggi-do",
      desc:   "OEM/ODM manufacturing partner for semiconductor and automation equipment\nIntegrated support for assembly, wiring, inspection, and shipment",
      tag:    "Precision Equipment Manufacturing"
    },
    slot: {
      hero:"Precision Equipment", bizSemi:"Semiconductor Module", bizAuto:"Automation System",
      bizCar:"Inspection System", bizTurnkey:"Assembly Process", capFloor:"Facility View",
      port:"Case Study Image", fac:"Facility View"
    }
  }
};

function getI18n(lang, dotKey) {
  const parts = dotKey.split(".");
  let cur = I18N[lang] || I18N.ko;
  for (const p of parts) {
    if (cur && typeof cur === "object" && p in cur) cur = cur[p];
    else return null;
  }
  return (typeof cur === "string") ? cur : null;
}

function escapeHTML(s) {
  return s.replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));
}

function applyLanguage(lang) {
  if (lang !== "ko" && lang !== "en") lang = "ko";
  document.documentElement.lang = lang;
  document.documentElement.setAttribute("data-lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const txt = getI18n(lang, key);
    if (txt == null) return;
    if (txt.includes("\n")) {
      // \n\n → visual paragraph break, \n → single line break.
      // We render both via <br>, but the double form adds an empty line
      // through a span that carries margin via CSS (.br--gap).
      const html = txt
        .split("\n\n").map(para =>
          para.split("\n").map(escapeHTML).join("<br>")
        ).join('<br><span class="br--gap"></span>');
      el.innerHTML = html;
    } else {
      el.textContent = txt;
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    el.dataset.i18nAttr.split(",").forEach(pair => {
      const [attr, key] = pair.split(":").map(s => s.trim());
      const txt = getI18n(lang, key);
      if (attr && txt != null) el.setAttribute(attr, txt);
    });
  });

  const t = getI18n(lang, "meta.title");
  if (t) document.title = t;
  const d = getI18n(lang, "meta.desc");
  if (d) {
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", d);
  }

  document.querySelectorAll(".lang-toggle__opt").forEach(b => {
    const on = (b.dataset.lang === lang);
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });
}

function initLang() {
  const KEY = "snj-lang";
  let saved = localStorage.getItem(KEY);
  if (saved !== "ko" && saved !== "en") saved = "ko";
  applyLanguage(saved);

  document.addEventListener("click", e => {
    const t = e.target.closest(".lang-toggle__opt");
    if (!t) return;
    const next = t.dataset.lang;
    if (next !== "ko" && next !== "en") return;
    localStorage.setItem(KEY, next);
    applyLanguage(next);
  });
}

const ICON_MOON = `<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
const ICON_SUN  = `<svg class="icon-sun"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`;

function buildHeader(base) {
  const navItems = NAV.map(n => {
    if (n.enabled) {
      return `<a href="${n.anchor ? n.href : (base + n.href)}" class="nav__item" data-nav="${n.id}" data-i18n="${n.i18n}">${n.id}</a>`;
    }
    return `<span class="nav__item nav__item--disabled" aria-disabled="true" data-i18n="${n.i18n}">${n.id}</span>`;
  }).join("");

  return `
  <header class="site-head">
    <div class="site-head__row">
      <a href="${base}index.html" class="brand" aria-label="${BRAND.name}">
        <img class="brand__mark brand__mark--light" src="${base}assets/images/brand/snj-logo-light.png" alt="${BRAND.name}">
        <img class="brand__mark brand__mark--dark"  src="${base}assets/images/brand/snj-logo-dark.png"  alt="${BRAND.name}" aria-hidden="true">
      </a>
      <nav class="nav" id="primary-nav">${navItems}</nav>
      <div class="head-actions">
        <div class="lang-toggle" role="group" aria-label="Language">
          <button class="lang-toggle__opt" data-lang="ko" data-i18n="header.langKR" aria-pressed="true">KR</button>
          <button class="lang-toggle__opt" data-lang="en" data-i18n="header.langEN" aria-pressed="false">EN</button>
        </div>
        <button class="theme-toggle" id="theme-toggle" aria-label="Theme">${ICON_MOON}${ICON_SUN}</button>
        <button class="menu-toggle" id="menu-toggle" aria-label="Menu"><span class="bars"><span></span></span></button>
      </div>
    </div>
  </header>
  <div class="head-spacer"></div>`;
}

function buildFooter(base) {
  const sitemap = NAV.map(n => {
    if (n.enabled) {
      return `<li><a href="${n.anchor ? n.href : (base + n.href)}" data-i18n="${n.i18n}">${n.id}</a></li>`;
    }
    return `<li><span class="pending" data-i18n="${n.i18n}">${n.id}</span></li>`;
  }).join("");

  const contactBlock = CONTACT.ready
    ? `<li><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></li>
       <li><a href="tel:${CONTACT.tel.replace(/-/g,"")}">${CONTACT.tel}</a></li>`
    : `<li><span class="pending" data-i18n="contact.pending">문의 정보 입력 예정</span></li>`;

  return `
  <footer class="site-foot">
    <div class="wrap">
      <div class="foot-grid">
        <div class="foot-brand">
          <img class="brand__mark brand__mark--foot brand__mark--light" src="${base}assets/images/brand/snj-logo-light.png" alt="${BRAND.name}">
          <img class="brand__mark brand__mark--foot brand__mark--dark"  src="${base}assets/images/brand/snj-logo-dark.png"  alt="${BRAND.name}" aria-hidden="true">
          <h3 class="foot-name">${BRAND.name}</h3>
          <p class="foot-desc" data-i18n="foot.desc"></p>
        </div>

        <div class="foot-col foot-col--sitemap">
          <h6 data-i18n="foot.sitemap">Sitemap</h6>
          <ul>${sitemap}</ul>
        </div>

        <div class="foot-col foot-col--location">
          <h6 data-i18n="foot.location">Location</h6>
          <ul>
            <li><span class="muted" data-i18n="foot.addrKR">경기도 화성시 만세구 양감면 정문송산로93번길 10-8</span></li>
            <li><span class="muted" data-i18n="foot.addrEN">10-8 Jeongmunsongsan-ro 93beon-gil, Yanggam-myeon, Manse-gu, Hwaseong-si, Gyeonggi-do</span></li>
          </ul>
        </div>

        <div class="foot-col">
          <h6 data-i18n="foot.contact">Contact</h6>
          <ul>${contactBlock}</ul>
        </div>
      </div>

      <div class="foot-bottom">
        <span class="legal">© ${new Date().getFullYear()} ${BRAND.name}</span>
        <span class="legal">${BRAND.short} · <span data-i18n="foot.tag">Precision Equipment Manufacturing</span></span>
      </div>
    </div>
  </footer>`;
}

function injectLayout() {
  const headerHost = document.getElementById("site-header");
  const footerHost = document.getElementById("site-footer");
  const base = (headerHost && headerHost.dataset.base) || "";
  if (headerHost) headerHost.outerHTML = buildHeader(base);
  if (footerHost) footerHost.outerHTML = buildFooter(base);

  const mt  = document.getElementById("menu-toggle");
  const nav = document.getElementById("primary-nav");
  if (mt && nav) mt.addEventListener("click", () => nav.classList.toggle("is-open"));
  nav && nav.querySelectorAll(".nav__item").forEach(a => {
    a.addEventListener("click", () => nav.classList.remove("is-open"));
  });

  const sections = document.querySelectorAll("section[id]");
  if (!sections.length || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll(".nav__item").forEach(n => n.classList.remove("is-active"));
        const id = e.target.id;
        const link = document.querySelector(`.nav__item[data-nav][href="#${id}"]`);
        if (link) link.classList.add("is-active");
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });
  sections.forEach(s => io.observe(s));
}

function initTheme() {
  const KEY = "snj-theme";
  const saved = localStorage.getItem(KEY);
  if (saved === "dark" || saved === "light") {
    document.documentElement.setAttribute("data-theme", saved);
  }
  document.addEventListener("click", e => {
    const t = e.target.closest("#theme-toggle");
    if (!t) return;
    const cur = document.documentElement.getAttribute("data-theme");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(KEY, next);
  });
}

function activateSlots() {
  document.querySelectorAll(".slot[data-photo]").forEach(slot => {
    const url = slot.dataset.photo;
    if (!url) return;
    const img = new Image();
    img.onload  = () => { slot.style.setProperty("--photo", `url("${url}")`); slot.classList.add("has-image"); };
    img.onerror = () => { /* keep placeholder */ };
    img.src = url;
  });
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(el => el.classList.add("is-in")); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -40px 0px" });
  els.forEach(el => io.observe(el));
}

/* Growth chart looping — gentle, viewport-gated, motion-reduced aware. */
function initGrowthCharts() {
  const cards = document.querySelectorAll(".gcard");
  if (!cards.length) return;

  const CYCLE_MS = 7000;
  const REST_MS  = 2000;
  const reduced  = window.matchMedia &&
                   window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduced || !("IntersectionObserver" in window)) {
    cards.forEach(c => c.classList.add("is-active"));
    return;
  }

  const state = new WeakMap();

  const runCycle = (card) => {
    const s = state.get(card);
    if (!s || !s.visible) return;
    card.classList.remove("is-active");
    void card.offsetWidth;
    card.classList.add("is-active");
    s.timer = setTimeout(() => {
      card.classList.remove("is-active");
      s.timer = setTimeout(() => runCycle(card), REST_MS);
    }, CYCLE_MS);
  };

  const stopCycle = (card) => {
    const s = state.get(card);
    if (s && s.timer) { clearTimeout(s.timer); s.timer = null; }
    card.classList.remove("is-active");
  };

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      let s = state.get(e.target);
      if (!s) { s = { timer: null, visible: false }; state.set(e.target, s); }
      if (e.isIntersecting && !s.visible) {
        s.visible = true;
        runCycle(e.target);
      } else if (!e.isIntersecting && s.visible) {
        s.visible = false;
        stopCycle(e.target);
      }
    });
  }, { threshold: 0.34 });

  cards.forEach(c => io.observe(c));
}

document.addEventListener("DOMContentLoaded", () => {
  injectLayout();
  initTheme();
  initLang();
  activateSlots();
  initReveal();
  initGrowthCharts();
  window.SNJ = { BRAND, CONTACT, NAV, I18N, applyLanguage };
});
