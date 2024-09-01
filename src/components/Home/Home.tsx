import CardItem from '../cardItem/CardItem'
import style from './Home.module.scss'

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
            <CardItem name='' descr='' price={1} rating={1} />
            <CardItem name='' descr='' price={1} rating={1} />
            <CardItem name='' descr='' price={1} rating={1} />
            <CardItem name='' descr='' price={1} rating={1} />
            <CardItem name='' descr='' price={1} rating={1} />
            <CardItem name='' descr='' price={1} rating={1} />
            <CardItem name='' descr='' price={1} rating={1} />
          </ul>
        </div>
      </div>
      <div className={style.nav}>Nav</div>
    </div>
  )
}
