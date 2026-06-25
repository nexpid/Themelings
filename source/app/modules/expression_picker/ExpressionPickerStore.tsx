// app/modules/expression_picker/ExpressionPickerStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var6 = function openExpressionPicker(arg1, arg2, arg3) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = arg3;
        var _closure2_slot2 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot4;
            var2 = var3.setState;
            var1 = {};
            var6 = _closure2_slot0;
            var1['activeView'] = var6;
            var6 = _closure2_slot1;
            var1['activeViewType'] = var6;
            var5 = _closure2_slot2;
            var1['activeChannelId'] = var5;
            var5 = _closure1_slot4;
            var4 = var5.getState;
            var4 = var4.bind(var5)();
            var4 = var4.activeView;
            var1['lastActiveView'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot5 = var6;
    var5 = function closeExpressionPicker(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var8 = arg2;
            var4 = _closure1_slot4;
            var1 = var4.getState;
            var4 = var1.bind(var4)();
            var _closure2_slot0 = var4;
            var1 = undefined;
            var5 = var1 !== var7;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var4.activeViewType;
            var5 = var7 !== var6;
case 2:
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var1 !== var8;
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var4.activeChannelId;
            var6 = var8 !== var7;
case 6:
            var5 = var6;
case 4:
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var4.activeView;
            var4 = null;
            if(!(var4 !== var5)) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 4;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.setState;
                var1 = {'activeView': null, 'activeViewType': null, 'activeChannelId': null};
                var4 = _closure2_slot0;
                var4 = var4.activeView;
                var1['lastActiveView'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
case 8:
            return var1;
        }
    };
    var _closure1_slot6 = var5;
    var2 = global;
    var11 = var2.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var7 = var7.ExpressionPickerViewType;
    var _closure1_slot2 = var7;
    var10 = var2.Object;
    var7 = var10.freeze;
    var2 = {'activeView': null, 'lastActiveView': null, 'activeViewType': null, 'activeChannelId': null, 'searchQuery': '', 'isSearchSuggestion': false, 'pickerId': null, 'isNitroLockedSectionVisible': false, 'areOnlyNitroLockedSectionsVisible': false};
    var11 = 1;
    var12 = var9[var11];
    var11 = metroImportDefault;
    var12 = var11.bind(var1)(var12);
    var11 = 'uid_';
    var11 = var12.bind(var1)(var11);
    var2['pickerId'] = var11;
    var2 = var7.bind(var10)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var9[var2];
    var7 = var8.bind(var1)(var2);
    var2 = var7.createWithEqualityFn;
    var7 = var2.bind(var7)();
    var2 = 3;
    var2 = var9[var2];
    var12 = var8.bind(var1)(var2);
    var11 = var12.persist;
    var10 = {};
    var2 = 'expression-picker-last-active-view';
    var10['name'] = var2;
    var2 = function partialize(arg1) {
        var1 = {};
        var2 = arg1;
        var2 = var2.lastActiveView;
        var1['lastActiveView'] = var2;
        return var1;
    };
    var10['partialize'] = var2;
    var2 = function() {
        var1 = _closure1_slot3;
        return var1;
    };
    var2 = var11.bind(var12)(var2, var10);
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var7 = 5;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/expression_picker/ExpressionPickerStore.tsx';
    var7 = var8.bind(var9)(var7);
    var3['openExpressionPicker'] = var6;
    var3['closeExpressionPicker'] = var5;
    var5 = function toggleMultiExpressionPicker(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var3 = _closure1_slot4;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var3 = var2.activeView;
            var6 = null;
            if(!(var6 != var3)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var3 = var2.activeViewType;
            if(!(var3 === var5)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var3 = var2.activeChannelId;
            if(!(var3 === var4)) { _fun0002_ip = 13; continue _fun0002 }
case 15:
            var7 = _closure1_slot6;
            var3 = undefined;
            var3 = var7.bind(var3)();
            _fun0002_ip = 16; continue _fun0002;
case 13:
            var8 = _closure1_slot5;
            var7 = var2.activeView;
            var3 = undefined;
            var3 = var8.bind(var3)(var7, var5, var4);
            _fun0002_ip = 16; continue _fun0002;
case 11:
            var3 = _closure1_slot5;
            var2 = var2.lastActiveView;
            if(!(var6 == var2)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var1 = _closure1_slot2;
            var2 = var1.EMOJI;
case 17:
            var1 = undefined;
            var1 = var3.bind(var1)(var2, var5, var4);
case 16:
            var1 = undefined;
            return var1;
        }
    };
    var3['toggleMultiExpressionPicker'] = var5;
    var5 = function toggleExpressionPicker(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var4 = arg3;
            var3 = _closure1_slot4;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var3 = var2.activeView;
            if(!(var3 === var6)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var3 = var2.activeViewType;
            if(!(var3 === var5)) { _fun0003_ip = 19; continue _fun0003 }
case 21:
            var2 = var2.activeChannelId;
            if(!(var2 !== var4)) { _fun0003_ip = 4; continue _fun0003 }
case 19:
            var3 = _closure1_slot5;
            var2 = undefined;
            var2 = var3.bind(var2)(var6, var5, var4);
            _fun0003_ip = 22; continue _fun0003;
case 4:
            var2 = _closure1_slot6;
            var1 = undefined;
            var1 = var2.bind(var1)();
case 22:
            var1 = undefined;
            return var1;
        }
    };
    var3['toggleExpressionPicker'] = var5;
    var5 = function setExpressionPickerView(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot4;
            var2 = var3.setState;
            var1 = {};
            var5 = _closure2_slot0;
            var1['activeView'] = var5;
            var5 = _closure1_slot4;
            var4 = var5.getState;
            var4 = var4.bind(var5)();
            var4 = var4.activeView;
            var1['lastActiveView'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setExpressionPickerView'] = var5;
    var4 = function setSearchQuery(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arguments[1];
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var3 = false;
case 23:
            var _closure2_slot1 = var3;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 4;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot4;
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