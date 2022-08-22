import React from 'react'
import styles from './ConfirmPayment.module.css'

function ConfirmPayment() {
    return (
        <div className={styles.body}>
            <div className={styles.steps}>
                <div className={styles.steps_child}>
                    <div className={styles.steps_child_title}>
                        <p>Personal Info</p>
                    </div>
                    <div className={styles.steps_child_line}></div>
                </div>

                <div className={styles.steps_child}>
                    <div className={styles.steps_child_title}>
                        <p>Billing Info</p>
                    </div>
                    <div className={styles.steps_child_line}></div>
                </div>

                <div className={styles.steps_child}>
                    <div className={styles.steps_child_title}>
                        <p className={styles.active}>Confirm Payment</p>
                    </div>
                    <div className={styles.steps_child_line_active}></div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.card_heading}>
                    <div className={styles.name}>
                        <h2>Item Name</h2>
                    </div>
                    <div>
                        <h2>₦ Price</h2>
                    </div>
                </div>
                <div className={styles.card_body}>
                    <div className={styles.name}>
                        <h2>Data science and usability</h2>
                    </div>
                    <div>
                        <h2>50,000.00</h2>
                    </div>
                </div>
                <div className={styles.card_body}>
                    <div className={styles.name}>
                        <h2>Shipping</h2>
                    </div>
                    <div>
                        <h2>0.00</h2>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.card_body_total}>
                    <div className={styles.name}>
                        <h2>Total</h2>
                    </div>
                    <div>
                        <h2>50,000.00</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmPayment