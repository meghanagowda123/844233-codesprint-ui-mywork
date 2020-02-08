const FITNESSTRAINEES_KEY = "trainees";

getFitnessTraineesFromLocalStorage = () =>{
    let trainees=[];
    
    if(localStorage.getFitnessTrainee(FITNESSTRAINEES_KEY)){
        trainees=JSON.parse(localStorage.getFitnessTrainee(FITNESSTRAINEES_KEY));
    }

    return trainees;
}

addDataFormSubmit = () =>{
    let trainee = getFitnessTraineesFromLocalStorage();

    let dataNameTextBox = document.querySelector("#tfm");
    let dataAddressTextBox = document.querySelector("#stra");
    let dataCityTextBox = document.querySelector("#cty");
    let dataPackageTextBox=document.querySelector("#pckg");
    let dataPreferenceTextBox=document.querySelector("#tpref");
    let dataMobileTextBox=document.querySelector("#mbl");
   
   
    let data = {
        name:dataNameTextBox.value,
        address:dataAddressTextBox.value,
        city:dataCityTextBox.value,
	    package:parseFloat(dataPackageTextBox.value),
        preference:dataPreferenceTextBox.value,
        mobile:parseInt(dataMobileTextBox.value)
    };

    trainees.push(trainee);
    localStorage.setFitnessTrainee(FITNESSTRAINEES_KEY,JSON.stringify(trainees));
}

loadData = () =>{
    let trainees = getFITNESSTraineesFromLocalStorage();

    let tableBody = document.querySelector("#trData");

    for(let trainee of trainees){
        let trRow = createFitnessTraineeRow(trainee);
        tableBody.append(trRow);
    }
}

createFitnessTraineeRow = (trainee) =>{

    let nameCol = document.createElement("td");
    nameCol.textContent=trainee.firstname," ",trainee.lastname;
    
    let addressCol = document.createElement("td");
    addressCol.textContent=trainee.address;

    let cityCol = document.createElement("td");
    cityCol.textContent=trainee.city;

   let packageCol = document.createElement("td");
    packageCol.textContent=trainee.package;
    
    let preferenceCol = document.createElement("td");
    preferenceCol.textContent=trainee.preference;

    let mobileCol = document.createElement("td");
    mobileCol.textContent=trainee.mobile;

    let trRow = document.createElement("tr");
    trRow.append(nameCol);
    trRow.append(addressCol);
    trRow.append(cityCol);
    trRow.append(packageCol);
    trRow.append(preferenceCol);
    trRow.append(mobileCol);

    return trRow;
}