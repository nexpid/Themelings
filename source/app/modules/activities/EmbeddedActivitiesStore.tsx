// app/modules/activities/EmbeddedActivitiesStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot40;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot40;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
case 36: // try_start_0
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
case 35: // try_end0
            _fun0004_ip = 37; continue _fun0004;
case 38: // catch_target0
            CatchBlockStart(arg_register=1);
case 37:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot41 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function getLaunchStatesKey(arg1, arg2) {
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = '';
        var3 = arg2;
        var2 = ':';
        var1 = arg1;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot42 = var1;
    var1 = function getNormalizedGuildId(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var3 = var1 != var2;
            var1 = '0';
            if(!var3) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var1 = var2;
case 39:
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function getOrCreateBucket(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var1 = var5.get;
            var1 = var1.bind(var5)(var4);
            var2 = null;
            if(!(var2 == var1)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var2 = _closure1_slot20;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var8 = var3;
            var2 = new var8[var2](var7);
            var2 = var2 instanceof Object ? var2 : var3;
            var3 = var5.set;
            var3 = var3.bind(var5)(var4, var2);
            var1 = var2;
case 41:
            return var1;
        }
    };
    var _closure1_slot44 = var1;
    var1 = function participantFromServer(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.user_id;
        var1['userId'] = var3;
        var3 = var2.session_id;
        var1['sessionId'] = var3;
        var2 = var2.nonce;
        var1['nonce'] = var2;
        return var1;
    };
    var _closure1_slot45 = var1;
    var1 = function updateEmbeddedActivities(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.application_id;
            var1['applicationId'] = var3;
            var3 = var2.launch_id;
            var1['launchId'] = var3;
            var3 = var2.composite_instance_id;
            var1['compositeInstanceId'] = var3;
            var3 = var2.location;
            var1['location'] = var3;
            var6 = var2.participants;
            var5 = var6.map;
            var4 = _closure1_slot45;
            var4 = var5.bind(var6)(var4);
            var1['participants'] = var4;
            var2 = var2.content_classification;
            var1['contentClassification'] = var2;
            var6 = var1.applicationId;
            var _closure2_slot0 = var6;
            var17 = var1.launchId;
            var16 = var1.compositeInstanceId;
            var2 = var1.location;
            var14 = var1.participants;
            var22 = var1.contentClassification;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 16;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var21 = var4.bind(var1)(var6);
            var4 = null;
            if(!(var4 != var21)) { _fun0007_ip = 43; continue _fun0007 }
case 44:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var10 = 15;
            var5 = var5[var10];
            var7 = var7.bind(var1)(var5);
            var5 = var7.getEmbeddedActivityLocationChannelId;
            var12 = var5.bind(var7)(var2);
            if(!(var4 != var12)) { _fun0007_ip = 45; continue _fun0007 }
case 46:
            var7 = _closure1_slot23;
            var5 = var7.get;
            var11 = var5.bind(var7)(var12);
            var7 = var4 == var11;
            var5 = undefined;
            if(var7) { _fun0007_ip = 21; continue _fun0007 }
case 47:
            var9 = var11.getItems;
            var7 = 'all';
            var5 = var9.bind(var11)(var7);
case 21:
            if(!(var4 == var5)) { _fun0007_ip = 48; continue _fun0007 }
case 45:
            var5 = _closure1_slot18;
case 48:
            var15 = var5.length;
            var9 = _closure1_slot24;
            var7 = var9.get;
            var5 = var2.id;
            var11 = var7.bind(var9)(var5);
            var5 = var4 == var11;
            var9 = undefined;
            if(var5) { _fun0007_ip = 49; continue _fun0007 }
case 50:
            var7 = var11.getItems;
            var5 = 'all';
            var9 = var7.bind(var11)(var5);
case 49:
            if(!(var4 == var9)) { _fun0007_ip = 51; continue _fun0007 }
case 52:
            var9 = _closure1_slot18;
case 51:
            var7 = var9.find;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.applicationId;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var11 = var7.bind(var9)(var5);
            var7 = var14.map;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.userId;
                return var1;
            };
            var5 = var7.bind(var14)(var5);
            var9 = _closure1_slot9;
            var7 = var9.getId;
            var7 = var7.bind(var9)();
            var _closure2_slot1 = var7;
            var9 = var5.some;
            var7 = function(arg1) {
                var2 = _closure2_slot1;
                var1 = arg1;
                var1 = var1 === var2;
                return var1;
            };
            var19 = var9.bind(var5)(var7);
            var9 = var14.find;
            var7 = function(arg1) {
                var1 = arg1;
                var2 = var1.userId;
                var1 = _closure2_slot1;
                var1 = var2 === var1;
                return var1;
            };
            var7 = var9.bind(var14)(var7);
            var9 = var4 == var7;
            var18 = undefined;
            if(var9) { _fun0007_ip = 53; continue _fun0007 }
case 54:
            var18 = var7.sessionId;
case 53:
            var9 = var14.some;
            var7 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isActivityParticipantCurrentUserCurrentSession;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var20 = var9.bind(var14)(var7);
            var9 = _closure1_slot21;
            var7 = var9.get;
            var9 = var7.bind(var9)(var6);
            var23 = _closure1_slot25;
            var13 = var23.get;
            var24 = _closure1_slot42;
            var25 = var4 != var12;
            var7 = null;
            if(!var25) { _fun0007_ip = 55; continue _fun0007 }
case 56:
            var7 = var12;
case 55:
            var7 = var24.bind(var1)(var7, var6);
            var13 = var13.bind(var23)(var7);
            var7 = var4 == var13;
            var24 = undefined;
            if(var7) { _fun0007_ip = 57; continue _fun0007 }
case 58:
            var24 = var13.launchParams;
case 57:
            var7 = {};
            var7['applicationId'] = var6;
            var7['location'] = var2;
            var7['launchId'] = var17;
            var7['compositeInstanceId'] = var16;
            var7['url'] = var21;
            var21 = global;
            var23 = var21.Set;
            var25 = var23.prototype;
            var25 = Object.create(var25, {constructor: {value: var23}});
            var31 = var25;
            var30 = var5;
            var23 = new var31[var23](var30, var29);
            var23 = var23 instanceof Object ? var23 : var25;
            var7['userIds'] = var23;
            var7['participants'] = var14;
            var7['contentClassification'] = var22;
            var23 = var4 == var9;
            var22 = undefined;
            if(var23) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var22 = var9.referrerId;
case 59:
            if(!(var4 == var22)) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var25 = var4 == var24;
            var23 = undefined;
            if(var25) { _fun0007_ip = 63; continue _fun0007 }
case 64:
            var23 = var24.referrerId;
case 63:
            var22 = var23;
case 61:
            var7['referrerId'] = var22;
            var23 = var4 == var9;
            var22 = undefined;
            if(var23) { _fun0007_ip = 65; continue _fun0007 }
case 66:
            var22 = var9.customId;
case 65:
            if(!(var4 == var22)) { _fun0007_ip = 67; continue _fun0007 }
case 68:
            var25 = var4 == var24;
            var23 = undefined;
            if(var25) { _fun0007_ip = 69; continue _fun0007 }
case 70:
            var23 = var24.customId;
case 69:
            var22 = var23;
case 67:
            var7['customId'] = var22;
            var23 = var4 == var13;
            var22 = undefined;
            if(var23) { _fun0007_ip = 71; continue _fun0007 }
case 72:
            var22 = var13.proxyTicket;
case 71:
            var7['proxyTicket'] = var22;
            if(!var19) { _fun0007_ip = 73; continue _fun0007 }
case 74:
            if(!(var4 != var9)) { _fun0007_ip = 73; continue _fun0007 }
case 75:
            var25 = _closure1_slot21;
            var24 = var25.set;
            var23 = var9.applicationId;
            var22 = {};
            var30 = var22;
            var29 = var9;
            var26 = copyDataProperties(var30, var29);
            var30 = var22;
            var29 = var7;
            var26 = copyDataProperties(var30, var29);
            var27 = var7.proxyTicket;
            if(!(var4 == var27)) { _fun0007_ip = 76; continue _fun0007 }
case 77:
            var27 = var9.proxyTicket;
case 76:
            var26 = 'proxyTicket';
            var22[25] = var27;
            var22 = var24.bind(var25)(var23, var22);
case 73:
            if(!(var4 != var9)) { _fun0007_ip = 78; continue _fun0007 }
case 79:
            var23 = var2.id;
            var22 = var9.location;
            var22 = var22.id;
            if(!(var23 === var22)) { _fun0007_ip = 78; continue _fun0007 }
case 80:
            var22 = var9.applicationId;
            if(!(var6 === var22)) { _fun0007_ip = 78; continue _fun0007 }
case 81:
            if(var19) { _fun0007_ip = 82; continue _fun0007 }
case 83:
            var23 = var21.Array;
            var22 = var23.from;
            var21 = var9.userIds;
            var23 = var22.bind(var23)(var21);
            var22 = var23.some;
            var21 = function(arg1) {
                var2 = _closure2_slot1;
                var1 = arg1;
                var1 = var1 === var2;
                return var1;
            };
            var21 = var22.bind(var23)(var21);
            if(var21) { _fun0007_ip = 84; continue _fun0007 }
case 82:
            if(var20) { _fun0007_ip = 78; continue _fun0007 }
case 84:
            var20 = _closure1_slot48;
            var20 = var20.bind(var1)(var9);
            _fun0007_ip = 85; continue _fun0007;
case 78:
            if(!var19) { _fun0007_ip = 85; continue _fun0007 }
case 86:
            if(!(var4 != var9)) { _fun0007_ip = 87; continue _fun0007 }
case 88:
            var19 = var9.applicationId;
            if(!(var19 === var6)) { _fun0007_ip = 87; continue _fun0007 }
case 89:
            var9 = var9.location;
            var19 = var9.id;
            var9 = var2.id;
            if(!(var19 !== var9)) { _fun0007_ip = 85; continue _fun0007 }
case 87:
            var19 = _closure1_slot9;
            var9 = var19.getSessionId;
            var9 = var9.bind(var19)();
            if(!(var18 === var9)) { _fun0007_ip = 90; continue _fun0007 }
case 91:
            var9 = {};
            var9['applicationId'] = var6;
            var9['launchId'] = var17;
            var9['compositeInstanceId'] = var16;
            var9['location'] = var2;
            var9['participants'] = var14;
            var14 = 0;
            var14 = var14 === var15;
            var9['isFirstActivityInChannel'] = var14;
            var11 = var4 == var11;
            var9['isStart'] = var11;
            var11 = var7.referrerId;
            var9['referrerId'] = var11;
            var11 = var7.customId;
            var9['customId'] = var11;
            var14 = var4 == var13;
            var11 = undefined;
            if(var14) { _fun0007_ip = 92; continue _fun0007 }
case 93:
            var11 = var13.inviterUserId;
case 92:
            var9['inviterUserId'] = var11;
            var11 = var7.proxyTicket;
            var9['proxyTicket'] = var11;
            var8 = function openActivity(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var7 = var1.applicationId;
                    var12 = var1.launchId;
                    var11 = var1.compositeInstanceId;
                    var3 = var1.location;
                    var16 = var1.participants;
                    var18 = var1.isFirstActivityInChannel;
                    var17 = var1.isStart;
                    var10 = var1.referrerId;
                    var9 = var1.customId;
                    var14 = var1.inviterUserId;
                    var5 = var1.proxyTicket;
                    var8 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var8.bind(var1)(var2);
                    var2 = var2.bind(var1)(var7);
                    var13 = _closure1_slot9;
                    var8 = var13.getSessionId;
                    var8 = var8.bind(var13)();
                    var15 = null;
                    if(!(var15 != var2)) { _fun0008_ip = 94; continue _fun0008 }
case 95:
                    if(!(var15 != var8)) { _fun0008_ip = 94; continue _fun0008 }
case 96:
                    var13 = _closure1_slot21;
                    var8 = var13.get;
                    var8 = var8.bind(var13)(var7);
                    var19 = var15 == var8;
                    var13 = undefined;
                    if(var19) { _fun0008_ip = 97; continue _fun0008 }
case 98:
                    var8 = var8.location;
                    var13 = var8.id;
case 97:
                    var8 = var3.id;
                    if(!(var13 !== var8)) { _fun0008_ip = 99; continue _fun0008 }
case 100:
                    var13 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var8 = 15;
                    var8 = var19[var8];
                    var13 = var13.bind(var1)(var8);
                    var8 = var13.getEmbeddedActivityLocationChannelId;
                    var8 = var8.bind(var13)(var3);
                    var19 = _closure1_slot10;
                    var13 = var19.getChannel;
                    var20 = var13.bind(var19)(var8);
                    var19 = var15 == var20;
                    var13 = undefined;
                    if(var19) { _fun0008_ip = 45; continue _fun0008 }
case 101:
                    var19 = var20.getGuildId;
                    var13 = var19.bind(var20)();
case 45:
                    var21 = _closure1_slot12;
                    var19 = var21.getCurrentUser;
                    var19 = var19.bind(var21)();
                    if(!(var15 != var19)) { _fun0008_ip = 102; continue _fun0008 }
case 103:
                    if(!(var15 == var13)) { _fun0008_ip = 52; continue _fun0008 }
case 104:
                    var19 = var15 == var20;
                    var13 = undefined;
                    if(var19) { _fun0008_ip = 105; continue _fun0008 }
case 106:
                    var19 = var20.isPrivate;
                    var13 = var19.bind(var20)();
case 105:
                    if(!(var15 != var13)) { _fun0008_ip = 107; continue _fun0008 }
case 108:
                    if(!var13) { _fun0008_ip = 107; continue _fun0008 }
case 52:
                    _closure1_slot34 = var3;
                    var15 = var16.map;
                    var13 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.userId;
                        return var1;
                    };
                    var23 = var15.bind(var16)(var13);
                    var15 = {};
                    var15['applicationId'] = var7;
                    var15['url'] = var2;
                    var2 = global;
                    var13 = var2.Set;
                    var19 = var13.prototype;
                    var19 = Object.create(var19, {constructor: {value: var13}});
                    var24 = var19;
                    var13 = new var24[var13](var23, var22);
                    var13 = var13 instanceof Object ? var13 : var19;
                    var15['userIds'] = var13;
                    var15['participants'] = var16;
                    var19 = var2.Date;
                    var13 = var19.now;
                    var13 = var13.bind(var19)();
                    var15['connectedSince'] = var13;
                    var15['launchId'] = var12;
                    var15['compositeInstanceId'] = var11;
                    var15['location'] = var3;
                    var15['referrerId'] = var10;
                    var15['customId'] = var9;
                    var15['proxyTicket'] = var5;
                    var9 = _closure1_slot21;
                    var5 = var9.set;
                    var5 = var5.bind(var9)(var7, var15);
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 18;
                    var5 = var10[var5];
                    var5 = var9.bind(var1)(var5);
                    var13 = var5.ComponentDispatch;
                    var12 = var13.dispatch;
                    var5 = _closure1_slot15;
                    var11 = var5.OPEN_EMBEDDED_ACTIVITY;
                    var5 = {};
                    var5['location'] = var3;
                    var5['applicationId'] = var7;
                    var5['isFirstActivityInChannel'] = var18;
                    var5['isStart'] = var17;
                    var5['participants'] = var16;
                    var5['embeddedActivity'] = var15;
                    var5['inviterUserId'] = var14;
                    var5 = var12.bind(var13)(var11, var5);
                    var5 = 19;
                    var5 = var10[var5];
                    var9 = var9.bind(var1)(var5);
                    var5 = var9.shouldOpenActivityInPopoutWindow;
                    var5 = var5.bind(var9)();
                    if(var5) { _fun0008_ip = 68; continue _fun0008 }
case 109:
                    var9 = _closure1_slot11;
                    var5 = var9.getChannelId;
                    var5 = var5.bind(var9)();
                    if(!(var8 === var5)) { _fun0008_ip = 110; continue _fun0008 }
case 111:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var5 = 21;
                    var5 = var10[var5];
                    var5 = var9.bind(var1)(var5);
                    var5 = var5.bind(var1)(var8);
                    if(var5) { _fun0008_ip = 110; continue _fun0008 }
case 112:
                    var5 = _closure1_slot13;
                    var5 = var5.PANEL;
                    _fun0008_ip = 113; continue _fun0008;
case 110:
                    var8 = _closure1_slot13;
                    var5 = var8.PIP;
case 113:
                    _closure1_slot35 = var5;
                    _fun0008_ip = 75; continue _fun0008;
case 68:
                    var5 = _closure1_slot13;
                    var5 = var5.ACTIVITY_POPOUT_WINDOW;
                    _closure1_slot35 = var5;
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var5 = 20;
                    var5 = var9[var5];
                    var8 = var8.bind(var1)(var5);
                    var5 = var8.wait;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 20;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'ACTIVITY_POPOUT_WINDOW_OPEN';
                        var2['type'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var5.bind(var8)(var4);
case 75:
                    var5 = _closure1_slot33;
                    var4 = var5.set;
                    var6 = _closure1_slot50;
                    var3 = var3.id;
                    var3 = var6.bind(var1)(var3, var7);
                    var6 = var2.Date;
                    var2 = var6.now;
                    var2 = var2.bind(var6)();
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
case 107:
                    var1 = false;
                    return var1;
case 102:
                    var1 = false;
                    return var1;
case 99:
                    var1 = false;
                    return var1;
case 94:
                    var1 = false;
                    return var1;
                }
            };
            var8 = var8.bind(var1)(var9);
case 90:
            var9 = _closure1_slot49;
            var8 = {};
            var13 = var4 != var12;
            var11 = null;
            if(!var13) { _fun0007_ip = 114; continue _fun0007 }
case 115:
            var11 = var12;
case 114:
            var8['channelId'] = var11;
            var8['applicationId'] = var6;
            var8 = var9.bind(var1)(var8);
case 85:
            var8 = var5.length;
            var5 = 0;
            var8 = var8 > var5;
            var5 = null;
            if(!var8) { _fun0007_ip = 116; continue _fun0007 }
case 117:
            var5 = var7;
case 116:
            var9 = _closure1_slot44;
            var8 = _closure1_slot24;
            var7 = var2.id;
            var9 = var9.bind(var1)(var8, var7);
            var8 = var9.upsert;
            var7 = var2.id;
            var7 = var8.bind(var9)(var6, var7, var5);
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var8 = var8.bind(var1)(var7);
            var7 = var8.getEmbeddedActivityLocationChannelId;
            var8 = var7.bind(var8)(var2);
            if(!(var4 != var8)) { _fun0007_ip = 43; continue _fun0007 }
case 118:
            var7 = _closure1_slot44;
            var4 = _closure1_slot23;
            var9 = var7.bind(var1)(var4, var8);
            var8 = var9.upsert;
            var4 = var2.id;
            var4 = var8.bind(var9)(var6, var4, var5);
            var8 = _closure1_slot43;
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var10];
            var9 = var9.bind(var1)(var4);
            var4 = var9.getEmbeddedActivityLocationGuildId;
            var4 = var4.bind(var9)(var2);
            var4 = var8.bind(var1)(var4);
            var3 = _closure1_slot22;
            var4 = var7.bind(var1)(var3, var4);
            var3 = var4.upsert;
            var2 = var2.id;
            var2 = var3.bind(var4)(var6, var2, var5);
case 43:
            return var1;
        }
    };
    var _closure1_slot46 = var1;
    var1 = function updateEmbeddedActivitiesForGuild(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var3 = var1.activity_instances;
            var1 = null;
            if(!(var1 != var3)) { _fun0009_ip = 119; continue _fun0009 }
case 120:
            var2 = var3.forEach;
            var1 = function(arg1) {
                var3 = _closure1_slot46;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
case 119:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot47 = var1;
    var1 = function disconnectEmbeddedActivity(arg1) {
        var4 = _closure1_slot21;
        var3 = var4.delete;
        var1 = arg1;
        var1 = var1.applicationId;
        var1 = var3.bind(var4)(var1);
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 18;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var4 = var3.ComponentDispatch;
        var3 = var4.dispatch;
        var2 = _closure1_slot15;
        var2 = var2.RELEASE_ACTIVITY_WEB_VIEW;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot48 = var1;
    var1 = function handleEmbeddedActivityLaunchEnd(arg1) {
        var1 = arg1;
        var6 = var1.applicationId;
        var5 = var1.channelId;
        var4 = _closure1_slot25;
        var3 = var4.delete;
        var2 = _closure1_slot42;
        var1 = undefined;
        var2 = var2.bind(var1)(var5, var6);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot49 = var1;
    var1 = function getActivityKey(arg1, arg2) {
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = '';
        var3 = arg1;
        var2 = ':';
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot50 = var1;
    var13 = global;
    var5 = var13.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var1 = 0;
    var2 = var9[var1];
    var1 = undefined;
    var2 = var10.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var9[var2];
    var2 = var8.bind(var1)(var2);
    var6 = var2.ActivityPopoutWindowLayouts;
    var2 = 11;
    var2 = var9[var2];
    var2 = var8.bind(var1)(var2);
    var12 = var2.ActivityPanelModes;
    var _closure1_slot13 = var12;
    var11 = var2.FocusedActivityLayouts;
    var _closure1_slot14 = var11;
    var2 = 12;
    var2 = var9[var2];
    var2 = var8.bind(var1)(var2);
    var4 = var2.ComponentActions;
    var _closure1_slot15 = var4;
    var2 = var2.PopoutWindowKeys;
    var _closure1_slot16 = var2;
    var5 = var13.Set;
    var2 = var5.prototype;
    var4 = Object.create(var2, {constructor: {value: var5}});
    var18 = new Array(0);
    var19 = var4;
    var2 = new var19[var5](var18, var17);
    var5 = var2 instanceof Object ? var2 : var4;
    var2 = {};
    var4 = var13.Set;
    var14 = var4.prototype;
    var14 = Object.create(var14, {constructor: {value: var4}});
    var19 = var14;
    var4 = new var19[var4](var18);
    var4 = var4 instanceof Object ? var4 : var14;
    var2['everLaunchedActivities'] = var4;
    var4 = {};
    var2['seenNewActivities'] = var4;
    var4 = {};
    var2['seenUpdatedActivities'] = var4;
    var4 = null;
    var2['lastCheckedForBadgeableActivities'] = var4;
    var4 = {};
    var2['dateRangesForSurfaces'] = var4;
    var _closure1_slot17 = var2;
    var4 = new Array(0);
    var _closure1_slot18 = var4;
    var2 = new Array(0);
    var _closure1_slot19 = var2;
    var14 = function() {
        var4 = _closure1_slot8;
        var3 = function ActivityBucket() {
            var3 = this;
            var4 = _closure1_slot7;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = new Array(0);
            var3['items'] = var2;
            var2 = null;
            var3['cachedVisible'] = var2;
            var3['cachedHidden'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'upsert';
        var1['key'] = var2;
        var2 = function value(arg1, arg2, arg3) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = arg3;
                var2 = this;
                var3 = arg1;
                var _closure3_slot0 = var3;
                var3 = arg2;
                var _closure3_slot1 = var3;
                var5 = var2.items;
                var3 = var5.filter;
                var1 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var3 = arg1;
                        var4 = var3.applicationId;
                        var1 = _closure3_slot0;
                        var1 = var4 === var1;
                        if(!var1) { _fun0011_ip = 121; continue _fun0011 }
case 42:
                        var3 = var3.location;
                        var3 = var3.id;
                        var2 = _closure3_slot1;
                        var1 = var3 === var2;
case 121:
                        var1 = !var1;
                        return var1;
                    }
                };
                var1 = var3.bind(var5)(var1);
                var2['items'] = var1;
                var1 = null;
                if(!(var1 != var4)) { _fun0010_ip = 122; continue _fun0010 }
case 4:
                var3 = var2.items;
                var1 = var3.push;
                var1 = var1.bind(var3)(var4);
case 122:
                var1 = var2.invalidate;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(5);
        var2[0] = var1;
        var1 = {};
        var6 = 'removeWhere';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = this;
            var3 = arg1;
            var _closure3_slot0 = var3;
            var4 = var2.items;
            var3 = var4.filter;
            var1 = function(arg1) {
                var3 = _closure3_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                var1 = !var1;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var2['items'] = var1;
            var1 = var2.invalidate;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'clear';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = new Array(0);
            var2['items'] = var1;
            var1 = var2.invalidate;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getItems';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var5 = arg1;
                var1 = this;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 13;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var6.bind(var2)(var4);
                var7 = var4.ContentClassificationEmbeddedActivityFilterExperiment;
                var6 = var7.getConfig;
                var4 = {};
                var8 = 'embedded_activity_store';
                var4['location'] = var8;
                var4 = var6.bind(var7)(var4);
                var4 = var4.enabled;
                if(!var4) { _fun0012_ip = 123; continue _fun0012 }
case 35:
                var4 = 'all';
                if(!(var4 !== var5)) { _fun0012_ip = 123; continue _fun0012 }
case 124:
                var4 = 'visible';
                if(!(var4 !== var5)) { _fun0012_ip = 125; continue _fun0012 }
case 9:
                var4 = 'hidden';
                if(!(var4 !== var5)) { _fun0012_ip = 11; continue _fun0012 }
case 126:
                return var2;
case 11:
                var2 = var1.cachedHidden;
                var4 = null;
                if(!(var2 == var4)) { _fun0012_ip = 127; continue _fun0012 }
case 128:
                var6 = var1.items;
                var5 = var6.filter;
                var4 = function(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isAgeRestrictedClassificationReference;
                    var1 = arg1;
                    var1 = var1.contentClassification;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var5.bind(var6)(var4);
                var1['cachedHidden'] = var4;
                var2 = var4;
case 127:
                return var2;
case 125:
                var2 = var1.cachedVisible;
                var4 = null;
                if(!(var2 == var4)) { _fun0012_ip = 129; continue _fun0012 }
case 98:
                var5 = var1.items;
                var4 = var5.filter;
                var3 = function(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isAgeRestrictedClassificationReference;
                    var1 = arg1;
                    var1 = var1.contentClassification;
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var1['cachedVisible'] = var3;
                var2 = var3;
case 129:
                return var2;
case 123:
                var1 = var1.items;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'invalidate';
        var1['key'] = var6;
        var5 = function value() {
            var2 = this;
            var1 = null;
            var2['cachedVisible'] = var1;
            var2['cachedHidden'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[4] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var14 = var14.bind(var1)();
    var _closure1_slot20 = var14;
    var14 = var13.Map;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot21 = var14;
    var14 = var13.Map;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot22 = var14;
    var14 = var13.Map;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot23 = var14;
    var14 = var13.Map;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot24 = var14;
    var14 = var13.Map;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot25 = var14;
    var14 = var13.Set;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot26 = var14;
    var14 = var13.Map;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot27 = var14;
    var14 = var13.Map;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot28 = var14;
    var14 = var13.Map;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot29 = var14;
    var14 = var13.Map;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot30 = var14;
    var14 = var13.Map;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot31 = var14;
    var14 = var13.Map;
    var15 = var14.prototype;
    var15 = Object.create(var15, {constructor: {value: var14}});
    var19 = var15;
    var14 = new var19[var14](var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot32 = var14;
    var13 = var13.Map;
    var14 = var13.prototype;
    var14 = Object.create(var14, {constructor: {value: var13}});
    var19 = var14;
    var13 = new var19[var13](var18);
    var13 = var13 instanceof Object ? var13 : var14;
    var _closure1_slot33 = var13;
    var _closure1_slot34 = var1;
    var12 = var12.DISCONNECTED;
    var _closure1_slot35 = var12;
    var11 = var11.RESIZABLE;
    var _closure1_slot36 = var11;
    var6 = var6.NORMAL;
    var _closure1_slot37 = var6;
    var6 = 26;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var11 = var6.PersistedStore;
    var6 = function(arg1) {
        var4 = function EmbeddedActivitiesStoreClass() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot7;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot41;
                var1 = var1.bind(var3)();
                if(var1) { _fun0013_ip = 130; continue _fun0013 }
case 131:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0013_ip = 132; continue _fun0013;
case 130:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 132:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot8;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function initialize(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var4 = arg1;
                var8 = this;
                var7 = var8.waitFor;
                var12 = _closure1_slot9;
                var11 = _closure1_slot10;
                var10 = _closure1_slot11;
                var9 = _closure1_slot12;
                var13 = var8;
                var1 = var13[var7](var12, var11, var10, var9, var8);
                var1 = global;
                var7 = var1.Set;
                var2 = null;
                var6 = var2 == var4;
                var1 = undefined;
                var5 = undefined;
                if(var6) { _fun0014_ip = 133; continue _fun0014 }
case 134:
                var5 = var4.everLaunchedActivities;
case 133:
                if(!(var2 == var5)) { _fun0014_ip = 135; continue _fun0014 }
case 130:
                var5 = new Array(0);
case 135:
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var13 = var6;
                var12 = var5;
                var5 = new var13[var7](var12, var11);
                var5 = var5 instanceof Object ? var5 : var6;
                if(!(var2 != var4)) { _fun0014_ip = 136; continue _fun0014 }
case 137:
                var2 = {};
                var12 = var2;
                var11 = var4;
                var4 = copyDataProperties(var12, var11);
                var4 = 'everLaunchedActivities';
                var2[3] = var5;
                _closure1_slot17 = var2;
case 136:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(32);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function getState() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSelfEmbeddedActivityForChannel';
        var5['key'] = var7;
        var7 = function getSelfEmbeddedActivityForChannel(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var2 = null;
                var4 = var2 == var1;
                var1 = null;
                if(var4) { _fun0015_ip = 138; continue _fun0015 }
case 29:
                var4 = global;
                var6 = var4.Array;
                var5 = var6.from;
                var7 = _closure1_slot21;
                var4 = var7.values;
                var4 = var4.bind(var7)();
                var5 = var5.bind(var6)(var4);
                var4 = var5.find;
                var3 = function(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getEmbeddedActivityLocationChannelId;
                    var1 = arg1;
                    var1 = var1.location;
                    var2 = var2.bind(var3)(var1);
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0015_ip = 139; continue _fun0015 }
case 140:
                var2 = var3;
case 139:
                var1 = var2;
case 138:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getSelfEmbeddedActivityForLocation';
        var5['key'] = var7;
        var7 = function getSelfEmbeddedActivityForLocation(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var2 = null;
                var4 = var2 == var1;
                var1 = null;
                if(var4) { _fun0016_ip = 138; continue _fun0016 }
case 29:
                var4 = global;
                var6 = var4.Array;
                var5 = var6.from;
                var7 = _closure1_slot21;
                var4 = var7.values;
                var4 = var4.bind(var7)();
                var5 = var5.bind(var6)(var4);
                var4 = var5.find;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.location;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var1.id;
                    var1 = var2 === var1;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0016_ip = 139; continue _fun0016 }
case 140:
                var2 = var3;
case 139:
                var1 = var2;
case 138:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getSelfEmbeddedActivities';
        var5['key'] = var7;
        var7 = function getSelfEmbeddedActivities() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getEmbeddedActivitiesForGuild';
        var5['key'] = var7;
        var7 = function getEmbeddedActivitiesForGuild(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var4 = _closure1_slot22;
                var3 = var4.get;
                var1 = arg1;
                var6 = var3.bind(var4)(var1);
                var3 = null;
                var4 = var3 == var6;
                var1 = undefined;
                if(var4) { _fun0017_ip = 2; continue _fun0017 }
case 141:
                var5 = var6.getItems;
                var4 = 'visible';
                var1 = var5.bind(var6)(var4);
case 2:
                if(!(var3 == var1)) { _fun0017_ip = 142; continue _fun0017 }
case 143:
                var1 = _closure1_slot18;
case 142:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getEmbeddedActivitiesForChannel';
        var5['key'] = var7;
        var7 = function getEmbeddedActivitiesForChannel(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var4 = _closure1_slot23;
                var3 = var4.get;
                var1 = arg1;
                var6 = var3.bind(var4)(var1);
                var3 = null;
                var4 = var3 == var6;
                var1 = undefined;
                if(var4) { _fun0018_ip = 2; continue _fun0018 }
case 141:
                var5 = var6.getItems;
                var4 = 'visible';
                var1 = var5.bind(var6)(var4);
case 2:
                if(!(var3 == var1)) { _fun0018_ip = 142; continue _fun0018 }
case 143:
                var1 = _closure1_slot18;
case 142:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getEmbeddedActivitiesForLocation';
        var5['key'] = var7;
        var7 = function getEmbeddedActivitiesForLocation(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var4 = _closure1_slot24;
                var3 = var4.get;
                var1 = arg1;
                var1 = var1.id;
                var6 = var3.bind(var4)(var1);
                var3 = null;
                var4 = var3 == var6;
                var1 = undefined;
                if(var4) { _fun0019_ip = 131; continue _fun0019 }
case 144:
                var5 = var6.getItems;
                var4 = 'visible';
                var1 = var5.bind(var6)(var4);
case 131:
                if(!(var3 == var1)) { _fun0019_ip = 134; continue _fun0019 }
case 4:
                var1 = _closure1_slot18;
case 134:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getEmbeddedActivitiesForGuildIncludingHidden';
        var5['key'] = var7;
        var7 = function getEmbeddedActivitiesForGuildIncludingHidden(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var4 = _closure1_slot22;
                var3 = var4.get;
                var1 = arg1;
                var6 = var3.bind(var4)(var1);
                var3 = null;
                var4 = var3 == var6;
                var1 = undefined;
                if(var4) { _fun0020_ip = 2; continue _fun0020 }
case 141:
                var5 = var6.getItems;
                var4 = 'all';
                var1 = var5.bind(var6)(var4);
case 2:
                if(!(var3 == var1)) { _fun0020_ip = 142; continue _fun0020 }
case 143:
                var1 = _closure1_slot18;
case 142:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getEmbeddedActivitiesForChannelIncludingHidden';
        var5['key'] = var7;
        var7 = function getEmbeddedActivitiesForChannelIncludingHidden(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var4 = _closure1_slot23;
                var3 = var4.get;
                var1 = arg1;
                var6 = var3.bind(var4)(var1);
                var3 = null;
                var4 = var3 == var6;
                var1 = undefined;
                if(var4) { _fun0021_ip = 2; continue _fun0021 }
case 141:
                var5 = var6.getItems;
                var4 = 'all';
                var1 = var5.bind(var6)(var4);
case 2:
                if(!(var3 == var1)) { _fun0021_ip = 142; continue _fun0021 }
case 143:
                var1 = _closure1_slot18;
case 142:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getEmbeddedActivitiesForLocationIncludingHidden';
        var5['key'] = var7;
        var7 = function getEmbeddedActivitiesForLocationIncludingHidden(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var4 = _closure1_slot24;
                var3 = var4.get;
                var1 = arg1;
                var1 = var1.id;
                var6 = var3.bind(var4)(var1);
                var3 = null;
                var4 = var3 == var6;
                var1 = undefined;
                if(var4) { _fun0022_ip = 131; continue _fun0022 }
case 144:
                var5 = var6.getItems;
                var4 = 'all';
                var1 = var5.bind(var6)(var4);
case 131:
                if(!(var3 == var1)) { _fun0022_ip = 134; continue _fun0022 }
case 4:
                var1 = _closure1_slot18;
case 134:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getEmbeddedActivitiesByChannel';
        var5['key'] = var7;
        var7 = function getEmbeddedActivitiesByChannel() {
            var1 = global;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var6 = var3;
            var1 = new var6[var1](var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot23;
            var3 = var4.forEach;
            var2 = function(arg1, arg2) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var3 = arg1;
                    var2 = var3.getItems;
                    var1 = 'visible';
                    var4 = var2.bind(var3)(var1);
                    var2 = var4.length;
                    var1 = 0;
                    if(!(var2 > var1)) { _fun0023_ip = 143; continue _fun0023 }
case 145:
                    var3 = _closure3_slot0;
                    var2 = var3.set;
                    var1 = arg2;
                    var1 = var2.bind(var3)(var1, var4);
case 143:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getEmbeddedActivityDurationMs';
        var5['key'] = var7;
        var7 = function getEmbeddedActivityDurationMs(arg1, arg2) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var3 = _closure1_slot33;
                var2 = var3.get;
                var6 = _closure1_slot50;
                var5 = undefined;
                var4 = arg1;
                var1 = arg2;
                var1 = var6.bind(var5)(var4, var1);
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var2 = var1 == var3;
                if(var2) { _fun0024_ip = 133; continue _fun0024 }
case 146:
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var1 = var2 - var3;
case 133:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'isLaunchingActivity';
        var5['key'] = var7;
        var7 = function isLaunchingActivity() {
            var1 = _closure1_slot25;
            var2 = var1.size;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getShelfActivities';
        var5['key'] = var7;
        var7 = function getShelfActivities(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var4 = _closure1_slot43;
                var3 = undefined;
                var1 = arg1;
                var4 = var4.bind(var3)(var1);
                var3 = _closure1_slot27;
                var1 = var3.get;
                var1 = var1.bind(var3)(var4);
                var3 = null;
                if(!(var3 == var1)) { _fun0025_ip = 147; continue _fun0025 }
case 148:
                var1 = _closure1_slot19;
case 147:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getShelfFetchStatus';
        var5['key'] = var7;
        var7 = function getShelfFetchStatus(arg1) {
            var4 = _closure1_slot43;
            var3 = undefined;
            var2 = arg1;
            var3 = var4.bind(var3)(var2);
            var2 = _closure1_slot28;
            var1 = var2.get;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'shouldFetchShelf';
        var5['key'] = var7;
        var7 = function shouldFetchShelf(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var3 = _closure1_slot43;
                var5 = undefined;
                var2 = arg1;
                var3 = var3.bind(var5)(var2);
                var2 = _closure1_slot28;
                var1 = var2.get;
                var3 = var1.bind(var2)(var3);
                var1 = null;
                if(!(var1 == var3)) { _fun0026_ip = 5; continue _fun0026 }
case 148:
                var2 = {};
                var4 = false;
                var2['isFetching'] = var4;
                var3 = var2;
case 5:
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var4 = var2.bind(var4)();
                var2 = var1 == var3;
                var5 = undefined;
                if(var2) { _fun0026_ip = 149; continue _fun0026 }
case 150:
                var5 = var3.lastFetchTimestampMs;
case 149:
                var6 = var1 != var5;
                var2 = 0;
                if(!var6) { _fun0026_ip = 151; continue _fun0026 }
case 152:
                var2 = var5;
case 151:
                var4 = var4 - var2;
                var2 = 21600000;
                var2 = var4 > var2;
                var1 = var1 != var3;
                if(!var1) { _fun0026_ip = 153; continue _fun0026 }
case 154:
                var1 = var3.isFetching;
case 153:
                var1 = !var1;
                if(!var1) { _fun0026_ip = 96; continue _fun0026 }
case 155:
                var1 = var2;
case 96:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getOrientationLockStateForApp';
        var5['key'] = var7;
        var7 = function getOrientationLockStateForApp(arg1) {
            var3 = _closure1_slot29;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getPipOrientationLockStateForApp';
        var5['key'] = var7;
        var7 = function getPipOrientationLockStateForApp(arg1) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var4 = arg1;
                var3 = this;
                var2 = _closure1_slot30;
                var1 = var2.get;
                var1 = var1.bind(var2)(var4);
                var2 = null;
                if(!(var2 == var1)) { _fun0027_ip = 121; continue _fun0027 }
case 145:
                var2 = var3.getOrientationLockStateForApp;
                var1 = var2.bind(var3)(var4);
case 121:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getGridOrientationLockStateForApp';
        var5['key'] = var7;
        var7 = function getGridOrientationLockStateForApp(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var4 = arg1;
                var3 = this;
                var2 = _closure1_slot31;
                var1 = var2.get;
                var1 = var1.bind(var2)(var4);
                var2 = null;
                if(!(var2 == var1)) { _fun0028_ip = 156; continue _fun0028 }
case 145:
                var6 = _closure1_slot30;
                var5 = var6.get;
                var1 = var5.bind(var6)(var4);
case 156:
                if(!(var2 == var1)) { _fun0028_ip = 157; continue _fun0028 }
case 158:
                var2 = var3.getOrientationLockStateForApp;
                var1 = var2.bind(var3)(var4);
case 157:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'getLayoutModeForApp';
        var5['key'] = var7;
        var7 = function getLayoutModeForApp(arg1) {
            var3 = _closure1_slot32;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'getConnectedActivityChannelId';
        var5['key'] = var7;
        var7 = function getConnectedActivityChannelId() {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var3 = _closure1_slot34;
                var2 = null;
                if(!(var2 == var3)) { _fun0029_ip = 159; continue _fun0029 }
case 160:
                var2 = undefined;
                return var2;
case 159:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.getEmbeddedActivityLocationChannelId;
                var1 = _closure1_slot34;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'getConnectedActivityLocation';
        var5['key'] = var7;
        var7 = function getConnectedActivityLocation() {
            var1 = _closure1_slot34;
            return var1;
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'getActivityPanelMode';
        var5['key'] = var7;
        var7 = function getActivityPanelMode() {
            var1 = _closure1_slot35;
            return var1;
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'getFocusedLayout';
        var5['key'] = var7;
        var7 = function getFocusedLayout() {
            var1 = _closure1_slot36;
            return var1;
        };
        var5['value'] = var7;
        var1[24] = var5;
        var5 = {};
        var7 = 'getCurrentEmbeddedActivity';
        var5['key'] = var7;
        var7 = function getCurrentEmbeddedActivity() {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var3 = this;
                var1 = var3.getConnectedActivityLocation;
                var2 = var1.bind(var3)();
                var1 = var3.getSelfEmbeddedActivityForLocation;
                var2 = var1.bind(var3)(var2);
                var1 = null;
                var3 = var1 != var2;
                var1 = undefined;
                if(!var3) { _fun0030_ip = 161; continue _fun0030 }
case 162:
                var1 = var2;
case 161:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'isProxyTicketRefreshing';
        var5['key'] = var7;
        var7 = function isProxyTicketRefreshing(arg1) {
            var3 = _closure1_slot26;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[26] = var5;
        var5 = {};
        var7 = 'getEmbeddedActivityForUserId';
        var5['key'] = var7;
        var7 = function getEmbeddedActivityForUserId(arg1, arg2) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var13 = arg1;
                var12 = arg2;
                var11 = undefined;
                if(!(var11 === var12)) { _fun0031_ip = 32; continue _fun0031 }
case 163:
                return var11;
case 32:
                var2 = _closure1_slot39;
                var1 = _closure1_slot24;
                var9 = var2.bind(var11)(var1);
                var1 = var9.bind(var11)();
                var2 = var1.done;
                var8 = 2;
                var7 = 0;
                var6 = 1;
                var5 = 'visible';
                var4 = var1;
                var3 = undefined;
                var1 = undefined;
                if(var2) { _fun0031_ip = 164; continue _fun0031 }
case 165:
                var14 = var4.value;
                var2 = _closure1_slot3;
                var2 = var2.bind(var11)(var14, var8);
                var14 = var2[var7];
                var14 = _closure1_slot39;
                var15 = var2[var6];
                var2 = var15.getItems;
                var2 = var2.bind(var15)(var5);
                var15 = var14.bind(var11)(var2);
                var14 = var15.bind(var11)();
                var2 = var14.done;
                if(var2) { _fun0031_ip = 166; continue _fun0031 }
case 167:
                var16 = var14.value;
                var2 = var16.applicationId;
                if(!(var2 === var12)) { _fun0031_ip = 168; continue _fun0031 }
case 169:
                var17 = var16.userIds;
                var2 = var17.has;
                var2 = var2.bind(var17)(var13);
                var1 = var16;
                if(var2) { _fun0031_ip = 164; continue _fun0031 }
case 168:
                var17 = var15.bind(var11)();
                var2 = var17.done;
                var14 = var17;
                var3 = var16;
                if(!var2) { _fun0031_ip = 167; continue _fun0031 }
case 166:
                var14 = var9.bind(var11)();
                var2 = var14.done;
                var4 = var14;
                var1 = undefined;
                if(!var2) { _fun0031_ip = 165; continue _fun0031 }
case 164:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[27] = var5;
        var5 = {};
        var7 = 'hasActivityEverBeenLaunched';
        var5['key'] = var7;
        var7 = function hasActivityEverBeenLaunched(arg1) {
            var1 = _closure1_slot17;
            var3 = var1.everLaunchedActivities;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[28] = var5;
        var5 = {};
        var7 = 'getLaunchState';
        var5['key'] = var7;
        var7 = function getLaunchState(arg1, arg2) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var6 = arg1;
                var1 = arg2;
                var5 = null;
                if(!(var5 == var6)) { _fun0032_ip = 170; continue _fun0032 }
case 163:
                var2 = undefined;
                return var2;
case 170:
                var3 = _closure1_slot25;
                var2 = var3.get;
                var4 = _closure1_slot42;
                var7 = var5 != var1;
                var5 = null;
                if(!var7) { _fun0032_ip = 146; continue _fun0032 }
case 147:
                var5 = var1;
case 146:
                var1 = undefined;
                var1 = var4.bind(var1)(var5, var6);
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[29] = var5;
        var5 = {};
        var7 = 'getLaunchStates';
        var5['key'] = var7;
        var7 = function getLaunchStates() {
            var1 = _closure1_slot25;
            return var1;
        };
        var5['value'] = var7;
        var1[30] = var5;
        var5 = {};
        var7 = 'getActivityPopoutWindowLayout';
        var5['key'] = var7;
        var6 = function getActivityPopoutWindowLayout() {
            var1 = _closure1_slot37;
            return var1;
        };
        var5['value'] = var6;
        var1[31] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var12 = var6.bind(var1)(var11);
    var6 = 'EmbeddedActivitiesStore';
    var12['displayName'] = var6;
    var6 = 'EmbeddedActivities';
    var12['persistKey'] = var6;
    var6 = new Array(10);
    var11 = function(arg1) {
        var1 = {};
        var4 = arg1;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = new Array(0);
        var2 = 'seenFeaturedActivities';
        var1[1] = var3;
        var3 = false;
        var2 = 'shouldShowNewActivityIndicator';
        var1[1] = var3;
        return var1;
    };
    var6[0] = var11;
    var11 = function(arg1) {
        var2 = arg1;
        var1 = delete var2.seenFeaturedActivities;
        var1 = {};
        var4 = var1;
        var3 = var2;
        var2 = copyDataProperties(var4, var3);
        return var1;
    };
    var6[1] = var11;
    var11 = function(arg1) {
        var2 = arg1;
        var1 = delete var2.seenActivities;
        var1 = {};
        var4 = var1;
        var3 = var2;
        var2 = copyDataProperties(var4, var3);
        return var1;
    };
    var6[2] = var11;
    var11 = function(arg1) {
        var2 = arg1;
        var1 = delete var2.currentFreeActivity;
        var1 = delete var2.lastFreeActivityRotationTimestampMs;
        var1 = delete var2.freePeriodActivities;
        var1 = delete var2.shouldShowFreeActivityIndicator;
        var1 = {};
        var4 = var1;
        var3 = var2;
        var2 = copyDataProperties(var4, var3);
        return var1;
    };
    var6[3] = var11;
    var11 = function(arg1) {
        var1 = {};
        var4 = arg1;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = {};
        var2 = 'seenNewActivities';
        var1[1] = var3;
        var3 = {};
        var2 = 'seenUpdatedActivities';
        var1[1] = var3;
        return var1;
    };
    var6[4] = var11;
    var11 = function(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
            var2 = arg1;
            var1 = global;
            var4 = var1.Set;
            var1 = var2.everLaunchedActivities;
            var3 = null;
            if(!(var3 == var1)) { _fun0033_ip = 171; continue _fun0033 }
case 31:
            var1 = new Array(0);
case 171:
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var7 = var3;
            var6 = var1;
            var1 = new var7[var4](var6, var5);
            var3 = var1 instanceof Object ? var1 : var3;
            var1 = {};
            var6 = var1;
            var5 = var2;
            var2 = copyDataProperties(var6, var5);
            var2 = 'everLaunchedActivities';
            var1[1] = var3;
            return var1;
        }
    };
    var6[5] = var11;
    var11 = function(arg1) {
        var2 = arg1;
        var1 = delete var2.usersHavePlayedByApp;
        var1 = {};
        var4 = var1;
        var3 = var2;
        var2 = copyDataProperties(var4, var3);
        return var1;
    };
    var6[6] = var11;
    var11 = function(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var2 = arg1;
            var1 = global;
            var1 = var1.Set;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var9 = var3;
            var1 = new var9[var1](var8);
            var1 = var1 instanceof Object ? var1 : var3;
            var2['surfacesToShowNewActivityIndicator'] = var1;
            var1 = var2.shouldShowNewActivityIndicator;
            if(!var1) { _fun0034_ip = 172; continue _fun0034 }
case 2:
            var4 = var2.surfacesToShowNewActivityIndicator;
            var3 = var4.add;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 24;
            var5 = var5[var1];
            var1 = undefined;
            var1 = var6.bind(var1)(var5);
            var1 = var1.EmbeddedActivitySurfaces;
            var1 = var1.VOICE_LAUNCHER;
            var1 = var3.bind(var4)(var1);
case 172:
            var1 = delete var2.shouldShowNewActivityIndicator;
            var1 = {};
            var8 = var1;
            var7 = var2;
            var2 = copyDataProperties(var8, var7);
            return var1;
        }
    };
    var6[7] = var11;
    var11 = function(arg1) {
        var1 = {};
        var4 = arg1;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = null;
        var2 = 'lastCheckedForBadgeableActivities';
        var1[1] = var3;
        return var1;
    };
    var6[8] = var11;
    var11 = function(arg1) {
        var2 = arg1;
        var1 = delete var2.surfacesToShowNewActivityIndicator;
        var1 = {};
        var5 = var1;
        var4 = var2;
        var2 = copyDataProperties(var5, var4);
        var3 = {};
        var2 = 'dateRangesForSurfaces';
        var1[1] = var3;
        return var1;
    };
    var6[9] = var11;
    var12['migrations'] = var6;
    var6 = 20;
    var6 = var9[var6];
    var18 = var10.bind(var1)(var6);
    var6 = {};
    var10 = function handleActivityLayoutModeUpdate(arg1) {
        var1 = arg1;
        var4 = var1.applicationId;
        var3 = var1.layoutMode;
        var2 = _closure1_slot32;
        var1 = var2.set;
        var1 = var1.bind(var2)(var4, var3);
        var1 = undefined;
        return var1;
    };
    var6['ACTIVITY_LAYOUT_MODE_UPDATE'] = var10;
    var10 = function handleConnectionOpen(arg1) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guilds;
            var4 = _closure1_slot23;
            var3 = var4.clear;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot22;
            var3 = var4.clear;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot24;
            var3 = var4.clear;
            var3 = var3.bind(var4)();
            var4 = var5.forEach;
            var3 = function(arg1) {
                var3 = _closure1_slot47;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot9;
            var3 = var4.getId;
            var3 = var3.bind(var4)();
            var _closure2_slot0 = var3;
            var5 = function _loop(arg1) {
                _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                    var3 = arg1;
                    var _closure3_slot0 = var3;
                    var6 = _closure1_slot38;
                    var5 = var6.getEmbeddedActivitiesForLocationIncludingHidden;
                    var4 = var3.location;
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.some;
                    var2 = function(arg1) {
                        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                            var2 = arg1;
                            var4 = var2.applicationId;
                            var1 = _closure3_slot0;
                            var1 = var1.applicationId;
                            var1 = var4 === var1;
                            if(!var1) { _fun0037_ip = 158; continue _fun0037 }
case 171:
                            var4 = var2.launchId;
                            var3 = _closure3_slot0;
                            var3 = var3.launchId;
                            var1 = var4 === var3;
case 158:
                            if(!var1) { _fun0037_ip = 135; continue _fun0037 }
case 143:
                            var4 = var2.userIds;
                            var3 = var4.has;
                            var2 = _closure2_slot0;
                            var1 = var3.bind(var4)(var2);
case 135:
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2);
                    if(var2) { _fun0036_ip = 165; continue _fun0036 }
case 173:
                    var2 = _closure1_slot48;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 165:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = global;
            var3 = var2.Array;
            var2 = var3.from;
            var4 = _closure1_slot21;
            var1 = var4.values;
            var1 = var1.bind(var4)();
            var4 = var2.bind(var3)(var1);
            var1 = var4.length;
            var3 = 0;
            var2 = var3 < var1;
            var1 = undefined;
            if(!var2) { _fun0035_ip = 97; continue _fun0035 }
case 174:
            var2 = var4[var3];
            var2 = var5.bind(var1)(var2);
            var3 = var3 + 1;
            var2 = var4.length;
            if(var3 < var2) { _fun0035_ip = 174; continue _fun0035 }
case 97:
            return var1;
        }
    };
    var6['CONNECTION_OPEN_SUPPLEMENTAL'] = var10;
    var10 = function handleGuildCreate(arg1) {
        var1 = arg1;
        var3 = var1.guild;
        var2 = _closure1_slot47;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var6['GUILD_CREATE'] = var10;
    var10 = function handleChannelDelete(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
            var1 = arg1;
            var6 = var1.channel;
            var _closure2_slot0 = var6;
            var4 = _closure1_slot23;
            var3 = var4.get;
            var1 = var6.id;
            var9 = var3.bind(var4)(var1);
            var3 = null;
            var7 = var3 == var9;
            var1 = undefined;
            var4 = undefined;
            if(var7) { _fun0038_ip = 165; continue _fun0038 }
case 5:
            var8 = var9.getItems;
            var7 = 'all';
            var4 = var8.bind(var9)(var7);
case 165:
            if(!(var3 == var4)) { _fun0038_ip = 38; continue _fun0038 }
case 175:
            var4 = _closure1_slot18;
case 38:
            var9 = _closure1_slot23;
            var8 = var9.delete;
            var7 = var6.id;
            var7 = var8.bind(var9)(var7);
            var7 = _closure1_slot43;
            var6 = var6.guild_id;
            var7 = var7.bind(var1)(var6);
            var6 = _closure1_slot22;
            var5 = var6.get;
            var6 = var5.bind(var6)(var7);
            if(!(var3 != var6)) { _fun0038_ip = 174; continue _fun0038 }
case 176:
            var5 = var6.removeWhere;
            var3 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getEmbeddedActivityLocationChannelId;
                var1 = arg1;
                var1 = var1.location;
                var2 = var2.bind(var3)(var1);
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var5.bind(var6)(var3);
case 174:
            var3 = var4.forEach;
            var2 = function(arg1) {
                var3 = _closure1_slot24;
                var2 = var3.delete;
                var1 = arg1;
                var1 = var1.location;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var6['CHANNEL_DELETE'] = var10;
    var10 = function handleEmbeddedActivityLaunchStart(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
            var1 = arg1;
            var11 = var1.applicationId;
            var10 = var1.componentId;
            var4 = var1.commandOrigin;
            var8 = var1.launchParams;
            var5 = var1.channelId;
            var9 = var1.inviterUserId;
            var7 = _closure1_slot25;
            var6 = var7.set;
            var2 = _closure1_slot42;
            var1 = undefined;
            var5 = var2.bind(var1)(var5, var11);
            var2 = {};
            var11 = true;
            var2['isLaunching'] = var11;
            var2['componentId'] = var10;
            var2['inviterUserId'] = var9;
            var2['launchParams'] = var8;
            var2 = var6.bind(var7)(var5, var2);
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 25;
            var2 = var6[var2];
            var2 = var5.bind(var1)(var2);
            var2 = var2.CommandOrigin;
            var2 = var2.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
            if(!(var4 !== var2)) { _fun0039_ip = 177; continue _fun0039 }
case 178:
            var2 = _closure1_slot14;
            var2 = var2.RESIZABLE;
            _fun0039_ip = 179; continue _fun0039;
case 177:
            var4 = _closure1_slot14;
            var2 = var4.NO_CHAT;
case 179:
            _closure1_slot36 = var2;
            return var1;
        }
    };
    var6['EMBEDDED_ACTIVITY_LAUNCH_START'] = var10;
    var10 = function handleEmbeddedActivityLaunchSetProxyTicket(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var1 = arg1;
            var5 = var1.applicationId;
            var4 = var1.channelId;
            var7 = var1.proxyTicket;
            var3 = _closure1_slot42;
            var1 = undefined;
            var5 = var3.bind(var1)(var4, var5);
            var4 = _closure1_slot25;
            var3 = var4.get;
            var6 = var3.bind(var4)(var5);
            var3 = null;
            if(!(var3 != var6)) { _fun0040_ip = 152; continue _fun0040 }
case 142:
            var4 = _closure1_slot25;
            var3 = var4.set;
            var2 = {};
            var9 = var2;
            var8 = var6;
            var6 = copyDataProperties(var9, var8);
            var6 = 'proxyTicket';
            var2[5] = var7;
            var2 = var3.bind(var4)(var5, var2);
case 152:
            return var1;
        }
    };
    var6['EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET'] = var10;
    var10 = function handleEmbeddedActivityUpdateConnectedProxyTicket(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
            var1 = arg1;
            var4 = var1.applicationId;
            var6 = var1.proxyTicket;
            var3 = _closure1_slot21;
            var2 = var3.get;
            var5 = var2.bind(var3)(var4);
            var2 = null;
            if(!(var2 != var5)) { _fun0041_ip = 180; continue _fun0041 }
case 148:
            var3 = _closure1_slot21;
            var2 = var3.set;
            var1 = {};
            var8 = var1;
            var7 = var5;
            var5 = copyDataProperties(var8, var7);
            var5 = 'proxyTicket';
            var1[4] = var6;
            var1 = var2.bind(var3)(var4, var1);
            var1 = undefined;
            return var1;
case 180:
            var1 = false;
            return var1;
        }
    };
    var6['EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET'] = var10;
    var10 = function handleEmbeddedActivitySetProxyTicketRefreshing(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
            var1 = arg1;
            var3 = var1.applicationId;
            var1 = var1.refreshing;
            var2 = _closure1_slot26;
            if(var1) { _fun0042_ip = 144; continue _fun0042 }
case 181:
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            _fun0042_ip = 2; continue _fun0042;
case 144:
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var6['EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING'] = var10;
    var10 = function handleEmbeddedActivityLaunchSuccess(arg1) {
        var1 = arg1;
        var3 = var1.applicationId;
        var1 = _closure1_slot17;
        var2 = var1.everLaunchedActivities;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var6['EMBEDDED_ACTIVITY_LAUNCH_SUCCESS'] = var10;
    var10 = function handleEmbeddedActivityLaunchFail(arg1) {
        var1 = arg1;
        var4 = var1.applicationId;
        var1 = var1.channelId;
        var5 = _closure1_slot49;
        var3 = {};
        var3['applicationId'] = var4;
        var3['channelId'] = var1;
        var1 = undefined;
        var3 = var5.bind(var1)(var3);
        var3 = _closure1_slot26;
        var2 = var3.delete;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var6['EMBEDDED_ACTIVITY_LAUNCH_FAIL'] = var10;
    var10 = function handleEmbeddedActivityLaunchCancel(arg1) {
        var1 = arg1;
        var4 = var1.applicationId;
        var1 = var1.channelId;
        var5 = _closure1_slot49;
        var3 = {};
        var3['applicationId'] = var4;
        var3['channelId'] = var1;
        var1 = undefined;
        var3 = var5.bind(var1)(var3);
        var3 = _closure1_slot26;
        var2 = var3.delete;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var6['EMBEDDED_ACTIVITY_LAUNCH_CANCEL'] = var10;
    var10 = function handleEmbeddedActivityClose(arg1) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
            var1 = arg1;
            var4 = var1.applicationId;
            var3 = _closure1_slot21;
            var1 = var3.get;
            var5 = var1.bind(var3)(var4);
            var3 = _closure1_slot21;
            var1 = var3.delete;
            var1 = var1.bind(var3)(var4);
            var3 = null;
            var6 = var3 == var5;
            var1 = undefined;
            var4 = undefined;
            if(var6) { _fun0043_ip = 182; continue _fun0043 }
case 183:
            var5 = var5.location;
            var4 = var5.id;
case 182:
            var5 = _closure1_slot34;
            var6 = var3 == var5;
            var3 = undefined;
            if(var6) { _fun0043_ip = 184; continue _fun0043 }
case 150:
            var3 = var5.id;
case 184:
            if(!(var4 === var3)) { _fun0043_ip = 185; continue _fun0043 }
case 186:
            _closure1_slot34 = var1;
case 185:
            return var1;
        }
    };
    var6['EMBEDDED_ACTIVITY_CLOSE'] = var10;
    var10 = function handleUpdatePopoutWindowLayout(arg1) {
        var1 = arg1;
        var2 = var1.layout;
        _closure1_slot37 = var2;
        var1 = undefined;
        return var1;
    };
    var6['EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT'] = var10;
    var10 = function handleEmbeddedActivityUpdateV2(arg1) {
        var1 = arg1;
        var3 = var1.instance;
        var2 = _closure1_slot46;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var6['EMBEDDED_ACTIVITY_UPDATE_V2'] = var10;
    var10 = function handleLocalActivityUpdate(arg1) {
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
            var1 = arg1;
            var3 = var1.activity;
            var2 = null;
            if(!(var2 != var3)) { _fun0044_ip = 11; continue _fun0044 }
case 120:
            var5 = _closure1_slot21;
            var4 = var5.get;
            var6 = var3.application_id;
            var7 = var2 != var6;
            var3 = '';
            if(!var7) { _fun0044_ip = 158; continue _fun0044 }
case 146:
            var3 = var6;
case 158:
            var5 = var4.bind(var5)(var3);
            if(!(var2 != var5)) { _fun0044_ip = 187; continue _fun0044 }
case 28:
            var4 = _closure1_slot21;
            var3 = var4.set;
            var2 = var5.applicationId;
            var1 = {};
            var9 = var1;
            var8 = var5;
            var5 = copyDataProperties(var9, var8);
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
case 187:
            var1 = false;
            return var1;
case 11:
            var1 = false;
            return var1;
        }
    };
    var6['LOCAL_ACTIVITY_UPDATE'] = var10;
    var10 = function handleSetSelfEmbeddedActivityConfig(arg1) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
            var1 = arg1;
            var4 = var1.applicationId;
            var6 = var1.config;
            var3 = _closure1_slot21;
            var2 = var3.get;
            var5 = var2.bind(var3)(var4);
            var2 = null;
            if(!(var2 != var5)) { _fun0045_ip = 124; continue _fun0045 }
case 148:
            var4 = _closure1_slot21;
            var3 = var4.set;
            var2 = var5.applicationId;
            var1 = {};
            var8 = var1;
            var7 = var5;
            var5 = copyDataProperties(var8, var7);
            var5 = 'config';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
case 124:
            var1 = undefined;
            return var1;
        }
    };
    var6['EMBEDDED_ACTIVITY_SET_CONFIG'] = var10;
    var10 = function handleEmbeddedActivityFetchShelf(arg1) {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var3 = _closure1_slot43;
            var1 = undefined;
            var6 = var3.bind(var1)(var4);
            var5 = _closure1_slot28;
            var3 = var5.get;
            var8 = var3.bind(var5)(var6);
            var4 = var5.set;
            var3 = {};
            var7 = true;
            var3['isFetching'] = var7;
            var7 = null;
            var9 = var7 == var8;
            var7 = undefined;
            if(var9) { _fun0046_ip = 30; continue _fun0046 }
case 7:
            var7 = var8.lastFetchTimestampMs;
case 30:
            var3['lastFetchTimestampMs'] = var7;
            var3 = var4.bind(var5)(var6, var3);
            var3 = _closure1_slot17;
            var2 = global;
            var5 = var2.Date;
            var4 = var2.Date;
            var2 = var4.now;
            var11 = var2.bind(var4)();
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var12 = var4;
            var2 = new var12[var5](var11, var10);
            var4 = var2 instanceof Object ? var2 : var4;
            var2 = var4.toISOString;
            var2 = var2.bind(var4)();
            var3['lastCheckedForBadgeableActivities'] = var2;
            return var1;
        }
    };
    var6['EMBEDDED_ACTIVITY_FETCH_SHELF'] = var10;
    var10 = function handleEmbeddedActivityFetchShelfSuccess(arg1) {
        var1 = arg1;
        var5 = var1.guildId;
        var3 = var1.activities;
        var4 = _closure1_slot43;
        var1 = undefined;
        var5 = var4.bind(var1)(var5);
        var6 = _closure1_slot27;
        var4 = var6.set;
        var4 = var4.bind(var6)(var5, var3);
        var4 = global;
        var6 = var4.Date;
        var4 = var6.now;
        var6 = var4.bind(var6)();
        var4 = {};
        var4['activities'] = var3;
        var4['now'] = var6;
        var3 = function handleShowingNewActivityIndicator(arg1) {
            var1 = arg1;
            var6 = var1.activities;
            var1 = var1.now;
            var _closure3_slot0 = var1;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 22;
            var4 = var8[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var7 = _closure1_slot0;
            var4 = 23;
            var4 = var8[var4];
            var7 = var7.bind(var1)(var4);
            var4 = var7.getOS;
            var4 = var4.bind(var7)();
            var4 = var5.bind(var1)(var4);
            var _closure3_slot1 = var4;
            var5 = var6.reduce;
            var4 = function(arg1, arg2) {
                _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var3 = arg2;
                    var4 = var3.client_platform_config;
                    var3 = _closure3_slot1;
                    var4 = var4[var3];
                    var _closure4_slot1 = var4;
                    var3 = var4.label_from;
                    var6 = null;
                    if(!(var6 != var3)) { _fun0047_ip = 188; continue _fun0047 }
case 189:
                    var3 = var4.label_until;
                    if(!(var6 != var3)) { _fun0047_ip = 188; continue _fun0047 }
case 7:
                    var3 = {};
                    var6 = var4.label_from;
                    var3['fromDate'] = var6;
                    var6 = var4.label_until;
                    var3['untilDate'] = var6;
                    var _closure4_slot2 = var3;
                    var3 = global;
                    var8 = var3.Date;
                    var9 = var4.label_from;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {constructor: {value: var8}});
                    var10 = var7;
                    var6 = new var10[var8](var9, var8);
                    var7 = var6 instanceof Object ? var6 : var7;
                    var6 = var7.getTime;
                    var7 = var6.bind(var7)();
                    var _closure4_slot3 = var7;
                    var8 = var3.Date;
                    var9 = var4.label_until;
                    var6 = var8.prototype;
                    var6 = Object.create(var6, {constructor: {value: var8}});
                    var10 = var6;
                    var4 = new var10[var8](var9, var8);
                    var6 = var4 instanceof Object ? var4 : var6;
                    var4 = var6.getTime;
                    var6 = var4.bind(var6)();
                    var4 = _closure3_slot0;
                    var4 = var7 > var4;
                    if(var4) { _fun0047_ip = 190; continue _fun0047 }
case 164:
                    var5 = _closure3_slot0;
                    var4 = var6 < var5;
case 190:
                    if(var4) { _fun0047_ip = 191; continue _fun0047 }
case 192:
                    var5 = var3.Object;
                    var4 = var5.values;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 24;
                    var6 = var6[var3];
                    var3 = undefined;
                    var3 = var7.bind(var3)(var6);
                    var3 = var3.EmbeddedActivitySurfaces;
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        var1 = _closure4_slot1;
                        var3 = var1.omit_badge_from_surfaces;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                            var3 = arg1;
                            var2 = _closure4_slot0;
                            var4 = var2[var3];
                            var2 = null;
                            var2 = var2 == var4;
                            if(var2) { _fun0048_ip = 150; continue _fun0048 }
case 31:
                            var5 = global;
                            var6 = var5.Date;
                            var7 = var4.fromDate;
                            var5 = var6.prototype;
                            var5 = Object.create(var5, {constructor: {value: var6}});
                            var8 = var5;
                            var4 = new var8[var6](var7, var6);
                            var5 = var4 instanceof Object ? var4 : var5;
                            var4 = var5.getTime;
                            var5 = var4.bind(var5)();
                            var4 = _closure4_slot3;
                            var2 = var5 < var4;
case 150:
                            if(!var2) { _fun0048_ip = 152; continue _fun0048 }
case 124:
                            var2 = _closure4_slot0;
                            var1 = _closure4_slot2;
                            var2[var3] = var1;
case 152:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
case 191:
                    return var1;
case 188:
                    return var1;
                }
            };
            var3 = {};
            var3 = var5.bind(var6)(var4, var3);
            var2 = _closure1_slot17;
            var2['dateRangesForSurfaces'] = var3;
            return var1;
        };
        var3 = var3.bind(var1)(var4);
        var4 = _closure1_slot28;
        var3 = var4.set;
        var2 = {};
        var7 = false;
        var2['isFetching'] = var7;
        var2['lastFetchTimestampMs'] = var6;
        var2 = var3.bind(var4)(var5, var2);
        return var1;
    };
    var6['EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS'] = var10;
    var10 = function handleEmbeddedActivityFetchShelfFail(arg1) {
        _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var3 = _closure1_slot43;
            var1 = undefined;
            var5 = var3.bind(var1)(var4);
            var4 = _closure1_slot28;
            var2 = var4.get;
            var7 = var2.bind(var4)(var5);
            var3 = var4.set;
            var2 = {};
            var6 = false;
            var2['isFetching'] = var6;
            var6 = null;
            var8 = var6 == var7;
            var6 = undefined;
            if(var8) { _fun0049_ip = 30; continue _fun0049 }
case 7:
            var6 = var7.lastFetchTimestampMs;
case 30:
            var2['lastFetchTimestampMs'] = var6;
            var2 = var3.bind(var4)(var5, var2);
            return var1;
        }
    };
    var6['EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL'] = var10;
    var10 = function handleOrientationLockState(arg1) {
        _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
            var1 = arg1;
            var3 = var1.applicationId;
            var7 = var1.lockState;
            var6 = var1.pictureInPictureLockState;
            var4 = var1.gridLockState;
            var1 = null;
            if(!(var1 != var7)) { _fun0050_ip = 183; continue _fun0050 }
case 119:
            var5 = _closure1_slot29;
            var2 = var5.set;
            var2 = var2.bind(var5)(var3, var7);
            _fun0050_ip = 130; continue _fun0050;
case 183:
            var5 = _closure1_slot29;
            var2 = var5.delete;
            var2 = var2.bind(var5)(var3);
case 130:
            if(!(var1 !== var6)) { _fun0050_ip = 172; continue _fun0050 }
case 135:
            var2 = undefined;
            if(!(var2 !== var6)) { _fun0050_ip = 193; continue _fun0050 }
case 140:
            var5 = _closure1_slot30;
            var2 = var5.set;
            var2 = var2.bind(var5)(var3, var6);
            _fun0050_ip = 193; continue _fun0050;
case 172:
            var5 = _closure1_slot30;
            var2 = var5.delete;
            var2 = var2.bind(var5)(var3);
case 193:
            if(!(var1 !== var4)) { _fun0050_ip = 194; continue _fun0050 }
case 153:
            var1 = undefined;
            if(!(var1 !== var4)) { _fun0050_ip = 14; continue _fun0050 }
case 155:
            var2 = _closure1_slot31;
            var1 = var2.set;
            var1 = var1.bind(var2)(var3, var4);
            _fun0050_ip = 14; continue _fun0050;
case 194:
            var2 = _closure1_slot31;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
case 14:
            var1 = undefined;
            return var1;
        }
    };
    var6['EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE'] = var10;
    var10 = function handleSetPanelMode(arg1) {
        var1 = arg1;
        var2 = var1.activityPanelMode;
        _closure1_slot35 = var2;
        var1 = undefined;
        return var1;
    };
    var6['EMBEDDED_ACTIVITY_SET_PANEL_MODE'] = var10;
    var10 = function handleSetFocusedLayout(arg1) {
        var1 = arg1;
        var2 = var1.focusedActivityLayout;
        _closure1_slot36 = var2;
        var1 = undefined;
        return var1;
    };
    var6['EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT'] = var10;
    var10 = function handleChannelSelect(arg1) {
        _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var3 = _closure1_slot34;
            var1 = null;
            if(!(var1 != var3)) { _fun0051_ip = 195; continue _fun0051 }
case 39:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 15;
            var5 = var5[var3];
            var3 = undefined;
            var6 = var6.bind(var3)(var5);
            var5 = var6.getEmbeddedActivityLocationChannelId;
            var3 = _closure1_slot34;
            var3 = var5.bind(var6)(var3);
            var1 = var1 != var3;
            if(!var1) { _fun0051_ip = 130; continue _fun0051 }
case 133:
            var1 = var3 !== var4;
case 130:
            if(!var1) { _fun0051_ip = 152; continue _fun0051 }
case 38:
            var4 = _closure1_slot35;
            var3 = _closure1_slot13;
            var3 = var3.PANEL;
            var1 = var4 === var3;
case 152:
            if(!var1) { _fun0051_ip = 195; continue _fun0051 }
case 151:
            var1 = _closure1_slot13;
            var1 = var1.PIP;
            _closure1_slot35 = var1;
case 195:
            var1 = undefined;
            return var1;
        }
    };
    var6['CHANNEL_SELECT'] = var10;
    var10 = function handlePopoutWindowClose(arg1) {
        _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
            var1 = arg1;
            var3 = var1.key;
            var1 = _closure1_slot16;
            var1 = var1.ACTIVITY_POPOUT;
            if(!(var3 === var1)) { _fun0052_ip = 196; continue _fun0052 }
case 197:
            var1 = _closure1_slot13;
            var1 = var1.PIP;
            _closure1_slot35 = var1;
case 196:
            var1 = undefined;
            return var1;
        }
    };
    var6['POPOUT_WINDOW_CLOSE'] = var10;
    var10 = var12.prototype;
    var10 = Object.create(var10, {constructor: {value: var12}});
    var19 = var10;
    var17 = var6;
    var6 = new var19[var12](var18, var17, var16);
    var6 = var6 instanceof Object ? var6 : var10;
    var _closure1_slot38 = var6;
    var7 = 27;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/activities/EmbeddedActivitiesStore.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['FEATURED_ACTIVITY_IDS'] = var5;
    var3['NO_ACTIVITIES'] = var4;
    var3['NO_ACTIVITY_CONFIGS'] = var2;
    var2 = '0';
    var3['ACTIVITIES_GUILD_ID_SENTINEL_FOR_PRIVATE_CHANNELS'] = var2;
    return var1;
})();