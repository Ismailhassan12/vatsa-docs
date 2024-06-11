import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function Header() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <div class="video-container">
  <video autoplay loop muted disablepictureinpicture disableremoteplayback playsinline>
    <source src="https://cdn.vatsimsa.com/files/vid.mp4" type="video/mp4" />
  </video>
  
  <div class="video-container_content">
    <h1>
      Any content here!
    </h1>
  </div>
</div>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout description={siteConfig.tagline}>
            <Header />
        </Layout>
    );
}
