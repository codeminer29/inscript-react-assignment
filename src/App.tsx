import Header from './components/Header'
import Toolbar from './components/Toolbar'
import Spreadsheet from './components/Spreadsheet'
import BottomTabs from './components/BottomTabs'

function App() {
  return (
    <div className='overflow-auto scrollbar-hide'>
      <Header />
      <Toolbar />
      <div className="pt-[104px] pb-[48px]">
        <Spreadsheet />
      </div>
      <BottomTabs />
    </div>
  )
}

export default App
