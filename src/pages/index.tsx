/*
 * @Author: 娄松
 * @Date: 2025-01-10 16:48:19
 * @LastEditors: 娄松 
 * @LastEditTime: 2025-01-16 14:44:36
 * @FilePath: \TheLongDarkWiki\src\pages\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.textLeft}>寒风如刀，割裂了寂静的天际，雪花在黑暗中无声飘落，仿佛时间的碎片，缓缓覆盖这片被遗忘的土地。你站在荒原的边缘，脚下是冻结的泥土，头顶是无尽的星空，星光微弱，却倔强地穿透了厚重的云层，洒下一丝希望的光辉。</p>
        <p className={styles.textLeft}>这里是世界的尽头，也是新生的起点。大熊岛，一个被冰雪与孤独统治的王国，它的每一寸土地都藏着秘密，每一阵风都低语着过往的故事。你曾以为，寒冷只是肌肤的刺痛，孤独只是心灵的幻影，但在这里，它们化作了实体，像无形的野兽，潜伏在每一个角落，等待着吞噬你的意志。</p>
        <p className={styles.textLeft}> 你背负着过去的重量，踏上了这片未知的土地。背包里是寥寥无几的物资，心中是未解的谜团。每一步都可能是生与死的抉择，每一秒都可能是希望与绝望的交织。你听见狼嚎在远方回荡，看见极光在天际舞动，那是自然的低语，也是命运的召唤。</p>
        <p className={styles.textLeft}>在这漫漫长夜中，时间失去了意义，唯有生存的本能驱使着你前行。你将点燃篝火，驱散寒冷；你将狩猎野兽，填补饥饿；你将探索废墟，寻找答案。但记住，这里的每一片雪花，每一阵风，都是你的敌人，也是你的伙伴。它们考验着你，也塑造着你。</p>
        <p className={styles.textLeft}>当黎明迟迟未至，当黑暗似乎永无止境，你是否还能坚守内心的光芒？在这片被冰雪覆盖的世界里，你将书写属于自己的传奇。无论是生存，还是毁灭，这漫漫长夜，终将成为你生命中最深刻的印记。</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/序章/我是菜鸟"
          >
            ——欢迎来到《漫漫长夜》
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="漫漫长夜中文wiki"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
