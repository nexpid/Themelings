// app/modules/guild_member/useIsGuestOrLurker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isGuestOrLurkerInGuild(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var2 = arg3;
            var4 = arg4;
            var1 = var2.getGuild;
            var1 = var1.bind(var2)(var5);
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var1.features;
            var3 = var6.has;
            var1 = _closure1_slot4;
            var1 = var1.CONFERENCE;
            var2 = var3.bind(var6)(var1);
case 2:
            var1 = true;
            var1 = var1 !== var2;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var4.isGuestOrLurker;
            var2 = arg2;
            var1 = var3.bind(var4)(var5, var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
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
    var4 = var4.GuildFeatures;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member/useIsGuestOrLurker.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useIsGuestOrLurker(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var8 = _closure1_slot3;
        var3 = new Array(2);
        var3[0] = var8;
        var2 = _closure1_slot2;
        var3[1] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            var6 = _closure1_slot5;
            var10 = _closure2_slot0;
            var9 = _closure2_slot1;
            var8 = _closure1_slot3;
            var7 = _closure1_slot2;
            var11 = undefined;
            var1 = var11[var6](var10, var9, var8, var7, var6);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var2 = function isGuestOrLurkerInGuild(arg1, arg2) {
        var6 = _closure1_slot5;
        var8 = _closure1_slot3;
        var7 = _closure1_slot2;
        var11 = undefined;
        var10 = arg1;
        var9 = arg2;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        return var1;
    };
    var3['isGuestOrLurkerInGuild'] = var2;
    return var1;
})();