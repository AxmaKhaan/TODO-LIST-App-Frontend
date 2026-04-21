import React from 'react'
import "/src/Career_pathway.css"

export default function Career_card(props) {
    const isLocked = !!props.selected;
    return (
        <>
            <section className="career_card_section">
                <div className="career_container">
                    <div className="block block_1">
                        <div className="box box_1">
                            <span><img src="globe (3).png" alt="globe" /></span>
                        </div>
                        <div className="box box_2">
                            <h5>{props.Career_card_label}</h5>
                            <small>Internatinal</small>
                            <p>On Campus.Dec 2026</p>
                        </div>
                        <div className="box box_3">{props.popUp}</div>
                    </div>
                    <hr />
                    <div className="block block_2">
                        <div className="box box_1">
                            <span>
                                <h6>what do you want to do width your {props.Career_card_label}</h6>
                            </span>
                        </div>
                        <div className="box box_2">
                            <div className="selection_boxes selectBox_1"><button onClick={() => props.onSelect(props.id, "job")}
                                className={props.selected === "job" ? "active-card" : ""}
                                disabled={isLocked}><img src="briefcase (2).png" id='briefcase' alt="briefcase" />
                                <span className="text-start">
                                    <h6 className="mb-0">Job / Internship</h6>
                                    <small className="text-muted">Corporate Career</small>
                                </span>
                            </button></div>
                            <div className="selection_boxes selectBox_2"><button onClick={() => props.onSelect(props.id, "startup")}
                                className={props.selected === "startup" ? "active-card" : ""}
                                disabled={isLocked}><img src="rocket-lunch.png" id='rocket' alt="rocket" />
                                <span className="text-start">
                                    <h6 className="mb-0">Startup</h6>
                                    <small className="text-muted">Entrepreneurship</small>
                                </span>
                            </button></div>
                            <div className="selection_boxes selectBox_3"><button onClick={() => props.onSelect(props.id, "freelancing")}
                                className={props.selected === "freelancing" ? "active-card" : ""}
                                disabled={isLocked}><img src="laptop-code.png" id='laptop' alt="laptop" />
                                <span className="text-start">
                                    <h6 className="mb-0">Freelancing</h6>
                                    <small className="text-muted">Independent Work</small>
                                </span>
                            </button></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
