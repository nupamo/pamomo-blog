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
