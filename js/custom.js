/*global $,FileReader*/
/*jshint unused:false*/

// dev only test string
// button, .button {  border-style: solid;  border-width: 1px;  cursor: pointer;  font-family: inherit;  font-weight: bold;  line-height: 1;  margin: 0 0 1.25em;  position: relative;  text-decoration: none;  text-align: center;  display: inline-block;  padding-top: 0.75em;  padding-right: 1.5em;  padding-bottom: 0.8125em;  padding-left: 1.5em;  font-size: 1em;  background-color: #2ba6cb;  border-color: #2284a1;  color: white; }  button:hover, button:focus, .button:hover, .button:focus {    background-color: #2284a1; }  button:hover, button:focus, .button:hover, .button:focus {    color: white; }  button.secondary, .button.secondary {    background-color: #e9e9e9;    border-color: #d0d0d0;    color: #333333; }    button.secondary:hover, button.secondary:focus, .button.secondary:hover, .button.secondary:focus {      background-color: #d0d0d0; }    button.secondary:hover, button.secondary:focus, .button.secondary:hover, .button.secondary:focus {      color: #333333; }  button.success, .button.success {    background-color: #5da423;    border-color: #457a1a;    color: white; }    button.success:hover, button.success:focus, .button.success:hover, .button.success:focus {      background-color: #457a1a; }    button.success:hover, button.success:focus, .button.success:hover, .button.success:focus {      color: white; }  button.alert, .button.alert {    background-color: #c60f13;    border-color: #970b0e;    color: white; }    button.alert:hover, button.alert:focus, .button.alert:hover, .button.alert:focus {      background-color: #970b0e; }    button.alert:hover, button.alert:focus, .button.alert:hover, .button.alert:focus {      color: white; }  button.large, .button.large {    padding-top: 1em;    padding-right: 2em;    padding-bottom: 1.0625em;    padding-left: 2em;    font-size: 1.25em; }  button.small, .button.small {    padding-top: 0.5625em;    padding-right: 1.125em;    padding-bottom: 0.625em;    padding-left: 1.125em;    font-size: 0.8125em; }  button.tiny, .button.tiny {    padding-top: 0.4375em;    padding-right: 0.875em;    padding-bottom: 0.5em;    padding-left: 0.875em;    font-size: 0.6875em; }  button.expand, .button.expand {    padding-top: false;    padding-right: 0px;    padding-bottom: false0.0625em;    padding-left: 0px;    width: 100%; }  button.left-align, .button.left-align {    text-align: left;    text-indent: 0.75em; }  button.right-align, .button.right-align {    text-align: right;    padding-right: 0.75em; }  button.disabled, button[disabled], .button.disabled, .button[disabled] {    background-color: #2ba6cb;    border-color: #2284a1;    color: white;    cursor: default;    opacity: 0.6;    -webkit-box-shadow: none;    box-shadow: none; }    button.disabled:hover, button.disabled:focus, button[disabled]:hover, button[disabled]:focus, .button.disabled:hover, .button.disabled:focus, .button[disabled]:hover, .button[disabled]:focus {      background-color: #2284a1; }    button.disabled:hover, button.disabled:focus, button[disabled]:hover, button[disabled]:focus, .button.disabled:hover, .button.disabled:focus, .button[disabled]:hover, .button[disabled]:focus {      color: white; }    button.disabled:hover, button.disabled:focus, button[disabled]:hover, button[disabled]:focus, .button.disabled:hover, .button.disabled:focus, .button[disabled]:hover, .button[disabled]:focus {      background-color: #2ba6cb; }    button.disabled.secondary, button[disabled].secondary, .button.disabled.secondary, .button[disabled].secondary {      background-color: #e9e9e9;      border-color: #d0d0d0;      color: #333333;      cursor: default;      opacity: 0.6;      -webkit-box-shadow: none;      box-shadow: none; }      button.disabled.secondary:hover, button.disabled.secondary:focus, button[disabled].secondary:hover, button[disabled].secondary:focus, .button.disabled.secondary:hover, .button.disabled.secondary:focus, .button[disabled].secondary:hover, .button[disabled].secondary:focus {        background-color: #d0d0d0; }      button.disabled.secondary:hover, button.disabled.secondary:focus, button[disabled].secondary:hover, button[disabled].secondary:focus, .button.disabled.secondary:hover, .button.disabled.secondary:focus, .button[disabled].secondary:hover, .button[disabled].secondary:focus {        color: #333333; }      button.disabled.secondary:hover, button.disabled.secondary:focus, button[disabled].secondary:hover, button[disabled].secondary:focus, .button.disabled.secondary:hover, .button.disabled.secondary:focus, .button[disabled].secondary:hover, .button[disabled].secondary:focus {        background-color: #e9e9e9; }    button.disabled.success, button[disabled].success, .button.disabled.success, .button[disabled].success {      background-color: #5da423;      border-color: #457a1a;      color: white;      cursor: default;      opacity: 0.6;      -webkit-box-shadow: none;      box-shadow: none; }      button.disabled.success:hover, button.disabled.success:focus, button[disabled].success:hover, button[disabled].success:focus, .button.disabled.success:hover, .button.disabled.success:focus, .button[disabled].success:hover, .button[disabled].success:focus {        background-color: #457a1a; }      button.disabled.success:hover, button.disabled.success:focus, button[disabled].success:hover, button[disabled].success:focus, .button.disabled.success:hover, .button.disabled.success:focus, .button[disabled].success:hover, .button[disabled].success:focus {        color: white; }      button.disabled.success:hover, button.disabled.success:focus, button[disabled].success:hover, button[disabled].success:focus, .button.disabled.success:hover, .button.disabled.success:focus, .button[disabled].success:hover, .button[disabled].success:focus {        background-color: #5da423; }    button.disabled.alert, button[disabled].alert, .button.disabled.alert, .button[disabled].alert {      background-color: #c60f13;      border-color: #970b0e;      color: white;      cursor: default;      opacity: 0.6;      -webkit-box-shadow: none;      box-shadow: none; }      button.disabled.alert:hover, button.disabled.alert:focus, button[disabled].alert:hover, button[disabled].alert:focus, .button.disabled.alert:hover, .button.disabled.alert:focus, .button[disabled].alert:hover, .button[disabled].alert:focus {        background-color: #970b0e; }      button.disabled.alert:hover, button.disabled.alert:focus, button[disabled].alert:hover, button[disabled].alert:focus, .button.disabled.alert:hover, .button.disabled.alert:focus, .button[disabled].alert:hover, .button[disabled].alert:focus {        color: white; }      button.disabled.alert:hover, button.disabled.alert:focus, button[disabled].alert:hover, button[disabled].alert:focus, .button.disabled.alert:hover, .button.disabled.alert:focus, .button[disabled].alert:hover, .button[disabled].alert:focus {        background-color: #c60f13; }input.button,button.button {  padding-top: 0.8125em;  padding-bottom: 0.75em; }  input.button.tiny,  button.button.tiny {    padding-top: 0.5em;    padding-bottom: 0.4375em; }  input.button.small,  button.button.small {    padding-top: 0.625em;    padding-bottom: 0.5625em; }  input.button.large,  button.button.large {    padding-top: 1.03125em;    padding-bottom: 1.03125em; }@media only screen {  .button {    -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5) inset;    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5) inset;    -webkit-transition: background-color 300ms ease-out;    -moz-transition: background-color 300ms ease-out;    transition: background-color 300ms ease-out; }    .button:active {      -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2) inset;      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2) inset; }    .button.radius {      -webkit-border-radius: 3px;      border-radius: 3px; }    .button.round {      -webkit-border-radius: 1000px;      border-radius: 1000px; } }

var colorScript = (function() {

    "use strict";

    // color identifying regexp
    // http://stackoverflow.com/questions/9682709/regexp-matching-hex-color-syntax-and-shorten-form
    var colorRegExp = new RegExp(/#[0-9a-f]{3,6}/g);
    var colorModel = [];
    var model = {
        inputStr: "",
        outputStr: ""
    };
    var settings = {
        precompiler: "less",
        variablePrefix: "@",
        sortBy: "usage",
        ignoreBlackAndWhite: true
    };

    // bind events
    $(document).on("click", "#do", function() {
        var txt = $("#text-input").val();
        if (txt.length) {
            processInput(txt);
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
        settings.variablePrefix = $("[name=variable-type]:checked").val();
        settings.precompiler = $("[name=variable-type]:checked").attr("id");
        renderText();
    });
    $(document).on("change", "[name=sort-by]", function() {
        settings.sortBy = $("[name=sort-by]:checked").attr("id");
        if (model.inputStr === "") {
            return;
        }
        if (settings.sortBy === "usage") {
            sortByUsage(colorModel);
        } else {
            sortByHue(colorModel);
        }
        hydrateVariableRows();
    });
    $(document).on("change", "[name=toggleBlackWhite]", function() {
        var ignoreOrAllow = $("[name=toggleBlackWhite]:checked").val();
        if (ignoreOrAllow === "allow") {
            settings.ignoreBlackAndWhite = false;
        } else {
            settings.ignoreBlackAndWhite = true;
        }
        hydrateVariableRows();
        renderText();
    });
    $(document).on("click", "#downloadFile", function() {
        var blob = new Blob([model.outputStr], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "output." + settings.precompiler);
    });

    // handle file drops using Dropzone.js
    new Dropzone("#text-input", {
        url: "/",
        clickable: false,
        accept: function(file,done) {
            var fileReader = new FileReader();
            fileReader.onload = function(e) {
                $("#text-input").val(e.target.result);
                $("#do").click();
            };
            fileReader.readAsText(file);
            return false;
        }
    });

    var processInput = function(str) {

        var colorMatch = str.match(colorRegExp);

        if (colorMatch === null) {
            throwError("No colours were found");
            return false;
        }

        model.inputStr = str;

        colorModel = arrayWizardry(colorMatch);

        hydrateVariableRows();

        renderText();

        // show the output/variables UI
        $("#output").fadeIn();
        $("#text-input").animate({
            height: "125px"
        }, {
            duration: 200
        });

    };

    var tmpl = function(obj,selector,value) {
        obj.html(obj.html().replace(selector,value));
    };

    var isWhiteOrBlack = function(str) {
        var lower = str.toLowerCase();
        if (lower === "#fff" || lower === "#ffffff" || lower === "#000" || lower === "#000000") {
            return true;
        } else {
            return false;
        }
    };

    var hydrateVariableRows = function() {
        $("#variables").empty();
        var tmplStr = $("#color-repeater").html();
        $.each(colorModel, function(i,item) {
            if (settings.ignoreBlackAndWhite && isWhiteOrBlack(item.color.hex)) {
                return;
            }
            var $newRow = $(tmplStr);
            tmpl($newRow,"{lightOrDark}",determineTextColor(item.color.hex));
            tmpl($newRow,"{color}",item.color.hex);
            tmpl($newRow,"{colorValue}",item.color.hex);
            tmpl($newRow,"{count}",item.count);
            tmpl($newRow,"{plural?}",(item.count > 1) ? "uses" : "use");
            $newRow.data("color",item);
            $newRow.appendTo("#variables");
        });
    };

    var renderText = function() {
        var str = model.inputStr;
        $.each(colorModel, function(i,item) {
            if (item.replaceWith.length) {
                var singleColorRegExp = new RegExp(item.color.hex,"g");
                str = str.replace(singleColorRegExp,settings.variablePrefix + item.replaceWith);
                str = settings.variablePrefix + item.replaceWith + ": " + item.color.hex + ";\n" + str;
            }
        });
        model.outputStr = str;
        $("#text-output").text(str);
    };

    var throwError = function(str) {
        var err = $('<div class="alert" />').text(str);
        $("#errors").empty().append(err);
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
            color: hexToHSL(a[j]),
            count: b[j],
            include: true,
            replaceWith: ""
          };
          c.push(obj);
        }

        // sort array depending on settings
        if (settings.sortBy === "usage") {
            c = sortByUsage(c);
        } else {
            c = sortByHue(c);
        }

        return c;

    };

    var sortByUsage = function(arr) {
        var a = arr.sort(function (a,b) {
            return b.count - a.count;
        });
        return a;
    };

    var sortByHue = function(arr) {
        var a = arr.sort(function(a,b) {
            return b.color.hue - a.color.hue;
        });
        return a;
    };

    var hexToHSL = function(color) {

        /* Get the hex value without hash symbol. */
        var hex = color.substring(1);

        /* Get the RGB values to calculate the Hue. */
        var r = parseInt(hex.substring(0,2),16)/255;
        var g = parseInt(hex.substring(2,4),16)/255;
        var b = parseInt(hex.substring(4,6),16)/255;

        /* Getting the Max and Min values for Chroma. */
        var max = Math.max.apply(Math, [r,g,b]);
        var min = Math.min.apply(Math, [r,g,b]);

        /* Variables for HSV value of hex color. */
        var chr = max-min;
        var hue = 0;
        var val = max;
        var sat = 0;

        if (val > 0) {
            /* Calculate Saturation only if Value isn't 0. */
            sat = chr/val;
            if (sat > 0) {
                if (r == max) {
                    hue = 60*(((g-min)-(b-min))/chr);
                    if (hue < 0) {hue += 360;}
                } else if (g == max) {
                    hue = 120+60*(((b-min)-(r-min))/chr);
                } else if (b == max) {
                    hue = 240+60*(((r-min)-(g-min))/chr);
                }
            }
        }

        return {
            hex: color,
            hue: hue,
            sat: sat,
            val: val
        };

    };

}());