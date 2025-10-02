// discord_common/js/packages/flux/LastFewActions.tsx
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
    var1 = new Array(0);
    var _closure1_slot0 = var1;
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/flux/LastFewActions.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function add(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var2 = var4.push;
            var1 = arg1;
            var1 = var2.bind(var4)(var1);
            var1 = _closure1_slot0;
            var1 = var1.length;
            var2 = 10;
            if(!(var1 > var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var1 = var4.shift;
            var1 = var1.bind(var4)();
            var1 = _closure1_slot0;
            var1 = var1.length;
            if(var1 > var2) { _fun0001_ip = 3; continue _fun0001 }
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var3['add'] = var4;
    var4 = function clear() {
        var1 = _closure1_slot0;
        var2 = new Array(0);
        _closure1_slot0 = var2;
        return var1;
    };
    var3['clear'] = var4;
    var4 = function serialize() {
        var3 = _closure1_slot0;
        var2 = var3.join;
        var1 = ' -> ';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['serialize'] = var4;
    var2 = function last() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot0;
            var3 = var1.length;
            var1 = 0;
            var3 = var3 > var1;
            var1 = null;
            if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = _closure1_slot0;
            var4 = var3.length;
            var2 = 1;
            var2 = var4 - var2;
            var1 = var3[var2];
case 4:
            return var1;
        }
    };
    var3['last'] = var2;
    return var1;
})();