// app/modules/game_detection/DetectableGameSupplementalStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
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
    var1 = function convertGameReviewsServerToGameReviews(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var2.steam;
            if(!(var1 == var3)) { _fun0002_ip = 8; continue _fun0002 }
case 6:
            var1 = undefined;
            return var1;
case 8:
            var1 = {};
            var2 = {};
            var4 = var3.rating;
            var2['rating'] = var4;
            var3 = var3.rating_count;
            var2['ratingCount'] = var3;
            var1['steam'] = var2;
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var7[var1];
    var1 = undefined;
    var8 = var5.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var7[var8];
    var8 = var5.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var7[var8];
    var8 = var5.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var7[var8];
    var8 = var5.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var7[var8];
    var8 = var5.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = var4.Map;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var14 = var9;
    var8 = new var14[var8](var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot8 = var8;
    var8 = var4.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var14 = var9;
    var8 = new var14[var8](var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot9 = var8;
    var8 = var4.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var14 = var9;
    var8 = new var14[var8](var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot10 = var8;
    var4 = var4.Set;
    var8 = var4.prototype;
    var8 = Object.create(var8, {constructor: {value: var4}});
    var14 = var8;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Store;
    var4 = function(arg1) {
        var4 = function DetectableGameSupplementalStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 11; continue _fun0003;
case 9:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 11:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'canFetch';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var3 = _closure1_slot9;
                var1 = var3.has;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0004_ip = 12; continue _fun0004 }
case 8:
                var5 = _closure1_slot10;
                var3 = var5.has;
                var1 = var3.bind(var5)(var4);
case 12:
                if(var1) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var5 = _closure1_slot8;
                var3 = var5.has;
                var1 = var3.bind(var5)(var4);
case 13:
                if(var1) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var3 = _closure1_slot11;
                var2 = var3.has;
                var1 = var2.bind(var3)(var4);
case 15:
                var1 = !var1;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(11);
        var1[0] = var5;
        var5 = {};
        var7 = 'isFetching';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot9;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'didFetchingFail';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot10;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getGame';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot8;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getGames';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = arg1;
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = _closure1_slot8;
                var2 = var3.get;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getLocalizedName';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure1_slot8;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var1 = var2.name;
case 17:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getThemes';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure1_slot8;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0006_ip = 12; continue _fun0006 }
case 18:
                var1 = var2.themes;
case 12:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getCoverImageUrl';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = arg2;
                var5 = _closure1_slot8;
                var2 = var5.get;
                var1 = arg1;
                var5 = var2.bind(var5)(var1);
                var1 = null;
                var7 = var1 == var5;
                var6 = undefined;
                var2 = undefined;
                if(var7) { _fun0007_ip = 19; continue _fun0007 }
case 17:
                var2 = var5.coverImageUrl;
case 19:
                if(!(var1 != var2)) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                if(!(var1 != var4)) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 5;
                var3 = var7[var3];
                var5 = var5.bind(var6)(var3);
                var3 = var5.toURLSafe;
                var5 = var3.bind(var5)(var2);
                var3 = var2;
                if(!(var1 != var5)) { _fun0007_ip = 24; continue _fun0007 }
case 25:
                var8 = var5.searchParams;
                var7 = var8.set;
                var6 = var4.size;
                var4 = var6.toString;
                var6 = var4.bind(var6)();
                var4 = 'size';
                var4 = var7.bind(var8)(var4, var6);
                var4 = var5.toString;
                var3 = var4.bind(var5)();
case 24:
                return var3;
case 22:
                return var2;
case 20:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'noDataAvailable';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot11;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'numNoDataAvailable';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            var1 = var1.size;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'numSupplementalGames';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot8;
            var1 = var1.size;
            return var1;
        };
        var5['value'] = var6;
        var1[10] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var8);
    var4 = 'DetectableGameSupplementalStore';
    var9['displayName'] = var4;
    var4 = 8;
    var4 = var7[var4];
    var13 = var5.bind(var1)(var4);
    var4 = {};
    var5 = function handleLogout() {
        var1 = global;
        var2 = var1.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var5 = var3;
        var2 = new var5[var2](var4);
        var3 = var2 instanceof Object ? var2 : var3;
        _closure1_slot8 = var3;
        var3 = var1.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        _closure1_slot9 = var3;
        var3 = var1.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        _closure1_slot10 = var3;
        var1 = var1.Set;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var5 = var3;
        var1 = new var5[var1](var4);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var4['LOGOUT'] = var5;
    var5 = function handleFetch(arg1) {
        var1 = arg1;
        var3 = var1.applicationIds;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = arg1;
            var4 = _closure1_slot9;
            var2 = var4.add;
            var2 = var2.bind(var4)(var3);
            var2 = _closure1_slot10;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var4['DETECTABLE_GAME_SUPPLEMENTAL_FETCH'] = var5;
    var5 = function handleFetchSuccess(arg1) {
        var2 = arg1;
        var6 = var2.applicationIds;
        var5 = var2.supplementalGameData;
        var2 = global;
        var2 = var2.Set;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var8 = var3;
        var7 = var6;
        var2 = new var8[var2](var7, var6);
        var3 = var2 instanceof Object ? var2 : var3;
        var _closure2_slot0 = var3;
        var4 = var6.forEach;
        var2 = function(arg1) {
            var3 = arg1;
            var4 = _closure1_slot9;
            var2 = var4.delete;
            var2 = var2.bind(var4)(var3);
            var2 = _closure1_slot10;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        };
        var2 = var4.bind(var6)(var2);
        var4 = var5.forEach;
        var2 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var5 = var1.application_id;
                var21 = var1.name;
                var20 = var1.summary;
                var18 = var1.websites;
                var17 = var1.themes;
                var16 = var1.genres;
                var15 = var1.platforms;
                var14 = var1.artwork_urls;
                var13 = var1.screenshot_urls;
                var12 = var1.icon_hash;
                var11 = var1.cover_image_url;
                var9 = var1.first_release_date;
                var19 = var1.summary_localized;
                var10 = var1.publisher_names;
                var8 = var1.developer_names;
                var6 = var1.steam_release_status;
                var7 = var1.reviews;
                var2 = _closure2_slot0;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var5);
                var4 = _closure1_slot8;
                var3 = var4.set;
                var2 = {};
                var2['applicationId'] = var5;
                var2['name'] = var21;
                var2['summary'] = var20;
                var2['summaryLocalized'] = var19;
                var2['websites'] = var18;
                var2['themes'] = var17;
                var2['genres'] = var16;
                var2['platforms'] = var15;
                var2['artwork'] = var14;
                var2['screenshots'] = var13;
                var2['iconHash'] = var12;
                var2['coverImageUrl'] = var11;
                var2['firstReleaseDate'] = var9;
                var9 = null;
                if(!(var9 == var10)) { _fun0008_ip = 26; continue _fun0008 }
case 27:
                var10 = new Array(0);
case 26:
                var2['publishers'] = var10;
                if(!(var9 == var8)) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                var8 = new Array(0);
case 28:
                var2['developers'] = var8;
                var2['steamReleaseStatus'] = var6;
                var6 = _closure1_slot13;
                var1 = undefined;
                var6 = var6.bind(var1)(var7);
                var2['reviews'] = var6;
                var2 = var3.bind(var4)(var5, var2);
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2);
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = arg1;
                var4 = _closure1_slot8;
                var2 = var4.has;
                var2 = var2.bind(var4)(var3);
                if(var2) { _fun0009_ip = 12; continue _fun0009 }
case 8:
                var2 = _closure1_slot11;
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
case 12:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var4['DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS'] = var5;
    var5 = function handleFetchFailure(arg1) {
        var1 = arg1;
        var3 = var1.applicationIds;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = arg1;
            var4 = _closure1_slot9;
            var2 = var4.delete;
            var2 = var2.bind(var4)(var3);
            var2 = _closure1_slot10;
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var4['DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var14 = var5;
    var12 = var4;
    var4 = new var14[var9](var13, var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/game_detection/DetectableGameSupplementalStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function calculateSteamReviewScoreDescription(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0010_ip = 30; continue _fun0010 }
case 31:
            if(!(var1 != var4)) { _fun0010_ip = 30; continue _fun0010 }
case 32:
            var1 = 10;
            if(!(!(var4 < var1))) { _fun0010_ip = 30; continue _fun0010 }
case 33:
            var1 = 80;
            if(!(!(var3 >= var1))) { _fun0010_ip = 34; continue _fun0010 }
case 19:
            var1 = 70;
            if(!(!(var3 >= var1))) { _fun0010_ip = 35; continue _fun0010 }
case 36:
            var1 = 40;
            if(!(!(var3 >= var1))) { _fun0010_ip = 28; continue _fun0010 }
case 37:
            var1 = 20;
            if(!(!(var3 >= var1))) { _fun0010_ip = 38; continue _fun0010 }
case 5:
            var1 = 50;
            if(!(!(var4 < var1))) { _fun0010_ip = 39; continue _fun0010 }
case 40:
            var1 = 500;
            if(!(!(var4 < var1))) { _fun0010_ip = 41; continue _fun0010 }
case 42:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var2);
            var1 = var1.SteamReviewScoreDescription;
            var1 = var1.OVERWHELMINGLY_NEGATIVE;
            _fun0010_ip = 43; continue _fun0010;
case 41:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var2 = var2.SteamReviewScoreDescription;
            var1 = var2.VERY_NEGATIVE;
case 43:
            _fun0010_ip = 44; continue _fun0010;
case 39:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var2 = var2.SteamReviewScoreDescription;
            var1 = var2.NEGATIVE;
case 44:
            _fun0010_ip = 45; continue _fun0010;
case 38:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var2 = var2.SteamReviewScoreDescription;
            var1 = var2.MOSTLY_NEGATIVE;
case 45:
            _fun0010_ip = 46; continue _fun0010;
case 28:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var2 = var2.SteamReviewScoreDescription;
            var1 = var2.MIXED;
case 46:
            _fun0010_ip = 47; continue _fun0010;
case 35:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var2 = var2.SteamReviewScoreDescription;
            var1 = var2.MOSTLY_POSITIVE;
case 47:
            _fun0010_ip = 48; continue _fun0010;
case 34:
            var2 = 50;
            if(!(!(var4 < var2))) { _fun0010_ip = 49; continue _fun0010 }
case 50:
            var2 = 500;
            if(!(!(var4 < var2))) { _fun0010_ip = 51; continue _fun0010 }
case 52:
            var2 = 95;
            if(!(!(var3 < var2))) { _fun0010_ip = 51; continue _fun0010 }
case 53:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.SteamReviewScoreDescription;
            var2 = var2.OVERWHELMINGLY_POSITIVE;
            _fun0010_ip = 54; continue _fun0010;
case 51:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 7;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var3 = var3.SteamReviewScoreDescription;
            var2 = var3.VERY_POSITIVE;
case 54:
            _fun0010_ip = 55; continue _fun0010;
case 49:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 7;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var3 = var3.SteamReviewScoreDescription;
            var2 = var3.POSITIVE;
case 55:
            var1 = var2;
case 48:
            _fun0010_ip = 56; continue _fun0010;
case 30:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.SteamReviewScoreDescription;
            var1 = var2.NO_USER_REVIEWS;
case 56:
            return var1;
        }
    };
    var3['calculateSteamReviewScoreDescription'] = var2;
    return var1;
})();