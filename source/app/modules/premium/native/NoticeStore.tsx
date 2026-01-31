// app/modules/premium/native/NoticeStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot16;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot16;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 39; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 39:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function dismissUntilStorageKey(arg1) {
        var2 = _closure1_slot13;
        var1 = arg1;
        var2 = var2[var1];
        var1 = '-untilAtLeast';
        var1 = var2 + var1;
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function clearDismissUntil(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 8;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var4 = var3.Storage;
        var3 = var4.remove;
        var5 = _closure1_slot17;
        var2 = arg1;
        var2 = var5.bind(var1)(var2);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function dismissNotice(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var6 = arg2;
            var3 = null;
            if(!(var3 != var5)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var2 = _closure1_slot13;
            var2 = var2[var5];
            if(!(var3 != var2)) { _fun0005_ip = 42; continue _fun0005 }
case 7:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 8;
            var7 = var7[var4];
            var4 = undefined;
            var4 = var8.bind(var4)(var7);
            var8 = var4.Storage;
            var7 = var8.set;
            var4 = true;
            var4 = var7.bind(var8)(var2, var4);
case 42:
            if(!(var3 != var6)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            if(!(var3 == var2)) { _fun0005_ip = 45; continue _fun0005 }
case 43:
            var3 = _closure1_slot18;
            var2 = undefined;
            var2 = var3.bind(var2)(var5);
            _fun0005_ip = 40; continue _fun0005;
case 45:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var4 = var3.Storage;
            var3 = var4.set;
            var1 = _closure1_slot17;
            var2 = var1.bind(var2)(var5);
            var5 = var6.format;
            var1 = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
            var1 = var5.bind(var6)(var1);
            var1 = var3.bind(var4)(var2, var1);
case 40:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function isNoticeDismissed(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var7 = arg1;
            var5 = null;
            if(!(var5 != var7)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var2 = _closure1_slot13;
            var8 = var2[var7];
            if(!(var5 != var8)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var6 = var2.Storage;
            var3 = var6.get;
            var2 = _closure1_slot17;
            var2 = var2.bind(var4)(var7);
            var6 = var3.bind(var6)(var2);
            var2 = var5 != var6;
            var3 = null;
            if(!var2) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 9;
            var2 = var9[var2];
            var2 = var7.bind(var4)(var2);
            var3 = var2.bind(var4)(var6);
case 50:
            if(!(var5 == var3)) { _fun0006_ip = 52; continue _fun0006 }
case 48:
            var2 = var5 != var8;
            if(!var2) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var6 = '';
            var2 = var6 !== var8;
case 53:
            if(!var2) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 8;
            var7 = var7[var6];
            var6 = undefined;
            var6 = var9.bind(var6)(var7);
            var7 = var6.Storage;
            var6 = var7.get;
            var6 = var6.bind(var7)(var8);
            var5 = var5 != var6;
            if(!var5) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var5 = var6;
case 57:
            var2 = var5;
case 55:
            return var2;
case 52:
            var2 = var3.isAfter;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 9;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
            return var1;
case 46:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var9 = function updateNotice() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = null;
            _closure1_slot11 = var1;
            var3 = _closure1_slot15;
            var2 = _closure1_slot12;
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var3 = var5.bind(var1)();
            var2 = var3.done;
            var4 = 0;
            if(var2) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var2 = var3.value;
            var7 = _closure1_slot10;
            var7 = var7.PREMIUM_TIER_2_TRIAL_ENDING;
            if(!(var2 !== var7)) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var7 = _closure1_slot10;
            var7 = var7.PREMIUM_TIER_0_TRIAL_ENDING;
            if(!(var2 === var7)) { _fun0007_ip = 63; continue _fun0007 }
case 64:
            var9 = _closure1_slot8;
            var8 = var9.getAlmostExpiringTrialOffers;
            var7 = _closure1_slot9;
            var10 = var7.TIER_0;
            var7 = new Array(1);
            var7[0] = var10;
            var7 = var8.bind(var9)(var7);
            var7 = var7.length;
            if(!(var7 > var4)) { _fun0007_ip = 63; continue _fun0007 }
case 54:
            var8 = _closure1_slot20;
            var7 = _closure1_slot10;
            var7 = var7.PREMIUM_TIER_0_TRIAL_ENDING;
            var7 = var8.bind(var1)(var7);
            if(var7) { _fun0007_ip = 63; continue _fun0007 }
case 65:
            _closure1_slot11 = var2;
            _fun0007_ip = 59; continue _fun0007;
case 61:
            var9 = _closure1_slot8;
            var8 = var9.getAlmostExpiringTrialOffers;
            var7 = _closure1_slot9;
            var10 = var7.TIER_2;
            var7 = new Array(1);
            var7[0] = var10;
            var7 = var8.bind(var9)(var7);
            var7 = var7.length;
            if(!(var7 > var4)) { _fun0007_ip = 63; continue _fun0007 }
case 66:
            var8 = _closure1_slot20;
            var7 = _closure1_slot10;
            var7 = var7.PREMIUM_TIER_2_TRIAL_ENDING;
            var7 = var8.bind(var1)(var7);
            if(var7) { _fun0007_ip = 63; continue _fun0007 }
case 67:
            _closure1_slot11 = var2;
            _fun0007_ip = 59; continue _fun0007;
case 63:
            var7 = var5.bind(var1)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0007_ip = 60; continue _fun0007 }
case 59:
            return var1;
        }
    };
    var _closure1_slot21 = var9;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
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
    var2 = var2.PremiumSubscriptionSKUs;
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.NoticeTypes;
    var _closure1_slot10 = var8;
    var2 = null;
    var _closure1_slot11 = var2;
    var10 = var8.PREMIUM_TIER_2_TRIAL_ENDING;
    var2 = new Array(2);
    var2[0] = var10;
    var10 = var8.PREMIUM_TIER_0_TRIAL_ENDING;
    var2[1] = var10;
    var _closure1_slot12 = var2;
    var2 = {};
    var11 = var8.PREMIUM_TIER_0_TRIAL_ENDING;
    var10 = 'hidePremiumTier0TrialEndingReminder';
    var2[var11] = var10;
    var10 = var8.PREMIUM_TIER_2_TRIAL_ENDING;
    var8 = 'hidePremiumTier2TrialEndingReminder';
    var2[var10] = var8;
    var _closure1_slot13 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function NoticeStore() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0008_ip = 68; continue _fun0008 }
case 69:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 70; continue _fun0008;
case 68:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 70:
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
            var3 = this;
            var5 = var3.syncWith;
            var2 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = _closure1_slot21;
            var2 = var5.bind(var3)(var4, var2);
            var2 = var3.waitFor;
            var1 = _closure1_slot8;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getNoticeType';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'NoticeStore';
    var8['displayName'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var2['CONNECTION_OPEN'] = var9;
    var2['CURRENT_USER_UPDATE'] = var9;
    var2['PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS'] = var9;
    var2['BILLING_SUBSCRIPTION_UPDATE_SUCCESS'] = var9;
    var2['BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS'] = var9;
    var2['BILLING_SUBSCRIPTION_FETCH_SUCCESS'] = var9;
    var9 = function handleLogout() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = _closure1_slot15;
            var2 = _closure1_slot12;
            var1 = undefined;
            var7 = var4.bind(var1)(var2);
            var5 = var7.bind(var1)();
            var4 = var5.done;
            var6 = 8;
            var2 = null;
            if(var4) { _fun0009_ip = 17; continue _fun0009 }
case 71:
            var8 = var5.value;
            var4 = _closure1_slot13;
            var10 = var4[var8];
            if(!(var2 != var10)) { _fun0009_ip = 13; continue _fun0009 }
case 72:
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var4 = var9.bind(var1)(var4);
            var9 = var4.Storage;
            var4 = var9.remove;
            var4 = var4.bind(var9)(var10);
case 13:
            var4 = _closure1_slot18;
            var4 = var4.bind(var1)(var8);
            var8 = var7.bind(var1)();
            var4 = var8.done;
            var5 = var8;
            if(!var4) { _fun0009_ip = 71; continue _fun0009 }
case 17:
            _closure1_slot11 = var2;
            return var1;
        }
    };
    var2['LOGOUT'] = var9;
    var4 = function handleNoticeDismiss(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = _closure1_slot11;
            var2 = null;
            if(!(var2 != var3)) { _fun0010_ip = 6; continue _fun0010 }
case 73:
            var5 = _closure1_slot19;
            var4 = _closure1_slot11;
            var2 = arg1;
            var3 = var2.untilAtLeast;
            var2 = undefined;
            var3 = var5.bind(var2)(var4, var3);
            var1 = _closure1_slot21;
            var1 = var1.bind(var2)();
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var2['NOTICE_DISMISS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/NoticeStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();