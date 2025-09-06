import OrderStatus from '../components/Dashboard/OrderStatus';
import RevenueGraph from '../components/Dashboard/RevenueGraph';
import TodayReservations from '../components/Dashboard/TodayReservations';


export default function Dashboard() {
  return (
    <div className='flex h-screen p-2 gap-2'>
      {/* 왼쪽 */}
      <div className='flex-[1] flex flex-col gap-2 h-11/12'>
        {/* 메뉴 영역 */}
       <OrderStatus/>

        {/* 매출 그래프 영역 */}
       <RevenueGraph/>
      </div>

      {/* 오른쪽, 오늘 예약 */}
      <TodayReservations/>
    </div>
  );
}
