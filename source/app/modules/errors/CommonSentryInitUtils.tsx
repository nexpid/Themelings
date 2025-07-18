// app/modules/errors/CommonSentryInitUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var1 = global;
    var7 = var1.Object;
    var4 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var7)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var4 = var2.AnalyticEvents;
    var7 = var4.START_SPEAKING;
    var2 = new Array(7);
    var2[0] = var7;
    var7 = var4.START_LISTENING;
    var2[1] = var7;
    var7 = var4.APP_OPENED;
    var2[2] = var7;
    var7 = var4.NOTIFICATION_CLICKED;
    var2[3] = var7;
    var7 = var4.EXPERIMENT_USER_TRIGGERED;
    var2[4] = var7;
    var7 = var4.EXPERIMENT_DM_TRIGGERED;
    var2[5] = var7;
    var4 = var4.EXPERIMENT_GUILD_TRIGGERED;
    var2[6] = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/errors/CommonSentryInitUtils.tsx';
    var4 = var5.bind(var6)(var4);
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
 0:
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
                if(!(var1 !== var5)) { _fun0001_ip = 131; continue _fun0001 }
 101:
                var1 = _closure2_slot2;
                var3 = var1.minute;
                var3['slot'] = var5;
                var3 = var1.minute;
                var1 = 0;
                var3['budgetUsed'] = var1;
 131:
                var1 = _closure2_slot2;
                var1 = var1.hour;
                var1 = var1.slot;
                if(!(var1 !== var4)) { _fun0001_ip = 181; continue _fun0001 }
 151:
                var1 = _closure2_slot2;
                var3 = var1.hour;
                var3['slot'] = var4;
                var3 = var1.hour;
                var1 = 0;
                var3['budgetUsed'] = var1;
 181:
                var1 = _closure2_slot2;
                var1 = var1.minute;
                var3 = var1.budgetUsed;
                var1 = _closure2_slot0;
                var1 = var3 < var1;
                if(!var1) { _fun0001_ip = 253; continue _fun0001 }
 208:
                var3 = _closure2_slot2;
                var5 = var3.minute;
                var4 = var5.budgetUsed;
                var4 = var4 + 1;
                var5['budgetUsed'] = var4;
                var3 = var3.hour;
                var4 = var3.budgetUsed;
                var3 = _closure2_slot1;
                var1 = var4 < var3;
 253:
                if(!var1) { _fun0001_ip = 283; continue _fun0001 }
 256:
                var2 = _closure2_slot2;
                var3 = var2.hour;
                var2 = var3.budgetUsed;
                var2 = var2 + 1;
                var3['budgetUsed'] = var2;
                var1 = true;
 283:
                return var1;
            }
        };
        return var1;
    };
    var3['filterThrottle'] = var2;
    return var1;
})();