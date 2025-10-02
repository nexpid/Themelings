// app/design/components/Pile/native/AvatarDuoPile.native.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Pile/native/AvatarDuoPile.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AvatarDuoPile(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var9 = var3.size;
            var5 = var3.children;
            var1 = null;
            var2 = Object.create(var1);
            var1 = 0;
            var2['size'] = var1;
            var2['children'] = var1;
            var14 = {};
            var13 = var3;
            var12 = var2;
            var8 = copyDataProperties(var14, var13, var12);
            var4 = _closure1_slot2;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.Pile;
            var1 = {'aria-label': null, 'shape': null, 'size': null, 'gap': 4, 'depthX': 0.5, 'depthY': 0.5};
            var7 = 'aria-label';
            var7 = var7 in var8;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var7 = 3;
            var7 = var11[var7];
            var11 = var10.bind(var3)(var7);
            var10 = var11.getListSummaryLabel;
            var7 = var8.names;
            var7 = var10.bind(var11)(var7);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = var8.aria-label;
case 4:
            var1['aria-label'] = var7;
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var7 = 4;
            var7 = var10[var7];
            var7 = var8.bind(var3)(var7);
            var7 = var7.CutoutShape;
            var7 = var7.Circle;
            var1['shape'] = var7;
            var7 = 5;
            var7 = var10[var7];
            var8 = var8.bind(var3)(var7);
            var7 = var8.isArray;
            var7 = var7.bind(var8)(var9);
            if(var7) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var6 = 6;
            var6 = var8[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.AVATAR_SIZE_MAP;
            var6 = var6[var9];
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var8 = var9.map;
            var7 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.AVATAR_SIZE_MAP;
                var1 = arg1;
                var1 = var2[var1];
                return var1;
            };
            var6 = var8.bind(var9)(var7);
case 7:
            var1['size'] = var6;
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var3['AvatarDuoPile'] = var2;
    return var1;
})();