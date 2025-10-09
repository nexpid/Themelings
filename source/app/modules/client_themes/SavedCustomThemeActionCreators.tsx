// app/modules/client_themes/SavedCustomThemeActionCreators.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/client_themes/SavedCustomThemeActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function fetchUserCustomThemes() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot3;
            var2 = var3.isFetching;
            var2 = var2.bind(var3)();
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var4 = undefined;
            var7 = var3.bind(var4)(var2);
            var3 = var7.dispatch;
            var2 = {};
            var8 = 'SAVED_CUSTOM_THEMES_FETCH_START';
            var2['type'] = var8;
            var2 = var3.bind(var7)(var2);
            var3 = _closure1_slot0;
            var2 = 3;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.HTTP;
            var3 = var4.get;
            var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
            var5 = _closure1_slot4;
            var5 = var5.USERS_ME_CUSTOM_THEMES;
            var2['url'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'SAVED_CUSTOM_THEMES_FETCH_SUCCESS';
                    var2['type'] = var5;
                    var5 = arg1;
                    var7 = var5.body;
                    var6 = null;
                    var8 = var6 == var7;
                    var5 = undefined;
                    if(var8) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = var7.custom_themes;
case 4:
                    if(!(var6 == var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = new Array(0);
case 6:
                    var2['themes'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'SAVED_CUSTOM_THEMES_FETCH_FAILURE';
                var2['type'] = var5;
                var5 = arg1;
                var2['error'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var3['fetchUserCustomThemes'] = var2;
    return var1;
})();