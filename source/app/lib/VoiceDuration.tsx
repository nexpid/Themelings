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
    var4 = [100, 500, 1000, 5000];
    var _closure1_slot5 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function VoiceDuration(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = arg2;
                var2 = arguments[2];
                var3 = this;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 2;
                var4 = var7[var4];
                var4 = var6.bind(var1)(var4);
                var2 = var4.TimeStampProducer;
case 2:
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
                var6 = var2.Map;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var13 = var7;
                var6 = new var13[var6](var12);
                var6 = var6 instanceof Object ? var6 : var7;
                var3['speakingMinimumChunks'] = var6;
                var6 = var2.Map;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var13 = var7;
                var6 = new var13[var6](var12);
                var6 = var6 instanceof Object ? var6 : var7;
                var3['speakingMinimumChunkCounts'] = var6;
                var6 = 0;
                var3['speechEventCount'] = var6;
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
case 0:
                var9 = arguments[0];
                var8 = arguments[1];
                var4 = this;
                var _closure3_slot0 = var4;
                var1 = undefined;
                if(!(var9 === var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var9 = false;
case 4:
                if(!(var8 === var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var8 = null;
case 6:
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
                var5 = var4.speakingMinimumChunks;
                var3 = var5.clear;
                var3 = var3.bind(var5)();
                var5 = var4.speakingMinimumChunkCounts;
                var3 = var5.clear;
                var3 = var3.bind(var5)();
                var3 = 0;
                var4['speechEventCount'] = var3;
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
case 0:
                        var6 = arg1;
                        var4 = arg2;
                        var2 = _closure3_slot0;
                        var2 = var2.userId;
                        if(!(var2 !== var6)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                        var5 = _closure3_slot0;
                        var3 = var5.onListening;
                        var2 = 0;
                        var2 = var2 !== var4;
                        var2 = var3.bind(var5)(var2, var6);
                        _fun0003_ip = 10; continue _fun0003;
case 8:
                        var3 = _closure3_slot0;
                        var2 = var3.onSpeaking;
                        var1 = 0;
                        var1 = var1 !== var4;
                        var1 = var2.bind(var3)(var1);
case 10:
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
        var2 = new Array(12);
        var2[0] = var1;
        var1 = {};
        var6 = '_getVoiceFilterStopWatch';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var6 = arg1;
                var4 = this;
                var1 = null;
                if(!(var1 != var6)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var3 = var4.voiceFilterSpeaking;
                var2 = var3.get;
                var2 = var2.bind(var3)(var6);
                if(!(var1 == var2)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
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
case 13:
                return var2;
case 11:
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
case 0:
                var2 = this;
                var3 = var2._getVoiceFilterStopWatch;
                var4 = var2.connection;
                var1 = var4.getVoiceFilterId;
                var1 = var1.bind(var4)();
                var3 = var3.bind(var2)(var1);
                var1 = arg1;
                if(var1) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                var1 = var2.connected;
                var6 = var1.lastStartTime;
                var1 = var2.speaking;
                var5 = var1.lastStartTime;
                var1 = var2.speaking;
                var4 = var1.lastElapsed;
                var1 = var2.addSpeechChunk;
                var1 = var1.bind(var2)();
                var7 = var2.speaking;
                var1 = var7.stop;
                var1 = var1.bind(var7)();
                var7 = var2.listening;
                var1 = var7.isRunning;
                var1 = var1.bind(var7)();
                if(var1) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var7 = var2.participation;
                var1 = var7.stop;
                var1 = var1.bind(var7)();
case 17:
                var1 = null;
                if(!(var1 != var3)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var1 = var3.stop;
                var1 = var1.bind(var3)();
case 19:
                var1 = var2.computeSpeakingDurationMilestones;
                var1 = var1.bind(var2)(var6, var5, var4);
                _fun0005_ip = 21; continue _fun0005;
case 15:
                var4 = var2.speaking;
                var1 = var4.start;
                var1 = var1.bind(var4)();
                var4 = var2.participation;
                var1 = var4.start;
                var1 = var1.bind(var4)();
                var1 = null;
                if(!(var1 != var3)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                var1 = var3.start;
                var1 = var1.bind(var3)();
case 22:
                var1 = var2.speechEventCount;
                var1 = var1 + 1;
                var2['speechEventCount'] = var1;
case 21:
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
case 0:
                var4 = arg2;
                var1 = this;
                var3 = var1.listeningUsers;
                var2 = arg1;
                if(var2) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                var2 = var3.delete;
                var2 = var2.bind(var3)(var4);
                if(!var2) { _fun0006_ip = 8; continue _fun0006 }
case 26:
                var5 = var1.listeningUsers;
                var6 = var5.size;
                var5 = 0;
                var2 = var5 === var6;
case 8:
                if(!var2) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                var5 = var1.listening;
                var2 = var5.stop;
                var2 = var2.bind(var5)();
                var5 = var1.speaking;
                var2 = var5.isRunning;
                var2 = var2.bind(var5)();
                if(var2) { _fun0006_ip = 27; continue _fun0006 }
case 29:
                var5 = var1.participation;
                var2 = var5.stop;
                var2 = var2.bind(var5)();
                _fun0006_ip = 27; continue _fun0006;
case 24:
                var2 = var3.add;
                var2 = var2.bind(var3)(var4);
                var3 = var1.listening;
                var2 = var3.start;
                var2 = var2.bind(var3)();
                var2 = var1.participation;
                var1 = var2.start;
                var1 = var1.bind(var2)();
case 27:
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
case 0:
                var1 = this;
                var2 = var1.muted;
                var1 = arg1;
                if(var1) { _fun0007_ip = 7; continue _fun0007 }
case 3:
                var1 = var2.stop;
                var1 = var1.bind(var2)();
                _fun0007_ip = 30; continue _fun0007;
case 7:
                var1 = var2.start;
                var1 = var1.bind(var2)();
case 30:
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
case 0:
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
                if(!var1) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                var2 = var3._getVoiceFilterStopWatch;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                if(!(var1 != var2)) { _fun0008_ip = 31; continue _fun0008 }
case 33:
                var1 = var2.start;
                var1 = var1.bind(var2)();
case 31:
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
case 0:
                var5 = arg1;
                var4 = arg2;
                var2 = this;
                var _closure3_slot0 = var2;
                var _closure3_slot1 = var5;
                var _closure3_slot2 = var4;
                var3 = arg3;
                var _closure3_slot3 = var3;
                var3 = null;
                if(!(var3 != var5)) { _fun0009_ip = 34; continue _fun0009 }
case 30:
                if(!(var3 != var4)) { _fun0009_ip = 34; continue _fun0009 }
case 35:
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
case 34:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'addSpeechChunk';
        var1['key'] = var6;
        var6 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = var2.speaking;
                var3 = var3.lastStartTime;
                var4 = null;
                if(!(var4 != var3)) { _fun0010_ip = 36; continue _fun0010 }
case 7:
                var4 = var2.timestampProducer;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var2 = var2 - var3;
                var _closure3_slot1 = var2;
                var4 = _closure1_slot5;
                var3 = var4.filter;
                var2 = function(arg1) {
                    var2 = _closure3_slot1;
                    var1 = arg1;
                    var1 = var2 >= var1;
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var4 = arg1;
                        var2 = _closure3_slot0;
                        var3 = var2.speakingMinimumChunks;
                        var2 = var3.get;
                        var2 = var2.bind(var3)(var4);
                        var3 = null;
                        var6 = var3 != var2;
                        var9 = 0;
                        if(!var6) { _fun0011_ip = 35; continue _fun0011 }
case 37:
                        var9 = var2;
case 35:
                        var2 = _closure3_slot0;
                        var8 = var2.speakingMinimumChunks;
                        var7 = var8.set;
                        var6 = _closure3_slot1;
                        var6 = var9 + var6;
                        var6 = var7.bind(var8)(var4, var6);
                        var6 = var2.speakingMinimumChunkCounts;
                        var2 = var6.get;
                        var2 = var2.bind(var6)(var4);
                        var3 = var3 != var2;
                        var5 = 0;
                        if(!var3) { _fun0011_ip = 38; continue _fun0011 }
case 39:
                        var5 = var2;
case 38:
                        var1 = _closure3_slot0;
                        var3 = var1.speakingMinimumChunkCounts;
                        var2 = var3.set;
                        var1 = 1;
                        var1 = var5 + var1;
                        var1 = var2.bind(var3)(var4, var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
case 36:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
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
        var2[8] = var1;
        var1 = {};
        var6 = 'stop';
        var1['key'] = var6;
        var6 = function value() {
            var5 = this;
            var1 = var5.addSpeechChunk;
            var1 = var1.bind(var5)();
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
        var2[9] = var1;
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
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var5 = arg1;
                    var1 = var5[Symbol.iterator];
                    var5 = var1().next;
                    var3 = var5().value;
                    var2 = var1;
                    var7 = undefined;
                    var4 = var2 === var7;
                    var2 = undefined;
                    if(var4) { _fun0012_ip = 7; continue _fun0012 }
case 40:
                    var2 = var3;
case 7:
                    var3 = undefined;
                    if(var4) { _fun0012_ip = 41; continue _fun0012 }
case 14:
                    var6 = var5().value;
                    var5 = var1;
                    var5 = var5 === var7;
                    var3 = undefined;
                    var4 = var5;
                    if(var5) { _fun0012_ip = 41; continue _fun0012 }
case 28:
                    var3 = var6;
                    var4 = var5;
case 41:
                    if(var4) { _fun0012_ip = 42; continue _fun0012 }
case 43:
                    var1.return();
case 42:
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
        var2[10] = var1;
        var1 = {};
        var6 = 'getDurationStats';
        var1['key'] = var6;
        var5 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var1 = var3.speaking;
                var6 = var1.lastStartTime;
                var4 = var3.timestampProducer;
                var1 = var4.now;
                var4 = var1.bind(var4)();
                var1 = null;
                var7 = var1 != var6;
                var1 = 0;
                if(!var7) { _fun0013_ip = 28; continue _fun0013 }
case 32:
                var1 = var4 - var6;
case 28:
                var _closure3_slot1 = var1;
                var7 = var3.computeSpeakingDurationMilestones;
                var1 = var3.connected;
                var6 = var1.lastStartTime;
                var1 = var3.speaking;
                var4 = var1.lastStartTime;
                var1 = var3.speaking;
                var1 = var1.lastElapsed;
                var1 = var7.bind(var3)(var6, var4, var1);
                var1 = {};
                var6 = var3.listening;
                var4 = var6.elapsed;
                var6 = var4.bind(var6)();
                var4 = var6.asMilliseconds;
                var4 = var4.bind(var6)();
                var1['duration_listening_ms'] = var4;
                var6 = var3.speaking;
                var4 = var6.elapsed;
                var6 = var4.bind(var6)();
                var4 = var6.asMilliseconds;
                var4 = var4.bind(var6)();
                var1['duration_speaking_ms'] = var4;
                var6 = var3.participation;
                var4 = var6.elapsed;
                var6 = var4.bind(var6)();
                var4 = var6.asMilliseconds;
                var4 = var4.bind(var6)();
                var1['duration_participation_ms'] = var4;
                var6 = var3.connected;
                var4 = var6.elapsed;
                var6 = var4.bind(var6)();
                var4 = var6.asMilliseconds;
                var4 = var4.bind(var6)();
                var1['duration_connected_ms'] = var4;
                var6 = var3.muted;
                var4 = var6.elapsed;
                var6 = var4.bind(var6)();
                var4 = var6.asMilliseconds;
                var4 = var4.bind(var6)();
                var1['duration_muted_ms'] = var4;
                var6 = var3.voiceFilterSpeaking;
                var4 = var6.keys;
                var9 = var4.bind(var6)();
                var4 = new Array(0);
                var10 = var4;
                var8 = 0;
                var6 = arraySpread(var10, var9, var8);
                var1['duration_speaking_voice_filter_ids'] = var4;
                var6 = var3.noiseCancellation;
                var4 = var6.totalDuration;
                var4 = var4.bind(var6)();
                var1['duration_noise_cancellation_enabled_ms'] = var4;
                var6 = var3.voiceFilterSpeaking;
                var4 = var6.values;
                var9 = var4.bind(var6)();
                var6 = new Array(0);
                var10 = var6;
                var4 = arraySpread(var10, var9, var8);
                var5 = var6.map;
                var4 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.elapsed;
                    var2 = var1.bind(var2)();
                    var1 = var2.asMilliseconds;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var4 = var5.bind(var6)(var4);
                var1['duration_speaking_voice_filter_ms'] = var4;
                var3 = var3.speechEventCount;
                var1['speech_event_count'] = var3;
                var6 = _closure1_slot4;
                var5 = var6.filter;
                var4 = function(arg1) {
                    var1 = _closure3_slot0;
                    var3 = var1.timesUntilSpeakingDurationMilestonesMs;
                    var2 = var3.has;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7 = var5.bind(var6)(var4);
                var6 = var7.reduce;
                var5 = function(arg1, arg2) {
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
                var4 = {};
                var9 = var6.bind(var7)(var5, var4);
                var10 = var1;
                var4 = copyDataProperties(var10, var9);
                var5 = _closure1_slot5;
                var4 = var5.filter;
                var3 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var3 = arg1;
                        var1 = _closure3_slot0;
                        var4 = var1.speakingMinimumChunks;
                        var1 = var4.has;
                        var1 = var1.bind(var4)(var3);
                        if(var1) { _fun0014_ip = 37; continue _fun0014 }
case 6:
                        var2 = _closure3_slot1;
                        var1 = var2 >= var3;
case 37:
                        return var1;
                    }
                };
                var5 = var4.bind(var5)(var3);
                var4 = var5.reduce;
                var3 = function(arg1, arg2) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var6 = arg2;
                        var1 = {};
                        var11 = arg1;
                        var12 = var1;
                        var2 = copyDataProperties(var12, var11);
                        var3 = global;
                        var2 = var3.HermesInternal;
                        var5 = var2.concat;
                        var4 = 'duration_speaking_gte_';
                        var2 = 'ms_ms';
                        var8 = var5.bind(var4)(var6, var2);
                        var2 = _closure3_slot0;
                        var4 = var2.speakingMinimumChunks;
                        var2 = var4.get;
                        var7 = var2.bind(var4)(var6);
                        var2 = null;
                        var10 = var2 != var7;
                        var9 = 0;
                        if(!var10) { _fun0015_ip = 44; continue _fun0015 }
case 45:
                        var9 = var7;
case 44:
                        var7 = _closure3_slot1;
                        var10 = var7 >= var6;
                        var7 = 0;
                        if(!var10) { _fun0015_ip = 46; continue _fun0015 }
case 47:
                        var7 = _closure3_slot1;
case 46:
                        var7 = var9 + var7;
                        var1[var8] = var7;
                        var3 = var3.HermesInternal;
                        var8 = var3.concat;
                        var7 = 'speech_event_count_gte_';
                        var3 = 'ms';
                        var3 = var8.bind(var7)(var6, var3);
                        var7 = _closure3_slot0;
                        var8 = var7.speakingMinimumChunkCounts;
                        var7 = var8.get;
                        var7 = var7.bind(var8)(var6);
                        var8 = var2 != var7;
                        var2 = 0;
                        if(!var8) { _fun0015_ip = 48; continue _fun0015 }
case 49:
                        var2 = var7;
case 48:
                        var5 = _closure3_slot1;
                        var5 = var5 >= var6;
                        var4 = 0;
                        if(!var5) { _fun0015_ip = 50; continue _fun0015 }
case 51:
                        var4 = 1;
case 50:
                        var2 = var2 + var4;
                        var1[var3] = var2;
                        return var1;
                    }
                };
                var2 = {};
                var9 = var4.bind(var5)(var3, var2);
                var10 = var1;
                var2 = copyDataProperties(var10, var9);
                return var1;
            }
        };
        var1['value'] = var5;
        var2[11] = var1;
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