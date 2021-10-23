const Footer = () => {
    const footerStyle = {
        'marginTop':'25px',
        'textAlign': 'center',
        'fontSize': '12px'
    }
    return(
        <>
            <div style={footerStyle} id="footerDiv">
                <label aria-labelledby="footerDiv">&copy;2020 - 2021 BMI</label>
            </div>
            <div style={{textAlign:'center',marginTop:'5px',fontSize:'12px'}}>
                Version: 1.0.5.2310212339
            </div>
        </>
    )
}

export default Footer;