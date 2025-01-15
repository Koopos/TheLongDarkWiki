import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '遗忘之境',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        每一片区域都像是被时间遗忘的角落，承载着风雪与孤独的记忆
      </>
    ),
  },
  {
    title: '孤寂之痕',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        每一个地点都是人类与自然抗争的痕迹，孤独而坚韧地存在于冰雪之中。
      </>
    ),
  },
  {
    title: '寒霜之蚀',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        寒冷与伤痛如同无形的侵蚀，一点点吞噬着生存者的意志与生命。
      </>
    ),
  },
  {
    title: '风雪旅人',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        每一位新角色都是这片冰雪世界中的旅者，带着各自的故事与命运。
      </>
    ),
  },
  {
    title: '荒野之灵',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        野生动物是这片荒野的灵魂，既是生存的威胁，也是自然的馈赠
      </>
    ),
  },
  {
    title: '生命之息',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        每一口食物与饮品都是维持生命的微弱气息，支撑着你在寒夜中前行
      </>
    ),
  },
  {
    title: '风雪之甲',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        衣物是你抵御风雪的铠甲，保护你免受寒冷的侵袭
      </>
    ),
  },
  {
    title: '希望之愈',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        急救物品是黑暗中的一丝希望，治愈伤痛，延续生命
      </>
    ),
  },
  {
    title: '生存之钥',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        工具是打开生存之门的钥匙，帮助你在这片荒野中开辟前行的道路。
      </>
    ),
  },
  {
    title: '大地之馈',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        材料是大地赐予的礼物，通过你的双手，化为生存的希望与力量。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
