var rooftype;
var Roofinclination;
var getRoofing = "Tile";
var roof_type_alternate_border = 2;
var getBorderedElement;
localStorage.removeItem("count")
var getLocal =localStorage.getItem("count")

function getRoofType(roof_type) {
    rooftype = roof_type

    JSON.parse(getLocal)
    getLocal+2
    localStorage.setItem('count',JSON.stringify(getLocal))
    document.getElementById('Flachdach').style.border = 'transparent'
    document.getElementById('Grabendach').style.border = 'transparent'
    document.getElementById('Paralleldach').style.border = 'transparent'
    document.getElementById('Pultdach').style.border = 'transparent'
    document.getElementById('Pulterweitert').style.border = 'transparent'
    document.getElementById('Satteldach').style.border = 'transparent'

    var getFlachdach = document.getElementById("Flachdach")
    var getGrabendach = document.getElementById("Grabendach")
    var getParalleldach = document.getElementById("Paralleldach")
    var getPultdach = document.getElementById("Pultdach")
    var getPulterweitert = document.getElementById("Pulterweitert")
    var getSatteldach = document.getElementById("Satteldach")

    getFlachdach.classList.add("otherclass");
    getGrabendach.classList.add("otherclass");
    getParalleldach.classList.add("otherclass");
    getPultdach.classList.add("otherclass");
    getPulterweitert.classList.add("otherclass");
    getSatteldach.classList.add("otherclass");

    let array = [];
    var count = 0;
    var applyBorder;
    array.push(getFlachdach, getGrabendach, getParalleldach, getPultdach, getPulterweitert, getSatteldach)
    debugger


    for (let arr of array) {
        if (arr.id == roof_type) {
            applyBorder = arr.id
            document.getElementById(applyBorder).style.border = "1px solid blue";
            document.getElementById(applyBorder).style.borderRadius = "4px";
            getBorderedElement = document.getElementById(applyBorder);
            getBorderedElement.classList.remove("otherclass");
            count = 0
        }
    }

    // for (let arr of array) {
    //     if (arr.id == roof_type) {
    //         applyBorder = arr.id
    //         for (getLocal; getLocal < 1000; alter++) {
    //             if (getLocal%2 == 0) {
    //                 document.getElementById(applyBorder).style.border = "1px solid blue";
    //                 document.getElementById(applyBorder).style.borderRadius = "4px";
    //                 getBorderedElement = document.getElementById(applyBorder);
    //                 getBorderedElement.classList.remove("otherclass");
    //                 localStorage.setItem("count",getLocal)
    //                 rooftype = roof_type
    //                 break;
    //             }else{
    //                 // getBorderedElement.style.border="transparent";
    //                 document.getElementById(applyBorder).style.border = "transparent";
    //                 getBorderedElement.classList.add("otherclass")
    //                 localStorage.setItem("count",getLocal)
    //                 rooftype="roof type not selected"
    //                 break
    //             }
    //         }
    //         // document.getElementById(applyBorder).style.border = "1px solid blue";
    //         // document.getElementById(applyBorder).style.borderRadius = "4px";
    //         // getBorderedElement = document.getElementById(applyBorder);
    //         // getBorderedElement.classList.remove("otherclass");
    //         // count = 0
    //     }
    // }
}

function getRoofInclination(Roof_inclination) {
    debugger
    Roofinclination = Roof_inclination;

    document.getElementById('0-grad').style.border = 'transparent'
    document.getElementById('15-grad').style.border = 'transparent'
    document.getElementById('30-grad').style.border = 'transparent'


    var getZero_gradient = document.getElementById("0-grad")
    var getFifteen_gradient = document.getElementById("15-grad")
    var getThirty_gradient = document.getElementById("30-grad")

    getZero_gradient.classList.add("otherclass");
    getFifteen_gradient.classList.add("otherclass");
    getThirty_gradient.classList.add("otherclass");

    let array = [];
    var get_roof_inclination_borderedElement;
    array.push(getZero_gradient, getFifteen_gradient, getThirty_gradient)

    for (let arr of array) {
        if (arr.id == Roofinclination) {
            let applyBorder = arr.id
            document.getElementById(applyBorder).style.border = "1px solid blue"
            document.getElementById(applyBorder).style.borderRadius = "4px";
            get_roof_inclination_borderedElement = document.getElementById(applyBorder);
            get_roof_inclination_borderedElement.classList.remove("otherclass");
        }
    }
}
var getPurchaseType;

function interestedConcept() {
    debugger;
    var concept = document.getElementsByName('purchase_type');

    for (i = 0; i < concept.length; i++) {
        if (concept[i].checked)
            getPurchaseType = concept[i].value;
    }
    console.log(getPurchaseType);
}

function displayRadioValue() {
    debugger;
    var ele = document.getElementsByName('roofing');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            getRoofing = ele[i].value;
    }
    console.log(getRoofing);
}


function submit() {
    debugger;
    var Adress = document.getElementById("autocomplete").value
    var ManualInput = document.getElementById("manualinput").value
    var getBuildingHeight = document.getElementById("building_height").value
    var getUserFirstName = document.getElementById("firstname").value
    var getUserLastName = document.getElementById("lastname").value
    var getUserCompany = document.getElementById("company").value
    var getUserAdress = document.getElementById("adress").value
    var getUserCountry = document.getElementById("country").value
    var getUserEmail = document.getElementById("email").value
    var getUserPhoneNumber = document.getElementById("phonenumber").value
    var getUserAnulPowerConsumption = document.getElementById("anual_power_consumption").value
    var getUserInputStates = document.getElementById("inputState").value
    var getUserNotes = document.getElementById("notes_and_details").value
    var getUserPrivacyCheck = document.getElementById("privacycheck").value




    // var result= " ";
    // if (getLeaseRoofTop.checked == true){
    //   var lg1= document.getElementById("lease_rooftop").value;
    //   result= lg1 + " ";
    // }
    // else if (getRentRoofTop.checked == true){
    //   var lg2= document.getElementById("rent_rooftop").value;
    //   result= result + lg2 + " ";
    // }
    // else if (getBuyRoofTop.checked == true){
    // document.write(result);
    //   var lg3= document.getElementById("buy_rooftop").value;
    //   result= result + lg3 ;
    // }


    var obj = {
        // getLeaseRoofTop:getLeaseRoofTop,
        // getRentRoofTop:getRentRoofTop,
        // getBuyRoofTop:getBuyRoofTop,
        purchaseType:getPurchaseType,
        adress: Adress,
        manualInput: ManualInput,
        rooftype: rooftype,
        roofinclination: Roofinclination,
        roofing: getRoofing,
        getBuildingHeight: getBuildingHeight,
        //User Information Form
        userFirstName: getUserFirstName,
        userLastName: getUserLastName,
        userCompany: getUserCompany,
        userAdress: getUserAdress,
        userCountry: getUserCountry,
        userEmail: getUserEmail,
        userPhoneNumber: getUserPhoneNumber,
        userAnulPowerConsumption: getUserAnulPowerConsumption,
        userInputStates: getUserInputStates,
        userNotes: getUserNotes,
        userPrivacyCheck: getUserPrivacyCheck

    }

    console.log(obj);

    let ajax = new XMLHttpRequest()
    ajax.open("POST", "http://localhost:3000/userInfo");
    ajax.setRequestHeader("content-type", "application/json");
    ajax.onprogress = function () { }
    ajax.onload = function () {
        console.log(this.response);
    }
    ajax.send(JSON.stringify(obj))
}

let allAreas = []
var map; // Global declaration of the map
var iw = new google.maps.InfoWindow(); // Global declaration of the infowindow
var lat_longs = new Array();
var markers = new Array();
var drawingManager;
let allLongLat = []
let latlon = []
var lat = 40.9403762
var lng = -74.1318096
var mapZoom = 13

function getUserLocation() {
  mapZoom = 18
  this.flag = true
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {

      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;

      initialize()
    });
  } else {
    console.log("User didn't allow")
  }
}

function initialize() {
  var myLatlng = new google.maps.LatLng(lat, lng);
  var myOptions = {
    zoom: mapZoom,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.HYBRID
  }
  map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
  drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: google.maps.drawing.OverlayType.POLYGON,
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [google.maps.drawing.OverlayType.POLYGON]
    },
    polygonOptions: {
      editable: true
    }
  });
  drawingManager.setMap(map);

  google.maps.event.addListener(drawingManager, "overlaycomplete", function (event) {
    var newShape = event.overlay;
    newShape.type = event.type;
  });

  google.maps.event.addListener(drawingManager, "overlaycomplete", function (event) {
    overlayClickListener(event.overlay);
    $('#vertices').val(event.overlay.getPath().getArray());
    getLongLat()
  });

  // var input = document.getElementById('searchTextField');
  // new google.maps.places.Autocomplete(input);

}

function cities() {
  var input = document.getElementById('autocomplete');
  var autocomplete = new google.maps.places.Autocomplete(input);
  google.maps.event.addListener(autocomplete, 'place_changed', function () {
    var place = autocomplete.getPlace();

    lat = place.geometry.location.lat(),
      lng = place.geometry.location.lng();

    console.log(lat);
    console.log(lng);

    initialize()
  })
}

function overlayClickListener(overlay) {
  google.maps.event.addListener(overlay, "mouseup", function (event) {
    $('#vertices').val(overlay.getPath().getArray());

  });
}
google.maps.event.addDomListener(window, 'load', initialize);

// $(function () {
//   $('#save').click(function () {
//     //iterate polygon vertices?
//     // getLongLat()
//     sumOfArea()
//   });
// });


// area
function sumOfArea() {
  const sum = allAreas.reduce(add, 0);
  function add(accumulator, a) {
    return accumulator + a;
  }
  document.getElementById("markedroof").innerHTML = parseInt(sum)
}

function GetArea(polygon) {
  const length = polygon.length;

  let sum = 0;

  for (let i = 0; i < length; i += 2) {
    sum +=
      polygon[i] * polygon[(i + 3) % length] -
      polygon[i + 1] * polygon[(i + 2) % length];
  }

  return (Math.abs(sum) * 0.5)
}

function latlontocart(latlon) {
  // debugger
  let latAnchor = latlon[0][0];
  let lonAnchor = latlon[0][1];
  let x = 0;
  let y = 0;
  let R = 6378137; //radius of earth

  let pos = [];

  for (let i = 0; i < latlon.length; i++) {
    let xPos =
      (latlon[i][1] - lonAnchor) * ConvertToRadian(R) * Math.cos(latAnchor);
    let yPos = (latlon[i][0] - latAnchor) * ConvertToRadian(R);

    pos.push(xPos, yPos);
  }
  return pos;
}

function ConvertToRadian(input) {
  return (input * Math.PI) / 180;
}

function getLongLat() {
  latlon = []
  const getlon_lan = document.getElementById('vertices').value;
  console.log(getlon_lan);
  x = getlon_lan.replace(/[{()}]/g, '');
  var array = JSON.parse("[" + x + "]");
  while (array.length > 0) {
    chunk = array.splice(0, 2)
    latlon.push(chunk)
    allLongLat.push(chunk)

  }
  console.log(allLongLat);
  allAreas.push(GetArea(latlontocart(latlon)));
  sumOfArea()
}

// google.maps.event.addDomListener(window, 'load', initialize);

// var input = document.getElementById('autocomplete');
// var autocomplete = new google.maps.places.Autocomplete(input);

function clearMarkedArea() {
  allAreas = []
  allLongLat = []
  sumOfArea()
  initialize()
}

