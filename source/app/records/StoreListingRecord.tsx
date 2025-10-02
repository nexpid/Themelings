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
case 0:
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
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
case 8:
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
                if(!(var3 == var5)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var5 = new Array(0);
case 9:
                var1['carouselItems'] = var5;
                var5 = var2.childSkuIds;
                if(!(var3 == var5)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var5 = new Array(0);
case 11:
                var1['childSkuIds'] = var5;
                var5 = var2.alternativeSkuIds;
                if(!(var3 == var5)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var5 = new Array(0);
case 13:
                var1['alternativeSkuIds'] = var5;
                var5 = var2.assets;
                if(!(var3 == var5)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var5 = new Array(0);
case 15:
                var1['assets'] = var5;
                var5 = var2.staffNotes;
                var1['staffNotes'] = var5;
                var5 = var2.guild;
                var1['guild'] = var5;
                var6 = var2.thumbnail;
                var7 = var3 != var6;
                var5 = null;
                if(!var7) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var5 = var6;
case 17:
                var1['thumbnail'] = var5;
                var6 = var2.boxArt;
                var7 = var3 != var6;
                var5 = null;
                if(!var7) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                var5 = var6;
case 19:
                var1['boxArt'] = var5;
                var6 = var2.previewVideo;
                var7 = var3 != var6;
                var5 = null;
                if(!var7) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var5 = var6;
case 21:
                var1['previewVideo'] = var5;
                var6 = var2.headerBackground;
                var7 = var3 != var6;
                var5 = null;
                if(!var7) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                var5 = var6;
case 23:
                var1['headerBackground'] = var5;
                var6 = var2.headerLogoDarkTheme;
                var7 = var3 != var6;
                var5 = null;
                if(!var7) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                var5 = var6;
case 25:
                var1['headerLogoDarkTheme'] = var5;
                var6 = var2.headerLogoLightTheme;
                var7 = var3 != var6;
                var5 = null;
                if(!var7) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                var5 = var6;
case 27:
                var1['headerLogoLightTheme'] = var5;
                var6 = var2.heroBackground;
                var7 = var3 != var6;
                var5 = null;
                if(!var7) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                var5 = var6;
case 29:
                var1['heroBackground'] = var5;
                var6 = var2.heroVideo;
                var7 = var3 != var6;
                var5 = null;
                if(!var7) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                var5 = var6;
case 31:
                var1['heroVideo'] = var5;
                var5 = var2.entitlementBranchId;
                var6 = var3 != var5;
                var3 = null;
                if(!var6) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                var3 = var5;
case 33:
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
case 0:
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
                if(!var7) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                var10 = var2.child_skus;
                var9 = var10.map;
                var7 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var5 = var9.bind(var10)(var7);
case 35:
                var1['childSkuIds'] = var5;
                var5 = var2.alternative_skus;
                var7 = var4 != var5;
                var5 = null;
                if(!var7) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                var10 = var2.alternative_skus;
                var9 = var10.map;
                var7 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var5 = var9.bind(var10)(var7);
case 37:
                var1['alternativeSkuIds'] = var5;
                var5 = var2.carousel_items;
                var7 = var4 != var5;
                var5 = null;
                if(!var7) { _fun0003_ip = 39; continue _fun0003 }
case 40:
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
case 39:
                var1['carouselItems'] = var5;
                var5 = var2.assets;
                var6 = var4 != var5;
                var5 = null;
                if(!var6) { _fun0003_ip = 41; continue _fun0003 }
case 42:
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
case 41:
                var1['assets'] = var5;
                var6 = var4 != var8;
                var5 = null;
                if(!var6) { _fun0003_ip = 24; continue _fun0003 }
case 43:
                var6 = {};
                var7 = var8.content;
                var6['content'] = var7;
                var7 = var8.user;
                var9 = var4 != var7;
                var7 = null;
                if(!var9) { _fun0003_ip = 44; continue _fun0003 }
case 45:
                var10 = _closure1_slot7;
                var12 = var8.user;
                var9 = var10.prototype;
                var9 = Object.create(var9, {constructor: {value: var10}});
                var13 = var9;
                var8 = new var13[var10](var12, var11);
                var7 = var8 instanceof Object ? var8 : var9;
case 44:
                var6['user'] = var7;
                var5 = var6;
case 24:
                var1['staffNotes'] = var5;
                var5 = var2.guild;
                var6 = var4 != var5;
                var5 = null;
                if(!var6) { _fun0003_ip = 46; continue _fun0003 }
case 47:
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
case 46:
                var1['guild'] = var5;
                var5 = var2.thumbnail;
                var6 = var4 != var5;
                var5 = null;
                if(!var6) { _fun0003_ip = 48; continue _fun0003 }
case 49:
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var6 = 7;
                var7 = var7[var6];
                var6 = undefined;
                var8 = var8.bind(var6)(var7);
                var7 = var8.transformStoreAssetFromServer;
                var6 = var2.thumbnail;
                var5 = var7.bind(var8)(var6);
case 48:
                var1['thumbnail'] = var5;
                var5 = var2.preview_video;
                var6 = var4 != var5;
                var5 = null;
                if(!var6) { _fun0003_ip = 50; continue _fun0003 }
case 51:
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var6 = 7;
                var7 = var7[var6];
                var6 = undefined;
                var8 = var8.bind(var6)(var7);
                var7 = var8.transformStoreAssetFromServer;
                var6 = var2.preview_video;
                var5 = var7.bind(var8)(var6);
case 50:
                var1['previewVideo'] = var5;
                var5 = var2.header_background;
                var6 = var4 != var5;
                var5 = null;
                if(!var6) { _fun0003_ip = 52; continue _fun0003 }
case 53:
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var6 = 7;
                var7 = var7[var6];
                var6 = undefined;
                var8 = var8.bind(var6)(var7);
                var7 = var8.transformStoreAssetFromServer;
                var6 = var2.header_background;
                var5 = var7.bind(var8)(var6);
case 52:
                var1['headerBackground'] = var5;
                var5 = var2.header_logo_dark_theme;
                var6 = var4 != var5;
                var5 = null;
                if(!var6) { _fun0003_ip = 54; continue _fun0003 }
case 55:
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var6 = 7;
                var7 = var7[var6];
                var6 = undefined;
                var8 = var8.bind(var6)(var7);
                var7 = var8.transformStoreAssetFromServer;
                var6 = var2.header_logo_dark_theme;
                var5 = var7.bind(var8)(var6);
case 54:
                var1['headerLogoDarkTheme'] = var5;
                var5 = var2.header_logo_light_theme;
                var6 = var4 != var5;
                var5 = null;
                if(!var6) { _fun0003_ip = 56; continue _fun0003 }
case 57:
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var6 = 7;
                var7 = var7[var6];
                var6 = undefined;
                var8 = var8.bind(var6)(var7);
                var7 = var8.transformStoreAssetFromServer;
                var6 = var2.header_logo_light_theme;
                var5 = var7.bind(var8)(var6);
case 56:
                var1['headerLogoLightTheme'] = var5;
                var5 = var2.box_art;
                var6 = var4 != var5;
                var5 = null;
                if(!var6) { _fun0003_ip = 58; continue _fun0003 }
case 59:
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var6 = 7;
                var7 = var7[var6];
                var6 = undefined;
                var8 = var8.bind(var6)(var7);
                var7 = var8.transformStoreAssetFromServer;
                var6 = var2.box_art;
                var5 = var7.bind(var8)(var6);
case 58:
                var1['boxArt'] = var5;
                var5 = var2.hero_background;
                var6 = var4 != var5;
                var5 = null;
                if(!var6) { _fun0003_ip = 60; continue _fun0003 }
case 61:
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var6 = 7;
                var7 = var7[var6];
                var6 = undefined;
                var8 = var8.bind(var6)(var7);
                var7 = var8.transformStoreAssetFromServer;
                var6 = var2.hero_background;
                var5 = var7.bind(var8)(var6);
case 60:
                var1['heroBackground'] = var5;
                var5 = var2.hero_video;
                var5 = var4 != var5;
                var4 = null;
                if(!var5) { _fun0003_ip = 62; continue _fun0003 }
case 63:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var5 = 7;
                var6 = var6[var5];
                var5 = undefined;
                var7 = var7.bind(var5)(var6);
                var6 = var7.transformStoreAssetFromServer;
                var5 = var2.hero_video;
                var4 = var6.bind(var7)(var5);
case 62:
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