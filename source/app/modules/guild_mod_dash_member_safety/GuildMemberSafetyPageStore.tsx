// app/modules/guild_mod_dash_member_safety/GuildMemberSafetyPageStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot9;
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
            var7 = _closure1_slot9;
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
    var _closure1_slot8 = var1;
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
case 36:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 36; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var7 = 3;
    var4 = var6[var7];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.SECOND;
    var4 = var7 * var4;
    var _closure1_slot7 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function GuildMemberSafetyPageStore(arg1) {
            var3 = this;
            var4 = _closure1_slot3;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = 0;
            var3['lastRefreshTimestamp'] = var2;
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var3['lastCursorTimestamp'] = var2;
            var2 = null;
            var3['_lastRefreshTimer'] = var2;
            var4 = arg1;
            var3['guildId'] = var4;
            var4 = false;
            var3['_initialized'] = var4;
            var3['_members'] = var2;
            var3['_pagination'] = var2;
            var3['_search'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'getSearchIndex';
        var1['key'] = var2;
        var2 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = this;
                var3 = var1._search;
                var2 = null;
                if(!(var2 != var3)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                var1 = var1._search;
                var1 = var1.hasDefaultQuery;
                if(var1) { _fun0004_ip = 37; continue _fun0004 }
case 3:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.MemberSafetySecondaryIndex;
                var1 = var1.INCLUDED_IN_SEARCH_RESULTS;
                _fun0004_ip = 39; continue _fun0004;
case 37:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.MemberSafetySecondaryIndex;
                var1 = var2.CURRENT_GUILD_MEMBER;
case 39:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(38);
        var2[0] = var1;
        var1 = {};
        var6 = 'initialize';
        var1['key'] = var6;
        var6 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = this;
                var1 = var2._initialized;
                if(var1) { _fun0005_ip = 40; continue _fun0005 }
case 38:
                var1 = true;
                var2['_initialized'] = var1;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 7;
                var1 = var5[var1];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var7 = var1.GuildMemberSafetySearch;
                var9 = var2.guildId;
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var10 = var6;
                var1 = new var10[var7](var9, var8);
                var1 = var1 instanceof Object ? var1 : var6;
                var2['_search'] = var1;
                var1 = 6;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var7 = var1.GuildMemberSafetyMembers;
                var9 = var2.guildId;
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var10 = var6;
                var1 = new var10[var7](var9, var8);
                var1 = var1 instanceof Object ? var1 : var6;
                var2['_members'] = var1;
                var1 = 8;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var5 = var1.GuildMemberSafetyPagination;
                var4 = var2.guildId;
                var6 = var2._members;
                var3 = var6.values;
                var1 = var2.getSearchIndex;
                var1 = var1.bind(var2)();
                var8 = var3.bind(var6)(var1);
                var3 = var5.prototype;
                var3 = Object.create(var3, {constructor: {value: var5}});
                var10 = var3;
                var9 = var4;
                var1 = new var10[var5](var9, var8, var7);
                var1 = var1 instanceof Object ? var1 : var3;
                var2['_pagination'] = var1;
                _fun0005_ip = 41; continue _fun0005;
case 40:
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2['lastCursorTimestamp'] = var1;
case 41:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'isInitialized';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._initialized;
            return var1;
        };
        var1['get'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'reset';
        var1['key'] = var6;
        var6 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = arguments[0];
                var3 = this;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0006_ip = 32; continue _fun0006 }
case 42:
                var2 = false;
case 32:
                var4 = var3._initialized;
                if(!var4) { _fun0006_ip = 43; continue _fun0006 }
case 31:
                var6 = var3._members;
                var4 = null;
                if(!(var4 != var6)) { _fun0006_ip = 2; continue _fun0006 }
case 44:
                var5 = var6.reset;
                var5 = var5.bind(var6)();
case 2:
                var6 = var3._pagination;
                if(!(var4 != var6)) { _fun0006_ip = 45; continue _fun0006 }
case 36:
                var5 = var6.reset;
                var5 = var5.bind(var6)();
case 45:
                var5 = var3._search;
                if(!(var4 != var5)) { _fun0006_ip = 9; continue _fun0006 }
case 46:
                var4 = var5.reset;
                var4 = var4.bind(var5)();
case 9:
                if(!var2) { _fun0006_ip = 43; continue _fun0006 }
case 47:
                var2 = var3.initialize;
                var2 = var2.bind(var3)();
case 43:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'searchChunkSize';
        var1['key'] = var6;
        var6 = function get() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = this;
                var3 = var2._pagination;
                var1 = null;
                var3 = var1 != var3;
                var1 = 0;
                if(!var3) { _fun0007_ip = 48; continue _fun0007 }
case 29:
                var3 = var2._initialized;
                var1 = 0;
                if(!var3) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 8;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.getSearchChunkLimit;
                var5 = var2._pagination;
                var2 = var5.getPaginationState;
                var2 = var2.bind(var5)();
                var1 = var3.bind(var4)(var2);
case 48:
                return var1;
            }
        };
        var1['get'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'getMember';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = this;
                var1 = var2._members;
                var4 = null;
                var3 = var4 != var1;
                var1 = null;
                if(!var3) { _fun0008_ip = 50; continue _fun0008 }
case 29:
                var3 = var2._initialized;
                var1 = null;
                if(!var3) { _fun0008_ip = 50; continue _fun0008 }
case 49:
                var5 = var2._members;
                var3 = var5.getMemberByUserId;
                var2 = arg1;
                var2 = var3.bind(var5)(var2);
                var3 = var4 != var2;
                var1 = null;
                if(!var3) { _fun0008_ip = 50; continue _fun0008 }
case 7:
                var1 = var2;
case 50:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'getMembersByIndex';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = this;
                var2 = var3._members;
                var1 = null;
                if(!(var1 != var2)) { _fun0009_ip = 51; continue _fun0009 }
case 38:
                var1 = var3._initialized;
                if(var1) { _fun0009_ip = 52; continue _fun0009 }
case 51:
                var1 = new Array(2);
                var2 = new Array(0);
                var1[0] = var2;
                var2 = 0;
                var1[1] = var2;
                _fun0009_ip = 53; continue _fun0009;
case 52:
                var5 = var3._members;
                var4 = var5.values;
                var2 = arg1;
                var4 = var4.bind(var5)(var2);
                var2 = new Array(2);
                var2[0] = var4;
                var3 = var3._members;
                var3 = var3.version;
                var2[1] = var3;
                var1 = var2;
case 53:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'countMembersByIndex';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = this;
                var3 = var2._members;
                var1 = null;
                var3 = var1 != var3;
                var1 = 0;
                if(!var3) { _fun0010_ip = 54; continue _fun0010 }
case 29:
                var3 = var2._initialized;
                var1 = 0;
                if(!var3) { _fun0010_ip = 54; continue _fun0010 }
case 49:
                var4 = var2._members;
                var3 = var4.count;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
case 54:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = '_checkUpdatesForPaginationUpdate';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = arg1;
                var4 = arg2;
                var1 = var4.isIncludedInSearchResults;
                var5 = null;
                var1 = var5 != var1;
                if(!var1) { _fun0011_ip = 55; continue _fun0011 }
case 56:
                var6 = var4.isIncludedInSearchResults;
                var2 = var3.isIncludedInSearchResults;
                var1 = var6 !== var2;
case 55:
                if(var1) { _fun0011_ip = 57; continue _fun0011 }
case 58:
                var2 = var4.isCurrentGuildMemberByTimestamp;
                var2 = var5 != var2;
                if(!var2) { _fun0011_ip = 37; continue _fun0011 }
case 59:
                var4 = var4.isCurrentGuildMemberByTimestamp;
                var3 = var3.isCurrentGuildMemberByTimestamp;
                var2 = var4 !== var3;
case 37:
                var1 = var2;
case 57:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = '_getIsIncludedInSearch';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = arg1;
                var1 = this;
                var4 = var1._search;
                var3 = null;
                if(!(var3 != var4)) { _fun0012_ip = 60; continue _fun0012 }
case 61:
                var3 = var1._search;
                var3 = var3.hasDefaultQuery;
                if(var3) { _fun0012_ip = 62; continue _fun0012 }
case 33:
                var4 = {};
                var6 = var4;
                var5 = var2;
                var3 = copyDataProperties(var6, var5);
                var5 = arg2;
                var6 = var4;
                var3 = copyDataProperties(var6, var5);
                var3 = var1._search;
                var1 = var3.isMemberIncludedInSearchResults;
                var3 = var1.bind(var3)(var4);
                var1 = new Array(2);
                var1[0] = var3;
                var2 = var2.isIncludedInSearchResults;
                var2 = var3 !== var2;
                var1[1] = var2;
                return var1;
case 62:
                var1 = new Array(2);
                var2 = false;
                var1[0] = var2;
                var1[1] = var2;
                return var1;
case 60:
                var1 = new Array(2);
                var2 = false;
                var1[0] = var2;
                var1[1] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'updatePaginationChunks';
        var1['key'] = var6;
        var6 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = this;
                var2 = var1._pagination;
                var3 = null;
                if(!(var3 != var2)) { _fun0013_ip = 63; continue _fun0013 }
case 38:
                var2 = var1._members;
                if(!(var3 != var2)) { _fun0013_ip = 63; continue _fun0013 }
case 64:
                var2 = var1._initialized;
                if(!var2) { _fun0013_ip = 63; continue _fun0013 }
case 65:
                var4 = var1._members;
                var3 = var4.values;
                var2 = var1.getSearchIndex;
                var2 = var2.bind(var1)();
                var3 = var3.bind(var4)(var2);
                var2 = var1._pagination;
                var1 = var2.updateSortedMembers;
                var1 = var1.bind(var2)(var3);
                return var1;
case 63:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'removeMember';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var4 = arg1;
                var3 = this;
                var1 = var3._members;
                var2 = null;
                if(!(var2 != var1)) { _fun0014_ip = 66; continue _fun0014 }
case 61:
                var1 = var3._initialized;
                if(!var1) { _fun0014_ip = 66; continue _fun0014 }
case 67:
                var5 = var3._members;
                var1 = var5.getMemberByUserId;
                var1 = var1.bind(var5)(var4);
                if(!(var2 != var1)) { _fun0014_ip = 68; continue _fun0014 }
case 5:
                var2 = var3._members;
                var1 = var2.removeMember;
                var1 = var1.bind(var2)(var4);
                if(!var1) { _fun0014_ip = 69; continue _fun0014 }
case 70:
                var2 = var3.updatePaginationChunks;
                var1 = var2.bind(var3)();
case 69:
                return var1;
case 68:
                var1 = false;
                return var1;
case 66:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = '_rawUpdateMember';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var10 = arg1;
                var7 = arg2;
                var6 = this;
                var1 = var6._members;
                var3 = null;
                if(!(var3 != var1)) { _fun0015_ip = 71; continue _fun0015 }
case 51:
                var2 = var6._members;
                var1 = var2.getMemberByUserId;
                var4 = var1.bind(var2)(var10);
                var1 = var3 == var4;
                var2 = false;
                var8 = false;
                var5 = var4;
                if(!var1) { _fun0015_ip = 72; continue _fun0015 }
case 36:
                var9 = _closure1_slot5;
                var4 = var9.getTrueMember;
                var1 = var6.guildId;
                var10 = var4.bind(var9)(var1, var10);
                if(!(var3 != var10)) { _fun0015_ip = 73; continue _fun0015 }
case 74:
                var9 = var6._members;
                var4 = var9.enhanceNewMember;
                var1 = var6.getSearchState;
                var1 = var1.bind(var6)();
                var5 = var4.bind(var9)(var10, var1, var7);
                var8 = true;
case 72:
                var1 = var7.isIncludedInSearchResults;
                if(!(var3 != var1)) { _fun0015_ip = 75; continue _fun0015 }
case 76:
                var3 = var7.isIncludedInSearchResults;
                var1 = var5.isIncludedInSearchResults;
                var4 = var8;
                if(!(var3 !== var1)) { _fun0015_ip = 77; continue _fun0015 }
case 78:
                var4 = true;
                _fun0015_ip = 77; continue _fun0015;
case 75:
                var1 = var6._getIsIncludedInSearch;
                var10 = var1.bind(var6)(var5, var7);
                var9 = _closure1_slot2;
                var3 = undefined;
                var1 = 2;
                var9 = var9.bind(var3)(var10, var1);
                var1 = 0;
                var1 = var9[var1];
                var3 = 1;
                var3 = var9[var3];
                var4 = var8;
                if(!var3) { _fun0015_ip = 77; continue _fun0015 }
case 79:
                var7['isIncludedInSearchResults'] = var1;
                var4 = true;
case 77:
                var3 = var6._members;
                var1 = var3.updateMember;
                var3 = var1.bind(var3)(var5, var7);
                if(var4) { _fun0015_ip = 80; continue _fun0015 }
case 81:
                var1 = var6._checkUpdatesForPaginationUpdate;
                var4 = var1.bind(var6)(var5, var7);
case 80:
                var1 = new Array(2);
                var1[0] = var4;
                var1[1] = var3;
                return var1;
case 73:
                var1 = new Array(2);
                var1[0] = var2;
                var1[1] = var2;
                return var1;
case 71:
                var1 = new Array(2);
                var2 = false;
                var1[0] = var2;
                var1[1] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'isMemberInIndex';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var2 = this;
                var3 = var2._members;
                var1 = null;
                var3 = var1 == var3;
                if(var3) { _fun0016_ip = 67; continue _fun0016 }
case 61:
                var1 = var2._initialized;
                var3 = !var1;
case 67:
                var1 = !var3;
                if(var3) { _fun0016_ip = 82; continue _fun0016 }
case 33:
                var2 = var2._members;
                var4 = var2._membersMap;
                var3 = var4.has;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
case 82:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'isMemberIncludedInSearchResults';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var4 = var1._members;
                var2 = null;
                if(!(var2 != var4)) { _fun0017_ip = 83; continue _fun0017 }
case 56:
                var4 = var1._search;
                if(!(var2 != var4)) { _fun0017_ip = 83; continue _fun0017 }
case 65:
                var4 = var1._pagination;
                if(!(var2 != var4)) { _fun0017_ip = 83; continue _fun0017 }
case 84:
                var4 = var1._initialized;
                if(!var4) { _fun0017_ip = 83; continue _fun0017 }
case 85:
                var4 = var1._search;
                var4 = var4.hasDefaultQuery;
                if(var4) { _fun0017_ip = 86; continue _fun0017 }
case 87:
                var5 = var1._members;
                var4 = var5.getMemberByUserId;
                var5 = var4.bind(var5)(var3);
                if(!(var2 != var5)) { _fun0017_ip = 88; continue _fun0017 }
case 11:
                var4 = var5.isIncludedInSearchResults;
                if(!var4) { _fun0017_ip = 89; continue _fun0017 }
case 90:
                var4 = true;
                return var4;
case 88:
                var7 = _closure1_slot5;
                var6 = var7.getTrueMember;
                var4 = var1.guildId;
                var7 = var6.bind(var7)(var4, var3);
                if(!(var2 != var7)) { _fun0017_ip = 91; continue _fun0017 }
case 92:
                var6 = var1._members;
                var4 = var6.enhanceNewMember;
                var2 = var1.getSearchState;
                var2 = var2.bind(var1)();
                var5 = var4.bind(var6)(var7, var2);
case 89:
                var4 = var1._search;
                var2 = var4.isMemberIncludedInSearchResults;
                var2 = var2.bind(var4)(var5);
                return var2;
case 91:
                var2 = false;
                return var2;
case 86:
                var2 = var1._pagination;
                var1 = var2.isMemberInAnyChunk;
                var1 = var1.bind(var2)(var3);
                return var1;
case 83:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[14] = var1;
        var1 = {};
        var6 = 'updateMember';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var3 = this;
                var2 = var3._members;
                var1 = null;
                if(!(var1 != var2)) { _fun0018_ip = 47; continue _fun0018 }
case 38:
                var1 = var3._initialized;
                if(!var1) { _fun0018_ip = 47; continue _fun0018 }
case 51:
                var4 = var3._rawUpdateMember;
                var2 = arg1;
                var1 = arg2;
                var5 = var4.bind(var3)(var2, var1);
                var4 = _closure1_slot2;
                var2 = undefined;
                var1 = 2;
                var4 = var4.bind(var2)(var5, var1);
                var1 = 0;
                var2 = var4[var1];
                var1 = 1;
                var1 = var4[var1];
                if(!var2) { _fun0018_ip = 74; continue _fun0018 }
case 93:
                var2 = var3.updatePaginationChunks;
                var1 = var2.bind(var3)();
case 74:
                return var1;
case 47:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[15] = var1;
        var1 = {};
        var6 = 'updateClientMembers';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var23 = arguments[1];
                var22 = arguments[2];
                var3 = this;
                var21 = undefined;
                if(!(var23 === var21)) { _fun0019_ip = 94; continue _fun0019 }
case 38:
                var23 = false;
case 94:
                if(!(var22 === var21)) { _fun0019_ip = 31; continue _fun0019 }
case 56:
                var22 = false;
case 31:
                var1 = var3._members;
                var20 = null;
                if(!(var20 != var1)) { _fun0019_ip = 95; continue _fun0019 }
case 96:
                var1 = var3._initialized;
                if(!var1) { _fun0019_ip = 95; continue _fun0019 }
case 97:
                var2 = _closure1_slot8;
                var1 = arg1;
                var18 = var2.bind(var21)(var1);
                var2 = var18.bind(var21)();
                var4 = var2.done;
                var8 = false;
                var17 = 1;
                var16 = 2;
                var15 = 0;
                var14 = 9;
                var13 = 'isCurrentGuildMemberByTimestamp';
                var12 = 'refreshTimestamp';
                var11 = true;
                var10 = 'isIncludedInSearchResults';
                var9 = var2;
                var7 = false;
                var6 = undefined;
                var5 = undefined;
                var2 = false;
                var1 = false;
                if(var4) { _fun0019_ip = 98; continue _fun0019 }
case 99:
                var4 = var9.value;
                var26 = var4.joinedAt;
                var25 = var8;
                var24 = var7;
                if(!(var20 != var26)) { _fun0019_ip = 100; continue _fun0019 }
case 78:
                var28 = var4;
                if(!var23) { _fun0019_ip = 101; continue _fun0019 }
case 102:
                var26 = {};
                var32 = var26;
                var31 = var4;
                var27 = copyDataProperties(var32, var31);
                var26[var10] = var11;
                var28 = var26;
case 101:
                var26 = var28;
                if(!var22) { _fun0019_ip = 103; continue _fun0019 }
case 16:
                var29 = _closure1_slot0;
                var27 = _closure1_slot1;
                var27 = var27[var14];
                var30 = var29.bind(var21)(var27);
                var29 = var30.getJoinedAtTimestamp;
                var27 = var4.joinedAt;
                var29 = var29.bind(var30)(var27);
                var27 = {};
                var32 = var27;
                var31 = var28;
                var28 = copyDataProperties(var32, var31);
                var28 = var3._members;
                var28 = var28.newMemberTimestamp;
                var28 = var29 <= var28;
                var27[var13] = var28;
                var28 = var3.lastRefreshTimestamp;
                var27[var12] = var28;
                var26 = var27;
case 103:
                var27 = var3._rawUpdateMember;
                var4 = var4.userId;
                var27 = var27.bind(var3)(var4, var26);
                var4 = _closure1_slot2;
                var4 = var4.bind(var21)(var27, var16);
                var28 = var4[var15];
                if(var28) { _fun0019_ip = 104; continue _fun0019 }
case 105:
                var28 = var8;
case 104:
                var27 = var4[var17];
                if(var27) { _fun0019_ip = 106; continue _fun0019 }
case 107:
                var27 = var7;
case 106:
                var24 = var27;
                var25 = var28;
                var6 = var26;
                var5 = var4;
case 100:
                var26 = var18.bind(var21)();
                var4 = var26.done;
                var8 = var25;
                var7 = var24;
                var9 = var26;
                var2 = var8;
                var1 = var7;
                if(!var4) { _fun0019_ip = 99; continue _fun0019 }
case 98:
                if(!var2) { _fun0019_ip = 108; continue _fun0019 }
case 109:
                var2 = var3.updatePaginationChunks;
                var1 = var2.bind(var3)();
case 108:
                return var1;
case 95:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[16] = var1;
        var1 = {};
        var6 = 'updateServerMembers';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var3 = this;
                var1 = var3._members;
                var15 = null;
                if(!(var15 != var1)) { _fun0020_ip = 110; continue _fun0020 }
case 61:
                var1 = var3._initialized;
                if(!var1) { _fun0020_ip = 110; continue _fun0020 }
case 3:
                var2 = _closure1_slot8;
                var13 = undefined;
                var1 = arg1;
                var12 = var2.bind(var13)(var1);
                var2 = var12.bind(var13)();
                var4 = var2.done;
                var7 = false;
                var11 = 1;
                var10 = 2;
                var9 = 0;
                var8 = var2;
                var6 = false;
                var5 = undefined;
                var2 = false;
                var1 = false;
                if(var4) { _fun0020_ip = 111; continue _fun0020 }
case 48:
                var4 = var8.value;
                var19 = _closure1_slot5;
                var18 = var19.getTrueMember;
                var17 = var3.guildId;
                var16 = var4.user;
                var16 = var16.id;
                var19 = var18.bind(var19)(var17, var16);
                var17 = var7;
                var16 = var6;
                if(!(var15 != var19)) { _fun0020_ip = 112; continue _fun0020 }
case 113:
                var18 = var3._rawUpdateMember;
                var4 = var4.user;
                var4 = var4.id;
                var18 = var18.bind(var3)(var4, var19);
                var4 = _closure1_slot2;
                var4 = var4.bind(var13)(var18, var10);
                var19 = var4[var9];
                if(var19) { _fun0020_ip = 114; continue _fun0020 }
case 17:
                var19 = var7;
case 114:
                var18 = var4[var11];
                if(var18) { _fun0020_ip = 115; continue _fun0020 }
case 16:
                var18 = var6;
case 115:
                var16 = var18;
                var17 = var19;
                var5 = var4;
case 112:
                var18 = var12.bind(var13)();
                var4 = var18.done;
                var7 = var17;
                var6 = var16;
                var8 = var18;
                var2 = var7;
                var1 = var6;
                if(!var4) { _fun0020_ip = 48; continue _fun0020 }
case 111:
                if(!var2) { _fun0020_ip = 21; continue _fun0020 }
case 116:
                var2 = var3.updatePaginationChunks;
                var1 = var2.bind(var3)();
case 21:
                return var1;
case 110:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[17] = var1;
        var1 = {};
        var6 = 'updateMembersByMemberIds';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var5 = arg1;
                var3 = this;
                var _closure3_slot0 = var3;
                var4 = var3._members;
                var2 = null;
                if(!(var2 != var4)) { _fun0021_ip = 30; continue _fun0021 }
case 51:
                var2 = var3._initialized;
                if(!var2) { _fun0021_ip = 30; continue _fun0021 }
case 33:
                var4 = var5.reduce;
                var2 = function(arg1, arg2) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                        var1 = arg1;
                        var5 = _closure1_slot5;
                        var4 = var5.getTrueMember;
                        var2 = _closure3_slot0;
                        var3 = var2.guildId;
                        var2 = arg2;
                        var3 = var4.bind(var5)(var3, var2);
                        var2 = null;
                        if(!(var2 != var3)) { _fun0022_ip = 59; continue _fun0022 }
case 117:
                        var2 = var1.push;
                        var2 = var2.bind(var1)(var3);
case 59:
                        return var1;
                    }
                };
                var1 = new Array(0);
                var2 = var4.bind(var5)(var2, var1);
                var1 = var3.updateClientMembers;
                var1 = var1.bind(var3)(var2);
                return var1;
case 30:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[18] = var1;
        var1 = {};
        var6 = 'updateMembersSort';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = this;
            var _closure3_slot0 = var2;
            var2 = arg1;
            var _closure3_slot1 = var2;
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var4 = function(arg1) {
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var5 = 10;
                var2 = var11[var5];
                var1 = undefined;
                var6 = var10.bind(var1)(var2);
                var4 = var6.cloneDeep;
                var9 = _closure3_slot0;
                var7 = var9.getMembersByIndex;
                var2 = 6;
                var3 = var11[var2];
                var3 = var10.bind(var1)(var3);
                var3 = var3.MemberSafetySecondaryIndex;
                var3 = var3.CURRENT_GUILD_MEMBER;
                var3 = var7.bind(var9)(var3);
                var7 = 0;
                var3 = var3[var7];
                var13 = var4.bind(var6)(var3);
                var4 = new Array(0);
                var14 = var4;
                var12 = 0;
                var12 = arraySpread(var14, var13, var12);
                var5 = var11[var5];
                var6 = var10.bind(var1)(var5);
                var5 = var6.cloneDeep;
                var8 = var9.getMembersByIndex;
                var2 = var11[var2];
                var2 = var10.bind(var1)(var2);
                var2 = var2.MemberSafetySecondaryIndex;
                var2 = var2.NEW_GUILD_MEMBER;
                var2 = var8.bind(var9)(var2);
                var2 = var2[var7];
                var13 = var5.bind(var6)(var2);
                var14 = var4;
                var2 = arraySpread(var14, var13, var12);
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                        var5 = arg1;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var4 = var6.getSortValueForMember;
                        var2 = _closure3_slot1;
                        var7 = var4.bind(var6)(var5, var2);
                        var2 = _closure3_slot0;
                        var8 = var2._search;
                        var2 = null;
                        var6 = var2 == var8;
                        var4 = undefined;
                        if(var6) { _fun0023_ip = 118; continue _fun0023 }
case 70:
                        var6 = var8.isMemberIncludedInSearchResults;
                        var4 = var6.bind(var8)(var5);
case 118:
                        var6 = var2 != var4;
                        if(!var6) { _fun0023_ip = 119; continue _fun0023 }
case 74:
                        var6 = var4;
case 119:
                        var3 = _closure3_slot0;
                        var4 = var3._members;
                        if(!(var2 != var4)) { _fun0023_ip = 76; continue _fun0023 }
case 120:
                        var3 = var4.updateMember;
                        var2 = {};
                        var2['sort'] = var7;
                        var2['isIncludedInSearchResults'] = var6;
                        var2 = var3.bind(var4)(var5, var2);
case 76:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var2 = arg1;
                var2 = var2.bind(var1)();
                return var1;
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1['value'] = var6;
        var2[19] = var1;
        var1 = {};
        var6 = 'sortMembersBySelectedSort';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var4 = arg1;
                var3 = this;
                var _closure3_slot0 = var3;
                var2 = var3._search;
                var5 = null;
                var2 = var5 != var2;
                if(!var2) { _fun0024_ip = 55; continue _fun0024 }
case 67:
                var6 = var3._members;
                var2 = var5 != var6;
case 55:
                if(!var2) { _fun0024_ip = 121; continue _fun0024 }
case 58:
                var2 = var3._initialized;
case 121:
                if(!var2) { _fun0024_ip = 59; continue _fun0024 }
case 122:
                var2 = var5 != var4;
case 59:
                if(!var2) { _fun0024_ip = 123; continue _fun0024 }
case 28:
                var6 = var3.updatePaginationState;
                var5 = {};
                var5['sort'] = var4;
                var2 = true;
                var2 = var6.bind(var3)(var5, var2);
                var2 = var3.updateMembersSort;
                var3 = var2.bind(var3)(var4);
                var2 = var3.then;
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.updatePaginationChunks;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
case 123:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[20] = var1;
        var1 = {};
        var6 = 'updateSearchedMembersByMemberIds';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var4 = arg1;
                var5 = this;
                var _closure3_slot0 = var5;
                var2 = var5._search;
                var3 = null;
                if(!(var3 != var2)) { _fun0025_ip = 123; continue _fun0025 }
case 51:
                var2 = var5._members;
                if(!(var3 != var2)) { _fun0025_ip = 123; continue _fun0025 }
case 65:
                var2 = var5._initialized;
                if(!var2) { _fun0025_ip = 123; continue _fun0025 }
case 117:
                var3 = var4.reduce;
                var2 = function(arg1, arg2) {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                        var1 = arg1;
                        var5 = _closure1_slot5;
                        var4 = var5.getTrueMember;
                        var2 = _closure3_slot0;
                        var3 = var2.guildId;
                        var2 = arg2;
                        var3 = var4.bind(var5)(var3, var2);
                        var2 = null;
                        if(!(var2 != var3)) { _fun0026_ip = 59; continue _fun0026 }
case 117:
                        var2 = var1.push;
                        var2 = var2.bind(var1)(var3);
case 59:
                        return var1;
                    }
                };
                var1 = new Array(0);
                var4 = var3.bind(var4)(var2, var1);
                var3 = var5.updateClientMembers;
                var1 = var5._search;
                var2 = var1.requiresUsernameMatch;
                var6 = var5.lastRefreshTimestamp;
                var1 = 0;
                var1 = var1 !== var6;
                var1 = var3.bind(var5)(var4, var2, var1);
                return var1;
case 123:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[21] = var1;
        var1 = {};
        var6 = 'rebuildAllMembers';
        var1['key'] = var6;
        var6 = function value() {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var3 = this;
                var2 = var3._members;
                var1 = null;
                if(!(var1 != var2)) { _fun0027_ip = 7; continue _fun0027 }
case 38:
                var1 = var3._initialized;
                if(!var1) { _fun0027_ip = 7; continue _fun0027 }
case 51:
                var4 = _closure1_slot5;
                var2 = var4.getMembers;
                var1 = var3.guildId;
                var2 = var2.bind(var4)(var1);
                var1 = var3.updateClientMembers;
                var1 = var1.bind(var3)(var2);
                return var1;
case 7:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[22] = var1;
        var1 = {};
        var6 = '_scheduleRefresh';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var1 = arg1;
                var3['lastRefreshTimestamp'] = var1;
                var1 = global;
                var5 = var1.Date;
                var4 = var5.now;
                var4 = var4.bind(var5)();
                var3['lastCursorTimestamp'] = var4;
                var5 = var3._lastRefreshTimer;
                var4 = null;
                if(!(var4 != var5)) { _fun0028_ip = 57; continue _fun0028 }
case 59:
                var6 = var1.clearTimeout;
                var5 = var3._lastRefreshTimer;
                var4 = undefined;
                var4 = var6.bind(var4)(var5);
case 57:
                var5 = var1.setTimeout;
                var4 = _closure1_slot7;
                var1 = undefined;
                var2 = function() {
                    var2 = _closure3_slot0;
                    var1 = null;
                    var2['_lastRefreshTimer'] = var1;
                    var1 = 0;
                    var2['lastRefreshTimestamp'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var2 = var5.bind(var1)(var2, var4);
                var3['_lastRefreshTimer'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[23] = var1;
        var1 = {};
        var6 = 'refreshNewMembersAndSearchResults';
        var1['key'] = var6;
        var6 = function value() {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var3 = this;
                var1 = var3._search;
                var2 = null;
                if(!(var2 != var1)) { _fun0029_ip = 124; continue _fun0029 }
case 61:
                var1 = var3._members;
                if(!(var2 != var1)) { _fun0029_ip = 124; continue _fun0029 }
case 49:
                var1 = var3._initialized;
                if(!var1) { _fun0029_ip = 124; continue _fun0029 }
case 117:
                var1 = global;
                var2 = var1.Number;
                var4 = var1.Date;
                var1 = var4.now;
                var1 = var1.bind(var4)();
                var9 = undefined;
                var11 = var2.bind(var9)(var1);
                var1 = var3._scheduleRefresh;
                var1 = var1.bind(var3)(var11);
                var2 = _closure1_slot8;
                var10 = _closure1_slot0;
                var12 = _closure1_slot1;
                var1 = 10;
                var1 = var12[var1];
                var6 = var10.bind(var9)(var1);
                var4 = var6.cloneDeep;
                var8 = var3._members;
                var7 = var8.values;
                var1 = 6;
                var1 = var12[var1];
                var1 = var10.bind(var9)(var1);
                var1 = var1.MemberSafetySecondaryIndex;
                var1 = var1.NEW_GUILD_MEMBER;
                var1 = var7.bind(var8)(var1);
                var1 = var4.bind(var6)(var1);
                var10 = var2.bind(var9)(var1);
                var2 = var10.bind(var9)();
                var6 = var2.done;
                var4 = false;
                var1 = true;
                var8 = var2;
                var7 = false;
                var2 = false;
                if(var6) { _fun0029_ip = 125; continue _fun0029 }
case 126:
                var14 = var8.value;
                var13 = var3._members;
                var12 = var13.updateMember;
                var6 = {};
                var6['isCurrentGuildMemberByTimestamp'] = var1;
                var6['refreshTimestamp'] = var11;
                var17 = _closure1_slot6;
                var16 = var17.getUser;
                var15 = var14.userId;
                var15 = var16.bind(var17)(var15);
                var6['user'] = var15;
                var12 = var12.bind(var13)(var14, var6);
                if(var12) { _fun0029_ip = 103; continue _fun0029 }
case 127:
                var12 = var7;
case 103:
                var13 = var10.bind(var9)();
                var6 = var13.done;
                var7 = var12;
                var8 = var13;
                var2 = var7;
                if(!var6) { _fun0029_ip = 126; continue _fun0029 }
case 125:
                var7 = var3._members;
                var6 = var7.resetNewMemberTimestamp;
                var6 = var6.bind(var7)();
                var6 = var3.resetSearchState;
                var6 = var6.bind(var3)();
                if(!var6) { _fun0029_ip = 128; continue _fun0029 }
case 129:
                var2 = false;
case 128:
                var8 = var3.updatePaginationState;
                var7 = {};
                var6 = 1;
                var7['currentPage'] = var6;
                var8 = var8.bind(var3)(var7, var4);
                var7 = _closure1_slot2;
                var5 = 2;
                var5 = var7.bind(var9)(var8, var5);
                var7 = 0;
                var7 = var5[var7];
                var5 = var5[var6];
                if(!var5) { _fun0029_ip = 108; continue _fun0029 }
case 130:
                var2 = false;
case 108:
                if(!var2) { _fun0029_ip = 131; continue _fun0029 }
case 132:
                var2 = var3.updatePaginationChunks;
                var2 = var2.bind(var3)();
case 131:
                return var1;
case 124:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[24] = var1;
        var1 = {};
        var6 = 'getNewMemberTimestamp';
        var1['key'] = var6;
        var6 = function value() {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var2 = this;
                var3 = var2._members;
                var1 = null;
                var3 = var1 != var3;
                var1 = 0;
                if(!var3) { _fun0030_ip = 117; continue _fun0030 }
case 29:
                var3 = var2._initialized;
                var1 = 0;
                if(!var3) { _fun0030_ip = 117; continue _fun0030 }
case 49:
                var2 = var2._members;
                var1 = var2.newMemberTimestamp;
case 117:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[25] = var1;
        var1 = {};
        var6 = 'updateSearchState';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var4 = arg1;
                var2 = this;
                var1 = var2._members;
                var3 = null;
                if(!(var3 != var1)) { _fun0031_ip = 133; continue _fun0031 }
case 56:
                var1 = var2._search;
                if(!(var3 != var1)) { _fun0031_ip = 133; continue _fun0031 }
case 65:
                var1 = var2._initialized;
                if(!var1) { _fun0031_ip = 133; continue _fun0031 }
case 121:
                var1 = global;
                var5 = var1.Boolean;
                var1 = var2._search;
                var1 = var1.hasDefaultQuery;
                var11 = undefined;
                var6 = var5.bind(var11)(var1);
                var1 = var4.selectedSort;
                var1 = var3 != var1;
                if(!var1) { _fun0031_ip = 134; continue _fun0031 }
case 74:
                var5 = var4.selectedSort;
                var7 = var2._search;
                var3 = var7.getSearchState;
                var3 = var3.bind(var7)();
                var3 = var3.selectedSort;
                var1 = var5 !== var3;
case 134:
                if(!var1) { _fun0031_ip = 135; continue _fun0031 }
case 136:
                var3 = var2.sortMembersBySelectedSort;
                var1 = var4.selectedSort;
                var1 = var3.bind(var2)(var1);
case 135:
                var3 = var2._search;
                var1 = var3.updateSearchState;
                var1 = var1.bind(var3)(var4);
                var3 = var2._search;
                var3 = var3.hasDefaultQuery;
                if(!var3) { _fun0031_ip = 16; continue _fun0031 }
case 101:
                if(var6) { _fun0031_ip = 137; continue _fun0031 }
case 16:
                var10 = _closure1_slot0;
                var12 = _closure1_slot1;
                var4 = 10;
                var4 = var12[var4];
                var7 = var10.bind(var11)(var4);
                var5 = var7.cloneDeep;
                var9 = var2._members;
                var8 = var9.values;
                var4 = 6;
                var4 = var12[var4];
                var4 = var10.bind(var11)(var4);
                var4 = var4.MemberSafetySecondaryIndex;
                var4 = var4.CURRENT_GUILD_MEMBER;
                var4 = var8.bind(var9)(var4);
                var5 = var5.bind(var7)(var4);
                var4 = var2._search;
                var4 = var4.hasDefaultQuery;
                var7 = var6 !== var4;
                var3 = _closure1_slot8;
                var10 = var3.bind(var11)(var5);
                var6 = var10.bind(var11)();
                var5 = var6.done;
                var9 = var1;
                var8 = var6;
                var6 = undefined;
                var1 = var9;
                var4 = var7;
                if(var5) { _fun0031_ip = 138; continue _fun0031 }
case 107:
                var17 = var8.value;
                var5 = var17.isCurrentGuildMemberByTimestamp;
                var13 = var9;
                var12 = var7;
                if(!var5) { _fun0031_ip = 139; continue _fun0031 }
case 140:
                var14 = var2._search;
                var5 = var14.isMemberIncludedInSearchResults;
                var5 = var5.bind(var14)(var17);
                var14 = var17.isIncludedInSearchResults;
                var13 = var9;
                var12 = var7;
                var6 = var5;
                if(!(var5 !== var14)) { _fun0031_ip = 139; continue _fun0031 }
case 130:
                var16 = var2._members;
                var15 = var16.updateMember;
                var14 = {};
                var14['isIncludedInSearchResults'] = var5;
                var14 = var15.bind(var16)(var17, var14);
                var13 = true;
                var12 = true;
                var6 = var5;
case 139:
                var14 = var10.bind(var11)();
                var5 = var14.done;
                var9 = var13;
                var7 = var12;
                var8 = var14;
                var1 = var9;
                var4 = var7;
                if(!var5) { _fun0031_ip = 107; continue _fun0031 }
case 138:
                if(!var4) { _fun0031_ip = 141; continue _fun0031 }
case 142:
                var4 = var2.updatePaginationChunks;
                var4 = var4.bind(var2)();
                var5 = var2.updatePaginationState;
                var4 = {};
                var6 = 1;
                var4['currentPage'] = var6;
                var4 = var5.bind(var2)(var4);
                var1 = true;
case 141:
                return var1;
case 137:
                var1 = var2.updatePaginationChunks;
                var1 = var1.bind(var2)();
                return var1;
case 133:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[26] = var1;
        var1 = {};
        var6 = 'getSearchState';
        var1['key'] = var6;
        var6 = function value() {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var2 = this;
                var3 = var2._search;
                var1 = null;
                if(!(var1 != var3)) { _fun0032_ip = 51; continue _fun0032 }
case 38:
                var1 = var2._initialized;
                if(var1) { _fun0032_ip = 143; continue _fun0032 }
case 51:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.getDefaultSearchState;
                var1 = var1.bind(var3)();
                _fun0032_ip = 144; continue _fun0032;
case 143:
                var3 = var2._search;
                var2 = var3.getSearchState;
                var1 = var2.bind(var3)();
case 144:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[27] = var1;
        var1 = {};
        var6 = 'hasDefaultSearchState';
        var1['key'] = var6;
        var6 = function value() {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var2 = this;
                var3 = var2._search;
                var1 = null;
                var1 = var1 == var3;
                if(var1) { _fun0033_ip = 67; continue _fun0033 }
case 61:
                var3 = var2._initialized;
                var1 = !var3;
case 67:
                if(var1) { _fun0033_ip = 145; continue _fun0033 }
case 3:
                var2 = var2._search;
                var1 = var2.hasDefaultQuery;
case 145:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[28] = var1;
        var1 = {};
        var6 = 'resetSearchState';
        var1['key'] = var6;
        var6 = function value() {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var4 = this;
                var2 = var4._search;
                var1 = null;
                var2 = var1 == var2;
                if(var2) { _fun0034_ip = 67; continue _fun0034 }
case 61:
                var1 = var4._initialized;
                var2 = !var1;
case 67:
                var1 = !var2;
                if(var2) { _fun0034_ip = 146; continue _fun0034 }
case 33:
                var3 = var4._search;
                var2 = var3.resetSearchState;
                var2 = var2.bind(var3)();
                var3 = !var2;
                var2 = !var3;
                if(var3) { _fun0034_ip = 70; continue _fun0034 }
case 82:
                var3 = var4.updatePaginationChunks;
                var2 = var3.bind(var4)();
case 70:
                var1 = var2;
case 146:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[29] = var1;
        var1 = {};
        var6 = 'getTotalResultsCount';
        var1['key'] = var6;
        var6 = function value() {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var3 = this;
                var1 = var3._search;
                var4 = null;
                var2 = var4 != var1;
                var1 = 0;
                if(!var2) { _fun0035_ip = 90; continue _fun0035 }
case 29:
                var2 = var3._pagination;
                var2 = var4 != var2;
                var1 = 0;
                if(!var2) { _fun0035_ip = 90; continue _fun0035 }
case 44:
                var2 = var3._initialized;
                var1 = 0;
                if(!var2) { _fun0035_ip = 90; continue _fun0035 }
case 121:
                var2 = var3._search;
                var2 = var2.hasDefaultQuery;
                if(!var2) { _fun0035_ip = 146; continue _fun0035 }
case 143:
                var2 = var3._defaultSearchTotalResultsCount;
                if(!(var4 == var2)) { _fun0035_ip = 11; continue _fun0035 }
case 146:
                var4 = var3._pagination;
                var2 = var4.getPaginationState;
                var2 = var2.bind(var4)();
                var2 = var2.totalResultsCount;
                _fun0035_ip = 147; continue _fun0035;
case 11:
                var2 = var3._defaultSearchTotalResultsCount;
case 147:
                var1 = var2;
case 90:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[30] = var1;
        var1 = {};
        var6 = 'updatePaginationState';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var4 = arg1;
                var3 = arguments[1];
                var2 = this;
                var1 = undefined;
                if(!(var3 === var1)) { _fun0036_ip = 94; continue _fun0036 }
case 38:
                var3 = true;
case 94:
                var1 = var2._search;
                var6 = null;
                if(!(var6 != var1)) { _fun0036_ip = 5; continue _fun0036 }
case 148:
                var1 = var2._pagination;
                if(!(var6 != var1)) { _fun0036_ip = 5; continue _fun0036 }
case 149:
                var1 = var2._initialized;
                if(var1) { _fun0036_ip = 150; continue _fun0036 }
case 5:
                var1 = new Array(2);
                var5 = false;
                var1[0] = var5;
                var1[1] = var5;
                _fun0036_ip = 151; continue _fun0036;
case 150:
                if(!var3) { _fun0036_ip = 46; continue _fun0036 }
case 30:
                var3 = 0;
                var2['lastRefreshTimestamp'] = var3;
case 46:
                var3 = var2._search;
                var3 = var3.hasDefaultQuery;
                if(!var3) { _fun0036_ip = 152; continue _fun0036 }
case 53:
                var5 = var4.totalResultsCount;
                var3 = var6 != var5;
case 152:
                if(!var3) { _fun0036_ip = 153; continue _fun0036 }
case 120:
                var3 = var4.totalResultsCount;
                var2['_defaultSearchTotalResultsCount'] = var3;
case 153:
                var3 = var2._pagination;
                var2 = var3.updatePaginationState;
                var1 = var2.bind(var3)(var4);
case 151:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[31] = var1;
        var1 = {};
        var6 = 'clearPaginationState';
        var1['key'] = var6;
        var6 = function value() {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var1 = this;
                var2 = var1._pagination;
                var1 = null;
                if(!(var1 != var2)) { _fun0037_ip = 64; continue _fun0037 }
case 38:
                var1 = var2.reset;
                var1 = var1.bind(var2)();
case 64:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[32] = var1;
        var1 = {};
        var6 = 'getPaginationState';
        var1['key'] = var6;
        var6 = function value() {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var2 = this;
                var3 = var2._pagination;
                var1 = null;
                if(!(var1 != var3)) { _fun0038_ip = 51; continue _fun0038 }
case 38:
                var1 = var2._initialized;
                if(var1) { _fun0038_ip = 143; continue _fun0038 }
case 51:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 8;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createDefaultMemberSafetyPaginationState;
                var1 = var1.bind(var3)();
                _fun0038_ip = 144; continue _fun0038;
case 143:
                var3 = var2._pagination;
                var2 = var3.getPaginationState;
                var1 = var2.bind(var3)();
case 144:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[33] = var1;
        var1 = {};
        var6 = 'getPaginatedMembers';
        var1['key'] = var6;
        var6 = function value() {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                var3 = this;
                var2 = var3._pagination;
                var1 = null;
                if(!(var1 != var2)) { _fun0039_ip = 51; continue _fun0039 }
case 38:
                var1 = var3._initialized;
                if(var1) { _fun0039_ip = 145; continue _fun0039 }
case 51:
                var1 = new Array(2);
                var2 = {};
                var1[0] = var2;
                var2 = 0;
                var1[1] = var2;
                _fun0039_ip = 48; continue _fun0039;
case 145:
                var2 = var3._pagination;
                var4 = var2.paginatedMembers;
                var2 = new Array(2);
                var2[0] = var4;
                var3 = var3._pagination;
                var3 = var3.version;
                var2[1] = var3;
                var1 = var2;
case 48:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[34] = var1;
        var1 = {};
        var6 = 'updatePaginationToken';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                var2 = this;
                var3 = var2._pagination;
                var1 = null;
                var3 = var1 == var3;
                if(var3) { _fun0040_ip = 67; continue _fun0040 }
case 61:
                var1 = var2._initialized;
                var3 = !var1;
case 67:
                var1 = !var3;
                if(var3) { _fun0040_ip = 59; continue _fun0040 }
case 33:
                var4 = var2._pagination;
                var3 = var4.updatePaginationToken;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
case 59:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[35] = var1;
        var1 = {};
        var6 = 'getElasticSearchPagination';
        var1['key'] = var6;
        var6 = function value() {
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                var2 = this;
                var1 = var2._pagination;
                var4 = null;
                var3 = var4 != var1;
                var1 = null;
                if(!var3) { _fun0041_ip = 84; continue _fun0041 }
case 29:
                var3 = var2._initialized;
                var1 = null;
                if(!var3) { _fun0041_ip = 84; continue _fun0041 }
case 49:
                var3 = var2._pagination;
                var2 = var3.getElasticSearchPagination;
                var1 = var2.bind(var3)();
case 84:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[36] = var1;
        var1 = {};
        var6 = 'removeRoleFromSearchState';
        var1['key'] = var6;
        var5 = function value(arg1) {
            var3 = this;
            var1 = global;
            var4 = var1.Set;
            var1 = var3.getSearchState;
            var1 = var1.bind(var3)();
            var5 = var1.selectedRoleIds;
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var6 = var2;
            var1 = new var6[var4](var5, var4);
            var4 = var1 instanceof Object ? var1 : var2;
            var2 = var4.delete;
            var1 = arg1;
            var1 = var2.bind(var4)(var1);
            var2 = var3.updateSearchState;
            var1 = {};
            var1['selectedRoleIds'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var5;
        var2[37] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_mod_dash_member_safety/GuildMemberSafetyPageStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['GuildMemberSafetyPageStore'] = var2;
    return var1;
})();