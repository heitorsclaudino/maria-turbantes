import Header from "../../components/header";
import Footer from "../../components/footer";

function Home(){
    
    return (
        <div className="container">
            <Header />
            <main>
                <h3>Maria turbantes apresenta produtos que não vão sair da sua cabeça!</h3>
                <p> Novo site, novos ares... </p>
            </main>
            <Footer />
        </div>
    );
}

export default Home;