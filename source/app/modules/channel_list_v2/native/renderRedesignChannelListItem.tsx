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
                var2 = 33;
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
    var7['marginHorizontal'] = var10;
    var8 = 13;
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
    var4 = 45;
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
            var9 = 14;
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
            var7 = 15;
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
    var4 = function renderChannelListSectionHeader(arg1, arg2, arg3, arg4, arg5) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var8 = arg1;
            var10 = arg2;
            var5 = arg4;
            var4 = arg5;
            var1 = var8.favoritesSectionNumber;
            if(!(var1 !== var10)) { _fun0006_ip = 32; continue _fun0006 }
case 33:
            var1 = var8.recentsSectionNumber;
            if(!(var1 !== var10)) { _fun0006_ip = 34; continue _fun0006 }
case 35:
            var1 = var8.voiceChannelsSectionNumber;
            if(!(var1 !== var10)) { _fun0006_ip = 36; continue _fun0006 }
case 37:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 19;
            var1 = var6[var1];
            var7 = undefined;
            var3 = var3.bind(var7)(var1);
            var1 = var3.isNamedCategorySection;
            var3 = var1.bind(var3)(var10);
            var1 = null;
            if(var3) { _fun0006_ip = 38; continue _fun0006 }
case 39:
            return var1;
case 38:
            var3 = var8.getNamedCategoryFromSection;
            var9 = var3.bind(var8)(var10);
            var3 = var1 == var9;
            var1 = null;
            if(var3) { _fun0006_ip = 23; continue _fun0006 }
case 40:
            var6 = _closure1_slot18;
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 16;
            var2 = var11[var2];
            var2 = var3.bind(var7)(var2);
            var3 = var2.CategoryChannel;
            var2 = {};
            var9 = var9.record;
            var2['channel'] = var9;
            var2['withMarginTop'] = var5;
            var1 = var6.bind(var7)(var3, var2);
case 23:
            return var1;
case 36:
            var1 = _closure1_slot24;
            var6 = undefined;
            var1 = var1.bind(var6)(var8);
            var7 = var1.showDivider;
            var12 = var1.isCollapsed;
            var3 = _closure1_slot19;
            var2 = _closure1_slot3;
            var1 = {};
            var13 = null;
            if(!var7) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var15 = _closure1_slot18;
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var7 = 18;
            var7 = var16[var7];
            var14 = var14.bind(var6)(var7);
            var7 = {};
            var13 = var15.bind(var6)(var14, var7);
case 41:
            var7 = new Array(2);
            var7[0] = var13;
            var9 = null;
            if(!var12) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = 16;
            var11 = var18[var11];
            var13 = var17.bind(var6)(var11);
            var12 = var13.renderCategoryItem;
            var11 = {};
            var14 = 17;
            var15 = var18[var14];
            var15 = var17.bind(var6)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var6)(var14);
            var14 = var14.t;
            var14 = var14.V/u9Dy;
            var14 = var15.bind(var16)(var14);
            var11['name'] = var14;
            var11['styles'] = var4;
            var9 = var12.bind(var13)(var11);
case 43:
            var7[1] = var9;
            var1['children'] = var7;
            var1 = var3.bind(var6)(var2, var1);
            return var1;
case 34:
            var7 = _closure1_slot18;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var1 = var3[var1];
            var6 = undefined;
            var2 = var2.bind(var6)(var1);
            var1 = arg3;
            if(var1) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var3 = var2.SuggestedCategory;
            var1 = {};
            var9 = var8.id;
            var1['guildId'] = var9;
            var9 = var8.getCategoryFromSection;
            var12 = var9.bind(var8)(var10);
            var10 = null;
            var11 = var10 == var12;
            var9 = undefined;
            if(var11) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var11 = var12.getShownChannelAndThreadIds;
            var9 = var11.bind(var12)();
case 47:
            if(!(var10 == var9)) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var9 = new Array(0);
case 49:
            var1['channelIds'] = var9;
            var1['withMarginTop'] = var5;
            var1 = var7.bind(var6)(var3, var1);
            _fun0006_ip = 51; continue _fun0006;
case 45:
            var3 = var2.RecentlyActiveCategory;
            var2 = {};
            var8 = var8.id;
            var2['guildId'] = var8;
            var2['withMarginTop'] = var5;
            var1 = var7.bind(var6)(var3, var2);
case 51:
            return var1;
case 32:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 16;
            var1 = var11[var1];
            var9 = undefined;
            var3 = var10.bind(var9)(var1);
            var2 = var3.renderCategoryItem;
            var1 = {};
            var6 = 17;
            var7 = var11[var6];
            var7 = var10.bind(var9)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var11[var6];
            var6 = var10.bind(var9)(var6);
            var6 = var6.t;
            var6 = var6.mlPMCy;
            var6 = var7.bind(var8)(var6);
            var1['name'] = var6;
            var1['withMarginTop'] = var5;
            var1['styles'] = var4;
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
            var4 = 19;
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
case 36:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 18;
            var3 = var9[var3];
            var3 = var7.bind(var8)(var3);
            var3 = var3.DIVIDER_HEIGHT;
            var4 = var6 + var3;
case 62:
            var3 = var4;
            if(!var5) { _fun0007_ip = 63; continue _fun0007 }
case 64:
            var3 = var4 + var2;
case 63:
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
            if(!var2) { _fun0008_ip = 65; continue _fun0008 }
case 66:
            var6 = _closure1_slot18;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 16;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.RedesignVoiceUserSummary;
            var2 = {};
            var8 = var5.id;
            var2['guildId'] = var8;
            var2['channels'] = var7;
            var9 = var6.bind(var4)(var3, var2);
case 65:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 15;
            var2 = var2[var7];
            var6 = undefined;
            var2 = var4.bind(var6)(var2);
            var2 = var2.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var2 !== var15)) { _fun0008_ip = 45; continue _fun0008 }
case 67:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var4.bind(var6)(var2);
            var2 = var2.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var2 !== var15)) { _fun0008_ip = 68; continue _fun0008 }
case 69:
            var2 = var5.favoritesSectionNumber;
            if(!(var2 !== var15)) { _fun0008_ip = 70; continue _fun0008 }
case 71:
            var2 = var5.recentsSectionNumber;
            if(!(var2 !== var15)) { _fun0008_ip = 70; continue _fun0008 }
case 72:
            var2 = var5.voiceChannelsSectionNumber;
            if(!(var2 === var15)) { _fun0008_ip = 63; continue _fun0008 }
case 73:
            var2 = _closure1_slot25;
            var4 = var2.bind(var6)(var5, var15);
            var2 = var4.render;
            var12 = var4.lastShownChannelActive;
            if(var2) { _fun0008_ip = 74; continue _fun0008 }
case 63:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 19;
            var2 = var7[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.isNamedCategorySection;
            var4 = var2.bind(var4)(var15);
            var2 = null;
            if(!var4) { _fun0008_ip = 75; continue _fun0008 }
case 76:
            var2 = var9;
case 75:
            return var2;
case 74:
            var7 = _closure1_slot19;
            var4 = _closure1_slot3;
            var2 = {};
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot18;
            var10 = _closure1_slot3;
            var9 = {};
            var13 = _closure1_slot21;
            if(var12) { _fun0008_ip = 77; continue _fun0008 }
case 78:
            var12 = var13.showAllVoiceChannelsButtonLastShownChannelInactive;
            _fun0008_ip = 79; continue _fun0008;
case 77:
            var12 = var13.showAllVoiceChannelsButtonLastShownChannelActive;
case 79:
            var9['style'] = var12;
            var14 = _closure1_slot18;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 20;
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
case 70:
            var7 = _closure1_slot18;
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 18;
            var2 = var8[var2];
            var4 = var4.bind(var6)(var2);
            var2 = {};
            var2 = var7.bind(var6)(var4, var2);
            return var2;
case 68:
            var4 = arg5;
            var2 = null;
            if(!var4) { _fun0008_ip = 80; continue _fun0008 }
case 81:
            var4 = _closure1_slot22;
            var4 = var4.bind(var6)(var5);
            var2 = null;
            if(!var4) { _fun0008_ip = 80; continue _fun0008 }
case 82:
            var5 = _closure1_slot18;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 18;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = {};
            var2 = var5.bind(var6)(var4, var3);
case 80:
            return var2;
case 45:
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
            var8 = 15;
            var5 = var3[var8];
            var3 = undefined;
            var5 = var7.bind(var3)(var5);
            var5 = var5.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var5 !== var6)) { _fun0009_ip = 83; continue _fun0009 }
case 15:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var7.bind(var3)(var5);
            var5 = var5.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var5 !== var6)) { _fun0009_ip = 84; continue _fun0009 }
case 85:
            var5 = var4.favoritesSectionNumber;
            if(!(var5 !== var6)) { _fun0009_ip = 86; continue _fun0009 }
case 87:
            var5 = var4.recentsSectionNumber;
            if(!(var5 !== var6)) { _fun0009_ip = 86; continue _fun0009 }
case 38:
            var5 = var4.voiceChannelsSectionNumber;
            var5 = false;
            return var5;
case 86:
            var5 = true;
            return var5;
case 84:
            if(!var1) { _fun0009_ip = 88; continue _fun0009 }
case 89:
            var2 = _closure1_slot22;
            var1 = var2.bind(var3)(var4);
case 88:
            return var1;
case 83:
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
case 90:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 21;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var3);
            var8 = var2.VOICE_USER_SUMMARY_HEIGHT;
case 17:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 15;
            var2 = var2[var9];
            var5 = undefined;
            var2 = var7.bind(var5)(var2);
            var2 = var2.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var2 !== var4)) { _fun0010_ip = 91; continue _fun0010 }
case 38:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var2 = var7.bind(var5)(var2);
            var2 = var2.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var2 !== var4)) { _fun0010_ip = 92; continue _fun0010 }
case 93:
            var2 = var6.favoritesSectionNumber;
            if(!(var2 !== var4)) { _fun0010_ip = 94; continue _fun0010 }
case 21:
            var2 = var6.recentsSectionNumber;
            if(!(var2 !== var4)) { _fun0010_ip = 94; continue _fun0010 }
case 95:
            var2 = var6.voiceChannelsSectionNumber;
            if(!(var2 !== var4)) { _fun0010_ip = 96; continue _fun0010 }
case 97:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 19;
            var2 = var9[var2];
            var7 = var7.bind(var5)(var2);
            var2 = var7.isNamedCategorySection;
            var7 = var2.bind(var7)(var4);
            var2 = 0;
            if(!var7) { _fun0010_ip = 62; continue _fun0010 }
case 98:
            var2 = var8;
case 62:
            return var2;
case 96:
            var2 = _closure1_slot25;
            var2 = var2.bind(var5)(var6, var4);
            var7 = var2.render;
            var4 = var2.lastShownChannelActive;
            var2 = var8;
            if(!var7) { _fun0010_ip = 99; continue _fun0010 }
case 28:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 22;
            var7 = var10[var7];
            var7 = var9.bind(var5)(var7);
            var7 = var7.SMALL_BUTTON_HEIGHT;
            var7 = var8 + var7;
            var8 = _closure1_slot21;
            if(var4) { _fun0010_ip = 100; continue _fun0010 }
case 101:
            var4 = var8.showAllVoiceChannelsButtonLastShownChannelInactive;
            var4 = var4.marginTop;
            _fun0010_ip = 102; continue _fun0010;
case 100:
            var8 = var8.showAllVoiceChannelsButtonLastShownChannelActive;
            var4 = var8.marginTop;
case 102:
            var2 = var7 + var4;
case 99:
            return var2;
case 94:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 18;
            var2 = var7[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.DIVIDER_HEIGHT;
            return var2;
case 92:
            var4 = arg4;
            var2 = 0;
            if(!var4) { _fun0010_ip = 103; continue _fun0010 }
case 20:
            var4 = _closure1_slot22;
            var4 = var4.bind(var5)(var6);
            var2 = 0;
            if(!var4) { _fun0010_ip = 103; continue _fun0010 }
case 43:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 18;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var2 = var3.DIVIDER_HEIGHT;
case 103:
            return var2;
case 91:
            return var1;
        }
    };
    var3['getChannelListSectionFooterSize'] = var4;
    var4 = function renderChannelListItem(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guildChannels;
            var4 = var1.section;
            var3 = var1.row;
            var11 = var1.selectedChannelId;
            var10 = var1.guild;
            var12 = var1.gameClaimMarkAsDismissed;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 15;
            var1 = var1[var8];
            var5 = undefined;
            var1 = var6.bind(var5)(var1);
            var1 = var1.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var1 !== var4)) { _fun0011_ip = 104; continue _fun0011 }
case 105:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var6.bind(var5)(var1);
            var1 = var1.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var1 !== var4)) { _fun0011_ip = 106; continue _fun0011 }
case 84:
            var1 = {};
            var1['guildChannels'] = var2;
            var1['section'] = var4;
            var1['row'] = var3;
            var1['selectedChannelId'] = var11;
            var1['guild'] = var10;
            var4 = var1.guildChannels;
            var8 = var1.section;
            var6 = var1.row;
            var15 = var1.selectedChannelId;
            var13 = var1.guild;
            var1 = var4.getChannelFromSectionRow;
            var9 = var1.bind(var4)(var8, var6);
            var6 = null;
            var14 = var6 == var9;
            var1 = null;
            if(var14) { _fun0011_ip = 107; continue _fun0011 }
case 108:
            var14 = var9.channel;
            var9 = var14.record;
            var16 = var9.id;
            var16 = var16 === var15;
            var19 = _closure1_slot5;
            var18 = var19.has;
            var17 = var9.type;
            var17 = var18.bind(var19)(var17);
            var6 = null;
            if(!var17) { _fun0011_ip = 24; continue _fun0011 }
case 109:
            var6 = var9.type;
case 24:
            var17 = var9.type;
            if(!(var6 !== var17)) { _fun0011_ip = 110; continue _fun0011 }
case 75:
            var18 = _closure1_slot0;
            var6 = _closure1_slot2;
            var19 = 35;
            var6 = var6[var19];
            var6 = var18.bind(var5)(var6);
            var6 = var6.ChannelTypes;
            var6 = var6.GUILD_VOICE;
            if(!(var6 !== var17)) { _fun0011_ip = 111; continue _fun0011 }
case 112:
            var18 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var19];
            var6 = var18.bind(var5)(var6);
            var6 = var6.ChannelTypes;
            var6 = var6.GUILD_STAGE_VOICE;
            if(!(var6 !== var17)) { _fun0011_ip = 113; continue _fun0011 }
case 114:
            var18 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var19];
            var6 = var18.bind(var5)(var6);
            var6 = var6.ChannelTypes;
            var6 = var6.DM;
            if(!(var6 !== var17)) { _fun0011_ip = 115; continue _fun0011 }
case 116:
            var18 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var19];
            var6 = var18.bind(var5)(var6);
            var6 = var6.ChannelTypes;
            var6 = var6.GROUP_DM;
            if(!(var6 !== var17)) { _fun0011_ip = 115; continue _fun0011 }
case 117:
            var6 = var4.voiceChannelsSectionNumber;
            if(!(var8 === var6)) { _fun0011_ip = 118; continue _fun0011 }
case 119:
            var6 = var9.isCategory;
            var6 = var6.bind(var9)();
            if(var6) { _fun0011_ip = 120; continue _fun0011 }
case 118:
            var8 = _closure1_slot0;
            var17 = _closure1_slot2;
            var6 = 39;
            var6 = var17[var6];
            var8 = var8.bind(var5)(var6);
            var6 = var8.isFavoritesGuildId;
            var4 = var4.id;
            var4 = var6.bind(var8)(var4);
            if(!var4) { _fun0011_ip = 121; continue _fun0011 }
case 122:
            var8 = _closure1_slot6;
            var6 = var8.has;
            var4 = var9.type;
            var4 = var6.bind(var8)(var4);
            if(var4) { _fun0011_ip = 123; continue _fun0011 }
case 121:
            var8 = _closure1_slot18;
            var6 = _closure1_slot1;
            var17 = _closure1_slot2;
            var4 = 40;
            var4 = var17[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['channel'] = var9;
            var4['selected'] = var16;
            var4 = var8.bind(var5)(var6, var4);
            _fun0011_ip = 124; continue _fun0011;
case 123:
            var17 = _closure1_slot18;
            var8 = _closure1_slot1;
            var18 = _closure1_slot2;
            var6 = 34;
            var6 = var18[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var6['channel'] = var9;
            var6['selected'] = var16;
            var18 = var14.isMuted;
            var6['muted'] = var18;
            var18 = var14.subtitle;
            var6['subtitle'] = var18;
            var18 = false;
            var6['isRulesChannel'] = var18;
            var4 = var17.bind(var5)(var8, var6);
case 124:
            _fun0011_ip = 125; continue _fun0011;
case 120:
            var17 = _closure1_slot18;
            var8 = _closure1_slot0;
            var18 = _closure1_slot2;
            var6 = 16;
            var6 = var18[var6];
            var6 = var8.bind(var5)(var6);
            var8 = var6.CategoryChannel;
            var6 = {};
            var6['channel'] = var9;
            var18 = true;
            var6['withMarginTop'] = var18;
            var4 = var17.bind(var5)(var8, var6);
case 125:
            var1 = var4;
            _fun0011_ip = 107; continue _fun0011;
case 115:
            var8 = _closure1_slot18;
            var6 = _closure1_slot1;
            var17 = _closure1_slot2;
            var4 = 38;
            var4 = var17[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['channel'] = var9;
            var4['selected'] = var16;
            var1 = var8.bind(var5)(var6, var4);
            _fun0011_ip = 107; continue _fun0011;
case 113:
            var8 = _closure1_slot18;
            var6 = _closure1_slot1;
            var17 = _closure1_slot2;
            var4 = 37;
            var4 = var17[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['channel'] = var9;
            var4['selected'] = var16;
            var1 = var8.bind(var5)(var6, var4);
            _fun0011_ip = 107; continue _fun0011;
case 111:
            var8 = _closure1_slot18;
            var6 = _closure1_slot1;
            var17 = _closure1_slot2;
            var4 = 36;
            var4 = var17[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['channel'] = var9;
            var4['selected'] = var16;
            var17 = var14.subtitle;
            var4['subtitle'] = var17;
            var1 = var8.bind(var5)(var6, var4);
            _fun0011_ip = 107; continue _fun0011;
case 110:
            var8 = _closure1_slot18;
            var6 = _closure1_slot1;
            var17 = _closure1_slot2;
            var4 = 34;
            var4 = var17[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['channel'] = var9;
            var4['selected'] = var16;
            var16 = var14.isMuted;
            var4['muted'] = var16;
            var16 = var14.subtitle;
            var4['subtitle'] = var16;
            var13 = var13.rulesChannelId;
            var9 = var9.id;
            var9 = var13 === var9;
            var4['isRulesChannel'] = var9;
            var13 = var8.bind(var5)(var6, var4);
            var8 = _closure1_slot19;
            var6 = _closure1_slot20;
            var4 = {};
            var9 = new Array(2);
            var9[0] = var13;
            var13 = _closure1_slot23;
            var13 = var13.bind(var5)(var14, var15);
            var9[1] = var13;
            var4['children'] = var9;
            var1 = var8.bind(var5)(var6, var4);
case 107:
            return var1;
case 106:
            var1 = var2.getGuildActionSection;
            var4 = var1.bind(var2)();
            var1 = var4.getRow;
            var8 = var1.bind(var4)(var3);
            var4 = null;
            var6 = var4 == var8;
            var1 = null;
            if(var6) { _fun0011_ip = 126; continue _fun0011 }
case 127:
            var6 = _closure1_slot17;
            var6 = var6.GUILD_ROLE_SUBSCRIPTIONS;
            if(!(var6 !== var8)) { _fun0011_ip = 128; continue _fun0011 }
case 129:
            var6 = _closure1_slot17;
            var6 = var6.GUILD_HOME;
            if(!(var6 !== var8)) { _fun0011_ip = 130; continue _fun0011 }
case 131:
            var6 = _closure1_slot17;
            var6 = var6.CHANNELS_AND_ROLES;
            if(!(var6 !== var8)) { _fun0011_ip = 132; continue _fun0011 }
case 133:
            var6 = _closure1_slot17;
            var6 = var6.GUILD_DIRECTORY;
            if(!(var6 !== var8)) { _fun0011_ip = 134; continue _fun0011 }
case 135:
            var6 = _closure1_slot17;
            var6 = var6.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            if(!(var6 !== var8)) { _fun0011_ip = 136; continue _fun0011 }
case 137:
            var6 = _closure1_slot17;
            var6 = var6.GUILD_HUB_HEADER_OPTIONS;
            if(!(var6 !== var8)) { _fun0011_ip = 138; continue _fun0011 }
case 139:
            var6 = _closure1_slot17;
            var6 = var6.GUILD_MOD_DASH_MEMBER_SAFETY;
            if(!(var6 !== var8)) { _fun0011_ip = 140; continue _fun0011 }
case 141:
            var6 = _closure1_slot17;
            var6 = var6.GUILD_BOOSTS;
            if(!(var6 !== var8)) { _fun0011_ip = 142; continue _fun0011 }
case 143:
            var6 = _closure1_slot17;
            var6 = var6.GUILD_SCHEDULED_EVENTS;
            var1 = null;
            if(!(var6 !== var8)) { _fun0011_ip = 126; continue _fun0011 }
case 144:
            var6 = _closure1_slot17;
            var6 = var6.GUILD_FAVORITES;
            var1 = null;
            if(!(var6 !== var8)) { _fun0011_ip = 126; continue _fun0011 }
case 145:
            var6 = _closure1_slot17;
            var6 = var6.GUILD_CHANNEL_LIST_OPT_IN_NOTICE;
            var1 = null;
            if(!(var6 !== var8)) { _fun0011_ip = 126; continue _fun0011 }
case 146:
            var6 = _closure1_slot17;
            var6 = var6.GUILD_SHOP;
            var1 = null;
            if(!(var6 !== var8)) { _fun0011_ip = 126; continue _fun0011 }
case 147:
            var6 = _closure1_slot17;
            var6 = var6.BROWSE_CHANNELS;
            var1 = null;
            if(!(var6 !== var8)) { _fun0011_ip = 126; continue _fun0011 }
case 148:
            var6 = _closure1_slot17;
            var6 = var6.GUILD_PREMIUM_PROGRESS_BAR;
            var1 = null;
            _fun0011_ip = 126; continue _fun0011;
case 142:
            var8 = _closure1_slot18;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 32;
            var4 = var9[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var9 = var10.id;
            var4['guildId'] = var9;
            var1 = var8.bind(var5)(var6, var4);
            _fun0011_ip = 126; continue _fun0011;
case 140:
            var8 = _closure1_slot18;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 31;
            var4 = var9[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['guild'] = var10;
            var9 = _closure1_slot15;
            var9 = var9.MEMBER_SAFETY;
            var9 = var11 === var9;
            var4['selected'] = var9;
            var1 = var8.bind(var5)(var6, var4);
            _fun0011_ip = 126; continue _fun0011;
case 138:
            var8 = _closure1_slot18;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 30;
            var4 = var9[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['guild'] = var10;
            var1 = var8.bind(var5)(var6, var4);
            _fun0011_ip = 126; continue _fun0011;
case 136:
            var8 = _closure1_slot19;
            var6 = _closure1_slot3;
            var4 = {};
            var13 = _closure1_slot18;
            var9 = {};
            var14 = _closure1_slot21;
            var14 = var14.nonChannelContainer;
            var9['style'] = var14;
            var17 = _closure1_slot18;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = 29;
            var14 = var16[var14];
            var14 = var15.bind(var5)(var14);
            var15 = var14.NewMemberActionsProgress;
            var14 = {};
            var18 = var10.id;
            var14['guildId'] = var18;
            var14 = var17.bind(var5)(var15, var14);
            var9['children'] = var14;
            var13 = var13.bind(var5)(var6, var9);
            var9 = new Array(2);
            var9[0] = var13;
            var15 = _closure1_slot18;
            var14 = _closure1_slot1;
            var13 = 18;
            var13 = var16[var13];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var13 = var15.bind(var5)(var14, var13);
            var9[1] = var13;
            var4['children'] = var9;
            var1 = var8.bind(var5)(var6, var4);
            _fun0011_ip = 126; continue _fun0011;
case 134:
            var8 = _closure1_slot8;
            var6 = var8.getDirectoryChannelIds;
            var4 = var10.id;
            var6 = var6.bind(var8)(var4);
            var4 = 0;
            var9 = var6[var4];
            var8 = _closure1_slot18;
            var6 = _closure1_slot1;
            var13 = _closure1_slot2;
            var4 = 28;
            var4 = var13[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var13 = var10.id;
            var4['guildId'] = var13;
            var9 = var11 === var9;
            var4['selected'] = var9;
            var1 = var8.bind(var5)(var6, var4);
            _fun0011_ip = 126; continue _fun0011;
case 132:
            var8 = _closure1_slot18;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 27;
            var4 = var9[var4];
            var4 = var6.bind(var5)(var4);
            var6 = var4.GuildRolesAndChannelsRow;
            var4 = {};
            var4['guild'] = var10;
            var9 = _closure1_slot15;
            var9 = var9.CHANNEL_BROWSER;
            var9 = var11 === var9;
            if(var9) { _fun0011_ip = 149; continue _fun0011 }
case 150:
            var13 = _closure1_slot15;
            var13 = var13.CUSTOMIZE_COMMUNITY;
            var9 = var11 === var13;
case 149:
            var4['selected'] = var9;
            var1 = var8.bind(var5)(var6, var4);
            _fun0011_ip = 126; continue _fun0011;
case 130:
            var8 = _closure1_slot18;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 26;
            var4 = var9[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['guild'] = var10;
            var9 = _closure1_slot15;
            var9 = var9.GUILD_HOME;
            var9 = var11 === var9;
            var4['selected'] = var9;
            var1 = var8.bind(var5)(var6, var4);
            _fun0011_ip = 126; continue _fun0011;
case 128:
            var8 = _closure1_slot18;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 25;
            var4 = var9[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['guild'] = var10;
            var9 = _closure1_slot15;
            var9 = var9.ROLE_SUBSCRIPTIONS;
            var9 = var11 === var9;
            var4['selected'] = var9;
            var1 = var8.bind(var5)(var6, var4);
case 126:
            return var1;
case 104:
            var1 = var2.getChannelNoticeSection;
            var2 = var1.bind(var2)();
            var1 = var2.getRow;
            var4 = var1.bind(var2)(var3);
            var2 = null;
            var3 = var2 == var4;
            var1 = null;
            if(var3) { _fun0011_ip = 151; continue _fun0011 }
case 152:
            var3 = _closure1_slot16;
            var3 = var3.SPACER;
            if(!(var3 !== var4)) { _fun0011_ip = 153; continue _fun0011 }
case 154:
            var3 = _closure1_slot16;
            var3 = var3.GUILD_PROGRESS;
            if(!(var3 !== var4)) { _fun0011_ip = 155; continue _fun0011 }
case 156:
            var3 = _closure1_slot16;
            var3 = var3.MFA_WARNING;
            if(!(var3 !== var4)) { _fun0011_ip = 157; continue _fun0011 }
case 158:
            var3 = _closure1_slot16;
            var3 = var3.LIVE_CHANNEL_NOTICE;
            if(!(var3 !== var4)) { _fun0011_ip = 159; continue _fun0011 }
case 160:
            var3 = _closure1_slot16;
            var3 = var3.GAME_CLAIM;
            var1 = null;
            if(!(var3 === var4)) { _fun0011_ip = 151; continue _fun0011 }
case 161:
            var3 = var2 == var12;
            var2 = null;
            if(var3) { _fun0011_ip = 162; continue _fun0011 }
case 163:
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
case 162:
            var1 = var2;
            _fun0011_ip = 151; continue _fun0011;
case 159:
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
            _fun0011_ip = 151; continue _fun0011;
case 157:
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
            var6 = var9.bind(var5)(var8, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
            _fun0011_ip = 151; continue _fun0011;
case 155:
            var4 = _closure1_slot18;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = _closure1_slot21;
            var6 = var6.nonChannelContainer;
            var2['style'] = var6;
            var9 = _closure1_slot18;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 23;
            var6 = var11[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var6['guild'] = var10;
            var6 = var9.bind(var5)(var8, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
            _fun0011_ip = 151; continue _fun0011;
case 153:
            var4 = _closure1_slot18;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = {};
            var7 = _closure1_slot14;
            var6['height'] = var7;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 151:
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
            var10 = 15;
            var1 = var1[var10];
            var7 = undefined;
            var1 = var8.bind(var7)(var1);
            var1 = var1.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var1 !== var15)) { _fun0012_ip = 164; continue _fun0012 }
case 18:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var1 = var8.bind(var7)(var1);
            var1 = var1.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var1 !== var15)) { _fun0012_ip = 165; continue _fun0012 }
case 166:
            var1 = _closure1_slot12;
            var10 = var1.bind(var7)(var6);
            var1 = var3.getChannelFromSectionRow;
            var8 = var1.bind(var3)(var15, var4);
            var14 = null;
            var11 = var14 == var8;
            var16 = 0;
            var1 = 0;
            if(var11) { _fun0012_ip = 167; continue _fun0012 }
case 168:
            var8 = var8.channel;
            var11 = var8.record;
            var18 = _closure1_slot5;
            var17 = var18.has;
            var13 = var11.type;
            var17 = var17.bind(var18)(var13);
            var13 = null;
            if(!var17) { _fun0012_ip = 169; continue _fun0012 }
case 170:
            var13 = var11.type;
case 169:
            var17 = var11.type;
            if(!(var13 !== var17)) { _fun0012_ip = 171; continue _fun0012 }
case 42:
            var18 = _closure1_slot0;
            var13 = _closure1_slot2;
            var20 = 35;
            var13 = var13[var20];
            var13 = var18.bind(var7)(var13);
            var13 = var13.ChannelTypes;
            var13 = var13.GUILD_VOICE;
            if(!(var13 !== var17)) { _fun0012_ip = 172; continue _fun0012 }
case 173:
            var18 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var20];
            var13 = var18.bind(var7)(var13);
            var13 = var13.ChannelTypes;
            var13 = var13.GUILD_STAGE_VOICE;
            if(!(var13 !== var17)) { _fun0012_ip = 172; continue _fun0012 }
case 78:
            var18 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var20];
            var13 = var18.bind(var7)(var13);
            var13 = var13.ChannelTypes;
            var13 = var13.DM;
            var1 = var10;
            if(!(var13 !== var17)) { _fun0012_ip = 167; continue _fun0012 }
case 92:
            var18 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var20];
            var13 = var18.bind(var7)(var13);
            var13 = var13.ChannelTypes;
            var13 = var13.GROUP_DM;
            var1 = var10;
            if(!(var13 !== var17)) { _fun0012_ip = 167; continue _fun0012 }
case 174:
            var18 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var20];
            var13 = var18.bind(var7)(var13);
            var13 = var13.ChannelTypes;
            var13 = var13.PUBLIC_THREAD;
            if(!(var13 !== var17)) { _fun0012_ip = 175; continue _fun0012 }
case 176:
            var18 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var20];
            var13 = var18.bind(var7)(var13);
            var13 = var13.ChannelTypes;
            var13 = var13.PRIVATE_THREAD;
            if(!(var13 !== var17)) { _fun0012_ip = 175; continue _fun0012 }
case 177:
            var13 = var3.voiceChannelsSectionNumber;
            if(!(var15 === var13)) { _fun0012_ip = 178; continue _fun0012 }
case 179:
            var13 = var11.isCategory;
            var13 = var13.bind(var11)();
            if(var13) { _fun0012_ip = 180; continue _fun0012 }
case 178:
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 39;
            var13 = var17[var13];
            var17 = var15.bind(var7)(var13);
            var15 = var17.isFavoritesGuildId;
            var13 = var3.id;
            var15 = var15.bind(var17)(var13);
            var13 = var10;
            if(!var15) { _fun0012_ip = 181; continue _fun0012 }
case 182:
            var18 = _closure1_slot6;
            var17 = var18.has;
            var15 = var11.type;
            var15 = var17.bind(var18)(var15);
            var13 = var10;
            _fun0012_ip = 181; continue _fun0012;
case 180:
            var15 = _closure1_slot11;
            var17 = var15.bind(var7)(var6);
            var15 = _closure1_slot10;
            var13 = var17 + var15;
case 181:
            var1 = var13;
            _fun0012_ip = 167; continue _fun0012;
case 175:
            var17 = _closure1_slot9;
            var15 = var17.countVoiceStatesForChannel;
            var13 = var11.id;
            var17 = var15.bind(var17)(var13);
            var13 = var10;
            if(!(var17 > var16)) { _fun0012_ip = 183; continue _fun0012 }
case 184:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 41;
            var15 = var19[var15];
            var18 = var18.bind(var7)(var15);
            var15 = var18.getVoiceUserHeight;
            var15 = var15.bind(var18)(var6);
            var15 = var17 * var15;
            var13 = var10 + var15;
case 183:
            var1 = var13;
            _fun0012_ip = 167; continue _fun0012;
case 172:
            var13 = var8.subtitle;
            var14 = var14 != var13;
            var13 = 0;
            if(!var14) { _fun0012_ip = 185; continue _fun0012 }
case 186:
            var14 = _closure1_slot13;
            var13 = var14.bind(var7)(var6);
case 185:
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var15 = 41;
            var15 = var14[var15];
            var18 = var17.bind(var7)(var15);
            var15 = var18.getVoiceUserHeight;
            var19 = var15.bind(var18)(var6);
            var15 = var11.type;
            var14 = var14[var20];
            var14 = var17.bind(var7)(var14);
            var14 = var14.ChannelTypes;
            var14 = var14.GUILD_STAGE_VOICE;
            if(!(var15 !== var14)) { _fun0012_ip = 187; continue _fun0012 }
case 188:
            var17 = _closure1_slot9;
            var15 = var17.countVoiceStatesForChannel;
            var14 = var11.id;
            var15 = var15.bind(var17)(var14);
            _fun0012_ip = 189; continue _fun0012;
case 187:
            var21 = _closure1_slot4;
            var18 = var21.getParticipantCount;
            var17 = var11.id;
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var14 = 42;
            var14 = var23[var14];
            var14 = var22.bind(var7)(var14);
            var14 = var14.StageChannelParticipantNamedIndex;
            var14 = var14.SPEAKER;
            var15 = var18.bind(var21)(var17, var14);
case 189:
            var18 = var11.type;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var20];
            var14 = var17.bind(var7)(var14);
            var14 = var14.ChannelTypes;
            var17 = var14.GUILD_STAGE_VOICE;
            var14 = 0;
            if(!(var18 === var17)) { _fun0012_ip = 190; continue _fun0012 }
case 191:
            var20 = _closure1_slot4;
            var18 = var20.getParticipantCount;
            var17 = var11.id;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var11 = 42;
            var11 = var22[var11];
            var11 = var21.bind(var7)(var11);
            var11 = var11.StageChannelParticipantNamedIndex;
            var11 = var11.AUDIENCE;
            var11 = var18.bind(var20)(var17, var11);
            var11 = var11 > var16;
            var14 = 0;
            if(!var11) { _fun0012_ip = 190; continue _fun0012 }
case 192:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = 43;
            var11 = var18[var11];
            var17 = var17.bind(var7)(var11);
            var11 = var17.getAudienceItemHeight;
            var14 = var11.bind(var17)(var6);
case 190:
            var11 = var10;
            if(!(var15 > var16)) { _fun0012_ip = 193; continue _fun0012 }
case 194:
            var20 = var10 + var13;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 36;
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
case 193:
            var1 = var11;
            _fun0012_ip = 167; continue _fun0012;
case 171:
            var8 = var8.threadCount;
            var8 = var8 * var10;
            var1 = var10 + var8;
case 167:
            return var1;
case 165:
            var1 = var3.getGuildActionSection;
            var8 = var1.bind(var3)();
            var1 = var8.getRow;
            var11 = var1.bind(var8)(var4);
            var1 = null;
            var10 = var1 == var11;
            var1 = 0;
            if(var10) { _fun0012_ip = 195; continue _fun0012 }
case 196:
            var10 = _closure1_slot12;
            var13 = var10.bind(var7)(var6);
            var10 = _closure1_slot17;
            var10 = var10.GUILD_ROLE_SUBSCRIPTIONS;
            var1 = var13;
            if(!(var10 !== var11)) { _fun0012_ip = 195; continue _fun0012 }
case 197:
            var10 = _closure1_slot17;
            var10 = var10.GUILD_HOME;
            var1 = var13;
            if(!(var10 !== var11)) { _fun0012_ip = 195; continue _fun0012 }
case 198:
            var10 = _closure1_slot17;
            var10 = var10.CHANNELS_AND_ROLES;
            var1 = var13;
            if(!(var10 !== var11)) { _fun0012_ip = 195; continue _fun0012 }
case 199:
            var10 = _closure1_slot17;
            var10 = var10.GUILD_DIRECTORY;
            var1 = var13;
            if(!(var10 !== var11)) { _fun0012_ip = 195; continue _fun0012 }
case 200:
            var10 = _closure1_slot17;
            var10 = var10.GUILD_MOD_DASH_MEMBER_SAFETY;
            var1 = var13;
            if(!(var10 !== var11)) { _fun0012_ip = 195; continue _fun0012 }
case 201:
            var10 = _closure1_slot17;
            var10 = var10.GUILD_BOOSTS;
            var1 = var13;
            if(!(var10 !== var11)) { _fun0012_ip = 195; continue _fun0012 }
case 202:
            var10 = _closure1_slot17;
            var10 = var10.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            if(!(var10 !== var11)) { _fun0012_ip = 203; continue _fun0012 }
case 204:
            var10 = _closure1_slot17;
            var10 = var10.GUILD_HUB_HEADER_OPTIONS;
            var1 = var12;
            if(!(var10 !== var11)) { _fun0012_ip = 195; continue _fun0012 }
case 205:
            var10 = _closure1_slot17;
            var10 = var10.GUILD_SCHEDULED_EVENTS;
            var1 = 0;
            if(!(var10 !== var11)) { _fun0012_ip = 195; continue _fun0012 }
case 206:
            var10 = _closure1_slot17;
            var10 = var10.GUILD_FAVORITES;
            var1 = 0;
            if(!(var10 !== var11)) { _fun0012_ip = 195; continue _fun0012 }
case 207:
            var10 = _closure1_slot17;
            var10 = var10.GUILD_CHANNEL_LIST_OPT_IN_NOTICE;
            var1 = 0;
            if(!(var10 !== var11)) { _fun0012_ip = 195; continue _fun0012 }
case 208:
            var10 = _closure1_slot17;
            var10 = var10.GUILD_SHOP;
            var1 = 0;
            if(!(var10 !== var11)) { _fun0012_ip = 195; continue _fun0012 }
case 209:
            var10 = _closure1_slot17;
            var10 = var10.BROWSE_CHANNELS;
            var1 = 0;
            if(!(var10 !== var11)) { _fun0012_ip = 195; continue _fun0012 }
case 210:
            var10 = _closure1_slot17;
            var10 = var10.GUILD_PREMIUM_PROGRESS_BAR;
            var1 = 0;
            _fun0012_ip = 195; continue _fun0012;
case 203:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 18;
            var8 = var11[var8];
            var8 = var10.bind(var7)(var8);
            var10 = var8.DIVIDER_HEIGHT;
            var8 = 48;
            var1 = var8 + var10;
case 195:
            return var1;
case 164:
            var1 = var3.getChannelNoticeSection;
            var3 = var1.bind(var3)();
            var1 = var3.getRow;
            var4 = var1.bind(var3)(var4);
            var1 = null;
            var3 = var1 == var4;
            var1 = 0;
            if(var3) { _fun0012_ip = 211; continue _fun0012 }
case 212:
            var3 = _closure1_slot16;
            var3 = var3.SPACER;
            if(!(var3 !== var4)) { _fun0012_ip = 213; continue _fun0012 }
case 214:
            var3 = _closure1_slot16;
            var3 = var3.GUILD_PROGRESS;
            if(!(var3 !== var4)) { _fun0012_ip = 215; continue _fun0012 }
case 216:
            var3 = _closure1_slot16;
            var3 = var3.MFA_WARNING;
            if(!(var3 !== var4)) { _fun0012_ip = 217; continue _fun0012 }
case 218:
            var3 = _closure1_slot16;
            var3 = var3.LIVE_CHANNEL_NOTICE;
            var1 = var9;
            if(!(var3 !== var4)) { _fun0012_ip = 211; continue _fun0012 }
case 219:
            var3 = _closure1_slot16;
            var3 = var3.GAME_CLAIM;
            var1 = 0;
            if(!(var3 === var4)) { _fun0012_ip = 211; continue _fun0012 }
case 220:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 12;
            var3 = var8[var3];
            var4 = var4.bind(var7)(var3);
            var3 = var4.getScaledGameClaimNoticeHeight;
            var1 = var3.bind(var4)(var6);
            _fun0012_ip = 211; continue _fun0012;
case 217:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 24;
            var3 = var8[var3];
            var4 = var4.bind(var7)(var3);
            var3 = var4.getScaledGuildMFAWarningHeight;
            var1 = var3.bind(var4)(var6);
            _fun0012_ip = 211; continue _fun0012;
case 215:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 23;
            var3 = var8[var3];
            var4 = var4.bind(var7)(var3);
            var3 = var4.getScaledGuildProgressButtonHeight;
            var1 = var3.bind(var4)(var6, var5);
            _fun0012_ip = 211; continue _fun0012;
case 213:
            var1 = _closure1_slot14;
case 211:
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
            var1 = 19;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isVoiceChannelsSection;
            var1 = var1.bind(var3)(var8, var10);
            if(var1) { _fun0013_ip = 221; continue _fun0013 }
case 222:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 15;
            var1 = var9[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.SECTION_INDEX_FIRST_NAMED_CATEGORY;
            if(!(var8 < var1)) { _fun0013_ip = 221; continue _fun0013 }
case 89:
            var1 = null;
            return var1;
case 221:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 44;
            var1 = var1[var9];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getSectionFooterConfig;
            var1 = var1.bind(var3)(var10, var11, var8);
            var3 = var1.canHaveVoiceSummary;
            var1 = null;
            if(var3) { _fun0013_ip = 71; continue _fun0013 }
case 223:
            return var1;
case 71:
            var3 = var10.getNamedCategoryFromSection;
            var8 = var3.bind(var10)(var8);
            if(!(var1 != var8)) { _fun0013_ip = 224; continue _fun0013 }
case 225:
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
            if(!(var4 !== var5)) { _fun0013_ip = 41; continue _fun0013 }
case 226:
            var2 = var3;
case 41:
            return var2;
case 224:
            return var1;
        }
    };
    var3['calculateVoiceSummary'] = var2;
    return var1;
})();