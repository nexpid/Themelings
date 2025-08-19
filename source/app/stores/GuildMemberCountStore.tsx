// app/stores/GuildMemberCountStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var8 = function handleInviteData(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var1 = var1.invite;
            var2 = var1.guild;
            var4 = var1.approximate_presence_count;
            var3 = null;
            var6 = var3 == var2;
            var1 = undefined;
            var5 = undefined;
            if(var6) { _fun0002_ip = 38; continue _fun0002 }
 33:
            var5 = var2.id;
 38:
            if(!(var3 != var5)) { _fun0002_ip = 64; continue _fun0002 }
 42:
            if(!(var3 != var4)) { _fun0002_ip = 64; continue _fun0002 }
 46:
            var3 = _closure1_slot6;
            var2 = var2.id;
            var3[var2] = var4;
            return var1;
 64:
            var1 = false;
            return var1;
        }
    };
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = {};
    var _closure1_slot5 = var2;
    var2 = {};
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildMemberCountStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot7;
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
                var6 = _closure1_slot3;
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
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'getMemberCounts';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot5;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getMemberCount';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 != var3;
                if(!var2) { _fun0004_ip = 23; continue _fun0004 }
 12:
                var2 = _closure1_slot5;
                var1 = var2[var3];
 23:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getOnlineCount';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 != var3;
                if(!var2) { _fun0005_ip = 23; continue _fun0005 }
 12:
                var2 = _closure1_slot6;
                var1 = var2[var3];
 23:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'GuildMemberCountStore';
    var7['displayName'] = var2;
    var2 = 6;
    var2 = var5[var2];
    var12 = var6.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnectionOpen(arg1) {
        var1 = arg1;
        var3 = var1.guilds;
        var1 = {};
        _closure1_slot5 = var1;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = _closure1_slot5;
            var2 = var1.id;
            var1 = var1.member_count;
            var3[var2] = var1;
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleOverlayInitialize(arg1) {
        var2 = {};
        var1 = arg1;
        var3 = var1.guildMemberCounts;
        var4 = var2;
        var1 = copyDataProperties(var4, var3);
        _closure1_slot5 = var2;
        var1 = undefined;
        return var1;
    };
    var2['OVERLAY_INITIALIZE'] = var9;
    var9 = function handleGuildCreate(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var3 = _closure1_slot5;
        var2 = var1.id;
        var1 = var1.member_count;
        var3[var2] = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_CREATE'] = var9;
    var9 = function handleGuildDelete(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var1 = var1.guild;
            var4 = _closure1_slot5;
            var3 = var1.id;
            var3 = var4[var3];
            var4 = null;
            if(!(var4 == var3)) { _fun0006_ip = 47; continue _fun0006 }
 30:
            var5 = _closure1_slot6;
            var3 = var1.id;
            var3 = var5[var3];
            if(!(var4 != var3)) { _fun0006_ip = 77; continue _fun0006 }
 47:
            var4 = _closure1_slot5;
            var3 = var1.id;
            var3 = delete var4[var3];
            var2 = _closure1_slot6;
            var1 = var1.id;
            var1 = delete var2[var1];
            var1 = undefined;
            return var1;
 77:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_DELETE'] = var9;
    var9 = function handleGuildMemberListUpdate(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var6 = var1.memberCount;
            var3 = var1.onlineCount;
            var1 = _closure1_slot5;
            var5 = var1[var4];
            var1 = false;
            if(!(var5 !== var6)) { _fun0007_ip = 47; continue _fun0007 }
 37:
            var5 = _closure1_slot5;
            var5[var4] = var6;
            var1 = true;
 47:
            var5 = _closure1_slot6;
            var5 = var5[var4];
            if(!(var5 !== var3)) { _fun0007_ip = 69; continue _fun0007 }
 59:
            var2 = _closure1_slot6;
            var2[var4] = var3;
            var1 = true;
 69:
            return var1;
        }
    };
    var2['GUILD_MEMBER_LIST_UPDATE'] = var9;
    var2['INVITE_ACCEPT_SUCCESS'] = var8;
    var2['INVITE_RESOLVE_SUCCESS'] = var8;
    var4 = function handleOnlineCountUpdate(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = var1.count;
            var1 = null;
            if(!(var1 != var3)) { _fun0008_ip = 39; continue _fun0008 }
 20:
            if(!(var1 != var2)) { _fun0008_ip = 39; continue _fun0008 }
 24:
            var1 = _closure1_slot6;
            var1[var3] = var2;
            var1 = undefined;
            return var1;
 39:
            var1 = false;
            return var1;
        }
    };
    var2['ONLINE_GUILD_MEMBER_COUNT_UPDATE'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var7](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 7;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/GuildMemberCountStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();