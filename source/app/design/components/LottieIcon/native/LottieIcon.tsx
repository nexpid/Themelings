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
 0:
            var2 = arg1;
            var3 = var2.animation;
            var _closure2_slot0 = var3;
            var11 = var2.dotLottie;
            var13 = var2.size;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0001_ip = 36; continue _fun0001 }
 32:
            var13 = 'md';
 36:
            var10 = var2.color;
            if(!(var10 === var4)) { _fun0001_ip = 79; continue _fun0001 }
 45:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 3;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.colors;
            var10 = var3.INTERACTIVE_NORMAL;
 79:
            var9 = var2.opacity;
            if(!(var9 === var4)) { _fun0001_ip = 91; continue _fun0001 }
 88:
            var9 = 1;
 91:
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
            if(var2) { _fun0001_ip = 266; continue _fun0001 }
 261:
            var8 = var18.start;
 266:
            var19 = var12 != var8;
            var2 = -1;
            var16 = var2;
            if(!var19) { _fun0001_ip = 285; continue _fun0001 }
 282:
            var16 = var8;
 285:
            _closure2_slot5 = var16;
            var19 = var12 == var18;
            var8 = undefined;
            if(var19) { _fun0001_ip = 303; continue _fun0001 }
 298:
            var8 = var18.duration;
 303:
            var18 = var12 != var8;
            if(!var18) { _fun0001_ip = 313; continue _fun0001 }
 310:
            var2 = var8;
 313:
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
            if(!var13) { _fun0001_ip = 410; continue _fun0001 }
 407:
            var19 = var20;
 410:
            var8['width'] = var19;
            if(!var13) { _fun0001_ip = 420; continue _fun0001 }
 417:
            var6 = var7;
 420:
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
 0:
                    var3 = _closure2_slot9;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 41; continue _fun0002 }
 18:
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
 41:
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
 0:
                    var1 = global;
                    var2 = var1.Math;
                    var1 = var2.random;
                    var2 = var1.bind(var2)();
                    var1 = 0.05;
                    var2 = var2 < var1;
                    var3 = _closure2_slot8;
                    if(var3) { _fun0003_ip = 129; continue _fun0003 }
 42:
                    if(!var2) { _fun0003_ip = 55; continue _fun0003 }
 45:
                    var3 = _closure2_slot5;
                    var2 = 0;
                    if(!(!(var3 >= var2))) { _fun0003_ip = 92; continue _fun0003 }
 55:
                    var2 = _closure2_slot7;
                    var5 = var2.current;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0003_ip = 160; continue _fun0003 }
 70:
                    var4 = var5.play;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot4;
                    var2 = var4.bind(var5)(var3, var2);
                    _fun0003_ip = 160; continue _fun0003;
 92:
                    var2 = _closure2_slot7;
                    var5 = var2.current;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0003_ip = 160; continue _fun0003 }
 107:
                    var4 = var5.play;
                    var3 = _closure2_slot5;
                    var2 = _closure2_slot6;
                    var2 = var4.bind(var5)(var3, var2);
                    _fun0003_ip = 160; continue _fun0003;
 129:
                    var2 = _closure2_slot7;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 160; continue _fun0003 }
 144:
                    var2 = var3.play;
                    var1 = _closure2_slot4;
                    var1 = var2.bind(var3)(var1, var1);
 160:
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
 0:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0004_ip = 43; continue _fun0004 }
 10:
                    var2 = _closure2_slot7;
                    var4 = var2.current;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0004_ip = 53; continue _fun0004 }
 25:
                    var3 = var4.play;
                    var2 = _closure2_slot3;
                    var2 = var3.bind(var4)(var2, var2);
                    _fun0004_ip = 53; continue _fun0004;
 43:
                    var2 = _closure2_slot10;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 53:
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