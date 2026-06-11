// app/modules/games/GameRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var7 = 6;
    var8 = var6[var7];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.createExecutable;
    var _closure1_slot9 = var7;
    var2 = function(arg1) {
        var4 = function GameRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var5 = this;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var6 = undefined;
                var1 = var1.bind(var6)(var5, var2);
                var1 = _closure1_slot6;
                var11 = var1.bind(var6)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot10;
                var1 = var1.bind(var6)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var5, var6);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var10 = var7.Reflect;
                var9 = var10.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var6)(var5);
                var8 = var7.constructor;
                var7 = new Array(0);
                var1 = var9.bind(var10)(var11, var7, var8);
case 8:
                var1 = var2.bind(var6)(var5, var1);
                var2 = var3.id;
                var1['id'] = var2;
                var2 = var3.name;
                var1['name'] = var2;
                var2 = var3.description;
                var1['description'] = var2;
                var5 = var3.aliases;
                var2 = null;
                if(!(var2 == var5)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var5 = new Array(0);
case 9:
                var1['aliases'] = var5;
                var8 = var3.executables;
                if(!(var2 == var8)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var8 = new Array(0);
case 11:
                var7 = var8.map;
                var5 = _closure1_slot9;
                var5 = var7.bind(var8)(var5);
                var1['executables'] = var5;
                var7 = var3.overlay;
                var5 = var2 != var7;
                if(!var5) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var5 = var7;
case 13:
                var1['overlay'] = var5;
                var7 = var3.overlay_warn;
                var5 = var2 != var7;
                if(!var5) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var5 = var7;
case 15:
                var1['overlayWarn'] = var5;
                var7 = var3.overlay_compatibility_hook;
                var5 = var2 != var7;
                if(!var5) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var5 = var7;
case 17:
                var1['overlayCompatibilityHook'] = var5;
                var7 = var3.hook;
                var5 = var2 == var7;
                if(var5) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                var5 = var7;
case 19:
                var1['hook'] = var5;
                var7 = _closure1_slot8;
                var5 = var7.supportsOutOfProcessOverlay;
                var4 = var3.overlay_methods;
                var4 = var5.bind(var7)(var4);
                var1['supportsOutOfProcessOverlay'] = var4;
                var4 = var3.third_party_skus;
                if(!(var2 == var4)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var4 = new Array(0);
case 21:
                var1['thirdPartySkus'] = var4;
                var4 = var3.themes;
                if(!(var2 == var4)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                var4 = new Array(0);
case 23:
                var1['themes'] = var4;
                var4 = var3.linked_applications;
                var1['linkedApplications'] = var4;
                var4 = var3.genres;
                if(!(var2 == var4)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                var4 = new Array(0);
case 25:
                var1['genres'] = var4;
                var4 = var3.platforms;
                if(!(var2 == var4)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                var4 = new Array(0);
case 27:
                var1['platforms'] = var4;
                var4 = var3.websites;
                if(!(var2 == var4)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                var4 = new Array(0);
case 29:
                var1['websites'] = var4;
                var4 = var3.companies;
                var1['companies'] = var4;
                var4 = var3.icon_hash;
                var1['iconHash'] = var4;
                var4 = var3.cover_image_hash;
                var1['coverImageHash'] = var4;
                var4 = var3.banner_hash;
                var1['bannerHash'] = var4;
                var4 = var3.screenshot_hashes;
                var1['screenshotHashes'] = var4;
                var4 = var3.screenshot_urls;
                var1['screenshotUrls'] = var4;
                var4 = var3.trailers;
                var1['trailers'] = var4;
                var4 = var3.l30_rank;
                var1['l30Rank'] = var4;
                var4 = var3.summary_localized;
                var1['summaryLocalized'] = var4;
                var4 = var3.media;
                var1['media'] = var4;
                var4 = var3.first_release_date;
                var1['firstReleaseDate'] = var4;
                var4 = var3.shop_collection_ids;
                var1['shopCollectionIds'] = var4;
                var4 = var3.steam_release_status;
                var1['steamReleaseStatus'] = var4;
                var8 = var3.reviews;
                var5 = var2 == var8;
                var4 = undefined;
                if(var5) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                var4 = var8.steam;
case 31:
                if(!(var2 == var4)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                var5 = var2 == var8;
                var4 = undefined;
                if(var5) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                var4 = var8.opencritic;
case 35:
                var5 = var2 != var4;
                var4 = undefined;
                if(!var5) { _fun0002_ip = 37; continue _fun0002 }
case 33:
                var5 = {};
                var7 = var8.steam;
                var9 = var2 != var7;
                var7 = undefined;
                if(!var9) { _fun0002_ip = 38; continue _fun0002 }
case 39:
                var9 = {};
                var10 = var8.steam;
                var10 = var10.rating;
                var9['rating'] = var10;
                var10 = var8.steam;
                var10 = var10.rating_count;
                var9['ratingCount'] = var10;
                var10 = var8.steam;
                var10 = var10.recent_rating;
                var9['recentRating'] = var10;
                var10 = var8.steam;
                var10 = var10.recent_rating_count;
                var9['recentRatingCount'] = var10;
                var10 = var8.steam;
                var10 = var10.localized_rating;
                var9['localizedRating'] = var10;
                var10 = var8.steam;
                var10 = var10.localized_rating_count;
                var9['localizedRatingCount'] = var10;
                var7 = var9;
case 38:
                var5['steam'] = var7;
                var7 = var8.opencritic;
                var7 = var2 != var7;
                var6 = undefined;
                if(!var7) { _fun0002_ip = 40; continue _fun0002 }
case 41:
                var7 = {};
                var9 = var8.opencritic;
                var9 = var9.top_critic_rating;
                var7['topCriticRating'] = var9;
                var9 = var8.opencritic;
                var9 = var9.top_critic_rating_count;
                var7['topCriticRatingCount'] = var9;
                var8 = var8.opencritic;
                var8 = var8.tier;
                var7['tier'] = var8;
                var6 = var7;
case 40:
                var5['opencritic'] = var6;
                var4 = var5;
case 37:
                var1['reviews'] = var4;
                var4 = var3.opencritic_url;
                var1['opencriticUrl'] = var4;
                var3 = var3.game_flags;
                var4 = var2 != var3;
                var2 = 0;
                if(!var4) { _fun0002_ip = 42; continue _fun0002 }
case 43:
                var2 = var3;
case 42:
                var1['gameFlags'] = var2;
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
        var1 = 'applicationId';
        var5['key'] = var1;
        var1 = function get() {
            var1 = this;
            var1 = var1.id;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getOfficialApplicationId';
        var5['key'] = var7;
        var7 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = this;
                var6 = var1.linkedApplications;
                var3 = null;
                var2 = var3 == var6;
                var1 = undefined;
                if(var2) { _fun0003_ip = 7; continue _fun0003 }
case 44:
                var5 = var6.find;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.GameLinkTypes;
                    var1 = var1.OFFICIAL;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var5.bind(var6)(var2);
                var3 = var3 == var2;
                var1 = undefined;
                if(var3) { _fun0003_ip = 7; continue _fun0003 }
case 45:
                var1 = var2.id;
case 7:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getIconURL';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var6 = this;
                var1 = var6.iconHash;
                var2 = null;
                var3 = var2 == var1;
                var1 = null;
                if(var3) { _fun0004_ip = 46; continue _fun0004 }
case 44:
                var4 = var6.iconHash;
                var3 = '';
                var1 = null;
                if(!(var3 !== var4)) { _fun0004_ip = 46; continue _fun0004 }
case 47:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 8;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.getGameAssetURL;
                var3 = {};
                var7 = var6.id;
                var3['id'] = var7;
                var6 = var6.iconHash;
                var3['hash'] = var6;
                var6 = arg1;
                var3['size'] = var6;
                var6 = arg2;
                var3['format'] = var6;
                var3 = var4.bind(var5)(var3);
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                var2 = var3;
case 48:
                var1 = var2;
case 46:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getCoverURL';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var11 = this;
                var1 = var11.media;
                var3 = null;
                var2 = var3 == var1;
                var1 = null;
                if(var2) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                var2 = var11.media;
                var2 = var2.cover_hash;
                if(!(var3 == var2)) { _fun0005_ip = 3; continue _fun0005 }
case 52:
                var2 = var11.media;
                var4 = var2.cover_url;
                var5 = var3 != var4;
                var2 = null;
                if(!var5) { _fun0005_ip = 6; continue _fun0005 }
case 53:
                var2 = var4;
case 6:
                _fun0005_ip = 54; continue _fun0005;
case 3:
                var5 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 8;
                var4 = var10[var7];
                var9 = undefined;
                var6 = var5.bind(var9)(var4);
                var5 = var6.getGameAssetURL;
                var4 = {};
                var12 = var11.id;
                var4['id'] = var12;
                var11 = var11.media;
                var11 = var11.cover_hash;
                var4['hash'] = var11;
                var11 = true;
                var4['keepAspectRatio'] = var11;
                var8 = _closure1_slot0;
                var7 = var10[var7];
                var7 = var8.bind(var9)(var7);
                var8 = var7.SUPPORTS_WEBP;
                var7 = 'png';
                if(!var8) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                var7 = 'webp';
case 55:
                var4['format'] = var7;
                var7 = arg1;
                var4['size'] = var7;
                var4 = var5.bind(var6)(var4);
                var5 = var3 != var4;
                var3 = null;
                if(!var5) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                var3 = var4;
case 57:
                var2 = var3;
case 54:
                var1 = var2;
case 50:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getArtworkURLs';
        var5['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = this;
                var3 = var1.media;
                var2 = null;
                if(!(var2 != var3)) { _fun0006_ip = 59; continue _fun0006 }
case 60:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.getArtworkUrls;
                var3 = var1.id;
                var2 = var1.media;
                var2 = var2.artwork_hashes;
                var1 = var1.media;
                var1 = var1.artwork_urls;
                var1 = var4.bind(var5)(var3, var2, var1);
                _fun0006_ip = 61; continue _fun0006;
case 59:
                var1 = new Array(0);
case 61:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getCompanyByRole';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = this;
                var5 = var1.companies;
                var2 = null;
                var4 = var2 == var5;
                var1 = undefined;
                if(var4) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                var4 = var5.filter;
                var3 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.roles;
                    var2 = var3.includes;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var4.bind(var5)(var3);
case 62:
                if(!(var2 == var1)) { _fun0007_ip = 7; continue _fun0007 }
case 64:
                var1 = new Array(0);
case 7:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/games/GameRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();