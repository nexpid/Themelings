// app/modules/video_calls/native/components/CallBarAction.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var8;
    var5 = global;
    var9 = var5.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var1 = 0;
    var6 = var8[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var6 = var4.Image;
    var _closure1_slot4 = var6;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var10 = 2;
    var4 = var8[var10];
    var4 = var7.bind(var1)(var4);
    var4 = var4.resetFocusTimer;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var6 = var4.jsx;
    var _closure1_slot7 = var6;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var8[var4];
    var13 = var7.bind(var1)(var4);
    var9 = var13.hexWithOpacity;
    var11 = 5;
    var4 = var8[var11];
    var4 = var12.bind(var1)(var4);
    var4 = var4.unsafe_rawColors;
    var6 = var4.WHITE_500;
    var4 = 0.24;
    var4 = var9.bind(var13)(var6, var4);
    var _closure1_slot9 = var4;
    var13 = var5.Object;
    var9 = var13.freeze;
    var4 = 6;
    var6 = {'buttonRadius': 28, 'badgeRadius': 6, 'cutoutInset': 3};
    var6 = var9.bind(var13)(var6);
    var _closure1_slot10 = var6;
    var13 = var5.Object;
    var6 = var13.freeze;
    var9 = 24;
    var5 = {'buttonRadius': 24, 'badgeRadius': 4, 'cutoutInset': 2};
    var5 = var6.bind(var13)(var5);
    var _closure1_slot11 = var5;
    var6 = var5.buttonRadius;
    var6 = var10 * var6;
    var6 = var6 * var11;
    var9 = var9 + var6;
    var6 = 96;
    var6 = var9 + var6;
    var _closure1_slot12 = var6;
    var4 = var8[var4];
    var9 = var7.bind(var1)(var4);
    var6 = var9.createStyles;
    var4 = {};
    var10 = {};
    var13 = 'absolute';
    var10['position'] = var13;
    var4['buttonContainer'] = var10;
    var10 = {'position': 'absolute', 'justifyContent': 'center', 'alignItems': 'center'};
    var4['iconContainer'] = var10;
    var10 = {'backgroundColor': 'white', 'position': 'absolute'};
    var4['badge'] = var10;
    var10 = {'position': 'absolute', 'top': 4294967292, 'right': 4294967292, 'height': 24, 'minWidth': 24, 'paddingHorizontal': 4, 'borderRadius': 12, 'borderWidth': 4, 'borderColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
    var13 = var8[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.PRIMARY_760;
    var10['borderColor'] = var13;
    var4['notificationArea'] = var10;
    var10 = {};
    var13 = 16;
    var10['lineHeight'] = var13;
    var4['notificationText'] = var10;
    var10 = {};
    var13 = var8[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BUTTON_DANGER_BACKGROUND;
    var10['backgroundColor'] = var13;
    var4['notificationAreaMentioned'] = var10;
    var10 = {};
    var11 = var8[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.PRIMARY_600;
    var10['backgroundColor'] = var11;
    var4['notificationAreaUnread'] = var10;
    var4 = var6.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = function ActionButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var19 = var2.appearsDisabled;
            var4 = undefined;
            if(!(var19 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var19 = false;
case 2:
            var15 = var2.backgroundColor;
            var27 = var2.imageStyle;
            var1 = var2.onPress;
            var _closure2_slot0 = var1;
            var8 = var2.accessibilityLabel;
            var7 = var2.accessibilityState;
            var28 = var2.source;
            var11 = var2.showBadge;
            if(!(var11 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = false;
case 4:
            var1 = var2.isSmallSize;
            if(!(var1 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = false;
case 6:
            var9 = var2.children;
            var25 = var2.lottieComponent;
            var26 = var2.lottieComponentColor;
            var24 = var2.IconComponent;
            var2 = _closure1_slot13;
            var14 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var10 = var2.bind(var4)();
            var3 = 12;
            var6 = var3;
            if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = _closure1_slot12;
            var2 = var10 < var2;
            var6 = var3;
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var6 = 6;
case 8:
            if(var1) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var16 = _closure1_slot10;
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var16 = _closure1_slot11;
case 13:
            var1 = var16.buttonRadius;
            var2 = 2;
            var23 = var2 * var1;
            var1 = var16.badgeRadius;
            var18 = var2 * var1;
            var2 = var16.badgeRadius;
            var1 = var16.cutoutInset;
            var10 = var2 + var1;
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 8;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var1['accessibilityLabel'] = var8;
            var8 = 'button';
            var1['accessibilityRole'] = var8;
            var1['accessibilityState'] = var7;
            var5 = function onPress() {
                var2 = _closure1_slot6;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var2 = _closure2_slot0;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1['onPress'] = var5;
            var5 = false;
            var1['disabled'] = var5;
            var5 = {};
            var5['width'] = var23;
            var5['height'] = var23;
            var7 = var16.buttonRadius;
            var5['borderRadius'] = var7;
            var5['marginHorizontal'] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot5;
            var5 = {};
            var12 = var14.buttonContainer;
            var8 = new Array(3);
            var8[0] = var12;
            var12 = {};
            var12['width'] = var23;
            var12['height'] = var23;
            var13 = var16.buttonRadius;
            var12['borderRadius'] = var13;
            var8[1] = var12;
            var12 = {};
            var13 = 1;
            if(!var19) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var13 = 0.25;
case 14:
            var12['opacity'] = var13;
            var8[2] = var12;
            var5['style'] = var8;
            var13 = _closure1_slot7;
            var12 = _closure1_slot1;
            var8 = _closure1_slot2;
            var19 = 9;
            var8 = var8[var19];
            var12 = var12.bind(var4)(var8);
            var8 = {};
            var20 = var16.buttonRadius;
            var8['circleRadius'] = var20;
            var8['cutoutRadius'] = var10;
            var8['enableCutout'] = var11;
            var20 = 45;
            var8['cutoutPositionInDegrees'] = var20;
            var10 = null;
            if(!(var10 == var15)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var15 = _closure1_slot9;
case 16:
            var8['circleFillColor'] = var15;
            var12 = var13.bind(var4)(var12, var8);
            var8 = new Array(4);
            var8[0] = var12;
            var15 = _closure1_slot7;
            var13 = _closure1_slot5;
            var12 = {};
            var22 = var14.iconContainer;
            var21 = new Array(2);
            var21[0] = var22;
            var22 = {};
            var22['width'] = var23;
            var22['height'] = var23;
            var21[1] = var22;
            var12['style'] = var21;
            if(!(var10 == var25)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            if(!(var10 == var24)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var23 = _closure1_slot7;
            var22 = _closure1_slot4;
            var21 = {};
            var21['source'] = var28;
            var21['style'] = var27;
            var21 = var23.bind(var4)(var22, var21);
            _fun0001_ip = 22; continue _fun0001;
case 20:
            var23 = _closure1_slot7;
            var22 = {};
            var22['style'] = var27;
            var21 = var23.bind(var4)(var24, var22);
case 22:
            _fun0001_ip = 23; continue _fun0001;
case 18:
            var24 = _closure1_slot3;
            var23 = var24.cloneElement;
            var22 = {};
            var22['color'] = var26;
            var21 = var23.bind(var24)(var25, var22);
case 23:
            var12['children'] = var21;
            var12 = var15.bind(var4)(var13, var12);
            var8[1] = var12;
            var10 = null;
            if(!var11) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var13 = _closure1_slot7;
            var12 = _closure1_slot5;
            var11 = {};
            var15 = var14.badge;
            var14 = new Array(2);
            var14[0] = var15;
            var15 = {};
            var15['width'] = var18;
            var15['height'] = var18;
            var18 = var16.badgeRadius;
            var15['borderRadius'] = var18;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var21 = var17[var19];
            var24 = var18.bind(var4)(var21);
            var23 = var24.getBadgeTop;
            var22 = var16.badgeRadius;
            var21 = var16.buttonRadius;
            var21 = var23.bind(var24)(var22, var21, var20);
            var15['top'] = var21;
            var17 = var17[var19];
            var19 = var18.bind(var4)(var17);
            var18 = var19.getBadgeLeft;
            var17 = var16.badgeRadius;
            var16 = var16.buttonRadius;
            var16 = var18.bind(var19)(var17, var16, var20);
            var15['left'] = var16;
            var14[1] = var15;
            var11['style'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 24:
            var8[2] = var10;
            var8[3] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var6 = 11;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/video_calls/native/components/CallBarAction.tsx';
    var6 = var7.bind(var8)(var6);
    var3['SMALL_ACTION_BUTTON_DIMENSIONS'] = var5;
    var3['ActionButton'] = var4;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var12 = var6.isActive;
            var3 = var6.disableTint;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var3 = false;
case 26:
            var9 = var6.showBadge;
            if(!(var9 === var4)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var9 = false;
case 28:
            var10 = var6.isSmallSize;
            if(!(var10 === var4)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var10 = false;
case 30:
            var13 = var6.backgroundColor;
            var5 = var6.tintColor;
            var2 = {'isActive': 0, 'disableTint': 0, 'showBadge': 0, 'isSmallSize': 0, 'backgroundColor': 0, 'tintColor': 0};
            var7 = null;
            var17 = var2;
            var16 = null;
            var1 = silentSetPrototypeOf(var17, var16);
            var17 = {};
            var16 = var6;
            var15 = var2;
            var8 = copyDataProperties(var17, var16, var15);
            var11 = null;
            if(!var12) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.unsafe_rawColors;
            var11 = var1.WHITE_500;
case 32:
            var6 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 5;
            var2 = var14[var2];
            var2 = var6.bind(var4)(var2);
            var6 = var2.unsafe_rawColors;
            if(var12) { _fun0002_ip = 11; continue _fun0002 }
case 34:
            var2 = var6.WHITE_500;
            _fun0002_ip = 35; continue _fun0002;
case 11:
            var2 = var6.PRIMARY_900;
case 35:
            var6 = undefined;
            if(var3) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var6 = var2;
case 36:
            var3 = _closure1_slot7;
            var2 = _closure1_slot14;
            var1 = {};
            if(!(var7 != var13)) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var11 = var13;
case 38:
            var1['backgroundColor'] = var11;
            var11 = {};
            var13 = var6;
            if(!(var7 != var5)) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var13 = var5;
case 40:
            var11['tintColor'] = var13;
            var1['imageStyle'] = var11;
            var11 = {};
            var11['selected'] = var12;
            var1['accessibilityState'] = var11;
            var1['isSmallSize'] = var10;
            var17 = var1;
            var16 = var8;
            var8 = copyDataProperties(var17, var16);
            var8 = 'showBadge';
            var1[var8] = var9;
            if(!(var7 != var5)) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var6 = var5;
case 42:
            var5 = 'lottieComponentColor';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ToggledActionButton'] = var4;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var6 = var3.isSmallSize;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0003_ip = 3; continue _fun0003 }
case 44:
            var6 = false;
case 3:
            var1 = null;
            var2 = Object.create(var1);
            var1 = 0;
            var2['isSmallSize'] = var1;
            var11 = {};
            var10 = var3;
            var9 = var2;
            var10 = copyDataProperties(var11, var10, var9);
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 5;
            var7 = var8[var2];
            var7 = var3.bind(var4)(var7);
            var7 = var7.unsafe_rawColors;
            var7 = var7.RED_400;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.unsafe_rawColors;
            var8 = var2.WHITE_500;
            var3 = _closure1_slot7;
            var2 = _closure1_slot14;
            var1 = {};
            var1['backgroundColor'] = var7;
            var7 = {};
            var7['tintColor'] = var8;
            var1['imageStyle'] = var7;
            var1['isSmallSize'] = var6;
            var11 = var1;
            var5 = copyDataProperties(var11, var10);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['PrimaryActionButton'] = var4;
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var11 = var3.notifications;
            var10 = var3.isMentioned;
            var1 = null;
            var2 = Object.create(var1);
            var1 = 0;
            var2['notifications'] = var1;
            var2['isMentioned'] = var1;
            var16 = {};
            var15 = var3;
            var14 = var2;
            var15 = copyDataProperties(var16, var15, var14);
            var1 = _closure1_slot13;
            var4 = undefined;
            var12 = var1.bind(var4)();
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = _closure1_slot14;
            var5 = {};
            var16 = var5;
            var7 = copyDataProperties(var16, var15);
            var7 = {};
            var13 = var12.notificationArea;
            var9 = new Array(2);
            var9[0] = var13;
            var13 = true;
            if(!(var13 !== var10)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            if(!(var4 !== var10)) { _fun0004_ip = 45; continue _fun0004 }
case 47:
            var10 = var12.notificationAreaUnread;
            _fun0004_ip = 48; continue _fun0004;
case 45:
            var10 = var12.notificationAreaMentioned;
case 48:
            var9[1] = var10;
            var7['style'] = var9;
            var10 = _closure1_slot7;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 10;
            var8 = var13[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'style': null, 'variant': 'text-xs/semibold', 'color': 'always-white'};
            var12 = var12.notificationText;
            var8['style'] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var7['children'] = var8;
            var8 = var3.bind(var4)(var2, var7);
            var7 = 'children';
            var5[var7] = var8;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['NotifiedActionButton'] = var2;
    return var1;
})();