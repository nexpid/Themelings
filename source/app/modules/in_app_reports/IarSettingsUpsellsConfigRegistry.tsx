// app/modules/in_app_reports/IarSettingsUpsellsConfigRegistry.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var4 = {};
    var5 = 1;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.SettingsUpsells;
    var10 = var8.SAFETY_DM_SPAM_FILTER;
    var8 = 2;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var4[var10] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.SettingsUpsells;
    var10 = var8.SAFETY_SC_FILTERS_SEXUAL_MEDIA;
    var8 = 3;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var4[var10] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var8 = var8.SettingsUpsells;
    var10 = var8.SAFETY_SC_FILTERS_GRAPHIC_MEDIA;
    var8 = 4;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var4[var10] = var8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.SettingsUpsells;
    var8 = var5.SAFETY_LANGUAGE_FILTER;
    var5 = 5;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var4[var8] = var5;
    var _closure1_slot3 = var4;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/in_app_reports/IarSettingsUpsellsConfigRegistry.tsx';
    var5 = var6.bind(var7)(var5);
    var3['SettingsUpsellsConfigRegistry'] = var4;
    var4 = function useIarReportSettingsUpsells(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure2_slot0;
                var3 = function getIarReportSubtypeUpsells(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var2 = new Array(0);
                        var _closure4_slot1 = var2;
                        var3 = global;
                        var5 = var3.Object;
                        var4 = var5.entries;
                        var3 = _closure1_slot3;
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.forEach;
                        var1 = function(arg1) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                var6 = arg1;
                                var2 = var6[Symbol.iterator];
                                var6 = var2().next;
                                var3 = var6().value;
                                var4 = var2;
                                var1 = undefined;
                                var5 = var4 === var1;
                                var4 = undefined;
                                if(var5) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                                var4 = var3;
case 4:
                                var3 = undefined;
                                if(var5) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                                var7 = var6().value;
                                var6 = var2;
                                var6 = var6 === var1;
                                var3 = undefined;
                                var5 = var6;
                                if(var6) { _fun0003_ip = 6; continue _fun0003 }
case 8:
                                var3 = var7;
                                var5 = var6;
case 6:
                                if(var5) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                                var2.return();
case 9:
                                var5 = var3.eligibleReportSubtypes;
                                var2 = null;
                                var2 = var2 == var5;
                                if(var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                                var6 = var3.eligibleReportSubtypes;
                                var5 = var6.includes;
                                var3 = _closure4_slot0;
                                var2 = var5.bind(var6)(var3);
case 11:
                                if(!var2) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                                var3 = _closure4_slot1;
                                var2 = var3.push;
                                var2 = var2.bind(var3)(var4);
case 13:
                                return var1;
                            }
                        };
                        var1 = var3.bind(var4)(var1);
                        var4 = var2.length;
                        var3 = 0;
                        var1 = null;
                        if(!(var3 !== var4)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                        var1 = var2;
case 15:
                        return var1;
                    }
                };
                var2 = undefined;
                var1 = var3.bind(var2)(var4);
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useIarReportSettingsUpsells'] = var4;
    var2 = function useSettingsUpsellsConfigs(arg1, arg2) {
        var6 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var3 = _closure2_slot0;
            var2 = var3.map;
            var1 = function(arg1) {
                var4 = _closure2_slot1;
                var3 = function getSettingsUpsellsConfig(arg1, arg2) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var7 = arg2;
                        var2 = _closure1_slot3;
                        var1 = arg1;
                        var2 = var2[var1];
                        var8 = var2.predicate;
                        var6 = var2.eligibleChannelTypes;
                        var1 = null;
                        var3 = var1 == var8;
                        if(var3) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                        var9 = var1 == var8;
                        var4 = undefined;
                        var5 = undefined;
                        if(var9) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                        var5 = var8.bind(var4)();
case 19:
                        var4 = true;
                        var3 = var4 === var5;
case 17:
                        var4 = var1 == var7;
                        if(var4) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                        var4 = var1 == var6;
case 21:
                        if(var4) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                        var5 = var6.includes;
                        var4 = var5.bind(var6)(var7);
case 23:
                        if(!var3) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                        var3 = var4;
case 25:
                        var1 = null;
                        if(!var3) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                        var1 = var2;
case 27:
                        return var1;
                    }
                };
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1, var4);
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 6;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.isNotNullish;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useSettingsUpsellsConfigs'] = var2;
    return var1;
})();