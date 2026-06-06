// app/modules/guild_themes/GuildThemeRuntimeStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function clearSelectedGuildThemeSnapshot() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot9;
            var2 = null;
            var1 = var2 != var1;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            _closure1_slot9 = var2;
            var1 = true;
case 6:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function setSelectedGuildThemeSnapshot(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var2 = _closure1_slot9;
            var1 = null;
            var6 = var1 == var2;
            var7 = undefined;
            var1 = undefined;
            if(var6) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var1 = var2.guildId;
case 8:
            var1 = var1 !== var5;
            if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 8;
            var2 = var8[var2];
            var7 = var6.bind(var7)(var2);
            var6 = var7.isEqual;
            var2 = _closure1_slot9;
            var2 = var2.guildTheme;
            var2 = var6.bind(var7)(var2, var4);
            var1 = !var2;
case 10:
            if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var2 = {};
            var2['guildId'] = var5;
            var2['guildTheme'] = var4;
            _closure1_slot9 = var2;
            var1 = true;
case 12:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function snapshotSelectedGuildId(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var3 = _closure1_slot12;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 7;
            var5 = var5[var2];
            var2 = undefined;
            var6 = var6.bind(var2)(var5);
            var5 = var6.cloneGuildTheme;
            var8 = _closure1_slot7;
            var7 = var8.getGuild;
            var7 = var7.bind(var8)(var4);
            var8 = var1 == var7;
            var1 = undefined;
            if(var8) { _fun0004_ip = 4; continue _fun0004 }
case 16:
            var1 = var7.guildTheme;
case 4:
            var1 = var5.bind(var6)(var1);
            var1 = var3.bind(var2)(var4, var1);
            _fun0004_ip = 17; continue _fun0004;
case 14:
            var3 = _closure1_slot11;
            var2 = undefined;
            var1 = var3.bind(var2)();
case 17:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var9 = function snapshotSelectedGuild() {
        var3 = _closure1_slot13;
        var2 = _closure1_slot8;
        var1 = var2.getGuildId;
        var2 = var1.bind(var2)();
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var1 = function snapshotSelectedGuildAfterSelectedGuildChange(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var5 = _closure1_slot9;
            var3 = null;
            var6 = var3 == var5;
            var4 = undefined;
            var3 = undefined;
            if(var6) { _fun0005_ip = 18; continue _fun0005 }
case 19:
            var3 = var5.guildId;
case 18:
            if(!(var3 === var1)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var5 = _closure1_slot8;
            var3 = var5.getGuildId;
            var3 = var3.bind(var5)();
            var1 = var3 !== var1;
            if(!var1) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var2 = _closure1_slot13;
            var1 = var2.bind(var4)(var3);
case 22:
            return var1;
case 20:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var10 = function handleSavedGuildTheme(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var7 = var1.guildTheme;
            var3 = _closure1_slot8;
            var1 = var3.getGuildId;
            var1 = var1.bind(var3)();
            var1 = var5 === var1;
            if(!var1) { _fun0006_ip = 24; continue _fun0006 }
case 11:
            var4 = _closure1_slot12;
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 7;
            var2 = var3[var2];
            var3 = undefined;
            var6 = var6.bind(var3)(var2);
            var2 = var6.cloneGuildTheme;
            var2 = var2.bind(var6)(var7);
            var1 = var4.bind(var3)(var5, var2);
case 24:
            return var1;
        }
    };
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = null;
    var _closure1_slot9 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildThemeRuntimeStore() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
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
                if(var1) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 27; continue _fun0007;
case 25:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 27:
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
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getGuildThemeSnapshot';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = _closure1_slot9;
                var1 = null;
                var5 = var1 == var3;
                var4 = undefined;
                if(var5) { _fun0008_ip = 19; continue _fun0008 }
case 28:
                var4 = var3.guildId;
case 19:
                var3 = arg1;
                var1 = undefined;
                if(!(var3 === var4)) { _fun0008_ip = 29; continue _fun0008 }
case 21:
                var2 = _closure1_slot9;
                var1 = var2.guildTheme;
case 29:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GuildThemeRuntimeStore';
    var8['displayName'] = var2;
    var2 = 10;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var2['CACHE_LOADED'] = var9;
    var2['CACHE_LOADED_LAZY'] = var9;
    var11 = function handleChannelSelect(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var1 = null;
            if(!(var1 != var4)) { _fun0009_ip = 30; continue _fun0009 }
case 31:
            var5 = _closure1_slot9;
            var6 = var1 == var5;
            var3 = undefined;
            var1 = undefined;
            if(var6) { _fun0009_ip = 32; continue _fun0009 }
case 21:
            var1 = var5.guildId;
case 32:
            var1 = var4 !== var1;
            if(!var1) { _fun0009_ip = 23; continue _fun0009 }
case 33:
            var2 = _closure1_slot13;
            var1 = var2.bind(var3)(var4);
case 23:
            _fun0009_ip = 16; continue _fun0009;
case 30:
            var3 = _closure1_slot11;
            var2 = undefined;
            var1 = var3.bind(var2)();
case 16:
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var11;
    var2['CONNECTION_OPEN'] = var9;
    var11 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var3 = _closure1_slot14;
        var2 = var1.id;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var2['GUILD_DELETE'] = var11;
    var11 = function handleGuildMemberRemove(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot14;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var2['GUILD_MEMBER_REMOVE'] = var11;
    var2['GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS'] = var10;
    var2['GUILD_THEME_PREVIEW_SAVE_SUCCESS'] = var10;
    var2['OVERLAY_INITIALIZE'] = var9;
    var4 = function handleConnectionReset() {
        var2 = _closure1_slot11;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_themes/GuildThemeRuntimeStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();