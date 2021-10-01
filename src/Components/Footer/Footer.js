import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { AiFillGitlab } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.flex}>
      <div className={styles.fitems}>
        <ul className={styles.fitemli}>
          <li>
            <Link to="/creators">Creators</Link>
          </li>

          <li>
            <Link href="history">History</Link>
          </li>
          <li>
            <a href="#">Query</a>
          </li>
        </ul>
      </div>
      <div className={styles.fitems}>
        <ul className={styles.fitemli}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/">Sign Out</Link>
          </li>
        </ul>
      </div>
    </div>

    <div className={styles.last}> ErrOr 4:O4</div>
    <div className={styles.fitemsm}>
      <ul className={styles.fitemli}>
        <li>
          <a href="https://github.com/extend">
            <AiFillGitlab />
          </a>
        </li>

        <li>
          <a href="https://instagram.com/extend">
            <AiFillInstagram />
          </a>
        </li>
        <li>
          <a href="mailto:support@extend.com">
            <AiFillMail />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/extend">
            <AiFillLinkedin />
          </a>
        </li>
      </ul>
    </div>
    <br />
    <div className={styles.last2}>...Extend...</div>
  </div>
);

export default Footer;
