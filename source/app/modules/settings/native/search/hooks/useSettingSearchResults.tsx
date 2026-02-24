// app/modules/settings/native/search/hooks/useSettingSearchResults.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = new Array(0);
    var _closure1_slot7 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/settings/native/search/hooks/useSettingSearchResults.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSettingSearchResults() {
        var7 = _closure1_slot4;
        var5 = var7.useMemo;
        var4 = function() {
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 6;
            var2 = var5[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot0;
            var1 = 7;
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
        var5 = var5.bind(var7)(var4, var2);
        var _closure2_slot0 = var5;
        var4 = var7.useState;
        var2 = _closure1_slot7;
        var2 = var4.bind(var7)(var2);
        var11 = _closure1_slot3;
        var10 = undefined;
        var9 = 2;
        var3 = var11.bind(var10)(var2, var9);
        var2 = 0;
        var4 = var3[var2];
        var8 = 1;
        var3 = var3[var8];
        var _closure2_slot1 = var3;
        var6 = var7.useState;
        var3 = false;
        var3 = var6.bind(var7)(var3);
        var6 = var11.bind(var10)(var3, var9);
        var3 = var6[var2];
        var6 = var6[var8];
        var _closure2_slot2 = var6;
        var12 = var7.useState;
        var6 = 10;
        var6 = var12.bind(var7)(var6);
        var6 = var11.bind(var10)(var6, var9);
        var2 = var6[var2];
        var6 = var6[var8];
        var _closure2_slot3 = var6;
        var8 = var7.useMemo;
        var6 = new Array(1);
        var6[0] = var5;
        var5 = function() {
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = function(arg1) {
                var4 = _closure1_slot6;
                var3 = var4.getField;
                var2 = 'blocklist';
                var2 = var3.bind(var4)(var2);
                var _closure4_slot0 = var2;
                var5 = _closure2_slot0;
                var4 = var5.getScoredSearchResults;
                var3 = arg1;
                var4 = var4.bind(var5)(var3);
                var3 = var4.filter;
                var1 = function(arg1) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.setting;
                        var6 = _closure4_slot0;
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 4;
                        var1 = var5[var1];
                        var5 = undefined;
                        var4 = var4.bind(var5)(var1);
                        var1 = var4.isBlocked;
                        var1 = var1.bind(var4)(var3, var6);
                        var1 = !var1;
                        if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 5;
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
                var3 = var3.bind(var4)(var1);
                var4 = _closure2_slot1;
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var4 = global;
                var6 = var4.Math;
                var5 = var6.max;
                var8 = var4.Math;
                var7 = var8.min;
                var4 = var3.length;
                var3 = 10;
                var4 = var7.bind(var8)(var4, var3);
                var3 = 5;
                var4 = var5.bind(var6)(var4, var3);
                var3 = _closure2_slot3;
                var3 = var3.bind(var1)(var4);
                var3 = _closure2_slot2;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = 350;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var8 = var8.bind(var7)(var5, var6);
        var _closure2_slot4 = var8;
        var6 = var7.useEffect;
        var5 = new Array(1);
        var5[0] = var8;
        var1 = function() {
            var6 = _closure1_slot5;
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
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = arg1;
                    var1 = '';
                    if(!(var1 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure2_slot2;
                    var2 = undefined;
                    var4 = true;
                    var4 = var5.bind(var2)(var4);
                    var1 = _closure2_slot4;
                    var1 = var1.bind(var2)(var3);
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var2 = _closure2_slot4;
                    var3 = var2.cancel;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var3 = _closure2_slot4;
                    var2 = var3.cancel;
                    var2 = var2.bind(var3)();
case 7:
                    var4 = _closure2_slot1;
                    var2 = _closure1_slot7;
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var2 = _closure2_slot2;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var3, var2, var4);
            var _closure3_slot0 = var2;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var3 = _closure2_slot4;
                    var4 = var3.cancel;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var3 = _closure2_slot4;
                    var2 = var3.cancel;
                    var2 = var2.bind(var3)();
case 9:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var6.bind(var7)(var1, var5);
        var1 = {};
        var1['settings'] = var4;
        var1['isLoading'] = var3;
        var1['placeholderCount'] = var2;
        return var1;
    };
    var3['useSettingSearchResults'] = var2;
    return var1;
})();