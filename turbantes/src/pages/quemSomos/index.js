import Header from "../../components/header";
import Footer from "../../components/footer";

function QuemSomos(){
    return (
        <div className="w-screen h-full bg-violet-200 flex flex-col">
            <Header />
            <div className="w-screen h-auto flex flex-col items-center">
                
                <div className="w-1/2 m-11">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing
                </div>

                <div className="h-[400px] mb-11">
                    <img src="https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Abacaxi descolado" style={{height: 400, width: 600}}/>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default QuemSomos;