
var list1 = document.getElementById("selectText1");

document.getElementById("cdl1").style.display="none";
document.getElementById("cdlpr1").style.display="none";
// for dropdown function
function cdl_req(){
// new
    
    if(list1.value == "cdl"){
        document.getElementById("cdl1").style.display="block";
        document.getElementById("cdlpr1").style.display="none";
    }
//plain renew
    else if(list1.value == "cdlpr"){
        document.getElementById("cdlpr1").style.display="block";
        document.getElementById("cdl1").style.display="none";
    }
    else{
        document.getElementById("cdl1").style.display="none";
        document.getElementById("cdlpr1").style.display="none";
    }
}


    //for storage
    

nextL.onclick = function(){

    if (list1.value == "s"){
        alert("Please complete the requirements.");
    }
    else{

    if (list1.value == "cdl"){
        var lca = "Conductor License (CL) NEW"
    }
    else if(list1.value == "cdlpr"){
        var lca = "Conductor License (CL) RENEW"
    }
        localStorage.setItem("lca",lca);

        window.location = "c_datepicker.html";
    }
    
}

//cln
document.querySelector("#req1_cln").addEventListener("change", function (){
    // console.log(this.files);
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        //console.log(reader.result);
        localStorage.setItem("req1",reader.result)
    });

    reader.readAsDataURL(this.files[0]);
})

document.querySelector("#req2_cln").addEventListener("change", function (){
    // console.log(this.files);
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        //console.log(reader.result);
        localStorage.setItem("req2",reader.result)
    });

    reader.readAsDataURL(this.files[0]);
})

// clrn
document.querySelector("#req1_clrn").addEventListener("change", function (){
    // console.log(this.files);
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        //console.log(reader.result);
        localStorage.setItem("req1",reader.result)
    });

    reader.readAsDataURL(this.files[0]);
})

document.querySelector("#req2_clrn").addEventListener("change", function (){
    // console.log(this.files);
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        //console.log(reader.result);
        localStorage.setItem("req2",reader.result)
    });

    reader.readAsDataURL(this.files[0]);
})
