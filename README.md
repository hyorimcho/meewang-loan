# 💰 MEEWANGLOAN
❗️모바일 크기로 제작되었습니다.
<br />

## 📅 과제 기간 및 담당 업무
- 과제 기간: 2023. 02. 08 ~ 2023. 02. 26
- 로그인 / 회원가입 페이지 | 상품 상세 페이지
<br />

## ✏️ 기술 스택
<div style="display: flex; gap: 5px; flex-wrap: wrap;">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>
  <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"/>
  <img src="https://img.shields.io/badge/Redux-674ABC?style=for-the-badge&logo=Redux&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white"/>
  <img src="https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=DaisyUI&logoColor=white"/>
</div>
<br />

## 👩🏻‍💻 구현 기능
### 회원가입
입력 상태 라이브러리 react-hook-form 과 유효성 검증 라이브러리 yup 을 사용하여 유효성 검사를 진행했습니다.<br />
모든 유효성 검사를 통과하면 회원가입에 성공합니다.
<p><img src="https://user-images.githubusercontent.com/103406196/232286052-069f8421-f989-49cd-b20d-ae6030da2899.gif" height="600" /></p>
<br />

### 회원가입 실패
유효성 검사를 통과하지 못하면 회원가입에 실패합니다.<br />
각 항목당 다른 에러 메세지를 보여주게 됩니다.<br />
이미 존재하는 아이디는 react-toastify를 통해 메세지를 보여줍니다.
<div><img src="https://user-images.githubusercontent.com/103406196/232285930-3860606d-1c6e-4dc4-87c9-9dab8b50490f.gif" height="600" /> <img src="https://user-images.githubusercontent.com/103406196/232285996-1bdc4d88-355c-4e3f-834e-a1d7fdb4ad52.gif" height="600" /></div>
<br />

### 로그인
로그인에 성공 시 메인 페이지로 바로 이동합니다.
<p><img src="https://user-images.githubusercontent.com/103406196/232286127-a41a35d9-ca87-4ed4-8725-929d216fc835.gif" height="600"/>
<br /></p>
<br />

### accessToken 저장
로그인과 동시에 accessToken은 사용자의 정보는 Cookies에 저장되어 탭을 끔과 동시에 다시 로그인이 필요해집니다.
<p><img src="https://user-images.githubusercontent.com/103406196/232286224-6120262a-41f1-468f-8d9d-fc878a1766f2.gif" height="600" /></p>
<br />

### 로그인 오류 처리
가입 정보와 일치하지 않은 정보를 입력하면 로그인에 실패하고 오류 메세지가 출력됩니다.
<p><img src="https://user-images.githubusercontent.com/103406196/232286178-58be4793-aec3-4cae-abd6-3522f52a52f1.gif" height="600"/></p>
<br />

### 상세 페이지
react의 상태관리 hook인 useState를 사용하여 상품의 정보를 담아 보여줍니다.
<p><img src="https://user-images.githubusercontent.com/103406196/232286631-6b91dbbd-cf8f-488b-b894-cda8d69331b6.gif" height="600" /></p>
<br />

## 🧐 개선할 점
  - 아쉬운 부분
    - 처음 생각했던 디자인과 달라진 부분이 있고 일관성이 부족한 점
    - 다양한 분기 처리가 미흡했던 점
    - 상세 정보 페이지에서 정보가 없는 항목에 대한 처리가 미흡했던 점
  - 더 개발하고 싶은 부분
    - 토스티파이가 아닌 서비스에 좀 더 어울리는 모달창
    - 페이지간 좀 더 매끄러운 연결
    - 사용자에게 더 쉬운 인터페이스
  - 어려웠던 부분
    - 서버에서 각종 에러들이 나타내는 것을 정확히 이해하지 못했던 점
    - 타입스크립트를 적용하며 오류를 해결했던 점
    - 구성원들과 스타일을 통일할 것들이 많았던 점
    - api 함수의 관리
    - axios interceptor 의 사용법
<br />

## 👯‍♀️팀원 소개
<table border>
  <tbody>
    <tr>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/113992260?v=4"  alt=""/><br />
        팀장 FE.<br/>
        <a href="https://github.com/quokka-eating-carrots">
          <img src="https://img.shields.io/badge/조민정-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/98737388?v=4"  alt=""/><br />
        팀원 FE.<br/>
        <a href="https://github.com/Hyetoria">
          <img src="https://img.shields.io/badge/곽혜지-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/37996446?v=4"  alt=""/>
        팀원 FE.<br/>
        <a href="https://github.com/whtmdgn1409">
          <img src="https://img.shields.io/badge/조승후-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/103406196?v=4"  alt=""/>
        팀원 FE.<br/>
        <a href="https://github.com/hyorimcho">
          <img src="https://img.shields.io/badge/조효림-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
  </tbody>
</table>
