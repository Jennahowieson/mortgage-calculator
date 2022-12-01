import React, { useState } from "react";
import MortgageDisplay from "../components/MortgageCalculator";
import MortgageForm from "../components/MortgageForm";

const MortgageBox = () => {

    const [mortgage, setMortgage] = useState(0);

    const handleSubmit =((income)=>{
        calculateMortgage(income)
    })


    const calculateMortgage = ((income) => {
        let mortgage = (income * 3)
        setMortgage(mortgage)
    });





    return (
        <>
            <MortgageForm onSubmit={handleSubmit}/>
            <MortgageDisplay  mortgage={mortgage}  />
        </>
    )


}

export default MortgageBox