// app/modules/premium/powerups/native/hooks/useGuildPowerupsBoostAction.tsx
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.BoostPurchaseIntent;
    var _closure1_slot6 = var7;
    var4 = var4.GuildPowerupType;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsObjects;
    var _closure1_slot8 = var7;
    var4 = var4.AnalyticsObjectTypes;
    var _closure1_slot9 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/hooks/useGuildPowerupsBoostAction.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildPowerupsBoostAction(arg1, arg2, arg3, arg4, arg5) {
        var9 = arg1;
        var11 = arg2;
        var10 = arg3;
        var8 = arg5;
        var _closure2_slot0 = var9;
        var _closure2_slot1 = var11;
        var _closure2_slot2 = var10;
        var _closure2_slot3 = var8;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var3 = 5;
        var3 = var5[var3];
        var12 = undefined;
        var6 = var4.bind(var12)(var3);
        var3 = arg4;
        var3 = var6.bind(var12)(var3);
        var7 = var3.shouldUseMobileWebRedirectCheckout;
        var _closure2_slot4 = var7;
        var6 = var3.handleMobileWebRedirectCheckout;
        var _closure2_slot5 = var6;
        var3 = 6;
        var3 = var5[var3];
        var3 = var4.bind(var12)(var3);
        var3 = var3.bind(var12)();
        var5 = var3.analyticsLocations;
        var _closure2_slot6 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = _closure1_slot3;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = undefined;
                    var _closure4_slot0 = var2;
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var3 = _closure2_slot2;
                    var11 = 0;
                    if(!(!(var3 <= var11))) { _fun0001_ip = 4; continue _fun0001 }
case 6:
                    var4 = _closure1_slot5;
                    var4 = var4.hasFetched;
                    if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var4 = global;
                    var6 = var4.Promise;
                    var5 = var6.all;
                    var8 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var4 = 7;
                    var4 = var12[var4];
                    var8 = var8.bind(var2)(var4);
                    var4 = var8.init;
                    var8 = var4.bind(var8)();
                    var4 = new Array(2);
                    var4[0] = var8;
                    var10 = _closure1_slot0;
                    var8 = 8;
                    var8 = var12[var8];
                    var10 = var10.bind(var2)(var8);
                    var8 = var10.fetchGuildBoostSlots;
                    var8 = var8.bind(var10)();
                    var4[1] = var8;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=154);
case 9:
                    return var4;
case 10:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(!var5) { _fun0001_ip = 7; continue _fun0001 }
case 11:
                    return var4;
case 7:
                    var4 = _closure2_slot1;
                    var5 = var4.type;
                    var4 = _closure1_slot7;
                    var4 = var4.PERK;
                    var6 = undefined;
                    if(!(var5 === var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var4 = _closure1_slot6;
                    var6 = var4.PERK;
case 12:
                    _closure4_slot0 = var6;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 9;
                    var4 = var8[var4];
                    var8 = var5.bind(var2)(var4);
                    var5 = var8.getAvailableGuildBoostSlots;
                    var4 = _closure1_slot5;
                    var4 = var4.boostSlots;
                    var10 = var5.bind(var8)(var4);
                    var5 = var10.length;
                    var4 = _closure2_slot2;
                    if(!(!(var5 >= var4))) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var4 = _closure2_slot4;
                    if(var4) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 11;
                    var4 = var8[var4];
                    var8 = var5.bind(var2)(var4);
                    var5 = var8.launchGuildBoostFlowOrAlert;
                    var4 = {};
                    var12 = {};
                    var15 = _closure2_slot3;
                    var16 = var12;
                    var13 = copyDataProperties(var16, var15);
                    var13 = _closure1_slot8;
                    var14 = var13.BUTTON_CTA;
                    var13 = 'object';
                    var12[12] = var14;
                    var13 = _closure1_slot9;
                    var14 = var13.BUY;
                    var13 = 'objectType';
                    var12[12] = var14;
                    var4['source'] = var12;
                    var12 = _closure2_slot6;
                    var4['analyticsLocations'] = var12;
                    var12 = _closure2_slot0;
                    var4['guildId'] = var12;
                    var9 = function onPaymentSuccess() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 9;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.getAvailableGuildBoostSlots;
                            var3 = _closure1_slot5;
                            var3 = var3.boostSlots;
                            var9 = var4.bind(var5)(var3);
                            var4 = var9.length;
                            var3 = _closure2_slot2;
                            if(!(var4 >= var3)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 10;
                            var2 = var4[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.openTransferModal;
                            var2 = {};
                            var8 = var9.slice;
                            var7 = _closure2_slot2;
                            var6 = 0;
                            var6 = var8.bind(var9)(var6, var7);
                            var2['guildBoostSlots'] = var6;
                            var5 = _closure2_slot0;
                            var2['guildId'] = var5;
                            var5 = _closure4_slot0;
                            var2['intent'] = var5;
                            var2 = var3.bind(var4)(var2);
case 18:
                            return var1;
                        }
                    };
                    var4['onPaymentSuccess'] = var9;
                    var4 = var5.bind(var8)(var4);
                    _fun0001_ip = 4; continue _fun0001;
case 16:
                    var8 = _closure2_slot5;
                    var5 = _closure2_slot6;
                    var4 = _closure2_slot0;
                    var4 = var8.bind(var2)(var5, var4);
                    _fun0001_ip = 4; continue _fun0001;
case 14:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 10;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.openTransferModal;
                    var3 = {};
                    var9 = var10.slice;
                    var8 = _closure2_slot2;
                    var8 = var9.bind(var10)(var11, var8);
                    var3['guildBoostSlots'] = var8;
                    var7 = _closure2_slot0;
                    var3['guildId'] = var7;
                    var3['intent'] = var6;
                    var3 = var4.bind(var5)(var3);
case 4:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var2.bind(var12)(var1);
        var1 = new Array(7);
        var1[0] = var11;
        var1[1] = var10;
        var1[2] = var9;
        var1[3] = var8;
        var1[4] = var7;
        var1[5] = var6;
        var1[6] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();