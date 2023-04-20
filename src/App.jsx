import { useEffect, useState } from "react"
import Header from "./component/Header/Header"
import SideBar from "./component/SideBar/SideBar"
import data from './dummyData.json'
import ResourcePage from "./page/ResourcePage";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [filterData, setFilterData] = useState(null);
  useEffect(() => {
    (async () => {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();

      const response = await data.filter(item => {
        const itemDate = new Date(item?.date);
        return itemDate.getMonth() === currentMonth
      })
      setFilterData(response);
    })();
  }, [])
  return (
    <>
      <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div className="pt-[20px] grid grid-cols-3 h-screen">
        <SideBar showSideBar={showSideBar} />
        <div className="mt-[96px] col-span-2 md:col-span-3 md:px-5 pr-[20vw] flex flex-col">
          <ResourcePage filterData={filterData} />
        </div>
      </div>
    </>
  )
}

export default App
