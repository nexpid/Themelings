// app/modules/potions/components/web/utils/ConsumableUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
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
            var9 = _closure1_slot11;
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
            var7 = _closure1_slot11;
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
 344:
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
 0:
                var3 = _closure2_slot4;
                var2 = null;
                var2 = var2 != var3;
                if(var2) { _fun0004_ip = 20; continue _fun0004 }
 16:
                var2 = _closure2_slot2;
 20:
                if(var2) { _fun0004_ip = 27; continue _fun0004 }
 23:
                var2 = _closure2_slot3;
 27:
                if(var2) { _fun0004_ip = 37; continue _fun0004 }
 30:
                var3 = _closure2_slot1;
                var2 = !var3;
 37:
                if(var2) { _fun0004_ip = 80; continue _fun0004 }
 40:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.fetchConsumableEntitlement;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
 80:
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
 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0005_ip = 20; continue _fun0005 }
 10:
                var4 = _closure2_slot2;
                var3 = null;
                var2 = var3 != var4;
 20:
                if(var2) { _fun0005_ip = 27; continue _fun0005 }
 23:
                var2 = _closure2_slot3;
 27:
                if(var2) { _fun0005_ip = 70; continue _fun0005 }
 30:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.fetchConsumablePrice;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
 70:
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
 0:
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
            if(!var5) { _fun0006_ip = 48; continue _fun0006 }
 45:
            var4 = var3;
 48:
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
            if(var1) { _fun0006_ip = 163; continue _fun0006 }
 160:
            var1 = !var3;
 163:
            if(var1) { _fun0006_ip = 169; continue _fun0006 }
 166:
            var1 = var2;
 169:
            return var1;
        }
    };
    var3['useSkipHDPotionAnimation'] = var4;
    var4 = function canAddConfettiToMessageOnSend(arg1, arg2, arg3, arg4) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var5 = arg4;
            var1 = arg2;
            var1 = !var1;
            if(!var1) { _fun0007_ip = 65; continue _fun0007 }
 12:
            var4 = null;
            var2 = arg3;
            var2 = var4 == var2;
            if(!var2) { _fun0007_ip = 62; continue _fun0007 }
 24:
            var6 = '';
            var3 = arg1;
            var3 = var6 !== var3;
            if(var3) { _fun0007_ip = 59; continue _fun0007 }
 38:
            var4 = var4 != var5;
            if(!var4) { _fun0007_ip = 56; continue _fun0007 }
 45:
            var6 = var5.length;
            var5 = 0;
            var4 = var6 > var5;
 56:
            var3 = var4;
 59:
            var2 = var3;
 62:
            var1 = var2;
 65:
            return var1;
        }
    };
    var3['canAddConfettiToMessageOnSend'] = var4;
    var4 = function constructCreateConfettiPotionRequest(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 == var3)) { _fun0008_ip = 13; continue _fun0008 }
 9:
            var1 = undefined;
            return var1;
 13:
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
 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0009_ip = 250; continue _fun0009 }
 12:
            var3 = var2.potions;
            if(!(var1 != var3)) { _fun0009_ip = 248; continue _fun0009 }
 25:
            var3 = var2.potions;
            var4 = var3.length;
            var3 = 0;
            if(!(var3 !== var4)) { _fun0009_ip = 246; continue _fun0009 }
 45:
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
            if(var2) { _fun0009_ip = 244; continue _fun0009 }
 90:
            var2 = var7.value;
            var13 = var2.type;
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var4 = var12.bind(var10)(var4);
            var4 = var4.MessagePotionTypes;
            var4 = var4.CONFETTI;
            var12 = var5;
            if(!(var13 === var4)) { _fun0009_ip = 209; continue _fun0009 }
 136:
            var13 = var2.used_by;
            var14 = _closure1_slot6;
            var4 = var14.getCurrentUser;
            var14 = var4.bind(var14)();
            var15 = var1 == var14;
            var4 = undefined;
            if(var15) { _fun0009_ip = 169; continue _fun0009 }
 164:
            var4 = var14.id;
 169:
            var6 = var14;
            var12 = var5;
            if(!(var13 === var4)) { _fun0009_ip = 209; continue _fun0009 }
 179:
            var13 = var2.emoji;
            var15 = var1 == var13;
            var4 = undefined;
            if(var15) { _fun0009_ip = 199; continue _fun0009 }
 194:
            var4 = var13.length;
 199:
            var6 = var14;
            var12 = var13;
            if(!(!(var4 > var3))) { _fun0009_ip = 232; continue _fun0009 }
 209:
            var13 = var9.bind(var10)();
            var4 = var13.done;
            var5 = var12;
            var7 = var13;
            if(var4) { _fun0009_ip = 244; continue _fun0009 }
 227:
            _fun0009_ip = 90; continue _fun0009;
 232:
            var2 = var2.emoji;
            var2 = var2[var3];
            return var2;
 244:
            return var1;
 246:
            return var1;
 248:
            return var1;
 250:
            return var1;
        }
    };
    var3['getSentConfettiPotionEmoji'] = var4;
    var2 = function() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
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
            if(!var1) { _fun0010_ip = 80; continue _fun0010 }
 61:
            var5 = var5.type;
            var4 = _closure1_slot9;
            var4 = var4.PURCHASE;
            var1 = var5 === var4;
 80:
            if(!var1) { _fun0010_ip = 87; continue _fun0010 }
 83:
            var1 = var2 != var3;
 87:
            if(!var1) { _fun0010_ip = 96; continue _fun0010 }
 90:
            var2 = 0;
            var1 = var3 > var2;
 96:
            return var1;
        }
    };
    var3['useHasRemainingConfettiPotions'] = var2;
    return var1;
})();