// app/modules/opt_in_channels/isOptInEnabled.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
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
                if(var7) { _fun0001_ip = 76; continue _fun0001 }
 50:
                var8 = var2.features;
                var7 = var8.has;
                var2 = _closure1_slot6;
                var2 = var2.COMMUNITY;
                var6 = var7.bind(var8)(var2);
 76:
                var2 = var3 != var6;
                if(!var2) { _fun0001_ip = 86; continue _fun0001 }
 83:
                var2 = var6;
 86:
                var6 = _closure1_slot5;
                var5 = var6.getCurrentUser;
                var6 = var5.bind(var6)();
                var5 = var3 == var6;
                var4 = undefined;
                if(var5) { _fun0001_ip = 118; continue _fun0001 }
 108:
                var5 = var6.isStaff;
                var4 = var5.bind(var6)();
 118:
                var3 = var3 != var4;
                if(!var3) { _fun0001_ip = 128; continue _fun0001 }
 125:
                var3 = var4;
 128:
                if(!var1) { _fun0001_ip = 140; continue _fun0001 }
 131:
                if(var2) { _fun0001_ip = 137; continue _fun0001 }
 134:
                var2 = var3;
 137:
                var1 = var2;
 140:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useOptInEnabledForGuild'] = var4;
    var4 = function isOptInEnabledForGuild(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var2 = _closure1_slot2;
            var1 = var2.getGuild;
            var2 = var1.bind(var2)(var5);
            var4 = _closure1_slot5;
            var1 = var4.getCurrentUser;
            var6 = var1.bind(var4)();
            var4 = null;
            var1 = var4 != var5;
            if(!var1) { _fun0002_ip = 46; continue _fun0002 }
 42:
            var1 = var4 != var2;
 46:
            if(!var1) { _fun0002_ip = 53; continue _fun0002 }
 49:
            var1 = var4 != var6;
 53:
            if(!var1) { _fun0002_ip = 116; continue _fun0002 }
 56:
            var7 = var2.features;
            var4 = var7.has;
            var2 = _closure1_slot6;
            var2 = var2.COMMUNITY;
            var2 = var4.bind(var7)(var2);
            if(var2) { _fun0002_ip = 95; continue _fun0002 }
 85:
            var4 = var6.isStaff;
            var2 = var4.bind(var6)();
 95:
            if(!var2) { _fun0002_ip = 113; continue _fun0002 }
 98:
            var4 = _closure1_slot4;
            var3 = var4.isOptInEnabled;
            var2 = var3.bind(var4)(var5);
 113:
            var1 = var2;
 116:
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
 0:
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
                if(var7) { _fun0003_ip = 105; continue _fun0003 }
 79:
                var8 = var5.features;
                var7 = var8.has;
                var2 = _closure1_slot6;
                var2 = var2.GUILD_ONBOARDING_EVER_ENABLED;
                var6 = var7.bind(var8)(var2);
 105:
                var2 = var1 != var6;
                if(!var2) { _fun0003_ip = 115; continue _fun0003 }
 112:
                var2 = var6;
 115:
                var1 = var1 != var5;
                if(!var1) { _fun0003_ip = 125; continue _fun0003 }
 122:
                var1 = var4;
 125:
                if(!var1) { _fun0003_ip = 131; continue _fun0003 }
 128:
                var1 = var3;
 131:
                if(!var1) { _fun0003_ip = 137; continue _fun0003 }
 134:
                var1 = !var2;
 137:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useShouldShowOnboardingAdminUpsellForGuild'] = var2;
    return var1;
})();