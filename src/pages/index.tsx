import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function Header() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <div className={styles.videoContainer}>
            <video className={styles.video} autoPlay loop muted disablePictureInPicture disableRemotePlayback playsInline>
                <source src="https://cdn.vatsimsa.com/files/vid.mp4" type="video/mp4" />
            </video>

            <div className={styles.videoContainerContent}>
                <div className={styles.videoContainerContentTitle}>
                    Saudi Arabian vACC
                </div>
                <div className={styles.videoContainerContentText}>
                    Saying Training Documentation Site
                </div>
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
