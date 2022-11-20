import React, { useState, useEffect } from 'react'
import "./Email.css"
import { Header } from "../../Companenta/Header/Header"
import { NavLink } from 'react-router-dom'
import galarey from "../../Assets/Icons/Galarey Icon.svg"
import blueGalarey from "../../Assets/Icons/Blue Galerey.svg"
import sendLogo from "../../Assets/Icons/Send Logo.svg"
import whiteStar from "../../Assets/Icons/Start None.svg"
import fileLogo from "../../Assets/Icons/White File.svg"
import markLogo from "../../Assets/Icons/Mark Icon.svg"
import clock from "../../Assets/Icons/Clock Icon.svg"
import siyohrangTortburchak from "../../Assets/Icons/Email Blue Rectangle.svg"
import pushtiTortburchak from "../../Assets/Icons/Email Pnk Rectangle.svg"
import orangeTortburchak from "../../Assets/Icons/Email Yellow Rectangle.svg"
import team from "../../Assets/Icons/Team.svg"
import card from "../../Assets/Icons/25-credit card.svg"
import { EmailUsers } from "../../Companenta/Data/EmailUsers"
import { EmailItem } from '../../Companenta/Email/EmailItem'
import { EmailPagination } from "../../Companenta/Email/EmailPagination"
import trash from "../../Assets/Icons/Trash Icon.svg"
import krestik from "../../Assets/Icons/Iks Icon.svg"
import tepgagaPastga from "../../Assets/Icons/tepaga Strelka.svg"
import star from "../../Assets/Icons/Grey Star.svg"
import undov from "../../Assets/Icons/Grey Undov.svg"
import betta from "../../Assets/Icons/Betta.svg"
import yonlaganI from "../../Assets/Icons/Yonlagan I.svg"
import underLine from "../../Assets/Icons/U Underline.svg"
import tLogo from "../../Assets/Icons/T logo.svg"
import alignLeft from "../../Assets/Icons/Align Left.svg"
import alignCenter from "../../Assets/Icons/Align Center.svg"
import alignRight from "../../Assets/Icons/Align Right.svg"
import galareya from "../../Assets/Icons/Galareya Icon.svg"
import skripka from "../../Assets/Icons/Grey Skripka.svg"
import uchNuqta from "../../Assets/Icons/3 nuqta.svg"





export function Email() {

    const [user, setUser] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setpostsPerPage] = useState(5)
    useEffect(() => {
        EmailUsers()
            .then((data) => {
                setUser(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentUsers = user.slice(firstPostIndex, lastPostIndex);

    return (
        <div id='email-main-container'>
            <div id='email-main-container-left'>
                <div>
                    <Header />
                </div>
                <div>
                    <h1>Email</h1>
                </div>
                <div id='email-main-container-left-inside'>
                    <div id='email-main-container-left-inside-left'>
                        <button id='email-main-container-left-inside-left-header-button'>+ New Mail</button>
                        <div id='email-main-container-left-inside-left-nav'>
                            <NavLink activeclassname="email-nav" id='email-navbar-item' to="/email">
                                <img src={galarey} alt="" />
                                <p>Inbox</p>
                            </NavLink>
                            <NavLink activeclassname="email-nav" id='email-navbar-item' to="/email">
                                <img src={sendLogo} alt="" />
                                <p>Send</p>
                            </NavLink>
                            <NavLink activeclassname="email-nav" id='email-navbar-item' to="/email">
                                <img src={whiteStar} alt="" />
                                <p>Favourite</p>
                            </NavLink>
                            <NavLink activeclassname="email-nav" id='email-navbar-item' to="/email">
                                <img src={fileLogo} alt="" />
                                <p>Inbox</p>
                            </NavLink>
                            <NavLink activeclassname="email-nav" id='email-navbar-item' to="/email">
                                <img src={markLogo} alt="" />
                                <p>Inbox</p>
                            </NavLink>
                            <NavLink activeclassname="email-nav" id='email-navbar-item' to="/email">
                                <img src={clock} alt="" />
                                <p>Inbox</p>
                            </NavLink>
                            <select id='email-main-container-left-inside-left-select'>
                                <option>Info</option>
                                <option>Few</option>
                                <option>More</option>
                            </select>
                        </div>
                        <p id='email-main-container-left-inside-left-label'>Labels</p>
                        <div id='email-main-container-left-inside-left-bottom-nav'>
                            <div id='email-main-container-left-inside-left-bottom-nav-item'>
                                <img src={siyohrangTortburchak} alt="" />
                                <p>Works</p>
                            </div>
                            <div id='email-main-container-left-inside-left-bottom-nav-item'>
                                <img src={pushtiTortburchak} alt="" />
                                <p>Side projects</p>
                            </div>
                            <div id='email-main-container-left-inside-left-bottom-nav-item'>
                                <img src={orangeTortburchak} alt="" />
                                <p>Offer</p>
                            </div>
                        </div>
                    </div>
                    <div id='email-main-container-left-inside-right'>
                        <div id='email-main-container-left-inside-right-header'>
                            <div id='email-main-container-left-inside-right-header-item'>
                                <img src={blueGalarey} alt="" />
                                <p>Primary</p>
                            </div>
                            <div id='email-main-container-left-inside-right-header-item'>
                                <img src={team} alt="" />
                                <p>Socials</p>
                            </div>
                            <div id='email-main-container-left-inside-right-header-item'>
                                <img src={card} alt="" />
                                <p>Promotion</p>
                            </div>
                        </div>
                        <div id="email-main-container-left-inside-right-userlar">
                            <EmailItem
                                users={currentUsers}
                            />
                            <EmailPagination
                                totalPosts={user.length}
                                setCurrentPage={setCurrentPage}
                                postsPerPage={postsPerPage}
                                currentPage={currentPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div id='email-main-container-right'>
                <div id='email-main-container-right-header'>
                    <h1 id='font-weight-600'>Preview</h1>
                    <div id='email-main-container-right-header-right'>
                        <img src={trash} alt="" />
                        <img src={tepgagaPastga} alt="" />
                        <img src={krestik} alt="" />
                    </div>
                </div>
                <div id='email-main-container-right-inside-main'>
                    <div id='email-main-container-right-report'>
                        <div id='email-main-container-right-report-left'>
                            <h3 id='font-weight-600'>Weekly Meeting Report</h3>
                            <p id="grey-color">Today, August 30th 2022  04:45 PM</p>
                        </div>
                        <div id='email-main-container-right-report-right'>
                            <img src={star} alt="" />
                            <img src={undov} alt="" />
                        </div>
                    </div>
                    <div id='email-main-container-right-user'>
                        <div id="banking-right-grey-background"></div>
                        <div>
                            <h4 id='font-weight-600'>Karen Hope</h4>
                            <p id='grey-color'>soap@mail.com</p>
                        </div>
                    </div>
                    <div id='email-main-container-right-main-text'>
                        <div>
                            <p id="grey-color">Hi Madison,</p>
                        </div>
                        <div>
                            <p id="grey-color"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna .</p>
                        </div>
                        <div>
                            <p id="grey-color">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </div>
                        <div>
                            <p id="grey-color">Regards,</p>
                            <p id="grey-color">Nadila</p>
                        </div>
                    </div>
                </div>

                <div id='email-main-container-right-color-container'>
                    <div id='email-main-container-right-color-container-left'>
                        <div id='email-main-container-right-color-container-grey'></div>
                        <div id='email-main-container-right-color-container-bottom'>
                            <img src={skripka} alt="" />
                            <p>Image's type...</p>
                        </div>
                    </div>
                    <div id='email-main-container-right-color-container-left'>
                        <div id='email-main-container-right-color-container-grey'></div>
                        <div id='email-main-container-right-color-container-bottom'>
                            <img src={skripka} alt="" />
                            <p>Image's type...</p>
                        </div>
                    </div>
                </div>

                <div id='email-main-container-right-message-container'>
                    <div id='email-main-container-right-message-container-top'>
                        <p>Write your message here...</p>
                    </div>
                    <div id='email-main-container-right-message-container-bottom'>
                        <div id='email-main-container-right-message-container-bottom-left'>
                            <img src={betta} alt="" />
                            <img src={yonlaganI} alt="" />
                            <img src={underLine} alt="" />
                            <img src={tLogo} alt="" />
                        </div>
                        <div id='email-main-container-right-message-container-bottom-right'>
                            <img src={alignLeft} alt="" />
                            <img src={alignCenter} alt="" />
                            <img src={alignRight} alt="" />
                        </div>
                    </div>
                </div>
                <div id='email-main-container-right-message-bottom'>
                    <div id='email-main-container-right-message-bottom-left'>
                        <img src={skripka} alt="" />
                        <img src={galareya} alt="" />
                        <img src={uchNuqta} alt="" />
                    </div>
                    <div id='email-main-container-right-message-bottom-right'>
                        <button>
                            Send
                        </button>
                        <img src={sendLogo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
