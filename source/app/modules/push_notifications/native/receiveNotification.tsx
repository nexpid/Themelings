// app/modules/push_notifications/native/receiveNotification.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = native4;
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 145; continue _fun0001 }
 10:
                    var6 = arg1;
                    var5 = arg2;
                    var2 = _closure1_slot16;
                    var3 = undefined;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=33);
 31:
                    return var2;
 33:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 142; continue _fun0001 }
 39: // try_start_0
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
 82:
                    return var5;
 84:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 126; continue _fun0001 }
 90:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var6 = var6[var8];
                    var9 = var7.bind(var3)(var6);
                    var8 = var9.navigateToStage;
                    var7 = null;
                    var6 = false;
                    var6 = var8.bind(var9)(var5, var7, var6);
 124: // try_end0
                    _fun0001_ip = 139; continue _fun0001;
 126:
                    return var5;
 129: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot15;
                    var4 = var4.bind(var3)();
 139:
                    return var3;
 142:
                    return var2;
 145:
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
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 51; continue _fun0002 }
 10:
                    var5 = _closure1_slot17;
                    var4 = var2.guild_id;
                    var2 = var2.channel_id;
                    var3 = undefined;
                    var2 = var5.bind(var3)(var4, var2);
                    SaveGenerator(address=39);
 37:
                    return var2;
 39:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 48; continue _fun0002 }
 45:
                    return var3;
 48:
                    return var2;
 51:
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
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 472; continue _fun0003 }
 13:
                    var5 = var2.guild_scheduled_event_entity_type;
                    var4 = _closure1_slot13;
                    var4 = var4.STAGE_INSTANCE;
                    if(!(var4 !== var5)) { _fun0003_ip = 412; continue _fun0003 }
 41:
                    var4 = _closure1_slot13;
                    var4 = var4.VOICE;
                    if(!(var4 !== var5)) { _fun0003_ip = 217; continue _fun0003 }
 58:
                    var4 = _closure1_slot13;
                    var4 = var4.EXTERNAL;
                    if(!(var4 === var5)) { _fun0003_ip = 206; continue _fun0003 }
 75:
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
 129:
                    return var4;
 131:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0003_ip = 214; continue _fun0003 }
 137:
                    var7 = _closure1_slot6;
                    var6 = var7.getGuildScheduledEvent;
                    var9 = var6.bind(var7)(var8);
                    var6 = null;
                    if(!(var6 != var9)) { _fun0003_ip = 211; continue _fun0003 }
 158:
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
 206:
                    var6 = undefined;
                    return var6;
 211:
                    return var5;
 214:
                    return var4;
 217:
                    var7 = var2.channel_id;
                    var4 = null;
                    if(!(var4 != var7)) { _fun0003_ip = 289; continue _fun0003 }
 228:
                    var4 = _closure1_slot16;
                    var8 = undefined;
                    var5 = var4.bind(var8)();
                    SaveGenerator(address=242);
 240:
                    return var5;
 242:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 286; continue _fun0003 }
 248:
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var4 = 13;
                    var4 = var9[var4];
                    var6 = var6.bind(var8)(var4);
                    var4 = var6.selectVoiceChannel;
                    var4 = var4.bind(var6)(var7);
                    var4 = undefined;
                    _fun0003_ip = 409; continue _fun0003;
 286:
                    return var5;
 289:
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
 409:
                    return var4;
 412:
                    var6 = var2.channel_id;
                    var4 = null;
                    if(!(var4 != var6)) { _fun0003_ip = 457; continue _fun0003 }
 423:
                    var5 = _closure1_slot17;
                    var4 = var2.guild_id;
                    var2 = undefined;
                    var4 = var5.bind(var2)(var4, var6);
                    SaveGenerator(address=444);
 442:
                    return var4;
 444:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 454; continue _fun0003 }
 450:
                    var2 = undefined;
                    _fun0003_ip = 469; continue _fun0003;
 454:
                    return var4;
 457:
                    var4 = _closure1_slot15;
                    var3 = undefined;
                    var4 = var4.bind(var3)();
                    var2 = undefined;
 469:
                    return var2;
 472:
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
 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 359; continue _fun0004 }
 13:
                    var2 = 'notification_center_id';
                    var3 = var2 in var6;
                    var2 = null;
                    var9 = null;
                    if(!var3) { _fun0004_ip = 34; continue _fun0004 }
 28:
                    var9 = var6.notification_center_id;
 34:
                    var3 = 'since';
                    var3 = var3 in var6;
                    var5 = null;
                    if(!var3) { _fun0004_ip = 53; continue _fun0004 }
 47:
                    var5 = var6.since;
 53:
                    var4 = var6.type;
                    var3 = 'RELATIONSHIP_ADD';
                    if(!(var3 === var4)) { _fun0004_ip = 108; continue _fun0004 }
 66:
                    var3 = global;
                    var8 = var3.Number;
                    var4 = var6.rel_type;
                    var7 = undefined;
                    var10 = var8.bind(var7)(var4);
                    var8 = _closure1_slot10;
                    var8 = var8.PENDING_INCOMING;
                    if(!(var10 === var8)) { _fun0004_ip = 108; continue _fun0004 }
 104:
                    if(!(var2 == var5)) { _fun0004_ip = 177; continue _fun0004 }
 108:
                    if(!(var2 != var9)) { _fun0004_ip = 351; continue _fun0004 }
 115:
                    var2 = _closure1_slot16;
                    var10 = undefined;
                    var2 = var2.bind(var10)();
                    SaveGenerator(address=132);
 130:
                    return var2;
 132:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0004_ip = 174; continue _fun0004 }
 138:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var5 = 17;
                    var5 = var11[var5];
                    var8 = var8.bind(var10)(var5);
                    var5 = var8.markNotificationCenterRemoteItemAcked;
                    var5 = var5.bind(var8)(var9);
                    _fun0004_ip = 351; continue _fun0004;
 174:
                    return var2;
 177:
                    var2 = _closure1_slot16;
                    var2 = var2.bind(var7)();
                    SaveGenerator(address=189);
 187:
                    return var2;
 189:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 356; continue _fun0004 }
 198:
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
 351:
                    var3 = undefined;
                    return var3;
 356:
                    return var2;
 359:
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
 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var1 = var4.type;
            var3 = 'MESSAGE_CREATE';
            if(!(var3 !== var1)) { _fun0005_ip = 772; continue _fun0005 }
 25:
            var6 = var4.type;
            var5 = 'GENERIC_PUSH_NOTIFICATION_SENT';
            var1 = false;
            if(!(var5 === var6)) { _fun0005_ip = 720; continue _fun0005 }
 45:
            var5 = var4.deeplink;
            var10 = null;
            var5 = var10 != var5;
            var1 = false;
            if(!var5) { _fun0005_ip = 720; continue _fun0005 }
 65:
            var6 = var4.deeplink;
            var5 = '';
            var1 = false;
            if(!(var5 !== var6)) { _fun0005_ip = 720; continue _fun0005 }
 84:
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
            if(!(var11 !== var9)) { _fun0005_ip = 553; continue _fun0005 }
 166:
            var11 = var5.type;
            var12 = _closure1_slot0;
            var9 = _closure1_slot3;
            var9 = var9[var13];
            var9 = var12.bind(var8)(var9);
            var9 = var9.LinkingTypes;
            var9 = var9.ICYMI;
            if(!(var11 === var9)) { _fun0005_ip = 226; continue _fun0005 }
 204:
            var9 = var4.channel_id;
            if(!(var10 != var9)) { _fun0005_ip = 226; continue _fun0005 }
 213:
            var9 = var4.message_id;
            if(!(var10 == var9)) { _fun0005_ip = 503; continue _fun0005 }
 226:
            var11 = var5.type;
            var12 = _closure1_slot0;
            var9 = _closure1_slot3;
            var9 = var9[var13];
            var9 = var12.bind(var8)(var9);
            var9 = var9.LinkingTypes;
            var9 = var9.ICYMI;
            var1 = false;
            if(!(var11 === var9)) { _fun0005_ip = 720; continue _fun0005 }
 269:
            var9 = var4.user_id;
            var9 = var10 != var9;
            var1 = false;
            if(!var9) { _fun0005_ip = 720; continue _fun0005 }
 287:
            var9 = var4.notification_center_id;
            var9 = var10 != var9;
            var1 = false;
            if(!var9) { _fun0005_ip = 720; continue _fun0005 }
 305:
            var9 = var4.status_emoji_id;
            var9 = var10 != var9;
            var11 = null;
            if(!var9) { _fun0005_ip = 344; continue _fun0005 }
 320:
            var12 = var4.status_emoji_id;
            var9 = '0';
            var11 = null;
            if(!(var9 !== var12)) { _fun0005_ip = 344; continue _fun0005 }
 338:
            var11 = var4.status_emoji_id;
 344:
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
            _fun0005_ip = 720; continue _fun0005;
 503:
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
            _fun0005_ip = 720; continue _fun0005;
 553:
            var7 = var10 == var4;
            var12 = undefined;
            if(var7) { _fun0005_ip = 568; continue _fun0005 }
 562:
            var12 = var4.tracking_type;
 568:
            if(!(var10 == var12)) { _fun0005_ip = 577; continue _fun0005 }
 572:
            var12 = var4.type;
 577:
            var7 = var10 != var12;
            if(!var7) { _fun0005_ip = 593; continue _fun0005 }
 584:
            var9 = var5.messageId;
            var7 = var10 != var9;
 593:
            if(!var7) { _fun0005_ip = 605; continue _fun0005 }
 596:
            var9 = var5.channelId;
            var7 = var10 != var9;
 605:
            if(!var7) { _fun0005_ip = 651; continue _fun0005 }
 608:
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var7 = 27;
            var7 = var10[var7];
            var11 = var9.bind(var8)(var7);
            var10 = var11.receivedNotification;
            var9 = var5.messageId;
            var7 = var5.channelId;
            var7 = var10.bind(var11)(var9, var7, var12);
 651:
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
 720:
            var7 = _closure1_slot14;
            var6 = var7.log;
            var9 = var4.type;
            var5 = global;
            var5 = var5.HermesInternal;
            var8 = var5.concat;
            var5 = 'Notification clicked of type ';
            var5 = var8.bind(var5)(var9);
            var5 = var6.bind(var7)(var5);
            _fun0005_ip = 924; continue _fun0005;
 772:
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
 924:
            var4 = var4.type;
            if(!(var3 !== var4)) { _fun0005_ip = 1011; continue _fun0005 }
 933:
            var3 = 'FORUM_THREAD_CREATED';
            if(!(var3 !== var4)) { _fun0005_ip = 1011; continue _fun0005 }
 941:
            var3 = 'RELATIONSHIP_ADD';
            if(!(var3 !== var4)) { _fun0005_ip = 1011; continue _fun0005 }
 949:
            var3 = 'CALL_RING';
            if(!(var3 !== var4)) { _fun0005_ip = 1011; continue _fun0005 }
 957:
            var3 = 'CALL_CONNECT';
            if(!(var3 !== var4)) { _fun0005_ip = 1011; continue _fun0005 }
 965:
            var3 = 'FRIEND_SUGGESTION_CREATE';
            if(!(var3 !== var4)) { _fun0005_ip = 1011; continue _fun0005 }
 973:
            var3 = 'STAGE_INSTANCE_CREATE';
            if(!(var3 !== var4)) { _fun0005_ip = 1011; continue _fun0005 }
 981:
            var3 = 'GUILD_SCHEDULED_EVENT_UPDATE';
            if(!(var3 !== var4)) { _fun0005_ip = 1011; continue _fun0005 }
 989:
            var3 = 'GUILD_STREAM_START';
            if(!(var3 !== var4)) { _fun0005_ip = 1011; continue _fun0005 }
 999:
            var3 = 'GENERIC_PUSH_NOTIFICATION_SENT';
            if(!(var3 !== var4)) { _fun0005_ip = 1011; continue _fun0005 }
 1009:
            return var1;
 1011:
            var3 = function dispatch() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
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
                    if(var7) { _fun0006_ip = 105; continue _fun0006 }
 98:
                    var7 = var11.type;
                    _fun0006_ip = 111; continue _fun0006;
 105:
                    var7 = var11.tracking_type;
 111:
                    var4['notif_type'] = var7;
                    var11 = _closure2_slot0;
                    var7 = 'user_id';
                    var12 = var7 in var11;
                    var7 = null;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 145; continue _fun0006 }
 135:
                    var12 = _closure2_slot0;
                    var11 = var12.user_id;
 145:
                    var4['notif_user_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'message_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 177; continue _fun0006 }
 167:
                    var12 = _closure2_slot0;
                    var11 = var12.message_id;
 177:
                    var4['message_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'message_type_';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 213; continue _fun0006 }
 201:
                    var12 = _closure2_slot0;
                    var11 = var12.message_type_;
 213:
                    var4['message_type'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'message';
                    var11 = var11 in var12;
                    if(!var11) { _fun0006_ip = 246; continue _fun0006 }
 233:
                    var12 = _closure2_slot0;
                    var12 = var12.message;
                    var11 = var7 != var12;
 246:
                    var4['has_message'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'guild_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 279; continue _fun0006 }
 270:
                    var12 = _closure2_slot0;
                    var11 = var12.guild_id;
 279:
                    var4['guild_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'channel_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 309; continue _fun0006 }
 300:
                    var12 = _closure2_slot0;
                    var11 = var12.channel_id;
 309:
                    var4['channel_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'channel_type';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 340; continue _fun0006 }
 330:
                    var12 = _closure2_slot0;
                    var11 = var12.channel_type;
 340:
                    var4['channel_type'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'rel_type';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 385; continue _fun0006 }
 362:
                    var12 = global;
                    var13 = var12.Number;
                    var12 = _closure2_slot0;
                    var12 = var12.rel_type;
                    var11 = var13.bind(var1)(var12);
 385:
                    var4['rel_type'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'notification_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 417; continue _fun0006 }
 407:
                    var12 = _closure2_slot0;
                    var11 = var12.notification_id;
 417:
                    var4['notification_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'image_url';
                    var11 = var11 in var12;
                    if(!var11) { _fun0006_ip = 451; continue _fun0006 }
 437:
                    var12 = _closure2_slot0;
                    var12 = var12.image_url;
                    var11 = var7 != var12;
 451:
                    var4['has_image_thumbnail'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'join_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 485; continue _fun0006 }
 475:
                    var12 = _closure2_slot0;
                    var11 = var12.join_id;
 485:
                    var4['join_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'notif_instance_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 517; continue _fun0006 }
 507:
                    var12 = _closure2_slot0;
                    var11 = var12.notif_instance_id;
 517:
                    var4['notif_instance_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'notif_type_id';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 549; continue _fun0006 }
 539:
                    var12 = _closure2_slot0;
                    var11 = var12.notif_type_id;
 549:
                    var4['notif_type_id'] = var11;
                    var12 = _closure2_slot0;
                    var11 = 'mention_type';
                    var12 = var11 in var12;
                    var11 = null;
                    if(!var12) { _fun0006_ip = 581; continue _fun0006 }
 571:
                    var12 = _closure2_slot0;
                    var11 = var12.mention_type;
 581:
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
                    if(!(var4 !== var8)) { _fun0006_ip = 1331; continue _fun0006 }
 624:
                    var4 = 'FORUM_THREAD_CREATED';
                    if(!(var4 !== var8)) { _fun0006_ip = 1286; continue _fun0006 }
 635:
                    var4 = 'RELATIONSHIP_ADD';
                    if(!(var4 !== var8)) { _fun0006_ip = 1053; continue _fun0006 }
 646:
                    var4 = 'CALL_RING';
                    if(!(var4 !== var8)) { _fun0006_ip = 1023; continue _fun0006 }
 657:
                    var4 = 'CALL_CONNECT';
                    if(!(var4 !== var8)) { _fun0006_ip = 993; continue _fun0006 }
 668:
                    var4 = 'FRIEND_SUGGESTION_CREATE';
                    if(!(var4 !== var8)) { _fun0006_ip = 963; continue _fun0006 }
 679:
                    var4 = 'GUILD_STREAM_START';
                    if(!(var4 !== var8)) { _fun0006_ip = 883; continue _fun0006 }
 692:
                    var4 = 'GUILD_SCHEDULED_EVENT_UPDATE';
                    if(!(var4 !== var8)) { _fun0006_ip = 859; continue _fun0006 }
 703:
                    var4 = 'STAGE_INSTANCE_CREATE';
                    if(!(var4 !== var8)) { _fun0006_ip = 835; continue _fun0006 }
 714:
                    var4 = 'GENERIC_PUSH_NOTIFICATION_SENT';
                    if(!(var4 === var8)) { _fun0006_ip = 1597; continue _fun0006 }
 727:
                    var4 = _closure2_slot0;
                    var4 = var4.deeplink;
                    if(!(var7 != var4)) { _fun0006_ip = 1597; continue _fun0006 }
 744:
                    var4 = _closure2_slot0;
                    var8 = var4.deeplink;
                    var4 = '';
                    if(!(var4 !== var8)) { _fun0006_ip = 1597; continue _fun0006 }
 765:
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
                    _fun0006_ip = 1597; continue _fun0006;
 835:
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
                    _fun0006_ip = 1597; continue _fun0006;
 859:
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
                    _fun0006_ip = 1597; continue _fun0006;
 883:
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
                    _fun0006_ip = 1597; continue _fun0006;
 963:
                    var4 = _closure1_slot16;
                    var9 = var4.bind(var1)();
                    var8 = var9.then;
                    var4 = function() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 36;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.getRootNavigationRef;
                            var6 = var3.bind(var4)();
                            var3 = null;
                            if(!(var3 != var6)) { _fun0007_ip = 86; continue _fun0007 }
 41:
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
 86:
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
                    _fun0006_ip = 1597; continue _fun0006;
 993:
                    var4 = _closure1_slot16;
                    var9 = var4.bind(var1)();
                    var8 = var9.then;
                    var4 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
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
                            if(!var5) { _fun0008_ip = 360; continue _fun0008 }
 222:
                            var5 = _closure2_slot0;
                            var5 = var5.is_fullscreen_call_ui;
                            if(!var5) { _fun0008_ip = 326; continue _fun0008 }
 237:
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
 326:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var3 = 45;
                            var3 = var5[var3];
                            var3 = var4.bind(var1)(var3);
                            var2 = _closure2_slot0;
                            var2 = var2.channel_id;
                            var2 = var3.bind(var1)(var2);
 360:
                            return var1;
                        }
                    };
                    var4 = var8.bind(var9)(var4);
                    _fun0006_ip = 1597; continue _fun0006;
 1023:
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
                    _fun0006_ip = 1597; continue _fun0006;
 1053:
                    var4 = global;
                    var8 = var4.Number;
                    var4 = _closure2_slot0;
                    var4 = var4.rel_type;
                    var8 = var8.bind(var1)(var4);
                    var4 = _closure1_slot10;
                    var4 = var4.PENDING_INCOMING;
                    if(!(var8 !== var4)) { _fun0006_ip = 1256; continue _fun0006 }
 1093:
                    var4 = _closure1_slot10;
                    var4 = var4.FRIEND;
                    if(!(var8 !== var4)) { _fun0006_ip = 1203; continue _fun0006 }
 1107:
                    var4 = _closure2_slot0;
                    var8 = var4.notification_type;
                    var4 = _closure1_slot8;
                    var4 = var4.REMINDER;
                    if(!(var8 === var4)) { _fun0006_ip = 1597; continue _fun0006 }
 1134:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var4 = 36;
                    var4 = var9[var4];
                    var8 = var8.bind(var1)(var4);
                    var4 = var8.getRootNavigationRef;
                    var10 = var4.bind(var8)();
                    if(!(var7 != var10)) { _fun0006_ip = 1597; continue _fun0006 }
 1171:
                    var9 = var10.navigate;
                    var8 = {};
                    var4 = 'requests';
                    var8['screen'] = var4;
                    var4 = 'friends';
                    var4 = var9.bind(var10)(var4, var8);
                    _fun0006_ip = 1597; continue _fun0006;
 1203:
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
                    _fun0006_ip = 1597; continue _fun0006;
 1256:
                    var4 = _closure1_slot16;
                    var8 = var4.bind(var1)();
                    var4 = var8.then;
                    var3 = function() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
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
                            if(var8) { _fun0009_ip = 149; continue _fun0009 }
 85:
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
                            _fun0009_ip = 233; continue _fun0009;
 149:
                            var3 = var3.ME;
                            var3 = var6.bind(var7)(var3);
                            var3 = 36;
                            var3 = var5[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.getRootNavigationRef;
                            var6 = var3.bind(var4)();
                            var3 = null;
                            if(!(var3 != var6)) { _fun0009_ip = 233; continue _fun0009 }
 188:
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
 233:
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
                    _fun0006_ip = 1597; continue _fun0006;
 1286:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 34;
                    var3 = var8[var3];
                    var8 = var4.bind(var1)(var3);
                    var4 = var8.transitionToChannel;
                    var3 = _closure2_slot0;
                    var3 = var3.channel_id;
                    var3 = var4.bind(var8)(var3);
                    _fun0006_ip = 1597; continue _fun0006;
 1331:
                    var3 = _closure2_slot0;
                    var3 = var3.message;
                    if(!(var7 != var3)) { _fun0006_ip = 1416; continue _fun0006 }
 1344:
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
 1416:
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
                    if(!var9) { _fun0006_ip = 1560; continue _fun0006 }
 1557:
                    var7 = var8;
 1560:
                    var2['guildId'] = var7;
                    var6 = _closure2_slot0;
                    var7 = var6.channel_id;
                    var2['channelId'] = var7;
                    var6 = var6.message_id;
                    var2['messageId'] = var6;
                    var2['isInitialSetup'] = var5;
                    var2 = var3.bind(var4)(var2);
 1597:
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
 0:
            var3 = arg1;
            var1 = var3.getData;
            var5 = null;
            if(!(var5 != var1)) { _fun0010_ip = 318; continue _fun0010 }
 20:
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
            if(!(var5 != var1)) { _fun0010_ip = 187; continue _fun0010 }
 145:
            var7 = _closure1_slot7;
            var1 = var7.getId;
            var1 = var1.bind(var7)();
            if(!(var5 != var1)) { _fun0010_ip = 187; continue _fun0010 }
 163:
            var5 = var3.receiving_user_id;
            var7 = _closure1_slot7;
            var1 = var7.getId;
            var1 = var1.bind(var7)();
            if(!(var5 === var1)) { _fun0010_ip = 233; continue _fun0010 }
 187:
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
            _fun0010_ip = 316; continue _fun0010;
 233:
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
 316:
            return var1;
 318:
            var1 = false;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();