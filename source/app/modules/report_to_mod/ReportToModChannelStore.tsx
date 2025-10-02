// app/modules/report_to_mod/ReportToModChannelStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var8 = var6.bind(var1)(var4);
    var5 = var8.create;
    var4 = 1;
    var9 = var7[var4];
    var11 = var6.bind(var1)(var9);
    var10 = var11.persist;
    var9 = {};
    var12 = 'report-to-mod-channel-storage';
    var9['name'] = var12;
    var4 = var7[var4];
    var13 = var6.bind(var1)(var4);
    var12 = var13.createJSONStorage;
    var4 = function() {
        var1 = global;
        var1 = var1.localStorage;
        return var1;
    };
    var4 = var12.bind(var13)(var4);
    var9['storage'] = var4;
    var4 = function(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = {};
        var3 = {};
        var1['channelShowResolvedFlags'] = var3;
        var3 = function setShowResolvedFlags(arg1, arg2) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.batchUpdates;
            var1 = function() {
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = function(arg1) {
                    var1 = {};
                    var2 = {};
                    var3 = arg1;
                    var5 = var3.channelShowResolvedFlags;
                    var6 = var2;
                    var3 = copyDataProperties(var6, var5);
                    var4 = _closure3_slot0;
                    var3 = _closure3_slot1;
                    var2[var4] = var3;
                    var1['channelShowResolvedFlags'] = var2;
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['setShowResolvedFlags'] = var3;
        var2 = function getShowResolvedFlags(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var2 = var1.channelShowResolvedFlags;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 == var2;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var1['getShowResolvedFlags'] = var2;
        return var1;
    };
    var4 = var10.bind(var11)(var4, var9);
    var4 = var5.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/report_to_mod/ReportToModChannelStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useReportToModChannelFiltersStore'] = var4;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var2 = _closure1_slot2;
            var1 = undefined;
            var5 = var2.bind(var1)();
            var _closure2_slot1 = var5;
            var2 = null;
            if(!(var2 != var6)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = {};
            var4 = var5.getShowResolvedFlags;
            var4 = var4.bind(var5)(var6);
            var2 = var2 == var4;
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = var4;
case 6:
            var1['showResolvedFlags'] = var2;
            var2 = function setShowResolvedFlags(arg1) {
                var4 = _closure2_slot1;
                var3 = var4.setShowResolvedFlags;
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1['setShowResolvedFlags'] = var2;
            _fun0002_ip = 8; continue _fun0002;
case 4:
            var2 = {};
            var4 = true;
            var2['showResolvedFlags'] = var4;
            var3 = function setShowResolvedFlags() {
                var1 = undefined;
                return var1;
            };
            var2['setShowResolvedFlags'] = var3;
            var1 = var2;
case 8:
            return var1;
        }
    };
    var3['useShouldShowResolvedFlagsForChannel'] = var2;
    return var1;
})();