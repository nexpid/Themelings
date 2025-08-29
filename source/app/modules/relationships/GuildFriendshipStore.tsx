// app/modules/relationships/GuildFriendshipStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function getFetchState(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot8;
            var1 = arg1;
            var4 = var3[var1];
            var3 = null;
            var5 = var3 == var4;
            var1 = undefined;
            if(var5) { _fun0002_ip = 31; continue _fun0002 }
 25:
            var1 = var4.fetchState;
 31:
            if(!(var3 == var1)) { _fun0002_ip = 45; continue _fun0002 }
 35:
            var2 = _closure1_slot7;
            var1 = var2.NOT_FETCHED;
 45:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var8 = function resetStates() {
        var1 = {};
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var2 = 0;
    var7 = var5[var2];
    var1 = undefined;
    var7 = var6.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var11 = 1;
    var7 = var5[var11];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var10 = 2;
    var7 = var5[var10];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = {};
    var7['NOT_FETCHED'] = var2;
    var9 = 'NOT_FETCHED';
    var7[var2] = var9;
    var7['FETCHING'] = var11;
    var9 = 'FETCHING';
    var7[var11] = var9;
    var7['FETCHED'] = var10;
    var9 = 'FETCHED';
    var7[var10] = var9;
    var _closure1_slot7 = var7;
    var7 = {};
    var _closure1_slot8 = var7;
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildFriendshipStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 69; continue _fun0003 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 105; continue _fun0003;
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
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'isFetchingFriendsForGuild';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var4 = _closure1_slot11;
            var3 = undefined;
            var2 = arg1;
            var2 = var4.bind(var3)(var2);
            var1 = _closure1_slot7;
            var1 = var1.FETCHING;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'fetchFriendMembersIfNotFetched';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var6 = arg1;
                var5 = arg2;
                var3 = _closure1_slot11;
                var1 = undefined;
                var4 = var3.bind(var1)(var6);
                var3 = _closure1_slot7;
                var3 = var3.NOT_FETCHED;
                if(!(var4 === var3)) { _fun0004_ip = 112; continue _fun0004 }
 34:
                var4 = _closure1_slot8;
                var3 = {'fetchState': null, 'foundMembers': 0, 'notFoundMembers': 0};
                var7 = _closure1_slot7;
                var7 = var7.FETCHING;
                var3['fetchState'] = var7;
                var4[var6] = var3;
                var3 = var5.length;
                _closure1_slot9 = var3;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 5;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.requestMembersById;
                var2 = false;
                var2 = var3.bind(var4)(var6, var5, var2);
 112:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 7;
    var2 = var5[var2];
    var14 = var6.bind(var1)(var2);
    var2 = {};
    var2['CONNECTION_OPEN'] = var8;
    var2['LOGOUT'] = var8;
    var2['RELATIONSHIP_ADD'] = var8;
    var2['RELATIONSHIP_REMOVE'] = var8;
    var4 = function onMemberChunk(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var1 = var1.chunks;
            var6 = 0;
            var7 = var1[var6];
            var4 = var7.guildId;
            var3 = _closure1_slot11;
            var1 = undefined;
            var5 = var3.bind(var1)(var4);
            var3 = _closure1_slot7;
            var3 = var3.FETCHING;
            if(!(var5 === var3)) { _fun0005_ip = 208; continue _fun0005 }
 51:
            var3 = _closure1_slot8;
            var5 = var3[var4];
            var8 = var5.foundMembers;
            var3 = var7.members;
            var3 = var3.length;
            var3 = var8 + var3;
            var5['foundMembers'] = var3;
            var3 = _closure1_slot8;
            var5 = var3[var4];
            var3 = var5.notFoundMembers;
            var9 = var7.notFound;
            var8 = null;
            var10 = var8 == var9;
            var7 = undefined;
            if(var10) { _fun0005_ip = 122; continue _fun0005 }
 117:
            var7 = var9.length;
 122:
            var8 = var8 != var7;
            var6 = 0;
            if(!var8) { _fun0005_ip = 134; continue _fun0005 }
 131:
            var6 = var7;
 134:
            var3 = var3 + var6;
            var5['notFoundMembers'] = var3;
            var3 = _closure1_slot8;
            var3 = var3[var4];
            var5 = var3.foundMembers;
            var3 = _closure1_slot8;
            var3 = var3[var4];
            var3 = var3.notFoundMembers;
            var5 = var5 + var3;
            var3 = _closure1_slot9;
            if(!(var5 >= var3)) { _fun0005_ip = 208; continue _fun0005 }
 184:
            var3 = _closure1_slot8;
            var3 = var3[var4];
            var2 = _closure1_slot7;
            var2 = var2.FETCHED;
            var3['fetchState'] = var2;
 208:
            return var1;
        }
    };
    var2['GUILD_MEMBERS_CHUNK_BATCH'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var7](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/relationships/GuildFriendshipStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();