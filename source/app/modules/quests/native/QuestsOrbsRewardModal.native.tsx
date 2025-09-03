// app/modules/quests/native/QuestsOrbsRewardModal.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function BannerVideo() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 20;
            var2 = var6[var2];
            var4 = undefined;
            var7 = var3.bind(var4)(var2);
            var5 = var7.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot8;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var9 = var5.bind(var7)(var3, var2);
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var10 = false;
            var3 = var2.bind(var3)(var10);
            var2 = _closure1_slot3;
            var8 = 2;
            var2 = var2.bind(var4)(var3, var8);
            var14 = 0;
            var5 = var2[var14];
            var _closure2_slot0 = var5;
            var3 = 1;
            var2 = var2[var3];
            var _closure2_slot1 = var2;
            var7 = _closure1_slot5;
            var2 = var7.useState;
            var7 = var2.bind(var7)(var10);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var7, var8);
            var17 = var2[var14];
            var _closure2_slot2 = var17;
            var2 = var2[var3];
            var _closure2_slot3 = var2;
            var10 = _closure1_slot5;
            var7 = var10.useState;
            var2 = true;
            var7 = var7.bind(var10)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)(var7, var8);
            var12 = var2[var14];
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
            var10 = var7.bind(var8)(var3, var2);
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
            var13 = var7.bind(var8)(var3, var2);
            var7 = _closure1_slot5;
            var3 = var7.useEffect;
            var2 = new Array(2);
            var2[0] = var5;
            var2[1] = var17;
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
            var3 = _closure1_slot11;
            var2 = _closure1_slot1;
            var1 = 21;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var16 = '100%';
            var6 = {'width': '100%', 'height': '100%'};
            var1['style'] = var6;
            var6 = !var5;
            if(!var6) { _fun0001_ip = 327; continue _fun0001 }
 324:
            var6 = !var17;
 327:
            if(!var6) { _fun0001_ip = 356; continue _fun0001 }
 330:
            var8 = _closure1_slot10;
            var7 = _closure1_slot6;
            var5 = {};
            var15 = {};
            var15['height'] = var16;
            var5['style'] = var15;
            var6 = var8.bind(var4)(var7, var5);
 356:
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot15;
            var6 = {};
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            var15 = 22;
            var15 = var18[var15];
            var15 = var16.bind(var4)(var15);
            var6['uri'] = var15;
            var15 = new Array(2);
            var16 = {'position': 'absolute', 'height': '100%', 'width': '100%'};
            var15[0] = var16;
            var16 = var12;
            if(!var16) { _fun0001_ip = 429; continue _fun0001 }
 426:
            var16 = !var9;
 429:
            if(var16) { _fun0001_ip = 435; continue _fun0001 }
 432:
            var16 = !var17;
 435:
            if(!var16) { _fun0001_ip = 447; continue _fun0001 }
 438:
            var17 = {};
            var17['opacity'] = var14;
            var16 = var17;
 447:
            var15[1] = var16;
            var6['style'] = var15;
            var6['onLoad'] = var13;
            var13 = !var12;
            if(!var13) { _fun0001_ip = 469; continue _fun0001 }
 466:
            var13 = !var9;
 469:
            var6['animate'] = var13;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot15;
            var6 = {};
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            var11 = 23;
            var11 = var15[var11];
            var11 = var13.bind(var4)(var11);
            var6['uri'] = var11;
            var11 = new Array(2);
            var13 = {'position': 'absolute', 'height': '100%', 'width': '100%'};
            var11[0] = var13;
            var12 = !var12;
            if(var12) { _fun0001_ip = 549; continue _fun0001 }
 546:
            var12 = var9;
 549:
            if(!var12) { _fun0001_ip = 561; continue _fun0001 }
 552:
            var13 = {};
            var13['opacity'] = var14;
            var12 = var13;
 561:
            var11[1] = var12;
            var6['style'] = var11;
            var6['onLoad'] = var10;
            var9 = !var9;
            var6['animate'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var8 = var4.bind(var1)(var7);
    var _closure1_slot5 = var8;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Platform;
    var7 = var4.View;
    var _closure1_slot6 = var7;
    var4 = var4.ActivityIndicator;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 10;
    var7 = var6[var4];
    var10 = var5.bind(var1)(var7);
    var9 = var10.createStyles;
    var7 = {};
    var11 = {};
    var12 = 'flex-start';
    var11['alignSelf'] = var12;
    var12 = 11;
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
    var7 = var9.bind(var10)(var7);
    var _closure1_slot12 = var7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {};
        var3 = 1;
        var2['flex'] = var3;
        var1['root'] = var2;
        var2 = {'position': 'absolute', 'height': '100%', 'width': '100%'};
        var1['background'] = var2;
        var2 = {'justifyContent': 'center', 'alignItems': 'center', 'backgroundColor': null, 'position': 'absolute', 'height': '100%', 'width': '100%'};
        var7 = 'center';
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 11;
        var8 = var6[var3];
        var4 = undefined;
        var8 = var5.bind(var4)(var8);
        var8 = var8.colors;
        var8 = var8.BACKGROUND_PRIMARY;
        var2['backgroundColor'] = var8;
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
    var4 = var7.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = function CancelButton() {
        var2 = _closure1_slot12;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var _closure2_slot0 = var5;
        var3 = _closure1_slot10;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 12;
        var1 = var10[var1];
        var1 = var9.bind(var4)(var1);
        var2 = var1.HeaderBackButton;
        var1 = {};
        var7 = function onPress() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
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
            var4 = _closure1_slot10;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 13;
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
        var6 = 14;
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
    var _closure1_slot14 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var9 = var1.uri;
            var7 = var1.style;
            var10 = var1.onLoad;
            var _closure2_slot0 = var10;
            var6 = var1.animate;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0003_ip = 39; continue _fun0003 }
 37:
            var6 = true;
 39:
            var8 = _closure1_slot5;
            var5 = var8.useCallback;
            var3 = new Array(1);
            var3[0] = var10;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 23; continue _fun0004 }
 13:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var5.bind(var8)(var2, var3);
            var3 = _closure1_slot10;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 15;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = {};
            var8['uri'] = var9;
            var1['source'] = var8;
            var1['style'] = var7;
            var7 = 'cover';
            var1['resizeMode'] = var7;
            var1['enableAnimation'] = var6;
            var1['onLoad'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var7 = var1.uri;
            var6 = var1.style;
            var13 = var1.onLoad;
            var _closure2_slot0 = var13;
            var15 = var1.animate;
            var4 = undefined;
            if(!(var15 === var4)) { _fun0005_ip = 39; continue _fun0005 }
 37:
            var15 = true;
 39:
            var _closure2_slot1 = var15;
            var _closure2_slot2 = var4;
            var8 = _closure1_slot5;
            var2 = var8.useRef;
            var1 = null;
            var8 = var2.bind(var8)(var1);
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 16;
            var10 = var9[var1];
            var11 = var2.bind(var4)(var10);
            var10 = var11.useAPNGPlayerControls;
            var10 = var10.bind(var11)(var8);
            _closure2_slot2 = var10;
            var14 = _closure1_slot5;
            var12 = var14.useEffect;
            var11 = new Array(2);
            var11[0] = var15;
            var11[1] = var10;
            var10 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot1;
                    var4 = _closure2_slot2;
                    if(var2) { _fun0006_ip = 26; continue _fun0006 }
 14:
                    var2 = var4.stop;
                    var2 = var2.bind(var4)();
                    _fun0006_ip = 53; continue _fun0006;
 26:
                    var3 = var4.seek;
                    var2 = 0;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot2;
                    var1 = var2.play;
                    var1 = var1.bind(var2)();
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var12.bind(var14)(var10, var11);
            var12 = _closure1_slot5;
            var11 = var12.useCallback;
            var10 = new Array(1);
            var10[0] = var13;
            var5 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 23; continue _fun0007 }
 13:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var11.bind(var12)(var5, var10);
            var3 = _closure1_slot10;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.APNGPlayer;
            var1 = {};
            var1['ref'] = var8;
            var1['url'] = var7;
            var7 = false;
            var1['autoplay'] = var7;
            var1['style'] = var6;
            var1['onLoad'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var1 = var2.useReducedMotion;
            var7 = var2.style;
            var6 = var2.onLoad;
            var5 = _closure1_slot10;
            if(var1) { _fun0008_ip = 112; continue _fun0008 }
 30:
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 18;
            var1 = var11[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var3 = var1.VideoComponent;
            var1 = {};
            var8 = {};
            var10 = _closure1_slot1;
            var9 = 19;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var8['uri'] = var9;
            var1['source'] = var8;
            var1['style'] = var7;
            var8 = 'cover';
            var1['resizeMode'] = var8;
            var1['onLoad'] = var6;
            var1 = var5.bind(var4)(var3, var1);
            _fun0008_ip = 182; continue _fun0008;
 112:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 15;
            var2 = var11[var2];
            var4 = undefined;
            var3 = var10.bind(var4)(var2);
            var2 = {};
            var8 = {};
            var9 = 17;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var8['uri'] = var9;
            var2['source'] = var8;
            var2['style'] = var7;
            var7 = 'cover';
            var2['resizeMode'] = var7;
            var2['onLoad'] = var6;
            var1 = var5.bind(var4)(var3, var2);
 182:
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestsOrbsRewardModal.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function _default(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var29 = var1.quest;
            var1 = _closure1_slot13;
            var4 = undefined;
            var14 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 24;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var1 = var5.useFetchVirtualCurrencyBalance;
            var1 = var1.bind(var5)();
            var24 = var1.balance;
            var1 = 20;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot8;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var10 = var3.bind(var5)(var2, var1);
            var2 = _closure1_slot5;
            var1 = var2.useState;
            var23 = false;
            var3 = var1.bind(var2)(var23);
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var28 = 0;
            var6 = var2[var28];
            var1 = 1;
            var1 = var2[var1];
            var _closure2_slot0 = var1;
            var5 = _closure1_slot5;
            var3 = var5.useCallback;
            var2 = function() {
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var9 = var3.bind(var5)(var2, var1);
            var5 = _closure1_slot5;
            var3 = var5.useCallback;
            var2 = function() {
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 7;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var7.bind(var1)(var2);
                var3 = var4.popWithKey;
                var2 = 'QuestsOrbsRewardModal';
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot0;
                var2 = 25;
                var2 = var8[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openCollectiblesShopMobile;
                var2 = {};
                var6 = 26;
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
                var5 = _closure1_slot9;
                var5 = var5.ORBS;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var8 = var3.bind(var5)(var2, var1);
            var5 = _closure1_slot5;
            var3 = var5.useCallback;
            var2 = function() {
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 7;
                var3 = var7[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.popWithKey;
                var3 = 'QuestsOrbsRewardModal';
                var3 = var4.bind(var5)(var3);
                var6 = _closure1_slot0;
                var2 = 27;
                var2 = var7[var2];
                var4 = var6.bind(var1)(var2);
                var3 = var4.openQuestHome;
                var2 = {};
                var5 = 28;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.MOBILE_ORBS_INTRO_QUEST_ID;
                var2['scrollToQuestId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var3 = var3.bind(var5)(var2, var1);
            var30 = null;
            var1 = var30 != var24;
            var2 = 0;
            if(!var1) { _fun0009_ip = 240; continue _fun0009 }
 237:
            var2 = var24;
 240:
            var1 = 4100;
            var22 = var2 >= var1;
            var1 = {};
            var2 = {};
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var21 = 14;
            var11 = var5[var21];
            var11 = var7.bind(var4)(var11);
            var11 = var11.t;
            if(var22) { _fun0009_ip = 343; continue _fun0009 }
 282:
            var12 = var11.uJAMFR;
            var2['text'] = var12;
            var2['handler'] = var3;
            var1['primary'] = var2;
            var12 = {};
            var13 = var5[var21];
            var13 = var7.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.GPdvqa;
            var12['text'] = var13;
            var12['handler'] = var8;
            var1['secondary'] = var12;
            var18 = var1;
            _fun0009_ip = 402; continue _fun0009;
 343:
            var11 = var11.GPdvqa;
            var2['text'] = var11;
            var2['handler'] = var8;
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
 402:
            var3 = _closure1_slot11;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var14.root;
            var1['style'] = var5;
            var8 = _closure1_slot10;
            var7 = _closure1_slot16;
            var5 = {};
            var5['useReducedMotion'] = var10;
            var10 = var14.background;
            var5['style'] = var10;
            var5['onLoad'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var7 = !var6;
            if(!var7) { _fun0009_ip = 525; continue _fun0009 }
 472:
            var10 = _closure1_slot10;
            var9 = _closure1_slot6;
            var8 = {};
            var11 = var14.loading;
            var8['style'] = var11;
            var13 = _closure1_slot10;
            var12 = _closure1_slot7;
            var11 = {};
            var15 = true;
            var11['animating'] = var15;
            var11 = var13.bind(var4)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var4)(var9, var8);
 525:
            var5[1] = var7;
            if(!var6) { _fun0009_ip = 1394; continue _fun0009 }
 535:
            var9 = _closure1_slot11;
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var7 = 29;
            var7 = var33[var7];
            var7 = var32.bind(var4)(var7);
            var8 = var7.SafeAreaPaddingView;
            var7 = {'style': null, 'top': true, 'bottom': true, 'left': true, 'right': true};
            var11 = var14.main;
            var10 = new Array(1);
            var10[0] = var11;
            var7['style'] = var10;
            var20 = true;
            var12 = _closure1_slot11;
            var11 = _closure1_slot6;
            var10 = {};
            var13 = var14.header;
            var10['style'] = var13;
            var17 = _closure1_slot10;
            var15 = _closure1_slot14;
            var13 = {};
            var15 = var17.bind(var4)(var15, var13);
            var13 = new Array(2);
            var13[0] = var15;
            var19 = _closure1_slot10;
            var15 = 30;
            var15 = var33[var15];
            var15 = var32.bind(var4)(var15);
            var17 = var15.BalanceWidgetPill;
            var15 = {};
            var15['balance'] = var24;
            var15['showNotificationBadge'] = var23;
            var23 = function onPress() {
                var1 = undefined;
                return var1;
            };
            var15['onPress'] = var23;
            var15['disabled'] = var20;
            var15 = var19.bind(var4)(var17, var15);
            var13[1] = var15;
            var10['children'] = var13;
            var11 = var12.bind(var4)(var11, var10);
            var10 = new Array(4);
            var10[0] = var11;
            var13 = _closure1_slot10;
            var12 = _closure1_slot1;
            var11 = 21;
            var11 = var33[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.View;
            var11 = {};
            var15 = var14.animation;
            var11['style'] = var15;
            var19 = _closure1_slot10;
            var17 = _closure1_slot17;
            var15 = {};
            var15 = var19.bind(var4)(var17, var15);
            var11['children'] = var15;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var13 = _closure1_slot11;
            var12 = _closure1_slot6;
            var11 = {};
            var15 = var14.body;
            var11['style'] = var15;
            var19 = _closure1_slot10;
            var23 = 31;
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
            var31 = 32;
            var31 = var33[var31];
            var32 = var32.bind(var4)(var31);
            var31 = var32.getVirtualCurrencyRewardOrbQuantity;
            var29 = var29.config;
            var29 = var31.bind(var32)(var29);
            var30 = var30 != var29;
            var28 = 0;
            if(!var30) { _fun0009_ip = 934; continue _fun0009 }
 931:
            var28 = var29;
 934:
            var20['count'] = var28;
            var20 = var25.bind(var26)(var24, var20);
            var15['children'] = var20;
            var17 = var19.bind(var4)(var17, var15);
            var15 = new Array(2);
            var15[0] = var17;
            var20 = _closure1_slot10;
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
            if(var22) { _fun0009_ip = 1070; continue _fun0009 }
 1036:
            var25 = var26.string;
            var22 = var23[var21];
            var22 = var24.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.97ztVl;
            var22 = var25.bind(var26)(var22);
            _fun0009_ip = 1119; continue _fun0009;
 1070:
            var25 = var26.format;
            var23 = var23[var21];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            var24 = var23.Heldho;
            var23 = {};
            var27 = function profileDecoHook() {
                var4 = _closure1_slot10;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 31;
                var1 = var9[var1];
                var3 = undefined;
                var1 = var8.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {'variant': 'text-md/semibold', 'color': 'white'};
                var5 = 14;
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
 1119:
            var17['children'] = var22;
            var17 = var20.bind(var4)(var19, var17);
            var15[1] = var17;
            var11['children'] = var15;
            var11 = var13.bind(var4)(var12, var11);
            var10[2] = var11;
            var13 = _closure1_slot11;
            var12 = _closure1_slot6;
            var11 = {};
            var14 = var14.buttonsContainer;
            var11['style'] = var14;
            var22 = _closure1_slot10;
            var20 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 33;
            var14 = var19[var15];
            var14 = var20.bind(var4)(var14);
            var17 = var14.Button;
            var14 = {};
            var23 = var18.primary;
            var23 = var23.handler;
            var14['onPress'] = var23;
            var23 = 'primary';
            var14['variant'] = var23;
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
            var17 = _closure1_slot10;
            var15 = var19[var15];
            var15 = var20.bind(var4)(var15);
            var16 = var15.Button;
            var15 = {};
            var22 = var18.secondary;
            var22 = var22.handler;
            var15['onPress'] = var22;
            var22 = 'secondary';
            var15['variant'] = var22;
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
 1394:
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
        var1 = 7;
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
                    var3 = 9;
                    var3 = var2[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = 8;
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