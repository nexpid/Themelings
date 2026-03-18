// app/modules/chat_input/native/action_buttons/ChatInputRightActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
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
    var4 = {};
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 8};
    var4['container'] = var10;
    var10 = {};
    var11 = 5;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_BRAND;
    var10['tintColor'] = var11;
    var4['activeBrand'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var17 = var2.canStartThreads;
            var16 = var2.channel;
            var18 = var2.isAppLauncherEnabled;
            var11 = var2.keyboardType;
            var8 = var2.shouldShowGiftButton;
            var14 = var2.onPressAction;
            var9 = var2.onPressExpression;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var2 = _closure1_slot8;
            var20 = var2.bind(var4)();
            var15 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var5 = var15.bind(var4)(var2);
            var3 = var5.useMobileVisualRefreshConfig;
            var2 = {};
            var7 = 'ChatInputRightActions';
            var2['location'] = var7;
            var2 = var3.bind(var5)(var2);
            var5 = var2.chatInputHideApps;
            var3 = _closure1_slot1;
            var2 = 7;
            var2 = var6[var2];
            var7 = var3.bind(var4)(var2);
            var2 = {};
            var3 = true;
            var2['includeCustomKeyboard'] = var3;
            var2 = var7.bind(var4)(var2);
            var7 = 8;
            var7 = var6[var7];
            var10 = var15.bind(var4)(var7);
            var7 = var10.useKeyboardContextForType;
            var13 = 9;
            var6 = var6[var13];
            var6 = var15.bind(var4)(var6);
            var6 = var6.KeyboardTypes;
            var6 = var6.SYSTEM;
            var6 = var7.bind(var10)(var6);
            var6 = var6.keyboardWillOpen;
            var15 = var17;
            if(!var15) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var6;
case 4:
            var15 = var2;
case 2:
            var7 = _closure1_slot4;
            var2 = var7.useState;
            var6 = var2.bind(var7)(var3);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var6, var2);
            var2 = 0;
            var10 = var3[var2];
            var2 = 1;
            var2 = var3[var2];
            _closure2_slot0 = var2;
            var6 = var7.useImperativeHandle;
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
            var1 = var6.bind(var7)(var3, var2, var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = var20.container;
            var1['style'] = var6;
            var6 = null;
            if(!var10) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = null;
            if(!var18) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var6 = null;
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 9:
            var19 = _closure1_slot6;
            var18 = _closure1_slot1;
            var21 = _closure1_slot2;
            var5 = 10;
            var5 = var21[var5];
            var18 = var18.bind(var4)(var5);
            var5 = {};
            var22 = _closure1_slot0;
            var21 = var21[var13];
            var21 = var22.bind(var4)(var21);
            var21 = var21.KeyboardTypes;
            var21 = var21.APP_LAUNCHER;
            var21 = var11 === var21;
            var5['active'] = var21;
            var5['channel'] = var16;
            var5['onPress'] = var14;
            var5['styleButton'] = var4;
            var20 = var20.activeBrand;
            var5['styleActiveIcon'] = var20;
            var6 = var19.bind(var4)(var18, var5);
case 6:
            var5 = new Array(3);
            var5[0] = var6;
            var6 = null;
            if(!var10) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            if(var8) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = null;
            if(!var15) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var10 = _closure1_slot6;
            var8 = _closure1_slot1;
            var18 = _closure1_slot2;
            var7 = 11;
            var7 = var18[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['canStartThreads'] = var17;
            var7['channel'] = var16;
            var7['onPress'] = var14;
            var7['styleButton'] = var4;
            var14 = global;
            var14 = var14.Boolean;
            var14 = var14.bind(var4)(var15);
            var7['shouldShowThread'] = var14;
            var6 = var10.bind(var4)(var8, var7);
case 10:
            var5[1] = var6;
            var8 = _closure1_slot6;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 12;
            var6 = var10[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var12 = _closure1_slot0;
            var10 = var10[var13];
            var10 = var12.bind(var4)(var10);
            var10 = var10.KeyboardTypes;
            var10 = var10.EXPRESSION;
            var10 = var11 === var10;
            var6['active'] = var10;
            var6['onPress'] = var9;
            var6 = var8.bind(var4)(var7, var6);
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