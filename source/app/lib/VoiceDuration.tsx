// app/lib/VoiceDuration.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = [1, 100, 1000, 10000];
    var _closure1_slot4 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function VoiceDuration(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var5 = arg2;
                var2 = arguments[2];
                var3 = this;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0001_ip = 44; continue _fun0001 }
 15:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 2;
                var4 = var7[var4];
                var4 = var6.bind(var1)(var4);
                var2 = var4.TimeStampProducer;
 44:
                var7 = _closure1_slot2;
                var6 = _closure2_slot0;
                var6 = var7.bind(var1)(var3, var6);
                var6 = arg1;
                var3['userId'] = var6;
                var3['connection'] = var5;
                var3['timestampProducer'] = var2;
                var2 = global;
                var6 = var2.Set;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var13 = var7;
                var6 = new var13[var6](var12);
                var6 = var6 instanceof Object ? var6 : var7;
                var3['listeningUsers'] = var6;
                var6 = var2.Map;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var13 = var7;
                var6 = new var13[var6](var12);
                var6 = var6 instanceof Object ? var6 : var7;
                var3['timesUntilSpeakingDurationMilestonesMs'] = var6;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 2;
                var8 = var7[var4];
                var8 = var6.bind(var1)(var8);
                var10 = var8.StopWatch;
                var12 = var3.timestampProducer;
                var9 = var10.prototype;
                var9 = Object.create(var9, {constructor: {value: var10}});
                var13 = var9;
                var8 = new var13[var10](var12, var11);
                var8 = var8 instanceof Object ? var8 : var9;
                var3['listening'] = var8;
                var8 = var7[var4];
                var8 = var6.bind(var1)(var8);
                var10 = var8.StopWatch;
                var12 = var3.timestampProducer;
                var9 = var10.prototype;
                var9 = Object.create(var9, {constructor: {value: var10}});
                var13 = var9;
                var8 = new var13[var10](var12, var11);
                var8 = var8 instanceof Object ? var8 : var9;
                var3['speaking'] = var8;
                var8 = var7[var4];
                var8 = var6.bind(var1)(var8);
                var10 = var8.StopWatch;
                var12 = var3.timestampProducer;
                var9 = var10.prototype;
                var9 = Object.create(var9, {constructor: {value: var10}});
                var13 = var9;
                var8 = new var13[var10](var12, var11);
                var8 = var8 instanceof Object ? var8 : var9;
                var3['participation'] = var8;
                var8 = var7[var4];
                var8 = var6.bind(var1)(var8);
                var10 = var8.StopWatch;
                var12 = var3.timestampProducer;
                var9 = var10.prototype;
                var9 = Object.create(var9, {constructor: {value: var10}});
                var13 = var9;
                var8 = new var13[var10](var12, var11);
                var8 = var8 instanceof Object ? var8 : var9;
                var3['connected'] = var8;
                var8 = var7[var4];
                var8 = var6.bind(var1)(var8);
                var10 = var8.StopWatch;
                var12 = var3.timestampProducer;
                var9 = var10.prototype;
                var9 = Object.create(var9, {constructor: {value: var10}});
                var13 = var9;
                var8 = new var13[var10](var12, var11);
                var8 = var8 instanceof Object ? var8 : var9;
                var3['muted'] = var8;
                var4 = var7[var4];
                var4 = var6.bind(var1)(var4);
                var7 = var4.DurationEnabled;
                var4 = var5.getNoiseCancellation;
                var12 = var4.bind(var5)();
                var11 = var3.timestampProducer;
                var5 = var7.prototype;
                var5 = Object.create(var5, {constructor: {value: var7}});
                var13 = var5;
                var4 = new var13[var7](var12, var11, var10);
                var4 = var4 instanceof Object ? var4 : var5;
                var3['noiseCancellation'] = var4;
                var2 = var2.Map;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var13 = var4;
                var2 = new var13[var2](var12);
                var2 = var2 instanceof Object ? var2 : var4;
                var3['voiceFilterSpeaking'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'start';
        var1['key'] = var2;
        var2 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var9 = arguments[0];
                var8 = arguments[1];
                var4 = this;
                var _closure3_slot0 = var4;
                var1 = undefined;
                if(!(var9 === var1)) { _fun0002_ip = 23; continue _fun0002 }
 21:
                var9 = false;
 23:
                if(!(var8 === var1)) { _fun0002_ip = 29; continue _fun0002 }
 27:
                var8 = null;
 29:
                var5 = var4.listeningUsers;
                var3 = var5.clear;
                var3 = var3.bind(var5)();
                var5 = var4.listening;
                var3 = var5.reset;
                var3 = var3.bind(var5)();
                var5 = var4.speaking;
                var3 = var5.reset;
                var3 = var3.bind(var5)();
                var5 = var4.participation;
                var3 = var5.reset;
                var3 = var3.bind(var5)();
                var5 = var4.muted;
                var3 = var5.reset;
                var3 = var3.bind(var5)();
                var5 = var4.connected;
                var3 = var5.reset;
                var3 = var3.bind(var5)();
                var5 = var4.noiseCancellation;
                var3 = var5.reset;
                var3 = var3.bind(var5)();
                var5 = var4.voiceFilterSpeaking;
                var3 = var5.clear;
                var3 = var3.bind(var5)();
                var5 = var4.timesUntilSpeakingDurationMilestonesMs;
                var3 = var5.clear;
                var3 = var3.bind(var5)();
                var5 = var4.connected;
                var3 = var5.start;
                var3 = var3.bind(var5)();
                var12 = var4.connection;
                var11 = var12.on;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 3;
                var5 = var7[var3];
                var5 = var6.bind(var1)(var5);
                var5 = var5.BaseConnectionEvent;
                var10 = var5.Speaking;
                var5 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var6 = arg1;
                        var4 = arg2;
                        var2 = _closure3_slot0;
                        var2 = var2.userId;
                        if(!(var2 !== var6)) { _fun0003_ip = 48; continue _fun0003 }
 22:
                        var5 = _closure3_slot0;
                        var3 = var5.onListening;
                        var2 = 0;
                        var2 = var2 !== var4;
                        var2 = var3.bind(var5)(var2, var6);
                        _fun0003_ip = 71; continue _fun0003;
 48:
                        var3 = _closure3_slot0;
                        var2 = var3.onSpeaking;
                        var1 = 0;
                        var1 = var1 !== var4;
                        var1 = var2.bind(var3)(var1);
 71:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = var11.bind(var12)(var10, var5);
                var5 = var4.onMuted;
                var5 = var5.bind(var4)(var9);
                var11 = var4.connection;
                var10 = var11.on;
                var5 = var7[var3];
                var5 = var6.bind(var1)(var5);
                var5 = var5.BaseConnectionEvent;
                var9 = var5.Mute;
                var5 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.onMuted;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var5 = var10.bind(var11)(var9, var5);
                var5 = var4.onVoiceFilterChanged;
                var5 = var5.bind(var4)(var8);
                var5 = var4.connection;
                var4 = var5.on;
                var3 = var7[var3];
                var3 = var6.bind(var1)(var3);
                var3 = var3.BaseConnectionEvent;
                var3 = var3.VoiceFilterChanged;
                var2 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.onVoiceFilterChanged;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(11);
        var2[0] = var1;
        var1 = {};
        var6 = '_getVoiceFilterStopWatch';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var6 = arg1;
                var4 = this;
                var1 = null;
                if(!(var1 != var6)) { _fun0004_ip = 111; continue _fun0004 }
 12:
                var3 = var4.voiceFilterSpeaking;
                var2 = var3.get;
                var2 = var2.bind(var3)(var6);
                if(!(var1 == var2)) { _fun0004_ip = 109; continue _fun0004 }
 32:
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 2;
                var5 = var5[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var5);
                var7 = var3.StopWatch;
                var9 = var4.timestampProducer;
                var5 = var7.prototype;
                var5 = Object.create(var5, {constructor: {value: var7}});
                var10 = var5;
                var3 = new var10[var7](var9, var8);
                var3 = var3 instanceof Object ? var3 : var5;
                var5 = var4.voiceFilterSpeaking;
                var4 = var5.set;
                var4 = var4.bind(var5)(var6, var3);
                var2 = var3;
 109:
                return var2;
 111:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'onSpeaking';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = this;
                var3 = var1._getVoiceFilterStopWatch;
                var4 = var1.connection;
                var2 = var4.getVoiceFilterId;
                var2 = var2.bind(var4)();
                var2 = var3.bind(var1)(var2);
                var3 = arg1;
                if(var3) { _fun0005_ip = 154; continue _fun0005 }
 36:
                var3 = var1.connected;
                var6 = var3.lastStartTime;
                var3 = var1.speaking;
                var5 = var3.lastStartTime;
                var3 = var1.speaking;
                var4 = var3.lastElapsed;
                var7 = var1.speaking;
                var3 = var7.stop;
                var3 = var3.bind(var7)();
                var7 = var1.listening;
                var3 = var7.isRunning;
                var3 = var3.bind(var7)();
                if(var3) { _fun0005_ip = 123; continue _fun0005 }
 107:
                var7 = var1.participation;
                var3 = var7.stop;
                var3 = var3.bind(var7)();
 123:
                var3 = null;
                if(!(var3 != var2)) { _fun0005_ip = 139; continue _fun0005 }
 129:
                var3 = var2.stop;
                var3 = var3.bind(var2)();
 139:
                var3 = var1.computeSpeakingDurationMilestones;
                var3 = var3.bind(var1)(var6, var5, var4);
                _fun0005_ip = 199; continue _fun0005;
 154:
                var4 = var1.speaking;
                var3 = var4.start;
                var3 = var3.bind(var4)();
                var3 = var1.participation;
                var1 = var3.start;
                var1 = var1.bind(var3)();
                var1 = null;
                if(!(var1 != var2)) { _fun0005_ip = 199; continue _fun0005 }
 190:
                var1 = var2.start;
                var1 = var1.bind(var2)();
 199:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'onListening';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = arg2;
                var1 = this;
                var3 = var1.listeningUsers;
                var2 = arg1;
                if(var2) { _fun0006_ip = 104; continue _fun0006 }
 18:
                var2 = var3.delete;
                var2 = var2.bind(var3)(var4);
                if(!var2) { _fun0006_ip = 48; continue _fun0006 }
 31:
                var5 = var1.listeningUsers;
                var6 = var5.size;
                var5 = 0;
                var2 = var5 === var6;
 48:
                if(!var2) { _fun0006_ip = 144; continue _fun0006 }
 51:
                var5 = var1.listening;
                var2 = var5.stop;
                var2 = var2.bind(var5)();
                var5 = var1.speaking;
                var2 = var5.isRunning;
                var2 = var2.bind(var5)();
                if(var2) { _fun0006_ip = 144; continue _fun0006 }
 86:
                var5 = var1.participation;
                var2 = var5.stop;
                var2 = var2.bind(var5)();
                _fun0006_ip = 144; continue _fun0006;
 104:
                var2 = var3.add;
                var2 = var2.bind(var3)(var4);
                var3 = var1.listening;
                var2 = var3.start;
                var2 = var2.bind(var3)();
                var2 = var1.participation;
                var1 = var2.start;
                var1 = var1.bind(var2)();
 144:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'onMuted';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = this;
                var2 = var1.muted;
                var1 = arg1;
                if(var1) { _fun0007_ip = 27; continue _fun0007 }
 15:
                var1 = var2.stop;
                var1 = var1.bind(var2)();
                _fun0007_ip = 36; continue _fun0007;
 27:
                var1 = var2.start;
                var1 = var1.bind(var2)();
 36:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'onVoiceFilterChanged';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var3 = this;
                var4 = var3.voiceFilterSpeaking;
                var2 = var4.forEach;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.stop;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = var2.bind(var4)(var1);
                var2 = var3.speaking;
                var1 = var2.isRunning;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0008_ip = 76; continue _fun0008 }
 47:
                var2 = var3._getVoiceFilterStopWatch;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                if(!(var1 != var2)) { _fun0008_ip = 76; continue _fun0008 }
 67:
                var1 = var2.start;
                var1 = var1.bind(var2)();
 76:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'computeSpeakingDurationMilestones';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var5 = arg1;
                var4 = arg2;
                var2 = this;
                var _closure3_slot0 = var2;
                var _closure3_slot1 = var5;
                var _closure3_slot2 = var4;
                var3 = arg3;
                var _closure3_slot3 = var3;
                var3 = null;
                if(!(var3 != var5)) { _fun0009_ip = 128; continue _fun0009 }
 36:
                if(!(var3 != var4)) { _fun0009_ip = 128; continue _fun0009 }
 40:
                var3 = var2.speaking;
                var2 = var3.elapsed;
                var3 = var2.bind(var3)();
                var2 = var3.asMilliseconds;
                var2 = var2.bind(var3)();
                var _closure3_slot4 = var2;
                var4 = _closure1_slot4;
                var3 = var4.filter;
                var2 = function(arg1) {
                    var1 = _closure3_slot0;
                    var3 = var1.timesUntilSpeakingDurationMilestonesMs;
                    var2 = var3.has;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.filter;
                var2 = function(arg1) {
                    var2 = _closure3_slot4;
                    var1 = arg1;
                    var1 = var2 >= var1;
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var4 = arg1;
                    var2 = _closure3_slot0;
                    var3 = var2.timesUntilSpeakingDurationMilestonesMs;
                    var2 = var3.set;
                    var6 = _closure3_slot2;
                    var5 = _closure3_slot1;
                    var5 = var6 - var5;
                    var5 = var5 + var4;
                    var1 = _closure3_slot3;
                    var1 = var5 - var1;
                    var1 = var2.bind(var3)(var4, var1);
                    var1 = undefined;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
 128:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'setNoiseCancellationEnabled';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var2 = var1.noiseCancellation;
            var1 = arg1;
            var2['value'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'stop';
        var1['key'] = var6;
        var6 = function value() {
            var5 = this;
            var1 = var5.connected;
            var4 = var1.lastStartTime;
            var1 = var5.speaking;
            var3 = var1.lastStartTime;
            var1 = var5.speaking;
            var2 = var1.lastElapsed;
            var6 = var5.speaking;
            var1 = var6.stop;
            var1 = var1.bind(var6)();
            var6 = var5.listening;
            var1 = var6.stop;
            var1 = var1.bind(var6)();
            var6 = var5.participation;
            var1 = var6.stop;
            var1 = var1.bind(var6)();
            var6 = var5.connected;
            var1 = var6.stop;
            var1 = var1.bind(var6)();
            var6 = var5.muted;
            var1 = var6.stop;
            var1 = var1.bind(var6)();
            var6 = var5.noiseCancellation;
            var1 = false;
            var6['value'] = var1;
            var7 = var5.voiceFilterSpeaking;
            var6 = var7.forEach;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.stop;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var6.bind(var7)(var1);
            var1 = var5.computeSpeakingDurationMilestones;
            var1 = var1.bind(var5)(var4, var3, var2);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'getVoiceFilterSpeakingDurationMs';
        var1['key'] = var6;
        var6 = function value() {
            var1 = global;
            var3 = var1.Map;
            var1 = this;
            var2 = var1.voiceFilterSpeaking;
            var1 = var2.entries;
            var6 = var1.bind(var2)();
            var4 = new Array(0);
            var5 = 0;
            var7 = var4;
            var1 = arraySpread(var7, var6, var5);
            var2 = var4.map;
            var1 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var5 = arg1;
                    var1 = var5[Symbol.iterator];
                    var5 = var1().next;
                    var3 = var5().value;
                    var2 = var1;
                    var7 = undefined;
                    var4 = var2 === var7;
                    var2 = undefined;
                    if(var4) { _fun0010_ip = 27; continue _fun0010 }
 24:
                    var2 = var3;
 27:
                    var3 = undefined;
                    if(var4) { _fun0010_ip = 57; continue _fun0010 }
 32:
                    var6 = var5().value;
                    var5 = var1;
                    var5 = var5 === var7;
                    var3 = undefined;
                    var4 = var5;
                    if(var5) { _fun0010_ip = 57; continue _fun0010 }
 51:
                    var3 = var6;
                    var4 = var5;
 57:
                    if(var4) { _fun0010_ip = 63; continue _fun0010 }
 60:
                    var1.return();
 63:
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = var3.elapsed;
                    var3 = var2.bind(var3)();
                    var2 = var3.asMilliseconds;
                    var2 = var2.bind(var3)();
                    var1[1] = var2;
                    return var1;
                }
            };
            var7 = var2.bind(var4)(var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var8 = var2;
            var1 = new var8[var3](var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'getDurationStats';
        var1['key'] = var6;
        var5 = function value() {
            var3 = this;
            var _closure3_slot0 = var3;
            var6 = var3.computeSpeakingDurationMilestones;
            var1 = var3.connected;
            var5 = var1.lastStartTime;
            var1 = var3.speaking;
            var4 = var1.lastStartTime;
            var1 = var3.speaking;
            var1 = var1.lastElapsed;
            var1 = var6.bind(var3)(var5, var4, var1);
            var1 = {};
            var5 = var3.listening;
            var4 = var5.elapsed;
            var5 = var4.bind(var5)();
            var4 = var5.asMilliseconds;
            var4 = var4.bind(var5)();
            var1['duration_listening_ms'] = var4;
            var5 = var3.speaking;
            var4 = var5.elapsed;
            var5 = var4.bind(var5)();
            var4 = var5.asMilliseconds;
            var4 = var4.bind(var5)();
            var1['duration_speaking_ms'] = var4;
            var5 = var3.participation;
            var4 = var5.elapsed;
            var5 = var4.bind(var5)();
            var4 = var5.asMilliseconds;
            var4 = var4.bind(var5)();
            var1['duration_participation_ms'] = var4;
            var5 = var3.connected;
            var4 = var5.elapsed;
            var5 = var4.bind(var5)();
            var4 = var5.asMilliseconds;
            var4 = var4.bind(var5)();
            var1['duration_connected_ms'] = var4;
            var5 = var3.muted;
            var4 = var5.elapsed;
            var5 = var4.bind(var5)();
            var4 = var5.asMilliseconds;
            var4 = var4.bind(var5)();
            var1['duration_muted_ms'] = var4;
            var5 = var3.voiceFilterSpeaking;
            var4 = var5.keys;
            var8 = var4.bind(var5)();
            var5 = new Array(0);
            var9 = var5;
            var7 = 0;
            var6 = arraySpread(var9, var8, var7);
            var1['duration_speaking_voice_filter_ids'] = var5;
            var6 = var3.noiseCancellation;
            var5 = var6.totalDuration;
            var5 = var5.bind(var6)();
            var1['duration_noise_cancellation_enabled_ms'] = var5;
            var5 = var3.voiceFilterSpeaking;
            var3 = var5.values;
            var8 = var3.bind(var5)();
            var5 = new Array(0);
            var9 = var5;
            var3 = arraySpread(var9, var8, var7);
            var4 = var5.map;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.elapsed;
                var2 = var1.bind(var2)();
                var1 = var2.asMilliseconds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var1['duration_speaking_voice_filter_ms'] = var3;
            var5 = _closure1_slot4;
            var4 = var5.filter;
            var3 = function(arg1) {
                var1 = _closure3_slot0;
                var3 = var1.timesUntilSpeakingDurationMilestonesMs;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var4.bind(var5)(var3);
            var4 = var5.reduce;
            var3 = function(arg1, arg2) {
                var5 = arg2;
                var1 = {};
                var6 = arg1;
                var7 = var1;
                var2 = copyDataProperties(var7, var6);
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = 'time_to_first_';
                var2 = 'ms_speech_ms';
                var3 = var4.bind(var3)(var5, var2);
                var2 = _closure3_slot0;
                var4 = var2.timesUntilSpeakingDurationMilestonesMs;
                var2 = var4.get;
                var2 = var2.bind(var4)(var5);
                var1[var3] = var2;
                return var1;
            };
            var2 = {};
            var8 = var4.bind(var5)(var3, var2);
            var9 = var1;
            var2 = copyDataProperties(var9, var8);
            return var1;
        };
        var1['value'] = var5;
        var2[10] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/VoiceDuration.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();