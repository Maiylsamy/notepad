 const notescontainer=document.querySelector(".notes-container");
 const createbtn=document.querySelector(".btn");
 const inputbox=document.querySelector(".inputbox");

 createbtn.addEventListener ("click",()=>{
    let inputbox=document.createElement("p");
    let img=document.createElement("img");
    inputbox.className="inputbox";
    inputbox.setAttribute("contenteditable","true");
    img.src="bin.png";
    notescontainer.appendChild(inputbox).appendChild(img);
 });
 
 notescontainer.addEventListener("click",function(e){
   if(e.target.tagName =="IMG"){
      e.target.parentElement.remove();
   }
 })