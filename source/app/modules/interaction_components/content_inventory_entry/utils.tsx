// app/modules/interaction_components/content_inventory_entry/utils.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageEmbedFlags;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/content_inventory_entry/utils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isContentInventoryFallbackEmbed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.hasFlag;
            var2 = arg1;
            var5 = var2.flags;
            var2 = null;
            var6 = var2 != var5;
            var2 = 0;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var5;
case 2:
            var1 = _closure1_slot2;
            var1 = var1.IS_CONTENT_INVENTORY_ENTRY;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['isContentInventoryFallbackEmbed'] = var2;
    return var1;
})();