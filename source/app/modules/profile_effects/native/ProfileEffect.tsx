// app/modules/profile_effects/native/ProfileEffect.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var8 = var7[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var8);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var8 = var2.View;
    var _closure1_slot5 = var8;
    var8 = var2.Dimensions;
    var _closure1_slot6 = var8;
    var2 = var2.Image;
    var _closure1_slot7 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot9 = var2;
    var2 = 5;
    var2 = var7[var2];
    var8 = var6.bind(var1)(var2);
    var5 = var8.createStyles;
    var2 = {};
    var10 = 'absolute';
    var9 = {'position': 'absolute', 'width': '100%', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0, 'flex': 1, 'justifyContent': 'flex-start'};
    var2['profileEffects'] = var9;
    var9 = {};
    var9['position'] = var10;
    var2['effect'] = var9;
    var2 = var5.bind(var8)(var2);
    var _closure1_slot10 = var2;
    var2 = function usePreloadProfileEffect(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot4;
        var4 = var5.useMemo;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var1 = global;
            var3 = var1.Set;
            var4 = _closure2_slot0;
            var2 = var4.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.src;
                return var1;
            };
            var5 = var2.bind(var4)(var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var6 = var2;
            var1 = new var6[var3](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        var _closure2_slot1 = var2;
        var3 = var5.useRef;
        var3 = var3.bind(var5)(var2);
        var _closure2_slot2 = var3;
        var4 = var5.useRef;
        var3 = false;
        var3 = var4.bind(var5)(var3);
        var _closure2_slot3 = var3;
        var6 = var5.useEffect;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() {
            var3 = _closure2_slot2;
            var1 = _closure2_slot1;
            var3['current'] = var1;
            var2 = _closure2_slot3;
            var3 = var1.size;
            var1 = 0;
            var1 = var1 === var3;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var2 = var6.bind(var5)(var2, var4);
        var4 = var5.useCallback;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot3;
                var2 = var2.current;
                if(var2) { _fun0001_ip = 65; continue _fun0001 }
 15:
                var2 = _closure2_slot2;
                var5 = var2.current;
                var4 = var5.delete;
                var3 = arg1;
                var3 = var4.bind(var5)(var3);
                var2 = var2.current;
                var3 = var2.size;
                var2 = 0;
                if(!(var2 === var3)) { _fun0001_ip = 65; continue _fun0001 }
 53:
                var2 = _closure2_slot3;
                var1 = true;
                var2['current'] = var1;
 65:
                var1 = undefined;
                return var1;
            }
        };
        var1 = new Array(0);
        var2 = var4.bind(var5)(var2, var1);
        var1 = {};
        var1['loaded'] = var3;
        var1['onLayerLoaded'] = var2;
        return var1;
    };
    var _closure1_slot11 = var2;
    var5 = function useProfileDimensions() {
        var6 = _closure1_slot4;
        var4 = var6.useState;
        var3 = 0;
        var8 = var4.bind(var6)(var3);
        var7 = _closure1_slot3;
        var5 = undefined;
        var4 = 2;
        var5 = var7.bind(var5)(var8, var4);
        var3 = var5[var3];
        var4 = 1;
        var4 = var5[var4];
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var4 = var5.get;
        var2 = 'window';
        var2 = var4.bind(var5)(var2);
        var4 = var2.height;
        var5 = var6.useCallback;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.nativeEvent;
            var1 = var1.layout;
            var3 = var1.width;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var1 = new Array(0);
        var2 = var5.bind(var6)(var2, var1);
        var1 = {};
        var1['height'] = var4;
        var1['width'] = var3;
        var1['onLayout'] = var2;
        return var1;
    };
    var _closure1_slot12 = var5;
    var5 = function ProfileEffect(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.profileEffectConfig;
            var _closure2_slot0 = var2;
            var15 = var1.replayOnNavigationFocus;
            var4 = undefined;
            if(!(var15 === var4)) { _fun0002_ip = 29; continue _fun0002 }
 27:
            var15 = false;
 29:
            var _closure2_slot1 = var15;
            var9 = var1.style;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var3 = _closure1_slot10;
            var8 = var3.bind(var4)();
            var3 = _closure1_slot12;
            var3 = var3.bind(var4)();
            var6 = var3.width;
            _closure2_slot2 = var6;
            var6 = var3.onLayout;
            var3 = var2.accessibilityLabel;
            _closure2_slot3 = var3;
            var13 = _closure1_slot4;
            var7 = var13.useMemo;
            var2 = var2.effects;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.sortEffectLayers;
                var1 = _closure2_slot0;
                var1 = var1.effects;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var7.bind(var13)(var2, var3);
            var2 = _closure1_slot11;
            var3 = var2.bind(var4)(var7);
            var2 = var3.loaded;
            _closure2_slot4 = var2;
            var3 = var3.onLayerLoaded;
            _closure2_slot5 = var3;
            var12 = var13.useState;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 7;
            var3 = var11[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.ENTRY_DELAY;
            var3 = -var3;
            var14 = var12.bind(var13)(var3);
            var12 = _closure1_slot3;
            var3 = 2;
            var12 = var12.bind(var4)(var14, var3);
            var3 = 0;
            var3 = var12[var3];
            _closure2_slot6 = var3;
            var3 = 1;
            var3 = var12[var3];
            _closure2_slot7 = var3;
            var12 = _closure1_slot1;
            var3 = 8;
            var3 = var11[var3];
            var3 = var12.bind(var4)(var3);
            var14 = var13.useCallback;
            var12 = new Array(1);
            var12[0] = var2;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var3 = _closure2_slot4;
                    var3 = var3.current;
                    if(!var3) { _fun0003_ip = 40; continue _fun0003 }
 24:
                    var3 = _closure2_slot7;
                    var2 = undefined;
                    var1 = function(arg1) {
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var1 = var1 + var2;
                        return var1;
                    };
                    var1 = var3.bind(var2)(var1);
 40:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var14.bind(var13)(var2, var12);
            var2 = var3.bind(var4)(var2);
            var14 = var2.stop;
            _closure2_slot8 = var14;
            var2 = var2.reset;
            _closure2_slot9 = var2;
            var3 = 9;
            var3 = var11[var3];
            var10 = var10.bind(var4)(var3);
            var3 = var10.useFocusEffect;
            var12 = var13.useCallback;
            var11 = new Array(3);
            var11[0] = var15;
            var11[1] = var14;
            var11[2] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0004_ip = 61; continue _fun0004 }
 10:
                    var4 = _closure2_slot7;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var3 = var3.ENTRY_DELAY;
                    var3 = -var3;
                    var3 = var4.bind(var2)(var3);
                    var1 = _closure2_slot9;
                    var1 = var1.bind(var2)();
 61:
                    var1 = function() {
                        var2 = _closure2_slot8;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    return var1;
                }
            };
            var2 = var12.bind(var13)(var2, var11);
            var2 = var3.bind(var10)(var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var10 = var8.profileEffects;
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var1['style'] = var8;
            var8 = 'none';
            var1['pointerEvents'] = var8;
            var1['onLayout'] = var6;
            var6 = var7.map;
            var5 = function(arg1, arg2) {
                var8 = arg1;
                var2 = var8.src;
                var1 = arg2;
                var5 = var2 + var1;
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 10;
                var2 = var9[var2];
                var4 = undefined;
                var7 = var3.bind(var4)(var2);
                var3 = var7.shouldAnimate;
                var2 = _closure2_slot6;
                var7 = var3.bind(var7)(var8, var2);
                var3 = _closure1_slot9;
                var2 = _closure1_slot1;
                var1 = 11;
                var1 = var9[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1['layerConfig'] = var8;
                var1['animate'] = var7;
                var7 = _closure2_slot2;
                var1['width'] = var7;
                var7 = _closure2_slot3;
                var1['accessibilityLabel'] = var7;
                var7 = _closure2_slot5;
                var1['onLoad'] = var7;
                var6 = _closure2_slot4;
                var6 = var6.current;
                var1['loaded'] = var6;
                var1 = var3.bind(var4)(var2, var1, var5);
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var5;
    var5 = function StaticEffect(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var2 = var3.config;
            var13 = var3.bannerAdjustment;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0005_ip = 24; continue _fun0005 }
 22:
            var13 = 0;
 24:
            var18 = var3.useThumbnail;
            var _closure2_slot0 = var18;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var3 = _closure1_slot10;
            var7 = var3.bind(var4)();
            var16 = var2.reducedMotionSrc;
            _closure2_slot1 = var16;
            var17 = var2.thumbnailPreviewSrc;
            _closure2_slot2 = var17;
            var10 = var2.accessibilityLabel;
            var2 = _closure1_slot12;
            var2 = var2.bind(var4)();
            var15 = var2.width;
            _closure2_slot3 = var15;
            var6 = var2.onLayout;
            var8 = _closure1_slot4;
            var2 = var8.useState;
            var12 = 0;
            var9 = var2.bind(var8)(var12);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var9, var2);
            var14 = var3[var12];
            var2 = 1;
            var2 = var3[var2];
            _closure2_slot4 = var2;
            var3 = var8.useEffect;
            var2 = new Array(4);
            var2[0] = var16;
            var2[1] = var17;
            var2[2] = var15;
            var2[3] = var18;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = _closure2_slot3;
                    var3 = 0;
                    if(!(var3 !== var4)) { _fun0006_ip = 62; continue _fun0006 }
 15:
                    var5 = _closure1_slot7;
                    var4 = var5.getSize;
                    var3 = _closure2_slot0;
                    if(var3) { _fun0006_ip = 41; continue _fun0006 }
 35:
                    var3 = _closure2_slot1;
                    _fun0006_ip = 45; continue _fun0006;
 41:
                    var3 = _closure2_slot2;
 45:
                    var2 = function(arg1, arg2) {
                        var3 = _closure2_slot4;
                        var2 = _closure2_slot3;
                        var1 = arg1;
                        var2 = var2 / var1;
                        var1 = arg2;
                        var2 = var1 * var2;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = function() {
                        var3 = _closure2_slot4;
                        var4 = _closure2_slot3;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var5.bind(var1)(var2);
                        var2 = var2.DEFAULT_PROFILE_EFFECT_WH_RATIO;
                        var2 = var4 / var2;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var4.bind(var5)(var3, var2, var1);
 62:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            if(!(var12 !== var14)) { _fun0005_ip = 352; continue _fun0005 }
 206:
            var1 = {};
            var8 = var7.profileEffects;
            var1['style'] = var8;
            var8 = 'none';
            var1['pointerEvents'] = var8;
            var1['onLayout'] = var6;
            var9 = _closure1_slot9;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 13;
            var5 = var11[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {'resizeMode': 'cover', 'resizeMethod': 'resize', 'enableAnimation': true};
            var11 = {};
            if(!var18) { _fun0005_ip = 278; continue _fun0005 }
 275:
            var16 = var17;
 278:
            var11['uri'] = var16;
            var5['source'] = var11;
            var5['alt'] = var10;
            var5['height'] = var14;
            var5['width'] = var15;
            var11 = var7.effect;
            var10 = new Array(2);
            var10[0] = var11;
            var11 = {};
            var11['width'] = var15;
            var11['height'] = var14;
            var12 = var12 - var13;
            var11['top'] = var12;
            var10[1] = var11;
            var5['style'] = var10;
            var5 = var9.bind(var4)(var8, var5);
            var1['children'] = var5;
            _fun0005_ip = 381; continue _fun0005;
 352:
            var5 = {};
            var7 = var7.profileEffects;
            var5['style'] = var7;
            var7 = 'none';
            var5['pointerEvents'] = var7;
            var5['onLayout'] = var6;
            var1 = var5;
 381:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var5;
    var5 = 16;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/profile_effects/native/ProfileEffect.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function _default(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var7 = arg1;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 14;
            var1 = var4[var1];
            var6 = undefined;
            var4 = var2.bind(var6)(var1);
            var2 = var4.useProfileEffectPreset;
            var1 = var7.profileEffectId;
            var2 = var2.bind(var4)(var1);
            var1 = null;
            var4 = var1 == var2;
            var8 = undefined;
            if(var4) { _fun0007_ip = 61; continue _fun0007 }
 56:
            var8 = var2.config;
 61:
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 15;
            var2 = var9[var2];
            var11 = var5.bind(var6)(var2);
            var10 = var11.useStateFromStores;
            var2 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var1 = _closure1_slot8;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var2 = var10.bind(var11)(var4, var2);
            var4 = 6;
            var4 = var9[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.usePotentiallyRandomizedConfig;
            var8 = var4.bind(var5)(var8);
            var4 = var1 == var8;
            var1 = null;
            if(var4) { _fun0007_ip = 233; continue _fun0007 }
 143:
            if(var2) { _fun0007_ip = 188; continue _fun0007 }
 146:
            var2 = var7.useThumbnail;
            if(var2) { _fun0007_ip = 188; continue _fun0007 }
 155:
            var5 = _closure1_slot9;
            var4 = _closure1_slot13;
            var2 = {};
            var2['profileEffectConfig'] = var8;
            var13 = var2;
            var12 = var7;
            var9 = copyDataProperties(var13, var12);
            var2 = var5.bind(var6)(var4, var2);
            _fun0007_ip = 230; continue _fun0007;
 188:
            var5 = _closure1_slot9;
            var4 = _closure1_slot14;
            var3 = {};
            var3['config'] = var8;
            var8 = var7.bannerAdjustment;
            var3['bannerAdjustment'] = var8;
            var7 = var7.useThumbnail;
            var3['useThumbnail'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 230:
            var1 = var2;
 233:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['usePreloadProfileEffect'] = var2;
    return var1;
})();