import CardItem from '../share/CardItem';
export default function OrderStatusAll() {
  return (
    <div className='flex h-11/12 gap-2 w-full'>
      <CardItem title='들어온 주문' className='w-1/3 overflow-auto'>
        {/* item 추가 예정 */}
      </CardItem>
      <CardItem title='조리 중' className='w-1/3 overflow-auto'>
        {/* item 추가 예정 */}
      </CardItem>
      <CardItem title='완료' className='w-1/3 overflow-auto'>
        {/* item 추가 예정 */}
      </CardItem>
    </div>
  );
}
