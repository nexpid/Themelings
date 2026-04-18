// app/modules/chat_input/native/action_buttons/ChatInputActionButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var4 = arg2;
            var1 = {};
            var2 = {};
            var9 = _closure1_slot1;
            var5 = _closure1_slot2;
            var6 = 3;
            var8 = var5[var6];
            var5 = undefined;
            var8 = var9.bind(var5)(var8);
            var9 = var8.radii;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var9.round;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var8 = var9.sm;
case 4:
            var2['borderRadius'] = var8;
            var2['height'] = var4;
            var2['width'] = var4;
            var4 = arg3;
            var2['marginHorizontal'] = var4;
            var4 = 0;
            var2['flexShrink'] = var4;
            var4 = 'row';
            var2['flexDirection'] = var4;
            var4 = 'center';
            var2['alignItems'] = var4;
            var2['justifyContent'] = var4;
            var4 = undefined;
            if(var7) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var6];
            var7 = var8.bind(var5)(var7);
            var7 = var7.colors;
            var4 = var7.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
case 5:
            var2['backgroundColor'] = var4;
            var1['actionButton'] = var2;
            var2 = {};
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT;
            var2['tintColor'] = var7;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.modules;
            var7 = var7.mobile;
            var7 = var7.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE;
            var2['width'] = var7;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.modules;
            var7 = var7.mobile;
            var7 = var7.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE;
            var2['height'] = var7;
            var1['actionButtonIcon'] = var2;
            var2 = {};
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.REDESIGN_BUTTON_TERTIARY_PRESSED_TEXT;
            var2['tintColor'] = var7;
            var1['actionButtonIconActive'] = var2;
            var2 = {};
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.ICON_MUTED;
            var2['tintColor'] = var3;
            var1['actionButtonIconDisabled'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot4 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var11 = var1.active;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var11 = false;
case 7:
            var19 = var1.style;
            var20 = var1.activeStyle;
            var12 = var1.activeIconStyle;
            var9 = var1.disabled;
            var6 = var1.onPress;
            var16 = var1.accessible;
            var15 = var1.accessibilityLabel;
            var14 = var1.accessibilityHint;
            var17 = var1.accessibilityState;
            var13 = var1.accessibilityActions;
            var8 = var1.onAccessibilityAction;
            var7 = var1.IconComponent;
            var2 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 4;
            var1 = var18[var1];
            var10 = var2.bind(var4)(var1);
            var3 = var10.useMobileVisualRefreshConfig;
            var1 = {};
            var21 = 'ChatInputActionButton';
            var1['location'] = var21;
            var1 = var3.bind(var10)(var1);
            var21 = var1.enabled;
            var3 = 5;
            var1 = var18[var3];
            var24 = var2.bind(var4)(var1);
            var22 = var24.useToken;
            var23 = _closure1_slot1;
            var1 = 3;
            var10 = var18[var1];
            var10 = var23.bind(var4)(var10);
            var10 = var10.modules;
            var10 = var10.mobile;
            var10 = var10.CHAT_INPUT_ACTION_BUTTON_SIZE;
            var10 = var22.bind(var24)(var10);
            var3 = var18[var3];
            var22 = var2.bind(var4)(var3);
            var3 = var22.useToken;
            var1 = var18[var1];
            var1 = var23.bind(var4)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.CHAT_INPUT_ACTION_BUTTON_MARGIN;
            var3 = var3.bind(var22)(var1);
            var1 = _closure1_slot4;
            var10 = var1.bind(var4)(var21, var10, var3);
            var3 = _closure1_slot3;
            var1 = 6;
            var1 = var18[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var18 = arg2;
            var1['ref'] = var18;
            var21 = var10.actionButton;
            var18 = new Array(3);
            var18[0] = var21;
            var18[1] = var19;
            var19 = var11;
            if(!var11) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var19 = !var9;
case 9:
            if(!var19) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var19 = var20;
case 11:
            var18[2] = var19;
            var1['style'] = var18;
            var1['disabled'] = var9;
            var1['accessible'] = var16;
            var16 = 'button';
            var1['accessibilityRole'] = var16;
            var16 = {};
            var16['disabled'] = var9;
            var27 = var16;
            var26 = var17;
            var17 = copyDataProperties(var27, var26);
            var1['accessibilityState'] = var16;
            var1['accessibilityLabel'] = var15;
            var1['accessibilityHint'] = var14;
            var1['accessibilityActions'] = var13;
            var1['onAccessibilityAction'] = var8;
            var1['onPress'] = var6;
            var6 = _closure1_slot3;
            var5 = {};
            var8 = 'custom';
            var5['size'] = var8;
            var13 = var10.actionButtonIcon;
            var8 = new Array(4);
            var8[0] = var13;
            var13 = var11;
            if(!var11) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var13 = var10.actionButtonIconActive;
case 13:
            var8[1] = var13;
            if(!var11) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var11 = var12;
case 15:
            var8[2] = var11;
            if(!var9) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var9 = var10.actionButtonIconDisabled;
case 17:
            var8[3] = var9;
            var5['style'] = var8;
            var5 = var6.bind(var4)(var7, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var4.bind(var7)(var2);
    var2 = var7.memo;
    var2 = var2.bind(var7)(var4);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/action_buttons/ChatInputActionButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();