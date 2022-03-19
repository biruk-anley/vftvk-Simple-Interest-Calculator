function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interst = principal * rate * years;
    var year = new Date().getFullYear() + parseInt(years);

    document.getElementById("result"), innerHTML =
        
        "If you deposit " + principal + "at the rate of " + rate + 
        
        "you will recieve " + interst + "in the year" + years 
        
        ""

}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval;
}
        