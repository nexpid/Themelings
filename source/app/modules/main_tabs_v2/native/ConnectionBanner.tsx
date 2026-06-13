// app/modules/main_tabs_v2/native/ConnectionBanner.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function getBannerLabel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot8;
            var2 = var2.WAITING_FOR_NETWORK;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot8;
            var2 = var2.NO_CONNECTION;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot8;
            var2 = var2.BACK_ONLINE;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = undefined;
            return var2;
case 6:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 9;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.j8lYE2;
            var2 = var3.bind(var4)(var2);
            return var2;
case 4:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 9;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.zPerw8;
            var2 = var3.bind(var4)(var2);
            return var2;
case 2:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 9;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.XKk1gp;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function ConnectionBannerIcon(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.state;
            var1 = _closure1_slot22;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 10;
            var3 = var1[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.useToken;
            var7 = _closure1_slot1;
            var13 = 8;
            var1 = var1[var13];
            var1 = var7.bind(var4)(var1);
            var1 = var1.colors;
            var1 = var1.INTERACTIVE_ICON_DEFAULT;
            var9 = var3.bind(var6)(var1);
            var1 = _closure1_slot8;
            var1 = var1.WAITING_FOR_NETWORK;
            if(!(var1 !== var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = _closure1_slot8;
            var1 = var1.NO_CONNECTION;
            if(!(var1 !== var2)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = _closure1_slot8;
            var1 = var1.BACK_ONLINE;
            if(!(var1 !== var2)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            return var4;
case 12:
            var3 = _closure1_slot13;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = var8.leadingSlot;
            var1['style'] = var6;
            var10 = _closure1_slot13;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 12;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.ConnectionFineIcon;
            var6 = {};
            var12 = 'xs';
            var6['size'] = var12;
            var12 = _closure1_slot1;
            var11 = var11[var13];
            var11 = var12.bind(var4)(var11);
            var11 = var11.colors;
            var11 = var11.ICON_FEEDBACK_POSITIVE;
            var6['color'] = var11;
            var6 = var10.bind(var4)(var7, var6);
            var1['children'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 10:
            var3 = _closure1_slot13;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = var8.leadingSlot;
            var1['style'] = var6;
            var10 = _closure1_slot13;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 11;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.ConnectionUnknownIcon;
            var6 = {};
            var12 = 'xs';
            var6['size'] = var12;
            var12 = _closure1_slot1;
            var11 = var11[var13];
            var11 = var12.bind(var4)(var11);
            var11 = var11.colors;
            var11 = var11.INTERACTIVE_ICON_DEFAULT;
            var6['color'] = var11;
            var6 = var10.bind(var4)(var7, var6);
            var1['children'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 8:
            var3 = _closure1_slot13;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = var8.leadingSlot;
            var1['style'] = var6;
            var7 = _closure1_slot13;
            var6 = _closure1_slot5;
            var5 = {};
            var10 = 'small';
            var5['size'] = var10;
            var5['color'] = var9;
            var8 = var8.spinner;
            var5['style'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function ConnectionBannerContent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var10 = var1.state;
            var1 = _closure1_slot22;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var3 = _closure1_slot14;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var5.content;
            var1['style'] = var5;
            var7 = _closure1_slot13;
            var6 = _closure1_slot26;
            var5 = {};
            var5['state'] = var10;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 13;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-sm/medium', 'color': null, 'maxFontSizeMultiplier': 1.5};
            var11 = _closure1_slot8;
            var12 = var11.BACK_ONLINE;
            var11 = 'text-muted';
            if(!(var10 === var12)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var11 = 'text-feedback-positive';
case 14:
            var6['color'] = var11;
            var9 = _closure1_slot25;
            var9 = var9.bind(var4)(var10);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function BackOnlineGlow(arg1) {
        var2 = arg1;
        var7 = var2.progress;
        var2 = _closure1_slot22;
        var4 = undefined;
        var13 = var2.bind(var4)();
        var3 = _closure1_slot0;
        var14 = _closure1_slot2;
        var2 = 10;
        var2 = var14[var2];
        var5 = var3.bind(var4)(var2);
        var3 = var5.useToken;
        var9 = _closure1_slot1;
        var2 = 8;
        var2 = var14[var2];
        var2 = var9.bind(var4)(var2);
        var2 = var2.colors;
        var2 = var2.ICON_FEEDBACK_POSITIVE;
        var6 = var3.bind(var5)(var2);
        var _closure2_slot0 = var6;
        var5 = _closure1_slot4;
        var3 = var5.useMemo;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = _closure2_slot0;
            var4 = var2.bind(var3)(var1);
            var2 = var4.alpha;
            var1 = 0;
            var2 = var2.bind(var4)(var1);
            var1 = var2.css;
            var2 = var1.bind(var2)();
            var1 = new Array(4);
            var1[0] = var2;
            var3 = var4.alpha;
            var2 = 0.1;
            var3 = var3.bind(var4)(var2);
            var2 = var3.css;
            var2 = var2.bind(var3)();
            var1[1] = var2;
            var3 = var4.alpha;
            var2 = 0.28;
            var3 = var3.bind(var4)(var2);
            var2 = var3.css;
            var2 = var2.bind(var3)();
            var1[2] = var2;
            var3 = var4.alpha;
            var2 = 0.55;
            var3 = var3.bind(var4)(var2);
            var2 = var3.css;
            var2 = var2.bind(var3)();
            var1[3] = var2;
            return var1;
        };
        var12 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot13;
        var1 = 15;
        var1 = var14[var1];
        var1 = var9.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var6 = var13.glow;
        var5 = new Array(2);
        var5[0] = var6;
        var6 = {};
        var6['opacity'] = var7;
        var5[1] = var6;
        var1['style'] = var5;
        var5 = 'none';
        var1['pointerEvents'] = var5;
        var7 = _closure1_slot13;
        var5 = 16;
        var5 = var14[var5];
        var6 = var9.bind(var4)(var5);
        var5 = {};
        var8 = var13.glow;
        var5['style'] = var8;
        var16 = _closure1_slot13;
        var8 = 17;
        var10 = var14[var8];
        var15 = var9.bind(var4)(var10);
        var10 = {};
        var17 = var13.glowMaskGradient;
        var10['style'] = var17;
        var17 = _closure1_slot15;
        var10['colors'] = var17;
        var17 = _closure1_slot16;
        var10['locations'] = var17;
        var17 = _closure1_slot17;
        var10['start'] = var17;
        var17 = _closure1_slot18;
        var10['end'] = var17;
        var10 = var16.bind(var4)(var15, var10);
        var5['maskElement'] = var10;
        var10 = _closure1_slot13;
        var8 = var14[var8];
        var9 = var9.bind(var4)(var8);
        var8 = {};
        var13 = var13.glowMaskGradient;
        var8['style'] = var13;
        var8['colors'] = var12;
        var12 = _closure1_slot19;
        var8['locations'] = var12;
        var12 = _closure1_slot20;
        var8['start'] = var12;
        var11 = _closure1_slot21;
        var8['end'] = var11;
        var8 = var10.bind(var4)(var9, var8);
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function ConnectionBannerInner() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = _closure1_slot22;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var1 = _closure1_slot10;
            var13 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 18;
            var1 = var6[var1];
            var8 = var3.bind(var4)(var1);
            var6 = var8.useStateFromStores;
            var1 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var6.bind(var8)(var3, var1);
            var1 = _closure1_slot8;
            var1 = var1.HIDDEN;
            var3 = var9 !== var1;
            var _closure2_slot0 = var3;
            var1 = _closure1_slot8;
            var1 = var1.BACK_ONLINE;
            var1 = var9 === var1;
            var _closure2_slot1 = var1;
            var6 = _closure1_slot8;
            var10 = var6.HIDDEN;
            var6 = null;
            var8 = null;
            if(!(var9 !== var10)) { _fun0004_ip = 16; continue _fun0004 }
case 13:
            var8 = var9;
case 16:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 15;
            var10 = var14[var9];
            var11 = var15.bind(var4)(var10);
            var10 = var11.useSharedValue;
            var16 = 0;
            var12 = var10.bind(var11)(var16);
            var _closure2_slot2 = var12;
            var11 = _closure1_slot4;
            var10 = var11.useState;
            var17 = var10.bind(var11)(var8);
            var11 = _closure1_slot3;
            var10 = 2;
            var17 = var11.bind(var4)(var17, var10);
            var10 = var17[var16];
            var11 = 1;
            var11 = var17[var11];
            var _closure2_slot3 = var11;
            var14 = var14[var9];
            var15 = var15.bind(var4)(var14);
            var14 = var15.useSharedValue;
            var14 = var14.bind(var15)(var16);
            var _closure2_slot4 = var14;
            var15 = var6 != var8;
            if(!var15) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var15 = var10 !== var8;
case 17:
            if(!var15) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var8 = var11.bind(var4)(var8);
case 19:
            var15 = _closure1_slot4;
            var11 = var15.useEffect;
            var8 = new Array(2);
            var8[0] = var3;
            var8[1] = var14;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure2_slot4;
                    var3 = var4.set;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 20;
                    var5 = var5[var1];
                    var1 = undefined;
                    var9 = var6.bind(var1)(var5);
                    var8 = var9.withSpring;
                    var5 = _closure2_slot0;
                    var7 = 0;
                    if(!var5) { _fun0005_ip = 21; continue _fun0005 }
case 7:
                    var7 = 1;
case 21:
                    var17 = _closure1_slot11;
                    var5 = function n(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var2 = true;
                            var1 = arg1;
                            var1 = var2 !== var1;
                            if(var1) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                            var1 = _closure2_slot0;
case 22:
                            if(var1) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var1 = var3[var1];
                            var3 = undefined;
                            var4 = var2.bind(var3)(var1);
                            var2 = var4.runOnJS;
                            var1 = _closure2_slot3;
                            var2 = var2.bind(var4)(var1);
                            var1 = null;
                            var1 = var2.bind(var3)(var1);
case 24:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var10 = {};
                    var12 = _closure2_slot0;
                    var10['shouldShowBanner'] = var12;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var12 = 15;
                    var12 = var14[var12];
                    var12 = var13.bind(var1)(var12);
                    var12 = var12.runOnJS;
                    var10['runOnJS'] = var12;
                    var11 = _closure2_slot3;
                    var10['setRenderState'] = var11;
                    var5['__closure'] = var10;
                    var10 = 3065113239920.0;
                    var5['__workletHash'] = var10;
                    var2 = _closure1_slot23;
                    var5['__initData'] = var2;
                    var16 = 'respect-motion-settings';
                    var19 = var9;
                    var18 = var7;
                    var15 = var5;
                    var2 = var19[var8](var18, var17, var16, var15, var14);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = var11.bind(var15)(var3, var8);
            var11 = _closure1_slot4;
            var8 = var11.useEffect;
            var3 = new Array(2);
            var3[0] = var1;
            var3[1] = var12;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 20;
                    var6 = var6[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var6);
                    var6 = var7.withSpring;
                    var8 = _closure2_slot1;
                    var5 = 0;
                    if(!var8) { _fun0007_ip = 21; continue _fun0007 }
case 7:
                    var5 = 1;
case 21:
                    var2 = _closure1_slot11;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var8.bind(var11)(var1, var3);
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = var1[var9];
            var8 = var8.bind(var4)(var3);
            var3 = var8.useAnimatedStyle;
            var2 = function v() {
                var1 = {};
                var4 = {};
                var5 = _closure2_slot4;
                var3 = var5.get;
                var5 = var3.bind(var5)();
                var3 = 1;
                var5 = var3 - var5;
                var3 = _closure1_slot9;
                var3 = var5 * var3;
                var4['translateY'] = var3;
                var3 = new Array(1);
                var3[0] = var4;
                var1['transform'] = var3;
                var3 = _closure2_slot4;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['opacity'] = var2;
                return var1;
            };
            var11 = {};
            var11['progress'] = var14;
            var14 = _closure1_slot9;
            var11['CONNECTION_BANNER_HEIGHT'] = var14;
            var2['__closure'] = var11;
            var11 = 13973493587548.0;
            var2['__workletHash'] = var11;
            var11 = _closure1_slot24;
            var2['__initData'] = var11;
            var8 = var3.bind(var8)(var2);
            var3 = _closure1_slot14;
            var2 = _closure1_slot1;
            var1 = var1[var9];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var9 = 'none';
            var1['pointerEvents'] = var9;
            var9 = var5.container;
            var5 = new Array(3);
            var5[0] = var9;
            var9 = {};
            var11 = _closure1_slot9;
            var11 = var13 + var11;
            var9['height'] = var11;
            var5[1] = var9;
            var5[2] = var8;
            var1['style'] = var5;
            var5 = _closure1_slot8;
            var5 = var5.BACK_ONLINE;
            var8 = null;
            if(!(var10 === var5)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var11 = _closure1_slot13;
            var9 = _closure1_slot28;
            var5 = {};
            var5['progress'] = var12;
            var8 = var11.bind(var4)(var9, var5);
case 26:
            var5 = new Array(2);
            var5[0] = var8;
            var8 = var6 != var10;
            var6 = null;
            if(!var8) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var9 = _closure1_slot13;
            var8 = _closure1_slot27;
            var7 = {};
            var7['state'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 28:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot29 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var7 = var6[var12];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot5 = var7;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var7 = var6[var4];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ConnectivityIndicatorState;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.CONNECTION_BANNER_HEIGHT;
    var _closure1_slot9 = var10;
    var7 = var4.useYouBarBottomMargin;
    var _closure1_slot10 = var7;
    var4 = var4.YOU_BAR_SPRING_CONFIG;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = ['transparent', 'black', 'black', 'transparent'];
    var _closure1_slot15 = var4;
    var4 = [0, 0.25, 0.75, 1];
    var _closure1_slot16 = var4;
    var4 = {'x': 0, 'y': 0.5};
    var _closure1_slot17 = var4;
    var4 = {'x': 1, 'y': 0.5};
    var _closure1_slot18 = var4;
    var4 = [0, 0.4, 0.75, 1];
    var _closure1_slot19 = var4;
    var4 = {'x': 0, 'y': 0};
    var _closure1_slot20 = var4;
    var4 = {'x': 0, 'y': 1};
    var _closure1_slot21 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'left': 0, 'right': 0, 'bottom': 0};
    var4['container'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
    var4['glow'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var4['glowMaskGradient'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'height': null, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'};
    var9['height'] = var10;
    var10 = 8;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['gap'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_12;
    var9['paddingHorizontal'] = var10;
    var4['content'] = var9;
    var9 = {'width': 16, 'height': 16, 'alignItems': 'center', 'justifyContent': 'center'};
    var4['leadingSlot'] = var9;
    var9 = {};
    var11 = {};
    var10 = 0.8;
    var11['scale'] = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var9['transform'] = var10;
    var4['spinner'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot22 = var4;
    var4 = {};
    var7 = 'function ConnectionBannerTsx1(finished){const{shouldShowBanner,runOnJS,setRenderState}=this.__closure;if(finished===true&&!shouldShowBanner){runOnJS(setRenderState)(null);}}';
    var4['code'] = var7;
    var _closure1_slot23 = var4;
    var4 = {};
    var7 = 'function ConnectionBannerTsx2(){const{progress,CONNECTION_BANNER_HEIGHT}=this.__closure;return{transform:[{translateY:(1-progress.get())*CONNECTION_BANNER_HEIGHT}],opacity:progress.get()};}';
    var4['code'] = var7;
    var _closure1_slot24 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/ConnectionBanner.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectionBanner() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 21;
            var1 = var4[var1];
            var5 = undefined;
            var4 = var3.bind(var5)(var1);
            var3 = var4.useConfig;
            var1 = {};
            var6 = 'ConnectionBanner';
            var1['location'] = var6;
            var3 = var3.bind(var4)(var1);
            var1 = var3.timeoutMs;
            var3 = var3.hidden;
            var4 = function useConnectivityIndicatorAnalytics(arg1) {
                var6 = arg1;
                var _closure3_slot0 = var6;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 18;
                var4 = var4[var1];
                var1 = undefined;
                var8 = var5.bind(var1)(var4);
                var7 = var8.useStateFromStores;
                var4 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() {
                    var2 = _closure1_slot7;
                    var1 = var2.getState;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var7 = var7.bind(var8)(var5, var4);
                var _closure3_slot1 = var7;
                var8 = _closure1_slot4;
                var5 = var8.useRef;
                var4 = null;
                var4 = var5.bind(var8)(var4);
                var _closure3_slot2 = var4;
                var5 = _closure1_slot4;
                var4 = var5.useEffect;
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var6;
                var2 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var3 = _closure3_slot2;
                        var4 = var3.current;
                        var1 = _closure3_slot1;
                        var3['current'] = var1;
                        var1 = null;
                        if(!(var1 != var4)) { _fun0009_ip = 30; continue _fun0009 }
case 31:
                        var3 = _closure1_slot8;
                        var3 = var3.HIDDEN;
                        if(!(var4 !== var3)) { _fun0009_ip = 32; continue _fun0009 }
case 33:
                        var3 = _closure1_slot8;
                        var3 = var3.BACK_ONLINE;
                        if(!(var4 === var3)) { _fun0009_ip = 30; continue _fun0009 }
case 32:
                        var4 = _closure3_slot1;
                        var3 = _closure1_slot8;
                        var3 = var3.HIDDEN;
                        if(!(var4 !== var3)) { _fun0009_ip = 30; continue _fun0009 }
case 34:
                        var4 = _closure3_slot1;
                        var3 = _closure1_slot8;
                        var3 = var3.BACK_ONLINE;
                        if(!(var4 !== var3)) { _fun0009_ip = 30; continue _fun0009 }
case 35:
                        var3 = _closure3_slot0;
                        var5 = 'hidden';
                        if(var3) { _fun0009_ip = 36; continue _fun0009 }
case 37:
                        var4 = _closure3_slot1;
                        var2 = _closure1_slot8;
                        var3 = var2.NO_CONNECTION;
                        var2 = 'connecting';
                        if(!(var4 === var3)) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                        var2 = 'offline';
case 38:
                        var5 = var2;
case 36:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 19;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.track;
                        var1 = _closure1_slot12;
                        var2 = var1.CONNECTION_INDICATOR_SHOWN;
                        var1 = {};
                        var1['connection_indicator_type'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
case 30:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var4 = null;
            var6 = var4 == var1;
            var1 = null;
            if(var6) { _fun0008_ip = 40; continue _fun0008 }
case 41:
            var1 = null;
            if(var3) { _fun0008_ip = 40; continue _fun0008 }
case 42:
            var4 = _closure1_slot13;
            var3 = _closure1_slot29;
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
case 40:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();