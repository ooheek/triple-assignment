import AwardItem from './components/AwardItem'
import AwardsContainer from './components/AwardsContainer'
import ContentLogo from './components/ContentLogo'
import MetricItem from './components/MetricItem'
import MetricsContainer from './components/MetricsContainer'
import Wrapper from './components/Wrapper'

function App() {
  return (
    <Wrapper>
      <ContentLogo label="2021년 12월 기준" />
      <MetricsContainer>
        <MetricItem num={700} unit="만 명" label="여행자" />
        <MetricItem num={100} unit="만 개" label="여행 리뷰" />
        <MetricItem num={470} unit="만 개" label="여행 일정" />
      </MetricsContainer>
      <AwardsContainer>
        <AwardItem
          imageUrl="/images/play-store2x.png"
          labelArr={['2018 구글 플레이스토어', '올해의 앱 최우수상 수상']}
        />
        <AwardItem
          imageUrl="/images/badge-apple4x.png"
          labelArr={['2018 애플 앱스토어', '오늘의 여행앱 선정']}
        />
      </AwardsContainer>
    </Wrapper>
  )
}

export default App
