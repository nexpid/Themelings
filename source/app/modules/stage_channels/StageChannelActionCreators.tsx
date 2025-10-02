// app/modules/stage_channels/StageChannelActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var8;
    var5 = function audienceAckRequestToSpeak(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var8 = arg2;
            var7 = arguments[2];
            var3 = undefined;
            if(!(var7 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = false;
case 2:
            var6 = null;
            var1 = var6 == var5;
            var10 = undefined;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var5.getGuildId;
            var10 = var1.bind(var5)();
case 4:
            var2 = _closure1_slot1;
            var11 = _closure1_slot3;
            var1 = 4;
            var1 = var11[var1];
            var9 = var2.bind(var3)(var1);
            var2 = var6 != var10;
            var1 = 'This channel cannot be guildless.';
            var1 = var9.bind(var3)(var2, var1);
            var9 = _closure1_slot6;
            var2 = var9.getVoiceStateForChannel;
            var1 = var5.id;
            var13 = var2.bind(var9)(var1);
            var9 = _closure1_slot0;
            var1 = 8;
            var2 = var11[var1];
            var12 = var9.bind(var3)(var2);
            var2 = var12.getAudienceRequestToSpeakState;
            var2 = var2.bind(var12)(var13);
            var1 = var11[var1];
            var1 = var9.bind(var3)(var1);
            var1 = var1.RequestToSpeakStates;
            var1 = var1.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            var1 = var2 !== var1;
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var8;
case 6:
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var13 = _closure1_slot0;
            var14 = _closure1_slot3;
            var1 = 5;
            var1 = var14[var1];
            var11 = var13.bind(var3)(var1);
            var9 = var11.trackWithMetadata;
            var1 = _closure1_slot7;
            var2 = var1.PROMOTED_TO_SPEAKER;
            var1 = {};
            var12 = 6;
            var12 = var14[var12];
            var13 = var13.bind(var3)(var12);
            var12 = var13.getStageChannelMetadata;
            var15 = var12.bind(var13)(var5);
            var16 = var1;
            var12 = copyDataProperties(var16, var15);
            var1 = var9.bind(var11)(var2, var1);
case 8:
            var2 = _closure1_slot0;
            var9 = _closure1_slot3;
            var1 = 7;
            var1 = var9[var1];
            var1 = var2.bind(var3)(var1);
            var3 = var1.HTTP;
            var2 = var3.patch;
            var1 = {};
            var9 = _closure1_slot8;
            var4 = var9.UPDATE_VOICE_STATE;
            var4 = var4.bind(var9)(var10);
            var1['url'] = var4;
            var4 = {};
            var4['suppress'] = var8;
            var4['request_to_speak_timestamp'] = var6;
            var5 = var5.id;
            var4['channel_id'] = var5;
            if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = {};
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var6 = {};
            var6['silent'] = var7;
            var5 = var6;
case 12:
            var16 = var4;
            var15 = var5;
            var5 = copyDataProperties(var16, var15);
            var1['body'] = var4;
            var4 = false;
            var1['rejectWithError'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot9 = var5;
    var4 = function setUserSuppress(arg1, arg2, arg3) {
        var5 = arg1;
        var1 = var5.getGuildId;
        var8 = var1.bind(var5)();
        var2 = _closure1_slot1;
        var6 = _closure1_slot3;
        var1 = 4;
        var1 = var6[var1];
        var3 = undefined;
        var7 = var2.bind(var3)(var1);
        var1 = null;
        var2 = var1 != var8;
        var1 = 'This channel cannot be guildless.';
        var1 = var7.bind(var3)(var2, var1);
        var2 = _closure1_slot0;
        var1 = 7;
        var1 = var6[var1];
        var1 = var2.bind(var3)(var1);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var7 = _closure1_slot8;
        var6 = var7.UPDATE_VOICE_STATE;
        var4 = arg2;
        var4 = var6.bind(var7)(var8, var4);
        var1['url'] = var4;
        var4 = {};
        var6 = arg3;
        var4['suppress'] = var6;
        var5 = var5.id;
        var4['channel_id'] = var5;
        var1['body'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot10 = var4;
    var1 = function _startStage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    var10 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var2 = '';
                    if(!(var2 === var10)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var2 = undefined;
                    return var2;
case 15:
                    var4 = _closure1_slot5;
                    var2 = var4.getVoiceChannelId;
                    var4 = var2.bind(var4)();
                    var2 = var7.id;
                    if(!(var4 !== var2)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 14;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var5.bind(var2)(var4);
                    var2 = var4.connectToStage;
                    var2 = var2.bind(var4)(var7);
case 17:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 15;
                    var2 = var5[var2];
                    var6 = undefined;
                    var9 = var4.bind(var6)(var2);
                    var8 = var9.startStageInstance;
                    var14 = var7.id;
                    var12 = arg3;
                    var11 = arg4;
                    var15 = var9;
                    var13 = var10;
                    var2 = var15[var8](var14, var13, var12, var11, var10);
                    SaveGenerator(address=141);
case 19:
                    return var2;
case 20:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var5 = _closure1_slot9;
                    var4 = false;
                    var3 = true;
                    var3 = var5.bind(var6)(var7, var4, var3);
                    return var2;
case 21:
                    return var2;
case 13:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function _editStage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var6 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 17; continue _fun0003 }
case 23:
                    var2 = '';
                    if(!(var2 === var6)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var2 = undefined;
                    return var2;
case 24:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.updateStageInstance;
                    var2 = arg1;
                    var3 = var2.id;
                    var2 = arg3;
                    var2 = var4.bind(var5)(var3, var6, var2);
                    SaveGenerator(address=76);
case 26:
                    return var2;
case 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    return var2;
case 28:
                    return var2;
case 17:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function _endStage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 15;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.endStageInstance;
                    var2 = arg1;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=55);
case 32:
                    return var2;
case 18:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    return var3;
case 33:
                    return var2;
case 30:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.AnalyticEvents;
    var _closure1_slot7 = var9;
    var6 = var6.Endpoints;
    var _closure1_slot8 = var6;
    var6 = 16;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/stage_channels/StageChannelActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function toggleRequestToSpeak(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var7 = arg2;
            var1 = var5.getGuildId;
            var9 = var1.bind(var5)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 4;
            var1 = var3[var1];
            var3 = undefined;
            var8 = var2.bind(var3)(var1);
            var6 = null;
            var2 = var6 != var9;
            var1 = 'This channel cannot be guildless.';
            var1 = var8.bind(var3)(var2, var1);
            if(!var7) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var12 = _closure1_slot0;
            var13 = _closure1_slot3;
            var1 = 5;
            var1 = var13[var1];
            var10 = var12.bind(var3)(var1);
            var8 = var10.trackWithMetadata;
            var1 = _closure1_slot7;
            var2 = var1.REQUEST_TO_SPEAK_INITIATED;
            var1 = {};
            var11 = 6;
            var11 = var13[var11];
            var12 = var12.bind(var3)(var11);
            var11 = var12.getStageChannelMetadata;
            var14 = var11.bind(var12)(var5);
            var15 = var1;
            var11 = copyDataProperties(var15, var14);
            var1 = var8.bind(var10)(var2, var1);
case 35:
            var2 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 7;
            var1 = var8[var1];
            var1 = var2.bind(var3)(var1);
            var3 = var1.HTTP;
            var2 = var3.patch;
            var1 = {};
            var8 = _closure1_slot8;
            var4 = var8.UPDATE_VOICE_STATE;
            var4 = var4.bind(var8)(var9);
            var1['url'] = var4;
            var4 = {};
            var6 = null;
            if(!var7) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var7 = global;
            var7 = var7.Date;
            var8 = var7.prototype;
            var8 = Object.create(var8, {constructor: {value: var7}});
            var16 = var8;
            var7 = new var16[var7](var15);
            var8 = var7 instanceof Object ? var7 : var8;
            var7 = var8.toISOString;
            var6 = var7.bind(var8)();
case 37:
            var4['request_to_speak_timestamp'] = var6;
            var5 = var5.id;
            var4['channel_id'] = var5;
            var1['body'] = var4;
            var4 = false;
            var1['rejectWithError'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['toggleRequestToSpeak'] = var6;
    var6 = function inviteUserToStage(arg1, arg2) {
        var6 = arg1;
        var1 = var6.getGuildId;
        var8 = var1.bind(var6)();
        var2 = _closure1_slot1;
        var5 = _closure1_slot3;
        var1 = 4;
        var1 = var5[var1];
        var3 = undefined;
        var7 = var2.bind(var3)(var1);
        var1 = null;
        var2 = var1 != var8;
        var1 = 'This channel cannot be guildless.';
        var1 = var7.bind(var3)(var2, var1);
        var2 = _closure1_slot0;
        var1 = 7;
        var1 = var5[var1];
        var1 = var2.bind(var3)(var1);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var7 = _closure1_slot8;
        var5 = var7.UPDATE_VOICE_STATE;
        var4 = arg2;
        var4 = var5.bind(var7)(var8, var4);
        var1['url'] = var4;
        var5 = {};
        var4 = false;
        var5['suppress'] = var4;
        var7 = global;
        var7 = var7.Date;
        var8 = var7.prototype;
        var8 = Object.create(var8, {constructor: {value: var7}});
        var11 = var8;
        var7 = new var11[var7](var10);
        var8 = var7 instanceof Object ? var7 : var8;
        var7 = var8.toISOString;
        var7 = var7.bind(var8)();
        var5['request_to_speak_timestamp'] = var7;
        var6 = var6.id;
        var5['channel_id'] = var6;
        var1['body'] = var5;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['inviteUserToStage'] = var6;
    var3['audienceAckRequestToSpeak'] = var5;
    var5 = function moveSelfToAudience(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var2 = var1 == var4;
            var3 = undefined;
            var7 = undefined;
            if(var2) { _fun0006_ip = 39; continue _fun0006 }
case 14:
            var2 = var4.getGuildId;
            var7 = var2.bind(var4)();
case 39:
            var8 = _closure1_slot1;
            var6 = _closure1_slot3;
            var2 = 4;
            var2 = var6[var2];
            var8 = var8.bind(var3)(var2);
            var2 = var1 != var7;
            var1 = 'This channel cannot be guildless.';
            var1 = var8.bind(var3)(var2, var1);
            var2 = _closure1_slot0;
            var1 = 7;
            var1 = var6[var1];
            var1 = var2.bind(var3)(var1);
            var3 = var1.HTTP;
            var2 = var3.patch;
            var1 = {};
            var6 = _closure1_slot8;
            var5 = var6.UPDATE_VOICE_STATE;
            var5 = var5.bind(var6)(var7);
            var1['url'] = var5;
            var5 = {'suppress': true, 'channel_id': null, 'self_video': false, 'self_stream': false};
            var4 = var4.id;
            var5['channel_id'] = var4;
            var4 = false;
            var1['body'] = var5;
            var1['rejectWithError'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['moveSelfToAudience'] = var5;
    var3['setUserSuppress'] = var4;
    var4 = function moveUserToAudience(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var1 = null;
            if(!(var1 != var4)) { _fun0007_ip = 14; continue _fun0007 }
case 40:
            if(!(var1 == var5)) { _fun0007_ip = 41; continue _fun0007 }
case 14:
            var2 = undefined;
            return var2;
case 41:
            var2 = var4.getGuildId;
            var8 = var2.bind(var4)();
            var9 = _closure1_slot1;
            var7 = _closure1_slot3;
            var2 = 4;
            var2 = var7[var2];
            var3 = undefined;
            var9 = var9.bind(var3)(var2);
            var2 = var1 != var8;
            var1 = 'This channel cannot be guildless.';
            var1 = var9.bind(var3)(var2, var1);
            var9 = _closure1_slot10;
            var2 = var5.id;
            var1 = true;
            var1 = var9.bind(var3)(var4, var2, var1);
            var2 = _closure1_slot0;
            var1 = 7;
            var1 = var7[var1];
            var1 = var2.bind(var3)(var1);
            var3 = var1.HTTP;
            var2 = var3.patch;
            var1 = {};
            var7 = _closure1_slot8;
            var6 = var7.UPDATE_VOICE_STATE;
            var5 = var5.id;
            var5 = var6.bind(var7)(var8, var5);
            var1['url'] = var5;
            var5 = {'suppress': true, 'channel_id': null, 'self_video': false, 'self_stream': false};
            var4 = var4.id;
            var5['channel_id'] = var4;
            var4 = false;
            var1['body'] = var5;
            var1['rejectWithError'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['moveUserToAudience'] = var4;
    var4 = function removeUserFromChannel(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var4 = arg2;
            var6 = null;
            var3 = var6 == var4;
            var1 = undefined;
            var5 = undefined;
            if(var3) { _fun0008_ip = 15; continue _fun0008 }
case 42:
            var3 = var4.getGuildId;
            var5 = var3.bind(var4)();
case 15:
            var3 = var6 != var5;
            if(!var3) { _fun0008_ip = 43; continue _fun0008 }
case 44:
            var3 = var6 != var2;
case 43:
            if(!var3) { _fun0008_ip = 45; continue _fun0008 }
case 46:
            var4 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 9;
            var3 = var7[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.setChannel;
            var2 = var2.id;
            var2 = var3.bind(var4)(var5, var2, var6);
case 45:
            return var1;
        }
    };
    var3['removeUserFromChannel'] = var4;
    var4 = function setEveryoneRolePermissionAllowed(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var8 = arg2;
            var1 = var2.getGuildId;
            var6 = var1.bind(var2)();
            var5 = _closure1_slot1;
            var9 = _closure1_slot3;
            var1 = 4;
            var4 = var9[var1];
            var1 = undefined;
            var7 = var5.bind(var1)(var4);
            var4 = null;
            var5 = var4 != var6;
            var4 = 'Channel cannot be guildless';
            var4 = var7.bind(var1)(var5, var4);
            var4 = var2.permissionOverwrites;
            var13 = var4[var6];
            var5 = {};
            var5['id'] = var6;
            var7 = _closure1_slot0;
            var6 = 10;
            var6 = var9[var6];
            var6 = var7.bind(var1)(var6);
            var6 = var6.PermissionOverwriteType;
            var6 = var6.ROLE;
            var5['type'] = var6;
            var7 = _closure1_slot2;
            var6 = 11;
            var10 = var9[var6];
            var10 = var7.bind(var1)(var10);
            var10 = var10.NONE;
            var5['allow'] = var10;
            var6 = var9[var6];
            var6 = var7.bind(var1)(var6);
            var6 = var6.NONE;
            var5['deny'] = var6;
            var14 = var5;
            var4 = copyDataProperties(var14, var13);
            var6 = _closure1_slot2;
            var7 = _closure1_slot3;
            var4 = 12;
            var9 = var7[var4];
            var11 = var6.bind(var1)(var9);
            var9 = arg3;
            if(var9) { _fun0009_ip = 47; continue _fun0009 }
case 48:
            var10 = var11.remove;
            var9 = var5.allow;
            var9 = var10.bind(var11)(var9, var8);
            var5['allow'] = var9;
            var9 = var7[var4];
            var12 = var6.bind(var1)(var9);
            var10 = var12.add;
            var9 = var5.deny;
            var9 = var10.bind(var12)(var9, var8);
            var5['deny'] = var9;
            _fun0009_ip = 49; continue _fun0009;
case 47:
            var10 = var11.add;
            var9 = var5.allow;
            var9 = var10.bind(var11)(var9, var8);
            var5['allow'] = var9;
            var4 = var7[var4];
            var7 = var6.bind(var1)(var4);
            var6 = var7.remove;
            var4 = var5.deny;
            var4 = var6.bind(var7)(var4, var8);
            var5['deny'] = var4;
case 49:
            var4 = _closure1_slot1;
            var6 = _closure1_slot3;
            var3 = 13;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.updatePermissionOverwrite;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        }
    };
    var3['setEveryoneRolePermissionAllowed'] = var4;
    var4 = function startStage() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['startStage'] = var4;
    var4 = function editStage() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['editStage'] = var4;
    var2 = function endStage() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['endStage'] = var2;
    return var1;
})();