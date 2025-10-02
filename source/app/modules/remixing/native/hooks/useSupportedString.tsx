// app/modules/remixing/native/hooks/useSupportedString.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var4 = {};
    var _closure1_slot3 = var4;
    var4 = function useSupportedTextFilter(arg1, arg2) {
        var5 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure2_slot1;
                    var5 = null;
                    if(!(var5 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure2_slot1;
                    var6 = var5 == var3;
                    var3 = undefined;
                    if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var7 = _closure2_slot1;
                    var6 = var7.getGlyphIDs;
                    var3 = var6.bind(var7)(var4);
case 4:
                    _fun0001_ip = 6; continue _fun0001;
case 2:
                    var3 = new Array(0);
case 6:
                    var _closure4_slot0 = var3;
                    var6 = new Array(0);
                    var8 = 0;
                    var10 = var6;
                    var9 = var4;
                    var3 = arraySpread(var10, var9, var8);
                    var3 = var6.filter;
                    var1 = function(arg1, arg2) {
                        var2 = _closure4_slot0;
                        var1 = arg2;
                        var2 = var2[var1];
                        var1 = 0;
                        var1 = var1 !== var2;
                        return var1;
                    };
                    var6 = var3.bind(var6)(var1);
                    var3 = var6.join;
                    var1 = '';
                    var1 = var3.bind(var6)(var1);
                    var3 = _closure2_slot0;
                    var3 = var5 !== var3;
                    if(!var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var7 = _closure1_slot3;
                    var6 = _closure2_slot0;
                    var7 = var7[var6];
                    var6 = true;
                    var3 = var6 === var7;
case 7:
                    if(var3) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var6 = var1.length;
                    var4 = var4.length;
                    var3 = var6 === var4;
case 9:
                    if(var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var4 = 1;
                    var6 = var6[var4];
                    var4 = undefined;
                    var6 = var7.bind(var4)(var6);
                    var4 = var6.presentRemixLanguageSupportWarning;
                    var4 = var4.bind(var6)();
                    var4 = _closure2_slot0;
                    if(!(var5 !== var4)) { _fun0001_ip = 11; continue _fun0001 }
case 13:
                    var4 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var2 = true;
                    var4[var3] = var2;
case 11:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot4 = var4;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/remixing/native/hooks/useSupportedString.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function _default(arg1, arg2, arg3) {
        var4 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var1 = arg2;
        var2 = var4.bind(var3)(var2, var1);
        var1 = arg3;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['default'] = var5;
    var3['useSupportedTextFilter'] = var4;
    var2 = function(arg1, arg2, arg3) {
        var3 = arg3;
        var5 = _closure1_slot4;
        var4 = undefined;
        var2 = arg1;
        var1 = arg2;
        var2 = var5.bind(var4)(var2, var1);
        var1 = var3.map;
        var1 = var1.bind(var3)(var2);
        return var1;
    };
    var3['useSupportedStringLines'] = var2;
    return var1;
})();