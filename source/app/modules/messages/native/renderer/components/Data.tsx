// app/modules/messages/native/renderer/components/Data.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot0 = var4;
    var4 = {};
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/components/Data.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function Data(arg1) {
        var4 = _closure1_slot0;
        var3 = {};
        var1 = arg1;
        var3['rowProps'] = var1;
        var2 = undefined;
        var1 = 'data';
        var1 = var4.bind(var2)(var1, var3);
        return var1;
    };
    var3['default'] = var4;
    var4 = function makeKeyedDataComponent(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            var4 = _closure1_slot0;
            var3 = {};
            var1 = _closure2_slot0;
            var3['keyPath'] = var1;
            var1 = arg1;
            var3['rowProps'] = var1;
            var2 = undefined;
            var1 = 'data';
            var1 = var4.bind(var2)(var1, var3);
            return var1;
        };
        return var1;
    };
    var3['makeKeyedDataComponent'] = var4;
    var2 = function DataWithChildren(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.keyPath;
            var2 = var1.rowProps;
            var1 = var1.children;
            var4 = _closure1_slot0;
            var3 = {};
            var3['keyPath'] = var6;
            var6 = null;
            if(!(var6 == var2)) { _fun0001_ip = 44; continue _fun0001 }
 40:
            var2 = _closure1_slot1;
 44:
            var3['rowProps'] = var2;
            var3['children'] = var1;
            var2 = undefined;
            var1 = 'data';
            var1 = var4.bind(var2)(var1, var3);
            return var1;
        }
    };
    var3['DataWithChildren'] = var2;
    return var1;
})();