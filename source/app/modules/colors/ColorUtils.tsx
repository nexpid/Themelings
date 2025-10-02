// app/modules/colors/ColorUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HEXColors;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/colors/ColorUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getColor(arg1) {
        var3 = arg1;
        var2 = _closure1_slot5;
        var1 = var3.toUpperCase;
        var5 = var1.bind(var3)();
        var4 = var5.replace;
        var3 = /-/g;
        var1 = '_';
        var1 = var4.bind(var5)(var3, var1);
        var1 = var2[var1];
        return var1;
    };
    var3['getColor'] = var4;
    var4 = function useColorValue(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 != var3;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 3;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            var2 = var2.ColorDetails;
            var1 = var2[var3];
case 2:
            return var1;
        }
    };
    var3['useColorValue'] = var4;
    var2 = function useDesaturatedColorString(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var7 = var5.bind(var3)(var4);
        var5 = var7.useStateFromStores;
        var3 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var1 = _closure1_slot4;
            var1 = var1.saturation;
            return var1;
        };
        var5 = var5.bind(var7)(var4, var3);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var4 = _closure2_slot0;
                var3 = 'currentColor';
                if(!(var3 !== var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var5 = _closure2_slot0;
                var4 = var5.startsWith;
                var3 = 'var(';
                var3 = var4.bind(var5)(var3);
                if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 5;
                var3 = var5[var3];
                var5 = undefined;
                var4 = var4.bind(var5)(var3);
                var3 = _closure2_slot0;
                var6 = var4.bind(var5)(var3);
                var5 = var6.set;
                var3 = var6.get;
                var4 = 'hsl.s';
                var7 = var3.bind(var6)(var4);
                var3 = _closure2_slot1;
                var3 = var7 * var3;
                var4 = var5.bind(var6)(var4, var3);
                var3 = var4.hex;
                var3 = var3.bind(var4)();
                return var3;
case 6:
                var2 = _closure2_slot0;
                return var2;
case 4:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useDesaturatedColorString'] = var2;
    return var1;
})();