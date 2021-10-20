import sampleData from "./data/SampleData";


const BMIValue = (height, weight) => {
    let heightInMeter = height / 100;
    var BMI = (weight/heightInMeter);
    return Math.round((BMI + Number.EPSILON) * 100) / 100
}

const BMIData = (height, weight) => {
    let BMI = BMIValue(height, weight);
    switch (true){
        case (BMI <= 18.4):
            return {'BMI': BMI, 'Category' : 'Underweight', 'HealthRisk' : 'Malnutrition risk'};
        case (BMI > 18.4 && BMI <= 24.9):
            return {'BMI': BMI, 'Category' : 'Normal weight', 'HealthRisk' : 'Low risk'};
        case (BMI > 24.9 && BMI <= 29.9):
            return {'BMI': BMI, 'Cateory' : 'Overweight', 'HealthRisk' : 'Enhanced risk'};
        case (BMI > 24.9 && BMI <= 34.9):
            return {'BMI': BMI, 'Category' : 'Moderately obese', 'HealthRisk' : 'Medium risk'};
        case (BMI > 35 && BMI <= 39.9):
            return {'BMI': BMI, 'Category' : 'Severely obese', 'HealthRisk' : 'High risk'};
        case (BMI >= 40):
            return {'BMI': BMI, 'Category' : 'Very severely obese', 'HealthRisk' : 'Very high risk'};
        default :
            return {'BMI': BMI, 'Category' : '', 'HealthRisk' : ''};;
    }
}

let sampleDataWithBMIInfo = sampleData.map(data => ({...data,
    BMIData: BMIData(data.HeightCm, data.WeightKg)
}));

const BMITable = () =>{
    return(
        <div>
            <table className="bordered">
                <thead>
                    <tr>
                        <th>Gender</th>
                        <th>Height (cm)</th>
                        <th>Weight (Kg)</th>
                        <th>BMI (Kg/m)</th>
                        <th>BMI Category</th>
                        <th>Health Risk</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sampleDataWithBMIInfo.map((data, index) => (
                            <tr key={index}>
                                <td>{data.Gender}</td>
                                <td className="right">{data.HeightCm}</td>
                                <td className="right">{data.WeightKg}</td>
                                <td className="right">{data.BMIData.BMI}</td>
                                <td>{data.BMIData.Category}</td>
                                <td>{data.BMIData.HealthRisk}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>   
    );
}

function BmiApp(){
    return(<BMITable/>);
}

export default BmiApp;