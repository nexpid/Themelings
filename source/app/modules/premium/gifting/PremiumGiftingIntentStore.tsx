// app/modules/premium/gifting/PremiumGiftingIntentStore.tsx
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
            if(var2) { _fun0002_ip = 344; continue _fun0002 }
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
            var9 = _closure1_slot20;
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
            var7 = _closure1_slot20;
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
 344:
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
    var _closure1_slot20 = var1;
    var1 = function isFriendAnniversaryForYear(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
            if(!var1) { _fun0005_ip = 217; continue _fun0005 }
 213:
            var1 = var3 < var2;
 217:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function isFriendAnniversary(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot21;
            var1 = var5.getFullYear;
            var1 = var1.bind(var5)();
            var4 = undefined;
            var3 = var3.bind(var4)(var5, var1);
            var1 = !var3;
            if(var3) { _fun0006_ip = 82; continue _fun0006 }
 34:
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
 82:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function updateFriendAnniversaries() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = _closure1_slot17;
            var10 = null;
            if(!(var10 != var1)) { _fun0007_ip = 33; continue _fun0007 }
 13:
            var4 = _closure1_slot26;
            var3 = _closure1_slot17;
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            _fun0007_ip = 462; continue _fun0007;
 33:
            var1 = _closure1_slot24;
            var9 = undefined;
            var1 = var1.bind(var9)();
            var4 = _closure1_slot10;
            var3 = var4.hasConsented;
            var1 = _closure1_slot12;
            var1 = var1.PERSONALIZATION;
            var1 = var3.bind(var4)(var1);
            if(!var1) { _fun0007_ip = 462; continue _fun0007 }
 74:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var1 = var3.bind(var9)(var1);
            var5 = var1.FriendAnniversariesExperiment;
            var4 = var5.getCurrentConfig;
            var3 = {};
            var1 = 'PremiumGiftingIntentStore updateFriendAnniversaries';
            var3['location'] = var1;
            var1 = {};
            var6 = false;
            var1['autoTrackExposure'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            var1 = var1.enabled;
            if(!var1) { _fun0007_ip = 462; continue _fun0007 }
 144:
            var3 = _closure1_slot19;
            var4 = _closure1_slot11;
            var1 = var4.getFriendIDs;
            var1 = var1.bind(var4)();
            var8 = var3.bind(var9)(var1);
            var4 = var8.bind(var9)();
            var3 = var4.done;
            var1 = global;
            var6 = 0;
            var7 = 15;
            var5 = var4;
            var4 = undefined;
            if(var3) { _fun0007_ip = 390; continue _fun0007 }
 194:
            var14 = var5.value;
            var3 = _closure1_slot14;
            var3 = var3.length;
            if(!(!(var3 >= var7))) { _fun0007_ip = 390; continue _fun0007 }
 215:
            var11 = _closure1_slot11;
            var3 = var11.getSince;
            var13 = var3.bind(var11)(var14);
            var11 = _closure1_slot9;
            var3 = var11.getUserAffinity;
            var3 = var3.bind(var11)(var14);
            var12 = _closure1_slot11;
            var11 = var12.isIgnored;
            var12 = var11.bind(var12)(var14);
            var11 = var4;
            if(var12) { _fun0007_ip = 369; continue _fun0007 }
 266:
            var11 = var4;
            if(!(var10 != var3)) { _fun0007_ip = 369; continue _fun0007 }
 273:
            var3 = var3.communicationProbability;
            var11 = var4;
            if(!(var3 > var6)) { _fun0007_ip = 369; continue _fun0007 }
 286:
            var11 = var4;
            if(!(var10 != var13)) { _fun0007_ip = 369; continue _fun0007 }
 293:
            var3 = var1.Date;
            var12 = var3.prototype;
            var12 = Object.create(var12, {constructor: {value: var3}});
            var18 = var12;
            var17 = var13;
            var3 = new var18[var3](var17, var16);
            var3 = var3 instanceof Object ? var3 : var12;
            var12 = _closure1_slot22;
            var12 = var12.bind(var9)(var3);
            var11 = var3;
            if(!var12) { _fun0007_ip = 369; continue _fun0007 }
 337:
            var13 = _closure1_slot14;
            var12 = var13.push;
            var12 = var12.bind(var13)(var14);
            var13 = _closure1_slot16;
            var12 = {};
            var12['friendsSince'] = var3;
            var13[var14] = var12;
            var11 = var3;
 369:
            var12 = var8.bind(var9)();
            var3 = var12.done;
            var4 = var11;
            var5 = var12;
            if(!var3) { _fun0007_ip = 194; continue _fun0007 }
 390:
            var5 = _closure1_slot14;
            var4 = var5.sort;
            var3 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
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
                    if(!var6) { _fun0008_ip = 56; continue _fun0008 }
 50:
                    var1 = var5.communicationProbability;
 56:
                    var4 = var4 != var3;
                    var2 = 0;
                    if(!var4) { _fun0008_ip = 71; continue _fun0008 }
 65:
                    var2 = var3.communicationProbability;
 71:
                    var1 = var2 - var1;
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            var4 = var1.Set;
            var5 = _closure1_slot14;
            var3 = var5.slice;
            var1 = 5;
            var17 = var3.bind(var5)(var6, var1);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var18 = var3;
            var1 = new var18[var4](var17, var16);
            var1 = var1 instanceof Object ? var1 : var3;
            _closure1_slot15 = var1;
 462:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
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
    var _closure1_slot24 = var1;
    var1 = function maybeUpdateMessageGiftIntentLastShownMap(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot13;
            var2 = var2.messageGiftIntentLastShownMap;
            var4 = var2[var3];
            var2 = null;
            if(!(var2 == var4)) { _fun0009_ip = 57; continue _fun0009 }
 26:
            var1 = _closure1_slot13;
            var2 = var1.messageGiftIntentLastShownMap;
            var1 = global;
            var4 = var1.Date;
            var1 = var4.now;
            var1 = var1.bind(var4)();
            var2[var3] = var1;
 57:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function generateFriendAnniversaries(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var7 = arg1;
            var4 = _closure1_slot24;
            var1 = undefined;
            var4 = var4.bind(var1)();
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 10;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var8 = var4.FriendAnniversariesExperiment;
            var6 = var8.getCurrentConfig;
            var5 = {};
            var4 = 'PremiumGiftingIntentStore generateFriendAnniversaries';
            var5['location'] = var4;
            var4 = {};
            var9 = false;
            var4['autoTrackExposure'] = var9;
            var4 = var6.bind(var8)(var5, var4);
            var4 = var4.enabled;
            if(!var4) { _fun0010_ip = 224; continue _fun0010 }
 88:
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
 0:
                    var3 = arg1;
                    var4 = _closure1_slot11;
                    var2 = var4.getSince;
                    var5 = var2.bind(var4)(var3);
                    var2 = null;
                    if(!(var2 != var5)) { _fun0011_ip = 87; continue _fun0011 }
 27:
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
 87:
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
            var11 = var6.bind(var7)(var4, var2);
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var12 = var4;
            var2 = new var12[var5](var11, var10);
            var2 = var2 instanceof Object ? var2 : var4;
            _closure1_slot15 = var2;
 224:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
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
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)();
                if(var1) { _fun0012_ip = 69; continue _fun0012 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0012_ip = 105; continue _fun0012;
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
        var1 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var3 = arg1;
                var4 = this;
                var2 = {};
                var1 = {};
                var2['messageGiftIntentLastShownMap'] = var1;
                var1 = new Array(0);
                var2['lastShownFriendsListGiftIntents'] = var1;
                var1 = null;
                var2['friendsTabBadgeLastDismissedTime'] = var1;
                _closure1_slot13 = var2;
                if(!(var1 != var3)) { _fun0013_ip = 117; continue _fun0013 }
 42:
                var2 = _closure1_slot13;
                var1 = var3.friendsTabBadgeLastDismissedTime;
                var2['friendsTabBadgeLastDismissedTime'] = var1;
                var2 = _closure1_slot13;
                var1 = global;
                var6 = var1.Array;
                var5 = var6.from;
                var1 = var3.lastShownFriendsListGiftIntents;
                var1 = var5.bind(var6)(var1);
                var2['lastShownFriendsListGiftIntents'] = var1;
                var2 = _closure1_slot13;
                var1 = {};
                var13 = var3.messageGiftIntentLastShownMap;
                var14 = var1;
                var3 = copyDataProperties(var14, var13);
                var2['messageGiftIntentLastShownMap'] = var1;
 117:
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
                var1 = _closure1_slot23;
                var1 = var3.bind(var4)(var2, var1);
                var1 = _closure1_slot13;
                var6 = var1.messageGiftIntentLastShownMap;
                var2 = global;
                var1 = 1209600000;
                for(var3 in var6)
 195:
                {
 204:
                    var10 = var3;
                    var9 = _closure1_slot13;
                    var9 = var9.messageGiftIntentLastShownMap;
                    var11 = var9[var10];
                    var12 = var2.Date;
                    var9 = var12.now;
                    var9 = var9.bind(var12)();
                    var9 = var9 - var11;
                    if(!(var9 > var1)) { _fun0013_ip = 195; continue _fun0013 }
 244:
                    var9 = _closure1_slot13;
                    var9 = var9.messageGiftIntentLastShownMap;
                    var9 = delete var9[var10];
                    _fun0013_ip = 195; continue _fun0013;
                }
 260:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(8);
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
 0:
                var1 = arg1;
                var4 = var1.userId;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 10;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var3);
                var6 = var1.FriendAnniversariesExperiment;
                var5 = var6.getCurrentConfig;
                var3 = {};
                var1 = 'PremiumGiftingIntentStore isTopAffinityFriendAnniversary';
                var3['location'] = var1;
                var1 = {};
                var7 = false;
                var1['autoTrackExposure'] = var7;
                var1 = var5.bind(var6)(var3, var1);
                var1 = var1.enabled;
                var3 = !var1;
                var1 = !var3;
                if(var3) { _fun0014_ip = 100; continue _fun0014 }
 86:
                var3 = _closure1_slot15;
                var2 = var3.has;
                var1 = var2.bind(var3)(var4);
 100:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'canShowFriendsTabBadge';
        var5['key'] = var7;
        var7 = function value() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var1 = _closure1_slot13;
                var1 = var1.friendsTabBadgeLastDismissedTime;
                var2 = null;
                var3 = var2 != var1;
                var2 = 0;
                if(!var3) { _fun0015_ip = 27; continue _fun0015 }
 24:
                var2 = var1;
 27:
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2 = var1 - var2;
                var1 = 604800000;
                var2 = var2 <= var1;
                var1 = !var2;
                if(var2) { _fun0015_ip = 79; continue _fun0015 }
 64:
                var3 = function hasNewTopAffinityFriendAnniversaries() {
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
                var2 = undefined;
                var1 = var3.bind(var2)();
 79:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getFriendAnniversaryYears';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var3 = _closure1_slot16;
                var1 = arg1;
                var3 = var3[var1];
                var1 = null;
                var4 = var1 == var3;
                var1 = 0;
                if(var4) { _fun0016_ip = 94; continue _fun0016 }
 25:
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
 94:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
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
        var1[6] = var5;
        var5 = {};
        var7 = 'getDevToolTotalFriendAnniversaries';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'PremiumGiftingIntentStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = new Array(1);
    var9 = function(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var3 = arg1;
            var4 = null;
            var1 = var3;
            if(!(var4 != var1)) { _fun0017_ip = 66; continue _fun0017 }
 12:
            var2 = {};
            var6 = var3.friendsTabBadgeLastDismissedTime;
            var7 = var4 != var6;
            var5 = null;
            if(!var7) { _fun0017_ip = 32; continue _fun0017 }
 29:
            var5 = var6;
 32:
            var2['friendsTabBadgeLastDismissedTime'] = var5;
            var3 = var3.lastShownFriendsListGiftIntents;
            if(!(var4 == var3)) { _fun0017_ip = 51; continue _fun0017 }
 47:
            var3 = new Array(0);
 51:
            var2['lastShownFriendsListGiftIntents'] = var3;
            var3 = {};
            var2['messageGiftIntentLastShownMap'] = var3;
            var1 = var2;
 66:
            return var1;
        }
    };
    var2[0] = var9;
    var8['migrations'] = var2;
    var2 = 14;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnectionOpen() {
        var2 = _closure1_slot24;
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
        _closure1_slot13 = var2;
        var2 = _closure1_slot24;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['LOGOUT'] = var9;
    var9 = function handleMessageGiftIntentShown(arg1) {
        var1 = arg1;
        var3 = var1.recipientUserId;
        var2 = _closure1_slot25;
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
    var9 = function handleFriendsTabBadgeDismiss() {
        var2 = _closure1_slot13;
        var1 = global;
        var3 = var1.Date;
        var1 = var3.now;
        var1 = var1.bind(var3)();
        var2['friendsTabBadgeLastDismissedTime'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['FRIENDS_TAB_BADGE_DISMISS'] = var9;
    var9 = function handleGiftIntentFlowPurchasedGift(arg1) {
        var1 = arg1;
        var3 = var1.recipientUserId;
        var2 = _closure1_slot25;
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
    var9 = function handleDevToolResetFriendsTabBadgeCooldown() {
        var2 = _closure1_slot13;
        var1 = null;
        var2['friendsTabBadgeLastDismissedTime'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['DEV_TOOLS_FRIENDS_TAB_BADGE_COOLDOWN_RESET'] = var9;
    var4 = function handleDevToolSetFriendAnniversaryCount(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var4 = var1.total;
            var2 = null;
            if(!(var2 != var4)) { _fun0018_ip = 31; continue _fun0018 }
 15:
            var3 = _closure1_slot26;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            return var1;
 31:
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
    return var1;
})();