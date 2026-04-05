// app/modules/guild_role_subscriptions/feature_gating/IAPEligibility.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function compareVersions(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.split;
            var4 = '.';
            var5 = var1.bind(var2)(var4);
            var3 = var5.map;
            var1 = global;
            var2 = var1.Number;
            var6 = var3.bind(var5)(var2);
            var3 = '13.2';
            var2 = var3.split;
            var4 = var2.bind(var3)(var4);
            var3 = var4.map;
            var2 = var1.Number;
            var5 = var3.bind(var4)(var2);
            var4 = var1.Math;
            var3 = var4.max;
            var2 = var6.length;
            var1 = var5.length;
            var4 = var3.bind(var4)(var2, var1);
            var1 = 0;
            var7 = var1 < var4;
            var3 = null;
            var2 = 0;
            if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var6[var2];
            var9 = var3 != var7;
            var8 = 0;
            if(!var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var7;
case 4:
            var9 = var5[var2];
            var10 = var3 != var9;
            var7 = 0;
            if(!var10) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var9;
case 6:
            if(!(!(var8 < var7))) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            if(!(!(var8 > var7))) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var2 + 1;
            if(var2 < var4) { _fun0001_ip = 3; continue _fun0001 }
case 2:
            return var1;
case 10:
            var1 = 1;
            return var1;
case 8:
            var1 = -1;
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var7 = var4.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
    var4 = new Array(1);
    var4[0] = var7;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/feature_gating/IAPEligibility.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function canUseRoleSubscriptionIAP(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 3;
            var1 = var5[var1];
            var7 = undefined;
            var4 = var4.bind(var7)(var1);
            var1 = var4.isIOS;
            var1 = var1.bind(var4)();
            if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var1 = false;
            return var1;
case 12:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 4;
            var1 = var5[var1];
            var4 = var4.bind(var7)(var1);
            var1 = var4.getSystemVersion;
            var6 = var1.bind(var4)();
            var4 = null;
            if(!(var4 != var6)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var5 = _closure1_slot5;
            var1 = '13.2';
            var5 = var5.bind(var7)(var6, var1);
            var1 = -1;
            if(!(var1 !== var5)) { _fun0002_ip = 14; continue _fun0002 }
case 16:
            var6 = _closure1_slot3;
            var5 = var6.getGuild;
            var1 = arg1;
            var1 = var5.bind(var6)(var1);
            var _closure2_slot0 = var1;
            var1 = var4 != var1;
            if(!var1) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var4 = _closure1_slot4;
            var3 = var4.every;
            var2 = function(arg1) {
                var1 = _closure2_slot0;
                var3 = var1.features;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var1 = !var2;
case 17:
            return var1;
case 14:
            var1 = false;
            return var1;
        }
    };
    var3['canUseRoleSubscriptionIAP'] = var4;
    var2 = function useCanUseRoleSubscriptionIAP(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var7 = _closure1_slot2;
            var5 = var7.useMemo;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 4;
                    var1 = var4[var1];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var1);
                    var1 = var3.getSystemVersion;
                    var4 = var1.bind(var3)();
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0004_ip = 19; continue _fun0004 }
case 12:
                    var3 = _closure1_slot5;
                    var2 = '13.2';
                    var3 = var3.bind(var5)(var4, var2);
                    var2 = 0;
                    var1 = var3 >= var2;
case 19:
                    return var1;
                }
            };
            var1 = new Array(0);
            var2 = var5.bind(var7)(var2, var1);
            var6 = var7.useMemo;
            var5 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.isIOS;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = new Array(0);
            var1 = var6.bind(var7)(var5, var1);
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var5 = 5;
            var6 = var6[var5];
            var5 = undefined;
            var6 = var7.bind(var5)(var6);
            var5 = var6.useStateFromStores;
            var7 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var7;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var5 = _closure1_slot3;
                    var4 = var5.getGuild;
                    var1 = _closure2_slot0;
                    var4 = var4.bind(var5)(var1);
                    var _closure3_slot0 = var4;
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var4 = _closure1_slot4;
                    var3 = var4.every;
                    var2 = function(arg1) {
                        var1 = _closure3_slot0;
                        var3 = var1.features;
                        var2 = var3.has;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 20:
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var4, var3);
            if(!var1) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var1 = var3;
case 22:
            if(!var1) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var1 = var2;
case 24:
            return var1;
        }
    };
    var3['useCanUseRoleSubscriptionIAP'] = var2;
    return var1;
})();