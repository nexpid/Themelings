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
        var1 = function StandardStickerDetail(arg1) {
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
                var6 = 22;
                var3 = var8[var6];
                var12 = var7.bind(var5)(var3);
                var11 = var12.useStateFromStores;
                var3 = _closure1_slot11;
                var10 = new Array(1);
                var10[0] = var3;
                var3 = function() {
                    var3 = _closure1_slot11;
                    var2 = var3.getStickerPack;
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var11.bind(var12)(var10, var3);
                var _closure2_slot5 = var3;
                var6 = var8[var6];
                var12 = var7.bind(var5)(var6);
                var11 = var12.useStateFromStores;
                var6 = _closure1_slot11;
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
                var12 = var7 - var6;
                var _closure2_slot7 = var12;
                var6 = global;
                var8 = var6.Math;
                var7 = var8.floor;
                var11 = var6.Math;
                var10 = var11.min;
                var9 = _closure1_slot20;
                var6 = _closure1_slot13;
                var6 = var12 - var6;
                var9 = var10.bind(var11)(var9, var6);
                var10 = _closure1_slot14;
                var6 = _closure1_slot13;
                var6 = var10 + var6;
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
                        if(!(var2 == var3)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                        var2 = _closure1_slot15;
                        var2 = var2.DM_CHANNEL;
                        _fun0003_ip = 4; continue _fun0003;
case 2:
                        var3 = _closure1_slot15;
                        var2 = var3.GUILD_CHANNEL;
case 4:
                        var1['page'] = var2;
                        var2 = _closure1_slot16;
                        var2 = var2.STICKER_POPOUT;
                        var1['section'] = var2;
                        return var1;
                    }
                };
                var4 = var7.bind(var8)(var4, var6);
                var _closure2_slot9 = var4;
                var8 = _closure1_slot5;
                var7 = var8.useEffect;
                var6 = new Array(2);
                var6[0] = var4;
                var6[1] = var3;
                var4 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = _closure2_slot5;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0004_ip = 5; continue _fun0004 }
case 6:
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
case 5:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4 = var7.bind(var8)(var4, var6);
                var4 = null;
                if(!(var4 != var3)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
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
                        if(var2) { _fun0005_ip = 9; continue _fun0005 }
case 10:
                        var8 = var1.OzB6e3;
                        var2 = {};
                        var9 = var12.name;
                        var2['stickerPackName'] = var9;
                        var14 = var3.bind(var5)(var8, var2);
                        _fun0005_ip = 11; continue _fun0005;
case 9:
                        var2 = var1.auckXz;
                        var1 = {};
                        var8 = var12.name;
                        var1['stickerPackName'] = var8;
                        var14 = var3.bind(var5)(var2, var1);
case 11:
                        var3 = _closure1_slot23;
                        var2 = _closure1_slot22;
                        var1 = {};
                        var16 = _closure1_slot21;
                        var9 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var8 = 18;
                        var5 = var13[var8];
                        var5 = var9.bind(var4)(var5);
                        var11 = var5.Text;
                        var5 = {'variant': 'heading-md/extrabold', 'color': 'mobile-text-heading-primary'};
                        var17 = _closure2_slot4;
                        var5['children'] = var17;
                        var11 = var16.bind(var4)(var11, var5);
                        var5 = new Array(5);
                        var5[0] = var11;
                        var11 = _closure1_slot21;
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
                        var11 = _closure1_slot21;
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
                        if(!var9) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                        var12 = _closure1_slot21;
                        var11 = _closure1_slot6;
                        var9 = {};
                        var13 = {};
                        var16 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var14 = 13;
                        var14 = var17[var14];
                        var14 = var16.bind(var4)(var14);
                        var14 = var14.space;
                        var14 = var14.PX_16;
                        var13['height'] = var14;
                        var9['style'] = var13;
                        var8 = var12.bind(var4)(var11, var9);
case 12:
                        var5[3] = var8;
                        var6 = _closure2_slot6;
                        if(!var6) { _fun0005_ip = 14; continue _fun0005 }
case 15:
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
                                if(!(var5 != var2)) { _fun0006_ip = 16; continue _fun0006 }
case 4:
                                var4 = _closure2_slot6;
                                if(!var4) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                                var4 = _closure2_slot1;
                                if(!(var5 == var4)) { _fun0006_ip = 18; continue _fun0006 }
case 16:
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
                                _fun0006_ip = 19; continue _fun0006;
case 18:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var3 = 28;
                                var3 = var5[var3];
                                var5 = var4.bind(var1)(var3);
                                var4 = var5.openStickerPickerToPackId;
                                var3 = _closure2_slot1;
                                var2 = _closure2_slot3;
                                var2 = var4.bind(var5)(var3, var2);
case 19:
                                return var1;
                            }
                        };
                        var7['onPress'] = var10;
                        var6 = var9.bind(var4)(var8, var7);
case 14:
                        var5[4] = var6;
                        var1['children'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    }
                };
                var1 = var1.bind(var5)(var3);
                _fun0002_ip = 20; continue _fun0002;
case 7:
                var4 = _closure1_slot21;
                var3 = _closure1_slot7;
                var2 = {};
                var6 = 'large';
                var2['size'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 20:
                return var1;
            }
        };
        var _closure1_slot26 = var1;
        var1 = function UnavailableStickerDetail(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var20 = var1.renderableSticker;
                var1 = var1.channel;
                var _closure2_slot0 = var1;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var2 = _closure1_slot24;
                var12 = var2.bind(var4)();
                var3 = _closure1_slot10;
                var2 = var3.getCurrentUser;
                var7 = var2.bind(var3)();
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 30;
                var5 = var3[var5];
                var6 = var2.bind(var4)(var5);
                var5 = var6.canUseCustomStickersEverywhere;
                var19 = var5.bind(var6)(var7);
                var7 = _closure1_slot5;
                var6 = var7.useMemo;
                var1 = var1.guild_id;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = {};
                        var2 = _closure2_slot0;
                        var3 = var2.guild_id;
                        var2 = null;
                        if(!(var2 == var3)) { _fun0008_ip = 2; continue _fun0008 }
case 3:
                        var2 = _closure1_slot15;
                        var2 = var2.DM_CHANNEL;
                        _fun0008_ip = 4; continue _fun0008;
case 2:
                        var3 = _closure1_slot15;
                        var2 = var3.GUILD_CHANNEL;
case 4:
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
                if(!var6) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                var6 = var1;
case 21:
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = 33;
                var1 = var17[var1];
                var2 = var16.bind(var4)(var1);
                var1 = var2.getStickerAssetUrl;
                var8 = var1.bind(var2)(var20);
                _closure2_slot2 = var8;
                var5 = _closure1_slot5;
                var3 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var8;
                var1 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var3 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0009_ip = 23; continue _fun0009 }
case 6:
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
case 23:
                        var1 = undefined;
                        return var1;
                    }
                };
                var10 = var3.bind(var5)(var1, var2);
                var3 = _closure1_slot23;
                var2 = _closure1_slot6;
                var1 = {};
                var5 = var12.guildEmojiTopContainer;
                var1['style'] = var5;
                var9 = _closure1_slot21;
                var7 = _closure1_slot1;
                var5 = 40;
                var5 = var17[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var5['sticker'] = var20;
                var11 = 48;
                var5['size'] = var11;
                var7 = var9.bind(var4)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var11 = _closure1_slot23;
                var9 = _closure1_slot6;
                var7 = {};
                var14 = var12.guildEmojiDescription;
                var7['style'] = var14;
                var18 = _closure1_slot21;
                var14 = 18;
                var14 = var17[var14];
                var14 = var16.bind(var4)(var14);
                var15 = var14.Text;
                var14 = {'variant': 'heading-md/extrabold', 'color': 'mobile-text-heading-primary'};
                var20 = var20.name;
                var14['children'] = var20;
                var14 = var18.bind(var4)(var15, var14);
                var15 = new Array(2);
                var15[0] = var14;
                var18 = _closure1_slot21;
                var14 = 46;
                var14 = var17[var14];
                var14 = var16.bind(var4)(var14);
                var17 = var14.TextWithIOSLinkWorkaround;
                var16 = {};
                var14 = var12.description;
                var16['style'] = var14;
                var14 = 'text-sm/medium';
                var16['variant'] = var14;
                var23 = _closure1_slot0;
                var20 = _closure1_slot2;
                var14 = 19;
                var21 = var20[var14];
                var21 = var23.bind(var4)(var21);
                var22 = var21.intl;
                if(var19) { _fun0007_ip = 24; continue _fun0007 }
case 25:
                var24 = var22.format;
                var19 = var20[var14];
                var19 = var23.bind(var4)(var19);
                var19 = var19.t;
                var21 = var19.hGWuxU;
                var19 = {};
                var25 = function openPremiumSettings() {
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 17;
                    var2 = var4[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var2 = var6.hideActionSheet;
                    var2 = var2.bind(var6)();
                    var2 = 24;
                    var2 = var4[var2];
                    var8 = var3.bind(var1)(var2);
                    var7 = var8.track;
                    var2 = _closure1_slot17;
                    var3 = var2.PREMIUM_PROMOTION_OPENED;
                    var2 = {};
                    var6 = _closure2_slot1;
                    var9 = var6.page;
                    var2['location_page'] = var9;
                    var9 = var6.section;
                    var2['location_section'] = var9;
                    var2 = var7.bind(var8)(var3, var2);
                    var3 = _closure1_slot0;
                    var2 = 39;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openUserSettings;
                    var2 = {};
                    var5 = _closure1_slot19;
                    var5 = var5.PREMIUM;
                    var2['screen'] = var5;
                    var5 = {};
                    var5['analyticsLocation'] = var6;
                    var2['params'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var19['openPremiumSettings'] = var25;
                var19 = var24.bind(var22)(var21, var19);
                _fun0007_ip = 26; continue _fun0007;
case 24:
                var21 = var22.string;
                var20 = var20[var14];
                var20 = var23.bind(var4)(var20);
                var20 = var20.t;
                var20 = var20.vZaScH;
                var19 = var21.bind(var22)(var20);
case 26:
                var16['children'] = var19;
                var16 = var18.bind(var4)(var17, var16);
                var15[1] = var16;
                var7['children'] = var15;
                var7 = var11.bind(var4)(var9, var7);
                var5[1] = var7;
                if(!var6) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                var7 = null;
                var6 = var7 != var8;
case 27:
                if(!var6) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                var9 = _closure1_slot21;
                var8 = _closure1_slot8;
                var7 = {};
                var11 = _closure1_slot0;
                var15 = _closure1_slot2;
                var16 = var15[var14];
                var16 = var11.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var14 = var15[var14];
                var14 = var11.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.PdRCRg;
                var14 = var16.bind(var17)(var14);
                var7['accessibilityLabel'] = var14;
                var12 = var12.moreMenuIcon;
                var7['style'] = var12;
                var7['onPress'] = var10;
                var12 = _closure1_slot21;
                var10 = 41;
                var10 = var15[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.MoreHorizontalIcon;
                var10 = {};
                var14 = _closure1_slot1;
                var13 = 13;
                var13 = var15[var13];
                var13 = var14.bind(var4)(var13);
                var13 = var13.colors;
                var13 = var13.INTERACTIVE_TEXT_DEFAULT;
                var10['color'] = var13;
                var10 = var12.bind(var4)(var11, var10);
                var7['children'] = var10;
                var6 = var9.bind(var4)(var8, var7);
case 29:
                var5[2] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot27 = var1;
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
        if(!var15) { _fun0001_ip = 31; continue _fun0001 }
case 32:
        var11 = var14;
case 31:
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
        var14 = var14.space;
        var14 = var14.PX_12;
        var10['marginTop'] = var14;
        var4['buttonContainer'] = var10;
        var10 = {'paddingLeft': 16, 'flex': 1};
        var4['guildEmojiDescription'] = var10;
        var10 = {};
        var10['marginLeft'] = var13;
        var13 = var6[var11];
        var13 = var12.bind(var1)(var13);
        var13 = var13.space;
        var13 = var13.PX_16;
        var10['marginTop'] = var13;
        var13 = var6[var11];
        var13 = var12.bind(var1)(var13);
        var13 = var13.space;
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
        var13 = var13.space;
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
        var4 = function GuildStickerDetail(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = arg1;
                var9 = var1.sticker;
                var _closure2_slot0 = var9;
                var13 = var1.channel;
                var _closure2_slot1 = var13;
                var3 = undefined;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var _closure2_slot16 = var3;
                var _closure2_slot17 = var3;
                var _closure2_slot18 = var3;
                var _closure2_slot19 = var3;
                var1 = _closure1_slot24;
                var1 = var1.bind(var3)();
                var _closure2_slot2 = var1;
                var6 = _closure1_slot5;
                var4 = var6.useState;
                var1 = null;
                var6 = var4.bind(var6)(var1);
                var4 = _closure1_slot4;
                var12 = 2;
                var6 = var4.bind(var3)(var6, var12);
                var4 = 0;
                var8 = var6[var4];
                var _closure2_slot3 = var8;
                var7 = 1;
                var6 = var6[var7];
                var _closure2_slot4 = var6;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 22;
                var6 = var11[var6];
                var14 = var10.bind(var3)(var6);
                var11 = var14.useStateFromStores;
                var6 = _closure1_slot9;
                var10 = new Array(1);
                var10[0] = var6;
                var6 = function() {
                    var3 = _closure1_slot9;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var1 = var1.guild_id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var11 = var11.bind(var14)(var10, var6);
                var _closure2_slot5 = var11;
                var10 = var1 != var11;
                var _closure2_slot6 = var10;
                var6 = var1 == var11;
                if(var6) { _fun0010_ip = 33; continue _fun0010 }
case 34:
                var15 = var11.features;
                var14 = var15.has;
                var11 = _closure1_slot18;
                var11 = var11.DISCOVERABLE;
                var6 = var14.bind(var15)(var11);
case 33:
                var14 = _closure1_slot5;
                var11 = var14.useState;
                var6 = !var6;
                var11 = var11.bind(var14)(var6);
                var6 = _closure1_slot4;
                var6 = var6.bind(var3)(var11, var12);
                var4 = var6[var4];
                _closure2_slot7 = var4;
                var6 = var6[var7];
                _closure2_slot8 = var6;
                var7 = _closure1_slot10;
                var6 = var7.getCurrentUser;
                var12 = var6.bind(var7)();
                var11 = _closure1_slot1;
                var15 = _closure1_slot2;
                var6 = 30;
                var6 = var15[var6];
                var7 = var11.bind(var3)(var6);
                var6 = var7.canUseCustomStickersEverywhere;
                var6 = var6.bind(var7)(var12);
                var7 = 31;
                var7 = var15[var7];
                var16 = var11.bind(var3)(var7);
                var14 = var16.useExperiment;
                var11 = {};
                var7 = 'StickerDetailActionSheet';
                var11['location'] = var7;
                var7 = {};
                var12 = false;
                var7['autoTrackExposure'] = var12;
                var7 = var14.bind(var16)(var11, var7);
                var7 = var7.tidaWebformEnabled;
                var14 = _closure1_slot0;
                var11 = 32;
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var14 = var11.DeveloperMode;
                var11 = var14.useSetting;
                var11 = var11.bind(var14)();
                var15 = var9.id;
                var14 = function useStickerFavorite(arg1) {
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
                    var8 = _closure1_slot5;
                    var6 = var8.useCallback;
                    var5 = new Array(1);
                    var5[0] = var2;
                    var2 = function(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var2 = arg1;
                            var3 = {};
                            var4 = _closure3_slot1;
                            var7 = var4.starIcon;
                            var8 = var3;
                            var1 = copyDataProperties(var8, var7);
                            if(var2) { _fun0011_ip = 35; continue _fun0011 }
case 36:
                            var7 = var4.starIconUnselected;
                            var8 = var3;
                            var1 = copyDataProperties(var8, var7);
                            var1 = var3;
                            _fun0011_ip = 37; continue _fun0011;
case 35:
                            var7 = var4.starIconSelected;
                            var8 = var3;
                            var4 = copyDataProperties(var8, var7);
                            var1 = var3;
case 37:
                            var4 = _closure1_slot21;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            if(var2) { _fun0011_ip = 38; continue _fun0011 }
case 39:
                            var2 = 16;
                            var3 = var5[var2];
                            var2 = undefined;
                            var2 = var6.bind(var2)(var3);
                            var3 = var2.StarOutlineIcon;
                            _fun0011_ip = 11; continue _fun0011;
case 38:
                            var2 = 15;
                            var5 = var5[var2];
                            var2 = undefined;
                            var2 = var6.bind(var2)(var5);
                            var3 = var2.StarIcon;
case 11:
                            var2 = {};
                            var2['style'] = var1;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        }
                    };
                    var2 = var6.bind(var8)(var2, var5);
                    var _closure3_slot3 = var2;
                    var6 = _closure1_slot5;
                    var5 = var6.useCallback;
                    var3 = new Array(3);
                    var3[0] = var4;
                    var3[1] = var7;
                    var3[2] = var2;
                    var1 = function() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var5 = function content() {
                                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
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
                                    if(var5) { _fun0013_ip = 40; continue _fun0013 }
case 41:
                                    var5 = var6.mE2e8A;
                                    var5 = var7.bind(var8)(var5);
                                    _fun0013_ip = 42; continue _fun0013;
case 40:
                                    var6 = var6.in1rga;
                                    var5 = var7.bind(var8)(var6);
case 42:
                                    var1['children'] = var5;
                                    var1 = var4.bind(var3)(var2, var1);
                                    return var1;
                                }
                            };
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 17;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.hideActionSheet;
                            var3 = var3.bind(var4)();
                            var7 = _closure3_slot2;
                            var9 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var8 = 20;
                            var8 = var4[var8];
                            var8 = var9.bind(var1)(var8);
                            if(var7) { _fun0012_ip = 43; continue _fun0012 }
case 44:
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
                            _fun0012_ip = 45; continue _fun0012;
case 43:
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
case 45:
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
                var14 = var14.bind(var3)(var15);
                var15 = var14.isFavorite;
                _closure2_slot9 = var15;
                var14 = var14.handleFavorite;
                _closure2_slot10 = var14;
                if(!var7) { _fun0010_ip = 46; continue _fun0010 }
case 47:
                var7 = var11;
case 46:
                _closure2_slot11 = var7;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var7 = 33;
                var7 = var17[var7];
                var11 = var16.bind(var3)(var7);
                var7 = var11.getStickerAssetUrl;
                var7 = var7.bind(var11)(var9);
                _closure2_slot12 = var7;
                var15 = _closure1_slot5;
                var14 = var15.useCallback;
                var11 = new Array(1);
                var11[0] = var7;
                var7 = function() {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var3 = _closure2_slot12;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0014_ip = 23; continue _fun0014 }
case 6:
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
                        var1 = _closure2_slot12;
                        var3['stickerUrl'] = var1;
                        var10 = 'StickerOptionsActionSheet';
                        var8 = 'stack';
                        var12 = var6;
                        var9 = var3;
                        var1 = var12[var5](var11, var10, var9, var8, var7);
case 23:
                        var1 = undefined;
                        return var1;
                    }
                };
                var7 = var14.bind(var15)(var7, var11);
                _closure2_slot13 = var7;
                var15 = _closure1_slot5;
                var14 = var15.useMemo;
                var7 = var13.guild_id;
                var11 = new Array(1);
                var11[0] = var7;
                var7 = function() {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var1 = {};
                        var2 = _closure2_slot1;
                        var3 = var2.guild_id;
                        var2 = null;
                        if(!(var2 == var3)) { _fun0015_ip = 2; continue _fun0015 }
case 3:
                        var2 = _closure1_slot15;
                        var2 = var2.DM_CHANNEL;
                        _fun0015_ip = 4; continue _fun0015;
case 2:
                        var3 = _closure1_slot15;
                        var2 = var3.GUILD_CHANNEL;
case 4:
                        var1['page'] = var2;
                        var2 = _closure1_slot16;
                        var2 = var2.STICKER_POPOUT;
                        var1['section'] = var2;
                        return var1;
                    }
                };
                var7 = var14.bind(var15)(var7, var11);
                _closure2_slot14 = var7;
                var14 = _closure1_slot5;
                var11 = var14.useRef;
                var7 = {};
                var15 = var13.getGuildId;
                var15 = var15.bind(var13)();
                var7['guild_id'] = var15;
                var15 = 36;
                var15 = var17[var15];
                var16 = var16.bind(var3)(var15);
                var15 = var16.collectChannelAnalyticsMetadata;
                var21 = var15.bind(var16)(var13);
                var22 = var7;
                var15 = copyDataProperties(var22, var21);
                var7 = var11.bind(var14)(var7);
                var7 = var7.current;
                var16 = _closure1_slot5;
                var15 = var16.useEffect;
                var11 = var9.id;
                var14 = new Array(2);
                var14[0] = var11;
                var14[1] = var4;
                var11 = function() {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var2 = function _fetchDiscoverableGuild() {
                            var4 = undefined;
                            var1 = undefined;
                            var3 = _closure1_slot3;
                            var2 = function* () {
                                var1 = function* anon_0_() {
                                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                        if(var2) { _fun0017_ip = 48; continue _fun0017 }
case 49:
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
case 50:
                                        return var2;
case 51:
                                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                        if(var5) { _fun0017_ip = 52; continue _fun0017 }
case 53:
                                        var5 = _closure2_slot4;
                                        var5 = var5.bind(var3)(var2);
                                        var5 = _closure2_slot8;
                                        var4 = true;
                                        var4 = var5.bind(var3)(var4);
                                        return var3;
case 52:
                                        return var2;
case 48:
                                        return var1;
                                    }
                                };
                                return var1;
                            };
                            var4 = var3.bind(var4)(var2);
                            _closure3_slot0 = var4;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var _closure3_slot0 = var2;
                        var2 = _closure2_slot7;
                        if(var2) { _fun0016_ip = 54; continue _fun0016 }
case 55:
                        var2 = function fetchDiscoverableGuild() {
                            var1 = undefined;
                            var4 = _closure3_slot0;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 54:
                        var1 = undefined;
                        return var1;
                    }
                };
                var11 = var15.bind(var16)(var11, var14);
                var11 = var9.guild_id;
                var9 = var13.getGuildId;
                var9 = var9.bind(var13)();
                var13 = var11 === var9;
                var9 = var1 != var8;
                _closure2_slot16 = var12;
                var14 = _closure1_slot0;
                var17 = _closure1_slot2;
                var8 = 19;
                var11 = var17[var8];
                var11 = var14.bind(var3)(var11);
                var16 = var11.intl;
                if(var6) { _fun0010_ip = 56; continue _fun0010 }
case 57:
                if(var10) { _fun0010_ip = 58; continue _fun0010 }
case 59:
                if(var9) { _fun0010_ip = 60; continue _fun0010 }
case 61:
                var15 = var16.format;
                var6 = var17[var8];
                var6 = var14.bind(var3)(var6);
                var6 = var6.t;
                var11 = var6.hGWuxU;
                var6 = {};
                var18 = function openPremiumSettings() {
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 17;
                    var2 = var4[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var2 = var6.hideActionSheet;
                    var2 = var2.bind(var6)();
                    var2 = 24;
                    var2 = var4[var2];
                    var8 = var3.bind(var1)(var2);
                    var7 = var8.track;
                    var2 = _closure1_slot17;
                    var3 = var2.PREMIUM_PROMOTION_OPENED;
                    var2 = {};
                    var9 = _closure2_slot14;
                    var9 = var9.page;
                    var2['location_page'] = var9;
                    var9 = _closure2_slot14;
                    var9 = var9.section;
                    var2['location_section'] = var9;
                    var2 = var7.bind(var8)(var3, var2);
                    var3 = _closure1_slot0;
                    var2 = 39;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openUserSettings;
                    var2 = {};
                    var5 = _closure1_slot19;
                    var5 = var5.PREMIUM;
                    var2['screen'] = var5;
                    var5 = {};
                    var6 = _closure2_slot14;
                    var5['analyticsLocation'] = var6;
                    var2['params'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var6['openPremiumSettings'] = var18;
                var6 = var15.bind(var16)(var11, var6);
                _closure2_slot15 = var6;
                var6 = 'Custom Sticker Popout (Soft Upsell)';
                var11 = false;
                _fun0010_ip = 62; continue _fun0010;
case 60:
                var18 = var16.string;
                var15 = var17[var8];
                var15 = var14.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.IuXYch;
                var15 = var18.bind(var16)(var15);
                _closure2_slot15 = var15;
                var18 = true;
                _closure2_slot16 = var18;
                var6 = 'Custom Sticker Popout (Upsell)';
                var11 = true;
                _fun0010_ip = 62; continue _fun0010;
case 58:
                var18 = var16.string;
                var15 = var17[var8];
                var15 = var14.bind(var3)(var15);
                var15 = var15.t;
                if(var13) { _fun0010_ip = 63; continue _fun0010 }
case 64:
                var19 = var15.lyD5ZW;
                var19 = var18.bind(var16)(var19);
                _closure2_slot15 = var19;
                var20 = true;
                _closure2_slot16 = var20;
                var6 = 'Custom Sticker Popout (Upsell)';
                var11 = true;
                _fun0010_ip = 62; continue _fun0010;
case 63:
                var15 = var15.jNphpt;
                var15 = var18.bind(var16)(var15);
                _closure2_slot15 = var15;
                var18 = true;
                _closure2_slot16 = var18;
                var6 = 'Custom Sticker Popout (Upsell)';
                var11 = true;
                _fun0010_ip = 62; continue _fun0010;
case 56:
                var15 = var16.string;
                var8 = var17[var8];
                var8 = var14.bind(var3)(var8);
                var14 = var8.t;
                if(var10) { _fun0010_ip = 65; continue _fun0010 }
case 66:
                if(var9) { _fun0010_ip = 67; continue _fun0010 }
case 68:
                var8 = var14.vZaScH;
                var8 = var15.bind(var16)(var8);
                _fun0010_ip = 69; continue _fun0010;
case 67:
                var17 = var14.yHmoR9;
                var8 = var15.bind(var16)(var17);
case 69:
                _fun0010_ip = 70; continue _fun0010;
case 65:
                if(var13) { _fun0010_ip = 71; continue _fun0010 }
case 72:
                var13 = var14["1f6D9m"];
                var13 = var15.bind(var16)(var13);
                _fun0010_ip = 73; continue _fun0010;
case 71:
                var14 = var14.fZ0DiG;
                var13 = var15.bind(var16)(var14);
case 73:
                var8 = var13;
case 70:
                _closure2_slot15 = var8;
                var6 = 'Custom Sticker Popout';
                var11 = false;
case 62:
                var8 = !var11;
                if(var11) { _fun0010_ip = 74; continue _fun0010 }
case 75:
                var8 = !var10;
case 74:
                if(!var8) { _fun0010_ip = 76; continue _fun0010 }
case 77:
                var8 = var9;
case 76:
                _closure2_slot17 = var8;
                var8 = {};
                var8['popoutAnalyticsConfig'] = var7;
                var8['popoutType'] = var6;
                _closure2_slot18 = var8;
                var7 = _closure1_slot5;
                var6 = var7.useRef;
                var6 = var6.bind(var7)(var8);
                _closure2_slot19 = var6;
                var8 = _closure1_slot5;
                var7 = var8.useEffect;
                var6 = function() {
                    var2 = _closure2_slot19;
                    var1 = _closure2_slot18;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var6 = var7.bind(var8)(var6);
                var8 = _closure1_slot5;
                var7 = var8.useEffect;
                var6 = new Array(1);
                var6[0] = var4;
                var5 = function() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var2 = _closure2_slot19;
                        var2 = var2.current;
                        var5 = var2.popoutAnalyticsConfig;
                        var6 = var2.popoutType;
                        var1 = _closure2_slot7;
                        if(!var1) { _fun0018_ip = 5; continue _fun0018 }
case 78:
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
case 5:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = var7.bind(var8)(var5, var6);
                var1 = null;
                if(!var4) { _fun0010_ip = 79; continue _fun0010 }
case 80:
                var2 = function upsellContent() {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var4 = _closure1_slot23;
                        var3 = _closure1_slot22;
                        var2 = {};
                        var6 = _closure1_slot6;
                        var5 = {};
                        var16 = _closure2_slot2;
                        var1 = var16.guildEmojiTopContainer;
                        var5['style'] = var1;
                        var9 = _closure1_slot21;
                        var8 = _closure1_slot1;
                        var18 = _closure1_slot2;
                        var1 = 40;
                        var7 = var18[var1];
                        var1 = undefined;
                        var8 = var8.bind(var1)(var7);
                        var7 = {};
                        var21 = _closure2_slot0;
                        var7['sticker'] = var21;
                        var10 = 48;
                        var7['size'] = var10;
                        var8 = var9.bind(var1)(var8, var7);
                        var7 = new Array(3);
                        var7[0] = var8;
                        var10 = _closure1_slot23;
                        var9 = _closure1_slot6;
                        var8 = {};
                        var11 = var16.guildEmojiDescription;
                        var8['style'] = var11;
                        var20 = _closure1_slot21;
                        var14 = _closure1_slot0;
                        var12 = 18;
                        var11 = var18[var12];
                        var11 = var14.bind(var1)(var11);
                        var15 = var11.Text;
                        var11 = {'variant': 'heading-md/extrabold', 'color': 'mobile-text-heading-primary'};
                        var21 = var21.name;
                        var11['children'] = var21;
                        var15 = var20.bind(var1)(var15, var11);
                        var11 = new Array(2);
                        var11[0] = var15;
                        var15 = _closure1_slot21;
                        var12 = var18[var12];
                        var12 = var14.bind(var1)(var12);
                        var14 = var12.Text;
                        var12 = {};
                        var16 = var16.description;
                        var12['style'] = var16;
                        var16 = 'text-sm/medium';
                        var12['variant'] = var16;
                        var16 = _closure2_slot15;
                        var12['children'] = var16;
                        var12 = var15.bind(var1)(var14, var12);
                        var11[1] = var12;
                        var8['children'] = var11;
                        var8 = var10.bind(var1)(var9, var8);
                        var7[1] = var8;
                        var8 = _closure2_slot11;
                        if(!var8) { _fun0019_ip = 81; continue _fun0019 }
case 82:
                        var10 = _closure2_slot12;
                        var9 = null;
                        var8 = var9 != var10;
case 81:
                        if(!var8) { _fun0019_ip = 83; continue _fun0019 }
case 84:
                        var11 = _closure1_slot21;
                        var10 = _closure1_slot8;
                        var9 = {};
                        var14 = _closure1_slot0;
                        var20 = _closure1_slot2;
                        var12 = 19;
                        var15 = var20[var12];
                        var15 = var14.bind(var1)(var15);
                        var16 = var15.intl;
                        var15 = var16.string;
                        var12 = var20[var12];
                        var12 = var14.bind(var1)(var12);
                        var12 = var12.t;
                        var12 = var12.PdRCRg;
                        var12 = var15.bind(var16)(var12);
                        var9['accessibilityLabel'] = var12;
                        var12 = _closure2_slot2;
                        var12 = var12.moreMenuIcon;
                        var9['style'] = var12;
                        var12 = _closure2_slot13;
                        var9['onPress'] = var12;
                        var15 = _closure1_slot21;
                        var12 = 41;
                        var12 = var20[var12];
                        var12 = var14.bind(var1)(var12);
                        var14 = var12.MoreHorizontalIcon;
                        var12 = {};
                        var18 = _closure1_slot1;
                        var16 = 13;
                        var16 = var20[var16];
                        var16 = var18.bind(var1)(var16);
                        var16 = var16.colors;
                        var16 = var16.INTERACTIVE_TEXT_DEFAULT;
                        var12['color'] = var16;
                        var12 = var15.bind(var1)(var14, var12);
                        var9['children'] = var12;
                        var8 = var11.bind(var1)(var10, var9);
case 83:
                        var7[2] = var8;
                        var5['children'] = var7;
                        var6 = var4.bind(var1)(var6, var5);
                        var5 = new Array(5);
                        var5[0] = var6;
                        var6 = _closure2_slot16;
                        if(!var6) { _fun0019_ip = 85; continue _fun0019 }
case 86:
                        var9 = _closure1_slot23;
                        var8 = _closure1_slot6;
                        var7 = {};
                        var10 = _closure2_slot2;
                        var10 = var10.buttonContainer;
                        var7['style'] = var10;
                        var12 = _closure1_slot21;
                        var18 = _closure1_slot1;
                        var20 = _closure1_slot2;
                        var10 = 42;
                        var10 = var20[var10];
                        var11 = var18.bind(var1)(var10);
                        var10 = {};
                        var21 = _closure1_slot0;
                        var14 = 19;
                        var15 = var20[var14];
                        var15 = var21.bind(var1)(var15);
                        var16 = var15.intl;
                        var15 = var16.string;
                        var14 = var20[var14];
                        var14 = var21.bind(var1)(var14);
                        var14 = var14.t;
                        var14 = var14.gl/XHJ;
                        var14 = var15.bind(var16)(var14);
                        var10['text'] = var14;
                        var14 = function onPress() {
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 43;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = _closure2_slot14;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var10['onPress'] = var14;
                        var11 = var12.bind(var1)(var11, var10);
                        var10 = new Array(2);
                        var10[0] = var11;
                        var14 = _closure1_slot21;
                        var12 = _closure1_slot6;
                        var11 = {};
                        var15 = {};
                        var16 = 13;
                        var16 = var20[var16];
                        var16 = var18.bind(var1)(var16);
                        var16 = var16.space;
                        var16 = var16.PX_16;
                        var15['height'] = var16;
                        var11['style'] = var15;
                        var11 = var14.bind(var1)(var12, var11);
                        var10[1] = var11;
                        var7['children'] = var10;
                        var6 = var9.bind(var1)(var8, var7);
case 85:
                        var5[1] = var6;
                        var6 = _closure2_slot17;
                        if(!var6) { _fun0019_ip = 87; continue _fun0019 }
case 88:
                        var9 = _closure1_slot23;
                        var8 = _closure1_slot6;
                        var7 = {};
                        var10 = _closure2_slot2;
                        var10 = var10.buttonContainer;
                        var7['style'] = var10;
                        var12 = _closure1_slot21;
                        var20 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var10 = 26;
                        var10 = var18[var10];
                        var10 = var20.bind(var1)(var10);
                        var11 = var10.Button;
                        var10 = {};
                        var14 = 19;
                        var15 = var18[var14];
                        var15 = var20.bind(var1)(var15);
                        var16 = var15.intl;
                        var15 = var16.string;
                        var14 = var18[var14];
                        var14 = var20.bind(var1)(var14);
                        var14 = var14.t;
                        var14 = var14.riu2R5;
                        var14 = var15.bind(var16)(var14);
                        var10['text'] = var14;
                        var13 = function onPress() {
                            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                                var3 = _closure2_slot3;
                                var2 = null;
                                if(!(var2 != var3)) { _fun0020_ip = 89; continue _fun0020 }
case 6:
                                var1 = _closure2_slot3;
                                var3 = var1.id;
                                var2 = function handleJoinServer(arg1) {
                                    var5 = arg1;
                                    var _closure5_slot0 = var5;
                                    var4 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 37;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var4 = var4.bind(var1)(var3);
                                    var3 = var4.joinGuild;
                                    var4 = var3.bind(var4)(var5);
                                    var3 = var4.then;
                                    var2 = function() {
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var1 = 37;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var4 = var3.bind(var1)(var2);
                                        var3 = var4.transitionToGuildSync;
                                        var2 = _closure5_slot0;
                                        var2 = var3.bind(var4)(var2);
                                        return var1;
                                    };
                                    var2 = var3.bind(var4)(var2);
                                    return var1;
                                };
                                var1 = undefined;
                                var1 = var2.bind(var1)(var3);
case 89:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var10['onPress'] = var13;
                        var11 = var12.bind(var1)(var11, var10);
                        var10 = new Array(2);
                        var10[0] = var11;
                        var13 = _closure1_slot21;
                        var12 = _closure1_slot6;
                        var11 = {};
                        var14 = {};
                        var16 = _closure1_slot1;
                        var15 = 13;
                        var15 = var18[var15];
                        var15 = var16.bind(var1)(var15);
                        var15 = var15.space;
                        var15 = var15.PX_16;
                        var14['height'] = var15;
                        var11['style'] = var14;
                        var11 = var13.bind(var1)(var12, var11);
                        var10[1] = var11;
                        var7['children'] = var10;
                        var6 = var9.bind(var1)(var8, var7);
case 87:
                        var5[2] = var6;
                        var6 = _closure2_slot5;
                        var15 = null;
                        var6 = var15 != var6;
                        if(var6) { _fun0019_ip = 90; continue _fun0019 }
case 91:
                        var7 = _closure2_slot3;
                        var6 = var15 != var7;
case 90:
                        if(!var6) { _fun0019_ip = 92; continue _fun0019 }
case 93:
                        var9 = _closure1_slot23;
                        var8 = _closure1_slot22;
                        var7 = {};
                        var12 = _closure1_slot21;
                        var11 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var10 = 44;
                        var10 = var14[var10];
                        var10 = var11.bind(var1)(var10);
                        var11 = var10.FormDivider;
                        var10 = {};
                        var13 = _closure2_slot2;
                        var13 = var13.divider;
                        var10['style'] = var13;
                        var11 = var12.bind(var1)(var11, var10);
                        var10 = new Array(2);
                        var10[0] = var11;
                        var13 = _closure1_slot21;
                        var12 = _closure1_slot1;
                        var11 = 45;
                        var11 = var14[var11];
                        var12 = var12.bind(var1)(var11);
                        var11 = {};
                        var14 = _closure2_slot3;
                        if(!(var15 == var14)) { _fun0019_ip = 94; continue _fun0019 }
case 95:
                        var14 = _closure2_slot5;
                        _fun0019_ip = 71; continue _fun0019;
case 94:
                        var14 = _closure2_slot3;
case 71:
                        var11['guild'] = var14;
                        var14 = _closure2_slot17;
                        var11['showingJoinGuildCta'] = var14;
                        var14 = _closure2_slot6;
                        var11['hasJoinedGuild'] = var14;
                        var20 = _closure1_slot0;
                        var21 = _closure1_slot2;
                        var15 = 19;
                        var16 = var21[var15];
                        var16 = var20.bind(var1)(var16);
                        var18 = var16.intl;
                        var16 = var18.string;
                        var15 = var21[var15];
                        var15 = var20.bind(var1)(var15);
                        var15 = var15.t;
                        if(var14) { _fun0019_ip = 96; continue _fun0019 }
case 97:
                        var14 = var15.pDE7Gb;
                        var14 = var16.bind(var18)(var14);
                        _fun0019_ip = 98; continue _fun0019;
case 96:
                        var15 = var15.kx6pEG;
                        var14 = var16.bind(var18)(var15);
case 98:
                        var11['title'] = var14;
                        var11 = var13.bind(var1)(var12, var11);
                        var10[1] = var11;
                        var7['children'] = var10;
                        var6 = var9.bind(var1)(var8, var7);
case 92:
                        var5[3] = var6;
                        var6 = _closure2_slot11;
                        if(!var6) { _fun0019_ip = 99; continue _fun0019 }
case 100:
                        var6 = _closure2_slot6;
case 99:
                        if(!var6) { _fun0019_ip = 101; continue _fun0019 }
case 102:
                        var9 = _closure1_slot23;
                        var8 = _closure1_slot22;
                        var7 = {};
                        var12 = _closure1_slot21;
                        var15 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var10 = 44;
                        var10 = var18[var10];
                        var10 = var15.bind(var1)(var10);
                        var11 = var10.FormDivider;
                        var10 = {};
                        var14 = _closure2_slot2;
                        var13 = var14.divider;
                        var10['style'] = var13;
                        var11 = var12.bind(var1)(var11, var10);
                        var10 = new Array(2);
                        var10[0] = var11;
                        var13 = _closure1_slot21;
                        var12 = _closure1_slot6;
                        var11 = {};
                        var14 = var14.favoriteContainer;
                        var11['style'] = var14;
                        var16 = _closure1_slot21;
                        var14 = 26;
                        var14 = var18[var14];
                        var14 = var15.bind(var1)(var14);
                        var15 = var14.Button;
                        var14 = {};
                        var18 = _closure2_slot9;
                        var22 = _closure1_slot0;
                        var23 = _closure1_slot2;
                        var19 = 19;
                        var20 = var23[var19];
                        var20 = var22.bind(var1)(var20);
                        var21 = var20.intl;
                        var20 = var21.string;
                        var19 = var23[var19];
                        var19 = var22.bind(var1)(var19);
                        var19 = var19.t;
                        if(var18) { _fun0019_ip = 103; continue _fun0019 }
case 104:
                        var18 = var19.kWmiPW;
                        var18 = var20.bind(var21)(var18);
                        _fun0019_ip = 105; continue _fun0019;
case 103:
                        var19 = var19.XhzKyF;
                        var18 = var20.bind(var21)(var19);
case 105:
                        var14['text'] = var18;
                        var19 = _closure2_slot9;
                        var18 = 'primary';
                        if(!var19) { _fun0019_ip = 106; continue _fun0019 }
case 107:
                        var18 = 'tertiary';
case 106:
                        var14['variant'] = var18;
                        var18 = 'md';
                        var14['size'] = var18;
                        var17 = _closure2_slot10;
                        var14['onPress'] = var17;
                        var14 = var16.bind(var1)(var15, var14);
                        var11['children'] = var14;
                        var11 = var13.bind(var1)(var12, var11);
                        var10[1] = var11;
                        var7['children'] = var10;
                        var6 = var9.bind(var1)(var8, var7);
case 101:
                        var5[4] = var6;
                        var2['children'] = var5;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    }
                };
                var1 = var2.bind(var3)();
case 79:
                return var1;
            }
        };
        var _closure1_slot25 = var4;
        var4 = var7.memo;
        var2 = function StickerDetailActionSheet(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var1 = arg1;
                var10 = var1.renderableSticker;
                var7 = var1.channel;
                var12 = var1.chatInputRef;
                var1 = _closure1_slot24;
                var4 = undefined;
                var9 = var1.bind(var4)();
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
                var8 = _closure1_slot21;
                var2 = _closure1_slot7;
                var1 = {};
                var11 = 'large';
                var1['size'] = var11;
                var1 = var8.bind(var4)(var2, var1);
                var2 = null;
                if(!(var2 == var13)) { _fun0021_ip = 108; continue _fun0021 }
case 109:
                if(var3) { _fun0021_ip = 81; continue _fun0021 }
case 108:
                var8 = var1;
                if(!(var2 != var13)) { _fun0021_ip = 110; continue _fun0021 }
case 111:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var11 = 33;
                var2 = var2[var11];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isStandardSticker;
                var2 = var2.bind(var3)(var13);
                if(var2) { _fun0021_ip = 112; continue _fun0021 }
case 113:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var11];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isGuildSticker;
                var2 = var2.bind(var3)(var13);
                if(!var2) { _fun0021_ip = 114; continue _fun0021 }
case 115:
                var11 = _closure1_slot21;
                var3 = _closure1_slot25;
                var2 = {};
                var2['sticker'] = var13;
                var2['channel'] = var7;
                var1 = var11.bind(var4)(var3, var2);
case 114:
                _fun0021_ip = 116; continue _fun0021;
case 112:
                var11 = _closure1_slot21;
                var3 = _closure1_slot26;
                var2 = {};
                var2['sticker'] = var13;
                var2['channel'] = var7;
                var2['chatInputRef'] = var12;
                var1 = var11.bind(var4)(var3, var2);
case 116:
                var8 = var1;
                _fun0021_ip = 110; continue _fun0021;
case 81:
                var3 = _closure1_slot21;
                var2 = _closure1_slot27;
                var1 = {};
                var1['renderableSticker'] = var10;
                var1['channel'] = var7;
                var8 = var3.bind(var4)(var2, var1);
case 110:
                var3 = _closure1_slot21;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 47;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.BottomSheet;
                var1 = {};
                var1['startExpanded'] = var6;
                var7 = _closure1_slot21;
                var6 = _closure1_slot6;
                var5 = {};
                var9 = var9.content;
                var5['style'] = var9;
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
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