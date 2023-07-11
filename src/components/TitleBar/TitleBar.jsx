/* eslint-disable react/no-unescaped-entities */

import { Tabs } from "flowbite-react";
import FrontEnd from "../../Pages/WebDev/FrontEnd";
import { frontEndRoadMap } from "../../../public";

const TitleBar = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">WELCOME TO <br /> WEB DEVLOPMENT WORLD !!</h1>

                    <div className="text-center mt-10">
                        <Tabs.Group className="items-center" aria-label="Pills" style="pills">
                            <Tabs.Item active title="Front End">

                                <div className="main-content-container mt-20">
                                    <div className="top-content">
                                        <img src={frontEndRoadMap} alt="" />
                                    </div>
                                    <div className="bottom-content mt-10">
                                        <FrontEnd />
                                    </div>
                                </div>

                            </Tabs.Item>
                            <Tabs.Item title="Back End">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Back End
                                </p>
                            </Tabs.Item>
                        </Tabs.Group>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TitleBar;