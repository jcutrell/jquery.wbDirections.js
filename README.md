# wbDirections

Whiteboard's solution for dropping in jQuery-based Google Maps with directions

## Getting Started
Download the [production version][min] or the [development version][max].

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
_(Coming soon)_

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