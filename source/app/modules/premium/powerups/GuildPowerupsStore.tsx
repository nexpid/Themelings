// app/modules/premium/powerups/GuildPowerupsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function calculateAppliedBoosts(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var15 = arg1;
            var2 = _closure1_slot6;
            var1 = var2.getGuild;
            var13 = var1.bind(var2)(var15);
            var12 = null;
            var1 = var12 == var13;
            var11 = undefined;
            var3 = undefined;
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var13.features;
            var2 = var4.has;
            var1 = _closure1_slot10;
            var1 = var1.PREMIUM_TIER_3_OVERRIDE;
            var3 = var2.bind(var4)(var1);
case 6:
            var10 = 0;
            var2 = true;
            var1 = 0;
            if(!(var2 !== var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = _closure1_slot8;
            var4 = var12 == var13;
            var2 = undefined;
            if(var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = var13.premiumTier;
case 10:
            if(!(var12 == var2)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var4 = _closure1_slot9;
            var2 = var4.NONE;
case 12:
            var1 = var3[var2];
case 8:
            var2 = global;
            var4 = var2.Object;
            var3 = var4.entries;
            var2 = _closure1_slot7;
            var9 = var3.bind(var4)(var2);
            var2 = var9.length;
            var2 = var10 < var2;
            var8 = 2;
            var7 = 1;
            var6 = var1;
            var5 = 0;
            var4 = undefined;
            var3 = undefined;
            var1 = var6;
            if(!var2) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var16 = var9[var5];
            var2 = _closure1_slot5;
            var2 = var2.bind(var11)(var16, var8);
            var19 = var2[var10];
            var2 = var2[var7];
            var17 = var12 != var13;
            if(!var17) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var16 = var13.premiumFeatures;
            var17 = var12 != var16;
            var4 = var16;
case 16:
            if(!var17) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var18 = var4.features;
            var16 = var18.includes;
            var17 = var16.bind(var18)(var19);
case 18:
            if(!var17) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var16 = var2.isEnabled;
            var18 = var12 == var16;
            var16 = undefined;
            if(var18) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var18 = var2.isEnabled;
            var16 = var18.bind(var2)(var15);
case 22:
            var18 = var12 == var16;
            if(var18) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var18 = var16;
case 24:
            var17 = var18;
            var3 = var16;
case 20:
            if(!var17) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var16 = var2.includedInLevel;
            var16 = var12 == var16;
            if(var16) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var19 = var13.premiumTier;
            var18 = var2.includedInLevel;
            var16 = var19 < var18;
case 28:
            var17 = var16;
case 26:
            var16 = var6;
            if(!var17) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var2 = var2.boostPrice;
            var16 = var6 + var2;
case 30:
            var5 = var5 + 1;
            var2 = var9.length;
            var6 = var16;
            var1 = var6;
            if(var5 < var2) { _fun0002_ip = 15; continue _fun0002 }
case 14:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function getStateForGuild(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot11;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 == var4)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
case 32:
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
case 0:
                var3 = arg1;
                var4 = _closure2_slot0;
                var1 = _closure2_slot1;
                var2 = var1.unlockedPowerups;
                var1 = var3.sku_id;
                if(var4) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                var4 = delete var2[var1];
                _fun0004_ip = 36; continue _fun0004;
case 34:
                var2[var1] = var3;
case 36:
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
        var4[5] = var7;
        var2[4] = var4;
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
case 0:
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
                if(var1) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 39; continue _fun0005;
case 37:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 39:
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
case 0:
                var2 = arg1;
                var5 = this;
                var4 = var5.waitFor;
                var3 = _closure1_slot6;
                var3 = var4.bind(var5)(var3);
                var3 = null;
                if(!(var3 != var2)) { _fun0006_ip = 7; continue _fun0006 }
case 40:
                _closure1_slot11 = var2;
case 7:
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
case 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 != var3;
                var1 = undefined;
                if(!var2) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                var2 = _closure1_slot11;
                var1 = var2[var3];
case 41:
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
case 0:
                var2 = _closure1_slot11;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var4 = var1 == var2;
                var3 = undefined;
                if(var4) { _fun0008_ip = 43; continue _fun0008 }
case 41:
                var3 = var2.catalogFetchCooldown;
case 43:
                var1 = var1 == var3;
                if(var1) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                var2 = 86400000;
                var3 = var3 + var2;
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var1 = var3 < var2;
case 44:
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
case 0:
                var2 = _closure1_slot11;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var4 = var1 == var2;
                var3 = undefined;
                if(var4) { _fun0009_ip = 43; continue _fun0009 }
case 41:
                var3 = var2.unlockedPowerupsFetchCooldown;
case 43:
                var1 = var1 == var3;
                if(var1) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                var2 = 3600000;
                var3 = var3 + var2;
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var1 = var3 < var2;
case 44:
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
case 0:
                var4 = arg1;
                var3 = null;
                var1 = var3 != var4;
                if(!var1) { _fun0010_ip = 46; continue _fun0010 }
case 47:
                var2 = _closure1_slot11;
                var2 = var2[var4];
                var4 = var3 == var2;
                var3 = undefined;
                if(var4) { _fun0010_ip = 45; continue _fun0010 }
case 48:
                var3 = var2.hasFetchedPowerupCatalog;
case 45:
                var2 = true;
                var1 = var2 === var3;
case 46:
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
case 0:
                var4 = arg1;
                var3 = null;
                var1 = var3 != var4;
                if(!var1) { _fun0011_ip = 46; continue _fun0011 }
case 47:
                var2 = _closure1_slot11;
                var2 = var2[var4];
                var4 = var3 == var2;
                var3 = undefined;
                if(var4) { _fun0011_ip = 45; continue _fun0011 }
case 48:
                var3 = var2.hasFetchedUnlockedPowerups;
case 45:
                var2 = true;
                var1 = var2 === var3;
case 46:
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
case 0:
            var7 = arg1;
            var3 = null;
            var1 = var7;
            if(!(var3 != var1)) { _fun0012_ip = 49; continue _fun0012 }
case 42:
            var5 = global;
            var4 = var5.Object;
            var3 = var4.fromEntries;
            var6 = var5.Object;
            var5 = var6.entries;
            var7 = var5.bind(var6)(var7);
            var6 = var7.filter;
            var5 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var4 = arg1;
                    var1 = var4[Symbol.iterator];
                    var4 = var1().next;
                    var2 = var4().value;
                    var2 = var1;
                    var6 = undefined;
                    var3 = var2 === var6;
                    var2 = undefined;
                    if(var3) { _fun0013_ip = 50; continue _fun0013 }
case 51:
                    var5 = var4().value;
                    var4 = var1;
                    var4 = var4 === var6;
                    var2 = undefined;
                    var3 = var4;
                    if(var4) { _fun0013_ip = 50; continue _fun0013 }
case 52:
                    var2 = var5;
                    var3 = var4;
case 50:
                    if(var3) { _fun0013_ip = 53; continue _fun0013 }
case 54:
                    var1.return();
case 53:
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0013_ip = 55; continue _fun0013 }
case 56:
                    var3 = 'object';
                    var2 = typeof var2;
                    var1 = var3 === var2;
case 55:
                    return var1;
                }
            };
            var6 = var6.bind(var7)(var5);
            var5 = var6.map;
            var2 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var5 = arg1;
                    var1 = var5[Symbol.iterator];
                    var5 = var1().next;
                    var4 = var5().value;
                    var2 = var1;
                    var7 = undefined;
                    var3 = var2 === var7;
                    var2 = undefined;
                    if(var3) { _fun0014_ip = 57; continue _fun0014 }
case 51:
                    var2 = var4;
case 57:
                    var4 = undefined;
                    if(var3) { _fun0014_ip = 58; continue _fun0014 }
case 48:
                    var6 = var5().value;
                    var5 = var1;
                    var5 = var5 === var7;
                    var4 = undefined;
                    var3 = var5;
                    if(var5) { _fun0014_ip = 58; continue _fun0014 }
case 38:
                    var4 = var6;
                    var3 = var5;
case 58:
                    if(var3) { _fun0014_ip = 59; continue _fun0014 }
case 6:
                    var1.return();
case 59:
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = {};
                    var9 = var2;
                    var8 = var4;
                    var3 = copyDataProperties(var9, var8);
                    var6 = var4.allPowerups;
                    var3 = null;
                    if(!(var3 == var6)) { _fun0014_ip = 60; continue _fun0014 }
case 61:
                    var6 = {};
case 60:
                    var5 = 'allPowerups';
                    var2[4] = var6;
                    var6 = var4.powerupCatalog;
                    if(!(var3 == var6)) { _fun0014_ip = 62; continue _fun0014 }
case 63:
                    var6 = {};
case 62:
                    var5 = 'powerupCatalog';
                    var2[4] = var6;
                    var4 = var4.unlockedPowerups;
                    if(!(var3 == var4)) { _fun0014_ip = 64; continue _fun0014 }
case 65:
                    var4 = {};
case 64:
                    var3 = 'unlockedPowerups';
                    var2[2] = var4;
                    var1[1] = var2;
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var2);
            var1 = var3.bind(var4)(var2);
case 49:
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
        var4[5] = var8;
        var6 = 'powerupCatalog';
        var4[5] = var7;
        var6 = global;
        var7 = var6.Date;
        var6 = var7.now;
        var7 = var6.bind(var7)();
        var6 = 'catalogFetchCooldown';
        var4[5] = var7;
        var7 = true;
        var6 = 'hasFetchedPowerupCatalog';
        var4[5] = var7;
        var2[4] = var4;
        _closure1_slot11 = var2;
        return var1;
    };
    var2['GUILD_POWERUP_CATALOG_FETCH_SUCCESS'] = var9;
    var9 = function handleGuildBoostEntitlementsFetchSuccess(arg1) {
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
        var4[5] = var8;
        var6 = 'appliedBoosts';
        var4[5] = var7;
        var6 = global;
        var7 = var6.Date;
        var6 = var7.now;
        var7 = var6.bind(var7)();
        var6 = 'unlockedPowerupsFetchCooldown';
        var4[5] = var7;
        var7 = true;
        var6 = 'hasFetchedUnlockedPowerups';
        var4[5] = var7;
        var2[4] = var4;
        _closure1_slot11 = var2;
        return var1;
    };
    var2['GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS'] = var9;
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
    var9 = function handleGuildUpdated(arg1) {
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
        var2[4] = var6;
        var3[var4] = var2;
        return var1;
    };
    var2['GUILD_UPDATE'] = var9;
    var4 = function handleGameServerInstanceFetched(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
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
        var2[4] = var6;
        var3[var4] = var2;
        return var1;
    };
    var2['GAME_SERVER_FETCH_INSTANCES_SUCCESS'] = var4;
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