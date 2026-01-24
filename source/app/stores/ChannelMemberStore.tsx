// app/stores/ChannelMemberStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var9;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot27 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function makeGroup(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg2;
            var3 = arg3;
            var2 = arg4;
            var _closure2_slot0 = var5;
            var1 = _closure1_slot20;
            var1 = var1.ONLINE;
            if(!(var1 !== var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = _closure1_slot20;
            var1 = var1.OFFLINE;
            if(!(var1 !== var5)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var1 = _closure1_slot20;
            var1 = var1.UNKNOWN;
            if(!(var1 !== var5)) { _fun0002_ip = 6; continue _fun0002 }
case 9:
            var8 = _closure1_slot16;
            var7 = var8.getGuild;
            var1 = arg1;
            var1 = var7.bind(var8)(var1);
            var7 = null;
            var9 = var7 != var1;
            var8 = null;
            if(!var9) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var10 = _closure1_slot15;
            var9 = var10.getRole;
            var1 = var1.id;
            var8 = var9.bind(var10)(var1, var5);
case 10:
            var1 = {};
            var9 = _closure1_slot23;
            var9 = var9.GROUP;
            var1['type'] = var9;
            var1['key'] = var5;
            var1['id'] = var5;
            var9 = var7 != var8;
            var7 = '';
            if(!var9) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var7 = var8.name;
case 12:
            var1['title'] = var7;
            var1['count'] = var3;
            var1['index'] = var2;
            return var1;
case 6:
            var1 = {};
            var6 = _closure1_slot23;
            var6 = var6.GROUP;
            var1['type'] = var6;
            var1['key'] = var5;
            var1['id'] = var5;
            var6 = function get title() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot20;
                    var2 = var2.ONLINE;
                    if(!(var2 !== var3)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var2 = _closure1_slot20;
                    var2 = var2.OFFLINE;
                    if(!(var2 !== var3)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var2 = 17;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.UQMV/E;
                    var2 = var3.bind(var4)(var2);
                    return var2;
case 16:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var2 = 17;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.Vv0abJ;
                    var2 = var3.bind(var4)(var2);
                    return var2;
case 14:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var1 = 17;
                    var2 = var6[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.WbGtnH;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var5 = undefined;
            var4 = 'title';
            Object.defineProperty(var1, var4, {get: var6, set: var5, enumerable: true});
            var1['count'] = var3;
            var1['index'] = var2;
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function makeMember(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var12 = arg1;
            var6 = arg3;
            var2 = _closure1_slot11;
            var1 = var2.getId;
            var1 = var1.bind(var2)();
            var1 = var6 === var1;
            var4 = _closure1_slot17;
            var2 = var4.isMobileOnline;
            var5 = var2.bind(var4)(var6);
            var4 = _closure1_slot17;
            var2 = var4.isVROnline;
            var4 = var2.bind(var4)(var6);
            if(var1) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var7 = _closure1_slot17;
            var2 = var7.getStatus;
            var9 = var2.bind(var7)(var6, var12);
            _fun0004_ip = 20; continue _fun0004;
case 18:
            var7 = _closure1_slot18;
            var2 = var7.getStatus;
            var9 = var2.bind(var7)();
case 20:
            if(var1) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var2 = _closure1_slot17;
            var1 = var2.getActivities;
            var8 = var1.bind(var2)(var6, var12);
            _fun0004_ip = 23; continue _fun0004;
case 21:
            var2 = _closure1_slot18;
            var1 = var2.getActivities;
            var8 = var1.bind(var2)();
case 23:
            var2 = _closure1_slot10;
            var1 = var2.getStreamForUser;
            var7 = var1.bind(var2)(var6, var12);
            var2 = _closure1_slot19;
            var1 = var2.getUser;
            var10 = var1.bind(var2)(var6);
            var1 = null;
            var2 = var1 == var10;
            if(var2) { _fun0004_ip = 24; continue _fun0004 }
case 6:
            var2 = {};
            var11 = _closure1_slot23;
            var11 = var11.MEMBER;
            var2['type'] = var11;
            var11 = _closure1_slot14;
            var3 = var11.getMember;
            var13 = var3.bind(var11)(var12, var6);
            var14 = var2;
            var3 = copyDataProperties(var14, var13);
            var3 = 'user';
            var2[var3] = var10;
            var3 = 'status';
            var2[var3] = var9;
            var3 = 'activities';
            var2[var3] = var8;
            var3 = 'applicationStream';
            var2[var3] = var7;
            var3 = arg2;
            var6 = var3 === var6;
            var3 = 'isOwner';
            var2[var3] = var6;
            var3 = 'isMobileOnline';
            var2[var3] = var5;
            var3 = 'isVROnline';
            var2[var3] = var4;
            var1 = var2;
case 24:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function getMemberListId(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = _closure1_slot12;
            var3 = var4.getChannel;
            var1 = arg1;
            var5 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 != var5)) { _fun0005_ip = 19; continue _fun0005 }
case 25:
            var1 = var5.memberListId;
            if(!(var3 != var1)) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var1 = var5.memberListId;
            _fun0005_ip = 28; continue _fun0005;
case 26:
            var4 = function computeMemberListId(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = arg1;
                    var4 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var3 = 18;
                    var3 = var5[var3];
                    var6 = undefined;
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.canEveryone;
                    var3 = _closure1_slot21;
                    var3 = var3.VIEW_CHANNEL;
                    var3 = var4.bind(var5)(var3, var2);
                    if(var3) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var3 = 19;
                    var3 = var8[var3];
                    var4 = var7.bind(var6)(var3);
                    var3 = var4.v3;
                    var5 = 20;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var2 = var2.permissionOverwrites;
                    var7 = var5.bind(var6)(var2);
                    var6 = var7.reduce;
                    var5 = function(arg1, arg2) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var1 = arg1;
                            var2 = arg2;
                            var5 = var2.id;
                            var10 = var2.allow;
                            var6 = var2.deny;
                            var4 = _closure1_slot2;
                            var3 = _closure1_slot3;
                            var8 = 21;
                            var3 = var3[var8];
                            var7 = undefined;
                            var9 = var4.bind(var7)(var3);
                            var4 = var9.has;
                            var3 = _closure1_slot21;
                            var3 = var3.VIEW_CHANNEL;
                            var3 = var4.bind(var9)(var10, var3);
                            if(var3) { _fun0007_ip = 31; continue _fun0007 }
case 5:
                            var4 = _closure1_slot2;
                            var3 = _closure1_slot3;
                            var3 = var3[var8];
                            var4 = var4.bind(var7)(var3);
                            var3 = var4.has;
                            var2 = _closure1_slot21;
                            var2 = var2.VIEW_CHANNEL;
                            var2 = var3.bind(var4)(var6, var2);
                            if(!var2) { _fun0007_ip = 32; continue _fun0007 }
case 21:
                            var3 = var1.push;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var4 = var2.concat;
                            var2 = 'deny:';
                            var2 = var4.bind(var2)(var5);
                            var2 = var3.bind(var1)(var2);
                            _fun0007_ip = 32; continue _fun0007;
case 31:
                            var3 = var1.push;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var4 = var2.concat;
                            var2 = 'allow:';
                            var2 = var4.bind(var2)(var5);
                            var2 = var3.bind(var1)(var2);
case 32:
                            return var1;
                        }
                    };
                    var2 = new Array(0);
                    var5 = var6.bind(var7)(var5, var2);
                    var2 = var5.sort;
                    var6 = var2.bind(var5)();
                    var5 = var6.join;
                    var2 = ',';
                    var2 = var5.bind(var6)(var2);
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.toString;
                    var2 = var2.bind(var3)();
                    return var2;
case 29:
                    var1 = _closure1_slot22;
                    return var1;
                }
            };
            var3 = undefined;
            var1 = var4.bind(var3)(var5);
case 28:
            _fun0005_ip = 33; continue _fun0005;
case 19:
            var1 = _closure1_slot22;
case 33:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var12 = function handleConnectionOpen() {
        var2 = _closure1_slot25;
        var1 = var2.reset;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var1 = function handleApplicationStreamUpdate() {
        var3 = _closure1_slot10;
        var1 = var3.getAllApplicationStreams;
        var1 = var1.bind(var3)();
        var4 = _closure1_slot26;
        var3 = var4.concat;
        var3 = var3.bind(var4)(var1);
        _closure1_slot26 = var1;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot25;
            var3 = var4.forEach;
            var2 = null;
            var1 = function(arg1) {
                var3 = arg1;
                var2 = var3.rebuildMember;
                var1 = _closure3_slot0;
                var1 = var1.ownerId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function handleLocalPresenceUpdate() {
        var4 = _closure1_slot11;
        var3 = var4.getId;
        var3 = var3.bind(var4)();
        var _closure2_slot0 = var3;
        var4 = _closure1_slot25;
        var3 = var4.forEach;
        var2 = null;
        var1 = function(arg1) {
            var3 = arg1;
            var2 = var3.rebuildMember;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot32 = var1;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var4 = 0;
    var2 = var9[var4];
    var1 = undefined;
    var2 = var10.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 9;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 10;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 11;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot15 = var2;
    var2 = 12;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot16 = var2;
    var2 = 13;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot17 = var2;
    var2 = 14;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot18 = var2;
    var2 = 15;
    var2 = var9[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot19 = var2;
    var2 = 16;
    var2 = var9[var2];
    var2 = var8.bind(var1)(var2);
    var5 = var2.StatusTypes;
    var _closure1_slot20 = var5;
    var2 = var2.Permissions;
    var _closure1_slot21 = var2;
    var5 = 'everyone';
    var _closure1_slot22 = var5;
    var2 = {};
    var6 = 'GROUP';
    var2['GROUP'] = var6;
    var6 = 'MEMBER';
    var2['MEMBER'] = var6;
    var6 = 'CONTENT_INVENTORY';
    var2['CONTENT_INVENTORY'] = var6;
    var6 = 'CONTENT_INVENTORY_GROUP';
    var2['CONTENT_INVENTORY_GROUP'] = var6;
    var6 = 'HIDDEN_CONTENT_INVENTORY';
    var2['HIDDEN_CONTENT_INVENTORY'] = var6;
    var6 = 'CONTENT_INVENTORY_LEADERBOARD';
    var2['CONTENT_INVENTORY_LEADERBOARD'] = var6;
    var _closure1_slot23 = var2;
    var6 = function() {
        var4 = _closure1_slot8;
        var3 = function MemberList(arg1, arg2) {
            var3 = this;
            var4 = _closure1_slot7;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = new Array(0);
            var3['rows'] = var2;
            var2 = new Array(0);
            var3['groups'] = var2;
            var2 = {};
            var3['members'] = var2;
            var2 = 0;
            var3['version'] = var2;
            var2 = arg1;
            var3['guildId'] = var2;
            var2 = arg2;
            var3['listId'] = var2;
            var2 = var3.updateOwnerId;
            var2 = var2.bind(var3)();
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'updateOwnerId';
        var1['key'] = var2;
        var2 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = this;
                var5 = _closure1_slot16;
                var4 = var5.getGuild;
                var2 = var3.guildId;
                var4 = var4.bind(var5)(var2);
                var2 = null;
                if(!(var2 != var4)) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                var5 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var1 = var2.getGuildVisualOwnerId;
                var2 = var1.bind(var2)(var4);
                var1 = var3.ownerId;
                var1 = var1 !== var2;
                if(!var1) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                var3['ownerId'] = var2;
                var1 = true;
case 36:
                return var1;
case 34:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(10);
        var2[0] = var1;
        var1 = {};
        var6 = 'setGroups';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var5 = arg1;
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = 0;
            var _closure3_slot1 = var3;
            var4 = var5.map;
            var3 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = arg1;
                    var6 = _closure3_slot1;
                    var3 = global;
                    var7 = var3.Math;
                    var5 = var7.max;
                    var8 = var1.count;
                    var3 = null;
                    var9 = var3 != var8;
                    var4 = 0;
                    var3 = 0;
                    if(!var9) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                    var3 = var8;
case 38:
                    var5 = var5.bind(var7)(var4, var3);
                    var4 = _closure3_slot1;
                    var3 = 1;
                    var3 = var5 + var3;
                    var3 = var4 + var3;
                    _closure3_slot1 = var3;
                    var4 = _closure1_slot28;
                    var2 = _closure3_slot0;
                    var13 = var2.guildId;
                    var12 = var1.id;
                    var14 = undefined;
                    var11 = var5;
                    var10 = var6;
                    var1 = var14[var4](var13, var12, var11, var10, var9);
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            var2['groups'] = var3;
            var2 = var2.rows;
            var1 = _closure3_slot1;
            var2['length'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'sync';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = arg2;
                var1 = this;
                var _closure3_slot0 = var1;
                var1 = arg1;
                var3 = var1[Symbol.iterator];
                var1 = var3().next;
                var7 = var1().value;
                var5 = var3;
                var1 = undefined;
                var5 = var5 === var1;
                var6 = undefined;
                if(var5) { _fun0010_ip = 40; continue _fun0010 }
case 27:
                var6 = var7;
case 40:
                var _closure3_slot1 = var6;
                if(var5) { _fun0010_ip = 8; continue _fun0010 }
case 41:
                var3.return();
case 8:
                var3 = var4.forEach;
                var2 = function(arg1, arg2) {
                    var4 = _closure3_slot0;
                    var3 = var4.update;
                    var2 = _closure3_slot1;
                    var1 = arg2;
                    var2 = var2 + var1;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'invalidate';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = this;
                var7 = arg1;
                var2 = var7[Symbol.iterator];
                var7 = var2().next;
                var5 = var7().value;
                var4 = var2;
                var1 = undefined;
                var4 = var4 === var1;
                var6 = undefined;
                if(var4) { _fun0011_ip = 42; continue _fun0011 }
case 15:
                var6 = var5;
case 42:
                var5 = undefined;
                if(var4) { _fun0011_ip = 19; continue _fun0011 }
case 7:
                var8 = var7().value;
                var7 = var2;
                var7 = var7 === var1;
                var5 = undefined;
                var4 = var7;
                if(var7) { _fun0011_ip = 19; continue _fun0011 }
case 43:
                var5 = var8;
                var4 = var7;
case 19:
                if(var4) { _fun0011_ip = 44; continue _fun0011 }
case 9:
                var2.return();
case 44:
                var2 = null;
                if(!(var6 <= var5)) { _fun0011_ip = 45; continue _fun0011 }
case 46:
                var7 = var3.rows;
                var7 = var7[var6];
                if(!(var2 != var7)) { _fun0011_ip = 45; continue _fun0011 }
case 47:
                var8 = var3.rows;
                var8 = delete var8[var6];
                var9 = var7.type;
                var8 = _closure1_slot23;
                var8 = var8.MEMBER;
                if(!(var9 === var8)) { _fun0011_ip = 48; continue _fun0011 }
case 49:
                var8 = var3.members;
                var7 = var7.user;
                var7 = var7.id;
                var7 = delete var8[var7];
case 48:
                var6 = var6 + 1;
                if(var6 <= var5) { _fun0011_ip = 46; continue _fun0011 }
case 45:
                var2 = var3.version;
                var2 = var2 + 1;
                var3['version'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'insert';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var6 = arg1;
                var3 = arg2;
                var2 = this;
                var1 = var3.group;
                var4 = var3.member;
                var5 = null;
                if(!(var5 == var1)) { _fun0012_ip = 50; continue _fun0012 }
case 15:
                if(!(var5 != var4)) { _fun0012_ip = 51; continue _fun0012 }
case 52:
                var10 = _closure1_slot29;
                var9 = var2.guildId;
                var8 = var2.ownerId;
                var3 = var4.user;
                var7 = var3.id;
                var3 = undefined;
                var7 = var10.bind(var3)(var9, var8, var7);
                if(!(var5 != var7)) { _fun0012_ip = 49; continue _fun0012 }
case 46:
                var9 = var2.rows;
                var8 = var9.splice;
                var5 = 0;
                var5 = var8.bind(var9)(var6, var5, var7);
                var5 = var2.members;
                var4 = var4.user;
                var4 = var4.id;
                var5[var4] = var7;
                _fun0012_ip = 51; continue _fun0012;
case 49:
                return var3;
case 50:
                var5 = var2.rows;
                var4 = var5.splice;
                var9 = _closure1_slot28;
                var8 = var2.guildId;
                var7 = var1.id;
                var3 = var1.count;
                var1 = undefined;
                var3 = var9.bind(var1)(var8, var7, var3);
                var1 = 0;
                var1 = var4.bind(var5)(var6, var1, var3);
case 51:
                var1 = var2.version;
                var1 = var1 + 1;
                var2['version'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'update';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var4 = arg1;
                var3 = arg2;
                var2 = this;
                var1 = var3.group;
                var5 = var3.member;
                var3 = var2.rows;
                var3 = var3[var4];
                var6 = null;
                var7 = var6 != var3;
                if(!var7) { _fun0013_ip = 53; continue _fun0013 }
case 54:
                var9 = var3.type;
                var8 = _closure1_slot23;
                var8 = var8.MEMBER;
                var7 = var9 === var8;
case 53:
                if(!var7) { _fun0013_ip = 36; continue _fun0013 }
case 55:
                var7 = var2.members;
                var3 = var3.user;
                var3 = var3.id;
                var3 = delete var7[var3];
case 36:
                if(!(var6 == var1)) { _fun0013_ip = 56; continue _fun0013 }
case 47:
                if(!(var6 != var5)) { _fun0013_ip = 57; continue _fun0013 }
case 58:
                var10 = _closure1_slot29;
                var9 = var2.guildId;
                var8 = var2.ownerId;
                var3 = var5.user;
                var7 = var3.id;
                var3 = undefined;
                var7 = var10.bind(var3)(var9, var8, var7);
                if(!(var6 != var7)) { _fun0013_ip = 59; continue _fun0013 }
case 60:
                var6 = var2.rows;
                var6[var4] = var7;
                var6 = var2.members;
                var5 = var5.user;
                var5 = var5.id;
                var6[var5] = var7;
                _fun0013_ip = 57; continue _fun0013;
case 59:
                return var3;
case 56:
                var3 = var2.rows;
                var8 = _closure1_slot28;
                var7 = var2.guildId;
                var6 = var1.id;
                var5 = var1.count;
                var1 = undefined;
                var1 = var8.bind(var1)(var7, var6, var5);
                var3[var4] = var1;
case 57:
                var1 = var2.version;
                var1 = var1 + 1;
                var2['version'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'delete';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var5 = arg1;
                var2 = this;
                var1 = var2.rows;
                var1 = var1[var5];
                var3 = null;
                if(!(var3 != var1)) { _fun0014_ip = 16; continue _fun0014 }
case 61:
                var4 = var1.type;
                var3 = _closure1_slot23;
                var3 = var3.MEMBER;
                if(!(var4 === var3)) { _fun0014_ip = 33; continue _fun0014 }
case 26:
                var3 = var2.members;
                var1 = var1.user;
                var1 = var1.id;
                var1 = delete var3[var1];
case 33:
                var4 = var2.rows;
                var3 = var4.splice;
                var1 = 1;
                var1 = var3.bind(var4)(var5, var1);
                var1 = var2.version;
                var1 = var1 + 1;
                var2['version'] = var1;
case 16:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'rebuildMember';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var9 = arg1;
                var2 = this;
                var1 = var2.members;
                var5 = var1[var9];
                var1 = null;
                if(!(var1 != var5)) { _fun0015_ip = 62; continue _fun0015 }
case 61:
                var1 = global;
                var4 = var1.Object;
                var3 = var4.assign;
                var8 = _closure1_slot29;
                var7 = var2.guildId;
                var6 = var2.ownerId;
                var1 = undefined;
                var1 = var8.bind(var1)(var7, var6, var9);
                var1 = var3.bind(var4)(var5, var1);
                var1 = var2.version;
                var1 = var1 + 1;
                var2['version'] = var1;
case 62:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'rebuildMembers';
        var1['key'] = var6;
        var6 = function value() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var4 = this;
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = var4.members;
                var3 = var2.bind(var3)(var1);
                var1 = var3.length;
                var2 = 0;
                var1 = var2 < var1;
                if(!var1) { _fun0016_ip = 63; continue _fun0016 }
case 17:
                var5 = var3[var2];
                var1 = var4.rebuildMember;
                var1 = var1.bind(var4)(var5);
                var2 = var2 + 1;
                var1 = var3.length;
                if(var2 < var1) { _fun0016_ip = 17; continue _fun0016 }
case 63:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'rebuildGroup';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var10 = arg1;
                var2 = this;
                var _closure3_slot0 = var10;
                var4 = var2.groups;
                var3 = var4.findIndex;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var6 = var3.bind(var4)(var1);
                var1 = var2.groups;
                var1 = var1[var6];
                var3 = null;
                if(!(var3 != var1)) { _fun0017_ip = 64; continue _fun0017 }
case 65:
                var5 = var2.groups;
                var4 = var5.splice;
                var9 = _closure1_slot28;
                var14 = var2.guildId;
                var12 = var1.count;
                var11 = var1.index;
                var15 = undefined;
                var13 = var10;
                var3 = var15[var9](var14, var13, var12, var11, var10);
                var1 = 1;
                var1 = var4.bind(var5)(var6, var1, var3);
                var1 = var2.version;
                var1 = var1 + 1;
                var2['version'] = var1;
case 64:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[9] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var6 = var6.bind(var1)();
    var _closure1_slot24 = var6;
    var6 = function() {
        var4 = _closure1_slot8;
        var3 = function MemberLists() {
            var3 = this;
            var4 = _closure1_slot7;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = {};
            var3['_guildLists'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'get';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var7 = arg1;
                var4 = arg2;
                var1 = this;
                var2 = var1._guildLists;
                var3 = var2[var7];
                var2 = null;
                if(!(var2 == var3)) { _fun0018_ip = 54; continue _fun0018 }
case 66:
                var5 = var1._guildLists;
                var1 = {};
                var5[var7] = var1;
                var3 = var1;
case 54:
                var1 = var3[var4];
                if(!(var2 == var1)) { _fun0018_ip = 67; continue _fun0018 }
case 68:
                var2 = _closure1_slot24;
                var6 = var2.prototype;
                var6 = Object.create(var6, {constructor: {value: var2}});
                var10 = var6;
                var9 = var7;
                var8 = var4;
                var2 = new var10[var2](var9, var8, var7);
                var2 = var2 instanceof Object ? var2 : var6;
                var6 = var2.setGroups;
                var7 = {};
                var5 = _closure1_slot20;
                var5 = var5.UNKNOWN;
                var7['id'] = var5;
                var5 = 0;
                var7['count'] = var5;
                var5 = new Array(1);
                var5[0] = var7;
                var5 = var6.bind(var2)(var5);
                var3[var4] = var2;
                var1 = var2;
case 67:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'forEach';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var5 = arg1;
                var6 = arg2;
                var2 = this;
                var _closure3_slot0 = var6;
                var3 = null;
                if(!(var3 != var5)) { _fun0019_ip = 69; continue _fun0019 }
case 70:
                var4 = var2._guildLists;
                var5 = var4[var5];
                if(!(var3 != var5)) { _fun0019_ip = 50; continue _fun0019 }
case 7:
                var7 = _closure1_slot1;
                var4 = _closure1_slot3;
                var3 = 20;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var7.bind(var3)(var4);
                var3 = var4.forEach;
                var3 = var3.bind(var4)(var5, var6);
                _fun0019_ip = 50; continue _fun0019;
case 69:
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var3 = 20;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.forEach;
                var2 = var2._guildLists;
                var1 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 20;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.forEach;
                    var3 = _closure3_slot0;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1);
case 50:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'delete';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var2 = var1._guildLists;
            var1 = arg1;
            var1 = delete var2[var1];
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'reset';
        var1['key'] = var6;
        var5 = function value() {
            var2 = {};
            var1 = this;
            var1['_guildLists'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var6 = var6.bind(var1)();
    var11 = var6.prototype;
    var11 = Object.create(var11, {constructor: {value: var6}});
    var17 = var11;
    var6 = new var17[var6](var16);
    var6 = var6 instanceof Object ? var6 : var11;
    var _closure1_slot25 = var6;
    var6 = new Array(0);
    var _closure1_slot26 = var6;
    var6 = 22;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var11 = var6.Store;
    var6 = function(arg1) {
        var4 = function ChannelMemberStore() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
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
                var1 = _closure1_slot27;
                var1 = var1.bind(var3)();
                if(var1) { _fun0020_ip = 71; continue _fun0020 }
case 72:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0020_ip = 73; continue _fun0020;
case 71:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 73:
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
        var1 = function value() {
            var4 = this;
            var14 = var4.waitFor;
            var25 = _closure1_slot19;
            var24 = _closure1_slot16;
            var23 = _closure1_slot15;
            var22 = _closure1_slot12;
            var21 = _closure1_slot14;
            var20 = _closure1_slot17;
            var19 = _closure1_slot18;
            var18 = _closure1_slot11;
            var17 = _closure1_slot13;
            var16 = _closure1_slot10;
            var15 = _closure1_slot9;
            var26 = var4;
            var2 = var26[var14](var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15, var14);
            var5 = var4.syncWith;
            var2 = _closure1_slot18;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = _closure1_slot32;
            var2 = var5.bind(var4)(var3, var2);
            var3 = var4.syncWith;
            var5 = _closure1_slot10;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot31;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getProps';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = _closure1_slot25;
            var3 = var4.get;
            var5 = _closure1_slot30;
            var2 = undefined;
            var1 = arg2;
            var2 = var5.bind(var2)(var1);
            var1 = arg1;
            var2 = var3.bind(var4)(var1, var2);
            var1 = {};
            var7 = var2.guildId;
            var6 = var2.listId;
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var4 = '';
            var3 = ':';
            var3 = var5.bind(var4)(var7, var3, var6);
            var1['listId'] = var3;
            var3 = var2.groups;
            var1['groups'] = var3;
            var3 = var2.rows;
            var1['rows'] = var3;
            var2 = var2.version;
            var1['version'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getRows';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            var4 = _closure1_slot25;
            var3 = var4.get;
            var5 = _closure1_slot30;
            var2 = undefined;
            var1 = arg2;
            var2 = var5.bind(var2)(var1);
            var1 = arg1;
            var1 = var3.bind(var4)(var1, var2);
            var1 = var1.rows;
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var11 = var6.bind(var1)(var11);
    var6 = 'ChannelMemberStore';
    var11['displayName'] = var6;
    var6 = 23;
    var6 = var9[var6];
    var16 = var10.bind(var1)(var6);
    var6 = {};
    var6['CONNECTION_OPEN'] = var12;
    var6['OVERLAY_INITIALIZE'] = var12;
    var12 = function handleGuildMemberListUpdate(arg1) {
        var1 = arg1;
        var6 = _closure1_slot25;
        var5 = var6.get;
        var4 = var1.guildId;
        var3 = var1.id;
        var3 = var5.bind(var6)(var4, var3);
        var _closure2_slot0 = var3;
        var5 = var1.ops;
        var4 = var5.forEach;
        var2 = function(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var1 = arg1;
                var3 = var1.op;
                var2 = 'SYNC';
                if(!(var2 !== var3)) { _fun0021_ip = 56; continue _fun0021 }
case 74:
                var2 = 'INVALIDATE';
                if(!(var2 !== var3)) { _fun0021_ip = 75; continue _fun0021 }
case 76:
                var2 = 'INSERT';
                if(!(var2 !== var3)) { _fun0021_ip = 77; continue _fun0021 }
case 78:
                var2 = 'UPDATE';
                if(!(var2 !== var3)) { _fun0021_ip = 79; continue _fun0021 }
case 38:
                var2 = 'DELETE';
                if(!(var2 === var3)) { _fun0021_ip = 80; continue _fun0021 }
case 81:
                var4 = _closure2_slot0;
                var3 = var4.delete;
                var2 = var1.index;
                var2 = var3.bind(var4)(var2);
                _fun0021_ip = 80; continue _fun0021;
case 79:
                var5 = _closure2_slot0;
                var4 = var5.update;
                var3 = var1.index;
                var2 = var1.item;
                var2 = var4.bind(var5)(var3, var2);
                _fun0021_ip = 80; continue _fun0021;
case 77:
                var5 = _closure2_slot0;
                var4 = var5.insert;
                var3 = var1.index;
                var2 = var1.item;
                var2 = var4.bind(var5)(var3, var2);
                _fun0021_ip = 80; continue _fun0021;
case 75:
                var4 = _closure2_slot0;
                var3 = var4.invalidate;
                var2 = var1.range;
                var2 = var3.bind(var4)(var2);
                _fun0021_ip = 80; continue _fun0021;
case 56:
                var4 = _closure2_slot0;
                var3 = var4.sync;
                var2 = var1.range;
                var1 = var1.items;
                var1 = var3.bind(var4)(var2, var1);
case 80:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2);
        var2 = var3.setGroups;
        var1 = var1.groups;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var6['GUILD_MEMBER_LIST_UPDATE'] = var12;
    var12 = function handleGuildUpdate(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var4 = _closure1_slot25;
        var3 = var4.forEach;
        var2 = var1.id;
        var1 = function(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var2 = arg1;
                var1 = var2.updateOwnerId;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0022_ip = 25; continue _fun0022 }
case 82:
                var1 = var2.rebuildMembers;
                var1 = var1.bind(var2)();
case 25:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var6['GUILD_UPDATE'] = var12;
    var12 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var3 = _closure1_slot25;
        var2 = var3.delete;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var6['GUILD_DELETE'] = var12;
    var12 = function handleGuildRoleUpdate(arg1) {
        var2 = arg1;
        var4 = var2.guildId;
        var2 = var2.role;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot25;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var2 = arg1;
            var3 = var2.rebuildGroup;
            var1 = _closure2_slot0;
            var1 = var1.id;
            var1 = var3.bind(var2)(var1);
            var1 = var2.rebuildMembers;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var4, var1);
        var1 = undefined;
        return var1;
    };
    var6['GUILD_ROLE_UPDATE'] = var12;
    var12 = function handleMemberUpdate(arg1) {
        var2 = arg1;
        var4 = var2.guildId;
        var2 = var2.user;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot25;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = arg1;
            var2 = var3.rebuildMember;
            var1 = _closure2_slot0;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var4, var1);
        var1 = undefined;
        return var1;
    };
    var6['GUILD_MEMBER_UPDATE'] = var12;
    var7 = function handleChannelUpdates() {
        var1 = true;
        return var1;
    };
    var6['CHANNEL_UPDATES'] = var7;
    var7 = var11.prototype;
    var7 = Object.create(var7, {constructor: {value: var11}});
    var17 = var7;
    var15 = var6;
    var6 = new var17[var11](var16, var15, var14);
    var6 = var6 instanceof Object ? var6 : var7;
    var7 = 24;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'stores/ChannelMemberStore.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['EVERYONE_ID'] = var5;
    var3['EVERYONE_CHANNEL_ID'] = var4;
    var3['MemberListRowTypes'] = var2;
    return var1;
})();