import React from 'react'

type Props = {
  metin: string
  renk: "green" | "red" | "blue"
  boyut?: "küçük" | "orta" | "büyük"
}

const MyButton = (props: Props) => {
  return (
    <button className={`'bg-${props.renk}-500 text-white p-4 rounded hover:bg-${props.renk}-800'`}>{props.metin}</button>
  )
}

const app = () => {
  return (
    <div>
      <MyButton metin={"Satın al"} renk={"red"} boyut={"küçük"} />
      <MyButton metin={"Satın al"} renk={"blue"} boyut={"orta"} />

    </div>
  )
}

export default app
