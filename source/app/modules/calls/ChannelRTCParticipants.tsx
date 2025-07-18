// app/modules/calls/ChannelRTCParticipants.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var9 = native2;
    var7 = native3;
    var3 = native6;
    var10 = native7;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var10;
    var6 = function getEmbeddedActivityParticipantId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.applicationId;
            var5 = var1.instanceId;
            var1 = null;
            if(!(var1 == var5)) { _fun0001_ip = 46; continue _fun0001 }
 20:
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'activity-';
            var1 = var2.bind(var1)(var6);
            _fun0001_ip = 76; continue _fun0001;
 46:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = 'activity-';
            var2 = '-';
            var1 = var4.bind(var3)(var6, var2, var5);
 76:
            return var1;
        }
    };
    var _closure1_slot21 = var6;
    var5 = function sortKey(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var4 = var1.type;
            var3 = _closure1_slot16;
            var3 = var3.ACTIVITY;
            if(!(var3 !== var4)) { _fun0002_ip = 294; continue _fun0002 }
 28:
            var3 = _closure1_slot16;
            var3 = var3.HIDDEN_STREAM;
            if(!(var3 !== var4)) { _fun0002_ip = 205; continue _fun0002 }
 45:
            var3 = _closure1_slot16;
            var3 = var3.STREAM;
            if(!(var3 !== var4)) { _fun0002_ip = 205; continue _fun0002 }
 62:
            var3 = _closure1_slot16;
            var3 = var3.USER;
            if(!(var3 !== var4)) { _fun0002_ip = 80; continue _fun0002 }
 76:
            var3 = undefined;
            return var3;
 80:
            var4 = var1.voiceState;
            var3 = null;
            if(!(var3 != var4)) { _fun0002_ip = 107; continue _fun0002 }
 92:
            var4 = var4.selfVideo;
            var6 = '\x03';
            if(var4) { _fun0002_ip = 141; continue _fun0002 }
 107:
            var4 = var1.voiceState;
            var3 = var3 != var4;
            if(!var3) { _fun0002_ip = 126; continue _fun0002 }
 120:
            var3 = var4.selfStream;
 126:
            var6 = '\x05';
            if(!var3) { _fun0002_ip = 141; continue _fun0002 }
 135:
            var6 = '\x04';
 141:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 15;
            var3 = var5[var3];
            var7 = undefined;
            var5 = var4.bind(var7)(var3);
            var4 = var1.userNick;
            var3 = var1.user;
            var5 = var5.bind(var7)(var4, var3);
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '';
            var3 = var4.bind(var3)(var6, var5);
            return var3;
 205:
            var3 = var1.userVideo;
            var6 = '\x03';
            var5 = var6;
            if(!var3) { _fun0002_ip = 229; continue _fun0002 }
 223:
            var5 = '\x02';
 229:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 15;
            var2 = var4[var2];
            var7 = undefined;
            var4 = var3.bind(var7)(var2);
            var3 = var1.userNick;
            var2 = var1.user;
            var4 = var4.bind(var7)(var3, var2);
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '';
            var2 = var3.bind(var2)(var5, var4, var6);
            return var2;
 294:
            var3 = var1.sortKey;
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = '\x01';
            var1 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var _closure1_slot22 = var5;
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var2);
    var1 = 0;
    var2 = var10[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var10[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var10[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var10[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var10[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var10[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var10[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var10[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var10[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var10[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var10[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 11;
    var2 = var10[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 12;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var7 = var2.isStreamParticipant;
    var _closure1_slot15 = var7;
    var2 = var2.ParticipantTypes;
    var _closure1_slot16 = var2;
    var2 = 13;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var7 = var2.ActivityTypes;
    var _closure1_slot17 = var7;
    var2 = var2.ChannelTypes;
    var _closure1_slot18 = var2;
    var2 = 14;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var2 = var2.MediaEngineContextTypes;
    var _closure1_slot19 = var2;
    var2 = {};
    var7 = 'VIDEO';
    var2['VIDEO'] = var7;
    var7 = 'STREAM';
    var2['STREAM'] = var7;
    var7 = 'FILTERED';
    var2['FILTERED'] = var7;
    var7 = 'SPEAKING';
    var2['SPEAKING'] = var7;
    var7 = 'ACTIVITY';
    var2['ACTIVITY'] = var7;
    var _closure1_slot20 = var2;
    var7 = function() {
        var4 = _closure1_slot4;
        var3 = function ChannelRTCParticipants(arg1) {
            var3 = this;
            var5 = _closure1_slot3;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = {};
            var3['participants'] = var4;
            var4 = {};
            var3['lastSpoke'] = var4;
            var4 = global;
            var4 = var4.Set;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var9 = var5;
            var4 = new var9[var4](var8);
            var4 = var4 instanceof Object ? var4 : var5;
            var3['guildRingingUsers'] = var4;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 16;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var6 = var4.SecondaryIndexMap;
            var7 = _closure1_slot22;
            var2 = var6.prototype;
            var4 = Object.create(var2, {constructor: {value: var6}});
            var8 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = arg1;
                    var1 = new Array(0);
                    var5 = var3.type;
                    var4 = _closure1_slot16;
                    var4 = var4.USER;
                    var4 = var5 === var4;
                    if(!var4) { _fun0003_ip = 38; continue _fun0003 }
 32:
                    var4 = var3.speaking;
 38:
                    if(!var4) { _fun0003_ip = 61; continue _fun0003 }
 41:
                    var5 = var1.push;
                    var4 = _closure1_slot20;
                    var4 = var4.SPEAKING;
                    var4 = var5.bind(var1)(var4);
 61:
                    var5 = var3.type;
                    var4 = _closure1_slot16;
                    var4 = var4.USER;
                    if(!(var5 === var4)) { _fun0003_ip = 101; continue _fun0003 }
 80:
                    var4 = var3.voiceState;
                    var5 = null;
                    if(!(var5 != var4)) { _fun0003_ip = 101; continue _fun0003 }
 92:
                    var4 = var4.selfVideo;
                    if(var4) { _fun0003_ip = 197; continue _fun0003 }
 101:
                    var5 = _closure1_slot15;
                    var4 = undefined;
                    var4 = var5.bind(var4)(var3);
                    if(!var4) { _fun0003_ip = 246; continue _fun0003 }
 118:
                    var5 = var1.push;
                    var4 = _closure1_slot20;
                    var4 = var4.STREAM;
                    var4 = var5.bind(var1)(var4);
                    var5 = var3.type;
                    var4 = _closure1_slot16;
                    var4 = var4.HIDDEN_STREAM;
                    var4 = var5 !== var4;
                    if(!var4) { _fun0003_ip = 172; continue _fun0003 }
 160:
                    var6 = var3.streamId;
                    var5 = null;
                    var4 = var5 != var6;
 172:
                    if(!var4) { _fun0003_ip = 246; continue _fun0003 }
 175:
                    var5 = var1.push;
                    var4 = _closure1_slot20;
                    var4 = var4.FILTERED;
                    var4 = var5.bind(var1)(var4);
                    _fun0003_ip = 246; continue _fun0003;
 197:
                    var5 = var1.push;
                    var4 = _closure1_slot20;
                    var4 = var4.VIDEO;
                    var4 = var5.bind(var1)(var4);
                    var4 = var3.localVideoDisabled;
                    if(var4) { _fun0003_ip = 246; continue _fun0003 }
 226:
                    var5 = var1.push;
                    var4 = _closure1_slot20;
                    var4 = var4.FILTERED;
                    var4 = var5.bind(var1)(var4);
 246:
                    var4 = var3.type;
                    var3 = _closure1_slot16;
                    var3 = var3.ACTIVITY;
                    if(!(var4 === var3)) { _fun0003_ip = 301; continue _fun0003 }
 265:
                    var4 = var1.push;
                    var2 = _closure1_slot20;
                    var3 = var2.ACTIVITY;
                    var3 = var4.bind(var1)(var3);
                    var3 = var1.push;
                    var2 = var2.FILTERED;
                    var2 = var3.bind(var1)(var2);
 301:
                    return var1;
                }
            };
            var9 = var4;
            var2 = new var9[var6](var8, var7, var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['participantByIndex'] = var2;
            var2 = arg1;
            var3['channelId'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'version';
        var1['key'] = var2;
        var2 = function get() {
            var1 = this;
            var1 = var1.participantByIndex;
            var1 = var1.version;
            return var1;
        };
        var1['get'] = var2;
        var2 = new Array(14);
        var2[0] = var1;
        var1 = {};
        var6 = 'size';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.participantByIndex;
            var2 = var3.size;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'toArray';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var4 = var1.participantByIndex;
            var3 = var4.values;
            var2 = arg1;
            var1 = true;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'rebuild';
        var1['key'] = var6;
        var6 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var6 = _closure1_slot9;
                var5 = var6.getChannel;
                var4 = var2.channelId;
                var6 = var5.bind(var6)(var4);
                var5 = null;
                if(!(var5 != var6)) { _fun0004_ip = 423; continue _fun0004 }
 40:
                var7 = var6.type;
                var4 = _closure1_slot18;
                var4 = var4.GUILD_TEXT;
                if(!(var7 !== var4)) { _fun0004_ip = 423; continue _fun0004 }
 62:
                var8 = _closure1_slot8;
                var7 = var8.getCall;
                var4 = var2.channelId;
                var4 = var7.bind(var8)(var4);
                var2['call'] = var4;
                var4 = var6.isPrivate;
                var4 = var4.bind(var6)();
                if(!var4) { _fun0004_ip = 130; continue _fun0004 }
 101:
                var4 = var2.call;
                if(!(var5 != var4)) { _fun0004_ip = 419; continue _fun0004 }
 113:
                var4 = var2.call;
                var4 = var4.unavailable;
                if(var4) { _fun0004_ip = 419; continue _fun0004 }
 130:
                var5 = global;
                var7 = var5.Set;
                var4 = var6.isGuildVocalOrThread;
                var4 = var4.bind(var6)();
                if(var4) { _fun0004_ip = 159; continue _fun0004 }
 151:
                var4 = var6.recipients;
                _fun0004_ip = 195; continue _fun0004;
 159:
                var9 = var5.Object;
                var8 = var9.keys;
                var11 = _closure1_slot14;
                var10 = var11.getVoiceStatesForChannel;
                var6 = var6.id;
                var6 = var10.bind(var11)(var6);
                var4 = var8.bind(var9)(var6);
 195:
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var15 = var6;
                var14 = var4;
                var4 = new var15[var7](var14, var13);
                var8 = var4 instanceof Object ? var4 : var6;
                var _closure3_slot1 = var8;
                var6 = var8.add;
                var7 = _closure1_slot7;
                var4 = var7.getId;
                var4 = var4.bind(var7)();
                var4 = var6.bind(var8)(var4);
                var4 = var2.guildRingingUsers;
                var7 = var4.size;
                var6 = 0;
                var4 = var8;
                if(!(var7 > var6)) { _fun0004_ip = 331; continue _fun0004 }
 266:
                var7 = var5.Set;
                var5 = new Array(0);
                var14 = var5;
                var13 = var8;
                var12 = 0;
                var12 = arraySpread(var14, var13, var12);
                var13 = var2.guildRingingUsers;
                var14 = var5;
                var6 = arraySpread(var14, var13, var12);
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var15 = var6;
                var14 = var5;
                var5 = new var15[var7](var14, var13);
                var5 = var5 instanceof Object ? var5 : var6;
                _closure3_slot1 = var5;
                var4 = var5;
 331:
                var6 = _closure1_slot6;
                var5 = var6.getAllActiveStreamsForChannel;
                var3 = var2.channelId;
                var6 = var5.bind(var6)(var3);
                var5 = var6.forEach;
                var3 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.ownerId;
                    var2 = _closure3_slot1;
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var3);
                    return var1;
                };
                var3 = var5.bind(var6)(var3);
                var5 = var2.participantByIndex;
                var3 = var5.clear;
                var3 = var3.bind(var5)();
                var3 = {};
                var2['participants'] = var3;
                var3 = var4.forEach;
                var1 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.updateParticipant;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var1);
                var1 = var2.updateEmbeddedActivities;
                var1 = var1.bind(var2)();
                var1 = true;
                return var1;
 419:
                var1 = false;
                return var1;
 423:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getParticipant';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = this;
                var3 = var1.participantByIndex;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0005_ip = 34; continue _fun0005 }
 31:
                var1 = var2;
 34:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'updateEmbeddedActivities';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var2 = var3.updateParticipant;
            var1 = '__EMBEDDED_ACTIVITIES__';
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'hasEmbeddedActivity';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var2 = var3.size;
            var1 = _closure1_slot20;
            var1 = var1.ACTIVITY;
            var2 = var2.bind(var3)(var1);
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'updateParticipant';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = arg1;
                var2 = this;
                var _closure3_slot0 = var2;
                var1 = var2.participants;
                var8 = var1[var4];
                var1 = '__EMBEDDED_ACTIVITIES__';
                if(!(var4 !== var1)) { _fun0006_ip = 45; continue _fun0006 }
 32:
                var1 = var2._getParticipantsForUser;
                var3 = var1.bind(var2)(var4);
                _fun0006_ip = 57; continue _fun0006;
 45:
                var1 = var2._getParticipantsForEmbeddedActivities;
                var3 = var1.bind(var2)();
 57:
                var6 = null;
                var1 = var6 != var8;
                if(var1) { _fun0006_ip = 77; continue _fun0006 }
 66:
                var9 = var3.length;
                var7 = 0;
                var1 = var7 !== var9;
 77:
                if(!var1) { _fun0006_ip = 126; continue _fun0006 }
 80:
                if(!(var6 != var8)) { _fun0006_ip = 99; continue _fun0006 }
 84:
                var7 = var8.forEach;
                var6 = function(arg1) {
                    var1 = _closure3_slot0;
                    var3 = var1.participantByIndex;
                    var2 = var3.delete;
                    var1 = arg1;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var6 = var7.bind(var8)(var6);
 99:
                var6 = var3.forEach;
                var5 = function(arg1) {
                    var4 = arg1;
                    var1 = _closure3_slot0;
                    var3 = var1.participantByIndex;
                    var2 = var3.set;
                    var1 = var4.id;
                    var1 = var2.bind(var3)(var1, var4);
                    var1 = undefined;
                    return var1;
                };
                var5 = var6.bind(var3)(var5);
                var2 = var2.participants;
                var2[var4] = var3;
                var1 = true;
 126:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'updateParticipantSpeaking';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = arg1;
                var1 = this;
                var _closure3_slot0 = var1;
                var _closure3_slot1 = var2;
                var1 = var1.participants;
                var6 = var1[var2];
                var1 = null;
                var4 = var1 == var6;
                var2 = undefined;
                if(var4) { _fun0007_ip = 56; continue _fun0007 }
 37:
                var5 = var6.reduce;
                var4 = function(arg1, arg2) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var9 = arg2;
                        var2 = var9.type;
                        var1 = _closure1_slot16;
                        var1 = var1.USER;
                        if(!(var2 !== var1)) { _fun0008_ip = 30; continue _fun0008 }
 25:
                        var1 = arg1;
                        return var1;
 30:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.getIsSpeaking;
                        var2 = {};
                        var1 = _closure3_slot1;
                        var2['userId'] = var1;
                        var1 = true;
                        var2['checkIsMuted'] = var1;
                        var10 = var3.bind(var4)(var2);
                        if(!var10) { _fun0008_ip = 121; continue _fun0008 }
 86:
                        var2 = _closure3_slot0;
                        var4 = var2.lastSpoke;
                        var3 = _closure3_slot1;
                        var2 = global;
                        var5 = var2.Date;
                        var2 = var5.now;
                        var2 = var2.bind(var5)();
                        var4[var3] = var2;
 121:
                        var7 = _closure3_slot0;
                        var5 = var7.participantByIndex;
                        var4 = var5.set;
                        var3 = var9.id;
                        var2 = {};
                        var12 = var2;
                        var11 = var9;
                        var9 = copyDataProperties(var12, var11);
                        var9 = 'speaking';
                        var2[var9] = var10;
                        var7 = var7.lastSpoke;
                        var8 = _closure3_slot1;
                        var9 = var7[var8];
                        var7 = 'lastSpoke';
                        var2[var7] = var9;
                        var7 = _closure1_slot11;
                        var6 = var7.isSoundSharing;
                        var7 = var6.bind(var7)(var8);
                        var6 = 'soundsharing';
                        var2[var6] = var7;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    }
                };
                var3 = false;
                var2 = var5.bind(var6)(var4, var3);
 56:
                var1 = var1 != var2;
                if(!var1) { _fun0007_ip = 66; continue _fun0007 }
 63:
                var1 = var2;
 66:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'updateParticipantQuality';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var2 = arg2;
                var _closure3_slot1 = var2;
                var2 = arg3;
                var _closure3_slot2 = var2;
                var2 = var1.participants;
                var1 = arg1;
                var6 = var2[var1];
                var1 = null;
                var4 = var1 == var6;
                var2 = undefined;
                if(var4) { _fun0009_ip = 66; continue _fun0009 }
 47:
                var5 = var6.reduce;
                var4 = function(arg1, arg2) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var1 = arg1;
                        var7 = arg2;
                        var3 = var7.type;
                        var2 = _closure1_slot16;
                        var2 = var2.STREAM;
                        if(!(var3 === var2)) { _fun0010_ip = 97; continue _fun0010 }
 28:
                        var2 = _closure3_slot0;
                        var5 = var2.participantByIndex;
                        var4 = var5.set;
                        var3 = var7.id;
                        var2 = {};
                        var10 = var2;
                        var9 = var7;
                        var7 = copyDataProperties(var10, var9);
                        var8 = _closure3_slot1;
                        var7 = 'maxResolution';
                        var2[var7] = var8;
                        var7 = _closure3_slot2;
                        var6 = 'maxFrameRate';
                        var2[var6] = var7;
                        var2 = var4.bind(var5)(var3, var2);
                        var1 = true;
 97:
                        return var1;
                    }
                };
                var3 = false;
                var2 = var5.bind(var6)(var4, var3);
 66:
                var1 = var1 != var2;
                if(!var1) { _fun0009_ip = 76; continue _fun0009 }
 73:
                var1 = var2;
 76:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'updateGuildRingingUsers';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var3 = arg1;
                var1 = this;
                var2 = var1.guildRingingUsers;
                var1 = arg2;
                if(var1) { _fun0011_ip = 30; continue _fun0011 }
 18:
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
                _fun0011_ip = 40; continue _fun0011;
 30:
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
 40:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = '_getEmbeddedActivities';
        var1['key'] = var6;
        var6 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var1 = this;
                var4 = _closure1_slot5;
                var5 = var4.getEmbeddedActivitiesForChannel;
                var2 = var1.channelId;
                var7 = var5.bind(var4)(var2);
                var2 = var4.getSelfEmbeddedActivityForChannel;
                var1 = var1.channelId;
                var2 = var2.bind(var4)(var1);
                var4 = null;
                var1 = var7;
                if(!(var4 != var2)) { _fun0012_ip = 120; continue _fun0012 }
 51:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 18;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.uniqBy;
                var3 = new Array(1);
                var8 = 0;
                var10 = var3;
                var9 = var7;
                var6 = arraySpread(var10, var9, var8);
                var3[var6] = var2;
                var2 = 1;
                var2 = var6 + var2;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.compositeInstanceId;
                    return var1;
                };
                var1 = var4.bind(var5)(var3, var2);
 120:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = '_getParticipantsForEmbeddedActivities';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var _closure3_slot0 = var3;
            var2 = var3._getEmbeddedActivities;
            var3 = var2.bind(var3)();
            var2 = var3.map;
            var1 = function(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var2 = arg1;
                    var3 = arg2;
                    var1 = {};
                    var4 = _closure1_slot16;
                    var4 = var4.ACTIVITY;
                    var1['type'] = var4;
                    var7 = _closure1_slot21;
                    var6 = {};
                    var4 = var2.applicationId;
                    var6['applicationId'] = var4;
                    var4 = var2.compositeInstanceId;
                    var6['instanceId'] = var4;
                    var4 = undefined;
                    var6 = var7.bind(var4)(var6);
                    var1['id'] = var6;
                    var6 = var2.applicationId;
                    var1['applicationId'] = var6;
                    var6 = _closure1_slot17;
                    var6 = var6.PLAYING;
                    var1['activityType'] = var6;
                    var6 = var2.url;
                    var1['activityUrl'] = var6;
                    var8 = var2.participants;
                    var2 = null;
                    if(!(var2 == var8)) { _fun0013_ip = 112; continue _fun0013 }
 108:
                    var8 = new Array(0);
 112:
                    var6 = new Array(0);
                    var9 = 0;
                    var11 = var6;
                    var10 = var8;
                    var7 = arraySpread(var11, var10, var9);
                    var1['participants'] = var6;
                    var7 = _closure1_slot9;
                    var6 = var7.getChannel;
                    var5 = _closure3_slot0;
                    var5 = var5.channelId;
                    var6 = var6.bind(var7)(var5);
                    var5 = var2 == var6;
                    var4 = undefined;
                    if(var5) { _fun0013_ip = 178; continue _fun0013 }
 168:
                    var5 = var6.getGuildId;
                    var4 = var5.bind(var6)();
 178:
                    var5 = var2 != var4;
                    var2 = null;
                    if(!var5) { _fun0013_ip = 190; continue _fun0013 }
 187:
                    var2 = var4;
 190:
                    var1['guildId'] = var2;
                    var2 = var3.toString;
                    var2 = var2.bind(var3)();
                    var1['sortKey'] = var2;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = '_getParticipantsForUser';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var17 = arg1;
                var2 = this;
                var1 = new Array(0);
                var4 = _closure1_slot12;
                var3 = var4.getUser;
                var8 = var3.bind(var4)(var17);
                var10 = null;
                if(!(var10 != var8)) { _fun0014_ip = 950; continue _fun0014 }
 37:
                var6 = _closure1_slot14;
                var4 = var6.getVoiceStateForChannel;
                var3 = var2.channelId;
                var11 = var4.bind(var6)(var3, var17);
                var4 = var6.getVoicePlatformForChannel;
                var3 = var2.channelId;
                var12 = var4.bind(var6)(var3, var17);
                var6 = _closure1_slot9;
                var4 = var6.getChannel;
                var3 = var2.channelId;
                var4 = var4.bind(var6)(var3);
                var3 = var10 == var4;
                var9 = undefined;
                var7 = undefined;
                if(var3) { _fun0014_ip = 115; continue _fun0014 }
 105:
                var3 = var4.getGuildId;
                var7 = var3.bind(var4)();
 115:
                var4 = var2.call;
                var6 = var10 == var4;
                var3 = undefined;
                if(var6) { _fun0014_ip = 154; continue _fun0014 }
 129:
                var6 = var4.ringing;
                var4 = var10 == var6;
                var3 = undefined;
                if(var4) { _fun0014_ip = 154; continue _fun0014 }
 144:
                var4 = var6.includes;
                var3 = var4.bind(var6)(var17);
 154:
                if(var3) { _fun0014_ip = 173; continue _fun0014 }
 157:
                var6 = var2.guildRingingUsers;
                var4 = var6.has;
                var3 = var4.bind(var6)(var17);
 173:
                var6 = var10 != var3;
                if(!var6) { _fun0014_ip = 183; continue _fun0014 }
 180:
                var6 = var3;
 183:
                var3 = var10 != var11;
                if(var3) { _fun0014_ip = 193; continue _fun0014 }
 190:
                var3 = var6;
 193:
                if(!var3) { _fun0014_ip = 521; continue _fun0014 }
 199:
                var4 = {};
                var3 = _closure1_slot16;
                var3 = var3.USER;
                var4['type'] = var3;
                var13 = _closure1_slot13;
                var3 = var13.getUserStreamData;
                var20 = var3.bind(var13)(var17, var7);
                var21 = var4;
                var3 = copyDataProperties(var21, var20);
                var3 = 'user';
                var4[var3] = var8;
                var13 = var8.id;
                var3 = 'id';
                var4[var3] = var13;
                var3 = 'voiceState';
                var4[var3] = var11;
                var3 = 'voicePlatform';
                var4[var3] = var12;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var3 = 17;
                var3 = var13[var3];
                var13 = var12.bind(var9)(var3);
                var12 = var13.getIsSpeaking;
                var3 = {};
                var3['userId'] = var17;
                var14 = true;
                var3['checkIsMuted'] = var14;
                var12 = var12.bind(var13)(var3);
                var3 = 'speaking';
                var4[var3] = var12;
                var3 = var2.lastSpoke;
                var3 = var3[var17];
                var13 = var10 != var3;
                var12 = 0;
                if(!var13) { _fun0014_ip = 354; continue _fun0014 }
 351:
                var12 = var3;
 354:
                var3 = 'lastSpoke';
                var4[var3] = var12;
                var12 = _closure1_slot11;
                var3 = var12.isSoundSharing;
                var12 = var3.bind(var12)(var17);
                var3 = 'soundsharing';
                var4[var3] = var12;
                var3 = 'ringing';
                var4[var3] = var6;
                var6 = _closure1_slot1;
                var12 = _closure1_slot2;
                var3 = 19;
                var3 = var12[var3];
                var13 = var6.bind(var9)(var3);
                var6 = var13.getName;
                var3 = var2.channelId;
                var6 = var6.bind(var13)(var7, var3, var8);
                var3 = 'userNick';
                var4[var3] = var6;
                var6 = _closure1_slot0;
                var3 = 20;
                var3 = var12[var3];
                var6 = var6.bind(var9)(var3);
                var3 = var6.getAvatarDecoration;
                var6 = var3.bind(var6)(var8, var7);
                var3 = 'userAvatarDecoration';
                var4[var3] = var6;
                var12 = _closure1_slot10;
                var6 = var12.isLocalVideoDisabled;
                var3 = var8.id;
                var6 = var6.bind(var12)(var3);
                var3 = 'localVideoDisabled';
                var4[var3] = var6;
                var3 = var1.push;
                var3 = var3.bind(var1)(var4);
 521:
                var4 = _closure1_slot6;
                var3 = var4.getStreamForUser;
                var4 = var3.bind(var4)(var17, var7);
                if(!(var10 == var4)) { _fun0014_ip = 557; continue _fun0014 }
 541:
                var6 = _closure1_slot6;
                var3 = var6.getActiveStreamForUser;
                var4 = var3.bind(var6)(var17, var7);
 557:
                if(!(var10 != var4)) { _fun0014_ip = 948; continue _fun0014 }
 564:
                var6 = var4.channelId;
                var3 = var2.channelId;
                if(!(var6 === var3)) { _fun0014_ip = 948; continue _fun0014 }
 581:
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var3 = 21;
                var3 = var12[var3];
                var6 = var6.bind(var9)(var3);
                var3 = var6.encodeStreamKey;
                var12 = var3.bind(var6)(var4);
                var3 = var2.getParticipant;
                var14 = var3.bind(var2)(var12);
                var6 = var4.ownerId;
                var13 = _closure1_slot7;
                var3 = var13.getId;
                var3 = var3.bind(var13)();
                var13 = var6 === var3;
                if(!var13) { _fun0014_ip = 670; continue _fun0014 }
 650:
                var15 = _closure1_slot6;
                var6 = var15.isSelfStreamHidden;
                var3 = var2.channelId;
                var13 = var6.bind(var15)(var3);
 670:
                var3 = var10 == var14;
                var15 = undefined;
                if(var3) { _fun0014_ip = 684; continue _fun0014 }
 679:
                var15 = var14.type;
 684:
                var3 = _closure1_slot16;
                var3 = var3.STREAM;
                var6 = null;
                if(!(var15 === var3)) { _fun0014_ip = 754; continue _fun0014 }
 700:
                var3 = {};
                var15 = var14.maxResolution;
                var16 = var10 != var15;
                var15 = undefined;
                if(!var16) { _fun0014_ip = 735; continue _fun0014 }
 717:
                var16 = {};
                var20 = var14.maxResolution;
                var21 = var16;
                var18 = copyDataProperties(var21, var20);
                var15 = var16;
 735:
                var3['maxResolution'] = var15;
                var14 = var14.maxFrameRate;
                var3['maxFrameRate'] = var14;
                var6 = var3;
 754:
                var3 = {};
                var16 = _closure1_slot13;
                var15 = var16.getUserStreamData;
                var14 = _closure1_slot19;
                var14 = var14.STREAM;
                var20 = var15.bind(var16)(var17, var7, var14);
                var21 = var3;
                var14 = copyDataProperties(var21, var20);
                var21 = var3;
                var20 = var6;
                var6 = copyDataProperties(var21, var20);
                var6 = _closure1_slot16;
                if(var13) { _fun0014_ip = 815; continue _fun0014 }
 807:
                var13 = var6.STREAM;
                _fun0014_ip = 821; continue _fun0014;
 815:
                var13 = var6.HIDDEN_STREAM;
 821:
                var6 = 'type';
                var3[var6] = var13;
                var6 = 'id';
                var3[var6] = var12;
                var12 = var10 == var11;
                var6 = undefined;
                if(var12) { _fun0014_ip = 854; continue _fun0014 }
 848:
                var6 = var11.selfVideo;
 854:
                var10 = var10 != var6;
                if(!var10) { _fun0014_ip = 864; continue _fun0014 }
 861:
                var10 = var6;
 864:
                var6 = 'userVideo';
                var3[var6] = var10;
                var6 = 'user';
                var3[var6] = var8;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 19;
                var5 = var10[var5];
                var6 = var6.bind(var9)(var5);
                var5 = var6.getName;
                var2 = var2.channelId;
                var5 = var5.bind(var6)(var7, var2, var8);
                var2 = 'userNick';
                var3[var2] = var5;
                var2 = 'stream';
                var3[var2] = var4;
                var2 = var1.push;
                var2 = var2.bind(var1)(var3);
 948:
                return var1;
 950:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[13] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var7 = var7.bind(var1)();
    var8 = 22;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/calls/ChannelRTCParticipants.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var3['getEmbeddedActivityParticipantId'] = var6;
    var6 = function activityParticipantIdToApplicationId(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var4 = arg1;
            var2 = null;
            var1 = var4;
            if(!(var2 != var1)) { _fun0015_ip = 33; continue _fun0015 }
 12:
            var3 = var4.split;
            var2 = '-';
            var3 = var3.bind(var4)(var2);
            var2 = 1;
            var1 = var3[var2];
 33:
            return var1;
        }
    };
    var3['activityParticipantIdToApplicationId'] = var6;
    var3['sortKey'] = var5;
    var4 = function areParticipantsEqual(arg1, arg2) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var5 = arg1;
            var2 = var5[Symbol.iterator];
            var5 = var2().next;
            var12 = undefined;
            var3 = undefined;
            var4 = undefined;
            var6 = var5().value;
            var9 = var2;
            var9 = var9 === var12;
            var3 = var9;
            if(var9) { _fun0016_ip = 32; continue _fun0016 }
 29:
            var4 = var6;
 32:
            var4 = undefined;
            var6 = var3;
            if(var6) { _fun0016_ip = 60; continue _fun0016 }
 40:
            var5 = var5().value;
            var6 = var2;
            var6 = var6 === var12;
            var3 = var6;
            if(var6) { _fun0016_ip = 60; continue _fun0016 }
 57:
            var4 = var5;
 60:
            var8 = var4;
            var4 = var3;
            if(var4) { _fun0016_ip = 72; continue _fun0016 }
 69:
            var2.return();
 72:
            var10 = arg2;
            var5 = var10[Symbol.iterator];
            var10 = var5().next;
            var6 = undefined;
            var9 = undefined;
            var11 = var10().value;
            var13 = var5;
            var13 = var13 === var12;
            var6 = var13;
            if(var13) { _fun0016_ip = 102; continue _fun0016 }
 99:
            var9 = var11;
 102:
            var9 = undefined;
            var11 = var6;
            if(var11) { _fun0016_ip = 130; continue _fun0016 }
 110:
            var10 = var10().value;
            var11 = var5;
            var11 = var11 === var12;
            var6 = var11;
            if(var11) { _fun0016_ip = 130; continue _fun0016 }
 127:
            var9 = var10;
 130:
            var7 = var9;
            var9 = var6;
            if(var9) { _fun0016_ip = 142; continue _fun0016 }
 139:
            var5.return();
 142:
            var7 = var8 === var7;
            return var7;
 148:
            CatchBlockStart(arg_register=3);
            if(var6) { _fun0016_ip = 156; continue _fun0016 }
 153:
            var5.return();
 156:
            throw var4;
 158:
            CatchBlockStart(arg_register=0);
            if(var3) { _fun0016_ip = 166; continue _fun0016 }
 163:
            var2.return();
 166:
            throw var1;
        }
    };
    var3['areParticipantsEqual'] = var4;
    var3['ChannelRTCParticipantsIndexes'] = var2;
    return var1;
})();