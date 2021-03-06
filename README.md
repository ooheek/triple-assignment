# triple-assignment

TRIPLE_2022 공개채용 프론트엔드 사전과제입니다. ✈️

### 구현내용 : Section 만들기

[구현화면 바로가기 💻](https://triple-assignment-opal.vercel.app/)

![트리플_사전과제_구현](https://user-images.githubusercontent.com/61132249/178098646-d709d305-e971-4eed-aa85-7ce3b5eb84b1.GIF)
<span style="color: grey">(실제 구현화면입니다)</span>

1. 영역별 등장 애니메이션

- 좌측 이미지, 지표 문구, 수상 내역 순으로 표시해야 합니다.
- 살짝 위로 떠오르는 듯한 애니메이션과 투명도를 조절하는 애니메이션을 적용해야 합니다.
- 등장 애니메이션의 duration은 700ms이고, 애니메이션 사이 간격은 100ms입니다.

2. 숫자가 올라가는 애니메이션

- 각 숫자는 0부터 시작합니다.
- 세 숫자 모두 2초 동안 증가하고, 동시에 끝나야 합니다.
- 증가 속도가 느려지는 효과를 구현해야 합니다.
- React와 DOM API만을 이용해 구현해야 합니다.

<br/>

### 프로젝트 실행방법

```
npm install
npm run start
```

<br/>

### 사용한 기술과 선택 이유

#### React

#### typescript

정적 타입의 컴파일 언어로 코드 작성 단계에서부터 타입을 체크해 오류를 사전에 확인하고 제거할 수 있습니다. 작업과 동시에 디버깅이 가능하기 때문에 생산성 높일 수 있다고 생각하여 선택하였습니다.

#### styled-components

CSS-in-JS 스타일링을 위한 프레임워크입니다. styled-components를 사용하여 CSS 커스텀 컴포넌트를 쉽고 자유롭게 만들 수 있기 때문에 선택하였습니다. 또한, 이를 활용하여 JavaScript와 CSS 사이의 상수와 함수를 쉽게 공유할 수 있다는 점을 적극 활용하였습니다.
