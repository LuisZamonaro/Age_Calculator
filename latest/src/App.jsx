import { useState } from 'react'
import HeaderPage from './components/HeaderPage'
import GlobalStyle from './styles/global'
import ShowAge from './components/ShowAge'
import * as S from './styles/styles'


function App() {
  const [date, setDate] = useState({
    day: 0,
    month: 0,
    year: 0
  });

  return (
    <S.Container>
      <HeaderPage date={date} setDate={setDate}/>
      <ShowAge date={date} />
      <GlobalStyle />
    </S.Container>


  )
}

export default App
