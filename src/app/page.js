

import styles from "./page.module.css";
import { Button } from 'antd';

import Link from 'next/link'
export default function Home() {
  return (

    <>
      <ol>
        <li>
          Get started by editing <code>src/app/page.js</code>.
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>

      <div className={styles.ctas}>
        <div className="App">
          <Button type="primary">Button Test</Button>
        </div>
      </div>
    </>
  );
}
