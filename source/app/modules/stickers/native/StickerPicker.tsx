// app/modules/stickers/native/StickerPicker.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var13 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
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
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var7 = var6[var12];
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot5 = var8;
    var4 = var4.ActivityIndicator;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.STICKER_SEARCH_HEADER_HEIGHT;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot9 = var8;
    var8 = var4.AnalyticsPages;
    var _closure1_slot10 = var8;
    var8 = var4.AnalyticsSections;
    var _closure1_slot11 = var8;
    var8 = var4.UpsellTypes;
    var _closure1_slot12 = var8;
    var4 = var4.ChatInputComponentViewedTypes;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot14 = var8;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var12;
    var4['container'] = var10;
    var10 = {};
    var10['flex'] = var12;
    var4['list'] = var10;
    var10 = {};
    var12 = 9;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var10['paddingVertical'] = var12;
    var4['header'] = var10;
    var10 = {'position': 'absolute', 'bottom': 100};
    var4['popoutContainer'] = var10;
    var10 = {'alignItems': 'center', 'justifyContent': 'center', 'flex': 1};
    var4['loadingIndicator'] = var10;
    var10 = {'marginTop': null, 'alignItems': 'center', 'justifyContent': 'center', 'flex': 1};
    var10['marginTop'] = var11;
    var4['emptyState'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot16 = var4;
    var4 = var7.memo;
    var2 = function StickerPicker(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var22 = var1.channel;
            var _closure2_slot0 = var22;
            var23 = var1.paddingTop;
            var7 = var1.onPressSticker;
            var _closure2_slot1 = var7;
            var21 = var1.stickerFormats;
            var19 = var1.inActionSheet;
            var17 = var1.inPortalKeyboard;
            var1 = _closure1_slot16;
            var4 = undefined;
            var18 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 11;
            var1 = var6[var1];
            var5 = var2.bind(var4)(var1);
            var1 = var5.useFetchStickerPacks;
            var1 = var1.bind(var5)();
            var1 = 12;
            var1 = var6[var1];
            var5 = var2.bind(var4)(var1);
            var1 = var5.useStickerCategories;
            var14 = var1.bind(var5)(var22);
            var1 = 13;
            var1 = var6[var1];
            var10 = var2.bind(var4)(var1);
            var8 = var10.useStateFromStores;
            var1 = _closure1_slot8;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var1 = _closure1_slot8;
                var1 = var1.hasLoadedStickerPacks;
                return var1;
            };
            var10 = var8.bind(var10)(var5, var1);
            var16 = _closure1_slot4;
            var1 = var16.useState;
            var15 = 0;
            var1 = var1.bind(var16)(var15);
            var25 = _closure1_slot3;
            var20 = 2;
            var1 = var25.bind(var4)(var1, var20);
            var13 = var1[var15];
            var24 = 1;
            var26 = var1[var24];
            var _closure2_slot2 = var26;
            var12 = _closure1_slot1;
            var1 = 14;
            var5 = var6[var1];
            var8 = var12.bind(var4)(var5);
            var5 = 15;
            var5 = var6[var5];
            var5 = var12.bind(var4)(var5);
            var5 = var5.STICKER_PICKER;
            var5 = var8.bind(var4)(var5);
            var5 = var5.analyticsLocations;
            var _closure2_slot3 = var5;
            var8 = var16.useState;
            var11 = null;
            var8 = var8.bind(var16)(var11);
            var8 = var25.bind(var4)(var8, var20);
            var20 = var8[var15];
            var8 = var8[var24];
            var _closure2_slot4 = var8;
            var8 = 16;
            var8 = var6[var8];
            var12 = var12.bind(var4)(var8);
            var8 = {};
            var30 = true;
            var8['hasCategories'] = var30;
            var8 = var12.bind(var4)(var8);
            var12 = var8.safeAreaStyle;
            var24 = var8.safeAreaBottomKeyboardAware;
            var27 = var16.useCallback;
            var25 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = arg1;
                    var1 = '';
                    if(!(var1 !== var5)) { _fun0002_ip = 61; continue _fun0002 }
 11:
                    var3 = _closure2_slot4;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var1);
                    var1 = var4.searchAllStickers;
                    var1 = var1.bind(var4)(var5);
                    var1 = var3.bind(var2)(var1);
                    _fun0002_ip = 104; continue _fun0002;
 61:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.batchUpdates;
                    var1 = function() {
                        var4 = _closure2_slot2;
                        var1 = undefined;
                        var3 = 0;
                        var3 = var4.bind(var1)(var3);
                        var3 = _closure2_slot4;
                        var2 = null;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
 104:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = new Array(0);
            var32 = var27.bind(var16)(var25, var8);
            var27 = var16.useEffect;
            var8 = var22.id;
            var25 = new Array(2);
            var25[0] = var8;
            var8 = var22.guild_id;
            var25[1] = var8;
            var8 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot9;
                var3 = var2.CHAT_INPUT_COMPONENT_VIEWED;
                var2 = {};
                var6 = _closure1_slot13;
                var6 = var6.STICKER;
                var2['type'] = var6;
                var6 = _closure2_slot0;
                var7 = var6.id;
                var2['channel_id'] = var7;
                var6 = var6.guild_id;
                var2['guild_id'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var8 = var27.bind(var16)(var8, var25);
            var25 = var16.useCallback;
            var8 = new Array(3);
            var8[0] = var22;
            var8[1] = var7;
            var8[2] = var5;
            var7 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = arg1;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var8 = 19;
                    var2 = var4[var8];
                    var1 = undefined;
                    var11 = var6.bind(var1)(var2);
                    var10 = var11.getStickerSendability;
                    var5 = _closure1_slot7;
                    var2 = var5.getCurrentUser;
                    var9 = var2.bind(var5)();
                    var5 = _closure2_slot0;
                    var5 = var10.bind(var11)(var3, var9, var5);
                    var4 = var4[var8];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.StickerSendability;
                    var4 = var4.SENDABLE;
                    if(!(var5 !== var4)) { _fun0003_ip = 465; continue _fun0003 }
 89:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.StickerSendability;
                    var4 = var4.SENDABLE_WITH_PREMIUM;
                    if(!(var5 === var4)) { _fun0003_ip = 474; continue _fun0003 }
 125:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var6 = 20;
                    var4 = var4[var6];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.isStandardSticker;
                    var4 = var4.bind(var5)(var3);
                    if(var4) { _fun0003_ip = 321; continue _fun0003 }
 162:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.isGuildSticker;
                    var4 = var4.bind(var5)(var3);
                    if(!var4) { _fun0003_ip = 474; continue _fun0003 }
 196:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 22;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.handleShowUpsellAlert;
                    var4 = {};
                    var8 = _closure1_slot12;
                    var8 = var8.GLOBAL_STICKER;
                    var4['initialUpsellKey'] = var8;
                    var8 = {};
                    var9 = _closure2_slot0;
                    var10 = var9.guild_id;
                    var9 = null;
                    if(!(var9 == var10)) { _fun0003_ip = 268; continue _fun0003 }
 256:
                    var9 = _closure1_slot10;
                    var9 = var9.DM_CHANNEL;
                    _fun0003_ip = 278; continue _fun0003;
 268:
                    var10 = _closure1_slot10;
                    var9 = var10.GUILD_CHANNEL;
 278:
                    var8['page'] = var9;
                    var9 = _closure1_slot11;
                    var9 = var9.STICKER_PICKER_UPSELL;
                    var8['section'] = var9;
                    var4['analyticsLocation'] = var8;
                    var8 = _closure2_slot3;
                    var4['analyticsLocations'] = var8;
                    var4 = var5.bind(var6)(var4);
                    _fun0003_ip = 474; continue _fun0003;
 321:
                    var6 = _closure1_slot8;
                    var5 = var6.getStickerPack;
                    var4 = var3.pack_id;
                    var6 = var5.bind(var6)(var4);
                    var11 = null;
                    if(!(var11 != var6)) { _fun0003_ip = 463; continue _fun0003 }
 348:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var9 = 21;
                    var4 = var4[var9];
                    var5 = var5.bind(var1)(var4);
                    var4 = {};
                    var8 = {};
                    var10 = _closure2_slot0;
                    var10 = var10.guild_id;
                    if(!(var11 == var10)) { _fun0003_ip = 397; continue _fun0003 }
 385:
                    var10 = _closure1_slot10;
                    var10 = var10.DM_CHANNEL;
                    _fun0003_ip = 407; continue _fun0003;
 397:
                    var11 = _closure1_slot10;
                    var10 = var11.GUILD_CHANNEL;
 407:
                    var8['page'] = var10;
                    var4['analyticsLocation'] = var8;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var9];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.AnalyticsPopoutType;
                    var7 = var7.STICKER_PACK_DETAIL;
                    var4['analyticsPopoutType'] = var7;
                    var4['stickerPack'] = var6;
                    var4 = var5.bind(var1)(var4);
                    _fun0003_ip = 474; continue _fun0003;
 463:
                    return var1;
 465:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)(var3);
 474:
                    return var1;
                }
            };
            var25 = var25.bind(var16)(var7, var8);
            var8 = var16.useCallback;
            var7 = new Array(1);
            var7[0] = var22;
            var3 = function() {
                var6 = _closure2_slot0;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot9;
                var3 = var2.CHAT_INPUT_COMPONENT_VIEWED;
                var2 = {};
                var7 = _closure1_slot13;
                var7 = var7.STICKER_SEARCH;
                var2['type'] = var7;
                var7 = var6.id;
                var2['channel_id'] = var7;
                var6 = var6.guild_id;
                var2['guild_id'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var31 = var8.bind(var16)(var3, var7);
            var3 = _closure1_slot14;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot15;
            var6 = _closure1_slot5;
            var5 = {};
            var8 = var18.container;
            var5['style'] = var8;
            var8 = var14.length;
            if(!(var15 !== var8)) { _fun0001_ip = 625; continue _fun0001 }
 485:
            var27 = _closure1_slot14;
            var16 = _closure1_slot5;
            var8 = {};
            var28 = var18.header;
            var8['style'] = var28;
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var28 = 23;
            var28 = var37[var28];
            var28 = var36.bind(var4)(var28);
            var29 = var28.SearchField;
            var28 = {};
            var33 = 'md';
            var28['size'] = var33;
            var33 = 24;
            var34 = var37[var33];
            var34 = var36.bind(var4)(var34);
            var35 = var34.intl;
            var34 = var35.string;
            var33 = var37[var33];
            var33 = var36.bind(var4)(var33);
            var33 = var33.t;
            var33 = var33.dt5h1N;
            var33 = var34.bind(var35)(var33);
            var28['placeholder'] = var33;
            var28['onChange'] = var32;
            var28['onFocus'] = var31;
            var28['isRound'] = var30;
            var28 = var27.bind(var4)(var29, var28);
            var8['children'] = var28;
            var11 = var27.bind(var4)(var16, var8);
 625:
            var8 = new Array(3);
            var8[0] = var11;
            if(var10) { _fun0001_ip = 679; continue _fun0001 }
 636:
            var16 = _closure1_slot14;
            var11 = _closure1_slot6;
            var10 = {'animating': true, 'size': 'large'};
            var27 = var18.loadingIndicator;
            var10['style'] = var27;
            var10 = var16.bind(var4)(var11, var10);
            _fun0001_ip = 827; continue _fun0001;
 679:
            var11 = var14.length;
            if(!(var15 !== var11)) { _fun0001_ip = 766; continue _fun0001 }
 688:
            var16 = _closure1_slot14;
            var15 = _closure1_slot1;
            var27 = _closure1_slot2;
            var11 = 26;
            var11 = var27[var11];
            var15 = var15.bind(var4)(var11);
            var11 = {};
            var11['setCategoryIndex'] = var26;
            var11['onPressSticker'] = var25;
            var11['insetBottom'] = var24;
            var11['insetTop'] = var23;
            var11['channel'] = var22;
            var11['stickerFormats'] = var21;
            var11['searchResults'] = var20;
            var11['inActionSheet'] = var19;
            var11['inPortalKeyboard'] = var17;
            var11 = var16.bind(var4)(var15, var11);
            _fun0001_ip = 824; continue _fun0001;
 766:
            var17 = _closure1_slot14;
            var16 = _closure1_slot5;
            var15 = {};
            var18 = var18.emptyState;
            var15['style'] = var18;
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var18 = 25;
            var18 = var20[var18];
            var19 = var19.bind(var4)(var18);
            var18 = {};
            var18 = var17.bind(var4)(var19, var18);
            var15['children'] = var18;
            var11 = var17.bind(var4)(var16, var15);
 824:
            var10 = var11;
 827:
            var8[1] = var10;
            var11 = _closure1_slot14;
            var10 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 27;
            var9 = var15[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['categories'] = var14;
            var9['categoryIndex'] = var13;
            var9['style'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stickers/native/StickerPicker.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();