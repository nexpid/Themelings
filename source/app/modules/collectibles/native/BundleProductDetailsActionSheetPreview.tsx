// app/modules/collectibles/native/BundleProductDetailsActionSheetPreview.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.memo;
    var8 = var4.useCallback;
    var _closure1_slot4 = var8;
    var8 = var4.useLayoutEffect;
    var _closure1_slot5 = var8;
    var8 = var4.useMemo;
    var _closure1_slot6 = var8;
    var4 = var4.useState;
    var _closure1_slot7 = var4;
    var13 = 2;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Pressable;
    var _closure1_slot8 = var8;
    var8 = var4.ScrollView;
    var _closure1_slot9 = var8;
    var4 = var4.View;
    var _closure1_slot10 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ShopCtaEnum;
    var _closure1_slot11 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot12 = var8;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 6;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_16;
    var10['paddingTop'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_16;
    var10['paddingBottom'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_16;
    var10['gap'] = var14;
    var4['previewContainer'] = var10;
    var10 = {'width': 56, 'height': 56, 'borderRadius': null, 'backgroundColor': null, 'overflow': 'hidden'};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var10['borderRadius'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOD_SUBTLE;
    var10['backgroundColor'] = var14;
    var4['bundleThumbnail'] = var10;
    var10 = {'position': 'absolute', 'top': 4294967294, 'left': 4294967294, 'right': 4294967294, 'bottom': 4294967294, 'borderRadius': null, 'borderWidth': 2};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var14 = var14 + var13;
    var10['borderRadius'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_STRONG;
    var10['borderColor'] = var14;
    var4['selectedRing'] = var10;
    var10 = {};
    var14 = 'row';
    var10['flexDirection'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_12;
    var10['gap'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_4;
    var10['paddingVertical'] = var14;
    var10['paddingHorizontal'] = var13;
    var4['bundleThumbnailRow'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var10['paddingHorizontal'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var10['gap'] = var13;
    var4['bundleContainer'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_8;
    var10['gap'] = var11;
    var4['bundleInfoContainer'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var13 = var2.item;
            var9 = var2.index;
            var _closure2_slot0 = var9;
            var6 = var2.isSelected;
            var10 = var2.setSelected;
            var _closure2_slot1 = var10;
            var5 = var2.label;
            var4 = var2.trackedSkuId;
            var _closure2_slot2 = var4;
            var8 = var2.onTrackPress;
            var _closure2_slot3 = var8;
            var3 = _closure1_slot4;
            var2 = new Array(4);
            var2[0] = var10;
            var2[1] = var9;
            var2[2] = var8;
            var2[3] = var4;
            var4 = undefined;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure2_slot3;
                    var2 = _closure1_slot11;
                    var4 = var2.BUNDLE_VIEW_PRODUCT;
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4, var3);
case 2:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var8 = var3.bind(var4)(var1, var2);
            var1 = _closure1_slot14;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot13;
            var2 = _closure1_slot8;
            var1 = {};
            var9 = 'radio';
            var1['role'] = var9;
            var1['aria-checked'] = var6;
            var1['onPress'] = var8;
            var1['aria-label'] = var5;
            var9 = _closure1_slot12;
            var8 = _closure1_slot10;
            var5 = {};
            var11 = var10.bundleThumbnail;
            var5['style'] = var11;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 7;
            var11 = var14[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['item'] = var13;
            var13 = 56;
            var11['size'] = var13;
            var11 = var9.bind(var4)(var12, var11);
            var5['children'] = var11;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = _closure1_slot12;
            var8 = _closure1_slot10;
            var7 = {};
            var10 = var10.selectedRing;
            var7['style'] = var10;
            var10 = 'none';
            var7['pointerEvents'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 4:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = function(arg1) {
        var1 = arg1;
        var9 = var1.items;
        var2 = var1.bundledProducts;
        var _closure2_slot0 = var2;
        var2 = var1.activeIndex;
        var _closure2_slot1 = var2;
        var2 = var1.onSelect;
        var _closure2_slot2 = var2;
        var1 = var1.onTrackPress;
        var _closure2_slot3 = var1;
        var1 = _closure1_slot14;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot6;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.Gesture;
            var1 = var2.Native;
            var3 = var1.bind(var2)();
            var2 = var3.disallowInterruption;
            var1 = true;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = new Array(0);
        var6 = var3.bind(var4)(var2, var1);
        var3 = _closure1_slot12;
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var1 = 8;
        var1 = var13[var1];
        var1 = var12.bind(var4)(var1);
        var2 = var1.GestureDetector;
        var1 = {};
        var1['gesture'] = var6;
        var6 = _closure1_slot9;
        var5 = {'horizontal': true, 'showsHorizontalScrollIndicator': false, 'contentContainerStyle': null, 'role': 'radiogroup'};
        var8 = var8.bundleThumbnailRow;
        var5['contentContainerStyle'] = var8;
        var8 = 9;
        var10 = var13[var8];
        var10 = var12.bind(var4)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var8 = var13[var8];
        var8 = var12.bind(var4)(var8);
        var8 = var8.t;
        var8 = var8.cTbdgu;
        var8 = var10.bind(var11)(var8);
        var5['aria-label'] = var8;
        var8 = var9.map;
        var7 = function(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var10 = arg2;
                var5 = _closure1_slot12;
                var4 = _closure1_slot15;
                var3 = {};
                var3['item'] = var1;
                var3['index'] = var10;
                var2 = _closure2_slot1;
                var2 = var10 === var2;
                var3['isSelected'] = var2;
                var2 = _closure2_slot2;
                var3['setSelected'] = var2;
                var2 = _closure2_slot0;
                var8 = null;
                var9 = var8 == var2;
                var2 = undefined;
                var7 = undefined;
                if(var9) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var9 = _closure2_slot0;
                var9 = var9[var10];
                var11 = var8 == var9;
                var7 = undefined;
                if(var11) { _fun0003_ip = 6; continue _fun0003 }
case 8:
                var7 = var9.name;
case 6:
                if(!(var8 == var7)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var7 = var1.skuId;
case 9:
                var3['label'] = var7;
                var7 = _closure2_slot0;
                var9 = var8 == var7;
                var7 = undefined;
                if(var9) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var9 = _closure2_slot0;
                var9 = var9[var10];
                var10 = var8 == var9;
                var7 = undefined;
                if(var10) { _fun0003_ip = 11; continue _fun0003 }
case 13:
                var7 = var9.skuId;
case 11:
                if(!(var8 == var7)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var7 = var1.skuId;
case 14:
                var3['trackedSkuId'] = var7;
                var6 = _closure2_slot3;
                var3['onTrackPress'] = var6;
                var1 = var1.skuId;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            }
        };
        var7 = var8.bind(var9)(var7);
        var5['children'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var7.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/BundleProductDetailsActionSheetPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BundleProductDetailsActionSheetPreview(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var24 = var2.product;
            var8 = var2.width;
            var7 = var2.handlePreviewPress;
            var18 = var2.onTrackPress;
            var2 = var2.onActiveItemChange;
            var _closure2_slot0 = var2;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var3 = _closure1_slot14;
            var9 = var3.bind(var4)();
            var12 = _closure1_slot7;
            var3 = 0;
            var5 = var12.bind(var4)(var3);
            var11 = _closure1_slot3;
            var10 = 2;
            var5 = var11.bind(var4)(var5, var10);
            var21 = var5[var3];
            var6 = 1;
            var20 = var5[var6];
            var5 = var24.skuId;
            var5 = var12.bind(var4)(var5);
            var5 = var11.bind(var4)(var5, var10);
            var10 = var5[var3];
            var6 = var5[var6];
            var23 = var24.items;
            var22 = var24.bundledProducts;
            var5 = var24.skuId;
            if(!(var5 !== var10)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var5 = var24.skuId;
            var5 = var6.bind(var4)(var5);
            var5 = var20.bind(var4)(var3);
            var21 = 0;
case 16:
            var5 = var23[var21];
            _closure2_slot1 = var5;
            var6 = _closure1_slot5;
            var3 = new Array(2);
            var3[0] = var5;
            var3[1] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 18; continue _fun0005 }
case 3:
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var4)(var2, var3);
            var13 = null;
            var3 = var13 == var22;
            var2 = undefined;
            if(var3) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var2 = var22[var21];
case 19:
            var3 = var13 == var2;
            var15 = undefined;
            if(var3) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var15 = var2.name;
case 21:
            if(!(var13 == var15)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var15 = var5.skuId;
case 23:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 10;
            var2 = var10[var2];
            var6 = var11.bind(var4)(var2);
            var3 = var6.getCollectibleTypeLabel;
            var2 = var5.type;
            var19 = var3.bind(var6)(var2);
            var3 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot1;
                var3 = var3.skuId;
                var1['skuId'] = var3;
                var3 = _closure2_slot1;
                var3 = var3.type;
                var1['type'] = var3;
                var3 = _closure2_slot1;
                var2 = new Array(1);
                var2[0] = var3;
                var1['items'] = var2;
                return var1;
            };
            var12 = var3.bind(var4)(var1, var2);
            var3 = _closure1_slot13;
            var2 = _closure1_slot10;
            var1 = {};
            var5 = var9.previewContainer;
            var1['style'] = var5;
            var16 = _closure1_slot12;
            var5 = 11;
            var5 = var10[var5];
            var5 = var11.bind(var4)(var5);
            var6 = var5.IndividualProductPreview;
            var5 = {};
            var5['product'] = var12;
            var5['width'] = var8;
            var5['handlePreviewPress'] = var7;
            var5['onTrackPress'] = var18;
            var6 = var16.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var7 = var9.bundleContainer;
            var6['style'] = var7;
            var7 = {};
            var8 = var9.bundleInfoContainer;
            var7['style'] = var8;
            var17 = 12;
            var8 = var10[var17];
            var8 = var11.bind(var4)(var8);
            var12 = var8.Text;
            var8 = {};
            var25 = 'heading-xl/bold';
            var8['variant'] = var25;
            var24 = var24.name;
            var8['children'] = var24;
            var12 = var16.bind(var4)(var12, var8);
            var8 = new Array(2);
            var8[0] = var12;
            var12 = var10[var17];
            var12 = var11.bind(var4)(var12);
            var24 = var12.Text;
            var12 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            var25 = 9;
            var26 = var10[var25];
            var26 = var11.bind(var4)(var26);
            var28 = var26.intl;
            var27 = var28.formatToPlainString;
            var25 = var10[var25];
            var25 = var11.bind(var4)(var25);
            var25 = var25.t;
            var26 = var25["/0Yndu"];
            var25 = {};
            var29 = var23.length;
            var25['num'] = var29;
            var25 = var27.bind(var28)(var26, var25);
            var12['children'] = var25;
            var12 = var16.bind(var4)(var24, var12);
            var8[1] = var12;
            var7['children'] = var8;
            var8 = var3.bind(var4)(var2, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var8 = {};
            var9 = var9.bundleInfoContainer;
            var8['style'] = var9;
            var12 = _closure1_slot16;
            var9 = {};
            var9['items'] = var23;
            var9['bundledProducts'] = var22;
            var9['activeIndex'] = var21;
            var9['onSelect'] = var20;
            var9['onTrackPress'] = var18;
            var12 = var16.bind(var4)(var12, var9);
            var9 = new Array(2);
            var9[0] = var12;
            var10 = var10[var17];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            var12 = new Array(2);
            var12[0] = var15;
            var13 = var13 != var19;
            if(!var13) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var16 = _closure1_slot12;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var17];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var17 = global;
            var17 = var17.HermesInternal;
            var18 = var17.concat;
            var17 = ' - ';
            var17 = var18.bind(var17)(var19);
            var14['children'] = var17;
            var13 = var16.bind(var4)(var15, var14);
case 25:
            var12[1] = var13;
            var10['children'] = var12;
            var10 = var3.bind(var4)(var11, var10);
            var9[1] = var10;
            var8['children'] = var9;
            var8 = var3.bind(var4)(var2, var8);
            var7[1] = var8;
            var6['children'] = var7;
            var6 = var3.bind(var4)(var2, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();