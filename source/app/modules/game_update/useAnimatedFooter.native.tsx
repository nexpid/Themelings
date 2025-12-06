// app/modules/game_update/useAnimatedFooter.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_update/useAnimatedFooter.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function() {
        var9 = _closure1_slot2;
        var2 = var9.useRef;
        var3 = null;
        var4 = var2.bind(var9)(var3);
        var _closure2_slot0 = var4;
        var2 = var9.useRef;
        var3 = var2.bind(var9)(var3);
        var _closure2_slot1 = var3;
        var6 = var9.useRef;
        var2 = true;
        var2 = var6.bind(var9)(var2);
        var _closure2_slot2 = var2;
        var7 = _closure1_slot0;
        var6 = _closure1_slot1;
        var5 = 1;
        var6 = var6[var5];
        var5 = undefined;
        var7 = var7.bind(var5)(var6);
        var6 = var7.useSharedValue;
        var5 = 0;
        var5 = var6.bind(var7)(var5);
        var _closure2_slot3 = var5;
        var8 = var9.useCallback;
        var7 = new Array(1);
        var7[0] = var5;
        var6 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var1 = var1.current;
                var3 = null;
                var1 = var3 != var1;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot1;
                var2 = var2.current;
                var1 = var3 != var2;
case 2:
                if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var1 = global;
                var3 = var1.Promise;
                var2 = var3.all;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var5 = 2;
                var1 = var8[var5];
                var6 = undefined;
                var10 = var7.bind(var6)(var1);
                var9 = var10.measureViewRefInWindow;
                var1 = _closure2_slot1;
                var9 = var9.bind(var10)(var1);
                var1 = new Array(2);
                var1[0] = var9;
                var5 = var8[var5];
                var6 = var7.bind(var6)(var5);
                var5 = var6.measureViewRefInWindow;
                var4 = _closure2_slot0;
                var4 = var5.bind(var6)(var4);
                var1[1] = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var6 = arg1;
                        var4 = var6[Symbol.iterator];
                        var6 = var4().next;
                        var2 = var6().value;
                        var3 = var4;
                        var1 = undefined;
                        var5 = var3 === var1;
                        var3 = undefined;
                        if(var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var3 = var2;
case 6:
                        var2 = undefined;
                        if(var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var7 = var6().value;
                        var6 = var4;
                        var6 = var6 === var1;
                        var2 = undefined;
                        var5 = var6;
                        if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 10:
                        var2 = var7;
                        var5 = var6;
case 8:
                        if(var5) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                        var4.return();
case 11:
                        var4 = null;
                        if(!(var4 != var3)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                        if(!(var4 != var2)) { _fun0002_ip = 13; continue _fun0002 }
case 15:
                        var5 = var3.y;
                        var3 = var3.height;
                        var4 = var5 + var3;
                        var3 = var2.y;
                        var2 = var2.height;
                        var2 = var3 + var2;
                        var2 = var2 > var5;
                        if(!var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                        var2 = var3 < var4;
case 16:
                        var4 = _closure2_slot2;
                        var4 = var4.current;
                        if(!(var2 !== var4)) { _fun0002_ip = 13; continue _fun0002 }
case 18:
                        var4 = _closure2_slot2;
                        var4['current'] = var2;
                        var4 = _closure2_slot3;
                        var3 = var4.set;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var5 = 3;
                        var5 = var7[var5];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.withTiming;
                        var5 = 1;
                        if(!var2) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                        var5 = 0;
case 19:
                        var2 = {};
                        var8 = 200;
                        var2['duration'] = var8;
                        var2 = var6.bind(var7)(var5, var2);
                        var2 = var3.bind(var4)(var2);
case 13:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var7 = var8.bind(var9)(var6, var7);
        var _closure2_slot4 = var7;
        var8 = var9.useCallback;
        var6 = new Array(1);
        var6[0] = var7;
        var1 = function() {
            var1 = global;
            var3 = var1.requestAnimationFrame;
            var1 = undefined;
            var2 = function() {
                var2 = _closure2_slot4;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var6 = var8.bind(var9)(var1, var6);
        var1 = {};
        var1['handleScroll'] = var7;
        var1['handleToggle'] = var6;
        var1['progress'] = var5;
        var1['officialServerRef'] = var4;
        var1['scrollViewRef'] = var3;
        var1['isOfficialServerVisibleRef'] = var2;
        return var1;
    };
    var3['useAnimatedFooter'] = var2;
    return var1;
})();