// app/modules/wishlists/native/CollectiblesWishlistItemCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
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
    var8 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.transformSKUToCollectiblesItem;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VerticalGradient;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var7 = var4.Fragment;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {};
    var13 = var8.absoluteFillObject;
    var14 = var9;
    var10 = copyDataProperties(var14, var13);
    var11 = '60%';
    var10 = 'top';
    var9[var10] = var11;
    var4['gradient'] = var9;
    var9 = {};
    var10 = 20;
    var9['marginTop'] = var10;
    var4['bundleOffset'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/wishlists/native/CollectiblesWishlistItemCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CollectiblesWishlistItemCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.item;
            var _closure2_slot0 = var3;
            var7 = var1.onPress;
            var5 = var1.backgroundColor;
            var _closure2_slot1 = var5;
            var1 = var3.sku;
            var6 = null;
            var1 = var6 == var1;
            var9 = false;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = _closure1_slot4;
            var1 = var3.sku;
            var4 = undefined;
            var1 = var8.bind(var4)(var1);
            var6 = var6 == var1;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var1.type;
case 4:
            var1 = 'bundle';
            var9 = var1 === var4;
case 2:
            var _closure2_slot2 = var9;
            var6 = _closure1_slot2;
            var10 = var6.useMemo;
            var8 = new Array(1);
            var8[0] = var5;
            var4 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 5;
                var1 = var6[var3];
                var4 = undefined;
                var1 = var5.bind(var4)(var1);
                var2 = _closure2_slot1;
                var8 = var1.bind(var4)(var2);
                var7 = var8.alpha;
                var1 = 0;
                var7 = var7.bind(var8)(var1);
                var1 = var7.css;
                var7 = var1.bind(var7)();
                var1 = new Array(3);
                var1[0] = var7;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var5 = var3.bind(var4)(var2);
                var4 = var5.alpha;
                var3 = 0.6;
                var4 = var4.bind(var5)(var3);
                var3 = var4.css;
                var3 = var3.bind(var4)();
                var1[1] = var3;
                var1[2] = var2;
                return var1;
            };
            var8 = var10.bind(var6)(var4, var8);
            var _closure2_slot3 = var8;
            var4 = var6.useCallback;
            var10 = var3.sku;
            var3 = new Array(3);
            var3[0] = var10;
            var3[1] = var9;
            var3[2] = var8;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = var1.sku;
                    var1 = null;
                    var2 = var1 == var2;
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = _closure1_slot8;
                    var4 = _closure1_slot7;
                    var3 = {};
                    var8 = _closure1_slot6;
                    var7 = _closure1_slot3;
                    var6 = {};
                    var10 = _closure2_slot2;
                    var2 = undefined;
                    var9 = undefined;
                    if(!var10) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var10 = _closure1_slot9;
                    var9 = var10.bundleOffset;
case 8:
                    var6['style'] = var9;
                    var13 = _closure1_slot6;
                    var10 = _closure1_slot0;
                    var14 = _closure1_slot1;
                    var9 = 6;
                    var9 = var14[var9];
                    var10 = var10.bind(var2)(var9);
                    var9 = {};
                    var14 = _closure2_slot0;
                    var14 = var14.sku;
                    var9['sku'] = var14;
                    var14 = false;
                    var9['showGradient'] = var14;
                    var9 = var13.bind(var2)(var10, var9);
                    var6['children'] = var9;
                    var7 = var8.bind(var2)(var7, var6);
                    var6 = new Array(2);
                    var6[0] = var7;
                    var7 = _closure2_slot2;
                    if(!var7) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var10 = _closure1_slot6;
                    var9 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var8 = 7;
                    var8 = var13[var8];
                    var9 = var9.bind(var2)(var8);
                    var8 = {};
                    var13 = _closure1_slot9;
                    var13 = var13.gradient;
                    var8['style'] = var13;
                    var12 = _closure1_slot5;
                    var13 = var12.START;
                    var8['start'] = var13;
                    var12 = var12.END;
                    var8['end'] = var12;
                    var11 = _closure2_slot3;
                    var8['colors'] = var11;
                    var11 = 'none';
                    var8['pointerEvents'] = var11;
                    var7 = var10.bind(var2)(var9, var8);
case 10:
                    var6[1] = var7;
                    var3['children'] = var6;
                    var1 = var5.bind(var2)(var4, var3);
case 6:
                    return var1;
                }
            };
            var6 = var4.bind(var6)(var2, var3);
            var4 = _closure1_slot6;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 8;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var1['onPress'] = var7;
            var1['renderPreview'] = var6;
            var1['backgroundColor'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();