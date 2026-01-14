# 📅 React Calendar Library

**Vite + React + TypeScript + vanilla-extract** 기반으로 제작된 **재사용 가능한 캘린더 라이브러리**입니다.  
날짜 단일 선택(DatePicker)과 날짜 범위 선택(RangePicker)을 지원하며, 다양한 커스터마이징이 가능합니다.

---

## 🚀 Features

- **두 가지 모드 지원**
  - ✅ `DatePicker` → 단일 날짜 선택
  - ✅ `RangePicker` → 날짜 범위 선택 (시작일 ~ 종료일)
- **출력 방식 선택**
  - 드롭다운(default)
  - 모달
- **범위 선택 고급 기능**
  - 시작일 기준 `threshold` (종료일 최대 선택 가능일 제한)
  - 시작일과 종료일 구간은 다른 배경색/스타일 적용 가능
  - 시작일 클릭 후 **호버 시 날짜 구간 하이라이트**
- **다국어 지원**

  - 월/요일, RangePicker/DatePicker 버튼 텍스트(확인/취소) 모두 locale 기반
  - 기본: 영어(en), 한국어(ko), 숫자(number)

  <!-- v.0.1.2부터 지원 -->

  - 추가: 일본어(ja), 중국어(zh), 프랑스어(fr), 독일어(de), 스페인어(es), 이탈리아어(it), 러시아어(ru), 포르투갈어(pt)
  - `locale` prop으로 전체 UI 언어 선택 가능

- **포맷 커스터마이징**
  - 날짜 표시 형식 기본값: `YYYY.MM.DD`
  - `props.format` 으로 원하는 포맷 지정 가능
- **커스텀 아이콘 지원**
  - 기본값: `react-icons/ai`의 달력 아이콘
  - 원하는 SVG 컴포넌트 교체 가능
- **접근성(ARIA) 지원**
  - 키보드 접근 및 스크린리더 친화적
- **스타일링**
  - `vanilla-extract` 기반
  - `theme` prop 으로 선택 색상/배경/라운드값 커스터마이징 가능

---

## 📦 Installation

```bash
# 설치
yarn add react-calendar-byhja
# 또는
npm install react-calendar-byhja
```

## 🛠 Usage

- **DatePicker (단일 날짜 선택)**

```javascript
import { DatePicker } from "react-calendar-byhja";

export default function App() {
  return (
    <DatePicker
      onChange={(date) => console.log("선택한 날짜:", date)}
      displayMode="dropdown" // 또는 "modal"
      monthFormat="ko" // "en" | "ko" | "number"
      format="YYYY/MM/DD"
    />
  );
}
```

---

- **RangePicker (날짜 범위 선택)**

```javascript
import { RangePicker } from "react-calendar-byhja";

export default function App() {
  return (
    <RangePicker
      onChange={({ startDate, endDate }) =>
        console.log("선택한 구간:", startDate, endDate)
      }
      separator="~" // 또는 "-"
      displayMode="modal"
      monthFormat="en"
      threshold={30} // 시작일 기준 최대 30일까지만 선택 가능
    />
  );
}
```

---

## 다국어 예시

- `locale` : 요일 & 버튼 표기
- `monthFormat` : 월 표기
- default : en

```javascript
<RangePicker
  locale="ja" // 일본어
  monthFormat="ja"
  onChange={({ startDate, endDate }) => console.log(startDate, endDate)}
/>

<DatePicker
  locale="zh" // 중국어
  monthFormat="zh"
  onChange={(date) => console.log(date)}
/>
```

---

## 🎨 Theme Customization

theme prop을 통해 선택된 날짜 및 구간의 스타일을 변경할 수 있습니다.

```javascript
<DatePicker
  theme={{
    daySelectedBg: "#007bff",
    daySelectedColor: "#fff",
    daySelectedRadius: "50%",
    rangeBg: "#cce5ff",
    rangeColor: "#004085",
  }}
/>
```

---

## 📂 Project Structure

```pgsql
src/
 ├── components/
 │   ├── Calendar/
 │   │   ├── Calendar.css.ts
 │   │   ├── Calendar.tsx
 │   │   ├── CalendarBody.tsx
 │   │   ├── CalendarHeader.tsx
 │   │   ├── CalendarYearPanel.tsx
 │   ├── DatePicker/
 │   │   ├── DatePicker.css.ts
 │   │   ├── DatePicker.tsx
 │   ├── RangePicker/
 │   │   ├── RangePicker.css.ts
 │   │   ├── RangePicker.tsx
 ├── hooks/
 │   ├── useCalendar.ts
 │   ├── useOutsideClick.ts
 │   ├── useRangeSelect.ts
 ├── types/
 │   └── calendar.type.ts
 ├── utils/
 │   ├── date.ts
 │   ├── format.ts
 │   ├── helpers.ts
 │   ├── locale.ts
 ├── index.ts       # 라이브러리 진입점
 ├── main.tsx       # 개발/테스트용
 ├── App.tsx        # 테스트 페이지
```

---

## 🧪 Development

```bash
# 개발 서버 실행
yarn dev

# 빌드
yarn build

# 빌드 결과 확인 (예: dist/ 폴더)
```

---

## ✅ TODO (향후 개선)

- 다중 날짜 선택 지원
- 키보드 내비게이션 강화
- 테스트 코드 (Vitest, Stotybook)
