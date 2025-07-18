// discord_common/js/packages/analytics-utils/AnalyticsTrackingStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var6 = native2;
        var9 = native3;
        var3 = native6;
        var7 = native7;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var9;
        var _closure1_slot2 = var7;
        var1 = function _isNativeReflectConstruct() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                _fun0002_ip = 74; continue _fun0002;
 72: // catch_target0
                CatchBlockStart(arg_register=1);
 74:
                var2 = function _isNativeReflectConstruct() {
                    var1 = _closure2_slot0;
                    var1 = !var1;
                    var1 = !var1;
                    return var1;
                };
                _closure1_slot36 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot36 = var1;
        var1 = function incrementMetric(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arguments[1];
                var1 = undefined;
                if(!(var2 === var1)) { _fun0003_ip = 12; continue _fun0003 }
 9:
                var2 = 1;
 12:
                var1 = arg1;
                var1 = var1 + var2;
                return var1;
            }
        };
        var _closure1_slot37 = var1;
        var4 = global;
        var10 = var4.Object;
        var8 = var10.defineProperty;
        var5 = {};
        var1 = true;
        var5['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var10)(var3, var1, var5);
        var8 = 0;
        var5 = var7[var8];
        var1 = undefined;
        var5 = var9.bind(var1)(var5);
        var _closure1_slot3 = var5;
        var5 = 1;
        var5 = var7[var5];
        var5 = var9.bind(var1)(var5);
        var _closure1_slot4 = var5;
        var5 = 2;
        var5 = var7[var5];
        var5 = var9.bind(var1)(var5);
        var _closure1_slot5 = var5;
        var5 = 3;
        var5 = var7[var5];
        var5 = var9.bind(var1)(var5);
        var _closure1_slot6 = var5;
        var5 = 4;
        var5 = var7[var5];
        var5 = var9.bind(var1)(var5);
        var _closure1_slot7 = var5;
        var5 = 5;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var9 = var5.TelemetryEndpoints;
        var _closure1_slot8 = var9;
        var5 = var5.TelemetryEvents;
        var _closure1_slot9 = var5;
        var5 = {'FREQUENCY': 3600000, 'MIN_DELAY': 60000, 'MAX_DELAY': 3600000};
        var9 = var5.FREQUENCY;
        var _closure1_slot10 = var9;
        var9 = var5.MIN_DELAY;
        var _closure1_slot11 = var9;
        var5 = var5.MAX_DELAY;
        var _closure1_slot12 = var5;
        var5 = 1500;
        var _closure1_slot13 = var5;
        var _closure1_slot14 = var8;
        var _closure1_slot15 = var8;
        var _closure1_slot16 = var8;
        var _closure1_slot17 = var8;
        var _closure1_slot18 = var8;
        var5 = null;
        var _closure1_slot19 = var5;
        var _closure1_slot20 = var8;
        var9 = var4.Number;
        var9 = var9.MAX_SAFE_INTEGER;
        var _closure1_slot21 = var9;
        var _closure1_slot22 = var8;
        var _closure1_slot23 = var8;
        var _closure1_slot24 = var5;
        var8 = false;
        var _closure1_slot25 = var8;
        var _closure1_slot26 = var5;
        var _closure1_slot27 = var5;
        var4 = var4.window;
        var4 = var4.requestIdleCallback;
        if(!(var5 == var4)) { _fun0001_ip = 332; continue _fun0001 }
 327:
        var4 = function(arg1) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = global;
            var3 = var2.setImmediate;
            var2 = undefined;
            var1 = function() {
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            return var1;
        };
 332:
        var _closure1_slot30 = var4;
        var4 = 6;
        var4 = var7[var4];
        var4 = var6.bind(var1)(var4);
        var4 = var4.IdGenerator;
        var8 = var4.prototype;
        var8 = Object.create(var8, {constructor: {value: var4}});
        var14 = var8;
        var4 = new var14[var4](var13);
        var4 = var4 instanceof Object ? var4 : var8;
        var _closure1_slot31 = var4;
        var4 = {};
        var8 = function handleConnectionOpen() {
            var1 = undefined;
            return var1;
        };
        var4['handleConnectionOpen'] = var8;
        var8 = function handleConnectionClosed() {
            var1 = undefined;
            return var1;
        };
        var4['handleConnectionClosed'] = var8;
        var8 = function handleFingerprint() {
            var1 = undefined;
            return var1;
        };
        var4['handleFingerprint'] = var8;
        var8 = function handleTrack() {
            var1 = undefined;
            return var1;
        };
        var4['handleTrack'] = var8;
        var _closure1_slot32 = var4;
        var8 = new Array(0);
        var _closure1_slot33 = var8;
        var _closure1_slot34 = var5;
        var5 = function defaultGetSessionId() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.resolve;
            var1 = {};
            var4 = undefined;
            var1['sessionId'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var _closure1_slot35 = var5;
        var5 = 11;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = '../discord_common/js/packages/analytics-utils/AnalyticsTrackingStore.tsx';
        var5 = var6.bind(var7)(var5);
        var3['AnalyticsActionHandlers'] = var4;
        var2 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var6 = arg1;
                var4 = var6.dispatcher;
                var3 = var6.actionHandler;
                var2 = var6.getFingerprint;
                var _closure2_slot0 = var2;
                var2 = var6.getSessionId;
                var5 = undefined;
                if(!(var2 === var5)) { _fun0004_ip = 46; continue _fun0004 }
 39:
                var2 = _closure1_slot35;
 46:
                var _closure2_slot1 = var2;
                var2 = var6.TRACKING_URL;
                var _closure2_slot2 = var2;
                var2 = var6.drainTimeoutOverride;
                var7 = var6.waitFor;
                var _closure2_slot3 = var7;
                var7 = var6.scheduleWhenIdle;
                if(!(var7 === var5)) { _fun0004_ip = 93; continue _fun0004 }
 86:
                var7 = _closure1_slot30;
 93:
                var _closure2_slot4 = var7;
                var6 = var6.getLaunchSignature;
                if(!(var6 === var5)) { _fun0004_ip = 112; continue _fun0004 }
 107:
                var6 = function B() {
                    var1 = null;
                    return var1;
                };
 112:
                var _closure2_slot5 = var6;
                var6 = function canDrain() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var1 = _closure1_slot33;
                        var2 = var1.length;
                        var1 = 0;
                        var1 = var1 !== var2;
                        if(!var1) { _fun0005_ip = 61; continue _fun0005 }
 21:
                        var2 = _closure1_slot29;
                        var4 = null;
                        if(!(var4 == var2)) { _fun0005_ip = 50; continue _fun0005 }
 31:
                        var5 = _closure2_slot0;
                        var2 = undefined;
                        var2 = var5.bind(var2)();
                        var2 = var4 != var2;
                        _fun0005_ip = 58; continue _fun0005;
 50:
                        var3 = _closure1_slot28;
                        var2 = var4 != var3;
 58:
                        var1 = var2;
 61:
                        return var1;
                    }
                };
                var _closure2_slot6 = var6;
                var6 = function scheduleDrain(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.shouldFlushOnNextTick;
                        var1 = undefined;
                        if(!(var2 === var1)) { _fun0006_ip = 17; continue _fun0006 }
 15:
                        var2 = false;
 17:
                        var5 = _closure1_slot34;
                        var4 = null;
                        var4 = var4 == var5;
                        if(!var4) { _fun0006_ip = 44; continue _fun0006 }
 33:
                        var5 = _closure2_slot6;
                        var4 = var5.bind(var1)();
 44:
                        if(!var4) { _fun0006_ip = 104; continue _fun0006 }
 47:
                        if(var2) { _fun0006_ip = 80; continue _fun0006 }
 53:
                        var6 = _closure2_slot4;
                        var5 = _closure2_slot8;
                        var2 = {};
                        var7 = _closure1_slot13;
                        var2['timeout'] = var7;
                        var2 = var6.bind(var1)(var5, var2);
                        _fun0006_ip = 100; continue _fun0006;
 80:
                        var5 = global;
                        var6 = var5.setTimeout;
                        var5 = _closure2_slot8;
                        var4 = 0;
                        var2 = var6.bind(var1)(var5, var4);
 100:
                        _closure1_slot34 = var2;
 104:
                        return var1;
                    }
                };
                var _closure2_slot7 = var6;
                var6 = function drainEventsQueue() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var1 = null;
                        _closure1_slot34 = var1;
                        var3 = _closure2_slot6;
                        var4 = undefined;
                        var3 = var3.bind(var4)();
                        if(var3) { _fun0007_ip = 47; continue _fun0007 }
 27:
                        var3 = global;
                        var5 = var3.Promise;
                        var3 = var5.resolve;
                        var3 = var3.bind(var5)();
                        return var3;
 47:
                        var5 = _closure1_slot33;
                        var3 = var5.slice;
                        var3 = var3.bind(var5)();
                        var _closure3_slot0 = var3;
                        var5 = new Array(0);
                        _closure1_slot33 = var5;
                        var8 = _closure1_slot37;
                        var5 = _closure1_slot20;
                        var5 = var8.bind(var4)(var5);
                        _closure1_slot20 = var5;
                        var7 = var3.length;
                        var5 = global;
                        var11 = var5.Math;
                        var10 = var11.min;
                        var9 = _closure1_slot21;
                        var9 = var10.bind(var11)(var9, var7);
                        _closure1_slot21 = var9;
                        var10 = var5.Math;
                        var9 = var10.max;
                        var5 = _closure1_slot22;
                        var5 = var9.bind(var10)(var5, var7);
                        _closure1_slot22 = var5;
                        var5 = _closure1_slot23;
                        var5 = var8.bind(var4)(var5, var7);
                        _closure1_slot23 = var5;
                        var1 = _closure2_slot9;
                        var1 = var1.bind(var4)(var3);
                        var4 = var1.then;
                        var3 = function() {
                            var3 = _closure3_slot0;
                            var2 = var3.forEach;
                            var1 = function(arg1) {
                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                                    var2 = arg1;
                                    var3 = var2.resolve;
                                    var1 = null;
                                    if(!(var1 != var3)) { _fun0008_ip = 25; continue _fun0008 }
 15:
                                    var1 = var2.resolve;
                                    var1 = var1.bind(var2)();
 25:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            var4 = _closure1_slot37;
                            var2 = _closure1_slot16;
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            _closure1_slot16 = var2;
                            return var1;
                        };
                        var2 = function(arg1) {
                            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                                var3 = arg1;
                                var5 = _closure1_slot33;
                                var2 = var5.unshift;
                                var9 = _closure3_slot0;
                                var1 = new Array(0);
                                var8 = 0;
                                var10 = var1;
                                var6 = arraySpread(var10, var9, var8);
                                var10 = var2;
                                var9 = var1;
                                var8 = var5;
                                var1 = apply(var10, var9, var8);
                                var5 = _closure1_slot37;
                                var2 = _closure1_slot17;
                                var1 = undefined;
                                var2 = var5.bind(var1)(var2);
                                _closure1_slot17 = var2;
                                var2 = var3.body;
                                if(var2) { _fun0009_ip = 79; continue _fun0009 }
 76:
                                var2 = var3;
 79:
                                var2 = var2.message;
                                return var1;
                            }
                        };
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    }
                };
                var _closure2_slot8 = var6;
                var6 = function submitEventsImmediately(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var5 = arg1;
                        var8 = arguments[1];
                        var4 = undefined;
                        if(!(var8 === var4)) { _fun0010_ip = 21; continue _fun0010 }
 14:
                        var8 = _closure2_slot2;
 21:
                        var _closure3_slot0 = var4;
                        var _closure3_slot1 = var4;
                        var2 = global;
                        var3 = var2.Date;
                        var2 = var3.now;
                        var2 = var2.bind(var3)();
                        _closure3_slot0 = var2;
                        var3 = var5.map;
                        var2 = function(arg1) {
                            var2 = arg1;
                            var1 = {};
                            var6 = var1;
                            var5 = var2;
                            var3 = copyDataProperties(var6, var5);
                            var3 = {};
                            var5 = var2.properties;
                            var6 = var3;
                            var2 = copyDataProperties(var6, var5);
                            var4 = _closure3_slot0;
                            var2 = 'client_send_timestamp';
                            var3[var2] = var4;
                            var2 = 'properties';
                            var1[var2] = var3;
                            return var1;
                        };
                        var6 = var3.bind(var5)(var2);
                        var5 = {};
                        _closure3_slot1 = var5;
                        var2 = _closure1_slot25;
                        if(var2) { _fun0010_ip = 127; continue _fun0010 }
 81:
                        var3 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 8;
                        var2 = var9[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.v4;
                        var2 = var2.bind(var3)();
                        _closure1_slot27 = var2;
                        var5['x-science-test'] = var2;
                        var2 = true;
                        _closure1_slot25 = var2;
 127:
                        var3 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 9;
                        var2 = var9[var2];
                        var2 = var3.bind(var4)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.post;
                        var2 = {};
                        var2['url'] = var8;
                        var2['headers'] = var5;
                        var5 = {};
                        var7 = _closure1_slot28;
                        var5['token'] = var7;
                        var5['events'] = var6;
                        var2['body'] = var5;
                        var5 = 3;
                        var2['retries'] = var5;
                        var5 = false;
                        var2['rejectWithError'] = var5;
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.then;
                        var1 = function(arg1) {
                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                                var1 = arg1;
                                var2 = _closure3_slot1;
                                var2 = var2.x-science-test;
                                if(!var2) { _fun0011_ip = 70; continue _fun0011 }
 19:
                                var3 = null;
                                var4 = var3 == var1;
                                var2 = undefined;
                                if(var4) { _fun0011_ip = 51; continue _fun0011 }
 30:
                                var4 = var1.headers;
                                var5 = var3 == var4;
                                var2 = undefined;
                                if(var5) { _fun0011_ip = 51; continue _fun0011 }
 45:
                                var2 = var4.x-science-test;
 51:
                                var4 = var3 != var2;
                                var3 = null;
                                if(!var4) { _fun0011_ip = 63; continue _fun0011 }
 60:
                                var3 = var2;
 63:
                                _closure1_slot26 = var3;
 70:
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var _closure2_slot9 = var6;
                var6 = function sendTelemetryEvent() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var5 = {};
                        var2 = _closure1_slot9;
                        var2 = var2.CLIENT_TELEMETRY;
                        var5['type'] = var2;
                        var7 = {};
                        var3 = global;
                        var4 = var3.Date;
                        var2 = var4.now;
                        var2 = var2.bind(var4)();
                        var7['client_track_timestamp'] = var2;
                        var2 = _closure1_slot16;
                        var7['rpc_success_count'] = var2;
                        var2 = _closure1_slot17;
                        var7['rpc_failure_count'] = var2;
                        var2 = _closure1_slot18;
                        var7['first_seen_event_sequence_number'] = var2;
                        var2 = _closure1_slot14;
                        var7['last_seen_event_sequence_number'] = var2;
                        var2 = _closure1_slot19;
                        var7['telemetry_period_start_timestamp'] = var2;
                        var4 = var3.Date;
                        var2 = var4.now;
                        var2 = var2.bind(var4)();
                        var7['telemetry_period_end_timestamp'] = var2;
                        var2 = _closure1_slot15;
                        var7['event_queue_rejection_count'] = var2;
                        var2 = _closure1_slot20;
                        var7['event_queue_batch_count'] = var2;
                        var8 = _closure1_slot21;
                        var2 = var3.Number;
                        var4 = var2.MAX_SAFE_INTEGER;
                        var6 = 0;
                        var2 = 0;
                        if(!(var8 !== var4)) { _fun0012_ip = 154; continue _fun0012 }
 150:
                        var2 = _closure1_slot21;
 154:
                        var7['event_queue_batch_min_size'] = var2;
                        var2 = _closure1_slot22;
                        var7['event_queue_batch_max_size'] = var2;
                        var2 = _closure1_slot20;
                        var4 = var2 > var6;
                        var2 = 0;
                        if(!var4) { _fun0012_ip = 193; continue _fun0012 }
 181:
                        var8 = _closure1_slot23;
                        var4 = _closure1_slot20;
                        var2 = var8 / var4;
 193:
                        var7['event_queue_batch_avg_size'] = var2;
                        var2 = _closure1_slot27;
                        var7['science_request_id'] = var2;
                        var2 = _closure1_slot26;
                        var7['science_response'] = var2;
                        var8 = _closure2_slot5;
                        var4 = undefined;
                        var8 = var8.bind(var4)();
                        var7['launch_signature'] = var8;
                        var5['properties'] = var7;
                        _closure1_slot15 = var6;
                        _closure1_slot16 = var6;
                        _closure1_slot17 = var6;
                        _closure1_slot20 = var6;
                        var7 = var3.Number;
                        var7 = var7.MAX_SAFE_INTEGER;
                        _closure1_slot21 = var7;
                        _closure1_slot22 = var6;
                        _closure1_slot23 = var6;
                        var6 = var3.Date;
                        var3 = var6.now;
                        var3 = var3.bind(var6)();
                        _closure1_slot19 = var3;
                        var3 = _closure1_slot14;
                        _closure1_slot18 = var3;
                        var3 = _closure2_slot9;
                        var2 = new Array(1);
                        var2[0] = var5;
                        var1 = _closure1_slot8;
                        var1 = var1.CLIENT_TELEMETRY;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    }
                };
                var _closure2_slot10 = var6;
                var6 = function stopTelemetryHeartbeat() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        var3 = _closure1_slot24;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0013_ip = 103; continue _fun0013 }
 13:
                        var3 = _closure1_slot24;
                        var4 = var3.type;
                        var3 = 'timeout';
                        if(!(var3 !== var4)) { _fun0013_ip = 75; continue _fun0013 }
 30:
                        var3 = 'interval';
                        if(!(var3 !== var4)) { _fun0013_ip = 49; continue _fun0013 }
 38:
                        var3 = _closure1_slot24;
                        var3 = var3.type;
                        _fun0013_ip = 99; continue _fun0013;
 49:
                        var3 = global;
                        var5 = var3.clearInterval;
                        var3 = _closure1_slot24;
                        var4 = var3.id;
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        _fun0013_ip = 99; continue _fun0013;
 75:
                        var3 = global;
                        var5 = var3.clearTimeout;
                        var3 = _closure1_slot24;
                        var4 = var3.id;
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
 99:
                        _closure1_slot24 = var1;
 103:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure2_slot11 = var6;
                var6 = null;
                var7 = var6 != var2;
                var6 = 1500;
                if(!var7) { _fun0004_ip = 188; continue _fun0004 }
 185:
                var6 = var2;
 188:
                _closure1_slot13 = var6;
                var7 = _closure1_slot32;
                var6 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.analyticsToken;
                        var1 = var1.user;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0014_ip = 27; continue _fun0014 }
 20:
                        var _closure1_slot28 = var4;
 27:
                        var2 = var1.id;
                        if(!(var3 != var2)) { _fun0014_ip = 48; continue _fun0014 }
 36:
                        var2 = var1.id;
                        var _closure1_slot29 = var2;
 48:
                        var1 = function startTelemetryHeartbeat() {
                            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                                var4 = _closure1_slot24;
                                var1 = null;
                                if(!(var1 == var4)) { _fun0015_ip = 116; continue _fun0015 }
 15:
                                var4 = global;
                                var6 = var4.Math;
                                var5 = var6.floor;
                                var7 = var4.Math;
                                var1 = var7.random;
                                var8 = var1.bind(var7)();
                                var1 = _closure1_slot12;
                                var7 = _closure1_slot11;
                                var1 = var1 - var7;
                                var1 = var8 * var1;
                                var1 = var1 + var7;
                                var6 = var5.bind(var6)(var1);
                                var1 = function scheduleNextHeartbeat() {
                                    var4 = _closure1_slot10;
                                    var1 = 0.1;
                                    var5 = var1 * var4;
                                    var1 = global;
                                    var7 = var1.Math;
                                    var6 = var7.floor;
                                    var8 = var1.Math;
                                    var2 = var8.random;
                                    var2 = var2.bind(var8)();
                                    var8 = var2 * var5;
                                    var2 = 2;
                                    var2 = var8 * var2;
                                    var2 = var6.bind(var7)(var2);
                                    var2 = var2 - var5;
                                    var6 = var1.Math;
                                    var5 = var6.max;
                                    var4 = var4 + var2;
                                    var2 = _closure1_slot11;
                                    var6 = var5.bind(var6)(var4, var2);
                                    var2 = {};
                                    var4 = 'timeout';
                                    var2['type'] = var4;
                                    var5 = var1.setTimeout;
                                    var1 = undefined;
                                    var4 = function() {
                                        var2 = _closure2_slot10;
                                        var1 = undefined;
                                        var2 = var2.bind(var1)();
                                        var2 = _closure4_slot0;
                                        var2 = var2.bind(var1)();
                                        return var1;
                                    };
                                    var4 = var5.bind(var1)(var4, var6);
                                    var2['id'] = var4;
                                    _closure1_slot24 = var2;
                                    return var1;
                                };
                                var _closure4_slot0 = var1;
                                var1 = {};
                                var5 = 'timeout';
                                var1['type'] = var5;
                                var5 = var4.setTimeout;
                                var4 = undefined;
                                var3 = function() {
                                    var2 = _closure2_slot10;
                                    var1 = undefined;
                                    var2 = var2.bind(var1)();
                                    var2 = _closure4_slot0;
                                    var2 = var2.bind(var1)();
                                    return var1;
                                };
                                var3 = var5.bind(var4)(var3, var6);
                                var1['id'] = var3;
                                _closure1_slot24 = var1;
 116:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var4 = undefined;
                        var1 = var1.bind(var4)();
                        var3 = _closure2_slot7;
                        var2 = {};
                        var1 = false;
                        var2['shouldFlushOnNextTick'] = var1;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var7['handleConnectionOpen'] = var6;
                var7 = _closure1_slot32;
                var6 = function() {
                    var3 = _closure2_slot8;
                    var2 = undefined;
                    var3 = var3.bind(var2)();
                    var1 = _closure2_slot11;
                    var1 = var1.bind(var2)();
                    var1 = null;
                    _closure1_slot28 = var1;
                    _closure1_slot29 = var1;
                    var1 = false;
                    return var1;
                };
                var7['handleConnectionClosed'] = var6;
                var7 = _closure1_slot32;
                var6 = function() {
                    var2 = _closure2_slot8;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    var1 = false;
                    return var1;
                };
                var7['handleFingerprint'] = var6;
                var7 = _closure1_slot32;
                var6 = function(arg1) {
                    var2 = arg1;
                    var3 = var2.event;
                    var _closure3_slot0 = var3;
                    var3 = var2.properties;
                    var _closure3_slot1 = var3;
                    var3 = var2.flush;
                    var _closure3_slot2 = var3;
                    var3 = var2.fingerprint;
                    var _closure3_slot3 = var3;
                    var2 = var2.resolve;
                    var _closure3_slot4 = var2;
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var3 = var3.bind(var2)();
                    var2 = var3.then;
                    var1 = function(arg1) {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                            var1 = arg1;
                            var3 = var1.sessionId;
                            var5 = {};
                            var2 = _closure3_slot0;
                            var5['type'] = var2;
                            var2 = _closure3_slot3;
                            var5['fingerprint'] = var2;
                            var2 = {};
                            var4 = global;
                            var6 = var4.Date;
                            var4 = var6.now;
                            var4 = var4.bind(var6)();
                            var2['client_track_timestamp'] = var4;
                            var2['client_heartbeat_session_id'] = var3;
                            var4 = _closure1_slot14;
                            var4 = var4 + 1;
                            _closure1_slot14 = var4;
                            var2['event_sequence_number'] = var4;
                            var10 = _closure3_slot1;
                            var11 = var2;
                            var4 = copyDataProperties(var11, var10);
                            var5['properties'] = var2;
                            var2 = _closure3_slot4;
                            var5['resolve'] = var2;
                            var4 = _closure1_slot29;
                            var2 = null;
                            if(!(var2 == var4)) { _fun0016_ip = 181; continue _fun0016 }
 114:
                            var8 = var5.fingerprint;
                            if(!(var2 == var8)) { _fun0016_ip = 137; continue _fun0016 }
 124:
                            var6 = _closure2_slot0;
                            var4 = undefined;
                            var8 = var6.bind(var4)();
 137:
                            var4 = var2 != var8;
                            var7 = null;
                            if(!var4) { _fun0016_ip = 179; continue _fun0016 }
 146:
                            var9 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 7;
                            var6 = var6[var4];
                            var4 = undefined;
                            var6 = var9.bind(var4)(var6);
                            var4 = var6.extractId;
                            var7 = var4.bind(var6)(var8);
 179:
                            _fun0016_ip = 185; continue _fun0016;
 181:
                            var7 = _closure1_slot29;
 185:
                            if(!(var2 != var7)) { _fun0016_ip = 216; continue _fun0016 }
 189:
                            var4 = var5.properties;
                            var6 = _closure1_slot31;
                            var2 = var6.generate;
                            var2 = var2.bind(var6)(var7);
                            var4['client_uuid'] = var2;
 216:
                            var4 = _closure1_slot33;
                            var2 = var4.push;
                            var2 = var2.bind(var4)(var5);
                            var2 = _closure1_slot33;
                            var2 = var2.length;
                            var4 = 10000;
                            if(!(var2 > var4)) { _fun0016_ip = 306; continue _fun0016 }
 249:
                            var2 = _closure1_slot33;
                            var2 = var2.length;
                            var6 = var2 - var4;
                            var5 = _closure1_slot37;
                            var4 = _closure1_slot15;
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4, var6);
                            _closure1_slot15 = var2;
                            var5 = _closure1_slot33;
                            var4 = var5.slice;
                            var2 = -10000;
                            var2 = var4.bind(var5)(var2);
                            _closure1_slot33 = var2;
 306:
                            var3 = _closure2_slot7;
                            var2 = _closure3_slot2;
                            var1 = {};
                            if(var2) { _fun0016_ip = 334; continue _fun0016 }
 322:
                            var2 = false;
                            var1['shouldFlushOnNextTick'] = var2;
                            var2 = var1;
                            _fun0016_ip = 344; continue _fun0016;
 334:
                            var4 = true;
                            var1['shouldFlushOnNextTick'] = var4;
                            var2 = var1;
 344:
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = false;
                    return var1;
                };
                var7['handleTrack'] = var6;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 10;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.Store;
                var1 = function(arg1) {
                    var4 = function AnalyticsTrackingStore(arg1) {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                            var4 = this;
                            var12 = 0;
                            var1 = copyRestArgs(var12);
                            var7 = _closure1_slot3;
                            var2 = _closure3_slot0;
                            var3 = undefined;
                            var7 = var7.bind(var3)(var4, var2);
                            var9 = new Array(0);
                            var12 = var9;
                            var11 = var1;
                            var10 = 0;
                            var1 = arraySpread(var12, var11, var10);
                            var1 = _closure1_slot6;
                            var8 = var1.bind(var3)(var2);
                            var2 = _closure1_slot5;
                            var1 = _closure1_slot36;
                            var1 = var1.bind(var3)();
                            if(var1) { _fun0017_ip = 84; continue _fun0017 }
 71:
                            var1 = var8.apply;
                            var1 = var1.bind(var8)(var4, var9);
                            _fun0017_ip = 118; continue _fun0017;
 84:
                            var6 = global;
                            var7 = var6.Reflect;
                            var6 = var7.construct;
                            var5 = _closure1_slot6;
                            var5 = var5.bind(var3)(var4);
                            var5 = var5.constructor;
                            var1 = var6.bind(var7)(var8, var9, var5);
 118:
                            var1 = var2.bind(var3)(var4, var1);
                            var2 = _closure2_slot9;
                            var1['submitEventsImmediately'] = var2;
                            return var1;
                        }
                    };
                    var _closure3_slot0 = var4;
                    var6 = _closure1_slot7;
                    var3 = undefined;
                    var5 = arg1;
                    var5 = var6.bind(var3)(var4, var5);
                    var2 = _closure1_slot4;
                    var5 = {};
                    var6 = 'initialize';
                    var5['key'] = var6;
                    var1 = function initialize() {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                            var3 = this;
                            var4 = _closure2_slot3;
                            var2 = null;
                            if(!(var2 != var4)) { _fun0018_ip = 52; continue _fun0018 }
 16:
                            var2 = var3.waitFor;
                            var7 = _closure2_slot3;
                            var1 = new Array(0);
                            var6 = 0;
                            var8 = var1;
                            var4 = arraySpread(var8, var7, var6);
                            var8 = var2;
                            var7 = var1;
                            var6 = var3;
                            var1 = apply(var8, var7, var6);
 52:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5['value'] = var1;
                    var1 = new Array(1);
                    var1[0] = var5;
                    var1 = var2.bind(var3)(var4, var1);
                    return var1;
                };
                var1 = var1.bind(var5)(var2);
                var2 = 'AnalyticsTrackingStore';
                var1['displayName'] = var2;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var11 = var2;
                var10 = var4;
                var9 = var3;
                var1 = new var11[var1](var10, var9, var8);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var3['analyticsTrackingStoreMaker'] = var2;
        return var1;
    }
})();