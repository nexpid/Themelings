// app/modules/collectibles/native/BundleProductDetailsActionSheetPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function BundleThumbnail(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var14 = var2.item;
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
            var13 = _closure1_slot12;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var11 = 7;
            var11 = var15[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['item'] = var14;
            var14 = 56;
            var11['size'] = var14;
            var11 = var13.bind(var4)(var12, var11);
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
    var _closure1_slot15 = var1;
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
    var4 = var4.ShopCtaEnum;
    var _closure1_slot11 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 6;
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
    var _closure1_slot14 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/BundleProductDetailsActionSheetPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BundleProductDetailsActionSheetPreview(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var17 = var1.product;
            var10 = var1.width;
            var9 = var1.handlePreviewPress;
            var8 = var1.onTrackPress;
            var _closure2_slot0 = var8;
            var1 = var1.onActiveItemChange;
            var _closure2_slot1 = var1;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var2 = _closure1_slot14;
            var29 = var2.bind(var4)();
            var13 = _closure1_slot7;
            var2 = 0;
            var3 = var13.bind(var4)(var2);
            var12 = _closure1_slot3;
            var11 = 2;
            var3 = var12.bind(var4)(var3, var11);
            var5 = var3[var2];
            var7 = 1;
            var6 = var3[var7];
            var _closure2_slot2 = var6;
            var3 = var17.skuId;
            var3 = var13.bind(var4)(var3);
            var3 = var12.bind(var4)(var3, var11);
            var12 = var3[var2];
            var11 = var3[var7];
            var13 = _closure1_slot6;
            var7 = function() {
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
            var3 = new Array(0);
            var21 = var13.bind(var4)(var7, var3);
            var28 = var17.items;
            var3 = var17.bundledProducts;
            var _closure2_slot3 = var3;
            var _closure2_slot4 = var5;
            var7 = var17.skuId;
            if(!(var7 !== var12)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var7 = var17.skuId;
            var7 = var11.bind(var4)(var7);
            var6 = var6.bind(var4)(var2);
            _closure2_slot4 = var2;
            var5 = 0;
case 6:
            var2 = var28[var5];
            _closure2_slot5 = var2;
            var7 = _closure1_slot5;
            var6 = new Array(2);
            var6[0] = var2;
            var6[1] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 8; continue _fun0004 }
case 3:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var7.bind(var4)(var1, var6);
            var18 = null;
            var6 = var18 == var3;
            var1 = undefined;
            if(var6) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var1 = var3[var5];
case 9:
            var3 = var18 == var1;
            var20 = undefined;
            if(var3) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var20 = var1.name;
case 11:
            if(!(var18 == var20)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var20 = var2.skuId;
case 13:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 9;
            var1 = var14[var1];
            var5 = var15.bind(var4)(var1);
            var3 = var5.getCollectibleTypeLabel;
            var1 = var2.type;
            var24 = var3.bind(var5)(var1);
            var11 = {};
            var1 = var2.skuId;
            var11['skuId'] = var1;
            var1 = var2.type;
            var11['type'] = var1;
            var1 = new Array(1);
            var1[0] = var2;
            var11['items'] = var1;
            var3 = _closure1_slot13;
            var2 = _closure1_slot10;
            var1 = {};
            var5 = var29.previewContainer;
            var1['style'] = var5;
            var7 = _closure1_slot12;
            var5 = 10;
            var5 = var14[var5];
            var5 = var15.bind(var4)(var5);
            var6 = var5.IndividualProductPreview;
            var5 = {};
            var5['product'] = var11;
            var5['width'] = var10;
            var5['handlePreviewPress'] = var9;
            var5['onTrackPress'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot10;
            var6 = {};
            var9 = var29.bundleContainer;
            var6['style'] = var9;
            var11 = _closure1_slot13;
            var10 = _closure1_slot10;
            var9 = {};
            var12 = var29.bundleInfoContainer;
            var9['style'] = var12;
            var16 = _closure1_slot12;
            var22 = 11;
            var12 = var14[var22];
            var12 = var15.bind(var4)(var12);
            var13 = var12.Text;
            var12 = {};
            var23 = 'heading-xl/bold';
            var12['variant'] = var23;
            var17 = var17.name;
            var12['children'] = var17;
            var13 = var16.bind(var4)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var17 = _closure1_slot12;
            var13 = var14[var22];
            var13 = var15.bind(var4)(var13);
            var16 = var13.Text;
            var13 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            var27 = 12;
            var23 = var14[var27];
            var23 = var15.bind(var4)(var23);
            var31 = var23.intl;
            var30 = var31.formatToPlainString;
            var23 = var14[var27];
            var23 = var15.bind(var4)(var23);
            var23 = var23.t;
            var25 = var23["/0Yndu"];
            var23 = {};
            var32 = var28.length;
            var23['num'] = var32;
            var23 = var30.bind(var31)(var25, var23);
            var13['children'] = var23;
            var13 = var17.bind(var4)(var16, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var10 = var11.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot13;
            var11 = _closure1_slot10;
            var10 = {};
            var13 = var29.bundleInfoContainer;
            var10['style'] = var13;
            var17 = _closure1_slot12;
            var13 = 8;
            var13 = var14[var13];
            var13 = var15.bind(var4)(var13);
            var16 = var13.GestureDetector;
            var13 = {};
            var13['gesture'] = var21;
            var25 = _closure1_slot12;
            var23 = _closure1_slot9;
            var21 = {'horizontal': true, 'showsHorizontalScrollIndicator': false, 'contentContainerStyle': null, 'role': 'radiogroup'};
            var29 = var29.bundleThumbnailRow;
            var21['contentContainerStyle'] = var29;
            var29 = var14[var27];
            var29 = var15.bind(var4)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var27 = var14[var27];
            var27 = var15.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.cTbdgu;
            var27 = var29.bind(var30)(var27);
            var21['aria-label'] = var27;
            var27 = var28.map;
            var26 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var10 = arg2;
                    var5 = _closure1_slot12;
                    var4 = _closure1_slot15;
                    var3 = {};
                    var3['item'] = var1;
                    var3['index'] = var10;
                    var2 = _closure2_slot4;
                    var2 = var10 === var2;
                    var3['isSelected'] = var2;
                    var2 = _closure2_slot2;
                    var3['setSelected'] = var2;
                    var2 = _closure2_slot3;
                    var8 = null;
                    var9 = var8 == var2;
                    var2 = undefined;
                    var7 = undefined;
                    if(var9) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                    var9 = _closure2_slot3;
                    var9 = var9[var10];
                    var11 = var8 == var9;
                    var7 = undefined;
                    if(var11) { _fun0005_ip = 15; continue _fun0005 }
case 17:
                    var7 = var9.name;
case 15:
                    if(!(var8 == var7)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var7 = var1.skuId;
case 18:
                    var3['label'] = var7;
                    var7 = _closure2_slot3;
                    var9 = var8 == var7;
                    var7 = undefined;
                    if(var9) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var9 = _closure2_slot3;
                    var9 = var9[var10];
                    var10 = var8 == var9;
                    var7 = undefined;
                    if(var10) { _fun0005_ip = 20; continue _fun0005 }
case 22:
                    var7 = var9.skuId;
case 20:
                    if(!(var8 == var7)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                    var7 = var1.skuId;
case 23:
                    var3['trackedSkuId'] = var7;
                    var6 = _closure2_slot0;
                    var3['onTrackPress'] = var6;
                    var1 = var1.skuId;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var26 = var27.bind(var28)(var26);
            var21['children'] = var26;
            var21 = var25.bind(var4)(var23, var21);
            var13['children'] = var21;
            var16 = var17.bind(var4)(var16, var13);
            var13 = new Array(2);
            var13[0] = var16;
            var16 = _closure1_slot13;
            var14 = var14[var22];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            var17 = new Array(2);
            var17[0] = var20;
            var18 = var18 != var24;
            if(!var18) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var21 = _closure1_slot12;
            var20 = _closure1_slot0;
            var19 = _closure1_slot2;
            var19 = var19[var22];
            var19 = var20.bind(var4)(var19);
            var20 = var19.Text;
            var19 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var22 = global;
            var22 = var22.HermesInternal;
            var23 = var22.concat;
            var22 = ' - ';
            var22 = var23.bind(var22)(var24);
            var19['children'] = var22;
            var18 = var21.bind(var4)(var20, var19);
case 25:
            var17[1] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[1] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();