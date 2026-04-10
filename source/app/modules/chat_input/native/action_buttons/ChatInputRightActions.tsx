// app/modules/chat_input/native/action_buttons/ChatInputRightActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot6 = var8;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = {};
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 8};
            var1['container'] = var2;
            var2 = {};
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 5;
            var4 = var4[var6];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var7 = var4.colors;
            var4 = arg1;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var7.TEXT_BRAND;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = var7.ICON_STRONG;
case 4:
            var2['tintColor'] = var4;
            var1['activeBrand'] = var2;
            var2 = {};
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.radii;
            var7 = var7.sm;
            var2['borderRadius'] = var7;
            var7 = 1;
            var2['borderWidth'] = var7;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.CONTROL_SECONDARY_BORDER_ACTIVE;
            var2['borderColor'] = var7;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.CONTROL_SECONDARY_BACKGROUND_ACTIVE;
            var2['backgroundColor'] = var3;
            var1['activeSurface'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var21 = var2.canStartThreads;
            var13 = var2.channel;
            var9 = var2.isAppLauncherEnabled;
            var15 = var2.keyboardType;
            var18 = var2.shouldShowGiftButton;
            var10 = var2.onPressAction;
            var19 = var2.onPressExpression;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var14 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 6;
            var2 = var5[var2];
            var6 = var14.bind(var4)(var2);
            var3 = var6.useMobileVisualRefreshConfig;
            var2 = {};
            var7 = 'ChatInputRightActions';
            var2['location'] = var7;
            var2 = var3.bind(var6)(var2);
            var12 = var2.enabled;
            var7 = var2.chatInputHideMore;
            var2 = _closure1_slot8;
            var11 = var2.bind(var4)(var12);
            var3 = _closure1_slot1;
            var2 = 7;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var2 = {};
            var3 = true;
            var2['includeCustomKeyboard'] = var3;
            var2 = var6.bind(var4)(var2);
            var6 = 8;
            var6 = var5[var6];
            var8 = var14.bind(var4)(var6);
            var6 = var8.useKeyboardContextForType;
            var17 = 9;
            var5 = var5[var17];
            var5 = var14.bind(var4)(var5);
            var5 = var5.KeyboardTypes;
            var5 = var5.SYSTEM;
            var5 = var6.bind(var8)(var5);
            var5 = var5.keyboardWillOpen;
            var22 = !var7;
            if(!var22) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var22 = var21;
case 5:
            if(!var22) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            if(var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = var5;
case 9:
            var22 = var2;
case 7:
            var6 = _closure1_slot4;
            var2 = var6.useState;
            var5 = var2.bind(var6)(var3);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var5, var2);
            var2 = 0;
            var14 = var3[var2];
            var2 = 1;
            var2 = var3[var2];
            _closure2_slot0 = var2;
            var5 = var6.useImperativeHandle;
            var3 = arg2;
            var2 = function() {
                var1 = {};
                var3 = function onDismissActions() {
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var1['onDismissActions'] = var3;
                var2 = function onShowActions() {
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var1['onShowActions'] = var2;
                return var1;
            };
            var1 = new Array(0);
            var1 = var5.bind(var6)(var3, var2, var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var11.container;
            var1['style'] = var5;
            var8 = _closure1_slot6;
            var6 = _closure1_slot1;
            var20 = _closure1_slot2;
            var5 = 10;
            var5 = var20[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var23 = _closure1_slot0;
            var20 = var20[var17];
            var20 = var23.bind(var4)(var20);
            var20 = var20.KeyboardTypes;
            var20 = var20.EXPRESSION;
            var20 = var15 === var20;
            var5['active'] = var20;
            var5['onPress'] = var19;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var6 = null;
            if(!var14) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            if(var18) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var6 = null;
            if(!var22) { _fun0002_ip = 11; continue _fun0002 }
case 13:
            var20 = _closure1_slot6;
            var19 = _closure1_slot1;
            var23 = _closure1_slot2;
            var18 = 11;
            var18 = var23[var18];
            var19 = var19.bind(var4)(var18);
            var18 = {};
            var18['canStartThreads'] = var21;
            var18['channel'] = var13;
            var18['onPress'] = var10;
            var18['styleButton'] = var4;
            var21 = global;
            var21 = var21.Boolean;
            var21 = var21.bind(var4)(var22);
            var18['shouldShowThread'] = var21;
            var6 = var20.bind(var4)(var19, var18);
case 11:
            var5[1] = var6;
            var6 = null;
            if(!var14) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var6 = null;
            if(!var9) { _fun0002_ip = 15; continue _fun0002 }
case 17:
            var6 = null;
            if(var7) { _fun0002_ip = 15; continue _fun0002 }
case 18:
            var9 = _closure1_slot6;
            var8 = _closure1_slot1;
            var14 = _closure1_slot2;
            var7 = 12;
            var7 = var14[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var16 = _closure1_slot0;
            var14 = var14[var17];
            var14 = var16.bind(var4)(var14);
            var14 = var14.KeyboardTypes;
            var14 = var14.APP_LAUNCHER;
            var14 = var15 === var14;
            var7['active'] = var14;
            var7['channel'] = var13;
            var7['onPress'] = var10;
            var7['styleButton'] = var4;
            var10 = var11.activeBrand;
            var7['styleActiveIcon'] = var10;
            var10 = undefined;
            if(!var12) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var10 = var11.activeSurface;
case 19:
            var7['styleActive'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 15:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var4.bind(var7)(var2);
    var2 = 'ChatInputRightActions';
    var4['displayName'] = var2;
    var2 = var7.memo;
    var2 = var2.bind(var7)(var4);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/action_buttons/ChatInputRightActions.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();