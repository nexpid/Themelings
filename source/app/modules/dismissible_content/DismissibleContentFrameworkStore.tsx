// app/modules/dismissible_content/DismissibleContentFrameworkStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
 0:
            var1 = _closure1_slot9;
            var3 = var1.seenForGuildId;
            var2 = var3.get;
            var1 = arg2;
            var4 = var2.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0002_ip = 48; continue _fun0002 }
 35:
            var3 = var4.has;
            var2 = arg1;
            var1 = var3.bind(var4)(var2);
 48:
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
 0:
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
                if(var1) { _fun0003_ip = 69; continue _fun0003 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 105; continue _fun0003;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
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
 0:
                var1 = arg1;
                var2 = null;
                if(!(var2 != var1)) { _fun0004_ip = 108; continue _fun0004 }
 9:
                var5 = _closure1_slot9;
                var6 = var1.numberOfDCsShownToday;
                var7 = var2 != var6;
                var4 = 0;
                if(!var7) { _fun0004_ip = 34; continue _fun0004 }
 31:
                var4 = var6;
 34:
                var5['numberOfDCsShownToday'] = var4;
                var5 = _closure1_slot9;
                var4 = var1.dailyCapPeriodStart;
                var5['dailyCapPeriodStart'] = var4;
                var5 = _closure1_slot9;
                var6 = var1.dailyCapOverridden;
                var4 = var2 != var6;
                if(!var4) { _fun0004_ip = 76; continue _fun0004 }
 73:
                var4 = var6;
 76:
                var5['dailyCapOverridden'] = var4;
                var3 = _closure1_slot9;
                var4 = var1.newUserMinAgeRequiredOverridden;
                var1 = var2 != var4;
                if(!var1) { _fun0004_ip = 102; continue _fun0004 }
 99:
                var1 = var4;
 102:
                var3['newUserMinAgeRequiredOverridden'] = var1;
 108:
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
 0:
                var4 = arg1;
                var6 = arg2;
                var3 = null;
                if(!(var3 != var4)) { _fun0005_ip = 75; continue _fun0005 }
 12:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 6;
                var5 = var5[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var5);
                var5 = var2.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
                var2 = var5.has;
                var2 = var2.bind(var5)(var4);
                if(var2) { _fun0005_ip = 324; continue _fun0005 }
 59:
                var1 = _closure1_slot9;
                var1 = var1.dailyCapOverridden;
                if(var1) { _fun0005_ip = 324; continue _fun0005 }
 75:
                if(!(var3 != var4)) { _fun0005_ip = 183; continue _fun0005 }
 79:
                var1 = var3 != var6;
                if(!var1) { _fun0005_ip = 122; continue _fun0005 }
 86:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 7;
                var5 = var5[var2];
                var2 = undefined;
                var5 = var7.bind(var2)(var5);
                var2 = var5.isGuildDismissibleConent;
                var1 = var2.bind(var5)(var4);
 122:
                if(!var1) { _fun0005_ip = 150; continue _fun0005 }
 125:
                if(!(var3 != var6)) { _fun0005_ip = 150; continue _fun0005 }
 129:
                var5 = _closure1_slot11;
                var2 = undefined;
                var2 = var5.bind(var2)(var4, var6);
                if(var2) { _fun0005_ip = 320; continue _fun0005 }
 150:
                if(var1) { _fun0005_ip = 183; continue _fun0005 }
 153:
                var1 = _closure1_slot9;
                var2 = var1.dismissibleContentSeenDuringSession;
                var1 = var2.has;
                var1 = var1.bind(var2)(var4);
                if(!var1) { _fun0005_ip = 183; continue _fun0005 }
 179:
                var1 = false;
                return var1;
 183:
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
                if(!var2) { _fun0005_ip = 278; continue _fun0005 }
 254:
                var5 = _closure1_slot9;
                var6 = var5.dailyCapPeriodStart;
                var5 = var7.getTime;
                var5 = var5.bind(var7)();
                var2 = var6 < var5;
 278:
                if(!var2) { _fun0005_ip = 301; continue _fun0005 }
 281:
                var2 = _closure1_slot9;
                var2['numberOfDCsShownToday'] = var4;
                var2 = _closure1_slot9;
                var2['dailyCapPeriodStart'] = var3;
 301:
                var1 = _closure1_slot9;
                var2 = var1.numberOfDCsShownToday;
                var1 = 3;
                var1 = var2 >= var1;
                return var1;
 320:
                var1 = false;
                return var1;
 324:
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
 0:
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
            if(var3) { _fun0006_ip = 525; continue _fun0006 }
 120:
            var3 = _closure1_slot9;
            var3 = var3.dailyCapOverridden;
            if(var3) { _fun0006_ip = 525; continue _fun0006 }
 136:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 7;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isGuildDismissibleConent;
            var4 = var3.bind(var4)(var7);
            if(!var4) { _fun0006_ip = 176; continue _fun0006 }
 170:
            var3 = null;
            var4 = var3 != var8;
 176:
            if(var4) { _fun0006_ip = 205; continue _fun0006 }
 179:
            var3 = _closure1_slot9;
            var5 = var3.dismissibleContentSeenDuringSession;
            var3 = var5.has;
            var3 = var3.bind(var5)(var7);
            if(var3) { _fun0006_ip = 525; continue _fun0006 }
 205:
            if(!var4) { _fun0006_ip = 224; continue _fun0006 }
 208:
            var3 = _closure1_slot11;
            var3 = var3.bind(var1)(var7, var8);
            if(var3) { _fun0006_ip = 525; continue _fun0006 }
 224:
            var3 = _closure1_slot9;
            if(var4) { _fun0006_ip = 249; continue _fun0006 }
 231:
            var5 = var3.dismissibleContentSeenDuringSession;
            var4 = var5.add;
            var4 = var4.bind(var5)(var7);
            _fun0006_ip = 328; continue _fun0006;
 249:
            var4 = var3.seenForGuildId;
            var3 = var4.get;
            var5 = var3.bind(var4)(var8);
            var3 = null;
            if(!(var3 == var5)) { _fun0006_ip = 297; continue _fun0006 }
 271:
            var3 = var2.Set;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var13 = var4;
            var3 = new var13[var3](var12);
            var5 = var3 instanceof Object ? var3 : var4;
 297:
            var3 = var5.add;
            var3 = var3.bind(var5)(var7);
            var3 = _closure1_slot9;
            var4 = var3.seenForGuildId;
            var3 = var4.set;
            var3 = var3.bind(var4)(var8, var5);
 328:
            var3 = _closure1_slot9;
            var4 = var3.dailyCapPeriodStart;
            var3 = null;
            if(!(var3 == var4)) { _fun0006_ip = 411; continue _fun0006 }
 344:
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
 411:
            var3 = _closure1_slot9;
            var4 = var3.numberOfDCsShownToday;
            var2 = 1;
            var2 = var4 + var2;
            var3['numberOfDCsShownToday'] = var2;
            var2 = _closure1_slot9;
            var3 = var2.numberOfDCsShownToday;
            var2 = 3;
            if(!(var3 > var2)) { _fun0006_ip = 525; continue _fun0006 }
 451:
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
 525:
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
 0:
            var1 = arg1;
            var3 = var1.dismissibleContent;
            var2 = _closure1_slot9;
            var1 = null;
            var4 = var1 != var3;
            if(!var4) { _fun0007_ip = 28; continue _fun0007 }
 25:
            var1 = var3;
 28:
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