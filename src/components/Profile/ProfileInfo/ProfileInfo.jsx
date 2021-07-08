import React from 'react'
import css from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div className={css.box}></div>
            <div className={css.discriptionBlock}>
                <div className={css.ava_box}></div>
                <div className={css.discription}>
                    <div className={css.name}><p>Николай Макаффи</p></div>

                    <div className={css.disc_point}>
                        <div className={css.disc_name}>From</div>
                        <div className={css.disc_content}>Russia, Moscow</div>
                    </div>

                    <div className={css.disc_point}>
                        <div className={css.disc_name}>Study</div>
                        <div className={css.disc_content}>Moscow Polytech</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;