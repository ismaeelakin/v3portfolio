"use client";

import BoxLayout from "@/layout/BoxLayout/BoxLayout";
import { useEffect, useState } from "react";
import { IoMail, IoCall } from "react-icons/io5";
import { RiTerminalBoxFill, RiGamepadFill, RiUser4Fill } from "react-icons/ri";

import sidebarStyles from "@/components/Sidebar/Sidebar.module.scss";
import { Dropdown } from "@/components/Dropdown/Dropdown";

import useCollapse from "react-collapsed";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./About.module.scss";
import Head from "@/extras/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Ismaeel_Akin</title>
        <meta
          name="description"
          content="Hi all. I am Ismaeel-Akin, a Full-stack Software developer. I am proficient in JavaScript and TypeScript. I have experience working with React, Next.js, Node.js and MongoDB.  I am open to learning new technologies and working on new projects."
        />
      </Head>
      <div>
        <BoxLayout sideBar={<FlexSideBar />} navTitle="personal-info">
          <div className={styles.About}>
            <div className={styles.AboutInfo}>
              <pre className={styles.code}>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>{"/**"}</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>I&apos;m Ismaeel_Akin,</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>a Computer Programmer. Inspired by</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>entrepreneurs who followed a distinct pattern:</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>they began as software engineers</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>and then tackled real-world problems.</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>
                    But now Computer Programming is a deep-seated passion.{" "}
                  </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>I believe Programming languages and framework</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>are just means to solve problems. The focus</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>should always be on the solution, not the tools.</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>
                    I thrive as a Software engineer, Writer, and now Computer
                    Programmer
                  </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>
                    because, I do not want to limit myself to softwares.
                  </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>So far it is programming, I am ready to learn.</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>
                    I quickly master new tools and excel in collaborative work.
                  </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>Let’s connect to collaborate or share insights!</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>*/</code>
                </span>
              </pre>
            </div>
            <div className={styles.AboutCodePreview}></div>
          </div>
        </BoxLayout>
      </div>
    </>
  );
}

const FlexSideBar = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [firstDrawerOpen, setFirstDrawerOpen] = useState(true);
  const [secondDrawerOpen, setSecondDrawerOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 700) {
      setFirstDrawerOpen(false);
      setSecondDrawerOpen(false);
    }
  }, []);

  return (
    <div
      className={[sidebarStyles.SideBar, sidebarStyles.SideBarFlex].join(" ")}
    >
      <div className={sidebarStyles.SideBarFlexLeft}>
        <RiTerminalBoxFill fill="#607B96" size={20} />
        <RiGamepadFill fill="#607B96" size={20} />
        <RiUser4Fill fill="#607B96" size={20} />
      </div>
      <div className={sidebarStyles.SideBarFlexRight}>
        <Sidebar
          contents={[
            {
              title: "personal-info",
              content: [
                <Dropdown
                  key={0}
                  folderFill="#E99287"
                  title="bio"
                  entries={["biography"]}
                  isActive={true}
                />,
                <Dropdown
                  key={1}
                  folderFill="#43D9AD"
                  title="interests"
                  entries={["hobbies"]}
                />,
                <Dropdown
                  key={2}
                  folderFill="#3A49A4"
                  title="education"
                  entries={["high-school", "university"]}
                />,
              ],
            },
            {
              title: "contacts",
              content: [
                <a key={0} href="mailto:ismaeelakin@gmail.com">
                  <IoMail fill="#607b96" />
                  <span>ismaeelakin@gmail.com</span>
                </a>,
                <a key={1} href="tel:+2349045959464">
                  <IoCall fill="#607b96" />
                  <span>+(234)905-2444-308</span>
                </a>,
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};
