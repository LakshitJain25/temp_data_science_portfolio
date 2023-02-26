import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name">Vaibhavi</strong>
        </h1>,
    titles: [
        "Expert DTUIAN GIRL",
        "Data Scientist",
        "Machine Learning Specialist"
    ],
    about: {
        start: "I am a Delhi Technological University student enrolled in the ENE stream. " +
            "I'm excited by learning new things, contributing to the data science community,",
        exit: "I'm fluent at Python, DSA, Big Data, and more, " +
            "with a deep interest in machine learning."
    },
    workTimeline: [
        {
            id: "work-3",
            title: "Research Intern",
            company: "Sifar Zaya",
            description: "Created educational material aimed at raising awareness regarding themes such as the Sustainable Development Goals (SDGs)," 
            + "Extended Producer Responsibility (EPR), National Green Tribunal (NGT), and Zero Waste.",
            date: "Aug 2021-Dec 2021",
            icon: <DiCodeigniter/>,
            tags: ["ml", "python"]
        },
        {
            id: "work-2",
            title: "Research Trainee",
            company: "Defence Research and Develepment Organisation, Delhi",
            description: "Working on Big Data ingestion using Flume and Kafka to transfer data from warfare softwares to Hadoop Distributed File" +
                " system. Additionally, using Python and Spark for filtering, exploring, analyzing, and providing insights into data",
            date: "Dec 2022-present",
            icon: <FaMobileAlt/>,
            tags: ["ml", "hadoop","Python","Spark"]
        }
    ]
}


export default homeConfig