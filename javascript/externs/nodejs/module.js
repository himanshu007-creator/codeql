// Automatically generated from TypeScript type definitions provided by
// DefinitelyTyped (https://github.com/DefinitelyTyped/DefinitelyTyped),
// which is licensed under the MIT license; see file DefinitelyTyped-LICENSE
// in parent directory.
// Type definitions for Node.js 10.5.x
// Project: https://nodejs.org/
// Definitions by: Microsoft TypeScript <https://typescriptlang.org>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped/DefinitelyTyped>
//                 Parambir Singh <https://github.com/parambirs>
//                 Christian Vaagland Tellnes <https://github.com/tellnes>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 Nicolas Voigt <https://github.com/octo-sniffle>
//                 Chigozirim C. <https://github.com/smac89>
//                 Flarna <https://github.com/Flarna>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Kelvin Jin <https://github.com/kjin>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Klaus Meinhardt <https://github.com/ajafff>
//                 Huw <https://github.com/hoo29>
//                 Nicolas Even <https://github.com/n-e>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Lishude <https://github.com/islishude>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Zane Hannan AU <https://github.com/ZaneHannanAU>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * @externs
 * @fileoverview Definitions for module "module"
 */

/**
 * @param {string} id
 * @param {Module} parent
 * @return {Module}
 * @constructor
 */
var Module = function(id, parent) {};

/**
 * @type {Module}
 */
Module.Module;

/**
 * @type {Array<string>}
 */
Module.globalPaths;

/**
 * @type {Array<string>}
 */
Module.wrapper;

/**
 * @param {string} script
 * @return {string}
 */
Module.wrap = function(script) {};

/**
 * @return {void}
 */
Module.runMain = function() {};

/**
 * @return {Object}
 */
Module.requireRepl = function() {};

/**
 * @type {Object}
 */
Module._cache;

/**
 * @type {Object}
 */
Module._pathCache;

/**
 * @type {Object}
 */
Module._realpathCache;

/**
 * @type {Object}
 */
Module._extensions;

/**
 * @type {Function}
 */
Module._debug;

/**
 * @type {Function}
 */
Module._findPath;

/**
 * @type {Function}
 */
Module._nodeModulePaths;

/**
 * @type {Function}
 */
Module._resolveLookupPaths;

/**
 * @type {Function}
 */
Module._load;

/**
 * @type {Function}
 */
Module._resolveFilename;

/**
 * @type {Function}
 */
Module._initPaths;

/**
 * @type {Function}
 */
Module._preloadModules;

/**
 * @param {string} id
 * @return {*}
 */
Module.prototype.require = function(id) {};

module.exports = Module;

