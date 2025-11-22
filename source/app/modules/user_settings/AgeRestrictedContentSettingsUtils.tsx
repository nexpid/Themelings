// app/modules/user_settings/AgeRestrictedContentSettingsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var4 = function resolveNsfwTogglesWithDefaults(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = arg2;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = arg4;
            var1 = !var2;
case 2:
            var1 = !var1;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = false;
            var2 = arg3;
            var2 = var3 !== var2;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = null;
            var3 = var3 != var4;
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var4;
case 8:
            var2 = var3;
case 6:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot3 = var4;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/AgeRestrictedContentSettingsUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['resolveNsfwTogglesWithDefaults'] = var4;
    var4 = function() {
        var7 = _closure1_slot0;
        var8 = _closure1_slot1;
        var2 = 1;
        var2 = var8[var2];
        var6 = undefined;
        var2 = var7.bind(var6)(var2);
        var3 = var2.ViewNsfwCommands;
        var2 = var3.useSetting;
        var5 = var2.bind(var3)();
        var2 = 2;
        var2 = var8[var2];
        var3 = var7.bind(var6)(var2);
        var2 = var3.useIsAgeVerified;
        var9 = var2.bind(var3)();
        var2 = 3;
        var2 = var8[var2];
        var3 = var7.bind(var6)(var2);
        var2 = var3.useNSFWAllowed;
        var10 = var2.bind(var3)();
        var2 = 4;
        var2 = var8[var2];
        var8 = var7.bind(var6)(var2);
        var7 = var8.useIsAgeVerificationCommandsTogglesEnabled;
        var2 = 'useViewNsfwCommandsOrDefault';
        var11 = var7.bind(var8)(var2);
        var1 = _closure1_slot3;
        var13 = undefined;
        var12 = var5;
        var1 = var13[var1](var12, var11, var10, var9, var8);
        return var1;
    };
    var3['useViewNsfwCommandsOrDefault'] = var4;
    var4 = function() {
        var7 = _closure1_slot0;
        var8 = _closure1_slot1;
        var2 = 1;
        var2 = var8[var2];
        var6 = undefined;
        var2 = var7.bind(var6)(var2);
        var3 = var2.ViewNsfwGuilds;
        var2 = var3.useSetting;
        var5 = var2.bind(var3)();
        var2 = 2;
        var2 = var8[var2];
        var3 = var7.bind(var6)(var2);
        var2 = var3.useIsAgeVerified;
        var9 = var2.bind(var3)();
        var2 = 3;
        var2 = var8[var2];
        var3 = var7.bind(var6)(var2);
        var2 = var3.useNSFWAllowed;
        var10 = var2.bind(var3)();
        var2 = 4;
        var2 = var8[var2];
        var8 = var7.bind(var6)(var2);
        var7 = var8.useIsAgeVerificationCommandsTogglesEnabled;
        var2 = 'useViewNsfwGuildsOrDefault';
        var11 = var7.bind(var8)(var2);
        var1 = _closure1_slot3;
        var13 = undefined;
        var12 = var5;
        var1 = var13[var1](var12, var11, var10, var9, var8);
        return var1;
    };
    var3['useViewNsfwGuildsOrDefault'] = var4;
    var4 = function() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 1;
            var2 = var8[var2];
            var6 = undefined;
            var2 = var3.bind(var6)(var2);
            var4 = var2.ViewNsfwCommands;
            var2 = var4.getSetting;
            var5 = var2.bind(var4)();
            var2 = 2;
            var2 = var8[var2];
            var4 = var3.bind(var6)(var2);
            var2 = var4.isAgeVerified;
            var4 = var2.bind(var4)();
            var7 = _closure1_slot2;
            var2 = var7.getCurrentUser;
            var7 = var2.bind(var7)();
            var2 = 4;
            var2 = var8[var2];
            var8 = var3.bind(var6)(var2);
            var3 = var8.isAgeVerificationCommandsTogglesEnabled;
            var2 = 'getViewNsfwCommandsOrDefault';
            var3 = var3.bind(var8)(var2);
            var2 = _closure1_slot3;
            var1 = null;
            var8 = var1 == var7;
            var1 = undefined;
            if(var8) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = var7.nsfwAllowed;
case 10:
            var13 = undefined;
            var12 = var5;
            var11 = var3;
            var10 = var1;
            var9 = var4;
            var1 = var13[var2](var12, var11, var10, var9, var8);
            return var1;
        }
    };
    var3['getViewNsfwCommandsOrDefault'] = var4;
    var2 = function() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 1;
            var2 = var8[var2];
            var6 = undefined;
            var2 = var3.bind(var6)(var2);
            var4 = var2.ViewNsfwGuilds;
            var2 = var4.getSetting;
            var5 = var2.bind(var4)();
            var2 = 2;
            var2 = var8[var2];
            var4 = var3.bind(var6)(var2);
            var2 = var4.isAgeVerified;
            var4 = var2.bind(var4)();
            var7 = _closure1_slot2;
            var2 = var7.getCurrentUser;
            var7 = var2.bind(var7)();
            var2 = 4;
            var2 = var8[var2];
            var8 = var3.bind(var6)(var2);
            var3 = var8.isAgeVerificationCommandsTogglesEnabled;
            var2 = 'getViewNsfwGuildsOrDefault';
            var3 = var3.bind(var8)(var2);
            var2 = _closure1_slot3;
            var1 = null;
            var8 = var1 == var7;
            var1 = undefined;
            if(var8) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var1 = var7.nsfwAllowed;
case 10:
            var13 = undefined;
            var12 = var5;
            var11 = var3;
            var10 = var1;
            var9 = var4;
            var1 = var13[var2](var12, var11, var10, var9, var8);
            return var1;
        }
    };
    var3['getViewNsfwGuildsOrDefault'] = var2;
    return var1;
})();