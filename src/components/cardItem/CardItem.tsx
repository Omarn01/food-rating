import style from './CardItem.module.scss'

interface ICardItem {
  src?: string
  name: string
  descr: string
  rating: number
  price: number
}

export default function CardItem({
  src,
  name,
  descr,
  rating,
  price,
}: ICardItem) {
  return (
    <li className={style.product}>
      <img
        src={
          src ??
          'https://avatars.mds.yandex.net/i?id=750ee09b0186cb76dbfa267928f552661a87c174-2429503-images-thumbs&n=13'
        }
      />
      <div className={style.content}>
        <h3 className={style.title}>Name: {name}</h3>
        <div className={style.descr}>Description: {descr}</div>
        <div className={style.rating}>Rating: {rating}/10</div>
        <div className={style.price}>Price: {price}p</div>
      </div>
    </li>
  )
}
