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
        var1 = arg1;
        var11 = var1.userId;
        var10 = var1.username;
        var1 = _closure1_slot35;
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
        var7 = _closure1_slot1;
        var9 = _closure1_slot2;
        var5 = 18;
        var5 = var9[var5];
        var7 = var7.bind(var4)(var5);
        var5 = {'userId': null, 'userName': null, 'defaultColor': 'mobile-text-heading-primary', 'variant': 'heading-md/semibold', 'lineClamp': 1, 'ellipsizeMode': 'tail', 'maxFontSizeMultiplier': 1.75};
        var5['userId'] = var11;
        var5['userName'] = var10;
        var10 = 1;
        var11 = {};
        var11['flexShrink'] = var10;
        var10 = new Array(1);
        var10[0] = var11;
        var5['style'] = var10;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot25;
        var7 = _closure1_slot0;
        var6 = 19;
        var6 = var9[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.ChevronSmallDownIcon;
        var6 = {'size': 'xs', 'color': 'mobile-text-heading-primary'};
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot56 = var1;
    var1 = function YouAvatarLarge(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var22 = var1.selectedGuildId;
            var9 = var1.transitionState;
            var _closure2_slot0 = var9;
            var8 = var1.cleanup;
            var _closure2_slot1 = var8;
            var5 = undefined;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var1 = _closure1_slot35;
            var10 = var1.bind(var5)();
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 20;
            var2 = var3[var1];
            var7 = var11.bind(var5)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot11;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var19 = var6.bind(var7)(var4, var2);
            var _closure2_slot2 = var19;
            var1 = var3[var1];
            var6 = var11.bind(var5)(var1);
            var4 = var6.useStateFromStores;
            var1 = _closure1_slot12;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var4.bind(var6)(var2, var1);
            var20 = 14;
            var1 = var3[var20];
            var1 = var11.bind(var5)(var1);
            var2 = var1.AVATAR_SIZE_MAP;
            var1 = _closure1_slot30;
            var2 = var2[var1];
            var1 = var3[var20];
            var1 = var11.bind(var5)(var1);
            var4 = var1.AVATAR_SIZE_MAP;
            var1 = _closure1_slot31;
            var1 = var4[var1];
            var7 = var2 / var1;
            var _closure2_slot3 = var7;
            var1 = var3[var20];
            var1 = var11.bind(var5)(var1);
            var2 = var1.AVATAR_SIZE_MAP;
            var1 = _closure1_slot31;
            var2 = var2[var1];
            var1 = var3[var20];
            var1 = var11.bind(var5)(var1);
            var4 = var1.AVATAR_SIZE_MAP;
            var1 = _closure1_slot30;
            var1 = var4[var1];
            var1 = var2 - var1;
            var16 = 2;
            var1 = var1 / var16;
            var _closure2_slot4 = var1;
            var2 = 21;
            var4 = var3[var2];
            var6 = var11.bind(var5)(var4);
            var4 = var6.useSharedValue;
            var15 = 22;
            var3 = var3[var15];
            var3 = var11.bind(var5)(var3);
            var3 = var3.TransitionStates;
            var11 = var3.MOUNTED;
            var3 = 0;
            if(!(var9 === var11)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 1;
case 2:
            var12 = var4.bind(var6)(var3);
            _closure2_slot5 = var12;
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = var3[var2];
            var6 = var11.bind(var5)(var4);
            var4 = var6.useSharedValue;
            var3 = var3[var15];
            var3 = var11.bind(var5)(var3);
            var3 = var3.TransitionStates;
            var11 = var3.MOUNTED;
            var24 = 1;
            var3 = var24;
            if(!(var9 !== var11)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var7;
case 4:
            var25 = var4.bind(var6)(var3);
            _closure2_slot6 = var25;
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = var3[var2];
            var6 = var11.bind(var5)(var4);
            var4 = var6.useSharedValue;
            var3 = var3[var15];
            var3 = var11.bind(var5)(var3);
            var3 = var3.TransitionStates;
            var3 = var3.MOUNTED;
            if(!(var9 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = -var1;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var11 = _closure1_slot17;
            var3 = -var11;
case 8:
            var23 = var4.bind(var6)(var3);
            _closure2_slot7 = var23;
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = var3[var2];
            var6 = var11.bind(var5)(var4);
            var4 = var6.useSharedValue;
            var3 = var3[var15];
            var3 = var11.bind(var5)(var3);
            var3 = var3.TransitionStates;
            var3 = var3.MOUNTED;
            if(!(var9 !== var3)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = -var1;
            _fun0001_ip = 11; continue _fun0001;
case 9:
            var11 = _closure1_slot17;
            var15 = -var11;
            var18 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var20];
            var11 = var18.bind(var5)(var11);
            var18 = var11.AVATAR_SIZE_MAP;
            var11 = _closure1_slot31;
            var18 = var18[var11];
            var11 = _closure1_slot16;
            var11 = var18 - var11;
            var11 = var11 / var16;
            var3 = var15 - var11;
case 11:
            var21 = var4.bind(var6)(var3);
            _closure2_slot8 = var21;
            var6 = _closure1_slot5;
            var4 = var6.useEffect;
            var3 = new Array(8);
            var3[0] = var9;
            var3[1] = var12;
            var3[2] = var8;
            var3[3] = var7;
            var3[4] = var1;
            var3[5] = var23;
            var3[6] = var21;
            var3[7] = var25;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 22;
                    var4 = var1[var7];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.ENTERED;
                    if(!(var4 !== var5)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.MOUNTED;
                    if(!(var4 !== var5)) { _fun0002_ip = 12; continue _fun0002 }
case 14:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.YEETED;
                    if(!(var4 !== var5)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 24;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.assertNever;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var6)(var4);
                    _fun0002_ip = 17; continue _fun0002;
case 15:
                    var9 = _closure2_slot5;
                    var6 = var9.set;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 23;
                    var5 = var8[var4];
                    var14 = var7.bind(var1)(var5);
                    var13 = var14.withSpring;
                    var17 = _closure1_slot18;
                    var11 = function t() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 21;
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
                    var10 = 21;
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
                    var9 = _closure2_slot6;
                    var6 = var9.set;
                    var5 = var8[var4];
                    var12 = var7.bind(var1)(var5);
                    var11 = var12.withSpring;
                    var10 = _closure2_slot3;
                    var5 = _closure1_slot18;
                    var5 = var11.bind(var12)(var10, var5);
                    var5 = var6.bind(var9)(var5);
                    var10 = _closure2_slot7;
                    var6 = var10.set;
                    var5 = var8[var4];
                    var12 = var7.bind(var1)(var5);
                    var11 = var12.withSpring;
                    var5 = _closure2_slot4;
                    var9 = -var5;
                    var5 = _closure1_slot18;
                    var5 = var11.bind(var12)(var9, var5);
                    var5 = var6.bind(var10)(var5);
                    var6 = _closure2_slot8;
                    var5 = var6.set;
                    var4 = var8[var4];
                    var8 = var7.bind(var1)(var4);
                    var7 = var8.withSpring;
                    var4 = _closure1_slot18;
                    var4 = var7.bind(var8)(var9, var4);
                    var4 = var5.bind(var6)(var4);
                    _fun0002_ip = 17; continue _fun0002;
case 12:
                    var7 = _closure2_slot5;
                    var6 = var7.set;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 23;
                    var4 = var10[var5];
                    var11 = var9.bind(var1)(var4);
                    var8 = var11.withSpring;
                    var4 = _closure1_slot18;
                    var12 = 1;
                    var4 = var8.bind(var11)(var12, var4);
                    var4 = var6.bind(var7)(var4);
                    var7 = _closure2_slot6;
                    var6 = var7.set;
                    var4 = var10[var5];
                    var11 = var9.bind(var1)(var4);
                    var8 = var11.withSpring;
                    var4 = _closure1_slot18;
                    var4 = var8.bind(var11)(var12, var4);
                    var4 = var6.bind(var7)(var4);
                    var7 = _closure2_slot7;
                    var6 = var7.set;
                    var4 = var10[var5];
                    var12 = var9.bind(var1)(var4);
                    var11 = var12.withSpring;
                    var4 = _closure1_slot17;
                    var8 = -var4;
                    var4 = _closure1_slot18;
                    var4 = var11.bind(var12)(var8, var4);
                    var4 = var6.bind(var7)(var4);
                    var4 = _closure2_slot8;
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
                    var5 = _closure1_slot31;
                    var9 = var9[var5];
                    var5 = _closure1_slot16;
                    var9 = var9 - var5;
                    var5 = 2;
                    var5 = var9 / var5;
                    var5 = var8 - var5;
                    var2 = _closure1_slot18;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = var3.bind(var4)(var2);
case 17:
                    return var1;
                }
            };
            var1 = var4.bind(var6)(var1, var3);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 25;
            var1 = var4[var1];
            var4 = var3.bind(var5)(var1);
            var3 = var4.useAvatarDecoration;
            var7 = null;
            var6 = var7 != var22;
            var1 = undefined;
            if(!var6) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var1 = var22;
case 18:
            var8 = var3.bind(var4)(var13, var1);
            var18 = _closure1_slot31;
            var6 = _closure1_slot5;
            var4 = var6.useMemo;
            var3 = new Array(1);
            var3[0] = var19;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure2_slot2;
                    var2 = _closure1_slot22;
                    var2 = var2.UNKNOWN;
                    if(!(var4 !== var2)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var2 = _closure2_slot2;
                    _fun0003_ip = 22; continue _fun0003;
case 20:
                    var1 = _closure1_slot22;
                    var2 = var1.OFFLINE;
case 22:
                    var1 = null;
                    if(!(var1 == var2)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var1 = undefined;
                    return var1;
case 23:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 14;
                    var1 = var10[var2];
                    var8 = undefined;
                    var1 = var9.bind(var8)(var1);
                    var4 = var1.AVATAR_SIZE_MAP;
                    var1 = _closure1_slot31;
                    var1 = var4[var1];
                    var3 = _closure1_slot28;
                    var4 = 2;
                    var5 = var3 / var4;
                    var2 = var10[var2];
                    var2 = var9.bind(var8)(var2);
                    var2 = var2.STATUS_PADDING;
                    var2 = var5 + var2;
                    var6 = var1 - var2;
                    var1 = 4;
                    var5 = var3 / var1;
                    var1 = {};
                    var3 = {};
                    var7 = 17;
                    var7 = var10[var7];
                    var7 = var9.bind(var8)(var7);
                    var7 = var7.CutoutShape;
                    var7 = var7.Circle;
                    var3['shape'] = var7;
                    var5 = var5 * var4;
                    var6 = var6 - var5;
                    var5 = -2;
                    var5 = var6 + var5;
                    var3['x'] = var5;
                    var3['y'] = var5;
                    var2 = var4 * var2;
                    var3['size'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['nativeCutouts'] = var2;
                    return var1;
                }
            };
            var15 = var4.bind(var6)(var1, var3);
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = var9[var2];
            var6 = var4.bind(var5)(var1);
            var3 = var6.useAnimatedStyle;
            var1 = function O() {
                var1 = {};
                var4 = {};
                var5 = _closure2_slot6;
                var3 = var5.get;
                var3 = var3.bind(var5)();
                var4['scale'] = var3;
                var3 = new Array(1);
                var3[0] = var4;
                var1['transform'] = var3;
                var4 = _closure2_slot7;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var1['left'] = var3;
                var4 = _closure2_slot8;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var1['top'] = var3;
                var3 = _closure2_slot5;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['opacity'] = var2;
                return var1;
            };
            var11 = {};
            var11['scale'] = var25;
            var11['left'] = var23;
            var11['top'] = var21;
            var11['opacity'] = var12;
            var1['__closure'] = var11;
            var11 = 7363023070833.0;
            var1['__workletHash'] = var11;
            var11 = _closure1_slot37;
            var1['__initData'] = var11;
            var11 = var3.bind(var6)(var1);
            var3 = 26;
            var1 = var9[var3];
            var23 = var4.bind(var5)(var1);
            var21 = var23.useToken;
            var6 = _closure1_slot1;
            var1 = 15;
            var12 = var9[var1];
            var12 = var6.bind(var5)(var12);
            var12 = var12.colors;
            var12 = var12.MOBILE_FLOATINGBAR_BACKGROUND;
            var30 = var21.bind(var23)(var12);
            var3 = var9[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useToken;
            var1 = var9[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.colors;
            var1 = var1.BORDER_SUBTLE;
            var23 = var3.bind(var4)(var1);
            var3 = var7 == var13;
            var1 = null;
            if(var3) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var4 = _closure1_slot26;
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = var6[var2];
            var2 = var9.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var12 = var10.avatarShadow;
            var10 = new Array(3);
            var10[0] = var12;
            var12 = {};
            var21 = 'absolute';
            var12['position'] = var21;
            var26 = _closure1_slot0;
            var25 = var6[var20];
            var25 = var26.bind(var5)(var25);
            var25 = var25.AVATAR_SIZE_MAP;
            var25 = var25[var18];
            var12['width'] = var25;
            var25 = var6[var20];
            var25 = var26.bind(var5)(var25);
            var25 = var25.AVATAR_SIZE_MAP;
            var25 = var25[var18];
            var12['height'] = var25;
            var10[1] = var12;
            var10[2] = var11;
            var2['style'] = var10;
            var25 = _closure1_slot25;
            var12 = 17;
            var6 = var6[var12];
            var11 = var9.bind(var5)(var6);
            var6 = {};
            var10 = var7 == var15;
            var9 = undefined;
            if(var10) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var9 = var15.nativeCutouts;
case 27:
            var6['cutouts'] = var9;
            var26 = {};
            var26['position'] = var21;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var27 = var9[var20];
            var27 = var10.bind(var5)(var27);
            var27 = var27.AVATAR_SIZE_MAP;
            var27 = var27[var18];
            var26['width'] = var27;
            var27 = var9[var20];
            var27 = var10.bind(var5)(var27);
            var27 = var27.AVATAR_SIZE_MAP;
            var27 = var27[var18];
            var26['height'] = var27;
            var6['style'] = var26;
            var28 = _closure1_slot25;
            var27 = _closure1_slot6;
            var26 = {};
            var29 = {};
            var31 = var9[var20];
            var31 = var10.bind(var5)(var31);
            var31 = var31.AVATAR_SIZE_MAP;
            var31 = var31[var18];
            var29['width'] = var31;
            var31 = var9[var20];
            var31 = var10.bind(var5)(var31);
            var31 = var31.AVATAR_SIZE_MAP;
            var31 = var31[var18];
            var29['height'] = var31;
            var31 = var9[var20];
            var31 = var10.bind(var5)(var31);
            var31 = var31.AVATAR_SIZE_MAP;
            var31 = var31[var18];
            var31 = var31 / var16;
            var29['borderRadius'] = var31;
            var29['backgroundColor'] = var30;
            var26['style'] = var29;
            var26 = var28.bind(var5)(var27, var26);
            var6['children'] = var26;
            var11 = var25.bind(var5)(var11, var6);
            var6 = new Array(4);
            var6[0] = var11;
            var11 = _closure1_slot25;
            var9 = var9[var20];
            var9 = var10.bind(var5)(var9);
            var10 = var9.Avatar;
            var9 = {};
            var9['user'] = var13;
            var25 = var7 != var22;
            var13 = undefined;
            if(!var25) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var13 = var22;
case 29:
            var9['guildId'] = var13;
            var9['size'] = var18;
            var13 = false;
            var9['animate'] = var13;
            var22 = true;
            var9['needsOffscreenAlphaCompositing'] = var22;
            var22 = _closure1_slot22;
            var22 = var22.UNKNOWN;
            if(!(var19 === var22)) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var22 = _closure1_slot22;
            var19 = var22.OFFLINE;
case 31:
            var9['status'] = var19;
            var19 = _closure1_slot28;
            var9['statusSizeOverride'] = var19;
            var9['cutout'] = var15;
            var19 = {'right': 4294967295, 'bottom': 4294967295};
            var9['statusStyle'] = var19;
            var9 = var11.bind(var5)(var10, var9);
            var6[1] = var9;
            var11 = _closure1_slot25;
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var12];
            var10 = var10.bind(var5)(var9);
            var9 = {};
            var19 = var7 == var15;
            var12 = undefined;
            if(var19) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var22 = var15.nativeCutouts;
            var19 = var7 == var22;
            var12 = undefined;
            if(var19) { _fun0001_ip = 33; continue _fun0001 }
case 35:
            var19 = var22.map;
            var17 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var7 = var1;
                var6 = var2;
                var3 = copyDataProperties(var7, var6);
                var4 = var2.x;
                var3 = 1;
                var5 = var4 + var3;
                var4 = 'x';
                var1[3] = var5;
                var2 = var2.y;
                var3 = var2 + var3;
                var2 = 'y';
                var1[1] = var3;
                return var1;
            };
            var12 = var19.bind(var22)(var17);
case 33:
            var9['cutouts'] = var12;
            var12 = {'position': 'absolute', 'top': 4294967295, 'left': 4294967295};
            var26 = _closure1_slot0;
            var25 = _closure1_slot2;
            var17 = var25[var20];
            var17 = var26.bind(var5)(var17);
            var17 = var17.AVATAR_SIZE_MAP;
            var17 = var17[var18];
            var17 = var17 + var16;
            var12['width'] = var17;
            var17 = var25[var20];
            var17 = var26.bind(var5)(var17);
            var17 = var17.AVATAR_SIZE_MAP;
            var17 = var17[var18];
            var17 = var17 + var16;
            var12['height'] = var17;
            var9['style'] = var12;
            var12 = 'none';
            var9['pointerEvents'] = var12;
            var19 = _closure1_slot25;
            var17 = _closure1_slot6;
            var12 = {};
            var22 = {};
            var27 = var25[var20];
            var27 = var26.bind(var5)(var27);
            var27 = var27.AVATAR_SIZE_MAP;
            var27 = var27[var18];
            var27 = var27 + var16;
            var22['width'] = var27;
            var27 = var25[var20];
            var27 = var26.bind(var5)(var27);
            var27 = var27.AVATAR_SIZE_MAP;
            var27 = var27[var18];
            var27 = var27 + var16;
            var22['height'] = var27;
            var25 = var25[var20];
            var25 = var26.bind(var5)(var25);
            var25 = var25.AVATAR_SIZE_MAP;
            var25 = var25[var18];
            var25 = var25 + var16;
            var25 = var25 / var16;
            var22['borderRadius'] = var25;
            var22['borderWidth'] = var24;
            var22['borderColor'] = var23;
            var12['style'] = var22;
            var12 = var19.bind(var5)(var17, var12);
            var9['children'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var6[2] = var9;
            var7 = var7 != var8;
            if(!var7) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var11 = _closure1_slot25;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 27;
            var9 = var12[var9];
            var10 = var10.bind(var5)(var9);
            var9 = {};
            var19 = _closure1_slot0;
            var17 = 28;
            var14 = var12[var17];
            var22 = var19.bind(var5)(var14);
            var14 = var22.getDecorationSizeForAvatarSize;
            var14 = var14.bind(var22)(var18);
            var9['size'] = var14;
            var9['avatarDecoration'] = var8;
            var14 = {};
            var14['position'] = var21;
            var21 = var12[var17];
            var22 = var19.bind(var5)(var21);
            var21 = var22.getDecorationSizeForAvatarSize;
            var22 = var21.bind(var22)(var18);
            var21 = var12[var20];
            var21 = var19.bind(var5)(var21);
            var21 = var21.AVATAR_SIZE_MAP;
            var21 = var21[var18];
            var21 = var22 - var21;
            var21 = -var21;
            var21 = var21 / var16;
            var14['top'] = var21;
            var21 = var12[var17];
            var22 = var19.bind(var5)(var21);
            var21 = var22.getDecorationSizeForAvatarSize;
            var22 = var21.bind(var22)(var18);
            var21 = var12[var20];
            var21 = var19.bind(var5)(var21);
            var21 = var21.AVATAR_SIZE_MAP;
            var21 = var21[var18];
            var21 = var22 - var21;
            var21 = -var21;
            var21 = var21 / var16;
            var14['left'] = var21;
            var9['decorationStyle'] = var14;
            var9['animate'] = var13;
            var13 = var12[var17];
            var14 = var19.bind(var5)(var13);
            var13 = var14.getDecorationCutoutForAvatarCutout;
            var17 = var12[var17];
            var21 = var19.bind(var5)(var17);
            var17 = var21.getDecorationSizeForAvatarSize;
            var17 = var17.bind(var21)(var18);
            var12 = var12[var20];
            var12 = var19.bind(var5)(var12);
            var12 = var12.AVATAR_SIZE_MAP;
            var12 = var12[var18];
            var12 = var17 - var12;
            var12 = var12 / var16;
            var12 = var13.bind(var14)(var15, var12);
            var9['cutout'] = var12;
            var8 = var8.asset;
            var7 = var11.bind(var5)(var10, var9, var8);
case 36:
            var6[3] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 25:
            return var1;
        }
    };
    var _closure1_slot57 = var1;
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
            var1 = 20;
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
            var1 = 25;
            var1 = var4[var1];
            var6 = var2.bind(var5)(var1);
            var4 = var6.useAvatarDecoration;
            var1 = null;
            var7 = var1 != var13;
            var2 = undefined;
            if(!var7) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var2 = var13;
case 38:
            var12 = var4.bind(var6)(var9, var2);
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 21;
            var4 = var16[var2];
            var7 = var15.bind(var5)(var4);
            var6 = var7.useSharedValue;
            var4 = 22;
            var4 = var16[var4];
            var4 = var15.bind(var5)(var4);
            var4 = var4.TransitionStates;
            var15 = var4.MOUNTED;
            var4 = 0;
            if(!(var14 === var15)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var4 = 1;
case 40:
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
                    var7 = 22;
                    var4 = var1[var7];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.ENTERED;
                    if(!(var4 !== var5)) { _fun0005_ip = 42; continue _fun0005 }
case 13:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.MOUNTED;
                    if(!(var4 !== var5)) { _fun0005_ip = 42; continue _fun0005 }
case 14:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.YEETED;
                    if(!(var4 !== var5)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 24;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.assertNever;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var6)(var4);
                    _fun0005_ip = 43; continue _fun0005;
case 15:
                    var6 = _closure2_slot2;
                    var5 = var6.set;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 23;
                    var4 = var13[var4];
                    var11 = var12.bind(var1)(var4);
                    var10 = var11.withSpring;
                    var16 = _closure1_slot18;
                    var8 = function t() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 21;
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
                    var7 = 21;
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
                    _fun0005_ip = 43; continue _fun0005;
case 42:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 23;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.withSpring;
                    var5 = _closure1_slot18;
                    var2 = 1;
                    var2 = var6.bind(var7)(var2, var5);
                    var2 = var3.bind(var4)(var2);
case 43:
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var3, var4);
            if(!(var1 != var9)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 14;
            var3 = var14[var6];
            var3 = var7.bind(var5)(var3);
            var4 = var3.AVATAR_SIZE_MAP;
            var3 = _closure1_slot30;
            var4 = var4[var3];
            var3 = var14[var6];
            var3 = var7.bind(var5)(var3);
            var8 = var3.AVATAR_SIZE_MAP;
            var3 = _closure1_slot29;
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
            if(!var14) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var9 = var13;
case 46:
            var6['guildId'] = var9;
            var9 = _closure1_slot30;
            var6['size'] = var9;
            var9 = false;
            var6['animate'] = var9;
            var9 = true;
            var6['needsOffscreenAlphaCompositing'] = var9;
            var6['avatarDecoration'] = var12;
            var12 = _closure1_slot22;
            var12 = var12.UNKNOWN;
            if(!(var10 === var12)) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var11 = _closure1_slot22;
            var10 = var11.OFFLINE;
case 48:
            var6['status'] = var10;
            var6['autoStatusCutout'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 44:
            return var1;
        }
    };
    var _closure1_slot58 = var1;
    var1 = function YouAvatarAnimated(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var1 = var2.isLargeAvatar;
            var _closure2_slot0 = var1;
            var3 = var2.onPress;
            var _closure2_slot1 = var3;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 20;
            var2 = var14[var2];
            var5 = undefined;
            var7 = var13.bind(var5)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot12;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var6.bind(var7)(var4, var2);
            var7 = _closure1_slot5;
            var6 = var7.useState;
            var4 = false;
            var7 = var6.bind(var7)(var4);
            var6 = _closure1_slot4;
            var4 = 2;
            var6 = var6.bind(var5)(var7, var4);
            var4 = 0;
            var10 = var6[var4];
            var _closure2_slot2 = var10;
            var4 = 1;
            var4 = var6[var4];
            var _closure2_slot3 = var4;
            var9 = 21;
            var4 = var14[var9];
            var7 = var13.bind(var5)(var4);
            var6 = var7.useAnimatedStyle;
            var4 = function l() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = {};
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 23;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.withSpring;
                    var7 = _closure2_slot2;
                    var4 = 1;
                    if(!var7) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                    var4 = 0.98;
case 50:
                    var2 = _closure1_slot18;
                    var2 = var5.bind(var6)(var4, var2);
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var8 = {};
            var11 = 23;
            var11 = var14[var11];
            var11 = var13.bind(var5)(var11);
            var11 = var11.withSpring;
            var8['withSpring'] = var11;
            var8['isAvatarPressed'] = var10;
            var10 = _closure1_slot18;
            var8['YOU_BAR_SPRING_CONFIG'] = var10;
            var4['__closure'] = var8;
            var8 = 3547333332162.0;
            var4['__workletHash'] = var8;
            var8 = _closure1_slot39;
            var4['__initData'] = var8;
            var19 = var6.bind(var7)(var4);
            var7 = _closure1_slot5;
            var6 = var7.useCallback;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
case 52:
                    var3 = _closure2_slot3;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var10 = var6.bind(var7)(var3, var4);
            var7 = _closure1_slot5;
            var6 = var7.useCallback;
            var4 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var4 = 29;
                        var6 = var2[var4];
                        var3 = undefined;
                        var7 = var5.bind(var3)(var6);
                        var6 = var7.triggerHapticFeedback;
                        var4 = var2[var4];
                        var4 = var5.bind(var3)(var4);
                        var4 = var4.HapticFeedbackTypes;
                        var4 = var4.SOFT;
                        var4 = var6.bind(var7)(var4);
                        var4 = 31;
                        var4 = var2[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = 30;
                        var4 = var2[var4];
                        var2 = var2.paths;
                        var2 = var5.bind(var3)(var4, var2);
                        SaveGenerator(address=101);
case 56:
                        return var2;
case 57:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                        var4 = var2.openUserSettings;
                        var4 = var4.bind(var3)();
                        var5 = _closure2_slot3;
                        var4 = false;
                        var4 = var5.bind(var3)(var4);
                        return var3;
case 58:
                        return var2;
case 54:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = new Array(0);
            var3 = var6.bind(var7)(var4, var3);
            var _closure2_slot4 = var3;
            var7 = _closure1_slot5;
            var6 = var7.useMemo;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 32;
                var2 = var10[var2];
                var8 = undefined;
                var2 = var9.bind(var8)(var2);
                var3 = var2.Gesture;
                var2 = var3.LongPress;
                var5 = var2.bind(var3)();
                var3 = var5.shouldCancelWhenOutside;
                var2 = false;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onBegin;
                var2 = function o() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 21;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot3;
                    var3 = var3.bind(var4)(var2);
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var11 = {};
                var7 = 21;
                var6 = var10[var7];
                var6 = var9.bind(var8)(var6);
                var6 = var6.runOnJS;
                var11['runOnJS'] = var6;
                var6 = _closure2_slot3;
                var11['setIsAvatarPressed'] = var6;
                var2['__closure'] = var11;
                var11 = 17247851151077.0;
                var2['__workletHash'] = var11;
                var11 = _closure1_slot42;
                var2['__initData'] = var11;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onStart;
                var2 = function r() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 21;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot4;
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var11 = {};
                var13 = var10[var7];
                var13 = var9.bind(var8)(var13);
                var13 = var13.runOnJS;
                var11['runOnJS'] = var13;
                var12 = _closure2_slot4;
                var11['handleAvatarLongPress'] = var12;
                var2['__closure'] = var11;
                var11 = 1646557285202.0;
                var2['__workletHash'] = var11;
                var11 = _closure1_slot41;
                var2['__initData'] = var11;
                var3 = var3.bind(var5)(var2);
                var2 = var3.onFinalize;
                var1 = function t() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 21;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot3;
                    var3 = var3.bind(var4)(var2);
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var5 = {};
                var7 = var10[var7];
                var7 = var9.bind(var8)(var7);
                var7 = var7.runOnJS;
                var5['runOnJS'] = var7;
                var5['setIsAvatarPressed'] = var6;
                var1['__closure'] = var5;
                var5 = 2587194442764.0;
                var1['__workletHash'] = var5;
                var4 = _closure1_slot40;
                var1['__initData'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var7)(var3, var4);
            var8 = _closure1_slot5;
            var7 = var8.useCallback;
            var4 = function(arg1, arg2, arg3, arg4) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var5 = _closure1_slot25;
                    var2 = arg2;
                    if(var2) { _fun0010_ip = 60; continue _fun0010 }
case 53:
                    var4 = _closure1_slot58;
                    _fun0010_ip = 52; continue _fun0010;
case 60:
                    var4 = _closure1_slot57;
case 52:
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
            var15 = var7.bind(var8)(var4, var3);
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
            var17 = var4.bind(var7)(var1, var3);
            var1 = null;
            var2 = var1 == var2;
            if(var2) { _fun0006_ip = 61; continue _fun0006 }
case 62:
            var4 = _closure1_slot25;
            var13 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 32;
            var2 = var18[var2];
            var2 = var13.bind(var5)(var2);
            var3 = var2.GestureDetector;
            var2 = {};
            var2['gesture'] = var6;
            var8 = _closure1_slot25;
            var7 = _closure1_slot7;
            var6 = {};
            var6['onPress'] = var10;
            var10 = function onPressIn() {
                var3 = _closure2_slot3;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var6['onPressIn'] = var10;
            var10 = function onPressOut() {
                var3 = _closure2_slot3;
                var2 = undefined;
                var1 = false;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var6['onPressOut'] = var10;
            var10 = {};
            var11 = 'transparent';
            var10['color'] = var11;
            var6['android_ripple'] = var10;
            var11 = _closure1_slot25;
            var10 = _closure1_slot1;
            var9 = var18[var9];
            var9 = var10.bind(var5)(var9);
            var10 = var9.View;
            var9 = {};
            var20 = {};
            var14 = 14;
            var21 = var18[var14];
            var21 = var13.bind(var5)(var21);
            var22 = var21.AVATAR_SIZE_MAP;
            var21 = _closure1_slot29;
            var21 = var22[var21];
            var20['height'] = var21;
            var14 = var18[var14];
            var14 = var13.bind(var5)(var14);
            var21 = var14.AVATAR_SIZE_MAP;
            var14 = _closure1_slot29;
            var14 = var21[var14];
            var20['width'] = var14;
            var14 = 'relative';
            var20['position'] = var14;
            var14 = new Array(2);
            var14[0] = var20;
            var14[1] = var19;
            var9['style'] = var14;
            var14 = _closure1_slot25;
            var12 = 22;
            var12 = var18[var12];
            var12 = var13.bind(var5)(var12);
            var13 = var12.TransitionGroup;
            var12 = {};
            var12['items'] = var17;
            var16 = function getItemKey(arg1) {
                var2 = arg1;
                var1 = var2.toString;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12['getItemKey'] = var16;
            var12['renderItem'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 61:
            return var1;
        }
    };
    var _closure1_slot59 = var1;
    var1 = function DefaultAvatar() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = _closure1_slot35;
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
            var3 = var3.MOBILE_FLOATINGBAR_BACKGROUND;
            var18 = var5.bind(var6)(var3);
            var11 = 14;
            var1 = var1[var11];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getStatusSize;
            var1 = _closure1_slot29;
            var1 = var2.bind(var3)(var1);
            var2 = null;
            var2 = var2 != var1;
            var10 = 0;
            if(!var2) { _fun0011_ip = 63; continue _fun0011 }
case 64:
            var10 = var1;
case 63:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = var6[var11];
            var1 = var7.bind(var4)(var1);
            var2 = var1.AVATAR_SIZE_MAP;
            var1 = _closure1_slot29;
            var21 = var2[var1];
            var2 = 2;
            var3 = var10 / var2;
            var1 = var6[var11];
            var1 = var7.bind(var4)(var1);
            var1 = var1.STATUS_PADDING;
            var1 = var3 + var1;
            var5 = var21 - var1;
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
            var12 = _closure1_slot29;
            var12 = var13[var12];
            var8['height'] = var12;
            var12 = var6[var11];
            var12 = var7.bind(var4)(var12);
            var13 = var12.AVATAR_SIZE_MAP;
            var12 = _closure1_slot29;
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
            var15 = _closure1_slot26;
            var14 = _closure1_slot6;
            var13 = {};
            var17 = var19.placeholderAvatar;
            var16 = new Array(2);
            var16[0] = var17;
            var17 = {};
            var17['width'] = var21;
            var17['height'] = var21;
            var17['backgroundColor'] = var18;
            var16[1] = var17;
            var13['style'] = var16;
            var18 = _closure1_slot25;
            var17 = _closure1_slot6;
            var16 = {};
            var19 = var19.placeholderAvatarBackground;
            var16['style'] = var19;
            var17 = var18.bind(var4)(var17, var16);
            var16 = new Array(2);
            var16[0] = var17;
            var19 = _closure1_slot25;
            var17 = 33;
            var17 = var6[var17];
            var17 = var7.bind(var4)(var17);
            var18 = var17.ReactionIcon;
            var17 = {'size': 'custom', 'style': null, 'color': 'background-mod-strong'};
            var20 = {};
            var20['width'] = var21;
            var20['height'] = var21;
            var17['style'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var16[1] = var17;
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
    var _closure1_slot60 = var1;
    var1 = function DefaultAvatarLarge() {
        var1 = _closure1_slot35;
        var4 = undefined;
        var22 = var1.bind(var4)();
        var10 = _closure1_slot0;
        var14 = _closure1_slot2;
        var1 = 26;
        var1 = var14[var1];
        var3 = var10.bind(var4)(var1);
        var2 = var3.useToken;
        var11 = _closure1_slot1;
        var1 = 15;
        var1 = var14[var1];
        var1 = var11.bind(var4)(var1);
        var1 = var1.colors;
        var1 = var1.MOBILE_FLOATINGBAR_BACKGROUND;
        var21 = var2.bind(var3)(var1);
        var13 = _closure1_slot28;
        var9 = 14;
        var1 = var14[var9];
        var1 = var10.bind(var4)(var1);
        var2 = var1.AVATAR_SIZE_MAP;
        var1 = _closure1_slot31;
        var23 = var2[var1];
        var20 = 2;
        var2 = var13 / var20;
        var1 = var14[var9];
        var1 = var10.bind(var4)(var1);
        var1 = var1.STATUS_PADDING;
        var1 = var2 + var1;
        var3 = var23 - var1;
        var2 = 4;
        var2 = var13 / var2;
        var17 = {};
        var8 = 17;
        var5 = var14[var8];
        var5 = var10.bind(var4)(var5);
        var5 = var5.CutoutShape;
        var5 = var5.Circle;
        var17['shape'] = var5;
        var2 = var2 * var20;
        var3 = var3 - var2;
        var2 = -2;
        var2 = var3 + var2;
        var17['x'] = var2;
        var17['y'] = var2;
        var1 = var20 * var1;
        var17['size'] = var1;
        var3 = _closure1_slot25;
        var2 = _closure1_slot6;
        var1 = {};
        var5 = {};
        var6 = var14[var9];
        var6 = var10.bind(var4)(var6);
        var7 = var6.AVATAR_SIZE_MAP;
        var6 = _closure1_slot29;
        var6 = var7[var6];
        var5['height'] = var6;
        var6 = var14[var9];
        var6 = var10.bind(var4)(var6);
        var7 = var6.AVATAR_SIZE_MAP;
        var6 = _closure1_slot29;
        var6 = var7[var6];
        var5['width'] = var6;
        var6 = 'relative';
        var5['position'] = var6;
        var1['style'] = var5;
        var7 = _closure1_slot26;
        var6 = _closure1_slot6;
        var5 = {};
        var16 = var22.avatarShadow;
        var15 = new Array(2);
        var15[0] = var16;
        var16 = {};
        var18 = 'absolute';
        var16['position'] = var18;
        var16['width'] = var23;
        var16['height'] = var23;
        var18 = _closure1_slot17;
        var19 = -var18;
        var18 = var14[var9];
        var18 = var10.bind(var4)(var18);
        var24 = var18.AVATAR_SIZE_MAP;
        var18 = _closure1_slot31;
        var24 = var24[var18];
        var18 = _closure1_slot16;
        var18 = var24 - var18;
        var18 = var18 / var20;
        var18 = var19 - var18;
        var16['top'] = var18;
        var18 = _closure1_slot17;
        var18 = -var18;
        var16['left'] = var18;
        var15[1] = var16;
        var5['style'] = var15;
        var15 = _closure1_slot25;
        var8 = var14[var8];
        var11 = var11.bind(var4)(var8);
        var8 = {};
        var16 = new Array(1);
        var16[0] = var17;
        var8['cutouts'] = var16;
        var18 = _closure1_slot26;
        var17 = _closure1_slot6;
        var16 = {};
        var20 = var22.placeholderAvatar;
        var19 = new Array(2);
        var19[0] = var20;
        var20 = {};
        var20['width'] = var23;
        var20['height'] = var23;
        var20['backgroundColor'] = var21;
        var19[1] = var20;
        var16['style'] = var19;
        var21 = _closure1_slot25;
        var20 = _closure1_slot6;
        var19 = {};
        var22 = var22.placeholderAvatarBackground;
        var19['style'] = var22;
        var20 = var21.bind(var4)(var20, var19);
        var19 = new Array(2);
        var19[0] = var20;
        var22 = _closure1_slot25;
        var20 = 33;
        var20 = var14[var20];
        var20 = var10.bind(var4)(var20);
        var21 = var20.ReactionIcon;
        var20 = {'size': 'custom', 'style': null, 'color': 'background-mod-strong'};
        var23 = {};
        var24 = var14[var9];
        var24 = var10.bind(var4)(var24);
        var25 = var24.AVATAR_SIZE_MAP;
        var24 = _closure1_slot29;
        var24 = var25[var24];
        var23['width'] = var24;
        var24 = var14[var9];
        var24 = var10.bind(var4)(var24);
        var25 = var24.AVATAR_SIZE_MAP;
        var24 = _closure1_slot29;
        var24 = var25[var24];
        var23['height'] = var24;
        var20['style'] = var23;
        var20 = var22.bind(var4)(var21, var20);
        var19[1] = var20;
        var16['children'] = var19;
        var16 = var18.bind(var4)(var17, var16);
        var8['children'] = var16;
        var11 = var15.bind(var4)(var11, var8);
        var8 = new Array(2);
        var8[0] = var11;
        var11 = _closure1_slot25;
        var9 = var14[var9];
        var9 = var10.bind(var4)(var9);
        var10 = var9.Status;
        var9 = {'size': null, 'status': null, 'isMobileOnline': false, 'isVROnline': false, 'streaming': false};
        var9['size'] = var13;
        var12 = _closure1_slot22;
        var12 = var12.OFFLINE;
        var9['status'] = var12;
        var12 = {'position': 'absolute', 'right': 4294967295, 'bottom': 4294967295};
        var9['style'] = var12;
        var9 = var11.bind(var4)(var10, var9);
        var8[1] = var9;
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot61 = var1;
    var1 = function YouName(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var8 = var1.user;
            var9 = var1.username;
            var1 = _closure1_slot35;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 20;
            var1 = var3[var1];
            var7 = var2.bind(var4)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot11;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var16 = var6.bind(var7)(var5, var1);
            var1 = 34;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useCustomStatusActivity;
            var17 = var1.bind(var2)();
            var3 = _closure1_slot26;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var13.userText;
            var1['style'] = var5;
            var7 = _closure1_slot25;
            var6 = _closure1_slot56;
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
            var10 = var15 == var17;
            var9 = undefined;
            if(var10) { _fun0012_ip = 65; continue _fun0012 }
case 66:
            var9 = var17.emoji;
case 65:
            var9 = var15 != var9;
            var10 = null;
            if(!var9) { _fun0012_ip = 67; continue _fun0012 }
case 68:
            var12 = _closure1_slot25;
            var11 = _closure1_slot1;
            var18 = _closure1_slot2;
            var9 = 35;
            var9 = var18[var9];
            var11 = var11.bind(var4)(var9);
            var9 = {};
            var18 = 16;
            var9['size'] = var18;
            var13 = var13.statusEmoji;
            var9['style'] = var13;
            var13 = var17.emoji;
            var9['emoji'] = var13;
            var10 = var12.bind(var4)(var11, var9);
case 67:
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot25;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 36;
            var10 = var13[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-xs/medium', 'color': 'text-muted', 'lineClamp': 1, 'ellipsizeMode': 'tail', 'maxFontSizeMultiplier': 1.75};
            var18 = 1;
            var13 = {};
            var13['flexShrink'] = var18;
            var10['style'] = var13;
            var18 = var15 == var17;
            var13 = undefined;
            if(var18) { _fun0012_ip = 69; continue _fun0012 }
case 70:
            var13 = var17.state;
case 69:
            if(!(var15 == var13)) { _fun0012_ip = 71; continue _fun0012 }
case 43:
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var14 = 37;
            var14 = var17[var14];
            var15 = var15.bind(var4)(var14);
            var14 = var15.humanizeStatus;
            var13 = var14.bind(var15)(var16);
case 71:
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
    var _closure1_slot62 = var1;
    var4 = function useYouBarGradientBackground() {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 20;
            var2 = var7[var2];
            var6 = undefined;
            var8 = var4.bind(var6)(var2);
            var5 = var8.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot8;
                var1 = var1.gradientPreset;
                return var1;
            };
            var3 = var5.bind(var8)(var3, var2);
            var2 = 26;
            var2 = var7[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.useToken;
            var5 = _closure1_slot1;
            var1 = 15;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.colors;
            var1 = var1.MOBILE_FLOATINGBAR_BACKGROUND_SCRIM;
            var2 = var2.bind(var4)(var1);
            var1 = null;
            var3 = var1 != var3;
            if(!var3) { _fun0013_ip = 72; continue _fun0013 }
case 73:
            var1 = var2;
case 72:
            return var1;
        }
    };
    var _closure1_slot63 = var4;
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
    var19 = 1;
    var5 = var7[var19];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var15 = 2;
    var8 = var7[var15];
    var5 = metroImportAll;
    var8 = var5.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.View;
    var _closure1_slot6 = var9;
    var9 = var5.Pressable;
    var _closure1_slot7 = var9;
    var11 = var5.PixelRatio;
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
    var5 = var6.bind(var1)(var5);
    var9 = var5.useConnectionBannerHeight;
    var _closure1_slot13 = var9;
    var9 = var5.useYouBarBottomMargin;
    var _closure1_slot14 = var9;
    var9 = var5.YOU_BAR_GRADIENT_EXTRA_HEIGHT;
    var _closure1_slot15 = var9;
    var14 = var5.YOU_BAR_HEIGHT;
    var _closure1_slot16 = var14;
    var17 = var5.YOU_BAR_PADDING;
    var _closure1_slot17 = var17;
    var9 = var5.YOU_BAR_SPRING_CONFIG;
    var _closure1_slot18 = var9;
    var9 = var5.useYouBarHorizontalMargin;
    var _closure1_slot19 = var9;
    var5 = var5.useYouBarTotalHeight;
    var _closure1_slot20 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.ME;
    var _closure1_slot21 = var9;
    var5 = var5.StatusTypes;
    var _closure1_slot22 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ContentDismissActionType;
    var _closure1_slot23 = var5;
    var16 = 12;
    var5 = var7[var16];
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
    var5 = var11.roundToNearestPixel;
    var9 = 14;
    var5 = var5.bind(var11)(var9);
    var _closure1_slot28 = var5;
    var5 = var7[var9];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AvatarSizes;
    var11 = var5.REFRESH_MEDIUM_32;
    var _closure1_slot29 = var11;
    var5 = var7[var9];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AvatarSizes;
    var12 = var5.NORMAL;
    var _closure1_slot30 = var12;
    var5 = var7[var9];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AvatarSizes;
    var18 = var5.YOUBAR_60;
    var _closure1_slot31 = var18;
    var5 = var7[var9];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AVATAR_SIZE_MAP;
    var5 = var5[var18];
    var16 = var5 + var16;
    var5 = var7[var9];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AVATAR_SIZE_MAP;
    var5 = var5[var11];
    var5 = var5 + var17;
    var5 = var16 - var5;
    var _closure1_slot32 = var5;
    var5 = var7[var9];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AVATAR_SIZE_MAP;
    var5 = var5[var12];
    var5 = var5 + var10;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var9 = var9.AVATAR_SIZE_MAP;
    var9 = var9[var11];
    var9 = var9 + var17;
    var5 = var5 + var10;
    var5 = var5 - var9;
    var _closure1_slot33 = var5;
    var5 = {};
    var12 = 15;
    var9 = var7[var12];
    var9 = var13.bind(var1)(var9);
    var9 = var9.space;
    var9 = var9.PX_16;
    var5['top'] = var9;
    var9 = var7[var12];
    var9 = var13.bind(var1)(var9);
    var9 = var9.space;
    var9 = var9.PX_16;
    var5['bottom'] = var9;
    var9 = var7[var12];
    var9 = var13.bind(var1)(var9);
    var9 = var9.space;
    var9 = var9.PX_16;
    var5['left'] = var9;
    var9 = var7[var12];
    var9 = var13.bind(var1)(var9);
    var9 = var9.space;
    var9 = var9.PX_16;
    var5['right'] = var9;
    var _closure1_slot34 = var5;
    var16 = 16;
    var5 = var7[var16];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var11 = {};
    var18 = var7[var12];
    var18 = var13.bind(var1)(var18);
    var18 = var18.modules;
    var18 = var18.mobile;
    var18 = var18.YOU_BAR_BORDER_RADIUS;
    var11['borderRadius'] = var18;
    var5['youBorderRadius'] = var11;
    var11 = {'position': 'absolute', 'left': 0, 'right': 0, 'bottom': 0, 'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': 'transparent'};
    var18 = 'row';
    var20 = var7[var12];
    var20 = var13.bind(var1)(var20);
    var20 = var20.shadows;
    var22 = var20.SHADOW_HIGH;
    var23 = var11;
    var20 = copyDataProperties(var23, var22);
    var5['youRow'] = var11;
    var11 = {};
    var11['borderWidth'] = var19;
    var20 = var7[var12];
    var20 = var13.bind(var1)(var20);
    var20 = var20.colors;
    var20 = var20.BORDER_MUTED;
    var11['borderColor'] = var20;
    var20 = var7[var12];
    var20 = var13.bind(var1)(var20);
    var20 = var20.modules;
    var20 = var20.mobile;
    var20 = var20.YOU_BAR_BORDER_RADIUS;
    var11['borderRadius'] = var20;
    var20 = var14 / var15;
    var11['borderTopLeftRadius'] = var20;
    var20 = var14 / var15;
    var11['borderBottomLeftRadius'] = var20;
    var5['youRowFloating'] = var11;
    var11 = {'flexDirection': 'row', 'gap': 8};
    var5['youRowRight'] = var11;
    var11 = {};
    var11['flex'] = var19;
    var19 = var7[var12];
    var19 = var13.bind(var1)(var19);
    var19 = var19.space;
    var19 = var19.PX_12;
    var11['marginRight'] = var19;
    var19 = var7[var12];
    var19 = var13.bind(var1)(var19);
    var19 = var19.modules;
    var19 = var19.mobile;
    var19 = var19.YOU_BAR_BORDER_RADIUS;
    var11['borderRadius'] = var19;
    var5['youPressable'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center'};
    var19 = var7[var12];
    var19 = var13.bind(var1)(var19);
    var19 = var19.modules;
    var19 = var19.mobile;
    var19 = var19.YOU_BAR_BORDER_RADIUS;
    var11['borderRadius'] = var19;
    var5['youButton'] = var11;
    var11 = {'flexDirection': 'column', 'justifyContent': 'center', 'height': '100%', 'gap': 1};
    var5['userText'] = var11;
    var11 = {};
    var11['flexDirection'] = var18;
    var18 = var7[var12];
    var18 = var13.bind(var1)(var18);
    var18 = var18.space;
    var18 = var18.PX_4;
    var11['gap'] = var18;
    var5['statusRow'] = var11;
    var11 = {'width': 16, 'height': 16};
    var5['statusEmoji'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center', 'overflow': 'visible', 'gap': 2};
    var5['usernameRow'] = var11;
    var11 = {};
    var18 = var7[var12];
    var18 = var13.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_MOD_MUTED;
    var11['backgroundColor'] = var18;
    var18 = var7[var12];
    var18 = var13.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.round;
    var11['borderRadius'] = var18;
    var11['height'] = var16;
    var16 = 80;
    var11['width'] = var16;
    var5['placeholder'] = var11;
    var11 = {'flex': 1, 'flexShrink': 1};
    var5['coachmarkAnchorRow'] = var11;
    var11 = {'position': 'absolute', 'width': 1, 'height': 1};
    var16 = var14 / var15;
    var16 = var16 - var17;
    var11['top'] = var16;
    var5['coachmarkAnchor'] = var11;
    var11 = {'position': 'absolute', 'left': 0, 'right': 0, 'height': 1};
    var14 = var14 / var15;
    var11['top'] = var14;
    var5['dmSwipeCoachmarkAnchor'] = var11;
    var11 = {'position': 'relative', 'borderRadius': null, 'overflow': 'hidden'};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.modules;
    var14 = var14.button;
    var14 = var14.BORDER_RADIUS;
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
    var11 = {'borderRadius': null, 'borderWidth': 1, 'borderColor': null, 'justifyContent': 'center', 'alignItems': 'center'};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var11['borderRadius'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var11['borderColor'] = var14;
    var5['placeholderAvatar'] = var11;
    var11 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOD_SUBTLE;
    var11['backgroundColor'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var11['borderRadius'] = var14;
    var5['placeholderAvatarBackground'] = var11;
    var11 = {};
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.shadows;
    var22 = var12.SHADOW_MEDIUM;
    var23 = var11;
    var12 = copyDataProperties(var23, var22);
    var5['avatarShadow'] = var11;
    var11 = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0};
    var5['floatingShade'] = var11;
    var5 = var9.bind(var10)(var5);
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
    var9 = 'function YouBarTsx4(){const{withSpring,isAvatarPressed,YOU_BAR_SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(isAvatarPressed?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}';
    var5['code'] = var9;
    var _closure1_slot39 = var5;
    var5 = {};
    var9 = 'function YouBarTsx5(){const{runOnJS,setIsAvatarPressed}=this.__closure;runOnJS(setIsAvatarPressed)(false);}';
    var5['code'] = var9;
    var _closure1_slot40 = var5;
    var5 = {};
    var9 = 'function YouBarTsx6(){const{runOnJS,handleAvatarLongPress}=this.__closure;runOnJS(handleAvatarLongPress)();}';
    var5['code'] = var9;
    var _closure1_slot41 = var5;
    var5 = {};
    var9 = 'function YouBarTsx7(){const{runOnJS,setIsAvatarPressed}=this.__closure;runOnJS(setIsAvatarPressed)(true);}';
    var5['code'] = var9;
    var _closure1_slot42 = var5;
    var5 = {};
    var9 = 'function YouBarTsx8(){const{nameMargin}=this.__closure;return{marginLeft:nameMargin.get()};}';
    var5['code'] = var9;
    var _closure1_slot43 = var5;
    var9 = var8.memo;
    var5 = function(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var6 = var1.isQuestRendered;
            var9 = var1.onAvatarPress;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var1 = _closure1_slot35;
            var14 = var1.bind(var4)();
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 20;
            var1 = var3[var1];
            var10 = var5.bind(var4)(var1);
            var8 = var10.useStateFromStores;
            var1 = _closure1_slot12;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var24 = var8.bind(var10)(var7, var1);
            var8 = _closure1_slot5;
            var7 = var8.useRef;
            var1 = null;
            var16 = var7.bind(var8)(var1);
            var8 = _closure1_slot1;
            var7 = 38;
            var7 = var3[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var15 = true;
            var7['isYouBar'] = var15;
            var7 = var8.bind(var4)(var16, var7);
            var6 = !var6;
            var _closure2_slot0 = var6;
            var10 = 21;
            var3 = var3[var10];
            var7 = var5.bind(var4)(var3);
            var5 = var7.useSharedValue;
            if(var6) { _fun0014_ip = 74; continue _fun0014 }
case 75:
            var3 = _closure1_slot33;
            _fun0014_ip = 76; continue _fun0014;
case 74:
            var3 = _closure1_slot32;
case 76:
            var12 = var5.bind(var7)(var3);
            _closure2_slot1 = var12;
            var8 = _closure1_slot5;
            var7 = var8.useEffect;
            var5 = new Array(2);
            var5[0] = var6;
            var5[1] = var12;
            var3 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = var4.set;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 23;
                    var6 = var6[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var6);
                    var6 = var7.withSpring;
                    var5 = _closure2_slot0;
                    if(var5) { _fun0015_ip = 77; continue _fun0015 }
case 78:
                    var5 = _closure1_slot33;
                    _fun0015_ip = 79; continue _fun0015;
case 77:
                    var5 = _closure1_slot32;
case 79:
                    var2 = _closure1_slot18;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var3, var5);
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = var5[var10];
            var7 = var7.bind(var4)(var3);
            var3 = var7.useAnimatedStyle;
            var2 = function _() {
                var1 = {};
                var3 = _closure2_slot1;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['marginLeft'] = var2;
                return var1;
            };
            var8 = {};
            var8['nameMargin'] = var12;
            var2['__closure'] = var8;
            var8 = 6850399402074.0;
            var2['__workletHash'] = var8;
            var8 = _closure1_slot43;
            var2['__initData'] = var8;
            var12 = var3.bind(var7)(var2);
            var3 = _closure1_slot1;
            var2 = 37;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useName;
            var23 = var2.bind(var3)(var24);
            var3 = _closure1_slot26;
            var2 = _closure1_slot6;
            if(!(var1 != var24)) { _fun0014_ip = 80; continue _fun0014 }
case 81:
            if(!(var1 != var23)) { _fun0014_ip = 80; continue _fun0014 }
case 82:
            var1 = {};
            var5 = var14.youButton;
            var1['style'] = var5;
            var8 = _closure1_slot25;
            var7 = _closure1_slot59;
            var5 = {};
            var5['isLargeAvatar'] = var6;
            var5['onPress'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var9 = _closure1_slot25;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var7 = var8.bind(var4)(var7);
            var8 = var7.View;
            var7 = {};
            var17 = var14.userText;
            var13 = new Array(3);
            var13[0] = var17;
            var13[1] = var12;
            var17 = {};
            var18 = 1;
            var17['flexShrink'] = var18;
            var13[2] = var17;
            var7['style'] = var13;
            var18 = _closure1_slot26;
            var17 = _closure1_slot6;
            var13 = {};
            var19 = var14.coachmarkAnchorRow;
            var13['style'] = var19;
            var21 = _closure1_slot25;
            var20 = _closure1_slot6;
            var19 = {};
            var19['ref'] = var16;
            var22 = false;
            var19['collapsable'] = var22;
            var22 = var14.coachmarkAnchor;
            var19['style'] = var22;
            var19['aria-hidden'] = var15;
            var20 = var21.bind(var4)(var20, var19);
            var19 = new Array(2);
            var19[0] = var20;
            var22 = _closure1_slot25;
            var21 = _closure1_slot62;
            var20 = {};
            var20['user'] = var24;
            var20['username'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var19[1] = var20;
            var13['children'] = var19;
            var13 = var18.bind(var4)(var17, var13);
            var7['children'] = var13;
            var7 = var9.bind(var4)(var8, var7);
            var5[1] = var7;
            var1['children'] = var5;
            _fun0014_ip = 83; continue _fun0014;
case 80:
            var5 = {};
            var8 = var14.youButton;
            var7 = new Array(1);
            var7[0] = var8;
            var5['style'] = var7;
            var8 = _closure1_slot25;
            if(var6) { _fun0014_ip = 84; continue _fun0014 }
case 85:
            var7 = _closure1_slot60;
            _fun0014_ip = 86; continue _fun0014;
case 84:
            var7 = _closure1_slot61;
case 86:
            var6 = {};
            var7 = var8.bind(var4)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot26;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var7 = var8.bind(var4)(var7);
            var8 = var7.View;
            var7 = {};
            var13 = var14.userText;
            var10 = new Array(3);
            var10[0] = var13;
            var10[1] = var12;
            var12 = {};
            var13 = 1;
            var12['flexShrink'] = var13;
            var10[2] = var12;
            var7['style'] = var10;
            var13 = _closure1_slot25;
            var12 = _closure1_slot6;
            var10 = {};
            var10['ref'] = var16;
            var16 = false;
            var10['collapsable'] = var16;
            var16 = var14.coachmarkAnchor;
            var10['style'] = var16;
            var10['aria-hidden'] = var15;
            var12 = var13.bind(var4)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var13 = _closure1_slot25;
            var12 = _closure1_slot6;
            var11 = {};
            var14 = var14.placeholder;
            var11['style'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var6[1] = var7;
            var5['children'] = var6;
            var1 = var5;
case 83:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var9.bind(var8)(var5);
    var _closure1_slot44 = var5;
    var9 = var8.memo;
    var5 = function(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var2 = arg1;
            var13 = var2.hasNameplate;
            var15 = var2.icon;
            var7 = var2.hasBadge;
            var _closure2_slot0 = var7;
            var16 = var2.badgeStyle;
            var10 = var2.onPress;
            var9 = var2.onLongPress;
            var12 = var2.a11yLabel;
            var2 = _closure1_slot35;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var3 = function useIconBadgeCutout(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var2 = arg1;
                    var8 = var2.size;
                    var _closure3_slot0 = var8;
                    var7 = var2.xOffset;
                    var3 = undefined;
                    if(!(var7 === var3)) { _fun0017_ip = 87; continue _fun0017 }
case 88:
                    var7 = 0;
case 87:
                    var _closure3_slot1 = var7;
                    var6 = var2.yOffset;
                    if(!(var6 === var3)) { _fun0017_ip = 89; continue _fun0017 }
case 90:
                    var6 = 0;
case 89:
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
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                            var2 = _closure3_slot3;
                            var1 = _closure3_slot5;
                            var6 = var2 + var1;
                            var7 = 2;
                            var4 = var7 * var6;
                            var3 = _closure3_slot4;
                            var1 = null;
                            var2 = var4;
                            if(!(var1 != var3)) { _fun0018_ip = 13; continue _fun0018 }
case 91:
                            var3 = _closure3_slot4;
                            var1 = _closure3_slot5;
                            var1 = var7 * var1;
                            var2 = var3 + var1;
case 13:
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
            var11 = var3.bind(var4)(var2);
            var _closure2_slot1 = var11;
            var17 = 8;
            var3 = function useIconContentStyle(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var3 = arg1;
                    var8 = var3.size;
                    var _closure3_slot0 = var8;
                    var7 = var3.badgeSize;
                    var _closure3_slot1 = var7;
                    var5 = var3.xOffset;
                    var2 = undefined;
                    if(!(var5 === var2)) { _fun0019_ip = 92; continue _fun0019 }
case 93:
                    var5 = 0;
case 92:
                    var _closure3_slot2 = var5;
                    var6 = var3.yOffset;
                    if(!(var6 === var2)) { _fun0019_ip = 94; continue _fun0019 }
case 95:
                    var6 = 0;
case 94:
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
            var18 = var3.bind(var4)(var2);
            var6 = _closure1_slot5;
            var3 = var6.useMemo;
            var2 = new Array(2);
            var2[0] = var11;
            var2[1] = var7;
            var1 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0020_ip = 96; continue _fun0020 }
case 55:
                    var1 = new Array(0);
                    _fun0020_ip = 97; continue _fun0020;
case 96:
                    var3 = _closure2_slot1;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 97:
                    return var1;
                }
            };
            var19 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot26;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = {'position': 'relative', 'height': 18, 'width': 18};
            var1['style'] = var6;
            var14 = _closure1_slot25;
            var11 = _closure1_slot1;
            var20 = _closure1_slot2;
            var6 = 17;
            var6 = var20[var6];
            var11 = var11.bind(var4)(var6);
            var6 = {};
            var6['cutouts'] = var19;
            var6['children'] = var15;
            var11 = var14.bind(var4)(var11, var6);
            var6 = new Array(2);
            var6[0] = var11;
            if(!var7) { _fun0016_ip = 45; continue _fun0016 }
case 98:
            var15 = _closure1_slot25;
            var14 = _closure1_slot1;
            var19 = _closure1_slot2;
            var11 = 39;
            var11 = var19[var11];
            var14 = var14.bind(var4)(var11);
            var11 = {};
            var11['style'] = var18;
            var11['size'] = var17;
            var11['badgeStyle'] = var16;
            var7 = var15.bind(var4)(var14, var11);
case 45:
            var6[1] = var7;
            var1['children'] = var6;
            var11 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot25;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var5.buttonContainer;
            var1['style'] = var5;
            var7 = _closure1_slot25;
            var6 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 40;
            var5 = var14[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.IconButton;
            var5 = {};
            var5['accessibilityLabel'] = var12;
            var12 = 'tertiary';
            if(!var13) { _fun0016_ip = 99; continue _fun0016 }
case 100:
            var12 = 'secondary-overlay';
case 99:
            var5['variant'] = var12;
            var12 = 'sm';
            var5['size'] = var12;
            var5['icon'] = var11;
            var5['onPress'] = var10;
            var5['onLongPress'] = var9;
            var8 = _closure1_slot34;
            var5['hitSlop'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var9.bind(var8)(var5);
    var _closure1_slot45 = var5;
    var9 = var8.memo;
    var5 = function(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var12 = var1.hasNameplate;
            var1 = _closure1_slot35;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 41;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var7 = var1.showDot;
            var3 = _closure1_slot25;
            var2 = _closure1_slot45;
            var1 = {};
            var1['hasNameplate'] = var12;
            var10 = _closure1_slot25;
            var9 = _closure1_slot0;
            var8 = 42;
            var8 = var11[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.FlashIcon;
            var8 = {};
            var11 = 'custom';
            var8['size'] = var11;
            var11 = var6.largeButtonIcon;
            var8['style'] = var11;
            var11 = undefined;
            if(!var12) { _fun0021_ip = 101; continue _fun0021 }
case 102:
            var11 = 'white';
case 101:
            var8['color'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var1['icon'] = var8;
            var1['hasBadge'] = var7;
            var6 = var6.icymiBadge;
            var1['badgeStyle'] = var6;
            var6 = function onPress() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 43;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0022_ip = 103; continue _fun0022 }
case 104:
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
case 103:
                    return var1;
                }
            };
            var1['onPress'] = var6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 44;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.jnXV/V;
            var5 = var6.bind(var7)(var5);
            var1['a11yLabel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var9.bind(var8)(var5);
    var _closure1_slot46 = var5;
    var5 = {};
    var9 = 'function YouBarTsx9(){const{withSpring,badgeCount,YOU_BAR_SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.space.PX_4:0,YOU_BAR_SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)};}';
    var5['code'] = var9;
    var _closure1_slot47 = var5;
    var9 = var8.memo;
    var5 = function(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var20 = var1.hasNameplate;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var1 = _closure1_slot35;
            var19 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 45;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var21 = var1.value;
            var _closure2_slot0 = var21;
            var11 = _closure1_slot0;
            var15 = 21;
            var1 = var3[var15];
            var6 = var11.bind(var4)(var1);
            var5 = var6.useAnimatedStyle;
            var1 = function r() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = {};
                    var4 = {};
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var8 = 23;
                    var3 = var3[var8];
                    var7 = undefined;
                    var11 = var5.bind(var7)(var3);
                    var10 = var11.withSpring;
                    var3 = _closure2_slot0;
                    var5 = 0;
                    var3 = var3 > var5;
                    var9 = 0;
                    if(!var3) { _fun0024_ip = 77; continue _fun0024 }
case 95:
                    var9 = 1;
case 77:
                    var3 = _closure1_slot18;
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
                    if(!var3) { _fun0024_ip = 105; continue _fun0024 }
case 106:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var3 = 15;
                    var3 = var12[var3];
                    var3 = var11.bind(var7)(var3);
                    var3 = var3.space;
                    var4 = var3.PX_4;
case 105:
                    var3 = _closure1_slot18;
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
                    if(!var6) { _fun0024_ip = 107; continue _fun0024 }
case 108:
                    var5 = 1;
case 107:
                    var2 = _closure1_slot18;
                    var2 = var3.bind(var4)(var5, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var9 = 23;
            var9 = var3[var9];
            var9 = var11.bind(var4)(var9);
            var9 = var9.withSpring;
            var7['withSpring'] = var9;
            var7['badgeCount'] = var21;
            var9 = _closure1_slot18;
            var7['YOU_BAR_SPRING_CONFIG'] = var9;
            var9 = 15;
            var9 = var3[var9];
            var9 = var2.bind(var4)(var9);
            var7['tokens'] = var9;
            var1['__closure'] = var7;
            var7 = 10347584544432.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot47;
            var1['__initData'] = var7;
            var18 = var5.bind(var6)(var1);
            var1 = 46;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useConfig;
            var1 = {};
            var5 = 'YouBar';
            var1['location'] = var5;
            var1 = var2.bind(var3)(var1);
            var1 = var1.enabled;
            if(!var1) { _fun0023_ip = 45; continue _fun0023 }
case 109:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 47;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            if(var2) { _fun0023_ip = 110; continue _fun0023 }
case 111:
            var5 = _closure1_slot9;
            var3 = var5.getSavedMessageCount;
            var5 = var3.bind(var5)();
            var3 = 0;
            var2 = var5 > var3;
case 110:
            var1 = var2;
case 45:
            _closure2_slot1 = var1;
            var6 = _closure1_slot5;
            var5 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = function() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(!var1) { _fun0025_ip = 112; continue _fun0025 }
case 53:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var5 = 29;
                    var6 = var1[var5];
                    var4 = undefined;
                    var7 = var3.bind(var4)(var6);
                    var6 = var7.triggerHapticFeedback;
                    var5 = var1[var5];
                    var5 = var3.bind(var4)(var5);
                    var5 = var5.HapticFeedbackTypes;
                    var5 = var5.SOFT;
                    var5 = var6.bind(var7)(var5);
                    var5 = _closure1_slot1;
                    var2 = 48;
                    var2 = var1[var2];
                    var6 = var5.bind(var4)(var2);
                    var5 = var6.pushLazy;
                    var2 = 31;
                    var2 = var1[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = 49;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var11 = var3.bind(var4)(var2, var1);
                    var3 = {};
                    var1 = 'modal';
                    var3['presentation'] = var1;
                    var10 = {};
                    var9 = 'for-later-modal';
                    var12 = var6;
                    var8 = var3;
                    var1 = var12[var5](var11, var10, var9, var8, var7);
case 112:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var5.bind(var6)(var2, var3);
            _closure2_slot2 = var9;
            var5 = _closure1_slot5;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var1 = new Array(0);
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0026_ip = 113; continue _fun0026 }
case 114:
                    var3 = var1.push;
                    var2 = {};
                    var4 = 'open-bookmarks';
                    var2['name'] = var4;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 44;
                    var5 = var9[var4];
                    var7 = undefined;
                    var5 = var8.bind(var7)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var8.bind(var7)(var4);
                    var4 = var4.t;
                    var4 = var4["2pAkDA"];
                    var4 = var5.bind(var6)(var4);
                    var2['label'] = var4;
                    var2 = var3.bind(var1)(var2);
case 113:
                    return var1;
                }
            };
            var12 = var3.bind(var5)(var1, var2);
            var5 = _closure1_slot5;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var9;
            var1 = function(arg1) {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.actionName;
                    var1 = 'open-bookmarks';
                    if(!(var1 === var2)) { _fun0027_ip = 92; continue _fun0027 }
case 115:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 92:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot25;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var19.buttonContainer;
            var1['style'] = var5;
            var7 = _closure1_slot25;
            var14 = _closure1_slot0;
            var22 = _closure1_slot2;
            var5 = 40;
            var5 = var22[var5];
            var5 = var14.bind(var4)(var5);
            var6 = var5.IconButton;
            var5 = {};
            var13 = 44;
            var16 = var22[var13];
            var16 = var14.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.formatToPlainString;
            var13 = var22[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.t;
            var14 = var13.kedGua;
            var13 = {};
            var13['count'] = var21;
            var13 = var16.bind(var17)(var14, var13);
            var5['accessibilityLabel'] = var13;
            var5['accessibilityActions'] = var12;
            var5['onAccessibilityAction'] = var11;
            var11 = 'tertiary';
            if(!var20) { _fun0023_ip = 116; continue _fun0023 }
case 117:
            var11 = 'secondary-overlay';
case 116:
            var5['variant'] = var11;
            var11 = 'sm';
            var5['size'] = var11;
            var13 = _closure1_slot26;
            var12 = _closure1_slot6;
            var11 = {};
            var14 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
            var11['style'] = var14;
            var17 = _closure1_slot25;
            var16 = _closure1_slot0;
            var22 = _closure1_slot2;
            var14 = 50;
            var14 = var22[var14];
            var14 = var16.bind(var4)(var14);
            var16 = var14.BellIcon;
            var14 = {};
            var22 = 'custom';
            var14['size'] = var22;
            var19 = var19.largeButtonIcon;
            var14['style'] = var19;
            var19 = undefined;
            if(!var20) { _fun0023_ip = 118; continue _fun0023 }
case 119:
            var19 = 'white';
case 118:
            var14['color'] = var19;
            var16 = var17.bind(var4)(var16, var14);
            var14 = new Array(2);
            var14[0] = var16;
            var17 = _closure1_slot25;
            var16 = _closure1_slot1;
            var22 = _closure1_slot2;
            var15 = var22[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.View;
            var15 = {};
            var15['style'] = var18;
            var20 = _closure1_slot25;
            var19 = _closure1_slot0;
            var18 = 14;
            var18 = var22[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.Badge;
            var18 = {};
            var18['value'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[1] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var5['icon'] = var11;
            var10 = function onPress() {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 43;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0028_ip = 120; continue _fun0028 }
case 104:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = true;
                    var3['inNestedNavigator'] = var2;
                    var2 = 'notifications';
                    var2 = var4.bind(var5)(var2, var3);
case 120:
                    return var1;
                }
            };
            var5['onPress'] = var10;
            var5['onLongPress'] = var9;
            var8 = _closure1_slot34;
            var5['hitSlop'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var9.bind(var8)(var5);
    var _closure1_slot48 = var5;
    var5 = {};
    var9 = 'function YouBarTsx10(){const{withSpring,barMarginBottom,connectionBannerHeight,YOU_BAR_SPRING_CONFIG,isPressedValue,isQuestRendered}=this.__closure;return{marginBottom:withSpring(barMarginBottom+connectionBannerHeight,YOU_BAR_SPRING_CONFIG),transform:[{scale:withSpring(isPressedValue.get()&&!isQuestRendered?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}';
    var5['code'] = var9;
    var _closure1_slot49 = var5;
    var5 = {};
    var9 = 'function YouBarTsx11(){const{withSpring,isQuestRendered,questDockAnimatedBorderRadius,youBarBorderRadius,YOU_BAR_SPRING_CONFIG,questDockAnimatedBottomLeftRadius,YOU_BAR_HEIGHT}=this.__closure;return{borderTopRightRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():youBarBorderRadius,YOU_BAR_SPRING_CONFIG),borderTopLeftRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():youBarBorderRadius,YOU_BAR_SPRING_CONFIG),borderBottomLeftRadius:withSpring(isQuestRendered?questDockAnimatedBottomLeftRadius.get():YOU_BAR_HEIGHT/2,YOU_BAR_SPRING_CONFIG)};}';
    var5['code'] = var9;
    var _closure1_slot50 = var5;
    var5 = {};
    var9 = 'function YouBarTsx12(){const{withSpring,isQuestRendered,questDockAnimatedBorderRadius,youBarBorderRadius,YOU_BAR_SPRING_CONFIG}=this.__closure;return{borderTopRightRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():youBarBorderRadius,YOU_BAR_SPRING_CONFIG)};}';
    var5['code'] = var9;
    var _closure1_slot51 = var5;
    var5 = {};
    var9 = 'function YouBarTsx13(){const{runOnJS,handleNavBetweenGuildsAndDMs}=this.__closure;runOnJS(handleNavBetweenGuildsAndDMs)();}';
    var5['code'] = var9;
    var _closure1_slot52 = var5;
    var9 = var8.memo;
    var5 = function() {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var2 = _closure1_slot35;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 52;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var6 = var2.width;
            var5 = _closure1_slot0;
            var2 = 53;
            var8 = var7[var2];
            var9 = var5.bind(var4)(var8);
            var8 = var9.useIsMobileQuestDockRenderedBase;
            var2 = var7[var2];
            var11 = var5.bind(var4)(var2);
            var2 = var11.useMobileQuestDock;
            var2 = var2.bind(var11)();
            var21 = var8.bind(var9)(var2);
            var _closure2_slot0 = var21;
            var2 = 54;
            var2 = var7[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.useDrawerWidth;
            var5 = var2.bind(var5)();
            var2 = 55;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var7 = var2.isChatBesideChannelList;
            var2 = _closure1_slot19;
            var2 = var2.bind(var4)();
            var _closure2_slot1 = var2;
            var43 = 2;
            var3 = var43 * var2;
            if(var7) { _fun0029_ip = 121; continue _fun0029 }
case 15:
            var28 = var6 - var3;
            _fun0029_ip = 122; continue _fun0029;
case 121:
            var28 = var5 - var3;
case 122:
            var _closure2_slot2 = var28;
            var3 = _closure1_slot14;
            var11 = var3.bind(var4)();
            var _closure2_slot3 = var11;
            var3 = _closure1_slot13;
            var9 = var3.bind(var4)();
            var _closure2_slot4 = var9;
            var6 = _closure1_slot5;
            var5 = var6.useMemo;
            var3 = new Array(2);
            var3[0] = var28;
            var3[1] = var2;
            var2 = function() {
                var1 = {};
                var3 = _closure2_slot1;
                var1['marginHorizontal'] = var3;
                var4 = _closure1_slot16;
                var1['height'] = var4;
                var3 = _closure1_slot17;
                var1['padding'] = var3;
                var2 = _closure2_slot2;
                var1['width'] = var2;
                return var1;
            };
            var8 = var5.bind(var6)(var2, var3);
            var20 = _closure1_slot0;
            var34 = _closure1_slot2;
            var26 = 21;
            var2 = var34[var26];
            var3 = var20.bind(var4)(var2);
            var2 = var3.useSharedValue;
            var32 = false;
            var2 = var2.bind(var3)(var32);
            var _closure2_slot5 = var2;
            var3 = var34[var26];
            var6 = var20.bind(var4)(var3);
            var5 = var6.useAnimatedStyle;
            var3 = function n() {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    var1 = {};
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 23;
                    var3 = var8[var4];
                    var5 = undefined;
                    var11 = var6.bind(var5)(var3);
                    var10 = var11.withSpring;
                    var9 = _closure2_slot3;
                    var3 = _closure2_slot4;
                    var9 = var9 + var3;
                    var3 = _closure1_slot18;
                    var3 = var10.bind(var11)(var9, var3);
                    var1['marginBottom'] = var3;
                    var3 = {};
                    var4 = var8[var4];
                    var6 = var6.bind(var5)(var4);
                    var5 = var6.withSpring;
                    var8 = _closure2_slot5;
                    var4 = var8.get;
                    var9 = var4.bind(var8)();
                    var8 = 1;
                    var4 = var8;
                    if(!var9) { _fun0030_ip = 72; continue _fun0030 }
case 56:
                    var7 = _closure2_slot0;
                    var4 = var8;
                    if(var7) { _fun0030_ip = 72; continue _fun0030 }
case 64:
                    var4 = 0.98;
case 72:
                    var2 = _closure1_slot18;
                    var2 = var5.bind(var6)(var4, var2);
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var19 = 23;
            var13 = var34[var19];
            var13 = var20.bind(var4)(var13);
            var13 = var13.withSpring;
            var7['withSpring'] = var13;
            var7['barMarginBottom'] = var11;
            var7['connectionBannerHeight'] = var9;
            var9 = _closure1_slot18;
            var7['YOU_BAR_SPRING_CONFIG'] = var9;
            var7['isPressedValue'] = var2;
            var7['isQuestRendered'] = var21;
            var3['__closure'] = var7;
            var7 = 9614621765319.0;
            var3['__workletHash'] = var7;
            var7 = _closure1_slot49;
            var3['__initData'] = var7;
            var7 = var5.bind(var6)(var3);
            var3 = 56;
            var3 = var34[var3];
            var6 = var20.bind(var4)(var3);
            var5 = var6.useICYMIEnabled;
            var3 = 'TabsNavigator';
            var9 = var5.bind(var6)(var3);
            var5 = _closure1_slot5;
            var3 = var5.useRef;
            var11 = null;
            var33 = var3.bind(var5)(var11);
            var14 = _closure1_slot1;
            var3 = 57;
            var3 = var34[var3];
            var3 = var14.bind(var4)(var3);
            var3 = var3.bind(var4)(var33);
            var _closure2_slot6 = var3;
            var6 = _closure1_slot5;
            var5 = var6.useRef;
            var5 = var5.bind(var6)(var3);
            var _closure2_slot7 = var5;
            var13 = _closure1_slot5;
            var6 = var13.useEffect;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var2 = _closure2_slot7;
                var1 = _closure2_slot6;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var3 = var6.bind(var13)(var3, var5);
            var3 = 20;
            var5 = var34[var3];
            var15 = var20.bind(var4)(var5);
            var13 = var15.useStateFromStores;
            var5 = _closure1_slot12;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var13.bind(var15)(var6, var5);
            var5 = 51;
            var5 = var34[var5];
            var13 = var20.bind(var4)(var5);
            var6 = var13.useNameplate;
            var5 = {};
            var5['user'] = var15;
            var5['guildId'] = var4;
            var27 = var6.bind(var13)(var5);
            var13 = var11 != var27;
            var5 = function useBGColor() {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var7 = 26;
                    var1 = var5[var7];
                    var6 = undefined;
                    var10 = var4.bind(var6)(var1);
                    var8 = var10.useToken;
                    var9 = _closure1_slot1;
                    var2 = 15;
                    var1 = var5[var2];
                    var1 = var9.bind(var6)(var1);
                    var1 = var1.colors;
                    var1 = var1.MOBILE_FLOATINGBAR_BACKGROUND;
                    var1 = var8.bind(var10)(var1);
                    var7 = var5[var7];
                    var8 = var4.bind(var6)(var7);
                    var7 = var8.useToken;
                    var2 = var5[var2];
                    var2 = var9.bind(var6)(var2);
                    var2 = var2.colors;
                    var2 = var2.MOBILE_FLOATINGBAR_BACKGROUND_NAMEPLATE;
                    var2 = var7.bind(var8)(var2);
                    var7 = 20;
                    var7 = var5[var7];
                    var9 = var4.bind(var6)(var7);
                    var8 = var9.useStateFromStores;
                    var3 = _closure1_slot12;
                    var7 = new Array(1);
                    var7[0] = var3;
                    var3 = function() {
                        var2 = _closure1_slot12;
                        var1 = var2.getCurrentUser;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var7 = var8.bind(var9)(var7, var3);
                    var3 = 51;
                    var3 = var5[var3];
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.useNameplate;
                    var3 = {};
                    var3['user'] = var7;
                    var3['guildId'] = var6;
                    var4 = var4.bind(var5)(var3);
                    var3 = null;
                    if(!(var3 != var4)) { _fun0031_ip = 123; continue _fun0031 }
case 124:
                    var1 = var2;
case 123:
                    return var1;
                }
            };
            var36 = var5.bind(var4)();
            var5 = 37;
            var5 = var34[var5];
            var6 = var14.bind(var4)(var5);
            var5 = var6.useName;
            var5 = var5.bind(var6)(var15);
            var _closure2_slot8 = var5;
            var5 = 34;
            var5 = var34[var5];
            var6 = var20.bind(var4)(var5);
            var5 = var6.useCustomStatusActivity;
            var5 = var5.bind(var6)();
            var _closure2_slot9 = var5;
            var3 = var34[var3];
            var15 = var20.bind(var4)(var3);
            var6 = var15.useStateFromStores;
            var3 = _closure1_slot11;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                    var6 = _closure2_slot8;
                    var2 = null;
                    if(!(var2 == var6)) { _fun0032_ip = 125; continue _fun0032 }
case 53:
                    var1 = undefined;
                    return var1;
case 125:
                    var5 = _closure1_slot11;
                    var4 = var5.getStatus;
                    var4 = var4.bind(var5)();
                    var5 = _closure2_slot9;
                    var8 = var2 == var5;
                    var7 = undefined;
                    var5 = undefined;
                    if(var8) { _fun0032_ip = 126; continue _fun0032 }
case 78:
                    var3 = _closure2_slot9;
                    var5 = var3.state;
case 126:
                    if(!(var2 == var5)) { _fun0032_ip = 127; continue _fun0032 }
case 128:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 37;
                    var1 = var8[var1];
                    var3 = var3.bind(var7)(var1);
                    var1 = var3.humanizeStatus;
                    var5 = var1.bind(var3)(var4);
case 127:
                    var1 = var6;
                    if(!(var2 != var5)) { _fun0032_ip = 129; continue _fun0032 }
case 113:
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var4 = var2.concat;
                    var3 = '';
                    var2 = ', ';
                    var1 = var4.bind(var3)(var6, var2, var5);
case 129:
                    return var1;
                }
            };
            var24 = var6.bind(var15)(var5, var3);
            var15 = _closure1_slot5;
            var6 = var15.useMemo;
            var5 = function() {
                var2 = {};
                var1 = 'open-settings';
                var2['name'] = var1;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 44;
                var3 = var7[var1];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1["3/IlR0"];
                var1 = var3.bind(var4)(var1);
                var2['label'] = var1;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var3 = new Array(0);
            var23 = var6.bind(var15)(var5, var3);
            var15 = _closure1_slot5;
            var6 = var15.useCallback;
            var5 = function(arg1) {
                _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.actionName;
                    var1 = 'open-settings';
                    if(!(var1 === var2)) { _fun0033_ip = 130; continue _fun0033 }
case 115:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 58;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.openUserSettings;
                    var1 = var1.bind(var2)();
case 130:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = new Array(0);
            var22 = var6.bind(var15)(var5, var3);
            var5 = _closure1_slot5;
            var3 = var5.useRef;
            var3 = var3.bind(var5)(var11);
            var _closure2_slot10 = var3;
            var5 = _closure1_slot5;
            var3 = var5.useState;
            var30 = 0;
            var5 = var3.bind(var5)(var30);
            var3 = _closure1_slot4;
            var3 = var3.bind(var4)(var5, var43);
            var6 = var3[var30];
            var42 = 1;
            var3 = var3[var42];
            var _closure2_slot11 = var3;
            var5 = _closure1_slot5;
            var3 = var5.useRef;
            var15 = true;
            var3 = var3.bind(var5)(var15);
            var _closure2_slot12 = var3;
            var17 = _closure1_slot5;
            var16 = var17.useEffect;
            var5 = function() {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 43;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getRootNavigationRef;
                    var5 = var3.bind(var4)();
                    var _closure3_slot0 = var5;
                    var3 = null;
                    if(!(var3 == var5)) { _fun0034_ip = 78; continue _fun0034 }
case 51:
                    return var2;
case 78:
                    var4 = function checkYouScreenPresence() {
                        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                            var2 = _closure3_slot0;
                            var1 = var2.getState;
                            var7 = var1.bind(var2)();
                            var3 = null;
                            var5 = var3 != var7;
                            if(!var5) { _fun0035_ip = 131; continue _fun0035 }
case 87:
                            var2 = var7.routes;
                            var1 = var7.index;
                            var1 = var2[var1];
                            var8 = var3 == var1;
                            var2 = undefined;
                            if(var8) { _fun0035_ip = 50; continue _fun0035 }
case 95:
                            var2 = var1.name;
case 50:
                            var1 = 'main';
                            var5 = var1 === var2;
case 131:
                            var1 = _closure2_slot12;
                            var1 = var1.current;
                            var1 = !var1;
                            if(!var1) { _fun0035_ip = 103; continue _fun0035 }
case 132:
                            var1 = var5;
case 103:
                            if(!var1) { _fun0035_ip = 59; continue _fun0035 }
case 133:
                            var9 = _closure2_slot11;
                            var8 = undefined;
                            var1 = function(arg1) {
                                var2 = arg1;
                                var1 = 1;
                                var1 = var2 + var1;
                                return var1;
                            };
                            var1 = var9.bind(var8)(var1);
case 59:
                            var1 = _closure2_slot12;
                            var1['current'] = var5;
                            var8 = var3 == var7;
                            var1 = undefined;
                            var5 = undefined;
                            if(var8) { _fun0035_ip = 38; continue _fun0035 }
case 134:
                            var8 = var7.routes;
                            var7 = var3 == var8;
                            var5 = undefined;
                            if(var7) { _fun0035_ip = 38; continue _fun0035 }
case 135:
                            var7 = var8.some;
                            var6 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.name;
                                var1 = 'you';
                                var1 = var1 === var2;
                                return var1;
                            };
                            var5 = var7.bind(var8)(var6);
case 38:
                            if(var5) { _fun0035_ip = 136; continue _fun0035 }
case 137:
                            var5 = _closure2_slot10;
                            var5 = var5.current;
                            if(!(var3 != var5)) { _fun0035_ip = 136; continue _fun0035 }
case 138:
                            var5 = _closure2_slot10;
                            var6 = var5.current;
                            var5 = 'press';
                            if(!(var5 !== var6)) { _fun0035_ip = 139; continue _fun0035 }
case 140:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 24;
                            var5 = var7[var5];
                            var7 = var6.bind(var1)(var5);
                            var6 = var7.assertNever;
                            var5 = _closure2_slot10;
                            var5 = var5.current;
                            var5 = var6.bind(var7)(var5);
                            _fun0035_ip = 141; continue _fun0035;
case 139:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var5 = 29;
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
case 141:
                            var2 = _closure2_slot10;
                            var2['current'] = var3;
case 136:
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
            var3 = new Array(0);
            var3 = var16.bind(var17)(var5, var3);
            var3 = var12.youBorderRadius;
            var29 = var3.borderRadius;
            var _closure2_slot13 = var29;
            var3 = 59;
            var5 = var34[var3];
            var5 = var14.bind(var4)(var5);
            var18 = var5.bind(var4)(var29);
            var _closure2_slot14 = var18;
            var3 = var34[var3];
            var5 = var14.bind(var4)(var3);
            var3 = _closure1_slot16;
            var3 = var3 / var43;
            var25 = var5.bind(var4)(var29, var3);
            var _closure2_slot15 = var25;
            var3 = var34[var26];
            var16 = var20.bind(var4)(var3);
            var5 = var16.useAnimatedStyle;
            var3 = function _e() {
                _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var7 = 23;
                    var3 = var3[var7];
                    var5 = undefined;
                    var9 = var4.bind(var5)(var3);
                    var8 = var9.withSpring;
                    var3 = _closure2_slot0;
                    if(var3) { _fun0036_ip = 142; continue _fun0036 }
case 90:
                    var4 = _closure2_slot13;
                    _fun0036_ip = 143; continue _fun0036;
case 142:
                    var10 = _closure2_slot14;
                    var3 = var10.get;
                    var4 = var3.bind(var10)();
case 143:
                    var3 = _closure1_slot18;
                    var3 = var8.bind(var9)(var4, var3);
                    var1['borderTopRightRadius'] = var3;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var9 = var4.bind(var5)(var3);
                    var8 = var9.withSpring;
                    var3 = _closure2_slot0;
                    if(var3) { _fun0036_ip = 144; continue _fun0036 }
case 145:
                    var4 = _closure2_slot13;
                    _fun0036_ip = 146; continue _fun0036;
case 144:
                    var10 = _closure2_slot14;
                    var3 = var10.get;
                    var4 = var3.bind(var10)();
case 146:
                    var3 = _closure1_slot18;
                    var3 = var8.bind(var9)(var4, var3);
                    var1['borderTopLeftRadius'] = var3;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.withSpring;
                    var3 = _closure2_slot0;
                    if(var3) { _fun0036_ip = 147; continue _fun0036 }
case 148:
                    var7 = _closure1_slot16;
                    var3 = 2;
                    var3 = var7 / var3;
                    _fun0036_ip = 149; continue _fun0036;
case 147:
                    var7 = _closure2_slot15;
                    var6 = var7.get;
                    var3 = var6.bind(var7)();
case 149:
                    var2 = _closure1_slot18;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['borderBottomLeftRadius'] = var2;
                    return var1;
                }
            };
            var17 = {};
            var31 = var34[var19];
            var31 = var20.bind(var4)(var31);
            var31 = var31.withSpring;
            var17['withSpring'] = var31;
            var17['isQuestRendered'] = var21;
            var17['questDockAnimatedBorderRadius'] = var18;
            var17['youBarBorderRadius'] = var29;
            var31 = _closure1_slot18;
            var17['YOU_BAR_SPRING_CONFIG'] = var31;
            var17['questDockAnimatedBottomLeftRadius'] = var25;
            var25 = _closure1_slot16;
            var17['YOU_BAR_HEIGHT'] = var25;
            var3['__closure'] = var17;
            var17 = 15605914655073.0;
            var3['__workletHash'] = var17;
            var17 = _closure1_slot50;
            var3['__initData'] = var17;
            var31 = var5.bind(var16)(var3);
            var3 = var34[var26];
            var16 = var20.bind(var4)(var3);
            var5 = var16.useAnimatedStyle;
            var3 = function Ae() {
                _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 23;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withSpring;
                    var3 = _closure2_slot0;
                    if(var3) { _fun0037_ip = 142; continue _fun0037 }
case 90:
                    var3 = _closure2_slot13;
                    _fun0037_ip = 143; continue _fun0037;
case 142:
                    var7 = _closure2_slot14;
                    var6 = var7.get;
                    var3 = var6.bind(var7)();
case 143:
                    var2 = _closure1_slot18;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['borderTopRightRadius'] = var2;
                    return var1;
                }
            };
            var17 = {};
            var19 = var34[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.withSpring;
            var17['withSpring'] = var19;
            var17['isQuestRendered'] = var21;
            var17['questDockAnimatedBorderRadius'] = var18;
            var17['youBarBorderRadius'] = var29;
            var18 = _closure1_slot18;
            var17['YOU_BAR_SPRING_CONFIG'] = var18;
            var3['__closure'] = var17;
            var17 = 15670353903475.0;
            var3['__workletHash'] = var17;
            var17 = _closure1_slot51;
            var3['__initData'] = var17;
            var25 = var5.bind(var16)(var3);
            var17 = _closure1_slot5;
            var16 = var17.useMemo;
            var5 = new Array(1);
            var5[0] = var2;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 60;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.debounce;
                var3 = function() {
                    _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 43;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.getRootNavigationRef;
                        var4 = var3.bind(var4)();
                        var3 = null;
                        if(!(var3 != var4)) { _fun0038_ip = 150; continue _fun0038 }
case 104:
                        var5 = var4.getState;
                        var6 = var5.bind(var4)();
                        var7 = var3 == var6;
                        var5 = undefined;
                        if(var7) { _fun0038_ip = 151; continue _fun0038 }
case 130:
                        var8 = var6.routes;
                        var6 = var3 == var8;
                        var5 = undefined;
                        if(var6) { _fun0038_ip = 151; continue _fun0038 }
case 152:
                        var7 = var8.some;
                        var6 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.name;
                            var1 = 'you';
                            var1 = var1 === var2;
                            return var1;
                        };
                        var5 = var7.bind(var8)(var6);
case 151:
                        if(var5) { _fun0038_ip = 153; continue _fun0038 }
case 150:
                        if(!(var3 != var4)) { _fun0038_ip = 66; continue _fun0038 }
case 154:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 29;
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
                        var4 = _closure2_slot5;
                        var3 = var4.set;
                        var2 = false;
                        var2 = var3.bind(var4)(var2);
case 66:
                        return var1;
case 153:
                        var3 = _closure2_slot10;
                        var2 = 'press';
                        var3['current'] = var2;
                        return var1;
                    }
                };
                var2 = 500;
                var1 = {'leading': true, 'trailing': false};
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var20 = var16.bind(var17)(var3, var5);
            var17 = _closure1_slot5;
            var16 = var17.useCallback;
            var5 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0039_ip = 155; continue _fun0039 }
case 55:
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var3 = 31;
                        var5 = var2[var3];
                        var3 = undefined;
                        var6 = var6.bind(var3)(var5);
                        var5 = 61;
                        var5 = var2[var5];
                        var2 = var2.paths;
                        var2 = var6.bind(var3)(var5, var2);
                        SaveGenerator(address=57);
case 77:
                        return var2;
case 50:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0039_ip = 156; continue _fun0039 }
case 157:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 29;
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
                        var6 = _closure2_slot5;
                        var5 = var6.set;
                        var4 = false;
                        var4 = var5.bind(var6)(var4);
                        return var3;
case 156:
                        return var2;
case 155:
                        return var1;
                    }
                };
                return var1;
            };
            var5 = var5.bind(var4)(var3);
            var3 = new Array(1);
            var3[0] = var2;
            var17 = var16.bind(var17)(var5, var3);
            var18 = _closure1_slot5;
            var16 = var18.useCallback;
            var5 = new Array(1);
            var5[0] = var2;
            var3 = function() {
                var3 = _closure2_slot5;
                var2 = var3.set;
                var1 = true;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var19 = var16.bind(var18)(var3, var5);
            var16 = _closure1_slot5;
            var5 = var16.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure2_slot5;
                var2 = var3.set;
                var1 = false;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var18 = var5.bind(var16)(var2, var3);
            var16 = _closure1_slot5;
            var5 = var16.useCallback;
            var3 = function() {
                _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 62;
                    var3 = var7[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.coerceGuildsRoute;
                    var6 = _closure1_slot1;
                    var3 = 63;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.bind(var1)();
                    var4 = var4.bind(var5)(var3);
                    var3 = null;
                    if(!(var3 != var4)) { _fun0040_ip = 158; continue _fun0040 }
case 131:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 29;
                    var6 = var9[var5];
                    var7 = var8.bind(var1)(var6);
                    var6 = var7.triggerHapticFeedback;
                    var5 = var9[var5];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.HapticFeedbackTypes;
                    var5 = var5.SOFT;
                    var5 = var6.bind(var7)(var5);
                    var4 = var4.params;
                    var6 = var3 == var4;
                    var5 = undefined;
                    if(var6) { _fun0040_ip = 54; continue _fun0040 }
case 159:
                    var5 = var4.guildId;
case 54:
                    var4 = _closure1_slot21;
                    if(!(var5 !== var4)) { _fun0040_ip = 160; continue _fun0040 }
case 161:
                    var6 = _closure2_slot7;
                    var5 = var6.current;
                    var4 = _closure1_slot23;
                    var4 = var4.TAKE_ACTION;
                    var4 = var5.bind(var6)(var4);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 64;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.transitionToGuild;
                    var4 = _closure1_slot21;
                    var4 = var5.bind(var6)(var4);
                    _fun0040_ip = 158; continue _fun0040;
case 160:
                    var5 = _closure1_slot10;
                    var4 = var5.getLastSelectedGuildId;
                    var4 = var4.bind(var5)();
                    if(!(var3 != var4)) { _fun0040_ip = 158; continue _fun0040 }
case 162:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 64;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.transitionToGuild;
                    var2 = var2.bind(var3)(var4);
case 158:
                    return var1;
                }
            };
            var2 = new Array(0);
            var16 = var5.bind(var16)(var3, var2);
            var _closure2_slot16 = var16;
            var5 = _closure1_slot5;
            var3 = var5.useContext;
            var2 = 65;
            var2 = var34[var2];
            var2 = var14.bind(var4)(var2);
            var2 = var3.bind(var5)(var2);
            var14 = var2.gesture;
            var _closure2_slot17 = var14;
            var5 = _closure1_slot5;
            var3 = var5.useMemo;
            var2 = new Array(3);
            var2[0] = var16;
            var2[1] = var14;
            var2[2] = var6;
            var1 = function() {
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 32;
                var1 = var10[var1];
                var8 = undefined;
                var1 = var9.bind(var8)(var1);
                var2 = var1.Gesture;
                var1 = var2.Pan;
                var3 = var1.bind(var2)();
                var2 = var3.simultaneousWithExternalGesture;
                var1 = _closure2_slot17;
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
                    var1 = 21;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot16;
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var5 = {};
                var7 = 21;
                var7 = var10[var7];
                var7 = var9.bind(var8)(var7);
                var7 = var7.runOnJS;
                var5['runOnJS'] = var7;
                var6 = _closure2_slot16;
                var5['handleNavBetweenGuildsAndDMs'] = var6;
                var1['__closure'] = var5;
                var5 = 11395554325446.0;
                var1['__workletHash'] = var5;
                var4 = _closure1_slot52;
                var1['__initData'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var3.bind(var5)(var1, var2);
            var6 = !var21;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.AVATAR_SIZE_MAP;
            if(var6) { _fun0029_ip = 163; continue _fun0029 }
case 164:
            var1 = _closure1_slot30;
            var16 = var2[var1];
            _fun0029_ip = 165; continue _fun0029;
case 163:
            var1 = _closure1_slot31;
            var16 = var2[var1];
case 165:
            var1 = 4;
            var44 = var16 - var1;
            var3 = _closure1_slot26;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var26];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var34 = var12.youRow;
            var5 = new Array(3);
            var5[0] = var34;
            var5[1] = var8;
            var5[2] = var7;
            var1['style'] = var5;
            var8 = _closure1_slot25;
            var7 = _closure1_slot6;
            var5 = {};
            var5['ref'] = var33;
            var5['collapsable'] = var32;
            var32 = var12.dmSwipeCoachmarkAnchor;
            var5['style'] = var32;
            var5['aria-hidden'] = var15;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(5);
            var5[0] = var7;
            var15 = _closure1_slot25;
            var40 = _closure1_slot1;
            var41 = _closure1_slot2;
            if(var6) { _fun0029_ip = 166; continue _fun0029 }
case 167:
            var6 = var41[var26];
            var6 = var40.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var32 = {};
            var8 = 'absolute';
            var32['position'] = var8;
            var8 = new Array(5);
            var8[0] = var32;
            var32 = var12.youRowFloating;
            var8[1] = var32;
            var32 = {};
            var32['width'] = var28;
            var33 = _closure1_slot16;
            var32['height'] = var33;
            var32['backgroundColor'] = var36;
            var8[2] = var32;
            var32 = {'borderTopRightRadius': 0, 'borderTopLeftRadius': 0};
            var8[3] = var32;
            var8[4] = var31;
            var6['style'] = var8;
            var6 = var15.bind(var4)(var7, var6);
            _fun0029_ip = 168; continue _fun0029;
case 166:
            var7 = 66;
            var7 = var41[var7];
            var8 = var40.bind(var4)(var7);
            var7 = {};
            var31 = {};
            var32 = 'absolute';
            var31['position'] = var32;
            var7['style'] = var31;
            var33 = _closure1_slot26;
            var32 = _closure1_slot6;
            var31 = {};
            var34 = {};
            var34['width'] = var28;
            var35 = _closure1_slot16;
            var34['height'] = var35;
            var35 = 'transparent';
            var34['backgroundColor'] = var35;
            var31['style'] = var34;
            var37 = _closure1_slot25;
            var35 = _closure1_slot6;
            var34 = {};
            var38 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': null, 'backgroundColor': 'black'};
            var39 = _closure1_slot16;
            var39 = var39 / var43;
            var39 = var39 - var42;
            var38['bottom'] = var39;
            var34['style'] = var38;
            var35 = var37.bind(var4)(var35, var34);
            var34 = new Array(3);
            var34[0] = var35;
            var38 = _closure1_slot25;
            var37 = _closure1_slot6;
            var35 = {};
            var39 = {'position': 'absolute', 'top': null, 'left': null, 'right': 0, 'bottom': 0, 'backgroundColor': 'black'};
            var45 = _closure1_slot16;
            var45 = var45 / var43;
            var39['top'] = var45;
            var42 = var44 - var42;
            var39['left'] = var42;
            var35['style'] = var39;
            var35 = var38.bind(var4)(var37, var35);
            var34[1] = var35;
            var38 = _closure1_slot25;
            var35 = 67;
            var35 = var41[var35];
            var37 = var40.bind(var4)(var35);
            var35 = {};
            var39 = {'position': 'absolute', 'top': null, 'width': 8};
            var42 = _closure1_slot16;
            var42 = var42 / var43;
            var39['top'] = var42;
            var42 = 8;
            var42 = var44 - var42;
            var39['left'] = var42;
            var42 = _closure1_slot16;
            var42 = var42 / var43;
            var39['height'] = var42;
            var35['style'] = var39;
            var39 = 68;
            var39 = var41[var39];
            var39 = var40.bind(var4)(var39);
            var40 = '#000000';
            var41 = var39.bind(var4)(var40);
            var39 = var41.alpha;
            var41 = var39.bind(var41)(var30);
            var39 = var41.hex;
            var41 = var39.bind(var41)();
            var39 = new Array(2);
            var39[0] = var41;
            var39[1] = var40;
            var35['colors'] = var39;
            var39 = {'x': 0, 'y': 0};
            var35['start'] = var39;
            var39 = {'x': 1, 'y': 0};
            var35['end'] = var39;
            var39 = [0, 1];
            var35['locations'] = var39;
            var39 = 'none';
            var35['pointerEvents'] = var39;
            var35 = var38.bind(var4)(var37, var35);
            var34[2] = var35;
            var31['children'] = var34;
            var31 = var33.bind(var4)(var32, var31);
            var7['maskElement'] = var31;
            var33 = _closure1_slot25;
            var32 = _closure1_slot6;
            var31 = {};
            var35 = var12.youRowFloating;
            var34 = new Array(2);
            var34[0] = var35;
            var35 = {};
            var35['width'] = var28;
            var37 = _closure1_slot16;
            var35['height'] = var37;
            var35['backgroundColor'] = var36;
            var34[1] = var35;
            var31['style'] = var34;
            var31 = var33.bind(var4)(var32, var31);
            var7['children'] = var31;
            var6 = var15.bind(var4)(var8, var7);
case 168:
            var5[1] = var6;
            var6 = null;
            if(!var13) { _fun0029_ip = 169; continue _fun0029 }
case 170:
            var15 = _closure1_slot25;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var26];
            var7 = var8.bind(var4)(var7);
            var8 = var7.View;
            var7 = {};
            var26 = {'position': 'absolute', 'top': 0, 'left': null, 'right': 4294967295, 'bottom': 0, 'borderTopRightRadius': null, 'borderTopLeftRadius': 0, 'borderBottomRightRadius': null, 'borderBottomLeftRadius': 0, 'overflow': 'hidden'};
            var26['left'] = var16;
            var30 = 0;
            if(var21) { _fun0029_ip = 171; continue _fun0029 }
case 172:
            var30 = var29;
case 171:
            var26['borderTopRightRadius'] = var30;
            var26['borderBottomRightRadius'] = var29;
            var16 = var28 - var16;
            var26['width'] = var16;
            var16 = new Array(2);
            var16[0] = var26;
            var16[1] = var25;
            var7['style'] = var16;
            var16 = 'none';
            var7['pointerEvents'] = var16;
            var26 = _closure1_slot25;
            var25 = _closure1_slot1;
            var28 = _closure1_slot2;
            var16 = 69;
            var16 = var28[var16];
            var25 = var25.bind(var4)(var16);
            var16 = {'nameplate': null, 'isFocused': true, 'animate': false};
            var16['nameplate'] = var27;
            var16 = var26.bind(var4)(var25, var16);
            var7['children'] = var16;
            var6 = var15.bind(var4)(var8, var7);
case 169:
            var5[2] = var6;
            var8 = _closure1_slot25;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var6 = 32;
            var6 = var28[var6];
            var6 = var27.bind(var4)(var6);
            var7 = var6.GestureDetector;
            var6 = {};
            var6['gesture'] = var14;
            var16 = _closure1_slot25;
            var15 = _closure1_slot7;
            var14 = {};
            var25 = var12.youPressable;
            var14['style'] = var25;
            var25 = {};
            var26 = 'transparent';
            var25['color'] = var26;
            var14['android_ripple'] = var25;
            var25 = 'button';
            var14['accessibilityRole'] = var25;
            var14['accessibilityLabel'] = var24;
            var24 = 44;
            var25 = var28[var24];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var28[var24];
            var24 = var27.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.cSgdvE;
            var24 = var25.bind(var26)(var24);
            var14['accessibilityHint'] = var24;
            var14['accessibilityActions'] = var23;
            var14['onAccessibilityAction'] = var22;
            var14['onPressIn'] = var19;
            var14['onPressOut'] = var18;
            var14['onPress'] = var20;
            var14['onLongPress'] = var17;
            var17 = _closure1_slot34;
            var14['hitSlop'] = var17;
            var19 = _closure1_slot25;
            var18 = _closure1_slot44;
            var17 = {};
            var17['isQuestRendered'] = var21;
            var17['onAvatarPress'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var6['children'] = var14;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var8 = _closure1_slot26;
            var7 = _closure1_slot6;
            var6 = {};
            var12 = var12.youRowRight;
            var6['style'] = var12;
            var11 = null;
            if(!var9) { _fun0029_ip = 173; continue _fun0029 }
case 174:
            var14 = _closure1_slot25;
            var12 = _closure1_slot46;
            var9 = {};
            var9['hasNameplate'] = var13;
            var11 = var14.bind(var4)(var12, var9);
case 173:
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot25;
            var11 = _closure1_slot48;
            var10 = {};
            var10['hasNameplate'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[4] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var9.bind(var8)(var5);
    var _closure1_slot53 = var5;
    var5 = {};
    var9 = 'function YouBarTsx14(){const{gradientHeight,drawerWidth}=this.__closure;return{height:gradientHeight,opacity:1,width:drawerWidth};}';
    var5['code'] = var9;
    var _closure1_slot54 = var5;
    var9 = var8.memo;
    var5 = function() {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
            var2 = _closure1_slot35;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var2 = _closure1_slot20;
            var17 = var2.bind(var4)();
            var2 = _closure1_slot15;
            var13 = var17 + var2;
            var _closure2_slot0 = var13;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 52;
            var2 = var7[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var14 = var2.width;
            var2 = 55;
            var2 = var7[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var2 = var2.isChatBesideChannelList;
            var3 = 70;
            var3 = var7[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            if(!var2) { _fun0041_ip = 175; continue _fun0041 }
case 145:
            var2 = _closure1_slot24;
            var14 = var3 + var2;
case 175:
            var _closure2_slot1 = var14;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 21;
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
            var7 = 7469358191910.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot54;
            var1['__initData'] = var7;
            var12 = var2.bind(var5)(var1);
            var1 = 71;
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
            var2 = _closure1_slot63;
            var5 = var2.bind(var4)();
            var2 = null;
            if(!(var2 == var5)) { _fun0041_ip = 176; continue _fun0041 }
case 177:
            var5 = var3;
            if(!(var2 != var1)) { _fun0041_ip = 176; continue _fun0041 }
case 178:
            var5 = var1;
case 176:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 72;
            var1 = var1[var7];
            var8 = var3.bind(var4)(var1);
            var3 = var8.hex2rgb;
            var1 = 1;
            var1 = var3.bind(var8)(var5, var1);
            var3 = var2 != var1;
            var16 = 'transparent';
            var11 = var16;
            if(!var3) { _fun0041_ip = 179; continue _fun0041 }
case 180:
            var11 = var1;
case 179:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var3 = var3.bind(var4)(var1);
            var1 = var3.hex2rgb;
            var15 = 0;
            var1 = var1.bind(var3)(var5, var15);
            var2 = var2 != var1;
            if(!var2) { _fun0041_ip = 181; continue _fun0041 }
case 182:
            var16 = var1;
case 181:
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
            var7 = 67;
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
    var _closure1_slot55 = var5;
    var5 = var8.memo;
    var2 = function() {
        var2 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 20;
        var1 = var9[var1];
        var4 = undefined;
        var7 = var2.bind(var4)(var1);
        var5 = var7.useStateFromStores;
        var1 = _closure1_slot8;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() {
            var1 = _closure1_slot8;
            var1 = var1.gradientPreset;
            return var1;
        };
        var5 = var5.bind(var7)(var3, var1);
        var3 = _closure1_slot26;
        var1 = 73;
        var1 = var9[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.ThemeContextProvider;
        var1 = {};
        var1['gradient'] = var5;
        var8 = _closure1_slot25;
        var7 = _closure1_slot55;
        var5 = {};
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(3);
        var5[0] = var7;
        var10 = _closure1_slot25;
        var8 = _closure1_slot53;
        var7 = {};
        var7 = var10.bind(var4)(var8, var7);
        var5[1] = var7;
        var8 = _closure1_slot25;
        var7 = _closure1_slot1;
        var6 = 74;
        var6 = var9[var6];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var6 = var8.bind(var4)(var7, var6);
        var5[2] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var5.bind(var8)(var2);
    var5 = 75;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/YouBar.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useYouBarGradientBackground'] = var4;
    var3['ThemedYouBar'] = var2;
    return var1;
})();