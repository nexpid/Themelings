// app/modules/expression_picker/ExpressionPickerStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var2 = global;
    var7 = var2.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 0;
    var5 = var9[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var5 = var5.ExpressionPickerViewType;
    var _closure1_slot3 = var5;
    var6 = var2.Object;
    var5 = var6.freeze;
    var2 = {'activeView': null, 'lastActiveView': null, 'activeViewType': null, 'searchQuery': '', 'isSearchSuggestion': false, 'pickerId': null, 'isNitroLockedSectionVisible': false, 'areOnlyNitroLockedSectionsVisible': false};
    var7 = 1;
    var10 = var9[var7];
    var7 = metroImportDefault;
    var10 = var7.bind(var1)(var10);
    var7 = 'uid_';
    var7 = var10.bind(var1)(var7);
    var2['pickerId'] = var7;
    var2 = var5.bind(var6)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var9[var2];
    var5 = var8.bind(var1)(var2);
    var2 = var5.createWithEqualityFn;
    var5 = var2.bind(var5)();
    var2 = 3;
    var2 = var9[var2];
    var10 = var8.bind(var1)(var2);
    var7 = var10.persist;
    var6 = {};
    var2 = 'expression-picker-last-active-view';
    var6['name'] = var2;
    var2 = function partialize(arg1) {
        var1 = {};
        var2 = arg1;
        var2 = var2.lastActiveView;
        var1['lastActiveView'] = var2;
        return var1;
    };
    var6['partialize'] = var2;
    var2 = function() {
        var1 = _closure1_slot4;
        return var1;
    };
    var2 = var7.bind(var10)(var2, var6);
    var2 = var5.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var6 = function openExpressionPicker(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var3 = _closure1_slot3;
            var3 = var3.GIF;
            if(!(var4 !== var3)) { _fun0001_ip = 68; continue _fun0001 }
 33:
            var4 = _closure1_slot2;
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 134; continue _fun0001 }
 43:
            var4 = global;
            var6 = var4.clearTimeout;
            var5 = _closure1_slot2;
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var _closure1_slot2 = var3;
            _fun0001_ip = 134; continue _fun0001;
 68:
            var4 = _closure1_slot2;
            var3 = null;
            if(!(var3 == var4)) { _fun0001_ip = 205; continue _fun0001 }
 81:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 4;
            var3 = var5[var3];
            var5 = undefined;
            var6 = var4.bind(var5)(var3);
            var4 = var6.gifPickerDelayExperiment;
            var3 = 'gif-picker';
            var4 = var4.bind(var6)(var3);
            var3 = var4.enabled;
            var4 = var4.delayMs;
            if(var3) { _fun0001_ip = 176; continue _fun0001 }
 134:
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 5;
            var6 = var6[var3];
            var3 = undefined;
            var8 = var7.bind(var3)(var6);
            var7 = var8.batchUpdates;
            var6 = function() {
                var3 = _closure1_slot5;
                var2 = var3.setState;
                var1 = {};
                var5 = _closure2_slot0;
                var1['activeView'] = var5;
                var4 = _closure2_slot1;
                var1['activeViewType'] = var4;
                var4 = var3.getState;
                var4 = var4.bind(var3)();
                var4 = var4.activeView;
                var1['lastActiveView'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            return var3;
 176:
            var3 = global;
            var3 = var3.setTimeout;
            var1 = function() {
                var2 = null;
                _closure1_slot2 = var2;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.batchUpdates;
                var2 = function() {
                    var3 = _closure1_slot5;
                    var2 = var3.setState;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1['activeView'] = var5;
                    var4 = _closure2_slot1;
                    var1['activeViewType'] = var4;
                    var4 = var3.getState;
                    var4 = var4.bind(var3)();
                    var4 = var4.activeView;
                    var1['lastActiveView'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var5)(var1, var4);
            _closure1_slot2 = var1;
            var1 = undefined;
            return var1;
 205:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot6 = var6;
    var5 = function closeExpressionPicker(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var7 = arg1;
            var4 = _closure1_slot5;
            var1 = var4.getState;
            var4 = var1.bind(var4)();
            var _closure2_slot0 = var4;
            var1 = undefined;
            var5 = var1 !== var7;
            if(!var5) { _fun0002_ip = 45; continue _fun0002 }
 35:
            var6 = var4.activeViewType;
            var5 = var7 !== var6;
 45:
            if(var5) { _fun0002_ip = 98; continue _fun0002 }
 48:
            var5 = var4.activeView;
            var4 = null;
            if(!(var4 !== var5)) { _fun0002_ip = 98; continue _fun0002 }
 60:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 5;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot5;
                var2 = var3.setState;
                var1 = {'activeView': null, 'activeViewType': null};
                var4 = _closure2_slot0;
                var4 = var4.activeView;
                var1['lastActiveView'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
 98:
            return var1;
        }
    };
    var _closure1_slot7 = var5;
    var7 = 6;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/expression_picker/ExpressionPickerStore.tsx';
    var7 = var8.bind(var9)(var7);
    var3['openExpressionPicker'] = var6;
    var3['closeExpressionPicker'] = var5;
    var5 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot5;
            var2 = var3.getState;
            var3 = var2.bind(var3)();
            var4 = var3.activeView;
            var2 = null;
            if(!(var2 != var4)) { _fun0003_ip = 41; continue _fun0003 }
 29:
            var5 = _closure1_slot7;
            var4 = undefined;
            var4 = var5.bind(var4)();
            _fun0003_ip = 76; continue _fun0003;
 41:
            var4 = _closure1_slot6;
            var3 = var3.lastActiveView;
            if(!(var2 == var3)) { _fun0003_ip = 65; continue _fun0003 }
 55:
            var1 = _closure1_slot3;
            var3 = var1.EMOJI;
 65:
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var3, var1);
 76:
            var1 = undefined;
            return var1;
        }
    };
    var3['toggleMultiExpressionPicker'] = var5;
    var5 = function(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot5;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var2 = var2.activeView;
            if(!(var2 !== var5)) { _fun0004_ip = 47; continue _fun0004 }
 30:
            var4 = _closure1_slot6;
            var3 = undefined;
            var2 = arg2;
            var2 = var4.bind(var3)(var5, var2);
            _fun0004_ip = 57; continue _fun0004;
 47:
            var2 = _closure1_slot7;
            var1 = undefined;
            var1 = var2.bind(var1)();
 57:
            var1 = undefined;
            return var1;
        }
    };
    var3['toggleExpressionPicker'] = var5;
    var5 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 5;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot5;
            var2 = var3.setState;
            var1 = {};
            var4 = _closure2_slot0;
            var1['activeView'] = var4;
            var4 = var3.getState;
            var4 = var4.bind(var3)();
            var4 = var4.activeView;
            var1['lastActiveView'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setExpressionPickerView'] = var5;
    var4 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arguments[1];
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0005_ip = 20; continue _fun0005 }
 18:
            var3 = false;
 20:
            var _closure2_slot1 = var3;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 5;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot5;
                var2 = var3.setState;
                var1 = {};
                var5 = _closure2_slot0;
                var1['searchQuery'] = var5;
                var4 = _closure2_slot1;
                var1['isSearchSuggestion'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['setSearchQuery'] = var4;
    var3['useExpressionPickerStore'] = var2;
    return var1;
})();