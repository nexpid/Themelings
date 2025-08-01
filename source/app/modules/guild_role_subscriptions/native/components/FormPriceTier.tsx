// app/modules/guild_role_subscriptions/native/components/FormPriceTier.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.LoadingState;
    var _closure1_slot3 = var7;
    var4 = var4.usePriceTiersAvailableInGuild;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CurrencyCodes;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/FormPriceTier.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FormPriceTier(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.disabled;
            var2 = var1.guildId;
            var _closure2_slot0 = var2;
            var13 = var1.price;
            var _closure2_slot1 = var13;
            var1 = var1.onChange;
            var _closure2_slot2 = var1;
            var1 = _closure1_slot4;
            var4 = undefined;
            var2 = var1.bind(var4)(var2);
            var1 = var2.tiers;
            var _closure2_slot3 = var1;
            var8 = var2.state;
            var2 = var2.onRefresh;
            var _closure2_slot4 = var2;
            var2 = _closure1_slot5;
            var12 = var2.USD;
            var _closure2_slot5 = var12;
            var9 = null;
            if(!(var9 != var1)) { _fun0001_ip = 255; continue _fun0001 }
 101:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 5;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var10 = var9 == var13;
            var9 = undefined;
            if(var10) { _fun0001_ip = 168; continue _fun0001 }
 136:
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 6;
            var10 = var14[var10];
            var11 = var11.bind(var4)(var10);
            var10 = var11.formatPrice;
            var9 = var10.bind(var11)(var13, var12);
 168:
            var1['label'] = var9;
            var1['disabled'] = var6;
            var6 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var1 = 7;
                    var4 = var14[var1];
                    var1 = undefined;
                    var9 = var5.bind(var1)(var4);
                    var11 = _closure2_slot3;
                    var8 = null;
                    var6 = var8 != var11;
                    var4 = 'handleSelectPrice must only be called if tiers != null';
                    var4 = var9.bind(var1)(var6, var4);
                    var4 = 8;
                    var4 = var14[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openLazy;
                    var13 = _closure1_slot0;
                    var3 = 10;
                    var3 = var14[var3];
                    var9 = var13.bind(var1)(var3);
                    var3 = 9;
                    var4 = var14[var3];
                    var3 = var14.paths;
                    var4 = var9.bind(var1)(var4, var3);
                    var3 = {};
                    var9 = 4;
                    var10 = var14[var9];
                    var10 = var13.bind(var1)(var10);
                    var12 = var10.intl;
                    var10 = var12.string;
                    var9 = var14[var9];
                    var9 = var13.bind(var1)(var9);
                    var9 = var9.t;
                    var9 = var9.nCOuYG;
                    var9 = var10.bind(var12)(var9);
                    var3['title'] = var9;
                    var10 = var11.map;
                    var9 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 6;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.formatPrice;
                        var3 = _closure2_slot5;
                        var3 = var4.bind(var5)(var2, var3);
                        var1['label'] = var3;
                        var1['value'] = var2;
                        return var1;
                    };
                    var9 = var10.bind(var11)(var9);
                    var3['items'] = var9;
                    var2 = function onItemSelect(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var3 = _closure2_slot2;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0003_ip = 27; continue _fun0003 }
 13:
                            var3 = _closure2_slot2;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var3.bind(var2)(var1);
 27:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 8;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.hideActionSheet;
                            var2 = var2.bind(var3)();
                            return var1;
                        }
                    };
                    var3['onItemSelect'] = var2;
                    var2 = _closure2_slot1;
                    var8 = var8 != var2;
                    var2 = undefined;
                    if(!var8) { _fun0002_ip = 208; continue _fun0002 }
 204:
                    var2 = _closure2_slot1;
 208:
                    var3['selectedItem'] = var2;
                    var2 = 'GuildRoleSubscriptionPriceTierSelect';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    return var1;
                }
            };
            var1['onPress'] = var6;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 4;
            var9 = var12[var6];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var6 = var12[var6];
            var6 = var11.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.nCOuYG;
            var6 = var9.bind(var10)(var6);
            var1['placeholder'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 255:
            var1 = _closure1_slot3;
            var1 = var1.LOADING;
            if(!(var8 !== var1)) { _fun0001_ip = 326; continue _fun0001 }
 269:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 4;
            var2 = var9[var1];
            var2 = var6.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var9[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.R0RpRU;
            var6 = var2.bind(var3)(var1);
            _fun0001_ip = 381; continue _fun0001;
 326:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 4;
            var2 = var10[var1];
            var2 = var9.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var10[var1];
            var1 = var9.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.ZTNur6;
            var6 = var2.bind(var3)(var1);
 381:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 5;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var7 = _closure1_slot3;
            var7 = var7.LOADING;
            var7 = var8 === var7;
            var1['disabled'] = var7;
            var1['placeholder'] = var6;
            var5 = function onPress() {
                var3 = _closure2_slot4;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();