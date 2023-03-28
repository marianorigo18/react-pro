import ItemListContainer from "../components/ItemsComponents/ItemListContainer"

export const Home = () => {
    return(
    <div>
        <div>
        <ItemListContainer>
            <div className="bg-green-400 h-96">
                <div className="h-52 flex justify-center"><img className="h-full" src="./logo512.png" alt="" /></div>
                <div className="text-5xl text-center">text</div>
                <div className="text-4xl text-center">ver mas</div>
            </div>
            <div className="bg-green-400 h-96">
                <div>img</div>
                <div>text</div>
                <button>ver mas</button>
            </div>
            <div className="bg-green-400 h-96">
                <div>img</div>
                <div>text</div>
                <button>ver mas</button>
            </div>
        </ItemListContainer>
        </div>
    </div>
    )}
