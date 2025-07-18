// app/modules/channel_list_v2/native/renderRedesignChannelListItem.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var9 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
                var6 = arg1;
                var3 = _closure1_slot8;
                var1 = var3.getChannel;
                var9 = var1.bind(var3)(var6);
                var1 = null;
                var3 = var1 == var9;
                if(var3) { _fun0001_ip = 128; continue _fun0001 }
 29:
                var5 = _closure1_slot21;
                var4 = _closure1_slot4;
                var3 = {};
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 28;
                var7 = var7[var2];
                var2 = undefined;
                var8 = var8.bind(var2)(var7);
                var7 = {};
                var7['channel'] = var9;
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
 128:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function calculateVoiceChannelHeaderInfo(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = var3.getCategoryFromSection;
            var1 = var3.voiceChannelsSectionNumber;
            var4 = var2.bind(var3)(var1);
            var1 = null;
            var5 = var1 == var4;
            if(var5) { _fun0002_ip = 39; continue _fun0002 }
 29:
            var1 = var4.isEmpty;
            var5 = var1.bind(var4)();
 39:
            var3 = false;
            var2 = false;
            if(var5) { _fun0002_ip = 64; continue _fun0002 }
 46:
            var4 = var4.isCollapsed;
            var1 = false;
            if(!var4) { _fun0002_ip = 59; continue _fun0002 }
 57:
            var1 = true;
 59:
            var3 = true;
            var2 = var1;
 64:
            var1 = {};
            var1['showDivider'] = var3;
            var1['isCollapsed'] = var2;
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function calculateVoiceChannelButtonInfo(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var2 = var3.getCategoryFromSection;
            var1 = arg2;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 != var2)) { _fun0003_ip = 57; continue _fun0003 }
 23:
            var1 = var2.getHiddenChannelIds;
            var1 = var1.bind(var2)();
            var1 = var1.length;
            var3 = 0;
            if(!(!(var1 > var3))) { _fun0003_ip = 73; continue _fun0003 }
 44:
            var1 = var2.isEmpty;
            var1 = var1.bind(var2)();
            if(!var1) { _fun0003_ip = 73; continue _fun0003 }
 57:
            var1 = {'render': false, 'lastShownChannelActive': false};
            return var1;
 73:
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
            var4 = _closure1_slot10;
            var2 = var4.countVoiceStatesForChannel;
            var2 = var2.bind(var4)(var5);
            var2 = var2 > var3;
            var1['lastShownChannelActive'] = var2;
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
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.THREADED_CHANNEL_TYPES;
    var _closure1_slot6 = var7;
    var4 = var4.THREAD_CHANNEL_TYPES;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.CATEGORY_MARGIN_TOP;
    var _closure1_slot11 = var7;
    var7 = var4.getScaledCategoryRowHeight;
    var _closure1_slot12 = var7;
    var7 = var4.getScaledChannelRowHeight;
    var _closure1_slot13 = var7;
    var7 = var4.getScaledChannelSubtitleHeight;
    var _closure1_slot14 = var7;
    var4 = var4.STICKY_HEADER_MARGIN_BOTTOM;
    var _closure1_slot15 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FAVORITES;
    var _closure1_slot16 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot17 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FAVORITES_RAW_GUILD_ID;
    var _closure1_slot18 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ChannelListChannelNoticeRow;
    var _closure1_slot19 = var7;
    var4 = var4.ChannelListGuildActionRow;
    var _closure1_slot20 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot21 = var7;
    var7 = var4.jsxs;
    var _closure1_slot22 = var7;
    var4 = var4.Fragment;
    var _closure1_slot23 = var4;
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
    var _closure1_slot24 = var4;
    var4 = 45;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/renderRedesignChannelListItem.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useRenderChannelListItem(arg1) {
        var2 = arg1;
        var7 = var2.recentlyActiveSectionEnabled;
        var _closure2_slot0 = var7;
        var6 = var2.guildChannels;
        var _closure2_slot1 = var6;
        var8 = var2.guild;
        var _closure2_slot2 = var8;
        var5 = var2.listRef;
        var _closure2_slot3 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = new Array(5);
        var2[0] = var8;
        var2[1] = var7;
        var7 = var6.voiceChannelsSectionNumber;
        var2[2] = var7;
        var6 = var6.id;
        var2[3] = var6;
        var2[4] = var5;
        var1 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var9 = var1.item;
                var3 = var9.kind;
                var1 = 'newPanelsListHeader';
                if(!(var1 !== var3)) { _fun0004_ip = 2085; continue _fun0004 }
 26:
                var1 = 'liveChannelNotice';
                if(!(var1 !== var3)) { _fun0004_ip = 1979; continue _fun0004 }
 37:
                var1 = 'mfaWarning';
                if(!(var1 !== var3)) { _fun0004_ip = 1909; continue _fun0004 }
 50:
                var1 = 'guildProgress';
                if(!(var1 !== var3)) { _fun0004_ip = 1825; continue _fun0004 }
 63:
                var1 = 'newMemberActions';
                if(!(var1 !== var3)) { _fun0004_ip = 1730; continue _fun0004 }
 74:
                var1 = 'showAllVoiceChannelsButton';
                if(!(var1 !== var3)) { _fun0004_ip = 1604; continue _fun0004 }
 87:
                var1 = 'sectionHeaderRecentlyVisited';
                if(!(var1 !== var3)) { _fun0004_ip = 1497; continue _fun0004 }
 100:
                var1 = 'sectionHeaderFavorites';
                if(!(var1 !== var3)) { _fun0004_ip = 1392; continue _fun0004 }
 113:
                var1 = 'sectionHeaderRecents';
                if(!(var1 !== var3)) { _fun0004_ip = 1256; continue _fun0004 }
 126:
                var1 = 'sectionHeaderCategory';
                if(!(var1 !== var3)) { _fun0004_ip = 1182; continue _fun0004 }
 139:
                var1 = 'sectionHeaderVoiceChannels';
                if(!(var1 !== var3)) { _fun0004_ip = 1091; continue _fun0004 }
 152:
                var2 = _closure1_slot20;
                var2 = var2.GUILD_HUB_HEADER_OPTIONS;
                if(!(var2 !== var3)) { _fun0004_ip = 1037; continue _fun0004 }
 172:
                var2 = _closure1_slot20;
                var2 = var2.GUILD_SCHEDULED_EVENTS;
                if(!(var2 !== var3)) { _fun0004_ip = 990; continue _fun0004 }
 189:
                var2 = _closure1_slot20;
                var2 = var2.GUILD_ROLE_SUBSCRIPTIONS;
                if(!(var2 !== var3)) { _fun0004_ip = 932; continue _fun0004 }
 206:
                var2 = _closure1_slot20;
                var2 = var2.GUILD_HOME;
                if(!(var2 !== var3)) { _fun0004_ip = 874; continue _fun0004 }
 223:
                var2 = _closure1_slot20;
                var2 = var2.CHANNELS_AND_ROLES;
                if(!(var2 !== var3)) { _fun0004_ip = 810; continue _fun0004 }
 240:
                var2 = _closure1_slot20;
                var2 = var2.GUILD_DIRECTORY;
                if(!(var2 !== var3)) { _fun0004_ip = 747; continue _fun0004 }
 257:
                var2 = 'channel';
                if(!(var2 !== var3)) { _fun0004_ip = 521; continue _fun0004 }
 268:
                var2 = 'thread';
                if(!(var2 !== var3)) { _fun0004_ip = 408; continue _fun0004 }
 279:
                var2 = 'sectionFooterSeparator';
                if(!(var2 !== var3)) { _fun0004_ip = 372; continue _fun0004 }
 289:
                var2 = 'sectionFooterVoice';
                if(!(var2 !== var3)) { _fun0004_ip = 303; continue _fun0004 }
 299:
                var2 = null;
                return var2;
 303:
                var5 = _closure1_slot21;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 20;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.RedesignVoiceUserSummary;
                var2 = {};
                var6 = _closure2_slot2;
                var6 = var6.id;
                var2['guildId'] = var6;
                var6 = var9.activeVoiceChannels;
                var2['channels'] = var6;
                var2 = var5.bind(var4)(var3, var2);
                return var2;
 372:
                var5 = _closure1_slot21;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 29;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2 = var5.bind(var4)(var3, var2);
                return var2;
 408:
                var4 = _closure1_slot8;
                var3 = var4.getChannel;
                var2 = var9.threadId;
                var7 = var3.bind(var4)(var2);
                var2 = null;
                var3 = var2 == var7;
                if(var3) { _fun0004_ip = 519; continue _fun0004 }
 437:
                var6 = _closure1_slot21;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 28;
                var3 = var5[var3];
                var5 = undefined;
                var4 = var4.bind(var5)(var3);
                var3 = {};
                var3['channel'] = var7;
                var7 = var9.threadId;
                var3['threadId'] = var7;
                var7 = var9.threadIndex;
                var3['threadIndex'] = var7;
                var7 = var9.threadCount;
                var3['threadCount'] = var7;
                var7 = var9.selected;
                var3['selected'] = var7;
                var2 = var6.bind(var5)(var4, var3);
 519:
                return var2;
 521:
                var3 = var9.channel;
                var2 = var3.isCategory;
                var2 = var2.bind(var3)();
                if(!var2) { _fun0004_ip = 564; continue _fun0004 }
 539:
                var3 = var9.section;
                var2 = _closure2_slot1;
                var2 = var2.voiceChannelsSectionNumber;
                if(!(var3 !== var2)) { _fun0004_ip = 689; continue _fun0004 }
 564:
                var4 = _closure1_slot21;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 20;
                var2 = var5[var2];
                var6 = undefined;
                var2 = var3.bind(var6)(var2);
                var3 = var2.RedesignChannelItem;
                var2 = {};
                var2['item'] = var9;
                var5 = _closure2_slot2;
                var2['guild'] = var5;
                var7 = var4.bind(var6)(var3, var2);
                var3 = var9.needsJumpAndHighlight;
                var2 = var7;
                if(!var3) { _fun0004_ip = 687; continue _fun0004 }
 631:
                var5 = _closure1_slot21;
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 15;
                var3 = var8[var3];
                var3 = var4.bind(var6)(var3);
                var4 = var3.ChannelHighlight;
                var3 = {};
                var8 = var9.channel;
                var8 = var8.id;
                var3['channelId'] = var8;
                var3['children'] = var7;
                var2 = var5.bind(var6)(var4, var3);
 687:
                return var2;
 689:
                var5 = _closure1_slot21;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 20;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.CategoryChannel;
                var2 = {};
                var6 = var9.channel;
                var2['channel'] = var6;
                var6 = true;
                var2['withMarginTop'] = var6;
                var2 = var5.bind(var4)(var3, var2);
                return var2;
 747:
                var5 = _closure1_slot21;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 27;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var6 = _closure2_slot2;
                var6 = var6.id;
                var2['guildId'] = var6;
                var6 = var9.selected;
                var2['selected'] = var6;
                var2 = var5.bind(var4)(var3, var2);
                return var2;
 810:
                var5 = _closure1_slot21;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 26;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.GuildRolesAndChannelsRow;
                var2 = {};
                var6 = _closure2_slot2;
                var2['guild'] = var6;
                var6 = var9.selected;
                var2['selected'] = var6;
                var2 = var5.bind(var4)(var3, var2);
                return var2;
 874:
                var5 = _closure1_slot21;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 25;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var6 = _closure2_slot2;
                var2['guild'] = var6;
                var6 = var9.selected;
                var2['selected'] = var6;
                var2 = var5.bind(var4)(var3, var2);
                return var2;
 932:
                var5 = _closure1_slot21;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 24;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var6 = _closure2_slot2;
                var2['guild'] = var6;
                var6 = var9.selected;
                var2['selected'] = var6;
                var2 = var5.bind(var4)(var3, var2);
                return var2;
 990:
                var5 = _closure1_slot21;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 23;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var6 = _closure2_slot2;
                var2['guild'] = var6;
                var2 = var5.bind(var4)(var3, var2);
                return var2;
 1037:
                var4 = _closure1_slot21;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 22;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot2;
                var1['guild'] = var5;
                var5 = true;
                var1['flashList'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
 1091:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 20;
                var1 = var10[var1];
                var7 = undefined;
                var3 = var8.bind(var7)(var1);
                var2 = var3.renderCategoryItem;
                var1 = {};
                var4 = 21;
                var5 = var10[var4];
                var5 = var8.bind(var7)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var10[var4];
                var4 = var8.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4.V/u9Dw;
                var4 = var5.bind(var6)(var4);
                var1['name'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
 1182:
                var4 = _closure1_slot21;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 20;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.CategoryChannel;
                var1 = {};
                var5 = var9.category;
                var5 = var5.record;
                var1['channel'] = var5;
                var5 = var9.isFirstCategory;
                var5 = !var5;
                var1['withMarginTop'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
 1256:
                var1 = _closure2_slot0;
                var5 = _closure1_slot21;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 20;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                if(var1) { _fun0004_ip = 1349; continue _fun0004 }
 1295:
                var3 = var2.SuggestedCategory;
                var1 = {};
                var7 = _closure2_slot1;
                var7 = var7.id;
                var1['guildId'] = var7;
                var7 = var9.channelIds;
                var1['channelIds'] = var7;
                var7 = var9.isFirstCategory;
                var7 = !var7;
                var1['withMarginTop'] = var7;
                var1 = var5.bind(var4)(var3, var1);
                _fun0004_ip = 1390; continue _fun0004;
 1349:
                var3 = var2.RecentlyActiveCategory;
                var2 = {};
                var6 = _closure2_slot1;
                var6 = var6.id;
                var2['guildId'] = var6;
                var6 = var9.isFirstCategory;
                var6 = !var6;
                var2['withMarginTop'] = var6;
                var1 = var5.bind(var4)(var3, var2);
 1390:
                return var1;
 1392:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 20;
                var1 = var10[var1];
                var7 = undefined;
                var3 = var8.bind(var7)(var1);
                var2 = var3.renderCategoryItem;
                var1 = {};
                var4 = 21;
                var5 = var10[var4];
                var5 = var8.bind(var7)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var10[var4];
                var4 = var8.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4.k8fFjo;
                var4 = var5.bind(var6)(var4);
                var1['name'] = var4;
                var4 = var9.isFirstCategory;
                var4 = !var4;
                var1['withMarginTop'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
 1497:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 20;
                var1 = var10[var1];
                var7 = undefined;
                var3 = var8.bind(var7)(var1);
                var2 = var3.renderCategoryItem;
                var1 = {};
                var4 = 21;
                var5 = var10[var4];
                var5 = var8.bind(var7)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var10[var4];
                var4 = var8.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4.pd7oXF;
                var4 = var5.bind(var6)(var4);
                var1['name'] = var4;
                var4 = var9.isFirstCategory;
                var4 = !var4;
                var1['withMarginTop'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
 1604:
                var4 = _closure1_slot21;
                var3 = _closure1_slot4;
                var2 = {};
                var5 = {};
                var7 = 16;
                var5['marginHorizontal'] = var7;
                var8 = var9.isLastShownChannelActive;
                var6 = 8;
                if(!var8) { _fun0004_ip = 1642; continue _fun0004 }
 1639:
                var6 = var7;
 1642:
                var5['marginTop'] = var6;
                var2['style'] = var5;
                var7 = _closure1_slot21;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 19;
                var5 = var5[var1];
                var1 = undefined;
                var6 = var6.bind(var1)(var5);
                var5 = {};
                var10 = _closure2_slot2;
                var10 = var10.id;
                var5['guildId'] = var10;
                var9 = var9.index;
                var5['index'] = var9;
                var8 = _closure2_slot3;
                var5['listRef'] = var8;
                var5 = var7.bind(var1)(var6, var5);
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
 1730:
                var4 = _closure1_slot21;
                var3 = _closure1_slot4;
                var2 = {};
                var5 = {};
                var6 = 16;
                var5['marginHorizontal'] = var6;
                var2['style'] = var5;
                var7 = _closure1_slot21;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 18;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var6 = var5.NewMemberActionsProgress;
                var5 = {};
                var8 = _closure2_slot2;
                var8 = var8.id;
                var5['guildId'] = var8;
                var5 = var7.bind(var1)(var6, var5);
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
 1825:
                var4 = _closure1_slot21;
                var3 = _closure1_slot4;
                var2 = {};
                var5 = {};
                var6 = 16;
                var5['marginHorizontal'] = var6;
                var2['style'] = var5;
                var7 = _closure1_slot21;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 17;
                var5 = var5[var1];
                var1 = undefined;
                var6 = var6.bind(var1)(var5);
                var5 = {};
                var8 = _closure2_slot2;
                var5['guild'] = var8;
                var5 = var7.bind(var1)(var6, var5);
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
 1909:
                var4 = _closure1_slot21;
                var3 = _closure1_slot4;
                var2 = {};
                var6 = {};
                var5 = 16;
                var6['marginHorizontal'] = var5;
                var2['style'] = var6;
                var7 = _closure1_slot21;
                var6 = _closure1_slot1;
                var1 = _closure1_slot2;
                var5 = var1[var5];
                var1 = undefined;
                var6 = var6.bind(var1)(var5);
                var5 = {};
                var5 = var7.bind(var1)(var6, var5);
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
 1979:
                var4 = _closure1_slot21;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 13;
                var1 = var8[var6];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = {};
                var7 = _closure1_slot0;
                var9 = var8[var6];
                var9 = var7.bind(var3)(var9);
                var9 = var9.LIVE_CHANNEL_NOTICE_MARGIN_TOP;
                var5['marginTop'] = var9;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM;
                var5['marginBottom'] = var6;
                var6 = 16;
                var5['marginHorizontal'] = var6;
                var1['style'] = var5;
                var5 = _closure2_slot2;
                var1['guild'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
 2085:
                var4 = _closure1_slot21;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 15;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.GuildSearchAndInvite;
                var1 = {};
                var5 = _closure2_slot2;
                var1['guild'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useRenderChannelListItem'] = var4;
    var4 = function getFastListRecyclerKey(arg1, arg2, arg3, arg4) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var5 = arg2;
            var8 = arg3;
            var6 = arg4;
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 30;
            var3 = var1[var9];
            var1 = undefined;
            var3 = var7.bind(var1)(var3);
            var3 = var3.FastListItemTypes;
            var3 = var3.ITEM;
            if(!(var5 !== var3)) { _fun0005_ip = 125; continue _fun0005 }
 53:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var3 = var7.bind(var1)(var3);
            var3 = var3.FastListItemTypes;
            var3 = var3.SECTION;
            if(!(var5 !== var3)) { _fun0005_ip = 88; continue _fun0005 }
 86:
            return var1;
 88:
            var9 = var2.id;
            var3 = global;
            var3 = var3.HermesInternal;
            var7 = var3.concat;
            var5 = '';
            var3 = ':SECTION:';
            var3 = var7.bind(var5)(var9, var3, var8);
            return var3;
 125:
            var3 = null;
            if(!(var3 != var6)) { _fun0005_ip = 329; continue _fun0005 }
 134:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = 31;
            var5 = var5[var7];
            var5 = var9.bind(var1)(var5);
            var5 = var5.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var5 !== var8)) { _fun0005_ip = 256; continue _fun0005 }
 164:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var5.bind(var1)(var4);
            var4 = var4.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var4 !== var8)) { _fun0005_ip = 233; continue _fun0005 }
 191:
            var4 = var2.getChannelFromSectionRow;
            var4 = var4.bind(var2)(var8, var6);
            var5 = var3 == var4;
            var7 = undefined;
            if(var5) { _fun0005_ip = 231; continue _fun0005 }
 212:
            var4 = var4.channel;
            var5 = var3 == var4;
            var7 = undefined;
            if(var5) { _fun0005_ip = 231; continue _fun0005 }
 226:
            var7 = var4.id;
 231:
            _fun0005_ip = 277; continue _fun0005;
 233:
            var4 = var2.getGuildActionSection;
            var5 = var4.bind(var2)();
            var4 = var5.getRow;
            var7 = var4.bind(var5)(var6);
            _fun0005_ip = 277; continue _fun0005;
 256:
            var4 = var2.getChannelNoticeSection;
            var5 = var4.bind(var2)();
            var4 = var5.getRow;
            var7 = var4.bind(var5)(var6);
 277:
            if(!(var3 != var7)) { _fun0005_ip = 327; continue _fun0005 }
 281:
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
 327:
            return var1;
 329:
            return var1;
        }
    };
    var3['getFastListRecyclerKey'] = var4;
    var4 = function renderChannelListSectionHeader(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var7 = arg1;
            var9 = arg2;
            var4 = arg4;
            var1 = var7.favoritesSectionNumber;
            if(!(var1 !== var9)) { _fun0006_ip = 489; continue _fun0006 }
 22:
            var1 = var7.recentsSectionNumber;
            if(!(var1 !== var9)) { _fun0006_ip = 349; continue _fun0006 }
 35:
            var1 = var7.voiceChannelsSectionNumber;
            if(!(var1 !== var9)) { _fun0006_ip = 163; continue _fun0006 }
 45:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 32;
            var1 = var5[var1];
            var6 = undefined;
            var3 = var3.bind(var6)(var1);
            var1 = var3.isNamedCategorySection;
            var3 = var1.bind(var3)(var9);
            var1 = null;
            if(var3) { _fun0006_ip = 88; continue _fun0006 }
 86:
            return var1;
 88:
            var3 = var7.getNamedCategoryFromSection;
            var8 = var3.bind(var7)(var9);
            var3 = var1 == var8;
            var1 = null;
            if(var3) { _fun0006_ip = 161; continue _fun0006 }
 108:
            var5 = _closure1_slot21;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 20;
            var2 = var10[var2];
            var2 = var3.bind(var6)(var2);
            var3 = var2.CategoryChannel;
            var2 = {};
            var8 = var8.record;
            var2['channel'] = var8;
            var2['withMarginTop'] = var4;
            var1 = var5.bind(var6)(var3, var2);
 161:
            return var1;
 163:
            var1 = _closure1_slot26;
            var5 = undefined;
            var1 = var1.bind(var5)(var7);
            var6 = var1.showDivider;
            var11 = var1.isCollapsed;
            var3 = _closure1_slot22;
            var2 = _closure1_slot4;
            var1 = {};
            var12 = null;
            if(!var6) { _fun0006_ip = 236; continue _fun0006 }
 204:
            var14 = _closure1_slot21;
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 29;
            var6 = var15[var6];
            var13 = var13.bind(var5)(var6);
            var6 = {};
            var12 = var14.bind(var5)(var13, var6);
 236:
            var6 = new Array(2);
            var6[0] = var12;
            var8 = null;
            if(!var11) { _fun0006_ip = 333; continue _fun0006 }
 249:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 20;
            var10 = var17[var10];
            var12 = var16.bind(var5)(var10);
            var11 = var12.renderCategoryItem;
            var10 = {};
            var13 = 21;
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
 333:
            var6[1] = var8;
            var1['children'] = var6;
            var1 = var3.bind(var5)(var2, var1);
            return var1;
 349:
            var6 = _closure1_slot21;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 20;
            var1 = var3[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = arg3;
            if(var1) { _fun0006_ip = 459; continue _fun0006 }
 384:
            var3 = var2.SuggestedCategory;
            var1 = {};
            var8 = var7.id;
            var1['guildId'] = var8;
            var8 = var7.getCategoryFromSection;
            var11 = var8.bind(var7)(var9);
            var9 = null;
            var10 = var9 == var11;
            var8 = undefined;
            if(var10) { _fun0006_ip = 433; continue _fun0006 }
 423:
            var10 = var11.getShownChannelAndThreadIds;
            var8 = var10.bind(var11)();
 433:
            if(!(var9 == var8)) { _fun0006_ip = 441; continue _fun0006 }
 437:
            var8 = new Array(0);
 441:
            var1['channelIds'] = var8;
            var1['withMarginTop'] = var4;
            var1 = var6.bind(var5)(var3, var1);
            _fun0006_ip = 487; continue _fun0006;
 459:
            var3 = var2.RecentlyActiveCategory;
            var2 = {};
            var7 = var7.id;
            var2['guildId'] = var7;
            var2['withMarginTop'] = var4;
            var1 = var6.bind(var5)(var3, var2);
 487:
            return var1;
 489:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 20;
            var1 = var10[var1];
            var8 = undefined;
            var3 = var9.bind(var8)(var1);
            var2 = var3.renderCategoryItem;
            var1 = {};
            var5 = 21;
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
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var5 = arg1;
            var9 = arg2;
            var2 = _closure1_slot12;
            var8 = undefined;
            var1 = arg3;
            var2 = var2.bind(var8)(var1);
            var6 = 0;
            var4 = arg4;
            var1 = 0;
            if(!var4) { _fun0007_ip = 37; continue _fun0007 }
 33:
            var1 = _closure1_slot11;
 37:
            var4 = var5.favoritesSectionNumber;
            if(!(var4 !== var9)) { _fun0007_ip = 208; continue _fun0007 }
 50:
            var4 = var5.recentsSectionNumber;
            if(!(var4 !== var9)) { _fun0007_ip = 208; continue _fun0007 }
 63:
            var4 = var5.voiceChannelsSectionNumber;
            if(!(var4 !== var9)) { _fun0007_ip = 140; continue _fun0007 }
 73:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 32;
            var4 = var10[var4];
            var7 = var7.bind(var8)(var4);
            var4 = var7.isNamedCategorySection;
            var7 = var4.bind(var7)(var9);
            var4 = 0;
            if(!var7) { _fun0007_ip = 138; continue _fun0007 }
 109:
            var7 = var5.getNamedCategoryFromSection;
            var9 = var7.bind(var5)(var9);
            var7 = null;
            var9 = var7 == var9;
            var7 = 0;
            if(var9) { _fun0007_ip = 135; continue _fun0007 }
 131:
            var7 = var2 + var1;
 135:
            var4 = var7;
 138:
            return var4;
 140:
            var4 = _closure1_slot26;
            var4 = var4.bind(var8)(var5);
            var7 = var4.showDivider;
            var5 = var4.isCollapsed;
            var4 = 0;
            if(!var7) { _fun0007_ip = 196; continue _fun0007 }
 166:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 29;
            var3 = var9[var3];
            var3 = var7.bind(var8)(var3);
            var3 = var3.DIVIDER_HEIGHT;
            var4 = var6 + var3;
 196:
            var3 = var4;
            if(!var5) { _fun0007_ip = 206; continue _fun0007 }
 202:
            var3 = var4 + var2;
 206:
            return var3;
 208:
            var1 = var2 + var1;
            return var1;
        }
    };
    var3['getChannelListSectionHeaderSize'] = var4;
    var4 = function renderChannelListSectionFooter(arg1, arg2, arg3, arg4) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var15 = arg1;
            var14 = arg2;
            var6 = arg4;
            var1 = null;
            var2 = var1 != var6;
            var8 = null;
            if(!var2) { _fun0008_ip = 77; continue _fun0008 }
 20:
            var5 = _closure1_slot21;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 20;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.RedesignVoiceUserSummary;
            var2 = {};
            var7 = var15.id;
            var2['guildId'] = var7;
            var2['channels'] = var6;
            var8 = var5.bind(var4)(var3, var2);
 77:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 31;
            var3 = var3[var6];
            var5 = undefined;
            var3 = var4.bind(var5)(var3);
            var3 = var3.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var3 !== var14)) { _fun0008_ip = 419; continue _fun0008 }
 115:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var3 !== var14)) { _fun0008_ip = 419; continue _fun0008 }
 145:
            var3 = var15.favoritesSectionNumber;
            if(!(var3 !== var14)) { _fun0008_ip = 385; continue _fun0008 }
 158:
            var3 = var15.recentsSectionNumber;
            if(!(var3 !== var14)) { _fun0008_ip = 385; continue _fun0008 }
 171:
            var3 = var15.voiceChannelsSectionNumber;
            if(!(var3 === var14)) { _fun0008_ip = 206; continue _fun0008 }
 181:
            var3 = _closure1_slot27;
            var4 = var3.bind(var5)(var15, var14);
            var3 = var4.render;
            var11 = var4.lastShownChannelActive;
            if(var3) { _fun0008_ip = 247; continue _fun0008 }
 206:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 32;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isNamedCategorySection;
            var4 = var3.bind(var4)(var14);
            var3 = null;
            if(!var4) { _fun0008_ip = 245; continue _fun0008 }
 242:
            var3 = var8;
 245:
            return var3;
 247:
            var6 = _closure1_slot22;
            var4 = _closure1_slot4;
            var3 = {};
            var7 = new Array(2);
            var7[0] = var8;
            var10 = _closure1_slot21;
            var9 = _closure1_slot4;
            var8 = {};
            var12 = _closure1_slot24;
            if(var11) { _fun0008_ip = 290; continue _fun0008 }
 282:
            var11 = var12.showAllVoiceChannelsButtonLastShownChannelInactive;
            _fun0008_ip = 296; continue _fun0008;
 290:
            var11 = var12.showAllVoiceChannelsButtonLastShownChannelActive;
 296:
            var8['style'] = var11;
            var13 = _closure1_slot21;
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 19;
            var11 = var16[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.ShowAllVoiceChannelsButtonFastList;
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
 385:
            var4 = _closure1_slot21;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 29;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 419:
            return var1;
        }
    };
    var3['renderChannelListSectionFooter'] = var4;
    var4 = function getChannelListSectionHasFooterDivider(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var3 = arg2;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = 31;
            var4 = var4[var6];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var4 = var4.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var4 !== var3)) { _fun0009_ip = 102; continue _fun0009 }
 41:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var2 !== var3)) { _fun0009_ip = 102; continue _fun0009 }
 68:
            var2 = var1.favoritesSectionNumber;
            if(!(var2 !== var3)) { _fun0009_ip = 98; continue _fun0009 }
 78:
            var2 = var1.recentsSectionNumber;
            if(!(var2 !== var3)) { _fun0009_ip = 98; continue _fun0009 }
 88:
            var1 = var1.voiceChannelsSectionNumber;
            var1 = false;
            return var1;
 98:
            var1 = true;
            return var1;
 102:
            var1 = false;
            return var1;
        }
    };
    var3['getChannelListSectionHasFooterDivider'] = var4;
    var4 = function getChannelListSectionFooterSize(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var2 = null;
            var1 = arg3;
            var2 = var2 != var1;
            var1 = 0;
            var7 = 0;
            if(!var2) { _fun0010_ip = 53; continue _fun0010 }
 22:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 33;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var7 = var2.VOICE_USER_SUMMARY_HEIGHT;
 53:
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var9 = 31;
            var3 = var3[var9];
            var4 = undefined;
            var3 = var8.bind(var4)(var3);
            var3 = var3.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var3 !== var5)) { _fun0010_ip = 321; continue _fun0010 }
 91:
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var3 = var8.bind(var4)(var3);
            var3 = var3.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var3 !== var5)) { _fun0010_ip = 321; continue _fun0010 }
 121:
            var3 = var6.favoritesSectionNumber;
            if(!(var3 !== var5)) { _fun0010_ip = 293; continue _fun0010 }
 134:
            var3 = var6.recentsSectionNumber;
            if(!(var3 !== var5)) { _fun0010_ip = 293; continue _fun0010 }
 147:
            var3 = var6.voiceChannelsSectionNumber;
            if(!(var3 !== var5)) { _fun0010_ip = 198; continue _fun0010 }
 157:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 32;
            var3 = var9[var3];
            var8 = var8.bind(var4)(var3);
            var3 = var8.isNamedCategorySection;
            var8 = var3.bind(var8)(var5);
            var3 = 0;
            if(!var8) { _fun0010_ip = 196; continue _fun0010 }
 193:
            var3 = var7;
 196:
            return var3;
 198:
            var3 = _closure1_slot27;
            var3 = var3.bind(var4)(var6, var5);
            var6 = var3.render;
            var5 = var3.lastShownChannelActive;
            var3 = var7;
            if(!var6) { _fun0010_ip = 291; continue _fun0010 }
 226:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 34;
            var6 = var9[var6];
            var6 = var8.bind(var4)(var6);
            var6 = var6.SMALL_BUTTON_HEIGHT;
            var6 = var7 + var6;
            var7 = _closure1_slot24;
            if(var5) { _fun0010_ip = 276; continue _fun0010 }
 263:
            var5 = var7.showAllVoiceChannelsButtonLastShownChannelInactive;
            var5 = var5.marginTop;
            _fun0010_ip = 287; continue _fun0010;
 276:
            var7 = var7.showAllVoiceChannelsButtonLastShownChannelActive;
            var5 = var7.marginTop;
 287:
            var3 = var6 + var5;
 291:
            return var3;
 293:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 29;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.DIVIDER_HEIGHT;
            return var2;
 321:
            return var1;
        }
    };
    var3['getChannelListSectionFooterSize'] = var4;
    var4 = function renderChannelListItem(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildChannels;
            var4 = var1.section;
            var3 = var1.row;
            var11 = var1.selectedChannelId;
            var10 = var1.guild;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 31;
            var1 = var1[var8];
            var5 = undefined;
            var1 = var6.bind(var5)(var1);
            var1 = var1.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var1 !== var4)) { _fun0011_ip = 1653; continue _fun0011 }
 69:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var6.bind(var5)(var1);
            var1 = var1.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var1 !== var4)) { _fun0011_ip = 908; continue _fun0011 }
 99:
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
            if(var13) { _fun0011_ip = 906; continue _fun0011 }
 178:
            var13 = var9.channel;
            var9 = var13.record;
            var15 = var9.id;
            var15 = var15 === var14;
            var18 = _closure1_slot6;
            var17 = var18.has;
            var16 = var9.type;
            var16 = var17.bind(var18)(var16);
            var6 = null;
            if(!var16) { _fun0011_ip = 227; continue _fun0011 }
 222:
            var6 = var9.type;
 227:
            var16 = var9.type;
            if(!(var6 !== var16)) { _fun0011_ip = 781; continue _fun0011 }
 239:
            var17 = _closure1_slot0;
            var6 = _closure1_slot2;
            var18 = 36;
            var6 = var6[var18];
            var6 = var17.bind(var5)(var6);
            var6 = var6.ChannelTypes;
            var6 = var6.GUILD_VOICE;
            if(!(var6 !== var16)) { _fun0011_ip = 724; continue _fun0011 }
 278:
            var17 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var18];
            var6 = var17.bind(var5)(var6);
            var6 = var6.ChannelTypes;
            var6 = var6.GUILD_STAGE_VOICE;
            if(!(var6 !== var16)) { _fun0011_ip = 678; continue _fun0011 }
 314:
            var17 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var18];
            var6 = var17.bind(var5)(var6);
            var6 = var6.ChannelTypes;
            var6 = var6.DM;
            if(!(var6 !== var16)) { _fun0011_ip = 632; continue _fun0011 }
 350:
            var17 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var18];
            var6 = var17.bind(var5)(var6);
            var6 = var6.ChannelTypes;
            var6 = var6.GROUP_DM;
            if(!(var6 !== var16)) { _fun0011_ip = 632; continue _fun0011 }
 386:
            var6 = var4.voiceChannelsSectionNumber;
            if(!(var8 === var6)) { _fun0011_ip = 412; continue _fun0011 }
 396:
            var6 = var9.isCategory;
            var6 = var6.bind(var9)();
            if(var6) { _fun0011_ip = 575; continue _fun0011 }
 412:
            var8 = var4.id;
            var6 = _closure1_slot18;
            if(!(var8 !== var6)) { _fun0011_ip = 438; continue _fun0011 }
 425:
            var6 = var4.id;
            var4 = _closure1_slot16;
            if(!(var6 === var4)) { _fun0011_ip = 532; continue _fun0011 }
 438:
            var8 = _closure1_slot7;
            var6 = var8.has;
            var4 = var9.type;
            var4 = var6.bind(var8)(var4);
            if(!var4) { _fun0011_ip = 532; continue _fun0011 }
 460:
            var8 = _closure1_slot21;
            var6 = _closure1_slot1;
            var16 = _closure1_slot2;
            var4 = 35;
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
            _fun0011_ip = 573; continue _fun0011;
 532:
            var16 = _closure1_slot21;
            var8 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = 40;
            var6 = var17[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var6['channel'] = var9;
            var6['selected'] = var15;
            var4 = var16.bind(var5)(var8, var6);
 573:
            _fun0011_ip = 624; continue _fun0011;
 575:
            var16 = _closure1_slot21;
            var8 = _closure1_slot0;
            var17 = _closure1_slot2;
            var6 = 20;
            var6 = var17[var6];
            var6 = var8.bind(var5)(var6);
            var8 = var6.CategoryChannel;
            var6 = {};
            var6['channel'] = var9;
            var17 = true;
            var6['withMarginTop'] = var17;
            var4 = var16.bind(var5)(var8, var6);
 624:
            var1 = var4;
            _fun0011_ip = 906; continue _fun0011;
 632:
            var8 = _closure1_slot21;
            var6 = _closure1_slot1;
            var16 = _closure1_slot2;
            var4 = 39;
            var4 = var16[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['channel'] = var9;
            var4['selected'] = var15;
            var1 = var8.bind(var5)(var6, var4);
            _fun0011_ip = 906; continue _fun0011;
 678:
            var8 = _closure1_slot21;
            var6 = _closure1_slot1;
            var16 = _closure1_slot2;
            var4 = 38;
            var4 = var16[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['channel'] = var9;
            var4['selected'] = var15;
            var1 = var8.bind(var5)(var6, var4);
            _fun0011_ip = 906; continue _fun0011;
 724:
            var8 = _closure1_slot21;
            var6 = _closure1_slot1;
            var16 = _closure1_slot2;
            var4 = 37;
            var4 = var16[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['channel'] = var9;
            var4['selected'] = var15;
            var16 = var13.subtitle;
            var4['subtitle'] = var16;
            var1 = var8.bind(var5)(var6, var4);
            _fun0011_ip = 906; continue _fun0011;
 781:
            var8 = _closure1_slot21;
            var6 = _closure1_slot1;
            var16 = _closure1_slot2;
            var4 = 35;
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
            var8 = _closure1_slot22;
            var6 = _closure1_slot23;
            var4 = {};
            var9 = new Array(2);
            var9[0] = var12;
            var12 = _closure1_slot25;
            var12 = var12.bind(var5)(var13, var14);
            var9[1] = var12;
            var4['children'] = var9;
            var1 = var8.bind(var5)(var6, var4);
 906:
            return var1;
 908:
            var1 = var2.getGuildActionSection;
            var4 = var1.bind(var2)();
            var1 = var4.getRow;
            var8 = var1.bind(var4)(var3);
            var4 = null;
            var6 = var4 == var8;
            var1 = null;
            if(var6) { _fun0011_ip = 1651; continue _fun0011 }
 943:
            var6 = _closure1_slot20;
            var6 = var6.GUILD_ROLE_SUBSCRIPTIONS;
            if(!(var6 !== var8)) { _fun0011_ip = 1596; continue _fun0011 }
 960:
            var6 = _closure1_slot20;
            var6 = var6.GUILD_HOME;
            if(!(var6 !== var8)) { _fun0011_ip = 1539; continue _fun0011 }
 977:
            var6 = _closure1_slot20;
            var6 = var6.CHANNELS_AND_ROLES;
            if(!(var6 !== var8)) { _fun0011_ip = 1459; continue _fun0011 }
 994:
            var6 = _closure1_slot20;
            var6 = var6.GUILD_DIRECTORY;
            if(!(var6 !== var8)) { _fun0011_ip = 1378; continue _fun0011 }
 1011:
            var6 = _closure1_slot20;
            var6 = var6.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            if(!(var6 !== var8)) { _fun0011_ip = 1236; continue _fun0011 }
 1028:
            var6 = _closure1_slot20;
            var6 = var6.GUILD_HUB_HEADER_OPTIONS;
            if(!(var6 !== var8)) { _fun0011_ip = 1195; continue _fun0011 }
 1045:
            var6 = _closure1_slot20;
            var6 = var6.GUILD_SCHEDULED_EVENTS;
            var1 = null;
            if(!(var6 !== var8)) { _fun0011_ip = 1651; continue _fun0011 }
 1064:
            var6 = _closure1_slot20;
            var6 = var6.GUILD_MOD_DASH_MEMBER_SAFETY;
            var1 = null;
            if(!(var6 !== var8)) { _fun0011_ip = 1651; continue _fun0011 }
 1083:
            var6 = _closure1_slot20;
            var6 = var6.GUILD_FAVORITES;
            var1 = null;
            if(!(var6 !== var8)) { _fun0011_ip = 1651; continue _fun0011 }
 1102:
            var6 = _closure1_slot20;
            var6 = var6.GUILD_CHANNEL_LIST_OPT_IN_NOTICE;
            var1 = null;
            if(!(var6 !== var8)) { _fun0011_ip = 1651; continue _fun0011 }
 1121:
            var6 = _closure1_slot20;
            var6 = var6.GUILD_SHOP;
            var1 = null;
            if(!(var6 !== var8)) { _fun0011_ip = 1651; continue _fun0011 }
 1140:
            var6 = _closure1_slot20;
            var6 = var6.BROWSE_CHANNELS;
            var1 = null;
            if(!(var6 !== var8)) { _fun0011_ip = 1651; continue _fun0011 }
 1159:
            var6 = _closure1_slot20;
            var6 = var6.GUILD_PREMIUM_PROGRESS_BAR;
            var1 = null;
            if(!(var6 !== var8)) { _fun0011_ip = 1651; continue _fun0011 }
 1178:
            var6 = _closure1_slot20;
            var6 = var6.GUILD_BOOSTS;
            var1 = null;
            _fun0011_ip = 1651; continue _fun0011;
 1195:
            var8 = _closure1_slot21;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 22;
            var4 = var9[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['guild'] = var10;
            var1 = var8.bind(var5)(var6, var4);
            _fun0011_ip = 1651; continue _fun0011;
 1236:
            var8 = _closure1_slot22;
            var6 = _closure1_slot4;
            var4 = {};
            var12 = _closure1_slot21;
            var9 = {};
            var13 = _closure1_slot24;
            var13 = var13.nonChannelContainer;
            var9['style'] = var13;
            var16 = _closure1_slot21;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 18;
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
            var14 = _closure1_slot21;
            var13 = _closure1_slot1;
            var12 = 29;
            var12 = var15[var12];
            var13 = var13.bind(var5)(var12);
            var12 = {};
            var12 = var14.bind(var5)(var13, var12);
            var9[1] = var12;
            var4['children'] = var9;
            var1 = var8.bind(var5)(var6, var4);
            _fun0011_ip = 1651; continue _fun0011;
 1378:
            var8 = _closure1_slot9;
            var6 = var8.getDirectoryChannelIds;
            var4 = var10.id;
            var6 = var6.bind(var8)(var4);
            var4 = 0;
            var9 = var6[var4];
            var8 = _closure1_slot21;
            var6 = _closure1_slot1;
            var12 = _closure1_slot2;
            var4 = 27;
            var4 = var12[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var12 = var10.id;
            var4['guildId'] = var12;
            var9 = var11 === var9;
            var4['selected'] = var9;
            var1 = var8.bind(var5)(var6, var4);
            _fun0011_ip = 1651; continue _fun0011;
 1459:
            var8 = _closure1_slot21;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 26;
            var4 = var9[var4];
            var4 = var6.bind(var5)(var4);
            var6 = var4.GuildRolesAndChannelsRow;
            var4 = {};
            var4['guild'] = var10;
            var9 = _closure1_slot17;
            var9 = var9.CHANNEL_BROWSER;
            var9 = var11 === var9;
            if(var9) { _fun0011_ip = 1526; continue _fun0011 }
 1512:
            var12 = _closure1_slot17;
            var12 = var12.CUSTOMIZE_COMMUNITY;
            var9 = var11 === var12;
 1526:
            var4['selected'] = var9;
            var1 = var8.bind(var5)(var6, var4);
            _fun0011_ip = 1651; continue _fun0011;
 1539:
            var8 = _closure1_slot21;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 25;
            var4 = var9[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['guild'] = var10;
            var9 = _closure1_slot17;
            var9 = var9.GUILD_HOME;
            var9 = var11 === var9;
            var4['selected'] = var9;
            var1 = var8.bind(var5)(var6, var4);
            _fun0011_ip = 1651; continue _fun0011;
 1596:
            var8 = _closure1_slot21;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 24;
            var4 = var9[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['guild'] = var10;
            var9 = _closure1_slot17;
            var9 = var9.ROLE_SUBSCRIPTIONS;
            var9 = var11 === var9;
            var4['selected'] = var9;
            var1 = var8.bind(var5)(var6, var4);
 1651:
            return var1;
 1653:
            var1 = var2.getChannelNoticeSection;
            var2 = var1.bind(var2)();
            var1 = var2.getRow;
            var3 = var1.bind(var2)(var3);
            var4 = null;
            var2 = var4 == var3;
            var1 = null;
            if(var2) { _fun0011_ip = 1980; continue _fun0011 }
 1688:
            var2 = _closure1_slot19;
            var2 = var2.SPACER;
            if(!(var2 !== var3)) { _fun0011_ip = 1950; continue _fun0011 }
 1705:
            var2 = _closure1_slot19;
            var2 = var2.GUILD_PROGRESS;
            if(!(var2 !== var3)) { _fun0011_ip = 1878; continue _fun0011 }
 1722:
            var2 = _closure1_slot19;
            var2 = var2.MFA_WARNING;
            if(!(var2 !== var3)) { _fun0011_ip = 1810; continue _fun0011 }
 1736:
            var2 = _closure1_slot19;
            var2 = var2.LIVE_CHANNEL_NOTICE;
            var1 = null;
            if(!(var2 === var3)) { _fun0011_ip = 1980; continue _fun0011 }
 1755:
            var4 = _closure1_slot21;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 13;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var6 = _closure1_slot24;
            var6 = var6.liveChannelNotice;
            var2['style'] = var6;
            var2['guild'] = var10;
            var1 = var4.bind(var5)(var3, var2);
            _fun0011_ip = 1980; continue _fun0011;
 1810:
            var4 = _closure1_slot21;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = _closure1_slot24;
            var6 = var6.nonChannelContainer;
            var2['style'] = var6;
            var9 = _closure1_slot21;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 16;
            var6 = var11[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var6 = var9.bind(var5)(var8, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
            _fun0011_ip = 1980; continue _fun0011;
 1878:
            var4 = _closure1_slot21;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = _closure1_slot24;
            var6 = var6.nonChannelContainer;
            var2['style'] = var6;
            var9 = _closure1_slot21;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 17;
            var6 = var11[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var6['guild'] = var10;
            var6 = var9.bind(var5)(var8, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
            _fun0011_ip = 1980; continue _fun0011;
 1950:
            var4 = _closure1_slot21;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = {};
            var7 = _closure1_slot15;
            var6['height'] = var7;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1980:
            return var1;
        }
    };
    var3['renderChannelListItem'] = var4;
    var4 = function getChannelListItemSize(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
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
            var9 = 31;
            var1 = var1[var9];
            var6 = undefined;
            var1 = var8.bind(var6)(var1);
            var1 = var1.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var1 !== var14)) { _fun0012_ip = 1175; continue _fun0012 }
 82:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var1 = var8.bind(var6)(var1);
            var1 = var1.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var1 !== var14)) { _fun0012_ip = 847; continue _fun0012 }
 112:
            var1 = _closure1_slot13;
            var9 = var1.bind(var6)(var5);
            var1 = var4.getChannelFromSectionRow;
            var8 = var1.bind(var4)(var14, var7);
            var13 = null;
            var10 = var13 == var8;
            var15 = 0;
            var1 = 0;
            if(var10) { _fun0012_ip = 845; continue _fun0012 }
 149:
            var8 = var8.channel;
            var10 = var8.record;
            var17 = _closure1_slot6;
            var16 = var17.has;
            var12 = var10.type;
            var16 = var16.bind(var17)(var12);
            var12 = null;
            if(!var16) { _fun0012_ip = 189; continue _fun0012 }
 184:
            var12 = var10.type;
 189:
            var16 = var10.type;
            if(!(var12 !== var16)) { _fun0012_ip = 831; continue _fun0012 }
 201:
            var17 = _closure1_slot0;
            var12 = _closure1_slot2;
            var19 = 36;
            var12 = var12[var19];
            var12 = var17.bind(var6)(var12);
            var12 = var12.ChannelTypes;
            var12 = var12.GUILD_VOICE;
            if(!(var12 !== var16)) { _fun0012_ip = 461; continue _fun0012 }
 240:
            var17 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var19];
            var12 = var17.bind(var6)(var12);
            var12 = var12.ChannelTypes;
            var12 = var12.GUILD_STAGE_VOICE;
            if(!(var12 !== var16)) { _fun0012_ip = 461; continue _fun0012 }
 276:
            var17 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var19];
            var12 = var17.bind(var6)(var12);
            var12 = var12.ChannelTypes;
            var12 = var12.DM;
            var1 = var9;
            if(!(var12 !== var16)) { _fun0012_ip = 845; continue _fun0012 }
 315:
            var17 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var19];
            var12 = var17.bind(var6)(var12);
            var12 = var12.ChannelTypes;
            var12 = var12.GROUP_DM;
            var1 = var9;
            if(!(var12 !== var16)) { _fun0012_ip = 845; continue _fun0012 }
 354:
            var12 = var4.voiceChannelsSectionNumber;
            if(!(var14 === var12)) { _fun0012_ip = 377; continue _fun0012 }
 364:
            var12 = var10.isCategory;
            var12 = var12.bind(var10)();
            if(var12) { _fun0012_ip = 436; continue _fun0012 }
 377:
            var14 = var4.id;
            var12 = _closure1_slot18;
            var14 = var14 !== var12;
            if(!var14) { _fun0012_ip = 406; continue _fun0012 }
 393:
            var16 = var4.id;
            var12 = _closure1_slot16;
            var14 = var16 !== var12;
 406:
            var12 = var9;
            if(var14) { _fun0012_ip = 453; continue _fun0012 }
 412:
            var17 = _closure1_slot7;
            var16 = var17.has;
            var14 = var10.type;
            var14 = var16.bind(var17)(var14);
            var12 = var9;
            _fun0012_ip = 453; continue _fun0012;
 436:
            var14 = _closure1_slot12;
            var16 = var14.bind(var6)(var5);
            var14 = _closure1_slot11;
            var12 = var16 + var14;
 453:
            var1 = var12;
            _fun0012_ip = 845; continue _fun0012;
 461:
            var12 = var8.subtitle;
            var13 = var13 != var12;
            var12 = 0;
            if(!var13) { _fun0012_ip = 485; continue _fun0012 }
 476:
            var13 = _closure1_slot14;
            var12 = var13.bind(var6)(var5);
 485:
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var14 = 41;
            var14 = var13[var14];
            var17 = var16.bind(var6)(var14);
            var14 = var17.getVoiceUserHeight;
            var18 = var14.bind(var17)(var5);
            var14 = var10.type;
            var13 = var13[var19];
            var13 = var16.bind(var6)(var13);
            var13 = var13.ChannelTypes;
            var13 = var13.GUILD_STAGE_VOICE;
            if(!(var14 !== var13)) { _fun0012_ip = 568; continue _fun0012 }
 546:
            var16 = _closure1_slot10;
            var14 = var16.countVoiceStatesForChannel;
            var13 = var10.id;
            var14 = var14.bind(var16)(var13);
            _fun0012_ip = 621; continue _fun0012;
 568:
            var20 = _closure1_slot5;
            var17 = var20.getParticipantCount;
            var16 = var10.id;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var13 = 42;
            var13 = var22[var13];
            var13 = var21.bind(var6)(var13);
            var13 = var13.StageChannelParticipantNamedIndex;
            var13 = var13.SPEAKER;
            var14 = var17.bind(var20)(var16, var13);
 621:
            var17 = var10.type;
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var19];
            var13 = var16.bind(var6)(var13);
            var13 = var13.ChannelTypes;
            var16 = var13.GUILD_STAGE_VOICE;
            var13 = 0;
            if(!(var17 === var16)) { _fun0012_ip = 754; continue _fun0012 }
 661:
            var19 = _closure1_slot5;
            var17 = var19.getParticipantCount;
            var16 = var10.id;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var10 = 42;
            var10 = var21[var10];
            var10 = var20.bind(var6)(var10);
            var10 = var10.StageChannelParticipantNamedIndex;
            var10 = var10.AUDIENCE;
            var10 = var17.bind(var19)(var16, var10);
            var10 = var10 > var15;
            var13 = 0;
            if(!var10) { _fun0012_ip = 754; continue _fun0012 }
 723:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 43;
            var10 = var17[var10];
            var16 = var16.bind(var6)(var10);
            var10 = var16.getAudienceItemHeight;
            var13 = var10.bind(var16)(var5);
 754:
            var10 = var9;
            if(!(var14 > var15)) { _fun0012_ip = 826; continue _fun0012 }
 761:
            var19 = var9 + var12;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 37;
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
 826:
            var1 = var10;
            _fun0012_ip = 845; continue _fun0012;
 831:
            var8 = var8.threadCount;
            var8 = var8 * var9;
            var1 = var9 + var8;
 845:
            return var1;
 847:
            var1 = var4.getGuildActionSection;
            var8 = var1.bind(var4)();
            var1 = var8.getRow;
            var10 = var1.bind(var8)(var7);
            var1 = null;
            var9 = var1 == var10;
            var1 = 0;
            if(var9) { _fun0012_ip = 1173; continue _fun0012 }
 882:
            var9 = _closure1_slot13;
            var12 = var9.bind(var6)(var5);
            var9 = _closure1_slot20;
            var9 = var9.GUILD_ROLE_SUBSCRIPTIONS;
            var1 = var12;
            if(!(var9 !== var10)) { _fun0012_ip = 1173; continue _fun0012 }
 911:
            var9 = _closure1_slot20;
            var9 = var9.GUILD_HOME;
            var1 = var12;
            if(!(var9 !== var10)) { _fun0012_ip = 1173; continue _fun0012 }
 931:
            var9 = _closure1_slot20;
            var9 = var9.CHANNELS_AND_ROLES;
            var1 = var12;
            if(!(var9 !== var10)) { _fun0012_ip = 1173; continue _fun0012 }
 951:
            var9 = _closure1_slot20;
            var9 = var9.GUILD_DIRECTORY;
            var1 = var12;
            if(!(var9 !== var10)) { _fun0012_ip = 1173; continue _fun0012 }
 971:
            var9 = _closure1_slot20;
            var9 = var9.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            if(!(var9 !== var10)) { _fun0012_ip = 1140; continue _fun0012 }
 988:
            var9 = _closure1_slot20;
            var9 = var9.GUILD_HUB_HEADER_OPTIONS;
            var1 = var11;
            if(!(var9 !== var10)) { _fun0012_ip = 1173; continue _fun0012 }
 1008:
            var9 = _closure1_slot20;
            var9 = var9.GUILD_SCHEDULED_EVENTS;
            var1 = 0;
            if(!(var9 !== var10)) { _fun0012_ip = 1173; continue _fun0012 }
 1027:
            var9 = _closure1_slot20;
            var9 = var9.GUILD_MOD_DASH_MEMBER_SAFETY;
            var1 = 0;
            if(!(var9 !== var10)) { _fun0012_ip = 1173; continue _fun0012 }
 1046:
            var9 = _closure1_slot20;
            var9 = var9.GUILD_FAVORITES;
            var1 = 0;
            if(!(var9 !== var10)) { _fun0012_ip = 1173; continue _fun0012 }
 1062:
            var9 = _closure1_slot20;
            var9 = var9.GUILD_CHANNEL_LIST_OPT_IN_NOTICE;
            var1 = 0;
            if(!(var9 !== var10)) { _fun0012_ip = 1173; continue _fun0012 }
 1078:
            var9 = _closure1_slot20;
            var9 = var9.GUILD_SHOP;
            var1 = 0;
            if(!(var9 !== var10)) { _fun0012_ip = 1173; continue _fun0012 }
 1094:
            var9 = _closure1_slot20;
            var9 = var9.BROWSE_CHANNELS;
            var1 = 0;
            if(!(var9 !== var10)) { _fun0012_ip = 1173; continue _fun0012 }
 1110:
            var9 = _closure1_slot20;
            var9 = var9.GUILD_PREMIUM_PROGRESS_BAR;
            var1 = 0;
            if(!(var9 !== var10)) { _fun0012_ip = 1173; continue _fun0012 }
 1126:
            var9 = _closure1_slot20;
            var9 = var9.GUILD_BOOSTS;
            var1 = 0;
            _fun0012_ip = 1173; continue _fun0012;
 1140:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 29;
            var8 = var10[var8];
            var8 = var9.bind(var6)(var8);
            var9 = var8.DIVIDER_HEIGHT;
            var8 = 48;
            var1 = var8 + var9;
 1173:
            return var1;
 1175:
            var1 = var4.getChannelNoticeSection;
            var4 = var1.bind(var4)();
            var1 = var4.getRow;
            var7 = var1.bind(var4)(var7);
            var1 = null;
            var4 = var1 == var7;
            var1 = 0;
            if(var4) { _fun0012_ip = 1343; continue _fun0012 }
 1210:
            var4 = _closure1_slot19;
            var4 = var4.SPACER;
            if(!(var4 !== var7)) { _fun0012_ip = 1339; continue _fun0012 }
 1224:
            var4 = _closure1_slot19;
            var4 = var4.GUILD_PROGRESS;
            if(!(var4 !== var7)) { _fun0012_ip = 1306; continue _fun0012 }
 1238:
            var4 = _closure1_slot19;
            var4 = var4.MFA_WARNING;
            if(!(var4 !== var7)) { _fun0012_ip = 1273; continue _fun0012 }
 1252:
            var4 = _closure1_slot19;
            var4 = var4.LIVE_CHANNEL_NOTICE;
            var1 = 0;
            if(!(var4 === var7)) { _fun0012_ip = 1343; continue _fun0012 }
 1268:
            var1 = var3;
            _fun0012_ip = 1343; continue _fun0012;
 1273:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 16;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.getScaledGuildMFAWarningHeight;
            var1 = var3.bind(var4)(var5);
            _fun0012_ip = 1343; continue _fun0012;
 1306:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 17;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.getScaledGuildProgressButtonHeight;
            var1 = var3.bind(var4)(var5);
            _fun0012_ip = 1343; continue _fun0012;
 1339:
            var1 = _closure1_slot15;
 1343:
            return var1;
        }
    };
    var3['getChannelListItemSize'] = var4;
    var2 = function calculateVoiceSummary(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var10 = var1.guildChannels;
            var8 = var1.section;
            var11 = var1.optInChannelsEnabled;
            var5 = var1.voiceStates;
            var7 = var1.selectedChannelId;
            var6 = var1.selectedVoiceChannelId;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 32;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isVoiceChannelsSection;
            var1 = var1.bind(var3)(var8, var10);
            if(var1) { _fun0013_ip = 112; continue _fun0013 }
 78:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 31;
            var1 = var9[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.SECTION_INDEX_FIRST_NAMED_CATEGORY;
            if(!(var8 < var1)) { _fun0013_ip = 112; continue _fun0013 }
 108:
            var1 = null;
            return var1;
 112:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 44;
            var1 = var1[var9];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getSectionFooterConfig;
            var1 = var1.bind(var3)(var10, var11, var8);
            var3 = var1.canHaveVoiceSummary;
            var1 = null;
            if(var3) { _fun0013_ip = 158; continue _fun0013 }
 156:
            return var1;
 158:
            var3 = var10.getNamedCategoryFromSection;
            var8 = var3.bind(var10)(var8);
            if(!(var1 != var8)) { _fun0013_ip = 240; continue _fun0013 }
 173:
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
            if(!(var4 !== var5)) { _fun0013_ip = 238; continue _fun0013 }
 235:
            var2 = var3;
 238:
            return var2;
 240:
            return var1;
        }
    };
    var3['calculateVoiceSummary'] = var2;
    return var1;
})();