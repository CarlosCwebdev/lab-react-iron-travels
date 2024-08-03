import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    const handleDelete = (id) => {
        const updatedPlans = travelPlans.filter(plan => plan.id !== id);
        setTravelPlans(updatedPlans);
    };


    return (
        <div className="Travel">
            <ul>
                {travelPlans.map(plan => {
                    const labels = [];
                    if (plan.totalCost <= 350) {
                        labels.push("Great Deal");
                    }
                    if (plan.totalCost >= 1500) {
                        labels.push("Premium");
                    }
                    if (plan.allInclusive === true) {
                        labels.push("All-Inclusive");
                    }

                    return (
                        <li key={plan.id} style={{
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            overflow: "hidden",
                            width: "400px",
                            margin: "20px",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                            backgroundColor: "white",
                            padding: "10px",
                            listStyleType: "none"
                        }}>
                            <img src={plan.image} alt={plan.destination} style={{ width: "100%", height: "400px", objectFit: "cover" }} />
                            <div style={{ padding: "15px" }}>
                                <h2>{plan.destination} ({plan.days} Days)</h2>
                                {labels.map((label, index) => (
                                    <span key={index} style={{
                                        display: "inline-block",
                                        marginRight: "10px",
                                        marginBottom: "10px",
                                        padding: "5px 10px",
                                        borderRadius: "5px",
                                        backgroundColor: label === "Great Deal" ? "green" : label === "Premium" ? "blue" : "blue",
                                        color: label === "Great Deal" ? "black" : label === "Premium" ? "white" : "white",
                                        fontWeight: "bold"
                                    }}>
                                        {label}
                                    </span>
                                ))}
                                <p style={{ fontStyle: "italic" }}>{plan.description}</p>
                                <div>
                                    <span style={{ fontWeight: "bold" }}>Price:</span> <span>{plan.totalCost} €</span>
                                </div>
                                <button onClick={() => handleDelete(plan.id)} style={{
                                    marginTop: "10px",
                                    padding: "10px 20px",
                                    backgroundColor: "gray",
                                    color: "black",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    display: "flex",
                                    marginLeft: "75px"
                                }}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default TravelList;