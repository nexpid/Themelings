// app/modules/premium_apps/ApplicationSubscriptionsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot7;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot7;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function transformSubscriptionListingToSku(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.id;
        var1['id'] = var3;
        var4 = _closure1_slot5;
        var4 = var4.SUBSCRIPTION;
        var1['type'] = var4;
        var4 = var2.application_id;
        var1['application_id'] = var4;
        var3 = _closure1_slot4;
        var3 = var3.APPLICATION;
        var1['product_line'] = var3;
        var3 = var2.name;
        var1['name'] = var3;
        var3 = '';
        var1['summary'] = var3;
        var4 = var2.description;
        var1['description'] = var4;
        var4 = var2.sku_flags;
        var1['flags'] = var4;
        var4 = new Array(0);
        var1['manifests'] = var4;
        var4 = new Array(0);
        var1['available_regions'] = var4;
        var1['legal_notice'] = var3;
        var2 = var2.soft_deleted;
        var1['deleted'] = var2;
        var2 = 0;
        var1['price_tier'] = var2;
        var2 = false;
        var1['show_age_gate'] = var2;
        var1['restricted'] = var2;
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function transformSubscriptionListingToStoreListing(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.id;
            var1['id'] = var3;
            var4 = _closure1_slot8;
            var3 = undefined;
            var3 = var4.bind(var3)(var2);
            var1['sku'] = var3;
            var3 = var2.description;
            var1['summary'] = var3;
            var3 = var2.description;
            var1['description'] = var3;
            var3 = var2.store_listing_benefits;
            var4 = null;
            if(!(var4 == var3)) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var3 = new Array(0);
case 35:
            var1['benefits'] = var3;
            var3 = var2.image_asset;
            var1['thumbnail'] = var3;
            var2 = var2.published;
            var1['published'] = var2;
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function dispatchCompat(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 2;
            var5 = var2[var6];
            var1 = undefined;
            var9 = var4.bind(var1)(var5);
            var8 = var9.dispatch;
            var5 = {};
            var10 = 'SKUS_FETCH_SUCCESS';
            var5['type'] = var10;
            var11 = var3.map;
            var10 = _closure1_slot8;
            var10 = var11.bind(var3)(var10);
            var5['skus'] = var10;
            var5 = var8.bind(var9)(var5);
            var2 = var2[var6];
            var5 = var4.bind(var1)(var2);
            var4 = var5.dispatch;
            var2 = {};
            var8 = 'STORE_LISTINGS_FETCH_SUCCESS';
            var2['type'] = var8;
            var9 = var3.map;
            var8 = _closure1_slot9;
            var8 = var9.bind(var3)(var8);
            var2['storeListings'] = var8;
            var2 = var4.bind(var5)(var2);
            var2 = _closure1_slot6;
            var5 = var2.bind(var1)(var3);
            var3 = var5.bind(var1)();
            var2 = var3.done;
            var4 = 'SUBSCRIPTION_PLANS_FETCH_SUCCESS';
            if(var2) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var10 = var3.value;
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var9 = var8.bind(var1)(var2);
            var8 = var9.dispatch;
            var2 = {};
            var2['type'] = var4;
            var11 = var10.id;
            var2['skuId'] = var11;
            var10 = var10.subscription_plans;
            var2['subscriptionPlans'] = var10;
            var2 = var8.bind(var9)(var2);
            var8 = var5.bind(var1)();
            var2 = var8.done;
            var3 = var8;
            if(!var2) { _fun0005_ip = 38; continue _fun0005 }
case 37:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _fetchAllSubscriptionListingsDataForApplication() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var13 = arg1;
                    var12 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                    var6 = var13;
                    var4 = var12;
                    var2 = undefined;
                    var10 = undefined;
                    var7 = undefined;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 2;
                    var8 = var8[var5];
                    var11 = var9.bind(var2)(var8);
                    var9 = var11.dispatch;
                    var8 = {};
                    var14 = 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS';
                    var8['type'] = var14;
                    var8['applicationId'] = var13;
                    var8['groupListingId'] = var12;
                    var8 = var9.bind(var11)(var8);
case 41: // try_start_0
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var8 = 3;
                    var8 = var11[var8];
                    var11 = var9.bind(var2)(var8);
                    var9 = var11.getApplicationSubscriptionGroupListingsForApplication;
                    var8 = var6;
                    var4 = var9.bind(var11)(var8, var4);
                    SaveGenerator(address=121);
case 42:
                    return var4;
case 43:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(var8) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                    var7 = var4;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var5];
                    var11 = var9.bind(var2)(var8);
                    var9 = var11.dispatch;
                    var8 = {};
                    var12 = 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS';
                    var8['type'] = var12;
                    var12 = var6;
                    var8['applicationId'] = var12;
                    var8['groupListing'] = var4;
                    var8 = var9.bind(var11)(var8);
                    var9 = _closure1_slot10;
                    var11 = var4.subscription_listings;
                    var10 = var11;
                    var8 = null;
                    if(!(var8 == var11)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var8 = new Array(0);
                    _fun0006_ip = 48; continue _fun0006;
case 46:
                    var8 = var10;
case 48:
                    var8 = var9.bind(var2)(var8);
case 49: // try_end0
                    return var7;
case 44:
                    return var4;
case 50: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE';
                    var3['type'] = var7;
                    var3['applicationId'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 39:
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
    var1 = function _fetchEntitlementsForGuild() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                    var6 = var9;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var5 = 2;
                    var4 = var2[var5];
                    var2 = undefined;
                    var8 = var7.bind(var2)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var10 = 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS';
                    var4['type'] = var10;
                    var4['guildId'] = var9;
                    var4 = var7.bind(var8)(var4);
case 30: // try_start_0
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 3;
                    var4 = var8[var4];
                    var8 = var7.bind(var2)(var4);
                    var7 = var8.getEntitlementsForGuild;
                    var4 = var6;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=105);
case 53:
                    return var4;
case 54:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var5];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var10 = 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS';
                    var7['type'] = var10;
                    var10 = var6;
                    var7['guildId'] = var10;
                    var7['entitlements'] = var4;
                    var7 = var8.bind(var9)(var7);
case 57: // try_end0
                    _fun0007_ip = 58; continue _fun0007;
case 55:
                    return var4;
case 59: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE';
                    var3['type'] = var7;
                    var3['guildId'] = var6;
                    var3 = var4.bind(var5)(var3);
case 58:
                    return var2;
case 51:
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
    var2 = function fetchSubscriptionListingForPlan() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var2;
    var1 = function _fetchSubscriptionListingForPlan() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                    var3 = var4;
                    var _closure4_slot0 = var4;
                    var4 = undefined;
                    if(!(var2 === var4)) { _fun0008_ip = 33; continue _fun0008 }
case 62:
                    var2 = 0;
case 33:
                    var7 = var2;
                    var11 = undefined;
                    var10 = undefined;
                    SaveGenerator(address=44);
case 63:
                    return var4;
case 64:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 65; continue _fun0008 }
case 66:
                    var12 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var14 = 2;
                    var8 = var8[var14];
                    var13 = var12.bind(var4)(var8);
                    var12 = var13.dispatch;
                    var8 = {};
                    var15 = 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN';
                    var8['type'] = var15;
                    var15 = var3;
                    var8['planId'] = var15;
                    var8 = var12.bind(var13)(var8);
case 67: // try_start_0
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var8 = 3;
                    var8 = var13[var8];
                    var13 = var12.bind(var4)(var8);
                    var12 = var13.getSubscriptionGroupForSubscriptionPlan;
                    var8 = var3;
                    var8 = var12.bind(var13)(var8);
                    SaveGenerator(address=144);
case 68:
                    return var8;
case 38:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=11);
                    if(var12) { _fun0008_ip = 69; continue _fun0008 }
case 70:
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var12 = var12[var14];
                    var14 = var13.bind(var4)(var12);
                    var13 = var14.dispatch;
                    var12 = {};
                    var15 = 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS';
                    var12['type'] = var15;
                    var12['groupListing'] = var8;
                    var12 = var13.bind(var14)(var12);
                    var13 = var8.subscription_listings;
                    var11 = var13;
                    var12 = null;
                    if(!(var12 == var13)) { _fun0008_ip = 37; continue _fun0008 }
case 71:
                    var14 = new Array(0);
                    _fun0008_ip = 72; continue _fun0008;
case 37:
                    var14 = var11;
case 72:
                    var10 = var14;
                    var11 = global;
                    var12 = var11.Promise;
                    var11 = var12.all;
                    var13 = var14.map;
                    var9 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var1 = arg1;
                            var3 = var1.subscription_plans;
                            var2 = 0;
                            var2 = var3[var2];
                            var3 = var2.id;
                            var2 = _closure4_slot0;
                            if(!(var3 !== var2)) { _fun0009_ip = 73; continue _fun0009 }
case 62:
                            var2 = undefined;
                            return var2;
case 73:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 4;
                            var2 = var4[var2];
                            var5 = undefined;
                            var4 = var3.bind(var5)(var2);
                            var3 = var4.fetchSubscriptionPlansForSKU;
                            var9 = var1.id;
                            var6 = true;
                            var10 = var4;
                            var8 = undefined;
                            var7 = undefined;
                            var1 = var10[var3](var9, var8, var7, var6, var5);
                            return var1;
                        }
                    };
                    var9 = var13.bind(var14)(var9);
                    var9 = var11.bind(var12)(var9);
                    SaveGenerator(address=264);
case 74:
                    return var9;
case 75:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=10);
                    if(var11) { _fun0008_ip = 76; continue _fun0008 }
case 12:
                    var11 = _closure1_slot10;
                    var10 = var11.bind(var4)(var10);
case 77: // try_end0
                    _fun0008_ip = 78; continue _fun0008;
case 76:
                    return var9;
case 69:
                    return var8;
case 79: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var6 = var9;
                    var8 = 'status';
                    var8 = var8 in var9;
                    if(!var8) { _fun0008_ip = 80; continue _fun0008 }
case 81:
                    var8 = var6;
                    var9 = var8.status;
                    var8 = 429;
                    if(!(var8 === var9)) { _fun0008_ip = 80; continue _fun0008 }
case 82:
                    var9 = var7;
                    var8 = 10;
                    if(!(!(var9 < var8))) { _fun0008_ip = 83; continue _fun0008 }
case 80:
                    throw var6;
case 83:
                    var6 = _closure1_slot13;
                    var5 = var3;
                    var3 = var7;
                    var3 = var3 + 1;
                    var7 = var3;
                    var3 = var6.bind(var4)(var5, var3);
                    SaveGenerator(address=359);
case 84:
                    return var3;
case 85:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 86; continue _fun0008 }
case 78:
                    return var4;
case 86:
                    return var3;
case 65:
                    return var2;
case 60:
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
    var5 = var6.bind(var1)(var5);
    var8 = var5.SKUProductLines;
    var _closure1_slot4 = var8;
    var5 = var5.SKUTypes;
    var _closure1_slot5 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium_apps/ApplicationSubscriptionsActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function fetchAllSubscriptionListingsDataForApplication() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchAllSubscriptionListingsDataForApplication'] = var5;
    var5 = function fetchEntitlementsForGuild() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchEntitlementsForGuild'] = var5;
    var4 = function dismissApplicationSubscriptionExpirationNotice(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['dismissApplicationSubscriptionExpirationNotice'] = var4;
    var3['fetchSubscriptionListingForPlan'] = var2;
    return var1;
})();