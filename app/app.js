import * as Model from "../model/model.js";

function urlListener(){
    $(window).on("hashchange", Model.alterPath);
    Model.alterPath();
}

$(document).ready(function(){
    urlListener();
});