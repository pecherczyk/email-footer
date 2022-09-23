import React from 'react'
import './Template-wpwik.css'

class Output extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let mobile
    if(this.props.data.mobile) {
      mobile = <span>kom. {this.props.data.mobile}</span>
    } else {
      mobile = undefined
    }

    return (
      <div className="animated fadeIn" style={{fontFamily: "Arial", marginTop: "20px"}}>
        <div style={{fontSize: "18px", fontWeight: "bold", lineHeight: "180%"}}>
          <p style={{margin:"0"}}>{this.props.data.name} {this.props.data.surname}</p>
        </div>
        <div style={{lineHeight: "140%", fontSize: "14px"}}>
            <p style={{margin: "0", fontStyle: "italic"}}>{this.props.data.dept}</p>
            <p style={{margin: "0"}}>tel. {this.props.data.tel}</p>
            {mobile}
            <p style={{margin: "0"}}>e-mail: <a href={"mailto:" + this.props.data.email}>{this.props.data.email}</a></p>
        </div>
        <a href="https://www.facebook.com/dobrawodazkranu"><img src="https://raw.githubusercontent.com/wpwik/images/main/fb.png" alt="facebook" /></a>
        <table style={{width: "540px", fontFamily: "Arial"}}>
          <tbody>
          <tr>
            <td>
              <img src="https://raw.githubusercontent.com/wpwik/images/main/wpwik.jpg" alt="wpwik" />
            </td>
            <td style={{fontSize: "12px", color: "gray"}}>
                    <b>Wałbrzyskie Przedsiębiorstwo Wodociągów i Kanalizacji Sp. z o.o.</b><br />
                    Al. Wyzwolenia 39, 58-300 Wałbrzych<br />
                    Regon: 891404575, NIP: 886-26-49-062<br />
                    <a href="http://www.wpwik.pl">www.wpwik.pl</a>; e-mail: <a href="mailto:sekretariat@wpwik.pl">sekretariat@wpwik.pl</a><br />
                    KRS: 0000097537, Sąd Rejonowy dla Wrocławia – Fabrycznej we Wrocławiu,<br />
                    IX Wydział Gospodarczy Krajowego Rejestru Sądowego<br />
                    Kapitał zakładowy : 96 657 500,00 zł <br />
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
