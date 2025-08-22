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
 0:
                var6 = arg1;
                var3 = _closure1_slot7;
                var1 = var3.getChannel;
                var3 = var1.bind(var3)(var6);
                var1 = null;
                var3 = var1 == var3;
                if(var3) { _fun0001_ip = 124; continue _fun0001 }
 29:
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
 124:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot24 = var1;
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
    var _closure1_slot25 = var1;
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
 0:
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
            if(!(var5 !== var3)) { _fun0004_ip = 125; continue _fun0004 }
 53:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var3 = var7.bind(var1)(var3);
            var3 = var3.FastListItemTypes;
            var3 = var3.SECTION;
            if(!(var5 !== var3)) { _fun0004_ip = 88; continue _fun0004 }
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
            if(!(var3 != var6)) { _fun0004_ip = 329; continue _fun0004 }
 134:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = 16;
            var5 = var5[var7];
            var5 = var9.bind(var1)(var5);
            var5 = var5.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var5 !== var8)) { _fun0004_ip = 256; continue _fun0004 }
 164:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var5.bind(var1)(var4);
            var4 = var4.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var4 !== var8)) { _fun0004_ip = 233; continue _fun0004 }
 191:
            var4 = var2.getChannelFromSectionRow;
            var4 = var4.bind(var2)(var8, var6);
            var5 = var3 == var4;
            var7 = undefined;
            if(var5) { _fun0004_ip = 231; continue _fun0004 }
 212:
            var4 = var4.channel;
            var5 = var3 == var4;
            var7 = undefined;
            if(var5) { _fun0004_ip = 231; continue _fun0004 }
 226:
            var7 = var4.id;
 231:
            _fun0004_ip = 277; continue _fun0004;
 233:
            var4 = var2.getGuildActionSection;
            var5 = var4.bind(var2)();
            var4 = var5.getRow;
            var7 = var4.bind(var5)(var6);
            _fun0004_ip = 277; continue _fun0004;
 256:
            var4 = var2.getChannelNoticeSection;
            var5 = var4.bind(var2)();
            var4 = var5.getRow;
            var7 = var4.bind(var5)(var6);
 277:
            if(!(var3 != var7)) { _fun0004_ip = 327; continue _fun0004 }
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
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var7 = arg1;
            var9 = arg2;
            var4 = arg4;
            var1 = var7.favoritesSectionNumber;
            if(!(var1 !== var9)) { _fun0005_ip = 491; continue _fun0005 }
 22:
            var1 = var7.recentsSectionNumber;
            if(!(var1 !== var9)) { _fun0005_ip = 351; continue _fun0005 }
 35:
            var1 = var7.voiceChannelsSectionNumber;
            if(!(var1 !== var9)) { _fun0005_ip = 163; continue _fun0005 }
 45:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 20;
            var1 = var5[var1];
            var6 = undefined;
            var3 = var3.bind(var6)(var1);
            var1 = var3.isNamedCategorySection;
            var3 = var1.bind(var3)(var9);
            var1 = null;
            if(var3) { _fun0005_ip = 88; continue _fun0005 }
 86:
            return var1;
 88:
            var3 = var7.getNamedCategoryFromSection;
            var8 = var3.bind(var7)(var9);
            var3 = var1 == var8;
            var1 = null;
            if(var3) { _fun0005_ip = 161; continue _fun0005 }
 108:
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
 161:
            return var1;
 163:
            var1 = _closure1_slot25;
            var5 = undefined;
            var1 = var1.bind(var5)(var7);
            var6 = var1.showDivider;
            var11 = var1.isCollapsed;
            var3 = _closure1_slot21;
            var2 = _closure1_slot3;
            var1 = {};
            var12 = null;
            if(!var6) { _fun0005_ip = 236; continue _fun0005 }
 204:
            var14 = _closure1_slot20;
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 19;
            var6 = var15[var6];
            var13 = var13.bind(var5)(var6);
            var6 = {};
            var12 = var14.bind(var5)(var13, var6);
 236:
            var6 = new Array(2);
            var6[0] = var12;
            var8 = null;
            if(!var11) { _fun0005_ip = 335; continue _fun0005 }
 249:
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
 335:
            var6[1] = var8;
            var1['children'] = var6;
            var1 = var3.bind(var5)(var2, var1);
            return var1;
 351:
            var6 = _closure1_slot20;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 17;
            var1 = var3[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = arg3;
            if(var1) { _fun0005_ip = 461; continue _fun0005 }
 386:
            var3 = var2.SuggestedCategory;
            var1 = {};
            var8 = var7.id;
            var1['guildId'] = var8;
            var8 = var7.getCategoryFromSection;
            var11 = var8.bind(var7)(var9);
            var9 = null;
            var10 = var9 == var11;
            var8 = undefined;
            if(var10) { _fun0005_ip = 435; continue _fun0005 }
 425:
            var10 = var11.getShownChannelAndThreadIds;
            var8 = var10.bind(var11)();
 435:
            if(!(var9 == var8)) { _fun0005_ip = 443; continue _fun0005 }
 439:
            var8 = new Array(0);
 443:
            var1['channelIds'] = var8;
            var1['withMarginTop'] = var4;
            var1 = var6.bind(var5)(var3, var1);
            _fun0005_ip = 489; continue _fun0005;
 461:
            var3 = var2.RecentlyActiveCategory;
            var2 = {};
            var7 = var7.id;
            var2['guildId'] = var7;
            var2['withMarginTop'] = var4;
            var1 = var6.bind(var5)(var3, var2);
 489:
            return var1;
 491:
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
 0:
            var5 = arg1;
            var9 = arg2;
            var2 = _closure1_slot11;
            var8 = undefined;
            var1 = arg3;
            var2 = var2.bind(var8)(var1);
            var6 = 0;
            var4 = arg4;
            var1 = 0;
            if(!var4) { _fun0006_ip = 37; continue _fun0006 }
 33:
            var1 = _closure1_slot10;
 37:
            var4 = var5.favoritesSectionNumber;
            if(!(var4 !== var9)) { _fun0006_ip = 208; continue _fun0006 }
 50:
            var4 = var5.recentsSectionNumber;
            if(!(var4 !== var9)) { _fun0006_ip = 208; continue _fun0006 }
 63:
            var4 = var5.voiceChannelsSectionNumber;
            if(!(var4 !== var9)) { _fun0006_ip = 140; continue _fun0006 }
 73:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 20;
            var4 = var10[var4];
            var7 = var7.bind(var8)(var4);
            var4 = var7.isNamedCategorySection;
            var7 = var4.bind(var7)(var9);
            var4 = 0;
            if(!var7) { _fun0006_ip = 138; continue _fun0006 }
 109:
            var7 = var5.getNamedCategoryFromSection;
            var9 = var7.bind(var5)(var9);
            var7 = null;
            var9 = var7 == var9;
            var7 = 0;
            if(var9) { _fun0006_ip = 135; continue _fun0006 }
 131:
            var7 = var2 + var1;
 135:
            var4 = var7;
 138:
            return var4;
 140:
            var4 = _closure1_slot25;
            var4 = var4.bind(var8)(var5);
            var7 = var4.showDivider;
            var5 = var4.isCollapsed;
            var4 = 0;
            if(!var7) { _fun0006_ip = 196; continue _fun0006 }
 166:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 19;
            var3 = var9[var3];
            var3 = var7.bind(var8)(var3);
            var3 = var3.DIVIDER_HEIGHT;
            var4 = var6 + var3;
 196:
            var3 = var4;
            if(!var5) { _fun0006_ip = 206; continue _fun0006 }
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
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var15 = arg1;
            var14 = arg2;
            var6 = arg4;
            var1 = null;
            var2 = var1 != var6;
            var8 = null;
            if(!var2) { _fun0007_ip = 77; continue _fun0007 }
 20:
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
 77:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 16;
            var3 = var3[var6];
            var5 = undefined;
            var3 = var4.bind(var5)(var3);
            var3 = var3.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var3 !== var14)) { _fun0007_ip = 413; continue _fun0007 }
 115:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var3 !== var14)) { _fun0007_ip = 413; continue _fun0007 }
 145:
            var3 = var15.favoritesSectionNumber;
            if(!(var3 !== var14)) { _fun0007_ip = 379; continue _fun0007 }
 158:
            var3 = var15.recentsSectionNumber;
            if(!(var3 !== var14)) { _fun0007_ip = 379; continue _fun0007 }
 171:
            var3 = var15.voiceChannelsSectionNumber;
            if(!(var3 === var14)) { _fun0007_ip = 206; continue _fun0007 }
 181:
            var3 = _closure1_slot26;
            var4 = var3.bind(var5)(var15, var14);
            var3 = var4.render;
            var11 = var4.lastShownChannelActive;
            if(var3) { _fun0007_ip = 247; continue _fun0007 }
 206:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 20;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isNamedCategorySection;
            var4 = var3.bind(var4)(var14);
            var3 = null;
            if(!var4) { _fun0007_ip = 245; continue _fun0007 }
 242:
            var3 = var8;
 245:
            return var3;
 247:
            var6 = _closure1_slot21;
            var4 = _closure1_slot3;
            var3 = {};
            var7 = new Array(2);
            var7[0] = var8;
            var10 = _closure1_slot20;
            var9 = _closure1_slot3;
            var8 = {};
            var12 = _closure1_slot23;
            if(var11) { _fun0007_ip = 290; continue _fun0007 }
 282:
            var11 = var12.showAllVoiceChannelsButtonLastShownChannelInactive;
            _fun0007_ip = 296; continue _fun0007;
 290:
            var11 = var12.showAllVoiceChannelsButtonLastShownChannelActive;
 296:
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
 379:
            var4 = _closure1_slot20;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 19;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 413:
            return var1;
        }
    };
    var3['renderChannelListSectionFooter'] = var4;
    var4 = function getChannelListSectionHasFooterDivider(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var3 = arg2;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = 16;
            var4 = var4[var6];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var4 = var4.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var4 !== var3)) { _fun0008_ip = 102; continue _fun0008 }
 41:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var2 !== var3)) { _fun0008_ip = 102; continue _fun0008 }
 68:
            var2 = var1.favoritesSectionNumber;
            if(!(var2 !== var3)) { _fun0008_ip = 98; continue _fun0008 }
 78:
            var2 = var1.recentsSectionNumber;
            if(!(var2 !== var3)) { _fun0008_ip = 98; continue _fun0008 }
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
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var2 = null;
            var1 = arg3;
            var2 = var2 != var1;
            var1 = 0;
            var7 = 0;
            if(!var2) { _fun0009_ip = 53; continue _fun0009 }
 22:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 22;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var7 = var2.VOICE_USER_SUMMARY_HEIGHT;
 53:
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var9 = 16;
            var3 = var3[var9];
            var4 = undefined;
            var3 = var8.bind(var4)(var3);
            var3 = var3.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var3 !== var5)) { _fun0009_ip = 321; continue _fun0009 }
 91:
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var3 = var8.bind(var4)(var3);
            var3 = var3.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var3 !== var5)) { _fun0009_ip = 321; continue _fun0009 }
 121:
            var3 = var6.favoritesSectionNumber;
            if(!(var3 !== var5)) { _fun0009_ip = 293; continue _fun0009 }
 134:
            var3 = var6.recentsSectionNumber;
            if(!(var3 !== var5)) { _fun0009_ip = 293; continue _fun0009 }
 147:
            var3 = var6.voiceChannelsSectionNumber;
            if(!(var3 !== var5)) { _fun0009_ip = 198; continue _fun0009 }
 157:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 20;
            var3 = var9[var3];
            var8 = var8.bind(var4)(var3);
            var3 = var8.isNamedCategorySection;
            var8 = var3.bind(var8)(var5);
            var3 = 0;
            if(!var8) { _fun0009_ip = 196; continue _fun0009 }
 193:
            var3 = var7;
 196:
            return var3;
 198:
            var3 = _closure1_slot26;
            var3 = var3.bind(var4)(var6, var5);
            var6 = var3.render;
            var5 = var3.lastShownChannelActive;
            var3 = var7;
            if(!var6) { _fun0009_ip = 291; continue _fun0009 }
 226:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 23;
            var6 = var9[var6];
            var6 = var8.bind(var4)(var6);
            var6 = var6.SMALL_BUTTON_HEIGHT;
            var6 = var7 + var6;
            var7 = _closure1_slot23;
            if(var5) { _fun0009_ip = 276; continue _fun0009 }
 263:
            var5 = var7.showAllVoiceChannelsButtonLastShownChannelInactive;
            var5 = var5.marginTop;
            _fun0009_ip = 287; continue _fun0009;
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
            var2 = 19;
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
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
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
            if(!(var1 !== var4)) { _fun0010_ip = 1711; continue _fun0010 }
 69:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var6.bind(var5)(var1);
            var1 = var1.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var1 !== var4)) { _fun0010_ip = 908; continue _fun0010 }
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
            if(var13) { _fun0010_ip = 906; continue _fun0010 }
 178:
            var13 = var9.channel;
            var9 = var13.record;
            var15 = var9.id;
            var15 = var15 === var14;
            var18 = _closure1_slot5;
            var17 = var18.has;
            var16 = var9.type;
            var16 = var17.bind(var18)(var16);
            var6 = null;
            if(!var16) { _fun0010_ip = 227; continue _fun0010 }
 222:
            var6 = var9.type;
 227:
            var16 = var9.type;
            if(!(var6 !== var16)) { _fun0010_ip = 781; continue _fun0010 }
 239:
            var17 = _closure1_slot0;
            var6 = _closure1_slot2;
            var18 = 35;
            var6 = var6[var18];
            var6 = var17.bind(var5)(var6);
            var6 = var6.ChannelTypes;
            var6 = var6.GUILD_VOICE;
            if(!(var6 !== var16)) { _fun0010_ip = 724; continue _fun0010 }
 278:
            var17 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var18];
            var6 = var17.bind(var5)(var6);
            var6 = var6.ChannelTypes;
            var6 = var6.GUILD_STAGE_VOICE;
            if(!(var6 !== var16)) { _fun0010_ip = 678; continue _fun0010 }
 314:
            var17 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var18];
            var6 = var17.bind(var5)(var6);
            var6 = var6.ChannelTypes;
            var6 = var6.DM;
            if(!(var6 !== var16)) { _fun0010_ip = 632; continue _fun0010 }
 350:
            var17 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var18];
            var6 = var17.bind(var5)(var6);
            var6 = var6.ChannelTypes;
            var6 = var6.GROUP_DM;
            if(!(var6 !== var16)) { _fun0010_ip = 632; continue _fun0010 }
 386:
            var6 = var4.voiceChannelsSectionNumber;
            if(!(var8 === var6)) { _fun0010_ip = 412; continue _fun0010 }
 396:
            var6 = var9.isCategory;
            var6 = var6.bind(var9)();
            if(var6) { _fun0010_ip = 575; continue _fun0010 }
 412:
            var8 = var4.id;
            var6 = _closure1_slot17;
            if(!(var8 !== var6)) { _fun0010_ip = 438; continue _fun0010 }
 425:
            var6 = var4.id;
            var4 = _closure1_slot15;
            if(!(var6 === var4)) { _fun0010_ip = 532; continue _fun0010 }
 438:
            var8 = _closure1_slot6;
            var6 = var8.has;
            var4 = var9.type;
            var4 = var6.bind(var8)(var4);
            if(!var4) { _fun0010_ip = 532; continue _fun0010 }
 460:
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
            _fun0010_ip = 573; continue _fun0010;
 532:
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
 573:
            _fun0010_ip = 624; continue _fun0010;
 575:
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
 624:
            var1 = var4;
            _fun0010_ip = 906; continue _fun0010;
 632:
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
            _fun0010_ip = 906; continue _fun0010;
 678:
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
            _fun0010_ip = 906; continue _fun0010;
 724:
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
            _fun0010_ip = 906; continue _fun0010;
 781:
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
            if(var6) { _fun0010_ip = 1709; continue _fun0010 }
 943:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_ROLE_SUBSCRIPTIONS;
            if(!(var6 !== var8)) { _fun0010_ip = 1654; continue _fun0010 }
 960:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_HOME;
            if(!(var6 !== var8)) { _fun0010_ip = 1597; continue _fun0010 }
 977:
            var6 = _closure1_slot19;
            var6 = var6.CHANNELS_AND_ROLES;
            if(!(var6 !== var8)) { _fun0010_ip = 1517; continue _fun0010 }
 994:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_DIRECTORY;
            if(!(var6 !== var8)) { _fun0010_ip = 1436; continue _fun0010 }
 1011:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            if(!(var6 !== var8)) { _fun0010_ip = 1294; continue _fun0010 }
 1028:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_HUB_HEADER_OPTIONS;
            if(!(var6 !== var8)) { _fun0010_ip = 1253; continue _fun0010 }
 1045:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_MOD_DASH_MEMBER_SAFETY;
            if(!(var6 !== var8)) { _fun0010_ip = 1193; continue _fun0010 }
 1062:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_SCHEDULED_EVENTS;
            var1 = null;
            if(!(var6 !== var8)) { _fun0010_ip = 1709; continue _fun0010 }
 1081:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_FAVORITES;
            var1 = null;
            if(!(var6 !== var8)) { _fun0010_ip = 1709; continue _fun0010 }
 1100:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_CHANNEL_LIST_OPT_IN_NOTICE;
            var1 = null;
            if(!(var6 !== var8)) { _fun0010_ip = 1709; continue _fun0010 }
 1119:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_SHOP;
            var1 = null;
            if(!(var6 !== var8)) { _fun0010_ip = 1709; continue _fun0010 }
 1138:
            var6 = _closure1_slot19;
            var6 = var6.BROWSE_CHANNELS;
            var1 = null;
            if(!(var6 !== var8)) { _fun0010_ip = 1709; continue _fun0010 }
 1157:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_PREMIUM_PROGRESS_BAR;
            var1 = null;
            if(!(var6 !== var8)) { _fun0010_ip = 1709; continue _fun0010 }
 1176:
            var6 = _closure1_slot19;
            var6 = var6.GUILD_BOOSTS;
            var1 = null;
            _fun0010_ip = 1709; continue _fun0010;
 1193:
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
            _fun0010_ip = 1709; continue _fun0010;
 1253:
            var8 = _closure1_slot20;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 31;
            var4 = var9[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['guild'] = var10;
            var1 = var8.bind(var5)(var6, var4);
            _fun0010_ip = 1709; continue _fun0010;
 1294:
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
            _fun0010_ip = 1709; continue _fun0010;
 1436:
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
            _fun0010_ip = 1709; continue _fun0010;
 1517:
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
            if(var9) { _fun0010_ip = 1584; continue _fun0010 }
 1570:
            var12 = _closure1_slot16;
            var12 = var12.CUSTOMIZE_COMMUNITY;
            var9 = var11 === var12;
 1584:
            var4['selected'] = var9;
            var1 = var8.bind(var5)(var6, var4);
            _fun0010_ip = 1709; continue _fun0010;
 1597:
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
            _fun0010_ip = 1709; continue _fun0010;
 1654:
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
 1709:
            return var1;
 1711:
            var1 = var2.getChannelNoticeSection;
            var2 = var1.bind(var2)();
            var1 = var2.getRow;
            var3 = var1.bind(var2)(var3);
            var4 = null;
            var2 = var4 == var3;
            var1 = null;
            if(var2) { _fun0010_ip = 2038; continue _fun0010 }
 1746:
            var2 = _closure1_slot18;
            var2 = var2.SPACER;
            if(!(var2 !== var3)) { _fun0010_ip = 2008; continue _fun0010 }
 1763:
            var2 = _closure1_slot18;
            var2 = var2.GUILD_PROGRESS;
            if(!(var2 !== var3)) { _fun0010_ip = 1936; continue _fun0010 }
 1780:
            var2 = _closure1_slot18;
            var2 = var2.MFA_WARNING;
            if(!(var2 !== var3)) { _fun0010_ip = 1868; continue _fun0010 }
 1794:
            var2 = _closure1_slot18;
            var2 = var2.LIVE_CHANNEL_NOTICE;
            var1 = null;
            if(!(var2 === var3)) { _fun0010_ip = 2038; continue _fun0010 }
 1813:
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
            _fun0010_ip = 2038; continue _fun0010;
 1868:
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
            _fun0010_ip = 2038; continue _fun0010;
 1936:
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
            _fun0010_ip = 2038; continue _fun0010;
 2008:
            var4 = _closure1_slot20;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = {};
            var7 = _closure1_slot14;
            var6['height'] = var7;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 2038:
            return var1;
        }
    };
    var3['renderChannelListItem'] = var4;
    var4 = function getChannelListItemSize(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
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
            var9 = 16;
            var1 = var1[var9];
            var6 = undefined;
            var1 = var8.bind(var6)(var1);
            var1 = var1.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var1 !== var14)) { _fun0011_ip = 1176; continue _fun0011 }
 82:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var1 = var8.bind(var6)(var1);
            var1 = var1.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var1 !== var14)) { _fun0011_ip = 847; continue _fun0011 }
 112:
            var1 = _closure1_slot12;
            var9 = var1.bind(var6)(var5);
            var1 = var4.getChannelFromSectionRow;
            var8 = var1.bind(var4)(var14, var7);
            var13 = null;
            var10 = var13 == var8;
            var15 = 0;
            var1 = 0;
            if(var10) { _fun0011_ip = 845; continue _fun0011 }
 149:
            var8 = var8.channel;
            var10 = var8.record;
            var17 = _closure1_slot5;
            var16 = var17.has;
            var12 = var10.type;
            var16 = var16.bind(var17)(var12);
            var12 = null;
            if(!var16) { _fun0011_ip = 189; continue _fun0011 }
 184:
            var12 = var10.type;
 189:
            var16 = var10.type;
            if(!(var12 !== var16)) { _fun0011_ip = 831; continue _fun0011 }
 201:
            var17 = _closure1_slot0;
            var12 = _closure1_slot2;
            var19 = 35;
            var12 = var12[var19];
            var12 = var17.bind(var6)(var12);
            var12 = var12.ChannelTypes;
            var12 = var12.GUILD_VOICE;
            if(!(var12 !== var16)) { _fun0011_ip = 461; continue _fun0011 }
 240:
            var17 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var19];
            var12 = var17.bind(var6)(var12);
            var12 = var12.ChannelTypes;
            var12 = var12.GUILD_STAGE_VOICE;
            if(!(var12 !== var16)) { _fun0011_ip = 461; continue _fun0011 }
 276:
            var17 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var19];
            var12 = var17.bind(var6)(var12);
            var12 = var12.ChannelTypes;
            var12 = var12.DM;
            var1 = var9;
            if(!(var12 !== var16)) { _fun0011_ip = 845; continue _fun0011 }
 315:
            var17 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var19];
            var12 = var17.bind(var6)(var12);
            var12 = var12.ChannelTypes;
            var12 = var12.GROUP_DM;
            var1 = var9;
            if(!(var12 !== var16)) { _fun0011_ip = 845; continue _fun0011 }
 354:
            var12 = var4.voiceChannelsSectionNumber;
            if(!(var14 === var12)) { _fun0011_ip = 377; continue _fun0011 }
 364:
            var12 = var10.isCategory;
            var12 = var12.bind(var10)();
            if(var12) { _fun0011_ip = 436; continue _fun0011 }
 377:
            var14 = var4.id;
            var12 = _closure1_slot17;
            var14 = var14 !== var12;
            if(!var14) { _fun0011_ip = 406; continue _fun0011 }
 393:
            var16 = var4.id;
            var12 = _closure1_slot15;
            var14 = var16 !== var12;
 406:
            var12 = var9;
            if(var14) { _fun0011_ip = 453; continue _fun0011 }
 412:
            var17 = _closure1_slot6;
            var16 = var17.has;
            var14 = var10.type;
            var14 = var16.bind(var17)(var14);
            var12 = var9;
            _fun0011_ip = 453; continue _fun0011;
 436:
            var14 = _closure1_slot11;
            var16 = var14.bind(var6)(var5);
            var14 = _closure1_slot10;
            var12 = var16 + var14;
 453:
            var1 = var12;
            _fun0011_ip = 845; continue _fun0011;
 461:
            var12 = var8.subtitle;
            var13 = var13 != var12;
            var12 = 0;
            if(!var13) { _fun0011_ip = 485; continue _fun0011 }
 476:
            var13 = _closure1_slot13;
            var12 = var13.bind(var6)(var5);
 485:
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
            if(!(var14 !== var13)) { _fun0011_ip = 568; continue _fun0011 }
 546:
            var16 = _closure1_slot9;
            var14 = var16.countVoiceStatesForChannel;
            var13 = var10.id;
            var14 = var14.bind(var16)(var13);
            _fun0011_ip = 621; continue _fun0011;
 568:
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
 621:
            var17 = var10.type;
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var19];
            var13 = var16.bind(var6)(var13);
            var13 = var13.ChannelTypes;
            var16 = var13.GUILD_STAGE_VOICE;
            var13 = 0;
            if(!(var17 === var16)) { _fun0011_ip = 754; continue _fun0011 }
 661:
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
            if(!var10) { _fun0011_ip = 754; continue _fun0011 }
 723:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 42;
            var10 = var17[var10];
            var16 = var16.bind(var6)(var10);
            var10 = var16.getAudienceItemHeight;
            var13 = var10.bind(var16)(var5);
 754:
            var10 = var9;
            if(!(var14 > var15)) { _fun0011_ip = 826; continue _fun0011 }
 761:
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
 826:
            var1 = var10;
            _fun0011_ip = 845; continue _fun0011;
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
            if(var9) { _fun0011_ip = 1174; continue _fun0011 }
 882:
            var9 = _closure1_slot12;
            var12 = var9.bind(var6)(var5);
            var9 = _closure1_slot19;
            var9 = var9.GUILD_ROLE_SUBSCRIPTIONS;
            var1 = var12;
            if(!(var9 !== var10)) { _fun0011_ip = 1174; continue _fun0011 }
 911:
            var9 = _closure1_slot19;
            var9 = var9.GUILD_HOME;
            var1 = var12;
            if(!(var9 !== var10)) { _fun0011_ip = 1174; continue _fun0011 }
 931:
            var9 = _closure1_slot19;
            var9 = var9.CHANNELS_AND_ROLES;
            var1 = var12;
            if(!(var9 !== var10)) { _fun0011_ip = 1174; continue _fun0011 }
 951:
            var9 = _closure1_slot19;
            var9 = var9.GUILD_DIRECTORY;
            var1 = var12;
            if(!(var9 !== var10)) { _fun0011_ip = 1174; continue _fun0011 }
 971:
            var9 = _closure1_slot19;
            var9 = var9.GUILD_MOD_DASH_MEMBER_SAFETY;
            var1 = var12;
            if(!(var9 !== var10)) { _fun0011_ip = 1174; continue _fun0011 }
 991:
            var9 = _closure1_slot19;
            var9 = var9.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            if(!(var9 !== var10)) { _fun0011_ip = 1141; continue _fun0011 }
 1008:
            var9 = _closure1_slot19;
            var9 = var9.GUILD_HUB_HEADER_OPTIONS;
            var1 = var11;
            if(!(var9 !== var10)) { _fun0011_ip = 1174; continue _fun0011 }
 1028:
            var9 = _closure1_slot19;
            var9 = var9.GUILD_SCHEDULED_EVENTS;
            var1 = 0;
            if(!(var9 !== var10)) { _fun0011_ip = 1174; continue _fun0011 }
 1047:
            var9 = _closure1_slot19;
            var9 = var9.GUILD_FAVORITES;
            var1 = 0;
            if(!(var9 !== var10)) { _fun0011_ip = 1174; continue _fun0011 }
 1063:
            var9 = _closure1_slot19;
            var9 = var9.GUILD_CHANNEL_LIST_OPT_IN_NOTICE;
            var1 = 0;
            if(!(var9 !== var10)) { _fun0011_ip = 1174; continue _fun0011 }
 1079:
            var9 = _closure1_slot19;
            var9 = var9.GUILD_SHOP;
            var1 = 0;
            if(!(var9 !== var10)) { _fun0011_ip = 1174; continue _fun0011 }
 1095:
            var9 = _closure1_slot19;
            var9 = var9.BROWSE_CHANNELS;
            var1 = 0;
            if(!(var9 !== var10)) { _fun0011_ip = 1174; continue _fun0011 }
 1111:
            var9 = _closure1_slot19;
            var9 = var9.GUILD_PREMIUM_PROGRESS_BAR;
            var1 = 0;
            if(!(var9 !== var10)) { _fun0011_ip = 1174; continue _fun0011 }
 1127:
            var9 = _closure1_slot19;
            var9 = var9.GUILD_BOOSTS;
            var1 = 0;
            _fun0011_ip = 1174; continue _fun0011;
 1141:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 19;
            var8 = var10[var8];
            var8 = var9.bind(var6)(var8);
            var9 = var8.DIVIDER_HEIGHT;
            var8 = 48;
            var1 = var8 + var9;
 1174:
            return var1;
 1176:
            var1 = var4.getChannelNoticeSection;
            var4 = var1.bind(var4)();
            var1 = var4.getRow;
            var7 = var1.bind(var4)(var7);
            var1 = null;
            var4 = var1 == var7;
            var1 = 0;
            if(var4) { _fun0011_ip = 1344; continue _fun0011 }
 1211:
            var4 = _closure1_slot18;
            var4 = var4.SPACER;
            if(!(var4 !== var7)) { _fun0011_ip = 1340; continue _fun0011 }
 1225:
            var4 = _closure1_slot18;
            var4 = var4.GUILD_PROGRESS;
            if(!(var4 !== var7)) { _fun0011_ip = 1307; continue _fun0011 }
 1239:
            var4 = _closure1_slot18;
            var4 = var4.MFA_WARNING;
            if(!(var4 !== var7)) { _fun0011_ip = 1274; continue _fun0011 }
 1253:
            var4 = _closure1_slot18;
            var4 = var4.LIVE_CHANNEL_NOTICE;
            var1 = 0;
            if(!(var4 === var7)) { _fun0011_ip = 1344; continue _fun0011 }
 1269:
            var1 = var3;
            _fun0011_ip = 1344; continue _fun0011;
 1274:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 25;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.getScaledGuildMFAWarningHeight;
            var1 = var3.bind(var4)(var5);
            _fun0011_ip = 1344; continue _fun0011;
 1307:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 24;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.getScaledGuildProgressButtonHeight;
            var1 = var3.bind(var4)(var5);
            _fun0011_ip = 1344; continue _fun0011;
 1340:
            var1 = _closure1_slot14;
 1344:
            return var1;
        }
    };
    var3['getChannelListItemSize'] = var4;
    var2 = function calculateVoiceSummary(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
            var1 = 20;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isVoiceChannelsSection;
            var1 = var1.bind(var3)(var8, var10);
            if(var1) { _fun0012_ip = 112; continue _fun0012 }
 78:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 16;
            var1 = var9[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.SECTION_INDEX_FIRST_NAMED_CATEGORY;
            if(!(var8 < var1)) { _fun0012_ip = 112; continue _fun0012 }
 108:
            var1 = null;
            return var1;
 112:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 43;
            var1 = var1[var9];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getSectionFooterConfig;
            var1 = var1.bind(var3)(var10, var11, var8);
            var3 = var1.canHaveVoiceSummary;
            var1 = null;
            if(var3) { _fun0012_ip = 158; continue _fun0012 }
 156:
            return var1;
 158:
            var3 = var10.getNamedCategoryFromSection;
            var8 = var3.bind(var10)(var8);
            if(!(var1 != var8)) { _fun0012_ip = 241; continue _fun0012 }
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
            if(!(var4 !== var5)) { _fun0012_ip = 239; continue _fun0012 }
 236:
            var2 = var3;
 239:
            return var2;
 241:
            return var1;
        }
    };
    var3['calculateVoiceSummary'] = var2;
    return var1;
})();