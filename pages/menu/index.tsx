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
      <div className='menu-item'>
        <div>
          <Link href={path}>
            <h3>{item.name}</h3>
          </Link>
          <p>{item.description}</p>
          <p>${item.price}</p>
        </div>
        <Image src={item.image} alt={item.name} height={200} width={300} />
      </div>
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