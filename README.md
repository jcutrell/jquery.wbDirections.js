# wbDirections

Whiteboard's solution for dropping in jQuery-based Google Maps with directions

## Getting Started
Download the [development version][max].

[min]: https://raw.github.com/jonathancutrell/jquery.wbDirections/master/dist/jquery.wbDirections.min.js
[max]: https://raw.github.com/jonathancutrell/jquery.wbDirections/master/dist/jquery.wbDirections.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.wbDirections.min.js"></script>
<script>
$(document).ready(function(){
  $('#get_directions').on("submit", function(e){
	   var f = $(this);
	   e.preventDefault();
	   $("#directions").wbDirections({
	     from : f.find("input[name=from]").val(),
	     to : f.find("input[name=to]").val()
	   });
	   $("#directions").on("loaded.wbDirections", function(){
	   		// do stuff in your callback, like show your directions
	       $("#directions").css({opacity:1})
	   });
	   return false;
	 });
});
</script>
```

## Documentation
The following are the default options available:

        from    : "3001 Broad Street, Chattanooga, TN, 37408",
        to      : "Howell Mill Road, Atlanta, GA, 30318",
        trgtId    : $(el).attr('id'),
        mapId   : "wbDirections_map"+ i,
        directionsListId : "wbDirections_list"+ i
        cb : function(response){}

-"From" is the address you are coming from. This will probably be pulled from a field in a form.
-"To" is the address you are going to. This can be hard-coded or pulled from a field as well (we probably will use input[type=hidden] for this.)
-trgtId (target ID) is set to be the ID of the element that wbDirections is called on. If the element doesn't have an ID, one will be given to it. If you pass a separate ID to the element, it will target that ID. If that ID doesn't exist, it will append a div with that ID to the body.
-mapId is the ID of the actual map. If it doesn't exist, it will be appended to the target ID element.
-directionsListId is the ID of the directions list containing element. If it doesn't exist, it will also be appended to the target element after the map.
-cb is a callback function that fires after the map and directions have been appended to the target element.

## A Note about the loaded.wbDirections and loading.wbDirections events

The target element ($(target).wbDirections()) will have two events triggered on it when using wbDirections. The first is triggered when the call is initiated to Google (loading.wbDirections) and the second when the call is completed successfully (loaded.wbDirections). These allow you to use a subscription model rather than nested callbacks, but essentially provide the same functionality as a callback.

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Jonathan Cutrell  
Licensed under the MIT, GPL licenses.
=======
jquery.wbDirections.js
======================

Whiteboard's solution for dropping in jQuery-based Google Maps with directions