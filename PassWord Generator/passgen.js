var keyList="abcdefghijklmnopqrstvuwxyz1234567890!@#$%&*"
    var temp=""
    function generatepass(plength){
        temp=""
        for(i=0;i<plength;i++){
            temp+=keyList.charAt(Math.floor(Math.random()*keyList.length))
        }
        return temp
    }
        
function populateForm(enterLength){
    document.passGen.output.value=generatepass(enterLength)
}