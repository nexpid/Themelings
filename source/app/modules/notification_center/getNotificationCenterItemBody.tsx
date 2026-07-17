// app/modules/notification_center/getNotificationCenterItemBody.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function escapeMarkdown(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = undefined;
            if(!(var1 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            return var1;
case 2:
            var3 = var4.replace;
            var2 = _closure1_slot10;
            var1 = '\\$&';
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function getFriendRequestItemBody(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var7 = var1.username;
            var2 = var1.applicationId;
            var _closure2_slot0 = var2;
            var3 = var1.renderApplication;
            var _closure2_slot1 = var3;
            var5 = var1.withApplication;
            var4 = var1.withDefault;
            var1 = null;
            if(!(var1 == var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.intl;
            var2 = var3.format;
            var1 = {};
            var1['username'] = var7;
            var1 = var2.bind(var3)(var4, var1);
            _fun0002_ip = 6; continue _fun0002;
case 4:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var4 = var2.intl;
            var3 = var4.format;
            var2 = {};
            var2['username'] = var7;
            var6 = function applicationName() {
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2['applicationName'] = var6;
            var1 = var3.bind(var4)(var5, var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var4 = 0;
    var8 = var6[var4];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildEventEnded;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
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
    var7 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot8 = var7;
    var4 = var4.RelationshipTypes;
    var _closure1_slot9 = var4;
    var4 = /[\\`*_~|<>[\]:]/g;
    var _closure1_slot10 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notification_center/getNotificationCenterItemBody.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getNotificationCenterItemBody(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.item;
            var7 = var1.renderApplication;
            var _closure2_slot0 = var7;
            var8 = undefined;
            var _closure2_slot1 = var8;
            var1 = var2.other_user;
            var3 = null;
            var4 = var3 == var1;
            var6 = undefined;
            if(var4) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var6 = var1.id;
case 7:
            if(!(var3 == var6)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var6 = _closure1_slot8;
case 9:
            var5 = _closure1_slot11;
            var10 = _closure1_slot1;
            var4 = _closure1_slot2;
            var9 = 6;
            var4 = var4[var9];
            var11 = var10.bind(var8)(var4);
            var10 = var11.getName;
            var13 = _closure1_slot7;
            var12 = var13.getUser;
            var15 = var2.other_user;
            var16 = var3 == var15;
            var4 = undefined;
            if(var16) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var4 = var15.id;
case 11:
            var4 = var12.bind(var13)(var4);
            var4 = var10.bind(var11)(var4);
            var11 = var5.bind(var8)(var4);
            var10 = var2.applicationId;
            _closure2_slot1 = var10;
            var5 = var2.type;
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var13 = 7;
            var4 = var4[var13];
            var4 = var12.bind(var8)(var4);
            var4 = var4.NotificationCenterLocalItems;
            var4 = var4.FRIEND_REQUESTS_GROUPED;
            if(!(var4 !== var5)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var13];
            var4 = var12.bind(var8)(var4);
            var4 = var4.NotificationCenterLocalItems;
            var4 = var4.MOBILE_NATIVE_UPDATE_AVAILABLE;
            if(!(var4 !== var5)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var13];
            var4 = var12.bind(var8)(var4);
            var4 = var4.NotificationCenterItems;
            var4 = var4.FRIEND_SUGGESTION_CREATED;
            if(!(var4 !== var5)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var13];
            var4 = var12.bind(var8)(var4);
            var4 = var4.NotificationCenterItems;
            var4 = var4.GUILD_SCHEDULED_EVENT_STARTED;
            if(!(var4 !== var5)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var13];
            var4 = var12.bind(var8)(var4);
            var4 = var4.NotificationCenterLocalItems;
            var4 = var4.INCOMING_FRIEND_REQUESTS;
            if(!(var4 !== var5)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var13];
            var4 = var12.bind(var8)(var4);
            var4 = var4.NotificationCenterLocalItems;
            var4 = var4.INCOMING_FRIEND_REQUESTS_ACCEPTED;
            if(!(var4 !== var5)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var13];
            var4 = var12.bind(var8)(var4);
            var4 = var4.NotificationCenterItems;
            var4 = var4.FRIEND_REQUEST_ACCEPTED;
            if(!(var4 !== var5)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var13];
            var4 = var12.bind(var8)(var4);
            var4 = var4.NotificationCenterLocalItems;
            var4 = var4.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
            if(!(var4 !== var5)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var13];
            var4 = var12.bind(var8)(var4);
            var4 = var4.NotificationCenterLocalItems;
            var4 = var4.INCOMING_GAME_FRIEND_REQUESTS;
            if(!(var4 !== var5)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var13];
            var4 = var12.bind(var8)(var4);
            var4 = var4.NotificationCenterItems;
            var4 = var4.GAME_FRIEND_REQUEST_ACCEPTED;
            if(!(var4 !== var5)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var5 = var2.body;
            var12 = var3 != var5;
            var4 = '';
            if(!var12) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var4 = var5;
case 33:
            return var4;
case 31:
            if(!(var3 != var10)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var5 = _closure1_slot0;
            var15 = _closure1_slot2;
            var4 = 5;
            var12 = var15[var4];
            var12 = var5.bind(var8)(var12);
            var13 = var12.intl;
            var12 = var13.format;
            var4 = var15[var4];
            var4 = var5.bind(var8)(var4);
            var4 = var4.t;
            var5 = var4.Wi64vN;
            var4 = {};
            var4['username'] = var11;
            var15 = function applicationName() {
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var4['applicationName'] = var15;
            var4 = var12.bind(var13)(var5, var4);
            _fun0003_ip = 37; continue _fun0003;
case 35:
            var4 = var2.body;
case 37:
            return var4;
case 29:
            var5 = _closure1_slot1;
            var15 = _closure1_slot2;
            var4 = 9;
            var4 = var15[var4];
            var12 = var5.bind(var8)(var4);
            var5 = var3 != var10;
            var16 = var2.type;
            var4 = global;
            var4 = var4.HermesInternal;
            var13 = var4.concat;
            var4 = 'Expected application id for ';
            var4 = var13.bind(var4)(var16);
            var4 = var12.bind(var8)(var5, var4);
            var5 = _closure1_slot0;
            var4 = 5;
            var12 = var15[var4];
            var12 = var5.bind(var8)(var12);
            var13 = var12.intl;
            var12 = var13.format;
            var4 = var15[var4];
            var4 = var5.bind(var8)(var4);
            var4 = var4.t;
            var5 = var4["7cqOLI"];
            var4 = {};
            var4['username'] = var11;
            var15 = function applicationName() {
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var4['applicationName'] = var15;
            var4 = var12.bind(var13)(var5, var4);
            return var4;
case 27:
            var5 = _closure1_slot1;
            var15 = _closure1_slot2;
            var4 = 9;
            var4 = var15[var4];
            var12 = var5.bind(var8)(var4);
            var5 = var3 != var10;
            var16 = var2.type;
            var4 = global;
            var4 = var4.HermesInternal;
            var13 = var4.concat;
            var4 = 'Expected application id for ';
            var4 = var13.bind(var4)(var16);
            var4 = var12.bind(var8)(var5, var4);
            var5 = _closure1_slot0;
            var4 = 5;
            var12 = var15[var4];
            var12 = var5.bind(var8)(var12);
            var13 = var12.intl;
            var12 = var13.format;
            var4 = var15[var4];
            var4 = var5.bind(var8)(var4);
            var4 = var4.t;
            var5 = var4.BB/0vn;
            var4 = {};
            var4['username'] = var11;
            var14 = function applicationName() {
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var4['applicationName'] = var14;
            var4 = var12.bind(var13)(var5, var4);
            return var4;
case 25:
            var5 = _closure1_slot12;
            var4 = {};
            var4['username'] = var11;
            var4['applicationId'] = var10;
            var4['renderApplication'] = var7;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 5;
            var15 = var14[var12];
            var15 = var13.bind(var8)(var15);
            var15 = var15.t;
            var15 = var15.jXlYiF;
            var4['withApplication'] = var15;
            var12 = var14[var12];
            var12 = var13.bind(var8)(var12);
            var12 = var12.t;
            var12 = var12.McYRBk;
            var4['withDefault'] = var12;
            var4 = var5.bind(var8)(var4);
            return var4;
case 23:
            var5 = _closure1_slot12;
            var4 = {};
            var4['username'] = var11;
            var4['applicationId'] = var10;
            var4['renderApplication'] = var7;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 5;
            var15 = var14[var12];
            var15 = var13.bind(var8)(var15);
            var15 = var15.t;
            var15 = var15.nnC1q9;
            var4['withApplication'] = var15;
            var12 = var14[var12];
            var12 = var13.bind(var8)(var12);
            var12 = var12.t;
            var12 = var12["5Uzkdp"];
            var4['withDefault'] = var12;
            var4 = var5.bind(var8)(var4);
            return var4;
case 21:
            var5 = _closure1_slot12;
            var4 = {};
            var4['username'] = var11;
            var4['applicationId'] = var10;
            var4['renderApplication'] = var7;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 5;
            var13 = var12[var7];
            var13 = var10.bind(var8)(var13);
            var13 = var13.t;
            var13 = var13["9Dgf1L"];
            var4['withApplication'] = var13;
            var7 = var12[var7];
            var7 = var10.bind(var8)(var7);
            var7 = var7.t;
            var7 = var7.uIomXw;
            var4['withDefault'] = var7;
            var4 = var5.bind(var8)(var4);
            return var4;
case 19:
            var10 = var2.guild_scheduled_event_id;
            var4 = var3 != var10;
            var7 = null;
            if(!var4) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var5 = _closure1_slot3;
            var4 = var5.getGuildScheduledEvent;
            var7 = var4.bind(var5)(var10);
case 38:
            var4 = var3 == var7;
            var14 = undefined;
            if(var4) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var14 = var7.name;
case 40:
            var10 = _closure1_slot5;
            var5 = var10.getGuild;
            var12 = var3 == var7;
            var4 = undefined;
            if(var12) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var4 = var7.guild_id;
case 42:
            var4 = var5.bind(var10)(var4);
            var5 = var3 == var4;
            var13 = undefined;
            if(var5) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var13 = var4.name;
case 44:
            var5 = _closure1_slot4;
            var10 = var3 != var7;
            var4 = undefined;
            if(!var10) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var4 = var7;
case 46:
            var4 = var5.bind(var8)(var4);
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var10 = 8;
            var5 = var5[var10];
            var7 = var7.bind(var8)(var5);
            var5 = var7.isNullOrEmpty;
            var5 = var5.bind(var7)(var13);
            if(var5) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var10];
            var7 = var7.bind(var8)(var5);
            var5 = var7.isNullOrEmpty;
            var5 = var5.bind(var7)(var14);
            if(var5) { _fun0003_ip = 48; continue _fun0003 }
case 50:
            if(!var4) { _fun0003_ip = 48; continue _fun0003 }
case 51:
            var5 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 5;
            var7 = var12[var4];
            var7 = var5.bind(var8)(var7);
            var10 = var7.intl;
            var7 = var10.format;
            var4 = var12[var4];
            var4 = var5.bind(var8)(var4);
            var4 = var4.t;
            var5 = var4.AyvfXR;
            var4 = {};
            var12 = _closure1_slot11;
            var14 = var12.bind(var8)(var14);
            var4['event_name'] = var14;
            var12 = var12.bind(var8)(var13);
            var4['guild_name'] = var12;
            var4 = var7.bind(var10)(var5, var4);
            _fun0003_ip = 52; continue _fun0003;
case 48:
            var7 = var2.body;
            var10 = var3 != var7;
            var5 = '';
            if(!var10) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var5 = var7;
case 53:
            var4 = var5;
case 52:
            return var4;
case 17:
            var5 = _closure1_slot6;
            var4 = var5.getRelationshipType;
            var5 = var4.bind(var5)(var6);
            var4 = _closure1_slot9;
            var4 = var4.PENDING_OUTGOING;
            if(!(var5 !== var4)) { _fun0003_ip = 55; continue _fun0003 }
case 56:
            var5 = var2.body;
            var6 = var3 != var5;
            var4 = '';
            if(!var6) { _fun0003_ip = 57; continue _fun0003 }
case 58:
            var4 = var5;
case 57:
            _fun0003_ip = 59; continue _fun0003;
case 55:
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 5;
            var7 = var12[var5];
            var7 = var6.bind(var8)(var7);
            var10 = var7.intl;
            var7 = var10.format;
            var5 = var12[var5];
            var5 = var6.bind(var8)(var5);
            var5 = var5.t;
            var6 = var5.gZVTy2;
            var5 = {};
            var5['user'] = var11;
            var4 = var7.bind(var10)(var6, var5);
case 59:
            return var4;
case 15:
            var7 = var2.local_id;
            var5 = var3 == var7;
            var4 = undefined;
            if(var5) { _fun0003_ip = 60; continue _fun0003 }
case 61:
            var6 = var7.split;
            var5 = '_';
            var6 = var6.bind(var7)(var5);
            var5 = var6.pop;
            var4 = var5.bind(var6)();
case 60:
            var5 = var3 != var4;
            var7 = 'unknown';
            if(!var5) { _fun0003_ip = 62; continue _fun0003 }
case 63:
            var7 = var4;
case 62:
            var4 = global;
            var4 = var4.HermesInternal;
            var6 = var4.concat;
            var5 = 'Update to build ';
            var4 = ' available!';
            var4 = var6.bind(var5)(var7, var4);
            return var4;
case 13:
            var5 = _closure1_slot11;
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var7 = var6.bind(var8)(var4);
            var6 = var7.getName;
            var11 = _closure1_slot7;
            var10 = var11.getUser;
            var13 = var2.other_users;
            var12 = var3 == var13;
            var4 = undefined;
            if(var12) { _fun0003_ip = 64; continue _fun0003 }
case 65:
            var12 = 0;
            var12 = var13[var12];
            var13 = var3 == var12;
            var4 = undefined;
            if(var13) { _fun0003_ip = 64; continue _fun0003 }
case 66:
            var4 = var12.id;
case 64:
            var4 = var10.bind(var11)(var4);
            var4 = var6.bind(var7)(var4);
            var7 = var5.bind(var8)(var4);
            var5 = _closure1_slot11;
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var9 = var6.bind(var8)(var4);
            var6 = var9.getName;
            var11 = _closure1_slot7;
            var10 = var11.getUser;
            var13 = var2.other_users;
            var12 = var3 == var13;
            var4 = undefined;
            if(var12) { _fun0003_ip = 67; continue _fun0003 }
case 68:
            var12 = 1;
            var12 = var13[var12];
            var13 = var3 == var12;
            var4 = undefined;
            if(var13) { _fun0003_ip = 67; continue _fun0003 }
case 69:
            var4 = var12.id;
case 67:
            var4 = var10.bind(var11)(var4);
            var4 = var6.bind(var9)(var4);
            var6 = var5.bind(var8)(var4);
            var4 = global;
            var5 = var4.Math;
            var4 = var5.max;
            var9 = var2.other_users;
            var10 = var3 == var9;
            var2 = undefined;
            if(var10) { _fun0003_ip = 70; continue _fun0003 }
case 71:
            var2 = var9.length;
case 70:
            var10 = var3 != var2;
            var3 = 0;
            var9 = 0;
            if(!var10) { _fun0003_ip = 72; continue _fun0003 }
case 73:
            var9 = var2;
case 72:
            var2 = 2;
            var2 = var9 - var2;
            var5 = var4.bind(var5)(var2, var3);
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 5;
            var3 = var9[var1];
            var3 = var2.bind(var8)(var3);
            var4 = var3.intl;
            var3 = var4.format;
            var1 = var9[var1];
            var1 = var2.bind(var8)(var1);
            var1 = var1.t;
            var2 = var1.g5xyIC;
            var1 = {};
            var1['user'] = var7;
            var1['user2'] = var6;
            var1['count'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();