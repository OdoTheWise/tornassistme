// ==UserScript==
// @name         Torn Assist Me
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Super Secret Alpha Version of Assist Me
// @author       Odo [2180136]
// @match        https://www.torn.com/loader*
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @grant    GM.getValue
// @grant    GM.setValue
// @grant    GM.xmlHttpRequest
// @grant        unsafeWindow
// @grant    GM_addStyle
// ==/UserScript==

(function() {
    'use strict';



    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null){
            return null;
        }
        else{
            return results[1] || 0;
        }
    }

    $(".bottomSection___huwx8" ).append( "<br><div id='assistDiv'><button id='assistMeButton' class='btn___1sDeX btn___3Upzo silver___1qHEY'>Assist Me</input></div>" );

    $("#assistMeButton").click(function(){

        let attackerName = $('.userName___1QoSz:nth-child(1)').eq(0).text();
        let defenderName = $('.userName___1QoSz:nth-child(1)').eq(1).text();
        let defenderID = $.urlParam('user2ID');


        GM.xmlHttpRequest({
            method: "GET",
            url: "https://www.tornapps.com/scripts/assistme.php?attacker="+attackerName+"&defender="+defenderName+"&defenderid="+defenderID,
            onload: function(response) {
                $('#assistDiv').text(response.responseText);

//      alert(response.responseText);
            }
        });

        //alert(attackerName + " Defend: " + defenderName + " ID: " + defenderID);

        //alert("name "+attackerName);

    });



})();