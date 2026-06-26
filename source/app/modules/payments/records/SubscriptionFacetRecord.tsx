// app/modules/payments/records/SubscriptionFacetRecord.tsx
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
            _closure1_slot5 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var2 = function(arg1) {
        var5 = function SubscriptionFacetRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var5 = this;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var2);
                var1 = _closure1_slot3;
                var10 = var1.bind(var4)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot5;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
case 8:
                var1 = var2.bind(var4)(var5, var1);
                var5 = var3.subscriptionId;
                var2 = null;
                var6 = var2 != var5;
                var4 = null;
                if(!var6) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var4 = var5;
case 9:
                var1['subscriptionId'] = var4;
                var5 = var3.subscriptionPreview;
                var6 = var2 != var5;
                var4 = null;
                if(!var6) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var4 = var5;
case 11:
                var1['subscriptionPreview'] = var4;
                var5 = var3.updateType;
                var6 = var2 != var5;
                var4 = null;
                if(!var6) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var4 = var5;
case 13:
                var1['updateType'] = var4;
                var3 = var3.resetBillingCycle;
                var2 = var2 != var3;
                if(!var2) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var2 = var3;
case 15:
                var1['resetBillingCycle'] = var2;
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
        var6 = 'createFromServer';
        var1['key'] = var6;
        var2 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = arg1;
                var3 = null;
                var2 = var3 == var5;
                var1 = null;
                if(var2) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var4 = _closure2_slot0;
                var2 = {};
                var7 = var5.subscription_id;
                var8 = var3 != var7;
                var6 = null;
                if(!var8) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var6 = var7;
case 19:
                var2['subscriptionId'] = var6;
                var8 = var5.subscription_preview;
                var7 = var3 == var8;
                var6 = null;
                if(var7) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                var7 = {};
                var9 = var8.currency;
                var7['currency'] = var9;
                var9 = var8.country_code;
                var7['countryCode'] = var9;
                var10 = var8.subscription_trial_id;
                var11 = var3 != var10;
                var9 = null;
                if(!var11) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                var9 = var10;
case 23:
                var7['subscriptionTrialId'] = var9;
                var11 = var8.renewal_info;
                var10 = var3 == var11;
                var9 = null;
                if(var10) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                var10 = {};
                var12 = var11.price;
                var10['price'] = var12;
                var12 = var11.currency;
                var10['currency'] = var12;
                var13 = var11.renewal_line_items;
                if(!(var3 == var13)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                var13 = new Array(0);
case 27:
                var12 = var13.map;
                var11 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var3 = var2.ref_order_line_item_id;
                    var1['refOrderLineItemId'] = var3;
                    var2 = var2.price;
                    var1['price'] = var2;
                    return var1;
                };
                var11 = var12.bind(var13)(var11);
                var10['renewalLineItems'] = var11;
                var9 = var10;
case 25:
                var7['renewalInfo'] = var9;
                var9 = var8.subscription_type;
                var10 = var3 != var9;
                var8 = null;
                if(!var10) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                var8 = var9;
case 29:
                var7['subscriptionType'] = var8;
                var6 = var7;
case 21:
                var2['subscriptionPreview'] = var6;
                var7 = var5.update_type;
                var8 = var3 != var7;
                var6 = null;
                if(!var8) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                var6 = var7;
case 31:
                var2['updateType'] = var6;
                var5 = var5.reset_billing_cycle;
                var3 = var3 != var5;
                if(!var3) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                var3 = var5;
case 33:
                var2['resetBillingCycle'] = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var15 = var3;
                var14 = var2;
                var2 = new var15[var4](var14, var13);
                var1 = var2 instanceof Object ? var2 : var3;
case 17:
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
    var2 = var2.bind(var1)(var4);
    var4 = 6;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/payments/records/SubscriptionFacetRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();