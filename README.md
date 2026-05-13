# SNJ Industrial Systems — Corporate Site (v3.2)

반도체·자동화 장비 OEM·ODM Turnkey 제조 파트너 SNJ Industrial Systems의 공식 정적 홈페이지 빌드입니다. 단일 정적 사이트로 구성되며 빌드 도구·번들러·서버 의존성 없이 정적 호스팅 또는 로컬 파일 시스템에서 그대로 동작합니다.

모든 화면 및 문서 표기는 **SNJ Industrial Systems** 또는 **SNJ**로 통일되어 있습니다.

---

## 1. v3.2 변경점

| 항목 | 내용 |
|---|---|
| 브랜드 표기 | 화면·메타·주석·alt·aria·푸터·콘솔 출력 모두 SNJ 단독 기준으로 정리 |
| 새 로고 | 메탈릭 SNJ + 파란 N 강조 + INDUSTRIAL SYSTEMS 가로형 PNG, 흰 배경 알파 처리 |
| 파비콘 | 16·32·180px + `favicon.ico` 4종 동시 제공 |
| 헤더 로고 | 36×36 정사각 → 38×130 가로형 확대 (모바일 32×110) |
| 언어 토글 | Header 우측 `[ KR \| EN ]` segmented control, 한국어 기본, `localStorage("snj-lang")`, `<html lang>` 동기화 |
| i18n 시스템 | `data-i18n` 속성 기반, JS 사전 lookup, KR/EN 동시 정의, 본문 카드 전체 적용 |
| 성장 그래프 | 꺾은선·막대·도넛 반복 애니메이션 유지, `cubic-bezier(.45,.05,.25,1)` easing, 7s 사이클 + 2s 휴식 |
| Glow 효과 | 깜빡임 제거, 3.2s 부드러운 drop-shadow 펄스 |
| Growth disclaimer | 그래프 하단 안내 박스 (KR/EN i18n) |
| 문구 완화 | 구역·조달 범위·작업 기준·검수 표현을 실제 운영 범위에 맞춰 완화 |
| 외부 폰트 CDN | Pretendard CDN `@import` 주석 처리, 시스템 폰트 우선 스택 |
| 사진 폴더 구조 | 9개 카테고리 (`brand·hero·business·process·capability·quality·portfolio·facility·contact`) |

### v3.2.1 polish

| 항목 | 내용 |
|---|---|
| 슬롯 사진 crop | `background-position` 변수화. 카테고리별 기본값 + 슬롯별 `--photo-pos: X% Y%` 오버라이드 가능. 사진 로드 실패 시 placeholder grid가 fallback color로 비춰지도록 `background-color` 추가 |
| Growth 모바일 | 640px 이하 카드 `min-height` 380→320, padding 28/24→22/18, gap 22→16, 차트 max-height 220→180, legend·caption typography 축소. 980~640 중간 구간엔 padding만 약간 줄여 답답함 완화 |
| Header 토글 간격 | `head-actions` gap 8→10, KR/EN 토글과 Theme 토글 사이에 1px subtle separator (다크모드 대비 별도) |

### v3.2.2 사진 후보 도입

| 항목 | 내용 |
|---|---|
| 사진 배치 | 회사소개서 추출 후보 22장을 `assets/images/{category}/`에 사용자 매핑대로 배치 |
| 슬롯 활성/대기 분리 | 식별 정보 노출(차량 번호판·외부 라벨·장비 시리얼·모델명) 또는 저해상도 사진은 `data-photo-pending` 속성으로 비활성화 → placeholder 유지. 마스킹/재촬영 후 `data-photo`로 전환만 하면 활성화 |
| 활성 슬롯 | 6개 — hero, biz-auto, biz-car, cap-floor, facility-03, facility-04. 각 슬롯에 사진 구도에 맞춘 `--photo-pos` 인라인 오버라이드 적용 |
| 대기 슬롯 | 8개 — biz-semi, biz-turnkey, port-01~03, facility-01·02·05 |
| 사진 사용권 | 사용자 메모 그대로 README §5.3·§5.4에 마스킹 필요 항목·추가 촬영 필요 항목 정리 |

### v3.2.3 hotfix

| 항목 | 내용 |
|---|---|
| **사진 렌더링 버그 수정** | tokens.css의 슬롯 활성 셀렉터 `.slot[style*="--photo"]` → `.slot.has-image`로 정정. `[style*="--photo"]`가 인라인 `--photo-pos` 속성에도 부분 매칭되어 placeholder/사진 둘 다 보이지 않던 문제 해결. main.js는 이미 사진 로드 성공 시 `has-image` 클래스를 추가하므로 매칭 동작은 동일 |
| 주소 정정 | "경기도 화성시 양감면" → **"경기도 화성시 만세구 양감면 정문송산로93번길 10-8"** 로 전체 갱신. KR/EN 사전 + index.html 인라인 fallback 모두 정합 |

### v3.2.4 듀얼 모드 로고

| 항목 | 내용 |
|---|---|
| 새 로고 2종 | 라이트 모드용 (네이비 SNJ + 파란 N) + 다크 모드용 (흰 SNJ + 파란 N). 배경 투명화 처리 완료 |
| 자동 스왑 | 헤더/푸터에 두 `<img>`를 함께 렌더하고 CSS로 테마별 보임/숨김 처리 (`[data-theme="dark"]` 시 다크 로고 노출). DOM 변경 없이 즉시 전환되어 layout shift 없음 |
| 파일 경로 | `assets/images/brand/snj-logo-light.png` (1360×597) / `snj-logo-dark.png` (1361×601). `snj-logo.png`는 라이트 버전 별칭으로 유지 |
| 파비콘 | 라이트 로고(네이비) 기준으로 재생성 — 16/32/180px 및 `favicon.ico`. 다크 모드 브라우저 탭에서도 가시성 확보 |

### v3.2.5 타이포그래피·문단 정리

| 항목 | 내용 |
|---|---|
| Growth disclaimer 박스 제거 | "※ 세부 수치는 공개하지 않으며..." 텍스트 + 감싸는 박스를 HTML/CSS/사전(KR·EN)에서 완전 삭제 |
| 섹션 타이틀 마침표 제거 | 10개 섹션의 h2 끝 `.` 마침표를 KR/EN 사전 + HTML fallback에서 일괄 제거 (`SNJ의 성장 흐름`, `프로젝트 진행 흐름`, `시설`, `사례` 등). Contact 섹션 hB도 동일 처리 |
| 본문 단락 분리 | 다문장으로 한 줄에 길게 묶여 있던 desc/lede/intro 텍스트의 첫 문장 뒤에 단락 여백 삽입. KR/EN 사전 26개 + HTML fallback 15개. `applyLanguage()`가 사전 문자열의 `\n\n`을 만나면 0.5em spacer (`.br--gap`)를 삽입하여 자연스러운 단락 끊김을 만듦 |

### v3.2.6 레이아웃·주소·테마 정리

| 항목 | 내용 |
|---|---|
| 주소 완성형 통일 | KR `경기도 화성시 만세구 양감면 정문송산로93번길 10-8` · EN `10-8 Jeongmunsongsan-ro 93beon-gil, Yanggam-myeon, Manse-gu, Hwaseong-si, Gyeonggi-do`. Footer 전용 `foot.addrKR` / `foot.addrEN` 키를 도입해 Location 컬럼은 항상 한글 1줄 + 영문 1줄 구조 |
| Growth 도넛 범례 2×2 grid | `.gcard--donut .glegend`를 grid 2열로 고정. flex-wrap에 의한 1줄 붙음 현상 제거. 420px 이하에서만 1열 전환 |
| Contact 3분할 grid | `.cta__inner` 폭 기준을 `var(--max)`로 변경하여 다른 섹션과 좌측 정렬 일치. 데스크톱은 카피 / 정보 / 문의 3컬럼 (`0.95fr 0.75fr 1.1fr`). 1180px 이하 2열, 760px 이하 1열 |
| Contact 정보 카드 | `.cta__info` 2열 grid + `--full` 변형으로 주소 행은 전체폭. 이메일/전화는 좌우 2열 |
| Contact padding 축소 | `clamp(72px, 9vw, 120px)` → `clamp(52px, 6vw, 84px)` |
| Footer sitemap 2열 | `.foot-col--sitemap ul`을 2열 grid로. Company/Business · Capability/Quality · Portfolio/Contact 배열 |
| Footer grid 재배치 | `minmax(320, 1.3fr) minmax(220, .8fr) minmax(420, 1.2fr) minmax(220, .7fr)`. Location 칼럼 최소 420px 확보 |
| Footer padding 축소 | `80px 0 28px` → `48px 0 24px`. `padding-bottom` 56→32 |
| Footer 설명문 2줄 | `foot.desc`에 `\n` 마커. `min-height: 48px`로 KR/EN 전환 시 흔들림 방지 |
| Contact/Footer 라이트·다크 토큰 | `--contact-bg`, `--contact-panel`, `--contact-border`, `--contact-title`, `--contact-text`, `--contact-muted`, `--contact-accent`, `--footer-bg`, `--footer-title`, `--footer-text`, `--footer-muted`, `--footer-rule` 등 12개 토큰 신규. 라이트 기본 + 다크 오버라이드로 두 모드에서 모두 자연스럽게 보임 |
| Hero titleB 마침표 제거 | `정밀 OEM/ODM 파트너.` → `정밀 OEM/ODM 파트너`. EN도 동일 처리 |
| KR/EN 흔들림 방지 | `.hero__title`, `.hero__lede`, `.hero__meta-cell`, `.co-hl__body`, `.why-card__body`, `.biz-card__intro`, `.cta__title`, `.cta__lede`, `.inq-item`, `.foot-desc`, `.foot-col--location`에 `min-height` 지정. 모바일(760px 이하)에선 해제 |

### v3.2.7 Hero 배경 + Contact 정렬·압축

| 항목 | 내용 |
|---|---|
| Hero 회사 전경 배경 | 사용자 제공 외관 사진(`assets/images/hero/factory-front.jpg`, 1509×861)을 첫 화면 배경으로 적용. 검은 패딩 트림 + 2000px 이내 리사이즈. `.hero--bg .hero__bg`(z-index -2) + `.hero--bg .hero__overlay`(z-index -1, 2단 그라데이션: linear navy 78~62~78% + radial blue accent)로 가독성 확보 |
| Hero 카드 슬롯 제거 | 기존 `.hero__image` 카드의 `hero-main` 슬롯 제거. 이제 활성 사진 슬롯 5개 (biz-auto, biz-car, cap-floor, facility-03, facility-04) |
| Hero 콘텐츠 콘트라스트 | `.hero--bg .hero__title`에 text-shadow, `.hero--bg .hero__meta-cell`은 glass panel(bg `rgba(8,18,38,.52)` + backdrop-filter blur 8px)로 처리. `.btn--ghost` 라이트 콘트라스트 보강 |
| Contact 3분할 정합 | grid `minmax(300, .95fr) minmax(320, .95fr) minmax(420, 1.15fr)`로 갱신. `align-items: start`로 세 영역 상단선 일치. padding `clamp(48, 6vw, 76)` |
| Contact 정보 카드 컴팩트 | `.cta__info` 2열 grid. `--full` 변형으로 회사/시설은 전체폭, 이메일/전화는 좌우 2열. 주소는 `.addr-line--kr`(한글, 13px) + `.addr-line--en`(영문, 11.5px mono, muted)로 2줄 명시 |
| Inquiry 헤더 grid 내장 | 기존 `.cta__inquiries > label + .cta__inquiry` 2단계 구조 → `.cta__inquiry > .cta__inquiry-header(grid-column 1/-1) + 6 inq-item` 1단계 구조로 단순화 |
| KR/EN 흔들림 보강 | `.hero__title clamp(108, 11vw, 156)`, `.hero__lede 112`, `.hero__meta-cell 92`, `.cta__title clamp(86, 8vw, 118)`, `.cta__lede 58` |

### v3.2.8 Contact 3-column + Google Map embed

| 항목 | 내용 |
|---|---|
| Contact 3분할 재정의 | grid `minmax(280, 0.9fr) minmax(260, 0.85fr) minmax(360, 1.1fr)`. `align-items: stretch`로 세 컬럼 top/bottom 라인 정확히 일치. 각 컬럼 내부를 `flex column`으로 잡아 좌측 정보 카드 / 가운데 Inquiry / 우측 지도 카드가 같은 높이로 stretch |
| Contact 제목 두 줄 고정 | `SNJ와 제조 프로젝트를` / `논의해보세요` 두 줄로 강제 줄바꿈 |
| Inquiry 6 카드 세로 1열 | `.cta__inquiry-items` wrapper에 grid `repeat(6, 1fr)`. 카드 내부 텍스트 `white-space: nowrap` |
| inq2 문구 변경 | `ODM 개발 · 제작 문의` → `ODM 개발 문의` |
| 우측 Location 지도 카드 | Google Maps iframe embed + 다크 모드 invert/hue-rotate 필터 + "지도 열기" 외부 링크 |

### v3.2.9 주소 정정 + Hero 제목 3줄 + Hero 메타 정리

| 항목 | 내용 |
|---|---|
| 주소 번지 정정 | `정문송산로93번길 10-75` → `정문송산로93번길 10-8`로 전 파일 일괄 정정 |
| 지도 좌표 적용 | 사용자 공유 링크에서 추출한 좌표 `37.098473, 126.979473` 기반 정확한 핀 위치로 iframe 교체. zoom level 17 |
| Hero 제목 3줄 강제 | `반도체·자동화 장비` / `제조를 위한` / `정밀 OEM/ODM 파트너`(accent) |
| Hero lede 4줄 강제 | 사용자 의도된 띄어쓰기 적용 |
| Hero 메타 우측 중앙 + 테두리 제거 | glass panel(배경+테두리+blur) 모두 제거, 좌측 1px vertical bar + dot marker로 단순화 |

### v3.2.10 Hero 라이트/다크 + 섹션 헤드 desc 정합

| 항목 | 내용 |
|---|---|
| Hero 라이트 모드 overlay | 진한 네이비 워시(rgba 0.78)에서 옅은 화이트 워시(rgba 246,249,253 / 0.86~0.72~0.88)로 전환. 회사 전경 사진이 더 자연스럽게 노출되면서도 콘트라스트 확보 |
| Hero 라이트 모드 텍스트 | 흰 글자 → 다크 톤(`#101820` title, `rgba(34,48,68,.92)` lede, `text-shadow rgba(255,255,255)`)으로 전환. accent는 `--blue-500`로 강조. eyebrow / meta 라벨도 라이트 톤에 맞춰 재정의 |
| Hero 메타 라이트 모드 | 좌측 vertical bar `rgba(47,123,201,.40)`, dot marker `--blue-500` + `rgba(47,123,201,.18)` halo, k/v 색상 모두 라이트 톤으로 정합 |
| CTA 버튼 라이트 모드 | `.btn--ghost` 테두리 `rgba(16,24,32,.40)`, hover bg `rgba(16,24,32,.06)`로 라이트 모드 가독성 확보 |
| 섹션 헤드 desc 우측 끝까지 | `.s-head__desc { max-width: 60ch }` → `max-width: 100%`. Capability 섹션 등에서 우측 desc 박스가 grid cell 전체 폭을 사용 → 2줄로 깨지던 텍스트가 한 줄에 들어감 |

---

## 2. 폴더 구조

```
snj_v3.2/
├── index.html                   # 메인 페이지 (12 섹션, i18n 적용)
├── favicon.ico                  # 32×32 멀티스케일 파비콘
├── README.md                    # 본 문서
└── assets/
    ├── css/
    │   ├── tokens.css           # 디자인 토큰 (Navy/Blue/Silver 팔레트, 폰트 시스템 우선)
    │   ├── layout.css           # 헤더/푸터/언어 토글/공통 레이아웃
    │   └── home.css             # 12 섹션 스타일 + 그래프 + disclaimer + 부드러운 easing
    ├── js/
    │   └── main.js              # i18n 사전 + 언어 토글 + 헤더/푸터 주입 + 그래프 루프
    └── images/
        ├── brand/               # 로고 / 파비콘 (모두 생성 완료)
        ├── hero/                # 사진 슬롯 1개 (PENDING)
        ├── business/            # 사진 슬롯 4개 (PENDING)
        ├── process/             # 폴더만 (다음 라운드 슬롯 확장 검토)
        ├── capability/          # 사진 슬롯 1개 (PENDING)
        ├── quality/             # 폴더만 (다음 라운드 슬롯 확장 검토)
        ├── portfolio/           # 사진 슬롯 3개 (PENDING)
        ├── facility/            # 사진 슬롯 5개 (PENDING)
        └── contact/             # 폴더만 (다음 라운드 슬롯 확장 검토)
```

---

## 3. 페이지 구성

| § | 섹션 ID | 내용 |
|---|---|---|
| Hero | `#hero-anchor` | 브랜드 슬로건, lede, 2 CTA, 메타 3 셀, 대표 이미지 슬롯 |
| 01 | `#company` | Company Overview · 4개 하이라이트 카드 (Turnkey/QA/구역/시설) |
| 02 | `#why` | Why SNJ · 4개 차별화 포인트 카드 |
| 03 | `#business` | Business · 4개 사업 영역 카드 (반도체/자동화/자동차/Turnkey) |
| 04 | `#process` | Manufacturing Process · 8단계 공정 흐름 strip |
| 05 | `#capability` | Capability · 시설 대표 사진 + 6개 역량 카드 |
| 06 | `#quality` | Quality System · 5개 검수 게이트 + 검사 기록 노트 |
| 07 | `#workflow` | Project Workflow · 8단계 프로젝트 흐름 리스트 |
| 08 | `#growth` | SNJ Growth Overview · **꺾은선·막대·도넛 3개 차트 + disclaimer** |
| 09 | `#portfolio` | Portfolio · 3개 사례 카드 (NDA 안내 포함) |
| 10 | `#facility` | Facility · 5컷 갤러리 + 5개 구역 설명 |
| 11 | `#contact` | Contact · 회사 정보 4 row + 6개 문의 유형 카드 |

---

## 4. i18n 시스템 가이드

### 4.1 동작 방식
1. 페이지 로드 시 `main.js`가 `localStorage("snj-lang")`를 읽음. 값이 없으면 기본 `ko`.
2. `applyLanguage(lang)`이 모든 `[data-i18n]` 요소의 텍스트를 사전에서 lookup하여 교체.
3. `<html lang>`이 `ko` / `en`으로 동기화. `<title>` 및 `<meta description>`도 함께 갱신.
4. 헤더의 `[ KR | EN ]` 버튼 클릭 시 `localStorage`에 저장되고 즉시 모든 텍스트가 전환.

### 4.2 키 명명 규칙
점 표기(dotted key) 사용. JS 헬퍼 `getI18n(lang, dotKey)`로 lookup.

| 카테고리 | 키 | 적용 위치 |
|---|---|---|
| `meta.*` | title, desc | `<head>` |
| `nav.*` | company, business, capability, quality, portfolio, contact | 헤더/푸터 메뉴 (동적 주입) |
| `header.*` | langKR, langEN | 언어 토글 라벨 |
| `hero.*` | eyebrow, titleA, titleB, lede, ctaBiz, ctaContact, metaK1~V3 | Hero |
| `co.*` `why.*` `biz.*` `mp.*` `cap.*` `qa.*` `wf.*` `growth.*` `port.*` `fac.*` | label, h, desc + 카드별 키 | 각 섹션 |
| `contact.*` | label, hA, hB, lede, infoK1~K4, infoV1~V2, pending, inqHdr, inq1t~inq6s | Contact |
| `foot.*` | sitemap, location, contact, desc, tag | 푸터 (동적 주입) |
| `slot.*` | hero, bizSemi, bizAuto, bizCar, bizTurnkey, capFloor, port, fac | placeholder 라벨 |
| `growth.disclaimer` | (single) | 그래프 하단 안내 박스 |

### 4.3 v3.2 i18n 적용 범위

v3.2에서 KR/EN 전환되는 영역(전 본문 카드 포함, 총 223개 `data-i18n` + 1개 `data-i18n-attr`):

- **헤더/푸터 전체** (동적 주입 → 자동 i18n)
- **Hero 전체** (eyebrow, 제목 2줄, lede, CTA 2개, 메타 3 셀, 캡션) — 14개
- **10개 섹션 헤더** (라벨, 타이틀, 설명문 — `s-head__desc`)
- **본문 카드 전체** (`co`·`why`·`biz`·`mp`·`cap`·`qa`·`wf`·`growth`·`port`·`fac` 모든 카드의 타이틀, 부제, 본문, dl/dd, 케이스 노트, 그래프 캡션·범례·도넛 중앙 텍스트)
- **Contact 섹션 전체** (라벨, 타이틀, lede, info 4 row, 문의 6 카드) — 24개
- **Growth disclaimer**
- **placeholder 라벨** (사진 미삽입 시 자동 i18n)

| 카테고리 | 인덱스 내 적용 | 비고 |
|---|---|---|
| `meta` | 1 + attr 1 | title + description |
| `hero` | 14 | eyebrow~CTA~메타~캡션 |
| `co` | 14 | 헤더 + 본문 3 + 카드 4 × (타이틀·부제·본문) |
| `why` | 11 | 헤더 + 카드 4 × (타이틀·부제·본문) |
| `biz` | 27 | 헤더 + 카드 4 × (타이틀·부제·intro·rowK1~4·v1~4) |
| `mp` | 19 | 헤더 + 8 step × (타이틀·부제·본문) |
| `cap` | 16 | 헤더 + photoTag + 카드 6 × (타이틀·부제·본문) |
| `qa` | 14 | 헤더 + gate 5 × (타이틀·부제·본문) + noteStrong·noteBody |
| `wf` | 27 | 헤더 + step 8 × (타이틀·본문·phase) |
| `growth` | 19 | 헤더 + 차트 3 × (label·title·sub·cap) + donut center 2 + legend 4 + disclaimer |
| `port` | 24 | 헤더 + 케이스 3 × (cat·title·rowK1~4·v1~4·note) |
| `fac` | 13 | 헤더 + zone 5 × (타이틀·부제·본문) |
| `contact` | 24 | 헤더 + lede + info 4 + 문의 6 × (타이틀·부제) |

본문 카드는 더 이상 단계적 확장이 아니라 **완전 적용 상태**입니다. 새 카드를 추가할 때만 `data-i18n` 속성을 같이 부여하면 됩니다.

### 4.4 새 i18n 키 추가 절차
1. `assets/js/main.js`의 `I18N.ko` 및 `I18N.en`에 키 추가
2. HTML 요소에 `data-i18n="카테고리.키"` 부여
3. 페이지 reload 시 자동 적용 (별도 빌드 단계 없음)

속성 i18n이 필요한 경우 `data-i18n-attr="alt:slot.hero,title:hero.capCap"` 형식 사용 (`meta description`은 이미 `content:meta.desc`로 적용됨).

---

## 5. 사진 파일 리스트업

실제 사진이 없는 경우 사이트는 자동으로 blueprint-style placeholder를 표시합니다. 실제 사진을 추가하려면 아래 경로에 동일 파일명으로 이미지를 넣으면 됩니다.

### 5.1 카테고리별 사진 가이드

| # | 카테고리 | 경로 | 우선순위 | 권장 비율 | 필요 사진 |
|---|---|---|---|---|---|
| 1 | **brand** | `assets/images/brand/snj-logo.png` 외 | 완료 ✓ | 가로형 | 메탈릭 SNJ 가로형 로고. v3.2에서 새 로고로 통일 적용 완료 |
| 2 | **hero** | `assets/images/hero/hero-main.jpg` | 최상 | 16:9 또는 21:9 | 공장 내부 전경, 대표 장비 조립, 정밀 장비 클로즈업 |
| 3 | **business** | `assets/images/business/semiconductor.jpg` | 상 | 4:3 또는 16:9 | 반도체 검사 장비, Loader/Handler/검사 모듈, 정밀 장비 프레임 |
| 4 | **business** | `assets/images/business/automation.jpg` | 상 | 4:3 | 자동화 설비, 컨베이어/검사 라인, 액추에이터/센서 모듈 |
| 5 | **business** | `assets/images/business/automotive.jpg` | 중상 | 4:3 | 자동차 부품 검사 장비, 카메라 검사기, 검사 스테이션 |
| 6 | **business** | `assets/images/business/turnkey.jpg` | 상 | 4:3 또는 16:9 | 조립~검사 공정 이미지, 도면 검토/검수 장면 |
| 7 | **process** | `assets/images/process/material.jpg`<br>`assets/images/process/assembly.jpg`<br>`assets/images/process/wiring.jpg`<br>`assets/images/process/inspection.jpg`<br>`assets/images/process/shipment.jpg` | 중상 | 1:1 또는 4:3 | 자재 입고, 기구 조립, 전장 배선, 기능 검사, 포장/출하 |
| 8 | **capability** | `assets/images/capability/floor.jpg` | 최상 | 16:9 | 제조 현장 전체, 조립/전장/검사 구역, 설비 라인 |
| 9 | **quality** | `assets/images/quality/inspection.jpg`<br>`assets/images/quality/report.jpg` | 중상 | 4:3 | 검사 장면, 측정기 사용, 체크리스트, 품질 문서 |
| 10 | **portfolio** | `assets/images/portfolio/case-01.jpg`<br>`assets/images/portfolio/case-02.jpg`<br>`assets/images/portfolio/case-03.jpg` | 상 | 4:3 | 납품 장비, 조립 완료 장비, 검사 완료 장비 (고객사명·시리얼·민감 라벨 비식별 처리) |
| 11 | **facility** | `assets/images/facility/facility-01.jpg`~`facility-05.jpg` | 상 | 1:1, 4:3, 16:9 혼합 | 공장 외관, 내부, 조립/전장/검사/출하/자재 보관 구역 |
| 12 | **contact** | `assets/images/contact/location.jpg`<br>`assets/images/contact/factory-exterior.jpg` | 중 | 16:9 | 회사 외관, 입구, 지도 대체 이미지, 방문 안내용 외부 전경 |

### 5.2 사진 보안 가이드 (Portfolio·Facility)
- 고객사명, 도면 정보, 장비 시리얼, 모델명 라벨, 출하 라벨이 노출되지 않도록 사전 마스킹
- 사람 얼굴이 식별 가능한 사진은 모자이크 또는 후방 촬영 컷 사용
- 보안 구역(예: 도면 보관실, 검사 결과 모니터) 캡처 금지

### 5.3 사진 후보 도입 현황 (v3.2.2)

회사소개서에서 추출한 사진 후보 22장을 `assets/images/`에 배치했습니다. 식별 정보 노출 여부와 해상도를 기준으로 슬롯별 활성/대기 상태를 분리해서 운영합니다.

**활성 슬롯 (`data-photo` — 즉시 화면에 표시) · 6개**

| 슬롯 | 파일 | 출처 | 비고 |
|---|---|---|---|
| hero-main | `hero/hero-main.jpg` | image29 | 내부 + 정밀 장비. `--photo-pos: 50% 65%` (장비 강조) |
| biz-auto | `business/automation.jpg` | image20 | 자동화/검사 라인. 톤은 좋으나 스톡/AI 가능성 있음 — 별도 검토 |
| biz-car | `business/automotive.jpg` | image21 | 검사 프로브. 우측 페이드 → `--photo-pos: 25% 50%` (좌측 강조) |
| cap-floor | `capability/floor.jpg` | image29 | hero와 동일 컷. `--photo-pos: 50% 65%` |
| facility-03 | `facility/facility-03.jpg` | image29 | 내부 작업장. 식별 정보 없음 |
| facility-04 | `facility/facility-04.jpg` | image8 | 외부 출입 동선 + 지게차. `--photo-pos: 50% 60%` |

**대기 슬롯 (`data-photo-pending` — 마스킹 또는 재촬영 후 활성화) · 8개**

| 슬롯 | 후보 파일 | 보류 사유 |
|---|---|---|
| biz-semi | `business/semiconductor.jpg` (image17) | 해상도 298×169 — 웹 사용 부적합. 고해상도 재촬영 필요 |
| biz-turnkey | `business/chiller.jpg` (image28) | 장비에 모델명·시리얼·날짜 라벨 노출. 라벨 마스킹 후 활성화 가능 |
| port-01 | `portfolio/case-01.jpg` (image17) | 해상도 298×169 |
| port-02 | `portfolio/case-02.jpg` (image13) | 해상도 480×250 + 흰 배경 출처 불명 |
| port-03 | `portfolio/case-03.jpg` (image28) | 모델명·시리얼 라벨 노출 (chiller와 동일) |
| facility-01 | `facility/facility-01.jpg` (image6) | 출입문에 외부 라벨 노출 + 빛 번짐 |
| facility-02 | `facility/facility-02.jpg` (image7) | 차량 번호판 다수 + 건물 라벨 노출 |
| facility-05 | `facility/facility-05.jpg` | 사진 없음 — 검사/출하 구역 촬영 필요 |

**대기 슬롯 활성화 절차** — 사진 마스킹 또는 재촬영 후 index.html에서 해당 슬롯의 `data-photo-pending="..."` 속성을 `data-photo="..."`로 바꾸면 즉시 화면에 표시됩니다. 별도의 코드 수정은 필요 없습니다.

**참고 폴더에만 있는 사진** (현재 슬롯에는 미사용, 대체 후보로 보관) — `hero/hero-factory.jpg` (외부 식별정보), `business/semiconductor-loader.jpg` (저해상도), `business/wet-cleaner.jpg` (저해상도+로고 노출), `process/material.jpg`, `process/assembly.jpg`, `process/inspection.jpg`, `process/shipment.jpg`, `quality/inspection.jpg`, `contact/factory-exterior.jpg` (LEDO 라벨).

### 5.4 추가 촬영이 필요한 항목

| 경로 | 필요 사진 |
|---|---|
| `business/automotive.jpg` | 자동차 기어 검사기/구동축 오차 검사기 실제 사진 — 회사소개서엔 텍스트만 있고 명확한 실장비 사진 부족 |
| `process/wiring.jpg` | 전장 배선/케이블 정리/커넥터 체결 장면 — 직접 후보 없음 |
| `process/shipment.jpg` | 포장/출하 대기/납품 준비 장면 — 현재는 외부 지게차 사진뿐, 실제 출하 컷 필요 |
| `quality/report.jpg` | 검사성적서/체크리스트/출하 점검표 — 민감 정보 블러 처리 필수 |
| `facility/facility-05.jpg` | 검사/출하 구역 실제 사진 |
| `contact/location.jpg` | 방문 안내용 지도/주변 진입로 — 직접 촬영 또는 라이선스 확인된 지도 이미지 |

### 5.5 사진 crop 미세 조정
사진의 핵심 피사체가 한쪽으로 치우친 경우, 해당 슬롯에 inline style을 줘서 `background-position`을 개별 지정할 수 있습니다.

```html
<div class="slot ..." data-photo="..." style="--photo-pos: 50% 30%;"></div>
```

카테고리별 기본값(`home.css` v3.2.1 section)이 이미 적용되어 있으므로 일반적인 사진은 별도 조정 없이 자연스럽게 표시됩니다. 인물 얼굴이나 장비 상단·하단이 잘리는 경우에만 슬롯별로 미세 조정하면 됩니다.

---

## 6. Placeholder 동작

사진 파일이 없을 때 슬롯은 다음과 같이 렌더됩니다:
- **Blueprint grid** + 메탈릭 라인 + 슬롯 목적 라벨 표시
- 라이트/다크 모드에서 자연스럽게 대비 유지
- 이미지 로딩 실패 시 레이아웃이 깨지지 않음 (`onerror`로 placeholder 유지)
- 라벨은 i18n 적용 — KR `정밀 장비`, EN `Precision Equipment` 등

사진을 추가하면 슬롯이 자동으로 `has-image` 클래스를 받고 `background-image`로 표시됩니다 (`assets/js/main.js → activateSlots()`).

---

## 7. 성장 그래프 애니메이션

| 항목 | 내용 |
|---|---|
| 꺾은선 | `d="M30,160 L80,140 L130,115 L180,90 L230,65 L280,40"` draw + 마지막 노드 glow |
| 막대 | 5개 `<rect>`, `data-h` 기준 rise-up + stagger |
| 도넛 | 4 세그먼트 sweep, `stroke-dasharray` 애니메이션, 중앙 텍스트 `GROWTH / FOUNDATION` |
| 루프 | 7s 활성 + 2s 휴식 = 9s 사이클 반복 |
| Viewport gating | `IntersectionObserver(threshold:0.34)` — 스크롤 밖에선 정지 |
| 접근성 | `prefers-reduced-motion: reduce` 시 최종 상태만 표시 |
| Easing | `cubic-bezier(.45,.05,.25,1)` — 부드러운 가속/감속 |
| Glow | 3.2s drop-shadow pulse, 4px ↔ 12px (이전 2.4s 강한 oscillation 대체) |

수치는 표시하지 않으며 화면은 SNJ의 성장 방향성과 운영 확장 흐름의 시각화 자료로 처리됩니다. 사업보고서 실제 숫자는 화면에 노출되지 않습니다.

---

## 8. 폰트

`tokens.css`에서 Pretendard CDN `@import`는 주석 처리되어 있습니다. 시스템 폰트 우선 스택으로 동작:

```
font-family:
  "Pretendard", "Noto Sans KR", "Apple SD Gothic Neo",
  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  system-ui, sans-serif;
```

실제 배포 시 브랜드 기준에 맞는 웹폰트를 자체 호스팅 방식으로 적용할 수 있습니다 (`tokens.css` 상단 `@import` 라인 주석 해제 또는 `@font-face` 추가).

---

## 9. 검수 체크리스트

브랜드 SNJ 단독 표기 / 사업보고서 수치 미노출 / 그래프 숫자 없는 방향성 시각화 / 그래프 반복 애니메이션 유지 / Header KR·EN 토글 + localStorage 저장 + `<html lang>` 동기화 / 본문 카드 전체 KR·EN 전환 / 라이트·다크 모드 대비 안정 / placeholder blueprint 표시 / 사진 경로 README 정리 / JS·콘솔 오류 없음 / 모바일 헤더·언어·메뉴·그래프 무손상 — 모든 항목 충족.

### v3.2.1 추가 확인

- 슬롯 has-image 처리에 `background-position` 변수 적용, 카테고리별 기본값 정의됨
- 모바일 640px 이하에서 Growth 카드 padding·typography·legend 크기 일관 정리
- Header에서 KR/EN 토글과 Theme 토글 사이 1px separator + gap 10px로 분리감 확보 (모바일은 separator 숨김)

---

## 10. 로컬 동작

별도 빌드 도구 없이 정적 호스팅 또는 `python3 -m http.server` 같은 단순 서버로 즉시 동작합니다.

```bash
cd snj_v3.2
python3 -m http.server 8080
# http://localhost:8080
```

`file://` 프로토콜로 `index.html`을 직접 열어도 동작하지만, 일부 브라우저에서 `localStorage` 및 이미지 로드 제한이 있을 수 있어 정적 서버 사용을 권장합니다.

---

## 11. 다음 라운드 검토 포인트

1. **대기 슬롯 활성화** — `data-photo-pending` 8개 슬롯의 사진 마스킹(시리얼·모델명·번호판·외부 라벨)을 완료하거나 재촬영하면 `data-photo`로 전환. 사진 시안 받은 뒤 슬롯별 `--photo-pos` 추가 미세 조정.
2. **추가 촬영 필요 항목 6건** (§5.4) — automotive 실장비, wiring, shipment 실컷, quality report, facility-05, contact location.
3. **business automation 사진 출처 확인** — 톤은 좋으나 스톡/AI 가능성 있는 컷. 실제 SNJ 현장 사진으로 교체 권장.
4. **hero-main.jpg 재활용** — v3.2.7에서 Hero 카드 슬롯이 제거되면서 `assets/images/hero/hero-main.jpg`(내부 작업장 컷)가 사용 안 됨. 폴더에는 보존 중. process·capability 추가 슬롯이나 별도 갤러리로 재배치 검토.
5. **JP 추가** — 현재 ko/en 2 언어. 일본 시장 대응 시 `I18N.ja` 추가 + 헤더 토글 3-way 확장.
6. **Pretendard 자체 호스팅** — 현재 시스템 fallback. 브랜드 폰트 통일 필요 시 `assets/fonts/` + `@font-face`.
7. **Process 5컷 사진 배치** — 현재 strip은 텍스트 8단계 강조 디자인. 사진 5컷을 strip 안에 넣을지, 별도 갤러리로 분리할지 — `process/*.jpg` 후보가 폴더에 있으나 슬롯 미연결 상태.

---

## 12. 라이선스 / 사용

본 코드는 SNJ Industrial Systems 내부용 웹사이트 빌드입니다. 외부 공유·재배포 전 별도 합의가 필요합니다.
