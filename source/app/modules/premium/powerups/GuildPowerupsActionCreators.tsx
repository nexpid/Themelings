// app/modules/premium/powerups/GuildPowerupsActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var4 = true;
            var1 = arg2;
            if(!(var4 !== var1)) { _fun0001_ip = 119; continue _fun0001 }
 18:
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
 0:
                        var1 = arg1;
                        var2 = var1.skuId;
                        var1 = arg2;
                        var1 = var1.skuId;
                        var2 = var2 >= var1;
                        var1 = -1;
                        if(!var2) { _fun0002_ip = 34; continue _fun0002 }
 31:
                        var1 = 1;
 34:
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
 0:
                        var1 = arg1;
                        var4 = arg2;
                        var5 = var1.allPowerups;
                        var3 = var1.powerupCatalog;
                        var2 = var4.skuId;
                        var5[var2] = var4;
                        var2 = var4.type;
                        var2 = var3[var2];
                        var6 = null;
                        if(!(var6 == var2)) { _fun0003_ip = 56; continue _fun0003 }
 43:
                        var5 = var4.type;
                        var2 = new Array(0);
                        var3[var5] = var2;
 56:
                        var2 = var4.type;
                        var3 = var3[var2];
                        var2 = var6 == var3;
                        if(var2) { _fun0003_ip = 81; continue _fun0003 }
 72:
                        var5 = var3.push;
                        var2 = var6 == var5;
 81:
                        if(var2) { _fun0003_ip = 94; continue _fun0003 }
 84:
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var4);
 94:
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
 119:
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
 0:
                    var1 = arg1;
                    var2 = var1.skuId;
                    var1 = arg2;
                    var1 = var1.skuId;
                    var2 = var2 >= var1;
                    var1 = -1;
                    if(!var2) { _fun0004_ip = 34; continue _fun0004 }
 31:
                    var1 = 1;
 34:
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
    var4 = function fetchGuildUnlockedPowerups(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var8 = arg1;
            var6 = arguments[1];
            var _closure2_slot0 = var8;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0005_ip = 20; continue _fun0005 }
 18:
            var6 = true;
 20:
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
                var1 = arg1;
                var5 = var1.body;
                var4 = var5.reduce;
                var3 = function(arg1, arg2) {
                    var1 = arg1;
                    var3 = arg2;
                    var2 = var3.sku_id;
                    var1[var2] = var3;
                    return var1;
                };
                var2 = {};
                var5 = var4.bind(var5)(var3, var2);
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.dispatch;
                var2 = {};
                var6 = 'GUILD_UNLOCKED_POWERUPS_FETCH_SUCCESS';
                var2['type'] = var6;
                var6 = _closure2_slot0;
                var2['guildId'] = var6;
                var2['unlockedPowerups'] = var5;
                var2 = var3.bind(var4)(var2);
                var1 = var1.body;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['fetchGuildUnlockedPowerups'] = var4;
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