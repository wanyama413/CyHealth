// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"axq68":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4933f4df41a6cc06";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hHbBX":[function(require,module,exports) {
// JS 
var dateCache = {};
var tooltipPalette = [
    "#d53838",
    "#FF9800",
    "#00C853",
    "#212121"
];
var countriesInfo = {
    Andorra: {
        flag: "����",
        code: "AD"
    },
    "United Arab Emirates": {
        flag: "����",
        code: "AE"
    },
    Afghanistan: {
        flag: "����",
        code: "AF"
    },
    "Antigua and Barbuda": {
        flag: "����",
        code: "AG"
    },
    Anguilla: {
        flag: "����",
        code: "AI"
    },
    Albania: {
        flag: "����",
        code: "AL"
    },
    Armenia: {
        flag: "����",
        code: "AM"
    },
    Angola: {
        flag: "����",
        code: "AO"
    },
    Antarctica: {
        flag: "����",
        code: "AQ"
    },
    Argentina: {
        flag: "����",
        code: "AR"
    },
    "American Samoa": {
        flag: "����",
        code: "AS"
    },
    Austria: {
        flag: "����",
        code: "AT"
    },
    Australia: {
        flag: "����",
        code: "AU"
    },
    Aruba: {
        flag: "����",
        code: "AW"
    },
    "\xc5land Islands": {
        flag: "����",
        code: "AX"
    },
    Azerbaijan: {
        flag: "����",
        code: "AZ"
    },
    "Bosnia and Herzegovina": {
        flag: "����",
        code: "BA"
    },
    Barbados: {
        flag: "����",
        code: "BB"
    },
    Bangladesh: {
        flag: "����",
        code: "BD"
    },
    Belgium: {
        flag: "����",
        code: "BE"
    },
    "Burkina Faso": {
        flag: "����",
        code: "BF"
    },
    Bulgaria: {
        flag: "����",
        code: "BG"
    },
    Bahrain: {
        flag: "����",
        code: "BH"
    },
    Burundi: {
        flag: "����",
        code: "BI"
    },
    Benin: {
        flag: "����",
        code: "BJ"
    },
    "Saint Barth\xe9lemy": {
        flag: "����",
        code: "BL"
    },
    Bermuda: {
        flag: "����",
        code: "BM"
    },
    Brunei: {
        flag: "����",
        code: "BN"
    },
    Bolivia: {
        flag: "����",
        code: "BO"
    },
    "Bonaire, Sint Eustatius and Saba": {
        flag: "����",
        code: "BQ"
    },
    Brazil: {
        flag: "����",
        code: "BR"
    },
    Bahamas: {
        flag: "����",
        code: "BS"
    },
    Bhutan: {
        flag: "����",
        code: "BT"
    },
    "Bouvet Island": {
        flag: "����",
        code: "BV"
    },
    Botswana: {
        flag: "����",
        code: "BW"
    },
    Belarus: {
        flag: "����",
        code: "BY"
    },
    Belize: {
        flag: "����",
        code: "BZ"
    },
    Canada: {
        flag: "����",
        code: "CA"
    },
    "Cocos (Keeling) Islands": {
        flag: "����",
        code: "CC"
    },
    "Congo (Kinshasa)": {
        flag: "����",
        code: "CD"
    },
    "Central African Republic": {
        flag: "����",
        code: "CF"
    },
    "Congo (Brazzaville)": {
        flag: "����",
        code: "CG"
    },
    Switzerland: {
        flag: "����",
        code: "CH"
    },
    "Cote d'Ivoire": {
        flag: "����",
        code: "CI"
    },
    "Cook Islands": {
        flag: "����",
        code: "CK"
    },
    Chile: {
        flag: "����",
        code: "CL"
    },
    Cameroon: {
        flag: "����",
        code: "CM"
    },
    China: {
        flag: "����",
        code: "CN"
    },
    Colombia: {
        flag: "����",
        code: "CO"
    },
    "Costa Rica": {
        flag: "����",
        code: "CR"
    },
    Cuba: {
        flag: "����",
        code: "CU"
    },
    "Cabo Verde": {
        flag: "����",
        code: "CV"
    },
    Curaçao: {
        flag: "����",
        code: "CW"
    },
    "Christmas Island": {
        flag: "����",
        code: "CX"
    },
    Cyprus: {
        flag: "����",
        code: "CY"
    },
    Czechia: {
        flag: "����",
        code: "CZ"
    },
    Germany: {
        flag: "����",
        code: "DE"
    },
    Djibouti: {
        flag: "����",
        code: "DJ"
    },
    Denmark: {
        flag: "����",
        code: "DK"
    },
    Dominica: {
        flag: "����",
        code: "DM"
    },
    "Dominican Republic": {
        flag: "����",
        code: "DO"
    },
    "Cruise Ship": {
        flag: "��"
    },
    Algeria: {
        flag: "����",
        code: "DZ"
    },
    Ecuador: {
        flag: "����",
        code: "EC"
    },
    Estonia: {
        flag: "����",
        code: "EE"
    },
    Egypt: {
        flag: "����",
        code: "EG"
    },
    "Western Sahara": {
        flag: "����",
        code: "EH"
    },
    Eritrea: {
        flag: "����",
        code: "ER"
    },
    Spain: {
        flag: "����",
        code: "ES"
    },
    Ethiopia: {
        flag: "����",
        code: "ET"
    },
    "European Union": {
        flag: "����",
        code: "EU"
    },
    Finland: {
        flag: "����",
        code: "FI"
    },
    Fiji: {
        flag: "����",
        code: "FJ"
    },
    "Falkland Islands (Malvinas)": {
        flag: "����",
        code: "FK"
    },
    Micronesia: {
        flag: "����",
        code: "FM"
    },
    "Faroe Islands": {
        flag: "����",
        code: "FO"
    },
    France: {
        flag: "����",
        code: "FR"
    },
    Gabon: {
        flag: "����",
        code: "GA"
    },
    "United Kingdom": {
        flag: "����",
        code: "GB"
    },
    Grenada: {
        flag: "����",
        code: "GD"
    },
    Georgia: {
        flag: "����",
        code: "GE"
    },
    "French Guiana": {
        flag: "����",
        code: "GF"
    },
    Guernsey: {
        flag: "����",
        code: "GG"
    },
    Ghana: {
        flag: "����",
        code: "GH"
    },
    Gibraltar: {
        flag: "����",
        code: "GI"
    },
    Greenland: {
        flag: "����",
        code: "GL"
    },
    Gambia: {
        flag: "����",
        code: "GM"
    },
    Guinea: {
        flag: "����",
        code: "GN"
    },
    Guadeloupe: {
        flag: "����",
        code: "GP"
    },
    "Equatorial Guinea": {
        flag: "����",
        code: "GQ"
    },
    Greece: {
        flag: "����",
        code: "GR"
    },
    "South Georgia": {
        flag: "����",
        code: "GS"
    },
    Guatemala: {
        flag: "����",
        code: "GT"
    },
    Guam: {
        flag: "����",
        code: "GU"
    },
    "Guinea-Bissau": {
        flag: "����",
        code: "GW"
    },
    Guyana: {
        flag: "����",
        code: "GY"
    },
    "Hong Kong": {
        flag: "����",
        code: "HK"
    },
    "Heard Island and Mcdonald Islands": {
        flag: "����",
        code: "HM"
    },
    Honduras: {
        flag: "����",
        code: "HN"
    },
    Croatia: {
        flag: "����",
        code: "HR"
    },
    Haiti: {
        flag: "����",
        code: "HT"
    },
    Hungary: {
        flag: "����",
        code: "HU"
    },
    Indonesia: {
        flag: "����",
        code: "ID"
    },
    Ireland: {
        flag: "����",
        code: "IE"
    },
    Israel: {
        flag: "����",
        code: "IL"
    },
    "Isle of Man": {
        flag: "����",
        code: "IM"
    },
    India: {
        flag: "����",
        code: "IN"
    },
    "British Indian Ocean Territory": {
        flag: "����",
        code: "IO"
    },
    Iraq: {
        flag: "����",
        code: "IQ"
    },
    Iran: {
        flag: "����",
        code: "IR"
    },
    Iceland: {
        flag: "����",
        code: "IS"
    },
    Italy: {
        flag: "����",
        code: "IT"
    },
    Jersey: {
        flag: "����",
        code: "JE"
    },
    Jamaica: {
        flag: "����",
        code: "JM"
    },
    Jordan: {
        flag: "����",
        code: "JO"
    },
    Japan: {
        flag: "����",
        code: "JP"
    },
    Kenya: {
        flag: "����",
        code: "KE"
    },
    Kyrgyzstan: {
        flag: "����",
        code: "KG"
    },
    Cambodia: {
        flag: "����",
        code: "KH"
    },
    Kiribati: {
        flag: "����",
        code: "KI"
    },
    Comoros: {
        flag: "����",
        code: "KM"
    },
    "Saint Kitts and Nevis": {
        flag: "����",
        code: "KN"
    },
    "North Korea": {
        flag: "����",
        code: "KP"
    },
    "Korea, South": {
        flag: "����",
        code: "KR"
    },
    Kuwait: {
        flag: "����",
        code: "KW"
    },
    "Cayman Islands": {
        flag: "����",
        code: "KY"
    },
    Kazakhstan: {
        flag: "����",
        code: "KZ"
    },
    Laos: {
        flag: "����",
        code: "LA"
    },
    Lebanon: {
        flag: "����",
        code: "LB"
    },
    "Saint Lucia": {
        flag: "����",
        code: "LC"
    },
    Liechtenstein: {
        flag: "����",
        code: "LI"
    },
    "Sri Lanka": {
        flag: "����",
        code: "LK"
    },
    Liberia: {
        flag: "����",
        code: "LR"
    },
    Lesotho: {
        flag: "����",
        code: "LS"
    },
    Lithuania: {
        flag: "����",
        code: "LT"
    },
    Luxembourg: {
        flag: "����",
        code: "LU"
    },
    Latvia: {
        flag: "����",
        code: "LV"
    },
    Libya: {
        flag: "����",
        code: "LY"
    },
    Morocco: {
        flag: "����",
        code: "MA"
    },
    Monaco: {
        flag: "����",
        code: "MC"
    },
    Moldova: {
        flag: "����",
        code: "MD"
    },
    Montenegro: {
        flag: "����",
        code: "ME"
    },
    "Saint Martin (French Part)": {
        flag: "����",
        code: "MF"
    },
    Madagascar: {
        flag: "����",
        code: "MG"
    },
    "North Macedonia": {
        flag: "����",
        code: "MK"
    },
    Mali: {
        flag: "����",
        code: "ML"
    },
    Burma: {
        flag: "����",
        code: "MM"
    },
    Mongolia: {
        flag: "����",
        code: "MN"
    },
    Macao: {
        flag: "����",
        code: "MO"
    },
    "Northern Mariana Islands": {
        flag: "����",
        code: "MP"
    },
    Martinique: {
        flag: "����",
        code: "MQ"
    },
    Mauritania: {
        flag: "����",
        code: "MR"
    },
    Montserrat: {
        flag: "����",
        code: "MS"
    },
    Malta: {
        flag: "����",
        code: "MT"
    },
    Malawi: {
        flag: "����",
        code: "MW"
    },
    Mexico: {
        flag: "����",
        code: "MX"
    },
    Malaysia: {
        flag: "����",
        code: "MY"
    },
    Mozambique: {
        flag: "����",
        code: "MZ"
    },
    Namibia: {
        flag: "����",
        code: "NA"
    },
    "New Caledonia": {
        flag: "����",
        code: "NC"
    },
    Niger: {
        flag: "����",
        code: "NE"
    },
    "Norfolk Island": {
        flag: "����",
        code: "NF"
    },
    Nigeria: {
        flag: "����",
        code: "NG"
    },
    Nicaragua: {
        flag: "����",
        code: "NI"
    },
    Netherlands: {
        flag: "����",
        code: "NL"
    },
    Norway: {
        flag: "����",
        code: "NO"
    },
    Nepal: {
        flag: "����",
        code: "NP"
    },
    Nauru: {
        flag: "����",
        code: "NR"
    },
    Niue: {
        flag: "����",
        code: "NU"
    },
    "New Zealand": {
        flag: "����",
        code: "NZ"
    },
    Oman: {
        flag: "����",
        code: "OM"
    },
    Panama: {
        flag: "����",
        code: "PA"
    },
    Peru: {
        flag: "����",
        code: "PE"
    },
    "French Polynesia": {
        flag: "����",
        code: "PF"
    },
    "Papua New Guinea": {
        flag: "����",
        code: "PG"
    },
    Philippines: {
        flag: "����",
        code: "PH"
    },
    Pakistan: {
        flag: "����",
        code: "PK"
    },
    Poland: {
        flag: "����",
        code: "PL"
    },
    "Saint Pierre and Miquelon": {
        flag: "����",
        code: "PM"
    },
    Pitcairn: {
        flag: "����",
        code: "PN"
    },
    "Puerto Rico": {
        flag: "����",
        code: "PR"
    },
    "Palestinian Territory": {
        flag: "����",
        code: "PS"
    },
    Portugal: {
        flag: "����",
        code: "PT"
    },
    Palau: {
        flag: "����",
        code: "PW"
    },
    Paraguay: {
        flag: "����",
        code: "PY"
    },
    Qatar: {
        flag: "����",
        code: "QA"
    },
    Réunion: {
        flag: "����",
        code: "RE"
    },
    Romania: {
        flag: "����",
        code: "RO"
    },
    Serbia: {
        flag: "����",
        code: "RS"
    },
    Russia: {
        flag: "����",
        code: "RU"
    },
    Rwanda: {
        flag: "����",
        code: "RW"
    },
    "Saudi Arabia": {
        flag: "����",
        code: "SA"
    },
    "Solomon Islands": {
        flag: "����",
        code: "SB"
    },
    Sudan: {
        flag: "����",
        code: "SD"
    },
    Sweden: {
        flag: "����",
        code: "SE"
    },
    Singapore: {
        flag: "����",
        code: "SG"
    },
    "Saint Helena, Ascension and Tristan Da Cunha": {
        flag: "����",
        code: "SH"
    },
    Slovenia: {
        flag: "����",
        code: "SI"
    },
    "Svalbard and Jan Mayen": {
        flag: "����",
        code: "SJ"
    },
    Slovakia: {
        flag: "����",
        code: "SK"
    },
    "Sierra Leone": {
        flag: "����",
        code: "SL"
    },
    "San Marino": {
        flag: "����",
        code: "SM"
    },
    Senegal: {
        flag: "����",
        code: "SN"
    },
    Somalia: {
        flag: "����",
        code: "SO"
    },
    Suriname: {
        flag: "����",
        code: "SR"
    },
    "South Sudan": {
        flag: "����",
        code: "SS"
    },
    "Sao Tome and Principe": {
        flag: "����",
        code: "ST"
    },
    "El Salvador": {
        flag: "����",
        code: "SV"
    },
    "Sint Maarten (Dutch Part)": {
        flag: "����",
        code: "SX"
    },
    Syria: {
        flag: "����",
        code: "SY"
    },
    Eswatini: {
        flag: "����",
        code: "SZ"
    },
    "Turks and Caicos Islands": {
        flag: "����",
        code: "TC"
    },
    Chad: {
        flag: "����",
        code: "TD"
    },
    "French Southern Territories": {
        flag: "����",
        code: "TF"
    },
    Togo: {
        flag: "����",
        code: "TG"
    },
    Thailand: {
        flag: "����",
        code: "TH"
    },
    Tajikistan: {
        flag: "����",
        code: "TJ"
    },
    Tokelau: {
        flag: "����",
        code: "TK"
    },
    "Timor-Leste": {
        flag: "����",
        code: "TP"
    },
    Turkmenistan: {
        flag: "����",
        code: "TM"
    },
    Tunisia: {
        flag: "����",
        code: "TN"
    },
    Tonga: {
        flag: "����",
        code: "TO"
    },
    Turkey: {
        flag: "����",
        code: "TR"
    },
    "Trinidad and Tobago": {
        flag: "����",
        code: "TT"
    },
    Tuvalu: {
        flag: "����",
        code: "TV"
    },
    "Taiwan*": {
        flag: "����",
        code: "TW"
    },
    Tanzania: {
        flag: "����",
        code: "TZ"
    },
    Ukraine: {
        flag: "����",
        code: "UA"
    },
    Uganda: {
        flag: "����",
        code: "UG"
    },
    "United States Minor Outlying Islands": {
        flag: "����",
        code: "UM"
    },
    US: {
        flag: "����",
        code: "US"
    },
    Uruguay: {
        flag: "����",
        code: "UY"
    },
    Uzbekistan: {
        flag: "����",
        code: "UZ"
    },
    "Saint Vincent and the Grenadines": {
        flag: "����",
        code: "VC"
    },
    Venezuela: {
        flag: "����",
        code: "VE"
    },
    "Virgin Islands, British": {
        flag: "����",
        code: "VG"
    },
    "Virgin Islands, U.S.": {
        flag: "����",
        code: "VI"
    },
    Vietnam: {
        flag: "����",
        code: "VN"
    },
    Vanuatu: {
        flag: "����",
        code: "VU"
    },
    "Wallis and Futuna": {
        flag: "����",
        code: "WF"
    },
    Samoa: {
        flag: "����",
        code: "WS"
    },
    Kosovo: {
        flag: "����",
        code: "XK"
    },
    Yemen: {
        flag: "����",
        code: "YE"
    },
    Mayotte: {
        flag: "����",
        code: "YT"
    },
    "South Africa": {
        flag: "����",
        code: "ZA"
    },
    Zambia: {
        flag: "����",
        code: "ZM"
    },
    Zimbabwe: {
        flag: "����",
        code: "ZW"
    }
};
var countriesKeys = Object.keys(countriesInfo);
var selectedBeforeSummary;
var confirmedPalette = JSC.colorToPalette(tooltipPalette[0], {
    lightness: 0.6
}, 8, 0).reverse().slice(0, 7);
var activePalette = JSC.colorToPalette(tooltipPalette[1], {
    lightness: 0.8
}, 7, 0).reverse().slice(0, 7);
var recoveredPalette = JSC.colorToPalette(tooltipPalette[2], {
    lightness: 1
}, 7, 0).reverse().slice(0, 6);
var deathsPalette = JSC.colorToPalette(tooltipPalette[3], {
    lightness: 0.8
}, 7, 0).reverse().slice(0, 6);
var tabs = [
    "Active",
    "Recovered",
    "Deaths"
];
var timer;
makeBubbleScatter();
function makeBubbleScatter() {
    var data;
    var chart, map;
    var mapSerId = "mapSerTime";
    var startDate, endDate, currentDate;
    var lastSliderVal;
    var racebarColorLookup = {};
    /*    var chartTitleOptions = {       fontSize: '16px',       autoWrap: 'wrap'    };*/ var palette = confirmedPalette;
    var selectedType = "Active";
    var bubbleSizeBy = "Deaths";
    var selectedCountries = [
        "US",
        "BR",
        "RU"
    ];
    updateColors(selectedCountries);
    var isPlaying;
    if (!chart) JSC.fetch("https://raw.githubusercontent.com/datasets/covid-19/master/data/time-series-19-covid-combined.csv").then(function(response) {
        return response.text();
    }).then(function(text) {
        data = JSC.csv2Json(text, {
            coerce: function(d, i) {
                return {
                    Date: +new Date(d.Date),
                    Country: d.Country,
                    Confirmed: +d.Confirmed,
                    Active: d.Confirmed - d.Recovered - d.Deaths,
                    Recovered: +d.Recovered,
                    Deaths: +d.Deaths
                };
            }
        });
        JSC.fetch("https://raw.githubusercontent.com/datasets/covid-19/master/data/time-series-19-covid-combined.csv").then(function(response) {
            return response.text();
        }).then(function(text) {
            var greenlandData = JSC.csv2Json(text, {
                coerce: function(d, i) {
                    return {
                        Date: +new Date(d.Date),
                        Country: d["Province/State"],
                        Confirmed: +d.Confirmed,
                        Active: d.Confirmed - d.Recovered - d.Deaths,
                        Recovered: +d.Recovered,
                        Deaths: +d.Deaths
                    };
                }
            }).filter(function(x) {
                return x.Country === "Greenland";
            });
            data = data.concat(greenlandData);
            startDate = JSC.formatDate(data[0].Date, "d");
            endDate = JSC.formatDate(data[data.length - 1].Date, "d");
            var emptyCounties = [
                "Turkmenistan",
                "North Korea",
                "Lesotho"
            ];
            emptyCounties.forEach(function(item) {
                if (data.find(function(x) {
                    return x.id === item;
                }) === undefined) for(var i = new Date(startDate); i <= new Date(endDate); i = addDays(i, 1))data.push({
                    Date: i,
                    Country: item,
                    Confirmed: 0,
                    Active: 0,
                    Recovered: 0,
                    Deaths: 0
                });
            });
            currentDate = endDate;
            chart = renderChart(data, function(chrt) {
                map = renderMap(data);
                playPause(true, data, chrt);
            });
        });
    });
    function renderMap(data) {
        var unselectTimer;
        var chartRendered;
        return JSC.chart("mapDiv3", {
            type: "map solid",
            animation_duration: 0,
            defaultSeries: {
                pointSelection: "multiple",
                shape: {
                    padding: -0.01
                }
            },
            legend: {
                position: "bottom",
                template: "%icon,%name",
                defaultEntry: {
                    icon_width: 10,
                    style_fontSize: 10
                },
                customEntries: makeMapLegendEntries(activePalette)
            },
            events_pointSelectionChanged: function(items) {
                var ids = items.map(function(item) {
                    return item.id;
                });
                selectedCountries = ids;
                this.uiItems("global").options({
                    visible: ids.length > 1
                });
                document.getElementById("chartTitle3").innerHTML = makeTitle(JSC.formatDate(currentDate, "m"), (ids.length < 6 ? idsToNames(ids) : idsToFlags(ids)).join(", "));
                chart.series(0).options({
                    points: makeChartSeries(data)[0].points
                });
            },
            annotations: [
                {
                    position: "inside top left",
                    fill: "white",
                    label: {
                        text: "Select countries to compare:",
                        style: {
                            fontSize: "16px"
                        }
                    }
                }
            ],
            palette: makeSmartPalette(activePalette, "active"),
            defaultPoint: {
                tooltip: '<b>%name</b><br>Confirmed: <b><span style="color:' + tooltipPalette[0] + '">%confirmed</span></b><br>' + 'Active: <b><span style="color:' + tooltipPalette[1] + '">%active</span></b><br>' + 'Recovered: <b><span style="color:' + tooltipPalette[2] + '">%recovered</span></b><br>' + 'Deaths: <b><span style="color:' + tooltipPalette[3] + '">%deaths</span></b>',
                outline: {
                    color: "white",
                    width: 0.5
                },
                focusGlow: false,
                states: {
                    hover: {
                        fill: "currentColor",
                        outline: {
                            color: "black",
                            width: 1
                        }
                    },
                    select: {
                        enabled: true,
                        fill: "currentColor",
                        outline: {
                            color: "black",
                            width: 1
                        }
                    }
                }
            },
            series: makeMapSeries(data, mapSerId),
            toolbar_items: {
                resetZoom_position: "inside bottom left",
                caseTypes: {
                    items: generateButtons(),
                    value: "Active",
                    position: "outside top",
                    boxVisible: false,
                    label_text: "",
                    width: 280,
                    margin: 5,
                    itemsBox: {
                        layout: "horizontal",
                        visible: true,
                        margin_top: 5
                    },
                    defaultItem: {
                        type: "radio",
                        position: "top",
                        icon_visible: false,
                        padding: [
                            6,
                            12,
                            6,
                            -8
                        ],
                        margin: 0,
                        outline_width: 0,
                        fill: "#F5F5F5",
                        label_color: "#BDBDBD",
                        states_select: {
                            label_color: "white"
                        },
                        states_hover: {
                            label_color: "white"
                        }
                    },
                    events: {
                        change: function(val) {
                            selectedType = val;
                            playPause(true, data);
                            updateChart(data, val);
                            map.redraw();
                        }
                    }
                },
                global: {
                    type: "button",
                    visible: false,
                    label: {
                        text: "Clear",
                        style_fontSize: "14px"
                    },
                    fill: "white",
                    padding: [
                        4,
                        8
                    ],
                    events_click: function() {
                        map.series(0).points().options({
                            selected: false
                        });
                    }
                }
            }
        }, function(c) {
            chartRendered = true;
            var series = c.series(0);
            selectedCountries.forEach(function(item, i) {
                series.points(function(p) {
                    return p.options("id") === item;
                }).options({
                    selected: true
                }, i === selectedCountries.length - 1);
            });
        });
    }
    function renderChart(data, cb) {
        document.getElementById("chartTitle3").innerHTML = makeTitle(JSC.formatDate(currentDate, "m"), idsToNames(selectedCountries));
        var chartSeries = makeChartSeries(data);
        return JSC.chart("chartDiv3", {
            type: "bubble",
            // margin_top:40, 
            palette: [
                tooltipPalette[0]
            ],
            legend: {
                visible: false
            },
            events_pointSelectionChanged: function(items) {
                var ids = items.map(function(item) {
                    return item.id;
                });
                selectedCountries = ids;
                document.getElementById("chartTitle3").innerHTML = makeTitle(JSC.formatDate(currentDate, "m"), (ids.length < 6 ? idsToNames(ids) : idsToFlags(ids)).join(", "));
                this.series(0).options({
                    points: makeChartSeries(data)[0].points
                });
                map.uiItems("global").options({
                    visible: ids.length > 1
                });
                map.series(0).points().options({
                    selected: false
                });
                ids.forEach(function(id) {
                    map.series(0).points(id).options({
                        selected: true
                    });
                });
            },
            defaultPoint: {
                outline_width: 0,
                legendEntry_visible: false,
                label: {
                    text: "%name",
                    style_fontSize: "14px"
                },
                tooltip: '<b>%name</b><br>Confirmed: <b><span style="color:' + tooltipPalette[0] + '">%confirmed</span></b><br>' + 'Active: <b><span style="color:' + tooltipPalette[1] + '">%active</span></b><br>' + 'Recovered: <b><span style="color:' + tooltipPalette[2] + '">%recovered</span></b><br>' + 'Deaths: <b><span style="color:' + tooltipPalette[3] + '">%deaths</span></b>',
                states_select: {
                    opacity: 1,
                    fill: "currentColor"
                }
            },
            yAxis: {
                label_text: "Confirmed cases",
                alternateGridFill: "none",
                formatString: "a",
                scale_type: "logarithmic"
            },
            xAxis: {
                label_text: selectedType + " cases %",
                defaultTick_label_text: "%value%",
                scale_range: [
                    0,
                    100
                ]
            },
            defaultSeries: {
                legendEntry_visible: false,
                pointSelection: "multiple",
                palette: "default"
            },
            series: chartSeries,
            toolbar_items: {
                zoom_visible: false,
                label: {
                    label: {
                        text: "Bubble size: ",
                        style_fontSize: 14
                    },
                    margin_bottom: 44,
                    position: "top left",
                    boxVisible: false
                },
                bubbleSize: {
                    type: "select",
                    position: "top left",
                    items: tabs.join(","),
                    value: bubbleSizeBy,
                    margin_bottom: 44,
                    label_style_fontSize: 14,
                    events_change: function(val) {
                        bubbleSizeBy = val;
                        var chartSeries = makeChartSeries(data);
                        setTimeout(function() {
                            chart.series(0).points(chartSeries[0].points);
                        }, 20);
                    }
                },
                logScale: {
                    type: "toggle",
                    position: "inside top right",
                    value: true,
                    label_text: "Logarithmic",
                    events_change: function(val) {
                        chart.axes("y").options({
                            scale_type: val ? "logarithmic" : "auto"
                        });
                    }
                },
                sliderWrapper: {
                    itemsBox_visible: false,
                    position: "inside top left",
                    offset: "0,-42",
                    boxVisible: false,
                    label_text: "",
                    itemsBox: {
                        visible: true
                    },
                    defaultItem: {
                        boxVisible: false
                    },
                    items: {
                        slider: {
                            type: "range",
                            width: 180,
                            throttle: 0,
                            value: new Date(currentDate).getTime(),
                            min: new Date(startDate).getTime(),
                            max: new Date(endDate).getTime(),
                            events_change: function(val) {
                                if (lastSliderVal === val) return;
                                updateSliderTitle(val);
                                if (!isPlaying) updateFromSlider(val, data);
                                else {
                                    moveSlider(val, data);
                                    playPause(true, data);
                                }
                                resizeDivs();
                                lastSliderVal = val;
                            },
                            itemsBox: {
                                visible: true
                            }
                        },
                        Stop: {
                            type: "option",
                            height: 20,
                            value: false,
                            margin: [
                                6,
                                6,
                                6,
                                16
                            ],
                            icon_name: "system/default/pause",
                            icon_size: 20,
                            label_text: "",
                            events_change: function(val) {
                                playPause(val, data);
                            }
                        }
                    }
                }
            }
        }, cb);
    }
    function makeMapSeries(data, id) {
        var series = JSC.nest().key("Country").pointRollup(function(key, val) {
            var values = val[0];
            return {
                map: getCountryCode(key),
                id: getCountryCode(key),
                z: values[selectedType],
                attributes: {
                    confirmed: values.Confirmed,
                    active: values.Active,
                    recovered: values.Recovered,
                    deaths: values.Deaths,
                    deathRate: values.Confirmed >= 1000 ? JSC.formatNumber(values.Deaths / values.Confirmed * 100, "n2") + "%" : "not enough data"
                }
            };
        }).series(data.filter(function(x) {
            return formatDateCached(x.Date) === currentDate && countriesInfo[x.Country] !== undefined;
        }));
        if (id) series.id = id;
        return series;
    }
    function makeUpdateMapSeries(data, id) {
        var series = JSC.nest().key("Country").pointRollup(function(key, val) {
            var values = val[0];
            return {
                id: getCountryCode(key),
                z: values[selectedType],
                attributes: {
                    confirmed: values.Confirmed,
                    active: values.Active,
                    recovered: values.Recovered,
                    deaths: values.Deaths,
                    deathRate: values.Confirmed >= 1000 ? JSC.formatNumber(values.Deaths / values.Confirmed * 100, "n2") + "%" : "not enough data"
                }
            };
        }).series(data.filter(function(x) {
            return countriesInfo[x.Country] !== undefined && formatDateCached(x.Date) === currentDate;
        //return countriesInfo[x.Country] !== undefined && JSC.formatDate(x.Date, 'd') === currentDate; 
        }));
        if (id) series.id = id;
        return series;
    }
    function makeChartSeries(data) {
        var series = [
            {
                points: JSC.nest().key("Country").pointRollup(function(key, val) {
                    var values = val[0];
                    var result = {
                        selected: false,
                        name: values.Country,
                        opacity: 0.5,
                        color: "#b0b0b0",
                        label_visible: false,
                        x: values[selectedType] / values.Confirmed * 100,
                        y: +values.Confirmed,
                        z: +values[bubbleSizeBy],
                        id: getCountryCode(key),
                        attributes: {
                            confirmed: values.Confirmed,
                            active: values.Active,
                            recovered: values.Recovered,
                            deaths: values.Deaths
                        }
                    };
                    selectedCountries.forEach(function(item, i) {
                        if (getCountryCode(key) === item) {
                            result.selected = true;
                            result.color = getRaceBarColor(values.Country);
                            result.opacity = 1;
                            result.label_visible = true;
                        }
                    });
                    return result;
                }).points(data.filter(function(x) {
                    return formatDateCached(x.Date) === currentDate && countriesInfo[x.Country] !== undefined && x.Confirmed !== 0;
                }))
            }
        ];
        series.forEach(function(item, i) {
            item.points = item.points.filter(function(x) {
                return x !== undefined && x !== null;
            });
        });
        return series;
    }
    function updateChart(data, type) {
        var entries, palette;
        switch(type){
            case "Confirmed":
                entries = makeMapLegendEntries(confirmedPalette);
                palette = makeSmartPalette(confirmedPalette, "confirmed");
                chart.options({
                    palette: [
                        tooltipPalette[0]
                    ]
                }, false);
                break;
            case "Active":
                entries = makeMapLegendEntries(activePalette);
                palette = makeSmartPalette(activePalette, "active");
                chart.options({
                    palette: [
                        tooltipPalette[1]
                    ]
                }, false);
                break;
            case "Recovered":
                entries = makeMapLegendEntries(recoveredPalette);
                palette = makeSmartPalette(recoveredPalette, "recovered");
                chart.options({
                    palette: [
                        tooltipPalette[2]
                    ]
                }, false);
                break;
            case "Deaths":
                entries = makeMapLegendEntries(deathsPalette);
                palette = makeSmartPalette(deathsPalette, "deaths");
                chart.options({
                    palette: [
                        tooltipPalette[3]
                    ]
                }, false);
                break;
        }
        map.options({
            palette: palette
        });
        map.legends(0).entries().remove(false);
        map.legends(0).options({
            customEntries: entries
        });
        if (map.legends(0).entries().items.length > entries.length) map.legends(0).entries(7).remove();
        document.getElementById("chartTitle3").innerHTML = makeTitle(JSC.formatDate(currentDate, "m"), (selectedCountries.length < 6 ? idsToNames(selectedCountries) : idsToFlags(selectedCountries)).join(", "));
        var chartSeries = makeChartSeries(data);
        chart.axes("x").options({
            label_text: type + " cases %"
        });
        setTimeout(function() {
            chart.series(0).points(chartSeries[0].points);
        }, 20);
    }
    function updateSliderTitle(date) {
        currentDate = JSC.formatDate(new Date(new Date(date).getFullYear(), new Date(date).getMonth(), new Date(date).getDate()), "d");
        document.getElementById("chartTitle3").innerHTML = makeTitle(JSC.formatDate(currentDate, "m"), (selectedCountries.length < 6 ? idsToNames(selectedCountries) : idsToFlags(selectedCountries)).join(", "));
    }
    function moveSlider(date, data) {
        currentDate = JSC.formatDate(new Date(new Date(date).getFullYear(), new Date(date).getMonth(), new Date(date).getDate()), "d");
        chart.uiItems("slider").options({
            value: new Date(currentDate).getTime()
        });
        updateFromSlider(date, data);
    }
    function updateFromSlider(date, data) {
        currentDate = JSC.formatDate(new Date(new Date(date).getFullYear(), new Date(date).getMonth(), new Date(date).getDate()), "d");
        var mapSeries = makeUpdateMapSeries(data, mapSerId);
        var chartSeries = makeChartSeries(data);
        map.series(0).options({
            points: mapSeries[0].points
        });
        setTimeout(function() {
            chart.series(0).options({
                points: chartSeries[0].points
            });
        }, 20);
    }
    function animateChart(data) {
        clearInterval(timer);
        timer = setInterval(function() {
            if (new Date(currentDate).getTime() < new Date(endDate).getTime()) {
                currentDate = addDays(currentDate, 1);
                //moveSlider(currentDate, data); 
                chart.uiItems("slider").options({
                    value: new Date(currentDate).getTime()
                });
                document.getElementById("chartTitle3").innerHTML = makeTitle(JSC.formatDate(currentDate, "m"), (selectedCountries.length < 6 ? idsToNames(selectedCountries) : idsToFlags(selectedCountries)).join(", "));
                updateFromSlider(currentDate, data);
            } else playPause(true, data);
        }, 800);
    }
    function playPause(val, data, chrt) {
        var c = chrt || chart;
        if (val) {
            c.uiItems("Stop").options({
                label_text: "Play",
                icon_name: "system/default/play",
                value: val
            });
            clearInterval(timer);
            isPlaying = false;
        } else {
            c.uiItems("Stop").options({
                label_text: "Pause",
                icon_name: "system/default/pause",
                value: val
            });
            isPlaying = true;
            var startDateNum = new Date(startDate).getTime(), endDateNum = new Date(endDate).getTime();
            if (new Date(currentDate).getTime() === endDateNum) {
                //middle 
                var midDateNum = (startDateNum + endDateNum) / 2;
                currentDate = new Date(midDateNum);
                c.uiItems("slider").options({
                    value: new Date(midDateNum).getTime()
                });
            }
            animateChart(data);
        }
    }
    function makeTitle(date, country) {
        return "COVID-19 " + colorTypeText(selectedType) + ": <b>" + date + "</b><br>" + "<b>" + country + "</b>";
    }
    function updateColors(ids) {
        var colors = JSC.getPalette(0);
        racebarColorLookup = {};
        ids.forEach(function(id, i) {
            racebarColorLookup[id] = colors[i % colors.length];
        });
    }
    function getRaceBarColor(id) {
        if (id.length > 2 && countriesInfo[id]) id = countriesInfo[id].code;
        return racebarColorLookup[id];
    }
}
function addDays(date, days) {
    return new Date(date).setDate(new Date(date).getDate() + days);
}
function formatDateCached(num) {
    if (!dateCache[num]) dateCache[num] = JSC.formatDate(num, "d");
    return dateCache[num];
}
function colorTypeText(type) {
    var typeToColor = {
        Confirmed: tooltipPalette[0],
        Active: tooltipPalette[1],
        Recovered: tooltipPalette[2],
        Deaths: tooltipPalette[3]
    };
    return '<span style="color:' + typeToColor[type] + '">' + type + "</span>" + (type !== "Deaths" ? " Cases" : "");
}
function getCountryCode(country) {
    return countriesInfo[country] === undefined ? undefined : countriesInfo[country].code;
}
function makeSmartPalette(palette, name) {
    var smartPalette = {
        pointValue: function(p) {
            return p.options("attributes_" + name);
        },
        ranges: [
            {
                value: 0,
                color: "#E0E0E0",
                legendEntry_visible: false
            }
        ]
    };
    palette.forEach(function(item, i) {
        smartPalette.ranges.push({
            value: [
                Math.pow(10, i),
                Math.pow(10, i + 1) - 1
            ],
            color: item,
            legendEntry_visible: false
        });
    });
    return smartPalette;
}
function makeMapLegendEntries(palette) {
    var customEntries = [
        {
            id: "e0",
            name: "0",
            icon_color: "#E0E0E0"
        }
    ];
    palette.forEach(function(item, i) {
        var result = {
            id: "e" + i,
            name: JSC.formatNumber(Math.pow(10, i), "a") + " - " + JSC.formatNumber(Math.pow(10, i + 1), "a"),
            icon_color: item
        };
        if (i === palette.length - 1) result = {
            id: "e" + i,
            name: JSC.formatNumber(Math.pow(10, i), "a") + "+",
            icon_color: item
        };
        customEntries.push(result);
    });
    return customEntries;
}
function generateButtons() {
    var buttons = {};
    tabs.forEach(function(item, i) {
        buttons[item] = {
            label_text: item,
            states: {
                select: {
                    fill: tooltipPalette[i + 1]
                },
                hover: {
                    fill: tooltipPalette[i + 1]
                }
            }
        };
    });
    return buttons;
}
function idsToNames(ids) {
    return ids.map(function(id) {
        var found = countriesKeys.find(function(key) {
            if (countriesInfo[key].code === id) return key;
        });
        return found || id;
    });
}
function idsToFlags(ids) {
    return ids.map(function(id) {
        var fnd;
        var found = countriesKeys.find(function(key) {
            if (countriesInfo[key].code === id) {
                fnd = countriesInfo[key].flag;
                return countriesInfo[key].flag;
            }
        });
        return fnd || found || id;
    });
}
function resizeDivs() {
    document.getElementById("chartDiv3").style.height = document.getElementById("firstChartWrapper3").offsetHeight - document.getElementById("chartTitle3").offsetHeight + "px";
}

},{}]},["axq68","hHbBX"], "hHbBX", "parcelRequire30ab")

//# sourceMappingURL=index.41a6cc06.js.map
