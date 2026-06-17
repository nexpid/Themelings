// app/modules/parent_tools/FamilyCenterActivityGiftRowUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var4 = function formatGiftDate(arg1) {
        var1 = global;
        var1 = var1.Intl;
        var7 = var1.DateTimeFormat;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 0;
        var1 = var6[var1];
        var4 = undefined;
        var1 = var5.bind(var4)(var1);
        var1 = var1.intl;
        var9 = var1.currentLocale;
        var1 = var7.prototype;
        var2 = Object.create(var1, {constructor: {value: var7}});
        var8 = {'month': 'short', 'day': 'numeric'};
        var10 = var2;
        var1 = new var10[var7](var9, var8, var7);
        var3 = var1 instanceof Object ? var1 : var2;
        var2 = var3.format;
        var1 = 1;
        var1 = var6[var1];
        var5 = var5.bind(var4)(var1);
        var4 = var5.parseISO;
        var1 = arg1;
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot3 = var4;
    var1 = 4;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/parent_tools/FamilyCenterActivityGiftRowUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.sku_id;
        var1['skuId'] = var3;
        var3 = var2.subscription_plan_id;
        var1['subscriptionPlanId'] = var3;
        var3 = var2.price;
        var1['price'] = var3;
        var3 = var2.gifter_user_id;
        var1['gifterUserId'] = var3;
        var3 = var2.claimed;
        var1['claimed'] = var3;
        var3 = var2.offered_at;
        var1['offeredAt'] = var3;
        var2 = var2.claimed_at;
        var1['claimedAt'] = var2;
        return var1;
    };
    var3['getGiftRowDisplayInfo'] = var5;
    var3['formatGiftDate'] = var4;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = var3.claimed;
            var2 = var3.price;
            var8 = var3.gifterName;
            var7 = var3.offeredAt;
            var10 = var3.claimedAt;
            var11 = null;
            var3 = var11 != var2;
            var9 = null;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 2;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.formatPrice;
            var3 = var2.amount;
            var2 = var2.currency;
            var9 = var4.bind(var5)(var3, var2);
case 2:
            if(!(var11 != var9)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!(var11 == var8)) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var3 = var11 != var9;
            var2 = null;
            if(!var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = var9;
            _fun0001_ip = 7; continue _fun0001;
case 6:
            var5 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 0;
            var4 = var13[var4];
            var12 = undefined;
            var4 = var5.bind(var12)(var4);
            var6 = var4.intl;
            var5 = var6.formatToPlainString;
            var4 = _closure1_slot1;
            var3 = 3;
            var3 = var13[var3];
            var3 = var4.bind(var12)(var3);
            var4 = var3.o44n/1;
            var3 = {};
            var3['price'] = var9;
            var3['username'] = var8;
            var2 = var5.bind(var6)(var4, var3);
case 7:
            var3 = new Array(2);
            var3[0] = var2;
            var4 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 0;
            var2 = var12[var2];
            var9 = undefined;
            var2 = var4.bind(var9)(var2);
            var6 = var2.intl;
            var5 = var6.formatToPlainString;
            var4 = _closure1_slot1;
            var2 = 3;
            var2 = var12[var2];
            var2 = var4.bind(var9)(var2);
            if(var1) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = var2.gAG45y;
            var1 = {};
            var12 = _closure1_slot3;
            var12 = var12.bind(var9)(var7);
            var1['date'] = var12;
            var1 = var5.bind(var6)(var4, var1);
            _fun0001_ip = 11; continue _fun0001;
case 9:
            var4 = var2.kDyllq;
            var2 = {};
            var8 = _closure1_slot3;
            if(!(var11 != var10)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = var10;
case 12:
            var7 = var8.bind(var9)(var7);
            var2['date'] = var7;
            var1 = var5.bind(var6)(var4, var2);
case 11:
            var3[1] = var1;
            var2 = var3.filter;
            var1 = global;
            var1 = var1.Boolean;
            var3 = var2.bind(var3)(var1);
            var2 = var3.join;
            var1 = ' • ';
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getGiftSubtext'] = var2;
    return var1;
})();