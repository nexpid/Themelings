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
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/content_inventory_entry/utils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isContentInventoryFallbackEmbed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 1;
            var1 = var4[var1];
            var4 = undefined;
            var6 = var3.bind(var4)(var1);
            var5 = var6.hasFlag;
            var1 = arg1;
            var1 = var1.flags;
            var3 = null;
            var7 = var3 != var1;
            var3 = 0;
            if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1;
case 2:
            var1 = _closure1_slot2;
            var1 = var1.IS_CONTENT_INVENTORY_ENTRY;
            var1 = var5.bind(var6)(var3, var1);
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 2;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.isContentInventoryEmbedEnabled;
            var2 = 'isContentInventoryFallbackEmbed';
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var3['isContentInventoryFallbackEmbed'] = var2;
    return var1;
})();