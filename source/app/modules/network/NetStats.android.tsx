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
                var5 = _closure2_slot3;
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
        var _closure2_slot3 = var3;
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
        var _closure2_slot2 = var7;
        var7 = function writeExistingEventStorage() {
            var1 = undefined;
            var4 = _closure2_slot2;
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
        var _closure2_slot1 = var7;
        var7 = function track() {
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
        var2[2] = var5;
        var5 = {};
        var7 = 'getQueuedEvent';
        var5['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 47; continue _fun0011 }
case 48:
                    var2 = _closure1_slot22;
                    var8 = undefined;
                    var2 = var2.bind(var8)();
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 15;
                    var2 = var4[var2];
                    var3 = var3.bind(var8)(var2);
                    var2 = var3.getAppFirstVisibleTimestamp;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=57);
case 49:
                    return var2;
case 50:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 51; continue _fun0011 }
case 52:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 16;
                    var3 = var5[var3];
                    var4 = var4.bind(var8)(var3);
                    var3 = var4.getSession;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=100);
case 6:
                    return var3;
case 53:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0011_ip = 54; continue _fun0011 }
case 55:
                    var4 = {};
                    var5 = _closure1_slot10;
                    var5 = var5.APP_NETWORK_USAGE;
                    var4['type'] = var5;
                    var5 = {};
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var9 = 17;
                    var7 = var7[var9];
                    var10 = var10.bind(var8)(var7);
                    var7 = var10.getDeviceMetadata;
                    var14 = var7.bind(var10)();
                    var15 = var5;
                    var7 = copyDataProperties(var15, var14);
                    var7 = global;
                    var10 = var7.Date;
                    var7 = var10.now;
                    var10 = var7.bind(var10)();
                    var7 = 'client_track_timestamp';
                    var5[6] = var10;
                    var10 = null;
                    var7 = var10 == var3;
                    var11 = undefined;
                    if(var7) { _fun0011_ip = 56; continue _fun0011 }
case 57:
                    var11 = var3.uuid;
case 56:
                    var7 = 'client_heartbeat_session_id';
                    var5[6] = var11;
                    var11 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var9 = var7[var9];
                    var11 = var11.bind(var8)(var9);
                    var9 = var11.currentLoadId;
                    var11 = var9.bind(var11)();
                    var9 = 'load_id';
                    var5[8] = var11;
                    var11 = _closure1_slot9;
                    var9 = var11.getGuildCount;
                    var11 = var9.bind(var11)();
                    var9 = 'num_guilds';
                    var5[8] = var11;
                    var11 = _closure1_slot1;
                    var9 = 18;
                    var12 = var7[var9];
                    var12 = var11.bind(var8)(var12);
                    var13 = var12.wasAuthenticated;
                    var12 = 'was_authenticated';
                    var5[11] = var13;
                    var12 = var7[var9];
                    var12 = var11.bind(var8)(var12);
                    var13 = var12.didBackgroundApp;
                    var12 = 'did_background_app';
                    var5[11] = var13;
                    var12 = var7[var9];
                    var12 = var11.bind(var8)(var12);
                    var12 = var12.extraProperties;
                    var13 = var12.headless_task_ran;
                    var12 = 'headless_task_ran';
                    var5[11] = var13;
                    var7 = var7[var9];
                    var7 = var11.bind(var8)(var7);
                    var11 = var7.ready;
                    var7 = var11.serializeEnd;
                    var11 = var7.bind(var11)(var2);
                    var7 = 'ready_payload_duration_ms';
                    var5[6] = var11;
                    var11 = _closure1_slot13;
                    var12 = var10 == var11;
                    var7 = undefined;
                    if(var12) { _fun0011_ip = 58; continue _fun0011 }
case 59:
                    var7 = var11.signalStrengthLevel;
case 58:
                    var12 = var10 != var7;
                    var11 = undefined;
                    if(!var12) { _fun0011_ip = 60; continue _fun0011 }
case 61:
                    var11 = var7;
case 60:
                    var7 = 'initial_signal_strength_level';
                    var5[6] = var11;
                    var7 = _closure1_slot12;
                    var7 = var7.signalStrengthLevel;
                    var12 = var10 != var7;
                    var11 = undefined;
                    if(!var12) { _fun0011_ip = 62; continue _fun0011 }
case 63:
                    var11 = var7;
case 62:
                    var7 = 'final_signal_strength_level';
                    var5[6] = var11;
                    var11 = _closure1_slot15;
                    var12 = var10 == var11;
                    var7 = undefined;
                    if(var12) { _fun0011_ip = 64; continue _fun0011 }
case 65:
                    var7 = var11.type;
case 64:
                    var12 = var10 != var7;
                    var11 = undefined;
                    if(!var12) { _fun0011_ip = 66; continue _fun0011 }
case 67:
                    var11 = var7;
case 66:
                    var7 = 'initial_network_type';
                    var5[6] = var11;
                    var7 = _closure1_slot14;
                    var11 = var7.type;
                    var7 = 'final_network_type';
                    var5[6] = var11;
                    var11 = _closure1_slot15;
                    var12 = var10 == var11;
                    var7 = undefined;
                    if(var12) { _fun0011_ip = 68; continue _fun0011 }
case 69:
                    var7 = var11.effectiveSpeed;
case 68:
                    var11 = var10 != var7;
                    var10 = undefined;
                    if(!var11) { _fun0011_ip = 70; continue _fun0011 }
case 71:
                    var10 = var7;
case 70:
                    var7 = 'initial_cellular_generation';
                    var5[6] = var10;
                    var7 = _closure1_slot14;
                    var10 = var7.effectiveSpeed;
                    var7 = 'final_cellular_generation';
                    var5[6] = var10;
                    var7 = _closure1_slot12;
                    var10 = var7.isNetworkRoaming;
                    var7 = 'is_network_roaming';
                    var5[6] = var10;
                    var7 = _closure1_slot12;
                    var10 = var7.cellularReceiveBytes;
                    var7 = 'cellular_receive_bytes';
                    var5[6] = var10;
                    var7 = _closure1_slot12;
                    var10 = var7.cellularSendBytes;
                    var7 = 'cellular_send_bytes';
                    var5[6] = var10;
                    var7 = _closure1_slot12;
                    var10 = var7.totalReceiveBytes;
                    var7 = 'total_receive_bytes';
                    var5[6] = var10;
                    var7 = _closure1_slot12;
                    var10 = var7.totalSendBytes;
                    var7 = 'total_send_bytes';
                    var5[6] = var10;
                    var7 = _closure1_slot12;
                    var10 = var7.uidReceiveBytes;
                    var7 = 'uid_receive_bytes';
                    var5[6] = var10;
                    var7 = _closure1_slot12;
                    var10 = var7.uidSendBytes;
                    var7 = 'uid_send_bytes';
                    var5[6] = var10;
                    var7 = _closure1_slot12;
                    var10 = var7.socketBytesReceived;
                    var7 = 'socket_bytes_received';
                    var5[6] = var10;
                    var7 = _closure1_slot12;
                    var10 = var7.otaBytesReceived;
                    var7 = 'ota_bytes_received';
                    var5[6] = var10;
                    var7 = _closure1_slot12;
                    var10 = var7.otaNumRequests;
                    var7 = 'ota_num_requests';
                    var5[6] = var10;
                    var7 = _closure1_slot12;
                    var10 = var7.xhrBytesReceived;
                    var7 = 'xhr_bytes_received';
                    var5[6] = var10;
                    var7 = _closure1_slot12;
                    var10 = var7.xhrNumRequests;
                    var7 = 'xhr_num_requests';
                    var5[6] = var10;
                    var7 = _closure1_slot12;
                    var10 = var7.frescoBytesReceived;
                    var7 = 'fresco_bytes_received';
                    var5[6] = var10;
                    var7 = _closure1_slot12;
                    var10 = var7.frescoNumRequests;
                    var7 = 'fresco_num_requests';
                    var5[6] = var10;
                    var7 = _closure1_slot12;
                    var10 = var7.downloadBytesReceived;
                    var7 = 'download_bytes_received';
                    var5[6] = var10;
                    var7 = _closure1_slot12;
                    var10 = var7.downloadNumRequests;
                    var7 = 'download_num_requests';
                    var5[6] = var10;
                    var7 = _closure1_slot12;
                    var10 = var7.mediaPlayerBytesReceived;
                    var7 = 'media_player_bytes_received';
                    var5[6] = var10;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 11;
                    var7 = var11[var7];
                    var10 = var10.bind(var8)(var7);
                    var7 = var10.getRTCTotalBytes;
                    var10 = var7.bind(var10)();
                    var7 = 'rtc_bytes';
                    var5[6] = var10;
                    var10 = _closure1_slot17;
                    var7 = 'num_message_sends';
                    var5[6] = var10;
                    var7 = _closure1_slot17;
                    var11 = 0;
                    var10 = undefined;
                    if(!(var11 !== var7)) { _fun0011_ip = 72; continue _fun0011 }
case 73:
                    var10 = _closure1_slot18;
case 72:
                    var7 = 'max_message_send_duration';
                    var5[6] = var10;
                    var7 = _closure1_slot17;
                    var10 = undefined;
                    if(!(var11 !== var7)) { _fun0011_ip = 74; continue _fun0011 }
case 75:
                    var10 = _closure1_slot19;
case 74:
                    var7 = 'max_message_queue_length';
                    var5[6] = var10;
                    var10 = _closure1_slot20;
                    var7 = 'num_message_send_fails';
                    var5[6] = var10;
                    var10 = _closure1_slot7;
                    var7 = var10.getSocket;
                    var7 = var7.bind(var10)();
                    var10 = var7.identifyCount;
                    var7 = 'num_identifies';
                    var5[6] = var10;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var6 = var7.bind(var8)(var6);
                    var7 = var6.renderLatestMessages;
                    var6 = var7.serialize;
                    var7 = var6.bind(var7)(var2);
                    var6 = 'render_latest_messages_duration_ms';
                    var5[5] = var7;
                    var4['properties'] = var5;
                    return var4;
case 54:
                    return var3;
case 51:
                    return var2;
case 47:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var1)(var7);
        var _closure2_slot0 = var7;
        var6 = function getQueuedEvent() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
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
            if(var6) { _fun0012_ip = 76; continue _fun0012 }
case 28:
            var3 = var5.sendAnalytics;
case 76:
            if(!(var4 != var3)) { _fun0012_ip = 77; continue _fun0012 }
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
case 77:
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
    var4 = 19;
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
            if(!var1) { _fun0013_ip = 78; continue _fun0013 }
case 4:
            var2 = _closure1_slot12;
            var4 = var2.signalStrengthLevel;
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0013_ip = 79; continue _fun0013 }
case 80:
            var4 = _closure1_slot12;
            var5 = var4.signalStrengthLevel;
            var4 = 2;
            var2 = var5 <= var4;
case 79:
            if(var2) { _fun0013_ip = 81; continue _fun0013 }
case 82:
            var4 = _closure1_slot14;
            var5 = var4.effectiveSpeed;
            var4 = '2g';
            var2 = var4 === var5;
case 81:
            if(var2) { _fun0013_ip = 83; continue _fun0013 }
case 9:
            var3 = _closure1_slot12;
            var2 = var3.isNetworkRoaming;
case 83:
            var1 = var2;
case 78:
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