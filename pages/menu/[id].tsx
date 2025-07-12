import { items } from "../../data";
import { GetServerSidePropsContext } from "next";
import { FoodItem } from "../../types";
import Image from "next/image";
import Link from "next/link";

export const getServerSideProps = async function (context: GetServerSidePropsContext) {
  const item = items.find(element => element.id === context.params?.id)

  return {
    props: {
      item
    }
  }
}

export default function DetailPage (props: {
  item: FoodItem
}) {
  const items = props.item.ingredients.map((ingredient, index) => {
    return (
      <li key={index}>{ingredient}</li>
    )
  })
  return (
    <div className="dish-details-container">
      <h1>{props.item.name}</h1>
      <div className='dish-image'>
        <Image
          src={props.item.image}
          alt={props.item.name}
          height={400}
          width={600}
        />
      </div>
      <h2>Ingredients</h2>
      <ul>
        {items}
      </ul>
      <h3>${props.item.price}</h3>
      <Link href='/menu'>Menu</Link>
    </div>
  )
}