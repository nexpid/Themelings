// app/modules/search/native/hooks/useAutoSearchGuildChannelTab.tsx
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
    var4 = 'modules/search/native/hooks/useAutoSearchGuildChannelTab.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAutoSearchGuildChannelTab(arg1, arg2) {
        var5 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var7;
        var4 = _closure1_slot3;
        var6 = var4.useCallback;
        var3 = new Array(1);
        var3[0] = var5;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.getGuildIdFromSearchContext;
                var3 = _closure2_slot0;
                var5 = var4.bind(var5)(var3);
                var3 = null;
                if(!(var3 != var5)) { _fun0001_ip = 103; continue _fun0001 }
 49:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 4;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.searchGuildChannelTab;
                var2 = {};
                var6 = _closure2_slot0;
                var2['searchContext'] = var6;
                var6 = arg1;
                var2['searchQueryString'] = var6;
                var2['guildId'] = var5;
                var2 = var3.bind(var4)(var2);
 103:
                return var1;
            }
        };
        var2 = var6.bind(var4)(var2, var3);
        var _closure2_slot2 = var2;
        var8 = var4.useEffect;
        var6 = new Array(2);
        var6[0] = var7;
        var6[1] = var2;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0002_ip = 25; continue _fun0002 }
 10:
                var3 = _closure2_slot2;
                var2 = undefined;
                var1 = '';
                var1 = var3.bind(var2)(var1);
 25:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var8.bind(var4)(var3, var6);
        var6 = var4.useEffect;
        var3 = new Array(3);
        var3[0] = var5;
        var3[1] = var7;
        var3[2] = var2;
        var2 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0003_ip = 87; continue _fun0003 }
 10:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 5;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.debounce;
                var4 = _closure2_slot2;
                var3 = _closure1_slot5;
                var5 = var5.bind(var6)(var4, var3);
                var4 = _closure1_slot4;
                var3 = var4.subscribeTextInputValue;
                var2 = _closure2_slot0;
                var1 = {};
                var6 = true;
                var1['fireImmediately'] = var6;
                var1 = var3.bind(var4)(var2, var5, var1);
                return var1;
 87:
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
                var3 = var4.cleanupGuildChannelTab;
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
    var3['useAutoSearchGuildChannelTab'] = var2;
    return var1;
})();