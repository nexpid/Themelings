// app/modules/slayer_storefront/SocialLayerStorefrontActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var8;
    var5 = function _fetchSocialLayerStorefront() {
        var1 = undefined;
        var4 = _closure1_slot18;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var5;
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
                    var6 = arg2;
                    var3 = undefined;
                    if(!(var4 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var4 = {};
case 4:
                    var7 = undefined;
                    var16 = undefined;
                    var13 = undefined;
                    var12 = undefined;
                    var5 = undefined;
                    var11 = undefined;
                    var15 = undefined;
                    var21 = undefined;
                    var10 = undefined;
                    SaveGenerator(address=49);
case 6:
                    return var3;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var14 = var4.eager;
                    var9 = var3 !== var14;
                    if(!var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var9 = var14;
case 10:
                    var7 = var9;
                    var4 = var4.forceFetch;
                    var9 = var3 !== var4;
                    if(!var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var9 = var4;
case 12:
                    var18 = _closure1_slot5;
                    var17 = var18.getStorefrontFetchState;
                    var14 = var8;
                    var19 = var17.bind(var18)(var14);
                    var17 = null;
                    var14 = var17 == var19;
                    var20 = undefined;
                    if(var14) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var20 = var19.state;
case 14:
                    var14 = var17 == var19;
                    var18 = undefined;
                    if(var14) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var18 = var19.state;
case 16:
                    var14 = 'error';
                    var18 = var14 === var18;
                    if(!var18) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var14 = var19.fetchedAt;
                    var18 = var17 != var14;
case 18:
                    if(!var18) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var14 = global;
                    var22 = var14.Date;
                    var14 = var22.now;
                    var22 = var14.bind(var22)();
                    var14 = var19.fetchedAt;
                    var22 = var22 - var14;
                    var14 = _closure1_slot7;
                    var18 = var22 < var14;
case 20:
                    var14 = var17 == var19;
                    var22 = undefined;
                    if(var14) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var22 = var19.state;
case 22:
                    var14 = 'fetched';
                    var14 = var14 === var22;
                    if(!var14) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var22 = var19.fetchedAt;
                    var14 = var17 != var22;
case 24:
                    if(!var14) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                    var22 = global;
                    var23 = var22.Date;
                    var22 = var23.now;
                    var22 = var22.bind(var23)();
                    var19 = var19.fetchedAt;
                    var22 = var22 - var19;
                    var19 = _closure1_slot8;
                    var14 = var22 < var19;
case 26:
                    var19 = 'loading';
                    if(!(var19 !== var20)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                    if(var18) { _fun0001_ip = 28; continue _fun0001 }
case 30:
                    if(!var14) { _fun0001_ip = 31; continue _fun0001 }
case 28:
                    if(!var9) { _fun0001_ip = 32; continue _fun0001 }
case 31: // try_start_0
                    var18 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var14 = 5;
                    var9 = var9[var14];
                    var20 = var18.bind(var3)(var9);
                    var19 = var20.dispatch;
                    var18 = {};
                    var9 = 'SOCIAL_LAYER_STOREFRONT_LOAD';
                    var18['type'] = var9;
                    var9 = var8;
                    var18['guildOrApplicationId'] = var9;
                    var18 = var19.bind(var20)(var18);
                    var9 = var9.type;
                    var19 = 'application';
                    if(!(var19 !== var9)) { _fun0001_ip = 33; continue _fun0001 }
case 34:
                    var18 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var9 = 6;
                    var9 = var20[var9];
                    var20 = var18.bind(var3)(var9);
                    var18 = var20.getSocialLayerStorefrontApplicationId;
                    var9 = var8;
                    var9 = var9.guildId;
                    var18 = var18.bind(var20)(var9);
                    _fun0001_ip = 35; continue _fun0001;
case 33:
                    var9 = var8;
                    var18 = var9.applicationId;
case 35:
                    var13 = var18;
                    var12 = {};
                    var18 = var17 != var18;
                    var9 = var18;
                    if(!var18) { _fun0001_ip = 36; continue _fun0001 }
case 37:
                    var20 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var18 = 7;
                    var18 = var22[var18];
                    var22 = var20.bind(var3)(var18);
                    var20 = var22.isTestModeForApplication;
                    var18 = var13;
                    var9 = var20.bind(var22)(var18);
case 36:
                    if(!var9) { _fun0001_ip = 38; continue _fun0001 }
case 39:
                    var18 = var12;
                    var9 = true;
                    var18['test_mode'] = var9;
case 38:
                    var18 = _closure1_slot4;
                    var9 = var18.getPromotionIdOverride;
                    var9 = var9.bind(var18)();
                    var5 = var9;
                    if(!(var17 != var9)) { _fun0001_ip = 40; continue _fun0001 }
case 41:
                    var9 = var12;
                    var9['promotion_id_override'] = var5;
case 40:
                    var18 = var8;
                    var20 = var18.type;
                    var18 = 'guild';
                    var18 = var18 === var20;
                    var9 = var18;
                    if(!var18) { _fun0001_ip = 42; continue _fun0001 }
case 43:
                    var9 = var17 == var13;
case 42:
                    var5 = var9;
                    if(!var9) { _fun0001_ip = 44; continue _fun0001 }
case 45:
                    var13 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var9 = 7;
                    var9 = var18[var9];
                    var13 = var13.bind(var3)(var9);
                    var9 = var13.isAnyApplicationInTestMode;
                    var5 = var9.bind(var13)();
case 44:
                    var11 = var5;
                    var9 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var5 = 8;
                    var5 = var13[var5];
                    var5 = var9.bind(var3)(var5);
                    var13 = var5.HTTP;
                    var9 = var13.get;
                    var5 = {};
                    var18 = var6;
                    var5['url'] = var18;
                    var5['query'] = var12;
                    var12 = true;
                    var5['rejectWithError'] = var12;
                    var18 = 3;
                    var5['retries'] = var18;
                    var5 = var9.bind(var13)(var5);
                    SaveGenerator(address=635);
case 46:
                    return var5;
case 47:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 48; continue _fun0001 }
case 49:
                    var15 = var5;
                    var18 = var5.body;
                    var21 = var18;
                    var13 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var22 = 6;
                    var9 = var9[var22];
                    var13 = var13.bind(var3)(var9);
                    var9 = var13.transformSlayerApplicationStorefrontServer;
                    var9 = var9.bind(var13)(var18);
                    var10 = var9;
                    var9 = var9.storefrontPricing;
                    if(!(var17 != var9)) { _fun0001_ip = 50; continue _fun0001 }
case 51:
                    var13 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var14];
                    var18 = var13.bind(var3)(var9);
                    var13 = var18.dispatch;
                    var9 = {};
                    var20 = 'SKUS_PRICING_FETCH_SUCCESS';
                    var9['type'] = var20;
                    var20 = {};
                    var20['type'] = var19;
                    var19 = var10;
                    var23 = var19.applicationId;
                    var20['applicationId'] = var23;
                    var9['priceId'] = var20;
                    var19 = var19.storefrontPricing;
                    var9['data'] = var19;
                    var9 = var13.bind(var18)(var9);
case 50:
                    var13 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var18 = var9[var14];
                    var20 = var13.bind(var3)(var18);
                    var19 = var20.dispatch;
                    var18 = {};
                    var23 = 'SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS';
                    var18['type'] = var23;
                    var23 = var8;
                    var18['guildOrApplicationId'] = var23;
                    var23 = var10;
                    var18['storefront'] = var23;
                    var18 = var19.bind(var20)(var18);
                    var18 = var9[var14];
                    var20 = var13.bind(var3)(var18);
                    var19 = var20.dispatch;
                    var18 = {};
                    var24 = 'SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS';
                    var18['type'] = var24;
                    var23 = var23.applicationId;
                    var18['applicationId'] = var23;
                    var23 = _closure1_slot0;
                    var22 = var9[var22];
                    var23 = var23.bind(var3)(var22);
                    var22 = var23.transformStorefrontMetadataServer;
                    var21 = var22.bind(var23)(var21);
                    var18['storefrontMetadata'] = var21;
                    var18 = var19.bind(var20)(var18);
                    var9 = var9[var14];
                    var14 = var13.bind(var3)(var9);
                    var13 = var14.dispatch;
                    var9 = {};
                    var18 = 'STORE_LISTINGS_FETCH_SUCCESS';
                    var9['type'] = var18;
                    var15 = var15.body;
                    var15 = var15.store_listings;
                    var16 = var15;
                    if(!(var17 == var15)) { _fun0001_ip = 52; continue _fun0001 }
case 53:
                    var15 = new Array(0);
                    _fun0001_ip = 54; continue _fun0001;
case 52:
                    var15 = var16;
case 54:
                    var9['storeListings'] = var15;
                    var9 = var13.bind(var14)(var9);
                    var9 = var11;
                    if(!var11) { _fun0001_ip = 55; continue _fun0001 }
case 56:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var11 = 7;
                    var11 = var14[var11];
                    var13 = var13.bind(var3)(var11);
                    var11 = var13.isTestModeForApplication;
                    var10 = var10.applicationId;
                    var9 = var11.bind(var13)(var10);
case 55:
                    if(!var9) { _fun0001_ip = 57; continue _fun0001 }
case 58:
                    var11 = _closure1_slot17;
                    var10 = var8;
                    var9 = var6;
                    var6 = {};
                    var6['forceFetch'] = var12;
                    var6 = var11.bind(var3)(var10, var9, var6);
                    SaveGenerator(address=1027);
case 59:
                    return var6;
case 60:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 61; continue _fun0001 }
case 57: // try_end0
                    _fun0001_ip = 32; continue _fun0001;
case 61:
                    return var6;
case 48:
                    return var5;
case 62: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 5;
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
        _closure1_slot18 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function _fetchSocialLayerStorefrontSkuWithUrl() {
        var1 = undefined;
        var4 = _closure1_slot20;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function _fetchSocialLayerStorefrontSkuWithUrl2() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 63; continue _fun0002 }
case 3:
                    var7 = arg1;
                    var15 = arg2;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = {};
case 4:
                    var5 = var2;
                    var13 = undefined;
                    var10 = undefined;
                    var11 = undefined;
                    var14 = undefined;
                    var4 = undefined;
                    var6 = undefined;
                    var9 = undefined;
                    var12 = undefined;
                    SaveGenerator(address=50);
case 64:
                    return var3;
case 65:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0002_ip = 66; continue _fun0002 }
case 67:
                    var8 = var5;
                    var16 = var8.withGoogleSkuIds;
                    var17 = var3 !== var16;
                    var8 = var17;
                    if(!var17) { _fun0002_ip = 68; continue _fun0002 }
case 69:
                    var8 = var16;
case 68:
                    var13 = var8;
                    var10 = var5.countryCode;
                    var11 = var5.paymentGateway;
case 70: // try_start_0
                    var17 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var8 = 5;
                    var16 = var16[var8];
                    var18 = var17.bind(var3)(var16);
                    var17 = var18.dispatch;
                    var16 = {};
                    var19 = 'STORE_LISTINGS_FETCH_START';
                    var16['type'] = var19;
                    var19 = var7;
                    var16['skuId'] = var19;
                    var16 = var17.bind(var18)(var16);
                    var14 = {};
                    if(!var13) { _fun0002_ip = 71; continue _fun0002 }
case 72:
                    var16 = var14;
                    var13 = true;
                    var16['with_google_sku_ids'] = var13;
case 71:
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var13 = 9;
                    var13 = var17[var13];
                    var17 = var16.bind(var3)(var13);
                    var16 = var17.isNullOrEmpty;
                    var13 = var10;
                    var13 = var16.bind(var17)(var13);
                    if(var13) { _fun0002_ip = 73; continue _fun0002 }
case 74:
                    var13 = var14;
                    var13['country_code'] = var10;
case 73:
                    var13 = var11;
                    var10 = null;
                    if(!(var10 != var13)) { _fun0002_ip = 75; continue _fun0002 }
case 22:
                    var13 = var14;
                    var13['payment_gateway'] = var11;
case 75:
                    var13 = _closure1_slot4;
                    var11 = var13.getPromotionIdOverride;
                    var11 = var11.bind(var13)();
                    var4 = var11;
                    if(!(var10 != var11)) { _fun0002_ip = 76; continue _fun0002 }
case 77:
                    var11 = var14;
                    var11['promotion_id_override'] = var4;
case 76:
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 8;
                    var4 = var13[var4];
                    var4 = var11.bind(var3)(var4);
                    var13 = var4.HTTP;
                    var11 = var13.get;
                    var4 = {};
                    var4['url'] = var15;
                    var4['query'] = var14;
                    var14 = true;
                    var4['rejectWithError'] = var14;
                    var4 = var11.bind(var13)(var4);
                    SaveGenerator(address=314);
case 78:
                    return var4;
case 79:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=10);
                    if(var11) { _fun0002_ip = 80; continue _fun0002 }
case 81:
                    var6 = var4;
                    var11 = var4.body;
                    if(!(var10 != var11)) { _fun0002_ip = 82; continue _fun0002 }
case 83:
                    var11 = var6;
                    var11 = var11.ok;
                    if(!var11) { _fun0002_ip = 82; continue _fun0002 }
case 84:
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
                    if(!(var10 != var6)) { _fun0002_ip = 85; continue _fun0002 }
case 86:
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
case 85:
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
case 87: // try_end0
                    _fun0002_ip = 88; continue _fun0002;
case 82: // try_start_1
                    var5 = global;
                    var8 = var5.Error;
                    var5 = var8.prototype;
                    var6 = Object.create(var5, {constructor: {value: var8}});
                    var20 = 'Failed to fetch social layer storefront SKU';
                    var21 = var6;
                    var5 = new var21[var8](var20, var19);
                    var5 = var5 instanceof Object ? var5 : var6;
                    throw var5;
case 80: // try_end1
                    return var4;
case 89: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'STORE_LISTINGS_FETCH_FAIL';
                    var4['type'] = var8;
                    var4['skuId'] = var7;
                    var4 = var5.bind(var6)(var4);
case 88:
                    return var3;
case 66:
                    return var2;
case 63:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot20 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function getOrCreateBackoff(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var1 = var5.get;
            var1 = var1.bind(var5)(var4);
            var2 = null;
            if(!(var2 == var1)) { _fun0003_ip = 90; continue _fun0003 }
case 91:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 10;
            var6 = var6[var3];
            var3 = undefined;
            var7 = var7.bind(var3)(var6);
            var9 = _closure1_slot13;
            var8 = _closure1_slot14;
            var3 = var7.prototype;
            var3 = Object.create(var3, {constructor: {value: var7}});
            var10 = var3;
            var2 = new var10[var7](var9, var8, var7);
            var2 = var2 instanceof Object ? var2 : var3;
            var3 = var5.set;
            var3 = var3.bind(var5)(var4, var2);
            var1 = var2;
case 90:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function _fetchSocialLayerStorefrontEntries() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 40; continue _fun0004 }
case 3:
                    var6 = var8;
                    var2 = undefined;
                    var4 = undefined;
                    var7 = _closure1_slot5;
                    var5 = var7.getStorefrontEntries;
                    var5 = var5.bind(var7)(var8);
                    var7 = null;
                    var8 = var7 == var5;
                    var9 = undefined;
                    if(var8) { _fun0004_ip = 92; continue _fun0004 }
case 93:
                    var9 = var5.state;
case 92:
                    var8 = 'loading';
                    if(!(var8 !== var9)) { _fun0004_ip = 94; continue _fun0004 }
case 95:
                    var10 = _closure1_slot21;
                    var9 = _closure1_slot15;
                    var8 = var6;
                    var4 = var10.bind(var2)(var9, var8);
                    var8 = var7 == var5;
                    var9 = undefined;
                    if(var8) { _fun0004_ip = 96; continue _fun0004 }
case 12:
                    var9 = var5.state;
case 96:
                    var8 = 'error';
                    if(!(var8 === var9)) { _fun0004_ip = 97; continue _fun0004 }
case 98:
                    var8 = global;
                    var9 = var8.Date;
                    var8 = var9.now;
                    var9 = var8.bind(var9)();
                    var8 = var5.fetchedAt;
                    var9 = var9 - var8;
                    var8 = var4;
                    var8 = var8.current;
                    if(!(!(var9 < var8))) { _fun0004_ip = 94; continue _fun0004 }
case 97:
                    var7 = var7 == var5;
                    var8 = undefined;
                    if(var7) { _fun0004_ip = 99; continue _fun0004 }
case 19:
                    var8 = var5.state;
case 99:
                    var7 = 'fetched';
                    if(!(var7 === var8)) { _fun0004_ip = 100; continue _fun0004 }
case 21:
                    var7 = global;
                    var8 = var7.Date;
                    var7 = var8.now;
                    var7 = var7.bind(var8)();
                    var5 = var5.fetchedAt;
                    var7 = var7 - var5;
                    var5 = _closure1_slot12;
                    if(!(!(var7 < var5))) { _fun0004_ip = 94; continue _fun0004 }
case 100: // try_start_0
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 5;
                    var5 = var9[var7];
                    var10 = var8.bind(var2)(var5);
                    var8 = var10.dispatch;
                    var5 = {};
                    var11 = 'SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD';
                    var5['type'] = var11;
                    var12 = var6;
                    var5['applicationId'] = var12;
                    var5 = var8.bind(var10)(var5);
                    var8 = _closure1_slot0;
                    var5 = 8;
                    var5 = var9[var5];
                    var5 = var8.bind(var2)(var5);
                    var9 = var5.HTTP;
                    var8 = var9.get;
                    var5 = {'url': null, 'rejectWithError': true, 'retries': 3};
                    var11 = _closure1_slot6;
                    var10 = var11.SOCIAL_LAYER_STOREFRONTS_ALL;
                    var10 = var10.bind(var11)(var12);
                    var5['url'] = var10;
                    var5 = var8.bind(var9)(var5);
                    SaveGenerator(address=327);
case 101:
                    return var5;
case 102:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(var8) { _fun0004_ip = 103; continue _fun0004 }
case 104:
                    var12 = var5.body;
                    var9 = var4;
                    var8 = var9.succeed;
                    var8 = var8.bind(var9)();
                    var8 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var7 = var14[var7];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var10 = 'SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_SUCCESS';
                    var7['type'] = var10;
                    var10 = var6;
                    var7['applicationId'] = var10;
                    var11 = var12.map;
                    var13 = _closure1_slot0;
                    var10 = 6;
                    var10 = var14[var10];
                    var10 = var13.bind(var2)(var10);
                    var10 = var10.transformSlayerApplicationStorefrontSummaryServer;
                    var10 = var11.bind(var12)(var10);
                    var7['entries'] = var10;
                    var7 = var8.bind(var9)(var7);
case 105: // try_end0
                    _fun0004_ip = 94; continue _fun0004;
case 103:
                    return var5;
case 106: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var5 = var4;
                    var4 = var5.fail;
                    var4 = var4.bind(var5)();
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_FAILURE';
                    var3['type'] = var7;
                    var3['applicationId'] = var6;
                    var3 = var4.bind(var5)(var3);
case 94:
                    return var2;
case 40:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot22 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function _fetchSocialLayerStorefrontById() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var10 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 107; continue _fun0005 }
case 3:
                    var3 = arg1;
                    var7 = var10;
                    var2 = undefined;
                    var6 = undefined;
                    var13 = undefined;
                    var14 = undefined;
                    var8 = undefined;
                    var12 = undefined;
                    var17 = undefined;
                    var19 = undefined;
                    var9 = _closure1_slot5;
                    var5 = var9.getStorefrontById;
                    var9 = var5.bind(var9)(var10);
                    var5 = null;
                    var10 = var5 == var9;
                    var11 = undefined;
                    if(var10) { _fun0005_ip = 11; continue _fun0005 }
case 108:
                    var11 = var9.state;
case 11:
                    var10 = 'loading';
                    if(!(var10 !== var11)) { _fun0005_ip = 109; continue _fun0005 }
case 110:
                    var15 = _closure1_slot21;
                    var11 = _closure1_slot16;
                    var10 = var7;
                    var6 = var15.bind(var2)(var11, var10);
                    var10 = var5 == var9;
                    var11 = undefined;
                    if(var10) { _fun0005_ip = 111; continue _fun0005 }
case 112:
                    var11 = var9.state;
case 111:
                    var10 = 'error';
                    if(!(var10 === var11)) { _fun0005_ip = 113; continue _fun0005 }
case 114:
                    var10 = var9.fetchedAt;
                    if(!(var5 != var10)) { _fun0005_ip = 113; continue _fun0005 }
case 115:
                    var10 = global;
                    var11 = var10.Date;
                    var10 = var11.now;
                    var11 = var10.bind(var11)();
                    var10 = var9.fetchedAt;
                    var11 = var11 - var10;
                    var10 = var6;
                    var10 = var10.current;
                    if(!(!(var11 < var10))) { _fun0005_ip = 109; continue _fun0005 }
case 113:
                    var10 = var5 == var9;
                    var11 = undefined;
                    if(var10) { _fun0005_ip = 116; continue _fun0005 }
case 117:
                    var11 = var9.state;
case 116:
                    var10 = 'fetched';
                    if(!(var10 === var11)) { _fun0005_ip = 27; continue _fun0005 }
case 118:
                    var10 = var9.fetchedAt;
                    if(!(var5 != var10)) { _fun0005_ip = 27; continue _fun0005 }
case 20:
                    var10 = global;
                    var11 = var10.Date;
                    var10 = var11.now;
                    var10 = var10.bind(var11)();
                    var9 = var9.fetchedAt;
                    var10 = var10 - var9;
                    var9 = _closure1_slot8;
                    if(!(!(var10 < var9))) { _fun0005_ip = 109; continue _fun0005 }
case 27: // try_start_0
                    var10 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var11 = 5;
                    var9 = var15[var11];
                    var16 = var10.bind(var2)(var9);
                    var10 = var16.dispatch;
                    var9 = {};
                    var18 = 'SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD';
                    var9['type'] = var18;
                    var18 = var7;
                    var9['storefrontId'] = var18;
                    var9 = var10.bind(var16)(var9);
                    var14 = {};
                    var10 = _closure1_slot0;
                    var9 = 7;
                    var9 = var15[var9];
                    var15 = var10.bind(var2)(var9);
                    var10 = var15.isTestModeForApplication;
                    var9 = var3;
                    var9 = var10.bind(var15)(var9);
                    if(!var9) { _fun0005_ip = 119; continue _fun0005 }
case 120:
                    var10 = var14;
                    var9 = true;
                    var10['test_mode'] = var9;
case 119:
                    var10 = _closure1_slot4;
                    var9 = var10.getPromotionIdOverride;
                    var9 = var9.bind(var10)();
                    var8 = var9;
                    if(!(var5 != var9)) { _fun0005_ip = 121; continue _fun0005 }
case 122:
                    var9 = var14;
                    var9['promotion_id_override'] = var8;
case 121:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 8;
                    var8 = var10[var8];
                    var8 = var9.bind(var2)(var8);
                    var10 = var8.HTTP;
                    var9 = var10.get;
                    var8 = {};
                    var20 = _closure1_slot6;
                    var18 = var20.SOCIAL_LAYER_STOREFRONT_BY_ID;
                    var16 = var3;
                    var15 = var7;
                    var15 = var18.bind(var20)(var16, var15);
                    var8['url'] = var15;
                    var8['query'] = var14;
                    var14 = true;
                    var8['rejectWithError'] = var14;
                    var14 = 3;
                    var8['retries'] = var14;
                    var8 = var9.bind(var10)(var8);
                    SaveGenerator(address=455);
case 123:
                    return var8;
case 124:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0005_ip = 125; continue _fun0005 }
case 126:
                    var12 = var8;
                    var14 = var8.body;
                    var17 = var14;
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var18 = 6;
                    var9 = var9[var18];
                    var10 = var10.bind(var2)(var9);
                    var9 = var10.transformSlayerApplicationStorefrontServer;
                    var9 = var9.bind(var10)(var14);
                    var19 = var9;
                    var9 = var9.storefrontPricing;
                    if(!(var5 != var9)) { _fun0005_ip = 127; continue _fun0005 }
case 128:
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var11];
                    var14 = var10.bind(var2)(var9);
                    var10 = var14.dispatch;
                    var9 = {};
                    var15 = 'SKUS_PRICING_FETCH_SUCCESS';
                    var9['type'] = var15;
                    var16 = {};
                    var15 = 'application';
                    var16['type'] = var15;
                    var15 = var19;
                    var20 = var15.applicationId;
                    var16['applicationId'] = var20;
                    var9['priceId'] = var16;
                    var15 = var15.storefrontPricing;
                    var9['data'] = var15;
                    var9 = var10.bind(var14)(var9);
case 127:
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var14 = var9[var11];
                    var16 = var10.bind(var2)(var14);
                    var15 = var16.dispatch;
                    var14 = {};
                    var20 = 'SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_SUCCESS';
                    var14['type'] = var20;
                    var20 = var7;
                    var14['storefrontId'] = var20;
                    var14['storefront'] = var19;
                    var14 = var15.bind(var16)(var14);
                    var14 = var9[var11];
                    var16 = var10.bind(var2)(var14);
                    var15 = var16.dispatch;
                    var14 = {};
                    var20 = 'SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS';
                    var14['type'] = var20;
                    var19 = var19.applicationId;
                    var14['applicationId'] = var19;
                    var19 = _closure1_slot0;
                    var18 = var9[var18];
                    var19 = var19.bind(var2)(var18);
                    var18 = var19.transformStorefrontMetadataServer;
                    var17 = var18.bind(var19)(var17);
                    var14['storefrontMetadata'] = var17;
                    var14 = var15.bind(var16)(var14);
                    var9 = var9[var11];
                    var11 = var10.bind(var2)(var9);
                    var10 = var11.dispatch;
                    var9 = {};
                    var14 = 'STORE_LISTINGS_FETCH_SUCCESS';
                    var9['type'] = var14;
                    var12 = var12.body;
                    var12 = var12.store_listings;
                    var13 = var12;
                    if(!(var5 == var12)) { _fun0005_ip = 129; continue _fun0005 }
case 130:
                    var12 = new Array(0);
                    _fun0005_ip = 131; continue _fun0005;
case 129:
                    var12 = var13;
case 131:
                    var9['storeListings'] = var12;
                    var9 = var10.bind(var11)(var9);
                    var10 = var6;
                    var9 = var10.succeed;
                    var9 = var9.bind(var10)();
case 132: // try_end0
                    _fun0005_ip = 109; continue _fun0005;
case 125:
                    return var8;
case 133: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var8 = var6;
                    var6 = var8.fail;
                    var6 = var6.bind(var8)();
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 5;
                    var6 = var9[var6];
                    var9 = var8.bind(var2)(var6);
                    var8 = var9.dispatch;
                    var6 = {};
                    var10 = 'SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_FAILURE';
                    var6['type'] = var10;
                    var6['storefrontId'] = var7;
                    var6 = var8.bind(var9)(var6);
                    var9 = _closure1_slot5;
                    var8 = var9.getPreviewStorefrontId;
                    var6 = var3;
                    var6 = var8.bind(var9)(var6);
                    if(!(var6 === var7)) { _fun0005_ip = 109; continue _fun0005 }
case 134:
                    var4 = _closure1_slot24;
                    var3 = var4.bind(var2)(var3, var5);
case 109:
                    return var2;
case 107:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot23 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot23 = var1;
    var4 = function setSocialLayerStorefrontPreview(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SOCIAL_LAYER_STOREFRONT_SET_PREVIEW';
        var2['type'] = var5;
        var5 = arg1;
        var2['applicationId'] = var5;
        var5 = arg2;
        var2['storefrontId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot24 = var4;
    var1 = function _fetchSocialLayerStorefrontAnnouncement() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 135; continue _fun0006 }
case 136:
                    var6 = arg1;
                    var2 = undefined;
                    var9 = undefined;
case 137: // try_start_0
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var7 = 5;
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
                    var3 = 8;
                    var3 = var8[var3];
                    var3 = var5.bind(var2)(var3);
                    var8 = var3.HTTP;
                    var5 = var8.get;
                    var3 = {};
                    var11 = _closure1_slot6;
                    var10 = var11.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT;
                    var10 = var10.bind(var11)(var12);
                    var3['url'] = var10;
                    var10 = true;
                    var3['rejectWithError'] = var10;
                    var3 = var5.bind(var8)(var3);
                    SaveGenerator(address=131);
case 138:
                    return var3;
case 115:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 139; continue _fun0006 }
case 140:
                    var5 = var3.body;
                    var9 = var5;
                    var5 = var5.type;
                    var10 = 'guild-discord-announcement';
                    if(!(var10 !== var5)) { _fun0006_ip = 141; continue _fun0006 }
case 142:
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
                    _fun0006_ip = 143; continue _fun0006;
case 141:
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
                    var10 = var9.video_asset_fully_qualified_url;
                    var5['videoAssetFullyQualifiedURL'] = var10;
                    var10 = var9.popover_title;
                    var5['popoverTitle'] = var10;
                    var10 = var9.popover_body;
                    var5['popoverBody'] = var10;
                    var9 = var9.popover_cta;
                    var5['popoverCta'] = var9;
                    var8 = var5;
case 143:
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
case 144: // try_end0
                    _fun0006_ip = 123; continue _fun0006;
case 139:
                    return var3;
case 33: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE';
                    var3['type'] = var7;
                    var3['guildId'] = var6;
                    var3 = var4.bind(var5)(var3);
case 123:
                    return var2;
case 135:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot25 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function _fetchSocialLayerStorefrontConfig() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 82; continue _fun0007 }
case 136:
                    var2 = undefined;
                    var8 = undefined;
                    var13 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    var5 = undefined;
                    var10 = undefined;
                    var9 = undefined;
                    var6 = _closure1_slot5;
                    var4 = var6.getConfigFetchState;
                    var4 = var4.bind(var6)();
                    var7 = var4.state;
                    var6 = 'loading';
                    if(!(var6 !== var7)) { _fun0007_ip = 145; continue _fun0007 }
case 146:
                    var7 = var4.state;
                    var6 = 'success';
                    if(!(var6 === var7)) { _fun0007_ip = 147; continue _fun0007 }
case 10:
                    var6 = global;
                    var7 = var6.Date;
                    var6 = var7.now;
                    var7 = var6.bind(var7)();
                    var6 = var4.fetchedAt;
                    var7 = var7 - var6;
                    var6 = _closure1_slot9;
                    if(!(!(var7 < var6))) { _fun0007_ip = 145; continue _fun0007 }
case 147:
                    var7 = var4.state;
                    var6 = 'error';
                    if(!(var6 === var7)) { _fun0007_ip = 142; continue _fun0007 }
case 148:
                    var6 = global;
                    var7 = var6.Date;
                    var6 = var7.now;
                    var6 = var6.bind(var7)();
                    var4 = var4.fetchedAt;
                    var6 = var6 - var4;
                    var4 = _closure1_slot10;
                    if(!(!(var6 < var4))) { _fun0007_ip = 145; continue _fun0007 }
case 142: // try_start_0
                    var6 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var7 = 5;
                    var4 = var14[var7];
                    var15 = var6.bind(var2)(var4);
                    var6 = var15.dispatch;
                    var4 = {};
                    var16 = 'SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START';
                    var4['type'] = var16;
                    var4 = var6.bind(var15)(var4);
                    var6 = _closure1_slot0;
                    var4 = 8;
                    var4 = var14[var4];
                    var4 = var6.bind(var2)(var4);
                    var14 = var4.HTTP;
                    var6 = var14.get;
                    var4 = {};
                    var15 = _closure1_slot6;
                    var15 = var15.SOCIAL_LAYER_STOREFRONT_CONFIG;
                    var4['url'] = var15;
                    var15 = true;
                    var4['rejectWithError'] = var15;
                    var4 = var6.bind(var14)(var4);
                    SaveGenerator(address=262);
case 149:
                    return var4;
case 150:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0007_ip = 151; continue _fun0007 }
case 152:
                    var14 = var4.body;
                    var12 = var14;
                    var6 = null;
                    var11 = null;
                    var14 = var14.promotion_end_datetime;
                    if(!(var6 != var14)) { _fun0007_ip = 153; continue _fun0007 }
case 154:
                    var14 = global;
                    var17 = var14.Date;
                    var15 = var12;
                    var18 = var15.promotion_end_datetime;
                    var16 = var17.prototype;
                    var16 = Object.create(var16, {constructor: {value: var17}});
                    var19 = var16;
                    var15 = new var19[var17](var18, var17);
                    var17 = var15 instanceof Object ? var15 : var16;
                    var5 = var17;
                    var16 = var14.Number;
                    var15 = var16.isNaN;
                    var14 = var17.getTime;
                    var14 = var14.bind(var17)();
                    var14 = var15.bind(var16)(var14);
                    if(var14) { _fun0007_ip = 153; continue _fun0007 }
case 155:
                    var11 = var5;
case 153:
                    var5 = var12;
                    var5 = var5.storefronts;
                    var13 = var5;
                    var14 = var6 == var5;
                    var5 = undefined;
                    if(var14) { _fun0007_ip = 156; continue _fun0007 }
case 157:
                    var15 = var13;
                    var14 = var15.map;
                    var13 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.promotion_end_datetime;
                            var6 = null;
                            var3 = var6 != var1;
                            var1 = null;
                            if(!var3) { _fun0008_ip = 158; continue _fun0008 }
case 159:
                            var3 = global;
                            var5 = var3.Date;
                            var8 = var2.promotion_end_datetime;
                            var4 = var5.prototype;
                            var4 = Object.create(var4, {constructor: {value: var5}});
                            var9 = var4;
                            var3 = new var9[var5](var8, var7);
                            var1 = var3 instanceof Object ? var3 : var4;
case 158:
                            var3 = var6 == var1;
                            if(var3) { _fun0008_ip = 13; continue _fun0008 }
case 146:
                            var4 = global;
                            var7 = var4.Number;
                            var5 = var7.isNaN;
                            var4 = var1.getTime;
                            var4 = var4.bind(var1)();
                            var3 = var5.bind(var7)(var4);
case 13:
                            var4 = null;
                            if(var3) { _fun0008_ip = 96; continue _fun0008 }
case 160:
                            var4 = var1;
case 96:
                            var1 = {};
                            var3 = var2.guild_id;
                            var1['guildId'] = var3;
                            var3 = var2.application_id;
                            var1['applicationId'] = var3;
                            var3 = var2.game_id;
                            var1['gameId'] = var3;
                            var5 = var2.collectibles_shop_navigation_enabled;
                            var3 = true;
                            var5 = var3 === var5;
                            var1['collectiblesShopNavigationEnabled'] = var5;
                            var5 = var2.excluded_platforms;
                            if(!(var6 == var5)) { _fun0008_ip = 18; continue _fun0008 }
case 142:
                            var5 = new Array(0);
case 18:
                            var1['excludedPlatforms'] = var5;
                            var5 = var2.disable_mobile_account_linking;
                            var5 = var3 === var5;
                            var1['disableMobileAccountLinking'] = var5;
                            var1['promotionEndDatetime'] = var4;
                            var2 = var2.allow_orbs_spending;
                            var2 = var3 === var2;
                            var1['allowOrbsSpending'] = var2;
                            return var1;
                        }
                    };
                    var5 = var14.bind(var15)(var13);
case 156:
                    var8 = var5;
                    if(!(var6 == var5)) { _fun0007_ip = 161; continue _fun0007 }
case 162:
                    var5 = new Array(0);
                    _fun0007_ip = 163; continue _fun0007;
case 161:
                    var5 = var8;
case 163:
                    var10 = var5;
                    var9 = null;
                    var5 = var12;
                    var5 = var5.announcement_modal_config;
                    if(!(var6 != var5)) { _fun0007_ip = 164; continue _fun0007 }
case 165:
                    var5 = {};
                    var6 = var12;
                    var8 = var6.announcement_modal_config;
                    var8 = var8.version;
                    var5['version'] = var8;
                    var6 = var6.announcement_modal_config;
                    var6 = var6.application_id;
                    var5['applicationId'] = var6;
                    var9 = var5;
case 164:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var7];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var8 = 'SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS';
                    var5['type'] = var8;
                    var8 = {};
                    var12 = var12.promotional_sku_ids;
                    var8['promotionalSkuIds'] = var12;
                    var8['promotionEndDatetime'] = var11;
                    var8['storefronts'] = var10;
                    var8['announcementModalConfig'] = var9;
                    var5['config'] = var8;
                    var5 = var6.bind(var7)(var5);
case 166: // try_end0
                    _fun0007_ip = 145; continue _fun0007;
case 151:
                    return var4;
case 44: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
case 145:
                    return var2;
case 82:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot26 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function _fetchSocialLayerStorefrontLaunchAnnouncement() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 167; continue _fun0009 }
case 136:
                    var2 = undefined;
                    var10 = undefined;
                    var17 = undefined;
                    var16 = undefined;
                    var15 = undefined;
                    var14 = undefined;
                    var13 = undefined;
                    var11 = undefined;
                    var12 = undefined;
                    var8 = undefined;
                    var9 = undefined;
                    var7 = undefined;
case 168: // try_start_0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 8;
                    var3 = var6[var3];
                    var3 = var5.bind(var2)(var3);
                    var6 = var3.HTTP;
                    var5 = var6.get;
                    var3 = {};
                    var18 = _closure1_slot6;
                    var18 = var18.SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT;
                    var3['url'] = var18;
                    var18 = true;
                    var3['rejectWithError'] = var18;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=98);
case 70:
                    return var3;
case 96:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0009_ip = 169; continue _fun0009 }
case 170:
                    var5 = var3.body;
                    var10 = var5;
                    var6 = null;
                    var18 = var6 != var5;
                    var5 = null;
                    if(!var18) { _fun0009_ip = 138; continue _fun0009 }
case 171:
                    var5 = var10;
case 138:
                    var9 = var5;
                    var7 = null;
                    if(!(var6 != var5)) { _fun0009_ip = 172; continue _fun0009 }
case 17:
                    var5 = {};
                    var10 = var9;
                    var18 = var10.application_id;
                    var5['applicationId'] = var18;
                    var10 = var10.light_theme_logo_url;
                    var17 = var10;
                    var18 = var6 != var10;
                    var10 = null;
                    if(!var18) { _fun0009_ip = 173; continue _fun0009 }
case 174:
                    var10 = var17;
case 173:
                    var5['lightThemeLogoUrl'] = var10;
                    var10 = var9;
                    var10 = var10.dark_theme_logo_url;
                    var16 = var10;
                    var17 = var6 != var10;
                    var10 = null;
                    if(!var17) { _fun0009_ip = 175; continue _fun0009 }
case 176:
                    var10 = var16;
case 175:
                    var5['darkThemeLogoUrl'] = var10;
                    var10 = var9;
                    var10 = var10.background_url;
                    var15 = var10;
                    var16 = var6 != var10;
                    var10 = null;
                    if(!var16) { _fun0009_ip = 177; continue _fun0009 }
case 178:
                    var10 = var15;
case 177:
                    var5['backgroundUrl'] = var10;
                    var10 = var9;
                    var10 = var10.titles;
                    var14 = var10;
                    var15 = var6 != var10;
                    var10 = null;
                    if(!var15) { _fun0009_ip = 179; continue _fun0009 }
case 180:
                    var10 = var14;
case 179:
                    var5['titles'] = var10;
                    var10 = var9;
                    var10 = var10.subtitle;
                    var13 = var10;
                    var14 = var6 != var10;
                    var10 = null;
                    if(!var14) { _fun0009_ip = 181; continue _fun0009 }
case 182:
                    var10 = var13;
case 181:
                    var5['subtitle'] = var10;
                    var10 = var9;
                    var10 = var10.features;
                    var12 = var10;
                    var13 = var6 == var10;
                    var10 = undefined;
                    if(var13) { _fun0009_ip = 183; continue _fun0009 }
case 184:
                    var14 = var12;
                    var13 = var14.map;
                    var12 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.asset_url;
                        var1['assetUrl'] = var3;
                        var3 = var2.title;
                        var1['title'] = var3;
                        var2 = var2.subtitle;
                        var1['subtitle'] = var2;
                        return var1;
                    };
                    var10 = var13.bind(var14)(var12);
case 183:
                    var11 = var10;
                    var12 = var6 != var10;
                    var10 = null;
                    if(!var12) { _fun0009_ip = 153; continue _fun0009 }
case 155:
                    var10 = var11;
case 153:
                    var5['features'] = var10;
                    var9 = var9.button_text;
                    var8 = var9;
                    var9 = var6 != var9;
                    var6 = null;
                    if(!var9) { _fun0009_ip = 185; continue _fun0009 }
case 186:
                    var6 = var8;
case 185:
                    var5['buttonText'] = var6;
                    var7 = var5;
case 172:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT_FETCH_SUCCESS';
                    var4['type'] = var8;
                    var4['config'] = var7;
                    var4 = var5.bind(var6)(var4);
case 187: // try_end0
                    _fun0009_ip = 188; continue _fun0009;
case 169:
                    return var3;
case 189: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT_FETCH_FAILURE';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
case 188:
                    return var2;
case 167:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot27 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot27 = var1;
    var6 = global;
    var12 = var6.Object;
    var10 = var12.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var12)(var3, var1, var9);
    var1 = 0;
    var9 = var8[var1];
    var1 = undefined;
    var9 = var11.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var8[var9];
    var9 = var11.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 2;
    var9 = var8[var9];
    var9 = var11.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var8[var9];
    var9 = var7.bind(var1)(var9);
    var9 = var9.Endpoints;
    var _closure1_slot6 = var9;
    var9 = 4;
    var10 = var8[var9];
    var10 = var11.bind(var1)(var10);
    var10 = var10.Millis;
    var10 = var10.SECOND;
    var13 = 30;
    var10 = var13 * var10;
    var _closure1_slot7 = var10;
    var10 = var8[var9];
    var10 = var11.bind(var1)(var10);
    var10 = var10.Millis;
    var10 = var10.MINUTE;
    var10 = var13 * var10;
    var _closure1_slot8 = var10;
    var10 = var8[var9];
    var10 = var11.bind(var1)(var10);
    var10 = var10.Millis;
    var12 = var10.MINUTE;
    var10 = 60;
    var10 = var10 * var12;
    var _closure1_slot9 = var10;
    var10 = var8[var9];
    var10 = var11.bind(var1)(var10);
    var10 = var10.Millis;
    var10 = var10.SECOND;
    var10 = var13 * var10;
    var _closure1_slot10 = var10;
    var10 = var8[var9];
    var10 = var11.bind(var1)(var10);
    var10 = var10.Millis;
    var12 = var10.SECOND;
    var10 = 5;
    var12 = var10 * var12;
    var _closure1_slot11 = var12;
    var12 = var8[var9];
    var12 = var11.bind(var1)(var12);
    var12 = var12.Millis;
    var12 = var12.MINUTE;
    var12 = var10 * var12;
    var _closure1_slot12 = var12;
    var12 = var8[var9];
    var12 = var11.bind(var1)(var12);
    var12 = var12.Millis;
    var12 = var12.SECOND;
    var12 = var13 * var12;
    var _closure1_slot13 = var12;
    var9 = var8[var9];
    var9 = var11.bind(var1)(var9);
    var9 = var9.Millis;
    var9 = var9.MINUTE;
    var9 = var10 * var9;
    var _closure1_slot14 = var9;
    var9 = var6.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var17 = var10;
    var9 = new var17[var9](var16);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot15 = var9;
    var6 = var6.Map;
    var9 = var6.prototype;
    var9 = Object.create(var9, {constructor: {value: var6}});
    var17 = var9;
    var6 = new var17[var6](var16);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot16 = var6;
    var6 = 11;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/slayer_storefront/SocialLayerStorefrontActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var3['_fetchSocialLayerStorefront'] = var5;
    var5 = function fetchSocialLayerStorefrontForApplication(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var7 = arg1;
            var5 = arguments[1];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0010_ip = 190; continue _fun0010 }
case 191:
            var5 = {};
case 190:
            var3 = _closure1_slot17;
            var2 = {};
            var6 = 'application';
            var2['type'] = var6;
            var2['applicationId'] = var7;
            var6 = _closure1_slot6;
            var1 = var6.SOCIAL_LAYER_STOREFRONT_BY_APPLICATION_ID;
            var1 = var1.bind(var6)(var7);
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
        }
    };
    var3['fetchSocialLayerStorefrontForApplication'] = var5;
    var5 = function fetchSocialLayerStorefront(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var7 = arg1;
            var5 = arguments[1];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0011_ip = 190; continue _fun0011 }
case 191:
            var5 = {};
case 190:
            var3 = _closure1_slot17;
            var2 = {};
            var6 = 'guild';
            var2['type'] = var6;
            var2['guildId'] = var7;
            var6 = _closure1_slot6;
            var1 = var6.SOCIAL_LAYER_APPLICATION_STOREFRONT;
            var1 = var1.bind(var6)(var7);
            var1 = var3.bind(var4)(var2, var1, var5);
            return var1;
        }
    };
    var3['fetchSocialLayerStorefront'] = var5;
    var5 = function fetchSocialLayerStorefrontSkuForApplication(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var5 = arg2;
            var4 = arguments[2];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0012_ip = 190; continue _fun0012 }
case 191:
            var4 = {};
case 190:
            var2 = _closure1_slot19;
            var7 = _closure1_slot6;
            var6 = var7.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_BY_APPLICATION_ID;
            var1 = arg1;
            var1 = var6.bind(var7)(var1, var5);
            var1 = var2.bind(var3)(var5, var1, var4);
            return var1;
        }
    };
    var3['fetchSocialLayerStorefrontSkuForApplication'] = var5;
    var5 = function fetchSocialLayerStorefrontSku(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var5 = arg2;
            var4 = arguments[2];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0013_ip = 190; continue _fun0013 }
case 191:
            var4 = {};
case 190:
            var2 = _closure1_slot19;
            var7 = _closure1_slot6;
            var6 = var7.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU;
            var1 = arg1;
            var1 = var6.bind(var7)(var1, var5);
            var1 = var2.bind(var3)(var5, var1, var4);
            return var1;
        }
    };
    var3['fetchSocialLayerStorefrontSku'] = var5;
    var5 = function setSocialLayerStorefrontState(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SET_SOCIAL_LAYER_STOREFRONT_STATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['applicationId'] = var5;
        var5 = arg2;
        var2['pageIndex'] = var5;
        var5 = arg3;
        var2['skuId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setSocialLayerStorefrontState'] = var5;
    var5 = function fetchSocialLayerStorefrontEntries() {
        var1 = undefined;
        var4 = _closure1_slot22;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchSocialLayerStorefrontEntries'] = var5;
    var5 = function fetchSocialLayerStorefrontById() {
        var1 = undefined;
        var4 = _closure1_slot23;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchSocialLayerStorefrontById'] = var5;
    var3['setSocialLayerStorefrontPreview'] = var4;
    var4 = function fetchSocialLayerStorefrontAnnouncement() {
        var1 = undefined;
        var4 = _closure1_slot25;
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
        var4 = _closure1_slot26;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchSocialLayerStorefrontConfig'] = var4;
    var4 = function fetchSocialLayerSKUPurchaseEligibility(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var8 = arg2;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot5;
            var2 = var3.getSKUEligibility;
            var4 = var2.bind(var3)(var8);
            var2 = 'checking';
            var2 = var2 !== var4;
            if(!var2) { _fun0014_ip = 192; continue _fun0014 }
case 193:
            var3 = 'eligible';
            var2 = var3 !== var4;
case 192:
            if(!var2) { _fun0014_ip = 194; continue _fun0014 }
case 7:
            var3 = 'ineligible';
            var2 = var3 !== var4;
case 194:
            if(!var2) { _fun0014_ip = 75; continue _fun0014 }
case 195:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 5;
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
            var3 = _closure1_slot11;
            var2 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var5 = _closure1_slot5;
                    var3 = var5.getSKUEligibility;
                    var2 = _closure2_slot0;
                    var3 = var3.bind(var5)(var2);
                    var2 = 'checking';
                    if(!(var2 === var3)) { _fun0015_ip = 90; continue _fun0015 }
case 196:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {'type': 'SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE', 'skuId': null, 'reason': 'interaction_deadline'};
                    var4 = _closure2_slot0;
                    var1['skuId'] = var4;
                    var1 = var2.bind(var3)(var1);
case 90:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var7.bind(var4)(var2, var3);
            var3 = _closure1_slot0;
            var2 = 8;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.HTTP;
            var3 = var4.post;
            var2 = {};
            var7 = _closure1_slot6;
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
                var1 = 5;
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
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var6 = arg1;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 5;
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
                    if(var7) { _fun0016_ip = 197; continue _fun0016 }
case 95:
                    var5 = var6.status;
case 197:
                    var2['httpStatus'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
case 75:
            var1 = undefined;
            return var1;
        }
    };
    var3['fetchSocialLayerSKUPurchaseEligibility'] = var4;
    var2 = function fetchSocialLayerStorefrontLaunchAnnouncement() {
        var1 = undefined;
        var4 = _closure1_slot27;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchSocialLayerStorefrontLaunchAnnouncement'] = var2;
    return var1;
})();