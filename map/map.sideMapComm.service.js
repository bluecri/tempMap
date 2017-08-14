(function ()
{
    'use strict';

    angular
        .module('app.core')
        .service('sideMapCommService', sideMapCommService);

    /** @ngInject */
    function sideMapCommService()
    {
        var service = this;
        
        //nMarkerTitleToKMarkerMappingObj, categoriesToKMarkerMappingObj, kMarkerStorageArr, kMarkersOnMap, CategoryMenuData, kMarkerData,
        
        //basic
        //service.nMarkerTitleToKMarkerMappingObj = null;
        //service.categoriesToKMarkerMappingObj = null;
        //service.kMarkerStorageArr = null;
        //service.kMarkersOnMap = null;
        service.CategoryMenuData = null;
        //service.kMarkerData = null;

        //comm
        service.bSideOpen = false;
        service.kMarkerResolvedArr = [];


        //methods
        service.startSideBar = function(inKMarkerArr){
            service.kMarkerResolvedArr = inKMarkerArr;
            console.log("startSideBar func");
            //service.bSideOpen = true;
        }
	    //Get User Location every 1 min. 1sec == 1000
        /*
        service.getLocation = function() {
            if (navigator.geolocation) { // GPS를 지원하는 경우
                navigator.geolocation.getCurrentPosition(function(position) {
                    //alert(position.coords.latitude + ' ' + position.coords.longitude);
                    //현재 user의 위치를 얻는다.
                    service.userLastLng = position.coords.longitude;
                    service.userLastLat = position.coords.latitude;
                    service.userCord.lat = service.userLastLat;
                    service.userCord.lng = service.userLastLng;
                    service.userCord.cnt++;
                }, function(error) {
                    console.error(error);
                }, {
                    enableHighAccuracy: true, //high Accuracy
                    maximumAge: 0,
                    timeout: 250000  //timeout Infinity시에 error 상태의 function이 절대 호출되지 않음.
                });
            } else {
                alert('GPS를 지원하지 않습니다');
            }
        }*/

        //service.getLocation();
        //$interval(service.getLocation, 60000); 
    }

})();