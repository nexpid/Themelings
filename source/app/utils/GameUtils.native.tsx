// app/utils/GameUtils.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var2 = true;
    var4['value'] = var2;
    var2 = '__esModule';
    var2 = var5.bind(var6)(var3, var2, var4);
    var2 = {};
    var4 = function waitSubscribed() {
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.resolve;
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['waitSubscribed'] = var4;
    var4 = function waitConnected() {
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.resolve;
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['waitConnected'] = var4;
    var4 = function isLaunchable() {
        var1 = global;
        var3 = var1.Promise;
        var2 = var3.resolve;
        var1 = false;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['isLaunchable'] = var4;
    var4 = function launch() {
        var1 = global;
        var3 = var1.Promise;
        var2 = var3.reject;
        var5 = var1.Error;
        var1 = var5.prototype;
        var4 = Object.create(var1, {constructor: {value: var5}});
        var6 = 'not supported';
        var7 = var4;
        var1 = new var7[var5](var6, var5);
        var1 = var1 instanceof Object ? var1 : var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['launch'] = var4;
    var4 = function launchDispatchApplication() {
        var1 = global;
        var3 = var1.Promise;
        var2 = var3.reject;
        var5 = var1.Error;
        var1 = var5.prototype;
        var4 = Object.create(var1, {constructor: {value: var5}});
        var6 = 'not supported';
        var7 = var4;
        var1 = new var7[var5](var6, var5);
        var1 = var1 instanceof Object ? var1 : var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['launchDispatchApplication'] = var4;
    var4 = function removeShortcuts() {
        var1 = global;
        var3 = var1.Promise;
        var2 = var3.resolve;
        var1 = false;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['removeShortcuts'] = var4;
    var4 = function createShortcuts() {
        var1 = global;
        var3 = var1.Promise;
        var2 = var3.resolve;
        var1 = false;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['createShortcuts'] = var4;
    var4 = function isGameLaunchable() {
        var1 = global;
        var3 = var1.Promise;
        var2 = var3.resolve;
        var1 = false;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['isGameLaunchable'] = var4;
    var4 = function launchGame() {
        var1 = global;
        var3 = var1.Promise;
        var2 = var3.reject;
        var5 = var1.Error;
        var1 = var5.prototype;
        var4 = Object.create(var1, {constructor: {value: var5}});
        var6 = 'not supported';
        var7 = var4;
        var1 = new var7[var5](var6, var5);
        var1 = var1 instanceof Object ? var1 : var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['launchGame'] = var4;
    var4 = function isProtocolRegistered() {
        var1 = global;
        var3 = var1.Promise;
        var2 = var3.resolve;
        var1 = false;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['isProtocolRegistered'] = var4;
    var1 = function setRecentGames() {
        var1 = undefined;
        return var1;
    };
    var2['setRecentGames'] = var1;
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/GameUtils.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();