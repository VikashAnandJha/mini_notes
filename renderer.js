var title=document.title;
document.getElementById("textinput").addEventListener("keyup",function(){

    let text=document.getElementById("textinput").value;
    console.log(text)

    document.title = "Saving..";

    setTimeout(function(){
        document.title =title;
    },500)

saveText(text)
  })
  const saveText = async (text) => {
    const response = await window.versions.saveText(text)
    console.log(response) 
  }
  
  const getText = async (text) => {
    const response = await window.versions.getText()
    console.log("got:"+response) 

    document.getElementById("textinput").value=response;


  }
  getText()