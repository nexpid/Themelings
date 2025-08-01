// app/modules/main_tabs_v2/native/sidebar/details/stores/ChannelDetailsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function createChannelState() {
        var1 = {};
        var3 = _closure1_slot2;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = function useChannelState(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arg1;
                var4 = var1.states;
                var3 = var4.get;
                var2 = _closure2_slot0;
                var3 = var3.bind(var4)(var2);
                var2 = null;
                if(!(var2 == var3)) { _fun0001_ip = 45; continue _fun0001 }
 32:
                var4 = _closure1_slot4;
                var2 = undefined;
                var3 = var4.bind(var2)();
 45:
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            }
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = {'isSearchActive': false, 'searchActiveSource': 'initial'};
    var _closure1_slot2 = var1;
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var8 = var6.bind(var1)(var4);
    var5 = var8.create;
    var4 = function() {
        var1 = {};
        var2 = global;
        var2 = var2.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var4 = var3;
        var2 = new var4[var2](var3);
        var2 = var2 instanceof Object ? var2 : var3;
        var1['states'] = var2;
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/sidebar/details/stores/ChannelDetailsStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useChannelDetailsStore'] = var4;
    var4 = function deleteChannelStates() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot3;
            var2 = var3.setState;
            var1 = {};
            var4 = global;
            var4 = var4.Map;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var7 = var5;
            var4 = new var7[var4](var6);
            var4 = var4 instanceof Object ? var4 : var5;
            var1['states'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['deleteChannelStates'] = var4;
    var4 = function useIsChannelDetailsSearchActive(arg1) {
        var4 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.isSearchActive;
            return var1;
        };
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['useIsChannelDetailsSearchActive'] = var4;
    var4 = function useChannelDetailsSearchActiveSource(arg1) {
        var4 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.searchActiveSource;
            return var1;
        };
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['useChannelDetailsSearchActiveSource'] = var4;
    var4 = function setIsChannelDetailsSearchActive(arg1, arg2, arg3) {
        var4 = {};
        var1 = arg2;
        var4['isSearchActive'] = var1;
        var1 = arg3;
        var4['searchActiveSource'] = var1;
        var3 = function upsertChannelState(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var6 = arg1;
                var4 = _closure1_slot3;
                var3 = var4.getState;
                var3 = var3.bind(var4)();
                var7 = var3.states;
                var3 = var7.get;
                var3 = var3.bind(var7)(var6);
                var5 = {};
                var4 = null;
                if(!(var4 == var3)) { _fun0002_ip = 56; continue _fun0002 }
 46:
                var8 = _closure1_slot4;
                var4 = undefined;
                var3 = var8.bind(var4)();
 56:
                var10 = var5;
                var9 = var3;
                var3 = copyDataProperties(var10, var9);
                var9 = arg2;
                var10 = var5;
                var3 = copyDataProperties(var10, var9);
                var3 = global;
                var3 = var3.Map;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var11 = var4;
                var10 = var7;
                var3 = new var11[var3](var10, var9);
                var4 = var3 instanceof Object ? var3 : var4;
                var _closure3_slot0 = var4;
                var3 = var4.set;
                var3 = var3.bind(var4)(var6, var5);
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.batchUpdates;
                var2 = function() {
                    var3 = _closure1_slot3;
                    var2 = var3.setState;
                    var1 = {};
                    var4 = _closure3_slot0;
                    var1['states'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1 = undefined;
        var2 = arg1;
        var2 = var3.bind(var1)(var2, var4);
        return var1;
    };
    var3['setIsChannelDetailsSearchActive'] = var4;
    var4 = function getIsChannelDetailsSearchActive(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot3;
            var1 = var3.getState;
            var1 = var1.bind(var3)();
            var4 = var1.states;
            var3 = var4.get;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 == var1)) { _fun0003_ip = 52; continue _fun0003 }
 42:
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = var3.bind(var2)();
 52:
            var1 = var1.isSearchActive;
            return var1;
        }
    };
    var3['getIsChannelDetailsSearchActive'] = var4;
    var2 = function deleteChannelDetailsSearchState(arg1) {
        var4 = _closure1_slot3;
        var3 = var4.getState;
        var3 = var3.bind(var4)();
        var5 = var3.states;
        var4 = var5.delete;
        var3 = arg1;
        var3 = var4.bind(var5)(var3);
        var3 = global;
        var3 = var3.Map;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var7 = var4;
        var6 = var5;
        var3 = new var7[var3](var6, var5);
        var3 = var3 instanceof Object ? var3 : var4;
        var _closure2_slot0 = var3;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot3;
            var2 = var3.setState;
            var1 = {};
            var4 = _closure2_slot0;
            var1['states'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['deleteChannelDetailsSearchState'] = var2;
    return var1;
})();