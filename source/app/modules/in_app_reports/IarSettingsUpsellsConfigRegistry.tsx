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
 0:
                var3 = _closure2_slot0;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0001_ip = 34; continue _fun0001 }
 16:
                var4 = _closure2_slot0;
                var3 = function getIarReportSubtypeUpsells(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
 0:
                                var6 = arg1;
                                var2 = var6[Symbol.iterator];
                                var6 = var2().next;
                                var3 = var6().value;
                                var4 = var2;
                                var1 = undefined;
                                var5 = var4 === var1;
                                var4 = undefined;
                                if(var5) { _fun0003_ip = 27; continue _fun0003 }
 24:
                                var4 = var3;
 27:
                                var3 = undefined;
                                if(var5) { _fun0003_ip = 57; continue _fun0003 }
 32:
                                var7 = var6().value;
                                var6 = var2;
                                var6 = var6 === var1;
                                var3 = undefined;
                                var5 = var6;
                                if(var6) { _fun0003_ip = 57; continue _fun0003 }
 51:
                                var3 = var7;
                                var5 = var6;
 57:
                                if(var5) { _fun0003_ip = 63; continue _fun0003 }
 60:
                                var2.return();
 63:
                                var5 = var3.eligibleReportSubtypes;
                                var2 = null;
                                var2 = var2 == var5;
                                if(var2) { _fun0003_ip = 101; continue _fun0003 }
 78:
                                var6 = var3.eligibleReportSubtypes;
                                var5 = var6.includes;
                                var3 = _closure4_slot0;
                                var2 = var5.bind(var6)(var3);
 101:
                                if(!var2) { _fun0003_ip = 121; continue _fun0003 }
 104:
                                var3 = _closure4_slot1;
                                var2 = var3.push;
                                var2 = var2.bind(var3)(var4);
 121:
                                return var1;
                            }
                        };
                        var1 = var3.bind(var4)(var1);
                        var4 = var2.length;
                        var3 = 0;
                        var1 = null;
                        if(!(var3 !== var4)) { _fun0002_ip = 74; continue _fun0002 }
 71:
                        var1 = var2;
 74:
                        return var1;
                    }
                };
                var2 = undefined;
                var1 = var3.bind(var2)(var4);
 34:
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
 0:
                        var7 = arg2;
                        var2 = _closure1_slot3;
                        var1 = arg1;
                        var2 = var2[var1];
                        var8 = var2.predicate;
                        var6 = var2.eligibleChannelTypes;
                        var1 = null;
                        var3 = var1 == var8;
                        if(var3) { _fun0004_ip = 59; continue _fun0004 }
 38:
                        var9 = var1 == var8;
                        var4 = undefined;
                        var5 = undefined;
                        if(var9) { _fun0004_ip = 53; continue _fun0004 }
 49:
                        var5 = var8.bind(var4)();
 53:
                        var4 = true;
                        var3 = var4 === var5;
 59:
                        var4 = var1 == var7;
                        if(var4) { _fun0004_ip = 70; continue _fun0004 }
 66:
                        var4 = var1 == var6;
 70:
                        if(var4) { _fun0004_ip = 83; continue _fun0004 }
 73:
                        var5 = var6.includes;
                        var4 = var5.bind(var6)(var7);
 83:
                        if(!var3) { _fun0004_ip = 89; continue _fun0004 }
 86:
                        var3 = var4;
 89:
                        var1 = null;
                        if(!var3) { _fun0004_ip = 97; continue _fun0004 }
 94:
                        var1 = var2;
 97:
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