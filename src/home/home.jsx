import styles from "./home.module.css";

function Home() {
  return (
    <>
      <body className={styles.body}>
        <div className={styles.box}>
          <div className={styles.box1}>
            {" "}
            <img
              className={styles.img}
              src="https://images.pexels.com/photos/1925630/pexels-photo-1925630.jpeg?cs=srgb&dl=pexels-wendel-moretti-1925630.jpg&fm=jpg"
              alt="eye"
            />
          </div>
          <div className={styles.box2}>
            <img
              className={styles.img}
              src="https://images.pexels.com/photos/1925630/pexels-photo-1925630.jpeg?cs=srgb&dl=pexels-wendel-moretti-1925630.jpg&fm=jpg"
              alt="eye"
            />
          </div>
          {/* <h1 className={styles.para}>hello hello</h1> */}
          <div className={styles.vline}></div>
        </div>
        <div className={styles.box3}>
          {" "}
          <p>
            South Korea's features include K-Pop, rich cuisine, technological
            prowess, natural beauty, the Demilitarized Zone, cultural heritage,
            global cinema, efficient transport, Hallyu wave, and advanced
            healthcare. South Korea is a nation brimming with unique and vibrant
            features that have made it a global sensation. From the infectious
            rhythms of K-Pop to the mouthwatering flavors of its cuisine, from
            technological innovation to natural beauty, South Korea continues to
            captivate and inspire the world. Its rich cultural heritage,
            commitment to progress, and global cultural influence ensure that
            this remarkable nation will remain in the spotlight for years to
            come. cultural heritage, global cinema, efficient transport, Hallyu
            wave, and advanced healthcare. South Korea is a nation brimming with
            unique and vibrant features that have made it a global sensation.
            From the infectious rhythms of K-Pop to the mouthwatering flavors of
            its cuisine, from technological innovation to natural beauty, South
            Korea continues to captivate and inspire the world. Its rich
            cultural heritage, commitment to progress, and global cultural
            influence ensure that this remarkable nation will remain in the
            spotlight for years to come. cultural heritage, global cinema,
            efficient transport, Hallyu wave, and advanced healthcare. South
            Korea is a nation brimming with unique and vibrant features that
            have made it a global sensation. From the infectious rhythms of
            K-Pop to the mouthwatering flavors of its cuisine, from
            technological innovation to natural beauty, South Korea continues to
            captivate and inspire the world. Its rich cultural heritage,
            commitment to progress, and global cultural influence ensure that
            this remarkable nation will remain in the spotlight for years to
            come.
          </p>
        </div>
      </body>
    </>
  );
}

export default Home;
