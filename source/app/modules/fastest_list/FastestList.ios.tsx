// app/modules/fastest_list/FastestList.ios.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function getBatchesToRender(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = 'nominal';
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 'half';
            if(!(var1 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = 'full';
            if(!(var1 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = undefined;
            return var1;
case 6:
            var1 = 16;
            return var1;
case 4:
            var1 = 14;
            return var1;
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RefreshControl;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = function noop() {
        var1 = undefined;
        return var1;
    };
    var _closure1_slot6 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var22 = arg1;
            var41 = var22.accessibilityLabel;
            var2 = var22.enabled;
            var35 = var22.estimatedListSize;
            var31 = var22.horizontal;
            var4 = undefined;
            if(!(var31 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 6:
            var31 = false;
case 8:
            var _closure2_slot0 = var31;
            var30 = var22.inActionSheet;
            var _closure2_slot1 = var30;
            var29 = var22.insetStart;
            var28 = var22.insetEnd;
            var27 = var22.itemSize;
            var26 = var22.keyboardDismissMode;
            var24 = var22.keyboardShouldPersistTaps;
            var3 = var22.keyExtractor;
            var _closure2_slot2 = var3;
            var34 = var22.listFooterSize;
            var7 = var22.listFooterAlwaysMounted;
            if(!(var7 === var4)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var7 = false;
case 9:
            var32 = var22.listHeaderSize;
            var6 = var22.listHeaderAlwaysMounted;
            if(!(var6 === var4)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var6 = false;
case 11:
            var16 = var22.onLayout;
            var42 = var22.preventNativeModalDismiss;
            var _closure2_slot3 = var42;
            var39 = var22.renderAhead;
            if(!(var39 === var4)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var39 = 'nominal';
case 13:
            var21 = var22.renderItem;
            var20 = var22.renderListFooter;
            var19 = var22.renderListHeader;
            var18 = var22.renderSectionHeader;
            var17 = var22.renderSectionFooter;
            var15 = var22.scrollEventThrottle;
            var43 = var22.scrollIndicatorInsetEnd;
            var _closure2_slot4 = var43;
            var2 = var22.scrollIndicatorInsetStart;
            var _closure2_slot5 = var2;
            var11 = var22.sectionHeaderSize;
            var36 = var22.sectionHeaderIsSticky;
            if(!(var36 === var4)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var36 = true;
case 15:
            var10 = var22.sectionFooterSize;
            var12 = var22.sections;
            var9 = var22.showsHorizontalScrollIndicator;
            var8 = var22.showsVerticalScrollIndicator;
            var5 = var22.style;
            var14 = {'accessibilityLabel': 0, 'enabled': 0, 'estimatedListSize': 0, 'horizontal': 0, 'inActionSheet': 0, 'insetStart': 0, 'insetEnd': 0, 'itemSize': 0, 'keyboardDismissMode': 0, 'keyboardShouldPersistTaps': 0, 'keyExtractor': 0, 'listFooterSize': 0, 'listFooterAlwaysMounted': 0, 'listHeaderSize': 0, 'listHeaderAlwaysMounted': 0, 'onLayout': 0, 'preventNativeModalDismiss': 0, 'renderAhead': 0, 'renderItem': 0, 'renderListFooter': 0, 'renderListHeader': 0, 'renderSectionHeader': 0, 'renderSectionFooter': 0, 'scrollEventThrottle': 0, 'scrollIndicatorInsetEnd': 0, 'scrollIndicatorInsetStart': 0, 'sectionHeaderSize': 0, 'sectionHeaderIsSticky': 0, 'sectionFooterSize': 0, 'sections': 0, 'showsHorizontalScrollIndicator': 0, 'showsVerticalScrollIndicator': 0, 'style': 0};
            var40 = null;
            var47 = var14;
            var46 = null;
            var13 = silentSetPrototypeOf(var47, var46);
            var47 = {};
            var46 = var22;
            var45 = var14;
            var14 = copyDataProperties(var47, var46, var45);
            var33 = _closure1_slot1;
            var37 = _closure1_slot2;
            var13 = 3;
            var13 = var37[var13];
            var13 = var33.bind(var4)(var13);
            var13 = var13.bind(var4)(var14, var31);
            var25 = var13.onScroll;
            var23 = var13.onScrollBeginDrag;
            var22 = var13.onScrollEndDrag;
            var13 = 4;
            var13 = var37[var13];
            var33 = var33.bind(var4)(var13);
            var13 = {};
            var13['estimatedListSize'] = var35;
            var13['horizontal'] = var31;
            var35 = var33.bind(var4)(var13);
            var37 = _closure1_slot3;
            var33 = var37.useCallback;
            var13 = new Array(1);
            var13[0] = var3;
            var3 = function(arg1, arg2, arg3) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var6 = arg2;
                    var7 = arg3;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var8 = 5;
                    var1 = var1[var8];
                    var5 = undefined;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.FastListItemTypes;
                    var1 = var1.ITEM;
                    if(!(var1 !== var2)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var8];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.FastListItemTypes;
                    var1 = var1.SECTION;
                    if(!(var1 !== var2)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var8];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.FastListItemTypes;
                    var1 = var1.SECTION_FOOTER;
                    if(!(var1 !== var2)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    return var5;
case 21:
                    var4 = _closure2_slot2;
                    var1 = null;
                    var4 = var1 == var4;
                    var1 = undefined;
                    if(var4) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var8 = _closure2_slot2;
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 6;
                    var2 = var9[var2];
                    var2 = var4.bind(var5)(var2);
                    var4 = var2.SECTION_FOOTER;
                    var2 = -1;
                    var1 = var8.bind(var5)(var4, var6, var2);
case 23:
                    return var1;
case 19:
                    var4 = _closure2_slot2;
                    var1 = null;
                    var4 = var1 == var4;
                    var1 = undefined;
                    if(var4) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var8 = _closure2_slot2;
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 6;
                    var2 = var9[var2];
                    var2 = var4.bind(var5)(var2);
                    var4 = var2.SECTION_HEADER;
                    var2 = -1;
                    var1 = var8.bind(var5)(var4, var6, var2);
case 25:
                    return var1;
case 17:
                    var1 = _closure2_slot2;
                    var2 = null;
                    var8 = var2 == var1;
                    var1 = undefined;
                    if(var8) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                    var4 = _closure2_slot2;
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 6;
                    var3 = var9[var3];
                    var3 = var8.bind(var5)(var3);
                    var3 = var3.ITEM;
                    var8 = var2 != var7;
                    var2 = -1;
                    if(!var8) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var2 = var7;
case 29:
                    var1 = var4.bind(var5)(var3, var6, var2);
case 27:
                    return var1;
                }
            };
            var33 = var33.bind(var37)(var3, var13);
            var13 = var37.useMemo;
            var3 = new Array(3);
            var3[0] = var31;
            var3[1] = var43;
            var3[2] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 == var1)) { _fun0004_ip = 31; continue _fun0004 }
case 3:
                    var1 = _closure2_slot4;
                    var2 = var2 == var1;
                    var1 = undefined;
                    if(var2) { _fun0004_ip = 32; continue _fun0004 }
case 31:
                    var2 = _closure2_slot0;
                    var3 = {};
                    var5 = _closure2_slot5;
                    if(var2) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var3['top'] = var5;
                    var2 = _closure2_slot4;
                    var3['bottom'] = var2;
                    var2 = var3;
                    _fun0004_ip = 35; continue _fun0004;
case 33:
                    var3['left'] = var5;
                    var4 = _closure2_slot4;
                    var3['right'] = var4;
                    var2 = var3;
case 35:
                    var1 = var2;
case 32:
                    return var1;
                }
            };
            var13 = var13.bind(var37)(var2, var3);
            var3 = var37.useMemo;
            var2 = new Array(2);
            var2[0] = var42;
            var2[1] = var30;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure2_slot3;
                    var5 = undefined;
                    var3 = true;
                    var1 = undefined;
                    if(!(var3 === var4)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    if(!(var3 === var2)) { _fun0005_ip = 36; continue _fun0005 }
case 38:
                    var4 = _closure1_slot5;
                    var3 = _closure1_slot4;
                    var2 = {'refreshing': false, 'onRefresh': null, 'tintColor': 'transparent'};
                    var6 = _closure1_slot6;
                    var2['onRefresh'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 36:
                    return var1;
                }
            };
            var37 = var3.bind(var37)(var1, var2);
            var2 = var14.scrollReporting;
            var1 = 'animatedCallbacks';
            if(!(var1 !== var2)) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            _fun0002_ip = 41; continue _fun0002;
case 39:
            var2 = _closure1_slot0;
            var42 = _closure1_slot2;
            var1 = 5;
            var1 = var42[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.AnimatedFastList;
case 41:
            var2 = _closure1_slot5;
            var1 = {};
            var1['accessibilityLabel'] = var41;
            var40 = var40 == var13;
            var1['automaticallyAdjustsScrollIndicatorInsets'] = var40;
            var38 = _closure1_slot7;
            var38 = var38.bind(var4)(var39);
            var1['batchesToRender'] = var38;
            var1['refreshControl'] = var37;
            var1['chunkBase'] = var35;
            var35 = 'disabled';
            if(!var36) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var35 = 'default';
case 42:
            var1['stickySectionsVariant'] = var35;
            var1['footerSize'] = var34;
            var1['getRecyclerKey'] = var33;
            var1['headerSize'] = var32;
            var1['horizontal'] = var31;
            var1['inActionSheet'] = var30;
            var1['insetStart'] = var29;
            var1['insetEnd'] = var28;
            var1['itemSize'] = var27;
            var1['keyboardDismissMode'] = var26;
            var1['keyboardShouldPersistTaps'] = var24;
            var1['onLayout'] = var16;
            var26 = var14.scrollReporting;
            var16 = 'animatedScrollPosition';
            var24 = undefined;
            if(!(var16 !== var26)) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var24 = var25;
case 44:
            var1['onScroll'] = var24;
            var1['onScrollBeginDrag'] = var23;
            var1['onScrollEndDrag'] = var22;
            var22 = true;
            var1['optimizeListItemRender'] = var22;
            var22 = arg2;
            var1['ref'] = var22;
            var1['renderItem'] = var21;
            var1['renderFooter'] = var20;
            var1['renderHeader'] = var19;
            var1['renderSection'] = var18;
            var1['renderSectionFooter'] = var17;
            var1['scrollEventThrottle'] = var15;
            var1['scrollIndicatorInsets'] = var13;
            var15 = var14.scrollReporting;
            var13 = undefined;
            if(!(var16 === var15)) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var13 = var14.scrollPosition;
case 46:
            var1['scrollPosValue'] = var13;
            var1['sections'] = var12;
            var1['sectionSize'] = var11;
            var1['sectionFooterSize'] = var10;
            var1['showsHorizontalScrollIndicator'] = var9;
            var1['showsVerticalScrollIndicator'] = var8;
            if(var6) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var6 = var7;
case 48:
            var1['stickyHeaderFooter'] = var6;
            var1['style'] = var5;
            var1 = var2.bind(var4)(var3, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/fastest_list/FastestList.ios.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();