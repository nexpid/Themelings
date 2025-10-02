// app/modules/gateway/GatewaySocketDispatcher.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot15;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot15;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _shouldYieldToBrowser(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var3 = arg2;
            var8 = arg3;
            var1 = null;
            if(!(var1 != var8)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var4 = var6[var3];
            var2 = var6.length;
            var5 = 1;
            var2 = var2 - var5;
            var7 = var3 < var2;
            var9 = null;
            if(!var7) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var5 = var3 + var5;
            var9 = var6[var5];
case 38:
            var6 = var1 == var8;
            var10 = undefined;
            if(var6) { _fun0004_ip = 30; continue _fun0004 }
case 40:
            var6 = var8.timeRemaining;
            var10 = var6.bind(var8)();
case 30:
            var11 = var1 != var10;
            var7 = 0;
            var6 = 0;
            if(!var11) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var6 = var10;
case 41:
            var4 = var4.type;
            var10 = var1 == var9;
            var5 = undefined;
            if(var10) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var5 = var9.type;
case 43:
            var1 = var1 != var8;
            if(!var1) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var1 = var6 <= var7;
case 45:
            if(!var1) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var4 = var4 === var5;
            var1 = !var4;
case 47:
            if(!var1) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var1 = var3 !== var2;
case 49:
            return var1;
case 36:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var10 = 0;
    var7 = var6[var10];
    var1 = undefined;
    var7 = var11.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var9 = 1;
    var7 = var6[var9];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var8 = 2;
    var7 = var6[var8];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.DISPATCHER_IDEAL_TIME_LIMIT_MS;
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var6[var7];
    var12 = var11.bind(var1)(var7);
    var7 = var12.prototype;
    var11 = Object.create(var7, {constructor: {value: var12}});
    var15 = 'GatewaySocket';
    var16 = var11;
    var7 = new var16[var12](var15, var14);
    var7 = var7 instanceof Object ? var7 : var11;
    var _closure1_slot7 = var7;
    var12 = var4.Set;
    var7 = var12.prototype;
    var11 = Object.create(var7, {constructor: {value: var12}});
    var15 = ['INITIAL_GUILD', 'READY'];
    var16 = var11;
    var7 = new var16[var12](var15, var14);
    var7 = var7 instanceof Object ? var7 : var11;
    var _closure1_slot8 = var7;
    var12 = var4.Set;
    var7 = var12.prototype;
    var11 = Object.create(var7, {constructor: {value: var12}});
    var15 = ['READY', 'INITIAL_GUILD'];
    var16 = var11;
    var7 = new var16[var12](var15, var14);
    var7 = var7 instanceof Object ? var7 : var11;
    var _closure1_slot9 = var7;
    var12 = var4.Set;
    var7 = var12.prototype;
    var11 = Object.create(var7, {constructor: {value: var12}});
    var15 = ['READY', 'READY_SUPPLEMENTAL', 'RESUMED'];
    var16 = var11;
    var7 = new var16[var12](var15, var14);
    var7 = var7 instanceof Object ? var7 : var11;
    var _closure1_slot10 = var7;
    var11 = var4.Set;
    var4 = var11.prototype;
    var7 = Object.create(var4, {constructor: {value: var11}});
    var15 = ['READY', 'INITIAL_GUILD', 'READY_SUPPLEMENTAL', 'RESUMED', 'VOICE_CHANNEL_SELECT', 'VOICE_STATE_UPDATE', 'VOICE_SERVER_UPDATE', 'RTC_CONNECTION_STATE', 'RTC_CONNECTION_VIDEO', 'RTC_CONNECTION_CLIENT_CONNECT', 'RTC_CONNECTION_PING', 'MEDIA_SESSION_JOINED', 'MEDIA_ENGINE_PERMISSION', 'SESSIONS_REPLACE'];
    var16 = var7;
    var4 = new var16[var11](var15, var14);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var4['NotStarted'] = var10;
    var7 = 'NotStarted';
    var4[var10] = var7;
    var4['Loading'] = var9;
    var7 = 'Loading';
    var4[var9] = var7;
    var4['Loaded'] = var8;
    var7 = 'Loaded';
    var4[var8] = var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var _closure1_slot13 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function GatewaySocketDispatcher(arg1) {
            var3 = this;
            var _closure3_slot0 = var3;
            var6 = _closure1_slot3;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var5 = arg1;
            var3['socket'] = var5;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 5;
            var4 = var6[var4];
            var7 = var5.bind(var1)(var4);
            var4 = var7.createDispatcherWorkScheduler;
            var4 = var4.bind(var7)();
            var3['scheduler'] = var4;
            var4 = new Array(0);
            var3['queue'] = var4;
            var4 = true;
            var3['paused'] = var4;
            var4 = 6;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.createResumeAnalytics;
            var4 = var4.bind(var5)();
            var3['resumeAnalytics'] = var4;
            var4 = null;
            var3['getDispatchHandler'] = var4;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure3_slot0;
                    var1 = var1.paused;
                    if(var1) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                    var2 = global;
                    var4 = var2.performance;
                    var1 = var4.now;
                    var4 = var1.bind(var4)();
                    var1 = _closure3_slot0;
                    var1 = var1.queue;
                    var1 = var1.length;
                    var8 = 0;
                    var1 = var8 < var1;
                    var6 = 0;
                    if(!var1) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                    var1 = _closure3_slot0;
                    var1 = var1.queue;
                    var1 = var1[var8];
                    var5 = var1.status;
                    var1 = _closure1_slot12;
                    var1 = var1.Loaded;
                    var7 = 0;
                    var6 = 0;
                    if(!(var5 === var1)) { _fun0005_ip = 53; continue _fun0005 }
case 55:
                    var10 = var7 + 1;
                    var1 = _closure3_slot0;
                    var1 = var1.queue;
                    var1 = var1.length;
                    var6 = var10;
                    if(!(var10 < var1)) { _fun0005_ip = 53; continue _fun0005 }
case 56:
                    var1 = _closure3_slot0;
                    var1 = var1.queue;
                    var1 = var1[var10];
                    var5 = var1.status;
                    var1 = _closure1_slot12;
                    var1 = var1.Loaded;
                    var7 = var10;
                    var6 = var7;
                    if(var5 === var1) { _fun0005_ip = 55; continue _fun0005 }
case 53:
                    if(!(var8 !== var6)) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                    var7 = _closure3_slot0;
                    var5 = var7.queue;
                    var1 = var5.splice;
                    var5 = var1.bind(var5)(var8, var6);
                    var6 = var7.dispatchMultiple;
                    var1 = arg1;
                    var1 = var6.bind(var7)(var5, var1);
                    if(!var1) { _fun0005_ip = 59; continue _fun0005 }
case 60:
                    var3 = _closure3_slot0;
                    var3 = var3.scheduler;
                    var7 = var3.telemetry;
                    var6 = var7.timeEnd;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 7;
                    var8 = var8[var3];
                    var3 = undefined;
                    var3 = var9.bind(var3)(var8);
                    var3 = var3.WorkSchedulerTelemetryTiming;
                    var3 = var3.TIME_TO_QUEUE_EMPTY;
                    var3 = var6.bind(var7)(var3);
case 59:
                    var6 = var2.performance;
                    var3 = var6.now;
                    var3 = var3.bind(var6)();
                    var9 = var3 - var4;
                    var4 = _closure1_slot6;
                    var4 = var9 > var4;
                    if(!var4) { _fun0005_ip = 61; continue _fun0005 }
case 62:
                    var4 = !var1;
case 61:
                    if(!var4) { _fun0005_ip = 63; continue _fun0005 }
case 64:
                    var4 = _closure1_slot7;
                    var3 = var4.log;
                    var14 = var5.length;
                    var2 = var2.HermesInternal;
                    var7 = var2.concat;
                    var15 = 'Dispatched ';
                    var13 = ' messages in ';
                    var11 = 'ms';
                    var12 = var9;
                    var2 = var15[var7](var14, var13, var12, var11, var10);
                    var2 = var3.bind(var4)(var2);
case 63:
                    return var1;
case 57:
                    var1 = true;
                    return var1;
case 51:
                    var1 = true;
                    return var1;
                }
            };
            var3['flush'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'hasStuffToDispatchNow';
        var1['key'] = var2;
        var2 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = this;
                var1 = var2.queue;
                var1 = var1.length;
                var3 = 0;
                var1 = var1 > var3;
                if(!var1) { _fun0006_ip = 4; continue _fun0006 }
case 31:
                var2 = var2.queue;
                var2 = var2[var3];
                var3 = var2.status;
                var2 = _closure1_slot12;
                var2 = var2.Loaded;
                var1 = var3 === var2;
case 4:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(14);
        var2[0] = var1;
        var1 = {};
        var6 = 'processFirstQueuedDispatch';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var7 = arg1;
                var3 = this;
                var2 = new Array(0);
                var1 = var3.queue;
                var1 = var1.length;
                var6 = 0;
                if(!(var1 > var6)) { _fun0007_ip = 65; continue _fun0007 }
case 3:
                var4 = var7.has;
                var1 = var3.queue;
                var1 = var1[var6];
                var1 = var1.type;
                var1 = var4.bind(var7)(var1);
                if(!var1) { _fun0007_ip = 65; continue _fun0007 }
case 7:
                var1 = var3.queue;
                var1 = var1[var6];
                var4 = var1.status;
                var1 = _closure1_slot12;
                var1 = var1.Loaded;
                if(!(var4 === var1)) { _fun0007_ip = 65; continue _fun0007 }
case 66:
                var4 = var2.push;
                var8 = var3.queue;
                var1 = var8.shift;
                var1 = var1.bind(var8)();
                var1 = var4.bind(var2)(var1);
                var1 = var3.queue;
                var1 = var1.length;
                if(!(var1 > var6)) { _fun0007_ip = 65; continue _fun0007 }
case 67:
                var4 = var7.has;
                var1 = var3.queue;
                var1 = var1[var6];
                var1 = var1.type;
                var1 = var4.bind(var7)(var1);
                if(!var1) { _fun0007_ip = 65; continue _fun0007 }
case 68:
                var1 = var3.queue;
                var1 = var1[var6];
                var4 = var1.status;
                var1 = _closure1_slot12;
                var1 = var1.Loaded;
                if(var4 === var1) { _fun0007_ip = 66; continue _fun0007 }
case 65:
                var1 = var3.dispatchMultiple;
                var1 = var1.bind(var3)(var2);
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'unpauseDispatchQueue';
        var1['key'] = var6;
        var6 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = this;
                var1 = false;
                var3['paused'] = var1;
                var4 = _closure1_slot14;
                var2 = var3.queue;
                var1 = undefined;
                var5 = var4.bind(var1)(var2);
                var4 = var5.bind(var1)();
                var2 = var4.done;
                if(var2) { _fun0008_ip = 69; continue _fun0008 }
case 70:
                var6 = var4.value;
                var2 = var3.maybePreload;
                var2 = var2.bind(var3)(var6);
                var6 = var5.bind(var1)();
                var2 = var6.done;
                var4 = var6;
                if(!var2) { _fun0008_ip = 70; continue _fun0008 }
case 69:
                var2 = var3.flush;
                var2 = var2.bind(var3)();
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'receiveDispatch';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = arg2;
                var2 = this;
                var4 = var2.getDispatchHandler;
                var1 = null;
                if(!(var1 != var4)) { _fun0009_ip = 45; continue _fun0009 }
case 71:
                var4 = {};
                var5 = arg1;
                var4['data'] = var5;
                var4['type'] = var3;
                var5 = arg3;
                var4['compressionAnalytics'] = var5;
                var5 = _closure1_slot12;
                var5 = var5.NotStarted;
                var4['status'] = var5;
                var4['preloadPromise'] = var1;
                var4['preloadedData'] = var1;
                var5 = var2.queue;
                var1 = var5.push;
                var1 = var1.bind(var5)(var4);
                var1 = var2.maybePreload;
                var1 = var1.bind(var2)(var4);
                if(var1) { _fun0009_ip = 46; continue _fun0009 }
case 11:
                var1 = var2.scheduleFlush;
                var1 = var1.bind(var2)(var3);
case 46:
                var1 = undefined;
                return var1;
case 45:
                var1 = global;
                var3 = var1.Error;
                var2 = undefined;
                var1 = 'getDispatchHandler needs to be passed in first!';
                var1 = var3.bind(var2)(var1);
                throw var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'maybePreload';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = arg1;
                var5 = this;
                var _closure3_slot0 = var5;
                var _closure3_slot1 = var3;
                var2 = var5.paused;
                if(!var2) { _fun0010_ip = 72; continue _fun0010 }
case 73:
                var6 = _closure1_slot8;
                var4 = var6.has;
                var2 = var3.type;
                var2 = var4.bind(var6)(var2);
                if(var2) { _fun0010_ip = 72; continue _fun0010 }
case 74:
                var2 = false;
                return var2;
case 72:
                var4 = var3.status;
                var2 = _closure1_slot12;
                var2 = var2.NotStarted;
                if(!(var4 === var2)) { _fun0010_ip = 75; continue _fun0010 }
case 76:
                var4 = var5.getDispatchHandler;
                var2 = var3.type;
                var8 = var4.bind(var5)(var2);
                var2 = null;
                var5 = var2 == var8;
                var4 = undefined;
                if(var5) { _fun0010_ip = 77; continue _fun0010 }
case 78:
                var7 = var8.preload;
                var5 = var3.data;
                var4 = var7.bind(var8)(var5);
case 77:
                if(!(var2 != var4)) { _fun0010_ip = 79; continue _fun0010 }
case 80:
                var5 = _closure1_slot12;
                var5 = var5.Loading;
                _fun0010_ip = 81; continue _fun0010;
case 79:
                var6 = _closure1_slot12;
                var5 = var6.Loaded;
case 81:
                var3['status'] = var5;
                var3['preloadPromise'] = var4;
                if(!(var2 == var4)) { _fun0010_ip = 82; continue _fun0010 }
case 75:
                var2 = false;
                return var2;
case 82:
                var3 = var4.then;
                var2 = function(arg1) {
                    var1 = _closure3_slot1;
                    var3 = arg1;
                    var1['preloadedData'] = var3;
                    var3 = _closure1_slot12;
                    var3 = var3.Loaded;
                    var1['status'] = var3;
                    var3 = _closure3_slot0;
                    var2 = var3.scheduleFlush;
                    var1 = var1.type;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.catch;
                var1 = function(arg1) {
                    var1 = _closure3_slot0;
                    var3 = var1.socket;
                    var2 = var3.resetSocketOnDispatchError;
                    var1 = {};
                    var5 = arg1;
                    var1['error'] = var5;
                    var4 = _closure3_slot1;
                    var4 = var4.type;
                    var1['action'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = true;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'scheduleFlush';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var4 = arg1;
                var1 = this;
                var2 = var1.paused;
                if(var2) { _fun0011_ip = 36; continue _fun0011 }
case 37:
                var5 = _closure1_slot9;
                var3 = var5.has;
                var3 = var3.bind(var5)(var4);
                var5 = var1.scheduler;
                if(var3) { _fun0011_ip = 83; continue _fun0011 }
case 84:
                var3 = var5.hasWorkScheduled;
                if(var3) { _fun0011_ip = 44; continue _fun0011 }
case 74:
                var7 = var1.scheduler;
                var6 = var7.requestWorkTimeout;
                var3 = var1.flush;
                var3 = var6.bind(var7)(var3);
                _fun0011_ip = 44; continue _fun0011;
case 83:
                var3 = var5.clearWorkTimeout;
                var3 = var3.bind(var5)();
                var3 = var1.flush;
                var3 = var3.bind(var1)();
case 44:
                var3 = _closure1_slot11;
                var2 = var3.has;
                var2 = var2.bind(var3)(var4);
                if(!var2) { _fun0011_ip = 36; continue _fun0011 }
case 85:
                var2 = var1.scheduler;
                var1 = var2.markCriticalWorkScheduled;
                var1 = var1.bind(var2)();
case 36:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'getDispatchTimings';
        var1['key'] = var6;
        var6 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'getSchedulerTelemetry';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.scheduler;
            var1 = var1.telemetry;
            return var1;
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'getIsSchedulerBackgrounded';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.scheduler;
            var1 = var1.isBackgrounded;
            return var1;
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'toggleRequestIdleCallback';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.scheduler;
            var2 = var3.toggleRequestIdleCallback;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'getIsRequestIdleCallbackEnabled';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.scheduler;
            var1 = var1.isRequestIdleCallbackEnabled;
            return var1;
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'dispatchMultiple';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = arg1;
                var1 = this;
                var _closure3_slot0 = var1;
                var5 = var2;
                var _closure3_slot1 = var2;
                var3 = arg2;
                var _closure3_slot2 = var3;
                var2 = var2.length;
                var8 = 0;
                if(!(var8 !== var2)) { _fun0012_ip = 86; continue _fun0012 }
case 39:
                var2 = 'none';
                var _closure3_slot3 = var2;
                var2 = false;
                var _closure3_slot4 = var2;
                var3 = var1.scheduler;
                var11 = var3.telemetry;
                var7 = var11.measure;
                var12 = _closure1_slot0;
                var6 = _closure1_slot2;
                var10 = 7;
                var6 = var6[var10];
                var9 = undefined;
                var6 = var12.bind(var9)(var6);
                var6 = var6.WorkSchedulerTelemetryMeasurement;
                var6 = var6.COUNT_INITIAL_DISPATCHS_LENGTH;
                var5 = var5.length;
                var5 = var7.bind(var11)(var6, var5);
case 87: // try_start_0
                var5 = new Array(0);
                var _closure3_slot5 = var5;
                var5 = var1.socket;
                var6 = var5.connectionState;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var5 = 8;
                var5 = var11[var5];
                var5 = var7.bind(var9)(var5);
                var5 = var5.RESUMING;
                if(!(var6 === var5)) { _fun0012_ip = 88; continue _fun0012 }
case 89:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 9;
                var5 = var7[var5];
                var5 = var6.bind(var9)(var5);
                var7 = var5.Emitter;
                var6 = var7.pause;
                var5 = 150;
                var5 = var6.bind(var7)(var5);
case 88:
                var _closure3_slot6 = var8;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var7 = 9;
                var5 = var5[var7];
                var5 = var6.bind(var9)(var5);
                var11 = var5.Emitter;
                var6 = var11.batched;
                var5 = function() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = _closure3_slot1;
                        var1 = var1.length;
                        var6 = 0;
                        var4 = var6 < var1;
                        var1 = undefined;
                        var12 = 2;
                        var9 = 1;
                        var11 = global;
                        var5 = null;
                        var10 = 0;
                        if(!var4) { _fun0013_ip = 90; continue _fun0013 }
case 84:
                        var4 = _closure3_slot1;
                        var7 = var4[var10];
                        var4 = var7.type;
                        _closure3_slot3 = var4;
                        var8 = _closure3_slot4;
                        var4 = var10;
                        if(var8) { _fun0013_ip = 91; continue _fun0013 }
case 92:
                        var15 = _closure1_slot10;
                        var14 = var15.has;
                        var13 = var7.type;
                        var8 = var14.bind(var15)(var13);
case 91:
                        _closure3_slot4 = var8;
                        var13 = var11.performance;
                        var8 = var13.now;
                        var13 = var8.bind(var13)();
                        var14 = _closure3_slot0;
                        var8 = var14.dispatchOne;
                        var8 = var8.bind(var14)(var7);
                        var14 = var11.performance;
                        var8 = var14.now;
                        var8 = var8.bind(var14)();
                        var8 = var8 - var13;
                        _closure3_slot6 = var8;
                        var13 = var7.type;
                        var15 = _closure3_slot6;
                        var7 = _closure1_slot13;
                        var8 = var7[var13];
                        if(!(var5 == var8)) { _fun0013_ip = 93; continue _fun0013 }
case 94:
                        var8 = [0, 0];
case 93:
                        var7 = _closure1_slot5;
                        var8 = var7.bind(var1)(var8, var12);
                        var7 = var8[var6];
                        var14 = var8[var9];
                        var8 = _closure1_slot13;
                        var7 = var7 * var14;
                        var15 = var7 + var15;
                        var7 = var14 + var9;
                        var15 = var15 / var7;
                        var7 = new Array(2);
                        var7[0] = var15;
                        var14 = var14 + var9;
                        var7[1] = var14;
                        var8[var13] = var7;
                        var13 = _closure1_slot16;
                        var8 = _closure3_slot1;
                        var7 = _closure3_slot2;
                        var7 = var13.bind(var1)(var8, var4, var7);
                        var8 = _closure3_slot1;
                        if(var7) { _fun0013_ip = 95; continue _fun0013 }
case 96:
                        var10 = var4 + 1;
                        var7 = var8.length;
                        if(var10 < var7) { _fun0013_ip = 84; continue _fun0013 }
case 97:
                        _fun0013_ip = 90; continue _fun0013;
case 95:
                        var7 = var8.slice;
                        var4 = var4 + var9;
                        var4 = var7.bind(var8)(var4);
                        _closure3_slot5 = var4;
                        var4 = _closure3_slot2;
                        var4 = var5 != var4;
                        if(!var4) { _fun0013_ip = 98; continue _fun0013 }
case 99:
                        var7 = _closure3_slot2;
                        var5 = var7.timeRemaining;
                        var5 = var5.bind(var7)();
                        var4 = var5 <= var6;
case 98:
                        if(!var4) { _fun0013_ip = 90; continue _fun0013 }
case 100:
                        var4 = _closure3_slot0;
                        var4 = var4.scheduler;
                        var6 = var4.telemetry;
                        var5 = var6.timeTrack;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 7;
                        var4 = var8[var4];
                        var4 = var7.bind(var1)(var4);
                        var4 = var4.WorkSchedulerTelemetryTiming;
                        var4 = var4.TIME_OVER_DEADLINE;
                        var3 = _closure3_slot2;
                        var3 = var3.timeSinceExpiration;
                        var3 = var5.bind(var6)(var4, var3);
case 90:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 10;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.flush;
                        var2 = var2.bind(var3)();
                        return var1;
                    }
                };
                var5 = var6.bind(var11)(var5);
                var5 = _closure3_slot4;
                if(!var5) { _fun0012_ip = 101; continue _fun0012 }
case 24:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var6.bind(var9)(var5);
                var6 = var5.Emitter;
                var5 = var6.resume;
                var5 = var5.bind(var6)();
case 101:
                var5 = _closure3_slot5;
                var5 = var5.length;
                if(!(!(var5 > var8))) { _fun0012_ip = 102; continue _fun0012 }
case 103: // try_end0
                _fun0012_ip = 104; continue _fun0012;
case 102: // try_start_1
                var5 = var1.scheduler;
                var7 = var5.telemetry;
                var6 = var7.measure;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var10];
                var3 = var5.bind(var9)(var3);
                var3 = var3.WorkSchedulerTelemetryMeasurement;
                var5 = var3.COUNT_DISPATCHES_LEFT_AFTER_YIELD;
                var3 = _closure3_slot5;
                var3 = var3.length;
                var3 = var6.bind(var7)(var5, var3);
                var6 = var1.queue;
                var5 = var6.unshift;
                var14 = _closure3_slot5;
                var3 = new Array(0);
                var15 = var3;
                var13 = 0;
                var7 = arraySpread(var15, var14, var13);
                var15 = var5;
                var14 = var3;
                var13 = var6;
                var3 = apply(var15, var14, var13);
                var7 = var1.scheduler;
                var6 = var7.requestWorkTimeout;
                var5 = var1.flush;
                var3 = true;
                var3 = var6.bind(var7)(var5, var3);
case 105: // try_end1
                return var2;
case 106: // catch_target0 // catch_target1
                CatchBlockStart(arg_register=4);
                var3 = var1.socket;
                var2 = var3.resetSocketOnDispatchError;
                var1 = {};
                var1['error'] = var5;
                var4 = _closure3_slot3;
                var1['action'] = var4;
                var1 = var2.bind(var3)(var1);
case 104:
                var1 = true;
                return var1;
case 86:
                var1 = true;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'dispatchOne';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = arg1;
                var3 = this;
                var12 = var1.data;
                var14 = var1.type;
                var11 = var1.compressionAnalytics;
                var13 = var1.preloadedData;
                var2 = global;
                var4 = var2.performance;
                var1 = var4.now;
                var5 = var1.bind(var4)();
                var1 = var3.socket;
                var7 = var1.connectionState;
                var9 = _closure1_slot1;
                var1 = _closure1_slot2;
                var8 = 8;
                var6 = var1[var8];
                var1 = undefined;
                var6 = var9.bind(var1)(var6);
                var6 = var6.RESUMING;
                if(!(var7 === var6)) { _fun0014_ip = 107; continue _fun0014 }
case 44:
                var6 = var3.resumeAnalytics;
                var6 = var6.lastUpdateTime;
                var9 = var5 - var6;
                var6 = var3.resumeAnalytics;
                var7 = var6.numEvents;
                var6 = 0;
                if(!(var6 !== var7)) { _fun0014_ip = 108; continue _fun0014 }
case 109:
                var6 = var3.resumeAnalytics;
                var6 = var6.largestWaitTime;
                if(!(var9 > var6)) { _fun0014_ip = 110; continue _fun0014 }
case 81:
                var6 = var3.resumeAnalytics;
                var6['largestWaitTime'] = var9;
                _fun0014_ip = 110; continue _fun0014;
case 108:
                var6 = var3.resumeAnalytics;
                var6['initialWaitTime'] = var9;
case 110:
                var7 = var3.resumeAnalytics;
                var6 = var7.totalWaitTime;
                var6 = var6 + var9;
                var7['totalWaitTime'] = var6;
                var6 = var3.resumeAnalytics;
                var6['lastUpdateTime'] = var5;
                var7 = var3.resumeAnalytics;
                var9 = var7.numEvents;
                var6 = 1;
                var6 = var9 + var6;
                var7['numEvents'] = var6;
case 107:
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = 10;
                var6 = var9[var6];
                var7 = var7.bind(var1)(var6);
                var6 = var7.flush;
                var6 = var6.bind(var7)(var14, var12);
                var6 = 'READY';
                if(!(var6 !== var14)) { _fun0014_ip = 111; continue _fun0014 }
case 112:
                var6 = 'RESUMED';
                if(!(var6 !== var14)) { _fun0014_ip = 64; continue _fun0014 }
case 95:
                var6 = var3.getDispatchHandler;
                var7 = var6.bind(var3)(var14);
                var6 = null;
                if(!(var6 != var7)) { _fun0014_ip = 113; continue _fun0014 }
case 114:
                var6 = var7.dispatch;
                var6 = var6.bind(var7)(var12, var14, var13);
                _fun0014_ip = 113; continue _fun0014;
case 64:
                var6 = var3.getDispatchHandler;
                var7 = var6.bind(var3)(var14);
                var6 = null;
                if(!(var6 != var7)) { _fun0014_ip = 115; continue _fun0014 }
case 116:
                var6 = var7.dispatch;
                var6 = var6.bind(var7)(var12, var14, var13);
case 115:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 6;
                var10 = var9[var6];
                var16 = var7.bind(var1)(var10);
                var15 = var16.logResumeAnalytics;
                var10 = var3.resumeAnalytics;
                var10 = var15.bind(var16)(var10);
                var15 = var3.socket;
                var10 = var15.handleResumeDispatched;
                var10 = var10.bind(var15)();
                var6 = var9[var6];
                var7 = var7.bind(var1)(var6);
                var6 = var7.createResumeAnalytics;
                var6 = var6.bind(var7)();
                var3['resumeAnalytics'] = var6;
                _fun0014_ip = 113; continue _fun0014;
case 111:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var9 = 6;
                var6 = var6[var9];
                var7 = var7.bind(var1)(var6);
                var6 = var7.getReadyPayloadByteSizeAnalytics;
                var10 = var6.bind(var7)(var12);
                var6 = var3.getDispatchHandler;
                var7 = var6.bind(var3)(var14);
                var6 = null;
                if(!(var6 != var7)) { _fun0014_ip = 117; continue _fun0014 }
case 118:
                var6 = var7.dispatch;
                var6 = var6.bind(var7)(var12, var14, var13);
case 117:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var9];
                var9 = var7.bind(var1)(var6);
                var7 = var9.logReadyPayloadReceived;
                var21 = var3.socket;
                var22 = var9;
                var20 = var12;
                var19 = var5;
                var18 = var11;
                var17 = var10;
                var6 = var22[var7](var21, var20, var19, var18, var17, var16);
case 113:
                var6 = var3.socket;
                var6 = var6.connectionState;
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var8];
                var4 = var7.bind(var1)(var4);
                var4 = var4.RESUMING;
                if(!(var6 === var4)) { _fun0014_ip = 119; continue _fun0014 }
case 120:
                var3 = var3.resumeAnalytics;
                var4 = var3.dispatchTime;
                var6 = var2.performance;
                var2 = var6.now;
                var2 = var2.bind(var6)();
                var2 = var2 - var5;
                var2 = var4 + var2;
                var3['dispatchTime'] = var2;
case 119:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'clear';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var2 = false;
            var1['paused'] = var2;
            var2 = var1.queue;
            var1 = 0;
            var2['length'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[13] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gateway/GatewaySocketDispatcher.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();