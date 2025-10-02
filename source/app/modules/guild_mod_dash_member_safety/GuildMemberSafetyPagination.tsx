// app/modules/guild_mod_dash_member_safety/GuildMemberSafetyPagination.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var8;
    var5 = function createDefaultMemberSafetyPaginationState() {
        var1 = {'pageSize': null, 'currentPage': 1, 'continuationToken': null, 'sort': null, 'elasticSearchCursor': null};
        var4 = _closure1_slot6;
        var3 = 0;
        var3 = var4[var3];
        var1['pageSize'] = var3;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var2 = var2.OrderBy;
        var2 = var2.ORDER_BY_UNSPECIFIED;
        var1['sort'] = var2;
        return var1;
    };
    var _closure1_slot8 = var5;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var8[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var10 = 1;
    var2 = var8[var10];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var8[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var7 = [12, 25, 50, 100];
    var _closure1_slot6 = var7;
    var2 = {};
    var2['FORWARD'] = var10;
    var6 = 'FORWARD';
    var2[var10] = var6;
    var10 = -1;
    var2['BACKWARD'] = var10;
    var6 = 'BACKWARD';
    var2[var10] = var6;
    var _closure1_slot7 = var2;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function GuildMemberSafetyPagination(arg1, arg2) {
            var3 = this;
            var _closure3_slot0 = var3;
            var6 = _closure1_slot3;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var4 = function(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var1 = arg1;
                    var2 = global;
                    var4 = var2.Math;
                    var3 = var4.floor;
                    var2 = _closure3_slot0;
                    var2 = var2._paginationState;
                    var5 = var2.pageSize;
                    var2 = arg3;
                    var2 = var2 / var5;
                    var3 = var3.bind(var4)(var2);
                    var2 = 1;
                    var2 = var3 + var2;
                    var4 = var1[var2];
                    var3 = null;
                    if(!(var3 == var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = new Array(0);
                    var1[var2] = var3;
case 2:
                    var4 = var1[var2];
                    var3 = var4.push;
                    var2 = arg2;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3['_reduceMemberIdsToPaginationChunks'] = var4;
            var4 = arg1;
            var3['guildId'] = var4;
            var4 = _closure1_slot8;
            var4 = var4.bind(var1)();
            var3['_paginationState'] = var4;
            var4 = 0;
            var3['_version'] = var4;
            var6 = var3._initPaginationFromRawMembers;
            var5 = arg2;
            var6 = var6.bind(var3)(var5);
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5.bind(var1)(var6, var2);
            var5 = var2[var4];
            var4 = 1;
            var2 = var2[var4];
            var3['_sortedMemberIds'] = var5;
            var3['_cachedPaginationChunks'] = var2;
            var2 = var3._version;
            var2 = var2 + var4;
            var3['_version'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'reset';
        var1['key'] = var2;
        var2 = function value() {
            var3 = this;
            var2 = _closure1_slot8;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var3['_paginationState'] = var2;
            var2 = new Array(0);
            var3['_sortedMemberIds'] = var2;
            var2 = {};
            var3['_cachedPaginationChunks'] = var2;
            var4 = var3._version;
            var2 = 1;
            var2 = var4 + var2;
            var3['_version'] = var2;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(16);
        var2[0] = var1;
        var1 = {};
        var6 = 'isMemberOnCurrentPage';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = this;
                var2 = var1._cachedPaginationChunks;
                var1 = var1._paginationState;
                var1 = var1.currentPage;
                var3 = var2[var1];
                var1 = null;
                if(!(var1 == var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var3 = new Array(0);
case 4:
                var2 = var3.includes;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'isMemberInAnyChunk';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1._sortedMemberIds;
            var2 = var3.includes;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = '_initPaginationFromRawMembers';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var5 = arg1;
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = new Array(0);
            var _closure3_slot1 = var3;
            var4 = var5.reduce;
            var2 = function(arg1, arg2, arg3) {
                var2 = arg2;
                var7 = _closure3_slot0;
                var6 = var7._reduceMemberIdsToPaginationChunks;
                var5 = var2.userId;
                var4 = arg1;
                var1 = arg3;
                var1 = var6.bind(var7)(var4, var5, var1);
                var4 = _closure3_slot1;
                var3 = var4.push;
                var2 = var2.userId;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = {};
            var2 = var4.bind(var5)(var2, var1);
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = '_buildPaginationFromMemberIds';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var4 = arg1;
            var3 = var4.reduce;
            var1 = this;
            var2 = var1._reduceMemberIdsToPaginationChunks;
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = '_rebuildPaginationChunksFromStoredMembers';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var3 = var2._buildPaginationFromMemberIds;
            var1 = var2._sortedMemberIds;
            var1 = var3.bind(var2)(var1);
            var2['_cachedPaginationChunks'] = var1;
            var3 = var2._version;
            var1 = 1;
            var1 = var3 + var1;
            var2['_version'] = var1;
            var1 = true;
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'getPaginationState';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1._paginationState;
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'updatePaginationToken';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = arg1;
                var3 = this;
                var1 = var3._paginationState;
                var1 = var1.continuationToken;
                var1 = var5 !== var1;
                if(!var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var2 = {};
                var6 = var3._paginationState;
                var7 = var2;
                var4 = copyDataProperties(var7, var6);
                var4 = 'continuationToken';
                var2[var4] = var5;
                var3['_paginationState'] = var2;
                var1 = true;
case 6:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = '_calculateNewPageFromPageSizeChange';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var7 = arg1;
                var2 = arg2;
                var3 = this;
                var1 = var3._paginationState;
                var6 = var1.currentPage;
                var1 = var1.pageSize;
                var4 = var7 * var1;
                var3 = var3._sortedMemberIds;
                var3 = var3.length;
                if(!(!(var4 <= var3))) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                var3 = 1;
                return var3;
case 8:
                var3 = null;
                if(!(var3 != var2)) { _fun0004_ip = 10; continue _fun0004 }
case 6:
                var6 = var2;
case 10:
                var2 = global;
                var4 = var2.Math;
                var3 = var4.max;
                var5 = var2.Math;
                var2 = var5.ceil;
                var1 = var1 / var7;
                var1 = var1 * var6;
                var2 = var2.bind(var5)(var1);
                var1 = 1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'updatePaginationState';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var3 = this;
                var2 = var4.pageSize;
                var1 = null;
                var5 = var1 != var2;
                if(!var5) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                var6 = var4.pageSize;
                var2 = var3._paginationState;
                var2 = var2.pageSize;
                var5 = var6 !== var2;
case 11:
                var2 = false;
                if(!var5) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                var6 = var3._calculateNewPageFromPageSizeChange;
                var5 = var4.pageSize;
                if(!(var1 == var5)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                var1 = var3._paginationState;
                var5 = var1.pageSize;
case 15:
                var1 = var4.currentPage;
                var1 = var6.bind(var3)(var5, var1);
                var4['currentPage'] = var1;
                var2 = true;
case 13:
                var1 = {};
                var7 = var3._paginationState;
                var8 = var1;
                var5 = copyDataProperties(var8, var7);
                var8 = var1;
                var7 = var4;
                var4 = copyDataProperties(var8, var7);
                var3['_paginationState'] = var1;
                if(!var2) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var1 = var3._rebuildPaginationChunksFromStoredMembers;
                var1 = var1.bind(var3)();
case 17:
                var1 = new Array(2);
                var3 = true;
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'updateSortedMembers';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = this;
            var3 = var2._initPaginationFromRawMembers;
            var1 = arg1;
            var5 = var3.bind(var2)(var1);
            var4 = _closure1_slot2;
            var3 = undefined;
            var1 = 2;
            var1 = var4.bind(var3)(var5, var1);
            var3 = 0;
            var4 = var1[var3];
            var3 = 1;
            var1 = var1[var3];
            var2['_sortedMemberIds'] = var4;
            var2['_cachedPaginationChunks'] = var1;
            var1 = var2._version;
            var1 = var1 + var3;
            var2['_version'] = var1;
            var1 = true;
            return var1;
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'updateSortedMembersByUserIds';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = this;
            var1 = arg1;
            var2['_sortedMemberIds'] = var1;
            var1 = var2._rebuildPaginationChunksFromStoredMembers;
            var1 = var1.bind(var2)();
            var1 = true;
            return var1;
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = '_findMember';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var9 = arg1;
                var8 = arguments[1];
                var7 = this;
                var6 = undefined;
                if(!(var8 === var6)) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                var1 = _closure1_slot7;
                var8 = var1.BACKWARD;
case 19:
                var1 = var7._sortedMemberIds;
                var2 = var1.length;
                var1 = var9;
                if(!(var9 < var2)) { _fun0006_ip = 21; continue _fun0006 }
case 9:
                var2 = var7._sortedMemberIds;
                var3 = var2.length;
                var2 = 1;
                var1 = var3 - var2;
case 21:
                var5 = 0;
                var1 = var1 < var5;
                var1 = var7._sortedMemberIds;
                var10 = var1[var9];
                var3 = _closure1_slot5;
                var2 = var3.getMember;
                var1 = var7.guildId;
                var2 = var2.bind(var3)(var1, var10);
                var3 = null;
                var1 = var2;
                if(!(var3 == var1)) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                var9 = var9 + var8;
                var1 = var2;
                if(!(!(var9 < var5))) { _fun0006_ip = 22; continue _fun0006 }
case 24:
                var10 = var7._sortedMemberIds;
                var10 = var10.length;
                var1 = var2;
                if(!(!(var9 >= var10))) { _fun0006_ip = 22; continue _fun0006 }
case 17:
                var10 = var7._sortedMemberIds;
                var13 = var10[var9];
                var12 = _closure1_slot5;
                var11 = var12.getMember;
                var10 = var7.guildId;
                var10 = var11.bind(var12)(var10, var13);
                var12 = var3 == var10;
                var11 = undefined;
                if(var12) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                var11 = var10.joinedAt;
case 25:
                if(!(var3 == var11)) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                var10 = null;
case 27:
                var2 = var10;
                var1 = var2;
                if(var3 == var1) { _fun0006_ip = 23; continue _fun0006 }
case 22:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'getElasticSearchPagination';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = var2.getPaginationState;
            var1 = var1.bind(var2)();
            var1 = var1.elasticSearchCursor;
            return var1;
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'paginatedMembers';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._cachedPaginationChunks;
            return var1;
        };
        var1['get'] = var6;
        var2[14] = var1;
        var1 = {};
        var6 = 'version';
        var1['key'] = var6;
        var5 = function get() {
            var1 = this;
            var1 = var1._version;
            return var1;
        };
        var1['get'] = var5;
        var2[15] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var6 = 5;
    var8 = var8[var6];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/guild_mod_dash_member_safety/GuildMemberSafetyPagination.tsx';
    var8 = var9.bind(var10)(var8);
    var3['PAGINATION_PAGE_SIZE_OPTIONS'] = var7;
    var7 = 7;
    var3['MAX_VISIBLE_PAGES'] = var7;
    var3['MAX_FORWARD_PAGE_SKIP'] = var6;
    var6 = 250;
    var3['DEFAULT_SEARCH_CHUNK_LIMIT'] = var6;
    var3['createDefaultMemberSafetyPaginationState'] = var5;
    var4 = function getSearchChunkLimit(arg1) {
        var1 = global;
        var4 = var1.Math;
        var3 = var4.max;
        var1 = arg1;
        var2 = var1.pageSize;
        var1 = 5;
        var2 = var1 * var2;
        var1 = 250;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getSearchChunkLimit'] = var4;
    var3['GuildMemberSafetyPagination'] = var2;
    return var1;
})();