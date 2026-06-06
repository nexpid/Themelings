// app/modules/quests/native/QuestOrbsRewardModal.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function StaticOrb() {
        var1 = _closure1_slot24;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot15;
        var2 = _closure1_slot8;
        var1 = {};
        var6 = {'width': '100%', 'height': '100%'};
        var1['style'] = var6;
        var7 = _closure1_slot15;
        var11 = _closure1_slot1;
        var12 = _closure1_slot2;
        var5 = 19;
        var5 = var12[var5];
        var6 = var11.bind(var4)(var5);
        var5 = {};
        var9 = {};
        var10 = 25;
        var10 = var12[var10];
        var10 = var11.bind(var4)(var10);
        var9['uri'] = var10;
        var5['source'] = var9;
        var8 = var8.animatedOrb;
        var5['style'] = var8;
        var8 = false;
        var5['fade'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function AnimatedOrbContainer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var10 = var2.isAppActive;
            var2 = _closure1_slot24;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var8 = false;
            var3 = var2.bind(var3)(var8);
            var2 = _closure1_slot3;
            var7 = 2;
            var2 = var2.bind(var4)(var3, var7);
            var18 = 0;
            var5 = var2[var18];
            var _closure2_slot0 = var5;
            var3 = 1;
            var2 = var2[var3];
            var _closure2_slot1 = var2;
            var6 = _closure1_slot5;
            var2 = var6.useState;
            var6 = var2.bind(var6)(var8);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var6, var7);
            var17 = var2[var18];
            var _closure2_slot2 = var17;
            var2 = var2[var3];
            var _closure2_slot3 = var2;
            var8 = _closure1_slot5;
            var6 = var8.useState;
            var2 = true;
            var6 = var6.bind(var8)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var6, var7);
            var6 = var2[var18];
            var2 = var2[var3];
            var _closure2_slot4 = var2;
            var8 = _closure1_slot5;
            var7 = var8.useCallback;
            var3 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var11 = var7.bind(var8)(var3, var2);
            var8 = _closure1_slot5;
            var7 = var8.useCallback;
            var3 = function() {
                var3 = _closure2_slot3;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var14 = var7.bind(var8)(var3, var2);
            var7 = _closure1_slot5;
            var3 = var7.useEffect;
            var2 = new Array(2);
            var2[0] = var5;
            var2[1] = var17;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 2:
                    var2 = undefined;
                    return var2;
case 4:
                    var2 = global;
                    var5 = var2.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        var3 = _closure2_slot4;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = 1450;
                    var2 = var5.bind(var4)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var1 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot16;
            var2 = _closure1_slot8;
            var1 = {};
            var16 = '100%';
            var7 = {'width': '100%', 'height': '100%'};
            var1['style'] = var7;
            var7 = !var5;
            if(!var7) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var7 = !var17;
case 5:
            if(!var7) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var9 = _closure1_slot15;
            var8 = _closure1_slot8;
            var5 = {};
            var15 = {};
            var15['height'] = var16;
            var5['style'] = var15;
            var7 = var9.bind(var4)(var8, var5);
case 7:
            var5 = new Array(3);
            var5[0] = var7;
            var9 = _closure1_slot15;
            var8 = _closure1_slot22;
            var7 = {};
            var16 = _closure1_slot1;
            var19 = _closure1_slot2;
            var15 = 26;
            var15 = var19[var15];
            var15 = var16.bind(var4)(var15);
            var7['uri'] = var15;
            var16 = var12.animatedOrb;
            var15 = new Array(2);
            var15[0] = var16;
            var16 = var6;
            if(var6) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var16 = !var17;
case 9:
            if(!var16) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var17 = {};
            var17['opacity'] = var18;
            var16 = var17;
case 11:
            var15[1] = var16;
            var7['style'] = var15;
            var7['onLoad'] = var14;
            var14 = !var6;
            if(!var14) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var14 = var10;
case 13:
            var7['animate'] = var14;
            var7 = var9.bind(var4)(var8, var7);
            var5[1] = var7;
            if(!var6) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var9 = _closure1_slot15;
            var8 = _closure1_slot22;
            var7 = {};
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 27;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var7['uri'] = var13;
            var13 = var12.animatedOrb;
            var12 = new Array(1);
            var12[0] = var13;
            var7['style'] = var12;
            var7['onLoad'] = var11;
            var7['animate'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 15:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var9 = var4.bind(var1)(var7);
    var _closure1_slot5 = var9;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot6 = var7;
    var7 = var4.StyleSheet;
    var _closure1_slot7 = var7;
    var4 = var4.View;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RewardFilterTypes;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Orientation;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot15 = var7;
    var4 = var4.jsxs;
    var _closure1_slot16 = var4;
    var4 = 14;
    var7 = var6[var4];
    var10 = var5.bind(var1)(var7);
    var8 = var10.createStyles;
    var7 = {};
    var11 = {'alignSelf': 'flex-start', 'marginHorizontal': null, 'zIndex': 999};
    var12 = 15;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var11['marginHorizontal'] = var14;
    var7['closeButton'] = var11;
    var11 = {};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var11['tintColor'] = var12;
    var7['closeButtonIcon'] = var11;
    var7 = var8.bind(var10)(var7);
    var _closure1_slot17 = var7;
    var7 = var6[var4];
    var10 = var5.bind(var1)(var7);
    var8 = var10.createStyles;
    var7 = function() {
        var1 = {};
        var3 = {};
        var2 = 1;
        var3['flex'] = var2;
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var4 = 15;
        var8 = var7[var4];
        var5 = undefined;
        var8 = var6.bind(var5)(var8);
        var8 = var8.colors;
        var8 = var8.BACKGROUND_BASE_LOW;
        var3['backgroundColor'] = var8;
        var1['root'] = var3;
        var3 = _closure1_slot7;
        var2 = var3.absoluteFillObject;
        var1['background'] = var2;
        var2 = {'justifyContent': 'center', 'alignItems': 'center'};
        var8 = 'center';
        var9 = var7[var4];
        var9 = var6.bind(var5)(var9);
        var9 = var9.colors;
        var9 = var9.BACKGROUND_BASE_LOW;
        var2['backgroundColor'] = var9;
        var10 = var3.absoluteFillObject;
        var11 = var2;
        var3 = copyDataProperties(var11, var10);
        var1['loading'] = var2;
        var2 = {'flexDirection': 'row', 'alignItems': 'flex-end', 'justifyContent': 'flex-end'};
        var1['header'] = var2;
        var2 = {};
        var3 = 2;
        var2['flex'] = var3;
        var1['main'] = var2;
        var2 = {};
        var3 = 3;
        var2['flex'] = var3;
        var1['animation'] = var2;
        var2 = {'flex': 2, 'flexDirection': 'column', 'justifyContent': 'center'};
        var9 = var7[var4];
        var9 = var6.bind(var5)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_16;
        var2['gap'] = var9;
        var1['body'] = var2;
        var2 = {};
        var2['textAlign'] = var8;
        var8 = var7[var4];
        var8 = var6.bind(var5)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_32;
        var2['marginHorizontal'] = var8;
        var1['title'] = var2;
        var2 = {};
        var8 = var7[var4];
        var8 = var6.bind(var5)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_24;
        var2['padding'] = var8;
        var4 = var7[var4];
        var4 = var6.bind(var5)(var4);
        var4 = var4.spacing;
        var4 = var4.PX_16;
        var2['gap'] = var4;
        var1['buttonsContainer'] = var2;
        var2 = {};
        var4 = {};
        var4['translateY'] = var3;
        var3 = new Array(1);
        var3[0] = var4;
        var2['transform'] = var3;
        var1['orbsIconAndroid'] = var2;
        var2 = {'marginTop': 0, 'marginRight': 3};
        var1['orbsIconIOS'] = var2;
        return var1;
    };
    var7 = var8.bind(var10)(var7);
    var _closure1_slot18 = var7;
    var7 = function CancelButton() {
        var2 = _closure1_slot17;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var _closure2_slot0 = var5;
        var3 = _closure1_slot15;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 16;
        var1 = var10[var1];
        var1 = var9.bind(var4)(var1);
        var2 = var1.HeaderBackButton;
        var1 = {};
        var7 = function onPress() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.popWithKey;
            var2 = 'QuestOrbsRewardModal';
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['onPress'] = var7;
        var6 = function backImage() {
            var4 = _closure1_slot15;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 17;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.XSmallIcon;
            var1 = {};
            var5 = 'lg';
            var1['size'] = var5;
            var5 = _closure2_slot0;
            var6 = var5.closeButtonIcon;
            var5 = new Array(1);
            var5[0] = var6;
            var1['style'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var1['backImage'] = var6;
        var6 = 18;
        var7 = var10[var6];
        var7 = var9.bind(var4)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var4)(var6);
        var6 = var6.t;
        var6 = var6.cpT0Cq;
        var6 = var7.bind(var8)(var6);
        var1['accessibilityLabel'] = var6;
        var6 = false;
        var1['labelVisible'] = var6;
        var5 = var5.closeButton;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var7;
    var8 = var9.memo;
    var7 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var8 = var2.uri;
            var _closure2_slot0 = var8;
            var1 = var2.onLoad;
            var7 = var2.animate;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var7 = true;
case 17:
            var9 = _closure1_slot5;
            var6 = var9.useEffect;
            var4 = new Array(1);
            var4[0] = var8;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.preload;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var6.bind(var9)(var3, var4);
            var4 = _closure1_slot15;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 19;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var6 = {};
            var6['uri'] = var8;
            var2['source'] = var6;
            var6 = {'width': '100%', 'height': '100%'};
            var2['style'] = var6;
            var6 = 'cover';
            var2['resizeMode'] = var6;
            var2['enableAnimation'] = var7;
            var2['onLoad'] = var1;
            var1 = false;
            var2['usesSmallCache'] = var1;
            var2['fade'] = var1;
            var1 = global;
            var1 = var1.HermesInternal;
            var6 = var1.concat;
            var1 = 'orb-animate-';
            var1 = var6.bind(var1)(var7);
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot20 = var7;
    var8 = var9.memo;
    var7 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var6 = var1.uri;
            var5 = var1.onLoad;
            var14 = var1.animate;
            var4 = undefined;
            if(!(var14 === var4)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var14 = true;
case 19:
            var _closure2_slot0 = var14;
            var _closure2_slot1 = var4;
            var7 = _closure1_slot5;
            var2 = var7.useRef;
            var1 = null;
            var7 = var2.bind(var7)(var1);
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 20;
            var10 = var8[var1];
            var11 = var2.bind(var4)(var10);
            var10 = var11.useAPNGPlayerControls;
            var13 = var10.bind(var11)(var7);
            _closure2_slot1 = var13;
            var12 = _closure1_slot5;
            var11 = var12.useEffect;
            var10 = new Array(2);
            var10[0] = var14;
            var10[1] = var13;
            var9 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    if(var1) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var1 = var2.stop;
                    var1 = var1.bind(var2)();
                    _fun0005_ip = 23; continue _fun0005;
case 21:
                    var1 = var2.play;
                    var1 = var1.bind(var2)();
case 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var11.bind(var12)(var9, var10);
            var3 = _closure1_slot15;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.APNGPlayer;
            var1 = {};
            var1['ref'] = var7;
            var1['url'] = var6;
            var6 = false;
            var1['autoplay'] = var6;
            var6 = {'width': '100%', 'height': '100%'};
            var1['style'] = var6;
            var1['onLoad'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot21 = var7;
    var8 = var9.memo;
    var7 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var10 = var1.uri;
            var6 = var1.style;
            var9 = var1.onLoad;
            var8 = var1.animate;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0006_ip = 24; continue _fun0006 }
case 25:
            var8 = true;
case 24:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 21;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isAndroid;
            var1 = var1.bind(var2)();
            if(var1) { _fun0006_ip = 26; continue _fun0006 }
case 27:
            var7 = _closure1_slot20;
            _fun0006_ip = 28; continue _fun0006;
case 26:
            var7 = _closure1_slot21;
case 28:
            var3 = _closure1_slot15;
            var2 = _closure1_slot8;
            var1 = {'style': null, 'renderToHardwareTextureAndroid': true, 'needsOffscreenAlphaCompositing': true};
            var1['style'] = var6;
            var6 = _closure1_slot15;
            var5 = {};
            var5['uri'] = var10;
            var5['onLoad'] = var9;
            var5['animate'] = var8;
            var5 = var6.bind(var4)(var7, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot22 = var7;
    var8 = var9.memo;
    var7 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var6 = var1.useReducedMotion;
            var11 = var1.style;
            var12 = var1.onStaticBgLoad;
            var10 = var1.onAnimatedBgLoad;
            var7 = var1.isAppActive;
            var4 = _closure1_slot16;
            var1 = _closure1_slot5;
            var3 = var1.Fragment;
            var2 = {};
            var9 = _closure1_slot15;
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var1 = 19;
            var5 = var17[var1];
            var1 = undefined;
            var8 = var16.bind(var1)(var5);
            var5 = {};
            var14 = {};
            var15 = 22;
            var15 = var17[var15];
            var15 = var16.bind(var1)(var15);
            var14['uri'] = var15;
            var5['source'] = var14;
            var5['style'] = var11;
            var14 = 'cover';
            var5['resizeMode'] = var14;
            var5['onLoad'] = var12;
            var8 = var9.bind(var1)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var6 = !var6;
            if(!var6) { _fun0007_ip = 29; continue _fun0007 }
case 30:
            var6 = var7;
case 29:
            if(!var6) { _fun0007_ip = 31; continue _fun0007 }
case 32:
            var9 = _closure1_slot15;
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 23;
            var7 = var15[var7];
            var7 = var8.bind(var1)(var7);
            var8 = var7.VideoComponent;
            var7 = {'source': null, 'style': null, 'resizeMode': 'cover', 'onLoad': null, 'disableFocus': true, 'playInBackground': true, 'preventsDisplaySleepDuringVideoPlayback': false};
            var12 = {};
            var14 = _closure1_slot1;
            var13 = 24;
            var13 = var15[var13];
            var13 = var14.bind(var1)(var13);
            var12['uri'] = var13;
            var7['source'] = var12;
            var7['style'] = var11;
            var7['onLoad'] = var10;
            var6 = var9.bind(var1)(var8, var7);
case 31:
            var5[1] = var6;
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot23 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'height': '130%', 'width': '130%', 'left': '-15%', 'top': '-15%', 'pointerEvents': 'none'};
    var4['animatedOrb'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot24 = var4;
    var4 = 42;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestOrbsRewardModal.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function _default(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var1 = var1.quest;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var2 = _closure1_slot18;
            var14 = var2.bind(var4)();
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 28;
            var2 = var7[var3];
            var9 = var5.bind(var4)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var1 = _closure1_slot9;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var15 = var8.bind(var9)(var6, var2);
            var2 = 29;
            var2 = var7[var2];
            var6 = var5.bind(var4)(var2);
            var2 = var6.useFetchVirtualCurrencyBalance;
            var2 = var2.bind(var6)();
            var2 = var2.balance;
            var _closure2_slot0 = var2;
            var8 = _closure1_slot5;
            var6 = var8.useState;
            var12 = false;
            var8 = var6.bind(var8)(var12);
            var6 = _closure1_slot3;
            var11 = 2;
            var8 = var6.bind(var4)(var8, var11);
            var29 = 0;
            var6 = var8[var29];
            var10 = 1;
            var8 = var8[var10];
            var _closure2_slot1 = var8;
            var9 = _closure1_slot5;
            var8 = var9.useState;
            var9 = var8.bind(var9)(var12);
            var8 = _closure1_slot3;
            var9 = var8.bind(var4)(var9, var11);
            var8 = var9[var29];
            var9 = var9[var10];
            var _closure2_slot2 = var9;
            var9 = var7[var3];
            var12 = var5.bind(var4)(var9);
            var11 = var12.useStateFromStores;
            var9 = _closure1_slot11;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var11.bind(var12)(var10, var9);
            var9 = 30;
            var9 = var7[var9];
            var9 = var5.bind(var4)(var9);
            var9 = var9.AppStates;
            var9 = var9.ACTIVE;
            var20 = var10 === var9;
            var3 = var7[var3];
            var9 = var5.bind(var4)(var3);
            var7 = var9.useStateFromStores;
            var3 = _closure1_slot10;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var7.bind(var9)(var5, var3);
            var3 = var1.userStatus;
            var18 = null;
            var5 = var18 == var3;
            var30 = undefined;
            if(var5) { _fun0008_ip = 33; continue _fun0008 }
case 34:
            var30 = var3.orbQuantityClaimed;
case 33:
            if(!(var18 == var30)) { _fun0008_ip = 35; continue _fun0008 }
case 36:
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 31;
            var3 = var9[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.getQuestOrbRewardQuantityForUser;
            var1 = var1.config;
            var30 = var3.bind(var5)(var1, var7);
case 35:
            var7 = _closure1_slot5;
            var5 = var7.useEffect;
            var3 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 32;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.lockOrientation;
                var1 = _closure1_slot13;
                var1 = var1.PORTRAIT;
                var1 = var2.bind(var3)(var1);
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 32;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.restoreDefaultOrientation;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                return var1;
            };
            var1 = new Array(0);
            var1 = var5.bind(var7)(var3, var1);
            var7 = _closure1_slot5;
            var5 = var7.useCallback;
            var3 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var11 = var5.bind(var7)(var3, var1);
            var7 = _closure1_slot5;
            var5 = var7.useCallback;
            var3 = function() {
                var3 = _closure2_slot2;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var10 = var5.bind(var7)(var3, var1);
            var7 = _closure1_slot5;
            var5 = var7.useCallback;
            var3 = function() {
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 11;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var7.bind(var1)(var2);
                var3 = var4.popWithKey;
                var2 = 'QuestOrbsRewardModal';
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot0;
                var2 = 33;
                var2 = var8[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openCollectiblesShopMobile;
                var2 = {};
                var6 = 34;
                var9 = var8[var6];
                var9 = var7.bind(var1)(var9);
                var10 = var9.MOBILE_ORBS_REWARD_CLAIM_MODAL;
                var9 = new Array(1);
                var9[0] = var10;
                var2['analyticsLocations'] = var9;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.MOBILE_ORBS_REWARD_CLAIM_MODAL;
                var2['analyticsSource'] = var6;
                var5 = _closure1_slot14;
                var5 = var5.ORBS;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var1 = var5.bind(var7)(var3, var1);
            _closure2_slot3 = var1;
            var9 = _closure1_slot5;
            var7 = var9.useCallback;
            var5 = function() {
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 11;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.popWithKey;
                var2 = 'QuestOrbsRewardModal';
                var2 = var3.bind(var4)(var2);
                var6 = _closure1_slot0;
                var2 = 35;
                var2 = var7[var2];
                var4 = var6.bind(var1)(var2);
                var3 = var4.openQuestHome;
                var2 = {};
                var5 = _closure1_slot12;
                var5 = var5.VIRTUAL_CURRENCY;
                var2['filter'] = var5;
                var5 = 36;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.QuestContent;
                var5 = var5.REWARD_MODAL;
                var2['fromContent'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = new Array(0);
            var7 = var7.bind(var9)(var5, var3);
            _closure2_slot4 = var7;
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 37;
            var3 = var9[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useMobileQuestOrbRewardModalCtaPriorityExperiment;
            var3 = var3.bind(var5)();
            var9 = var3.variant;
            _closure2_slot5 = var9;
            var5 = var18 != var2;
            var3 = 0;
            if(!var5) { _fun0008_ip = 37; continue _fun0008 }
case 38:
            var3 = var2;
case 37:
            var2 = 4100;
            var23 = var3 >= var2;
            _closure2_slot6 = var23;
            var5 = _closure1_slot5;
            var3 = var5.useMemo;
            var2 = new Array(4);
            var2[0] = var9;
            var2[1] = var23;
            var2[2] = var7;
            var2[3] = var1;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 37;
                    var1 = var1[var7];
                    var6 = undefined;
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.MobileQuestOrbRewardModalCtaPriorityVariant;
                    var1 = var1.EARN_ORBS_PRIMARY;
                    if(!(var1 !== var2)) { _fun0009_ip = 39; continue _fun0009 }
case 40:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var7];
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.MobileQuestOrbRewardModalCtaPriorityVariant;
                    var1 = var1.EARN_ORBS_ONLY;
                    if(!(var1 !== var2)) { _fun0009_ip = 41; continue _fun0009 }
case 42:
                    var1 = _closure2_slot6;
                    var2 = {};
                    var5 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 18;
                    var10 = var9[var7];
                    var10 = var8.bind(var6)(var10);
                    var10 = var10.t;
                    if(var1) { _fun0009_ip = 43; continue _fun0009 }
case 44:
                    var1 = var10.uJAMFX;
                    var5['text'] = var1;
                    var1 = _closure2_slot4;
                    var5['handler'] = var1;
                    var2['primary'] = var5;
                    var1 = {};
                    var11 = var9[var7];
                    var11 = var8.bind(var6)(var11);
                    var11 = var11.t;
                    var11 = var11.GPdvqY;
                    var1['text'] = var11;
                    var11 = _closure2_slot3;
                    var1['handler'] = var11;
                    var2['secondary'] = var1;
                    var1 = var2;
                    _fun0009_ip = 45; continue _fun0009;
case 43:
                    var10 = var10.GPdvqY;
                    var5['text'] = var10;
                    var10 = _closure2_slot3;
                    var5['handler'] = var10;
                    var2['primary'] = var5;
                    var5 = {};
                    var7 = var9[var7];
                    var7 = var8.bind(var6)(var7);
                    var7 = var7.t;
                    var7 = var7.uJAMFX;
                    var5['text'] = var7;
                    var7 = _closure2_slot4;
                    var5['handler'] = var7;
                    var2['secondary'] = var5;
                    var1 = var2;
case 45:
                    return var1;
case 41:
                    var1 = {};
                    var2 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 18;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.t;
                    var5 = var5.uJAMFX;
                    var2['text'] = var5;
                    var5 = _closure2_slot4;
                    var2['handler'] = var5;
                    var1['primary'] = var2;
                    var2 = null;
                    var1['secondary'] = var2;
                    return var1;
case 39:
                    var1 = {};
                    var2 = {};
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 18;
                    var8 = var7[var4];
                    var8 = var5.bind(var6)(var8);
                    var8 = var8.t;
                    var8 = var8.uJAMFX;
                    var2['text'] = var8;
                    var8 = _closure2_slot4;
                    var2['handler'] = var8;
                    var1['primary'] = var2;
                    var2 = {};
                    var4 = var7[var4];
                    var4 = var5.bind(var6)(var4);
                    var4 = var4.t;
                    var4 = var4.GPdvqY;
                    var2['text'] = var4;
                    var3 = _closure2_slot3;
                    var2['handler'] = var3;
                    var1['secondary'] = var2;
                    return var1;
                }
            };
            var19 = var3.bind(var5)(var1, var2);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 21;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isAndroid;
            var1 = var1.bind(var2)();
            _closure2_slot7 = var1;
            if(var1) { _fun0008_ip = 46; continue _fun0008 }
case 47:
            var1 = var14.orbsIconIOS;
            _fun0008_ip = 48; continue _fun0008;
case 46:
            var1 = var14.orbsIconAndroid;
case 48:
            _closure2_slot8 = var1;
            var3 = _closure1_slot16;
            var2 = _closure1_slot8;
            var1 = {};
            var5 = var14.root;
            var1['style'] = var5;
            var9 = _closure1_slot15;
            var7 = _closure1_slot23;
            var5 = {};
            var5['useReducedMotion'] = var15;
            var12 = var14.background;
            var5['style'] = var12;
            var5['onStaticBgLoad'] = var11;
            var5['onAnimatedBgLoad'] = var10;
            var5['isAppActive'] = var20;
            var7 = var9.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var7 = !var6;
            if(!var7) { _fun0008_ip = 49; continue _fun0008 }
case 50:
            var9 = var15;
            if(var9) { _fun0008_ip = 51; continue _fun0008 }
case 52:
            var9 = !var8;
case 51:
            var7 = var9;
case 49:
            if(!var7) { _fun0008_ip = 53; continue _fun0008 }
case 54:
            var11 = _closure1_slot15;
            var10 = _closure1_slot8;
            var9 = {};
            var12 = var14.loading;
            var9['style'] = var12;
            var16 = _closure1_slot15;
            var13 = _closure1_slot6;
            var12 = {};
            var21 = true;
            var12['animating'] = var21;
            var12 = var16.bind(var4)(var13, var12);
            var9['children'] = var12;
            var7 = var11.bind(var4)(var10, var9);
case 53:
            var5[1] = var7;
            if(var6) { _fun0008_ip = 55; continue _fun0008 }
case 56:
            var7 = !var15;
            if(!var7) { _fun0008_ip = 57; continue _fun0008 }
case 58:
            var7 = var8;
case 57:
            var6 = var7;
case 55:
            if(!var6) { _fun0008_ip = 59; continue _fun0008 }
case 60:
            var9 = _closure1_slot16;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 38;
            var7 = var10[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.SafeAreaPaddingView;
            var7 = {'style': null, 'top': true, 'bottom': true, 'left': true, 'right': true};
            var11 = var14.main;
            var10 = new Array(1);
            var10[0] = var11;
            var7['style'] = var10;
            var12 = _closure1_slot15;
            var11 = _closure1_slot8;
            var10 = {};
            var13 = var14.header;
            var10['style'] = var13;
            var21 = _closure1_slot15;
            var16 = _closure1_slot19;
            var13 = {};
            var13 = var21.bind(var4)(var16, var13);
            var10['children'] = var13;
            var11 = var12.bind(var4)(var11, var10);
            var10 = new Array(4);
            var10[0] = var11;
            var13 = _closure1_slot15;
            var12 = _closure1_slot8;
            var11 = {};
            var16 = var14.animation;
            var11['style'] = var16;
            var21 = _closure1_slot15;
            if(var15) { _fun0008_ip = 61; continue _fun0008 }
case 62:
            var16 = _closure1_slot26;
            var15 = {};
            var15['isAppActive'] = var20;
            var15 = var21.bind(var4)(var16, var15);
            _fun0008_ip = 63; continue _fun0008;
case 61:
            var20 = _closure1_slot25;
            var16 = {};
            var15 = var21.bind(var4)(var20, var16);
case 63:
            var11['children'] = var15;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var13 = _closure1_slot16;
            var12 = _closure1_slot8;
            var11 = {};
            var15 = var14.body;
            var11['style'] = var15;
            var20 = _closure1_slot15;
            var25 = _closure1_slot0;
            var21 = _closure1_slot2;
            var24 = 39;
            var15 = var21[var24];
            var15 = var25.bind(var4)(var15);
            var16 = var15.Heading;
            var15 = {'variant': 'heading-xl/bold', 'color': 'white'};
            var22 = var14.title;
            var15['style'] = var22;
            var22 = 18;
            var26 = var21[var22];
            var26 = var25.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.format;
            var21 = var21[var22];
            var21 = var25.bind(var4)(var21);
            var21 = var21.t;
            var25 = var21.FIilK5;
            var21 = {};
            var31 = var18 != var30;
            var29 = 0;
            if(!var31) { _fun0008_ip = 64; continue _fun0008 }
case 65:
            var29 = var30;
case 64:
            var21['count'] = var29;
            var21 = var26.bind(var27)(var25, var21);
            var15['children'] = var21;
            var16 = var20.bind(var4)(var16, var15);
            var15 = new Array(2);
            var15[0] = var16;
            var21 = _closure1_slot15;
            var20 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var24];
            var16 = var20.bind(var4)(var16);
            var20 = var16.Text;
            var16 = {'variant': 'text-md/normal', 'color': 'white'};
            var24 = var14.title;
            var16['style'] = var24;
            var25 = _closure1_slot0;
            var24 = _closure1_slot2;
            var26 = var24[var22];
            var26 = var25.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.format;
            var24 = var24[var22];
            var24 = var25.bind(var4)(var24);
            var24 = var24.t;
            if(var23) { _fun0008_ip = 66; continue _fun0008 }
case 67:
            var25 = var24.rKHvlX;
            var23 = {};
            var29 = function balanceHook() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var5 = _closure1_slot16;
                    var1 = _closure1_slot5;
                    var4 = var1.Fragment;
                    var3 = {};
                    var9 = _closure1_slot15;
                    var6 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var1 = 40;
                    var1 = var11[var1];
                    var2 = undefined;
                    var1 = var6.bind(var2)(var1);
                    var7 = var1.OrbsIcon;
                    var1 = {};
                    var6 = 'xs';
                    var1['size'] = var6;
                    var10 = _closure1_slot1;
                    var6 = 15;
                    var6 = var11[var6];
                    var6 = var10.bind(var2)(var6);
                    var6 = var6.colors;
                    var6 = var6.WHITE;
                    var1['color'] = var6;
                    var10 = _closure2_slot8;
                    var1['style'] = var10;
                    var7 = var9.bind(var2)(var7, var1);
                    var1 = new Array(3);
                    var1[0] = var7;
                    var7 = _closure2_slot7;
                    if(!var7) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                    var10 = _closure1_slot15;
                    var9 = _closure1_slot8;
                    var8 = {};
                    var11 = {};
                    var12 = 2;
                    var11['width'] = var12;
                    var8['style'] = var11;
                    var7 = var10.bind(var2)(var9, var8);
case 68:
                    var1[1] = var7;
                    var6 = _closure2_slot0;
                    var1[2] = var6;
                    var3['children'] = var1;
                    var1 = 'balance';
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var23['balanceHook'] = var29;
            var23 = var26.bind(var27)(var25, var23);
            _fun0008_ip = 70; continue _fun0008;
case 66:
            var25 = var24["2dz2AL"];
            var24 = {};
            var29 = function balanceHook() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var5 = _closure1_slot16;
                    var1 = _closure1_slot5;
                    var4 = var1.Fragment;
                    var3 = {};
                    var9 = _closure1_slot15;
                    var6 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var1 = 40;
                    var1 = var11[var1];
                    var2 = undefined;
                    var1 = var6.bind(var2)(var1);
                    var7 = var1.OrbsIcon;
                    var1 = {};
                    var6 = 'xs';
                    var1['size'] = var6;
                    var10 = _closure1_slot1;
                    var6 = 15;
                    var6 = var11[var6];
                    var6 = var10.bind(var2)(var6);
                    var6 = var6.colors;
                    var6 = var6.WHITE;
                    var1['color'] = var6;
                    var10 = _closure2_slot8;
                    var1['style'] = var10;
                    var7 = var9.bind(var2)(var7, var1);
                    var1 = new Array(3);
                    var1[0] = var7;
                    var7 = _closure2_slot7;
                    if(!var7) { _fun0011_ip = 68; continue _fun0011 }
case 69:
                    var10 = _closure1_slot15;
                    var9 = _closure1_slot8;
                    var8 = {};
                    var11 = {};
                    var12 = 2;
                    var11['width'] = var12;
                    var8['style'] = var11;
                    var7 = var10.bind(var2)(var9, var8);
case 68:
                    var1[1] = var7;
                    var6 = _closure2_slot0;
                    var1[2] = var6;
                    var3['children'] = var1;
                    var1 = 'balance';
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var24['balanceHook'] = var29;
            var28 = function profileDecoHook() {
                var5 = _closure1_slot15;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 39;
                var1 = var9[var1];
                var4 = undefined;
                var1 = var8.bind(var4)(var1);
                var3 = var1.Text;
                var2 = {'variant': 'text-md/semibold', 'color': 'white'};
                var1 = 18;
                var6 = var9[var1];
                var6 = var8.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var1 = var9[var1];
                var1 = var8.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.pGDUH9;
                var1 = var6.bind(var7)(var1);
                var2['children'] = var1;
                var1 = 'profileDeco';
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var24['profileDecoHook'] = var28;
            var23 = var26.bind(var27)(var25, var24);
case 70:
            var16['children'] = var23;
            var16 = var21.bind(var4)(var20, var16);
            var15[1] = var16;
            var11['children'] = var15;
            var11 = var13.bind(var4)(var12, var11);
            var10[2] = var11;
            var13 = _closure1_slot16;
            var12 = _closure1_slot8;
            var11 = {};
            var14 = var14.buttonsContainer;
            var11['style'] = var14;
            var20 = _closure1_slot15;
            var23 = _closure1_slot0;
            var21 = _closure1_slot2;
            var16 = 41;
            var14 = var21[var16];
            var14 = var23.bind(var4)(var14);
            var15 = var14.Button;
            var14 = {'onPress': null, 'variant': 'primary', 'size': 'lg'};
            var24 = var19.primary;
            var24 = var24.handler;
            var14['onPress'] = var24;
            var21 = var21[var22];
            var21 = var23.bind(var4)(var21);
            var24 = var21.intl;
            var23 = var24.string;
            var21 = var19.primary;
            var21 = var21.text;
            var21 = var23.bind(var24)(var21);
            var14['text'] = var21;
            var15 = var20.bind(var4)(var15, var14);
            var14 = new Array(2);
            var14[0] = var15;
            var15 = var19.secondary;
            var15 = var18 != var15;
            if(!var15) { _fun0008_ip = 71; continue _fun0008 }
case 72:
            var18 = _closure1_slot15;
            var21 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = var20[var16];
            var16 = var21.bind(var4)(var16);
            var17 = var16.Button;
            var16 = {'onPress': null, 'variant': 'secondary', 'size': 'lg'};
            var23 = var19.secondary;
            var23 = var23.handler;
            var16['onPress'] = var23;
            var20 = var20[var22];
            var20 = var21.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var19.secondary;
            var19 = var19.text;
            var19 = var20.bind(var21)(var19);
            var16['text'] = var19;
            var15 = var18.bind(var4)(var17, var16);
case 71:
            var14[1] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[3] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 59:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function(arg1) {
        var1 = arg1;
        var2 = var1.quest;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 11;
        var4 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.pushLazy;
        var4 = _closure1_slot4;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 73; continue _fun0012 }
case 74:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 13;
                    var3 = var2[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = 12;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var2 = var4.bind(var5)(var3, var2);
                    SaveGenerator(address=54);
case 75:
                    return var2;
case 76:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0012_ip = 77; continue _fun0012 }
case 78:
                    var3 = var2.default;
                    return var3;
case 77:
                    return var2;
case 73:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var1)(var3);
        var3 = {};
        var3['quest'] = var2;
        var2 = 'QuestOrbsRewardModal';
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var3['openQuestOrbsRewardModal'] = var2;
    return var1;
})();