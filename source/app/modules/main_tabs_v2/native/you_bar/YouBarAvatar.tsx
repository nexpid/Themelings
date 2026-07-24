// app/modules/main_tabs_v2/native/you_bar/YouBarAvatar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function YouBarAvatarLarge(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var20 = var1.transitionState;
            var _closure2_slot0 = var20;
            var11 = var1.cleanup;
            var _closure2_slot1 = var11;
            var5 = undefined;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var1 = _closure1_slot23;
            var10 = var1.bind(var5)();
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 11;
            var2 = var4[var1];
            var8 = var6.bind(var5)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var18 = var7.bind(var8)(var3, var2);
            var _closure2_slot2 = var18;
            var1 = var4[var1];
            var7 = var6.bind(var5)(var1);
            var3 = var7.useStateFromStores;
            var1 = _closure1_slot9;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var3.bind(var7)(var2, var1);
            var19 = 12;
            var1 = var4[var19];
            var1 = var6.bind(var5)(var1);
            var2 = var1.AVATAR_SIZE_MAP;
            var1 = _closure1_slot12;
            var2 = var2[var1];
            var1 = _closure1_slot19;
            var7 = var2 / var1;
            var _closure2_slot3 = var7;
            var2 = _closure1_slot19;
            var1 = var4[var19];
            var1 = var6.bind(var5)(var1);
            var3 = var1.AVATAR_SIZE_MAP;
            var1 = _closure1_slot12;
            var1 = var3[var1];
            var1 = var2 - var1;
            var16 = 2;
            var1 = var1 / var16;
            var _closure2_slot4 = var1;
            var14 = 13;
            var2 = var4[var14];
            var2 = var6.bind(var5)(var2);
            var2 = var2.TransitionStates;
            var2 = var2.MOUNTED;
            var3 = var20 === var2;
            var2 = 14;
            var4 = var4[var2];
            var8 = var6.bind(var5)(var4);
            var6 = var8.useSharedValue;
            var4 = 0;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = 1;
case 2:
            var21 = var6.bind(var8)(var4);
            _closure2_slot5 = var21;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var2];
            var8 = var6.bind(var5)(var4);
            var6 = var8.useSharedValue;
            var22 = 1;
            var4 = var22;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var7;
case 4:
            var25 = var6.bind(var8)(var4);
            _closure2_slot6 = var25;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var2];
            var8 = var6.bind(var5)(var4);
            var6 = var8.useSharedValue;
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = -var1;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var9 = _closure1_slot16;
            var4 = -var9;
case 8:
            var24 = var6.bind(var8)(var4);
            _closure2_slot7 = var24;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var2];
            var6 = var6.bind(var5)(var4);
            var4 = var6.useSharedValue;
            if(var3) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = -var1;
            _fun0001_ip = 11; continue _fun0001;
case 9:
            var8 = _closure1_slot16;
            var9 = -var8;
            var15 = _closure1_slot19;
            var8 = _closure1_slot14;
            var8 = var15 - var8;
            var8 = var8 / var16;
            var3 = var9 - var8;
case 11:
            var23 = var4.bind(var6)(var3);
            _closure2_slot8 = var23;
            var6 = _closure1_slot5;
            var4 = var6.useEffect;
            var3 = new Array(7);
            var3[0] = var20;
            var3[1] = var21;
            var3[2] = var25;
            var3[3] = var24;
            var3[4] = var23;
            var3[5] = var7;
            var3[6] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.TransitionStates;
                    var3 = var3.YEETED;
                    var6 = var4 === var3;
                    var8 = _closure2_slot5;
                    var4 = var8.set;
                    var7 = 1;
                    var3 = var7;
                    if(!var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var3 = 0;
case 12:
                    var3 = var4.bind(var8)(var3);
                    var4 = _closure2_slot6;
                    var3 = var4.set;
                    if(!var6) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var7 = _closure2_slot3;
case 14:
                    var3 = var3.bind(var4)(var7);
                    var7 = _closure2_slot7;
                    var4 = var7.set;
                    if(var6) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var3 = _closure1_slot16;
                    var3 = -var3;
                    _fun0002_ip = 18; continue _fun0002;
case 16:
                    var8 = _closure2_slot4;
                    var3 = -var8;
case 18:
                    var3 = var4.bind(var7)(var3);
                    var4 = _closure2_slot8;
                    var3 = var4.set;
                    if(var6) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var6 = _closure1_slot16;
                    var6 = -var6;
                    var7 = _closure1_slot19;
                    var2 = _closure1_slot14;
                    var7 = var7 - var2;
                    var2 = 2;
                    var2 = var7 / var2;
                    var2 = var6 - var2;
                    _fun0002_ip = 21; continue _fun0002;
case 19:
                    var5 = _closure2_slot4;
                    var2 = -var5;
case 21:
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var4.bind(var6)(var1, var3);
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 15;
            var1 = var7[var1];
            var3 = var4.bind(var5)(var1);
            var1 = var3.useAvatarDecoration;
            var8 = var1.bind(var3)(var13);
            var9 = _closure1_slot5;
            var6 = var9.useMemo;
            var3 = new Array(1);
            var3[0] = var18;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = _closure1_slot20;
                    var2 = var2.UNKNOWN;
                    if(!(var3 !== var2)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var2 = _closure2_slot2;
                    _fun0003_ip = 24; continue _fun0003;
case 22:
                    var1 = _closure1_slot20;
                    var2 = var1.OFFLINE;
case 24:
                    var1 = null;
                    if(!(var1 == var2)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var1 = undefined;
                    return var1;
case 25:
                    var6 = _closure1_slot15;
                    var4 = 2;
                    var2 = var6 / var4;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 12;
                    var1 = var10[var1];
                    var8 = undefined;
                    var1 = var9.bind(var8)(var1);
                    var1 = var1.STATUS_PADDING;
                    var2 = var2 + var1;
                    var1 = _closure1_slot19;
                    var3 = var1 - var2;
                    var1 = 4;
                    var1 = var6 / var1;
                    var1 = var1 * var4;
                    var6 = var3 - var1;
                    var1 = {};
                    var3 = {};
                    var7 = 16;
                    var7 = var10[var7];
                    var7 = var9.bind(var8)(var7);
                    var7 = var7.CutoutShape;
                    var7 = var7.Circle;
                    var3['shape'] = var7;
                    var7 = _closure1_slot18;
                    var7 = var6 + var7;
                    var3['x'] = var7;
                    var5 = _closure1_slot18;
                    var5 = var6 + var5;
                    var3['y'] = var5;
                    var2 = var4 * var2;
                    var3['size'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['nativeCutouts'] = var2;
                    return var1;
                }
            };
            var15 = var6.bind(var9)(var1, var3);
            var1 = var7[var2];
            var6 = var4.bind(var5)(var1);
            var3 = var6.useAnimatedStyle;
            var1 = function V() {
                var1 = {};
                var5 = {};
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var3 = 17;
                var4 = var13[var3];
                var11 = undefined;
                var8 = var12.bind(var11)(var4);
                var7 = var8.withSpring;
                var6 = _closure2_slot6;
                var4 = var6.get;
                var6 = var4.bind(var6)();
                var4 = _closure1_slot17;
                var4 = var7.bind(var8)(var6, var4);
                var5['scale'] = var4;
                var4 = new Array(1);
                var4[0] = var5;
                var1['transform'] = var4;
                var4 = var13[var3];
                var7 = var12.bind(var11)(var4);
                var6 = var7.withSpring;
                var5 = _closure2_slot7;
                var4 = var5.get;
                var5 = var4.bind(var5)();
                var4 = _closure1_slot17;
                var4 = var6.bind(var7)(var5, var4);
                var1['left'] = var4;
                var4 = var13[var3];
                var7 = var12.bind(var11)(var4);
                var6 = var7.withSpring;
                var5 = _closure2_slot8;
                var4 = var5.get;
                var5 = var4.bind(var5)();
                var4 = _closure1_slot17;
                var4 = var6.bind(var7)(var5, var4);
                var1['top'] = var4;
                var3 = var13[var3];
                var7 = var12.bind(var11)(var3);
                var6 = var7.withSpring;
                var4 = _closure2_slot5;
                var3 = var4.get;
                var5 = var3.bind(var4)();
                var16 = _closure1_slot17;
                var3 = function s(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        if(!var1) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                        var3 = _closure2_slot0;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 13;
                        var4 = var4[var2];
                        var2 = undefined;
                        var2 = var5.bind(var2)(var4);
                        var2 = var2.TransitionStates;
                        var2 = var2.YEETED;
                        var1 = var3 === var2;
case 27:
                        if(!var1) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.runOnJS;
                        var1 = _closure2_slot1;
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.bind(var2)();
case 29:
                        var1 = undefined;
                        return var1;
                    }
                };
                var8 = {};
                var10 = _closure2_slot0;
                var8['transitionState'] = var10;
                var10 = 13;
                var10 = var13[var10];
                var10 = var12.bind(var11)(var10);
                var10 = var10.TransitionStates;
                var8['TransitionStates'] = var10;
                var10 = 14;
                var10 = var13[var10];
                var10 = var12.bind(var11)(var10);
                var10 = var10.runOnJS;
                var8['runOnJS'] = var10;
                var9 = _closure2_slot1;
                var8['cleanup'] = var9;
                var3['__closure'] = var8;
                var8 = 9945521131664.0;
                var3['__workletHash'] = var8;
                var2 = _closure1_slot25;
                var3['__initData'] = var2;
                var15 = 'respect-motion-settings';
                var18 = var7;
                var17 = var5;
                var14 = var3;
                var2 = var18[var6](var17, var16, var15, var14, var13);
                var1['opacity'] = var2;
                return var1;
            };
            var9 = {};
            var26 = 17;
            var26 = var7[var26];
            var26 = var4.bind(var5)(var26);
            var26 = var26.withSpring;
            var9['withSpring'] = var26;
            var9['scale'] = var25;
            var25 = _closure1_slot17;
            var9['YOU_BAR_SPRING_CONFIG'] = var25;
            var9['left'] = var24;
            var9['top'] = var23;
            var9['opacity'] = var21;
            var9['transitionState'] = var20;
            var14 = var7[var14];
            var14 = var4.bind(var5)(var14);
            var14 = var14.TransitionStates;
            var9['TransitionStates'] = var14;
            var14 = var7[var2];
            var14 = var4.bind(var5)(var14);
            var14 = var14.runOnJS;
            var9['runOnJS'] = var14;
            var9['cleanup'] = var11;
            var1['__closure'] = var9;
            var9 = 4621027458354.0;
            var1['__workletHash'] = var9;
            var9 = _closure1_slot24;
            var1['__initData'] = var9;
            var11 = var3.bind(var6)(var1);
            var3 = 18;
            var1 = var7[var3];
            var20 = var4.bind(var5)(var1);
            var14 = var20.useToken;
            var6 = _closure1_slot1;
            var1 = 10;
            var9 = var7[var1];
            var9 = var6.bind(var5)(var9);
            var9 = var9.colors;
            var9 = var9.MOBILE_FLOATINGBAR_BACKGROUND;
            var26 = var14.bind(var20)(var9);
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useToken;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.colors;
            var1 = var1.BORDER_SUBTLE;
            var21 = var3.bind(var4)(var1);
            var7 = null;
            var3 = var7 == var13;
            var1 = null;
            if(var3) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var4 = _closure1_slot22;
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = var6[var2];
            var2 = var9.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var14 = var10.avatarShadow;
            var10 = new Array(3);
            var10[0] = var14;
            var14 = {};
            var20 = 'absolute';
            var14['position'] = var20;
            var23 = _closure1_slot19;
            var14['width'] = var23;
            var23 = _closure1_slot19;
            var14['height'] = var23;
            var10[1] = var14;
            var10[2] = var11;
            var2['style'] = var10;
            var10 = _closure1_slot21;
            var14 = 16;
            var6 = var6[var14];
            var9 = var9.bind(var5)(var6);
            var6 = {};
            var23 = var7 == var15;
            var11 = undefined;
            if(var23) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var11 = var15.nativeCutouts;
case 33:
            var6['cutouts'] = var11;
            var11 = {};
            var11['position'] = var20;
            var23 = _closure1_slot19;
            var11['width'] = var23;
            var23 = _closure1_slot19;
            var11['height'] = var23;
            var6['style'] = var11;
            var24 = _closure1_slot21;
            var23 = _closure1_slot6;
            var11 = {};
            var25 = {};
            var27 = _closure1_slot19;
            var25['width'] = var27;
            var27 = _closure1_slot19;
            var25['height'] = var27;
            var27 = _closure1_slot19;
            var27 = var27 / var16;
            var25['borderRadius'] = var27;
            var25['backgroundColor'] = var26;
            var11['style'] = var25;
            var11 = var24.bind(var5)(var23, var11);
            var6['children'] = var11;
            var9 = var10.bind(var5)(var9, var6);
            var6 = new Array(4);
            var6[0] = var9;
            var11 = _closure1_slot21;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var19];
            var9 = var10.bind(var5)(var9);
            var10 = var9.Avatar;
            var9 = {};
            var9['user'] = var13;
            var9['guildId'] = var5;
            var13 = _closure1_slot10;
            var9['size'] = var13;
            var13 = false;
            var9['animate'] = var13;
            var19 = true;
            var9['needsOffscreenAlphaCompositing'] = var19;
            var19 = _closure1_slot20;
            var19 = var19.UNKNOWN;
            if(!(var18 === var19)) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var19 = _closure1_slot20;
            var18 = var19.OFFLINE;
case 35:
            var9['status'] = var18;
            var18 = _closure1_slot15;
            var9['statusSizeOverride'] = var18;
            var9['cutout'] = var15;
            var18 = {};
            var23 = _closure1_slot13;
            var19 = _closure1_slot18;
            var19 = var23 - var19;
            var18['right'] = var19;
            var23 = _closure1_slot13;
            var19 = _closure1_slot18;
            var19 = var23 - var19;
            var18['bottom'] = var19;
            var9['statusStyle'] = var18;
            var9 = var11.bind(var5)(var10, var9);
            var6[1] = var9;
            var11 = _closure1_slot21;
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var14];
            var10 = var10.bind(var5)(var9);
            var9 = {};
            var18 = var7 == var15;
            var14 = undefined;
            if(var18) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var19 = var15.nativeCutouts;
            var18 = var7 == var19;
            var14 = undefined;
            if(var18) { _fun0001_ip = 37; continue _fun0001 }
case 39:
            var18 = var19.map;
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
            var14 = var18.bind(var19)(var17);
case 37:
            var9['cutouts'] = var14;
            var14 = {'position': 'absolute', 'top': 4294967295, 'left': 4294967295};
            var17 = _closure1_slot19;
            var17 = var17 + var16;
            var14['width'] = var17;
            var17 = _closure1_slot19;
            var17 = var17 + var16;
            var14['height'] = var17;
            var9['style'] = var14;
            var14 = 'none';
            var9['pointerEvents'] = var14;
            var18 = _closure1_slot21;
            var17 = _closure1_slot6;
            var14 = {};
            var19 = {};
            var23 = _closure1_slot19;
            var23 = var23 + var16;
            var19['width'] = var23;
            var23 = _closure1_slot19;
            var23 = var23 + var16;
            var19['height'] = var23;
            var23 = _closure1_slot19;
            var23 = var23 + var16;
            var23 = var23 / var16;
            var19['borderRadius'] = var23;
            var19['borderWidth'] = var22;
            var19['borderColor'] = var21;
            var14['style'] = var19;
            var14 = var18.bind(var5)(var17, var14);
            var9['children'] = var14;
            var9 = var11.bind(var5)(var10, var9);
            var6[2] = var9;
            var7 = var7 != var8;
            if(!var7) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var11 = _closure1_slot21;
            var10 = _closure1_slot1;
            var19 = _closure1_slot2;
            var9 = 19;
            var9 = var19[var9];
            var10 = var10.bind(var5)(var9);
            var9 = {};
            var18 = _closure1_slot0;
            var17 = 20;
            var14 = var19[var17];
            var22 = var18.bind(var5)(var14);
            var21 = var22.getDecorationSizeForAvatarSize;
            var14 = _closure1_slot10;
            var14 = var21.bind(var22)(var14);
            var9['size'] = var14;
            var9['avatarDecoration'] = var8;
            var14 = {};
            var14['position'] = var20;
            var20 = var19[var17];
            var22 = var18.bind(var5)(var20);
            var21 = var22.getDecorationSizeForAvatarSize;
            var20 = _closure1_slot10;
            var21 = var21.bind(var22)(var20);
            var20 = _closure1_slot19;
            var20 = var21 - var20;
            var20 = -var20;
            var20 = var20 / var16;
            var14['top'] = var20;
            var20 = var19[var17];
            var22 = var18.bind(var5)(var20);
            var21 = var22.getDecorationSizeForAvatarSize;
            var20 = _closure1_slot10;
            var21 = var21.bind(var22)(var20);
            var20 = _closure1_slot19;
            var20 = var21 - var20;
            var20 = -var20;
            var20 = var20 / var16;
            var14['left'] = var20;
            var9['decorationStyle'] = var14;
            var9['animate'] = var13;
            var13 = var19[var17];
            var14 = var18.bind(var5)(var13);
            var13 = var14.getDecorationCutoutForAvatarCutout;
            var17 = var19[var17];
            var19 = var18.bind(var5)(var17);
            var18 = var19.getDecorationSizeForAvatarSize;
            var17 = _closure1_slot10;
            var17 = var18.bind(var19)(var17);
            var12 = _closure1_slot19;
            var12 = var17 - var12;
            var12 = var12 / var16;
            var12 = var13.bind(var14)(var15, var12);
            var9['cutout'] = var12;
            var8 = var8.asset;
            var7 = var11.bind(var5)(var10, var9, var8);
case 40:
            var6[3] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 31:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function YouBarAvatar(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var7 = var2.transitionState;
            var _closure2_slot0 = var7;
            var14 = var2.cleanup;
            var _closure2_slot1 = var14;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 11;
            var4 = var3[var2];
            var10 = var8.bind(var5)(var4);
            var9 = var10.useStateFromStores;
            var4 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var9.bind(var10)(var6, var4);
            var2 = var3[var2];
            var9 = var8.bind(var5)(var2);
            var6 = var9.useStateFromStores;
            var2 = _closure1_slot9;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var6.bind(var9)(var4, var2);
            var2 = 15;
            var2 = var3[var2];
            var4 = var8.bind(var5)(var2);
            var2 = var4.useAvatarDecoration;
            var12 = var2.bind(var4)(var9);
            var2 = 14;
            var4 = var3[var2];
            var6 = var8.bind(var5)(var4);
            var4 = var6.useSharedValue;
            var17 = 13;
            var3 = var3[var17];
            var3 = var8.bind(var5)(var3);
            var3 = var3.TransitionStates;
            var8 = var3.MOUNTED;
            var3 = 0;
            if(!(var7 === var8)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var3 = 1;
case 42:
            var8 = var4.bind(var6)(var3);
            _closure2_slot2 = var8;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = var15[var2];
            var6 = var16.bind(var5)(var3);
            var4 = var6.useAnimatedStyle;
            var3 = function o() {
                var1 = {};
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var3 = 17;
                var3 = var13[var3];
                var11 = undefined;
                var7 = var12.bind(var11)(var3);
                var6 = var7.withSpring;
                var4 = _closure2_slot2;
                var3 = var4.get;
                var5 = var3.bind(var4)();
                var16 = _closure1_slot17;
                var3 = function s(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = arg1;
                        if(!var1) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                        var3 = _closure2_slot0;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 13;
                        var4 = var4[var2];
                        var2 = undefined;
                        var2 = var5.bind(var2)(var4);
                        var2 = var2.TransitionStates;
                        var2 = var2.YEETED;
                        var1 = var3 === var2;
case 27:
                        if(!var1) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.runOnJS;
                        var1 = _closure2_slot1;
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.bind(var2)();
case 29:
                        var1 = undefined;
                        return var1;
                    }
                };
                var8 = {};
                var10 = _closure2_slot0;
                var8['transitionState'] = var10;
                var10 = 13;
                var10 = var13[var10];
                var10 = var12.bind(var11)(var10);
                var10 = var10.TransitionStates;
                var8['TransitionStates'] = var10;
                var10 = 14;
                var10 = var13[var10];
                var10 = var12.bind(var11)(var10);
                var10 = var10.runOnJS;
                var8['runOnJS'] = var10;
                var9 = _closure2_slot1;
                var8['cleanup'] = var9;
                var3['__closure'] = var8;
                var8 = 1724804022422.0;
                var3['__workletHash'] = var8;
                var2 = _closure1_slot27;
                var3['__initData'] = var2;
                var15 = 'respect-motion-settings';
                var18 = var7;
                var17 = var5;
                var14 = var3;
                var2 = var18[var6](var17, var16, var15, var14, var13);
                var1['opacity'] = var2;
                return var1;
            };
            var13 = {};
            var18 = 17;
            var18 = var15[var18];
            var18 = var16.bind(var5)(var18);
            var18 = var18.withSpring;
            var13['withSpring'] = var18;
            var13['opacity'] = var8;
            var18 = _closure1_slot17;
            var13['YOU_BAR_SPRING_CONFIG'] = var18;
            var13['transitionState'] = var7;
            var17 = var15[var17];
            var17 = var16.bind(var5)(var17);
            var17 = var17.TransitionStates;
            var13['TransitionStates'] = var17;
            var15 = var15[var2];
            var15 = var16.bind(var5)(var15);
            var15 = var15.runOnJS;
            var13['runOnJS'] = var15;
            var13['cleanup'] = var14;
            var3['__closure'] = var13;
            var13 = 8237916771781.0;
            var3['__workletHash'] = var13;
            var13 = _closure1_slot26;
            var3['__initData'] = var13;
            var14 = var4.bind(var6)(var3);
            var6 = _closure1_slot5;
            var4 = var6.useEffect;
            var3 = new Array(2);
            var3[0] = var8;
            var3[1] = var7;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var6 = _closure2_slot0;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.TransitionStates;
                    var5 = var2.YEETED;
                    var2 = 1;
                    if(!(var6 === var5)) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                    var2 = 0;
case 44:
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var4.bind(var6)(var1, var3);
            var1 = null;
            if(!(var1 != var9)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 12;
            var3 = var13[var6];
            var3 = var7.bind(var5)(var3);
            var4 = var3.AVATAR_SIZE_MAP;
            var3 = _closure1_slot12;
            var4 = var4[var3];
            var3 = var13[var6];
            var3 = var7.bind(var5)(var3);
            var8 = var3.AVATAR_SIZE_MAP;
            var3 = _closure1_slot11;
            var3 = var8[var3];
            var4 = var4 - var3;
            var3 = 2;
            var8 = var4 / var3;
            var4 = _closure1_slot21;
            var3 = _closure1_slot1;
            var2 = var13[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.View;
            var2 = {};
            var15 = {};
            var16 = 'absolute';
            var15['position'] = var16;
            var8 = -var8;
            var15['top'] = var8;
            var15['left'] = var8;
            var8 = new Array(2);
            var8[0] = var15;
            var8[1] = var14;
            var2['style'] = var8;
            var8 = _closure1_slot21;
            var6 = var13[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.Avatar;
            var6 = {};
            var6['user'] = var9;
            var6['guildId'] = var5;
            var9 = _closure1_slot12;
            var6['size'] = var9;
            var9 = false;
            var6['animate'] = var9;
            var9 = true;
            var6['needsOffscreenAlphaCompositing'] = var9;
            var6['avatarDecoration'] = var12;
            var12 = _closure1_slot20;
            var12 = var12.UNKNOWN;
            if(!(var10 === var12)) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var11 = _closure1_slot20;
            var10 = var11.OFFLINE;
case 48:
            var6['status'] = var10;
            var6['autoStatusCutout'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 46:
            return var1;
        }
    };
    var _closure1_slot33 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
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
    var4 = var5.bind(var1)(var4);
    var8 = var4.YOU_BAR_AVATAR_LARGE_SIZE;
    var _closure1_slot10 = var8;
    var8 = var4.YOU_BAR_AVATAR_PLACEHOLDER_SIZE;
    var _closure1_slot11 = var8;
    var8 = var4.YOU_BAR_AVATAR_SIZE;
    var _closure1_slot12 = var8;
    var8 = var4.YOU_BAR_STATUS_INSET;
    var _closure1_slot13 = var8;
    var8 = var4.YOU_BAR_HEIGHT;
    var _closure1_slot14 = var8;
    var8 = var4.YOU_BAR_LARGE_STATUS_SIZE;
    var _closure1_slot15 = var8;
    var8 = var4.YOU_BAR_PADDING;
    var _closure1_slot16 = var8;
    var8 = var4.YOU_BAR_SPRING_CONFIG;
    var _closure1_slot17 = var8;
    var8 = var4.YOU_BAR_STATUS_OFFSET;
    var _closure1_slot18 = var8;
    var4 = var4.YOU_BAR_AVATAR_LARGE_PX;
    var _closure1_slot19 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StatusTypes;
    var _closure1_slot20 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot21 = var8;
    var4 = var4.jsxs;
    var _closure1_slot22 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 10;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.shadows;
    var14 = var11.SHADOW_MEDIUM;
    var15 = var10;
    var11 = copyDataProperties(var15, var14);
    var4['avatarShadow'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot23 = var4;
    var4 = {};
    var8 = "function YouBarAvatarTsx1(){const{withSpring,scale,YOU_BAR_SPRING_CONFIG,left,top,opacity,transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;return{transform:[{scale:withSpring(scale.get(),YOU_BAR_SPRING_CONFIG)}],left:withSpring(left.get(),YOU_BAR_SPRING_CONFIG),top:withSpring(top.get(),YOU_BAR_SPRING_CONFIG),opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}})};}";
    var4['code'] = var8;
    var _closure1_slot24 = var4;
    var4 = {};
    var8 = 'function YouBarAvatarTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}}';
    var4['code'] = var8;
    var _closure1_slot25 = var4;
    var4 = {};
    var8 = "function YouBarAvatarTsx3(){const{withSpring,opacity,YOU_BAR_SPRING_CONFIG,transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;return{opacity:withSpring(opacity.get(),YOU_BAR_SPRING_CONFIG,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}})};}";
    var4['code'] = var8;
    var _closure1_slot26 = var4;
    var4 = {};
    var8 = 'function YouBarAvatarTsx4(finished){const{transitionState,TransitionStates,runOnJS,cleanup}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanup)();}}';
    var4['code'] = var8;
    var _closure1_slot27 = var4;
    var4 = {};
    var8 = 'function YouBarAvatarTsx5(){const{withSpring,isAvatarPressed,YOU_BAR_SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(isAvatarPressed?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}';
    var4['code'] = var8;
    var _closure1_slot28 = var4;
    var4 = {};
    var8 = 'function YouBarAvatarTsx6(){const{runOnJS,setIsAvatarPressed}=this.__closure;runOnJS(setIsAvatarPressed)(false);}';
    var4['code'] = var8;
    var _closure1_slot29 = var4;
    var4 = {};
    var8 = 'function YouBarAvatarTsx7(){const{runOnJS,handleAvatarLongPress}=this.__closure;runOnJS(handleAvatarLongPress)();}';
    var4['code'] = var8;
    var _closure1_slot30 = var4;
    var4 = {};
    var8 = 'function YouBarAvatarTsx8(){const{runOnJS,setIsAvatarPressed}=this.__closure;runOnJS(setIsAvatarPressed)(true);}';
    var4['code'] = var8;
    var _closure1_slot31 = var4;
    var4 = var7.memo;
    var2 = function YouBarAvatarAnimated(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var1 = var2.isLargeAvatar;
            var _closure2_slot0 = var1;
            var3 = var2.onPress;
            var _closure2_slot1 = var3;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 11;
            var2 = var14[var2];
            var5 = undefined;
            var7 = var13.bind(var5)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot9;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var2 = _closure1_slot9;
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
            var9 = 14;
            var4 = var14[var9];
            var7 = var13.bind(var5)(var4);
            var6 = var7.useAnimatedStyle;
            var4 = function _() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = {};
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 17;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.withSpring;
                    var7 = _closure2_slot2;
                    var4 = 1;
                    if(!var7) { _fun0009_ip = 30; continue _fun0009 }
case 50:
                    var4 = 0.98;
case 30:
                    var2 = _closure1_slot17;
                    var2 = var5.bind(var6)(var4, var2);
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var8 = {};
            var11 = 17;
            var11 = var14[var11];
            var11 = var13.bind(var5)(var11);
            var11 = var11.withSpring;
            var8['withSpring'] = var11;
            var8['isAvatarPressed'] = var10;
            var10 = _closure1_slot17;
            var8['YOU_BAR_SPRING_CONFIG'] = var10;
            var4['__closure'] = var8;
            var8 = 10944764008850.0;
            var4['__workletHash'] = var8;
            var8 = _closure1_slot28;
            var4['__initData'] = var8;
            var19 = var6.bind(var7)(var4);
            var7 = _closure1_slot5;
            var6 = var7.useCallback;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0010_ip = 51; continue _fun0010 }
case 52:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
case 51:
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
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0011_ip = 53; continue _fun0011 }
case 54:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var4 = 21;
                        var6 = var2[var4];
                        var3 = undefined;
                        var7 = var5.bind(var3)(var6);
                        var6 = var7.triggerHapticFeedback;
                        var4 = var2[var4];
                        var4 = var5.bind(var3)(var4);
                        var4 = var4.HapticFeedbackTypes;
                        var4 = var4.SOFT;
                        var4 = var6.bind(var7)(var4);
                        var4 = 23;
                        var4 = var2[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = 22;
                        var4 = var2[var4];
                        var2 = var2.paths;
                        var2 = var5.bind(var3)(var4, var2);
                        SaveGenerator(address=101);
case 55:
                        return var2;
case 56:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0011_ip = 57; continue _fun0011 }
case 58:
                        var4 = var2.openUserSettings;
                        var4 = var4.bind(var3)();
                        var5 = _closure2_slot3;
                        var4 = false;
                        var4 = var5.bind(var3)(var4);
                        return var3;
case 57:
                        return var2;
case 53:
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
                var2 = 24;
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
                var2 = function s() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
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
                var7 = 14;
                var6 = var10[var7];
                var6 = var9.bind(var8)(var6);
                var6 = var6.runOnJS;
                var11['runOnJS'] = var6;
                var6 = _closure2_slot3;
                var11['setIsAvatarPressed'] = var6;
                var2['__closure'] = var11;
                var11 = 11956186059259.0;
                var2['__workletHash'] = var11;
                var11 = _closure1_slot31;
                var2['__initData'] = var11;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onStart;
                var2 = function n() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
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
                var11 = 446001392642.0;
                var2['__workletHash'] = var11;
                var11 = _closure1_slot30;
                var2['__initData'] = var11;
                var3 = var3.bind(var5)(var2);
                var2 = var3.onFinalize;
                var1 = function t() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
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
                var5 = 1675248979678.0;
                var1['__workletHash'] = var5;
                var4 = _closure1_slot29;
                var1['__initData'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var7)(var3, var4);
            var8 = _closure1_slot5;
            var7 = var8.useCallback;
            var4 = function(arg1, arg2, arg3, arg4) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var5 = _closure1_slot21;
                    var2 = arg2;
                    if(var2) { _fun0012_ip = 59; continue _fun0012 }
case 52:
                    var4 = _closure1_slot33;
                    _fun0012_ip = 51; continue _fun0012;
case 59:
                    var4 = _closure1_slot32;
case 51:
                    var3 = {};
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
            if(var2) { _fun0008_ip = 60; continue _fun0008 }
case 61:
            var4 = _closure1_slot21;
            var13 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 24;
            var2 = var18[var2];
            var2 = var13.bind(var5)(var2);
            var3 = var2.GestureDetector;
            var2 = {};
            var2['gesture'] = var6;
            var8 = _closure1_slot21;
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
            var11 = _closure1_slot21;
            var10 = _closure1_slot1;
            var9 = var18[var9];
            var9 = var10.bind(var5)(var9);
            var10 = var9.View;
            var9 = {};
            var20 = {};
            var14 = 12;
            var21 = var18[var14];
            var21 = var13.bind(var5)(var21);
            var22 = var21.AVATAR_SIZE_MAP;
            var21 = _closure1_slot11;
            var21 = var22[var21];
            var20['height'] = var21;
            var14 = var18[var14];
            var14 = var13.bind(var5)(var14);
            var21 = var14.AVATAR_SIZE_MAP;
            var14 = _closure1_slot11;
            var14 = var21[var14];
            var20['width'] = var14;
            var14 = 'relative';
            var20['position'] = var14;
            var14 = new Array(2);
            var14[0] = var20;
            var14[1] = var19;
            var9['style'] = var14;
            var14 = _closure1_slot21;
            var12 = 13;
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
case 60:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/you_bar/YouBarAvatar.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();