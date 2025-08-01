// app/utils/native/StyleSheetUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var2);
    var2 = {};
    var1 = function getStyleProp(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var7 = arg2;
            var6 = null;
            if(!(var6 != var7)) { _fun0001_ip = 110; continue _fun0001 }
 12:
            var1 = '';
            if(!(var1 !== var7)) { _fun0001_ip = 110; continue _fun0001 }
 20:
            var1 = global;
            var2 = var1.Array;
            var1 = var2.isArray;
            var1 = var1.bind(var2)(var8);
            if(var1) { _fun0001_ip = 62; continue _fun0001 }
 41:
            if(!(var6 != var8)) { _fun0001_ip = 110; continue _fun0001 }
 45:
            var2 = 'object';
            var1 = typeof var8;
            if(!(var2 === var1)) { _fun0001_ip = 110; continue _fun0001 }
 56:
            var1 = var8[var7];
            return var1;
 62:
            var2 = var8.length;
            var1 = 1;
            var5 = var2 - var1;
            var4 = 0;
            var2 = undefined;
            if(!(var5 >= var4)) { _fun0001_ip = 110; continue _fun0001 }
 85:
            var9 = _closure1_slot0;
            var1 = var8[var5];
            var1 = var9.bind(var2)(var1, var7);
            if(!(var6 == var1)) { _fun0001_ip = 114; continue _fun0001 }
 103:
            var5 = var5 - 1;
            if(var5 >= var4) { _fun0001_ip = 85; continue _fun0001 }
 110:
            var2 = undefined;
            return var2;
 114:
            return var1;
        }
    };
    var _closure1_slot0 = var1;
    var2['getStyleProp'] = var1;
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/StyleSheetUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();