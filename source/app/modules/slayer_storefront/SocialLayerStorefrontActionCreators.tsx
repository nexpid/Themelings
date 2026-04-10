// app/modules/slayer_storefront/SocialLayerStorefrontActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
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
                    var18 = var5.body;
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
                    var17 = var17.bind(var3)(var16);
                    var16 = var17.transformSlayerApplicationStorefrontServer;
                    var16 = var16.bind(var17)(var18);
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
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
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
                    var10 = arg1;
                    var6 = arg2;
                    var2 = undefined;
                    var8 = undefined;
case 48: // try_start_0
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 4;
                    var3 = var9[var7];
                    var11 = var5.bind(var2)(var3);
                    var5 = var11.dispatch;
                    var3 = {};
                    var12 = 'STORE_LISTINGS_FETCH_START';
                    var3['type'] = var12;
                    var13 = var6;
                    var3['skuId'] = var13;
                    var3 = var5.bind(var11)(var3);
                    var5 = _closure1_slot0;
                    var3 = 5;
                    var3 = var9[var3];
                    var3 = var5.bind(var2)(var3);
                    var9 = var3.HTTP;
                    var5 = var9.get;
                    var3 = {};
                    var12 = _closure1_slot5;
                    var11 = var12.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU;
                    var10 = var11.bind(var12)(var10, var13);
                    var3['url'] = var10;
                    var10 = true;
                    var3['rejectWithError'] = var10;
                    var3 = var5.bind(var9)(var3);
                    SaveGenerator(address=133);
case 49:
                    return var3;
case 50:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 51; continue _fun0002 }
case 52:
                    var8 = var3;
                    var9 = var3.body;
                    var5 = null;
                    if(!(var5 != var9)) { _fun0002_ip = 53; continue _fun0002 }
case 18:
                    var5 = var8;
                    var5 = var5.ok;
                    if(!var5) { _fun0002_ip = 53; continue _fun0002 }
case 54:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var9 = var4[var7];
                    var11 = var5.bind(var2)(var9);
                    var10 = var11.dispatch;
                    var9 = {};
                    var12 = 'SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS';
                    var9['type'] = var12;
                    var12 = global;
                    var14 = var12.Object;
                    var13 = var14.fromEntries;
                    var12 = var8.body;
                    var16 = var12.assets;
                    var15 = var16.map;
                    var12 = function(arg1) {
                        var2 = arg1;
                        var3 = var2.id;
                        var1 = new Array(2);
                        var1[0] = var3;
                        var1[1] = var2;
                        return var1;
                    };
                    var12 = var15.bind(var16)(var12);
                    var12 = var13.bind(var14)(var12);
                    var9['assets'] = var12;
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
case 53: // try_start_1
                    var4 = global;
                    var7 = var4.Error;
                    var4 = var7.prototype;
                    var5 = Object.create(var4, {constructor: {value: var7}});
                    var18 = 'Failed to fetch social layer storefront SKU';
                    var19 = var5;
                    var4 = new var19[var7](var18, var17);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
case 51: // try_end1
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
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
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
                    if(var2) { _fun0003_ip = 58; continue _fun0003 }
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
case 59:
                    return var2;
case 16:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 60; continue _fun0003 }
case 61:
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
case 62: // try_end0
                    _fun0003_ip = 63; continue _fun0003;
case 60:
                    return var2;
case 64: // catch_target0
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
case 63:
                    var2 = undefined;
                    return var2;
case 58:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
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
                    if(var2) { _fun0004_ip = 65; continue _fun0004 }
case 47:
                    var2 = undefined;
                    var10 = undefined;
                    var12 = undefined;
                    var9 = undefined;
                    var13 = undefined;
                    var5 = undefined;
                    var6 = _closure1_slot4;
                    var4 = var6.getConfigFetchState;
                    var4 = var4.bind(var6)();
                    var7 = var4.state;
                    var6 = 'loading';
                    if(!(var6 !== var7)) { _fun0004_ip = 66; continue _fun0004 }
case 10:
                    var7 = var4.state;
                    var6 = 'success';
                    if(!(var6 === var7)) { _fun0004_ip = 67; continue _fun0004 }
case 68:
                    var6 = global;
                    var7 = var6.Date;
                    var6 = var7.now;
                    var7 = var6.bind(var7)();
                    var6 = var4.fetchedAt;
                    var7 = var7 - var6;
                    var6 = _closure1_slot8;
                    if(!(!(var7 < var6))) { _fun0004_ip = 66; continue _fun0004 }
case 67:
                    var7 = var4.state;
                    var6 = 'error';
                    if(!(var6 === var7)) { _fun0004_ip = 18; continue _fun0004 }
case 69:
                    var6 = global;
                    var7 = var6.Date;
                    var6 = var7.now;
                    var6 = var6.bind(var7)();
                    var4 = var4.fetchedAt;
                    var6 = var6 - var4;
                    var4 = _closure1_slot9;
                    if(!(!(var6 < var4))) { _fun0004_ip = 66; continue _fun0004 }
case 18: // try_start_0
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var7 = 4;
                    var4 = var8[var7];
                    var11 = var6.bind(var2)(var4);
                    var6 = var11.dispatch;
                    var4 = {};
                    var14 = 'SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START';
                    var4['type'] = var14;
                    var4 = var6.bind(var11)(var4);
                    var6 = _closure1_slot0;
                    var4 = 5;
                    var4 = var8[var4];
                    var4 = var6.bind(var2)(var4);
                    var8 = var4.HTTP;
                    var6 = var8.get;
                    var4 = {};
                    var11 = _closure1_slot5;
                    var11 = var11.SOCIAL_LAYER_STOREFRONT_CONFIG;
                    var4['url'] = var11;
                    var11 = true;
                    var4['rejectWithError'] = var11;
                    var4 = var6.bind(var8)(var4);
                    SaveGenerator(address=258);
case 70:
                    return var4;
case 71:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 72; continue _fun0004 }
case 73:
                    var6 = var4.body;
                    var9 = var6;
                    var11 = null;
                    var13 = null;
                    var6 = var6.promotion_end_datetime;
                    if(!(var11 != var6)) { _fun0004_ip = 74; continue _fun0004 }
case 75:
                    var6 = global;
                    var15 = var6.Date;
                    var8 = var9;
                    var16 = var8.promotion_end_datetime;
                    var14 = var15.prototype;
                    var14 = Object.create(var14, {constructor: {value: var15}});
                    var17 = var14;
                    var8 = new var17[var15](var16, var15);
                    var15 = var8 instanceof Object ? var8 : var14;
                    var5 = var15;
                    var14 = var6.Number;
                    var8 = var14.isNaN;
                    var6 = var15.getTime;
                    var6 = var6.bind(var15)();
                    var6 = var8.bind(var14)(var6);
                    if(var6) { _fun0004_ip = 74; continue _fun0004 }
case 76:
                    var13 = var5;
case 74:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var7];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var8 = 'SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS';
                    var5['type'] = var8;
                    var8 = {};
                    var14 = var9.promotional_sku_ids;
                    var8['promotionalSkuIds'] = var14;
                    var8['promotionEndDatetime'] = var13;
                    var9 = var9.storefronts;
                    var12 = var9;
                    var13 = var11 == var9;
                    var9 = undefined;
                    if(var13) { _fun0004_ip = 77; continue _fun0004 }
case 78:
                    var14 = var12;
                    var13 = var14.map;
                    var12 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.guild_id;
                        var1['guildId'] = var3;
                        var3 = var2.application_id;
                        var1['applicationId'] = var3;
                        var2 = var2.game_id;
                        var1['gameId'] = var2;
                        return var1;
                    };
                    var9 = var13.bind(var14)(var12);
case 77:
                    var10 = var9;
                    if(!(var11 == var9)) { _fun0004_ip = 79; continue _fun0004 }
case 80:
                    var9 = new Array(0);
                    _fun0004_ip = 81; continue _fun0004;
case 79:
                    var9 = var10;
case 81:
                    var8['storefronts'] = var9;
                    var5['config'] = var8;
                    var5 = var6.bind(var7)(var5);
case 82: // try_end0
                    _fun0004_ip = 66; continue _fun0004;
case 72:
                    return var4;
case 83: // catch_target0
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
case 66:
                    return var2;
case 65:
                    return var1;
                }
            };
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
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot5 = var4;
    var4 = 3;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.SECOND;
    var9 = 30;
    var8 = var9 * var8;
    var _closure1_slot6 = var8;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.MINUTE;
    var8 = var9 * var8;
    var _closure1_slot7 = var8;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var10 = var8.MINUTE;
    var8 = 60;
    var8 = var8 * var10;
    var _closure1_slot8 = var8;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.SECOND;
    var8 = var9 * var8;
    var _closure1_slot9 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var7 = var4.SECOND;
    var4 = 5;
    var4 = var4 * var7;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/SocialLayerStorefrontActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchSocialLayerStorefront() {
        var1 = undefined;
        var4 = _closure1_slot11;
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
        var4 = _closure1_slot12;
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
    var4 = function fetchSocialLayerStorefrontAnnouncement() {
        var1 = undefined;
        var4 = _closure1_slot13;
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
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchSocialLayerStorefrontConfig'] = var4;
    var2 = function fetchSocialLayerSKUPurchaseEligibility(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var8 = arg2;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot4;
            var2 = var3.getSKUEligibility;
            var4 = var2.bind(var3)(var8);
            var2 = 'checking';
            var2 = var2 !== var4;
            if(!var2) { _fun0005_ip = 84; continue _fun0005 }
case 85:
            var3 = 'eligible';
            var2 = var3 !== var4;
case 84:
            if(!var2) { _fun0005_ip = 10; continue _fun0005 }
case 86:
            var3 = 'ineligible';
            var2 = var3 !== var4;
case 10:
            if(!var2) { _fun0005_ip = 87; continue _fun0005 }
case 88:
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
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var5 = _closure1_slot4;
                    var3 = var5.getSKUEligibility;
                    var2 = _closure2_slot0;
                    var3 = var3.bind(var5)(var2);
                    var2 = 'checking';
                    if(!(var2 === var3)) { _fun0006_ip = 89; continue _fun0006 }
case 90:
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
case 89:
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
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
                    if(var7) { _fun0007_ip = 91; continue _fun0007 }
case 92:
                    var5 = var6.status;
case 91:
                    var2['httpStatus'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
case 87:
            var1 = undefined;
            return var1;
        }
    };
    var3['fetchSocialLayerSKUPurchaseEligibility'] = var2;
    return var1;
})();