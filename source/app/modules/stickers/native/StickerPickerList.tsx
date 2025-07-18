// app/modules/stickers/native/StickerPickerList.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
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
    var7 = var6[var4];
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useStickerPickerStore;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.STICKER_SCROLL_LOAD_DELAY_MS;
    var _closure1_slot8 = var8;
    var8 = var4.STICKER_SCROLL_LOAD_DELAY_AFTER_HEIGHT_CHANGE_MS;
    var _closure1_slot9 = var8;
    var4 = var4.STICKER_SIZE;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.ACTION_SHEET_BACKGROUND_COLOR;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 9;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_ACCENT;
    var10['color'] = var14;
    var4['listPlaceholder'] = var10;
    var10 = {'justifyContent': 'center', 'overflow': 'hidden'};
    var10['backgroundColor'] = var13;
    var4['section'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.EXPRESSION_PICKER_BG;
    var10['backgroundColor'] = var13;
    var4['sectionSticker'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'borderRadius': null, 'marginLeft': 12, 'marginRight': 12};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10['borderRadius'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SECONDARY_ALT;
    var10['backgroundColor'] = var11;
    var4['nsfwContainer'] = var10;
    var10 = {'marginLeft': 4, 'textAlign': 'center'};
    var4['nsfwText'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var1 = arg1;
        var8 = var1.height;
        var1 = _closure1_slot13;
        var4 = undefined;
        var9 = var1.bind(var4)();
        var3 = _closure1_slot12;
        var2 = _closure1_slot5;
        var1 = {};
        var7 = var9.nsfwContainer;
        var5 = new Array(2);
        var5[0] = var7;
        var7 = {};
        var7['height'] = var8;
        var5[1] = var7;
        var1['style'] = var5;
        var8 = _closure1_slot11;
        var11 = _closure1_slot1;
        var13 = _closure1_slot2;
        var10 = 10;
        var5 = var13[var10];
        var7 = var11.bind(var4)(var5);
        var5 = {};
        var12 = 11;
        var12 = var13[var12];
        var12 = var11.bind(var4)(var12);
        var5['source'] = var12;
        var10 = var13[var10];
        var10 = var11.bind(var4)(var10);
        var10 = var10.Sizes;
        var10 = var10.SMALL;
        var5['size'] = var10;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var12 = _closure1_slot0;
        var6 = 12;
        var6 = var13[var6];
        var6 = var12.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {'style': null, 'variant': 'text-sm/normal', 'color': 'interactive-active'};
        var9 = var9.nsfwText;
        var6['style'] = var9;
        var9 = 13;
        var10 = var13[var9];
        var10 = var12.bind(var4)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9.uy25Q0;
        var9 = var10.bind(var11)(var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot14 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var1 = arg1;
        var9 = var1.height;
        var7 = var1.label;
        var8 = var1.sectionStyle;
        var1 = _closure1_slot13;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot11;
        var2 = _closure1_slot5;
        var1 = {};
        var10 = var6.section;
        var6 = new Array(3);
        var6[0] = var10;
        var6[1] = var8;
        var8 = {};
        var8['height'] = var9;
        var6[2] = var8;
        var1['style'] = var6;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var5 = 12;
        var5 = var8[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.Text;
        var5 = {'lineClamp': 1, 'color': 'interactive-normal', 'variant': 'heading-sm/semibold'};
        var5['children'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot15 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var1 = arg1;
        var5 = var1.height;
        var4 = _closure1_slot11;
        var3 = _closure1_slot5;
        var2 = {};
        var1 = {};
        var1['height'] = var5;
        var2['style'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot16 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var24 = var1.setCategoryIndex;
            var _closure2_slot0 = var24;
            var4 = var1.searchResults;
            var26 = var1.onPressSticker;
            var _closure2_slot1 = var26;
            var6 = var1.insetBottom;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0001_ip = 45; continue _fun0001 }
 43:
            var6 = 0;
 45:
            var7 = var1.insetTop;
            if(!(var7 === var5)) { _fun0001_ip = 57; continue _fun0001 }
 55:
            var7 = 0;
 57:
            var29 = var1.channel;
            var _closure2_slot2 = var29;
            var8 = var1.inActionSheet;
            if(!(var8 === var5)) { _fun0001_ip = 78; continue _fun0001 }
 76:
            var8 = false;
 78:
            var14 = var1.inPortalKeyboard;
            if(!(var14 === var5)) { _fun0001_ip = 90; continue _fun0001 }
 88:
            var14 = false;
 90:
            var11 = var1.stickerFormats;
            if(!(var11 === var5)) { _fun0001_ip = 224; continue _fun0001 }
 103:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 14;
            var1 = var9[var2];
            var1 = var3.bind(var5)(var1);
            var1 = var1.StickerFormat;
            var10 = var1.PNG;
            var1 = new Array(4);
            var1[0] = var10;
            var10 = var9[var2];
            var10 = var3.bind(var5)(var10);
            var10 = var10.StickerFormat;
            var10 = var10.APNG;
            var1[1] = var10;
            var10 = var9[var2];
            var10 = var3.bind(var5)(var10);
            var10 = var10.StickerFormat;
            var10 = var10.LOTTIE;
            var1[2] = var10;
            var2 = var9[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.StickerFormat;
            var2 = var2.GIF;
            var1[3] = var2;
            var11 = var1;
 224:
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var _closure2_slot14 = var5;
            var _closure2_slot15 = var5;
            var _closure2_slot16 = var5;
            var _closure2_slot17 = var5;
            var _closure2_slot18 = var5;
            var _closure2_slot19 = var5;
            var _closure2_slot20 = var5;
            var _closure2_slot21 = var5;
            var22 = _closure1_slot4;
            var3 = var22.useRef;
            var1 = null;
            var12 = var3.bind(var22)(var1);
            _closure2_slot3 = var12;
            var3 = _closure1_slot13;
            var25 = var3.bind(var5)();
            _closure2_slot4 = var25;
            var3 = var22.useState;
            var10 = var3.bind(var22)(var1);
            var9 = _closure1_slot3;
            var3 = 2;
            var10 = var9.bind(var5)(var10, var3);
            var3 = 0;
            var27 = var10[var3];
            _closure2_slot5 = var27;
            var9 = 1;
            var9 = var10[var9];
            _closure2_slot6 = var9;
            var10 = _closure1_slot1;
            var13 = _closure1_slot2;
            var9 = 15;
            var9 = var13[var9];
            var9 = var10.bind(var5)(var9);
            var28 = var9.bind(var5)(var8, var14);
            _closure2_slot7 = var28;
            var15 = _closure1_slot0;
            var9 = 16;
            var9 = var13[var9];
            var17 = var15.bind(var5)(var9);
            var16 = var17.useStateFromStores;
            var9 = _closure1_slot6;
            var14 = new Array(1);
            var14[0] = var9;
            var9 = function() {
                var1 = _closure1_slot6;
                var1 = var1.hasLoadedStickerPacks;
                return var1;
            };
            var31 = var16.bind(var17)(var14, var9);
            _closure2_slot8 = var31;
            var14 = var22.useContext;
            var9 = 17;
            var9 = var13[var9];
            var9 = var15.bind(var5)(var9);
            var9 = var9.PortalKeyboardContext;
            var14 = var14.bind(var22)(var9);
            var9 = var14.bottomSheetRefs;
            var14 = var14.animatedSheetIndex;
            _closure2_slot9 = var14;
            var9 = var9.expression;
            _closure2_slot10 = var9;
            var16 = _closure1_slot7;
            var15 = function(arg1) {
                var1 = arg1;
                var1 = var1.setPackToScrollTo;
                return var1;
            };
            var17 = var16.bind(var5)(var15);
            _closure2_slot11 = var17;
            var16 = var22.useMemo;
            var15 = new Array(3);
            var15[0] = var24;
            var15[1] = var17;
            var15[2] = var9;
            var9 = function() {
                var1 = {};
                var3 = -1;
                var1['scrollTo'] = var3;
                var _closure3_slot0 = var1;
                var1 = function scrollToCancel() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var1 = _closure3_slot0;
                    var2 = var1.scrollTo;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var _closure3_slot1 = var1;
                var1 = {};
                var3 = function scroll(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.index;
                        var _closure4_slot0 = var3;
                        var6 = var1.delay;
                        var5 = var1.expand;
                        var7 = _closure3_slot1;
                        var1 = undefined;
                        var7 = var7.bind(var1)();
                        if(!var5) { _fun0002_ip = 102; continue _fun0002 }
 42:
                        var5 = _closure2_slot10;
                        var9 = null;
                        var5 = var9 == var5;
                        var7 = undefined;
                        if(var5) { _fun0002_ip = 76; continue _fun0002 }
 60:
                        var8 = _closure2_slot10;
                        var8 = var8.current;
                        var5 = var9 == var8;
                        var7 = var8;
 76:
                        if(var5) { _fun0002_ip = 89; continue _fun0002 }
 79:
                        var8 = var7.expand;
                        var5 = var9 == var8;
 89:
                        if(var5) { _fun0002_ip = 102; continue _fun0002 }
 92:
                        var5 = var7.expand;
                        var5 = var5.bind(var7)();
 102:
                        var4 = _closure3_slot0;
                        var5 = global;
                        var5 = var5.setTimeout;
                        var2 = function() {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                var2 = _closure2_slot3;
                                var5 = var2.current;
                                var3 = null;
                                if(!(var3 != var5)) { _fun0003_ip = 56; continue _fun0003 }
 18:
                                var4 = var5.scrollToLocation;
                                var2 = {'section': null, 'item': 0, 'animated': true};
                                var6 = _closure4_slot0;
                                var2['section'] = var6;
                                var2 = var4.bind(var5)(var2);
 56:
                                var2 = _closure2_slot11;
                                var1 = undefined;
                                var2 = var2.bind(var1)(var3);
                                return var1;
                            }
                        };
                        var2 = var5.bind(var1)(var2, var6);
                        var4['scrollTo'] = var2;
                        var2 = _closure2_slot0;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    }
                };
                var1['scroll'] = var3;
                var2 = function cancel() {
                    var1 = _closure3_slot1;
                    return var1;
                };
                var1['cancel'] = var2;
                return var1;
            };
            var23 = var16.bind(var22)(var9, var15);
            _closure2_slot12 = var23;
            var9 = 18;
            var9 = var13[var9];
            var10 = var10.bind(var5)(var9);
            var9 = {};
            var9['channel'] = var29;
            var9['containerWidth'] = var28;
            var9['searchResults'] = var4;
            var9['stickerFormats'] = var11;
            var20 = var10.bind(var5)(var9);
            var11 = var20.sections;
            var17 = var20.sectionHeights;
            _closure2_slot13 = var17;
            var10 = var20.sectionSize;
            _closure2_slot14 = var10;
            var9 = var20.sectionFooterSize;
            _closure2_slot15 = var9;
            var13 = var20.sectionLabels;
            _closure2_slot16 = var13;
            var15 = var20.rowsBySection;
            _closure2_slot17 = var15;
            var18 = var20.rowHeight;
            _closure2_slot18 = var18;
            var16 = var20.rowSize;
            _closure2_slot19 = var16;
            var30 = var20.packToScrollToIndex;
            _closure2_slot20 = var30;
            var21 = var22.useEffect;
            var20 = new Array(4);
            var20[0] = var31;
            var20[1] = var30;
            var20[2] = var14;
            var20[3] = var23;
            var14 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot20;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0004_ip = 20; continue _fun0004 }
 16:
                    var1 = _closure2_slot8;
 20:
                    if(!var1) { _fun0004_ip = 126; continue _fun0004 }
 23:
                    var2 = _closure2_slot9;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = 1;
                    if(!(!(var2 < var1))) { _fun0004_ip = 82; continue _fun0004 }
 43:
                    var3 = _closure2_slot12;
                    var2 = var3.scroll;
                    var1 = {};
                    var5 = _closure2_slot20;
                    var1['index'] = var5;
                    var5 = _closure1_slot8;
                    var1['delay'] = var5;
                    var1 = var2.bind(var3)(var1);
                    _fun0004_ip = 126; continue _fun0004;
 82:
                    var3 = _closure2_slot12;
                    var2 = var3.scroll;
                    var1 = {};
                    var4 = _closure2_slot20;
                    var1['index'] = var4;
                    var4 = _closure1_slot9;
                    var1['delay'] = var4;
                    var4 = true;
                    var1['expand'] = var4;
                    var1 = var2.bind(var3)(var1);
 126:
                    var1 = function() {
                        var2 = _closure2_slot12;
                        var1 = var2.cancel;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                }
            };
            var14 = var21.bind(var22)(var14, var20);
            var20 = var22.useCallback;
            var14 = new Array(3);
            var14[0] = var13;
            var14[1] = var10;
            var13 = var25.sectionSticker;
            var14[2] = var13;
            var13 = function(arg1) {
                var3 = _closure2_slot16;
                var2 = arg1;
                var5 = var3[var2];
                var4 = _closure1_slot11;
                var3 = _closure1_slot15;
                var2 = {};
                var2['label'] = var5;
                var5 = _closure2_slot4;
                var5 = var5.sectionSticker;
                var2['sectionStyle'] = var5;
                var1 = _closure2_slot14;
                var2['height'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var14 = var20.bind(var22)(var13, var14);
            var21 = var22.useCallback;
            var20 = new Array(1);
            var20[0] = var9;
            var13 = function() {
                var4 = _closure1_slot11;
                var3 = _closure1_slot16;
                var2 = {};
                var1 = _closure2_slot15;
                var2['height'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var13 = var21.bind(var22)(var13, var20);
            var21 = var22.useCallback;
            var20 = new Array(7);
            var20[0] = var29;
            var20[1] = var28;
            var20[2] = var27;
            var20[3] = var26;
            var20[4] = var18;
            var20[5] = var16;
            var20[6] = var15;
            var15 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot17;
                    var1 = arg1;
                    var3 = var2[var1];
                    var1 = null;
                    if(!(var1 != var3)) { _fun0005_ip = 235; continue _fun0005 }
 23:
                    var7 = var3.type;
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var9 = 18;
                    var4 = var4[var9];
                    var5 = undefined;
                    var4 = var8.bind(var5)(var4);
                    var4 = var4.StickerPickerSectionType;
                    var4 = var4.STICKERS;
                    if(!(var4 !== var7)) { _fun0005_ip = 130; continue _fun0005 }
 69:
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var9];
                    var4 = var8.bind(var5)(var4);
                    var4 = var4.StickerPickerSectionType;
                    var4 = var4.NSFW;
                    if(!(var4 !== var7)) { _fun0005_ip = 104; continue _fun0005 }
 102:
                    return var1;
 104:
                    var8 = _closure1_slot11;
                    var7 = _closure1_slot14;
                    var4 = {};
                    var9 = _closure2_slot18;
                    var4['height'] = var9;
                    var4 = var8.bind(var5)(var7, var4);
                    return var4;
 130:
                    var4 = var3.stickersByRow;
                    var3 = arg2;
                    var7 = var4[var3];
                    var4 = _closure1_slot11;
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 19;
                    var2 = var8[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = {};
                    var8 = _closure2_slot7;
                    var2['containerWidth'] = var8;
                    var2['stickers'] = var7;
                    var7 = _closure2_slot19;
                    var2['rowSize'] = var7;
                    var7 = _closure2_slot1;
                    var2['onPressSticker'] = var7;
                    var7 = _closure2_slot5;
                    var2['focusedSticker'] = var7;
                    var7 = _closure2_slot6;
                    var2['setFocusedSticker'] = var7;
                    var6 = _closure2_slot2;
                    var2['channel'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
 235:
                    return var1;
                }
            };
            var15 = var21.bind(var22)(var15, var20);
            var21 = var22.useMemo;
            var20 = new Array(2);
            var20[0] = var24;
            var20[1] = var17;
            var17 = function() {
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var2);
                var4 = var5.debounce;
                var2 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var6 = arg1;
                        var2 = _closure2_slot13;
                        var2 = var2.length;
                        var7 = 0;
                        var2 = var7 < var2;
                        var3 = 0;
                        if(!var2) { _fun0006_ip = 87; continue _fun0006 }
 26:
                        var2 = _closure2_slot13;
                        var2 = var2[var7];
                        var2 = var6 >= var2;
                        var5 = 0;
                        var4 = 0;
                        var3 = 0;
                        if(!var2) { _fun0006_ip = 87; continue _fun0006 }
 47:
                        var7 = var5 + 1;
                        var4 = var4 + 1;
                        var2 = _closure2_slot13;
                        var2 = var2.length;
                        var3 = var7;
                        if(!(var4 < var2)) { _fun0006_ip = 87; continue _fun0006 }
 69:
                        var2 = _closure2_slot13;
                        var2 = var2[var4];
                        var5 = var7;
                        var3 = var5;
                        if(var6 >= var2) { _fun0006_ip = 47; continue _fun0006 }
 87:
                        var2 = _closure2_slot0;
                        var1 = undefined;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    }
                };
                var1 = 100;
                var2 = var4.bind(var5)(var2, var1);
                var _closure3_slot0 = var2;
                var1 = {};
                var3 = function onScroll(arg1) {
                    var2 = arg1;
                    var4 = _closure3_slot0;
                    var1 = var2.nativeEvent;
                    var1 = var1.contentOffset;
                    var3 = var1.y;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = var2.nativeEvent;
                    var3 = var3.layoutMeasurement;
                    var3 = var3.height;
                    var3 = var2.nativeEvent;
                    var3 = var3.contentOffset;
                    var3 = var3.y;
                    var2 = var2.nativeEvent;
                    var2 = var2.contentSize;
                    var2 = var2.height;
                    return var1;
                };
                var1['onScroll'] = var3;
                var1['setCategory'] = var2;
                return var1;
            };
            var20 = var21.bind(var22)(var17, var20);
            var17 = var20.onScroll;
            var20 = var20.setCategory;
            _closure2_slot21 = var20;
            var24 = var22.useMemo;
            var21 = new Array(2);
            var21[0] = var25;
            var21[1] = var16;
            var16 = function() {
                var1 = {};
                var2 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 21;
                var4 = var8[var5];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var4 = var4.FastestListPropsPlaceholderType;
                var4 = var4.SHAPE;
                var2['type'] = var4;
                var9 = _closure2_slot4;
                var9 = var9.listPlaceholder;
                var9 = var9.color;
                var2['colorHex'] = var9;
                var9 = 'rect';
                var2['shape'] = var9;
                var10 = _closure1_slot1;
                var9 = 9;
                var11 = var8[var9];
                var11 = var10.bind(var6)(var11);
                var11 = var11.radii;
                var11 = var11.md;
                var2['borderRadius'] = var11;
                var9 = var8[var9];
                var9 = var10.bind(var6)(var9);
                var9 = var9.spacing;
                var9 = var9.PX_4;
                var2['paddingVertical'] = var9;
                var1['sectionHeader'] = var2;
                var2 = {};
                var5 = var8[var5];
                var5 = var7.bind(var6)(var5);
                var5 = var5.FastestListPropsPlaceholderType;
                var5 = var5.SHAPE;
                var2['type'] = var5;
                var5 = _closure2_slot4;
                var5 = var5.listPlaceholder;
                var5 = var5.color;
                var2['colorHex'] = var5;
                var5 = 'circle';
                var2['shape'] = var5;
                var4 = _closure2_slot19;
                var2['shapeCount'] = var4;
                var3 = _closure1_slot10;
                var2['width'] = var3;
                var2['height'] = var3;
                var1['sectionItem'] = var2;
                return var1;
            };
            var16 = var24.bind(var22)(var16, var21);
            var24 = var22.useEffect;
            var21 = new Array(1);
            var21[0] = var20;
            var20 = function() {
                var1 = function() {
                    var2 = _closure2_slot21;
                    var1 = var2.cancel;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                return var1;
            };
            var20 = var24.bind(var22)(var20, var21);
            var21 = var22.useEffect;
            var20 = new Array(1);
            var20[0] = var23;
            var19 = function() {
                var1 = function() {
                    var2 = _closure2_slot12;
                    var1 = var2.cancel;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var19 = var21.bind(var22)(var19, var20);
            var19 = var1 == var4;
            var1 = undefined;
            if(var19) { _fun0001_ip = 970; continue _fun0001 }
 965:
            var1 = var4.length;
 970:
            if(!(var3 !== var1)) { _fun0001_ip = 1186; continue _fun0001 }
 977:
            var4 = _closure1_slot11;
            var3 = _closure1_slot1;
            var21 = _closure1_slot2;
            var1 = 23;
            var1 = var21[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var20 = _closure1_slot0;
            var19 = 13;
            var22 = var21[var19];
            var22 = var20.bind(var5)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var19 = var21[var19];
            var19 = var20.bind(var5)(var19);
            var19 = var19.t;
            var19 = var19.nf1s3t;
            var19 = var22.bind(var23)(var19);
            var1['accessibilityLabel'] = var19;
            var19 = 24;
            var19 = var21[var19];
            var20 = var20.bind(var5)(var19);
            var19 = var20.getCustomKeyboardHeight;
            var19 = var19.bind(var20)();
            var1['estimatedListSize'] = var19;
            var1['inActionSheet'] = var8;
            var1['insetEnd'] = var6;
            var1['insetStart'] = var7;
            var1['itemSize'] = var18;
            var18 = 'always';
            var1['keyboardShouldPersistTaps'] = var18;
            var18 = 'sticker-picker-list';
            var1['listId'] = var18;
            var1['onScroll'] = var17;
            var1['placeholderConfig'] = var16;
            var1['renderItem'] = var15;
            var1['renderSectionHeader'] = var14;
            var1['renderSectionFooter'] = var13;
            var1['ref'] = var12;
            var12 = 'callbacks';
            var1['scrollReporting'] = var12;
            var1['sections'] = var11;
            var1['sectionHeaderSize'] = var10;
            var1['sectionFooterSize'] = var9;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 1233; continue _fun0001;
 1186:
            var4 = _closure1_slot11;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 22;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['inActionSheet'] = var8;
            var2['insetTop'] = var7;
            var2['insetBottom'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1233:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stickers/native/StickerPickerList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();