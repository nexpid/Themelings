// app/modules/dismissible_content/DismissibleContentFrameworkStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function hasAlreadySeenDCForGuild(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot9;
            var3 = var1.seenForGuildId;
            var2 = var3.get;
            var1 = arg2;
            var4 = var2.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var4.has;
            var2 = arg1;
            var1 = var3.bind(var4)(var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var8 = global;
    var10 = var8.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot8 = var2;
    var2 = {'numberOfDCsShownToday': 0, 'dailyCapPeriodStart': null, 'dismissibleContentSeenDuringSession': null, 'dailyCapOverridden': false, 'newUserMinAgeRequiredOverridden': false, 'renderedAtTimestamps': null, 'lastDCDismissed': null};
    var9 = var8.Set;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var2['dismissibleContentSeenDuringSession'] = var9;
    var9 = var8.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var2['renderedAtTimestamps'] = var9;
    var8 = var8.Map;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var14 = var9;
    var8 = new var14[var8](var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var2['seenForGuildId'] = var8;
    var _closure1_slot9 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function DismissibleContentFrameworkStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 10; continue _fun0003;
case 8:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 10:
                var1 = var2.bind(var3)(var4, var1);
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var2 = null;
                if(!(var2 != var1)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var5 = _closure1_slot9;
                var6 = var1.numberOfDCsShownToday;
                var7 = var2 != var6;
                var4 = 0;
                if(!var7) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var4 = var6;
case 13:
                var5['numberOfDCsShownToday'] = var4;
                var5 = _closure1_slot9;
                var4 = var1.dailyCapPeriodStart;
                var5['dailyCapPeriodStart'] = var4;
                var5 = _closure1_slot9;
                var6 = var1.dailyCapOverridden;
                var4 = var2 != var6;
                if(!var4) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var4 = var6;
case 15:
                var5['dailyCapOverridden'] = var4;
                var3 = _closure1_slot9;
                var4 = var1.newUserMinAgeRequiredOverridden;
                var1 = var2 != var4;
                if(!var1) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var1 = var4;
case 17:
                var3['newUserMinAgeRequiredOverridden'] = var1;
case 11:
                var5 = _closure1_slot9;
                var3 = global;
                var4 = var3.Set;
                var6 = var4.prototype;
                var6 = Object.create(var6, {constructor: {value: var4}});
                var8 = var6;
                var4 = new var8[var4](var7);
                var4 = var4 instanceof Object ? var4 : var6;
                var5['dismissibleContentSeenDuringSession'] = var4;
                var4 = _closure1_slot9;
                var3 = var3.Map;
                var5 = var3.prototype;
                var5 = Object.create(var5, {constructor: {value: var3}});
                var8 = var5;
                var3 = new var8[var3](var7);
                var3 = var3 instanceof Object ? var3 : var5;
                var4['seenForGuildId'] = var3;
                var1 = _closure1_slot9;
                var1['lastDCDismissed'] = var2;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'dailyCapOverridden';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot9;
            var1 = var1.dailyCapOverridden;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'newUserMinAgeRequiredOverridden';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot9;
            var1 = var1.newUserMinAgeRequiredOverridden;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'lastDCDismissed';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot9;
            var1 = var1.lastDCDismissed;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getRenderedAtTimestamp';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = _closure1_slot9;
            var3 = var1.renderedAtTimestamps;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'hasUserHitDCCap';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var6 = arg2;
                var3 = null;
                if(!(var3 != var4)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 6;
                var5 = var5[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var5);
                var5 = var2.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
                var2 = var5.has;
                var2 = var2.bind(var5)(var4);
                if(var2) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                var1 = _closure1_slot9;
                var1 = var1.dailyCapOverridden;
                if(var1) { _fun0005_ip = 21; continue _fun0005 }
case 19:
                if(!(var3 != var4)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                var1 = var3 != var6;
                if(!var1) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 7;
                var5 = var5[var2];
                var2 = undefined;
                var5 = var7.bind(var2)(var5);
                var2 = var5.isGuildDismissibleConent;
                var1 = var2.bind(var5)(var4);
case 25:
                if(!var1) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                if(!(var3 != var6)) { _fun0005_ip = 27; continue _fun0005 }
case 29:
                var5 = _closure1_slot11;
                var2 = undefined;
                var2 = var5.bind(var2)(var4, var6);
                if(var2) { _fun0005_ip = 30; continue _fun0005 }
case 27:
                if(var1) { _fun0005_ip = 23; continue _fun0005 }
case 31:
                var1 = _closure1_slot9;
                var2 = var1.dismissibleContentSeenDuringSession;
                var1 = var2.has;
                var1 = var1.bind(var2)(var4);
                if(!var1) { _fun0005_ip = 23; continue _fun0005 }
case 32:
                var1 = false;
                return var1;
case 23:
                var1 = global;
                var1 = var1.Date;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var12 = var2;
                var1 = new var12[var1](var11);
                var7 = var1 instanceof Object ? var1 : var2;
                var1 = var7.setHours;
                var4 = 0;
                var12 = var7;
                var11 = 0;
                var10 = 0;
                var9 = 0;
                var8 = 0;
                var1 = var12[var1](var11, var10, var9, var8, var7);
                var2 = _closure1_slot9;
                var2 = var2.dailyCapPeriodStart;
                var2 = var3 != var2;
                if(!var2) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                var5 = _closure1_slot9;
                var6 = var5.dailyCapPeriodStart;
                var5 = var7.getTime;
                var5 = var5.bind(var7)();
                var2 = var6 < var5;
case 33:
                if(!var2) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                var2 = _closure1_slot9;
                var2['numberOfDCsShownToday'] = var4;
                var2 = _closure1_slot9;
                var2['dailyCapPeriodStart'] = var3;
case 35:
                var1 = _closure1_slot9;
                var2 = var1.numberOfDCsShownToday;
                var1 = 3;
                var1 = var2 >= var1;
                return var1;
case 30:
                var1 = false;
                return var1;
case 21:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'DismissibleContentFrameworkStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = new Array(1);
    var9 = function(arg1) {
        var1 = {};
        var3 = arg1;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        return var1;
    };
    var2[0] = var9;
    var8['migrations'] = var2;
    var2 = 10;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleLogout() {
        var2 = {};
        var6 = _closure1_slot9;
        var7 = var2;
        var3 = copyDataProperties(var7, var6);
        var3 = global;
        var4 = var3.Set;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var8 = var5;
        var4 = new var8[var4](var7);
        var5 = var4 instanceof Object ? var4 : var5;
        var4 = 'dismissibleContentSeenDuringSession';
        var2[var4] = var5;
        var4 = var3.Map;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var8 = var5;
        var4 = new var8[var4](var7);
        var5 = var4 instanceof Object ? var4 : var5;
        var4 = 'renderedAtTimestamps';
        var2[var4] = var5;
        var3 = var3.Map;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var8 = var4;
        var3 = new var8[var3](var7);
        var4 = var3 instanceof Object ? var3 : var4;
        var3 = 'seenForGuildId';
        var2[var3] = var4;
        _closure1_slot9 = var2;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var9;
    var9 = function handleDailyCapOverride(arg1) {
        var1 = arg1;
        var2 = var1.value;
        var1 = _closure1_slot9;
        var1['dailyCapOverridden'] = var2;
        var1 = undefined;
        return var1;
    };
    var2['DCF_DAILY_CAP_OVERRIDE'] = var9;
    var9 = function handleNewUserMinAgeRequiredOverride(arg1) {
        var1 = arg1;
        var2 = var1.value;
        var1 = _closure1_slot9;
        var1['newUserMinAgeRequiredOverridden'] = var2;
        var1 = undefined;
        return var1;
    };
    var2['DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE'] = var9;
    var9 = function handleDCShownToUser(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var7 = var1.dismissibleContent;
            var8 = var1.guildId;
            var2 = global;
            var1 = var2.Date;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var13 = var3;
            var1 = new var13[var1](var12);
            var5 = var1 instanceof Object ? var1 : var3;
            var1 = _closure1_slot9;
            var4 = var1.renderedAtTimestamps;
            var3 = var4.set;
            var1 = var5.getTime;
            var1 = var1.bind(var5)();
            var1 = var3.bind(var4)(var7, var1);
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var4 = var3.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
            var3 = var4.has;
            var3 = var3.bind(var4)(var7);
            if(var3) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            var3 = _closure1_slot9;
            var3 = var3.dailyCapOverridden;
            if(var3) { _fun0006_ip = 37; continue _fun0006 }
case 39:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 7;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isGuildDismissibleConent;
            var4 = var3.bind(var4)(var7);
            if(!var4) { _fun0006_ip = 40; continue _fun0006 }
case 41:
            var3 = null;
            var4 = var3 != var8;
case 40:
            if(var4) { _fun0006_ip = 42; continue _fun0006 }
case 32:
            var3 = _closure1_slot9;
            var5 = var3.dismissibleContentSeenDuringSession;
            var3 = var5.has;
            var3 = var3.bind(var5)(var7);
            if(var3) { _fun0006_ip = 37; continue _fun0006 }
case 42:
            if(!var4) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var3 = _closure1_slot11;
            var3 = var3.bind(var1)(var7, var8);
            if(var3) { _fun0006_ip = 37; continue _fun0006 }
case 43:
            var3 = _closure1_slot9;
            if(var4) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var5 = var3.dismissibleContentSeenDuringSession;
            var4 = var5.add;
            var4 = var4.bind(var5)(var7);
            _fun0006_ip = 47; continue _fun0006;
case 45:
            var4 = var3.seenForGuildId;
            var3 = var4.get;
            var5 = var3.bind(var4)(var8);
            var3 = null;
            if(!(var3 == var5)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var3 = var2.Set;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var13 = var4;
            var3 = new var13[var3](var12);
            var5 = var3 instanceof Object ? var3 : var4;
case 48:
            var3 = var5.add;
            var3 = var3.bind(var5)(var7);
            var3 = _closure1_slot9;
            var4 = var3.seenForGuildId;
            var3 = var4.set;
            var3 = var3.bind(var4)(var8, var5);
case 47:
            var3 = _closure1_slot9;
            var4 = var3.dailyCapPeriodStart;
            var3 = null;
            if(!(var3 == var4)) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var2 = var2.Date;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var13 = var3;
            var2 = new var13[var2](var12);
            var4 = var2 instanceof Object ? var2 : var3;
            var3 = var4.setHours;
            var13 = var4;
            var12 = 0;
            var11 = 0;
            var10 = 0;
            var9 = 0;
            var2 = var13[var3](var12, var11, var10, var9, var8);
            var3 = _closure1_slot9;
            var2 = var4.getTime;
            var2 = var2.bind(var4)();
            var3['dailyCapPeriodStart'] = var2;
case 50:
            var3 = _closure1_slot9;
            var4 = var3.numberOfDCsShownToday;
            var2 = 1;
            var2 = var4 + var2;
            var3['numberOfDCsShownToday'] = var2;
            var2 = _closure1_slot9;
            var3 = var2.numberOfDCsShownToday;
            var2 = 3;
            if(!(var3 > var2)) { _fun0006_ip = 37; continue _fun0006 }
case 52:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot8;
            var3 = var2.DCF_CAP_EXCEEDED;
            var2 = {};
            var8 = 'daily_cap';
            var2['cap_type'] = var8;
            var2['dismissible_content'] = var7;
            var6 = _closure1_slot9;
            var6 = var6.numberOfDCsShownToday;
            var2['shown_dcs'] = var6;
            var2 = var4.bind(var5)(var3, var2);
case 37:
            return var1;
        }
    };
    var2['DCF_HANDLE_DC_SHOWN'] = var9;
    var9 = function handleDCDismissed(arg1) {
        var1 = arg1;
        var3 = var1.dismissibleContent;
        var2 = _closure1_slot9;
        var2['lastDCDismissed'] = var3;
        var1 = _closure1_slot9;
        var2 = var1.renderedAtTimestamps;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['DCF_HANDLE_DC_DISMISSED'] = var9;
    var9 = function handleResetLastDCDismissed(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var3 = var1.dismissibleContent;
            var2 = _closure1_slot9;
            var1 = null;
            var4 = var1 != var3;
            if(!var4) { _fun0007_ip = 53; continue _fun0007 }
case 54:
            var1 = var3;
case 53:
            var2['lastDCDismissed'] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['DCF_OVERRIDE_LAST_DC_DISMISSED'] = var9;
    var4 = function resetStore() {
        var3 = _closure1_slot9;
        var2 = null;
        var3['dailyCapPeriodStart'] = var2;
        var4 = _closure1_slot9;
        var3 = 0;
        var4['numberOfDCsShownToday'] = var3;
        var5 = _closure1_slot9;
        var3 = global;
        var4 = var3.Set;
        var6 = var4.prototype;
        var6 = Object.create(var6, {constructor: {value: var4}});
        var7 = var6;
        var4 = new var7[var4](var6);
        var4 = var4 instanceof Object ? var4 : var6;
        var5['dismissibleContentSeenDuringSession'] = var4;
        var4 = _closure1_slot9;
        var3 = var3.Map;
        var5 = var3.prototype;
        var5 = Object.create(var5, {constructor: {value: var3}});
        var7 = var5;
        var3 = new var7[var3](var6);
        var3 = var3 instanceof Object ? var3 : var5;
        var4['seenForGuildId'] = var3;
        var1 = _closure1_slot9;
        var1['lastDCDismissed'] = var2;
        var1 = undefined;
        return var1;
    };
    var2['DCF_RESET'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/dismissible_content/DismissibleContentFrameworkStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();