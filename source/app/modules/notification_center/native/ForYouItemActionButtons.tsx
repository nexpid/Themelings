// app/modules/notification_center/native/ForYouItemActionButtons.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function focusChatInput(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var1 = null;
            var4 = var1 != var5;
            var1 = undefined;
            var3 = undefined;
            if(!var4) { _fun0001_ip = 27; continue _fun0001 }
 18:
            var4 = {};
            var4['channelId'] = var5;
            var3 = var4;
 27:
            var _closure2_slot0 = var3;
            var3 = global;
            var4 = var3.setTimeout;
            var3 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var4 = var2.ComponentDispatch;
                var3 = var4.dispatch;
                var1 = _closure1_slot9;
                var2 = var1.TEXTAREA_FOCUS;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = 0;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var4 = function IncomingFriendRequestActions(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var27 = var1.onAccept;
            var24 = var1.onIgnore;
            var12 = var1.onWavePress;
            var6 = var1.pressed;
            var _closure2_slot0 = var6;
            var14 = var1.compactMode;
            var1 = _closure1_slot14;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var33 = _closure1_slot0;
            var13 = _closure1_slot2;
            var18 = 10;
            var1 = var13[var18];
            var3 = var33.bind(var4)(var1);
            var2 = var3.useSharedValue;
            var1 = 0;
            var16 = var2.bind(var3)(var1);
            var _closure2_slot1 = var16;
            var1 = var13[var18];
            var2 = var33.bind(var4)(var1);
            var1 = var2.useSharedValue;
            var3 = -1;
            var11 = var1.bind(var2)(var3);
            var _closure2_slot2 = var11;
            var1 = var13[var18];
            var2 = var33.bind(var4)(var1);
            var1 = var2.useSharedValue;
            var10 = var1.bind(var2)(var3);
            var _closure2_slot3 = var10;
            var1 = var13[var18];
            var2 = var33.bind(var4)(var1);
            var1 = var2.useSharedValue;
            var7 = var1.bind(var2)(var3);
            var _closure2_slot4 = var7;
            var1 = var13[var18];
            var3 = var33.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function u() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 11;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var5 = var6.withTiming;
                    var4 = _closure2_slot0;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var4 = 1;
                    if(!var3) { _fun0003_ip = 56; continue _fun0003 }
 54:
                    var4 = 0;
 56:
                    var3 = {};
                    var7 = 150;
                    var3['duration'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var1['opacity'] = var3;
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 'auto';
                    if(!var3) { _fun0003_ip = 99; continue _fun0003 }
 95:
                    var2 = 'none';
 99:
                    var1['pointerEvents'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var15 = 11;
            var9 = var13[var15];
            var9 = var33.bind(var4)(var9);
            var9 = var9.withTiming;
            var5['withTiming'] = var9;
            var5['pressed'] = var6;
            var1['__closure'] = var5;
            var5 = 100815030677.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot16;
            var1['__initData'] = var5;
            var9 = var2.bind(var3)(var1);
            var1 = var13[var18];
            var3 = var33.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function _() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var6 = 1;
                    var12 = var6;
                    if(var1) { _fun0004_ip = 55; continue _fun0004 }
 25:
                    var3 = _closure2_slot1;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var4 = _closure2_slot2;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var12 = var3 / var1;
 55:
                    var4 = _closure2_slot2;
                    var1 = var4.get;
                    var3 = var1.bind(var4)();
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var1 = var1 * var12;
                    var1 = var3 - var1;
                    var4 = _closure2_slot0;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var13 = 0;
                    if(var3) { _fun0004_ip = 113; continue _fun0004 }
 103:
                    var3 = -var1;
                    var1 = 2;
                    var13 = var3 / var1;
 113:
                    var1 = {};
                    var10 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 11;
                    var9 = var8[var3];
                    var4 = undefined;
                    var11 = var7.bind(var4)(var9);
                    var9 = var11.withTiming;
                    var9 = var9.bind(var11)(var12);
                    var10['scaleX'] = var9;
                    var9 = new Array(2);
                    var9[0] = var10;
                    var10 = {};
                    var11 = var8[var3];
                    var12 = var7.bind(var4)(var11);
                    var11 = var12.withTiming;
                    var11 = var11.bind(var12)(var13);
                    var10['translateX'] = var11;
                    var9[1] = var10;
                    var1['transform'] = var9;
                    var3 = var8[var3];
                    var4 = var7.bind(var4)(var3);
                    var3 = var4.withTiming;
                    var8 = _closure2_slot0;
                    var7 = var8.get;
                    var7 = var7.bind(var8)();
                    var5 = 0;
                    if(!var7) { _fun0004_ip = 234; continue _fun0004 }
 231:
                    var5 = var6;
 234:
                    var3 = var3.bind(var4)(var5);
                    var1['opacity'] = var3;
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 'none';
                    if(!var3) { _fun0004_ip = 267; continue _fun0004 }
 263:
                    var2 = 'auto';
 267:
                    var1['pointerEvents'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var5['pressed'] = var6;
            var5['acceptButtonWidth'] = var16;
            var5['buttonWidth'] = var11;
            var11 = var13[var15];
            var11 = var33.bind(var4)(var11);
            var11 = var11.withTiming;
            var5['withTiming'] = var11;
            var1['__closure'] = var5;
            var5 = 12358515723480.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot17;
            var1['__initData'] = var5;
            var11 = var2.bind(var3)(var1);
            var1 = var13[var18];
            var3 = var33.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function E() {
                var1 = {};
                var3 = {};
                var5 = _closure2_slot3;
                var2 = var5.get;
                var2 = var2.bind(var5)();
                var5 = 2;
                var2 = var2 / var5;
                var3['translateX'] = var2;
                var2 = new Array(2);
                var2[0] = var3;
                var3 = {};
                var6 = _closure2_slot4;
                var4 = var6.get;
                var4 = var4.bind(var6)();
                var4 = var4 / var5;
                var3['translateY'] = var4;
                var2[1] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var5 = {};
            var5['waveWidth'] = var10;
            var5['waveHeight'] = var7;
            var1['__closure'] = var5;
            var5 = 667441788226.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot18;
            var1['__initData'] = var5;
            var20 = var2.bind(var3)(var1);
            var1 = var13[var18];
            var3 = var33.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function p() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = {};
                    var3 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var17 = 10;
                    var2 = var5[var17];
                    var16 = undefined;
                    var7 = var4.bind(var16)(var2);
                    var6 = var7.withDelay;
                    var2 = var5[var17];
                    var10 = var4.bind(var16)(var2);
                    var9 = var10.withRepeat;
                    var2 = 11;
                    var2 = var5[var2];
                    var11 = var4.bind(var16)(var2);
                    var8 = var11.withTiming;
                    var5 = _closure2_slot0;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var5 = '-2deg';
                    if(!var2) { _fun0005_ip = 98; continue _fun0005 }
 92:
                    var5 = '8deg';
 98:
                    var2 = {};
                    var13 = 150;
                    var2['duration'] = var13;
                    var15 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var13 = var12[var17];
                    var13 = var15.bind(var16)(var13);
                    var14 = var13.Easing;
                    var13 = var14.inOut;
                    var12 = var12[var17];
                    var12 = var15.bind(var16)(var12);
                    var12 = var12.Easing;
                    var12 = var12.quad;
                    var12 = var13.bind(var14)(var12);
                    var2['easing'] = var12;
                    var8 = var8.bind(var11)(var5, var2);
                    var5 = 4;
                    var2 = true;
                    var5 = var9.bind(var10)(var8, var5, var2);
                    var2 = 450;
                    var2 = var6.bind(var7)(var2, var5);
                    var3['rotateZ'] = var2;
                    var2 = new Array(3);
                    var2[0] = var3;
                    var3 = {};
                    var6 = _closure2_slot3;
                    var5 = var6.get;
                    var5 = var5.bind(var6)();
                    var6 = -var5;
                    var5 = 2;
                    var6 = var6 / var5;
                    var3['translateX'] = var6;
                    var2[1] = var3;
                    var3 = {};
                    var6 = _closure2_slot4;
                    var4 = var6.get;
                    var4 = var4.bind(var6)();
                    var4 = -var4;
                    var4 = var4 / var5;
                    var3['translateY'] = var4;
                    var2[2] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var5 = {};
            var16 = var13[var18];
            var16 = var33.bind(var4)(var16);
            var16 = var16.withDelay;
            var5['withDelay'] = var16;
            var16 = var13[var18];
            var16 = var33.bind(var4)(var16);
            var16 = var16.withRepeat;
            var5['withRepeat'] = var16;
            var15 = var13[var15];
            var15 = var33.bind(var4)(var15);
            var15 = var15.withTiming;
            var5['withTiming'] = var15;
            var5['pressed'] = var6;
            var15 = var13[var18];
            var15 = var33.bind(var4)(var15);
            var15 = var15.Easing;
            var5['Easing'] = var15;
            var5['waveWidth'] = var10;
            var5['waveHeight'] = var7;
            var1['__closure'] = var5;
            var5 = 498167545082.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot19;
            var1['__initData'] = var5;
            var25 = var2.bind(var3)(var1);
            var1 = var13[var18];
            var3 = var33.bind(var4)(var1);
            var2 = var3.useAnimatedProps;
            var1 = function I() {
                var1 = {};
                var3 = _closure2_slot0;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var2 = 'none';
                var1['pointerEvents'] = var2;
                return var1;
            };
            var5 = {};
            var5['pressed'] = var6;
            var1['__closure'] = var5;
            var5 = 3473531476662.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot20;
            var1['__initData'] = var5;
            var10 = var2.bind(var3)(var1);
            var3 = _closure1_slot13;
            var2 = _closure1_slot5;
            var1 = {};
            var7 = _closure1_slot12;
            var6 = _closure1_slot1;
            var5 = var13[var18];
            var5 = var6.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var15 = var8.actionButtonsContainer;
            var8 = new Array(2);
            var8[0] = var15;
            var8[1] = var9;
            var5['style'] = var8;
            var19 = _closure1_slot13;
            var8 = 12;
            var8 = var13[var8];
            var8 = var33.bind(var4)(var8);
            var17 = var8.Stack;
            var8 = {'direction': 'horizontal', 'spacing': 8};
            var26 = _closure1_slot12;
            var22 = _closure1_slot5;
            var16 = {};
            var9 = function onLayout(arg1) {
                var3 = _closure2_slot1;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.width;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var16['onLayout'] = var9;
            var30 = _closure1_slot12;
            var9 = 13;
            var15 = var13[var9];
            var15 = var33.bind(var4)(var15);
            var29 = var15.Button;
            var28 = {};
            var15 = 14;
            var31 = var13[var15];
            var31 = var33.bind(var4)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var13 = var13[var15];
            var13 = var33.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.zf5jU1;
            var13 = var31.bind(var32)(var13);
            var28['text'] = var13;
            var13 = 'primary';
            var28['variant'] = var13;
            var13 = 'md';
            var31 = var13;
            if(!var14) { _fun0002_ip = 852; continue _fun0002 }
 848:
            var31 = 'sm';
 852:
            var28['size'] = var31;
            var28['onPress'] = var27;
            var27 = 'accept_friend_request';
            var27 = var30.bind(var4)(var29, var28, var27);
            var16['children'] = var27;
            var16 = var26.bind(var4)(var22, var16);
            var22 = new Array(2);
            var22[0] = var16;
            var28 = _closure1_slot12;
            var31 = _closure1_slot0;
            var16 = _closure1_slot2;
            var26 = var16[var9];
            var26 = var31.bind(var4)(var26);
            var27 = var26.Button;
            var26 = {};
            var29 = var16[var15];
            var29 = var31.bind(var4)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var16 = var16[var15];
            var16 = var31.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.EBN84+;
            var16 = var29.bind(var30)(var16);
            var26['text'] = var16;
            var16 = 'secondary';
            var26['variant'] = var16;
            var29 = var13;
            if(!var14) { _fun0002_ip = 986; continue _fun0002 }
 982:
            var29 = 'sm';
 986:
            var26['size'] = var29;
            var26['onPress'] = var24;
            var24 = 'ignore_friend_request';
            var24 = var28.bind(var4)(var27, var26, var24);
            var22[1] = var24;
            var8['children'] = var22;
            var8 = var19.bind(var4)(var17, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot12;
            var19 = _closure1_slot1;
            var24 = _closure1_slot2;
            var6 = var24[var18];
            var6 = var19.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var6['style'] = var11;
            var11 = function onLayout(arg1) {
                var3 = _closure2_slot2;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.width;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var6['onLayout'] = var11;
            var36 = var6;
            var35 = var10;
            var10 = copyDataProperties(var36, var35);
            var11 = _closure1_slot12;
            var22 = _closure1_slot0;
            var9 = var24[var9];
            var9 = var22.bind(var4)(var9);
            var10 = var9.Button;
            var9 = {};
            var9['variant'] = var16;
            var16 = var24[var15];
            var16 = var22.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var24[var15];
            var15 = var22.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.n8nU4e;
            var15 = var16.bind(var17)(var15);
            var9['text'] = var15;
            var17 = _closure1_slot12;
            var15 = var24[var18];
            var15 = var19.bind(var4)(var15);
            var16 = var15.View;
            var15 = {'style': null, 'accessibilityElementsHidden': true, 'importantForAccessibility': 'no-hide-descendants'};
            var15['style'] = var20;
            var20 = _closure1_slot12;
            var18 = var24[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.View;
            var18 = {};
            var18['style'] = var25;
            var23 = function onLayout(arg1) {
                var1 = arg1;
                var5 = _closure2_slot3;
                var4 = var5.set;
                var3 = var1.nativeEvent;
                var3 = var3.layout;
                var3 = var3.width;
                var3 = var4.bind(var5)(var3);
                var3 = _closure2_slot4;
                var2 = var3.set;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.height;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var18['onLayout'] = var23;
            var23 = _closure1_slot12;
            var21 = 15;
            var21 = var24[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21.Text;
            var21 = {'maxFontSizeMultiplier': 2, 'variant': 'text-sm/normal', 'children': '👋'};
            var21 = var23.bind(var4)(var22, var21);
            var18['children'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var9['icon'] = var15;
            if(!var14) { _fun0002_ip = 1316; continue _fun0002 }
 1312:
            var13 = 'sm';
 1316:
            var9['size'] = var13;
            var9['onPress'] = var12;
            var10 = var11.bind(var4)(var10, var9);
            var9 = 'children';
            var6[var9] = var10;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var4;
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
    var5 = var12.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.AnalyticEvents;
    var _closure1_slot8 = var8;
    var8 = var5.ComponentActions;
    var _closure1_slot9 = var8;
    var8 = var5.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot10 = var8;
    var5 = var5.MessageTypes;
    var _closure1_slot11 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot12 = var8;
    var5 = var5.jsxs;
    var _closure1_slot13 = var5;
    var5 = 7;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var11 = 8;
    var10 = {'flexDirection': 'row', 'marginTop': 8};
    var5['buttonsContainer'] = var10;
    var10 = {'paddingHorizontal': 20, 'paddingVertical': 11, 'marginRight': 8};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xl;
    var10['borderRadius'] = var13;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.shadows;
    var15 = var11.SHADOW_LOW;
    var16 = var10;
    var11 = copyDataProperties(var16, var15);
    var5['button'] = var10;
    var10 = {'flexDirection': 'row', 'position': 'absolute', 'left': 0};
    var5['actionButtonsContainer'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot14 = var5;
    var5 = {};
    var8 = 'accept';
    var5['ACCEPT'] = var8;
    var8 = 'ignore';
    var5['IGNORE'] = var8;
    var8 = 'wave';
    var5['WAVE'] = var8;
    var8 = 'action';
    var5['ACTION'] = var8;
    var _closure1_slot15 = var5;
    var5 = {};
    var8 = "function ForYouItemActionButtonsTsx1(){const{withTiming,pressed}=this.__closure;return{opacity:withTiming(!pressed.get()?1:0,{duration:150}),pointerEvents:!pressed.get()?'auto':'none'};}";
    var5['code'] = var8;
    var _closure1_slot16 = var5;
    var5 = {};
    var8 = "function ForYouItemActionButtonsTsx2(){const{pressed,acceptButtonWidth,buttonWidth,withTiming}=this.__closure;const scaleX=!pressed.get()?acceptButtonWidth.get()/buttonWidth.get():1;const scaledWidth=buttonWidth.get()-buttonWidth.get()*scaleX;const translateX=!pressed.get()?-scaledWidth/2:0;return{transform:[{scaleX:withTiming(scaleX)},{translateX:withTiming(translateX)}],opacity:withTiming(!pressed.get()?0:1),pointerEvents:!pressed.get()?'none':'auto'};}";
    var5['code'] = var8;
    var _closure1_slot17 = var5;
    var5 = {};
    var8 = 'function ForYouItemActionButtonsTsx3(){const{waveWidth,waveHeight}=this.__closure;return{transform:[{translateX:waveWidth.get()/2},{translateY:waveHeight.get()/2}]};}';
    var5['code'] = var8;
    var _closure1_slot18 = var5;
    var5 = {};
    var8 = "function ForYouItemActionButtonsTsx4(){const{withDelay,withRepeat,withTiming,pressed,Easing,waveWidth,waveHeight}=this.__closure;return{transform:[{rotateZ:withDelay(450,withRepeat(withTiming(pressed.get()?'8deg':'-2deg',{duration:150,easing:Easing.inOut(Easing.quad)}),4,true))},{translateX:-waveWidth.get()/2},{translateY:-waveHeight.get()/2}]};}";
    var5['code'] = var8;
    var _closure1_slot19 = var5;
    var5 = {};
    var8 = "function ForYouItemActionButtonsTsx5(){const{pressed}=this.__closure;return{pointerEvents:!pressed.get()?'none':'none'};}";
    var5['code'] = var8;
    var _closure1_slot20 = var5;
    var5 = 28;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/notification_center/native/ForYouItemActionButtons.tsx';
    var5 = var6.bind(var7)(var5);
    var3['IncomingFriendRequestActions'] = var4;
    var4 = function useItemActionButtonPropsV2(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var6 = arg2;
            var5 = arg3;
            var14 = arg4;
            var15 = arg5;
            var10 = arg6;
            var8 = arg7;
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var14;
            var _closure2_slot4 = var10;
            var _closure2_slot5 = var8;
            var4 = var3.other_user;
            var1 = null;
            var11 = var1 == var4;
            var9 = undefined;
            var7 = undefined;
            if(var11) { _fun0006_ip = 71; continue _fun0006 }
 66:
            var7 = var4.id;
 71:
            if(!(var1 == var7)) { _fun0006_ip = 82; continue _fun0006 }
 75:
            var7 = _closure1_slot10;
 82:
            var _closure2_slot6 = var7;
            var4 = 'notification_center_v2';
            var _closure2_slot7 = var4;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 16;
            var11 = var13[var11];
            var18 = var12.bind(var9)(var11);
            var17 = var18.useStateFromStores;
            var11 = _closure1_slot6;
            var16 = new Array(1);
            var16[0] = var11;
            var11 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot0;
                    var4 = var1.message;
                    var1 = null;
                    var5 = var1 == var4;
                    var1 = undefined;
                    if(var5) { _fun0007_ip = 40; continue _fun0007 }
 35:
                    var1 = var4.channel_id;
 40:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var21 = var17.bind(var18)(var16, var11);
            var _closure2_slot8 = var21;
            var11 = 17;
            var11 = var13[var11];
            var13 = var12.bind(var9)(var11);
            var12 = var13.useCanReplyToMessage;
            var11 = var3.message;
            var19 = var12.bind(var13)(var21, var11);
            var11 = var3.message;
            var12 = var1 == var11;
            var18 = undefined;
            if(var12) { _fun0006_ip = 201; continue _fun0006 }
 196:
            var18 = var11.type;
 201:
            var11 = _closure1_slot11;
            var16 = var11.POLL_RESULT;
            var22 = _closure1_slot4;
            var12 = var22.useCallback;
            var11 = new Array(3);
            var11[0] = var7;
            var11[1] = var10;
            var11[2] = var3;
            var10 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var2);
                    var7 = var8.sendWave;
                    var6 = _closure2_slot6;
                    var5 = false;
                    var4 = 'You Tab';
                    var4 = var7.bind(var8)(var6, var5, var4);
                    var6 = _closure1_slot6;
                    var5 = var6.getDMFromUserId;
                    var4 = _closure2_slot6;
                    var8 = var5.bind(var6)(var4);
                    var4 = null;
                    if(!(var4 != var8)) { _fun0008_ip = 170; continue _fun0008 }
 78:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 19;
                    var3 = var6[var3];
                    var5 = var4.bind(var1)(var3);
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var7 = var3.concat;
                    var3 = 'https://discord.com/channels/@me/';
                    var3 = var7.bind(var3)(var8);
                    var3 = var5.bind(var1)(var3);
                    var5 = var3.payload;
                    var3 = 20;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = {'payload': null, 'safe': true, 'navigationReplace': false};
                    var3['payload'] = var5;
                    var3 = var4.bind(var1)(var3);
 170:
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var13 = var12.bind(var22)(var10, var11);
            var _closure2_slot9 = var13;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 10;
            var10 = var12[var10];
            var12 = var11.bind(var9)(var10);
            var11 = var12.useSharedValue;
            var10 = false;
            var10 = var11.bind(var12)(var10);
            var _closure2_slot10 = var10;
            var12 = var22.useCallback;
            var11 = new Array(5);
            var11[0] = var14;
            var11[1] = var10;
            var11[2] = var3;
            var11[3] = var7;
            var11[4] = var8;
            var8 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 21;
                    var2 = var9[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.maybeConfirmFriendRequestAccept;
                    var2 = {};
                    var7 = _closure2_slot6;
                    var2['userId'] = var7;
                    var7 = _closure2_slot0;
                    var8 = var7.type;
                    var7 = _closure1_slot0;
                    var6 = 22;
                    var6 = var9[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.NotificationCenterLocalItems;
                    var7 = var6.INCOMING_GAME_FRIEND_REQUESTS;
                    var6 = undefined;
                    if(!(var8 === var7)) { _fun0009_ip = 96; continue _fun0009 }
 87:
                    var7 = _closure2_slot0;
                    var6 = var7.applicationId;
 96:
                    var2['applicationId'] = var6;
                    var5 = _closure2_slot7;
                    var2['location'] = var5;
                    var5 = function onConfirm() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var5 = _closure1_slot7;
                            var4 = var5.getUser;
                            var3 = _closure2_slot6;
                            var8 = var4.bind(var5)(var3);
                            var9 = null;
                            if(!(var9 != var8)) { _fun0010_ip = 144; continue _fun0010 }
 31:
                            var4 = _closure2_slot5;
                            var5 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var2 = 14;
                            var6 = var10[var2];
                            var3 = undefined;
                            var6 = var5.bind(var3)(var6);
                            var7 = var6.intl;
                            var6 = var7.formatToPlainString;
                            var2 = var10[var2];
                            var2 = var5.bind(var3)(var2);
                            var2 = var2.t;
                            var5 = var2.5Uzkdn;
                            var2 = {};
                            var10 = var8.globalName;
                            if(!(var9 == var10)) { _fun0010_ip = 104; continue _fun0010 }
 99:
                            var10 = var8.username;
 104:
                            var8 = global;
                            var8 = var8.HermesInternal;
                            var9 = var8.concat;
                            var8 = '**';
                            var8 = var9.bind(var8)(var10, var8);
                            var2['username'] = var8;
                            var2 = var6.bind(var7)(var5, var2);
                            var2 = var4.bind(var3)(var2);
 144:
                            var4 = _closure2_slot10;
                            var3 = var4.set;
                            var2 = true;
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure2_slot0;
                            var2 = false;
                            var3['enableBadge'] = var2;
                            var2 = _closure2_slot3;
                            var1 = undefined;
                            var2 = var2.bind(var1)(var3);
                            return var1;
                        }
                    };
                    var2['onConfirm'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var12 = var12.bind(var22)(var8, var11);
            var _closure2_slot11 = var12;
            var14 = var22.useCallback;
            var8 = var3.applicationId;
            var11 = new Array(3);
            var11[0] = var8;
            var8 = var3.type;
            var11[1] = var8;
            var11[2] = var7;
            var8 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 21;
                    var2 = var9[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.cancelFriendRequest;
                    var2 = {};
                    var7 = _closure2_slot6;
                    var2['userId'] = var7;
                    var7 = _closure2_slot0;
                    var8 = var7.type;
                    var7 = _closure1_slot0;
                    var6 = 22;
                    var6 = var9[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.NotificationCenterLocalItems;
                    var7 = var6.INCOMING_GAME_FRIEND_REQUESTS;
                    var6 = undefined;
                    if(!(var8 === var7)) { _fun0011_ip = 96; continue _fun0011 }
 87:
                    var7 = _closure2_slot0;
                    var6 = var7.applicationId;
 96:
                    var2['applicationId'] = var6;
                    var5 = _closure2_slot7;
                    var2['location'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var11 = var14.bind(var22)(var8, var11);
            var _closure2_slot12 = var11;
            var14 = var22.useCallback;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0012_ip = 44; continue _fun0012 }
 13:
                    var4 = _closure2_slot2;
                    var3 = var4.navigate;
                    var2 = {};
                    var1 = 'requests';
                    var2['screen'] = var1;
                    var1 = 'friends';
                    var1 = var3.bind(var4)(var1, var2);
 44:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var14.bind(var22)(var5, var8);
            var17 = var22.useCallback;
            var14 = new Array(1);
            var14[0] = var7;
            var8 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getDMChannel;
                var2 = _closure2_slot6;
                var4 = var3.bind(var4)(var2);
                var3 = var4.then;
                var2 = function(arg1) {
                    var3 = arg1;
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 19;
                    var4 = var7[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var8 = var4.concat;
                    var4 = 'https://discord.com/channels/@me/';
                    var4 = var8.bind(var4)(var3);
                    var4 = var6.bind(var1)(var4);
                    var6 = var4.payload;
                    var4 = 20;
                    var4 = var7[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = {'payload': null, 'safe': true, 'navigationReplace': false};
                    var4['payload'] = var6;
                    var4 = var5.bind(var1)(var4);
                    var2 = _closure1_slot21;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var8 = var17.bind(var22)(var8, var14);
            var17 = var22.useCallback;
            var14 = new Array(1);
            var14[0] = var7;
            var7 = function() {
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 24;
                var2 = var9[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var4 = var6.addRelationship;
                var2 = {};
                var7 = _closure2_slot6;
                var2['userId'] = var7;
                var7 = {};
                var8 = _closure2_slot7;
                var7['location'] = var8;
                var2['context'] = var7;
                var2 = var4.bind(var6)(var2);
                var2 = 25;
                var2 = var9[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var6 = 'NOTIF_CENTER_V2_ADD_FRIEND_TOAST';
                var2['key'] = var6;
                var8 = _closure1_slot0;
                var5 = 14;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.7MAxkZ;
                var5 = var6.bind(var7)(var5);
                var2['content'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var14 = var17.bind(var22)(var7, var14);
            var20 = var22.useCallback;
            var17 = _closure1_slot3;
            var7 = function* () {
                var1 = function* anon_0_() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0013_ip = 163; continue _fun0013 }
 10:
                        var2 = _closure2_slot0;
                        var2 = var2.message_id;
                        var5 = null;
                        var2 = var5 != var2;
                        if(!var2) { _fun0013_ip = 40; continue _fun0013 }
 32:
                        var3 = _closure2_slot8;
                        var2 = var5 != var3;
 40:
                        if(!var2) { _fun0013_ip = 125; continue _fun0013 }
 43:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 26;
                        var3 = var3[var2];
                        var2 = undefined;
                        var5 = var5.bind(var2)(var3);
                        var3 = var5.createShallowPendingReply;
                        var2 = {};
                        var6 = _closure2_slot0;
                        var6 = var6.message_id;
                        var2['messageId'] = var6;
                        var6 = _closure2_slot8;
                        var2['channel'] = var6;
                        var6 = true;
                        var2['shouldMention'] = var6;
                        var2['showMentionToggle'] = var6;
                        var2 = var3.bind(var5)(var2);
                        SaveGenerator(address=119);
 117:
                        return var2;
 119:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0013_ip = 160; continue _fun0013 }
 125:
                        var5 = _closure2_slot1;
                        var3 = undefined;
                        var5 = var5.bind(var3)();
                        var5 = _closure1_slot21;
                        var4 = _closure2_slot0;
                        var4 = var4.message_channel_id;
                        var4 = var5.bind(var3)(var4);
                        return var3;
 160:
                        return var2;
 163:
                        return var1;
                    }
                };
                return var1;
            };
            var17 = var17.bind(var9)(var7);
            var7 = new Array(4);
            var7[0] = var6;
            var7[1] = var21;
            var21 = var3.message_id;
            var7[2] = var21;
            var21 = var3.message_channel_id;
            var7[3] = var21;
            var17 = var20.bind(var22)(var17, var7);
            var21 = var22.useCallback;
            var20 = new Array(2);
            var20[0] = var6;
            var7 = var3.message_channel_id;
            var20[1] = var7;
            var7 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure1_slot21;
                var2 = _closure2_slot0;
                var2 = var2.message_channel_id;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var21 = var21.bind(var22)(var7, var20);
            var7 = var3.disable_action;
            if(var7) { _fun0006_ip = 3409; continue _fun0006 }
 571:
            var22 = var3.type;
            var23 = _closure1_slot0;
            var20 = _closure1_slot2;
            var7 = 22;
            var20 = var20[var7];
            var20 = var23.bind(var9)(var20);
            var20 = var20.NotificationCenterLocalItems;
            var20 = var20.INCOMING_FRIEND_REQUESTS;
            if(!(var22 !== var20)) { _fun0006_ip = 3063; continue _fun0006 }
 615:
            var22 = var3.type;
            var23 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var7];
            var20 = var23.bind(var9)(var20);
            var20 = var20.NotificationCenterLocalItems;
            var20 = var20.INCOMING_FRIEND_REQUESTS_ACCEPTED;
            if(!(var22 === var20)) { _fun0006_ip = 664; continue _fun0006 }
 653:
            var20 = var15.bind(var9)(var3);
            if(var20) { _fun0006_ip = 3063; continue _fun0006 }
 664:
            var22 = var3.type;
            var23 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var7];
            var20 = var23.bind(var9)(var20);
            var20 = var20.NotificationCenterLocalItems;
            var20 = var20.INCOMING_GAME_FRIEND_REQUESTS;
            if(!(var22 !== var20)) { _fun0006_ip = 3063; continue _fun0006 }
 705:
            var22 = var3.type;
            var23 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var7];
            var20 = var23.bind(var9)(var20);
            var20 = var20.NotificationCenterLocalItems;
            var20 = var20.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
            if(!(var22 === var20)) { _fun0006_ip = 754; continue _fun0006 }
 743:
            var15 = var15.bind(var9)(var3);
            if(var15) { _fun0006_ip = 3063; continue _fun0006 }
 754:
            var20 = var3.type;
            var22 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var7];
            var15 = var22.bind(var9)(var15);
            var15 = var15.NotificationCenterLocalItems;
            var15 = var15.FRIEND_REQUESTS_GROUPED;
            if(!(var20 !== var15)) { _fun0006_ip = 2885; continue _fun0006 }
 795:
            var20 = var3.type;
            var22 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var7];
            var15 = var22.bind(var9)(var15);
            var15 = var15.NotificationCenterItems;
            var15 = var15.GO_LIVE_PUSH;
            if(!(var20 !== var15)) { _fun0006_ip = 2707; continue _fun0006 }
 836:
            var20 = var3.type;
            var22 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var7];
            var15 = var22.bind(var9)(var15);
            var15 = var15.NotificationCenterLocalItems;
            var15 = var15.INCOMING_FRIEND_REQUESTS_ACCEPTED;
            if(!(var20 !== var15)) { _fun0006_ip = 2529; continue _fun0006 }
 877:
            var20 = var3.type;
            var22 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var7];
            var15 = var22.bind(var9)(var15);
            var15 = var15.NotificationCenterItems;
            var15 = var15.DM_FRIEND_NUDGE;
            if(!(var20 !== var15)) { _fun0006_ip = 2529; continue _fun0006 }
 918:
            var20 = var3.type;
            var22 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var7];
            var15 = var22.bind(var9)(var15);
            var15 = var15.NotificationCenterItems;
            var15 = var15.FRIEND_REQUEST_ACCEPTED;
            if(!(var20 !== var15)) { _fun0006_ip = 2529; continue _fun0006 }
 959:
            var20 = var3.type;
            var22 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var7];
            var15 = var22.bind(var9)(var15);
            var15 = var15.NotificationCenterItems;
            var15 = var15.GAME_FRIEND_REQUEST_ACCEPTED;
            if(!(var20 !== var15)) { _fun0006_ip = 2529; continue _fun0006 }
 1000:
            var20 = var3.type;
            var22 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var7];
            var15 = var22.bind(var9)(var15);
            var15 = var15.NotificationCenterItems;
            var15 = var15.FRIEND_SUGGESTION_CREATED;
            if(!(var20 !== var15)) { _fun0006_ip = 2351; continue _fun0006 }
 1041:
            var20 = var3.type;
            var22 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var7];
            var15 = var22.bind(var9)(var15);
            var15 = var15.NotificationCenterItems;
            var15 = var15.GUILD_SCHEDULED_EVENT_STARTED;
            if(!(var20 !== var15)) { _fun0006_ip = 2173; continue _fun0006 }
 1082:
            var20 = var3.type;
            var22 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var7];
            var15 = var22.bind(var9)(var15);
            var15 = var15.NotificationCenterItems;
            var15 = var15.LIFECYCLE_ITEM;
            if(!(var20 !== var15)) { _fun0006_ip = 1653; continue _fun0006 }
 1123:
            var20 = var3.type;
            var22 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var7];
            var15 = var22.bind(var9)(var15);
            var15 = var15.NotificationCenterItems;
            var15 = var15.RECENT_MENTION;
            if(!(var20 !== var15)) { _fun0006_ip = 1443; continue _fun0006 }
 1164:
            var20 = var3.type;
            var22 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var7];
            var15 = var22.bind(var9)(var15);
            var15 = var15.NotificationCenterItems;
            var15 = var15.REPLY_MENTION;
            if(!(var20 !== var15)) { _fun0006_ip = 1443; continue _fun0006 }
 1205:
            var20 = var3.type;
            var22 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var7];
            var15 = var22.bind(var9)(var15);
            var15 = var15.NotificationCenterItems;
            var15 = var15.TRENDING_CONTENT;
            if(!(var20 !== var15)) { _fun0006_ip = 1259; continue _fun0006 }
 1243:
            var15 = {};
            var20 = new Array(0);
            var15['actionButtons'] = var20;
            _fun0006_ip = 1438; continue _fun0006;
 1259:
            var20 = {};
            var24 = {'id': 'read_summary', 'text': null, 'variant': 'secondary', 'size': 'md'};
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var22 = 14;
            var23 = var27[var22];
            var23 = var26.bind(var9)(var23);
            var28 = var23.intl;
            var25 = var28.string;
            var23 = var27[var22];
            var23 = var26.bind(var9)(var23);
            var23 = var23.t;
            var23 = var23.k0Q31N;
            var23 = var25.bind(var28)(var23);
            var24['text'] = var23;
            var24['onPress'] = var21;
            var23 = new Array(1);
            var23[0] = var24;
            var20['actionButtons'] = var23;
            var23 = {};
            var24 = _closure1_slot15;
            var24 = var24.ACTION;
            var23['name'] = var24;
            var24 = var27[var22];
            var24 = var26.bind(var9)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var22 = var27[var22];
            var22 = var26.bind(var9)(var22);
            var22 = var22.t;
            var22 = var22.k0Q31N;
            var22 = var24.bind(var25)(var22);
            var23['label'] = var22;
            var22 = new Array(1);
            var22[0] = var23;
            var20['accessibilityActions'] = var22;
            var20['onAccessibilityAction'] = var21;
            var15 = var20;
 1438:
            _fun0006_ip = 1651; continue _fun0006;
 1443:
            if(!var19) { _fun0006_ip = 1634; continue _fun0006 }
 1449:
            if(!(var18 !== var16)) { _fun0006_ip = 1634; continue _fun0006 }
 1456:
            var16 = {};
            var20 = {'id': 'send_reply', 'text': null, 'variant': 'secondary', 'size': 'md'};
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var18 = 14;
            var19 = var23[var18];
            var19 = var22.bind(var9)(var19);
            var24 = var19.intl;
            var21 = var24.string;
            var19 = var23[var18];
            var19 = var22.bind(var9)(var19);
            var19 = var19.t;
            var19 = var19.vBq3iY;
            var19 = var21.bind(var24)(var19);
            var20['text'] = var19;
            var20['onPress'] = var17;
            var19 = new Array(1);
            var19[0] = var20;
            var16['actionButtons'] = var19;
            var19 = {};
            var20 = _closure1_slot15;
            var20 = var20.ACTION;
            var19['name'] = var20;
            var20 = var23[var18];
            var20 = var22.bind(var9)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var18 = var23[var18];
            var18 = var22.bind(var9)(var18);
            var18 = var18.t;
            var18 = var18.vBq3iY;
            var18 = var20.bind(var21)(var18);
            var19['label'] = var18;
            var18 = new Array(1);
            var18[0] = var19;
            var16['accessibilityActions'] = var18;
            var16['onAccessibilityAction'] = var17;
            _fun0006_ip = 1648; continue _fun0006;
 1634:
            var17 = {};
            var18 = new Array(0);
            var17['actionButtons'] = var18;
            var16 = var17;
 1648:
            var15 = var16;
 1651:
            return var15;
 1653:
            var18 = var3.item_enum;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var7];
            var15 = var16.bind(var9)(var15);
            var15 = var15.ItemEnum;
            var15 = var15.UPDATE_PROFILE;
            if(!(var15 !== var18)) { _fun0006_ip = 2001; continue _fun0006 }
 1695:
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var7];
            var15 = var16.bind(var9)(var15);
            var15 = var15.ItemEnum;
            var15 = var15.FIND_FRIENDS;
            if(!(var15 !== var18)) { _fun0006_ip = 1936; continue _fun0006 }
 1731:
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var7];
            var15 = var16.bind(var9)(var15);
            var15 = var15.ItemEnum;
            var15 = var15.ADD_FRIEND;
            if(!(var15 !== var18)) { _fun0006_ip = 1870; continue _fun0006 }
 1764:
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var7];
            var15 = var16.bind(var9)(var15);
            var15 = var15.ItemEnum;
            var17 = var15.FIRST_MESSAGE;
            var15 = null;
            var16 = null;
            if(!(var17 === var18)) { _fun0006_ip = 2064; continue _fun0006 }
 1804:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var17 = 14;
            var18 = var21[var17];
            var18 = var20.bind(var9)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var21[var17];
            var17 = var20.bind(var9)(var17);
            var17 = var17.t;
            var17 = var17.GuUH7+;
            var15 = var18.bind(var19)(var17);
            var16 = 'send_message';
            _fun0006_ip = 2064; continue _fun0006;
 1870:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var17 = 14;
            var18 = var21[var17];
            var18 = var20.bind(var9)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var21[var17];
            var17 = var20.bind(var9)(var17);
            var17 = var17.t;
            var17 = var17.boL/YW;
            var15 = var18.bind(var19)(var17);
            var16 = 'add_friend';
            _fun0006_ip = 2064; continue _fun0006;
 1936:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var17 = 14;
            var18 = var21[var17];
            var18 = var20.bind(var9)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var21[var17];
            var17 = var20.bind(var9)(var17);
            var17 = var17.t;
            var17 = var17.vwL/4u;
            var15 = var18.bind(var19)(var17);
            var16 = 'find_friends';
            _fun0006_ip = 2064; continue _fun0006;
 2001:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var17 = 14;
            var18 = var21[var17];
            var18 = var20.bind(var9)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var21[var17];
            var17 = var20.bind(var9)(var17);
            var17 = var17.t;
            var17 = var17.zMRcWF;
            var15 = var18.bind(var19)(var17);
            var16 = 'update_profile';
 2064:
            if(!(var1 != var15)) { _fun0006_ip = 2157; continue _fun0006 }
 2068:
            if(!(var1 != var16)) { _fun0006_ip = 2157; continue _fun0006 }
 2072:
            var1 = {};
            var17 = {};
            var17['id'] = var16;
            var17['text'] = var15;
            var16 = 'secondary';
            var17['variant'] = var16;
            var16 = 'md';
            var17['size'] = var16;
            var17['onPress'] = var6;
            var16 = new Array(1);
            var16[0] = var17;
            var1['actionButtons'] = var16;
            var16 = {};
            var17 = _closure1_slot15;
            var17 = var17.ACTION;
            var16['name'] = var17;
            var16['label'] = var15;
            var15 = new Array(1);
            var15[0] = var16;
            var1['accessibilityActions'] = var15;
            var1['onAccessibilityAction'] = var6;
            _fun0006_ip = 2171; continue _fun0006;
 2157:
            var15 = {};
            var16 = new Array(0);
            var15['actionButtons'] = var16;
            var1 = var15;
 2171:
            return var1;
 2173:
            var1 = {};
            var17 = {'id': 'join_event', 'text': null, 'variant': 'secondary', 'size': 'md'};
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var15 = 14;
            var16 = var20[var15];
            var16 = var19.bind(var9)(var16);
            var21 = var16.intl;
            var18 = var21.string;
            var16 = var20[var15];
            var16 = var19.bind(var9)(var16);
            var16 = var16.t;
            var16 = var16.hRKdcn;
            var16 = var18.bind(var21)(var16);
            var17['text'] = var16;
            var17['onPress'] = var6;
            var16 = new Array(1);
            var16[0] = var17;
            var1['actionButtons'] = var16;
            var16 = {};
            var17 = _closure1_slot15;
            var17 = var17.ACTION;
            var16['name'] = var17;
            var17 = var20[var15];
            var17 = var19.bind(var9)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var20[var15];
            var15 = var19.bind(var9)(var15);
            var15 = var15.t;
            var15 = var15.hRKdcn;
            var15 = var17.bind(var18)(var15);
            var16['label'] = var15;
            var15 = new Array(1);
            var15[0] = var16;
            var1['accessibilityActions'] = var15;
            var1['onAccessibilityAction'] = var6;
            return var1;
 2351:
            var1 = {};
            var17 = {'id': 'add_friend', 'text': null, 'variant': 'secondary', 'size': 'md'};
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var15 = 14;
            var16 = var20[var15];
            var16 = var19.bind(var9)(var16);
            var21 = var16.intl;
            var18 = var21.string;
            var16 = var20[var15];
            var16 = var19.bind(var9)(var16);
            var16 = var16.t;
            var16 = var16.boL/YW;
            var16 = var18.bind(var21)(var16);
            var17['text'] = var16;
            var17['onPress'] = var14;
            var16 = new Array(1);
            var16[0] = var17;
            var1['actionButtons'] = var16;
            var16 = {};
            var17 = _closure1_slot15;
            var17 = var17.ACTION;
            var16['name'] = var17;
            var17 = var20[var15];
            var17 = var19.bind(var9)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var20[var15];
            var15 = var19.bind(var9)(var15);
            var15 = var15.t;
            var15 = var15.boL/YW;
            var15 = var17.bind(var18)(var15);
            var16['label'] = var15;
            var15 = new Array(1);
            var15[0] = var16;
            var1['accessibilityActions'] = var15;
            var1['onAccessibilityAction'] = var14;
            return var1;
 2529:
            var1 = {};
            var16 = {'id': 'send_message', 'text': null, 'variant': 'secondary', 'size': 'md'};
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var14 = 14;
            var15 = var19[var14];
            var15 = var18.bind(var9)(var15);
            var20 = var15.intl;
            var17 = var20.string;
            var15 = var19[var14];
            var15 = var18.bind(var9)(var15);
            var15 = var15.t;
            var15 = var15.GuUH7+;
            var15 = var17.bind(var20)(var15);
            var16['text'] = var15;
            var16['onPress'] = var8;
            var15 = new Array(1);
            var15[0] = var16;
            var1['actionButtons'] = var15;
            var15 = {};
            var16 = _closure1_slot15;
            var16 = var16.ACTION;
            var15['name'] = var16;
            var16 = var19[var14];
            var16 = var18.bind(var9)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var14 = var19[var14];
            var14 = var18.bind(var9)(var14);
            var14 = var14.t;
            var14 = var14.GuUH7+;
            var14 = var16.bind(var17)(var14);
            var15['label'] = var14;
            var14 = new Array(1);
            var14[0] = var15;
            var1['accessibilityActions'] = var14;
            var1['onAccessibilityAction'] = var8;
            return var1;
 2707:
            var1 = {};
            var15 = {'id': 'join_stream', 'text': null, 'variant': 'secondary', 'size': 'md'};
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var8 = 14;
            var14 = var18[var8];
            var14 = var17.bind(var9)(var14);
            var19 = var14.intl;
            var16 = var19.string;
            var14 = var18[var8];
            var14 = var17.bind(var9)(var14);
            var14 = var14.t;
            var14 = var14.Pqj7h4;
            var14 = var16.bind(var19)(var14);
            var15['text'] = var14;
            var15['onPress'] = var6;
            var14 = new Array(1);
            var14[0] = var15;
            var1['actionButtons'] = var14;
            var14 = {};
            var15 = _closure1_slot15;
            var15 = var15.ACTION;
            var14['name'] = var15;
            var15 = var18[var8];
            var15 = var17.bind(var9)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var8 = var18[var8];
            var8 = var17.bind(var9)(var8);
            var8 = var8.t;
            var8 = var8.Pqj7h4;
            var8 = var15.bind(var16)(var8);
            var14['label'] = var8;
            var8 = new Array(1);
            var8[0] = var14;
            var1['accessibilityActions'] = var8;
            var1['onAccessibilityAction'] = var6;
            return var1;
 2885:
            var1 = {};
            var14 = {'id': 'view_friend_requests', 'text': null, 'variant': 'secondary', 'size': 'md'};
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var6 = 14;
            var8 = var17[var6];
            var8 = var16.bind(var9)(var8);
            var18 = var8.intl;
            var15 = var18.string;
            var8 = var17[var6];
            var8 = var16.bind(var9)(var8);
            var8 = var8.t;
            var8 = var8.lMR96+;
            var8 = var15.bind(var18)(var8);
            var14['text'] = var8;
            var14['onPress'] = var5;
            var8 = new Array(1);
            var8[0] = var14;
            var1['actionButtons'] = var8;
            var8 = {};
            var14 = _closure1_slot15;
            var14 = var14.ACTION;
            var8['name'] = var14;
            var14 = var17[var6];
            var14 = var16.bind(var9)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var6 = var17[var6];
            var6 = var16.bind(var9)(var6);
            var6 = var6.t;
            var6 = var6.lMR96+;
            var6 = var14.bind(var15)(var6);
            var8['label'] = var6;
            var6 = new Array(1);
            var6[0] = var8;
            var1['accessibilityActions'] = var6;
            var1['onAccessibilityAction'] = var5;
            return var1;
 3063:
            var1 = {};
            var8 = _closure1_slot12;
            var6 = _closure1_slot22;
            var5 = {};
            var5['onWavePress'] = var13;
            var5['onAccept'] = var12;
            var5['onIgnore'] = var11;
            var5['pressed'] = var10;
            var10 = arg8;
            var5['compactMode'] = var10;
            var5 = var8.bind(var9)(var6, var5);
            var1['actionsNode'] = var5;
            var5 = var3.type;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var9)(var3);
            var3 = var3.NotificationCenterLocalItems;
            var3 = var3.INCOMING_FRIEND_REQUESTS_ACCEPTED;
            if(!(var5 !== var3)) { _fun0006_ip = 3304; continue _fun0006 }
 3155:
            var5 = {};
            var7 = _closure1_slot15;
            var3 = var7.ACCEPT;
            var5['name'] = var3;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 14;
            var3 = var11[var6];
            var3 = var10.bind(var9)(var3);
            var12 = var3.intl;
            var8 = var12.string;
            var3 = var11[var6];
            var3 = var10.bind(var9)(var3);
            var3 = var3.t;
            var3 = var3.zf5jU1;
            var3 = var8.bind(var12)(var3);
            var5['label'] = var3;
            var3 = new Array(2);
            var3[0] = var5;
            var5 = {};
            var7 = var7.IGNORE;
            var5['name'] = var7;
            var7 = var11[var6];
            var7 = var10.bind(var9)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var11[var6];
            var6 = var10.bind(var9)(var6);
            var6 = var6.t;
            var6 = var6.EBN84+;
            var6 = var7.bind(var8)(var6);
            var5['label'] = var6;
            var3[1] = var5;
            _fun0006_ip = 3390; continue _fun0006;
 3304:
            var5 = {};
            var6 = _closure1_slot15;
            var6 = var6.WAVE;
            var5['name'] = var6;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 14;
            var6 = var10[var4];
            var6 = var8.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var10[var4];
            var4 = var8.bind(var9)(var4);
            var4 = var4.t;
            var4 = var4.n8nU4e;
            var4 = var6.bind(var7)(var4);
            var5['label'] = var4;
            var4 = new Array(1);
            var4[0] = var5;
            var3 = var4;
 3390:
            var1['accessibilityActions'] = var3;
            var2 = function onAccessibilityAction(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.actionName;
                    var3 = _closure1_slot15;
                    var3 = var3.WAVE;
                    if(!(var3 !== var2)) { _fun0014_ip = 89; continue _fun0014 }
 31:
                    var3 = _closure1_slot15;
                    var3 = var3.ACCEPT;
                    if(!(var3 !== var2)) { _fun0014_ip = 74; continue _fun0014 }
 45:
                    var1 = _closure1_slot15;
                    var1 = var1.IGNORE;
                    if(!(var1 === var2)) { _fun0014_ip = 102; continue _fun0014 }
 59:
                    var2 = _closure2_slot12;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    _fun0014_ip = 102; continue _fun0014;
 74:
                    var2 = _closure2_slot11;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    _fun0014_ip = 102; continue _fun0014;
 89:
                    var2 = _closure2_slot9;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 102:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onAccessibilityAction'] = var2;
            return var1;
 3409:
            var1 = {};
            var2 = new Array(0);
            var1['actionButtons'] = var2;
            return var1;
        }
    };
    var3['useItemActionButtonPropsV2'] = var4;
    var2 = function(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var4 = arg1;
            var1 = var4.item;
            var _closure2_slot0 = var1;
            var1 = var4.rowIndex;
            var _closure2_slot1 = var1;
            var1 = var4.onSoftAckItem;
            var _closure2_slot2 = var1;
            var12 = var4.actionButtons;
            var8 = var4.actionsNode;
            var1 = var4.compactMode;
            var3 = {'item': 0, 'rowIndex': 0, 'onSoftAckItem': 0, 'actionButtons': 0, 'actionsNode': 0, 'compactMode': 0};
            var6 = null;
            var16 = var3;
            var15 = null;
            var2 = silentSetPrototypeOf(var16, var15);
            var16 = {};
            var15 = var4;
            var14 = var3;
            var11 = copyDataProperties(var16, var15, var14);
            var3 = _closure1_slot14;
            var5 = undefined;
            var13 = var3.bind(var5)();
            var10 = !var1;
            if(!var10) { _fun0015_ip = 112; continue _fun0015 }
 108:
            var10 = var6 != var12;
 112:
            var9 = var6 != var8;
            if(var10) { _fun0015_ip = 124; continue _fun0015 }
 119:
            var1 = null;
            if(!var9) { _fun0015_ip = 209; continue _fun0015 }
 124:
            var4 = _closure1_slot13;
            var3 = _closure1_slot5;
            var2 = {};
            var13 = var13.buttonsContainer;
            var2['style'] = var13;
            var16 = var2;
            var15 = var11;
            var11 = copyDataProperties(var16, var15);
            if(!var10) { _fun0015_ip = 174; continue _fun0015 }
 157:
            var11 = var12.map;
            var7 = function(arg1, arg2) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var3 = arg1;
                    var5 = arg2;
                    var6 = var3.id;
                    var _closure3_slot0 = var6;
                    var7 = null;
                    var2 = Object.create(var7);
                    var1 = 0;
                    var2['id'] = var1;
                    var12 = {};
                    var11 = var3;
                    var10 = var2;
                    var9 = copyDataProperties(var12, var11, var10);
                    var _closure3_slot1 = var9;
                    var4 = _closure1_slot12;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.Button;
                    var1 = {};
                    var12 = var1;
                    var11 = var9;
                    var9 = copyDataProperties(var12, var11);
                    var9 = function onPress(arg1) {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                            var1 = _closure3_slot1;
                            var2 = var1.onPress;
                            var1 = null;
                            if(!(var1 != var2)) { _fun0017_ip = 35; continue _fun0017 }
 18:
                            var3 = _closure3_slot1;
                            var2 = var3.onPress;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
 35:
                            var2 = _closure2_slot2;
                            var7 = _closure2_slot0;
                            var1 = undefined;
                            var2 = var2.bind(var1)(var7);
                            var3 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var2 = 27;
                            var2 = var11[var2];
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.track;
                            var2 = _closure1_slot8;
                            var3 = var2.NOTIFICATION_CENTER_ACTION;
                            var2 = {};
                            var10 = _closure1_slot0;
                            var9 = 22;
                            var9 = var11[var9];
                            var9 = var10.bind(var1)(var9);
                            var9 = var9.NotificationCenterActionTypes;
                            var9 = var9.ACTION_BUTTON;
                            var2['action_type'] = var9;
                            var9 = var7.id;
                            var2['notification_center_id'] = var9;
                            var9 = var7.type;
                            var2['item_type'] = var9;
                            var9 = false;
                            var2['acked'] = var9;
                            var8 = _closure2_slot1;
                            var2['item_index'] = var8;
                            var7 = var7.deeplink;
                            var2['deeplink'] = var7;
                            var6 = _closure3_slot0;
                            var2['action_button_id'] = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        }
                    };
                    var8 = 'onPress';
                    var1[var8] = var9;
                    if(!(var7 != var6)) { _fun0016_ip = 114; continue _fun0016 }
 111:
                    var5 = var6;
 114:
                    var1 = var4.bind(var3)(var2, var1, var5);
                    return var1;
                }
            };
            var10 = var11.bind(var12)(var7);
 174:
            var7 = new Array(2);
            var7[0] = var10;
            var6 = null;
            if(!var9) { _fun0015_ip = 190; continue _fun0015 }
 187:
            var6 = var8;
 190:
            var7[1] = var6;
            var6 = 'children';
            var2[var6] = var7;
            var1 = var4.bind(var5)(var3, var2);
 209:
            return var1;
        }
    };
    var3['ForYouItemActionButtons'] = var2;
    return var1;
})();