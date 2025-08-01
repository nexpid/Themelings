// app/modules/guild_settings/native/GuildSettingsModalStickers/GuildSettingsModalStickers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.ScrollView;
    var _closure1_slot3 = var9;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AppliedGuildBoostsRequiredForBoostedGuildTier;
    var _closure1_slot9 = var8;
    var10 = var4.BoostedGuildTiers;
    var _closure1_slot10 = var10;
    var4 = var4.GuildFeatures;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.EMPTY_STICKERS;
    var _closure1_slot12 = var8;
    var4 = var4.MAX_STICKER_FILE_SIZE;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot14 = var8;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var8 = {};
    var4 = var10.NONE;
    var8['tier'] = var4;
    var9 = 9;
    var4 = var6[var9];
    var4 = var5.bind(var1)(var4);
    var12 = var4.intl;
    var11 = var12.string;
    var4 = var6[var9];
    var4 = var5.bind(var1)(var4);
    var4 = var4.t;
    var4 = var4.tfVXhI;
    var4 = var11.bind(var12)(var4);
    var8['title'] = var4;
    var8['IconComponent'] = var1;
    var4 = new Array(4);
    var4[0] = var8;
    var8 = {};
    var11 = var10.TIER_1;
    var8['tier'] = var11;
    var11 = var6[var9];
    var11 = var5.bind(var1)(var11);
    var13 = var11.intl;
    var12 = var13.string;
    var11 = var6[var9];
    var11 = var5.bind(var1)(var11);
    var11 = var11.t;
    var11 = var11.nzXtaW;
    var11 = var12.bind(var13)(var11);
    var8['title'] = var11;
    var11 = 10;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var11 = var11.BoostTier1Icon;
    var8['IconComponent'] = var11;
    var4[1] = var8;
    var8 = {};
    var11 = var10.TIER_2;
    var8['tier'] = var11;
    var11 = var6[var9];
    var11 = var5.bind(var1)(var11);
    var13 = var11.intl;
    var12 = var13.string;
    var11 = var6[var9];
    var11 = var5.bind(var1)(var11);
    var11 = var11.t;
    var11 = var11.h33/ub;
    var11 = var12.bind(var13)(var11);
    var8['title'] = var11;
    var11 = 11;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var11 = var11.BoostTier2Icon;
    var8['IconComponent'] = var11;
    var4[2] = var8;
    var8 = {};
    var10 = var10.TIER_3;
    var8['tier'] = var10;
    var10 = var6[var9];
    var10 = var5.bind(var1)(var10);
    var11 = var10.intl;
    var10 = var11.string;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.t;
    var9 = var9.BfF6EB;
    var9 = var10.bind(var11)(var9);
    var8['title'] = var9;
    var9 = 12;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.BoostTier3Icon;
    var8['IconComponent'] = var9;
    var4[3] = var8;
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1) {
        var1 = {};
        var2 = {};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 14;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var2['padding'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var8 = var7.PX_16;
        var7 = arg1;
        var7 = var8 + var7;
        var2['paddingBottom'] = var7;
        var1['container'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_8;
        var2['marginBottom'] = var7;
        var1['label'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var2['marginBottom'] = var7;
        var1['labelHelp'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var2['marginTop'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var2['marginBottom'] = var7;
        var1['divider'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BACKGROUND_TERTIARY;
        var2['backgroundColor'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.lg;
        var2['borderRadius'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_64;
        var2['width'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_64;
        var2['height'] = var7;
        var7 = 'hidden';
        var2['overflow'] = var7;
        var7 = 'center';
        var2['alignItems'] = var7;
        var2['justifyContent'] = var7;
        var1['stickerSlot'] = var2;
        var2 = {'gap': null, 'flexDirection': 'row', 'alignItems': 'center'};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_8;
        var2['gap'] = var3;
        var1['userRow'] = var2;
        return var1;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot17 = var4;
    var4 = var7.memo;
    var2 = function GuildSettingsModalStickers(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.guildId;
            var _closure2_slot0 = var6;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 15;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var3 = _closure1_slot17;
            var2 = var2.bottom;
            var12 = var3.bind(var4)(var2);
            var _closure2_slot1 = var12;
            var7 = _closure1_slot0;
            var2 = 16;
            var3 = var8[var2];
            var13 = var7.bind(var4)(var3);
            var11 = var13.useStateFromStoresObject;
            var3 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var3;
            var5 = new Array(1);
            var5[0] = var6;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var3 = var2.bind(var3)(var1);
                    var5 = null;
                    var2 = var5 == var3;
                    var6 = undefined;
                    if(var2) { _fun0002_ip = 61; continue _fun0002 }
 35:
                    var8 = var3.features;
                    var7 = var8.has;
                    var2 = _closure1_slot11;
                    var2 = var2.MORE_STICKERS;
                    var6 = var7.bind(var8)(var2);
 61:
                    var2 = true;
                    if(!(var2 === var6)) { _fun0002_ip = 79; continue _fun0002 }
 67:
                    var2 = _closure1_slot10;
                    var2 = var2.TIER_3;
                    _fun0002_ip = 111; continue _fun0002;
 79:
                    var6 = var5 == var3;
                    var1 = undefined;
                    if(var6) { _fun0002_ip = 94; continue _fun0002 }
 88:
                    var1 = var3.premiumTier;
 94:
                    if(!(var5 == var1)) { _fun0002_ip = 108; continue _fun0002 }
 98:
                    var4 = _closure1_slot10;
                    var1 = var4.NONE;
 108:
                    var2 = var1;
 111:
                    var1 = {};
                    var1['guild'] = var3;
                    var1['guildTier'] = var2;
                    return var1;
                }
            };
            var3 = var11.bind(var13)(var9, var3, var5);
            var5 = var3.guild;
            var _closure2_slot2 = var5;
            var3 = var3.guildTier;
            var _closure2_slot3 = var3;
            var2 = var8[var2];
            var13 = var7.bind(var4)(var2);
            var11 = var13.useStateFromStores;
            var2 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var2;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot5;
                    var3 = var4.getStickersByGuildId;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1);
                    var3 = null;
                    if(!(var3 == var1)) { _fun0003_ip = 35; continue _fun0003 }
 31:
                    var1 = _closure1_slot12;
 35:
                    return var1;
                }
            };
            var3 = var11.bind(var13)(var9, var2, var3);
            var _closure2_slot4 = var3;
            var2 = 17;
            var2 = var8[var2];
            var9 = var7.bind(var4)(var2);
            var8 = var9.getManageResourcePermissions;
            var7 = _closure1_slot7;
            var2 = _closure1_slot8;
            var2 = var8.bind(var9)(var5, var7, var2);
            var11 = var2.canCreateExpressions;
            var2 = var2.canManageGuildExpression;
            var _closure2_slot5 = var2;
            var9 = _closure1_slot16;
            var8 = var9.reduce;
            var7 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = arg1;
                    var1 = arg2;
                    var6 = var1.tier;
                    var4 = _closure2_slot3;
                    var1 = var3;
                    if(!(var4 >= var6)) { _fun0004_ip = 71; continue _fun0004 }
 26:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 18;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var7.bind(var4)(var5);
                    var4 = var5.getTotalStickerCountForTier;
                    var2 = _closure2_slot2;
                    var2 = var4.bind(var5)(var6, var2);
                    var1 = var3 + var2;
 71:
                    return var1;
                }
            };
            var2 = 0;
            var7 = var8.bind(var9)(var7, var2);
            if(!var11) { _fun0001_ip = 278; continue _fun0001 }
 269:
            var3 = var3.length;
            var11 = var3 < var7;
 278:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 19;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.bind(var4)(var6);
            var3 = var3.isLoading;
            if(var3) { _fun0001_ip = 883; continue _fun0001 }
 315:
            var3 = null;
            if(!(var3 != var5)) { _fun0001_ip = 883; continue _fun0001 }
 324:
            _closure2_slot6 = var2;
            var5 = _closure1_slot15;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var12.container;
            var2['contentContainerStyle'] = var6;
            var9 = _closure1_slot14;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 21;
            var6 = var13[var7];
            var6 = var8.bind(var4)(var6);
            var14 = var6.Text;
            var6 = {};
            var15 = 'heading-md/semibold';
            var6['variant'] = var15;
            var15 = var12.label;
            var6['style'] = var15;
            var18 = 9;
            var15 = var13[var18];
            var15 = var8.bind(var4)(var15);
            var17 = var15.intl;
            var16 = var17.string;
            var15 = var13[var18];
            var15 = var8.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.yxVsBA;
            var15 = var16.bind(var17)(var15);
            var6['children'] = var15;
            var14 = var9.bind(var4)(var14, var6);
            var6 = new Array(5);
            var6[0] = var14;
            var7 = var13[var7];
            var7 = var8.bind(var4)(var7);
            var15 = var7.Text;
            var7 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var14 = var12.label;
            var7['style'] = var14;
            var14 = var13[var18];
            var14 = var8.bind(var4)(var14);
            var20 = var14.intl;
            var19 = var20.format;
            var14 = var13[var18];
            var14 = var8.bind(var4)(var14);
            var14 = var14.t;
            var17 = var14.kpcMfn;
            var16 = {};
            var14 = 22;
            var14 = var13[var14];
            var24 = var8.bind(var4)(var14);
            var23 = var24.formatKbSize;
            var22 = _closure1_slot13;
            var21 = {};
            var14 = true;
            var21['useKibibytes'] = var14;
            var21 = var23.bind(var24)(var22, var21);
            var16['fileSize'] = var21;
            var16 = var19.bind(var20)(var17, var16);
            var7['children'] = var16;
            var7 = var9.bind(var4)(var15, var7);
            var6[1] = var7;
            var7 = 23;
            var7 = var13[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Button;
            var7 = {};
            var15 = _closure1_slot0;
            var13 = _closure1_slot2;
            var16 = var13[var18];
            var16 = var15.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var13 = var13[var18];
            var13 = var15.bind(var4)(var13);
            var15 = var13.t;
            if(var11) { _fun0001_ip = 686; continue _fun0001 }
 671:
            var13 = var15.IuvV5+;
            var13 = var16.bind(var17)(var13);
            _fun0001_ip = 697; continue _fun0001;
 686:
            var15 = var15.3DzNjY;
            var13 = var16.bind(var17)(var15);
 697:
            var7['text'] = var13;
            var13 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var4 = _closure2_slot0;
                var2['guildId'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7['onPress'] = var13;
            var11 = !var11;
            var7['disabled'] = var11;
            var7 = var9.bind(var4)(var8, var7);
            var6[2] = var7;
            var9 = _closure1_slot14;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 25;
            var7 = var13[var7];
            var7 = var8.bind(var4)(var7);
            var11 = var7.FormDivider;
            var7 = {};
            var7['outer'] = var14;
            var12 = var12.divider;
            var7['style'] = var12;
            var7 = var9.bind(var4)(var11, var7);
            var6[3] = var7;
            var7 = 26;
            var7 = var13[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Stack;
            var7 = {};
            var12 = _closure1_slot1;
            var11 = 14;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_16;
            var7['spacing'] = var11;
            var12 = _closure1_slot16;
            var11 = var12.map;
            var10 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.tier;
                    var9 = var1.title;
                    var16 = var1.IconComponent;
                    var2 = _closure2_slot3;
                    var12 = var2 < var5;
                    var7 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var2 = 18;
                    var3 = var13[var2];
                    var4 = undefined;
                    var6 = var7.bind(var4)(var3);
                    var3 = var6.getIncrementalStickerCountForTier;
                    var10 = var3.bind(var6)(var5);
                    var2 = var13[var2];
                    var3 = var7.bind(var4)(var2);
                    var2 = var3.getAvailableStickerSlotCount;
                    var1 = _closure2_slot4;
                    var18 = var2.bind(var3)(var1, var5);
                    var1 = _closure1_slot9;
                    var17 = var1[var5];
                    var3 = _closure1_slot15;
                    var1 = 27;
                    var1 = var13[var1];
                    var1 = var7.bind(var4)(var1);
                    var2 = var1.TableRowGroup;
                    var1 = {};
                    var8 = _closure1_slot14;
                    var6 = 28;
                    var6 = var13[var6];
                    var6 = var7.bind(var4)(var6);
                    var7 = var6.TableRow;
                    var6 = {};
                    var13 = null;
                    var14 = var13 != var16;
                    var13 = undefined;
                    if(!var14) { _fun0005_ip = 190; continue _fun0005 }
 159:
                    var15 = _closure1_slot14;
                    var14 = {};
                    var19 = 'premium-nitro-pink-text';
                    if(!var12) { _fun0005_ip = 180; continue _fun0005 }
 174:
                    var19 = 'icon-muted';
 180:
                    var14['color'] = var19;
                    var13 = var15.bind(var4)(var16, var14);
 190:
                    var6['icon'] = var13;
                    var6['label'] = var9;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var9 = 9;
                    var15 = var14[var9];
                    var15 = var13.bind(var4)(var15);
                    var16 = var15.intl;
                    var15 = var16.format;
                    var9 = var14[var9];
                    var9 = var13.bind(var4)(var9);
                    var13 = var9.t;
                    if(var12) { _fun0005_ip = 275; continue _fun0005 }
 245:
                    var14 = var13.ZLoNtr;
                    var9 = {};
                    var9['numTotal'] = var10;
                    var9['numAvailable'] = var18;
                    var9 = var15.bind(var16)(var14, var9);
                    _fun0005_ip = 296; continue _fun0005;
 275:
                    var14 = var13.t2Wbo6;
                    var13 = {};
                    var13['required'] = var17;
                    var9 = var15.bind(var16)(var14, var13);
 296:
                    var6['subLabel'] = var9;
                    var9 = undefined;
                    if(!var12) { _fun0005_ip = 354; continue _fun0005 }
 306:
                    var13 = _closure1_slot14;
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var11 = 29;
                    var11 = var14[var11];
                    var11 = var12.bind(var4)(var11);
                    var12 = var11.LockIcon;
                    var11 = {};
                    var14 = 'icon-muted';
                    var11['color'] = var14;
                    var9 = var13.bind(var4)(var12, var11);
 354:
                    var6['trailing'] = var9;
                    var7 = var8.bind(var4)(var7, var6);
                    var6 = new Array(2);
                    var6[0] = var7;
                    var7 = global;
                    var9 = var7.Array;
                    var8 = var9.from;
                    var7 = {};
                    var7['length'] = var10;
                    var9 = var8.bind(var9)(var7);
                    var8 = var9.map;
                    var7 = function(arg1, arg2) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var2 = _closure2_slot4;
                            var1 = _closure2_slot6;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot6 = var3;
                            var14 = var2[var1];
                            var _closure4_slot0 = var14;
                            var1 = null;
                            if(!(var1 != var14)) { _fun0006_ip = 543; continue _fun0006 }
 40:
                            var2 = _closure2_slot5;
                            var6 = undefined;
                            var8 = var2.bind(var6)(var14);
                            var23 = var14.user;
                            var5 = _closure1_slot14;
                            var13 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var2 = 28;
                            var2 = var12[var2];
                            var2 = var13.bind(var6)(var2);
                            var4 = var2.TableRow;
                            var3 = {};
                            var11 = _closure1_slot4;
                            var2 = {};
                            var15 = _closure2_slot1;
                            var10 = var15.stickerSlot;
                            var2['style'] = var10;
                            var18 = _closure1_slot1;
                            var10 = 30;
                            var10 = var12[var10];
                            var16 = var18.bind(var6)(var10);
                            var10 = {};
                            var10['sticker'] = var14;
                            var17 = 14;
                            var17 = var12[var17];
                            var17 = var18.bind(var6)(var17);
                            var17 = var17.spacing;
                            var17 = var17.PX_48;
                            var10['size'] = var17;
                            var17 = true;
                            var10['animated'] = var17;
                            var10 = var5.bind(var6)(var16, var10);
                            var2['children'] = var10;
                            var2 = var5.bind(var6)(var11, var2);
                            var3['icon'] = var2;
                            var10 = _closure1_slot15;
                            var2 = {};
                            var18 = 21;
                            var12 = var12[var18];
                            var12 = var13.bind(var6)(var12);
                            var13 = var12.Text;
                            var12 = {'variant': 'heading-sm/semibold', 'color': 'text-primary'};
                            var15 = var15.label;
                            var12['style'] = var15;
                            var14 = var14.name;
                            var12['children'] = var14;
                            var13 = var5.bind(var6)(var13, var12);
                            var12 = new Array(2);
                            var12[0] = var13;
                            var14 = var1 != var23;
                            var13 = null;
                            if(!var14) { _fun0006_ip = 449; continue _fun0006 }
 269:
                            var16 = _closure1_slot15;
                            var15 = _closure1_slot4;
                            var14 = {};
                            var17 = _closure2_slot1;
                            var17 = var17.userRow;
                            var14['style'] = var17;
                            var20 = _closure1_slot14;
                            var22 = _closure1_slot1;
                            var24 = _closure1_slot2;
                            var26 = 31;
                            var17 = var24[var26];
                            var21 = var22.bind(var6)(var17);
                            var17 = {};
                            var17['user'] = var23;
                            var19 = _closure1_slot0;
                            var26 = var24[var26];
                            var26 = var19.bind(var6)(var26);
                            var26 = var26.AvatarSizes;
                            var26 = var26.XSMALL_20;
                            var17['size'] = var26;
                            var25 = _closure2_slot0;
                            var17['guildId'] = var25;
                            var21 = var20.bind(var6)(var21, var17);
                            var17 = new Array(2);
                            var17[0] = var21;
                            var18 = var24[var18];
                            var18 = var19.bind(var6)(var18);
                            var19 = var18.Text;
                            var18 = {'variant': 'text-sm/medium', 'color': 'text-secondary'};
                            var21 = 32;
                            var21 = var24[var21];
                            var22 = var22.bind(var6)(var21);
                            var21 = var22.getName;
                            var21 = var21.bind(var22)(var23);
                            var18['children'] = var21;
                            var18 = var20.bind(var6)(var19, var18);
                            var17[1] = var18;
                            var14['children'] = var17;
                            var13 = var16.bind(var6)(var15, var14);
 449:
                            var12[1] = var13;
                            var2['children'] = var12;
                            var2 = var10.bind(var6)(var11, var2);
                            var3['label'] = var2;
                            var2 = undefined;
                            if(!var8) { _fun0006_ip = 510; continue _fun0006 }
 472:
                            var11 = _closure1_slot14;
                            var10 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var9 = 33;
                            var9 = var12[var9];
                            var9 = var10.bind(var6)(var9);
                            var10 = var9.TableRowArrow;
                            var9 = {};
                            var2 = var11.bind(var6)(var10, var9);
 510:
                            var3['trailing'] = var2;
                            var2 = undefined;
                            if(!var8) { _fun0006_ip = 527; continue _fun0006 }
 520:
                            var2 = function() {
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 34;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.showGuildSettingsModalStickerInfoActionSheet;
                                var2 = {};
                                var5 = _closure2_slot0;
                                var2['guildId'] = var5;
                                var5 = _closure4_slot0;
                                var5 = var5.id;
                                var2['stickerId'] = var5;
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            };
 527:
                            var3['onPress'] = var2;
                            var2 = arg2;
                            var2 = var5.bind(var6)(var4, var3, var2);
                            return var2;
 543:
                            return var1;
                        }
                    };
                    var7 = var8.bind(var9)(var7);
                    var6[1] = var7;
                    var1['children'] = var6;
                    var1 = var3.bind(var4)(var2, var1, var5);
                    return var1;
                }
            };
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var6[4] = var7;
            var2['children'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 883:
            var3 = _closure1_slot14;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 20;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.SceneLoadingIndicator;
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 35;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/native/GuildSettingsModalStickers/GuildSettingsModalStickers.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();