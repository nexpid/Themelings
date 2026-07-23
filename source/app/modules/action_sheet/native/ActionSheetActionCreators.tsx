// app/modules/action_sheet/native/ActionSheetActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
        var3 = var1.stackingBehavior;
        var _closure2_slot5 = var3;
        var3 = var1.disableHapticOnOpen;
        var _closure2_slot6 = var3;
        var1 = var1.appEntryKey;
        var _closure2_slot7 = var1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 3;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.wait;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot6;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 4;
                var2 = var7[var2];
                var6 = undefined;
                var3 = var3.bind(var6)(var2);
                var2 = var3.triggerHapticFeedback;
                var4 = _closure1_slot1;
                var1 = 5;
                var1 = var7[var1];
                var1 = var4.bind(var6)(var1);
                var1 = var1.IMPACT_LIGHT;
                var1 = var2.bind(var3)(var1);
case 2:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var3 = var4[var1];
                var1 = undefined;
                var6 = var6.bind(var1)(var3);
                var3 = var6.dismissGlobalKeyboard;
                var3 = var3.bind(var6)();
                var3 = _closure1_slot1;
                var2 = 3;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var6 = 'SHOW_ACTION_SHEET';
                var2['type'] = var6;
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
                var6 = _closure2_slot5;
                var2['stackingBehavior'] = var6;
                var5 = _closure2_slot7;
                var2['appEntryKey'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot6 = var2;
    var1 = ['impressionName', 'impressionProperties', 'backdropKind', 'disableHapticOnOpen', 'appEntryKey'];
    var _closure1_slot3 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var8 = var7[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = {};
    var8 = function openLazy(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
            if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = undefined;
            var3 = var5.bind(var2)();
            _fun0002_ip = 6; continue _fun0002;
case 4:
            var4 = var5.then;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.default;
                return var1;
            };
            var3 = var4.bind(var5)(var2);
case 6:
            var2 = var3.then;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var10 = {};
                    _fun0003_ip = 9; continue _fun0003;
case 7:
                    var10 = _closure2_slot1;
case 9:
                    var9 = var10.impressionName;
                    var8 = var10.impressionProperties;
                    var7 = var10.backdropKind;
                    var5 = var10.disableHapticOnOpen;
                    var4 = var10.appEntryKey;
                    var3 = _closure1_slot4;
                    var2 = _closure1_slot3;
                    var1 = undefined;
                    var13 = var3.bind(var1)(var10, var2);
                    var3 = _closure1_slot6;
                    var2 = {};
                    var12 = _closure1_slot5;
                    var11 = {};
                    var14 = var11;
                    var10 = copyDataProperties(var14, var13);
                    var10 = arg1;
                    var10 = var12.bind(var1)(var10, var11);
                    var2['content'] = var10;
                    var10 = _closure2_slot0;
                    var2['key'] = var10;
                    var2['impressionName'] = var9;
                    var2['impressionProperties'] = var8;
                    var2['backdropKind'] = var7;
                    var6 = _closure2_slot2;
                    var2['stackingBehavior'] = var6;
                    var2['disableHapticOnOpen'] = var5;
                    var2['appEntryKey'] = var4;
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
    var8 = function hideAllActionSheets() {
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
    var4['hideAllActionSheets'] = var8;
    var8 = function setActionSheetZIndex(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SET_ACTION_SHEET_Z_INDEX';
        var2['type'] = var5;
        var5 = arg1;
        var2['zIndex'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['setActionSheetZIndex'] = var8;
    var5 = function resetActionSheetsForAppEntryKey(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'RESET_ACTION_SHEETS_FOR_APP_ENTRY_KEY';
        var2['type'] = var5;
        var5 = arg1;
        var2['appEntryKey'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['resetActionSheetsForAppEntryKey'] = var5;
    var5 = 7;
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