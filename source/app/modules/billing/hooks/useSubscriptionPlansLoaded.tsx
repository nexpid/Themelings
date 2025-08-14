// app/modules/billing/hooks/useSubscriptionPlansLoaded.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
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
            var9 = _closure1_slot7;
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
            var7 = _closure1_slot7;
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
    var _closure1_slot6 = var1;
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
    var _closure1_slot7 = var1;
    var2 = function getSubscriptionPlansLoaded() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var7 = arguments[0];
            var1 = arguments[1];
            var6 = undefined;
            if(!(var7 === var6)) { _fun0004_ip = 35; continue _fun0004 }
 12:
            var12 = _closure1_slot5;
            var2 = new Array(0);
            var11 = 0;
            var13 = var2;
            var3 = arraySpread(var13, var12, var11);
            var7 = var2;
 35:
            if(!(var1 === var6)) { _fun0004_ip = 73; continue _fun0004 }
 39:
            var4 = _closure1_slot2;
            var2 = new Array(3);
            var2[0] = var4;
            var4 = _closure1_slot3;
            var2[1] = var4;
            var3 = _closure1_slot4;
            var2[2] = var3;
            var1 = var2;
 73:
            var4 = var1;
            var2 = var4[Symbol.iterator];
            var4 = var2().next;
            var5 = var4().value;
            var1 = var2;
            var3 = var1 === var6;
            var1 = undefined;
            if(var3) { _fun0004_ip = 98; continue _fun0004 }
 95:
            var1 = var5;
 98:
            var5 = undefined;
            if(var3) { _fun0004_ip = 128; continue _fun0004 }
 103:
            var9 = var4().value;
            var8 = var2;
            var8 = var8 === var6;
            var5 = undefined;
            var3 = var8;
            if(var8) { _fun0004_ip = 128; continue _fun0004 }
 122:
            var5 = var9;
            var3 = var8;
 128:
            var8 = undefined;
            if(var3) { _fun0004_ip = 158; continue _fun0004 }
 133:
            var9 = var4().value;
            var4 = var2;
            var4 = var4 === var6;
            var8 = undefined;
            var3 = var4;
            if(var4) { _fun0004_ip = 158; continue _fun0004 }
 152:
            var8 = var9;
            var3 = var4;
 158:
            if(var3) { _fun0004_ip = 164; continue _fun0004 }
 161:
            var2.return();
 164:
            var3 = var1.paymentSourceIds;
            var4 = var1.defaultPaymentSourceId;
            var1 = var5.isLoadedForSKUs;
            var1 = var1.bind(var5)(var7);
            var2 = var8.getPremiumTypeSubscription;
            var8 = var2.bind(var8)();
            var2 = null;
            var10 = var2 == var8;
            var9 = undefined;
            if(var10) { _fun0004_ip = 216; continue _fun0004 }
 210:
            var9 = var8.paymentSourceId;
 216:
            if(!(var2 != var9)) { _fun0004_ip = 239; continue _fun0004 }
 220:
            var8 = var5.hasPaymentSourceForSKUIds;
            var8 = var8.bind(var5)(var9, var7);
            if(var8) { _fun0004_ip = 239; continue _fun0004 }
 235:
            var8 = false;
            return var8;
 239:
            if(!(var2 != var4)) { _fun0004_ip = 262; continue _fun0004 }
 243:
            var2 = var5.hasPaymentSourceForSKUIds;
            var2 = var2.bind(var5)(var4, var7);
            if(var2) { _fun0004_ip = 262; continue _fun0004 }
 258:
            var2 = false;
            return var2;
 262:
            var2 = _closure1_slot6;
            var4 = var2.bind(var6)(var3);
            var3 = var4.bind(var6)();
            var2 = var3.done;
            if(var2) { _fun0004_ip = 325; continue _fun0004 }
 286:
            var8 = var3.value;
            var2 = var5.hasPaymentSourceForSKUIds;
            var2 = var2.bind(var5)(var8, var7);
            if(var2) { _fun0004_ip = 310; continue _fun0004 }
 306:
            var2 = false;
            return var2;
 310:
            var8 = var4.bind(var6)();
            var2 = var8.done;
            var3 = var8;
            if(!var2) { _fun0004_ip = 286; continue _fun0004 }
 325:
            return var1;
        }
    };
    var _closure1_slot8 = var2;
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
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ACTIVE_PREMIUM_SKUS;
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var9 = var8.bind(var1)(var5);
    var5 = var9.prototype;
    var14 = Object.create(var5, {constructor: {value: var9}});
    var13 = 'useSubscriptionPlansLoaded';
    var5 = new var14[var9](var13, var12);
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/billing/hooks/useSubscriptionPlansLoaded.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useSubscriptionPlansLoaded() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var6 = arguments[0];
            var5 = undefined;
            if(!(var6 === var5)) { _fun0005_ip = 34; continue _fun0005 }
 11:
            var9 = _closure1_slot5;
            var2 = new Array(0);
            var8 = 0;
            var10 = var2;
            var3 = arraySpread(var10, var9, var8);
            var6 = var2;
 34:
            var _closure2_slot0 = var6;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 5;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.useStateFromStores;
            var7 = _closure1_slot2;
            var3 = new Array(3);
            var3[0] = var7;
            var7 = _closure1_slot3;
            var3[1] = var7;
            var2 = _closure1_slot4;
            var3[2] = var2;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                var4 = _closure1_slot8;
                var3 = _closure2_slot0;
                var5 = _closure1_slot2;
                var2 = new Array(3);
                var2[0] = var5;
                var5 = _closure1_slot3;
                var2[1] = var5;
                var1 = _closure1_slot4;
                var2[2] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1 = var4.bind(var5)(var3, var1, var2);
            return var1;
        }
    };
    var3['useSubscriptionPlansLoaded'] = var4;
    var3['getSubscriptionPlansLoaded'] = var2;
    return var1;
})();