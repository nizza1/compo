
import styles from "./page.module.css";


//components
import Hero from "@/app/components/heroS/hero";

export default function Home() {
  return (
    <main className={styles.main}>
     <Hero />
    </main>
  );
}
