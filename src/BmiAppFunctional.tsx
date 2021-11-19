import React, { useState } from "react";
import sampleData from "./data/SampleData";

const BMIValue = (height: number, weight: number) => {
  let heightInMeter = height / 100;
  var BMI = (weight / heightInMeter);
  return Math.round((BMI + Number.EPSILON) * 100) / 100
}

const BMIData = (height: number, weight: number) => {
  let BMI = BMIValue(height, weight);
  switch (true) {
    case (BMI <= 18.4):
      return { 'BMI': BMI, 'Category': 'Underweight', 'HealthRisk': 'Malnutrition risk' };
    case (BMI > 18.4 && BMI <= 24.9):
      return { 'BMI': BMI, 'Category': 'Normal weight', 'HealthRisk': 'Low risk' };
    case (BMI > 24.9 && BMI <= 29.9):
      return { 'BMI': BMI, 'Category': 'Overweight', 'HealthRisk': 'Enhanced risk' };
    case (BMI > 24.9 && BMI <= 34.9):
      return { 'BMI': BMI, 'Category': 'Moderately obese', 'HealthRisk': 'Medium risk' };
    case (BMI > 35 && BMI <= 39.9):
      return { 'BMI': BMI, 'Category': 'Severely obese', 'HealthRisk': 'High risk' };
    case (BMI >= 40):
      return { 'BMI': BMI, 'Category': 'Very severely obese', 'HealthRisk': 'Very high risk' };
    default:
      return { 'BMI': BMI, 'Category': '', 'HealthRisk': '' };
  }
}

const BmiAppFunction = () => {
  let sampleDataWithBMIInfo = sampleData.map(data => ({
    ...data,
    BMIData: BMIData(data.HeightCm, data.WeightKg)
  }));

  const [data, setData] = useState({ sampleData: sampleDataWithBMIInfo, gender: 'Male', height: 0, weight: 0 });

  const setGenderHandler = (gender: string) => {
    setData(previousData => ({
      ...previousData, gender: gender
    }));
  };

  const setHeight = (event: any) => {
    setData(previousData => ({
      ...previousData, height: event.target.value
    }));
  };

  const setWeight = (event: any) => {
    setData(previousData => ({
      ...previousData, weight: event.target.value
    }));
  };

  const addNewEntry = () => {
    if (data.height > 0 && data.weight > 0) {
      let newBMIData = data.sampleData;
      newBMIData.push({
        Gender: data.gender,
        HeightCm: data.height,
        WeightKg: data.weight,
        BMIData: BMIData(data.height, data.weight)
      });
      setData(previousData => ({
        ...previousData, sampleData: newBMIData, weight: 0, height: 0, gender: 'Male'
      }));
    }
  };

  return (
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
            data.sampleData.map((data, index) => (
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
      <div style={{ width: '300px', margin: 'auto', textAlign: 'center' }}>
        <div style={{ marginTop: '10px', marginBottom: '10px', fontSize: '20px', fontWeight: 'bolder' }}>
          Add New Entry
        </div>
        <div>
          <span className="title">Gender:</span>
          <label htmlFor="genderMale">Male</label><input type="radio" name="gender" id="genderMale" value="Male" onChange={() =>
            setGenderHandler("Male")} checked={data.gender === 'Male'} />
          <label htmlFor="genderFemale" className="gender">Female</label><input type="radio" name="gender" id="genderFemale" value="Female" onChange={() => setGenderHandler("Female")} checked={data.gender === 'Female'} />
        </div>
        <div style={{ marginTop: '5px' }}>
          <span className="title">Weight (Kg):</span>
          <input type="text" name="weight" onChange={event => setWeight(event)} value={data.weight === 0 ? '' : data.weight} autoComplete="off" />
        </div>
        <div style={{ marginTop: '5px' }}>
          <span className="title">Height (cm):</span>
          <input type="text" name="height" onChange={event => setHeight(event)} value={data.height === 0 ? '' : data.height} autoComplete="off" />
        </div>
        <div style={{ marginTop: '5px' }}><button onClick={addNewEntry}>Add Entry</button></div>
      </div>
    </div>
  );
};

export default BmiAppFunction;
