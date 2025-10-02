// app/modules/remixing/native/animation/useKeyFrames.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = function getValue(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = 'current';
            var1 = var1 in var2;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.value;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var1 = var2.current;
case 4:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var4 = function setValue(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = arg2;
            var3 = 'current';
            var3 = var3 in var2;
            if(!var3) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var2['current'] = var1;
case 5:
            var3 = 'value';
            var3 = var3 in var2;
            if(!var3) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var2['value'] = var1;
case 7:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var4 = function getLastFrame(arg1) {
        var2 = arg1;
        var3 = var2.length;
        var1 = 1;
        var1 = var3 - var1;
        var1 = var2[var1];
        var2 = var1.timing;
        var1 = var1.duration;
        var1 = var2 + var1;
        return var1;
    };
    var _closure1_slot6 = var4;
    var4 = function animateProperty(arg1, arg2, arg3, arg4) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var9 = arg3;
            var8 = arg4;
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var8;
            var2 = var3.reduce;
            var1 = function(arg1, arg2, arg3) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var4 = arg2;
                    var5 = _closure2_slot1;
                    var2 = var4.timing;
                    if(!(var5 >= var2)) { _fun0004_ip = 9; continue _fun0004 }
case 5:
                    var2 = {};
                    var7 = var2;
                    var6 = var4;
                    var4 = copyDataProperties(var7, var6);
                    var4 = _closure2_slot0;
                    var5 = arg3;
                    var3 = 1;
                    var3 = var5 - var3;
                    var3 = var4[var3];
                    var4 = var3.value;
                    var3 = 'previousValue';
                    var2[var3] = var4;
                    var1 = var2;
case 9:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var3 = var1.value;
            var5 = var1.timing;
            var7 = var1.duration;
            var10 = var1.previousValue;
            var6 = var1.easing;
            var1 = undefined;
            if(!(var1 === var6)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 1;
            var2 = var12[var2];
            var2 = var11.bind(var1)(var2);
            var2 = var2.Easing;
            var6 = var2.linear;
case 10:
            if(!(!(var5 > var8))) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var2 = global;
            var13 = var2.Math;
            var12 = var13.abs;
            var11 = _closure1_slot4;
            var11 = var11.bind(var1)(var4);
            var11 = var3 - var11;
            var12 = var12.bind(var13)(var11);
            var11 = 0.001;
            if(!(!(var12 > var11))) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var11 = _closure1_slot4;
            var11 = var11.bind(var1)(var4);
            if(!(var3 !== var11)) { _fun0003_ip = 12; continue _fun0003 }
case 16:
            var11 = _closure1_slot5;
            var11 = var11.bind(var1)(var4, var3);
            _fun0003_ip = 12; continue _fun0003;
case 14:
            var11 = null;
            if(!(var11 != var10)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var9 = var10;
case 17:
            var10 = var7 + var5;
            var11 = var10 - var8;
            var10 = 0;
            if(!(!(var11 < var10))) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var5 = var8 - var5;
            var5 = var5 / var7;
            var8 = var6.bind(var1)(var5);
            var6 = _closure1_slot5;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 2;
            var5 = var10[var5];
            var7 = var7.bind(var1)(var5);
            var5 = var7.LERP;
            var5 = var5.bind(var7)(var9, var3, var8);
            var5 = var6.bind(var1)(var4, var5);
            _fun0003_ip = 12; continue _fun0003;
case 19:
            var2 = _closure1_slot5;
            var2 = var2.bind(var1)(var4, var3);
case 12:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var4 = {'autoplay': true, 'delay': 0, 'loop': false};
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/animation/useKeyFrames.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var17 = arg1;
            var15 = arg2;
            var6 = arguments[2];
            var _closure2_slot0 = var17;
            var _closure2_slot1 = var15;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var6 = {};
case 21:
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var _closure2_slot14 = var5;
            var2 = function stop() {
                var3 = _closure2_slot12;
                var2 = false;
                var3['current'] = var2;
                var2 = _closure2_slot7;
                var1 = var2.stop;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var _closure2_slot15 = var2;
            var4 = _closure1_slot3;
            var10 = var4.useReducedMotion;
            var4 = {};
            var18 = _closure1_slot8;
            var19 = var4;
            var7 = copyDataProperties(var19, var18);
            var19 = var4;
            var18 = var6;
            var6 = copyDataProperties(var19, var18);
            var14 = var4.autoplay;
            var6 = var4.delay;
            _closure2_slot2 = var6;
            var6 = var4.loop;
            _closure2_slot3 = var6;
            var6 = var4.loops;
            _closure2_slot4 = var6;
            var6 = var4.callback;
            _closure2_slot5 = var6;
            var12 = var4.reducedMotionFreezePercent;
            _closure2_slot6 = var12;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var7 = 3;
            var4 = var16[var7];
            var6 = var13.bind(var5)(var4);
            var4 = var6.useClockValue;
            var6 = var4.bind(var6)();
            _closure2_slot7 = var6;
            var4 = var16[var7];
            var9 = var13.bind(var5)(var4);
            var8 = var9.useValue;
            var4 = -1;
            var4 = var8.bind(var9)(var4);
            _closure2_slot8 = var4;
            var4 = var16[var7];
            var9 = var13.bind(var5)(var4);
            var8 = var9.useValue;
            var11 = var17.map;
            var4 = function(arg1) {
                var3 = _closure1_slot4;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var4 = var11.bind(var17)(var4);
            var4 = var8.bind(var9)(var4);
            _closure2_slot9 = var4;
            var4 = var16[var7];
            var8 = var13.bind(var5)(var4);
            var4 = var8.useValue;
            var9 = false;
            var4 = var4.bind(var8)(var9);
            _closure2_slot10 = var4;
            var4 = var16[var7];
            var8 = var13.bind(var5)(var4);
            var4 = var8.useValue;
            var11 = 0;
            var4 = var4.bind(var8)(var11);
            _closure2_slot11 = var4;
            var4 = var16[var7];
            var8 = var13.bind(var5)(var4);
            var4 = var8.useValue;
            var8 = var4.bind(var8)(var14);
            _closure2_slot12 = var8;
            var4 = var16[var7];
            var13 = var13.bind(var5)(var4);
            var4 = var13.useValue;
            var4 = var4.bind(var13)(var15);
            _closure2_slot13 = var4;
            var14 = _closure1_slot1;
            var13 = 4;
            var13 = var16[var13];
            var14 = var14.bind(var5)(var13);
            var13 = function() {
                var1 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = _closure2_slot8;
                        var3 = null;
                        if(!(var3 != var2)) { _fun0006_ip = 21; continue _fun0006 }
case 23:
                        var4 = _closure2_slot8;
                        var2 = var4.dispose;
                        var2 = var2.bind(var4)();
case 21:
                        var2 = _closure2_slot10;
                        if(!(var3 != var2)) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                        var4 = _closure2_slot10;
                        var2 = var4.dispose;
                        var2 = var2.bind(var4)();
case 24:
                        var2 = _closure2_slot11;
                        if(!(var3 != var2)) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                        var4 = _closure2_slot11;
                        var2 = var4.dispose;
                        var2 = var2.bind(var4)();
case 26:
                        var2 = _closure2_slot12;
                        if(!(var3 != var2)) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                        var4 = _closure2_slot12;
                        var2 = var4.dispose;
                        var2 = var2.bind(var4)();
case 28:
                        var2 = _closure2_slot13;
                        if(!(var3 != var2)) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                        var2 = _closure2_slot13;
                        var1 = var2.dispose;
                        var1 = var1.bind(var2)();
case 30:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var13 = var14.bind(var5)(var13);
            var14 = var15.reduce;
            var13 = _closure1_slot6;
            var11 = var15[var11];
            var13 = var13.bind(var5)(var11);
            var11 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var4 = _closure1_slot6;
                    var3 = undefined;
                    var2 = arg2;
                    var2 = var4.bind(var3)(var2);
                    if(!(var2 > var1)) { _fun0007_ip = 21; continue _fun0007 }
case 32:
                    var1 = var2;
case 21:
                    return var1;
                }
            };
            var11 = var14.bind(var15)(var11, var13);
            _closure2_slot14 = var11;
            if(!var10) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var11 = null;
            var10 = var11 != var12;
case 33:
            if(!var10) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var8['current'] = var9;
            var8 = var6.stop;
            var8 = var8.bind(var6)();
            var9 = var4.current;
            var8 = var9.forEach;
            var4 = function(arg1, arg2) {
                var3 = arg2;
                var6 = _closure1_slot7;
                var2 = _closure2_slot0;
                var9 = var2[var3];
                var2 = _closure2_slot9;
                var2 = var2.current;
                var8 = var2[var3];
                var2 = _closure2_slot14;
                var1 = _closure2_slot6;
                var7 = var2 * var1;
                var1 = undefined;
                var10 = arg1;
                var11 = undefined;
                var2 = var11[var6](var10, var9, var8, var7, var6);
                return var1;
            };
            var4 = var8.bind(var9)(var4);
case 35:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var5 = var4.bind(var5)(var1);
            var4 = var5.useValueEffect;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot12;
                    var3 = var3.current;
                    var4 = false;
                    if(!(var4 === var3)) { _fun0008_ip = 37; continue _fun0008 }
case 38:
                    var5 = _closure2_slot7;
                    var3 = var5.stop;
                    var3 = var3.bind(var5)();
                    _fun0008_ip = 39; continue _fun0008;
case 37:
                    var3 = _closure2_slot8;
                    var5 = var3.current;
                    var3 = -1;
                    if(!(var3 === var5)) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                    var5 = _closure2_slot8;
                    var3 = _closure2_slot7;
                    var3 = var3.current;
                    var5['current'] = var3;
case 40:
                    var3 = _closure2_slot7;
                    var5 = var3.current;
                    var3 = _closure2_slot8;
                    var3 = var3.current;
                    var5 = var5 - var3;
                    var _closure3_slot0 = var5;
                    var3 = _closure2_slot10;
                    var3 = var3.current;
                    if(!(var4 === var3)) { _fun0008_ip = 42; continue _fun0008 }
case 43:
                    var3 = _closure2_slot2;
                    if(!(!(var5 < var3))) { _fun0008_ip = 39; continue _fun0008 }
case 42:
                    var6 = _closure2_slot14;
                    var3 = _closure2_slot10;
                    var7 = var3.current;
                    var4 = 0;
                    if(var7) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                    var4 = _closure2_slot2;
case 44:
                    var4 = var6 + var4;
                    if(!(!(var5 > var4))) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                    var4 = _closure2_slot10;
                    var4 = var4.current;
                    var3 = 0;
                    if(var4) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                    var3 = _closure2_slot2;
case 48:
                    var _closure3_slot1 = var3;
                    var3 = _closure2_slot13;
                    var5 = var3.current;
                    var4 = var5.forEach;
                    var3 = function(arg1, arg2) {
                        var2 = arg2;
                        var6 = _closure1_slot7;
                        var3 = _closure2_slot0;
                        var9 = var3[var2];
                        var1 = _closure2_slot9;
                        var1 = var1.current;
                        var8 = var1[var2];
                        var2 = _closure3_slot0;
                        var1 = _closure3_slot1;
                        var7 = var2 - var1;
                        var1 = undefined;
                        var10 = arg1;
                        var11 = undefined;
                        var2 = var11[var6](var10, var9, var8, var7, var6);
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
                    _fun0008_ip = 39; continue _fun0008;
case 46:
                    var3 = _closure2_slot3;
                    if(var3) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                    var3 = _closure2_slot13;
                    var5 = var3.current;
                    var4 = var5.forEach;
                    var3 = function(arg1, arg2) {
                        var3 = arg2;
                        var6 = _closure1_slot7;
                        var2 = _closure2_slot0;
                        var9 = var2[var3];
                        var2 = _closure2_slot9;
                        var2 = var2.current;
                        var8 = var2[var3];
                        var7 = _closure2_slot14;
                        var1 = undefined;
                        var10 = arg1;
                        var11 = undefined;
                        var2 = var11[var6](var10, var9, var8, var7, var6);
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure2_slot5;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var4 = _closure2_slot5;
                    var3 = undefined;
                    var3 = var4.bind(var3)();
case 52:
                    var4 = _closure2_slot15;
                    var3 = undefined;
                    var3 = var4.bind(var3)();
                    _fun0008_ip = 39; continue _fun0008;
case 50:
                    var4 = _closure2_slot8;
                    var3 = _closure2_slot7;
                    var3 = var3.current;
                    var4['current'] = var3;
                    var4 = _closure2_slot0;
                    var3 = var4.forEach;
                    var2 = function(arg1, arg2) {
                        var4 = _closure1_slot5;
                        var1 = _closure2_slot9;
                        var2 = var1.current;
                        var1 = arg2;
                        var3 = var2[var1];
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var4.bind(var1)(var2, var3);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot10;
                    var2 = true;
                    var3['current'] = var2;
                    var3 = _closure2_slot11;
                    var4 = var3.current;
                    var2 = 1;
                    var2 = var4 + var2;
                    var3['current'] = var2;
                    var2 = _closure2_slot4;
                    var3 = null;
                    var2 = var3 != var2;
                    if(!var2) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var4 = _closure2_slot11;
                    var5 = var4.current;
                    var4 = _closure2_slot4;
                    var2 = var5 >= var4;
case 54:
                    if(!var2) { _fun0008_ip = 39; continue _fun0008 }
case 56:
                    var2 = _closure2_slot5;
                    if(!(var3 != var2)) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                    var3 = _closure2_slot5;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
case 57:
                    var2 = _closure2_slot15;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 39:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var6, var1);
            var1 = new Array(2);
            var3 = function() {
                var3 = _closure2_slot12;
                var2 = true;
                var3['current'] = var2;
                var3 = _closure2_slot10;
                var2 = false;
                var3['current'] = var2;
                var3 = _closure2_slot8;
                var2 = -1;
                var3['current'] = var2;
                var3 = _closure2_slot9;
                var5 = _closure2_slot0;
                var4 = var5.map;
                var2 = function(arg1) {
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var2 = var4.bind(var5)(var2);
                var3['current'] = var2;
                var3 = _closure2_slot13;
                var2 = _closure2_slot1;
                var3['current'] = var2;
                var2 = _closure2_slot7;
                var1 = var2.start;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();