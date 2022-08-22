import React, { useState } from 'react'
import PersonalInfo from './components/PersonalInfo'
import styles from './App.module.css'
import BillingInfo from './components/BillingInfo';
import ConfirmPayment from './components/ConfirmPayment';
import PurchaseComplete from './components/PurchaseComplete';



function App() {
  const [page, setPage] = useState(1)
  let [showButton, setShowButton] = useState(true)
  function goNextPage() {
    if (page >= 4) {
      return;
    }
    setPage(page => page + 1)
  }

  function goBackPage() {
    if (page <= 1) {
      return;
    }
    setPage(page => page - 1)
  }
  let button = page === 3 ? 'Pay' : 'Next'
  let show = page === 4 ? !showButton : showButton

  return (
    <div className={styles.body}>
      <div className={styles.header}>
       {show && <h1>Complete your Purchase</h1>}
      </div>
      {page === 1 && <PersonalInfo />}
      {page === 2 && <BillingInfo />}
      {page === 3 && <ConfirmPayment />}
      {page === 4 && <PurchaseComplete goBackPage={goBackPage} />}

      {show && <div className={styles.buttons}>
        <div>
          <button onClick={goNextPage}>{button}</button>
        </div>
        <div>
          <h3 onClick={goBackPage}>Cancel Payment</h3>
        </div>

      </div>
      }
    </div>
  )
}

export default App

