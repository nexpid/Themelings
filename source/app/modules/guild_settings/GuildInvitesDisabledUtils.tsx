// app/modules/guild_settings/GuildInvitesDisabledUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var9 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function useInvitesDisabledPermission(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0001_ip = 49; continue _fun0001 }
 16:
                var5 = _closure1_slot3;
                var4 = var5.can;
                var3 = _closure1_slot5;
                var3 = var3.MANAGE_GUILD;
                var2 = _closure2_slot0;
                var1 = var4.bind(var5)(var3, var2);
 49:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var _closure1_slot6 = var5;
    var4 = function useInvitesDisabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var7 = var4.bind(var2)(var3);
            var4 = var7.useStateFromStores;
            var8 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0003_ip = 43; continue _fun0003 }
 16:
                    var4 = _closure1_slot2;
                    var3 = var4.getGuildIncident;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 43:
                    return var1;
                }
            };
            var4 = var4.bind(var7)(var3, var1);
            var3 = null;
            var7 = var3 == var6;
            var1 = undefined;
            if(var7) { _fun0002_ip = 101; continue _fun0002 }
 75:
            var7 = var6.features;
            var6 = var7.has;
            var5 = _closure1_slot4;
            var5 = var5.INVITES_DISABLED;
            var1 = var6.bind(var7)(var5);
 101:
            if(var1) { _fun0002_ip = 193; continue _fun0002 }
 104:
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0002_ip = 119; continue _fun0002 }
 113:
            var2 = var4.invitesDisabledUntil;
 119:
            var2 = var3 != var2;
            if(!var2) { _fun0002_ip = 190; continue _fun0002 }
 126:
            var3 = global;
            var6 = var3.Date;
            var10 = var4.invitesDisabledUntil;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var11 = var5;
            var4 = new var11[var6](var10, var9);
            var4 = var4 instanceof Object ? var4 : var5;
            var3 = var3.Date;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var11 = var5;
            var3 = new var11[var3](var10);
            var3 = var3 instanceof Object ? var3 : var5;
            var2 = var4 > var3;
 190:
            var1 = var2;
 193:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.GuildFeatures;
    var _closure1_slot4 = var9;
    var6 = var6.Permissions;
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_settings/GuildInvitesDisabledUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['useInvitesDisabledPermission'] = var5;
    var3['useInvitesDisabled'] = var4;
    var2 = function useShouldShowInvitesDisabledNotif(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = _closure1_slot6;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            var2 = _closure1_slot7;
            var2 = var2.bind(var3)(var4);
            if(!var1) { _fun0004_ip = 32; continue _fun0004 }
 29:
            var1 = var2;
 32:
            return var1;
        }
    };
    var3['useShouldShowInvitesDisabledNotif'] = var2;
    return var1;
})();