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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot23;
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
            var7 = _closure1_slot23;
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
    var _closure1_slot22 = var1;
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
    var _closure1_slot23 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
case 36: // try_start_0
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
case 35: // try_end0
            _fun0004_ip = 37; continue _fun0004;
case 38: // catch_target0
            CatchBlockStart(arg_register=1);
case 37:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot24 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var4 = function handleReset() {
        var3 = _closure1_slot20;
        var1 = {};
        var3['userTrialOffers'] = var1;
        var3 = _closure1_slot20;
        var1 = {};
        var3['userDiscountOffers'] = var1;
        var3 = _closure1_slot20;
        var1 = undefined;
        var3['userOffersLastFetchedAtDate'] = var1;
        var3 = _closure1_slot20;
        var2 = false;
        var3['isFetching'] = var2;
        return var1;
    };
    var _closure1_slot25 = var4;
    var1 = function rehydrateDiscountOffer(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var1 = _closure1_slot8;
            var2 = var5 instanceof var1;
            var1 = var5;
            if(var2) { _fun0005_ip = 39; continue _fun0005 }
case 31:
            var2 = 'discount_id';
            var2 = var2 in var5;
            var4 = _closure1_slot8;
            if(var2) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var2 = {};
            var11 = var2;
            var10 = var5;
            var3 = copyDataProperties(var11, var10);
            var3 = var5.appliedAt;
            var6 = null;
            var3 = var6 != var3;
            var7 = null;
            if(!var3) { _fun0005_ip = 42; continue _fun0005 }
case 35:
            var3 = global;
            var9 = var3.Date;
            var11 = var5.appliedAt;
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var12 = var8;
            var3 = new var12[var9](var11, var10);
            var7 = var3 instanceof Object ? var3 : var8;
case 42:
            var3 = 'appliedAt';
            var2[2] = var7;
            var3 = var5.deletedAt;
            var3 = var6 != var3;
            var7 = null;
            if(!var3) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var3 = global;
            var9 = var3.Date;
            var11 = var5.deletedAt;
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var12 = var8;
            var3 = new var12[var9](var11, var10);
            var7 = var3 instanceof Object ? var3 : var8;
case 43:
            var3 = 'deletedAt';
            var2[2] = var7;
            var3 = var5.expiresAt;
            var3 = var6 != var3;
            var6 = null;
            if(!var3) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var3 = global;
            var8 = var3.Date;
            var11 = var5.expiresAt;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var12 = var7;
            var3 = new var12[var8](var11, var10);
            var6 = var3 instanceof Object ? var3 : var7;
case 45:
            var3 = 'expiresAt';
            var2[2] = var6;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var12 = var3;
            var11 = var2;
            var2 = new var12[var4](var11, var10);
            var2 = var2 instanceof Object ? var2 : var3;
            _fun0005_ip = 24; continue _fun0005;
case 40:
            var3 = var4.createFromServer;
            var2 = var3.bind(var4)(var5);
case 24:
            var1 = var2;
case 39:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function handleSubscriptionStoreUpdate() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = _closure1_slot11;
            var1 = var3.getPremiumTypeSubscription;
            var1 = var1.bind(var3)();
            var4 = null;
            var1 = var4 != var1;
            if(!var1) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var3 = _closure1_slot20;
            var5 = var3.userDiscountOffers;
            var3 = _closure1_slot14;
            var3 = var5[var3];
            if(!(var4 == var3)) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var3 = _closure1_slot20;
            var5 = var3.userDiscountOffers;
            var3 = _closure1_slot15;
            var3 = var5[var3];
            if(!(var4 == var3)) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var4 = _closure1_slot20;
            var3 = {};
            var4['userDiscountOffers'] = var3;
            _fun0006_ip = 53; continue _fun0006;
case 51:
            var4 = _closure1_slot20;
            var3 = {};
            var6 = _closure1_slot15;
            var7 = var4.userDiscountOffers;
            var5 = _closure1_slot15;
            var5 = var7[var5];
            var3[5] = var5;
            var4['userDiscountOffers'] = var3;
            _fun0006_ip = 53; continue _fun0006;
case 49:
            var4 = _closure1_slot20;
            var3 = {};
            var6 = _closure1_slot14;
            var7 = var4.userDiscountOffers;
            var5 = _closure1_slot14;
            var5 = var7[var5];
            var3[5] = var5;
            var4['userDiscountOffers'] = var3;
case 53:
            var3 = _closure1_slot20;
            var2 = {};
            var3['userTrialOffers'] = var2;
            var1 = true;
case 47:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var9 = function handlePaymentSourceChange() {
        var2 = _closure1_slot9;
        var1 = var2.getCurrentUser;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var1 = function handleReferralTrialStoreUpdate() {
        var1 = false;
        return var1;
    };
    var _closure1_slot28 = var1;
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
    var2 = var7.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.ANNUAL_DISCOUNT_IDS;
    var _closure1_slot12 = var8;
    var8 = var2.DISCOUNT_OFFERS_REQUIRES_REMINDER_ROLLOUT;
    var _closure1_slot13 = var8;
    var8 = var2.PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID;
    var _closure1_slot14 = var8;
    var8 = var2.PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID;
    var _closure1_slot15 = var8;
    var8 = var2.SubscriptionPlanInfo;
    var _closure1_slot16 = var8;
    var8 = var2.SubscriptionTrials;
    var _closure1_slot17 = var8;
    var2 = var2.TRIAL_OFFERS_REQUIRES_REMINDER_ROLLOUT;
    var _closure1_slot18 = var2;
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
    var _closure1_slot19 = var2;
    var _closure1_slot20 = var2;
    var2 = function emitChanges() {
        var1 = true;
        return var1;
    };
    var _closure1_slot21 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function UserOfferStore() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot24;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 54; continue _fun0007 }
case 50:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 55; continue _fun0007;
case 54:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 55:
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
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var4 = this;
                var8 = null;
                if(!(var8 == var1)) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                var2 = _closure1_slot19;
                _closure1_slot20 = var2;
                _fun0008_ip = 58; continue _fun0008;
case 56:
                var2 = {};
                var12 = var2;
                var11 = var1;
                var3 = copyDataProperties(var12, var11);
                var6 = global;
                var5 = var6.Object;
                var3 = var5.fromEntries;
                var7 = var6.Object;
                var6 = var7.entries;
                var1 = var1.userDiscountOffers;
                if(!(var8 == var1)) { _fun0008_ip = 59; continue _fun0008 }
case 52:
                var1 = {};
case 59:
                var7 = var6.bind(var7)(var1);
                var6 = var7.map;
                var1 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var6 = arg1;
                        var1 = var6[Symbol.iterator];
                        var6 = var1().next;
                        var3 = var6().value;
                        var2 = var1;
                        var4 = undefined;
                        var5 = var2 === var4;
                        var2 = undefined;
                        if(var5) { _fun0009_ip = 60; continue _fun0009 }
case 61:
                        var2 = var3;
case 60:
                        var3 = undefined;
                        if(var5) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                        var7 = var6().value;
                        var6 = var1;
                        var6 = var6 === var4;
                        var3 = undefined;
                        var5 = var6;
                        if(var6) { _fun0009_ip = 62; continue _fun0009 }
case 50:
                        var3 = var7;
                        var5 = var6;
case 62:
                        if(var5) { _fun0009_ip = 64; continue _fun0009 }
case 65:
                        var1.return();
case 64:
                        var1 = new Array(2);
                        var1[0] = var2;
                        var2 = _closure1_slot26;
                        var2 = var2.bind(var4)(var3);
                        var1[1] = var2;
                        return var1;
                    }
                };
                var1 = var6.bind(var7)(var1);
                var3 = var3.bind(var5)(var1);
                var1 = 'userDiscountOffers';
                var2[0] = var3;
                _closure1_slot20 = var2;
case 58:
                var7 = var4.waitFor;
                var12 = _closure1_slot10;
                var5 = _closure1_slot7;
                var10 = _closure1_slot11;
                var9 = _closure1_slot9;
                var13 = var4;
                var11 = var5;
                var2 = var13[var7](var12, var11, var10, var9, var8);
                var6 = var4.syncWith;
                var2 = _closure1_slot9;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = _closure1_slot21;
                var2 = var6.bind(var4)(var3, var2);
                var6 = var4.syncWith;
                var2 = _closure1_slot11;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = _closure1_slot27;
                var2 = var6.bind(var4)(var3, var2);
                var3 = var4.syncWith;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = _closure1_slot28;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(21);
        var1[0] = var5;
        var5 = {};
        var7 = 'getUserTrialOffer';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 === var2)) { _fun0010_ip = 66; continue _fun0010 }
case 67:
                var1 = undefined;
                return var1;
case 66:
                var1 = _closure1_slot20;
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
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 === var2)) { _fun0011_ip = 66; continue _fun0011 }
case 67:
                var1 = undefined;
                return var1;
case 66:
                var1 = _closure1_slot20;
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
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = _closure1_slot22;
                var6 = undefined;
                var1 = arg1;
                var5 = var2.bind(var6)(var1);
                var3 = var5.bind(var6)();
                var2 = var3.done;
                var1 = null;
                var4 = var3;
                if(var2) { _fun0012_ip = 68; continue _fun0012 }
case 69:
                var2 = var4.value;
                var3 = _closure1_slot20;
                var3 = var3.userTrialOffers;
                var3 = var3[var2];
                if(!(var1 == var3)) { _fun0012_ip = 37; continue _fun0012 }
case 62:
                var8 = var5.bind(var6)();
                var3 = var8.done;
                var4 = var8;
                if(var3) { _fun0012_ip = 68; continue _fun0012 }
case 38:
                _fun0012_ip = 69; continue _fun0012;
case 37:
                return var2;
case 68:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isFetchingOffer';
        var5['key'] = var7;
        var7 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = _closure1_slot20;
                var2 = var1.isFetching;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0013_ip = 56; continue _fun0013 }
case 70:
                var1 = var2;
case 56:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'hasFetchedOffer';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot20;
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
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var6 = arg1;
                var2 = _closure1_slot20;
                var5 = var2.userOffersLastFetchedAtDate;
                var1 = _closure1_slot20;
                var2 = var1.isFetching;
                var4 = null;
                var1 = var4 != var2;
                if(!var1) { _fun0014_ip = 71; continue _fun0014 }
case 72:
                var1 = var2;
case 71:
                if(!(var4 != var5)) { _fun0014_ip = 73; continue _fun0014 }
case 74:
                var2 = global;
                var3 = var2.Date;
                var2 = var3.now;
                var3 = var2.bind(var3)();
                var2 = 600000;
                var2 = var3 - var2;
                var3 = var2 > var5;
                var2 = !var1;
                if(!var2) { _fun0014_ip = 75; continue _fun0014 }
case 76:
                if(var3) { _fun0014_ip = 77; continue _fun0014 }
case 78:
                var7 = var4 != var6;
                var4 = 0;
                if(!var7) { _fun0014_ip = 79; continue _fun0014 }
case 80:
                var4 = var6;
case 79:
                var3 = var4 > var5;
case 77:
                var2 = var3;
case 75:
                return var2;
case 73:
                var1 = !var1;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'shouldShowTrialOfferReminder';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var4 = _closure1_slot18;
                var3 = var4.includes;
                var1 = arg1;
                var1 = var1.trial_id;
                var1 = var3.bind(var4)(var1);
                var1 = !var1;
                if(var1) { _fun0015_ip = 81; continue _fun0015 }
case 63:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.isPremiumOfferReminderExperimentEnabled;
                var2 = {};
                var5 = 'user_offer_store';
                var2['location'] = var5;
                var1 = var3.bind(var4)(var2);
case 81:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getAlmostExpiringTrialOffersForReminder';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var5 = this;
                var _closure3_slot0 = var5;
                var1 = arg1;
                var _closure3_slot1 = var1;
                var4 = global;
                var7 = var4.Object;
                var6 = var7.values;
                var1 = _closure1_slot17;
                var7 = var6.bind(var7)(var1);
                var6 = var7.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var1 = var6.bind(var7)(var1);
                var _closure3_slot2 = var1;
                var6 = _closure1_slot9;
                var1 = var6.getCurrentUser;
                var7 = var1.bind(var6)();
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 12;
                var6 = var6[var1];
                var1 = undefined;
                var6 = var8.bind(var1)(var6);
                var1 = var6.isPremium;
                var1 = var1.bind(var6)(var7);
                if(!var1) { _fun0016_ip = 44; continue _fun0016 }
case 82:
                var1 = var5.canFractionalPremiumUserUseOffer;
                var1 = var1.bind(var5)();
                if(var1) { _fun0016_ip = 44; continue _fun0016 }
case 83:
                var1 = new Array(0);
                _fun0016_ip = 17; continue _fun0016;
case 44:
                var5 = var4.Object;
                var4 = var5.values;
                var3 = _closure1_slot20;
                var3 = var3.userTrialOffers;
                var4 = var4.bind(var5)(var3);
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var4 = arg1;
                        var5 = _closure3_slot2;
                        var3 = var5.includes;
                        var1 = var4.trial_id;
                        var1 = var3.bind(var5)(var1);
                        if(!var1) { _fun0017_ip = 41; continue _fun0017 }
case 48:
                        var5 = var4.expires_at;
                        var3 = null;
                        var1 = var3 != var5;
case 41:
                        if(!var1) { _fun0017_ip = 28; continue _fun0017 }
case 84:
                        var5 = var4.subscription_trial;
                        var3 = null;
                        var1 = var3 != var5;
case 28:
                        if(!var1) { _fun0017_ip = 85; continue _fun0017 }
case 86:
                        var6 = _closure3_slot1;
                        var5 = var6.includes;
                        var3 = var4.subscription_trial;
                        var3 = var3.sku_id;
                        var1 = var5.bind(var6)(var3);
case 85:
                        if(!var1) { _fun0017_ip = 87; continue _fun0017 }
case 88:
                        var3 = global;
                        var7 = var3.Date;
                        var6 = var7.parse;
                        var5 = var4.expires_at;
                        var5 = var6.bind(var7)(var5);
                        var6 = var3.Date;
                        var3 = var6.now;
                        var6 = var3.bind(var6)();
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var3 = 12;
                        var7 = var7[var3];
                        var3 = undefined;
                        var7 = var8.bind(var3)(var7);
                        var3 = var7.getOfferNoticeThreshold;
                        var3 = var3.bind(var7)(var4);
                        var3 = var6 + var3;
                        var1 = var5 < var3;
case 87:
                        if(!var1) { _fun0017_ip = 89; continue _fun0017 }
case 90:
                        var3 = _closure3_slot0;
                        var2 = var3.shouldShowTrialOfferReminder;
                        var1 = var2.bind(var3)(var4);
case 89:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
case 17:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'shouldShowDiscountOfferReminder';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var4 = _closure1_slot13;
                var3 = var4.includes;
                var1 = arg1;
                var1 = var1.discountId;
                var1 = var3.bind(var4)(var1);
                var1 = !var1;
                if(var1) { _fun0018_ip = 81; continue _fun0018 }
case 63:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.isPremiumOfferReminderExperimentEnabled;
                var2 = {};
                var5 = 'user_offer_store';
                var2['location'] = var5;
                var1 = var3.bind(var4)(var2);
case 81:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getAlmostExpiringDiscountOffersForReminder';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var4 = this;
                var _closure3_slot0 = var4;
                var1 = arg1;
                var _closure3_slot1 = var1;
                var5 = _closure1_slot9;
                var1 = var5.getCurrentUser;
                var6 = var1.bind(var5)();
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 12;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var7.bind(var1)(var5);
                var1 = var5.isPremium;
                var1 = var1.bind(var5)(var6);
                if(!var1) { _fun0019_ip = 51; continue _fun0019 }
case 91:
                var1 = var4.canFractionalPremiumUserUseOffer;
                var1 = var1.bind(var4)();
                if(var1) { _fun0019_ip = 51; continue _fun0019 }
case 92:
                var1 = new Array(0);
                _fun0019_ip = 93; continue _fun0019;
case 51:
                var4 = global;
                var5 = var4.Object;
                var4 = var5.values;
                var3 = _closure1_slot20;
                var3 = var3.userDiscountOffers;
                var4 = var4.bind(var5)(var3);
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var4 = arg1;
                        var1 = var4.expiresAt;
                        var3 = null;
                        var1 = var3 != var1;
                        if(!var1) { _fun0020_ip = 34; continue _fun0020 }
case 94:
                        var2 = var4.discount;
                        var1 = var3 != var2;
case 34:
                        if(!var1) { _fun0020_ip = 7; continue _fun0020 }
case 95:
                        var2 = var4.discount;
                        var5 = var2.planIds;
                        var3 = var5.some;
                        var2 = function(arg1) {
                            var3 = _closure3_slot1;
                            var2 = var3.includes;
                            var4 = _closure1_slot16;
                            var1 = arg1;
                            var1 = var4[var1];
                            var1 = var1.skuId;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var3.bind(var5)(var2);
case 7:
                        if(!var1) { _fun0020_ip = 96; continue _fun0020 }
case 97:
                        var3 = var4.expiresAt;
                        var2 = var3.getTime;
                        var3 = var2.bind(var3)();
                        var2 = global;
                        var5 = var2.Date;
                        var2 = var5.now;
                        var5 = var2.bind(var5)();
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var2 = 12;
                        var6 = var6[var2];
                        var2 = undefined;
                        var6 = var7.bind(var2)(var6);
                        var2 = var6.getOfferNoticeThreshold;
                        var2 = var2.bind(var6)(var4);
                        var2 = var5 + var2;
                        var1 = var3 < var2;
case 96:
                        if(!var1) { _fun0020_ip = 98; continue _fun0020 }
case 99:
                        var3 = _closure3_slot0;
                        var2 = var3.shouldShowDiscountOfferReminder;
                        var1 = var2.bind(var3)(var4);
case 98:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
case 93:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getAcknowledgedOffers';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var4 = this;
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure1_slot9;
                var1 = var5.getCurrentUser;
                var6 = var1.bind(var5)();
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 12;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var7.bind(var1)(var5);
                var1 = var5.isPremium;
                var1 = var1.bind(var5)(var6);
                if(!var1) { _fun0021_ip = 100; continue _fun0021 }
case 97:
                var1 = var4.canFractionalPremiumUserUseOffer;
                var1 = var1.bind(var4)();
                if(var1) { _fun0021_ip = 100; continue _fun0021 }
case 81:
                var1 = new Array(0);
                _fun0021_ip = 101; continue _fun0021;
case 100:
                var4 = global;
                var5 = var4.Object;
                var4 = var5.values;
                var3 = _closure1_slot20;
                var3 = var3.userTrialOffers;
                var4 = var4.bind(var5)(var3);
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                        var2 = arg1;
                        var4 = _closure3_slot0;
                        var3 = var4.includes;
                        var1 = var2.trial_id;
                        var1 = var3.bind(var4)(var1);
                        if(!var1) { _fun0022_ip = 41; continue _fun0022 }
case 48:
                        var3 = var2.expires_at;
                        var2 = null;
                        var1 = var2 != var3;
case 41:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
case 101:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getUnacknowledgedDiscountOffers';
        var5['key'] = var7;
        var7 = function value() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var3 = this;
                var4 = _closure1_slot9;
                var1 = var4.getCurrentUser;
                var5 = var1.bind(var4)();
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 12;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var4);
                var1 = var4.isPremium;
                var1 = var1.bind(var4)(var5);
                if(!var1) { _fun0023_ip = 37; continue _fun0023 }
case 4:
                var1 = var3.canFractionalPremiumUserUseOffer;
                var1 = var1.bind(var3)();
                if(var1) { _fun0023_ip = 37; continue _fun0023 }
case 91:
                var1 = new Array(0);
                _fun0023_ip = 102; continue _fun0023;
case 37:
                var3 = global;
                var4 = var3.Object;
                var3 = var4.values;
                var2 = _closure1_slot20;
                var2 = var2.userDiscountOffers;
                var5 = null;
                if(!(var5 == var2)) { _fun0023_ip = 55; continue _fun0023 }
case 73:
                var2 = {};
case 55:
                var4 = var3.bind(var4)(var2);
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                        var2 = arg1;
                        var3 = var2.expiresAt;
                        var1 = null;
                        var1 = var1 == var3;
                        if(!var1) { _fun0024_ip = 84; continue _fun0024 }
case 94:
                        var4 = _closure1_slot12;
                        var3 = var4.includes;
                        var2 = var2.discountId;
                        var2 = var3.bind(var4)(var2);
                        var1 = !var2;
case 84:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
case 102:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getUnacknowledgedOffers';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var4 = this;
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure1_slot9;
                var1 = var5.getCurrentUser;
                var6 = var1.bind(var5)();
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 12;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var7.bind(var1)(var5);
                var1 = var5.isPremium;
                var1 = var1.bind(var5)(var6);
                if(!var1) { _fun0025_ip = 100; continue _fun0025 }
case 97:
                var1 = var4.canFractionalPremiumUserUseOffer;
                var1 = var1.bind(var4)();
                if(var1) { _fun0025_ip = 100; continue _fun0025 }
case 81:
                var1 = new Array(0);
                _fun0025_ip = 101; continue _fun0025;
case 100:
                var4 = global;
                var5 = var4.Object;
                var4 = var5.values;
                var3 = _closure1_slot20;
                var3 = var3.userTrialOffers;
                var4 = var4.bind(var5)(var3);
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                        var2 = arg1;
                        var4 = _closure3_slot0;
                        var3 = var4.includes;
                        var1 = var2.trial_id;
                        var1 = var3.bind(var4)(var1);
                        if(!var1) { _fun0026_ip = 41; continue _fun0026 }
case 48:
                        var3 = var2.expires_at;
                        var2 = null;
                        var1 = var2 == var3;
case 41:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
case 101:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'hasAnyUnexpiredOffer';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var1 = _closure1_slot20;
            var1 = var1.userTrialOffers;
            var3 = var2.bind(var3)(var1);
            var2 = var3.some;
            var1 = function(arg1) {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var3 = arg1;
                    var2 = var3.expires_at;
                    var1 = null;
                    var1 = var1 == var2;
                    if(var1) { _fun0027_ip = 103; continue _fun0027 }
case 94:
                    var2 = global;
                    var5 = var2.Date;
                    var4 = var5.parse;
                    var3 = var3.expires_at;
                    var3 = var4.bind(var5)(var3);
                    var4 = var2.Date;
                    var2 = var4.now;
                    var2 = var2.bind(var4)();
                    var1 = var3 > var2;
case 103:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'hasAnyUnexpiredDiscountOffer';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var1 = _closure1_slot20;
            var1 = var1.userDiscountOffers;
            var3 = var2.bind(var3)(var1);
            var2 = var3.some;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.hasExpired;
                var1 = var1.bind(var2)();
                var1 = !var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'canFractionalPremiumUserUseOffer';
        var5['key'] = var7;
        var7 = function value() {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var4 = _closure1_slot10;
                var3 = var4.isFractionalPremiumActive;
                var1 = {};
                var5 = true;
                var1['excludeReverseTrial'] = var5;
                var1 = var3.bind(var4)(var1);
                if(!var1) { _fun0028_ip = 104; continue _fun0028 }
case 3:
                var3 = _closure1_slot11;
                var2 = var3.getPremiumTypeSubscription;
                var3 = var2.bind(var3)();
                var2 = null;
                var1 = var2 == var3;
case 104:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getReferrer';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var4 = arg1;
                var2 = null;
                var3 = var2 == var4;
                var1 = null;
                if(var3) { _fun0029_ip = 5; continue _fun0029 }
case 32:
                var3 = _closure1_slot20;
                var3 = var3.userTrialOffers;
                var3 = var3[var4];
                var4 = var2 == var3;
                var2 = undefined;
                if(var4) { _fun0029_ip = 2; continue _fun0029 }
case 105:
                var2 = var3.referrer;
case 2:
                var1 = var2;
case 5:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'forceReset';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot25;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'lastFetchSuccessful';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot20;
            var1 = var1.lastFetchSuccessful;
            return var1;
        };
        var5['value'] = var6;
        var1[20] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'UserOfferStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = new Array(4);
    var11 = function(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var2 = arg1;
            var4 = null;
            var5 = var4 == var2;
            var1 = undefined;
            var3 = undefined;
            if(var5) { _fun0030_ip = 70; continue _fun0030 }
case 106:
            var3 = var2.userDiscounts;
case 70:
            if(!(var4 == var3)) { _fun0030_ip = 34; continue _fun0030 }
case 107:
            return var1;
case 34:
            var1 = {};
            var7 = var1;
            var6 = var2;
            var2 = copyDataProperties(var7, var6);
            var2 = 'userDiscountOffers';
            var1[1] = var3;
            return var1;
        }
    };
    var2[0] = var11;
    var11 = function(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 == var1)) { _fun0031_ip = 66; continue _fun0031 }
case 67:
            var2 = undefined;
            return var2;
case 66:
            var2 = global;
            var4 = var2.Object;
            var3 = var4.hasOwn;
            var2 = 'userAnnualOfferLastFetchedAtDate';
            var2 = var3.bind(var4)(var1, var2);
            if(!var2) { _fun0031_ip = 5; continue _fun0031 }
case 74:
            var2 = delete var1.userAnnualOfferLastFetchedAtDate;
case 5:
            return var1;
        }
    };
    var2[1] = var11;
    var11 = function(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            if(!(var4 == var3)) { _fun0032_ip = 66; continue _fun0032 }
case 67:
            var1 = undefined;
            return var1;
case 66:
            var1 = var4 == var3;
            var2 = undefined;
            if(var1) { _fun0032_ip = 34; continue _fun0032 }
case 70:
            var2 = var3.isFetching;
case 34:
            var1 = var3;
            if(!(var4 == var2)) { _fun0032_ip = 7; continue _fun0032 }
case 72:
            var2 = {};
            var6 = var2;
            var5 = var3;
            var3 = copyDataProperties(var6, var5);
            var4 = false;
            var3 = 'isFetching';
            var2[2] = var4;
            var1 = var2;
case 7:
            return var1;
        }
    };
    var2[2] = var11;
    var11 = function(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
            var2 = arg1;
            var4 = null;
            var5 = var4 == var2;
            var1 = undefined;
            var3 = undefined;
            if(var5) { _fun0033_ip = 70; continue _fun0033 }
case 106:
            var3 = var2.userDiscountOffers;
case 70:
            if(!(var4 == var3)) { _fun0033_ip = 34; continue _fun0033 }
case 107:
            return var1;
case 34:
            var1 = {};
            var8 = var1;
            var7 = var2;
            var3 = copyDataProperties(var8, var7);
            var5 = global;
            var4 = var5.Object;
            var3 = var4.fromEntries;
            var6 = var5.Object;
            var5 = var6.entries;
            var2 = var2.userDiscountOffers;
            var6 = var5.bind(var6)(var2);
            var5 = var6.map;
            var2 = function(arg1) {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                    var6 = arg1;
                    var1 = var6[Symbol.iterator];
                    var6 = var1().next;
                    var3 = var6().value;
                    var2 = var1;
                    var4 = undefined;
                    var5 = var2 === var4;
                    var2 = undefined;
                    if(var5) { _fun0034_ip = 60; continue _fun0034 }
case 61:
                    var2 = var3;
case 60:
                    var3 = undefined;
                    if(var5) { _fun0034_ip = 62; continue _fun0034 }
case 63:
                    var7 = var6().value;
                    var6 = var1;
                    var6 = var6 === var4;
                    var3 = undefined;
                    var5 = var6;
                    if(var6) { _fun0034_ip = 62; continue _fun0034 }
case 50:
                    var3 = var7;
                    var5 = var6;
case 62:
                    if(var5) { _fun0034_ip = 64; continue _fun0034 }
case 65:
                    var1.return();
case 64:
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = _closure1_slot26;
                    var2 = var2.bind(var4)(var3);
                    var1[1] = var2;
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var2);
            var3 = var3.bind(var4)(var2);
            var2 = 'userDiscountOffers';
            var1[1] = var3;
            return var1;
        }
    };
    var2[3] = var11;
    var8['migrations'] = var2;
    var2 = 14;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var11 = function handleUserOfferFetchStart() {
        var2 = _closure1_slot20;
        var1 = true;
        var2['isFetching'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['BILLING_USER_OFFER_FETCH_START'] = var11;
    var11 = function handleUserTrialOfferFetchSuccess(arg1) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
            var1 = arg1;
            var3 = var1.userTrialOffer;
            var1 = null;
            if(!(var1 == var3)) { _fun0035_ip = 3; continue _fun0035 }
case 108:
            var2 = _closure1_slot25;
            var1 = undefined;
            var1 = var2.bind(var1)();
            _fun0035_ip = 109; continue _fun0035;
case 3:
            var1 = _closure1_slot20;
            var2 = var1.userTrialOffers;
            var1 = var3.trial_id;
            var2[var1] = var3;
case 109:
            var3 = _closure1_slot20;
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var3['userOffersLastFetchedAtDate'] = var2;
            var2 = _closure1_slot20;
            var1 = false;
            var2['isFetching'] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS'] = var11;
    var11 = function handleUserTrialOfferAcknowledgedSuccess(arg1) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
            var1 = arg1;
            var3 = var1.userTrialOffer;
            var1 = null;
            if(!(var1 == var3)) { _fun0036_ip = 63; continue _fun0036 }
case 108:
            var2 = _closure1_slot20;
            var1 = {};
            var2['userTrialOffers'] = var1;
            _fun0036_ip = 4; continue _fun0036;
case 63:
            var1 = _closure1_slot20;
            var2 = var1.userTrialOffers;
            var1 = var3.trial_id;
            var2[var1] = var3;
case 4:
            var2 = _closure1_slot20;
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
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var1 = arg1;
            var4 = var1.userTrialOffer;
            var5 = var1.userDiscount;
            var6 = var1.userDiscountOffer;
            var1 = null;
            var2 = var1 == var4;
            if(!var2) { _fun0037_ip = 69; continue _fun0037 }
case 3:
            var2 = var1 == var5;
case 69:
            if(!var2) { _fun0037_ip = 41; continue _fun0037 }
case 110:
            var2 = var1 == var6;
case 41:
            if(!var2) { _fun0037_ip = 62; continue _fun0037 }
case 84:
            var3 = _closure1_slot25;
            var2 = undefined;
            var2 = var3.bind(var2)();
case 62:
            if(!(var1 == var4)) { _fun0037_ip = 111; continue _fun0037 }
case 7:
            if(!(var1 == var5)) { _fun0037_ip = 112; continue _fun0037 }
case 113:
            if(!(var1 != var6)) { _fun0037_ip = 114; continue _fun0037 }
case 54:
            var2 = _closure1_slot20;
            var3 = var2.userDiscountOffers;
            var2 = var6.discountId;
            var3[var2] = var6;
            var2 = _closure1_slot20;
            var1 = {};
            var2['userTrialOffers'] = var1;
            _fun0037_ip = 114; continue _fun0037;
case 112:
            var2 = _closure1_slot20;
            var3 = var2.userDiscountOffers;
            var2 = var5.discountId;
            var3[var2] = var5;
            var2 = _closure1_slot20;
            var1 = {};
            var2['userTrialOffers'] = var1;
            _fun0037_ip = 114; continue _fun0037;
case 111:
            var2 = _closure1_slot20;
            var3 = var2.userTrialOffers;
            var2 = var4.trial_id;
            var3[var2] = var4;
            var2 = _closure1_slot20;
            var1 = {};
            var2['userDiscountOffers'] = var1;
case 114:
            var3 = _closure1_slot20;
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var3['userOffersLastFetchedAtDate'] = var2;
            var3 = _closure1_slot20;
            var2 = false;
            var3['isFetching'] = var2;
            var2 = _closure1_slot20;
            var1 = true;
            var2['lastFetchSuccessful'] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['BILLING_USER_OFFER_FETCH_SUCCESS'] = var11;
    var11 = function handleUserOfferAcknowledgedSuccess(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
            var1 = arg1;
            var6 = var1.userTrialOffer;
            var3 = var1.userDiscount;
            var4 = var1.userDiscountOffer;
            var1 = null;
            if(!(var1 == var6)) { _fun0038_ip = 84; continue _fun0038 }
case 60:
            var5 = _closure1_slot20;
            var2 = {};
            var5['userTrialOffers'] = var2;
            _fun0038_ip = 30; continue _fun0038;
case 84:
            var2 = _closure1_slot20;
            var5 = var2.userTrialOffers;
            var2 = var6.trial_id;
            var5[var2] = var6;
case 30:
            if(!(var1 == var3)) { _fun0038_ip = 115; continue _fun0038 }
case 116:
            if(!(var1 == var4)) { _fun0038_ip = 117; continue _fun0038 }
case 59:
            var2 = _closure1_slot20;
            var1 = {};
            var2['userDiscountOffers'] = var1;
            _fun0038_ip = 118; continue _fun0038;
case 117:
            var1 = _closure1_slot20;
            var2 = var1.userDiscountOffers;
            var1 = var4.discountId;
            var2[var1] = var4;
            _fun0038_ip = 118; continue _fun0038;
case 115:
            var1 = _closure1_slot20;
            var2 = var1.userDiscountOffers;
            var1 = var3.discountId;
            var2[var1] = var3;
case 118:
            var2 = _closure1_slot20;
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
    var11 = function handleUserOfferFetchFail() {
        var3 = _closure1_slot25;
        var1 = undefined;
        var3 = var3.bind(var1)();
        var4 = _closure1_slot20;
        var3 = global;
        var5 = var3.Date;
        var3 = var5.now;
        var3 = var3.bind(var5)();
        var4['userOffersLastFetchedAtDate'] = var3;
        var4 = _closure1_slot20;
        var3 = false;
        var4['isFetching'] = var3;
        var2 = _closure1_slot20;
        var2['lastFetchSuccessful'] = var3;
        return var1;
    };
    var2['BILLING_USER_OFFER_FETCH_FAIL'] = var11;
    var10 = function handleUserOfferRedeemed(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
            var1 = arg1;
            var1 = var1.offerId;
            var _closure2_slot0 = var1;
            var4 = global;
            var6 = var4.Object;
            var5 = var6.keys;
            var3 = _closure1_slot20;
            var3 = var3.userDiscountOffers;
            var6 = var5.bind(var6)(var3);
            var5 = var6.find;
            var3 = function(arg1) {
                var1 = _closure1_slot20;
                var2 = var1.userDiscountOffers;
                var1 = arg1;
                var1 = var2[var1];
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var6 = var5.bind(var6)(var3);
            var3 = null;
            if(!(var3 != var6)) { _fun0039_ip = 92; continue _fun0039 }
case 30:
            var5 = _closure1_slot20;
            var5 = var5.userDiscountOffers;
            var5 = delete var5[var6];
case 92:
            var6 = var4.Object;
            var5 = var6.keys;
            var4 = _closure1_slot20;
            var4 = var4.userTrialOffers;
            var5 = var5.bind(var6)(var4);
            var4 = var5.find;
            var2 = function(arg1) {
                var1 = _closure1_slot20;
                var2 = var1.userTrialOffers;
                var1 = arg1;
                var1 = var2[var1];
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            if(!(var3 != var2)) { _fun0039_ip = 118; continue _fun0039 }
case 101:
            var1 = _closure1_slot20;
            var1 = var1.userTrialOffers;
            var1 = delete var1[var2];
case 118:
            var1 = true;
            return var1;
        }
    };
    var2['BILLING_USER_OFFER_REDEEMED'] = var10;
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
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/billing/UserOfferStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();