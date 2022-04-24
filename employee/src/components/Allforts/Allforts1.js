// import { forts } from "../forts";
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

// const Allforts1 = () => {
//   // console.log("in allforts1");
//   //   const { distid } = useParams();
//   //   const [current, setcurrent] = useState([]);

//   //   const findele = (data) => {
//   //     return (data.filter = (element) => {
//   //       return element.distid === distid;
//   //     });
//   //     useEffect(() => {
//   //       setcurrent(findele(forts));
//   //       console.log(current);
//   //     }, []);
//   //   };
//   return (
//     <div className="container ">
//       <div className="allemp">
//         <h1 className=" display-6">All Forts</h1>
//       </div>

//       <table className="table border shadow">
//         <thead className="table-dark">
//           <tr>
//             <th scope="col">#</th>

//             <th scope="col">नाव</th>
//             <th scope="col">जिल्हा</th>
//             <th scope="col">प्रकार</th>
//             <th scope="col">प्रकार</th>
//           </tr>
//         </thead>
//         <tbody>
//           {current.map((user, index) => (
//             <tr key={index}>
//               <th scope="row">{index + 1}</th>

//               <td>{user.नाव}</td>
//               <td>{user.जिल्हा}</td>
//               <td>{user.प्रकार}</td>
//               <td>
//                 <Link className="btn btn-primary mar">View</Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Allforts1;
