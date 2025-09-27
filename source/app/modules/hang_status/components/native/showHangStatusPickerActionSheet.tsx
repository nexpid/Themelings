// app/modules/hang_status/components/native/showHangStatusPickerActionSheet.tsx
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
    var4 = var4.HANG_STATUS_ACTION_SHEET_KEY;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hang_status/components/native/showHangStatusPickerActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function showHangStatusPickerActionSheet(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var1 = arg2;
            if(!var1) { _fun0001_ip = 129; continue _fun0001 }
 9:
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 3;
            var1 = var10[var1];
            var9 = undefined;
            var4 = var8.bind(var9)(var1);
            var3 = var4.track;
            var1 = _closure1_slot5;
            var2 = var1.HANG_STATUS_PICKER_OPENED;
            var1 = {};
            var7 = 4;
            var7 = var10[var7];
            var8 = var8.bind(var9)(var7);
            var7 = var6.channelId;
            var12 = var8.bind(var9)(var7);
            var13 = var1;
            var7 = copyDataProperties(var13, var12);
            var8 = 0;
            var7 = 'num_favorites';
            var1[var7] = var8;
            var7 = _closure1_slot3;
            var5 = var7.getRecentStatuses;
            var5 = var5.bind(var7)();
            var7 = var5.length;
            var5 = 'num_recents';
            var1[var5] = var7;
            var1 = var3.bind(var4)(var2, var1);
 129:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var4 = var3[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.openLazy;
            var8 = _closure1_slot0;
            var7 = 7;
            var7 = var3[var7];
            var8 = var8.bind(var1)(var7);
            var7 = 6;
            var7 = var3[var7];
            var3 = var3.paths;
            var3 = var8.bind(var1)(var7, var3);
            var2 = _closure1_slot4;
            var2 = var4.bind(var5)(var3, var2, var6);
            return var1;
        }
    };
    var3['showHangStatusPickerActionSheet'] = var2;
    return var1;
})();