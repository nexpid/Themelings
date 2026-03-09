// app/modules/wishlists/SentGiftsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function getSentGiftKey(arg1, arg2) {
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = '';
        var3 = arg1;
        var2 = ':';
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = {};
    var7 = {};
    var2['sentGifts'] = var7;
    var _closure1_slot6 = var2;
    var2 = 6;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function SentGiftsStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot1;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot4;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot3;
                var1 = _closure1_slot7;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot2;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var2 = this;
                var1 = null;
                if(!(var1 != var3)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                _closure1_slot6 = var3;
                var1 = var2.cleanupExpiredGifts;
                var1 = var1.bind(var2)();
case 9:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot6;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasSentGift';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var5 = _closure1_slot8;
                var4 = undefined;
                var3 = arg1;
                var2 = arg2;
                var2 = var5.bind(var4)(var3, var2);
                var1 = _closure1_slot6;
                var1 = var1.sentGifts;
                var3 = var1[var2];
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var2 = global;
                var5 = var2.Date;
                var7 = var3.expiresAt;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var8 = var4;
                var3 = new var8[var5](var7, var6);
                var3 = var3 instanceof Object ? var3 : var4;
                var2 = var2.Date;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var8 = var4;
                var2 = new var8[var2](var7);
                var2 = var2 instanceof Object ? var2 : var4;
                var2 = var3 < var2;
                var1 = !var2;
case 11:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getSentGift';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = _closure1_slot8;
                var4 = undefined;
                var3 = arg1;
                var2 = arg2;
                var2 = var5.bind(var4)(var3, var2);
                var1 = _closure1_slot6;
                var1 = var1.sentGifts;
                var2 = var1[var2];
                var4 = null;
                var3 = var4 == var2;
                var1 = null;
                if(var3) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                var3 = global;
                var7 = var3.Date;
                var9 = var2.expiresAt;
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var10 = var6;
                var5 = new var10[var7](var9, var8);
                var5 = var5 instanceof Object ? var5 : var6;
                var3 = var3.Date;
                var6 = var3.prototype;
                var6 = Object.create(var6, {constructor: {value: var3}});
                var10 = var6;
                var3 = new var10[var3](var9);
                var3 = var3 instanceof Object ? var3 : var6;
                var3 = var5 < var3;
                var1 = null;
                if(var3) { _fun0005_ip = 13; continue _fun0005 }
case 15:
                var1 = var2;
case 13:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'cleanupExpiredGifts';
        var5['key'] = var7;
        var6 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var10 = global;
                var1 = var10.Date;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var16 = var2;
                var1 = new var16[var1](var15);
                var9 = var1 instanceof Object ? var1 : var2;
                var3 = var10.Object;
                var2 = var3.entries;
                var1 = _closure1_slot6;
                var1 = var1.sentGifts;
                var7 = var2.bind(var3)(var1);
                var1 = var7.length;
                var6 = 0;
                var2 = var6 < var1;
                var1 = undefined;
                var5 = 2;
                var4 = 1;
                var3 = 0;
                if(!var2) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                var11 = var7[var3];
                var2 = _closure1_slot0;
                var2 = var2.bind(var1)(var11, var5);
                var11 = var2[var6];
                var2 = var2[var4];
                var13 = var10.Date;
                var15 = var2.expiresAt;
                var12 = var13.prototype;
                var12 = Object.create(var12, {constructor: {value: var13}});
                var16 = var12;
                var2 = new var16[var13](var15, var14);
                var2 = var2 instanceof Object ? var2 : var12;
                if(!(var2 < var9)) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                var2 = _closure1_slot6;
                var2 = var2.sentGifts;
                var2 = delete var2[var11];
case 18:
                var3 = var3 + 1;
                var2 = var7.length;
                if(var3 < var2) { _fun0006_ip = 17; continue _fun0006 }
case 16:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'SentGiftsStore';
    var7['displayName'] = var2;
    var7['persistKey'] = var2;
    var2 = 7;
    var2 = var5[var2];
    var11 = var6.bind(var1)(var2);
    var2 = {};
    var4 = function handleGiftSent(arg1) {
        var5 = arg1;
        var6 = _closure1_slot8;
        var4 = var5.skuId;
        var3 = var5.recipientId;
        var1 = undefined;
        var4 = var6.bind(var1)(var4, var3);
        var3 = global;
        var6 = var3.Date;
        var7 = var6.prototype;
        var7 = Object.create(var7, {constructor: {value: var6}});
        var11 = var7;
        var6 = new var11[var6](var10);
        var7 = var6 instanceof Object ? var6 : var7;
        var8 = var3.Date;
        var3 = var7.getTime;
        var6 = var3.bind(var7)();
        var3 = 172800000;
        var10 = var6 + var3;
        var6 = var8.prototype;
        var6 = Object.create(var6, {constructor: {value: var8}});
        var11 = var6;
        var3 = new var11[var8](var10, var9);
        var6 = var3 instanceof Object ? var3 : var6;
        var2 = _closure1_slot6;
        var3 = var2.sentGifts;
        var2 = {};
        var8 = var5.skuId;
        var2['skuId'] = var8;
        var5 = var5.recipientId;
        var2['recipientId'] = var5;
        var5 = var7.toISOString;
        var5 = var5.bind(var7)();
        var2['sentAt'] = var5;
        var5 = var6.toISOString;
        var5 = var5.bind(var6)();
        var2['expiresAt'] = var5;
        var3[var4] = var2;
        return var1;
    };
    var2['WISHLIST_GIFT_SENT'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var12 = var4;
    var10 = var2;
    var2 = new var12[var7](var11, var10, var9);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/SentGiftsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();