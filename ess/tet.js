
let data = {
    "frontend programming": 
    [
        "Html", 
        "Css3",
        "javascript" 
    ],

    "backend programming": 
    [
        "Python", 
        "Php",
        "Ruby",
        "Java",
        "C#",
        "Go" 
    ],

    "javascript frameworks": 
    [
        "React", 
        "Vuejs",
        "Angular" 
    ],

    "css frameworks": 
    [
        "Bootstrap5", 
        "Tailwind",
        "MaterielUi" 
    ],

    "backend frameworks": 
    [
        "Django", 
        "Laravel",
        "Asp.net",
        ".net",
        "Nodejs + expressjs",
        "MongoDb" 
    ],

    "databases": 
    [
        "Sql3", 
        "Mysql",
        "Oracle",
        "postgreSQL" 
    ],

    "app devloppement": 
    [
        "Dart", 
        "C#",
        "javascript",
        "java",
        "kotlin" 
    ],

    "app dev frameworks": 
    [
        "flutter", 
        "React-Native",
        "Xamarin"
    ],

    "games programming": 
    [
        "C#", 
        "C++"
    ],
    
    "software devloppement": 
    [
        "C#", 
        "C++",
        "java",
        "javascript"
    ]

};

var input = data[""];

function datas(input){
    

    if (input === "software devloppement"){

        console.log(data["software devloppement"]);
    }else if (input === "frontend programming"){

        console.log(data["frontend programming"]);
    }else if (input === "backend programming"){

        console.log(data["backend programming"]);
    }else if (input === "javascript frameworks"){

        console.log(data["javascript frameworks"])
    }else if (input === "css frameworks"){

        console.log(data["css frameworks"])
    }else if (input === "backend frameworks"){

        console.log(data["backend frameworks"])
    }else if (input === "databases"){

        console.log(data["databases"])
    }else if (input === "app devloppement"){

        console.log(data["app devloppement"])
    }else if (input === "app dev frameworks"){

        console.log(data["app dev frameworks"])
    }else if (input === "games programming"){

        console.log(data["games programming"])
    }else{
        console.log("nothing found")
    }

}

pli = console.log(datas("software devloppement"));

console.log(pli);


var seleted = document.querySelector(".rono");
var optioncontainer = document.querySelector(".rini");
var optionslist = document.querySelectorAll(".fields");


seleted.addEventListener("click", ( ) => {
    optioncontainer.classList.toggle("activy");
});

optionslist.forEach( p => {
    p.addEventListener("click", () => {
        seleted.innerHTML = p.querySelector("label").innerHTML;
        optioncontainer.classList.remove("activy")
    });
});

