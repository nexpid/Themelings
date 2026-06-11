// app/records/InvoiceRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot5;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var1 = _closure1_slot8;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = new Array(0);
case 5:
            var5 = _closure1_slot5;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 7: // try_start_0
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
case 8: // try_end0
            _fun0002_ip = 9; continue _fun0002;
case 10: // catch_target0
            CatchBlockStart(arg_register=1);
case 9:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var7[var2];
    var5 = var5.bind(var1)(var2);
    var2 = function(arg1) {
        var5 = function BaseInvoiceRecord(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var5 = this;
                var6 = _closure1_slot2;
                var4 = _closure2_slot0;
                var3 = undefined;
                var6 = var6.bind(var3)(var5, var4);
                var1 = _closure1_slot7;
                var1 = var1.bind(var3)(var5, var4);
                var3 = var2.total;
                var1['total'] = var3;
                var3 = var2.subtotal;
                var1['subtotal'] = var3;
                var3 = var2.tax;
                var1['tax'] = var3;
                var3 = var2.currency;
                var1['currency'] = var3;
                var2 = var2.invoiceItems;
                var3 = null;
                if(!(var3 == var2)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var2 = new Array(0);
case 11:
                var1['invoiceItems'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot6;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot3;
        var6 = {};
        var2 = 'getInvoicePreviewLineItemForSku';
        var6['key'] = var2;
        var2 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = this;
                var3 = var2.invoiceItems;
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.skuId;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var1 = var2;
case 13:
                return var1;
            }
        };
        var6['value'] = var2;
        var2 = new Array(2);
        var2[0] = var6;
        var6 = {};
        var7 = 'getInvoicePreviewLineItemUnitPriceForSku';
        var6['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = this;
                var2 = var3.getInvoicePreviewLineItemForSku;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var4 = null;
                var3 = var4 == var2;
                var1 = null;
                if(var3) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                var3 = var2.unitPrice;
                var3 = var4 == var3;
                var1 = null;
                if(var3) { _fun0005_ip = 15; continue _fun0005 }
case 17:
                var2 = var2.unitPrice;
                var1 = var2.amount;
case 15:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'createInvoiceFromOrder';
        var6['key'] = var7;
        var1 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var3 = var1.billing_facet;
                var1 = null;
                var4 = var1 != var3;
                var5 = null;
                if(!var4) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                var5 = var3.invoice_preview;
case 18:
                var _closure3_slot1 = var5;
                if(!(var1 != var5)) { _fun0006_ip = 20; continue _fun0006 }
case 17:
                var6 = var5.line_items;
                var4 = var6.map;
                var3 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = arg1;
                        var _closure4_slot0 = var3;
                        var2 = _closure3_slot0;
                        var4 = var2.order_line_items;
                        var2 = var4.find;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.id;
                            var1 = _closure4_slot0;
                            var1 = var1.ref_order_line_item_id;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var4 = var2.bind(var4)(var1);
                        var1 = null;
                        var2 = var1 == var4;
                        if(var2) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                        var2 = {};
                        var4 = var4.sku_id;
                        var2['skuId'] = var4;
                        var4 = {};
                        var6 = var3.unit_price;
                        var4['amount'] = var6;
                        var5 = _closure3_slot1;
                        var5 = var5.currency;
                        var4['currency'] = var5;
                        var2['unitPrice'] = var4;
                        var3 = var3.quantity;
                        var2['quantity'] = var3;
                        var1 = var2;
case 21:
                        return var1;
                    }
                };
                var4 = var4.bind(var6)(var3);
                var3 = var4.filter;
                var2 = function(arg1) {
                    var2 = null;
                    var1 = arg1;
                    var1 = var2 != var1;
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var4 = _closure2_slot0;
                var2 = {};
                var6 = var5.total;
                var2['total'] = var6;
                var6 = var5.subtotal;
                var2['subtotal'] = var6;
                var6 = var5.tax;
                var2['tax'] = var6;
                var5 = var5.currency;
                var2['currency'] = var5;
                var2['invoiceItems'] = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var8 = var3;
                var7 = var2;
                var2 = new var8[var4](var7, var6);
                var2 = var2 instanceof Object ? var2 : var3;
                return var2;
case 20:
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var5);
    var4 = function(arg1) {
        var5 = function InvoiceRecord(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg1;
                var6 = this;
                var3 = _closure1_slot2;
                var5 = _closure2_slot0;
                var4 = undefined;
                var3 = var3.bind(var4)(var6, var5);
                var3 = _closure1_slot7;
                var1 = new Array(1);
                var1[0] = var2;
                var1 = var3.bind(var4)(var6, var5, var1);
                var3 = var2.id;
                var1['id'] = var3;
                var3 = var2.invoiceItems;
                var4 = null;
                if(!(var4 == var3)) { _fun0008_ip = 9; continue _fun0008 }
case 8:
                var3 = new Array(0);
case 9:
                var1['invoiceItems'] = var3;
                var3 = var2.taxInclusive;
                var1['taxInclusive'] = var3;
                var3 = var2.subscriptionPeriodStart;
                var1['subscriptionPeriodStart'] = var3;
                var3 = var2.subscriptionPeriodEnd;
                var1['subscriptionPeriodEnd'] = var3;
                var3 = var2.status;
                var1['status'] = var3;
                var3 = var2.orbsReward;
                var1['orbsReward'] = var3;
                var2 = var2.checkoutContext;
                var1['checkoutContext'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var3 = _closure1_slot6;
        var4 = undefined;
        var2 = arg1;
        var2 = var3.bind(var4)(var5, var2);
        var3 = _closure1_slot3;
        var1 = {};
        var2 = 'findInvoiceItemByPlanId';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = this;
                var3 = var2.invoiceItems;
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.subscriptionPlanId;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0009_ip = 13; continue _fun0009 }
case 14:
                var1 = var2;
case 13:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'getDiscountIdIfExists';
        var1['key'] = var6;
        var6 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = this;
                var3 = var1.invoiceItems;
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.discounts;
                    var2 = var1.length;
                    var1 = 0;
                    var1 = var2 > var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if(!(var2 != var1)) { _fun0010_ip = 23; continue _fun0010 }
case 24:
                var3 = var1.discounts;
                var4 = var3.length;
                var3 = 0;
                if(!(var3 !== var4)) { _fun0010_ip = 23; continue _fun0010 }
case 25:
                var1 = var1.discounts;
                var1 = var1[var3];
                if(!(var2 == var1)) { _fun0010_ip = 26; continue _fun0010 }
case 23:
                var2 = undefined;
                return var2;
case 26:
                var1 = var1.discount_id;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var6 = {};
        var1 = 'createInvoiceFromServer';
        var6['key'] = var1;
        var1 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = arg1;
                var3 = _closure2_slot0;
                var1 = {};
                var4 = var2.id;
                var1['id'] = var4;
                var7 = var2.invoice_items;
                var4 = null;
                var5 = var4 == var7;
                var9 = undefined;
                var4 = undefined;
                if(var5) { _fun0011_ip = 27; continue _fun0011 }
case 28:
                var6 = var7.map;
                var8 = _closure1_slot0;
                var10 = _closure1_slot1;
                var5 = 6;
                var5 = var10[var5];
                var5 = var8.bind(var9)(var5);
                var5 = var5.createInvoiceItemFromServer;
                var4 = var6.bind(var7)(var5);
case 27:
                var1['invoiceItems'] = var4;
                var4 = var2.total;
                var1['total'] = var4;
                var4 = var2.subtotal;
                var1['subtotal'] = var4;
                var4 = var2.currency;
                var1['currency'] = var4;
                var4 = var2.tax;
                var1['tax'] = var4;
                var4 = var2.tax_inclusive;
                var1['taxInclusive'] = var4;
                var4 = global;
                var7 = var4.Date;
                var11 = var2.subscription_period_start;
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var12 = var6;
                var5 = new var12[var7](var11, var10);
                var5 = var5 instanceof Object ? var5 : var6;
                var1['subscriptionPeriodStart'] = var5;
                var6 = var4.Date;
                var11 = var2.subscription_period_end;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var12 = var5;
                var4 = new var12[var6](var11, var10);
                var4 = var4 instanceof Object ? var4 : var5;
                var1['subscriptionPeriodEnd'] = var4;
                var4 = var2.status;
                var1['status'] = var4;
                var4 = var2.orbs_reward;
                var1['orbsReward'] = var4;
                var2 = var2.checkout_context;
                var1['checkoutContext'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var11 = var1;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var6 = {};
        var8 = 'createFromOTPPreview';
        var6['key'] = var8;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = arg1;
                var3 = _closure2_slot0;
                var1 = {};
                var4 = '';
                var1['id'] = var4;
                var7 = var2.invoice_items;
                var4 = null;
                var5 = var4 == var7;
                var9 = undefined;
                var4 = undefined;
                if(var5) { _fun0012_ip = 29; continue _fun0012 }
case 30:
                var6 = var7.map;
                var8 = _closure1_slot0;
                var10 = _closure1_slot1;
                var5 = 6;
                var5 = var10[var5];
                var5 = var8.bind(var9)(var5);
                var5 = var5.createInvoiceItemFromServer;
                var4 = var6.bind(var7)(var5);
case 29:
                var1['invoiceItems'] = var4;
                var4 = var2.amount;
                var1['total'] = var4;
                var4 = var2.subtotal;
                var1['subtotal'] = var4;
                var4 = var2.currency;
                var1['currency'] = var4;
                var4 = var2.tax;
                var1['tax'] = var4;
                var4 = var2.tax_inclusive;
                var1['taxInclusive'] = var4;
                var4 = global;
                var5 = var4.Date;
                var6 = var5.prototype;
                var7 = Object.create(var6, {constructor: {value: var5}});
                var12 = var7;
                var11 = 0;
                var5 = new var12[var5](var11, var10);
                var5 = var5 instanceof Object ? var5 : var7;
                var1['subscriptionPeriodStart'] = var5;
                var4 = var4.Date;
                var5 = var4.prototype;
                var5 = Object.create(var5, {constructor: {value: var4}});
                var12 = var5;
                var4 = new var12[var4](var11, var10);
                var4 = var4 instanceof Object ? var4 : var5;
                var1['subscriptionPeriodEnd'] = var4;
                var4 = var2.orbs_reward;
                var1['orbsReward'] = var4;
                var2 = var2.checkout_context;
                var1['checkoutContext'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var11 = var1;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var6['value'] = var7;
        var1[1] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var2);
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'records/InvoiceRecord.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['BaseInvoiceRecord'] = var2;
    return var1;
})();