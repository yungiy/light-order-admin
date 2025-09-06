import CardItem from '../share/CardItem';
export default function OrderStatus() {
  return (
    <>
      <div className='grid grid-cols-2 gap-2 h-1/3'>
        <CardItem title='메뉴 (진행중)' className='overflow-auto'>
        </CardItem>
        <CardItem title='메뉴 (완료)' className='overflow-auto'>
        </CardItem>
      </div>
    </>
  );
}
