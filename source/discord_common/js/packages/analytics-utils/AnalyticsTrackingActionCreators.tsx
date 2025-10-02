// discord_common/js/packages/analytics-utils/AnalyticsTrackingActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = '../discord_common/js/packages/analytics-utils/AnalyticsTrackingActionCreators.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var1 = function(arg1, arg2, arg3) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var2 = arg3;
            var _closure3_slot2 = var2;
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var4 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var3 = var4.dispatch;
                    var2 = {};
                    var1 = _closure2_slot1;
                    var2['type'] = var1;
                    var1 = _closure3_slot0;
                    var2['event'] = var1;
                    var1 = _closure3_slot1;
                    var2['properties'] = var1;
                    var1 = _closure3_slot2;
                    var7 = null;
                    var5 = var7 == var1;
                    var1 = undefined;
                    var8 = undefined;
                    if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = _closure3_slot2;
                    var8 = var5.flush;
case 2:
                    var5 = var7 != var8;
                    if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var5 = var8;
case 4:
                    var2['flush'] = var5;
                    var5 = _closure3_slot2;
                    var7 = var7 == var5;
                    var5 = undefined;
                    if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var6 = _closure3_slot2;
                    var5 = var6.fingerprint;
case 6:
                    var2['fingerprint'] = var5;
                    var5 = arg1;
                    var2['resolve'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        return var1;
    };
    var3['queueTrackingEventMaker'] = var2;
    return var1;
})();