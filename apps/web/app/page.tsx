import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>박미정</header>
      <main className={styles.main}>안녕하세요 박미정입니다.</main>
      <div className={styles.footer}>여기에 버튼</div>
    </div>
  );
}
