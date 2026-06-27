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
                    var11 = undefined;
                    var15 = undefined;
                    var21 = undefined;
                    var10 = undefined;
                    SaveGenerator(address=47);
case 6:
                    return var3;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var9 = var4.eager;
                    var5 = var3 !== var9;
                    if(!var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var5 = var9;
case 10:
                    var7 = var5;
                    var4 = var4.forceFetch;
                    var5 = var3 !== var4;
                    if(!var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var5 = var4;
case 12:
                    var17 = _closure1_slot4;
                    var14 = var17.getStorefrontFetchState;
                    var9 = var8;
                    var18 = var14.bind(var17)(var9);
                    var17 = null;
                    var9 = var17 == var18;
                    var19 = undefined;
                    if(var9) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var19 = var18.state;
case 14:
                    var9 = var17 == var18;
                    var14 = undefined;
                    if(var9) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var14 = var18.state;
case 16:
                    var9 = 'error';
                    var14 = var9 === var14;
                    if(!var14) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var9 = var18.fetchedAt;
                    var14 = var17 != var9;
case 18:
                    if(!var14) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var9 = global;
                    var20 = var9.Date;
                    var9 = var20.now;
                    var20 = var9.bind(var20)();
                    var9 = var18.fetchedAt;
                    var20 = var20 - var9;
                    var9 = _closure1_slot6;
                    var14 = var20 < var9;
case 20:
                    var9 = var17 == var18;
                    var20 = undefined;
                    if(var9) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var20 = var18.state;
case 22:
                    var9 = 'fetched';
                    var9 = var9 === var20;
                    if(!var9) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var20 = var18.fetchedAt;
                    var9 = var17 != var20;
case 24:
                    if(!var9) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                    var20 = global;
                    var22 = var20.Date;
                    var20 = var22.now;
                    var20 = var20.bind(var22)();
                    var18 = var18.fetchedAt;
                    var20 = var20 - var18;
                    var18 = _closure1_slot7;
                    var9 = var20 < var18;
case 26:
                    var18 = 'loading';
                    if(!(var18 !== var19)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                    if(var14) { _fun0001_ip = 28; continue _fun0001 }
case 30:
                    if(!var9) { _fun0001_ip = 31; continue _fun0001 }
case 28:
                    if(!var5) { _fun0001_ip = 32; continue _fun0001 }
case 31: // try_start_0
                    var9 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var14 = 4;
                    var5 = var5[var14];
                    var19 = var9.bind(var3)(var5);
                    var18 = var19.dispatch;
                    var9 = {};
                    var5 = 'SOCIAL_LAYER_STOREFRONT_LOAD';
                    var9['type'] = var5;
                    var5 = var8;
                    var9['guildOrApplicationId'] = var5;
                    var9 = var18.bind(var19)(var9);
                    var5 = var5.type;
                    var19 = 'application';
                    if(!(var19 !== var5)) { _fun0001_ip = 33; continue _fun0001 }
case 34:
                    var9 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var5 = 5;
                    var5 = var18[var5];
                    var18 = var9.bind(var3)(var5);
                    var9 = var18.getSocialLayerStorefrontApplicationId;
                    var5 = var8;
                    var5 = var5.guildId;
                    var9 = var9.bind(var18)(var5);
                    _fun0001_ip = 35; continue _fun0001;
case 33:
                    var5 = var8;
                    var9 = var5.applicationId;
case 35:
                    var13 = var9;
                    var12 = {};
                    var9 = var17 != var9;
                    var5 = var9;
                    if(!var9) { _fun0001_ip = 36; continue _fun0001 }
case 37:
                    var18 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var9 = 6;
                    var9 = var20[var9];
                    var20 = var18.bind(var3)(var9);
                    var18 = var20.isTestModeForApplication;
                    var9 = var13;
                    var5 = var18.bind(var20)(var9);
case 36:
                    if(!var5) { _fun0001_ip = 38; continue _fun0001 }
case 39:
                    var9 = var12;
                    var5 = true;
                    var9['test_mode'] = var5;
case 38:
                    var18 = var8;
                    var20 = var18.type;
                    var18 = 'guild';
                    var18 = var18 === var20;
                    var9 = var18;
                    if(!var18) { _fun0001_ip = 40; continue _fun0001 }
case 41:
                    var9 = var17 == var13;
case 40:
                    var5 = var9;
                    if(!var9) { _fun0001_ip = 42; continue _fun0001 }
case 43:
                    var13 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var9 = 6;
                    var9 = var18[var9];
                    var13 = var13.bind(var3)(var9);
                    var9 = var13.isAnyApplicationInTestMode;
                    var5 = var9.bind(var13)();
case 42:
                    var11 = var5;
                    var9 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var5 = 7;
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
                    SaveGenerator(address=603);
case 44:
                    return var5;
case 45:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 46; continue _fun0001 }
case 47:
                    var15 = var5;
                    var18 = var5.body;
                    var21 = var18;
                    var13 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var22 = 5;
                    var9 = var9[var22];
                    var13 = var13.bind(var3)(var9);
                    var9 = var13.transformSlayerApplicationStorefrontServer;
                    var9 = var9.bind(var13)(var18);
                    var10 = var9;
                    var9 = var9.storefrontPricing;
                    if(!(var17 != var9)) { _fun0001_ip = 48; continue _fun0001 }
case 49:
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
case 48:
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
                    if(!(var17 == var15)) { _fun0001_ip = 50; continue _fun0001 }
case 51:
                    var15 = new Array(0);
                    _fun0001_ip = 52; continue _fun0001;
case 50:
                    var15 = var16;
case 52:
                    var9['storeListings'] = var15;
                    var9 = var13.bind(var14)(var9);
                    var9 = var11;
                    if(!var11) { _fun0001_ip = 53; continue _fun0001 }
case 54:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var11 = 6;
                    var11 = var14[var11];
                    var13 = var13.bind(var3)(var11);
                    var11 = var13.isTestModeForApplication;
                    var10 = var10.applicationId;
                    var9 = var11.bind(var13)(var10);
case 53:
                    if(!var9) { _fun0001_ip = 55; continue _fun0001 }
case 56:
                    var11 = _closure1_slot11;
                    var10 = var8;
                    var9 = var6;
                    var6 = {};
                    var6['forceFetch'] = var12;
                    var6 = var11.bind(var3)(var10, var9, var6);
                    SaveGenerator(address=997);
case 57:
                    return var6;
case 58:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 59; continue _fun0001 }
case 55: // try_end0
                    _fun0001_ip = 32; continue _fun0001;
case 59:
                    return var6;
case 46:
                    return var5;
case 60: // catch_target0
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
                    var2 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 61; continue _fun0002 }
case 3:
                    var7 = arg1;
                    var15 = arg2;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = {};
case 4:
                    var5 = var2;
                    var11 = undefined;
                    var10 = undefined;
                    var4 = undefined;
                    var14 = undefined;
                    var6 = undefined;
                    var9 = undefined;
                    var12 = undefined;
                    SaveGenerator(address=48);
case 62:
                    return var3;
case 63:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0002_ip = 64; continue _fun0002 }
case 65:
                    var8 = var5;
                    var13 = var8.withGoogleSkuIds;
                    var16 = var3 !== var13;
                    var8 = var16;
                    if(!var16) { _fun0002_ip = 66; continue _fun0002 }
case 67:
                    var8 = var13;
case 66:
                    var11 = var8;
                    var10 = var5.countryCode;
                    var4 = var5.paymentGateway;
case 68: // try_start_0
                    var16 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var8 = 4;
                    var13 = var13[var8];
                    var17 = var16.bind(var3)(var13);
                    var16 = var17.dispatch;
                    var13 = {};
                    var18 = 'STORE_LISTINGS_FETCH_START';
                    var13['type'] = var18;
                    var18 = var7;
                    var13['skuId'] = var18;
                    var13 = var16.bind(var17)(var13);
                    var14 = {};
                    if(!var11) { _fun0002_ip = 69; continue _fun0002 }
case 70:
                    var13 = var14;
                    var11 = true;
                    var13['with_google_sku_ids'] = var11;
case 69:
                    var13 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var11 = 8;
                    var11 = var16[var11];
                    var16 = var13.bind(var3)(var11);
                    var13 = var16.isNullOrEmpty;
                    var11 = var10;
                    var11 = var13.bind(var16)(var11);
                    if(var11) { _fun0002_ip = 71; continue _fun0002 }
case 72:
                    var11 = var14;
                    var11['country_code'] = var10;
case 71:
                    var11 = var4;
                    var10 = null;
                    if(!(var10 != var11)) { _fun0002_ip = 73; continue _fun0002 }
case 22:
                    var11 = var14;
                    var11['payment_gateway'] = var4;
case 73:
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 7;
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
                    SaveGenerator(address=282);
case 74:
                    return var4;
case 75:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=10);
                    if(var11) { _fun0002_ip = 76; continue _fun0002 }
case 77:
                    var6 = var4;
                    var11 = var4.body;
                    if(!(var10 != var11)) { _fun0002_ip = 78; continue _fun0002 }
case 79:
                    var11 = var6;
                    var11 = var11.ok;
                    if(!var11) { _fun0002_ip = 78; continue _fun0002 }
case 80:
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
                    if(!(var10 != var6)) { _fun0002_ip = 81; continue _fun0002 }
case 82:
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
                    var13 = 5;
                    var13 = var15[var13];
                    var14 = var14.bind(var3)(var13);
                    var13 = var14.transformStorefrontMetadataServer;
                    var12 = var13.bind(var14)(var12);
                    var6['storefrontMetadata'] = var12;
                    var6 = var10.bind(var11)(var6);
case 81:
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
case 83: // try_end0
                    _fun0002_ip = 84; continue _fun0002;
case 78: // try_start_1
                    var5 = global;
                    var8 = var5.Error;
                    var5 = var8.prototype;
                    var6 = Object.create(var5, {constructor: {value: var8}});
                    var20 = 'Failed to fetch social layer storefront SKU';
                    var21 = var6;
                    var5 = new var21[var8](var20, var19);
                    var5 = var5 instanceof Object ? var5 : var6;
                    throw var5;
case 76: // try_end1
                    return var4;
case 85: // catch_target0 // catch_target1
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
case 84:
                    return var3;
case 64:
                    return var2;
case 61:
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
                    if(var2) { _fun0003_ip = 86; continue _fun0003 }
case 87:
                    var6 = arg1;
                    var2 = undefined;
                    var9 = undefined;
case 88: // try_start_0
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
                    var3 = 7;
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
case 89:
                    return var3;
case 90:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 91; continue _fun0003 }
case 92:
                    var5 = var3.body;
                    var9 = var5;
                    var5 = var5.type;
                    var10 = 'guild-discord-announcement';
                    if(!(var10 !== var5)) { _fun0003_ip = 93; continue _fun0003 }
case 94:
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
                    _fun0003_ip = 95; continue _fun0003;
case 93:
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
case 95:
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
case 96: // try_end0
                    _fun0003_ip = 97; continue _fun0003;
case 91:
                    return var3;
case 98: // catch_target0
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
case 97:
                    return var2;
case 86:
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
                    if(var2) { _fun0004_ip = 45; continue _fun0004 }
case 87:
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
                    if(!(var6 !== var7)) { _fun0004_ip = 99; continue _fun0004 }
case 65:
                    var7 = var4.state;
                    var6 = 'success';
                    if(!(var6 === var7)) { _fun0004_ip = 100; continue _fun0004 }
case 101:
                    var6 = global;
                    var7 = var6.Date;
                    var6 = var7.now;
                    var7 = var6.bind(var7)();
                    var6 = var4.fetchedAt;
                    var7 = var7 - var6;
                    var6 = _closure1_slot8;
                    if(!(!(var7 < var6))) { _fun0004_ip = 99; continue _fun0004 }
case 100:
                    var7 = var4.state;
                    var6 = 'error';
                    if(!(var6 === var7)) { _fun0004_ip = 102; continue _fun0004 }
case 103:
                    var6 = global;
                    var7 = var6.Date;
                    var6 = var7.now;
                    var6 = var6.bind(var7)();
                    var4 = var4.fetchedAt;
                    var6 = var6 - var4;
                    var4 = _closure1_slot9;
                    if(!(!(var6 < var4))) { _fun0004_ip = 99; continue _fun0004 }
case 102: // try_start_0
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
                    var4 = 7;
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
case 104:
                    return var4;
case 105:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 106; continue _fun0004 }
case 107:
                    var6 = var4.body;
                    var11 = var6;
                    var9 = null;
                    var14 = null;
                    var6 = var6.promotion_end_datetime;
                    if(!(var9 != var6)) { _fun0004_ip = 108; continue _fun0004 }
case 109:
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
                    if(var6) { _fun0004_ip = 108; continue _fun0004 }
case 34:
                    var14 = var5;
case 108:
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
                    if(var14) { _fun0004_ip = 110; continue _fun0004 }
case 111:
                    var15 = var13;
                    var14 = var15.map;
                    var13 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.promotion_end_datetime;
                            var6 = null;
                            var3 = var6 != var1;
                            var1 = null;
                            if(!var3) { _fun0005_ip = 112; continue _fun0005 }
case 113:
                            var3 = global;
                            var5 = var3.Date;
                            var8 = var2.promotion_end_datetime;
                            var4 = var5.prototype;
                            var4 = Object.create(var4, {constructor: {value: var5}});
                            var9 = var4;
                            var3 = new var9[var5](var8, var7);
                            var1 = var3 instanceof Object ? var3 : var4;
case 112:
                            var3 = var6 == var1;
                            if(var3) { _fun0005_ip = 114; continue _fun0005 }
case 115:
                            var4 = global;
                            var7 = var4.Number;
                            var5 = var7.isNaN;
                            var4 = var1.getTime;
                            var4 = var4.bind(var1)();
                            var3 = var5.bind(var7)(var4);
case 114:
                            var4 = null;
                            if(var3) { _fun0005_ip = 116; continue _fun0005 }
case 117:
                            var4 = var1;
case 116:
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
                            if(!(var6 == var5)) { _fun0005_ip = 118; continue _fun0005 }
case 94:
                            var5 = new Array(0);
case 118:
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
                    var10 = var14.bind(var15)(var13);
case 110:
                    var12 = var10;
                    if(!(var9 == var10)) { _fun0004_ip = 119; continue _fun0004 }
case 120:
                    var10 = new Array(0);
                    _fun0004_ip = 121; continue _fun0004;
case 119:
                    var10 = var12;
case 121:
                    var8['storefronts'] = var10;
                    var10 = var11;
                    var10 = var10.announcement_modal_config;
                    var10 = var9 != var10;
                    var9 = null;
                    if(!var10) { _fun0004_ip = 81; continue _fun0004 }
case 122:
                    var10 = {};
                    var12 = var11.announcement_modal_config;
                    var12 = var12.version;
                    var10['version'] = var12;
                    var11 = var11.announcement_modal_config;
                    var11 = var11.application_id;
                    var10['applicationId'] = var11;
                    var9 = var10;
case 81:
                    var8['announcementModalConfig'] = var9;
                    var5['config'] = var8;
                    var5 = var6.bind(var7)(var5);
case 123: // try_end0
                    _fun0004_ip = 99; continue _fun0004;
case 106:
                    return var4;
case 124: // catch_target0
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
case 99:
                    return var2;
case 45:
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
                    if(var2) { _fun0006_ip = 125; continue _fun0006 }
case 87:
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
case 65: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 7;
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
case 126:
                    return var3;
case 127:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0006_ip = 20; continue _fun0006 }
case 128:
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
                    var10 = 5;
                    var10 = var12[var10];
                    var11 = var11.bind(var4)(var10);
                    var10 = var11.transformSocialLayerStorefrontAffinityServer;
                    var10 = var10.bind(var11)(var6);
                    var7['affinity'] = var10;
                    var7 = var8.bind(var9)(var7);
case 129: // try_end0
                    return var6;
case 20:
                    return var3;
case 130: // catch_target0
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
case 125:
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
    var5 = 9;
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
            if(!(var5 === var4)) { _fun0007_ip = 131; continue _fun0007 }
case 132:
            var5 = {};
case 131:
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
            if(!(var5 === var4)) { _fun0008_ip = 131; continue _fun0008 }
case 132:
            var5 = {};
case 131:
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
            if(!(var4 === var3)) { _fun0009_ip = 131; continue _fun0009 }
case 132:
            var4 = {};
case 131:
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
            if(!(var4 === var3)) { _fun0010_ip = 131; continue _fun0010 }
case 132:
            var4 = {};
case 131:
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
        var2['applicationId'] = var5;
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
            if(!var2) { _fun0011_ip = 62; continue _fun0011 }
case 133:
            var3 = 'eligible';
            var2 = var3 !== var4;
case 62:
            if(!var2) { _fun0011_ip = 65; continue _fun0011 }
case 134:
            var3 = 'ineligible';
            var2 = var3 !== var4;
case 65:
            if(!var2) { _fun0011_ip = 25; continue _fun0011 }
case 135:
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
                    if(!(var2 === var3)) { _fun0012_ip = 136; continue _fun0012 }
case 137:
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
case 136:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var7.bind(var4)(var2, var3);
            var3 = _closure1_slot0;
            var2 = 7;
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
                    if(var7) { _fun0013_ip = 10; continue _fun0013 }
case 138:
                    var5 = var6.status;
case 10:
                    var2['httpStatus'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
case 25:
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