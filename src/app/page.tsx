import styles from "./page.module.css";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <main className={styles.main}>
      <Textarea />
    </main>
  );
}
