// js异步的几种形式

$(document).ready(function(){
  // 1. XMLHttpRequest
  // readyState
  // 0 - request not initialized
  // 1 - request has been set up
  // 2 - request has been sent
  // 3 - request is in process
  // 4 - request is complete

  // var xhr = new XMLHttpRequest();

  // 通过监测 readyState 来判断是否完成
  // xhr.onreadystatechange = function() {
  //   if (xhr.readyState === 4 && xhr.status === 200) {
  //     console.log(JSON.parse(xhr.response));
  //   }
  // };

  // 当 readyState===4 时会触发 onload 事件
  // xhr.onload = function() {
  //   console.log(JSON.parse(xhr.response));
  // };

  // xhr.open("GET", "data/tweets.json", true);
  // xhr.send();
  //
  // console.log('因为是异步，所以我会比结果先出现！');


  // 2. ajax callback nightmare
  // $.ajax({
  //   type: "GET",
  //   url:  "data/tweets.json",
  //   success: function(data) {
  //     console.log(data);
  //
  //     $.ajax({
  //       type: "GET",
  //       url:  "data/friends.json",
  //       success: function(data) {
  //         console.log(data);
  //
  //         $.ajax({
  //           type: "GET",
  //           url:  "data/videos.json",
  //           success: function(data) {
  //             console.log(data);
  //
  //           },
  //           error: function(jqXHR, textStatus, error) {
  //             console.log(jqXHR);
  //             console.log(textStatus);
  //             console.log(error);
  //           }
  //         })
  //       },
  //       error: function(jqXHR, textStatus, error) {
  //         console.log(jqXHR);
  //         console.log(textStatus);
  //         console.log(error);
  //       }
  //     })
  //   },
  //   error: function(jqXHR, textStatus, error) {
  //     console.log(jqXHR);
  //     console.log(textStatus);
  //     console.log(error);
  //   }
  // });

  // 一些改变
  // $.ajax({
  //   type: "GET",
  //   url:  "data/tweets.json",
  //   success: cbFriends,
  //   error: handleError
  // });
  //
  // function handleError(jqXHR, textStatus, error) {
  //   console.log(error);
  // }
  //
  // function cbFriends(data) {
  //   console.log(data);
  //
  //   $.ajax({
  //     type: "GET",
  //     url:  "data/friends.json",
  //     success: cbVideos,
  //     error: handleError
  //   })
  // }
  //
  // function cbVideos(data) {
  //   console.log(data);
  //
  //   $.ajax({
  //     type: "GET",
  //     url:  "data/videos.json",
  //     success: function(data) {
  //       console.log(data);
  //
  //     },
  //     error: handleError
  //   })
  // }

  // 3. promise
  function get(url) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();

      xhr.open("GET", url, true);    // true 为异步， false 为同步

      xhr.onload = function() {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(xhr.statusText);
        }
      };

      xhr.onerror = function() {
        reject(xhr.statusText);
      }

      xhr.send();
    });
  }

  var promise = get("data/tweets.json");

  promise.then(function(tweets) {
    console.log(tweets);
    return get("data/friends.json");
  }).then(function(friends) {
    console.log(friends);
    return get("data/videos.json");
  }).then(function(videos) {
    console.log(videos);
  }).catch(function(error) {
    console.log(error);
  })
});
