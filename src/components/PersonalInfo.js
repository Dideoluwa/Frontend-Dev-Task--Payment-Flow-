import React from 'react'
import styles from './PersonalInfo.module.css'

function PersonalInfo() {
    return (
        <div className={styles.body}>
            <div className={styles.steps}>
                <div className={styles.steps_child}>
                    <div className={styles.steps_child_title}>
                        <p className={styles.active}>Personal Info</p>
                    </div>
                    <div className={styles.steps_child_line_active}></div>
                </div>

                <div className={styles.steps_child}>
                    <div className={styles.steps_child_title}>
                        <p>Billing Info</p>
                    </div>
                    <div className={styles.steps_child_line}></div>
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
                    <label>Name</label>
                    <input
                        placeholder='Opara Linus Ahmed'
                        type='text'
                    />
                </div>
                <div className={styles.form_child}>
                    <label>Email Address <span className={styles.span}>*</span></label>
                    <p>The purchase reciept would be sent to this address</p>
                    <input
                        required
                        placeholder='OparaLinusAhmed@devmail.com'
                        type='email'
                    />
                </div>
                <div className={styles.form_child}>
                    <label>Address 1</label>
                    <input
                        placeholder='The address of the user goes here'
                        type='text'
                    />
                </div>
                <div className={styles.form_child}>
                    <label>Address 2</label>
                    <input
                        placeholder='and here'
                        type='text'
                    />
                </div>
                <div className={styles.form_child2}>
                    <div className={styles.form_child}>
                        <label>Local Government</label>
                        <input
                            placeholder='Surulere'
                            type='text'
                        />
                    </div>
                    <div className={styles.form_child}>
                        <label>State</label>
                        <select id="States" name="States">
                            <option value="Lagos">Lagos</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo