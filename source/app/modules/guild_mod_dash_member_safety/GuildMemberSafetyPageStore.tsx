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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot9;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot9;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 343:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
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
 0:
                var1 = this;
                var3 = var1._search;
                var2 = null;
                if(!(var2 != var3)) { _fun0004_ip = 69; continue _fun0004 }
 15:
                var1 = var1._search;
                var1 = var1.hasDefaultQuery;
                if(var1) { _fun0004_ip = 69; continue _fun0004 }
 30:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.MemberSafetySecondaryIndex;
                var1 = var1.INCLUDED_IN_SEARCH_RESULTS;
                _fun0004_ip = 106; continue _fun0004;
 69:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.MemberSafetySecondaryIndex;
                var1 = var2.CURRENT_GUILD_MEMBER;
 106:
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
 0:
                var2 = this;
                var1 = var2._initialized;
                if(var1) { _fun0005_ip = 214; continue _fun0005 }
 15:
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
                _fun0005_ip = 237; continue _fun0005;
 214:
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2['lastCursorTimestamp'] = var1;
 237:
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
 0:
                var2 = arguments[0];
                var3 = this;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0006_ip = 14; continue _fun0006 }
 12:
                var2 = false;
 14:
                var4 = var3._initialized;
                if(!var4) { _fun0006_ip = 98; continue _fun0006 }
 23:
                var6 = var3._members;
                var4 = null;
                if(!(var4 != var6)) { _fun0006_ip = 45; continue _fun0006 }
 35:
                var5 = var6.reset;
                var5 = var5.bind(var6)();
 45:
                var6 = var3._pagination;
                if(!(var4 != var6)) { _fun0006_ip = 65; continue _fun0006 }
 55:
                var5 = var6.reset;
                var5 = var5.bind(var6)();
 65:
                var5 = var3._search;
                if(!(var4 != var5)) { _fun0006_ip = 85; continue _fun0006 }
 75:
                var4 = var5.reset;
                var4 = var4.bind(var5)();
 85:
                if(!var2) { _fun0006_ip = 98; continue _fun0006 }
 88:
                var2 = var3.initialize;
                var2 = var2.bind(var3)();
 98:
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
 0:
                var2 = this;
                var3 = var2._pagination;
                var1 = null;
                var3 = var1 != var3;
                var1 = 0;
                if(!var3) { _fun0007_ip = 83; continue _fun0007 }
 20:
                var3 = var2._initialized;
                var1 = 0;
                if(!var3) { _fun0007_ip = 83; continue _fun0007 }
 31:
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
 83:
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
 0:
                var2 = this;
                var1 = var2._members;
                var4 = null;
                var3 = var4 != var1;
                var1 = null;
                if(!var3) { _fun0008_ip = 63; continue _fun0008 }
 20:
                var3 = var2._initialized;
                var1 = null;
                if(!var3) { _fun0008_ip = 63; continue _fun0008 }
 31:
                var5 = var2._members;
                var3 = var5.getMemberByUserId;
                var2 = arg1;
                var2 = var3.bind(var5)(var2);
                var3 = var4 != var2;
                var1 = null;
                if(!var3) { _fun0008_ip = 63; continue _fun0008 }
 60:
                var1 = var2;
 63:
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
 0:
                var3 = this;
                var2 = var3._members;
                var1 = null;
                if(!(var1 != var2)) { _fun0009_ip = 24; continue _fun0009 }
 15:
                var1 = var3._initialized;
                if(var1) { _fun0009_ip = 44; continue _fun0009 }
 24:
                var1 = new Array(2);
                var2 = new Array(0);
                var1[0] = var2;
                var2 = 0;
                var1[1] = var2;
                _fun0009_ip = 90; continue _fun0009;
 44:
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
 90:
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
 0:
                var2 = this;
                var3 = var2._members;
                var1 = null;
                var3 = var1 != var3;
                var1 = 0;
                if(!var3) { _fun0010_ip = 51; continue _fun0010 }
 20:
                var3 = var2._initialized;
                var1 = 0;
                if(!var3) { _fun0010_ip = 51; continue _fun0010 }
 31:
                var4 = var2._members;
                var3 = var4.count;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
 51:
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
 0:
                var3 = arg1;
                var4 = arg2;
                var1 = var4.isIncludedInSearchResults;
                var5 = null;
                var1 = var5 != var1;
                if(!var1) { _fun0011_ip = 37; continue _fun0011 }
 21:
                var6 = var4.isIncludedInSearchResults;
                var2 = var3.isIncludedInSearchResults;
                var1 = var6 !== var2;
 37:
                if(var1) { _fun0011_ip = 72; continue _fun0011 }
 40:
                var2 = var4.isCurrentGuildMemberByTimestamp;
                var2 = var5 != var2;
                if(!var2) { _fun0011_ip = 69; continue _fun0011 }
 53:
                var4 = var4.isCurrentGuildMemberByTimestamp;
                var3 = var3.isCurrentGuildMemberByTimestamp;
                var2 = var4 !== var3;
 69:
                var1 = var2;
 72:
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
 0:
                var2 = arg1;
                var1 = this;
                var4 = var1._search;
                var3 = null;
                if(!(var3 != var4)) { _fun0012_ip = 112; continue _fun0012 }
 18:
                var3 = var1._search;
                var3 = var3.hasDefaultQuery;
                if(var3) { _fun0012_ip = 96; continue _fun0012 }
 33:
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
 96:
                var1 = new Array(2);
                var2 = false;
                var1[0] = var2;
                var1[1] = var2;
                return var1;
 112:
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
 0:
                var1 = this;
                var2 = var1._pagination;
                var3 = null;
                if(!(var3 != var2)) { _fun0013_ip = 81; continue _fun0013 }
 15:
                var2 = var1._members;
                if(!(var3 != var2)) { _fun0013_ip = 81; continue _fun0013 }
 25:
                var2 = var1._initialized;
                if(!var2) { _fun0013_ip = 81; continue _fun0013 }
 34:
                var4 = var1._members;
                var3 = var4.values;
                var2 = var1.getSearchIndex;
                var2 = var2.bind(var1)();
                var3 = var3.bind(var4)(var2);
                var2 = var1._pagination;
                var1 = var2.updateSortedMembers;
                var1 = var1.bind(var2)(var3);
                return var1;
 81:
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
 0:
                var4 = arg1;
                var3 = this;
                var1 = var3._members;
                var2 = null;
                if(!(var2 != var1)) { _fun0014_ip = 84; continue _fun0014 }
 18:
                var1 = var3._initialized;
                if(!var1) { _fun0014_ip = 84; continue _fun0014 }
 27:
                var5 = var3._members;
                var1 = var5.getMemberByUserId;
                var1 = var1.bind(var5)(var4);
                if(!(var2 != var1)) { _fun0014_ip = 80; continue _fun0014 }
 48:
                var2 = var3._members;
                var1 = var2.removeMember;
                var1 = var1.bind(var2)(var4);
                if(!var1) { _fun0014_ip = 78; continue _fun0014 }
 68:
                var2 = var3.updatePaginationChunks;
                var1 = var2.bind(var3)();
 78:
                return var1;
 80:
                var1 = false;
                return var1;
 84:
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
 0:
                var10 = arg1;
                var7 = arg2;
                var6 = this;
                var1 = var6._members;
                var3 = null;
                if(!(var3 != var1)) { _fun0015_ip = 272; continue _fun0015 }
 24:
                var2 = var6._members;
                var1 = var2.getMemberByUserId;
                var4 = var1.bind(var2)(var10);
                var1 = var3 == var4;
                var2 = false;
                var8 = false;
                var5 = var4;
                if(!var1) { _fun0015_ip = 117; continue _fun0015 }
 55:
                var9 = _closure1_slot5;
                var4 = var9.getTrueMember;
                var1 = var6.guildId;
                var10 = var4.bind(var9)(var1, var10);
                if(!(var3 != var10)) { _fun0015_ip = 258; continue _fun0015 }
 86:
                var9 = var6._members;
                var4 = var9.enhanceNewMember;
                var1 = var6.getSearchState;
                var1 = var1.bind(var6)();
                var5 = var4.bind(var9)(var10, var1, var7);
                var8 = true;
 117:
                var1 = var7.isIncludedInSearchResults;
                if(!(var3 != var1)) { _fun0015_ip = 150; continue _fun0015 }
 127:
                var3 = var7.isIncludedInSearchResults;
                var1 = var5.isIncludedInSearchResults;
                var4 = var8;
                if(!(var3 !== var1)) { _fun0015_ip = 209; continue _fun0015 }
 146:
                var4 = true;
                _fun0015_ip = 209; continue _fun0015;
 150:
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
                if(!var3) { _fun0015_ip = 209; continue _fun0015 }
 201:
                var7['isIncludedInSearchResults'] = var1;
                var4 = true;
 209:
                var3 = var6._members;
                var1 = var3.updateMember;
                var3 = var1.bind(var3)(var5, var7);
                if(var4) { _fun0015_ip = 244; continue _fun0015 }
 230:
                var1 = var6._checkUpdatesForPaginationUpdate;
                var4 = var1.bind(var6)(var5, var7);
 244:
                var1 = new Array(2);
                var1[0] = var4;
                var1[1] = var3;
                return var1;
 258:
                var1 = new Array(2);
                var1[0] = var2;
                var1[1] = var2;
                return var1;
 272:
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
 0:
                var2 = this;
                var3 = var2._members;
                var1 = null;
                var3 = var1 == var3;
                if(var3) { _fun0016_ip = 27; continue _fun0016 }
 18:
                var1 = var2._initialized;
                var3 = !var1;
 27:
                var1 = !var3;
                if(var3) { _fun0016_ip = 58; continue _fun0016 }
 33:
                var2 = var2._members;
                var4 = var2._membersMap;
                var3 = var4.has;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
 58:
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
 0:
                var3 = arg1;
                var1 = this;
                var4 = var1._members;
                var2 = null;
                if(!(var2 != var4)) { _fun0017_ip = 208; continue _fun0017 }
 21:
                var4 = var1._search;
                if(!(var2 != var4)) { _fun0017_ip = 208; continue _fun0017 }
 34:
                var4 = var1._pagination;
                if(!(var2 != var4)) { _fun0017_ip = 208; continue _fun0017 }
 47:
                var4 = var1._initialized;
                if(!var4) { _fun0017_ip = 208; continue _fun0017 }
 59:
                var4 = var1._search;
                var4 = var4.hasDefaultQuery;
                if(var4) { _fun0017_ip = 187; continue _fun0017 }
 74:
                var5 = var1._members;
                var4 = var5.getMemberByUserId;
                var5 = var4.bind(var5)(var3);
                if(!(var2 != var5)) { _fun0017_ip = 108; continue _fun0017 }
 95:
                var4 = var5.isIncludedInSearchResults;
                if(!var4) { _fun0017_ip = 164; continue _fun0017 }
 104:
                var4 = true;
                return var4;
 108:
                var7 = _closure1_slot5;
                var6 = var7.getTrueMember;
                var4 = var1.guildId;
                var7 = var6.bind(var7)(var4, var3);
                if(!(var2 != var7)) { _fun0017_ip = 183; continue _fun0017 }
 136:
                var6 = var1._members;
                var4 = var6.enhanceNewMember;
                var2 = var1.getSearchState;
                var2 = var2.bind(var1)();
                var5 = var4.bind(var6)(var7, var2);
 164:
                var4 = var1._search;
                var2 = var4.isMemberIncludedInSearchResults;
                var2 = var2.bind(var4)(var5);
                return var2;
 183:
                var2 = false;
                return var2;
 187:
                var2 = var1._pagination;
                var1 = var2.isMemberInAnyChunk;
                var1 = var1.bind(var2)(var3);
                return var1;
 208:
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
 0:
                var3 = this;
                var2 = var3._members;
                var1 = null;
                if(!(var1 != var2)) { _fun0018_ip = 88; continue _fun0018 }
 15:
                var1 = var3._initialized;
                if(!var1) { _fun0018_ip = 88; continue _fun0018 }
 24:
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
                if(!var2) { _fun0018_ip = 86; continue _fun0018 }
 76:
                var2 = var3.updatePaginationChunks;
                var1 = var2.bind(var3)();
 86:
                return var1;
 88:
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
 0:
                var23 = arguments[1];
                var22 = arguments[2];
                var3 = this;
                var21 = undefined;
                if(!(var23 === var21)) { _fun0019_ip = 17; continue _fun0019 }
 15:
                var23 = false;
 17:
                if(!(var22 === var21)) { _fun0019_ip = 23; continue _fun0019 }
 21:
                var22 = false;
 23:
                var1 = var3._members;
                var20 = null;
                if(!(var20 != var1)) { _fun0019_ip = 363; continue _fun0019 }
 38:
                var1 = var3._initialized;
                if(!var1) { _fun0019_ip = 363; continue _fun0019 }
 50:
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
                if(var4) { _fun0019_ip = 348; continue _fun0019 }
 122:
                var4 = var9.value;
                var26 = var4.joinedAt;
                var25 = var8;
                var24 = var7;
                if(!(var20 != var26)) { _fun0019_ip = 318; continue _fun0019 }
 146:
                var28 = var4;
                if(!var23) { _fun0019_ip = 172; continue _fun0019 }
 152:
                var26 = {};
                var32 = var26;
                var31 = var4;
                var27 = copyDataProperties(var32, var31);
                var26[var10] = var11;
                var28 = var26;
 172:
                var26 = var28;
                if(!var22) { _fun0019_ip = 259; continue _fun0019 }
 178:
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
 259:
                var27 = var3._rawUpdateMember;
                var4 = var4.userId;
                var27 = var27.bind(var3)(var4, var26);
                var4 = _closure1_slot2;
                var4 = var4.bind(var21)(var27, var16);
                var28 = var4[var15];
                if(var28) { _fun0019_ip = 296; continue _fun0019 }
 293:
                var28 = var8;
 296:
                var27 = var4[var17];
                if(var27) { _fun0019_ip = 306; continue _fun0019 }
 303:
                var27 = var7;
 306:
                var24 = var27;
                var25 = var28;
                var6 = var26;
                var5 = var4;
 318:
                var26 = var18.bind(var21)();
                var4 = var26.done;
                var8 = var25;
                var7 = var24;
                var9 = var26;
                var2 = var8;
                var1 = var7;
                if(!var4) { _fun0019_ip = 122; continue _fun0019 }
 348:
                if(!var2) { _fun0019_ip = 361; continue _fun0019 }
 351:
                var2 = var3.updatePaginationChunks;
                var1 = var2.bind(var3)();
 361:
                return var1;
 363:
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
 0:
                var3 = this;
                var1 = var3._members;
                var15 = null;
                if(!(var15 != var1)) { _fun0020_ip = 235; continue _fun0020 }
 18:
                var1 = var3._initialized;
                if(!var1) { _fun0020_ip = 235; continue _fun0020 }
 30:
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
                if(var4) { _fun0020_ip = 220; continue _fun0020 }
 83:
                var4 = var8.value;
                var19 = _closure1_slot5;
                var18 = var19.getTrueMember;
                var17 = var3.guildId;
                var16 = var4.user;
                var16 = var16.id;
                var19 = var18.bind(var19)(var17, var16);
                var17 = var7;
                var16 = var6;
                if(!(var15 != var19)) { _fun0020_ip = 190; continue _fun0020 }
 129:
                var18 = var3._rawUpdateMember;
                var4 = var4.user;
                var4 = var4.id;
                var18 = var18.bind(var3)(var4, var19);
                var4 = _closure1_slot2;
                var4 = var4.bind(var13)(var18, var10);
                var19 = var4[var9];
                if(var19) { _fun0020_ip = 171; continue _fun0020 }
 168:
                var19 = var7;
 171:
                var18 = var4[var11];
                if(var18) { _fun0020_ip = 181; continue _fun0020 }
 178:
                var18 = var6;
 181:
                var16 = var18;
                var17 = var19;
                var5 = var4;
 190:
                var18 = var12.bind(var13)();
                var4 = var18.done;
                var7 = var17;
                var6 = var16;
                var8 = var18;
                var2 = var7;
                var1 = var6;
                if(!var4) { _fun0020_ip = 83; continue _fun0020 }
 220:
                if(!var2) { _fun0020_ip = 233; continue _fun0020 }
 223:
                var2 = var3.updatePaginationChunks;
                var1 = var2.bind(var3)();
 233:
                return var1;
 235:
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
 0:
                var5 = arg1;
                var3 = this;
                var _closure3_slot0 = var3;
                var4 = var3._members;
                var2 = null;
                if(!(var2 != var4)) { _fun0021_ip = 67; continue _fun0021 }
 24:
                var2 = var3._initialized;
                if(!var2) { _fun0021_ip = 67; continue _fun0021 }
 33:
                var4 = var5.reduce;
                var2 = function(arg1, arg2) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                        var1 = arg1;
                        var5 = _closure1_slot5;
                        var4 = var5.getTrueMember;
                        var2 = _closure3_slot0;
                        var3 = var2.guildId;
                        var2 = arg2;
                        var3 = var4.bind(var5)(var3, var2);
                        var2 = null;
                        if(!(var2 != var3)) { _fun0022_ip = 53; continue _fun0022 }
 43:
                        var2 = var1.push;
                        var2 = var2.bind(var1)(var3);
 53:
                        return var1;
                    }
                };
                var1 = new Array(0);
                var2 = var4.bind(var5)(var2, var1);
                var1 = var3.updateClientMembers;
                var1 = var1.bind(var3)(var2);
                return var1;
 67:
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
 0:
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
                        if(var6) { _fun0023_ip = 79; continue _fun0023 }
 68:
                        var6 = var8.isMemberIncludedInSearchResults;
                        var4 = var6.bind(var8)(var5);
 79:
                        var6 = var2 != var4;
                        if(!var6) { _fun0023_ip = 89; continue _fun0023 }
 86:
                        var6 = var4;
 89:
                        var3 = _closure3_slot0;
                        var4 = var3._members;
                        if(!(var2 != var4)) { _fun0023_ip = 127; continue _fun0023 }
 103:
                        var3 = var4.updateMember;
                        var2 = {};
                        var2['sort'] = var7;
                        var2['isIncludedInSearchResults'] = var6;
                        var2 = var3.bind(var4)(var5, var2);
 127:
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
 0:
                var4 = arg1;
                var3 = this;
                var _closure3_slot0 = var3;
                var2 = var3._search;
                var5 = null;
                var2 = var5 != var2;
                if(!var2) { _fun0024_ip = 37; continue _fun0024 }
 27:
                var6 = var3._members;
                var2 = var5 != var6;
 37:
                if(!var2) { _fun0024_ip = 46; continue _fun0024 }
 40:
                var2 = var3._initialized;
 46:
                if(!var2) { _fun0024_ip = 53; continue _fun0024 }
 49:
                var2 = var5 != var4;
 53:
                if(!var2) { _fun0024_ip = 105; continue _fun0024 }
 56:
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
 105:
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
 0:
                var4 = arg1;
                var5 = this;
                var _closure3_slot0 = var5;
                var2 = var5._search;
                var3 = null;
                if(!(var3 != var2)) { _fun0025_ip = 105; continue _fun0025 }
 24:
                var2 = var5._members;
                if(!(var3 != var2)) { _fun0025_ip = 105; continue _fun0025 }
 34:
                var2 = var5._initialized;
                if(!var2) { _fun0025_ip = 105; continue _fun0025 }
 43:
                var3 = var4.reduce;
                var2 = function(arg1, arg2) {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                        var1 = arg1;
                        var5 = _closure1_slot5;
                        var4 = var5.getTrueMember;
                        var2 = _closure3_slot0;
                        var3 = var2.guildId;
                        var2 = arg2;
                        var3 = var4.bind(var5)(var3, var2);
                        var2 = null;
                        if(!(var2 != var3)) { _fun0026_ip = 53; continue _fun0026 }
 43:
                        var2 = var1.push;
                        var2 = var2.bind(var1)(var3);
 53:
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
 105:
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
 0:
                var3 = this;
                var2 = var3._members;
                var1 = null;
                if(!(var1 != var2)) { _fun0027_ip = 60; continue _fun0027 }
 15:
                var1 = var3._initialized;
                if(!var1) { _fun0027_ip = 60; continue _fun0027 }
 24:
                var4 = _closure1_slot5;
                var2 = var4.getMembers;
                var1 = var3.guildId;
                var2 = var2.bind(var4)(var1);
                var1 = var3.updateClientMembers;
                var1 = var1.bind(var3)(var2);
                return var1;
 60:
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
 0:
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
                if(!(var4 != var5)) { _fun0028_ip = 72; continue _fun0028 }
 53:
                var6 = var1.clearTimeout;
                var5 = var3._lastRefreshTimer;
                var4 = undefined;
                var4 = var6.bind(var4)(var5);
 72:
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
 0:
                var3 = this;
                var1 = var3._search;
                var2 = null;
                if(!(var2 != var1)) { _fun0029_ip = 376; continue _fun0029 }
 18:
                var1 = var3._members;
                if(!(var2 != var1)) { _fun0029_ip = 376; continue _fun0029 }
 31:
                var1 = var3._initialized;
                if(!var1) { _fun0029_ip = 376; continue _fun0029 }
 43:
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
                if(var6) { _fun0029_ip = 280; continue _fun0029 }
 192:
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
                if(var12) { _fun0029_ip = 259; continue _fun0029 }
 256:
                var12 = var7;
 259:
                var13 = var10.bind(var9)();
                var6 = var13.done;
                var7 = var12;
                var8 = var13;
                var2 = var7;
                if(!var6) { _fun0029_ip = 192; continue _fun0029 }
 280:
                var7 = var3._members;
                var6 = var7.resetNewMemberTimestamp;
                var6 = var6.bind(var7)();
                var6 = var3.resetSearchState;
                var6 = var6.bind(var3)();
                if(!var6) { _fun0029_ip = 311; continue _fun0029 }
 309:
                var2 = false;
 311:
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
                if(!var5) { _fun0029_ip = 361; continue _fun0029 }
 359:
                var2 = false;
 361:
                if(!var2) { _fun0029_ip = 374; continue _fun0029 }
 364:
                var2 = var3.updatePaginationChunks;
                var2 = var2.bind(var3)();
 374:
                return var1;
 376:
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
 0:
                var2 = this;
                var3 = var2._members;
                var1 = null;
                var3 = var1 != var3;
                var1 = 0;
                if(!var3) { _fun0030_ip = 43; continue _fun0030 }
 20:
                var3 = var2._initialized;
                var1 = 0;
                if(!var3) { _fun0030_ip = 43; continue _fun0030 }
 31:
                var2 = var2._members;
                var1 = var2.newMemberTimestamp;
 43:
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
 0:
                var4 = arg1;
                var2 = this;
                var1 = var2._members;
                var3 = null;
                if(!(var3 != var1)) { _fun0031_ip = 468; continue _fun0031 }
 21:
                var1 = var2._search;
                if(!(var3 != var1)) { _fun0031_ip = 468; continue _fun0031 }
 34:
                var1 = var2._initialized;
                if(!var1) { _fun0031_ip = 468; continue _fun0031 }
 46:
                var1 = global;
                var5 = var1.Boolean;
                var1 = var2._search;
                var1 = var1.hasDefaultQuery;
                var11 = undefined;
                var6 = var5.bind(var11)(var1);
                var1 = var4.selectedSort;
                var1 = var3 != var1;
                if(!var1) { _fun0031_ip = 118; continue _fun0031 }
 86:
                var5 = var4.selectedSort;
                var7 = var2._search;
                var3 = var7.getSearchState;
                var3 = var3.bind(var7)();
                var3 = var3.selectedSort;
                var1 = var5 !== var3;
 118:
                if(!var1) { _fun0031_ip = 140; continue _fun0031 }
 121:
                var3 = var2.sortMembersBySelectedSort;
                var1 = var4.selectedSort;
                var1 = var3.bind(var2)(var1);
 140:
                var3 = var2._search;
                var1 = var3.updateSearchState;
                var1 = var1.bind(var3)(var4);
                var3 = var2._search;
                var3 = var3.hasDefaultQuery;
                if(!var3) { _fun0031_ip = 178; continue _fun0031 }
 172:
                if(var6) { _fun0031_ip = 456; continue _fun0031 }
 178:
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
                if(var5) { _fun0031_ip = 418; continue _fun0031 }
 303:
                var17 = var8.value;
                var5 = var17.isCurrentGuildMemberByTimestamp;
                var13 = var9;
                var12 = var7;
                if(!var5) { _fun0031_ip = 391; continue _fun0031 }
 323:
                var14 = var2._search;
                var5 = var14.isMemberIncludedInSearchResults;
                var5 = var5.bind(var14)(var17);
                var14 = var17.isIncludedInSearchResults;
                var13 = var9;
                var12 = var7;
                var6 = var5;
                if(!(var5 !== var14)) { _fun0031_ip = 391; continue _fun0031 }
 359:
                var16 = var2._members;
                var15 = var16.updateMember;
                var14 = {};
                var14['isIncludedInSearchResults'] = var5;
                var14 = var15.bind(var16)(var17, var14);
                var13 = true;
                var12 = true;
                var6 = var5;
 391:
                var14 = var10.bind(var11)();
                var5 = var14.done;
                var9 = var13;
                var7 = var12;
                var8 = var14;
                var1 = var9;
                var4 = var7;
                if(!var5) { _fun0031_ip = 303; continue _fun0031 }
 418:
                if(!var4) { _fun0031_ip = 454; continue _fun0031 }
 421:
                var4 = var2.updatePaginationChunks;
                var4 = var4.bind(var2)();
                var5 = var2.updatePaginationState;
                var4 = {};
                var6 = 1;
                var4['currentPage'] = var6;
                var4 = var5.bind(var2)(var4);
                var1 = true;
 454:
                return var1;
 456:
                var1 = var2.updatePaginationChunks;
                var1 = var1.bind(var2)();
                return var1;
 468:
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
 0:
                var2 = this;
                var3 = var2._search;
                var1 = null;
                if(!(var1 != var3)) { _fun0032_ip = 24; continue _fun0032 }
 15:
                var1 = var2._initialized;
                if(var1) { _fun0032_ip = 61; continue _fun0032 }
 24:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.getDefaultSearchState;
                var1 = var1.bind(var3)();
                _fun0032_ip = 77; continue _fun0032;
 61:
                var3 = var2._search;
                var2 = var3.getSearchState;
                var1 = var2.bind(var3)();
 77:
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
 0:
                var2 = this;
                var3 = var2._search;
                var1 = null;
                var1 = var1 == var3;
                if(var1) { _fun0033_ip = 27; continue _fun0033 }
 18:
                var3 = var2._initialized;
                var1 = !var3;
 27:
                if(var1) { _fun0033_ip = 42; continue _fun0033 }
 30:
                var2 = var2._search;
                var1 = var2.hasDefaultQuery;
 42:
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
 0:
                var4 = this;
                var2 = var4._search;
                var1 = null;
                var2 = var1 == var2;
                if(var2) { _fun0034_ip = 27; continue _fun0034 }
 18:
                var1 = var4._initialized;
                var2 = !var1;
 27:
                var1 = !var2;
                if(var2) { _fun0034_ip = 71; continue _fun0034 }
 33:
                var3 = var4._search;
                var2 = var3.resetSearchState;
                var2 = var2.bind(var3)();
                var3 = !var2;
                var2 = !var3;
                if(var3) { _fun0034_ip = 68; continue _fun0034 }
 58:
                var3 = var4.updatePaginationChunks;
                var2 = var3.bind(var4)();
 68:
                var1 = var2;
 71:
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
 0:
                var3 = this;
                var1 = var3._search;
                var4 = null;
                var2 = var4 != var1;
                var1 = 0;
                if(!var2) { _fun0035_ip = 104; continue _fun0035 }
 20:
                var2 = var3._pagination;
                var2 = var4 != var2;
                var1 = 0;
                if(!var2) { _fun0035_ip = 104; continue _fun0035 }
 35:
                var2 = var3._initialized;
                var1 = 0;
                if(!var2) { _fun0035_ip = 104; continue _fun0035 }
 46:
                var2 = var3._search;
                var2 = var2.hasDefaultQuery;
                if(!var2) { _fun0035_ip = 71; continue _fun0035 }
 61:
                var2 = var3._defaultSearchTotalResultsCount;
                if(!(var4 == var2)) { _fun0035_ip = 95; continue _fun0035 }
 71:
                var4 = var3._pagination;
                var2 = var4.getPaginationState;
                var2 = var2.bind(var4)();
                var2 = var2.totalResultsCount;
                _fun0035_ip = 101; continue _fun0035;
 95:
                var2 = var3._defaultSearchTotalResultsCount;
 101:
                var1 = var2;
 104:
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
 0:
                var4 = arg1;
                var3 = arguments[1];
                var2 = this;
                var1 = undefined;
                if(!(var3 === var1)) { _fun0036_ip = 17; continue _fun0036 }
 15:
                var3 = true;
 17:
                var1 = var2._search;
                var6 = null;
                if(!(var6 != var1)) { _fun0036_ip = 48; continue _fun0036 }
 29:
                var1 = var2._pagination;
                if(!(var6 != var1)) { _fun0036_ip = 48; continue _fun0036 }
 39:
                var1 = var2._initialized;
                if(var1) { _fun0036_ip = 64; continue _fun0036 }
 48:
                var1 = new Array(2);
                var5 = false;
                var1[0] = var5;
                var1[1] = var5;
                _fun0036_ip = 132; continue _fun0036;
 64:
                if(!var3) { _fun0036_ip = 75; continue _fun0036 }
 67:
                var3 = 0;
                var2['lastRefreshTimestamp'] = var3;
 75:
                var3 = var2._search;
                var3 = var3.hasDefaultQuery;
                if(!var3) { _fun0036_ip = 100; continue _fun0036 }
 90:
                var5 = var4.totalResultsCount;
                var3 = var6 != var5;
 100:
                if(!var3) { _fun0036_ip = 115; continue _fun0036 }
 103:
                var3 = var4.totalResultsCount;
                var2['_defaultSearchTotalResultsCount'] = var3;
 115:
                var3 = var2._pagination;
                var2 = var3.updatePaginationState;
                var1 = var2.bind(var3)(var4);
 132:
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
 0:
                var1 = this;
                var2 = var1._pagination;
                var1 = null;
                if(!(var1 != var2)) { _fun0037_ip = 25; continue _fun0037 }
 15:
                var1 = var2.reset;
                var1 = var1.bind(var2)();
 25:
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
 0:
                var2 = this;
                var3 = var2._pagination;
                var1 = null;
                if(!(var1 != var3)) { _fun0038_ip = 24; continue _fun0038 }
 15:
                var1 = var2._initialized;
                if(var1) { _fun0038_ip = 61; continue _fun0038 }
 24:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 8;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.createDefaultMemberSafetyPaginationState;
                var1 = var1.bind(var3)();
                _fun0038_ip = 77; continue _fun0038;
 61:
                var3 = var2._pagination;
                var2 = var3.getPaginationState;
                var1 = var2.bind(var3)();
 77:
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
 0:
                var3 = this;
                var2 = var3._pagination;
                var1 = null;
                if(!(var1 != var2)) { _fun0039_ip = 24; continue _fun0039 }
 15:
                var1 = var3._initialized;
                if(var1) { _fun0039_ip = 42; continue _fun0039 }
 24:
                var1 = new Array(2);
                var2 = {};
                var1[0] = var2;
                var2 = 0;
                var1[1] = var2;
                _fun0039_ip = 83; continue _fun0039;
 42:
                var2 = var3._pagination;
                var4 = var2.paginatedMembers;
                var2 = new Array(2);
                var2[0] = var4;
                var3 = var3._pagination;
                var3 = var3.version;
                var2[1] = var3;
                var1 = var2;
 83:
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
 0:
                var2 = this;
                var3 = var2._pagination;
                var1 = null;
                var3 = var1 == var3;
                if(var3) { _fun0040_ip = 27; continue _fun0040 }
 18:
                var1 = var2._initialized;
                var3 = !var1;
 27:
                var1 = !var3;
                if(var3) { _fun0040_ip = 53; continue _fun0040 }
 33:
                var4 = var2._pagination;
                var3 = var4.updatePaginationToken;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
 53:
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
 0:
                var2 = this;
                var1 = var2._pagination;
                var4 = null;
                var3 = var4 != var1;
                var1 = null;
                if(!var3) { _fun0041_ip = 47; continue _fun0041 }
 20:
                var3 = var2._initialized;
                var1 = null;
                if(!var3) { _fun0041_ip = 47; continue _fun0041 }
 31:
                var3 = var2._pagination;
                var2 = var3.getElasticSearchPagination;
                var1 = var2.bind(var3)();
 47:
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