import Link from "next/link"
import { FoodItem } from "../../types"
import Image from "next/image"
import { items } from "../../data"

export default function MenuPage(props: {
  items: FoodItem[]
}) {
  console.log('props', props)
  const items = props.items.map((item) => {
    const path = `/menu/${item.id}`
    return (
      <Link href={path}>
        <div className='menu-item'>
          <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>${item.price}</p>
          </div>
          <Image src={item.image} alt={item.name} height={200} width={300} />
        </div>
      </Link>
    )
  })
  return (
    <div className='container'>
      <h1>Menu</h1>
      {items}
    </div>
  )
}

export const getServerSideProps = async function () {
  return {
    props: {
      items
    }
  }
}