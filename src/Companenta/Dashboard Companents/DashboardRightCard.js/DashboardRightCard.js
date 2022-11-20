import React, { useState, useEffect } from 'react'
import "./DashboardRightCard.css"
import star from "../../../Assets/Icons/Alone Star.svg"
import Greystar from "../../../Assets/Icons/Alone Grey Star.svg"
import { DashboardRightUsers } from "../../Data/DashboardRightUsers"
import { useSnackbar } from 'notistack'

export function DashboardRightCard() {
    const { enqueueSnackbar } = useSnackbar()
    const [users, setUsers] = useState([])

    useEffect(() => {
        DashboardRightUsers()
            .then((data) => {
                setUsers(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    // const achive = () => {
    //     e.preventDefault()
    //     enqueueSnackbar(`message 📤 successfully deleted ❌`, {
    //         autoHideDuration: "2000",
    //         variant: "error",
    //     });
    //     users.filter(item => item.id !== )

    // const accept = () => {
    //     e.preventDefault()
    //     enqueueSnackbar(`${user.name}'s message received 🥳`, {
    //         autoHideDuration: "2000",
    //         variant: "success",
    //     });
    // }

    return (
        <div id="dashboard-right-card-main-container">
            {users.map((user, index) => {
                return (
                    <div key={index} id='card-container'>
                        <div id='card-container-header'>
                            <div id='card-container-header-box'>

                            </div>
                            <div id='card-container-header-text'>
                                <h3>{user.name}</h3>
                                <div id='card-container-header-star'>
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={Greystar} alt="" />
                                </div>
                            </div>
                        </div>
                        <p>{user.message}</p>
                        <div id='card-container-bottom'>
                            <a href=""
                                // onClick={achive}
                                onClick={(e) => {
                                    e.preventDefault()
                                    enqueueSnackbar(`${user.name}'s message 📤 successfully deleted ❌`, {
                                        autoHideDuration: "2000",
                                        variant: "error",
                                    });
                                }}
                            >
                                Achive
                            </a>
                            <a href="" onClick={(e) => {
                                e.preventDefault()
                                enqueueSnackbar(`${user.name}'s message received 🥳`, {
                                    autoHideDuration: "2000",
                                    variant: "success",
                                });
                            }}
                            >
                                Accept
                            </a>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

