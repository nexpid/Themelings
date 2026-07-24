// app/modules/premium_marketing/native/components/BuyNitroAccountCredit.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 7;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.modules;
    var11 = var11.mobile;
    var11 = var11.TABLE_ROW_BORDER_RADIUS;
    var10['borderRadius'] = var11;
    var4['creditList'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var2 = function BuyNitroAccountCredit() {
        var3 = _closure1_slot8;
        var4 = undefined;
        var8 = var3.bind(var4)();
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var3 = 8;
        var6 = var9[var3];
        var13 = var5.bind(var4)(var6);
        var12 = var13.useStateFromStores;
        var6 = _closure1_slot5;
        var11 = new Array(1);
        var11[0] = var6;
        var6 = 9;
        var6 = var9[var6];
        var6 = var5.bind(var4)(var6);
        var14 = var6.areSetsEqual;
        var16 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot5;
                var2 = var3.getForApplication;
                var1 = _closure1_slot6;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if(!(var2 == var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = global;
                var2 = var2.Set;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var5 = var3;
                var2 = new var5[var2](var4);
                var1 = var2 instanceof Object ? var2 : var3;
case 2:
                return var1;
            }
        };
        var15 = new Array(0);
        var18 = var13;
        var17 = var11;
        var6 = var18[var12](var17, var16, var15, var14, var13);
        var7 = var9[var3];
        var12 = var5.bind(var4)(var7);
        var11 = var12.useStateFromStores;
        var7 = _closure1_slot4;
        var10 = new Array(1);
        var10[0] = var7;
        var7 = function() {
            var2 = _closure1_slot4;
            var1 = var2.getPremiumTypeSubscription;
            var1 = var1.bind(var2)();
            return var1;
        };
        var7 = var11.bind(var12)(var10, var7);
        var3 = var9[var3];
        var10 = var5.bind(var4)(var3);
        var5 = var10.useStateFromStores;
        var11 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var11;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var4 = var1.bind(var2)();
                var1 = null;
                var3 = var1 == var4;
                var2 = undefined;
                if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var3 = var4.isPremiumWithPremiumGroup;
                var2 = var3.bind(var4)();
case 4:
                var1 = var1 != var2;
                if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var2;
case 6:
                return var1;
            }
        };
        var5 = var5.bind(var10)(var3, var2);
        var3 = _closure1_slot7;
        var2 = _closure1_slot1;
        var1 = 10;
        var1 = var9[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var8 = var8.creditList;
        var1['creditListContainerStyle'] = var8;
        var1['currentSubscription'] = var7;
        var1['entitlements'] = var6;
        var1['hasPremiumGroup'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium_marketing/native/components/BuyNitroAccountCredit.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();