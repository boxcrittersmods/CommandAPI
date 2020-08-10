// ==UserScript==
// @name         Antenna
// @description  Command API
// @author       Tumble
// @version      0.0.1.1
// @run-at       document-start
// @grant        none
// @require      https://github.com/SArpnt/joinFunction/raw/master/script.js
// @require      https://github.com/SArpnt/EventHandler/raw/master/script.js
// @require      https://github.com/SArpnt/cardboard/raw/master/script.user.js
// @require      file:///E:/dev/boxcritters/mods/antenna/message.js
// @match        https://boxcritters.com/play/
// @match        https://boxcritters.com/play/?*
// @match        https://boxcritters.com/play/#*
// @match        https://boxcritters.com/play/index.html
// @match        https://boxcritters.com/play/index.html?*
// @match        https://boxcritters.com/play/index.html#*
// ==/UserScript==

/**
 * @typedef CardboardMod
 * @property {string} modName
 */

 /**
  * Commands for the game /modname:command
  * @typedef Mod
  * @type {CardboardMod|String}
  */

 /**
  * @typedef Command
  */
 /**
  * @typedef CommandGroup
  * @property {CardboardMod|String} mod Represents the mods that the commands are for
  * @property {Array.<Command>} commands All of the commands for the mod
  */

/**
* @module Antenna
*/
var antenna = {
	/**
	 * @member
	 * @type {Array.<CommandGroup>}
	 */
	commandGroups:new Array
};

function getModName(mod) {
	for (const modName in cardboard.mods) {
		// Object == Object is true if they are the same instance
		if(cardboard.mods[modName] = mod) {
			return modName;
		}
	}
	return undefined;
}

/**
 * @class Command
 */
class Command {
	constructor(mod) {
		/**
		 * @property {Mod} mod mod that the command relates to
		 */
		this.mod = mod;
	}

	/**
	 * Executes the command
	 * @param {Number} argc Argument Count
	 * @param {Array.<String>} argv Argument Values
	 */
	exec(argc,argv){}

	/**
	 * Displays Help info in console or dialogue (haven't decided)
	 * @param {Number} argc Argument Count
	 * @param {Array.<String>} argv Argument Values
	 */
	help(argc,argv){}
}

/**
 * 
 * @param {Mod} mod 
 */
var registerCommandGroup = (mod)=>{
	var group = {
		mod,
		commands: new Object
	}
	var modName = mod.name||getModName(mod)||mod;
	antenna.commandGroups[modName] = group;
	return antenna.commandGroups[modName];
}
antenna.registerCommandGroup = registerCommandGroup;
