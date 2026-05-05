// app/modules/parent_tools/RestrictedHoursManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var2 = function getCurrentRestrictedHoursState() {
        var2 = _closure1_slot9;
        var1 = var2.isCurrentUserInRestrictedHours;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot15 = var2;
    var1 = function dispatchWarningIfNeeded(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var1 = var4.rule;
            var6 = var1.ruleId;
            var5 = var4.startAtMs;
            var3 = global;
            var1 = var3.HermesInternal;
            var2 = var1.concat;
            var11 = '';
            var1 = ':';
            var2 = var2.bind(var11)(var6, var1, var5);
            var5 = _closure1_slot13;
            if(!(var2 !== var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var12 = var4.rule;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 7;
            var4 = var8[var4];
            var5 = undefined;
            var4 = var9.bind(var5)(var4);
            var10 = var4.intl;
            var7 = var10.string;
            var4 = _closure1_slot1;
            var6 = 8;
            var6 = var8[var6];
            var6 = var4.bind(var5)(var6);
            var6 = var6["0JlDg0"];
            var7 = var7.bind(var10)(var6);
            var6 = 9;
            var10 = var8[var6];
            var14 = var9.bind(var5)(var10);
            var13 = var14.formatDays;
            var10 = var12.days;
            var10 = var13.bind(var14)(var10);
            var6 = var8[var6];
            var9 = var9.bind(var5)(var6);
            var6 = var9.getScheduleRuleDateRange;
            var9 = var6.bind(var9)(var12);
            var3 = var3.HermesInternal;
            var6 = var3.concat;
            var3 = ' ';
            var6 = var6.bind(var11)(var10, var3, var9);
            var3 = var6.trim;
            var6 = var3.bind(var6)();
            var3 = 10;
            var3 = var8[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.dispatch;
            var3 = {};
            var8 = 'RESTRICTED_HOURS_WARNING';
            var3['type'] = var8;
            var3['title'] = var7;
            var3['subtitle'] = var6;
            var3 = var4.bind(var5)(var3);
            _closure1_slot13 = var2;
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function scheduleUpcomingWarning() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = _closure1_slot12;
            var5 = null;
            if(!(var5 != var1)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var1 = global;
            var6 = var1.clearTimeout;
            var4 = _closure1_slot12;
            var1 = undefined;
            var1 = var6.bind(var1)(var4);
            _closure1_slot12 = var5;
case 8:
            var4 = global;
            var1 = var4.Date;
            var6 = var1.prototype;
            var6 = Object.create(var6, {constructor: {value: var1}});
            var15 = var6;
            var1 = new var15[var1](var14);
            var12 = var1 instanceof Object ? var1 : var6;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 11;
            var6 = var6[var1];
            var1 = undefined;
            var8 = var7.bind(var1)(var6);
            var7 = var8.getIsFamilyCenterV3Enabled;
            var6 = {};
            var9 = 'RestrictedHoursManager';
            var6['location'] = var9;
            var7 = var7.bind(var8)(var6);
            var6 = null;
            if(!var7) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var8 = _closure1_slot8;
            var7 = var8.getCurrentUser;
            var7 = var7.bind(var8)();
            var9 = var5 == var7;
            var8 = undefined;
            if(var9) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var8 = var7.restrictedSchedule;
case 12:
            var7 = var5 == var8;
            var6 = null;
            if(var7) { _fun0003_ip = 10; continue _fun0003 }
case 14:
            var7 = var8.getNextStartInfo;
            var9 = var7.bind(var8)(var12);
            var8 = var5 == var9;
            var7 = null;
            if(var8) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var8 = {};
            var10 = var9.minutesUntil;
            var8['minutesUntil'] = var10;
            var10 = var4.Date;
            var11 = var10.prototype;
            var11 = Object.create(var11, {constructor: {value: var10}});
            var15 = var11;
            var14 = var12;
            var10 = new var15[var10](var14, var13);
            var12 = var10 instanceof Object ? var10 : var11;
            var11 = var12.setSeconds;
            var10 = 0;
            var11 = var11.bind(var12)(var10, var10);
            var12 = var9.minutesUntil;
            var10 = 60;
            var12 = var10 * var12;
            var10 = 1000;
            var10 = var12 * var10;
            var10 = var11 + var10;
            var8['startAtMs'] = var10;
            var9 = var9.rule;
            var8['rule'] = var9;
            var7 = var8;
case 15:
            var6 = var7;
case 10:
            if(!(var5 != var6)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var5 = var6.minutesUntil;
            var7 = 16;
            if(!(!(var5 <= var7))) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var5 = var6.minutesUntil;
            var10 = var5 - var7;
            var9 = var4.Math;
            var8 = var9.max;
            var7 = 0;
            var5 = 60;
            var10 = var5 * var10;
            var5 = 1000;
            var5 = var10 * var5;
            var8 = var8.bind(var9)(var7, var5);
            var7 = var4.setTimeout;
            var5 = function() {
                var2 = null;
                _closure1_slot12 = var2;
                var2 = _closure1_slot17;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var5 = var7.bind(var1)(var5, var8);
            _closure1_slot12 = var5;
            _fun0003_ip = 17; continue _fun0003;
case 19:
            var5 = _closure1_slot16;
            var5 = var5.bind(var1)(var6);
            var5 = var4.setTimeout;
            var4 = function() {
                var2 = null;
                _closure1_slot12 = var2;
                var2 = _closure1_slot17;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var2 = 60000;
            var2 = var5.bind(var1)(var4, var2);
            _closure1_slot12 = var2;
case 17:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function checkAndUpdateModal() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot15;
            var1 = undefined;
            var3 = var3.bind(var1)();
            var4 = _closure1_slot10;
            if(!(var3 !== var4)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            _closure1_slot10 = var3;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 10;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.dispatch;
            var3 = {};
            var6 = 'RESTRICTED_HOURS_STATE_CHANGE';
            var3['type'] = var6;
            var6 = _closure1_slot10;
            var3['isInRestrictedHours'] = var6;
            var3 = var4.bind(var5)(var3);
            var3 = _closure1_slot10;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 12;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            if(var3) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var3 = var4.closeRestrictedHoursModal;
            var3 = var3.bind(var4)();
            _fun0004_ip = 25; continue _fun0004;
case 23:
            var3 = var4.openRestrictedHoursModal;
            var3 = var3.bind(var4)();
case 25:
            var2 = _closure1_slot17;
            var2 = var2.bind(var1)();
case 21:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function handleLogout() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = false;
            _closure1_slot10 = var1;
            var2 = null;
            _closure1_slot13 = var2;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 10;
            var4 = var6[var1];
            var1 = undefined;
            var7 = var5.bind(var1)(var4);
            var5 = var7.dispatch;
            var4 = {'type': 'RESTRICTED_HOURS_STATE_CHANGE', 'isInRestrictedHours': false};
            var4 = var5.bind(var7)(var4);
            var5 = _closure1_slot0;
            var4 = 12;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.closeRestrictedHoursModal;
            var4 = var4.bind(var5)();
            var4 = _closure1_slot12;
            if(!(var2 != var4)) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var4 = global;
            var5 = var4.clearTimeout;
            var4 = _closure1_slot12;
            var4 = var5.bind(var1)(var4);
            _closure1_slot12 = var2;
case 26:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function handleScheduleUpdate() {
        var3 = _closure1_slot18;
        var1 = undefined;
        var3 = var3.bind(var1)();
        var2 = _closure1_slot17;
        var2 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = false;
    var _closure1_slot10 = var5;
    var5 = null;
    var _closure1_slot11 = var5;
    var _closure1_slot12 = var5;
    var _closure1_slot13 = var5;
    var5 = 13;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var4 = function(arg1) {
        var4 = function RestrictedHoursManager(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot3;
                var2 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot14;
                var1 = var1.bind(var4)();
                if(var1) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0006_ip = 30; continue _fun0006;
case 28:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 30:
                var1 = var2.bind(var4)(var5, var1);
                var2 = global;
                var2 = var2.Map;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var14 = var4;
                var2 = new var14[var2](var13);
                var6 = var2 instanceof Object ? var2 : var4;
                var5 = var6.set;
                var2 = _closure1_slot8;
                var4 = _closure1_slot20;
                var6 = var5.bind(var6)(var2, var4);
                var5 = var6.set;
                var2 = _closure1_slot9;
                var2 = var5.bind(var6)(var2, var4);
                var1['stores'] = var2;
                var2 = {};
                var2['POST_CONNECTION_OPEN'] = var4;
                var2['CURRENT_USER_UPDATE'] = var4;
                var3 = _closure1_slot19;
                var2['LOGOUT'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = _closure1_slot15;
                var1 = undefined;
                var3 = var3.bind(var1)();
                _closure1_slot10 = var3;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 10;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.dispatch;
                var3 = {};
                var6 = 'RESTRICTED_HOURS_STATE_CHANGE';
                var3['type'] = var6;
                var6 = _closure1_slot10;
                var3['isInRestrictedHours'] = var6;
                var3 = var4.bind(var5)(var3);
                var3 = _closure1_slot10;
                if(!var3) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 12;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.openRestrictedHoursModal;
                var3 = var3.bind(var4)();
case 31:
                var3 = global;
                var5 = var3.setInterval;
                var4 = _closure1_slot18;
                var3 = 60000;
                var3 = var5.bind(var1)(var4, var3);
                _closure1_slot11 = var3;
                var2 = _closure1_slot17;
                var2 = var2.bind(var1)();
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var6 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = _closure1_slot11;
                var1 = null;
                if(!(var1 != var2)) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                var2 = global;
                var5 = var2.clearInterval;
                var4 = _closure1_slot11;
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                _closure1_slot11 = var1;
case 33:
                var2 = _closure1_slot12;
                if(!(var1 != var2)) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                var2 = global;
                var5 = var2.clearTimeout;
                var4 = _closure1_slot12;
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                _closure1_slot12 = var1;
case 35:
                _closure1_slot13 = var1;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.closeRestrictedHoursModal;
                var2 = var2.bind(var4)();
                var2 = false;
                _closure1_slot10 = var2;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var14 = var5;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/parent_tools/RestrictedHoursManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['getCurrentRestrictedHoursState'] = var2;
    return var1;
})();