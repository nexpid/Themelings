// app/design/components/Pile/native/GuildIconPile.native.tsx
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot3 = var7;
    var4 = var4.jsxs;
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Pile/native/GuildIconPile.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildIconPile(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.size;
            var11 = var1.totalCount;
            var16 = var1.names;
            var6 = var1.children;
            var1 = _closure1_slot2;
            var3 = var1.Children;
            var1 = var3.count;
            var10 = var1.bind(var3)(var6);
            var9 = _closure1_slot0;
            var14 = _closure1_slot1;
            var8 = 2;
            var1 = var14[var8];
            var4 = undefined;
            var1 = var9.bind(var4)(var1);
            var1 = var1.ImageSizes;
            var13 = var1[var2];
            var3 = _closure1_slot4;
            var12 = 3;
            var1 = var14[var12];
            var1 = var9.bind(var4)(var1);
            var2 = var1.Pile;
            var1 = {};
            var5 = 4;
            var5 = var14[var5];
            var15 = var9.bind(var4)(var5);
            var5 = var15.getListSummaryLabel;
            var5 = var5.bind(var15)(var16, var11);
            var1['aria-label'] = var5;
            var5 = 5;
            var5 = var14[var5];
            var5 = var9.bind(var4)(var5);
            var5 = var5.CutoutShape;
            var5 = var5.RoundedRect;
            var1['shape'] = var5;
            var1['size'] = var13;
            var5 = 40;
            var9 = var13 <= var5;
            var5 = var12;
            if(!var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var8;
case 2:
            var1['gap'] = var5;
            var5 = 0.25;
            var1['depthX'] = var5;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = null;
            var6 = var6 != var11;
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var10 < var11;
case 4:
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = _closure1_slot3;
            var8 = _closure1_slot0;
            var14 = _closure1_slot1;
            var7 = 6;
            var7 = var14[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.PileOverflow;
            var7 = {};
            var7['size'] = var13;
            var12 = var13 / var12;
            var7['borderRadius'] = var12;
            var10 = var11 - var10;
            var7['value'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 6:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['GuildIconPile'] = var2;
    return var1;
})();