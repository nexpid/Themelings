// app/modules/user_settings/DataHarvestActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/DataHarvestActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getDataHarvestStatus() {
        var3 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 1;
        var2 = var6[var2];
        var4 = undefined;
        var7 = var3.bind(var4)(var2);
        var3 = var7.dispatch;
        var2 = {};
        var8 = 'LOAD_DATA_HARVEST_TYPE_START';
        var2['type'] = var8;
        var2 = var3.bind(var7)(var2);
        var3 = _closure1_slot0;
        var2 = 2;
        var2 = var6[var2];
        var2 = var3.bind(var4)(var2);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        var5 = _closure1_slot3;
        var5 = var5.USER_HARVEST;
        var2['url'] = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'UPDATE_DATA_HARVEST_TYPE';
            var2['type'] = var5;
            var5 = arg1;
            var5 = var5.body;
            var2['harvestType'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.catch;
        var1 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'LOAD_DATA_HARVEST_TYPE_FAILURE';
            var2['type'] = var5;
            var5 = arg1;
            var2['error'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getDataHarvestStatus'] = var4;
    var2 = function requestDataHarvest(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.requestHarvest;
        var1 = arg1;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = arg1;
                var4 = null;
                var2 = var4 != var1;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = var1.body;
                var2 = var4 != var3;
case 2:
                if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 1;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'UPDATE_DATA_HARVEST_TYPE';
                var2['type'] = var5;
                var5 = var1.body;
                var2['harvestType'] = var5;
                var2 = var3.bind(var4)(var2);
case 4:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['requestDataHarvest'] = var2;
    return var1;
})();