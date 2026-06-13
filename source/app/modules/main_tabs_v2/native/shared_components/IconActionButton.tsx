// app/modules/main_tabs_v2/native/shared_components/IconActionButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var2 = function ButtonBadge(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.badgePosition;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = 'left';
case 2:
            var2 = _closure1_slot6;
            var1 = false;
            var5 = var2.bind(var4)(var1);
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 10;
            var1 = var9[var6];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = _closure1_slot0;
            var6 = var9[var6];
            var6 = var8.bind(var4)(var6);
            var6 = var6.CHANNEL_BADGE_SIZE;
            var1['size'] = var6;
            var6 = 2;
            var1['maskSize'] = var6;
            var6 = 'left';
            if(!(var6 !== var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var5.unreadBadgeRight;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var6 = var5.unreadBadgeLeft;
case 6:
            var1['style'] = var6;
            var5 = var5.unreadBadgeMask;
            var5 = var5.color;
            var1['maskColor'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var9 = var5.bind(var1)(var8);
    var _closure1_slot3 = var9;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot4 = var8;
    var5 = var5.jsxs;
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var8 = var10.createStyles;
    var5 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var1 = {};
            var2 = {'minWidth': 32, 'minHeight': 32, 'borderRadius': 20, 'marginEnd': 12, 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'flexDirection': 'row', 'paddingRight': 12, 'paddingLeft': 12};
            var1['actionIconButtonPressable'] = var2;
            var2 = {};
            var4 = 0;
            var2['marginEnd'] = var4;
            var1['withoutMargin'] = var2;
            var2 = {};
            var5 = undefined;
            var3 = undefined;
            if(var7) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 3;
            var6 = var9[var6];
            var6 = var8.bind(var5)(var6);
            var6 = var6.colors;
            var3 = var6.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
case 7:
            var2['backgroundColor'] = var3;
            var1['filled'] = var2;
            var2 = {};
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 3;
            var10 = var8[var6];
            var10 = var9.bind(var5)(var10);
            var10 = var10.colors;
            var10 = var10.BACKGROUND_BASE_LOW;
            var2['backgroundColor'] = var10;
            var10 = 1;
            var2['borderWidth'] = var10;
            var10 = var8[var6];
            var10 = var9.bind(var5)(var10);
            var10 = var10.colors;
            var10 = var10.INPUT_BACKGROUND_DEFAULT;
            var2['borderColor'] = var10;
            var8 = var8[var6];
            var8 = var9.bind(var5)(var8);
            var8 = var8.shadows;
            var11 = var8.SHADOW_LOW;
            var12 = var2;
            var8 = copyDataProperties(var12, var11);
            var1['outlined'] = var2;
            var2 = {'maxWidth': 32, 'maxHeight': 32};
            var1['roundButton'] = var2;
            var2 = {};
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var6];
            var8 = var9.bind(var5)(var8);
            var8 = var8.colors;
            if(var7) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var7 = var8.INTERACTIVE_TEXT_DEFAULT;
            _fun0002_ip = 11; continue _fun0002;
case 9:
            var7 = var8.ICON_SUBTLE;
case 11:
            var2['tintColor'] = var7;
            var1['actionIcon'] = var2;
            var2 = {};
            var9 = 4;
            var2['marginLeft'] = var9;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var8 = var8.bind(var5)(var7);
            var7 = var8.isAndroid;
            var7 = var7.bind(var8)();
            var4 = 0;
            if(!var7) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var4 = -2;
case 12:
            var2['marginTop'] = var4;
            var1['actionText'] = var2;
            var2 = {'position': 'absolute', 'left': 4294967294, 'top': 4294967295};
            var1['unreadBadgeLeft'] = var2;
            var2 = {'position': 'absolute', 'right': 4294967294, 'top': 4294967295};
            var1['unreadBadgeRight'] = var2;
            var2 = {};
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.BACKGROUND_BASE_LOW;
            var2['color'] = var7;
            var1['unreadBadgeMask'] = var2;
            var2 = {};
            var7 = 'relative';
            var2['position'] = var7;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.space;
            var3 = var3.PX_8;
            var2['marginLeft'] = var3;
            var1['countStyle'] = var2;
            return var1;
        }
    };
    var5 = var8.bind(var10)(var5);
    var _closure1_slot6 = var5;
    var8 = var9.memo;
    var5 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var5 = var2.IconComponent;
            var10 = var2.source;
            var _closure2_slot0 = var10;
            var6 = var2.color;
            var _closure2_slot1 = var6;
            var8 = var2.isRefreshEnabled;
            var2 = _closure1_slot6;
            var4 = undefined;
            var11 = var2.bind(var4)(var8);
            var _closure2_slot2 = var11;
            var9 = _closure1_slot3;
            var3 = var9.useCallback;
            var2 = new Array(3);
            var2[0] = var11;
            var2[1] = var6;
            var2[2] = var10;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot4;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 5;
                    var1 = var7[var5];
                    var3 = undefined;
                    var1 = var6.bind(var3)(var1);
                    var2 = var1.Icon;
                    var1 = {};
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.Icon;
                    var5 = var5.Sizes;
                    var5 = var5.SMALL;
                    var1['size'] = var5;
                    var5 = _closure2_slot0;
                    var1['source'] = var5;
                    var7 = _closure2_slot1;
                    var5 = null;
                    if(!(var5 == var7)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var5 = _closure2_slot2;
                    var5 = var5.actionIcon;
                    var5 = var5.tintColor;
                    _fun0004_ip = 16; continue _fun0004;
case 14:
                    var5 = _closure2_slot1;
case 16:
                    var1['color'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var1 = var3.bind(var9)(var1, var2);
            var2 = null;
            if(!(var2 == var5)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var1 = var1.bind(var4)();
            _fun0003_ip = 19; continue _fun0003;
case 17:
            var3 = _closure1_slot4;
            var2 = {};
            var9 = 'sm';
            var2['size'] = var9;
            if(!var8) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 3;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.colors;
            var6 = var7.ICON_SUBTLE;
case 20:
            var2['color'] = var6;
            var1 = var3.bind(var4)(var5, var2);
case 19:
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot7 = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/shared_components/IconActionButton.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function IconActionButton(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var17 = var1.source;
            var19 = var1.IconComponent;
            var21 = var1.variant;
            var4 = undefined;
            if(!(var21 === var4)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var21 = 'filled';
case 22:
            var18 = var1.color;
            var16 = var1.buttonText;
            var5 = var1.accessibilityLabel;
            var11 = var1.style;
            var6 = var1.badge;
            var10 = var1.badgePosition;
            if(!(var10 === var4)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var10 = 'left';
case 24:
            var13 = var1.count;
            if(!(var13 === var4)) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var13 = 0;
case 26:
            var20 = var1.noMargin;
            var24 = var1.hitSlop;
            var12 = var1.disabled;
            var23 = var1.onPress;
            var22 = var1.onLongPress;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = 'IconActionButton';
            var15 = var2.bind(var4)(var1);
            var1 = _closure1_slot6;
            var14 = var1.bind(var4)(var15);
            var2 = _closure1_slot0;
            var1 = 7;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useFontScale;
            var2 = var1.bind(var2)();
            var8 = null;
            var9 = var8 != var16;
            if(!var9) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var1 = 1.2;
            var1 = var2 > var1;
            var9 = !var1;
case 28:
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var25 = _closure1_slot2;
            var1 = 8;
            var1 = var25[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var1['hitSlop'] = var24;
            var1['onPress'] = var23;
            var1['onLongPress'] = var22;
            var1['disabled'] = var12;
            var12 = 'button';
            var1['accessibilityRole'] = var12;
            var1['accessibilityLabel'] = var5;
            var12 = var14.actionIconButtonPressable;
            var5 = new Array(5);
            var5[0] = var12;
            var12 = 'outlined';
            if(!(var12 !== var21)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var12 = var14.filled;
            _fun0005_ip = 32; continue _fun0005;
case 30:
            var12 = var14.outlined;
case 32:
            var5[1] = var12;
            var12 = undefined;
            if(var9) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var12 = var14.roundButton;
case 33:
            var5[2] = var12;
            var12 = undefined;
            if(!var20) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var12 = var14.withoutMargin;
case 35:
            var5[3] = var12;
            var5[4] = var11;
            var1['style'] = var5;
            var12 = _closure1_slot4;
            var11 = _closure1_slot7;
            var5 = {};
            var5['IconComponent'] = var19;
            var5['color'] = var18;
            var5['source'] = var17;
            var5['isRefreshEnabled'] = var15;
            var11 = var12.bind(var4)(var11, var5);
            var5 = new Array(4);
            var5[0] = var11;
            if(!var9) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var15 = _closure1_slot4;
            var12 = _closure1_slot0;
            var17 = _closure1_slot2;
            var11 = 9;
            var11 = var17[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {};
            var17 = 'text-sm/bold';
            var11['variant'] = var17;
            var17 = var14.actionText;
            var11['style'] = var17;
            var11['children'] = var16;
            var9 = var15.bind(var4)(var12, var11);
case 37:
            var5[1] = var9;
            var9 = 0;
            var9 = var13 > var9;
            var8 = null;
            if(!var9) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var12 = _closure1_slot4;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 5;
            var9 = var15[var9];
            var9 = var11.bind(var4)(var9);
            var11 = var9.Badge;
            var9 = {};
            var14 = var14.countStyle;
            var9['style'] = var14;
            var9['value'] = var13;
            var8 = var12.bind(var4)(var11, var9);
case 39:
            var5[2] = var8;
            if(!var6) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var9 = _closure1_slot4;
            var8 = _closure1_slot8;
            var7 = {};
            var7['badgePosition'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 41:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var4 = 32;
    var3['ICON_ACTION_BUTTON_SIZE'] = var4;
    var3['ButtonBadge'] = var2;
    return var1;
})();