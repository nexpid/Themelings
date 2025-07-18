// app/modules/user_settings/MFAUtils.tsx
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot5 = var7;
    var7 = var4.UserFlags;
    var _closure1_slot6 = var7;
    var4 = var4.Permissions;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/MFAUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getSMSBackupDisabledMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.hasAnyStaffLevel;
            var2 = var2.bind(var1)();
            if(var2) { _fun0001_ip = 119; continue _fun0001 }
 16:
            var4 = var1.hasFlag;
            var3 = _closure1_slot6;
            var3 = var3.PARTNER;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0001_ip = 119; continue _fun0001 }
 43:
            var3 = var1.email;
            var1 = null;
            var3 = var1 == var3;
            if(!var3) { _fun0001_ip = 117; continue _fun0001 }
 58:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 4;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.LfCBZG;
            var1 = var3.bind(var4)(var2);
 117:
            _fun0001_ip = 181; continue _fun0001;
 119:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 4;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Sq6Q1t;
            var1 = var3.bind(var4)(var2);
 181:
            return var1;
        }
    };
    var3['getSMSBackupDisabledMessage'] = var4;
    var2 = function use2FARemoveDisableReason() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot2;
        var2 = new Array(3);
        var2[0] = var5;
        var5 = _closure1_slot3;
        var2[1] = var5;
        var1 = _closure1_slot4;
        var2[2] = var1;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure1_slot4;
                var1 = var3.getCurrentUser;
                var4 = var1.bind(var3)();
                var1 = null;
                if(!(var1 != var4)) { _fun0002_ip = 35; continue _fun0002 }
 22:
                var3 = var4.hasAnyStaffLevel;
                var3 = var3.bind(var4)();
                if(var3) { _fun0002_ip = 135; continue _fun0002 }
 35:
                var4 = _closure1_slot2;
                var3 = var4.getGuildsArray;
                var5 = var3.bind(var4)();
                var4 = var5.some;
                var3 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var5 = arg1;
                        var4 = var5.features;
                        var3 = var4.has;
                        var1 = _closure1_slot5;
                        var1 = var1.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
                        var1 = var3.bind(var4)(var1);
                        if(!var1) { _fun0003_ip = 61; continue _fun0003 }
 35:
                        var4 = _closure1_slot3;
                        var3 = var4.can;
                        var2 = _closure1_slot7;
                        var2 = var2.ADMINISTRATOR;
                        var1 = var3.bind(var4)(var2, var5);
 61:
                        return var1;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var1 = null;
                if(!var3) { _fun0002_ip = 133; continue _fun0002 }
 74:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 4;
                var4 = var8[var3];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.HC8uSU;
                var1 = var4.bind(var5)(var3);
 133:
                _fun0002_ip = 194; continue _fun0002;
 135:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 4;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.3iKih4;
                var1 = var3.bind(var4)(var2);
 194:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['use2FARemoveDisableReason'] = var2;
    return var1;
})();