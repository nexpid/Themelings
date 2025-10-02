// app/design/components/LottieIcon/native/LottieIcon.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.animation;
            var _closure2_slot0 = var3;
            var11 = var2.dotLottie;
            var13 = var2.size;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = 'md';
case 2:
            var10 = var2.color;
            if(!(var10 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 3;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.colors;
            var10 = var3.INTERACTIVE_NORMAL;
case 4:
            var9 = var2.opacity;
            if(!(var9 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = 1;
case 6:
            var12 = var2.markers;
            var3 = var2.layers;
            var _closure2_slot1 = var3;
            var20 = var2.width;
            var7 = var2.height;
            var14 = var2.autoPlay;
            var _closure2_slot2 = var14;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 4;
            var2 = var8[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.ICON_SIZE;
            var6 = var2[var13];
            var8 = var12.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.name;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var8.bind(var12)(var2);
            var15 = var2.start;
            _closure2_slot3 = var15;
            var2 = var2.duration;
            var17 = var15 + var2;
            _closure2_slot4 = var17;
            var8 = var12.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.name;
                var1 = 'easteregg';
                var1 = var1 === var2;
                return var1;
            };
            var18 = var8.bind(var12)(var2);
            var12 = null;
            var2 = var12 == var18;
            var8 = undefined;
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = var18.start;
case 8:
            var19 = var12 != var8;
            var2 = -1;
            var16 = var2;
            if(!var19) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var16 = var8;
case 10:
            _closure2_slot5 = var16;
            var19 = var12 == var18;
            var8 = undefined;
            if(var19) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = var18.duration;
case 12:
            var18 = var12 != var8;
            if(!var18) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = var8;
case 14:
            var2 = var16 + var2;
            _closure2_slot6 = var2;
            var19 = _closure1_slot3;
            var8 = var19.useRef;
            var12 = var8.bind(var19)(var12);
            _closure2_slot7 = var12;
            var18 = var19.useContext;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var8 = 5;
            var8 = var22[var8];
            var8 = var21.bind(var4)(var8);
            var8 = var8.AccessibilityPreferencesContext;
            var8 = var18.bind(var19)(var8);
            var8 = var8.reducedMotion;
            var18 = var8.enabled;
            _closure2_slot8 = var18;
            var8 = 'custom';
            var13 = var8 === var13;
            var8 = {};
            var19 = var6;
            if(!var13) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var19 = var20;
case 16:
            var8['width'] = var19;
            if(!var13) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var6 = var7;
case 18:
            var8['height'] = var6;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 6;
            var6 = var13[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.useToken;
            var19 = var6.bind(var7)(var10);
            _closure2_slot9 = var19;
            var6 = _closure1_slot3;
            var10 = var6.useMemo;
            var7 = new Array(2);
            var7[0] = var19;
            var7[1] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot9;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var4 = _closure2_slot1;
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var1 = {};
                        var2 = arg1;
                        var1['keypath'] = var2;
                        var2 = _closure2_slot9;
                        var1['color'] = var2;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 20:
                    return var1;
                }
            };
            var10 = var10.bind(var6)(var3, var7);
            var7 = var6.useCallback;
            var3 = new Array(5);
            var3[0] = var18;
            var3[1] = var15;
            var3[2] = var17;
            var3[3] = var16;
            var3[4] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = global;
                    var2 = var1.Math;
                    var1 = var2.random;
                    var2 = var1.bind(var2)();
                    var1 = 0.05;
                    var2 = var2 < var1;
                    var3 = _closure2_slot8;
                    if(var3) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    if(!var2) { _fun0003_ip = 24; continue _fun0003 }
case 5:
                    var3 = _closure2_slot5;
                    var2 = 0;
                    if(!(!(var3 >= var2))) { _fun0003_ip = 25; continue _fun0003 }
case 24:
                    var2 = _closure2_slot7;
                    var5 = var2.current;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var4 = var5.play;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot4;
                    var2 = var4.bind(var5)(var3, var2);
                    _fun0003_ip = 26; continue _fun0003;
case 25:
                    var2 = _closure2_slot7;
                    var5 = var2.current;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0003_ip = 26; continue _fun0003 }
case 28:
                    var4 = var5.play;
                    var3 = _closure2_slot5;
                    var2 = _closure2_slot6;
                    var2 = var4.bind(var5)(var3, var2);
                    _fun0003_ip = 26; continue _fun0003;
case 22:
                    var2 = _closure2_slot7;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 26; continue _fun0003 }
case 29:
                    var2 = var3.play;
                    var1 = _closure2_slot4;
                    var1 = var2.bind(var3)(var1, var1);
case 26:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var7.bind(var6)(var2, var3);
            _closure2_slot10 = var7;
            var17 = var6.useImperativeHandle;
            var16 = new Array(1);
            var16[0] = var7;
            var3 = arg2;
            var2 = function() {
                var1 = {};
                var2 = function play() {
                    var2 = _closure2_slot10;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    return var1;
                };
                var1['play'] = var2;
                return var1;
            };
            var2 = var17.bind(var6)(var3, var2, var16);
            var3 = var6.useCallback;
            var2 = new Array(3);
            var2[0] = var15;
            var2[1] = var14;
            var2[2] = var7;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var2 = _closure2_slot7;
                    var4 = var2.current;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var3 = var4.play;
                    var2 = _closure2_slot3;
                    var2 = var3.bind(var4)(var2, var2);
                    _fun0004_ip = 32; continue _fun0004;
case 30:
                    var2 = _closure2_slot10;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot4;
            var1 = {};
            var1['style'] = var8;
            var6 = _closure1_slot1;
            var5 = 7;
            var5 = var13[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['ref'] = var12;
            var5['source'] = var11;
            var5['colorFilters'] = var10;
            var10 = true;
            var5['hardwareAccelerationAndroid'] = var10;
            var10 = false;
            var5['loop'] = var10;
            var5['onAnimationLoaded'] = var7;
            var7 = 'cover';
            var5['resizeMode'] = var7;
            var7 = new Array(2);
            var7[0] = var8;
            var8 = {};
            var8['opacity'] = var9;
            var7[1] = var8;
            var5['style'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/LottieIcon/native/LottieIcon.tsx';
    var4 = var5.bind(var6)(var4);
    var3['LottieIcon'] = var2;
    return var1;
})();