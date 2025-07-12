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
  const list = props.item.ingredients.join(', ')
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
      <h3>Ingredients</h3>
      <p>
        {list}
      </p>
      <h2>${props.item.price}</h2>
      <Link href='/menu'>Menu</Link>
    </div>
  )
}