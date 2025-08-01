// app/modules/guild_scheduled_events/useGuildEventRecurrences.tsx
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/useGuildEventRecurrences.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildEventRecurrences(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var11 = arg1;
            var3 = arg2;
            var9 = arg3;
            var _closure2_slot0 = var11;
            var _closure2_slot1 = var3;
            var _closure2_slot2 = var9;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 3;
            var5 = var4[var1];
            var1 = undefined;
            var10 = var7.bind(var1)(var5);
            var8 = var10.useStateFromStores;
            var5 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getGuildScheduledEvent;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var8.bind(var10)(var7, var5);
            var _closure2_slot3 = var7;
            var5 = _closure1_slot1;
            var17 = 4;
            var4 = var4[var17];
            var4 = var5.bind(var1)(var4);
            var5 = var4.bind(var1)(var9);
            var _closure2_slot4 = var5;
            var12 = _closure1_slot4;
            var10 = var12.useState;
            var8 = null;
            if(!(var8 != var9)) { _fun0001_ip = 124; continue _fun0001 }
 120:
            if(!(var8 == var7)) { _fun0001_ip = 130; continue _fun0001 }
 124:
            var4 = new Array(0);
            _fun0001_ip = 217; continue _fun0001;
 130:
            var14 = _closure1_slot0;
            var18 = _closure1_slot2;
            var13 = 5;
            var15 = var18[var13];
            var16 = var14.bind(var1)(var15);
            var15 = var16.generateNextRecurrences;
            var13 = var18[var13];
            var14 = var14.bind(var1)(var13);
            var13 = var14.getRRule;
            var14 = var13.bind(var14)(var9);
            var13 = global;
            var19 = var13.Date;
            var22 = var7.scheduled_start_time;
            var18 = var19.prototype;
            var18 = Object.create(var18, {constructor: {value: var19}});
            var23 = var18;
            var13 = new var23[var19](var22, var21);
            var13 = var13 instanceof Object ? var13 : var18;
            var4 = var15.bind(var16)(var17, var14, var13);
 217:
            var12 = var10.bind(var12)(var4);
            var10 = _closure1_slot3;
            var4 = 2;
            var12 = var10.bind(var1)(var12, var4);
            var4 = 0;
            var4 = var12[var4];
            var _closure2_slot5 = var4;
            var10 = 1;
            var10 = var12[var10];
            var _closure2_slot6 = var10;
            var6 = _closure1_slot4;
            var12 = var6.useEffect;
            var10 = new Array(4);
            var10[0] = var9;
            var13 = var4.length;
            var10[1] = var13;
            var10[2] = var7;
            var10[3] = var5;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0002_ip = 199; continue _fun0002 }
 16:
                    var2 = _closure2_slot2;
                    if(!(var3 != var2)) { _fun0002_ip = 199; continue _fun0002 }
 27:
                    var2 = _closure2_slot3;
                    if(!(var3 != var2)) { _fun0002_ip = 199; continue _fun0002 }
 38:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 6;
                    var4 = var4[var3];
                    var3 = undefined;
                    var7 = var5.bind(var3)(var4);
                    var6 = var7.isEqual;
                    var5 = _closure2_slot4;
                    var4 = _closure2_slot2;
                    var4 = var6.bind(var7)(var5, var4);
                    if(var4) { _fun0002_ip = 199; continue _fun0002 }
 86:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var2 = var6[var4];
                    var8 = var5.bind(var3)(var2);
                    var7 = var8.getRRule;
                    var2 = _closure2_slot2;
                    var7 = var7.bind(var8)(var2);
                    var2 = _closure2_slot6;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.generateNextRecurrences;
                    var4 = _closure2_slot5;
                    var4 = var4.length;
                    var8 = global;
                    var9 = var8.Date;
                    var1 = _closure2_slot3;
                    var12 = var1.scheduled_start_time;
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {constructor: {value: var9}});
                    var13 = var8;
                    var1 = new var13[var9](var12, var11);
                    var1 = var1 instanceof Object ? var1 : var8;
                    var1 = var5.bind(var6)(var4, var7, var1);
                    var1 = var2.bind(var3)(var1);
 199:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var12.bind(var6)(var5, var10);
            var10 = var6.useEffect;
            var5 = new Array(3);
            var5[0] = var11;
            var5[1] = var3;
            var5[2] = var4;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 80; continue _fun0003 }
 13:
                    var4 = _closure2_slot5;
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var4 = arg1;
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 7;
                        var1 = var7[var1];
                        var5 = undefined;
                        var3 = var6.bind(var5)(var1);
                        var2 = var3.fromTimestamp;
                        var1 = global;
                        var9 = var1.Math;
                        var8 = var9.floor;
                        var1 = var4.getTime;
                        var10 = var1.bind(var4)();
                        var1 = 8;
                        var4 = var7[var1];
                        var4 = var6.bind(var5)(var4);
                        var4 = var4.Millis;
                        var4 = var4.SECOND;
                        var4 = var10 / var4;
                        var4 = var8.bind(var9)(var4);
                        var1 = var7[var1];
                        var1 = var6.bind(var5)(var1);
                        var1 = var1.Millis;
                        var1 = var1.SECOND;
                        var1 = var4 * var1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var5 = var3.bind(var4)(var2);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getGuildEventUserCounts;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2, var1, var5);
 80:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var10.bind(var6)(var3, var5);
            var5 = var6.useMemo;
            var3 = new Array(3);
            var3[0] = var9;
            var3[1] = var4;
            var8 = var8 == var7;
            var1 = undefined;
            if(var8) { _fun0001_ip = 365; continue _fun0001 }
 359:
            var1 = var7.scheduled_start_time;
 365:
            var3[2] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0004_ip = 216; continue _fun0004 }
 16:
                    var3 = _closure2_slot5;
                    var4 = var3.length;
                    var3 = 0;
                    if(!(var3 !== var4)) { _fun0004_ip = 216; continue _fun0004 }
 34:
                    var3 = _closure2_slot3;
                    var4 = var1 == var3;
                    var7 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0004_ip = 59; continue _fun0004 }
 49:
                    var4 = _closure2_slot3;
                    var3 = var4.scheduled_start_time;
 59:
                    if(!(var1 != var3)) { _fun0004_ip = 216; continue _fun0004 }
 66:
                    var3 = global;
                    var3 = var3.Date;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var12 = var4;
                    var3 = new var12[var3](var11);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var9 = var3.setFullYear;
                    var4 = var3.getFullYear;
                    var10 = var4.bind(var3)();
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 5;
                    var5 = var8[var4];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.MAX_YEARS_AHEAD_RECURRING_EVENT;
                    var5 = var10 + var5;
                    var5 = var9.bind(var3)(var5);
                    var9 = _closure2_slot5;
                    var10 = var9.length;
                    var5 = 1;
                    var5 = var10 - var5;
                    var5 = var9[var5];
                    var4 = var8[var4];
                    var6 = var6.bind(var7)(var4);
                    var4 = var6.getRRule;
                    var2 = _closure2_slot2;
                    var4 = var4.bind(var6)(var2);
                    var2 = var4.after;
                    var2 = var2.bind(var4)(var5);
                    var1 = var1 != var2;
                    if(!var1) { _fun0004_ip = 214; continue _fun0004 }
 210:
                    var1 = var2 <= var3;
 214:
                    return var1;
 216:
                    var1 = false;
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var1, var3);
            var1 = {};
            var1['recurrenceStartTimes'] = var4;
            var1['canViewMoreRecurrences'] = var3;
            var2 = function updateRecurrenceStartTimes() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0005_ip = 156; continue _fun0005 }
 16:
                    var2 = _closure2_slot3;
                    if(!(var3 != var2)) { _fun0005_ip = 156; continue _fun0005 }
 27:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 5;
                    var2 = var7[var4];
                    var3 = undefined;
                    var8 = var6.bind(var3)(var2);
                    var5 = var8.getRRule;
                    var2 = _closure2_slot2;
                    var10 = var5.bind(var8)(var2);
                    var5 = _closure2_slot5;
                    var8 = var5.length;
                    var2 = 1;
                    var2 = var8 - var2;
                    var9 = var5[var2];
                    var2 = _closure2_slot6;
                    var13 = _closure2_slot5;
                    var1 = new Array(0);
                    var12 = 0;
                    var14 = var1;
                    var5 = arraySpread(var14, var13, var12);
                    var4 = var7[var4];
                    var8 = var6.bind(var3)(var4);
                    var7 = var8.generateNextRecurrences;
                    var14 = 4;
                    var11 = true;
                    var15 = var8;
                    var13 = var10;
                    var12 = var9;
                    var13 = var15[var7](var14, var13, var12, var11, var10);
                    var14 = var1;
                    var12 = var5;
                    var4 = arraySpread(var14, var13, var12);
                    var1 = var2.bind(var3)(var1);
 156:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['updateRecurrenceStartTimes'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();