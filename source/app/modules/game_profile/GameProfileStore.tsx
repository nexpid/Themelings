// app/modules/game_profile/GameProfileStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = {};
    var _closure1_slot5 = var2;
    var2 = {};
    var _closure1_slot6 = var2;
    var2 = {};
    var _closure1_slot7 = var2;
    var2 = {};
    var _closure1_slot8 = var2;
    var2 = {};
    var _closure1_slot9 = var2;
    var2 = {};
    var _closure1_slot10 = var2;
    var2 = {};
    var _closure1_slot11 = var2;
    var2 = {};
    var _closure1_slot12 = var2;
    var2 = null;
    var _closure1_slot13 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function GameProfileStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
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
        var1 = 'getSimilarGames';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var2 = _closure1_slot5;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'getSimilarGamesError';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot6;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getShopCollectionSkuIds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot7;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'hasShopCollectionBeenFetched';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure1_slot8;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var1 = var2;
case 9:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isShopCollectionFetching';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = _closure1_slot9;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                var1 = var2;
case 9:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getAnnouncements';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot10;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'hasAnnouncementsBeenFetched';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure1_slot11;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0005_ip = 9; continue _fun0005 }
case 10:
                var1 = var2;
case 9:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isAnnouncementsFetching';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = _closure1_slot12;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0006_ip = 9; continue _fun0006 }
case 10:
                var1 = var2;
case 9:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getPendingReturn';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'GameProfileStore';
    var7['displayName'] = var2;
    var2 = 6;
    var2 = var5[var2];
    var11 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleGetSimilarGamesSuccess(arg1) {
        var1 = arg1;
        var3 = var1.gameId;
        var2 = var1.games;
        var1 = _closure1_slot5;
        var1[var3] = var2;
        var1 = undefined;
        return var1;
    };
    var2['GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS'] = var8;
    var8 = function handleGetSimilarGamesError(arg1) {
        var1 = arg1;
        var3 = var1.gameId;
        var2 = var1.error;
        var1 = _closure1_slot6;
        var1[var3] = var2;
        var1 = undefined;
        return var1;
    };
    var2['GAME_PROFILE_GET_SIMILAR_GAMES_ERROR'] = var8;
    var8 = function handleGetShopCollectionStart(arg1) {
        var1 = arg1;
        var3 = var1.collectionId;
        var2 = _closure1_slot9;
        var1 = true;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['GAME_PROFILE_GET_SHOP_COLLECTION_START'] = var8;
    var8 = function handleGetShopCollectionSuccess(arg1) {
        var1 = arg1;
        var3 = var1.collectionId;
        var4 = var1.skuIds;
        var2 = _closure1_slot7;
        var2[var3] = var4;
        var4 = _closure1_slot8;
        var2 = true;
        var4[var3] = var2;
        var2 = _closure1_slot9;
        var1 = false;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS'] = var8;
    var8 = function handleGetShopCollectionError(arg1) {
        var1 = arg1;
        var3 = var1.collectionId;
        var4 = _closure1_slot8;
        var2 = true;
        var4[var3] = var2;
        var2 = _closure1_slot9;
        var1 = false;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['GAME_PROFILE_GET_SHOP_COLLECTION_ERROR'] = var8;
    var8 = function handleGetAnnouncementsStart(arg1) {
        var1 = arg1;
        var3 = var1.gameId;
        var2 = _closure1_slot12;
        var1 = true;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['GAME_PROFILE_GET_ANNOUNCEMENTS_START'] = var8;
    var8 = function handleGetAnnouncementsSuccess(arg1) {
        var1 = arg1;
        var3 = var1.gameId;
        var7 = var1.messages;
        var6 = var1.channelId;
        var5 = var1.guildId;
        var4 = _closure1_slot10;
        var2 = {};
        var2['messages'] = var7;
        var2['channelId'] = var6;
        var2['guildId'] = var5;
        var4[var3] = var2;
        var4 = _closure1_slot11;
        var2 = true;
        var4[var3] = var2;
        var2 = _closure1_slot12;
        var1 = false;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS'] = var8;
    var8 = function handleGetAnnouncementsError(arg1) {
        var1 = arg1;
        var3 = var1.gameId;
        var4 = _closure1_slot11;
        var2 = true;
        var4[var3] = var2;
        var2 = _closure1_slot12;
        var1 = false;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR'] = var8;
    var8 = function handleSetPendingReturn(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var6 = var1.gameId;
            var5 = var1.channelId;
            var4 = var1.initialScrollOffset;
            var8 = _closure1_slot13;
            var2 = null;
            var9 = var2 == var8;
            var1 = undefined;
            var7 = undefined;
            if(var9) { _fun0007_ip = 11; continue _fun0007 }
case 12:
            var7 = var8.gameId;
case 11:
            if(!(var7 === var6)) { _fun0007_ip = 13; continue _fun0007 }
case 14:
            var8 = _closure1_slot13;
            var9 = var2 == var8;
            var7 = undefined;
            if(var9) { _fun0007_ip = 15; continue _fun0007 }
case 16:
            var7 = var8.channelId;
case 15:
            if(!(var7 === var5)) { _fun0007_ip = 13; continue _fun0007 }
case 3:
            var7 = _closure1_slot13;
            var8 = var2 == var7;
            var2 = undefined;
            if(var8) { _fun0007_ip = 17; continue _fun0007 }
case 18:
            var2 = var7.initialScrollOffset;
case 17:
            if(!(var2 !== var4)) { _fun0007_ip = 19; continue _fun0007 }
case 13:
            var2 = {};
            var2['gameId'] = var6;
            var2['channelId'] = var5;
            var2['initialScrollOffset'] = var4;
            _closure1_slot13 = var2;
            return var1;
case 19:
            var1 = false;
            return var1;
        }
    };
    var2['GAME_PROFILE_SET_PENDING_RETURN'] = var8;
    var4 = function handleClearPendingReturn(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var4 = var1.gameId;
            var3 = _closure1_slot13;
            var1 = null;
            if(!(var1 != var3)) { _fun0008_ip = 20; continue _fun0008 }
case 21:
            var3 = _closure1_slot13;
            var3 = var3.gameId;
            if(!(var3 === var4)) { _fun0008_ip = 20; continue _fun0008 }
case 22:
            _closure1_slot13 = var1;
            var1 = undefined;
            return var1;
case 20:
            var1 = false;
            return var1;
        }
    };
    var2['GAME_PROFILE_CLEAR_PENDING_RETURN'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var12 = var4;
    var10 = var2;
    var2 = new var12[var7](var11, var10, var9);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 7;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/GameProfileStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();