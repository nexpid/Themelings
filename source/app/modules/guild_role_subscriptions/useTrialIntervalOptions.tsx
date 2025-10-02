// app/modules/guild_role_subscriptions/useTrialIntervalOptions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.TIER_TRIAL_INTERVALS;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SubscriptionIntervalTypes;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/useTrialIntervalOptions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTrialIntervalOptions(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot3;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = arg1;
                        var1 = {};
                        var1['value'] = var3;
                        var5 = var3.interval;
                        var4 = _closure1_slot4;
                        var4 = var4.DAY;
                        if(!(var5 === var4)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var5 = var3.interval_count;
                        var4 = 7;
                        if(!(var4 !== var5)) { _fun0002_ip = 4; continue _fun0002 }
case 2:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var4 = 4;
                        var5 = var5[var4];
                        var4 = undefined;
                        var5 = var6.bind(var4)(var5);
                        var4 = var5.formatPlanIntervalDuration;
                        var4 = var4.bind(var5)(var3);
                        _fun0002_ip = 5; continue _fun0002;
case 4:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var5 = 3;
                        var6 = var12[var5];
                        var10 = undefined;
                        var6 = var11.bind(var10)(var6);
                        var8 = var6.intl;
                        var7 = var8.formatToPlainString;
                        var5 = var12[var5];
                        var5 = var11.bind(var10)(var5);
                        var5 = var5.t;
                        var6 = var5.XfSsr6;
                        var5 = {};
                        var9 = 4;
                        var9 = var12[var9];
                        var10 = var11.bind(var10)(var9);
                        var9 = var10.formatPlanIntervalDuration;
                        var9 = var9.bind(var10)(var3);
                        var5['defaultLimit'] = var9;
                        var4 = var7.bind(var8)(var6, var5);
case 5:
                        var1['label'] = var4;
                        var4 = var3.interval;
                        var2 = _closure1_slot4;
                        var2 = var2.DAY;
                        var2 = var4 === var2;
                        if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var4 = var3.interval_count;
                        var3 = 7;
                        var2 = var3 === var4;
case 6:
                        var1['isDefault'] = var2;
                        return var1;
                    }
                };
                var3 = var2.bind(var3)(var1);
                var5 = _closure2_slot0;
                var1 = null;
                if(!(var1 == var5)) { _fun0001_ip = 2; continue _fun0001 }
case 8:
                var2 = _closure2_slot0;
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var5 = var3.find;
                var4 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = arg1;
                        var3 = var2.value;
                        var1 = null;
                        var1 = var1 != var3;
                        if(!var1) { _fun0003_ip = 2; continue _fun0003 }
case 9:
                        var3 = var2.value;
                        var4 = var3.interval;
                        var3 = _closure2_slot0;
                        var3 = var3.interval;
                        var1 = var4 === var3;
case 2:
                        if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var2 = var2.value;
                        var3 = var2.interval_count;
                        var2 = _closure2_slot0;
                        var2 = var2.interval_count;
                        var1 = var3 === var2;
case 10:
                        return var1;
                    }
                };
                var4 = var5.bind(var3)(var4);
                var5 = var1 == var4;
                var1 = undefined;
                if(var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                var1 = var4.value;
case 12:
                var2 = var1;
case 4:
                var1 = {};
                var1['options'] = var3;
                var1['selectedOption'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();