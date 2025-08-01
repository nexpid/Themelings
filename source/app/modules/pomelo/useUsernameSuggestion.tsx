// app/modules/pomelo/useUsernameSuggestion.tsx
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/pomelo/useUsernameSuggestion.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot0;
        var7 = _closure1_slot2;
        var6 = 2;
        var2 = var7[var6];
        var5 = undefined;
        var9 = var3.bind(var5)(var2);
        var8 = var9.useStateFromStoresArray;
        var2 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var3 = _closure1_slot4;
            var1 = var3.usernameSuggestion;
            var2 = var1.bind(var3)();
            var1 = new Array(2);
            var1[0] = var2;
            var2 = var3.usernameSuggestionLoading;
            var2 = var2.bind(var3)();
            var1[1] = var2;
            return var1;
        };
        var3 = var8.bind(var9)(var3, var2);
        var2 = _closure1_slot3;
        var6 = var2.bind(var5)(var3, var6);
        var2 = 0;
        var3 = var6[var2];
        var2 = 1;
        var2 = var6[var2];
        var6 = _closure1_slot1;
        var4 = 3;
        var4 = var7[var4];
        var4 = var6.bind(var5)(var4);
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot4;
                var2 = var4.wasSuggestionsFetched;
                var2 = var2.bind(var4)();
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                if(var2) { _fun0001_ip = 84; continue _fun0001 }
 32:
                var2 = 4;
                var5 = var3[var2];
                var2 = undefined;
                var6 = var4.bind(var2)(var5);
                var5 = var6.fetchSuggestions;
                var2 = _closure2_slot0;
                var6 = var5.bind(var6)(var2);
                var5 = var6.finally;
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {'type': 'POMELO_SUGGESTIONS_FETCH', 'usernameSuggestionLoading': false};
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = var5.bind(var6)(var2);
                _fun0001_ip = 122; continue _fun0001;
 84:
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.dispatch;
                var2 = {'type': 'POMELO_SUGGESTIONS_FETCH', 'usernameSuggestionLoading': false};
                var2 = var3.bind(var4)(var2);
 122:
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.resetSuggestions;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                return var1;
            }
        };
        var1 = var4.bind(var5)(var1);
        var1 = {};
        var1['usernameSuggestion'] = var3;
        var1['usernameSuggestionLoading'] = var2;
        return var1;
    };
    var3['useUsernameSuggestion'] = var2;
    return var1;
})();