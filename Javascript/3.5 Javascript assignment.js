function billingFunction(){
    var a=document.getElementById('shippingName');
    var b=document.getElementById('shippingZip');
    if(document.getElementById('same').checked){
        document.getElementById('billingName').value=a.value;
        document.getElementById('billingZip').value=b.value;
    }
    else{
        document.getElementById('billingName').value="";
        document.getElementById('billingZip').value="";
    }
}