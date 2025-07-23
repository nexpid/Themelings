// app/modules/stickers/native/StickerPickerCategories.tsx
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
    var11 = 1;
    var7 = var6[var11];
    var4 = native4;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot4 = var8;
    var14 = 2;
    var4 = var6[var14];
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
    var7 = var4.AnalyticEvents;
    var _closure1_slot8 = var7;
    var7 = var4.AnalyticsPages;
    var _closure1_slot9 = var7;
    var7 = var4.CATEGORY_ICON_RIPPLE_CONFIG;
    var _closure1_slot10 = var7;
    var13 = var4.CATEGORY_ICON_SIZE;
    var _closure1_slot11 = var13;
    var16 = var4.EXPRESSION_FOOTER_HEIGHT;
    var _closure1_slot12 = var16;
    var15 = var4.NODE_SIZE;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ExpressionPickerViewType;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot14 = var7;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var11;
    var10['height'] = var16;
    var4['list'] = var10;
    var10 = {};
    var10['height'] = var16;
    var10['width'] = var16;
    var16 = 'center';
    var10['justifyContent'] = var16;
    var10['alignItems'] = var16;
    var4['item'] = var10;
    var10 = {'justifyContent': 'center', 'alignItems': 'center'};
    var10['height'] = var15;
    var10['width'] = var15;
    var15 = var15 / var14;
    var10['borderRadius'] = var15;
    var4['itemInner'] = var10;
    var10 = {};
    var15 = 0.5;
    var10['opacity'] = var15;
    var4['fadedItem'] = var10;
    var10 = {};
    var10['opacity'] = var11;
    var11 = 9;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MODIFIER_ACTIVE;
    var10['backgroundColor'] = var15;
    var4['activeItem'] = var10;
    var10 = {};
    var10['height'] = var13;
    var10['width'] = var13;
    var13 = var13 / var14;
    var10['borderRadius'] = var13;
    var4['guildIcon'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_ACCENT;
    var10['backgroundColor'] = var11;
    var4['guildItemPlaceholder'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot16 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var12 = var2.category;
            var _closure2_slot0 = var12;
            var6 = var2.onPressCategory;
            var _closure2_slot1 = var6;
            var7 = var2.index;
            var _closure2_slot2 = var7;
            var15 = var2.isActive;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var2 = _closure1_slot16;
            var16 = var2.bind(var4)();
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 10;
            var3 = var2[var3];
            var3 = var5.bind(var4)(var3);
            var8 = var3.AnimateStickers;
            var3 = var8.useSetting;
            var10 = var3.bind(var8)();
            var3 = 11;
            var3 = var2[var3];
            var9 = var5.bind(var4)(var3);
            var8 = var9.shouldAnimateSticker;
            var3 = false;
            var11 = var8.bind(var9)(var10, var3);
            var3 = var12.type;
            var13 = 12;
            var2 = var2[var13];
            var2 = var5.bind(var4)(var2);
            var2 = var2.StickerCategoryTypes;
            var2 = var2.GUILD;
            var20 = null;
            var17 = null;
            if(!(var3 === var2)) { _fun0001_ip = 175; continue _fun0001 }
 156:
            var5 = _closure1_slot6;
            var3 = var5.getGuild;
            var2 = var12.id;
            var17 = var3.bind(var5)(var2);
 175:
            _closure2_slot3 = var17;
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(4);
            var2[0] = var12;
            var2[1] = var17;
            var2[2] = var7;
            var2[3] = var6;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = var1.type;
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var8 = 12;
                    var1 = var1[var8];
                    var4 = undefined;
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.StickerCategoryTypes;
                    var1 = var1.PACK;
                    var1 = var3 !== var1;
                    if(!var1) { _fun0002_ip = 98; continue _fun0002 }
 56:
                    var3 = _closure2_slot0;
                    var5 = var3.type;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var8];
                    var3 = var6.bind(var4)(var3);
                    var3 = var3.StickerCategoryTypes;
                    var3 = var3.GUILD;
                    var1 = var5 !== var3;
 98:
                    if(var1) { _fun0002_ip = 222; continue _fun0002 }
 101:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 13;
                    var1 = var5[var1];
                    var6 = var3.bind(var4)(var1);
                    var5 = var6.track;
                    var1 = _closure1_slot8;
                    var3 = var1.EXPRESSION_PICKER_CATEGORY_SELECTED;
                    var1 = {};
                    var8 = {};
                    var9 = _closure1_slot9;
                    var9 = var9.EXPRESSION_PICKER;
                    var8['page'] = var9;
                    var1['location'] = var8;
                    var7 = _closure1_slot13;
                    var7 = var7.STICKER;
                    var1['tab'] = var7;
                    var7 = _closure2_slot0;
                    var7 = var7.id;
                    var1['sticker_pack_id'] = var7;
                    var8 = _closure2_slot3;
                    var7 = null;
                    var8 = var7 == var8;
                    var7 = undefined;
                    if(var8) { _fun0002_ip = 212; continue _fun0002 }
 203:
                    var8 = _closure2_slot3;
                    var7 = var8.id;
 212:
                    var1['guild_id'] = var7;
                    var1 = var5.bind(var6)(var3, var1);
 222:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 250; continue _fun0002 }
 237:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
 250:
                    return var1;
                }
            };
            var6 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot14;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 14;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var5 = _closure1_slot10;
            var1['androidRippleConfig'] = var5;
            var5 = 'button';
            var1['accessibilityRole'] = var5;
            var5 = var12.name;
            var1['accessibilityLabel'] = var5;
            var5 = var12.stickers;
            var5 = var5.length;
            var19 = 0;
            var5 = var19 === var5;
            var1['disabled'] = var5;
            var5 = var12.stickers;
            var5 = var5.length;
            var7 = var5 > var19;
            var5 = undefined;
            if(!var7) { _fun0001_ip = 321; continue _fun0001 }
 318:
            var5 = var6;
 321:
            var1['onPress'] = var5;
            var5 = var16.item;
            var1['style'] = var5;
            var7 = _closure1_slot14;
            var6 = _closure1_slot5;
            var5 = {};
            var9 = var16.itemInner;
            var8 = new Array(2);
            var8[0] = var9;
            if(var15) { _fun0001_ip = 369; continue _fun0001 }
 361:
            var9 = var16.fadedItem;
            _fun0001_ip = 375; continue _fun0001;
 369:
            var9 = var16.activeItem;
 375:
            var8[1] = var9;
            var5['style'] = var8;
            var8 = var12.icon;
            if(!(var20 == var8)) { _fun0001_ip = 618; continue _fun0001 }
 395:
            var9 = var12.type;
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var13];
            var8 = var10.bind(var4)(var8);
            var8 = var8.StickerCategoryTypes;
            var8 = var8.GUILD;
            if(!(var9 !== var8)) { _fun0001_ip = 530; continue _fun0001 }
 433:
            var10 = _closure1_slot14;
            var9 = _closure1_slot1;
            var18 = _closure1_slot2;
            var8 = 18;
            var8 = var18[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var18 = 'previewSticker';
            var18 = var18 in var12;
            if(!var18) { _fun0001_ip = 480; continue _fun0001 }
 470:
            var18 = var12.previewSticker;
            if(!(var20 == var18)) { _fun0001_ip = 492; continue _fun0001 }
 480:
            var18 = var12.stickers;
            var18 = var18[var19];
            _fun0001_ip = 498; continue _fun0001;
 492:
            var18 = var12.previewSticker;
 498:
            var8['sticker'] = var18;
            if(!var11) { _fun0001_ip = 509; continue _fun0001 }
 506:
            var11 = var15;
 509:
            var8['animated'] = var11;
            var11 = _closure1_slot11;
            var8['size'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            _fun0001_ip = 616; continue _fun0001;
 530:
            var11 = _closure1_slot14;
            var10 = _closure1_slot1;
            var18 = _closure1_slot2;
            var15 = 17;
            var9 = var18[var15];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['guild'] = var17;
            var17 = var16.guildItemPlaceholder;
            var9['loadingStyle'] = var17;
            var17 = _closure1_slot0;
            var15 = var18[var15];
            var15 = var17.bind(var4)(var15);
            var15 = var15.GuildIconSizes;
            var15 = var15.XSMALL;
            var9['size'] = var15;
            var15 = var16.guildIcon;
            var9['style'] = var15;
            var8 = var11.bind(var4)(var10, var9);
 616:
            _fun0001_ip = 731; continue _fun0001;
 618:
            var11 = _closure1_slot14;
            var10 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 15;
            var9 = var15[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var16 = var16.guildIcon;
            var9['style'] = var16;
            var16 = var12.type;
            var14 = _closure1_slot0;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.StickerCategoryTypes;
            var13 = var13.PACK;
            var13 = var16 === var13;
            var9['disableColor'] = var13;
            var13 = 16;
            var13 = var15[var13];
            var14 = var14.bind(var4)(var13);
            var13 = var14.makeSource;
            var12 = var12.icon;
            var12 = var13.bind(var14)(var12);
            var9['source'] = var12;
            var8 = var11.bind(var4)(var10, var9);
 731:
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stickers/native/StickerPickerCategories.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var18 = var2.categories;
            var _closure2_slot0 = var18;
            var15 = var2.categoryIndex;
            var _closure2_slot1 = var15;
            var5 = var2.style;
            var2 = _closure1_slot16;
            var4 = undefined;
            var14 = var2.bind(var4)();
            var9 = _closure1_slot4;
            var2 = var9.useRef;
            var2 = var2.bind(var9)(var4);
            var _closure2_slot2 = var2;
            var2 = var9.useRef;
            var8 = null;
            var17 = var2.bind(var9)(var8);
            var _closure2_slot3 = var17;
            var6 = var9.useMemo;
            var3 = new Array(1);
            var3[0] = var18;
            var2 = function() {
                var1 = _closure2_slot0;
                var2 = var1.length;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var16 = var6.bind(var9)(var2, var3);
            var2 = var9.useState;
            var2 = var2.bind(var9)(var8);
            var11 = _closure1_slot3;
            var10 = 2;
            var2 = var11.bind(var4)(var2, var10);
            var7 = 0;
            var6 = var2[var7];
            var _closure2_slot4 = var6;
            var3 = 1;
            var2 = var2[var3];
            var _closure2_slot5 = var2;
            var2 = var9.useState;
            var13 = false;
            var2 = var2.bind(var9)(var13);
            var2 = var11.bind(var4)(var2, var10);
            var7 = var2[var7];
            var _closure2_slot6 = var7;
            var2 = var2[var3];
            var _closure2_slot7 = var2;
            var3 = _closure1_slot7;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.setPackToScrollTo;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var _closure2_slot8 = var3;
            var11 = var9.useEffect;
            var10 = new Array(1);
            var10[0] = var18;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure2_slot0;
                    var3 = var4.findIndex;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 12;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.StickerCategoryTypes;
                        var1 = var1.PACK;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = 0;
                    if(!(var3 >= var2)) { _fun0004_ip = 42; continue _fun0004 }
 31:
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
 42:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var11.bind(var9)(var2, var10);
            var11 = var9.useEffect;
            var10 = new Array(1);
            var10[0] = var15;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot2;
                    var1 = var1.current;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0005_ip = 132; continue _fun0005 }
 18:
                    var1 = _closure2_slot3;
                    var1 = var1.current;
                    if(!(var2 != var1)) { _fun0005_ip = 132; continue _fun0005 }
 31:
                    var2 = _closure2_slot1;
                    var1 = _closure1_slot12;
                    var3 = var2 * var1;
                    var1 = _closure2_slot2;
                    var1 = var1.current;
                    var1 = var1.end;
                    var1 = var3 > var1;
                    if(var1) { _fun0005_ip = 85; continue _fun0005 }
 67:
                    var2 = _closure2_slot2;
                    var2 = var2.current;
                    var2 = var2.start;
                    var1 = var3 < var2;
 85:
                    if(!var1) { _fun0005_ip = 132; continue _fun0005 }
 88:
                    var1 = _closure2_slot3;
                    var3 = var1.current;
                    var2 = var3.scrollToLocation;
                    var1 = {'section': 0, 'item': null, 'animated': false};
                    var4 = _closure2_slot1;
                    var1['item'] = var4;
                    var1 = var2.bind(var3)(var1);
 132:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var11.bind(var9)(var2, var10);
            var11 = var9.useCallback;
            var10 = new Array(2);
            var10[0] = var6;
            var10[1] = var7;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot4;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0006_ip = 29; continue _fun0006 }
 16:
                    var3 = _closure2_slot2;
                    var3 = var3.current;
                    var2 = var4 != var3;
 29:
                    if(!var2) { _fun0006_ip = 93; continue _fun0006 }
 32:
                    var3 = _closure2_slot7;
                    var4 = _closure2_slot4;
                    var2 = _closure1_slot12;
                    var4 = var4 * var2;
                    var2 = _closure2_slot2;
                    var2 = var2.current;
                    var2 = var2.end;
                    var6 = _closure2_slot6;
                    var1 = 0;
                    if(var6) { _fun0006_ip = 78; continue _fun0006 }
 74:
                    var1 = _closure1_slot12;
 78:
                    var1 = var2 - var1;
                    var2 = undefined;
                    var1 = var4 > var1;
                    var1 = var3.bind(var2)(var1);
 93:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var11.bind(var9)(var2, var10);
            var _closure2_slot9 = var2;
            var19 = var9.useCallback;
            var11 = new Array(1);
            var11[0] = var2;
            var10 = function(arg1) {
                var4 = arg1;
                var3 = _closure2_slot2;
                var2 = {};
                var5 = var4.nativeEvent;
                var5 = var5.contentOffset;
                var5 = var5.x;
                var2['start'] = var5;
                var5 = var4.nativeEvent;
                var5 = var5.contentOffset;
                var5 = var5.x;
                var4 = var4.nativeEvent;
                var4 = var4.layoutMeasurement;
                var4 = var4.width;
                var4 = var5 + var4;
                var2['end'] = var4;
                var3['current'] = var2;
                var2 = _closure2_slot9;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var19 = var19.bind(var9)(var10, var11);
            var11 = var9.useCallback;
            var10 = new Array(2);
            var10[0] = var18;
            var10[1] = var3;
            var3 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = arg1;
                var2 = var3[var2];
                var3 = var2.id;
                var2 = _closure2_slot8;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 19;
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.triggerHapticFeedback;
                var5 = _closure1_slot1;
                var2 = 20;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2.IMPACT_LIGHT;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var11 = var11.bind(var9)(var3, var10);
            var _closure2_slot10 = var11;
            var20 = var9.useCallback;
            var10 = new Array(2);
            var10[0] = var6;
            var10[1] = var11;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 39; continue _fun0007 }
 13:
                    var4 = _closure2_slot10;
                    var2 = _closure2_slot4;
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var2 = _closure2_slot7;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
 39:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var20.bind(var9)(var3, var10);
            var20 = var9.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = _closure2_slot2;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0008_ip = 69; continue _fun0008 }
 18:
                    var3 = _closure2_slot2;
                    var2 = {};
                    var4 = 0;
                    var2['start'] = var4;
                    var4 = arg1;
                    var4 = var4.nativeEvent;
                    var4 = var4.layout;
                    var4 = var4.width;
                    var2['end'] = var4;
                    var3['current'] = var2;
                    var2 = _closure2_slot9;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 69:
                    var1 = undefined;
                    return var1;
                }
            };
            var20 = var20.bind(var9)(var2, var3);
            var3 = var9.useCallback;
            var2 = new Array(3);
            var2[0] = var18;
            var2[1] = var15;
            var2[2] = var11;
            var1 = function(arg1, arg2) {
                var6 = arg2;
                var4 = _closure1_slot14;
                var3 = _closure1_slot17;
                var2 = {};
                var5 = _closure2_slot0;
                var5 = var5[var6];
                var2['category'] = var5;
                var2['index'] = var6;
                var5 = _closure2_slot1;
                var5 = var6 === var5;
                var2['isActive'] = var5;
                var1 = _closure2_slot10;
                var2['onPressCategory'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var15 = var3.bind(var9)(var1, var2);
            var9 = _closure1_slot1;
            var21 = _closure1_slot2;
            var1 = 21;
            var1 = var21[var1];
            var1 = var9.bind(var4)(var1);
            var18 = var1.bind(var4)();
            var3 = _closure1_slot15;
            var1 = 22;
            var1 = var21[var1];
            var2 = var9.bind(var4)(var1);
            var1 = {};
            var11 = 'expression-footer';
            var1['portalHostName'] = var11;
            var1['style'] = var5;
            var11 = _closure1_slot14;
            var5 = 23;
            var5 = var21[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {'estimatedListSize': 'windowSize', 'horizontal': true, 'itemSize': null, 'keyboardShouldPersistTaps': 'always'};
            var21 = _closure1_slot12;
            var5['itemSize'] = var21;
            var21 = _closure1_slot13;
            var21 = var21.STICKER;
            var5['listId'] = var21;
            var5['onLayout'] = var20;
            var5['onScroll'] = var19;
            var5['placeholderConfig'] = var18;
            var5['ref'] = var17;
            var17 = 'callbacks';
            var5['scrollReporting'] = var17;
            var5['sections'] = var16;
            var5['renderItem'] = var15;
            var5['showsHorizontalScrollIndicator'] = var13;
            var13 = var14.list;
            var5['style'] = var13;
            var9 = var11.bind(var4)(var9, var5);
            var5 = new Array(2);
            var5[0] = var9;
            var6 = var8 != var6;
            if(!var6) { _fun0003_ip = 606; continue _fun0003 }
 603:
            var6 = var7;
 606:
            if(!var6) { _fun0003_ip = 812; continue _fun0003 }
 612:
            var9 = _closure1_slot14;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var7 = 14;
            var7 = var16[var7];
            var7 = var15.bind(var4)(var7);
            var8 = var7.PressableOpacity;
            var7 = {};
            var7['onPress'] = var10;
            var10 = 'button';
            var7['accessibilityRole'] = var10;
            var10 = 24;
            var11 = var16[var10];
            var11 = var15.bind(var4)(var11);
            var13 = var11.intl;
            var11 = var13.string;
            var10 = var16[var10];
            var10 = var15.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.rzCcjI;
            var10 = var11.bind(var13)(var10);
            var7['accessibilityLabel'] = var10;
            var11 = _closure1_slot5;
            var10 = {};
            var15 = var14.item;
            var13 = new Array(2);
            var13[0] = var15;
            var15 = var14.fadedItem;
            var13[1] = var15;
            var10['style'] = var13;
            var15 = _closure1_slot1;
            var12 = 15;
            var12 = var16[var12];
            var13 = var15.bind(var4)(var12);
            var12 = {};
            var14 = var14.guildIcon;
            var12['style'] = var14;
            var14 = 25;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var12['source'] = var14;
            var12 = var9.bind(var4)(var13, var12);
            var10['children'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 812:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();