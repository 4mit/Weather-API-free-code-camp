$(document).ready(function(){                var result = $('#resultDiv');
                var la,lo;
                if (navigator.geolocation) {          navigator.geolocation.getCurrentPosition(function(position) {
                      lo = position.coords.longitude; 
                      la = position.coords.latitude;
                      $('#lat').html('lattitude :'+la);
                      $('#lon').html('Longitude:'+lo);
                      $.ajax({
                        url: 'http://api.openweathermap.org/data/2.5/weather',
                        dataType:'json',
                        method:'get',
                        data:{lat :la,
                              lon :lo,
                              APPID:"7ebdd4eece4f5a1e7e2fca083fefe14d",
                              units:"metric"
                             },
                        success:function(data){
                                $('body').css('font-size','19px');
                                
                                 result.html(
                                     '<b>City Name :</b> ' + data.name + '<br/><hr/>' +
                                     '<b>Weather Description :</b>'  + '<br/>' +
                                     '<b>weather :</b>' + data.weather[0].main + '<br/>' +
                                     '<b>description :</b> ' + data.weather[0].description +  '<br/><hr/>' +
                                     '<b>Other Info:</b> ' + '<br/>' +
                                     '<b>Pressure :</b>' + data.main.pressure + '<br/>' +
                                     '<b>Humidity:</b>' +data.main.humidity +  '<br/>' +  '<hr size=4/>' + 
                                     '<b>Temprature</b>'  +
                                     '<b>Min . Temprature : </b>' + '<div class="btn btn-info">' +data.main.temp_min + '&deg;C' + '</div>' +  '<br/>' +
                                     '<b>Max. Temprature :</b>'  + '<div class="btn btn-info">' +data.main.temp_max + '&deg;C'+ '</div>' +  '<br/>' +
                                     '<b>Visibility :</b>' + data.visibility + '<hr/>'
                              );
                            if(data.weather[0].main == 'Clouds'){
                                document.body.style.backgroundImage = 'url("https://www.google.co.in/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwimwdys2aTOAhXMuo8KHX7ECRIQjRwIBw&url=http%3A%2F%2Fwallpaperfolder.com%2Fwallpapers%2Fcloudy%2Bweather&bvm=bv.128987424,d.c2I&psig=AFQjCNGw8NbKFala_8f7D7b3T3Mg16FJDg&ust=1470294848798044")';
                            }else if(data.weather[0].main == 'Rain'){
                              document.body.style.backgroundImage ='url("https://www.google.co.in/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj5itKP2qTOAhUMuY8KHfYUC3YQjRwIBw&url=http%3A%2F%2Fwww.wallpaperawesome.com%2Fwallpaper-raining-woman-weather.php&bvm=bv.128987424,d.c2I&psig=AFQjCNFraEnQYvYPCrnoLRww8GsSG5mfhQ&ust=1470295065625987")';
                            }else if(data.weather[0].main == 'Windy'){
                              document.body.style.backgroundImage ='url("https://www.google.co.in/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjNiove2qTOAhVKLo8KHR37DOwQjRwIBw&url=http%3A%2F%2Fpaintingcontractorusa.com%2Fblog%2Fa-brief-guide-for-painting-in-windy-weather%2F&bvm=bv.128987424,d.c2I&psig=AFQjCNG9d-skN18yJHaeubhi2HcNS0pjLA&ust=1470295172205187")';
                            }else if(data.weather[0].main == 'Snowy'){
                             document.body.style.backgroundImage ='url("https://www.google.co.in/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjIvP3I26TOAhVFOI8KHXa_Dj0QjRwIBw&url=http%3A%2F%2Fwww.wtip.org%2Fsnow-not-too-much-throughout-week&bvm=bv.128987424,d.c2I&psig=AFQjCNHVhz08Ye9_NUwdLGqxV7j5M0cSbg&ust=1470295439245299")';
                            }else if(data.weather[0].main == 'foggy'){
                              document.body.style.backgroundImage ='url("https://www.google.co.in/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiXhfLB3KTOAhXDqo8KHYIDBPoQjRwIBw&url=http%3A%2F%2Fwww.telegraph.co.uk%2Fgardening%2Fgardeningpicturegalleries%2F8904231%2FDense-fog-hits-flights-photographs-of-misty-weather-over-parts-of-Britain-and-Europe.html%3Fimage%3D35&psig=AFQjCNHCZkXBT7KWe4lJuZI0Sq-CGZRt4A&ust=1470295448101396")';
                            }else if(data.weather[0].main == 'Sunny'){
                              document.body.style.backgroundImage ='url("https://www.google.co.in/imgres?imgurl=http%3A%2F%2Fd2jos65913uaef.cloudfront.net%2Fwp-content%2Fuploads%2F2013%2F06%2Fsunny-weather.jpg&imgrefurl=http%3A%2F%2Fww.itimes.com%2Fpoll%2Fwhich-weather-suits-you-best&docid=yrycIWVsm4ipeM&tbnid=3F8iLlIYdXLYGM%3A&w=960&h=400&bih=900&biw=1821&ved=0ahUKEwj97vve3KTOAhUKp48KHZKNBtYQMwg4KAYwBg&iact=mrc&uact=8")';
                            }else{
                              alert("No images");
                            }
                            $('.btn-info').hover(function(){
                                var mn = data.main.temp_min;
                                var mx = data.main.temp_max;                        
                                $('.btn-info').after('<div class="faren"></div>');
                                var mn_f = mn * 1.8 + 32;
                                $('.faren').html(mn_f + '&deg;' +'F');
                                //alert(mn_f );
                            } ,function(){
                                $('.faren').remove();                         
                            });
                            },
                        error: function(){
                            alert("Problem With Location Service Enable Location in Browser" ); 
                        } 
                     });
                });
              }                                 
        });