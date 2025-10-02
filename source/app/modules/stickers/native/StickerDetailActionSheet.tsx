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
        var11 = 0;
        var4 = var6[var11];
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
        var4 = var4.ActivityIndicator;
        var _closure1_slot7 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var12.bind(var1)(var4);
        var _closure1_slot8 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var12.bind(var1)(var4);
        var _closure1_slot9 = var4;
        var4 = 6;
        var4 = var6[var4];
        var4 = var12.bind(var1)(var4);
        var _closure1_slot10 = var4;
        var4 = 7;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.PADDING_HORIZONTAL;
        var _closure1_slot11 = var8;
        var8 = var4.MIN_MARGIN;
        var _closure1_slot12 = var8;
        var4 = var4.STICKER_SIZE;
        var _closure1_slot13 = var4;
        var4 = 8;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.AnalyticsPages;
        var _closure1_slot14 = var8;
        var8 = var4.AnalyticsSections;
        var _closure1_slot15 = var8;
        var8 = var4.AnalyticEvents;
        var _closure1_slot16 = var8;
        var8 = var4.GuildFeatures;
        var _closure1_slot17 = var8;
        var4 = var4.UserSettingsSections;
        var _closure1_slot18 = var4;
        var4 = 9;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.ACTION_SHEET_MAX_WIDTH;
        var _closure1_slot19 = var4;
        var4 = 10;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.jsx;
        var _closure1_slot20 = var8;
        var8 = var4.Fragment;
        var _closure1_slot21 = var8;
        var4 = var4.jsxs;
        var _closure1_slot22 = var4;
        var4 = 11;
        var4 = var6[var4];
        var9 = var5.bind(var1)(var4);
        var8 = var9.createStyles;
        var4 = {};
        var10 = {};
        var14 = 16;
        var10['padding'] = var14;
        var13 = 12;
        var13 = var6[var13];
        var15 = var5.bind(var1)(var13);
        var13 = var15.isAndroid;
        var15 = var13.bind(var15)();
        var13 = 0;
        if(!var15) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var13 = var14;
case 2:
        var10['paddingBottom'] = var13;
        var4['content'] = var10;
        var10 = {'lineHeight': 18, 'marginTop': 4, 'marginBottom': 10};
        var4['description'] = var10;
        var10 = {'flexDirection': 'row', 'alignItems': 'center', 'paddingBottom': 12};
        var4['guildEmojiTopContainer'] = var10;
        var10 = {'paddingLeft': 16, 'flex': 1};
        var4['guildEmojiDescription'] = var10;
        var10 = {};
        var10['marginLeft'] = var11;
        var11 = 13;
        var11 = var6[var11];
        var11 = var12.bind(var1)(var11);
        var11 = var11.colors;
        var11 = var11.BACKGROUND_ACCENT;
        var10['backgroundColor'] = var11;
        var4['divider'] = var10;
        var4 = var8.bind(var9)(var4);
        var _closure1_slot23 = var4;
        var4 = function StandardStickerDetail(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var3 = var2.sticker;
                var4 = var2.channel;
                var _closure2_slot0 = var4;
                var2 = var2.chatInputRef;
                var _closure2_slot1 = var2;
                var6 = _closure1_slot23;
                var5 = undefined;
                var6 = var6.bind(var5)();
                var _closure2_slot2 = var6;
                var9 = var3.pack_id;
                var _closure2_slot3 = var9;
                var3 = var3.name;
                var _closure2_slot4 = var3;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var10 = 14;
                var3 = var8[var10];
                var13 = var7.bind(var5)(var3);
                var12 = var13.useStateFromStores;
                var6 = _closure1_slot10;
                var11 = new Array(1);
                var11[0] = var6;
                var3 = function() {
                    var3 = _closure1_slot10;
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
                    var3 = _closure1_slot10;
                    var2 = var3.isPremiumPack;
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var6 = var11.bind(var12)(var10, var6);
                var _closure2_slot6 = var6;
                var6 = 15;
                var6 = var8[var6];
                var7 = var7.bind(var5)(var6);
                var6 = var7.useFetchStickerPack;
                var6 = var6.bind(var7)(var9);
                var7 = _closure1_slot1;
                var6 = 16;
                var6 = var8[var6];
                var6 = var7.bind(var5)(var6);
                var6 = var6.bind(var5)();
                var7 = var6.width;
                var8 = _closure1_slot11;
                var6 = 2;
                var6 = var6 * var8;
                var6 = var7 - var6;
                var _closure2_slot7 = var6;
                var9 = global;
                var8 = var9.Math;
                var7 = var8.floor;
                var12 = var9.Math;
                var11 = var12.min;
                var9 = _closure1_slot19;
                var10 = _closure1_slot12;
                var6 = var6 - var10;
                var9 = var11.bind(var12)(var9, var6);
                var6 = _closure1_slot13;
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
                        var2 = _closure1_slot14;
                        var2 = var2.DM_CHANNEL;
                        _fun0003_ip = 6; continue _fun0003;
case 4:
                        var3 = _closure1_slot14;
                        var2 = var3.GUILD_CHANNEL;
case 6:
                        var1['page'] = var2;
                        var2 = _closure1_slot15;
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
                        var2 = 17;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.track;
                        var1 = _closure1_slot16;
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
                        var15 = 18;
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
                        var2 = var1.auckX1;
                        var1 = {};
                        var8 = var12.name;
                        var1['stickerPackName'] = var8;
                        var14 = var3.bind(var5)(var2, var1);
case 13:
                        var3 = _closure1_slot22;
                        var2 = _closure1_slot21;
                        var1 = {};
                        var11 = _closure1_slot20;
                        var9 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var8 = 19;
                        var5 = var13[var8];
                        var5 = var9.bind(var4)(var5);
                        var16 = var5.Text;
                        var5 = {'variant': 'heading-md/extrabold', 'color': 'header-primary'};
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
                        var8 = 20;
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
                        var12 = _closure1_slot20;
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
                        var9 = _closure1_slot20;
                        var14 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var7 = 21;
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
                        var11 = var11.GPy3Ag;
                        var11 = var12.bind(var13)(var11);
                        var7['text'] = var11;
                        var10 = function onPress() {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 22;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var4.bind(var1)(var2);
                                var2 = var4.hideStickerDetailActionSheet;
                                var2 = var2.bind(var4)();
                                var4 = _closure3_slot0;
                                var2 = null;
                                if(!(var2 != var4)) { _fun0006_ip = 18; continue _fun0006 }
case 6:
                                var4 = _closure2_slot6;
                                if(var4) { _fun0006_ip = 19; continue _fun0006 }
case 18:
                                var5 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var7 = 24;
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
                                _fun0006_ip = 20; continue _fun0006;
case 19:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var3 = 23;
                                var3 = var5[var3];
                                var5 = var4.bind(var1)(var3);
                                var4 = var5.openStickerPickerToPackId;
                                var3 = _closure2_slot1;
                                var2 = _closure2_slot3;
                                var2 = var4.bind(var5)(var3, var2);
case 20:
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
                _fun0002_ip = 21; continue _fun0002;
case 9:
                var4 = _closure1_slot20;
                var3 = _closure1_slot7;
                var2 = {};
                var6 = 'large';
                var2['size'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 21:
                return var1;
            }
        };
        var _closure1_slot24 = var4;
        var4 = function GuildStickerDetail(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var27 = var1.sticker;
                var _closure2_slot0 = var27;
                var7 = var1.channel;
                var _closure2_slot1 = var7;
                var5 = undefined;
                var _closure2_slot4 = var5;
                var _closure2_slot5 = var5;
                var _closure2_slot6 = var5;
                var _closure2_slot7 = var5;
                var _closure2_slot8 = var5;
                var1 = _closure1_slot23;
                var13 = var1.bind(var5)();
                var2 = _closure1_slot5;
                var1 = var2.useState;
                var21 = null;
                var2 = var1.bind(var2)(var21);
                var1 = _closure1_slot4;
                var6 = 2;
                var1 = var1.bind(var5)(var2, var6);
                var2 = 0;
                var19 = var1[var2];
                var _closure2_slot2 = var19;
                var3 = 1;
                var1 = var1[var3];
                var _closure2_slot3 = var1;
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 14;
                var1 = var8[var1];
                var9 = var4.bind(var5)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot8;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() {
                    var3 = _closure1_slot8;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var1 = var1.guild_id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var18 = var8.bind(var9)(var4, var1);
                var15 = var21 != var18;
                var1 = var21 == var18;
                if(var1) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                var9 = var18.features;
                var8 = var9.has;
                var4 = _closure1_slot17;
                var4 = var4.DISCOVERABLE;
                var1 = var8.bind(var9)(var4);
case 22:
                var9 = _closure1_slot5;
                var4 = var9.useState;
                var1 = !var1;
                var4 = var4.bind(var9)(var1);
                var1 = _closure1_slot4;
                var1 = var1.bind(var5)(var4, var6);
                var2 = var1[var2];
                _closure2_slot4 = var2;
                var1 = var1[var3];
                _closure2_slot5 = var1;
                var3 = _closure1_slot9;
                var1 = var3.getCurrentUser;
                var4 = var1.bind(var3)();
                var3 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 25;
                var1 = var10[var1];
                var3 = var3.bind(var5)(var1);
                var1 = var3.canUseCustomStickersEverywhere;
                var1 = var1.bind(var3)(var4);
                var6 = var9.useMemo;
                var3 = var7.guild_id;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = {};
                        var2 = _closure2_slot1;
                        var3 = var2.guild_id;
                        var2 = null;
                        if(!(var2 == var3)) { _fun0008_ip = 4; continue _fun0008 }
case 5:
                        var2 = _closure1_slot14;
                        var2 = var2.DM_CHANNEL;
                        _fun0008_ip = 6; continue _fun0008;
case 4:
                        var3 = _closure1_slot14;
                        var2 = var3.GUILD_CHANNEL;
case 6:
                        var1['page'] = var2;
                        var2 = _closure1_slot15;
                        var2 = var2.STICKER_POPOUT;
                        var1['section'] = var2;
                        return var1;
                    }
                };
                var3 = var6.bind(var9)(var3, var4);
                _closure2_slot6 = var3;
                var4 = var9.useRef;
                var3 = {};
                var6 = var7.getGuildId;
                var6 = var6.bind(var7)();
                var3['guild_id'] = var6;
                var8 = _closure1_slot0;
                var6 = 26;
                var6 = var10[var6];
                var8 = var8.bind(var5)(var6);
                var6 = var8.collectChannelAnalyticsMetadata;
                var28 = var6.bind(var8)(var7);
                var29 = var3;
                var6 = copyDataProperties(var29, var28);
                var3 = var4.bind(var9)(var3);
                var4 = var3.current;
                var8 = var9.useEffect;
                var3 = var27.id;
                var6 = new Array(2);
                var6[0] = var3;
                var6[1] = var2;
                var3 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var2 = function() {
                            var4 = _closure1_slot3;
                            var3 = undefined;
                            var2 = function* () {
                                var1 = function* anon_0_() {
                                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                        if(var2) { _fun0010_ip = 24; continue _fun0010 }
case 25:
                                        var4 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var2 = 28;
                                        var2 = var3[var2];
                                        var3 = undefined;
                                        var5 = var4.bind(var3)(var2);
                                        var2 = _closure2_slot0;
                                        var2 = var2.id;
                                        var2 = var5.bind(var3)(var2);
                                        SaveGenerator(address=53);
case 26:
                                        return var2;
case 27:
                                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                        if(var5) { _fun0010_ip = 28; continue _fun0010 }
case 29:
                                        var5 = _closure2_slot3;
                                        var5 = var5.bind(var3)(var2);
                                        var5 = _closure2_slot5;
                                        var4 = true;
                                        var4 = var5.bind(var3)(var4);
                                        return var3;
case 28:
                                        return var2;
case 24:
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
                        if(var3) { _fun0009_ip = 30; continue _fun0009 }
case 31:
                        var2 = var2.bind(var1)();
case 30:
                        return var1;
                    }
                };
                var3 = var8.bind(var9)(var3, var6);
                var6 = var27.guild_id;
                var3 = var7.getGuildId;
                var3 = var3.bind(var7)();
                var6 = var6 === var3;
                var3 = var21 != var19;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var20 = 18;
                var7 = var8[var20];
                var7 = var9.bind(var5)(var7);
                var11 = var7.intl;
                if(var1) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                if(var15) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                if(var3) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                var10 = var11.format;
                var1 = var8[var20];
                var1 = var9.bind(var5)(var1);
                var1 = var1.t;
                var7 = var1.hGWuxc;
                var1 = {};
                var12 = function openPremiumSettings() {
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 29;
                    var2 = var4[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var2 = var5.hideActionSheet;
                    var2 = var2.bind(var5)();
                    var2 = 17;
                    var2 = var4[var2];
                    var8 = var3.bind(var1)(var2);
                    var7 = var8.track;
                    var2 = _closure1_slot16;
                    var3 = var2.PREMIUM_PROMOTION_OPENED;
                    var2 = {};
                    var9 = _closure2_slot6;
                    var9 = var9.page;
                    var2['location_page'] = var9;
                    var9 = _closure2_slot6;
                    var9 = var9.section;
                    var2['location_section'] = var9;
                    var2 = var7.bind(var8)(var3, var2);
                    var3 = _closure1_slot0;
                    var2 = 30;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openUserSettings;
                    var2 = {};
                    var6 = _closure1_slot18;
                    var6 = var6.PREMIUM;
                    var2['screen'] = var6;
                    var5 = _closure2_slot6;
                    var2['analyticsLocation'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['openPremiumSettings'] = var12;
                var24 = var10.bind(var11)(var7, var1);
                var1 = 'Custom Sticker Popout (Soft Upsell)';
                var7 = false;
                _fun0007_ip = 38; continue _fun0007;
case 36:
                var12 = var11.string;
                var10 = var8[var20];
                var10 = var9.bind(var5)(var10);
                var10 = var10.t;
                var10 = var10.IuXYcn;
                var24 = var12.bind(var11)(var10);
                var7 = true;
                var1 = 'Custom Sticker Popout (Upsell)';
                _fun0007_ip = 38; continue _fun0007;
case 34:
                var12 = var11.string;
                var10 = var8[var20];
                var10 = var9.bind(var5)(var10);
                var10 = var10.t;
                if(var6) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                var17 = var10.lyD5ZW;
                var24 = var12.bind(var11)(var17);
                var7 = true;
                var1 = 'Custom Sticker Popout (Upsell)';
                _fun0007_ip = 38; continue _fun0007;
case 39:
                var10 = var10.jNphpq;
                var24 = var12.bind(var11)(var10);
                var7 = true;
                var1 = 'Custom Sticker Popout (Upsell)';
                _fun0007_ip = 38; continue _fun0007;
case 32:
                var10 = var11.string;
                var8 = var8[var20];
                var8 = var9.bind(var5)(var8);
                var8 = var8.t;
                if(var15) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                if(var3) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                var9 = var8.vZaScH;
                var9 = var10.bind(var11)(var9);
                _fun0007_ip = 45; continue _fun0007;
case 43:
                var12 = var8.yHmoR0;
                var9 = var10.bind(var11)(var12);
case 45:
                _fun0007_ip = 46; continue _fun0007;
case 41:
                if(var6) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                var6 = var8.1f6D9v;
                var6 = var10.bind(var11)(var6);
                _fun0007_ip = 49; continue _fun0007;
case 47:
                var8 = var8.fZ0DiI;
                var6 = var10.bind(var11)(var8);
case 49:
                var9 = var6;
case 46:
                var7 = false;
                var1 = 'Custom Sticker Popout';
                var24 = var9;
case 38:
                var17 = !var7;
                if(var7) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                var17 = !var15;
case 50:
                if(!var17) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                var17 = var3;
case 52:
                var3 = {};
                var3['popoutAnalyticsConfig'] = var4;
                var3['popoutType'] = var1;
                _closure2_slot7 = var3;
                var6 = _closure1_slot5;
                var1 = var6.useRef;
                var1 = var1.bind(var6)(var3);
                _closure2_slot8 = var1;
                var3 = var6.useEffect;
                var1 = function() {
                    var2 = _closure2_slot8;
                    var1 = _closure2_slot7;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var1 = var3.bind(var6)(var1);
                var4 = var6.useEffect;
                var3 = new Array(1);
                var3[0] = var2;
                var1 = function() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var2 = _closure2_slot8;
                        var2 = var2.current;
                        var5 = var2.popoutAnalyticsConfig;
                        var6 = var2.popoutType;
                        var1 = _closure2_slot4;
                        if(!var1) { _fun0011_ip = 7; continue _fun0011 }
case 54:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 17;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.track;
                        var1 = _closure1_slot16;
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
                if(!var2) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                var4 = _closure1_slot22;
                var3 = _closure1_slot21;
                var2 = {};
                var8 = _closure1_slot6;
                var6 = {};
                var9 = var13.guildEmojiTopContainer;
                var6['style'] = var9;
                var23 = _closure1_slot20;
                var10 = _closure1_slot1;
                var25 = _closure1_slot2;
                var9 = 31;
                var9 = var25[var9];
                var10 = var10.bind(var5)(var9);
                var9 = {};
                var9['sticker'] = var27;
                var11 = 48;
                var9['size'] = var11;
                var10 = var23.bind(var5)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var10 = {};
                var11 = var13.guildEmojiDescription;
                var10['style'] = var11;
                var22 = _closure1_slot0;
                var12 = 19;
                var11 = var25[var12];
                var11 = var22.bind(var5)(var11);
                var26 = var11.Text;
                var11 = {'variant': 'heading-md/extrabold', 'color': 'header-primary'};
                var27 = var27.name;
                var11['children'] = var27;
                var26 = var23.bind(var5)(var26, var11);
                var11 = new Array(2);
                var11[0] = var26;
                var12 = var25[var12];
                var12 = var22.bind(var5)(var12);
                var22 = var12.Text;
                var12 = {};
                var25 = var13.description;
                var12['style'] = var25;
                var25 = 'text-sm/medium';
                var12['variant'] = var25;
                var12['children'] = var24;
                var12 = var23.bind(var5)(var22, var12);
                var11[1] = var12;
                var10['children'] = var11;
                var10 = var4.bind(var5)(var8, var10);
                var9[1] = var10;
                var6['children'] = var9;
                var8 = var4.bind(var5)(var8, var6);
                var6 = new Array(4);
                var6[0] = var8;
                if(!var7) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                var10 = _closure1_slot22;
                var9 = _closure1_slot21;
                var8 = {};
                var23 = _closure1_slot20;
                var26 = _closure1_slot0;
                var27 = _closure1_slot2;
                var11 = 21;
                var11 = var27[var11];
                var11 = var26.bind(var5)(var11);
                var12 = var11.Button;
                var11 = {};
                var22 = 'experimental_premium-primary';
                var11['variant'] = var22;
                var22 = 32;
                var22 = var27[var22];
                var22 = var26.bind(var5)(var22);
                var24 = var22.NitroWheelIcon;
                var22 = {};
                var25 = 'white';
                var22['color'] = var25;
                var22 = var23.bind(var5)(var24, var22);
                var11['icon'] = var22;
                var22 = var27[var20];
                var22 = var26.bind(var5)(var22);
                var25 = var22.intl;
                var24 = var25.string;
                var22 = var27[var20];
                var22 = var26.bind(var5)(var22);
                var22 = var22.t;
                var22 = var22.gl/XHB;
                var22 = var24.bind(var25)(var22);
                var11['text'] = var22;
                var22 = function onPress() {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 33;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = _closure2_slot6;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var11['onPress'] = var22;
                var12 = var23.bind(var5)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var22 = _closure1_slot6;
                var12 = {};
                var24 = {};
                var26 = _closure1_slot1;
                var25 = 13;
                var25 = var27[var25];
                var25 = var26.bind(var5)(var25);
                var25 = var25.spacing;
                var25 = var25.PX_16;
                var24['height'] = var25;
                var12['style'] = var24;
                var12 = var23.bind(var5)(var22, var12);
                var11[1] = var12;
                var8['children'] = var11;
                var7 = var10.bind(var5)(var9, var8);
case 57:
                var6[1] = var7;
                var7 = var17;
                if(!var7) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                var10 = _closure1_slot22;
                var9 = _closure1_slot21;
                var8 = {};
                var22 = _closure1_slot20;
                var27 = _closure1_slot0;
                var26 = _closure1_slot2;
                var11 = 21;
                var11 = var26[var11];
                var11 = var27.bind(var5)(var11);
                var12 = var11.Button;
                var11 = {};
                var23 = var26[var20];
                var23 = var27.bind(var5)(var23);
                var25 = var23.intl;
                var24 = var25.string;
                var23 = var26[var20];
                var23 = var27.bind(var5)(var23);
                var23 = var23.t;
                var23 = var23.riu2R0;
                var23 = var24.bind(var25)(var23);
                var11['text'] = var23;
                var14 = function onPress() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var4 = _closure2_slot2;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0012_ip = 61; continue _fun0012 }
case 62:
                        var2 = _closure2_slot2;
                        var4 = var2.id;
                        var _closure3_slot0 = var4;
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 27;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var5.bind(var2)(var3);
                        var2 = var3.joinGuild;
                        var3 = var2.bind(var3)(var4);
                        var2 = var3.then;
                        var1 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 27;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.transitionToGuildSync;
                            var2 = _closure3_slot0;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
case 61:
                        var1 = undefined;
                        return var1;
                    }
                };
                var11['onPress'] = var14;
                var12 = var22.bind(var5)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var14 = _closure1_slot6;
                var12 = {};
                var23 = {};
                var25 = _closure1_slot1;
                var24 = 13;
                var24 = var26[var24];
                var24 = var25.bind(var5)(var24);
                var24 = var24.spacing;
                var24 = var24.PX_16;
                var23['height'] = var24;
                var12['style'] = var23;
                var12 = var22.bind(var5)(var14, var12);
                var11[1] = var12;
                var8['children'] = var11;
                var7 = var10.bind(var5)(var9, var8);
case 59:
                var6[2] = var7;
                var7 = var21 != var18;
                if(var7) { _fun0007_ip = 63; continue _fun0007 }
case 64:
                var7 = var21 != var19;
case 63:
                if(!var7) { _fun0007_ip = 65; continue _fun0007 }
case 66:
                var10 = _closure1_slot22;
                var9 = _closure1_slot21;
                var8 = {};
                var14 = _closure1_slot20;
                var12 = _closure1_slot0;
                var22 = _closure1_slot2;
                var11 = 34;
                var11 = var22[var11];
                var11 = var12.bind(var5)(var11);
                var12 = var11.FormDivider;
                var11 = {};
                var13 = var13.divider;
                var11['style'] = var13;
                var12 = var14.bind(var5)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var13 = _closure1_slot1;
                var12 = 35;
                var12 = var22[var12];
                var13 = var13.bind(var5)(var12);
                var12 = {};
                if(!(var21 != var19)) { _fun0007_ip = 67; continue _fun0007 }
case 68:
                var18 = var19;
case 67:
                var12['guild'] = var18;
                var12['showingJoinGuildCta'] = var17;
                var12['hasJoinedGuild'] = var15;
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var17 = var16[var20];
                var17 = var19.bind(var5)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var20];
                var16 = var19.bind(var5)(var16);
                var16 = var16.t;
                if(var15) { _fun0007_ip = 69; continue _fun0007 }
case 70:
                var15 = var16.pDE7GR;
                var15 = var17.bind(var18)(var15);
                _fun0007_ip = 71; continue _fun0007;
case 69:
                var16 = var16.kx6pEB;
                var15 = var17.bind(var18)(var16);
case 71:
                var12['title'] = var15;
                var12 = var14.bind(var5)(var13, var12);
                var11[1] = var12;
                var8['children'] = var11;
                var7 = var10.bind(var5)(var9, var8);
case 65:
                var6[3] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 55:
                return var1;
            }
        };
        var _closure1_slot25 = var4;
        var4 = function UnavailableStickerDetail(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = arg1;
                var15 = var1.renderableSticker;
                var1 = var1.channel;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot23;
                var4 = undefined;
                var13 = var2.bind(var4)();
                var3 = _closure1_slot9;
                var2 = var3.getCurrentUser;
                var5 = var2.bind(var3)();
                var6 = _closure1_slot1;
                var14 = _closure1_slot2;
                var2 = 25;
                var2 = var14[var2];
                var3 = var6.bind(var4)(var2);
                var2 = var3.canUseCustomStickersEverywhere;
                var11 = var2.bind(var3)(var5);
                var5 = _closure1_slot5;
                var3 = var5.useMemo;
                var1 = var1.guild_id;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var1 = {};
                        var2 = _closure2_slot0;
                        var3 = var2.guild_id;
                        var2 = null;
                        if(!(var2 == var3)) { _fun0014_ip = 4; continue _fun0014 }
case 5:
                        var2 = _closure1_slot14;
                        var2 = var2.DM_CHANNEL;
                        _fun0014_ip = 6; continue _fun0014;
case 4:
                        var3 = _closure1_slot14;
                        var2 = var3.GUILD_CHANNEL;
case 6:
                        var1['page'] = var2;
                        var2 = _closure1_slot15;
                        var2 = var2.STICKER_POPOUT;
                        var1['section'] = var2;
                        return var1;
                    }
                };
                var1 = var3.bind(var5)(var1, var2);
                var _closure2_slot1 = var1;
                var3 = _closure1_slot22;
                var2 = _closure1_slot6;
                var1 = {};
                var5 = var13.guildEmojiTopContainer;
                var1['style'] = var5;
                var10 = _closure1_slot20;
                var5 = 31;
                var5 = var14[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5['sticker'] = var15;
                var7 = 48;
                var5['size'] = var7;
                var6 = var10.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var7 = var13.guildEmojiDescription;
                var6['style'] = var7;
                var9 = _closure1_slot0;
                var7 = 19;
                var7 = var14[var7];
                var7 = var9.bind(var4)(var7);
                var8 = var7.Text;
                var7 = {'variant': 'heading-md/extrabold', 'color': 'header-primary'};
                var15 = var15.name;
                var7['children'] = var15;
                var8 = var10.bind(var4)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var8 = 36;
                var8 = var14[var8];
                var8 = var9.bind(var4)(var8);
                var9 = var8.TextWithIOSLinkWorkaround;
                var8 = {};
                var13 = var13.description;
                var8['style'] = var13;
                var13 = 'text-sm/medium';
                var8['variant'] = var13;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 18;
                var13 = var16[var12];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                if(var11) { _fun0013_ip = 72; continue _fun0013 }
case 73:
                var17 = var14.format;
                var11 = var16[var12];
                var11 = var15.bind(var4)(var11);
                var11 = var11.t;
                var13 = var11.hGWuxc;
                var11 = {};
                var18 = function openPremiumSettings() {
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 29;
                    var2 = var4[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var2 = var5.hideActionSheet;
                    var2 = var2.bind(var5)();
                    var2 = 17;
                    var2 = var4[var2];
                    var8 = var3.bind(var1)(var2);
                    var7 = var8.track;
                    var2 = _closure1_slot16;
                    var3 = var2.PREMIUM_PROMOTION_OPENED;
                    var2 = {};
                    var5 = _closure2_slot1;
                    var9 = var5.page;
                    var2['location_page'] = var9;
                    var9 = var5.section;
                    var2['location_section'] = var9;
                    var2 = var7.bind(var8)(var3, var2);
                    var3 = _closure1_slot0;
                    var2 = 30;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openUserSettings;
                    var2 = {};
                    var6 = _closure1_slot18;
                    var6 = var6.PREMIUM;
                    var2['screen'] = var6;
                    var2['analyticsLocation'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var11['openPremiumSettings'] = var18;
                var11 = var17.bind(var14)(var13, var11);
                _fun0013_ip = 74; continue _fun0013;
case 72:
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.vZaScH;
                var11 = var13.bind(var14)(var12);
case 74:
                var8['children'] = var11;
                var8 = var10.bind(var4)(var9, var8);
                var7[1] = var8;
                var6['children'] = var7;
                var6 = var3.bind(var4)(var2, var6);
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot26 = var4;
        var4 = var7.memo;
        var2 = function StickerDetailActionSheet(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var1 = arg1;
                var10 = var1.renderableSticker;
                var9 = var1.channel;
                var12 = var1.chatInputRef;
                var1 = _closure1_slot23;
                var4 = undefined;
                var8 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 15;
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
                var7 = _closure1_slot20;
                var2 = _closure1_slot7;
                var1 = {};
                var11 = 'large';
                var1['size'] = var11;
                var1 = var7.bind(var4)(var2, var1);
                var2 = null;
                if(!(var2 == var13)) { _fun0015_ip = 75; continue _fun0015 }
case 76:
                if(var3) { _fun0015_ip = 77; continue _fun0015 }
case 75:
                var7 = var1;
                if(!(var2 != var13)) { _fun0015_ip = 78; continue _fun0015 }
case 79:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var11 = 37;
                var2 = var2[var11];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isStandardSticker;
                var2 = var2.bind(var3)(var13);
                if(var2) { _fun0015_ip = 80; continue _fun0015 }
case 81:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var11];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isGuildSticker;
                var2 = var2.bind(var3)(var13);
                if(!var2) { _fun0015_ip = 82; continue _fun0015 }
case 83:
                var11 = _closure1_slot20;
                var3 = _closure1_slot25;
                var2 = {};
                var2['sticker'] = var13;
                var2['channel'] = var9;
                var1 = var11.bind(var4)(var3, var2);
case 82:
                _fun0015_ip = 84; continue _fun0015;
case 80:
                var11 = _closure1_slot20;
                var3 = _closure1_slot24;
                var2 = {};
                var2['sticker'] = var13;
                var2['channel'] = var9;
                var2['chatInputRef'] = var12;
                var1 = var11.bind(var4)(var3, var2);
case 84:
                var7 = var1;
                _fun0015_ip = 78; continue _fun0015;
case 77:
                var3 = _closure1_slot20;
                var2 = _closure1_slot26;
                var1 = {};
                var1['renderableSticker'] = var10;
                var1['channel'] = var9;
                var7 = var3.bind(var4)(var2, var1);
case 78:
                var3 = _closure1_slot20;
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 38;
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
        var4 = 39;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/stickers/native/StickerDetailActionSheet.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();