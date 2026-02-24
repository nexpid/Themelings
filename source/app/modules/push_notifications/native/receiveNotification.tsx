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
        var5 = var5.ah3RLk;
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
                    var8 = 13;
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
                    var4 = 15;
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
                    var6 = 16;
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
                    var4 = 14;
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
                    var9 = var9.S69lJR;
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
                    var5 = 18;
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
                    var5 = 17;
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
                    var4 = 18;
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
            var5 = arg1;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 25;
            var1 = var3[var1];
            var3 = undefined;
            var4 = var4.bind(var3)(var1);
            var1 = var4.initializeRouteManagerIfNeeded;
            var1 = var1.bind(var4)();
            var1 = var5.type;
            var4 = 'MESSAGE_CREATE';
            if(!(var4 !== var1)) { _fun0005_ip = 66; continue _fun0005 }
case 67:
            var9 = var5.type;
            var7 = 'GENERIC_PUSH_NOTIFICATION_SENT';
            var1 = false;
            if(!(var7 === var9)) { _fun0005_ip = 68; continue _fun0005 }
case 69:
            var7 = var5.deeplink;
            var10 = null;
            var7 = var10 != var7;
            var1 = false;
            if(!var7) { _fun0005_ip = 68; continue _fun0005 }
case 70:
            var9 = var5.deeplink;
            var7 = '';
            var1 = false;
            if(!(var7 !== var9)) { _fun0005_ip = 68; continue _fun0005 }
case 71:
            var11 = _closure1_slot1;
            var9 = _closure1_slot3;
            var7 = 27;
            var7 = var9[var7];
            var11 = var11.bind(var3)(var7);
            var7 = var5.deeplink;
            var7 = var11.bind(var3)(var7);
            var7 = var7.payload;
            var11 = var7.type;
            var12 = _closure1_slot0;
            var13 = 28;
            var9 = var9[var13];
            var9 = var12.bind(var3)(var9);
            var9 = var9.LinkingTypes;
            var9 = var9.MESSAGE;
            if(!(var11 !== var9)) { _fun0005_ip = 72; continue _fun0005 }
case 73:
            var11 = var7.type;
            var12 = _closure1_slot0;
            var9 = _closure1_slot3;
            var9 = var9[var13];
            var9 = var12.bind(var3)(var9);
            var9 = var9.LinkingTypes;
            var9 = var9.ICYMI;
            if(!(var11 === var9)) { _fun0005_ip = 74; continue _fun0005 }
case 75:
            var9 = var5.channel_id;
            if(!(var10 != var9)) { _fun0005_ip = 74; continue _fun0005 }
case 76:
            var9 = var5.message_id;
            if(!(var10 == var9)) { _fun0005_ip = 77; continue _fun0005 }
case 74:
            var11 = var7.type;
            var12 = _closure1_slot0;
            var9 = _closure1_slot3;
            var9 = var9[var13];
            var9 = var12.bind(var3)(var9);
            var9 = var9.LinkingTypes;
            var9 = var9.ICYMI;
            var1 = false;
            if(!(var11 === var9)) { _fun0005_ip = 68; continue _fun0005 }
case 78:
            var9 = var5.user_id;
            var9 = var10 != var9;
            var1 = false;
            if(!var9) { _fun0005_ip = 68; continue _fun0005 }
case 79:
            var9 = var5.notification_center_id;
            var9 = var10 != var9;
            var1 = false;
            if(!var9) { _fun0005_ip = 68; continue _fun0005 }
case 80:
            var9 = var5.status_emoji_id;
            var9 = var10 != var9;
            var11 = null;
            if(!var9) { _fun0005_ip = 81; continue _fun0005 }
case 82:
            var12 = var5.status_emoji_id;
            var9 = '0';
            var11 = null;
            if(!(var9 !== var12)) { _fun0005_ip = 81; continue _fun0005 }
case 83:
            var11 = var5.status_emoji_id;
case 81:
            var12 = {};
            var9 = var5.notification_center_id;
            var12['id'] = var9;
            var14 = _closure1_slot0;
            var13 = _closure1_slot3;
            var9 = 31;
            var9 = var13[var9];
            var9 = var14.bind(var3)(var9);
            var9 = var9.ICYMIItemTypes;
            var9 = var9.CUSTOM_STATUS;
            var12['type'] = var9;
            var9 = 1000;
            var12['score'] = var9;
            var9 = {};
            var14 = var5.user_id;
            var9['user_id'] = var14;
            var14 = var5.status_text;
            var9['text'] = var14;
            var9['emoji_id'] = var11;
            var11 = var5.status_emoji_name;
            var9['emoji_name'] = var11;
            var11 = var5.status_emoji_animated;
            var11 = !var11;
            var11 = !var11;
            var9['emoji_animated'] = var11;
            var12['data'] = var9;
            var11 = _closure1_slot1;
            var9 = 30;
            var9 = var13[var9];
            var11 = var11.bind(var3)(var9);
            var9 = var11.fetchForStatusNotification;
            var9 = var9.bind(var11)(var12);
            var1 = false;
            _fun0005_ip = 68; continue _fun0005;
case 77:
            var11 = _closure1_slot1;
            var12 = _closure1_slot3;
            var9 = 30;
            var9 = var12[var9];
            var13 = var11.bind(var3)(var9);
            var12 = var13.fetchForNotification;
            var11 = var5.channel_id;
            var9 = var5.message_id;
            var9 = var12.bind(var13)(var11, var9);
            var1 = false;
            _fun0005_ip = 68; continue _fun0005;
case 72:
            var8 = var10 == var5;
            var12 = undefined;
            if(var8) { _fun0005_ip = 84; continue _fun0005 }
case 85:
            var12 = var5.tracking_type;
case 84:
            if(!(var10 == var12)) { _fun0005_ip = 86; continue _fun0005 }
case 87:
            var12 = var5.type;
case 86:
            var8 = var10 != var12;
            if(!var8) { _fun0005_ip = 88; continue _fun0005 }
case 89:
            var9 = var7.messageId;
            var8 = var10 != var9;
case 88:
            if(!var8) { _fun0005_ip = 90; continue _fun0005 }
case 91:
            var9 = var7.channelId;
            var8 = var10 != var9;
case 90:
            if(!var8) { _fun0005_ip = 92; continue _fun0005 }
case 93:
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var8 = 29;
            var8 = var10[var8];
            var11 = var9.bind(var3)(var8);
            var10 = var11.receivedNotification;
            var9 = var7.messageId;
            var8 = var7.channelId;
            var8 = var10.bind(var11)(var9, var8, var12);
case 92:
            var9 = _closure1_slot1;
            var10 = _closure1_slot3;
            var8 = 26;
            var8 = var10[var8];
            var10 = var9.bind(var3)(var8);
            var9 = var10.fetchMessages;
            var8 = {};
            var11 = var7.guildId;
            var8['guildId'] = var11;
            var11 = var7.channelId;
            var8['channelId'] = var11;
            var7 = var7.messageId;
            var8['messageId'] = var7;
            var7 = true;
            var8['isPreload'] = var7;
            var8 = var9.bind(var10)(var8);
            var1 = true;
case 68:
            var9 = _closure1_slot14;
            var8 = var9.log;
            var11 = var5.type;
            var7 = global;
            var7 = var7.HermesInternal;
            var10 = var7.concat;
            var7 = 'Notification clicked of type ';
            var7 = var10.bind(var7)(var11);
            var7 = var8.bind(var9)(var7);
            _fun0005_ip = 94; continue _fun0005;
case 66:
            var9 = _closure1_slot14;
            var8 = var9.log;
            var24 = var5.type;
            var22 = var5.guild_id;
            var20 = var5.channel_id;
            var18 = var5.message_id;
            var7 = global;
            var7 = var7.HermesInternal;
            var13 = var7.concat;
            var25 = 'Notification clicked of type ';
            var23 = ' with guild:';
            var21 = ' channel:';
            var19 = ' message:';
            var7 = var25[var13](var24, var23, var22, var21, var20, var19, var18, var17);
            var7 = var8.bind(var9)(var7);
            var7 = _closure1_slot1;
            var8 = _closure1_slot3;
            var6 = 26;
            var6 = var8[var6];
            var9 = var7.bind(var3)(var6);
            var8 = var9.fetchMessages;
            var7 = {};
            var6 = var5.guild_id;
            var7['guildId'] = var6;
            var6 = var5.channel_id;
            var7['channelId'] = var6;
            var6 = var5.message_id;
            var7['messageId'] = var6;
            var6 = true;
            var7['isPreload'] = var6;
            var7 = var8.bind(var9)(var7);
            var1 = true;
case 94:
            var5 = var5.type;
            if(!(var4 !== var5)) { _fun0005_ip = 95; continue _fun0005 }
case 96:
            var4 = 'FORUM_THREAD_CREATED';
            if(!(var4 !== var5)) { _fun0005_ip = 95; continue _fun0005 }
case 97:
            var4 = 'RELATIONSHIP_ADD';
            if(!(var4 !== var5)) { _fun0005_ip = 95; continue _fun0005 }
case 98:
            var4 = 'CALL_RING';
            if(!(var4 !== var5)) { _fun0005_ip = 95; continue _fun0005 }
case 99:
            var4 = 'CALL_CONNECT';
            if(!(var4 !== var5)) { _fun0005_ip = 95; continue _fun0005 }
case 100:
            var4 = 'FRIEND_SUGGESTION_CREATE';
            if(!(var4 !== var5)) { _fun0005_ip = 95; continue _fun0005 }
case 101:
            var4 = 'STAGE_INSTANCE_CREATE';
            if(!(var4 !== var5)) { _fun0005_ip = 95; continue _fun0005 }
case 102:
            var4 = 'GUILD_SCHEDULED_EVENT_UPDATE';
            if(!(var4 !== var5)) { _fun0005_ip = 95; continue _fun0005 }
case 103:
            var4 = 'GUILD_STREAM_START';
            if(!(var4 !== var5)) { _fun0005_ip = 95; continue _fun0005 }
case 104:
            var4 = 'GENERIC_PUSH_NOTIFICATION_SENT';
            if(!(var4 !== var5)) { _fun0005_ip = 95; continue _fun0005 }
case 105:
            return var1;
case 95:
            var2 = function dispatch() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var6 = 32;
                    var2 = var7[var6];
                    var1 = undefined;
                    var9 = var5.bind(var1)(var2);
                    var8 = var9.dispatch;
                    var2 = {};
                    var10 = 'PUSH_NOTIFICATION_CLICK';
                    var2['type'] = var10;
                    var2 = var8.bind(var9)(var2);
                    var2 = 33;
                    var2 = var7[var2];
                    var10 = var5.bind(var1)(var2);
                    var9 = var10.track;
                    var2 = _closure1_slot9;
                    var8 = var2.NOTIFICATION_CLICKED;
                    var7 = {};
                    var11 = _closure2_slot0;
                    var5 = 'tracking_type';
                    var5 = var5 in var11;
                    var11 = _closure2_slot0;
                    if(var5) { _fun0006_ip = 106; continue _fun0006 }
case 107:
                    var5 = var11.type;
                    _fun0006_ip = 108; continue _fun0006;
case 106:
                    var5 = var11.tracking_type;
case 108:
                    var7['notif_type'] = var5;
                    var11 = _closure2_slot0;
                    var5 = 'user_id';
                    var12 = var5 in var11;
                    var5 = null;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 109; continue _fun0006 }
case 110:
                    var12 = _closure2_slot0;
                    var11 = var12.user_id;
case 109:
                    var7['notif_user_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'message_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 55; continue _fun0006 }
case 111:
                    var12 = _closure2_slot0;
                    var11 = var12.message_id;
case 55:
                    var7['message_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'message_type_';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 112; continue _fun0006 }
case 113:
                    var12 = _closure2_slot0;
                    var11 = var12.message_type_;
case 112:
                    var7['message_type'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'message';
                    var11 = var11 in var12;
                    if(!var11) { _fun0006_ip = 114; continue _fun0006 }
case 115:
                    var12 = _closure2_slot0;
                    var12 = var12.message;
                    var11 = var5 != var12;
case 114:
                    var7['has_message'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'guild_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 116; continue _fun0006 }
case 117:
                    var12 = _closure2_slot0;
                    var11 = var12.guild_id;
case 116:
                    var7['guild_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'channel_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 118; continue _fun0006 }
case 119:
                    var12 = _closure2_slot0;
                    var11 = var12.channel_id;
case 118:
                    var7['channel_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'channel_type';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 120; continue _fun0006 }
case 121:
                    var12 = _closure2_slot0;
                    var11 = var12.channel_type;
case 120:
                    var7['channel_type'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'rel_type';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 122; continue _fun0006 }
case 123:
                    var12 = global;
                    var13 = var12.Number;
                    var12 = _closure2_slot0;
                    var12 = var12.rel_type;
                    var11 = var13.bind(var1)(var12);
case 122:
                    var7['rel_type'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'notification_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 124; continue _fun0006 }
case 125:
                    var12 = _closure2_slot0;
                    var11 = var12.notification_id;
case 124:
                    var7['notification_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'image_url';
                    var11 = var11 in var12;
                    if(!var11) { _fun0006_ip = 126; continue _fun0006 }
case 127:
                    var12 = _closure2_slot0;
                    var12 = var12.image_url;
                    var11 = var5 != var12;
case 126:
                    var7['has_image_thumbnail'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'join_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 128; continue _fun0006 }
case 129:
                    var12 = _closure2_slot0;
                    var11 = var12.join_id;
case 128:
                    var7['join_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'notif_instance_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 130; continue _fun0006 }
case 131:
                    var12 = _closure2_slot0;
                    var11 = var12.notif_instance_id;
case 130:
                    var7['notif_instance_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'notif_type_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 132; continue _fun0006 }
case 133:
                    var12 = _closure2_slot0;
                    var11 = var12.notif_type_id;
case 132:
                    var7['notif_type_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'mention_type';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 134; continue _fun0006 }
case 135:
                    var12 = _closure2_slot0;
                    var11 = var12.mention_type;
case 134:
                    var7['mention_type'] = var11;
                    var7 = var9.bind(var10)(var8, var7);
                    var7 = _closure2_slot0;
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
                    var8 = var8.bind(var1)(var7);
                    var8 = var7.type;
                    var7 = 'MESSAGE_CREATE';
                    if(!(var7 !== var8)) { _fun0006_ip = 136; continue _fun0006 }
case 137:
                    var7 = 'FORUM_THREAD_CREATED';
                    if(!(var7 !== var8)) { _fun0006_ip = 138; continue _fun0006 }
case 90:
                    var7 = 'RELATIONSHIP_ADD';
                    if(!(var7 !== var8)) { _fun0006_ip = 139; continue _fun0006 }
case 140:
                    var7 = 'CALL_RING';
                    if(!(var7 !== var8)) { _fun0006_ip = 141; continue _fun0006 }
case 142:
                    var7 = 'CALL_CONNECT';
                    if(!(var7 !== var8)) { _fun0006_ip = 143; continue _fun0006 }
case 144:
                    var7 = 'FRIEND_SUGGESTION_CREATE';
                    if(!(var7 !== var8)) { _fun0006_ip = 145; continue _fun0006 }
case 146:
                    var7 = 'GUILD_STREAM_START';
                    if(!(var7 !== var8)) { _fun0006_ip = 147; continue _fun0006 }
case 148:
                    var7 = 'GUILD_SCHEDULED_EVENT_UPDATE';
                    if(!(var7 !== var8)) { _fun0006_ip = 149; continue _fun0006 }
case 150:
                    var7 = 'STAGE_INSTANCE_CREATE';
                    if(!(var7 !== var8)) { _fun0006_ip = 151; continue _fun0006 }
case 152:
                    var7 = 'GENERIC_PUSH_NOTIFICATION_SENT';
                    if(!(var7 === var8)) { _fun0006_ip = 153; continue _fun0006 }
case 154:
                    var7 = _closure2_slot0;
                    var7 = var7.deeplink;
                    if(!(var5 != var7)) { _fun0006_ip = 153; continue _fun0006 }
case 155:
                    var7 = _closure2_slot0;
                    var8 = var7.deeplink;
                    var7 = '';
                    if(!(var7 !== var8)) { _fun0006_ip = 153; continue _fun0006 }
case 156:
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var7 = 27;
                    var7 = var11[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = _closure2_slot0;
                    var7 = var7.deeplink;
                    var7 = var8.bind(var1)(var7);
                    var9 = var7.payload;
                    var _closure3_slot0 = var9;
                    var8 = var9.type;
                    var10 = _closure1_slot0;
                    var7 = 28;
                    var7 = var11[var7];
                    var7 = var10.bind(var1)(var7);
                    var7 = var7.LinkingTypes;
                    var7 = var7.GAME_UPDATE;
                    if(!(var8 !== var7)) { _fun0006_ip = 157; continue _fun0006 }
case 158:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var7 = 50;
                    var7 = var10[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = {};
                    var7['payload'] = var9;
                    var9 = false;
                    var7['waitForConnection'] = var9;
                    var7 = var8.bind(var1)(var7);
                    _fun0006_ip = 153; continue _fun0006;
case 157:
                    var7 = _closure1_slot16;
                    var9 = var7.bind(var1)();
                    var8 = var9.then;
                    var7 = function() {
                        var2 = function waitForNavigationReady() {
                            var1 = global;
                            var3 = var1.Promise;
                            var1 = var3.prototype;
                            var2 = Object.create(var1, {constructor: {value: var3}});
                            var4 = function(arg1) {
                                var2 = arg1;
                                var _closure6_slot0 = var2;
                                var2 = 0;
                                var _closure6_slot1 = var2;
                                var2 = function checkNavigation() {
                                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                        var4 = _closure1_slot0;
                                        var2 = _closure1_slot3;
                                        var1 = 12;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var4 = var4.bind(var1)(var2);
                                        var2 = var4.getRootNavigationRef;
                                        var4 = var2.bind(var4)();
                                        var2 = null;
                                        if(!(var2 != var4)) { _fun0007_ip = 159; continue _fun0007 }
case 22:
                                        var2 = var4.isReady;
                                        var2 = var2.bind(var4)();
                                        if(var2) { _fun0007_ip = 59; continue _fun0007 }
case 159:
                                        var5 = _closure6_slot1;
                                        var4 = 100;
                                        if(!(!(var5 >= var4))) { _fun0007_ip = 160; continue _fun0007 }
case 161:
                                        var4 = _closure6_slot1;
                                        var4 = var4 + 1;
                                        _closure6_slot1 = var4;
                                        var4 = global;
                                        var6 = var4.setTimeout;
                                        var5 = _closure6_slot2;
                                        var4 = 50;
                                        var4 = var6.bind(var1)(var5, var4);
                                        _fun0007_ip = 162; continue _fun0007;
case 160:
                                        var5 = _closure1_slot14;
                                        var4 = var5.warn;
                                        var3 = 'waitForNavigationReady exceeded 100 retries. Navigation may not be ready.';
                                        var3 = var4.bind(var5)(var3);
                                        var2 = _closure6_slot0;
                                        var2 = var2.bind(var1)();
                                        _fun0007_ip = 162; continue _fun0007;
case 59:
                                        var2 = _closure6_slot0;
                                        var2 = var2.bind(var1)();
case 162:
                                        return var1;
                                    }
                                };
                                var _closure6_slot2 = var2;
                                var1 = undefined;
                                var2 = var2.bind(var1)();
                                return var1;
                            };
                            var5 = var2;
                            var1 = new var5[var3](var4, var3);
                            var1 = var1 instanceof Object ? var1 : var2;
                            return var1;
                        };
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        return var1;
                    };
                    var9 = var8.bind(var9)(var7);
                    var8 = var9.then;
                    var7 = function() {
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 35;
                        var5 = var2[var1];
                        var1 = undefined;
                        var8 = var4.bind(var1)(var5);
                        var7 = var8.transitionTo;
                        var5 = _closure1_slot11;
                        var6 = var5.NOTIFICATIONS;
                        var5 = {};
                        var9 = true;
                        var5['navigationReplace'] = var9;
                        var5 = var7.bind(var8)(var6, var5);
                        var5 = _closure1_slot1;
                        var3 = 47;
                        var3 = var2[var3];
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.openLazy;
                        var3 = 49;
                        var3 = var2[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = 48;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var4 = var4.bind(var1)(var3, var2);
                        var3 = {};
                        var7 = _closure3_slot0;
                        var7 = var7.gameUpdateId;
                        var3['gameUpdateId'] = var7;
                        var2 = _closure3_slot0;
                        var2 = var2.gameId;
                        var3['gameId'] = var2;
                        var2 = _closure2_slot0;
                        var7 = var2.update_title;
                        var3['initialUpdateTitle'] = var7;
                        var2 = var2.start_date;
                        var3['initialStartDate'] = var2;
                        var2 = 'GameUpdateActionSheet';
                        var2 = var5.bind(var6)(var4, var2, var3);
                        return var1;
                    };
                    var7 = var8.bind(var9)(var7);
                    _fun0006_ip = 153; continue _fun0006;
case 151:
                    var8 = _closure2_slot0;
                    var7 = function handleStageNotification() {
                        var1 = undefined;
                        var4 = _closure1_slot19;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var7 = var7.bind(var1)(var8);
                    var7 = !var7;
                    _fun0006_ip = 153; continue _fun0006;
case 149:
                    var8 = _closure2_slot0;
                    var7 = function handleGuildEventNotification() {
                        var1 = undefined;
                        var4 = _closure1_slot20;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var7 = var7.bind(var1)(var8);
                    var7 = !var7;
                    _fun0006_ip = 153; continue _fun0006;
case 147:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var7 = 46;
                    var7 = var9[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = {};
                    var9 = _closure1_slot12;
                    var9 = var9.GUILD;
                    var7['streamType'] = var9;
                    var9 = _closure2_slot0;
                    var10 = var9.user_id;
                    var7['ownerId'] = var10;
                    var10 = var9.guild_id;
                    var7['guildId'] = var10;
                    var9 = var9.channel_id;
                    var7['channelId'] = var9;
                    var7 = var8.bind(var1)(var7);
                    _fun0006_ip = 153; continue _fun0006;
case 145:
                    var7 = _closure1_slot16;
                    var9 = var7.bind(var1)();
                    var8 = var9.then;
                    var7 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 12;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.getRootNavigationRef;
                            var6 = var3.bind(var4)();
                            var3 = null;
                            if(!(var3 != var6)) { _fun0008_ip = 163; continue _fun0008 }
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
case 163:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var2 = 38;
                            var2 = var6[var2];
                            var3 = var5.bind(var1)(var2);
                            var2 = {};
                            var4 = _closure2_slot0;
                            var4 = var4.user_id;
                            var2['userId'] = var4;
                            var4 = 39;
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
                    var7 = var8.bind(var9)(var7);
                    _fun0006_ip = 153; continue _fun0006;
case 143:
                    var7 = _closure1_slot16;
                    var9 = var7.bind(var1)();
                    var8 = var9.then;
                    var7 = function() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var1 = 41;
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
                            var4 = 33;
                            var5 = var7[var4];
                            var11 = var13.bind(var1)(var5);
                            var9 = var11.track;
                            var5 = _closure1_slot9;
                            var8 = var5.RING_CALL_ACCEPTED;
                            var5 = {};
                            var10 = 39;
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
                            if(!var5) { _fun0009_ip = 164; continue _fun0009 }
case 165:
                            var5 = _closure2_slot0;
                            var5 = var5.is_fullscreen_call_ui;
                            if(!var5) { _fun0009_ip = 166; continue _fun0009 }
case 167:
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
case 166:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var3 = 45;
                            var3 = var5[var3];
                            var3 = var4.bind(var1)(var3);
                            var2 = _closure2_slot0;
                            var2 = var2.channel_id;
                            var2 = var3.bind(var1)(var2);
case 164:
                            return var1;
                        }
                    };
                    var7 = var8.bind(var9)(var7);
                    _fun0006_ip = 153; continue _fun0006;
case 141:
                    var7 = _closure1_slot16;
                    var9 = var7.bind(var1)();
                    var8 = var9.then;
                    var7 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 41;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.transitionToChannel;
                        var2 = _closure2_slot0;
                        var2 = var2.channel_id;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var7 = var8.bind(var9)(var7);
                    _fun0006_ip = 153; continue _fun0006;
case 139:
                    var7 = global;
                    var8 = var7.Number;
                    var7 = _closure2_slot0;
                    var7 = var7.rel_type;
                    var8 = var8.bind(var1)(var7);
                    var7 = _closure1_slot10;
                    var7 = var7.PENDING_INCOMING;
                    if(!(var8 !== var7)) { _fun0006_ip = 168; continue _fun0006 }
case 169:
                    var7 = _closure1_slot10;
                    var7 = var7.FRIEND;
                    if(!(var8 !== var7)) { _fun0006_ip = 170; continue _fun0006 }
case 171:
                    var7 = _closure2_slot0;
                    var8 = var7.notification_type;
                    var7 = _closure1_slot8;
                    var7 = var7.REMINDER;
                    if(!(var8 === var7)) { _fun0006_ip = 153; continue _fun0006 }
case 172:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var7 = 12;
                    var7 = var9[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = var8.getRootNavigationRef;
                    var10 = var7.bind(var8)();
                    if(!(var5 != var10)) { _fun0006_ip = 153; continue _fun0006 }
case 173:
                    var9 = var10.navigate;
                    var8 = {};
                    var7 = 'requests';
                    var8['screen'] = var7;
                    var7 = 'friends';
                    var7 = var9.bind(var10)(var7, var8);
                    _fun0006_ip = 153; continue _fun0006;
case 170:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var7 = 40;
                    var7 = var9[var7];
                    var9 = var8.bind(var1)(var7);
                    var8 = var9.openPrivateChannel;
                    var7 = {};
                    var10 = _closure2_slot0;
                    var10 = var10.user_id;
                    var7['recipientIds'] = var10;
                    var7 = var8.bind(var9)(var7);
                    _fun0006_ip = 153; continue _fun0006;
case 168:
                    var7 = _closure1_slot16;
                    var9 = var7.bind(var1)();
                    var8 = var9.then;
                    var7 = function() {
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var1 = 35;
                        var3 = var6[var1];
                        var1 = undefined;
                        var5 = var7.bind(var1)(var3);
                        var4 = var5.transitionTo;
                        var3 = _closure1_slot11;
                        var3 = var3.NOTIFICATIONS;
                        var3 = var4.bind(var5)(var3);
                        var4 = _closure1_slot2;
                        var3 = 36;
                        var3 = var6[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.setTab;
                        var3 = 37;
                        var3 = var6[var3];
                        var3 = var7.bind(var1)(var3);
                        var3 = var3.NotificationCenterTabs;
                        var3 = var3.ForYou;
                        var3 = var4.bind(var5)(var3);
                        var5 = _closure1_slot1;
                        var2 = 38;
                        var2 = var6[var2];
                        var3 = var5.bind(var1)(var2);
                        var2 = {};
                        var4 = _closure2_slot0;
                        var4 = var4.user_id;
                        var2['userId'] = var4;
                        var4 = 39;
                        var4 = var6[var4];
                        var4 = var5.bind(var1)(var4);
                        var5 = var4.PUSH_NOTIFICATION;
                        var4 = new Array(1);
                        var4[0] = var5;
                        var2['sourceAnalyticsLocations'] = var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var7 = var8.bind(var9)(var7);
                    _fun0006_ip = 153; continue _fun0006;
case 138:
                    var7 = _closure1_slot16;
                    var8 = var7.bind(var1)();
                    var7 = var8.then;
                    var4 = function() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 35;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.transitionTo;
                        var7 = _closure1_slot11;
                        var6 = var7.CHANNEL;
                        var2 = _closure2_slot0;
                        var3 = var2.guild_id;
                        var2 = var2.channel_id;
                        var3 = var6.bind(var7)(var3, var2);
                        var2 = {'navigationReplace': true, 'openChannel': true};
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var4 = var7.bind(var8)(var4);
                    _fun0006_ip = 153; continue _fun0006;
case 136:
                    var4 = _closure2_slot0;
                    var4 = var4.message;
                    if(!(var5 != var4)) { _fun0006_ip = 174; continue _fun0006 }
case 175:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var6];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.dispatch;
                    var4 = {'type': 'MESSAGE_CREATE', 'channelId': null, 'message': null, 'optimistic': true, 'isPushNotification': true};
                    var7 = _closure2_slot0;
                    var8 = var7.message;
                    var8 = var8.channel_id;
                    var4['channelId'] = var8;
                    var7 = var7.message;
                    var4['message'] = var7;
                    var4 = var5.bind(var6)(var4);
case 174:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 34;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.popAll;
                    var4 = var4.bind(var5)();
                    var5 = _closure1_slot0;
                    var4 = 35;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.transitionTo;
                    var8 = _closure1_slot11;
                    var7 = var8.CHANNEL;
                    var2 = _closure2_slot0;
                    var6 = var2.guild_id;
                    var3 = var2.channel_id;
                    var2 = var2.message_id;
                    var3 = var7.bind(var8)(var6, var3, var2);
                    var2 = {'navigationReplace': true, 'openChannel': true};
                    var2 = var4.bind(var5)(var3, var2);
case 153:
                    return var1;
                }
            };
            var2 = var2.bind(var3)();
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
    var4 = 51;
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
            if(!(var5 != var1)) { _fun0010_ip = 176; continue _fun0010 }
case 177:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 19;
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
            var1 = 20;
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
case 109:
            var7 = _closure1_slot7;
            var1 = var7.getId;
            var1 = var1.bind(var7)();
            if(!(var5 != var1)) { _fun0010_ip = 62; continue _fun0010 }
case 178:
            var5 = var3.receiving_user_id;
            var7 = _closure1_slot7;
            var1 = var7.getId;
            var1 = var1.bind(var7)();
            if(!(var5 === var1)) { _fun0010_ip = 115; continue _fun0010 }
case 62:
            var5 = _closure1_slot1;
            var7 = _closure1_slot3;
            var1 = 24;
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
            _fun0010_ip = 179; continue _fun0010;
case 115:
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var4 = 21;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = 22;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = 23;
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
                var1 = 24;
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
case 179:
            return var1;
case 176:
            var1 = false;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();