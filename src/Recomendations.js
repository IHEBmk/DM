import React from 'react';

import './Recomendations.css';


var recomendations= [
    { name: 'John Doe', age: 28, profession: 'Engineer' },
    { name: 'Jane Smith', age: 34, profession: 'Designer' },
    { name: 'Sam Johnson', age: 25, profession: 'Developer' }
  ];

// class Recomendations  extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             recomendations: recomendations,
//         };

//     }

//     render(recomendations) {
//         if (this.state.recomendations.length === 0) {
//             return (
//                 <div>
//                     <h1>Aucune Recomendation</h1>
//                 </div>
//             );
//         }
//         const columns = Object.keys(this.state.recomendations[0]);

//   return (
//     <table>
//       <thead>
//         <tr>
//           {columns.map((column, index) => (
//             <th key={index}>{column}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {this.recomendations.map((row, rowIndex) => (
//           <tr key={rowIndex}>
//             {columns.map((column, columnIndex) => (
//               <td key={columnIndex}>{row[column]}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     );}
// }



const Recommendations_ = ({ data }) => {
    if (!data ) {
      return <div>Aucune Recommendation Disponible.</div>;
    }
    console.log(data)
    var formatted_data=[]
    var i=0
    var moyenne=data['moyenne']
    var recomendationsd_=data['Recomendations']
    for (var item in recomendationsd_){
      formatted_data.push({})
      console.log(item)
      formatted_data[i]['ID']=i
      formatted_data[i]['Etablissement']=recomendationsd_[item][0][1]
      formatted_data[i]['Specialite']=recomendationsd_[item][0][0]
      formatted_data[i]['Moyenne']=recomendationsd_[item][3]
      i=i+1
    }
 



    return (
      <div className="recommendations">
        <h2 style={{ textAlign: "center",fontSize:"25px" }}>Votre moyenne: {moyenne}</h2>
        <h1 style={{ textAlign: "center",fontSize:"25px" }}>Recommendations: </h1>
        <table className='table' border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "#f2f2f2" }}>
            <tr>
              <th>ID</th>
              <th>Specialite</th>
              <th>Etablissement</th>
              <th>Min Moyenne</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "#f9f9f9" }}>
            {formatted_data.map((item) => (
              <tr key={item.id}>
                <td style={{textAlign:"center"}}>{item['ID']}</td>
                <td style={{textAlign:"center"}}>{item['Specialite']}</td>
                <td style={{textAlign:"center"}}>{item['Etablissement']}</td>
                <td style={{textAlign:"center"}}>{item['Moyenne']}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default Recommendations_;
// export default Recomendations;