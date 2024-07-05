import { Footer } from "./Components/footer/footer";
import Header from "./Components/header/Header";
import { MainContent } from "./Components/MainContent/MainContent";

function App() {
  return (
    <main className="w-full h-full">
      <Header />
      <MainContent />
      <Footer/>
    </main>
  );
}

export default App;
