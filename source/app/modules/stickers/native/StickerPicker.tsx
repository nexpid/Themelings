// app/modules/stickers/native/StickerPicker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportAll;
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
    var12 = 9;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var10['paddingVertical'] = var12;
    var4['header'] = var10;
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
case 0:
            var1 = arg1;
            var29 = var1.bottomSheetRef;
            var28 = var1.bottomSheetIndex;
            var21 = var1.channel;
            var _closure2_slot0 = var21;
            var22 = var1.paddingTop;
            var7 = var1.onPressSticker;
            var _closure2_slot1 = var7;
            var20 = var1.stickerFormats;
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
            var14 = var1.bind(var5)(var21);
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
            var24 = _closure1_slot3;
            var19 = 2;
            var1 = var24.bind(var4)(var1, var19);
            var13 = var1[var15];
            var23 = 1;
            var27 = var1[var23];
            var _closure2_slot2 = var27;
            var8 = _closure1_slot1;
            var1 = 14;
            var5 = var6[var1];
            var11 = var8.bind(var4)(var5);
            var5 = 15;
            var5 = var6[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.STICKER_PICKER;
            var5 = var11.bind(var4)(var5);
            var5 = var5.analyticsLocations;
            var _closure2_slot3 = var5;
            var12 = var16.useState;
            var11 = null;
            var12 = var12.bind(var16)(var11);
            var12 = var24.bind(var4)(var12, var19);
            var19 = var12[var15];
            var12 = var12[var23];
            var _closure2_slot4 = var12;
            var12 = 16;
            var12 = var6[var12];
            var23 = var8.bind(var4)(var12);
            var12 = {};
            var33 = true;
            var12['hasCategories'] = var33;
            var23 = var23.bind(var4)(var12);
            var12 = var23.safeAreaStyle;
            var23 = var23.safeAreaBottomKeyboardAware;
            var26 = var16.useCallback;
            var25 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = arg1;
                    var1 = '';
                    if(!(var1 !== var5)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
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
                    _fun0002_ip = 4; continue _fun0002;
case 2:
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
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var24 = new Array(0);
            var35 = var26.bind(var16)(var25, var24);
            var26 = var16.useEffect;
            var24 = var21.id;
            var25 = new Array(2);
            var25[0] = var24;
            var24 = var21.guild_id;
            var25[1] = var24;
            var24 = function() {
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
            var24 = var26.bind(var16)(var24, var25);
            var25 = var16.useCallback;
            var24 = new Array(3);
            var24[0] = var21;
            var24[1] = var7;
            var24[2] = var5;
            var7 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
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
                    if(!(var5 !== var4)) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.StickerSendability;
                    var4 = var4.SENDABLE_WITH_PREMIUM;
                    if(!(var5 === var4)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var6 = 20;
                    var4 = var4[var6];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.isStandardSticker;
                    var4 = var4.bind(var5)(var3);
                    if(var4) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.isGuildSticker;
                    var4 = var4.bind(var5)(var3);
                    if(!var4) { _fun0003_ip = 7; continue _fun0003 }
case 11:
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
                    if(!(var9 == var10)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var9 = _closure1_slot10;
                    var9 = var9.DM_CHANNEL;
                    _fun0003_ip = 14; continue _fun0003;
case 12:
                    var10 = _closure1_slot10;
                    var9 = var10.GUILD_CHANNEL;
case 14:
                    var8['page'] = var9;
                    var9 = _closure1_slot11;
                    var9 = var9.STICKER_PICKER_UPSELL;
                    var8['section'] = var9;
                    var4['analyticsLocation'] = var8;
                    var8 = _closure2_slot3;
                    var4['analyticsLocations'] = var8;
                    var4 = var5.bind(var6)(var4);
                    _fun0003_ip = 7; continue _fun0003;
case 9:
                    var6 = _closure1_slot8;
                    var5 = var6.getStickerPack;
                    var4 = var3.pack_id;
                    var6 = var5.bind(var6)(var4);
                    var11 = null;
                    if(!(var11 != var6)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var9 = 21;
                    var4 = var4[var9];
                    var5 = var5.bind(var1)(var4);
                    var4 = {};
                    var8 = {};
                    var10 = _closure2_slot0;
                    var10 = var10.guild_id;
                    if(!(var11 == var10)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var10 = _closure1_slot10;
                    var10 = var10.DM_CHANNEL;
                    _fun0003_ip = 19; continue _fun0003;
case 17:
                    var11 = _closure1_slot10;
                    var10 = var11.GUILD_CHANNEL;
case 19:
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
                    _fun0003_ip = 7; continue _fun0003;
case 15:
                    return var1;
case 5:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)(var3);
case 7:
                    return var1;
                }
            };
            var24 = var25.bind(var16)(var7, var24);
            var26 = var16.useCallback;
            var25 = new Array(1);
            var25[0] = var21;
            var7 = function() {
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
            var34 = var26.bind(var16)(var7, var25);
            var7 = 23;
            var7 = var6[var7];
            var26 = var8.bind(var4)(var7);
            var25 = var26.useExperiment;
            var8 = {};
            var7 = 'StickerPicker';
            var8['location'] = var7;
            var7 = {};
            var30 = false;
            var7['autoTrackExposure'] = var30;
            var7 = var25.bind(var26)(var8, var7);
            var26 = var7.tidaWebformEnabled;
            var8 = var16.useCallback;
            var7 = new Array(1);
            var7[0] = var21;
            var3 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.showStickerDetailActionSheet;
                var2 = {};
                var5 = arg1;
                var2['renderableSticker'] = var5;
                var5 = _closure2_slot0;
                var2['channel'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var25 = var8.bind(var16)(var3, var7);
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
            if(!(var15 !== var8)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var30 = _closure1_slot14;
            var16 = _closure1_slot5;
            var8 = {};
            var31 = var18.header;
            var8['style'] = var31;
            var39 = _closure1_slot0;
            var40 = _closure1_slot2;
            var31 = 25;
            var31 = var40[var31];
            var31 = var39.bind(var4)(var31);
            var32 = var31.SearchField;
            var31 = {};
            var36 = 'md';
            var31['size'] = var36;
            var36 = 26;
            var37 = var40[var36];
            var37 = var39.bind(var4)(var37);
            var38 = var37.intl;
            var37 = var38.string;
            var36 = var40[var36];
            var36 = var39.bind(var4)(var36);
            var36 = var36.t;
            var36 = var36.dt5h1C;
            var36 = var37.bind(var38)(var36);
            var31['placeholder'] = var36;
            var31['onChange'] = var35;
            var31['onFocus'] = var34;
            var31['isRound'] = var33;
            var31 = var30.bind(var4)(var32, var31);
            var8['children'] = var31;
            var11 = var30.bind(var4)(var16, var8);
case 20:
            var8 = new Array(3);
            var8[0] = var11;
            if(var10) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var16 = _closure1_slot14;
            var11 = _closure1_slot6;
            var10 = {'animating': true, 'size': 'large'};
            var30 = var18.loadingIndicator;
            var10['style'] = var30;
            var10 = var16.bind(var4)(var11, var10);
            _fun0001_ip = 24; continue _fun0001;
case 22:
            var11 = var14.length;
            if(!(var15 !== var11)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var16 = _closure1_slot14;
            var15 = _closure1_slot1;
            var30 = _closure1_slot2;
            var11 = 28;
            var11 = var30[var11];
            var15 = var15.bind(var4)(var11);
            var11 = {};
            var11['bottomSheetRef'] = var29;
            var11['bottomSheetIndex'] = var28;
            var11['setCategoryIndex'] = var27;
            var11['onPressSticker'] = var24;
            var24 = undefined;
            if(!var26) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var24 = var25;
case 27:
            var11['onLongPressStickerDetail'] = var24;
            var11['insetBottom'] = var23;
            var11['insetTop'] = var22;
            var11['channel'] = var21;
            var11['stickerFormats'] = var20;
            var11['searchResults'] = var19;
            var11['inPortalKeyboard'] = var17;
            var11 = var16.bind(var4)(var15, var11);
            _fun0001_ip = 29; continue _fun0001;
case 25:
            var17 = _closure1_slot14;
            var16 = _closure1_slot5;
            var15 = {};
            var18 = var18.emptyState;
            var15['style'] = var18;
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var18 = 27;
            var18 = var20[var18];
            var19 = var19.bind(var4)(var18);
            var18 = {};
            var18 = var17.bind(var4)(var19, var18);
            var15['children'] = var18;
            var11 = var17.bind(var4)(var16, var15);
case 29:
            var10 = var11;
case 24:
            var8[1] = var10;
            var11 = _closure1_slot14;
            var10 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 29;
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
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stickers/native/StickerPicker.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();