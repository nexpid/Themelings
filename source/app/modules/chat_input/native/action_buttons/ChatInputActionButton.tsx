// app/modules/chat_input/native/action_buttons/ChatInputActionButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var13 = 0;
    var7 = var6[var13];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var14 = var4.CHAT_INPUT_ACTION_BUTTON_SIZE;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 4;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var10['borderRadius'] = var15;
    var10['height'] = var14;
    var10['width'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var10['marginHorizontal'] = var14;
    var10['flexShrink'] = var13;
    var13 = 'row';
    var10['flexDirection'] = var13;
    var13 = 'center';
    var10['alignItems'] = var13;
    var10['justifyContent'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var10['backgroundColor'] = var13;
    var4['actionButton'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.REDESIGN_BUTTON_TERTIARY_TEXT;
    var10['tintColor'] = var13;
    var4['actionButtonIcon'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.REDESIGN_BUTTON_TERTIARY_PRESSED_TEXT;
    var10['tintColor'] = var13;
    var4['actionButtonIconActive'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.ICON_MUTED;
    var10['tintColor'] = var11;
    var4['actionButtonIconDisabled'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot3 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.active;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 17; continue _fun0001 }
 15:
            var11 = false;
 17:
            var18 = var1.style;
            var19 = var1.activeStyle;
            var12 = var1.activeIconStyle;
            var9 = var1.disabled;
            var6 = var1.onPress;
            var15 = var1.accessibilityLabel;
            var14 = var1.accessibilityHint;
            var17 = var1.accessibilityState;
            var13 = var1.accessibilityActions;
            var8 = var1.onAccessibilityAction;
            var7 = var1.IconComponent;
            var1 = _closure1_slot3;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot2;
            var2 = _closure1_slot0;
            var16 = _closure1_slot1;
            var1 = 5;
            var1 = var16[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var16 = arg2;
            var1['ref'] = var16;
            var20 = var10.actionButton;
            var16 = new Array(3);
            var16[0] = var20;
            var16[1] = var18;
            var18 = var11;
            if(!var11) { _fun0001_ip = 156; continue _fun0001 }
 153:
            var18 = !var9;
 156:
            if(!var18) { _fun0001_ip = 162; continue _fun0001 }
 159:
            var18 = var19;
 162:
            var16[2] = var18;
            var1['style'] = var16;
            var1['disabled'] = var9;
            var16 = 'button';
            var1['accessibilityRole'] = var16;
            var16 = {};
            var16['disabled'] = var9;
            var22 = var16;
            var21 = var17;
            var17 = copyDataProperties(var22, var21);
            var1['accessibilityState'] = var16;
            var1['accessibilityLabel'] = var15;
            var1['accessibilityHint'] = var14;
            var1['accessibilityActions'] = var13;
            var1['onAccessibilityAction'] = var8;
            var1['onPress'] = var6;
            var6 = _closure1_slot2;
            var5 = {};
            var13 = var10.actionButtonIcon;
            var8 = new Array(4);
            var8[0] = var13;
            var13 = var11;
            if(!var11) { _fun0001_ip = 258; continue _fun0001 }
 252:
            var13 = var10.actionButtonIconActive;
 258:
            var8[1] = var13;
            if(!var11) { _fun0001_ip = 268; continue _fun0001 }
 265:
            var11 = var12;
 268:
            var8[2] = var11;
            if(!var9) { _fun0001_ip = 281; continue _fun0001 }
 275:
            var9 = var10.actionButtonIconDisabled;
 281:
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
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/action_buttons/ChatInputActionButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();