import Header from "../../components/header";
import Footer from "../../components/footer";

function Home(){
    return (
        <div className="container">
            <Header />
            <main>
                <p>Conteúdo principal da página.</p>
            </main>
            <Footer />
        </div>
    );
}

export default Home;