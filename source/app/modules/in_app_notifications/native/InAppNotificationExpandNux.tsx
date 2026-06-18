// app/modules/in_app_notifications/native/InAppNotificationExpandNux.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var4 = function getExpandNUXState() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 0;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var4 = var1.Storage;
            var3 = var4.get;
            var1 = _closure1_slot2;
            var1 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 == var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot3;
case 2:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 'inAppNotificationExpandNux';
    var _closure1_slot2 = var1;
    var1 = {'lastShownAtMs': 0, 'numTimesShown': 0};
    var _closure1_slot3 = var1;
    var1 = 1;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/in_app_notifications/native/InAppNotificationExpandNux.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = 7;
    var3['MAX_TIMES_SHOWN'] = var5;
    var5 = 86400000;
    var3['ONE_DAY_MS'] = var5;
    var5 = 1000;
    var3['NUX_REVEAL_DELAY_MS'] = var5;
    var5 = 300;
    var3['NUX_REVEAL_DURATION_MS'] = var5;
    var5 = 4;
    var3['DRAG_HANDLE_BOUNCE_DISTANCE'] = var5;
    var5 = 650;
    var3['DRAG_HANDLE_BOUNCE_DURATION_MS'] = var5;
    var3['getExpandNUXState'] = var4;
    var4 = function markExpandNUXStateAsShown() {
        var3 = _closure1_slot4;
        var1 = undefined;
        var6 = var3.bind(var1)();
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var3 = 0;
        var3 = var5[var3];
        var3 = var4.bind(var1)(var3);
        var5 = var3.Storage;
        var4 = var5.set;
        var3 = _closure1_slot2;
        var2 = {};
        var9 = var2;
        var8 = var6;
        var7 = copyDataProperties(var9, var8);
        var7 = var6.numTimesShown;
        var6 = 1;
        var7 = var7 + var6;
        var6 = 'numTimesShown';
        var2[5] = var7;
        var6 = global;
        var7 = var6.Date;
        var6 = var7.now;
        var7 = var6.bind(var7)();
        var6 = 'lastShownAtMs';
        var2[5] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['markExpandNUXStateAsShown'] = var4;
    var2 = function resetExpandNUXState() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 0;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var5 = var3.Storage;
        var4 = var5.set;
        var3 = _closure1_slot2;
        var2 = _closure1_slot3;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['resetExpandNUXState'] = var2;
    return var1;
})();