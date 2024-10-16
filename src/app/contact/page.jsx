// "use client";

import Image from "next/image";
import styles from "./contact.module.css";
// import { useEffect, useState } from "react";
// import HydrationTest from "@/components/hydrationTest";
// import dynamic from "next/dynamic";

const ContactPage = () => {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // const a = Math.random();

  // console.log(a);

  // const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill />
      </div>
      <div className={styles.formContainer}>
        {/* {isClient && a} */}
        {/* <HydrationTestNoSSR /> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
