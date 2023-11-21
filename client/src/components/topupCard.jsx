import React from "react";


export const TopUpCard = () => {
    return (
        <div className="PopUp" style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
        <div className="Rectangle17" style={{width: 961, height: 703, left: 18, top: 31, position: 'absolute', background: '#EBEBEB', borderRadius: 10}} />
        <div className="Group4" style={{width: 900, height: 75, left: 51, top: 58, position: 'absolute'}}>
            <div className="Rectangle18" style={{width: 900, height: 75, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 10}} />
            <div className="SelectYourCountry" style={{width: 359, height: 53, left: 20, top: 22, position: 'absolute', color: '#5C5C5C', fontSize: 24, fontFamily: 'Avenir LT Std', fontWeight: '400', wordWrap: 'break-word'}}>Select Your Country</div>
        </div>
        <div className="Group5" style={{width: 900, height: 75, left: 53, top: 157, position: 'absolute'}}>
            <div className="Rectangle19" style={{width: 900, height: 75, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 10}} />
            <div className="SelectYourCity" style={{width: 359, height: 53, left: 18, top: 22, position: 'absolute', color: '#5C5C5C', fontSize: 24, fontFamily: 'Avenir LT Std', fontWeight: '400', wordWrap: 'break-word'}}> Select Your City</div>
        </div>
        <div className="Group6" style={{width: 900, height: 75, left: 53, top: 256, position: 'absolute'}}>
            <div className="Rectangle20" style={{width: 900, height: 75, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 10}} />
            <div className="SurnameName" style={{width: 686, height: 32, left: 18, top: 22, position: 'absolute', color: '#5C5C5C', fontSize: 24, fontFamily: 'Avenir LT Std', fontWeight: '400', wordWrap: 'break-word'}}>Surname                                                   Name                                         </div>
            <div className="Line3" style={{width: 75, height: 0, left: 448, top: 0, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px #B5B4B4 solid'}}></div>
        </div>
        <div className="Group7" style={{width: 900, height: 81, left: 51, top: 355, position: 'absolute'}}>
            <div className="Rectangle21" style={{width: 900, height: 75, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 10}} />
            <div className="CountryCode" style={{width: 359, height: 53, left: 18, top: 28, position: 'absolute', color: '#5C5C5C', fontSize: 24, fontFamily: 'Avenir LT Std', fontWeight: '400', wordWrap: 'break-word'}}>Country Code</div>
            <div className="PhoneNumber" style={{width: 359, height: 53, left: 268, top: 28, position: 'absolute', color: '#5C5C5C', fontSize: 24, fontFamily: 'Avenir LT Std', fontWeight: '400', wordWrap: 'break-word'}}>Phone Number</div>
            <div className="Line4" style={{width: 75, height: 0, left: 243, top: 0, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px #B5B4B4 solid'}}></div>
        </div>
        <div className="Submit" style={{width: 184, height: 54, left: 51, top: 623, position: 'absolute'}}>
            <div className="Rectangle1" style={{width: 184, height: 54, left: 0, top: 0, position: 'absolute', background: '#5C5C5C', borderRadius: 15, border: '3px white solid'}} />
            <div className="Submit" style={{width: 116, left: 51, top: 12, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Avenir LT Std', fontWeight: '400', wordWrap: 'break-word'}}>Submit</div>
        </div>
    </div>
    );
};
