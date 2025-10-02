// app/modules/teams/TeamActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.Endpoints;
    var _closure1_slot2 = var2;
    var2 = {};
    var4 = function fetchTeams() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arguments[0];
            var3 = undefined;
            if(!(var5 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = false;
case 2:
            var2 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 1;
            var1 = var6[var1];
            var1 = var2.bind(var3)(var1);
            var3 = var1.HTTP;
            var2 = var3.get;
            var1 = {};
            var4 = _closure1_slot2;
            var4 = var4.TEAMS;
            var1['url'] = var4;
            var4 = {};
            var4['include_payout_account_status'] = var5;
            var1['query'] = var4;
            var4 = false;
            var1['rejectWithError'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2['fetchTeams'] = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/teams/TeamActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();