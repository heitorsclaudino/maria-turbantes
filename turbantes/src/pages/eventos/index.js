import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Eventos () {
    return (
        <div className="container">
            <Header />
            <div className="grid grid-cols-12 grid-rows-2 gap-4 w-screen mt-16">
                <div className="bg-blue-800 col-span-3 h-56 col-start-3 rounded-lg p-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing
                </div>
                <div className="bg-red-800 col-span-5 h-56 rounded-lg"></div>
                <div className="bg-yellow-500 col-span-5 h-56 col-start-3 rounded-lg"></div>

                <div className="bg-green-700 col-span-3 h-56 rounded-lg p-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing
                </div>      
            </div>

            <div className="mt-10">
                <Footer />
            </div>
        </div>
    );
};