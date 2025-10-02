// app/modules/network/NetStats.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var9 = function receiveNetworkInfoformation(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            _closure1_slot14 = var2;
            var4 = _closure1_slot15;
            var3 = null;
            if(!(var3 == var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            _closure1_slot15 = var2;
case 2:
            var2 = _closure1_slot22;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var1 = function updateNetworkUsage() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot6;
            var2 = var2.SystemResourceManager;
            var3 = var2.getNetworkUsage;
            var2 = null;
            if(!(var2 != var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = _closure1_slot6;
            var3 = var1.SystemResourceManager;
            var2 = var3.getNetworkUsage;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    _closure1_slot12 = var2;
                    var4 = _closure1_slot13;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                    _closure1_slot13 = var2;
case 2:
                    var5 = _closure1_slot11;
                    var4 = var5.fileOnly;
                    var3 = {};
                    var2 = _closure1_slot14;
                    var3['state'] = var2;
                    var2 = _closure1_slot12;
                    var3['nativeStats'] = var2;
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var2);
                    var2 = var6.getRTCTotalBytes;
                    var2 = var2.bind(var6)();
                    var3['rtc'] = var2;
                    var2 = 'Updating Network Info';
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
case 4:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var4);
    var4 = 0;
    var8 = var6[var4];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var10 = var5.bind(var1)(var8);
    var8 = var10.AppState;
    var10 = var10.NativeModules;
    var _closure1_slot6 = var10;
    var10 = 4;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot7 = var10;
    var10 = 5;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot8 = var10;
    var10 = 6;
    var10 = var6[var10];
    var10 = var7.bind(var1)(var10);
    var _closure1_slot9 = var10;
    var10 = 7;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.AnalyticEvents;
    var _closure1_slot10 = var10;
    var10 = 8;
    var10 = var6[var10];
    var12 = var7.bind(var1)(var10);
    var10 = var12.prototype;
    var11 = Object.create(var10, {constructor: {value: var12}});
    var15 = 'NetStats';
    var16 = var11;
    var10 = new var16[var12](var15, var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot11 = var10;
    var10 = null;
    var11 = {'signalStrengthLevel': null, 'isNetworkRoaming': false, 'cellularReceiveBytes': 0, 'cellularSendBytes': 0, 'totalReceiveBytes': 0, 'totalSendBytes': 0, 'uidReceiveBytes': 0, 'uidSendBytes': 0, 'socketBytesReceived': 0, 'otaBytesReceived': 0, 'otaNumRequests': 0, 'xhrBytesReceived': 0, 'xhrNumRequests': 0, 'frescoBytesReceived': 0, 'frescoNumRequests': 0, 'downloadBytesReceived': 0, 'downloadNumRequests': 0, 'mediaPlayerBytesReceived': 0};
    var _closure1_slot12 = var11;
    var _closure1_slot13 = var10;
    var11 = {'type': null, 'effectiveSpeed': null, 'serviceProvider': null};
    var12 = 9;
    var12 = var6[var12];
    var12 = var5.bind(var1)(var12);
    var12 = var12.NetInfoStateType;
    var12 = var12.unknown;
    var11['type'] = var12;
    var _closure1_slot14 = var11;
    var _closure1_slot15 = var10;
    var10 = var8.currentState;
    var8 = 'active';
    var8 = var8 === var10;
    var _closure1_slot16 = var8;
    var _closure1_slot17 = var4;
    var _closure1_slot18 = var4;
    var _closure1_slot19 = var4;
    var _closure1_slot20 = var4;
    var4 = 10;
    var8 = var6[var4];
    var10 = var7.bind(var1)(var8);
    var8 = var10.addChangeCallback;
    var8 = var8.bind(var10)(var9);
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.getNetworkInformation;
    var8 = var4.bind(var8)();
    var4 = var8.then;
    var4 = var4.bind(var8)(var9);
    var4 = function() {
        var4 = _closure1_slot5;
        var3 = function EventTracker() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var6 = _closure1_slot4;
                var5 = _closure2_slot2;
                var1 = undefined;
                var5 = var6.bind(var1)(var3, var5);
                var7 = _closure1_slot16;
                var6 = 0;
                if(!var7) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                var7 = global;
                var9 = var7.setTimeout;
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 12;
                var7 = var10[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.Millis;
                var8 = var7.MINUTE;
                var7 = 1;
                var8 = var7 * var8;
                var7 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.track;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var6 = var9.bind(var1)(var7, var8);
case 6:
                var3['trackTimeout'] = var6;
                var6 = _closure1_slot16;
                var5 = 0;
                if(!var6) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                var6 = global;
                var8 = var6.setInterval;
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = 12;
                var6 = var9[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.Millis;
                var7 = var6.SECOND;
                var6 = 5;
                var7 = var6 * var7;
                var6 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.writeExistingEventStorage;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var5 = var8.bind(var1)(var6, var7);
case 8:
                var3['flushStorageInterval'] = var5;
                var5 = false;
                var3['didEverTrack'] = var5;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 13;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var7 = var5.Storage;
                var6 = var7.get;
                var5 = 'previousNetStatsEvents';
                var5 = var6.bind(var7)(var5);
                var6 = null;
                if(!(var6 == var5)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                var5 = new Array(0);
case 10:
                var3['existingEvents'] = var5;
                var4 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var3 = var3.existingEvents;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(var4 > var3)) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                        var4 = _closure1_slot8;
                        var3 = var4.submitEventsImmediately;
                        var2 = _closure3_slot0;
                        var2 = var2.existingEvents;
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.then;
                        var2 = function() {
                            var5 = _closure1_slot11;
                            var4 = var5.fileOnly;
                            var2 = _closure3_slot0;
                            var3 = var2.existingEvents;
                            var1 = 'Successfully logged existing network usage events';
                            var1 = var4.bind(var5)(var1, var3);
                            var1 = new Array(0);
                            var2['existingEvents'] = var1;
                            var1 = var2.writeExistingEventStorage;
                            var1 = var1.bind(var2)();
                            var1 = undefined;
                            return var1;
                        };
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.catch;
                        var1 = function(arg1) {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                var5 = arg1;
                                var2 = var5.status;
                                var1 = 429;
                                var1 = var1 === var2;
                                if(var1) { _fun0006_ip = 14; continue _fun0006 }
case 15:
                                var1 = false;
case 14:
                                if(!var1) { _fun0006_ip = 16; continue _fun0006 }
case 13:
                                var4 = _closure1_slot11;
                                var3 = var4.error;
                                var1 = _closure3_slot0;
                                var2 = var1.existingEvents;
                                var1 = 'Failed to log log existing network usage events';
                                var1 = var3.bind(var4)(var1, var2, var5);
case 16:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
case 12:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3['trackExistingEvents'] = var4;
                var5 = _closure1_slot7;
                var4 = var5.isConnected;
                var4 = var4.bind(var5)();
                if(var4) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 14;
                var2 = var5[var2];
                var6 = var4.bind(var1)(var2);
                var5 = var6.subscribe;
                var4 = var3.trackExistingEvents;
                var2 = 'CONNECTION_OPEN';
                var2 = var5.bind(var6)(var2, var4);
                _fun0004_ip = 19; continue _fun0004;
case 17:
                var2 = var3.trackExistingEvents;
                var2 = var2.bind(var3)();
case 19:
                return var1;
            }
        };
        var _closure2_slot2 = var3;
        var5 = {};
        var2 = 'handleAppStateChange';
        var5['key'] = var2;
        var2 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = var2.didEverTrack;
                if(var3) { _fun0007_ip = 20; continue _fun0007 }
case 15:
                var3 = _closure1_slot16;
                var5 = arg1;
                if(var5) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                if(!var3) { _fun0007_ip = 20; continue _fun0007 }
case 23:
                var5 = var2.track;
                var5 = var5.bind(var2)();
                _fun0007_ip = 20; continue _fun0007;
case 21:
                if(var3) { _fun0007_ip = 20; continue _fun0007 }
case 24:
                var3 = true;
                _closure1_slot16 = var3;
                var3 = global;
                var7 = var3.setTimeout;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var4 = 12;
                var4 = var5[var4];
                var5 = undefined;
                var4 = var6.bind(var5)(var4);
                var4 = var4.Millis;
                var6 = var4.MINUTE;
                var4 = 1;
                var6 = var4 * var6;
                var4 = function() {
                    var2 = _closure1_slot21;
                    var1 = var2.track;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var4 = var7.bind(var5)(var4, var6);
                var2['trackTimeout'] = var4;
                var4 = var3.setInterval;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.writeExistingEventStorage;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = 5000;
                var1 = var4.bind(var5)(var3, var1);
                var2['flushStorageInterval'] = var1;
case 20:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var2;
        var2 = new Array(4);
        var2[0] = var5;
        var5 = {};
        var7 = 'writeExistingEventStorage';
        var5['key'] = var7;
        var8 = _closure1_slot3;
        var1 = undefined;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var2 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 25; continue _fun0008 }
case 26:
                    var3 = var2.didEverTrack;
                    if(var3) { _fun0008_ip = 27; continue _fun0008 }
case 28:
                    var3 = _closure1_slot16;
                    if(!var3) { _fun0008_ip = 27; continue _fun0008 }
case 29:
                    var3 = var2.getQueuedEvent;
                    var3 = var3.bind(var2)();
                    SaveGenerator(address=46);
case 30:
                    return var3;
case 31:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                    var4 = new Array(1);
                    var4[0] = var3;
                    _fun0008_ip = 34; continue _fun0008;
case 32:
                    return var3;
case 27:
                    var4 = new Array(0);
case 34:
                    var3 = var2.existingEvents;
                    var2 = var3.concat;
                    var5 = var2.bind(var3)(var4);
                    var3 = var5.length;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.Storage;
                    var3 = var4.set;
                    var2 = 'previousNetStatsEvents';
                    var2 = var3.bind(var4)(var2, var5);
                    _fun0008_ip = 37; continue _fun0008;
case 35:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.Storage;
                    var3 = var4.remove;
                    var2 = 'previousNetStatsEvents';
                    var2 = var3.bind(var4)(var2);
case 37:
                    var2 = undefined;
                    return var2;
case 25:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var1)(var7);
        var _closure2_slot1 = var7;
        var7 = function writeExistingEventStorage() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var2[1] = var5;
        var5 = {};
        var7 = 'track';
        var5['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                    var _closure4_slot0 = var5;
                    var2 = undefined;
                    var _closure4_slot1 = var2;
                    var3 = var5.didEverTrack;
                    if(var3) { _fun0009_ip = 40; continue _fun0009 }
case 23:
                    var3 = true;
                    var5['didEverTrack'] = var3;
                    var3 = global;
                    var7 = var3.clearTimeout;
                    var6 = var5.trackTimeout;
                    var6 = var7.bind(var2)(var6);
                    var6 = var3.clearInterval;
                    var3 = var5.flushStorageInterval;
                    var3 = var6.bind(var2)(var3);
                    var3 = var5.getQueuedEvent;
                    var3 = var3.bind(var5)();
                    SaveGenerator(address=95);
case 41:
                    return var3;
case 42:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0009_ip = 43; continue _fun0009 }
case 44:
                    var7 = new Array(1);
                    var7[0] = var3;
                    _closure4_slot1 = var7;
                    var6 = _closure1_slot8;
                    var5 = var6.submitEventsImmediately;
                    var7 = var5.bind(var6)(var7);
                    var6 = var7.then;
                    var5 = function() {
                        var5 = _closure1_slot11;
                        var4 = var5.fileOnly;
                        var3 = _closure4_slot1;
                        var2 = 'Successfully tracked latest network usage';
                        var2 = var4.bind(var5)(var2, var3);
                        var2 = _closure4_slot0;
                        var1 = var2.writeExistingEventStorage;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    };
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.catch;
                    var4 = function(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var5 = arg1;
                            var2 = var5.status;
                            var1 = 429;
                            if(!(var1 !== var2)) { _fun0010_ip = 45; continue _fun0010 }
case 46:
                            var4 = _closure1_slot11;
                            var3 = var4.error;
                            var2 = _closure4_slot1;
                            var1 = 'Failed to track latest network usage';
                            var1 = var3.bind(var4)(var1, var2, var5);
case 45:
                            var2 = _closure4_slot0;
                            var4 = var2.existingEvents;
                            var3 = var4.push;
                            var5 = _closure4_slot1;
                            var1 = 0;
                            var1 = var5[var1];
                            var1 = var3.bind(var4)(var1);
                            var1 = var2.writeExistingEventStorage;
                            var1 = var1.bind(var2)();
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
                    _fun0009_ip = 40; continue _fun0009;
case 43:
                    return var3;
case 40:
                    return var2;
case 38:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var1)(var7);
        var _closure2_slot0 = var7;
        var7 = function track() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var2[2] = var5;
        var5 = {};
        var7 = 'getQueuedEvent';
        var5['key'] = var7;
        var6 = function value() {
            var3 = _closure1_slot22;
            var4 = undefined;
            var3 = var3.bind(var4)();
            var3 = _closure1_slot6;
            var3 = var3.TTIManager;
            var3 = var3.AppOpenedTimestamp;
            var _closure3_slot0 = var3;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 15;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getSession;
            var3 = var2.bind(var3)();
            var2 = var3.then;
            var1 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = arg1;
                    var1 = {};
                    var2 = _closure1_slot10;
                    var2 = var2.APP_NETWORK_USAGE;
                    var1['type'] = var2;
                    var2 = {};
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 16;
                    var7 = var6[var5];
                    var6 = undefined;
                    var8 = var8.bind(var6)(var7);
                    var7 = var8.getDeviceMetadata;
                    var11 = var7.bind(var8)();
                    var12 = var2;
                    var7 = copyDataProperties(var12, var11);
                    var7 = global;
                    var8 = var7.Date;
                    var7 = var8.now;
                    var8 = var7.bind(var8)();
                    var7 = 'client_track_timestamp';
                    var2[var7] = var8;
                    var8 = null;
                    var9 = var8 == var3;
                    var7 = undefined;
                    if(var9) { _fun0011_ip = 47; continue _fun0011 }
case 48:
                    var7 = var3.uuid;
case 47:
                    var3 = 'client_heartbeat_session_id';
                    var2[var3] = var7;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var5 = var3[var5];
                    var7 = var7.bind(var6)(var5);
                    var5 = var7.currentLoadId;
                    var7 = var5.bind(var7)();
                    var5 = 'load_id';
                    var2[var5] = var7;
                    var7 = _closure1_slot9;
                    var5 = var7.getGuildCount;
                    var7 = var5.bind(var7)();
                    var5 = 'num_guilds';
                    var2[var5] = var7;
                    var5 = _closure1_slot1;
                    var7 = 17;
                    var9 = var3[var7];
                    var9 = var5.bind(var6)(var9);
                    var10 = var9.wasAuthenticated;
                    var9 = 'was_authenticated';
                    var2[var9] = var10;
                    var9 = var3[var7];
                    var9 = var5.bind(var6)(var9);
                    var10 = var9.didBackgroundApp;
                    var9 = 'did_background_app';
                    var2[var9] = var10;
                    var9 = var3[var7];
                    var9 = var5.bind(var6)(var9);
                    var9 = var9.extraProperties;
                    var10 = var9.headless_task_ran;
                    var9 = 'headless_task_ran';
                    var2[var9] = var10;
                    var3 = var3[var7];
                    var3 = var5.bind(var6)(var3);
                    var10 = var3.ready;
                    var9 = var10.serializeEnd;
                    var5 = _closure3_slot0;
                    var9 = var9.bind(var10)(var5);
                    var5 = 'ready_payload_duration_ms';
                    var2[var5] = var9;
                    var9 = _closure1_slot13;
                    var10 = var8 == var9;
                    var5 = undefined;
                    if(var10) { _fun0011_ip = 49; continue _fun0011 }
case 50:
                    var5 = var9.signalStrengthLevel;
case 49:
                    var10 = var8 != var5;
                    var9 = undefined;
                    if(!var10) { _fun0011_ip = 51; continue _fun0011 }
case 52:
                    var9 = var5;
case 51:
                    var5 = 'initial_signal_strength_level';
                    var2[var5] = var9;
                    var5 = _closure1_slot12;
                    var5 = var5.signalStrengthLevel;
                    var10 = var8 != var5;
                    var9 = undefined;
                    if(!var10) { _fun0011_ip = 53; continue _fun0011 }
case 54:
                    var9 = var5;
case 53:
                    var5 = 'final_signal_strength_level';
                    var2[var5] = var9;
                    var9 = _closure1_slot15;
                    var10 = var8 == var9;
                    var5 = undefined;
                    if(var10) { _fun0011_ip = 55; continue _fun0011 }
case 56:
                    var5 = var9.type;
case 55:
                    var10 = var8 != var5;
                    var9 = undefined;
                    if(!var10) { _fun0011_ip = 57; continue _fun0011 }
case 58:
                    var9 = var5;
case 57:
                    var5 = 'initial_network_type';
                    var2[var5] = var9;
                    var5 = _closure1_slot14;
                    var9 = var5.type;
                    var5 = 'final_network_type';
                    var2[var5] = var9;
                    var9 = _closure1_slot15;
                    var10 = var8 == var9;
                    var5 = undefined;
                    if(var10) { _fun0011_ip = 59; continue _fun0011 }
case 60:
                    var5 = var9.effectiveSpeed;
case 59:
                    var9 = var8 != var5;
                    var8 = undefined;
                    if(!var9) { _fun0011_ip = 61; continue _fun0011 }
case 62:
                    var8 = var5;
case 61:
                    var5 = 'initial_cellular_generation';
                    var2[var5] = var8;
                    var5 = _closure1_slot14;
                    var8 = var5.effectiveSpeed;
                    var5 = 'final_cellular_generation';
                    var2[var5] = var8;
                    var5 = _closure1_slot12;
                    var8 = var5.isNetworkRoaming;
                    var5 = 'is_network_roaming';
                    var2[var5] = var8;
                    var5 = _closure1_slot12;
                    var8 = var5.cellularReceiveBytes;
                    var5 = 'cellular_receive_bytes';
                    var2[var5] = var8;
                    var5 = _closure1_slot12;
                    var8 = var5.cellularSendBytes;
                    var5 = 'cellular_send_bytes';
                    var2[var5] = var8;
                    var5 = _closure1_slot12;
                    var8 = var5.totalReceiveBytes;
                    var5 = 'total_receive_bytes';
                    var2[var5] = var8;
                    var5 = _closure1_slot12;
                    var8 = var5.totalSendBytes;
                    var5 = 'total_send_bytes';
                    var2[var5] = var8;
                    var5 = _closure1_slot12;
                    var8 = var5.uidReceiveBytes;
                    var5 = 'uid_receive_bytes';
                    var2[var5] = var8;
                    var5 = _closure1_slot12;
                    var8 = var5.uidSendBytes;
                    var5 = 'uid_send_bytes';
                    var2[var5] = var8;
                    var5 = _closure1_slot12;
                    var8 = var5.socketBytesReceived;
                    var5 = 'socket_bytes_received';
                    var2[var5] = var8;
                    var5 = _closure1_slot12;
                    var8 = var5.otaBytesReceived;
                    var5 = 'ota_bytes_received';
                    var2[var5] = var8;
                    var5 = _closure1_slot12;
                    var8 = var5.otaNumRequests;
                    var5 = 'ota_num_requests';
                    var2[var5] = var8;
                    var5 = _closure1_slot12;
                    var8 = var5.xhrBytesReceived;
                    var5 = 'xhr_bytes_received';
                    var2[var5] = var8;
                    var5 = _closure1_slot12;
                    var8 = var5.xhrNumRequests;
                    var5 = 'xhr_num_requests';
                    var2[var5] = var8;
                    var5 = _closure1_slot12;
                    var8 = var5.frescoBytesReceived;
                    var5 = 'fresco_bytes_received';
                    var2[var5] = var8;
                    var5 = _closure1_slot12;
                    var8 = var5.frescoNumRequests;
                    var5 = 'fresco_num_requests';
                    var2[var5] = var8;
                    var5 = _closure1_slot12;
                    var8 = var5.downloadBytesReceived;
                    var5 = 'download_bytes_received';
                    var2[var5] = var8;
                    var5 = _closure1_slot12;
                    var8 = var5.downloadNumRequests;
                    var5 = 'download_num_requests';
                    var2[var5] = var8;
                    var5 = _closure1_slot12;
                    var8 = var5.mediaPlayerBytesReceived;
                    var5 = 'media_player_bytes_received';
                    var2[var5] = var8;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 11;
                    var5 = var9[var5];
                    var8 = var8.bind(var6)(var5);
                    var5 = var8.getRTCTotalBytes;
                    var8 = var5.bind(var8)();
                    var5 = 'rtc_bytes';
                    var2[var5] = var8;
                    var8 = _closure1_slot17;
                    var5 = 'num_message_sends';
                    var2[var5] = var8;
                    var5 = _closure1_slot17;
                    var9 = 0;
                    var8 = undefined;
                    if(!(var9 !== var5)) { _fun0011_ip = 63; continue _fun0011 }
case 64:
                    var8 = _closure1_slot18;
case 63:
                    var5 = 'max_message_send_duration';
                    var2[var5] = var8;
                    var5 = _closure1_slot17;
                    var8 = undefined;
                    if(!(var9 !== var5)) { _fun0011_ip = 65; continue _fun0011 }
case 66:
                    var8 = _closure1_slot19;
case 65:
                    var5 = 'max_message_queue_length';
                    var2[var5] = var8;
                    var8 = _closure1_slot20;
                    var5 = 'num_message_send_fails';
                    var2[var5] = var8;
                    var8 = _closure1_slot7;
                    var5 = var8.getSocket;
                    var5 = var5.bind(var8)();
                    var8 = var5.identifyCount;
                    var5 = 'num_identifies';
                    var2[var5] = var8;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var5.bind(var6)(var4);
                    var5 = var4.renderLatestMessages;
                    var4 = var5.serialize;
                    var3 = _closure3_slot0;
                    var4 = var4.bind(var5)(var3);
                    var3 = 'render_latest_messages_duration_ms';
                    var2[var3] = var4;
                    var1['properties'] = var2;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var2[3] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var8 = var4.prototype;
    var8 = Object.create(var8, {constructor: {value: var4}});
    var16 = var8;
    var4 = new var16[var4](var15);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot21 = var4;
    var4 = 14;
    var8 = var6[var4];
    var11 = var7.bind(var1)(var8);
    var10 = var11.subscribe;
    var9 = 'APP_STATE_UPDATE';
    var8 = function(arg1) {
        var3 = _closure1_slot21;
        var2 = var3.handleAppStateChange;
        var1 = arg1;
        var4 = var1.state;
        var1 = 'active';
        var1 = var1 === var4;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var8 = var10.bind(var11)(var9, var8);
    var8 = var6[var4];
    var11 = var7.bind(var1)(var8);
    var10 = var11.subscribe;
    var9 = 'MESSAGE_CREATE';
    var8 = function(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var5 = var2.sendMessageOptions;
            var4 = null;
            var6 = var4 == var5;
            var1 = undefined;
            var3 = undefined;
            if(var6) { _fun0012_ip = 67; continue _fun0012 }
case 28:
            var3 = var5.sendAnalytics;
case 67:
            if(!(var4 != var3)) { _fun0012_ip = 68; continue _fun0012 }
case 29:
            var4 = _closure1_slot17;
            var4 = var4 + 1;
            _closure1_slot17 = var4;
            var4 = global;
            var8 = var4.Math;
            var7 = var8.max;
            var6 = _closure1_slot18;
            var5 = var2.sendMessageOptions;
            var5 = var5.sendAnalytics;
            var5 = var5.duration;
            var5 = var7.bind(var8)(var6, var5);
            _closure1_slot18 = var5;
            var6 = var4.Math;
            var5 = var6.max;
            var4 = _closure1_slot19;
            var2 = var2.sendMessageOptions;
            var2 = var2.sendAnalytics;
            var2 = var2.queueSize;
            var2 = var5.bind(var6)(var4, var2);
            _closure1_slot19 = var2;
case 68:
            return var1;
        }
    };
    var8 = var10.bind(var11)(var9, var8);
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var8 = var9.subscribe;
    var7 = 'MESSAGE_SEND_FAILED';
    var4 = function() {
        var1 = _closure1_slot20;
        var1 = var1 + 1;
        _closure1_slot20 = var1;
        var1 = undefined;
        return var1;
    };
    var4 = var8.bind(var9)(var7, var4);
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/network/NetStats.android.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isSlowNetwork() {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = _closure1_slot14;
            var2 = var1.type;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.NetInfoStateType;
            var1 = var1.cellular;
            var1 = var2 === var1;
            if(!var1) { _fun0013_ip = 69; continue _fun0013 }
case 4:
            var2 = _closure1_slot12;
            var4 = var2.signalStrengthLevel;
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0013_ip = 70; continue _fun0013 }
case 71:
            var4 = _closure1_slot12;
            var5 = var4.signalStrengthLevel;
            var4 = 2;
            var2 = var5 <= var4;
case 70:
            if(var2) { _fun0013_ip = 72; continue _fun0013 }
case 73:
            var4 = _closure1_slot14;
            var5 = var4.effectiveSpeed;
            var4 = '2g';
            var2 = var4 === var5;
case 72:
            if(var2) { _fun0013_ip = 74; continue _fun0013 }
case 9:
            var3 = _closure1_slot12;
            var2 = var3.isNetworkRoaming;
case 74:
            var1 = var2;
case 69:
            return var1;
        }
    };
    var3['isSlowNetwork'] = var4;
    var2 = function getSignalStrength() {
        var1 = _closure1_slot12;
        var1 = var1.signalStrengthLevel;
        return var1;
    };
    var3['getSignalStrength'] = var2;
    return var1;
})();