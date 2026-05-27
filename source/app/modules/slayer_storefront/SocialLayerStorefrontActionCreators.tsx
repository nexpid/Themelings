// app/modules/slayer_storefront/SocialLayerStorefrontActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function _fetchSocialLayerStorefront() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var4;
    var1 = function _fetchSocialLayerStorefront2() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var4 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var8 = arg1;
                    var14 = arg2;
                    var3 = undefined;
                    if(!(var4 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var4 = {};
case 4:
                    var7 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    var17 = undefined;
                    var19 = undefined;
                    SaveGenerator(address=41);
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
                    var9 = var10.getStorefrontFetchState;
                    var6 = var8;
                    var10 = var9.bind(var10)(var6);
                    var13 = null;
                    var6 = var13 == var10;
                    var15 = undefined;
                    if(var6) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var15 = var10.state;
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
                    var6 = var10.fetchedAt;
                    var9 = var13 != var6;
case 18:
                    if(!var9) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var6 = global;
                    var16 = var6.Date;
                    var6 = var16.now;
                    var16 = var6.bind(var16)();
                    var6 = var10.fetchedAt;
                    var16 = var16 - var6;
                    var6 = _closure1_slot6;
                    var9 = var16 < var6;
case 20:
                    var6 = var13 == var10;
                    var16 = undefined;
                    if(var6) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var16 = var10.state;
case 22:
                    var6 = 'fetched';
                    var6 = var6 === var16;
                    if(!var6) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var16 = var10.fetchedAt;
                    var6 = var13 != var16;
case 24:
                    if(!var6) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                    var16 = global;
                    var18 = var16.Date;
                    var16 = var18.now;
                    var16 = var16.bind(var18)();
                    var10 = var10.fetchedAt;
                    var16 = var16 - var10;
                    var10 = _closure1_slot7;
                    var6 = var16 < var10;
case 26:
                    var10 = 'loading';
                    if(!(var10 !== var15)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                    if(var9) { _fun0001_ip = 28; continue _fun0001 }
case 30:
                    if(!var6) { _fun0001_ip = 31; continue _fun0001 }
case 28:
                    if(!var5) { _fun0001_ip = 32; continue _fun0001 }
case 31: // try_start_0
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var10 = 4;
                    var5 = var9[var10];
                    var15 = var6.bind(var3)(var5);
                    var6 = var15.dispatch;
                    var5 = {};
                    var16 = 'SOCIAL_LAYER_STOREFRONT_LOAD';
                    var5['type'] = var16;
                    var16 = var8;
                    var5['guildOrApplicationId'] = var16;
                    var5 = var6.bind(var15)(var5);
                    var6 = _closure1_slot0;
                    var5 = 5;
                    var5 = var9[var5];
                    var5 = var6.bind(var3)(var5);
                    var9 = var5.HTTP;
                    var6 = var9.get;
                    var5 = {'url': null, 'rejectWithError': true, 'retries': 3};
                    var5['url'] = var14;
                    var5 = var6.bind(var9)(var5);
                    SaveGenerator(address=395);
case 33:
                    return var5;
case 34:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 35; continue _fun0001 }
case 36:
                    var11 = var5;
                    var14 = var5.body;
                    var17 = var14;
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var18 = 6;
                    var6 = var6[var18];
                    var9 = var9.bind(var3)(var6);
                    var6 = var9.transformSlayerApplicationStorefrontServer;
                    var6 = var6.bind(var9)(var14);
                    var19 = var6;
                    var6 = var6.storefrontPricing;
                    if(!(var13 != var6)) { _fun0001_ip = 37; continue _fun0001 }
case 38:
                    var9 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var10];
                    var14 = var9.bind(var3)(var6);
                    var9 = var14.dispatch;
                    var6 = {};
                    var15 = 'SKUS_PRICING_FETCH_SUCCESS';
                    var6['type'] = var15;
                    var16 = {};
                    var15 = 'application';
                    var16['type'] = var15;
                    var15 = var19;
                    var20 = var15.applicationId;
                    var16['applicationId'] = var20;
                    var6['priceId'] = var16;
                    var15 = var15.storefrontPricing;
                    var6['data'] = var15;
                    var6 = var9.bind(var14)(var6);
case 37:
                    var9 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var14 = var6[var10];
                    var16 = var9.bind(var3)(var14);
                    var15 = var16.dispatch;
                    var14 = {};
                    var20 = 'SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS';
                    var14['type'] = var20;
                    var20 = var8;
                    var14['guildOrApplicationId'] = var20;
                    var14['storefront'] = var19;
                    var14 = var15.bind(var16)(var14);
                    var14 = var6[var10];
                    var16 = var9.bind(var3)(var14);
                    var15 = var16.dispatch;
                    var14 = {};
                    var20 = 'SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS';
                    var14['type'] = var20;
                    var19 = var19.applicationId;
                    var14['applicationId'] = var19;
                    var19 = _closure1_slot0;
                    var18 = var6[var18];
                    var19 = var19.bind(var3)(var18);
                    var18 = var19.transformStorefrontMetadataServer;
                    var17 = var18.bind(var19)(var17);
                    var14['storefrontMetadata'] = var17;
                    var14 = var15.bind(var16)(var14);
                    var6 = var6[var10];
                    var10 = var9.bind(var3)(var6);
                    var9 = var10.dispatch;
                    var6 = {};
                    var14 = 'STORE_LISTINGS_FETCH_SUCCESS';
                    var6['type'] = var14;
                    var11 = var11.body;
                    var11 = var11.store_listings;
                    var12 = var11;
                    if(!(var13 == var11)) { _fun0001_ip = 39; continue _fun0001 }
case 40:
                    var11 = new Array(0);
                    _fun0001_ip = 41; continue _fun0001;
case 39:
                    var11 = var12;
case 41:
                    var6['storeListings'] = var11;
                    var6 = var9.bind(var10)(var6);
case 42: // try_end0
                    _fun0001_ip = 32; continue _fun0001;
case 35:
                    return var5;
case 43: // catch_target0
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
                    var4['guildOrApplicationId'] = var8;
                    var4['eager'] = var7;
                    var4 = var5.bind(var6)(var4);
case 32:
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
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function _fetchSocialLayerStorefrontSkuWithUrl() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function _fetchSocialLayerStorefrontSkuWithUrl2() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var4 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 44; continue _fun0002 }
case 3:
                    var7 = arg1;
                    var14 = arg2;
                    var3 = undefined;
                    if(!(var4 === var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = {};
case 4:
                    var13 = undefined;
                    var6 = undefined;
                    var9 = undefined;
                    var12 = undefined;
                    SaveGenerator(address=39);
case 45:
                    return var3;
case 6:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 46; continue _fun0002 }
case 47:
                    var5 = var4.withGoogleSkuIds;
                    var8 = var3 !== var5;
                    var4 = var8;
                    if(!var8) { _fun0002_ip = 48; continue _fun0002 }
case 49:
                    var4 = var5;
case 48:
                    var13 = var4;
case 50: // try_start_0
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var8 = 4;
                    var4 = var11[var8];
                    var15 = var10.bind(var3)(var4);
                    var10 = var15.dispatch;
                    var4 = {};
                    var16 = 'STORE_LISTINGS_FETCH_START';
                    var4['type'] = var16;
                    var16 = var7;
                    var4['skuId'] = var16;
                    var4 = var10.bind(var15)(var4);
                    var10 = _closure1_slot0;
                    var4 = 5;
                    var4 = var11[var4];
                    var4 = var10.bind(var3)(var4);
                    var11 = var4.HTTP;
                    var10 = var11.get;
                    var4 = {};
                    var4['url'] = var14;
                    var14 = var13;
                    var13 = undefined;
                    if(!var14) { _fun0002_ip = 51; continue _fun0002 }
case 52:
                    var14 = {};
                    var15 = true;
                    var14['with_google_sku_ids'] = var15;
                    var13 = var14;
case 51:
                    var4['query'] = var13;
                    var13 = true;
                    var4['rejectWithError'] = var13;
                    var4 = var10.bind(var11)(var4);
                    SaveGenerator(address=194);
case 53:
                    return var4;
case 54:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                    if(var10) { _fun0002_ip = 55; continue _fun0002 }
case 56:
                    var6 = var4;
                    var11 = var4.body;
                    var10 = null;
                    if(!(var10 != var11)) { _fun0002_ip = 57; continue _fun0002 }
case 58:
                    var11 = var6;
                    var11 = var11.ok;
                    if(!var11) { _fun0002_ip = 57; continue _fun0002 }
case 27:
                    var15 = var6;
                    var6 = var15.body;
                    var9 = var6.store_listing;
                    var6 = var15.body;
                    var6 = var6.storefront_metadata;
                    var12 = var6;
                    var13 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var11 = var11[var8];
                    var14 = var13.bind(var3)(var11);
                    var13 = var14.dispatch;
                    var11 = {};
                    var16 = 'SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS';
                    var11['type'] = var16;
                    var16 = global;
                    var17 = var16.Object;
                    var16 = var17.fromEntries;
                    var15 = var15.body;
                    var19 = var15.assets;
                    var18 = var19.map;
                    var15 = function(arg1) {
                        var2 = arg1;
                        var3 = var2.id;
                        var1 = new Array(2);
                        var1[0] = var3;
                        var1[1] = var2;
                        return var1;
                    };
                    var15 = var18.bind(var19)(var15);
                    var15 = var16.bind(var17)(var15);
                    var11['assets'] = var15;
                    var11 = var13.bind(var14)(var11);
                    if(!(var10 != var6)) { _fun0002_ip = 59; continue _fun0002 }
case 60:
                    var10 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var6 = var15[var8];
                    var11 = var10.bind(var3)(var6);
                    var10 = var11.dispatch;
                    var6 = {};
                    var13 = 'SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS';
                    var6['type'] = var13;
                    var13 = var9;
                    var13 = var13.sku;
                    var13 = var13.application_id;
                    var6['applicationId'] = var13;
                    var14 = _closure1_slot0;
                    var13 = 6;
                    var13 = var15[var13];
                    var14 = var14.bind(var3)(var13);
                    var13 = var14.transformStorefrontMetadataServer;
                    var12 = var13.bind(var14)(var12);
                    var6['storefrontMetadata'] = var12;
                    var6 = var10.bind(var11)(var6);
case 59:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var8 = var6.bind(var3)(var5);
                    var6 = var8.dispatch;
                    var5 = {};
                    var10 = 'STORE_LISTING_FETCH_SUCCESS';
                    var5['type'] = var10;
                    var5['storeListing'] = var9;
                    var5 = var6.bind(var8)(var5);
case 61: // try_end0
                    _fun0002_ip = 62; continue _fun0002;
case 57: // try_start_1
                    var5 = global;
                    var8 = var5.Error;
                    var5 = var8.prototype;
                    var6 = Object.create(var5, {constructor: {value: var8}});
                    var20 = 'Failed to fetch social layer storefront SKU';
                    var21 = var6;
                    var5 = new var21[var8](var20, var19);
                    var5 = var5 instanceof Object ? var5 : var6;
                    throw var5;
case 55: // try_end1
                    return var4;
case 37: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 4;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'STORE_LISTINGS_FETCH_FAIL';
                    var4['type'] = var8;
                    var4['skuId'] = var7;
                    var4 = var5.bind(var6)(var4);
case 62:
                    return var3;
case 46:
                    return var2;
case 44:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function _fetchSocialLayerStorefrontAnnouncement() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 63; continue _fun0003 }
case 64:
                    var6 = arg1;
                    var2 = undefined;
                    var9 = undefined;
case 65: // try_start_0
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var7 = 4;
                    var3 = var8[var7];
                    var10 = var5.bind(var2)(var3);
                    var5 = var10.dispatch;
                    var3 = {};
                    var11 = 'SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START';
                    var3['type'] = var11;
                    var12 = var6;
                    var3['guildId'] = var12;
                    var3 = var5.bind(var10)(var3);
                    var5 = _closure1_slot0;
                    var3 = 5;
                    var3 = var8[var3];
                    var3 = var5.bind(var2)(var3);
                    var8 = var3.HTTP;
                    var5 = var8.get;
                    var3 = {};
                    var11 = _closure1_slot5;
                    var10 = var11.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT;
                    var10 = var10.bind(var11)(var12);
                    var3['url'] = var10;
                    var10 = true;
                    var3['rejectWithError'] = var10;
                    var3 = var5.bind(var8)(var3);
                    SaveGenerator(address=131);
case 66:
                    return var3;
case 67:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 68; continue _fun0003 }
case 69:
                    var5 = var3.body;
                    var9 = var5;
                    var5 = var5.type;
                    var10 = 'guild-discord-announcement';
                    if(!(var10 !== var5)) { _fun0003_ip = 24; continue _fun0003 }
case 70:
                    var8 = {};
                    var5 = 'guild-application-announcement';
                    var8['type'] = var5;
                    var5 = var9;
                    var11 = var5.id;
                    var8['id'] = var11;
                    var11 = var5.application_id;
                    var8['applicationId'] = var11;
                    var11 = var5.application_name;
                    var8['applicationName'] = var11;
                    var11 = var5.asset_id;
                    var8['assetId'] = var11;
                    var5 = var5.background_image_asset_id;
                    var8['backgroundImageAssetId'] = var5;
                    _fun0003_ip = 71; continue _fun0003;
case 24:
                    var5 = {};
                    var5['type'] = var10;
                    var10 = var9.id;
                    var5['id'] = var10;
                    var10 = var9.application_id;
                    var5['applicationId'] = var10;
                    var10 = var9.application_name;
                    var5['applicationName'] = var10;
                    var10 = var9.asset_fully_qualified_url;
                    var5['assetFullyQualifiedURL'] = var10;
                    var10 = var9.popover_title;
                    var5['popoverTitle'] = var10;
                    var10 = var9.popover_body;
                    var5['popoverBody'] = var10;
                    var9 = var9.popover_cta;
                    var5['popoverCta'] = var9;
                    var8 = var5;
case 71:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var7 = var5.bind(var2)(var4);
                    var5 = var7.dispatch;
                    var4 = {};
                    var9 = 'SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS';
                    var4['type'] = var9;
                    var9 = var6;
                    var4['guildId'] = var9;
                    var4['announcement'] = var8;
                    var4 = var5.bind(var7)(var4);
case 72: // try_end0
                    _fun0003_ip = 73; continue _fun0003;
case 68:
                    return var3;
case 74: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 4;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE';
                    var3['type'] = var7;
                    var3['guildId'] = var6;
                    var3 = var4.bind(var5)(var3);
case 73:
                    return var2;
case 63:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function _fetchSocialLayerStorefrontConfig() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 75; continue _fun0004 }
case 64:
                    var2 = undefined;
                    var12 = undefined;
                    var13 = undefined;
                    var11 = undefined;
                    var14 = undefined;
                    var5 = undefined;
                    var6 = _closure1_slot4;
                    var4 = var6.getConfigFetchState;
                    var4 = var4.bind(var6)();
                    var7 = var4.state;
                    var6 = 'loading';
                    if(!(var6 !== var7)) { _fun0004_ip = 76; continue _fun0004 }
case 77:
                    var7 = var4.state;
                    var6 = 'success';
                    if(!(var6 === var7)) { _fun0004_ip = 78; continue _fun0004 }
case 50:
                    var6 = global;
                    var7 = var6.Date;
                    var6 = var7.now;
                    var7 = var6.bind(var7)();
                    var6 = var4.fetchedAt;
                    var7 = var7 - var6;
                    var6 = _closure1_slot8;
                    if(!(!(var7 < var6))) { _fun0004_ip = 76; continue _fun0004 }
case 78:
                    var7 = var4.state;
                    var6 = 'error';
                    if(!(var6 === var7)) { _fun0004_ip = 18; continue _fun0004 }
case 79:
                    var6 = global;
                    var7 = var6.Date;
                    var6 = var7.now;
                    var6 = var6.bind(var7)();
                    var4 = var4.fetchedAt;
                    var6 = var6 - var4;
                    var4 = _closure1_slot9;
                    if(!(!(var6 < var4))) { _fun0004_ip = 76; continue _fun0004 }
case 18: // try_start_0
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var7 = 4;
                    var4 = var8[var7];
                    var9 = var6.bind(var2)(var4);
                    var6 = var9.dispatch;
                    var4 = {};
                    var10 = 'SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START';
                    var4['type'] = var10;
                    var4 = var6.bind(var9)(var4);
                    var6 = _closure1_slot0;
                    var4 = 5;
                    var4 = var8[var4];
                    var4 = var6.bind(var2)(var4);
                    var8 = var4.HTTP;
                    var6 = var8.get;
                    var4 = {};
                    var9 = _closure1_slot5;
                    var9 = var9.SOCIAL_LAYER_STOREFRONT_CONFIG;
                    var4['url'] = var9;
                    var9 = true;
                    var4['rejectWithError'] = var9;
                    var4 = var6.bind(var8)(var4);
                    SaveGenerator(address=258);
case 80:
                    return var4;
case 81:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 82; continue _fun0004 }
case 83:
                    var6 = var4.body;
                    var11 = var6;
                    var9 = null;
                    var14 = null;
                    var6 = var6.promotion_end_datetime;
                    if(!(var9 != var6)) { _fun0004_ip = 60; continue _fun0004 }
case 84:
                    var6 = global;
                    var15 = var6.Date;
                    var8 = var11;
                    var16 = var8.promotion_end_datetime;
                    var10 = var15.prototype;
                    var10 = Object.create(var10, {constructor: {value: var15}});
                    var17 = var10;
                    var8 = new var17[var15](var16, var15);
                    var15 = var8 instanceof Object ? var8 : var10;
                    var5 = var15;
                    var10 = var6.Number;
                    var8 = var10.isNaN;
                    var6 = var15.getTime;
                    var6 = var6.bind(var15)();
                    var6 = var8.bind(var10)(var6);
                    if(var6) { _fun0004_ip = 60; continue _fun0004 }
case 85:
                    var14 = var5;
case 60:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var7];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var8 = 'SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS';
                    var5['type'] = var8;
                    var8 = {};
                    var10 = var11;
                    var15 = var10.promotional_sku_ids;
                    var8['promotionalSkuIds'] = var15;
                    var8['promotionEndDatetime'] = var14;
                    var10 = var10.storefronts;
                    var13 = var10;
                    var14 = var9 == var10;
                    var10 = undefined;
                    if(var14) { _fun0004_ip = 86; continue _fun0004 }
case 63:
                    var15 = var13;
                    var14 = var15.map;
                    var13 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var2 = arg1;
                            var1 = {};
                            var3 = var2.guild_id;
                            var1['guildId'] = var3;
                            var3 = var2.application_id;
                            var1['applicationId'] = var3;
                            var3 = var2.game_id;
                            var1['gameId'] = var3;
                            var4 = var2.collectibles_shop_navigation_enabled;
                            var3 = true;
                            var3 = var3 === var4;
                            var1['collectiblesShopNavigationEnabled'] = var3;
                            var2 = var2.excluded_platforms;
                            var3 = null;
                            if(!(var3 == var2)) { _fun0005_ip = 87; continue _fun0005 }
case 50:
                            var2 = new Array(0);
case 87:
                            var1['excludedPlatforms'] = var2;
                            return var1;
                        }
                    };
                    var10 = var14.bind(var15)(var13);
case 86:
                    var12 = var10;
                    if(!(var9 == var10)) { _fun0004_ip = 88; continue _fun0004 }
case 89:
                    var10 = new Array(0);
                    _fun0004_ip = 90; continue _fun0004;
case 88:
                    var10 = var12;
case 90:
                    var8['storefronts'] = var10;
                    var10 = var11;
                    var10 = var10.announcement_modal_config;
                    var10 = var9 != var10;
                    var9 = null;
                    if(!var10) { _fun0004_ip = 91; continue _fun0004 }
case 92:
                    var10 = {};
                    var12 = var11.announcement_modal_config;
                    var12 = var12.version;
                    var10['version'] = var12;
                    var11 = var11.announcement_modal_config;
                    var11 = var11.application_id;
                    var10['applicationId'] = var11;
                    var9 = var10;
case 91:
                    var8['announcementModalConfig'] = var9;
                    var5['config'] = var8;
                    var5 = var6.bind(var7)(var5);
case 93: // try_end0
                    _fun0004_ip = 76; continue _fun0004;
case 82:
                    return var4;
case 94: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 4;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
case 76:
                    return var2;
case 75:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function _fetchSocialLayerStorefrontAffinity() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 95; continue _fun0006 }
case 64:
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var5 = 4;
                    var3 = var3[var5];
                    var4 = undefined;
                    var7 = var6.bind(var4)(var3);
                    var6 = var7.dispatch;
                    var3 = {};
                    var8 = 'SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_START';
                    var3['type'] = var8;
                    var3 = var6.bind(var7)(var3);
case 77: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 5;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    var7 = var3.HTTP;
                    var6 = var7.get;
                    var3 = {};
                    var8 = _closure1_slot5;
                    var8 = var8.SOCIAL_LAYER_STOREFRONT_ELIGIBILITY;
                    var3['url'] = var8;
                    var8 = true;
                    var3['rejectWithError'] = var8;
                    var3 = var6.bind(var7)(var3);
                    SaveGenerator(address=118);
case 96:
                    return var3;
case 97:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0006_ip = 56; continue _fun0006 }
case 14:
                    var6 = var3.body;
                    var8 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var7 = var12[var5];
                    var9 = var8.bind(var4)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var10 = 'SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_SUCCESS';
                    var7['type'] = var10;
                    var11 = _closure1_slot0;
                    var10 = 6;
                    var10 = var12[var10];
                    var11 = var11.bind(var4)(var10);
                    var10 = var11.transformSocialLayerStorefrontAffinityServer;
                    var10 = var10.bind(var11)(var6);
                    var7['affinity'] = var10;
                    var7 = var8.bind(var9)(var7);
case 98: // try_end0
                    return var6;
case 56:
                    return var3;
case 23: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_FAILURE';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = null;
                    return var2;
case 95:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
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
    var5 = var6.bind(var1)(var5);
    var5 = var5.Endpoints;
    var _closure1_slot5 = var5;
    var5 = 3;
    var9 = var7[var5];
    var9 = var8.bind(var1)(var9);
    var9 = var9.Millis;
    var9 = var9.SECOND;
    var10 = 30;
    var9 = var10 * var9;
    var _closure1_slot6 = var9;
    var9 = var7[var5];
    var9 = var8.bind(var1)(var9);
    var9 = var9.Millis;
    var9 = var9.MINUTE;
    var9 = var10 * var9;
    var _closure1_slot7 = var9;
    var9 = var7[var5];
    var9 = var8.bind(var1)(var9);
    var9 = var9.Millis;
    var11 = var9.MINUTE;
    var9 = 60;
    var9 = var9 * var11;
    var _closure1_slot8 = var9;
    var9 = var7[var5];
    var9 = var8.bind(var1)(var9);
    var9 = var9.Millis;
    var9 = var9.SECOND;
    var9 = var10 * var9;
    var _closure1_slot9 = var9;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.Millis;
    var8 = var5.SECOND;
    var5 = 5;
    var5 = var5 * var8;
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/slayer_storefront/SocialLayerStorefrontActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['_fetchSocialLayerStorefront'] = var4;
    var4 = function fetchSocialLayerStorefrontForApplication(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var7 = arg1;
            var5 = arguments[1];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0007_ip = 99; continue _fun0007 }
case 100:
            var5 = {};
case 99:
            var3 = _closure1_slot11;
            var2 = {};
            var6 = 'application';
            var2['type'] = var6;
            var2['applicationId'] = var7;
            var6 = _closure1_slot5;
            var1 = var6.SOCIAL_LAYER_STOREFRONT_BY_APPLICATION_ID;
            var1 = var1.bind(var6)(var7);
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
        }
    };
    var3['fetchSocialLayerStorefrontForApplication'] = var4;
    var4 = function fetchSocialLayerStorefront(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var7 = arg1;
            var5 = arguments[1];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0008_ip = 99; continue _fun0008 }
case 100:
            var5 = {};
case 99:
            var3 = _closure1_slot11;
            var2 = {};
            var6 = 'guild';
            var2['type'] = var6;
            var2['guildId'] = var7;
            var6 = _closure1_slot5;
            var1 = var6.SOCIAL_LAYER_APPLICATION_STOREFRONT;
            var1 = var1.bind(var6)(var7);
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
        }
    };
    var3['fetchSocialLayerStorefront'] = var4;
    var4 = function fetchSocialLayerStorefrontSkuForApplication(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg2;
            var4 = arguments[2];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0009_ip = 99; continue _fun0009 }
case 100:
            var4 = {};
case 99:
            var2 = _closure1_slot13;
            var7 = _closure1_slot5;
            var6 = var7.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_BY_APPLICATION_ID;
            var1 = arg1;
            var1 = var6.bind(var7)(var1, var5);
            var1 = var2.bind(var3)(var5, var1, var4);
            return var1;
        }
    };
    var3['fetchSocialLayerStorefrontSkuForApplication'] = var4;
    var4 = function fetchSocialLayerStorefrontSku(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = arg2;
            var4 = arguments[2];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0010_ip = 99; continue _fun0010 }
case 100:
            var4 = {};
case 99:
            var2 = _closure1_slot13;
            var7 = _closure1_slot5;
            var6 = var7.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU;
            var1 = arg1;
            var1 = var6.bind(var7)(var1, var5);
            var1 = var2.bind(var3)(var5, var1, var4);
            return var1;
        }
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
    var4 = function fetchSocialLayerStorefrontAnnouncement() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchSocialLayerStorefrontAnnouncement'] = var4;
    var4 = function fetchSocialLayerStorefrontConfig() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchSocialLayerStorefrontConfig'] = var4;
    var4 = function fetchSocialLayerSKUPurchaseEligibility(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var8 = arg2;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot4;
            var2 = var3.getSKUEligibility;
            var4 = var2.bind(var3)(var8);
            var2 = 'checking';
            var2 = var2 !== var4;
            if(!var2) { _fun0011_ip = 101; continue _fun0011 }
case 102:
            var3 = 'eligible';
            var2 = var3 !== var4;
case 101:
            if(!var2) { _fun0011_ip = 77; continue _fun0011 }
case 103:
            var3 = 'ineligible';
            var2 = var3 !== var4;
case 77:
            if(!var2) { _fun0011_ip = 104; continue _fun0011 }
case 11:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var4 = undefined;
            var7 = var3.bind(var4)(var2);
            var3 = var7.dispatch;
            var2 = {};
            var9 = 'SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START';
            var2['type'] = var9;
            var2['skuId'] = var8;
            var2 = var3.bind(var7)(var2);
            var2 = global;
            var7 = var2.setTimeout;
            var3 = _closure1_slot10;
            var2 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var5 = _closure1_slot4;
                    var3 = var5.getSKUEligibility;
                    var2 = _closure2_slot0;
                    var3 = var3.bind(var5)(var2);
                    var2 = 'checking';
                    if(!(var2 === var3)) { _fun0012_ip = 105; continue _fun0012 }
case 106:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {'type': 'SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE', 'skuId': null, 'reason': 'interaction_deadline'};
                    var4 = _closure2_slot0;
                    var1['skuId'] = var4;
                    var1 = var2.bind(var3)(var1);
case 105:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var7.bind(var4)(var2, var3);
            var3 = _closure1_slot0;
            var2 = 5;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.HTTP;
            var3 = var4.post;
            var2 = {};
            var7 = _closure1_slot5;
            var6 = var7.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_ELIGIBILITY;
            var5 = arg1;
            var5 = var6.bind(var7)(var5, var8);
            var2['url'] = var5;
            var5 = true;
            var2['rejectWithError'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
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
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var6 = arg1;
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
                    var5 = null;
                    var7 = var5 == var6;
                    var5 = undefined;
                    if(var7) { _fun0013_ip = 107; continue _fun0013 }
case 48:
                    var5 = var6.status;
case 107:
                    var2['httpStatus'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
case 104:
            var1 = undefined;
            return var1;
        }
    };
    var3['fetchSocialLayerSKUPurchaseEligibility'] = var4;
    var2 = function fetchSocialLayerStorefrontAffinity() {
        var1 = undefined;
        var4 = _closure1_slot17;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchSocialLayerStorefrontAffinity'] = var2;
    return var1;
})();