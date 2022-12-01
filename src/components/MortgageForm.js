import React, { useState } from "react";
import MortgageCalculator from "./MortgageCalculator";

const MortgageForm = ({calculateMortgage}) => {

    const [income, setIncome] = useState(0);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setIncome(event.target.value);
    };

    // const handleIncomeChange = (event) => {
    //     setIncome(event.target.value);
    // };

    return (
        <>
            <form onSubmit = {handleFormSubmit}>
                <label htmlFor= "income">Your Income</label>
                <input
                    name="income"
                    type="number"
                    value={income}
                    placeholder="enter income"
                    onChange={handleFormSubmit}
                    />
                <input
                type= 'submit'
                value='submit'
                />
            </form>
            
        </>
    );

};


export default MortgageForm