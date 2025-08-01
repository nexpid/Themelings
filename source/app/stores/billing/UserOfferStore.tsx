// app/stores/billing/UserOfferStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot18;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot18;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
 70: // try_end0
            _fun0004_ip = 74; continue _fun0004;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var4 = function handleReset() {
        var3 = _closure1_slot15;
        var1 = {};
        var3['userTrialOffers'] = var1;
        var3 = _closure1_slot15;
        var1 = {};
        var3['userDiscountOffers'] = var1;
        var3 = _closure1_slot15;
        var1 = undefined;
        var3['userOffersLastFetchedAtDate'] = var1;
        var3 = _closure1_slot15;
        var2 = false;
        var3['isFetching'] = var2;
        return var1;
    };
    var _closure1_slot20 = var4;
    var1 = function handleSubscriptionStoreUpdate() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = _closure1_slot10;
            var1 = var3.getPremiumTypeSubscription;
            var3 = var1.bind(var3)();
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0005_ip = 52; continue _fun0005 }
 26:
            var4 = _closure1_slot15;
            var3 = {};
            var4['userDiscountOffers'] = var3;
            var3 = _closure1_slot15;
            var2 = {};
            var3['userTrialOffers'] = var2;
            var1 = true;
 52:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var9 = function handlePaymentSourceChange() {
        var2 = _closure1_slot8;
        var1 = var2.getCurrentUser;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var1 = function handleReferralTrialStoreUpdate() {
        var1 = false;
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.ANNUAL_DISCOUNT_IDS;
    var _closure1_slot11 = var8;
    var8 = var2.SubscriptionPlanInfo;
    var _closure1_slot12 = var8;
    var2 = var2.SubscriptionTrials;
    var _closure1_slot13 = var2;
    var2 = {};
    var2['userOffersLastFetchedAtDate'] = var1;
    var8 = {};
    var2['userTrialOffers'] = var8;
    var8 = {};
    var2['userDiscountOffers'] = var8;
    var2['userDiscounts'] = var1;
    var8 = false;
    var2['isFetching'] = var8;
    var2['lastFetchSuccessful'] = var8;
    var _closure1_slot14 = var2;
    var _closure1_slot15 = var2;
    var2 = function emitChanges() {
        var1 = true;
        return var1;
    };
    var _closure1_slot16 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function UserOfferStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot19;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 69; continue _fun0006 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 105; continue _fun0006;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = arg1;
                var4 = this;
                var1 = null;
                if(!(var1 == var2)) { _fun0007_ip = 19; continue _fun0007 }
 12:
                var2 = _closure1_slot14;
 19:
                _closure1_slot15 = var2;
                var3 = var4.waitFor;
                var2 = _closure1_slot8;
                var2 = var3.bind(var4)(var2);
                var5 = var4.syncWith;
                var2 = _closure1_slot8;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = _closure1_slot16;
                var2 = var5.bind(var4)(var3, var2);
                var5 = var4.syncWith;
                var2 = _closure1_slot10;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = _closure1_slot21;
                var2 = var5.bind(var4)(var3, var2);
                var3 = var4.syncWith;
                var5 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = _closure1_slot22;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(19);
        var1[0] = var5;
        var5 = {};
        var7 = 'getUserTrialOffer';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 === var2)) { _fun0008_ip = 13; continue _fun0008 }
 9:
                var1 = undefined;
                return var1;
 13:
                var1 = _closure1_slot15;
                var1 = var1.userTrialOffers;
                var1 = var1[var2];
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getUserDiscountOffer';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 === var2)) { _fun0009_ip = 13; continue _fun0009 }
 9:
                var1 = undefined;
                return var1;
 13:
                var1 = _closure1_slot15;
                var1 = var1.userDiscountOffers;
                var1 = var1[var2];
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getAnyOfUserTrialOfferId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = _closure1_slot17;
                var6 = undefined;
                var1 = arg1;
                var5 = var2.bind(var6)(var1);
                var3 = var5.bind(var6)();
                var2 = var3.done;
                var1 = null;
                var4 = var3;
                if(var2) { _fun0010_ip = 76; continue _fun0010 }
 34:
                var2 = var4.value;
                var3 = _closure1_slot15;
                var3 = var3.userTrialOffers;
                var3 = var3[var2];
                if(!(var1 == var3)) { _fun0010_ip = 74; continue _fun0010 }
 57:
                var8 = var5.bind(var6)();
                var3 = var8.done;
                var4 = var8;
                if(var3) { _fun0010_ip = 76; continue _fun0010 }
 72:
                _fun0010_ip = 34; continue _fun0010;
 74:
                return var2;
 76:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isFetchingOffer';
        var5['key'] = var7;
        var7 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var1 = _closure1_slot15;
                var2 = var1.isFetching;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0011_ip = 25; continue _fun0011 }
 22:
                var1 = var2;
 25:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'hasFetchedOffer';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot15;
            var2 = var1.userOffersLastFetchedAtDate;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'shouldFetchReferralOffer';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var6 = arg1;
                var2 = _closure1_slot15;
                var5 = var2.userOffersLastFetchedAtDate;
                var1 = _closure1_slot15;
                var2 = var1.isFetching;
                var4 = null;
                var1 = var4 != var2;
                if(!var1) { _fun0012_ip = 38; continue _fun0012 }
 35:
                var1 = var2;
 38:
                if(!(var4 != var5)) { _fun0012_ip = 103; continue _fun0012 }
 42:
                var2 = global;
                var3 = var2.Date;
                var2 = var3.now;
                var3 = var2.bind(var3)();
                var2 = 600000;
                var2 = var3 - var2;
                var3 = var2 > var5;
                var2 = !var1;
                if(!var2) { _fun0012_ip = 101; continue _fun0012 }
 79:
                if(var3) { _fun0012_ip = 98; continue _fun0012 }
 82:
                var7 = var4 != var6;
                var4 = 0;
                if(!var7) { _fun0012_ip = 94; continue _fun0012 }
 91:
                var4 = var6;
 94:
                var3 = var4 > var5;
 98:
                var2 = var3;
 101:
                return var2;
 103:
                var1 = !var1;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getAlmostExpiringTrialOffers';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var5 = this;
                var1 = arg1;
                var _closure3_slot0 = var1;
                var4 = global;
                var7 = var4.Object;
                var6 = var7.values;
                var1 = _closure1_slot13;
                var7 = var6.bind(var7)(var1);
                var6 = var7.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var1 = var6.bind(var7)(var1);
                var _closure3_slot1 = var1;
                var6 = _closure1_slot8;
                var1 = var6.getCurrentUser;
                var7 = var1.bind(var6)();
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 10;
                var6 = var6[var1];
                var1 = undefined;
                var6 = var8.bind(var1)(var6);
                var1 = var6.isPremium;
                var1 = var1.bind(var6)(var7);
                if(!var1) { _fun0013_ip = 124; continue _fun0013 }
 105:
                var1 = var5.canFractionalPremiumUserUseOffer;
                var1 = var1.bind(var5)();
                if(var1) { _fun0013_ip = 124; continue _fun0013 }
 118:
                var1 = new Array(0);
                _fun0013_ip = 165; continue _fun0013;
 124:
                var5 = var4.Object;
                var4 = var5.values;
                var3 = _closure1_slot15;
                var3 = var3.userTrialOffers;
                var4 = var4.bind(var5)(var3);
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                        var6 = arg1;
                        var4 = _closure3_slot1;
                        var3 = var4.includes;
                        var1 = var6.trial_id;
                        var1 = var3.bind(var4)(var1);
                        if(!var1) { _fun0014_ip = 41; continue _fun0014 }
 29:
                        var4 = var6.expires_at;
                        var3 = null;
                        var1 = var3 != var4;
 41:
                        if(!var1) { _fun0014_ip = 56; continue _fun0014 }
 44:
                        var4 = var6.subscription_trial;
                        var3 = null;
                        var1 = var3 != var4;
 56:
                        if(!var1) { _fun0014_ip = 85; continue _fun0014 }
 59:
                        var4 = _closure3_slot0;
                        var3 = var4.includes;
                        var2 = var6.subscription_trial;
                        var2 = var2.sku_id;
                        var1 = var3.bind(var4)(var2);
 85:
                        if(!var1) { _fun0014_ip = 172; continue _fun0014 }
 88:
                        var2 = global;
                        var5 = var2.Date;
                        var4 = var5.parse;
                        var3 = var6.expires_at;
                        var3 = var4.bind(var5)(var3);
                        var4 = var2.Date;
                        var2 = var4.now;
                        var4 = var2.bind(var4)();
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var2 = 10;
                        var5 = var5[var2];
                        var2 = undefined;
                        var5 = var7.bind(var2)(var5);
                        var2 = var5.getOfferNoticeThreshold;
                        var2 = var2.bind(var5)(var6);
                        var2 = var4 + var2;
                        var1 = var3 < var2;
 172:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
 165:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getAlmostExpiringDiscountOffers';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var4 = this;
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure1_slot8;
                var1 = var5.getCurrentUser;
                var6 = var1.bind(var5)();
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 10;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var7.bind(var1)(var5);
                var1 = var5.isPremium;
                var1 = var1.bind(var5)(var6);
                if(!var1) { _fun0015_ip = 83; continue _fun0015 }
 64:
                var1 = var4.canFractionalPremiumUserUseOffer;
                var1 = var1.bind(var4)();
                if(var1) { _fun0015_ip = 83; continue _fun0015 }
 77:
                var1 = new Array(0);
                _fun0015_ip = 126; continue _fun0015;
 83:
                var4 = global;
                var5 = var4.Object;
                var4 = var5.values;
                var3 = _closure1_slot15;
                var3 = var3.userDiscountOffers;
                var4 = var4.bind(var5)(var3);
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                        var6 = arg1;
                        var1 = var6.expires_at;
                        var3 = null;
                        var1 = var3 != var1;
                        if(!var1) { _fun0016_ip = 28; continue _fun0016 }
 18:
                        var2 = var6.discount;
                        var1 = var3 != var2;
 28:
                        if(!var1) { _fun0016_ip = 61; continue _fun0016 }
 31:
                        var2 = var6.discount;
                        var4 = var2.plan_ids;
                        var3 = var4.some;
                        var2 = function(arg1) {
                            var3 = _closure3_slot0;
                            var2 = var3.includes;
                            var4 = _closure1_slot12;
                            var1 = arg1;
                            var1 = var4[var1];
                            var1 = var1.skuId;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var3.bind(var4)(var2);
 61:
                        if(!var1) { _fun0016_ip = 148; continue _fun0016 }
 64:
                        var2 = global;
                        var5 = var2.Date;
                        var4 = var5.parse;
                        var3 = var6.expires_at;
                        var3 = var4.bind(var5)(var3);
                        var4 = var2.Date;
                        var2 = var4.now;
                        var4 = var2.bind(var4)();
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var2 = 10;
                        var5 = var5[var2];
                        var2 = undefined;
                        var5 = var7.bind(var2)(var5);
                        var2 = var5.getOfferNoticeThreshold;
                        var2 = var2.bind(var5)(var6);
                        var2 = var4 + var2;
                        var1 = var3 < var2;
 148:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
 126:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getAcknowledgedOffers';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var4 = this;
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure1_slot8;
                var1 = var5.getCurrentUser;
                var6 = var1.bind(var5)();
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 10;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var7.bind(var1)(var5);
                var1 = var5.isPremium;
                var1 = var1.bind(var5)(var6);
                if(!var1) { _fun0017_ip = 83; continue _fun0017 }
 64:
                var1 = var4.canFractionalPremiumUserUseOffer;
                var1 = var1.bind(var4)();
                if(var1) { _fun0017_ip = 83; continue _fun0017 }
 77:
                var1 = new Array(0);
                _fun0017_ip = 126; continue _fun0017;
 83:
                var4 = global;
                var5 = var4.Object;
                var4 = var5.values;
                var3 = _closure1_slot15;
                var3 = var3.userTrialOffers;
                var4 = var4.bind(var5)(var3);
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        var2 = arg1;
                        var4 = _closure3_slot0;
                        var3 = var4.includes;
                        var1 = var2.trial_id;
                        var1 = var3.bind(var4)(var1);
                        if(!var1) { _fun0018_ip = 41; continue _fun0018 }
 29:
                        var3 = var2.expires_at;
                        var2 = null;
                        var1 = var2 != var3;
 41:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
 126:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getUnacknowledgedDiscountOffers';
        var5['key'] = var7;
        var7 = function value() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var3 = this;
                var4 = _closure1_slot8;
                var1 = var4.getCurrentUser;
                var5 = var1.bind(var4)();
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 10;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var4);
                var1 = var4.isPremium;
                var1 = var1.bind(var4)(var5);
                if(!var1) { _fun0019_ip = 74; continue _fun0019 }
 55:
                var1 = var3.canFractionalPremiumUserUseOffer;
                var1 = var1.bind(var3)();
                if(var1) { _fun0019_ip = 74; continue _fun0019 }
 68:
                var1 = new Array(0);
                _fun0019_ip = 127; continue _fun0019;
 74:
                var3 = global;
                var4 = var3.Object;
                var3 = var4.values;
                var2 = _closure1_slot15;
                var2 = var2.userDiscountOffers;
                var5 = null;
                if(!(var5 == var2)) { _fun0019_ip = 105; continue _fun0019 }
 103:
                var2 = {};
 105:
                var4 = var3.bind(var4)(var2);
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                        var2 = arg1;
                        var3 = var2.expires_at;
                        var1 = null;
                        var1 = var1 == var3;
                        if(!var1) { _fun0020_ip = 44; continue _fun0020 }
 18:
                        var4 = _closure1_slot11;
                        var3 = var4.includes;
                        var2 = var2.discount_id;
                        var2 = var3.bind(var4)(var2);
                        var1 = !var2;
 44:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
 127:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getUnacknowledgedOffers';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var4 = this;
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure1_slot8;
                var1 = var5.getCurrentUser;
                var6 = var1.bind(var5)();
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 10;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var7.bind(var1)(var5);
                var1 = var5.isPremium;
                var1 = var1.bind(var5)(var6);
                if(!var1) { _fun0021_ip = 83; continue _fun0021 }
 64:
                var1 = var4.canFractionalPremiumUserUseOffer;
                var1 = var1.bind(var4)();
                if(var1) { _fun0021_ip = 83; continue _fun0021 }
 77:
                var1 = new Array(0);
                _fun0021_ip = 126; continue _fun0021;
 83:
                var4 = global;
                var5 = var4.Object;
                var4 = var5.values;
                var3 = _closure1_slot15;
                var3 = var3.userTrialOffers;
                var4 = var4.bind(var5)(var3);
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                        var2 = arg1;
                        var4 = _closure3_slot0;
                        var3 = var4.includes;
                        var1 = var2.trial_id;
                        var1 = var3.bind(var4)(var1);
                        if(!var1) { _fun0022_ip = 41; continue _fun0022 }
 29:
                        var3 = var2.expires_at;
                        var2 = null;
                        var1 = var2 == var3;
 41:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
 126:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'hasAnyUnexpiredOffer';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var1 = _closure1_slot15;
            var1 = var1.userTrialOffers;
            var3 = var2.bind(var3)(var1);
            var2 = var3.some;
            var1 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var3 = arg1;
                    var2 = var3.expires_at;
                    var1 = null;
                    var1 = var1 == var2;
                    if(var1) { _fun0023_ip = 62; continue _fun0023 }
 18:
                    var2 = global;
                    var5 = var2.Date;
                    var4 = var5.parse;
                    var3 = var3.expires_at;
                    var3 = var4.bind(var5)(var3);
                    var4 = var2.Date;
                    var2 = var4.now;
                    var2 = var2.bind(var4)();
                    var1 = var3 > var2;
 62:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'hasAnyUnexpiredDiscountOffer';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var1 = _closure1_slot15;
            var1 = var1.userDiscountOffers;
            var3 = var2.bind(var3)(var1);
            var2 = var3.some;
            var1 = function(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                    var3 = arg1;
                    var2 = var3.expires_at;
                    var1 = null;
                    var1 = var1 == var2;
                    if(var1) { _fun0024_ip = 62; continue _fun0024 }
 18:
                    var2 = global;
                    var5 = var2.Date;
                    var4 = var5.parse;
                    var3 = var3.expires_at;
                    var3 = var4.bind(var5)(var3);
                    var4 = var2.Date;
                    var2 = var4.now;
                    var2 = var2.bind(var4)();
                    var1 = var3 > var2;
 62:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'canFractionalPremiumUserUseOffer';
        var5['key'] = var7;
        var7 = function value() {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                var3 = _closure1_slot8;
                var1 = var3.getCurrentUser;
                var5 = var1.bind(var3)();
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 11;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isSubscriptionPurchaseDuringFractionalPremiumEnabled;
                var1 = 'user-offer-store';
                var1 = var3.bind(var4)(var1, var5);
                if(!var1) { _fun0025_ip = 83; continue _fun0025 }
 59:
                var5 = _closure1_slot9;
                var4 = var5.isFractionalPremiumActive;
                var3 = {};
                var6 = true;
                var3['excludeReverseTrial'] = var6;
                var1 = var4.bind(var5)(var3);
 83:
                if(!var1) { _fun0025_ip = 106; continue _fun0025 }
 86:
                var3 = _closure1_slot10;
                var2 = var3.getPremiumTypeSubscription;
                var3 = var2.bind(var3)();
                var2 = null;
                var1 = var2 == var3;
 106:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getReferrer';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                var4 = arg1;
                var2 = null;
                var3 = var2 == var4;
                var1 = null;
                if(var3) { _fun0026_ip = 49; continue _fun0026 }
 14:
                var3 = _closure1_slot15;
                var3 = var3.userTrialOffers;
                var3 = var3[var4];
                var4 = var2 == var3;
                var2 = undefined;
                if(var4) { _fun0026_ip = 46; continue _fun0026 }
 40:
                var2 = var3.referrer;
 46:
                var1 = var2;
 49:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'forceReset';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot20;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'lastFetchSuccessful';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot15;
            var1 = var1.lastFetchSuccessful;
            return var1;
        };
        var5['value'] = var6;
        var1[18] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'UserOfferStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = new Array(3);
    var11 = function(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
            var2 = arg1;
            var4 = null;
            var5 = var4 == var2;
            var1 = undefined;
            var3 = undefined;
            if(var5) { _fun0027_ip = 22; continue _fun0027 }
 16:
            var3 = var2.userDiscounts;
 22:
            if(!(var4 == var3)) { _fun0027_ip = 28; continue _fun0027 }
 26:
            return var1;
 28:
            var1 = {};
            var7 = var1;
            var6 = var2;
            var2 = copyDataProperties(var7, var6);
            var2 = 'userDiscountOffers';
            var1[var2] = var3;
            return var1;
        }
    };
    var2[0] = var11;
    var11 = function(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 == var1)) { _fun0028_ip = 13; continue _fun0028 }
 9:
            var2 = undefined;
            return var2;
 13:
            var2 = global;
            var4 = var2.Object;
            var3 = var4.hasOwn;
            var2 = 'userAnnualOfferLastFetchedAtDate';
            var2 = var3.bind(var4)(var1, var2);
            if(!var2) { _fun0028_ip = 49; continue _fun0028 }
 42:
            var2 = delete var1.userAnnualOfferLastFetchedAtDate;
 49:
            return var1;
        }
    };
    var2[1] = var11;
    var11 = function(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
            var3 = arg1;
            var4 = null;
            if(!(var4 == var3)) { _fun0029_ip = 13; continue _fun0029 }
 9:
            var1 = undefined;
            return var1;
 13:
            var1 = var4 == var3;
            var2 = undefined;
            if(var1) { _fun0029_ip = 28; continue _fun0029 }
 22:
            var2 = var3.isFetching;
 28:
            var1 = var3;
            if(!(var4 == var2)) { _fun0029_ip = 61; continue _fun0029 }
 35:
            var2 = {};
            var6 = var2;
            var5 = var3;
            var3 = copyDataProperties(var6, var5);
            var4 = false;
            var3 = 'isFetching';
            var2[var3] = var4;
            var1 = var2;
 61:
            return var1;
        }
    };
    var2[2] = var11;
    var8['migrations'] = var2;
    var2 = 13;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var11 = function handleUserOfferFetchStart() {
        var2 = _closure1_slot15;
        var1 = true;
        var2['isFetching'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['BILLING_USER_OFFER_FETCH_START'] = var11;
    var11 = function handleUserTrialOfferFetchSuccess(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
            var1 = arg1;
            var3 = var1.userTrialOffer;
            var1 = null;
            if(!(var1 == var3)) { _fun0030_ip = 30; continue _fun0030 }
 15:
            var2 = _closure1_slot20;
            var1 = undefined;
            var1 = var2.bind(var1)();
            _fun0030_ip = 53; continue _fun0030;
 30:
            var1 = _closure1_slot15;
            var2 = var1.userTrialOffers;
            var1 = var3.trial_id;
            var2[var1] = var3;
 53:
            var3 = _closure1_slot15;
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var3['userOffersLastFetchedAtDate'] = var2;
            var2 = _closure1_slot15;
            var1 = false;
            var2['isFetching'] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS'] = var11;
    var11 = function handleUserTrialOfferAcknowledgedSuccess(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
            var1 = arg1;
            var3 = var1.userTrialOffer;
            var1 = null;
            if(!(var1 == var3)) { _fun0031_ip = 32; continue _fun0031 }
 15:
            var2 = _closure1_slot15;
            var1 = {};
            var2['userTrialOffers'] = var1;
            _fun0031_ip = 55; continue _fun0031;
 32:
            var1 = _closure1_slot15;
            var2 = var1.userTrialOffers;
            var1 = var3.trial_id;
            var2[var1] = var3;
 55:
            var2 = _closure1_slot15;
            var1 = global;
            var3 = var1.Date;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            var2['userOffersLastFetchedAtDate'] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS'] = var11;
    var11 = function handleUserOfferFetchSuccess(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
            var1 = arg1;
            var4 = var1.userTrialOffer;
            var5 = var1.userDiscount;
            var6 = var1.userDiscountOffer;
            var1 = null;
            var2 = var1 == var4;
            if(!var2) { _fun0032_ip = 34; continue _fun0032 }
 30:
            var2 = var1 == var5;
 34:
            if(!var2) { _fun0032_ip = 41; continue _fun0032 }
 37:
            var2 = var1 == var6;
 41:
            if(!var2) { _fun0032_ip = 57; continue _fun0032 }
 44:
            var3 = _closure1_slot20;
            var2 = undefined;
            var2 = var3.bind(var2)();
 57:
            if(!(var1 == var4)) { _fun0032_ip = 143; continue _fun0032 }
 61:
            if(!(var1 == var5)) { _fun0032_ip = 106; continue _fun0032 }
 65:
            if(!(var1 != var6)) { _fun0032_ip = 178; continue _fun0032 }
 69:
            var2 = _closure1_slot15;
            var3 = var2.userDiscountOffers;
            var2 = var6.discount_id;
            var3[var2] = var6;
            var2 = _closure1_slot15;
            var1 = {};
            var2['userTrialOffers'] = var1;
            _fun0032_ip = 178; continue _fun0032;
 106:
            var2 = _closure1_slot15;
            var3 = var2.userDiscountOffers;
            var2 = var5.discount_id;
            var3[var2] = var5;
            var2 = _closure1_slot15;
            var1 = {};
            var2['userTrialOffers'] = var1;
            _fun0032_ip = 178; continue _fun0032;
 143:
            var2 = _closure1_slot15;
            var3 = var2.userTrialOffers;
            var2 = var4.trial_id;
            var3[var2] = var4;
            var2 = _closure1_slot15;
            var1 = {};
            var2['userDiscountOffers'] = var1;
 178:
            var3 = _closure1_slot15;
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var3['userOffersLastFetchedAtDate'] = var2;
            var3 = _closure1_slot15;
            var2 = false;
            var3['isFetching'] = var2;
            var2 = _closure1_slot15;
            var1 = true;
            var2['lastFetchSuccessful'] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['BILLING_USER_OFFER_FETCH_SUCCESS'] = var11;
    var11 = function handleUserOfferAcknowledgedSuccess(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
            var1 = arg1;
            var6 = var1.userTrialOffer;
            var3 = var1.userDiscount;
            var4 = var1.userDiscountOffer;
            var1 = null;
            if(!(var1 == var6)) { _fun0033_ip = 44; continue _fun0033 }
 27:
            var5 = _closure1_slot15;
            var2 = {};
            var5['userTrialOffers'] = var2;
            _fun0033_ip = 67; continue _fun0033;
 44:
            var2 = _closure1_slot15;
            var5 = var2.userTrialOffers;
            var2 = var6.trial_id;
            var5[var2] = var6;
 67:
            if(!(var1 == var3)) { _fun0033_ip = 117; continue _fun0033 }
 71:
            if(!(var1 == var4)) { _fun0033_ip = 92; continue _fun0033 }
 75:
            var2 = _closure1_slot15;
            var1 = {};
            var2['userDiscountOffers'] = var1;
            _fun0033_ip = 140; continue _fun0033;
 92:
            var1 = _closure1_slot15;
            var2 = var1.userDiscountOffers;
            var1 = var4.discount_id;
            var2[var1] = var4;
            _fun0033_ip = 140; continue _fun0033;
 117:
            var1 = _closure1_slot15;
            var2 = var1.userDiscountOffers;
            var1 = var3.discount_id;
            var2[var1] = var3;
 140:
            var2 = _closure1_slot15;
            var1 = global;
            var3 = var1.Date;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            var2['userOffersLastFetchedAtDate'] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS'] = var11;
    var10 = function handleUserOfferFetchFail() {
        var3 = _closure1_slot20;
        var1 = undefined;
        var3 = var3.bind(var1)();
        var4 = _closure1_slot15;
        var3 = global;
        var5 = var3.Date;
        var3 = var5.now;
        var3 = var3.bind(var5)();
        var4['userOffersLastFetchedAtDate'] = var3;
        var4 = _closure1_slot15;
        var3 = false;
        var4['isFetching'] = var3;
        var2 = _closure1_slot15;
        var2['lastFetchSuccessful'] = var3;
        return var1;
    };
    var2['BILLING_USER_OFFER_FETCH_FAIL'] = var10;
    var2['BILLING_PAYMENT_SOURCE_CREATE_SUCCESS'] = var9;
    var2['BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS'] = var9;
    var2['BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS'] = var9;
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/billing/UserOfferStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();