// app/modules/fastest_list/props/useFastestListPropsPlaceholder.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function createNativePlaceholderConfig(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            var1 = var4 == var3;
            var7 = undefined;
            var10 = undefined;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = var3.type;
case 2:
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
            if(!(var4 == var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 1;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.FastestListPropsPlaceholderType;
            var2 = var5.NONE;
case 4:
            var1['placeholderType'] = var2;
            var1['width'] = var7;
            var1['height'] = var7;
            var1['verticalAlignment'] = var7;
            var1['horizontalAlignment'] = var7;
            if(!(var4 != var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 1;
            var6 = var6[var2];
            var6 = var8.bind(var7)(var6);
            var6 = var6.FastestListPropsPlaceholderType;
            var6 = var6.NONE;
            if(!(var6 !== var10)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var2];
            var6 = var8.bind(var7)(var6);
            var6 = var6.FastestListPropsPlaceholderType;
            var6 = var6.SHAPE;
            if(!(var6 !== var10)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var2];
            var6 = var8.bind(var7)(var6);
            var6 = var6.FastestListPropsPlaceholderType;
            var6 = var6.FEED_ITEM;
            if(!(var6 !== var10)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
case 12:
            var9 = var3.borderRadius;
            var10 = var4 != var9;
            var8 = 0;
            if(!var10) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var8 = var9;
case 14:
            var1['borderRadius'] = var8;
            var9 = var3.borderTopLeftRadius;
            var10 = var4 != var9;
            var8 = 0;
            if(!var10) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var8 = var9;
case 16:
            var1['borderTopLeftRadius'] = var8;
            var9 = var3.borderTopRightRadius;
            var10 = var4 != var9;
            var8 = 0;
            if(!var10) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var8 = var9;
case 18:
            var1['borderTopRightRadius'] = var8;
            var9 = var3.borderBottomLeftRadius;
            var10 = var4 != var9;
            var8 = 0;
            if(!var10) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var8 = var9;
case 20:
            var1['borderBottomLeftRadius'] = var8;
            var9 = var3.borderBottomRightRadius;
            var10 = var4 != var9;
            var8 = 0;
            if(!var10) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var8 = var9;
case 22:
            var1['borderBottomRightRadius'] = var8;
            var9 = var3.divider;
            var8 = var4 != var9;
            if(!var8) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var8 = var9;
case 24:
            var1['divider'] = var8;
            var8 = var3.dividerColorHex;
            var9 = var4 != var8;
            var8 = undefined;
            if(!var9) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var9 = 2;
            var9 = var11[var9];
            var11 = var10.bind(var7)(var9);
            var10 = var11.hexToRgbaString;
            var9 = var3.dividerColorHex;
            var8 = var10.bind(var11)(var9);
case 26:
            var1['dividerColorRgba'] = var8;
            var9 = var3.dividerPaddingLeft;
            var10 = var4 != var9;
            var8 = 0;
            if(!var10) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var8 = var9;
case 28:
            var1['dividerPaddingLeft'] = var8;
            var9 = var3.dividerPaddingRight;
            var10 = var4 != var9;
            var8 = 0;
            if(!var10) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var8 = var9;
case 30:
            var1['dividerPaddingRight'] = var8;
            var8 = var3.backgroundColorHex;
            var9 = var4 != var8;
            var8 = undefined;
            if(!var9) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var9 = 2;
            var9 = var11[var9];
            var11 = var10.bind(var7)(var9);
            var10 = var11.hexToRgbaString;
            var9 = var3.backgroundColorHex;
            var8 = var10.bind(var11)(var9);
case 32:
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
            if(!var10) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var8 = var9;
case 34:
            var1['placeholderFeedLabelSecondarySize'] = var8;
            var8 = var3.labelPadding;
            var1['placeholderFeedLabelPadding'] = var8;
            var9 = var3.labelPaddingInnerRatio;
            var10 = var4 != var9;
            var8 = 0.4;
            if(!var10) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var8 = var9;
case 36:
            var1['placeholderFeedLabelPaddingInnerRatio'] = var8;
            var8 = var3.padding;
            var9 = var4 != var8;
            var6 = 0;
            if(!var9) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var6 = var8;
case 38:
            var1['placeholderFeedPadding'] = var6;
            var6 = var3.shape;
            var1['placeholderFeedShape'] = var6;
            var6 = var3.shapeSize;
            var1['placeholderFeedShapeSize'] = var6;
            _fun0001_ip = 8; continue _fun0001;
case 10:
            var9 = var3.borderRadius;
            var10 = var4 != var9;
            var8 = 0;
            if(!var10) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var8 = var9;
case 40:
            var1['borderRadius'] = var8;
            var8 = var3.shape;
            var1['placeholderShape'] = var8;
            var9 = var3.spaceGap;
            var10 = var4 != var9;
            var8 = 0;
            if(!var10) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var8 = var9;
case 42:
            var1['placeholderShapeGap'] = var8;
            var9 = var3.paddingHorizontal;
            var10 = var4 != var9;
            var8 = 0;
            if(!var10) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var8 = var9;
case 44:
            var1['placeholderShapePaddingHorizontal'] = var8;
            var8 = var3.paddingVertical;
            var9 = var4 != var8;
            var6 = 0;
            if(!var9) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var6 = var8;
case 46:
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
            if(!var6) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var2 = var5;
case 48:
            var1['placeholderShapeCount'] = var2;
            var2 = var3.width;
            var1['width'] = var2;
            var2 = var3.height;
            var1['height'] = var2;
            var6 = var3.verticalAlignment;
            var7 = var4 != var6;
            var2 = 'center';
            var5 = var2;
            if(!var7) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var5 = var6;
case 50:
            var1['verticalAlignment'] = var5;
            var3 = var3.horizonalAlignment;
            var4 = var4 != var3;
            if(!var4) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var2 = var3;
case 52:
            var1['horizontalAlignment'] = var2;
case 8:
            return var1;
case 6:
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
case 0:
            var5 = arguments[0];
            var2 = undefined;
            if(!(var5 === var2)) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var5 = _closure1_slot3;
case 54:
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