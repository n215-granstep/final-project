export function alterPath(){
    let hashtag = window.location.hash;
    let pageName = hashtag.replace("#", "");

    if (pageName != ""){
        $.get(`pages/${pageName}.html`, function(data){
            $("#app").html(data);
            $("html,body").scrollTop(0);
        });
    } else{
        $.get(`pages/home.html`, function(data){
            $("#app").html(data) 
        });
    }
}