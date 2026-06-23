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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function guildHasThemeFeature(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot8;
            var3 = var4.getGuild;
            var2 = arg1;
            var3 = var3.bind(var4)(var2);
            var2 = null;
            var4 = var2 == var3;
            var2 = undefined;
            if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var3.features;
            var3 = var4.has;
            var1 = _closure1_slot10;
            var1 = var1.GUILD_THEME;
            var2 = var3.bind(var4)(var1);
case 6:
            var1 = true;
            var1 = var1 === var2;
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function readGuildTheme(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.cloneGuildTheme;
            var6 = _closure1_slot8;
            var5 = var6.getGuild;
            var4 = arg1;
            var4 = var5.bind(var6)(var4);
            var5 = null;
            var5 = var5 == var4;
            if(var5) { _fun0003_ip = 8; continue _fun0003 }
case 6:
            var1 = var4.guildTheme;
case 8:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function clearSelectedGuildThemeSnapshot() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = _closure1_slot11;
            var2 = null;
            var1 = var2 != var1;
            if(!var1) { _fun0004_ip = 9; continue _fun0004 }
case 10:
            _closure1_slot11 = var2;
            var1 = true;
case 9:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function setSelectedGuildThemeSnapshot(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var4 = arg3;
            var2 = _closure1_slot11;
            var1 = null;
            var7 = var1 == var2;
            var8 = undefined;
            var1 = undefined;
            if(var7) { _fun0005_ip = 11; continue _fun0005 }
case 12:
            var1 = var2.guildId;
case 11:
            var1 = var1 !== var6;
            if(var1) { _fun0005_ip = 13; continue _fun0005 }
case 14:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 11;
            var2 = var9[var2];
            var8 = var7.bind(var8)(var2);
            var7 = var8.isEqual;
            var2 = _closure1_slot11;
            var2 = var2.guildTheme;
            var2 = var7.bind(var8)(var2, var5);
            var1 = !var2;
case 13:
            if(var1) { _fun0005_ip = 15; continue _fun0005 }
case 16:
            var2 = _closure1_slot11;
            var2 = var2.hasThemeFeature;
            var1 = var2 !== var4;
case 15:
            if(!var1) { _fun0005_ip = 17; continue _fun0005 }
case 18:
            var2 = {};
            var2['guildId'] = var6;
            var2['guildTheme'] = var5;
            var2['hasThemeFeature'] = var4;
            _closure1_slot11 = var2;
            var1 = true;
case 17:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function snapshotSelectedGuildId(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0006_ip = 19; continue _fun0006 }
case 20:
            var4 = _closure1_slot17;
            var2 = _closure1_slot15;
            var3 = undefined;
            var2 = var2.bind(var3)(var5);
            var1 = _closure1_slot14;
            var1 = var1.bind(var3)(var5);
            var1 = var4.bind(var3)(var5, var2, var1);
            _fun0006_ip = 6; continue _fun0006;
case 19:
            var3 = _closure1_slot16;
            var2 = undefined;
            var1 = var3.bind(var2)();
case 6:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var9 = function snapshotSelectedGuild() {
        var3 = _closure1_slot18;
        var2 = _closure1_slot9;
        var1 = var2.getGuildId;
        var2 = var1.bind(var2)();
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var1 = function snapshotSelectedGuildAfterSelectedGuildChange(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var5 = _closure1_slot11;
            var3 = null;
            var6 = var3 == var5;
            var4 = undefined;
            var3 = undefined;
            if(var6) { _fun0007_ip = 21; continue _fun0007 }
case 22:
            var3 = var5.guildId;
case 21:
            if(!(var3 === var1)) { _fun0007_ip = 8; continue _fun0007 }
case 7:
            var5 = _closure1_slot9;
            var3 = var5.getGuildId;
            var3 = var3.bind(var5)();
            var1 = var3 !== var1;
            if(!var1) { _fun0007_ip = 23; continue _fun0007 }
case 24:
            var2 = _closure1_slot18;
            var1 = var2.bind(var4)(var3);
case 23:
            return var1;
case 8:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var10 = function handleSavedGuildTheme(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var8 = var1.guildTheme;
            var3 = _closure1_slot9;
            var1 = var3.getGuildId;
            var1 = var1.bind(var3)();
            var1 = var6 === var1;
            if(!var1) { _fun0008_ip = 25; continue _fun0008 }
case 26:
            var5 = _closure1_slot17;
            var7 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 10;
            var3 = var4[var3];
            var4 = undefined;
            var7 = var7.bind(var4)(var3);
            var3 = var7.cloneGuildTheme;
            var3 = var3.bind(var7)(var8);
            var2 = _closure1_slot14;
            var2 = var2.bind(var4)(var6);
            var1 = var5.bind(var4)(var6, var3, var2);
case 25:
            return var1;
        }
    };
    var1 = function syncSnapshotOnFeatureTransition(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg1;
            var1 = _closure1_slot11;
            var9 = null;
            if(!(var9 != var1)) { _fun0009_ip = 27; continue _fun0009 }
case 28:
            var2 = var1.guildId;
            if(!(var5 === var2)) { _fun0009_ip = 27; continue _fun0009 }
case 29:
            var2 = _closure1_slot14;
            var4 = undefined;
            var3 = var2.bind(var4)(var5);
            var2 = var1.hasThemeFeature;
            if(!(var3 !== var2)) { _fun0009_ip = 30; continue _fun0009 }
case 31:
            var7 = !var3;
            if(!var3) { _fun0009_ip = 32; continue _fun0009 }
case 33:
            var8 = _closure1_slot7;
            var2 = var8.getStateForGuild;
            var8 = var2.bind(var8)(var5);
            var10 = var9 == var8;
            var2 = undefined;
            if(var10) { _fun0009_ip = 34; continue _fun0009 }
case 35:
            var10 = var8.unlockedPowerups;
            var8 = var9 == var10;
            var2 = undefined;
            if(var8) { _fun0009_ip = 34; continue _fun0009 }
case 36:
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var8 = 9;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.GUILD_POWERUP_GUILD_THEME_SKU_ID;
            var2 = var10[var8];
case 34:
            var2 = var9 != var2;
            if(!var2) { _fun0009_ip = 37; continue _fun0009 }
case 38:
            var8 = var1.guildTheme;
            var10 = var9 == var8;
            var9 = undefined;
            if(var10) { _fun0009_ip = 39; continue _fun0009 }
case 40:
            var9 = var8.enabled;
case 39:
            var8 = true;
            var8 = var8 === var9;
            var2 = !var8;
case 37:
            var7 = var2;
case 32:
            var2 = _closure1_slot17;
            if(var7) { _fun0009_ip = 41; continue _fun0009 }
case 42:
            var1 = var1.guildTheme;
            _fun0009_ip = 43; continue _fun0009;
case 41:
            var6 = _closure1_slot15;
            var1 = var6.bind(var4)(var5);
case 43:
            var1 = var2.bind(var4)(var5, var1, var3);
            return var1;
case 30:
            var1 = false;
            return var1;
case 27:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot20 = var1;
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
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.GuildFeatures;
    var _closure1_slot10 = var2;
    var2 = null;
    var _closure1_slot11 = var2;
    var _closure1_slot12 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildThemeRuntimeStore() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
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
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                if(var1) { _fun0010_ip = 44; continue _fun0010 }
case 45:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0010_ip = 46; continue _fun0010;
case 44:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 46:
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
            var5 = this;
            var4 = var5.waitFor;
            var3 = _closure1_slot7;
            var2 = _closure1_slot8;
            var1 = _closure1_slot9;
            var1 = var4.bind(var5)(var3, var2, var1);
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
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var5 = arg1;
                var4 = _closure1_slot12;
                var2 = null;
                var1 = null;
                if(!(var5 !== var4)) { _fun0011_ip = 31; continue _fun0011 }
case 47:
                var6 = _closure1_slot11;
                var7 = var2 == var6;
                var4 = undefined;
                if(var7) { _fun0011_ip = 48; continue _fun0011 }
case 29:
                var4 = var6.guildId;
case 48:
                var2 = undefined;
                if(!(var5 === var4)) { _fun0011_ip = 49; continue _fun0011 }
case 50:
                var3 = _closure1_slot11;
                var2 = var3.guildTheme;
case 49:
                var1 = var2;
case 31:
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
    var2 = 13;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var2['CACHE_LOADED'] = var9;
    var2['CACHE_LOADED_LAZY'] = var9;
    var11 = function handleChannelSelect(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var1 = null;
            if(!(var1 != var4)) { _fun0012_ip = 31; continue _fun0012 }
case 51:
            var5 = _closure1_slot11;
            var6 = var1 == var5;
            var3 = undefined;
            var1 = undefined;
            if(var6) { _fun0012_ip = 52; continue _fun0012 }
case 7:
            var1 = var5.guildId;
case 52:
            var1 = var4 !== var1;
            if(!var1) { _fun0012_ip = 24; continue _fun0012 }
case 53:
            var2 = _closure1_slot18;
            var1 = var2.bind(var3)(var4);
case 24:
            _fun0012_ip = 54; continue _fun0012;
case 31:
            var3 = _closure1_slot16;
            var2 = undefined;
            var1 = var3.bind(var2)();
case 54:
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var11;
    var2['CONNECTION_OPEN'] = var9;
    var11 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var3 = _closure1_slot19;
        var2 = var1.id;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var2['GUILD_DELETE'] = var11;
    var11 = function handleGuildMemberRemove(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot19;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var2['GUILD_MEMBER_REMOVE'] = var11;
    var11 = function handleGuildUpdate(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guild;
            var4 = var2.id;
            var1 = _closure1_slot12;
            var4 = var4 !== var1;
            if(var4) { _fun0013_ip = 55; continue _fun0013 }
case 56:
            var6 = _closure1_slot14;
            var5 = var2.id;
            var1 = undefined;
            var4 = var6.bind(var1)(var5);
case 55:
            var1 = false;
            if(var4) { _fun0013_ip = 57; continue _fun0013 }
case 58:
            var4 = null;
            _closure1_slot12 = var4;
            var1 = true;
case 57:
            var4 = _closure1_slot20;
            var3 = var2.id;
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            if(!var2) { _fun0013_ip = 59; continue _fun0013 }
case 60:
            var1 = true;
case 59:
            return var1;
        }
    };
    var2['GUILD_UPDATE'] = var11;
    var11 = function handleThemePowerupAdded(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guildId;
            var5 = var1.entitlements;
            var1 = _closure1_slot12;
            var1 = var1 === var2;
            if(!var1) { _fun0014_ip = 61; continue _fun0014 }
case 21:
            var3 = var5.some;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.sku_id;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 9;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.GUILD_POWERUP_GUILD_THEME_SKU_ID;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var3.bind(var5)(var2);
            var3 = !var2;
            var2 = !var3;
            if(var3) { _fun0014_ip = 62; continue _fun0014 }
case 31:
            var3 = null;
            _closure1_slot12 = var3;
            var2 = true;
case 62:
            var1 = var2;
case 61:
            return var1;
        }
    };
    var2['GUILD_POWERUP_ENTITLEMENTS_CREATE'] = var11;
    var11 = function handleThemePowerupRemoved(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var3 = var1.entitlements;
            var2 = var3.some;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.sku_id;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 9;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.GUILD_POWERUP_GUILD_THEME_SKU_ID;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0015_ip = 25; continue _fun0015 }
case 14:
            var5 = _closure1_slot11;
            var2 = null;
            var6 = var2 == var5;
            var2 = undefined;
            if(var6) { _fun0015_ip = 8; continue _fun0015 }
case 63:
            var2 = var5.guildId;
case 8:
            var2 = var4 === var2;
            if(!var2) { _fun0015_ip = 64; continue _fun0015 }
case 65:
            var5 = _closure1_slot12;
            var2 = var5 !== var4;
case 64:
            if(!var2) { _fun0015_ip = 66; continue _fun0015 }
case 67:
            _closure1_slot12 = var4;
            var2 = true;
case 66:
            var1 = var2;
case 25:
            return var1;
        }
    };
    var2['GUILD_POWERUP_ENTITLEMENTS_DELETE'] = var11;
    var2['GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS'] = var10;
    var2['GUILD_THEME_PREVIEW_SAVE_SUCCESS'] = var10;
    var2['OVERLAY_INITIALIZE'] = var9;
    var4 = function handleConnectionReset() {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var2 = _closure1_slot12;
            var3 = null;
            var2 = var3 != var2;
            _closure1_slot12 = var3;
            var3 = _closure1_slot16;
            var1 = undefined;
            var1 = var3.bind(var1)();
            if(var1) { _fun0016_ip = 68; continue _fun0016 }
case 69:
            var1 = var2;
case 68:
            return var1;
        }
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_themes/GuildThemeRuntimeStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();