import { formatter } from "../util/investment"

export default function Table({valArr}){
    console.log(valArr);


    
    return <table id="result" >
        <thead>
            <tr>
                <th>YEAR</th>
                <th>INVESTMENT VALUE</th>
                <th>INTREST YEAR</th>
                <th>TOTAL INTREST</th>
                <th>INVESTED CAPITAL</th>
            </tr>
        </thead>
        <tbody>
            {valArr.map(eachRow => (
                <tr>
                    <td>{(eachRow.year)}</td>
                    <td>{formatter.format(eachRow.valueEndOfYear)}</td>
                    <td>{formatter.format(eachRow.interest)}</td>
                    <td>{formatter.format(eachRow.annualInvestment)}</td>
                    <td>{formatter.format((eachRow.valueEndOfYear) - (eachRow.interest))}</td>
                </tr>
            ))}
        </tbody>
    </table>
}