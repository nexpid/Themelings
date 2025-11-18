// app/modules/collectibles/utils/WideBannerDismissibleContentVersion.tsx
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
    var4 = var4.CollectibleShopTab;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/utils/WideBannerDismissibleContentVersion.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getWideBannerDismissibleContentVersion() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot3;
            var2 = var1.HOME;
            var7 = new Array(3);
            var7[0] = var2;
            var2 = var1.ORBS;
            var7[1] = var2;
            var1 = var1.CATALOG;
            var7[2] = var1;
            var1 = var7.length;
            var2 = 0;
            var1 = var2 < var1;
            var6 = null;
            var4 = 0;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = var7[var4];
            var3 = _closure1_slot2;
            var1 = var3.getShopBlocks;
            var10 = var1.bind(var3)(var10);
            var3 = var10.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.ShopBlockType;
                var1 = var1.WIDE_BANNER;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var3.bind(var10)(var1);
            var10 = var6 == var1;
            var3 = undefined;
            if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var1.dismissibleContentVersion;
case 4:
            if(!(var6 == var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var4 + 1;
            var3 = var7.length;
            if(var4 < var3) { _fun0001_ip = 3; continue _fun0001 }
case 2:
            return var2;
case 6:
            var1 = var1.dismissibleContentVersion;
            return var1;
        }
    };
    var3['getWideBannerDismissibleContentVersion'] = var2;
    return var1;
})();