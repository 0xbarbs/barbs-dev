import Image from "next/image";
import styles from "./page.module.scss";
import { SocialLink } from "@/app/components/SocialLink";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          src="/avatar.jpeg"
          alt="Barbs Avatar"
          className={styles.avatar}
          width={350}
          height={350}
          priority
        />

        <div className={styles.buttons}>
          <SocialLink
            image="github.png"
            url="https://github.com/0xbarbs"
          />
          <SocialLink
            image="warpcast.png"
            url="https://warpcast.com/bbq"
          />
          <SocialLink
            image="x.png"
            url="https://twitter.com/0xbarbs"
          />
        </div>
      </div>
    </main>
  );
}
