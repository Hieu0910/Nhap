const adressbtn = document.querySelector('#Diachi')

//console.log(adressbtn)
adressbtn.addEventListener("click",function(){
	 document.querySelector('.Diachi').style.display="flex"
})
const adressclose = document.querySelector('#Diachi-close')
adressclose.addEventListener("click",function(){
	 document.querySelector('.Diachi').style.display="none"
})
//-----------------slider--------------------------------------