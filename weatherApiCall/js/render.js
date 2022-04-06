$(function () {

    $("[jsname=weather-form]").on('submit', function (e) {

        e.preventDefault();

        var $inputVal = $("[jsname=inputVal]").val();

        if($inputVal == ""){

            $(".err-txt").html("Please enter city name");

        }else{  

            getApiCall({

                apiUrl: `https://api.openweathermap.org/data/2.5/weather?q=${$inputVal}&appid=ab13e4305b0a82f77e30e549963f0137`,

                method: "POST",

                callback: function (ele) {

                    var res = JSON.parse(ele);

                    if(res.cod == "404"){

                        $(".err-txt").html("Invalid city name");

                    }else{

                        $(".err-txt").empty();

                    }

                    $(".custom-center").empty().append(API_TEMPLATE.getHTML(res));

                }
            })
        }

    })
});