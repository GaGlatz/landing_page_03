function menu_mobile() {
    const list = document.getElementById('header__list');
    if (list.style.right == "-25rem") {
        list.style.right = "-1rem"
        list.style.transitionDuration = "0.5s"
    } else {
        list.style.right = "-25rem"
        list.style.transitionDuration = "0s"
    }
}

window.onload = function() {
  let map;
  let LatLng = {
    'lat': -22.895018,
    'lng': -45.3800357
  };

  function initialize () {
    let mapProp = {
      center: new google.maps.LatLng(LatLng),
      scrollWheel: false,
      zoom: 17,
      mapTypeId: 'roadmap'
    }

    map = new google.maps.Map(document.getElementById("map"), mapProp);
  }

  function addMarker(icon) {
    let marker = new google.maps.Marker({
      position: LatLng,
      map: map,
      icon: icon
    });

    let infoWindow = new google.maps.InfoWindow({
      content: content,
      maxWidth: 200,
      pixelOffset: new google.mps.Size(0, 20)
    });

    infoWindow.open(map, Marker);
  }

  initialize();
  addMarker('');
}