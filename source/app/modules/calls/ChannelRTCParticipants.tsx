// app/modules/calls/ChannelRTCParticipants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var10;
    var6 = function getEmbeddedActivityParticipantId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.applicationId;
            var5 = var1.instanceId;
            var1 = null;
            if(!(var1 == var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'activity-';
            var1 = var2.bind(var1)(var6);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = 'activity-';
            var2 = '-';
            var1 = var4.bind(var3)(var6, var2, var5);
case 4:
            return var1;
        }
    };
    var _closure1_slot21 = var6;
    var5 = function sortKey(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = var1.type;
            var3 = _closure1_slot16;
            var3 = var3.ACTIVITY;
            if(!(var3 !== var4)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var3 = _closure1_slot16;
            var3 = var3.HIDDEN_STREAM;
            if(!(var3 !== var4)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var3 = _closure1_slot16;
            var3 = var3.STREAM;
            if(!(var3 !== var4)) { _fun0002_ip = 7; continue _fun0002 }
case 9:
            var3 = _closure1_slot16;
            var3 = var3.USER;
            if(!(var3 !== var4)) { _fun0002_ip = 10; continue _fun0002 }
case 4:
            var3 = undefined;
            return var3;
case 10:
            var4 = var1.voiceState;
            var3 = null;
            if(!(var3 != var4)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var4 = var4.selfVideo;
            var6 = '\x03';
            if(var4) { _fun0002_ip = 13; continue _fun0002 }
case 11:
            var4 = var1.voiceState;
            var3 = var3 != var4;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var3 = var4.selfStream;
case 14:
            var6 = '\x05';
            if(!var3) { _fun0002_ip = 13; continue _fun0002 }
case 16:
            var6 = '\x04';
case 13:
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
case 7:
            var3 = var1.userVideo;
            var6 = '\x03';
            var5 = var6;
            if(!var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var5 = '\x02';
case 17:
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
case 5:
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
    var7 = 'NOT_POPPED_OUT';
    var2['NOT_POPPED_OUT'] = var7;
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
            var5 = var4.Set;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var9 = var6;
            var5 = new var9[var5](var8);
            var5 = var5 instanceof Object ? var5 : var6;
            var3['guildRingingUsers'] = var5;
            var4 = var4.Set;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var9 = var5;
            var4 = new var9[var4](var8);
            var4 = var4 instanceof Object ? var4 : var5;
            var3['poppedOutParticipants'] = var4;
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
case 0:
                    var4 = arg1;
                    var1 = new Array(0);
                    var5 = var4.type;
                    var3 = _closure1_slot16;
                    var3 = var3.USER;
                    var3 = var5 === var3;
                    if(!var3) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var3 = var4.speaking;
case 19:
                    if(!var3) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var5 = var1.push;
                    var3 = _closure1_slot20;
                    var3 = var3.SPEAKING;
                    var3 = var5.bind(var1)(var3);
case 21:
                    var5 = var4.type;
                    var3 = _closure1_slot16;
                    var3 = var3.USER;
                    if(!(var5 === var3)) { _fun0003_ip = 23; continue _fun0003 }
case 10:
                    var3 = var4.voiceState;
                    var5 = null;
                    if(!(var5 != var3)) { _fun0003_ip = 23; continue _fun0003 }
case 12:
                    var3 = var3.selfVideo;
                    if(var3) { _fun0003_ip = 24; continue _fun0003 }
case 23:
                    var5 = _closure1_slot15;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    if(!var3) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var5 = var1.push;
                    var3 = _closure1_slot20;
                    var3 = var3.STREAM;
                    var3 = var5.bind(var1)(var3);
                    var5 = var4.type;
                    var3 = _closure1_slot16;
                    var3 = var3.HIDDEN_STREAM;
                    var3 = var5 === var3;
                    if(var3) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                    var6 = var4.streamId;
                    var5 = null;
                    var3 = var5 == var6;
case 27:
                    if(var3) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var3 = var4.isPoppedOut;
case 29:
                    if(var3) { _fun0003_ip = 25; continue _fun0003 }
case 31:
                    var5 = var1.push;
                    var3 = _closure1_slot20;
                    var3 = var3.FILTERED;
                    var3 = var5.bind(var1)(var3);
                    _fun0003_ip = 25; continue _fun0003;
case 24:
                    var5 = var1.push;
                    var3 = _closure1_slot20;
                    var3 = var3.VIDEO;
                    var3 = var5.bind(var1)(var3);
                    var3 = var4.localVideoDisabled;
                    if(var3) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var3 = var4.isPoppedOut;
case 32:
                    if(var3) { _fun0003_ip = 25; continue _fun0003 }
case 34:
                    var5 = var1.push;
                    var3 = _closure1_slot20;
                    var3 = var3.FILTERED;
                    var3 = var5.bind(var1)(var3);
case 25:
                    var5 = var4.type;
                    var3 = _closure1_slot16;
                    var3 = var3.ACTIVITY;
                    if(!(var5 === var3)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var5 = var1.push;
                    var3 = _closure1_slot20;
                    var3 = var3.ACTIVITY;
                    var3 = var5.bind(var1)(var3);
case 35:
                    var3 = 'isPoppedOut';
                    var3 = var3 in var4;
                    if(!var3) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                    var3 = var4.isPoppedOut;
case 37:
                    if(var3) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                    var3 = var1.push;
                    var2 = _closure1_slot20;
                    var2 = var2.NOT_POPPED_OUT;
                    var2 = var3.bind(var1)(var2);
case 39:
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
        var2 = new Array(15);
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
case 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var6 = _closure1_slot9;
                var5 = var6.getChannel;
                var4 = var2.channelId;
                var6 = var5.bind(var6)(var4);
                var5 = null;
                if(!(var5 != var6)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                var7 = var6.type;
                var4 = _closure1_slot18;
                var4 = var4.GUILD_TEXT;
                if(!(var7 !== var4)) { _fun0004_ip = 41; continue _fun0004 }
case 9:
                var8 = _closure1_slot8;
                var7 = var8.getCall;
                var4 = var2.channelId;
                var4 = var7.bind(var8)(var4);
                var2['call'] = var4;
                var4 = var6.isPrivate;
                var4 = var4.bind(var6)();
                if(!var4) { _fun0004_ip = 43; continue _fun0004 }
case 23:
                var4 = var2.call;
                if(!(var5 != var4)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                var4 = var2.call;
                var4 = var4.unavailable;
                if(var4) { _fun0004_ip = 44; continue _fun0004 }
case 43:
                var5 = global;
                var7 = var5.Set;
                var4 = var6.isGuildVocalOrThread;
                var4 = var4.bind(var6)();
                if(var4) { _fun0004_ip = 46; continue _fun0004 }
case 47:
                var4 = var6.recipients;
                _fun0004_ip = 48; continue _fun0004;
case 46:
                var9 = var5.Object;
                var8 = var9.keys;
                var11 = _closure1_slot14;
                var10 = var11.getVoiceStatesForChannel;
                var6 = var6.id;
                var6 = var10.bind(var11)(var6);
                var4 = var8.bind(var9)(var6);
case 48:
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
                if(!(var7 > var6)) { _fun0004_ip = 49; continue _fun0004 }
case 50:
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
case 49:
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
case 44:
                var1 = false;
                return var1;
case 41:
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
case 0:
                var1 = this;
                var3 = var1.participantByIndex;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                var1 = var2;
case 51:
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
case 0:
                var4 = arg1;
                var2 = this;
                var _closure3_slot0 = var2;
                var1 = var2.participants;
                var8 = var1[var4];
                var1 = '__EMBEDDED_ACTIVITIES__';
                if(!(var4 !== var1)) { _fun0006_ip = 8; continue _fun0006 }
case 20:
                var1 = var2._getParticipantsForUser;
                var3 = var1.bind(var2)(var4);
                _fun0006_ip = 53; continue _fun0006;
case 8:
                var1 = var2._getParticipantsForEmbeddedActivities;
                var3 = var1.bind(var2)();
case 53:
                var6 = null;
                var1 = var6 != var8;
                if(var1) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                var9 = var3.length;
                var7 = 0;
                var1 = var7 !== var9;
case 54:
                if(!var1) { _fun0006_ip = 14; continue _fun0006 }
case 10:
                if(!(var6 != var8)) { _fun0006_ip = 56; continue _fun0006 }
case 57:
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
case 56:
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
case 14:
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
case 0:
                var2 = arg1;
                var1 = this;
                var _closure3_slot0 = var1;
                var _closure3_slot1 = var2;
                var1 = var1.participants;
                var6 = var1[var2];
                var1 = null;
                var4 = var1 == var6;
                var2 = undefined;
                if(var4) { _fun0007_ip = 58; continue _fun0007 }
case 59:
                var5 = var6.reduce;
                var4 = function(arg1, arg2) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = arg1;
                        var10 = arg2;
                        var3 = var10.type;
                        var2 = _closure1_slot16;
                        var2 = var2.USER;
                        if(!(var3 !== var2)) { _fun0008_ip = 60; continue _fun0008 }
case 6:
                        return var1;
case 60:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 17;
                        var2 = var5[var2];
                        var5 = undefined;
                        var9 = var3.bind(var5)(var2);
                        var6 = var9.getIsSpeaking;
                        var3 = {};
                        var8 = _closure3_slot1;
                        var3['userId'] = var8;
                        var2 = true;
                        var3['checkIsMuted'] = var2;
                        var11 = var6.bind(var9)(var3);
                        var6 = _closure1_slot11;
                        var3 = var6.isSoundSharing;
                        var8 = var3.bind(var6)(var8);
                        var3 = _closure3_slot0;
                        var9 = var3.participantByIndex;
                        var6 = var9.get;
                        var3 = var10.id;
                        var3 = var6.bind(var9)(var3);
                        var6 = null;
                        var6 = var6 == var3;
                        if(var6) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                        var5 = var3.type;
case 61:
                        var4 = _closure1_slot16;
                        var4 = var4.USER;
                        if(!(var5 === var4)) { _fun0008_ip = 63; continue _fun0008 }
case 47:
                        var4 = var3.speaking;
                        if(!(var4 === var11)) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                        var3 = var3.soundsharing;
                        if(!(var3 !== var8)) { _fun0008_ip = 65; continue _fun0008 }
case 63:
                        if(!var11) { _fun0008_ip = 66; continue _fun0008 }
case 67:
                        var3 = _closure3_slot0;
                        var5 = var3.lastSpoke;
                        var4 = _closure3_slot1;
                        var3 = global;
                        var6 = var3.Date;
                        var3 = var6.now;
                        var3 = var3.bind(var6)();
                        var5[var4] = var3;
case 66:
                        var9 = _closure3_slot0;
                        var6 = var9.participantByIndex;
                        var5 = var6.set;
                        var4 = var10.id;
                        var3 = {};
                        var13 = var3;
                        var12 = var10;
                        var10 = copyDataProperties(var13, var12);
                        var10 = 'speaking';
                        var3[9] = var11;
                        var9 = var9.lastSpoke;
                        var7 = _closure3_slot1;
                        var9 = var9[var7];
                        var7 = 'lastSpoke';
                        var3[6] = var9;
                        var7 = 'soundsharing';
                        var3[6] = var8;
                        var3 = var5.bind(var6)(var4, var3);
                        var1 = true;
case 65:
                        return var1;
                    }
                };
                var3 = false;
                var2 = var5.bind(var6)(var4, var3);
case 58:
                var1 = var1 != var2;
                if(!var1) { _fun0007_ip = 55; continue _fun0007 }
case 68:
                var1 = var2;
case 55:
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
case 0:
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
                if(var4) { _fun0009_ip = 55; continue _fun0009 }
case 69:
                var5 = var6.reduce;
                var4 = function(arg1, arg2) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var1 = arg1;
                        var7 = arg2;
                        var3 = var7.type;
                        var2 = _closure1_slot16;
                        var2 = var2.STREAM;
                        if(!(var3 === var2)) { _fun0010_ip = 70; continue _fun0010 }
case 6:
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
                        var2[6] = var8;
                        var7 = _closure3_slot2;
                        var6 = 'maxFrameRate';
                        var2[5] = var7;
                        var2 = var4.bind(var5)(var3, var2);
                        var1 = true;
case 70:
                        return var1;
                    }
                };
                var3 = false;
                var2 = var5.bind(var6)(var4, var3);
case 55:
                var1 = var1 != var2;
                if(!var1) { _fun0009_ip = 4; continue _fun0009 }
case 71:
                var1 = var2;
case 4:
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
case 0:
                var3 = arg1;
                var1 = this;
                var2 = var1.guildRingingUsers;
                var1 = arg2;
                if(var1) { _fun0011_ip = 60; continue _fun0011 }
case 72:
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
                _fun0011_ip = 42; continue _fun0011;
case 60:
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
case 42:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'updateParticipantPoppedOut';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var2 = var1.poppedOutParticipants;
                var1 = arg2;
                if(var1) { _fun0012_ip = 60; continue _fun0012 }
case 72:
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
                _fun0012_ip = 42; continue _fun0012;
case 60:
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
case 42:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = '_getEmbeddedActivities';
        var1['key'] = var6;
        var6 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
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
                if(!(var4 != var2)) { _fun0013_ip = 15; continue _fun0013 }
case 73:
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
                var3[5] = var2;
                var2 = 1;
                var2 = var6 + var2;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.compositeInstanceId;
                    return var1;
                };
                var1 = var4.bind(var5)(var3, var2);
case 15:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
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
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
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
                    if(!(var2 == var8)) { _fun0014_ip = 74; continue _fun0014 }
case 75:
                    var8 = new Array(0);
case 74:
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
                    if(var5) { _fun0014_ip = 76; continue _fun0014 }
case 77:
                    var5 = var6.getGuildId;
                    var4 = var5.bind(var6)();
case 76:
                    var5 = var2 != var4;
                    var2 = null;
                    if(!var5) { _fun0014_ip = 78; continue _fun0014 }
case 79:
                    var2 = var4;
case 78:
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
        var2[13] = var1;
        var1 = {};
        var6 = '_getParticipantsForUser';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var17 = arg1;
                var2 = this;
                var1 = new Array(0);
                var5 = _closure1_slot12;
                var3 = var5.getUser;
                var10 = var3.bind(var5)(var17);
                var11 = null;
                if(!(var11 != var10)) { _fun0015_ip = 80; continue _fun0015 }
case 59:
                var6 = _closure1_slot14;
                var5 = var6.getVoiceStateForChannel;
                var3 = var2.channelId;
                var12 = var5.bind(var6)(var3, var17);
                var5 = var6.getVoicePlatformForChannel;
                var3 = var2.channelId;
                var7 = var5.bind(var6)(var3, var17);
                var6 = _closure1_slot9;
                var5 = var6.getChannel;
                var3 = var2.channelId;
                var5 = var5.bind(var6)(var3);
                var3 = var11 == var5;
                var8 = undefined;
                var9 = undefined;
                if(var3) { _fun0015_ip = 81; continue _fun0015 }
case 82:
                var3 = var5.getGuildId;
                var9 = var3.bind(var5)();
case 81:
                var5 = var2.call;
                var6 = var11 == var5;
                var3 = undefined;
                if(var6) { _fun0015_ip = 83; continue _fun0015 }
case 84:
                var6 = var5.ringing;
                var5 = var11 == var6;
                var3 = undefined;
                if(var5) { _fun0015_ip = 83; continue _fun0015 }
case 85:
                var5 = var6.includes;
                var3 = var5.bind(var6)(var17);
case 83:
                if(var3) { _fun0015_ip = 86; continue _fun0015 }
case 87:
                var6 = var2.guildRingingUsers;
                var5 = var6.has;
                var3 = var5.bind(var6)(var17);
case 86:
                var6 = var11 != var3;
                if(!var6) { _fun0015_ip = 88; continue _fun0015 }
case 89:
                var6 = var3;
case 88:
                var3 = var11 != var12;
                if(var3) { _fun0015_ip = 90; continue _fun0015 }
case 78:
                var3 = var6;
case 90:
                if(!var3) { _fun0015_ip = 91; continue _fun0015 }
case 92:
                var5 = {};
                var3 = _closure1_slot16;
                var3 = var3.USER;
                var5['type'] = var3;
                var13 = _closure1_slot13;
                var3 = var13.getUserStreamData;
                var20 = var3.bind(var13)(var17, var9);
                var21 = var5;
                var3 = copyDataProperties(var21, var20);
                var3 = 'user';
                var5[2] = var10;
                var13 = var10.id;
                var3 = 'id';
                var5[2] = var13;
                var3 = 'voiceState';
                var5[2] = var12;
                var3 = 'voicePlatform';
                var5[2] = var7;
                var7 = _closure1_slot0;
                var13 = _closure1_slot2;
                var3 = 17;
                var3 = var13[var3];
                var13 = var7.bind(var8)(var3);
                var7 = var13.getIsSpeaking;
                var3 = {};
                var3['userId'] = var17;
                var14 = true;
                var3['checkIsMuted'] = var14;
                var7 = var7.bind(var13)(var3);
                var3 = 'speaking';
                var5[2] = var7;
                var3 = var2.lastSpoke;
                var3 = var3[var17];
                var13 = var11 != var3;
                var7 = 0;
                if(!var13) { _fun0015_ip = 93; continue _fun0015 }
case 94:
                var7 = var3;
case 93:
                var3 = 'lastSpoke';
                var5[2] = var7;
                var7 = _closure1_slot11;
                var3 = var7.isSoundSharing;
                var7 = var3.bind(var7)(var17);
                var3 = 'soundsharing';
                var5[2] = var7;
                var3 = 'ringing';
                var5[2] = var6;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 19;
                var3 = var7[var3];
                var13 = var6.bind(var8)(var3);
                var6 = var13.getName;
                var3 = var2.channelId;
                var6 = var6.bind(var13)(var9, var3, var10);
                var3 = 'userNick';
                var5[2] = var6;
                var6 = _closure1_slot0;
                var3 = 20;
                var3 = var7[var3];
                var6 = var6.bind(var8)(var3);
                var3 = var6.getAvatarDecoration;
                var6 = var3.bind(var6)(var10, var9);
                var3 = 'userAvatarDecoration';
                var5[2] = var6;
                var7 = _closure1_slot10;
                var6 = var7.isLocalVideoDisabled;
                var3 = var10.id;
                var6 = var6.bind(var7)(var3);
                var3 = 'localVideoDisabled';
                var5[2] = var6;
                var7 = var2.poppedOutParticipants;
                var6 = var7.has;
                var3 = var10.id;
                var6 = var6.bind(var7)(var3);
                var3 = 'isPoppedOut';
                var5[2] = var6;
                var3 = var1.push;
                var3 = var3.bind(var1)(var5);
case 91:
                var5 = _closure1_slot6;
                var3 = var5.getStreamForUser;
                var6 = var3.bind(var5)(var17, var9);
                if(!(var11 == var6)) { _fun0015_ip = 95; continue _fun0015 }
case 96:
                var5 = _closure1_slot6;
                var3 = var5.getActiveStreamForUser;
                var6 = var3.bind(var5)(var17, var9);
case 95:
                if(!(var11 != var6)) { _fun0015_ip = 97; continue _fun0015 }
case 98:
                var5 = var6.channelId;
                var3 = var2.channelId;
                if(!(var5 === var3)) { _fun0015_ip = 97; continue _fun0015 }
case 99:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 21;
                var3 = var7[var3];
                var5 = var5.bind(var8)(var3);
                var3 = var5.encodeStreamKey;
                var5 = var3.bind(var5)(var6);
                var3 = var2.getParticipant;
                var14 = var3.bind(var2)(var5);
                var7 = var6.ownerId;
                var13 = _closure1_slot7;
                var3 = var13.getId;
                var3 = var3.bind(var13)();
                var13 = var7 === var3;
                if(!var13) { _fun0015_ip = 100; continue _fun0015 }
case 101:
                var15 = _closure1_slot6;
                var7 = var15.isSelfStreamHidden;
                var3 = var2.channelId;
                var13 = var7.bind(var15)(var3);
case 100:
                var3 = var11 == var14;
                var15 = undefined;
                if(var3) { _fun0015_ip = 102; continue _fun0015 }
case 103:
                var15 = var14.type;
case 102:
                var3 = _closure1_slot16;
                var3 = var3.STREAM;
                var7 = null;
                if(!(var15 === var3)) { _fun0015_ip = 104; continue _fun0015 }
case 105:
                var3 = {};
                var15 = var14.maxResolution;
                var16 = var11 != var15;
                var15 = undefined;
                if(!var16) { _fun0015_ip = 106; continue _fun0015 }
case 107:
                var16 = {};
                var20 = var14.maxResolution;
                var21 = var16;
                var18 = copyDataProperties(var21, var20);
                var15 = var16;
case 106:
                var3['maxResolution'] = var15;
                var14 = var14.maxFrameRate;
                var3['maxFrameRate'] = var14;
                var7 = var3;
case 104:
                var3 = {};
                var16 = _closure1_slot13;
                var15 = var16.getUserStreamData;
                var14 = _closure1_slot19;
                var14 = var14.STREAM;
                var20 = var15.bind(var16)(var17, var9, var14);
                var21 = var3;
                var14 = copyDataProperties(var21, var20);
                var21 = var3;
                var20 = var7;
                var7 = copyDataProperties(var21, var20);
                var7 = _closure1_slot16;
                if(var13) { _fun0015_ip = 108; continue _fun0015 }
case 109:
                var13 = var7.STREAM;
                _fun0015_ip = 110; continue _fun0015;
case 108:
                var13 = var7.HIDDEN_STREAM;
case 110:
                var7 = 'type';
                var3[6] = var13;
                var7 = 'id';
                var3[6] = var5;
                var13 = var11 == var12;
                var7 = undefined;
                if(var13) { _fun0015_ip = 111; continue _fun0015 }
case 112:
                var7 = var12.selfVideo;
case 111:
                var11 = var11 != var7;
                if(!var11) { _fun0015_ip = 113; continue _fun0015 }
case 114:
                var11 = var7;
case 113:
                var7 = 'userVideo';
                var3[6] = var11;
                var7 = 'user';
                var3[6] = var10;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var4 = 19;
                var4 = var11[var4];
                var8 = var7.bind(var8)(var4);
                var7 = var8.getName;
                var4 = var2.channelId;
                var7 = var7.bind(var8)(var9, var4, var10);
                var4 = 'userNick';
                var3[3] = var7;
                var4 = 'stream';
                var3[3] = var6;
                var4 = var2.poppedOutParticipants;
                var2 = var4.has;
                var4 = var2.bind(var4)(var5);
                var2 = 'isPoppedOut';
                var3[1] = var4;
                var2 = var1.push;
                var2 = var2.bind(var1)(var3);
case 97:
                return var1;
case 80:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[14] = var1;
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
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var4 = arg1;
            var2 = null;
            var1 = var4;
            if(!(var2 != var1)) { _fun0016_ip = 115; continue _fun0016 }
case 116:
            var3 = var4.split;
            var2 = '-';
            var3 = var3.bind(var4)(var2);
            var2 = 1;
            var1 = var3[var2];
case 115:
            return var1;
        }
    };
    var3['activityParticipantIdToApplicationId'] = var6;
    var3['sortKey'] = var5;
    var4 = function areParticipantsEqual(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
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
            if(var9) { _fun0017_ip = 20; continue _fun0017 }
case 117:
            var4 = var6;
case 20:
            var4 = undefined;
            var6 = var3;
            if(var6) { _fun0017_ip = 118; continue _fun0017 }
case 42:
            var5 = var5().value;
            var6 = var2;
            var6 = var6 === var12;
            var3 = var6;
            if(var6) { _fun0017_ip = 118; continue _fun0017 }
case 53:
            var4 = var5;
case 118:
            var8 = var4;
            var4 = var3;
            if(var4) { _fun0017_ip = 119; continue _fun0017 }
case 120:
            var2.return();
case 119:
            var10 = arg2;
            var5 = var10[Symbol.iterator];
            var10 = var5().next;
            var6 = undefined;
            var9 = undefined;
            var11 = var10().value;
            var13 = var5;
            var13 = var13 === var12;
            var6 = var13;
            if(var13) { _fun0017_ip = 121; continue _fun0017 }
case 56:
            var9 = var11;
case 121:
            var9 = undefined;
            var11 = var6;
            if(var11) { _fun0017_ip = 43; continue _fun0017 }
case 122:
            var10 = var10().value;
            var11 = var5;
            var11 = var11 === var12;
            var6 = var11;
            if(var11) { _fun0017_ip = 43; continue _fun0017 }
case 123:
            var9 = var10;
case 43:
            var7 = var9;
            var9 = var6;
            if(var9) { _fun0017_ip = 124; continue _fun0017 }
case 125:
            var5.return();
case 124:
            var7 = var8 === var7;
            return var7;
case 126:
            CatchBlockStart(arg_register=3);
            if(var6) { _fun0017_ip = 127; continue _fun0017 }
case 128:
            var5.return();
case 127:
            throw var4;
case 129:
            CatchBlockStart(arg_register=0);
            if(var3) { _fun0017_ip = 130; continue _fun0017 }
case 131:
            var2.return();
case 130:
            throw var1;
        }
    };
    var3['areParticipantsEqual'] = var4;
    var3['ChannelRTCParticipantsIndexes'] = var2;
    return var1;
})();