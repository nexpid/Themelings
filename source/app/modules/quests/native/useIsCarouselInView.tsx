// app/modules/quests/native/useIsCarouselInView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var6 = var5[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot3 = var4;
    var4 = 3;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/useIsCarouselInView.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsCarouselInView() {
        var6 = _closure1_slot3;
        var4 = var6.useRef;
        var3 = null;
        var3 = var4.bind(var6)(var3);
        var _closure2_slot0 = var3;
        var8 = _closure1_slot0;
        var4 = _closure1_slot1;
        var7 = 2;
        var4 = var4[var7];
        var5 = undefined;
        var4 = var8.bind(var5)(var4);
        var4 = var4.bind(var5)();
        var4 = var4.height;
        var _closure2_slot1 = var4;
        var8 = var6.useRef;
        var8 = var8.bind(var6)(var4);
        var _closure2_slot2 = var8;
        var9 = var6.useEffect;
        var8 = new Array(1);
        var8[0] = var4;
        var4 = function() {
            var2 = _closure2_slot2;
            var1 = _closure2_slot1;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var4 = var9.bind(var6)(var4, var8);
        var8 = var6.useState;
        var4 = true;
        var4 = var8.bind(var6)(var4);
        var2 = _closure1_slot2;
        var5 = var2.bind(var5)(var4, var7);
        var2 = 0;
        var2 = var5[var2];
        var4 = 1;
        var4 = var5[var4];
        var _closure2_slot3 = var4;
        var4 = var6.useRef;
        var4 = var4.bind(var6)(var2);
        var _closure2_slot4 = var4;
        var5 = var6.useEffect;
        var4 = function() {
            var2 = global;
            var5 = var2.setInterval;
            var4 = undefined;
            var3 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var1 = _closure2_slot0;
                    var3 = var1.current;
                    var2 = var3.measure;
                    var1 = function(arg1, arg2, arg3, arg4, arg5, arg6) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var4 = arg4;
                            var9 = arg6;
                            var2 = _closure2_slot2;
                            var10 = var2.current;
                            var2 = global;
                            var6 = var2.Math;
                            var5 = var6.max;
                            var8 = var2.Math;
                            var7 = var8.min;
                            var3 = var9 + var4;
                            var7 = var7.bind(var8)(var3, var10);
                            var8 = var2.Math;
                            var2 = var8.max;
                            var3 = 0;
                            var2 = var2.bind(var8)(var9, var3);
                            var2 = var7 - var2;
                            var2 = var5.bind(var6)(var3, var2);
                            var3 = var4 > var3;
                            if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                            var4 = var2 / var4;
                            var2 = 0.5;
                            var3 = var4 >= var2;
case 4:
                            var2 = _closure2_slot4;
                            var2 = var2.current;
                            if(!(var3 !== var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                            var2 = _closure2_slot4;
                            var2['current'] = var3;
                            var2 = _closure2_slot3;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
case 6:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = 1000;
            var2 = var5.bind(var4)(var3, var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = global;
                var3 = var1.clearInterval;
                var2 = _closure3_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            return var1;
        };
        var1 = new Array(0);
        var1 = var5.bind(var6)(var4, var1);
        var1 = {};
        var1['containerRef'] = var3;
        var1['isInView'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();