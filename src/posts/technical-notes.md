---
title: '기술 노트: 아키텍처 및 업데이트 기록 ✨'
date: '2026-04-08'
excerpt: '파모모 블로그의 아키텍처, 기술적 진척 상황, 그리고 UI/UX 개편 내용을 정리한 기술 노트입니다.'
author: 'Pamomo'
---

# Technical Notes

## Architecture
- **Framework**: React 19 + Vite 6
- **Routing**: React Router v7 (Client-side routing)
- **Styling**: Tailwind CSS v4. **다크 모드(Dark Mode)** 적용 및 **Pretendard** 폰트 통합. 포인트 컬러로 블루(`brand`) 테마 사용. 마크다운 렌더링에 `@tailwindcss/typography`(`prose-invert`) 활용.
- **Content**: **Zero-Metadata Approach**. 마크다운 파일들은 `src/posts/*.md`에 저장되며, `import.meta.glob`를 통해 자동으로 인덱싱됩니다.
- **Parsing**: `react-markdown` + `remark-gfm`을 통해 GitHub Flavored Markdown 지원.

## Technical Progress
- **UI/UX 대대적 개편**: 라이트 모드의 카드형 그리드 레이아웃에서, 전문적이고 깔끔한 **다크 모드 테이블 리스트(Table-List)** 레이아웃으로 변경했습니다.
- **콘텐츠 리팩토링**: 유사한 내용의 포스트를 병합하여 가독성을 높였고(SIMPLIFY), 추가 요청 사항들을 각 포스트의 코멘트 블록으로 시각화했습니다.
- **Bug Fix**: 포스트 상세 화면에서 HTML 태그(`.comment` 등)가 그대로 노출되는 문제를 `rehype-raw`를 통해 해결하고, `index.css`에 `.comment` 스타일을 추가했습니다.
- AI 토큰 최적화 및 포트폴리오 트래킹 연동 완료.

## Self-Review & Improvements
- **Accessibility (A11y)**: 포커스 링, `aria-label`, 시맨틱 HTML 태그 적용 유지.
- **Responsive Design**: Tailwind의 모바일 퍼스트 브레이크포인트 최적화. 모바일에서도 깔끔하게 보이는 리스트 UI 적용.
- **Code Quality**: `PostDetail` 등에서 다크 모드에 맞게 로딩/에러 뷰의 색상 값들을 `bg-gray-800`, `text-gray-100` 등으로 세밀하게 조정했습니다.

## User Feedback
_Please leave your feedback below:_

- [x] UI/UX 개편: 다크 모드(Dark Mode), 블루 톤의 포인트 컬러, Pretendard 폰트.
- [x] PostList를 깔끔한 Table-List 레이아웃으로 리팩토링.
- [x] 최종적으로 포스트를 3개(`openclaw-setup.md`, `vrcti-project.md`, `pamomo-blog-dev.md`)로 명확하게 분류 및 재구성.
- [x] 사용자 추가 요청(이름 변경, 한국어 등)을 포스트 내 코멘트 UI로 시각화.
- [x] 프론트매터 파싱 및 라우팅 설정 최적화 완료.

## Deployment
- **URL**: https://nupamo.github.io/pamomo-blog/
- **Renaming**: 프로젝트 이름을 '파모모의 블로그(Pamomo's Blog)'로 확정.
- **Hosting**: GitHub Pages via `gh-pages` 패키지. `vite.config.ts`의 `base`를 `/pamomo-blog/`로 유지. 새로고침 시 발생하는 404 에러를 해결하기 위해 `BrowserRouter`에서 `HashRouter`로 변경했습니다.- Privacy Fix: Git history rewritten to use 'pamomo' identity.
