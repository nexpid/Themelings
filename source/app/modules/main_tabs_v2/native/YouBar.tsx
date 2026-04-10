// app/modules/main_tabs_v2/native/YouBar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var1 = function Username(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var15 = var1.userId;
            var14 = var1.username;
            var1 = _closure1_slot34;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var3 = _closure1_slot26;
            var2 = _closure1_slot6;
            var1 = {};
            var7 = var5.usernameRow;
            var5 = new Array(1);
            var5[0] = var7;
            var1['style'] = var5;
            var8 = _closure1_slot25;
            var7 = _closure1_slot6;
            var5 = {};
            var9 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 18;
            var10 = var12[var10];
            var11 = var11.bind(var4)(var10);
            var10 = var11.isAndroid;
            var11 = var10.bind(var11)();
            var10 = 0;
            if(!var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = 1;
case 2:
            var9['paddingBottom'] = var10;
            var13 = 1;
            var9['flexShrink'] = var13;
            var5['style'] = var9;
            var12 = _closure1_slot25;
            var11 = _closure1_slot1;
            var9 = _closure1_slot2;
            var10 = 19;
            var10 = var9[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {'userId': null, 'userName': null, 'defaultColor': 'mobile-text-heading-primary', 'variant': 'heading-md/bold', 'lineClamp': 1, 'ellipsizeMode': 'tail', 'maxFontSizeMultiplier': 1.75};
            var10['userId'] = var15;
            var10['userName'] = var14;
            var14 = {};
            var14['flexShrink'] = var13;
            var13 = new Array(1);
            var13[0] = var14;
            var10['style'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var5['children'] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot25;
            var7 = _closure1_slot0;
            var6 = 20;
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
    var _closure1_slot52 = var1;
    var1 = function YouAvatarLarge(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var14 = var2.selectedGuildId;
            var20 = var2.transitionState;
            var _closure2_slot0 = var20;
            var13 = var2.cleanup;
            var _closure2_slot1 = var13;
            var5 = undefined;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var2 = _closure1_slot34;
            var16 = var2.bind(var5)();
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 21;
            var3 = var4[var2];
            var9 = var8.bind(var5)(var3);
            var7 = var9.useStateFromStores;
            var3 = _closure1_slot12;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var7.bind(var9)(var6, var3);
            var2 = var4[var2];
            var7 = var8.bind(var5)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot13;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot13;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var6.bind(var7)(var3, var2);
            var17 = 14;
            var2 = var4[var17];
            var2 = var8.bind(var5)(var2);
            var3 = var2.AVATAR_SIZE_MAP;
            var2 = _closure1_slot29;
            var3 = var3[var2];
            var2 = var4[var17];
            var2 = var8.bind(var5)(var2);
            var6 = var2.AVATAR_SIZE_MAP;
            var2 = _closure1_slot30;
            var2 = var6[var2];
            var12 = var3 / var2;
            var _closure2_slot2 = var12;
            var2 = var4[var17];
            var2 = var8.bind(var5)(var2);
            var3 = var2.AVATAR_SIZE_MAP;
            var2 = _closure1_slot30;
            var3 = var3[var2];
            var2 = var4[var17];
            var2 = var8.bind(var5)(var2);
            var6 = var2.AVATAR_SIZE_MAP;
            var2 = _closure1_slot29;
            var2 = var6[var2];
            var3 = var3 - var2;
            var2 = 2;
            var3 = var3 / var2;
            var _closure2_slot3 = var3;
            var2 = 22;
            var6 = var4[var2];
            var7 = var8.bind(var5)(var6);
            var6 = var7.useSharedValue;
            var21 = 23;
            var4 = var4[var21];
            var4 = var8.bind(var5)(var4);
            var4 = var4.TransitionStates;
            var8 = var4.MOUNTED;
            var4 = 0;
            if(!(var20 === var8)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = 1;
case 4:
            var7 = var6.bind(var7)(var4);
            _closure2_slot4 = var7;
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = var4[var2];
            var8 = var9.bind(var5)(var6);
            var6 = var8.useSharedValue;
            var4 = var4[var21];
            var4 = var9.bind(var5)(var4);
            var4 = var4.TransitionStates;
            var9 = var4.MOUNTED;
            var4 = 1;
            if(!(var20 !== var9)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var12;
case 6:
            var19 = var6.bind(var8)(var4);
            _closure2_slot5 = var19;
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = var4[var2];
            var8 = var9.bind(var5)(var6);
            var6 = var8.useSharedValue;
            var4 = var4[var21];
            var4 = var9.bind(var5)(var4);
            var4 = var4.TransitionStates;
            var4 = var4.MOUNTED;
            if(!(var20 !== var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = -var3;
            _fun0002_ip = 10; continue _fun0002;
case 8:
            var9 = _closure1_slot17;
            var4 = -var9;
case 10:
            var18 = var6.bind(var8)(var4);
            _closure2_slot6 = var18;
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = var4[var2];
            var8 = var9.bind(var5)(var6);
            var6 = var8.useSharedValue;
            var4 = var4[var21];
            var4 = var9.bind(var5)(var4);
            var4 = var4.TransitionStates;
            var4 = var4.MOUNTED;
            if(!(var20 !== var4)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var4 = -var3;
            _fun0002_ip = 13; continue _fun0002;
case 11:
            var9 = _closure1_slot17;
            var21 = -var9;
            var22 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var17];
            var9 = var22.bind(var5)(var9);
            var22 = var9.AVATAR_SIZE_MAP;
            var9 = _closure1_slot30;
            var22 = var22[var9];
            var9 = _closure1_slot16;
            var9 = var22 - var9;
            var4 = var21 - var9;
case 13:
            var8 = var6.bind(var8)(var4);
            _closure2_slot7 = var8;
            var9 = _closure1_slot5;
            var6 = var9.useEffect;
            var4 = new Array(8);
            var4[0] = var20;
            var4[1] = var7;
            var4[2] = var13;
            var4[3] = var12;
            var4[4] = var3;
            var4[5] = var18;
            var4[6] = var8;
            var4[7] = var19;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 23;
                    var4 = var1[var7];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.ENTERED;
                    if(!(var5 !== var4)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.MOUNTED;
                    if(!(var5 !== var4)) { _fun0003_ip = 14; continue _fun0003 }
case 16:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.YEETED;
                    if(!(var5 === var4)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var9 = _closure2_slot4;
                    var6 = var9.set;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 24;
                    var5 = var8[var4];
                    var14 = var7.bind(var1)(var5);
                    var13 = var14.withSpring;
                    var17 = _closure1_slot35;
                    var11 = function t() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 22;
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
                    var10 = 22;
                    var10 = var8[var10];
                    var10 = var7.bind(var1)(var10);
                    var10 = var10.runOnJS;
                    var5['runOnJS'] = var10;
                    var10 = _closure2_slot1;
                    var5['cleanup'] = var10;
                    var11['__closure'] = var5;
                    var5 = 4999427315477.0;
                    var11['__workletHash'] = var5;
                    var5 = _closure1_slot36;
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
                    var5 = _closure1_slot35;
                    var5 = var11.bind(var12)(var10, var5);
                    var5 = var6.bind(var9)(var5);
                    var10 = _closure2_slot6;
                    var6 = var10.set;
                    var5 = var8[var4];
                    var12 = var7.bind(var1)(var5);
                    var11 = var12.withSpring;
                    var5 = _closure2_slot3;
                    var9 = -var5;
                    var5 = _closure1_slot35;
                    var5 = var11.bind(var12)(var9, var5);
                    var5 = var6.bind(var10)(var5);
                    var6 = _closure2_slot7;
                    var5 = var6.set;
                    var4 = var8[var4];
                    var8 = var7.bind(var1)(var4);
                    var7 = var8.withSpring;
                    var4 = _closure1_slot35;
                    var4 = var7.bind(var8)(var9, var4);
                    var4 = var5.bind(var6)(var4);
                    _fun0003_ip = 17; continue _fun0003;
case 14:
                    var7 = _closure2_slot4;
                    var6 = var7.set;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 24;
                    var4 = var10[var5];
                    var11 = var9.bind(var1)(var4);
                    var8 = var11.withSpring;
                    var4 = _closure1_slot35;
                    var12 = 1;
                    var4 = var8.bind(var11)(var12, var4);
                    var4 = var6.bind(var7)(var4);
                    var7 = _closure2_slot5;
                    var6 = var7.set;
                    var4 = var10[var5];
                    var11 = var9.bind(var1)(var4);
                    var8 = var11.withSpring;
                    var4 = _closure1_slot35;
                    var4 = var8.bind(var11)(var12, var4);
                    var4 = var6.bind(var7)(var4);
                    var7 = _closure2_slot6;
                    var6 = var7.set;
                    var4 = var10[var5];
                    var12 = var9.bind(var1)(var4);
                    var11 = var12.withSpring;
                    var4 = _closure1_slot17;
                    var8 = -var4;
                    var4 = _closure1_slot35;
                    var4 = var11.bind(var12)(var8, var4);
                    var4 = var6.bind(var7)(var4);
                    var4 = _closure2_slot7;
                    var3 = var4.set;
                    var5 = var10[var5];
                    var7 = var9.bind(var1)(var5);
                    var6 = var7.withSpring;
                    var5 = _closure1_slot17;
                    var8 = -var5;
                    var5 = 14;
                    var5 = var10[var5];
                    var5 = var9.bind(var1)(var5);
                    var9 = var5.AVATAR_SIZE_MAP;
                    var5 = _closure1_slot30;
                    var9 = var9[var5];
                    var5 = _closure1_slot16;
                    var5 = var9 - var5;
                    var5 = var8 - var5;
                    var2 = _closure1_slot35;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = var3.bind(var4)(var2);
case 17:
                    return var1;
                }
            };
            var3 = var6.bind(var9)(var3, var4);
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 25;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var6.useAvatarDecoration;
            var13 = null;
            var9 = var13 != var14;
            var3 = undefined;
            if(!var9) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var3 = var14;
case 19:
            var12 = var4.bind(var6)(var15, var3);
            var9 = _closure1_slot30;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var2];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useAnimatedStyle;
            var1 = function y() {
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
                var4 = _closure2_slot7;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var1['top'] = var3;
                var3 = _closure2_slot4;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['opacity'] = var2;
                return var1;
            };
            var6 = {};
            var6['scale'] = var19;
            var6['left'] = var18;
            var6['top'] = var8;
            var6['opacity'] = var7;
            var1['__closure'] = var6;
            var6 = 7363023070833.0;
            var1['__workletHash'] = var6;
            var6 = _closure1_slot37;
            var1['__initData'] = var6;
            var18 = var3.bind(var4)(var1);
            var3 = var13 == var15;
            var1 = null;
            if(var3) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var4 = _closure1_slot25;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var7 = var16.avatarShadow;
            var8 = new Array(3);
            var8[0] = var7;
            var19 = {};
            var7 = 'absolute';
            var19['position'] = var7;
            var7 = _closure1_slot0;
            var20 = var6[var17];
            var20 = var7.bind(var5)(var20);
            var20 = var20.AVATAR_SIZE_MAP;
            var20 = var20[var9];
            var19['width'] = var20;
            var20 = var6[var17];
            var20 = var7.bind(var5)(var20);
            var20 = var20.AVATAR_SIZE_MAP;
            var20 = var20[var9];
            var19['height'] = var20;
            var8[1] = var19;
            var8[2] = var18;
            var2['style'] = var8;
            var8 = _closure1_slot25;
            var6 = var6[var17];
            var6 = var7.bind(var5)(var6);
            var7 = var6.Avatar;
            var6 = {};
            var16 = var16.avatarContainer;
            var6['avatarStyle'] = var16;
            var6['user'] = var15;
            var15 = var13 != var14;
            var13 = undefined;
            if(!var15) { _fun0002_ip = 23; continue _fun0002 }
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
            var12 = _closure1_slot23;
            var12 = var12.UNKNOWN;
            if(!(var10 === var12)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var11 = _closure1_slot23;
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
    var _closure1_slot53 = var1;
    var1 = function YouAvatar(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
            var1 = 21;
            var6 = var4[var1];
            var10 = var2.bind(var5)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot12;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var9.bind(var10)(var7, var6);
            var1 = var4[var1];
            var9 = var2.bind(var5)(var1);
            var7 = var9.useStateFromStores;
            var1 = _closure1_slot13;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var2 = _closure1_slot13;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var7.bind(var9)(var6, var1);
            var1 = 25;
            var1 = var4[var1];
            var6 = var2.bind(var5)(var1);
            var4 = var6.useAvatarDecoration;
            var1 = null;
            var7 = var1 != var13;
            var2 = undefined;
            if(!var7) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var2 = var13;
case 27:
            var12 = var4.bind(var6)(var9, var2);
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 22;
            var4 = var16[var2];
            var7 = var15.bind(var5)(var4);
            var6 = var7.useSharedValue;
            var4 = 23;
            var4 = var16[var4];
            var4 = var15.bind(var5)(var4);
            var4 = var4.TransitionStates;
            var15 = var4.MOUNTED;
            var4 = 0;
            if(!(var14 === var15)) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var4 = 1;
case 29:
            var15 = var6.bind(var7)(var4);
            _closure2_slot2 = var15;
            var7 = _closure1_slot5;
            var6 = var7.useEffect;
            var4 = new Array(3);
            var4[0] = var14;
            var4[1] = var15;
            var4[2] = var8;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 23;
                    var4 = var1[var7];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.ENTERED;
                    if(!(var5 !== var4)) { _fun0005_ip = 31; continue _fun0005 }
case 15:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.MOUNTED;
                    if(!(var5 !== var4)) { _fun0005_ip = 31; continue _fun0005 }
case 16:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.YEETED;
                    if(!(var5 === var4)) { _fun0005_ip = 32; continue _fun0005 }
case 18:
                    var6 = _closure2_slot2;
                    var5 = var6.set;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 24;
                    var4 = var13[var4];
                    var11 = var12.bind(var1)(var4);
                    var10 = var11.withSpring;
                    var16 = _closure1_slot35;
                    var8 = function t() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 22;
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
                    var7 = 22;
                    var7 = var13[var7];
                    var7 = var12.bind(var1)(var7);
                    var7 = var7.runOnJS;
                    var4['runOnJS'] = var7;
                    var7 = _closure2_slot1;
                    var4['cleanup'] = var7;
                    var8['__closure'] = var4;
                    var4 = 7499536080407.0;
                    var8['__workletHash'] = var4;
                    var4 = _closure1_slot38;
                    var8['__initData'] = var4;
                    var17 = 0;
                    var15 = 'respect-motion-settings';
                    var18 = var11;
                    var14 = var8;
                    var4 = var18[var10](var17, var16, var15, var14, var13);
                    var4 = var5.bind(var6)(var4);
                    _fun0005_ip = 32; continue _fun0005;
case 31:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 24;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.withSpring;
                    var5 = _closure1_slot35;
                    var2 = 1;
                    var2 = var6.bind(var7)(var2, var5);
                    var2 = var3.bind(var4)(var2);
case 32:
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var3, var4);
            if(!(var1 != var9)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 14;
            var3 = var14[var6];
            var3 = var7.bind(var5)(var3);
            var4 = var3.AVATAR_SIZE_MAP;
            var3 = _closure1_slot29;
            var4 = var4[var3];
            var3 = var14[var6];
            var3 = var7.bind(var5)(var3);
            var8 = var3.AVATAR_SIZE_MAP;
            var3 = _closure1_slot28;
            var3 = var8[var3];
            var4 = var4 - var3;
            var3 = 2;
            var16 = var4 / var3;
            var4 = _closure1_slot25;
            var3 = _closure1_slot1;
            var2 = var14[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var8 = {};
            var17 = 'absolute';
            var8['position'] = var17;
            var16 = -var16;
            var8['top'] = var16;
            var8['left'] = var16;
            var8['opacity'] = var15;
            var2['style'] = var8;
            var8 = _closure1_slot25;
            var6 = var14[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.Avatar;
            var6 = {};
            var6['user'] = var9;
            var14 = var1 != var13;
            var9 = undefined;
            if(!var14) { _fun0004_ip = 9; continue _fun0004 }
case 35:
            var9 = var13;
case 9:
            var6['guildId'] = var9;
            var9 = _closure1_slot29;
            var6['size'] = var9;
            var9 = false;
            var6['animate'] = var9;
            var9 = true;
            var6['needsOffscreenAlphaCompositing'] = var9;
            var6['avatarDecoration'] = var12;
            var12 = _closure1_slot23;
            var12 = var12.UNKNOWN;
            if(!(var10 === var12)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var11 = _closure1_slot23;
            var10 = var11.OFFLINE;
case 36:
            var6['status'] = var10;
            var6['autoStatusCutout'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 33:
            return var1;
        }
    };
    var _closure1_slot54 = var1;
    var1 = function YouAvatarAnimated(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var1 = var1.isLargeAvatar;
            var _closure2_slot0 = var1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 21;
            var2 = var4[var2];
            var5 = undefined;
            var7 = var3.bind(var5)(var2);
            var4 = var7.useStateFromStores;
            var2 = _closure1_slot13;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot13;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var4.bind(var7)(var3, var2);
            var8 = _closure1_slot5;
            var7 = var8.useCallback;
            var4 = function(arg1, arg2, arg3, arg4) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = _closure1_slot25;
                    var2 = arg2;
                    if(var2) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                    var4 = _closure1_slot54;
                    _fun0007_ip = 40; continue _fun0007;
case 38:
                    var4 = _closure1_slot53;
case 40:
                    var3 = {};
                    var2 = undefined;
                    var3['selectedGuildId'] = var2;
                    var1 = arg3;
                    var3['transitionState'] = var1;
                    var1 = arg4;
                    var3['cleanup'] = var1;
                    var1 = arg1;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var3 = new Array(0);
            var9 = var7.bind(var8)(var4, var3);
            var7 = _closure1_slot5;
            var4 = var7.useMemo;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure2_slot0;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var11 = var4.bind(var7)(var1, var3);
            var1 = null;
            var2 = var1 == var2;
            if(var2) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var4 = _closure1_slot25;
            var3 = _closure1_slot6;
            var2 = {};
            var13 = {};
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 14;
            var14 = var12[var8];
            var14 = var7.bind(var5)(var14);
            var15 = var14.AVATAR_SIZE_MAP;
            var14 = _closure1_slot28;
            var14 = var15[var14];
            var13['height'] = var14;
            var8 = var12[var8];
            var8 = var7.bind(var5)(var8);
            var14 = var8.AVATAR_SIZE_MAP;
            var8 = _closure1_slot28;
            var8 = var14[var8];
            var13['width'] = var8;
            var8 = 'relative';
            var13['position'] = var8;
            var8 = new Array(1);
            var8[0] = var13;
            var2['style'] = var8;
            var8 = _closure1_slot25;
            var6 = 23;
            var6 = var12[var6];
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
case 41:
            return var1;
        }
    };
    var _closure1_slot55 = var1;
    var1 = function DefaultAvatar() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = _closure1_slot34;
            var4 = undefined;
            var16 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 26;
            var3 = var1[var3];
            var6 = var2.bind(var4)(var3);
            var5 = var6.useToken;
            var7 = _closure1_slot1;
            var3 = 15;
            var3 = var1[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_SURFACE_HIGHEST;
            var18 = var5.bind(var6)(var3);
            var11 = 14;
            var1 = var1[var11];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getStatusSize;
            var1 = _closure1_slot28;
            var1 = var2.bind(var3)(var1);
            var2 = null;
            var2 = var2 != var1;
            var10 = 0;
            if(!var2) { _fun0008_ip = 43; continue _fun0008 }
case 44:
            var10 = var1;
case 43:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = var6[var11];
            var1 = var7.bind(var4)(var1);
            var2 = var1.AVATAR_SIZE_MAP;
            var1 = _closure1_slot28;
            var20 = var2[var1];
            var2 = 2;
            var3 = var10 / var2;
            var1 = var6[var11];
            var1 = var7.bind(var4)(var1);
            var1 = var1.STATUS_PADDING;
            var1 = var3 + var1;
            var5 = var20 - var1;
            var3 = 4;
            var3 = var10 / var3;
            var3 = var3 * var2;
            var3 = var5 - var3;
            var14 = {};
            var5 = 17;
            var8 = var6[var5];
            var8 = var7.bind(var4)(var8);
            var8 = var8.CutoutShape;
            var8 = var8.Circle;
            var14['shape'] = var8;
            var14['x'] = var3;
            var14['y'] = var3;
            var1 = var2 * var1;
            var14['size'] = var1;
            var3 = _closure1_slot26;
            var2 = _closure1_slot6;
            var1 = {};
            var8 = {};
            var12 = var6[var11];
            var12 = var7.bind(var4)(var12);
            var13 = var12.AVATAR_SIZE_MAP;
            var12 = _closure1_slot28;
            var12 = var13[var12];
            var8['height'] = var12;
            var12 = var6[var11];
            var12 = var7.bind(var4)(var12);
            var13 = var12.AVATAR_SIZE_MAP;
            var12 = _closure1_slot28;
            var12 = var13[var12];
            var8['width'] = var12;
            var12 = 'relative';
            var8['position'] = var12;
            var1['style'] = var8;
            var12 = _closure1_slot25;
            var8 = _closure1_slot1;
            var5 = var6[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var13 = new Array(1);
            var13[0] = var14;
            var5['cutouts'] = var13;
            var15 = _closure1_slot25;
            var14 = _closure1_slot6;
            var13 = {};
            var17 = var16.placeholderAvatar;
            var16 = new Array(2);
            var16[0] = var17;
            var17 = {};
            var17['width'] = var20;
            var17['height'] = var20;
            var17['backgroundColor'] = var18;
            var16[1] = var17;
            var13['style'] = var16;
            var18 = _closure1_slot25;
            var16 = 27;
            var16 = var6[var16];
            var16 = var7.bind(var4)(var16);
            var17 = var16.ReactionIcon;
            var16 = {'size': 'custom', 'style': null, 'color': 'background-mod-strong'};
            var19 = {};
            var19['width'] = var20;
            var19['height'] = var20;
            var16['style'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var5['children'] = var13;
            var8 = var12.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = _closure1_slot25;
            var6 = var6[var11];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Status;
            var6 = {'size': null, 'status': null, 'isMobileOnline': false, 'isVROnline': false, 'streaming': false};
            var6['size'] = var10;
            var9 = _closure1_slot23;
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
    var _closure1_slot56 = var1;
    var1 = function DefaultAvatarLarge() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = _closure1_slot34;
            var4 = undefined;
            var19 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 26;
            var3 = var1[var3];
            var6 = var2.bind(var4)(var3);
            var5 = var6.useToken;
            var7 = _closure1_slot1;
            var3 = 15;
            var3 = var1[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_SURFACE_HIGHEST;
            var21 = var5.bind(var6)(var3);
            var14 = 14;
            var1 = var1[var14];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getStatusSize;
            var1 = _closure1_slot30;
            var1 = var2.bind(var3)(var1);
            var2 = null;
            var2 = var2 != var1;
            var13 = 0;
            if(!var2) { _fun0009_ip = 43; continue _fun0009 }
case 44:
            var13 = var1;
case 43:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = var9[var14];
            var1 = var10.bind(var4)(var1);
            var2 = var1.AVATAR_SIZE_MAP;
            var1 = _closure1_slot30;
            var22 = var2[var1];
            var2 = 2;
            var3 = var13 / var2;
            var1 = var9[var14];
            var1 = var10.bind(var4)(var1);
            var1 = var1.STATUS_PADDING;
            var1 = var3 + var1;
            var5 = var22 - var1;
            var3 = 4;
            var3 = var13 / var3;
            var3 = var3 * var2;
            var3 = var5 - var3;
            var17 = {};
            var8 = 17;
            var5 = var9[var8];
            var5 = var10.bind(var4)(var5);
            var5 = var5.CutoutShape;
            var5 = var5.Circle;
            var17['shape'] = var5;
            var17['x'] = var3;
            var17['y'] = var3;
            var1 = var2 * var1;
            var17['size'] = var1;
            var3 = _closure1_slot25;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = {};
            var6 = var9[var14];
            var6 = var10.bind(var4)(var6);
            var7 = var6.AVATAR_SIZE_MAP;
            var6 = _closure1_slot28;
            var6 = var7[var6];
            var5['height'] = var6;
            var6 = var9[var14];
            var6 = var10.bind(var4)(var6);
            var7 = var6.AVATAR_SIZE_MAP;
            var6 = _closure1_slot28;
            var6 = var7[var6];
            var5['width'] = var6;
            var6 = 'relative';
            var5['position'] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot26;
            var6 = _closure1_slot6;
            var5 = {};
            var15 = var19.avatarShadow;
            var11 = new Array(2);
            var11[0] = var15;
            var15 = {};
            var16 = 'absolute';
            var15['position'] = var16;
            var15['width'] = var22;
            var15['height'] = var22;
            var16 = _closure1_slot17;
            var18 = -var16;
            var16 = var9[var14];
            var16 = var10.bind(var4)(var16);
            var20 = var16.AVATAR_SIZE_MAP;
            var16 = _closure1_slot30;
            var20 = var20[var16];
            var16 = _closure1_slot16;
            var16 = var20 - var16;
            var16 = var18 - var16;
            var15['top'] = var16;
            var16 = _closure1_slot17;
            var16 = -var16;
            var15['left'] = var16;
            var11[1] = var15;
            var5['style'] = var11;
            var15 = _closure1_slot25;
            var11 = _closure1_slot1;
            var8 = var9[var8];
            var11 = var11.bind(var4)(var8);
            var8 = {};
            var16 = new Array(1);
            var16[0] = var17;
            var8['cutouts'] = var16;
            var18 = _closure1_slot25;
            var17 = _closure1_slot6;
            var16 = {};
            var20 = var19.placeholderAvatar;
            var19 = new Array(2);
            var19[0] = var20;
            var20 = {};
            var20['width'] = var22;
            var20['height'] = var22;
            var20['backgroundColor'] = var21;
            var19[1] = var20;
            var16['style'] = var19;
            var21 = _closure1_slot25;
            var19 = 27;
            var19 = var9[var19];
            var19 = var10.bind(var4)(var19);
            var20 = var19.ReactionIcon;
            var19 = {'size': 'custom', 'style': null, 'color': 'background-mod-strong'};
            var22 = {};
            var23 = var9[var14];
            var23 = var10.bind(var4)(var23);
            var24 = var23.AVATAR_SIZE_MAP;
            var23 = _closure1_slot28;
            var23 = var24[var23];
            var22['width'] = var23;
            var23 = var9[var14];
            var23 = var10.bind(var4)(var23);
            var24 = var23.AVATAR_SIZE_MAP;
            var23 = _closure1_slot28;
            var23 = var24[var23];
            var22['height'] = var23;
            var19['style'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var16['children'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var8['children'] = var16;
            var11 = var15.bind(var4)(var11, var8);
            var8 = new Array(2);
            var8[0] = var11;
            var11 = _closure1_slot25;
            var9 = var9[var14];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Status;
            var9 = {'size': null, 'status': null, 'isMobileOnline': false, 'isVROnline': false, 'streaming': false};
            var9['size'] = var13;
            var12 = _closure1_slot23;
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
    var _closure1_slot57 = var1;
    var1 = function YouName(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var8 = var1.user;
            var _closure2_slot0 = var8;
            var5 = var1.defaultUsername;
            var1 = _closure1_slot34;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 28;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var9 = var1.YouBarExperiment;
            var3 = var9.useConfig;
            var1 = {};
            var10 = 'YouBar';
            var1['location'] = var10;
            var1 = var3.bind(var9)(var1);
            var1 = var1.animateBetweenServers;
            var3 = 21;
            var9 = var7[var3];
            var12 = var6.bind(var4)(var9);
            var11 = var12.useStateFromStores;
            var9 = _closure1_slot12;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var16 = var11.bind(var12)(var10, var9);
            var9 = var7[var3];
            var12 = var6.bind(var4)(var9);
            var11 = var12.useStateFromStores;
            var9 = _closure1_slot11;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var11.bind(var12)(var10, var9);
            var _closure2_slot1 = var9;
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.useStateFromStores;
            var9 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var9;
            var2 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0011_ip = 45; continue _fun0011 }
case 46:
                    var3 = _closure2_slot0;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0011_ip = 45; continue _fun0011 }
case 47:
                    var4 = _closure1_slot10;
                    var3 = var4.getSelfMember;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 45:
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var3, var2);
            var9 = var5;
            if(!var1) { _fun0010_ip = 48; continue _fun0010 }
case 49:
            var1 = null;
            var6 = var1 == var2;
            var3 = undefined;
            if(var6) { _fun0010_ip = 50; continue _fun0010 }
case 51:
            var3 = var2.nick;
case 50:
            var9 = var5;
            if(!(var1 != var3)) { _fun0010_ip = 48; continue _fun0010 }
case 52:
            var3 = var1 == var2;
            var1 = undefined;
            if(var3) { _fun0010_ip = 53; continue _fun0010 }
case 54:
            var1 = var2.nick;
case 53:
            var9 = var1;
case 48:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 29;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useCustomStatusActivity;
            var18 = var1.bind(var2)();
            var3 = _closure1_slot26;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var13.userText;
            var1['style'] = var5;
            var7 = _closure1_slot25;
            var6 = _closure1_slot52;
            var5 = {};
            var5['username'] = var9;
            var8 = var8.id;
            var5['userId'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot26;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var13.statusRow;
            var6['style'] = var9;
            var15 = null;
            var10 = var15 == var18;
            var9 = undefined;
            if(var10) { _fun0010_ip = 55; continue _fun0010 }
case 7:
            var9 = var18.emoji;
case 55:
            var9 = var15 != var9;
            var10 = null;
            if(!var9) { _fun0010_ip = 56; continue _fun0010 }
case 57:
            var12 = _closure1_slot25;
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var9 = 30;
            var9 = var17[var9];
            var11 = var11.bind(var4)(var9);
            var9 = {};
            var17 = 16;
            var9['size'] = var17;
            var13 = var13.statusEmoji;
            var9['style'] = var13;
            var13 = var18.emoji;
            var9['emoji'] = var13;
            var10 = var12.bind(var4)(var11, var9);
case 56:
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot25;
            var20 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 31;
            var10 = var13[var10];
            var10 = var20.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-xs/medium', 'color': 'text-muted', 'lineClamp': 1, 'ellipsizeMode': 'tail', 'accessibilityHint': null, 'maxFontSizeMultiplier': 1.75};
            var19 = 1;
            var17 = 32;
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
            if(var19) { _fun0010_ip = 58; continue _fun0010 }
case 59:
            var13 = var18.state;
case 58:
            if(!(var15 == var13)) { _fun0010_ip = 60; continue _fun0010 }
case 61:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var17];
            var15 = var15.bind(var4)(var14);
            var14 = var15.humanizeStatus;
            var13 = var14.bind(var15)(var16);
case 60:
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
    var _closure1_slot58 = var1;
    var4 = function useYouBarGradientBackground() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 21;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var2);
            var4 = var5.useStateFromStores;
            var1 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot8;
                var1 = var1.gradientPreset;
                return var1;
            };
            var2 = var4.bind(var5)(var2, var1);
            var1 = null;
            var4 = var1 != var2;
            if(!var4) { _fun0012_ip = 62; continue _fun0012 }
case 63:
            var3 = _closure1_slot19;
            var2 = var2.id;
            var1 = var3[var2];
case 62:
            return var1;
        }
    };
    var _closure1_slot59 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var13.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var18 = 1;
    var5 = var7[var18];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var17 = 2;
    var8 = var7[var17];
    var5 = metroImportAll;
    var8 = var5.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.View;
    var _closure1_slot6 = var9;
    var5 = var5.Pressable;
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var10 = 8;
    var5 = var7[var10];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot13 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.useYouBarBottomMargin;
    var _closure1_slot14 = var9;
    var9 = var5.YOU_BAR_GRADIENT_EXTRA_HEIGHT;
    var _closure1_slot15 = var9;
    var16 = var5.YOU_BAR_HEIGHT;
    var _closure1_slot16 = var16;
    var11 = var5.YOU_BAR_PADDING;
    var _closure1_slot17 = var11;
    var9 = var5.CUSTOM_THEME_COLORS;
    var _closure1_slot18 = var9;
    var9 = var5.CUSTOM_THEME_BACKGROUND_COLORS;
    var _closure1_slot19 = var9;
    var9 = var5.useYouBarHorizontalMargin;
    var _closure1_slot20 = var9;
    var5 = var5.useYouBarTotalHeight;
    var _closure1_slot21 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.ME;
    var _closure1_slot22 = var9;
    var5 = var5.StatusTypes;
    var _closure1_slot23 = var5;
    var15 = 12;
    var5 = var7[var15];
    var5 = var6.bind(var1)(var5);
    var5 = var5.GUILD_LIST_WIDTH;
    var _closure1_slot24 = var5;
    var5 = 13;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot25 = var9;
    var9 = var5.jsxs;
    var _closure1_slot26 = var9;
    var5 = var5.Fragment;
    var _closure1_slot27 = var5;
    var9 = 14;
    var5 = var7[var9];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AvatarSizes;
    var12 = var5.REFRESH_MEDIUM_32;
    var _closure1_slot28 = var12;
    var5 = var7[var9];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AvatarSizes;
    var14 = var5.NORMAL;
    var _closure1_slot29 = var14;
    var5 = var7[var9];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AvatarSizes;
    var19 = var5.YOUBAR_60;
    var _closure1_slot30 = var19;
    var5 = var7[var9];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AVATAR_SIZE_MAP;
    var5 = var5[var19];
    var15 = var5 + var15;
    var5 = var7[var9];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AVATAR_SIZE_MAP;
    var5 = var5[var12];
    var5 = var5 + var11;
    var5 = var15 - var5;
    var _closure1_slot31 = var5;
    var5 = var7[var9];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AVATAR_SIZE_MAP;
    var5 = var5[var14];
    var5 = var5 + var10;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var9 = var9.AVATAR_SIZE_MAP;
    var9 = var9[var12];
    var9 = var9 + var11;
    var5 = var5 + var10;
    var5 = var5 - var9;
    var _closure1_slot32 = var5;
    var5 = {};
    var12 = 15;
    var9 = var7[var12];
    var9 = var13.bind(var1)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var5['top'] = var9;
    var9 = var7[var12];
    var9 = var13.bind(var1)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var5['bottom'] = var9;
    var9 = var7[var12];
    var9 = var13.bind(var1)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var5['left'] = var9;
    var9 = var7[var12];
    var9 = var13.bind(var1)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var5['right'] = var9;
    var _closure1_slot33 = var5;
    var14 = 16;
    var5 = var7[var14];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var11 = {'position': 'absolute', 'left': 0, 'right': 0, 'bottom': 0, 'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': 'transparent'};
    var15 = 'row';
    var19 = var7[var12];
    var19 = var13.bind(var1)(var19);
    var19 = var19.shadows;
    var21 = var19.SHADOW_TOP_HIGH;
    var22 = var11;
    var19 = copyDataProperties(var22, var21);
    var5['youRow'] = var11;
    var11 = {};
    var11['borderWidth'] = var18;
    var19 = var7[var12];
    var19 = var13.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.BORDER_MUTED;
    var11['borderColor'] = var19;
    var19 = var16 / var17;
    var11['borderRadius'] = var19;
    var5['youRowFloating'] = var11;
    var11 = {'flexDirection': 'row', 'gap': 8};
    var5['youRowRight'] = var11;
    var11 = {};
    var11['flex'] = var18;
    var18 = var7[var12];
    var18 = var13.bind(var1)(var18);
    var18 = var18.spacing;
    var18 = var18.PX_12;
    var11['marginRight'] = var18;
    var18 = var16 / var17;
    var11['borderRadius'] = var18;
    var5['youPressable'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center'};
    var16 = var16 / var17;
    var11['borderRadius'] = var16;
    var5['youButton'] = var11;
    var11 = {'flexDirection': 'column', 'justifyContent': 'center', 'height': '100%', 'gap': 1};
    var5['userText'] = var11;
    var11 = {};
    var11['flexDirection'] = var15;
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var11['gap'] = var15;
    var5['statusRow'] = var11;
    var11 = {'width': 16, 'height': 16};
    var5['statusEmoji'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center', 'overflow': 'visible', 'gap': 2};
    var5['usernameRow'] = var11;
    var11 = {};
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOD_MUTED;
    var11['backgroundColor'] = var15;
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var11['borderRadius'] = var15;
    var11['height'] = var14;
    var14 = 80;
    var11['width'] = var14;
    var5['placeholder'] = var11;
    var11 = {'position': 'relative', 'borderRadius': null, 'overflow': 'hidden'};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var11['borderRadius'] = var14;
    var5['buttonContainer'] = var11;
    var11 = {'width': 18, 'height': 18};
    var5['largeButtonIcon'] = var11;
    var11 = {};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BRAND;
    var11['backgroundColor'] = var14;
    var5['icymiBadge'] = var11;
    var11 = {'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center'};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var11['borderRadius'] = var14;
    var5['placeholderAvatar'] = var11;
    var11 = {};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGHEST;
    var11['backgroundColor'] = var14;
    var5['avatarContainer'] = var11;
    var11 = {};
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.shadows;
    var21 = var12.SHADOW_MEDIUM;
    var22 = var11;
    var12 = copyDataProperties(var22, var21);
    var5['avatarShadow'] = var11;
    var11 = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0};
    var5['floatingShade'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot34 = var5;
    var5 = {'damping': 20, 'stiffness': 300, 'mass': 1.5, 'overshootClamping': true, 'restSpeedThreshold': 0.001, 'restDisplacementThreshold': 0.001};
    var _closure1_slot35 = var5;
    var5 = {};
    var9 = 'function YouBarTsx1(){const{runOnJS,cleanup}=this.__closure;runOnJS(cleanup)();}';
    var5['code'] = var9;
    var _closure1_slot36 = var5;
    var5 = {};
    var9 = 'function YouBarTsx2(){const{scale,left,top,opacity}=this.__closure;return{transform:[{scale:scale.get()}],left:left.get(),top:top.get(),opacity:opacity.get()};}';
    var5['code'] = var9;
    var _closure1_slot37 = var5;
    var5 = {};
    var9 = 'function YouBarTsx3(){const{runOnJS,cleanup}=this.__closure;runOnJS(cleanup)();}';
    var5['code'] = var9;
    var _closure1_slot38 = var5;
    var5 = {};
    var9 = 'function YouBarTsx4(){const{nameMargin}=this.__closure;return{marginLeft:nameMargin.get()};}';
    var5['code'] = var9;
    var _closure1_slot39 = var5;
    var9 = var8.memo;
    var5 = function(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = arg1;
            var6 = var2.largeAvatarEnabled;
            var2 = var2.isQuestRendered;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var3 = _closure1_slot34;
            var13 = var3.bind(var4)();
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 21;
            var3 = var7[var3];
            var8 = var5.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot13;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var2 = _closure1_slot13;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var18 = var7.bind(var8)(var5, var3);
            if(!var6) { _fun0013_ip = 64; continue _fun0013 }
case 16:
            var6 = !var2;
case 64:
            _closure2_slot0 = var6;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var12 = 22;
            var2 = var2[var12];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useSharedValue;
            if(var6) { _fun0013_ip = 65; continue _fun0013 }
case 66:
            var2 = _closure1_slot32;
            _fun0013_ip = 67; continue _fun0013;
case 65:
            var2 = _closure1_slot31;
case 67:
            var8 = var3.bind(var5)(var2);
            _closure2_slot1 = var8;
            var7 = _closure1_slot5;
            var5 = var7.useEffect;
            var3 = new Array(2);
            var3[0] = var6;
            var3[1] = var8;
            var2 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = var4.set;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 24;
                    var6 = var6[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var6);
                    var6 = var7.withSpring;
                    var5 = _closure2_slot0;
                    if(var5) { _fun0014_ip = 68; continue _fun0014 }
case 69:
                    var5 = _closure1_slot32;
                    _fun0014_ip = 70; continue _fun0014;
case 68:
                    var5 = _closure1_slot31;
case 70:
                    var2 = _closure1_slot35;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = var5.bind(var7)(var2, var3);
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = var3[var12];
            var5 = var5.bind(var4)(var2);
            var2 = var5.useAnimatedStyle;
            var1 = function h() {
                var1 = {};
                var3 = _closure2_slot1;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['marginLeft'] = var2;
                return var1;
            };
            var7 = {};
            var7['nameMargin'] = var8;
            var1['__closure'] = var7;
            var7 = 8709512840022.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot39;
            var1['__initData'] = var7;
            var11 = var2.bind(var5)(var1);
            var2 = _closure1_slot1;
            var1 = 32;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useName;
            var17 = var1.bind(var2)(var18);
            var3 = _closure1_slot26;
            var2 = _closure1_slot6;
            var1 = null;
            if(!(var1 != var18)) { _fun0013_ip = 71; continue _fun0013 }
case 72:
            if(!(var1 != var17)) { _fun0013_ip = 71; continue _fun0013 }
case 73:
            var1 = {};
            var5 = var13.youButton;
            var1['style'] = var5;
            var8 = _closure1_slot25;
            var7 = _closure1_slot55;
            var5 = {};
            var5['isLargeAvatar'] = var6;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var9 = _closure1_slot25;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
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
            var16 = _closure1_slot25;
            var15 = _closure1_slot58;
            var14 = {};
            var14['user'] = var18;
            var14['defaultUsername'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var7['children'] = var14;
            var7 = var9.bind(var4)(var8, var7);
            var5[1] = var7;
            var1['children'] = var5;
            _fun0013_ip = 74; continue _fun0013;
case 71:
            var5 = {};
            var8 = var13.youButton;
            var7 = new Array(1);
            var7[0] = var8;
            var5['style'] = var7;
            var8 = _closure1_slot25;
            if(var6) { _fun0013_ip = 36; continue _fun0013 }
case 75:
            var7 = _closure1_slot56;
            _fun0013_ip = 76; continue _fun0013;
case 36:
            var7 = _closure1_slot57;
case 76:
            var6 = {};
            var7 = var8.bind(var4)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot25;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var12];
            var7 = var8.bind(var4)(var7);
            var8 = var7.View;
            var7 = {};
            var7['style'] = var11;
            var12 = _closure1_slot25;
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
case 74:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var9.bind(var8)(var5);
    var _closure1_slot40 = var5;
    var9 = var8.memo;
    var5 = function(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var2 = arg1;
            var12 = var2.hasNameplate;
            var14 = var2.icon;
            var7 = var2.hasBadge;
            var _closure2_slot0 = var7;
            var15 = var2.badgeStyle;
            var9 = var2.onPress;
            var11 = var2.a11yLabel;
            var2 = _closure1_slot34;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var3 = function useIconBadgeCutout(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = arg1;
                    var8 = var2.size;
                    var _closure3_slot0 = var8;
                    var7 = var2.xOffset;
                    var3 = undefined;
                    if(!(var7 === var3)) { _fun0016_ip = 77; continue _fun0016 }
case 78:
                    var7 = 0;
case 77:
                    var _closure3_slot1 = var7;
                    var6 = var2.yOffset;
                    if(!(var6 === var3)) { _fun0016_ip = 79; continue _fun0016 }
case 80:
                    var6 = 0;
case 79:
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
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                            var2 = _closure3_slot3;
                            var1 = _closure3_slot5;
                            var6 = var2 + var1;
                            var7 = 2;
                            var4 = var7 * var6;
                            var3 = _closure3_slot4;
                            var1 = null;
                            var2 = var4;
                            if(!(var1 != var3)) { _fun0017_ip = 15; continue _fun0017 }
case 81:
                            var3 = _closure3_slot4;
                            var1 = _closure3_slot5;
                            var1 = var7 * var1;
                            var2 = var3 + var1;
case 15:
                            var1 = {};
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = 17;
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
            var2 = {'size': 18, 'badgeRadius': 4, 'borderWidth': 2};
            var10 = var3.bind(var4)(var2);
            var _closure2_slot1 = var10;
            var16 = 8;
            var3 = function useIconContentStyle(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = arg1;
                    var8 = var3.size;
                    var _closure3_slot0 = var8;
                    var7 = var3.badgeSize;
                    var _closure3_slot1 = var7;
                    var5 = var3.xOffset;
                    var2 = undefined;
                    if(!(var5 === var2)) { _fun0018_ip = 82; continue _fun0018 }
case 83:
                    var5 = 0;
case 82:
                    var _closure3_slot2 = var5;
                    var6 = var3.yOffset;
                    if(!(var6 === var2)) { _fun0018_ip = 84; continue _fun0018 }
case 85:
                    var6 = 0;
case 84:
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
            var2 = {'size': 18, 'badgeSize': 8};
            var17 = var3.bind(var4)(var2);
            var6 = _closure1_slot5;
            var3 = var6.useMemo;
            var2 = new Array(2);
            var2[0] = var10;
            var2[1] = var7;
            var1 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0019_ip = 86; continue _fun0019 }
case 87:
                    var1 = new Array(0);
                    _fun0019_ip = 47; continue _fun0019;
case 86:
                    var3 = _closure2_slot1;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 47:
                    return var1;
                }
            };
            var18 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot26;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = {'position': 'relative', 'height': 18, 'width': 18};
            var1['style'] = var6;
            var13 = _closure1_slot25;
            var10 = _closure1_slot1;
            var19 = _closure1_slot2;
            var6 = 17;
            var6 = var19[var6];
            var10 = var10.bind(var4)(var6);
            var6 = {};
            var6['cutouts'] = var18;
            var6['children'] = var14;
            var10 = var13.bind(var4)(var10, var6);
            var6 = new Array(2);
            var6[0] = var10;
            if(!var7) { _fun0015_ip = 88; continue _fun0015 }
case 51:
            var14 = _closure1_slot25;
            var13 = _closure1_slot1;
            var18 = _closure1_slot2;
            var10 = 33;
            var10 = var18[var10];
            var13 = var13.bind(var4)(var10);
            var10 = {};
            var10['style'] = var17;
            var10['size'] = var16;
            var10['badgeStyle'] = var15;
            var7 = var14.bind(var4)(var13, var10);
case 88:
            var6[1] = var7;
            var1['children'] = var6;
            var10 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot25;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var5.buttonContainer;
            var1['style'] = var5;
            var7 = _closure1_slot25;
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 34;
            var5 = var13[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.IconButton;
            var5 = {};
            var5['accessibilityLabel'] = var11;
            var11 = 'tertiary';
            if(!var12) { _fun0015_ip = 89; continue _fun0015 }
case 90:
            var11 = 'secondary-overlay';
case 89:
            var5['variant'] = var11;
            var11 = 'sm';
            var5['size'] = var11;
            var5['icon'] = var10;
            var5['onPress'] = var9;
            var8 = _closure1_slot33;
            var5['hitSlop'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var9.bind(var8)(var5);
    var _closure1_slot41 = var5;
    var9 = var8.memo;
    var5 = function(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var12 = var1.hasNameplate;
            var1 = _closure1_slot34;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 35;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var7 = var1.showDot;
            var3 = _closure1_slot25;
            var2 = _closure1_slot41;
            var1 = {};
            var1['hasNameplate'] = var12;
            var10 = _closure1_slot25;
            var9 = _closure1_slot0;
            var8 = 36;
            var8 = var11[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.FlashIcon;
            var8 = {};
            var11 = 'custom';
            var8['size'] = var11;
            var11 = var6.largeButtonIcon;
            var8['style'] = var11;
            var11 = undefined;
            if(!var12) { _fun0020_ip = 91; continue _fun0020 }
case 92:
            var11 = 'white';
case 91:
            var8['color'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var1['icon'] = var8;
            var1['hasBadge'] = var7;
            var6 = var6.icymiBadge;
            var1['badgeStyle'] = var6;
            var6 = function onPress() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 37;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0021_ip = 93; continue _fun0021 }
case 94:
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
case 93:
                    return var1;
                }
            };
            var1['onPress'] = var6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 38;
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
    var5 = var9.bind(var8)(var5);
    var _closure1_slot42 = var5;
    var5 = {};
    var9 = 'function YouBarTsx5(){const{withSpring,badgeCount,SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.spacing.PX_4:0,SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,SPRING_CONFIG)};}';
    var5['code'] = var9;
    var _closure1_slot43 = var5;
    var9 = var8.memo;
    var5 = function(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var19 = var1.hasNameplate;
            var1 = _closure1_slot34;
            var4 = undefined;
            var18 = var1.bind(var4)();
            var7 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 39;
            var1 = var15[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var20 = var1.value;
            var _closure2_slot0 = var20;
            var13 = _closure1_slot0;
            var14 = 22;
            var1 = var15[var14];
            var3 = var13.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function r() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var1 = {};
                    var4 = {};
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var8 = 24;
                    var3 = var3[var8];
                    var7 = undefined;
                    var11 = var5.bind(var7)(var3);
                    var10 = var11.withSpring;
                    var3 = _closure2_slot0;
                    var5 = 0;
                    var3 = var3 > var5;
                    var9 = 0;
                    if(!var3) { _fun0023_ip = 68; continue _fun0023 }
case 85:
                    var9 = 1;
case 68:
                    var3 = _closure1_slot35;
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
                    if(!var3) { _fun0023_ip = 95; continue _fun0023 }
case 96:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var3 = 15;
                    var3 = var12[var3];
                    var3 = var11.bind(var7)(var3);
                    var3 = var3.spacing;
                    var4 = var3.PX_4;
case 95:
                    var3 = _closure1_slot35;
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
                    if(!var6) { _fun0023_ip = 97; continue _fun0023 }
case 98:
                    var5 = 1;
case 97:
                    var2 = _closure1_slot35;
                    var2 = var3.bind(var4)(var5, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var6 = 24;
            var6 = var15[var6];
            var6 = var13.bind(var4)(var6);
            var6 = var6.withSpring;
            var5['withSpring'] = var6;
            var5['badgeCount'] = var20;
            var6 = _closure1_slot35;
            var5['SPRING_CONFIG'] = var6;
            var6 = 15;
            var6 = var15[var6];
            var6 = var7.bind(var4)(var6);
            var5['tokens'] = var6;
            var1['__closure'] = var5;
            var5 = 14315681757689.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot43;
            var1['__initData'] = var5;
            var17 = var2.bind(var3)(var1);
            var3 = _closure1_slot25;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var18.buttonContainer;
            var1['style'] = var5;
            var7 = _closure1_slot25;
            var5 = 34;
            var5 = var15[var5];
            var5 = var13.bind(var4)(var5);
            var6 = var5.IconButton;
            var5 = {};
            var10 = 38;
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
            if(!var19) { _fun0022_ip = 99; continue _fun0022 }
case 100:
            var10 = 'secondary-overlay';
case 99:
            var5['variant'] = var10;
            var10 = 'sm';
            var5['size'] = var10;
            var12 = _closure1_slot26;
            var11 = _closure1_slot6;
            var10 = {};
            var13 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
            var10['style'] = var13;
            var16 = _closure1_slot25;
            var15 = _closure1_slot0;
            var21 = _closure1_slot2;
            var13 = 40;
            var13 = var21[var13];
            var13 = var15.bind(var4)(var13);
            var15 = var13.BellIcon;
            var13 = {};
            var21 = 'custom';
            var13['size'] = var21;
            var18 = var18.largeButtonIcon;
            var13['style'] = var18;
            var18 = undefined;
            if(!var19) { _fun0022_ip = 55; continue _fun0022 }
case 101:
            var18 = 'white';
case 55:
            var13['color'] = var18;
            var15 = var16.bind(var4)(var15, var13);
            var13 = new Array(2);
            var13[0] = var15;
            var16 = _closure1_slot25;
            var15 = _closure1_slot1;
            var21 = _closure1_slot2;
            var14 = var21[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.View;
            var14 = {};
            var14['style'] = var17;
            var19 = _closure1_slot25;
            var18 = _closure1_slot0;
            var17 = 14;
            var17 = var21[var17];
            var17 = var18.bind(var4)(var17);
            var18 = var17.Badge;
            var17 = {};
            var17['value'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[1] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var5['icon'] = var10;
            var10 = function onPress() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 37;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0024_ip = 63; continue _fun0024 }
case 94:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = true;
                    var3['inNestedNavigator'] = var2;
                    var2 = 'notifications';
                    var2 = var4.bind(var5)(var2, var3);
case 63:
                    return var1;
                }
            };
            var5['onPress'] = var10;
            var9 = function onLongPress() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 41;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var2);
                    var4 = var5.getConfig;
                    var2 = {};
                    var6 = 'YouBar';
                    var2['location'] = var6;
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.enabled;
                    if(!var2) { _fun0025_ip = 102; continue _fun0025 }
case 103:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 42;
                    var4 = var6[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.bind(var1)();
                    if(var4) { _fun0025_ip = 104; continue _fun0025 }
case 105:
                    var6 = _closure1_slot9;
                    var5 = var6.getSavedMessageCount;
                    var6 = var5.bind(var6)();
                    var5 = 0;
                    var4 = var6 > var5;
case 104:
                    var2 = var4;
case 102:
                    if(!var2) { _fun0025_ip = 106; continue _fun0025 }
case 43:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var5 = 43;
                    var6 = var2[var5];
                    var7 = var4.bind(var1)(var6);
                    var6 = var7.triggerHapticFeedback;
                    var5 = var2[var5];
                    var5 = var4.bind(var1)(var5);
                    var5 = var5.HapticFeedbackTypes;
                    var5 = var5.IMPACT_MEDIUM;
                    var5 = var6.bind(var7)(var5);
                    var5 = _closure1_slot1;
                    var3 = 44;
                    var3 = var2[var3];
                    var7 = var5.bind(var1)(var3);
                    var6 = var7.pushLazy;
                    var3 = 46;
                    var3 = var2[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = 45;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var11 = var4.bind(var1)(var3, var2);
                    var4 = {};
                    var2 = 'modal';
                    var4['presentation'] = var2;
                    var10 = {};
                    var9 = 'for-later-modal';
                    var12 = var7;
                    var8 = var4;
                    var2 = var12[var6](var11, var10, var9, var8, var7);
case 106:
                    return var1;
                }
            };
            var5['onLongPress'] = var9;
            var8 = _closure1_slot33;
            var5['hitSlop'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var9.bind(var8)(var5);
    var _closure1_slot44 = var5;
    var5 = {};
    var9 = 'function YouBarTsx6(){const{withSpring,isPressed,isQuestRendered,SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(isPressed&&!isQuestRendered?0.98:1,SPRING_CONFIG)}]};}';
    var5['code'] = var9;
    var _closure1_slot45 = var5;
    var5 = {};
    var9 = 'function YouBarTsx7(){const{withSpring,isQuestRendered,questDockAnimatedBorderRadius,YOU_BAR_HEIGHT,SPRING_CONFIG}=this.__closure;return{borderTopRightRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():YOU_BAR_HEIGHT/2,SPRING_CONFIG),borderTopLeftRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():YOU_BAR_HEIGHT/2,SPRING_CONFIG)};}';
    var5['code'] = var9;
    var _closure1_slot46 = var5;
    var5 = {};
    var9 = 'function YouBarTsx8(){const{withSpring,isQuestRendered,questDockAnimatedBorderRadius,YOU_BAR_HEIGHT,SPRING_CONFIG}=this.__closure;return{borderTopRightRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():YOU_BAR_HEIGHT/2,SPRING_CONFIG)};}';
    var5['code'] = var9;
    var _closure1_slot47 = var5;
    var5 = {};
    var9 = 'function YouBarTsx9(){const{runOnJS,handleNavBetweenGuildsAndDMs}=this.__closure;runOnJS(handleNavBetweenGuildsAndDMs)();}';
    var5['code'] = var9;
    var _closure1_slot48 = var5;
    var9 = var8.memo;
    var5 = function() {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var2 = _closure1_slot34;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 51;
            var2 = var8[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var7 = var2.width;
            var6 = _closure1_slot0;
            var2 = 28;
            var3 = var8[var2];
            var3 = var6.bind(var4)(var3);
            var13 = var3.YouBarExperiment;
            var9 = var13.useConfig;
            var3 = {};
            var11 = 'YouBar';
            var3['location'] = var11;
            var3 = var9.bind(var13)(var3);
            var21 = var3.largeAvatarEnabled;
            var3 = 52;
            var9 = var8[var3];
            var13 = var6.bind(var4)(var9);
            var9 = var13.useIsMobileQuestDockRenderedBase;
            var3 = var8[var3];
            var14 = var6.bind(var4)(var3);
            var3 = var14.useMobileQuestDock;
            var3 = var3.bind(var14)();
            var20 = var9.bind(var13)(var3);
            var _closure2_slot0 = var20;
            var3 = 53;
            var3 = var8[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.useDrawerWidth;
            var6 = var3.bind(var6)();
            var3 = 54;
            var3 = var8[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var8 = var3.isChatBesideChannelList;
            var3 = _closure1_slot20;
            var3 = var3.bind(var4)();
            var _closure2_slot1 = var3;
            var27 = 2;
            var5 = var27 * var3;
            if(var8) { _fun0026_ip = 107; continue _fun0026 }
case 108:
            var24 = var7 - var5;
            _fun0026_ip = 109; continue _fun0026;
case 107:
            var24 = var6 - var5;
case 109:
            var _closure2_slot2 = var24;
            var5 = _closure1_slot14;
            var8 = var5.bind(var4)();
            var _closure2_slot3 = var8;
            var7 = _closure1_slot5;
            var6 = var7.useMemo;
            var5 = new Array(3);
            var5[0] = var24;
            var5[1] = var8;
            var5[2] = var3;
            var3 = function() {
                var1 = {};
                var3 = _closure2_slot1;
                var1['marginHorizontal'] = var3;
                var4 = _closure1_slot16;
                var1['height'] = var4;
                var4 = _closure2_slot3;
                var1['marginBottom'] = var4;
                var3 = _closure1_slot17;
                var1['padding'] = var3;
                var2 = _closure2_slot2;
                var1['width'] = var2;
                return var1;
            };
            var8 = var6.bind(var7)(var3, var5);
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 55;
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
            var2 = 21;
            var7 = var6[var2];
            var14 = var5.bind(var4)(var7);
            var13 = var14.useStateFromStores;
            var7 = _closure1_slot13;
            var11 = new Array(1);
            var11[0] = var7;
            var7 = function() {
                var2 = _closure1_slot13;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var13.bind(var14)(var11, var7);
            var2 = var6[var2];
            var14 = var5.bind(var4)(var2);
            var13 = var14.useStateFromStores;
            var2 = _closure1_slot11;
            var11 = new Array(1);
            var11[0] = var2;
            var2 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var13.bind(var14)(var11, var2);
            var2 = 49;
            var2 = var6[var2];
            var6 = var5.bind(var4)(var2);
            var5 = var6.useNameplate;
            var2 = {};
            var2['user'] = var7;
            var7 = undefined;
            if(!var3) { _fun0026_ip = 110; continue _fun0026 }
case 111:
            var13 = null;
            var13 = var13 != var11;
            var7 = undefined;
            if(!var13) { _fun0026_ip = 110; continue _fun0026 }
case 112:
            var7 = var11;
case 110:
            var2['guildId'] = var7;
            var25 = var5.bind(var6)(var2);
            var11 = null;
            var13 = var11 != var25;
            var2 = function useBGColor(arg1) {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var10 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 47;
                    var2 = var5[var2];
                    var7 = undefined;
                    var2 = var10.bind(var7)(var2);
                    var9 = var2.bind(var7)();
                    var8 = 15;
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
                    var10 = 21;
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
                    var9 = 48;
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
                    var9 = _closure1_slot13;
                    var11 = new Array(1);
                    var11[0] = var9;
                    var9 = function() {
                        var2 = _closure1_slot13;
                        var1 = var2.getCurrentUser;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var9 = var12.bind(var14)(var11, var9);
                    var10 = var5[var10];
                    var12 = var3.bind(var7)(var10);
                    var11 = var12.useStateFromStores;
                    var14 = _closure1_slot11;
                    var10 = new Array(1);
                    var10[0] = var14;
                    var1 = function() {
                        var2 = _closure1_slot11;
                        var1 = var2.getGuildId;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var10 = var11.bind(var12)(var10, var1);
                    var1 = 49;
                    var1 = var5[var1];
                    var5 = var3.bind(var7)(var1);
                    var3 = var5.useNameplate;
                    var1 = {};
                    var1['user'] = var9;
                    var11 = arg1;
                    var9 = undefined;
                    if(!var11) { _fun0027_ip = 113; continue _fun0027 }
case 114:
                    var11 = null;
                    var11 = var11 != var10;
                    var9 = undefined;
                    if(!var11) { _fun0027_ip = 113; continue _fun0027 }
case 115:
                    var9 = var10;
case 113:
                    var1['guildId'] = var9;
                    var1 = var3.bind(var5)(var1);
                    var3 = null;
                    var1 = var3 != var1;
                    if(var1) { _fun0027_ip = 116; continue _fun0027 }
case 117:
                    if(!(var3 != var2)) { _fun0027_ip = 116; continue _fun0027 }
case 118:
                    var9 = _closure1_slot18;
                    var5 = var2.id;
                    var5 = var9[var5];
                    if(!(var3 != var5)) { _fun0027_ip = 116; continue _fun0027 }
case 119:
                    var5 = _closure1_slot18;
                    var2 = var2.id;
                    var2 = var5[var2];
                    _fun0027_ip = 120; continue _fun0027;
case 116:
                    var2 = var4;
                    if(var1) { _fun0027_ip = 120; continue _fun0027 }
case 121:
                    var1 = var3 != var13;
                    var2 = undefined;
                    if(!var1) { _fun0027_ip = 120; continue _fun0027 }
case 122:
                    var5 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var1 = 50;
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
case 120:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var4 = 26;
                    var4 = var1[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.useToken;
                    var6 = _closure1_slot1;
                    var1 = var1[var8];
                    var1 = var6.bind(var7)(var1);
                    var1 = var1.colors;
                    var1 = var1.BACKGROUND_SURFACE_HIGHEST;
                    var1 = var4.bind(var5)(var1);
                    if(!(var3 != var2)) { _fun0027_ip = 123; continue _fun0027 }
case 124:
                    var1 = var2;
case 123:
                    return var1;
                }
            };
            var33 = var2.bind(var4)(var3);
            var5 = _closure1_slot5;
            var3 = var5.useState;
            var2 = false;
            var3 = var3.bind(var5)(var2);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var3, var27);
            var26 = 0;
            var7 = var2[var26];
            var _closure2_slot4 = var7;
            var39 = 1;
            var2 = var2[var39];
            var _closure2_slot5 = var2;
            var3 = _closure1_slot5;
            var2 = var3.useRef;
            var2 = var2.bind(var3)(var11);
            var _closure2_slot6 = var2;
            var6 = _closure1_slot5;
            var5 = var6.useEffect;
            var3 = function() {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 37;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getRootNavigationRef;
                    var5 = var3.bind(var4)();
                    var _closure3_slot0 = var5;
                    var3 = null;
                    if(!(var3 == var5)) { _fun0028_ip = 69; continue _fun0028 }
case 125:
                    return var2;
case 69:
                    var4 = function checkYouScreenPresence() {
                        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                            var2 = _closure3_slot0;
                            var1 = var2.getState;
                            var5 = var1.bind(var2)();
                            var3 = null;
                            var6 = var3 == var5;
                            var1 = undefined;
                            var2 = undefined;
                            if(var6) { _fun0029_ip = 126; continue _fun0029 }
case 127:
                            var7 = var5.routes;
                            var5 = var3 == var7;
                            var2 = undefined;
                            if(var5) { _fun0029_ip = 126; continue _fun0029 }
case 128:
                            var6 = var7.some;
                            var5 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.name;
                                var1 = 'you';
                                var1 = var1 === var2;
                                return var1;
                            };
                            var2 = var6.bind(var7)(var5);
case 126:
                            if(var2) { _fun0029_ip = 93; continue _fun0029 }
case 129:
                            var5 = _closure2_slot6;
                            var5 = var5.current;
                            var2 = var3 == var5;
case 93:
                            if(var2) { _fun0029_ip = 130; continue _fun0029 }
case 131:
                            var5 = _closure2_slot6;
                            var6 = var5.current;
                            var5 = 'press';
                            if(!(var5 === var6)) { _fun0029_ip = 132; continue _fun0029 }
case 44:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var5 = 43;
                            var6 = var9[var5];
                            var7 = var8.bind(var1)(var6);
                            var6 = var7.triggerHapticFeedback;
                            var5 = var9[var5];
                            var5 = var8.bind(var1)(var5);
                            var5 = var5.HapticFeedbackTypes;
                            var5 = var5.SOFT;
                            var5 = var6.bind(var7)(var5);
                            var6 = _closure3_slot0;
                            var5 = var6.navigate;
                            var4 = 'you';
                            var4 = var5.bind(var6)(var4);
case 132:
                            var2 = _closure2_slot6;
                            var2['current'] = var3;
case 130:
                            return var1;
                        }
                    };
                    var2 = var4.bind(var2)();
                    var3 = var5.addListener;
                    var2 = 'state';
                    var2 = var3.bind(var5)(var2, var4);
                    var _closure3_slot1 = var2;
                    var1 = function() {
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    return var1;
                }
            };
            var2 = new Array(0);
            var2 = var5.bind(var6)(var3, var2);
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var23 = 22;
            var2 = var15[var23];
            var5 = var18.bind(var4)(var2);
            var3 = var5.useAnimatedStyle;
            var2 = function ie() {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    var1 = {};
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 24;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.withSpring;
                    var9 = _closure2_slot4;
                    var8 = 1;
                    var4 = var8;
                    if(!var9) { _fun0030_ip = 133; continue _fun0030 }
case 134:
                    var7 = _closure2_slot0;
                    var4 = var8;
                    if(var7) { _fun0030_ip = 133; continue _fun0030 }
case 135:
                    var4 = 0.98;
case 133:
                    var2 = _closure1_slot35;
                    var2 = var5.bind(var6)(var4, var2);
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var6 = {};
            var17 = 24;
            var14 = var15[var17];
            var14 = var18.bind(var4)(var14);
            var14 = var14.withSpring;
            var6['withSpring'] = var14;
            var6['isPressed'] = var7;
            var6['isQuestRendered'] = var20;
            var7 = _closure1_slot35;
            var6['SPRING_CONFIG'] = var7;
            var2['__closure'] = var6;
            var6 = 4633106658765.0;
            var2['__workletHash'] = var6;
            var6 = _closure1_slot45;
            var2['__initData'] = var6;
            var7 = var3.bind(var5)(var2);
            var6 = _closure1_slot1;
            var2 = 56;
            var2 = var15[var2];
            var3 = var6.bind(var4)(var2);
            var2 = _closure1_slot16;
            var2 = var2 / var27;
            var16 = var3.bind(var4)(var2);
            var _closure2_slot7 = var16;
            var2 = var15[var23];
            var5 = var18.bind(var4)(var2);
            var3 = var5.useAnimatedStyle;
            var2 = function re() {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var7 = 24;
                    var3 = var3[var7];
                    var5 = undefined;
                    var9 = var4.bind(var5)(var3);
                    var8 = var9.withSpring;
                    var3 = _closure2_slot0;
                    if(var3) { _fun0031_ip = 68; continue _fun0031 }
case 80:
                    var4 = _closure1_slot16;
                    var3 = 2;
                    var4 = var4 / var3;
                    _fun0031_ip = 129; continue _fun0031;
case 68:
                    var10 = _closure2_slot7;
                    var3 = var10.get;
                    var4 = var3.bind(var10)();
case 129:
                    var3 = _closure1_slot35;
                    var3 = var8.bind(var9)(var4, var3);
                    var1['borderTopRightRadius'] = var3;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.withSpring;
                    var3 = _closure2_slot0;
                    if(var3) { _fun0031_ip = 136; continue _fun0031 }
case 43:
                    var7 = _closure1_slot16;
                    var3 = 2;
                    var3 = var7 / var3;
                    _fun0031_ip = 42; continue _fun0031;
case 136:
                    var7 = _closure2_slot7;
                    var6 = var7.get;
                    var3 = var6.bind(var7)();
case 42:
                    var2 = _closure1_slot35;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['borderTopLeftRadius'] = var2;
                    return var1;
                }
            };
            var14 = {};
            var19 = var15[var17];
            var19 = var18.bind(var4)(var19);
            var19 = var19.withSpring;
            var14['withSpring'] = var19;
            var14['isQuestRendered'] = var20;
            var14['questDockAnimatedBorderRadius'] = var16;
            var19 = _closure1_slot16;
            var14['YOU_BAR_HEIGHT'] = var19;
            var19 = _closure1_slot35;
            var14['SPRING_CONFIG'] = var19;
            var2['__closure'] = var14;
            var14 = 14575312830567.0;
            var2['__workletHash'] = var14;
            var14 = _closure1_slot46;
            var2['__initData'] = var14;
            var28 = var3.bind(var5)(var2);
            var2 = var15[var23];
            var5 = var18.bind(var4)(var2);
            var3 = var5.useAnimatedStyle;
            var2 = function ae() {
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 24;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withSpring;
                    var3 = _closure2_slot0;
                    if(var3) { _fun0032_ip = 68; continue _fun0032 }
case 80:
                    var7 = _closure1_slot16;
                    var3 = 2;
                    var3 = var7 / var3;
                    _fun0032_ip = 129; continue _fun0032;
case 68:
                    var7 = _closure2_slot7;
                    var6 = var7.get;
                    var3 = var6.bind(var7)();
case 129:
                    var2 = _closure1_slot35;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['borderTopRightRadius'] = var2;
                    return var1;
                }
            };
            var14 = {};
            var17 = var15[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.withSpring;
            var14['withSpring'] = var17;
            var14['isQuestRendered'] = var20;
            var14['questDockAnimatedBorderRadius'] = var16;
            var16 = _closure1_slot16;
            var14['YOU_BAR_HEIGHT'] = var16;
            var16 = _closure1_slot35;
            var14['SPRING_CONFIG'] = var16;
            var2['__closure'] = var14;
            var14 = 2329054083221.0;
            var2['__workletHash'] = var14;
            var14 = _closure1_slot47;
            var2['__initData'] = var14;
            var16 = var3.bind(var5)(var2);
            var14 = _closure1_slot5;
            var5 = var14.useCallback;
            var3 = function() {
                _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 37;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getRootNavigationRef;
                    var4 = var3.bind(var4)();
                    var3 = null;
                    if(!(var3 != var4)) { _fun0033_ip = 137; continue _fun0033 }
case 94:
                    var5 = var4.getState;
                    var6 = var5.bind(var4)();
                    var7 = var3 == var6;
                    var5 = undefined;
                    if(var7) { _fun0033_ip = 138; continue _fun0033 }
case 135:
                    var8 = var6.routes;
                    var6 = var3 == var8;
                    var5 = undefined;
                    if(var6) { _fun0033_ip = 138; continue _fun0033 }
case 139:
                    var7 = var8.some;
                    var6 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.name;
                        var1 = 'you';
                        var1 = var1 === var2;
                        return var1;
                    };
                    var5 = var7.bind(var8)(var6);
case 138:
                    if(var5) { _fun0033_ip = 140; continue _fun0033 }
case 137:
                    if(!(var3 != var4)) { _fun0033_ip = 132; continue _fun0033 }
case 141:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 43;
                    var3 = var7[var2];
                    var5 = var6.bind(var1)(var3);
                    var3 = var5.triggerHapticFeedback;
                    var2 = var7[var2];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.HapticFeedbackTypes;
                    var2 = var2.SOFT;
                    var2 = var3.bind(var5)(var2);
                    var3 = var4.navigate;
                    var2 = 'you';
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot5;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
case 132:
                    return var1;
case 140:
                    var3 = _closure2_slot6;
                    var2 = 'press';
                    var3['current'] = var2;
                    return var1;
                }
            };
            var2 = new Array(0);
            var18 = var5.bind(var14)(var3, var2);
            var14 = _closure1_slot5;
            var5 = var14.useCallback;
            var3 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0034_ip = 142; continue _fun0034 }
case 87:
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var3 = 46;
                        var5 = var2[var3];
                        var3 = undefined;
                        var6 = var6.bind(var3)(var5);
                        var5 = 57;
                        var5 = var2[var5];
                        var2 = var2.paths;
                        var2 = var6.bind(var3)(var5, var2);
                        SaveGenerator(address=57);
case 68:
                        return var2;
case 143:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0034_ip = 144; continue _fun0034 }
case 145:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 43;
                        var5 = var8[var4];
                        var6 = var7.bind(var3)(var5);
                        var5 = var6.triggerHapticFeedback;
                        var4 = var8[var4];
                        var4 = var7.bind(var3)(var4);
                        var4 = var4.HapticFeedbackTypes;
                        var4 = var4.SOFT;
                        var4 = var5.bind(var6)(var4);
                        var4 = var2.showYouAccountActionSheet;
                        var4 = var4.bind(var2)();
                        var5 = _closure2_slot5;
                        var4 = false;
                        var4 = var5.bind(var3)(var4);
                        return var3;
case 144:
                        return var2;
case 142:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = new Array(0);
            var17 = var5.bind(var14)(var3, var2);
            var14 = _closure1_slot5;
            var5 = var14.useCallback;
            var3 = function() {
                var3 = _closure2_slot5;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var22 = var5.bind(var14)(var3, var2);
            var14 = _closure1_slot5;
            var5 = var14.useCallback;
            var3 = function() {
                var3 = _closure2_slot5;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var19 = var5.bind(var14)(var3, var2);
            var14 = _closure1_slot5;
            var5 = var14.useCallback;
            var3 = function() {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 58;
                    var3 = var7[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.coerceGuildsRoute;
                    var6 = _closure1_slot1;
                    var3 = 59;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.bind(var1)();
                    var4 = var4.bind(var5)(var3);
                    var3 = null;
                    if(!(var3 != var4)) { _fun0035_ip = 146; continue _fun0035 }
case 126:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 43;
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
                    if(var6) { _fun0035_ip = 67; continue _fun0035 }
case 147:
                    var5 = var4.guildId;
case 67:
                    var4 = _closure1_slot22;
                    if(!(var5 !== var4)) { _fun0035_ip = 148; continue _fun0035 }
case 142:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 60;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.transitionToGuild;
                    var4 = _closure1_slot22;
                    var4 = var5.bind(var6)(var4);
                    _fun0035_ip = 146; continue _fun0035;
case 148:
                    var5 = _closure1_slot11;
                    var4 = var5.getLastSelectedGuildId;
                    var4 = var4.bind(var5)();
                    if(!(var3 != var4)) { _fun0035_ip = 146; continue _fun0035 }
case 149:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 60;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.transitionToGuild;
                    var2 = var2.bind(var3)(var4);
case 146:
                    return var1;
                }
            };
            var2 = new Array(0);
            var14 = var5.bind(var14)(var3, var2);
            var _closure2_slot8 = var14;
            var5 = _closure1_slot5;
            var3 = var5.useContext;
            var2 = 61;
            var2 = var15[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var3.bind(var5)(var2);
            var6 = var2.gesture;
            var _closure2_slot9 = var6;
            var5 = _closure1_slot5;
            var3 = var5.useMemo;
            var2 = new Array(2);
            var2[0] = var14;
            var2[1] = var6;
            var1 = function() {
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 62;
                var1 = var10[var1];
                var8 = undefined;
                var1 = var9.bind(var8)(var1);
                var2 = var1.Gesture;
                var1 = var2.Pan;
                var3 = var1.bind(var2)();
                var2 = var3.simultaneousWithExternalGesture;
                var1 = _closure2_slot9;
                var3 = var2.bind(var3)(var1);
                var2 = var3.activeOffsetX;
                var1 = 50;
                var3 = var2.bind(var3)(var1);
                var2 = var3.failOffsetX;
                var1 = -10;
                var3 = var2.bind(var3)(var1);
                var2 = var3.failOffsetY;
                var1 = new Array(2);
                var5 = -40;
                var1[0] = var5;
                var5 = 40;
                var1[1] = var5;
                var3 = var2.bind(var3)(var1);
                var2 = var3.onEnd;
                var1 = function t() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 22;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot8;
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var5 = {};
                var7 = 22;
                var7 = var10[var7];
                var7 = var9.bind(var8)(var7);
                var7 = var7.runOnJS;
                var5['runOnJS'] = var7;
                var6 = _closure2_slot8;
                var5['handleNavBetweenGuildsAndDMs'] = var6;
                var1['__closure'] = var5;
                var5 = 9056703349885.0;
                var1['__workletHash'] = var5;
                var4 = _closure1_slot48;
                var1['__initData'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var3.bind(var5)(var1, var2);
            var5 = var21;
            if(!var5) { _fun0026_ip = 150; continue _fun0026 }
case 151:
            var5 = !var20;
case 150:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.AVATAR_SIZE_MAP;
            if(var5) { _fun0026_ip = 152; continue _fun0026 }
case 153:
            var1 = _closure1_slot29;
            var15 = var2[var1];
            _fun0026_ip = 154; continue _fun0026;
case 152:
            var1 = _closure1_slot30;
            var15 = var2[var1];
case 154:
            var1 = 4;
            var40 = var15 - var1;
            var3 = _closure1_slot26;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var23];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var29 = var12.youRow;
            var6 = new Array(3);
            var6[0] = var29;
            var6[1] = var8;
            var6[2] = var7;
            var1['style'] = var6;
            var8 = _closure1_slot25;
            var37 = _closure1_slot1;
            var38 = _closure1_slot2;
            if(var5) { _fun0026_ip = 155; continue _fun0026 }
case 156:
            var5 = var38[var23];
            var5 = var37.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var29 = {};
            var7 = 'absolute';
            var29['position'] = var7;
            var7 = new Array(5);
            var7[0] = var29;
            var29 = var12.youRowFloating;
            var7[1] = var29;
            var29 = {};
            var29['width'] = var24;
            var30 = _closure1_slot16;
            var29['height'] = var30;
            var29['backgroundColor'] = var33;
            var7[2] = var29;
            var29 = undefined;
            if(!var20) { _fun0026_ip = 157; continue _fun0026 }
case 158:
            var29 = {'borderTopRightRadius': 0, 'borderTopLeftRadius': 0};
case 157:
            var7[3] = var29;
            var7[4] = var28;
            var5['style'] = var7;
            var6 = var8.bind(var4)(var6, var5);
            _fun0026_ip = 159; continue _fun0026;
case 155:
            var5 = 63;
            var5 = var38[var5];
            var7 = var37.bind(var4)(var5);
            var5 = {};
            var28 = {};
            var29 = 'absolute';
            var28['position'] = var29;
            var5['style'] = var28;
            var30 = _closure1_slot26;
            var29 = _closure1_slot6;
            var28 = {};
            var31 = {};
            var31['width'] = var24;
            var32 = _closure1_slot16;
            var31['height'] = var32;
            var32 = 'transparent';
            var31['backgroundColor'] = var32;
            var28['style'] = var31;
            var34 = _closure1_slot25;
            var32 = _closure1_slot6;
            var31 = {};
            var35 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': null, 'backgroundColor': 'black'};
            var36 = _closure1_slot16;
            var36 = var36 / var27;
            var35['bottom'] = var36;
            var31['style'] = var35;
            var32 = var34.bind(var4)(var32, var31);
            var31 = new Array(3);
            var31[0] = var32;
            var35 = _closure1_slot25;
            var34 = _closure1_slot6;
            var32 = {};
            var36 = {'position': 'absolute', 'top': null, 'left': null, 'right': 0, 'bottom': 0, 'backgroundColor': 'black'};
            var41 = _closure1_slot16;
            var41 = var41 / var27;
            var36['top'] = var41;
            var39 = var40 - var39;
            var36['left'] = var39;
            var32['style'] = var36;
            var32 = var35.bind(var4)(var34, var32);
            var31[1] = var32;
            var35 = _closure1_slot25;
            var32 = 64;
            var32 = var38[var32];
            var34 = var37.bind(var4)(var32);
            var32 = {};
            var36 = {'position': 'absolute', 'top': null, 'width': 8};
            var39 = _closure1_slot16;
            var39 = var39 / var27;
            var36['top'] = var39;
            var39 = 8;
            var39 = var40 - var39;
            var36['left'] = var39;
            var39 = _closure1_slot16;
            var39 = var39 / var27;
            var36['height'] = var39;
            var32['style'] = var36;
            var36 = 50;
            var36 = var38[var36];
            var36 = var37.bind(var4)(var36);
            var37 = '#000000';
            var38 = var36.bind(var4)(var37);
            var36 = var38.alpha;
            var38 = var36.bind(var38)(var26);
            var36 = var38.hex;
            var38 = var36.bind(var38)();
            var36 = new Array(2);
            var36[0] = var38;
            var36[1] = var37;
            var32['colors'] = var36;
            var36 = {'x': 0, 'y': 0};
            var32['start'] = var36;
            var36 = {'x': 1, 'y': 0};
            var32['end'] = var36;
            var36 = [0, 1];
            var32['locations'] = var36;
            var36 = 'none';
            var32['pointerEvents'] = var36;
            var32 = var35.bind(var4)(var34, var32);
            var31[2] = var32;
            var28['children'] = var31;
            var28 = var30.bind(var4)(var29, var28);
            var5['maskElement'] = var28;
            var30 = _closure1_slot25;
            var29 = _closure1_slot6;
            var28 = {};
            var32 = var12.youRowFloating;
            var31 = new Array(2);
            var31[0] = var32;
            var32 = {};
            var32['width'] = var24;
            var34 = _closure1_slot16;
            var32['height'] = var34;
            var32['backgroundColor'] = var33;
            var31[1] = var32;
            var28['style'] = var31;
            var28 = var30.bind(var4)(var29, var28);
            var5['children'] = var28;
            var6 = var8.bind(var4)(var7, var5);
case 159:
            var5 = new Array(4);
            var5[0] = var6;
            var8 = _closure1_slot25;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var23];
            var6 = var7.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var23 = {'position': 'absolute', 'top': 0, 'left': null, 'right': 4294967295, 'bottom': 0, 'borderTopRightRadius': null, 'borderTopLeftRadius': 0, 'borderBottomRightRadius': null, 'borderBottomLeftRadius': 0, 'overflow': 'hidden'};
            var23['left'] = var15;
            var26 = 0;
            if(var20) { _fun0026_ip = 160; continue _fun0026 }
case 161:
            var28 = _closure1_slot16;
            var26 = var28 / var27;
case 160:
            var23['borderTopRightRadius'] = var26;
            var26 = _closure1_slot16;
            var26 = var26 / var27;
            var23['borderBottomRightRadius'] = var26;
            var15 = var24 - var15;
            var23['width'] = var15;
            var15 = new Array(2);
            var15[0] = var23;
            var15[1] = var16;
            var6['style'] = var15;
            var15 = 'none';
            var6['pointerEvents'] = var15;
            var24 = _closure1_slot25;
            var23 = _closure1_slot1;
            var15 = _closure1_slot2;
            var16 = 65;
            var16 = var15[var16];
            var23 = var23.bind(var4)(var16);
            var16 = {'nameplate': null, 'isFocused': true, 'animate': false};
            var16['nameplate'] = var25;
            var16 = var24.bind(var4)(var23, var16);
            var6['children'] = var16;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot25;
            var7 = _closure1_slot0;
            var6 = 62;
            var6 = var15[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.GestureDetector;
            var6 = {};
            var6['gesture'] = var14;
            var16 = _closure1_slot25;
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
            var17 = _closure1_slot33;
            var14['hitSlop'] = var17;
            var19 = _closure1_slot25;
            var18 = _closure1_slot40;
            var17 = {};
            var17['largeAvatarEnabled'] = var21;
            var17['isQuestRendered'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var6['children'] = var14;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var8 = _closure1_slot26;
            var7 = _closure1_slot6;
            var6 = {};
            var12 = var12.youRowRight;
            var6['style'] = var12;
            var11 = null;
            if(!var9) { _fun0026_ip = 162; continue _fun0026 }
case 163:
            var14 = _closure1_slot25;
            var12 = _closure1_slot42;
            var9 = {};
            var9['hasNameplate'] = var13;
            var11 = var14.bind(var4)(var12, var9);
case 162:
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot25;
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
    var5 = var9.bind(var8)(var5);
    var _closure1_slot49 = var5;
    var5 = {};
    var9 = 'function YouBarTsx10(){const{gradientHeight,drawerWidth}=this.__closure;return{height:gradientHeight,opacity:1,width:drawerWidth};}';
    var5['code'] = var9;
    var _closure1_slot50 = var5;
    var9 = var8.memo;
    var5 = function() {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
            var2 = _closure1_slot34;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var2 = _closure1_slot21;
            var17 = var2.bind(var4)();
            var2 = _closure1_slot15;
            var13 = var17 + var2;
            var _closure2_slot0 = var13;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 51;
            var2 = var8[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var2 = var2.width;
            var3 = 54;
            var3 = var8[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var7 = var3.isChatBesideChannelList;
            var3 = 66;
            var3 = var8[var3];
            var3 = var5.bind(var4)(var3);
            var5 = var3.bind(var4)();
            var3 = 4;
            if(var7) { _fun0036_ip = 164; continue _fun0036 }
case 165:
            var14 = var2 - var3;
            _fun0036_ip = 166; continue _fun0036;
case 164:
            var2 = _closure1_slot24;
            var2 = var5 + var2;
            var14 = var2 - var3;
case 166:
            var _closure2_slot1 = var14;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 22;
            var2 = var8[var2];
            var5 = var3.bind(var4)(var2);
            var2 = var5.useAnimatedStyle;
            var1 = function o() {
                var1 = {};
                var3 = _closure2_slot0;
                var1['height'] = var3;
                var3 = 1;
                var1['opacity'] = var3;
                var2 = _closure2_slot1;
                var1['width'] = var2;
                return var1;
            };
            var7 = {};
            var7['gradientHeight'] = var13;
            var7['drawerWidth'] = var14;
            var1['__closure'] = var7;
            var7 = 10108773794978.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot50;
            var1['__initData'] = var7;
            var12 = var2.bind(var5)(var1);
            var1 = 48;
            var2 = var8[var1];
            var5 = var3.bind(var4)(var2);
            var2 = var5.useGradientValue;
            var1 = var8[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.GradientPercentage;
            var1 = var1.END;
            var1 = var2.bind(var5)(var1);
            var2 = 26;
            var2 = var8[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useToken;
            var7 = _closure1_slot1;
            var2 = 15;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.colors;
            var2 = var2.BACKGROUND_BASE_LOWER;
            var3 = var3.bind(var5)(var2);
            var2 = _closure1_slot59;
            var8 = var2.bind(var4)();
            var2 = null;
            if(!(var2 == var8)) { _fun0036_ip = 167; continue _fun0036 }
case 168:
            var8 = var3;
            if(!(var2 != var1)) { _fun0036_ip = 167; continue _fun0036 }
case 169:
            var8 = var1;
case 167:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 67;
            var1 = var1[var7];
            var5 = var3.bind(var4)(var1);
            var3 = var5.hex2rgb;
            var1 = 1;
            var1 = var3.bind(var5)(var8, var1);
            var5 = var2 != var1;
            var16 = 'transparent';
            var3 = var16;
            if(!var5) { _fun0036_ip = 170; continue _fun0036 }
case 171:
            var3 = var1;
case 170:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var5 = var5.bind(var4)(var1);
            var1 = var5.hex2rgb;
            var15 = 0;
            var1 = var1.bind(var5)(var3, var15);
            var2 = var2 != var1;
            var11 = var3;
            if(!var2) { _fun0036_ip = 172; continue _fun0036 }
case 173:
            var16 = var1;
case 172:
            var3 = _closure1_slot26;
            var2 = _closure1_slot27;
            var1 = {};
            var8 = _closure1_slot25;
            var7 = _closure1_slot6;
            var5 = {};
            var18 = var9.floatingShade;
            var10 = new Array(3);
            var10[0] = var18;
            var10[1] = var12;
            var12 = {};
            var12['height'] = var17;
            var12['opacity'] = var15;
            var10[2] = var12;
            var5['style'] = var10;
            var10 = 'box-only';
            var5['pointerEvents'] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var10 = _closure1_slot25;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 64;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var12 = var9.floatingShade;
            var15 = new Array(2);
            var15[0] = var12;
            var17 = {};
            var12 = 2;
            var18 = var13 / var12;
            var17['bottom'] = var18;
            var18 = var13 / var12;
            var17['height'] = var18;
            var17['width'] = var14;
            var15[1] = var17;
            var7['style'] = var15;
            var15 = new Array(2);
            var15[0] = var16;
            var15[1] = var11;
            var7['colors'] = var15;
            var15 = {'x': 0, 'y': 0};
            var7['start'] = var15;
            var15 = {'x': 0, 'y': 1};
            var7['end'] = var15;
            var15 = [0, 1];
            var7['locations'] = var15;
            var15 = 'none';
            var7['pointerEvents'] = var15;
            var7 = var10.bind(var4)(var8, var7);
            var5[1] = var7;
            var8 = _closure1_slot25;
            var7 = _closure1_slot6;
            var6 = {};
            var10 = var9.floatingShade;
            var9 = new Array(2);
            var9[0] = var10;
            var10 = {};
            var10['width'] = var14;
            var12 = var13 / var12;
            var10['height'] = var12;
            var10['backgroundColor'] = var11;
            var9[1] = var10;
            var6['style'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var9.bind(var8)(var5);
    var _closure1_slot51 = var5;
    var5 = var8.memo;
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
        var3 = _closure1_slot26;
        var1 = 68;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.ThemeContextProvider;
        var1 = {};
        var1['gradient'] = var5;
        var8 = _closure1_slot25;
        var7 = _closure1_slot51;
        var5 = {};
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot25;
        var7 = _closure1_slot49;
        var6 = {};
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var5.bind(var8)(var2);
    var5 = 69;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/YouBar.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useYouBarGradientBackground'] = var4;
    var3['ThemedYouBar'] = var2;
    return var1;
})();