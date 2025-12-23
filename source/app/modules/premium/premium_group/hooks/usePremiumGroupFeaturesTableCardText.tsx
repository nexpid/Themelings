// app/modules/premium/premium_group/hooks/usePremiumGroupFeaturesTableCardText.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.getPremiumGroupProductName;
    var _closure1_slot5 = var7;
    var4 = var4.HELP_CENTER_LINK;
    var _closure1_slot6 = var4;
    var4 = function getPremiumGroupFeaturesTableCardSubheaderString(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg2;
            var4 = arg3;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var8 = undefined;
            var1 = var2.bind(var8)(var1);
            var1 = var1.PremiumSubscriptionGroupRole;
            var2 = var1.PRIMARY;
            var1 = arg1;
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = null;
            var1 = var2 == var9;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 5;
            var1 = var10[var1];
            var1 = var5.bind(var8)(var1);
            var7 = var1.intl;
            var6 = var7.format;
            var5 = _closure1_slot1;
            var1 = 6;
            var1 = var10[var1];
            var1 = var5.bind(var8)(var1);
            var5 = var1.Nu9LNm;
            var1 = {};
            var1['primaryName'] = var9;
            var9 = _closure1_slot5;
            var9 = var9.bind(var8)();
            var1['premiumGroupProductName'] = var9;
            var2 = var6.bind(var7)(var5, var1);
case 4:
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var6 = null;
            var5 = var6 == var4;
            var1 = null;
            if(var5) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var7 = var4.planIdFromItems;
            var4 = var6 == var7;
            var1 = null;
            if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var5 = _closure1_slot3;
            var4 = var5.get;
            var5 = var4.bind(var5)(var7);
            var4 = var6 == var5;
            var1 = null;
            if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 10:
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 3;
            var4 = var9[var4];
            var6 = var6.bind(var8)(var4);
            var4 = var6.getPrice;
            var6 = var4.bind(var6)(var7);
            var4 = _closure1_slot0;
            var3 = 4;
            var7 = var9[var3];
            var11 = var4.bind(var8)(var7);
            var10 = var11.formatPrice;
            var7 = var6.amount;
            var6 = var6.currency;
            var7 = var10.bind(var11)(var7, var6);
            var6 = var5.interval;
            var5 = var5.intervalCount;
            var3 = var9[var3];
            var4 = var4.bind(var8)(var3);
            var3 = var4.formatRate;
            var1 = var3.bind(var4)(var7, var6, var5);
case 7:
            var2 = var1;
case 6:
            var1 = null;
            var3 = var1 == var2;
            var1 = '...';
            if(var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = var2;
case 11:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/premium_group/hooks/usePremiumGroupFeaturesTableCardText.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 7;
            var3 = var1[var5];
            var8 = undefined;
            var3 = var6.bind(var8)(var3);
            var3 = var3.PremiumSubscriptionGroupRole;
            var9 = var3.MEMBER;
            var4 = _closure1_slot1;
            var3 = 8;
            var3 = var1[var3];
            var4 = var4.bind(var8)(var3);
            var3 = {};
            var10 = true;
            var3['useCachedData'] = var10;
            var9 = var2 === var9;
            var3['fetch'] = var9;
            var4 = var4.bind(var8)(var3);
            var3 = 9;
            var3 = var1[var3];
            var11 = var6.bind(var8)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getPremiumGroupSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var10.bind(var11)(var9, var3);
            var1 = var1[var5];
            var1 = var6.bind(var8)(var1);
            var1 = var1.PremiumSubscriptionGroupRole;
            var1 = var1.UNSPECIFIED;
            if(!(var2 !== var1)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var1 = _closure1_slot7;
            var3 = var1.bind(var8)(var2, var4, var3);
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var8)(var1);
            var1 = var1.PremiumSubscriptionGroupRole;
            var1 = var1.PRIMARY;
            if(!(var2 !== var1)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var1 = var2.bind(var8)(var1);
            var5 = var1.intl;
            var4 = var5.format;
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 6;
            var1 = var6[var1];
            var1 = var2.bind(var8)(var1);
            var2 = arg2;
            if(var2) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var2 = var1.qqfnOm;
            _fun0002_ip = 19; continue _fun0002;
case 17:
            var2 = var1.xF+upx;
case 19:
            var1 = {};
            var6 = _closure1_slot6;
            var1['helpCenterLink'] = var6;
            var2 = var4.bind(var5)(var2, var1);
            _fun0002_ip = 20; continue _fun0002;
case 15:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 5;
            var1 = var9[var1];
            var1 = var4.bind(var8)(var1);
            var6 = var1.intl;
            var5 = var6.format;
            var4 = _closure1_slot1;
            var1 = 6;
            var1 = var9[var1];
            var1 = var4.bind(var8)(var1);
            var4 = var1.+R/K74;
            var1 = {};
            var9 = _closure1_slot6;
            var1['helpCenterLink'] = var9;
            var7 = _closure1_slot5;
            var7 = var7.bind(var8)();
            var1['premiumGroupProductName'] = var7;
            var2 = var5.bind(var6)(var4, var1);
case 20:
            var1 = {};
            var1['subheaderString'] = var3;
            var1['bodyString'] = var2;
            return var1;
case 13:
            var1 = null;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();