// app/modules/stage_channels/StageChannelParticipants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var9;
    var1 = function sortKey(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.speaker;
            var4 = var2.role;
            var12 = var2.user;
            var11 = var2.userNick;
            var9 = var2.connectedOn;
            var3 = var2.voiceState;
            var5 = var2.type;
            var8 = '\x01';
            var7 = var8;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = '\x00';
case 2:
            var1 = _closure1_slot16;
            var1 = var1.STREAM;
            var6 = var8;
            if(!(var5 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = '\x00';
case 4:
            var10 = var3.selfMute;
            var1 = '\x00';
            var5 = var1;
            if(!var10) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var8;
case 6:
            var3 = var3.selfVideo;
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = var1;
case 8:
            var3 = null;
            var13 = var3 == var4;
            var10 = undefined;
            var1 = undefined;
            if(var13) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var4.position;
case 10:
            var3 = var3 != var1;
            var13 = 999;
            if(!var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var13 = var1;
case 12:
            var1 = global;
            var3 = var1.HermesInternal;
            var3 = var3.concat;
            var4 = '';
            var15 = var3.bind(var4)(var13);
            var14 = var15.padStart;
            var13 = 3;
            var3 = '0';
            var18 = var14.bind(var15)(var13, var3);
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 12;
            var2 = var14[var2];
            var2 = var13.bind(var10)(var2);
            var16 = var2.bind(var10)(var11, var12);
            var1 = var1.HermesInternal;
            var1 = var1.concat;
            var23 = var4;
            var22 = var7;
            var21 = var6;
            var20 = var5;
            var19 = var8;
            var17 = var9;
            var1 = var23[var1](var22, var21, var20, var19, var18, var17, var16, var15);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function requestToSpeakSortKey(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.user;
            var1 = var1.voiceState;
            var5 = var1.requestToSpeakTimestamp;
            var1 = null;
            if(!(var1 != var5)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var1 = global;
            var4 = var1.Date;
            var3 = var4.parse;
            var5 = var3.bind(var4)(var5);
            var4 = var2.id;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var1 = '';
            var1 = var3.bind(var1)(var5, var4);
            _fun0002_ip = 16; continue _fun0002;
case 14:
            var1 = var2.id;
case 16:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var2 = function isRequestedToSpeakAll(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 13;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            var1 = var1.RequestToSpeakStates;
            var1 = var1.REQUESTED_TO_SPEAK;
            var1 = var3 === var1;
            if(var1) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.RequestToSpeakStates;
            var2 = var2.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            var1 = var3 === var2;
case 17:
            return var1;
        }
    };
    var _closure1_slot19 = var2;
    var1 = function getParticipantIndex(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var7 = var1.speaker;
            var6 = var1.role;
            var9 = var1.rtsState;
            var5 = var1.blocked;
            var4 = var1.ignored;
            var3 = var1.isFriend;
            var1 = new Array(0);
            var8 = _closure1_slot19;
            var11 = undefined;
            var8 = var8.bind(var11)(var9);
            if(!var8) { _fun0004_ip = 17; continue _fun0004 }
case 19:
            var10 = var1.push;
            var8 = _closure1_slot15;
            var8 = var8.ALL_REQUESTED_TO_SPEAK;
            var8 = var10.bind(var1)(var8);
case 17:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 13;
            var8 = var12[var8];
            var8 = var10.bind(var11)(var8);
            var8 = var8.RequestToSpeakStates;
            var8 = var8.REQUESTED_TO_SPEAK;
            if(!(var9 === var8)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var9 = var1.push;
            var8 = _closure1_slot15;
            var8 = var8.REQUESTED_TO_SPEAK_ONLY;
            var8 = var9.bind(var1)(var8);
case 20:
            if(var7) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var7 = null;
            if(!(var7 == var6)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var8 = var1.push;
            var7 = _closure1_slot15;
            var7 = var7.NO_ROLE;
            var7 = var8.bind(var1)(var7);
            _fun0004_ip = 26; continue _fun0004;
case 24:
            var7 = var1.push;
            var6 = var6.id;
            var6 = var7.bind(var1)(var6);
case 26:
            var7 = var1.push;
            var6 = _closure1_slot15;
            var6 = var6.AUDIENCE;
            var6 = var7.bind(var1)(var6);
            _fun0004_ip = 27; continue _fun0004;
case 22:
            var7 = var1.push;
            var6 = _closure1_slot15;
            var6 = var6.SPEAKER;
            var6 = var7.bind(var1)(var6);
case 27:
            if(var5) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            if(!var4) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var5 = var1.push;
            var4 = _closure1_slot15;
            var4 = var4.IGNORED;
            var4 = var5.bind(var1)(var4);
            _fun0004_ip = 30; continue _fun0004;
case 28:
            var5 = var1.push;
            var4 = _closure1_slot15;
            var4 = var4.BLOCKED;
            var4 = var5.bind(var1)(var4);
case 30:
            if(!var3) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var3 = var1.push;
            var2 = _closure1_slot15;
            var2 = var2.FRIEND;
            var2 = var3.bind(var1)(var2);
case 32:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.getComparator;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var5 = {};
    var4 = 'SPEAKER';
    var5['SPEAKER'] = var4;
    var4 = 'AUDIENCE';
    var5['AUDIENCE'] = var4;
    var4 = 'NO_ROLE';
    var5['NO_ROLE'] = var4;
    var4 = 'ALL_REQUESTED_TO_SPEAK';
    var5['ALL_REQUESTED_TO_SPEAK'] = var4;
    var4 = 'REQUESTED_TO_SPEAK_ONLY';
    var5['REQUESTED_TO_SPEAK_ONLY'] = var4;
    var4 = 'BLOCKED';
    var5['BLOCKED'] = var4;
    var4 = 'IGNORED';
    var5['IGNORED'] = var4;
    var4 = 'FRIEND';
    var5['FRIEND'] = var4;
    var4 = 'SELECTED';
    var5['SELECTED'] = var4;
    var4 = 'MEDIA';
    var5['MEDIA'] = var4;
    var _closure1_slot15 = var5;
    var4 = {};
    var7 = 'VOICE';
    var4['VOICE'] = var7;
    var7 = 'STREAM';
    var4['STREAM'] = var7;
    var _closure1_slot16 = var4;
    var6 = function() {
        var4 = _closure1_slot4;
        var3 = function StageChannelParticipants(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arg1;
                var3 = this;
                var6 = _closure1_slot3;
                var4 = _closure2_slot0;
                var1 = undefined;
                var4 = var6.bind(var1)(var3, var4);
                var4 = {};
                var3['participants'] = var4;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 14;
                var8 = var7[var4];
                var8 = var6.bind(var1)(var8);
                var11 = var8.SecondaryIndexMap;
                var13 = _closure1_slot20;
                var12 = _closure1_slot17;
                var9 = var11.prototype;
                var9 = Object.create(var9, {constructor: {value: var11}});
                var14 = var9;
                var8 = new var14[var11](var13, var12, var11);
                var8 = var8 instanceof Object ? var8 : var9;
                var3['_participantsIndex'] = var8;
                var4 = var7[var4];
                var4 = var6.bind(var1)(var4);
                var8 = var4.SecondaryIndexMap;
                var12 = _closure1_slot18;
                var4 = var8.prototype;
                var6 = Object.create(var4, {constructor: {value: var8}});
                var13 = function() {
                    var1 = new Array(0);
                    return var1;
                };
                var14 = var6;
                var4 = new var14[var8](var13, var12, var11);
                var4 = var4 instanceof Object ? var4 : var6;
                var3['_requestToSpeakIndex'] = var4;
                var3['channelId'] = var5;
                var4 = _closure1_slot6;
                var2 = var4.getChannel;
                var5 = var2.bind(var4)(var5);
                var2 = null;
                var4 = var2 == var5;
                var2 = undefined;
                if(var4) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                var4 = var5.getGuildId;
                var2 = var4.bind(var5)();
case 34:
                var3['guildId'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = '_getParticipantsForUser';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg1;
                var10 = arg2;
                var2 = this;
                var1 = new Array(0);
                var7 = _closure1_slot11;
                var6 = var7.getVoiceStateForChannel;
                var4 = var2.channelId;
                var9 = var6.bind(var7)(var4, var5);
                var6 = null;
                if(!(var6 != var9)) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                var7 = _closure1_slot10;
                var4 = var7.getUser;
                var4 = var4.bind(var7)(var5);
                if(!(var6 != var4)) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                var7 = var6 != var10;
                var8 = null;
                if(!var7) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                var7 = 0;
                var8 = var10[var7];
case 40:
                var7 = var2.guildId;
                var10 = var6 != var7;
                var7 = null;
                if(!var10) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                var12 = _closure1_slot8;
                var11 = var12.getMember;
                var10 = var2.guildId;
                var7 = var11.bind(var12)(var10, var5);
case 42:
                var11 = var6 == var7;
                var10 = undefined;
                var12 = undefined;
                if(var11) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                var12 = var7.nick;
case 44:
                if(!(var6 == var12)) { _fun0006_ip = 26; continue _fun0006 }
case 23:
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var11 = 15;
                var11 = var14[var11];
                var15 = var13.bind(var10)(var11);
                var14 = var15.getName;
                var13 = var2.guildId;
                var11 = var2.channelId;
                var12 = var14.bind(var15)(var13, var11, var4);
case 26:
                var15 = {};
                var15['user'] = var4;
                var14 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 15;
                var11 = var13[var11];
                var17 = var14.bind(var10)(var11);
                var16 = var17.getName;
                var14 = var2.guildId;
                var11 = var2.channelId;
                var11 = var16.bind(var17)(var14, var11, var4);
                var15['userNick'] = var11;
                var15['nick'] = var12;
                var11 = _closure1_slot12;
                var11 = var11.bind(var10)(var9, var12);
                var15['comparator'] = var11;
                var15['voiceState'] = var9;
                var12 = _closure1_slot0;
                var11 = 16;
                var11 = var13[var11];
                var13 = var12.bind(var10)(var11);
                var12 = var13.getHighestHoistedRole;
                var11 = var2.guildId;
                var11 = var12.bind(var13)(var11, var5);
                var15['role'] = var11;
                var13 = _closure1_slot13;
                var12 = var13.isSpeaker;
                var11 = var2.channelId;
                var11 = var12.bind(var13)(var5, var11);
                var15['speaker'] = var11;
                var15['member'] = var7;
                var12 = _closure1_slot9;
                var11 = var12.isBlocked;
                var7 = var4.id;
                var7 = var11.bind(var12)(var7);
                var15['blocked'] = var7;
                var11 = var12.isIgnored;
                var7 = var4.id;
                var7 = var11.bind(var12)(var7);
                var15['ignored'] = var7;
                var11 = var12.isFriend;
                var7 = var4.id;
                var7 = var11.bind(var12)(var7);
                var15['isFriend'] = var7;
                var11 = var6 == var8;
                var7 = undefined;
                if(var11) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                var7 = var8.connectedOn;
case 46:
                if(!(var6 == var7)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                var8 = global;
                var11 = var8.Date;
                var8 = var11.now;
                var7 = var8.bind(var11)();
case 48:
                var15['connectedOn'] = var7;
                var7 = {};
                var20 = var7;
                var19 = var15;
                var8 = copyDataProperties(var20, var19);
                var8 = _closure1_slot16;
                var8 = var8.VOICE;
                var13 = 'type';
                var7[var13] = var8;
                var4 = var4.id;
                var14 = 'id';
                var7[var14] = var4;
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var11 = 13;
                var4 = var4[var11];
                var8 = var8.bind(var10)(var4);
                var4 = var8.getAudienceRequestToSpeakState;
                var4 = var4.bind(var8)(var9);
                var8 = 'rtsState';
                var7[var8] = var4;
                var4 = var1.push;
                var4 = var4.bind(var1)(var7);
                var9 = _closure1_slot5;
                var7 = var9.getStreamForUser;
                var4 = var2.guildId;
                var16 = var7.bind(var9)(var5, var4);
                if(!(var6 == var16)) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                var9 = _closure1_slot5;
                var7 = var9.getActiveStreamForUser;
                var4 = var2.guildId;
                var16 = var7.bind(var9)(var5, var4);
case 50:
                if(!(var6 != var16)) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                var7 = var16.channelId;
                var4 = var2.channelId;
                if(!(var7 === var4)) { _fun0006_ip = 52; continue _fun0006 }
case 54:
                var9 = _closure1_slot0;
                var4 = _closure1_slot2;
                var7 = 17;
                var7 = var4[var7];
                var12 = var9.bind(var10)(var7);
                var7 = var12.encodeStreamKey;
                var12 = var7.bind(var12)(var16);
                var7 = {};
                var20 = var7;
                var19 = var15;
                var15 = copyDataProperties(var20, var19);
                var7[var14] = var12;
                var12 = _closure1_slot16;
                var12 = var12.STREAM;
                var7[var13] = var12;
                var4 = var4[var11];
                var4 = var9.bind(var10)(var4);
                var4 = var4.RequestToSpeakStates;
                var4 = var4.NONE;
                var7[var8] = var4;
                var4 = var1.push;
                var4 = var4.bind(var1)(var7);
case 52:
                return var1;
case 38:
                var4 = var2.guildId;
                var4 = var6 != var4;
                if(!var4) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                var8 = _closure1_slot14;
                var7 = var8.isPublic;
                var6 = var2.channelId;
                var4 = var7.bind(var8)(var6);
case 55:
                if(!var4) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                var4 = _closure1_slot7;
                var3 = var4.requestMember;
                var2 = var2.guildId;
                var2 = var3.bind(var4)(var2, var5);
case 57:
                return var1;
case 36:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(9);
        var2[0] = var1;
        var1 = {};
        var6 = 'updateParticipant';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = arg1;
                var2 = this;
                var _closure3_slot0 = var2;
                var _closure3_slot1 = var4;
                var1 = var2.participants;
                var8 = var1[var4];
                var1 = var2._getParticipantsForUser;
                var3 = var1.bind(var2)(var4, var8);
                var6 = null;
                var1 = var6 != var8;
                if(var1) { _fun0007_ip = 59; continue _fun0007 }
case 18:
                var9 = var3.length;
                var7 = 0;
                var1 = var7 !== var9;
case 59:
                if(!var1) { _fun0007_ip = 60; continue _fun0007 }
case 2:
                if(!(var6 != var8)) { _fun0007_ip = 17; continue _fun0007 }
case 61:
                var7 = var8.forEach;
                var6 = function(arg1) {
                    var1 = arg1;
                    var2 = _closure3_slot0;
                    var5 = var2._participantsIndex;
                    var4 = var5.delete;
                    var3 = var1.id;
                    var3 = var4.bind(var5)(var3);
                    var3 = var2._requestToSpeakIndex;
                    var2 = var3.delete;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var6 = var7.bind(var8)(var6);
case 17:
                var6 = var3.forEach;
                var5 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var4 = arg1;
                        var2 = _closure3_slot0;
                        var5 = var2._participantsIndex;
                        var3 = var5.set;
                        var2 = var4.id;
                        var2 = var3.bind(var5)(var2, var4);
                        var3 = var4.id;
                        var2 = _closure3_slot1;
                        if(!(var3 === var2)) { _fun0008_ip = 39; continue _fun0008 }
case 62:
                        var5 = _closure1_slot19;
                        var3 = var4.rtsState;
                        var2 = undefined;
                        var2 = var5.bind(var2)(var3);
                        if(var2) { _fun0008_ip = 63; continue _fun0008 }
case 39:
                        var2 = _closure3_slot0;
                        var5 = var2._requestToSpeakIndex;
                        var3 = var5.delete;
                        var2 = _closure3_slot1;
                        var2 = var3.bind(var5)(var2);
                        _fun0008_ip = 64; continue _fun0008;
case 63:
                        var2 = _closure3_slot0;
                        var3 = var2._requestToSpeakIndex;
                        var2 = var3.set;
                        var1 = _closure3_slot1;
                        var1 = var2.bind(var3)(var1, var4);
case 64:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = var6.bind(var3)(var5);
                var2 = var2.participants;
                var2[var4] = var3;
                var1 = true;
case 60:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'rebuild';
        var1['key'] = var6;
        var6 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = this;
                var _closure3_slot0 = var4;
                var5 = _closure1_slot6;
                var3 = var5.getChannel;
                var2 = var4.channelId;
                var2 = var3.bind(var5)(var2);
                var3 = null;
                if(!(var3 != var2)) { _fun0009_ip = 35; continue _fun0009 }
case 65:
                var3 = var2.isGuildStageVoice;
                var3 = var3.bind(var2)();
                if(!var3) { _fun0009_ip = 35; continue _fun0009 }
case 66:
                var3 = global;
                var5 = var3.Set;
                var6 = var3.Object;
                var3 = var6.keys;
                var8 = _closure1_slot11;
                var7 = var8.getVoiceStatesForChannel;
                var2 = var2.id;
                var2 = var7.bind(var8)(var2);
                var9 = var3.bind(var6)(var2);
                var3 = var5.prototype;
                var3 = Object.create(var3, {constructor: {value: var5}});
                var10 = var3;
                var2 = new var10[var5](var9, var8);
                var3 = var2 instanceof Object ? var2 : var3;
                var5 = var4._participantsIndex;
                var2 = var5.clear;
                var2 = var2.bind(var5)();
                var5 = var4._requestToSpeakIndex;
                var2 = var5.clear;
                var2 = var2.bind(var5)();
                var2 = {};
                var4['participants'] = var2;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.updateParticipant;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = true;
                return var1;
case 35:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'version';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._participantsIndex;
            var1 = var1.version;
            return var1;
        };
        var1['get'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'size';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1._participantsIndex;
            var2 = var3.size;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'toArray';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var4 = var1._participantsIndex;
            var3 = var4.values;
            var2 = arg1;
            var1 = true;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'getParticipant';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = this;
                var3 = var1._participantsIndex;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0010_ip = 67; continue _fun0010 }
case 68:
                var1 = var2;
case 67:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'requestToSpeakVersion';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._requestToSpeakIndex;
            var1 = var1.version;
            return var1;
        };
        var1['get'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'getRequestToSpeakParticipants';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var4 = var1._requestToSpeakIndex;
            var3 = var4.values;
            var2 = undefined;
            var1 = true;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var5;
        var2[8] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var6 = var6.bind(var1)();
    var7 = 18;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/stage_channels/StageChannelParticipants.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['StageChannelParticipantNamedIndex'] = var5;
    var3['StageChannelParticipantTypes'] = var4;
    var3['isRequestedToSpeakAll'] = var2;
    return var1;
})();