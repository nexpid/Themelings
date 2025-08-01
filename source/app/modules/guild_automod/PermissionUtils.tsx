// app/modules/guild_automod/PermissionUtils.tsx
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot4 = var7;
    var4 = var4.Permissions;
    var _closure1_slot5 = var4;
    var4 = function getHasAutomodAccess(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arguments[1];
            var5 = arguments[2];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0001_ip = 19; continue _fun0001 }
 12:
            var3 = _closure1_slot2;
 19:
            if(!(var5 === var1)) { _fun0001_ip = 30; continue _fun0001 }
 23:
            var5 = _closure1_slot3;
 30:
            var2 = var3.getGuild;
            var1 = arg1;
            var4 = var2.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0001_ip = 77; continue _fun0001 }
 52:
            var3 = var5.can;
            var2 = _closure1_slot5;
            var2 = var2.MANAGE_GUILD;
            var1 = var3.bind(var5)(var2, var4);
 77:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_automod/PermissionUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function canCurrentUserManageMessageFilters(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0002_ip = 26; continue _fun0002 }
 12:
            var3 = _closure1_slot6;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
 26:
            return var1;
        }
    };
    var3['canCurrentUserManageMessageFilters'] = var4;
    var4 = function canCurrentUserManageAutomod(arg1) {
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['canCurrentUserManageAutomod'] = var4;
    var4 = function useCanCurrentUserManageAutomod(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot2;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot3;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var5 = _closure1_slot6;
            var4 = _closure2_slot0;
            var3 = _closure1_slot2;
            var2 = _closure1_slot3;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useCanCurrentUserManageAutomod'] = var4;
    var2 = function useIsUserProfileRuleEnabled(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = _closure1_slot2;
                var3 = var4.getGuild;
                var1 = _closure2_slot0;
                var3 = var3.bind(var4)(var1);
                var1 = null;
                var4 = var1 == var3;
                var1 = undefined;
                if(var4) { _fun0003_ip = 61; continue _fun0003 }
 35:
                var4 = var3.features;
                var3 = var4.has;
                var2 = _closure1_slot4;
                var2 = var2.COMMUNITY;
                var1 = var3.bind(var4)(var2);
 61:
                if(var1) { _fun0003_ip = 66; continue _fun0003 }
 64:
                var1 = false;
 66:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useIsUserProfileRuleEnabled'] = var2;
    return var1;
})();