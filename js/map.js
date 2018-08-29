ymaps.ready(init);
var myPlacemarks = [
    {
        latitude: 59.97341330,
        longitude: 30.31076631
    },
    {
        latitude: 59.94520388,
        longitude: 30.38246591
    },
    {
        latitude: 59.89138357, 
        longitude: 30.31791085
    },
    {
        latitude: 59.91509633, 
        longitude: 30.49731218
    }
];

function init() {
    var myMap = new ymaps.Map("map", {
        center: [59.93499114, 30.36638677],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    myPlacemarks.forEach(function(obj) {
        var placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'img/icons/mapmark.svg',
                iconImageSize: [46, 57],
                iconImageOffset: [-23, -57]
            });

            myMap.geoObjects.add(placemark);
    });

/*    var placemark = new ymaps.Placemark([59.97341330, 30.31076631], {
    },
    {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/mapmark.svg',
        iconSize: [46, 57]
    });
    var placemark1 = new ymaps.Placemark([59.94520388, 30.38246591], {
    },
    {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/mapmark.svg',
        iconSize: [46, 57]
    });
    var placemark2 = new ymaps.Placemark([59.89138357, 30.31791085], {
    },
    {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/mapmark.svg',
        iconSize: [46, 57]
    });
    var placemark3 = new ymaps.Placemark([59.91509633, 30.49731218], {
    },
    {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/mapmark.svg',
        iconSize: [46, 57]
    });*/


}