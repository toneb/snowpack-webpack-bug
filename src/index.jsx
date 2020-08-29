import React from 'react';
import ReactDOM from 'react-dom';

import styles from "./test.module.css";

ReactDOM.render(
  <React.StrictMode>
    <div className={styles.demo}>
      Classname: {styles.demo ?? "undefined"}
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
