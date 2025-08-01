// app/modules/user_settings/native/premium_marketing/PremiumFeaturesCards.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var9 = 0;
    var5 = var7[var9];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var8 = 1;
    var2 = var7[var8];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot2 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.PremiumTypes;
    var _closure1_slot3 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot4 = var2;
    var2 = 4;
    var2 = var7[var2];
    var10 = var6.bind(var1)(var2);
    var5 = var10.createStyles;
    var2 = {};
    var11 = {};
    var12 = '100%';
    var11['width'] = var12;
    var2['container'] = var11;
    var11 = {};
    var12 = 12;
    var11['marginBottom'] = var12;
    var2['cardWithMargin'] = var11;
    var2 = var5.bind(var10)(var2);
    var _closure1_slot5 = var2;
    var2 = {};
    var2['TIER_0_LEADING'] = var9;
    var5 = 'TIER_0_LEADING';
    var2[var9] = var5;
    var2['TIER_2_LEADING'] = var8;
    var5 = 'TIER_2_LEADING';
    var2[var8] = var5;
    var _closure1_slot6 = var2;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/native/premium_marketing/PremiumFeaturesCards.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.style;
            var2 = var1.applicationId;
            var _closure2_slot0 = var2;
            var2 = var1.onPaymentSuccess;
            var _closure2_slot1 = var2;
            var2 = var1.onPaymentDismiss;
            var _closure2_slot2 = var2;
            var3 = var1.order;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 64; continue _fun0001 }
 51:
            var1 = _closure1_slot6;
            var3 = var1.TIER_0_LEADING;
 64:
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var2 = _closure1_slot5;
            var5 = var2.bind(var4)();
            _closure2_slot3 = var5;
            var2 = _closure1_slot6;
            var2 = var2.TIER_2_LEADING;
            if(!(var2 !== var3)) { _fun0001_ip = 141; continue _fun0001 }
 101:
            var2 = _closure1_slot6;
            var2 = var2.TIER_0_LEADING;
            var2 = _closure1_slot3;
            var3 = var2.TIER_0;
            var8 = new Array(2);
            var8[0] = var3;
            var2 = var2.TIER_2;
            var8[1] = var2;
            _fun0001_ip = 172; continue _fun0001;
 141:
            var3 = _closure1_slot3;
            var9 = var3.TIER_2;
            var2 = new Array(2);
            var2[0] = var9;
            var3 = var3.TIER_0;
            var2[1] = var3;
            var8 = var2;
 172:
            _closure2_slot4 = var8;
            var3 = _closure1_slot4;
            var2 = _closure1_slot2;
            var1 = {};
            var9 = var5.container;
            var5 = new Array(2);
            var5[0] = var9;
            var5[1] = var7;
            var1['style'] = var5;
            var5 = null;
            var7 = var5 == var8;
            var5 = undefined;
            if(var7) { _fun0001_ip = 233; continue _fun0001 }
 218:
            var7 = var8.map;
            var6 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = arg1;
                    var4 = _closure1_slot4;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 5;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1['premiumType'] = var5;
                    var7 = _closure2_slot4;
                    var8 = var7.length;
                    var7 = 1;
                    var8 = var8 - var7;
                    var7 = arg2;
                    var8 = var7 < var8;
                    var7 = undefined;
                    if(!var8) { _fun0002_ip = 80; continue _fun0002 }
 70:
                    var8 = _closure2_slot3;
                    var7 = var8.cardWithMargin;
 80:
                    var1['style'] = var7;
                    var7 = _closure2_slot0;
                    var1['applicationId'] = var7;
                    var7 = _closure2_slot1;
                    var1['onPaymentSuccess'] = var7;
                    var6 = _closure2_slot2;
                    var1['onPaymentDismiss'] = var6;
                    var1 = var4.bind(var3)(var2, var1, var5);
                    return var1;
                }
            };
            var5 = var7.bind(var8)(var6);
 233:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['PremiumFeatureCardOrder'] = var2;
    return var1;
})();