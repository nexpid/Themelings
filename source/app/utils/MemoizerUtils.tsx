// app/utils/MemoizerUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = {};
    var1 = function makeMemoizer(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var2 = var2.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var4 = var3;
        var2 = new var4[var2](var3);
        var2 = var2 instanceof Object ? var2 : var3;
        var _closure2_slot1 = var2;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = arg1;
                var2 = _closure2_slot1;
                var1 = var2.get;
                var1 = var1.bind(var2)(var5);
                var4 = undefined;
                if(!(var4 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot0;
                var2 = var2.bind(var4)(var5);
                var4 = _closure2_slot1;
                var3 = var4.set;
                var3 = var3.bind(var4)(var5, var2);
                var1 = var2;
case 2:
                return var1;
            }
        };
        return var1;
    };
    var2['makeMemoizer'] = var1;
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/MemoizerUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();