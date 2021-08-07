
function myFunction() {
    var fname = document.getElementById("Firstname").value;
    var secondname = document.getElementById("Secondname").value;
    var thirdname = document.getElementById("Thirdname").value;
    var Dateofbirth = document.getElementById("Dateofbirth").value;
    var Countyofbirth = document.getElementById("Countyofbirth");
    var country = document.getElementById("country");
    var Nationalid = document.getElementById("Nationalid");
    var Gender = document.getElementById("ff_nm_Gender[]");
    var education = document.getElementById("education");
    var language = document.getElementById("language");
    var disability = document.getElementById("Anydisability");
    var ddescription = document.getElementById("disabilitydescription");
  
    //
    var dataString = '&Firstname1=' + fname + '&Secondname=' + secondname + '&Thirdname=' + thirdname + '&Dateofbirth=' + Dateofbirth + '&Countyofbirth=' + Countyofbirth + '&country=' + country +'&Nationalid=' + Nationalid + 'ff_nm_Gender[]=' + Gender + '&education=' + education + '&language=' + language + '&disability=' + disability + '&Anydisability=' + ddescription ;
    if (fname == '' || secondname == '' || thirdname == '' || Dateofbirth == '' || Countyofbirth == '' || country == '' || Nationalid == '' || Gender == '' || education == '' || language == '' ||  disability == '' || ddescription == '')  
    {
    alert("Please Fill All Fields");
    } else {
    // AJAX code to submit form.
    $.ajax({
    type: "POST",
    url: "php22.php",
    data: dataString,
    cache: false,
    success: function(html) {
    alert(html);
    }
    });
    }
    return false;
    }
    