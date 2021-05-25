export default function cardDog({ nameDog, typeDog, Age, color }) {
    if (Age > 4) {
        color = "green"
    }
    else if (Age <= 4) {
        color = "yellow"
    }
    return (

        <div style={{background:color}}>
            <h1>The Name dog is {nameDog}</h1>
            <h2>The Type dog is {typeDog}</h2>
            <h3>The  Age dog is {Age}</h3>
        </div>
    )

}