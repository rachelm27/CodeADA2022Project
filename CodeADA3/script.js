//import 'jquery'
//import 'jquery-mapael';
var instIsVisible = false;
var instructionsTxt = "\n Hover over the map and select cities to visit. ";
  instructionsTxt += "Every city will have a challenge to complete to earn points and collect badges. ";
  instructionsTxt += "The goal is to visit seven major cities in the US to save the country and mitigate climate change.";
function instructions() {
  if (instIsVisible == false) {
    divInstructions.innerHTML = instructions;
    instIsVisible = true;
  }
  else {
    divInstructions.innerHTML = "";
    instIsVisible = false;
  }
}

$(".container").mapael({
    map: {
      name: "usa_states",
      width: 800,
      // Set default plots and areas style
      defaultPlot: {
        attrs: {
            fill: "#004a9b"
            , opacity: 0.6
        }
        , attrsHover: {
            opacity: 1
        }
        , text: {
            attrs: {
                fill: "#505444"
            }
            , attrsHover: {
                fill: "#000"
            }
        }
        , eventHandlers: {
            mouseover: function (e, id, mapElem, textElem, elemOptions) {
                if (typeof elemOptions.myText != 'undefined') {
                    $('.myText span').html(elemOptions.myText).css({display: 'none'}).fadeIn('slow');
                } 
                console.log("hiiii")
            },
            mouseout: function (e, id, mapElem, textElem, elemOptions) {
                $('.myText span').html(instructionsTxt).css({display: 'none'}).fadeIn('slow');
                console.log("byeeee")
            },
        }
    }
    , defaultArea: {
        attrs: {
            fill: "#dce3d5"
            , stroke: "#8cad72"
        }
        , attrsHover: {
            fill: "#80c21d"
        }
        , text: {
            attrs: {
                fill: "#505444"
            }
            , attrsHover: {
                fill: "#000"
            }
        }
    }
    },
     // Add some plots on the map
     plots: {
        'chicago': {
            type: "circle",
            size: 30,
            // url: "http://www.neveldo.fr/mapael/assets/img/marker.png",
            latitude: 41.8781,
            longitude: -87.6298,
            tooltip: {content: "Chicago, IL"},
            myText: "Chicago is plagued with the issue of transportation pollution. " 
                + "Its smog and particle pollution ranks among the top 25 in the country. "
                + "This is the result of diesel trucks and mass increase in personal vehicles which "
                + "heavily contribute to ozone, making Chicago have some of the dirtiest air in America. " 
                + "Click to learn about how your decisions can influence this impact!",
            href: "level1.html",
            target: "_blank"
        },
    }
  });