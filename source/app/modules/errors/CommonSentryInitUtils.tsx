// app/modules/errors/CommonSentryInitUtils.tsx
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
    var2 = 'modules/errors/CommonSentryInitUtils.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = ['notification_clicked', 'experiment_user_triggered', 'experiment_dm_triggered', 'experiment_guild_triggered', 'device_event', 'react_soft_exception', 'network_capabilities_changed', 'foreground_service', 'app_lifecycle', 'ui_lifecycle', 'touch_event', 'http_request', 'websocket_message_received'];
    var3['IGNORE_ANALYTICS_BREADCRUMB_EVENTS'] = var2;
    var2 = function filterThrottle(arg1) {
        var2 = arg1;
        var3 = var2.maxBudgetMinute;
        var _closure2_slot0 = var3;
        var2 = var2.maxBudgetHour;
        var _closure2_slot1 = var2;
        var2 = {};
        var3 = {'slot': 0, 'budgetUsed': 0};
        var2['minute'] = var3;
        var3 = {'slot': 0, 'budgetUsed': 0};
        var2['hour'] = var3;
        var _closure2_slot2 = var2;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = global;
                var3 = var2.Date;
                var1 = var3.now;
                var6 = var1.bind(var3)();
                var7 = var2.Math;
                var5 = var7.round;
                var1 = 1000;
                var3 = var6 / var1;
                var4 = 60;
                var3 = var3 / var4;
                var5 = var5.bind(var7)(var3);
                var3 = var2.Math;
                var2 = var3.round;
                var1 = var6 / var1;
                var1 = var1 / var4;
                var1 = var1 / var4;
                var4 = var2.bind(var3)(var1);
                var1 = _closure2_slot2;
                var1 = var1.minute;
                var1 = var1.slot;
                if(!(var1 !== var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = _closure2_slot2;
                var3 = var1.minute;
                var3['slot'] = var5;
                var3 = var1.minute;
                var1 = 0;
                var3['budgetUsed'] = var1;
case 2:
                var1 = _closure2_slot2;
                var1 = var1.hour;
                var1 = var1.slot;
                if(!(var1 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var1 = _closure2_slot2;
                var3 = var1.hour;
                var3['slot'] = var4;
                var3 = var1.hour;
                var1 = 0;
                var3['budgetUsed'] = var1;
case 4:
                var1 = _closure2_slot2;
                var1 = var1.minute;
                var3 = var1.budgetUsed;
                var1 = _closure2_slot0;
                var1 = var3 < var1;
                if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var3 = _closure2_slot2;
                var5 = var3.minute;
                var4 = var5.budgetUsed;
                var4 = var4 + 1;
                var5['budgetUsed'] = var4;
                var3 = var3.hour;
                var4 = var3.budgetUsed;
                var3 = _closure2_slot1;
                var1 = var4 < var3;
case 6:
                if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var2 = _closure2_slot2;
                var3 = var2.hour;
                var2 = var3.budgetUsed;
                var2 = var2 + 1;
                var3['budgetUsed'] = var2;
                var1 = true;
case 8:
                return var1;
            }
        };
        return var1;
    };
    var3['filterThrottle'] = var2;
    return var1;
})();