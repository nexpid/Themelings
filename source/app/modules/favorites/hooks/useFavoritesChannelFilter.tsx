// app/modules/favorites/hooks/useFavoritesChannelFilter.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
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
    var4 = var4.Permissions;
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/favorites/hooks/useFavoritesChannelFilter.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFavoritesChannelFilter() {
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var3 = 5;
        var3 = var7[var3];
        var4 = undefined;
        var5 = var6.bind(var4)(var3);
        var3 = var5.useFavoritesAccess;
        var3 = var3.bind(var5)();
        var5 = var3.hasHigherPrivileges;
        var _closure2_slot0 = var5;
        var3 = 6;
        var3 = var7[var3];
        var7 = var6.bind(var4)(var3);
        var6 = var7.useStateFromStores;
        var3 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getFavoriteChannels;
            var1 = var1.bind(var2)();
            return var1;
        };
        var6 = var6.bind(var7)(var4, var3);
        var _closure2_slot1 = var6;
        var4 = _closure1_slot2;
        var3 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = arg1;
                var4 = var1.type;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var5.bind(var6)(var3);
                var3 = var3.AutocompleterResultTypes;
                var3 = var3.USER;
                if(!(var3 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var5.bind(var6)(var3);
                var3 = var3.AutocompleterResultTypes;
                var3 = var3.GROUP_DM;
                if(!(var3 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var5.bind(var6)(var3);
                var3 = var3.AutocompleterResultTypes;
                var3 = var3.TEXT_CHANNEL;
                if(!(var3 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var5.bind(var6)(var3);
                var3 = var3.AutocompleterResultTypes;
                var3 = var3.VOICE_CHANNEL;
                if(!(var3 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 9;
                var3 = var5[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.assertNever;
                var3 = var3.bind(var4)(var1);
                return var3;
case 6:
                var7 = _closure1_slot4;
                var5 = var7.can;
                var3 = _closure1_slot6;
                var4 = var3.VIEW_CHANNEL;
                var3 = var1.record;
                var3 = var5.bind(var7)(var4, var3);
                if(!var3) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 8;
                var4 = var7[var4];
                var7 = var5.bind(var6)(var4);
                var6 = var7.canFavoriteChannelType;
                var5 = var1.record;
                var4 = _closure2_slot0;
                var3 = var6.bind(var7)(var5, var4);
case 9:
                if(!var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                var5 = _closure2_slot1;
                var4 = var1.record;
                var4 = var4.id;
                var5 = var5[var4];
                var4 = null;
                var3 = var4 == var5;
case 11:
                return var3;
case 4:
                var4 = _closure2_slot1;
                var3 = var1.record;
                var3 = var3.id;
                var4 = var4[var3];
                var3 = null;
                var3 = var3 == var4;
                return var3;
case 2:
                var3 = _closure1_slot3;
                var2 = var3.getDMChannelFromUserId;
                var1 = var1.record;
                var1 = var1.id;
                var3 = var2.bind(var3)(var1);
                var1 = arg2;
                var2 = !var1;
                if(!var2) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                var1 = null;
                var2 = var1 == var3;
case 13:
                var1 = !var2;
                if(var2) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                var4 = null;
                var2 = var4 == var3;
                if(var2) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                var5 = _closure2_slot1;
                var3 = var3.id;
                var3 = var5[var3];
                var2 = var4 == var3;
case 17:
                var1 = var2;
case 15:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();