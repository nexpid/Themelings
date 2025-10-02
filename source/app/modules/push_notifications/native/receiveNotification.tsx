// app/modules/push_notifications/native/receiveNotification.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = function onStageConnectionError() {
        var6 = _closure1_slot1;
        var7 = _closure1_slot3;
        var1 = 9;
        var2 = var7[var1];
        var1 = undefined;
        var4 = var6.bind(var1)(var2);
        var3 = var4.open;
        var2 = {};
        var8 = 'STAGE_DISCOVERY_CONNECTION_ERROR_GENERIC';
        var2['key'] = var8;
        var10 = _closure1_slot0;
        var5 = 10;
        var8 = var7[var5];
        var8 = var10.bind(var1)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var5 = var7[var5];
        var5 = var10.bind(var1)(var5);
        var5 = var5.t;
        var5 = var5.ah3RLi;
        var5 = var8.bind(var9)(var5);
        var2['content'] = var5;
        var5 = 11;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var2['icon'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function waitForConnection() {
        var1 = global;
        var3 = var1.Promise;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var4 = function(arg1) {
            var3 = _closure1_slot5;
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function _connectToStage() {
        var1 = undefined;
        var4 = _closure1_slot18;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function _connectToStage2() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var6 = arg1;
                    var5 = arg2;
                    var2 = _closure1_slot16;
                    var3 = undefined;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=33);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7: // try_start_0
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var8 = 12;
                    var7 = var7[var8];
                    var10 = var9.bind(var3)(var7);
                    var9 = var10.connectOrLurkStage;
                    var7 = var6;
                    var6 = var5;
                    var5 = true;
                    var5 = var9.bind(var10)(var7, var6, var5);
                    SaveGenerator(address=84);
case 8:
                    return var5;
case 9:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var6 = var6[var8];
                    var8 = var7.bind(var3)(var6);
                    var7 = var8.navigateToStage;
                    var6 = null;
                    var6 = var7.bind(var8)(var5, var6);
case 12: // try_end0
                    _fun0001_ip = 13; continue _fun0001;
case 10:
                    return var5;
case 14: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot15;
                    var4 = var4.bind(var3)();
case 13:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot18 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function _handleStageNotification() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 15; continue _fun0002 }
case 3:
                    var5 = _closure1_slot17;
                    var4 = var2.guild_id;
                    var2 = var2.channel_id;
                    var3 = undefined;
                    var2 = var5.bind(var3)(var4, var2);
                    SaveGenerator(address=39);
case 16:
                    return var2;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    return var3;
case 17:
                    return var2;
case 15:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot19 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function _handleGuildEventNotification() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var5 = var2.guild_scheduled_event_entity_type;
                    var4 = _closure1_slot13;
                    var4 = var4.STAGE_INSTANCE;
                    if(!(var4 !== var5)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var4 = _closure1_slot13;
                    var4 = var4.VOICE;
                    if(!(var4 !== var5)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var4 = _closure1_slot13;
                    var4 = var4.EXTERNAL;
                    if(!(var4 === var5)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var7 = var2.guild_id;
                    var8 = var2.guild_scheduled_event_id;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var4 = 14;
                    var4 = var5[var4];
                    var5 = undefined;
                    var6 = var6.bind(var5)(var4);
                    var4 = var6.transitionToGuild;
                    var4 = var4.bind(var6)(var7);
                    var4 = _closure1_slot16;
                    var4 = var4.bind(var5)();
                    SaveGenerator(address=131);
case 27:
                    return var4;
case 28:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var7 = _closure1_slot6;
                    var6 = var7.getGuildScheduledEvent;
                    var9 = var6.bind(var7)(var8);
                    var6 = null;
                    if(!(var6 != var9)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var6 = 15;
                    var6 = var8[var6];
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.openGuildEventDetails;
                    var6 = {};
                    var10 = var9.id;
                    var6['eventId'] = var10;
                    var6['event'] = var9;
                    var6 = var7.bind(var8)(var6);
case 25:
                    var6 = undefined;
                    return var6;
case 31:
                    return var5;
case 29:
                    return var4;
case 23:
                    var7 = var2.channel_id;
                    var4 = null;
                    if(!(var4 != var7)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                    var4 = _closure1_slot16;
                    var8 = undefined;
                    var5 = var4.bind(var8)();
                    SaveGenerator(address=242);
case 35:
                    return var5;
case 36:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var4 = 13;
                    var4 = var9[var4];
                    var6 = var6.bind(var8)(var4);
                    var4 = var6.selectVoiceChannel;
                    var4 = var4.bind(var6)(var7);
                    var4 = undefined;
                    _fun0003_ip = 39; continue _fun0003;
case 37:
                    return var5;
case 33:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var5 = 9;
                    var6 = var11[var5];
                    var5 = undefined;
                    var8 = var10.bind(var5)(var6);
                    var7 = var8.open;
                    var6 = {};
                    var9 = 'VOICE_CONNECTION_ERROR_GENERIC';
                    var6['key'] = var9;
                    var14 = _closure1_slot0;
                    var9 = 10;
                    var12 = var11[var9];
                    var12 = var14.bind(var5)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var9 = var11[var9];
                    var9 = var14.bind(var5)(var9);
                    var9 = var9.t;
                    var9 = var9.S69lJS;
                    var9 = var12.bind(var13)(var9);
                    var6['content'] = var9;
                    var9 = 11;
                    var9 = var11[var9];
                    var9 = var10.bind(var5)(var9);
                    var6['icon'] = var9;
                    var6 = var7.bind(var8)(var6);
                    var4 = undefined;
case 39:
                    return var4;
case 21:
                    var6 = var2.channel_id;
                    var4 = null;
                    if(!(var4 != var6)) { _fun0003_ip = 40; continue _fun0003 }
case 41:
                    var5 = _closure1_slot17;
                    var4 = var2.guild_id;
                    var2 = undefined;
                    var4 = var5.bind(var2)(var4, var6);
                    SaveGenerator(address=444);
case 42:
                    return var4;
case 43:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 44; continue _fun0003 }
case 45:
                    var2 = undefined;
                    _fun0003_ip = 46; continue _fun0003;
case 44:
                    return var4;
case 40:
                    var4 = _closure1_slot15;
                    var3 = undefined;
                    var4 = var4.bind(var3)();
                    var2 = undefined;
case 46:
                    return var2;
case 19:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot20 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function _maybeAckNotificationCenter() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 47; continue _fun0004 }
case 20:
                    var2 = 'notification_center_id';
                    var3 = var2 in var6;
                    var2 = null;
                    var9 = null;
                    if(!var3) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                    var9 = var6.notification_center_id;
case 48:
                    var3 = 'since';
                    var3 = var3 in var6;
                    var5 = null;
                    if(!var3) { _fun0004_ip = 50; continue _fun0004 }
case 51:
                    var5 = var6.since;
case 50:
                    var4 = var6.type;
                    var3 = 'RELATIONSHIP_ADD';
                    if(!(var3 === var4)) { _fun0004_ip = 52; continue _fun0004 }
case 53:
                    var3 = global;
                    var8 = var3.Number;
                    var4 = var6.rel_type;
                    var7 = undefined;
                    var10 = var8.bind(var7)(var4);
                    var8 = _closure1_slot10;
                    var8 = var8.PENDING_INCOMING;
                    if(!(var10 === var8)) { _fun0004_ip = 52; continue _fun0004 }
case 54:
                    if(!(var2 == var5)) { _fun0004_ip = 55; continue _fun0004 }
case 52:
                    if(!(var2 != var9)) { _fun0004_ip = 56; continue _fun0004 }
case 57:
                    var2 = _closure1_slot16;
                    var10 = undefined;
                    var2 = var2.bind(var10)();
                    SaveGenerator(address=132);
case 58:
                    return var2;
case 59:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0004_ip = 60; continue _fun0004 }
case 61:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var5 = 17;
                    var5 = var11[var5];
                    var8 = var8.bind(var10)(var5);
                    var5 = var8.markNotificationCenterRemoteItemAcked;
                    var5 = var5.bind(var8)(var9);
                    _fun0004_ip = 56; continue _fun0004;
case 60:
                    return var2;
case 55:
                    var2 = _closure1_slot16;
                    var2 = var2.bind(var7)();
                    SaveGenerator(address=189);
case 62:
                    return var2;
case 63:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 64; continue _fun0004 }
case 65:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var5 = 16;
                    var5 = var8[var5];
                    var10 = var9.bind(var7)(var5);
                    var9 = var10.fromTimestamp;
                    var12 = var3.Date;
                    var11 = var3.String;
                    var5 = var6.since;
                    var15 = var11.bind(var7)(var5);
                    var11 = var12.prototype;
                    var11 = Object.create(var11, {constructor: {value: var12}});
                    var16 = var11;
                    var5 = new var16[var12](var15, var14);
                    var11 = var5 instanceof Object ? var5 : var11;
                    var5 = var11.getTime;
                    var5 = var5.bind(var11)();
                    var9 = var9.bind(var10)(var5);
                    var5 = _closure1_slot0;
                    var4 = 17;
                    var4 = var8[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.markNotificationCenterLocalItemsAcked;
                    var8 = var6.user_id;
                    var3 = var3.HermesInternal;
                    var7 = var3.concat;
                    var6 = 'incoming_friend_requests_';
                    var3 = '_';
                    var6 = var7.bind(var6)(var8, var3, var9);
                    var3 = new Array(1);
                    var3[0] = var6;
                    var3 = var4.bind(var5)(var3);
case 56:
                    var3 = undefined;
                    return var3;
case 64:
                    return var2;
case 47:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot21 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function receiveNotification_(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var1 = var4.type;
            var3 = 'MESSAGE_CREATE';
            if(!(var3 !== var1)) { _fun0005_ip = 66; continue _fun0005 }
case 67:
            var6 = var4.type;
            var5 = 'GENERIC_PUSH_NOTIFICATION_SENT';
            var1 = false;
            if(!(var5 === var6)) { _fun0005_ip = 68; continue _fun0005 }
case 18:
            var5 = var4.deeplink;
            var10 = null;
            var5 = var10 != var5;
            var1 = false;
            if(!var5) { _fun0005_ip = 68; continue _fun0005 }
case 69:
            var6 = var4.deeplink;
            var5 = '';
            var1 = false;
            if(!(var5 !== var6)) { _fun0005_ip = 68; continue _fun0005 }
case 9:
            var11 = _closure1_slot1;
            var9 = _closure1_slot3;
            var5 = 25;
            var5 = var9[var5];
            var8 = undefined;
            var11 = var11.bind(var8)(var5);
            var5 = var4.deeplink;
            var5 = var11.bind(var8)(var5);
            var5 = var5.payload;
            var11 = var5.type;
            var12 = _closure1_slot0;
            var13 = 26;
            var9 = var9[var13];
            var9 = var12.bind(var8)(var9);
            var9 = var9.LinkingTypes;
            var9 = var9.MESSAGE;
            if(!(var11 !== var9)) { _fun0005_ip = 70; continue _fun0005 }
case 71:
            var11 = var5.type;
            var12 = _closure1_slot0;
            var9 = _closure1_slot3;
            var9 = var9[var13];
            var9 = var12.bind(var8)(var9);
            var9 = var9.LinkingTypes;
            var9 = var9.ICYMI;
            if(!(var11 === var9)) { _fun0005_ip = 72; continue _fun0005 }
case 73:
            var9 = var4.channel_id;
            if(!(var10 != var9)) { _fun0005_ip = 72; continue _fun0005 }
case 74:
            var9 = var4.message_id;
            if(!(var10 == var9)) { _fun0005_ip = 75; continue _fun0005 }
case 72:
            var11 = var5.type;
            var12 = _closure1_slot0;
            var9 = _closure1_slot3;
            var9 = var9[var13];
            var9 = var12.bind(var8)(var9);
            var9 = var9.LinkingTypes;
            var9 = var9.ICYMI;
            var1 = false;
            if(!(var11 === var9)) { _fun0005_ip = 68; continue _fun0005 }
case 76:
            var9 = var4.user_id;
            var9 = var10 != var9;
            var1 = false;
            if(!var9) { _fun0005_ip = 68; continue _fun0005 }
case 77:
            var9 = var4.notification_center_id;
            var9 = var10 != var9;
            var1 = false;
            if(!var9) { _fun0005_ip = 68; continue _fun0005 }
case 78:
            var9 = var4.status_emoji_id;
            var9 = var10 != var9;
            var11 = null;
            if(!var9) { _fun0005_ip = 79; continue _fun0005 }
case 80:
            var12 = var4.status_emoji_id;
            var9 = '0';
            var11 = null;
            if(!(var9 !== var12)) { _fun0005_ip = 79; continue _fun0005 }
case 81:
            var11 = var4.status_emoji_id;
case 79:
            var12 = {};
            var9 = var4.notification_center_id;
            var12['id'] = var9;
            var14 = _closure1_slot0;
            var13 = _closure1_slot3;
            var9 = 29;
            var9 = var13[var9];
            var9 = var14.bind(var8)(var9);
            var9 = var9.ICYMIItemTypes;
            var9 = var9.CUSTOM_STATUS;
            var12['type'] = var9;
            var9 = 1000;
            var12['score'] = var9;
            var9 = {};
            var14 = var4.user_id;
            var9['user_id'] = var14;
            var14 = var4.status_text;
            var9['text'] = var14;
            var9['emoji_id'] = var11;
            var11 = var4.status_emoji_name;
            var9['emoji_name'] = var11;
            var11 = var4.status_emoji_animated;
            var11 = !var11;
            var11 = !var11;
            var9['emoji_animated'] = var11;
            var12['data'] = var9;
            var11 = _closure1_slot1;
            var9 = 28;
            var9 = var13[var9];
            var11 = var11.bind(var8)(var9);
            var9 = var11.fetchForStatusNotification;
            var9 = var9.bind(var11)(var12);
            var1 = false;
            _fun0005_ip = 68; continue _fun0005;
case 75:
            var11 = _closure1_slot1;
            var12 = _closure1_slot3;
            var9 = 28;
            var9 = var12[var9];
            var13 = var11.bind(var8)(var9);
            var12 = var13.fetchForNotification;
            var11 = var4.channel_id;
            var9 = var4.message_id;
            var9 = var12.bind(var13)(var11, var9);
            var1 = false;
            _fun0005_ip = 68; continue _fun0005;
case 70:
            var7 = var10 == var4;
            var12 = undefined;
            if(var7) { _fun0005_ip = 82; continue _fun0005 }
case 83:
            var12 = var4.tracking_type;
case 82:
            if(!(var10 == var12)) { _fun0005_ip = 84; continue _fun0005 }
case 85:
            var12 = var4.type;
case 84:
            var7 = var10 != var12;
            if(!var7) { _fun0005_ip = 86; continue _fun0005 }
case 87:
            var9 = var5.messageId;
            var7 = var10 != var9;
case 86:
            if(!var7) { _fun0005_ip = 88; continue _fun0005 }
case 89:
            var9 = var5.channelId;
            var7 = var10 != var9;
case 88:
            if(!var7) { _fun0005_ip = 90; continue _fun0005 }
case 91:
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var7 = 27;
            var7 = var10[var7];
            var11 = var9.bind(var8)(var7);
            var10 = var11.receivedNotification;
            var9 = var5.messageId;
            var7 = var5.channelId;
            var7 = var10.bind(var11)(var9, var7, var12);
case 90:
            var7 = _closure1_slot1;
            var9 = _closure1_slot3;
            var6 = 24;
            var6 = var9[var6];
            var8 = var7.bind(var8)(var6);
            var7 = var8.fetchMessages;
            var6 = {};
            var9 = var5.guildId;
            var6['guildId'] = var9;
            var9 = var5.channelId;
            var6['channelId'] = var9;
            var5 = var5.messageId;
            var6['messageId'] = var5;
            var5 = true;
            var6['isPreload'] = var5;
            var6 = var7.bind(var8)(var6);
            var1 = true;
case 68:
            var7 = _closure1_slot14;
            var6 = var7.log;
            var9 = var4.type;
            var5 = global;
            var5 = var5.HermesInternal;
            var8 = var5.concat;
            var5 = 'Notification clicked of type ';
            var5 = var8.bind(var5)(var9);
            var5 = var6.bind(var7)(var5);
            _fun0005_ip = 92; continue _fun0005;
case 66:
            var8 = _closure1_slot14;
            var7 = var8.log;
            var23 = var4.type;
            var21 = var4.guild_id;
            var19 = var4.channel_id;
            var17 = var4.message_id;
            var6 = global;
            var6 = var6.HermesInternal;
            var12 = var6.concat;
            var24 = 'Notification clicked of type ';
            var22 = ' with guild:';
            var20 = ' channel:';
            var18 = ' message:';
            var6 = var24[var12](var23, var22, var21, var20, var19, var18, var17, var16);
            var6 = var7.bind(var8)(var6);
            var7 = _closure1_slot1;
            var6 = _closure1_slot3;
            var5 = 24;
            var6 = var6[var5];
            var5 = undefined;
            var8 = var7.bind(var5)(var6);
            var7 = var8.fetchMessages;
            var6 = {};
            var5 = var4.guild_id;
            var6['guildId'] = var5;
            var5 = var4.channel_id;
            var6['channelId'] = var5;
            var5 = var4.message_id;
            var6['messageId'] = var5;
            var5 = true;
            var6['isPreload'] = var5;
            var6 = var7.bind(var8)(var6);
            var1 = true;
case 92:
            var4 = var4.type;
            if(!(var3 !== var4)) { _fun0005_ip = 93; continue _fun0005 }
case 94:
            var3 = 'FORUM_THREAD_CREATED';
            if(!(var3 !== var4)) { _fun0005_ip = 93; continue _fun0005 }
case 95:
            var3 = 'RELATIONSHIP_ADD';
            if(!(var3 !== var4)) { _fun0005_ip = 93; continue _fun0005 }
case 96:
            var3 = 'CALL_RING';
            if(!(var3 !== var4)) { _fun0005_ip = 93; continue _fun0005 }
case 97:
            var3 = 'CALL_CONNECT';
            if(!(var3 !== var4)) { _fun0005_ip = 93; continue _fun0005 }
case 98:
            var3 = 'FRIEND_SUGGESTION_CREATE';
            if(!(var3 !== var4)) { _fun0005_ip = 93; continue _fun0005 }
case 99:
            var3 = 'STAGE_INSTANCE_CREATE';
            if(!(var3 !== var4)) { _fun0005_ip = 93; continue _fun0005 }
case 100:
            var3 = 'GUILD_SCHEDULED_EVENT_UPDATE';
            if(!(var3 !== var4)) { _fun0005_ip = 93; continue _fun0005 }
case 101:
            var3 = 'GUILD_STREAM_START';
            if(!(var3 !== var4)) { _fun0005_ip = 93; continue _fun0005 }
case 102:
            var3 = 'GENERIC_PUSH_NOTIFICATION_SENT';
            if(!(var3 !== var4)) { _fun0005_ip = 93; continue _fun0005 }
case 103:
            return var1;
case 93:
            var3 = function dispatch() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var5 = 30;
                    var4 = var7[var5];
                    var1 = undefined;
                    var9 = var6.bind(var1)(var4);
                    var8 = var9.dispatch;
                    var4 = {};
                    var10 = 'PUSH_NOTIFICATION_CLICK';
                    var4['type'] = var10;
                    var4 = var8.bind(var9)(var4);
                    var4 = 31;
                    var4 = var7[var4];
                    var10 = var6.bind(var1)(var4);
                    var9 = var10.track;
                    var4 = _closure1_slot9;
                    var8 = var4.NOTIFICATION_CLICKED;
                    var4 = {};
                    var11 = _closure2_slot0;
                    var7 = 'tracking_type';
                    var7 = var7 in var11;
                    var11 = _closure2_slot0;
                    if(var7) { _fun0006_ip = 104; continue _fun0006 }
case 105:
                    var7 = var11.type;
                    _fun0006_ip = 106; continue _fun0006;
case 104:
                    var7 = var11.tracking_type;
case 106:
                    var4['notif_type'] = var7;
                    var11 = _closure2_slot0;
                    var7 = 'user_id';
                    var12 = var7 in var11;
                    var7 = null;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 107; continue _fun0006 }
case 108:
                    var12 = _closure2_slot0;
                    var11 = var12.user_id;
case 107:
                    var4['notif_user_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'message_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 55; continue _fun0006 }
case 109:
                    var12 = _closure2_slot0;
                    var11 = var12.message_id;
case 55:
                    var4['message_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'message_type_';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 74; continue _fun0006 }
case 110:
                    var12 = _closure2_slot0;
                    var11 = var12.message_type_;
case 74:
                    var4['message_type'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'message';
                    var11 = var11 in var12;
                    if(!var11) { _fun0006_ip = 111; continue _fun0006 }
case 112:
                    var12 = _closure2_slot0;
                    var12 = var12.message;
                    var11 = var7 != var12;
case 111:
                    var4['has_message'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'guild_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 113; continue _fun0006 }
case 114:
                    var12 = _closure2_slot0;
                    var11 = var12.guild_id;
case 113:
                    var4['guild_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'channel_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 115; continue _fun0006 }
case 116:
                    var12 = _closure2_slot0;
                    var11 = var12.channel_id;
case 115:
                    var4['channel_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'channel_type';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 117; continue _fun0006 }
case 118:
                    var12 = _closure2_slot0;
                    var11 = var12.channel_type;
case 117:
                    var4['channel_type'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'rel_type';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 119; continue _fun0006 }
case 120:
                    var12 = global;
                    var13 = var12.Number;
                    var12 = _closure2_slot0;
                    var12 = var12.rel_type;
                    var11 = var13.bind(var1)(var12);
case 119:
                    var4['rel_type'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'notification_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 121; continue _fun0006 }
case 122:
                    var12 = _closure2_slot0;
                    var11 = var12.notification_id;
case 121:
                    var4['notification_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'image_url';
                    var11 = var11 in var12;
                    if(!var11) { _fun0006_ip = 123; continue _fun0006 }
case 124:
                    var12 = _closure2_slot0;
                    var12 = var12.image_url;
                    var11 = var7 != var12;
case 123:
                    var4['has_image_thumbnail'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'join_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 125; continue _fun0006 }
case 126:
                    var12 = _closure2_slot0;
                    var11 = var12.join_id;
case 125:
                    var4['join_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'notif_instance_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 127; continue _fun0006 }
case 128:
                    var12 = _closure2_slot0;
                    var11 = var12.notif_instance_id;
case 127:
                    var4['notif_instance_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'notif_type_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 129; continue _fun0006 }
case 130:
                    var12 = _closure2_slot0;
                    var11 = var12.notif_type_id;
case 129:
                    var4['notif_type_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'mention_type';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 131; continue _fun0006 }
case 132:
                    var12 = _closure2_slot0;
                    var11 = var12.mention_type;
case 131:
                    var4['mention_type'] = var11;
                    var4 = var9.bind(var10)(var8, var4);
                    var4 = _closure2_slot0;
                    var8 = function maybeAckNotificationCenter() {
                        var1 = undefined;
                        var4 = _closure1_slot21;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var8 = var8.bind(var1)(var4);
                    var8 = var4.type;
                    var4 = 'MESSAGE_CREATE';
                    if(!(var4 !== var8)) { _fun0006_ip = 133; continue _fun0006 }
case 134:
                    var4 = 'FORUM_THREAD_CREATED';
                    if(!(var4 !== var8)) { _fun0006_ip = 135; continue _fun0006 }
case 136:
                    var4 = 'RELATIONSHIP_ADD';
                    if(!(var4 !== var8)) { _fun0006_ip = 137; continue _fun0006 }
case 138:
                    var4 = 'CALL_RING';
                    if(!(var4 !== var8)) { _fun0006_ip = 139; continue _fun0006 }
case 140:
                    var4 = 'CALL_CONNECT';
                    if(!(var4 !== var8)) { _fun0006_ip = 141; continue _fun0006 }
case 142:
                    var4 = 'FRIEND_SUGGESTION_CREATE';
                    if(!(var4 !== var8)) { _fun0006_ip = 143; continue _fun0006 }
case 144:
                    var4 = 'GUILD_STREAM_START';
                    if(!(var4 !== var8)) { _fun0006_ip = 145; continue _fun0006 }
case 146:
                    var4 = 'GUILD_SCHEDULED_EVENT_UPDATE';
                    if(!(var4 !== var8)) { _fun0006_ip = 147; continue _fun0006 }
case 148:
                    var4 = 'STAGE_INSTANCE_CREATE';
                    if(!(var4 !== var8)) { _fun0006_ip = 149; continue _fun0006 }
case 150:
                    var4 = 'GENERIC_PUSH_NOTIFICATION_SENT';
                    if(!(var4 === var8)) { _fun0006_ip = 151; continue _fun0006 }
case 152:
                    var4 = _closure2_slot0;
                    var4 = var4.deeplink;
                    if(!(var7 != var4)) { _fun0006_ip = 151; continue _fun0006 }
case 153:
                    var4 = _closure2_slot0;
                    var8 = var4.deeplink;
                    var4 = '';
                    if(!(var4 !== var8)) { _fun0006_ip = 151; continue _fun0006 }
case 154:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var4 = 25;
                    var4 = var10[var4];
                    var9 = var8.bind(var1)(var4);
                    var4 = _closure2_slot0;
                    var4 = var4.deeplink;
                    var4 = var9.bind(var1)(var4);
                    var9 = var4.payload;
                    var4 = 47;
                    var4 = var10[var4];
                    var8 = var8.bind(var1)(var4);
                    var4 = {};
                    var4['payload'] = var9;
                    var4 = var8.bind(var1)(var4);
                    _fun0006_ip = 151; continue _fun0006;
case 149:
                    var8 = _closure2_slot0;
                    var4 = function handleStageNotification() {
                        var1 = undefined;
                        var4 = _closure1_slot19;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var4 = var4.bind(var1)(var8);
                    var4 = !var4;
                    _fun0006_ip = 151; continue _fun0006;
case 147:
                    var8 = _closure2_slot0;
                    var4 = function handleGuildEventNotification() {
                        var1 = undefined;
                        var4 = _closure1_slot20;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var4 = var4.bind(var1)(var8);
                    var4 = !var4;
                    _fun0006_ip = 151; continue _fun0006;
case 145:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var4 = 46;
                    var4 = var9[var4];
                    var8 = var8.bind(var1)(var4);
                    var4 = {};
                    var9 = _closure1_slot12;
                    var9 = var9.GUILD;
                    var4['streamType'] = var9;
                    var9 = _closure2_slot0;
                    var10 = var9.user_id;
                    var4['ownerId'] = var10;
                    var10 = var9.guild_id;
                    var4['guildId'] = var10;
                    var9 = var9.channel_id;
                    var4['channelId'] = var9;
                    var4 = var8.bind(var1)(var4);
                    _fun0006_ip = 151; continue _fun0006;
case 143:
                    var4 = _closure1_slot16;
                    var9 = var4.bind(var1)();
                    var8 = var9.then;
                    var4 = function() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 36;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.getRootNavigationRef;
                            var6 = var3.bind(var4)();
                            var3 = null;
                            if(!(var3 != var6)) { _fun0007_ip = 155; continue _fun0007 }
case 22:
                            var5 = var6.navigate;
                            var4 = {};
                            var3 = 'add-friends';
                            var4['screen'] = var3;
                            var3 = {};
                            var7 = 'Notifications';
                            var3['sourcePage'] = var7;
                            var4['params'] = var3;
                            var3 = 'friends';
                            var3 = var5.bind(var6)(var3, var4);
case 155:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var2 = 39;
                            var2 = var6[var2];
                            var3 = var5.bind(var1)(var2);
                            var2 = {};
                            var4 = _closure2_slot0;
                            var4 = var4.user_id;
                            var2['userId'] = var4;
                            var4 = 40;
                            var4 = var6[var4];
                            var4 = var5.bind(var1)(var4);
                            var5 = var4.PUSH_NOTIFICATION;
                            var4 = new Array(1);
                            var4[0] = var5;
                            var2['sourceAnalyticsLocations'] = var4;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var4 = var8.bind(var9)(var4);
                    _fun0006_ip = 151; continue _fun0006;
case 141:
                    var4 = _closure1_slot16;
                    var9 = var4.bind(var1)();
                    var8 = var9.then;
                    var4 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var1 = 34;
                            var2 = var7[var1];
                            var1 = undefined;
                            var8 = var6.bind(var1)(var2);
                            var5 = var8.transitionToChannel;
                            var12 = _closure2_slot0;
                            var4 = var12.channel_id;
                            var4 = var5.bind(var8)(var4);
                            var13 = _closure1_slot1;
                            var4 = 42;
                            var4 = var7[var4];
                            var9 = var13.bind(var1)(var4);
                            var8 = var9.call;
                            var5 = var12.channel_id;
                            var4 = false;
                            var4 = var8.bind(var9)(var5, var4, var4);
                            var4 = 31;
                            var5 = var7[var4];
                            var11 = var13.bind(var1)(var5);
                            var9 = var11.track;
                            var5 = _closure1_slot9;
                            var8 = var5.RING_CALL_ACCEPTED;
                            var5 = {};
                            var10 = 40;
                            var10 = var7[var10];
                            var10 = var13.bind(var1)(var10);
                            var10 = var10.PUSH_NOTIFICATION;
                            var5['location'] = var10;
                            var10 = var12.guild_id;
                            var5['guild_id'] = var10;
                            var10 = var12.user_id;
                            var5['ringer_user_id'] = var10;
                            var10 = 43;
                            var13 = var7[var10];
                            var14 = var6.bind(var1)(var13);
                            var13 = var14.collectChannelAnalyticsMetadataFromId;
                            var12 = var12.channel_id;
                            var16 = var13.bind(var14)(var12);
                            var17 = var5;
                            var12 = copyDataProperties(var17, var16);
                            var5 = var9.bind(var11)(var8, var5);
                            var5 = 44;
                            var5 = var7[var5];
                            var6 = var6.bind(var1)(var5);
                            var5 = var6.isAndroid;
                            var5 = var5.bind(var6)();
                            if(!var5) { _fun0008_ip = 156; continue _fun0008 }
case 157:
                            var5 = _closure2_slot0;
                            var5 = var5.is_fullscreen_call_ui;
                            if(!var5) { _fun0008_ip = 158; continue _fun0008 }
case 159:
                            var5 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var4 = var8[var4];
                            var7 = var5.bind(var1)(var4);
                            var6 = var7.track;
                            var4 = _closure1_slot9;
                            var5 = var4.CALLKIT_CLICKED;
                            var4 = {};
                            var9 = 'join';
                            var4['action_type'] = var9;
                            var9 = _closure1_slot0;
                            var8 = var8[var10];
                            var10 = var9.bind(var1)(var8);
                            var9 = var10.collectChannelAnalyticsMetadataFromId;
                            var8 = _closure2_slot0;
                            var8 = var8.channel_id;
                            var16 = var9.bind(var10)(var8);
                            var17 = var4;
                            var8 = copyDataProperties(var17, var16);
                            var4 = var6.bind(var7)(var5, var4);
case 158:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var3 = 45;
                            var3 = var5[var3];
                            var3 = var4.bind(var1)(var3);
                            var2 = _closure2_slot0;
                            var2 = var2.channel_id;
                            var2 = var3.bind(var1)(var2);
case 156:
                            return var1;
                        }
                    };
                    var4 = var8.bind(var9)(var4);
                    _fun0006_ip = 151; continue _fun0006;
case 139:
                    var4 = _closure1_slot16;
                    var9 = var4.bind(var1)();
                    var8 = var9.then;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 34;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.transitionToChannel;
                        var2 = _closure2_slot0;
                        var2 = var2.channel_id;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var8.bind(var9)(var4);
                    _fun0006_ip = 151; continue _fun0006;
case 137:
                    var4 = global;
                    var8 = var4.Number;
                    var4 = _closure2_slot0;
                    var4 = var4.rel_type;
                    var8 = var8.bind(var1)(var4);
                    var4 = _closure1_slot10;
                    var4 = var4.PENDING_INCOMING;
                    if(!(var8 !== var4)) { _fun0006_ip = 160; continue _fun0006 }
case 161:
                    var4 = _closure1_slot10;
                    var4 = var4.FRIEND;
                    if(!(var8 !== var4)) { _fun0006_ip = 162; continue _fun0006 }
case 163:
                    var4 = _closure2_slot0;
                    var8 = var4.notification_type;
                    var4 = _closure1_slot8;
                    var4 = var4.REMINDER;
                    if(!(var8 === var4)) { _fun0006_ip = 151; continue _fun0006 }
case 164:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var4 = 36;
                    var4 = var9[var4];
                    var8 = var8.bind(var1)(var4);
                    var4 = var8.getRootNavigationRef;
                    var10 = var4.bind(var8)();
                    if(!(var7 != var10)) { _fun0006_ip = 151; continue _fun0006 }
case 165:
                    var9 = var10.navigate;
                    var8 = {};
                    var4 = 'requests';
                    var8['screen'] = var4;
                    var4 = 'friends';
                    var4 = var9.bind(var10)(var4, var8);
                    _fun0006_ip = 151; continue _fun0006;
case 162:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var4 = 41;
                    var4 = var9[var4];
                    var9 = var8.bind(var1)(var4);
                    var8 = var9.openPrivateChannel;
                    var4 = {};
                    var10 = _closure2_slot0;
                    var10 = var10.user_id;
                    var4['recipientIds'] = var10;
                    var4 = var8.bind(var9)(var4);
                    _fun0006_ip = 151; continue _fun0006;
case 160:
                    var4 = _closure1_slot16;
                    var8 = var4.bind(var1)();
                    var4 = var8.then;
                    var3 = function() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var1 = 35;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.getCurrentConfig;
                            var3 = {};
                            var6 = 'notification';
                            var3['location'] = var6;
                            var3 = var4.bind(var5)(var3);
                            var8 = var3.showInDMs;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var3 = 33;
                            var3 = var5[var3];
                            var7 = var4.bind(var1)(var3);
                            var6 = var7.transitionTo;
                            var3 = _closure1_slot11;
                            if(var8) { _fun0009_ip = 166; continue _fun0009 }
case 167:
                            var8 = var3.NOTIFICATIONS;
                            var8 = var6.bind(var7)(var8);
                            var9 = _closure1_slot2;
                            var8 = 37;
                            var8 = var5[var8];
                            var10 = var9.bind(var1)(var8);
                            var9 = var10.setTab;
                            var8 = 38;
                            var8 = var5[var8];
                            var8 = var4.bind(var1)(var8);
                            var8 = var8.NotificationCenterTabs;
                            var8 = var8.ForYou;
                            var8 = var9.bind(var10)(var8);
                            _fun0009_ip = 112; continue _fun0009;
case 166:
                            var3 = var3.ME;
                            var3 = var6.bind(var7)(var3);
                            var3 = 36;
                            var3 = var5[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.getRootNavigationRef;
                            var6 = var3.bind(var4)();
                            var3 = null;
                            if(!(var3 != var6)) { _fun0009_ip = 112; continue _fun0009 }
case 168:
                            var5 = var6.navigate;
                            var4 = {};
                            var3 = 'add-friends';
                            var4['screen'] = var3;
                            var3 = {};
                            var7 = 'Notifications';
                            var3['sourcePage'] = var7;
                            var4['params'] = var3;
                            var3 = 'friends';
                            var3 = var5.bind(var6)(var3, var4);
case 112:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var2 = 39;
                            var2 = var6[var2];
                            var3 = var5.bind(var1)(var2);
                            var2 = {};
                            var4 = _closure2_slot0;
                            var4 = var4.user_id;
                            var2['userId'] = var4;
                            var4 = 40;
                            var4 = var6[var4];
                            var4 = var5.bind(var1)(var4);
                            var5 = var4.PUSH_NOTIFICATION;
                            var4 = new Array(1);
                            var4[0] = var5;
                            var2['sourceAnalyticsLocations'] = var4;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var3 = var4.bind(var8)(var3);
                    _fun0006_ip = 151; continue _fun0006;
case 135:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 34;
                    var3 = var8[var3];
                    var8 = var4.bind(var1)(var3);
                    var4 = var8.transitionToChannel;
                    var3 = _closure2_slot0;
                    var3 = var3.channel_id;
                    var3 = var4.bind(var8)(var3);
                    _fun0006_ip = 151; continue _fun0006;
case 133:
                    var3 = _closure2_slot0;
                    var3 = var3.message;
                    if(!(var7 != var3)) { _fun0006_ip = 169; continue _fun0006 }
case 170:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var3 = var3[var5];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.dispatch;
                    var3 = {'type': 'MESSAGE_CREATE', 'channelId': null, 'message': null, 'optimistic': true, 'isPushNotification': true};
                    var8 = _closure2_slot0;
                    var9 = var8.message;
                    var9 = var9.channel_id;
                    var3['channelId'] = var9;
                    var8 = var8.message;
                    var3['message'] = var8;
                    var3 = var4.bind(var5)(var3);
case 169:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var5 = 32;
                    var5 = var4[var5];
                    var8 = var3.bind(var1)(var5);
                    var5 = var8.popAll;
                    var5 = var5.bind(var8)();
                    var8 = _closure1_slot0;
                    var5 = 33;
                    var5 = var4[var5];
                    var11 = var8.bind(var1)(var5);
                    var10 = var11.transitionTo;
                    var13 = _closure1_slot11;
                    var12 = var13.CHANNEL;
                    var8 = _closure2_slot0;
                    var9 = var8.guild_id;
                    var5 = var8.channel_id;
                    var2 = var8.message_id;
                    var9 = var12.bind(var13)(var9, var5, var2);
                    var5 = true;
                    var2 = {'navigationReplace': true, 'openChannel': true};
                    var2 = var10.bind(var11)(var9, var2);
                    var2 = 13;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.selectChannel;
                    var2 = {};
                    var8 = var8.guild_id;
                    var9 = var7 != var8;
                    var7 = null;
                    if(!var9) { _fun0006_ip = 171; continue _fun0006 }
case 172:
                    var7 = var8;
case 171:
                    var2['guildId'] = var7;
                    var6 = _closure2_slot0;
                    var7 = var6.channel_id;
                    var2['channelId'] = var7;
                    var6 = var6.message_id;
                    var2['messageId'] = var6;
                    var2['isInitialSetup'] = var5;
                    var2 = var3.bind(var4)(var2);
case 151:
                    return var1;
                }
            };
            var2 = undefined;
            var2 = var3.bind(var2)();
            return var1;
        }
    };
    var _closure1_slot22 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.addPostConnectionCallback;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NotificationTypes;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot9 = var8;
    var8 = var4.RelationshipTypes;
    var _closure1_slot10 = var8;
    var4 = var4.Routes;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StreamTypes;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildScheduledEventEntityTypes;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'receiveNotification';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot14 = var4;
    var4 = 48;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/push_notifications/native/receiveNotification.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function receiveNotification(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg1;
            var1 = var3.getData;
            var5 = null;
            if(!(var5 != var1)) { _fun0010_ip = 173; continue _fun0010 }
case 174:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 18;
            var1 = var8[var1];
            var6 = undefined;
            var9 = var7.bind(var6)(var1);
            var7 = var9.trackAppOpened;
            var1 = 'notification';
            var1 = var7.bind(var9)(var1);
            var1 = var3.getData;
            var3 = var1.bind(var3)();
            var _closure2_slot0 = var3;
            var7 = _closure1_slot1;
            var1 = 19;
            var1 = var8[var1];
            var9 = var7.bind(var6)(var1);
            var8 = var9.mark;
            var10 = var3.type;
            var1 = global;
            var1 = var1.HermesInternal;
            var7 = var1.concat;
            var1 = 'Receive notification ';
            var7 = var7.bind(var1)(var10);
            var1 = '❗';
            var1 = var8.bind(var9)(var1, var7);
            var1 = var3.receiving_user_id;
            if(!(var5 != var1)) { _fun0010_ip = 62; continue _fun0010 }
case 107:
            var7 = _closure1_slot7;
            var1 = var7.getId;
            var1 = var1.bind(var7)();
            if(!(var5 != var1)) { _fun0010_ip = 62; continue _fun0010 }
case 175:
            var5 = var3.receiving_user_id;
            var7 = _closure1_slot7;
            var1 = var7.getId;
            var1 = var1.bind(var7)();
            if(!(var5 === var1)) { _fun0010_ip = 112; continue _fun0010 }
case 62:
            var5 = _closure1_slot1;
            var7 = _closure1_slot3;
            var1 = 23;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var7 = var1.Emitter;
            var5 = var7.batched;
            var1 = function() {
                var3 = _closure1_slot22;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var5.bind(var7)(var1);
            _fun0010_ip = 176; continue _fun0010;
case 112:
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var4 = 20;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = 21;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = 22;
            var4 = var7[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.switchAccount;
            var4 = var3.receiving_user_id;
            var3 = false;
            var4 = var5.bind(var6)(var4, var3);
            var3 = var4.then;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var4 = var2.Emitter;
                var3 = var4.batched;
                var2 = function() {
                    var3 = _closure1_slot22;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 176:
            return var1;
case 173:
            var1 = false;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();