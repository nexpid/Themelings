// app/modules/premium/powerups/native/hooks/useGuildPowerupOnActivate.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
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
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/hooks/useGuildPowerupOnActivate.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildPowerupOnActivate(arg1, arg2) {
        var10 = arg1;
        var11 = arg2;
        var _closure2_slot0 = var10;
        var _closure2_slot1 = var11;
        var7 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 4;
        var1 = var8[var1];
        var6 = undefined;
        var1 = var7.bind(var6)(var1);
        var1 = var1.bind(var6)(var10, var11);
        var12 = var1.onToggle;
        var _closure2_slot2 = var12;
        var3 = var1.isLoading;
        var2 = var1.error;
        var9 = _closure1_slot0;
        var1 = 5;
        var1 = var8[var1];
        var14 = var9.bind(var6)(var1);
        var13 = var14.useStateFromStores;
        var1 = _closure1_slot4;
        var9 = new Array(1);
        var9[0] = var1;
        var1 = function() {
            var3 = _closure1_slot4;
            var2 = var3.getGuild;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var9 = var13.bind(var14)(var9, var1);
        var _closure2_slot3 = var9;
        var1 = 6;
        var1 = var8[var1];
        var1 = var7.bind(var6)(var1);
        var10 = var1.bind(var6)(var10, var11);
        var _closure2_slot4 = var10;
        var1 = 7;
        var1 = var8[var1];
        var1 = var7.bind(var6)(var1);
        var1 = var1.bind(var6)();
        var8 = var1.analyticsLocations;
        var _closure2_slot5 = var8;
        var1 = {};
        var7 = _closure1_slot3;
        var6 = var7.useCallback;
        var5 = new Array(5);
        var5[0] = var12;
        var5[1] = var11;
        var5[2] = var10;
        var5[3] = var9;
        var5[4] = var8;
        var4 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot3;
                var2 = null;
                if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = _closure2_slot1;
                if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var2 = function checkBoostsAndActivate() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.getGuildPowerupsBoostCount;
                        var3 = _closure2_slot3;
                        var3 = var3.id;
                        var3 = var4.bind(var5)(var3);
                        var4 = var3.available;
                        var3 = _closure2_slot1;
                        var3 = var3.cost;
                        if(!(var4 >= var3)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                        var3 = _closure2_slot2;
                        var2 = true;
                        var2 = var3.bind(var1)(var2);
case 5:
                        return var1;
                    }
                };
                var _closure3_slot0 = var2;
                var3 = _closure2_slot4;
                var1 = _closure2_slot1;
                var1 = var1.cost;
                if(!(!(var3 >= var1))) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                var3 = _closure2_slot1;
                var4 = var3.cost;
                var1 = _closure2_slot4;
                var11 = var4 - var1;
                var _closure3_slot1 = var11;
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 9;
                var6 = var6[var4];
                var4 = undefined;
                var9 = var8.bind(var4)(var6);
                var8 = var9.getAvailableGuildBoostSlots;
                var6 = _closure1_slot5;
                var6 = var6.boostSlots;
                var10 = var8.bind(var9)(var6);
                var6 = var3.type;
                var3 = _closure1_slot7;
                var3 = var3.LEVEL;
                if(!(var6 !== var3)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                var3 = _closure1_slot6;
                var6 = var3.PERK;
                _fun0001_ip = 11; continue _fun0001;
case 9:
                var3 = _closure1_slot6;
                var6 = var3.LEVEL;
case 11:
                var _closure3_slot2 = var6;
                var8 = _closure1_slot1;
                var13 = _closure1_slot2;
                var3 = 10;
                var3 = var13[var3];
                var9 = var8.bind(var4)(var3);
                var8 = var9.hideActionSheet;
                var12 = _closure1_slot0;
                var3 = 11;
                var3 = var13[var3];
                var3 = var12.bind(var4)(var3);
                var3 = var3.GUILD_POWERUPS_BOTTOM_SHEET_KEY;
                var3 = var8.bind(var9)(var3);
                var3 = var10.length;
                var9 = 0;
                if(!(!(var3 > var9))) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var3 = 13;
                var3 = var12[var3];
                var16 = var8.bind(var4)(var3);
                var15 = var16.launchGuildBoostFlowOrAlert;
                var20 = _closure2_slot5;
                var21 = {'page': 'Guild Powerups', 'section': 'Powerup Activation'};
                var19 = function() {
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 14;
                    var2 = var6[var2];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.popWithKey;
                    var4 = _closure1_slot0;
                    var1 = 15;
                    var1 = var6[var1];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.PREMIUM_KEY;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var18 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
                        var10 = var4.bind(var5)(var3);
                        var4 = var10.length;
                        var3 = _closure3_slot1;
                        if(!(var4 >= var3)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 12;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openTransferModal;
                        var2 = {};
                        var9 = var10.slice;
                        var7 = _closure2_slot1;
                        var8 = var7.cost;
                        var7 = 0;
                        var7 = var9.bind(var10)(var7, var8);
                        var2['guildBoostSlots'] = var7;
                        var6 = _closure2_slot3;
                        var6 = var6.id;
                        var2['guildId'] = var6;
                        var5 = _closure3_slot2;
                        var2['intent'] = var5;
                        var5 = function onResult(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                var1 = arg1;
                                if(!var1) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
case 16:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2['onResult'] = var5;
                        var2 = var3.bind(var4)(var2);
case 14:
                        return var1;
                    }
                };
                var17 = function() {
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 14;
                    var2 = var6[var2];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.popWithKey;
                    var4 = _closure1_slot0;
                    var1 = 15;
                    var1 = var6[var1];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.PREMIUM_KEY;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var22 = var16;
                var3 = var22[var15](var21, var20, var19, var18, var17, var16);
                _fun0001_ip = 2; continue _fun0001;
case 12:
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 12;
                var1 = var8[var1];
                var4 = var3.bind(var4)(var1);
                var3 = var4.openTransferModal;
                var1 = {};
                var8 = var10.slice;
                var8 = var8.bind(var10)(var9, var11);
                var1['guildBoostSlots'] = var8;
                var7 = _closure2_slot3;
                var7 = var7.id;
                var1['guildId'] = var7;
                var1['intent'] = var6;
                var5 = function onResult(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = arg1;
                        if(!var1) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 16:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onResult'] = var5;
                var1 = var3.bind(var4)(var1);
                _fun0001_ip = 2; continue _fun0001;
case 7:
                var1 = undefined;
                var1 = var2.bind(var1)();
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var4 = var6.bind(var7)(var4, var5);
        var1['onActivate'] = var4;
        var1['isLoading'] = var3;
        var1['error'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();