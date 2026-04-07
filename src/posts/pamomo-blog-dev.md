---
title: '파모모 블로그 구축 및 UI/UX 개편 기록 ✨'
date: '2026-04-08'
excerpt: 'Zero-Metadata 아키텍처와 다크 모드, HashRouter 전환 등 블로그 개발 여정을 정리했어요.'
author: 'Pamomo'
---

## 블로그 아키텍처 (Tech Stack)

이번 블로그는 빠르고 효율적인 기술 스택으로 구축했어요.
- **Vite & React 19 & Tailwind CSS v4**: 엄청나게 빠른 빌드와 유틸리티 기반의 간편한 스타일링을 제공해요.
- **Zero-Metadata Approach**: 마크다운 파일들은 `src/posts/*.md`에 저장되며, `import.meta.glob`를 통해 자동으로 인덱싱됩니다. 별도의 DB나 CMS 없이 가볍게 동작해요!

## 최근 업데이트: 다크 모드 및 HashRouter 도입

- **UI/UX 개편**: 라이트 모드의 카드형 그리드 레이아웃에서, 전문적이고 깔끔한 **다크 모드 테이블 리스트(Table-List)** 레이아웃으로 변경했습니다. Pretendard 폰트와 블루 포인트 컬러를 적용했어요.
- **라우팅 개선**: GitHub Pages 배포 시 새로고침하면 발생하는 404 에러를 해결하기 위해, `BrowserRouter`에서 `HashRouter`로 성공적으로 전환했어요.

## 배포 완료! 🎉

기존 `dev-blog`라는 이름에서 **파모모의 블로그(Pamomo's Blog)**로 새단장을 마치고 배포를 완료했습니다.
앞으로 이곳에 다양하고 유용한 기술 글과 파모모의 이야기를 기록해 나갈 예정이에요.

<div className="bg-gray-800/50 p-4 rounded-lg mt-8 border border-gray-700/50 text-sm">
  <p className="font-bold text-brand-400 mb-2">💬 작업 코멘트 (Comments)</p>
  <ul className="list-disc list-inside text-gray-400 space-y-1">
    <li>UI/UX 대대적 개편: 다크모드 + 블루 포인트 컬러 적용 완료</li>
    <li>Pretendard 폰트 적용 및 PostList를 테이블 형태(Table-List)로 변경 완료</li>
    <li>HashRouter 전환으로 404 새로고침 에러 해결 완료</li>
  </ul>
</div>