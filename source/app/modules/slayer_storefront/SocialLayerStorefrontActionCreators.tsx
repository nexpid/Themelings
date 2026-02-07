// app/modules/slayer_storefront/SocialLayerStorefrontActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function _fetchSocialLayerStorefront() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var4 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var8 = arg1;
                    var3 = undefined;
                    if(!(var4 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var4 = {};
case 4:
                    var7 = undefined;
                    var12 = undefined;
                    SaveGenerator(address=32);
case 6:
                    return var3;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var6 = var4.eager;
                    var5 = var3 !== var6;
                    if(!var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var5 = var6;
case 10:
                    var7 = var5;
                    var4 = var4.forceFetch;
                    var5 = var3 !== var4;
                    if(!var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var5 = var4;
case 12:
                    var10 = _closure1_slot4;
                    var9 = var10.getStorefrontData;
                    var6 = var8;
                    var10 = var9.bind(var10)(var6);
                    var13 = null;
                    var6 = var13 == var10;
                    var11 = undefined;
                    if(var6) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var11 = var10.state;
case 14:
                    var6 = var13 == var10;
                    var9 = undefined;
                    if(var6) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var9 = var10.state;
case 16:
                    var6 = 'error';
                    var9 = var6 === var9;
                    if(!var9) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var14 = var13 == var10;
                    var6 = undefined;
                    if(var14) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var6 = var10.fetchedAt;
case 20:
                    var9 = var13 != var6;
case 18:
                    if(!var9) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var6 = global;
                    var14 = var6.Date;
                    var6 = var14.now;
                    var14 = var6.bind(var14)();
                    var6 = var10.fetchedAt;
                    var14 = var14 - var6;
                    var6 = _closure1_slot6;
                    var9 = var14 < var6;
case 22:
                    var6 = var13 == var10;
                    var14 = undefined;
                    if(var6) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var14 = var10.state;
case 24:
                    var6 = 'fetched';
                    var6 = var6 === var14;
                    if(!var6) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                    var15 = var13 == var10;
                    var14 = undefined;
                    if(var15) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                    var14 = var10.fetchedAt;
case 28:
                    var6 = var13 != var14;
case 26:
                    if(!var6) { _fun0001_ip = 30; continue _fun0001 }
case 31:
                    var14 = global;
                    var15 = var14.Date;
                    var14 = var15.now;
                    var14 = var14.bind(var15)();
                    var10 = var10.fetchedAt;
                    var14 = var14 - var10;
                    var10 = _closure1_slot7;
                    var6 = var14 < var10;
case 30:
                    var10 = 'loading';
                    if(!(var10 !== var11)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
                    if(var9) { _fun0001_ip = 32; continue _fun0001 }
case 34:
                    if(!var6) { _fun0001_ip = 35; continue _fun0001 }
case 32:
                    if(!var5) { _fun0001_ip = 36; continue _fun0001 }
case 35: // try_start_0
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var10 = 4;
                    var5 = var9[var10];
                    var11 = var6.bind(var3)(var5);
                    var6 = var11.dispatch;
                    var5 = {};
                    var14 = 'SOCIAL_LAYER_STOREFRONT_LOAD';
                    var5['type'] = var14;
                    var15 = var8;
                    var5['guildId'] = var15;
                    var5 = var6.bind(var11)(var5);
                    var6 = _closure1_slot0;
                    var5 = 5;
                    var5 = var9[var5];
                    var5 = var6.bind(var3)(var5);
                    var9 = var5.HTTP;
                    var6 = var9.get;
                    var5 = {'url': null, 'rejectWithError': true, 'retries': 3};
                    var14 = _closure1_slot5;
                    var11 = var14.SOCIAL_LAYER_APPLICATION_STOREFRONT;
                    var11 = var11.bind(var14)(var15);
                    var5['url'] = var11;
                    var5 = var6.bind(var9)(var5);
                    SaveGenerator(address=418);
case 37:
                    return var5;
case 38:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 39; continue _fun0001 }
case 40:
                    var9 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var11 = var6[var10];
                    var15 = var9.bind(var3)(var11);
                    var14 = var15.dispatch;
                    var11 = {};
                    var16 = 'SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS';
                    var11['type'] = var16;
                    var16 = var8;
                    var11['guildId'] = var16;
                    var17 = _closure1_slot0;
                    var16 = 6;
                    var16 = var6[var16];
                    var18 = var17.bind(var3)(var16);
                    var17 = var18.transformSlayerApplicationStorefrontServer;
                    var16 = var5.body;
                    var16 = var17.bind(var18)(var16);
                    var11['storefront'] = var16;
                    var11 = var14.bind(var15)(var11);
                    var6 = var6[var10];
                    var10 = var9.bind(var3)(var6);
                    var9 = var10.dispatch;
                    var6 = {};
                    var11 = 'STORE_LISTINGS_FETCH_SUCCESS';
                    var6['type'] = var11;
                    var11 = var5.body;
                    var11 = var11.store_listings;
                    var12 = var11;
                    if(!(var13 == var11)) { _fun0001_ip = 41; continue _fun0001 }
case 42:
                    var11 = new Array(0);
                    _fun0001_ip = 43; continue _fun0001;
case 41:
                    var11 = var12;
case 43:
                    var6['storeListings'] = var11;
                    var6 = var9.bind(var10)(var6);
case 44: // try_end0
                    _fun0001_ip = 36; continue _fun0001;
case 39:
                    return var5;
case 45: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 4;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var9 = 'SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE';
                    var4['type'] = var9;
                    var4['guildId'] = var8;
                    var4['eager'] = var7;
                    var4 = var5.bind(var6)(var4);
case 36:
                    return var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function _fetchSocialLayerStorefrontSku() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 46; continue _fun0002 }
case 47:
                    var13 = arg1;
                    var6 = arg2;
                    var2 = undefined;
                    var8 = undefined;
case 48: // try_start_0
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var7 = 4;
                    var3 = var5[var7];
                    var9 = var4.bind(var2)(var3);
                    var4 = var9.dispatch;
                    var3 = {};
                    var10 = 'STORE_LISTINGS_FETCH_START';
                    var3['type'] = var10;
                    var14 = var6;
                    var3['skuId'] = var14;
                    var3 = var4.bind(var9)(var3);
                    var4 = _closure1_slot0;
                    var3 = 5;
                    var3 = var5[var3];
                    var3 = var4.bind(var2)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.get;
                    var3 = {};
                    var11 = _closure1_slot5;
                    var10 = var11.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU;
                    var9 = var13;
                    var9 = var10.bind(var11)(var9, var14);
                    var3['url'] = var9;
                    var9 = true;
                    var3['rejectWithError'] = var9;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=137);
case 49:
                    return var3;
case 50:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 38; continue _fun0002 }
case 51:
                    var8 = var3;
                    var5 = var3.body;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0002_ip = 52; continue _fun0002 }
case 53:
                    var4 = var8;
                    var4 = var4.ok;
                    if(!var4) { _fun0002_ip = 52; continue _fun0002 }
case 54:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var9 = var4[var7];
                    var11 = var5.bind(var2)(var9);
                    var10 = var11.dispatch;
                    var9 = {};
                    var14 = 'SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS';
                    var9['type'] = var14;
                    var9['guildId'] = var13;
                    var13 = _closure1_slot0;
                    var12 = 6;
                    var12 = var4[var12];
                    var14 = var13.bind(var2)(var12);
                    var13 = var14.transformSlayerApplicationStorefrontServer;
                    var12 = {};
                    var15 = var8.body;
                    var15 = var15.store_listing;
                    var15 = var15.sku;
                    var15 = var15.application_id;
                    var12['application_id'] = var15;
                    var15 = '';
                    var12['title'] = var15;
                    var12['logo_asset_id'] = var2;
                    var12['light_theme_logo_asset_id'] = var2;
                    var15 = new Array(0);
                    var12['pages'] = var15;
                    var15 = new Array(0);
                    var12['store_listings'] = var15;
                    var15 = var8.body;
                    var15 = var15.assets;
                    var12['assets'] = var15;
                    var12 = var13.bind(var14)(var12);
                    var9['storefront'] = var12;
                    var9 = var10.bind(var11)(var9);
                    var4 = var4[var7];
                    var7 = var5.bind(var2)(var4);
                    var5 = var7.dispatch;
                    var4 = {};
                    var9 = 'STORE_LISTING_FETCH_SUCCESS';
                    var4['type'] = var9;
                    var8 = var8.body;
                    var8 = var8.store_listing;
                    var4['storeListing'] = var8;
                    var4 = var5.bind(var7)(var4);
case 55: // try_end0
                    _fun0002_ip = 56; continue _fun0002;
case 52: // try_start_1
                    var4 = global;
                    var7 = var4.Error;
                    var4 = var7.prototype;
                    var5 = Object.create(var4, {constructor: {value: var7}});
                    var17 = 'Failed to fetch social layer storefront SKU';
                    var18 = var5;
                    var4 = new var18[var7](var17, var16);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
case 38: // try_end1
                    return var3;
case 57: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=2);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 4;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'STORE_LISTINGS_FETCH_FAIL';
                    var3['type'] = var7;
                    var3['skuId'] = var6;
                    var3 = var4.bind(var5)(var3);
case 56:
                    return var2;
case 46:
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
    var1 = function _fetchSocialLayerStorefrontRecommendations() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 58; continue _fun0003 }
case 3:
                    var8 = var2.applicationId;
                    var7 = var2.userIds;
                    var4 = var2.maxRecommendations;
                    var6 = undefined;
                    if(!(var4 === var6)) { _fun0003_ip = 9; continue _fun0003 }
case 59:
                    var4 = 6;
case 9:
                    var13 = var4;
                    var2 = var2.includeWishlists;
                    if(!(var2 === var6)) { _fun0003_ip = 60; continue _fun0003 }
case 61:
                    var2 = false;
case 60:
                    var14 = var2;
                    SaveGenerator(address=65);
case 62:
                    return var6;
case 63:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 64; continue _fun0003 }
case 65:
                    var3 = var7;
                    var4 = var3.length;
                    var3 = 0;
                    if(!(var3 !== var4)) { _fun0003_ip = 54; continue _fun0003 }
case 66:
                    var10 = _closure1_slot4;
                    var9 = var10.recommendationsByApplicationsAndUsers;
                    var5 = var8;
                    var3 = var7;
                    var5 = var9.bind(var10)(var5, var3);
                    var3 = null;
                    if(!(var3 != var5)) { _fun0003_ip = 67; continue _fun0003 }
case 68:
                    var10 = var5.state;
                    var9 = 'error';
                    if(!(var9 !== var10)) { _fun0003_ip = 54; continue _fun0003 }
case 69:
                    var10 = var5.state;
                    var9 = 'loading';
                    if(!(var9 !== var10)) { _fun0003_ip = 54; continue _fun0003 }
case 70:
                    var10 = var5.state;
                    var9 = 'success';
                    if(!(var9 === var10)) { _fun0003_ip = 67; continue _fun0003 }
case 71:
                    var5 = var5.data;
                    var9 = var5.numItemsRequested;
                    var5 = var13;
                    if(!(var9 >= var5)) { _fun0003_ip = 67; continue _fun0003 }
case 54:
                    return var6;
case 67: // try_start_0
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var12 = 4;
                    var5 = var10[var12];
                    var11 = var9.bind(var6)(var5);
                    var9 = var11.dispatch;
                    var5 = {};
                    var15 = 'SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_START';
                    var5['type'] = var15;
                    var17 = var8;
                    var5['applicationId'] = var17;
                    var15 = var7;
                    var5['userIds'] = var15;
                    var5 = var9.bind(var11)(var5);
                    var9 = _closure1_slot0;
                    var5 = 5;
                    var5 = var10[var5];
                    var5 = var9.bind(var6)(var5);
                    var10 = var5.HTTP;
                    var9 = var10.get;
                    var5 = {};
                    var16 = _closure1_slot5;
                    var11 = var16.SOCIAL_LAYER_APPLCIATION_RECOMMENDATIONS;
                    var11 = var11.bind(var16)(var17);
                    var5['url'] = var11;
                    var11 = true;
                    var5['rejectWithError'] = var11;
                    var11 = {};
                    var11['user_ids'] = var15;
                    var15 = var13;
                    var11['max_recommendations'] = var15;
                    var11['include_wishlists'] = var14;
                    var5['query'] = var11;
                    var5 = var9.bind(var10)(var5);
                    SaveGenerator(address=329);
case 72:
                    return var5;
case 73:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0003_ip = 74; continue _fun0003 }
case 75:
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var9 = 6;
                    var9 = var10[var9];
                    var14 = var11.bind(var6)(var9);
                    var11 = var14.transformSocialLayerStorefrontRecommendationServer;
                    var9 = var5.body;
                    var9 = var11.bind(var14)(var9);
                    var11 = _closure1_slot1;
                    var10 = var10[var12];
                    var12 = var11.bind(var6)(var10);
                    var11 = var12.dispatch;
                    var10 = {};
                    var14 = 'SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_SUCCESS';
                    var10['type'] = var14;
                    var19 = var10;
                    var18 = var9;
                    var14 = copyDataProperties(var19, var18);
                    var15 = var7;
                    var14 = 'userIds';
                    var10[var14] = var15;
                    var14 = var13;
                    var13 = 'numItemsRequested';
                    var10[var13] = var14;
                    var10 = var11.bind(var12)(var10);
case 76: // try_end0
                    return var9;
case 74:
                    return var5;
case 77: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var4 = 4;
                    var4 = var9[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var9 = 'SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_FAILURE';
                    var4['type'] = var9;
                    var4['applicationId'] = var8;
                    var4['userIds'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 64:
                    return var2;
case 58:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function _fetchSocialLayerStorefrontAnnouncement() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 78; continue _fun0004 }
case 47:
                    var5 = arg1;
case 3: // try_start_0
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var7 = 4;
                    var2 = var8[var7];
                    var6 = undefined;
                    var9 = var4.bind(var6)(var2);
                    var4 = var9.dispatch;
                    var2 = {};
                    var10 = 'SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START';
                    var2['type'] = var10;
                    var11 = var5;
                    var2['guildId'] = var11;
                    var2 = var4.bind(var9)(var2);
                    var4 = _closure1_slot0;
                    var2 = 5;
                    var2 = var8[var2];
                    var2 = var4.bind(var6)(var2);
                    var8 = var2.HTTP;
                    var4 = var8.get;
                    var2 = {};
                    var10 = _closure1_slot5;
                    var9 = var10.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT;
                    var9 = var9.bind(var10)(var11);
                    var2['url'] = var9;
                    var9 = true;
                    var2['rejectWithError'] = var9;
                    var2 = var4.bind(var8)(var2);
                    SaveGenerator(address=129);
case 79:
                    return var2;
case 16:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 80; continue _fun0004 }
case 49:
                    var8 = var2.body;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var6 = var4.bind(var6)(var3);
                    var4 = var6.dispatch;
                    var3 = {};
                    var7 = 'SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS';
                    var3['type'] = var7;
                    var7 = var5;
                    var3['guildId'] = var7;
                    var7 = {};
                    var9 = var8.id;
                    var7['id'] = var9;
                    var9 = var8.application_id;
                    var7['applicationId'] = var9;
                    var9 = var8.application_name;
                    var7['applicationName'] = var9;
                    var9 = var8.asset_id;
                    var7['assetId'] = var9;
                    var8 = var8.background_image_asset_id;
                    var7['backgroundImageAssetId'] = var8;
                    var3['announcement'] = var7;
                    var3 = var4.bind(var6)(var3);
case 81: // try_end0
                    _fun0004_ip = 82; continue _fun0004;
case 80:
                    return var2;
case 83: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {};
                    var6 = 'SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE';
                    var2['type'] = var6;
                    var2['guildId'] = var5;
                    var2 = var3.bind(var4)(var2);
case 82:
                    var2 = undefined;
                    return var2;
case 78:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot5 = var4;
    var4 = 3;
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var7 = var7.Millis;
    var9 = var7.SECOND;
    var7 = 30;
    var9 = var7 * var9;
    var _closure1_slot6 = var9;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.MINUTE;
    var4 = var7 * var4;
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/SocialLayerStorefrontActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 5;
    var3['MAX_USERS_PER_RECOMMENDATION'] = var4;
    var4 = function fetchSocialLayerStorefront() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchSocialLayerStorefront'] = var4;
    var4 = function fetchSocialLayerStorefrontSku() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchSocialLayerStorefrontSku'] = var4;
    var4 = function setSocialLayerStorefrontState(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SET_SOCIAL_LAYER_STOREFRONT_STATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var5 = arg2;
        var2['pageIndex'] = var5;
        var5 = arg3;
        var2['skuId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setSocialLayerStorefrontState'] = var4;
    var4 = function fetchSocialLayerStorefrontRecommendations() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchSocialLayerStorefrontRecommendations'] = var4;
    var4 = function fetchSocialLayerStorefrontAnnouncement() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchSocialLayerStorefrontAnnouncement'] = var4;
    var2 = function fetchSocialLayerSKUPurchaseEligibility(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var9 = arg2;
            var _closure2_slot0 = var9;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.getIsEligibleForSocialLayerStorefrontSKUPurchaseEligibilityExperiment;
            var3 = {};
            var7 = arg3;
            var3['location'] = var7;
            var3 = var4.bind(var5)(var3);
            if(!var3) { _fun0005_ip = 84; continue _fun0005 }
case 85:
            var4 = _closure1_slot4;
            var3 = var4.getSKUEligibility;
            var5 = var3.bind(var4)(var9);
            var3 = 'checking';
            var3 = var3 !== var5;
            if(!var3) { _fun0005_ip = 86; continue _fun0005 }
case 66:
            var4 = 'eligible';
            var3 = var4 !== var5;
case 86:
            if(!var3) { _fun0005_ip = 87; continue _fun0005 }
case 88:
            var4 = 'ineligible';
            var3 = var4 !== var5;
case 87:
            if(!var3) { _fun0005_ip = 84; continue _fun0005 }
case 89:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 4;
            var3 = var5[var3];
            var7 = var4.bind(var1)(var3);
            var4 = var7.dispatch;
            var3 = {};
            var8 = 'SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START';
            var3['type'] = var8;
            var3['skuId'] = var9;
            var3 = var4.bind(var7)(var3);
            var4 = _closure1_slot0;
            var3 = 5;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var5 = var3.HTTP;
            var4 = var5.post;
            var3 = {};
            var8 = _closure1_slot5;
            var7 = var8.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_ELIGIBILITY;
            var6 = arg1;
            var6 = var7.bind(var8)(var6, var9);
            var3['url'] = var6;
            var6 = true;
            var3['rejectWithError'] = var6;
            var5 = var4.bind(var5)(var3);
            var4 = var5.then;
            var3 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE';
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var2['skuId'] = var5;
                var5 = arg1;
                var5 = var5.body;
                var5 = var5.interaction_id;
                var2['interactionId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.catch;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE';
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var2['skuId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
case 84:
            return var1;
        }
    };
    var3['fetchSocialLayerSKUPurchaseEligibility'] = var2;
    return var1;
})();