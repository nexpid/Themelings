// app/modules/premium/powerups/GuildPowerupsManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FAVORITES;
    var _closure1_slot11 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FAVORITES_RAW_GUILD_ID;
    var _closure1_slot12 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function GuildPowerupsManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot2;
                var3 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot13;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 84; continue _fun0002 }
 71:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 118; continue _fun0002;
 84:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 118:
                var1 = var3.bind(var4)(var5, var1);
                var3 = global;
                var3 = var3.Map;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var14 = var4;
                var3 = new var14[var3](var13);
                var5 = var3 instanceof Object ? var3 : var4;
                var4 = var5.set;
                var3 = _closure1_slot9;
                var2 = var1.handleSelectedGuildChange;
                var2 = var4.bind(var5)(var3, var2);
                var1['stores'] = var2;
                var2 = {};
                var4 = var1.handleEntitlementUpdate;
                var3 = var4.bind;
                var3 = var3.bind(var4)(var1);
                var2['GUILD_POWERUP_ENTITLEMENTS_CREATE'] = var3;
                var4 = var1.handleEntitlementUpdate;
                var3 = var4.bind;
                var3 = var3.bind(var4)(var1);
                var2['GUILD_POWERUP_ENTITLEMENTS_DELETE'] = var3;
                var4 = var1.handleAppliedBoostUpdate;
                var3 = var4.bind;
                var3 = var3.bind(var4)(var1);
                var2['GUILD_APPLIED_BOOSTS_UPDATE'] = var3;
                var1['actions'] = var2;
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
        var1 = 'handleSelectedGuildChange';
        var5['key'] = var1;
        var1 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure1_slot9;
                var2 = var3.getGuildId;
                var3 = var2.bind(var3)();
                var2 = null;
                if(!(var2 != var3)) { _fun0003_ip = 304; continue _fun0003 }
 26:
                var4 = _closure1_slot12;
                if(!(var3 !== var4)) { _fun0003_ip = 304; continue _fun0003 }
 37:
                var4 = _closure1_slot11;
                if(!(var3 !== var4)) { _fun0003_ip = 304; continue _fun0003 }
 48:
                var5 = _closure1_slot7;
                var4 = var5.getGuild;
                var7 = var4.bind(var5)(var3);
                if(!(var2 != var7)) { _fun0003_ip = 304; continue _fun0003 }
 69:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 11;
                var2 = var6[var2];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var9 = var2.VanityURLPerkExperiment;
                var8 = var9.trackExposure;
                var2 = {};
                var10 = var7.id;
                var2['guildId'] = var10;
                var10 = 'GuildPowerupsManager';
                var2['location'] = var10;
                var2 = var8.bind(var9)(var2);
                var2 = 12;
                var2 = var6[var2];
                var2 = var5.bind(var4)(var2);
                var9 = var2.GuildTagBadgePacksExperiment;
                var8 = var9.trackExposure;
                var2 = {};
                var11 = var7.id;
                var2['guildId'] = var11;
                var2['location'] = var10;
                var2 = var8.bind(var9)(var2);
                var2 = 13;
                var2 = var6[var2];
                var6 = var5.bind(var4)(var2);
                var5 = var6.getHasAllocateBoostPermission;
                var2 = _closure1_slot8;
                var2 = var5.bind(var6)(var2, var7);
                if(!var2) { _fun0003_ip = 304; continue _fun0003 }
 204:
                var5 = _closure1_slot10;
                var2 = var5.shouldFetchCatalogForGuild;
                var2 = var2.bind(var5)(var3);
                if(!var2) { _fun0003_ip = 253; continue _fun0003 }
 222:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 14;
                var2 = var6[var2];
                var5 = var5.bind(var4)(var2);
                var2 = var5.fetchPowerupCatalogForGuild;
                var2 = var2.bind(var5)(var3);
 253:
                var5 = _closure1_slot10;
                var2 = var5.shouldFetchPowerupsForGuild;
                var2 = var2.bind(var5)(var3);
                if(!var2) { _fun0003_ip = 304; continue _fun0003 }
 273:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 14;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.fetchGuildUnlockedPowerups;
                var1 = var1.bind(var2)(var3);
 304:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'handleEntitlementUpdate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var1 = arg1;
            var2 = var1.guildId;
            var1 = var3.refreshGuildPowerups;
            var1 = var1.bind(var3)(var2);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'handleAppliedBoostUpdate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var1 = arg1;
            var2 = var1.guildId;
            var1 = var3.refreshGuildPowerups;
            var1 = var1.bind(var3)(var2);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'refreshGuildPowerups';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = arg1;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var7 = var5.bind(var1)(var3);
                var6 = var7.getHasAllocateBoostPermission;
                var5 = _closure1_slot8;
                var8 = _closure1_slot7;
                var3 = var8.getGuild;
                var3 = var3.bind(var8)(var4);
                var5 = var6.bind(var7)(var5, var3);
                var3 = true;
                if(!(var3 === var5)) { _fun0004_ip = 118; continue _fun0004 }
 64:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 14;
                var2 = var5[var2];
                var6 = var3.bind(var1)(var2);
                var2 = var6.fetchGuildUnlockedPowerups;
                var2 = var2.bind(var6)(var4);
                var2 = 15;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.fetchAppliedGuildBoostsForGuild;
                var2 = var2.bind(var3)(var4);
 118:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/GuildPowerupsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();