import Image from "next/image";
import myImage from "./me.jpg.jpg";

import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <article className={styles.root}>
      <Image src={myImage} alt={"Kate`s photo"} loading="eager" height="500" />
      <div>
        Lorem ipsum is a full stack developer. Aperiam eaque et quo voluptas
        illum, tempore repellendus! Aut rerum soluta eius voluptates provident
        ad, saepe, consequatur ipsa voluptatem natus laborum incidunt!
      </div>
    </article>
  );
}
