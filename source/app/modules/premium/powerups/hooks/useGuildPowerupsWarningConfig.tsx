// app/modules/premium/powerups/hooks/useGuildPowerupsWarningConfig.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useGuildPowerupsWarningConfig.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildPowerupsWarningConfig(arg1, arg2) {
        var2 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var2;
        var _closure2_slot1 = var5;
        var6 = _closure1_slot1;
        var9 = _closure1_slot2;
        var3 = 2;
        var3 = var9[var3];
        var8 = undefined;
        var3 = var6.bind(var8)(var3);
        var3 = var3.bind(var8)(var2);
        var3 = var3.spent;
        var7 = _closure1_slot0;
        var6 = 3;
        var6 = var9[var6];
        var9 = var7.bind(var8)(var6);
        var8 = var9.useStateFromStores;
        var6 = _closure1_slot4;
        var7 = new Array(1);
        var7[0] = var6;
        var6 = new Array(1);
        var6[0] = var2;
        var2 = function() {
            var3 = _closure1_slot4;
            var2 = var3.getAppliedGuildBoostsForGuild;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var8.bind(var9)(var7, var2, var6);
        var _closure2_slot2 = var2;
        var4 = _closure1_slot3;
        var7 = var4.useMemo;
        var6 = new Array(1);
        var6[0] = var2;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot2;
                var1 = null;
                var4 = var1 == var2;
                var2 = undefined;
                if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure2_slot2;
                var4 = var4.filter;
                var4 = var1 == var4;
                var2 = undefined;
                if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var6 = _closure2_slot2;
                var4 = var6.filter;
                var3 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2.ended;
                        var1 = !var1;
                        if(!var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                        var3 = var2.endsAt;
                        var2 = null;
                        var1 = var2 == var3;
case 5:
                        return var1;
                    }
                };
                var3 = var4.bind(var6)(var3);
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 7:
                var2 = var3.length;
case 2:
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var1 = var2;
case 8:
                return var1;
            }
        };
        var2 = var7.bind(var4)(var2, var6);
        var6 = var3 - var2;
        var _closure2_slot3 = var6;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure2_slot3;
                var1 = 0;
                if(!(!(var2 <= var1))) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var1 = {};
                var2 = true;
                var1['shouldShow'] = var2;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 4;
                var3 = var8[var5];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var11 = var3.intl;
                var10 = var11.string;
                var3 = _closure1_slot1;
                var2 = 5;
                var9 = var8[var2];
                var9 = var3.bind(var4)(var9);
                var9 = var9.n5hQhc;
                var9 = var10.bind(var11)(var9);
                var1['title'] = var9;
                var5 = var8[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var2 = var8[var2];
                var2 = var3.bind(var4)(var2);
                var4 = var2.iAaAiG;
                var3 = {};
                var2 = _closure2_slot3;
                var3['boostCount'] = var2;
                var9 = _closure2_slot1;
                var8 = var9.join;
                var7 = ', ';
                var7 = var8.bind(var9)(var7);
                var3['perksString'] = var7;
                var3 = var5.bind(var6)(var4, var3);
                var1['description'] = var3;
                var1['requiredBoostCount'] = var2;
                _fun0003_ip = 12; continue _fun0003;
case 10:
                var1 = {'shouldShow': false, 'title': '', 'description': '', 'requiredBoostCount': 0};
case 12:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();