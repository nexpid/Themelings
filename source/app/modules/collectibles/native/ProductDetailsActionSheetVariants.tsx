// app/modules/collectibles/native/ProductDetailsActionSheetVariants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {'flex': 1, 'display': 'flex', 'flexDirection': 'column'};
    var11 = 4;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var10['marginTop'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var10['marginHorizontal'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_8;
    var10['gap'] = var13;
    var7['container'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_12;
    var10['gap'] = var13;
    var7['headerRow'] = var10;
    var10 = {'display': 'flex', 'flexWrap': 'wrap', 'flexDirection': 'row', 'alignItems': 'center'};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_12;
    var10['gap'] = var11;
    var7['variantsContainer'] = var10;
    var10 = {'flexGrow': 1, 'flexShrink': 1, 'minWidth': 28};
    var7['text'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot6 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = {};
            var2 = {'width': 28, 'height': 28, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center', 'borderWidth': 1};
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 4;
            var4 = var4[var6];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var4 = var4.radii;
            var4 = var4.round;
            var2['borderRadius'] = var4;
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var4 = var7.bind(var5)(var4);
            var7 = var4.colors;
            var4 = arg1;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var7.BORDER_STRONG;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = var7.BUTTON_OUTLINE_PRIMARY_TEXT;
case 4:
            var2['borderColor'] = var4;
            var1['variantOption'] = var2;
            var2 = {'width': '100%', 'height': '100%', 'justifyContent': 'center', 'alignItems': 'center', 'borderRadius': null, 'borderWidth': 1};
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.radii;
            var7 = var7.round;
            var2['borderRadius'] = var7;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_BASE_LOW;
            var2['borderColor'] = var3;
            var1['variantOptionInner'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = function VariantOption(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var12 = var1.variant;
            var7 = var1.isSelected;
            var5 = var1.onSelect;
            var1 = _closure1_slot7;
            var4 = undefined;
            var10 = var1.bind(var4)(var7);
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var3 = var2.bind(var4)(var1);
            var1 = var3.useProductPurchaseState;
            var1 = var1.bind(var3)(var12);
            var8 = var1.isPurchased;
            var3 = _closure1_slot4;
            var1 = 6;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var6 = 'button';
            var1['accessibilityRole'] = var6;
            if(var8) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var6 = var12.name;
            _fun0002_ip = 7; continue _fun0002;
case 5:
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 7;
            var14 = var16[var11];
            var14 = var13.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.formatToPlainString;
            var11 = var16[var11];
            var11 = var13.bind(var4)(var11);
            var11 = var11.t;
            var13 = var11.SfQB4+;
            var11 = {};
            var16 = var12.name;
            var11['variantLabel'] = var16;
            var6 = var14.bind(var15)(var13, var11);
case 7:
            var1['accessibilityLabel'] = var6;
            var6 = {};
            var6['selected'] = var7;
            var1['accessibilityState'] = var6;
            var1['onPress'] = var5;
            var5 = var10.variantOption;
            var1['style'] = var5;
            var7 = _closure1_slot4;
            var6 = _closure1_slot3;
            var5 = {};
            var11 = var10.variantOptionInner;
            var10 = new Array(2);
            var10[0] = var11;
            var11 = {};
            var13 = var12.variantValue;
            var11['backgroundColor'] = var13;
            var10[1] = var11;
            var5['style'] = var10;
            if(!var8) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var11 = _closure1_slot4;
            var10 = _closure1_slot9;
            var9 = {};
            var9['variant'] = var12;
            var8 = var11.bind(var4)(var10, var9);
case 8:
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
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
            var1 = 8;
            var1 = var7[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var5 = var1.bind(var4)(var2);
            var3 = _closure1_slot4;
            var2 = _closure1_slot0;
            var1 = 9;
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
            if(var5) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var5 = var6.WHITE;
            _fun0003_ip = 12; continue _fun0003;
case 10:
            var5 = var6.BLACK;
case 12:
            var1['color'] = var5;
            var5 = 'md';
            var1['size'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ProductDetailsActionSheetVariants.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var11 = var1.product;
            var17 = var1.selectedVariantIndex;
            var _closure2_slot0 = var17;
            var1 = var1.onVariantSelect;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot6;
            var5 = undefined;
            var12 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.getIsVariantProduct;
            var2 = var1.bind(var2)(var11);
            var1 = null;
            if(!var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var12.container;
            var2['style'] = var6;
            var6 = {};
            var8 = var12.headerRow;
            var6['style'] = var8;
            var13 = _closure1_slot4;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = 11;
            var8 = var20[var16];
            var8 = var19.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-md/bold', 'color': 'mobile-text-heading-primary'};
            var14 = 7;
            var15 = var20[var14];
            var15 = var19.bind(var5)(var15);
            var18 = var15.intl;
            var15 = var18.string;
            var14 = var20[var14];
            var14 = var19.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.wbgaj6;
            var14 = var15.bind(var18)(var14);
            var8['children'] = var14;
            var9 = var13.bind(var5)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = var11.variants;
            var9 = var9.length;
            var9 = var9 > var17;
            if(!var9) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var15 = _closure1_slot4;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var16];
            var13 = var14.bind(var5)(var13);
            var14 = var13.Text;
            var13 = {'variant': 'text-md/medium', 'color': 'text-default', 'lineClamp': 1};
            var16 = var12.text;
            var13['style'] = var16;
            var16 = var11.variants;
            var16 = var16[var17];
            var16 = var16.variantLabel;
            var13['children'] = var16;
            var9 = var15.bind(var5)(var14, var13);
case 15:
            var8[1] = var9;
            var6['children'] = var8;
            var8 = var4.bind(var5)(var3, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot4;
            var8 = _closure1_slot3;
            var7 = {};
            var12 = var12.variantsContainer;
            var7['style'] = var12;
            var12 = var11.variants;
            var11 = var12.map;
            var10 = function(arg1, arg2) {
                var1 = arg1;
                var7 = arg2;
                var _closure3_slot0 = var7;
                var5 = _closure1_slot4;
                var4 = _closure1_slot8;
                var3 = {};
                var3['variant'] = var1;
                var6 = _closure2_slot0;
                var6 = var6 === var7;
                var3['isSelected'] = var6;
                var2 = function onSelect() {
                    var3 = _closure2_slot1;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var3['onSelect'] = var2;
                var2 = var1.variantValue;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 13:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();