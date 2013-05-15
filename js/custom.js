/*global $*/
/*jshint unused:false*/

// dev only test string
// button, .button {  border-style: solid;  border-width: 1px;  cursor: pointer;  font-family: inherit;  font-weight: bold;  line-height: 1;  margin: 0 0 1.25em;  position: relative;  text-decoration: none;  text-align: center;  display: inline-block;  padding-top: 0.75em;  padding-right: 1.5em;  padding-bottom: 0.8125em;  padding-left: 1.5em;  font-size: 1em;  background-color: #2ba6cb;  border-color: #2284a1;  color: white; }  button:hover, button:focus, .button:hover, .button:focus {    background-color: #2284a1; }  button:hover, button:focus, .button:hover, .button:focus {    color: white; }  button.secondary, .button.secondary {    background-color: #e9e9e9;    border-color: #d0d0d0;    color: #333333; }    button.secondary:hover, button.secondary:focus, .button.secondary:hover, .button.secondary:focus {      background-color: #d0d0d0; }    button.secondary:hover, button.secondary:focus, .button.secondary:hover, .button.secondary:focus {      color: #333333; }  button.success, .button.success {    background-color: #5da423;    border-color: #457a1a;    color: white; }    button.success:hover, button.success:focus, .button.success:hover, .button.success:focus {      background-color: #457a1a; }    button.success:hover, button.success:focus, .button.success:hover, .button.success:focus {      color: white; }  button.alert, .button.alert {    background-color: #c60f13;    border-color: #970b0e;    color: white; }    button.alert:hover, button.alert:focus, .button.alert:hover, .button.alert:focus {      background-color: #970b0e; }    button.alert:hover, button.alert:focus, .button.alert:hover, .button.alert:focus {      color: white; }  button.large, .button.large {    padding-top: 1em;    padding-right: 2em;    padding-bottom: 1.0625em;    padding-left: 2em;    font-size: 1.25em; }  button.small, .button.small {    padding-top: 0.5625em;    padding-right: 1.125em;    padding-bottom: 0.625em;    padding-left: 1.125em;    font-size: 0.8125em; }  button.tiny, .button.tiny {    padding-top: 0.4375em;    padding-right: 0.875em;    padding-bottom: 0.5em;    padding-left: 0.875em;    font-size: 0.6875em; }  button.expand, .button.expand {    padding-top: false;    padding-right: 0px;    padding-bottom: false0.0625em;    padding-left: 0px;    width: 100%; }  button.left-align, .button.left-align {    text-align: left;    text-indent: 0.75em; }  button.right-align, .button.right-align {    text-align: right;    padding-right: 0.75em; }  button.disabled, button[disabled], .button.disabled, .button[disabled] {    background-color: #2ba6cb;    border-color: #2284a1;    color: white;    cursor: default;    opacity: 0.6;    -webkit-box-shadow: none;    box-shadow: none; }    button.disabled:hover, button.disabled:focus, button[disabled]:hover, button[disabled]:focus, .button.disabled:hover, .button.disabled:focus, .button[disabled]:hover, .button[disabled]:focus {      background-color: #2284a1; }    button.disabled:hover, button.disabled:focus, button[disabled]:hover, button[disabled]:focus, .button.disabled:hover, .button.disabled:focus, .button[disabled]:hover, .button[disabled]:focus {      color: white; }    button.disabled:hover, button.disabled:focus, button[disabled]:hover, button[disabled]:focus, .button.disabled:hover, .button.disabled:focus, .button[disabled]:hover, .button[disabled]:focus {      background-color: #2ba6cb; }    button.disabled.secondary, button[disabled].secondary, .button.disabled.secondary, .button[disabled].secondary {      background-color: #e9e9e9;      border-color: #d0d0d0;      color: #333333;      cursor: default;      opacity: 0.6;      -webkit-box-shadow: none;      box-shadow: none; }      button.disabled.secondary:hover, button.disabled.secondary:focus, button[disabled].secondary:hover, button[disabled].secondary:focus, .button.disabled.secondary:hover, .button.disabled.secondary:focus, .button[disabled].secondary:hover, .button[disabled].secondary:focus {        background-color: #d0d0d0; }      button.disabled.secondary:hover, button.disabled.secondary:focus, button[disabled].secondary:hover, button[disabled].secondary:focus, .button.disabled.secondary:hover, .button.disabled.secondary:focus, .button[disabled].secondary:hover, .button[disabled].secondary:focus {        color: #333333; }      button.disabled.secondary:hover, button.disabled.secondary:focus, button[disabled].secondary:hover, button[disabled].secondary:focus, .button.disabled.secondary:hover, .button.disabled.secondary:focus, .button[disabled].secondary:hover, .button[disabled].secondary:focus {        background-color: #e9e9e9; }    button.disabled.success, button[disabled].success, .button.disabled.success, .button[disabled].success {      background-color: #5da423;      border-color: #457a1a;      color: white;      cursor: default;      opacity: 0.6;      -webkit-box-shadow: none;      box-shadow: none; }      button.disabled.success:hover, button.disabled.success:focus, button[disabled].success:hover, button[disabled].success:focus, .button.disabled.success:hover, .button.disabled.success:focus, .button[disabled].success:hover, .button[disabled].success:focus {        background-color: #457a1a; }      button.disabled.success:hover, button.disabled.success:focus, button[disabled].success:hover, button[disabled].success:focus, .button.disabled.success:hover, .button.disabled.success:focus, .button[disabled].success:hover, .button[disabled].success:focus {        color: white; }      button.disabled.success:hover, button.disabled.success:focus, button[disabled].success:hover, button[disabled].success:focus, .button.disabled.success:hover, .button.disabled.success:focus, .button[disabled].success:hover, .button[disabled].success:focus {        background-color: #5da423; }    button.disabled.alert, button[disabled].alert, .button.disabled.alert, .button[disabled].alert {      background-color: #c60f13;      border-color: #970b0e;      color: white;      cursor: default;      opacity: 0.6;      -webkit-box-shadow: none;      box-shadow: none; }      button.disabled.alert:hover, button.disabled.alert:focus, button[disabled].alert:hover, button[disabled].alert:focus, .button.disabled.alert:hover, .button.disabled.alert:focus, .button[disabled].alert:hover, .button[disabled].alert:focus {        background-color: #970b0e; }      button.disabled.alert:hover, button.disabled.alert:focus, button[disabled].alert:hover, button[disabled].alert:focus, .button.disabled.alert:hover, .button.disabled.alert:focus, .button[disabled].alert:hover, .button[disabled].alert:focus {        color: white; }      button.disabled.alert:hover, button.disabled.alert:focus, button[disabled].alert:hover, button[disabled].alert:focus, .button.disabled.alert:hover, .button.disabled.alert:focus, .button[disabled].alert:hover, .button[disabled].alert:focus {        background-color: #c60f13; }input.button,button.button {  padding-top: 0.8125em;  padding-bottom: 0.75em; }  input.button.tiny,  button.button.tiny {    padding-top: 0.5em;    padding-bottom: 0.4375em; }  input.button.small,  button.button.small {    padding-top: 0.625em;    padding-bottom: 0.5625em; }  input.button.large,  button.button.large {    padding-top: 1.03125em;    padding-bottom: 1.03125em; }@media only screen {  .button {    -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5) inset;    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5) inset;    -webkit-transition: background-color 300ms ease-out;    -moz-transition: background-color 300ms ease-out;    transition: background-color 300ms ease-out; }    .button:active {      -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2) inset;      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2) inset; }    .button.radius {      -webkit-border-radius: 3px;      border-radius: 3px; }    .button.round {      -webkit-border-radius: 1000px;      border-radius: 1000px; } }

var colorScript = (function() {

    "use strict";

    // color identifying regexp
    // http://stackoverflow.com/questions/9682709/regexp-matching-hex-color-syntax-and-shorten-form
    var colorRegExp = new RegExp(/#[0-9a-f]{3,6}/g);
    var colorModel = [];
    var originalInput = "";
    var variablePrefix;

    // bind events
    $(document).on("click", "#do", function() {
        var txt = $("#text-input").val();
        if (txt.length) {
            processInput(txt);
            $("#output").fadeIn();
            $("#text-input").animate({
                height: "125px"
            }, {
                duration: 200
            })
        }
    });
    $(document).on("change", "#variables input[type=text]", function() {
        if ($(this).val().length === 0) {
            return;
        }
        var obj = $(this).parent().parent().data("color");
        obj.replaceWith = $(this).val();
        renderText();
    });
    $(document).on("change", "[name=variable-type]", function() {
        variablePrefix = $("[name=variable-type]:checked").val();
        renderText();
    });

    var processInput = function(str) {

        variablePrefix = $("[name=variable-type]:checked").val();
        originalInput = str;
        colorModel = arrayWizardry(str.match(colorRegExp));

        hydrateVariableRows();

        renderText();

    };

    var tmpl = function(obj,selector,value) {
        obj.html(obj.html().replace(selector,value));
    };

    var hydrateVariableRows = function() {
        $("#variables").empty();
        var tmplStr = $("#color-repeater").html();
        $.each(colorModel, function(i,item) {
            var $newRow = $(tmplStr);
            tmpl($newRow,"{lightOrDark}",determineTextColor(item.color));
            tmpl($newRow,"{color}",item.color);
            tmpl($newRow,"{colorValue}",item.color);
            tmpl($newRow,"{count}",item.count);
            tmpl($newRow,"{plural?}",(item.count > 1) ? "uses" : "use");
            $newRow.data("color",item);
            $newRow.appendTo("#variables");
        });
    };

    var renderText = function() {
        var str = originalInput;
        $.each(colorModel, function(i,item) {
            if (item.replaceWith.length) {
                var singleColorRegExp = new RegExp(item.color,"g");
                str = str.replace(singleColorRegExp,variablePrefix + item.replaceWith);
                str = variablePrefix + item.replaceWith + ": " + item.color + ";\n" + str;
            }
        });
        $("#text-output").text(str);
    };

    var determineTextColor = function(str) {
        var c = str.substring(1);    // strip #
        var rgb = parseInt(c, 16);   // convert rrggbb to decimal
        var r = (rgb >> 16) & 0xff;  // extract red
        var g = (rgb >>  8) & 0xff;  // extract green
        var b = (rgb >>  0) & 0xff;  // extract blue
        var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
        if (luma > 186) {
            return "light-background";
            //return "#000";
        } else {
            return "dark-background";
            //return "#FFF";
        }
    };

    // this function takes the array of results returned from the regexp
    // reduces it to a key:count pair and sorts by occurance
    var arrayWizardry = function(arr) {

        var a = [], b = [], prev;
        
        arr.sort();
        for ( var i = 0; i < arr.length; i++ ) {
            if ( arr[i] !== prev ) {
                a.push(arr[i]);
                b.push(1);
            } else {
                b[b.length-1]++;
            }
            prev = arr[i];
        }
        
        // build sub array
        var c = [];
        for (var j = 0; j < a.length; j++) {
          var obj = {
            color: a[j],
            count: b[j],
            include: true,
            replaceWith: ""
          };
          c.push(obj);
        }

        // sort highest occurance to lowest
        c = c.sort(function (a, b) {
            return b.count - a.count;
        });

        return c;

    };

}());