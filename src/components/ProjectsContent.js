import React from 'react'
import './Projects.css'
// import { Link } from 'react-router-dom';


export default function ProjectsContent(props) {
    return (
        <div className="proj-card__media-query container pt-5 text-center">
            <div className="jumbotron">
                <div className="card">
                    <img src={props.img} alt="project img" />
                    <div className="card-body">
                        <div>
                            <div>
                                <h3>{props.title}</h3>
                            </div>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

