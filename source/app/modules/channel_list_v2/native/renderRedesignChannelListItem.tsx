// app/modules/channel_list_v2/native/renderRedesignChannelListItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var1 = function renderThreads(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = arg2;
        var _closure2_slot1 = var3;
        var3 = var2.threadIds;
        var2 = var3.map;
        var1 = function(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var6 = arg1;
                var3 = _closure1_slot7;
                var1 = var3.getChannel;
                var3 = var1.bind(var3)(var6);
                var1 = null;
                var3 = var1 == var3;
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure1_slot20;
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
case 2:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function calculateVoiceChannelHeaderInfo(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = var3.getCategoryFromSection;
            var1 = var3.voiceChannelsSectionNumber;
            var4 = var2.bind(var3)(var1);
            var1 = null;
            var5 = var1 == var4;
            if(var5) { _fun0002_ip = 4; continue _fun0002 }
case 3:
            var1 = var4.isEmpty;
            var5 = var1.bind(var4)();
case 4:
            var3 = false;
            var2 = false;
            if(var5) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var4 = var4.isCollapsed;
            var1 = false;
            if(!var4) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var1 = true;
case 7:
            var3 = true;
            var2 = var1;
case 5:
            var1 = {};
            var1['showDivider'] = var3;
            var1['isCollapsed'] = var2;
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function calculateVoiceChannelButtonInfo(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var2 = var3.getCategoryFromSection;
            var1 = arg2;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 != var2)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var1 = var2.getHiddenChannelIds;
            var1 = var1.bind(var2)();
            var1 = var1.length;
            var3 = 0;
            if(!(!(var1 > var3))) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var1 = var2.isEmpty;
            var1 = var1.bind(var2)();
            if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 8:
            var1 = {'render': false, 'lastShownChannelActive': false};
            return var1;
case 10:
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
    var _closure1_slot26 = var1;
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
    var4 = var4.FAVORITES;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FAVORITES_RAW_GUILD_ID;
    var _closure1_slot17 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ChannelListChannelNoticeRow;
    var _closure1_slot18 = var7;
    var4 = var4.ChannelListGuildActionRow;
    var _closure1_slot19 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot20 = var7;
    var7 = var4.jsxs;
    var _closure1_slot21 = var7;
    var4 = var4.Fragment;
    var _closure1_slot22 = var4;
    var4 = {};
    var7 = {};
    var10 = 16;
    var7['marginHorizontal'] = var10;
    var4['nonChannelContainer'] = var7;
    var7 = {};
    var8 = 13;
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
    var _closure1_slot23 = var4;
    var4 = 44;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/renderRedesignChannelListItem.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getFastListRecyclerKey(arg1, arg2, arg3, arg4) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
            if(!(var5 !== var3)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var3 = var7.bind(var1)(var3);
            var3 = var3.FastListItemTypes;
            var3 = var3.SECTION;
            if(!(var5 !== var3)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            return var1;
case 14:
            var9 = var2.id;
            var3 = global;
            var3 = var3.HermesInternal;
            var7 = var3.concat;
            var5 = '';
            var3 = ':SECTION:';
            var3 = var7.bind(var5)(var9, var3, var8);
            return var3;
case 12:
            var3 = null;
            if(!(var3 != var6)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = 16;
            var5 = var5[var7];
            var5 = var9.bind(var1)(var5);
            var5 = var5.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var5 !== var8)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var5.bind(var1)(var4);
            var4 = var4.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var4 !== var8)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var4 = var2.getChannelFromSectionRow;
            var4 = var4.bind(var2)(var8, var6);
            var5 = var3 == var4;
            var7 = undefined;
            if(var5) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var4 = var4.channel;
            var5 = var3 == var4;
            var7 = undefined;
            if(var5) { _fun0004_ip = 22; continue _fun0004 }
case 24:
            var7 = var4.id;
case 22:
            _fun0004_ip = 25; continue _fun0004;
case 20:
            var4 = var2.getGuildActionSection;
            var5 = var4.bind(var2)();
            var4 = var5.getRow;
            var7 = var4.bind(var5)(var6);
            _fun0004_ip = 25; continue _fun0004;
case 18:
            var4 = var2.getChannelNoticeSection;
            var5 = var4.bind(var2)();
            var4 = var5.getRow;
            var7 = var4.bind(var5)(var6);
case 25:
            if(!(var3 != var7)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
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
case 26:
            return var1;
case 16:
            return var1;
        }
    };
    var3['getFastListRecyclerKey'] = var4;
    var4 = function renderChannelListSectionHeader(arg1, arg2, arg3, arg4) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var7 = arg1;
            var9 = arg2;
            var4 = arg4;
            var1 = var7.favoritesSectionNumber;
            if(!(var1 !== var9)) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var1 = var7.recentsSectionNumber;
            if(!(var1 !== var9)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var1 = var7.voiceChannelsSectionNumber;
            if(!(var1 !== var9)) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 20;
            var1 = var5[var1];
            var6 = undefined;
            var3 = var3.bind(var6)(var1);
            var1 = var3.isNamedCategorySection;
            var3 = var1.bind(var3)(var9);
            var1 = null;
            if(var3) { _fun0005_ip = 14; continue _fun0005 }
case 15:
            return var1;
case 14:
            var3 = var7.getNamedCategoryFromSection;
            var8 = var3.bind(var7)(var9);
            var3 = var1 == var8;
            var1 = null;
            if(var3) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            var5 = _closure1_slot20;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 17;
            var2 = var10[var2];
            var2 = var3.bind(var6)(var2);
            var3 = var2.CategoryChannel;
            var2 = {};
            var8 = var8.record;
            var2['channel'] = var8;
            var2['withMarginTop'] = var4;
            var1 = var5.bind(var6)(var3, var2);
case 34:
            return var1;
case 32:
            var1 = _closure1_slot25;
            var5 = undefined;
            var1 = var1.bind(var5)(var7);
            var6 = var1.showDivider;
            var11 = var1.isCollapsed;
            var3 = _closure1_slot21;
            var2 = _closure1_slot3;
            var1 = {};
            var12 = null;
            if(!var6) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            var14 = _closure1_slot20;
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 19;
            var6 = var15[var6];
            var13 = var13.bind(var5)(var6);
            var6 = {};
            var12 = var14.bind(var5)(var13, var6);
case 36:
            var6 = new Array(2);
            var6[0] = var12;
            var8 = null;
            if(!var11) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 17;
            var10 = var17[var10];
            var12 = var16.bind(var5)(var10);
            var11 = var12.renderCategoryItem;
            var10 = {};
            var13 = 18;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.V/u9Dw;
            var13 = var14.bind(var15)(var13);
            var10['name'] = var13;
            var8 = var11.bind(var12)(var10);
case 38:
            var6[1] = var8;
            var1['children'] = var6;
            var1 = var3.bind(var5)(var2, var1);
            return var1;
case 30:
            var6 = _closure1_slot20;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 17;
            var1 = var3[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = arg3;
            if(var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var3 = var2.SuggestedCategory;
            var1 = {};
            var8 = var7.id;
            var1['guildId'] = var8;
            var8 = var7.getCategoryFromSection;
            var11 = var8.bind(var7)(var9);
            var9 = null;
            var10 = var9 == var11;
            var8 = undefined;
            if(var10) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var10 = var11.getShownChannelAndThreadIds;
            var8 = var10.bind(var11)();
case 42:
            if(!(var9 == var8)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var8 = new Array(0);
case 44:
            var1['channelIds'] = var8;
            var1['withMarginTop'] = var4;
            var1 = var6.bind(var5)(var3, var1);
            _fun0005_ip = 46; continue _fun0005;
case 40:
            var3 = var2.RecentlyActiveCategory;
            var2 = {};
            var7 = var7.id;
            var2['guildId'] = var7;
            var2['withMarginTop'] = var4;
            var1 = var6.bind(var5)(var3, var2);
case 46:
            return var1;
case 28:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 17;
            var1 = var10[var1];
            var8 = undefined;
            var3 = var9.bind(var8)(var1);
            var2 = var3.renderCategoryItem;
            var1 = {};
            var5 = 18;
            var6 = var10[var5];
            var6 = var9.bind(var8)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var10[var5];
            var5 = var9.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5.k8fFjo;
            var5 = var6.bind(var7)(var5);
            var1['name'] = var5;
            var1['withMarginTop'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['renderChannelListSectionHeader'] = var4;
    var4 = function getChannelListSectionHeaderSize(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
            if(!var4) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var1 = _closure1_slot10;
case 47:
            var4 = var5.favoritesSectionNumber;
            if(!(var4 !== var9)) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var4 = var5.recentsSectionNumber;
            if(!(var4 !== var9)) { _fun0006_ip = 49; continue _fun0006 }
case 51:
            var4 = var5.voiceChannelsSectionNumber;
            if(!(var4 !== var9)) { _fun0006_ip = 52; continue _fun0006 }
case 10:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 20;
            var4 = var10[var4];
            var7 = var7.bind(var8)(var4);
            var4 = var7.isNamedCategorySection;
            var7 = var4.bind(var7)(var9);
            var4 = 0;
            if(!var7) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var7 = var5.getNamedCategoryFromSection;
            var9 = var7.bind(var5)(var9);
            var7 = null;
            var9 = var7 == var9;
            var7 = 0;
            if(var9) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var7 = var2 + var1;
case 55:
            var4 = var7;
case 53:
            return var4;
case 52:
            var4 = _closure1_slot25;
            var4 = var4.bind(var8)(var5);
            var7 = var4.showDivider;
            var5 = var4.isCollapsed;
            var4 = 0;
            if(!var7) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 19;
            var3 = var9[var3];
            var3 = var7.bind(var8)(var3);
            var3 = var3.DIVIDER_HEIGHT;
            var4 = var6 + var3;
case 57:
            var3 = var4;
            if(!var5) { _fun0006_ip = 59; continue _fun0006 }
case 60:
            var3 = var4 + var2;
case 59:
            return var3;
case 49:
            var1 = var2 + var1;
            return var1;
        }
    };
    var3['getChannelListSectionHeaderSize'] = var4;
    var4 = function renderChannelListSectionFooter(arg1, arg2, arg3, arg4) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var15 = arg1;
            var14 = arg2;
            var6 = arg4;
            var1 = null;
            var2 = var1 != var6;
            var8 = null;
            if(!var2) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var5 = _closure1_slot20;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 17;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.RedesignVoiceUserSummary;
            var2 = {};
            var7 = var15.id;
            var2['guildId'] = var7;
            var2['channels'] = var6;
            var8 = var5.bind(var4)(var3, var2);
case 61:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 16;
            var3 = var3[var6];
            var5 = undefined;
            var3 = var4.bind(var5)(var3);
            var3 = var3.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var3 !== var14)) { _fun0007_ip = 63; continue _fun0007 }
case 64:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var3 !== var14)) { _fun0007_ip = 63; continue _fun0007 }
case 65:
            var3 = var15.favoritesSectionNumber;
            if(!(var3 !== var14)) { _fun0007_ip = 66; continue _fun0007 }
case 67:
            var3 = var15.recentsSectionNumber;
            if(!(var3 !== var14)) { _fun0007_ip = 66; continue _fun0007 }
case 68:
            var3 = var15.voiceChannelsSectionNumber;
            if(!(var3 === var14)) { _fun0007_ip = 59; continue _fun0007 }
case 69:
            var3 = _closure1_slot26;
            var4 = var3.bind(var5)(var15, var14);
            var3 = var4.render;
            var11 = var4.lastShownChannelActive;
            if(var3) { _fun0007_ip = 70; continue _fun0007 }
case 59:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 20;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isNamedCategorySection;
            var4 = var3.bind(var4)(var14);
            var3 = null;
            if(!var4) { _fun0007_ip = 71; continue _fun0007 }
case 72:
            var3 = var8;
case 71:
            return var3;
case 70:
            var6 = _closure1_slot21;
            var4 = _closure1_slot3;
            var3 = {};
            var7 = new Array(2);
            var7[0] = var8;
            var10 = _closure1_slot20;
            var9 = _closure1_slot3;
            var8 = {};
            var12 = _closure1_slot23;
            if(var11) { _fun0007_ip = 73; continue _fun0007 }
case 74:
            var11 = var12.showAllVoiceChannelsButtonLastShownChannelInactive;
            _fun0007_ip = 75; continue _fun0007;
case 73:
            var11 = var12.showAllVoiceChannelsButtonLastShownChannelActive;
case 75:
            var8['style'] = var11;
            var13 = _closure1_slot20;
            var12 = _closure1_slot1;
            var16 = _closure1_slot2;
            var11 = 21;
            var11 = var16[var11];
            var12 = var12.bind(var5)(var11);
            var11 = {};
            var15 = var15.id;
            var11['guildId'] = var15;
            var11['section'] = var14;
            var14 = arg3;
            var11['listRef'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var8['children'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var7[1] = var8;
            var3['children'] = var7;
            var3 = var6.bind(var5)(var4, var3);
            return var3;
case 66:
            var4 = _closure1_slot20;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 19;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 63:
            return var1;
        }
    };
    var3['renderChannelListSectionFooter'] = var4;
    var4 = function getChannelListSectionHasFooterDivider(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var3 = arg2;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = 16;
            var4 = var4[var6];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var4 = var4.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var4 !== var3)) { _fun0008_ip = 76; continue _fun0008 }
case 77:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var2 !== var3)) { _fun0008_ip = 76; continue _fun0008 }
case 78:
            var2 = var1.favoritesSectionNumber;
            if(!(var2 !== var3)) { _fun0008_ip = 79; continue _fun0008 }
case 80:
            var2 = var1.recentsSectionNumber;
            if(!(var2 !== var3)) { _fun0008_ip = 79; continue _fun0008 }
case 14:
            var1 = var1.voiceChannelsSectionNumber;
            var1 = false;
            return var1;
case 79:
            var1 = true;
            return var1;
case 76:
            var1 = false;
            return var1;
        }
    };
    var3['getChannelListSectionHasFooterDivider'] = var4;
    var4 = function getChannelListSectionFooterSize(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var2 = null;
            var1 = arg3;
            var2 = var2 != var1;
            var1 = 0;
            var7 = 0;
            if(!var2) { _fun0009_ip = 13; continue _fun0009 }
case 29:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 22;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var7 = var2.VOICE_USER_SUMMARY_HEIGHT;
case 13:
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var9 = 16;
            var3 = var3[var9];
            var4 = undefined;
            var3 = var8.bind(var4)(var3);
            var3 = var3.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var3 !== var5)) { _fun0009_ip = 81; continue _fun0009 }
case 82:
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var3 = var8.bind(var4)(var3);
            var3 = var3.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var3 !== var5)) { _fun0009_ip = 81; continue _fun0009 }
case 83:
            var3 = var6.favoritesSectionNumber;
            if(!(var3 !== var5)) { _fun0009_ip = 84; continue _fun0009 }
case 17:
            var3 = var6.recentsSectionNumber;
            if(!(var3 !== var5)) { _fun0009_ip = 84; continue _fun0009 }
case 85:
            var3 = var6.voiceChannelsSectionNumber;
            if(!(var3 !== var5)) { _fun0009_ip = 86; continue _fun0009 }
case 87:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 20;
            var3 = var9[var3];
            var8 = var8.bind(var4)(var3);
            var3 = var8.isNamedCategorySection;
            var8 = var3.bind(var8)(var5);
            var3 = 0;
            if(!var8) { _fun0009_ip = 57; continue _fun0009 }
case 88:
            var3 = var7;
case 57:
            return var3;
case 86:
            var3 = _closure1_slot26;
            var3 = var3.bind(var4)(var6, var5);
            var6 = var3.render;
            var5 = var3.lastShownChannelActive;
            var3 = var7;
            if(!var6) { _fun0009_ip = 89; continue _fun0009 }
case 24:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 23;
            var6 = var9[var6];
            var6 = var8.bind(var4)(var6);
            var6 = var6.SMALL_BUTTON_HEIGHT;
            var6 = var7 + var6;
            var7 = _closure1_slot23;
            if(var5) { _fun0009_ip = 90; continue _fun0009 }
case 91:
            var5 = var7.showAllVoiceChannelsButtonLastShownChannelInactive;
            var5 = var5.marginTop;
            _fun0009_ip = 92; continue _fun0009;
case 90:
            var7 = var7.showAllVoiceChannelsButtonLastShownChannelActive;
            var5 = var7.marginTop;
case 92:
            var3 = var6 + var5;
case 89:
            return var3;
case 84:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 19;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.DIVIDER_HEIGHT;
            return var2;
case 81:
            return var1;
        }
    };
    var3['getChannelListSectionFooterSize'] = var4;
    var4 = function renderChannelListItem(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guildChannels;
            var4 = var1.section;
            var3 = var1.row;
            var11 = var1.selectedChannelId;
            var10 = var1.guild;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 16;
            var1 = var1[var8];
            var5 = undefined;
            var1 = var6.bind(var5)(var1);
            var1 = var1.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var1 !== var4)) { _fun0010_ip = 93; continue _fun0010 }
case 94:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var6.bind(var5)(var1);
            var1 = var1.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var1 !== var4)) { _fun0010_ip = 95; continue _fun0010 }
case 96:
            var1 = {};
            var1['guildChannels'] = var2;
            var1['section'] = var4;
            var1['row'] = var3;
            var1['selectedChannelId'] = var11;
            var1['guild'] = var10;
            var4 = var1.guildChannels;
            var8 = var1.section;
            var6 = var1.row;
            var14 = var1.selectedChannelId;
            var12 = var1.guild;
            var1 = var4.getChannelFromSectionRow;
            var9 = var1.bind(var4)(var8, var6);
            var6 = null;
            var13 = var6 == var9;
            var1 = null;
            if(var13) { _fun0010_ip = 97; continue _fun0010 }
case 98:
            var13 = var9.channel;
            var9 = var13.record;
            var15 = var9.id;
            var15 = var15 === var14;
            var18 = _closure1_slot5;
            var17 = var18.has;
            var16 = var9.type;
            var16 = var17.bind(var18)(var16);
            var6 = null;
            if(!var16) { _fun0010_ip = 99; continue _fun0010 }
case 100:
            var6 = var9.type;
case 99:
            var16 = var9.type;
            if(!(var6 !== var16)) { _fun0010_ip = 101; continue _fun0010 }
case 102:
            var17 = _closure1_slot0;
            var6 = _closure1_slot2;
            var18 = 35;
            var6 = var6[var18];
            var6 = var17.bind(var5)(var6);
            var6 = var6.ChannelTypes;
            var6 = var6.GUILD_VOICE;
            if(!(var6 !== var16)) { _fun0010_ip = 103; continue _fun0010 }
case 104:
            var17 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var18];
            var6 = var17.bind(var5)(var6);
            var6 = var6.ChannelTypes;
            var6 = var6.GUILD_STAGE_VOICE;
            if(!(var6 !== var16)) { _fun0010_ip = 105; continue _fun0010 }
case 106:
            var17 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var18];
            var6 = var17.bind(var5)(var6);
            var6 = var6.ChannelTypes;
            var6 = var6.DM;
            if(!(var6 !== var16)) { _fun0010_ip = 107; continue _fun0010 }
case 108:
            var17 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var18];
            var6 = var17.bind(var5)(var6);
            var6 = var6.ChannelTypes;
            var6 = var6.GROUP_DM;
            if(!(var6 !== var16)) { _fun0010_ip = 107; continue _fun0010 }
case 41:
            var6 = var4.voiceChannelsSectionNumber;
            if(!(var8 === var6)) { _fun0010_ip = 109; continue _fun0010 }
case 110:
            var6 = var9.isCategory;
            var6 = var6.bind(var9)();
            if(var6) { _fun0010_ip = 111; continue _fun0010 }
case 109:
            var8 = var4.id;
            var6 = _closure1_slot17;
            if(!(var8 !== var6)) { _fun0010_ip = 112; continue _fun0010 }
case 43:
            var6 = var4.id;
            var4 = _closure1_slot15;
            if(!(var6 === var4)) { _fun0010_ip = 113; continue _fun0010 }
case 112:
            var8 = _closure1_slot6;
            var6 = var8.has;
            var4 = var9.type;
            var4 = var6.bind(var8)(var4);
            if(!var4) { _fun0010_ip = 113; continue _fun0010 }
case 114:
            var8 = _closure1_slot20;
            var6 = _closure1_slot1;
            var16 = _closure1_slot2;
            var4 = 34;
            var4 = var16[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['channel'] = var9;
            var4['selected'] = var15;
            var16 = var13.isMuted;
            var4['muted'] = var16;
            var16 = var13.subtitle;
            var4['subtitle'] = var16;
            var16 = false;
            var4['isRulesChannel'] = var16;
            var4 = var8.bind(var5)(var6, var4);
            _fun0010_ip = 115; continue _fun0010;
case 113:
            var16 = _closure1_slot20;
            var8 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = 39;
            var6 = var17[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var6['channel'] = var9;
            var6['selected'] = var15;
            var4 = var16.bind(var5)(var8, var6);
case 115:
            _fun0010_ip = 116; continue _fun0010;
case 111:
            var16 = _closure1_slot20;
            var8 = _closure1_slot0;
            var17 = _closure1_slot2;
            var6 = 17;
            var6 = var17[var6];
            var6 = var8.bind(var5)(var6);
            var8 = var6.CategoryChannel;
            var6 = {};
            var6['channel'] = var9;
            var17 = true;
            var6['withMarginTop'] = var17;
            var4 = var16.bind(var5)(var8, var6);
case 116:
            var1 = var4;
            _fun0010_ip = 97; continue _fun0010;
case 107:
            var8 = _closure1_slot20;
            var6 = _closure1_slot1;
            var16 = _closure1_slot2;
            var4 = 38;
            var4 = var16[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['channel'] = var9;
            var4['selected'] = var15;
            var1 = var8.bind(var5)(var6, var4);
            _fun0010_ip = 97; continue _fun0010;
case 105:
            var8 = _closure1_slot20;
            var6 = _closure1_slot1;
            var16 = _closure1_slot2;
            var4 = 37;
            var4 = var16[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['channel'] = var9;
            var4['selected'] = var15;
            var1 = var8.bind(var5)(var6, var4);
            _fun0010_ip = 97; continue _fun0010;
case 103:
            var8 = _closure1_slot20;
            var6 = _closure1_slot1;
            var16 = _closure1_slot2;
            var4 = 36;
            var4 = var16[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['channel'] = var9;
            var4['selected'] = var15;
            var16 = var13.subtitle;
            var4['subtitle'] = var16;
            var1 = var8.bind(var5)(var6, var4);
            _fun0010_ip = 97; continue _fun0010;
case 101:
            var8 = _closure1_slot20;
            var6 = _closure1_slot1;
            var16 = _closure1_slot2;
            var4 = 34;
            var4 = var16[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['channel'] = var9;
            var4['selected'] = var15;
            var15 = var13.isMuted;
            var4['muted'] = var15;
            var15 = var13.subtitle;
            var4['subtitle'] = var15;
            var12 = var12.rulesChannelId;
            var9 = var9.id;
            var9 = var12 === var9;
            var4['isRulesChannel'] = var9;
            var12 = var8.bind(var5)(var6, var4);
            var8 = _closure1_slot21;
            var6 = _closure1_slot22;
            var4 = {};
            var9 = new Array(2);
            var9[0] = var12;
            var12 = _closure1_slot24;
            var12 = var12.bind(var5)(var13, var14);
            var9[1] = var12;
            var4['children'] = var9;
            var1 = var8.bind(var5)(var6, var4);
case 97:
            return var1;
case 95:
            var1 = var2.getGuildActionSection;
            var4 = var1.bind(var2)();
            var1 = var4.getRow;
            var8 = var1.bind(var4)(var3);
            var4 = null;
            var6 = var4 == var8;
            var1 = null;
            if(var6) { _fun0010_ip = 117; continue _fun0010 }
case 118:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_ROLE_SUBSCRIPTIONS;
            if(!(var6 !== var8)) { _fun0010_ip = 119; continue _fun0010 }
case 120:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_HOME;
            if(!(var6 !== var8)) { _fun0010_ip = 121; continue _fun0010 }
case 122:
            var6 = _closure1_slot19;
            var6 = var6.CHANNELS_AND_ROLES;
            if(!(var6 !== var8)) { _fun0010_ip = 123; continue _fun0010 }
case 124:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_DIRECTORY;
            if(!(var6 !== var8)) { _fun0010_ip = 125; continue _fun0010 }
case 126:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            if(!(var6 !== var8)) { _fun0010_ip = 127; continue _fun0010 }
case 128:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_HUB_HEADER_OPTIONS;
            if(!(var6 !== var8)) { _fun0010_ip = 129; continue _fun0010 }
case 130:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_MOD_DASH_MEMBER_SAFETY;
            if(!(var6 !== var8)) { _fun0010_ip = 131; continue _fun0010 }
case 132:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_SCHEDULED_EVENTS;
            var1 = null;
            if(!(var6 !== var8)) { _fun0010_ip = 117; continue _fun0010 }
case 133:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_FAVORITES;
            var1 = null;
            if(!(var6 !== var8)) { _fun0010_ip = 117; continue _fun0010 }
case 134:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_CHANNEL_LIST_OPT_IN_NOTICE;
            var1 = null;
            if(!(var6 !== var8)) { _fun0010_ip = 117; continue _fun0010 }
case 135:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_SHOP;
            var1 = null;
            if(!(var6 !== var8)) { _fun0010_ip = 117; continue _fun0010 }
case 136:
            var6 = _closure1_slot19;
            var6 = var6.BROWSE_CHANNELS;
            var1 = null;
            if(!(var6 !== var8)) { _fun0010_ip = 117; continue _fun0010 }
case 137:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_PREMIUM_PROGRESS_BAR;
            var1 = null;
            if(!(var6 !== var8)) { _fun0010_ip = 117; continue _fun0010 }
case 138:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_BOOSTS;
            var1 = null;
            _fun0010_ip = 117; continue _fun0010;
case 131:
            var8 = _closure1_slot20;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 32;
            var4 = var9[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['guild'] = var10;
            var9 = _closure1_slot16;
            var9 = var9.MEMBER_SAFETY;
            var9 = var11 === var9;
            var4['selected'] = var9;
            var1 = var8.bind(var5)(var6, var4);
            _fun0010_ip = 117; continue _fun0010;
case 129:
            var8 = _closure1_slot20;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 31;
            var4 = var9[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['guild'] = var10;
            var1 = var8.bind(var5)(var6, var4);
            _fun0010_ip = 117; continue _fun0010;
case 127:
            var8 = _closure1_slot21;
            var6 = _closure1_slot3;
            var4 = {};
            var12 = _closure1_slot20;
            var9 = {};
            var13 = _closure1_slot23;
            var13 = var13.nonChannelContainer;
            var9['style'] = var13;
            var16 = _closure1_slot20;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 30;
            var13 = var15[var13];
            var13 = var14.bind(var5)(var13);
            var14 = var13.NewMemberActionsProgress;
            var13 = {};
            var17 = var10.id;
            var13['guildId'] = var17;
            var13 = var16.bind(var5)(var14, var13);
            var9['children'] = var13;
            var12 = var12.bind(var5)(var6, var9);
            var9 = new Array(2);
            var9[0] = var12;
            var14 = _closure1_slot20;
            var13 = _closure1_slot1;
            var12 = 19;
            var12 = var15[var12];
            var13 = var13.bind(var5)(var12);
            var12 = {};
            var12 = var14.bind(var5)(var13, var12);
            var9[1] = var12;
            var4['children'] = var9;
            var1 = var8.bind(var5)(var6, var4);
            _fun0010_ip = 117; continue _fun0010;
case 125:
            var8 = _closure1_slot8;
            var6 = var8.getDirectoryChannelIds;
            var4 = var10.id;
            var6 = var6.bind(var8)(var4);
            var4 = 0;
            var9 = var6[var4];
            var8 = _closure1_slot20;
            var6 = _closure1_slot1;
            var12 = _closure1_slot2;
            var4 = 29;
            var4 = var12[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var12 = var10.id;
            var4['guildId'] = var12;
            var9 = var11 === var9;
            var4['selected'] = var9;
            var1 = var8.bind(var5)(var6, var4);
            _fun0010_ip = 117; continue _fun0010;
case 123:
            var8 = _closure1_slot20;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 28;
            var4 = var9[var4];
            var4 = var6.bind(var5)(var4);
            var6 = var4.GuildRolesAndChannelsRow;
            var4 = {};
            var4['guild'] = var10;
            var9 = _closure1_slot16;
            var9 = var9.CHANNEL_BROWSER;
            var9 = var11 === var9;
            if(var9) { _fun0010_ip = 139; continue _fun0010 }
case 140:
            var12 = _closure1_slot16;
            var12 = var12.CUSTOMIZE_COMMUNITY;
            var9 = var11 === var12;
case 139:
            var4['selected'] = var9;
            var1 = var8.bind(var5)(var6, var4);
            _fun0010_ip = 117; continue _fun0010;
case 121:
            var8 = _closure1_slot20;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 27;
            var4 = var9[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['guild'] = var10;
            var9 = _closure1_slot16;
            var9 = var9.GUILD_HOME;
            var9 = var11 === var9;
            var4['selected'] = var9;
            var1 = var8.bind(var5)(var6, var4);
            _fun0010_ip = 117; continue _fun0010;
case 119:
            var8 = _closure1_slot20;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 26;
            var4 = var9[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['guild'] = var10;
            var9 = _closure1_slot16;
            var9 = var9.ROLE_SUBSCRIPTIONS;
            var9 = var11 === var9;
            var4['selected'] = var9;
            var1 = var8.bind(var5)(var6, var4);
case 117:
            return var1;
case 93:
            var1 = var2.getChannelNoticeSection;
            var2 = var1.bind(var2)();
            var1 = var2.getRow;
            var3 = var1.bind(var2)(var3);
            var4 = null;
            var2 = var4 == var3;
            var1 = null;
            if(var2) { _fun0010_ip = 141; continue _fun0010 }
case 142:
            var2 = _closure1_slot18;
            var2 = var2.SPACER;
            if(!(var2 !== var3)) { _fun0010_ip = 143; continue _fun0010 }
case 144:
            var2 = _closure1_slot18;
            var2 = var2.GUILD_PROGRESS;
            if(!(var2 !== var3)) { _fun0010_ip = 145; continue _fun0010 }
case 146:
            var2 = _closure1_slot18;
            var2 = var2.MFA_WARNING;
            if(!(var2 !== var3)) { _fun0010_ip = 147; continue _fun0010 }
case 148:
            var2 = _closure1_slot18;
            var2 = var2.LIVE_CHANNEL_NOTICE;
            var1 = null;
            if(!(var2 === var3)) { _fun0010_ip = 141; continue _fun0010 }
case 149:
            var4 = _closure1_slot20;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 13;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var6 = _closure1_slot23;
            var6 = var6.liveChannelNotice;
            var2['style'] = var6;
            var2['guild'] = var10;
            var1 = var4.bind(var5)(var3, var2);
            _fun0010_ip = 141; continue _fun0010;
case 147:
            var4 = _closure1_slot20;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = _closure1_slot23;
            var6 = var6.nonChannelContainer;
            var2['style'] = var6;
            var9 = _closure1_slot20;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 25;
            var6 = var11[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var6 = var9.bind(var5)(var8, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
            _fun0010_ip = 141; continue _fun0010;
case 145:
            var4 = _closure1_slot20;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = _closure1_slot23;
            var6 = var6.nonChannelContainer;
            var2['style'] = var6;
            var9 = _closure1_slot20;
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
            _fun0010_ip = 141; continue _fun0010;
case 143:
            var4 = _closure1_slot20;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = {};
            var7 = _closure1_slot14;
            var6['height'] = var7;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 141:
            return var1;
        }
    };
    var3['renderChannelListItem'] = var4;
    var4 = function getChannelListItemSize(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildChannels;
            var14 = var1.section;
            var7 = var1.row;
            var5 = var1.fontScale;
            var2 = var1.voiceStates;
            var3 = var1.liveChannelNoticeHeight;
            var11 = var1.listViewportHeight;
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 16;
            var1 = var1[var9];
            var6 = undefined;
            var1 = var8.bind(var6)(var1);
            var1 = var1.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var1 !== var14)) { _fun0011_ip = 138; continue _fun0011 }
case 150:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var1 = var8.bind(var6)(var1);
            var1 = var1.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var1 !== var14)) { _fun0011_ip = 151; continue _fun0011 }
case 152:
            var1 = _closure1_slot12;
            var9 = var1.bind(var6)(var5);
            var1 = var4.getChannelFromSectionRow;
            var8 = var1.bind(var4)(var14, var7);
            var13 = null;
            var10 = var13 == var8;
            var15 = 0;
            var1 = 0;
            if(var10) { _fun0011_ip = 153; continue _fun0011 }
case 154:
            var8 = var8.channel;
            var10 = var8.record;
            var17 = _closure1_slot5;
            var16 = var17.has;
            var12 = var10.type;
            var16 = var16.bind(var17)(var12);
            var12 = null;
            if(!var16) { _fun0011_ip = 155; continue _fun0011 }
case 156:
            var12 = var10.type;
case 155:
            var16 = var10.type;
            if(!(var12 !== var16)) { _fun0011_ip = 157; continue _fun0011 }
case 158:
            var17 = _closure1_slot0;
            var12 = _closure1_slot2;
            var19 = 35;
            var12 = var12[var19];
            var12 = var17.bind(var6)(var12);
            var12 = var12.ChannelTypes;
            var12 = var12.GUILD_VOICE;
            if(!(var12 !== var16)) { _fun0011_ip = 40; continue _fun0011 }
case 159:
            var17 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var19];
            var12 = var17.bind(var6)(var12);
            var12 = var12.ChannelTypes;
            var12 = var12.GUILD_STAGE_VOICE;
            if(!(var12 !== var16)) { _fun0011_ip = 40; continue _fun0011 }
case 90:
            var17 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var19];
            var12 = var17.bind(var6)(var12);
            var12 = var12.ChannelTypes;
            var12 = var12.DM;
            var1 = var9;
            if(!(var12 !== var16)) { _fun0011_ip = 153; continue _fun0011 }
case 160:
            var17 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var19];
            var12 = var17.bind(var6)(var12);
            var12 = var12.ChannelTypes;
            var12 = var12.GROUP_DM;
            var1 = var9;
            if(!(var12 !== var16)) { _fun0011_ip = 153; continue _fun0011 }
case 161:
            var12 = var4.voiceChannelsSectionNumber;
            if(!(var14 === var12)) { _fun0011_ip = 162; continue _fun0011 }
case 163:
            var12 = var10.isCategory;
            var12 = var12.bind(var10)();
            if(var12) { _fun0011_ip = 164; continue _fun0011 }
case 162:
            var14 = var4.id;
            var12 = _closure1_slot17;
            var14 = var14 !== var12;
            if(!var14) { _fun0011_ip = 165; continue _fun0011 }
case 166:
            var16 = var4.id;
            var12 = _closure1_slot15;
            var14 = var16 !== var12;
case 165:
            var12 = var9;
            if(var14) { _fun0011_ip = 167; continue _fun0011 }
case 109:
            var17 = _closure1_slot6;
            var16 = var17.has;
            var14 = var10.type;
            var14 = var16.bind(var17)(var14);
            var12 = var9;
            _fun0011_ip = 167; continue _fun0011;
case 164:
            var14 = _closure1_slot11;
            var16 = var14.bind(var6)(var5);
            var14 = _closure1_slot10;
            var12 = var16 + var14;
case 167:
            var1 = var12;
            _fun0011_ip = 153; continue _fun0011;
case 40:
            var12 = var8.subtitle;
            var13 = var13 != var12;
            var12 = 0;
            if(!var13) { _fun0011_ip = 168; continue _fun0011 }
case 169:
            var13 = _closure1_slot13;
            var12 = var13.bind(var6)(var5);
case 168:
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var14 = 40;
            var14 = var13[var14];
            var17 = var16.bind(var6)(var14);
            var14 = var17.getVoiceUserHeight;
            var18 = var14.bind(var17)(var5);
            var14 = var10.type;
            var13 = var13[var19];
            var13 = var16.bind(var6)(var13);
            var13 = var13.ChannelTypes;
            var13 = var13.GUILD_STAGE_VOICE;
            if(!(var14 !== var13)) { _fun0011_ip = 170; continue _fun0011 }
case 171:
            var16 = _closure1_slot9;
            var14 = var16.countVoiceStatesForChannel;
            var13 = var10.id;
            var14 = var14.bind(var16)(var13);
            _fun0011_ip = 172; continue _fun0011;
case 170:
            var20 = _closure1_slot4;
            var17 = var20.getParticipantCount;
            var16 = var10.id;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var13 = 41;
            var13 = var22[var13];
            var13 = var21.bind(var6)(var13);
            var13 = var13.StageChannelParticipantNamedIndex;
            var13 = var13.SPEAKER;
            var14 = var17.bind(var20)(var16, var13);
case 172:
            var17 = var10.type;
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var19];
            var13 = var16.bind(var6)(var13);
            var13 = var13.ChannelTypes;
            var16 = var13.GUILD_STAGE_VOICE;
            var13 = 0;
            if(!(var17 === var16)) { _fun0011_ip = 173; continue _fun0011 }
case 174:
            var19 = _closure1_slot4;
            var17 = var19.getParticipantCount;
            var16 = var10.id;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var10 = 41;
            var10 = var21[var10];
            var10 = var20.bind(var6)(var10);
            var10 = var10.StageChannelParticipantNamedIndex;
            var10 = var10.AUDIENCE;
            var10 = var17.bind(var19)(var16, var10);
            var10 = var10 > var15;
            var13 = 0;
            if(!var10) { _fun0011_ip = 173; continue _fun0011 }
case 175:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 42;
            var10 = var17[var10];
            var16 = var16.bind(var6)(var10);
            var10 = var16.getAudienceItemHeight;
            var13 = var10.bind(var16)(var5);
case 173:
            var10 = var9;
            if(!(var14 > var15)) { _fun0011_ip = 176; continue _fun0011 }
case 177:
            var19 = var9 + var12;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 36;
            var17 = var16[var12];
            var17 = var15.bind(var6)(var17);
            var17 = var17.VOICE_USERS_MARGIN_TOP;
            var17 = var19 + var17;
            var14 = var18 * var14;
            var14 = var17 + var14;
            var12 = var16[var12];
            var12 = var15.bind(var6)(var12);
            var12 = var12.VOICE_USERS_MARGIN_BOTTOM;
            var12 = var14 + var12;
            var10 = var12 + var13;
case 176:
            var1 = var10;
            _fun0011_ip = 153; continue _fun0011;
case 157:
            var8 = var8.threadCount;
            var8 = var8 * var9;
            var1 = var9 + var8;
case 153:
            return var1;
case 151:
            var1 = var4.getGuildActionSection;
            var8 = var1.bind(var4)();
            var1 = var8.getRow;
            var10 = var1.bind(var8)(var7);
            var1 = null;
            var9 = var1 == var10;
            var1 = 0;
            if(var9) { _fun0011_ip = 178; continue _fun0011 }
case 179:
            var9 = _closure1_slot12;
            var12 = var9.bind(var6)(var5);
            var9 = _closure1_slot19;
            var9 = var9.GUILD_ROLE_SUBSCRIPTIONS;
            var1 = var12;
            if(!(var9 !== var10)) { _fun0011_ip = 178; continue _fun0011 }
case 180:
            var9 = _closure1_slot19;
            var9 = var9.GUILD_HOME;
            var1 = var12;
            if(!(var9 !== var10)) { _fun0011_ip = 178; continue _fun0011 }
case 181:
            var9 = _closure1_slot19;
            var9 = var9.CHANNELS_AND_ROLES;
            var1 = var12;
            if(!(var9 !== var10)) { _fun0011_ip = 178; continue _fun0011 }
case 182:
            var9 = _closure1_slot19;
            var9 = var9.GUILD_DIRECTORY;
            var1 = var12;
            if(!(var9 !== var10)) { _fun0011_ip = 178; continue _fun0011 }
case 183:
            var9 = _closure1_slot19;
            var9 = var9.GUILD_MOD_DASH_MEMBER_SAFETY;
            var1 = var12;
            if(!(var9 !== var10)) { _fun0011_ip = 178; continue _fun0011 }
case 184:
            var9 = _closure1_slot19;
            var9 = var9.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            if(!(var9 !== var10)) { _fun0011_ip = 185; continue _fun0011 }
case 186:
            var9 = _closure1_slot19;
            var9 = var9.GUILD_HUB_HEADER_OPTIONS;
            var1 = var11;
            if(!(var9 !== var10)) { _fun0011_ip = 178; continue _fun0011 }
case 128:
            var9 = _closure1_slot19;
            var9 = var9.GUILD_SCHEDULED_EVENTS;
            var1 = 0;
            if(!(var9 !== var10)) { _fun0011_ip = 178; continue _fun0011 }
case 187:
            var9 = _closure1_slot19;
            var9 = var9.GUILD_FAVORITES;
            var1 = 0;
            if(!(var9 !== var10)) { _fun0011_ip = 178; continue _fun0011 }
case 188:
            var9 = _closure1_slot19;
            var9 = var9.GUILD_CHANNEL_LIST_OPT_IN_NOTICE;
            var1 = 0;
            if(!(var9 !== var10)) { _fun0011_ip = 178; continue _fun0011 }
case 189:
            var9 = _closure1_slot19;
            var9 = var9.GUILD_SHOP;
            var1 = 0;
            if(!(var9 !== var10)) { _fun0011_ip = 178; continue _fun0011 }
case 190:
            var9 = _closure1_slot19;
            var9 = var9.BROWSE_CHANNELS;
            var1 = 0;
            if(!(var9 !== var10)) { _fun0011_ip = 178; continue _fun0011 }
case 191:
            var9 = _closure1_slot19;
            var9 = var9.GUILD_PREMIUM_PROGRESS_BAR;
            var1 = 0;
            if(!(var9 !== var10)) { _fun0011_ip = 178; continue _fun0011 }
case 192:
            var9 = _closure1_slot19;
            var9 = var9.GUILD_BOOSTS;
            var1 = 0;
            _fun0011_ip = 178; continue _fun0011;
case 185:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 19;
            var8 = var10[var8];
            var8 = var9.bind(var6)(var8);
            var9 = var8.DIVIDER_HEIGHT;
            var8 = 48;
            var1 = var8 + var9;
case 178:
            return var1;
case 138:
            var1 = var4.getChannelNoticeSection;
            var4 = var1.bind(var4)();
            var1 = var4.getRow;
            var7 = var1.bind(var4)(var7);
            var1 = null;
            var4 = var1 == var7;
            var1 = 0;
            if(var4) { _fun0011_ip = 193; continue _fun0011 }
case 194:
            var4 = _closure1_slot18;
            var4 = var4.SPACER;
            if(!(var4 !== var7)) { _fun0011_ip = 195; continue _fun0011 }
case 196:
            var4 = _closure1_slot18;
            var4 = var4.GUILD_PROGRESS;
            if(!(var4 !== var7)) { _fun0011_ip = 197; continue _fun0011 }
case 198:
            var4 = _closure1_slot18;
            var4 = var4.MFA_WARNING;
            if(!(var4 !== var7)) { _fun0011_ip = 199; continue _fun0011 }
case 129:
            var4 = _closure1_slot18;
            var4 = var4.LIVE_CHANNEL_NOTICE;
            var1 = 0;
            if(!(var4 === var7)) { _fun0011_ip = 193; continue _fun0011 }
case 200:
            var1 = var3;
            _fun0011_ip = 193; continue _fun0011;
case 199:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 25;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.getScaledGuildMFAWarningHeight;
            var1 = var3.bind(var4)(var5);
            _fun0011_ip = 193; continue _fun0011;
case 197:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 24;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.getScaledGuildProgressButtonHeight;
            var1 = var3.bind(var4)(var5);
            _fun0011_ip = 193; continue _fun0011;
case 195:
            var1 = _closure1_slot14;
case 193:
            return var1;
        }
    };
    var3['getChannelListItemSize'] = var4;
    var2 = function calculateVoiceSummary(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
            if(var1) { _fun0012_ip = 152; continue _fun0012 }
case 80:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 16;
            var1 = var9[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.SECTION_INDEX_FIRST_NAMED_CATEGORY;
            if(!(var8 < var1)) { _fun0012_ip = 152; continue _fun0012 }
case 35:
            var1 = null;
            return var1;
case 152:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 43;
            var1 = var1[var9];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getSectionFooterConfig;
            var1 = var1.bind(var3)(var10, var11, var8);
            var3 = var1.canHaveVoiceSummary;
            var1 = null;
            if(var3) { _fun0012_ip = 67; continue _fun0012 }
case 201:
            return var1;
case 67:
            var3 = var10.getNamedCategoryFromSection;
            var8 = var3.bind(var10)(var8);
            if(!(var1 != var8)) { _fun0012_ip = 202; continue _fun0012 }
case 203:
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
            if(!(var4 !== var5)) { _fun0012_ip = 102; continue _fun0012 }
case 36:
            var2 = var3;
case 102:
            return var2;
case 202:
            return var1;
        }
    };
    var3['calculateVoiceSummary'] = var2;
    return var1;
})();