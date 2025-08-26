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
            _closure1_slot27 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function makeGroup(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg2;
            var3 = arg3;
            var2 = arg4;
            var _closure2_slot0 = var5;
            var1 = _closure1_slot20;
            var1 = var1.ONLINE;
            if(!(var1 !== var5)) { _fun0002_ip = 167; continue _fun0002 }
 35:
            var1 = _closure1_slot20;
            var1 = var1.OFFLINE;
            if(!(var1 !== var5)) { _fun0002_ip = 167; continue _fun0002 }
 49:
            var1 = _closure1_slot20;
            var1 = var1.UNKNOWN;
            if(!(var1 !== var5)) { _fun0002_ip = 167; continue _fun0002 }
 63:
            var8 = _closure1_slot16;
            var7 = var8.getGuild;
            var1 = arg1;
            var1 = var7.bind(var8)(var1);
            var7 = null;
            var9 = var7 != var1;
            var8 = null;
            if(!var9) { _fun0002_ip = 112; continue _fun0002 }
 91:
            var10 = _closure1_slot15;
            var9 = var10.getRole;
            var1 = var1.id;
            var8 = var9.bind(var10)(var1, var5);
 112:
            var1 = {};
            var9 = _closure1_slot23;
            var9 = var9.GROUP;
            var1['type'] = var9;
            var1['key'] = var5;
            var1['id'] = var5;
            var9 = var7 != var8;
            var7 = '';
            if(!var9) { _fun0002_ip = 152; continue _fun0002 }
 147:
            var7 = var8.name;
 152:
            var1['title'] = var7;
            var1['count'] = var3;
            var1['index'] = var2;
            return var1;
 167:
            var1 = {};
            var6 = _closure1_slot23;
            var6 = var6.GROUP;
            var1['type'] = var6;
            var1['key'] = var5;
            var1['id'] = var5;
            var6 = function get title() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot20;
                    var2 = var2.ONLINE;
                    if(!(var2 !== var3)) { _fun0003_ip = 159; continue _fun0003 }
 27:
                    var2 = _closure1_slot20;
                    var2 = var2.OFFLINE;
                    if(!(var2 !== var3)) { _fun0003_ip = 100; continue _fun0003 }
 41:
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
                    var2 = var2.UQMV/P;
                    var2 = var3.bind(var4)(var2);
                    return var2;
 100:
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
                    var2 = var2.Vv0abG;
                    var2 = var3.bind(var4)(var2);
                    return var2;
 159:
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
                    var1 = var1.WbGtnJ;
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
 0:
            var11 = arg1;
            var5 = arg3;
            var2 = _closure1_slot11;
            var1 = var2.getId;
            var1 = var1.bind(var2)();
            var1 = var5 === var1;
            var4 = _closure1_slot17;
            var2 = var4.isMobileOnline;
            var4 = var2.bind(var4)(var5);
            if(var1) { _fun0004_ip = 63; continue _fun0004 }
 45:
            var6 = _closure1_slot17;
            var2 = var6.getStatus;
            var8 = var2.bind(var6)(var5, var11);
            _fun0004_ip = 77; continue _fun0004;
 63:
            var6 = _closure1_slot18;
            var2 = var6.getStatus;
            var8 = var2.bind(var6)();
 77:
            if(var1) { _fun0004_ip = 98; continue _fun0004 }
 80:
            var2 = _closure1_slot17;
            var1 = var2.getActivities;
            var7 = var1.bind(var2)(var5, var11);
            _fun0004_ip = 112; continue _fun0004;
 98:
            var2 = _closure1_slot18;
            var1 = var2.getActivities;
            var7 = var1.bind(var2)();
 112:
            var2 = _closure1_slot10;
            var1 = var2.getStreamForUser;
            var6 = var1.bind(var2)(var5, var11);
            var2 = _closure1_slot19;
            var1 = var2.getUser;
            var9 = var1.bind(var2)(var5);
            var1 = null;
            var2 = var1 == var9;
            if(var2) { _fun0004_ip = 257; continue _fun0004 }
 152:
            var2 = {};
            var10 = _closure1_slot23;
            var10 = var10.MEMBER;
            var2['type'] = var10;
            var10 = _closure1_slot14;
            var3 = var10.getMember;
            var12 = var3.bind(var10)(var11, var5);
            var13 = var2;
            var3 = copyDataProperties(var13, var12);
            var3 = 'user';
            var2[var3] = var9;
            var3 = 'status';
            var2[var3] = var8;
            var3 = 'activities';
            var2[var3] = var7;
            var3 = 'applicationStream';
            var2[var3] = var6;
            var3 = arg2;
            var5 = var3 === var5;
            var3 = 'isOwner';
            var2[var3] = var5;
            var3 = 'isMobileOnline';
            var2[var3] = var4;
            var1 = var2;
 257:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function getMemberListId(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = _closure1_slot12;
            var3 = var4.getChannel;
            var1 = arg1;
            var5 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 != var5)) { _fun0005_ip = 60; continue _fun0005 }
 26:
            var1 = var5.memberListId;
            if(!(var3 != var1)) { _fun0005_ip = 44; continue _fun0005 }
 36:
            var1 = var5.memberListId;
            _fun0005_ip = 58; continue _fun0005;
 44:
            var4 = function computeMemberListId(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
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
                    if(var3) { _fun0006_ip = 165; continue _fun0006 }
 53:
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
 0:
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
                            if(var3) { _fun0007_ip = 149; continue _fun0007 }
 72:
                            var4 = _closure1_slot2;
                            var3 = _closure1_slot3;
                            var3 = var3[var8];
                            var4 = var4.bind(var7)(var3);
                            var3 = var4.has;
                            var2 = _closure1_slot21;
                            var2 = var2.VIEW_CHANNEL;
                            var2 = var3.bind(var4)(var6, var2);
                            if(!var2) { _fun0007_ip = 183; continue _fun0007 }
 113:
                            var3 = var1.push;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var4 = var2.concat;
                            var2 = 'deny:';
                            var2 = var4.bind(var2)(var5);
                            var2 = var3.bind(var1)(var2);
                            _fun0007_ip = 183; continue _fun0007;
 149:
                            var3 = var1.push;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var4 = var2.concat;
                            var2 = 'allow:';
                            var2 = var4.bind(var2)(var5);
                            var2 = var3.bind(var1)(var2);
 183:
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
 165:
                    var1 = _closure1_slot22;
                    return var1;
                }
            };
            var3 = undefined;
            var1 = var4.bind(var3)(var5);
 58:
            _fun0005_ip = 64; continue _fun0005;
 60:
            var1 = _closure1_slot22;
 64:
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
 0:
                var3 = this;
                var5 = _closure1_slot16;
                var4 = var5.getGuild;
                var2 = var3.guildId;
                var4 = var4.bind(var5)(var2);
                var2 = null;
                if(!(var2 != var4)) { _fun0008_ip = 87; continue _fun0008 }
 31:
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
                if(!var1) { _fun0008_ip = 85; continue _fun0008 }
 77:
                var3['ownerId'] = var2;
                var1 = true;
 85:
                return var1;
 87:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(9);
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
 0:
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
                    if(!var9) { _fun0009_ip = 45; continue _fun0009 }
 42:
                    var3 = var8;
 45:
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
 0:
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
                if(var5) { _fun0010_ip = 39; continue _fun0010 }
 36:
                var6 = var7;
 39:
                var _closure3_slot1 = var6;
                if(var5) { _fun0010_ip = 49; continue _fun0010 }
 46:
                var3.return();
 49:
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
 0:
                var3 = this;
                var7 = arg1;
                var2 = var7[Symbol.iterator];
                var7 = var2().next;
                var5 = var7().value;
                var4 = var2;
                var1 = undefined;
                var4 = var4 === var1;
                var6 = undefined;
                if(var4) { _fun0011_ip = 30; continue _fun0011 }
 27:
                var6 = var5;
 30:
                var5 = undefined;
                if(var4) { _fun0011_ip = 60; continue _fun0011 }
 35:
                var8 = var7().value;
                var7 = var2;
                var7 = var7 === var1;
                var5 = undefined;
                var4 = var7;
                if(var7) { _fun0011_ip = 60; continue _fun0011 }
 54:
                var5 = var8;
                var4 = var7;
 60:
                if(var4) { _fun0011_ip = 66; continue _fun0011 }
 63:
                var2.return();
 66:
                var2 = null;
                if(!(var6 <= var5)) { _fun0011_ip = 145; continue _fun0011 }
 75:
                var7 = var3.rows;
                var7 = var7[var6];
                if(!(var2 != var7)) { _fun0011_ip = 145; continue _fun0011 }
 89:
                var8 = var3.rows;
                var8 = delete var8[var6];
                var9 = var7.type;
                var8 = _closure1_slot23;
                var8 = var8.MEMBER;
                if(!(var9 === var8)) { _fun0011_ip = 138; continue _fun0011 }
 118:
                var8 = var3.members;
                var7 = var7.user;
                var7 = var7.id;
                var7 = delete var8[var7];
 138:
                var6 = var6 + 1;
                if(var6 <= var5) { _fun0011_ip = 75; continue _fun0011 }
 145:
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
 0:
                var6 = arg1;
                var3 = arg2;
                var2 = this;
                var1 = var3.group;
                var4 = var3.member;
                var5 = null;
                if(!(var5 == var1)) { _fun0012_ip = 120; continue _fun0012 }
 27:
                if(!(var5 != var4)) { _fun0012_ip = 173; continue _fun0012 }
 34:
                var10 = _closure1_slot29;
                var9 = var2.guildId;
                var8 = var2.ownerId;
                var3 = var4.user;
                var7 = var3.id;
                var3 = undefined;
                var7 = var10.bind(var3)(var9, var8, var7);
                if(!(var5 != var7)) { _fun0012_ip = 118; continue _fun0012 }
 75:
                var9 = var2.rows;
                var8 = var9.splice;
                var5 = 0;
                var5 = var8.bind(var9)(var6, var5, var7);
                var5 = var2.members;
                var4 = var4.user;
                var4 = var4.id;
                var5[var4] = var7;
                _fun0012_ip = 173; continue _fun0012;
 118:
                return var3;
 120:
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
 173:
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
 0:
                var4 = arg1;
                var3 = arg2;
                var2 = this;
                var1 = var3.group;
                var5 = var3.member;
                var3 = var2.rows;
                var3 = var3[var4];
                var6 = null;
                var7 = var6 != var3;
                if(!var7) { _fun0013_ip = 62; continue _fun0013 }
 40:
                var9 = var3.type;
                var8 = _closure1_slot23;
                var8 = var8.MEMBER;
                var7 = var9 === var8;
 62:
                if(!var7) { _fun0013_ip = 85; continue _fun0013 }
 65:
                var7 = var2.members;
                var3 = var3.user;
                var3 = var3.id;
                var3 = delete var7[var3];
 85:
                if(!(var6 == var1)) { _fun0013_ip = 168; continue _fun0013 }
 89:
                if(!(var6 != var5)) { _fun0013_ip = 210; continue _fun0013 }
 93:
                var10 = _closure1_slot29;
                var9 = var2.guildId;
                var8 = var2.ownerId;
                var3 = var5.user;
                var7 = var3.id;
                var3 = undefined;
                var7 = var10.bind(var3)(var9, var8, var7);
                if(!(var6 != var7)) { _fun0013_ip = 166; continue _fun0013 }
 134:
                var6 = var2.rows;
                var6[var4] = var7;
                var6 = var2.members;
                var5 = var5.user;
                var5 = var5.id;
                var6[var5] = var7;
                _fun0013_ip = 210; continue _fun0013;
 166:
                return var3;
 168:
                var3 = var2.rows;
                var8 = _closure1_slot28;
                var7 = var2.guildId;
                var6 = var1.id;
                var5 = var1.count;
                var1 = undefined;
                var1 = var8.bind(var1)(var7, var6, var5);
                var3[var4] = var1;
 210:
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
 0:
                var5 = arg1;
                var2 = this;
                var1 = var2.rows;
                var1 = var1[var5];
                var3 = null;
                if(!(var3 != var1)) { _fun0014_ip = 100; continue _fun0014 }
 22:
                var4 = var1.type;
                var3 = _closure1_slot23;
                var3 = var3.MEMBER;
                if(!(var4 === var3)) { _fun0014_ip = 64; continue _fun0014 }
 44:
                var3 = var2.members;
                var1 = var1.user;
                var1 = var1.id;
                var1 = delete var3[var1];
 64:
                var4 = var2.rows;
                var3 = var4.splice;
                var1 = 1;
                var1 = var3.bind(var4)(var5, var1);
                var1 = var2.version;
                var1 = var1 + 1;
                var2['version'] = var1;
 100:
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
 0:
                var9 = arg1;
                var2 = this;
                var1 = var2.members;
                var5 = var1[var9];
                var1 = null;
                if(!(var1 != var5)) { _fun0015_ip = 83; continue _fun0015 }
 22:
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
 83:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'rebuildMembers';
        var1['key'] = var6;
        var5 = function value() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var4 = this;
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = var4.members;
                var3 = var2.bind(var3)(var1);
                var1 = var3.length;
                var2 = 0;
                var1 = var2 < var1;
                if(!var1) { _fun0016_ip = 68; continue _fun0016 }
 41:
                var5 = var3[var2];
                var1 = var4.rebuildMember;
                var1 = var1.bind(var4)(var5);
                var2 = var2 + 1;
                var1 = var3.length;
                if(var2 < var1) { _fun0016_ip = 41; continue _fun0016 }
 68:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[8] = var1;
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
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var7 = arg1;
                var4 = arg2;
                var1 = this;
                var2 = var1._guildLists;
                var3 = var2[var7];
                var2 = null;
                if(!(var2 == var3)) { _fun0017_ip = 40; continue _fun0017 }
 25:
                var5 = var1._guildLists;
                var1 = {};
                var5[var7] = var1;
                var3 = var1;
 40:
                var1 = var3[var4];
                if(!(var2 == var1)) { _fun0017_ip = 130; continue _fun0017 }
 48:
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
 130:
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
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var5 = arg1;
                var6 = arg2;
                var2 = this;
                var _closure3_slot0 = var6;
                var3 = null;
                if(!(var3 != var5)) { _fun0018_ip = 73; continue _fun0018 }
 21:
                var4 = var2._guildLists;
                var5 = var4[var5];
                if(!(var3 != var5)) { _fun0018_ip = 120; continue _fun0018 }
 35:
                var7 = _closure1_slot1;
                var4 = _closure1_slot3;
                var3 = 20;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var7.bind(var3)(var4);
                var3 = var4.forEach;
                var3 = var3.bind(var4)(var5, var6);
                _fun0018_ip = 120; continue _fun0018;
 73:
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
 120:
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
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
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
                if(var1) { _fun0019_ip = 69; continue _fun0019 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0019_ip = 105; continue _fun0019;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
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
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var1 = arg1;
                var3 = var1.op;
                var2 = 'SYNC';
                if(!(var2 !== var3)) { _fun0020_ip = 168; continue _fun0020 }
 19:
                var2 = 'INVALIDATE';
                if(!(var2 !== var3)) { _fun0020_ip = 142; continue _fun0020 }
 29:
                var2 = 'INSERT';
                if(!(var2 !== var3)) { _fun0020_ip = 111; continue _fun0020 }
 37:
                var2 = 'UPDATE';
                if(!(var2 !== var3)) { _fun0020_ip = 80; continue _fun0020 }
 45:
                var2 = 'DELETE';
                if(!(var2 === var3)) { _fun0020_ip = 199; continue _fun0020 }
 56:
                var4 = _closure2_slot0;
                var3 = var4.delete;
                var2 = var1.index;
                var2 = var3.bind(var4)(var2);
                _fun0020_ip = 199; continue _fun0020;
 80:
                var5 = _closure2_slot0;
                var4 = var5.update;
                var3 = var1.index;
                var2 = var1.item;
                var2 = var4.bind(var5)(var3, var2);
                _fun0020_ip = 199; continue _fun0020;
 111:
                var5 = _closure2_slot0;
                var4 = var5.insert;
                var3 = var1.index;
                var2 = var1.item;
                var2 = var4.bind(var5)(var3, var2);
                _fun0020_ip = 199; continue _fun0020;
 142:
                var4 = _closure2_slot0;
                var3 = var4.invalidate;
                var2 = var1.range;
                var2 = var3.bind(var4)(var2);
                _fun0020_ip = 199; continue _fun0020;
 168:
                var4 = _closure2_slot0;
                var3 = var4.sync;
                var2 = var1.range;
                var1 = var1.items;
                var1 = var3.bind(var4)(var2, var1);
 199:
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
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var2 = arg1;
                var1 = var2.updateOwnerId;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0021_ip = 26; continue _fun0021 }
 16:
                var1 = var2.rebuildMembers;
                var1 = var1.bind(var2)();
 26:
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
        var1 = arg1;
        var4 = var1.guildId;
        var3 = _closure1_slot25;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = var2.rebuildMembers;
            var1 = var1.bind(var2)();
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