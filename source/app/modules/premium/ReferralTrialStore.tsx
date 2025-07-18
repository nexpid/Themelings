// app/modules/premium/ReferralTrialStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot25 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 342; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
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
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot27;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot27;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
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
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
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
                    _fun0003_ip = 67; continue _fun0003;
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
    var _closure1_slot26 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function handleReferralTrialResolve(arg1) {
        var3 = _closure1_slot14;
        var2 = var3.add;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot28 = var1;
    var9 = function handleLoadMessages(arg1) {
        var1 = arg1;
        var3 = var1.messages;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot29;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var1 = function resolveUserReferralTrialId(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var6 = arg1;
            var8 = var6.type;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var4 = var4.MessageTypes;
            var7 = var4.PREMIUM_REFERRAL;
            var4 = null;
            var5 = null;
            if(!(var8 === var7)) { _fun0005_ip = 60; continue _fun0005 }
 55:
            var5 = var6.content;
 60:
            var _closure2_slot0 = var5;
            if(!(var4 != var5)) { _fun0005_ip = 149; continue _fun0005 }
 68:
            var6 = _closure1_slot15;
            var4 = var6.has;
            var4 = var4.bind(var6)(var5);
            if(var4) { _fun0005_ip = 99; continue _fun0005 }
 85:
            var7 = _closure1_slot14;
            var6 = var7.has;
            var4 = var6.bind(var7)(var5);
 99:
            if(var4) { _fun0005_ip = 147; continue _fun0005 }
 102:
            var4 = _closure1_slot28;
            var4 = var4.bind(var1)(var5);
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 8;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.wait;
            var2 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.resolveReferralTrialOffer;
                var2 = _closure2_slot0;
                var3 = var3.bind(var4)(var2);
                var2 = var3.catch;
                var1 = _closure1_slot9;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
 147:
            return var1;
 149:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var11 = global;
    var10 = var11.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var10 = 0;
    var2 = var6[var10];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.NOOP_NULL;
    var _closure1_slot9 = var2;
    var2 = null;
    var _closure1_slot10 = var2;
    var8 = var11.Set;
    var12 = var8.prototype;
    var12 = Object.create(var12, {constructor: {value: var8}});
    var17 = var12;
    var8 = new var17[var8](var16);
    var8 = var8 instanceof Object ? var8 : var12;
    var _closure1_slot11 = var8;
    var8 = var11.Map;
    var12 = var8.prototype;
    var12 = Object.create(var12, {constructor: {value: var8}});
    var17 = var12;
    var8 = new var17[var8](var16);
    var8 = var8 instanceof Object ? var8 : var12;
    var _closure1_slot12 = var8;
    var8 = false;
    var _closure1_slot13 = var8;
    var12 = var11.Set;
    var13 = var12.prototype;
    var13 = Object.create(var13, {constructor: {value: var12}});
    var17 = var13;
    var12 = new var17[var12](var16);
    var12 = var12 instanceof Object ? var12 : var13;
    var _closure1_slot14 = var12;
    var12 = var11.Set;
    var13 = var12.prototype;
    var13 = Object.create(var13, {constructor: {value: var12}});
    var17 = var13;
    var12 = new var17[var12](var16);
    var12 = var12 instanceof Object ? var12 : var13;
    var _closure1_slot15 = var12;
    var11 = var11.Map;
    var12 = var11.prototype;
    var12 = Object.create(var12, {constructor: {value: var11}});
    var17 = var12;
    var11 = new var17[var11](var16);
    var11 = var11 instanceof Object ? var11 : var12;
    var _closure1_slot16 = var11;
    var _closure1_slot17 = var10;
    var _closure1_slot18 = var2;
    var11 = new Array(0);
    var _closure1_slot19 = var11;
    var _closure1_slot20 = var8;
    var _closure1_slot21 = var10;
    var _closure1_slot22 = var8;
    var _closure1_slot23 = var2;
    var2 = function emitChanges() {
        var1 = true;
        return var1;
    };
    var _closure1_slot24 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ReferralTrialStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot25;
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
                var6 = _closure1_slot6;
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
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var2 = var4.waitFor;
            var5 = _closure1_slot8;
            var2 = var2.bind(var4)(var5);
            var3 = var4.syncWith;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot24;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(14);
        var1[0] = var5;
        var5 = {};
        var7 = 'checkAndFetchReferralsRemaining';
        var5['key'] = var7;
        var7 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = _closure1_slot10;
                var4 = null;
                var2 = var4 == var2;
                if(!var2) { _fun0007_ip = 23; continue _fun0007 }
 16:
                var3 = _closure1_slot13;
                var2 = !var3;
 23:
                if(!var2) { _fun0007_ip = 37; continue _fun0007 }
 26:
                var5 = _closure1_slot17;
                var3 = 5;
                var2 = var5 < var3;
 37:
                if(!var2) { _fun0007_ip = 79; continue _fun0007 }
 40:
                var3 = _closure1_slot18;
                var3 = var4 == var3;
                if(var3) { _fun0007_ip = 76; continue _fun0007 }
 51:
                var5 = _closure1_slot18;
                var4 = global;
                var6 = var4.Date;
                var4 = var6.now;
                var4 = var4.bind(var6)();
                var3 = var5 < var4;
 76:
                var2 = var3;
 79:
                if(!var2) { _fun0007_ip = 114; continue _fun0007 }
 82:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.fetchReferralsRemaining;
                var1 = var1.bind(var2)();
 114:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getReferralsRemaining';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = var2.checkAndFetchReferralsRemaining;
            var1 = var1.bind(var2)();
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getSentUserIds';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = var2.checkAndFetchReferralsRemaining;
            var1 = var1.bind(var2)();
            var1 = global;
            var3 = var1.Array;
            var2 = var3.from;
            var4 = _closure1_slot11;
            var1 = var4.values;
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isFetchingReferralsRemaining';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getRelevantUserTrialOffer';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot16;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isResolving';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot14;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getEligibleUsers';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot19;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getFetchingEligibleUsers';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getNextIndexOfEligibleUsers';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getIsEligibleToSendReferrals';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot22;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getRefreshAt';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot23;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getAllRelevantReferralTrialOffers';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Array;
            var2 = var3.from;
            var4 = _closure1_slot16;
            var1 = var4.values;
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getRecipientStatus';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var6;
        var1[13] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ReferralTrialStore';
    var8['displayName'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var16 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleReferralTrialOfferUpdate(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var5 = var2.userTrialOfferId;
            var _closure2_slot0 = var5;
            var3 = _closure1_slot13;
            if(var3) { _fun0008_ip = 57; continue _fun0008 }
 25:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 7;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var3 = var4.fetchReferralsRemaining;
            var3 = var3.bind(var4)();
 57:
            var4 = _closure1_slot14;
            var3 = var4.has;
            var3 = var3.bind(var4)(var5);
            if(var3) { _fun0008_ip = 121; continue _fun0008 }
 74:
            var3 = _closure1_slot28;
            var4 = undefined;
            var3 = var3.bind(var4)(var5);
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 8;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.wait;
            var1 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.resolveReferralTrialOffer;
                var2 = _closure2_slot0;
                var3 = var3.bind(var4)(var2);
                var2 = var3.catch;
                var1 = _closure1_slot9;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
 121:
            var1 = undefined;
            return var1;
        }
    };
    var2['BILLING_REFERRAL_TRIAL_OFFER_UPDATE'] = var10;
    var10 = function handleReferralsRemainingFetchStart(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0009_ip = 26; continue _fun0009 }
 9:
            _closure1_slot23 = var1;
            var1 = true;
            _closure1_slot13 = var1;
            var1 = undefined;
            return var1;
 26:
            var4 = "Cannot destructure 'undefined' or 'null'.";
            var5 = var2;
            var1 = throwTypeError(var5, var4);
            var1 = undefined;
            throw var1;
        }
    };
    var2['BILLING_REFERRALS_REMAINING_FETCH_START'] = var10;
    var10 = function handleReferralsRemainingFetchSuccess(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var4 = var1.referrals_remaining;
            var6 = var1.sent_user_ids;
            var3 = var1.refresh_at;
            var2 = var1.recipient_status;
            var1 = var1.has_eligible_friends;
            var5 = null;
            var5 = var5 == var3;
            if(!var5) { _fun0010_ip = 45; continue _fun0010 }
 42:
            var5 = var1;
 45:
            _closure1_slot22 = var5;
            var5 = false;
            _closure1_slot13 = var5;
            _closure1_slot10 = var4;
            var4 = global;
            var4 = var4.Set;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var9 = var5;
            var8 = var6;
            var4 = new var9[var4](var8, var7);
            var4 = var4 instanceof Object ? var4 : var5;
            _closure1_slot11 = var4;
            _closure1_slot23 = var3;
            _closure1_slot12 = var2;
            var1 = undefined;
            return var1;
        }
    };
    var2['BILLING_REFERRALS_REMAINING_FETCH_SUCCESS'] = var10;
    var10 = function handleReferralsRemainingFetchFail(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var2 = arg1;
            var4 = null;
            if(!(var2 != var4)) { _fun0011_ip = 105; continue _fun0011 }
 9:
            var1 = false;
            _closure1_slot22 = var1;
            _closure1_slot23 = var4;
            _closure1_slot13 = var1;
            var4 = _closure1_slot17;
            var1 = 1;
            var1 = var4 + var1;
            _closure1_slot17 = var1;
            var1 = global;
            var5 = var1.Date;
            var4 = var5.now;
            var4 = var4.bind(var5)();
            var7 = var1.Math;
            var6 = var7.pow;
            var5 = _closure1_slot17;
            var1 = 2;
            var5 = var6.bind(var7)(var1, var5);
            var1 = 1000;
            var1 = var1 * var5;
            var1 = var4 + var1;
            _closure1_slot18 = var1;
            var1 = undefined;
            return var1;
 105:
            var8 = "Cannot destructure 'undefined' or 'null'.";
            var9 = var2;
            var1 = throwTypeError(var9, var8);
            var1 = undefined;
            throw var1;
        }
    };
    var2['BILLING_REFERRALS_REMAINING_FETCH_FAIL'] = var10;
    var10 = function handleCreateReferralSuccess(arg1) {
        var1 = arg1;
        var2 = var1.userTrialOffer;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 7;
        var4 = var4[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = var5.fetchReferralsRemaining;
        var4 = var4.bind(var5)();
        var6 = _closure1_slot16;
        var5 = var6.set;
        var4 = var2.id;
        var4 = var5.bind(var6)(var4, var2);
        var4 = _closure1_slot11;
        var3 = var4.add;
        var2 = var2.user_id;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['BILLING_CREATE_REFERRAL_SUCCESS'] = var10;
    var10 = function handleCreateReferralsSuccess(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var3 = var1.userTrialOffers;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var2 = var4.fetchReferralsRemaining;
            var2 = var2.bind(var4)();
            var2 = _closure1_slot26;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0012_ip = 125; continue _fun0012 }
 65:
            var2 = var3.value;
            var8 = _closure1_slot16;
            var7 = var8.set;
            var6 = var2.id;
            var6 = var7.bind(var8)(var6, var2);
            var7 = _closure1_slot11;
            var6 = var7.add;
            var2 = var2.user_id;
            var2 = var6.bind(var7)(var2);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0012_ip = 65; continue _fun0012 }
 125:
            return var1;
        }
    };
    var2['CREATE_REFERRALS_SUCCESS'] = var10;
    var10 = function handleReferralTrialResolveSuccess(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var4 = var1.userTrialOffer;
            var1 = null;
            if(!(var1 != var4)) { _fun0013_ip = 76; continue _fun0013 }
 15:
            var5 = _closure1_slot14;
            var3 = var5.delete;
            var2 = var4.id;
            var2 = var3.bind(var5)(var2);
            var5 = _closure1_slot15;
            var3 = var5.add;
            var2 = var4.id;
            var2 = var3.bind(var5)(var2);
            var3 = _closure1_slot16;
            var2 = var3.set;
            var1 = var4.id;
            var1 = var2.bind(var3)(var1, var4);
 76:
            var1 = undefined;
            return var1;
        }
    };
    var2['BILLING_REFERRAL_RESOLVE_SUCCESS'] = var10;
    var10 = function handleReferralTrialResolveFail(arg1) {
        var1 = arg1;
        var3 = var1.userTrialOfferId;
        var4 = _closure1_slot14;
        var2 = var4.delete;
        var2 = var2.bind(var4)(var3);
        var2 = _closure1_slot15;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['BILLING_REFERRAL_RESOLVE_FAIL'] = var10;
    var10 = function handleReferralsFetchEligibleUsersStart() {
        var1 = true;
        _closure1_slot20 = var1;
        var1 = undefined;
        return var1;
    };
    var2['REFERRALS_FETCH_ELIGIBLE_USER_START'] = var10;
    var10 = function handleReferralsFetchEligibleUsersSuccess(arg1) {
        var1 = arg1;
        var3 = var1.users;
        var2 = var1.nextIndex;
        var4 = false;
        _closure1_slot20 = var4;
        _closure1_slot19 = var3;
        _closure1_slot21 = var2;
        var1 = undefined;
        return var1;
    };
    var2['REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS'] = var10;
    var10 = function handleReferralsFetchEligibleUsersFail() {
        var1 = false;
        _closure1_slot20 = var1;
        var1 = undefined;
        return var1;
    };
    var2['REFERRALS_FETCH_ELIGIBLE_USER_FAIL'] = var10;
    var2['LOAD_MESSAGES_SUCCESS'] = var9;
    var10 = function handleMessage(arg1) {
        var1 = arg1;
        var3 = var1.message;
        var2 = _closure1_slot29;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['MESSAGE_CREATE'] = var10;
    var2['LOAD_MESSAGES_AROUND_SUCCESS'] = var9;
    var4 = function handleReset() {
        var3 = null;
        _closure1_slot10 = var3;
        var1 = global;
        var4 = var1.Set;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var7 = var5;
        var4 = new var7[var4](var6);
        var4 = var4 instanceof Object ? var4 : var5;
        _closure1_slot11 = var4;
        var4 = false;
        _closure1_slot13 = var4;
        var5 = var1.Set;
        var6 = var5.prototype;
        var6 = Object.create(var6, {constructor: {value: var5}});
        var7 = var6;
        var5 = new var7[var5](var6);
        var5 = var5 instanceof Object ? var5 : var6;
        _closure1_slot14 = var5;
        var5 = var1.Set;
        var6 = var5.prototype;
        var6 = Object.create(var6, {constructor: {value: var5}});
        var7 = var6;
        var5 = new var7[var5](var6);
        var5 = var5 instanceof Object ? var5 : var6;
        _closure1_slot15 = var5;
        var5 = var1.Map;
        var6 = var5.prototype;
        var6 = Object.create(var6, {constructor: {value: var5}});
        var7 = var6;
        var5 = new var7[var5](var6);
        var5 = var5 instanceof Object ? var5 : var6;
        _closure1_slot16 = var5;
        var5 = 0;
        _closure1_slot17 = var5;
        _closure1_slot18 = var3;
        var6 = new Array(0);
        _closure1_slot19 = var6;
        _closure1_slot20 = var4;
        _closure1_slot21 = var5;
        _closure1_slot22 = var4;
        _closure1_slot23 = var3;
        var1 = var1.Map;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var7 = var3;
        var1 = new var7[var1](var6);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var17 = var4;
    var15 = var2;
    var2 = new var17[var8](var16, var15, var14);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/ReferralTrialStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();