// app/modules/user_profile/hooks/usePersonalizedVoiceChannelUsers.tsx
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
    var4 = var4.Consents;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/usePersonalizedVoiceChannelUsers.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePersonalizedVoiceChannelUsers(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var9 = _closure1_slot1;
        var3 = 5;
        var7 = var9[var3];
        var4 = undefined;
        var11 = var5.bind(var4)(var7);
        var10 = var11.useStateFromStoresArray;
        var7 = _closure1_slot5;
        var8 = new Array(1);
        var8[0] = var7;
        var12 = var6.id;
        var7 = new Array(2);
        var7[0] = var12;
        var6 = var6.guild_id;
        var7[1] = var6;
        var6 = function() {
            var4 = _closure1_slot5;
            var3 = var4.getVoiceStatesForChannelAlt;
            var1 = _closure2_slot0;
            var2 = var1.id;
            var1 = var1.guild_id;
            var3 = var3.bind(var4)(var2, var1);
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.user;
                var1 = var1.id;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var10.bind(var11)(var8, var6, var7);
        var _closure2_slot1 = var6;
        var7 = var9[var3];
        var11 = var5.bind(var4)(var7);
        var10 = var11.useStateFromStores;
        var7 = _closure1_slot2;
        var8 = new Array(1);
        var8[0] = var7;
        var7 = function() {
            var2 = _closure1_slot2;
            var1 = var2.getUserAffinitiesMap;
            var1 = var1.bind(var2)();
            return var1;
        };
        var7 = var10.bind(var11)(var8, var7);
        var _closure2_slot2 = var7;
        var8 = var9[var3];
        var12 = var5.bind(var4)(var8);
        var11 = var12.useStateFromStores;
        var8 = _closure1_slot3;
        var10 = new Array(1);
        var10[0] = var8;
        var8 = function() {
            var3 = _closure1_slot3;
            var2 = var3.hasConsented;
            var1 = _closure1_slot6;
            var1 = var1.PERSONALIZATION;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var8 = var11.bind(var12)(var10, var8);
        var _closure2_slot3 = var8;
        var3 = var9[var3];
        var5 = var5.bind(var4)(var3);
        var4 = var5.useStateFromStoresArray;
        var2 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(3);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot3;
                var5 = _closure2_slot1;
                if(var2) { _fun0001_ip = 21; continue _fun0001 }
 16:
                var4 = var5;
                _fun0001_ip = 39; continue _fun0001;
 21:
                var3 = var5.sort;
                var2 = function(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var3 = _closure2_slot2;
                        var2 = var3.get;
                        var1 = arg2;
                        var1 = var2.bind(var3)(var1);
                        var4 = null;
                        var2 = var4 == var1;
                        var6 = undefined;
                        if(var2) { _fun0002_ip = 37; continue _fun0002 }
 31:
                        var6 = var1.vcProbability;
 37:
                        var7 = var4 != var6;
                        var1 = 0;
                        if(!var7) { _fun0002_ip = 49; continue _fun0002 }
 46:
                        var1 = var6;
 49:
                        var7 = _closure2_slot2;
                        var6 = var7.get;
                        var5 = arg1;
                        var5 = var6.bind(var7)(var5);
                        var6 = var4 == var5;
                        var3 = undefined;
                        if(var6) { _fun0002_ip = 81; continue _fun0002 }
 75:
                        var3 = var5.vcProbability;
 81:
                        var4 = var4 != var3;
                        var2 = 0;
                        if(!var4) { _fun0002_ip = 93; continue _fun0002 }
 90:
                        var2 = var3;
 93:
                        var1 = var1 - var2;
                        return var1;
                    }
                };
                var4 = var3.bind(var5)(var2);
 39:
                var3 = var4.map;
                var2 = function(arg1) {
                    var3 = _closure1_slot4;
                    var2 = var3.getUser;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.filter;
                var1 = function(arg1) {
                    var2 = null;
                    var1 = arg1;
                    var1 = var2 != var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();