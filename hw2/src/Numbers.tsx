import NumbersItem from './NumbersItem'


type NumbersProps = {
    num: number
    subtitle: string
    description: string
}


function Numbers() {

  const numbers: NumbersProps[] = [
    {num: 26, subtitle: "лет", description: "на рынке"},
    {num: 26, subtitle: "лет", description: "на рынке"},
    {num: 26, subtitle: "лет", description: "на рынке"}
  ]

  return (
      <section className="numbers">
        {
            numbers.map((card) => (
            <NumbersItem 
              num = {card.num}
              subtitle = {card.subtitle}
              description = {card.description}
            />
          ))
        }
      </section>
  )
}

export default Numbers