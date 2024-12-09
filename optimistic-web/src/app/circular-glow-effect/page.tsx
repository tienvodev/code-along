import React from "react";
import styles from "./CircularGlowPage.module.css";
import Image from "next/image";
function CircularGlowEffectPage() {
  return (
    <div className={styles.CircularGlow}>
      <Image src="/avatar.png" alt="Girl Avatar" width={772} height={692} />
    </div>
  );
}

export default CircularGlowEffectPage;
