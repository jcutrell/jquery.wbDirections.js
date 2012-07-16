/*
 * jquery.wbDirections
 * https://github.com/jonathancutrell/jquery.wbDirections
 *
 * Copyright (c) 2012 Jonathan Cutrell
 * Licensed under the MIT, GPL licenses.

 To get started, first grab an API key and include Google Maps on your page like this:
 <script type="text/javascript"
      src="http://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&sensor=SET_TO_TRUE_OR_FALSE">

      usage:
      $('form#get_directions').on("submit", function(e){
        var f = this;
        e.preventDefault();
        $("#directions").wbDirections({
          from : f.find("input[name=from]"),
          to : f.find("input[name=to]"),
          cb : function(response){
            $("#directions").fadeIn();
          }
        })
      })
 */


(function($, w, undefined) {
  $.fn.wbDirections = function(options) {
    return this.each(function(i,el) {
      if ($(el).attr("id") == ""){
        $(el).attr("id", "wbDirections"+i);
      }
      var defaults = {
        from    : "3001 Broad Street, Chattanooga, TN, 37408",
        to      : "Howell Mill Road, Atlanta, GA, 30318",
        trgtId    : $(el).attr('id'),
        mapId   : "wbDirections_map"+ i,
        directionsListId : "wbDirections_list"+ i
      }, opts;
        defaults.cb = function(r, s){}
      opts = $.extend({}, defaults, options);

      // append items if they don't exist already.
      if ($("#"+opts.trgtId).length == 0){
        $("<div id='"+opts.trgtId.replace("#","")+"'>").appendTo("body");
      }
      if ($("#"+opts.trgtId).find("#"+opts.mapId).length == 0){
        $("#"+opts.trgtId).append("<div id='"+opts.mapId+"'>")
        $("#"+opts.mapId).css({
          width:$("#"+opts.mapId).parent().width() - 30,
          height:$("#"+opts.mapId).parent().height() - 30,
          marginLeft : 15
        });
      }
      if ($(opts.trgtId).find("#"+opts.directionsListId).length == 0){
        $("#"+opts.trgtId).append("<div id='"+opts.directionsListId+"'>").css({width:$("#"+opts.directionsListId).parent().width()});;
      }

      var wbDirections = {
        directionService : new google.maps.DirectionsService(),
        directionsDisplay : new google.maps.DirectionsRenderer(),
        mapOptions : {
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
      }
      wbDirections.map = new google.maps.Map(document.getElementById(opts.mapId),
            wbDirections.mapOptions)
      wbDirections.request = {
           origin: opts.from,
           destination: opts.to,
           travelMode: google.maps.TravelMode.DRIVING
        }
      
      // set up map
      wbDirections.directionsDisplay.setMap(wbDirections.map);

      // set up directions list
      wbDirections.directionsDisplay.setPanel(document.getElementById(opts.directionsListId))

      // Get the directions, run the callback
      function getDirections(){
         $("#"+opts.trgtId).trigger("loading.wbDirections");
         wbDirections.directionService.route(wbDirections.request, function (response, status) {
              if (status == google.maps.DirectionsStatus.OK) {
                  wbDirections.directionsDisplay.setDirections(response);
                  $("#"+opts.trgtId).trigger("loaded.wbDirections");
                  opts.cb(response);
              }
        });
      }
      getDirections();

    });
  }
})(jQuery, window);