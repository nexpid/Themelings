// app/modules/notification_center/getNotificationCenterItemBody.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getFriendRequestItemBody(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.username;
            var2 = var1.applicationId;
            var _closure2_slot0 = var2;
            var3 = var1.renderApplication;
            var _closure2_slot1 = var3;
            var5 = var1.withApplication;
            var4 = var1.withDefault;
            var1 = null;
            if(!(var1 == var2)) { _fun0001_ip = 96; continue _fun0001 }
 47:
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
            _fun0001_ip = 155; continue _fun0001;
 96:
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
 155:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notification_center/getNotificationCenterItemBody.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getNotificationCenterItemBody(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.item;
            var9 = var1.renderApplication;
            var _closure2_slot0 = var9;
            var8 = undefined;
            var _closure2_slot1 = var8;
            var1 = var2.other_user;
            var3 = null;
            var4 = var3 == var1;
            var7 = undefined;
            if(var4) { _fun0002_ip = 48; continue _fun0002 }
 43:
            var7 = var1.id;
 48:
            if(!(var3 == var7)) { _fun0002_ip = 59; continue _fun0002 }
 52:
            var7 = _closure1_slot8;
 59:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 6;
            var4 = var4[var6];
            var10 = var5.bind(var8)(var4);
            var5 = var10.getName;
            var12 = _closure1_slot7;
            var11 = var12.getUser;
            var13 = var2.other_user;
            var15 = var3 == var13;
            var4 = undefined;
            if(var15) { _fun0002_ip = 118; continue _fun0002 }
 113:
            var4 = var13.id;
 118:
            var4 = var11.bind(var12)(var4);
            var11 = var5.bind(var10)(var4);
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
            if(!(var4 !== var5)) { _fun0002_ip = 1620; continue _fun0002 }
 181:
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var13];
            var4 = var12.bind(var8)(var4);
            var4 = var4.NotificationCenterLocalItems;
            var4 = var4.MOBILE_NATIVE_UPDATE_AVAILABLE;
            if(!(var4 !== var5)) { _fun0002_ip = 1534; continue _fun0002 }
 217:
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var13];
            var4 = var12.bind(var8)(var4);
            var4 = var4.NotificationCenterItems;
            var4 = var4.FRIEND_SUGGESTION_CREATED;
            if(!(var4 !== var5)) { _fun0002_ip = 1418; continue _fun0002 }
 253:
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var13];
            var4 = var12.bind(var8)(var4);
            var4 = var4.NotificationCenterItems;
            var4 = var4.GUILD_SCHEDULED_EVENT_STARTED;
            if(!(var4 !== var5)) { _fun0002_ip = 1147; continue _fun0002 }
 289:
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var13];
            var4 = var12.bind(var8)(var4);
            var4 = var4.NotificationCenterLocalItems;
            var4 = var4.INCOMING_FRIEND_REQUESTS;
            if(!(var4 !== var5)) { _fun0002_ip = 1058; continue _fun0002 }
 325:
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var13];
            var4 = var12.bind(var8)(var4);
            var4 = var4.NotificationCenterLocalItems;
            var4 = var4.INCOMING_FRIEND_REQUESTS_ACCEPTED;
            if(!(var4 !== var5)) { _fun0002_ip = 969; continue _fun0002 }
 361:
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var13];
            var4 = var12.bind(var8)(var4);
            var4 = var4.NotificationCenterItems;
            var4 = var4.FRIEND_REQUEST_ACCEPTED;
            if(!(var4 !== var5)) { _fun0002_ip = 878; continue _fun0002 }
 397:
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var13];
            var4 = var12.bind(var8)(var4);
            var4 = var4.NotificationCenterLocalItems;
            var4 = var4.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
            if(!(var4 !== var5)) { _fun0002_ip = 745; continue _fun0002 }
 433:
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var13];
            var4 = var12.bind(var8)(var4);
            var4 = var4.NotificationCenterLocalItems;
            var4 = var4.INCOMING_GAME_FRIEND_REQUESTS;
            if(!(var4 !== var5)) { _fun0002_ip = 612; continue _fun0002 }
 469:
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var13];
            var4 = var12.bind(var8)(var4);
            var4 = var4.NotificationCenterItems;
            var4 = var4.GAME_FRIEND_REQUEST_ACCEPTED;
            if(!(var4 !== var5)) { _fun0002_ip = 523; continue _fun0002 }
 502:
            var5 = var2.body;
            var12 = var3 != var5;
            var4 = '';
            if(!var12) { _fun0002_ip = 521; continue _fun0002 }
 518:
            var4 = var5;
 521:
            return var4;
 523:
            if(!(var3 != var10)) { _fun0002_ip = 605; continue _fun0002 }
 527:
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
            var5 = var4.Wi64vL;
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
            _fun0002_ip = 610; continue _fun0002;
 605:
            var4 = var2.body;
 610:
            return var4;
 612:
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
            var5 = var4.7cqOLC;
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
 745:
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
            var5 = var4.BB/0vr;
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
 878:
            var5 = _closure1_slot10;
            var4 = {};
            var4['username'] = var11;
            var4['applicationId'] = var10;
            var4['renderApplication'] = var9;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 5;
            var15 = var14[var12];
            var15 = var13.bind(var8)(var15);
            var15 = var15.t;
            var15 = var15.jXlYiI;
            var4['withApplication'] = var15;
            var12 = var14[var12];
            var12 = var13.bind(var8)(var12);
            var12 = var12.t;
            var12 = var12.McYRBg;
            var4['withDefault'] = var12;
            var4 = var5.bind(var8)(var4);
            return var4;
 969:
            var5 = _closure1_slot10;
            var4 = {};
            var4['username'] = var11;
            var4['applicationId'] = var10;
            var4['renderApplication'] = var9;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 5;
            var15 = var14[var12];
            var15 = var13.bind(var8)(var15);
            var15 = var15.t;
            var15 = var15.nnC1q6;
            var4['withApplication'] = var15;
            var12 = var14[var12];
            var12 = var13.bind(var8)(var12);
            var12 = var12.t;
            var12 = var12.5Uzkdn;
            var4['withDefault'] = var12;
            var4 = var5.bind(var8)(var4);
            return var4;
 1058:
            var5 = _closure1_slot10;
            var4 = {};
            var4['username'] = var11;
            var4['applicationId'] = var10;
            var4['renderApplication'] = var9;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 5;
            var13 = var12[var9];
            var13 = var10.bind(var8)(var13);
            var13 = var13.t;
            var13 = var13.9Dgf1N;
            var4['withApplication'] = var13;
            var9 = var12[var9];
            var9 = var10.bind(var8)(var9);
            var9 = var9.t;
            var9 = var9.uIomX1;
            var4['withDefault'] = var9;
            var4 = var5.bind(var8)(var4);
            return var4;
 1147:
            var10 = var2.guild_scheduled_event_id;
            var4 = var3 != var10;
            var9 = null;
            if(!var4) { _fun0002_ip = 1177; continue _fun0002 }
 1162:
            var5 = _closure1_slot3;
            var4 = var5.getGuildScheduledEvent;
            var9 = var4.bind(var5)(var10);
 1177:
            var4 = var3 == var9;
            var13 = undefined;
            if(var4) { _fun0002_ip = 1191; continue _fun0002 }
 1186:
            var13 = var9.name;
 1191:
            var10 = _closure1_slot5;
            var5 = var10.getGuild;
            var12 = var3 == var9;
            var4 = undefined;
            if(var12) { _fun0002_ip = 1214; continue _fun0002 }
 1209:
            var4 = var9.guild_id;
 1214:
            var4 = var5.bind(var10)(var4);
            var5 = var3 == var4;
            var12 = undefined;
            if(var5) { _fun0002_ip = 1233; continue _fun0002 }
 1228:
            var12 = var4.name;
 1233:
            var5 = _closure1_slot4;
            var10 = var3 != var9;
            var4 = undefined;
            if(!var10) { _fun0002_ip = 1249; continue _fun0002 }
 1246:
            var4 = var9;
 1249:
            var4 = var5.bind(var8)(var4);
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var10 = 8;
            var5 = var5[var10];
            var9 = var9.bind(var8)(var5);
            var5 = var9.isNullOrEmpty;
            var5 = var5.bind(var9)(var12);
            if(var5) { _fun0002_ip = 1394; continue _fun0002 }
 1288:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var10];
            var9 = var9.bind(var8)(var5);
            var5 = var9.isNullOrEmpty;
            var5 = var5.bind(var9)(var13);
            if(var5) { _fun0002_ip = 1394; continue _fun0002 }
 1319:
            if(!var4) { _fun0002_ip = 1394; continue _fun0002 }
 1322:
            var5 = _closure1_slot0;
            var14 = _closure1_slot2;
            var4 = 5;
            var9 = var14[var4];
            var9 = var5.bind(var8)(var9);
            var10 = var9.intl;
            var9 = var10.format;
            var4 = var14[var4];
            var4 = var5.bind(var8)(var4);
            var4 = var4.t;
            var5 = var4.AyvfXV;
            var4 = {};
            var4['event_name'] = var13;
            var4['guild_name'] = var12;
            var4 = var9.bind(var10)(var5, var4);
            _fun0002_ip = 1416; continue _fun0002;
 1394:
            var9 = var2.body;
            var10 = var3 != var9;
            var5 = '';
            if(!var10) { _fun0002_ip = 1413; continue _fun0002 }
 1410:
            var5 = var9;
 1413:
            var4 = var5;
 1416:
            return var4;
 1418:
            var5 = _closure1_slot6;
            var4 = var5.getRelationshipType;
            var5 = var4.bind(var5)(var7);
            var4 = _closure1_slot9;
            var4 = var4.PENDING_OUTGOING;
            if(!(var5 !== var4)) { _fun0002_ip = 1468; continue _fun0002 }
 1447:
            var5 = var2.body;
            var7 = var3 != var5;
            var4 = '';
            if(!var7) { _fun0002_ip = 1466; continue _fun0002 }
 1463:
            var4 = var5;
 1466:
            _fun0002_ip = 1532; continue _fun0002;
 1468:
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 5;
            var9 = var12[var5];
            var9 = var7.bind(var8)(var9);
            var10 = var9.intl;
            var9 = var10.format;
            var5 = var12[var5];
            var5 = var7.bind(var8)(var5);
            var5 = var5.t;
            var7 = var5.gZVTy8;
            var5 = {};
            var5['user'] = var11;
            var4 = var9.bind(var10)(var7, var5);
 1532:
            return var4;
 1534:
            var9 = var2.local_id;
            var5 = var3 == var9;
            var4 = undefined;
            if(var5) { _fun0002_ip = 1573; continue _fun0002 }
 1549:
            var7 = var9.split;
            var5 = '_';
            var7 = var7.bind(var9)(var5);
            var5 = var7.pop;
            var4 = var5.bind(var7)();
 1573:
            var5 = var3 != var4;
            var9 = 'unknown';
            if(!var5) { _fun0002_ip = 1587; continue _fun0002 }
 1584:
            var9 = var4;
 1587:
            var4 = global;
            var4 = var4.HermesInternal;
            var7 = var4.concat;
            var5 = 'Update to build ';
            var4 = ' available!';
            var4 = var7.bind(var5)(var9, var4);
            return var4;
 1620:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var7 = var5.bind(var8)(var4);
            var5 = var7.getName;
            var10 = _closure1_slot7;
            var9 = var10.getUser;
            var12 = var2.other_users;
            var11 = var3 == var12;
            var4 = undefined;
            if(var11) { _fun0002_ip = 1688; continue _fun0002 }
 1668:
            var11 = 0;
            var11 = var12[var11];
            var12 = var3 == var11;
            var4 = undefined;
            if(var12) { _fun0002_ip = 1688; continue _fun0002 }
 1683:
            var4 = var11.id;
 1688:
            var4 = var9.bind(var10)(var4);
            var7 = var5.bind(var7)(var4);
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var6 = var5.bind(var8)(var4);
            var5 = var6.getName;
            var10 = _closure1_slot7;
            var9 = var10.getUser;
            var12 = var2.other_users;
            var11 = var3 == var12;
            var4 = undefined;
            if(var11) { _fun0002_ip = 1767; continue _fun0002 }
 1746:
            var11 = 1;
            var11 = var12[var11];
            var12 = var3 == var11;
            var4 = undefined;
            if(var12) { _fun0002_ip = 1767; continue _fun0002 }
 1762:
            var4 = var11.id;
 1767:
            var4 = var9.bind(var10)(var4);
            var6 = var5.bind(var6)(var4);
            var4 = global;
            var5 = var4.Math;
            var4 = var5.max;
            var9 = var2.other_users;
            var10 = var3 == var9;
            var2 = undefined;
            if(var10) { _fun0002_ip = 1810; continue _fun0002 }
 1805:
            var2 = var9.length;
 1810:
            var10 = var3 != var2;
            var3 = 0;
            var9 = 0;
            if(!var10) { _fun0002_ip = 1824; continue _fun0002 }
 1821:
            var9 = var2;
 1824:
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