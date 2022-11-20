import React from 'react'
import greyStar from "../../Assets/Icons/Grey Star.svg"
import skripka from "../../Assets/Icons/Skripka.svg"

export function EmailItem({ users }) {

    return (
        <div  id='emailItem-main-container'>
            {users.map((item, index) => {
                return (
                    <div id='email-main-container-left-inside-right-card-item'>
                        <div id='email-main-container-left-inside-right-card-item-left'></div>
                        <div id='email-main-container-left-inside-right-card-item-right'>
                            <div>
                                <h3 id='font-weight-600'>{item.name}</h3>
                                <p id='email-main-container-left-inside-right-card-item-right-text'>{item.text}</p>
                            </div>
                            <div id='email-main-container-left-inside-right-card-item-right-bottom'>
                                <p id='grey-color'>{item.hour}</p>
                                <div id='email-main-container-left-inside-right-card-item-right-bottom-inside'>
                                    <img src={greyStar} alt="" />
                                    <img src={skripka} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
