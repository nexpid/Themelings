// app/modules/action_sheet/native/ActionSheetActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var7;
    var1 = ['impressionName', 'impressionProperties', 'backdropKind'];
    var _closure1_slot3 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var4 = var7[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var4);
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot5 = var2;
    var2 = function showActionSheet(arg1) {
        var1 = arg1;
        var3 = var1.content;
        var _closure2_slot0 = var3;
        var3 = var1.key;
        var _closure2_slot1 = var3;
        var3 = var1.impressionName;
        var _closure2_slot2 = var3;
        var3 = var1.impressionProperties;
        var _closure2_slot3 = var3;
        var3 = var1.backdropKind;
        var _closure2_slot4 = var3;
        var1 = var1.stackingBehavior;
        var _closure2_slot5 = var1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 3;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.wait;
        var2 = function() {
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 4;
            var3 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var3);
            var5 = var6.triggerHapticFeedback;
            var3 = _closure1_slot1;
            var2 = 5;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var2 = var2.IMPACT_LIGHT;
            var2 = var5.bind(var6)(var2);
            var2 = 3;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'SHOW_ACTION_SHEET';
            var2['type'] = var5;
            var6 = _closure2_slot0;
            var2['content'] = var6;
            var6 = _closure2_slot1;
            var2['key'] = var6;
            var6 = _closure2_slot2;
            var2['impressionName'] = var6;
            var6 = _closure2_slot3;
            var2['impressionProperties'] = var6;
            var6 = _closure2_slot4;
            var2['backdropKind'] = var6;
            var5 = _closure2_slot5;
            var2['stackingBehavior'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot6 = var2;
    var4 = {};
    var8 = function openLazy(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var2;
            var2 = arg3;
            var _closure2_slot1 = var2;
            var2 = arg4;
            var _closure2_slot2 = var2;
            var2 = global;
            var2 = var2.Promise;
            var2 = var5 instanceof var2;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = undefined;
            var3 = var5.bind(var2)();
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = var5.then;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.default;
                return var1;
            };
            var3 = var4.bind(var5)(var2);
case 4:
            var2 = var3.then;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var9 = {};
                    _fun0002_ip = 7; continue _fun0002;
case 5:
                    var9 = _closure2_slot1;
case 7:
                    var7 = var9.impressionName;
                    var6 = var9.impressionProperties;
                    var5 = var9.backdropKind;
                    var8 = _closure1_slot4;
                    var3 = _closure1_slot3;
                    var1 = undefined;
                    var10 = var8.bind(var1)(var9, var3);
                    var9 = _closure1_slot5;
                    var8 = {};
                    var11 = var8;
                    var3 = copyDataProperties(var11, var10);
                    var3 = arg1;
                    var8 = var9.bind(var1)(var3, var8);
                    var3 = _closure1_slot6;
                    var2 = {};
                    var2['content'] = var8;
                    var8 = _closure2_slot0;
                    var2['key'] = var8;
                    var2['impressionName'] = var7;
                    var2['impressionProperties'] = var6;
                    var2['backdropKind'] = var5;
                    var4 = _closure2_slot2;
                    var2['stackingBehavior'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var4['openLazy'] = var8;
    var8 = function hideActionSheet(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'HIDE_ACTION_SHEET';
        var2['type'] = var5;
        var5 = arg1;
        var2['key'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['hideActionSheet'] = var8;
    var5 = function hideAllActionSheets() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'HIDE_ALL_ACTION_SHEETS';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['hideAllActionSheets'] = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/action_sheet/native/ActionSheetActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = 'start';
    var3['ACTION_SHEET_HEIGHT_HALF'] = var4;
    var4 = 'expanded';
    var3['ACTION_SHEET_HEIGHT_EXPANDED'] = var4;
    var3['showActionSheet'] = var2;
    return var1;
})();