// app/modules/premium/game_server/GameServerActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function fetchMyGameServers() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {'url': null, 'rejectWithError': true, 'oldFormErrors': true, 'retries': 3};
        var4 = _closure1_slot8;
        var4 = var4.GAME_SERVERS_ME;
        var1['url'] = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = arg1;
                var5 = var1.body;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var6 = 'GAME_SERVER_FETCH_MY_SERVERS_SUCCESS';
                var2['type'] = var6;
                var5 = var5.game_servers;
                var6 = null;
                if(!(var6 == var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = new Array(0);
case 2:
                var2['gameServers'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.GAME_SERVER_COLLECTION_ID;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.AnalyticEvents;
    var _closure1_slot7 = var8;
    var5 = var5.Endpoints;
    var _closure1_slot8 = var5;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/game_server/GameServerActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function fetchGameServerCatalog(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var10 = arg1;
            var3 = arguments[1];
            var _closure2_slot0 = var10;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = false;
case 4:
            if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = _closure1_slot4;
            var3 = var4.getCurrentUser;
            var6 = var3.bind(var4)();
            var4 = null;
            var5 = var4 == var6;
            var3 = undefined;
            if(var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var5 = var6.isStaff;
            var3 = var5.bind(var6)();
case 8:
            var9 = var4 != var3;
            if(!var9) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var9 = var3;
case 10:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 7;
            var3 = var8[var3];
            var5 = var7.bind(var1)(var3);
            var4 = var5.httpGetWithCountryCodeQuery;
            var3 = {};
            var13 = _closure1_slot8;
            var12 = var13.STOREFRONT_COLLECTION_WITH_PRODUCTS;
            var6 = _closure1_slot6;
            var6 = var12.bind(var13)(var6);
            var3['url'] = var6;
            var6 = {};
            var11 = _closure1_slot3;
            var11 = var11.locale;
            var6['locale'] = var11;
            var6['guild_id'] = var10;
            var6['include_unpublished_products'] = var9;
            var6['include_unpublished_collection'] = var9;
            var3['query'] = var6;
            var6 = true;
            var3['oldFormErrors'] = var6;
            var6 = 8;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.rejectWithMigratedError;
            var6 = var6.bind(var7)();
            var3['rejectWithError'] = var6;
            var6 = 2;
            var3['retries'] = var6;
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
                    var2 = 9;
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
                var1 = 5;
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
case 6:
            var3 = global;
            var4 = var3.setTimeout;
            var3 = function() {
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 5;
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
                var5 = 6;
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
    var3['fetchGameServerCatalog'] = var5;
    var5 = function fetchGameServerGlobalCatalog() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = _closure1_slot4;
            var1 = var2.getCurrentUser;
            var4 = var1.bind(var2)();
            var2 = null;
            var3 = var2 == var4;
            var6 = undefined;
            var1 = undefined;
            if(var3) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var3 = var4.isStaff;
            var1 = var3.bind(var4)();
case 12:
            var8 = var2 != var1;
            if(!var8) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var8 = var1;
case 14:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 7;
            var1 = var7[var1];
            var3 = var5.bind(var6)(var1);
            var2 = var3.httpGetWithCountryCodeQuery;
            var1 = {};
            var11 = _closure1_slot8;
            var10 = var11.STOREFRONT_COLLECTION_WITH_PRODUCTS;
            var4 = _closure1_slot6;
            var4 = var10.bind(var11)(var4);
            var1['url'] = var4;
            var4 = {};
            var9 = _closure1_slot3;
            var9 = var9.locale;
            var4['locale'] = var9;
            var4['include_unpublished_products'] = var8;
            var4['include_unpublished_collection'] = var8;
            var1['query'] = var4;
            var4 = true;
            var1['oldFormErrors'] = var4;
            var4 = 8;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.rejectWithMigratedError;
            var4 = var4.bind(var5)();
            var1['rejectWithError'] = var4;
            var4 = 2;
            var1['retries'] = var4;
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
                    var2 = 9;
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
                var1 = 5;
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
    var3['fetchGameServerGlobalCatalog'] = var5;
    var5 = function fetchGameServerInstances(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var8 = arg1;
            var1 = arguments[1];
            var _closure2_slot0 = var8;
            var6 = undefined;
            if(!(var1 === var6)) { _fun0004_ip = 4; continue _fun0004 }
case 5:
            var1 = false;
case 4:
            if(var1) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 8;
            var1 = var4[var1];
            var1 = var2.bind(var6)(var1);
            var4 = var1.HTTP;
            var2 = var4.get;
            var1 = {'url': null, 'rejectWithError': true, 'retries': 2};
            var7 = _closure1_slot8;
            var5 = var7.GAME_SERVERS;
            var5 = var5.bind(var7)(var8);
            var1['url'] = var5;
            var5 = arguments[2];
            var1['signal'] = var5;
            var4 = var2.bind(var4)(var1);
            var2 = var4.then;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.body;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var4 = var1.body;
                    var3 = var4.reduce;
                    var2 = function(arg1, arg2) {
                        var1 = arg1;
                        var5 = arg2;
                        var3 = var5.id;
                        var6 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 10;
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
                    var1 = 5;
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
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var4)(var1);
            _fun0004_ip = 20; continue _fun0004;
case 16:
            var2 = global;
            var5 = var2.setTimeout;
            var4 = function() {
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 5;
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
                var5 = 6;
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
case 20:
            return var1;
        }
    };
    var3['fetchGameServerInstances'] = var5;
    var5 = function fetchGameServerInstructions(arg1, arg2) {
        var8 = arg2;
        var2 = arg1;
        var _closure2_slot0 = var2;
        var _closure2_slot1 = var8;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 7;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.httpGetWithCountryCodeQuery;
        var2 = {};
        var7 = _closure1_slot8;
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
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = arg1;
                var3 = var2.body;
                var1 = null;
                if(!(var1 != var3)) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                var2 = var2.body;
                var2 = var2.tenant_metadata;
                var5 = var1 == var2;
                var3 = undefined;
                var4 = undefined;
                if(var5) { _fun0006_ip = 23; continue _fun0006 }
case 12:
                var2 = var2.guild_monetization;
                var5 = var1 == var2;
                var4 = undefined;
                if(var5) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                var2 = var2.game_server;
                var5 = var1 == var2;
                var4 = undefined;
                if(var5) { _fun0006_ip = 23; continue _fun0006 }
case 25:
                var2 = var2.instructions;
                var4 = var2.pc;
case 23:
                if(!(var1 == var4)) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                var4 = new Array(0);
case 26:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 5;
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
case 21:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['fetchGameServerInstructions'] = var5;
    var5 = function acceptGameServerToS(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            if(!var1) { _fun0007_ip = 28; continue _fun0007 }
case 29:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 11;
            var1 = var3[var1];
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var3 = var4.track;
            var1 = _closure1_slot7;
            var2 = var1.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED;
            var1 = {};
            var7 = _closure1_slot4;
            var6 = var7.getCurrentUser;
            var6 = var6.bind(var7)();
            var7 = null;
            var7 = var7 == var6;
            if(var7) { _fun0007_ip = 30; continue _fun0007 }
case 11:
            var5 = var6.id;
case 30:
            var1['user_id'] = var5;
            var5 = arg2;
            var1['provider'] = var5;
            var1 = var3.bind(var4)(var2, var1);
case 28:
            var1 = undefined;
            return var1;
        }
    };
    var3['acceptGameServerToS'] = var5;
    var5 = function resetGameServerRegionState() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
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
    var3['resetGameServerRegionState'] = var5;
    var5 = function updateGameServerRegionPingState(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
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
    var3['updateGameServerRegionPingState'] = var5;
    var5 = function enableGameServerForGuild(arg1, arg2, arg3, arg4) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var7 = _closure1_slot8;
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
    var3['enableGameServerForGuild'] = var5;
    var5 = function updateGameServerForGuild(arg1, arg2, arg3, arg4) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var7 = _closure1_slot8;
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
    var3['updateGameServerForGuild'] = var5;
    var5 = function disableGameServerForGuild(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {};
        var7 = _closure1_slot8;
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
    var3['disableGameServerForGuild'] = var5;
    var5 = function fetchGameServerRegions(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {'url': null, 'rejectWithError': true, 'oldFormErrors': true, 'retries': 3};
        var6 = _closure1_slot8;
        var5 = var6.GAME_SERVER_REGIONS;
        var4 = arg1;
        var4 = var5.bind(var6)(var4);
        var1['url'] = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg1) {
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 5;
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
            var5 = 12;
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
    var3['fetchGameServerRegions'] = var5;
    var5 = function fetchMyGameServerRegions() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {'url': null, 'rejectWithError': true, 'oldFormErrors': true, 'retries': 3};
        var4 = _closure1_slot8;
        var4 = var4.GAME_SERVER_MY_REGIONS;
        var1['url'] = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg1) {
            var5 = arg1;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 5;
            var2 = var10[var1];
            var1 = undefined;
            var4 = var9.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'GAME_SERVER_FETCH_REGIONS_SUCCESS';
            var2['type'] = var6;
            var6 = var5.body;
            var8 = var6.regions;
            var7 = var8.map;
            var6 = 12;
            var6 = var10[var6];
            var6 = var9.bind(var1)(var6);
            var8 = var7.bind(var8)(var6);
            var7 = var8.sort;
            var6 = function(arg1, arg2) {
                var1 = arg1;
                var3 = var1.name;
                var2 = var3.localeCompare;
                var1 = arg2;
                var1 = var1.name;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var2['regions'] = var6;
            var5 = var5.body;
            var6 = var5.creation_disabled;
            var5 = true;
            var5 = var5 === var6;
            var2['creationDisabled'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['fetchMyGameServerRegions'] = var5;
    var3['fetchMyGameServers'] = var4;
    var4 = function optimisticallyMarkGameServerResizing(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot5;
            var2 = var3.getGameServers;
            var3 = var2.bind(var3)();
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.subscription_id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var6 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 != var6)) { _fun0008_ip = 31; continue _fun0008 }
case 32:
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 5;
            var1 = var8[var1];
            var7 = undefined;
            var3 = var2.bind(var7)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'GAME_SERVER_UPDATE';
            var1['type'] = var4;
            var1['guildId'] = var7;
            var4 = {};
            var10 = var4;
            var9 = var6;
            var6 = copyDataProperties(var10, var9);
            var6 = _closure1_slot0;
            var5 = 13;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.GameServerStatus;
            var6 = var5.STARTING;
            var5 = 'status';
            var4[4] = var6;
            var1['gameServer'] = var4;
            var1 = var2.bind(var3)(var1);
case 31:
            var1 = undefined;
            return var1;
        }
    };
    var3['optimisticallyMarkGameServerResizing'] = var4;
    var4 = function updateMyGameServerName(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var6 = arg2;
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot5;
            var2 = var3.getGameServers;
            var4 = var2.bind(var3)();
            var3 = var4.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.subscription_id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var3.bind(var4)(var2);
            var2 = null;
            if(!(var2 != var5)) { _fun0009_ip = 33; continue _fun0009 }
case 34:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 5;
            var2 = var8[var2];
            var4 = undefined;
            var9 = var3.bind(var4)(var2);
            var3 = var9.dispatch;
            var2 = {};
            var10 = 'GAME_SERVER_UPDATE';
            var2['type'] = var10;
            var2['guildId'] = var4;
            var10 = {};
            var13 = var10;
            var12 = var5;
            var11 = copyDataProperties(var13, var12);
            var11 = 'name';
            var10[10] = var6;
            var2['gameServer'] = var10;
            var2 = var3.bind(var9)(var2);
            var3 = _closure1_slot0;
            var2 = 8;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.HTTP;
            var3 = var4.patch;
            var2 = {};
            var8 = _closure1_slot8;
            var7 = var8.GAME_SERVER_ME;
            var5 = var5.id;
            var5 = var7.bind(var8)(var5);
            var2['url'] = var5;
            var5 = {};
            var5['name'] = var6;
            var2['body'] = var5;
            var5 = true;
            var2['rejectWithError'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function() {
                var2 = _closure1_slot9;
                var1 = undefined;
                var4 = var2.bind(var1)();
                var3 = var4.catch;
                var2 = function() {
                    var1 = undefined;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = function(arg1) {
                var2 = _closure1_slot9;
                var1 = undefined;
                var3 = var2.bind(var1)();
                var2 = var3.catch;
                var1 = function() {
                    var1 = undefined;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = arg1;
                throw var1;
            };
            var1 = var2.bind(var3)(var1);
            _fun0009_ip = 35; continue _fun0009;
case 33:
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.resolve;
            var1 = var2.bind(var3)();
case 35:
            return var1;
        }
    };
    var3['updateMyGameServerName'] = var4;
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
        var7 = _closure1_slot8;
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
            var1 = 5;
            var2 = var7[var1];
            var1 = undefined;
            var4 = var6.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'GAME_SERVER_UPDATE_INSTANCE_SUCCESS';
            var2['type'] = var5;
            var5 = _closure2_slot0;
            var2['guildId'] = var5;
            var5 = 10;
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