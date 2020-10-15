// ==UserScript==
// @name Test
// @version 0.1.0
// @description Test
// @author TumbleGamer
// @run-at       document-start
// @require      https://github.com/SArpnt/joinFunction/raw/master/script.js
// @require      https://github.com/SArpnt/EventHandler/raw/master/script.js
// @require      https://github.com/SArpnt/cardboard/raw/master/script.user.js
// @require      file:///E:/dev/boxcritters/mods/commandapi/commandapi.user.js
// @match        https://boxcritters.com/play/
// @match        https://boxcritters.com/play/?*
// @match        https://boxcritters.com/play/#*
// @match        https://boxcritters.com/play/index.html
// @match        https://boxcritters.com/play/index.html?*
// @match        https://boxcritters.com/play/index.html#*
// ==/UserScript==


var testMod = cardboard.register("testCommand");

var commands = commandapi.registerCommandGroup(testMod);

console.log(commandapi)
console.log(commands)