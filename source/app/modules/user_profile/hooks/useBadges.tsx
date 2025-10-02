// app/modules/user_profile/hooks/useBadges.tsx
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
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/useBadges.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useBadges(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = arg2;
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 2;
            var4 = var6[var4];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var7 = var4.LegacyUsernameDisabled;
            var4 = var7.useSetting;
            var4 = var4.bind(var7)();
            if(!(var6 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var3;
case 2:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 3;
            var7 = var9[var3];
            var12 = var8.bind(var6)(var7);
            var11 = var12.useStateFromStores;
            var7 = _closure1_slot3;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var11.bind(var12)(var10, var7);
            var3 = var9[var3];
            var9 = var8.bind(var6)(var3);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot2;
                var1 = var1.hidePersonalInformation;
                return var1;
            };
            var3 = var8.bind(var9)(var3, var1);
            var1 = null;
            if(!(var1 != var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var1 == var5;
            var6 = undefined;
            if(var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var5.getBadges;
            var6 = var8.bind(var5)();
case 6:
            if(!(var1 == var6)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = new Array(0);
case 8:
            var1 = var1 != var7;
            if(!var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var7.id;
            var5 = var5.userId;
            var1 = var7 === var5;
case 10:
            if(!var1) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = var4;
case 12:
            var4 = var6;
            if(!var1) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = var6.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = 'legacy_username';
                var1 = var2 !== var1;
                return var1;
            };
            var4 = var5.bind(var6)(var1);
case 14:
            var1 = var4;
            if(!var3) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var1 = {};
                    var10 = var1;
                    var9 = var2;
                    var3 = copyDataProperties(var10, var9);
                    var4 = var2.id;
                    var3 = 'legacy_username';
                    if(!(var4 !== var3)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var3 = var2.description;
                    _fun0002_ip = 20; continue _fun0002;
case 18:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 4;
                    var4 = var8[var2];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var2 = var8[var2];
                    var2 = var7.bind(var6)(var2);
                    var2 = var2.t;
                    var2 = var2.Br1ls7;
                    var3 = var4.bind(var5)(var2);
case 20:
                    var2 = 'description';
                    var1[var2] = var3;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 16:
            return var1;
case 4:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['default'] = var2;
    var2 = 'quest_completed';
    var3['QUEST_COMPLETED_BADGE'] = var2;
    return var1;
})();