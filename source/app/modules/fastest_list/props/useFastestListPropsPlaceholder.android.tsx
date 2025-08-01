// app/modules/fastest_list/props/useFastestListPropsPlaceholder.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function createNativePlaceholderConfig(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var4 = null;
            var1 = var4 == var3;
            var7 = undefined;
            var10 = undefined;
            if(var1) { _fun0001_ip = 21; continue _fun0001 }
 16:
            var10 = var3.type;
 21:
            var1 = {};
            var1['borderRadius'] = var7;
            var1['borderTopLeftRadius'] = var7;
            var1['borderTopRightRadius'] = var7;
            var1['borderBottomLeftRadius'] = var7;
            var1['borderBottomRightRadius'] = var7;
            var1['divider'] = var7;
            var1['dividerColorRgba'] = var7;
            var1['dividerPaddingLeft'] = var7;
            var1['dividerPaddingRight'] = var7;
            var1['placeholderShape'] = var7;
            var1['placeholderShapeColorRgba'] = var7;
            var1['placeholderShapeCount'] = var7;
            var1['placeholderShapeGap'] = var7;
            var1['placeholderShapePaddingHorizontal'] = var7;
            var1['placeholderShapePaddingVertical'] = var7;
            var1['placeholderFeedBackgroundColorRgba'] = var7;
            var1['placeholderFeedColorRgba'] = var7;
            var1['placeholderFeedLabelPadding'] = var7;
            var1['placeholderFeedLabelPaddingInnerRatio'] = var7;
            var1['placeholderFeedLabelSize'] = var7;
            var1['placeholderFeedLabelSecondarySize'] = var7;
            var1['placeholderFeedPadding'] = var7;
            var1['placeholderFeedShape'] = var7;
            var1['placeholderFeedShapeSize'] = var7;
            var2 = var10;
            if(!(var4 == var2)) { _fun0001_ip = 184; continue _fun0001 }
 149:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 1;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.FastestListPropsPlaceholderType;
            var2 = var5.NONE;
 184:
            var1['placeholderType'] = var2;
            var1['width'] = var7;
            var1['height'] = var7;
            var1['verticalAlignment'] = var7;
            var1['horizontalAlignment'] = var7;
            if(!(var4 != var3)) { _fun0001_ip = 1113; continue _fun0001 }
 216:
            var8 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 1;
            var6 = var6[var2];
            var6 = var8.bind(var7)(var6);
            var6 = var6.FastestListPropsPlaceholderType;
            var6 = var6.NONE;
            if(!(var6 !== var10)) { _fun0001_ip = 1111; continue _fun0001 }
 258:
            var8 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var2];
            var6 = var8.bind(var7)(var6);
            var6 = var6.FastestListPropsPlaceholderType;
            var6 = var6.SHAPE;
            if(!(var6 !== var10)) { _fun0001_ip = 859; continue _fun0001 }
 294:
            var8 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var2];
            var6 = var8.bind(var7)(var6);
            var6 = var6.FastestListPropsPlaceholderType;
            var6 = var6.FEED_ITEM;
            if(!(var6 !== var10)) { _fun0001_ip = 379; continue _fun0001 }
 327:
            var6 = global;
            var9 = var6.Error;
            var6 = var6.HermesInternal;
            var8 = var6.concat;
            var6 = 'Invalid placeholder type: ';
            var13 = var8.bind(var6)(var10);
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var14 = var8;
            var6 = new var14[var9](var13, var12);
            var6 = var6 instanceof Object ? var6 : var8;
            throw var6;
 379:
            var9 = var3.borderRadius;
            var10 = var4 != var9;
            var8 = 0;
            if(!var10) { _fun0001_ip = 396; continue _fun0001 }
 393:
            var8 = var9;
 396:
            var1['borderRadius'] = var8;
            var9 = var3.borderTopLeftRadius;
            var10 = var4 != var9;
            var8 = 0;
            if(!var10) { _fun0001_ip = 420; continue _fun0001 }
 417:
            var8 = var9;
 420:
            var1['borderTopLeftRadius'] = var8;
            var9 = var3.borderTopRightRadius;
            var10 = var4 != var9;
            var8 = 0;
            if(!var10) { _fun0001_ip = 444; continue _fun0001 }
 441:
            var8 = var9;
 444:
            var1['borderTopRightRadius'] = var8;
            var9 = var3.borderBottomLeftRadius;
            var10 = var4 != var9;
            var8 = 0;
            if(!var10) { _fun0001_ip = 468; continue _fun0001 }
 465:
            var8 = var9;
 468:
            var1['borderBottomLeftRadius'] = var8;
            var9 = var3.borderBottomRightRadius;
            var10 = var4 != var9;
            var8 = 0;
            if(!var10) { _fun0001_ip = 492; continue _fun0001 }
 489:
            var8 = var9;
 492:
            var1['borderBottomRightRadius'] = var8;
            var9 = var3.divider;
            var8 = var4 != var9;
            if(!var8) { _fun0001_ip = 514; continue _fun0001 }
 511:
            var8 = var9;
 514:
            var1['divider'] = var8;
            var8 = var3.dividerColorHex;
            var9 = var4 != var8;
            var8 = undefined;
            if(!var9) { _fun0001_ip = 572; continue _fun0001 }
 535:
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var9 = 2;
            var9 = var11[var9];
            var11 = var10.bind(var7)(var9);
            var10 = var11.hexToRgbaString;
            var9 = var3.dividerColorHex;
            var8 = var10.bind(var11)(var9);
 572:
            var1['dividerColorRgba'] = var8;
            var9 = var3.dividerPaddingLeft;
            var10 = var4 != var9;
            var8 = 0;
            if(!var10) { _fun0001_ip = 596; continue _fun0001 }
 593:
            var8 = var9;
 596:
            var1['dividerPaddingLeft'] = var8;
            var9 = var3.dividerPaddingRight;
            var10 = var4 != var9;
            var8 = 0;
            if(!var10) { _fun0001_ip = 620; continue _fun0001 }
 617:
            var8 = var9;
 620:
            var1['dividerPaddingRight'] = var8;
            var8 = var3.backgroundColorHex;
            var9 = var4 != var8;
            var8 = undefined;
            if(!var9) { _fun0001_ip = 678; continue _fun0001 }
 641:
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var9 = 2;
            var9 = var11[var9];
            var11 = var10.bind(var7)(var9);
            var10 = var11.hexToRgbaString;
            var9 = var3.backgroundColorHex;
            var8 = var10.bind(var11)(var9);
 678:
            var1['placeholderFeedBackgroundColorRgba'] = var8;
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var8 = 2;
            var8 = var10[var8];
            var10 = var9.bind(var7)(var8);
            var9 = var10.hexToRgbaString;
            var8 = var3.colorHex;
            var8 = var9.bind(var10)(var8);
            var1['placeholderFeedColorRgba'] = var8;
            var8 = var3.labelSize;
            var1['placeholderFeedLabelSize'] = var8;
            var9 = var3.labelSecondarySize;
            var10 = var4 != var9;
            var8 = 0;
            if(!var10) { _fun0001_ip = 757; continue _fun0001 }
 754:
            var8 = var9;
 757:
            var1['placeholderFeedLabelSecondarySize'] = var8;
            var8 = var3.labelPadding;
            var1['placeholderFeedLabelPadding'] = var8;
            var9 = var3.labelPaddingInnerRatio;
            var10 = var4 != var9;
            var8 = 0.4;
            if(!var10) { _fun0001_ip = 801; continue _fun0001 }
 798:
            var8 = var9;
 801:
            var1['placeholderFeedLabelPaddingInnerRatio'] = var8;
            var8 = var3.padding;
            var9 = var4 != var8;
            var6 = 0;
            if(!var9) { _fun0001_ip = 824; continue _fun0001 }
 821:
            var6 = var8;
 824:
            var1['placeholderFeedPadding'] = var6;
            var6 = var3.shape;
            var1['placeholderFeedShape'] = var6;
            var6 = var3.shapeSize;
            var1['placeholderFeedShapeSize'] = var6;
            _fun0001_ip = 1111; continue _fun0001;
 859:
            var9 = var3.borderRadius;
            var10 = var4 != var9;
            var8 = 0;
            if(!var10) { _fun0001_ip = 876; continue _fun0001 }
 873:
            var8 = var9;
 876:
            var1['borderRadius'] = var8;
            var8 = var3.shape;
            var1['placeholderShape'] = var8;
            var9 = var3.spaceGap;
            var10 = var4 != var9;
            var8 = 0;
            if(!var10) { _fun0001_ip = 912; continue _fun0001 }
 909:
            var8 = var9;
 912:
            var1['placeholderShapeGap'] = var8;
            var9 = var3.paddingHorizontal;
            var10 = var4 != var9;
            var8 = 0;
            if(!var10) { _fun0001_ip = 935; continue _fun0001 }
 932:
            var8 = var9;
 935:
            var1['placeholderShapePaddingHorizontal'] = var8;
            var8 = var3.paddingVertical;
            var9 = var4 != var8;
            var6 = 0;
            if(!var9) { _fun0001_ip = 959; continue _fun0001 }
 956:
            var6 = var8;
 959:
            var1['placeholderShapePaddingVertical'] = var6;
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 2;
            var5 = var8[var5];
            var8 = var6.bind(var7)(var5);
            var7 = var8.hexToRgbaString;
            var6 = var3.colorHex;
            var5 = var3.opacity;
            var5 = var7.bind(var8)(var6, var5);
            var1['placeholderShapeColorRgba'] = var5;
            var5 = var3.shapeCount;
            var6 = var4 != var5;
            if(!var6) { _fun0001_ip = 1030; continue _fun0001 }
 1027:
            var2 = var5;
 1030:
            var1['placeholderShapeCount'] = var2;
            var2 = var3.width;
            var1['width'] = var2;
            var2 = var3.height;
            var1['height'] = var2;
            var6 = var3.verticalAlignment;
            var7 = var4 != var6;
            var2 = 'center';
            var5 = var2;
            if(!var7) { _fun0001_ip = 1081; continue _fun0001 }
 1078:
            var5 = var6;
 1081:
            var1['verticalAlignment'] = var5;
            var3 = var3.horizonalAlignment;
            var4 = var4 != var3;
            if(!var4) { _fun0001_ip = 1105; continue _fun0001 }
 1102:
            var2 = var3;
 1105:
            var1['horizontalAlignment'] = var2;
 1111:
            return var1;
 1113:
            return var1;
        }
    };
    var _closure1_slot4 = var1;
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
    var4 = {};
    var7 = {};
    var8 = 1;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.FastestListPropsPlaceholderType;
    var8 = var8.NONE;
    var7['type'] = var8;
    var4['sectionItem'] = var7;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/fastest_list/props/useFastestListPropsPlaceholder.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFastestListPropsPlaceholder() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arguments[0];
            var2 = undefined;
            if(!(var5 === var2)) { _fun0002_ip = 18; continue _fun0002 }
 11:
            var5 = _closure1_slot3;
 18:
            var _closure2_slot0 = var5;
            var4 = _closure1_slot2;
            var3 = var4.useMemo;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var1 = {};
                var4 = _closure1_slot4;
                var2 = _closure2_slot0;
                var5 = var2.listFooter;
                var3 = undefined;
                var5 = var4.bind(var3)(var5);
                var1['listFooter'] = var5;
                var5 = var2.listHeader;
                var5 = var4.bind(var3)(var5);
                var1['listHeader'] = var5;
                var5 = var2.sectionFooter;
                var5 = var4.bind(var3)(var5);
                var1['sectionFooter'] = var5;
                var5 = var2.sectionHeader;
                var5 = var4.bind(var3)(var5);
                var1['sectionHeader'] = var5;
                var5 = var2.sectionItem;
                var5 = var4.bind(var3)(var5);
                var1['sectionItem'] = var5;
                var5 = var2.sectionItemAtFront;
                var5 = var4.bind(var3)(var5);
                var1['sectionItemAtFront'] = var5;
                var5 = var2.sectionItemAtRear;
                var5 = var4.bind(var3)(var5);
                var1['sectionItemAtRear'] = var5;
                var2 = var2.sectionItemSingleton;
                var2 = var4.bind(var3)(var2);
                var1['sectionItemSingleton'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();