// app/modules/icymi/native/ContentInventoryEntryRow.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/ContentInventoryEntryRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ContentInventoryEntryRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.content;
            var _closure2_slot0 = var6;
            var5 = var1.renderForScreenshot;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 28; continue _fun0001 }
 26:
            var5 = false;
 28:
            var10 = var1.visible;
            var8 = var1.mediaMosaicMaxWidth;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 3;
            var3 = var9[var3];
            var9 = var7.bind(var4)(var3);
            var7 = var9.useStateFromStores;
            var11 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var11;
            var2 = function() {
                var3 = _closure1_slot3;
                var2 = var3.isBlockedOrIgnored;
                var1 = _closure2_slot0;
                var1 = var1.author_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var7.bind(var9)(var3, var2);
            if(var2) { _fun0001_ip = 322; continue _fun0001 }
 99:
            var3 = var6.content_type;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 4;
            var2 = var2[var9];
            var2 = var7.bind(var4)(var2);
            var2 = var2.ContentInventoryEntryType;
            var2 = var2.TOP_GAME;
            if(!(var2 !== var3)) { _fun0001_ip = 279; continue _fun0001 }
 144:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var2 = var7.bind(var4)(var2);
            var2 = var2.ContentInventoryEntryType;
            var2 = var2.PLAYED_GAME;
            if(!(var2 !== var3)) { _fun0001_ip = 279; continue _fun0001 }
 177:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var2 = var7.bind(var4)(var2);
            var2 = var2.ContentInventoryEntryType;
            var2 = var2.CUSTOM_STATUS;
            if(!(var2 !== var3)) { _fun0001_ip = 214; continue _fun0001 }
 210:
            var2 = null;
            return var2;
 214:
            var7 = _closure1_slot4;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 6;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['content'] = var6;
            var2['renderForScreenshot'] = var5;
            var9 = null;
            var9 = var9 != var10;
            if(!var9) { _fun0001_ip = 261; continue _fun0001 }
 258:
            var9 = var10;
 261:
            var2['visible'] = var9;
            var2['mediaMosaicMaxWidth'] = var8;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
 279:
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 5;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['content'] = var6;
            var1['renderForScreenshot'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 322:
            var1 = null;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();