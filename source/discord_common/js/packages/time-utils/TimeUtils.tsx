// discord_common/js/packages/time-utils/TimeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var17 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var18 = dependencyMap;
    var _closure1_slot0 = var17;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var18;
    var8 = function sleep(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var5 = 'number';
            var3 = typeof var4;
            var2 = var4;
            if(!(var5 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.asMilliseconds;
            var2 = var3.bind(var4)();
case 2:
            var _closure2_slot0 = var2;
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var6 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = global;
                var4 = var1.setTimeout;
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = function() {
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    return var1;
                };
                var2 = var4.bind(var1)(var2, var3);
                return var1;
            };
            var7 = var2;
            var1 = new var7[var3](var6, var5);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var _closure1_slot13 = var8;
    var6 = function convertMinutesToGivenTimeUnit(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = arg2;
            var4 = _closure1_slot11;
            var4 = var4.NONE;
            if(!(var4 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = _closure1_slot11;
            var4 = var4.SECONDS;
            if(!(var4 !== var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = _closure1_slot11;
            var4 = var4.MINUTES;
            if(!(var4 !== var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot11;
            var4 = var4.HOURS;
            if(!(var4 !== var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = _closure1_slot11;
            var4 = var4.DAYS;
            if(!(var4 !== var3)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var4 = _closure1_slot11;
            var4 = var4.WEEKS;
            if(!(var4 !== var3)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var4 = _closure1_slot11;
            var4 = var4.MONTHS;
            if(!(var4 !== var3)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var1 = _closure1_slot11;
            var1 = var1.YEARS;
            if(!(var1 !== var3)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var1 = undefined;
            return var1;
case 18:
            var1 = 60;
            var3 = var2 / var1;
            var1 = 24;
            var3 = var3 / var1;
            var1 = 365;
            var1 = var3 / var1;
            return var1;
case 16:
            var1 = 60;
            var3 = var2 / var1;
            var1 = 24;
            var3 = var3 / var1;
            var1 = 31;
            var1 = var3 / var1;
            return var1;
case 14:
            var1 = 60;
            var3 = var2 / var1;
            var1 = 24;
            var3 = var3 / var1;
            var1 = 7;
            var1 = var3 / var1;
            return var1;
case 12:
            var1 = 60;
            var3 = var2 / var1;
            var1 = 24;
            var1 = var3 / var1;
            return var1;
case 10:
            var1 = 60;
            var1 = var2 / var1;
            return var1;
case 8:
            return var2;
case 6:
            var1 = 60;
            var1 = var1 * var2;
            return var1;
case 4:
            var1 = 0;
            return var1;
        }
    };
    var _closure1_slot14 = var6;
    var4 = function getTimeUnit(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var5 = _closure1_slot12;
            var2 = var5.findIndex;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.max;
                    var2 = var1.unit;
                    var1 = _closure1_slot11;
                    var1 = var1.NONE;
                    var1 = var2 === var1;
                    if(!var1) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var2 = _closure2_slot0;
                    var1 = var2 === var3;
case 20:
                    if(var1) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var2 = _closure2_slot0;
                    var1 = var2 < var3;
case 22:
                    return var1;
                }
            };
            var7 = var2.bind(var5)(var1);
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 6;
            var1 = var5[var1];
            var6 = undefined;
            var5 = var2.bind(var6)(var1);
            var2 = _closure1_slot12;
            var1 = function(arg1) {
                var1 = arg1;
                var3 = var1.unit;
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var1 = var5.bind(var6)(var2, var1, var7);
            var2 = null;
            if(!(var2 == var1)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var5 = _closure1_slot12;
            var4 = var5.find;
            var3 = function(arg1) {
                var1 = arg1;
                var3 = var1.unit;
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var2 = var3.unit;
case 26:
            return var2;
case 24:
            var1 = var1.unit;
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var5);
    var5 = 0;
    var7 = var18[var5];
    var1 = undefined;
    var7 = var9.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var19 = 1;
    var7 = var18[var19];
    var7 = var9.bind(var1)(var7);
    var7 = 2;
    var7 = var18[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var18[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var18[var7];
    var7 = var17.bind(var1)(var7);
    var15 = function _now() {
        var1 = global;
        var3 = var1.Math;
        var2 = var3.floor;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 5;
        var4 = var7[var1];
        var5 = undefined;
        var4 = var6.bind(var5)(var4);
        var4 = var4.timeOrigin;
        var1 = var7[var1];
        var1 = var6.bind(var5)(var1);
        var5 = var1.performance;
        var1 = var5.now;
        var1 = var1.bind(var5)();
        var1 = var4 + var1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot7 = var15;
    var7 = function() {
        var4 = _closure1_slot6;
        var3 = function ControllableTimeStampProducer() {
            var3 = this;
            var4 = _closure1_slot5;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = 0;
            var3['time'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'now';
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            var1 = var1.time;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'set';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['time'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'increase';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = this;
            var3 = var2.time;
            var1 = arg1;
            var1 = var3 + var1;
            var2['time'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'reset';
        var1['key'] = var6;
        var5 = function value() {
            var2 = 0;
            var1 = this;
            var1['time'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var14 = var7.bind(var1)();
    var7 = function() {
        var4 = _closure1_slot6;
        var3 = function TimeStampProducerImpl() {
            var4 = _closure1_slot5;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var5 = 'now';
        var1['key'] = var5;
        var2 = function value() {
            var2 = _closure1_slot7;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var7 = var7.bind(var1)();
    var9 = var7.prototype;
    var9 = Object.create(var9, {constructor: {value: var7}});
    var24 = var9;
    var7 = new var24[var7](var23);
    var13 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot8 = var13;
    var7 = function() {
        var4 = _closure1_slot6;
        var3 = function TimeSpan(arg1, arg2, arg3, arg4) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var6 = arg1;
                var4 = arg2;
                var5 = arg3;
                var8 = arg4;
                var3 = this;
                var _closure3_slot0 = var3;
                var9 = _closure1_slot5;
                var7 = _closure2_slot0;
                var1 = undefined;
                var7 = var9.bind(var1)(var3, var7);
                var7 = 0;
                var3['milliseconds'] = var7;
                var9 = function() {
                    var1 = _closure3_slot0;
                    var1 = var1.milliseconds;
                    return var1;
                };
                var3['asMilliseconds'] = var9;
                var9 = function() {
                    var1 = _closure3_slot0;
                    var2 = var1.milliseconds;
                    var1 = 1000;
                    var1 = var2 / var1;
                    return var1;
                };
                var3['asSeconds'] = var9;
                var9 = function() {
                    var1 = _closure3_slot0;
                    var2 = var1.milliseconds;
                    var1 = 1000;
                    var2 = var2 / var1;
                    var1 = 60;
                    var1 = var2 / var1;
                    return var1;
                };
                var3['asMinutes'] = var9;
                var9 = function() {
                    var1 = _closure3_slot0;
                    var2 = var1.milliseconds;
                    var1 = 1000;
                    var1 = var2 / var1;
                    var2 = 60;
                    var1 = var1 / var2;
                    var1 = var1 / var2;
                    return var1;
                };
                var3['asHours'] = var9;
                var9 = function(arg1) {
                    var3 = _closure2_slot0;
                    var2 = var3.fromMilliseconds;
                    var1 = _closure3_slot0;
                    var4 = var1.milliseconds;
                    var1 = arg1;
                    var1 = var1.milliseconds;
                    var1 = var4 + var1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['add'] = var9;
                var9 = function(arg1) {
                    var3 = _closure2_slot0;
                    var2 = var3.fromMilliseconds;
                    var1 = _closure3_slot0;
                    var4 = var1.milliseconds;
                    var1 = arg1;
                    var1 = var1.milliseconds;
                    var1 = var4 - var1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['subtract'] = var9;
                var2 = function(arg1) {
                    var3 = _closure2_slot0;
                    var2 = var3.fromMilliseconds;
                    var1 = global;
                    var6 = var1.Math;
                    var5 = var6.max;
                    var1 = _closure3_slot0;
                    var4 = var1.milliseconds;
                    var1 = arg1;
                    var1 = var1.milliseconds;
                    var4 = var4 - var1;
                    var1 = 0;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['subtractOrZero'] = var2;
                var2 = var3.milliseconds;
                if(var8) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                var8 = 0;
case 28:
                var2 = var2 + var8;
                var3['milliseconds'] = var2;
                var8 = var3.milliseconds;
                if(var5) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                var5 = 0;
case 30:
                var2 = 1000;
                var5 = var2 * var5;
                var5 = var8 + var5;
                var3['milliseconds'] = var5;
                var8 = var3.milliseconds;
                if(var4) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                var4 = 0;
case 32:
                var4 = var2 * var4;
                var5 = 60;
                var4 = var4 * var5;
                var4 = var8 + var4;
                var3['milliseconds'] = var4;
                var4 = var3.milliseconds;
                if(var6) { _fun0005_ip = 10; continue _fun0005 }
case 34:
                var6 = 0;
case 10:
                var2 = var2 * var6;
                var2 = var2 * var5;
                var2 = var2 * var5;
                var2 = var4 + var2;
                var3['milliseconds'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'isGreaterThan';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var1 = this;
            var2 = var1.milliseconds;
            var1 = arg1;
            var1 = var1.milliseconds;
            var1 = var2 > var1;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'isGreaterOrEqualTo';
        var1['key'] = var6;
        var5 = function value(arg1) {
            var1 = this;
            var2 = var1.milliseconds;
            var1 = arg1;
            var1 = var1.milliseconds;
            var1 = var2 >= var1;
            return var1;
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var12 = var7.bind(var1)();
    var _closure1_slot9 = var12;
    var _closure1_slot3 = var12;
    var7 = function(arg1) {
        var4 = _closure1_slot3;
        var1 = var4.prototype;
        var2 = Object.create(var1, {constructor: {value: var4}});
        var5 = arg1;
        var9 = var2;
        var8 = 0;
        var7 = 0;
        var6 = 0;
        var1 = new var9[var4](var8, var7, var6, var5, var4);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var12['fromMilliseconds'] = var7;
    var7 = function(arg1) {
        var4 = _closure1_slot3;
        var1 = var4.prototype;
        var2 = Object.create(var1, {constructor: {value: var4}});
        var5 = arg1;
        var8 = var2;
        var7 = 0;
        var6 = 0;
        var1 = new var8[var4](var7, var6, var5, var4);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var12['fromSeconds'] = var7;
    var7 = function(arg1) {
        var4 = _closure1_slot3;
        var1 = var4.prototype;
        var2 = Object.create(var1, {constructor: {value: var4}});
        var6 = 0;
        var5 = arg1;
        var7 = var2;
        var1 = new var7[var4](var6, var5, var4);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var12['fromMinutes'] = var7;
    var7 = function(arg1) {
        var3 = _closure1_slot3;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var4 = arg1;
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var12['fromHours'] = var7;
    var7 = function() {
        var5 = function StopWatch() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = arguments[0];
                var3 = this;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0006_ip = 3; continue _fun0006 }
case 35:
                var2 = _closure1_slot8;
case 3:
                var5 = _closure1_slot5;
                var4 = _closure2_slot0;
                var4 = var5.bind(var1)(var3, var4);
                var3['timestampProducer'] = var2;
                var3['startTime'] = var1;
                var2 = 0;
                var3['timePassed'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot6;
        var1 = {};
        var3 = 'lastElapsed';
        var1['key'] = var3;
        var3 = function get() {
            var1 = this;
            var1 = var1.timePassed;
            return var1;
        };
        var1['get'] = var3;
        var3 = new Array(9);
        var3[0] = var1;
        var1 = {};
        var6 = 'lastStartTime';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1.startTime;
            return var1;
        };
        var1['get'] = var6;
        var3[1] = var1;
        var1 = {};
        var6 = 'start';
        var1['key'] = var6;
        var6 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = this;
                var3 = var2.startTime;
                var1 = null;
                if(!(var1 == var3)) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                var3 = var2.timestampProducer;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2['startTime'] = var1;
case 36:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var3[2] = var1;
        var1 = {};
        var6 = 'restart';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var3 = var2.timestampProducer;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            var2['startTime'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var3[3] = var1;
        var1 = {};
        var6 = 'reset';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var1 = undefined;
            var3['startTime'] = var1;
            var2 = 0;
            var3['timePassed'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var3[4] = var1;
        var1 = {};
        var6 = 'stop';
        var1['key'] = var6;
        var6 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = this;
                var3 = var2.startTime;
                var1 = null;
                if(!(var1 != var3)) { _fun0008_ip = 38; continue _fun0008 }
case 37:
                var3 = var2.timePassed;
                var4 = var2.timestampProducer;
                var1 = var4.now;
                var4 = var1.bind(var4)();
                var1 = var2.startTime;
                var1 = var4 - var1;
                var1 = var3 + var1;
                var2['timePassed'] = var1;
                var1 = undefined;
                var2['startTime'] = var1;
case 38:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var3[5] = var1;
        var1 = {};
        var6 = 'toggle';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = arg1;
                var2 = this;
                var3 = var2.isRunning;
                var3 = var3.bind(var2)();
                if(!(var1 !== var3)) { _fun0009_ip = 39; continue _fun0009 }
case 40:
                if(var1) { _fun0009_ip = 41; continue _fun0009 }
case 42:
                var1 = var2.stop;
                var1 = var1.bind(var2)();
                _fun0009_ip = 39; continue _fun0009;
case 41:
                var1 = var2.start;
                var1 = var1.bind(var2)();
case 39:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var3[6] = var1;
        var1 = {};
        var6 = 'elapsed';
        var1['key'] = var6;
        var6 = function elapsed() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = this;
                var3 = var1.startTime;
                var2 = null;
                if(!(var2 != var3)) { _fun0010_ip = 43; continue _fun0010 }
case 37:
                var3 = var1.timestampProducer;
                var2 = var3.now;
                var3 = var2.bind(var3)();
                var2 = var1.startTime;
                var5 = var3 - var2;
                var4 = _closure1_slot9;
                var3 = var4.fromMilliseconds;
                var2 = var1.timePassed;
                var2 = var2 + var5;
                var2 = var3.bind(var4)(var2);
                return var2;
case 43:
                var3 = _closure1_slot9;
                var2 = var3.fromMilliseconds;
                var1 = var1.timePassed;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1['value'] = var6;
        var3[7] = var1;
        var1 = {};
        var6 = 'isRunning';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.startTime;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var1['value'] = var6;
        var3[8] = var1;
        var1 = {};
        var6 = 'startNew';
        var1['key'] = var6;
        var2 = function value() {
            var1 = _closure2_slot0;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var3 = var2;
            var1 = new var3[var1](var2);
            var1 = var1 instanceof Object ? var1 : var2;
            var2 = var1.start;
            var2 = var2.bind(var1)();
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var5, var3, var2);
        return var1;
    };
    var11 = var7.bind(var1)();
    var _closure1_slot10 = var11;
    var7 = function() {
        var4 = _closure1_slot6;
        var3 = function DurationEnabled(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var4 = arg1;
                var6 = arguments[1];
                var2 = this;
                var1 = undefined;
                if(!(var6 === var1)) { _fun0011_ip = 44; continue _fun0011 }
case 37:
                var6 = _closure1_slot8;
case 44:
                var7 = _closure1_slot5;
                var5 = _closure2_slot0;
                var5 = var7.bind(var1)(var2, var5);
                var3 = _closure1_slot10;
                var5 = var3.prototype;
                var5 = Object.create(var5, {constructor: {value: var3}});
                var10 = var5;
                var9 = var6;
                var3 = new var10[var3](var9, var8);
                var3 = var3 instanceof Object ? var3 : var5;
                var2['stopwatch'] = var3;
                var2['state'] = var4;
                var3 = var2.stopwatch;
                var2 = var3.toggle;
                var2 = var2.bind(var3)(var4);
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'value';
        var1['key'] = var2;
        var2 = function get() {
            var1 = this;
            var1 = var1.state;
            return var1;
        };
        var1['get'] = var2;
        var2 = function set(arg1) {
            var2 = arg1;
            var1 = this;
            var4 = var1.stopwatch;
            var3 = var4.toggle;
            var3 = var3.bind(var4)(var2);
            var1['state'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['set'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'reset';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var3 = var1.stopwatch;
            var2 = var3.reset;
            var2 = var2.bind(var3)();
            var3 = var1.stopwatch;
            var2 = var3.toggle;
            var1 = var1.state;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'totalDuration';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.stopwatch;
            var1 = var2.elapsed;
            var2 = var1.bind(var2)();
            var1 = var2.asMilliseconds;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'totalDurationSeconds';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var2 = var1.stopwatch;
            var1 = var2.elapsed;
            var2 = var1.bind(var2)();
            var1 = var2.asSeconds;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var10 = var7.bind(var1)();
    var7 = function() {
        var5 = function TimeOut(arg1) {
            var3 = this;
            var5 = _closure1_slot5;
            var4 = _closure2_slot1;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = arg1;
            var3['timeout'] = var4;
            var2 = _closure1_slot10;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var8 = var4;
            var2 = new var8[var2](var7);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['watch'] = var2;
            return var1;
        };
        var _closure2_slot1 = var5;
        var4 = _closure1_slot6;
        var2 = {};
        var3 = 'hasTimedOut';
        var2['key'] = var3;
        var3 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = this;
                var3 = var1.watch;
                var2 = var3.isRunning;
                var2 = var2.bind(var3)();
                if(var2) { _fun0012_ip = 45; continue _fun0012 }
case 44:
                var2 = global;
                var4 = var2.Error;
                var2 = var4.prototype;
                var3 = Object.create(var2, {constructor: {value: var4}});
                var5 = '`start` must be called before `hasTimedOut`';
                var6 = var3;
                var2 = new var6[var4](var5, var4);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
case 45:
                var3 = var1.watch;
                var2 = var3.elapsed;
                var3 = var2.bind(var3)();
                var2 = var3.isGreaterOrEqualTo;
                var1 = var1.timeout;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var2['value'] = var3;
        var3 = new Array(2);
        var3[0] = var2;
        var2 = {};
        var6 = 'start';
        var2['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.watch;
            var1 = var2.start;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var2['value'] = var6;
        var3[1] = var2;
        var6 = {};
        var2 = 'startNew';
        var6['key'] = var2;
        var2 = function value(arg1) {
            var3 = _closure2_slot1;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = arg1;
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            var2 = var1.start;
            var2 = var2.bind(var1)();
            return var1;
        };
        var6['value'] = var2;
        var2 = new Array(2);
        var2[0] = var6;
        var6 = {};
        var8 = 'waitFor';
        var6['key'] = var8;
        var9 = _closure1_slot4;
        var1 = undefined;
        var8 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    var10 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0013_ip = 46; continue _fun0013 }
case 47:
                    var3 = _closure1_slot9;
                    var5 = var3.fromMilliseconds;
                    var4 = 100;
                    var7 = var5.bind(var3)(var4);
                    var3 = var2 instanceof var3;
                    var4 = var2;
                    var8 = var7;
                    if(var3) { _fun0013_ip = 25; continue _fun0013 }
case 48:
                    var3 = var2.timeout;
                    var6 = var2.sleep;
                    var5 = null;
                    var4 = var3;
                    var8 = var7;
                    if(!(var5 != var6)) { _fun0013_ip = 25; continue _fun0013 }
case 49:
                    var8 = var2.sleep;
                    var4 = var3;
case 25:
                    var3 = _closure2_slot1;
                    var2 = var3.startNew;
                    var7 = var2.bind(var3)(var4);
                    var6 = undefined;
                    var3 = true;
case 50:
                    var2 = var10.bind(var6)();
                    SaveGenerator(address=115);
case 51:
                    return var2;
case 52:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 53; continue _fun0013 }
case 54:
                    if(!(var3 !== var2)) { _fun0013_ip = 55; continue _fun0013 }
case 56:
                    var4 = _closure1_slot13;
                    var4 = var4.bind(var6)(var8);
                    SaveGenerator(address=138);
case 57:
                    return var4;
case 58:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0013_ip = 59; continue _fun0013 }
case 60:
                    var5 = var7.hasTimedOut;
                    var5 = var5.bind(var7)();
                    if(!var5) { _fun0013_ip = 50; continue _fun0013 }
case 61:
                    var5 = false;
                    return var5;
case 59:
                    return var4;
case 55:
                    return var3;
case 53:
                    return var2;
case 46:
                    return var1;
                }
            };
            return var1;
        };
        var8 = var9.bind(var1)(var8);
        var _closure2_slot0 = var8;
        var7 = function waitFor() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var6['value'] = var7;
        var2[1] = var6;
        var1 = var4.bind(var1)(var5, var3, var2);
        return var1;
    };
    var9 = var7.bind(var1)();
    var7 = {};
    var16 = 'NONE';
    var7['NONE'] = var16;
    var16 = 'SECONDS';
    var7['SECONDS'] = var16;
    var16 = 'MINUTES';
    var7['MINUTES'] = var16;
    var16 = 'HOURS';
    var7['HOURS'] = var16;
    var16 = 'DAYS';
    var7['DAYS'] = var16;
    var16 = 'WEEKS';
    var7['WEEKS'] = var16;
    var16 = 'MONTHS';
    var7['MONTHS'] = var16;
    var16 = 'YEARS';
    var7['YEARS'] = var16;
    var _closure1_slot11 = var7;
    var16 = {};
    var20 = var7.NONE;
    var16['unit'] = var20;
    var16['max'] = var5;
    var5 = new Array(8);
    var5[0] = var16;
    var16 = {};
    var20 = var7.SECONDS;
    var16['unit'] = var20;
    var16['max'] = var19;
    var5[1] = var16;
    var16 = {};
    var19 = var7.MINUTES;
    var16['unit'] = var19;
    var19 = 60;
    var16['max'] = var19;
    var5[2] = var16;
    var16 = {};
    var19 = var7.HOURS;
    var16['unit'] = var19;
    var19 = 1440;
    var16['max'] = var19;
    var5[3] = var16;
    var16 = {};
    var19 = var7.DAYS;
    var16['unit'] = var19;
    var19 = 44640;
    var16['max'] = var19;
    var5[4] = var16;
    var16 = {};
    var19 = var7.WEEKS;
    var16['unit'] = var19;
    var19 = 40320;
    var16['max'] = var19;
    var5[5] = var16;
    var16 = {};
    var19 = var7.MONTHS;
    var16['unit'] = var19;
    var19 = 525600;
    var16['max'] = var19;
    var5[6] = var16;
    var16 = {};
    var19 = var7.YEARS;
    var16['unit'] = var19;
    var19 = inf;
    var16['max'] = var19;
    var5[7] = var16;
    var _closure1_slot12 = var5;
    var16 = 7;
    var16 = var18[var16];
    var18 = var17.bind(var1)(var16);
    var17 = var18.fileFinishedImporting;
    var16 = '../discord_common/js/packages/time-utils/TimeUtils.tsx';
    var16 = var17.bind(var18)(var16);
    var3['now'] = var15;
    var3['ControllableTimeStampProducer'] = var14;
    var3['TimeStampProducer'] = var13;
    var3['TimeSpan'] = var12;
    var3['StopWatch'] = var11;
    var3['DurationEnabled'] = var10;
    var3['TimeOut'] = var9;
    var3['sleep'] = var8;
    var3['TimeUnits'] = var7;
    var3['convertMinutesToGivenTimeUnit'] = var6;
    var3['TimeUnitMax'] = var5;
    var3['getTimeUnit'] = var4;
    var2 = function getTimeAndUnit(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var6 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var1;
            var2 = null;
            if(!(var2 != var6)) { _fun0014_ip = 62; continue _fun0014 }
case 63:
            var5 = _closure1_slot15;
            var4 = undefined;
            var3 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var5.bind(var4)(var6, var3);
            var7 = var2 != var3;
            var5 = null;
            if(!var7) { _fun0014_ip = 64; continue _fun0014 }
case 65:
            var1 = _closure1_slot14;
            var5 = var1.bind(var4)(var6, var3);
case 64:
            var1 = {};
            var1['unit'] = var3;
            var3 = var2 != var5;
            var2 = null;
            if(!var3) { _fun0014_ip = 66; continue _fun0014 }
case 67:
            var3 = global;
            var4 = var3.Math;
            var3 = var4.floor;
            var2 = var3.bind(var4)(var5);
case 66:
            var1['time'] = var2;
            return var1;
case 62:
            var1 = {};
            var2 = _closure1_slot11;
            var2 = var2.NONE;
            var1['unit'] = var2;
            var2 = 0;
            var1['time'] = var2;
            return var1;
        }
    };
    var3['getTimeAndUnit'] = var2;
    return var1;
})();