function change()
{
    console.log("btn clckd")
    //step1
    var xhttp=new XMLHttpRequest();
    //STEP2
    xhttp.open("GET","data.txt",true)
    //step 3
    xhttp.send();
    //step4
    xhttp.onreadystatechange=function()
    {
        if(this.readyState == 4 && this.status==200)
        {
            console.log(this.responseText)
            document.getElementById("txt1").innerText=this.responseText
        }
    }
}