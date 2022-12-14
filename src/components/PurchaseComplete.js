import React from 'react'
import styles from './PurchaseComplete.module.css'

function PurchaseComplete(props) {
    return (
        <div className={styles.body}>
            <div className={styles.card}>
                <div className={styles.card_icon}>
                    <svg width="68" height="72" viewBox="0 0 68 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_2_254)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M56.5037 17.7984L29.3597 44.7552C27.9677 46.1376 25.7637 46.1376 24.3717 44.7552L11.4957 31.968C10.1037 30.5856 10.1037 28.3968 11.4957 27.0144C12.8877 25.632 15.0917 25.632 16.4837 27.0144L26.8657 37.3248L51.5157 12.8448C52.9077 11.4624 55.1117 11.4624 56.5037 12.8448C57.8957 14.2272 57.8957 16.416 56.5037 17.7984Z" fill="#6FCF97" />
                        </g>
                        <defs>
                            <filter id="filter0_d_2_254" x="-5" y="-4" width="78" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="6" />
                                <feGaussianBlur stdDeviation="5" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.129412 0 0 0 0 0.117647 0 0 0 0 0.262745 0 0 0 0.08 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_254" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_254" result="shape" />
                            </filter>
                        </defs>
                    </svg>


                </div>
                <div className={styles.card_message}>
                    <h1>Purchase Completed</h1>
                </div>
                <div className={styles.card_message2}>
                    <p>Please check your email for details concerning
                        this transaction</p>
                </div>
                <div className={styles.card_message3}
                    onClick={props.goBackPage}
                >
                    <p>Return Home</p>
                </div>
            </div>
        </div>
    )
}

export default PurchaseComplete