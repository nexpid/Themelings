// app/modules/opt_in_channels/isOptInEnabled.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot6 = var7;
    var4 = var4.Permissions;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/opt_in_channels/isOptInEnabled.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useOptInEnabledForGuild(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot4;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = _closure1_slot2;
        var2[1] = var6;
        var5 = _closure1_slot5;
        var2[2] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure1_slot4;
                var1 = var2.isOptInEnabled;
                var4 = _closure2_slot0;
                var1 = var1.bind(var2)(var4);
                var3 = _closure1_slot2;
                var2 = var3.getGuild;
                var2 = var2.bind(var3)(var4);
                var3 = null;
                var7 = var3 == var2;
                var6 = undefined;
                if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var8 = var2.features;
                var7 = var8.has;
                var2 = _closure1_slot6;
                var2 = var2.COMMUNITY;
                var6 = var7.bind(var8)(var2);
case 2:
                var2 = var3 != var6;
                if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = var6;
case 4:
                var6 = _closure1_slot5;
                var5 = var6.getCurrentUser;
                var6 = var5.bind(var6)();
                var5 = var3 == var6;
                var4 = undefined;
                if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var5 = var6.isStaff;
                var4 = var5.bind(var6)();
case 6:
                var3 = var3 != var4;
                if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var3 = var4;
case 8:
                if(!var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                var2 = var3;
case 12:
                var1 = var2;
case 10:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useOptInEnabledForGuild'] = var4;
    var4 = function isOptInEnabledForGuild(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot2;
            var1 = var2.getGuild;
            var2 = var1.bind(var2)(var5);
            var4 = _closure1_slot5;
            var1 = var4.getCurrentUser;
            var6 = var1.bind(var4)();
            var4 = null;
            var1 = var4 != var5;
            if(!var1) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var1 = var4 != var2;
case 14:
            if(!var1) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var1 = var4 != var6;
case 16:
            if(!var1) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var2.features;
            var4 = var7.has;
            var2 = _closure1_slot6;
            var2 = var2.COMMUNITY;
            var2 = var4.bind(var7)(var2);
            if(var2) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var4 = var6.isStaff;
            var2 = var4.bind(var6)();
case 20:
            if(!var2) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var4 = _closure1_slot4;
            var3 = var4.isOptInEnabled;
            var2 = var3.bind(var4)(var5);
case 22:
            var1 = var2;
case 18:
            return var1;
        }
    };
    var3['isOptInEnabledForGuild'] = var4;
    var2 = function useShouldShowOnboardingAdminUpsellForGuild(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot2;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot3;
        var2[1] = var5;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = _closure1_slot2;
                var3 = var4.getGuild;
                var1 = _closure2_slot0;
                var5 = var3.bind(var4)(var1);
                var6 = _closure1_slot3;
                var4 = var6.can;
                var1 = _closure1_slot7;
                var3 = var1.MANAGE_GUILD;
                var4 = var4.bind(var6)(var3, var5);
                var3 = var6.can;
                var1 = var1.MANAGE_ROLES;
                var3 = var3.bind(var6)(var1, var5);
                var1 = null;
                var7 = var1 == var5;
                var6 = undefined;
                if(var7) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                var8 = var5.features;
                var7 = var8.has;
                var2 = _closure1_slot6;
                var2 = var2.GUILD_ONBOARDING_EVER_ENABLED;
                var6 = var7.bind(var8)(var2);
case 24:
                var2 = var1 != var6;
                if(!var2) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                var2 = var6;
case 26:
                var1 = var1 != var5;
                if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 28:
                var1 = var4;
case 9:
                if(!var1) { _fun0003_ip = 11; continue _fun0003 }
case 8:
                var1 = var3;
case 11:
                if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var1 = !var2;
case 12:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useShouldShowOnboardingAdminUpsellForGuild'] = var2;
    return var1;
})();