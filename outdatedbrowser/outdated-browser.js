//browser detect
        if(navigator.appVersion.indexOf("MSIE 6.")!=-1||navigator.appVersion.indexOf("MSIE 7.")!=-1||navigator.appVersion.indexOf("MSIE 8.")!=-1){
          var outdated = document.getElementById("outdated");
          outdated.style.display = "block";
          var btnClose = document.getElementById("btnCloseUpdateBrowser");
         //close button
                 btnClose.onmousedown = function() {
                        outdated.style.display = 'none';
                         return false;
                  };
            };
//browser detect end
