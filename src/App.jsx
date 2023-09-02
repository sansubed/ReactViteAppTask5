import styles from "./styles.module.css";

const varName = "Texas Tech University";
function App() {
  return (
    <div>
      <div className={styles.header}>
        <h1>{varName}</h1>
      </div>
      <main>
        <div className={styles.main}>
          <span className={styles.box}>From Here, It's Possible!</span>
          <br />
          <br />
          <div className={styles.figure}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Texas_Tech_University_seal.svg/150px-Texas_Tech_University_seal.svg.png"
              alt="TTU"
            />
          </div>
          <div>
            Texas Tech University (Texas Tech, Tech, or TTU) is a{" "}
            <a href="https//www.ttu.edu">public research university</a> in
            Lubbock, Texas. Established on February 10, 1923, and called Texas
            Technological College until 1969, it is the flagship institution of
            the five-institution Texas Tech University System. As of Fall 2022,
            the university is the sixth-largest in Texas.{" "}
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <h1>The End</h1>
      </footer>
    </div>
  );
}

export default App;
