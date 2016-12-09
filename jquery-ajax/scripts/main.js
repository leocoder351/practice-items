"use strict";

$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "https://cnodejs.org/api/v1/topics?page=1&limit=5&tab=job",
    returnDataType: "json",
    success: function(returnData) {
      var i = 0,
          getSection = $('#getData'),
          userName = '',
          userAvatar = '',
          topic = '';

      for (i = 0; i < returnData.data.length; ++i) {
        userName = returnData.data[i].author.loginname;
        userAvatar = returnData.data[i].author.avatar_url;
        topic = returnData.data[i].title;

        $('#getData section:eq('+ i +') span:eq(0)').text(userName);
        $('#getData section:eq('+ i +') img').attr('src', userAvatar);
        $('#getData section:eq('+ i +') span:eq(1)').text(topic);
      }
    },
    error: function(error) {
      console.log(error);
    }
  });

  $('#postData .post_submit').click(function(event) {
    var data = {},
        postTitle = '',
        postTab = '',
        postContent = '';

    postTitle = $('#postData .post_title').val();
    postTab = $('#postData .post_tab').val();
    postContent = $('#postData .post_content').val();

    data = {
      "accesstoken":  '3657217c-712d-476f-85dc-cb02bdd94430',
      "title":        postTitle,
      "tab":          postTab,
      "content":      postContent
    };

    console.log(111);
    $.ajax({
      type: "POST",
      url: "https://cnodejs.org/api/v1/topics",
      returnDataType: "json",
      data: data,
      success: function(returnData) {
        console.log(returnData);
      },
      error: function(error) {
        console.log(error);
      }

    })
    event.preventDefault();
  })



})
