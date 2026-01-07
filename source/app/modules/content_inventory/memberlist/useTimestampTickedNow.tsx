// app/modules/content_inventory/memberlist/useTimestampTickedNow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function dropMilliseconds(arg1) {
        var1 = global;
        var7 = var1.Math;
        var6 = var7.floor;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 3;
        var2 = var5[var1];
        var3 = undefined;
        var2 = var4.bind(var3)(var2);
        var2 = var2.Millis;
        var8 = var2.SECOND;
        var2 = arg1;
        var2 = var2 / var8;
        var2 = var6.bind(var7)(var2);
        var1 = var5[var1];
        var1 = var4.bind(var3)(var1);
        var1 = var1.Millis;
        var1 = var1.SECOND;
        var1 = var2 * var1;
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/content_inventory/memberlist/useTimestampTickedNow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTimestampTickedNow() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arguments[0];
            var7 = undefined;
            if(!(var2 === var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
case 2:
            var6 = var2.hovered;
            var2 = var2.isAppFocused;
            if(!(var2 === var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = true;
case 4:
            var _closure2_slot0 = var7;
            var _closure2_slot1 = var7;
            var8 = _closure1_slot4;
            var5 = var8.useState;
            var3 = function() {
                var3 = _closure1_slot6;
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = var5.bind(var8)(var3);
            var5 = _closure1_slot3;
            var3 = 2;
            var8 = var5.bind(var7)(var8, var3);
            var3 = 0;
            var3 = var8[var3];
            var5 = 1;
            var5 = var8[var5];
            _closure2_slot0 = var5;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 4;
            var5 = var9[var5];
            var10 = var8.bind(var7)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var5 = var9.bind(var10)(var8, var5);
            var2 = !var2;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = !var6;
case 8:
            var2 = var5;
case 6:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 3;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.Millis;
            var6 = var5.SECOND;
            if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var6;
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var5 = 15;
            var7 = var5 * var6;
case 12:
            _closure2_slot1 = var7;
            var6 = _closure1_slot4;
            var5 = var6.useEffect;
            var4 = new Array(1);
            var4[0] = var7;
            var1 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.Interval;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var8 = var3;
                var2 = new var8[var2](var7);
                var5 = var2 instanceof Object ? var2 : var3;
                var _closure3_slot0 = var5;
                var4 = var5.start;
                var3 = _closure2_slot1;
                var2 = function() {
                    var3 = _closure2_slot0;
                    var4 = _closure1_slot6;
                    var1 = global;
                    var2 = var1.Date;
                    var1 = var2.now;
                    var2 = var1.bind(var2)();
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var4.bind(var5)(var3, var2);
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.stop;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                return var1;
            };
            var1 = var5.bind(var6)(var1, var4);
            var1 = {};
            var1['now'] = var3;
            var1['slowTickMode'] = var2;
            return var1;
        }
    };
    var3['useTimestampTickedNow'] = var2;
    return var1;
})();