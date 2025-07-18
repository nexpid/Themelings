// app/modules/premium/powerups/GuildPowerupsStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function calculateAppliedBoosts(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot6;
            var2 = var3.getGuild;
            var1 = arg1;
            var12 = var2.bind(var3)(var1);
            var11 = null;
            var1 = var11 == var12;
            var10 = undefined;
            var3 = undefined;
            if(var1) { _fun0002_ip = 59; continue _fun0002 }
 33:
            var4 = var12.features;
            var2 = var4.has;
            var1 = _closure1_slot10;
            var1 = var1.PREMIUM_TIER_3_OVERRIDE;
            var3 = var2.bind(var4)(var1);
 59:
            var9 = 0;
            var2 = true;
            var1 = 0;
            if(!(var2 !== var3)) { _fun0002_ip = 106; continue _fun0002 }
 69:
            var3 = _closure1_slot8;
            var4 = var11 == var12;
            var2 = undefined;
            if(var4) { _fun0002_ip = 88; continue _fun0002 }
 82:
            var2 = var12.premiumTier;
 88:
            if(!(var11 == var2)) { _fun0002_ip = 102; continue _fun0002 }
 92:
            var4 = _closure1_slot9;
            var2 = var4.NONE;
 102:
            var1 = var3[var2];
 106:
            var2 = global;
            var4 = var2.Object;
            var3 = var4.entries;
            var2 = _closure1_slot7;
            var8 = var3.bind(var4)(var2);
            var2 = var8.length;
            var2 = var9 < var2;
            var7 = 2;
            var6 = 1;
            var5 = var1;
            var4 = 0;
            var3 = undefined;
            var1 = var5;
            if(!var2) { _fun0002_ip = 290; continue _fun0002 }
 160:
            var14 = var8[var4];
            var2 = _closure1_slot5;
            var2 = var2.bind(var10)(var14, var7);
            var17 = var2[var9];
            var2 = var2[var6];
            var15 = var11 != var12;
            if(!var15) { _fun0002_ip = 202; continue _fun0002 }
 189:
            var14 = var12.premiumFeatures;
            var15 = var11 != var14;
            var3 = var14;
 202:
            if(!var15) { _fun0002_ip = 221; continue _fun0002 }
 205:
            var16 = var3.features;
            var14 = var16.includes;
            var15 = var14.bind(var16)(var17);
 221:
            if(!var15) { _fun0002_ip = 256; continue _fun0002 }
 224:
            var14 = var2.includedInLevel;
            var14 = var11 == var14;
            if(var14) { _fun0002_ip = 253; continue _fun0002 }
 237:
            var17 = var12.premiumTier;
            var16 = var2.includedInLevel;
            var14 = var17 < var16;
 253:
            var15 = var14;
 256:
            var14 = var5;
            if(!var15) { _fun0002_ip = 272; continue _fun0002 }
 262:
            var2 = var2.boostPrice;
            var14 = var5 + var2;
 272:
            var4 = var4 + 1;
            var2 = var8.length;
            var5 = var14;
            var1 = var5;
            if(var4 < var2) { _fun0002_ip = 160; continue _fun0002 }
 290:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function getStateForGuild(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot11;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 == var4)) { _fun0003_ip = 67; continue _fun0003 }
 20:
            var4 = _closure1_slot13;
            var3 = undefined;
            var5 = var4.bind(var3)(var2);
            var4 = _closure1_slot11;
            var3 = {};
            var6 = {};
            var3['allPowerups'] = var6;
            var6 = {};
            var3['powerupCatalog'] = var6;
            var6 = {};
            var3['unlockedPowerups'] = var6;
            var3['appliedBoosts'] = var5;
            var4[var2] = var3;
 67:
            var1 = _closure1_slot11;
            var1 = var1[var2];
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function recalculateState(arg1, arg2) {
        var1 = arg1;
        var5 = var1.guildId;
        var7 = var1.entitlements;
        var1 = arg2;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot14;
        var1 = undefined;
        var6 = var4.bind(var1)(var5);
        var _closure2_slot1 = var6;
        var4 = var7.forEach;
        var2 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = arg1;
                var4 = _closure2_slot0;
                var1 = _closure2_slot1;
                var2 = var1.unlockedPowerups;
                var1 = var3.sku_id;
                if(var4) { _fun0004_ip = 35; continue _fun0004 }
 29:
                var4 = delete var2[var1];
                _fun0004_ip = 39; continue _fun0004;
 35:
                var2[var1] = var3;
 39:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var7)(var2);
        var2 = {};
        var8 = _closure1_slot11;
        var9 = var2;
        var4 = copyDataProperties(var9, var8);
        var4 = {};
        var9 = var4;
        var8 = var6;
        var6 = copyDataProperties(var9, var8);
        var6 = _closure1_slot13;
        var7 = var6.bind(var1)(var5);
        var6 = 'appliedBoosts';
        var4[var6] = var7;
        var2[var5] = var4;
        _closure1_slot11 = var2;
        return var1;
    };
    var _closure1_slot15 = var1;
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
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.PURCHASABLE_PREMIUM_FEATURES_BOOST_INFO;
    var _closure1_slot7 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.AppliedGuildBoostsRequiredForBoostedGuildTier;
    var _closure1_slot8 = var8;
    var8 = var2.BoostedGuildTiers;
    var _closure1_slot9 = var8;
    var2 = var2.GuildFeatures;
    var _closure1_slot10 = var2;
    var2 = {};
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function GuildPowerupsStore() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
                var1 = _closure1_slot12;
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
        var1 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 != var2)) { _fun0006_ip = 16; continue _fun0006 }
 9:
                _closure1_slot11 = var2;
 16:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getStateForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 != var3;
                var1 = undefined;
                if(!var2) { _fun0007_ip = 25; continue _fun0007 }
 14:
                var2 = _closure1_slot11;
                var1 = var2[var3];
 25:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'shouldFetchCatalogForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = _closure1_slot11;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var4 = var1 == var2;
                var3 = undefined;
                if(var4) { _fun0008_ip = 33; continue _fun0008 }
 25:
                var3 = var2.catalogFetchCooldown;
 33:
                var1 = var1 == var3;
                if(var1) { _fun0008_ip = 71; continue _fun0008 }
 40:
                var2 = 86400000;
                var3 = var3 + var2;
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var1 = var3 < var2;
 71:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'shouldFetchPowerupsForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var2 = _closure1_slot11;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var4 = var1 == var2;
                var3 = undefined;
                if(var4) { _fun0009_ip = 33; continue _fun0009 }
 25:
                var3 = var2.unlockedPowerupsFetchCooldown;
 33:
                var1 = var1 == var3;
                if(var1) { _fun0009_ip = 71; continue _fun0009 }
 40:
                var2 = 3600000;
                var3 = var3 + var2;
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var1 = var3 < var2;
 71:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'hasFetchedPowerupCatalog';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var4 = arg1;
                var3 = null;
                var1 = var3 != var4;
                if(!var1) { _fun0010_ip = 46; continue _fun0010 }
 12:
                var2 = _closure1_slot11;
                var2 = var2[var4];
                var4 = var3 == var2;
                var3 = undefined;
                if(var4) { _fun0010_ip = 40; continue _fun0010 }
 32:
                var3 = var2.hasFetchedPowerupCatalog;
 40:
                var2 = true;
                var1 = var2 === var3;
 46:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'hasFetchedUnlockedPowerups';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var4 = arg1;
                var3 = null;
                var1 = var3 != var4;
                if(!var1) { _fun0011_ip = 46; continue _fun0011 }
 12:
                var2 = _closure1_slot11;
                var2 = var2[var4];
                var4 = var3 == var2;
                var3 = undefined;
                if(var4) { _fun0011_ip = 40; continue _fun0011 }
 32:
                var3 = var2.hasFetchedUnlockedPowerups;
 40:
                var2 = true;
                var1 = var2 === var3;
 46:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GuildPowerupsStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = new Array(1);
    var9 = function(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var7 = arg1;
            var3 = null;
            var1 = var7;
            if(!(var3 != var1)) { _fun0012_ip = 80; continue _fun0012 }
 14:
            var5 = global;
            var4 = var5.Object;
            var3 = var4.fromEntries;
            var6 = var5.Object;
            var5 = var6.entries;
            var7 = var5.bind(var6)(var7);
            var6 = var7.filter;
            var5 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var4 = arg1;
                    var1 = var4[Symbol.iterator];
                    var4 = var1().next;
                    var2 = var4().value;
                    var2 = var1;
                    var6 = undefined;
                    var3 = var2 === var6;
                    var2 = undefined;
                    if(var3) { _fun0013_ip = 49; continue _fun0013 }
 24:
                    var5 = var4().value;
                    var4 = var1;
                    var4 = var4 === var6;
                    var2 = undefined;
                    var3 = var4;
                    if(var4) { _fun0013_ip = 49; continue _fun0013 }
 43:
                    var2 = var5;
                    var3 = var4;
 49:
                    if(var3) { _fun0013_ip = 55; continue _fun0013 }
 52:
                    var1.return();
 55:
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0013_ip = 75; continue _fun0013 }
 64:
                    var3 = 'object';
                    var2 = typeof var2;
                    var1 = var3 === var2;
 75:
                    return var1;
                }
            };
            var6 = var6.bind(var7)(var5);
            var5 = var6.map;
            var2 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var5 = arg1;
                    var1 = var5[Symbol.iterator];
                    var5 = var1().next;
                    var4 = var5().value;
                    var2 = var1;
                    var7 = undefined;
                    var3 = var2 === var7;
                    var2 = undefined;
                    if(var3) { _fun0014_ip = 27; continue _fun0014 }
 24:
                    var2 = var4;
 27:
                    var4 = undefined;
                    if(var3) { _fun0014_ip = 57; continue _fun0014 }
 32:
                    var6 = var5().value;
                    var5 = var1;
                    var5 = var5 === var7;
                    var4 = undefined;
                    var3 = var5;
                    if(var5) { _fun0014_ip = 57; continue _fun0014 }
 51:
                    var4 = var6;
                    var3 = var5;
 57:
                    if(var3) { _fun0014_ip = 63; continue _fun0014 }
 60:
                    var1.return();
 63:
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = {};
                    var9 = var2;
                    var8 = var4;
                    var3 = copyDataProperties(var9, var8);
                    var6 = var4.allPowerups;
                    var3 = null;
                    if(!(var3 == var6)) { _fun0014_ip = 97; continue _fun0014 }
 95:
                    var6 = {};
 97:
                    var5 = 'allPowerups';
                    var2[var5] = var6;
                    var6 = var4.powerupCatalog;
                    if(!(var3 == var6)) { _fun0014_ip = 118; continue _fun0014 }
 116:
                    var6 = {};
 118:
                    var5 = 'powerupCatalog';
                    var2[var5] = var6;
                    var4 = var4.unlockedPowerups;
                    if(!(var3 == var4)) { _fun0014_ip = 139; continue _fun0014 }
 137:
                    var4 = {};
 139:
                    var3 = 'unlockedPowerups';
                    var2[var3] = var4;
                    var1[1] = var2;
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var2);
            var1 = var3.bind(var4)(var2);
 80:
            return var1;
        }
    };
    var2[0] = var9;
    var8['migrations'] = var2;
    var2 = 10;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleReset() {
        var1 = {};
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var9;
    var9 = function handleGuildPowerupCatalogFetchSuccess(arg1) {
        var1 = arg1;
        var5 = var1.guildId;
        var8 = var1.allPowerups;
        var7 = var1.powerupCatalog;
        var2 = _closure1_slot14;
        var1 = undefined;
        var6 = var2.bind(var1)(var5);
        var2 = {};
        var9 = _closure1_slot11;
        var10 = var2;
        var4 = copyDataProperties(var10, var9);
        var4 = {};
        var10 = var4;
        var9 = var6;
        var6 = copyDataProperties(var10, var9);
        var6 = 'allPowerups';
        var4[var6] = var8;
        var6 = 'powerupCatalog';
        var4[var6] = var7;
        var6 = global;
        var7 = var6.Date;
        var6 = var7.now;
        var7 = var6.bind(var7)();
        var6 = 'catalogFetchCooldown';
        var4[var6] = var7;
        var7 = true;
        var6 = 'hasFetchedPowerupCatalog';
        var4[var6] = var7;
        var2[var5] = var4;
        _closure1_slot11 = var2;
        return var1;
    };
    var2['GUILD_POWERUP_CATALOG_FETCH_SUCCESS'] = var9;
    var9 = function handleGuildUnlockedPowerupsFetchSuccess(arg1) {
        var1 = arg1;
        var5 = var1.guildId;
        var8 = var1.unlockedPowerups;
        var2 = _closure1_slot14;
        var1 = undefined;
        var6 = var2.bind(var1)(var5);
        var2 = _closure1_slot13;
        var7 = var2.bind(var1)(var5);
        var2 = {};
        var9 = _closure1_slot11;
        var10 = var2;
        var4 = copyDataProperties(var10, var9);
        var4 = {};
        var10 = var4;
        var9 = var6;
        var6 = copyDataProperties(var10, var9);
        var6 = 'unlockedPowerups';
        var4[var6] = var8;
        var6 = 'appliedBoosts';
        var4[var6] = var7;
        var6 = global;
        var7 = var6.Date;
        var6 = var7.now;
        var7 = var6.bind(var7)();
        var6 = 'unlockedPowerupsFetchCooldown';
        var4[var6] = var7;
        var7 = true;
        var6 = 'hasFetchedUnlockedPowerups';
        var4[var6] = var7;
        var2[var5] = var4;
        _closure1_slot11 = var2;
        return var1;
    };
    var2['GUILD_UNLOCKED_POWERUPS_FETCH_SUCCESS'] = var9;
    var9 = function handleGuildPowerupCreated(arg1) {
        var4 = _closure1_slot15;
        var1 = undefined;
        var3 = arg1;
        var2 = true;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['GUILD_POWERUP_ENTITLEMENTS_CREATE'] = var9;
    var9 = function handleGuildPowerupDeleted(arg1) {
        var4 = _closure1_slot15;
        var1 = undefined;
        var3 = arg1;
        var2 = false;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['GUILD_POWERUP_ENTITLEMENTS_DELETE'] = var9;
    var4 = function handleGuildUpdated(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var4 = var1.id;
        var3 = _closure1_slot11;
        var2 = {};
        var6 = _closure1_slot14;
        var1 = undefined;
        var7 = var6.bind(var1)(var4);
        var8 = var2;
        var6 = copyDataProperties(var8, var7);
        var5 = _closure1_slot13;
        var6 = var5.bind(var1)(var4);
        var5 = 'appliedBoosts';
        var2[var5] = var6;
        var3[var4] = var2;
        return var1;
    };
    var2['GUILD_UPDATE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/GuildPowerupsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();