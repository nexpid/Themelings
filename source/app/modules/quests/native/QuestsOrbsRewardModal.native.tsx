// app/modules/quests/native/QuestsOrbsRewardModal.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function AnimatedOrbContainer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var10 = var2.useReducedMotion;
            var11 = var2.isAppActive;
            var2 = _closure1_slot21;
            var4 = undefined;
            var13 = var2.bind(var4)();
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var8 = false;
            var3 = var2.bind(var3)(var8);
            var2 = _closure1_slot3;
            var7 = 2;
            var2 = var2.bind(var4)(var3, var7);
            var19 = 0;
            var5 = var2[var19];
            var _closure2_slot0 = var5;
            var3 = 1;
            var2 = var2[var3];
            var _closure2_slot1 = var2;
            var6 = _closure1_slot5;
            var2 = var6.useState;
            var6 = var2.bind(var6)(var8);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var6, var7);
            var18 = var2[var19];
            var _closure2_slot2 = var18;
            var2 = var2[var3];
            var _closure2_slot3 = var2;
            var8 = _closure1_slot5;
            var6 = var8.useState;
            var2 = true;
            var6 = var6.bind(var8)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var6, var7);
            var6 = var2[var19];
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
            var12 = var7.bind(var8)(var3, var2);
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
            var15 = var7.bind(var8)(var3, var2);
            var7 = _closure1_slot5;
            var3 = var7.useEffect;
            var2 = new Array(2);
            var2[0] = var5;
            var2[1] = var18;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    if(!var3) { _fun0002_ip = 19; continue _fun0002 }
 12:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0002_ip = 23; continue _fun0002 }
 19:
                    var2 = undefined;
                    return var2;
 23:
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
            var3 = _closure1_slot14;
            var2 = _closure1_slot8;
            var1 = {};
            var17 = '100%';
            var7 = {'width': '100%', 'height': '100%'};
            var1['style'] = var7;
            var7 = !var5;
            if(!var7) { _fun0001_ip = 283; continue _fun0001 }
 280:
            var7 = !var18;
 283:
            if(!var7) { _fun0001_ip = 312; continue _fun0001 }
 286:
            var9 = _closure1_slot13;
            var8 = _closure1_slot8;
            var5 = {};
            var16 = {};
            var16['height'] = var17;
            var5['style'] = var16;
            var7 = var9.bind(var4)(var8, var5);
 312:
            var5 = new Array(3);
            var5[0] = var7;
            var9 = _closure1_slot13;
            var8 = _closure1_slot19;
            var7 = {};
            var17 = _closure1_slot1;
            var20 = _closure1_slot2;
            var16 = 22;
            var16 = var20[var16];
            var16 = var17.bind(var4)(var16);
            var7['uri'] = var16;
            var17 = var13.animatedOrb;
            var16 = new Array(2);
            var16[0] = var17;
            var17 = var6;
            if(!var6) { _fun0001_ip = 377; continue _fun0001 }
 374:
            var17 = !var10;
 377:
            if(var17) { _fun0001_ip = 383; continue _fun0001 }
 380:
            var17 = !var18;
 383:
            if(!var17) { _fun0001_ip = 395; continue _fun0001 }
 386:
            var18 = {};
            var18['opacity'] = var19;
            var17 = var18;
 395:
            var16[1] = var17;
            var7['style'] = var16;
            var7['onLoad'] = var15;
            var15 = !var6;
            if(!var15) { _fun0001_ip = 417; continue _fun0001 }
 414:
            var15 = !var10;
 417:
            if(!var15) { _fun0001_ip = 423; continue _fun0001 }
 420:
            var15 = var11;
 423:
            var7['animate'] = var15;
            var7 = var9.bind(var4)(var8, var7);
            var5[1] = var7;
            if(!var6) { _fun0001_ip = 444; continue _fun0001 }
 441:
            var6 = !var10;
 444:
            if(!var6) { _fun0001_ip = 524; continue _fun0001 }
 447:
            var9 = _closure1_slot13;
            var8 = _closure1_slot19;
            var7 = {};
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 23;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var7['uri'] = var14;
            var14 = var13.animatedOrb;
            var13 = new Array(1);
            var13[0] = var14;
            var7['style'] = var13;
            var7['onLoad'] = var12;
            var10 = !var10;
            if(!var10) { _fun0001_ip = 513; continue _fun0001 }
 510:
            var10 = var11;
 513:
            var7['animate'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 524:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
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
    var7 = var4.Platform;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.Orientation;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 12;
    var7 = var6[var4];
    var10 = var5.bind(var1)(var7);
    var8 = var10.createStyles;
    var7 = {};
    var11 = {'alignSelf': 'flex-start', 'marginHorizontal': null, 'zIndex': 999};
    var12 = 13;
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
    var _closure1_slot15 = var7;
    var7 = var6[var4];
    var10 = var5.bind(var1)(var7);
    var8 = var10.createStyles;
    var7 = function() {
        var1 = {};
        var7 = {};
        var2 = 1;
        var7['flex'] = var2;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 13;
        var8 = var6[var3];
        var4 = undefined;
        var8 = var5.bind(var4)(var8);
        var8 = var8.colors;
        var8 = var8.BG_BASE_PRIMARY;
        var7['backgroundColor'] = var8;
        var1['root'] = var7;
        var8 = _closure1_slot7;
        var2 = var8.absoluteFillObject;
        var1['background'] = var2;
        var2 = {'justifyContent': 'center', 'alignItems': 'center'};
        var7 = 'center';
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.colors;
        var9 = var9.BACKGROUND_PRIMARY;
        var2['backgroundColor'] = var9;
        var10 = var8.absoluteFillObject;
        var11 = var2;
        var8 = copyDataProperties(var11, var10);
        var1['loading'] = var2;
        var2 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_16;
        var2['paddingRight'] = var8;
        var1['header'] = var2;
        var2 = {};
        var8 = 2;
        var2['flex'] = var8;
        var1['main'] = var2;
        var2 = {};
        var8 = 3;
        var2['flex'] = var8;
        var1['animation'] = var2;
        var2 = {'flex': 2, 'flexDirection': 'column', 'justifyContent': 'center'};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_16;
        var2['gap'] = var8;
        var1['body'] = var2;
        var2 = {};
        var2['textAlign'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_32;
        var2['marginHorizontal'] = var7;
        var1['title'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_24;
        var2['padding'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_16;
        var2['gap'] = var3;
        var1['buttonsContainer'] = var2;
        return var1;
    };
    var7 = var8.bind(var10)(var7);
    var _closure1_slot16 = var7;
    var7 = function CancelButton() {
        var2 = _closure1_slot15;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var _closure2_slot0 = var5;
        var3 = _closure1_slot13;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 14;
        var1 = var10[var1];
        var1 = var9.bind(var4)(var1);
        var2 = var1.HeaderBackButton;
        var1 = {};
        var7 = function onPress() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.popWithKey;
            var2 = 'QuestsOrbsRewardModal';
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['onPress'] = var7;
        var6 = function backImage() {
            var4 = _closure1_slot13;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 15;
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
        var6 = 16;
        var7 = var10[var6];
        var7 = var9.bind(var4)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var4)(var6);
        var6 = var6.t;
        var6 = var6.cpT0Cg;
        var6 = var7.bind(var8)(var6);
        var1['accessibilityLabel'] = var6;
        var6 = false;
        var1['labelVisible'] = var6;
        var5 = var5.closeButton;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot17 = var7;
    var8 = var9.memo;
    var7 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var8 = var2.uri;
            var _closure2_slot0 = var8;
            var1 = var2.onLoad;
            var7 = var2.animate;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0003_ip = 34; continue _fun0003 }
 32:
            var7 = true;
 34:
            var9 = _closure1_slot5;
            var6 = var9.useEffect;
            var4 = new Array(1);
            var4[0] = var8;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.preload;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var6.bind(var9)(var3, var4);
            var4 = _closure1_slot13;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 17;
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
    var8 = var9.memo;
    var7 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var6 = var1.uri;
            var5 = var1.onLoad;
            var14 = var1.animate;
            var4 = undefined;
            if(!(var14 === var4)) { _fun0004_ip = 30; continue _fun0004 }
 28:
            var14 = true;
 30:
            var _closure2_slot0 = var14;
            var _closure2_slot1 = var4;
            var7 = _closure1_slot5;
            var2 = var7.useRef;
            var1 = null;
            var7 = var2.bind(var7)(var1);
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 18;
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
 0:
                    var1 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    if(var1) { _fun0005_ip = 26; continue _fun0005 }
 14:
                    var1 = var2.stop;
                    var1 = var1.bind(var2)();
                    _fun0005_ip = 36; continue _fun0005;
 26:
                    var1 = var2.play;
                    var1 = var1.bind(var2)();
 36:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var11.bind(var12)(var9, var10);
            var3 = _closure1_slot13;
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
    var _closure1_slot18 = var7;
    var8 = var9.memo;
    var7 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var10 = var1.uri;
            var6 = var1.style;
            var9 = var1.onLoad;
            var8 = var1.animate;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0006_ip = 33; continue _fun0006 }
 31:
            var8 = true;
 33:
            var3 = _closure1_slot13;
            var2 = _closure1_slot8;
            var1 = {'style': null, 'renderToHardwareTextureAndroid': true, 'needsOffscreenAlphaCompositing': true};
            var1['style'] = var6;
            var7 = _closure1_slot13;
            var6 = _closure1_slot18;
            var5 = {};
            var5['uri'] = var10;
            var5['onLoad'] = var9;
            var5['animate'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot19 = var7;
    var8 = var9.memo;
    var7 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var6 = var1.useReducedMotion;
            var11 = var1.style;
            var12 = var1.onStaticBgLoad;
            var10 = var1.onAnimatedBgLoad;
            var7 = var1.isAppActive;
            var4 = _closure1_slot14;
            var1 = _closure1_slot5;
            var3 = var1.Fragment;
            var2 = {};
            var9 = _closure1_slot13;
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var1 = 17;
            var5 = var17[var1];
            var1 = undefined;
            var8 = var16.bind(var1)(var5);
            var5 = {};
            var14 = {};
            var15 = 19;
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
            if(!var6) { _fun0007_ip = 142; continue _fun0007 }
 139:
            var6 = var7;
 142:
            if(!var6) { _fun0007_ip = 235; continue _fun0007 }
 145:
            var9 = _closure1_slot13;
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 20;
            var7 = var15[var7];
            var7 = var8.bind(var1)(var7);
            var8 = var7.VideoComponent;
            var7 = {'source': null, 'style': null, 'resizeMode': 'cover', 'onLoad': null, 'disableFocus': true, 'playInBackground': true};
            var12 = {};
            var14 = _closure1_slot1;
            var13 = 21;
            var13 = var15[var13];
            var13 = var14.bind(var1)(var13);
            var12['uri'] = var13;
            var7['source'] = var12;
            var7['style'] = var11;
            var7['onLoad'] = var10;
            var6 = var9.bind(var1)(var8, var7);
 235:
            var5[1] = var6;
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot20 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'height': '130%', 'width': '130%', 'left': '-15%', 'top': '-15%', 'pointerEvents': 'none'};
    var4['animatedOrb'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot21 = var4;
    var4 = 37;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestsOrbsRewardModal.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function _default(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var29 = var1.quest;
            var _closure2_slot0 = var29;
            var1 = _closure1_slot16;
            var4 = undefined;
            var14 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 24;
            var2 = var5[var1];
            var8 = var3.bind(var4)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var1 = _closure1_slot9;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var23 = var7.bind(var8)(var6, var2);
            var2 = 25;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.useFetchVirtualCurrencyBalance;
            var2 = var2.bind(var6)();
            var24 = var2.balance;
            var _closure2_slot1 = var24;
            var6 = _closure1_slot5;
            var2 = var6.useState;
            var30 = null;
            var6 = var2.bind(var6)(var30);
            var2 = _closure1_slot3;
            var9 = 2;
            var2 = var2.bind(var4)(var6, var9);
            var28 = 0;
            var25 = var2[var28];
            var7 = 1;
            var2 = var2[var7];
            var _closure2_slot2 = var2;
            var10 = _closure1_slot5;
            var8 = var10.useEffect;
            var6 = new Array(2);
            var6[0] = var24;
            var2 = var29.config;
            var6[1] = var2;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0009_ip = 87; continue _fun0009 }
 13:
                    var3 = _closure2_slot2;
                    var4 = _closure2_slot1;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 26;
                    var6 = var6[var2];
                    var2 = undefined;
                    var7 = var7.bind(var2)(var6);
                    var6 = var7.getVirtualCurrencyRewardOrbQuantity;
                    var5 = _closure2_slot0;
                    var5 = var5.config;
                    var5 = var6.bind(var7)(var5);
                    var6 = var1 != var5;
                    var1 = 0;
                    if(!var6) { _fun0009_ip = 78; continue _fun0009 }
 75:
                    var1 = var5;
 78:
                    var1 = var4 - var1;
                    var1 = var3.bind(var2)(var1);
 87:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var8.bind(var10)(var2, var6);
            var6 = _closure1_slot5;
            var2 = var6.useState;
            var10 = false;
            var6 = var2.bind(var6)(var10);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var6, var9);
            var6 = var2[var28];
            var2 = var2[var7];
            var _closure2_slot3 = var2;
            var8 = _closure1_slot5;
            var2 = var8.useState;
            var8 = var2.bind(var8)(var10);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var8, var9);
            var8 = var2[var28];
            var2 = var2[var7];
            var _closure2_slot4 = var2;
            var1 = var5[var1];
            var9 = var3.bind(var4)(var1);
            var7 = var9.useStateFromStores;
            var1 = _closure1_slot10;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var7.bind(var9)(var2, var1);
            var1 = 27;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AppStates;
            var1 = var1.ACTIVE;
            var20 = var2 === var1;
            var5 = _closure1_slot5;
            var3 = var5.useEffect;
            var2 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 28;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.lockOrientation;
                var1 = _closure1_slot11;
                var1 = var1.PORTRAIT;
                var1 = var2.bind(var3)(var1);
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 28;
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
            var1 = var3.bind(var5)(var2, var1);
            var5 = _closure1_slot5;
            var3 = var5.useCallback;
            var2 = function() {
                var3 = _closure2_slot3;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var11 = var3.bind(var5)(var2, var1);
            var5 = _closure1_slot5;
            var3 = var5.useCallback;
            var2 = function() {
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var10 = var3.bind(var5)(var2, var1);
            var5 = _closure1_slot5;
            var3 = var5.useCallback;
            var2 = function() {
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 9;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var7.bind(var1)(var2);
                var3 = var4.popWithKey;
                var2 = 'QuestsOrbsRewardModal';
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot0;
                var2 = 29;
                var2 = var8[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openCollectiblesShopMobile;
                var2 = {};
                var6 = 30;
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
                var5 = _closure1_slot12;
                var5 = var5.ORBS;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var9 = var3.bind(var5)(var2, var1);
            var5 = _closure1_slot5;
            var3 = var5.useCallback;
            var2 = function() {
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 9;
                var3 = var7[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.popWithKey;
                var3 = 'QuestsOrbsRewardModal';
                var3 = var4.bind(var5)(var3);
                var6 = _closure1_slot0;
                var2 = 31;
                var2 = var7[var2];
                var4 = var6.bind(var1)(var2);
                var3 = var4.openQuestHome;
                var2 = {};
                var5 = 32;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.MOBILE_ORBS_INTRO_QUEST_ID;
                var2['scrollToQuestId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var3 = var3.bind(var5)(var2, var1);
            var1 = var30 != var24;
            var2 = 0;
            if(!var1) { _fun0008_ip = 478; continue _fun0008 }
 475:
            var2 = var24;
 478:
            var1 = 4100;
            var22 = var2 >= var1;
            var1 = {};
            var2 = {};
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var21 = 16;
            var12 = var5[var21];
            var12 = var7.bind(var4)(var12);
            var12 = var12.t;
            if(var22) { _fun0008_ip = 581; continue _fun0008 }
 520:
            var13 = var12.uJAMFR;
            var2['text'] = var13;
            var2['handler'] = var3;
            var1['primary'] = var2;
            var13 = {};
            var15 = var5[var21];
            var15 = var7.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.GPdvqa;
            var13['text'] = var15;
            var13['handler'] = var9;
            var1['secondary'] = var13;
            var18 = var1;
            _fun0008_ip = 640; continue _fun0008;
 581:
            var12 = var12.GPdvqa;
            var2['text'] = var12;
            var2['handler'] = var9;
            var1['primary'] = var2;
            var2 = {};
            var5 = var5[var21];
            var5 = var7.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.uJAMFR;
            var2['text'] = var5;
            var2['handler'] = var3;
            var1['secondary'] = var2;
            var18 = var1;
 640:
            var3 = _closure1_slot14;
            var2 = _closure1_slot8;
            var1 = {};
            var5 = var14.root;
            var1['style'] = var5;
            var9 = _closure1_slot13;
            var7 = _closure1_slot20;
            var5 = {};
            var5['useReducedMotion'] = var23;
            var12 = var14.background;
            var5['style'] = var12;
            var5['onStaticBgLoad'] = var11;
            var5['onAnimatedBgLoad'] = var10;
            var5['isAppActive'] = var20;
            var7 = var9.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var7 = !var6;
            if(!var7) { _fun0008_ip = 732; continue _fun0008 }
 720:
            var9 = var23;
            if(var9) { _fun0008_ip = 729; continue _fun0008 }
 726:
            var9 = !var8;
 729:
            var7 = var9;
 732:
            if(!var7) { _fun0008_ip = 788; continue _fun0008 }
 735:
            var11 = _closure1_slot13;
            var10 = _closure1_slot8;
            var9 = {};
            var12 = var14.loading;
            var9['style'] = var12;
            var15 = _closure1_slot13;
            var13 = _closure1_slot6;
            var12 = {};
            var17 = true;
            var12['animating'] = var17;
            var12 = var15.bind(var4)(var13, var12);
            var9['children'] = var12;
            var7 = var11.bind(var4)(var10, var9);
 788:
            var5[1] = var7;
            if(var6) { _fun0008_ip = 807; continue _fun0008 }
 795:
            var7 = !var23;
            if(!var7) { _fun0008_ip = 804; continue _fun0008 }
 801:
            var7 = var8;
 804:
            var6 = var7;
 807:
            if(!var6) { _fun0008_ip = 1688; continue _fun0008 }
 813:
            var9 = _closure1_slot14;
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var7 = 33;
            var7 = var33[var7];
            var7 = var32.bind(var4)(var7);
            var8 = var7.SafeAreaPaddingView;
            var7 = {'style': null, 'top': true, 'bottom': true, 'left': true, 'right': true};
            var11 = var14.main;
            var10 = new Array(1);
            var10[0] = var11;
            var7['style'] = var10;
            var12 = _closure1_slot14;
            var11 = _closure1_slot8;
            var10 = {};
            var13 = var14.header;
            var10['style'] = var13;
            var17 = _closure1_slot13;
            var15 = _closure1_slot17;
            var13 = {};
            var15 = var17.bind(var4)(var15, var13);
            var13 = new Array(2);
            var13[0] = var15;
            var19 = _closure1_slot13;
            var15 = 34;
            var15 = var33[var15];
            var15 = var32.bind(var4)(var15);
            var17 = var15.BalanceWidgetPill;
            var15 = {'initialRenderedBalance': null, 'balance': null, 'animateBalanceChanges': true, 'showNotificationBadge': false, 'onPress': null, 'disabled': true};
            var15['initialRenderedBalance'] = var25;
            var15['balance'] = var24;
            var24 = function onPress() {
                var1 = undefined;
                return var1;
            };
            var15['onPress'] = var24;
            var15 = var19.bind(var4)(var17, var15);
            var13[1] = var15;
            var10['children'] = var13;
            var11 = var12.bind(var4)(var11, var10);
            var10 = new Array(4);
            var10[0] = var11;
            var13 = _closure1_slot13;
            var12 = _closure1_slot8;
            var11 = {};
            var15 = var14.animation;
            var11['style'] = var15;
            var19 = _closure1_slot13;
            var17 = _closure1_slot22;
            var15 = {};
            var15['useReducedMotion'] = var23;
            var15['isAppActive'] = var20;
            var15 = var19.bind(var4)(var17, var15);
            var11['children'] = var15;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var13 = _closure1_slot14;
            var12 = _closure1_slot8;
            var11 = {};
            var15 = var14.body;
            var11['style'] = var15;
            var19 = _closure1_slot13;
            var23 = 35;
            var15 = var33[var23];
            var15 = var32.bind(var4)(var15);
            var17 = var15.Text;
            var15 = {'variant': 'heading-xl/bold', 'color': 'white'};
            var20 = var14.title;
            var15['style'] = var20;
            var20 = var33[var21];
            var20 = var32.bind(var4)(var20);
            var26 = var20.intl;
            var25 = var26.format;
            var20 = var33[var21];
            var20 = var32.bind(var4)(var20);
            var20 = var20.t;
            var24 = var20.FIilKy;
            var20 = {};
            var31 = 26;
            var31 = var33[var31];
            var32 = var32.bind(var4)(var31);
            var31 = var32.getVirtualCurrencyRewardOrbQuantity;
            var29 = var29.config;
            var29 = var31.bind(var32)(var29);
            var30 = var30 != var29;
            var28 = 0;
            if(!var30) { _fun0008_ip = 1215; continue _fun0008 }
 1212:
            var28 = var29;
 1215:
            var20['count'] = var28;
            var20 = var25.bind(var26)(var24, var20);
            var15['children'] = var20;
            var17 = var19.bind(var4)(var17, var15);
            var15 = new Array(2);
            var15[0] = var17;
            var20 = _closure1_slot13;
            var19 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var23];
            var17 = var19.bind(var4)(var17);
            var19 = var17.Text;
            var17 = {'variant': 'text-md/normal', 'color': 'white'};
            var23 = var14.title;
            var17['style'] = var23;
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var25 = var23[var21];
            var25 = var24.bind(var4)(var25);
            var26 = var25.intl;
            if(var22) { _fun0008_ip = 1352; continue _fun0008 }
 1318:
            var25 = var26.string;
            var22 = var23[var21];
            var22 = var24.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.97ztVl;
            var22 = var25.bind(var26)(var22);
            _fun0008_ip = 1401; continue _fun0008;
 1352:
            var25 = var26.format;
            var23 = var23[var21];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            var24 = var23.Heldho;
            var23 = {};
            var27 = function profileDecoHook() {
                var4 = _closure1_slot13;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 35;
                var1 = var9[var1];
                var3 = undefined;
                var1 = var8.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {'variant': 'text-md/semibold', 'color': 'white'};
                var5 = 16;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.pGDUHx;
                var5 = var6.bind(var7)(var5);
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var23['profileDecoHook'] = var27;
            var22 = var25.bind(var26)(var24, var23);
 1401:
            var17['children'] = var22;
            var17 = var20.bind(var4)(var19, var17);
            var15[1] = var17;
            var11['children'] = var15;
            var11 = var13.bind(var4)(var12, var11);
            var10[2] = var11;
            var13 = _closure1_slot14;
            var12 = _closure1_slot8;
            var11 = {};
            var14 = var14.buttonsContainer;
            var11['style'] = var14;
            var22 = _closure1_slot13;
            var20 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 36;
            var14 = var19[var15];
            var14 = var20.bind(var4)(var14);
            var17 = var14.Button;
            var14 = {'onPress': null, 'variant': 'primary', 'size': 'lg'};
            var23 = var18.primary;
            var23 = var23.handler;
            var14['onPress'] = var23;
            var23 = var19[var21];
            var23 = var20.bind(var4)(var23);
            var25 = var23.intl;
            var24 = var25.string;
            var23 = var18.primary;
            var23 = var23.text;
            var23 = var24.bind(var25)(var23);
            var14['text'] = var23;
            var17 = var22.bind(var4)(var17, var14);
            var14 = new Array(2);
            var14[0] = var17;
            var17 = _closure1_slot13;
            var15 = var19[var15];
            var15 = var20.bind(var4)(var15);
            var16 = var15.Button;
            var15 = {'onPress': null, 'variant': 'secondary', 'size': 'lg'};
            var22 = var18.secondary;
            var22 = var22.handler;
            var15['onPress'] = var22;
            var19 = var19[var21];
            var19 = var20.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18.secondary;
            var18 = var18.text;
            var18 = var19.bind(var20)(var18);
            var15['text'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[1] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[3] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 1688:
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
        var1 = 9;
        var4 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.pushLazy;
        var4 = _closure1_slot4;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 71; continue _fun0010 }
 7:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 11;
                    var3 = var2[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = 10;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var2 = var4.bind(var5)(var3, var2);
                    SaveGenerator(address=54);
 52:
                    return var2;
 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 68; continue _fun0010 }
 60:
                    var3 = var2.default;
                    return var3;
 68:
                    return var2;
 71:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var1)(var3);
        var3 = {};
        var3['quest'] = var2;
        var2 = 'QuestsOrbsRewardModal';
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var3['openQuestsOrbsRewardModal'] = var2;
    return var1;
})();