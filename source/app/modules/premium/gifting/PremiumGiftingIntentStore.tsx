// app/modules/premium/gifting/PremiumGiftingIntentStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
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
            var9 = _closure1_slot22;
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
            var7 = _closure1_slot22;
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
    var _closure1_slot21 = var1;
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
    var _closure1_slot22 = var1;
    var1 = function getCurrentTime() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot19;
            var1 = null;
            if(!(var1 == var3)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var1 = global;
            var3 = var1.Date;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            _fun0005_ip = 42; continue _fun0005;
case 40:
            var1 = _closure1_slot19;
case 42:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function isFriendAnniversaryForYear(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
            if(!var1) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var1 = var3 < var2;
case 43:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function isFriendAnniversary(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot24;
            var1 = var5.getFullYear;
            var1 = var1.bind(var5)();
            var4 = undefined;
            var3 = var3.bind(var4)(var5, var1);
            var1 = !var3;
            if(var3) { _fun0007_ip = 45; continue _fun0007 }
case 46:
            var3 = _closure1_slot24;
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
case 45:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function categorizeTopAffinityFriendAnniversaries() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arguments[0];
            var1 = undefined;
            if(!(var4 === var1)) { _fun0008_ip = 41; continue _fun0008 }
case 47:
            var4 = false;
case 41:
            if(var4) { _fun0008_ip = 48; continue _fun0008 }
case 49:
            var5 = _closure1_slot21;
            var4 = _closure1_slot14;
            var9 = var5.bind(var1)(var4);
            var5 = var9.bind(var1)();
            var4 = var5.done;
            var8 = 0.5;
            var7 = null;
            var6 = 0.7;
            if(var4) { _fun0008_ip = 50; continue _fun0008 }
case 3:
            var11 = var5.value;
            var10 = _closure1_slot9;
            var4 = var10.getUserAffinity;
            var10 = var4.bind(var10)(var11);
            var4 = var7 != var10;
            if(!var4) { _fun0008_ip = 51; continue _fun0008 }
case 52:
            var12 = var10.dmProbability;
            var4 = var12 > var6;
case 51:
            if(!var4) { _fun0008_ip = 53; continue _fun0008 }
case 54:
            var12 = _closure1_slot15;
            var4 = var12.add;
            var4 = var4.bind(var12)(var11);
case 53:
            var4 = var7 != var10;
            if(!var4) { _fun0008_ip = 55; continue _fun0008 }
case 56:
            var10 = var10.dmProbability;
            var4 = var10 > var8;
case 55:
            if(!var4) { _fun0008_ip = 57; continue _fun0008 }
case 58:
            var10 = _closure1_slot16;
            var4 = var10.add;
            var4 = var4.bind(var10)(var11);
case 57:
            var10 = var9.bind(var1)();
            var4 = var10.done;
            var5 = var10;
            if(var4) { _fun0008_ip = 50; continue _fun0008 }
case 59:
            _fun0008_ip = 3; continue _fun0008;
case 48:
            var4 = global;
            var6 = var4.Math;
            var5 = var6.ceil;
            var4 = _closure1_slot14;
            var7 = var4.length;
            var4 = 2;
            var4 = var7 / var4;
            var7 = var5.bind(var6)(var4);
            var6 = _closure1_slot14;
            var5 = var6.slice;
            var4 = 0;
            var6 = var5.bind(var6)(var4, var7);
            var5 = var6.forEach;
            var4 = function(arg1) {
                var3 = _closure1_slot15;
                var2 = var3.add;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var4 = _closure1_slot14;
            var3 = var4.forEach;
            var2 = function(arg1) {
                var3 = _closure1_slot16;
                var2 = var3.add;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
case 50:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function updateFriendAnniversaries() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = _closure1_slot18;
            var9 = null;
            if(!(var9 != var2)) { _fun0009_ip = 37; continue _fun0009 }
case 41:
            var4 = _closure1_slot31;
            var3 = _closure1_slot18;
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            _fun0009_ip = 60; continue _fun0009;
case 37:
            var3 = _closure1_slot28;
            var2 = undefined;
            var3 = var3.bind(var2)();
            var5 = _closure1_slot10;
            var4 = var5.hasConsented;
            var3 = _closure1_slot12;
            var3 = var3.PERSONALIZATION;
            var3 = var4.bind(var5)(var3);
            if(!var3) { _fun0009_ip = 60; continue _fun0009 }
case 5:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 10;
            var3 = var5[var3];
            var3 = var4.bind(var2)(var3);
            var5 = var3.FriendAnniversariesExperiment;
            var4 = var5.getConfig;
            var3 = {};
            var6 = 'PremiumGiftingIntentStore updateFriendAnniversaries';
            var3['location'] = var6;
            var3 = var4.bind(var5)(var3);
            var3 = var3.enabled;
            if(!var3) { _fun0009_ip = 60; continue _fun0009 }
case 61:
            var4 = _closure1_slot21;
            var5 = _closure1_slot11;
            var3 = var5.getFriendIDs;
            var3 = var3.bind(var5)();
            var8 = var4.bind(var2)(var3);
            var4 = var8.bind(var2)();
            var3 = var4.done;
            var7 = global;
            var6 = 0;
            var5 = var4;
            var4 = undefined;
            if(var3) { _fun0009_ip = 62; continue _fun0009 }
case 63:
            var13 = var5.value;
            var10 = _closure1_slot11;
            var3 = var10.getSince;
            var12 = var3.bind(var10)(var13);
            var10 = _closure1_slot9;
            var3 = var10.getUserAffinity;
            var3 = var3.bind(var10)(var13);
            var11 = _closure1_slot11;
            var10 = var11.isFriend;
            var11 = var10.bind(var11)(var13);
            var10 = var4;
            if(!var11) { _fun0009_ip = 64; continue _fun0009 }
case 65:
            var10 = var4;
            if(!(var9 != var3)) { _fun0009_ip = 64; continue _fun0009 }
case 66:
            var3 = var3.dmProbability;
            var10 = var4;
            if(!(var3 > var6)) { _fun0009_ip = 64; continue _fun0009 }
case 67:
            var10 = var4;
            if(!(var9 != var12)) { _fun0009_ip = 64; continue _fun0009 }
case 68:
            var3 = var7.Date;
            var11 = var3.prototype;
            var11 = Object.create(var11, {constructor: {value: var3}});
            var16 = var11;
            var15 = var12;
            var3 = new var16[var3](var15, var14);
            var3 = var3 instanceof Object ? var3 : var11;
            var11 = _closure1_slot25;
            var11 = var11.bind(var2)(var3);
            var10 = var3;
            if(!var11) { _fun0009_ip = 64; continue _fun0009 }
case 69:
            var12 = _closure1_slot14;
            var11 = var12.push;
            var11 = var11.bind(var12)(var13);
            var12 = _closure1_slot17;
            var11 = {};
            var11['friendsSince'] = var3;
            var12[var13] = var11;
            var10 = var3;
case 64:
            var11 = var8.bind(var2)();
            var3 = var11.done;
            var4 = var10;
            var5 = var11;
            if(!var3) { _fun0009_ip = 63; continue _fun0009 }
case 62:
            var5 = _closure1_slot14;
            var4 = var5.sort;
            var3 = function(arg1, arg2) {
                var4 = _closure1_slot9;
                var3 = var4.compareByDmProbability;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var1 = _closure1_slot26;
            var1 = var1.bind(var2)();
case 60:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function resetFriendAnniversaries() {
        var3 = _closure1_slot14;
        var1 = 0;
        var3['length'] = var1;
        var3 = _closure1_slot15;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot16;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var1 = {};
        _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function cleanGiftUnreadNotificationLastDismissedTimes() {
        var4 = _closure1_slot23;
        var1 = undefined;
        var4 = var4.bind(var1)();
        var _closure2_slot0 = var4;
        var3 = _closure1_slot13;
        var5 = var3.giftUnreadNotificationLastDismissedTimes;
        var4 = var5.filter;
        var2 = function(arg1) {
            var2 = _closure2_slot0;
            var1 = arg1;
            var2 = var2 - var1;
            var1 = 604800000;
            var1 = var2 <= var1;
            return var1;
        };
        var2 = var4.bind(var5)(var2);
        var3['giftUnreadNotificationLastDismissedTimes'] = var2;
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function maybeUpdateMessageGiftIntentLastShownMap(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot13;
            var2 = var2.messageGiftIntentLastShownMap;
            var4 = var2[var3];
            var2 = null;
            if(!(var2 == var4)) { _fun0010_ip = 70; continue _fun0010 }
case 71:
            var2 = _closure1_slot13;
            var2 = var2.messageGiftIntentLastShownMap;
            var4 = _closure1_slot23;
            var1 = undefined;
            var1 = var4.bind(var1)();
            var2[var3] = var1;
case 70:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function generateFriendAnniversaries(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var7 = arg1;
            var4 = _closure1_slot28;
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
            if(!var4) { _fun0011_ip = 72; continue _fun0011 }
case 73:
            _closure1_slot18 = var7;
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
            var6 = var4.bind(var5)(var6, var7);
            var5 = var6.forEach;
            var4 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure1_slot11;
                    var2 = var4.getSince;
                    var5 = var2.bind(var4)(var3);
                    var2 = null;
                    if(!(var2 != var5)) { _fun0012_ip = 74; continue _fun0012 }
case 75:
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
                    var2 = _closure1_slot17;
                    var1 = {};
                    var1['friendsSince'] = var4;
                    var2[var3] = var1;
case 74:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4);
            var5 = _closure1_slot14;
            var4 = var5.sort;
            var3 = function(arg1, arg2) {
                var4 = _closure1_slot9;
                var3 = var4.compareByDmProbability;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var3 = _closure1_slot26;
            var2 = true;
            var2 = var3.bind(var1)(var2);
case 72:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var9 = global;
    var10 = var9.Object;
    var4 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var4 = var7[var2];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.Consents;
    var _closure1_slot12 = var4;
    var10 = {};
    var4 = {};
    var10['messageGiftIntentLastShownMap'] = var4;
    var4 = new Array(0);
    var10['lastShownFriendsListGiftIntents'] = var4;
    var4 = null;
    var10['friendsTabBadgeLastDismissedTime'] = var4;
    var11 = new Array(0);
    var10['giftUnreadNotificationLastDismissedTimes'] = var11;
    var11 = {};
    var10['profilePopoutGiftIntentsDismissMap'] = var11;
    var _closure1_slot13 = var10;
    var10 = new Array(0);
    var _closure1_slot14 = var10;
    var10 = var9.Set;
    var11 = var10.prototype;
    var11 = Object.create(var11, {constructor: {value: var10}});
    var15 = var11;
    var10 = new var15[var10](var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot15 = var10;
    var9 = var9.Set;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var15 = var10;
    var9 = new var15[var9](var14);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot16 = var9;
    var9 = {};
    var _closure1_slot17 = var9;
    var _closure1_slot18 = var4;
    var _closure1_slot19 = var4;
    var4 = 13;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.PersistedStore;
    var4 = function(arg1) {
        var4 = function PremiumGiftingIntentStore() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
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
                var1 = _closure1_slot20;
                var1 = var1.bind(var3)();
                if(var1) { _fun0013_ip = 76; continue _fun0013 }
case 77:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0013_ip = 78; continue _fun0013;
case 76:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 78:
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
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var3 = arg1;
                var4 = this;
                var1 = {};
                var2 = {};
                var1['messageGiftIntentLastShownMap'] = var2;
                var2 = new Array(0);
                var1['lastShownFriendsListGiftIntents'] = var2;
                var7 = null;
                var1['friendsTabBadgeLastDismissedTime'] = var7;
                var2 = new Array(0);
                var1['giftUnreadNotificationLastDismissedTimes'] = var2;
                var2 = {};
                var1['profilePopoutGiftIntentsDismissMap'] = var2;
                _closure1_slot13 = var1;
                if(!(var7 != var3)) { _fun0014_ip = 79; continue _fun0014 }
case 11:
                var2 = _closure1_slot13;
                var1 = var3.friendsTabBadgeLastDismissedTime;
                var2['friendsTabBadgeLastDismissedTime'] = var1;
                var5 = _closure1_slot13;
                var1 = global;
                var8 = var1.Array;
                var6 = var8.from;
                var2 = var3.lastShownFriendsListGiftIntents;
                var2 = var6.bind(var8)(var2);
                var5['lastShownFriendsListGiftIntents'] = var2;
                var5 = _closure1_slot13;
                var2 = {};
                var12 = var3.messageGiftIntentLastShownMap;
                var13 = var2;
                var6 = copyDataProperties(var13, var12);
                var5['messageGiftIntentLastShownMap'] = var2;
                var2 = _closure1_slot13;
                var6 = var1.Array;
                var5 = var6.from;
                var1 = var3.giftUnreadNotificationLastDismissedTimes;
                if(!(var7 == var1)) { _fun0014_ip = 80; continue _fun0014 }
case 81:
                var1 = new Array(0);
case 80:
                var1 = var5.bind(var6)(var1);
                var2['giftUnreadNotificationLastDismissedTimes'] = var1;
                var2 = _closure1_slot13;
                var1 = {};
                var12 = var3.profilePopoutGiftIntentsDismissMap;
                var13 = var1;
                var3 = copyDataProperties(var13, var12);
                var2['profilePopoutGiftIntentsDismissMap'] = var1;
case 79:
                var3 = var4.syncWith;
                var1 = _closure1_slot11;
                var2 = new Array(4);
                var2[0] = var1;
                var1 = _closure1_slot9;
                var2[1] = var1;
                var1 = _closure1_slot10;
                var2[2] = var1;
                var1 = _closure1_slot8;
                var2[3] = var1;
                var1 = _closure1_slot27;
                var1 = var3.bind(var4)(var2, var1);
                var2 = _closure1_slot23;
                var1 = undefined;
                var7 = var2.bind(var1)();
                var2 = _closure1_slot13;
                var5 = var2.messageGiftIntentLastShownMap;
                var8 = 1209600000;
                for(var2 in var5)
case 82:
                {
case 83:
                    var11 = var2;
                    var10 = _closure1_slot13;
                    var10 = var10.messageGiftIntentLastShownMap;
                    var10 = var10[var11];
                    var10 = var7 - var10;
                    if(!(var10 > var8)) { _fun0014_ip = 82; continue _fun0014 }
case 84:
                    var10 = _closure1_slot13;
                    var10 = var10.messageGiftIntentLastShownMap;
                    var10 = delete var10[var11];
                    _fun0014_ip = 82; continue _fun0014;
                }
case 85:
                var2 = _closure1_slot29;
                var2 = var2.bind(var1)();
                var2 = _closure1_slot23;
                var7 = var2.bind(var1)();
                var2 = _closure1_slot13;
                var5 = var2.profilePopoutGiftIntentsDismissMap;
                for(var2 in var5)
case 86:
                {
case 87:
                    var11 = var2;
                    var10 = _closure1_slot13;
                    var10 = var10.profilePopoutGiftIntentsDismissMap;
                    var10 = var10[var11];
                    var10 = var7 - var10;
                    if(!(var10 > var8)) { _fun0014_ip = 86; continue _fun0014 }
case 88:
                    var10 = _closure1_slot13;
                    var10 = var10.profilePopoutGiftIntentsDismissMap;
                    var10 = delete var10[var11];
                    _fun0014_ip = 86; continue _fun0014;
                }
case 89:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(16);
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
        var7 = 'getNextRecipientUserIDForNotification';
        var5['key'] = var7;
        var7 = function value() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var2 = this;
                var1 = var2.isNotificationCooldownActive;
                var1 = var1.bind(var2)();
                if(var1) { _fun0015_ip = 90; continue _fun0015 }
case 91:
                var1 = global;
                var3 = var1.Array;
                var2 = var3.from;
                var1 = _closure1_slot15;
                var3 = var2.bind(var3)(var1);
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = _closure1_slot13;
                    var2 = var1.messageGiftIntentLastShownMap;
                    var1 = arg1;
                    var2 = var2[var1];
                    var1 = null;
                    var1 = var1 == var2;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
case 90:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isNotificationCooldownActive';
        var5['key'] = var7;
        var7 = function value() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var3 = _closure1_slot29;
                var4 = undefined;
                var3 = var3.bind(var4)();
                var3 = _closure1_slot13;
                var3 = var3.giftUnreadNotificationLastDismissedTimes;
                var6 = var3.length;
                var5 = 0;
                if(!(var5 !== var6)) { _fun0016_ip = 92; continue _fun0016 }
case 42:
                var6 = var3.length;
                var5 = 5;
                if(!(!(var6 >= var5))) { _fun0016_ip = 93; continue _fun0016 }
case 94:
                var2 = _closure1_slot23;
                var2 = var2.bind(var4)();
                var _closure3_slot0 = var2;
                var2 = var3.filter;
                var1 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var2 = var2 - var1;
                    var1 = 86400000;
                    var1 = var2 <= var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var2 = var1.length;
                var1 = 1;
                var1 = var2 >= var1;
                return var1;
case 93:
                var1 = true;
                return var1;
case 92:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'canShowFriendsTabBadge';
        var5['key'] = var7;
        var7 = function value() {
            var2 = function hasNewHighAffinityFriendAnniversaries() {
                var1 = global;
                var3 = var1.Array;
                var2 = var3.from;
                var1 = _closure1_slot16;
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
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var3 = _closure1_slot17;
                var1 = arg1;
                var3 = var3[var1];
                var1 = null;
                var4 = var1 == var3;
                var1 = 0;
                if(var4) { _fun0017_ip = 95; continue _fun0017 }
case 96:
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
case 95:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'canShowProfilePopoutGiftIntents';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var4 = arg1;
                var1 = _closure1_slot13;
                var1 = var1.profilePopoutGiftIntentsDismissMap;
                var1 = var1[var4];
                var3 = null;
                var1 = var3 == var1;
                if(!var1) { _fun0018_ip = 97; continue _fun0018 }
case 98:
                var2 = _closure1_slot17;
                var2 = var2[var4];
                var1 = var3 != var2;
case 97:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
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
        var1[8] = var5;
        var5 = {};
        var7 = 'getDevToolTotalFriendAnniversaries';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getDevToolCurrentDate';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot19;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getHighestAffinityFriendAnniversaries';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Array;
            var2 = var3.from;
            var1 = _closure1_slot15;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getHighAffinityFriendAnniversaries';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Array;
            var2 = var3.from;
            var1 = _closure1_slot16;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getGiftUnreadNotificationLastDismissedTimes';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            var1 = var1.giftUnreadNotificationLastDismissedTimes;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getMessageGiftIntentLastShownMap';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            var1 = var1.messageGiftIntentLastShownMap;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getProfilePopoutGiftIntentsDismissMap';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot13;
            var1 = var1.profilePopoutGiftIntentsDismissMap;
            return var1;
        };
        var5['value'] = var6;
        var1[15] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'PremiumGiftingIntentStore';
    var9['displayName'] = var4;
    var9['persistKey'] = var4;
    var4 = new Array(3);
    var10 = function(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            var1 = var3;
            if(!(var4 != var1)) { _fun0019_ip = 99; continue _fun0019 }
case 100:
            var2 = {};
            var6 = var3.friendsTabBadgeLastDismissedTime;
            var7 = var4 != var6;
            var5 = null;
            if(!var7) { _fun0019_ip = 40; continue _fun0019 }
case 98:
            var5 = var6;
case 40:
            var2['friendsTabBadgeLastDismissedTime'] = var5;
            var3 = var3.lastShownFriendsListGiftIntents;
            if(!(var4 == var3)) { _fun0019_ip = 77; continue _fun0019 }
case 101:
            var3 = new Array(0);
case 77:
            var2['lastShownFriendsListGiftIntents'] = var3;
            var3 = {};
            var2['messageGiftIntentLastShownMap'] = var3;
            var1 = var2;
case 99:
            return var1;
        }
    };
    var4[0] = var10;
    var10 = function(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            var1 = var3;
            if(!(var4 != var1)) { _fun0020_ip = 34; continue _fun0020 }
case 100:
            var2 = {};
            var2['friendsTabBadgeLastDismissedTime'] = var4;
            var5 = var3.lastShownFriendsListGiftIntents;
            if(!(var4 == var5)) { _fun0020_ip = 37; continue _fun0020 }
case 98:
            var5 = new Array(0);
case 37:
            var2['lastShownFriendsListGiftIntents'] = var5;
            var3 = var3.messageGiftIntentLastShownMap;
            if(!(var4 == var3)) { _fun0020_ip = 70; continue _fun0020 }
case 94:
            var3 = {};
case 70:
            var2['messageGiftIntentLastShownMap'] = var3;
            var3 = new Array(0);
            var2['giftUnreadNotificationLastDismissedTimes'] = var3;
            var1 = var2;
case 34:
            return var1;
        }
    };
    var4[1] = var10;
    var10 = function(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            var1 = var3;
            if(!(var4 != var1)) { _fun0021_ip = 102; continue _fun0021 }
case 100:
            var2 = {};
            var2['friendsTabBadgeLastDismissedTime'] = var4;
            var5 = var3.lastShownFriendsListGiftIntents;
            if(!(var4 == var5)) { _fun0021_ip = 37; continue _fun0021 }
case 98:
            var5 = new Array(0);
case 37:
            var2['lastShownFriendsListGiftIntents'] = var5;
            var5 = var3.messageGiftIntentLastShownMap;
            if(!(var4 == var5)) { _fun0021_ip = 70; continue _fun0021 }
case 94:
            var5 = {};
case 70:
            var2['messageGiftIntentLastShownMap'] = var5;
            var3 = var3.giftUnreadNotificationLastDismissedTimes;
            if(!(var4 == var3)) { _fun0021_ip = 76; continue _fun0021 }
case 103:
            var3 = new Array(0);
case 76:
            var2['giftUnreadNotificationLastDismissedTimes'] = var3;
            var3 = {};
            var2['profilePopoutGiftIntentsDismissMap'] = var3;
            var1 = var2;
case 102:
            return var1;
        }
    };
    var4[2] = var10;
    var9['migrations'] = var4;
    var4 = 14;
    var4 = var7[var4];
    var14 = var8.bind(var1)(var4);
    var4 = {};
    var10 = function handleConnectionOpen() {
        var2 = _closure1_slot28;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var4['CONNECTION_OPEN'] = var10;
    var10 = function handleLogout() {
        var2 = {};
        var1 = {};
        var2['messageGiftIntentLastShownMap'] = var1;
        var1 = new Array(0);
        var2['lastShownFriendsListGiftIntents'] = var1;
        var1 = null;
        var2['friendsTabBadgeLastDismissedTime'] = var1;
        var1 = new Array(0);
        var2['giftUnreadNotificationLastDismissedTimes'] = var1;
        var1 = {};
        var2['profilePopoutGiftIntentsDismissMap'] = var1;
        _closure1_slot13 = var2;
        var2 = _closure1_slot28;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var4['LOGOUT'] = var10;
    var10 = function handleMessageGiftIntentShown(arg1) {
        var1 = arg1;
        var3 = var1.recipientUserId;
        var2 = _closure1_slot30;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var4['MESSAGE_GIFT_INTENT_SHOWN'] = var10;
    var10 = function handleFriendsListGiftIntentsShown() {
        var2 = _closure1_slot13;
        var3 = global;
        var4 = var3.Array;
        var3 = var4.from;
        var1 = _closure1_slot14;
        var1 = var3.bind(var4)(var1);
        var2['lastShownFriendsListGiftIntents'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['FRIENDS_LIST_GIFT_INTENTS_SHOWN'] = var10;
    var10 = function handleGiftUnreadNotificationDismiss() {
        var2 = _closure1_slot13;
        var4 = var2.giftUnreadNotificationLastDismissedTimes;
        var3 = var4.push;
        var2 = _closure1_slot23;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['GIFT_UNREAD_NOTIFICATION_DISMISS'] = var10;
    var10 = function handleGiftIntentFlowPurchasedGift(arg1) {
        var1 = arg1;
        var3 = var1.recipientUserId;
        var2 = _closure1_slot30;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var4['GIFT_INTENT_FLOW_PURCHASED_GIFT'] = var10;
    var10 = function handleProfilePopoutGiftIntentsDismiss(arg1) {
        var1 = arg1;
        var4 = var1.recipientUserId;
        var2 = _closure1_slot13;
        var3 = var2.profilePopoutGiftIntentsDismissMap;
        var2 = _closure1_slot23;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var3[var4] = var2;
        return var1;
    };
    var4['PROFILE_POPOUT_GIFT_INTENTS_DISMISS'] = var10;
    var10 = function handleDevToolResetFriendsListGiftIntentsShown() {
        var2 = _closure1_slot13;
        var1 = new Array(0);
        var2['lastShownFriendsListGiftIntents'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET'] = var10;
    var10 = function handleDevToolResetGiftMessageCooldown() {
        var2 = _closure1_slot13;
        var1 = {};
        var2['messageGiftIntentLastShownMap'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET'] = var10;
    var10 = function handleDevToolResetGiftUnreadNotificationCooldown() {
        var2 = _closure1_slot13;
        var1 = new Array(0);
        var2['giftUnreadNotificationLastDismissedTimes'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET'] = var10;
    var10 = function handleDevToolSetFriendAnniversaryCount(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var4 = var1.total;
            var2 = null;
            if(!(var2 != var4)) { _fun0022_ip = 104; continue _fun0022 }
case 105:
            var3 = _closure1_slot31;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            return var1;
case 104:
            _closure1_slot18 = var2;
            var2 = _closure1_slot27;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var4['DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT'] = var10;
    var10 = function handleDevToolSetCurrentDate(arg1) {
        var1 = arg1;
        var2 = var1.date;
        _closure1_slot19 = var2;
        var1 = undefined;
        return var1;
    };
    var4['DEV_TOOLS_SET_CURRENT_DATE'] = var10;
    var10 = function handleDevToolResetCurrentDate() {
        var1 = null;
        _closure1_slot19 = var1;
        var1 = undefined;
        return var1;
    };
    var4['DEV_TOOLS_RESET_CURRENT_DATE'] = var10;
    var5 = function handleDevToolResetProfilePopoutGiftIntentsDismiss() {
        var2 = _closure1_slot13;
        var1 = {};
        var2['profilePopoutGiftIntentsDismissMap'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var15 = var5;
    var13 = var4;
    var4 = new var15[var9](var14, var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/gifting/PremiumGiftingIntentStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['FRIENDS_LIST_ANNIVERSARY_DISPLAY_LIMIT'] = var2;
    var2 = 604800000;
    var3['FRIENDS_TAB_BADGE_COOLDOWN_MS'] = var2;
    return var1;
})();