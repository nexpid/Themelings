// app/modules/collectibles/profile_effects/native/ProfileEffect.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function usePreloadProfileEffect(arg1) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var6 = _closure1_slot4;
        var5 = var6.useMemo;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
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
        var4 = var5.bind(var6)(var3, var4);
        var _closure2_slot1 = var4;
        var5 = _closure1_slot4;
        var3 = var5.useRef;
        var3 = var3.bind(var5)(var4);
        var _closure2_slot2 = var3;
        var6 = _closure1_slot4;
        var5 = var6.useRef;
        var3 = false;
        var3 = var5.bind(var6)(var3);
        var _closure2_slot3 = var3;
        var7 = _closure1_slot4;
        var6 = var7.useEffect;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = function() {
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
        var4 = var6.bind(var7)(var4, var5);
        var5 = _closure1_slot4;
        var4 = var5.useCallback;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot3;
                var2 = var2.current;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot2;
                var5 = var2.current;
                var4 = var5.delete;
                var3 = arg1;
                var3 = var4.bind(var5)(var3);
                var2 = var2.current;
                var3 = var2.size;
                var2 = 0;
                if(!(var2 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var2 = _closure2_slot3;
                var1 = true;
                var2['current'] = var1;
case 2:
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
    var _closure1_slot12 = var2;
    var1 = function useProfileDimensions() {
        var5 = _closure1_slot4;
        var4 = var5.useState;
        var3 = 0;
        var7 = var4.bind(var5)(var3);
        var6 = _closure1_slot3;
        var5 = undefined;
        var4 = 2;
        var6 = var6.bind(var5)(var7, var4);
        var3 = var6[var3];
        var4 = 1;
        var4 = var6[var4];
        var _closure2_slot0 = var4;
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var4 = 7;
        var4 = var7[var4];
        var4 = var6.bind(var5)(var4);
        var4 = var4.bind(var5)();
        var4 = var4.height;
        var6 = _closure1_slot4;
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
    var _closure1_slot13 = var1;
    var1 = function StaticEffect(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = var2.profileEffect;
            var13 = var2.bannerAdjustment;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var13 = 0;
case 5:
            var18 = var2.useThumbnail;
            var _closure2_slot0 = var18;
            var2 = var2.thumbnailUrlOverride;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var6 = _closure1_slot10;
            var7 = var6.bind(var4)();
            var16 = var3.reducedMotionSrc;
            _closure2_slot1 = var16;
            var17 = var3.thumbnailPreviewSrc;
            var10 = var3.accessibilityLabel;
            var3 = _closure1_slot13;
            var3 = var3.bind(var4)();
            var15 = var3.width;
            _closure2_slot2 = var15;
            var6 = var3.onLayout;
            var8 = _closure1_slot4;
            var3 = var8.useState;
            var12 = 0;
            var9 = var3.bind(var8)(var12);
            var8 = _closure1_slot3;
            var3 = 2;
            var8 = var8.bind(var4)(var9, var3);
            var14 = var8[var12];
            var3 = 1;
            var3 = var8[var3];
            _closure2_slot3 = var3;
            var3 = null;
            if(!(var3 != var2)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var17 = var2;
case 7:
            _closure2_slot4 = var17;
            var8 = _closure1_slot4;
            var3 = var8.useEffect;
            var2 = new Array(4);
            var2[0] = var16;
            var2[1] = var17;
            var2[2] = var15;
            var2[3] = var18;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure2_slot2;
                    var3 = 0;
                    if(!(var3 !== var4)) { _fun0003_ip = 9; continue _fun0003 }
case 3:
                    var5 = _closure1_slot6;
                    var4 = var5.getSize;
                    var3 = _closure2_slot0;
                    if(var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var3 = _closure2_slot1;
                    _fun0003_ip = 12; continue _fun0003;
case 10:
                    var3 = _closure2_slot4;
case 12:
                    var2 = function(arg1, arg2) {
                        var3 = _closure2_slot3;
                        var2 = _closure2_slot2;
                        var1 = arg1;
                        var2 = var2 / var1;
                        var1 = arg2;
                        var2 = var1 * var2;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = function() {
                        var3 = _closure2_slot3;
                        var4 = _closure2_slot2;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 15;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var5.bind(var1)(var2);
                        var2 = var2.DEFAULT_PROFILE_EFFECT_WH_RATIO;
                        var2 = var4 / var2;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var4.bind(var5)(var3, var2, var1);
case 9:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            if(!(var12 !== var14)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var1 = {};
            var8 = var7.profileEffects;
            var1['style'] = var8;
            var8 = 'none';
            var1['pointerEvents'] = var8;
            var1['onLayout'] = var6;
            var9 = _closure1_slot9;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 16;
            var5 = var11[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {'resizeMode': 'cover', 'resizeMethod': 'resize', 'enableAnimation': true};
            var11 = {};
            if(!var18) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var16 = var17;
case 15:
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
            _fun0002_ip = 17; continue _fun0002;
case 13:
            var5 = {};
            var7 = var7.profileEffects;
            var5['style'] = var7;
            var7 = 'none';
            var5['pointerEvents'] = var7;
            var5['onLayout'] = var6;
            var1 = var5;
case 17:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.View;
    var _closure1_slot5 = var9;
    var5 = var5.Image;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var11 = 'absolute';
    var10 = {'position': 'absolute', 'width': '100%', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0, 'flex': 1, 'justifyContent': 'flex-start'};
    var5['profileEffects'] = var10;
    var10 = {};
    var10['position'] = var11;
    var5['effect'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot10 = var5;
    var5 = function ProfileEffect(arg1) {
        var1 = arg1;
        var2 = var1.profileEffect;
        var _closure2_slot0 = var2;
        var3 = var1.replayOnNavigationFocus;
        var9 = var1.style;
        var13 = var1.paused;
        var _closure2_slot1 = var13;
        var3 = _closure1_slot10;
        var4 = undefined;
        var8 = var3.bind(var4)();
        var3 = _closure1_slot13;
        var3 = var3.bind(var4)();
        var6 = var3.width;
        var _closure2_slot2 = var6;
        var6 = var3.onLayout;
        var3 = var2.accessibilityLabel;
        var _closure2_slot3 = var3;
        var10 = _closure1_slot4;
        var7 = var10.useMemo;
        var2 = var2.effects;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.sortEffectLayers;
            var1 = _closure2_slot0;
            var1 = var1.effects;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var7 = var7.bind(var10)(var2, var3);
        var2 = _closure1_slot12;
        var3 = var2.bind(var4)(var7);
        var2 = var3.loaded;
        var _closure2_slot4 = var2;
        var3 = var3.onLayerLoaded;
        var _closure2_slot5 = var3;
        var14 = _closure1_slot4;
        var12 = var14.useState;
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var3 = 9;
        var3 = var11[var3];
        var3 = var10.bind(var4)(var3);
        var3 = var3.PROFILE_EFFECT_INTRO_DELAY;
        var3 = -var3;
        var14 = var12.bind(var14)(var3);
        var12 = _closure1_slot3;
        var3 = 2;
        var12 = var12.bind(var4)(var14, var3);
        var3 = 0;
        var3 = var12[var3];
        var _closure2_slot6 = var3;
        var3 = 1;
        var3 = var12[var3];
        var _closure2_slot7 = var3;
        var12 = _closure1_slot1;
        var3 = 10;
        var3 = var11[var3];
        var3 = var12.bind(var4)(var3);
        var15 = _closure1_slot4;
        var14 = var15.useCallback;
        var12 = new Array(1);
        var12[0] = var2;
        var2 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var3 = _closure2_slot4;
                var3 = var3.current;
                if(!var3) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var3 = _closure2_slot7;
                var2 = undefined;
                var1 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var1 + var2;
                    return var1;
                };
                var1 = var3.bind(var2)(var1);
case 18:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var14.bind(var15)(var2, var12);
        var2 = var3.bind(var4)(var2);
        var12 = var2.stop;
        var _closure2_slot8 = var12;
        var2 = var2.reset;
        var _closure2_slot9 = var2;
        var3 = 11;
        var3 = var11[var3];
        var14 = var10.bind(var4)(var3);
        var11 = var14.useStateFromStores;
        var3 = _closure1_slot8;
        var10 = new Array(1);
        var10[0] = var3;
        var3 = function() {
            var2 = _closure1_slot8;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = var11.bind(var14)(var10, var3);
        var _closure2_slot10 = var3;
        var14 = _closure1_slot4;
        var11 = var14.useRef;
        var10 = null;
        var10 = var11.bind(var14)(var10);
        var _closure2_slot11 = var10;
        var14 = _closure1_slot4;
        var11 = var14.useEffect;
        var10 = new Array(3);
        var10[0] = var3;
        var10[1] = var12;
        var10[2] = var2;
        var3 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure2_slot11;
                var3 = var2.current;
                var2 = null;
                if(!(var2 === var3)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                var3 = _closure2_slot11;
                var2 = _closure2_slot10;
                var3['current'] = var2;
                _fun0005_ip = 22; continue _fun0005;
case 20:
                var2 = _closure2_slot11;
                var3 = var2.current;
                var2 = _closure2_slot10;
                if(!(var3 !== var2)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                var4 = _closure2_slot10;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 12;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var2 = var2.AppStates;
                var2 = var2.ACTIVE;
                if(!(var4 !== var2)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                var2 = _closure2_slot8;
                var2 = var2.bind(var3)();
                _fun0005_ip = 26; continue _fun0005;
case 24:
                var2 = _closure2_slot9;
                var2 = var2.bind(var3)();
case 26:
                var2 = _closure2_slot11;
                var1 = _closure2_slot10;
                var2['current'] = var1;
case 22:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var11.bind(var14)(var3, var10);
        var11 = _closure1_slot4;
        var10 = var11.useEffect;
        var3 = new Array(3);
        var3[0] = var13;
        var3[1] = var12;
        var3[2] = var2;
        var2 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                var3 = _closure2_slot9;
                var2 = undefined;
                var2 = var3.bind(var2)();
                _fun0006_ip = 29; continue _fun0006;
case 27:
                var2 = _closure2_slot8;
                var1 = undefined;
                var1 = var2.bind(var1)();
case 29:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var10.bind(var11)(var2, var3);
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
            var2 = 13;
            var2 = var9[var2];
            var4 = undefined;
            var7 = var3.bind(var4)(var2);
            var3 = var7.shouldAnimate;
            var2 = _closure2_slot6;
            var7 = var3.bind(var7)(var8, var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot1;
            var1 = 14;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['layerConfig'] = var8;
            var1['animate'] = var7;
            var7 = _closure2_slot1;
            var1['paused'] = var7;
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
    };
    var _closure1_slot11 = var5;
    var5 = 18;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/profile_effects/native/ProfileEffect.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function WrappedProfileEffect(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var7 = arg1;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 17;
            var1 = var8[var1];
            var6 = undefined;
            var2 = var2.bind(var6)(var1);
            var1 = var7.skuId;
            var5 = var2.bind(var6)(var1);
            var4 = _closure1_slot0;
            var1 = 11;
            var1 = var8[var1];
            var10 = var4.bind(var6)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot7;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var2 = var9.bind(var10)(var2, var1);
            var1 = 8;
            var1 = var8[var1];
            var4 = var4.bind(var6)(var1);
            var1 = var4.usePotentiallyRandomizedProfileEffect;
            var8 = var1.bind(var4)(var5);
            var1 = null;
            var4 = var1 == var8;
            if(var4) { _fun0007_ip = 30; continue _fun0007 }
case 31:
            if(var2) { _fun0007_ip = 32; continue _fun0007 }
case 33:
            var2 = var7.useThumbnail;
            if(var2) { _fun0007_ip = 32; continue _fun0007 }
case 34:
            var5 = _closure1_slot9;
            var4 = _closure1_slot11;
            var2 = {};
            var2['profileEffect'] = var8;
            var12 = var2;
            var11 = var7;
            var9 = copyDataProperties(var12, var11);
            var2 = var5.bind(var6)(var4, var2);
            _fun0007_ip = 35; continue _fun0007;
case 32:
            var5 = _closure1_slot9;
            var4 = _closure1_slot14;
            var3 = {};
            var3['profileEffect'] = var8;
            var8 = var7.bannerAdjustment;
            var3['bannerAdjustment'] = var8;
            var8 = var7.useThumbnail;
            var3['useThumbnail'] = var8;
            var7 = var7.thumbnailUrlOverride;
            var3['thumbnailUrlOverride'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 35:
            var1 = var2;
case 30:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['usePreloadProfileEffect'] = var2;
    return var1;
})();