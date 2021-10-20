const Header = () => {
    const headerStyle = {
        'paddingTop': '10px',
        'paddingBottom': '10px',
        'backgroundColor': '#c6c6c6',
        'fontSize': '35px',
        'fontWeight': 'bold',
        'textAlign': 'center'
    }
    return(
        <div style={headerStyle}>
            <label>BMI Calculator</label>
        </div>
    )
}
export default Header