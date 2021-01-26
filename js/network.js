setTimeout(function(){
    if (navigator.onLine) {
            window.location.href="./index.html";
        } else {
            window.location.href="./error.html";
        }
},800)

