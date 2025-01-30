import React from "react";
import SportDiv from "./Sport";
import orientationMapping from "./data/orientation_mapping_maths.json";
import orientationMapping_s from "./data/orientation_mapping_science.json";
import orientationMapping_Langue from "./data/orientation_mapping_langues.json";
import orientationMapping_philosophie from "./data/orientation_mapping_lettre.json";
import orientationMapping_math_technique from "./data/orientation_mapping_mt.json";
import orientationMapping_Gestion from "./data/orientation_mapping_gestion.json";

import Amazigh_div from "./Amazigh";
import "./from.css";
import Recomendations from "./Recomendations";
import Recomendations_ from "./Recomendations";
var speciality = "N00";

var modules_speciality = [
  {
    name: "N00",
    modules: {},
  },
  {
    name: "N01",
    modules: {
      "Arabe": 0, "Français": 0, "Anglais": 0, "Histoire Géographie": 0, 
      "Education Islamique": 0, "Mathématiques": 0, "Philosophie": 0, 
    },
  },
  {
    name: "N02",
    modules: {
      "Arabe": 0, "Français": 0, "Anglais": 0, "Histoire Géographie": 0, 
      "Education Islamique": 0, "Langue étrangère": 0, "Mathématiques": 0, 
      "Philosophie": 0, 
    },
  },
  {
    name: "N03",
    modules: {
      "Arabe": 0, "Français": 0, "Anglais": 0, "Histoire Géographie": 0, 
      "Education Islamique": 0, "Mathématiques": 0, "Science": 0, 
      "Physique": 0, "Philosophie": 0, 
    },
  },
  {
    name: "N04",
    modules: {
      "Arabe": 0, "Français": 0, "Anglais": 0, "Histoire Géographie": 0, 
      "Education Islamique": 0, "Mathématiques": 0, "Science": 0, 
      "Physique": 0, "Philosophie": 0, 
    },
  },
  {
    name: "N05",
    modules: {
      "Arabe": 0, "Français": 0, "Anglais": 0, "Histoire Géographie": 0, 
      "Education Islamique": 0, "Mathématiques": 0, "Technologie": 0, 
      "Physique": 0, "Philosophie": 0, 
    },
  },
  {
    name: "N06",
    modules: {
      "Arabe": 0, "Français": 0, "Anglais": 0, "Histoire Géographie": 0, 
      "Education Islamique": 0, "Mathématiques": 0, "Droit": 0, 
      "Economie": 0, "Comptabilité": 0, "Philosophie": 0
    },
  }
];



var show_recomendations = false;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modules_speciality: modules_speciality,
      speciality: speciality,
      show_recomendations: show_recomendations,
      recomendations: {},
      sport: false,
      amazigh: false,
      sport_mark: null,
      amazigh_mark: null,
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  Find_cluster = (speciality, data) => {
    if(speciality === "N00") {
      return null;
    }


    if (speciality == "N01" ){
      let clusterCentroids = [];
      try {
          const response = orientationMapping_philosophie;
          clusterCentroids = response.centroids;
      } catch (error) {
          console.error("Error loading centroids:", error);
          return null;
      }
  
      var weights = {
        'ANGLAIS': 9,
        'FRANÇAIS': 9,
        'LITTERATURE_ARABE': 36,
        'MATHEMATIQUE': 4,
        'HISTOIRE_GEOGRAPHIE': 16,
        'SCIENCE ISLAMIQUE': 4,
        'PHILOSOPHIE': 36,
        'E.P.S': 0.0001,
        'LANGUE_AMAZIGH': 0.0001
    }
    
    const newRecord = {
        "ANGLAIS": data['Anglais'],
        "FRANÇAIS": data['Français'],
        "LITTERATURE_ARABE": data['Arabe'],
        "MATHEMATIQUE": data['Mathématiques'],
        "HISTOIRE_GEOGRAPHIE": data["Histoire Géographie"],
        "SCIENCE_ISLAMIQUE": data["Education Islamique"],
        "PHILOSOPHIE": data['Philosophie'],
        "LANGUE_AMAZIGH": 0,
    };
    
    if ("sport_mark" in data && this.state.sport) {
        newRecord["E.P.S"] = this.state.sport_mark;
    }
    else {
        newRecord["E.P.S"] = 0;
    }
    
    // Apply weights
    for (const subject in weights) {
        if (newRecord[subject] !== undefined) {
            newRecord[subject] = newRecord[subject] * weights[subject];
        }
    }
      // Find closest cluster (simple Euclidean distance calculation)
      let closestCluster = null;
      let minDistance = Infinity;
      clusterCentroids.forEach((centroid, index) => {
  
          let distance = 0;
          let i=0;
          Object.keys(newRecord).forEach((subject) => {
  
              distance += (newRecord[subject] - centroid[i]) ** 2;
              i++;
          });
      
          if (distance < minDistance) {
              minDistance = distance;
              closestCluster = index;
          }
  
      });
      return closestCluster-1;}






























    if (speciality == "N02" ){
      let clusterCentroids = [];
      try {
          const response = orientationMapping_Langue;
          clusterCentroids = response.centroids;
      } catch (error) {
          console.error("Error loading centroids:", error);
          return null;
      }
  
      var weights = {
        'ANGLAIS': 25,
        'FRANÇAIS': 25,
        'LITTERATURE_ARABE': 25,
        'MATHEMATIQUE': 4,
        'LANGUE_VIVANTE_III': 16,
        'HISTOIRE_GEOGRAPHIE': 9,
        'SCIENCE ISLAMIQUE': 4,
        'PHILOSOPHIE': 4,
        'E.P.S': 0.0001,
        'LANGUE_AMAZIGH': 0.0001
    }
    
    const newRecord = {
        "ANGLAIS": data['Anglais'],
        "FRANÇAIS": data['Français'],
        "LITTERATURE_ARABE": data['Arabe'],
        "MATHEMATIQUE": data['Mathématiques'],
        "LANGUE_VIVANTE_III": data['Langue Etrangère'],
        "HISTOIRE_GEOGRAPHIE": data["Histoire Géographie"],
        "SCIENCE_ISLAMIQUE": data["Education Islamique"],
        "PHILOSOPHIE": data['Philosophie'],
        "LANGUE_AMAZIGH": 0,
    };
    
    if ("sport_mark" in data && this.state.sport) {
        newRecord["E.P.S"] = this.state.sport_mark;
    }
    else {
        newRecord["E.P.S"] = 0;
    }
    
    // Apply weights
    for (const subject in weights) {
        if (newRecord[subject] !== undefined) {
            newRecord[subject] = newRecord[subject] * weights[subject];
        }
    }
      // Find closest cluster (simple Euclidean distance calculation)
      let closestCluster = null;
      let minDistance = Infinity;
      clusterCentroids.forEach((centroid, index) => {
  
          let distance = 0;
          let i=0;
          Object.keys(newRecord).forEach((subject) => {
  
              distance += (newRecord[subject] - centroid[i]) ** 2;
              i++;
          });
      
          if (distance < minDistance) {
              minDistance = distance;
              closestCluster = index;
          }
  
      });
      return closestCluster-1;}






































    if (speciality == "N03" ){
      let clusterCentroids = [];
      try {
          const response = orientationMapping_s;
          clusterCentroids = response.centroids;
      } catch (error) {
          console.error("Error loading centroids:", error);
          return null;
      }
  
      var weights = {
        'ANGLAIS': 4,
        'FRANÇAIS': 4,
        'LITTERATURE_ARABE': 9,
        'MATHEMATIQUE': 25,
        'PHYSIQUE': 25,
        'SNV': 36,
        'HISTOIRE_GEOGRAPHIE': 4,
        'SCIENCE ISLAMIQUE': 4,
        'PHILOSOPHIE': 4,
        'E.P.S': 0.0001,
        'LANGUE_AMAZIGH': 0.0001
    }
    
    const newRecord = {
        "ANGLAIS": data['Anglais'],
        "FRANÇAIS": data['Français'],
        "LITTERATURE_ARABE": data['Arabe'],
        "MATHEMATIQUE": data['Mathématiques'],
        "PHYSIQUE": data['Physique'],
        "SNV": data['Science'],
        "HISTOIRE_GEOGRAPHIE": data["Histoire Géographie"],
        "SCIENCE_ISLAMIQUE": data["Education Islamique"],
        "PHILOSOPHIE": data['Philosophie'],
        "LANGUE_AMAZIGH": 0,
    };
    
    if ("sport_mark" in data && this.state.sport) {
        newRecord["E.P.S"] = data.sport_mark;
    }
    else {
        newRecord["E.P.S"] = 0;
    }
    
    // Apply weights
    for (const subject in weights) {
        if (newRecord[subject] !== undefined) {
            newRecord[subject] = newRecord[subject] * weights[subject];
        }
    }
      // Find closest cluster (simple Euclidean distance calculation)
      let closestCluster = null;
      let minDistance = Infinity;
      clusterCentroids.forEach((centroid, index) => {
  
          let distance = 0;
          let i=0;
          Object.keys(newRecord).forEach((subject) => {
  
              distance += (newRecord[subject] - centroid[i]) ** 2;
              i++;
          });
      
          if (distance < minDistance) {
              minDistance = distance;
              closestCluster = index;
          }
  
      });
      return closestCluster-1;}






























    if (speciality == "N04" ){
    let clusterCentroids = [];
    try {
        const response = orientationMapping;
        clusterCentroids = response.centroids;
    } catch (error) {
        console.error("Error loading centroids:", error);
        return null;
    }

    const weights = {
      "ANGLAIS": 4,
      "FRANÇAIS": 4,
      "LITTERATURE_ARABE": 9,
      "MATHEMATIQUE": 49,
      "PHYSIQUE": 36,
      "SNV": 4,
      "HISTOIRE_GEOGRAPHIE": 4,
      "SCIENCE_ISLAMIQUE": 4,
      "PHILOSOPHIE": 4,
      "E.P.S": 0.0001,
      "LANGUE_AMAZIGH": 0.0001,
  };
  
  const newRecord = {
      "ANGLAIS": data['Anglais'],
      "FRANÇAIS": data['Français'],
      "LITTERATURE_ARABE": data['Arabe'],
      "MATHEMATIQUE": data['Mathématiques'],
      "PHYSIQUE": data['Physique'],
      "SNV": data['Science'],
      "HISTOIRE_GEOGRAPHIE": data["Histoire Géographie"],
      "SCIENCE_ISLAMIQUE": data["Education Islamique"],
      "PHILOSOPHIE": data['Philosophie'],
      "LANGUE_AMAZIGH": 0,
  };
  
  if ("sport_mark" in data && this.state.sport) {
      newRecord["E.P.S"] = data.sport_mark;
  }
  else {
      newRecord["E.P.S"] = 0;
  }
  
  // Apply weights
  for (const subject in weights) {
      if (newRecord[subject] !== undefined) {
          newRecord[subject] = newRecord[subject] * weights[subject];
      }
  }
    // Find closest cluster (simple Euclidean distance calculation)
    let closestCluster = null;
    let minDistance = Infinity;
    clusterCentroids.forEach((centroid, index) => {

        let distance = 0;
        let i=0;
        Object.keys(newRecord).forEach((subject) => {

            distance += (newRecord[subject] - centroid[i]) ** 2;
            i++;
        });
    
        if (distance < minDistance) {
            minDistance = distance;
            closestCluster = index;
        }

    });
    return closestCluster-1;}






    if (speciality == "N05" ){
      let clusterCentroids = [];
      try {
          const response = orientationMapping_math_technique;
          clusterCentroids = response.centroids;
      } catch (error) {
          console.error("Error loading centroids:", error);
          return null;
      }
  
      const weights = {
        'ANGLAIS': 4,
        'FRANÇAIS': 4,
        'LITTERATURE_ARABE': 4,
        'MATHEMATIQUE': 36,
        'PHYSIQUE': 36,
        'TECHNOLOGIE': 49,
        'HISTOIRE_GEOGRAPHIE': 4,
        'SCIENCE ISLAMIQUE': 4,
        'PHILOSOPHIE': 4,
        'E.P.S': 0.0001,
        'LANGUE_AMAZIGH': 0.0001
    };
    
    const newRecord = {
        "ANGLAIS": data['Anglais'],
        "FRANÇAIS": data['Français'],
        "LITTERATURE_ARABE": data['Arabe'],
        "MATHEMATIQUE": data['Mathématiques'],
        "PHYSIQUE": data['Physique'],
        "TECHNOLOGIE": data['Technologie'],
        "HISTOIRE_GEOGRAPHIE": data["Histoire Géographie"],
        "SCIENCE_ISLAMIQUE": data["Education Islamique"],
        "PHILOSOPHIE": data['Philosophie'],
        "LANGUE_AMAZIGH": 0,
    };
    
    if ("sport_mark" in data && this.state.sport) {
        newRecord["E.P.S"] = data.sport_mark;
    }
    else {
        newRecord["E.P.S"] = 0;
    }
    
    // Apply weights
    for (const subject in weights) {
        if (newRecord[subject] !== undefined) {
            newRecord[subject] = newRecord[subject] * weights[subject];
        }
    }
      // Find closest cluster (simple Euclidean distance calculation)
      let closestCluster = null;
      let minDistance = Infinity;
      clusterCentroids.forEach((centroid, index) => {
  
          let distance = 0;
          let i=0;
          Object.keys(newRecord).forEach((subject) => {
  
              distance += (newRecord[subject] - centroid[i]) ** 2;
              i++;
          });
      
          if (distance < minDistance) {
              minDistance = distance;
              closestCluster = index;
          }
  
      });
      return closestCluster-1;}



























      if (speciality == "N06" ){
        let clusterCentroids = [];
        try {
            const response = orientationMapping_Gestion;
            clusterCentroids = response.centroids;
        } catch (error) {
            console.error("Error loading centroids:", error);
            return null;
        }
    
        const weights = {
          'ANGLAIS': 4,
          'FRANÇAIS': 4,
          'LITTERATURE_ARABE': 9,
          'MATHEMATIQUE': 25,
          'COMPTABILITE': 36,
          'ECONOMIE': 25,
          'ECONOMIE - DROIT': 4,
          'HISTOIRE_GEOGRAPHIE': 16,
          'SCIENCE ISLAMIQUE': 4,
          'PHILOSOPHIE': 4,
          'E.P.S': 0.0001,
          'LANGUE_AMAZIGH': 0.0001
      }
      
      const newRecord = {
          "ANGLAIS": data['Anglais'],
          "FRANÇAIS": data['Français'],
          "LITTERATURE_ARABE": data['Arabe'],
          "MATHEMATIQUE": data['Mathématiques'],
          "COMPTABILITE": data['Comptabilité'],
          "ECONOMIE": data['Economie'],
          "ECONOMIE - DROIT": data['Droit'],
          "HISTOIRE_GEOGRAPHIE": data["Histoire Géographie"],
          "SCIENCE_ISLAMIQUE": data["Education Islamique"],
          "PHILOSOPHIE": data['Philosophie'],
          "LANGUE_AMAZIGH": 0,
      };
      
      if ("sport_mark" in data && this.state.sport) {
          newRecord["E.P.S"] = data.sport_mark;
      }
      else {
          newRecord["E.P.S"] = 0;
      }
      
      // Apply weights
      for (const subject in weights) {
          if (newRecord[subject] !== undefined) {
              newRecord[subject] = newRecord[subject] * weights[subject];
          }
      }
        // Find closest cluster (simple Euclidean distance calculation)
        let closestCluster = null;
        let minDistance = Infinity;
        clusterCentroids.forEach((centroid, index) => {
    
            let distance = 0;
            let i=0;
            Object.keys(newRecord).forEach((subject) => {
    
                distance += (newRecord[subject] - centroid[i]) ** 2;
                i++;
            });
        
            if (distance < minDistance) {
                minDistance = distance;
                closestCluster = index;
            }
    
        });
        return closestCluster-1;}









};













calculate_moyenne(speciality,data){
    var coeficients=[]
    if (speciality=='N00')
        return -1
    else if (speciality=='N01')
      coeficients=[3,3,6,2,4,2,6]
    else if (speciality=='N02')
        coeficients=[5,5,5,3,2,4,2,2]
    else if (speciality=='N03')
      coeficients=[2,2,3,5,5,6,2,1]
    else if (speciality=='N04')
      coeficients=[2,2,3,7,6,2,2,2,2]
    else if (speciality=='N05')
      coeficients=[2,2,2,6,6,2,2,2,7]
    else if (speciality=='N06')
      coeficients=[2,2,3,5,4,2,2,5,2,6]
    if (this.state.sport)
        coeficients.push(1)
  



    var moyenne=0
    var i=0
    var keys=Object.keys(data)
    for (var subject in Object.keys(data)){
        if (keys[subject]=='amazigh_mark')
            continue 
        if (i>coeficients.length-1)
            break
        if (keys[subject]=='speciality')
            continue
        
        if (data[keys[subject]]==null)
            continue
        if (data[keys[subject]]==undefined)
            continue
        moyenne+=data[keys[subject]]*coeficients[i]
        i+=1}

        var sum_of_coeficients=0
       for (var j=0;j<coeficients.length;j++){

        sum_of_coeficients+=coeficients[j]}

    if (sum_of_coeficients==0)
        return -1
    moyenne=moyenne/sum_of_coeficients

    return moyenne
  }

























  GRecomendations = (speciality, moyenne, cluster) => {
  let recommendations = [];

if (speciality == "N00" ){
  return [];
}

if (speciality == "N01" ){
  try {
      const response =orientationMapping_philosophie
      var cluster = response[cluster];
  } catch (error) {
      console.error("Error loading clusters:", error);
      return [];
  }



  for (var suggestion in cluster) {

      if (recommendations.length >= 5) return recommendations;

      if (

          moyenne >= cluster[suggestion][3]
      ) {

          recommendations.push(cluster[suggestion]);
      }
    };

  return recommendations;
};

if (speciality == "N02" ){
  try {
      const response =orientationMapping_Langue
      var cluster = response[cluster];
  } catch (error) {
      console.error("Error loading clusters:", error);
      return [];
  }



  for (var suggestion in cluster) {

      if (recommendations.length >= 5) return recommendations;

      if (

          moyenne >= cluster[suggestion][3]
      ) {

          recommendations.push(cluster[suggestion]);
      }
    };

  return recommendations;
};
if (speciality == "N03" ){
  try {
      const response =orientationMapping_s
      var cluster = response[cluster];
  } catch (error) {
      console.error("Error loading clusters:", error);
      return [];
  }



  for (var suggestion in cluster) {

      if (recommendations.length >= 5) return recommendations;

      if (

          moyenne >= cluster[suggestion][3]
      ) {

          recommendations.push(cluster[suggestion]);
      }
    };

  return recommendations;
};









if (speciality == "N04" ){
  try {
      const response =orientationMapping
      var cluster = response[cluster];
  } catch (error) {
      console.error("Error loading clusters:", error);
      return [];
  }



  for (var suggestion in cluster) {

      if (recommendations.length >= 5) return recommendations;

      if (

          moyenne >= cluster[suggestion][3]
      ) {

          recommendations.push(cluster[suggestion]);
      }
    };

  return recommendations;
};
if (speciality == "N05" ){
  try {
      const response =orientationMapping_math_technique
      var cluster = response[cluster];
  } catch (error) {
      console.error("Error loading clusters:", error);
      return [];
  }



  for (var suggestion in cluster) {

      if (recommendations.length >= 5) return recommendations;

      if (

          moyenne >= cluster[suggestion][3]
      ) {

          recommendations.push(cluster[suggestion]);
      }
    };

  return recommendations;
};




if (speciality == "N06" ){
  try {
      const response =orientationMapping_Gestion
      var cluster = response[cluster];
  } catch (error) {
      console.error("Error loading clusters:", error);
      return [];
  }



  for (var suggestion in cluster) {

      if (recommendations.length >= 5) return recommendations;

      if (

          moyenne >= cluster[suggestion][3]
      ) {

          recommendations.push(cluster[suggestion]);
      }
    };

  return recommendations;
};





}



  fetchData =  () => {

        var data={
          'speciality': this.state.speciality,
          'Anglais': this.state.modules_speciality[Number(this.state.speciality[2])].modules["Anglais"],
          'Français': this.state.modules_speciality[Number(this.state.speciality[2])].modules["Français"],
          'Arabe': this.state.modules_speciality[Number(this.state.speciality[2])].modules["Arabe"],
          'Mathématiques': this.state.modules_speciality[Number(this.state.speciality[2])].modules["Mathématiques"],
          'Physique': this.state.modules_speciality[Number(this.state.speciality[2])].modules["Physique"],
          'Science': this.state.modules_speciality[Number(this.state.speciality[2])].modules["Science"],
          "Histoire Géographie": this.state.modules_speciality[Number(this.state.speciality[2])].modules["Histoire Géographie"],
          "Education Islamique": this.state.modules_speciality[Number(this.state.speciality[2])].modules["Education Islamique"],
          'Philosophie': this.state.modules_speciality[Number(this.state.speciality[2])].modules["Philosophie"],
          'Langue Etrangère': this.state.modules_speciality[Number(this.state.speciality[2])].modules["Langue étrangère"],
          'Technologie': this.state.modules_speciality[Number(this.state.speciality[2])].modules["Technologie"],
          'Economie': this.state.modules_speciality[Number(this.state.speciality[2])].modules["Economie"],
          'Droit': this.state.modules_speciality[Number(this.state.speciality[2])].modules["Droit"],
          'Comptabilité': this.state.modules_speciality[Number(this.state.speciality[2])].modules["Comptabilité"],
          'Sport': this.state.modules_speciality[Number(this.state.speciality[2])].modules["Sport"],
        }
        let speciality=data['speciality']
        let moyenne=this.calculate_moyenne(speciality,data)
        if (speciality=='' || speciality==null || speciality=='N00')
            return {'error':'Please enter a speciality'}

        var cluster=this.Find_cluster(speciality,data)

        var Recomendations=this.GRecomendations(speciality,moyenne,cluster)

        return {
          'Recomendations':Recomendations,
        'moyenne':moyenne
        }
    
  };
  validateForm() {
    let errors = {};
    let isValid = true;

    // Validate speciality
    if (this.state.speciality === "" || this.state.speciality === "N00") {
      errors.speciality = "Veuillez choisir une spécialité.";
      isValid = false;
    }

    // Validate scores

    let subjects = Object.keys(this.state.modules_speciality[Number(this.state.speciality[2])]['modules']);
    for (const subject in subjects) {

      let value =this.state.modules_speciality[Number(this.state.speciality[2])]['modules'][subjects[subject]];

      if (value ==null || value == "") {
        errors[subjects[subject]] = `Veuillez entrer une note pour ${subjects[subject]}.`;
        isValid = false;
      } else if (value < 0 || value > 20) {
        errors[subjects[subject]] = `${subjects[subject]} doit être entre 0 et 20.`;
        isValid = false;
      }
    }
    if(this.state.sport){
      if(this.state.sport_mark == null){
        errors['sport_mark'] = `Veuillez entrer une note pour sport.`;
        isValid = false;
      }

      if(this.state.sport_mark < 0 || this.state.sport_mark > 20){
        errors['sport_mark'] = `sport doit être entre 0 et 20.`;
        isValid = false;
      }
    }
    else if(this.state.amazigh){
      if(this.state.amazigh_mark == null){
        errors['amazigh_mark'] = `Veuillez entrer une note pour amazigh.`;
        isValid = false;
      }
      if(this.state.amazigh_mark < 0 || this.state.amazigh_mark > 20){
        errors['amazigh_mark'] = `amazigh doit être entre 0 et 20.`;
        isValid = false;
      }
    }

    this.setState({ errors });
    return isValid;
  }
  handleChange(event) {
    const { name, type, value, checked } = event.target;
    if (name === "speciality") {

      this.setState({ [name]: value });
      return;
    }else if (name === "sport" || name === "amazigh" ) {
      // Update Sport-related state
      this.setState({ [name]: type === "checkbox" ? checked : value });
    } 
    else if(name === "sport_mark" || name === "amazigh_mark"){
      // Update Sport-related state
      this.setState({ [name]: value });
    }
     else {
      const specialityIndex = Number(this.state.speciality[2]); 

      const updatedModules = { 
        ...this.state.modules_speciality[specialityIndex].modules, 
        [name]: Number(value) 
      };

      const updatedSpecialities = [...this.state.modules_speciality];
      updatedSpecialities[specialityIndex] = {
        ...updatedSpecialities[specialityIndex],
        modules: updatedModules
      };
  


      this.setState({ modules_speciality: updatedSpecialities });

  }}
  handleSubmit=(event) =>{
    event.preventDefault();
    
    if (this.validateForm()) {
      var data=this.fetchData()
      console.log(data)
    this.setState({recomendations:data,show_recomendations: true});



      // Proceed with form submission logic
    } else {
      console.log("Form has errors!");
    }

  }

  render() {
    if (this.state.show_recomendations) {
      return (
        <div className="container">
            <div className="rec">
          <Recomendations_ data={this.state.recomendations} />
          </div>
          <div className="btn">
            <button
              className="retry"
              type="button"
              onClick={() => this.setState({ show_recomendations: false })}
            >
              Essayer de nouveau
            </button>
          </div>
        </div>
      );
    }

     else{
        return (
          <div className="form">
            <h1>Formulaire</h1>
            <h3>Veulliez choisir une spécialité et entrez vos notes du BAC</h3>
            <form
              onSubmit={this.handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <label>Spécialité</label>
              <select name="speciality" value={this.state.speciality} onChange={this.handleChange}>
                <option value="N00">Choisissez une spécialité</option>
                <option value="N01">Littérature et philosophie</option>
                <option value="N02">Langues étrangères</option>
                <option value="N03">Sciences expérimentales</option>
                <option value="N04">Mathématiques</option>
                <option value="N05">Math-techniques</option>
                <option value="N06">Gestion et économie</option>
              </select>

              {Object.keys(this.state.modules_speciality[Number(this.state.speciality[2])]['modules']).map((subject) => (
                

            
            <div key={subject}>
              <label>{subject}:</label>
              <input type="number" step="0.25" name={subject} onChange={this.handleChange} />
              {/* {this.state.errors[subject] && <p style={{ color: "red" }}>{this.state.errors[subject]}</p>} */}
              {this.state.errors[subject] && <p >{this.state.errors[subject]}</p>}
            </div>
          ))}
          
          { (this.state.speciality!="N00" && this.state.speciality!=null) &&
          <div>
          <Amazigh_div
          Amazigh={this.state.amazigh}
          Amazigh_note={this.state.amazigh_mark}
          onChange={this.handleChange}
          />

          {this.state.errors['amazigh_mark'] && <p >{this.state.errors['amazigh_mark']}</p>}
          <SportDiv
                Sport={this.state.sport}
                Sport_note={this.state.sport_mark}
                onChange={this.handleChange}
              />
              {this.state.errors['sport_mark'] && <p >{this.state.errors['sport_mark']}</p>}
          </div>
          }
{
  this.state.speciality!="N00" && this.state.speciality!=null &&
              <button
                type="submit"
                style={{
                  marginBottom: "20px",
                  padding: "10px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Voir les Recomendations
              </button>}
            </form>
          </div>
        );
     
    }
  }




}

export default Form;
