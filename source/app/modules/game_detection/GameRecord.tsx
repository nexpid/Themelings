// app/modules/game_detection/GameRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
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
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function convertReviews(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            var5 = var4 == var3;
            var1 = undefined;
            var2 = undefined;
            if(var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = var3.steam;
case 6:
            if(!(var4 == var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            return var1;
case 8:
            var1 = {};
            var2 = {};
            var4 = var3.steam;
            var4 = var4.rating;
            var2['rating'] = var4;
            var3 = var3.steam;
            var3 = var3.rating_count;
            var2['ratingCount'] = var3;
            var1['steam'] = var2;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var4 = var9.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var7 = 6;
    var8 = var6[var7];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.createExecutable;
    var _closure1_slot6 = var7;
    var2 = function(arg1) {
        var4 = function GameRecord(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = arg1;
                var3 = this;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var6 = undefined;
                var1 = var1.bind(var6)(var3, var2);
                var1 = _closure1_slot3;
                var11 = var1.bind(var6)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot7;
                var1 = var1.bind(var6)();
                if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var3, var6);
                _fun0003_ip = 12; continue _fun0003;
case 10:
                var7 = global;
                var10 = var7.Reflect;
                var9 = var10.construct;
                var7 = _closure1_slot3;
                var7 = var7.bind(var6)(var3);
                var8 = var7.constructor;
                var7 = new Array(0);
                var1 = var9.bind(var10)(var11, var7, var8);
case 12:
                var1 = var2.bind(var6)(var3, var1);
                var3 = var5.supplemental_game_data;
                var2 = var5.id;
                var1['id'] = var2;
                var8 = null;
                var7 = var8 == var3;
                var2 = undefined;
                if(var7) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var2 = var3.name;
case 13:
                if(!(var8 == var2)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var2 = var5.name;
case 15:
                var1['name'] = var2;
                var2 = var5.description;
                var1['description'] = var2;
                var2 = var5.aliases;
                if(!(var8 == var2)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var2 = new Array(0);
case 17:
                var1['aliases'] = var2;
                var9 = var5.executables;
                if(!(var8 == var9)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var9 = new Array(0);
case 19:
                var7 = var9.map;
                var2 = _closure1_slot6;
                var2 = var7.bind(var9)(var2);
                var1['executables'] = var2;
                var7 = var5.overlay;
                var2 = var8 != var7;
                if(!var2) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                var2 = var7;
case 21:
                var1['overlay'] = var2;
                var7 = var5.overlay_warn;
                var2 = var8 != var7;
                if(!var2) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                var2 = var7;
case 23:
                var1['overlayWarn'] = var2;
                var7 = var5.overlay_compatibility_hook;
                var2 = var8 != var7;
                if(!var2) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                var2 = var7;
case 25:
                var1['overlayCompatibilityHook'] = var2;
                var7 = var5.hook;
                var2 = var8 == var7;
                if(var2) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                var2 = var7;
case 27:
                var1['hook'] = var2;
                var9 = _closure1_slot5;
                var7 = var9.supportsOutOfProcessOverlay;
                var2 = var5.overlay_methods;
                var2 = var7.bind(var9)(var2);
                var1['supportsOutOfProcessOverlay'] = var2;
                var2 = var5.third_party_skus;
                if(!(var8 == var2)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                var2 = new Array(0);
case 29:
                var1['thirdPartySkus'] = var2;
                var7 = var8 == var3;
                var2 = undefined;
                if(var7) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                var2 = var3.themes;
case 31:
                if(!(var8 == var2)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                var2 = var5.themes;
case 33:
                if(!(var8 == var2)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                var2 = new Array(0);
case 35:
                var1['themes'] = var2;
                var2 = var5.linked_applications;
                var1['linkedApplications'] = var2;
                var7 = var8 == var3;
                var2 = undefined;
                if(var7) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                var2 = var3.genres;
case 37:
                if(!(var8 == var2)) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                var2 = var5.genres;
case 39:
                if(!(var8 == var2)) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                var2 = new Array(0);
case 41:
                var1['genres'] = var2;
                var7 = var8 == var3;
                var2 = undefined;
                if(var7) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                var2 = var3.platforms;
case 43:
                if(!(var8 == var2)) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                var2 = var5.platforms;
case 45:
                if(!(var8 == var2)) { _fun0003_ip = 47; continue _fun0003 }
case 48:
                var2 = new Array(0);
case 47:
                var1['platforms'] = var2;
                var7 = var8 == var3;
                var2 = undefined;
                if(var7) { _fun0003_ip = 49; continue _fun0003 }
case 50:
                var2 = var3.websites;
case 49:
                if(!(var8 == var2)) { _fun0003_ip = 51; continue _fun0003 }
case 52:
                var2 = var5.websites;
case 51:
                if(!(var8 == var2)) { _fun0003_ip = 53; continue _fun0003 }
case 54:
                var2 = new Array(0);
case 53:
                var1['websites'] = var2;
                var2 = var5.companies;
                var1['companies'] = var2;
                var2 = var5.cover_image_hash;
                var1['coverImageHash'] = var2;
                var2 = var5.banner_hash;
                var1['bannerHash'] = var2;
                var2 = var5.screenshot_hashes;
                var1['screenshotHashes'] = var2;
                var7 = var8 == var3;
                var2 = undefined;
                if(var7) { _fun0003_ip = 55; continue _fun0003 }
case 56:
                var2 = var3.screenshot_urls;
case 55:
                if(!(var8 == var2)) { _fun0003_ip = 57; continue _fun0003 }
case 58:
                var2 = var5.screenshot_urls;
case 57:
                var1['screenshotUrls'] = var2;
                var2 = var5.trailers;
                var1['trailers'] = var2;
                if(!(var8 != var3)) { _fun0003_ip = 59; continue _fun0003 }
case 60:
                var2 = {};
                var7 = var5.id;
                var2['applicationId'] = var7;
                var7 = var3.name;
                var2['name'] = var7;
                var7 = var3.summary;
                var2['summary'] = var7;
                var7 = var3.summary_localized;
                var2['summaryLocalized'] = var7;
                var7 = var3.websites;
                var2['websites'] = var7;
                var7 = var3.themes;
                var2['themes'] = var7;
                var7 = var3.genres;
                var2['genres'] = var7;
                var7 = var3.platforms;
                var2['platforms'] = var7;
                var7 = var3.artwork_urls;
                var2['artwork'] = var7;
                var7 = var3.screenshot_urls;
                var2['screenshots'] = var7;
                var7 = var3.icon_hash;
                var2['iconHash'] = var7;
                var7 = var3.cover_image_url;
                var2['coverImageUrl'] = var7;
                var7 = var3.first_release_date;
                var2['firstReleaseDate'] = var7;
                var7 = var3.publisher_names;
                if(!(var8 == var7)) { _fun0003_ip = 61; continue _fun0003 }
case 62:
                var7 = new Array(0);
case 61:
                var2['publishers'] = var7;
                var7 = var3.developer_names;
                if(!(var8 == var7)) { _fun0003_ip = 63; continue _fun0003 }
case 64:
                var7 = new Array(0);
case 63:
                var2['developers'] = var7;
                var7 = var5.trailers;
                var2['trailers'] = var7;
                var5 = var5.shop_collection_ids;
                var2['shopCollectionIds'] = var5;
                var5 = var3.steam_release_status;
                var2['steamReleaseStatus'] = var5;
                var5 = _closure1_slot8;
                var4 = var3.reviews;
                var4 = var5.bind(var6)(var4);
                var2['reviews'] = var4;
                var4 = var3.steam_id;
                var2['steam_id'] = var4;
                var3 = var3.announcements_channel_id;
                var2['announcementsChannelId'] = var3;
                var1['supplementalData'] = var2;
case 59:
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot4;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot1;
        var5 = {};
        var6 = 'applicationId';
        var5['key'] = var6;
        var1 = function get() {
            var1 = this;
            var1 = var1.id;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_detection/GameRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();