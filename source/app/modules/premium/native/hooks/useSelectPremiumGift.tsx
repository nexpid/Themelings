// app/modules/premium/native/hooks/useSelectPremiumGift.tsx
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/hooks/useSelectPremiumGift.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSelectPremiumGift(arg1) {
        var8 = _closure1_slot0;
        var11 = _closure1_slot2;
        var2 = 2;
        var4 = var11[var2];
        var2 = undefined;
        var5 = var8.bind(var2)(var4);
        var4 = var5.useNavigation;
        var5 = var4.bind(var5)();
        var _closure2_slot0 = var5;
        var4 = 3;
        var4 = var11[var4];
        var6 = var8.bind(var2)(var4);
        var4 = var6.useNativeGiftContext;
        var4 = var4.bind(var6)();
        var10 = var4.setPremiumType;
        var _closure2_slot1 = var10;
        var7 = var4.recipientUserId;
        var _closure2_slot2 = var7;
        var9 = var4.planInterval;
        var _closure2_slot3 = var9;
        var6 = var4.setOrder;
        var _closure2_slot4 = var6;
        var4 = 4;
        var4 = var11[var4];
        var11 = var8.bind(var2)(var4);
        var8 = var11.useCreateOrReuseGiftOrder;
        var4 = arg1;
        var8 = var8.bind(var11)(var4);
        var _closure2_slot5 = var8;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var1 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                        StartGenerator();
                        var10 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                        var9 = undefined;
                        var4 = undefined;
                        var7 = undefined;
                        var2 = _closure2_slot4;
                        var2 = var2.bind(var9)(var9);
                        var2 = _closure2_slot1;
                        var2 = var2.bind(var9)(var10);
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 5;
                        var2 = var8[var2];
                        var8 = var6.bind(var9)(var2);
                        var6 = var8.getPlanIdForPremiumType;
                        var2 = _closure2_slot3;
                        var7 = var6.bind(var8)(var10, var2);
case 4: // try_start_0
                        var6 = _closure2_slot5;
                        var2 = {};
                        var2['planId'] = var7;
                        var7 = _closure2_slot2;
                        var2['recipientUserId'] = var7;
                        var2 = var6.bind(var9)(var2);
                        SaveGenerator(address=108);
case 5:
                        return var2;
case 6:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                        var4 = var2;
case 9: // try_end0
                        var6 = _closure2_slot4;
                        var4 = var6.bind(var9)(var4);
                        var6 = _closure2_slot0;
                        var4 = var6.navigate;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 8;
                        var3 = var8[var3];
                        var3 = var7.bind(var9)(var3);
                        var3 = var3.PremiumGiftScreens;
                        var3 = var3.CUSTOMIZATION;
                        var3 = var4.bind(var6)(var3);
                        return var9;
case 7:
                        return var2;
case 10: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var3 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var2 = 6;
                        var2 = var10[var2];
                        var4 = var3.bind(var9)(var2);
                        var3 = var4.show;
                        var2 = {};
                        var8 = _closure1_slot0;
                        var5 = 7;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var11 = var6.intl;
                        var7 = var11.string;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var6 = var6.t;
                        var6 = var6.R0RpRX;
                        var6 = var7.bind(var11)(var6);
                        var2['title'] = var6;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var10[var5];
                        var5 = var8.bind(var9)(var5);
                        var5 = var5.t;
                        var5 = var5.CKsXk3;
                        var5 = var6.bind(var7)(var5);
                        var2['body'] = var5;
                        var2 = var3.bind(var4)(var2);
                        var2 = undefined;
                        return var2;
case 2:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var2 = var1.bind(var2)();
        var1 = new Array(6);
        var1[0] = var10;
        var1[1] = var9;
        var1[2] = var8;
        var1[3] = var7;
        var1[4] = var6;
        var1[5] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useSelectPremiumGift'] = var2;
    return var1;
})();