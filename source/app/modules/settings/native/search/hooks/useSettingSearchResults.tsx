// app/modules/settings/native/search/hooks/useSettingSearchResults.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function isVisibleSearchResult(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 6;
            var1 = var5[var1];
            var5 = undefined;
            var6 = var4.bind(var5)(var1);
            var4 = var6.isBlocked;
            var1 = arg2;
            var1 = var4.bind(var6)(var3, var1);
            var1 = !var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.SETTING_RENDERER_CONFIG;
            var2 = var2[var3];
            var2 = var2.unsearchable;
            var1 = !var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMPTY_SETTINGS_LIST;
    var _closure1_slot8 = var4;
    var4 = new Array(0);
    var _closure1_slot9 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/settings/native/search/hooks/useSettingSearchResults.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSettingSearchResults(arg1) {
        var10 = arg1;
        var _closure2_slot0 = var10;
        var8 = _closure1_slot5;
        var5 = var8.useMemo;
        var4 = function() {
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 8;
            var2 = var5[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot0;
            var1 = 9;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getSettingSearchableTitles;
            var6 = var1.bind(var2)();
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var7 = var2;
            var1 = new var7[var3](var6, var5);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var2 = new Array(0);
        var6 = var5.bind(var8)(var4, var2);
        var _closure2_slot1 = var6;
        var4 = var8.useState;
        var2 = _closure1_slot9;
        var2 = var4.bind(var8)(var2);
        var13 = _closure1_slot4;
        var12 = undefined;
        var11 = 2;
        var5 = var13.bind(var12)(var2, var11);
        var2 = 0;
        var4 = var5[var2];
        var9 = 1;
        var5 = var5[var9];
        var _closure2_slot2 = var5;
        var5 = var8.useState;
        var3 = _closure1_slot8;
        var3 = var5.bind(var8)(var3);
        var3 = var13.bind(var12)(var3, var11);
        var5 = var3[var2];
        var3 = var3[var9];
        var _closure2_slot3 = var3;
        var7 = var8.useState;
        var3 = false;
        var3 = var7.bind(var8)(var3);
        var7 = var13.bind(var12)(var3, var11);
        var3 = var7[var2];
        var7 = var7[var9];
        var _closure2_slot4 = var7;
        var14 = var8.useState;
        var7 = 10;
        var7 = var14.bind(var8)(var7);
        var7 = var13.bind(var12)(var7, var11);
        var2 = var7[var2];
        var7 = var7[var9];
        var _closure2_slot5 = var7;
        var9 = var8.useMemo;
        var7 = new Array(2);
        var7[0] = var10;
        var7[1] = var6;
        var6 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var1 = function() {
                    var4 = _closure1_slot3;
                    var3 = undefined;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                StartGenerator();
                                var7 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                                var2 = undefined;
                                var _closure6_slot0 = var2;
                                var6 = _closure1_slot7;
                                var5 = var6.getField;
                                var3 = 'blocklist';
                                var3 = var5.bind(var6)(var3);
                                _closure6_slot0 = var3;
                                var5 = _closure2_slot0;
                                var6 = _closure2_slot1;
                                if(var5) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                                var8 = var6.search;
                                var5 = var7.trim;
                                var5 = var5.bind(var7)();
                                var5 = var8.bind(var6)(var5);
                                SaveGenerator(address=86);
case 8:
                                return var5;
case 9:
                                ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                                if(var8) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                                var9 = var5.filter;
                                var8 = function(arg1) {
                                    var4 = _closure1_slot10;
                                    var3 = _closure6_slot0;
                                    var2 = undefined;
                                    var1 = arg1;
                                    var1 = var4.bind(var2)(var1, var3);
                                    return var1;
                                };
                                var9 = var9.bind(var5)(var8);
                                var8 = _closure2_slot3;
                                var8 = var8.bind(var2)(var9);
                                _fun0003_ip = 12; continue _fun0003;
case 10:
                                return var5;
case 6:
                                var5 = var6.getScoredSearchResults;
                                var6 = var5.bind(var6)(var7);
                                var5 = var6.filter;
                                var4 = function(arg1) {
                                    var1 = arg1;
                                    var4 = var1.setting;
                                    var3 = _closure1_slot10;
                                    var2 = _closure6_slot0;
                                    var1 = undefined;
                                    var1 = var3.bind(var1)(var4, var2);
                                    return var1;
                                };
                                var4 = var5.bind(var6)(var4);
                                var5 = _closure2_slot2;
                                var5 = var5.bind(var2)(var4);
                                var5 = global;
                                var7 = var5.Math;
                                var6 = var7.max;
                                var9 = var5.Math;
                                var8 = var9.min;
                                var5 = var4.length;
                                var4 = 10;
                                var5 = var8.bind(var9)(var5, var4);
                                var4 = 5;
                                var5 = var6.bind(var7)(var5, var4);
                                var4 = _closure2_slot5;
                                var4 = var4.bind(var2)(var5);
case 12:
                                var4 = _closure2_slot4;
                                var3 = false;
                                var3 = var4.bind(var2)(var3);
                                return var2;
case 4:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var2 = var1.bind(var4)();
                var5 = _closure2_slot0;
                var1 = 0;
                if(!var5) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var1 = 350;
case 13:
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var9 = var9.bind(var8)(var6, var7);
        var _closure2_slot6 = var9;
        var7 = var8.useEffect;
        var6 = new Array(1);
        var6[0] = var9;
        var1 = function() {
            var6 = _closure1_slot6;
            var5 = var6.subscribe;
            var4 = {};
            var2 = function equalityFn(arg1, arg2) {
                var2 = arg1;
                var1 = arg2;
                var1 = var2 === var1;
                return var1;
            };
            var4['equalityFn'] = var2;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.query;
                var1 = var2.trim;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var1 = '';
                    if(!(var1 !== var3)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var5 = _closure2_slot4;
                    var2 = undefined;
                    var4 = true;
                    var4 = var5.bind(var2)(var4);
                    var1 = _closure2_slot6;
                    var1 = var1.bind(var2)(var3);
                    _fun0004_ip = 17; continue _fun0004;
case 15:
                    var5 = _closure2_slot2;
                    var4 = _closure1_slot9;
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var2 = _closure2_slot3;
                    var1 = _closure1_slot8;
                    var1 = var2.bind(var3)(var1);
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var3, var2, var4);
            var _closure3_slot0 = var2;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var3 = _closure2_slot6;
                    var4 = var3.cancel;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var3 = _closure2_slot6;
                    var2 = var3.cancel;
                    var2 = var2.bind(var3)();
case 18:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var7.bind(var8)(var1, var6);
        var1 = {};
        var1['settings'] = var5;
        var1['settingsWithScores'] = var4;
        var1['isLoading'] = var3;
        var1['placeholderCount'] = var2;
        return var1;
    };
    var3['useSettingSearchResults'] = var2;
    return var1;
})();