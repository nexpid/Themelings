// app/modules/search/native/hooks/useAutoSearchPeopleTab.tsx
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
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/hooks/useAutoSearchPeopleTab.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAutoSearchPeopleTab(arg1, arg2) {
        var5 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot3;
        var7 = var4.useEffect;
        var6 = new Array(2);
        var6[0] = var2;
        var6[1] = var5;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 3;
                var3 = var5[var3];
                var4 = undefined;
                var6 = var6.bind(var4)(var3);
                var3 = var6.fetchUserAffinitiesV2;
                var3 = var3.bind(var6)();
                var3 = _closure1_slot1;
                var2 = 4;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.searchPeopleTab;
                var2 = _closure2_slot0;
                var1 = '';
                var1 = var3.bind(var4)(var2, var1);
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var7.bind(var4)(var3, var6);
        var6 = var4.useEffect;
        var3 = new Array(2);
        var3[0] = var5;
        var3[1] = var2;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 3:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 5;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.debounce;
                var4 = _closure1_slot5;
                var3 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var6 = _closure1_slot4;
                        var5 = var6.getState;
                        var4 = _closure2_slot0;
                        var3 = function(arg1) {
                            var2 = arg1;
                            var1 = var2.isAutocompleteVisible;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var3 = var5.bind(var6)(var4, var3);
                        if(var3) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 4;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.searchPeopleTab;
                        var2 = _closure2_slot0;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
case 5:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4 = var5.bind(var6)(var3, var4);
                var3 = _closure1_slot4;
                var2 = var3.subscribeTextInputValue;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1, var4);
                return var1;
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var6.bind(var4)(var2, var3);
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.cleanupPeopleTab;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useAutoSearchPeopleTab'] = var2;
    return var1;
})();