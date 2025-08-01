// app/lib/VoiceStateAnalytics.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SpeakingFlags;
    var _closure1_slot4 = var4;
    var2 = function() {
        var4 = _closure1_slot1;
        var3 = function VoiceStateAnalytics(arg1, arg2) {
            var4 = this;
            var5 = _closure1_slot0;
            var3 = _closure2_slot0;
            var1 = undefined;
            var3 = var5.bind(var1)(var4, var3);
            var3 = 1;
            var4['maxVoiceStateCount'] = var3;
            var2 = _closure1_slot4;
            var2 = var2.NONE;
            var4['speaking'] = var2;
            var2 = 0;
            var4['maxListenerCount'] = var2;
            var4['maxSpeakerCount'] = var2;
            var2 = arg1;
            var4['userId'] = var2;
            var3 = var4.setChannelId;
            var2 = arg2;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'updateVoiceStates';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = arg1;
                var6 = arg2;
                var2 = this;
                var1 = var2.channelId;
                if(!(var6 !== var1)) { _fun0001_ip = 95; continue _fun0001 }
 18:
                var3 = null;
                var1 = var3 == var6;
                if(!var1) { _fun0001_ip = 37; continue _fun0001 }
 27:
                var5 = var2.totalSpeakers;
                var1 = var4 in var5;
 37:
                if(!var1) { _fun0001_ip = 63; continue _fun0001 }
 40:
                var5 = var2.totalSpeakers;
                var1 = _closure1_slot4;
                var1 = var1.NONE;
                var5[var4] = var1;
 63:
                var1 = var2.userId;
                var1 = var4 === var1;
                if(!var1) { _fun0001_ip = 79; continue _fun0001 }
 75:
                var1 = var3 != var6;
 79:
                if(!var1) { _fun0001_ip = 160; continue _fun0001 }
 82:
                var1 = var2.setChannelId;
                var1 = var1.bind(var2)(var6);
                _fun0001_ip = 160; continue _fun0001;
 95:
                var3 = var2.totalParticipants;
                var1 = var3.add;
                var1 = var1.bind(var3)(var4);
                var1 = global;
                var5 = var1.Math;
                var4 = var5.max;
                var3 = _closure1_slot3;
                var1 = var3.countVoiceStatesForChannel;
                var3 = var1.bind(var3)(var6);
                var1 = var2.maxVoiceStateCount;
                var1 = var4.bind(var5)(var3, var1);
                var2['maxVoiceStateCount'] = var1;
 160:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'getStats';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = {};
            var3 = var2.maxVoiceStateCount;
            var1['max_voice_state_count'] = var3;
            var3 = var2.totalParticipants;
            var3 = var3.size;
            var1['total_voice_state_count'] = var3;
            var3 = var2.maxListenerCount;
            var1['max_listener_count'] = var3;
            var3 = var2.totalListeners;
            var3 = var3.size;
            var1['total_listener_count'] = var3;
            var3 = var2.maxSpeakerCount;
            var1['max_speaker_count'] = var3;
            var3 = global;
            var4 = var3.Object;
            var3 = var4.keys;
            var2 = var2.totalSpeakers;
            var2 = var3.bind(var4)(var2);
            var2 = var2.length;
            var1['total_speaker_count'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'setSpeaking';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var6 = arg1;
                var2 = arg2;
                var1 = this;
                var _closure3_slot0 = var1;
                var4 = _closure1_slot4;
                var4 = var4.NONE;
                if(!(var2 === var4)) { _fun0002_ip = 73; continue _fun0002 }
 32:
                var4 = var1.totalSpeakers;
                var4 = var6 in var4;
                if(!var4) { _fun0002_ip = 203; continue _fun0002 }
 48:
                var7 = var1.totalSpeakers;
                var4 = _closure1_slot4;
                var4 = var4.NONE;
                var7[var6] = var4;
                _fun0002_ip = 203; continue _fun0002;
 73:
                var8 = _closure1_slot2;
                var7 = var8.getVoiceStateForChannel;
                var4 = var1.channelId;
                var4 = var7.bind(var8)(var4, var6);
                var7 = null;
                if(!(var7 != var4)) { _fun0002_ip = 203; continue _fun0002 }
 100:
                var7 = var4.selfMute;
                if(var7) { _fun0002_ip = 203; continue _fun0002 }
 109:
                var4 = var4.mute;
                if(var4) { _fun0002_ip = 203; continue _fun0002 }
 118:
                var4 = var1.totalSpeakers;
                var4[var6] = var2;
                var4 = global;
                var9 = var4.Object;
                var8 = var9.values;
                var7 = var1.totalSpeakers;
                var9 = var8.bind(var9)(var7);
                var8 = var9.filter;
                var7 = function(arg1) {
                    var1 = _closure1_slot4;
                    var2 = var1.NONE;
                    var1 = arg1;
                    var1 = var1 !== var2;
                    return var1;
                };
                var7 = var8.bind(var9)(var7);
                var9 = var7.length;
                var8 = var4.Math;
                var7 = var8.max;
                var4 = var1.maxSpeakerCount;
                var4 = var7.bind(var8)(var4, var9);
                var1['maxSpeakerCount'] = var4;
 203:
                var4 = var1.userId;
                if(!(var4 === var6)) { _fun0002_ip = 354; continue _fun0002 }
 215:
                var4 = var1.speaking;
                if(!(var2 !== var4)) { _fun0002_ip = 358; continue _fun0002 }
 228:
                var4 = _closure1_slot4;
                var4 = var4.NONE;
                if(!(var2 !== var4)) { _fun0002_ip = 348; continue _fun0002 }
 242:
                var4 = global;
                var7 = var4.Object;
                var6 = var7.values;
                var9 = _closure1_slot2;
                var8 = var9.getVoiceStatesForChannel;
                var3 = var1.channelId;
                var3 = var8.bind(var9)(var3);
                var7 = var6.bind(var7)(var3);
                var6 = var7.filter;
                var3 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = arg1;
                        var1 = var2.selfDeaf;
                        var1 = !var1;
                        if(!var1) { _fun0003_ip = 24; continue _fun0003 }
 15:
                        var2 = var2.deaf;
                        var1 = !var2;
 24:
                        return var1;
                    }
                };
                var3 = var6.bind(var7)(var3);
                var6 = var3.forEach;
                var5 = function(arg1) {
                    var1 = _closure3_slot0;
                    var3 = var1.totalListeners;
                    var2 = var3.add;
                    var1 = arg1;
                    var1 = var1.userId;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5 = var6.bind(var3)(var5);
                var6 = var4.Math;
                var5 = var6.max;
                var4 = var3.length;
                var3 = var1.maxListenerCount;
                var3 = var5.bind(var6)(var4, var3);
                var1['maxListenerCount'] = var3;
 348:
                var1['speaking'] = var2;
 354:
                var1 = undefined;
                return var1;
 358:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'setChannelId';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = var2.channelId;
                if(!(var1 !== var3)) { _fun0004_ip = 217; continue _fun0004 }
 24:
                var2['channelId'] = var1;
                var3 = global;
                var6 = var3.Set;
                var4 = var2.userId;
                var1 = new Array(1);
                var1[0] = var4;
                var4 = var6.prototype;
                var4 = Object.create(var4, {constructor: {value: var6}});
                var11 = var4;
                var10 = var1;
                var1 = new var11[var6](var10, var9);
                var1 = var1 instanceof Object ? var1 : var4;
                var2['totalParticipants'] = var1;
                var7 = var3.Object;
                var6 = var7.keys;
                var9 = _closure1_slot2;
                var8 = var9.getVoiceStatesForChannel;
                var4 = var2.channelId;
                var4 = var8.bind(var9)(var4);
                var4 = var6.bind(var7)(var4);
                var6 = var4.forEach;
                var5 = function(arg1) {
                    var1 = _closure3_slot0;
                    var3 = var1.totalParticipants;
                    var2 = var3.add;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5 = var6.bind(var4)(var5);
                var4 = var4.length;
                var2['maxVoiceStateCount'] = var4;
                var1 = _closure1_slot4;
                var1 = var1.NONE;
                var2['speaking'] = var1;
                var1 = 0;
                var2['maxListenerCount'] = var1;
                var3 = var3.Set;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var11 = var4;
                var3 = new var11[var3](var10);
                var3 = var3 instanceof Object ? var3 : var4;
                var2['totalListeners'] = var3;
                var2['maxSpeakerCount'] = var1;
                var1 = {};
                var2['totalSpeakers'] = var1;
 217:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/VoiceStateAnalytics.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();