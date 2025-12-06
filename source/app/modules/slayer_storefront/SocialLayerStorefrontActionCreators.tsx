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
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var8 = arg1;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var2 = false;
case 4:
                    var7 = var2;
                    var12 = undefined;
                    SaveGenerator(address=33);
case 6:
                    return var3;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var9 = _closure1_slot4;
                    var6 = var9.getStorefrontData;
                    var5 = var8;
                    var9 = var6.bind(var9)(var5);
                    var13 = null;
                    var5 = var13 == var9;
                    var10 = undefined;
                    if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var10 = var9.state;
case 10:
                    var5 = var13 == var9;
                    var6 = undefined;
                    if(var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var6 = var9.state;
case 12:
                    var5 = 'error';
                    var6 = var5 === var6;
                    if(!var6) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var11 = var13 == var9;
                    var5 = undefined;
                    if(var11) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var5 = var9.fetchedAt;
case 16:
                    var6 = var13 != var5;
case 14:
                    if(!var6) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var5 = global;
                    var11 = var5.Date;
                    var5 = var11.now;
                    var11 = var5.bind(var11)();
                    var5 = var9.fetchedAt;
                    var11 = var11 - var5;
                    var5 = _closure1_slot6;
                    var6 = var11 < var5;
case 18:
                    var5 = var13 == var9;
                    var11 = undefined;
                    if(var5) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var11 = var9.state;
case 20:
                    var5 = 'fetched';
                    var5 = var5 === var11;
                    if(!var5) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var14 = var13 == var9;
                    var11 = undefined;
                    if(var14) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var11 = var9.fetchedAt;
case 24:
                    var5 = var13 != var11;
case 22:
                    if(!var5) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                    var11 = global;
                    var14 = var11.Date;
                    var11 = var14.now;
                    var11 = var11.bind(var14)();
                    var9 = var9.fetchedAt;
                    var11 = var11 - var9;
                    var9 = _closure1_slot7;
                    var5 = var11 < var9;
case 26:
                    var9 = 'loading';
                    if(!(var9 !== var10)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                    if(var6) { _fun0001_ip = 28; continue _fun0001 }
case 30:
                    if(var5) { _fun0001_ip = 28; continue _fun0001 }
case 31: // try_start_0
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
                    SaveGenerator(address=387);
case 32:
                    return var5;
case 33:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 34; continue _fun0001 }
case 35:
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
                    if(!(var13 == var11)) { _fun0001_ip = 36; continue _fun0001 }
case 37:
                    var11 = new Array(0);
                    _fun0001_ip = 38; continue _fun0001;
case 36:
                    var11 = var12;
case 38:
                    var6['storeListings'] = var11;
                    var6 = var9.bind(var10)(var6);
case 39: // try_end0
                    _fun0001_ip = 28; continue _fun0001;
case 34:
                    return var5;
case 40: // catch_target0
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
case 28:
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
                    if(var2) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                    var13 = arg1;
                    var6 = arg2;
                    var2 = undefined;
                    var8 = undefined;
case 43: // try_start_0
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
case 44:
                    return var3;
case 45:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 46; continue _fun0002 }
case 47:
                    var8 = var3;
                    var5 = var3.body;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0002_ip = 48; continue _fun0002 }
case 18:
                    var4 = var8;
                    var4 = var4.ok;
                    if(!var4) { _fun0002_ip = 48; continue _fun0002 }
case 49:
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
case 50: // try_end0
                    _fun0002_ip = 51; continue _fun0002;
case 48: // try_start_1
                    var4 = global;
                    var7 = var4.Error;
                    var4 = var7.prototype;
                    var5 = Object.create(var4, {constructor: {value: var7}});
                    var17 = 'Failed to fetch social layer storefront SKU';
                    var18 = var5;
                    var4 = new var18[var7](var17, var16);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
case 46: // try_end1
                    return var3;
case 52: // catch_target0 // catch_target1
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
case 51:
                    return var2;
case 41:
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
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/SocialLayerStorefrontActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
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
    var2 = function setSocialLayerStorefrontState(arg1, arg2, arg3) {
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
    var3['setSocialLayerStorefrontState'] = var2;
    return var1;
})();