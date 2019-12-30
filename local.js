//load JSON

let result = [];
const loadJSON = (path, success, error) => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        if (success) success(JSON.parse(xhr.responseText));
      } else {
        if (error) error(xhr);
      }
    }
  };
  xhr.open("GET", path, true);
  xhr.send();
};

loadJSON(
  "bigData.json",
  function(data) {





    let j = 0;
    let t = 0;
    let i;
    let selectedGender = null;

    //gender pick
    
    document.querySelector(".male").onclick = function() {
      selectedGender = "F";
      document.querySelector(".male").style.cssText =
        "box-shadow:0px 0px 15px green;";
      document.querySelector(".female").style.cssText =
        "box-shadow:0px 0px 5px grey;";
    };

    document.querySelector(".female").onclick = function() {
      selectedGender = "M";
      document.querySelector(".female").style.cssText =
        "box-shadow:0px 0px 15px green;";
      document.querySelector(".male").style.cssText =
        " box-shadow:0px 0px 5px grey;";
    };

    //event handle
    let userIn;
    document.querySelector(".main-b").onclick = function(userIn) {
      userIn = document.querySelector(".inp").value;

      //validation
      if (selectedGender == null) {
        document.querySelector(".gender").style.cssText =
          "animation:warn 0.4s;";
      }
      if (userIn === "") {
        document.querySelector(".inp").style.cssText = "animation:warn 0.4s;";
      }

      //form inject
      if (selectedGender != null && userIn != "") {
        document.querySelector(".mid").style.cssText = "animation:0.6s gone 1 ";
        setTimeout(function() {
          document.querySelector(".mid").style.cssText = "left:-300vw;";
          document.querySelector(".load-back").style.cssText =
            "opacity:1; z-index:3;";
          var timeleft = 5;
          var downloadTimer = setInterval(function() {
            document.getElementById("progressBar").value = 5 - timeleft;
            timeleft -= 1;
            if (timeleft <= 0) {
              clearInterval(downloadTimer);
            }
          }, 1000);
        }, 0800);

        //data transfer
        const filterData = data.filter(items => {
          return items.gender === selectedGender;
        });
        let j = 0;
        let l;
        for (l = 0; l < filterData.length; l++) {


            //ALG
          function gObj(B) {
            var A;
            if (document.all) {
              if (typeof B == "string") {
                return document.all(B);
              } else {
                return B.style;
              }
            }
            if (document.getElementById) {
              if (typeof B == "string") {
                return document.getElementById(B);
              } else {
                return B.style;
              }
            }
            return null;
          }

          function showquickmsg(B, A) {
            if (A) {
              B = "<font color=red>" + B + "</font>";
            }
            gObj("coutput").innerHTML = B;
          }

          function trimAll(A) {
            while (A.substring(0, 1) == " ") {
              A = A.substring(1, A.length);
            }

            while (A.substring(A.length - 1, A.length) == " ") {
              A = A.substring(0, A.length - 1);
            }
            return A;
          }

          function getNum(A) {
            outputNum = 0;
            for (i = 0; i < A.length; i++) {
              outputNum += A.charCodeAt(i);
            }
            return outputNum;
          }
          //

          cnameone = userIn;
          cnametwo = filterData[l].studentname;
          cnameone = cnameone.toLowerCase();
          cnametwo = cnametwo.toLowerCase();
          totalNum = getNum(cnameone) * getNum(cnametwo);
          finalScore = totalNum % 100;
          result[l] = {name:cnametwo, score:finalScore }
          console.log(l,result[l]);
          
        
          //data fetching
        }
        result.sort(function(aI, bI){
            return bI.score-aI.score
        });
        console.log(result);
        setTimeout(function() {
          document.querySelector(".load-back").style.cssText = "opacity:0;";
          document.querySelector(".result").style.cssText = "opacity:1;";
          let p = 1;

          
            
            let insData = document.createElement("div");
            insData.className = "data-fetch";
            insData.innerHTML = result[p].name.toUpperCase();
            document.querySelector(".result").appendChild(insData);
          
        }, 6000);
      }
    };
  },
  function(xhr) {
    console.error(xhr);
  }
);
