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
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/creator_monetization/guild_shop/useGuildShopPreviewVisible.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildShopPreviewVisible(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 2;
            var1 = var6[var1];
            var10 = undefined;
            var4 = var3.bind(var10)(var1);
            var2 = var4.useIsEligibleForGuildShopPreview;
            var1 = arg2;
            var4 = var2.bind(var4)(var1);
            var1 = 3;
            var1 = var6[var1];
            var7 = var3.bind(var10)(var1);
            var2 = var7.UNSAFE_useIsDismissibleContentDismissed;
            var1 = 4;
            var1 = var6[var1];
            var1 = var3.bind(var10)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.SERVER_SHOP_PHANTOM_PREVIEW;
            var2 = var2.bind(var7)(var1);
            var1 = 5;
            var1 = var6[var1];
            var7 = var3.bind(var10)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var1;
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
            var7 = var6.bind(var7)(var3, var1);
            var1 = null;
            var6 = var1 == var8;
            var3 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = var8.features;
            var11 = var12.has;
            var6 = _closure1_slot4;
            var6 = var6.PRODUCTS_AVAILABLE_FOR_PURCHASE;
            var3 = var11.bind(var12)(var6);
case 4:
            var6 = var1 != var3;
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var3;
case 6:
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 6;
            var3 = var12[var3];
            var12 = var11.bind(var10)(var3);
            var11 = var12.useGuildEligibleForGuildProducts;
            var3 = var1 == var8;
            var10 = undefined;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = var8.id;
case 8:
            var3 = 'useGuildShopPreviewVisible';
            var3 = var11.bind(var12)(var10, var3);
            var9 = _closure1_slot4;
            var11 = var9.CREATOR_MONETIZABLE;
            var10 = new Array(3);
            var10[0] = var11;
            var11 = var9.CREATOR_MONETIZABLE_PROVISIONAL;
            var10[1] = var11;
            var9 = var9.ROLE_SUBSCRIPTIONS_ENABLED;
            var10[2] = var9;
            var9 = var10.some;
            var5 = function(arg1) {
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
            var5 = var9.bind(var10)(var5);
            var1 = var1 != var8;
            if(!var1) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = var7;
case 12:
            if(!var1) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = !var6;
case 14:
            if(!var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var1 = var5;
case 16:
            if(!var1) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var1 = var4;
case 18:
            if(!var1) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var1 = var3;
case 20:
            if(!var1) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var1 = !var2;
case 22:
            return var1;
        }
    };
    var3['useGuildShopPreviewVisible'] = var2;
    return var1;
})();