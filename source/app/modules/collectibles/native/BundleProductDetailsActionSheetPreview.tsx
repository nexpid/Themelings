// app/modules/collectibles/native/BundleProductDetailsActionSheetPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.useCallback;
    var _closure1_slot4 = var7;
    var7 = var4.useLayoutEffect;
    var _closure1_slot5 = var7;
    var7 = var4.useMemo;
    var _closure1_slot6 = var7;
    var4 = var4.useState;
    var _closure1_slot7 = var4;
    var12 = 2;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Pressable;
    var _closure1_slot8 = var7;
    var7 = var4.ScrollView;
    var _closure1_slot9 = var7;
    var4 = var4.View;
    var _closure1_slot10 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 5;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var9['paddingTop'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var9['paddingBottom'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var9['gap'] = var13;
    var4['previewContainer'] = var9;
    var9 = {'width': 56, 'height': 56, 'borderRadius': null, 'backgroundColor': null, 'overflow': 'hidden'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_SUBTLE;
    var9['backgroundColor'] = var13;
    var4['bundleThumbnail'] = var9;
    var9 = {'position': 'absolute', 'top': 4294967294, 'left': 4294967294, 'right': 4294967294, 'bottom': 4294967294, 'borderRadius': null, 'borderWidth': 2};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var13 = var13 + var12;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_STRONG;
    var9['borderColor'] = var13;
    var4['selectedRing'] = var9;
    var9 = {};
    var13 = 'row';
    var9['flexDirection'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_12;
    var9['gap'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_4;
    var9['paddingVertical'] = var13;
    var9['paddingHorizontal'] = var12;
    var4['bundleThumbnailRow'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['gap'] = var12;
    var4['bundleContainer'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_8;
    var9['gap'] = var10;
    var4['bundleInfoContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = function BundleThumbnail(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var13 = var2.item;
            var4 = var2.index;
            var _closure2_slot0 = var4;
            var6 = var2.isSelected;
            var8 = var2.setSelected;
            var _closure2_slot1 = var8;
            var5 = var2.label;
            var3 = _closure1_slot4;
            var2 = new Array(2);
            var2[0] = var8;
            var2[1] = var4;
            var4 = undefined;
            var1 = function() {
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = var3.bind(var4)(var1, var2);
            var1 = _closure1_slot13;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot12;
            var2 = _closure1_slot8;
            var1 = {};
            var9 = 'radio';
            var1['role'] = var9;
            var1['aria-checked'] = var6;
            var1['onPress'] = var8;
            var1['aria-label'] = var5;
            var9 = _closure1_slot11;
            var8 = _closure1_slot10;
            var5 = {};
            var11 = var10.bundleThumbnail;
            var5['style'] = var11;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 6;
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
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = _closure1_slot11;
            var8 = _closure1_slot10;
            var7 = {};
            var10 = var10.selectedRing;
            var7['style'] = var10;
            var10 = 'none';
            var7['pointerEvents'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 2:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/BundleProductDetailsActionSheetPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var12 = var1.product;
            var9 = var1.width;
            var8 = var1.handlePreviewPress;
            var7 = var1.onTrackPress;
            var1 = var1.onActiveItemChange;
            var _closure2_slot0 = var1;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var2 = _closure1_slot13;
            var24 = var2.bind(var4)();
            var15 = _closure1_slot7;
            var2 = 0;
            var3 = var15.bind(var4)(var2);
            var13 = _closure1_slot3;
            var11 = 2;
            var3 = var13.bind(var4)(var3, var11);
            var5 = var3[var2];
            var10 = 1;
            var6 = var3[var10];
            var _closure2_slot1 = var6;
            var3 = var12.skuId;
            var3 = var15.bind(var4)(var3);
            var3 = var13.bind(var4)(var3, var11);
            var13 = var3[var2];
            var11 = var3[var10];
            var15 = _closure1_slot6;
            var10 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
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
            var3 = new Array(0);
            var18 = var15.bind(var4)(var10, var3);
            var23 = var12.items;
            var3 = var12.bundledProducts;
            var _closure2_slot2 = var3;
            var _closure2_slot3 = var5;
            var10 = var12.skuId;
            if(!(var10 !== var13)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var10 = var12.skuId;
            var10 = var11.bind(var4)(var10);
            var6 = var6.bind(var4)(var2);
            _closure2_slot3 = var2;
            var5 = 0;
case 4:
            var2 = var23[var5];
            _closure2_slot4 = var2;
            var10 = _closure1_slot5;
            var6 = new Array(2);
            var6[0] = var2;
            var6[1] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var10.bind(var4)(var1, var6);
            var13 = null;
            var6 = var13 == var3;
            var1 = undefined;
            if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var3[var5];
case 8:
            var3 = var13 == var1;
            var15 = undefined;
            if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var15 = var1.name;
case 10:
            if(!(var13 == var15)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var15 = var2.skuId;
case 12:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 8;
            var1 = var10[var1];
            var5 = var11.bind(var4)(var1);
            var3 = var5.getCollectibleTypeLabel;
            var1 = var2.type;
            var19 = var3.bind(var5)(var1);
            var17 = {};
            var1 = var2.skuId;
            var17['skuId'] = var1;
            var1 = var2.type;
            var17['type'] = var1;
            var1 = new Array(1);
            var1[0] = var2;
            var17['items'] = var1;
            var3 = _closure1_slot12;
            var2 = _closure1_slot10;
            var1 = {};
            var5 = var24.previewContainer;
            var1['style'] = var5;
            var16 = _closure1_slot11;
            var5 = 9;
            var5 = var10[var5];
            var5 = var11.bind(var4)(var5);
            var6 = var5.IndividualProductPreview;
            var5 = {};
            var5['product'] = var17;
            var5['width'] = var9;
            var5['handlePreviewPress'] = var8;
            var5['onTrackPress'] = var7;
            var6 = var16.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var7 = var24.bundleContainer;
            var6['style'] = var7;
            var7 = {};
            var8 = var24.bundleInfoContainer;
            var7['style'] = var8;
            var17 = 10;
            var8 = var10[var17];
            var8 = var11.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {};
            var20 = 'heading-xl/bold';
            var8['variant'] = var20;
            var12 = var12.name;
            var8['children'] = var12;
            var9 = var16.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = var10[var17];
            var9 = var11.bind(var4)(var9);
            var12 = var9.Text;
            var9 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            var22 = 11;
            var20 = var10[var22];
            var20 = var11.bind(var4)(var20);
            var27 = var20.intl;
            var26 = var27.formatToPlainString;
            var20 = var10[var22];
            var20 = var11.bind(var4)(var20);
            var20 = var20.t;
            var25 = var20["/0Yndu"];
            var20 = {};
            var28 = var23.length;
            var20['num'] = var28;
            var20 = var26.bind(var27)(var25, var20);
            var9['children'] = var20;
            var9 = var16.bind(var4)(var12, var9);
            var8[1] = var9;
            var7['children'] = var8;
            var8 = var3.bind(var4)(var2, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var8 = {};
            var9 = var24.bundleInfoContainer;
            var8['style'] = var9;
            var9 = 7;
            var9 = var10[var9];
            var9 = var11.bind(var4)(var9);
            var12 = var9.GestureDetector;
            var9 = {};
            var9['gesture'] = var18;
            var20 = _closure1_slot9;
            var18 = {'horizontal': true, 'showsHorizontalScrollIndicator': false, 'contentContainerStyle': null, 'role': 'radiogroup'};
            var24 = var24.bundleThumbnailRow;
            var18['contentContainerStyle'] = var24;
            var24 = var10[var22];
            var24 = var11.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var22 = var10[var22];
            var22 = var11.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.cTbdgu;
            var22 = var24.bind(var25)(var22);
            var18['aria-label'] = var22;
            var22 = var23.map;
            var21 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var9 = arg2;
                    var5 = _closure1_slot11;
                    var4 = _closure1_slot14;
                    var3 = {};
                    var3['item'] = var1;
                    var3['index'] = var9;
                    var2 = _closure2_slot3;
                    var2 = var9 === var2;
                    var3['isSelected'] = var2;
                    var2 = _closure2_slot1;
                    var3['setSelected'] = var2;
                    var2 = _closure2_slot2;
                    var7 = null;
                    var10 = var7 == var2;
                    var2 = undefined;
                    var6 = undefined;
                    if(var10) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var8 = _closure2_slot2;
                    var8 = var8[var9];
                    var9 = var7 == var8;
                    var6 = undefined;
                    if(var9) { _fun0004_ip = 14; continue _fun0004 }
case 16:
                    var6 = var8.name;
case 14:
                    if(!(var7 == var6)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var6 = var1.skuId;
case 17:
                    var3['label'] = var6;
                    var1 = var1.skuId;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var21 = var22.bind(var23)(var21);
            var18['children'] = var21;
            var18 = var16.bind(var4)(var20, var18);
            var9['children'] = var18;
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
            if(!var13) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var16 = _closure1_slot11;
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
case 19:
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