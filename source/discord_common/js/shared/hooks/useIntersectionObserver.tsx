// discord_common/js/shared/hooks/useIntersectionObserver.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var4 = function useIntersectionObserver(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var10 = arg1;
            var6 = arg2;
            var7 = arguments[2];
            var _closure2_slot0 = var10;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = true;
case 2:
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var1 = _closure1_slot5;
            var9 = null;
            var1 = var1.bind(var5)(var9);
            _closure2_slot2 = var1;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 1;
            var4 = var11[var4];
            var8 = var8.bind(var5)(var4);
            var4 = var6;
            if(!(var9 == var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot7;
case 4:
            var4 = var8.bind(var5)(var4);
            _closure2_slot3 = var4;
            var8 = _closure1_slot5;
            var8 = var8.bind(var5)(var9);
            _closure2_slot4 = var8;
            var9 = _closure1_slot6;
            var8 = new Array(3);
            var8[0] = var7;
            var8[1] = var10;
            var8[2] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = _closure2_slot4;
                    var2 = var2.current;
                    var3 = null;
                    if(!(var3 == var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = _closure2_slot4;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 2;
                    var5 = var5[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.getIntersectionObserver;
                    var2 = _closure2_slot3;
                    var2 = var2.current;
                    var2 = var5.bind(var6)(var2);
                    var4['current'] = var2;
case 8:
                    var2 = _closure2_slot2;
                    var5 = var2.current;
                    var2 = _closure2_slot4;
                    var4 = var2.current;
                    var2 = var3 != var5;
                    if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var2 = var3 != var4;
case 10:
                    if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 12:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var6.bind(var2)(var3);
                    var2 = var3.watch;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var4, var5, var1);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var9.bind(var5)(var4, var8);
            var4 = _closure1_slot3;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot1;
                    if(!var3) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var3 = _closure2_slot2;
                    var4 = var3.current;
                    var _closure3_slot0 = var4;
                    var2 = _closure2_slot4;
                    var3 = var2.current;
                    var _closure3_slot1 = var3;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0003_ip = 13; continue _fun0003 }
case 15:
                    if(!(var2 == var3)) { _fun0003_ip = 16; continue _fun0003 }
case 13:
                    var2 = undefined;
                    return var2;
case 16:
                    var1 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.unwatch;
                        var3 = _closure3_slot1;
                        var2 = _closure3_slot0;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var5 = global;
    var10 = var5.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var7[var1];
    var1 = undefined;
    var8 = var6.bind(var1)(var8);
    var9 = var8.useEffect;
    var _closure1_slot3 = var9;
    var9 = var8.useMemo;
    var _closure1_slot4 = var9;
    var9 = var8.useRef;
    var _closure1_slot5 = var9;
    var8 = var8.useLayoutEffect;
    var _closure1_slot6 = var8;
    var8 = {};
    var _closure1_slot7 = var8;
    var9 = var5.Map;
    var5 = {};
    var8 = 1;
    var5['threshold'] = var8;
    var8 = [1];
    var8[1] = var5;
    var5 = new Array(1);
    var5[0] = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var14 = var8;
    var13 = var5;
    var5 = new var14[var9](var13, var12);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot8 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/shared/hooks/useIntersectionObserver.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useIntersectionObserver'] = var4;
    var2 = function useIsVisible(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var8 = arguments[1];
            var5 = arguments[2];
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0004_ip = 17; continue _fun0004 }
case 3:
            var8 = 1;
case 17:
            var _closure2_slot1 = var8;
            if(!(var5 === var4)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var5 = true;
case 18:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 1;
            var1 = var7[var1];
            var6 = var6.bind(var4)(var1);
            var1 = function(arg1) {
                var3 = _closure2_slot0;
                var1 = arg1;
                var2 = var1.isIntersecting;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var6.bind(var4)(var1);
            var7 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var8;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var5 = _closure2_slot1;
                    var2 = _closure1_slot8;
                    var1 = var2.get;
                    var1 = var1.bind(var2)(var5);
                    var2 = null;
                    if(!(var2 == var1)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var2 = {};
                    var2['threshold'] = var5;
                    var4 = _closure1_slot8;
                    var3 = var4.set;
                    var3 = var3.bind(var4)(var5, var2);
                    var1 = var2;
case 20:
                    return var1;
                }
            };
            var3 = var7.bind(var4)(var3, var6);
            var2 = _closure1_slot9;
            var1 = var1.current;
            var1 = var2.bind(var4)(var1, var3, var5);
            return var1;
        }
    };
    var3['useIsVisible'] = var2;
    return var1;
})();