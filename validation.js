// validation script here
//var reg = /[a-z]/ig;
//var reg = new RegEx(/[a-z]/,i);

//pattern is a object
const pattern = {
    //these all are object
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\d\w@-]{8,20}$/i,
    slug: /^[a-z\d-]{8,20}$/,
    email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/ 
    //         yourname @ domain   .  com          ( .uk )
};

//https://www.w3schools.com/js/js_const.asp
//https://www.w3schools.com/js/js_htmldom_document.asp
//https://www.w3schools.com/jsref/met_document_queryselectorall.asp
//inputs is a collection like an array
const inputs = document.querySelectorAll("input");


function validate(field,regex){
    //console.log(regex.test(field.value));
    if(regex.test(field.value)){
        field.className = "valid";
    }else{
        field.className = "invalid";
    }
}


//https://www.w3schools.com/jsref/jsref_foreach.asp
//https://www.w3schools.com/jsref/dom_obj_event.asp
inputs.forEach((input)=>{
    input.addEventListener('keyup',(e) => {
        //console.log(e.target.attributes.name.value);
        //inside pattern[telephone] = pattern[e.target.attributes.name.value]
        validate(e.target, pattern[e.target.attributes.name.value]);
    });
});
