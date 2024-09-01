import CardItem from '../cardItem/CardItem'
import style from './Home.module.scss'

import { foodList } from '../../../food.ts'

import { ICardItem } from '../cardItem/CardItem'

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.content}>
        <header className='header'>
          <input className={style.search} type='text' placeholder='Search' />
          <button>Добавить товар</button>
        </header>

        <div className={style.products}>
          <h3 className={style.products_title}>Недавние продукты</h3>
          <ul className={style.products_list}>
            {foodList.map(
              ({ id, src, name, descr, rating, price }: ICardItem) => (
                <CardItem
                  id={id}
                  src={src}
                  name={name}
                  descr={descr}
                  price={price}
                  rating={rating}
                />
              )
            )}
          </ul>
        </div>
      </div>
      <ul className={style.nav}>
        <li>Home</li>
        <li>Favorites</li>
      </ul>
    </div>
  )
}
