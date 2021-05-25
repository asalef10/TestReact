import DogCard from './cardDog.jsx'

export default function DogCardDetils() {

    // נסיון ליצור את האובייקטים במערך 

    // let ArryObject = [{
    //     nameDog: "POKA",
    //     typeDog: "Pitbull",
    //     Age="18",

    // },
    // ]

    return (
        <div>

            {/* <DogCard nameDog={ArryObject.nameDog} typeDog={ArryObject.typeDog} Age={ArryObject.Age} /> */}
                                    
            <DogCard nameDog="POKA" typeDog="Pitbull" Age="18" />
            <DogCard nameDog="Reksi" typeDog="AskiSeberi" Age="14" />
            <DogCard nameDog="Tarzan" typeDog="pincher" Age="4" />
            <DogCard nameDog="Loni" typeDog="Bultiler" Age="4" />

        </div>
    )

}
