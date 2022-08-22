import React from 'react'
import styles from './BillingInfo.module.css'

function BillingInfo() {
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
                        <p className={styles.active}>Billing Info</p>
                    </div>
                    <div className={styles.steps_child_line_active}></div>
                </div>

                <div className={styles.steps_child}>
                    <div className={styles.steps_child_title}>
                        <p>Confirm Payment</p>
                    </div>
                    <div className={styles.steps_child_line}></div>
                </div>
            </div>
            <div className={styles.form}>
                <div className={styles.form_child}>
                    <label>Name on Card <span className={styles.span}>*</span></label>
                    <input
                        placeholder='Opara Linus Ahmed'
                        type='text'
                    />
                </div>
                <div className={styles.form_child}>
                    <label>Card Type <span className={styles.span}>*</span></label>
                    <select id="Types" name="Cards">
                        <option value="Lagos">Visa</option>
                    </select>
                </div>
                <div className={styles.form_child2}>
                    <div className={styles.form_child}>
                        <label>Card details <span className={styles.span}>*</span></label>
                        <input
                            placeholder='44960 44960 44960 44960'
                            type='text'
                        />
                    </div>
                    <div className={styles.form_child}>
                        <label>Expiry date <span className={styles.span}>*</span></label>
                        <input
                        className={styles.expiryDate}
                            placeholder='04 / 23'
                            type='text'
                        />
                    </div>
                    <div className={styles.form_child}>
                        <label>CVV <span className={styles.span}>*</span></label>
                        <input
                         className={styles.cvv}
                            placeholder='923'
                            type='text'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BillingInfo