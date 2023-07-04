import { Header } from "components/header/ui";
import { Footer } from "components/footer/ui";
import { Tabs } from "components/tabs/ui";

import s from "./style.module.css";

function App() {
  return (
    <div className={s.wrapper}>
      <Header/>
      <main className={s.container}>
        <Tabs/>
      </main>
      <Footer/>
    </div>
  )
}

export default App;
