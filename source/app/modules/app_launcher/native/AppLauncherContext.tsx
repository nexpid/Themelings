// app/modules/app_launcher/native/AppLauncherContext.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var9 = native2;
    var3 = native6;
    var10 = native7;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var4 = function useAppLauncherChatInputRefDummy(arg1) {
        var1 = arg1;
        var1 = var1.noop;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot2;
        var2 = var3.useRef;
        var1 = {};
        var5 = function getApplicationCommandManager() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot0;
                if(var1) { _fun0001_ip = 46; continue _fun0001 }
 10:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var4 = 'use useRequiredAppLauncherContext and provide a ChatInputRef';
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
 46:
                var1 = undefined;
                return var1;
            }
        };
        var1['getApplicationCommandManager'] = var5;
        var5 = function openCustomKeyboard() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = _closure2_slot0;
                if(var1) { _fun0002_ip = 46; continue _fun0002 }
 10:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var4 = 'use useRequiredAppLauncherContext and provide a ChatInputRef';
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
 46:
                var1 = undefined;
                return var1;
            }
        };
        var1['openCustomKeyboard'] = var5;
        var4 = function closeCustomKeyboard() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = _closure2_slot0;
                if(var1) { _fun0003_ip = 46; continue _fun0003 }
 10:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var4 = 'use useRequiredAppLauncherContext and provide a ChatInputRef';
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
 46:
                var1 = undefined;
                return var1;
            }
        };
        var1['closeCustomKeyboard'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var15 = 0;
    var6 = var10[var15];
    var5 = native4;
    var1 = undefined;
    var11 = var5.bind(var1)(var6);
    var _closure1_slot2 = var11;
    var7 = {};
    var7['DISMISSED'] = var15;
    var5 = 'DISMISSED';
    var7[var15] = var5;
    var14 = 1;
    var7['COMMAND'] = var14;
    var5 = 'COMMAND';
    var7[var14] = var5;
    var13 = 2;
    var7['ACTIVITY'] = var13;
    var5 = 'ACTIVITY';
    var7[var13] = var5;
    var8 = 3;
    var7['BACK'] = var8;
    var5 = 'BACK';
    var7[var8] = var5;
    var12 = 4;
    var7['OAUTH_MODAL'] = var12;
    var5 = 'OAUTH_MODAL';
    var7[var12] = var5;
    var _closure1_slot3 = var7;
    var6 = {};
    var6['GESTURE'] = var15;
    var5 = 'GESTURE';
    var6[var15] = var5;
    var6['KEYBOARD'] = var14;
    var5 = 'KEYBOARD';
    var6[var14] = var5;
    var6['APP_VIEW'] = var13;
    var5 = 'APP_VIEW';
    var6[var13] = var5;
    var6['COMMAND_VIEW'] = var8;
    var5 = 'COMMAND_VIEW';
    var6[var8] = var5;
    var6['OTHER'] = var12;
    var5 = 'OTHER';
    var6[var12] = var5;
    var5 = var11.createContext;
    var5 = var5.bind(var11)(var1);
    var _closure1_slot4 = var5;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/app_launcher/native/AppLauncherContext.tsx';
    var8 = var9.bind(var10)(var8);
    var3['AppLauncherKeyboardCloseReason'] = var7;
    var3['AppLauncherBottomSheetExpandReason'] = var6;
    var3['AppLauncherContext'] = var5;
    var3['useAppLauncherChatInputRefDummy'] = var4;
    var4 = function useRequiredAppLauncherContext() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = _closure1_slot2;
            var2 = var3.useContext;
            var1 = _closure1_slot4;
            var1 = var2.bind(var3)(var1);
            var2 = null;
            if(!(var2 != var1)) { _fun0004_ip = 30; continue _fun0004 }
 28:
            return var1;
 30:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = 'AppLauncherContext not found, must be used within AppLauncherNavigator';
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['useRequiredAppLauncherContext'] = var4;
    var2 = function useAppLauncherContext() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = _closure1_slot2;
            var4 = var5.useRef;
            var3 = _closure1_slot3;
            var3 = var3.DISMISSED;
            var3 = var4.bind(var5)(var3);
            var _closure2_slot0 = var3;
            var4 = _closure1_slot2;
            var3 = var4.useRef;
            var5 = undefined;
            var3 = var3.bind(var4)(var5);
            var _closure2_slot1 = var3;
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 1;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.AppLauncherEntrypoint;
            var7 = var3.TEXT;
            var _closure2_slot2 = var7;
            var3 = 2;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useDefaultAppLauncherWidth;
            var8 = var3.bind(var4)(var7);
            var _closure2_slot3 = var8;
            var4 = _closure1_slot5;
            var3 = {};
            var6 = false;
            var3['noop'] = var6;
            var6 = var4.bind(var5)(var3);
            var _closure2_slot4 = var6;
            var5 = _closure1_slot2;
            var4 = var5.useMemo;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot0;
                var1['keyboardCloseReasonRef'] = var3;
                var3 = _closure2_slot1;
                var1['bottomSheetExpandReasonRef'] = var3;
                var3 = _closure2_slot4;
                var1['chatInputRef'] = var3;
                var3 = _closure2_slot3;
                var1['width'] = var3;
                var2 = _closure2_slot2;
                var1['entrypoint'] = var2;
                var2 = undefined;
                var1['onActivityItemSelected'] = var2;
                return var1;
            };
            var1 = var4.bind(var5)(var1, var3);
            var4 = _closure1_slot2;
            var3 = var4.useContext;
            var2 = _closure1_slot4;
            var2 = var3.bind(var4)(var2);
            var3 = null;
            if(!(var3 != var2)) { _fun0005_ip = 204; continue _fun0005 }
 201:
            var1 = var2;
 204:
            return var1;
        }
    };
    var3['useAppLauncherContext'] = var2;
    return var1;
})();