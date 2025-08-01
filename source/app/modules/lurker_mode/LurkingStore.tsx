// app/modules/lurker_mode/LurkingStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function removeLurkedGuild(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var4 = _closure1_slot11;
            var3 = var4.indexOf;
            var6 = var3.bind(var4)(var2);
            var3 = -1;
            if(!(!(var6 > var3))) { _fun0002_ip = 35; continue _fun0002 }
 31:
            var3 = false;
            return var3;
 35:
            var8 = _closure1_slot11;
            var3 = new Array(0);
            var7 = 0;
            var9 = var3;
            var4 = arraySpread(var9, var8, var7);
            var5 = var3.splice;
            var4 = 1;
            var4 = var5.bind(var3)(var6, var4);
            _closure1_slot11 = var3;
            var1 = _closure1_slot12;
            var1 = delete var1[var2];
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function addLurkingGuild(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var1 = _closure1_slot10;
            var1 = var5 !== var1;
            if(!var1) { _fun0003_ip = 75; continue _fun0003 }
 17:
            var3 = _closure1_slot11;
            var2 = var3.includes;
            var2 = var2.bind(var3)(var5);
            var2 = !var2;
            if(!var2) { _fun0003_ip = 72; continue _fun0003 }
 37:
            var9 = _closure1_slot11;
            var3 = new Array(1);
            var8 = 0;
            var10 = var3;
            var6 = arraySpread(var10, var9, var8);
            var3[var6] = var5;
            var5 = 1;
            var5 = var6 + var5;
            _closure1_slot11 = var3;
            var2 = true;
 72:
            var1 = var2;
 75:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.isGuildLurker;
    var _closure1_slot5 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.JoinGuildSources;
    var _closure1_slot9 = var8;
    var2 = var2.ME;
    var _closure1_slot10 = var2;
    var2 = new Array(0);
    var _closure1_slot11 = var2;
    var2 = {};
    var _closure1_slot12 = var2;
    var2 = null;
    var _closure1_slot13 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function LurkingStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 69; continue _fun0004 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 105; continue _fun0004;
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot7;
            var1 = _closure1_slot8;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'lurkingGuildIds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'mostRecentLurkedGuildId';
        var5['key'] = var7;
        var7 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = _closure1_slot11;
                var4 = var1.length;
                var3 = 0;
                var1 = null;
                if(!(var3 !== var4)) { _fun0005_ip = 40; continue _fun0005 }
 20:
                var3 = _closure1_slot11;
                var4 = var3.length;
                var2 = 1;
                var2 = var4 - var2;
                var1 = var3[var2];
 40:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isLurking';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var5 = arg1;
                var3 = _closure1_slot7;
                var1 = var3.getGuild;
                var4 = var1.bind(var3)(var5);
                var1 = null;
                if(!(var1 != var4)) { _fun0006_ip = 76; continue _fun0006 }
 26:
                var3 = _closure1_slot6;
                var1 = var3.isCurrentUserGuest;
                var1 = var1.bind(var3)(var5);
                var2 = _closure1_slot5;
                var3 = undefined;
                var4 = var2.bind(var3)(var4);
                var2 = global;
                var2 = var2.Boolean;
                var1 = !var1;
                if(!var1) { _fun0006_ip = 69; continue _fun0006 }
 66:
                var1 = var4;
 69:
                var1 = var2.bind(var3)(var1);
                return var1;
 76:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getLurkingSource';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getLoadId';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 != var3;
                if(!var2) { _fun0007_ip = 23; continue _fun0007 }
 12:
                var2 = _closure1_slot12;
                var1 = var2[var3];
 23:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'LurkingStore';
    var8['displayName'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnectionOpen() {
        var4 = _closure1_slot7;
        var3 = var4.getGuildsArray;
        var5 = var3.bind(var4)();
        var4 = var5.filter;
        var3 = function(arg1) {
            var3 = _closure1_slot5;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        var3 = var4.map;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.id;
            return var1;
        };
        var1 = var3.bind(var4)(var1);
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleGuildJoin(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var7 = var2.guildId;
            var1 = var2.lurker;
            var5 = var2.source;
            var3 = var2.directoryChannelId;
            var6 = var2.loadId;
            if(var1) { _fun0008_ip = 38; continue _fun0008 }
 34:
            var1 = false;
            return var1;
 38:
            var4 = _closure1_slot16;
            var1 = undefined;
            var1 = var4.bind(var1)(var7);
            var1 = null;
            if(!(var1 != var6)) { _fun0008_ip = 66; continue _fun0008 }
 58:
            var4 = _closure1_slot12;
            var4[var7] = var6;
 66:
            var4 = _closure1_slot9;
            var4 = var4.MOBILE_GUILD_DISCOVERY;
            if(!(var4 !== var5)) { _fun0008_ip = 127; continue _fun0008 }
 80:
            var4 = _closure1_slot9;
            var4 = var4.DIRECTORY_ENTRY;
            if(!(var4 !== var5)) { _fun0008_ip = 100; continue _fun0008 }
 94:
            _closure1_slot13 = var1;
            _fun0008_ip = 147; continue _fun0008;
 100:
            var1 = {};
            var4 = _closure1_slot9;
            var4 = var4.DIRECTORY_ENTRY;
            var1['type'] = var4;
            var1['directoryChannelId'] = var3;
            _closure1_slot13 = var1;
            _fun0008_ip = 147; continue _fun0008;
 127:
            var1 = {};
            var3 = _closure1_slot9;
            var3 = var3.MOBILE_GUILD_DISCOVERY;
            var1['type'] = var3;
            _closure1_slot13 = var1;
 147:
            var1 = true;
            return var1;
        }
    };
    var2['GUILD_JOIN'] = var9;
    var9 = function handleGuildStopLurking(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var3 = var1.ignoredGuildIds;
            var2 = function clearLurkingGuilds(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var4 = arg1;
                    var2 = global;
                    var5 = var2.Set;
                    var2 = null;
                    if(!(var2 == var4)) { _fun0010_ip = 23; continue _fun0010 }
 19:
                    var4 = new Array(0);
 23:
                    var2 = new Array(0);
                    var8 = var2;
                    var7 = var4;
                    var6 = 0;
                    var4 = arraySpread(var8, var7, var6);
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var9 = var4;
                    var8 = var2;
                    var2 = new var9[var5](var8, var7);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var _closure3_slot0 = var2;
                    var7 = _closure1_slot11;
                    var4 = new Array(0);
                    var8 = var4;
                    var2 = arraySpread(var8, var7, var6);
                    var3 = var4.reduce;
                    var2 = function(arg1, arg2) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                            var3 = arg1;
                            var5 = arg2;
                            var2 = _closure3_slot0;
                            var1 = var2.has;
                            var2 = var1.bind(var2)(var5);
                            var1 = var3;
                            if(var2) { _fun0011_ip = 52; continue _fun0011 }
 29:
                            var4 = _closure1_slot15;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var5);
                            if(var2) { _fun0011_ip = 49; continue _fun0011 }
 46:
                            var2 = var3;
 49:
                            var1 = var2;
 52:
                            return var1;
                        }
                    };
                    var1 = false;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            if(!var1) { _fun0009_ip = 35; continue _fun0009 }
 26:
            var2 = null;
            _closure1_slot13 = var2;
 35:
            return var1;
        }
    };
    var2['GUILD_STOP_LURKING'] = var9;
    var9 = function handleGuildStopLurkingFailure(arg1) {
        var1 = arg1;
        var5 = var1.lurkingGuildId;
        var2 = var1.lurkingSource;
        var4 = _closure1_slot16;
        var3 = undefined;
        var3 = var4.bind(var3)(var5);
        _closure1_slot13 = var2;
        var1 = true;
        return var1;
    };
    var2['GUILD_STOP_LURKING_FAILURE'] = var9;
    var9 = function handleGuildCreate(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var4 = var1.guild;
            var1 = var4.joined_at;
            var3 = null;
            var2 = var3 == var1;
            if(var2) { _fun0012_ip = 48; continue _fun0012 }
 23:
            var6 = _closure1_slot11;
            var5 = var6.includes;
            var1 = var4.id;
            var1 = var5.bind(var6)(var1);
            var2 = !var1;
 48:
            var1 = !var2;
            if(var2) { _fun0012_ip = 79; continue _fun0012 }
 54:
            var6 = _closure1_slot15;
            var5 = var4.id;
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            _closure1_slot13 = var3;
            var1 = true;
 79:
            return var1;
        }
    };
    var2['GUILD_CREATE'] = var9;
    var9 = function handleGuildDelete(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var2 = var1.guild;
            var5 = _closure1_slot11;
            var4 = var5.includes;
            var1 = var2.id;
            var1 = var4.bind(var5)(var1);
            var4 = !var1;
            var1 = !var4;
            if(var4) { _fun0013_ip = 63; continue _fun0013 }
 39:
            var5 = _closure1_slot15;
            var4 = var2.id;
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            var2 = null;
            _closure1_slot13 = var2;
            var1 = true;
 63:
            return var1;
        }
    };
    var2['GUILD_DELETE'] = var9;
    var4 = function handleGuildMemberAdd(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var2 = arg1;
            var6 = var2.guildId;
            var1 = var2.joinedAt;
            var2 = var2.user;
            var7 = var2.id;
            var4 = _closure1_slot8;
            var2 = var4.getCurrentUser;
            var8 = var2.bind(var4)();
            var2 = null;
            var9 = var2 == var8;
            var5 = undefined;
            var4 = undefined;
            if(var9) { _fun0014_ip = 58; continue _fun0014 }
 53:
            var4 = var8.id;
 58:
            var4 = var7 !== var4;
            if(var4) { _fun0014_ip = 69; continue _fun0014 }
 65:
            var4 = var2 == var1;
 69:
            if(var4) { _fun0014_ip = 89; continue _fun0014 }
 72:
            var7 = _closure1_slot11;
            var1 = var7.includes;
            var1 = var1.bind(var7)(var6);
            var4 = !var1;
 89:
            var1 = !var4;
            if(var4) { _fun0014_ip = 110; continue _fun0014 }
 95:
            var4 = _closure1_slot15;
            var4 = var4.bind(var5)(var6);
            _closure1_slot13 = var2;
            var1 = true;
 110:
            return var1;
        }
    };
    var2['GUILD_MEMBER_ADD'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/lurker_mode/LurkingStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();