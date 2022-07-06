const inputFields = document.querySelector(".input-fields")
const templatesdesign = document.querySelector(".Tdesigns");

const output = document.querySelector(".output")
const output2 = document.querySelector(".output2")
const output3 = document.querySelector(".output3");
const output4 = document.querySelector("output4")

// Switch JS






//Text Fields
async function TextEditor(element){
  const newEditor = await ClassicEditor
.create( element,{
  toolbar: [ 'heading',  'bold','links', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ],
} )
return newEditor
}

let Workexpdetails
TextEditor(inputFields["workexp"]).then(nEditor=>{
  Workexpdetails = nEditor
})
let Academic;
TextEditor(inputFields["academics"]).then(nEditor=>{
  Academic = nEditor
})
  let Skills;
TextEditor(inputFields["skills"]).then(nEditor=>{
  Skills = nEditor

})


  

let inputShow = true;
function toggle(){
if(inputShow){
  inputFields.style.display="none"
  templatesdesign.style.display="none"
  inputShow=false;
  output.innerHTML=`
 
  <div class="hero">
  <h1>${inputFields["name"].value}</h1>
  <h4>${inputFields["title"].value}</h4>
  <h5>${inputFields["email"].value}</h5>
  </div>
  <div>
  <div class="main">
  <div style="padding:2rem">
  <h2> Objective </h2>
  <p> ${inputFields["objective"].value} </p>

  <h2>Skills</h2>
  <p> ${Skills.getData()} </p>

  <h2> Contact </h2>
  <p>${inputFields["contact"].value}</p>

  <h2> Projects </h2>
  <p> ${inputFields["projects"].value} </p>

  
  </div>
 
  <div class="main2" style="padding:2rem;color:#fff">
  <h2> Work Experience </h2>
 ${Workexpdetails.getData()}

  <h2> Academic Qualification </h2>
  ${Academic.getData()}

  <h2>Achievments  </h2>
  


  </div>

  `;
  output2.innerHTML=`
  <div id="previewbtn" style="  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  background:#fff;">
  <button onclick="print()" style="border: none;background:transparent;"> <a href="#" class="btn btn-primary">Print Resume</a></button> 
  <button style="margin:0.8rem" onclick="preview1()"class="btn btn-primary"> Edit </button>
  </div> 
  `
}
else {
  inputFields.style.display="block"
  inputShow=true;
  output.innerHTML=""
}
}

//Another design



inputcontent = true;
function anotherdesign() {
  if(inputcontent){
    templatesdesign.style.display="none"
    inputFields.style.display="none";
    inputcontent=false
   output3.innerHTML= 
   ` <div id="resume">
   <h1>${inputFields["name"].value}</h1>
   <p>Cell: <a href=#>${inputFields["contact"].value}</a></p>
  <p> Email:<a href=#>${inputFields["email"].value}</a> </p> 
  <p> Title:<a href=#>${inputFields["title"].value}</a> </p>  
  <p id="objective">${inputFields["objective"].value}</p>  

  <dl>
  <dt>Academic Qualification
  <dd>
    <p>${Academic.getData()}</p>
   
</dl>

<dl>
<dt>Skills
<dd>
<p> ${Skills.getData()}</p>
</dl>

<dl>
<dt> Work Experience
<dd>
<p>  ${Workexpdetails.getData()} </p>
</dd>
</dl>

<dl>
<dt> Projects
<dd>
<p> ${inputFields["projects"].value} </p>
</dd>
</dl>

<div>



   

</div>`
    
  output2.innerHTML=` 
  <div id="previewbtn" style="  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  background:#fff;">
  <button onclick="print()" style="border: none;background:transparent;"> <a href="#" class="btn btn-primary">Print Resume</a></button> 
  <button style="margin:0.8rem" onclick="preview1()"class="btn btn-primary"> Edit </button>
  </div> `;
  }
  else {

  }
}

function preview1() {
  document.getElementById("previewbtn").innerHTML=""
  inputFields.style.display="block";
  templatesdesign.style.display="block";
  output.innerHTML="";
  output2.innerHTML=""

}

//Minimal 1 




inputcontent = true;
function Design3() {
  if(inputcontent) {
    templatesdesign.style.display="none"
    inputFields.style.display="none";
    inputcontent=false
   output3.innerHTML= `
   <div id="inner-nav"></div>
   <div id="container">
       <div id="profile">
       <!--IF NEED TO ADD IMAGE YOU CAN ADD HERE -->
       <!--   <div id="image">
               <img id="profile-photo" src="http://mnnit.ac.in/ss/images/shashank.jpg" alt="Profile-Image"> 
               <a href="#"><i class="fas fa-pen stroke-transparent"></i></a>
           </div>-->
           <p id="name">${inputFields["name"].value}<br></p>
           <p id="Titlee" style="margin-top: -1rem"><br><strong>${inputFields["title"].value}</strong></p> 
           <p id="objective" style="margin-top: -2rem;"><br>${inputFields["objective"].value}</p> 
           <!--Social Links-->
         <!--  <div id="social-links"><a href="#">  </a></div>
           -->
           <hr width="100%">
           <div id="about">
               <p style="display:inline;">Contact Details </p>
               <a href="#"><i class="fas fa-pen stroke-transparent-blue"></i></a>
           </div>
         <!--  <p id="year-graduation">Expected Year of Graduation<br><strong>March, 2014</strong></p> -->
        
           <!--    <p id="more-about">More about me<br><span>DUGC of Computer Science & Engineering Department</span></p>-->
           
    <!--    <p id="designation"><br> </p> -->

    <p id="Address">Address<br>${inputFields["address"].value}</p>
    <p id="fax">Cell<br>${inputFields["contact"].value}</p>
    <p id="email">Email<br>${inputFields["email"].value}</p>
           </div>
       <div id="info-cards">
           <div class="card">
               <p>&nbsp;&nbsp;&nbsp;Work Experience</p>
               ${Workexpdetails.getData()}
           </div>
           <div class="card">
               <p>&nbsp;&nbsp;&nbsp;Skils</p>
              <span> 
              ${Skills.getData()} </span>
              
           </div>
           <div class="card">
               <p>&nbsp;&nbsp;&nbsp;Academic Qualification</p>
              <span> ${Academic.getData()} </span>
               
           </div>
       </div>
   </div>
  ` 
  output4.innerHTML= ` `
}

}