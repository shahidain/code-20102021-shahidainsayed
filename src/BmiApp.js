import sampleData from "./data/SampleData";
import React, { Component } from "react";


const BMIValue = (height, weight) => {
  let heightInMeter = height / 100;
  var BMI = (weight / heightInMeter);
  return Math.round((BMI + Number.EPSILON) * 100) / 100
}

const BMIData = (height, weight) => {
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


class BmiApp extends Component {
  constructor(props) {
    super(props);
    let sampleDataWithBMIInfo = sampleData.map(data => ({
      ...data,
      BMIData: BMIData(data.HeightCm, data.WeightKg)
    }));
    this.state = {
      gender: 'Male',
      height: '',
      weight: '',
      data: sampleDataWithBMIInfo
    };
    this.setValueHandler = this.setValueHandler.bind(this);
    this.setGenderHandler = this.setGenderHandler.bind(this);
    this.addNewEntry = this.addNewEntry.bind(this);
  }
  setValueHandler(event) {
    if (event.target.name === 'weight') {
      this.setState({ ...this.state, weight: event.target.value });
    }
    if (event.target.name === 'height') {
      this.setState({ ...this.state, height: event.target.value });
    }
  }
  setGenderHandler(event) {
    this.setState({ ...this.state, gender: event.target.value });
  }
  addNewEntry() {
    if (this.state.height > 0 && this.state.weight > 0) {
      this.setState({ data: [...this.state.data, { Gender: this.state.gender, HeightCm: this.state.height, WeightKg: this.state.weight, BMIData: BMIData(this.state.height, this.state.weight) }] });
      this.setState({ weight: '', height: '', gender: 'Male' });
    }
  }
  render() {
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
              this.state.data.map((data, index) => (
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
            <label htmlFor="genderMale">Male</label><input type="radio" name="gender" id="genderMale" checked={this.state.gender === 'Male'} value="Male" onChange={this.setGenderHandler} />
            <label htmlFor="genderFemale" className="gender">Female</label><input type="radio" name="gender" id="genderFemale" checked={this.state.gender === 'Female'} value="Female" onChange={this.setGenderHandler} />
          </div>
          <div style={{ marginTop: '5px' }}>
            <span className="title">Weight (Kg):</span>
            <input type="text" name="weight" value={this.state.weight} onChange={this.setValueHandler} />
          </div>
          <div style={{ marginTop: '5px' }}>
            <span className="title">Height (cm):</span>
            <input type="text" name="height" value={this.state.height} onChange={this.setValueHandler} />
          </div>
          <div style={{ marginTop: '5px' }}><button onClick={this.addNewEntry}>Add Entry</button></div>
        </div>
      </div>
    );
  }
}

export default BmiApp;