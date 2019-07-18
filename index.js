function onClick() {
	document.getElementById("text").innerHTML = "yaaay";
	const coords = {"name": document.getElementById("name").innerHTML,
                    "age": document.getElementById("age").innerHTML};
/**
	$.ajax({
      type:'post',
      url:'http://localhost:8001/server.py',//'http://127.0.0.1:5000/get_req?name=nir&age=15',
      cache:false,
      async:'asynchronous',
      data:coords,
      success: function(data) {
        document.getElementById("text").innerHTML = "Mission passed: " + data;
      },
      error: function(request, status, error) {
        document.getElementById("text").innerHTML = "Mission failed: " + error;
      }
    });*/
    console.log('running?');
  $.ajax({
      type:'get',
      url:'http://127.0.0.1:5000/get_req?name=nir&age=15',
      cache:false,
      async:'asynchronous',
      success: function(data) {
        //places = JSON.parse(data)
        //latest_data = data
        console.log('it worked?');
        console.log(data);
      },
      error: function(request, status, error) {
        console.log("Error: " + error)
      }
   });
}

module.exports = onClick;