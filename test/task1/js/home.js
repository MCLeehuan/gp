/**
 * Created by MCLee on 15/11/29.
 */

$(function() {
    $('.flexslider').flexslider({
                directionNav: true,
                pauseOnAction: false
            });


    // 显示未读消息数目
    // var newsUnread = parseInt($.cookie("newsUnread"));
    // if(newsUnread > 0) {
    //     $(".msgNum").text(newsUnread)
    //         .css("display", "block");
    // }
    // 学生用户隐藏部分导航信息  我的课程、我的素材、通知、个人中心
    // if($.cookie("roleId") === "102") {
    //     var $myList = $(".lh-navbar-pages").children();
    //     $myList.eq(3).css("visibility", "hidden");
    //     $myList.eq(4).css("visibility", "hidden");
    //     $(".msg").css("visibility", "hidden");
    //     $(".userList-select").children().eq(0).css("display", "none");
    // }
    //资源搜索按钮点击事件
    // $(".searchBtn").click(function(){
    //     var sourceKey = $(".searchInput").val();
    //     location.href = "courseCenter.html?sourceKey="+sourceKey;
    // });
    // 回车搜索
    // $(".searchInput").keyup(function(e){
    //     if(e.keyCode == 13){
    //         var sourceKey = $(".searchInput").val();
    //         location.href = "courseCenter.html?sourceKey="+sourceKey;
    //     }
    // });

    // 获取轮播图片
    // $.ajaxConnSend("/rmp/systemmanagement/getCarouselPicture.infc", {
    //     tokenId: tokenId
    // }, function (data) {//请求成功后的回调函数啊
    //     var status = data.status;
    //     if(status == "1"){
    //         console.log(data.describe);
    //         var slides_html = "",
    //             slidesImg = data.object,
    //             len = slidesImg.length;

    //         for(var i = 0; i < len; i++) {
    //             slides_html += '<li style="background:url(' + (host + slidesImg[i].picUrl) + ') 50% 0 no-repeat;"><a href="courseCenter.html" style="display: block;height: 400px;"></a></li>';
    //         }
    //         $(".slides").append(slides_html);

    //         // 轮播滚动控制
    //         $('.flexslider').flexslider({
    //             directionNav: true,
    //             pauseOnAction: false
    //         });
    //     }
    //     else if(status == "0"){
    //         console.log(data.describe);
    //     }
    // }, function (XMLHttpRequest) {//请求前执行的函数
    // });

    ///* 图片滚动效果 */
    //$(".mr_frbox").slide({
    //    titCell: "",
    //    mainCell: ".mr_frUl ul",
    //    autoPage: true,
    //    effect: "leftLoop",
    //    autoPlay: true,
    //    vis: 3
    //});

    /* 鼠标悬停图片效果 */
    // $(".mr_zhe_hover").css("top", $('.mr_zhe').eq(0).height());
    // $("li").mouseout(function (e) {
    //     if ((e.pageX < $(this).offset().left || e.pageX > ($(this).offset().left + $(this).width())) || (e.pageY < $(this).offset().top || e.pageY > ($(this).offset().top + $(this).height()))) {
    //         $(this).find('.mr_zhe_i').show();
    //         $(this).find('.mr_zhe_hover').hide().stop().animate({ top: '190px' }, { queue: false, duration: 190 });
    //         return false;
    //     }

    // });
    // $('.mr_zhe').mouseover(function (event) {
    //     $(this).find('.mr_zhe_i').hide();
    //     $(this).find('.mr_zhe_hover').show().stop().animate({ top: '190px' }, { queue: false, duration: 190 });
    //     return false;
    // });

    /*加载精品课程*/
    // (function (){
    //     $.ajaxConnSend("/rmp/commonController/getCoursewareByResHotNumForPageData.infc", {
    //         tokenId: tokenId ,
    //         curPage: 1,
    //         recordsPerpage: 3
    //         //type: "",
    //         //keyWord: "",
    //         //resCat: "",
    //         //sortCol: "UpdateTime"
    //     }, function (response) {
    //         var status = response.status;
    //         if(status == "1"){
    //             console.log(response.describe);
    //             //拼接素材
    //             var object = response.object,
    //                 teacher = "",
    //                 sourceHtml = "",
    //                 sourceId = "",
    //                 sourceName = "",
    //                 sourceUpdate = "",
    //                 sourcePreviewUrl = "";
    //             for (var i=0,len=response.object.data.length; i<len; i++)
    //             {

    //                 teacher = ((object.data[i].couSpeakerlist) ? object.data[i].couSpeakerlist[0].speakerName : "");
    //                 sourceId = object.data[i].id;
    //                 sourceName = object.data[i].name;
    //                 sourceUpdate = getLocalTimeParse(object.data[i].createtime);

    //                 sourcePreviewUrl = host + response.object.data[i].coverUrl;

    //                 sourceHtml += '<li class="fl ml60"><a href="courseIntro.html?courseId=' + sourceId + '" target="_blank"><img width="314" height="193" src="' + sourcePreviewUrl + '"></a><dl><dt><a>' + sourceName + '</a></dt><dd>主讲老师: ' + teacher + '<span>&nbsp;&nbsp;&nbsp;&nbsp;更新时间: ' + sourceUpdate + '</span></dd></dl></li>';
    //             }
    //             $("#recommandCourse").html(sourceHtml);
    //         }
    //         else if(status == "0"){
    //             console.log(response.describe);
    //         }}, function (XMLHttpRequest) {
    //     });
    // }());

    /*加载精品素材*/
    // (function (){
    //     $.ajaxConnSend("/rmp/resourcemanager/getResourceByResourceHotNumForPageData.infc", {
    //         tokenId: tokenId ,
    //         curPage: 1,
    //         recordsPerpage: 3
    //     }, function (response) {
    //         var status = response.status;
    //         if(status == "1"){
    //             console.log(response.describe);
    //             //拼接素材
    //             var object = response.object,
    //                 sourceHtml = "",
    //                 sourceId = "",
    //                 sourceName = "",
    //                 sourceUpdate = "",
    //                 sourceType = "",
    //                 //sourceSize = "",
    //                 sourcePreviewUrl = "";
    //                 //sourceDlUrl = "",
    //                 //commentsStars = "";
    //             for (var i=0,len=response.object.data.length; i<len; i++)
    //             {
    //                 sourceId = object.data[i].id;
    //                 sourceName = object.data[i].resName;
    //                 sourceUpdate = object.data[i].updatetime;
    //                 sourceType = object.data[i].resType;
    //                 //sourceSize = object.data[i].fileSize;
    //                 sourcePreviewUrl = host + response.object.data[i].previewUrl;
    //                 //sourceDlUrl = "http://120.24.81.195" + response.object.data[i].resFileUrl;
    //                 //commentsStars = object.data[i].commentsStars;

    //                 sourceUpdate = getLocalTimeParse(sourceUpdate);
    //                 //sourceSize = convertFileSize(sourceSize);
    //                 //commentsStars = (parseInt(commentsStars) / 5) * 100;

    //                 sourceHtml += '<li class="fl ml60"><a href="sourceView.html?sourceId=' + sourceId + '&sourceType=' + sourceType + '" target="_blank"><img width="314" height="193" src="' + sourcePreviewUrl + '"></a><dl><dt><a>' + sourceName + '</a></dt><dd>更新时间: ' + sourceUpdate + '<span>&nbsp;&nbsp;&nbsp;&nbsp;格式: ' + sourceType + '</span></dd></dl></li>';
    //             }
    //             $("#recommandSource").html(sourceHtml);
    //         }
    //         else if(status == "0"){
    //             console.log(response.describe);
    //         }}, function (XMLHttpRequest) {
    //     });
    // }());
});