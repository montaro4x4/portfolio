

d3.json('data/resume/resume.json')
  .then(function(data) 
    {
        console.log(data)
        data["skills"].forEach(d => 
            {
                skillsList = document.getElementById("skillList");
                skillRow = document.createElement("DIV");
                skillRow.className="row";
                skillDiv = document.createElement("DIV");
                skillDiv.className="col-6 col-md-5 col-lg-4 col-xl-3 col-xxl-3";
                skillElement = document.createElement("H4");
                skillElement.innerHTML = d.skill;
                rateDiv = document.createElement("DIV");
                rateDiv.className="col-6 col-md-5 col-lg-4 col-xl-3 col-xxl-3";
                rateElement = document.createElement("H5");
                rateElement.innerHTML = d.rate;
                skillRow.appendChild(skillDiv);
                skillDiv.appendChild(skillElement);
                skillRow.appendChild(rateDiv);
                rateDiv.appendChild(rateElement);
                skillsList.appendChild(skillRow);
            });

        data["pythonLibs"].forEach(d => 
            {
                skillsList = document.getElementById("PythonLibsList");
                skillRow = document.createElement("DIV");
                skillRow.className="row";
                skillDiv = document.createElement("DIV");
                skillDiv.className="col-6 col-md-5 col-lg-4 col-xl-3 col-xxl-3";
                skillElement = document.createElement("H4");
                skillElement.innerHTML = d.skill;
                rateDiv = document.createElement("DIV");
                rateDiv.className="col-6 col-md-5 col-lg-4 col-xl-3 col-xxl-3";
                rateElement = document.createElement("H5");
                rateElement.innerHTML = d.rate;
                skillRow.appendChild(skillDiv);
                skillDiv.appendChild(skillElement);
                skillRow.appendChild(rateDiv);
                rateDiv.appendChild(rateElement);
                skillsList.appendChild(skillRow);
            });

        data["mlAlgorithms"].forEach(d => 
            {
                skillsList = document.getElementById("mlAlgorithmsList");
                skillRow = document.createElement("DIV");
                skillRow.className="row";
                skillDiv = document.createElement("DIV");
                skillDiv.className="col-6 col-md-5 col-lg-4 col-xl-3 col-xxl-3";
                skillElement = document.createElement("H4");
                skillElement.innerHTML = d.skill;
                rateDiv = document.createElement("DIV");
                rateDiv.className="col-6 col-md-5 col-lg-4 col-xl-3 col-xxl-3";
                rateElement = document.createElement("H5");
                rateElement.innerHTML = d.rate;
                skillRow.appendChild(skillDiv);
                skillDiv.appendChild(skillElement);
                skillRow.appendChild(rateDiv);
                rateDiv.appendChild(rateElement);
                skillsList.appendChild(skillRow);
            });            

        data["tools"].forEach(d => 
            {
                skillsList = document.getElementById("toolsList");
                skillRow = document.createElement("DIV");
                skillRow.className="row";
                skillDiv = document.createElement("DIV");
                skillDiv.className="col-6 col-md-5 col-lg-4 col-xl-3 col-xxl-3";
                skillElement = document.createElement("H4");
                skillElement.innerHTML = d.skill;
                rateDiv = document.createElement("DIV");
                rateDiv.className="col-6 col-md-5 col-lg-4 col-xl-3 col-xxl-3";
                rateElement = document.createElement("H5");
                rateElement.innerHTML = d.rate;
                skillRow.appendChild(skillDiv);
                skillDiv.appendChild(skillElement);
                skillRow.appendChild(rateDiv);
                rateDiv.appendChild(rateElement);
                skillsList.appendChild(skillRow);
            });    
               
        data["lenguages"].forEach(d => 
            {
                lenguagesList = document.getElementById("lenguagesList");
                lenguageElement = document.createElement("H2");
                lenguageElement.innerHTML = d.lenguage;
                levelElement = document.createElement("H5");
                levelElement.innerHTML = d.level;
                spaceElement = document.createElement("P");
                spaceElement.innerHTML = "&nbsp;";
                lenguagesList.appendChild(lenguageElement);
                lenguagesList.appendChild(levelElement);
                lenguagesList.appendChild(spaceElement);
            });    
            
        data["education"].forEach(d => 
            {
                educationList = document.getElementById("educationList");
                degreeElement = document.createElement("H2");
                degreeElement.innerHTML = d.degree;
                instituteElement = document.createElement("H5");
                instituteElement.innerHTML = d.institute;
                spaceElement = document.createElement("P");
                spaceElement.innerHTML = "&nbsp;";
                educationList.appendChild(degreeElement);
                educationList.appendChild(instituteElement);
                educationList.appendChild(spaceElement);
            });  

        data["cartificates"].forEach( function(d,i)  
            {
                rowCertificate = document.createElement("DIV");
                rowCertificate.className="row";
                divBadge = document.createElement("DIV");
                divBadge.className="col-12 col-md-2 col-lg-2 col-xl-2 col-xxl-1";
                divBadge.id="badge"+i;
                divInfo = document.createElement("DIV");
                divInfo.className="col-12 col-md-10 col-lg-10 col-xl-10 col-xxl-11";                
                divInfo.id="info"+i;
                certificatesList = document.getElementById("certificatesList");
                certificatesList.appendChild(rowCertificate);
                rowCertificate.appendChild(divBadge);
                rowCertificate.appendChild(divInfo);
                badge = document.getElementById("badge"+i);
                info  = document.getElementById("info"+i);
                degreeElement = document.createElement("H2");
                degreeElement.innerHTML = d.degree;
                instituteElement = document.createElement("H5");
                instituteElement.innerHTML = d.institute;
                spaceElement = document.createElement("P");
                spaceElement.innerHTML = "&nbsp;";
                certificateElement = document.createElement("IMG");
                certificateElement.src = "certificates/"+d.image+".png"
                certificateElement.className = "logo"
                badge.appendChild(certificateElement);
                info.appendChild(degreeElement);
                info.appendChild(instituteElement);
                rowCertificate.appendChild(spaceElement);
                
            });                         
    });




