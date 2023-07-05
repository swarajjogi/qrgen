import React from "react";
import QRCode from "react-qr-code";
import "./App.css";

function QrCodeInfo() {
  const [wifiName, setWifiName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [qrCodeValue, setQrCodeValue] = React.useState("");
  const [qrCodeVisible, setQrCodeVisible] = React.useState(false);

  const generateQRCode = () => {
    if (wifiName && password) {
      const wifiInfo = `WIFI:S:${wifiName};T:WPA;P:${password};;`;
      setQrCodeValue(wifiInfo);
      setQrCodeVisible(true);
    } else {
      setQrCodeValue("");
      setQrCodeVisible(false);
    }
  };

  return (
    <div className="center">
      <div className="center-card-shadow">
        <div className="flex">
          <div className="user-details">
            <div className="input-box">
              <span className="details">Wifi Name</span>
              <input
                type="text"
                placeholder="Enter your WifiName"
                value={wifiName}
                onChange={(event) => setWifiName(event.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="center1">
            <button type="button" className="button" onClick={generateQRCode}>
              Generate QR Code
            </button>
          </div>
        </div>
        <div className="qr-code-container">
          {qrCodeVisible && <QRCode value={qrCodeValue} />}
        </div>
      </div>
    </div>
  );
}

export default QrCodeInfo;
