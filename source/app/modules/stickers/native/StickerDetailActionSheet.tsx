// app/modules/stickers/native/StickerDetailActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var12 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
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
        var13 = 0;
        var4 = var6[var13];
        var1 = undefined;
        var4 = var12.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 1;
        var4 = var6[var4];
        var4 = var12.bind(var1)(var4);
        var _closure1_slot4 = var4;
        var4 = 2;
        var7 = var6[var4];
        var4 = metroImportAll;
        var7 = var4.bind(var1)(var7);
        var _closure1_slot5 = var7;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.View;
        var _closure1_slot6 = var8;
        var8 = var4.ActivityIndicator;
        var _closure1_slot7 = var8;
        var4 = var4.Pressable;
        var _closure1_slot8 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var12.bind(var1)(var4);
        var _closure1_slot9 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var12.bind(var1)(var4);
        var _closure1_slot10 = var4;
        var4 = 6;
        var4 = var6[var4];
        var4 = var12.bind(var1)(var4);
        var _closure1_slot11 = var4;
        var4 = 7;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.PADDING_HORIZONTAL;
        var _closure1_slot12 = var8;
        var8 = var4.MIN_MARGIN;
        var _closure1_slot13 = var8;
        var4 = var4.STICKER_SIZE;
        var _closure1_slot14 = var4;
        var4 = 8;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.AnalyticsPages;
        var _closure1_slot15 = var8;
        var8 = var4.AnalyticsSections;
        var _closure1_slot16 = var8;
        var8 = var4.AnalyticEvents;
        var _closure1_slot17 = var8;
        var8 = var4.GuildFeatures;
        var _closure1_slot18 = var8;
        var4 = var4.UserSettingsSections;
        var _closure1_slot19 = var4;
        var4 = 9;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.ACTION_SHEET_MAX_WIDTH;
        var _closure1_slot20 = var4;
        var4 = 10;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.jsx;
        var _closure1_slot21 = var8;
        var8 = var4.Fragment;
        var _closure1_slot22 = var8;
        var4 = var4.jsxs;
        var _closure1_slot23 = var4;
        var4 = 11;
        var4 = var6[var4];
        var9 = var5.bind(var1)(var4);
        var8 = var9.createStyles;
        var4 = {};
        var10 = {};
        var14 = 16;
        var10['padding'] = var14;
        var11 = 12;
        var11 = var6[var11];
        var15 = var5.bind(var1)(var11);
        var11 = var15.isAndroid;
        var15 = var11.bind(var15)();
        var11 = 0;
        if(!var15) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var11 = var14;
case 2:
        var10['paddingBottom'] = var11;
        var4['content'] = var10;
        var10 = {'lineHeight': 18, 'marginTop': 4};
        var4['description'] = var10;
        var10 = {'flexDirection': 'row', 'alignItems': 'center'};
        var4['guildEmojiTopContainer'] = var10;
        var10 = {};
        var11 = 13;
        var14 = var6[var11];
        var14 = var12.bind(var1)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_12;
        var10['marginTop'] = var14;
        var4['buttonContainer'] = var10;
        var10 = {'paddingLeft': 16, 'flex': 1};
        var4['guildEmojiDescription'] = var10;
        var10 = {};
        var10['marginLeft'] = var13;
        var13 = var6[var11];
        var13 = var12.bind(var1)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_16;
        var10['marginTop'] = var13;
        var13 = var6[var11];
        var13 = var12.bind(var1)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_16;
        var10['marginBottom'] = var13;
        var13 = var6[var11];
        var13 = var12.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.BORDER_SUBTLE;
        var10['backgroundColor'] = var13;
        var4['divider'] = var10;
        var10 = {'height': 32, 'width': 32, 'justifyContent': 'center', 'alignItems': 'center'};
        var4['moreMenuIcon'] = var10;
        var10 = {};
        var13 = var6[var11];
        var13 = var12.bind(var1)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_4;
        var10['paddingTop'] = var13;
        var4['favoriteContainer'] = var10;
        var10 = {'height': 32, 'width': 32};
        var4['starIcon'] = var10;
        var10 = {};
        var13 = var6[var11];
        var13 = var12.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.ICON_FEEDBACK_WARNING;
        var10['tintColor'] = var13;
        var4['starIconSelected'] = var10;
        var10 = {};
        var11 = var6[var11];
        var11 = var12.bind(var1)(var11);
        var11 = var11.colors;
        var11 = var11.INTERACTIVE_TEXT_DEFAULT;
        var10['tintColor'] = var11;
        var4['starIconUnselected'] = var10;
        var4 = var8.bind(var9)(var4);
        var _closure1_slot24 = var4;
        var4 = function StandardStickerDetail(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var3 = var2.sticker;
                var4 = var2.channel;
                var _closure2_slot0 = var4;
                var2 = var2.chatInputRef;
                var _closure2_slot1 = var2;
                var6 = _closure1_slot24;
                var5 = undefined;
                var6 = var6.bind(var5)();
                var _closure2_slot2 = var6;
                var9 = var3.pack_id;
                var _closure2_slot3 = var9;
                var3 = var3.name;
                var _closure2_slot4 = var3;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var10 = 22;
                var3 = var8[var10];
                var13 = var7.bind(var5)(var3);
                var12 = var13.useStateFromStores;
                var6 = _closure1_slot11;
                var11 = new Array(1);
                var11[0] = var6;
                var3 = function() {
                    var3 = _closure1_slot11;
                    var2 = var3.getStickerPack;
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var12.bind(var13)(var11, var3);
                var _closure2_slot5 = var3;
                var10 = var8[var10];
                var12 = var7.bind(var5)(var10);
                var11 = var12.useStateFromStores;
                var10 = new Array(1);
                var10[0] = var6;
                var6 = function() {
                    var3 = _closure1_slot11;
                    var2 = var3.isPremiumPack;
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var6 = var11.bind(var12)(var10, var6);
                var _closure2_slot6 = var6;
                var6 = 14;
                var6 = var8[var6];
                var7 = var7.bind(var5)(var6);
                var6 = var7.useFetchStickerPack;
                var6 = var6.bind(var7)(var9);
                var7 = _closure1_slot1;
                var6 = 23;
                var6 = var8[var6];
                var6 = var7.bind(var5)(var6);
                var6 = var6.bind(var5)();
                var7 = var6.width;
                var8 = _closure1_slot12;
                var6 = 2;
                var6 = var6 * var8;
                var6 = var7 - var6;
                var _closure2_slot7 = var6;
                var9 = global;
                var8 = var9.Math;
                var7 = var8.floor;
                var12 = var9.Math;
                var11 = var12.min;
                var9 = _closure1_slot20;
                var10 = _closure1_slot13;
                var6 = var6 - var10;
                var9 = var11.bind(var12)(var9, var6);
                var6 = _closure1_slot14;
                var6 = var6 + var10;
                var6 = var9 / var6;
                var6 = var7.bind(var8)(var6);
                var _closure2_slot8 = var6;
                var8 = _closure1_slot5;
                var7 = var8.useMemo;
                var4 = var4.guild_id;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = {};
                        var2 = _closure2_slot0;
                        var3 = var2.guild_id;
                        var2 = null;
                        if(!(var2 == var3)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                        var2 = _closure1_slot15;
                        var2 = var2.DM_CHANNEL;
                        _fun0003_ip = 6; continue _fun0003;
case 4:
                        var3 = _closure1_slot15;
                        var2 = var3.GUILD_CHANNEL;
case 6:
                        var1['page'] = var2;
                        var2 = _closure1_slot16;
                        var2 = var2.STICKER_POPOUT;
                        var1['section'] = var2;
                        return var1;
                    }
                };
                var4 = var7.bind(var8)(var4, var6);
                var _closure2_slot9 = var4;
                var7 = var8.useEffect;
                var6 = new Array(2);
                var6[0] = var4;
                var6[1] = var3;
                var4 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = _closure2_slot5;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 24;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.track;
                        var1 = _closure1_slot17;
                        var2 = var1.OPEN_POPOUT;
                        var1 = {};
                        var6 = _closure2_slot9;
                        var1['location'] = var6;
                        var6 = 'Sticker Upsell Sheet';
                        var1['type'] = var6;
                        var5 = _closure2_slot5;
                        var5 = var5.id;
                        var1['sticker_pack_id'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
case 7:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4 = var7.bind(var8)(var4, var6);
                var4 = null;
                if(!(var4 != var3)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var1 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var12 = arg1;
                        var _closure3_slot0 = var12;
                        var2 = _closure2_slot6;
                        var8 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var15 = 19;
                        var3 = var1[var15];
                        var4 = undefined;
                        var3 = var8.bind(var4)(var3);
                        var5 = var3.intl;
                        var3 = var5.format;
                        var1 = var1[var15];
                        var1 = var8.bind(var4)(var1);
                        var1 = var1.t;
                        if(var2) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                        var8 = var1.OzB6e3;
                        var2 = {};
                        var9 = var12.name;
                        var2['stickerPackName'] = var9;
                        var14 = var3.bind(var5)(var8, var2);
                        _fun0005_ip = 13; continue _fun0005;
case 11:
                        var2 = var1.auckXz;
                        var1 = {};
                        var8 = var12.name;
                        var1['stickerPackName'] = var8;
                        var14 = var3.bind(var5)(var2, var1);
case 13:
                        var3 = _closure1_slot23;
                        var2 = _closure1_slot22;
                        var1 = {};
                        var11 = _closure1_slot21;
                        var9 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var8 = 18;
                        var5 = var13[var8];
                        var5 = var9.bind(var4)(var5);
                        var16 = var5.Text;
                        var5 = {'variant': 'heading-md/extrabold', 'color': 'mobile-text-heading-primary'};
                        var17 = _closure2_slot4;
                        var5['children'] = var17;
                        var16 = var11.bind(var4)(var16, var5);
                        var5 = new Array(5);
                        var5[0] = var16;
                        var8 = var13[var8];
                        var8 = var9.bind(var4)(var8);
                        var9 = var8.Text;
                        var8 = {};
                        var16 = _closure2_slot2;
                        var16 = var16.description;
                        var8['style'] = var16;
                        var16 = 'text-sm/medium';
                        var8['variant'] = var16;
                        var8['children'] = var14;
                        var8 = var11.bind(var4)(var9, var8);
                        var5[1] = var8;
                        var9 = _closure1_slot1;
                        var8 = 25;
                        var8 = var13[var8];
                        var9 = var9.bind(var4)(var8);
                        var8 = {};
                        var13 = _closure2_slot7;
                        var8['containerWidth'] = var13;
                        var16 = var12.stickers;
                        var14 = var16.slice;
                        var12 = _closure2_slot8;
                        var13 = 0;
                        var13 = var14.bind(var16)(var13, var12);
                        var8['stickers'] = var13;
                        var8['rowSize'] = var12;
                        var8 = var11.bind(var4)(var9, var8);
                        var5[2] = var8;
                        var9 = _closure2_slot6;
                        var8 = null;
                        if(!var9) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                        var12 = _closure1_slot21;
                        var11 = _closure1_slot6;
                        var9 = {};
                        var13 = {};
                        var16 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var14 = 13;
                        var14 = var17[var14];
                        var14 = var16.bind(var4)(var14);
                        var14 = var14.spacing;
                        var14 = var14.PX_16;
                        var13['height'] = var14;
                        var9['style'] = var13;
                        var8 = var12.bind(var4)(var11, var9);
case 14:
                        var5[3] = var8;
                        var6 = _closure2_slot6;
                        if(!var6) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                        var9 = _closure1_slot21;
                        var14 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var7 = 26;
                        var7 = var11[var7];
                        var7 = var14.bind(var4)(var7);
                        var8 = var7.Button;
                        var7 = {};
                        var12 = 'secondary';
                        var7['variant'] = var12;
                        var12 = var11[var15];
                        var12 = var14.bind(var4)(var12);
                        var13 = var12.intl;
                        var12 = var13.string;
                        var11 = var11[var15];
                        var11 = var14.bind(var4)(var11);
                        var11 = var11.t;
                        var11 = var11.GPy3Ar;
                        var11 = var12.bind(var13)(var11);
                        var7['text'] = var11;
                        var10 = function onPress() {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 27;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var4.bind(var1)(var2);
                                var2 = var4.hideStickerDetailActionSheet;
                                var2 = var2.bind(var4)();
                                var2 = _closure3_slot0;
                                var5 = null;
                                if(!(var5 != var2)) { _fun0006_ip = 18; continue _fun0006 }
case 6:
                                var4 = _closure2_slot6;
                                if(!var4) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                                var4 = _closure2_slot1;
                                if(!(var5 == var4)) { _fun0006_ip = 20; continue _fun0006 }
case 18:
                                var5 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var7 = 29;
                                var4 = var9[var7];
                                var5 = var5.bind(var1)(var4);
                                var4 = {};
                                var8 = _closure2_slot9;
                                var4['analyticsLocation'] = var8;
                                var8 = _closure1_slot0;
                                var7 = var9[var7];
                                var7 = var8.bind(var1)(var7);
                                var7 = var7.AnalyticsPopoutType;
                                var7 = var7.STICKER_PACK_UPSELL;
                                var4['analyticsPopoutType'] = var7;
                                var6 = _closure3_slot0;
                                var4['stickerPack'] = var6;
                                var4 = var5.bind(var1)(var4);
                                _fun0006_ip = 21; continue _fun0006;
case 20:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var3 = 28;
                                var3 = var5[var3];
                                var5 = var4.bind(var1)(var3);
                                var4 = var5.openStickerPickerToPackId;
                                var3 = _closure2_slot1;
                                var2 = _closure2_slot3;
                                var2 = var4.bind(var5)(var3, var2);
case 21:
                                return var1;
                            }
                        };
                        var7['onPress'] = var10;
                        var6 = var9.bind(var4)(var8, var7);
case 16:
                        var5[4] = var6;
                        var1['children'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    }
                };
                var1 = var1.bind(var5)(var3);
                _fun0002_ip = 22; continue _fun0002;
case 9:
                var4 = _closure1_slot21;
                var3 = _closure1_slot7;
                var2 = {};
                var6 = 'large';
                var2['size'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 22:
                return var1;
            }
        };
        var _closure1_slot25 = var4;
        var4 = function GuildStickerDetail(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var32 = var1.sticker;
                var _closure2_slot0 = var32;
                var9 = var1.channel;
                var _closure2_slot1 = var9;
                var5 = undefined;
                var _closure2_slot4 = var5;
                var _closure2_slot5 = var5;
                var _closure2_slot6 = var5;
                var _closure2_slot7 = var5;
                var _closure2_slot8 = var5;
                var _closure2_slot9 = var5;
                var1 = _closure1_slot24;
                var15 = var1.bind(var5)();
                var2 = _closure1_slot5;
                var1 = var2.useState;
                var25 = null;
                var2 = var1.bind(var2)(var25);
                var1 = _closure1_slot4;
                var6 = 2;
                var1 = var1.bind(var5)(var2, var6);
                var2 = 0;
                var24 = var1[var2];
                var _closure2_slot2 = var24;
                var3 = 1;
                var1 = var1[var3];
                var _closure2_slot3 = var1;
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 22;
                var1 = var7[var1];
                var8 = var4.bind(var5)(var1);
                var7 = var8.useStateFromStores;
                var1 = _closure1_slot9;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() {
                    var3 = _closure1_slot9;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var1 = var1.guild_id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var22 = var7.bind(var8)(var4, var1);
                var8 = var25 != var22;
                var1 = var25 == var22;
                if(var1) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                var10 = var22.features;
                var7 = var10.has;
                var4 = _closure1_slot18;
                var4 = var4.DISCOVERABLE;
                var1 = var7.bind(var10)(var4);
case 23:
                var7 = _closure1_slot5;
                var4 = var7.useState;
                var1 = !var1;
                var4 = var4.bind(var7)(var1);
                var1 = _closure1_slot4;
                var1 = var1.bind(var5)(var4, var6);
                var2 = var1[var2];
                _closure2_slot4 = var2;
                var1 = var1[var3];
                _closure2_slot5 = var1;
                var3 = _closure1_slot10;
                var1 = var3.getCurrentUser;
                var7 = var1.bind(var3)();
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 30;
                var1 = var6[var1];
                var3 = var4.bind(var5)(var1);
                var1 = var3.canUseCustomStickersEverywhere;
                var1 = var1.bind(var3)(var7);
                var3 = 31;
                var3 = var6[var3];
                var11 = var4.bind(var5)(var3);
                var7 = var11.useExperiment;
                var4 = {};
                var3 = 'StickerDetailActionSheet';
                var4['location'] = var3;
                var3 = {};
                var10 = false;
                var3['autoTrackExposure'] = var10;
                var3 = var7.bind(var11)(var4, var3);
                var7 = var3.tidaWebformEnabled;
                var4 = _closure1_slot0;
                var3 = 32;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var4 = var3.DeveloperMode;
                var3 = var4.useSetting;
                var3 = var3.bind(var4)();
                var6 = var32.id;
                var4 = function(arg1) {
                    var7 = arg1;
                    var _closure3_slot0 = var7;
                    var2 = _closure1_slot24;
                    var6 = undefined;
                    var2 = var2.bind(var6)();
                    var _closure3_slot1 = var2;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 14;
                    var4 = var8[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.useFavoriteStickerIds;
                    var5 = var4.bind(var5)();
                    var4 = var5.includes;
                    var4 = var4.bind(var5)(var7);
                    var _closure3_slot2 = var4;
                    var6 = _closure1_slot5;
                    var5 = var6.useCallback;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var2 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var2 = arg1;
                            var3 = {};
                            var4 = _closure3_slot1;
                            var7 = var4.starIcon;
                            var8 = var3;
                            var1 = copyDataProperties(var8, var7);
                            if(var2) { _fun0008_ip = 25; continue _fun0008 }
case 26:
                            var7 = var4.starIconUnselected;
                            var8 = var3;
                            var1 = copyDataProperties(var8, var7);
                            var1 = var3;
                            _fun0008_ip = 27; continue _fun0008;
case 25:
                            var7 = var4.starIconSelected;
                            var8 = var3;
                            var4 = copyDataProperties(var8, var7);
                            var1 = var3;
case 27:
                            var4 = _closure1_slot21;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            if(var2) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                            var2 = 16;
                            var3 = var5[var2];
                            var2 = undefined;
                            var2 = var6.bind(var2)(var3);
                            var3 = var2.StarOutlineIcon;
                            _fun0008_ip = 13; continue _fun0008;
case 28:
                            var2 = 15;
                            var5 = var5[var2];
                            var2 = undefined;
                            var2 = var6.bind(var2)(var5);
                            var3 = var2.StarIcon;
case 13:
                            var2 = {};
                            var2['style'] = var1;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        }
                    };
                    var2 = var5.bind(var6)(var2, var3);
                    var _closure3_slot3 = var2;
                    var5 = var6.useCallback;
                    var3 = new Array(3);
                    var3[0] = var4;
                    var3[1] = var7;
                    var3[2] = var2;
                    var1 = function() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 17;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.hideActionSheet;
                            var3 = var3.bind(var4)();
                            var5 = function content() {
                                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                    var4 = _closure1_slot21;
                                    var2 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var1 = 18;
                                    var1 = var3[var1];
                                    var3 = undefined;
                                    var1 = var2.bind(var3)(var1);
                                    var2 = var1.Text;
                                    var1 = {};
                                    var5 = {'marginLeft': 8, 'marginTop': 2};
                                    var1['style'] = var5;
                                    var5 = 'text-md/bold';
                                    var1['variant'] = var5;
                                    var5 = _closure3_slot2;
                                    var9 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var6 = 19;
                                    var7 = var10[var6];
                                    var7 = var9.bind(var3)(var7);
                                    var8 = var7.intl;
                                    var7 = var8.string;
                                    var6 = var10[var6];
                                    var6 = var9.bind(var3)(var6);
                                    var6 = var6.t;
                                    if(var5) { _fun0010_ip = 30; continue _fun0010 }
case 31:
                                    var5 = var6.mE2e8A;
                                    var5 = var7.bind(var8)(var5);
                                    _fun0010_ip = 32; continue _fun0010;
case 30:
                                    var6 = var6.in1rga;
                                    var5 = var7.bind(var8)(var6);
case 32:
                                    var1['children'] = var5;
                                    var1 = var4.bind(var3)(var2, var1);
                                    return var1;
                                }
                            };
                            var7 = _closure3_slot2;
                            var9 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var8 = 20;
                            var8 = var4[var8];
                            var8 = var9.bind(var1)(var8);
                            if(var7) { _fun0009_ip = 33; continue _fun0009 }
case 34:
                            var9 = var8.favoriteSticker;
                            var7 = _closure3_slot0;
                            var7 = var9.bind(var8)(var7);
                            var9 = _closure1_slot1;
                            var7 = 21;
                            var7 = var4[var7];
                            var10 = var9.bind(var1)(var7);
                            var9 = var10.open;
                            var7 = {};
                            var11 = 'STICKER_FAVORITED';
                            var7['key'] = var11;
                            var11 = function icon() {
                                var3 = _closure3_slot3;
                                var2 = undefined;
                                var1 = true;
                                var1 = var3.bind(var2)(var1);
                                return var1;
                            };
                            var7['icon'] = var11;
                            var7['content'] = var5;
                            var7 = var9.bind(var10)(var7);
                            _fun0009_ip = 35; continue _fun0009;
case 33:
                            var7 = var8.unfavoriteSticker;
                            var3 = _closure3_slot0;
                            var3 = var7.bind(var8)(var3);
                            var3 = _closure1_slot1;
                            var2 = 21;
                            var2 = var4[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.open;
                            var2 = {};
                            var7 = 'STICKER_UNFAVORITED';
                            var2['key'] = var7;
                            var6 = function icon() {
                                var3 = _closure3_slot3;
                                var2 = undefined;
                                var1 = false;
                                var1 = var3.bind(var2)(var1);
                                return var1;
                            };
                            var2['icon'] = var6;
                            var2['content'] = var5;
                            var2 = var3.bind(var4)(var2);
case 35:
                            return var1;
                        }
                    };
                    var3 = var5.bind(var6)(var1, var3);
                    var1 = {};
                    var1['isFavorite'] = var4;
                    var1['handleFavorite'] = var3;
                    var1['renderStarIcon'] = var2;
                    return var1;
                };
                var4 = var4.bind(var5)(var6);
                var19 = var4.isFavorite;
                var17 = var4.handleFavorite;
                if(!var7) { _fun0007_ip = 22; continue _fun0007 }
case 36:
                var7 = var3;
case 22:
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var3 = 33;
                var3 = var14[var3];
                var4 = var11.bind(var5)(var3);
                var3 = var4.getStickerAssetUrl;
                var13 = var3.bind(var4)(var32);
                _closure2_slot6 = var13;
                var12 = _closure1_slot5;
                var6 = var12.useCallback;
                var4 = new Array(1);
                var4[0] = var13;
                var3 = function() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var3 = _closure2_slot6;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0011_ip = 37; continue _fun0011 }
case 8:
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var4 = 17;
                        var4 = var2[var4];
                        var7 = undefined;
                        var6 = var5.bind(var7)(var4);
                        var5 = var6.openLazy;
                        var4 = _closure1_slot0;
                        var3 = 35;
                        var3 = var2[var3];
                        var4 = var4.bind(var7)(var3);
                        var3 = 34;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var11 = var4.bind(var7)(var3, var2);
                        var3 = {};
                        var1 = _closure2_slot6;
                        var3['stickerUrl'] = var1;
                        var10 = 'StickerOptionsActionSheet';
                        var8 = 'stack';
                        var12 = var6;
                        var9 = var3;
                        var1 = var12[var5](var11, var10, var9, var8, var7);
case 37:
                        var1 = undefined;
                        return var1;
                    }
                };
                var26 = var6.bind(var12)(var3, var4);
                var6 = var12.useMemo;
                var3 = var9.guild_id;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var1 = {};
                        var2 = _closure2_slot1;
                        var3 = var2.guild_id;
                        var2 = null;
                        if(!(var2 == var3)) { _fun0012_ip = 4; continue _fun0012 }
case 5:
                        var2 = _closure1_slot15;
                        var2 = var2.DM_CHANNEL;
                        _fun0012_ip = 6; continue _fun0012;
case 4:
                        var3 = _closure1_slot15;
                        var2 = var3.GUILD_CHANNEL;
case 6:
                        var1['page'] = var2;
                        var2 = _closure1_slot16;
                        var2 = var2.STICKER_POPOUT;
                        var1['section'] = var2;
                        return var1;
                    }
                };
                var3 = var6.bind(var12)(var3, var4);
                _closure2_slot7 = var3;
                var4 = var12.useRef;
                var3 = {};
                var6 = var9.getGuildId;
                var6 = var6.bind(var9)();
                var3['guild_id'] = var6;
                var6 = 36;
                var6 = var14[var6];
                var11 = var11.bind(var5)(var6);
                var6 = var11.collectChannelAnalyticsMetadata;
                var33 = var6.bind(var11)(var9);
                var34 = var3;
                var6 = copyDataProperties(var34, var33);
                var3 = var4.bind(var12)(var3);
                var4 = var3.current;
                var11 = var12.useEffect;
                var3 = var32.id;
                var6 = new Array(2);
                var6[0] = var3;
                var6[1] = var2;
                var3 = function() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var2 = function() {
                            var4 = _closure1_slot3;
                            var3 = undefined;
                            var2 = function* () {
                                var1 = function* anon_0_() {
                                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                        if(var2) { _fun0014_ip = 38; continue _fun0014 }
case 39:
                                        var4 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var2 = 38;
                                        var2 = var3[var2];
                                        var3 = undefined;
                                        var5 = var4.bind(var3)(var2);
                                        var2 = _closure2_slot0;
                                        var2 = var2.id;
                                        var2 = var5.bind(var3)(var2);
                                        SaveGenerator(address=53);
case 40:
                                        return var2;
case 41:
                                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                        if(var5) { _fun0014_ip = 42; continue _fun0014 }
case 43:
                                        var5 = _closure2_slot3;
                                        var5 = var5.bind(var3)(var2);
                                        var5 = _closure2_slot5;
                                        var4 = true;
                                        var4 = var5.bind(var3)(var4);
                                        return var3;
case 42:
                                        return var2;
case 38:
                                        return var1;
                                    }
                                };
                                return var1;
                            };
                            var2 = var4.bind(var3)(var2);
                            var _closure4_slot0 = var2;
                            var1 = function fetchDiscoverableGuild() {
                                var1 = undefined;
                                var4 = _closure4_slot0;
                                var3 = var4.apply;
                                var1 = arguments;
                                var2 = var1;
                                var1 = this;
                                var1 = var3.bind(var4)(var1, var2);
                                return var1;
                            };
                            return var1;
                        };
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        var3 = _closure2_slot4;
                        if(var3) { _fun0013_ip = 44; continue _fun0013 }
case 45:
                        var2 = var2.bind(var1)();
case 44:
                        return var1;
                    }
                };
                var3 = var11.bind(var12)(var3, var6);
                var6 = var32.guild_id;
                var3 = var9.getGuildId;
                var3 = var3.bind(var9)();
                var6 = var6 === var3;
                var3 = var25 != var24;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var23 = 19;
                var9 = var11[var23];
                var9 = var12.bind(var5)(var9);
                var16 = var9.intl;
                if(var1) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                if(var8) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                if(var3) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                var14 = var16.format;
                var1 = var11[var23];
                var1 = var12.bind(var5)(var1);
                var1 = var1.t;
                var9 = var1.hGWuxU;
                var1 = {};
                var21 = function openPremiumSettings() {
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 17;
                    var2 = var4[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var2 = var5.hideActionSheet;
                    var2 = var2.bind(var5)();
                    var2 = 24;
                    var2 = var4[var2];
                    var8 = var3.bind(var1)(var2);
                    var7 = var8.track;
                    var2 = _closure1_slot17;
                    var3 = var2.PREMIUM_PROMOTION_OPENED;
                    var2 = {};
                    var9 = _closure2_slot7;
                    var9 = var9.page;
                    var2['location_page'] = var9;
                    var9 = _closure2_slot7;
                    var9 = var9.section;
                    var2['location_section'] = var9;
                    var2 = var7.bind(var8)(var3, var2);
                    var3 = _closure1_slot0;
                    var2 = 39;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openUserSettings;
                    var2 = {};
                    var6 = _closure1_slot19;
                    var6 = var6.PREMIUM;
                    var2['screen'] = var6;
                    var5 = _closure2_slot7;
                    var2['analyticsLocation'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['openPremiumSettings'] = var21;
                var29 = var14.bind(var16)(var9, var1);
                var1 = 'Custom Sticker Popout (Soft Upsell)';
                var9 = false;
                _fun0007_ip = 52; continue _fun0007;
case 50:
                var21 = var16.string;
                var14 = var11[var23];
                var14 = var12.bind(var5)(var14);
                var14 = var14.t;
                var14 = var14.IuXYch;
                var29 = var21.bind(var16)(var14);
                var9 = true;
                var1 = 'Custom Sticker Popout (Upsell)';
                _fun0007_ip = 52; continue _fun0007;
case 48:
                var21 = var16.string;
                var14 = var11[var23];
                var14 = var12.bind(var5)(var14);
                var14 = var14.t;
                if(var6) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                var27 = var14.lyD5ZW;
                var29 = var21.bind(var16)(var27);
                var9 = true;
                var1 = 'Custom Sticker Popout (Upsell)';
                _fun0007_ip = 52; continue _fun0007;
case 53:
                var14 = var14.jNphpt;
                var29 = var21.bind(var16)(var14);
                var9 = true;
                var1 = 'Custom Sticker Popout (Upsell)';
                _fun0007_ip = 52; continue _fun0007;
case 46:
                var14 = var16.string;
                var11 = var11[var23];
                var11 = var12.bind(var5)(var11);
                var12 = var11.t;
                if(var8) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                if(var3) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                var11 = var12.vZaScH;
                var11 = var14.bind(var16)(var11);
                _fun0007_ip = 59; continue _fun0007;
case 57:
                var21 = var12.yHmoR9;
                var11 = var14.bind(var16)(var21);
case 59:
                _fun0007_ip = 60; continue _fun0007;
case 55:
                if(var6) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                var6 = var12["1f6D9m"];
                var6 = var14.bind(var16)(var6);
                _fun0007_ip = 63; continue _fun0007;
case 61:
                var12 = var12.fZ0DiG;
                var6 = var14.bind(var16)(var12);
case 63:
                var11 = var6;
case 60:
                var1 = 'Custom Sticker Popout';
                var29 = var11;
                var9 = false;
case 52:
                var21 = !var9;
                if(var9) { _fun0007_ip = 64; continue _fun0007 }
case 65:
                var21 = !var8;
case 64:
                if(!var21) { _fun0007_ip = 66; continue _fun0007 }
case 67:
                var21 = var3;
case 66:
                var3 = {};
                var3['popoutAnalyticsConfig'] = var4;
                var3['popoutType'] = var1;
                _closure2_slot8 = var3;
                var6 = _closure1_slot5;
                var1 = var6.useRef;
                var1 = var1.bind(var6)(var3);
                _closure2_slot9 = var1;
                var3 = var6.useEffect;
                var1 = function() {
                    var2 = _closure2_slot9;
                    var1 = _closure2_slot8;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var1 = var3.bind(var6)(var1);
                var4 = var6.useEffect;
                var3 = new Array(1);
                var3[0] = var2;
                var1 = function() {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var2 = _closure2_slot9;
                        var2 = var2.current;
                        var5 = var2.popoutAnalyticsConfig;
                        var6 = var2.popoutType;
                        var1 = _closure2_slot4;
                        if(!var1) { _fun0015_ip = 7; continue _fun0015 }
case 68:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 24;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.track;
                        var1 = _closure1_slot17;
                        var2 = var1.OPEN_POPOUT;
                        var1 = {};
                        var1['type'] = var6;
                        var8 = var1;
                        var7 = var5;
                        var5 = copyDataProperties(var8, var7);
                        var1 = var3.bind(var4)(var2, var1);
case 7:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var4.bind(var6)(var1, var3);
                var1 = null;
                if(!var2) { _fun0007_ip = 69; continue _fun0007 }
case 70:
                var4 = _closure1_slot23;
                var3 = _closure1_slot22;
                var2 = {};
                var10 = _closure1_slot6;
                var6 = {};
                var11 = var15.guildEmojiTopContainer;
                var6['style'] = var11;
                var28 = _closure1_slot21;
                var12 = _closure1_slot1;
                var30 = _closure1_slot2;
                var11 = 40;
                var11 = var30[var11];
                var12 = var12.bind(var5)(var11);
                var11 = {};
                var11['sticker'] = var32;
                var14 = 48;
                var11['size'] = var14;
                var12 = var28.bind(var5)(var12, var11);
                var11 = new Array(3);
                var11[0] = var12;
                var12 = {};
                var14 = var15.guildEmojiDescription;
                var12['style'] = var14;
                var27 = _closure1_slot0;
                var16 = 18;
                var14 = var30[var16];
                var14 = var27.bind(var5)(var14);
                var31 = var14.Text;
                var14 = {'variant': 'heading-md/extrabold', 'color': 'mobile-text-heading-primary'};
                var32 = var32.name;
                var14['children'] = var32;
                var31 = var28.bind(var5)(var31, var14);
                var14 = new Array(2);
                var14[0] = var31;
                var16 = var30[var16];
                var16 = var27.bind(var5)(var16);
                var27 = var16.Text;
                var16 = {};
                var30 = var15.description;
                var16['style'] = var30;
                var30 = 'text-sm/medium';
                var16['variant'] = var30;
                var16['children'] = var29;
                var16 = var28.bind(var5)(var27, var16);
                var14[1] = var16;
                var12['children'] = var14;
                var12 = var4.bind(var5)(var10, var12);
                var11[1] = var12;
                var12 = var7;
                if(!var7) { _fun0007_ip = 71; continue _fun0007 }
case 72:
                var12 = var25 != var13;
case 71:
                if(!var12) { _fun0007_ip = 73; continue _fun0007 }
case 74:
                var16 = _closure1_slot21;
                var14 = _closure1_slot8;
                var13 = {};
                var27 = _closure1_slot0;
                var30 = _closure1_slot2;
                var28 = var30[var23];
                var28 = var27.bind(var5)(var28);
                var31 = var28.intl;
                var29 = var31.string;
                var28 = var30[var23];
                var28 = var27.bind(var5)(var28);
                var28 = var28.t;
                var28 = var28.PdRCRg;
                var28 = var29.bind(var31)(var28);
                var13['accessibilityLabel'] = var28;
                var28 = var15.moreMenuIcon;
                var13['style'] = var28;
                var13['onPress'] = var26;
                var26 = 41;
                var26 = var30[var26];
                var26 = var27.bind(var5)(var26);
                var27 = var26.MoreHorizontalIcon;
                var26 = {};
                var29 = _closure1_slot1;
                var28 = 13;
                var28 = var30[var28];
                var28 = var29.bind(var5)(var28);
                var28 = var28.colors;
                var28 = var28.INTERACTIVE_TEXT_DEFAULT;
                var26['color'] = var28;
                var26 = var16.bind(var5)(var27, var26);
                var13['children'] = var26;
                var12 = var16.bind(var5)(var14, var13);
case 73:
                var11[2] = var12;
                var6['children'] = var11;
                var10 = var4.bind(var5)(var10, var6);
                var6 = new Array(5);
                var6[0] = var10;
                if(!var9) { _fun0007_ip = 75; continue _fun0007 }
case 76:
                var12 = _closure1_slot23;
                var11 = _closure1_slot6;
                var10 = {};
                var13 = var15.buttonContainer;
                var10['style'] = var13;
                var16 = _closure1_slot21;
                var30 = _closure1_slot0;
                var29 = _closure1_slot2;
                var13 = 26;
                var13 = var29[var13];
                var13 = var30.bind(var5)(var13);
                var14 = var13.Button;
                var13 = {};
                var26 = 'experimental_premium-primary';
                var13['variant'] = var26;
                var26 = 42;
                var26 = var29[var26];
                var26 = var30.bind(var5)(var26);
                var27 = var26.NitroWheelIcon;
                var26 = {};
                var28 = 'white';
                var26['color'] = var28;
                var26 = var16.bind(var5)(var27, var26);
                var13['icon'] = var26;
                var26 = var29[var23];
                var26 = var30.bind(var5)(var26);
                var28 = var26.intl;
                var27 = var28.string;
                var26 = var29[var23];
                var26 = var30.bind(var5)(var26);
                var26 = var26.t;
                var26 = var26.gl/XHJ;
                var26 = var27.bind(var28)(var26);
                var13['text'] = var26;
                var26 = function onPress() {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 43;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = _closure2_slot7;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var13['onPress'] = var26;
                var14 = var16.bind(var5)(var14, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var14 = {};
                var26 = {};
                var28 = _closure1_slot1;
                var27 = 13;
                var27 = var29[var27];
                var27 = var28.bind(var5)(var27);
                var27 = var27.spacing;
                var27 = var27.PX_16;
                var26['height'] = var27;
                var14['style'] = var26;
                var14 = var16.bind(var5)(var11, var14);
                var13[1] = var14;
                var10['children'] = var13;
                var9 = var12.bind(var5)(var11, var10);
case 75:
                var6[1] = var9;
                var9 = var21;
                if(!var9) { _fun0007_ip = 77; continue _fun0007 }
case 78:
                var12 = _closure1_slot23;
                var11 = _closure1_slot6;
                var10 = {};
                var13 = var15.buttonContainer;
                var10['style'] = var13;
                var16 = _closure1_slot21;
                var30 = _closure1_slot0;
                var28 = _closure1_slot2;
                var13 = 26;
                var13 = var28[var13];
                var13 = var30.bind(var5)(var13);
                var14 = var13.Button;
                var13 = {};
                var26 = var28[var23];
                var26 = var30.bind(var5)(var26);
                var29 = var26.intl;
                var27 = var29.string;
                var26 = var28[var23];
                var26 = var30.bind(var5)(var26);
                var26 = var26.t;
                var26 = var26.riu2R5;
                var26 = var27.bind(var29)(var26);
                var13['text'] = var26;
                var20 = function onPress() {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var4 = _closure2_slot2;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0016_ip = 79; continue _fun0016 }
case 80:
                        var2 = _closure2_slot2;
                        var4 = var2.id;
                        var _closure3_slot0 = var4;
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 37;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var5.bind(var2)(var3);
                        var2 = var3.joinGuild;
                        var3 = var2.bind(var3)(var4);
                        var2 = var3.then;
                        var1 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 37;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.transitionToGuildSync;
                            var2 = _closure3_slot0;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
case 79:
                        var1 = undefined;
                        return var1;
                    }
                };
                var13['onPress'] = var20;
                var14 = var16.bind(var5)(var14, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var14 = {};
                var20 = {};
                var27 = _closure1_slot1;
                var26 = 13;
                var26 = var28[var26];
                var26 = var27.bind(var5)(var26);
                var26 = var26.spacing;
                var26 = var26.PX_16;
                var20['height'] = var26;
                var14['style'] = var20;
                var14 = var16.bind(var5)(var11, var14);
                var13[1] = var14;
                var10['children'] = var13;
                var9 = var12.bind(var5)(var11, var10);
case 77:
                var6[2] = var9;
                var9 = var25 != var22;
                if(var9) { _fun0007_ip = 81; continue _fun0007 }
case 82:
                var9 = var25 != var24;
case 81:
                if(!var9) { _fun0007_ip = 83; continue _fun0007 }
case 84:
                var12 = _closure1_slot23;
                var11 = _closure1_slot22;
                var10 = {};
                var20 = _closure1_slot21;
                var14 = _closure1_slot0;
                var26 = _closure1_slot2;
                var13 = 44;
                var13 = var26[var13];
                var13 = var14.bind(var5)(var13);
                var14 = var13.FormDivider;
                var13 = {};
                var16 = var15.divider;
                var13['style'] = var16;
                var14 = var20.bind(var5)(var14, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var16 = _closure1_slot1;
                var14 = 45;
                var14 = var26[var14];
                var16 = var16.bind(var5)(var14);
                var14 = {};
                if(!(var25 != var24)) { _fun0007_ip = 85; continue _fun0007 }
case 86:
                var22 = var24;
case 85:
                var14['guild'] = var22;
                var14['showingJoinGuildCta'] = var21;
                var14['hasJoinedGuild'] = var8;
                var22 = _closure1_slot0;
                var21 = _closure1_slot2;
                var24 = var21[var23];
                var24 = var22.bind(var5)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var21 = var21[var23];
                var21 = var22.bind(var5)(var21);
                var22 = var21.t;
                if(var8) { _fun0007_ip = 87; continue _fun0007 }
case 88:
                var21 = var22.pDE7Gb;
                var21 = var24.bind(var25)(var21);
                _fun0007_ip = 89; continue _fun0007;
case 87:
                var22 = var22.kx6pEG;
                var21 = var24.bind(var25)(var22);
case 89:
                var14['title'] = var21;
                var14 = var20.bind(var5)(var16, var14);
                var13[1] = var14;
                var10['children'] = var13;
                var9 = var12.bind(var5)(var11, var10);
case 83:
                var6[3] = var9;
                if(!var7) { _fun0007_ip = 90; continue _fun0007 }
case 91:
                var7 = var8;
case 90:
                if(!var7) { _fun0007_ip = 92; continue _fun0007 }
case 93:
                var10 = _closure1_slot23;
                var9 = _closure1_slot22;
                var8 = {};
                var14 = _closure1_slot21;
                var16 = _closure1_slot0;
                var20 = _closure1_slot2;
                var11 = 44;
                var11 = var20[var11];
                var11 = var16.bind(var5)(var11);
                var12 = var11.FormDivider;
                var11 = {};
                var13 = var15.divider;
                var11['style'] = var13;
                var12 = var14.bind(var5)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var13 = _closure1_slot6;
                var12 = {};
                var15 = var15.favoriteContainer;
                var12['style'] = var15;
                var15 = 26;
                var15 = var20[var15];
                var15 = var16.bind(var5)(var15);
                var16 = var15.Button;
                var15 = {};
                var20 = _closure1_slot0;
                var18 = _closure1_slot2;
                var21 = var18[var23];
                var21 = var20.bind(var5)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var18 = var18[var23];
                var18 = var20.bind(var5)(var18);
                var20 = var18.t;
                if(var19) { _fun0007_ip = 94; continue _fun0007 }
case 95:
                var18 = var20.kWmiPW;
                var18 = var21.bind(var22)(var18);
                _fun0007_ip = 96; continue _fun0007;
case 94:
                var20 = var20.XhzKyF;
                var18 = var21.bind(var22)(var20);
case 96:
                var15['text'] = var18;
                var18 = 'primary';
                if(!var19) { _fun0007_ip = 97; continue _fun0007 }
case 98:
                var18 = 'tertiary';
case 97:
                var15['variant'] = var18;
                var18 = 'md';
                var15['size'] = var18;
                var15['onPress'] = var17;
                var15 = var14.bind(var5)(var16, var15);
                var12['children'] = var15;
                var12 = var14.bind(var5)(var13, var12);
                var11[1] = var12;
                var8['children'] = var11;
                var7 = var10.bind(var5)(var9, var8);
case 92:
                var6[4] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 69:
                return var1;
            }
        };
        var _closure1_slot26 = var4;
        var4 = function UnavailableStickerDetail(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var1 = arg1;
                var18 = var1.renderableSticker;
                var1 = var1.channel;
                var _closure2_slot0 = var1;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var2 = _closure1_slot24;
                var13 = var2.bind(var4)();
                var3 = _closure1_slot10;
                var2 = var3.getCurrentUser;
                var7 = var2.bind(var3)();
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 30;
                var5 = var3[var5];
                var6 = var2.bind(var4)(var5);
                var5 = var6.canUseCustomStickersEverywhere;
                var17 = var5.bind(var6)(var7);
                var7 = _closure1_slot5;
                var6 = var7.useMemo;
                var1 = var1.guild_id;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var1 = {};
                        var2 = _closure2_slot0;
                        var3 = var2.guild_id;
                        var2 = null;
                        if(!(var2 == var3)) { _fun0018_ip = 4; continue _fun0018 }
case 5:
                        var2 = _closure1_slot15;
                        var2 = var2.DM_CHANNEL;
                        _fun0018_ip = 6; continue _fun0018;
case 4:
                        var3 = _closure1_slot15;
                        var2 = var3.GUILD_CHANNEL;
case 6:
                        var1['page'] = var2;
                        var2 = _closure1_slot16;
                        var2 = var2.STICKER_POPOUT;
                        var1['section'] = var2;
                        return var1;
                    }
                };
                var1 = var6.bind(var7)(var1, var5);
                var _closure2_slot1 = var1;
                var1 = 31;
                var1 = var3[var1];
                var6 = var2.bind(var4)(var1);
                var5 = var6.useExperiment;
                var2 = {};
                var1 = 'StickerDetailActionSheet';
                var2['location'] = var1;
                var1 = {};
                var7 = false;
                var1['autoTrackExposure'] = var7;
                var1 = var5.bind(var6)(var2, var1);
                var6 = var1.tidaWebformEnabled;
                var2 = _closure1_slot0;
                var1 = 32;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.DeveloperMode;
                var1 = var2.useSetting;
                var1 = var1.bind(var2)();
                if(!var6) { _fun0017_ip = 99; continue _fun0017 }
case 100:
                var6 = var1;
case 99:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 33;
                var1 = var15[var1];
                var2 = var14.bind(var4)(var1);
                var1 = var2.getStickerAssetUrl;
                var8 = var1.bind(var2)(var18);
                _closure2_slot2 = var8;
                var5 = _closure1_slot5;
                var3 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var8;
                var1 = function() {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var3 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0019_ip = 37; continue _fun0019 }
case 8:
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var4 = 17;
                        var4 = var2[var4];
                        var7 = undefined;
                        var6 = var5.bind(var7)(var4);
                        var5 = var6.openLazy;
                        var4 = _closure1_slot0;
                        var3 = 35;
                        var3 = var2[var3];
                        var4 = var4.bind(var7)(var3);
                        var3 = 34;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var11 = var4.bind(var7)(var3, var2);
                        var3 = {};
                        var1 = _closure2_slot2;
                        var3['stickerUrl'] = var1;
                        var10 = 'StickerOptionsActionSheet';
                        var8 = 'stack';
                        var12 = var6;
                        var9 = var3;
                        var1 = var12[var5](var11, var10, var9, var8, var7);
case 37:
                        var1 = undefined;
                        return var1;
                    }
                };
                var10 = var3.bind(var5)(var1, var2);
                var3 = _closure1_slot23;
                var2 = _closure1_slot6;
                var1 = {};
                var5 = var13.guildEmojiTopContainer;
                var1['style'] = var5;
                var16 = _closure1_slot21;
                var7 = _closure1_slot1;
                var5 = 40;
                var5 = var15[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var5['sticker'] = var18;
                var9 = 48;
                var5['size'] = var9;
                var7 = var16.bind(var4)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var7 = {};
                var9 = var13.guildEmojiDescription;
                var7['style'] = var9;
                var9 = 18;
                var9 = var15[var9];
                var9 = var14.bind(var4)(var9);
                var11 = var9.Text;
                var9 = {'variant': 'heading-md/extrabold', 'color': 'mobile-text-heading-primary'};
                var18 = var18.name;
                var9['children'] = var18;
                var11 = var16.bind(var4)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var11 = 46;
                var11 = var15[var11];
                var11 = var14.bind(var4)(var11);
                var14 = var11.TextWithIOSLinkWorkaround;
                var11 = {};
                var15 = var13.description;
                var11['style'] = var15;
                var15 = 'text-sm/medium';
                var11['variant'] = var15;
                var21 = _closure1_slot0;
                var18 = _closure1_slot2;
                var15 = 19;
                var19 = var18[var15];
                var19 = var21.bind(var4)(var19);
                var20 = var19.intl;
                if(var17) { _fun0017_ip = 101; continue _fun0017 }
case 102:
                var22 = var20.format;
                var17 = var18[var15];
                var17 = var21.bind(var4)(var17);
                var17 = var17.t;
                var19 = var17.hGWuxU;
                var17 = {};
                var23 = function openPremiumSettings() {
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 17;
                    var2 = var4[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var2 = var5.hideActionSheet;
                    var2 = var2.bind(var5)();
                    var2 = 24;
                    var2 = var4[var2];
                    var8 = var3.bind(var1)(var2);
                    var7 = var8.track;
                    var2 = _closure1_slot17;
                    var3 = var2.PREMIUM_PROMOTION_OPENED;
                    var2 = {};
                    var5 = _closure2_slot1;
                    var9 = var5.page;
                    var2['location_page'] = var9;
                    var9 = var5.section;
                    var2['location_section'] = var9;
                    var2 = var7.bind(var8)(var3, var2);
                    var3 = _closure1_slot0;
                    var2 = 39;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openUserSettings;
                    var2 = {};
                    var6 = _closure1_slot19;
                    var6 = var6.PREMIUM;
                    var2['screen'] = var6;
                    var2['analyticsLocation'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var17['openPremiumSettings'] = var23;
                var17 = var22.bind(var20)(var19, var17);
                _fun0017_ip = 103; continue _fun0017;
case 101:
                var19 = var20.string;
                var18 = var18[var15];
                var18 = var21.bind(var4)(var18);
                var18 = var18.t;
                var18 = var18.vZaScH;
                var17 = var19.bind(var20)(var18);
case 103:
                var11['children'] = var17;
                var11 = var16.bind(var4)(var14, var11);
                var9[1] = var11;
                var7['children'] = var9;
                var7 = var3.bind(var4)(var2, var7);
                var5[1] = var7;
                if(!var6) { _fun0017_ip = 104; continue _fun0017 }
case 105:
                var7 = null;
                var6 = var7 != var8;
case 104:
                if(!var6) { _fun0017_ip = 106; continue _fun0017 }
case 107:
                var9 = _closure1_slot21;
                var8 = _closure1_slot8;
                var7 = {};
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var16 = var14[var15];
                var16 = var11.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var14[var15];
                var15 = var11.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15.PdRCRg;
                var15 = var16.bind(var17)(var15);
                var7['accessibilityLabel'] = var15;
                var13 = var13.moreMenuIcon;
                var7['style'] = var13;
                var7['onPress'] = var10;
                var10 = 41;
                var10 = var14[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.MoreHorizontalIcon;
                var10 = {};
                var13 = _closure1_slot1;
                var12 = 13;
                var12 = var14[var12];
                var12 = var13.bind(var4)(var12);
                var12 = var12.colors;
                var12 = var12.INTERACTIVE_TEXT_DEFAULT;
                var10['color'] = var12;
                var10 = var9.bind(var4)(var11, var10);
                var7['children'] = var10;
                var6 = var9.bind(var4)(var8, var7);
case 106:
                var5[2] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot27 = var4;
        var4 = var7.memo;
        var2 = function StickerDetailActionSheet(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var1 = arg1;
                var10 = var1.renderableSticker;
                var9 = var1.channel;
                var12 = var1.chatInputRef;
                var1 = _closure1_slot24;
                var4 = undefined;
                var8 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useStickerForRenderableSticker;
                var6 = true;
                var3 = var1.bind(var2)(var10, var6);
                var2 = _closure1_slot4;
                var1 = 2;
                var2 = var2.bind(var4)(var3, var1);
                var1 = 0;
                var13 = var2[var1];
                var1 = 1;
                var3 = var2[var1];
                var7 = _closure1_slot21;
                var2 = _closure1_slot7;
                var1 = {};
                var11 = 'large';
                var1['size'] = var11;
                var1 = var7.bind(var4)(var2, var1);
                var2 = null;
                if(!(var2 == var13)) { _fun0020_ip = 108; continue _fun0020 }
case 109:
                if(var3) { _fun0020_ip = 110; continue _fun0020 }
case 108:
                var7 = var1;
                if(!(var2 != var13)) { _fun0020_ip = 111; continue _fun0020 }
case 112:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var11 = 33;
                var2 = var2[var11];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isStandardSticker;
                var2 = var2.bind(var3)(var13);
                if(var2) { _fun0020_ip = 113; continue _fun0020 }
case 114:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var11];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isGuildSticker;
                var2 = var2.bind(var3)(var13);
                if(!var2) { _fun0020_ip = 115; continue _fun0020 }
case 116:
                var11 = _closure1_slot21;
                var3 = _closure1_slot26;
                var2 = {};
                var2['sticker'] = var13;
                var2['channel'] = var9;
                var1 = var11.bind(var4)(var3, var2);
case 115:
                _fun0020_ip = 117; continue _fun0020;
case 113:
                var11 = _closure1_slot21;
                var3 = _closure1_slot25;
                var2 = {};
                var2['sticker'] = var13;
                var2['channel'] = var9;
                var2['chatInputRef'] = var12;
                var1 = var11.bind(var4)(var3, var2);
case 117:
                var7 = var1;
                _fun0020_ip = 111; continue _fun0020;
case 110:
                var3 = _closure1_slot21;
                var2 = _closure1_slot27;
                var1 = {};
                var1['renderableSticker'] = var10;
                var1['channel'] = var9;
                var7 = var3.bind(var4)(var2, var1);
case 111:
                var3 = _closure1_slot21;
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 47;
                var1 = var9[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.BottomSheet;
                var1 = {};
                var1['startExpanded'] = var6;
                var6 = _closure1_slot6;
                var5 = {};
                var8 = var8.content;
                var5['style'] = var8;
                var5['children'] = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var2 = var4.bind(var7)(var2);
        var4 = 48;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/stickers/native/StickerDetailActionSheet.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();