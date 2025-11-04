// app/modules/search/managers/SearchSelectedTabAnalyticsManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SEARCH_TAB_TO_ANALYTICS_SEARCH_TAB;
    var _closure1_slot4 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function SearchSelectedTabAnalyticsManager() {
            var3 = this;
            var4 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = global;
            var2 = var2.Map;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var7 = var4;
            var2 = new var7[var2](var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['selectedTabs'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'setSelectedTab';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = arg2;
                var1 = null;
                if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 3;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.getSearchContextId;
                var4 = arg1;
                var4 = var5.bind(var6)(var4);
                var2 = _closure1_slot4;
                var3 = var2[var3];
                if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var1 = this;
                var2 = var1.selectedTabs;
                var1 = var2.set;
                var1 = var1.bind(var2)(var4, var3);
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'getSelectedTab';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getSearchContextId;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var1 = this;
            var2 = var1.selectedTabs;
            var1 = var2.get;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'deleteSelectedTab';
        var1['key'] = var6;
        var5 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.getSearchContextId;
            var2 = arg1;
            var4 = var3.bind(var4)(var2);
            var2 = this;
            var3 = var2.selectedTabs;
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
            return var1;
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/managers/SearchSelectedTabAnalyticsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();