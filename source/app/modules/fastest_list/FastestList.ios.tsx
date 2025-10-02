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
    var _closure1_slot5 = var1;
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
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var14 = arg1;
            var40 = var14.accessibilityLabel;
            var2 = var14.enabled;
            var33 = var14.estimatedListSize;
            var31 = var14.horizontal;
            var4 = undefined;
            if(!(var31 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 6:
            var31 = false;
case 8:
            var _closure2_slot0 = var31;
            var30 = var14.inActionSheet;
            var29 = var14.insetStart;
            var28 = var14.insetEnd;
            var27 = var14.itemSize;
            var26 = var14.keyboardDismissMode;
            var24 = var14.keyboardShouldPersistTaps;
            var2 = var14.keyExtractor;
            var _closure2_slot1 = var2;
            var34 = var14.listFooterSize;
            var7 = var14.listFooterAlwaysMounted;
            if(!(var7 === var4)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var7 = false;
case 9:
            var32 = var14.listHeaderSize;
            var6 = var14.listHeaderAlwaysMounted;
            if(!(var6 === var4)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var6 = false;
case 11:
            var16 = var14.onLayout;
            var38 = var14.renderAhead;
            if(!(var38 === var4)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var38 = 'nominal';
case 13:
            var21 = var14.renderItem;
            var20 = var14.renderListFooter;
            var19 = var14.renderListHeader;
            var18 = var14.renderSectionHeader;
            var17 = var14.renderSectionFooter;
            var15 = var14.scrollEventThrottle;
            var42 = var14.scrollIndicatorInsetEnd;
            var _closure2_slot2 = var42;
            var41 = var14.scrollIndicatorInsetStart;
            var _closure2_slot3 = var41;
            var11 = var14.sectionHeaderSize;
            var36 = var14.sectionHeaderIsSticky;
            if(!(var36 === var4)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var36 = true;
case 15:
            var10 = var14.sectionFooterSize;
            var12 = var14.sections;
            var9 = var14.showsHorizontalScrollIndicator;
            var8 = var14.showsVerticalScrollIndicator;
            var5 = var14.style;
            var13 = {'accessibilityLabel': 0, 'enabled': 0, 'estimatedListSize': 0, 'horizontal': 0, 'inActionSheet': 0, 'insetStart': 0, 'insetEnd': 0, 'itemSize': 0, 'keyboardDismissMode': 0, 'keyboardShouldPersistTaps': 0, 'keyExtractor': 0, 'listFooterSize': 0, 'listFooterAlwaysMounted': 0, 'listHeaderSize': 0, 'listHeaderAlwaysMounted': 0, 'onLayout': 0, 'renderAhead': 0, 'renderItem': 0, 'renderListFooter': 0, 'renderListHeader': 0, 'renderSectionHeader': 0, 'renderSectionFooter': 0, 'scrollEventThrottle': 0, 'scrollIndicatorInsetEnd': 0, 'scrollIndicatorInsetStart': 0, 'sectionHeaderSize': 0, 'sectionHeaderIsSticky': 0, 'sectionFooterSize': 0, 'sections': 0, 'showsHorizontalScrollIndicator': 0, 'showsVerticalScrollIndicator': 0, 'style': 0};
            var39 = null;
            var46 = var13;
            var45 = null;
            var3 = silentSetPrototypeOf(var46, var45);
            var46 = {};
            var45 = var14;
            var44 = var13;
            var14 = copyDataProperties(var46, var45, var44);
            var13 = _closure1_slot1;
            var35 = _closure1_slot2;
            var3 = 2;
            var3 = var35[var3];
            var3 = var13.bind(var4)(var3);
            var3 = var3.bind(var4)(var14, var31);
            var25 = var3.onScroll;
            var23 = var3.onScrollBeginDrag;
            var22 = var3.onScrollEndDrag;
            var3 = 3;
            var3 = var35[var3];
            var13 = var13.bind(var4)(var3);
            var3 = {};
            var3['estimatedListSize'] = var33;
            var3['horizontal'] = var31;
            var35 = var13.bind(var4)(var3);
            var13 = _closure1_slot3;
            var33 = var13.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function(arg1, arg2, arg3) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg1;
                    var7 = arg2;
                    var8 = arg3;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var5 = 4;
                    var1 = var1[var5];
                    var6 = undefined;
                    var1 = var2.bind(var6)(var1);
                    var1 = var1.FastListItemTypes;
                    var1 = var1.ITEM;
                    if(!(var3 !== var1)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var1 = var2.bind(var6)(var1);
                    var1 = var1.FastListItemTypes;
                    var1 = var1.SECTION;
                    if(!(var3 !== var1)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var1 = var2.bind(var6)(var1);
                    var1 = var1.FastListItemTypes;
                    var2 = var1.SECTION_FOOTER;
                    var1 = undefined;
                    if(!(var3 === var2)) { _fun0003_ip = 21; continue _fun0003 }
case 11:
                    var5 = _closure2_slot1;
                    var2 = null;
                    var5 = var2 == var5;
                    var2 = undefined;
                    if(var5) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var9 = _closure2_slot1;
                    var5 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = 5;
                    var3 = var10[var3];
                    var3 = var5.bind(var6)(var3);
                    var5 = var3.SECTION_FOOTER;
                    var3 = -1;
                    var2 = var9.bind(var6)(var5, var7, var3);
case 22:
                    var1 = var2;
case 21:
                    _fun0003_ip = 24; continue _fun0003;
case 19:
                    var5 = _closure2_slot1;
                    var2 = null;
                    var5 = var2 == var5;
                    var2 = undefined;
                    if(var5) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var9 = _closure2_slot1;
                    var5 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = 5;
                    var3 = var10[var3];
                    var3 = var5.bind(var6)(var3);
                    var5 = var3.SECTION_HEADER;
                    var3 = -1;
                    var2 = var9.bind(var6)(var5, var7, var3);
case 25:
                    var1 = var2;
case 24:
                    _fun0003_ip = 27; continue _fun0003;
case 17:
                    var2 = _closure2_slot1;
                    var3 = null;
                    var9 = var3 == var2;
                    var2 = undefined;
                    if(var9) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var5 = _closure2_slot1;
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var4 = 5;
                    var4 = var10[var4];
                    var4 = var9.bind(var6)(var4);
                    var4 = var4.ITEM;
                    var9 = var3 != var8;
                    var3 = -1;
                    if(!var9) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var3 = var8;
case 30:
                    var2 = var5.bind(var6)(var4, var7, var3);
case 28:
                    var1 = var2;
case 27:
                    return var1;
                }
            };
            var33 = var33.bind(var13)(var2, var3);
            var3 = var13.useMemo;
            var2 = new Array(3);
            var2[0] = var31;
            var2[1] = var42;
            var2[2] = var41;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 == var1)) { _fun0004_ip = 32; continue _fun0004 }
case 3:
                    var1 = _closure2_slot2;
                    var2 = var2 == var1;
                    var1 = undefined;
                    if(var2) { _fun0004_ip = 33; continue _fun0004 }
case 32:
                    var2 = _closure2_slot0;
                    var3 = {};
                    var5 = _closure2_slot3;
                    if(var2) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                    var3['top'] = var5;
                    var2 = _closure2_slot2;
                    var3['bottom'] = var2;
                    var2 = var3;
                    _fun0004_ip = 36; continue _fun0004;
case 34:
                    var3['left'] = var5;
                    var4 = _closure2_slot2;
                    var3['right'] = var4;
                    var2 = var3;
case 36:
                    var1 = var2;
case 33:
                    return var1;
                }
            };
            var13 = var3.bind(var13)(var1, var2);
            var2 = var14.scrollReporting;
            var1 = 'animatedCallbacks';
            if(!(var1 !== var2)) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            _fun0002_ip = 39; continue _fun0002;
case 37:
            var2 = _closure1_slot0;
            var41 = _closure1_slot2;
            var1 = 4;
            var1 = var41[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.AnimatedFastList;
case 39:
            var2 = _closure1_slot4;
            var1 = {};
            var1['accessibilityLabel'] = var40;
            var39 = var39 == var13;
            var1['automaticallyAdjustsScrollIndicatorInsets'] = var39;
            var37 = _closure1_slot5;
            var37 = var37.bind(var4)(var38);
            var1['batchesToRender'] = var37;
            var1['chunkBase'] = var35;
            var35 = 'disabled';
            if(!var36) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var35 = 'default';
case 40:
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
            if(!(var16 !== var26)) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var24 = var25;
case 42:
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
            if(!(var16 === var15)) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var13 = var14.scrollPosition;
case 44:
            var1['scrollPosValue'] = var13;
            var1['sections'] = var12;
            var1['sectionSize'] = var11;
            var1['sectionFooterSize'] = var10;
            var1['showsHorizontalScrollIndicator'] = var9;
            var1['showsVerticalScrollIndicator'] = var8;
            if(var6) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var6 = var7;
case 46:
            var1['stickyHeaderFooter'] = var6;
            var1['style'] = var5;
            var1 = var2.bind(var4)(var3, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/fastest_list/FastestList.ios.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();