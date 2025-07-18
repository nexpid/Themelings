// app/modules/profile_effects/useClock.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var5 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var5;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot2 = var4;
    var4 = 3;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_effects/useClock.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = arguments[1];
            var _closure2_slot0 = var3;
            var6 = undefined;
            if(!(var2 === var6)) { _fun0001_ip = 20; continue _fun0001 }
 18:
            var2 = {};
 20:
            var7 = var2.minInterval;
            if(!(var7 === var6)) { _fun0001_ip = 40; continue _fun0001 }
 30:
            var7 = 41.666666666666664;
 40:
            var _closure2_slot1 = var7;
            var15 = var2.allowableMinInterval;
            var _closure2_slot2 = var15;
            var12 = var2.droppedFramesCallbackThreshold;
            var _closure2_slot3 = var12;
            var11 = var2.droppedFramesCallback;
            var _closure2_slot4 = var11;
            var13 = var2.droppedFramesResetTime;
            if(!(var13 === var6)) { _fun0001_ip = 90; continue _fun0001 }
 84:
            var13 = 3000;
 90:
            var _closure2_slot5 = var13;
            var _closure2_slot6 = var6;
            var _closure2_slot7 = var6;
            var _closure2_slot8 = var6;
            var _closure2_slot9 = var6;
            var _closure2_slot10 = var6;
            var _closure2_slot11 = var6;
            var _closure2_slot12 = var6;
            var _closure2_slot13 = var6;
            var _closure2_slot14 = var6;
            var _closure2_slot15 = var6;
            var10 = _closure1_slot2;
            var2 = var10.useRef;
            var2 = var2.bind(var10)(var7);
            _closure2_slot6 = var2;
            var2 = var10.useRef;
            var8 = 0;
            var2 = var2.bind(var10)(var8);
            _closure2_slot7 = var2;
            var2 = var10.useRef;
            var2 = var2.bind(var10)(var6);
            _closure2_slot8 = var2;
            var2 = var10.useRef;
            var2 = var2.bind(var10)(var6);
            _closure2_slot9 = var2;
            var4 = var10.useRef;
            var2 = true;
            var2 = var4.bind(var10)(var2);
            _closure2_slot10 = var2;
            var4 = var10.useRef;
            var4 = var4.bind(var10)(var8);
            _closure2_slot11 = var4;
            var4 = var10.useRef;
            var4 = var4.bind(var10)(var6);
            _closure2_slot12 = var4;
            var9 = var10.useCallback;
            var8 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot11;
                    var2 = 0;
                    var3['current'] = var2;
                    var2 = _closure2_slot12;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 64; continue _fun0002 }
 30:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var2 = _closure2_slot12;
                    var3 = var2.current;
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var1 = _closure2_slot12;
                    var1['current'] = var2;
 64:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = new Array(0);
            var14 = var9.bind(var10)(var8, var4);
            _closure2_slot13 = var14;
            var9 = var10.useCallback;
            var8 = function() {
                var3 = _closure2_slot10;
                var1 = false;
                var3['current'] = var1;
                var3 = global;
                var5 = var3.cancelAnimationFrame;
                var1 = _closure2_slot7;
                var4 = var1.current;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var3 = var3.clearTimeout;
                var2 = _closure2_slot12;
                var2 = var2.current;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var4 = new Array(0);
            var4 = var9.bind(var10)(var8, var4);
            _closure2_slot14 = var4;
            var9 = var10.useCallback;
            var8 = new Array(6);
            var8[0] = var15;
            var8[1] = var14;
            var8[2] = var13;
            var8[3] = var12;
            var8[4] = var11;
            var8[5] = var3;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = arg1;
                    var2 = _closure2_slot10;
                    var2 = var2.current;
                    if(!var2) { _fun0003_ip = 413; continue _fun0003 }
 21:
                    var2 = _closure2_slot8;
                    var2 = var2.current;
                    var7 = null;
                    if(!(var7 == var2)) { _fun0003_ip = 46; continue _fun0003 }
 36:
                    var2 = _closure2_slot8;
                    var2['current'] = var4;
 46:
                    var2 = _closure2_slot9;
                    var2 = var2.current;
                    if(!(var7 == var2)) { _fun0003_ip = 69; continue _fun0003 }
 59:
                    var2 = _closure2_slot9;
                    var2['current'] = var4;
 69:
                    var2 = _closure2_slot9;
                    var2 = var2.current;
                    var5 = var4 - var2;
                    var2 = _closure2_slot8;
                    var2 = var2.current;
                    var6 = var4 - var2;
                    var3 = global;
                    var10 = var3.Math;
                    var9 = var10.min;
                    var2 = _closure2_slot2;
                    var2 = var7 != var2;
                    var8 = 120;
                    if(!var2) { _fun0003_ip = 126; continue _fun0003 }
 122:
                    var8 = _closure2_slot2;
 126:
                    var2 = _closure2_slot6;
                    var2 = var2.current;
                    var8 = var9.bind(var10)(var8, var2);
                    var2 = 1.5;
                    var2 = var2 * var8;
                    if(!(var6 > var2)) { _fun0003_ip = 335; continue _fun0003 }
 162:
                    var6 = _closure2_slot11;
                    var2 = var6.current;
                    var9 = 1;
                    var2 = var2 + var9;
                    var6['current'] = var2;
                    var2 = _closure2_slot12;
                    var2 = var2.current;
                    if(!(var7 != var2)) { _fun0003_ip = 219; continue _fun0003 }
 197:
                    var8 = var3.clearTimeout;
                    var2 = _closure2_slot12;
                    var6 = var2.current;
                    var2 = undefined;
                    var2 = var8.bind(var2)(var6);
 219:
                    var8 = _closure2_slot12;
                    var11 = var3.setTimeout;
                    var10 = _closure2_slot13;
                    var2 = _closure2_slot5;
                    var6 = undefined;
                    var2 = var11.bind(var6)(var10, var2);
                    var8['current'] = var2;
                    var2 = _closure2_slot3;
                    if(!(var7 != var2)) { _fun0003_ip = 335; continue _fun0003 }
 259:
                    var2 = _closure2_slot11;
                    var8 = var2.current;
                    var2 = _closure2_slot3;
                    if(!(var8 > var2)) { _fun0003_ip = 335; continue _fun0003 }
 276:
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var9];
                    var9 = var8.bind(var6)(var2);
                    var2 = _closure2_slot4;
                    var8 = var7 != var2;
                    var7 = 'useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit';
                    var7 = var9.bind(var6)(var8, var7);
                    var2 = var2.bind(var6)();
                    if(!var2) { _fun0003_ip = 335; continue _fun0003 }
 323:
                    var6 = _closure2_slot11;
                    var2 = 0;
                    var6['current'] = var2;
 335:
                    var2 = _closure2_slot8;
                    var2['current'] = var4;
                    var2 = _closure2_slot6;
                    var6 = var2.current;
                    var2 = 3;
                    var2 = var6 - var2;
                    if(!(var5 >= var2)) { _fun0003_ip = 386; continue _fun0003 }
 365:
                    var2 = _closure2_slot9;
                    var2['current'] = var4;
                    var4 = _closure2_slot0;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var5);
 386:
                    var2 = _closure2_slot7;
                    var4 = var3.requestAnimationFrame;
                    var3 = _closure2_slot15;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var2['current'] = var1;
 413:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var9.bind(var10)(var3, var8);
            _closure2_slot15 = var3;
            var9 = var10.useCallback;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var3 = _closure2_slot10;
                var1 = true;
                var3['current'] = var1;
                var3 = _closure2_slot9;
                var1 = undefined;
                var3['current'] = var1;
                var3 = _closure2_slot7;
                var4 = global;
                var4 = var4.requestAnimationFrame;
                var2 = _closure2_slot15;
                var2 = var4.bind(var1)(var2);
                var3['current'] = var2;
                return var1;
            };
            var3 = var9.bind(var10)(var3, var8);
            var9 = var10.useEffect;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure2_slot6;
                var1 = _closure2_slot1;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var7 = var9.bind(var10)(var7, var8);
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 2;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var1 = function() {
                var2 = _closure2_slot7;
                var3 = global;
                var4 = var3.requestAnimationFrame;
                var3 = _closure2_slot15;
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var2['current'] = var1;
                var1 = function() {
                    var2 = _closure2_slot14;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    return var1;
                };
                return var1;
            };
            var1 = var5.bind(var6)(var1);
            var1 = {};
            var1['stop'] = var4;
            var1['reset'] = var3;
            var1['ticking'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();