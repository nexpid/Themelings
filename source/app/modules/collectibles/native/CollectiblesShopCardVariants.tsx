// app/modules/collectibles/native/CollectiblesShopCardVariants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
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
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot4 = var8;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var8 = var6[var4];
    var10 = var5.bind(var1)(var8);
    var9 = var10.createStyles;
    var8 = {};
    var11 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var12 = 4;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_4;
    var11['paddingStart'] = var12;
    var8['variantsContainer'] = var11;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot6 = var8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = {};
            var2 = {'marginStart': null, 'width': 14, 'height': 14, 'borderWidth': 1, 'borderColor': null, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center'};
            var8 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 4;
            var7 = var4[var6];
            var5 = undefined;
            var7 = var8.bind(var5)(var7);
            var7 = var7.space;
            var7 = var7.PX_4;
            var7 = -var7;
            var2['marginStart'] = var7;
            var7 = 1;
            var9 = var4[var6];
            var9 = var8.bind(var5)(var9);
            var9 = var9.colors;
            var9 = var9.BACKGROUND_BASE_LOW;
            var2['borderColor'] = var9;
            var9 = var4[var6];
            var9 = var8.bind(var5)(var9);
            var9 = var9.radii;
            var9 = var9.round;
            var2['borderRadius'] = var9;
            var1['variantOption'] = var2;
            var2 = {'width': '100%', 'height': '100%', 'justifyContent': 'center', 'alignItems': 'center'};
            var4 = var4[var6];
            var4 = var8.bind(var5)(var4);
            var4 = var4.radii;
            var4 = var4.round;
            var2['borderRadius'] = var4;
            var8 = arg1;
            var4 = 0;
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var7;
case 2:
            var2['borderWidth'] = var4;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.BUTTON_OUTLINE_PRIMARY_TEXT;
            var2['borderColor'] = var7;
            var1['variantOptionInner'] = var2;
            var2 = {};
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.ICON_MUTED;
            var2['backgroundColor'] = var3;
            var1['variantOverflowInner'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var4 = function VariantOption(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var10 = var1.variant;
            var11 = var1.zIndex;
            var2 = var1.isSelected;
            var1 = _closure1_slot7;
            var4 = undefined;
            var8 = var1.bind(var4)(var2);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useProductPurchaseState;
            var1 = var1.bind(var2)(var10);
            var6 = var1.isPurchased;
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var1 = {};
            var9 = var8.variantOption;
            var5 = new Array(2);
            var5[0] = var9;
            var9 = {};
            var9['zIndex'] = var11;
            var5[1] = var9;
            var1['style'] = var5;
            var5 = {};
            var9 = var8.variantOptionInner;
            var8 = new Array(2);
            var8[0] = var9;
            var9 = {};
            var11 = var10.variantValue;
            var9['backgroundColor'] = var11;
            var8[1] = var9;
            var5['style'] = var8;
            if(!var6) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var9 = _closure1_slot4;
            var8 = _closure1_slot9;
            var7 = {};
            var7['variant'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 4:
            var5['children'] = var6;
            var5 = var3.bind(var4)(var2, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var4 = function VariantCheckmark(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.variant;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var5 = var1.bind(var4)(var2);
            var3 = _closure1_slot4;
            var2 = _closure1_slot0;
            var1 = 7;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.CheckmarkSmallIcon;
            var1 = {};
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 4;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.colors;
            if(var5) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var5 = var6.WHITE;
            _fun0003_ip = 8; continue _fun0003;
case 6:
            var5 = var6.BLACK;
case 8:
            var1['color'] = var5;
            var5 = 'xxs';
            var1['size'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var4 = function VariantOverflowOption(arg1) {
        var1 = arg1;
        var9 = var1.zIndex;
        var2 = var1.isSelected;
        var1 = _closure1_slot7;
        var4 = undefined;
        var7 = var1.bind(var4)(var2);
        var3 = _closure1_slot4;
        var2 = _closure1_slot3;
        var1 = {};
        var6 = var7.variantOption;
        var5 = new Array(2);
        var5[0] = var6;
        var6 = {};
        var6['zIndex'] = var9;
        var5[1] = var6;
        var1['style'] = var5;
        var5 = {};
        var9 = var7.variantOptionInner;
        var6 = new Array(2);
        var6[0] = var9;
        var7 = var7.variantOverflowInner;
        var6[1] = var7;
        var5['style'] = var6;
        var7 = _closure1_slot0;
        var10 = _closure1_slot2;
        var6 = 8;
        var6 = var10[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.PlusSmallIcon;
        var6 = {};
        var9 = _closure1_slot1;
        var8 = 4;
        var8 = var10[var8];
        var8 = var9.bind(var4)(var8);
        var8 = var8.colors;
        var8 = var8.WHITE;
        var6['color'] = var8;
        var8 = 'xxs';
        var6['size'] = var8;
        var6 = var3.bind(var4)(var7, var6);
        var5['children'] = var6;
        var5 = var3.bind(var4)(var2, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var9 = var1.product;
            var1 = _closure1_slot6;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var6 = var2.bind(var4)(var1);
            var1 = var6.useDefaultVariantIndex;
            var13 = var1.bind(var6)(var9);
            var _closure2_slot0 = var13;
            var1 = 10;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getIsVariantProduct;
            var1 = var1.bind(var2)(var9);
            if(var1) { _fun0004_ip = 9; continue _fun0004 }
case 10:
            var1 = null;
            return var1;
case 9:
            var1 = var9.variants;
            var8 = var1.length;
            var11 = 4;
            var1 = var8 > var11;
            var12 = 3;
            var6 = var12;
            if(var1) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var6 = var8;
case 11:
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var10 = var10.variantsContainer;
            var1['style'] = var10;
            var14 = var9.variants;
            var9 = var14.slice;
            var10 = 0;
            var14 = var9.bind(var14)(var10, var6);
            var9 = var14.map;
            var5 = function(arg1, arg2) {
                var1 = arg1;
                var8 = arg2;
                var5 = _closure1_slot4;
                var4 = _closure1_slot8;
                var3 = {};
                var3['variant'] = var1;
                var2 = _closure2_slot0;
                var6 = var8 === var2;
                var3['isSelected'] = var6;
                var6 = global;
                var7 = var6.Math;
                var6 = var7.abs;
                var2 = var2 - var8;
                var6 = var6.bind(var7)(var2);
                var2 = 4;
                var2 = var2 - var6;
                var3['zIndex'] = var2;
                var2 = var1.variantValue;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var9 = var9.bind(var14)(var5);
            var5 = new Array(2);
            var5[0] = var9;
            var6 = var6 !== var8;
            if(!var6) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var9 = _closure1_slot4;
            var8 = _closure1_slot10;
            var7 = {};
            var14 = var13 >= var12;
            var7['isSelected'] = var14;
            var12 = var13 >= var12;
            var10 = 0;
            if(!var12) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var10 = var11;
case 15:
            var7['zIndex'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 13:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopCardVariants.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();