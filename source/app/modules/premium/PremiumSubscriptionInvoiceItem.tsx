// app/modules/premium/PremiumSubscriptionInvoiceItem.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var4 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 1;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/PremiumSubscriptionInvoiceItem.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function coalesceInvoiceItems(arg1) {
        var5 = arg1;
        var3 = new Array(0);
        var _closure2_slot0 = var3;
        var2 = global;
        var2 = var2.Set;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var7 = var4;
        var2 = new var7[var2](var6);
        var2 = var2 instanceof Object ? var2 : var4;
        var _closure2_slot1 = var2;
        var4 = var5.map;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arg1;
                var9 = _closure2_slot0;
                var2 = var9.length;
                var8 = 0;
                var2 = var8 < var2;
                var4 = undefined;
                var6 = 0;
                if(!var2) { _fun0001_ip = 139; continue _fun0001 }
 31:
                var2 = var9[var6];
                var10 = var2.subscriptionPlanId;
                var5 = var1.subscriptionPlanId;
                if(!(var10 === var5)) { _fun0001_ip = 127; continue _fun0001 }
 51:
                var10 = var2.subscriptionPlanPrice;
                var5 = var1.subscriptionPlanPrice;
                if(!(var10 === var5)) { _fun0001_ip = 127; continue _fun0001 }
 67:
                var10 = var2.amount;
                var5 = var1.amount;
                if(!(var10 === var5)) { _fun0001_ip = 127; continue _fun0001 }
 83:
                var10 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var8];
                var12 = var10.bind(var4)(var5);
                var11 = var12.isEqual;
                var10 = var2.discounts;
                var5 = var1.discounts;
                var5 = var11.bind(var12)(var10, var5);
                if(var5) { _fun0001_ip = 167; continue _fun0001 }
 127:
                var6 = var6 + 1;
                var5 = var9.length;
                if(var6 < var5) { _fun0001_ip = 31; continue _fun0001 }
 139:
                var7 = _closure2_slot0;
                var6 = var7.push;
                var5 = {};
                var14 = var5;
                var13 = var1;
                var8 = copyDataProperties(var14, var13);
                var5 = var6.bind(var7)(var5);
                return var4;
 167:
                var5 = _closure2_slot1;
                var4 = var5.add;
                var3 = var2.subscriptionPlanId;
                var3 = var4.bind(var5)(var3);
                var3 = var2.quantity;
                var1 = var1.quantity;
                var1 = var3 + var1;
                var2['quantity'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2);
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = arg1;
                var1 = {};
                var7 = var1;
                var6 = var3;
                var4 = copyDataProperties(var7, var6);
                var _closure3_slot0 = var1;
                var5 = _closure2_slot1;
                var4 = var5.has;
                var3 = var3.subscriptionPlanId;
                var3 = var4.bind(var5)(var3);
                if(!var3) { _fun0002_ip = 96; continue _fun0002 }
 47:
                var4 = var1.amount;
                var3 = var1.quantity;
                var3 = var4 * var3;
                var1['amount'] = var3;
                var4 = var1.discounts;
                var3 = var4.map;
                var2 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var5 = var1;
                    var4 = var2;
                    var3 = copyDataProperties(var5, var4);
                    var3 = var2.amount;
                    var2 = _closure3_slot0;
                    var2 = var2.quantity;
                    var3 = var3 * var2;
                    var2 = 'amount';
                    var1[var2] = var3;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var1['discounts'] = var2;
 96:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['coalesceInvoiceItems'] = var4;
    var2 = function createInvoiceItemFromServer(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.id;
        var1['id'] = var3;
        var3 = var2.subscription_plan_id;
        var1['subscriptionPlanId'] = var3;
        var3 = var2.subscription_plan_price;
        var1['subscriptionPlanPrice'] = var3;
        var3 = var2.amount;
        var1['amount'] = var3;
        var3 = var2.quantity;
        var1['quantity'] = var3;
        var2 = var2.discounts;
        var1['discounts'] = var2;
        return var1;
    };
    var3['createInvoiceItemFromServer'] = var2;
    return var1;
})();