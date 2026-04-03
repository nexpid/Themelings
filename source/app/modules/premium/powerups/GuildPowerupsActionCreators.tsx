// app/modules/premium/powerups/GuildPowerupsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.GUILD_POWERUP_APPLICATION_ID;
    var _closure1_slot3 = var7;
    var4 = var4.GuildPowerupType;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/GuildPowerupsActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function guildPowerupsAckNotification(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_POWERUPS_ACK_NOTIFICATION';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['guildPowerupsAckNotification'] = var4;
    var4 = function guildPowerupsResetNotifications() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_POWERUPS_RESET_NOTIFICATIONS';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['guildPowerupsResetNotifications'] = var4;
    var4 = function fetchPowerupCatalogForGuild(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var4 = true;
            var1 = arg2;
            if(!(var4 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.httpGetWithCountryCodeQuery;
            var1 = {};
            var7 = _closure1_slot5;
            var7 = var7.STORE_PUBLISHED_LISTINGS_SKUS;
            var1['url'] = var7;
            var7 = {};
            var8 = _closure1_slot3;
            var7['application_id'] = var8;
            var7['guild_id'] = var6;
            var1['query'] = var7;
            var1['oldFormErrors'] = var4;
            var4 = false;
            var1['rejectWithError'] = var4;
            var3 = var2.bind(var3)(var1);
            var2 = var3.then;
            var1 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = var1.body;
                var4 = var5.map;
                var2 = function(arg1) {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var1 = _closure3_slot0;
                    var2 = var1.body;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var8 = var4.bind(var5)(var2);
                var6 = var8.filter;
                var9 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 6;
                var5 = var7[var4];
                var4 = undefined;
                var5 = var9.bind(var4)(var5);
                var5 = var5.isNotNullish;
                var8 = var6.bind(var8)(var5);
                var6 = var8.sort;
                var5 = function(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.skuId;
                        var1 = arg2;
                        var1 = var1.skuId;
                        var2 = var2 >= var1;
                        var1 = -1;
                        if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var1 = 1;
case 4:
                        return var1;
                    }
                };
                var8 = var6.bind(var8)(var5);
                var6 = var8.reduce;
                var5 = {};
                var9 = {};
                var5['allPowerups'] = var9;
                var9 = {};
                var5['powerupCatalog'] = var9;
                var3 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = arg1;
                        var4 = arg2;
                        var5 = var1.allPowerups;
                        var3 = var1.powerupCatalog;
                        var2 = var4.skuId;
                        var5[var2] = var4;
                        var2 = var4.type;
                        var2 = var3[var2];
                        var6 = null;
                        if(!(var6 == var2)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                        var5 = var4.type;
                        var2 = new Array(0);
                        var3[var5] = var2;
case 6:
                        var2 = var4.type;
                        var3 = var3[var2];
                        var2 = var6 == var3;
                        if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                        var5 = var3.push;
                        var2 = var6 == var5;
case 8:
                        if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var4);
case 10:
                        return var1;
                    }
                };
                var3 = var6.bind(var8)(var3, var5);
                var6 = var3.allPowerups;
                var5 = var3.powerupCatalog;
                var3 = _closure1_slot1;
                var2 = 2;
                var2 = var7[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var7 = 'GUILD_POWERUP_CATALOG_FETCH_SUCCESS';
                var2['type'] = var7;
                var7 = _closure2_slot0;
                var2['guildId'] = var7;
                var2['allPowerups'] = var6;
                var2['powerupCatalog'] = var5;
                var2 = var3.bind(var4)(var2);
                var1 = var1.body;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
case 2:
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var4 = var7[var2];
            var3 = undefined;
            var4 = var10.bind(var3)(var4);
            var9 = var4.MOCK_LEVELS;
            var8 = var9.concat;
            var4 = var7[var2];
            var4 = var10.bind(var3)(var4);
            var4 = var4.MOCK_PERKS;
            var8 = var8.bind(var9)(var4);
            var4 = {};
            var9 = _closure1_slot4;
            var12 = var9.LEVEL;
            var11 = var7[var2];
            var11 = var10.bind(var3)(var11);
            var11 = var11.MOCK_LEVELS;
            var4[var12] = var11;
            var9 = var9.PERK;
            var2 = var7[var2];
            var2 = var10.bind(var3)(var2);
            var2 = var2.MOCK_PERKS;
            var4[var9] = var2;
            var2 = _closure1_slot1;
            var1 = 2;
            var1 = var7[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var7 = 'GUILD_POWERUP_CATALOG_FETCH_SUCCESS';
            var1['type'] = var7;
            var1['guildId'] = var6;
            var7 = var8.sort;
            var6 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.skuId;
                    var1 = arg2;
                    var1 = var1.skuId;
                    var2 = var2 >= var1;
                    var1 = -1;
                    if(!var2) { _fun0004_ip = 4; continue _fun0004 }
case 5:
                    var1 = 1;
case 4:
                    return var1;
                }
            };
            var8 = var7.bind(var8)(var6);
            var7 = var8.reduce;
            var6 = function(arg1, arg2) {
                var1 = arg1;
                var3 = arg2;
                var2 = var3.skuId;
                var1[var2] = var3;
                return var1;
            };
            var5 = {};
            var5 = var7.bind(var8)(var6, var5);
            var1['allPowerups'] = var5;
            var1['powerupCatalog'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var3['fetchPowerupCatalogForGuild'] = var4;
    var4 = function fetchGuildBoostEntitlements(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var8 = arg1;
            var6 = arguments[1];
            var _closure2_slot0 = var8;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0005_ip = 12; continue _fun0005 }
case 3:
            var6 = true;
case 12:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 4;
            var2 = var7[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.httpGetWithCountryCodeQuery;
            var2 = {};
            var7 = _closure1_slot5;
            var5 = var7.GUILD_POWERUPS;
            var5 = var5.bind(var7)(var8);
            var2['url'] = var5;
            var5 = {};
            var5['include_ends_at'] = var6;
            var2['query'] = var5;
            var5 = true;
            var2['oldFormErrors'] = var5;
            var5 = false;
            var2['rejectWithError'] = var5;
            var3 = var3.bind(var4)(var2);
            var2 = var3.then;
            var1 = function(arg1) {
                var6 = {};
                var _closure3_slot0 = var6;
                var5 = {};
                var _closure3_slot1 = var5;
                var2 = arg1;
                var3 = var2.body;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var4 = arg1;
                        var5 = var4.sku;
                        var3 = null;
                        var6 = var3 == var5;
                        var1 = undefined;
                        var2 = undefined;
                        if(var6) { _fun0006_ip = 13; continue _fun0006 }
case 14:
                        var5 = var5.tenant_metadata;
                        var6 = var3 == var5;
                        var2 = undefined;
                        if(var6) { _fun0006_ip = 13; continue _fun0006 }
case 15:
                        var5 = var5.guild_monetization;
                        var6 = var3 == var5;
                        var2 = undefined;
                        if(var6) { _fun0006_ip = 13; continue _fun0006 }
case 16:
                        var2 = var5.powerup;
case 13:
                        if(!(var3 == var2)) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                        var5 = var3 == var4;
                        var2 = undefined;
                        if(var5) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                        var5 = var4.sku;
                        var6 = var3 == var5;
                        var2 = undefined;
                        if(var6) { _fun0006_ip = 19; continue _fun0006 }
case 21:
                        var2 = var5.powerup_metadata;
case 19:
                        if(!(var3 == var2)) { _fun0006_ip = 17; continue _fun0006 }
case 22:
                        var5 = var4.sku;
                        var6 = var3 == var5;
                        var2 = undefined;
                        if(var6) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                        var5 = var5.tenant_metadata;
                        var6 = var3 == var5;
                        var2 = undefined;
                        if(var6) { _fun0006_ip = 23; continue _fun0006 }
case 25:
                        var5 = var5.guild_monetization;
                        var6 = var3 == var5;
                        var2 = undefined;
                        if(var6) { _fun0006_ip = 23; continue _fun0006 }
case 26:
                        var2 = var5.game_server;
case 23:
                        if(!(var3 != var2)) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                        var3 = _closure3_slot1;
                        var2 = var4.id;
                        var3[var2] = var4;
                        _fun0006_ip = 27; continue _fun0006;
case 17:
                        var3 = _closure3_slot0;
                        var2 = var4.sku_id;
                        var3[var2] = var4;
case 27:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var7 = 'GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS';
                var2['type'] = var7;
                var7 = _closure2_slot0;
                var2['guildId'] = var7;
                var2['unlockedPowerups'] = var6;
                var2['unlockedGameServers'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['fetchGuildBoostEntitlements'] = var4;
    var4 = function enablePowerupForGuild(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var7 = _closure1_slot5;
        var6 = var7.GUILD_POWERUP_TOGGLE;
        var5 = arg1;
        var4 = arg2;
        var4 = var6.bind(var7)(var5, var4);
        var1['url'] = var4;
        var4 = true;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['enablePowerupForGuild'] = var4;
    var2 = function disablePowerupForGuild(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {};
        var7 = _closure1_slot5;
        var6 = var7.GUILD_POWERUP_TOGGLE;
        var5 = arg1;
        var4 = arg2;
        var4 = var6.bind(var7)(var5, var4);
        var1['url'] = var4;
        var4 = true;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['disablePowerupForGuild'] = var2;
    return var1;
})();