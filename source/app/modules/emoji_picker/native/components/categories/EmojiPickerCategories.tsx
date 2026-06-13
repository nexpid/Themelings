// app/modules/emoji_picker/native/components/categories/EmojiPickerCategories.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
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
    var _closure1_slot3 = var7;
    var13 = 1;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiCategoryTypes;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot5 = var8;
    var8 = var4.AnalyticsPages;
    var _closure1_slot6 = var8;
    var11 = var4.CATEGORY_ICON_SIZE;
    var12 = var4.EXPRESSION_FOOTER_HEIGHT;
    var _closure1_slot7 = var12;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ExpressionPickerViewType;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var8 = var4.Fragment;
    var _closure1_slot10 = var8;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var13;
    var10['height'] = var12;
    var4['list'] = var10;
    var10 = {};
    var13 = 6;
    var13 = var6[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_MUTED;
    var10['backgroundColor'] = var13;
    var4['listPlaceholder'] = var10;
    var10 = {};
    var10['height'] = var12;
    var10['width'] = var12;
    var12 = 'center';
    var10['justifyContent'] = var12;
    var10['alignItems'] = var12;
    var4['item'] = var10;
    var10 = {};
    var10['height'] = var11;
    var10['width'] = var11;
    var4['keyboardItem'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = 'function EmojiPickerCategoriesTsx1(){const{categoryIndexActive}=this.__closure;return categoryIndexActive.get();}';
    var4['code'] = var8;
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function EmojiPickerCategoriesTsx2(categoryIndex,categoryIndexPrev){const{blockRef,EXPRESSION_FOOTER_HEIGHT,runOnJS,scrollToCategoryIndex}=this.__closure;const ref=blockRef.get();if(categoryIndexPrev==null||categoryIndex===categoryIndexPrev||ref==null){return;}const categoryScrollPos=categoryIndex*EXPRESSION_FOOTER_HEIGHT;if(categoryScrollPos>ref.end||categoryScrollPos<ref.start){runOnJS(scrollToCategoryIndex)(categoryIndex);}}';
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = 'function EmojiPickerCategoriesTsx3(){const{inPortalKeyboard,bottomSheetIndex}=this.__closure;return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;}';
    var4['code'] = var8;
    var _closure1_slot15 = var4;
    var4 = {};
    var8 = 'function EmojiPickerCategoriesTsx4(){const{bottomSheetOpen}=this.__closure;return bottomSheetOpen.get();}';
    var4['code'] = var8;
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = 'function EmojiPickerCategoriesTsx5(open){const{runOnJS,handleScrollToCategoryIndex}=this.__closure;if(!open){return;}runOnJS(handleScrollToCategoryIndex)();}';
    var4['code'] = var8;
    var _closure1_slot17 = var4;
    var4 = var7.memo;
    var2 = function EmojiPickerCategories(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var29 = var2.bottomSheetRef;
            var _closure2_slot0 = var29;
            var32 = var2.bottomSheetIndex;
            var _closure2_slot1 = var32;
            var15 = var2.categories;
            var _closure2_slot2 = var15;
            var12 = var2.categoryIndexActive;
            var _closure2_slot3 = var12;
            var5 = var2.style;
            var8 = var2.emojiPickerListRef;
            var _closure2_slot4 = var8;
            var13 = var2.onBackspace;
            var6 = var2.portalHostName;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = 'expression-footer';
case 2:
            var26 = var2.inPortalKeyboard;
            if(!(var26 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var26 = false;
case 4:
            var _closure2_slot5 = var26;
            var24 = var2.isSearching;
            if(!(var24 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var24 = false;
case 6:
            var _closure2_slot6 = var24;
            var2 = var2.onClearSearch;
            var _closure2_slot7 = var2;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var3 = _closure1_slot12;
            var14 = var3.bind(var4)();
            _closure2_slot8 = var14;
            var11 = _closure1_slot0;
            var28 = _closure1_slot2;
            var31 = 7;
            var3 = var28[var31];
            var7 = var11.bind(var4)(var3);
            var3 = var7.useSharedValue;
            var20 = var3.bind(var7)(var4);
            _closure2_slot9 = var20;
            var7 = _closure1_slot3;
            var3 = var7.useRef;
            var3 = var3.bind(var7)(var4);
            _closure2_slot10 = var3;
            var3 = var7.useRef;
            var9 = null;
            var23 = var3.bind(var7)(var9);
            _closure2_slot11 = var23;
            var17 = var7.useMemo;
            var16 = new Array(1);
            var16[0] = var15;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var1 = var1.length;
                    var6 = 0;
                    var1 = var6 < var1;
                    if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var1 = _closure2_slot2;
                    var3 = var1[var6];
                    var7 = var3.type;
                    var1 = _closure1_slot4;
                    var1 = var1.UNICODE;
                    var2 = var6;
                    if(!(var7 !== var1)) { _fun0002_ip = 4; continue _fun0002 }
case 10:
                    var6 = var2 + 1;
                    var1 = _closure2_slot2;
                    var1 = var1.length;
                    if(var6 < var1) { _fun0002_ip = 9; continue _fun0002 }
case 8:
                    var1 = {};
                    var5 = _closure2_slot2;
                    var6 = var5.length;
                    var5 = new Array(1);
                    var5[0] = var6;
                    var1['sections'] = var5;
                    return var1;
case 4:
                    var1 = {};
                    var4 = _closure2_slot2;
                    var5 = var4.length;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var1['sections'] = var4;
                    var1['firstUnicodeCategory'] = var3;
                    var1['firstUnicodeCategoryIndex'] = var2;
                    return var1;
                }
            };
            var3 = var17.bind(var7)(var3, var16);
            var21 = var3.sections;
            var19 = var3.firstUnicodeCategory;
            var18 = var3.firstUnicodeCategoryIndex;
            var17 = var7.useCallback;
            var16 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot10;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var2 = _closure2_slot11;
                    var3 = var2.current;
                    if(!(var1 != var3)) { _fun0003_ip = 11; continue _fun0003 }
case 13:
                    var2 = var3.scrollToLocation;
                    var1 = {'section': 0, 'item': null, 'animated': false};
                    var4 = arg1;
                    var1['item'] = var4;
                    var1 = var2.bind(var3)(var1);
case 11:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = new Array(0);
            var3 = var17.bind(var7)(var16, var3);
            _closure2_slot12 = var3;
            var16 = var28[var31];
            var25 = var11.bind(var4)(var16);
            var22 = var25.useAnimatedReaction;
            var17 = function w() {
                var2 = _closure2_slot3;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var16 = {};
            var16['categoryIndexActive'] = var12;
            var17['__closure'] = var16;
            var16 = 2293356797932.0;
            var17['__workletHash'] = var16;
            var16 = _closure1_slot13;
            var17['__initData'] = var16;
            var16 = function j(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var4 = arg2;
                    var5 = _closure2_slot9;
                    var2 = var5.get;
                    var5 = var2.bind(var5)();
                    var2 = null;
                    if(!(var2 != var4)) { _fun0004_ip = 6; continue _fun0004 }
case 14:
                    if(!(var3 !== var4)) { _fun0004_ip = 6; continue _fun0004 }
case 15:
                    if(!(var2 != var5)) { _fun0004_ip = 6; continue _fun0004 }
case 16:
                    var4 = _closure1_slot7;
                    var6 = var3 * var4;
                    var4 = var5.end;
                    var4 = var6 > var4;
                    if(var4) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var5 = var5.start;
                    var4 = var6 < var5;
case 17:
                    if(!var4) { _fun0004_ip = 6; continue _fun0004 }
case 19:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot12;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = {};
            var30['blockRef'] = var20;
            var27 = _closure1_slot7;
            var30['EXPRESSION_FOOTER_HEIGHT'] = var27;
            var33 = var28[var31];
            var33 = var11.bind(var4)(var33);
            var33 = var33.runOnJS;
            var30['runOnJS'] = var33;
            var30['scrollToCategoryIndex'] = var3;
            var16['__closure'] = var30;
            var30 = 7148256102464.0;
            var16['__workletHash'] = var30;
            var30 = _closure1_slot14;
            var16['__initData'] = var30;
            var16 = var22.bind(var25)(var17, var16);
            var22 = var7.useCallback;
            var17 = new Array(1);
            var17[0] = var20;
            var16 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var5 = arg1;
                    var1 = _closure2_slot10;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var3 = _closure2_slot9;
                    var2 = var3.set;
                    var1 = {};
                    var6 = var5.nativeEvent;
                    var6 = var6.contentOffset;
                    var6 = var6.x;
                    var1['start'] = var6;
                    var5 = var5.nativeEvent;
                    var5 = var5.contentOffset;
                    var5 = var5.x;
                    var4 = _closure2_slot10;
                    var4 = var4.current;
                    var4 = var5 + var4;
                    var1['end'] = var4;
                    var1 = var2.bind(var3)(var1);
case 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var25 = var22.bind(var7)(var16, var17);
            var16 = var28[var31];
            var22 = var11.bind(var4)(var16);
            var17 = var22.useDerivedValue;
            var16 = function K() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    if(var1) { _fun0006_ip = 13; continue _fun0006 }
case 22:
                    var1 = 0;
                    var1 = var1 === var3;
                    _fun0006_ip = 23; continue _fun0006;
case 13:
                    var2 = 1;
                    var1 = var2 === var3;
case 23:
                    return var1;
                }
            };
            var30 = {};
            var30['inPortalKeyboard'] = var26;
            var30['bottomSheetIndex'] = var32;
            var16['__closure'] = var30;
            var30 = 15413192314561.0;
            var16['__workletHash'] = var30;
            var30 = _closure1_slot15;
            var16['__initData'] = var30;
            var30 = var17.bind(var22)(var16);
            _closure2_slot13 = var30;
            var16 = var7.useRef;
            var16 = var16.bind(var7)(var4);
            _closure2_slot14 = var16;
            var17 = var7.useRef;
            var16 = false;
            var17 = var17.bind(var7)(var16);
            _closure2_slot15 = var17;
            var22 = var7.useCallback;
            var17 = new Array(6);
            var17[0] = var30;
            var17[1] = var29;
            var17[2] = var8;
            var17[3] = var26;
            var17[4] = var24;
            var17[5] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = arguments[0];
                    var2 = undefined;
                    if(!(var4 === var2)) { _fun0007_ip = 21; continue _fun0007 }
case 24:
                    var1 = _closure2_slot14;
                    var4 = var1.current;
case 21:
                    var5 = null;
                    if(!(var5 != var4)) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                    var6 = _closure2_slot13;
                    var3 = var6.get;
                    var3 = var3.bind(var6)();
                    if(var3) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                    var3 = _closure2_slot5;
                    if(!var3) { _fun0007_ip = 27; continue _fun0007 }
case 29:
                    var3 = _closure2_slot0;
                    var3 = var5 == var3;
                    var6 = undefined;
                    if(var3) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                    var7 = _closure2_slot0;
                    var7 = var7.current;
                    var3 = var5 == var7;
                    var6 = var7;
case 30:
                    if(var3) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                    var3 = var6.expandActionSheet;
                    var3 = var3.bind(var6)();
case 32:
                    var3 = _closure2_slot14;
                    var3['current'] = var4;
                    var6 = _closure2_slot15;
                    var3 = false;
                    var6['current'] = var3;
                    return var2;
case 27:
                    var3 = _closure2_slot6;
                    if(!var3) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                    var3 = _closure2_slot7;
                    if(!(var5 == var3)) { _fun0007_ip = 36; continue _fun0007 }
case 34:
                    var3 = _closure2_slot4;
                    var3 = var3.current;
                    if(!(var5 != var3)) { _fun0007_ip = 25; continue _fun0007 }
case 37:
                    var3 = _closure2_slot14;
                    var3['current'] = var2;
                    var5 = _closure2_slot15;
                    var3 = false;
                    var5['current'] = var3;
                    var3 = _closure2_slot4;
                    var6 = var3.current;
                    var5 = var6.scrollToHeaderIndex;
                    var3 = {};
                    var3['index'] = var4;
                    var3 = var5.bind(var6)(var3);
case 25:
                    return var2;
case 36:
                    var3 = _closure2_slot14;
                    var3['current'] = var4;
                    var4 = _closure2_slot15;
                    var3 = true;
                    var4['current'] = var3;
                    var1 = _closure2_slot7;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var22.bind(var7)(var2, var17);
            _closure2_slot16 = var2;
            var17 = var28[var31];
            var29 = var11.bind(var4)(var17);
            var26 = var29.useAnimatedReaction;
            var22 = function z() {
                var2 = _closure2_slot13;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var17 = {};
            var17['bottomSheetOpen'] = var30;
            var22['__closure'] = var17;
            var17 = 13172461706889.0;
            var22['__workletHash'] = var17;
            var17 = _closure1_slot16;
            var22['__initData'] = var17;
            var17 = function X(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    if(!var1) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.runOnJS;
                    var1 = _closure2_slot16;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
case 38:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = {};
            var31 = var28[var31];
            var31 = var11.bind(var4)(var31);
            var31 = var31.runOnJS;
            var30['runOnJS'] = var31;
            var30['handleScrollToCategoryIndex'] = var2;
            var17['__closure'] = var30;
            var30 = 13670816929775.0;
            var17['__workletHash'] = var30;
            var30 = _closure1_slot17;
            var17['__initData'] = var30;
            var17 = var26.bind(var29)(var22, var17);
            var22 = var7.useEffect;
            var17 = new Array(3);
            var17[0] = var24;
            var17[1] = var12;
            var17[2] = var8;
            var8 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0009_ip = 40; continue _fun0009 }
case 41:
                    var1 = _closure2_slot15;
                    var1 = var1.current;
                    if(!var1) { _fun0009_ip = 40; continue _fun0009 }
case 42:
                    var1 = _closure2_slot14;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0009_ip = 40; continue _fun0009 }
case 43:
                    var3 = _closure2_slot14;
                    var4 = var3.current;
                    var5 = _closure2_slot14;
                    var3 = undefined;
                    var5['current'] = var3;
                    var5 = _closure2_slot15;
                    var3 = false;
                    var5['current'] = var3;
                    var5 = _closure2_slot3;
                    var3 = var5.set;
                    var3 = var3.bind(var5)(var4);
                    var2 = _closure2_slot4;
                    var3 = var2.current;
                    if(!(var1 != var3)) { _fun0009_ip = 40; continue _fun0009 }
case 44:
                    var2 = var3.scrollToHeaderIndex;
                    var1 = {};
                    var1['index'] = var4;
                    var1 = var2.bind(var3)(var1);
case 40:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var22.bind(var7)(var8, var17);
            var17 = var7.useCallback;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = arg2;
                    var4 = var1.type;
                    var3 = _closure1_slot4;
                    var3 = var3.GUILD;
                    if(!(var4 === var3)) { _fun0010_ip = 45; continue _fun0010 }
case 46:
                    var6 = var1.guild;
                    var1 = null;
                    if(!(var1 != var6)) { _fun0010_ip = 45; continue _fun0010 }
case 16:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var1 = _closure1_slot5;
                    var3 = var1.EXPRESSION_PICKER_CATEGORY_SELECTED;
                    var1 = {};
                    var7 = {};
                    var8 = _closure1_slot6;
                    var8 = var8.EXPRESSION_PICKER;
                    var7['page'] = var8;
                    var1['location'] = var7;
                    var7 = _closure1_slot8;
                    var7 = var7.EMOJI;
                    var1['tab'] = var7;
                    var6 = var6.id;
                    var1['guild_id'] = var6;
                    var1 = var4.bind(var5)(var3, var1);
case 45:
                    var4 = _closure2_slot16;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 9;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.triggerHapticFeedback;
                    var5 = _closure1_slot1;
                    var2 = 10;
                    var2 = var6[var2];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = var17.bind(var7)(var2, var8);
            _closure2_slot17 = var2;
            var17 = var7.useCallback;
            var8 = new Array(2);
            var8[0] = var2;
            var8[1] = var3;
            var3 = function(arg1, arg2) {
                var3 = arg1;
                var5 = _closure2_slot17;
                var1 = undefined;
                var4 = arg2;
                var4 = var5.bind(var1)(var3, var4);
                var2 = _closure2_slot12;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var17 = var17.bind(var7)(var3, var8);
            var22 = var7.useCallback;
            var8 = new Array(1);
            var8[0] = var20;
            var3 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot10;
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var1 = var1.width;
                    var2['current'] = var1;
                    var2 = _closure2_slot9;
                    var1 = var2.get;
                    var9 = var1.bind(var2)();
                    var4 = _closure2_slot9;
                    var3 = var4.set;
                    var2 = {};
                    var8 = null;
                    var6 = var8 == var9;
                    var1 = undefined;
                    var10 = undefined;
                    if(var6) { _fun0011_ip = 47; continue _fun0011 }
case 8:
                    var10 = var9.start;
case 47:
                    var11 = var8 != var10;
                    var7 = 0;
                    if(!var11) { _fun0011_ip = 48; continue _fun0011 }
case 2:
                    var7 = var10;
case 48:
                    var2['start'] = var7;
                    var10 = var8 == var9;
                    var7 = undefined;
                    if(var10) { _fun0011_ip = 49; continue _fun0011 }
case 50:
                    var7 = var9.start;
case 49:
                    var8 = var8 != var7;
                    var6 = 0;
                    if(!var8) { _fun0011_ip = 51; continue _fun0011 }
case 40:
                    var6 = var7;
case 51:
                    var5 = _closure2_slot10;
                    var5 = var5.current;
                    var5 = var6 + var5;
                    var2['end'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var26 = var22.bind(var7)(var3, var8);
            var8 = var7.useCallback;
            var3 = new Array(4);
            var3[0] = var15;
            var3[1] = var12;
            var3[2] = var2;
            var3[3] = var14;
            var2 = function(arg1, arg2) {
                var7 = arg2;
                var4 = _closure1_slot9;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 11;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure2_slot2;
                var8 = var6[var7];
                var1['category'] = var8;
                var8 = _closure2_slot3;
                var1['categoryIndexActive'] = var8;
                var1['index'] = var7;
                var8 = _closure2_slot17;
                var1['handlePressCategory'] = var8;
                var8 = _closure2_slot8;
                var8 = var8.listPlaceholder;
                var1['loadingStyle'] = var8;
                var6 = var6[var7];
                var6 = var6.isNitroLocked;
                var1['locked'] = var6;
                var5 = _closure2_slot8;
                var5 = var5.item;
                var1['style'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var22 = var8.bind(var7)(var2, var3);
            var15 = _closure1_slot1;
            var2 = 12;
            var2 = var28[var2];
            var2 = var15.bind(var4)(var2);
            var24 = var2.bind(var4)();
            var3 = var7.useMemo;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
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
            var12 = var3.bind(var7)(var2, var1);
            var3 = _closure1_slot9;
            var1 = 14;
            var1 = var28[var1];
            var2 = var15.bind(var4)(var1);
            var1 = {};
            var1['portalHostName'] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot11;
            var6 = _closure1_slot10;
            var5 = {};
            var8 = 13;
            var8 = var28[var8];
            var8 = var11.bind(var4)(var8);
            var11 = var8.GestureDetector;
            var8 = {};
            var8['gesture'] = var12;
            var12 = 15;
            var12 = var28[var12];
            var15 = var15.bind(var4)(var12);
            var12 = {'estimatedListSize': 'windowSize', 'horizontal': true, 'itemSize': null, 'keyboardShouldPersistTaps': 'always'};
            var12['itemSize'] = var27;
            var27 = _closure1_slot8;
            var27 = var27.EMOJI;
            var12['listId'] = var27;
            var12['onLayout'] = var26;
            var12['onScroll'] = var25;
            var12['placeholderConfig'] = var24;
            var12['ref'] = var23;
            var12['renderItem'] = var22;
            var22 = 'callbacks';
            var12['scrollReporting'] = var22;
            var12['sections'] = var21;
            var12['showsHorizontalScrollIndicator'] = var16;
            var16 = var14.list;
            var12['style'] = var16;
            var12 = var3.bind(var4)(var15, var12);
            var8['children'] = var12;
            var11 = var3.bind(var4)(var11, var8);
            var8 = new Array(3);
            var8[0] = var11;
            var12 = var9 != var19;
            var11 = null;
            if(!var12) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var16 = _closure1_slot9;
            var15 = _closure1_slot1;
            var21 = _closure1_slot2;
            var12 = 16;
            var12 = var21[var12];
            var15 = var15.bind(var4)(var12);
            var12 = {};
            var12['blockRef'] = var20;
            var12['category'] = var19;
            var12['categoryIndex'] = var18;
            var12['onPress'] = var17;
            var17 = var14.item;
            var12['style'] = var17;
            var11 = var16.bind(var4)(var15, var12);
case 52:
            var8[1] = var11;
            var11 = var9 != var13;
            var9 = null;
            if(!var11) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var12 = _closure1_slot9;
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = 17;
            var10 = var15[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var15 = var14.item;
            var10['style'] = var15;
            var14 = var14.keyboardItem;
            var10['iconStyle'] = var14;
            var10['onBackspace'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 54:
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emoji_picker/native/components/categories/EmojiPickerCategories.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();