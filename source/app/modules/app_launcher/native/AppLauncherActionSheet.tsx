// app/modules/app_launcher/native/AppLauncherActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function AppLauncherActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.chatInputRef;
            var _closure2_slot0 = var2;
            var12 = var1.channel;
            var _closure2_slot1 = var12;
            var2 = _closure1_slot4;
            var1 = var2.useRef;
            var9 = null;
            var5 = var1.bind(var2)(var9);
            var _closure2_slot2 = var5;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 4;
            var2 = var13[var1];
            var4 = undefined;
            var7 = var11.bind(var4)(var2);
            var3 = var7.useSharedValue;
            var2 = -1;
            var20 = var3.bind(var7)(var2);
            var1 = var13[var1];
            var3 = var11.bind(var4)(var1);
            var2 = var3.useSharedValue;
            var1 = 0;
            var19 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var1 = var2.useRef;
            var18 = var1.bind(var2)(var4);
            var3 = _closure1_slot4;
            var2 = var3.useRef;
            var1 = 5;
            var1 = var13[var1];
            var1 = var11.bind(var4)(var1);
            var1 = var1.AppLauncherKeyboardCloseReason;
            var1 = var1.DISMISSED;
            var14 = var2.bind(var3)(var1);
            var1 = 6;
            var1 = var13[var1];
            var1 = var11.bind(var4)(var1);
            var1 = var1.AppLauncherEntrypoint;
            var15 = var1.TEXT;
            var1 = 7;
            var1 = var13[var1];
            var2 = var11.bind(var4)(var1);
            var1 = var2.useDefaultAppLauncherWidth;
            var8 = var1.bind(var2)(var15);
            var7 = _closure1_slot4;
            var3 = var7.useMemo;
            var2 = new Array(1);
            var2[0] = var12;
            var1 = function() {
                var1 = {};
                var2 = _closure2_slot1;
                var1['channel'] = var2;
                var2 = 'channel';
                var1['type'] = var2;
                return var1;
            };
            var17 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot4;
            var2 = var3.useRef;
            var1 = {};
            var7 = function getApplicationCommandManager() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var3 = var1.current;
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = var3.getApplicationCommandManager;
                    var1 = var2.bind(var3)();
case 2:
                    return var1;
                }
            };
            var1['getApplicationCommandManager'] = var7;
            var7 = function closeCustomKeyboard() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var1 = var2.closeActionSheet;
                    var1 = var1.bind(var2)();
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['closeCustomKeyboard'] = var7;
            var6 = function openCustomKeyboard() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 4; continue _fun0004 }
case 5:
                    var1 = var2.expandActionSheet;
                    var1 = var1.bind(var2)();
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['openCustomKeyboard'] = var6;
            var16 = var2.bind(var3)(var1);
            var3 = _closure1_slot6;
            var1 = 8;
            var1 = var13[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var1['ref'] = var5;
            var1['animatedIndex'] = var20;
            var5 = true;
            var1['scrollable'] = var5;
            var1['startExpanded'] = var5;
            var7 = _closure1_slot6;
            var6 = _closure1_slot1;
            var5 = 9;
            var5 = var13[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['bottomSheetIndex'] = var20;
            var5['bottomSheetPosition'] = var19;
            var5['bottomSheetExpandReasonRef'] = var18;
            var5['context'] = var17;
            var5['chatInputRef'] = var16;
            var5['entrypoint'] = var15;
            var5['keyboardCloseReasonRef'] = var14;
            var5['width'] = var8;
            var8 = {};
            var10 = _closure1_slot5;
            var10 = var10.HOME;
            var8['initialRouteName'] = var10;
            var10 = 10;
            var10 = var13[var10];
            var11 = var11.bind(var4)(var10);
            var10 = var11.getAppDMApplication;
            var10 = var10.bind(var11)(var12);
            var11 = var9 == var10;
            var9 = undefined;
            if(var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var10.name;
case 6:
            var8['initialSearchQuery'] = var9;
            var5['overrideParams'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppLauncherRouteName;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/AppLauncherActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAppLauncherActionSheet(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var5 = _closure1_slot4;
        var2 = var5.useState;
        var1 = false;
        var6 = var2.bind(var5)(var1);
        var5 = _closure1_slot3;
        var2 = undefined;
        var1 = 2;
        var2 = var5.bind(var2)(var6, var1);
        var1 = 0;
        var8 = var2[var1];
        var _closure2_slot1 = var8;
        var1 = 1;
        var2 = var2[var1];
        var _closure2_slot2 = var2;
        var1 = {};
        var6 = _closure1_slot4;
        var5 = var6.useMemo;
        var4 = new Array(2);
        var4[0] = var8;
        var4[1] = var7;
        var3 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure2_slot1;
                var1 = null;
                if(!var2) { _fun0005_ip = 8; continue _fun0005 }
case 9:
                var5 = _closure1_slot6;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 11;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.Provider;
                var2 = {};
                var7 = {};
                var10 = 'visible';
                var7['transitionState'] = var10;
                var10 = function close() {
                    var1 = undefined;
                    return var1;
                };
                var7['close'] = var10;
                var10 = function onLeave() {
                    var3 = _closure2_slot2;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var7['onLeave'] = var10;
                var8 = function registerDismissHandler() {
                    var1 = undefined;
                    return var1;
                };
                var7['registerDismissHandler'] = var8;
                var2['value'] = var7;
                var8 = _closure1_slot6;
                var7 = _closure1_slot7;
                var6 = {};
                var11 = _closure2_slot0;
                var12 = var6;
                var9 = copyDataProperties(var12, var11);
                var6 = var8.bind(var4)(var7, var6);
                var2['children'] = var6;
                var1 = var5.bind(var4)(var3, var2);
case 8:
                return var1;
            }
        };
        var3 = var5.bind(var6)(var3, var4);
        var1['appLauncherActionSheet'] = var3;
        var1['setAppLauncherActionSheetEnabled'] = var2;
        return var1;
    };
    var3['useAppLauncherActionSheet'] = var2;
    return var1;
})();