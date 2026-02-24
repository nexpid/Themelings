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
case 0:
            var1 = arg1;
            var10 = var1.userId;
            var9 = var1.username;
            var16 = var1.transitionState;
            var _closure2_slot0 = var16;
            var15 = var1.onCleanup;
            var _closure2_slot1 = var15;
            var1 = _closure1_slot32;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 15;
            var3 = var14[var1];
            var7 = var13.bind(var4)(var3);
            var3 = var7.useSharedValue;
            var11 = 0;
            var12 = var3.bind(var7)(var11);
            var _closure2_slot2 = var12;
            var8 = _closure1_slot5;
            var7 = var8.useEffect;
            var3 = new Array(3);
            var3[0] = var16;
            var3[1] = var12;
            var3[2] = var15;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 19;
                    var4 = var1[var7];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.ENTERED;
                    if(!(var5 !== var4)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.MOUNTED;
                    if(!(var5 !== var4)) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.YEETED;
                    if(!(var5 === var4)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var6 = _closure2_slot2;
                    var5 = var6.set;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 20;
                    var4 = var13[var4];
                    var11 = var12.bind(var1)(var4);
                    var10 = var11.withSpring;
                    var16 = _closure1_slot33;
                    var8 = function t() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 15;
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
                    var7 = 15;
                    var7 = var13[var7];
                    var7 = var12.bind(var1)(var7);
                    var7 = var7.runOnJS;
                    var4['runOnJS'] = var7;
                    var7 = _closure2_slot1;
                    var4['onCleanup'] = var7;
                    var8['__closure'] = var4;
                    var4 = 15382259463637.0;
                    var8['__workletHash'] = var4;
                    var4 = _closure1_slot34;
                    var8['__initData'] = var4;
                    var17 = 0;
                    var15 = 'respect-motion-settings';
                    var18 = var11;
                    var14 = var8;
                    var4 = var18[var10](var17, var16, var15, var14, var13);
                    var4 = var5.bind(var6)(var4);
                    _fun0002_ip = 5; continue _fun0002;
case 2:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 20;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.withSpring;
                    var5 = _closure1_slot33;
                    var2 = 1;
                    var2 = var6.bind(var7)(var2, var5);
                    var2 = var3.bind(var4)(var2);
case 5:
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var2, var3);
            var3 = _closure1_slot25;
            var7 = _closure1_slot1;
            var1 = var14[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var8 = var5.usernameRow;
            var5 = new Array(2);
            var5[0] = var8;
            var8 = {};
            var8['opacity'] = var12;
            var5[1] = var8;
            var1['style'] = var5;
            var8 = _closure1_slot24;
            var5 = 21;
            var5 = var14[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {'userId': null, 'userName': null, 'defaultColor': 'mobile-text-heading-primary', 'variant': 'heading-md/bold', 'lineClamp': 1, 'ellipsizeMode': 'tail', 'maxFontSizeMultiplier': 1.75};
            var5['userId'] = var10;
            var5['userName'] = var9;
            var10 = 1;
            var9 = {};
            var12 = 22;
            var12 = var14[var12];
            var13 = var13.bind(var4)(var12);
            var12 = var13.isAndroid;
            var12 = var12.bind(var13)();
            if(!var12) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var11 = 2;
case 7:
            var9['paddingBottom'] = var11;
            var9['flexShrink'] = var10;
            var5['style'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot24;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 23;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.ChevronSmallDownIcon;
            var6 = {'size': 'xs', 'color': 'mobile-text-heading-primary'};
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot51 = var1;
    var1 = function YouAvatarLarge(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var14 = var2.selectedGuildId;
            var20 = var2.transitionState;
            var _closure2_slot0 = var20;
            var13 = var2.cleanup;
            var _closure2_slot1 = var13;
            var5 = undefined;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var2 = _closure1_slot32;
            var6 = var2.bind(var5)();
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 24;
            var3 = var4[var2];
            var10 = var9.bind(var5)(var3);
            var8 = var10.useStateFromStores;
            var3 = _closure1_slot11;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var8.bind(var10)(var7, var3);
            var2 = var4[var2];
            var8 = var9.bind(var5)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot12;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var7.bind(var8)(var3, var2);
            var18 = 25;
            var2 = var4[var18];
            var2 = var9.bind(var5)(var2);
            var3 = var2.AVATAR_SIZE_MAP;
            var2 = _closure1_slot28;
            var3 = var3[var2];
            var2 = var4[var18];
            var2 = var9.bind(var5)(var2);
            var7 = var2.AVATAR_SIZE_MAP;
            var2 = _closure1_slot29;
            var2 = var7[var2];
            var12 = var3 / var2;
            var _closure2_slot2 = var12;
            var2 = var4[var18];
            var2 = var9.bind(var5)(var2);
            var3 = var2.AVATAR_SIZE_MAP;
            var2 = _closure1_slot29;
            var3 = var3[var2];
            var2 = var4[var18];
            var2 = var9.bind(var5)(var2);
            var7 = var2.AVATAR_SIZE_MAP;
            var2 = _closure1_slot28;
            var2 = var7[var2];
            var3 = var3 - var2;
            var2 = 2;
            var3 = var3 / var2;
            var _closure2_slot3 = var3;
            var2 = 15;
            var7 = var4[var2];
            var16 = var9.bind(var5)(var7);
            var8 = var16.useSharedValue;
            var7 = 0;
            var19 = var8.bind(var16)(var7);
            var _closure2_slot4 = var19;
            var7 = var4[var2];
            var8 = var9.bind(var5)(var7);
            var7 = var8.useSharedValue;
            var21 = 19;
            var4 = var4[var21];
            var4 = var9.bind(var5)(var4);
            var4 = var4.TransitionStates;
            var9 = var4.MOUNTED;
            var4 = 1;
            if(!(var20 !== var9)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var4 = var12;
case 9:
            var17 = var7.bind(var8)(var4);
            _closure2_slot5 = var17;
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var7 = var4[var2];
            var8 = var9.bind(var5)(var7);
            var7 = var8.useSharedValue;
            var4 = var4[var21];
            var4 = var9.bind(var5)(var4);
            var4 = var4.TransitionStates;
            var4 = var4.MOUNTED;
            if(!(var20 !== var4)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var4 = -var3;
            _fun0003_ip = 13; continue _fun0003;
case 11:
            var9 = _closure1_slot16;
            var4 = -var9;
case 13:
            var16 = var7.bind(var8)(var4);
            _closure2_slot6 = var16;
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var7 = var4[var2];
            var8 = var9.bind(var5)(var7);
            var7 = var8.useSharedValue;
            var4 = var4[var21];
            var4 = var9.bind(var5)(var4);
            var4 = var4.TransitionStates;
            var4 = var4.MOUNTED;
            if(!(var20 !== var4)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var4 = -var3;
            _fun0003_ip = 16; continue _fun0003;
case 14:
            var9 = _closure1_slot16;
            var21 = -var9;
            var22 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var18];
            var9 = var22.bind(var5)(var9);
            var22 = var9.AVATAR_SIZE_MAP;
            var9 = _closure1_slot29;
            var22 = var22[var9];
            var9 = _closure1_slot15;
            var9 = var22 - var9;
            var4 = var21 - var9;
case 16:
            var8 = var7.bind(var8)(var4);
            _closure2_slot7 = var8;
            var9 = _closure1_slot5;
            var7 = var9.useEffect;
            var4 = new Array(8);
            var4[0] = var20;
            var4[1] = var19;
            var4[2] = var13;
            var4[3] = var12;
            var4[4] = var3;
            var4[5] = var16;
            var4[6] = var8;
            var4[7] = var17;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 19;
                    var4 = var1[var7];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.ENTERED;
                    if(!(var5 !== var4)) { _fun0004_ip = 17; continue _fun0004 }
case 3:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.MOUNTED;
                    if(!(var5 !== var4)) { _fun0004_ip = 17; continue _fun0004 }
case 4:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.YEETED;
                    if(!(var5 === var4)) { _fun0004_ip = 18; continue _fun0004 }
case 6:
                    var9 = _closure2_slot4;
                    var6 = var9.set;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 20;
                    var5 = var8[var4];
                    var14 = var7.bind(var1)(var5);
                    var13 = var14.withSpring;
                    var17 = _closure1_slot33;
                    var11 = function t() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 15;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.runOnJS;
                        var2 = _closure2_slot1;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var5 = {};
                    var10 = 15;
                    var10 = var8[var10];
                    var10 = var7.bind(var1)(var10);
                    var10 = var10.runOnJS;
                    var5['runOnJS'] = var10;
                    var10 = _closure2_slot1;
                    var5['cleanup'] = var10;
                    var11['__closure'] = var5;
                    var5 = 16071268952598.0;
                    var11['__workletHash'] = var5;
                    var5 = _closure1_slot35;
                    var11['__initData'] = var5;
                    var18 = 0;
                    var16 = 'respect-motion-settings';
                    var19 = var14;
                    var15 = var11;
                    var5 = var19[var13](var18, var17, var16, var15, var14);
                    var5 = var6.bind(var9)(var5);
                    var9 = _closure2_slot5;
                    var6 = var9.set;
                    var5 = var8[var4];
                    var12 = var7.bind(var1)(var5);
                    var11 = var12.withSpring;
                    var10 = _closure2_slot2;
                    var5 = _closure1_slot33;
                    var5 = var11.bind(var12)(var10, var5);
                    var5 = var6.bind(var9)(var5);
                    var10 = _closure2_slot6;
                    var6 = var10.set;
                    var5 = var8[var4];
                    var12 = var7.bind(var1)(var5);
                    var11 = var12.withSpring;
                    var5 = _closure2_slot3;
                    var9 = -var5;
                    var5 = _closure1_slot33;
                    var5 = var11.bind(var12)(var9, var5);
                    var5 = var6.bind(var10)(var5);
                    var6 = _closure2_slot7;
                    var5 = var6.set;
                    var4 = var8[var4];
                    var8 = var7.bind(var1)(var4);
                    var7 = var8.withSpring;
                    var4 = _closure1_slot33;
                    var4 = var7.bind(var8)(var9, var4);
                    var4 = var5.bind(var6)(var4);
                    _fun0004_ip = 18; continue _fun0004;
case 17:
                    var7 = _closure2_slot4;
                    var6 = var7.set;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 20;
                    var4 = var10[var5];
                    var11 = var9.bind(var1)(var4);
                    var8 = var11.withSpring;
                    var4 = _closure1_slot33;
                    var12 = 1;
                    var4 = var8.bind(var11)(var12, var4);
                    var4 = var6.bind(var7)(var4);
                    var7 = _closure2_slot5;
                    var6 = var7.set;
                    var4 = var10[var5];
                    var11 = var9.bind(var1)(var4);
                    var8 = var11.withSpring;
                    var4 = _closure1_slot33;
                    var4 = var8.bind(var11)(var12, var4);
                    var4 = var6.bind(var7)(var4);
                    var7 = _closure2_slot6;
                    var6 = var7.set;
                    var4 = var10[var5];
                    var12 = var9.bind(var1)(var4);
                    var11 = var12.withSpring;
                    var4 = _closure1_slot16;
                    var8 = -var4;
                    var4 = _closure1_slot33;
                    var4 = var11.bind(var12)(var8, var4);
                    var4 = var6.bind(var7)(var4);
                    var4 = _closure2_slot7;
                    var3 = var4.set;
                    var5 = var10[var5];
                    var7 = var9.bind(var1)(var5);
                    var6 = var7.withSpring;
                    var5 = _closure1_slot16;
                    var8 = -var5;
                    var5 = 25;
                    var5 = var10[var5];
                    var5 = var9.bind(var1)(var5);
                    var9 = var5.AVATAR_SIZE_MAP;
                    var5 = _closure1_slot29;
                    var9 = var9[var5];
                    var5 = _closure1_slot15;
                    var5 = var9 - var5;
                    var5 = var8 - var5;
                    var2 = _closure1_slot33;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = var3.bind(var4)(var2);
case 18:
                    return var1;
                }
            };
            var3 = var7.bind(var9)(var3, var4);
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 26;
            var3 = var7[var3];
            var7 = var4.bind(var5)(var3);
            var4 = var7.useAvatarDecoration;
            var13 = null;
            var9 = var13 != var14;
            var3 = undefined;
            if(!var9) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var3 = var14;
case 19:
            var12 = var4.bind(var7)(var15, var3);
            var9 = _closure1_slot29;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var2];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useAnimatedStyle;
            var1 = function T() {
                var1 = {};
                var4 = {};
                var5 = _closure2_slot5;
                var3 = var5.get;
                var3 = var3.bind(var5)();
                var4['scale'] = var3;
                var3 = new Array(1);
                var3[0] = var4;
                var1['transform'] = var3;
                var4 = _closure2_slot6;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var1['left'] = var3;
                var3 = _closure2_slot7;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['top'] = var2;
                return var1;
            };
            var7 = {};
            var7['scale'] = var17;
            var7['left'] = var16;
            var7['top'] = var8;
            var1['__closure'] = var7;
            var7 = 13679316217738.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot36;
            var1['__initData'] = var7;
            var8 = var3.bind(var4)(var1);
            var3 = var13 == var15;
            var1 = null;
            if(var3) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var4 = _closure1_slot24;
            var7 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = var16[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var17 = var6.avatarShadow;
            var6 = new Array(3);
            var6[0] = var17;
            var17 = {};
            var17['opacity'] = var19;
            var19 = 'absolute';
            var17['position'] = var19;
            var19 = _closure1_slot0;
            var20 = var16[var18];
            var20 = var19.bind(var5)(var20);
            var20 = var20.AVATAR_SIZE_MAP;
            var20 = var20[var9];
            var17['width'] = var20;
            var18 = var16[var18];
            var18 = var19.bind(var5)(var18);
            var18 = var18.AVATAR_SIZE_MAP;
            var18 = var18[var9];
            var17['height'] = var18;
            var6[1] = var17;
            var6[2] = var8;
            var2['style'] = var6;
            var8 = _closure1_slot24;
            var6 = 13;
            var6 = var16[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['user'] = var15;
            var15 = var13 != var14;
            var13 = undefined;
            if(!var15) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var13 = var14;
case 23:
            var6['guildId'] = var13;
            var6['size'] = var9;
            var9 = false;
            var6['animate'] = var9;
            var9 = true;
            var6['needsOffscreenAlphaCompositing'] = var9;
            var6['avatarDecoration'] = var12;
            var12 = _closure1_slot22;
            var12 = var12.UNKNOWN;
            if(!(var10 === var12)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var11 = _closure1_slot22;
            var10 = var11.OFFLINE;
case 25:
            var6['status'] = var10;
            var6['autoStatusCutout'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 21:
            return var1;
        }
    };
    var _closure1_slot52 = var1;
    var1 = function YouAvatar(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var13 = var1.selectedGuildId;
            var14 = var1.transitionState;
            var _closure2_slot0 = var14;
            var8 = var1.cleanup;
            var _closure2_slot1 = var8;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 24;
            var6 = var4[var1];
            var10 = var2.bind(var5)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot11;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var9.bind(var10)(var7, var6);
            var1 = var4[var1];
            var9 = var2.bind(var5)(var1);
            var7 = var9.useStateFromStores;
            var1 = _closure1_slot12;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var7.bind(var9)(var6, var1);
            var1 = 26;
            var1 = var4[var1];
            var6 = var2.bind(var5)(var1);
            var4 = var6.useAvatarDecoration;
            var1 = null;
            var7 = var1 != var13;
            var2 = undefined;
            if(!var7) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var2 = var13;
case 27:
            var12 = var4.bind(var6)(var9, var2);
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 15;
            var4 = var4[var2];
            var7 = var6.bind(var5)(var4);
            var6 = var7.useSharedValue;
            var4 = 0;
            var15 = var6.bind(var7)(var4);
            _closure2_slot2 = var15;
            var7 = _closure1_slot5;
            var6 = var7.useEffect;
            var4 = new Array(3);
            var4[0] = var14;
            var4[1] = var15;
            var4[2] = var8;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 19;
                    var4 = var1[var7];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.ENTERED;
                    if(!(var5 !== var4)) { _fun0006_ip = 2; continue _fun0006 }
case 3:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.MOUNTED;
                    if(!(var5 !== var4)) { _fun0006_ip = 2; continue _fun0006 }
case 4:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.YEETED;
                    if(!(var5 === var4)) { _fun0006_ip = 5; continue _fun0006 }
case 6:
                    var6 = _closure2_slot2;
                    var5 = var6.set;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 20;
                    var4 = var13[var4];
                    var11 = var12.bind(var1)(var4);
                    var10 = var11.withSpring;
                    var16 = _closure1_slot33;
                    var8 = function t() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 15;
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
                    var7 = 15;
                    var7 = var13[var7];
                    var7 = var12.bind(var1)(var7);
                    var7 = var7.runOnJS;
                    var4['runOnJS'] = var7;
                    var7 = _closure2_slot1;
                    var4['cleanup'] = var7;
                    var8['__closure'] = var4;
                    var4 = 11665021063952.0;
                    var8['__workletHash'] = var4;
                    var4 = _closure1_slot37;
                    var8['__initData'] = var4;
                    var17 = 0;
                    var15 = 'respect-motion-settings';
                    var18 = var11;
                    var14 = var8;
                    var4 = var18[var10](var17, var16, var15, var14, var13);
                    var4 = var5.bind(var6)(var4);
                    _fun0006_ip = 5; continue _fun0006;
case 2:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 20;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.withSpring;
                    var5 = _closure1_slot33;
                    var2 = 1;
                    var2 = var6.bind(var7)(var2, var5);
                    var2 = var3.bind(var4)(var2);
case 5:
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var3, var4);
            if(!(var1 != var9)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var6 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 25;
            var4 = var14[var3];
            var4 = var6.bind(var5)(var4);
            var7 = var4.AVATAR_SIZE_MAP;
            var4 = _closure1_slot28;
            var4 = var7[var4];
            var3 = var14[var3];
            var3 = var6.bind(var5)(var3);
            var6 = var3.AVATAR_SIZE_MAP;
            var3 = _closure1_slot27;
            var3 = var6[var3];
            var4 = var4 - var3;
            var3 = 2;
            var6 = var4 / var3;
            var4 = _closure1_slot24;
            var7 = _closure1_slot1;
            var2 = var14[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var8 = {};
            var16 = 'absolute';
            var8['position'] = var16;
            var6 = -var6;
            var8['top'] = var6;
            var8['left'] = var6;
            var6 = new Array(2);
            var6[0] = var8;
            var8 = {};
            var8['opacity'] = var15;
            var6[1] = var8;
            var2['style'] = var6;
            var8 = _closure1_slot24;
            var6 = 13;
            var6 = var14[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['user'] = var9;
            var14 = var1 != var13;
            var9 = undefined;
            if(!var14) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var9 = var13;
case 31:
            var6['guildId'] = var9;
            var9 = _closure1_slot28;
            var6['size'] = var9;
            var9 = false;
            var6['animate'] = var9;
            var9 = true;
            var6['needsOffscreenAlphaCompositing'] = var9;
            var6['avatarDecoration'] = var12;
            var12 = _closure1_slot22;
            var12 = var12.UNKNOWN;
            if(!(var10 === var12)) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var11 = _closure1_slot22;
            var10 = var11.OFFLINE;
case 33:
            var6['status'] = var10;
            var6['autoStatusCutout'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 29:
            return var1;
        }
    };
    var _closure1_slot53 = var1;
    var1 = function YouAvatarAnimated(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var4 = var1.selectedGuildId;
            var _closure2_slot0 = var4;
            var14 = var1.transitionState;
            var _closure2_slot1 = var14;
            var7 = var1.cleanup;
            var _closure2_slot2 = var7;
            var1 = var1.isLargeAvatar;
            var _closure2_slot3 = var1;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 24;
            var2 = var8[var2];
            var5 = undefined;
            var12 = var9.bind(var5)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot12;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var11.bind(var12)(var3, var2);
            var2 = 15;
            var8 = var8[var2];
            var11 = var9.bind(var5)(var8);
            var9 = var11.useSharedValue;
            var8 = 0;
            var12 = var9.bind(var11)(var8);
            var _closure2_slot4 = var12;
            var11 = _closure1_slot5;
            var9 = var11.useEffect;
            var8 = new Array(3);
            var8[0] = var14;
            var8[1] = var12;
            var8[2] = var7;
            var7 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var5 = _closure2_slot1;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 19;
                    var4 = var1[var7];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.ENTERED;
                    if(!(var5 !== var4)) { _fun0008_ip = 2; continue _fun0008 }
case 3:
                    var5 = _closure2_slot1;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.MOUNTED;
                    if(!(var5 !== var4)) { _fun0008_ip = 2; continue _fun0008 }
case 4:
                    var5 = _closure2_slot1;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.YEETED;
                    if(!(var5 === var4)) { _fun0008_ip = 5; continue _fun0008 }
case 6:
                    var6 = _closure2_slot4;
                    var5 = var6.set;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 20;
                    var4 = var13[var4];
                    var11 = var12.bind(var1)(var4);
                    var10 = var11.withSpring;
                    var16 = _closure1_slot33;
                    var8 = function t() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 15;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.runOnJS;
                        var2 = _closure2_slot2;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var4 = {};
                    var7 = 15;
                    var7 = var13[var7];
                    var7 = var12.bind(var1)(var7);
                    var7 = var7.runOnJS;
                    var4['runOnJS'] = var7;
                    var7 = _closure2_slot2;
                    var4['cleanup'] = var7;
                    var8['__closure'] = var4;
                    var4 = 137158567441.0;
                    var8['__workletHash'] = var4;
                    var4 = _closure1_slot38;
                    var8['__initData'] = var4;
                    var17 = 0;
                    var15 = 'respect-motion-settings';
                    var18 = var11;
                    var14 = var8;
                    var4 = var18[var10](var17, var16, var15, var14, var13);
                    var4 = var5.bind(var6)(var4);
                    _fun0008_ip = 5; continue _fun0008;
case 2:
                    var4 = _closure2_slot4;
                    var3 = var4.set;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 20;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.withSpring;
                    var5 = _closure1_slot33;
                    var2 = 1;
                    var2 = var6.bind(var7)(var2, var5);
                    var2 = var3.bind(var4)(var2);
case 5:
                    return var1;
                }
            };
            var7 = var9.bind(var11)(var7, var8);
            var9 = _closure1_slot5;
            var8 = var9.useCallback;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function(arg1, arg2, arg3, arg4) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var5 = _closure1_slot24;
                    var2 = arg2;
                    if(var2) { _fun0009_ip = 35; continue _fun0009 }
case 36:
                    var4 = _closure1_slot53;
                    _fun0009_ip = 37; continue _fun0009;
case 35:
                    var4 = _closure1_slot52;
case 37:
                    var3 = {};
                    var1 = _closure2_slot0;
                    var3['selectedGuildId'] = var1;
                    var1 = arg3;
                    var3['transitionState'] = var1;
                    var1 = arg4;
                    var3['cleanup'] = var1;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var9 = var8.bind(var9)(var4, var7);
            var8 = _closure1_slot5;
            var7 = var8.useMemo;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var2 = _closure2_slot3;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var11 = var7.bind(var8)(var1, var4);
            var1 = null;
            var3 = var1 == var3;
            if(var3) { _fun0007_ip = 38; continue _fun0007 }
case 39:
            var4 = _closure1_slot24;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var8 = {};
            var13 = _closure1_slot0;
            var15 = 25;
            var16 = var7[var15];
            var16 = var13.bind(var5)(var16);
            var17 = var16.AVATAR_SIZE_MAP;
            var16 = _closure1_slot27;
            var16 = var17[var16];
            var8['height'] = var16;
            var15 = var7[var15];
            var15 = var13.bind(var5)(var15);
            var16 = var15.AVATAR_SIZE_MAP;
            var15 = _closure1_slot27;
            var15 = var16[var15];
            var8['width'] = var15;
            var8['opacity'] = var12;
            var12 = 19;
            var7 = var7[var12];
            var7 = var13.bind(var5)(var7);
            var7 = var7.TransitionStates;
            var13 = var7.YEETED;
            var7 = 'relative';
            if(!(var14 === var13)) { _fun0007_ip = 40; continue _fun0007 }
case 41:
            var7 = 'absolute';
case 40:
            var8['position'] = var7;
            var7 = new Array(1);
            var7[0] = var8;
            var2['style'] = var7;
            var8 = _closure1_slot24;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var12];
            var6 = var7.bind(var5)(var6);
            var7 = var6.TransitionGroup;
            var6 = {};
            var6['items'] = var11;
            var10 = function getItemKey(arg1) {
                var2 = arg1;
                var1 = var2.toString;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6['getItemKey'] = var10;
            var6['renderItem'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 38:
            return var1;
        }
    };
    var _closure1_slot54 = var1;
    var1 = function DefaultAvatar() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = _closure1_slot32;
            var4 = undefined;
            var15 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 27;
            var1 = var3[var1];
            var6 = var2.bind(var4)(var1);
            var5 = var6.useToken;
            var7 = _closure1_slot1;
            var1 = 14;
            var1 = var3[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.colors;
            var1 = var1.BACKGROUND_SURFACE_HIGHEST;
            var18 = var5.bind(var6)(var1);
            var1 = 13;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getStatusSize;
            var1 = _closure1_slot27;
            var1 = var2.bind(var3)(var1);
            var2 = null;
            var2 = var2 != var1;
            var10 = 0;
            if(!var2) { _fun0010_ip = 42; continue _fun0010 }
case 43:
            var10 = var1;
case 42:
            var16 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 25;
            var1 = var11[var7];
            var1 = var16.bind(var4)(var1);
            var2 = var1.AVATAR_SIZE_MAP;
            var1 = _closure1_slot27;
            var19 = var2[var1];
            var2 = 2;
            var3 = var10 / var2;
            var1 = _closure1_slot23;
            var1 = var3 + var1;
            var5 = var19 - var1;
            var3 = 4;
            var3 = var10 / var3;
            var3 = var3 * var2;
            var3 = var5 - var3;
            var13 = {};
            var5 = 18;
            var6 = var11[var5];
            var6 = var16.bind(var4)(var6);
            var6 = var6.CutoutShape;
            var6 = var6.Circle;
            var13['shape'] = var6;
            var13['x'] = var3;
            var13['y'] = var3;
            var1 = var2 * var1;
            var13['size'] = var1;
            var3 = _closure1_slot25;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = {};
            var8 = var11[var7];
            var8 = var16.bind(var4)(var8);
            var12 = var8.AVATAR_SIZE_MAP;
            var8 = _closure1_slot27;
            var8 = var12[var8];
            var6['height'] = var8;
            var7 = var11[var7];
            var7 = var16.bind(var4)(var7);
            var8 = var7.AVATAR_SIZE_MAP;
            var7 = _closure1_slot27;
            var7 = var8[var7];
            var6['width'] = var7;
            var7 = 'relative';
            var6['position'] = var7;
            var1['style'] = var6;
            var8 = _closure1_slot24;
            var7 = _closure1_slot1;
            var5 = var11[var5];
            var6 = var7.bind(var4)(var5);
            var5 = {};
            var12 = new Array(1);
            var12[0] = var13;
            var5['cutouts'] = var12;
            var14 = _closure1_slot24;
            var13 = _closure1_slot6;
            var12 = {};
            var17 = var15.placeholderAvatar;
            var15 = new Array(2);
            var15[0] = var17;
            var17 = {};
            var17['width'] = var19;
            var17['height'] = var19;
            var17['backgroundColor'] = var18;
            var15[1] = var17;
            var12['style'] = var15;
            var17 = _closure1_slot24;
            var15 = 28;
            var15 = var11[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.ReactionIcon;
            var15 = {'size': 'custom', 'style': null, 'color': 'background-mod-strong'};
            var18 = {};
            var18['width'] = var19;
            var18['height'] = var19;
            var15['style'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var5['children'] = var12;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot24;
            var6 = 29;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {'size': null, 'status': null, 'isMobileOnline': false, 'isVROnline': false, 'streaming': false};
            var6['size'] = var10;
            var9 = _closure1_slot22;
            var9 = var9.OFFLINE;
            var6['status'] = var9;
            var9 = {'position': 'absolute', 'right': 4294967293, 'bottom': 4294967293};
            var6['style'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot55 = var1;
    var1 = function DefaultAvatarLarge() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = _closure1_slot32;
            var4 = undefined;
            var18 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 27;
            var1 = var3[var1];
            var6 = var2.bind(var4)(var1);
            var5 = var6.useToken;
            var7 = _closure1_slot1;
            var1 = 14;
            var1 = var3[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.colors;
            var1 = var1.BACKGROUND_SURFACE_HIGHEST;
            var20 = var5.bind(var6)(var1);
            var1 = 13;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getStatusSize;
            var1 = _closure1_slot29;
            var1 = var2.bind(var3)(var1);
            var2 = null;
            var2 = var2 != var1;
            var13 = 0;
            if(!var2) { _fun0011_ip = 42; continue _fun0011 }
case 43:
            var13 = var1;
case 42:
            var23 = _closure1_slot0;
            var14 = _closure1_slot2;
            var22 = 25;
            var1 = var14[var22];
            var1 = var23.bind(var4)(var1);
            var2 = var1.AVATAR_SIZE_MAP;
            var1 = _closure1_slot29;
            var21 = var2[var1];
            var2 = 2;
            var3 = var13 / var2;
            var1 = _closure1_slot23;
            var1 = var3 + var1;
            var5 = var21 - var1;
            var3 = 4;
            var3 = var13 / var3;
            var3 = var3 * var2;
            var3 = var5 - var3;
            var16 = {};
            var8 = 18;
            var5 = var14[var8];
            var5 = var23.bind(var4)(var5);
            var5 = var5.CutoutShape;
            var5 = var5.Circle;
            var16['shape'] = var5;
            var16['x'] = var3;
            var16['y'] = var3;
            var1 = var2 * var1;
            var16['size'] = var1;
            var3 = _closure1_slot24;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = {};
            var6 = var14[var22];
            var6 = var23.bind(var4)(var6);
            var7 = var6.AVATAR_SIZE_MAP;
            var6 = _closure1_slot27;
            var6 = var7[var6];
            var5['height'] = var6;
            var6 = var14[var22];
            var6 = var23.bind(var4)(var6);
            var7 = var6.AVATAR_SIZE_MAP;
            var6 = _closure1_slot27;
            var6 = var7[var6];
            var5['width'] = var6;
            var6 = 'relative';
            var5['position'] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot25;
            var6 = _closure1_slot6;
            var5 = {};
            var10 = var18.avatarShadow;
            var9 = new Array(2);
            var9[0] = var10;
            var10 = {};
            var11 = 'absolute';
            var10['position'] = var11;
            var10['width'] = var21;
            var10['height'] = var21;
            var11 = _closure1_slot16;
            var15 = -var11;
            var11 = var14[var22];
            var11 = var23.bind(var4)(var11);
            var17 = var11.AVATAR_SIZE_MAP;
            var11 = _closure1_slot29;
            var17 = var17[var11];
            var11 = _closure1_slot15;
            var11 = var17 - var11;
            var11 = var15 - var11;
            var10['top'] = var11;
            var11 = _closure1_slot16;
            var11 = -var11;
            var10['left'] = var11;
            var9[1] = var10;
            var5['style'] = var9;
            var11 = _closure1_slot24;
            var10 = _closure1_slot1;
            var8 = var14[var8];
            var9 = var10.bind(var4)(var8);
            var8 = {};
            var15 = new Array(1);
            var15[0] = var16;
            var8['cutouts'] = var15;
            var17 = _closure1_slot24;
            var16 = _closure1_slot6;
            var15 = {};
            var19 = var18.placeholderAvatar;
            var18 = new Array(2);
            var18[0] = var19;
            var19 = {};
            var19['width'] = var21;
            var19['height'] = var21;
            var19['backgroundColor'] = var20;
            var18[1] = var19;
            var15['style'] = var18;
            var20 = _closure1_slot24;
            var18 = 28;
            var18 = var14[var18];
            var18 = var23.bind(var4)(var18);
            var19 = var18.ReactionIcon;
            var18 = {'size': 'custom', 'style': null, 'color': 'background-mod-strong'};
            var21 = {};
            var24 = var14[var22];
            var24 = var23.bind(var4)(var24);
            var25 = var24.AVATAR_SIZE_MAP;
            var24 = _closure1_slot27;
            var24 = var25[var24];
            var21['width'] = var24;
            var22 = var14[var22];
            var22 = var23.bind(var4)(var22);
            var23 = var22.AVATAR_SIZE_MAP;
            var22 = _closure1_slot27;
            var22 = var23[var22];
            var21['height'] = var22;
            var18['style'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var8['children'] = var15;
            var9 = var11.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot24;
            var9 = 29;
            var9 = var14[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {'size': null, 'status': null, 'isMobileOnline': false, 'isVROnline': false, 'streaming': false};
            var9['size'] = var13;
            var12 = _closure1_slot22;
            var12 = var12.OFFLINE;
            var9['status'] = var12;
            var12 = {'position': 'absolute', 'right': 4294967293, 'bottom': 4294967293};
            var9['style'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot56 = var1;
    var1 = function YouName() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = _closure1_slot32;
            var4 = undefined;
            var20 = var1.bind(var4)();
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 30;
            var1 = var2[var1];
            var1 = var6.bind(var4)(var1);
            var5 = var1.YouBarExperiment;
            var3 = var5.useConfig;
            var1 = {};
            var7 = 'YouBar';
            var1['location'] = var7;
            var1 = var3.bind(var5)(var1);
            var3 = var1.animateBetweenServers;
            var5 = 24;
            var1 = var2[var5];
            var9 = var6.bind(var4)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot12;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var8.bind(var9)(var7, var1);
            var _closure2_slot0 = var1;
            var7 = var2[var5];
            var10 = var6.bind(var4)(var7);
            var9 = var10.useStateFromStores;
            var7 = _closure1_slot11;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var16 = var9.bind(var10)(var8, var7);
            var7 = var2[var5];
            var10 = var6.bind(var4)(var7);
            var9 = var10.useStateFromStores;
            var7 = _closure1_slot10;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var9.bind(var10)(var8, var7);
            var _closure2_slot1 = var7;
            var5 = var2[var5];
            var8 = var6.bind(var4)(var5);
            var7 = var8.useStateFromStores;
            var5 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0013_ip = 44; continue _fun0013 }
case 45:
                    var3 = _closure2_slot0;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0013_ip = 44; continue _fun0013 }
case 46:
                    var4 = _closure1_slot9;
                    var3 = var4.getSelfMember;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 44:
                    return var1;
                }
            };
            var5 = var7.bind(var8)(var6, var5);
            var6 = _closure1_slot1;
            var17 = 31;
            var2 = var2[var17];
            var6 = var6.bind(var4)(var2);
            var2 = var6.useName;
            var7 = var2.bind(var6)(var1);
            var2 = var7;
            if(!var3) { _fun0012_ip = 47; continue _fun0012 }
case 48:
            var3 = null;
            var8 = var3 == var5;
            var6 = undefined;
            if(var8) { _fun0012_ip = 49; continue _fun0012 }
case 50:
            var6 = var5.nick;
case 49:
            var2 = var7;
            if(!(var3 != var6)) { _fun0012_ip = 47; continue _fun0012 }
case 51:
            var6 = var3 == var5;
            var3 = undefined;
            if(var6) { _fun0012_ip = 52; continue _fun0012 }
case 53:
            var3 = var5.nick;
case 52:
            var2 = var3;
case 47:
            var _closure2_slot2 = var2;
            var6 = _closure1_slot5;
            var5 = var6.useMemo;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0014_ip = 35; continue _fun0014 }
case 36:
                    var1 = new Array(0);
                    _fun0014_ip = 54; continue _fun0014;
case 35:
                    var3 = _closure2_slot2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 54:
                    return var1;
                }
            };
            var21 = var5.bind(var6)(var2, var3);
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var2 = 32;
            var2 = var25[var2];
            var3 = var24.bind(var4)(var2);
            var2 = var3.useCustomStatusActivity;
            var18 = var2.bind(var3)();
            var5 = _closure1_slot5;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function(arg1, arg2, arg3, arg4) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var3;
                    if(var3) { _fun0015_ip = 55; continue _fun0015 }
case 56:
                    var6 = _closure1_slot24;
                    var5 = _closure1_slot51;
                    var4 = {};
                    var3 = arg2;
                    var4['username'] = var3;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var4['userId'] = var2;
                    var2 = arg3;
                    var4['transitionState'] = var2;
                    var2 = arg4;
                    var4['onCleanup'] = var2;
                    var3 = undefined;
                    var2 = arg1;
                    var1 = var6.bind(var3)(var5, var4, var2);
case 55:
                    return var1;
                }
            };
            var13 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot25;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var20.userText;
            var1['style'] = var5;
            var7 = _closure1_slot25;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = var20.usernameContainer;
            var5['style'] = var8;
            var11 = _closure1_slot24;
            var10 = 33;
            var8 = var25[var10];
            var8 = var24.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'heading-md/bold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1, 'maxFontSizeMultiplier': 1.75, 'style': null, 'children': 'Disquird Disquird Disquird Disquird'};
            var19 = 1;
            var12 = {'opacity': 0, 'paddingBottom': null, 'flexShrink': 1};
            var23 = 22;
            var23 = var25[var23];
            var24 = var24.bind(var4)(var23);
            var23 = var24.isAndroid;
            var23 = var23.bind(var24)();
            var22 = 0;
            if(!var23) { _fun0012_ip = 57; continue _fun0012 }
case 58:
            var22 = 2;
case 57:
            var12['paddingBottom'] = var22;
            var8['style'] = var12;
            var9 = var11.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var12 = _closure1_slot24;
            var11 = _closure1_slot0;
            var22 = _closure1_slot2;
            var9 = 19;
            var9 = var22[var9];
            var9 = var11.bind(var4)(var9);
            var11 = var9.TransitionGroup;
            var9 = {};
            var9['items'] = var21;
            var15 = function getItemKey(arg1) {
                var1 = arg1;
                return var1;
            };
            var9['getItemKey'] = var15;
            var9['renderItem'] = var13;
            var9 = var12.bind(var4)(var11, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot25;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var20.statusRow;
            var6['style'] = var9;
            var15 = null;
            var11 = var15 == var18;
            var9 = undefined;
            if(var11) { _fun0012_ip = 59; continue _fun0012 }
case 60:
            var9 = var18.emoji;
case 59:
            var9 = var15 != var9;
            var11 = null;
            if(!var9) { _fun0012_ip = 61; continue _fun0012 }
case 62:
            var13 = _closure1_slot24;
            var12 = _closure1_slot1;
            var21 = _closure1_slot2;
            var9 = 34;
            var9 = var21[var9];
            var12 = var12.bind(var4)(var9);
            var9 = {};
            var21 = 16;
            var9['size'] = var21;
            var20 = var20.statusEmoji;
            var9['style'] = var20;
            var20 = var18.emoji;
            var9['emoji'] = var20;
            var11 = var13.bind(var4)(var12, var9);
case 61:
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot24;
            var20 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = var13[var10];
            var10 = var20.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-xs/medium', 'color': 'text-muted', 'lineClamp': 1, 'ellipsizeMode': 'tail', 'accessibilityHint': null, 'maxFontSizeMultiplier': 1.75};
            var13 = var13[var17];
            var20 = var20.bind(var4)(var13);
            var13 = var20.humanizeStatus;
            var13 = var13.bind(var20)(var16);
            var10['accessibilityHint'] = var13;
            var13 = {};
            var13['flexShrink'] = var19;
            var10['style'] = var13;
            var19 = var15 == var18;
            var13 = undefined;
            if(var19) { _fun0012_ip = 63; continue _fun0012 }
case 64:
            var13 = var18.state;
case 63:
            if(!(var15 == var13)) { _fun0012_ip = 65; continue _fun0012 }
case 66:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var17];
            var15 = var15.bind(var4)(var14);
            var14 = var15.humanizeStatus;
            var13 = var14.bind(var15)(var16);
case 65:
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot57 = var1;
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
    var17 = 1;
    var4 = var6[var17];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var16 = 2;
    var7 = var6[var16];
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
    var15 = var4.YOU_BAR_HEIGHT;
    var _closure1_slot15 = var15;
    var8 = var4.YOU_BAR_PADDING;
    var _closure1_slot16 = var8;
    var8 = var4.CUSTOM_THEME_COLORS;
    var _closure1_slot17 = var8;
    var8 = var4.CUSTOM_THEME_BACKGROUND_COLORS;
    var _closure1_slot18 = var8;
    var8 = var4.useYouBarHorizontalMargin;
    var _closure1_slot19 = var8;
    var4 = var4.useYouBarTotalHeight;
    var _closure1_slot20 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ME;
    var _closure1_slot21 = var8;
    var4 = var4.StatusTypes;
    var _closure1_slot22 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.STATUS_PADDING;
    var _closure1_slot23 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot24 = var8;
    var8 = var4.jsxs;
    var _closure1_slot25 = var8;
    var4 = var4.Fragment;
    var _closure1_slot26 = var4;
    var4 = 13;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AvatarSizes;
    var8 = var8.REFRESH_MEDIUM_32;
    var _closure1_slot27 = var8;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AvatarSizes;
    var8 = var8.NORMAL;
    var _closure1_slot28 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AvatarSizes;
    var4 = var4.XLARGE;
    var _closure1_slot29 = var4;
    var4 = {};
    var11 = 14;
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
    var _closure1_slot30 = var4;
    var4 = 15;
    var4 = var6[var4];
    var9 = var12.bind(var1)(var4);
    var8 = var9.createAnimatedComponent;
    var13 = 16;
    var4 = var6[var13];
    var4 = var12.bind(var1)(var4);
    var4 = var8.bind(var9)(var4);
    var _closure1_slot31 = var4;
    var4 = 17;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'position': 'absolute', 'left': 0, 'right': 0, 'bottom': 0, 'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': 'transparent'};
    var14 = 'row';
    var18 = var6[var11];
    var18 = var12.bind(var1)(var18);
    var18 = var18.shadows;
    var20 = var18.SHADOW_TOP_HIGH;
    var21 = var10;
    var18 = copyDataProperties(var21, var20);
    var4['youRow'] = var10;
    var10 = {};
    var10['borderWidth'] = var17;
    var18 = var6[var11];
    var18 = var12.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BORDER_MUTED;
    var10['borderColor'] = var18;
    var18 = var15 / var16;
    var10['borderRadius'] = var18;
    var4['youRowFloating'] = var10;
    var10 = {'flexDirection': 'row', 'gap': 8};
    var4['youRowRight'] = var10;
    var10 = {};
    var10['flex'] = var17;
    var17 = var6[var11];
    var17 = var12.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_12;
    var10['marginRight'] = var17;
    var17 = var15 / var16;
    var10['borderRadius'] = var17;
    var4['youPressable'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var15 = var15 / var16;
    var10['borderRadius'] = var15;
    var4['youButton'] = var10;
    var10 = {'flexDirection': 'column', 'justifyContent': 'center', 'height': '100%', 'gap': 1};
    var4['userText'] = var10;
    var10 = {};
    var15 = 'relative';
    var10['position'] = var15;
    var4['usernameContainer'] = var10;
    var10 = {};
    var10['flexDirection'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var10['gap'] = var14;
    var4['statusRow'] = var10;
    var10 = {'width': 16, 'height': 16};
    var4['statusEmoji'] = var10;
    var10 = {'position': 'absolute', 'flexDirection': 'row', 'alignItems': 'center', 'overflow': 'visible', 'gap': 2};
    var4['usernameRow'] = var10;
    var10 = {};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOD_MUTED;
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
    var13 = var13.BACKGROUND_BRAND;
    var10['backgroundColor'] = var13;
    var4['icymiBadge'] = var10;
    var10 = {'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var10['borderRadius'] = var13;
    var4['placeholderAvatar'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.shadows;
    var20 = var11.SHADOW_MEDIUM;
    var21 = var10;
    var11 = copyDataProperties(var21, var20);
    var4['avatarShadow'] = var10;
    var10 = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0};
    var4['floatingShade'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot32 = var4;
    var4 = {'damping': 20, 'stiffness': 300, 'mass': 1.5, 'overshootClamping': true, 'restSpeedThreshold': 0.001, 'restDisplacementThreshold': 0.001};
    var _closure1_slot33 = var4;
    var4 = {};
    var8 = 'function YouBarTsx1(){const{runOnJS,onCleanup}=this.__closure;runOnJS(onCleanup)();}';
    var4['code'] = var8;
    var _closure1_slot34 = var4;
    var4 = {};
    var8 = 'function YouBarTsx2(){const{runOnJS,cleanup}=this.__closure;runOnJS(cleanup)();}';
    var4['code'] = var8;
    var _closure1_slot35 = var4;
    var4 = {};
    var8 = 'function YouBarTsx3(){const{scale,left,top}=this.__closure;return{transform:[{scale:scale.get()}],left:left.get(),top:top.get()};}';
    var4['code'] = var8;
    var _closure1_slot36 = var4;
    var4 = {};
    var8 = 'function YouBarTsx4(){const{runOnJS,cleanup}=this.__closure;runOnJS(cleanup)();}';
    var4['code'] = var8;
    var _closure1_slot37 = var4;
    var4 = {};
    var8 = 'function YouBarTsx5(){const{runOnJS,cleanup}=this.__closure;runOnJS(cleanup)();}';
    var4['code'] = var8;
    var _closure1_slot38 = var4;
    var4 = {};
    var8 = 'function YouBarTsx6(){const{nameMargin}=this.__closure;return{marginLeft:nameMargin.get()};}';
    var4['code'] = var8;
    var _closure1_slot39 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var6 = var1.largeAvatarEnabled;
            var1 = var1.isQuestVisible;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var2 = _closure1_slot32;
            var13 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 30;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var8 = var2.YouBarExperiment;
            var7 = var8.useConfig;
            var2 = {};
            var9 = 'YouBar';
            var2['location'] = var9;
            var2 = var7.bind(var8)(var2);
            var9 = var2.animateBetweenServers;
            var _closure2_slot0 = var9;
            var2 = 24;
            var7 = var5[var2];
            var12 = var3.bind(var4)(var7);
            var11 = var12.useStateFromStores;
            var7 = _closure1_slot12;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var11.bind(var12)(var8, var7);
            var _closure2_slot1 = var7;
            var2 = var5[var2];
            var8 = var3.bind(var4)(var2);
            var5 = var8.useStateFromStores;
            var2 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var5.bind(var8)(var3, var2);
            var _closure2_slot2 = var2;
            var8 = _closure1_slot5;
            var5 = var8.useMemo;
            var3 = new Array(2);
            var3[0] = var9;
            var3[1] = var2;
            var2 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = new Array(1);
                    if(var1) { _fun0017_ip = 67; continue _fun0017 }
case 68:
                    var1 = undefined;
                    var2[0] = var1;
                    var1 = var2;
                    _fun0017_ip = 69; continue _fun0017;
case 67:
                    var3 = _closure2_slot2;
                    var2[0] = var3;
                    var1 = var2;
case 69:
                    return var1;
                }
            };
            var16 = var5.bind(var8)(var2, var3);
            if(!var6) { _fun0016_ip = 70; continue _fun0016 }
case 71:
            var6 = !var1;
case 70:
            _closure2_slot3 = var6;
            var5 = _closure1_slot5;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function(arg1, arg2, arg3, arg4) {
                var5 = _closure1_slot24;
                var4 = _closure1_slot54;
                var3 = {};
                var1 = arg2;
                var3['selectedGuildId'] = var1;
                var1 = arg3;
                var3['transitionState'] = var1;
                var1 = arg4;
                var3['cleanup'] = var1;
                var1 = _closure2_slot3;
                var3['isLargeAvatar'] = var1;
                var2 = undefined;
                var1 = arg1;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var14 = var3.bind(var5)(var1, var2);
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var12 = 15;
            var1 = var1[var12];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useSharedValue;
            var1 = 12;
            if(!var6) { _fun0016_ip = 72; continue _fun0016 }
case 73:
            var1 = 32;
case 72:
            var9 = var2.bind(var3)(var1);
            _closure2_slot4 = var9;
            var5 = _closure1_slot5;
            var3 = var5.useEffect;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var9;
            var1 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var4 = _closure2_slot4;
                    var3 = var4.set;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 20;
                    var6 = var6[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var6);
                    var6 = var7.withSpring;
                    var8 = _closure2_slot3;
                    var5 = 12;
                    if(!var8) { _fun0018_ip = 74; continue _fun0018 }
case 75:
                    var5 = 32;
case 74:
                    var2 = _closure1_slot33;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = var3[var12];
            var5 = var2.bind(var4)(var1);
            var2 = var5.useAnimatedStyle;
            var1 = function v() {
                var1 = {};
                var3 = _closure2_slot4;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['marginLeft'] = var2;
                return var1;
            };
            var8 = {};
            var8['nameMargin'] = var9;
            var1['__closure'] = var8;
            var8 = 9171361053780.0;
            var1['__workletHash'] = var8;
            var8 = _closure1_slot39;
            var1['__initData'] = var8;
            var11 = var2.bind(var5)(var1);
            var2 = _closure1_slot1;
            var1 = 31;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useName;
            var5 = var1.bind(var2)(var7);
            var3 = _closure1_slot25;
            var2 = _closure1_slot6;
            var1 = null;
            if(!(var1 != var7)) { _fun0016_ip = 76; continue _fun0016 }
case 77:
            if(!(var1 != var5)) { _fun0016_ip = 76; continue _fun0016 }
case 78:
            var1 = {};
            var5 = var13.youButton;
            var1['style'] = var5;
            var9 = _closure1_slot24;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 19;
            var5 = var7[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.TransitionGroup;
            var5 = {};
            var5['items'] = var16;
            var15 = function getItemKey(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    var2 = var2 == var3;
                    var3 = undefined;
                    if(var2) { _fun0019_ip = 79; continue _fun0019 }
case 45:
                    var6 = _closure2_slot1;
                    var5 = var6.getAvatarURL;
                    var10 = arg1;
                    var9 = 16;
                    var11 = var6;
                    var8 = false;
                    var7 = false;
                    var3 = var11[var5](var10, var9, var8, var7, var6);
case 79:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = '';
                    var1 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var5['getItemKey'] = var15;
            var5['renderItem'] = var14;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var9 = _closure1_slot24;
            var8 = _closure1_slot1;
            var7 = var7[var12];
            var7 = var8.bind(var4)(var7);
            var8 = var7.View;
            var7 = {};
            var15 = var13.userText;
            var14 = new Array(3);
            var14[0] = var15;
            var14[1] = var11;
            var15 = {};
            var16 = 1;
            var15['flexShrink'] = var16;
            var14[2] = var15;
            var7['style'] = var14;
            var16 = _closure1_slot24;
            var15 = _closure1_slot57;
            var14 = {};
            var14 = var16.bind(var4)(var15, var14);
            var7['children'] = var14;
            var7 = var9.bind(var4)(var8, var7);
            var5[1] = var7;
            var1['children'] = var5;
            _fun0016_ip = 80; continue _fun0016;
case 76:
            var5 = {};
            var8 = var13.youButton;
            var7 = new Array(1);
            var7[0] = var8;
            var5['style'] = var7;
            var8 = _closure1_slot24;
            if(var6) { _fun0016_ip = 81; continue _fun0016 }
case 82:
            var7 = _closure1_slot55;
            _fun0016_ip = 83; continue _fun0016;
case 81:
            var7 = _closure1_slot56;
case 83:
            var6 = {};
            var7 = var8.bind(var4)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot24;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var12];
            var7 = var8.bind(var4)(var7);
            var8 = var7.View;
            var7 = {};
            var7['style'] = var11;
            var12 = _closure1_slot24;
            var11 = _closure1_slot6;
            var10 = {};
            var13 = var13.placeholder;
            var10['style'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var6[1] = var7;
            var5['children'] = var6;
            var1 = var5;
case 80:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot40 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var2 = arg1;
            var12 = var2.hasNameplate;
            var14 = var2.icon;
            var7 = var2.hasBadge;
            var _closure2_slot0 = var7;
            var15 = var2.badgeStyle;
            var9 = var2.onPress;
            var11 = var2.a11yLabel;
            var2 = _closure1_slot32;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var3 = function useIconBadgeCutout(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var2 = arg1;
                    var8 = var2.size;
                    var _closure3_slot0 = var8;
                    var7 = var2.xOffset;
                    var3 = undefined;
                    if(!(var7 === var3)) { _fun0021_ip = 84; continue _fun0021 }
case 85:
                    var7 = 0;
case 84:
                    var _closure3_slot1 = var7;
                    var6 = var2.yOffset;
                    if(!(var6 === var3)) { _fun0021_ip = 86; continue _fun0021 }
case 87:
                    var6 = 0;
case 86:
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
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                            var2 = _closure3_slot3;
                            var1 = _closure3_slot5;
                            var6 = var2 + var1;
                            var7 = 2;
                            var4 = var7 * var6;
                            var3 = _closure3_slot4;
                            var1 = null;
                            var2 = var4;
                            if(!(var1 != var3)) { _fun0022_ip = 3; continue _fun0022 }
case 88:
                            var3 = _closure3_slot4;
                            var1 = _closure3_slot5;
                            var1 = var7 * var1;
                            var2 = var3 + var1;
case 3:
                            var1 = {};
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = 18;
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
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var3 = arg1;
                    var8 = var3.size;
                    var _closure3_slot0 = var8;
                    var7 = var3.badgeSize;
                    var _closure3_slot1 = var7;
                    var5 = var3.xOffset;
                    var2 = undefined;
                    if(!(var5 === var2)) { _fun0023_ip = 89; continue _fun0023 }
case 69:
                    var5 = 0;
case 89:
                    var _closure3_slot2 = var5;
                    var6 = var3.yOffset;
                    if(!(var6 === var2)) { _fun0023_ip = 90; continue _fun0023 }
case 75:
                    var6 = 0;
case 90:
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
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0024_ip = 56; continue _fun0024 }
case 91:
                    var1 = new Array(0);
                    _fun0024_ip = 46; continue _fun0024;
case 56:
                    var3 = _closure2_slot1;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 46:
                    return var1;
                }
            };
            var18 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot25;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = {'position': 'relative', 'height': 20, 'width': 20};
            var1['style'] = var6;
            var13 = _closure1_slot24;
            var10 = _closure1_slot1;
            var19 = _closure1_slot2;
            var6 = 18;
            var6 = var19[var6];
            var10 = var10.bind(var4)(var6);
            var6 = {};
            var6['cutouts'] = var18;
            var6['children'] = var14;
            var10 = var13.bind(var4)(var10, var6);
            var6 = new Array(2);
            var6[0] = var10;
            if(!var7) { _fun0020_ip = 92; continue _fun0020 }
case 93:
            var14 = _closure1_slot24;
            var13 = _closure1_slot1;
            var18 = _closure1_slot2;
            var10 = 35;
            var10 = var18[var10];
            var13 = var13.bind(var4)(var10);
            var10 = {};
            var10['style'] = var17;
            var10['size'] = var16;
            var10['badgeStyle'] = var15;
            var7 = var14.bind(var4)(var13, var10);
case 92:
            var6[1] = var7;
            var1['children'] = var6;
            var10 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot24;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var5.buttonContainer;
            var1['style'] = var5;
            var7 = _closure1_slot24;
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 36;
            var5 = var13[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.IconButton;
            var5 = {};
            var5['accessibilityLabel'] = var11;
            var11 = 'tertiary';
            if(!var12) { _fun0020_ip = 94; continue _fun0020 }
case 95:
            var11 = 'secondary-overlay';
case 94:
            var5['variant'] = var11;
            var11 = 'sm';
            var5['size'] = var11;
            var5['icon'] = var10;
            var5['onPress'] = var9;
            var8 = _closure1_slot30;
            var5['hitSlop'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot41 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var12 = var1.hasNameplate;
            var1 = _closure1_slot32;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 37;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var7 = var1.showDot;
            var3 = _closure1_slot24;
            var2 = _closure1_slot41;
            var1 = {};
            var1['hasNameplate'] = var12;
            var10 = _closure1_slot24;
            var9 = _closure1_slot0;
            var8 = 38;
            var8 = var11[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.FlashIcon;
            var8 = {};
            var11 = 'custom';
            var8['size'] = var11;
            var11 = var6.largeButtonIcon;
            var8['style'] = var11;
            var11 = undefined;
            if(!var12) { _fun0025_ip = 96; continue _fun0025 }
case 97:
            var11 = 'white';
case 96:
            var8['color'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var1['icon'] = var8;
            var1['hasBadge'] = var7;
            var6 = var6.icymiBadge;
            var1['badgeStyle'] = var6;
            var6 = function onPress() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 39;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0026_ip = 98; continue _fun0026 }
case 99:
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
case 98:
                    return var1;
                }
            };
            var1['onPress'] = var6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 40;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.SY4sdZ;
            var5 = var6.bind(var7)(var5);
            var1['a11yLabel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot42 = var4;
    var4 = {};
    var8 = 'function YouBarTsx7(){const{withSpring,badgeCount,SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.spacing.PX_4:0,SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,SPRING_CONFIG)};}';
    var4['code'] = var8;
    var _closure1_slot43 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var1 = arg1;
            var19 = var1.hasNameplate;
            var1 = _closure1_slot32;
            var4 = undefined;
            var18 = var1.bind(var4)();
            var7 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 41;
            var1 = var15[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var20 = var1.value;
            var _closure2_slot0 = var20;
            var13 = _closure1_slot0;
            var14 = 15;
            var1 = var15[var14];
            var3 = var13.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function n() {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var1 = {};
                    var4 = {};
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var8 = 20;
                    var3 = var3[var8];
                    var7 = undefined;
                    var11 = var5.bind(var7)(var3);
                    var10 = var11.withSpring;
                    var3 = _closure2_slot0;
                    var5 = 0;
                    var3 = var3 > var5;
                    var9 = 0;
                    if(!var3) { _fun0028_ip = 74; continue _fun0028 }
case 75:
                    var9 = 1;
case 74:
                    var3 = _closure1_slot33;
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
                    if(!var3) { _fun0028_ip = 100; continue _fun0028 }
case 101:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var3 = 14;
                    var3 = var12[var3];
                    var3 = var11.bind(var7)(var3);
                    var3 = var3.spacing;
                    var4 = var3.PX_4;
case 100:
                    var3 = _closure1_slot33;
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
                    if(!var6) { _fun0028_ip = 102; continue _fun0028 }
case 103:
                    var5 = 1;
case 102:
                    var2 = _closure1_slot33;
                    var2 = var3.bind(var4)(var5, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var6 = 20;
            var6 = var15[var6];
            var6 = var13.bind(var4)(var6);
            var6 = var6.withSpring;
            var5['withSpring'] = var6;
            var5['badgeCount'] = var20;
            var6 = _closure1_slot33;
            var5['SPRING_CONFIG'] = var6;
            var6 = 14;
            var6 = var15[var6];
            var6 = var7.bind(var4)(var6);
            var5['tokens'] = var6;
            var1['__closure'] = var5;
            var5 = 1500928155643.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot43;
            var1['__initData'] = var5;
            var17 = var2.bind(var3)(var1);
            var3 = _closure1_slot24;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var18.buttonContainer;
            var1['style'] = var5;
            var7 = _closure1_slot24;
            var5 = 36;
            var5 = var15[var5];
            var5 = var13.bind(var4)(var5);
            var6 = var5.IconButton;
            var5 = {};
            var10 = 40;
            var11 = var15[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var15[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.HcoRu0;
            var10 = var11.bind(var12)(var10);
            var5['accessibilityLabel'] = var10;
            var10 = 'tertiary';
            if(!var19) { _fun0027_ip = 104; continue _fun0027 }
case 105:
            var10 = 'secondary-overlay';
case 104:
            var5['variant'] = var10;
            var10 = 'sm';
            var5['size'] = var10;
            var12 = _closure1_slot25;
            var11 = _closure1_slot6;
            var10 = {};
            var13 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
            var10['style'] = var13;
            var16 = _closure1_slot24;
            var15 = _closure1_slot0;
            var21 = _closure1_slot2;
            var13 = 42;
            var13 = var21[var13];
            var13 = var15.bind(var4)(var13);
            var15 = var13.BellIcon;
            var13 = {};
            var21 = 'custom';
            var13['size'] = var21;
            var18 = var18.largeButtonIcon;
            var13['style'] = var18;
            var18 = undefined;
            if(!var19) { _fun0027_ip = 106; continue _fun0027 }
case 107:
            var18 = 'white';
case 106:
            var13['color'] = var18;
            var15 = var16.bind(var4)(var15, var13);
            var13 = new Array(2);
            var13[0] = var15;
            var16 = _closure1_slot24;
            var18 = _closure1_slot1;
            var21 = _closure1_slot2;
            var14 = var21[var14];
            var14 = var18.bind(var4)(var14);
            var15 = var14.View;
            var14 = {};
            var14['style'] = var17;
            var19 = _closure1_slot24;
            var17 = 43;
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
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 39;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0029_ip = 108; continue _fun0029 }
case 99:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = true;
                    var3['inNestedNavigator'] = var2;
                    var2 = 'notifications';
                    var2 = var4.bind(var5)(var2, var3);
case 108:
                    return var1;
                }
            };
            var5['onPress'] = var9;
            var8 = _closure1_slot30;
            var5['hitSlop'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot44 = var4;
    var4 = {};
    var8 = 'function YouBarTsx8(){const{withSpring,isPressed,isQuestVisible,SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(isPressed&&!isQuestVisible?0.98:1,SPRING_CONFIG)}]};}';
    var4['code'] = var8;
    var _closure1_slot45 = var4;
    var4 = {};
    var8 = 'function YouBarTsx9(){const{withSpring,interpolate,isQuestVisible,questDockOffset,YOU_BAR_HEIGHT,Extrapolation,SPRING_CONFIG}=this.__closure;return{borderTopRightRadius:withSpring(interpolate(isQuestVisible?questDockOffset.get():50,[0,50],[0,YOU_BAR_HEIGHT/2],Extrapolation.CLAMP),SPRING_CONFIG),borderTopLeftRadius:withSpring(interpolate(isQuestVisible?questDockOffset.get():50,[0,50],[0,YOU_BAR_HEIGHT/2],Extrapolation.CLAMP),SPRING_CONFIG)};}';
    var4['code'] = var8;
    var _closure1_slot46 = var4;
    var4 = {};
    var8 = 'function YouBarTsx10(){const{runOnJS,handleNavBetweenGuildsAndDMs}=this.__closure;runOnJS(handleNavBetweenGuildsAndDMs)();}';
    var4['code'] = var8;
    var _closure1_slot47 = var4;
    var8 = var7.memo;
    var4 = function() {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var2 = _closure1_slot32;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 48;
            var2 = var8[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var7 = var2.width;
            var6 = _closure1_slot0;
            var2 = 30;
            var3 = var8[var2];
            var3 = var6.bind(var4)(var3);
            var13 = var3.YouBarExperiment;
            var9 = var13.useConfig;
            var3 = {};
            var11 = 'YouBar';
            var3['location'] = var11;
            var3 = var9.bind(var13)(var3);
            var21 = var3.largeAvatarEnabled;
            var3 = 49;
            var9 = var8[var3];
            var13 = var6.bind(var4)(var9);
            var9 = var13.useIsMobileQuestDockVisibleBase;
            var3 = var8[var3];
            var14 = var6.bind(var4)(var3);
            var3 = var14.useMobileQuestDock;
            var3 = var3.bind(var14)();
            var20 = var9.bind(var13)(var3);
            var _closure2_slot0 = var20;
            var3 = 50;
            var3 = var8[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.useDrawerWidth;
            var6 = var3.bind(var6)();
            var3 = 51;
            var3 = var8[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var8 = var3.isChatBesideChannelList;
            var3 = _closure1_slot19;
            var3 = var3.bind(var4)();
            var _closure2_slot1 = var3;
            var26 = 2;
            var5 = var26 * var3;
            if(var8) { _fun0030_ip = 109; continue _fun0030 }
case 110:
            var23 = var7 - var5;
            _fun0030_ip = 111; continue _fun0030;
case 109:
            var23 = var6 - var5;
case 111:
            var _closure2_slot2 = var23;
            var5 = _closure1_slot13;
            var8 = var5.bind(var4)();
            var _closure2_slot3 = var8;
            var7 = _closure1_slot5;
            var6 = var7.useMemo;
            var5 = new Array(3);
            var5[0] = var23;
            var5[1] = var8;
            var5[2] = var3;
            var3 = function() {
                var1 = {};
                var3 = _closure2_slot1;
                var1['marginHorizontal'] = var3;
                var4 = _closure1_slot15;
                var1['height'] = var4;
                var4 = _closure2_slot3;
                var1['marginBottom'] = var4;
                var3 = _closure1_slot16;
                var1['padding'] = var3;
                var2 = _closure2_slot2;
                var1['width'] = var2;
                return var1;
            };
            var8 = var6.bind(var7)(var3, var5);
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 52;
            var3 = var6[var3];
            var9 = var5.bind(var4)(var3);
            var7 = var9.useICYMIEnabled;
            var3 = 'TabsNavigator';
            var9 = var7.bind(var9)(var3);
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var7 = var2.YouBarExperiment;
            var3 = var7.useConfig;
            var2 = {};
            var2['location'] = var11;
            var2 = var3.bind(var7)(var2);
            var3 = var2.animateBetweenServers;
            var2 = 24;
            var7 = var6[var2];
            var14 = var5.bind(var4)(var7);
            var13 = var14.useStateFromStores;
            var7 = _closure1_slot12;
            var11 = new Array(1);
            var11[0] = var7;
            var7 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var13.bind(var14)(var11, var7);
            var2 = var6[var2];
            var14 = var5.bind(var4)(var2);
            var13 = var14.useStateFromStores;
            var2 = _closure1_slot10;
            var11 = new Array(1);
            var11[0] = var2;
            var2 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var13.bind(var14)(var11, var2);
            var2 = 46;
            var2 = var6[var2];
            var6 = var5.bind(var4)(var2);
            var5 = var6.useNameplate;
            var2 = {};
            var2['user'] = var7;
            var7 = undefined;
            if(!var3) { _fun0030_ip = 112; continue _fun0030 }
case 113:
            var13 = null;
            var13 = var13 != var11;
            var7 = undefined;
            if(!var13) { _fun0030_ip = 112; continue _fun0030 }
case 15:
            var7 = var11;
case 112:
            var2['guildId'] = var7;
            var25 = var5.bind(var6)(var2);
            var11 = null;
            var13 = var11 != var25;
            var2 = function useBGColor(arg1) {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                    var10 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 44;
                    var2 = var5[var2];
                    var7 = undefined;
                    var2 = var10.bind(var7)(var2);
                    var9 = var2.bind(var7)();
                    var8 = 14;
                    var2 = var5[var8];
                    var2 = var10.bind(var7)(var2);
                    var4 = var2.internal;
                    var3 = var4.resolveSemanticColor;
                    var2 = var5[var8];
                    var2 = var10.bind(var7)(var2);
                    var2 = var2.colors;
                    var2 = var2.BACKGROUND_SURFACE_HIGHEST;
                    var4 = var3.bind(var4)(var9, var2);
                    var3 = _closure1_slot0;
                    var10 = 24;
                    var2 = var5[var10];
                    var12 = var3.bind(var7)(var2);
                    var11 = var12.useStateFromStores;
                    var2 = _closure1_slot8;
                    var9 = new Array(1);
                    var9[0] = var2;
                    var2 = function() {
                        var1 = _closure1_slot8;
                        var1 = var1.gradientPreset;
                        return var1;
                    };
                    var2 = var11.bind(var12)(var9, var2);
                    var9 = 45;
                    var11 = var5[var9];
                    var12 = var3.bind(var7)(var11);
                    var11 = var12.useGradientValue;
                    var9 = var5[var9];
                    var9 = var3.bind(var7)(var9);
                    var9 = var9.GradientPercentage;
                    var9 = var9.END;
                    var13 = var11.bind(var12)(var9);
                    var9 = var5[var10];
                    var14 = var3.bind(var7)(var9);
                    var12 = var14.useStateFromStores;
                    var9 = _closure1_slot12;
                    var11 = new Array(1);
                    var11[0] = var9;
                    var9 = function() {
                        var2 = _closure1_slot12;
                        var1 = var2.getCurrentUser;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var9 = var12.bind(var14)(var11, var9);
                    var10 = var5[var10];
                    var12 = var3.bind(var7)(var10);
                    var11 = var12.useStateFromStores;
                    var14 = _closure1_slot10;
                    var10 = new Array(1);
                    var10[0] = var14;
                    var1 = function() {
                        var2 = _closure1_slot10;
                        var1 = var2.getGuildId;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var10 = var11.bind(var12)(var10, var1);
                    var1 = 46;
                    var1 = var5[var1];
                    var5 = var3.bind(var7)(var1);
                    var3 = var5.useNameplate;
                    var1 = {};
                    var1['user'] = var9;
                    var11 = arg1;
                    var9 = undefined;
                    if(!var11) { _fun0031_ip = 72; continue _fun0031 }
case 50:
                    var11 = null;
                    var11 = var11 != var10;
                    var9 = undefined;
                    if(!var11) { _fun0031_ip = 72; continue _fun0031 }
case 73:
                    var9 = var10;
case 72:
                    var1['guildId'] = var9;
                    var1 = var3.bind(var5)(var1);
                    var3 = null;
                    var1 = var3 != var1;
                    if(var1) { _fun0031_ip = 114; continue _fun0031 }
case 115:
                    if(!(var3 != var2)) { _fun0031_ip = 114; continue _fun0031 }
case 116:
                    var9 = _closure1_slot17;
                    var5 = var2.id;
                    var5 = var9[var5];
                    if(!(var3 != var5)) { _fun0031_ip = 114; continue _fun0031 }
case 117:
                    var5 = _closure1_slot17;
                    var2 = var2.id;
                    var2 = var5[var2];
                    _fun0031_ip = 38; continue _fun0031;
case 114:
                    var2 = var4;
                    if(var1) { _fun0031_ip = 38; continue _fun0031 }
case 118:
                    var1 = var3 != var13;
                    var2 = undefined;
                    if(!var1) { _fun0031_ip = 38; continue _fun0031 }
case 119:
                    var5 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var1 = 47;
                    var9 = var12[var1];
                    var11 = var5.bind(var7)(var9);
                    var10 = var11.mix;
                    var9 = var12[var1];
                    var9 = var5.bind(var7)(var9);
                    var9 = var9.bind(var7)(var13);
                    var1 = var12[var1];
                    var1 = var5.bind(var7)(var1);
                    var17 = var1.bind(var7)(var4);
                    var16 = 0.8;
                    var15 = 'hsl';
                    var19 = var11;
                    var18 = var9;
                    var4 = var19[var10](var18, var17, var16, var15, var14);
                    var1 = var4.hex;
                    var2 = var1.bind(var4)();
case 38:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var4 = 27;
                    var4 = var1[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.useToken;
                    var6 = _closure1_slot1;
                    var1 = var1[var8];
                    var1 = var6.bind(var7)(var1);
                    var1 = var1.colors;
                    var1 = var1.BACKGROUND_SURFACE_HIGHEST;
                    var1 = var4.bind(var5)(var1);
                    if(!(var3 != var2)) { _fun0031_ip = 120; continue _fun0031 }
case 121:
                    var1 = var2;
case 120:
                    return var1;
                }
            };
            var32 = var2.bind(var4)(var3);
            var5 = _closure1_slot5;
            var3 = var5.useState;
            var2 = false;
            var3 = var3.bind(var5)(var2);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var3, var26);
            var24 = 0;
            var7 = var2[var24];
            var _closure2_slot4 = var7;
            var41 = 1;
            var2 = var2[var41];
            var _closure2_slot5 = var2;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var16 = 15;
            var2 = var14[var16];
            var5 = var15.bind(var4)(var2);
            var3 = var5.useAnimatedStyle;
            var2 = function s() {
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                    var1 = {};
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 20;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.withSpring;
                    var9 = _closure2_slot4;
                    var8 = 1;
                    var4 = var8;
                    if(!var9) { _fun0032_ip = 122; continue _fun0032 }
case 123:
                    var7 = _closure2_slot0;
                    var4 = var8;
                    if(var7) { _fun0032_ip = 122; continue _fun0032 }
case 124:
                    var4 = 0.98;
case 122:
                    var2 = _closure1_slot33;
                    var2 = var5.bind(var6)(var4, var2);
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var6 = {};
            var18 = 20;
            var17 = var14[var18];
            var17 = var15.bind(var4)(var17);
            var17 = var17.withSpring;
            var6['withSpring'] = var17;
            var6['isPressed'] = var7;
            var6['isQuestVisible'] = var20;
            var7 = _closure1_slot33;
            var6['SPRING_CONFIG'] = var7;
            var2['__closure'] = var6;
            var6 = 17214144506851.0;
            var2['__workletHash'] = var6;
            var6 = _closure1_slot45;
            var2['__initData'] = var6;
            var7 = var3.bind(var5)(var2);
            var5 = _closure1_slot5;
            var3 = var5.useContext;
            var2 = 53;
            var2 = var14[var2];
            var2 = var15.bind(var4)(var2);
            var2 = var2.QuestDockExternalCoordinationContext;
            var2 = var3.bind(var5)(var2);
            var17 = var2.questDockOffset;
            var _closure2_slot6 = var17;
            var2 = var14[var16];
            var5 = var15.bind(var4)(var2);
            var3 = var5.useAnimatedStyle;
            var2 = function h() {
                _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = 20;
                    var6 = var3[var4];
                    var11 = undefined;
                    var14 = var5.bind(var11)(var6);
                    var13 = var14.withSpring;
                    var12 = 15;
                    var3 = var3[var12];
                    var18 = var5.bind(var11)(var3);
                    var17 = var18.interpolate;
                    var5 = _closure2_slot0;
                    var10 = 50;
                    var16 = var10;
                    if(!var5) { _fun0033_ip = 125; continue _fun0033 }
case 108:
                    var6 = _closure2_slot6;
                    var5 = var6.get;
                    var16 = var5.bind(var6)();
case 125:
                    var5 = _closure1_slot15;
                    var6 = 2;
                    var5 = var5 / var6;
                    var15 = [0];
                    var15[1] = var5;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = var7[var12];
                    var5 = var8.bind(var11)(var5);
                    var5 = var5.Extrapolation;
                    var19 = var5.CLAMP;
                    var21 = [0, 50];
                    var23 = var18;
                    var22 = var16;
                    var20 = var15;
                    var9 = var23[var17](var22, var21, var20, var19, var18);
                    var5 = _closure1_slot33;
                    var5 = var13.bind(var14)(var9, var5);
                    var1['borderTopRightRadius'] = var5;
                    var4 = var7[var4];
                    var5 = var8.bind(var11)(var4);
                    var4 = var5.withSpring;
                    var7 = var7[var12];
                    var9 = var8.bind(var11)(var7);
                    var8 = var9.interpolate;
                    var7 = _closure2_slot0;
                    if(!var7) { _fun0033_ip = 126; continue _fun0033 }
case 110:
                    var7 = _closure2_slot6;
                    var3 = var7.get;
                    var10 = var3.bind(var7)();
case 126:
                    var3 = _closure1_slot15;
                    var3 = var3 / var6;
                    var7 = [0];
                    var7[1] = var3;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var12];
                    var3 = var6.bind(var11)(var3);
                    var3 = var3.Extrapolation;
                    var19 = var3.CLAMP;
                    var21 = [0, 50];
                    var23 = var9;
                    var22 = var10;
                    var20 = var7;
                    var3 = var23[var8](var22, var21, var20, var19, var18);
                    var2 = _closure1_slot33;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['borderTopLeftRadius'] = var2;
                    return var1;
                }
            };
            var6 = {};
            var18 = var14[var18];
            var18 = var15.bind(var4)(var18);
            var18 = var18.withSpring;
            var6['withSpring'] = var18;
            var18 = var14[var16];
            var18 = var15.bind(var4)(var18);
            var18 = var18.interpolate;
            var6['interpolate'] = var18;
            var6['isQuestVisible'] = var20;
            var6['questDockOffset'] = var17;
            var17 = _closure1_slot15;
            var6['YOU_BAR_HEIGHT'] = var17;
            var14 = var14[var16];
            var14 = var15.bind(var4)(var14);
            var14 = var14.Extrapolation;
            var6['Extrapolation'] = var14;
            var14 = _closure1_slot33;
            var6['SPRING_CONFIG'] = var14;
            var2['__closure'] = var6;
            var6 = 6127427519897.0;
            var2['__workletHash'] = var6;
            var6 = _closure1_slot46;
            var2['__initData'] = var6;
            var27 = var3.bind(var5)(var2);
            var6 = _closure1_slot5;
            var5 = var6.useCallback;
            var3 = function() {
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var5 = 54;
                var6 = var2[var5];
                var1 = undefined;
                var7 = var4.bind(var1)(var6);
                var6 = var7.triggerHapticFeedback;
                var5 = var2[var5];
                var5 = var4.bind(var1)(var5);
                var5 = var5.HapticFeedbackTypes;
                var5 = var5.SOFT;
                var5 = var6.bind(var7)(var5);
                var5 = _closure1_slot1;
                var3 = 55;
                var3 = var2[var3];
                var6 = var5.bind(var1)(var3);
                var5 = var6.openLazy;
                var3 = 57;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 56;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var2 = true;
                var3['disableHapticOnOpen'] = var2;
                var2 = 'YouBottomSheet';
                var2 = var5.bind(var6)(var4, var2, var3);
                var3 = _closure2_slot5;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var18 = var5.bind(var6)(var3, var2);
            var6 = _closure1_slot5;
            var5 = var6.useCallback;
            var3 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0034_ip = 127; continue _fun0034 }
case 91:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var4 = 54;
                        var6 = var2[var4];
                        var3 = undefined;
                        var7 = var5.bind(var3)(var6);
                        var6 = var7.triggerHapticFeedback;
                        var4 = var2[var4];
                        var4 = var5.bind(var3)(var4);
                        var4 = var4.HapticFeedbackTypes;
                        var4 = var4.SOFT;
                        var4 = var6.bind(var7)(var4);
                        var4 = 57;
                        var4 = var2[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = 58;
                        var4 = var2[var4];
                        var2 = var2.paths;
                        var2 = var5.bind(var3)(var4, var2);
                        SaveGenerator(address=101);
case 128:
                        return var2;
case 129:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0034_ip = 130; continue _fun0034 }
case 131:
                        var4 = var2.showYouAccountActionSheet;
                        var4 = var4.bind(var2)();
                        var5 = _closure2_slot5;
                        var4 = false;
                        var4 = var5.bind(var3)(var4);
                        return var3;
case 130:
                        return var2;
case 127:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = new Array(0);
            var17 = var5.bind(var6)(var3, var2);
            var6 = _closure1_slot5;
            var5 = var6.useCallback;
            var3 = function() {
                var3 = _closure2_slot5;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var22 = var5.bind(var6)(var3, var2);
            var6 = _closure1_slot5;
            var5 = var6.useCallback;
            var3 = function() {
                var3 = _closure2_slot5;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var19 = var5.bind(var6)(var3, var2);
            var6 = _closure1_slot5;
            var5 = var6.useCallback;
            var3 = function() {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 59;
                    var3 = var7[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.coerceGuildsRoute;
                    var6 = _closure1_slot1;
                    var3 = 60;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.bind(var1)();
                    var4 = var4.bind(var5)(var3);
                    var3 = null;
                    if(!(var3 != var4)) { _fun0035_ip = 132; continue _fun0035 }
case 133:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 54;
                    var6 = var9[var5];
                    var7 = var8.bind(var1)(var6);
                    var6 = var7.triggerHapticFeedback;
                    var5 = var9[var5];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.HapticFeedbackTypes;
                    var5 = var5.IMPACT_MEDIUM;
                    var5 = var6.bind(var7)(var5);
                    var4 = var4.params;
                    var6 = var3 == var4;
                    var5 = undefined;
                    if(var6) { _fun0035_ip = 127; continue _fun0035 }
case 134:
                    var5 = var4.guildId;
case 127:
                    var4 = _closure1_slot21;
                    if(!(var5 !== var4)) { _fun0035_ip = 135; continue _fun0035 }
case 136:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 61;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.transitionToGuild;
                    var4 = _closure1_slot21;
                    var4 = var5.bind(var6)(var4);
                    _fun0035_ip = 132; continue _fun0035;
case 135:
                    var5 = _closure1_slot10;
                    var4 = var5.getLastSelectedGuildId;
                    var4 = var4.bind(var5)();
                    if(!(var3 != var4)) { _fun0035_ip = 132; continue _fun0035 }
case 137:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 61;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.transitionToGuild;
                    var2 = var2.bind(var3)(var4);
case 132:
                    return var1;
                }
            };
            var2 = new Array(0);
            var6 = var5.bind(var6)(var3, var2);
            var _closure2_slot7 = var6;
            var5 = _closure1_slot5;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 62;
                var1 = var9[var1];
                var7 = undefined;
                var1 = var8.bind(var7)(var1);
                var2 = var1.Gesture;
                var1 = var2.Pan;
                var2 = var1.bind(var2)();
                var1 = var2.activeOffsetX;
                var6 = 15;
                var3 = var1.bind(var2)(var6);
                var2 = var3.failOffsetX;
                var1 = -5;
                var3 = var2.bind(var3)(var1);
                var2 = var3.failOffsetY;
                var1 = new Array(2);
                var5 = -30;
                var1[0] = var5;
                var5 = 30;
                var1[1] = var5;
                var3 = var2.bind(var3)(var1);
                var2 = var3.onEnd;
                var1 = function t() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot7;
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var5 = {};
                var6 = var9[var6];
                var6 = var8.bind(var7)(var6);
                var6 = var6.runOnJS;
                var5['runOnJS'] = var6;
                var6 = _closure2_slot7;
                var5['handleNavBetweenGuildsAndDMs'] = var6;
                var1['__closure'] = var5;
                var5 = 2122123665445.0;
                var1['__workletHash'] = var5;
                var4 = _closure1_slot47;
                var1['__initData'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var3.bind(var5)(var1, var2);
            var5 = var21;
            if(!var5) { _fun0030_ip = 138; continue _fun0030 }
case 139:
            var5 = !var20;
case 138:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 25;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.AVATAR_SIZE_MAP;
            if(var5) { _fun0030_ip = 140; continue _fun0030 }
case 141:
            var1 = _closure1_slot28;
            var15 = var2[var1];
            _fun0030_ip = 142; continue _fun0030;
case 140:
            var1 = _closure1_slot29;
            var15 = var2[var1];
case 142:
            var3 = _closure1_slot25;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var16];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var28 = var12.youRow;
            var6 = new Array(3);
            var6[0] = var28;
            var6[1] = var8;
            var6[2] = var7;
            var1['style'] = var6;
            var8 = _closure1_slot24;
            var36 = _closure1_slot1;
            var37 = _closure1_slot2;
            if(var5) { _fun0030_ip = 143; continue _fun0030 }
case 144:
            var5 = var37[var16];
            var5 = var36.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var28 = {};
            var7 = 'absolute';
            var28['position'] = var7;
            var7 = new Array(5);
            var7[0] = var28;
            var28 = var12.youRowFloating;
            var7[1] = var28;
            var28 = {};
            var28['width'] = var23;
            var29 = _closure1_slot15;
            var28['height'] = var29;
            var28['backgroundColor'] = var32;
            var7[2] = var28;
            var28 = undefined;
            if(!var20) { _fun0030_ip = 145; continue _fun0030 }
case 146:
            var28 = {'borderTopRightRadius': 0, 'borderTopLeftRadius': 0};
case 145:
            var7[3] = var28;
            var7[4] = var27;
            var5['style'] = var7;
            var6 = var8.bind(var4)(var6, var5);
            _fun0030_ip = 147; continue _fun0030;
case 143:
            var5 = 63;
            var5 = var37[var5];
            var7 = var36.bind(var4)(var5);
            var5 = {};
            var27 = {};
            var39 = 'absolute';
            var27['position'] = var39;
            var5['style'] = var27;
            var29 = _closure1_slot25;
            var28 = _closure1_slot6;
            var27 = {};
            var30 = {};
            var30['width'] = var23;
            var31 = _closure1_slot15;
            var30['height'] = var31;
            var31 = 'transparent';
            var30['backgroundColor'] = var31;
            var27['style'] = var30;
            var33 = _closure1_slot24;
            var31 = _closure1_slot6;
            var30 = {};
            var34 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': null, 'backgroundColor': 'black'};
            var35 = _closure1_slot15;
            var35 = var35 / var26;
            var34['bottom'] = var35;
            var30['style'] = var34;
            var31 = var33.bind(var4)(var31, var30);
            var30 = new Array(3);
            var30[0] = var31;
            var34 = _closure1_slot24;
            var33 = _closure1_slot6;
            var31 = {};
            var35 = {'position': 'absolute', 'top': null, 'left': null, 'right': 0, 'bottom': 0, 'backgroundColor': 'black'};
            var38 = _closure1_slot15;
            var38 = var38 / var26;
            var35['top'] = var38;
            var38 = 8;
            var40 = var15 + var38;
            var40 = var40 - var41;
            var35['left'] = var40;
            var31['style'] = var35;
            var31 = var34.bind(var4)(var33, var31);
            var30[1] = var31;
            var34 = _closure1_slot24;
            var33 = _closure1_slot31;
            var31 = {};
            var35 = {};
            var35['position'] = var39;
            var39 = _closure1_slot15;
            var39 = var39 / var26;
            var35['top'] = var39;
            var38 = var15 + var38;
            var35['width'] = var38;
            var35['left'] = var24;
            var38 = _closure1_slot15;
            var38 = var38 / var26;
            var35['height'] = var38;
            var31['style'] = var35;
            var35 = 47;
            var35 = var37[var35];
            var35 = var36.bind(var4)(var35);
            var36 = '#000000';
            var37 = var35.bind(var4)(var36);
            var35 = var37.alpha;
            var37 = var35.bind(var37)(var24);
            var35 = var37.hex;
            var37 = var35.bind(var37)();
            var35 = new Array(2);
            var35[0] = var37;
            var35[1] = var36;
            var31['colors'] = var35;
            var35 = {'x': 0, 'y': 0};
            var31['start'] = var35;
            var35 = {'x': 1, 'y': 0};
            var31['end'] = var35;
            var35 = [0.7, 0.84];
            var31['locations'] = var35;
            var35 = 'none';
            var31['pointerEvents'] = var35;
            var31 = var34.bind(var4)(var33, var31);
            var30[2] = var31;
            var27['children'] = var30;
            var27 = var29.bind(var4)(var28, var27);
            var5['maskElement'] = var27;
            var29 = _closure1_slot24;
            var28 = _closure1_slot6;
            var27 = {};
            var31 = var12.youRowFloating;
            var30 = new Array(2);
            var30[0] = var31;
            var31 = {};
            var31['width'] = var23;
            var33 = _closure1_slot15;
            var31['height'] = var33;
            var31['backgroundColor'] = var32;
            var30[1] = var31;
            var27['style'] = var30;
            var27 = var29.bind(var4)(var28, var27);
            var5['children'] = var27;
            var6 = var8.bind(var4)(var7, var5);
case 147:
            var5 = new Array(4);
            var5[0] = var6;
            var8 = _closure1_slot24;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var16];
            var6 = var7.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var16 = {'position': 'absolute', 'top': 0, 'left': null, 'right': 4294967295, 'bottom': 0, 'borderTopRightRadius': null, 'borderTopLeftRadius': 0, 'borderBottomRightRadius': null, 'borderBottomLeftRadius': 0, 'overflow': 'hidden'};
            var16['left'] = var15;
            var24 = 0;
            if(var20) { _fun0030_ip = 148; continue _fun0030 }
case 149:
            var27 = _closure1_slot15;
            var24 = var27 / var26;
case 148:
            var16['borderTopRightRadius'] = var24;
            var24 = _closure1_slot15;
            var24 = var24 / var26;
            var16['borderBottomRightRadius'] = var24;
            var15 = var23 - var15;
            var16['width'] = var15;
            var15 = new Array(1);
            var15[0] = var16;
            var6['style'] = var15;
            var15 = 'none';
            var6['pointerEvents'] = var15;
            var24 = _closure1_slot24;
            var23 = _closure1_slot1;
            var15 = _closure1_slot2;
            var16 = 64;
            var16 = var15[var16];
            var23 = var23.bind(var4)(var16);
            var16 = {'nameplate': null, 'isFocused': true, 'animate': false};
            var16['nameplate'] = var25;
            var16 = var24.bind(var4)(var23, var16);
            var6['children'] = var16;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot24;
            var7 = _closure1_slot0;
            var6 = 62;
            var6 = var15[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.GestureDetector;
            var6 = {};
            var6['gesture'] = var14;
            var16 = _closure1_slot24;
            var15 = _closure1_slot7;
            var14 = {};
            var23 = var12.youPressable;
            var14['style'] = var23;
            var23 = {};
            var24 = 'transparent';
            var23['color'] = var24;
            var14['android_ripple'] = var23;
            var14['onPressIn'] = var22;
            var14['onPressOut'] = var19;
            var14['onPress'] = var18;
            var14['onLongPress'] = var17;
            var17 = _closure1_slot30;
            var14['hitSlop'] = var17;
            var19 = _closure1_slot24;
            var18 = _closure1_slot40;
            var17 = {};
            var17['largeAvatarEnabled'] = var21;
            var17['isQuestVisible'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var6['children'] = var14;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var8 = _closure1_slot25;
            var7 = _closure1_slot6;
            var6 = {};
            var12 = var12.youRowRight;
            var6['style'] = var12;
            var11 = null;
            if(!var9) { _fun0030_ip = 150; continue _fun0030 }
case 151:
            var14 = _closure1_slot24;
            var12 = _closure1_slot42;
            var9 = {};
            var9['hasNameplate'] = var13;
            var11 = var14.bind(var4)(var12, var9);
case 150:
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot24;
            var11 = _closure1_slot44;
            var10 = {};
            var10['hasNameplate'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot48 = var4;
    var4 = {};
    var8 = 'function YouBarTsx11(){const{gradientHeight,drawerWidth}=this.__closure;return{height:gradientHeight,opacity:1,width:drawerWidth};}';
    var4['code'] = var8;
    var _closure1_slot49 = var4;
    var8 = var7.memo;
    var4 = function() {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
            var2 = _closure1_slot32;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var2 = _closure1_slot20;
            var16 = var2.bind(var4)();
            var2 = _closure1_slot14;
            var13 = var16 + var2;
            var _closure2_slot0 = var13;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 48;
            var2 = var10[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var12 = var2.width;
            var _closure2_slot1 = var12;
            var5 = _closure1_slot0;
            var2 = 15;
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
            var11 = 3627940018627.0;
            var2['__workletHash'] = var11;
            var11 = _closure1_slot49;
            var2['__initData'] = var11;
            var12 = var3.bind(var7)(var2);
            var2 = 24;
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
            var2 = 45;
            var3 = var10[var2];
            var7 = var5.bind(var4)(var3);
            var3 = var7.useGradientValue;
            var2 = var10[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.GradientPercentage;
            var2 = var2.END;
            var3 = var3.bind(var7)(var2);
            var2 = 27;
            var2 = var10[var2];
            var7 = var5.bind(var4)(var2);
            var5 = var7.useToken;
            var2 = 14;
            var2 = var10[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.colors;
            var2 = var2.BACKGROUND_BASE_LOWER;
            var5 = var5.bind(var7)(var2);
            var2 = null;
            if(!(var2 != var1)) { _fun0036_ip = 152; continue _fun0036 }
case 153:
            var8 = _closure1_slot18;
            var7 = var1.id;
            var7 = var8[var7];
            if(!(var2 == var7)) { _fun0036_ip = 115; continue _fun0036 }
case 152:
            var8 = var5;
            if(!(var2 != var3)) { _fun0036_ip = 154; continue _fun0036 }
case 155:
            var8 = var3;
            _fun0036_ip = 154; continue _fun0036;
case 115:
            var3 = _closure1_slot18;
            var1 = var1.id;
            var8 = var3[var1];
case 154:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 65;
            var1 = var1[var7];
            var5 = var3.bind(var4)(var1);
            var3 = var5.hex2rgb;
            var1 = 0.97;
            var1 = var3.bind(var5)(var8, var1);
            var5 = var2 != var1;
            var11 = 'transparent';
            var3 = var11;
            if(!var5) { _fun0036_ip = 156; continue _fun0036 }
case 157:
            var3 = var1;
case 156:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var5 = var5.bind(var4)(var1);
            var1 = var5.hex2rgb;
            var15 = 0;
            var1 = var1.bind(var5)(var3, var15);
            var2 = var2 != var1;
            var10 = var3;
            if(!var2) { _fun0036_ip = 158; continue _fun0036 }
case 159:
            var11 = var1;
case 158:
            var3 = _closure1_slot25;
            var2 = _closure1_slot26;
            var1 = {};
            var8 = _closure1_slot24;
            var7 = _closure1_slot6;
            var5 = {};
            var14 = var9.floatingShade;
            var13 = new Array(3);
            var13[0] = var14;
            var13[1] = var12;
            var14 = {};
            var14['height'] = var16;
            var14['opacity'] = var15;
            var13[2] = var14;
            var5['style'] = var13;
            var13 = 'box-only';
            var5['pointerEvents'] = var13;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot24;
            var7 = _closure1_slot31;
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
            var9 = [0, 0.5, 1];
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
    var _closure1_slot50 = var4;
    var4 = var7.memo;
    var2 = function() {
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 24;
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
        var3 = _closure1_slot25;
        var1 = 66;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.ThemeContextProvider;
        var1 = {};
        var1['gradient'] = var5;
        var8 = _closure1_slot24;
        var7 = _closure1_slot50;
        var5 = {};
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot24;
        var7 = _closure1_slot48;
        var6 = {};
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 67;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/YouBar.tsx';
    var4 = var5.bind(var6)(var4);
    var3['ThemedYouBar'] = var2;
    return var1;
})();