
import styles from "./page.module.css";


//components
import Hero from "@/app/components/heroS/hero";
import Benefit from "./components/benef/benefit";
import Window from './components/global/windowL/window'

export default function Home() {
  return (
    <main className={styles.main}>
     <Hero />
     <Benefit />
     <Window />
    </main>
  );
}
