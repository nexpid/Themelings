// discord_common/js/packages/type-utils/TypeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/type-utils/TypeUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function exact(arg1) {
        var1 = arg1;
        return var1;
    };
    var3['exact'] = var4;
    var4 = function hasOwnProperty(arg1, arg2) {
        var3 = arg1;
        var2 = var3.hasOwnProperty;
        var1 = arg2;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['hasOwnProperty'] = var4;
    var4 = function dangerouslyCast(arg1, arg2) {
        var1 = global;
        var4 = var1.Object;
        var3 = var4.setPrototypeOf;
        var1 = arg2;
        var2 = var1.prototype;
        var1 = arg1;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['dangerouslyCast'] = var4;
    var4 = function assertUnreachable(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arguments[1];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
case 2:
            var2 = var2.andFail;
            if(!(var2 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = true;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            return var1;
case 6:
            var1 = global;
            var1 = var1.Error;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var4 = var2;
            var1 = new var4[var1](var3);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['assertUnreachable'] = var4;
    var2 = function arrayIsNotEmpty(arg1) {
        var1 = arg1;
        var2 = var1.length;
        var1 = 0;
        var1 = var2 > var1;
        return var1;
    };
    var3['arrayIsNotEmpty'] = var2;
    return var1;
})();