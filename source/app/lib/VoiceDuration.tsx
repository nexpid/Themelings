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
                var4 = arg2;
                var5 = arguments[2];
                var3 = this;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 2;
                var2 = var7[var2];
                var2 = var6.bind(var1)(var2);
                var5 = var2.TimeStampProducer;
case 2:
                var7 = _closure1_slot2;
                var6 = _closure2_slot0;
                var6 = var7.bind(var1)(var3, var6);
                var6 = arg1;
                var3['userId'] = var6;
                var3['connection'] = var4;
                var3['timestampProducer'] = var5;
                var5 = global;
                var6 = var5.Set;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var13 = var7;
                var6 = new var13[var6](var12);
                var6 = var6 instanceof Object ? var6 : var7;
                var3['listeningUsers'] = var6;
                var6 = var5.Map;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var13 = var7;
                var6 = new var13[var6](var12);
                var6 = var6 instanceof Object ? var6 : var7;
                var3['timesUntilSpeakingDurationMilestonesMs'] = var6;
                var6 = var5.Map;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var13 = var7;
                var6 = new var13[var6](var12);
                var6 = var6 instanceof Object ? var6 : var7;
                var3['speakingMinimumChunks'] = var6;
                var5 = var5.Map;
                var6 = var5.prototype;
                var6 = Object.create(var6, {constructor: {value: var5}});
                var13 = var6;
                var5 = new var13[var5](var12);
                var5 = var5 instanceof Object ? var5 : var6;
                var3['speakingMinimumChunkCounts'] = var5;
                var5 = 0;
                var3['speechEventCount'] = var5;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 2;
                var7 = var6[var2];
                var7 = var5.bind(var1)(var7);
                var9 = var7.StopWatch;
                var12 = var3.timestampProducer;
                var8 = var9.prototype;
                var8 = Object.create(var8, {constructor: {value: var9}});
                var13 = var8;
                var7 = new var13[var9](var12, var11);
                var7 = var7 instanceof Object ? var7 : var8;
                var3['listening'] = var7;
                var7 = var6[var2];
                var7 = var5.bind(var1)(var7);
                var9 = var7.StopWatch;
                var12 = var3.timestampProducer;
                var8 = var9.prototype;
                var8 = Object.create(var8, {constructor: {value: var9}});
                var13 = var8;
                var7 = new var13[var9](var12, var11);
                var7 = var7 instanceof Object ? var7 : var8;
                var3['speaking'] = var7;
                var7 = var6[var2];
                var7 = var5.bind(var1)(var7);
                var9 = var7.StopWatch;
                var12 = var3.timestampProducer;
                var8 = var9.prototype;
                var8 = Object.create(var8, {constructor: {value: var9}});
                var13 = var8;
                var7 = new var13[var9](var12, var11);
                var7 = var7 instanceof Object ? var7 : var8;
                var3['participation'] = var7;
                var7 = var6[var2];
                var7 = var5.bind(var1)(var7);
                var9 = var7.StopWatch;
                var12 = var3.timestampProducer;
                var8 = var9.prototype;
                var8 = Object.create(var8, {constructor: {value: var9}});
                var13 = var8;
                var7 = new var13[var9](var12, var11);
                var7 = var7 instanceof Object ? var7 : var8;
                var3['connected'] = var7;
                var7 = var6[var2];
                var7 = var5.bind(var1)(var7);
                var9 = var7.StopWatch;
                var12 = var3.timestampProducer;
                var8 = var9.prototype;
                var8 = Object.create(var8, {constructor: {value: var9}});
                var13 = var8;
                var7 = new var13[var9](var12, var11);
                var7 = var7 instanceof Object ? var7 : var8;
                var3['muted'] = var7;
                var7 = var6[var2];
                var7 = var5.bind(var1)(var7);
                var9 = var7.StopWatch;
                var12 = var3.timestampProducer;
                var8 = var9.prototype;
                var8 = Object.create(var8, {constructor: {value: var9}});
                var13 = var8;
                var7 = new var13[var9](var12, var11);
                var7 = var7 instanceof Object ? var7 : var8;
                var3['deafened'] = var7;
                var7 = var6[var2];
                var7 = var5.bind(var1)(var7);
                var10 = var7.DurationEnabled;
                var7 = var4.getNoiseCancellation;
                var12 = var7.bind(var4)();
                var11 = var3.timestampProducer;
                var8 = var10.prototype;
                var8 = Object.create(var8, {constructor: {value: var10}});
                var13 = var8;
                var7 = new var13[var10](var12, var11, var10);
                var7 = var7 instanceof Object ? var7 : var8;
                var3['noiseCancellation'] = var7;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var6 = var2.DurationEnabled;
                var2 = var4.getSpatialAudioEnabled;
                var12 = var2.bind(var4)();
                var11 = var3.timestampProducer;
                var4 = var6.prototype;
                var4 = Object.create(var4, {constructor: {value: var6}});
                var13 = var4;
                var2 = new var13[var6](var12, var11, var10);
                var2 = var2 instanceof Object ? var2 : var4;
                var3['spatialAudio'] = var2;
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
                var8 = false;
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
                var5 = var4.deafened;
                var3 = var5.reset;
                var3 = var3.bind(var5)();
                var5 = var4.connected;
                var3 = var5.reset;
                var3 = var3.bind(var5)();
                var5 = var4.noiseCancellation;
                var3 = var5.reset;
                var3 = var3.bind(var5)();
                var5 = var4.spatialAudio;
                var3 = var5.reset;
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
                var5 = var4.onDeafened;
                var5 = var5.bind(var4)(var8);
                var10 = var4.connection;
                var9 = var10.on;
                var5 = var7[var3];
                var5 = var6.bind(var1)(var5);
                var5 = var5.BaseConnectionEvent;
                var8 = var5.Mute;
                var5 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.onMuted;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var5 = var9.bind(var10)(var8, var5);
                var5 = var4.connection;
                var4 = var5.on;
                var3 = var7[var3];
                var3 = var6.bind(var1)(var3);
                var3 = var3.BaseConnectionEvent;
                var3 = var3.Deafen;
                var2 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.onDeafened;
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
        var6 = 'onSpeaking';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = this;
                var1 = arg1;
                if(var1) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var1 = var2.connected;
                var5 = var1.lastStartTime;
                var1 = var2.speaking;
                var4 = var1.lastStartTime;
                var1 = var2.speaking;
                var3 = var1.lastElapsed;
                var1 = var2.addSpeechChunk;
                var1 = var1.bind(var2)();
                var6 = var2.speaking;
                var1 = var6.stop;
                var1 = var1.bind(var6)();
                var6 = var2.listening;
                var1 = var6.isRunning;
                var1 = var1.bind(var6)();
                if(var1) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var6 = var2.participation;
                var1 = var6.stop;
                var1 = var1.bind(var6)();
case 13:
                var1 = var2.computeSpeakingDurationMilestones;
                var1 = var1.bind(var2)(var5, var4, var3);
                _fun0004_ip = 15; continue _fun0004;
case 11:
                var3 = var2.speaking;
                var1 = var3.start;
                var1 = var1.bind(var3)();
                var3 = var2.participation;
                var1 = var3.start;
                var1 = var1.bind(var3)();
                var1 = var2.speechEventCount;
                var1 = var1 + 1;
                var2['speechEventCount'] = var1;
case 15:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'onListening';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg2;
                var1 = this;
                var3 = var1.listeningUsers;
                var2 = arg1;
                if(var2) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                var2 = var3.delete;
                var2 = var2.bind(var3)(var4);
                if(!var2) { _fun0005_ip = 8; continue _fun0005 }
case 18:
                var5 = var1.listeningUsers;
                var6 = var5.size;
                var5 = 0;
                var2 = var5 === var6;
case 8:
                if(!var2) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var5 = var1.listening;
                var2 = var5.stop;
                var2 = var2.bind(var5)();
                var5 = var1.speaking;
                var2 = var5.isRunning;
                var2 = var2.bind(var5)();
                if(var2) { _fun0005_ip = 19; continue _fun0005 }
case 21:
                var5 = var1.participation;
                var2 = var5.stop;
                var2 = var2.bind(var5)();
                _fun0005_ip = 19; continue _fun0005;
case 16:
                var2 = var3.add;
                var2 = var2.bind(var3)(var4);
                var3 = var1.listening;
                var2 = var3.start;
                var2 = var2.bind(var3)();
                var2 = var1.participation;
                var1 = var2.start;
                var1 = var1.bind(var2)();
case 19:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'onMuted';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = this;
                var2 = var1.muted;
                var1 = arg1;
                if(var1) { _fun0006_ip = 7; continue _fun0006 }
case 3:
                var1 = var2.stop;
                var1 = var1.bind(var2)();
                _fun0006_ip = 22; continue _fun0006;
case 7:
                var1 = var2.start;
                var1 = var1.bind(var2)();
case 22:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'onDeafened';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = this;
                var2 = var1.deafened;
                var1 = arg1;
                if(var1) { _fun0007_ip = 7; continue _fun0007 }
case 3:
                var1 = var2.stop;
                var1 = var1.bind(var2)();
                _fun0007_ip = 22; continue _fun0007;
case 7:
                var1 = var2.start;
                var1 = var1.bind(var2)();
case 22:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'computeSpeakingDurationMilestones';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
                if(!(var3 != var5)) { _fun0008_ip = 23; continue _fun0008 }
case 22:
                if(!(var3 != var4)) { _fun0008_ip = 23; continue _fun0008 }
case 24:
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
case 23:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'addSpeechChunk';
        var1['key'] = var6;
        var6 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = var2.speaking;
                var3 = var3.lastStartTime;
                var4 = null;
                if(!(var4 != var3)) { _fun0009_ip = 25; continue _fun0009 }
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
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var4 = arg1;
                        var2 = _closure3_slot0;
                        var3 = var2.speakingMinimumChunks;
                        var2 = var3.get;
                        var2 = var2.bind(var3)(var4);
                        var3 = null;
                        var6 = var3 != var2;
                        var9 = 0;
                        if(!var6) { _fun0010_ip = 24; continue _fun0010 }
case 26:
                        var9 = var2;
case 24:
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
                        if(!var3) { _fun0010_ip = 27; continue _fun0010 }
case 28:
                        var5 = var2;
case 27:
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
case 25:
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
        var6 = 'setSpatialAudioEnabled';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var2 = var1.spatialAudio;
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
            var1 = var5.noiseCancellation;
            var6 = false;
            var1['value'] = var6;
            var1 = var5.spatialAudio;
            var1['value'] = var6;
            var1 = var5.computeSpeakingDurationMilestones;
            var1 = var1.bind(var5)(var4, var3, var2);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'getDurationStats';
        var1['key'] = var6;
        var5 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var1 = var3.speaking;
                var5 = var1.lastStartTime;
                var4 = var3.timestampProducer;
                var1 = var4.now;
                var4 = var1.bind(var4)();
                var1 = null;
                var6 = var1 != var5;
                var1 = 0;
                if(!var6) { _fun0011_ip = 20; continue _fun0011 }
case 29:
                var1 = var4 - var5;
case 20:
                var _closure3_slot1 = var1;
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
                var5 = var3.deafened;
                var4 = var5.elapsed;
                var5 = var4.bind(var5)();
                var4 = var5.asMilliseconds;
                var4 = var4.bind(var5)();
                var1['duration_deafened_ms'] = var4;
                var5 = var3.noiseCancellation;
                var4 = var5.totalDuration;
                var4 = var4.bind(var5)();
                var1['duration_noise_cancellation_enabled_ms'] = var4;
                var5 = var3.spatialAudio;
                var4 = var5.totalDuration;
                var4 = var4.bind(var5)();
                var1['duration_spatial_ms'] = var4;
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
                    var1[2] = var2;
                    return var1;
                };
                var4 = {};
                var9 = var6.bind(var7)(var5, var4);
                var10 = var1;
                var4 = copyDataProperties(var10, var9);
                var5 = _closure1_slot5;
                var4 = var5.filter;
                var3 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var3 = arg1;
                        var1 = _closure3_slot0;
                        var4 = var1.speakingMinimumChunks;
                        var1 = var4.has;
                        var1 = var1.bind(var4)(var3);
                        if(var1) { _fun0012_ip = 26; continue _fun0012 }
case 6:
                        var2 = _closure3_slot1;
                        var1 = var2 >= var3;
case 26:
                        return var1;
                    }
                };
                var5 = var4.bind(var5)(var3);
                var4 = var5.reduce;
                var3 = function(arg1, arg2) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
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
                        if(!var10) { _fun0013_ip = 30; continue _fun0013 }
case 31:
                        var9 = var7;
case 30:
                        var7 = _closure3_slot1;
                        var10 = var7 >= var6;
                        var7 = 0;
                        if(!var10) { _fun0013_ip = 32; continue _fun0013 }
case 33:
                        var7 = _closure3_slot1;
case 32:
                        var7 = var9 + var7;
                        var1[7] = var7;
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
                        if(!var8) { _fun0013_ip = 34; continue _fun0013 }
case 35:
                        var2 = var7;
case 34:
                        var5 = _closure3_slot1;
                        var5 = var5 >= var6;
                        var4 = 0;
                        if(!var5) { _fun0013_ip = 36; continue _fun0013 }
case 37:
                        var4 = 1;
case 36:
                        var2 = var2 + var4;
                        var1[2] = var2;
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