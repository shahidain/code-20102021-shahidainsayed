const Footer = () => {
    const footerStyle = {
        'marginTop':'10px',
        'textAlign': 'center',
        'fontSize': '12px'
    }
    return(
        <>
            <div style={footerStyle} id="footerDiv">
                <label aria-labelledby="footerDiv">&copy;2020 - 2021 BMI</label>
            </div>
            <div style={{textAlign:'center',marginTop:'5px',fontSize:'12px'}}>
                Verion: 1.0.3.2310211353
            </div>
        </>
    )
}

export default Footer;