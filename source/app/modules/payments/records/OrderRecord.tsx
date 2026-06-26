// app/modules/payments/records/OrderRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot3;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot2;
            var1 = _closure1_slot10;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var3);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var6 = global;
            var8 = var6.Reflect;
            var7 = var8.construct;
            var6 = new Array(0);
            var5 = _closure1_slot3;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 5: // try_start_0
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
case 6: // try_end0
            _fun0002_ip = 7; continue _fun0002;
case 8: // catch_target0
            CatchBlockStart(arg_register=1);
case 7:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var7[var2];
    var5 = var8.bind(var1)(var2);
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.BaseInvoiceRecord;
    var _closure1_slot5 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = function(arg1) {
        var5 = function BillingFacetRecord(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var5 = this;
                var6 = _closure1_slot0;
                var4 = _closure2_slot0;
                var2 = undefined;
                var6 = var6.bind(var2)(var5, var4);
                var1 = _closure1_slot9;
                var1 = var1.bind(var2)(var5, var4);
                var2 = var3.paymentGateway;
                var1['paymentGateway'] = var2;
                var5 = var3.paymentSourceId;
                var2 = null;
                var6 = var2 != var5;
                var4 = null;
                if(!var6) { _fun0003_ip = 6; continue _fun0003 }
case 9:
                var4 = var5;
case 6:
                var1['paymentSourceId'] = var4;
                var3 = var3.invoicePreview;
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var2 = var3;
case 10:
                var1['invoicePreview'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot4;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot1;
        var1 = {};
        var6 = 'createFromOrder';
        var1['key'] = var6;
        var2 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var6 = arg1;
                var5 = var6.billing_facet;
                var3 = null;
                var2 = var3 == var5;
                var1 = null;
                if(var2) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                var4 = _closure2_slot0;
                var2 = {};
                var7 = var5.payment_gateway;
                var2['paymentGateway'] = var7;
                var5 = var5.payment_source_id;
                var7 = var3 != var5;
                var3 = null;
                if(!var7) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var3 = var5;
case 14:
                var2['paymentSourceId'] = var3;
                var5 = _closure1_slot5;
                var3 = var5.createInvoiceFromOrder;
                var3 = var3.bind(var5)(var6);
                var2['invoicePreview'] = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var9 = var3;
                var8 = var2;
                var2 = new var9[var4](var8, var7);
                var1 = var2 instanceof Object ? var2 : var3;
case 12:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = null;
        var1 = var3.bind(var4)(var5, var1, var2);
        return var1;
    };
    var2 = var2.bind(var1)(var5);
    var _closure1_slot8 = var2;
    var4 = function(arg1) {
        var5 = function OrderRecord(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var5 = this;
                var6 = _closure1_slot0;
                var4 = _closure2_slot0;
                var3 = undefined;
                var6 = var6.bind(var3)(var5, var4);
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)(var5, var4);
                var3 = var2.id;
                var1['id'] = var3;
                var3 = var2.status;
                var1['status'] = var3;
                var3 = var2.revision;
                var1['revision'] = var3;
                var4 = var2.orderLineItems;
                var3 = null;
                if(!(var3 == var4)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                var4 = new Array(0);
case 16:
                var1['orderLineItems'] = var4;
                var5 = var2.billingFacetRecord;
                var6 = var3 != var5;
                var4 = null;
                if(!var6) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                var4 = var5;
case 18:
                var1['billingFacetRecord'] = var4;
                var5 = var2.giftingFacet;
                var6 = var3 != var5;
                var4 = null;
                if(!var6) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                var4 = var5;
case 20:
                var1['giftingFacet'] = var4;
                var5 = var2.subscriptionFacet;
                var6 = var3 != var5;
                var4 = null;
                if(!var6) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                var4 = var5;
case 22:
                var1['subscriptionFacet'] = var4;
                var5 = var2.checkoutContextRecord;
                var6 = var3 != var5;
                var4 = null;
                if(!var6) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                var4 = var5;
case 24:
                var1['checkoutContextRecord'] = var4;
                var4 = var2.createdAt;
                var1['createdAt'] = var4;
                var2 = var2.unsatisfiedConstraints;
                if(!(var3 == var2)) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                var2 = new Array(0);
case 26:
                var1['unsatisfiedConstraints'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot4;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot1;
        var6 = {};
        var2 = 'getInvoicePreview';
        var6['key'] = var2;
        var2 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = this;
                var3 = var2.billingFacetRecord;
                var1 = null;
                var3 = var1 == var3;
                if(var3) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                var2 = var2.billingFacetRecord;
                var1 = var2.invoicePreview;
case 28:
                return var1;
            }
        };
        var6['value'] = var2;
        var2 = new Array(2);
        var2[0] = var6;
        var6 = {};
        var7 = 'firstUnsatisfiedConstraintReasonCode';
        var6['key'] = var7;
        var7 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = this;
                var1 = var2.unsatisfiedConstraints;
                var1 = var1.length;
                var3 = 0;
                var4 = var1 > var3;
                var1 = null;
                if(!var4) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                var2 = var2.unsatisfiedConstraints;
                var2 = var2[var3];
                var1 = var2.reason_code;
case 30:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'createFromServer';
        var6['key'] = var7;
        var1 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg1;
                var3 = _closure2_slot0;
                var1 = {};
                var4 = var2.id;
                var1['id'] = var4;
                var4 = var2.status;
                var1['status'] = var4;
                var4 = var2.revision;
                var1['revision'] = var4;
                var4 = var2.order_line_items;
                var1['orderLineItems'] = var4;
                var6 = _closure1_slot8;
                var5 = var6.createFromOrder;
                var5 = var5.bind(var6)(var2);
                var1['billingFacetRecord'] = var5;
                var7 = var2.gifting_facet;
                var6 = null;
                var8 = var6 != var7;
                var5 = null;
                if(!var8) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                var5 = var7;
case 32:
                var1['giftingFacet'] = var5;
                var7 = _closure1_slot6;
                var5 = var7.createFromOrder;
                var5 = var5.bind(var7)(var2);
                var1['checkoutContextRecord'] = var5;
                var5 = var2.created_at;
                var1['createdAt'] = var5;
                var5 = var2.unsatisfied_constraints;
                if(!(var6 == var5)) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                var5 = new Array(0);
case 34:
                var1['unsatisfiedConstraints'] = var5;
                var5 = _closure1_slot7;
                var4 = var5.createFromServer;
                var2 = var2.subscription_facet;
                var2 = var4.bind(var5)(var2);
                var1['subscriptionFacet'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var10 = var2;
                var9 = var1;
                var1 = new var10[var3](var9, var8);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/payments/records/OrderRecord.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['BillingFacetRecord'] = var2;
    return var1;
})();