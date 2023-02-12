count=0;
var originalValue;
function myfunc()
{
    if(count==0)
    {
     originalValue= document.getElementById('Dhoni').innerHTML;
    }
    var value="";  
    if(count%2==0)
    {
        value= "Indian";
    }
    else{
        value = originalValue;
    }
    count++;
    return value;
}