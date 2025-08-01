// app/modules/guild_tag/useUserAvailableGuildsWithTags.tsx
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_tag/useUserAvailableGuildsWithTags.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useUserAvailableGuildsWithTags() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresArray;
        var5 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var5;
        var1 = _closure1_slot2;
        var2[1] = var1;
        var1 = function() {
            var2 = _closure1_slot3;
            var1 = var2.getGuildsArray;
            var3 = var1.bind(var2)();
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var3 = arg1;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 3;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var1);
                    var1 = var5.guildSupportsTags;
                    var1 = var1.bind(var5)(var3);
                    if(!var1) { _fun0001_ip = 83; continue _fun0001 }
 42:
                    var6 = _closure1_slot2;
                    var5 = var6.getSelfMember;
                    var4 = var3.id;
                    var6 = var5.bind(var6)(var4);
                    var5 = null;
                    var7 = var5 == var6;
                    var4 = undefined;
                    if(var7) { _fun0001_ip = 79; continue _fun0001 }
 73:
                    var4 = var6.joinedAt;
 79:
                    var1 = var5 != var4;
 83:
                    if(!var1) { _fun0001_ip = 112; continue _fun0001 }
 86:
                    var4 = var3.profile;
                    var3 = null;
                    var5 = var3 == var4;
                    var2 = undefined;
                    if(var5) { _fun0001_ip = 108; continue _fun0001 }
 103:
                    var2 = var4.tag;
 108:
                    var1 = var3 != var2;
 112:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useUserAvailableGuildsWithTags'] = var2;
    return var1;
})();