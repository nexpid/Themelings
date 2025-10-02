// app/modules/potions/components/web/utils/ConsumableUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
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
            var9 = _closure1_slot11;
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
            var7 = _closure1_slot11;
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
    var _closure1_slot10 = var1;
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
    var _closure1_slot11 = var1;
    var4 = function useConsumableFetchUnconsumedEntitlement(arg1) {
        var10 = arg1;
        var _closure2_slot0 = var10;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 9;
        var2 = var4[var2];
        var8 = undefined;
        var7 = var3.bind(var8)(var2);
        var5 = var7.useUserCanPurchaseMessageConfetti;
        var2 = 'Utils.tsx';
        var9 = var5.bind(var7)(var2);
        var _closure2_slot1 = var9;
        var2 = 7;
        var2 = var4[var2];
        var5 = var3.bind(var8)(var2);
        var4 = var5.useStateFromStoresArray;
        var2 = _closure1_slot8;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var3 = _closure1_slot8;
            var1 = var3.isEntitlementFetched;
            var4 = _closure2_slot0;
            var3 = var1.bind(var3)(var4);
            var1 = new Array(5);
            var1[0] = var3;
            var5 = _closure1_slot8;
            var3 = var5.fetchPotionCount;
            var3 = var3.bind(var5)(var4);
            var1[1] = var3;
            var5 = _closure1_slot8;
            var3 = var5.isEntitlementFetching;
            var3 = var3.bind(var5)(var4);
            var1[2] = var3;
            var5 = _closure1_slot8;
            var3 = var5.getEntitlement;
            var3 = var3.bind(var5)(var4);
            var1[3] = var3;
            var3 = _closure1_slot8;
            var2 = var3.getErrored;
            var2 = var2.bind(var3)(var4);
            var1[4] = var2;
            return var1;
        };
        var4 = var4.bind(var5)(var3, var2);
        var3 = _closure1_slot3;
        var2 = 5;
        var7 = var3.bind(var8)(var4, var2);
        var2 = 0;
        var3 = var7[var2];
        var _closure2_slot2 = var3;
        var2 = 1;
        var4 = var7[var2];
        var2 = 2;
        var11 = var7[var2];
        var _closure2_slot3 = var11;
        var2 = 3;
        var5 = var7[var2];
        var2 = 4;
        var2 = var7[var2];
        var _closure2_slot4 = var2;
        var7 = _closure1_slot4;
        var6 = new Array(5);
        var6[0] = var3;
        var6[1] = var11;
        var6[2] = var10;
        var6[3] = var9;
        var6[4] = var2;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure2_slot4;
                var2 = null;
                var2 = var2 != var3;
                if(var2) { _fun0004_ip = 29; continue _fun0004 }
case 36:
                var2 = _closure2_slot2;
case 29:
                if(var2) { _fun0004_ip = 37; continue _fun0004 }
case 31:
                var2 = _closure2_slot3;
case 37:
                if(var2) { _fun0004_ip = 38; continue _fun0004 }
case 3:
                var3 = _closure2_slot1;
                var2 = !var3;
case 38:
                if(var2) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.fetchConsumableEntitlement;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
case 39:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var7.bind(var8)(var1, var6);
        var1 = {};
        var1['entitlement'] = var5;
        var1['numPotions'] = var4;
        var1['fetchedEntitlement'] = var3;
        var1['error'] = var2;
        return var1;
    };
    var _closure1_slot12 = var4;
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
    var5 = var5.useEffect;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.EntitlementTypes;
    var _closure1_slot9 = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/potions/components/web/utils/ConsumableUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useConsumableFetchSkuPrice(arg1) {
        var8 = arg1;
        var _closure2_slot0 = var8;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 7;
        var2 = var4[var2];
        var7 = undefined;
        var6 = var3.bind(var7)(var2);
        var4 = var6.useStateFromStoresArray;
        var2 = _closure1_slot8;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var3 = _closure1_slot8;
            var1 = var3.isFetchingPrice;
            var4 = _closure2_slot0;
            var3 = var1.bind(var3)(var4);
            var1 = new Array(3);
            var1[0] = var3;
            var5 = _closure1_slot8;
            var3 = var5.getPrice;
            var3 = var3.bind(var5)(var4);
            var1[1] = var3;
            var3 = _closure1_slot8;
            var2 = var3.getErrored;
            var2 = var2.bind(var3)(var4);
            var1[2] = var2;
            return var1;
        };
        var4 = var4.bind(var6)(var3, var2);
        var3 = _closure1_slot3;
        var2 = 3;
        var6 = var3.bind(var7)(var4, var2);
        var2 = 0;
        var3 = var6[var2];
        var _closure2_slot1 = var3;
        var2 = 1;
        var4 = var6[var2];
        var _closure2_slot2 = var4;
        var2 = 2;
        var2 = var6[var2];
        var _closure2_slot3 = var2;
        var6 = _closure1_slot4;
        var5 = new Array(4);
        var5[0] = var3;
        var5[1] = var4;
        var5[2] = var2;
        var5[3] = var8;
        var1 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0005_ip = 29; continue _fun0005 }
case 41:
                var4 = _closure2_slot2;
                var3 = null;
                var2 = var3 != var4;
case 29:
                if(var2) { _fun0005_ip = 37; continue _fun0005 }
case 31:
                var2 = _closure2_slot3;
case 37:
                if(var2) { _fun0005_ip = 35; continue _fun0005 }
case 3:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.fetchConsumablePrice;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
case 35:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var6.bind(var7)(var1, var5);
        var1 = {};
        var1['price'] = var4;
        var1['fetchingPrice'] = var3;
        var1['error'] = var2;
        return var1;
    };
    var3['useConsumableFetchSkuPrice'] = var5;
    var3['useConsumableFetchUnconsumedEntitlement'] = var4;
    var4 = function useSkipHDPotionAnimation() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 10;
            var3 = var5[var3];
            var7 = undefined;
            var3 = var4.bind(var7)(var3);
            var3 = var3.name;
            var4 = null;
            var5 = var4 != var3;
            var4 = 'unknown';
            if(!var5) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var4 = var3;
case 42:
            var3 = var4.toLowerCase;
            var4 = var3.bind(var4)();
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 7;
            var3 = var8[var5];
            var11 = var6.bind(var7)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var2 = _closure1_slot7;
                var1 = var2.isFocused;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var10.bind(var11)(var9, var3);
            var5 = var8[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.useStateFromStores;
            var7 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var2 = var5.bind(var6)(var2, var1);
            var1 = 'safari';
            var1 = var1 === var4;
            if(var1) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var1 = !var3;
case 44:
            if(var1) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var1 = var2;
case 46:
            return var1;
        }
    };
    var3['useSkipHDPotionAnimation'] = var4;
    var4 = function canAddConfettiToMessageOnSend(arg1, arg2, arg3, arg4) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arg4;
            var1 = arg2;
            var1 = !var1;
            if(!var1) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var4 = null;
            var2 = arg3;
            var2 = var4 == var2;
            if(!var2) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var6 = '';
            var3 = arg1;
            var3 = var6 !== var3;
            if(var3) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var4 = var4 != var5;
            if(!var4) { _fun0007_ip = 28; continue _fun0007 }
case 43:
            var6 = var5.length;
            var5 = 0;
            var4 = var6 > var5;
case 28:
            var3 = var4;
case 52:
            var2 = var3;
case 50:
            var1 = var2;
case 48:
            return var1;
        }
    };
    var3['canAddConfettiToMessageOnSend'] = var4;
    var4 = function constructCreateConfettiPotionRequest(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 == var3)) { _fun0008_ip = 54; continue _fun0008 }
case 55:
            var1 = undefined;
            return var1;
case 54:
            var1 = {};
            var2 = {};
            var4 = var3.emoji;
            var4 = var4.id;
            var2['id'] = var4;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 8;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var4 = var5.convertEmojiToEmojiName;
            var3 = var3.emoji;
            var3 = var4.bind(var5)(var3);
            var2['name'] = var3;
            var1['message_emoji'] = var2;
            return var1;
        }
    };
    var3['constructCreateConfettiPotionRequest'] = var4;
    var4 = function getSentConfettiPotionEmoji(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0009_ip = 56; continue _fun0009 }
case 49:
            var3 = var2.potions;
            if(!(var1 != var3)) { _fun0009_ip = 57; continue _fun0009 }
case 58:
            var3 = var2.potions;
            var4 = var3.length;
            var3 = 0;
            if(!(var3 !== var4)) { _fun0009_ip = 59; continue _fun0009 }
case 43:
            var4 = _closure1_slot10;
            var2 = var2.potions;
            var10 = undefined;
            var9 = var4.bind(var10)(var2);
            var4 = var9.bind(var10)();
            var2 = var4.done;
            var8 = 11;
            var7 = var4;
            var6 = undefined;
            var5 = undefined;
            if(var2) { _fun0009_ip = 60; continue _fun0009 }
case 61:
            var2 = var7.value;
            var13 = var2.type;
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var4 = var12.bind(var10)(var4);
            var4 = var4.MessagePotionTypes;
            var4 = var4.CONFETTI;
            var12 = var5;
            if(!(var13 === var4)) { _fun0009_ip = 62; continue _fun0009 }
case 63:
            var13 = var2.used_by;
            var14 = _closure1_slot6;
            var4 = var14.getCurrentUser;
            var14 = var4.bind(var14)();
            var15 = var1 == var14;
            var4 = undefined;
            if(var15) { _fun0009_ip = 17; continue _fun0009 }
case 64:
            var4 = var14.id;
case 17:
            var6 = var14;
            var12 = var5;
            if(!(var13 === var4)) { _fun0009_ip = 62; continue _fun0009 }
case 16:
            var13 = var2.emoji;
            var15 = var1 == var13;
            var4 = undefined;
            if(var15) { _fun0009_ip = 65; continue _fun0009 }
case 66:
            var4 = var13.length;
case 65:
            var6 = var14;
            var12 = var13;
            if(!(!(var4 > var3))) { _fun0009_ip = 67; continue _fun0009 }
case 62:
            var13 = var9.bind(var10)();
            var4 = var13.done;
            var5 = var12;
            var7 = var13;
            if(var4) { _fun0009_ip = 60; continue _fun0009 }
case 68:
            _fun0009_ip = 61; continue _fun0009;
case 67:
            var2 = var2.emoji;
            var2 = var2[var3];
            return var2;
case 60:
            return var1;
case 59:
            return var1;
case 57:
            return var1;
case 56:
            return var1;
        }
    };
    var3['getSentConfettiPotionEmoji'] = var4;
    var2 = function() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = _closure1_slot12;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 12;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var5.bind(var2)(var1);
            var1 = var1.CONFETTI_POTION_SKU_ID;
            var1 = var3.bind(var2)(var1);
            var5 = var1.entitlement;
            var3 = var1.numPotions;
            var2 = null;
            var1 = var2 != var5;
            if(!var1) { _fun0010_ip = 39; continue _fun0010 }
case 7:
            var5 = var5.type;
            var4 = _closure1_slot9;
            var4 = var4.PURCHASE;
            var1 = var5 === var4;
case 39:
            if(!var1) { _fun0010_ip = 69; continue _fun0010 }
case 70:
            var1 = var2 != var3;
case 69:
            if(!var1) { _fun0010_ip = 11; continue _fun0010 }
case 61:
            var2 = 0;
            var1 = var3 > var2;
case 11:
            return var1;
        }
    };
    var3['useHasRemainingConfettiPotions'] = var2;
    return var1;
})();