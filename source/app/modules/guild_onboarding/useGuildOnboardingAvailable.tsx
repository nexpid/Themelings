// app/modules/guild_onboarding/useGuildOnboardingAvailable.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
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
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/useGuildOnboardingAvailable.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useGuildOnboardingAvailable(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 2;
            var5 = var5[var2];
            var2 = undefined;
            var7 = var6.bind(var2)(var5);
            var6 = var7.useStateFromStores;
            var8 = _closure1_slot2;
            var5 = new Array(1);
            var5[0] = var8;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var3 = null;
                    var4 = var3 == var2;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure2_slot0;
                    var2 = var4.id;
case 2:
                    if(!(var3 != var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure1_slot2;
                    var3 = var4.isFullServerPreview;
                    var2 = _closure2_slot0;
                    var1 = var2.id;
                    var1 = var3.bind(var4)(var1);
                    var3 = var4.isOnboardingEnabled;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = var2;
case 6:
                    return var1;
case 4:
                    var1 = false;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var5, var1);
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = null;
            var5 = var5 == var4;
            var2 = undefined;
            if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var4.features;
            var4 = var5.has;
            var3 = _closure1_slot3;
            var3 = var3.GUILD_ONBOARDING_HAS_PROMPTS;
            var2 = var4.bind(var5)(var3);
case 10:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function isGuildOnboardingAvailable(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var6 = _closure1_slot2;
            var4 = var6.isFullServerPreview;
            var1 = var3.id;
            var1 = var4.bind(var6)(var1);
            var5 = var6.isOnboardingEnabled;
            var4 = var3.id;
            var4 = var5.bind(var6)(var4);
            if(!var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var1 = var4;
case 14:
            if(var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var4 = var3.features;
            var3 = var4.has;
            var2 = _closure1_slot3;
            var2 = var2.GUILD_ONBOARDING_HAS_PROMPTS;
            var1 = var3.bind(var4)(var2);
case 16:
            return var1;
case 12:
            var1 = false;
            return var1;
        }
    };
    var3['isGuildOnboardingAvailable'] = var2;
    return var1;
})();