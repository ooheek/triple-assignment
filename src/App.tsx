import AwardItem from './components/AwardItem'
import AwardsContainer from './components/AwardsContainer'
import ContentLogo from './components/ContentLogo'
import MetricItem from './components/MetricItem'
import MetricsContainer from './components/MetricsContainer'
import Wrapper from './components/Wrapper'
import awardItemAndroid from './assets/images/play-store2x.png'
import awardItemApple from './assets/images/badge-apple4x.png'

function App() {
  return (
    <Wrapper>
      <ContentLogo
        label="2021년 12월 기준"
        animation={{ duration: 0.7, delay: 0 }}
      />
      <MetricsContainer animation={{ duration: 0.7, delay: 0.1 }}>
        <MetricItem num={700} unit="만 명" label="여행자" />
        <MetricItem num={100} unit="만 개" label="여행 리뷰" />
        <MetricItem num={470} unit="만 개" label="여행 일정" />
      </MetricsContainer>
      <AwardsContainer animation={{ duration: 0.7, delay: 0.2 }}>
        <AwardItem
          imageUrl={awardItemAndroid}
          labelArr={['2018 구글 플레이스토어', '올해의 앱 최우수상 수상']}
        />
        <AwardItem
          imageUrl={awardItemApple}
          labelArr={['2018 애플 앱스토어', '오늘의 여행앱 선정']}
        />
      </AwardsContainer>
    </Wrapper>
  )
}

export default App
