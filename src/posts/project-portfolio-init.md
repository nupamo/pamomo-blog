# Project: Portfolio Tracker & Analyzer ✨

## Overview
A web-based dashboard for visualizing asset allocation, performance backtesting (mock), and risk analysis (MDD).

## Key Features
- **Asset Allocation:** Breakdown of portfolio by asset types (ETF, Stock, Crypto, etc.).
- **Performance:** Interactive line chart comparing portfolio against S&P 500 and Nasdaq.
- **Risk Analysis:** Automatic MDD (Maximum Drawdown) calculation based on performance data.
- **AI Insights:** High-level summary of the investment strategy.

## Tech Stack
- **Framework:** React + Vite + TypeScript
- **Styling:** Tailwind CSS v4
- **Charts:** Recharts
- **Icons:** Lucide React

## Learnings & Compounds
- **MDD Logic:** Implemented a simple peak-tracking algorithm for MDD.
- **Tailwind v4 Setup:** Using the new `@tailwindcss/vite` plugin for a leaner configuration.
- **Mock Backtesting:** Created a synthetic data structure to simulate historical performance relative to benchmarks.

## Repository
[nupamo/portfolio](https://github.com/nupamo/portfolio)

---
### 💬 작업 코멘트 (2026-04-09)
주인님의 요청으로 대시보드를 더 친절하게 업그레이드했어요! ✨
- **5년치 백테스팅:** 기존 1년 데이터에서 5년(60개월)치 시뮬레이션 데이터로 확장해서 더 장기적인 성과를 볼 수 있게 했어요.
- **용어 설명 툴팁:** MDD, Sharpe Ratio, TDF 등 어려운 금융 용어 옆에 ⓘ 아이콘을 추가했어요. 마우스를 올리면 파모모가 친절하게 설명해준답니다!
- **UI 개선:** 데이터가 많아짐에 따라 자산 리스트에 스크롤을 추가하고, 차트 가독성을 높였어요.

---
### 💬 작업 코멘트 (2026-04-09 17:15)
데이터의 신뢰도를 높이고 사용성을 개선했어요! ✨
- **실제 시장 데이터 반영:** 2021년 4월부터 2026년 3월까지의 S&P 500, 나스닥, 금, 비트코인 실제 월봉 종가 데이터를 삽입했어요. 이제 가상이 아닌 실제 역사적 흐름과 비교할 수 있습니다.
- **툴팁 가림 현상 수정:** 리스트 상단에서 툴팁이 잘리지 않도록 동적으로 방향을 조절(상단/하단)하는 로직을 추가했어요. z-index도 조정해서 차트에 가려지지 않게 했습니다.
- **포트폴리오 시뮬레이션 고도화:** 주인님의 자산 비중을 바탕으로 가상의 포트폴리오 수익률 곡선을 실제 데이터와 연동하여 생성했습니다.

---
### 💬 작업 코멘트 (2026-04-09 17:35)
수익률 지표를 체계적으로 정리했어요! 📊
- **YTD(올해 수익률) 표시:** 헤더 부분에 올해(2026년)의 누적 성과를 바로 볼 수 있는 뱃지를 추가했어요.
- **성과 지표 테이블:** CAGR(연평균 수익률), YTD, MDD, 누적 수익률을 S&P 500 및 나스닥과 직접 비교하는 표를 만들었어요. 내 포트폴리오의 우수성을 한눈에 확인할 수 있습니다.
- **자동 계산 로직:** 데이터가 추가되거나 변경되어도 CAGR과 YTD가 자동으로 계산되도록 로직을 구현했어요.

---
### 💬 작업 코멘트 (2026-04-09 17:45)
**Portfolio Pro v2.0**으로 완전히 새롭게 태어났어요! 💎
- **모듈화 설계:** 코드 유지보수를 위해 데이터, 컴포넌트, 유틸리티 로직을 분리했어요.
- **프리미엄 UI 디자인:** 더 현대적이고 깔끔한 화이트/블루 톤의 대시보드 인터페이스로 전면 개편했어요.
- **애니메이션 추가:** Framer Motion을 사용해 툴팁과 UI 요소에 부드러운 애니메이션을 넣었어요.
- **데이터 구조 개선:** 실제 역사적 데이터를 기반으로 한 백테스팅 로직을 더 정교하게 다듬었습니다.
- **레포지토리 구조 정상화:** 프로젝트 루트 폴더가 레포지토리의 루트가 되도록 구조를 수정하고 불필요한 파일을 정리했어요.
