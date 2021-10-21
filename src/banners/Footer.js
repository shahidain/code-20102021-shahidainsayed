const Footer = () => {
    const footerStyle = {
        'marginTop':'10px',
        'textAlign': 'center',
        'fontSize': '12px'
    }
    return(
        <div style={footerStyle} id="footerDiv">
            <label aria-labelledby="footerDiv">&copy;2020 - 2021 BMI</label>
        </div>
    )
}

export default Footer;