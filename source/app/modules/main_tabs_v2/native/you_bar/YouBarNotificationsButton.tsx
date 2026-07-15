// app/modules/main_tabs_v2/native/you_bar/YouBarNotificationsButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.YOU_BAR_SPRING_CONFIG;
    var _closure1_slot6 = var8;
    var8 = var4.YOU_BAR_BUTTON_HIT_SLOP;
    var _closure1_slot7 = var8;
    var11 = var4.YOU_BAR_BUTTON_ICON_SIZE;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['width'] = var11;
    var10['height'] = var11;
    var4['icon'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var4['iconContainer'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = {};
    var8 = 'function YouBarNotificationsButtonTsx1(){const{withSpring,badgeCount,YOU_BAR_SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.space.PX_4:0,YOU_BAR_SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)};}';
    var4['code'] = var8;
    var _closure1_slot11 = var4;
    var4 = var7.memo;
    var2 = function YouBarNotificationsButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var20 = var1.hasNameplate;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var1 = _closure1_slot10;
            var18 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var19 = var1.value;
            var _closure2_slot0 = var19;
            var11 = _closure1_slot0;
            var14 = 7;
            var1 = var3[var14];
            var6 = var11.bind(var4)(var1);
            var5 = var6.useAnimatedStyle;
            var1 = function u() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var4 = {};
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var8 = 8;
                    var3 = var3[var8];
                    var7 = undefined;
                    var11 = var5.bind(var7)(var3);
                    var10 = var11.withSpring;
                    var3 = _closure2_slot0;
                    var5 = 0;
                    var3 = var3 > var5;
                    var9 = 0;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var9 = 1;
case 2:
                    var3 = _closure1_slot6;
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
                    if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var3 = 9;
                    var3 = var12[var3];
                    var3 = var11.bind(var7)(var3);
                    var3 = var3.space;
                    var4 = var3.PX_4;
case 4:
                    var3 = _closure1_slot6;
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
                    if(!var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = 1;
case 6:
                    var2 = _closure1_slot6;
                    var2 = var3.bind(var4)(var5, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var8 = {};
            var10 = 8;
            var10 = var3[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.withSpring;
            var8['withSpring'] = var10;
            var8['badgeCount'] = var19;
            var10 = _closure1_slot6;
            var8['YOU_BAR_SPRING_CONFIG'] = var10;
            var10 = 9;
            var10 = var3[var10];
            var10 = var2.bind(var4)(var10);
            var8['tokens'] = var10;
            var1['__closure'] = var8;
            var8 = 11181198364048.0;
            var1['__workletHash'] = var8;
            var8 = _closure1_slot11;
            var1['__initData'] = var8;
            var17 = var5.bind(var6)(var1);
            var1 = 10;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useConfig;
            var1 = {};
            var5 = 'YouBar';
            var1['location'] = var5;
            var1 = var2.bind(var3)(var1);
            var1 = var1.enabled;
            if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 11;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = _closure1_slot5;
            var3 = var5.getSavedMessageCount;
            var5 = var3.bind(var5)();
            var3 = 0;
            var2 = var5 > var3;
case 10:
            var1 = var2;
case 8:
            _closure2_slot1 = var1;
            var5 = _closure1_slot3;
            var6 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var5 = 12;
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
                    var2 = 13;
                    var2 = var1[var2];
                    var6 = var5.bind(var4)(var2);
                    var5 = var6.pushLazy;
                    var2 = 15;
                    var2 = var1[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = 14;
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
case 12:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var6.bind(var5)(var2, var3);
            _closure2_slot2 = var8;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = new Array(0);
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var3 = var1.push;
                    var2 = {};
                    var4 = 'open-bookmarks';
                    var2['name'] = var4;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 16;
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
case 14:
                    return var1;
                }
            };
            var11 = var3.bind(var5)(var1, var2);
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.actionName;
                    var1 = 'open-bookmarks';
                    if(!(var1 === var2)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot8;
            var13 = _closure1_slot0;
            var21 = _closure1_slot2;
            var1 = 17;
            var1 = var21[var1];
            var1 = var13.bind(var4)(var1);
            var2 = var1.YouBarButtonContainer;
            var1 = {};
            var5 = 18;
            var5 = var21[var5];
            var5 = var13.bind(var4)(var5);
            var6 = var5.IconButton;
            var5 = {};
            var12 = 16;
            var15 = var21[var12];
            var15 = var13.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.formatToPlainString;
            var12 = var21[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.t;
            var13 = var12.kedGua;
            var12 = {};
            var12['count'] = var19;
            var12 = var15.bind(var16)(var13, var12);
            var5['accessibilityLabel'] = var12;
            var5['accessibilityActions'] = var11;
            var5['onAccessibilityAction'] = var10;
            var10 = 'tertiary';
            if(!var20) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var10 = 'secondary-overlay';
case 18:
            var5['variant'] = var10;
            var10 = 'sm';
            var5['size'] = var10;
            var12 = _closure1_slot9;
            var11 = _closure1_slot4;
            var10 = {};
            var13 = var18.iconContainer;
            var10['style'] = var13;
            var16 = _closure1_slot8;
            var15 = _closure1_slot0;
            var21 = _closure1_slot2;
            var13 = 19;
            var13 = var21[var13];
            var13 = var15.bind(var4)(var13);
            var15 = var13.BellIcon;
            var13 = {};
            var21 = 'custom';
            var13['size'] = var21;
            var18 = var18.icon;
            var13['style'] = var18;
            var18 = undefined;
            if(!var20) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var18 = 'white';
case 20:
            var13['color'] = var18;
            var15 = var16.bind(var4)(var15, var13);
            var13 = new Array(2);
            var13[0] = var15;
            var16 = _closure1_slot8;
            var15 = _closure1_slot1;
            var20 = _closure1_slot2;
            var14 = var20[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.View;
            var14 = {};
            var14['style'] = var17;
            var18 = _closure1_slot0;
            var17 = 20;
            var17 = var20[var17];
            var17 = var18.bind(var4)(var17);
            var18 = var17.Badge;
            var17 = {};
            var17['value'] = var19;
            var17 = var16.bind(var4)(var18, var17);
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[1] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var5['icon'] = var10;
            var9 = function onPress() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 21;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = true;
                    var3['inNestedNavigator'] = var2;
                    var2 = 'notifications';
                    var2 = var4.bind(var5)(var2, var3);
case 22:
                    return var1;
                }
            };
            var5['onPress'] = var9;
            var5['onLongPress'] = var8;
            var7 = _closure1_slot7;
            var5['hitSlop'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/you_bar/YouBarNotificationsButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();