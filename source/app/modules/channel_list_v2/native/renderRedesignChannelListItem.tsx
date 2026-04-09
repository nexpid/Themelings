// app/modules/channel_list_v2/native/renderRedesignChannelListItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var1 = function hasGuildActions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.getGuildActionSection;
            var2 = var1.bind(var2)();
            var1 = var2.isEmpty;
            var1 = var1.bind(var2)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.getRows;
            var3 = var1.bind(var2)();
            var2 = var3.length;
            var1 = 1;
            var1 = var1 === var2;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = 0;
            var3 = var3[var2];
            var2 = _closure1_slot17;
            var2 = var2.GUILD_SCHEDULED_EVENTS;
            var1 = var3 === var2;
case 4:
            var1 = !var1;
            return var1;
case 2:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function renderThreads(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = arg2;
        var _closure2_slot1 = var3;
        var3 = var2.threadIds;
        var2 = var3.map;
        var1 = function(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var6 = arg1;
                var3 = _closure1_slot7;
                var1 = var3.getChannel;
                var3 = var1.bind(var3)(var6);
                var1 = null;
                var3 = var1 == var3;
                if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var5 = _closure1_slot18;
                var4 = _closure1_slot3;
                var3 = {};
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 34;
                var7 = var7[var2];
                var2 = undefined;
                var8 = var8.bind(var2)(var7);
                var7 = {};
                var7['threadId'] = var6;
                var9 = arg2;
                var7['threadIndex'] = var9;
                var10 = _closure2_slot0;
                var10 = var10.threadCount;
                var7['threadCount'] = var10;
                var9 = _closure2_slot1;
                var9 = var9 === var6;
                var7['selected'] = var9;
                var7 = var5.bind(var2)(var8, var7);
                var3['children'] = var7;
                var1 = var5.bind(var2)(var4, var3, var6);
case 6:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function calculateVoiceChannelHeaderInfo(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var2 = var3.getCategoryFromSection;
            var1 = var3.voiceChannelsSectionNumber;
            var4 = var2.bind(var3)(var1);
            var1 = null;
            var5 = var1 == var4;
            if(var5) { _fun0003_ip = 8; continue _fun0003 }
case 7:
            var1 = var4.isEmpty;
            var5 = var1.bind(var4)();
case 8:
            var3 = false;
            var2 = false;
            if(var5) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var4 = var4.isCollapsed;
            var1 = false;
            if(!var4) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var1 = true;
case 11:
            var3 = true;
            var2 = var1;
case 9:
            var1 = {};
            var1['showDivider'] = var3;
            var1['isCollapsed'] = var2;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function calculateVoiceChannelButtonInfo(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var2 = var3.getCategoryFromSection;
            var1 = arg2;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 != var2)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var1 = var2.getHiddenChannelIds;
            var1 = var1.bind(var2)();
            var1 = var1.length;
            var3 = 0;
            if(!(!(var1 > var3))) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var1 = var2.isEmpty;
            var1 = var1.bind(var2)();
            if(!var1) { _fun0004_ip = 14; continue _fun0004 }
case 12:
            var1 = {'render': false, 'lastShownChannelActive': false};
            return var1;
case 14:
            var1 = var2.getShownChannelIds;
            var1 = var1.bind(var2)();
            var4 = var1.length;
            var1 = var2.getShownChannelIds;
            var2 = var1.bind(var2)();
            var1 = 1;
            var1 = var4 - var1;
            var5 = var2[var1];
            var1 = {};
            var2 = true;
            var1['render'] = var2;
            var4 = _closure1_slot9;
            var2 = var4.countVoiceStatesForChannel;
            var2 = var2.bind(var4)(var5);
            var2 = var2 > var3;
            var1['lastShownChannelActive'] = var2;
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.THREADED_CHANNEL_TYPES;
    var _closure1_slot5 = var7;
    var4 = var4.THREAD_CHANNEL_TYPES;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.CATEGORY_MARGIN_TOP;
    var _closure1_slot10 = var7;
    var7 = var4.getScaledCategoryRowHeight;
    var _closure1_slot11 = var7;
    var7 = var4.getScaledChannelRowHeight;
    var _closure1_slot12 = var7;
    var7 = var4.getScaledChannelSubtitleHeight;
    var _closure1_slot13 = var7;
    var4 = var4.STICKY_HEADER_MARGIN_BOTTOM;
    var _closure1_slot14 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ChannelListChannelNoticeRow;
    var _closure1_slot16 = var7;
    var4 = var4.ChannelListGuildActionRow;
    var _closure1_slot17 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot18 = var7;
    var7 = var4.jsxs;
    var _closure1_slot19 = var7;
    var4 = var4.Fragment;
    var _closure1_slot20 = var4;
    var4 = {};
    var7 = {};
    var10 = 16;
    var7['marginHorizontal'] = var10;
    var4['nonChannelContainer'] = var7;
    var7 = {};
    var8 = 11;
    var11 = var6[var8];
    var11 = var5.bind(var1)(var11);
    var11 = var11.LIVE_CHANNEL_NOTICE_MARGIN_TOP;
    var7['marginTop'] = var11;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM;
    var7['marginBottom'] = var8;
    var7['marginHorizontal'] = var10;
    var4['liveChannelNotice'] = var7;
    var7 = {};
    var8 = 12;
    var11 = var6[var8];
    var11 = var5.bind(var1)(var11);
    var11 = var11.GAME_CLAIM_NOTICE_MARGIN_TOP;
    var7['marginTop'] = var11;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.GAME_CLAIM_NOTICE_MARGIN_BOTTOM;
    var7['marginBottom'] = var8;
    var7['marginHorizontal'] = var10;
    var4['gameClaimNotice'] = var7;
    var7 = {};
    var8 = 13;
    var11 = var6[var8];
    var11 = var5.bind(var1)(var11);
    var11 = var11.ACCOUNT_LINK_BANNER_MARGIN_TOP;
    var7['marginTop'] = var11;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ACCOUNT_LINK_BANNER_MARGIN_BOTTOM;
    var7['marginBottom'] = var8;
    var7['marginHorizontal'] = var10;
    var4['applicationAccountLinkNotice'] = var7;
    var7 = {};
    var7['marginHorizontal'] = var10;
    var8 = 14;
    var11 = var6[var8];
    var11 = var9.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var7['marginTop'] = var11;
    var4['showAllVoiceChannelsButtonLastShownChannelActive'] = var7;
    var7 = {};
    var7['marginHorizontal'] = var10;
    var8 = var6[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.spacing;
    var8 = var8.PX_8;
    var7['marginTop'] = var8;
    var4['showAllVoiceChannelsButtonLastShownChannelInactive'] = var7;
    var _closure1_slot21 = var4;
    var4 = 46;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/renderRedesignChannelListItem.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getFastListRecyclerKey(arg1, arg2, arg3, arg4) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var8 = arg3;
            var6 = arg4;
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 15;
            var3 = var1[var9];
            var1 = undefined;
            var3 = var7.bind(var1)(var3);
            var3 = var3.FastListItemTypes;
            var3 = var3.ITEM;
            if(!(var5 !== var3)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var3 = var7.bind(var1)(var3);
            var3 = var3.FastListItemTypes;
            var3 = var3.SECTION;
            if(!(var5 !== var3)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
            return var1;
case 18:
            var9 = var2.id;
            var3 = global;
            var3 = var3.HermesInternal;
            var7 = var3.concat;
            var5 = '';
            var3 = ':SECTION:';
            var3 = var7.bind(var5)(var9, var3, var8);
            return var3;
case 16:
            var3 = null;
            if(!(var3 != var6)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = 16;
            var5 = var5[var7];
            var5 = var9.bind(var1)(var5);
            var5 = var5.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var5 !== var8)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var5.bind(var1)(var4);
            var4 = var4.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var4 !== var8)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var4 = var2.getChannelFromSectionRow;
            var4 = var4.bind(var2)(var8, var6);
            var5 = var3 == var4;
            var7 = undefined;
            if(var5) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var4 = var4.channel;
            var5 = var3 == var4;
            var7 = undefined;
            if(var5) { _fun0005_ip = 26; continue _fun0005 }
case 28:
            var7 = var4.id;
case 26:
            _fun0005_ip = 29; continue _fun0005;
case 24:
            var4 = var2.getGuildActionSection;
            var5 = var4.bind(var2)();
            var4 = var5.getRow;
            var7 = var4.bind(var5)(var6);
            _fun0005_ip = 29; continue _fun0005;
case 22:
            var4 = var2.getChannelNoticeSection;
            var5 = var4.bind(var2)();
            var4 = var5.getRow;
            var7 = var4.bind(var5)(var6);
case 29:
            if(!(var3 != var7)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var14 = var2.id;
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var15 = '';
            var13 = ':SECTION:';
            var11 = ':ITEM:';
            var12 = var8;
            var10 = var7;
            var2 = var15[var5](var14, var13, var12, var11, var10, var9);
            return var2;
case 30:
            return var1;
case 20:
            return var1;
        }
    };
    var3['getFastListRecyclerKey'] = var4;
    var4 = function renderChannelListSectionHeader(arg1, arg2, arg3, arg4, arg5, arg6) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var9 = arg1;
            var11 = arg2;
            var6 = arg4;
            var5 = arg5;
            var4 = arg6;
            var1 = var9.favoritesSectionNumber;
            if(!(var1 !== var11)) { _fun0006_ip = 32; continue _fun0006 }
case 33:
            var1 = var9.recentsSectionNumber;
            if(!(var1 !== var11)) { _fun0006_ip = 34; continue _fun0006 }
case 35:
            var1 = var9.voiceChannelsSectionNumber;
            if(!(var1 !== var11)) { _fun0006_ip = 36; continue _fun0006 }
case 5:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 20;
            var1 = var7[var1];
            var8 = undefined;
            var3 = var3.bind(var8)(var1);
            var1 = var3.isNamedCategorySection;
            var3 = var1.bind(var3)(var11);
            var1 = null;
            if(var3) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            return var1;
case 37:
            var3 = var9.getNamedCategoryFromSection;
            var10 = var3.bind(var9)(var11);
            var3 = var1 == var10;
            var1 = null;
            if(var3) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var7 = _closure1_slot18;
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 17;
            var2 = var12[var2];
            var2 = var3.bind(var8)(var2);
            var3 = var2.CategoryChannel;
            var2 = {};
            var10 = var10.record;
            var2['channel'] = var10;
            var2['withMarginTop'] = var6;
            var1 = var7.bind(var8)(var3, var2);
case 39:
            return var1;
case 36:
            var1 = _closure1_slot24;
            var7 = undefined;
            var1 = var1.bind(var7)(var9);
            var8 = var1.showDivider;
            var13 = var1.isCollapsed;
            var3 = _closure1_slot19;
            var2 = _closure1_slot3;
            var1 = {};
            var14 = null;
            if(!var8) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var16 = _closure1_slot18;
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var8 = 19;
            var8 = var17[var8];
            var15 = var15.bind(var7)(var8);
            var8 = {};
            var14 = var16.bind(var7)(var15, var8);
case 41:
            var8 = new Array(2);
            var8[0] = var14;
            var10 = null;
            if(!var13) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var12 = 17;
            var12 = var19[var12];
            var14 = var18.bind(var7)(var12);
            var13 = var14.renderCategoryItem;
            var12 = {};
            var15 = 18;
            var16 = var19[var15];
            var16 = var18.bind(var7)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var7)(var15);
            var15 = var15.t;
            var15 = var15.V/u9Dy;
            var15 = var16.bind(var17)(var15);
            var12['name'] = var15;
            var12['styles'] = var5;
            var12['isRefreshEnabled'] = var4;
            var10 = var13.bind(var14)(var12);
case 43:
            var8[1] = var10;
            var1['children'] = var8;
            var1 = var3.bind(var7)(var2, var1);
            return var1;
case 34:
            var8 = _closure1_slot18;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 17;
            var1 = var3[var1];
            var7 = undefined;
            var2 = var2.bind(var7)(var1);
            var1 = arg3;
            if(var1) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var3 = var2.SuggestedCategory;
            var1 = {};
            var10 = var9.id;
            var1['guildId'] = var10;
            var10 = var9.getCategoryFromSection;
            var13 = var10.bind(var9)(var11);
            var11 = null;
            var12 = var11 == var13;
            var10 = undefined;
            if(var12) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var12 = var13.getShownChannelAndThreadIds;
            var10 = var12.bind(var13)();
case 47:
            if(!(var11 == var10)) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var10 = new Array(0);
case 49:
            var1['channelIds'] = var10;
            var1['withMarginTop'] = var6;
            var1 = var8.bind(var7)(var3, var1);
            _fun0006_ip = 51; continue _fun0006;
case 45:
            var3 = var2.RecentlyActiveCategory;
            var2 = {};
            var9 = var9.id;
            var2['guildId'] = var9;
            var2['withMarginTop'] = var6;
            var1 = var8.bind(var7)(var3, var2);
case 51:
            return var1;
case 32:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 17;
            var1 = var12[var1];
            var10 = undefined;
            var3 = var11.bind(var10)(var1);
            var2 = var3.renderCategoryItem;
            var1 = {};
            var7 = 18;
            var8 = var12[var7];
            var8 = var11.bind(var10)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var12[var7];
            var7 = var11.bind(var10)(var7);
            var7 = var7.t;
            var7 = var7.mlPMCy;
            var7 = var8.bind(var9)(var7);
            var1['name'] = var7;
            var1['withMarginTop'] = var6;
            var1['styles'] = var5;
            var1['isRefreshEnabled'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['renderChannelListSectionHeader'] = var4;
    var4 = function getChannelListSectionHeaderSize(arg1, arg2, arg3, arg4) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arg1;
            var9 = arg2;
            var2 = _closure1_slot11;
            var8 = undefined;
            var1 = arg3;
            var2 = var2.bind(var8)(var1);
            var6 = 0;
            var4 = arg4;
            var1 = 0;
            if(!var4) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var1 = _closure1_slot10;
case 52:
            var4 = var5.favoritesSectionNumber;
            if(!(var4 !== var9)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var4 = var5.recentsSectionNumber;
            if(!(var4 !== var9)) { _fun0007_ip = 54; continue _fun0007 }
case 56:
            var4 = var5.voiceChannelsSectionNumber;
            if(!(var4 !== var9)) { _fun0007_ip = 57; continue _fun0007 }
case 14:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 20;
            var4 = var10[var4];
            var7 = var7.bind(var8)(var4);
            var4 = var7.isNamedCategorySection;
            var7 = var4.bind(var7)(var9);
            var4 = 0;
            if(!var7) { _fun0007_ip = 58; continue _fun0007 }
case 59:
            var7 = var5.getNamedCategoryFromSection;
            var9 = var7.bind(var5)(var9);
            var7 = null;
            var9 = var7 == var9;
            var7 = 0;
            if(var9) { _fun0007_ip = 60; continue _fun0007 }
case 61:
            var7 = var2 + var1;
case 60:
            var4 = var7;
case 58:
            return var4;
case 57:
            var4 = _closure1_slot24;
            var4 = var4.bind(var8)(var5);
            var7 = var4.showDivider;
            var5 = var4.isCollapsed;
            var4 = 0;
            if(!var7) { _fun0007_ip = 62; continue _fun0007 }
case 63:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 19;
            var3 = var9[var3];
            var3 = var7.bind(var8)(var3);
            var3 = var3.DIVIDER_HEIGHT;
            var4 = var6 + var3;
case 62:
            var3 = var4;
            if(!var5) { _fun0007_ip = 64; continue _fun0007 }
case 65:
            var3 = var4 + var2;
case 64:
            return var3;
case 54:
            var1 = var2 + var1;
            return var1;
        }
    };
    var3['getChannelListSectionHeaderSize'] = var4;
    var4 = function renderChannelListSectionFooter(arg1, arg2, arg3, arg4, arg5) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arg1;
            var15 = arg2;
            var7 = arg4;
            var1 = null;
            var2 = var1 != var7;
            var9 = null;
            if(!var2) { _fun0008_ip = 66; continue _fun0008 }
case 67:
            var6 = _closure1_slot18;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 17;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.RedesignVoiceUserSummary;
            var2 = {};
            var8 = var5.id;
            var2['guildId'] = var8;
            var2['channels'] = var7;
            var9 = var6.bind(var4)(var3, var2);
case 66:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 16;
            var2 = var2[var7];
            var6 = undefined;
            var2 = var4.bind(var6)(var2);
            var2 = var2.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var2 !== var15)) { _fun0008_ip = 68; continue _fun0008 }
case 69:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var4.bind(var6)(var2);
            var2 = var2.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var2 !== var15)) { _fun0008_ip = 70; continue _fun0008 }
case 71:
            var2 = var5.favoritesSectionNumber;
            if(!(var2 !== var15)) { _fun0008_ip = 72; continue _fun0008 }
case 73:
            var2 = var5.recentsSectionNumber;
            if(!(var2 !== var15)) { _fun0008_ip = 72; continue _fun0008 }
case 74:
            var2 = var5.voiceChannelsSectionNumber;
            if(!(var2 === var15)) { _fun0008_ip = 64; continue _fun0008 }
case 75:
            var2 = _closure1_slot25;
            var4 = var2.bind(var6)(var5, var15);
            var2 = var4.render;
            var12 = var4.lastShownChannelActive;
            if(var2) { _fun0008_ip = 76; continue _fun0008 }
case 64:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 20;
            var2 = var7[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.isNamedCategorySection;
            var4 = var2.bind(var4)(var15);
            var2 = null;
            if(!var4) { _fun0008_ip = 77; continue _fun0008 }
case 41:
            var2 = var9;
case 77:
            return var2;
case 76:
            var7 = _closure1_slot19;
            var4 = _closure1_slot3;
            var2 = {};
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot18;
            var10 = _closure1_slot3;
            var9 = {};
            var13 = _closure1_slot21;
            if(var12) { _fun0008_ip = 78; continue _fun0008 }
case 79:
            var12 = var13.showAllVoiceChannelsButtonLastShownChannelInactive;
            _fun0008_ip = 80; continue _fun0008;
case 78:
            var12 = var13.showAllVoiceChannelsButtonLastShownChannelActive;
case 80:
            var9['style'] = var12;
            var14 = _closure1_slot18;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 21;
            var12 = var16[var12];
            var13 = var13.bind(var6)(var12);
            var12 = {};
            var16 = var5.id;
            var12['guildId'] = var16;
            var12['section'] = var15;
            var15 = arg3;
            var12['listRef'] = var15;
            var12 = var14.bind(var6)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var6)(var10, var9);
            var8[1] = var9;
            var2['children'] = var8;
            var2 = var7.bind(var6)(var4, var2);
            return var2;
case 72:
            var7 = _closure1_slot18;
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 19;
            var2 = var8[var2];
            var4 = var4.bind(var6)(var2);
            var2 = {};
            var2 = var7.bind(var6)(var4, var2);
            return var2;
case 70:
            var4 = arg5;
            var2 = null;
            if(!var4) { _fun0008_ip = 81; continue _fun0008 }
case 82:
            var4 = _closure1_slot22;
            var4 = var4.bind(var6)(var5);
            var2 = null;
            if(!var4) { _fun0008_ip = 81; continue _fun0008 }
case 83:
            var5 = _closure1_slot18;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 19;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = {};
            var2 = var5.bind(var6)(var4, var3);
case 81:
            return var2;
case 68:
            return var1;
        }
    };
    var3['renderChannelListSectionFooter'] = var4;
    var4 = function getChannelListSectionHasFooterDivider(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = arg1;
            var6 = arg2;
            var1 = arg3;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = 16;
            var5 = var3[var8];
            var3 = undefined;
            var5 = var7.bind(var3)(var5);
            var5 = var5.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var5 !== var6)) { _fun0009_ip = 84; continue _fun0009 }
case 15:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var7.bind(var3)(var5);
            var5 = var5.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var5 !== var6)) { _fun0009_ip = 85; continue _fun0009 }
case 86:
            var5 = var4.favoritesSectionNumber;
            if(!(var5 !== var6)) { _fun0009_ip = 87; continue _fun0009 }
case 88:
            var5 = var4.recentsSectionNumber;
            if(!(var5 !== var6)) { _fun0009_ip = 87; continue _fun0009 }
case 89:
            var5 = var4.voiceChannelsSectionNumber;
            var5 = false;
            return var5;
case 87:
            var5 = true;
            return var5;
case 85:
            if(!var1) { _fun0009_ip = 90; continue _fun0009 }
case 91:
            var2 = _closure1_slot22;
            var1 = var2.bind(var3)(var4);
case 90:
            return var1;
case 84:
            var1 = false;
            return var1;
        }
    };
    var3['getChannelListSectionHasFooterDivider'] = var4;
    var4 = function getChannelListSectionFooterSize(arg1, arg2, arg3, arg4) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var6 = arg1;
            var4 = arg2;
            var2 = null;
            var1 = arg3;
            var2 = var2 != var1;
            var1 = 0;
            var8 = 0;
            if(!var2) { _fun0010_ip = 17; continue _fun0010 }
case 92:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 22;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var3);
            var8 = var2.VOICE_USER_SUMMARY_HEIGHT;
case 17:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 16;
            var2 = var2[var9];
            var5 = undefined;
            var2 = var7.bind(var5)(var2);
            var2 = var2.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var2 !== var4)) { _fun0010_ip = 93; continue _fun0010 }
case 89:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var2 = var7.bind(var5)(var2);
            var2 = var2.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var2 !== var4)) { _fun0010_ip = 94; continue _fun0010 }
case 95:
            var2 = var6.favoritesSectionNumber;
            if(!(var2 !== var4)) { _fun0010_ip = 96; continue _fun0010 }
case 21:
            var2 = var6.recentsSectionNumber;
            if(!(var2 !== var4)) { _fun0010_ip = 96; continue _fun0010 }
case 97:
            var2 = var6.voiceChannelsSectionNumber;
            if(!(var2 !== var4)) { _fun0010_ip = 98; continue _fun0010 }
case 99:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 20;
            var2 = var9[var2];
            var7 = var7.bind(var5)(var2);
            var2 = var7.isNamedCategorySection;
            var7 = var2.bind(var7)(var4);
            var2 = 0;
            if(!var7) { _fun0010_ip = 62; continue _fun0010 }
case 100:
            var2 = var8;
case 62:
            return var2;
case 98:
            var2 = _closure1_slot25;
            var2 = var2.bind(var5)(var6, var4);
            var7 = var2.render;
            var4 = var2.lastShownChannelActive;
            var2 = var8;
            if(!var7) { _fun0010_ip = 101; continue _fun0010 }
case 28:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 23;
            var7 = var10[var7];
            var7 = var9.bind(var5)(var7);
            var7 = var7.SMALL_BUTTON_HEIGHT;
            var7 = var8 + var7;
            var8 = _closure1_slot21;
            if(var4) { _fun0010_ip = 102; continue _fun0010 }
case 103:
            var4 = var8.showAllVoiceChannelsButtonLastShownChannelInactive;
            var4 = var4.marginTop;
            _fun0010_ip = 104; continue _fun0010;
case 102:
            var8 = var8.showAllVoiceChannelsButtonLastShownChannelActive;
            var4 = var8.marginTop;
case 104:
            var2 = var7 + var4;
case 101:
            return var2;
case 96:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 19;
            var2 = var7[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.DIVIDER_HEIGHT;
            return var2;
case 94:
            var4 = arg4;
            var2 = 0;
            if(!var4) { _fun0010_ip = 105; continue _fun0010 }
case 20:
            var4 = _closure1_slot22;
            var4 = var4.bind(var5)(var6);
            var2 = 0;
            if(!var4) { _fun0010_ip = 105; continue _fun0010 }
case 106:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 19;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var2 = var3.DIVIDER_HEIGHT;
case 105:
            return var2;
case 93:
            return var1;
        }
    };
    var3['getChannelListSectionFooterSize'] = var4;
    var4 = function renderChannelListItem(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var10 = var1.guildChannels;
            var11 = var1.section;
            var9 = var1.row;
            var15 = var1.selectedChannelId;
            var8 = var1.guild;
            var6 = var1.gameClaimMarkAsDismissed;
            var4 = var1.applicationAccountLinkMarkAsDismissed;
            var3 = var1.startApplicationAccountLinkAuthorization;
            var2 = var1.accountLinkApplication;
            var12 = _closure1_slot0;
            var1 = _closure1_slot2;
            var13 = 16;
            var1 = var1[var13];
            var5 = undefined;
            var1 = var12.bind(var5)(var1);
            var1 = var1.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var1 !== var11)) { _fun0011_ip = 107; continue _fun0011 }
case 37:
            var12 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var13];
            var1 = var12.bind(var5)(var1);
            var1 = var1.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var1 !== var11)) { _fun0011_ip = 108; continue _fun0011 }
case 6:
            var1 = {};
            var1['guildChannels'] = var10;
            var1['section'] = var11;
            var1['row'] = var9;
            var1['selectedChannelId'] = var15;
            var1['guild'] = var8;
            var11 = var1.guildChannels;
            var16 = var1.section;
            var12 = var1.row;
            var18 = var1.selectedChannelId;
            var20 = var1.guild;
            var1 = var11.getChannelFromSectionRow;
            var13 = var1.bind(var11)(var16, var12);
            var12 = null;
            var14 = var12 == var13;
            var1 = null;
            if(var14) { _fun0011_ip = 109; continue _fun0011 }
case 110:
            var17 = var13.channel;
            var19 = var17.record;
            var13 = var19.id;
            var21 = var13 === var18;
            var14 = var11.recentsSectionNumber;
            var23 = _closure1_slot5;
            var22 = var23.has;
            var13 = var19.type;
            var13 = var22.bind(var23)(var13);
            var12 = null;
            if(!var13) { _fun0011_ip = 111; continue _fun0011 }
case 44:
            var12 = var19.type;
case 111:
            var13 = var19.type;
            if(!(var12 !== var13)) { _fun0011_ip = 112; continue _fun0011 }
case 113:
            var22 = _closure1_slot0;
            var12 = _closure1_slot2;
            var23 = 36;
            var12 = var12[var23];
            var12 = var22.bind(var5)(var12);
            var12 = var12.ChannelTypes;
            var12 = var12.GUILD_VOICE;
            if(!(var12 !== var13)) { _fun0011_ip = 114; continue _fun0011 }
case 115:
            var22 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var23];
            var12 = var22.bind(var5)(var12);
            var12 = var12.ChannelTypes;
            var12 = var12.GUILD_STAGE_VOICE;
            if(!(var12 !== var13)) { _fun0011_ip = 116; continue _fun0011 }
case 117:
            var22 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var23];
            var12 = var22.bind(var5)(var12);
            var12 = var12.ChannelTypes;
            var12 = var12.DM;
            if(!(var12 !== var13)) { _fun0011_ip = 118; continue _fun0011 }
case 119:
            var22 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var23];
            var12 = var22.bind(var5)(var12);
            var12 = var12.ChannelTypes;
            var12 = var12.GROUP_DM;
            if(!(var12 !== var13)) { _fun0011_ip = 118; continue _fun0011 }
case 120:
            var12 = var11.voiceChannelsSectionNumber;
            if(!(var16 === var12)) { _fun0011_ip = 121; continue _fun0011 }
case 122:
            var12 = var19.isCategory;
            var12 = var12.bind(var19)();
            if(var12) { _fun0011_ip = 123; continue _fun0011 }
case 121:
            var13 = _closure1_slot0;
            var22 = _closure1_slot2;
            var12 = 40;
            var12 = var22[var12];
            var13 = var13.bind(var5)(var12);
            var12 = var13.isFavoritesGuildId;
            var11 = var11.id;
            var11 = var12.bind(var13)(var11);
            if(!var11) { _fun0011_ip = 124; continue _fun0011 }
case 125:
            var13 = _closure1_slot6;
            var12 = var13.has;
            var11 = var19.type;
            var11 = var12.bind(var13)(var11);
            if(var11) { _fun0011_ip = 126; continue _fun0011 }
case 124:
            var13 = _closure1_slot18;
            var12 = _closure1_slot1;
            var22 = _closure1_slot2;
            var11 = 41;
            var11 = var22[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var11['channel'] = var19;
            var11['selected'] = var21;
            var11 = var13.bind(var5)(var12, var11);
            _fun0011_ip = 127; continue _fun0011;
case 126:
            var22 = _closure1_slot18;
            var13 = _closure1_slot1;
            var23 = _closure1_slot2;
            var12 = 35;
            var12 = var23[var12];
            var13 = var13.bind(var5)(var12);
            var12 = {};
            var12['channel'] = var19;
            var12['selected'] = var21;
            var23 = var17.isMuted;
            var12['muted'] = var23;
            var23 = var17.subtitle;
            var12['subtitle'] = var23;
            var23 = false;
            var12['isRulesChannel'] = var23;
            var11 = var22.bind(var5)(var13, var12);
case 127:
            _fun0011_ip = 128; continue _fun0011;
case 123:
            var22 = _closure1_slot18;
            var13 = _closure1_slot0;
            var23 = _closure1_slot2;
            var12 = 17;
            var12 = var23[var12];
            var12 = var13.bind(var5)(var12);
            var13 = var12.CategoryChannel;
            var12 = {};
            var12['channel'] = var19;
            var23 = true;
            var12['withMarginTop'] = var23;
            var11 = var22.bind(var5)(var13, var12);
case 128:
            var1 = var11;
            _fun0011_ip = 109; continue _fun0011;
case 118:
            var13 = _closure1_slot18;
            var12 = _closure1_slot1;
            var22 = _closure1_slot2;
            var11 = 39;
            var11 = var22[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var11['channel'] = var19;
            var11['selected'] = var21;
            var1 = var13.bind(var5)(var12, var11);
            _fun0011_ip = 109; continue _fun0011;
case 116:
            var13 = _closure1_slot18;
            var12 = _closure1_slot1;
            var22 = _closure1_slot2;
            var11 = 38;
            var11 = var22[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var11['channel'] = var19;
            var11['selected'] = var21;
            var1 = var13.bind(var5)(var12, var11);
            _fun0011_ip = 109; continue _fun0011;
case 114:
            var13 = _closure1_slot18;
            var12 = _closure1_slot1;
            var22 = _closure1_slot2;
            var11 = 37;
            var11 = var22[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var11['channel'] = var19;
            var11['selected'] = var21;
            var22 = var17.subtitle;
            var11['subtitle'] = var22;
            var1 = var13.bind(var5)(var12, var11);
            _fun0011_ip = 109; continue _fun0011;
case 112:
            var13 = _closure1_slot18;
            var12 = _closure1_slot1;
            var22 = _closure1_slot2;
            var11 = 35;
            var11 = var22[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var11['channel'] = var19;
            var11['selected'] = var21;
            var21 = var17.isMuted;
            var11['muted'] = var21;
            var21 = var17.subtitle;
            var11['subtitle'] = var21;
            var20 = var20.rulesChannelId;
            var19 = var19.id;
            var19 = var20 === var19;
            var11['isRulesChannel'] = var19;
            var14 = var16 === var14;
            var11['isSuggestedSection'] = var14;
            var16 = var13.bind(var5)(var12, var11);
            var13 = _closure1_slot19;
            var12 = _closure1_slot20;
            var11 = {};
            var14 = new Array(2);
            var14[0] = var16;
            var16 = _closure1_slot23;
            var16 = var16.bind(var5)(var17, var18);
            var14[1] = var16;
            var11['children'] = var14;
            var1 = var13.bind(var5)(var12, var11);
case 109:
            return var1;
case 108:
            var1 = var10.getGuildActionSection;
            var11 = var1.bind(var10)();
            var1 = var11.getRow;
            var13 = var1.bind(var11)(var9);
            var11 = null;
            var12 = var11 == var13;
            var1 = null;
            if(var12) { _fun0011_ip = 129; continue _fun0011 }
case 130:
            var12 = _closure1_slot17;
            var12 = var12.GUILD_ROLE_SUBSCRIPTIONS;
            if(!(var12 !== var13)) { _fun0011_ip = 131; continue _fun0011 }
case 132:
            var12 = _closure1_slot17;
            var12 = var12.GUILD_HOME;
            if(!(var12 !== var13)) { _fun0011_ip = 133; continue _fun0011 }
case 134:
            var12 = _closure1_slot17;
            var12 = var12.CHANNELS_AND_ROLES;
            if(!(var12 !== var13)) { _fun0011_ip = 135; continue _fun0011 }
case 136:
            var12 = _closure1_slot17;
            var12 = var12.GUILD_DIRECTORY;
            if(!(var12 !== var13)) { _fun0011_ip = 137; continue _fun0011 }
case 138:
            var12 = _closure1_slot17;
            var12 = var12.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            if(!(var12 !== var13)) { _fun0011_ip = 139; continue _fun0011 }
case 140:
            var12 = _closure1_slot17;
            var12 = var12.GUILD_HUB_HEADER_OPTIONS;
            if(!(var12 !== var13)) { _fun0011_ip = 141; continue _fun0011 }
case 142:
            var12 = _closure1_slot17;
            var12 = var12.GUILD_MOD_DASH_MEMBER_SAFETY;
            if(!(var12 !== var13)) { _fun0011_ip = 143; continue _fun0011 }
case 144:
            var12 = _closure1_slot17;
            var12 = var12.GUILD_BOOSTS;
            if(!(var12 !== var13)) { _fun0011_ip = 145; continue _fun0011 }
case 146:
            var12 = _closure1_slot17;
            var12 = var12.GUILD_SCHEDULED_EVENTS;
            var1 = null;
            if(!(var12 !== var13)) { _fun0011_ip = 129; continue _fun0011 }
case 147:
            var12 = _closure1_slot17;
            var12 = var12.GUILD_FAVORITES;
            var1 = null;
            if(!(var12 !== var13)) { _fun0011_ip = 129; continue _fun0011 }
case 148:
            var12 = _closure1_slot17;
            var12 = var12.GUILD_CHANNEL_LIST_OPT_IN_NOTICE;
            var1 = null;
            if(!(var12 !== var13)) { _fun0011_ip = 129; continue _fun0011 }
case 149:
            var12 = _closure1_slot17;
            var12 = var12.GUILD_SHOP;
            var1 = null;
            if(!(var12 !== var13)) { _fun0011_ip = 129; continue _fun0011 }
case 150:
            var12 = _closure1_slot17;
            var12 = var12.BROWSE_CHANNELS;
            var1 = null;
            if(!(var12 !== var13)) { _fun0011_ip = 129; continue _fun0011 }
case 151:
            var12 = _closure1_slot17;
            var12 = var12.GUILD_PREMIUM_PROGRESS_BAR;
            var1 = null;
            _fun0011_ip = 129; continue _fun0011;
case 145:
            var13 = _closure1_slot18;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 33;
            var11 = var14[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var14 = var8.id;
            var11['guildId'] = var14;
            var1 = var13.bind(var5)(var12, var11);
            _fun0011_ip = 129; continue _fun0011;
case 143:
            var13 = _closure1_slot18;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 32;
            var11 = var14[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var11['guild'] = var8;
            var14 = _closure1_slot15;
            var14 = var14.MEMBER_SAFETY;
            var14 = var15 === var14;
            var11['selected'] = var14;
            var1 = var13.bind(var5)(var12, var11);
            _fun0011_ip = 129; continue _fun0011;
case 141:
            var13 = _closure1_slot18;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 31;
            var11 = var14[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var11['guild'] = var8;
            var1 = var13.bind(var5)(var12, var11);
            _fun0011_ip = 129; continue _fun0011;
case 139:
            var13 = _closure1_slot19;
            var12 = _closure1_slot3;
            var11 = {};
            var16 = _closure1_slot18;
            var14 = {};
            var17 = _closure1_slot21;
            var17 = var17.nonChannelContainer;
            var14['style'] = var17;
            var20 = _closure1_slot18;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var17 = 30;
            var17 = var19[var17];
            var17 = var18.bind(var5)(var17);
            var18 = var17.NewMemberActionsProgress;
            var17 = {};
            var21 = var8.id;
            var17['guildId'] = var21;
            var17 = var20.bind(var5)(var18, var17);
            var14['children'] = var17;
            var16 = var16.bind(var5)(var12, var14);
            var14 = new Array(2);
            var14[0] = var16;
            var18 = _closure1_slot18;
            var17 = _closure1_slot1;
            var16 = 19;
            var16 = var19[var16];
            var17 = var17.bind(var5)(var16);
            var16 = {};
            var16 = var18.bind(var5)(var17, var16);
            var14[1] = var16;
            var11['children'] = var14;
            var1 = var13.bind(var5)(var12, var11);
            _fun0011_ip = 129; continue _fun0011;
case 137:
            var13 = _closure1_slot8;
            var12 = var13.getDirectoryChannelIds;
            var11 = var8.id;
            var12 = var12.bind(var13)(var11);
            var11 = 0;
            var14 = var12[var11];
            var13 = _closure1_slot18;
            var12 = _closure1_slot1;
            var16 = _closure1_slot2;
            var11 = 29;
            var11 = var16[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var16 = var8.id;
            var11['guildId'] = var16;
            var14 = var15 === var14;
            var11['selected'] = var14;
            var1 = var13.bind(var5)(var12, var11);
            _fun0011_ip = 129; continue _fun0011;
case 135:
            var13 = _closure1_slot18;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 28;
            var11 = var14[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.GuildRolesAndChannelsRow;
            var11 = {};
            var11['guild'] = var8;
            var14 = _closure1_slot15;
            var14 = var14.CHANNEL_BROWSER;
            var14 = var15 === var14;
            if(var14) { _fun0011_ip = 152; continue _fun0011 }
case 153:
            var16 = _closure1_slot15;
            var16 = var16.CUSTOMIZE_COMMUNITY;
            var14 = var15 === var16;
case 152:
            var11['selected'] = var14;
            var1 = var13.bind(var5)(var12, var11);
            _fun0011_ip = 129; continue _fun0011;
case 133:
            var13 = _closure1_slot18;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 27;
            var11 = var14[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var11['guild'] = var8;
            var14 = _closure1_slot15;
            var14 = var14.GUILD_HOME;
            var14 = var15 === var14;
            var11['selected'] = var14;
            var1 = var13.bind(var5)(var12, var11);
            _fun0011_ip = 129; continue _fun0011;
case 131:
            var13 = _closure1_slot18;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 26;
            var11 = var14[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var11['guild'] = var8;
            var14 = _closure1_slot15;
            var14 = var14.ROLE_SUBSCRIPTIONS;
            var14 = var15 === var14;
            var11['selected'] = var14;
            var1 = var13.bind(var5)(var12, var11);
case 129:
            return var1;
case 107:
            var1 = {};
            var1['guildChannels'] = var10;
            var1['row'] = var9;
            var1['guild'] = var8;
            var1['gameClaimMarkAsDismissed'] = var6;
            var1['applicationAccountLinkMarkAsDismissed'] = var4;
            var1['startApplicationAccountLinkAuthorization'] = var3;
            var1['accountLinkApplication'] = var2;
            var2 = var1.guildChannels;
            var3 = var1.row;
            var10 = var1.guild;
            var12 = var1.gameClaimMarkAsDismissed;
            var16 = var1.applicationAccountLinkMarkAsDismissed;
            var15 = var1.startApplicationAccountLinkAuthorization;
            var14 = var1.accountLinkApplication;
            var1 = var2.getChannelNoticeSection;
            var2 = var1.bind(var2)();
            var1 = var2.getRow;
            var4 = var1.bind(var2)(var3);
            var2 = null;
            var3 = var2 == var4;
            var1 = null;
            if(var3) { _fun0011_ip = 154; continue _fun0011 }
case 155:
            var3 = _closure1_slot16;
            var3 = var3.SPACER;
            if(!(var3 !== var4)) { _fun0011_ip = 156; continue _fun0011 }
case 157:
            var3 = _closure1_slot16;
            var3 = var3.GUILD_PROGRESS;
            if(!(var3 !== var4)) { _fun0011_ip = 158; continue _fun0011 }
case 159:
            var3 = _closure1_slot16;
            var3 = var3.MFA_WARNING;
            if(!(var3 !== var4)) { _fun0011_ip = 160; continue _fun0011 }
case 161:
            var3 = _closure1_slot16;
            var3 = var3.LIVE_CHANNEL_NOTICE;
            if(!(var3 !== var4)) { _fun0011_ip = 162; continue _fun0011 }
case 163:
            var3 = _closure1_slot16;
            var3 = var3.GAME_CLAIM;
            if(!(var3 !== var4)) { _fun0011_ip = 164; continue _fun0011 }
case 165:
            var3 = _closure1_slot16;
            var3 = var3.APPLICATION_ACCOUNT_LINK;
            var1 = null;
            if(!(var3 === var4)) { _fun0011_ip = 154; continue _fun0011 }
case 166:
            var4 = var2 == var16;
            var3 = null;
            if(var4) { _fun0011_ip = 167; continue _fun0011 }
case 168:
            var4 = var2 == var15;
            var3 = null;
            if(var4) { _fun0011_ip = 167; continue _fun0011 }
case 169:
            var4 = var2 == var14;
            var3 = null;
            if(var4) { _fun0011_ip = 167; continue _fun0011 }
case 170:
            var8 = _closure1_slot18;
            var6 = _closure1_slot3;
            var4 = {};
            var9 = _closure1_slot21;
            var9 = var9.applicationAccountLinkNotice;
            var4['style'] = var9;
            var13 = _closure1_slot18;
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var9 = 13;
            var9 = var17[var9];
            var11 = var11.bind(var5)(var9);
            var9 = {};
            var9['markAsDismissed'] = var16;
            var9['startAuthorization'] = var15;
            var9['application'] = var14;
            var9 = var13.bind(var5)(var11, var9);
            var4['children'] = var9;
            var3 = var8.bind(var5)(var6, var4);
case 167:
            var1 = var3;
            _fun0011_ip = 154; continue _fun0011;
case 164:
            var3 = var2 == var12;
            var2 = null;
            if(var3) { _fun0011_ip = 171; continue _fun0011 }
case 172:
            var6 = _closure1_slot18;
            var4 = _closure1_slot3;
            var3 = {};
            var8 = _closure1_slot21;
            var8 = var8.gameClaimNotice;
            var3['style'] = var8;
            var11 = _closure1_slot18;
            var9 = _closure1_slot1;
            var13 = _closure1_slot2;
            var8 = 12;
            var8 = var13[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var8['guild'] = var10;
            var8['markAsDismissed'] = var12;
            var8 = var11.bind(var5)(var9, var8);
            var3['children'] = var8;
            var2 = var6.bind(var5)(var4, var3);
case 171:
            var1 = var2;
            _fun0011_ip = 154; continue _fun0011;
case 162:
            var4 = _closure1_slot18;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 11;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var6 = _closure1_slot21;
            var6 = var6.liveChannelNotice;
            var2['style'] = var6;
            var2['guild'] = var10;
            var1 = var4.bind(var5)(var3, var2);
            _fun0011_ip = 154; continue _fun0011;
case 160:
            var4 = _closure1_slot18;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = _closure1_slot21;
            var6 = var6.nonChannelContainer;
            var2['style'] = var6;
            var9 = _closure1_slot18;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 25;
            var6 = var11[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var6 = var9.bind(var5)(var8, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
            _fun0011_ip = 154; continue _fun0011;
case 158:
            var4 = _closure1_slot18;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = _closure1_slot21;
            var6 = var6.nonChannelContainer;
            var2['style'] = var6;
            var9 = _closure1_slot18;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 24;
            var6 = var11[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var6['guild'] = var10;
            var6 = var9.bind(var5)(var8, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
            _fun0011_ip = 154; continue _fun0011;
case 156:
            var4 = _closure1_slot18;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = {};
            var7 = _closure1_slot14;
            var6['height'] = var7;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 154:
            return var1;
        }
    };
    var3['renderChannelListItem'] = var4;
    var4 = function getChannelListItemSize(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildChannels;
            var15 = var1.section;
            var4 = var1.row;
            var6 = var1.fontScale;
            var2 = var1.voiceStates;
            var9 = var1.liveChannelNoticeHeight;
            var12 = var1.listViewportHeight;
            var5 = var1.isRefreshEnabled;
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = 16;
            var1 = var1[var10];
            var7 = undefined;
            var1 = var8.bind(var7)(var1);
            var1 = var1.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var1 !== var15)) { _fun0012_ip = 173; continue _fun0012 }
case 174:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var1 = var8.bind(var7)(var1);
            var1 = var1.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var1 !== var15)) { _fun0012_ip = 175; continue _fun0012 }
case 84:
            var1 = _closure1_slot12;
            var10 = var1.bind(var7)(var6);
            var1 = var3.getChannelFromSectionRow;
            var8 = var1.bind(var3)(var15, var4);
            var14 = null;
            var11 = var14 == var8;
            var16 = 0;
            var1 = 0;
            if(var11) { _fun0012_ip = 176; continue _fun0012 }
case 177:
            var8 = var8.channel;
            var11 = var8.record;
            var18 = _closure1_slot5;
            var17 = var18.has;
            var13 = var11.type;
            var17 = var17.bind(var18)(var13);
            var13 = null;
            if(!var17) { _fun0012_ip = 62; continue _fun0012 }
case 25:
            var13 = var11.type;
case 62:
            var17 = var11.type;
            if(!(var13 !== var17)) { _fun0012_ip = 178; continue _fun0012 }
case 54:
            var18 = _closure1_slot0;
            var13 = _closure1_slot2;
            var20 = 36;
            var13 = var13[var20];
            var13 = var18.bind(var7)(var13);
            var13 = var13.ChannelTypes;
            var13 = var13.GUILD_VOICE;
            if(!(var13 !== var17)) { _fun0012_ip = 179; continue _fun0012 }
case 76:
            var18 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var20];
            var13 = var18.bind(var7)(var13);
            var13 = var13.ChannelTypes;
            var13 = var13.GUILD_STAGE_VOICE;
            if(!(var13 !== var17)) { _fun0012_ip = 179; continue _fun0012 }
case 180:
            var18 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var20];
            var13 = var18.bind(var7)(var13);
            var13 = var13.ChannelTypes;
            var13 = var13.DM;
            var1 = var10;
            if(!(var13 !== var17)) { _fun0012_ip = 176; continue _fun0012 }
case 181:
            var18 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var20];
            var13 = var18.bind(var7)(var13);
            var13 = var13.ChannelTypes;
            var13 = var13.GROUP_DM;
            var1 = var10;
            if(!(var13 !== var17)) { _fun0012_ip = 176; continue _fun0012 }
case 182:
            var18 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var20];
            var13 = var18.bind(var7)(var13);
            var13 = var13.ChannelTypes;
            var13 = var13.PUBLIC_THREAD;
            if(!(var13 !== var17)) { _fun0012_ip = 183; continue _fun0012 }
case 184:
            var18 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var20];
            var13 = var18.bind(var7)(var13);
            var13 = var13.ChannelTypes;
            var13 = var13.PRIVATE_THREAD;
            if(!(var13 !== var17)) { _fun0012_ip = 183; continue _fun0012 }
case 185:
            var13 = var3.voiceChannelsSectionNumber;
            if(!(var15 === var13)) { _fun0012_ip = 186; continue _fun0012 }
case 187:
            var13 = var11.isCategory;
            var13 = var13.bind(var11)();
            if(var13) { _fun0012_ip = 188; continue _fun0012 }
case 186:
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 40;
            var13 = var17[var13];
            var17 = var15.bind(var7)(var13);
            var15 = var17.isFavoritesGuildId;
            var13 = var3.id;
            var15 = var15.bind(var17)(var13);
            var13 = var10;
            if(!var15) { _fun0012_ip = 189; continue _fun0012 }
case 190:
            var18 = _closure1_slot6;
            var17 = var18.has;
            var15 = var11.type;
            var15 = var17.bind(var18)(var15);
            var13 = var10;
            _fun0012_ip = 189; continue _fun0012;
case 188:
            var15 = _closure1_slot11;
            var17 = var15.bind(var7)(var6);
            var15 = _closure1_slot10;
            var13 = var17 + var15;
case 189:
            var1 = var13;
            _fun0012_ip = 176; continue _fun0012;
case 183:
            var17 = _closure1_slot9;
            var15 = var17.countVoiceStatesForChannel;
            var13 = var11.id;
            var17 = var15.bind(var17)(var13);
            var13 = var10;
            if(!(var17 > var16)) { _fun0012_ip = 191; continue _fun0012 }
case 192:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 42;
            var15 = var19[var15];
            var18 = var18.bind(var7)(var15);
            var15 = var18.getVoiceUserHeight;
            var15 = var15.bind(var18)(var6);
            var15 = var17 * var15;
            var13 = var10 + var15;
case 191:
            var1 = var13;
            _fun0012_ip = 176; continue _fun0012;
case 179:
            var13 = var8.subtitle;
            var14 = var14 != var13;
            var13 = 0;
            if(!var14) { _fun0012_ip = 193; continue _fun0012 }
case 194:
            var14 = _closure1_slot13;
            var13 = var14.bind(var7)(var6);
case 193:
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var15 = 42;
            var15 = var14[var15];
            var18 = var17.bind(var7)(var15);
            var15 = var18.getVoiceUserHeight;
            var19 = var15.bind(var18)(var6);
            var15 = var11.type;
            var14 = var14[var20];
            var14 = var17.bind(var7)(var14);
            var14 = var14.ChannelTypes;
            var14 = var14.GUILD_STAGE_VOICE;
            if(!(var15 !== var14)) { _fun0012_ip = 195; continue _fun0012 }
case 196:
            var17 = _closure1_slot9;
            var15 = var17.countVoiceStatesForChannel;
            var14 = var11.id;
            var15 = var15.bind(var17)(var14);
            _fun0012_ip = 197; continue _fun0012;
case 195:
            var21 = _closure1_slot4;
            var18 = var21.getParticipantCount;
            var17 = var11.id;
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var14 = 43;
            var14 = var23[var14];
            var14 = var22.bind(var7)(var14);
            var14 = var14.StageChannelParticipantNamedIndex;
            var14 = var14.SPEAKER;
            var15 = var18.bind(var21)(var17, var14);
case 197:
            var18 = var11.type;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var20];
            var14 = var17.bind(var7)(var14);
            var14 = var14.ChannelTypes;
            var17 = var14.GUILD_STAGE_VOICE;
            var14 = 0;
            if(!(var18 === var17)) { _fun0012_ip = 198; continue _fun0012 }
case 199:
            var20 = _closure1_slot4;
            var18 = var20.getParticipantCount;
            var17 = var11.id;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var11 = 43;
            var11 = var22[var11];
            var11 = var21.bind(var7)(var11);
            var11 = var11.StageChannelParticipantNamedIndex;
            var11 = var11.AUDIENCE;
            var11 = var18.bind(var20)(var17, var11);
            var11 = var11 > var16;
            var14 = 0;
            if(!var11) { _fun0012_ip = 198; continue _fun0012 }
case 200:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = 44;
            var11 = var18[var11];
            var17 = var17.bind(var7)(var11);
            var11 = var17.getAudienceItemHeight;
            var14 = var11.bind(var17)(var6);
case 198:
            var11 = var10;
            if(!(var15 > var16)) { _fun0012_ip = 201; continue _fun0012 }
case 202:
            var20 = var10 + var13;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 37;
            var18 = var17[var13];
            var18 = var16.bind(var7)(var18);
            var18 = var18.VOICE_USERS_MARGIN_TOP;
            var18 = var20 + var18;
            var15 = var19 * var15;
            var15 = var18 + var15;
            var13 = var17[var13];
            var13 = var16.bind(var7)(var13);
            var13 = var13.VOICE_USERS_MARGIN_BOTTOM;
            var13 = var15 + var13;
            var11 = var13 + var14;
case 201:
            var1 = var11;
            _fun0012_ip = 176; continue _fun0012;
case 178:
            var8 = var8.threadCount;
            var8 = var8 * var10;
            var1 = var10 + var8;
case 176:
            return var1;
case 175:
            var1 = var3.getGuildActionSection;
            var8 = var1.bind(var3)();
            var1 = var8.getRow;
            var11 = var1.bind(var8)(var4);
            var1 = null;
            var10 = var1 == var11;
            var1 = 0;
            if(var10) { _fun0012_ip = 203; continue _fun0012 }
case 204:
            var10 = _closure1_slot12;
            var13 = var10.bind(var7)(var6);
            var10 = _closure1_slot17;
            var10 = var10.GUILD_ROLE_SUBSCRIPTIONS;
            var1 = var13;
            if(!(var10 !== var11)) { _fun0012_ip = 203; continue _fun0012 }
case 205:
            var10 = _closure1_slot17;
            var10 = var10.GUILD_HOME;
            var1 = var13;
            if(!(var10 !== var11)) { _fun0012_ip = 203; continue _fun0012 }
case 206:
            var10 = _closure1_slot17;
            var10 = var10.CHANNELS_AND_ROLES;
            var1 = var13;
            if(!(var10 !== var11)) { _fun0012_ip = 203; continue _fun0012 }
case 207:
            var10 = _closure1_slot17;
            var10 = var10.GUILD_DIRECTORY;
            var1 = var13;
            if(!(var10 !== var11)) { _fun0012_ip = 203; continue _fun0012 }
case 208:
            var10 = _closure1_slot17;
            var10 = var10.GUILD_MOD_DASH_MEMBER_SAFETY;
            var1 = var13;
            if(!(var10 !== var11)) { _fun0012_ip = 203; continue _fun0012 }
case 209:
            var10 = _closure1_slot17;
            var10 = var10.GUILD_BOOSTS;
            var1 = var13;
            if(!(var10 !== var11)) { _fun0012_ip = 203; continue _fun0012 }
case 210:
            var10 = _closure1_slot17;
            var10 = var10.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            if(!(var10 !== var11)) { _fun0012_ip = 211; continue _fun0012 }
case 212:
            var10 = _closure1_slot17;
            var10 = var10.GUILD_HUB_HEADER_OPTIONS;
            var1 = var12;
            if(!(var10 !== var11)) { _fun0012_ip = 203; continue _fun0012 }
case 213:
            var10 = _closure1_slot17;
            var10 = var10.GUILD_SCHEDULED_EVENTS;
            var1 = 0;
            if(!(var10 !== var11)) { _fun0012_ip = 203; continue _fun0012 }
case 214:
            var10 = _closure1_slot17;
            var10 = var10.GUILD_FAVORITES;
            var1 = 0;
            if(!(var10 !== var11)) { _fun0012_ip = 203; continue _fun0012 }
case 215:
            var10 = _closure1_slot17;
            var10 = var10.GUILD_CHANNEL_LIST_OPT_IN_NOTICE;
            var1 = 0;
            if(!(var10 !== var11)) { _fun0012_ip = 203; continue _fun0012 }
case 216:
            var10 = _closure1_slot17;
            var10 = var10.GUILD_SHOP;
            var1 = 0;
            if(!(var10 !== var11)) { _fun0012_ip = 203; continue _fun0012 }
case 217:
            var10 = _closure1_slot17;
            var10 = var10.BROWSE_CHANNELS;
            var1 = 0;
            if(!(var10 !== var11)) { _fun0012_ip = 203; continue _fun0012 }
case 218:
            var10 = _closure1_slot17;
            var10 = var10.GUILD_PREMIUM_PROGRESS_BAR;
            var1 = 0;
            _fun0012_ip = 203; continue _fun0012;
case 211:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 19;
            var8 = var11[var8];
            var8 = var10.bind(var7)(var8);
            var10 = var8.DIVIDER_HEIGHT;
            var8 = 48;
            var1 = var8 + var10;
case 203:
            return var1;
case 173:
            var1 = var3.getChannelNoticeSection;
            var3 = var1.bind(var3)();
            var1 = var3.getRow;
            var4 = var1.bind(var3)(var4);
            var1 = null;
            var3 = var1 == var4;
            var1 = 0;
            if(var3) { _fun0012_ip = 219; continue _fun0012 }
case 220:
            var3 = _closure1_slot16;
            var3 = var3.SPACER;
            if(!(var3 !== var4)) { _fun0012_ip = 221; continue _fun0012 }
case 222:
            var3 = _closure1_slot16;
            var3 = var3.GUILD_PROGRESS;
            if(!(var3 !== var4)) { _fun0012_ip = 223; continue _fun0012 }
case 224:
            var3 = _closure1_slot16;
            var3 = var3.MFA_WARNING;
            if(!(var3 !== var4)) { _fun0012_ip = 225; continue _fun0012 }
case 226:
            var3 = _closure1_slot16;
            var3 = var3.LIVE_CHANNEL_NOTICE;
            var1 = var9;
            if(!(var3 !== var4)) { _fun0012_ip = 219; continue _fun0012 }
case 227:
            var3 = _closure1_slot16;
            var3 = var3.GAME_CLAIM;
            if(!(var3 !== var4)) { _fun0012_ip = 228; continue _fun0012 }
case 229:
            var3 = _closure1_slot16;
            var3 = var3.APPLICATION_ACCOUNT_LINK;
            var1 = 0;
            if(!(var3 === var4)) { _fun0012_ip = 219; continue _fun0012 }
case 230:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 13;
            var3 = var8[var3];
            var4 = var4.bind(var7)(var3);
            var3 = var4.getScaledAccountLinkBannerHeight;
            var1 = var3.bind(var4)(var6);
            _fun0012_ip = 219; continue _fun0012;
case 228:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 12;
            var3 = var8[var3];
            var4 = var4.bind(var7)(var3);
            var3 = var4.getScaledGameClaimNoticeHeight;
            var1 = var3.bind(var4)(var6);
            _fun0012_ip = 219; continue _fun0012;
case 225:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 25;
            var3 = var8[var3];
            var4 = var4.bind(var7)(var3);
            var3 = var4.getScaledGuildMFAWarningHeight;
            var1 = var3.bind(var4)(var6);
            _fun0012_ip = 219; continue _fun0012;
case 223:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 24;
            var3 = var8[var3];
            var4 = var4.bind(var7)(var3);
            var3 = var4.getScaledGuildProgressButtonHeight;
            var1 = var3.bind(var4)(var6, var5);
            _fun0012_ip = 219; continue _fun0012;
case 221:
            var1 = _closure1_slot14;
case 219:
            return var1;
        }
    };
    var3['getChannelListItemSize'] = var4;
    var2 = function calculateVoiceSummary(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var10 = var1.guildChannels;
            var8 = var1.section;
            var11 = var1.optInChannelsEnabled;
            var5 = var1.voiceStates;
            var7 = var1.selectedChannelId;
            var6 = var1.selectedVoiceChannelId;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 20;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isVoiceChannelsSection;
            var1 = var1.bind(var3)(var8, var10);
            if(var1) { _fun0013_ip = 231; continue _fun0013 }
case 2:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 16;
            var1 = var9[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.SECTION_INDEX_FIRST_NAMED_CATEGORY;
            if(!(var8 < var1)) { _fun0013_ip = 231; continue _fun0013 }
case 59:
            var1 = null;
            return var1;
case 231:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 45;
            var1 = var1[var9];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getSectionFooterConfig;
            var1 = var1.bind(var3)(var10, var11, var8);
            var3 = var1.canHaveVoiceSummary;
            var1 = null;
            if(var3) { _fun0013_ip = 232; continue _fun0013 }
case 99:
            return var1;
case 232:
            var3 = var10.getNamedCategoryFromSection;
            var8 = var3.bind(var10)(var8);
            if(!(var1 != var8)) { _fun0013_ip = 41; continue _fun0013 }
case 233:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var4 = var3.bind(var4)(var2);
            var3 = var4.getSectionFooterActiveVoiceChannels;
            var2 = {};
            var2['category'] = var8;
            var2['selectedChannelId'] = var7;
            var2['selectedVoiceChannelId'] = var6;
            var2['voiceStates'] = var5;
            var3 = var3.bind(var4)(var2);
            var5 = var3.length;
            var4 = 0;
            var2 = null;
            if(!(var4 !== var5)) { _fun0013_ip = 234; continue _fun0013 }
case 235:
            var2 = var3;
case 234:
            return var2;
case 41:
            return var1;
        }
    };
    var3['calculateVoiceSummary'] = var2;
    return var1;
})();