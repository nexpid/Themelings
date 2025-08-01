// app/records/StoreListingRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
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
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var7 = 6;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var2 = function(arg1) {
        var5 = function StoreListingRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var5 = this;
                var1 = _closure1_slot2;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = _closure1_slot5;
                var10 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot8;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 65; continue _fun0002 }
 52:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0002_ip = 103; continue _fun0002;
 65:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
 103:
                var1 = var3.bind(var4)(var5, var1);
                var3 = var2.id;
                var1['id'] = var3;
                var3 = var2.applicationId;
                var1['applicationId'] = var3;
                var3 = var2.skuId;
                var1['skuId'] = var3;
                var3 = var2.skuFlags;
                var1['skuFlags'] = var3;
                var3 = var2.summary;
                var1['summary'] = var3;
                var3 = var2.tagline;
                var1['tagline'] = var3;
                var3 = var2.flavorText;
                var1['flavorText'] = var3;
                var3 = var2.description;
                var1['description'] = var3;
                var5 = var2.carouselItems;
                var3 = null;
                if(!(var3 == var5)) { _fun0002_ip = 218; continue _fun0002 }
 214:
                var5 = new Array(0);
 218:
                var1['carouselItems'] = var5;
                var5 = var2.childSkuIds;
                if(!(var3 == var5)) { _fun0002_ip = 238; continue _fun0002 }
 234:
                var5 = new Array(0);
 238:
                var1['childSkuIds'] = var5;
                var5 = var2.alternativeSkuIds;
                if(!(var3 == var5)) { _fun0002_ip = 258; continue _fun0002 }
 254:
                var5 = new Array(0);
 258:
                var1['alternativeSkuIds'] = var5;
                var5 = var2.assets;
                if(!(var3 == var5)) { _fun0002_ip = 278; continue _fun0002 }
 274:
                var5 = new Array(0);
 278:
                var1['assets'] = var5;
                var5 = var2.staffNotes;
                var1['staffNotes'] = var5;
                var5 = var2.guild;
                var1['guild'] = var5;
                var6 = var2.thumbnail;
                var7 = var3 != var6;
                var5 = null;
                if(!var7) { _fun0002_ip = 325; continue _fun0002 }
 322:
                var5 = var6;
 325:
                var1['thumbnail'] = var5;
                var6 = var2.boxArt;
                var7 = var3 != var6;
                var5 = null;
                if(!var7) { _fun0002_ip = 349; continue _fun0002 }
 346:
                var5 = var6;
 349:
                var1['boxArt'] = var5;
                var6 = var2.previewVideo;
                var7 = var3 != var6;
                var5 = null;
                if(!var7) { _fun0002_ip = 373; continue _fun0002 }
 370:
                var5 = var6;
 373:
                var1['previewVideo'] = var5;
                var6 = var2.headerBackground;
                var7 = var3 != var6;
                var5 = null;
                if(!var7) { _fun0002_ip = 397; continue _fun0002 }
 394:
                var5 = var6;
 397:
                var1['headerBackground'] = var5;
                var6 = var2.headerLogoDarkTheme;
                var7 = var3 != var6;
                var5 = null;
                if(!var7) { _fun0002_ip = 421; continue _fun0002 }
 418:
                var5 = var6;
 421:
                var1['headerLogoDarkTheme'] = var5;
                var6 = var2.headerLogoLightTheme;
                var7 = var3 != var6;
                var5 = null;
                if(!var7) { _fun0002_ip = 445; continue _fun0002 }
 442:
                var5 = var6;
 445:
                var1['headerLogoLightTheme'] = var5;
                var6 = var2.heroBackground;
                var7 = var3 != var6;
                var5 = null;
                if(!var7) { _fun0002_ip = 469; continue _fun0002 }
 466:
                var5 = var6;
 469:
                var1['heroBackground'] = var5;
                var6 = var2.heroVideo;
                var7 = var3 != var6;
                var5 = null;
                if(!var7) { _fun0002_ip = 493; continue _fun0002 }
 490:
                var5 = var6;
 493:
                var1['heroVideo'] = var5;
                var5 = var2.entitlementBranchId;
                var6 = var3 != var5;
                var3 = null;
                if(!var6) { _fun0002_ip = 517; continue _fun0002 }
 514:
                var3 = var5;
 517:
                var1['entitlementBranchId'] = var3;
                var3 = var2.benefits;
                var1['benefits'] = var3;
                var3 = global;
                var3 = var3.Boolean;
                var2 = var2.published;
                var2 = var3.bind(var4)(var2);
                var1['published'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot6;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot3;
        var6 = {};
        var2 = 'isSlimDirectoryVersion';
        var6['key'] = var2;
        var2 = function value() {
            var1 = this;
            var2 = var1.description;
            var1 = null;
            var1 = var1 == var2;
            return var1;
        };
        var6['value'] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var6 = {};
        var7 = 'createFromServer';
        var6['key'] = var7;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var8 = var2.staff_notes;
                var3 = _closure2_slot0;
                var1 = {};
                var4 = var2.id;
                var1['id'] = var4;
                var4 = var2.sku;
                var4 = var4.application_id;
                var1['applicationId'] = var4;
                var4 = var2.sku;
                var4 = var4.id;
                var1['skuId'] = var4;
                var4 = var2.sku;
                var4 = var4.flags;
                var1['skuFlags'] = var4;
                var4 = var2.summary;
                var1['summary'] = var4;
                var4 = var2.tagline;
                var1['tagline'] = var4;
                var4 = var2.flavor_text;
                var1['flavorText'] = var4;
                var4 = var2.description;
                var1['description'] = var4;
                var5 = var2.child_skus;
                var4 = null;
                var7 = var4 != var5;
                var5 = null;
                if(!var7) { _fun0003_ip = 163; continue _fun0003 }
 140:
                var10 = var2.child_skus;
                var9 = var10.map;
                var7 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var5 = var9.bind(var10)(var7);
 163:
                var1['childSkuIds'] = var5;
                var5 = var2.alternative_skus;
                var7 = var4 != var5;
                var5 = null;
                if(!var7) { _fun0003_ip = 206; continue _fun0003 }
 183:
                var10 = var2.alternative_skus;
                var9 = var10.map;
                var7 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var5 = var9.bind(var10)(var7);
 206:
                var1['alternativeSkuIds'] = var5;
                var5 = var2.carousel_items;
                var7 = var4 != var5;
                var5 = null;
                if(!var7) { _fun0003_ip = 249; continue _fun0003 }
 226:
                var9 = var2.carousel_items;
                var7 = var9.map;
                var6 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var3 = var2.asset_id;
                    var1['assetId'] = var3;
                    var2 = var2.youtube_video_id;
                    var1['youtubeVideoId'] = var2;
                    return var1;
                };
                var5 = var7.bind(var9)(var6);
 249:
                var1['carouselItems'] = var5;
                var5 = var2.assets;
                var6 = var4 != var5;
                var5 = null;
                if(!var6) { _fun0003_ip = 316; continue _fun0003 }
 269:
                var9 = var2.assets;
                var7 = var9.map;
                var11 = _closure1_slot0;
                var10 = _closure1_slot1;
                var6 = 7;
                var10 = var10[var6];
                var6 = undefined;
                var6 = var11.bind(var6)(var10);
                var6 = var6.transformStoreAssetFromServer;
                var5 = var7.bind(var9)(var6);
 316:
                var1['assets'] = var5;
                var6 = var4 != var8;
                var5 = null;
                if(!var6) { _fun0003_ip = 394; continue _fun0003 }
 330:
                var6 = {};
                var7 = var8.content;
                var6['content'] = var7;
                var7 = var8.user;
                var9 = var4 != var7;
                var7 = null;
                if(!var9) { _fun0003_ip = 387; continue _fun0003 }
 355:
                var10 = _closure1_slot7;
                var12 = var8.user;
                var9 = var10.prototype;
                var9 = Object.create(var9, {constructor: {value: var10}});
                var13 = var9;
                var8 = new var13[var10](var12, var11);
                var7 = var8 instanceof Object ? var8 : var9;
 387:
                var6['user'] = var7;
                var5 = var6;
 394:
                var1['staffNotes'] = var5;
                var5 = var2.guild;
                var6 = var4 != var5;
                var5 = null;
                if(!var6) { _fun0003_ip = 492; continue _fun0003 }
 413:
                var6 = {};
                var7 = var2.guild;
                var7 = var7.id;
                var6['id'] = var7;
                var7 = var2.guild;
                var7 = var7.name;
                var6['name'] = var7;
                var7 = var2.guild;
                var7 = var7.icon;
                var6['icon'] = var7;
                var7 = var2.guild;
                var7 = var7.approximate_member_count;
                var6['approximateMemberCount'] = var7;
                var7 = var2.guild;
                var7 = var7.approximate_presence_count;
                var6['approximatePresenceCount'] = var7;
                var5 = var6;
 492:
                var1['guild'] = var5;
                var5 = var2.thumbnail;
                var6 = var4 != var5;
                var5 = null;
                if(!var6) { _fun0003_ip = 553; continue _fun0003 }
 511:
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var6 = 7;
                var7 = var7[var6];
                var6 = undefined;
                var8 = var8.bind(var6)(var7);
                var7 = var8.transformStoreAssetFromServer;
                var6 = var2.thumbnail;
                var5 = var7.bind(var8)(var6);
 553:
                var1['thumbnail'] = var5;
                var5 = var2.preview_video;
                var6 = var4 != var5;
                var5 = null;
                if(!var6) { _fun0003_ip = 615; continue _fun0003 }
 573:
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var6 = 7;
                var7 = var7[var6];
                var6 = undefined;
                var8 = var8.bind(var6)(var7);
                var7 = var8.transformStoreAssetFromServer;
                var6 = var2.preview_video;
                var5 = var7.bind(var8)(var6);
 615:
                var1['previewVideo'] = var5;
                var5 = var2.header_background;
                var6 = var4 != var5;
                var5 = null;
                if(!var6) { _fun0003_ip = 677; continue _fun0003 }
 635:
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var6 = 7;
                var7 = var7[var6];
                var6 = undefined;
                var8 = var8.bind(var6)(var7);
                var7 = var8.transformStoreAssetFromServer;
                var6 = var2.header_background;
                var5 = var7.bind(var8)(var6);
 677:
                var1['headerBackground'] = var5;
                var5 = var2.header_logo_dark_theme;
                var6 = var4 != var5;
                var5 = null;
                if(!var6) { _fun0003_ip = 739; continue _fun0003 }
 697:
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var6 = 7;
                var7 = var7[var6];
                var6 = undefined;
                var8 = var8.bind(var6)(var7);
                var7 = var8.transformStoreAssetFromServer;
                var6 = var2.header_logo_dark_theme;
                var5 = var7.bind(var8)(var6);
 739:
                var1['headerLogoDarkTheme'] = var5;
                var5 = var2.header_logo_light_theme;
                var6 = var4 != var5;
                var5 = null;
                if(!var6) { _fun0003_ip = 801; continue _fun0003 }
 759:
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var6 = 7;
                var7 = var7[var6];
                var6 = undefined;
                var8 = var8.bind(var6)(var7);
                var7 = var8.transformStoreAssetFromServer;
                var6 = var2.header_logo_light_theme;
                var5 = var7.bind(var8)(var6);
 801:
                var1['headerLogoLightTheme'] = var5;
                var5 = var2.box_art;
                var6 = var4 != var5;
                var5 = null;
                if(!var6) { _fun0003_ip = 863; continue _fun0003 }
 821:
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var6 = 7;
                var7 = var7[var6];
                var6 = undefined;
                var8 = var8.bind(var6)(var7);
                var7 = var8.transformStoreAssetFromServer;
                var6 = var2.box_art;
                var5 = var7.bind(var8)(var6);
 863:
                var1['boxArt'] = var5;
                var5 = var2.hero_background;
                var6 = var4 != var5;
                var5 = null;
                if(!var6) { _fun0003_ip = 925; continue _fun0003 }
 883:
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var6 = 7;
                var7 = var7[var6];
                var6 = undefined;
                var8 = var8.bind(var6)(var7);
                var7 = var8.transformStoreAssetFromServer;
                var6 = var2.hero_background;
                var5 = var7.bind(var8)(var6);
 925:
                var1['heroBackground'] = var5;
                var5 = var2.hero_video;
                var5 = var4 != var5;
                var4 = null;
                if(!var5) { _fun0003_ip = 987; continue _fun0003 }
 945:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var5 = 7;
                var6 = var6[var5];
                var5 = undefined;
                var7 = var7.bind(var5)(var6);
                var6 = var7.transformStoreAssetFromServer;
                var5 = var2.hero_video;
                var4 = var6.bind(var7)(var5);
 987:
                var1['heroVideo'] = var4;
                var4 = var2.entitlement_branch_id;
                var1['entitlementBranchId'] = var4;
                var4 = var2.benefits;
                var1['benefits'] = var4;
                var2 = var2.published;
                var1['published'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var13 = var2;
                var12 = var1;
                var1 = new var13[var3](var12, var11);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'records/StoreListingRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();