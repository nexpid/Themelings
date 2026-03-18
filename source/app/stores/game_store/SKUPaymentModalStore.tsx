// app/stores/game_store/SKUPaymentModalStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot23 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function maybeResolveReject(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot6;
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot14;
            if(!(var1 == var3)) { _fun0002_ip = 8; continue _fun0002 }
case 6:
            var3 = _closure1_slot7;
            if(!(var1 != var3)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var5 = _closure1_slot7;
            var4 = undefined;
            var3 = arg1;
            var3 = var5.bind(var4)(var3);
            _fun0002_ip = 9; continue _fun0002;
case 8:
            var5 = _closure1_slot6;
            var4 = _closure1_slot14;
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
case 9:
            var _closure1_slot6 = var1;
            var _closure1_slot7 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot0 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot1 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AppContext;
    var _closure1_slot5 = var8;
    var8 = null;
    var _closure1_slot8 = var8;
    var _closure1_slot9 = var8;
    var _closure1_slot10 = var8;
    var _closure1_slot11 = var8;
    var _closure1_slot12 = var8;
    var9 = {};
    var _closure1_slot13 = var9;
    var _closure1_slot14 = var8;
    var9 = false;
    var _closure1_slot15 = var9;
    var _closure1_slot16 = var8;
    var _closure1_slot17 = var9;
    var _closure1_slot18 = var9;
    var _closure1_slot19 = var9;
    var _closure1_slot20 = var9;
    var _closure1_slot21 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var14 = var8;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot22 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function SKUPaymentModalStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot23;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 13; continue _fun0003;
case 11:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 13:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'getPricesForSku';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var2 = _closure1_slot13;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(13);
        var1[0] = var5;
        var5 = {};
        var7 = 'isOpen';
        var5['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = _closure1_slot5;
                var3 = var1.APP;
                var1 = _closure1_slot21;
                var1 = var1 === var3;
                if(!var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var1 = _closure1_slot19;
case 14:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isPurchasingSKU';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'forceConfirmationStepOnMount';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'error';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'skuId';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'applicationId';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'analyticsLocation';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'promotionId';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'isIAP';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'giftCode';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['get'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'isGift';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['get'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'isFetchingSKU';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot22;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[12] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'SKUPaymentModalStore';
    var8['displayName'] = var2;
    var2 = 7;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleSKUPurchaseModalOpen(arg1) {
        var2 = arg1;
        var4 = _closure1_slot24;
        var1 = undefined;
        var4 = var4.bind(var1)();
        var4 = var2.skuId;
        _closure1_slot8 = var4;
        var4 = var2.applicationId;
        _closure1_slot10 = var4;
        var4 = var2.isIAP;
        _closure1_slot18 = var4;
        var4 = var2.analyticsLocation;
        _closure1_slot11 = var4;
        var4 = var2.context;
        _closure1_slot21 = var4;
        var4 = var2.isGift;
        _closure1_slot20 = var4;
        var4 = true;
        _closure1_slot19 = var4;
        var4 = false;
        _closure1_slot17 = var4;
        var4 = var2.resolve;
        _closure1_slot6 = var4;
        var4 = var2.reject;
        _closure1_slot7 = var4;
        var4 = null;
        _closure1_slot16 = var4;
        _closure1_slot14 = var4;
        var2 = var2.promotionId;
        _closure1_slot12 = var2;
        return var1;
    };
    var2['SKU_PURCHASE_MODAL_OPEN'] = var9;
    var9 = function handleSKUPurchaseModalClose(arg1) {
        var1 = arg1;
        var3 = var1.error;
        var2 = false;
        _closure1_slot19 = var2;
        var2 = null;
        _closure1_slot21 = var2;
        var2 = _closure1_slot24;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['SKU_PURCHASE_MODAL_CLOSE'] = var9;
    var9 = function handleSKUPurchasePreviewFetch(arg1) {
        var1 = arg1;
        var3 = var1.skuId;
        var2 = _closure1_slot22;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['SKU_PURCHASE_PREVIEW_FETCH'] = var9;
    var9 = function handleSKUPurchasePreviewFetchSuccess(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var3 = var1.skuId;
            var7 = var1.paymentSourceId;
            var6 = var1.price;
            var2 = {};
            var9 = _closure1_slot13;
            var10 = var2;
            var4 = copyDataProperties(var10, var9);
            var4 = {};
            var5 = _closure1_slot13;
            var9 = var5[var3];
            var10 = var4;
            var5 = copyDataProperties(var10, var9);
            var5 = null;
            var8 = var5 != var7;
            var5 = 'no_payment_source';
            if(!var8) { _fun0005_ip = 5; continue _fun0005 }
case 11:
            var5 = var7;
case 5:
            var4[var5] = var6;
            var2[var3] = var4;
            _closure1_slot13 = var2;
            var2 = _closure1_slot22;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        }
    };
    var2['SKU_PURCHASE_PREVIEW_FETCH_SUCCESS'] = var9;
    var9 = function handleSKUPurchasePreviewFetchFailure(arg1) {
        var1 = arg1;
        var3 = var1.skuId;
        var2 = _closure1_slot22;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['SKU_PURCHASE_PREVIEW_FETCH_FAILURE'] = var9;
    var9 = function handlePurchaseSKUStart() {
        var1 = true;
        _closure1_slot15 = var1;
        var1 = undefined;
        return var1;
    };
    var2['SKU_PURCHASE_START'] = var9;
    var9 = function handlePurchaseSKUSuccess(arg1) {
        var1 = arg1;
        var3 = var1.entitlements;
        var2 = var1.giftCode;
        var4 = false;
        _closure1_slot15 = var4;
        _closure1_slot14 = var3;
        _closure1_slot9 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SKU_PURCHASE_SUCCESS'] = var9;
    var9 = function handlePurchaseSKUFail(arg1) {
        var1 = arg1;
        var2 = var1.error;
        var3 = false;
        _closure1_slot15 = var3;
        _closure1_slot16 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SKU_PURCHASE_FAIL'] = var9;
    var9 = function handlePurchaseShowConfirmationStep() {
        var1 = true;
        _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var2['SKU_PURCHASE_SHOW_CONFIRMATION_STEP'] = var9;
    var9 = function handlePurchaseClearError() {
        var1 = null;
        _closure1_slot16 = var1;
        var1 = undefined;
        return var1;
    };
    var2['SKU_PURCHASE_CLEAR_ERROR'] = var9;
    var9 = function handleSKUPurchaseUpdateIsGift(arg1) {
        var1 = arg1;
        var2 = var1.isGift;
        _closure1_slot20 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SKU_PURCHASE_UPDATE_IS_GIFT'] = var9;
    var9 = function handleOverlaySetLocked(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var1 = var1.locked;
            if(!var1) { _fun0006_ip = 16; continue _fun0006 }
case 17:
            var3 = _closure1_slot21;
            var2 = null;
            if(!(var2 != var3)) { _fun0006_ip = 16; continue _fun0006 }
case 18:
            var3 = false;
            _closure1_slot19 = var3;
            _closure1_slot21 = var2;
            var2 = _closure1_slot24;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
case 16:
            var1 = false;
            return var1;
        }
    };
    var2['OVERLAY_SET_INPUT_LOCKED'] = var9;
    var4 = function handleGiftCodeCreate(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var1 = var1.giftCode;
            var3 = var1.uses;
            var2 = 0;
            if(!(var2 === var3)) { _fun0007_ip = 12; continue _fun0007 }
case 6:
            var4 = var1.sku_id;
            var3 = _closure1_slot8;
            if(!(var4 === var3)) { _fun0007_ip = 12; continue _fun0007 }
case 19:
            var1 = var1.code;
            _closure1_slot9 = var1;
            var1 = undefined;
            return var1;
case 12:
            var1 = false;
            return var1;
        }
    };
    var2['GIFT_CODE_CREATE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/game_store/SKUPaymentModalStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var2 = 'no_payment_source';
    var3['NO_PAYMENT_SOURCE'] = var2;
    return var1;
})();