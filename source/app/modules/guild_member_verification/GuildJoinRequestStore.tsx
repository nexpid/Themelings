// app/modules/guild_member_verification/GuildJoinRequestStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
            _closure1_slot23 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function getSubmittedGuildJoinRequestTotal(arg1) {
        var2 = _closure1_slot11;
        var1 = arg1;
        var1 = var2[var1];
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function setSubmittedGuildJoinRequestTotal(arg1, arg2) {
        var5 = arg1;
        var3 = _closure1_slot11;
        var2 = arg2;
        var3[var5] = var2;
        var4 = _closure1_slot10;
        var3 = var4.set;
        var6 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var6.bind(var1)(var2);
        var2 = var2.bind(var1)();
        var2 = var3.bind(var4)(var5, var2);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function updateSubmittedGuildJoinRequestTotal(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var6 = arg2;
            var5 = arg3;
            if(!(var6 !== var5)) { _fun0002_ip = 172; continue _fun0002 }
 16:
            var1 = null;
            if(!(var1 != var6)) { _fun0002_ip = 172; continue _fun0002 }
 25:
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 8;
            var2 = var2[var7];
            var3 = undefined;
            var2 = var8.bind(var3)(var2);
            var2 = var2.GuildJoinRequestApplicationStatuses;
            var2 = var2.SUBMITTED;
            if(!(var6 === var2)) { _fun0002_ip = 92; continue _fun0002 }
 66:
            var6 = _closure1_slot25;
            var2 = _closure1_slot24;
            var8 = var2.bind(var3)(var4);
            var2 = 1;
            var2 = var8 + var2;
            var2 = var6.bind(var3)(var4, var2);
 92:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var6.bind(var3)(var2);
            var2 = var2.GuildJoinRequestApplicationStatuses;
            var2 = var2.SUBMITTED;
            if(!(var5 === var2)) { _fun0002_ip = 172; continue _fun0002 }
 125:
            var2 = _closure1_slot24;
            var5 = var2.bind(var3)(var4);
            var2 = _closure1_slot25;
            var1 = global;
            var7 = var1.Math;
            var6 = var7.max;
            var1 = 1;
            var5 = var5 - var1;
            var1 = 0;
            var1 = var6.bind(var7)(var1, var5);
            var1 = var2.bind(var3)(var4, var1);
 172:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var11 = function guildJoinRequestsIndex(arg1) {
        var2 = arg1;
        var1 = new Array(0);
        var5 = var1.push;
        var7 = _closure1_slot13;
        var3 = var2.joinRequestId;
        var6 = undefined;
        var3 = var7.bind(var6)(var3);
        var3 = var5.bind(var1)(var3);
        var3 = var1.push;
        var5 = _closure1_slot14;
        var4 = var2.guildId;
        var2 = var2.applicationStatus;
        var2 = var5.bind(var6)(var4, var2);
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var1 = function get(arg1) {
        var3 = _closure1_slot15;
        var2 = var3.get;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function upsert(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot21;
            var1 = var5.joinRequestId;
            var3[var1] = var5;
            var4 = _closure1_slot15;
            var3 = var4.set;
            var1 = var5.joinRequestId;
            var1 = var3.bind(var4)(var1, var5);
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 10;
            var3 = var1[var6];
            var1 = undefined;
            var7 = var4.bind(var1)(var3);
            var4 = var7.isSubmittedApplicationStatus;
            var3 = var5.applicationStatus;
            var3 = var4.bind(var7)(var3);
            if(!var3) { _fun0003_ip = 124; continue _fun0003 }
 83:
            var7 = _closure1_slot17;
            var4 = var7.delete;
            var3 = var5.joinRequestId;
            var3 = var4.bind(var7)(var3);
            var7 = _closure1_slot16;
            var4 = var7.set;
            var3 = var5.joinRequestId;
            var3 = var4.bind(var7)(var3, var5);
 124:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var6 = var4.bind(var1)(var3);
            var4 = var6.isActionedApplicationStatus;
            var3 = var5.applicationStatus;
            var3 = var4.bind(var6)(var3);
            if(!var3) { _fun0003_ip = 202; continue _fun0003 }
 161:
            var6 = _closure1_slot16;
            var4 = var6.delete;
            var3 = var5.joinRequestId;
            var3 = var4.bind(var6)(var3);
            var4 = _closure1_slot17;
            var3 = var4.set;
            var2 = var5.joinRequestId;
            var2 = var3.bind(var4)(var2, var5);
 202:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var9 = function handleGuildJoinRequestCreateOrUpdate(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var7 = var1.guildId;
            var4 = var1.request;
            var2 = _closure1_slot9;
            var3 = undefined;
            var2 = var2.bind(var3)(var4);
            var5 = _closure1_slot8;
            var4 = var5.getCurrentUser;
            var4 = var4.bind(var5)();
            var5 = null;
            if(!(var5 != var4)) { _fun0004_ip = 121; continue _fun0004 }
 47:
            var6 = var2.userId;
            var4 = var4.id;
            if(!(var6 !== var4)) { _fun0004_ip = 121; continue _fun0004 }
 61:
            var6 = _closure1_slot27;
            var4 = var2.joinRequestId;
            var4 = var6.bind(var3)(var4);
            var5 = var5 == var4;
            var6 = undefined;
            if(var5) { _fun0004_ip = 91; continue _fun0004 }
 85:
            var6 = var4.applicationStatus;
 91:
            var5 = _closure1_slot26;
            var4 = var2.applicationStatus;
            var4 = var5.bind(var3)(var7, var4, var6);
            var1 = _closure1_slot28;
            var1 = var1.bind(var3)(var2);
            var1 = true;
            return var1;
 121:
            var1 = false;
            return var1;
        }
    };
    var2 = global;
    var12 = var2.Object;
    var10 = var12.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var12)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.joinRequestFromServer;
    var _closure1_slot9 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var16 = var8;
    var2 = new var16[var2](var15);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot10 = var2;
    var2 = {};
    var _closure1_slot11 = var2;
    var2 = false;
    var _closure1_slot12 = var2;
    var2 = function StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_ID(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = 'guild-join-request=';
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot13 = var2;
    var2 = function StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_STATUS(arg1, arg2) {
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = 'guild-';
        var3 = arg1;
        var2 = '-';
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot14 = var2;
    var2 = 9;
    var8 = var6[var2];
    var8 = var5.bind(var1)(var8);
    var12 = var8.SecondaryIndexMap;
    var8 = var12.prototype;
    var10 = Object.create(var8, {constructor: {value: var12}});
    var14 = function(arg1) {
        var1 = arg1;
        var3 = var1.joinRequestId;
        var1 = global;
        var1 = var1.HermesInternal;
        var2 = var1.concat;
        var1 = '';
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var16 = var10;
    var15 = var11;
    var8 = new var16[var12](var15, var14, var13);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot15 = var8;
    var8 = var6[var2];
    var8 = var5.bind(var1)(var8);
    var12 = var8.SecondaryIndexMap;
    var8 = var12.prototype;
    var10 = Object.create(var8, {constructor: {value: var12}});
    var14 = function(arg1) {
        var1 = arg1;
        var3 = var1.joinRequestId;
        var1 = global;
        var1 = var1.HermesInternal;
        var2 = var1.concat;
        var1 = '';
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var16 = var10;
    var15 = var11;
    var8 = new var16[var12](var15, var14, var13);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot16 = var8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.SecondaryIndexMap;
    var2 = var10.prototype;
    var8 = Object.create(var2, {constructor: {value: var10}});
    var14 = function(arg1) {
        var1 = arg1;
        var3 = var1.actionedAt;
        var1 = global;
        var1 = var1.HermesInternal;
        var2 = var1.concat;
        var1 = '';
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var16 = var8;
    var15 = var11;
    var2 = new var16[var10](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot17 = var2;
    var2 = {};
    var _closure1_slot18 = var2;
    var2 = {};
    var _closure1_slot19 = var2;
    var2 = {};
    var _closure1_slot20 = var2;
    var2 = {};
    var _closure1_slot21 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.Seconds;
    var8 = var2.MINUTE;
    var2 = 10;
    var2 = var2 * var8;
    var _closure1_slot22 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildJoinRequestStoreV2() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
                var1 = _closure1_slot23;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 69; continue _fun0005 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 105; continue _fun0005;
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
        var1 = 'getRequest';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var2 = _closure1_slot21;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'getRequests';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var5 = arg2;
                var3 = _closure1_slot14;
                var6 = undefined;
                var1 = arg1;
                var4 = var3.bind(var6)(var1, var5);
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 10;
                var1 = var1[var7];
                var3 = var3.bind(var6)(var1);
                var1 = var3.isActionedApplicationStatus;
                var1 = var1.bind(var3)(var5);
                if(var1) { _fun0006_ip = 118; continue _fun0006 }
 55:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var3 = var3.bind(var6)(var1);
                var1 = var3.isSubmittedApplicationStatus;
                var1 = var1.bind(var3)(var5);
                if(var1) { _fun0006_ip = 102; continue _fun0006 }
 86:
                var3 = _closure1_slot15;
                var1 = var3.values;
                var1 = var1.bind(var3)(var4);
                _fun0006_ip = 116; continue _fun0006;
 102:
                var5 = _closure1_slot16;
                var3 = var5.values;
                var1 = var3.bind(var5)(var4);
 116:
                _fun0006_ip = 132; continue _fun0006;
 118:
                var3 = _closure1_slot17;
                var2 = var3.values;
                var1 = var2.bind(var3)(var4);
 132:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSubmittedGuildJoinRequestTotal';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot11;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isFetching';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'hasFetched';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = arg1;
                var3 = _closure1_slot10;
                var1 = var3.has;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0007_ip = 27; continue _fun0007 }
 23:
                var1 = false;
                return var1;
 27:
                var3 = _closure1_slot10;
                var1 = var3.get;
                var6 = var1.bind(var3)(var4);
                var1 = null;
                var1 = var1 != var6;
                if(!var1) { _fun0007_ip = 100; continue _fun0007 }
 50:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 7;
                var3 = var4[var3];
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                var5 = var3.bind(var4)();
                var4 = var5.diff;
                var3 = 'seconds';
                var3 = var4.bind(var5)(var6, var3);
                var2 = _closure1_slot22;
                var1 = var3 < var2;
 100:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getSelectedApplicationTab';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.GuildJoinRequestApplicationStatuses;
                var1 = var1.SUBMITTED;
                var3 = _closure1_slot18;
                var2 = arg1;
                var2 = var3[var2];
                var3 = null;
                if(!(var3 != var2)) { _fun0008_ip = 57; continue _fun0008 }
 54:
                var1 = var2;
 57:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getSelectedSortOrder';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = _closure1_slot19;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0009_ip = 54; continue _fun0009 }
 20:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.GuildJoinRequestSortOrders;
                var1 = var2.TIMESTAMP_DESC;
 54:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getSelectedGuildJoinRequest';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = _closure1_slot20;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var4 = var1 != var2;
                if(!var4) { _fun0010_ip = 40; continue _fun0010 }
 23:
                var4 = _closure1_slot27;
                var3 = var2.joinRequestId;
                var2 = undefined;
                var1 = var4.bind(var2)(var3);
 40:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GuildJoinRequestStoreV2';
    var8['displayName'] = var2;
    var2 = 13;
    var2 = var6[var2];
    var15 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleFetchByIdSuccess(arg1) {
        var1 = arg1;
        var3 = var1.joinRequest;
        var2 = _closure1_slot28;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS'] = var10;
    var10 = function handleFetchSuccess(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var7 = var1.status;
            var4 = var1.requests;
            var5 = var1.total;
            var3 = var1.guildId;
            var1 = false;
            _closure1_slot12 = var1;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 8;
            var6 = var6[var1];
            var1 = undefined;
            var6 = var8.bind(var1)(var6);
            var6 = var6.GuildJoinRequestApplicationStatuses;
            var6 = var6.SUBMITTED;
            if(!(var7 === var6)) { _fun0011_ip = 82; continue _fun0011 }
 72:
            var2 = _closure1_slot25;
            var2 = var2.bind(var1)(var3, var5);
 82:
            var3 = var4.forEach;
            var2 = function(arg1) {
                var3 = _closure1_slot28;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['GUILD_JOIN_REQUESTS_FETCH_SUCCESS'] = var10;
    var10 = function handleFetchStart() {
        var1 = true;
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_JOIN_REQUESTS_FETCH_START'] = var10;
    var10 = function handleFetchFailure() {
        var1 = false;
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_JOIN_REQUESTS_FETCH_FAILURE'] = var10;
    var10 = function handleGuildJoinRequestsBulkAction(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var1 = var1.action;
        var _closure2_slot0 = var1;
        var7 = _closure1_slot15;
        var6 = var7.values;
        var8 = _closure1_slot14;
        var9 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 8;
        var5 = var5[var1];
        var1 = undefined;
        var5 = var9.bind(var1)(var5);
        var5 = var5.GuildJoinRequestApplicationStatuses;
        var5 = var5.SUBMITTED;
        var5 = var8.bind(var1)(var4, var5);
        var6 = var6.bind(var7)(var5);
        var5 = var6.forEach;
        var3 = function(arg1) {
            var3 = _closure1_slot28;
            var2 = {};
            var5 = arg1;
            var6 = var2;
            var1 = copyDataProperties(var6, var5);
            var4 = _closure2_slot0;
            var1 = 'applicationStatus';
            var2[var1] = var4;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var3 = var5.bind(var6)(var3);
        var3 = _closure1_slot25;
        var2 = 0;
        var2 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var2['GUILD_JOIN_REQUESTS_BULK_ACTION'] = var10;
    var2['GUILD_JOIN_REQUEST_CREATE'] = var9;
    var2['GUILD_JOIN_REQUEST_UPDATE'] = var9;
    var9 = function handleGuildJoinRequestDelete(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var4 = var1.id;
            var7 = var1.guildId;
            var3 = _closure1_slot27;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            var5 = null;
            if(!(var5 != var3)) { _fun0012_ip = 104; continue _fun0012 }
 33:
            var6 = _closure1_slot26;
            var5 = var3.applicationStatus;
            var3 = 'DELETED';
            var3 = var6.bind(var1)(var7, var3, var5);
            var3 = _closure1_slot21;
            var3 = delete var3[var4];
            var5 = _closure1_slot15;
            var3 = var5.delete;
            var3 = var3.bind(var5)(var4);
            var5 = _closure1_slot16;
            var3 = var5.delete;
            var3 = var3.bind(var5)(var4);
            var3 = _closure1_slot17;
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
 104:
            return var1;
        }
    };
    var2['GUILD_JOIN_REQUEST_DELETE'] = var9;
    var9 = function handleSetApplicationTab(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = var1.applicationTab;
            var4 = _closure1_slot18;
            var4 = var4[var3];
            if(!(var2 !== var4)) { _fun0013_ip = 37; continue _fun0013 }
 29:
            var1 = _closure1_slot18;
            var1[var3] = var2;
 37:
            var1 = undefined;
            return var1;
        }
    };
    var2['GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB'] = var9;
    var9 = function handleSetSortOrder(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var4 = var1.sortOrder;
            var2 = _closure1_slot19;
            var2 = var2[var3];
            if(!(var4 !== var2)) { _fun0014_ip = 193; continue _fun0014 }
 32:
            var2 = _closure1_slot19;
            var2[var3] = var4;
            var2 = _closure1_slot18;
            var4 = var2[var3];
            var2 = null;
            if(!(var2 == var4)) { _fun0014_ip = 88; continue _fun0014 }
 54:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var3);
            var2 = var2.GuildJoinRequestApplicationStatuses;
            var4 = var2.SUBMITTED;
 88:
            var2 = 'REVIEW_APPLICATION';
            if(!(var2 !== var4)) { _fun0014_ip = 193; continue _fun0014 }
 98:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 10;
            var2 = var2[var6];
            var5 = undefined;
            var3 = var3.bind(var5)(var2);
            var2 = var3.isActionedApplicationStatus;
            var2 = var2.bind(var3)(var4);
            if(!var2) { _fun0014_ip = 148; continue _fun0014 }
 134:
            var3 = _closure1_slot17;
            var2 = var3.clear;
            var2 = var2.bind(var3)();
 148:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var3 = var3.bind(var5)(var2);
            var2 = var3.isSubmittedApplicationStatus;
            var2 = var2.bind(var3)(var4);
            if(!var2) { _fun0014_ip = 193; continue _fun0014 }
 179:
            var2 = _closure1_slot16;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
 193:
            var1 = undefined;
            return var1;
        }
    };
    var2['GUILD_JOIN_REQUESTS_SET_SORT_ORDER'] = var9;
    var4 = function handleGuildJoinRequestSelect(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = var1.request;
        var1 = _closure1_slot20;
        var1[var3] = var2;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_JOIN_REQUESTS_SET_SELECTED'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var16 = var4;
    var14 = var2;
    var2 = new var16[var8](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/GuildJoinRequestStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();