// app/modules/channel_list_v2/native/RedesignChannelList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function getInitialPosition(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = arg3;
            var2 = var3.getSectionRowsFromChannel;
            var1 = arg2;
            var4 = var2.bind(var3)(var1);
            var3 = _closure1_slot3;
            var1 = undefined;
            var2 = 1;
            var2 = var3.bind(var1)(var4, var2);
            var4 = 0;
            var3 = var2[var4];
            var6 = null;
            if(!(var6 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.row;
            if(!(var6 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = var3.row;
            if(!(!(var2 < var4))) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var2 = var3.section;
            if(!(!(var2 < var4))) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var2 = 'section';
            if(!(var2 !== var5)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var4 = 'item';
            var2 = undefined;
            if(!(var4 === var5)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = var3.row;
case 9:
            _fun0001_ip = 11; continue _fun0001;
case 7:
            var2 = var3.section;
case 11:
            return var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function GuildChannels(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 38;
            var3 = var4[var3];
            var5 = undefined;
            var8 = var7.bind(var5)(var3);
            var3 = var6.guild;
            var3 = var8.bind(var5)(var3);
            var _closure2_slot1 = var3;
            var3 = 39;
            var3 = var4[var3];
            var7 = var7.bind(var5)(var3);
            var3 = var6.guild;
            var3 = var7.bind(var5)(var3);
            var7 = var3.rows;
            var _closure2_slot2 = var7;
            var7 = var3.gameClaimMarkAsDismissed;
            var3 = _closure1_slot0;
            var8 = 40;
            var8 = var4[var8];
            var10 = var3.bind(var5)(var8);
            var9 = var10.useStateFromStoresObject;
            var11 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var11;
            var1 = function() {
                var4 = _closure1_slot7;
                var3 = var4.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.guild;
                var2 = var1.id;
                var1 = {};
                var6 = _closure2_slot1;
                var1['guildActionRows'] = var6;
                var5 = _closure2_slot2;
                var1['channelNoticeRows'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var9.bind(var10)(var8, var1);
            var9 = var1.guildChannels;
            var8 = var1.guildChannelsVersion;
            var1 = 41;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useShouldRenderChannelList;
            var3 = var1.bind(var3)();
            var1 = null;
            if(!var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var4 = _closure1_slot13;
            var3 = _closure1_slot17;
            var2 = {};
            var13 = var2;
            var12 = var6;
            var6 = copyDataProperties(var13, var12);
            var6 = 'guildChannels';
            var2[var6] = var9;
            var6 = 'guildChannelsVersion';
            var2[var6] = var8;
            var6 = 'gameClaimMarkAsDismissed';
            var2[var6] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 12:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function FavoriteChannels(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 42;
            var1 = var4[var1];
            var5 = undefined;
            var6 = var3.bind(var5)(var1);
            var1 = var6.useFavoritesGuildChannelList;
            var7 = var1.bind(var6)();
            var1 = 41;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useShouldRenderChannelList;
            var3 = var1.bind(var3)();
            var1 = null;
            if(!var3) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var4 = _closure1_slot13;
            var3 = _closure1_slot17;
            var2 = {};
            var8 = arg1;
            var9 = var2;
            var6 = copyDataProperties(var9, var8);
            var6 = 'guildChannels';
            var2[var6] = var7;
            var7 = 0;
            var6 = 'guildChannelsVersion';
            var2[var6] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 14:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function ChannelsWrapper(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var8 = var5.selectedGuildId;
            var _closure2_slot0 = var8;
            var11 = var5.selectedChannelId;
            var1 = null;
            var4 = Object.create(var1);
            var2 = 0;
            var4['selectedGuildId'] = var2;
            var4['selectedChannelId'] = var2;
            var17 = {};
            var16 = var5;
            var15 = var4;
            var6 = copyDataProperties(var17, var16, var15);
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 40;
            var10 = var9[var4];
            var5 = undefined;
            var14 = var7.bind(var5)(var10);
            var13 = var14.useStateFromStores;
            var10 = _closure1_slot8;
            var12 = new Array(1);
            var12[0] = var10;
            var10 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var13.bind(var14)(var12, var10);
            var4 = var9[var4];
            var9 = var7.bind(var5)(var4);
            var7 = var9.useStateFromStores;
            var10 = _closure1_slot9;
            var4 = new Array(1);
            var4[0] = var10;
            var3 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getVoiceChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var7.bind(var9)(var4, var3);
            var3 = _closure1_slot11;
            if(!(var8 !== var3)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            if(!(var1 != var12)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var1 = _closure1_slot10;
            if(!(var8 !== var1)) { _fun0004_ip = 18; continue _fun0004 }
case 20:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 45;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isFavoritesGuildId;
            var1 = var1.bind(var3)(var8);
            if(var1) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 46;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.shouldNSFWGateGuild;
            var1 = var1.bind(var3)(var8);
            var7 = _closure1_slot13;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var3 = _closure1_slot19;
            var1 = {};
            var17 = var1;
            var16 = var6;
            var4 = copyDataProperties(var17, var16);
            var4 = 'guild';
            var1[var4] = var12;
            var4 = 'selectedChannelId';
            var1[var4] = var11;
            var4 = 'selectedVoiceChannelId';
            var1[var4] = var10;
            var1 = var7.bind(var5)(var3, var1);
            _fun0004_ip = 25; continue _fun0004;
case 23:
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 47;
            var3 = var9[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var9 = var6.style;
            var3['style'] = var9;
            var3['guildId'] = var8;
            var1 = var7.bind(var5)(var4, var3);
case 25:
            _fun0004_ip = 26; continue _fun0004;
case 21:
            var7 = _closure1_slot13;
            var4 = _closure1_slot20;
            var3 = {};
            var17 = var3;
            var16 = var6;
            var9 = copyDataProperties(var17, var16);
            var9 = 'guild';
            var3[var9] = var12;
            var9 = 'selectedChannelId';
            var3[var9] = var11;
            var9 = 'selectedVoiceChannelId';
            var3[var9] = var10;
            var1 = var7.bind(var5)(var4, var3);
case 26:
            _fun0004_ip = 27; continue _fun0004;
case 18:
            var7 = _closure1_slot13;
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 44;
            var3 = var9[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var9 = var6.style;
            var3['style'] = var9;
            var3['selectedGuildId'] = var8;
            var1 = var7.bind(var5)(var4, var3);
case 27:
            _fun0004_ip = 28; continue _fun0004;
case 16:
            var4 = _closure1_slot13;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 43;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var6 = var6.style;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 28:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
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
    var11 = 1;
    var7 = var6[var11];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.EMPTY_NUX_SERVER;
    var _closure1_slot10 = var8;
    var4 = var4.MOBILE_GUILD_UPSELL_LIST;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useYouBarTotalHeight;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot13 = var8;
    var8 = var4.jsxs;
    var _closure1_slot14 = var8;
    var4 = var4.Fragment;
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flex': 1, 'position': 'relative', 'overflow': 'hidden'};
    var12 = 14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.PANEL_BG;
    var10['backgroundColor'] = var12;
    var4['container'] = var10;
    var10 = {};
    var10['flex'] = var11;
    var4['listWrapper'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot16 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var20 = var2.contentInset;
            var _closure2_slot0 = var20;
            var15 = var2.gameClaimMarkAsDismissed;
            var _closure2_slot1 = var15;
            var18 = var2.guild;
            var _closure2_slot2 = var18;
            var24 = var2.guildChannels;
            var _closure2_slot3 = var24;
            var23 = var2.selectedChannelId;
            var _closure2_slot4 = var23;
            var9 = var2.selectedVoiceChannelId;
            var _closure2_slot5 = var9;
            var17 = var2.style;
            var _closure2_slot6 = var17;
            var16 = _closure1_slot1;
            var19 = _closure1_slot2;
            var2 = 15;
            var2 = var19[var2];
            var4 = undefined;
            var3 = var16.bind(var4)(var2);
            var2 = 'ChannelList';
            var3 = var3.bind(var4)(var2);
            var _closure2_slot7 = var3;
            var2 = _closure1_slot16;
            var13 = var2.bind(var4)();
            var _closure2_slot8 = var13;
            var6 = _closure1_slot0;
            var2 = 16;
            var5 = var19[var2];
            var7 = var6.bind(var4)(var5);
            var5 = var7.useCategoryStyles;
            var7 = var5.bind(var7)();
            var _closure2_slot9 = var7;
            var5 = 17;
            var5 = var19[var5];
            var5 = var16.bind(var4)(var5);
            var5 = var5.bind(var4)(var18);
            var26 = var5.bannerHeight;
            var _closure2_slot10 = var26;
            var22 = var5.bannerWidth;
            var _closure2_slot11 = var22;
            var10 = var5.headerHeight;
            var _closure2_slot12 = var10;
            var8 = var5.fontScale;
            var _closure2_slot13 = var8;
            var37 = var5.listTop;
            var36 = var5.listBottom;
            var35 = var5.listPaddingBottom;
            var25 = var5.listViewportHeight;
            var _closure2_slot14 = var25;
            var5 = _closure1_slot4;
            var12 = var5.useRef;
            var11 = null;
            var39 = var12.bind(var5)(var11);
            var _closure2_slot15 = var39;
            var14 = var5.useEffect;
            var12 = new Array(2);
            var12[0] = var39;
            var12[1] = var24;
            var11 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.registerFastListChannelVisibilityMethod;
                var3 = _closure2_slot15;
                var2 = _closure2_slot3;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var11 = var14.bind(var5)(var11, var12);
            var12 = var24.getSections;
            var11 = false;
            var32 = var12.bind(var24)(var11);
            var _closure2_slot16 = var32;
            var27 = var18.id;
            var11 = 19;
            var11 = var19[var11];
            var14 = var6.bind(var4)(var11);
            var12 = var14.useExternalScrollEventHandler;
            var11 = {};
            var11['id'] = var27;
            var11 = var12.bind(var14)(var11);
            var _closure2_slot17 = var11;
            var14 = var5.useCallback;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var5 = _closure2_slot17;
                var2 = var1.contentOffset;
                var4 = var2.y;
                var2 = var1.contentSize;
                var3 = var2.height;
                var1 = var1.layoutMeasurement;
                var2 = var1.height;
                var1 = undefined;
                var2 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var14 = var14.bind(var5)(var11, var12);
            var27 = var5.useCallback;
            var12 = new Array(3);
            var12[0] = var24;
            var12[1] = var18;
            var12[2] = var10;
            var11 = function(arg1) {
                var4 = _closure1_slot13;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 20;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = arg1;
                var1['fastList'] = var5;
                var6 = _closure2_slot3;
                var1['guildChannels'] = var6;
                var6 = _closure2_slot2;
                var1['guild'] = var6;
                var5 = _closure2_slot12;
                var1['headerHeight'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var33 = var27.bind(var5)(var11, var12);
            var12 = var5.useCallback;
            var11 = new Array(4);
            var11[0] = var18;
            var11[1] = var26;
            var11[2] = var22;
            var11[3] = var10;
            var10 = function(arg1) {
                var5 = _closure1_slot13;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 21;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = {};
                var1 = _closure2_slot2;
                var2['guild'] = var1;
                var7 = arg1;
                var7 = var7.scrollPosValue;
                var2['scrollPosition'] = var7;
                var7 = _closure2_slot10;
                var2['bannerHeight'] = var7;
                var7 = _closure2_slot11;
                var2['bannerWidth'] = var7;
                var6 = _closure2_slot12;
                var2['headerHeight'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var38 = var12.bind(var5)(var10, var11);
            var12 = var5.useCallback;
            var11 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.logChannelListEndReached;
                var2 = var2.bind(var3)();
                return var1;
            };
            var10 = new Array(0);
            var34 = var12.bind(var5)(var11, var10);
            var10 = 23;
            var10 = var19[var10];
            var11 = var6.bind(var4)(var10);
            var10 = var11.useMobileQuestDockHeight;
            var10 = var10.bind(var11)();
            var _closure2_slot18 = var10;
            var12 = var5.useMemo;
            var11 = new Array(4);
            var11[0] = var20;
            var11[1] = var17;
            var11[2] = var13;
            var11[3] = var10;
            var10 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot8;
                    var3 = var1.container;
                    var1 = new Array(3);
                    var1[0] = var3;
                    var3 = {};
                    var4 = _closure2_slot0;
                    var6 = null;
                    var4 = var6 == var4;
                    var8 = undefined;
                    if(var4) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                    var4 = _closure2_slot0;
                    var8 = var4.top;
case 29:
                    var9 = var6 != var8;
                    var7 = 0;
                    if(!var9) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                    var7 = var8;
case 31:
                    var3['marginTop'] = var7;
                    var7 = _closure2_slot0;
                    var8 = var6 == var7;
                    var7 = undefined;
                    if(var8) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                    var8 = _closure2_slot0;
                    var7 = var8.bottom;
case 33:
                    var9 = var6 != var7;
                    var8 = 0;
                    if(!var9) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                    var8 = var7;
case 35:
                    var7 = _closure2_slot18;
                    var7 = var8 + var7;
                    var3['paddingBottom'] = var7;
                    var7 = _closure2_slot0;
                    var7 = var6 == var7;
                    var8 = undefined;
                    if(var7) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                    var7 = _closure2_slot0;
                    var8 = var7.left;
case 37:
                    var9 = var6 != var8;
                    var7 = 0;
                    if(!var9) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                    var7 = var8;
case 39:
                    var3['marginLeft'] = var7;
                    var7 = _closure2_slot0;
                    var7 = var6 == var7;
                    var5 = undefined;
                    if(var7) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                    var7 = _closure2_slot0;
                    var5 = var7.right;
case 41:
                    var6 = var6 != var5;
                    var4 = 0;
                    if(!var6) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                    var4 = var5;
case 43:
                    var3['marginRight'] = var4;
                    var1[1] = var3;
                    var2 = _closure2_slot6;
                    var1[2] = var2;
                    return var1;
                }
            };
            var11 = var12.bind(var5)(var10, var11);
            var10 = 24;
            var10 = var19[var10];
            var12 = var6.bind(var4)(var10);
            var10 = var12.useRecentlyActiveChannelsEnabled;
            var20 = var10.bind(var12)();
            var _closure2_slot19 = var20;
            var10 = 25;
            var10 = var19[var10];
            var12 = var16.bind(var4)(var10);
            var10 = var18.id;
            var10 = var12.bind(var4)(var10);
            var _closure2_slot20 = var10;
            var12 = 26;
            var12 = var19[var12];
            var22 = var6.bind(var4)(var12);
            var17 = var22.useOptInEnabledForGuild;
            var12 = var18.id;
            var12 = var17.bind(var22)(var12);
            var _closure2_slot21 = var12;
            var17 = 27;
            var17 = var19[var17];
            var26 = var6.bind(var4)(var17);
            var22 = var26.useGuildLiveChannelNoticeInfo;
            var17 = var18.id;
            var26 = var22.bind(var26)(var17);
            var17 = 28;
            var17 = var19[var17];
            var22 = var6.bind(var4)(var17);
            var17 = var22.getScaledLiveChannelNoticeHeight;
            var22 = var17.bind(var22)(var8, var26);
            var _closure2_slot22 = var22;
            var17 = function useDrawerAwareScrollToTop(arg1) {
                var6 = arg1;
                var _closure3_slot0 = var6;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.useNavigation;
                var7 = var4.bind(var5)();
                var _closure3_slot1 = var7;
                var5 = _closure1_slot4;
                var4 = var5.useEffect;
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var6;
                var2 = function() {
                    var2 = -1;
                    var _closure4_slot0 = var2;
                    var5 = _closure3_slot1;
                    var4 = var5.addListener;
                    var3 = 'tabPress';
                    var2 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 11;
                            var4 = var7[var1];
                            var1 = undefined;
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.coerceGuildsRoute;
                            var6 = _closure1_slot1;
                            var3 = 12;
                            var3 = var7[var3];
                            var3 = var6.bind(var1)(var3);
                            var3 = var3.bind(var1)();
                            var4 = var4.bind(var5)(var3);
                            var3 = null;
                            if(!(var3 != var4)) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                            var5 = _closure4_slot0;
                            var4 = -1;
                            if(!(var4 !== var5)) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                            var5 = global;
                            var6 = var5.clearTimeout;
                            var5 = _closure4_slot0;
                            var5 = var6.bind(var1)(var5);
                            _closure4_slot0 = var4;
                            _fun0007_ip = 45; continue _fun0007;
case 47:
                            var4 = global;
                            var6 = var4.clearTimeout;
                            var5 = _closure4_slot0;
                            var5 = var6.bind(var1)(var5);
                            var5 = var4.setTimeout;
                            var4 = function() {
                                var3 = global;
                                var6 = var3.clearTimeout;
                                var4 = _closure4_slot0;
                                var1 = undefined;
                                var4 = var6.bind(var1)(var4);
                                var4 = -1;
                                _closure4_slot0 = var4;
                                var5 = _closure3_slot1;
                                var4 = var5.isFocused;
                                var4 = var4.bind(var5)();
                                var _closure6_slot0 = var4;
                                var3 = var3.requestAnimationFrame;
                                var2 = function() {
                                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                        var1 = _closure1_slot6;
                                        var1 = var1.useReducedMotion;
                                        var2 = _closure6_slot0;
                                        if(!var2) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                                        var3 = _closure5_slot0;
                                        var3 = var3.defaultPrevented;
                                        var2 = !var3;
case 49:
                                        if(!var2) { _fun0008_ip = 4; continue _fun0008 }
case 51:
                                        var3 = _closure3_slot0;
                                        var4 = var3.current;
                                        var3 = null;
                                        var2 = var3 != var4;
case 4:
                                        if(!var2) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                                        var2 = _closure3_slot0;
                                        var3 = var2.current;
                                        var2 = var3.scrollToTop;
                                        var1 = !var1;
                                        var1 = var2.bind(var3)(var1);
case 52:
                                        var1 = undefined;
                                        return var1;
                                    }
                                };
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var2 = 300;
                            var2 = var5.bind(var1)(var4, var2);
                            _closure4_slot0 = var2;
case 45:
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var3, var2);
                    var _closure4_slot1 = var2;
                    var1 = function() {
                        var2 = _closure4_slot1;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    return var1;
                };
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var17 = var17.bind(var4)(var39);
            var27 = var5.useCallback;
            var26 = new Array(3);
            var26[0] = var24;
            var26[1] = var32;
            var26[2] = var3;
            var17 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = arg1;
                    var8 = 1;
                    var9 = var3 - var8;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 29;
                    var1 = var4[var1];
                    var4 = undefined;
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                    var6 = var9;
                    if(!(var3 <= var1)) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                    var7 = 0;
                    var6 = var9;
                    if(!(var9 >= var7)) { _fun0009_ip = 54; continue _fun0009 }
case 56:
                    var1 = _closure2_slot16;
                    var1 = var1[var9];
                    var3 = var9;
                    var6 = var3;
                    if(!(!(var1 > var7))) { _fun0009_ip = 54; continue _fun0009 }
case 57:
                    var9 = var3 - var8;
                    var6 = var9;
                    if(!(var6 >= var7)) { _fun0009_ip = 54; continue _fun0009 }
case 52:
                    var1 = _closure2_slot16;
                    var1 = var1[var9];
                    var3 = var9;
                    var6 = var3;
                    if(!(var1 > var7)) { _fun0009_ip = 57; continue _fun0009 }
case 54:
                    var1 = -1;
                    var1 = var1 !== var6;
                    if(!var1) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 30;
                    var2 = var5[var2];
                    var5 = var3.bind(var4)(var2);
                    var4 = var5.getChannelListSectionHasFooterDivider;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot7;
                    var2 = var4.bind(var5)(var3, var6, var2);
                    var1 = !var2;
case 58:
                    return var1;
                }
            };
            var17 = var27.bind(var5)(var17, var26);
            var _closure2_slot23 = var17;
            var27 = var5.useCallback;
            var26 = new Array(6);
            var26[0] = var24;
            var26[1] = var8;
            var26[2] = var10;
            var26[3] = var22;
            var26[4] = var25;
            var26[5] = var3;
            var22 = function(arg1, arg2) {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 30;
                var2 = var5[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var2);
                var4 = var6.getChannelListItemSize;
                var2 = {};
                var8 = _closure2_slot3;
                var2['guildChannels'] = var8;
                var8 = arg1;
                var2['section'] = var8;
                var8 = arg2;
                var2['row'] = var8;
                var8 = _closure2_slot13;
                var2['fontScale'] = var8;
                var8 = _closure2_slot20;
                var2['voiceStates'] = var8;
                var8 = _closure2_slot22;
                var2['liveChannelNoticeHeight'] = var8;
                var8 = _closure2_slot14;
                var2['listViewportHeight'] = var8;
                var7 = _closure2_slot7;
                var2['isRefreshEnabled'] = var7;
                var2 = var4.bind(var6)(var2);
                var4 = _closure1_slot1;
                var1 = 31;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)(var2);
                return var1;
            };
            var28 = var27.bind(var5)(var22, var26);
            var26 = var5.useCallback;
            var22 = new Array(4);
            var22[0] = var24;
            var22[1] = var23;
            var22[2] = var18;
            var22[3] = var15;
            var15 = function(arg1, arg2) {
                var4 = _closure1_slot13;
                var3 = _closure1_slot5;
                var2 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 30;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var5);
                var6 = var7.renderChannelListItem;
                var5 = {};
                var9 = _closure2_slot3;
                var5['guildChannels'] = var9;
                var9 = arg1;
                var5['section'] = var9;
                var9 = arg2;
                var5['row'] = var9;
                var9 = _closure2_slot4;
                var5['selectedChannelId'] = var9;
                var9 = _closure2_slot2;
                var5['guild'] = var9;
                var8 = _closure2_slot1;
                var5['gameClaimMarkAsDismissed'] = var8;
                var5 = var6.bind(var7)(var5);
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var29 = var26.bind(var5)(var15, var22);
            var22 = var5.useCallback;
            var15 = new Array(3);
            var15[0] = var24;
            var15[1] = var8;
            var15[2] = var17;
            var8 = function(arg1) {
                var9 = arg1;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 30;
                var2 = var5[var2];
                var3 = undefined;
                var8 = var4.bind(var3)(var2);
                var7 = var8.getChannelListSectionHeaderSize;
                var6 = _closure2_slot3;
                var11 = _closure2_slot13;
                var2 = _closure2_slot23;
                var10 = var2.bind(var3)(var9);
                var14 = var8;
                var13 = var6;
                var12 = var9;
                var2 = var14[var7](var13, var12, var11, var10, var9);
                var4 = _closure1_slot1;
                var1 = 31;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)(var2);
                return var1;
            };
            var30 = var22.bind(var5)(var8, var15);
            var15 = var5.useCallback;
            var8 = new Array(4);
            var8[0] = var24;
            var8[1] = var20;
            var8[2] = var17;
            var8[3] = var7;
            var7 = function(arg1) {
                var9 = arg1;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 30;
                var2 = var4[var2];
                var4 = undefined;
                var8 = var3.bind(var4)(var2);
                var7 = var8.renderChannelListSectionHeader;
                var6 = _closure2_slot3;
                var12 = _closure2_slot19;
                var3 = _closure2_slot23;
                var11 = var3.bind(var4)(var9);
                var10 = _closure2_slot9;
                var15 = var8;
                var14 = var6;
                var13 = var9;
                var5 = var15[var7](var14, var13, var12, var11, var10, var9);
                var3 = _closure1_slot13;
                var2 = _closure1_slot5;
                var1 = {};
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var31 = var15.bind(var5)(var7, var8);
            var15 = var5.useCallback;
            var8 = new Array(6);
            var8[0] = var24;
            var8[1] = var12;
            var8[2] = var10;
            var8[3] = var23;
            var8[4] = var9;
            var8[5] = var3;
            var7 = function(arg1) {
                var9 = arg1;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 30;
                var2 = var5[var4];
                var3 = undefined;
                var11 = var6.bind(var3)(var2);
                var10 = var11.calculateVoiceSummary;
                var7 = {};
                var8 = _closure2_slot3;
                var7['guildChannels'] = var8;
                var7['section'] = var9;
                var12 = _closure2_slot21;
                var7['optInChannelsEnabled'] = var12;
                var12 = _closure2_slot20;
                var7['voiceStates'] = var12;
                var12 = _closure2_slot4;
                var7['selectedChannelId'] = var12;
                var12 = _closure2_slot5;
                var7['selectedVoiceChannelId'] = var12;
                var14 = var10.bind(var11)(var7);
                var4 = var5[var4];
                var6 = var6.bind(var3)(var4);
                var4 = var6.getChannelListSectionFooterSize;
                var13 = _closure2_slot7;
                var17 = var6;
                var16 = var8;
                var15 = var9;
                var2 = var17[var4](var16, var15, var14, var13, var12);
                var4 = _closure1_slot1;
                var1 = 31;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)(var2);
                return var1;
            };
            var26 = var15.bind(var5)(var7, var8);
            var8 = var5.useCallback;
            var7 = new Array(6);
            var7[0] = var24;
            var7[1] = var12;
            var7[2] = var10;
            var7[3] = var23;
            var7[4] = var9;
            var7[5] = var3;
            var3 = function(arg1) {
                var9 = arg1;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 30;
                var2 = var6[var3];
                var4 = undefined;
                var11 = var5.bind(var4)(var2);
                var10 = var11.calculateVoiceSummary;
                var7 = {};
                var8 = _closure2_slot3;
                var7['guildChannels'] = var8;
                var7['section'] = var9;
                var12 = _closure2_slot21;
                var7['optInChannelsEnabled'] = var12;
                var12 = _closure2_slot20;
                var7['voiceStates'] = var12;
                var12 = _closure2_slot4;
                var7['selectedChannelId'] = var12;
                var12 = _closure2_slot5;
                var7['selectedVoiceChannelId'] = var12;
                var14 = var10.bind(var11)(var7);
                var3 = var6[var3];
                var6 = var5.bind(var4)(var3);
                var5 = var6.renderChannelListSectionFooter;
                var15 = _closure2_slot15;
                var13 = _closure2_slot7;
                var18 = var6;
                var17 = var8;
                var16 = var9;
                var5 = var18[var5](var17, var16, var15, var14, var13, var12);
                var3 = _closure1_slot13;
                var2 = _closure1_slot5;
                var1 = {};
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var27 = var8.bind(var5)(var3, var7);
            var8 = var5.useMemo;
            var7 = new Array(1);
            var7[0] = var32;
            var3 = function() {
                var4 = _closure2_slot16;
                var3 = var4.reduce;
                var1 = function(arg1, arg2) {
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var2 + var1;
                    return var1;
                };
                var2 = 0;
                var1 = var3.bind(var4)(var1, var2);
                var1 = var2 === var1;
                return var1;
            };
            var15 = var8.bind(var5)(var3, var7);
            var7 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var24;
            var1 = function(arg1, arg2, arg3) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 30;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.getFastListRecyclerKey;
                var10 = _closure2_slot3;
                var9 = arg1;
                var8 = arg2;
                var7 = arg3;
                var11 = var6;
                var1 = var11[var5](var10, var9, var8, var7, var6);
                return var1;
            };
            var22 = var7.bind(var5)(var1, var3);
            var3 = var5.useContext;
            var1 = 32;
            var1 = var19[var1];
            var1 = var16.bind(var4)(var1);
            var40 = var3.bind(var5)(var1);
            var1 = _closure1_slot12;
            var41 = var1.bind(var4)(var2);
            var3 = _closure1_slot13;
            var5 = 33;
            var1 = var19[var5];
            var2 = var16.bind(var4)(var1);
            var1 = {};
            var5 = var19[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.Profiles;
            var5 = var5.Channels;
            var1['profile'] = var5;
            var7 = _closure1_slot13;
            var5 = 34;
            var5 = var19[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.LayerScope;
            var5 = {};
            var10 = _closure1_slot13;
            var9 = _closure1_slot5;
            var8 = {};
            var8['style'] = var11;
            var12 = _closure1_slot14;
            var11 = {};
            var13 = var13.listWrapper;
            var11['style'] = var13;
            var17 = _closure1_slot13;
            var13 = 35;
            var13 = var19[var13];
            var16 = var16.bind(var4)(var13);
            var13 = {};
            var13['guild'] = var18;
            var16 = var17.bind(var4)(var16, var13);
            var13 = new Array(2);
            var13[0] = var16;
            var17 = _closure1_slot13;
            var16 = _closure1_slot1;
            var19 = _closure1_slot2;
            if(var15) { _fun0005_ip = 60; continue _fun0005 }
case 61:
            var15 = 37;
            var15 = var19[var15];
            var20 = var16.bind(var4)(var15);
            var15 = {};
            var15['insetEnd'] = var41;
            var15['waitFor'] = var40;
            var15['ref'] = var39;
            var15['chunkBase'] = var25;
            var25 = true;
            var15['stickyHeaderFooter'] = var25;
            var15['renderHeader'] = var38;
            var15['headerSize'] = var37;
            var37 = var36 + var35;
            var15['footerSize'] = var37;
            var35 = var36 + var35;
            var15['endReachedThreshold'] = var35;
            var15['onEndReached'] = var34;
            var15['renderAccessory'] = var33;
            var15['disableContentWrappers'] = var25;
            var15['sections'] = var32;
            var32 = 'disabled';
            var15['stickySectionsVariant'] = var32;
            var15['renderSection'] = var31;
            var15['sectionSize'] = var30;
            var15['renderItem'] = var29;
            var15['itemSize'] = var28;
            var15['renderSectionFooter'] = var27;
            var15['sectionFooterSize'] = var26;
            var15['optimizeListItemRender'] = var25;
            var15['getRecyclerKey'] = var22;
            var22 = _closure1_slot18;
            var21 = 'section';
            var21 = var22.bind(var4)(var24, var23, var21);
            var15['initialScrollSection'] = var21;
            var21 = 'item';
            var21 = var22.bind(var4)(var24, var23, var21);
            var15['initialScrollItem'] = var21;
            var21 = 'center';
            var15['initialScrollOrientation'] = var21;
            var15['onScroll'] = var14;
            var14 = var18.id;
            var14 = var17.bind(var4)(var20, var15, var14);
            _fun0005_ip = 62; continue _fun0005;
case 60:
            var15 = 36;
            var15 = var19[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var15['guild'] = var18;
            var14 = var17.bind(var4)(var16, var15);
case 62:
            var13[1] = var14;
            var11['children'] = var13;
            var11 = var12.bind(var4)(var9, var11);
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot17 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        var4 = _closure1_slot14;
        var3 = _closure1_slot15;
        var2 = {};
        var8 = _closure1_slot13;
        var7 = _closure1_slot21;
        var5 = {};
        var10 = arg1;
        var11 = var5;
        var1 = copyDataProperties(var11, var10);
        var1 = undefined;
        var7 = var8.bind(var1)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot13;
        var7 = _closure1_slot0;
        var9 = _closure1_slot2;
        var6 = 48;
        var6 = var9[var6];
        var6 = var7.bind(var1)(var6);
        var7 = var6.TTIFirstContentfulPaint;
        var6 = {'label': 'channel-list', 'checkFocusedScreen': 'guilds'};
        var6 = var8.bind(var1)(var7, var6);
        var5[1] = var6;
        var2['children'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 49;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/RedesignChannelList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();