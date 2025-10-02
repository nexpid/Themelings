// app/modules/guild_mod_dash_member_safety/MemberSafetyStore.tsx
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
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot19;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot19;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function getMemberSafetyPageStore(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot16;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 == var4)) { _fun0005_ip = 8; continue _fun0005 }
case 33:
            var4 = _closure1_slot16;
            var3 = _closure1_slot13;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var7 = var5;
            var6 = var2;
            var3 = new var7[var3](var6, var5);
            var3 = var3 instanceof Object ? var3 : var5;
            var4[var2] = var3;
case 8:
            var1 = _closure1_slot16;
            var1 = var1[var2];
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function resetMemberSafetyPageStore(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arguments[1];
            var1 = undefined;
            if(!(var4 === var1)) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var4 = false;
case 39:
            var3 = _closure1_slot20;
            var2 = arg1;
            var3 = var3.bind(var1)(var2);
            var2 = var3.reset;
            var2 = var2.bind(var3)(var4);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var11 = function handleGuildMemberUpdate() {
        var1 = false;
        return var1;
    };
    var10 = function handleGuildRoleUpdateOrDelete(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot20;
            var3 = var1.guildId;
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var5 = var1.type;
            var4 = 'GUILD_ROLE_DELETE';
            var2 = false;
            if(!(var4 === var5)) { _fun0007_ip = 32; continue _fun0007 }
case 41:
            var4 = var3.removeRoleFromSearchState;
            var1 = var1.roleId;
            var2 = var4.bind(var3)(var1);
case 32:
            var1 = var3.rebuildAllMembers;
            var1 = var1.bind(var3)();
            if(var1) { _fun0007_ip = 4; continue _fun0007 }
case 42:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var9 = function handleGuildRoleMemberUpdate(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var4 = var1.userId;
        var2 = _closure1_slot20;
        var1 = undefined;
        var3 = var2.bind(var1)(var3);
        var2 = var3.updateMembersByMemberIds;
        var1 = new Array(1);
        var1[0] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var1 = global;
    var12 = var1.Object;
    var8 = var12.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var12)(var3, var1, var2);
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
    var2 = var7.bind(var1)(var2);
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
    var2 = var2.GuildMemberSafetyPageStore;
    var _closure1_slot13 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot14 = var2;
    var2 = false;
    var _closure1_slot15 = var2;
    var2 = {};
    var _closure1_slot16 = var2;
    var2 = 17;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function MemberSafetyStore() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot17;
                var1 = var1.bind(var3)();
                if(var1) { _fun0008_ip = 43; continue _fun0008 }
case 44:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 45; continue _fun0008;
case 43:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 45:
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
        var1 = function value() {
            var5 = this;
            var4 = var5.waitFor;
            var3 = _closure1_slot9;
            var2 = _closure1_slot10;
            var1 = _closure1_slot12;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(16);
        var1[0] = var5;
        var5 = {};
        var7 = 'isInitialized';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = var1.isInitialized;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getMembersByGuildId';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var3 = var3.bind(var2)(var1);
            var2 = var3.getMembersByIndex;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getMembersCountByGuildId';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var3 = var3.bind(var2)(var1);
            var2 = var3.countMembersByIndex;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getEstimatedMemberSearchCountByGuildId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = _closure1_slot20;
                var2 = undefined;
                var1 = arg1;
                var4 = var3.bind(var2)(var1);
                var3 = var4.searchChunkSize;
                var2 = var4.countMembersByIndex;
                var1 = var4.getSearchIndex;
                var1 = var1.bind(var4)();
                var2 = var2.bind(var4)(var1);
                var1 = var4.getTotalResultsCount;
                var1 = var1.bind(var4)();
                var4 = null;
                if(!(var4 != var1)) { _fun0009_ip = 46; continue _fun0009 }
case 47:
                if(!(var1 < var3)) { _fun0009_ip = 42; continue _fun0009 }
case 46:
                var1 = var2;
case 42:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getKnownMemberSearchCountByGuildId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var3 = var3.bind(var2)(var1);
            var2 = var3.countMembersByIndex;
            var1 = var3.getSearchIndex;
            var1 = var1.bind(var3)();
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getCurrentMemberSearchResultsByGuildId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var3 = var3.bind(var2)(var1);
            var2 = var3.getMembersByIndex;
            var1 = var3.getSearchIndex;
            var1 = var1.bind(var3)();
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getSearchStateByGuildId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = var2.getSearchState;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'hasDefaultSearchStateByGuildId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = var2.hasDefaultSearchState;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getPagedMembersByGuildId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = var2.getPaginatedMembers;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getPaginationStateByGuildId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = var2.getPaginationState;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getElasticSearchPaginationByGuildId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = var2.getElasticSearchPagination;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getEnhancedMember';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var3 = var3.bind(var2)(var1);
            var2 = var3.getMember;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getNewMemberTimestamp';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = var2.getNewMemberTimestamp;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getLastRefreshTimestamp';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = var1.lastRefreshTimestamp;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getLastCursorTimestamp';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot20;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = var1.lastCursorTimestamp;
            return var1;
        };
        var5['value'] = var6;
        var1[15] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'MemberSafetyStore';
    var8['displayName'] = var2;
    var2 = 18;
    var2 = var6[var2];
    var15 = var7.bind(var1)(var2);
    var2 = {};
    var12 = function handleConnectionOpen(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = _closure1_slot15;
            if(var1) { _fun0010_ip = 32; continue _fun0010 }
case 48:
            var7 = undefined;
            var8 = true;
            if(!(var8 === var7)) { _fun0010_ip = 33; continue _fun0010 }
case 49:
            var8 = false;
case 33:
            var5 = _closure1_slot16;
            for(var1 in var5)
case 50:
            {
case 51:
                var10 = var1;
                var9 = _closure1_slot21;
                var9 = var9.bind(var7)(var10, var8);
                _fun0010_ip = 50; continue _fun0010;
case 32:
                var1 = false;
                _closure1_slot15 = var1;
            }
case 52:
            var3 = function _mergeGuildMembers(arg1) {
                var2 = false;
                var _closure3_slot0 = var2;
                var2 = arg1;
                var4 = var2.guilds;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.id;
                        var4 = var1.members;
                        var2 = _closure1_slot20;
                        var1 = undefined;
                        var3 = var2.bind(var1)(var3);
                        var2 = var3.updateServerMembers;
                        var3 = var2.bind(var3)(var4);
                        if(var3) { _fun0011_ip = 9; continue _fun0011 }
case 53:
                        var3 = _closure3_slot0;
case 9:
                        _closure3_slot0 = var3;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var1 = _closure3_slot0;
                return var1;
            };
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var12;
    var12 = function handleConnectionOpenSupplemental(arg1) {
        var3 = function _mergeGuildMembersSupplemental(arg1) {
            var2 = false;
            var _closure3_slot0 = var2;
            var2 = arg1;
            var4 = var2.guilds;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.id;
                    var6 = var1.activity_instances;
                    var3 = _closure1_slot20;
                    var1 = undefined;
                    var4 = var3.bind(var1)(var4);
                    var3 = new Array(0);
                    var _closure4_slot0 = var3;
                    var5 = null;
                    if(!(var5 != var6)) { _fun0012_ip = 54; continue _fun0012 }
case 55:
                    var5 = var6.forEach;
                    var2 = function(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var1 = arg1;
                            var3 = var1.participants;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0013_ip = 50; continue _fun0013 }
case 56:
                            var2 = var3.forEach;
                            var1 = function(arg1) {
                                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                                    var2 = arg1;
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var1 = 12;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var5 = var4.bind(var1)(var3);
                                    var4 = var5.isNotNullish;
                                    var3 = var2.member;
                                    var3 = var4.bind(var5)(var3);
                                    if(!var3) { _fun0014_ip = 42; continue _fun0014 }
case 57:
                                    var4 = _closure4_slot0;
                                    var3 = var4.push;
                                    var2 = var2.member;
                                    var2 = var3.bind(var4)(var2);
case 42:
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
case 50:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var5.bind(var6)(var2);
case 54:
                    var2 = var4.updateServerMembers;
                    var3 = var2.bind(var4)(var3);
                    if(var3) { _fun0012_ip = 58; continue _fun0012 }
case 59:
                    var3 = _closure3_slot0;
case 58:
                    _closure3_slot0 = var3;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var1 = _closure3_slot0;
            return var1;
        };
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var2['CONNECTION_OPEN_SUPPLEMENTAL'] = var12;
    var12 = function handleLocalMessagesLoaded(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var2 = var1.members;
            var7 = null;
            if(!(var7 != var4)) { _fun0015_ip = 18; continue _fun0015 }
case 35:
            var5 = _closure1_slot11;
            var3 = var5.getGuild;
            var3 = var3.bind(var5)(var4);
            if(!(var7 != var3)) { _fun0015_ip = 18; continue _fun0015 }
case 55:
            var3 = true;
            _closure1_slot15 = var3;
            var3 = _closure1_slot20;
            var6 = undefined;
            var4 = var3.bind(var6)(var4);
            var3 = new Array(0);
            var1 = _closure1_slot18;
            var5 = var1.bind(var6)(var2);
            var2 = var5.bind(var6)();
            var1 = var2.done;
            if(var1) { _fun0015_ip = 60; continue _fun0015 }
case 13:
            var8 = var2.value;
            var9 = var4.getMember;
            var1 = var8.userId;
            var1 = var9.bind(var4)(var1);
            if(!(var7 == var1)) { _fun0015_ip = 61; continue _fun0015 }
case 62:
            var1 = var3.push;
            var1 = var1.bind(var3)(var8);
case 61:
            var8 = var5.bind(var6)();
            var1 = var8.done;
            var2 = var8;
            if(!var1) { _fun0015_ip = 13; continue _fun0015 }
case 60:
            var2 = var3.length;
            var1 = 0;
            var1 = var2 > var1;
            if(!var1) { _fun0015_ip = 63; continue _fun0015 }
case 64:
            var2 = var4.updateClientMembers;
            var1 = var2.bind(var4)(var3);
case 63:
            return var1;
case 18:
            var1 = false;
            return var1;
        }
    };
    var2['LOCAL_MESSAGES_LOADED'] = var12;
    var12 = function handleCacheLoaded(arg1) {
        var2 = arg1;
        var4 = var2.guildMembers;
        var2 = false;
        var _closure2_slot0 = var2;
        var3 = true;
        _closure1_slot15 = var3;
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 13;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var2 = var3.entries;
        var4 = var2.bind(var3)(var4);
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var5 = arg1;
                var2 = var5[Symbol.iterator];
                var5 = var2().next;
                var6 = var5().value;
                var3 = var2;
                var1 = undefined;
                var4 = var3 === var1;
                var3 = undefined;
                if(var4) { _fun0016_ip = 65; continue _fun0016 }
case 66:
                var3 = var6;
case 65:
                var6 = undefined;
                if(var4) { _fun0016_ip = 67; continue _fun0016 }
case 50:
                var7 = var5().value;
                var5 = var2;
                var5 = var5 === var1;
                var6 = undefined;
                var4 = var5;
                if(var5) { _fun0016_ip = 67; continue _fun0016 }
case 44:
                var6 = var7;
                var4 = var5;
case 67:
                if(var4) { _fun0016_ip = 68; continue _fun0016 }
case 69:
                var2.return();
case 68:
                var2 = _closure1_slot20;
                var4 = var2.bind(var1)(var3);
                var3 = var4.updateClientMembers;
                var2 = global;
                var5 = var2.Object;
                var2 = var5.values;
                var2 = var2.bind(var5)(var6);
                var3 = var3.bind(var4)(var2);
                if(var3) { _fun0016_ip = 70; continue _fun0016 }
case 71:
                var3 = _closure2_slot0;
case 70:
                _closure2_slot0 = var3;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var1 = _closure2_slot0;
        return var1;
    };
    var2['CACHE_LOADED'] = var12;
    var12 = function handlePassiveUpdateV2(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var4 = var1.members;
            var5 = var1.guildId;
            var2 = var4.length;
            var1 = 0;
            var1 = var2 > var1;
            if(!var1) { _fun0017_ip = 72; continue _fun0017 }
case 38:
            var3 = _closure1_slot20;
            var2 = undefined;
            var3 = var3.bind(var2)(var5);
            var2 = var3.updateServerMembers;
            var1 = var2.bind(var3)(var4);
case 72:
            return var1;
        }
    };
    var2['PASSIVE_UPDATE_V2'] = var12;
    var12 = function handleGuildCreate(arg1) {
        var1 = arg1;
        var3 = var1.guild;
        var5 = _closure1_slot20;
        var2 = var3.id;
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var4 = _closure1_slot21;
        var3 = var3.id;
        var2 = var2.isInitialized;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['GUILD_CREATE'] = var12;
    var12 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var3 = var1.id;
        var2 = _closure1_slot21;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['GUILD_DELETE'] = var12;
    var12 = function handleGuildMembersChunkBatch(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var2 = var1.chunks;
            var1 = _closure1_slot18;
            var6 = undefined;
            var5 = var1.bind(var6)(var2);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0018_ip = 45; continue _fun0018 }
case 53:
            var2 = var4.value;
            var9 = _closure1_slot20;
            var8 = var2.guildId;
            var9 = var9.bind(var6)(var8);
            var8 = var9.updateServerMembers;
            var2 = var2.members;
            var8 = var8.bind(var9)(var2);
            if(var8) { _fun0018_ip = 73; continue _fun0018 }
case 74:
            var8 = var3;
case 73:
            var9 = var5.bind(var6)();
            var2 = var9.done;
            var3 = var8;
            var4 = var9;
            var1 = var3;
            if(!var2) { _fun0018_ip = 53; continue _fun0018 }
case 45:
            return var1;
        }
    };
    var2['GUILD_MEMBERS_CHUNK_BATCH'] = var12;
    var2['GUILD_MEMBER_ADD'] = var11;
    var2['GUILD_MEMBER_UPDATE'] = var11;
    var11 = function handleGuildMemberUpdateLocal(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var4 = _closure1_slot9;
        var2 = var4.getId;
        var4 = var2.bind(var4)();
        var2 = _closure1_slot20;
        var1 = undefined;
        var3 = var2.bind(var1)(var3);
        var2 = var3.updateMembersByMemberIds;
        var1 = new Array(1);
        var1[0] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['GUILD_MEMBER_UPDATE_LOCAL'] = var11;
    var11 = function handleGuildMemberRemove(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var1 = var1.user;
        var3 = _closure1_slot20;
        var2 = undefined;
        var3 = var3.bind(var2)(var4);
        var2 = var3.removeMember;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['GUILD_MEMBER_REMOVE'] = var11;
    var2['GUILD_ROLE_UPDATE'] = var10;
    var2['GUILD_ROLE_DELETE'] = var10;
    var10 = function handleGuildMemberProfileUpdate(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var1 = var1.guildMember;
        var3 = _closure1_slot20;
        var2 = undefined;
        var3 = var3.bind(var2)(var4);
        var2 = var3.updateMembersByMemberIds;
        var1 = var1.user;
        var4 = var1.id;
        var1 = new Array(1);
        var1[0] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['GUILD_MEMBER_PROFILE_UPDATE'] = var10;
    var2['GUILD_ROLE_MEMBER_REMOVE'] = var9;
    var2['GUILD_ROLE_MEMBER_ADD'] = var9;
    var9 = function handleThreadMemberListUpdate(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var5 = var1.members;
            var1 = null;
            if(!(var1 != var5)) { _fun0019_ip = 74; continue _fun0019 }
case 33:
            var2 = var5.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0019_ip = 74; continue _fun0019 }
case 75:
            var2 = _closure1_slot20;
            var1 = undefined;
            var3 = var2.bind(var1)(var3);
            var4 = var5.reduce;
            var2 = function(arg1, arg2) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var1 = arg1;
                    var2 = arg2;
                    var4 = var2.member;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0020_ip = 55; continue _fun0020 }
case 49:
                    var2 = var2.member;
                    var2 = var2.user;
                    var3 = var2.id;
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var3);
case 55:
                    return var1;
                }
            };
            var1 = new Array(0);
            var2 = var4.bind(var5)(var2, var1);
            var1 = var3.updateMembersByMemberIds;
            var1 = var1.bind(var3)(var2);
            return var1;
case 74:
            var1 = false;
            return var1;
        }
    };
    var2['THREAD_MEMBER_LIST_UPDATE'] = var9;
    var9 = function handleThreadMembersUpdate(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var5 = var1.addedMembers;
            var1 = null;
            if(!(var1 != var5)) { _fun0021_ip = 74; continue _fun0021 }
case 33:
            var2 = var5.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0021_ip = 74; continue _fun0021 }
case 75:
            var2 = _closure1_slot20;
            var1 = undefined;
            var3 = var2.bind(var1)(var3);
            var4 = var5.reduce;
            var2 = function(arg1, arg2) {
                var1 = arg1;
                var2 = arg2;
                var3 = var2.userId;
                var2 = var1.push;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var1 = new Array(0);
            var2 = var4.bind(var5)(var2, var1);
            var1 = var3.updateMembersByMemberIds;
            var1 = var1.bind(var3)(var2);
            return var1;
case 74:
            var1 = false;
            return var1;
        }
    };
    var2['THREAD_MEMBERS_UPDATE'] = var9;
    var9 = function handleLoadArchivedThreadsSuccess(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var5 = var1.members;
            var1 = null;
            if(!(var1 != var5)) { _fun0022_ip = 74; continue _fun0022 }
case 33:
            var2 = var5.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0022_ip = 74; continue _fun0022 }
case 75:
            var2 = _closure1_slot20;
            var1 = undefined;
            var3 = var2.bind(var1)(var3);
            var4 = var5.reduce;
            var2 = function(arg1, arg2) {
                var1 = arg1;
                var2 = arg2;
                var3 = var2.userId;
                var2 = var1.push;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var1 = new Array(0);
            var2 = var4.bind(var5)(var2, var1);
            var1 = var3.updateMembersByMemberIds;
            var1 = var1.bind(var3)(var2);
            return var1;
case 74:
            var1 = false;
            return var1;
        }
    };
    var2['LOAD_ARCHIVED_THREADS_SUCCESS'] = var9;
    var9 = function handleLoadForumPosts(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var4 = var1.threads;
            var1 = global;
            var2 = var1.Object;
            var1 = var2.values;
            var5 = var1.bind(var2)(var4);
            var2 = var5.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0023_ip = 76; continue _fun0023 }
case 77:
            var2 = _closure1_slot20;
            var1 = undefined;
            var3 = var2.bind(var1)(var3);
            var4 = var5.reduce;
            var2 = function(arg1, arg2) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = arg1;
                    var2 = arg2;
                    var4 = var2.owner;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0024_ip = 55; continue _fun0024 }
case 49:
                    var2 = var2.owner;
                    var2 = var2.user;
                    var3 = var2.id;
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var3);
case 55:
                    return var1;
                }
            };
            var1 = new Array(0);
            var2 = var4.bind(var5)(var2, var1);
            var1 = var3.updateMembersByMemberIds;
            var1 = var1.bind(var3)(var2);
            return var1;
case 76:
            var1 = false;
            return var1;
        }
    };
    var2['LOAD_FORUM_POSTS'] = var9;
    var9 = function handleInitializeMemberSafetyStore(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot20;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        var1 = var2.initialize;
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['INITIALIZE_MEMBER_SAFETY_STORE'] = var9;
    var9 = function handleNewMemberTimestampRefresh(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot20;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        var1 = var2.refreshNewMembersAndSearchResults;
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH'] = var9;
    var9 = function handlePaginationUpdate(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var5 = var1.pagination;
        var2 = _closure1_slot20;
        var4 = undefined;
        var3 = var2.bind(var4)(var3);
        var2 = var3.updatePaginationState;
        var3 = var2.bind(var3)(var5);
        var2 = _closure1_slot8;
        var1 = 1;
        var2 = var2.bind(var4)(var3, var1);
        var1 = 0;
        var1 = var2[var1];
        return var1;
    };
    var2['MEMBER_SAFETY_PAGINATION_UPDATE'] = var9;
    var9 = function handlePaginationTokenUpdate(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var3 = var1.continuationToken;
        var2 = _closure1_slot20;
        var1 = undefined;
        var2 = var2.bind(var1)(var4);
        var1 = var2.updatePaginationToken;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2['MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE'] = var9;
    var9 = function handleSearchStateUpdate(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var3 = var1.searchState;
        var2 = _closure1_slot20;
        var1 = undefined;
        var2 = var2.bind(var1)(var4);
        var1 = var2.updateSearchState;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2['MEMBER_SAFETY_SEARCH_STATE_UPDATE'] = var9;
    var9 = function handleFetchGuildMemberSupplementalSuccess(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var6 = var1.memberSupplementals;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var3 = undefined;
            var5 = var5.bind(var3)(var1);
            var1 = var5.syncMemberSupplemental;
            var1 = var1.bind(var5)(var4, var6);
            if(!var1) { _fun0025_ip = 78; continue _fun0025 }
case 79:
            var2 = _closure1_slot20;
            var4 = var2.bind(var3)(var4);
            var3 = var4.updateMembersByMemberIds;
            var5 = var6.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.userId;
                return var1;
            };
            var2 = var5.bind(var6)(var2);
            var2 = var3.bind(var4)(var2);
case 78:
            return var1;
        }
    };
    var2['FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS'] = var9;
    var9 = function handleMemberSafetyGuildMemberSearchSuccess(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var1 = arg1;
            var8 = var1.guildId;
            var10 = var1.members;
            var5 = var1.total_result_count;
            var1 = _closure1_slot20;
            var7 = undefined;
            var9 = var1.bind(var7)(var8);
            var4 = var10.reduce;
            var3 = {};
            var1 = new Array(0);
            var3['memberIds'] = var1;
            var1 = new Array(0);
            var3['memberSupplementals'] = var1;
            var1 = function(arg1, arg2) {
                var1 = arg1;
                var3 = arg2;
                var2 = var3.member;
                var9 = var3.source_invite_code;
                var8 = var3.join_source_type;
                var7 = var3.join_source_application_id;
                var6 = var3.join_source_channel_id;
                var5 = var3.inviter_id;
                var10 = var2.user;
                var4 = var1.memberIds;
                var3 = var4.push;
                var2 = var10.id;
                var2 = var3.bind(var4)(var2);
                var4 = var1.memberSupplementals;
                var3 = var4.push;
                var2 = {};
                var10 = var10.id;
                var2['userId'] = var10;
                var2['sourceInviteCode'] = var9;
                var2['joinSourceType'] = var8;
                var2['joinSourceApplicationId'] = var7;
                var2['joinSourceChannelId'] = var6;
                var2['inviterId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var4.bind(var10)(var1, var3);
            var4 = var1.memberIds;
            var12 = var1.memberSupplementals;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 14;
            var1 = var11[var1];
            var3 = var6.bind(var7)(var1);
            var1 = var3.syncMemberSupplemental;
            var1 = var1.bind(var3)(var8, var12);
            var3 = 15;
            var3 = var11[var3];
            var6 = var6.bind(var7)(var3);
            var3 = var6.registerFetchedSupplementals;
            var3 = var3.bind(var6)(var8, var4);
            var3 = var9.updateSearchedMembersByMemberIds;
            var3 = var3.bind(var9)(var4);
            var6 = var10.length;
            var4 = 0;
            var6 = var6 > var4;
            var17 = undefined;
            var15 = undefined;
            if(!var6) { _fun0026_ip = 80; continue _fun0026 }
case 81:
            var17 = var10[var4];
            var11 = var10.length;
            var6 = 1;
            var6 = var11 - var6;
            var15 = var10[var6];
case 80:
            var8 = var9.updatePaginationState;
            var6 = {};
            var6['totalResultsCount'] = var5;
            var5 = {};
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var12 = 16;
            var10 = var10[var12];
            var13 = var11.bind(var7)(var10);
            var11 = var13.createMemberSearchCursor;
            var10 = {};
            var14 = null;
            var18 = var14 == var17;
            var16 = undefined;
            if(var18) { _fun0026_ip = 82; continue _fun0026 }
case 83:
            var18 = var17.member;
            var19 = var14 == var18;
            var16 = undefined;
            if(var19) { _fun0026_ip = 82; continue _fun0026 }
case 84:
            var16 = var18.joined_at;
case 82:
            var10['joinedAt'] = var16;
            var18 = var14 == var17;
            var16 = undefined;
            if(var18) { _fun0026_ip = 85; continue _fun0026 }
case 14:
            var17 = var17.member;
            var18 = var14 == var17;
            var16 = undefined;
            if(var18) { _fun0026_ip = 85; continue _fun0026 }
case 86:
            var17 = var17.user;
            var16 = var17.id;
case 85:
            if(!(var14 == var16)) { _fun0026_ip = 87; continue _fun0026 }
case 88:
            var16 = _closure1_slot14;
case 87:
            var10['userId'] = var16;
            var10 = var11.bind(var13)(var10);
            var5['before'] = var10;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var12];
            var12 = var11.bind(var7)(var10);
            var11 = var12.createMemberSearchCursor;
            var10 = {};
            var16 = var14 == var15;
            var13 = undefined;
            if(var16) { _fun0026_ip = 89; continue _fun0026 }
case 90:
            var16 = var15.member;
            var17 = var14 == var16;
            var13 = undefined;
            if(var17) { _fun0026_ip = 89; continue _fun0026 }
case 91:
            var13 = var16.joined_at;
case 89:
            var10['joinedAt'] = var13;
            var16 = var14 == var15;
            var13 = undefined;
            if(var16) { _fun0026_ip = 92; continue _fun0026 }
case 93:
            var15 = var15.member;
            var16 = var14 == var15;
            var13 = undefined;
            if(var16) { _fun0026_ip = 92; continue _fun0026 }
case 94:
            var15 = var15.user;
            var13 = var15.id;
case 92:
            if(!(var14 == var13)) { _fun0026_ip = 95; continue _fun0026 }
case 96:
            var13 = _closure1_slot14;
case 95:
            var10['userId'] = var13;
            var10 = var11.bind(var12)(var10);
            var5['after'] = var10;
            var6['elasticSearchCursor'] = var5;
            var5 = false;
            var6 = var8.bind(var9)(var6, var5);
            var5 = _closure1_slot8;
            var2 = 1;
            var2 = var5.bind(var7)(var6, var2);
            var2 = var2[var4];
            if(var1) { _fun0026_ip = 97; continue _fun0026 }
case 98:
            var1 = var3;
case 97:
            if(var1) { _fun0026_ip = 99; continue _fun0026 }
case 100:
            var1 = var2;
case 99:
            return var1;
        }
    };
    var2['MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS'] = var9;
    var4 = function handleMemberSafetyGuildMemberUpdateBatch(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var3 = var1.userIds;
        var2 = _closure1_slot20;
        var1 = undefined;
        var2 = var2.bind(var1)(var4);
        var1 = var2.updateMembersByMemberIds;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2['MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var16 = var4;
    var14 = var2;
    var2 = new var16[var8](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_mod_dash_member_safety/MemberSafetyStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();