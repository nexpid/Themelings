// app/lib/MessageQueue.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var10;
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
            _closure1_slot22 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = ['channelId', 'analyticsLocation'];
    var _closure1_slot3 = var1;
    var1 = ['channelId', 'analyticsLocation'];
    var _closure1_slot4 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var11 = 0;
    var4 = var10[var11];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var13 = 1;
    var4 = var10[var13];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var7 = 2;
    var4 = var10[var7];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var5 = 3;
    var4 = var10[var5];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var10[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var12 = 5;
    var4 = var10[var12];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var10[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var10[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var10[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var10[var4];
    var4 = var9.bind(var1)(var4);
    var6 = var4.AbortCodes;
    var _closure1_slot14 = var6;
    var6 = var4.Endpoints;
    var _closure1_slot15 = var6;
    var4 = var4.AnalyticEvents;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var10[var4];
    var4 = var9.bind(var1)(var4);
    var4 = var4.MESSAGE_HTTP_TIMEOUT_RETRY_OPTIONS;
    var _closure1_slot17 = var4;
    var6 = {};
    var6['SEND'] = var11;
    var4 = 'SEND';
    var6[var11] = var4;
    var6['EDIT'] = var13;
    var4 = 'EDIT';
    var6[var13] = var4;
    var6['COMMAND'] = var7;
    var4 = 'COMMAND';
    var6[var7] = var4;
    var6['SEND_ANNOUNCEMENT'] = var5;
    var4 = 'SEND_ANNOUNCEMENT';
    var6[var5] = var4;
    var _closure1_slot18 = var6;
    var5 = function isMessageDataSend(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var4 = var3.type;
            var1 = _closure1_slot18;
            var1 = var1.SEND;
            var1 = var4 === var1;
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var3.type;
            var2 = _closure1_slot18;
            var2 = var2.SEND_ANNOUNCEMENT;
            var1 = var3 === var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot19 = var5;
    var4 = function isMessageDataEdit(arg1) {
        var1 = arg1;
        var2 = var1.type;
        var1 = _closure1_slot18;
        var1 = var1.EDIT;
        var1 = var2 === var1;
        return var1;
    };
    var _closure1_slot20 = var4;
    var11 = 11;
    var7 = var10[var11];
    var7 = var8.bind(var1)(var7);
    var7 = var7.Millis;
    var7 = var7.MINUTE;
    var13 = var13 * var7;
    var7 = new Array(2);
    var7[0] = var13;
    var11 = var10[var11];
    var11 = var8.bind(var1)(var11);
    var11 = var11.Millis;
    var11 = var11.MINUTE;
    var11 = var12 * var11;
    var7[1] = var11;
    var _closure1_slot21 = var7;
    var7 = 22;
    var7 = var10[var7];
    var8 = var8.bind(var1)(var7);
    var7 = function(arg1) {
        var4 = function MessageQueue() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arguments[0];
                var6 = this;
                var5 = undefined;
                if(!(var3 === var5)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var3 = 5;
case 8:
                var _closure3_slot0 = var5;
                var1 = _closure1_slot6;
                var4 = _closure2_slot0;
                var1 = var1.bind(var5)(var6, var4);
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 12;
                var1 = var9[var1];
                var9 = var8.bind(var5)(var1);
                var1 = var9.prototype;
                var8 = Object.create(var1, {constructor: {value: var9}});
                var14 = 'MessageQueue';
                var15 = var8;
                var1 = new var15[var9](var14, var13);
                var1 = var1 instanceof Object ? var1 : var8;
                var11 = new Array(1);
                var11[0] = var1;
                var1 = _closure1_slot9;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot8;
                var1 = _closure1_slot22;
                var1 = var1.bind(var5)();
                if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0003_ip = 12; continue _fun0003;
case 10:
                var8 = global;
                var9 = var8.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot9;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 12:
                var1 = var4.bind(var5)(var6, var1);
                _closure3_slot0 = var1;
                var1['maxSize'] = var3;
                var3 = global;
                var4 = var3.Map;
                var5 = var4.prototype;
                var5 = Object.create(var5, {constructor: {value: var4}});
                var15 = var5;
                var4 = new var15[var4](var14);
                var4 = var4 instanceof Object ? var4 : var5;
                var1['requests'] = var4;
                var3 = var3.Map;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var15 = var4;
                var3 = new var15[var3](var14);
                var3 = var3 instanceof Object ? var3 : var4;
                var1['analyticsTimeouts'] = var3;
                var2 = function(arg1, arg2) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var4 = arg1;
                        var11 = var4.channelId;
                        var10 = var4.messageId;
                        var _closure4_slot0 = var10;
                        var3 = var4.isCrossposted;
                        var2 = {'channelId': 0, 'messageId': 0, 'isCrossposted': 0};
                        var13 = null;
                        var14 = var2;
                        var1 = silentSetPrototypeOf(var14, var13);
                        var14 = {};
                        var13 = var4;
                        var12 = var2;
                        var2 = copyDataProperties(var14, var13, var12);
                        var1 = global;
                        var1 = var1.AbortController;
                        var4 = var1.prototype;
                        var4 = Object.create(var4, {constructor: {value: var1}});
                        var15 = var4;
                        var1 = new var15[var1](var14);
                        var7 = var1 instanceof Object ? var1 : var4;
                        var _closure4_slot1 = var7;
                        var5 = _closure3_slot0;
                        var4 = var5.createResponseHandler;
                        var1 = arg2;
                        var5 = var4.bind(var5)(var10, var1);
                        var4 = {'url': null, 'body': null, 'retries': 1, 'oldFormErrors': true, 'signal': null, 'rejectWithError': true};
                        var9 = _closure1_slot15;
                        var8 = var9.MESSAGE;
                        var8 = var8.bind(var9)(var11, var10);
                        var4['url'] = var8;
                        var4['body'] = var2;
                        var2 = true;
                        var7 = var7.signal;
                        var4['signal'] = var7;
                        var6 = function onRequestCreated() {
                            var1 = _closure3_slot0;
                            var4 = var1.requests;
                            var3 = var4.set;
                            var2 = _closure4_slot0;
                            var1 = _closure4_slot1;
                            var1 = var3.bind(var4)(var2, var1);
                            var1 = undefined;
                            return var1;
                        };
                        var4['onRequestCreated'] = var6;
                        if(!var3) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                        var4['failImmediatelyWhenRateLimited'] = var2;
case 13:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var3 = var2.HTTP;
                        var2 = var3.patch;
                        var2 = var2.bind(var3)(var4, var5);
                        return var1;
                    }
                };
                var1['handleEdit'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot10;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = 'isFull';
        var5['key'] = var1;
        var1 = function value() {
            var1 = this;
            var2 = var1.queue;
            var2 = var2.length;
            var1 = var1.maxSize;
            var1 = var2 >= var1;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(10);
        var1[0] = var5;
        var5 = {};
        var7 = 'drain';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = arg1;
                var4 = arg2;
                var3 = this;
                var7 = var3.logger;
                var6 = var7.log;
                var5 = var1.type;
                var2 = 'Draining Message Queue with: ';
                var2 = var6.bind(var7)(var2, var5);
                var5 = var1.type;
                var6 = _closure1_slot18;
                var6 = var6.SEND;
                if(!(var6 !== var5)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                var6 = _closure1_slot18;
                var6 = var6.SEND_ANNOUNCEMENT;
                if(!(var6 !== var5)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var6 = _closure1_slot18;
                var6 = var6.EDIT;
                if(!(var6 !== var5)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var2 = _closure1_slot18;
                var2 = var2.COMMAND;
                if(!(var2 === var5)) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                var5 = var3.handleCommand;
                var2 = var1.message;
                var2 = var5.bind(var3)(var2, var4);
                _fun0005_ip = 21; continue _fun0005;
case 19:
                var5 = var3.handleEdit;
                var2 = var1.message;
                var2 = var5.bind(var3)(var2, var4);
                _fun0005_ip = 21; continue _fun0005;
case 17:
                var5 = var3.handleSendAnnouncement;
                var2 = var1.message;
                var2 = var5.bind(var3)(var2, var4);
                _fun0005_ip = 21; continue _fun0005;
case 15:
                var2 = var3.handleSend;
                var1 = var1.message;
                var1 = var2.bind(var3)(var1, var4);
case 21:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'cancelRequest';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = arg1;
                var2 = this;
                var5 = var2.logger;
                var4 = var5.log;
                var1 = 'Cancel message send: ';
                var1 = var4.bind(var5)(var1, var3);
                var4 = var2.requests;
                var1 = var4.get;
                var4 = var1.bind(var4)(var3);
                var1 = null;
                if(!(var1 != var4)) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                var1 = var4.abort;
                var1 = var1.bind(var4)();
case 23:
                var4 = var2.requests;
                var1 = var4.delete;
                var1 = var1.bind(var4)(var3);
                var1 = var2.cancelQueueMetricTimers;
                var1 = var1.bind(var2)(var3);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'cancelPendingSendRequests';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = arg1;
                var2 = this;
                var1 = new Array(0);
                var7 = new Array(0);
                var3 = var2.queue;
                var3 = var3.length;
                var6 = 0;
                if(!(var3 > var6)) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                var8 = var2.queue;
                var3 = var8.shift;
                var9 = var3.bind(var8)();
                var3 = var9.message;
                var10 = var3.type;
                var8 = _closure1_slot18;
                var8 = var8.SEND;
                if(!(var10 === var8)) { _fun0007_ip = 27; continue _fun0007 }
case 4:
                var8 = var3.message;
                var8 = var8.channelId;
                if(!(var8 !== var5)) { _fun0007_ip = 28; continue _fun0007 }
case 27:
                var8 = var7.push;
                var8 = var8.bind(var7)(var9);
                _fun0007_ip = 29; continue _fun0007;
case 28:
                var8 = var1.push;
                var3 = var3.message;
                var3 = var8.bind(var1)(var3);
case 29:
                var3 = var2.queue;
                var3 = var3.length;
                if(var3 > var6) { _fun0007_ip = 26; continue _fun0007 }
case 25:
                var5 = var2.queue;
                var4 = var5.push;
                var3 = new Array(0);
                var13 = var3;
                var12 = var7;
                var11 = 0;
                var6 = arraySpread(var13, var12, var11);
                var13 = var4;
                var12 = var3;
                var11 = var5;
                var3 = apply(var13, var12, var11);
                var5 = var2.logger;
                var4 = var5.log;
                var3 = var1.length;
                var2 = 'Cancel pending send requests';
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'startQueueMetricTimers';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot21;
            var2 = var3.map;
            var1 = function(arg1) {
                var4 = arg1;
                var _closure4_slot0 = var4;
                var2 = global;
                var3 = var2.setTimeout;
                var2 = undefined;
                var1 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.trackWithMetadata;
                    var2 = _closure1_slot16;
                    var3 = var2.SEND_MESSAGE_QUEUED;
                    var2 = {};
                    var6 = _closure4_slot0;
                    var2['queued_duration_ms'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1 = var3.bind(var2)(var1, var4);
                return var1;
            };
            var4 = var2.bind(var3)(var1);
            var1 = this;
            var3 = var1.analyticsTimeouts;
            var2 = var3.set;
            var1 = arg1;
            var1 = var2.bind(var3)(var1, var4);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'cancelQueueMetricTimers';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var4 = var1.analyticsTimeouts;
                var2 = var4.get;
                var5 = var2.bind(var4)(var3);
                var2 = null;
                if(!(var2 != var5)) { _fun0008_ip = 30; continue _fun0008 }
case 7:
                var4 = var5.forEach;
                var2 = global;
                var2 = var2.clearTimeout;
                var2 = var4.bind(var5)(var2);
case 30:
                var2 = var1.analyticsTimeouts;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'createResponseHandler';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var2 = this;
            var _closure3_slot0 = var2;
            var2 = arg1;
            var _closure3_slot1 = var2;
            var2 = arg2;
            var _closure3_slot2 = var2;
            var1 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = arg1;
                    var2 = _closure3_slot1;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0009_ip = 24; continue _fun0009 }
case 31:
                    var6 = _closure3_slot0;
                    var7 = var6.requests;
                    var2 = var7.delete;
                    var5 = _closure3_slot1;
                    var2 = var2.bind(var7)(var5);
                    var2 = var6.cancelQueueMetricTimers;
                    var2 = var2.bind(var6)(var5);
case 24:
                    var2 = var4.hasErr;
                    if(var2) { _fun0009_ip = 32; continue _fun0009 }
case 33:
                    var2 = var4.body;
                    if(!(var3 != var2)) { _fun0009_ip = 34; continue _fun0009 }
case 5:
                    var2 = var4.body;
                    var6 = var2.code;
                    var5 = _closure1_slot14;
                    var5 = var5.SLOWMODE_RATE_LIMITED;
                    if(!(var6 !== var5)) { _fun0009_ip = 35; continue _fun0009 }
case 36:
                    var5 = var4.body;
                    var5 = var5.code;
                    var2 = _closure1_slot14;
                    var2 = var2.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED;
                    if(!(var5 === var2)) { _fun0009_ip = 34; continue _fun0009 }
case 35:
                    var5 = _closure3_slot2;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3, var4);
                    _fun0009_ip = 37; continue _fun0009;
case 34:
                    var5 = var4.status;
                    var2 = 429;
                    if(!(var2 !== var5)) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                    var5 = _closure3_slot2;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3, var4);
                    _fun0009_ip = 37; continue _fun0009;
case 38:
                    var2 = global;
                    var7 = var2.parseInt;
                    var5 = var4.headers;
                    var6 = var5.retry-after;
                    var5 = undefined;
                    var8 = var7.bind(var5)(var6);
                    var2 = var2.isNaN;
                    var6 = var2.bind(var5)(var8);
                    var2 = _closure3_slot2;
                    if(var6) { _fun0009_ip = 40; continue _fun0009 }
case 41:
                    var6 = {};
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 11;
                    var7 = var10[var7];
                    var7 = var9.bind(var5)(var7);
                    var7 = var7.Millis;
                    var7 = var7.SECOND;
                    var7 = var8 * var7;
                    var6['retryAfter'] = var7;
                    var6 = var2.bind(var5)(var6);
                    _fun0009_ip = 37; continue _fun0009;
case 40:
                    var2 = var2.bind(var5)(var3, var4);
case 37:
                    var2 = undefined;
                    return var2;
case 32:
                    var2 = _closure3_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3, var4);
                    return var1;
                }
            };
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'handleSend';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var5 = arg1;
                var4 = arg2;
                var1 = this;
                var _closure3_slot0 = var1;
                var _closure3_slot1 = var5;
                var16 = var5.channelId;
                var8 = var5.analyticsLocation;
                var6 = _closure1_slot5;
                var2 = _closure1_slot3;
                var3 = undefined;
                var6 = var6.bind(var3)(var5, var2);
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 15;
                var2 = var10[var2];
                var2 = var7.bind(var3)(var2);
                var7 = var2.bind(var3)();
                var2 = null;
                if(!(var2 != var7)) { _fun0010_ip = 42; continue _fun0010 }
case 43:
                var8 = var7;
case 42:
                var7 = var2 != var8;
                var11 = undefined;
                if(!var7) { _fun0010_ip = 28; continue _fun0010 }
case 44:
                var7 = {};
                var7['location'] = var8;
                var11 = var7;
case 28:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 16;
                var7 = var10[var7];
                var8 = var8.bind(var3)(var7);
                var7 = var8.getSignalStrength;
                var8 = var7.bind(var8)();
                var13 = {};
                var10 = _closure1_slot13;
                var7 = var10.getType;
                var7 = var7.bind(var10)();
                var13['mobile_network_type'] = var7;
                var18 = var13;
                var17 = var6;
                var6 = copyDataProperties(var18, var17);
                var6 = var2 != var8;
                if(!var6) { _fun0010_ip = 45; continue _fun0010 }
case 46:
                var7 = {};
                var7['signal_strength'] = var8;
                var6 = var7;
case 45:
                var18 = var13;
                var17 = var6;
                var6 = copyDataProperties(var18, var17);
                var8 = _closure1_slot11;
                var7 = var8.get;
                var6 = 'send_fail_100';
                var6 = var7.bind(var8)(var6);
                if(var6) { _fun0010_ip = 47; continue _fun0010 }
case 41:
                var7 = var1.createResponseHandler;
                var6 = var5.nonce;
                var8 = var7.bind(var1)(var6, var4);
                var6 = global;
                var6 = var6.AbortController;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var19 = var7;
                var6 = new var19[var6](var18);
                var10 = var6 instanceof Object ? var6 : var7;
                var _closure3_slot2 = var10;
                var6 = var1.startQueueMetricTimers;
                var5 = var5.nonce;
                var5 = var6.bind(var1)(var5);
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 13;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var7 = var5.HTTP;
                var6 = var7.post;
                var5 = {};
                var15 = _closure1_slot15;
                var14 = var15.MESSAGES;
                var14 = var14.bind(var15)(var16);
                var5['url'] = var14;
                var5['body'] = var13;
                var5['context'] = var11;
                var11 = true;
                var5['oldFormErrors'] = var11;
                var17 = _closure1_slot17;
                var18 = var5;
                var12 = copyDataProperties(var18, var17);
                var12 = var10.signal;
                var10 = 'signal';
                var5[var10] = var12;
                var10 = 'rejectWithError';
                var5[var10] = var11;
                var10 = function onRequestCreated() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var2 = _closure3_slot1;
                        var3 = var2.nonce;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0011_ip = 48; continue _fun0011 }
case 49:
                        var2 = _closure3_slot0;
                        var4 = var2.requests;
                        var3 = var4.set;
                        var2 = _closure3_slot1;
                        var2 = var2.nonce;
                        var1 = _closure3_slot2;
                        var1 = var3.bind(var4)(var2, var1);
case 48:
                        var1 = undefined;
                        return var1;
                    }
                };
                var9 = 'onRequestCreated';
                var5[var9] = var10;
                var5 = var6.bind(var7)(var5, var8);
                return var3;
case 47:
                var6 = var1.logger;
                var5 = var6.log;
                var1 = 'Skipping message send because send_fail_100 is enabled';
                var1 = var5.bind(var6)(var1);
                var1 = {'ok': false, 'hasErr': false, 'status': 500, 'headers': null, 'body': '{}', 'text': 'Simulated failure'};
                var5 = {};
                var1['headers'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'handleSendAnnouncement';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var5 = arg1;
                var4 = arg2;
                var1 = this;
                var _closure3_slot0 = var1;
                var _closure3_slot1 = var5;
                var16 = var5.channelId;
                var8 = var5.analyticsLocation;
                var6 = _closure1_slot5;
                var2 = _closure1_slot4;
                var3 = undefined;
                var6 = var6.bind(var3)(var5, var2);
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 15;
                var2 = var10[var2];
                var2 = var7.bind(var3)(var2);
                var7 = var2.bind(var3)();
                var2 = null;
                if(!(var2 != var7)) { _fun0012_ip = 42; continue _fun0012 }
case 43:
                var8 = var7;
case 42:
                var7 = var2 != var8;
                var11 = undefined;
                if(!var7) { _fun0012_ip = 28; continue _fun0012 }
case 44:
                var7 = {};
                var7['location'] = var8;
                var11 = var7;
case 28:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 16;
                var7 = var10[var7];
                var8 = var8.bind(var3)(var7);
                var7 = var8.getSignalStrength;
                var8 = var7.bind(var8)();
                var13 = {};
                var10 = _closure1_slot13;
                var7 = var10.getType;
                var7 = var7.bind(var10)();
                var13['mobile_network_type'] = var7;
                var18 = var13;
                var17 = var6;
                var6 = copyDataProperties(var18, var17);
                var6 = var2 != var8;
                if(!var6) { _fun0012_ip = 45; continue _fun0012 }
case 46:
                var7 = {};
                var7['signal_strength'] = var8;
                var6 = var7;
case 45:
                var18 = var13;
                var17 = var6;
                var6 = copyDataProperties(var18, var17);
                var8 = _closure1_slot11;
                var7 = var8.get;
                var6 = 'send_fail_100';
                var6 = var7.bind(var8)(var6);
                if(var6) { _fun0012_ip = 47; continue _fun0012 }
case 41:
                var7 = var1.createResponseHandler;
                var6 = var5.nonce;
                var8 = var7.bind(var1)(var6, var4);
                var6 = global;
                var6 = var6.AbortController;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var19 = var7;
                var6 = new var19[var6](var18);
                var10 = var6 instanceof Object ? var6 : var7;
                var _closure3_slot2 = var10;
                var6 = var1.startQueueMetricTimers;
                var5 = var5.nonce;
                var5 = var6.bind(var1)(var5);
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 13;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var7 = var5.HTTP;
                var6 = var7.post;
                var5 = {};
                var15 = _closure1_slot15;
                var14 = var15.MESSAGES_ANNOUNCEMENT;
                var14 = var14.bind(var15)(var16);
                var5['url'] = var14;
                var5['body'] = var13;
                var5['context'] = var11;
                var11 = true;
                var5['oldFormErrors'] = var11;
                var17 = _closure1_slot17;
                var18 = var5;
                var12 = copyDataProperties(var18, var17);
                var12 = var10.signal;
                var10 = 'signal';
                var5[var10] = var12;
                var10 = 'rejectWithError';
                var5[var10] = var11;
                var10 = function onRequestCreated() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var2 = _closure3_slot1;
                        var3 = var2.nonce;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0013_ip = 48; continue _fun0013 }
case 49:
                        var2 = _closure3_slot0;
                        var4 = var2.requests;
                        var3 = var4.set;
                        var2 = _closure3_slot1;
                        var2 = var2.nonce;
                        var1 = _closure3_slot2;
                        var1 = var3.bind(var4)(var2, var1);
case 48:
                        var1 = undefined;
                        return var1;
                    }
                };
                var9 = 'onRequestCreated';
                var5[var9] = var10;
                var5 = var6.bind(var7)(var5, var8);
                return var3;
case 47:
                var6 = var1.logger;
                var5 = var6.log;
                var1 = 'Skipping message send because send_fail_100 is enabled';
                var1 = var5.bind(var6)(var1);
                var1 = {'ok': false, 'hasErr': false, 'status': 500, 'headers': null, 'body': '{}', 'text': 'Simulated failure'};
                var5 = {};
                var1['headers'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'handleCommand';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = arg1;
                var8 = this;
                var _closure3_slot0 = var8;
                var14 = var1.applicationId;
                var12 = var1.guildId;
                var _closure3_slot1 = var12;
                var9 = var1.channelId;
                var6 = var1.data;
                var7 = var1.nonce;
                var _closure3_slot2 = var7;
                var10 = var1.attachments;
                var3 = var1.maxSizeCallback;
                var _closure3_slot3 = var3;
                var5 = var1.analytics_location;
                var4 = var1.sectionName;
                var3 = var1.source;
                var1 = undefined;
                var _closure3_slot4 = var1;
                var13 = {};
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var15 = 17;
                var15 = var17[var15];
                var15 = var16.bind(var1)(var15);
                var15 = var15.InteractionTypes;
                var15 = var15.APPLICATION_COMMAND;
                var13['type'] = var15;
                var13['application_id'] = var14;
                var13['guild_id'] = var12;
                var13['channel_id'] = var9;
                var12 = _closure1_slot12;
                var9 = var12.getSessionId;
                var9 = var9.bind(var12)();
                var13['session_id'] = var9;
                var13['data'] = var6;
                var13['nonce'] = var7;
                var13['analytics_location'] = var5;
                var13['section_name'] = var4;
                var13['source'] = var3;
                var3 = null;
                var3 = var3 != var10;
                var9 = undefined;
                if(!var3) { _fun0014_ip = 50; continue _fun0014 }
case 13:
                var4 = var13.data;
                var3 = new Array(0);
                var4['attachments'] = var3;
                var9 = new Array(0);
                var5 = var13.data;
                var6 = var10.map;
                var4 = function(arg1, arg2) {
                    var4 = arg1;
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 18;
                    var2 = var5[var2];
                    var3 = undefined;
                    var7 = var6.bind(var3)(var2);
                    var6 = var4.status;
                    var2 = _closure1_slot0;
                    var1 = 19;
                    var1 = var5[var1];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.CloudUploadStatus;
                    var1 = var1.COMPLETED;
                    var6 = var6 === var1;
                    var1 = 'Uploads must be staged before trying to send a message';
                    var1 = var7.bind(var3)(var6, var1);
                    var1 = 20;
                    var1 = var5[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.getAttachmentPayload;
                    var1 = arg2;
                    var1 = var2.bind(var3)(var4, var1);
                    return var1;
                };
                var4 = var6.bind(var10)(var4);
                var5['attachments'] = var4;
case 50:
                var10 = global;
                var3 = var10.AbortController;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var20 = var4;
                var3 = new var20[var3](var19);
                var6 = var3 instanceof Object ? var3 : var4;
                _closure3_slot4 = var6;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 13;
                var3 = var5[var3];
                var3 = var4.bind(var1)(var3);
                var5 = var3.HTTP;
                var4 = var5.post;
                var3 = {};
                var11 = _closure1_slot15;
                var11 = var11.INTERACTIONS;
                var3['url'] = var11;
                var11 = {};
                var12 = 'payload_json';
                var11['name'] = var12;
                var12 = var10.JSON;
                var10 = var12.stringify;
                var10 = var10.bind(var12)(var13);
                var11['value'] = var10;
                var10 = new Array(1);
                var10[0] = var11;
                var3['fields'] = var10;
                var3['attachments'] = var9;
                var6 = var6.signal;
                var3['signal'] = var6;
                var6 = true;
                var3['rejectWithError'] = var6;
                var2 = function onRequestCreated(arg1) {
                    var4 = arg1;
                    var2 = _closure3_slot0;
                    var5 = var2.requests;
                    var3 = var5.set;
                    var2 = _closure3_slot2;
                    var1 = _closure3_slot4;
                    var1 = var3.bind(var5)(var2, var1);
                    var3 = var4.on;
                    var2 = 'progress';
                    var1 = function(arg1) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var1 = arg1;
                            var6 = var1.total;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 21;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.maxFileSize;
                            var3 = _closure3_slot1;
                            var3 = var4.bind(var5)(var3);
                            var5 = null;
                            var4 = var5 != var6;
                            if(!var4) { _fun0015_ip = 51; continue _fun0015 }
case 23:
                            var4 = var6 > var3;
case 51:
                            if(!var4) { _fun0015_ip = 52; continue _fun0015 }
case 53:
                            var7 = _closure3_slot0;
                            var6 = var7.cancelRequest;
                            var4 = _closure3_slot2;
                            var4 = var6.bind(var7)(var4);
                            var4 = _closure3_slot3;
                            if(!(var5 != var4)) { _fun0015_ip = 52; continue _fun0015 }
case 54:
                            var2 = _closure3_slot3;
                            var2 = var2.bind(var1)(var3);
case 52:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var3['onRequestCreated'] = var2;
                var6 = var8.createResponseHandler;
                var2 = arg2;
                var2 = var6.bind(var8)(var7, var2);
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[9] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var7.bind(var1)(var8);
    var8 = var7.prototype;
    var8 = Object.create(var8, {constructor: {value: var7}});
    var17 = var8;
    var7 = new var17[var7](var16);
    var7 = var7 instanceof Object ? var7 : var8;
    var8 = 23;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'lib/MessageQueue.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var3['MessageDataType'] = var6;
    var3['isMessageDataSend'] = var5;
    var3['isMessageDataEdit'] = var4;
    var4 = function(arg1) {
        var1 = arg1;
        var2 = var1.type;
        var1 = _closure1_slot18;
        var1 = var1.COMMAND;
        var1 = var2 === var1;
        return var1;
    };
    var3['isMessageDataCommand'] = var4;
    var2 = function(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot19;
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            if(var4) { _fun0016_ip = 55; continue _fun0016 }
case 56:
            var1 = _closure1_slot20;
            var1 = var1.bind(var3)(var2);
            var3 = var2.message;
            if(var1) { _fun0016_ip = 57; continue _fun0016 }
case 58:
            var1 = var3.data;
            var1 = var1.id;
            _fun0016_ip = 48; continue _fun0016;
case 57:
            var1 = var3.messageId;
case 48:
            _fun0016_ip = 59; continue _fun0016;
case 55:
            var2 = var2.message;
            var1 = var2.nonce;
case 59:
            return var1;
        }
    };
    var3['getFailedMessageId'] = var2;
    return var1;
})();