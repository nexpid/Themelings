// app/modules/premium/gifting/PremiumGiftingIntentStore.tsx
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
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
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
            var9 = _closure1_slot20;
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
            var7 = _closure1_slot20;
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
    var _closure1_slot19 = var1;
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
    var _closure1_slot20 = var1;
    var1 = function isFriendAnniversaryForYear(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var2 = global;
            var1 = var2.Date;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var9 = var3;
            var1 = new var9[var1](var8);
            var3 = var1 instanceof Object ? var1 : var3;
            var5 = var2.Date;
            var1 = var4.getTime;
            var8 = var1.bind(var4)();
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var9 = var4;
            var1 = new var9[var5](var8, var7);
            var7 = var1 instanceof Object ? var1 : var4;
            var4 = var7.setFullYear;
            var1 = arg2;
            var1 = var4.bind(var7)(var1);
            var5 = var2.Date;
            var1 = var7.getTime;
            var8 = var1.bind(var7)();
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var9 = var4;
            var1 = new var9[var5](var8, var7);
            var1 = var1 instanceof Object ? var1 : var4;
            var5 = var1.setDate;
            var4 = var7.getDate;
            var4 = var4.bind(var7)();
            var6 = 7;
            var4 = var4 - var6;
            var4 = var5.bind(var1)(var4);
            var5 = var2.Date;
            var2 = var7.getTime;
            var8 = var2.bind(var7)();
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var9 = var4;
            var2 = new var9[var5](var8, var7);
            var2 = var2 instanceof Object ? var2 : var4;
            var5 = var2.setDate;
            var4 = var7.getDate;
            var4 = var4.bind(var7)();
            var4 = var4 + var6;
            var4 = var5.bind(var2)(var4);
            var1 = var3 > var1;
            if(!var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var1 = var3 < var2;
case 40:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function isFriendAnniversary(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot21;
            var1 = var5.getFullYear;
            var1 = var1.bind(var5)();
            var4 = undefined;
            var3 = var3.bind(var4)(var5, var1);
            var1 = !var3;
            if(var3) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var3 = _closure1_slot21;
            var2 = global;
            var2 = var2.Date;
            var6 = var2.prototype;
            var6 = Object.create(var6, {constructor: {value: var2}});
            var9 = var6;
            var2 = new var9[var2](var8);
            var6 = var2 instanceof Object ? var2 : var6;
            var2 = var6.getFullYear;
            var2 = var2.bind(var6)();
            var1 = var3.bind(var4)(var5, var2);
case 42:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function updateFriendAnniversaries() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = _closure1_slot17;
            var9 = null;
            if(!(var9 != var1)) { _fun0007_ip = 37; continue _fun0007 }
case 44:
            var4 = _closure1_slot28;
            var3 = _closure1_slot17;
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            _fun0007_ip = 45; continue _fun0007;
case 37:
            var1 = _closure1_slot25;
            var8 = undefined;
            var1 = var1.bind(var8)();
            var4 = _closure1_slot10;
            var3 = var4.hasConsented;
            var1 = _closure1_slot12;
            var1 = var1.PERSONALIZATION;
            var1 = var3.bind(var4)(var1);
            if(!var1) { _fun0007_ip = 45; continue _fun0007 }
case 5:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var1 = var3.bind(var8)(var1);
            var4 = var1.FriendAnniversariesExperiment;
            var3 = var4.getConfig;
            var1 = {};
            var5 = 'PremiumGiftingIntentStore updateFriendAnniversaries';
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
            var1 = var1.enabled;
            if(!var1) { _fun0007_ip = 45; continue _fun0007 }
case 46:
            var3 = _closure1_slot19;
            var4 = _closure1_slot11;
            var1 = var4.getFriendIDs;
            var1 = var1.bind(var4)();
            var7 = var3.bind(var8)(var1);
            var4 = var7.bind(var8)();
            var3 = var4.done;
            var1 = global;
            var6 = 0;
            var5 = var4;
            var4 = undefined;
            if(var3) { _fun0007_ip = 47; continue _fun0007 }
case 48:
            var13 = var5.value;
            var10 = _closure1_slot11;
            var3 = var10.getSince;
            var12 = var3.bind(var10)(var13);
            var10 = _closure1_slot9;
            var3 = var10.getUserAffinity;
            var3 = var3.bind(var10)(var13);
            var11 = _closure1_slot11;
            var10 = var11.isIgnored;
            var11 = var10.bind(var11)(var13);
            var10 = var4;
            if(var11) { _fun0007_ip = 49; continue _fun0007 }
case 50:
            var10 = var4;
            if(!(var9 != var3)) { _fun0007_ip = 49; continue _fun0007 }
case 51:
            var3 = var3.communicationProbability;
            var10 = var4;
            if(!(var3 > var6)) { _fun0007_ip = 49; continue _fun0007 }
case 52:
            var10 = var4;
            if(!(var9 != var12)) { _fun0007_ip = 49; continue _fun0007 }
case 53:
            var3 = var1.Date;
            var11 = var3.prototype;
            var11 = Object.create(var11, {constructor: {value: var3}});
            var17 = var11;
            var16 = var12;
            var3 = new var17[var3](var16, var15);
            var3 = var3 instanceof Object ? var3 : var11;
            var11 = _closure1_slot22;
            var11 = var11.bind(var8)(var3);
            var10 = var3;
            if(!var11) { _fun0007_ip = 49; continue _fun0007 }
case 54:
            var12 = _closure1_slot14;
            var11 = var12.push;
            var11 = var11.bind(var12)(var13);
            var12 = _closure1_slot16;
            var11 = {};
            var11['friendsSince'] = var3;
            var12[var13] = var11;
            var10 = var3;
case 49:
            var11 = var7.bind(var8)();
            var3 = var11.done;
            var4 = var10;
            var5 = var11;
            if(!var3) { _fun0007_ip = 48; continue _fun0007 }
case 47:
            var5 = _closure1_slot14;
            var4 = var5.sort;
            var3 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure1_slot9;
                    var3 = var4.getUserAffinity;
                    var2 = arg1;
                    var5 = var3.bind(var4)(var2);
                    var3 = _closure1_slot9;
                    var2 = var3.getUserAffinity;
                    var1 = arg2;
                    var3 = var2.bind(var3)(var1);
                    var4 = null;
                    var6 = var4 != var5;
                    var1 = 0;
                    if(!var6) { _fun0008_ip = 32; continue _fun0008 }
case 55:
                    var1 = var5.communicationProbability;
case 32:
                    var4 = var4 != var3;
                    var2 = 0;
                    if(!var4) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    var2 = var3.communicationProbability;
case 56:
                    var1 = var2 - var1;
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            var4 = var1.Set;
            var5 = _closure1_slot14;
            var3 = var5.slice;
            var1 = 5;
            var16 = var3.bind(var5)(var6, var1);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var17 = var3;
            var1 = new var17[var4](var16, var15);
            var1 = var1 instanceof Object ? var1 : var3;
            _closure1_slot15 = var1;
case 45:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function hasNewTopAffinityFriendAnniversaries() {
        var1 = global;
        var3 = var1.Array;
        var2 = var3.from;
        var1 = _closure1_slot15;
        var3 = var2.bind(var3)(var1);
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = _closure1_slot13;
            var3 = var1.lastShownFriendsListGiftIntents;
            var2 = var3.includes;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function resetFriendAnniversaries() {
        var3 = _closure1_slot14;
        var1 = 0;
        var3['length'] = var1;
        var3 = _closure1_slot15;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var1 = {};
        _closure1_slot16 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function cleanGiftUnreadNotificationLastDismissedTimes() {
        var2 = _closure1_slot13;
        var4 = var2.giftUnreadNotificationLastDismissedTimes;
        var3 = var4.filter;
        var1 = function(arg1) {
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var2 = var1.bind(var2)();
            var1 = arg1;
            var2 = var2 - var1;
            var1 = 604800000;
            var1 = var2 <= var1;
            return var1;
        };
        var1 = var3.bind(var4)(var1);
        var2['giftUnreadNotificationLastDismissedTimes'] = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function maybeUpdateMessageGiftIntentLastShownMap(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot13;
            var2 = var2.messageGiftIntentLastShownMap;
            var4 = var2[var3];
            var2 = null;
            if(!(var2 == var4)) { _fun0009_ip = 58; continue _fun0009 }
case 59:
            var1 = _closure1_slot13;
            var2 = var1.messageGiftIntentLastShownMap;
            var1 = global;
            var4 = var1.Date;
            var1 = var4.now;
            var1 = var1.bind(var4)();
            var2[var3] = var1;
case 58:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function generateFriendAnniversaries(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var7 = arg1;
            var4 = _closure1_slot25;
            var1 = undefined;
            var4 = var4.bind(var1)();
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 10;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var6 = var4.FriendAnniversariesExperiment;
            var5 = var6.getConfig;
            var4 = {};
            var8 = 'PremiumGiftingIntentStore generateFriendAnniversaries';
            var4['location'] = var8;
            var4 = var5.bind(var6)(var4);
            var4 = var4.enabled;
            if(!var4) { _fun0010_ip = 60; continue _fun0010 }
case 61:
            _closure1_slot17 = var7;
            var5 = _closure1_slot11;
            var4 = var5.getFriendIDs;
            var6 = var4.bind(var5)();
            var5 = var6.filter;
            var4 = function(arg1) {
                var3 = _closure1_slot11;
                var2 = var3.isIgnored;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var6 = var5.bind(var6)(var4);
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 12;
            var4 = var8[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.sampleSize;
            var5 = var4.bind(var5)(var6, var7);
            var4 = var5.forEach;
            var2 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure1_slot11;
                    var2 = var4.getSince;
                    var5 = var2.bind(var4)(var3);
                    var2 = null;
                    if(!(var2 != var5)) { _fun0011_ip = 62; continue _fun0011 }
case 63:
                    var2 = global;
                    var2 = var2.Date;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {constructor: {value: var2}});
                    var7 = var4;
                    var6 = var5;
                    var2 = new var7[var2](var6, var5);
                    var4 = var2 instanceof Object ? var2 : var4;
                    var5 = _closure1_slot14;
                    var2 = var5.push;
                    var2 = var2.bind(var5)(var3);
                    var2 = _closure1_slot16;
                    var1 = {};
                    var1['friendsSince'] = var4;
                    var2[var3] = var1;
case 62:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2);
            var2 = global;
            var5 = var2.Set;
            var7 = _closure1_slot14;
            var6 = var7.slice;
            var4 = 0;
            var2 = 5;
            var10 = var6.bind(var7)(var4, var2);
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var11 = var4;
            var2 = new var11[var5](var10, var9);
            var2 = var2 instanceof Object ? var2 : var4;
            _closure1_slot15 = var2;
case 60:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var8 = global;
    var10 = var8.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
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
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.Consents;
    var _closure1_slot12 = var2;
    var9 = {};
    var2 = {};
    var9['messageGiftIntentLastShownMap'] = var2;
    var2 = new Array(0);
    var9['lastShownFriendsListGiftIntents'] = var2;
    var2 = null;
    var9['friendsTabBadgeLastDismissedTime'] = var2;
    var10 = new Array(0);
    var9['giftUnreadNotificationLastDismissedTimes'] = var10;
    var _closure1_slot13 = var9;
    var9 = new Array(0);
    var _closure1_slot14 = var9;
    var8 = var8.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var14 = var9;
    var8 = new var14[var8](var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot15 = var8;
    var8 = {};
    var _closure1_slot16 = var8;
    var _closure1_slot17 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function PremiumGiftingIntentStore() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)();
                if(var1) { _fun0012_ip = 64; continue _fun0012 }
case 65:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0012_ip = 66; continue _fun0012;
case 64:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 66:
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
        var1 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var2 = arg1;
                var5 = this;
                var3 = {};
                var1 = {};
                var3['messageGiftIntentLastShownMap'] = var1;
                var1 = new Array(0);
                var3['lastShownFriendsListGiftIntents'] = var1;
                var7 = null;
                var3['friendsTabBadgeLastDismissedTime'] = var7;
                var1 = new Array(0);
                var3['giftUnreadNotificationLastDismissedTimes'] = var1;
                _closure1_slot13 = var3;
                if(!(var7 != var2)) { _fun0013_ip = 67; continue _fun0013 }
case 65:
                var4 = _closure1_slot13;
                var3 = var2.friendsTabBadgeLastDismissedTime;
                var4['friendsTabBadgeLastDismissedTime'] = var3;
                var6 = _closure1_slot13;
                var4 = global;
                var9 = var4.Array;
                var8 = var9.from;
                var3 = var2.lastShownFriendsListGiftIntents;
                var3 = var8.bind(var9)(var3);
                var6['lastShownFriendsListGiftIntents'] = var3;
                var6 = _closure1_slot13;
                var3 = {};
                var13 = var2.messageGiftIntentLastShownMap;
                var14 = var3;
                var8 = copyDataProperties(var14, var13);
                var6['messageGiftIntentLastShownMap'] = var3;
                var3 = _closure1_slot13;
                var6 = var4.Array;
                var4 = var6.from;
                var2 = var2.giftUnreadNotificationLastDismissedTimes;
                if(!(var7 == var2)) { _fun0013_ip = 68; continue _fun0013 }
case 69:
                var2 = new Array(0);
case 68:
                var2 = var4.bind(var6)(var2);
                var3['giftUnreadNotificationLastDismissedTimes'] = var2;
case 67:
                var4 = var5.syncWith;
                var2 = _closure1_slot11;
                var3 = new Array(4);
                var3[0] = var2;
                var2 = _closure1_slot9;
                var3[1] = var2;
                var2 = _closure1_slot10;
                var3[2] = var2;
                var2 = _closure1_slot8;
                var3[3] = var2;
                var2 = _closure1_slot23;
                var2 = var4.bind(var5)(var3, var2);
                var2 = _closure1_slot13;
                var7 = var2.messageGiftIntentLastShownMap;
                var3 = global;
                var2 = 1209600000;
                for(var4 in var7)
case 51:
                {
case 70:
                    var10 = var4;
                    var9 = _closure1_slot13;
                    var9 = var9.messageGiftIntentLastShownMap;
                    var11 = var9[var10];
                    var12 = var3.Date;
                    var9 = var12.now;
                    var9 = var9.bind(var12)();
                    var9 = var9 - var11;
                    if(!(var9 > var2)) { _fun0013_ip = 51; continue _fun0013 }
case 71:
                    var9 = _closure1_slot13;
                    var9 = var9.messageGiftIntentLastShownMap;
                    var9 = delete var9[var10];
                    _fun0013_ip = 51; continue _fun0013;
                }
case 72:
                var2 = _closure1_slot26;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getFriendAnniversaries';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isTopAffinityFriendAnniversary';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = arg1;
                var4 = var1.userId;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 10;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var3);
                var5 = var1.FriendAnniversariesExperiment;
                var3 = var5.getConfig;
                var1 = {};
                var6 = 'PremiumGiftingIntentStore isTopAffinityFriendAnniversary';
                var1['location'] = var6;
                var1 = var3.bind(var5)(var1);
                var1 = var1.enabled;
                var3 = !var1;
                var1 = !var3;
                if(var3) { _fun0014_ip = 73; continue _fun0014 }
case 4:
                var3 = _closure1_slot15;
                var2 = var3.has;
                var1 = var2.bind(var3)(var4);
case 73:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'canShowGiftUnreadNotification';
        var5['key'] = var7;
        var7 = function value() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var3 = _closure1_slot26;
                var2 = undefined;
                var3 = var3.bind(var2)();
                var3 = _closure1_slot13;
                var6 = var3.giftUnreadNotificationLastDismissedTimes;
                var1 = _closure1_slot24;
                var1 = var1.bind(var2)();
                var2 = !var1;
                var1 = !var2;
                if(var2) { _fun0015_ip = 74; continue _fun0015 }
case 75:
                var3 = var6.length;
                var2 = 0;
                var2 = var2 === var3;
                if(var2) { _fun0015_ip = 76; continue _fun0015 }
case 77:
                var4 = var6.length;
                var3 = 5;
                var4 = var4 >= var3;
                var3 = !var4;
                if(var4) { _fun0015_ip = 78; continue _fun0015 }
case 3:
                var5 = var6.filter;
                var4 = function(arg1) {
                    var1 = global;
                    var2 = var1.Date;
                    var1 = var2.now;
                    var2 = var1.bind(var2)();
                    var1 = arg1;
                    var2 = var2 - var1;
                    var1 = 86400000;
                    var1 = var2 <= var1;
                    return var1;
                };
                var4 = var5.bind(var6)(var4);
                var5 = var4.length;
                var4 = 1;
                var4 = var5 >= var4;
                var3 = !var4;
case 78:
                var2 = var3;
case 76:
                var1 = var2;
case 74:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'canShowFriendsTabBadge';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot24;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getFriendAnniversaryYears';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var3 = _closure1_slot16;
                var1 = arg1;
                var3 = var3[var1];
                var1 = null;
                var4 = var1 == var3;
                var1 = 0;
                if(var4) { _fun0016_ip = 79; continue _fun0016 }
case 80:
                var8 = var3.friendsSince;
                var3 = global;
                var4 = var3.Math;
                var3 = var4.round;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 11;
                var2 = var5[var2];
                var5 = undefined;
                var2 = var6.bind(var5)(var2);
                var7 = var2.bind(var5)();
                var6 = var7.diff;
                var5 = 'years';
                var2 = true;
                var2 = var6.bind(var7)(var8, var5, var2);
                var1 = var3.bind(var4)(var2);
case 79:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isGiftIntentMessageInCooldown';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = _closure1_slot13;
            var2 = var1.messageGiftIntentLastShownMap;
            var1 = arg1;
            var2 = var2[var1];
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getDevToolTotalFriendAnniversaries';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['value'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'PremiumGiftingIntentStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = new Array(2);
    var9 = function(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            var1 = var3;
            if(!(var4 != var1)) { _fun0017_ip = 81; continue _fun0017 }
case 82:
            var2 = {};
            var6 = var3.friendsTabBadgeLastDismissedTime;
            var7 = var4 != var6;
            var5 = null;
            if(!var7) { _fun0017_ip = 83; continue _fun0017 }
case 84:
            var5 = var6;
case 83:
            var2['friendsTabBadgeLastDismissedTime'] = var5;
            var3 = var3.lastShownFriendsListGiftIntents;
            if(!(var4 == var3)) { _fun0017_ip = 65; continue _fun0017 }
case 85:
            var3 = new Array(0);
case 65:
            var2['lastShownFriendsListGiftIntents'] = var3;
            var3 = {};
            var2['messageGiftIntentLastShownMap'] = var3;
            var1 = var2;
case 81:
            return var1;
        }
    };
    var2[0] = var9;
    var9 = function(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            var1 = var3;
            if(!(var4 != var1)) { _fun0018_ip = 34; continue _fun0018 }
case 82:
            var2 = {};
            var2['friendsTabBadgeLastDismissedTime'] = var4;
            var5 = var3.lastShownFriendsListGiftIntents;
            if(!(var4 == var5)) { _fun0018_ip = 37; continue _fun0018 }
case 84:
            var5 = new Array(0);
case 37:
            var2['lastShownFriendsListGiftIntents'] = var5;
            var3 = var3.messageGiftIntentLastShownMap;
            if(!(var4 == var3)) { _fun0018_ip = 55; continue _fun0018 }
case 86:
            var3 = {};
case 55:
            var2['messageGiftIntentLastShownMap'] = var3;
            var3 = new Array(0);
            var2['giftUnreadNotificationLastDismissedTimes'] = var3;
            var1 = var2;
case 34:
            return var1;
        }
    };
    var2[1] = var9;
    var8['migrations'] = var2;
    var2 = 14;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnectionOpen() {
        var2 = _closure1_slot25;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleLogout() {
        var2 = {};
        var1 = {};
        var2['messageGiftIntentLastShownMap'] = var1;
        var1 = new Array(0);
        var2['lastShownFriendsListGiftIntents'] = var1;
        var1 = null;
        var2['friendsTabBadgeLastDismissedTime'] = var1;
        var1 = new Array(0);
        var2['giftUnreadNotificationLastDismissedTimes'] = var1;
        _closure1_slot13 = var2;
        var2 = _closure1_slot25;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['LOGOUT'] = var9;
    var9 = function handleMessageGiftIntentShown(arg1) {
        var1 = arg1;
        var3 = var1.recipientUserId;
        var2 = _closure1_slot27;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['MESSAGE_GIFT_INTENT_SHOWN'] = var9;
    var9 = function handleFriendsListGiftIntentsShown() {
        var2 = _closure1_slot13;
        var3 = global;
        var4 = var3.Array;
        var3 = var4.from;
        var1 = _closure1_slot15;
        var1 = var3.bind(var4)(var1);
        var2['lastShownFriendsListGiftIntents'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['FRIENDS_LIST_GIFT_INTENTS_SHOWN'] = var9;
    var9 = function handleGiftUnreadNotificationDismiss() {
        var1 = _closure1_slot13;
        var3 = var1.giftUnreadNotificationLastDismissedTimes;
        var2 = var3.push;
        var1 = global;
        var4 = var1.Date;
        var1 = var4.now;
        var1 = var1.bind(var4)();
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['GIFT_UNREAD_NOTIFICATION_DISMISS'] = var9;
    var9 = function handleGiftIntentFlowPurchasedGift(arg1) {
        var1 = arg1;
        var3 = var1.recipientUserId;
        var2 = _closure1_slot27;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['GIFT_INTENT_FLOW_PURCHASED_GIFT'] = var9;
    var9 = function handleDevToolResetFriendsListGiftIntentsShown() {
        var2 = _closure1_slot13;
        var1 = new Array(0);
        var2['lastShownFriendsListGiftIntents'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET'] = var9;
    var9 = function handleDevToolResetGiftMessageCooldown() {
        var2 = _closure1_slot13;
        var1 = {};
        var2['messageGiftIntentLastShownMap'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET'] = var9;
    var9 = function handleDevToolResetGiftUnreadNotificationCooldown() {
        var2 = _closure1_slot13;
        var1 = new Array(0);
        var2['giftUnreadNotificationLastDismissedTimes'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET'] = var9;
    var4 = function handleDevToolSetFriendAnniversaryCount(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var4 = var1.total;
            var2 = null;
            if(!(var2 != var4)) { _fun0019_ip = 87; continue _fun0019 }
case 88:
            var3 = _closure1_slot28;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            return var1;
case 87:
            _closure1_slot17 = var2;
            var2 = _closure1_slot23;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var2['DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/PremiumGiftingIntentStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var2 = 604800000;
    var3['FRIENDS_TAB_BADGE_COOLDOWN_MS'] = var2;
    return var1;
})();