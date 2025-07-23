// app/modules/emoji_picker/native/components/categories/EmojiPickerCategories.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var14 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
    var13 = var13.BACKGROUND_ACCENT;
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
    var8 = 'function EmojiPickerCategoriesTsx3(){const{animatedSheetIndex}=this.__closure;return animatedSheetIndex.get()===1||animatedSheetIndex.get()===-1;}';
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
 0:
            var3 = arg1;
            var15 = var3.categories;
            var _closure2_slot0 = var15;
            var12 = var3.categoryIndexActive;
            var _closure2_slot1 = var12;
            var5 = var3.style;
            var2 = var3.emojiPickerListRef;
            var _closure2_slot2 = var2;
            var13 = var3.onBackspace;
            var6 = var3.portalHostName;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 64; continue _fun0001 }
 58:
            var6 = 'expression-footer';
 64:
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var3 = _closure1_slot12;
            var14 = var3.bind(var4)();
            _closure2_slot3 = var14;
            var11 = _closure1_slot0;
            var27 = _closure1_slot2;
            var28 = 7;
            var3 = var27[var28];
            var7 = var11.bind(var4)(var3);
            var3 = var7.useSharedValue;
            var20 = var3.bind(var7)(var4);
            _closure2_slot4 = var20;
            var7 = _closure1_slot3;
            var3 = var7.useRef;
            var3 = var3.bind(var7)(var4);
            _closure2_slot5 = var3;
            var3 = var7.useRef;
            var9 = null;
            var22 = var3.bind(var7)(var9);
            _closure2_slot6 = var22;
            var16 = var7.useMemo;
            var8 = new Array(1);
            var8[0] = var15;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    var6 = 0;
                    var1 = var6 < var1;
                    if(!var1) { _fun0002_ip = 70; continue _fun0002 }
 24:
                    var1 = _closure2_slot0;
                    var3 = var1[var6];
                    var7 = var3.type;
                    var1 = _closure1_slot4;
                    var1 = var1.UNICODE;
                    var2 = var6;
                    if(!(var7 !== var1)) { _fun0002_ip = 96; continue _fun0002 }
 54:
                    var6 = var2 + 1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(var6 < var1) { _fun0002_ip = 24; continue _fun0002 }
 70:
                    var1 = {};
                    var5 = _closure2_slot0;
                    var6 = var5.length;
                    var5 = new Array(1);
                    var5[0] = var6;
                    var1['sections'] = var5;
                    return var1;
 96:
                    var1 = {};
                    var4 = _closure2_slot0;
                    var5 = var4.length;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var1['sections'] = var4;
                    var1['firstUnicodeCategory'] = var3;
                    var1['firstUnicodeCategoryIndex'] = var2;
                    return var1;
                }
            };
            var3 = var16.bind(var7)(var3, var8);
            var16 = var3.sections;
            var19 = var3.firstUnicodeCategory;
            var18 = var3.firstUnicodeCategoryIndex;
            var17 = var7.useCallback;
            var8 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot5;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0003_ip = 65; continue _fun0003 }
 18:
                    var2 = _closure2_slot6;
                    var3 = var2.current;
                    if(!(var1 != var3)) { _fun0003_ip = 65; continue _fun0003 }
 31:
                    var2 = var3.scrollToLocation;
                    var1 = {'section': 0, 'item': null, 'animated': false};
                    var4 = arg1;
                    var1['item'] = var4;
                    var1 = var2.bind(var3)(var1);
 65:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = new Array(0);
            var3 = var17.bind(var7)(var8, var3);
            _closure2_slot7 = var3;
            var8 = var27[var28];
            var23 = var11.bind(var4)(var8);
            var21 = var23.useAnimatedReaction;
            var17 = function p() {
                var2 = _closure2_slot1;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = {};
            var8['categoryIndexActive'] = var12;
            var17['__closure'] = var8;
            var8 = 2293356797932.0;
            var17['__workletHash'] = var8;
            var8 = _closure1_slot13;
            var17['__initData'] = var8;
            var8 = function T(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = arg1;
                    var4 = arg2;
                    var5 = _closure2_slot4;
                    var2 = var5.get;
                    var5 = var2.bind(var5)();
                    var2 = null;
                    if(!(var2 != var4)) { _fun0004_ip = 112; continue _fun0004 }
 28:
                    if(!(var3 !== var4)) { _fun0004_ip = 112; continue _fun0004 }
 32:
                    if(!(var2 != var5)) { _fun0004_ip = 112; continue _fun0004 }
 36:
                    var4 = _closure1_slot7;
                    var6 = var3 * var4;
                    var4 = var5.end;
                    var4 = var6 > var4;
                    if(var4) { _fun0004_ip = 68; continue _fun0004 }
 59:
                    var5 = var5.start;
                    var4 = var6 < var5;
 68:
                    if(!var4) { _fun0004_ip = 112; continue _fun0004 }
 71:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot7;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
 112:
                    var1 = undefined;
                    return var1;
                }
            };
            var24 = {};
            var24['blockRef'] = var20;
            var26 = _closure1_slot7;
            var24['EXPRESSION_FOOTER_HEIGHT'] = var26;
            var25 = var27[var28];
            var25 = var11.bind(var4)(var25);
            var25 = var25.runOnJS;
            var24['runOnJS'] = var25;
            var24['scrollToCategoryIndex'] = var3;
            var8['__closure'] = var24;
            var24 = 7148256102464.0;
            var8['__workletHash'] = var24;
            var24 = _closure1_slot14;
            var8['__initData'] = var24;
            var8 = var21.bind(var23)(var17, var8);
            var21 = var7.useCallback;
            var17 = new Array(1);
            var17[0] = var20;
            var8 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var5 = arg1;
                    var1 = _closure2_slot5;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0005_ip = 90; continue _fun0005 }
 21:
                    var3 = _closure2_slot4;
                    var2 = var3.set;
                    var1 = {};
                    var6 = var5.nativeEvent;
                    var6 = var6.contentOffset;
                    var6 = var6.x;
                    var1['start'] = var6;
                    var5 = var5.nativeEvent;
                    var5 = var5.contentOffset;
                    var5 = var5.x;
                    var4 = _closure2_slot5;
                    var4 = var4.current;
                    var4 = var5 + var4;
                    var1['end'] = var4;
                    var1 = var2.bind(var3)(var1);
 90:
                    var1 = undefined;
                    return var1;
                }
            };
            var24 = var21.bind(var7)(var8, var17);
            var17 = var7.useContext;
            var8 = 8;
            var8 = var27[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.PortalKeyboardContext;
            var8 = var17.bind(var7)(var8);
            var17 = var8.bottomSheetRefs;
            var21 = var17.expression;
            _closure2_slot8 = var21;
            var29 = var8.animatedSheetIndex;
            _closure2_slot9 = var29;
            var8 = var27[var28];
            var23 = var11.bind(var4)(var8);
            var17 = var23.useDerivedValue;
            var8 = function G() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot9;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = 1;
                    var1 = var1 === var3;
                    if(var1) { _fun0006_ip = 49; continue _fun0006 }
 26:
                    var3 = _closure2_slot9;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = -1;
                    var1 = var2 === var3;
 49:
                    return var1;
                }
            };
            var25 = {};
            var25['animatedSheetIndex'] = var29;
            var8['__closure'] = var25;
            var25 = 8911799153364.0;
            var8['__workletHash'] = var25;
            var25 = _closure1_slot15;
            var8['__initData'] = var25;
            var25 = var17.bind(var23)(var8);
            _closure2_slot10 = var25;
            var8 = var7.useRef;
            var8 = var8.bind(var7)(var4);
            _closure2_slot11 = var8;
            var17 = var7.useCallback;
            var8 = new Array(3);
            var8[0] = var25;
            var8[1] = var21;
            var8[2] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var5 = arguments[0];
                    var1 = undefined;
                    if(!(var5 === var1)) { _fun0007_ip = 21; continue _fun0007 }
 9:
                    var2 = _closure2_slot11;
                    var5 = var2.current;
 21:
                    var3 = _closure2_slot2;
                    var3 = var3.current;
                    var7 = null;
                    var3 = var7 != var3;
                    if(!var3) { _fun0007_ip = 46; continue _fun0007 }
 42:
                    var3 = var7 != var5;
 46:
                    if(!var3) { _fun0007_ip = 155; continue _fun0007 }
 49:
                    var4 = _closure2_slot10;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0007_ip = 119; continue _fun0007 }
 65:
                    var3 = _closure2_slot8;
                    var3 = var7 == var3;
                    var4 = undefined;
                    if(var3) { _fun0007_ip = 94; continue _fun0007 }
 78:
                    var6 = _closure2_slot8;
                    var6 = var6.current;
                    var3 = var7 == var6;
                    var4 = var6;
 94:
                    if(var3) { _fun0007_ip = 107; continue _fun0007 }
 97:
                    var3 = var4.expand;
                    var3 = var3.bind(var4)();
 107:
                    var3 = _closure2_slot11;
                    var3['current'] = var5;
                    _fun0007_ip = 155; continue _fun0007;
 119:
                    var3 = _closure2_slot11;
                    var3['current'] = var1;
                    var2 = _closure2_slot2;
                    var4 = var2.current;
                    var3 = var4.scrollToHeaderIndex;
                    var2 = {};
                    var2['index'] = var5;
                    var2 = var3.bind(var4)(var2);
 155:
                    return var1;
                }
            };
            var2 = var17.bind(var7)(var2, var8);
            _closure2_slot12 = var2;
            var8 = var27[var28];
            var23 = var11.bind(var4)(var8);
            var21 = var23.useAnimatedReaction;
            var17 = function F() {
                var2 = _closure2_slot10;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = {};
            var8['bottomSheetOpen'] = var25;
            var17['__closure'] = var8;
            var8 = 13172461706889.0;
            var17['__workletHash'] = var8;
            var8 = _closure1_slot16;
            var17['__initData'] = var8;
            var8 = function L(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = arg1;
                    if(!var1) { _fun0008_ip = 52; continue _fun0008 }
 6:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.runOnJS;
                    var1 = _closure2_slot12;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
 52:
                    var1 = undefined;
                    return var1;
                }
            };
            var25 = {};
            var28 = var27[var28];
            var28 = var11.bind(var4)(var28);
            var28 = var28.runOnJS;
            var25['runOnJS'] = var28;
            var25['handleScrollToCategoryIndex'] = var2;
            var8['__closure'] = var25;
            var25 = 13670816929775.0;
            var8['__workletHash'] = var25;
            var25 = _closure1_slot17;
            var8['__initData'] = var25;
            var8 = var21.bind(var23)(var17, var8);
            var17 = var7.useCallback;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = arg2;
                    var4 = var1.type;
                    var3 = _closure1_slot4;
                    var3 = var3.GUILD;
                    if(!(var4 === var3)) { _fun0009_ip = 126; continue _fun0009 }
 25:
                    var6 = var1.guild;
                    var1 = null;
                    if(!(var1 != var6)) { _fun0009_ip = 126; continue _fun0009 }
 36:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 9;
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
 126:
                    var4 = _closure2_slot12;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 10;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.triggerHapticFeedback;
                    var5 = _closure1_slot1;
                    var2 = 11;
                    var2 = var6[var2];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = var17.bind(var7)(var2, var8);
            _closure2_slot13 = var2;
            var17 = var7.useCallback;
            var8 = new Array(2);
            var8[0] = var2;
            var8[1] = var3;
            var3 = function(arg1, arg2) {
                var3 = arg1;
                var5 = _closure2_slot13;
                var1 = undefined;
                var4 = arg2;
                var4 = var5.bind(var1)(var3, var4);
                var2 = _closure2_slot7;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var17 = var17.bind(var7)(var3, var8);
            var21 = var7.useCallback;
            var8 = new Array(1);
            var8[0] = var20;
            var3 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var2 = _closure2_slot5;
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var1 = var1.width;
                    var2['current'] = var1;
                    var2 = _closure2_slot4;
                    var1 = var2.get;
                    var9 = var1.bind(var2)();
                    var4 = _closure2_slot4;
                    var3 = var4.set;
                    var2 = {};
                    var8 = null;
                    var6 = var8 == var9;
                    var1 = undefined;
                    var10 = undefined;
                    if(var6) { _fun0010_ip = 74; continue _fun0010 }
 69:
                    var10 = var9.start;
 74:
                    var11 = var8 != var10;
                    var7 = 0;
                    if(!var11) { _fun0010_ip = 86; continue _fun0010 }
 83:
                    var7 = var10;
 86:
                    var2['start'] = var7;
                    var10 = var8 == var9;
                    var7 = undefined;
                    if(var10) { _fun0010_ip = 104; continue _fun0010 }
 99:
                    var7 = var9.start;
 104:
                    var8 = var8 != var7;
                    var6 = 0;
                    if(!var8) { _fun0010_ip = 116; continue _fun0010 }
 113:
                    var6 = var7;
 116:
                    var5 = _closure2_slot5;
                    var5 = var5.current;
                    var5 = var6 + var5;
                    var2['end'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var25 = var21.bind(var7)(var3, var8);
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
                var1 = 12;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure2_slot0;
                var8 = var6[var7];
                var1['category'] = var8;
                var8 = _closure2_slot1;
                var1['categoryIndexActive'] = var8;
                var1['index'] = var7;
                var8 = _closure2_slot13;
                var1['handlePressCategory'] = var8;
                var8 = _closure2_slot3;
                var8 = var8.listPlaceholder;
                var1['loadingStyle'] = var8;
                var6 = var6[var7];
                var6 = var6.isNitroLocked;
                var1['locked'] = var6;
                var5 = _closure2_slot3;
                var5 = var5.item;
                var1['style'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var21 = var8.bind(var7)(var2, var3);
            var15 = _closure1_slot1;
            var2 = 13;
            var2 = var27[var2];
            var2 = var15.bind(var4)(var2);
            var23 = var2.bind(var4)();
            var3 = var7.useMemo;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
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
            var1 = 15;
            var1 = var27[var1];
            var2 = var15.bind(var4)(var1);
            var1 = {};
            var1['portalHostName'] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot11;
            var6 = _closure1_slot10;
            var5 = {};
            var8 = 14;
            var8 = var27[var8];
            var8 = var11.bind(var4)(var8);
            var11 = var8.GestureDetector;
            var8 = {};
            var8['gesture'] = var12;
            var12 = 16;
            var12 = var27[var12];
            var15 = var15.bind(var4)(var12);
            var12 = {'estimatedListSize': 'windowSize', 'horizontal': true, 'itemSize': null, 'keyboardShouldPersistTaps': 'always'};
            var12['itemSize'] = var26;
            var26 = _closure1_slot8;
            var26 = var26.EMOJI;
            var12['listId'] = var26;
            var12['onLayout'] = var25;
            var12['onScroll'] = var24;
            var12['placeholderConfig'] = var23;
            var12['ref'] = var22;
            var12['renderItem'] = var21;
            var21 = 'callbacks';
            var12['scrollReporting'] = var21;
            var12['sections'] = var16;
            var16 = false;
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
            if(!var12) { _fun0001_ip = 1141; continue _fun0001 }
 1081:
            var16 = _closure1_slot9;
            var15 = _closure1_slot1;
            var21 = _closure1_slot2;
            var12 = 17;
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
 1141:
            var8[1] = var11;
            var11 = var9 != var13;
            var9 = null;
            if(!var11) { _fun0001_ip = 1211; continue _fun0001 }
 1154:
            var12 = _closure1_slot9;
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = 18;
            var10 = var15[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var15 = var14.item;
            var10['style'] = var15;
            var14 = var14.keyboardItem;
            var10['iconStyle'] = var14;
            var10['onBackspace'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 1211:
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emoji_picker/native/components/categories/EmojiPickerCategories.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();