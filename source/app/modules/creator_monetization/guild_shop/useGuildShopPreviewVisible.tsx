// app/modules/creator_monetization/guild_shop/useGuildShopPreviewVisible.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Permissions;
    var _closure1_slot3 = var7;
    var4 = var4.GuildFeatures;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/creator_monetization/guild_shop/useGuildShopPreviewVisible.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildShopPreviewVisible(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 2;
            var1 = var6[var1];
            var3 = undefined;
            var9 = var5.bind(var3)(var1);
            var2 = var9.UNSAFE_useIsDismissibleContentDismissed;
            var1 = 3;
            var1 = var6[var1];
            var1 = var5.bind(var3)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.SERVER_SHOP_PHANTOM_PREVIEW;
            var2 = var2.bind(var9)(var1);
            var1 = 4;
            var1 = var6[var1];
            var9 = var5.bind(var3)(var1);
            var6 = var9.useStateFromStores;
            var1 = _closure1_slot2;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure1_slot2;
                    var4 = var5.can;
                    var3 = _closure1_slot3;
                    var3 = var3.ADMINISTRATOR;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
case 2:
                    return var1;
                }
            };
            var6 = var6.bind(var9)(var5, var1);
            var1 = null;
            var5 = var1 == var7;
            var9 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = var7.features;
            var10 = var11.has;
            var5 = _closure1_slot4;
            var5 = var5.PRODUCTS_AVAILABLE_FOR_PURCHASE;
            var9 = var10.bind(var11)(var5);
case 4:
            var5 = var1 != var9;
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var9;
case 6:
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var9 = 5;
            var9 = var11[var9];
            var10 = var10.bind(var3)(var9);
            var9 = var10.useGuildEligibleForGuildProducts;
            var11 = var1 == var7;
            var3 = undefined;
            if(var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var7.id;
case 8:
            var3 = var9.bind(var10)(var3);
            var8 = _closure1_slot4;
            var10 = var8.CREATOR_MONETIZABLE;
            var9 = new Array(3);
            var9[0] = var10;
            var10 = var8.CREATOR_MONETIZABLE_PROVISIONAL;
            var9[1] = var10;
            var8 = var8.ROLE_SUBSCRIPTIONS_ENABLED;
            var9[2] = var8;
            var8 = var9.some;
            var4 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var2 = _closure2_slot0;
                    var4 = var2.features;
                    var3 = var4.has;
                    var2 = arg1;
                    var1 = var3.bind(var4)(var2);
case 10:
                    return var1;
                }
            };
            var4 = var8.bind(var9)(var4);
            var1 = var1 != var7;
            if(!var1) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = var6;
case 12:
            if(!var1) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = !var5;
case 14:
            if(!var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var1 = var4;
case 16:
            if(!var1) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var1 = var3;
case 18:
            if(!var1) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var1 = !var2;
case 20:
            return var1;
        }
    };
    var3['useGuildShopPreviewVisible'] = var2;
    return var1;
})();