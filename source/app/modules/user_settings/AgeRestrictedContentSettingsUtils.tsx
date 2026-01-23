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
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/AgeRestrictedContentSettingsUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['resolveNsfwTogglesWithDefaults'] = var4;
    var4 = function() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 1;
            var1 = var9[var1];
            var6 = undefined;
            var1 = var8.bind(var6)(var1);
            var3 = var1.ViewNsfwCommands;
            var1 = var3.useSetting;
            var5 = var1.bind(var3)();
            var1 = 2;
            var1 = var9[var1];
            var3 = var8.bind(var6)(var1);
            var1 = var3.useIsAgeVerified;
            var4 = var1.bind(var3)();
            var1 = 3;
            var1 = var9[var1];
            var3 = var8.bind(var6)(var1);
            var1 = var3.useNSFWAllowed;
            var3 = var1.bind(var3)();
            var1 = 4;
            var1 = var9[var1];
            var10 = var8.bind(var6)(var1);
            var7 = var10.useIsFeatureAgeGated;
            var1 = 5;
            var1 = var9[var1];
            var1 = var8.bind(var6)(var1);
            var1 = var1.AgeGatedFeature;
            var1 = var1.COMMANDS_TOGGLE;
            var7 = var7.bind(var10)(var1);
            var1 = 6;
            var1 = var9[var1];
            var9 = var8.bind(var6)(var1);
            var8 = var9.useIsGidgetPawtectEnabled;
            var1 = 'useViewNsfwCommandsOrDefault';
            var1 = var8.bind(var9)(var1);
            var2 = _closure1_slot3;
            if(var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = var7;
case 10:
            var15 = undefined;
            var14 = var5;
            var13 = var1;
            var12 = var3;
            var11 = var4;
            var1 = var15[var2](var14, var13, var12, var11, var10);
            return var1;
        }
    };
    var3['useViewNsfwCommandsOrDefault'] = var4;
    var4 = function() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 1;
            var1 = var9[var1];
            var6 = undefined;
            var1 = var8.bind(var6)(var1);
            var3 = var1.ViewNsfwGuilds;
            var1 = var3.useSetting;
            var5 = var1.bind(var3)();
            var1 = 2;
            var1 = var9[var1];
            var3 = var8.bind(var6)(var1);
            var1 = var3.useIsAgeVerified;
            var4 = var1.bind(var3)();
            var1 = 3;
            var1 = var9[var1];
            var3 = var8.bind(var6)(var1);
            var1 = var3.useNSFWAllowed;
            var3 = var1.bind(var3)();
            var1 = 4;
            var1 = var9[var1];
            var10 = var8.bind(var6)(var1);
            var7 = var10.useIsFeatureAgeGated;
            var1 = 5;
            var1 = var9[var1];
            var1 = var8.bind(var6)(var1);
            var1 = var1.AgeGatedFeature;
            var1 = var1.COMMANDS_TOGGLE;
            var7 = var7.bind(var10)(var1);
            var1 = 6;
            var1 = var9[var1];
            var9 = var8.bind(var6)(var1);
            var8 = var9.useIsGidgetPawtectEnabled;
            var1 = 'useViewNsfwGuildsOrDefault';
            var1 = var8.bind(var9)(var1);
            var2 = _closure1_slot3;
            if(var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var1 = var7;
case 12:
            var15 = undefined;
            var14 = var5;
            var13 = var1;
            var12 = var3;
            var11 = var4;
            var1 = var15[var2](var14, var13, var12, var11, var10);
            return var1;
        }
    };
    var3['useViewNsfwGuildsOrDefault'] = var4;
    var4 = function() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 1;
            var1 = var9[var1];
            var6 = undefined;
            var1 = var8.bind(var6)(var1);
            var2 = var1.ViewNsfwCommands;
            var1 = var2.getSetting;
            var5 = var1.bind(var2)();
            var1 = 2;
            var1 = var9[var1];
            var2 = var8.bind(var6)(var1);
            var1 = var2.isAgeVerified;
            var4 = var1.bind(var2)();
            var2 = _closure1_slot2;
            var1 = var2.getCurrentUser;
            var7 = var1.bind(var2)();
            var1 = 4;
            var1 = var9[var1];
            var10 = var8.bind(var6)(var1);
            var2 = var10.isFeatureAgeGated;
            var1 = 5;
            var1 = var9[var1];
            var1 = var8.bind(var6)(var1);
            var1 = var1.AgeGatedFeature;
            var1 = var1.COMMANDS_TOGGLE;
            var1 = var2.bind(var10)(var1);
            var2 = 6;
            var2 = var9[var2];
            var9 = var8.bind(var6)(var2);
            var8 = var9.getIsGidgetPawtectEnabled;
            var2 = 'getViewNsfwCommandsOrDefault';
            var2 = var8.bind(var9)(var2);
            var3 = _closure1_slot3;
            if(var2) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var2 = var1;
case 14:
            var1 = null;
            var8 = var1 == var7;
            var1 = undefined;
            if(var8) { _fun0004_ip = 16; continue _fun0004 }
case 12:
            var1 = var7.nsfwAllowed;
case 16:
            var15 = undefined;
            var14 = var5;
            var13 = var2;
            var12 = var1;
            var11 = var4;
            var1 = var15[var3](var14, var13, var12, var11, var10);
            return var1;
        }
    };
    var3['getViewNsfwCommandsOrDefault'] = var4;
    var2 = function() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 1;
            var1 = var9[var1];
            var6 = undefined;
            var1 = var8.bind(var6)(var1);
            var2 = var1.ViewNsfwGuilds;
            var1 = var2.getSetting;
            var5 = var1.bind(var2)();
            var1 = 2;
            var1 = var9[var1];
            var2 = var8.bind(var6)(var1);
            var1 = var2.isAgeVerified;
            var4 = var1.bind(var2)();
            var2 = _closure1_slot2;
            var1 = var2.getCurrentUser;
            var7 = var1.bind(var2)();
            var1 = 4;
            var1 = var9[var1];
            var10 = var8.bind(var6)(var1);
            var2 = var10.isFeatureAgeGated;
            var1 = 5;
            var1 = var9[var1];
            var1 = var8.bind(var6)(var1);
            var1 = var1.AgeGatedFeature;
            var1 = var1.COMMANDS_TOGGLE;
            var1 = var2.bind(var10)(var1);
            var2 = 6;
            var2 = var9[var2];
            var9 = var8.bind(var6)(var2);
            var8 = var9.getIsGidgetPawtectEnabled;
            var2 = 'getViewNsfwGuildsOrDefault';
            var2 = var8.bind(var9)(var2);
            var3 = _closure1_slot3;
            if(var2) { _fun0005_ip = 14; continue _fun0005 }
case 15:
            var2 = var1;
case 14:
            var1 = null;
            var8 = var1 == var7;
            var1 = undefined;
            if(var8) { _fun0005_ip = 16; continue _fun0005 }
case 12:
            var1 = var7.nsfwAllowed;
case 16:
            var15 = undefined;
            var14 = var5;
            var13 = var2;
            var12 = var1;
            var11 = var4;
            var1 = var15[var3](var14, var13, var12, var11, var10);
            return var1;
        }
    };
    var3['getViewNsfwGuildsOrDefault'] = var2;
    return var1;
})();