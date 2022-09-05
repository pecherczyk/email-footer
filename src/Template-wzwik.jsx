import React from 'react'
import './Template-wpwik.css'

class Output extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let mobile
    if(this.props.mobile) {
      mobile = <span>kom. {this.props.mobile}</span>
    } else {
      mobile = undefined
    }

    return (
      <div className="animated fadeIn" style={{fontFamily: "Arial", marginTop: "20px"}}>
        <div style={{fontSize: "18px", fontWeight: "bold", lineHeight: "180%"}}>
          <p style={{margin:"0"}}>{this.props.name} {this.props.surname}</p>
        </div>
        <div style={{lineHeight: "140%", fontSize: "14px"}}>
            <p style={{margin: "0", fontStyle: "italic"}}>{this.props.dept}</p>
            <p style={{margin: "0"}}>{this.props.tel}</p>
            {mobile}
            <p style={{margin: "0"}}>e-mail: <a href={"mailto:" + this.props.email}>{this.props.email}</a></p>
        </div>
        <table style={{width: "540px", fontFamily: "Arial"}}>
          <tbody>
          <tr>
            <td>
              <img src="https://raw.githubusercontent.com/wpwik/images/main/wpwik.jpg" alt="wzwik" />
            </td>
            <td style={{fontSize: "12px", color: "gray"}}>
                    <b>Wałbrzyski Związek Wodociągów i Kanalizacji</b><br />
                    Al. Wyzwolenia 39, 58-300 Wałbrzych<br />
                    Regon: 890451905, NIP:  886-00-12-544<br />
                    <a href="http://www.wzwik.pl">www.wzwik.pl</a>; e-mail: <a href="mailto:sekretariat@wzwik.pl">sekretariat@wzwik.pl</a><br />
                    Wpisany do Rejestru Związków Międzygminnych<br />
                    w Ministerstwie Administracji i Cyfryzacji pod numerem 15
                    <hr style={{margin: "1px"}}/>
                    <span>Chroń środowisko! Drukuj tylko niezbędne wiadomości!</span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Output
