// app/modules/premium/game_server/GameServerActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GAME_SERVER_COLLECTION_ID;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot6 = var7;
    var4 = var4.Endpoints;
    var _closure1_slot7 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/game_server/GameServerActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchGameServerCatalog(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var3 = arguments[1];
            var _closure2_slot0 = var8;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = false;
case 2:
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot4;
            var3 = var4.getCurrentUser;
            var6 = var3.bind(var4)();
            var4 = null;
            var5 = var4 == var6;
            var3 = undefined;
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var6.isStaff;
            var3 = var5.bind(var6)();
case 6:
            var7 = var4 != var3;
            if(!var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var3;
case 8:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 6;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.httpGetWithCountryCodeQuery;
            var3 = {'url': null, 'query': null, 'oldFormErrors': true, 'rejectWithError': false, 'retries': 2};
            var11 = _closure1_slot7;
            var10 = var11.STOREFRONT_COLLECTION_WITH_PRODUCTS;
            var6 = _closure1_slot5;
            var6 = var10.bind(var11)(var6);
            var3['url'] = var6;
            var6 = {};
            var9 = _closure1_slot3;
            var9 = var9.locale;
            var6['locale'] = var9;
            var6['guild_id'] = var8;
            var6['include_unpublished_products'] = var7;
            var6['include_unpublished_collection'] = var7;
            var3['query'] = var6;
            var5 = var4.bind(var5)(var3);
            var4 = var5.then;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.body;
                var4 = var1.products;
                var3 = var4.reduce;
                var2 = function(arg1, arg2) {
                    var1 = arg1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.productToGameServerGame;
                    var2 = arg2;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.id;
                    var1[var2] = var3;
                    return var1;
                };
                var1 = {};
                var5 = var3.bind(var4)(var2, var1);
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var6 = 'GAME_SERVER_FETCH_CATALOG_SUCCESS';
                var2['type'] = var6;
                var6 = _closure2_slot0;
                var2['guildId'] = var6;
                var2['catalog'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            return var3;
case 4:
            var3 = global;
            var4 = var3.setTimeout;
            var3 = function() {
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 4;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var6 = 'GAME_SERVER_FETCH_CATALOG_SUCCESS';
                var2['type'] = var6;
                var6 = _closure2_slot0;
                var2['guildId'] = var6;
                var6 = _closure1_slot0;
                var5 = 5;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var8 = var5.GAME_SERVER_GAME_MOCKS;
                var7 = var8.reduce;
                var6 = function(arg1, arg2) {
                    var1 = arg1;
                    var3 = arg2;
                    var2 = var3.id;
                    var1[var2] = var3;
                    return var1;
                };
                var5 = {};
                var5 = var7.bind(var8)(var6, var5);
                var2['catalog'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = 5000;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var3['fetchGameServerCatalog'] = var4;
    var4 = function fetchGameServerGlobalCatalog() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot4;
            var1 = var2.getCurrentUser;
            var5 = var1.bind(var2)();
            var2 = null;
            var4 = var2 == var5;
            var3 = undefined;
            var1 = undefined;
            if(var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = var5.isStaff;
            var1 = var4.bind(var5)();
case 10:
            var5 = var2 != var1;
            if(!var5) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var5 = var1;
case 12:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.httpGetWithCountryCodeQuery;
            var1 = {'url': null, 'query': null, 'oldFormErrors': true, 'rejectWithError': false, 'retries': 2};
            var8 = _closure1_slot7;
            var7 = var8.STOREFRONT_COLLECTION_WITH_PRODUCTS;
            var4 = _closure1_slot5;
            var4 = var7.bind(var8)(var4);
            var1['url'] = var4;
            var4 = {};
            var6 = _closure1_slot3;
            var6 = var6.locale;
            var4['locale'] = var6;
            var4['include_unpublished_products'] = var5;
            var4['include_unpublished_collection'] = var5;
            var1['query'] = var4;
            var3 = var2.bind(var3)(var1);
            var2 = var3.then;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.body;
                var4 = var1.products;
                var3 = var4.reduce;
                var2 = function(arg1, arg2) {
                    var1 = arg1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.productToGameServerGame;
                    var2 = arg2;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.id;
                    var1[var2] = var3;
                    return var1;
                };
                var1 = {};
                var5 = var3.bind(var4)(var2, var1);
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var6 = 'GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS';
                var2['type'] = var6;
                var2['catalog'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['fetchGameServerGlobalCatalog'] = var4;
    var4 = function fetchGameServerInstances(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = arg1;
            var1 = arguments[1];
            var _closure2_slot0 = var8;
            var6 = undefined;
            if(!(var1 === var6)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var1 = false;
case 2:
            if(var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 8;
            var1 = var4[var1];
            var1 = var2.bind(var6)(var1);
            var4 = var1.HTTP;
            var2 = var4.get;
            var1 = {'url': null, 'rejectWithError': true, 'retries': 2};
            var7 = _closure1_slot7;
            var5 = var7.GAME_SERVERS;
            var5 = var5.bind(var7)(var8);
            var1['url'] = var5;
            var5 = arguments[2];
            var1['signal'] = var5;
            var4 = var2.bind(var4)(var1);
            var2 = var4.then;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.body;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var4 = var1.body;
                    var3 = var4.reduce;
                    var2 = function(arg1, arg2) {
                        var1 = arg1;
                        var5 = arg2;
                        var3 = var5.id;
                        var6 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 9;
                        var2 = var4[var2];
                        var4 = undefined;
                        var2 = var6.bind(var4)(var2);
                        var2 = var2.bind(var4)(var5);
                        var1[var3] = var2;
                        return var1;
                    };
                    var1 = {};
                    var4 = var3.bind(var4)(var2, var1);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var5 = 'GAME_SERVER_FETCH_INSTANCES_SUCCESS';
                    var1['type'] = var5;
                    var5 = _closure2_slot0;
                    var1['guildId'] = var5;
                    var1['instances'] = var4;
                    var1 = var2.bind(var3)(var1);
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var4)(var1);
            _fun0003_ip = 18; continue _fun0003;
case 14:
            var2 = global;
            var5 = var2.setTimeout;
            var4 = function() {
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 4;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var6 = 'GAME_SERVER_FETCH_INSTANCES_SUCCESS';
                var2['type'] = var6;
                var6 = _closure2_slot0;
                var2['guildId'] = var6;
                var6 = _closure1_slot0;
                var5 = 5;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var8 = var5.GAME_SERVER_INSTANCE_MOCKS;
                var7 = var8.reduce;
                var6 = function(arg1, arg2) {
                    var1 = arg1;
                    var3 = arg2;
                    var2 = var3.id;
                    var1[var2] = var3;
                    return var1;
                };
                var5 = {};
                var5 = var7.bind(var8)(var6, var5);
                var2['instances'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = 5000;
            var3 = var5.bind(var6)(var4, var3);
            var3 = var2.Promise;
            var2 = var3.resolve;
            var1 = var2.bind(var3)();
case 18:
            return var1;
        }
    };
    var3['fetchGameServerInstances'] = var4;
    var4 = function fetchGameServerInstructions(arg1, arg2) {
        var8 = arg2;
        var2 = arg1;
        var _closure2_slot0 = var2;
        var _closure2_slot1 = var8;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.httpGetWithCountryCodeQuery;
        var2 = {};
        var7 = _closure1_slot7;
        var5 = var7.STOREFRONT_PRODUCT_BY_SKU_ID;
        var5 = var5.bind(var7)(var8);
        var2['url'] = var5;
        var5 = {};
        var6 = _closure1_slot3;
        var6 = var6.locale;
        var5['locale'] = var6;
        var2['query'] = var5;
        var5 = true;
        var2['rejectWithError'] = var5;
        var5 = 3;
        var2['retries'] = var5;
        var3 = var3.bind(var4)(var2);
        var2 = var3.then;
        var1 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var3 = var2.body;
                var1 = null;
                if(!(var1 != var3)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var2 = var2.body;
                var2 = var2.tenant_metadata;
                var5 = var1 == var2;
                var3 = undefined;
                var4 = undefined;
                if(var5) { _fun0005_ip = 21; continue _fun0005 }
case 10:
                var2 = var2.guild_monetization;
                var5 = var1 == var2;
                var4 = undefined;
                if(var5) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                var2 = var2.game_server;
                var5 = var1 == var2;
                var4 = undefined;
                if(var5) { _fun0005_ip = 21; continue _fun0005 }
case 23:
                var2 = var2.instructions;
                var4 = var2.pc;
case 21:
                if(!(var1 == var4)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                var4 = new Array(0);
case 24:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS';
                var1['type'] = var5;
                var6 = _closure2_slot0;
                var1['guildId'] = var6;
                var5 = _closure2_slot1;
                var1['skuId'] = var5;
                var1['instructions'] = var4;
                var1 = var2.bind(var3)(var1);
case 19:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['fetchGameServerInstructions'] = var4;
    var4 = function acceptGameServerToS(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            if(!var1) { _fun0006_ip = 26; continue _fun0006 }
case 27:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var3 = var4.track;
            var1 = _closure1_slot6;
            var2 = var1.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED;
            var1 = {};
            var7 = _closure1_slot4;
            var6 = var7.getCurrentUser;
            var6 = var6.bind(var7)();
            var7 = null;
            var7 = var7 == var6;
            if(var7) { _fun0006_ip = 28; continue _fun0006 }
case 9:
            var5 = var6.id;
case 28:
            var1['user_id'] = var5;
            var5 = arg2;
            var1['provider'] = var5;
            var1 = var3.bind(var4)(var2, var1);
case 26:
            var1 = undefined;
            return var1;
        }
    };
    var3['acceptGameServerToS'] = var4;
    var4 = function resetGameServerRegionState() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GAME_SERVER_REGION_PING_STATE_RESET';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetGameServerRegionState'] = var4;
    var4 = function updateGameServerRegionPingState(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GAME_SERVER_REGION_PING_STATE_UPDATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['pingUrl'] = var5;
        var5 = arg2;
        var2['state'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateGameServerRegionPingState'] = var4;
    var4 = function enableGameServerForGuild(arg1, arg2, arg3, arg4) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var7 = _closure1_slot7;
        var6 = var7.GUILD_POWERUP_TOGGLE;
        var5 = arg1;
        var4 = arg2;
        var4 = var6.bind(var7)(var5, var4);
        var1['url'] = var4;
        var4 = {};
        var5 = arg3;
        var4['game_server_name'] = var5;
        var5 = arg4;
        var4['game_server_region'] = var5;
        var1['body'] = var4;
        var4 = true;
        var1['rejectWithError'] = var4;
        var1['oldFormErrors'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['enableGameServerForGuild'] = var4;
    var4 = function updateGameServerForGuild(arg1, arg2, arg3, arg4) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var7 = _closure1_slot7;
        var6 = var7.GUILD_POWERUP_UPDATE;
        var5 = arg1;
        var4 = arg2;
        var4 = var6.bind(var7)(var5, var4);
        var1['url'] = var4;
        var4 = {};
        var5 = arg4;
        var4['game_server_name'] = var5;
        var5 = arg3;
        var4['sku_id'] = var5;
        var1['body'] = var4;
        var4 = true;
        var1['rejectWithError'] = var4;
        var1['oldFormErrors'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['updateGameServerForGuild'] = var4;
    var4 = function disableGameServerForGuild(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {};
        var7 = _closure1_slot7;
        var6 = var7.GUILD_POWERUP_TOGGLE;
        var5 = arg1;
        var4 = arg2;
        var4 = var6.bind(var7)(var5, var4);
        var1['url'] = var4;
        var4 = {};
        var5 = arg3;
        var4['entitlement_id'] = var5;
        var1['query'] = var4;
        var4 = true;
        var1['rejectWithError'] = var4;
        var1['oldFormErrors'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['disableGameServerForGuild'] = var4;
    var4 = function fetchGameServerRegions(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {'url': null, 'rejectWithError': true, 'oldFormErrors': true, 'retries': 3};
        var6 = _closure1_slot7;
        var5 = var6.GAME_SERVER_REGIONS;
        var4 = arg1;
        var4 = var5.bind(var6)(var4);
        var1['url'] = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg1) {
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 4;
            var2 = var9[var1];
            var1 = undefined;
            var4 = var8.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'GAME_SERVER_FETCH_REGIONS_SUCCESS';
            var2['type'] = var5;
            var5 = arg1;
            var7 = var5.body;
            var6 = var7.map;
            var5 = 11;
            var5 = var9[var5];
            var5 = var8.bind(var1)(var5);
            var7 = var6.bind(var7)(var5);
            var6 = var7.sort;
            var5 = function(arg1, arg2) {
                var1 = arg1;
                var3 = var1.name;
                var2 = var3.localeCompare;
                var1 = arg2;
                var1 = var1.name;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var2['regions'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['fetchGameServerRegions'] = var4;
    var2 = function wakeGameServer(arg1, arg2) {
        var8 = arg1;
        var _closure2_slot0 = var8;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 8;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var4 = var2.HTTP;
        var3 = var4.post;
        var2 = {};
        var7 = _closure1_slot7;
        var6 = var7.GAME_SERVER_WAKE;
        var5 = arg2;
        var5 = var6.bind(var7)(var8, var5);
        var2['url'] = var5;
        var5 = true;
        var2['rejectWithError'] = var5;
        var3 = var3.bind(var4)(var2);
        var2 = var3.then;
        var1 = function(arg1) {
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 4;
            var2 = var7[var1];
            var1 = undefined;
            var4 = var6.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'GAME_SERVER_UPDATE_INSTANCE_SUCCESS';
            var2['type'] = var5;
            var5 = _closure2_slot0;
            var2['guildId'] = var5;
            var5 = 9;
            var5 = var7[var5];
            var6 = var6.bind(var1)(var5);
            var5 = arg1;
            var5 = var5.body;
            var5 = var6.bind(var1)(var5);
            var2['instance'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['wakeGameServer'] = var2;
    return var1;
})();