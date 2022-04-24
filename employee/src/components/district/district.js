import React from "react";
import { Link } from "react-router-dom";
import "./district.css";
function district() {
  const users = [
    { जिल्हा: "पुणे", distid: 1 },
    { जिल्हा: "सातारा", distid: 2 },
    { जिल्हा: "रत्नागिरी", distid: 3 },
    { जिल्हा: "रायगड", distid: 4 },
    { जिल्हा: "सोलापूर", distid: 5 },
    { जिल्हा: "सांगली", distid: 6 },
    { जिल्हा: "सिंधुदुर्ग", distid: 7 },
    { जिल्हा: "कोल्हापूर", distid: 8 },
    { जिल्हा: "ठाणे", distid: 9 },
    { जिल्हा: "नाशिक", distid: 10 },
    { जिल्हा: "अहमदनगर", distid: 11 },
    { जिल्हा: "छत्रपती संभाजी नगर", distid: 12 },
    { जिल्हा: "धुळे", distid: 13 },
    { जिल्हा: "जळगाव", distid: 14 },
    { जिल्हा: "बीड", distid: 15 },
    { जिल्हा: "नांदेड", distid: 16 },
    { जिल्हा: "लातूर", distid: 17 },
  ];
  return (
    <div>
      {users.map((user, index) => (
        <div className="dist">
          <div scope="row" className="name">
            {index + 1}
          </div>
          <div className="name">{user.जिल्हा}</div>

          <Link className="btn btn-primary mar" to={`/allforts/${user.distid}`}>
            View
          </Link>
        </div>
      ))}
    </div>
  );
}

export default district;
