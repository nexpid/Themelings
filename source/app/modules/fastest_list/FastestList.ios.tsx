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
 0:
            var2 = arg1;
            var1 = 'nominal';
            if(!(var1 !== var2)) { _fun0001_ip = 43; continue _fun0001 }
 13:
            var1 = 'half';
            if(!(var1 !== var2)) { _fun0001_ip = 38; continue _fun0001 }
 21:
            var1 = 'full';
            if(!(var1 !== var2)) { _fun0001_ip = 33; continue _fun0001 }
 29:
            var1 = undefined;
            return var1;
 33:
            var1 = 16;
            return var1;
 38:
            var1 = 14;
            return var1;
 43:
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
 0:
            var14 = arg1;
            var40 = var14.accessibilityLabel;
            var2 = var14.enabled;
            var33 = var14.estimatedListSize;
            var31 = var14.horizontal;
            var4 = undefined;
            if(!(var31 === var4)) { _fun0002_ip = 35; continue _fun0002 }
 33:
            var31 = false;
 35:
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
            if(!(var7 === var4)) { _fun0002_ip = 103; continue _fun0002 }
 101:
            var7 = false;
 103:
            var32 = var14.listHeaderSize;
            var6 = var14.listHeaderAlwaysMounted;
            if(!(var6 === var4)) { _fun0002_ip = 121; continue _fun0002 }
 119:
            var6 = false;
 121:
            var16 = var14.onLayout;
            var38 = var14.renderAhead;
            if(!(var38 === var4)) { _fun0002_ip = 143; continue _fun0002 }
 137:
            var38 = 'nominal';
 143:
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
            if(!(var36 === var4)) { _fun0002_ip = 217; continue _fun0002 }
 215:
            var36 = true;
 217:
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
 0:
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
                    if(!(var3 !== var1)) { _fun0003_ip = 253; continue _fun0003 }
 53:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var1 = var2.bind(var6)(var1);
                    var1 = var1.FastListItemTypes;
                    var1 = var1.SECTION;
                    if(!(var3 !== var1)) { _fun0003_ip = 187; continue _fun0003 }
 86:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var1 = var2.bind(var6)(var1);
                    var1 = var1.FastListItemTypes;
                    var2 = var1.SECTION_FOOTER;
                    var1 = undefined;
                    if(!(var3 === var2)) { _fun0003_ip = 185; continue _fun0003 }
 121:
                    var5 = _closure2_slot1;
                    var2 = null;
                    var5 = var2 == var5;
                    var2 = undefined;
                    if(var5) { _fun0003_ip = 182; continue _fun0003 }
 139:
                    var9 = _closure2_slot1;
                    var5 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = 5;
                    var3 = var10[var3];
                    var3 = var5.bind(var6)(var3);
                    var5 = var3.SECTION_FOOTER;
                    var3 = -1;
                    var2 = var9.bind(var6)(var5, var7, var3);
 182:
                    var1 = var2;
 185:
                    _fun0003_ip = 251; continue _fun0003;
 187:
                    var5 = _closure2_slot1;
                    var2 = null;
                    var5 = var2 == var5;
                    var2 = undefined;
                    if(var5) { _fun0003_ip = 248; continue _fun0003 }
 205:
                    var9 = _closure2_slot1;
                    var5 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = 5;
                    var3 = var10[var3];
                    var3 = var5.bind(var6)(var3);
                    var5 = var3.SECTION_HEADER;
                    var3 = -1;
                    var2 = var9.bind(var6)(var5, var7, var3);
 248:
                    var1 = var2;
 251:
                    _fun0003_ip = 327; continue _fun0003;
 253:
                    var2 = _closure2_slot1;
                    var3 = null;
                    var9 = var3 == var2;
                    var2 = undefined;
                    if(var9) { _fun0003_ip = 324; continue _fun0003 }
 271:
                    var5 = _closure2_slot1;
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var4 = 5;
                    var4 = var10[var4];
                    var4 = var9.bind(var6)(var4);
                    var4 = var4.ITEM;
                    var9 = var3 != var8;
                    var3 = -1;
                    if(!var9) { _fun0003_ip = 317; continue _fun0003 }
 314:
                    var3 = var8;
 317:
                    var2 = var5.bind(var6)(var4, var7, var3);
 324:
                    var1 = var2;
 327:
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
 0:
                    var1 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 == var1)) { _fun0004_ip = 26; continue _fun0004 }
 13:
                    var1 = _closure2_slot2;
                    var2 = var2 == var1;
                    var1 = undefined;
                    if(var2) { _fun0004_ip = 74; continue _fun0004 }
 26:
                    var2 = _closure2_slot0;
                    var3 = {};
                    var5 = _closure2_slot3;
                    if(var2) { _fun0004_ip = 56; continue _fun0004 }
 39:
                    var3['top'] = var5;
                    var2 = _closure2_slot2;
                    var3['bottom'] = var2;
                    var2 = var3;
                    _fun0004_ip = 71; continue _fun0004;
 56:
                    var3['left'] = var5;
                    var4 = _closure2_slot2;
                    var3['right'] = var4;
                    var2 = var3;
 71:
                    var1 = var2;
 74:
                    return var1;
                }
            };
            var13 = var3.bind(var13)(var1, var2);
            var2 = var14.scrollReporting;
            var1 = 'animatedCallbacks';
            if(!(var1 !== var2)) { _fun0002_ip = 461; continue _fun0002 }
 439:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            _fun0002_ip = 487; continue _fun0002;
 461:
            var2 = _closure1_slot0;
            var41 = _closure1_slot2;
            var1 = 4;
            var1 = var41[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.AnimatedFastList;
 487:
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
            if(!var36) { _fun0002_ip = 536; continue _fun0002 }
 532:
            var35 = 'default';
 536:
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
            if(!(var16 !== var26)) { _fun0002_ip = 617; continue _fun0002 }
 614:
            var24 = var25;
 617:
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
            if(!(var16 === var15)) { _fun0002_ip = 699; continue _fun0002 }
 693:
            var13 = var14.scrollPosition;
 699:
            var1['scrollPosValue'] = var13;
            var1['sections'] = var12;
            var1['sectionSize'] = var11;
            var1['sectionFooterSize'] = var10;
            var1['showsHorizontalScrollIndicator'] = var9;
            var1['showsVerticalScrollIndicator'] = var8;
            if(var6) { _fun0002_ip = 735; continue _fun0002 }
 732:
            var6 = var7;
 735:
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