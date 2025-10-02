// app/modules/main_tabs_v2/native/YouBar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function UsernameAnimated(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.username;
            var13 = var1.transitionState;
            var _closure2_slot0 = var13;
            var11 = var1.onCleanup;
            var _closure2_slot1 = var11;
            var1 = _closure1_slot25;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 12;
            var3 = var15[var1];
            var7 = var14.bind(var4)(var3);
            var3 = var7.useSharedValue;
            var12 = 0;
            var8 = var3.bind(var7)(var12);
            var _closure2_slot2 = var8;
            var10 = _closure1_slot5;
            var7 = var10.useEffect;
            var3 = new Array(3);
            var3[0] = var13;
            var3[1] = var8;
            var3[2] = var11;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 16;
                    var4 = var1[var7];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.ENTERED;
                    if(!(var5 !== var4)) { _fun0002_ip = 267; continue _fun0002 }
 51:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.MOUNTED;
                    if(!(var5 !== var4)) { _fun0002_ip = 267; continue _fun0002 }
 91:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.YEETED;
                    if(!(var5 === var4)) { _fun0002_ip = 319; continue _fun0002 }
 131:
                    var6 = _closure2_slot2;
                    var5 = var6.set;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 17;
                    var4 = var13[var4];
                    var11 = var12.bind(var1)(var4);
                    var10 = var11.withSpring;
                    var16 = _closure1_slot26;
                    var8 = function t() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.runOnJS;
                        var2 = _closure2_slot1;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var4 = {};
                    var7 = 12;
                    var7 = var13[var7];
                    var7 = var12.bind(var1)(var7);
                    var7 = var7.runOnJS;
                    var4['runOnJS'] = var7;
                    var7 = _closure2_slot1;
                    var4['onCleanup'] = var7;
                    var8['__closure'] = var4;
                    var4 = 15382259463637.0;
                    var8['__workletHash'] = var4;
                    var4 = _closure1_slot28;
                    var8['__initData'] = var4;
                    var17 = 0;
                    var15 = 'respect-motion-settings';
                    var18 = var11;
                    var14 = var8;
                    var4 = var18[var10](var17, var16, var15, var14, var13);
                    var4 = var5.bind(var6)(var4);
                    _fun0002_ip = 319; continue _fun0002;
 267:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 17;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.withSpring;
                    var5 = _closure1_slot27;
                    var2 = 1;
                    var2 = var6.bind(var7)(var2, var5);
                    var2 = var3.bind(var4)(var2);
 319:
                    return var1;
                }
            };
            var2 = var7.bind(var10)(var2, var3);
            var3 = _closure1_slot21;
            var2 = _closure1_slot1;
            var1 = var15[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var7 = var5.usernameRow;
            var5 = new Array(2);
            var5[0] = var7;
            var7 = {};
            var7['opacity'] = var8;
            var5[1] = var7;
            var1['style'] = var5;
            var8 = _closure1_slot20;
            var5 = 18;
            var5 = var15[var5];
            var5 = var14.bind(var4)(var5);
            var7 = var5.Text;
            var5 = {'variant': 'heading-md/bold', 'color': 'header-primary', 'lineClamp': 1, 'ellipsizeMode': 'tail', 'maxFontSizeMultiplier': 1.75};
            var11 = 1;
            var10 = {};
            var13 = 19;
            var13 = var15[var13];
            var14 = var14.bind(var4)(var13);
            var13 = var14.isAndroid;
            var13 = var13.bind(var14)();
            if(!var13) { _fun0001_ip = 236; continue _fun0001 }
 233:
            var12 = 2;
 236:
            var10['paddingBottom'] = var12;
            var10['flexShrink'] = var11;
            var5['style'] = var10;
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot20;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 20;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.ChevronSmallRightIcon;
            var6 = {'size': 'xs', 'color': 'header-secondary'};
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function renderUsername(arg1, arg2, arg3, arg4) {
        var5 = _closure1_slot20;
        var4 = _closure1_slot41;
        var3 = {};
        var1 = arg2;
        var3['username'] = var1;
        var1 = arg3;
        var3['transitionState'] = var1;
        var1 = arg4;
        var3['onCleanup'] = var1;
        var2 = undefined;
        var1 = arg1;
        var1 = var5.bind(var2)(var4, var3, var1);
        return var1;
    };
    var _closure1_slot42 = var1;
    var1 = function YouAvatarAnimated(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var14 = var2.selectedGuildId;
            var13 = var2.transitionState;
            var _closure2_slot0 = var13;
            var12 = var2.cleanup;
            var _closure2_slot1 = var12;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 21;
            var6 = var4[var2];
            var5 = undefined;
            var10 = var3.bind(var5)(var6);
            var8 = var10.useStateFromStores;
            var6 = _closure1_slot11;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var8.bind(var10)(var7, var6);
            var2 = var4[var2];
            var8 = var3.bind(var5)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot12;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var7.bind(var8)(var6, var2);
            var2 = 12;
            var6 = var4[var2];
            var8 = var3.bind(var5)(var6);
            var7 = var8.useSharedValue;
            var6 = 0;
            var7 = var7.bind(var8)(var6);
            var _closure2_slot2 = var7;
            var11 = _closure1_slot5;
            var8 = var11.useEffect;
            var6 = new Array(3);
            var6[0] = var13;
            var6[1] = var7;
            var6[2] = var12;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 16;
                    var4 = var1[var7];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.ENTERED;
                    if(!(var5 !== var4)) { _fun0004_ip = 267; continue _fun0004 }
 51:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.MOUNTED;
                    if(!(var5 !== var4)) { _fun0004_ip = 267; continue _fun0004 }
 91:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.YEETED;
                    if(!(var5 === var4)) { _fun0004_ip = 319; continue _fun0004 }
 131:
                    var6 = _closure2_slot2;
                    var5 = var6.set;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 17;
                    var4 = var13[var4];
                    var11 = var12.bind(var1)(var4);
                    var10 = var11.withSpring;
                    var16 = _closure1_slot26;
                    var8 = function t() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.runOnJS;
                        var2 = _closure2_slot1;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var4 = {};
                    var7 = 12;
                    var7 = var13[var7];
                    var7 = var12.bind(var1)(var7);
                    var7 = var7.runOnJS;
                    var4['runOnJS'] = var7;
                    var7 = _closure2_slot1;
                    var4['cleanup'] = var7;
                    var8['__closure'] = var4;
                    var4 = 16071268952598.0;
                    var8['__workletHash'] = var4;
                    var4 = _closure1_slot29;
                    var8['__initData'] = var4;
                    var17 = 0;
                    var15 = 'respect-motion-settings';
                    var18 = var11;
                    var14 = var8;
                    var4 = var18[var10](var17, var16, var15, var14, var13);
                    var4 = var5.bind(var6)(var4);
                    _fun0004_ip = 319; continue _fun0004;
 267:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 17;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.withSpring;
                    var5 = _closure1_slot27;
                    var2 = 1;
                    var2 = var6.bind(var7)(var2, var5);
                    var2 = var3.bind(var4)(var2);
 319:
                    return var1;
                }
            };
            var1 = var8.bind(var11)(var1, var6);
            var1 = 22;
            var1 = var4[var1];
            var4 = var3.bind(var5)(var1);
            var3 = var4.useAvatarDecoration;
            var12 = null;
            var6 = var12 != var14;
            var1 = undefined;
            if(!var6) { _fun0003_ip = 223; continue _fun0003 }
 220:
            var1 = var14;
 223:
            var11 = var3.bind(var4)(var15, var1);
            var3 = var12 == var15;
            var1 = null;
            if(var3) { _fun0003_ip = 446; continue _fun0003 }
 241:
            var4 = _closure1_slot20;
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = var16[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var6 = {};
            var6['opacity'] = var7;
            var8 = _closure1_slot0;
            var7 = 16;
            var7 = var16[var7];
            var7 = var8.bind(var5)(var7);
            var7 = var7.TransitionStates;
            var8 = var7.YEETED;
            var7 = 'relative';
            if(!(var13 === var8)) { _fun0003_ip = 315; continue _fun0003 }
 311:
            var7 = 'absolute';
 315:
            var6['position'] = var7;
            var2['style'] = var6;
            var8 = _closure1_slot20;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var13 = 23;
            var6 = var6[var13];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['user'] = var15;
            var15 = var12 != var14;
            var12 = undefined;
            if(!var15) { _fun0003_ip = 365; continue _fun0003 }
 362:
            var12 = var14;
 365:
            var6['guildId'] = var12;
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var13];
            var9 = var12.bind(var5)(var9);
            var9 = var9.AvatarSizes;
            var9 = var9.NORMAL;
            var6['size'] = var9;
            var9 = false;
            var6['animate'] = var9;
            var9 = true;
            var6['needsOffscreenAlphaCompositing'] = var9;
            var6['avatarDecoration'] = var11;
            var6['status'] = var10;
            var6['autoStatusCutout'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 446:
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function NameplateAnimated(arg1) {
        var1 = arg1;
        var8 = var1.nameplate;
        var13 = var1.transitionState;
        var _closure2_slot0 = var13;
        var10 = var1.barWidth;
        var12 = var1.onCleanup;
        var _closure2_slot1 = var12;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 12;
        var3 = var9[var1];
        var4 = undefined;
        var7 = var6.bind(var4)(var3);
        var6 = var7.useSharedValue;
        var3 = 0;
        var11 = var6.bind(var7)(var3);
        var _closure2_slot2 = var11;
        var7 = _closure1_slot5;
        var6 = var7.useEffect;
        var3 = new Array(3);
        var3[0] = var13;
        var3[1] = var11;
        var3[2] = var12;
        var2 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var5 = _closure2_slot0;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 16;
                var4 = var1[var7];
                var1 = undefined;
                var4 = var6.bind(var1)(var4);
                var4 = var4.TransitionStates;
                var4 = var4.ENTERED;
                if(!(var5 !== var4)) { _fun0005_ip = 267; continue _fun0005 }
 51:
                var5 = _closure2_slot0;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var6.bind(var1)(var4);
                var4 = var4.TransitionStates;
                var4 = var4.MOUNTED;
                if(!(var5 !== var4)) { _fun0005_ip = 267; continue _fun0005 }
 91:
                var5 = _closure2_slot0;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var6.bind(var1)(var4);
                var4 = var4.TransitionStates;
                var4 = var4.YEETED;
                if(!(var5 === var4)) { _fun0005_ip = 319; continue _fun0005 }
 131:
                var6 = _closure2_slot2;
                var5 = var6.set;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var4 = 17;
                var4 = var13[var4];
                var11 = var12.bind(var1)(var4);
                var10 = var11.withSpring;
                var16 = _closure1_slot26;
                var8 = function t() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot1;
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var4 = {};
                var7 = 12;
                var7 = var13[var7];
                var7 = var12.bind(var1)(var7);
                var7 = var7.runOnJS;
                var4['runOnJS'] = var7;
                var7 = _closure2_slot1;
                var4['onCleanup'] = var7;
                var8['__closure'] = var4;
                var4 = 12642314984407.0;
                var8['__workletHash'] = var4;
                var4 = _closure1_slot30;
                var8['__initData'] = var4;
                var17 = 0;
                var15 = 'respect-motion-settings';
                var18 = var11;
                var14 = var8;
                var4 = var18[var10](var17, var16, var15, var14, var13);
                var4 = var5.bind(var6)(var4);
                _fun0005_ip = 319; continue _fun0005;
 267:
                var4 = _closure2_slot2;
                var3 = var4.set;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 17;
                var5 = var7[var5];
                var7 = var6.bind(var1)(var5);
                var6 = var7.withSpring;
                var5 = _closure1_slot27;
                var2 = 1;
                var2 = var6.bind(var7)(var2, var5);
                var2 = var3.bind(var4)(var2);
 319:
                return var1;
            }
        };
        var2 = var6.bind(var7)(var2, var3);
        var3 = _closure1_slot20;
        var6 = _closure1_slot1;
        var1 = var9[var1];
        var1 = var6.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var7 = {'opacity': null, 'position': 'absolute', 'width': null, 'left': 4294967295, 'height': null, 'top': 4294967295};
        var7['opacity'] = var11;
        var7['width'] = var10;
        var10 = _closure1_slot15;
        var7['height'] = var10;
        var1['style'] = var7;
        var7 = _closure1_slot20;
        var5 = 24;
        var5 = var9[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {'nameplate': null, 'isFocused': true, 'animate': false};
        var5['nameplate'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot44 = var1;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var16 = 1;
    var4 = var6[var16];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var15 = 2;
    var7 = var6[var15];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot6 = var8;
    var4 = var4.Pressable;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.useYouBarBottomMargin;
    var _closure1_slot13 = var8;
    var8 = var4.YOU_BAR_GRADIENT_EXTRA_HEIGHT;
    var _closure1_slot14 = var8;
    var14 = var4.YOU_BAR_HEIGHT;
    var _closure1_slot15 = var14;
    var17 = var4.YOU_BAR_MARGIN;
    var _closure1_slot16 = var17;
    var8 = var4.YOU_BAR_PADDING;
    var _closure1_slot17 = var8;
    var8 = var4.CUSTOM_THEME_COLORS;
    var _closure1_slot18 = var8;
    var4 = var4.CUSTOM_THEME_BACKGROUND_COLORS;
    var _closure1_slot19 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot20 = var8;
    var8 = var4.jsxs;
    var _closure1_slot21 = var8;
    var4 = var4.Fragment;
    var _closure1_slot22 = var4;
    var4 = {};
    var11 = 11;
    var8 = var6[var11];
    var8 = var12.bind(var1)(var8);
    var8 = var8.spacing;
    var8 = var8.PX_16;
    var4['top'] = var8;
    var8 = var6[var11];
    var8 = var12.bind(var1)(var8);
    var8 = var8.spacing;
    var8 = var8.PX_16;
    var4['bottom'] = var8;
    var8 = var6[var11];
    var8 = var12.bind(var1)(var8);
    var8 = var8.spacing;
    var8 = var8.PX_16;
    var4['left'] = var8;
    var8 = var6[var11];
    var8 = var12.bind(var1)(var8);
    var8 = var8.spacing;
    var8 = var8.PX_16;
    var4['right'] = var8;
    var _closure1_slot23 = var4;
    var4 = 12;
    var4 = var6[var4];
    var9 = var12.bind(var1)(var4);
    var8 = var9.createAnimatedComponent;
    var4 = 13;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var4 = var8.bind(var9)(var4);
    var _closure1_slot24 = var4;
    var4 = 14;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'position': 'absolute', 'left': 0, 'right': 0, 'bottom': 0, 'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': null, 'overflow': 'hidden'};
    var13 = 'row';
    var18 = var6[var11];
    var18 = var12.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BG_SURFACE_OVERLAY;
    var10['backgroundColor'] = var18;
    var18 = var6[var11];
    var18 = var12.bind(var1)(var18);
    var18 = var18.shadows;
    var20 = var18.SHADOW_TOP_HIGH;
    var21 = var10;
    var18 = copyDataProperties(var21, var20);
    var4['youRow'] = var10;
    var10 = {};
    var10['marginHorizontal'] = var17;
    var10['borderWidth'] = var16;
    var17 = var6[var11];
    var17 = var12.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BORDER_FAINT;
    var10['borderColor'] = var17;
    var17 = var14 / var15;
    var10['borderRadius'] = var17;
    var4['youRowFloating'] = var10;
    var10 = {'flexDirection': 'row', 'gap': 8};
    var4['youRowRight'] = var10;
    var10 = {};
    var10['flex'] = var16;
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_12;
    var10['marginRight'] = var16;
    var16 = var14 / var15;
    var10['borderRadius'] = var16;
    var4['youPressable'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var14 = var14 / var15;
    var10['borderRadius'] = var14;
    var4['youButton'] = var10;
    var10 = {'flex': 1, 'flexDirection': 'column', 'marginLeft': null, 'justifyContent': 'center', 'height': '100%'};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var10['marginLeft'] = var14;
    var4['userText'] = var10;
    var10 = {'position': 'relative', 'overflow': 'hidden'};
    var4['usernameContainer'] = var10;
    var10 = {};
    var10['flexDirection'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var10['gap'] = var13;
    var4['statusRow'] = var10;
    var13 = 16;
    var10 = {'width': 16, 'height': 16};
    var4['statusEmoji'] = var10;
    var10 = {'position': 'absolute', 'flexDirection': 'row', 'alignItems': 'center'};
    var4['usernameRow'] = var10;
    var10 = {};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_MOD_FAINT;
    var10['backgroundColor'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var10['borderRadius'] = var14;
    var10['height'] = var13;
    var13 = 80;
    var10['width'] = var13;
    var4['placeholder'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_PRIMARY;
    var10['backgroundColor'] = var13;
    var4['youRowClientTheme'] = var10;
    var10 = {'position': 'relative', 'borderRadius': null, 'overflow': 'hidden'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var10['borderRadius'] = var13;
    var4['buttonContainer'] = var10;
    var10 = {'width': 20, 'height': 20};
    var4['largeButtonIcon'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.STATUS_DANGER;
    var10['backgroundColor'] = var13;
    var4['settingsBadge'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_BRAND;
    var10['backgroundColor'] = var11;
    var4['icymiBadge'] = var10;
    var10 = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0};
    var4['floatingShade'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot25 = var4;
    var4 = {'damping': 10, 'stiffness': 300, 'mass': 1, 'overshootClamping': true, 'restSpeedThreshold': 0.001, 'restDisplacementThreshold': 0.001};
    var _closure1_slot26 = var4;
    var4 = {'damping': 20, 'stiffness': 200, 'mass': 1, 'restSpeedThreshold': 0.001, 'restDisplacementThreshold': 0.001};
    var _closure1_slot27 = var4;
    var4 = {};
    var8 = 'function YouBarTsx1(){const{runOnJS,onCleanup}=this.__closure;runOnJS(onCleanup)();}';
    var4['code'] = var8;
    var _closure1_slot28 = var4;
    var4 = {};
    var8 = 'function YouBarTsx2(){const{runOnJS,cleanup}=this.__closure;runOnJS(cleanup)();}';
    var4['code'] = var8;
    var _closure1_slot29 = var4;
    var4 = {};
    var8 = 'function YouBarTsx3(){const{runOnJS,onCleanup}=this.__closure;runOnJS(onCleanup)();}';
    var4['code'] = var8;
    var _closure1_slot30 = var4;
    var8 = var7.memo;
    var4 = function() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = _closure1_slot25;
            var4 = undefined;
            var12 = var1.bind(var4)();
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 25;
            var2 = var1[var2];
            var2 = var6.bind(var4)(var2);
            var5 = var2.YouBarExperiment;
            var3 = var5.useExperiment;
            var2 = {};
            var7 = 'YouBar';
            var2['location'] = var7;
            var2 = var3.bind(var5)(var2);
            var8 = var2.animateBetweenServers;
            var _closure2_slot0 = var8;
            var3 = 21;
            var2 = var1[var3];
            var9 = var6.bind(var4)(var2);
            var7 = var9.useStateFromStores;
            var2 = _closure1_slot12;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var7.bind(var9)(var5, var2);
            var _closure2_slot1 = var5;
            var2 = var1[var3];
            var11 = var6.bind(var4)(var2);
            var9 = var11.useStateFromStores;
            var2 = _closure1_slot11;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var23 = var9.bind(var11)(var7, var2);
            var2 = var1[var3];
            var11 = var6.bind(var4)(var2);
            var9 = var11.useStateFromStores;
            var2 = _closure1_slot10;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var9.bind(var11)(var7, var2);
            var _closure2_slot2 = var2;
            var3 = var1[var3];
            var9 = var6.bind(var4)(var3);
            var7 = var9.useStateFromStores;
            var3 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot2;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0007_ip = 53; continue _fun0007 }
 18:
                    var3 = _closure2_slot1;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0007_ip = 53; continue _fun0007 }
 31:
                    var4 = _closure1_slot9;
                    var3 = var4.getSelfMember;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
 53:
                    return var1;
                }
            };
            var6 = var7.bind(var9)(var6, var3);
            var3 = _closure1_slot1;
            var24 = 26;
            var1 = var1[var24];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useName;
            var9 = var1.bind(var3)(var5);
            var1 = var9;
            if(!var8) { _fun0006_ip = 316; continue _fun0006 }
 274:
            var3 = null;
            var11 = var3 == var6;
            var7 = undefined;
            if(var11) { _fun0006_ip = 291; continue _fun0006 }
 285:
            var7 = var6.nick;
 291:
            var1 = var9;
            if(!(var3 != var7)) { _fun0006_ip = 316; continue _fun0006 }
 298:
            var7 = var3 == var6;
            var3 = undefined;
            if(var7) { _fun0006_ip = 313; continue _fun0006 }
 307:
            var3 = var6.nick;
 313:
            var1 = var3;
 316:
            var _closure2_slot3 = var1;
            var9 = _closure1_slot5;
            var7 = var9.useMemo;
            var6 = new Array(1);
            var6[0] = var1;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0008_ip = 19; continue _fun0008 }
 13:
                    var1 = new Array(0);
                    _fun0008_ip = 34; continue _fun0008;
 19:
                    var3 = _closure2_slot3;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
 34:
                    return var1;
                }
            };
            var20 = var7.bind(var9)(var3, var6);
            var7 = _closure1_slot5;
            var6 = var7.useMemo;
            var3 = new Array(2);
            var3[0] = var8;
            var3[1] = var2;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot0;
                    var2 = new Array(1);
                    if(var1) { _fun0009_ip = 25; continue _fun0009 }
 14:
                    var1 = undefined;
                    var2[0] = var1;
                    var1 = var2;
                    _fun0009_ip = 36; continue _fun0009;
 25:
                    var3 = _closure2_slot2;
                    var2[0] = var3;
                    var1 = var2;
 36:
                    return var1;
                }
            };
            var9 = var6.bind(var7)(var2, var3);
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 27;
            var2 = var7[var2];
            var3 = var6.bind(var4)(var2);
            var2 = var3.useCustomStatusActivity;
            var22 = var2.bind(var3)();
            var2 = 28;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var3 = var2.AVATAR_SIZE_MAP;
            var2 = 23;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.AvatarSizes;
            var2 = var2.NORMAL;
            var11 = var3[var2];
            var7 = _closure1_slot5;
            var6 = var7.useCallback;
            var3 = function(arg1, arg2, arg3, arg4) {
                var5 = _closure1_slot20;
                var4 = _closure1_slot43;
                var3 = {};
                var1 = arg2;
                var3['selectedGuildId'] = var1;
                var1 = arg3;
                var3['transitionState'] = var1;
                var1 = arg4;
                var3['cleanup'] = var1;
                var2 = undefined;
                var1 = arg1;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var2 = new Array(0);
            var8 = var6.bind(var7)(var3, var2);
            var3 = _closure1_slot21;
            var2 = _closure1_slot6;
            var21 = null;
            if(!(var21 != var5)) { _fun0006_ip = 1087; continue _fun0006 }
 503:
            if(!(var21 != var1)) { _fun0006_ip = 1087; continue _fun0006 }
 510:
            var1 = {};
            var5 = var12.youButton;
            var1['style'] = var5;
            var7 = _closure1_slot20;
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var26 = 16;
            var5 = var30[var26];
            var5 = var29.bind(var4)(var5);
            var6 = var5.TransitionGroup;
            var5 = {};
            var5['items'] = var9;
            var9 = function getItemKey(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    var2 = var2 == var3;
                    var3 = undefined;
                    if(var2) { _fun0010_ip = 45; continue _fun0010 }
 18:
                    var6 = _closure2_slot1;
                    var5 = var6.getAvatarURL;
                    var10 = arg1;
                    var9 = 16;
                    var11 = var6;
                    var8 = false;
                    var7 = false;
                    var3 = var11[var5](var10, var9, var8, var7, var6);
 45:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = '';
                    var1 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var5['getItemKey'] = var9;
            var5['renderItem'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot21;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var12.userText;
            var6['style'] = var9;
            var13 = _closure1_slot21;
            var9 = {};
            var14 = var12.usernameContainer;
            var9['style'] = var14;
            var16 = _closure1_slot20;
            var17 = 18;
            var14 = var30[var17];
            var14 = var29.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'variant': 'heading-md/bold', 'color': 'header-primary', 'lineClamp': 1, 'maxFontSizeMultiplier': 1.75, 'style': null, 'children': 'Disquird'};
            var25 = 1;
            var18 = {};
            var27 = 0;
            var18['opacity'] = var27;
            var28 = 19;
            var28 = var30[var28];
            var29 = var29.bind(var4)(var28);
            var28 = var29.isAndroid;
            var28 = var28.bind(var29)();
            if(!var28) { _fun0006_ip = 699; continue _fun0006 }
 696:
            var27 = 2;
 699:
            var18['paddingBottom'] = var27;
            var14['style'] = var18;
            var15 = var16.bind(var4)(var15, var14);
            var14 = new Array(2);
            var14[0] = var15;
            var18 = _closure1_slot20;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var26];
            var15 = var16.bind(var4)(var15);
            var16 = var15.TransitionGroup;
            var15 = {};
            var15['items'] = var20;
            var19 = function getItemKey(arg1) {
                var1 = arg1;
                return var1;
            };
            var15['getItemKey'] = var19;
            var19 = _closure1_slot42;
            var15['renderItem'] = var19;
            var15 = var18.bind(var4)(var16, var15);
            var14[1] = var15;
            var9['children'] = var14;
            var13 = var13.bind(var4)(var7, var9);
            var9 = new Array(2);
            var9[0] = var13;
            var15 = _closure1_slot21;
            var14 = _closure1_slot6;
            var13 = {};
            var16 = var12.statusRow;
            var13['style'] = var16;
            var18 = var21 == var22;
            var16 = undefined;
            if(var18) { _fun0006_ip = 841; continue _fun0006 }
 836:
            var16 = var22.emoji;
 841:
            var16 = var21 != var16;
            var18 = null;
            if(!var16) { _fun0006_ip = 905; continue _fun0006 }
 850:
            var20 = _closure1_slot20;
            var19 = _closure1_slot1;
            var27 = _closure1_slot2;
            var16 = 30;
            var16 = var27[var16];
            var19 = var19.bind(var4)(var16);
            var16 = {};
            var16['size'] = var26;
            var26 = var12.statusEmoji;
            var16['style'] = var26;
            var26 = var22.emoji;
            var16['emoji'] = var26;
            var18 = var20.bind(var4)(var19, var16);
 905:
            var16 = new Array(2);
            var16[0] = var18;
            var19 = _closure1_slot20;
            var26 = _closure1_slot0;
            var20 = _closure1_slot2;
            var17 = var20[var17];
            var17 = var26.bind(var4)(var17);
            var18 = var17.Text;
            var17 = {'variant': 'text-xs/medium', 'color': 'text-normal', 'lineClamp': 1, 'ellipsizeMode': 'tail', 'accessibilityHint': null, 'maxFontSizeMultiplier': 1.75};
            var20 = var20[var24];
            var26 = var26.bind(var4)(var20);
            var20 = var26.humanizeStatus;
            var20 = var20.bind(var26)(var23);
            var17['accessibilityHint'] = var20;
            var20 = {};
            var20['flexShrink'] = var25;
            var17['style'] = var20;
            var25 = var21 == var22;
            var20 = undefined;
            if(var25) { _fun0006_ip = 1004; continue _fun0006 }
 999:
            var20 = var22.state;
 1004:
            if(!(var21 == var20)) { _fun0006_ip = 1036; continue _fun0006 }
 1008:
            var22 = _closure1_slot0;
            var21 = _closure1_slot2;
            var21 = var21[var24];
            var22 = var22.bind(var4)(var21);
            var21 = var22.humanizeStatus;
            var20 = var21.bind(var22)(var23);
 1036:
            var17['children'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var16[1] = var17;
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var9[1] = var13;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            _fun0006_ip = 1232; continue _fun0006;
 1087:
            var5 = {};
            var6 = var12.youButton;
            var5['style'] = var6;
            var8 = _closure1_slot20;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 29;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.ReactionIcon;
            var6 = {};
            var9 = {};
            var9['width'] = var11;
            var9['height'] = var11;
            var6['style'] = var9;
            var9 = 'bg-mod-strong';
            var6['color'] = var9;
            var7 = var8.bind(var4)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot20;
            var8 = _closure1_slot6;
            var7 = {};
            var11 = var12.userText;
            var7['style'] = var11;
            var11 = _closure1_slot20;
            var10 = {};
            var12 = var12.placeholder;
            var10['style'] = var12;
            var10 = var11.bind(var4)(var8, var10);
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var6[1] = var7;
            var5['children'] = var6;
            var1 = var5;
 1232:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot31 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var2 = arg1;
            var12 = var2.hasNameplate;
            var14 = var2.icon;
            var7 = var2.hasBadge;
            var _closure2_slot0 = var7;
            var15 = var2.badgeStyle;
            var9 = var2.onPress;
            var11 = var2.a11yLabel;
            var2 = _closure1_slot25;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var3 = function useIconBadgeCutout(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var2 = arg1;
                    var8 = var2.size;
                    var _closure3_slot0 = var8;
                    var7 = var2.xOffset;
                    var3 = undefined;
                    if(!(var7 === var3)) { _fun0012_ip = 28; continue _fun0012 }
 26:
                    var7 = 0;
 28:
                    var _closure3_slot1 = var7;
                    var6 = var2.yOffset;
                    if(!(var6 === var3)) { _fun0012_ip = 44; continue _fun0012 }
 42:
                    var6 = 0;
 44:
                    var _closure3_slot2 = var6;
                    var10 = var2.badgeRadius;
                    var _closure3_slot3 = var10;
                    var5 = var2.badgeWidth;
                    var _closure3_slot4 = var5;
                    var9 = var2.borderWidth;
                    var _closure3_slot5 = var9;
                    var4 = _closure1_slot5;
                    var3 = var4.useMemo;
                    var2 = new Array(6);
                    var2[0] = var10;
                    var2[1] = var9;
                    var2[2] = var8;
                    var2[3] = var7;
                    var2[4] = var6;
                    var2[5] = var5;
                    var1 = function() {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                            var2 = _closure3_slot3;
                            var1 = _closure3_slot5;
                            var6 = var2 + var1;
                            var7 = 2;
                            var4 = var7 * var6;
                            var3 = _closure3_slot4;
                            var1 = null;
                            var2 = var4;
                            if(!(var1 != var3)) { _fun0013_ip = 51; continue _fun0013 }
 35:
                            var3 = _closure3_slot4;
                            var1 = _closure3_slot5;
                            var1 = var7 * var1;
                            var2 = var3 + var1;
 51:
                            var1 = {};
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = 15;
                            var8 = var8[var3];
                            var3 = undefined;
                            var3 = var9.bind(var3)(var8);
                            var3 = var3.CutoutShape;
                            var3 = var3.RoundedRect;
                            var1['shape'] = var3;
                            var3 = _closure3_slot0;
                            var8 = _closure3_slot5;
                            var9 = var4 - var8;
                            var10 = var3 - var9;
                            var9 = _closure3_slot1;
                            var9 = var10 + var9;
                            var1['x'] = var9;
                            var8 = var4 - var8;
                            var8 = var3 - var8;
                            var5 = _closure3_slot2;
                            var5 = var8 + var5;
                            var1['y'] = var5;
                            var1['width'] = var2;
                            var1['height'] = var4;
                            var4 = global;
                            var5 = var4.Math;
                            var4 = var5.min;
                            var3 = var3 / var7;
                            var2 = var2 / var7;
                            var2 = var4.bind(var5)(var6, var3, var2);
                            var1['cornerRadius'] = var2;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                }
            };
            var2 = {'size': 20, 'badgeRadius': 4, 'borderWidth': 2};
            var10 = var3.bind(var4)(var2);
            var _closure2_slot1 = var10;
            var16 = 8;
            var3 = function useIconContentStyle(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var3 = arg1;
                    var8 = var3.size;
                    var _closure3_slot0 = var8;
                    var7 = var3.badgeSize;
                    var _closure3_slot1 = var7;
                    var5 = var3.xOffset;
                    var2 = undefined;
                    if(!(var5 === var2)) { _fun0014_ip = 38; continue _fun0014 }
 36:
                    var5 = 0;
 38:
                    var _closure3_slot2 = var5;
                    var6 = var3.yOffset;
                    if(!(var6 === var2)) { _fun0014_ip = 54; continue _fun0014 }
 52:
                    var6 = 0;
 54:
                    var _closure3_slot3 = var6;
                    var4 = _closure1_slot5;
                    var3 = var4.useMemo;
                    var2 = new Array(4);
                    var2[0] = var8;
                    var2[1] = var7;
                    var2[2] = var6;
                    var2[3] = var5;
                    var1 = function() {
                        var1 = {};
                        var2 = 'absolute';
                        var1['position'] = var2;
                        var4 = _closure3_slot0;
                        var3 = _closure3_slot1;
                        var6 = var4 - var3;
                        var5 = _closure3_slot2;
                        var5 = var6 + var5;
                        var1['left'] = var5;
                        var3 = var4 - var3;
                        var2 = _closure3_slot3;
                        var2 = var3 + var2;
                        var1['top'] = var2;
                        var2 = undefined;
                        var1['right'] = var2;
                        var1['bottom'] = var2;
                        var1['padding'] = var2;
                        var1['minWidth'] = var2;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                }
            };
            var2 = {'size': 20, 'badgeSize': 8};
            var17 = var3.bind(var4)(var2);
            var6 = _closure1_slot5;
            var3 = var6.useMemo;
            var2 = new Array(2);
            var2[0] = var10;
            var2[1] = var7;
            var1 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0015_ip = 16; continue _fun0015 }
 10:
                    var1 = new Array(0);
                    _fun0015_ip = 31; continue _fun0015;
 16:
                    var3 = _closure2_slot1;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
 31:
                    return var1;
                }
            };
            var18 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot21;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = {'position': 'relative', 'height': 20, 'width': 20};
            var1['style'] = var6;
            var13 = _closure1_slot20;
            var10 = _closure1_slot1;
            var19 = _closure1_slot2;
            var6 = 15;
            var6 = var19[var6];
            var10 = var10.bind(var4)(var6);
            var6 = {};
            var6['cutouts'] = var18;
            var6['children'] = var14;
            var10 = var13.bind(var4)(var10, var6);
            var6 = new Array(2);
            var6[0] = var10;
            if(!var7) { _fun0011_ip = 274; continue _fun0011 }
 229:
            var14 = _closure1_slot20;
            var13 = _closure1_slot1;
            var18 = _closure1_slot2;
            var10 = 31;
            var10 = var18[var10];
            var13 = var13.bind(var4)(var10);
            var10 = {};
            var10['style'] = var17;
            var10['size'] = var16;
            var10['badgeStyle'] = var15;
            var7 = var14.bind(var4)(var13, var10);
 274:
            var6[1] = var7;
            var1['children'] = var6;
            var10 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot20;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var5.buttonContainer;
            var1['style'] = var5;
            var7 = _closure1_slot20;
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 32;
            var5 = var13[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.IconButton;
            var5 = {};
            var5['accessibilityLabel'] = var11;
            var11 = 'tertiary';
            if(!var12) { _fun0011_ip = 359; continue _fun0011 }
 353:
            var11 = 'secondary-overlay';
 359:
            var5['variant'] = var11;
            var11 = 'md';
            var5['size'] = var11;
            var5['icon'] = var10;
            var5['onPress'] = var9;
            var8 = _closure1_slot23;
            var5['hitSlop'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot32 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var12 = var1.hasNameplate;
            var1 = _closure1_slot25;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 33;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var7 = var1.showDot;
            var3 = _closure1_slot20;
            var2 = _closure1_slot32;
            var1 = {};
            var1['hasNameplate'] = var12;
            var10 = _closure1_slot20;
            var9 = _closure1_slot0;
            var8 = 34;
            var8 = var11[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.FlashIcon;
            var8 = {};
            var11 = 'custom';
            var8['size'] = var11;
            var11 = var6.largeButtonIcon;
            var8['style'] = var11;
            var11 = undefined;
            if(!var12) { _fun0016_ip = 122; continue _fun0016 }
 118:
            var11 = 'white';
 122:
            var8['color'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var1['icon'] = var8;
            var1['hasBadge'] = var7;
            var6 = var6.icymiBadge;
            var1['badgeStyle'] = var6;
            var6 = function onPress() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 35;
                    var5 = var4[var2];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var5);
                    var5 = var6.triggerHapticFeedback;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var5.bind(var6)(var2);
                    var2 = 36;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0017_ip = 128; continue _fun0017 }
 85:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = 'icymi-screen';
                    var3['screen'] = var2;
                    var2 = {};
                    var6 = true;
                    var2['inNestedNavigator'] = var6;
                    var3['params'] = var2;
                    var2 = 'icymi';
                    var2 = var4.bind(var5)(var2, var3);
 128:
                    return var1;
                }
            };
            var1['onPress'] = var6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 37;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.SY4sdX;
            var5 = var6.bind(var7)(var5);
            var1['a11yLabel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot33 = var4;
    var4 = {};
    var8 = 'function YouBarTsx4(){const{withSpring,badgeCount,SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.spacing.PX_4:0,SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,SPRING_CONFIG)};}';
    var4['code'] = var8;
    var _closure1_slot34 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var19 = var1.hasNameplate;
            var1 = _closure1_slot25;
            var4 = undefined;
            var18 = var1.bind(var4)();
            var7 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 38;
            var1 = var15[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var20 = var1.value;
            var _closure2_slot0 = var20;
            var13 = _closure1_slot0;
            var14 = 12;
            var1 = var15[var14];
            var3 = var13.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function n() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var1 = {};
                    var4 = {};
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var8 = 17;
                    var3 = var3[var8];
                    var7 = undefined;
                    var11 = var5.bind(var7)(var3);
                    var10 = var11.withSpring;
                    var3 = _closure2_slot0;
                    var5 = 0;
                    var3 = var3 > var5;
                    var9 = 0;
                    if(!var3) { _fun0019_ip = 55; continue _fun0019 }
 52:
                    var9 = 1;
 55:
                    var3 = _closure1_slot26;
                    var3 = var10.bind(var11)(var9, var3);
                    var4['scaleX'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var1['transform'] = var3;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var8];
                    var10 = var4.bind(var7)(var3);
                    var9 = var10.withSpring;
                    var3 = _closure2_slot0;
                    var3 = var3 > var5;
                    var4 = 0;
                    if(!var3) { _fun0019_ip = 148; continue _fun0019 }
 117:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var3 = 11;
                    var3 = var12[var3];
                    var3 = var11.bind(var7)(var3);
                    var3 = var3.spacing;
                    var4 = var3.PX_4;
 148:
                    var3 = _closure1_slot26;
                    var3 = var9.bind(var10)(var4, var3);
                    var1['marginLeft'] = var3;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var8];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.withSpring;
                    var6 = _closure2_slot0;
                    var6 = var6 > var5;
                    var5 = 0;
                    if(!var6) { _fun0019_ip = 201; continue _fun0019 }
 198:
                    var5 = 1;
 201:
                    var2 = _closure1_slot26;
                    var2 = var3.bind(var4)(var5, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var6 = 17;
            var6 = var15[var6];
            var6 = var13.bind(var4)(var6);
            var6 = var6.withSpring;
            var5['withSpring'] = var6;
            var5['badgeCount'] = var20;
            var6 = _closure1_slot26;
            var5['SPRING_CONFIG'] = var6;
            var6 = 11;
            var6 = var15[var6];
            var6 = var7.bind(var4)(var6);
            var5['tokens'] = var6;
            var1['__closure'] = var5;
            var5 = 11940471407864.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot34;
            var1['__initData'] = var5;
            var17 = var2.bind(var3)(var1);
            var3 = _closure1_slot20;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var18.buttonContainer;
            var1['style'] = var5;
            var7 = _closure1_slot20;
            var5 = 32;
            var5 = var15[var5];
            var5 = var13.bind(var4)(var5);
            var6 = var5.IconButton;
            var5 = {};
            var10 = 37;
            var11 = var15[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var15[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.HcoRu7;
            var10 = var11.bind(var12)(var10);
            var5['accessibilityLabel'] = var10;
            var10 = 'tertiary';
            if(!var19) { _fun0018_ip = 287; continue _fun0018 }
 281:
            var10 = 'secondary-overlay';
 287:
            var5['variant'] = var10;
            var10 = 'md';
            var5['size'] = var10;
            var12 = _closure1_slot21;
            var11 = _closure1_slot6;
            var10 = {};
            var13 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
            var10['style'] = var13;
            var16 = _closure1_slot20;
            var15 = _closure1_slot0;
            var21 = _closure1_slot2;
            var13 = 39;
            var13 = var21[var13];
            var13 = var15.bind(var4)(var13);
            var15 = var13.BellIcon;
            var13 = {};
            var21 = 'custom';
            var13['size'] = var21;
            var18 = var18.largeButtonIcon;
            var13['style'] = var18;
            var18 = undefined;
            if(!var19) { _fun0018_ip = 386; continue _fun0018 }
 382:
            var18 = 'white';
 386:
            var13['color'] = var18;
            var15 = var16.bind(var4)(var15, var13);
            var13 = new Array(2);
            var13[0] = var15;
            var16 = _closure1_slot20;
            var18 = _closure1_slot1;
            var21 = _closure1_slot2;
            var14 = var21[var14];
            var14 = var18.bind(var4)(var14);
            var15 = var14.View;
            var14 = {};
            var14['style'] = var17;
            var19 = _closure1_slot20;
            var17 = 40;
            var17 = var21[var17];
            var18 = var18.bind(var4)(var17);
            var17 = {};
            var17['value'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[1] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var5['icon'] = var10;
            var9 = function onPress() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 35;
                    var5 = var4[var2];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var5);
                    var5 = var6.triggerHapticFeedback;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var5.bind(var6)(var2);
                    var2 = 36;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0020_ip = 110; continue _fun0020 }
 85:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = true;
                    var3['inNestedNavigator'] = var2;
                    var2 = 'notifications';
                    var2 = var4.bind(var5)(var2, var3);
 110:
                    return var1;
                }
            };
            var5['onPress'] = var9;
            var8 = _closure1_slot23;
            var5['hitSlop'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot35 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var1 = arg1;
            var12 = var1.hasNameplate;
            var1 = _closure1_slot25;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 41;
            var1 = var11[var1];
            var2 = var9.bind(var4)(var1);
            var1 = var2.useHasSettingsBadge;
            var7 = var1.bind(var2)();
            var3 = _closure1_slot20;
            var2 = _closure1_slot32;
            var1 = {};
            var1['hasNameplate'] = var12;
            var10 = _closure1_slot20;
            var8 = 42;
            var8 = var11[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.SettingsIcon;
            var8 = {};
            var11 = 'custom';
            var8['size'] = var11;
            var11 = var6.largeButtonIcon;
            var8['style'] = var11;
            var11 = undefined;
            if(!var12) { _fun0021_ip = 118; continue _fun0021 }
 114:
            var11 = 'white';
 118:
            var8['color'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var1['icon'] = var8;
            var1['hasBadge'] = var7;
            var6 = var6.settingsBadge;
            var1['badgeStyle'] = var6;
            var6 = function onPress() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 35;
                    var5 = var4[var2];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var5);
                    var5 = var6.triggerHapticFeedback;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var5.bind(var6)(var2);
                    var2 = 36;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var4 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var4)) { _fun0022_ip = 100; continue _fun0022 }
 85:
                    var3 = var4.navigate;
                    var2 = 'settings';
                    var2 = var3.bind(var4)(var2);
 100:
                    return var1;
                }
            };
            var1['onPress'] = var6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 37;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.3D5yo6;
            var5 = var6.bind(var7)(var5);
            var1['a11yLabel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot36 = var4;
    var4 = {};
    var8 = 'function YouBarTsx5(){const{withSpring,isPressed,SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(isPressed?0.98:1,SPRING_CONFIG)}]};}';
    var4['code'] = var8;
    var _closure1_slot37 = var4;
    var8 = var7.memo;
    var4 = function() {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
            var1 = _closure1_slot25;
            var4 = undefined;
            var12 = var1.bind(var4)();
            var _closure2_slot0 = var12;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 43;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var2 = var1.width;
            var3 = _closure1_slot0;
            var1 = 44;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useDrawerWidth;
            var3 = var1.bind(var3)();
            var1 = 45;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var6 = var1.isChatBesideChannelList;
            var1 = _closure1_slot16;
            var5 = 2;
            var1 = var5 * var1;
            if(var6) { _fun0023_ip = 116; continue _fun0023 }
 110:
            var2 = var2 - var1;
            _fun0023_ip = 120; continue _fun0023;
 116:
            var2 = var3 - var1;
 120:
            var _closure2_slot1 = var2;
            var1 = _closure1_slot13;
            var1 = var1.bind(var4)();
            var _closure2_slot2 = var1;
            var7 = _closure1_slot5;
            var6 = var7.useMemo;
            var3 = new Array(3);
            var3[0] = var2;
            var3[1] = var1;
            var3[2] = var12;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot0;
                var6 = var3.youRow;
                var7 = var1;
                var4 = copyDataProperties(var7, var6);
                var6 = var3.youRowFloating;
                var7 = var1;
                var3 = copyDataProperties(var7, var6);
                var5 = _closure1_slot15;
                var4 = 'height';
                var1[var4] = var5;
                var5 = _closure2_slot2;
                var4 = 'marginBottom';
                var1[var4] = var5;
                var4 = _closure1_slot17;
                var3 = 1;
                var4 = var4 - var3;
                var3 = 'padding';
                var1[var3] = var4;
                var3 = _closure2_slot1;
                var2 = 'width';
                var1[var2] = var3;
                return var1;
            };
            var7 = var6.bind(var7)(var1, var3);
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 46;
            var1 = var8[var1];
            var9 = var6.bind(var4)(var1);
            var3 = var9.useICYMIEnabled;
            var1 = 'TabsNavigator';
            var9 = var3.bind(var9)(var1);
            var1 = 25;
            var1 = var8[var1];
            var1 = var6.bind(var4)(var1);
            var11 = var1.YouBarExperiment;
            var3 = var11.useExperiment;
            var1 = {};
            var13 = 'YouBar';
            var1['location'] = var13;
            var1 = var3.bind(var11)(var1);
            var14 = var1.animateBetweenServers;
            var1 = 21;
            var3 = var8[var1];
            var15 = var6.bind(var4)(var3);
            var13 = var15.useStateFromStores;
            var3 = _closure1_slot12;
            var11 = new Array(1);
            var11[0] = var3;
            var3 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var13.bind(var15)(var11, var3);
            var3 = var8[var1];
            var16 = var6.bind(var4)(var3);
            var15 = var16.useStateFromStores;
            var3 = _closure1_slot10;
            var13 = new Array(1);
            var13[0] = var3;
            var3 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var15.bind(var16)(var13, var3);
            var3 = 47;
            var3 = var8[var3];
            var8 = var6.bind(var4)(var3);
            var6 = var8.useNameplate;
            var3 = {};
            var3['user'] = var11;
            var11 = undefined;
            if(!var14) { _fun0023_ip = 382; continue _fun0023 }
 368:
            var14 = null;
            var14 = var14 != var13;
            var11 = undefined;
            if(!var14) { _fun0023_ip = 382; continue _fun0023 }
 379:
            var11 = var13;
 382:
            var3['guildId'] = var11;
            var20 = var6.bind(var8)(var3);
            var11 = null;
            var13 = var11 != var20;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var3 = 48;
            var3 = var16[var3];
            var3 = var15.bind(var4)(var3);
            var14 = var3.bind(var4)();
            var3 = 11;
            var6 = var16[var3];
            var6 = var15.bind(var4)(var6);
            var8 = var6.internal;
            var6 = var8.resolveSemanticColor;
            var3 = var16[var3];
            var3 = var15.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.BG_SURFACE_OVERLAY;
            var3 = var6.bind(var8)(var14, var3);
            var15 = _closure1_slot0;
            var1 = var16[var1];
            var14 = var15.bind(var4)(var1);
            var8 = var14.useStateFromStores;
            var1 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var1 = _closure1_slot8;
                var1 = var1.gradientPreset;
                return var1;
            };
            var1 = var8.bind(var14)(var6, var1);
            var6 = 49;
            var8 = var16[var6];
            var14 = var15.bind(var4)(var8);
            var8 = var14.useGradientValue;
            var6 = var16[var6];
            var6 = var15.bind(var4)(var6);
            var6 = var6.GradientPercentage;
            var6 = var6.END;
            var17 = var8.bind(var14)(var6);
            if(var13) { _fun0023_ip = 597; continue _fun0023 }
 561:
            if(!(var11 != var1)) { _fun0023_ip = 597; continue _fun0023 }
 565:
            var8 = _closure1_slot18;
            var6 = var1.id;
            var6 = var8[var6];
            if(!(var11 != var6)) { _fun0023_ip = 597; continue _fun0023 }
 582:
            var6 = _closure1_slot18;
            var1 = var1.id;
            var19 = var6[var1];
            _fun0023_ip = 699; continue _fun0023;
 597:
            var19 = var3;
            if(var13) { _fun0023_ip = 699; continue _fun0023 }
 603:
            var1 = var11 != var17;
            var19 = undefined;
            if(!var1) { _fun0023_ip = 699; continue _fun0023 }
 612:
            var6 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 50;
            var8 = var16[var1];
            var15 = var6.bind(var4)(var8);
            var14 = var15.mix;
            var8 = var16[var1];
            var8 = var6.bind(var4)(var8);
            var8 = var8.bind(var4)(var17);
            var1 = var16[var1];
            var1 = var6.bind(var4)(var1);
            var24 = var1.bind(var4)(var3);
            var23 = 0.8;
            var22 = 'hsl';
            var26 = var15;
            var25 = var8;
            var3 = var26[var14](var25, var24, var23, var22, var21);
            var1 = var3.hex;
            var19 = var1.bind(var3)();
 699:
            var6 = _closure1_slot5;
            var3 = var6.useState;
            var1 = false;
            var3 = var3.bind(var6)(var1);
            var1 = _closure1_slot4;
            var3 = var1.bind(var4)(var3, var5);
            var1 = 0;
            var15 = var3[var1];
            var _closure2_slot3 = var15;
            var1 = 1;
            var1 = var3[var1];
            var _closure2_slot4 = var1;
            var17 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 12;
            var3 = var5[var1];
            var8 = var17.bind(var4)(var3);
            var6 = var8.useAnimatedStyle;
            var3 = function W() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                    var1 = {};
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 17;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.withSpring;
                    var7 = _closure2_slot3;
                    var4 = 1;
                    if(!var7) { _fun0024_ip = 57; continue _fun0024 }
 47:
                    var4 = 0.98;
 57:
                    var2 = _closure1_slot26;
                    var2 = var5.bind(var6)(var4, var2);
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var14 = {};
            var16 = 17;
            var16 = var5[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.withSpring;
            var14['withSpring'] = var16;
            var14['isPressed'] = var15;
            var15 = _closure1_slot26;
            var14['SPRING_CONFIG'] = var15;
            var3['__closure'] = var14;
            var14 = 2650830876227.0;
            var3['__workletHash'] = var14;
            var14 = _closure1_slot37;
            var3['__initData'] = var14;
            var6 = var6.bind(var8)(var3);
            var15 = _closure1_slot5;
            var14 = var15.useCallback;
            var8 = function() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 35;
                    var5 = var4[var2];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var5);
                    var5 = var6.triggerHapticFeedback;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.IMPACT_MEDIUM;
                    var2 = var5.bind(var6)(var2);
                    var2 = 36;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0025_ip = 124; continue _fun0025 }
 85:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = true;
                    var3['inNestedNavigator'] = var2;
                    var2 = 'you';
                    var2 = var4.bind(var5)(var2, var3);
                    var3 = _closure2_slot4;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
 124:
                    return var1;
                }
            };
            var3 = new Array(0);
            var15 = var14.bind(var15)(var8, var3);
            var16 = _closure1_slot5;
            var14 = var16.useCallback;
            var8 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0026_ip = 137; continue _fun0026 }
 10:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var4 = 35;
                        var6 = var2[var4];
                        var3 = undefined;
                        var7 = var5.bind(var3)(var6);
                        var6 = var7.triggerHapticFeedback;
                        var4 = var2[var4];
                        var4 = var5.bind(var3)(var4);
                        var4 = var4.HapticFeedbackTypes;
                        var4 = var4.IMPACT_LIGHT;
                        var4 = var6.bind(var7)(var4);
                        var4 = 52;
                        var4 = var2[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = 51;
                        var4 = var2[var4];
                        var2 = var2.paths;
                        var2 = var5.bind(var3)(var4, var2);
                        SaveGenerator(address=101);
 99:
                        return var2;
 101:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0026_ip = 134; continue _fun0026 }
 107:
                        var4 = var2.showYouAccountActionSheet;
                        var4 = var4.bind(var2)();
                        var5 = _closure2_slot4;
                        var4 = false;
                        var4 = var5.bind(var3)(var4);
                        return var3;
 134:
                        return var2;
 137:
                        return var1;
                    }
                };
                return var1;
            };
            var8 = var8.bind(var4)(var3);
            var3 = new Array(0);
            var14 = var14.bind(var16)(var8, var3);
            var17 = _closure1_slot5;
            var16 = var17.useCallback;
            var8 = function() {
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = new Array(0);
            var17 = var16.bind(var17)(var8, var3);
            var21 = _closure1_slot5;
            var16 = var21.useCallback;
            var8 = function() {
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = new Array(0);
            var16 = var16.bind(var21)(var8, var3);
            var21 = _closure1_slot5;
            var8 = var21.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function(arg1, arg2, arg3, arg4) {
                var5 = _closure1_slot20;
                var4 = _closure1_slot44;
                var3 = {};
                var1 = arg2;
                var3['nameplate'] = var1;
                var1 = arg3;
                var3['transitionState'] = var1;
                var1 = arg4;
                var3['onCleanup'] = var1;
                var1 = _closure2_slot1;
                var3['barWidth'] = var1;
                var2 = undefined;
                var1 = arg1;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var8 = var8.bind(var21)(var2, var3);
            var3 = _closure1_slot21;
            var2 = _closure1_slot1;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var5 = new Array(3);
            var5[0] = var7;
            var5[1] = var6;
            var7 = var11 != var19;
            var6 = null;
            if(!var7) { _fun0023_ip = 1050; continue _fun0023 }
 1041:
            var7 = {};
            var7['backgroundColor'] = var19;
            var6 = var7;
 1050:
            var5[2] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot20;
            var6 = _closure1_slot0;
            var19 = _closure1_slot2;
            var5 = 16;
            var5 = var19[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.TransitionGroup;
            var5 = {};
            var19 = new Array(1);
            var19[0] = var20;
            var5['items'] = var19;
            var18 = function getItemKey(arg1) {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                    var1 = arg1;
                    var2 = null;
                    var2 = var2 == var1;
                    var3 = undefined;
                    if(var2) { _fun0027_ip = 20; continue _fun0027 }
 14:
                    var3 = var1.src;
 20:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = '';
                    var1 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var5['getItemKey'] = var18;
            var5['renderItem'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot20;
            var7 = _closure1_slot7;
            var6 = {};
            var18 = var12.youPressable;
            var6['style'] = var18;
            var18 = {};
            var19 = 'transparent';
            var18['color'] = var19;
            var6['android_ripple'] = var18;
            var6['onPressIn'] = var17;
            var6['onPressOut'] = var16;
            var6['onPress'] = var15;
            var6['onLongPress'] = var14;
            var14 = _closure1_slot23;
            var6['hitSlop'] = var14;
            var16 = _closure1_slot20;
            var15 = _closure1_slot31;
            var14 = {};
            var14 = var16.bind(var4)(var15, var14);
            var6['children'] = var14;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot21;
            var7 = _closure1_slot6;
            var6 = {};
            var12 = var12.youRowRight;
            var6['style'] = var12;
            var11 = null;
            if(!var9) { _fun0023_ip = 1273; continue _fun0023 }
 1252:
            var14 = _closure1_slot20;
            var12 = _closure1_slot33;
            var9 = {};
            var9['hasNameplate'] = var13;
            var11 = var14.bind(var4)(var12, var9);
 1273:
            var9 = new Array(3);
            var9[0] = var11;
            var14 = _closure1_slot20;
            var12 = _closure1_slot35;
            var11 = {};
            var11['hasNameplate'] = var13;
            var11 = var14.bind(var4)(var12, var11);
            var9[1] = var11;
            var12 = _closure1_slot20;
            var11 = _closure1_slot36;
            var10 = {};
            var10['hasNameplate'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot38 = var4;
    var4 = {};
    var8 = 'function YouBarTsx6(){const{gradientHeight,drawerWidth}=this.__closure;return{height:gradientHeight,opacity:1,width:drawerWidth};}';
    var4['code'] = var8;
    var _closure1_slot39 = var4;
    var8 = var7.memo;
    var4 = function() {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
            var2 = _closure1_slot25;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var2 = _closure1_slot13;
            var17 = var2.bind(var4)();
            var3 = _closure1_slot15;
            var2 = _closure1_slot14;
            var2 = var3 + var2;
            var13 = var2 + var17;
            var _closure2_slot0 = var13;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 43;
            var2 = var10[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var12 = var2.width;
            var _closure2_slot1 = var12;
            var5 = _closure1_slot0;
            var2 = 12;
            var2 = var10[var2];
            var7 = var5.bind(var4)(var2);
            var3 = var7.useAnimatedStyle;
            var2 = function o() {
                var1 = {};
                var3 = _closure2_slot0;
                var1['height'] = var3;
                var3 = 1;
                var1['opacity'] = var3;
                var2 = _closure2_slot1;
                var1['width'] = var2;
                return var1;
            };
            var11 = {};
            var11['gradientHeight'] = var13;
            var11['drawerWidth'] = var12;
            var2['__closure'] = var11;
            var11 = 13973001753749.0;
            var2['__workletHash'] = var11;
            var11 = _closure1_slot39;
            var2['__initData'] = var11;
            var12 = var3.bind(var7)(var2);
            var2 = 21;
            var2 = var10[var2];
            var7 = var5.bind(var4)(var2);
            var3 = var7.useStateFromStores;
            var11 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var11;
            var1 = function() {
                var1 = _closure1_slot8;
                var1 = var1.gradientPreset;
                return var1;
            };
            var1 = var3.bind(var7)(var2, var1);
            var2 = 49;
            var3 = var10[var2];
            var7 = var5.bind(var4)(var3);
            var3 = var7.useGradientValue;
            var2 = var10[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.GradientPercentage;
            var2 = var2.END;
            var3 = var3.bind(var7)(var2);
            var2 = 53;
            var2 = var10[var2];
            var7 = var5.bind(var4)(var2);
            var5 = var7.useToken;
            var2 = 11;
            var2 = var10[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.colors;
            var2 = var2.BG_BASE_TERTIARY;
            var5 = var5.bind(var7)(var2);
            var2 = null;
            if(!(var2 != var1)) { _fun0028_ip = 311; continue _fun0028 }
 294:
            var8 = _closure1_slot19;
            var7 = var1.id;
            var7 = var8[var7];
            if(!(var2 == var7)) { _fun0028_ip = 323; continue _fun0028 }
 311:
            var8 = var5;
            if(!(var2 != var3)) { _fun0028_ip = 336; continue _fun0028 }
 318:
            var8 = var3;
            _fun0028_ip = 336; continue _fun0028;
 323:
            var3 = _closure1_slot19;
            var1 = var1.id;
            var8 = var3[var1];
 336:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 54;
            var1 = var1[var7];
            var5 = var3.bind(var4)(var1);
            var3 = var5.hex2rgb;
            var1 = 0.97;
            var1 = var3.bind(var5)(var8, var1);
            var5 = var2 != var1;
            var11 = 'transparent';
            var3 = var11;
            if(!var5) { _fun0028_ip = 395; continue _fun0028 }
 392:
            var3 = var1;
 395:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var5 = var5.bind(var4)(var1);
            var1 = var5.hex2rgb;
            var15 = 0;
            var1 = var1.bind(var5)(var3, var15);
            var2 = var2 != var1;
            var10 = var3;
            if(!var2) { _fun0028_ip = 439; continue _fun0028 }
 436:
            var11 = var1;
 439:
            var3 = _closure1_slot21;
            var2 = _closure1_slot22;
            var1 = {};
            var8 = _closure1_slot20;
            var7 = _closure1_slot6;
            var5 = {};
            var14 = var9.floatingShade;
            var13 = new Array(3);
            var13[0] = var14;
            var13[1] = var12;
            var14 = {};
            var16 = _closure1_slot15;
            var16 = var16 + var17;
            var14['height'] = var16;
            var14['opacity'] = var15;
            var13[2] = var14;
            var5['style'] = var13;
            var13 = 'box-only';
            var5['pointerEvents'] = var13;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot20;
            var7 = _closure1_slot24;
            var6 = {};
            var13 = var9.floatingShade;
            var9 = new Array(2);
            var9[0] = var13;
            var9[1] = var12;
            var6['style'] = var9;
            var9 = new Array(3);
            var9[0] = var11;
            var9[1] = var10;
            var9[2] = var10;
            var6['colors'] = var9;
            var9 = {'x': 0, 'y': 0};
            var6['start'] = var9;
            var9 = {'x': 0, 'y': 1};
            var6['end'] = var9;
            var9 = [0, 0.7, 1];
            var6['locations'] = var9;
            var9 = 'none';
            var6['pointerEvents'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot40 = var4;
    var4 = var7.memo;
    var2 = function() {
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 21;
        var1 = var7[var1];
        var4 = undefined;
        var8 = var2.bind(var4)(var1);
        var5 = var8.useStateFromStores;
        var1 = _closure1_slot8;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() {
            var1 = _closure1_slot8;
            var1 = var1.gradientPreset;
            return var1;
        };
        var5 = var5.bind(var8)(var3, var1);
        var3 = _closure1_slot21;
        var1 = 55;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.ThemeContextProvider;
        var1 = {};
        var1['gradient'] = var5;
        var8 = _closure1_slot20;
        var7 = _closure1_slot40;
        var5 = {};
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot20;
        var7 = _closure1_slot38;
        var6 = {};
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 56;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/YouBar.tsx';
    var4 = var5.bind(var6)(var4);
    var3['ThemedYouBar'] = var2;
    return var1;
})();