// app/modules/channel_list_v2/native/RedesignChannelList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
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
            var10 = var3.gameClaimMarkAsDismissed;
            var9 = var3.applicationAccountLinkMarkAsDismissed;
            var8 = var3.startApplicationAccountLinkAuthorization;
            var7 = var3.accountLinkApplication;
            var3 = _closure1_slot0;
            var11 = 23;
            var11 = var4[var11];
            var13 = var3.bind(var5)(var11);
            var12 = var13.useStateFromStoresObject;
            var14 = _closure1_slot7;
            var11 = new Array(1);
            var11[0] = var14;
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
            var1 = var12.bind(var13)(var11, var1);
            var12 = var1.guildChannels;
            var11 = var1.guildChannelsVersion;
            var1 = 40;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useShouldRenderChannelList;
            var3 = var1.bind(var3)();
            var1 = null;
            if(!var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var4 = _closure1_slot14;
            var3 = _closure1_slot17;
            var2 = {};
            var16 = var2;
            var15 = var6;
            var6 = copyDataProperties(var16, var15);
            var6 = 'guildChannels';
            var2[5] = var12;
            var6 = 'guildChannelsVersion';
            var2[5] = var11;
            var6 = 'gameClaimMarkAsDismissed';
            var2[5] = var10;
            var6 = 'applicationAccountLinkMarkAsDismissed';
            var2[5] = var9;
            var6 = 'startApplicationAccountLinkAuthorization';
            var2[5] = var8;
            var6 = 'accountLinkApplication';
            var2[5] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 12:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function FavoriteChannels(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var11 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 41;
            var1 = var4[var1];
            var6 = undefined;
            var2 = var3.bind(var6)(var1);
            var1 = var2.useFavoritesGuildChannelList;
            var1 = var1.bind(var2)();
            var7 = var1.guildChannels;
            var2 = var1.shouldShowEmptyState;
            var1 = 40;
            var1 = var4[var1];
            var3 = var3.bind(var6)(var1);
            var1 = var3.useShouldRenderChannelList;
            var3 = var1.bind(var3)();
            var1 = null;
            if(!var3) { _fun0003_ip = 14; continue _fun0003 }
case 6:
            if(var2) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var4 = _closure1_slot14;
            var3 = _closure1_slot17;
            var2 = {};
            var16 = var2;
            var15 = var11;
            var5 = copyDataProperties(var16, var15);
            var5 = 'guildChannels';
            var2[4] = var7;
            var7 = 0;
            var5 = 'guildChannelsVersion';
            var2[4] = var7;
            var2 = var4.bind(var6)(var3, var2);
            _fun0003_ip = 17; continue _fun0003;
case 15:
            var5 = _closure1_slot15;
            var9 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 34;
            var3 = var12[var3];
            var4 = var9.bind(var6)(var3);
            var3 = {};
            var7 = var11.style;
            var3['style'] = var7;
            var7 = var11.contentInset;
            var3['contentInset'] = var7;
            var13 = _closure1_slot14;
            var7 = 42;
            var7 = var12[var7];
            var10 = var9.bind(var6)(var7);
            var7 = {'guild': null, 'showExtraButtons': false, 'canOpenGuildActionSheet': false};
            var14 = var11.guild;
            var7['guild'] = var14;
            var10 = var13.bind(var6)(var10, var7);
            var7 = new Array(2);
            var7[0] = var10;
            var10 = _closure1_slot14;
            var8 = 36;
            var8 = var12[var8];
            var9 = var9.bind(var6)(var8);
            var8 = {};
            var11 = var11.guild;
            var8['guild'] = var11;
            var8 = var10.bind(var6)(var9, var8);
            var7[1] = var8;
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 17:
            var1 = var2;
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
            var4 = 23;
            var10 = var9[var4];
            var5 = undefined;
            var14 = var7.bind(var5)(var10);
            var13 = var14.useStateFromStores;
            var10 = _closure1_slot9;
            var12 = new Array(1);
            var12[0] = var10;
            var10 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var13.bind(var14)(var12, var10);
            var4 = var9[var4];
            var9 = var7.bind(var5)(var4);
            var7 = var9.useStateFromStores;
            var10 = _closure1_slot10;
            var4 = new Array(1);
            var4[0] = var10;
            var3 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getVoiceChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var7.bind(var9)(var4, var3);
            var3 = _closure1_slot13;
            if(!(var8 !== var3)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            if(!(var1 != var12)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var1 = _closure1_slot12;
            if(!(var8 !== var1)) { _fun0004_ip = 20; continue _fun0004 }
case 22:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 45;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isFavoritesGuildId;
            var1 = var1.bind(var3)(var8);
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 46;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.shouldNSFWGateGuild;
            var1 = var1.bind(var3)(var8);
            var7 = _closure1_slot14;
            if(var1) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var3 = _closure1_slot19;
            var1 = {};
            var17 = var1;
            var16 = var6;
            var4 = copyDataProperties(var17, var16);
            var4 = 'guild';
            var1[3] = var12;
            var4 = 'selectedChannelId';
            var1[3] = var11;
            var4 = 'selectedVoiceChannelId';
            var1[3] = var10;
            var1 = var7.bind(var5)(var3, var1);
            _fun0004_ip = 27; continue _fun0004;
case 25:
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
case 27:
            _fun0004_ip = 28; continue _fun0004;
case 23:
            var7 = _closure1_slot14;
            var4 = _closure1_slot20;
            var3 = {};
            var17 = var3;
            var16 = var6;
            var9 = copyDataProperties(var17, var16);
            var9 = 'guild';
            var3[8] = var12;
            var9 = 'selectedChannelId';
            var3[8] = var11;
            var9 = 'selectedVoiceChannelId';
            var3[8] = var10;
            var1 = var7.bind(var5)(var4, var3);
case 28:
            _fun0004_ip = 29; continue _fun0004;
case 20:
            var7 = _closure1_slot14;
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
case 29:
            _fun0004_ip = 30; continue _fun0004;
case 18:
            var4 = _closure1_slot14;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 43;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var6 = var6.style;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 30:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
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
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.EMPTY_NUX_SERVER;
    var _closure1_slot12 = var8;
    var4 = var4.MOBILE_GUILD_UPSELL_LIST;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot14 = var8;
    var8 = var4.jsxs;
    var _closure1_slot15 = var8;
    var4 = var4.Fragment;
    var _closure1_slot16 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var11 = var2.contentInset;
            var39 = var2.gameClaimMarkAsDismissed;
            var _closure2_slot0 = var39;
            var16 = var2.guild;
            var _closure2_slot1 = var16;
            var23 = var2.guildChannels;
            var _closure2_slot2 = var23;
            var22 = var2.selectedChannelId;
            var _closure2_slot3 = var22;
            var9 = var2.selectedVoiceChannelId;
            var _closure2_slot4 = var9;
            var15 = var2.style;
            var30 = var2.applicationAccountLinkMarkAsDismissed;
            var _closure2_slot5 = var30;
            var29 = var2.startApplicationAccountLinkAuthorization;
            var _closure2_slot6 = var29;
            var18 = var2.accountLinkApplication;
            var _closure2_slot7 = var18;
            var14 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = 14;
            var2 = var17[var2];
            var4 = undefined;
            var3 = var14.bind(var4)(var2);
            var2 = 'ChannelList';
            var2 = var3.bind(var4)(var2);
            var _closure2_slot8 = var2;
            var6 = _closure1_slot0;
            var3 = 15;
            var3 = var17[var3];
            var5 = var6.bind(var4)(var3);
            var3 = var5.useCategoryStyles;
            var7 = var3.bind(var5)();
            var _closure2_slot9 = var7;
            var5 = 16;
            var3 = var17[var5];
            var3 = var14.bind(var4)(var3);
            var3 = var3.bind(var4)(var16);
            var25 = var3.bannerHeight;
            var _closure2_slot10 = var25;
            var10 = var3.bannerWidth;
            var _closure2_slot11 = var10;
            var13 = var3.headerHeight;
            var _closure2_slot12 = var13;
            var8 = var3.fontScale;
            var _closure2_slot13 = var8;
            var36 = var3.listTop;
            var35 = var3.listBottom;
            var34 = var3.listPaddingBottom;
            var24 = var3.listViewportHeight;
            var _closure2_slot14 = var24;
            var3 = _closure1_slot4;
            var19 = var3.useRef;
            var12 = null;
            var38 = var19.bind(var3)(var12);
            var _closure2_slot15 = var38;
            var21 = var3.useEffect;
            var19 = new Array(2);
            var19[0] = var38;
            var19[1] = var23;
            var12 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.registerFastListChannelVisibilityMethod;
                var3 = _closure2_slot15;
                var2 = _closure2_slot2;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var12 = var21.bind(var3)(var12, var19);
            var19 = var23.getSections;
            var12 = false;
            var31 = var19.bind(var23)(var12);
            var _closure2_slot16 = var31;
            var26 = var16.id;
            var12 = 18;
            var12 = var17[var12];
            var21 = var6.bind(var4)(var12);
            var19 = var21.useExternalScrollEventHandler;
            var12 = {};
            var12['id'] = var26;
            var12 = var19.bind(var21)(var12);
            var26 = var3.useCallback;
            var21 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getState;
                var2 = var1.bind(var2)();
                var1 = var2.noteInteraction;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var19 = new Array(0);
            var19 = var26.bind(var3)(var21, var19);
            var26 = var3.useCallback;
            var21 = new Array(3);
            var21[0] = var23;
            var21[1] = var16;
            var21[2] = var13;
            var13 = function(arg1) {
                var4 = _closure1_slot14;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 19;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = arg1;
                var1['fastList'] = var5;
                var6 = _closure2_slot2;
                var1['guildChannels'] = var6;
                var6 = _closure2_slot1;
                var1['guild'] = var6;
                var5 = _closure2_slot12;
                var1['headerHeight'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var32 = var26.bind(var3)(var13, var21);
            var21 = var3.useCallback;
            var13 = new Array(3);
            var13[0] = var16;
            var13[1] = var25;
            var13[2] = var10;
            var10 = function(arg1) {
                var5 = _closure1_slot14;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 20;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = {};
                var1 = _closure2_slot1;
                var2['guild'] = var1;
                var7 = arg1;
                var7 = var7.scrollPosValue;
                var2['scrollPosition'] = var7;
                var7 = _closure2_slot10;
                var2['bannerHeight'] = var7;
                var6 = _closure2_slot11;
                var2['bannerWidth'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var37 = var21.bind(var3)(var10, var13);
            var21 = var3.useCallback;
            var13 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.logChannelListEndReached;
                var2 = var2.bind(var3)();
                return var1;
            };
            var10 = new Array(0);
            var33 = var21.bind(var3)(var13, var10);
            var10 = 22;
            var10 = var17[var10];
            var13 = var6.bind(var4)(var10);
            var10 = var13.useRecentlyActiveChannelsEnabled;
            var25 = var10.bind(var13)();
            var _closure2_slot17 = var25;
            var10 = 23;
            var10 = var17[var10];
            var27 = var6.bind(var4)(var10);
            var26 = var27.useStateFromStores;
            var10 = _closure1_slot11;
            var21 = new Array(1);
            var21[0] = var10;
            var10 = var16.id;
            var13 = new Array(1);
            var13[0] = var10;
            var10 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getVoiceStates;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var26.bind(var27)(var21, var10, var13);
            var _closure2_slot18 = var10;
            var13 = 24;
            var13 = var17[var13];
            var26 = var6.bind(var4)(var13);
            var21 = var26.useOptInEnabledForGuild;
            var13 = var16.id;
            var13 = var21.bind(var26)(var13);
            var _closure2_slot19 = var13;
            var21 = 25;
            var21 = var17[var21];
            var27 = var6.bind(var4)(var21);
            var26 = var27.useGuildLiveChannelNoticeInfo;
            var21 = var16.id;
            var27 = var26.bind(var27)(var21);
            var21 = 26;
            var21 = var17[var21];
            var26 = var6.bind(var4)(var21);
            var21 = var26.getScaledLiveChannelNoticeHeight;
            var26 = var21.bind(var26)(var8, var27);
            var _closure2_slot20 = var26;
            var21 = function useDrawerAwareScrollToTop(arg1) {
                var6 = arg1;
                var _closure3_slot0 = var6;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 11;
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
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 12;
                            var4 = var7[var1];
                            var1 = undefined;
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.coerceGuildsRoute;
                            var6 = _closure1_slot1;
                            var3 = 13;
                            var3 = var7[var3];
                            var3 = var6.bind(var1)(var3);
                            var3 = var3.bind(var1)();
                            var4 = var4.bind(var5)(var3);
                            var3 = null;
                            if(!(var3 != var4)) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                            var5 = _closure4_slot0;
                            var4 = -1;
                            if(!(var4 !== var5)) { _fun0006_ip = 33; continue _fun0006 }
case 8:
                            var5 = global;
                            var6 = var5.clearTimeout;
                            var5 = _closure4_slot0;
                            var5 = var6.bind(var1)(var5);
                            _closure4_slot0 = var4;
                            _fun0006_ip = 31; continue _fun0006;
case 33:
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
                                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                        var1 = _closure1_slot6;
                                        var1 = var1.useReducedMotion;
                                        var2 = _closure6_slot0;
                                        if(!var2) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                                        var3 = _closure5_slot0;
                                        var3 = var3.defaultPrevented;
                                        var2 = !var3;
case 34:
                                        if(!var2) { _fun0007_ip = 4; continue _fun0007 }
case 36:
                                        var3 = _closure3_slot0;
                                        var4 = var3.current;
                                        var3 = null;
                                        var2 = var3 != var4;
case 4:
                                        if(!var2) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                                        var2 = _closure3_slot0;
                                        var3 = var2.current;
                                        var2 = var3.scrollToTop;
                                        var1 = !var1;
                                        var1 = var2.bind(var3)(var1);
case 37:
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
case 31:
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
            var21 = var21.bind(var4)(var38);
            var28 = var3.useCallback;
            var27 = new Array(3);
            var27[0] = var23;
            var27[1] = var31;
            var27[2] = var2;
            var21 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = arg1;
                    var8 = 1;
                    var9 = var3 - var8;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 27;
                    var1 = var4[var1];
                    var4 = undefined;
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                    var6 = var9;
                    if(!(var3 <= var1)) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                    var7 = 0;
                    var6 = var9;
                    if(!(var9 >= var7)) { _fun0008_ip = 39; continue _fun0008 }
case 41:
                    var1 = _closure2_slot16;
                    var1 = var1[var9];
                    var3 = var9;
                    var6 = var3;
                    if(!(!(var1 > var7))) { _fun0008_ip = 39; continue _fun0008 }
case 42:
                    var9 = var3 - var8;
                    var6 = var9;
                    if(!(var6 >= var7)) { _fun0008_ip = 39; continue _fun0008 }
case 37:
                    var1 = _closure2_slot16;
                    var1 = var1[var9];
                    var3 = var9;
                    var6 = var3;
                    if(!(var1 > var7)) { _fun0008_ip = 42; continue _fun0008 }
case 39:
                    var1 = -1;
                    var1 = var1 !== var6;
                    if(!var1) { _fun0008_ip = 43; continue _fun0008 }
case 44:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 28;
                    var2 = var5[var2];
                    var5 = var3.bind(var4)(var2);
                    var4 = var5.getChannelListSectionHasFooterDivider;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot8;
                    var2 = var4.bind(var5)(var3, var6, var2);
                    var1 = !var2;
case 43:
                    return var1;
                }
            };
            var21 = var28.bind(var3)(var21, var27);
            var _closure2_slot21 = var21;
            var28 = var3.useCallback;
            var27 = new Array(6);
            var27[0] = var23;
            var27[1] = var8;
            var27[2] = var10;
            var27[3] = var26;
            var27[4] = var24;
            var27[5] = var2;
            var26 = function(arg1, arg2) {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 28;
                var2 = var5[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var2);
                var4 = var6.getChannelListItemSize;
                var2 = {};
                var8 = _closure2_slot2;
                var2['guildChannels'] = var8;
                var8 = arg1;
                var2['section'] = var8;
                var8 = arg2;
                var2['row'] = var8;
                var8 = _closure2_slot13;
                var2['fontScale'] = var8;
                var8 = _closure2_slot18;
                var2['voiceStates'] = var8;
                var8 = _closure2_slot20;
                var2['liveChannelNoticeHeight'] = var8;
                var8 = _closure2_slot14;
                var2['listViewportHeight'] = var8;
                var7 = _closure2_slot8;
                var2['isRefreshEnabled'] = var7;
                var2 = var4.bind(var6)(var2);
                var4 = _closure1_slot1;
                var1 = 29;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)(var2);
                return var1;
            };
            var27 = var28.bind(var3)(var26, var27);
            var28 = var3.useCallback;
            var26 = new Array(7);
            var26[0] = var23;
            var26[1] = var22;
            var26[2] = var16;
            var26[3] = var39;
            var26[4] = var30;
            var26[5] = var29;
            var26[6] = var18;
            var18 = function(arg1, arg2) {
                var4 = _closure1_slot14;
                var3 = _closure1_slot5;
                var2 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 28;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var5);
                var6 = var7.renderChannelListItem;
                var5 = {};
                var9 = _closure2_slot2;
                var5['guildChannels'] = var9;
                var9 = arg1;
                var5['section'] = var9;
                var9 = arg2;
                var5['row'] = var9;
                var9 = _closure2_slot3;
                var5['selectedChannelId'] = var9;
                var9 = _closure2_slot1;
                var5['guild'] = var9;
                var9 = _closure2_slot0;
                var5['gameClaimMarkAsDismissed'] = var9;
                var9 = _closure2_slot5;
                var5['applicationAccountLinkMarkAsDismissed'] = var9;
                var9 = _closure2_slot6;
                var5['startApplicationAccountLinkAuthorization'] = var9;
                var8 = _closure2_slot7;
                var5['accountLinkApplication'] = var8;
                var5 = var6.bind(var7)(var5);
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var28 = var28.bind(var3)(var18, var26);
            var26 = var3.useCallback;
            var18 = new Array(3);
            var18[0] = var23;
            var18[1] = var8;
            var18[2] = var21;
            var8 = function(arg1) {
                var9 = arg1;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 28;
                var2 = var5[var2];
                var3 = undefined;
                var8 = var4.bind(var3)(var2);
                var7 = var8.getChannelListSectionHeaderSize;
                var6 = _closure2_slot2;
                var11 = _closure2_slot13;
                var2 = _closure2_slot21;
                var10 = var2.bind(var3)(var9);
                var14 = var8;
                var13 = var6;
                var12 = var9;
                var2 = var14[var7](var13, var12, var11, var10, var9);
                var4 = _closure1_slot1;
                var1 = 29;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)(var2);
                return var1;
            };
            var29 = var26.bind(var3)(var8, var18);
            var18 = var3.useCallback;
            var8 = new Array(5);
            var8[0] = var23;
            var8[1] = var25;
            var8[2] = var21;
            var8[3] = var7;
            var8[4] = var2;
            var7 = function(arg1) {
                var10 = arg1;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 28;
                var2 = var4[var2];
                var4 = undefined;
                var9 = var3.bind(var4)(var2);
                var8 = var9.renderChannelListSectionHeader;
                var7 = _closure2_slot2;
                var14 = _closure2_slot17;
                var3 = _closure2_slot21;
                var13 = var3.bind(var4)(var10);
                var12 = _closure2_slot9;
                var11 = _closure2_slot8;
                var17 = var9;
                var16 = var7;
                var15 = var10;
                var5 = var17[var8](var16, var15, var14, var13, var12, var11, var10);
                var3 = _closure1_slot14;
                var2 = _closure1_slot5;
                var1 = {};
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var30 = var18.bind(var3)(var7, var8);
            var18 = var3.useCallback;
            var8 = new Array(6);
            var8[0] = var23;
            var8[1] = var13;
            var8[2] = var10;
            var8[3] = var22;
            var8[4] = var9;
            var8[5] = var2;
            var7 = function(arg1) {
                var9 = arg1;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 28;
                var2 = var5[var4];
                var3 = undefined;
                var11 = var6.bind(var3)(var2);
                var10 = var11.calculateVoiceSummary;
                var7 = {};
                var8 = _closure2_slot2;
                var7['guildChannels'] = var8;
                var7['section'] = var9;
                var12 = _closure2_slot19;
                var7['optInChannelsEnabled'] = var12;
                var12 = _closure2_slot18;
                var7['voiceStates'] = var12;
                var12 = _closure2_slot3;
                var7['selectedChannelId'] = var12;
                var12 = _closure2_slot4;
                var7['selectedVoiceChannelId'] = var12;
                var14 = var10.bind(var11)(var7);
                var4 = var5[var4];
                var6 = var6.bind(var3)(var4);
                var4 = var6.getChannelListSectionFooterSize;
                var13 = _closure2_slot8;
                var17 = var6;
                var16 = var8;
                var15 = var9;
                var2 = var17[var4](var16, var15, var14, var13, var12);
                var4 = _closure1_slot1;
                var1 = 29;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)(var2);
                return var1;
            };
            var25 = var18.bind(var3)(var7, var8);
            var8 = var3.useCallback;
            var7 = new Array(6);
            var7[0] = var23;
            var7[1] = var13;
            var7[2] = var10;
            var7[3] = var22;
            var7[4] = var9;
            var7[5] = var2;
            var2 = function(arg1) {
                var9 = arg1;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 28;
                var2 = var6[var3];
                var4 = undefined;
                var11 = var5.bind(var4)(var2);
                var10 = var11.calculateVoiceSummary;
                var7 = {};
                var8 = _closure2_slot2;
                var7['guildChannels'] = var8;
                var7['section'] = var9;
                var12 = _closure2_slot19;
                var7['optInChannelsEnabled'] = var12;
                var12 = _closure2_slot18;
                var7['voiceStates'] = var12;
                var12 = _closure2_slot3;
                var7['selectedChannelId'] = var12;
                var12 = _closure2_slot4;
                var7['selectedVoiceChannelId'] = var12;
                var14 = var10.bind(var11)(var7);
                var3 = var6[var3];
                var6 = var5.bind(var4)(var3);
                var5 = var6.renderChannelListSectionFooter;
                var15 = _closure2_slot15;
                var13 = _closure2_slot8;
                var18 = var6;
                var17 = var8;
                var16 = var9;
                var5 = var18[var5](var17, var16, var15, var14, var13, var12);
                var3 = _closure1_slot14;
                var2 = _closure1_slot5;
                var1 = {};
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var26 = var8.bind(var3)(var2, var7);
            var8 = var3.useMemo;
            var7 = new Array(1);
            var7[0] = var31;
            var2 = function() {
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
            var13 = var8.bind(var3)(var2, var7);
            var7 = var3.useCallback;
            var2 = new Array(1);
            var2[0] = var23;
            var1 = function(arg1, arg2, arg3) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.getFastListRecyclerKey;
                var10 = _closure2_slot2;
                var9 = arg1;
                var8 = arg2;
                var7 = arg3;
                var11 = var6;
                var1 = var11[var5](var10, var9, var8, var7, var6);
                return var1;
            };
            var21 = var7.bind(var3)(var1, var2);
            var2 = var3.useContext;
            var1 = 30;
            var1 = var17[var1];
            var1 = var14.bind(var4)(var1);
            var39 = var2.bind(var3)(var1);
            var1 = 31;
            var2 = var17[var1];
            var3 = var6.bind(var4)(var2);
            var2 = var3.useYouBarTotalHeight;
            var40 = var2.bind(var3)(var5);
            var1 = var17[var1];
            var3 = var6.bind(var4)(var1);
            var2 = var3.useYouBarTotalHeight;
            var1 = -16;
            var41 = var2.bind(var3)(var1);
            var3 = _closure1_slot14;
            var5 = 32;
            var1 = var17[var5];
            var2 = var14.bind(var4)(var1);
            var1 = {};
            var5 = var17[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.Profiles;
            var5 = var5.Channels;
            var1['profile'] = var5;
            var7 = _closure1_slot14;
            var5 = 33;
            var5 = var17[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.LayerScope;
            var5 = {};
            var10 = _closure1_slot15;
            var8 = 34;
            var8 = var17[var8];
            var9 = var14.bind(var4)(var8);
            var8 = {};
            var8['style'] = var15;
            var8['contentInset'] = var11;
            var15 = _closure1_slot14;
            var11 = 35;
            var11 = var17[var11];
            var14 = var14.bind(var4)(var11);
            var11 = {};
            var11['guild'] = var16;
            var14 = var15.bind(var4)(var14, var11);
            var11 = new Array(2);
            var11[0] = var14;
            var15 = _closure1_slot14;
            var14 = _closure1_slot1;
            var17 = _closure1_slot2;
            if(var13) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var13 = 37;
            var13 = var17[var13];
            var18 = var14.bind(var4)(var13);
            var13 = {};
            var13['insetEnd'] = var40;
            var40 = {};
            var40['bottom'] = var41;
            var13['scrollIndicatorInsets'] = var40;
            var13['waitFor'] = var39;
            var13['ref'] = var38;
            var13['chunkBase'] = var24;
            var24 = true;
            var13['stickyHeaderFooter'] = var24;
            var13['renderHeader'] = var37;
            var13['headerSize'] = var36;
            var36 = var35 + var34;
            var13['footerSize'] = var36;
            var34 = var35 + var34;
            var13['endReachedThreshold'] = var34;
            var13['onEndReached'] = var33;
            var13['renderAccessory'] = var32;
            var13['disableContentWrappers'] = var24;
            var13['sections'] = var31;
            var31 = 'disabled';
            var13['stickySectionsVariant'] = var31;
            var13['renderSection'] = var30;
            var13['sectionSize'] = var29;
            var13['renderItem'] = var28;
            var13['itemSize'] = var27;
            var13['renderSectionFooter'] = var26;
            var13['sectionFooterSize'] = var25;
            var13['optimizeListItemRender'] = var24;
            var13['getRecyclerKey'] = var21;
            var21 = _closure1_slot18;
            var20 = 'section';
            var20 = var21.bind(var4)(var23, var22, var20);
            var13['initialScrollSection'] = var20;
            var20 = 'item';
            var20 = var21.bind(var4)(var23, var22, var20);
            var13['initialScrollItem'] = var20;
            var20 = 'center';
            var13['initialScrollOrientation'] = var20;
            var13['onScroll'] = var19;
            var13['onScrollWorklet'] = var12;
            var12 = var16.id;
            var12 = var15.bind(var4)(var18, var13, var12);
            _fun0005_ip = 47; continue _fun0005;
case 45:
            var13 = 36;
            var13 = var17[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var13['guild'] = var16;
            var12 = var15.bind(var4)(var14, var13);
case 47:
            var11[1] = var12;
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
        var4 = _closure1_slot15;
        var3 = _closure1_slot16;
        var2 = {};
        var8 = _closure1_slot14;
        var7 = _closure1_slot21;
        var5 = {};
        var10 = arg1;
        var11 = var5;
        var1 = copyDataProperties(var11, var10);
        var1 = undefined;
        var7 = var8.bind(var1)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot14;
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