// app/actions/ActivitiesActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.Endpoints;
    var _closure1_slot5 = var7;
    var7 = var2.ActivityTypes;
    var _closure1_slot6 = var7;
    var7 = var2.AnalyticEvents;
    var _closure1_slot7 = var7;
    var2 = var2.LoggingInviteTypes;
    var _closure1_slot8 = var2;
    var2 = {};
    var7 = function updateActivity(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var16 = var3.applicationId;
            var _closure2_slot0 = var16;
            var12 = var3.distributor;
            var _closure2_slot1 = var12;
            var13 = var3.shareActivity;
            var15 = var3.token;
            var1 = undefined;
            if(!(var15 === var1)) { _fun0001_ip = 44; continue _fun0001 }
 42:
            var15 = null;
 44:
            var14 = var3.duration;
            if(!(var14 === var1)) { _fun0001_ip = 55; continue _fun0001 }
 53:
            var14 = 0;
 55:
            var _closure2_slot2 = var14;
            var11 = var3.closed;
            if(!(var11 === var1)) { _fun0001_ip = 71; continue _fun0001 }
 69:
            var11 = false;
 71:
            var10 = var3.exePath;
            if(!(var10 === var1)) { _fun0001_ip = 83; continue _fun0001 }
 81:
            var10 = null;
 83:
            var9 = var3.voiceChannelId;
            if(!(var9 === var1)) { _fun0001_ip = 95; continue _fun0001 }
 93:
            var9 = null;
 95:
            var8 = var3.sessionId;
            if(!(var8 === var1)) { _fun0001_ip = 107; continue _fun0001 }
 105:
            var8 = null;
 107:
            var7 = var3.mediaSessionId;
            if(!(var7 === var1)) { _fun0001_ip = 119; continue _fun0001 }
 117:
            var7 = null;
 119:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 3;
            var3 = var5[var3];
            var17 = var4.bind(var1)(var3);
            var4 = var17.wait;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'ACTIVITY_UPDATE_START';
                var1['type'] = var4;
                var5 = _closure2_slot0;
                var1['applicationId'] = var5;
                var5 = _closure2_slot2;
                var1['duration'] = var5;
                var4 = _closure2_slot1;
                var1['distributor'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var17)(var3);
            var4 = _closure1_slot0;
            var3 = 4;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var5 = var3.HTTP;
            var4 = var5.post;
            var3 = {'url': null, 'body': null, 'retries': 1, 'oldFormErrors': true, 'rejectWithError': true};
            var6 = _closure1_slot5;
            var6 = var6.ACTIVITIES;
            var3['url'] = var6;
            var6 = {};
            var6['application_id'] = var16;
            var6['token'] = var15;
            var6['duration'] = var14;
            var6['share_activity'] = var13;
            var6['distributor'] = var12;
            var6['closed'] = var11;
            var6['exePath'] = var10;
            var6['voice_channel_id'] = var9;
            var6['session_id'] = var8;
            var6['media_session_id'] = var7;
            var3['body'] = var6;
            var5 = var4.bind(var5)(var3);
            var4 = var5.then;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.body;
                var6 = var1.token;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'ACTIVITY_UPDATE_SUCCESS';
                var2['type'] = var5;
                var7 = _closure2_slot0;
                var2['applicationId'] = var7;
                var2['token'] = var6;
                var6 = _closure2_slot2;
                var2['duration'] = var6;
                var5 = _closure2_slot1;
                var2['distributor'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.catch;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'ACTIVITY_UPDATE_FAIL';
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var2['applicationId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['updateActivity'] = var7;
    var7 = function sendActivityInvite(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var5 = var2.channelId;
            var10 = var2.type;
            var9 = var2.activity;
            var _closure2_slot0 = var9;
            var11 = var2.content;
            var2 = var2.location;
            var _closure2_slot1 = var2;
            var3 = _closure1_slot4;
            var2 = var3.getChannel;
            var2 = var2.bind(var3)(var5);
            var _closure2_slot2 = var2;
            var3 = null;
            if(!(var3 != var2)) { _fun0002_ip = 205; continue _fun0002 }
 69:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var5 = 5;
            var5 = var6[var5];
            var6 = undefined;
            var8 = var7.bind(var6)(var5);
            var7 = var8.parse;
            var12 = var3 != var11;
            var5 = '';
            if(!var12) { _fun0002_ip = 111; continue _fun0002 }
 108:
            var5 = var11;
 111:
            var15 = var7.bind(var8)(var2, var5);
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 6;
            var4 = var7[var4];
            var7 = var5.bind(var6)(var4);
            var6 = var7.sendMessage;
            var16 = var2.id;
            var4 = {};
            var2 = {};
            var2['type'] = var10;
            var2['activity'] = var9;
            var4['activityAction'] = var2;
            var14 = false;
            var17 = var7;
            var13 = var4;
            var5 = var17[var6](var16, var15, var14, var13, var12);
            var4 = var5.then;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var7 = arg1;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.trackWithMetadata;
                    var1 = _closure1_slot7;
                    var3 = var1.INVITE_SENT;
                    var2 = {};
                    var6 = _closure2_slot1;
                    var2['location'] = var6;
                    var6 = _closure2_slot0;
                    var9 = var6.type;
                    var6 = _closure1_slot6;
                    var6 = var6.LISTENING;
                    if(!(var9 !== var6)) { _fun0003_ip = 92; continue _fun0003 }
 80:
                    var6 = _closure1_slot8;
                    var6 = var6.APPLICATION;
                    _fun0003_ip = 102; continue _fun0003;
 92:
                    var8 = _closure1_slot8;
                    var6 = var8.SPOTIFY;
 102:
                    var2['invite_type'] = var6;
                    var6 = _closure2_slot0;
                    var6 = var6.application_id;
                    var2['application_id'] = var6;
                    var6 = _closure2_slot2;
                    var8 = var6.getGuildId;
                    var8 = var8.bind(var6)();
                    var2['guild_id'] = var8;
                    var6 = var6.id;
                    var2['channel_id'] = var6;
                    var6 = null;
                    var8 = var6 != var7;
                    if(!var8) { _fun0003_ip = 168; continue _fun0003 }
 158:
                    var7 = var7.body;
                    var6 = var7.id;
 168:
                    var2['message_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = global;
                    var3 = var2.Promise;
                    var2 = var3.resolve;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var1 = function(arg1) {
                var1 = global;
                var3 = var1.Promise;
                var2 = var3.reject;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var4.bind(var5)(var2, var1);
            return var1;
 205:
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var2['sendActivityInvite'] = var7;
    var7 = function sendActivityInviteUser(arg1) {
        var2 = arg1;
        var3 = this;
        var _closure2_slot0 = var3;
        var4 = var2.userId;
        var3 = var2.type;
        var _closure2_slot1 = var3;
        var3 = var2.activity;
        var _closure2_slot2 = var3;
        var3 = var2.content;
        var _closure2_slot3 = var3;
        var2 = var2.location;
        var _closure2_slot4 = var2;
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 8;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var2 = var3.ensurePrivateChannel;
        var3 = var2.bind(var3)(var4);
        var2 = var3.then;
        var1 = function(arg1) {
            var3 = _closure2_slot0;
            var2 = var3.sendActivityInvite;
            var1 = {};
            var5 = arg1;
            var1['channelId'] = var5;
            var5 = _closure2_slot1;
            var1['type'] = var5;
            var5 = _closure2_slot2;
            var1['activity'] = var5;
            var5 = _closure2_slot3;
            var1['content'] = var5;
            var4 = _closure2_slot4;
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['sendActivityInviteUser'] = var7;
    var7 = function getJoinSecret(arg1, arg2, arg3, arg4, arg5) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var2 = arg4;
        var _closure2_slot3 = var2;
        var2 = arg5;
        var _closure2_slot4 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 173; continue _fun0004 }
 10:
                    var5 = {};
                    var2 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0004_ip = 35; continue _fun0004 }
 25:
                    var2 = _closure2_slot3;
                    var5['channel_id'] = var2;
 35:
                    var2 = _closure2_slot4;
                    if(!(var3 != var2)) { _fun0004_ip = 53; continue _fun0004 }
 43:
                    var2 = _closure2_slot4;
                    var5['message_id'] = var2;
 53:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var10 = _closure1_slot5;
                    var9 = var10.USER_ACTIVITY_JOIN;
                    var8 = _closure2_slot0;
                    var7 = _closure2_slot1;
                    var6 = _closure2_slot2;
                    var6 = var9.bind(var10)(var8, var7, var6);
                    var2['url'] = var6;
                    var6 = 3;
                    var2['retries'] = var6;
                    var2['query'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=150);
 148:
                    return var2;
 150:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 170; continue _fun0004 }
 156:
                    var3 = var2.body;
                    var3 = var3.secret;
                    return var3;
 170:
                    return var2;
 173:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['getJoinSecret'] = var7;
    var4 = function subscribeActivities(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 139; continue _fun0005 }
 10:
                    var4 = _closure2_slot0;
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var6 = var1.userId;
                        var5 = var1.applicationId;
                        var4 = var1.partyId;
                        var3 = var1.messageId;
                        var2 = var1.channelId;
                        var1 = {};
                        var1['user_id'] = var6;
                        var1['application_id'] = var5;
                        var1['party_id'] = var4;
                        var1['message_id'] = var3;
                        var1['channel_id'] = var2;
                        return var1;
                    };
                    var6 = var3.bind(var4)(var2);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot5;
                    var5 = var5.USER_ACTIVITY_SUBSCRIBE;
                    var2['url'] = var5;
                    var5 = {};
                    var5['subscriptions'] = var6;
                    var2['body'] = var5;
                    var5 = 1;
                    var2['retries'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=122);
 120:
                    return var2;
 122:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 136; continue _fun0005 }
 128:
                    var3 = var2.body;
                    return var3;
 136:
                    return var2;
 139:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['subscribeActivities'] = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/ActivitiesActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();