// app/modules/notification_center/NotificationCenterItemsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _validate(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var1 = var2.id;
            var3 = null;
            var1 = var3 != var1;
            if(!var1) { _fun0002_ip = 26; continue _fun0002 }
 17:
            var2 = var2.type;
            var1 = var3 != var2;
 26:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function handleReset() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arguments[0];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0003_ip = 11; continue _fun0003 }
 9:
            var2 = {};
 11:
            var4 = var2.keepLocalItems;
            if(!(var4 === var1)) { _fun0003_ip = 23; continue _fun0003 }
 21:
            var4 = false;
 23:
            var3 = {'loading': false, 'initialized': false, 'errored': false, 'isDataStale': false};
            var2 = false;
            var5 = new Array(0);
            var3['notifCenterItems'] = var5;
            var5 = new Array(0);
            var3['staleNotifCenterItems'] = var5;
            var5 = global;
            var5 = var5.Set;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var7 = var6;
            var5 = new var7[var5](var6);
            var5 = var5 instanceof Object ? var5 : var6;
            var3['notifCenterIds'] = var5;
            if(var4) { _fun0003_ip = 95; continue _fun0003 }
 89:
            var4 = new Array(0);
            _fun0003_ip = 108; continue _fun0003;
 95:
            var5 = _closure1_slot14;
            var4 = var5.notifCenterLocalItems;
 108:
            var3['notifCenterLocalItems'] = var4;
            var4 = true;
            var3['paginationHasMore'] = var4;
            var3['paginationCursor'] = var1;
            var3['notifCenterActive'] = var2;
            var3['notifCenterTabFocused'] = var2;
            _closure1_slot14 = var3;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function handleResetRemoteState() {
        var3 = _closure1_slot17;
        var2 = {};
        var1 = true;
        var2['keepLocalItems'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function toNotificationCenterItem(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var5 = var2.item_enum;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 11;
            var1 = var1[var8];
            var3 = undefined;
            var1 = var6.bind(var3)(var1);
            var1 = var1.ItemEnum;
            var1 = var1.FIRST_MESSAGE;
            var1 = var5 === var1;
            if(!var1) { _fun0004_ip = 91; continue _fun0004 }
 53:
            var6 = var2.type;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var7.bind(var3)(var5);
            var5 = var5.NotificationCenterItems;
            var5 = var5.LIFECYCLE_ITEM;
            var1 = var6 === var5;
 91:
            if(!var1) { _fun0004_ip = 106; continue _fun0004 }
 94:
            var1 = 'https://discord.com/feature/composeMessage';
            var2['deeplink'] = var1;
 106:
            var1 = {};
            var10 = var1;
            var9 = var2;
            var5 = copyDataProperties(var10, var9);
            var6 = 'notification-center-item';
            var5 = 'kind';
            var1[var5] = var6;
            var6 = var2.message;
            var5 = null;
            var7 = var5 != var6;
            var6 = undefined;
            if(!var7) { _fun0004_ip = 185; continue _fun0004 }
 149:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 12;
            var4 = var8[var4];
            var8 = var7.bind(var3)(var4);
            var7 = var8.createMessageRecord;
            var4 = var2.message;
            var6 = var7.bind(var8)(var4);
 185:
            var4 = 'message';
            var1[var4] = var6;
            var4 = var2.application;
            var4 = var5 != var4;
            var3 = undefined;
            if(!var4) { _fun0004_ip = 218; continue _fun0004 }
 208:
            var2 = var2.application;
            var3 = var2.id;
 218:
            var2 = 'applicationId';
            var1[var2] = var3;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var10 = function handleAddItem(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = 'NOTIFICATION_CENTER_ITEM_CREATE';
            if(!(var2 !== var3)) { _fun0005_ip = 23; continue _fun0005 }
 16:
            var5 = var1.item;
            _fun0005_ip = 42; continue _fun0005;
 23:
            var3 = _closure1_slot19;
            var2 = var1.item;
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
 42:
            var1 = _closure1_slot14;
            var1 = var1.initialized;
            if(!var1) { _fun0005_ip = 196; continue _fun0005 }
 61:
            var3 = _closure1_slot16;
            var1 = undefined;
            var3 = var3.bind(var1)(var5);
            if(!var3) { _fun0005_ip = 196; continue _fun0005 }
 75:
            var3 = _closure1_slot14;
            var6 = var3.notifCenterIds;
            var4 = var6.has;
            var3 = var5.id;
            var3 = var4.bind(var6)(var3);
            if(var3) { _fun0005_ip = 196; continue _fun0005 }
 103:
            var3 = _closure1_slot14;
            var6 = var3.notifCenterIds;
            var4 = var6.add;
            var3 = var5.id;
            var3 = var4.bind(var6)(var3);
            var4 = _closure1_slot14;
            var3 = new Array(1);
            var3[0] = var5;
            var5 = _closure1_slot14;
            var8 = var5.notifCenterItems;
            var7 = 1;
            var9 = var3;
            var5 = arraySpread(var9, var8, var7);
            var4['notifCenterItems'] = var3;
            var2 = _closure1_slot14;
            var4 = var2.notifCenterItems;
            var3 = var4.sort;
            var2 = function(arg1, arg2) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.compare;
                var1 = arg2;
                var2 = var1.id;
                var1 = arg1;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
 196:
            var1 = false;
            return var1;
        }
    };
    var1 = function updateItemsAck(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot14;
        var5 = var2.notifCenterItems;
        var4 = var5.map;
        var3 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = arg1;
                var5 = _closure2_slot0;
                var2 = var5.includes;
                var1 = var4.id;
                var2 = var2.bind(var5)(var1);
                var1 = var4;
                if(!var2) { _fun0006_ip = 59; continue _fun0006 }
 31:
                var2 = {};
                var7 = var2;
                var6 = var4;
                var4 = copyDataProperties(var7, var6);
                var4 = _closure2_slot1;
                var3 = 'acked';
                var2[var3] = var4;
                var1 = var2;
 59:
                return var1;
            }
        };
        var4 = var4.bind(var5)(var3);
        var3 = var4.filter;
        var1 = _closure1_slot16;
        var1 = var3.bind(var4)(var1);
        var2['notifCenterItems'] = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function isItem(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg1;
            var3 = var2.type;
            var1 = arg2;
            var1 = var3 === var1;
            if(!var1) { _fun0007_ip = 47; continue _fun0007 }
 18:
            var2 = var2.other_user;
            var3 = null;
            var4 = var3 == var2;
            var3 = undefined;
            if(var4) { _fun0007_ip = 40; continue _fun0007 }
 35:
            var3 = var2.id;
 40:
            var2 = arg3;
            var1 = var3 === var2;
 47:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function isGameRelationshipItem(arg1, arg2, arg3, arg4) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var5 = _closure1_slot21;
            var4 = undefined;
            var3 = arg2;
            var1 = arg3;
            var1 = var5.bind(var4)(var2, var3, var1);
            if(!var1) { _fun0008_ip = 40; continue _fun0008 }
 28:
            var3 = var2.applicationId;
            var2 = arg4;
            var1 = var3 === var2;
 40:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var9 = function handleRelationshipAddOrUpdate(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var2 = arg1;
            var6 = var2.relationship;
            var _closure2_slot0 = var6;
            var2 = var6.id;
            var _closure2_slot1 = var2;
            var5 = var6.type;
            var3 = var6.isSpamRequest;
            var4 = var6.userIgnored;
            var7 = var6.user;
            var _closure2_slot2 = var7;
            var14 = var6.since;
            var13 = var6.originApplicationId;
            var8 = _closure1_slot13;
            var8 = var8.PENDING_INCOMING;
            if(!(var5 === var8)) { _fun0009_ip = 199; continue _fun0009 }
 79:
            if(var3) { _fun0009_ip = 199; continue _fun0009 }
 82:
            if(var4) { _fun0009_ip = 199; continue _fun0009 }
 85:
            var3 = null;
            if(!(var3 != var14)) { _fun0009_ip = 197; continue _fun0009 }
 91:
            if(!(var3 != var7)) { _fun0009_ip = 199; continue _fun0009 }
 95:
            var9 = _closure1_slot12;
            var8 = var9.getUser;
            var7 = var7.id;
            var12 = var8.bind(var9)(var7);
            if(!(var3 != var12)) { _fun0009_ip = 199; continue _fun0009 }
 119:
            var8 = _closure1_slot14;
            var17 = var8.notifCenterLocalItems;
            var7 = new Array(1);
            var16 = 0;
            var18 = var7;
            var10 = arraySpread(var18, var17, var16);
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 13;
            var11 = var11[var9];
            var9 = undefined;
            var11 = var15.bind(var9)(var11);
            var9 = var11.incomingFriendRequestLocalItem;
            var9 = var9.bind(var11)(var12, var14, var13);
            var7[var10] = var9;
            var9 = 1;
            var9 = var10 + var9;
            var8['notifCenterLocalItems'] = var7;
            _fun0009_ip = 199; continue _fun0009;
 197:
            return var3;
 199:
            var3 = _closure1_slot13;
            var3 = var3.FRIEND;
            var3 = var5 !== var3;
            if(var3) { _fun0009_ip = 227; continue _fun0009 }
 216:
            var7 = var6.user;
            var6 = null;
            var3 = var6 == var7;
 227:
            if(var3) { _fun0009_ip = 233; continue _fun0009 }
 230:
            var3 = var4;
 233:
            if(var3) { _fun0009_ip = 267; continue _fun0009 }
 236:
            var6 = _closure1_slot14;
            var8 = var6.notifCenterLocalItems;
            var7 = var8.map;
            var3 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var4 = arg1;
                    var8 = _closure1_slot21;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 11;
                    var1 = var1[var6];
                    var5 = undefined;
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.NotificationCenterLocalItems;
                    var2 = var1.INCOMING_FRIEND_REQUESTS;
                    var1 = _closure2_slot0;
                    var1 = var1.user;
                    var1 = var1.id;
                    var2 = var8.bind(var5)(var4, var2, var1);
                    var1 = var4;
                    if(!var2) { _fun0010_ip = 205; continue _fun0010 }
 77:
                    var2 = {};
                    var13 = var2;
                    var12 = var4;
                    var8 = copyDataProperties(var13, var12);
                    var9 = true;
                    var8 = 'acked';
                    var2[var8] = var9;
                    var9 = false;
                    var8 = 'forceUnacked';
                    var2[var8] = var9;
                    var7 = _closure2_slot2;
                    var10 = var7.id;
                    var9 = var4.id;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var8 = var4.concat;
                    var7 = 'incoming_friend_requests_accepted_';
                    var4 = '_';
                    var7 = var8.bind(var7)(var10, var4, var9);
                    var4 = 'local_id';
                    var2[var4] = var7;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.NotificationCenterLocalItems;
                    var4 = var3.INCOMING_FRIEND_REQUESTS_ACCEPTED;
                    var3 = 'type';
                    var2[var3] = var4;
                    var1 = var2;
 205:
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var3);
            var6['notifCenterLocalItems'] = var3;
 267:
            var3 = _closure1_slot13;
            var3 = var3.BLOCKED;
            var3 = var5 === var3;
            if(var3) { _fun0009_ip = 287; continue _fun0009 }
 284:
            var3 = var4;
 287:
            if(!var3) { _fun0009_ip = 321; continue _fun0009 }
 290:
            var2 = _closure1_slot14;
            var4 = var2.notifCenterLocalItems;
            var3 = var4.filter;
            var1 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var6 = arg1;
                    var7 = _closure1_slot21;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var8 = 11;
                    var1 = var1[var8];
                    var5 = undefined;
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.NotificationCenterLocalItems;
                    var4 = var1.INCOMING_FRIEND_REQUESTS;
                    var1 = _closure2_slot1;
                    var1 = var7.bind(var5)(var6, var4, var1);
                    if(var1) { _fun0011_ip = 105; continue _fun0011 }
 61:
                    var9 = _closure1_slot21;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var4 = var7.bind(var5)(var4);
                    var4 = var4.NotificationCenterLocalItems;
                    var7 = var4.INCOMING_FRIEND_REQUESTS_ACCEPTED;
                    var4 = _closure2_slot1;
                    var1 = var9.bind(var5)(var6, var7, var4);
 105:
                    if(var1) { _fun0011_ip = 152; continue _fun0011 }
 108:
                    var9 = _closure1_slot21;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var4 = var7.bind(var5)(var4);
                    var4 = var4.NotificationCenterLocalItems;
                    var7 = var4.INCOMING_GAME_FRIEND_REQUESTS;
                    var4 = _closure2_slot1;
                    var1 = var9.bind(var5)(var6, var7, var4);
 152:
                    if(var1) { _fun0011_ip = 199; continue _fun0011 }
 155:
                    var4 = _closure1_slot21;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var8];
                    var3 = var7.bind(var5)(var3);
                    var3 = var3.NotificationCenterLocalItems;
                    var3 = var3.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var6, var3, var2);
 199:
                    var1 = !var1;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1);
            var2['notifCenterLocalItems'] = var1;
 321:
            var1 = undefined;
            return var1;
        }
    };
    var1 = function updateGuildEvent(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot9;
            var1 = undefined;
            var4 = var4.bind(var1)(var5);
            if(!var4) { _fun0012_ip = 57; continue _fun0012 }
 26:
            var3 = _closure1_slot14;
            var5 = var3.notifCenterItems;
            var4 = var5.map;
            var2 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var3 = arg1;
                    var4 = var3.type;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.NotificationCenterItems;
                    var2 = var1.GUILD_SCHEDULED_EVENT_STARTED;
                    var1 = var3;
                    if(!(var4 === var2)) { _fun0013_ip = 105; continue _fun0013 }
 52:
                    var4 = var3.guild_scheduled_event_id;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3;
                    if(!(var4 === var2)) { _fun0013_ip = 105; continue _fun0013 }
 77:
                    var2 = {};
                    var7 = var2;
                    var6 = var3;
                    var3 = copyDataProperties(var7, var6);
                    var4 = true;
                    var3 = 'disable_action';
                    var2[var3] = var4;
                    var1 = var2;
 105:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2);
            var3['notifCenterItems'] = var2;
 57:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var12 = global;
    var13 = var12.Object;
    var8 = var13.defineProperty;
    var2 = {};
    var11 = true;
    var2['value'] = var11;
    var1 = '__esModule';
    var1 = var8.bind(var13)(var3, var1, var2);
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
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.isGuildEventEnded;
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.RelationshipTypes;
    var _closure1_slot13 = var2;
    var2 = {'loading': false, 'initialized': false, 'errored': false, 'isDataStale': false};
    var8 = false;
    var13 = new Array(0);
    var2['notifCenterItems'] = var13;
    var13 = new Array(0);
    var2['staleNotifCenterItems'] = var13;
    var12 = var12.Set;
    var13 = var12.prototype;
    var13 = Object.create(var13, {constructor: {value: var12}});
    var17 = var13;
    var12 = new var17[var12](var16);
    var12 = var12 instanceof Object ? var12 : var13;
    var2['notifCenterIds'] = var12;
    var12 = new Array(0);
    var2['notifCenterLocalItems'] = var12;
    var2['paginationHasMore'] = var11;
    var2['paginationCursor'] = var1;
    var2['notifCenterActive'] = var8;
    var2['notifCenterTabFocused'] = var8;
    var _closure1_slot14 = var2;
    var2 = 15;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function NotificationCenterItemsStore() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot15;
                var1 = var1.bind(var3)();
                if(var1) { _fun0014_ip = 69; continue _fun0014 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0014_ip = 105; continue _fun0014;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var1 = arg1;
                var7 = this;
                var6 = var7.waitFor;
                var5 = _closure1_slot12;
                var4 = _closure1_slot11;
                var3 = _closure1_slot8;
                var3 = var6.bind(var7)(var5, var4, var3);
                var3 = null;
                if(!(var3 != var1)) { _fun0015_ip = 133; continue _fun0015 }
 40:
                var4 = var1.notifCenterItems;
                var3 = var4.map;
                var1 = function(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                        var2 = arg1;
                        var1 = {};
                        var7 = var1;
                        var6 = var2;
                        var3 = copyDataProperties(var7, var6);
                        var4 = var2.message;
                        var3 = null;
                        var4 = var3 != var4;
                        var3 = undefined;
                        if(!var4) { _fun0016_ip = 63; continue _fun0016 }
 31:
                        var5 = _closure1_slot10;
                        var7 = var2.message;
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {constructor: {value: var5}});
                        var8 = var4;
                        var2 = new var8[var5](var7, var6);
                        var3 = var2 instanceof Object ? var2 : var4;
 63:
                        var2 = 'message';
                        var1[var2] = var3;
                        return var1;
                    }
                };
                var4 = var3.bind(var4)(var1);
                var3 = var4.length;
                var1 = 0;
                if(!(var3 > var1)) { _fun0015_ip = 133; continue _fun0015 }
 74:
                var1 = {};
                var9 = _closure1_slot14;
                var10 = var1;
                var3 = copyDataProperties(var10, var9);
                var5 = true;
                var3 = 'initialized';
                var1[var3] = var5;
                var3 = 'isDataStale';
                var1[var3] = var5;
                var5 = new Array(0);
                var3 = 'notifCenterItems';
                var1[var3] = var5;
                var3 = 'staleNotifCenterItems';
                var1[var3] = var4;
                _closure1_slot14 = var1;
 133:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(11);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var4 = function pack(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var2 = arg1;
                    var1 = {};
                    var6 = var1;
                    var5 = var2;
                    var3 = copyDataProperties(var6, var5);
                    var4 = var2.message;
                    var3 = null;
                    var4 = var3 != var4;
                    var3 = undefined;
                    if(!var4) { _fun0017_ip = 46; continue _fun0017 }
 31:
                    var4 = var2.message;
                    var2 = var4.toJS;
                    var3 = var2.bind(var4)();
 46:
                    var2 = 'message';
                    var1[var2] = var3;
                    return var1;
                }
            };
            var1 = {};
            var6 = _closure1_slot14;
            var7 = var1;
            var3 = copyDataProperties(var7, var6);
            var3 = _closure1_slot14;
            var5 = var3.notifCenterItems;
            var3 = var5.map;
            var5 = var3.bind(var5)(var4);
            var3 = 'notifCenterItems';
            var1[var3] = var5;
            var2 = _closure1_slot14;
            var3 = var2.staleNotifCenterItems;
            var2 = var3.map;
            var3 = var2.bind(var3)(var4);
            var2 = 'staleNotifCenterItems';
            var1[var2] = var3;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'loading';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot14;
            var1 = var1.loading;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'initialized';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot14;
            var1 = var1.initialized;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'items';
        var5['key'] = var7;
        var7 = function get() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var1 = _closure1_slot14;
                var1 = var1.isDataStale;
                var2 = _closure1_slot14;
                if(var1) { _fun0018_ip = 28; continue _fun0018 }
 20:
                var1 = var2.notifCenterItems;
                _fun0018_ip = 34; continue _fun0018;
 28:
                var1 = var2.staleNotifCenterItems;
 34:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'hasMore';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot14;
            var1 = var1.paginationHasMore;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'cursor';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot14;
            var1 = var1.paginationCursor;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'errored';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot14;
            var1 = var1.errored;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'active';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot14;
            var1 = var1.notifCenterActive;
            return var1;
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'localItems';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot14;
            var1 = var1.notifCenterLocalItems;
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'tabFocused';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot14;
            var1 = var1.notifCenterTabFocused;
            return var1;
        };
        var5['get'] = var6;
        var1[10] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'NotificationCenterItemsStore';
    var8['displayName'] = var2;
    var2 = 'NotificationCenterItemsStore_v2';
    var8['persistKey'] = var2;
    var2 = 16;
    var2 = var6[var2];
    var16 = var7.bind(var1)(var2);
    var2 = {};
    var11 = function handleConnectionOpen(arg1) {
        var3 = arg1;
        var2 = new Array(0);
        var _closure2_slot0 = var2;
        var4 = global;
        var4 = var4.Set;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var8 = var5;
        var4 = new var8[var4](var7);
        var4 = var4 instanceof Object ? var4 : var5;
        var _closure2_slot1 = var4;
        var6 = var3.relationships;
        var5 = var6.forEach;
        var4 = function(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var1 = arg1;
                var7 = var1.type;
                var3 = var1.user;
                var9 = var1.since;
                var5 = var1.is_spam_request;
                var4 = var1.user_ignored;
                var8 = var1.origin_application_id;
                var1 = null;
                if(!(var1 != var3)) { _fun0019_ip = 180; continue _fun0019 }
 46:
                if(!var4) { _fun0019_ip = 71; continue _fun0019 }
 49:
                var10 = _closure2_slot1;
                var6 = var10.add;
                var2 = var3.id;
                var2 = var6.bind(var10)(var2);
 71:
                var6 = _closure1_slot13;
                var6 = var6.PENDING_INCOMING;
                if(!(var7 === var6)) { _fun0019_ip = 178; continue _fun0019 }
 88:
                if(var5) { _fun0019_ip = 178; continue _fun0019 }
 91:
                if(var4) { _fun0019_ip = 178; continue _fun0019 }
 94:
                if(!(var1 != var9)) { _fun0019_ip = 178; continue _fun0019 }
 98:
                var5 = _closure1_slot12;
                var4 = var5.getUser;
                var3 = var3.id;
                var7 = var4.bind(var5)(var3);
                if(!(var1 != var7)) { _fun0019_ip = 176; continue _fun0019 }
 122:
                var5 = _closure2_slot0;
                var4 = var5.push;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 13;
                var3 = var3[var2];
                var2 = undefined;
                var6 = var6.bind(var2)(var3);
                var3 = var6.incomingFriendRequestLocalItem;
                var3 = var3.bind(var6)(var7, var9, var8);
                var3 = var4.bind(var5)(var3);
                return var2;
 176:
                return var1;
 178:
                return var1;
 180:
                return var1;
            }
        };
        var4 = var5.bind(var6)(var4);
        var6 = var3.gameRelationships;
        var5 = var6.forEach;
        var4 = function(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var1 = arg1;
                var3 = var1.type;
                var5 = var1.id;
                var7 = var1.application_id;
                var6 = var1.since;
                var2 = _closure1_slot13;
                var2 = var2.PENDING_INCOMING;
                if(!(var3 === var2)) { _fun0020_ip = 132; continue _fun0020 }
 42:
                var4 = _closure2_slot1;
                var3 = var4.has;
                var3 = var3.bind(var4)(var5);
                if(var3) { _fun0020_ip = 132; continue _fun0020 }
 62:
                var4 = _closure1_slot12;
                var3 = var4.getUser;
                var5 = var3.bind(var4)(var5);
                var3 = null;
                if(!(var3 != var5)) { _fun0020_ip = 132; continue _fun0020 }
 83:
                var3 = _closure2_slot0;
                var2 = var3.push;
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 13;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var8.bind(var1)(var4);
                var1 = var4.incomingGameFriendRequestLocalItem;
                var1 = var1.bind(var4)(var5, var6, var7);
                var1 = var2.bind(var3)(var1);
 132:
                var1 = undefined;
                return var1;
            }
        };
        var4 = var5.bind(var6)(var4);
        var4 = var3.guilds;
        var3 = var4.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.guild_scheduled_events;
            var2 = var3.forEach;
            var1 = function(arg1) {
                var3 = _closure1_slot23;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1 = var3.bind(var4)(var1);
        var1 = _closure1_slot14;
        var1['notifCenterLocalItems'] = var2;
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var11;
    var11 = function LOGOUT() {
        var2 = _closure1_slot17;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['LOGOUT'] = var11;
    var11 = function handleAck(arg1) {
        var1 = arg1;
        var4 = var1.ids;
        var3 = _closure1_slot20;
        var1 = undefined;
        var2 = true;
        var2 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var2['NOTIFICATION_CENTER_ITEMS_ACK'] = var11;
    var11 = function handleAckFailure(arg1) {
        var1 = arg1;
        var4 = var1.ids;
        var3 = _closure1_slot20;
        var1 = undefined;
        var2 = false;
        var2 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var2['NOTIFICATION_CENTER_ITEMS_ACK_FAILURE'] = var11;
    var11 = function handleGuildScheduledEventUpdate(arg1) {
        var1 = arg1;
        var3 = var1.guildScheduledEvent;
        var2 = _closure1_slot23;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['GUILD_SCHEDULED_EVENT_UPDATE'] = var11;
    var2['NOTIFICATION_CENTER_ITEM_CREATE'] = var10;
    var11 = function handleDelete(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var2 = arg1;
            var5 = var2.id;
            var _closure2_slot0 = var5;
            var3 = _closure1_slot14;
            var4 = var3.notifCenterIds;
            var3 = var4.has;
            var3 = var3.bind(var4)(var5);
            if(var3) { _fun0021_ip = 44; continue _fun0021 }
 40:
            var3 = false;
            return var3;
 44:
            var3 = _closure1_slot14;
            var4 = var3.notifCenterIds;
            var3 = var4.delete;
            var3 = var3.bind(var4)(var5);
            var2 = _closure1_slot14;
            var4 = var2.notifCenterItems;
            var3 = var4.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 !== var1;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var2['notifCenterItems'] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['NOTIFICATION_CENTER_ITEM_DELETE'] = var11;
    var2['NOTIFICATION_CENTER_ITEM_DELETE_FAILURE'] = var10;
    var10 = function handleLoad() {
        var2 = _closure1_slot14;
        var1 = true;
        var2['loading'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOAD_NOTIFICATION_CENTER_ITEMS'] = var10;
    var10 = function handleLoadFailure() {
        var3 = _closure1_slot14;
        var2 = false;
        var3['loading'] = var2;
        var3 = _closure1_slot14;
        var2 = true;
        var3['initialized'] = var2;
        var1 = _closure1_slot14;
        var1['errored'] = var2;
        var1 = undefined;
        return var1;
    };
    var2['LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE'] = var10;
    var10 = function handleLoadSuccess(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var2 = arg1;
            var3 = var2.items;
            var8 = var2.hasMore;
            var6 = var2.cursor;
            var4 = _closure1_slot14;
            var4 = var4.loading;
            if(!var4) { _fun0022_ip = 277; continue _fun0022 }
 41:
            var4 = _closure1_slot14;
            var5 = false;
            var4['loading'] = var5;
            var7 = _closure1_slot14;
            var4 = true;
            var7['initialized'] = var4;
            var4 = _closure1_slot14;
            var4['errored'] = var5;
            var4 = _closure1_slot14;
            var4['isDataStale'] = var5;
            var4 = null;
            var4 = var4 != var6;
            if(!var4) { _fun0022_ip = 114; continue _fun0022 }
 94:
            var5 = _closure1_slot14;
            var7 = var5.notifCenterIds;
            var5 = var7.has;
            var4 = var5.bind(var7)(var6);
 114:
            if(var4) { _fun0022_ip = 171; continue _fun0022 }
 117:
            var5 = _closure1_slot14;
            var4 = var3.length;
            var7 = 0;
            var4 = var4 > var7;
            if(!var4) { _fun0022_ip = 138; continue _fun0022 }
 135:
            var4 = var8;
 138:
            var5['paginationHasMore'] = var4;
            var5 = _closure1_slot14;
            var4 = var3.length;
            var7 = var4 > var7;
            var4 = undefined;
            if(!var7) { _fun0022_ip = 165; continue _fun0022 }
 162:
            var4 = var6;
 165:
            var5['paginationCursor'] = var4;
 171:
            var5 = _closure1_slot14;
            var11 = var5.notifCenterItems;
            var4 = new Array(0);
            var10 = 0;
            var12 = var4;
            var10 = arraySpread(var12, var11, var10);
            var8 = var3.map;
            var6 = _closure1_slot19;
            var9 = var8.bind(var3)(var6);
            var8 = var9.filter;
            var6 = function(arg1) {
                var1 = _closure1_slot14;
                var3 = var1.notifCenterIds;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var11 = var8.bind(var9)(var6);
            var12 = var4;
            var6 = arraySpread(var12, var11, var10);
            var5['notifCenterItems'] = var4;
            var2 = _closure1_slot14;
            var5 = var2.notifCenterItems;
            var4 = var5.sort;
            var2 = function(arg1, arg2) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.compare;
                var1 = arg2;
                var2 = var1.id;
                var1 = arg1;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            var2 = var3.forEach;
            var1 = function(arg1) {
                var1 = _closure1_slot14;
                var3 = var1.notifCenterIds;
                var2 = var3.add;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
 277:
            var1 = undefined;
            return var1;
        }
    };
    var2['LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS'] = var10;
    var10 = function RESET_NOTIFICATION_CENTER() {
        var2 = _closure1_slot18;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['RESET_NOTIFICATION_CENTER'] = var10;
    var10 = function handleSetActive(arg1) {
        var1 = arg1;
        var2 = var1.active;
        var1 = _closure1_slot14;
        var1['notifCenterActive'] = var2;
        var1 = undefined;
        return var1;
    };
    var2['NOTIFICATION_CENTER_SET_ACTIVE'] = var10;
    var10 = function handleTabFocused(arg1) {
        var1 = arg1;
        var2 = var1.focused;
        var1 = _closure1_slot14;
        var1['notifCenterTabFocused'] = var2;
        var1 = undefined;
        return var1;
    };
    var2['NOTIFICATION_CENTER_TAB_FOCUSED'] = var10;
    var2['RELATIONSHIP_ADD'] = var9;
    var2['RELATIONSHIP_UPDATE'] = var9;
    var9 = function handleRelationshipRemove(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = _closure1_slot14;
        var4 = var2.notifCenterLocalItems;
        var3 = var4.filter;
        var1 = function(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var6 = arg1;
                var7 = _closure1_slot21;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = 11;
                var1 = var1[var8];
                var5 = undefined;
                var1 = var2.bind(var5)(var1);
                var1 = var1.NotificationCenterLocalItems;
                var4 = var1.INCOMING_FRIEND_REQUESTS;
                var1 = _closure2_slot0;
                var1 = var1.relationship;
                var1 = var1.id;
                var4 = var7.bind(var5)(var6, var4, var1);
                var1 = !var4;
                if(var4) { _fun0023_ip = 133; continue _fun0023 }
 75:
                var4 = _closure1_slot21;
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var7.bind(var5)(var3);
                var3 = var3.NotificationCenterLocalItems;
                var3 = var3.INCOMING_FRIEND_REQUESTS_ACCEPTED;
                var2 = _closure2_slot0;
                var2 = var2.relationship;
                var2 = var2.id;
                var2 = var4.bind(var5)(var6, var3, var2);
                var1 = !var2;
 133:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1);
        var2['notifCenterLocalItems'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['RELATIONSHIP_REMOVE'] = var9;
    var9 = function handleGameRelationshipAddOrUpdate(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var2 = arg1;
            var2 = var2.gameRelationship;
            var4 = var2.id;
            var _closure2_slot0 = var4;
            var5 = var2.type;
            var8 = var2.since;
            var7 = var2.applicationId;
            var _closure2_slot1 = var7;
            var6 = _closure1_slot11;
            var2 = var6.isBlockedOrIgnored;
            var2 = var2.bind(var6)(var4);
            if(var2) { _fun0024_ip = 240; continue _fun0024 }
 64:
            var2 = _closure1_slot13;
            var2 = var2.PENDING_INCOMING;
            if(!(var5 !== var2)) { _fun0024_ip = 129; continue _fun0024 }
 78:
            var2 = _closure1_slot13;
            var2 = var2.FRIEND;
            if(!(var5 === var2)) { _fun0024_ip = 125; continue _fun0024 }
 92:
            var2 = _closure1_slot14;
            var6 = var2.notifCenterLocalItems;
            var5 = var6.map;
            var1 = function(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                    var4 = arg1;
                    var9 = _closure1_slot22;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 11;
                    var1 = var1[var6];
                    var5 = undefined;
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.NotificationCenterLocalItems;
                    var13 = var1.INCOMING_GAME_FRIEND_REQUESTS;
                    var12 = _closure2_slot0;
                    var11 = _closure2_slot1;
                    var15 = undefined;
                    var14 = var4;
                    var2 = var15[var9](var14, var13, var12, var11, var10);
                    var1 = var4;
                    if(!var2) { _fun0025_ip = 196; continue _fun0025 }
 73:
                    var2 = {};
                    var14 = var2;
                    var13 = var4;
                    var8 = copyDataProperties(var14, var13);
                    var9 = true;
                    var8 = 'acked';
                    var2[var8] = var9;
                    var9 = false;
                    var8 = 'forceUnacked';
                    var2[var8] = var9;
                    var10 = _closure2_slot0;
                    var9 = var4.id;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var8 = var4.concat;
                    var7 = 'incoming_game_friend_requests_accepted_';
                    var4 = '_';
                    var7 = var8.bind(var7)(var10, var4, var9);
                    var4 = 'local_id';
                    var2[var4] = var7;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.NotificationCenterLocalItems;
                    var4 = var3.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
                    var3 = 'type';
                    var2[var3] = var4;
                    var1 = var2;
 196:
                    return var1;
                }
            };
            var1 = var5.bind(var6)(var1);
            var2['notifCenterLocalItems'] = var1;
            _fun0024_ip = 236; continue _fun0024;
 125:
            var1 = false;
            return var1;
 129:
            var2 = _closure1_slot12;
            var1 = var2.getUser;
            var6 = var1.bind(var2)(var4);
            var2 = null;
            var1 = var2 != var8;
            if(!var1) { _fun0024_ip = 157; continue _fun0024 }
 153:
            var1 = var2 != var6;
 157:
            if(!var1) { _fun0024_ip = 236; continue _fun0024 }
 160:
            var2 = _closure1_slot14;
            var11 = var2.notifCenterLocalItems;
            var1 = new Array(1);
            var10 = 0;
            var12 = var1;
            var4 = arraySpread(var12, var11, var10);
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 13;
            var5 = var5[var3];
            var3 = undefined;
            var5 = var9.bind(var3)(var5);
            var3 = var5.incomingGameFriendRequestLocalItem;
            var3 = var3.bind(var5)(var6, var8, var7);
            var1[var4] = var3;
            var3 = 1;
            var3 = var4 + var3;
            var2['notifCenterLocalItems'] = var1;
 236:
            var1 = undefined;
            return var1;
 240:
            var1 = false;
            return var1;
        }
    };
    var2['GAME_RELATIONSHIP_ADD'] = var9;
    var9 = function handleGameRelationshipRemove(arg1) {
        var2 = arg1;
        var3 = var2.userId;
        var _closure2_slot0 = var3;
        var2 = var2.applicationId;
        var _closure2_slot1 = var2;
        var2 = _closure1_slot14;
        var4 = var2.notifCenterLocalItems;
        var3 = var4.filter;
        var1 = function(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                var7 = arg1;
                var9 = _closure1_slot22;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = 11;
                var1 = var1[var8];
                var6 = undefined;
                var1 = var2.bind(var6)(var1);
                var1 = var1.NotificationCenterLocalItems;
                var12 = var1.INCOMING_GAME_FRIEND_REQUESTS;
                var11 = _closure2_slot0;
                var10 = _closure2_slot1;
                var14 = undefined;
                var13 = var7;
                var4 = var14[var9](var13, var12, var11, var10, var9);
                var1 = !var4;
                if(var4) { _fun0026_ip = 123; continue _fun0026 }
 70:
                var5 = _closure1_slot22;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var4.bind(var6)(var3);
                var3 = var3.NotificationCenterLocalItems;
                var12 = var3.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
                var11 = _closure2_slot0;
                var10 = _closure2_slot1;
                var14 = undefined;
                var13 = var7;
                var2 = var14[var5](var13, var12, var11, var10, var9);
                var1 = !var2;
 123:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1);
        var2['notifCenterLocalItems'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['GAME_RELATIONSHIP_REMOVE'] = var9;
    var9 = function handleCompleted(arg1) {
        var1 = arg1;
        var1 = var1.item_enum;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot14;
        var5 = var2.notifCenterItems;
        var4 = var5.map;
        var3 = function(arg1) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                var3 = arg1;
                var4 = var3.item_enum;
                var2 = _closure2_slot0;
                var1 = var3;
                if(!(var4 === var2)) { _fun0027_ip = 58; continue _fun0027 }
 23:
                var2 = {};
                var6 = var2;
                var5 = var3;
                var3 = copyDataProperties(var6, var5);
                var4 = true;
                var3 = 'completed';
                var2[var3] = var4;
                var3 = 'acked';
                var2[var3] = var4;
                var1 = var2;
 58:
                return var1;
            }
        };
        var4 = var4.bind(var5)(var3);
        var3 = var4.filter;
        var1 = _closure1_slot16;
        var1 = var3.bind(var4)(var1);
        var2['notifCenterItems'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['NOTIFICATION_CENTER_ITEM_COMPLETED'] = var9;
    var9 = function SET_RECENT_MENTIONS_FILTER() {
        var2 = _closure1_slot18;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['SET_RECENT_MENTIONS_FILTER'] = var9;
    var9 = function handleMobileNativeUpdate(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
            var1 = arg1;
            var6 = var1.newBuild;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var3 = null;
            if(!(var3 !== var6)) { _fun0028_ip = 149; continue _fun0028 }
 26:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 13;
            var4 = var7[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.mobileNativeUpdateAvailableLocalItem;
            var4 = var4.bind(var5)(var6);
            _closure2_slot0 = var4;
            var5 = _closure1_slot14;
            var7 = var5.notifCenterLocalItems;
            var6 = var7.find;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.local_id;
                var1 = _closure2_slot0;
                var1 = var1.local_id;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            if(!(var1 === var5)) { _fun0028_ip = 149; continue _fun0028 }
 93:
            var3 = _closure1_slot14;
            var6 = var3.notifCenterLocalItems;
            var5 = var6.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.kind;
                var1 = _closure2_slot0;
                var1 = var1.kind;
                var1 = var2 !== var1;
                return var1;
            };
            var9 = var5.bind(var6)(var2);
            var2 = new Array(1);
            var8 = 0;
            var10 = var2;
            var5 = arraySpread(var10, var9, var8);
            var2[var5] = var4;
            var4 = 1;
            var4 = var5 + var4;
            var3['notifCenterLocalItems'] = var2;
 149:
            return var1;
        }
    };
    var2['MOBILE_NATIVE_UPDATE_CHECK_FINISHED'] = var9;
    var4 = function handleFetchApplicationsSuccess(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
            var1 = arg1;
            var5 = var1.unknownApplicationIds;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var3 = null;
            if(!(var3 != var5)) { _fun0029_ip = 92; continue _fun0029 }
 23:
            var3 = global;
            var3 = var3.Set;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var7 = var4;
            var6 = var5;
            var3 = new var7[var3](var6, var5);
            var3 = var3 instanceof Object ? var3 : var4;
            _closure2_slot0 = var3;
            var3 = _closure1_slot14;
            var5 = var3.notifCenterLocalItems;
            var4 = var5.filter;
            var2 = function(arg1) {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.applicationId;
                    var1 = null;
                    var1 = var1 == var3;
                    if(var1) { _fun0030_ip = 42; continue _fun0030 }
 17:
                    var4 = _closure2_slot0;
                    var3 = var4.has;
                    var2 = var2.applicationId;
                    var2 = var3.bind(var4)(var2);
                    var1 = !var2;
 42:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2);
            var3['notifCenterLocalItems'] = var2;
 92:
            return var1;
        }
    };
    var2['APPLICATIONS_FETCH_SUCCESS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var17 = var4;
    var15 = var2;
    var2 = new var17[var8](var16, var15, var14);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notification_center/NotificationCenterItemsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();