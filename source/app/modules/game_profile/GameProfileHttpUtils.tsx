// app/modules/game_profile/GameProfileHttpUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var1 = function _getShopCollection() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var6 = var9;
                    var7 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var5 = 4;
                    var4 = var2[var5];
                    var2 = undefined;
                    var8 = var7.bind(var2)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var10 = 'GAME_PROFILE_GET_SHOP_COLLECTION_START';
                    var4['type'] = var10;
                    var4['collectionId'] = var9;
                    var4 = var7.bind(var8)(var4);
case 4: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 5;
                    var4 = var8[var4];
                    var8 = var7.bind(var2)(var4);
                    var7 = var8.httpGetWithCountryCodeQuery;
                    var4 = {};
                    var11 = _closure1_slot6;
                    var10 = var11.STOREFRONT_COLLECTION_WITH_PRODUCTS;
                    var9 = var6;
                    var9 = var10.bind(var11)(var9);
                    var4['url'] = var9;
                    var9 = {};
                    var10 = _closure1_slot4;
                    var10 = var10.locale;
                    var9['locale'] = var10;
                    var4['query'] = var9;
                    var9 = false;
                    var4['rejectWithError'] = var9;
                    var9 = 2;
                    var4['retries'] = var9;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=163);
case 5:
                    return var4;
case 6:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var7 = var4.body;
                    var9 = var7.products;
                    var8 = var9.flatMap;
                    var7 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.sku_ids;
                        return var1;
                    };
                    var10 = var8.bind(var9)(var7);
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var5];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var11 = 'GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS';
                    var7['type'] = var11;
                    var11 = var6;
                    var7['collectionId'] = var11;
                    var7['skuIds'] = var10;
                    var7 = var8.bind(var9)(var7);
case 9: // try_end0
                    _fun0001_ip = 10; continue _fun0001;
case 7:
                    return var4;
case 11: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'GAME_PROFILE_GET_SHOP_COLLECTION_ERROR';
                    var3['type'] = var7;
                    var3['collectionId'] = var6;
                    var3 = var4.bind(var5)(var3);
case 10:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function _getGameAnnouncements() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var13 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 3:
                    var6 = var13;
                    var4 = arg2;
                    var2 = undefined;
                    var14 = undefined;
                    var11 = undefined;
                    var9 = undefined;
                    var10 = undefined;
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 4;
                    var7 = var7[var5];
                    var12 = var8.bind(var2)(var7);
                    var8 = var12.dispatch;
                    var7 = {};
                    var15 = 'GAME_PROFILE_GET_ANNOUNCEMENTS_START';
                    var7['type'] = var15;
                    var7['gameId'] = var13;
                    var7 = var8.bind(var12)(var7);
case 13: // try_start_0
                    var9 = {};
                    var7 = var4;
                    var12 = null;
                    var8 = var12 == var7;
                    var7 = undefined;
                    if(var8) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var8 = var4;
                    var7 = var8.limit;
case 14:
                    if(!(var12 != var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var7 = var9;
                    var4 = var4.limit;
                    var7['limit'] = var4;
case 16:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 6;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var8 = var4.HTTP;
                    var7 = var8.get;
                    var4 = {};
                    var16 = _closure1_slot6;
                    var15 = var16.GAME_ANNOUNCEMENTS;
                    var13 = var6;
                    var13 = var15.bind(var16)(var13);
                    var4['url'] = var13;
                    var4['query'] = var9;
                    var9 = false;
                    var4['rejectWithError'] = var9;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=195);
case 18:
                    return var4;
case 19:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var13 = var4.body;
                    var10 = var13;
                    var8 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var7 = var17[var5];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var15 = 'GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS';
                    var7['type'] = var15;
                    var15 = var6;
                    var7['gameId'] = var15;
                    var16 = _closure1_slot0;
                    var15 = 10;
                    var15 = var17[var15];
                    var17 = var16.bind(var2)(var15);
                    var16 = var17.toAnnouncementMessages;
                    var15 = var13.messages;
                    var15 = var16.bind(var17)(var15);
                    var7['messages'] = var15;
                    var13 = var13.channel_id;
                    var14 = var13;
                    var15 = var12 != var13;
                    var13 = undefined;
                    if(!var15) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var13 = var14;
case 22:
                    var7['channelId'] = var13;
                    var10 = var10.guild_id;
                    var11 = var10;
                    var12 = var12 != var10;
                    var10 = undefined;
                    if(!var12) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var10 = var11;
case 24:
                    var7['guildId'] = var10;
                    var7 = var8.bind(var9)(var7);
case 26: // try_end0
                    _fun0002_ip = 27; continue _fun0002;
case 20:
                    return var4;
case 28: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR';
                    var3['type'] = var7;
                    var3['gameId'] = var6;
                    var3 = var4.bind(var5)(var3);
case 27:
                    return var2;
case 12:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var9 = var11.bind(var1)(var4);
    var _closure1_slot5 = var9;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot6 = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var _closure4_slot0 = var8;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var6.bind(var3)(var2);
                    var7 = var2.HTTP;
                    var6 = var7.get;
                    var2 = {};
                    var10 = _closure1_slot6;
                    var9 = var10.SIMILAR_GAMES;
                    var9 = var9.bind(var10)(var8);
                    var2['url'] = var9;
                    var9 = true;
                    var2['rejectWithError'] = var9;
                    var2 = var6.bind(var7)(var2);
                    SaveGenerator(address=90);
case 31:
                    return var2;
case 32:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                    var6 = var2.body;
                    var7 = var6.similar_games;
                    var6 = null;
                    if(!(var6 == var7)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var7 = new Array(0);
case 35:
                    var6 = var7.filter;
                    var5 = function(arg1) {
                        var2 = _closure4_slot0;
                        var1 = arg1;
                        var1 = var1 !== var2;
                        return var1;
                    };
                    var7 = var6.bind(var7)(var5);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 4;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var9 = 'GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS';
                    var4['type'] = var9;
                    var4['gameId'] = var8;
                    var4['games'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 33:
                    return var2;
case 29:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createFetchStore;
    var4 = {};
    var10 = function getQueryId(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg2;
            var1 = null;
            if(!var2) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = 'similar-games:';
            var2 = arg1;
            var1 = var4.bind(var3)(var2);
case 37:
            return var1;
        }
    };
    var4['getQueryId'] = var10;
    var10 = function get(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot5;
            var2 = var3.getSimilarGames;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var1 = var2;
case 39:
            return var1;
        }
    };
    var4['get'] = var10;
    var10 = function load(arg1) {
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['load'] = var10;
    var10 = {};
    var12 = function backoff() {
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var1 = 8;
        var1 = var7[var1];
        var5 = undefined;
        var4 = var6.bind(var5)(var1);
        var1 = 9;
        var2 = var7[var1];
        var2 = var6.bind(var5)(var2);
        var2 = var2.Millis;
        var3 = var2.SECOND;
        var2 = 5;
        var3 = var2 * var3;
        var1 = var7[var1];
        var1 = var6.bind(var5)(var1);
        var1 = var1.Millis;
        var1 = var1.MINUTE;
        var8 = var2 * var1;
        var2 = var4.prototype;
        var2 = Object.create(var2, {constructor: {value: var4}});
        var10 = var2;
        var9 = var3;
        var1 = new var10[var4](var9, var8, var7);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var10['backoff'] = var12;
    var4['retryConfig'] = var10;
    var10 = 9;
    var10 = var7[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.Seconds;
    var10 = var10.MINUTE;
    var4['failureStaleAfter'] = var10;
    var4 = var5.bind(var8)(var9, var4);
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/game_profile/GameProfileHttpUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getShopCollection() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getShopCollection'] = var5;
    var3['useSimilarGameIds'] = var4;
    var2 = function getGameAnnouncements() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getGameAnnouncements'] = var2;
    return var1;
})();