// app/modules/main_tabs_v2/native/shared_components/IconActionButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var7 = require;
        var14 = metroImportDefault;
        var3 = exports;
        var8 = dependencyMap;
        var _closure1_slot0 = var7;
        var _closure1_slot1 = var14;
        var _closure1_slot2 = var8;
        var2 = function ButtonBadge(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var7 = var1.badgePosition;
                var4 = undefined;
                if(!(var7 === var4)) { _fun0002_ip = 19; continue _fun0002 }
 15:
                var7 = 'left';
 19:
                var1 = _closure1_slot6;
                var5 = var1.bind(var4)();
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
                if(!(var6 !== var7)) { _fun0002_ip = 103; continue _fun0002 }
 95:
                var6 = var5.unreadBadgeRight;
                _fun0002_ip = 109; continue _fun0002;
 103:
                var6 = var5.unreadBadgeLeft;
 109:
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
        var6 = var9.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var6.bind(var9)(var3, var1, var4);
        var15 = 0;
        var6 = var8[var15];
        var4 = metroImportAll;
        var1 = undefined;
        var10 = var4.bind(var1)(var6);
        var _closure1_slot3 = var10;
        var16 = 1;
        var4 = var8[var16];
        var4 = var7.bind(var1)(var4);
        var6 = var4.jsx;
        var _closure1_slot4 = var6;
        var4 = var4.jsxs;
        var _closure1_slot5 = var4;
        var4 = 2;
        var4 = var8[var4];
        var11 = var7.bind(var1)(var4);
        var9 = var11.createStyles;
        var6 = {};
        var4 = 32;
        var12 = {'minWidth': 32, 'minHeight': 32, 'borderRadius': 20, 'marginEnd': 12, 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'flexDirection': 'row', 'paddingRight': 12, 'paddingLeft': 12};
        var6['actionIconButtonPressable'] = var12;
        var12 = {};
        var12['marginEnd'] = var15;
        var6['withoutMargin'] = var12;
        var12 = {};
        var13 = 3;
        var17 = var8[var13];
        var17 = var14.bind(var1)(var17);
        var17 = var17.colors;
        var17 = var17.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
        var12['backgroundColor'] = var17;
        var6['filled'] = var12;
        var12 = {};
        var17 = var8[var13];
        var17 = var14.bind(var1)(var17);
        var17 = var17.colors;
        var17 = var17.BG_BASE_PRIMARY;
        var12['backgroundColor'] = var17;
        var12['borderWidth'] = var16;
        var16 = var8[var13];
        var16 = var14.bind(var1)(var16);
        var16 = var16.colors;
        var16 = var16.INPUT_BACKGROUND;
        var12['borderColor'] = var16;
        var16 = var8[var13];
        var16 = var14.bind(var1)(var16);
        var16 = var16.shadows;
        var19 = var16.SHADOW_LOW;
        var20 = var12;
        var16 = copyDataProperties(var20, var19);
        var6['outlined'] = var12;
        var12 = {'maxWidth': 32, 'maxHeight': 32};
        var6['roundButton'] = var12;
        var12 = {};
        var16 = var8[var13];
        var16 = var14.bind(var1)(var16);
        var16 = var16.colors;
        var16 = var16.INTERACTIVE_NORMAL;
        var12['tintColor'] = var16;
        var6['actionIcon'] = var12;
        var12 = {};
        var16 = 4;
        var12['marginLeft'] = var16;
        var16 = var8[var16];
        var17 = var7.bind(var1)(var16);
        var16 = var17.isAndroid;
        var16 = var16.bind(var17)();
        if(!var16) { _fun0001_ip = 377; continue _fun0001 }
 371:
        var15 = -2;
 377:
        var12['marginTop'] = var15;
        var6['actionText'] = var12;
        var12 = {'position': 'absolute', 'left': 4294967294, 'top': 4294967295};
        var6['unreadBadgeLeft'] = var12;
        var12 = {'position': 'absolute', 'right': 4294967294, 'top': 4294967295};
        var6['unreadBadgeRight'] = var12;
        var12 = {};
        var15 = var8[var13];
        var15 = var14.bind(var1)(var15);
        var15 = var15.colors;
        var15 = var15.BG_BASE_PRIMARY;
        var12['color'] = var15;
        var6['unreadBadgeMask'] = var12;
        var12 = {};
        var15 = 'relative';
        var12['position'] = var15;
        var13 = var8[var13];
        var13 = var14.bind(var1)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_8;
        var12['marginLeft'] = var13;
        var6['countStyle'] = var12;
        var6 = var9.bind(var11)(var6);
        var _closure1_slot6 = var6;
        var9 = var10.memo;
        var6 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var5 = var2.IconComponent;
                var9 = var2.source;
                var _closure2_slot0 = var9;
                var6 = var2.color;
                var _closure2_slot1 = var6;
                var3 = _closure1_slot6;
                var4 = undefined;
                var10 = var3.bind(var4)();
                var _closure2_slot2 = var10;
                var8 = _closure1_slot3;
                var7 = var8.useCallback;
                var3 = new Array(3);
                var3[0] = var10;
                var3[1] = var6;
                var3[2] = var9;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var4 = _closure1_slot4;
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 5;
                        var1 = var7[var5];
                        var3 = undefined;
                        var2 = var6.bind(var3)(var1);
                        var1 = {};
                        var5 = var7[var5];
                        var5 = var6.bind(var3)(var5);
                        var5 = var5.Sizes;
                        var5 = var5.SMALL;
                        var1['size'] = var5;
                        var5 = _closure2_slot0;
                        var1['source'] = var5;
                        var7 = _closure2_slot1;
                        var5 = null;
                        if(!(var5 == var7)) { _fun0004_ip = 95; continue _fun0004 }
 77:
                        var5 = _closure2_slot2;
                        var5 = var5.actionIcon;
                        var5 = var5.tintColor;
                        _fun0004_ip = 99; continue _fun0004;
 95:
                        var5 = _closure2_slot1;
 99:
                        var1['color'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    }
                };
                var1 = var7.bind(var8)(var1, var3);
                var3 = null;
                if(!(var3 == var5)) { _fun0003_ip = 93; continue _fun0003 }
 87:
                var1 = var1.bind(var4)();
                _fun0003_ip = 117; continue _fun0003;
 93:
                var3 = _closure1_slot4;
                var2 = {};
                var7 = 'sm';
                var2['size'] = var7;
                var2['color'] = var6;
                var1 = var3.bind(var4)(var5, var2);
 117:
                return var1;
            }
        };
        var6 = var9.bind(var10)(var6);
        var _closure1_slot7 = var6;
        var6 = 11;
        var6 = var8[var6];
        var8 = var7.bind(var1)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = 'modules/main_tabs_v2/native/shared_components/IconActionButton.tsx';
        var6 = var7.bind(var8)(var6);
        var5 = function IconActionButton(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = arg1;
                var15 = var1.source;
                var18 = var1.IconComponent;
                var20 = var1.variant;
                var4 = undefined;
                if(!(var20 === var4)) { _fun0005_ip = 28; continue _fun0005 }
 24:
                var20 = 'filled';
 28:
                var17 = var1.color;
                var16 = var1.buttonText;
                var5 = var1.accessibilityLabel;
                var11 = var1.style;
                var6 = var1.badge;
                var10 = var1.badgePosition;
                if(!(var10 === var4)) { _fun0005_ip = 69; continue _fun0005 }
 65:
                var10 = 'left';
 69:
                var13 = var1.count;
                if(!(var13 === var4)) { _fun0005_ip = 81; continue _fun0005 }
 79:
                var13 = 0;
 81:
                var19 = var1.noMargin;
                var23 = var1.hitSlop;
                var12 = var1.disabled;
                var22 = var1.onPress;
                var21 = var1.onLongPress;
                var1 = _closure1_slot6;
                var14 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useFontScale;
                var2 = var1.bind(var2)();
                var8 = null;
                var9 = var8 != var16;
                if(!var9) { _fun0005_ip = 176; continue _fun0005 }
 159:
                var1 = 1.2;
                var1 = var2 > var1;
                var9 = !var1;
 176:
                var3 = _closure1_slot5;
                var2 = _closure1_slot0;
                var24 = _closure1_slot2;
                var1 = 7;
                var1 = var24[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var1['hitSlop'] = var23;
                var1['onPress'] = var22;
                var1['onLongPress'] = var21;
                var1['disabled'] = var12;
                var12 = 'button';
                var1['accessibilityRole'] = var12;
                var1['accessibilityLabel'] = var5;
                var12 = var14.actionIconButtonPressable;
                var5 = new Array(5);
                var5[0] = var12;
                var12 = 'outlined';
                if(!(var12 !== var20)) { _fun0005_ip = 268; continue _fun0005 }
 260:
                var12 = var14.filled;
                _fun0005_ip = 274; continue _fun0005;
 268:
                var12 = var14.outlined;
 274:
                var5[1] = var12;
                var12 = undefined;
                if(var9) { _fun0005_ip = 289; continue _fun0005 }
 283:
                var12 = var14.roundButton;
 289:
                var5[2] = var12;
                var12 = undefined;
                if(!var19) { _fun0005_ip = 304; continue _fun0005 }
 298:
                var12 = var14.withoutMargin;
 304:
                var5[3] = var12;
                var5[4] = var11;
                var1['style'] = var5;
                var12 = _closure1_slot4;
                var11 = _closure1_slot7;
                var5 = {};
                var5['IconComponent'] = var18;
                var5['color'] = var17;
                var5['source'] = var15;
                var11 = var12.bind(var4)(var11, var5);
                var5 = new Array(4);
                var5[0] = var11;
                if(!var9) { _fun0005_ip = 416; continue _fun0005 }
 355:
                var15 = _closure1_slot4;
                var12 = _closure1_slot0;
                var17 = _closure1_slot2;
                var11 = 8;
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
 416:
                var5[1] = var9;
                var9 = 0;
                var9 = var13 > var9;
                var8 = null;
                if(!var9) { _fun0005_ip = 477; continue _fun0005 }
 431:
                var12 = _closure1_slot4;
                var11 = _closure1_slot1;
                var15 = _closure1_slot2;
                var9 = 9;
                var9 = var15[var9];
                var11 = var11.bind(var4)(var9);
                var9 = {};
                var14 = var14.countStyle;
                var9['style'] = var14;
                var9['value'] = var13;
                var8 = var12.bind(var4)(var11, var9);
 477:
                var5[2] = var8;
                if(!var6) { _fun0005_ip = 505; continue _fun0005 }
 484:
                var9 = _closure1_slot4;
                var8 = _closure1_slot8;
                var7 = {};
                var7['badgePosition'] = var10;
                var6 = var9.bind(var4)(var8, var7);
 505:
                var5[3] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var5;
        var3['ICON_ACTION_BUTTON_SIZE'] = var4;
        var3['ButtonBadge'] = var2;
        return var1;
    }
})();