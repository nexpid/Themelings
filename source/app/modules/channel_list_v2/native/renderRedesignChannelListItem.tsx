// app/modules/channel_list_v2/native/renderRedesignChannelListItem.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    verify = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: renderThreads
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = argBar;
        var _closure2_slot1 = zuuluu;
        zuuluu = michal.threadIds;
        michal = zuuluu.map;
        entity = function(argFoo, argBar) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                oscard = argFoo;
                zuuluu = _closure1_slot8;
                entity = zuuluu.getChannel;
                verify = entity.bind(zuuluu)(oscard);
                entity = null;
                zuuluu = entity == verify;
                if(zuuluu) { _fun00002_ip = 128; continue _fun00001 }
 29:
                report = _closure1_slot21;
                tangon = _closure1_slot4;
                zuuluu = {};
                option = _closure1_slot1;
                golfie = _closure1_slot2;
                michal = 28;
                golfie = golfie[michal];
                michal = undefined;
                option = option.bind(michal)(golfie);
                golfie = {};
                golfie['channel'] = verify;
                golfie['threadId'] = oscard;
                verify = argBar;
                golfie['threadIndex'] = verify;
                offset = _closure2_slot0;
                offset = offset.threadCount;
                golfie['threadCount'] = offset;
                verify = _closure2_slot1;
                verify = verify === oscard;
                golfie['selected'] = verify;
                golfie = report.bind(michal)(option, golfie);
                zuuluu['children'] = golfie;
                entity = report.bind(michal)(tangon, zuuluu, oscard);
 128:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo) { // Original name: calculateVoiceChannelHeaderInfo
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.getCategoryFromSection;
            entity = zuuluu.voiceChannelsSectionNumber;
            tangon = michal.bind(zuuluu)(entity);
            entity = null;
            report = entity == tangon;
            if(report) { _fun00004_ip = 39; continue _fun00003 }
 29:
            entity = tangon.isEmpty;
            report = entity.bind(tangon)();
 39:
            zuuluu = false;
            michal = false;
            if(report) { _fun00004_ip = 64; continue _fun00003 }
 46:
            tangon = tangon.isCollapsed;
            entity = false;
            if(!tangon) { _fun00004_ip = 59; continue _fun00003 }
 57:
            entity = true;
 59:
            zuuluu = true;
            michal = entity;
 64:
            entity = {};
            entity['showDivider'] = zuuluu;
            entity['isCollapsed'] = michal;
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo, argBar) { // Original name: calculateVoiceChannelButtonInfo
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.getCategoryFromSection;
            entity = argBar;
            michal = michal.bind(zuuluu)(entity);
            entity = null;
            if(!(entity != michal)) { _fun00006_ip = 57; continue _fun00005 }
 23:
            entity = michal.getHiddenChannelIds;
            entity = entity.bind(michal)();
            entity = entity.length;
            zuuluu = 0;
            if(!(!(entity > zuuluu))) { _fun00006_ip = 73; continue _fun00005 }
 44:
            entity = michal.isEmpty;
            entity = entity.bind(michal)();
            if(!entity) { _fun00006_ip = 73; continue _fun00005 }
 57:
            entity = {'render': false, 'lastShownChannelActive': false};
            return entity;
 73:
            entity = michal.getShownChannelIds;
            entity = entity.bind(michal)();
            tangon = entity.length;
            entity = michal.getShownChannelIds;
            michal = entity.bind(michal)();
            entity = 1;
            entity = tangon - entity;
            report = michal[entity];
            entity = {};
            michal = true;
            entity['render'] = michal;
            tangon = _closure1_slot10;
            michal = tangon.countVoiceStatesForChannel;
            michal = michal.bind(tangon)(report);
            michal = michal > zuuluu;
            entity['lastShownChannelActive'] = michal;
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.THREADED_CHANNEL_TYPES;
    var _closure1_slot6 = golfie;
    tangon = tangon.THREAD_CHANNEL_TYPES;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.CATEGORY_MARGIN_TOP;
    var _closure1_slot11 = golfie;
    golfie = tangon.getScaledCategoryRowHeight;
    var _closure1_slot12 = golfie;
    golfie = tangon.getScaledChannelRowHeight;
    var _closure1_slot13 = golfie;
    golfie = tangon.getScaledChannelSubtitleHeight;
    var _closure1_slot14 = golfie;
    tangon = tangon.STICKY_HEADER_MARGIN_BOTTOM;
    var _closure1_slot15 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FAVORITES;
    var _closure1_slot16 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.StaticChannelRoute;
    var _closure1_slot17 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FAVORITES_RAW_GUILD_ID;
    var _closure1_slot18 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ChannelListChannelNoticeRow;
    var _closure1_slot19 = golfie;
    tangon = tangon.ChannelListGuildActionRow;
    var _closure1_slot20 = tangon;
    tangon = 12;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot21 = golfie;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsxs;
    var _closure1_slot22 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Fragment;
    var _closure1_slot23 = tangon;
    tangon = {};
    golfie = {};
    offset = 16;
    golfie['marginHorizontal'] = offset;
    tangon['nonChannelContainer'] = golfie;
    golfie = {};
    option = 13;
    yankee = oscard[option];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.LIVE_CHANNEL_NOTICE_MARGIN_TOP;
    golfie['marginTop'] = yankee;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM;
    golfie['marginBottom'] = option;
    golfie['marginHorizontal'] = offset;
    tangon['liveChannelNotice'] = golfie;
    golfie = {};
    golfie['marginHorizontal'] = offset;
    option = 14;
    yankee = oscard[option];
    yankee = verify.bind(entity)(yankee);
    yankee = yankee.spacing;
    yankee = yankee.PX_16;
    golfie['marginTop'] = yankee;
    tangon['showAllVoiceChannelsButtonLastShownChannelActive'] = golfie;
    golfie = {};
    golfie['marginHorizontal'] = offset;
    option = oscard[option];
    option = verify.bind(entity)(option);
    option = option.spacing;
    option = option.PX_8;
    golfie['marginTop'] = option;
    tangon['showAllVoiceChannelsButtonLastShownChannelInactive'] = golfie;
    var _closure1_slot24 = tangon;
    tangon = 45;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel_list_v2/native/renderRedesignChannelListItem.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useRenderChannelListItem
        michal = argFoo;
        golfie = michal.recentlyActiveSectionEnabled;
        var _closure2_slot0 = golfie;
        oscard = michal.guildChannels;
        var _closure2_slot1 = oscard;
        option = michal.guild;
        var _closure2_slot2 = option;
        report = michal.listRef;
        var _closure2_slot3 = report;
        tangon = _closure1_slot3;
        zuuluu = tangon.useCallback;
        michal = new Array(5);
        michal[0] = option;
        michal[1] = golfie;
        golfie = oscard.voiceChannelsSectionNumber;
        michal[2] = golfie;
        oscard = oscard.id;
        michal[3] = oscard;
        michal[4] = report;
        entity = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argFoo;
                verify = entity.item;
                zuuluu = verify.kind;
                entity = 'newPanelsListHeader';
                if(!(entity !== zuuluu)) { _fun00008_ip = 2085; continue _fun00007 }
 26:
                entity = 'liveChannelNotice';
                if(!(entity !== zuuluu)) { _fun00008_ip = 1979; continue _fun00007 }
 37:
                entity = 'mfaWarning';
                if(!(entity !== zuuluu)) { _fun00008_ip = 1909; continue _fun00007 }
 50:
                entity = 'guildProgress';
                if(!(entity !== zuuluu)) { _fun00008_ip = 1825; continue _fun00007 }
 63:
                entity = 'newMemberActions';
                if(!(entity !== zuuluu)) { _fun00008_ip = 1730; continue _fun00007 }
 74:
                entity = 'showAllVoiceChannelsButton';
                if(!(entity !== zuuluu)) { _fun00008_ip = 1604; continue _fun00007 }
 87:
                entity = 'sectionHeaderRecentlyVisited';
                if(!(entity !== zuuluu)) { _fun00008_ip = 1497; continue _fun00007 }
 100:
                entity = 'sectionHeaderFavorites';
                if(!(entity !== zuuluu)) { _fun00008_ip = 1392; continue _fun00007 }
 113:
                entity = 'sectionHeaderRecents';
                if(!(entity !== zuuluu)) { _fun00008_ip = 1256; continue _fun00007 }
 126:
                entity = 'sectionHeaderCategory';
                if(!(entity !== zuuluu)) { _fun00008_ip = 1182; continue _fun00007 }
 139:
                entity = 'sectionHeaderVoiceChannels';
                if(!(entity !== zuuluu)) { _fun00008_ip = 1091; continue _fun00007 }
 152:
                michal = _closure1_slot20;
                michal = michal.GUILD_HUB_HEADER_OPTIONS;
                if(!(michal !== zuuluu)) { _fun00008_ip = 1037; continue _fun00007 }
 172:
                michal = _closure1_slot20;
                michal = michal.GUILD_SCHEDULED_EVENTS;
                if(!(michal !== zuuluu)) { _fun00008_ip = 990; continue _fun00007 }
 189:
                michal = _closure1_slot20;
                michal = michal.GUILD_ROLE_SUBSCRIPTIONS;
                if(!(michal !== zuuluu)) { _fun00008_ip = 932; continue _fun00007 }
 206:
                michal = _closure1_slot20;
                michal = michal.GUILD_HOME;
                if(!(michal !== zuuluu)) { _fun00008_ip = 874; continue _fun00007 }
 223:
                michal = _closure1_slot20;
                michal = michal.CHANNELS_AND_ROLES;
                if(!(michal !== zuuluu)) { _fun00008_ip = 810; continue _fun00007 }
 240:
                michal = _closure1_slot20;
                michal = michal.GUILD_DIRECTORY;
                if(!(michal !== zuuluu)) { _fun00008_ip = 747; continue _fun00007 }
 257:
                michal = 'channel';
                if(!(michal !== zuuluu)) { _fun00008_ip = 521; continue _fun00007 }
 268:
                michal = 'thread';
                if(!(michal !== zuuluu)) { _fun00008_ip = 408; continue _fun00007 }
 279:
                michal = 'sectionFooterSeparator';
                if(!(michal !== zuuluu)) { _fun00008_ip = 372; continue _fun00007 }
 289:
                michal = 'sectionFooterVoice';
                if(!(michal !== zuuluu)) { _fun00008_ip = 303; continue _fun00007 }
 299:
                michal = null;
                return michal;
 303:
                report = _closure1_slot21;
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 20;
                michal = tangon[michal];
                tangon = undefined;
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = michal.RedesignVoiceUserSummary;
                michal = {};
                oscard = _closure2_slot2;
                oscard = oscard.id;
                michal['guildId'] = oscard;
                oscard = verify.activeVoiceChannels;
                michal['channels'] = oscard;
                michal = report.bind(tangon)(zuuluu, michal);
                return michal;
 372:
                report = _closure1_slot21;
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 29;
                michal = tangon[michal];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = {};
                michal = report.bind(tangon)(zuuluu, michal);
                return michal;
 408:
                tangon = _closure1_slot8;
                zuuluu = tangon.getChannel;
                michal = verify.threadId;
                golfie = zuuluu.bind(tangon)(michal);
                michal = null;
                zuuluu = michal == golfie;
                if(zuuluu) { _fun00008_ip = 519; continue _fun00007 }
 437:
                oscard = _closure1_slot21;
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                zuuluu = 28;
                zuuluu = report[zuuluu];
                report = undefined;
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = {};
                zuuluu['channel'] = golfie;
                golfie = verify.threadId;
                zuuluu['threadId'] = golfie;
                golfie = verify.threadIndex;
                zuuluu['threadIndex'] = golfie;
                golfie = verify.threadCount;
                zuuluu['threadCount'] = golfie;
                golfie = verify.selected;
                zuuluu['selected'] = golfie;
                michal = oscard.bind(report)(tangon, zuuluu);
 519:
                return michal;
 521:
                zuuluu = verify.channel;
                michal = zuuluu.isCategory;
                michal = michal.bind(zuuluu)();
                if(!michal) { _fun00008_ip = 564; continue _fun00007 }
 539:
                zuuluu = verify.section;
                michal = _closure2_slot1;
                michal = michal.voiceChannelsSectionNumber;
                if(!(zuuluu !== michal)) { _fun00008_ip = 689; continue _fun00007 }
 564:
                tangon = _closure1_slot21;
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                michal = 20;
                michal = report[michal];
                oscard = undefined;
                michal = zuuluu.bind(oscard)(michal);
                zuuluu = michal.RedesignChannelItem;
                michal = {};
                michal['item'] = verify;
                report = _closure2_slot2;
                michal['guild'] = report;
                golfie = tangon.bind(oscard)(zuuluu, michal);
                zuuluu = verify.needsJumpAndHighlight;
                michal = golfie;
                if(!zuuluu) { _fun00008_ip = 687; continue _fun00007 }
 631:
                report = _closure1_slot21;
                tangon = _closure1_slot0;
                option = _closure1_slot2;
                zuuluu = 15;
                zuuluu = option[zuuluu];
                zuuluu = tangon.bind(oscard)(zuuluu);
                tangon = zuuluu.ChannelHighlight;
                zuuluu = {};
                option = verify.channel;
                option = option.id;
                zuuluu['channelId'] = option;
                zuuluu['children'] = golfie;
                michal = report.bind(oscard)(tangon, zuuluu);
 687:
                return michal;
 689:
                report = _closure1_slot21;
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 20;
                michal = tangon[michal];
                tangon = undefined;
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = michal.CategoryChannel;
                michal = {};
                oscard = verify.channel;
                michal['channel'] = oscard;
                oscard = true;
                michal['withMarginTop'] = oscard;
                michal = report.bind(tangon)(zuuluu, michal);
                return michal;
 747:
                report = _closure1_slot21;
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 27;
                michal = tangon[michal];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = {};
                oscard = _closure2_slot2;
                oscard = oscard.id;
                michal['guildId'] = oscard;
                oscard = verify.selected;
                michal['selected'] = oscard;
                michal = report.bind(tangon)(zuuluu, michal);
                return michal;
 810:
                report = _closure1_slot21;
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 26;
                michal = tangon[michal];
                tangon = undefined;
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = michal.GuildRolesAndChannelsRow;
                michal = {};
                oscard = _closure2_slot2;
                michal['guild'] = oscard;
                oscard = verify.selected;
                michal['selected'] = oscard;
                michal = report.bind(tangon)(zuuluu, michal);
                return michal;
 874:
                report = _closure1_slot21;
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 25;
                michal = tangon[michal];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = {};
                oscard = _closure2_slot2;
                michal['guild'] = oscard;
                oscard = verify.selected;
                michal['selected'] = oscard;
                michal = report.bind(tangon)(zuuluu, michal);
                return michal;
 932:
                report = _closure1_slot21;
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 24;
                michal = tangon[michal];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = {};
                oscard = _closure2_slot2;
                michal['guild'] = oscard;
                oscard = verify.selected;
                michal['selected'] = oscard;
                michal = report.bind(tangon)(zuuluu, michal);
                return michal;
 990:
                report = _closure1_slot21;
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 23;
                michal = tangon[michal];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = {};
                oscard = _closure2_slot2;
                michal['guild'] = oscard;
                michal = report.bind(tangon)(zuuluu, michal);
                return michal;
 1037:
                tangon = _closure1_slot21;
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 22;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = {};
                report = _closure2_slot2;
                entity['guild'] = report;
                report = true;
                entity['flashList'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
 1091:
                option = _closure1_slot0;
                offset = _closure1_slot2;
                entity = 20;
                entity = offset[entity];
                golfie = undefined;
                zuuluu = option.bind(golfie)(entity);
                michal = zuuluu.renderCategoryItem;
                entity = {};
                tangon = 21;
                report = offset[tangon];
                report = option.bind(golfie)(report);
                oscard = report.intl;
                report = oscard.string;
                tangon = offset[tangon];
                tangon = option.bind(golfie)(tangon);
                tangon = tangon.t;
                tangon = tangon.V/u9Dw;
                tangon = report.bind(oscard)(tangon);
                entity['name'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
 1182:
                tangon = _closure1_slot21;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 20;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.CategoryChannel;
                entity = {};
                report = verify.category;
                report = report.record;
                entity['channel'] = report;
                report = verify.isFirstCategory;
                report = !report;
                entity['withMarginTop'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
 1256:
                entity = _closure2_slot0;
                report = _closure1_slot21;
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 20;
                michal = tangon[michal];
                tangon = undefined;
                michal = zuuluu.bind(tangon)(michal);
                if(entity) { _fun00008_ip = 1349; continue _fun00007 }
 1295:
                zuuluu = michal.SuggestedCategory;
                entity = {};
                golfie = _closure2_slot1;
                golfie = golfie.id;
                entity['guildId'] = golfie;
                golfie = verify.channelIds;
                entity['channelIds'] = golfie;
                golfie = verify.isFirstCategory;
                golfie = !golfie;
                entity['withMarginTop'] = golfie;
                entity = report.bind(tangon)(zuuluu, entity);
                _fun00008_ip = 1390; continue _fun00007;
 1349:
                zuuluu = michal.RecentlyActiveCategory;
                michal = {};
                oscard = _closure2_slot1;
                oscard = oscard.id;
                michal['guildId'] = oscard;
                oscard = verify.isFirstCategory;
                oscard = !oscard;
                michal['withMarginTop'] = oscard;
                entity = report.bind(tangon)(zuuluu, michal);
 1390:
                return entity;
 1392:
                option = _closure1_slot0;
                offset = _closure1_slot2;
                entity = 20;
                entity = offset[entity];
                golfie = undefined;
                zuuluu = option.bind(golfie)(entity);
                michal = zuuluu.renderCategoryItem;
                entity = {};
                tangon = 21;
                report = offset[tangon];
                report = option.bind(golfie)(report);
                oscard = report.intl;
                report = oscard.string;
                tangon = offset[tangon];
                tangon = option.bind(golfie)(tangon);
                tangon = tangon.t;
                tangon = tangon.k8fFjo;
                tangon = report.bind(oscard)(tangon);
                entity['name'] = tangon;
                tangon = verify.isFirstCategory;
                tangon = !tangon;
                entity['withMarginTop'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
 1497:
                option = _closure1_slot0;
                offset = _closure1_slot2;
                entity = 20;
                entity = offset[entity];
                golfie = undefined;
                zuuluu = option.bind(golfie)(entity);
                michal = zuuluu.renderCategoryItem;
                entity = {};
                tangon = 21;
                report = offset[tangon];
                report = option.bind(golfie)(report);
                oscard = report.intl;
                report = oscard.string;
                tangon = offset[tangon];
                tangon = option.bind(golfie)(tangon);
                tangon = tangon.t;
                tangon = tangon.pd7oXF;
                tangon = report.bind(oscard)(tangon);
                entity['name'] = tangon;
                tangon = verify.isFirstCategory;
                tangon = !tangon;
                entity['withMarginTop'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
 1604:
                tangon = _closure1_slot21;
                zuuluu = _closure1_slot4;
                michal = {};
                report = {};
                golfie = 16;
                report['marginHorizontal'] = golfie;
                option = verify.isLastShownChannelActive;
                oscard = 8;
                if(!option) { _fun00008_ip = 1642; continue _fun00007 }
 1639:
                oscard = golfie;
 1642:
                report['marginTop'] = oscard;
                michal['style'] = report;
                golfie = _closure1_slot21;
                oscard = _closure1_slot1;
                report = _closure1_slot2;
                entity = 19;
                report = report[entity];
                entity = undefined;
                oscard = oscard.bind(entity)(report);
                report = {};
                offset = _closure2_slot2;
                offset = offset.id;
                report['guildId'] = offset;
                verify = verify.index;
                report['index'] = verify;
                option = _closure2_slot3;
                report['listRef'] = option;
                report = golfie.bind(entity)(oscard, report);
                michal['children'] = report;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
 1730:
                tangon = _closure1_slot21;
                zuuluu = _closure1_slot4;
                michal = {};
                report = {};
                oscard = 16;
                report['marginHorizontal'] = oscard;
                michal['style'] = report;
                golfie = _closure1_slot21;
                oscard = _closure1_slot0;
                report = _closure1_slot2;
                entity = 18;
                report = report[entity];
                entity = undefined;
                report = oscard.bind(entity)(report);
                oscard = report.NewMemberActionsProgress;
                report = {};
                option = _closure2_slot2;
                option = option.id;
                report['guildId'] = option;
                report = golfie.bind(entity)(oscard, report);
                michal['children'] = report;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
 1825:
                tangon = _closure1_slot21;
                zuuluu = _closure1_slot4;
                michal = {};
                report = {};
                oscard = 16;
                report['marginHorizontal'] = oscard;
                michal['style'] = report;
                golfie = _closure1_slot21;
                oscard = _closure1_slot1;
                report = _closure1_slot2;
                entity = 17;
                report = report[entity];
                entity = undefined;
                oscard = oscard.bind(entity)(report);
                report = {};
                option = _closure2_slot2;
                report['guild'] = option;
                report = golfie.bind(entity)(oscard, report);
                michal['children'] = report;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
 1909:
                tangon = _closure1_slot21;
                zuuluu = _closure1_slot4;
                michal = {};
                oscard = {};
                report = 16;
                oscard['marginHorizontal'] = report;
                michal['style'] = oscard;
                golfie = _closure1_slot21;
                oscard = _closure1_slot1;
                entity = _closure1_slot2;
                report = entity[report];
                entity = undefined;
                oscard = oscard.bind(entity)(report);
                report = {};
                report = golfie.bind(entity)(oscard, report);
                michal['children'] = report;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
 1979:
                tangon = _closure1_slot21;
                michal = _closure1_slot1;
                option = _closure1_slot2;
                oscard = 13;
                entity = option[oscard];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = {};
                report = {};
                golfie = _closure1_slot0;
                verify = option[oscard];
                verify = golfie.bind(zuuluu)(verify);
                verify = verify.LIVE_CHANNEL_NOTICE_MARGIN_TOP;
                report['marginTop'] = verify;
                oscard = option[oscard];
                oscard = golfie.bind(zuuluu)(oscard);
                oscard = oscard.LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM;
                report['marginBottom'] = oscard;
                oscard = 16;
                report['marginHorizontal'] = oscard;
                entity['style'] = report;
                report = _closure2_slot2;
                entity['guild'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
 2085:
                tangon = _closure1_slot21;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 15;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.GuildSearchAndInvite;
                entity = {};
                report = _closure2_slot2;
                entity['guild'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useRenderChannelListItem'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: getFastListRecyclerKey
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            report = argBar;
            option = argBaz;
            oscard = argCor;
            golfie = _closure1_slot0;
            entity = _closure1_slot2;
            verify = 30;
            zuuluu = entity[verify];
            entity = undefined;
            zuuluu = golfie.bind(entity)(zuuluu);
            zuuluu = zuuluu.FastListItemTypes;
            zuuluu = zuuluu.ITEM;
            if(!(report !== zuuluu)) { _fun00010_ip = 125; continue _fun00009 }
 53:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[verify];
            zuuluu = golfie.bind(entity)(zuuluu);
            zuuluu = zuuluu.FastListItemTypes;
            zuuluu = zuuluu.SECTION;
            if(!(report !== zuuluu)) { _fun00010_ip = 88; continue _fun00009 }
 86:
            return entity;
 88:
            verify = michal.id;
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            golfie = zuuluu.concat;
            report = '';
            zuuluu = ':SECTION:';
            zuuluu = golfie.bind(report)(verify, zuuluu, option);
            return zuuluu;
 125:
            zuuluu = null;
            if(!(zuuluu != oscard)) { _fun00010_ip = 329; continue _fun00009 }
 134:
            verify = _closure1_slot0;
            report = _closure1_slot2;
            golfie = 31;
            report = report[golfie];
            report = verify.bind(entity)(report);
            report = report.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(report !== option)) { _fun00010_ip = 256; continue _fun00009 }
 164:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[golfie];
            tangon = report.bind(entity)(tangon);
            tangon = tangon.SECTION_INDEX_GUILD_ACTIONS;
            if(!(tangon !== option)) { _fun00010_ip = 233; continue _fun00009 }
 191:
            tangon = michal.getChannelFromSectionRow;
            tangon = tangon.bind(michal)(option, oscard);
            report = zuuluu == tangon;
            golfie = undefined;
            if(report) { _fun00010_ip = 231; continue _fun00009 }
 212:
            tangon = tangon.channel;
            report = zuuluu == tangon;
            golfie = undefined;
            if(report) { _fun00010_ip = 231; continue _fun00009 }
 226:
            golfie = tangon.id;
 231:
            _fun00010_ip = 277; continue _fun00009;
 233:
            tangon = michal.getGuildActionSection;
            report = tangon.bind(michal)();
            tangon = report.getRow;
            golfie = tangon.bind(report)(oscard);
            _fun00010_ip = 277; continue _fun00009;
 256:
            tangon = michal.getChannelNoticeSection;
            report = tangon.bind(michal)();
            tangon = report.getRow;
            golfie = tangon.bind(report)(oscard);
 277:
            if(!(zuuluu != golfie)) { _fun00010_ip = 327; continue _fun00009 }
 281:
            backup = michal.id;
            michal = global;
            michal = michal.HermesInternal;
            report = michal.concat;
            kiloes = '';
            foxtra = ':SECTION:';
            yankee = ':ITEM:';
            romeon = option;
            offset = golfie;
            michal = kiloes[report](backup, foxtra, romeon, yankee, offset, verify);
            return michal;
 327:
            return entity;
 329:
            return entity;
        }
    };
    zuuluu['getFastListRecyclerKey'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: renderChannelListSectionHeader
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            golfie = argFoo;
            verify = argBar;
            tangon = argCor;
            entity = golfie.favoritesSectionNumber;
            if(!(entity !== verify)) { _fun00012_ip = 489; continue _fun00011 }
 22:
            entity = golfie.recentsSectionNumber;
            if(!(entity !== verify)) { _fun00012_ip = 349; continue _fun00011 }
 35:
            entity = golfie.voiceChannelsSectionNumber;
            if(!(entity !== verify)) { _fun00012_ip = 163; continue _fun00011 }
 45:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 32;
            entity = report[entity];
            oscard = undefined;
            zuuluu = zuuluu.bind(oscard)(entity);
            entity = zuuluu.isNamedCategorySection;
            zuuluu = entity.bind(zuuluu)(verify);
            entity = null;
            if(zuuluu) { _fun00012_ip = 88; continue _fun00011 }
 86:
            return entity;
 88:
            zuuluu = golfie.getNamedCategoryFromSection;
            option = zuuluu.bind(golfie)(verify);
            zuuluu = entity == option;
            entity = null;
            if(zuuluu) { _fun00012_ip = 161; continue _fun00011 }
 108:
            report = _closure1_slot21;
            zuuluu = _closure1_slot0;
            offset = _closure1_slot2;
            michal = 20;
            michal = offset[michal];
            michal = zuuluu.bind(oscard)(michal);
            zuuluu = michal.CategoryChannel;
            michal = {};
            option = option.record;
            michal['channel'] = option;
            michal['withMarginTop'] = tangon;
            entity = report.bind(oscard)(zuuluu, michal);
 161:
            return entity;
 163:
            entity = _closure1_slot26;
            report = undefined;
            entity = entity.bind(report)(golfie);
            oscard = entity.showDivider;
            yankee = entity.isCollapsed;
            zuuluu = _closure1_slot22;
            michal = _closure1_slot4;
            entity = {};
            romeon = null;
            if(!oscard) { _fun00012_ip = 236; continue _fun00011 }
 204:
            backup = _closure1_slot21;
            foxtra = _closure1_slot1;
            kiloes = _closure1_slot2;
            oscard = 29;
            oscard = kiloes[oscard];
            foxtra = foxtra.bind(report)(oscard);
            oscard = {};
            romeon = backup.bind(report)(foxtra, oscard);
 236:
            oscard = new Array(2);
            oscard[0] = romeon;
            option = null;
            if(!yankee) { _fun00012_ip = 333; continue _fun00011 }
 249:
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            offset = 20;
            offset = output[offset];
            romeon = sizing.bind(report)(offset);
            yankee = romeon.renderCategoryItem;
            offset = {};
            foxtra = 21;
            backup = output[foxtra];
            backup = sizing.bind(report)(backup);
            kiloes = backup.intl;
            backup = kiloes.string;
            foxtra = output[foxtra];
            foxtra = sizing.bind(report)(foxtra);
            foxtra = foxtra.t;
            foxtra = foxtra.V/u9Dw;
            foxtra = backup.bind(kiloes)(foxtra);
            offset['name'] = foxtra;
            option = yankee.bind(romeon)(offset);
 333:
            oscard[1] = option;
            entity['children'] = oscard;
            entity = zuuluu.bind(report)(michal, entity);
            return entity;
 349:
            oscard = _closure1_slot21;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 20;
            entity = zuuluu[entity];
            report = undefined;
            michal = michal.bind(report)(entity);
            entity = argBaz;
            if(entity) { _fun00012_ip = 459; continue _fun00011 }
 384:
            zuuluu = michal.SuggestedCategory;
            entity = {};
            option = golfie.id;
            entity['guildId'] = option;
            option = golfie.getCategoryFromSection;
            yankee = option.bind(golfie)(verify);
            verify = null;
            offset = verify == yankee;
            option = undefined;
            if(offset) { _fun00012_ip = 433; continue _fun00011 }
 423:
            offset = yankee.getShownChannelAndThreadIds;
            option = offset.bind(yankee)();
 433:
            if(!(verify == option)) { _fun00012_ip = 441; continue _fun00011 }
 437:
            option = new Array(0);
 441:
            entity['channelIds'] = option;
            entity['withMarginTop'] = tangon;
            entity = oscard.bind(report)(zuuluu, entity);
            _fun00012_ip = 487; continue _fun00011;
 459:
            zuuluu = michal.RecentlyActiveCategory;
            michal = {};
            golfie = golfie.id;
            michal['guildId'] = golfie;
            michal['withMarginTop'] = tangon;
            entity = oscard.bind(report)(zuuluu, michal);
 487:
            return entity;
 489:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 20;
            entity = offset[entity];
            option = undefined;
            zuuluu = verify.bind(option)(entity);
            michal = zuuluu.renderCategoryItem;
            entity = {};
            report = 21;
            oscard = offset[report];
            oscard = verify.bind(option)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            report = offset[report];
            report = verify.bind(option)(report);
            report = report.t;
            report = report.k8fFjo;
            report = oscard.bind(golfie)(report);
            entity['name'] = report;
            entity['withMarginTop'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['renderChannelListSectionHeader'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: getChannelListSectionHeaderSize
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = argFoo;
            verify = argBar;
            michal = _closure1_slot12;
            option = undefined;
            entity = argBaz;
            michal = michal.bind(option)(entity);
            oscard = 0;
            tangon = argCor;
            entity = 0;
            if(!tangon) { _fun00014_ip = 37; continue _fun00013 }
 33:
            entity = _closure1_slot11;
 37:
            tangon = report.favoritesSectionNumber;
            if(!(tangon !== verify)) { _fun00014_ip = 208; continue _fun00013 }
 50:
            tangon = report.recentsSectionNumber;
            if(!(tangon !== verify)) { _fun00014_ip = 208; continue _fun00013 }
 63:
            tangon = report.voiceChannelsSectionNumber;
            if(!(tangon !== verify)) { _fun00014_ip = 140; continue _fun00013 }
 73:
            golfie = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 32;
            tangon = offset[tangon];
            golfie = golfie.bind(option)(tangon);
            tangon = golfie.isNamedCategorySection;
            golfie = tangon.bind(golfie)(verify);
            tangon = 0;
            if(!golfie) { _fun00014_ip = 138; continue _fun00013 }
 109:
            golfie = report.getNamedCategoryFromSection;
            verify = golfie.bind(report)(verify);
            golfie = null;
            verify = golfie == verify;
            golfie = 0;
            if(verify) { _fun00014_ip = 135; continue _fun00013 }
 131:
            golfie = michal + entity;
 135:
            tangon = golfie;
 138:
            return tangon;
 140:
            tangon = _closure1_slot26;
            tangon = tangon.bind(option)(report);
            golfie = tangon.showDivider;
            report = tangon.isCollapsed;
            tangon = 0;
            if(!golfie) { _fun00014_ip = 196; continue _fun00013 }
 166:
            golfie = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 29;
            zuuluu = verify[zuuluu];
            zuuluu = golfie.bind(option)(zuuluu);
            zuuluu = zuuluu.DIVIDER_HEIGHT;
            tangon = oscard + zuuluu;
 196:
            zuuluu = tangon;
            if(!report) { _fun00014_ip = 206; continue _fun00013 }
 202:
            zuuluu = tangon + michal;
 206:
            return zuuluu;
 208:
            entity = michal + entity;
            return entity;
        }
    };
    zuuluu['getChannelListSectionHeaderSize'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: renderChannelListSectionFooter
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            kiloes = argFoo;
            backup = argBar;
            oscard = argCor;
            entity = null;
            michal = entity != oscard;
            option = null;
            if(!michal) { _fun00016_ip = 77; continue _fun00015 }
 20:
            report = _closure1_slot21;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 20;
            michal = tangon[michal];
            tangon = undefined;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.RedesignVoiceUserSummary;
            michal = {};
            golfie = kiloes.id;
            michal['guildId'] = golfie;
            michal['channels'] = oscard;
            option = report.bind(tangon)(zuuluu, michal);
 77:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            oscard = 31;
            zuuluu = zuuluu[oscard];
            report = undefined;
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(zuuluu !== backup)) { _fun00016_ip = 419; continue _fun00015 }
 115:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.SECTION_INDEX_GUILD_ACTIONS;
            if(!(zuuluu !== backup)) { _fun00016_ip = 419; continue _fun00015 }
 145:
            zuuluu = kiloes.favoritesSectionNumber;
            if(!(zuuluu !== backup)) { _fun00016_ip = 385; continue _fun00015 }
 158:
            zuuluu = kiloes.recentsSectionNumber;
            if(!(zuuluu !== backup)) { _fun00016_ip = 385; continue _fun00015 }
 171:
            zuuluu = kiloes.voiceChannelsSectionNumber;
            if(!(zuuluu === backup)) { _fun00016_ip = 206; continue _fun00015 }
 181:
            zuuluu = _closure1_slot27;
            tangon = zuuluu.bind(report)(kiloes, backup);
            zuuluu = tangon.render;
            yankee = tangon.lastShownChannelActive;
            if(zuuluu) { _fun00016_ip = 247; continue _fun00015 }
 206:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 32;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.isNamedCategorySection;
            tangon = zuuluu.bind(tangon)(backup);
            zuuluu = null;
            if(!tangon) { _fun00016_ip = 245; continue _fun00015 }
 242:
            zuuluu = option;
 245:
            return zuuluu;
 247:
            oscard = _closure1_slot22;
            tangon = _closure1_slot4;
            zuuluu = {};
            golfie = new Array(2);
            golfie[0] = option;
            offset = _closure1_slot21;
            verify = _closure1_slot4;
            option = {};
            romeon = _closure1_slot24;
            if(yankee) { _fun00016_ip = 290; continue _fun00015 }
 282:
            yankee = romeon.showAllVoiceChannelsButtonLastShownChannelInactive;
            _fun00016_ip = 296; continue _fun00015;
 290:
            yankee = romeon.showAllVoiceChannelsButtonLastShownChannelActive;
 296:
            option['style'] = yankee;
            foxtra = _closure1_slot21;
            romeon = _closure1_slot0;
            sizing = _closure1_slot2;
            yankee = 19;
            yankee = sizing[yankee];
            yankee = romeon.bind(report)(yankee);
            romeon = yankee.ShowAllVoiceChannelsButtonFastList;
            yankee = {};
            kiloes = kiloes.id;
            yankee['guildId'] = kiloes;
            yankee['section'] = backup;
            backup = argBaz;
            yankee['listRef'] = backup;
            yankee = foxtra.bind(report)(romeon, yankee);
            option['children'] = yankee;
            option = offset.bind(report)(verify, option);
            golfie[1] = option;
            zuuluu['children'] = golfie;
            zuuluu = oscard.bind(report)(tangon, zuuluu);
            return zuuluu;
 385:
            tangon = _closure1_slot21;
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 29;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 419:
            return entity;
        }
    };
    zuuluu['renderChannelListSectionFooter'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getChannelListSectionHasFooterDivider
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            zuuluu = argBar;
            golfie = _closure1_slot0;
            tangon = _closure1_slot2;
            oscard = 31;
            tangon = tangon[oscard];
            report = undefined;
            tangon = golfie.bind(report)(tangon);
            tangon = tangon.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(tangon !== zuuluu)) { _fun00018_ip = 102; continue _fun00017 }
 41:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = tangon.bind(report)(michal);
            michal = michal.SECTION_INDEX_GUILD_ACTIONS;
            if(!(michal !== zuuluu)) { _fun00018_ip = 102; continue _fun00017 }
 68:
            michal = entity.favoritesSectionNumber;
            if(!(michal !== zuuluu)) { _fun00018_ip = 98; continue _fun00017 }
 78:
            michal = entity.recentsSectionNumber;
            if(!(michal !== zuuluu)) { _fun00018_ip = 98; continue _fun00017 }
 88:
            entity = entity.voiceChannelsSectionNumber;
            entity = false;
            return entity;
 98:
            entity = true;
            return entity;
 102:
            entity = false;
            return entity;
        }
    };
    zuuluu['getChannelListSectionHasFooterDivider'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: getChannelListSectionFooterSize
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            michal = null;
            entity = argBaz;
            michal = michal != entity;
            entity = 0;
            golfie = 0;
            if(!michal) { _fun00020_ip = 53; continue _fun00019 }
 22:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 33;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            golfie = michal.VOICE_USER_SUMMARY_HEIGHT;
 53:
            option = _closure1_slot0;
            zuuluu = _closure1_slot2;
            verify = 31;
            zuuluu = zuuluu[verify];
            tangon = undefined;
            zuuluu = option.bind(tangon)(zuuluu);
            zuuluu = zuuluu.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(zuuluu !== report)) { _fun00020_ip = 321; continue _fun00019 }
 91:
            option = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[verify];
            zuuluu = option.bind(tangon)(zuuluu);
            zuuluu = zuuluu.SECTION_INDEX_GUILD_ACTIONS;
            if(!(zuuluu !== report)) { _fun00020_ip = 321; continue _fun00019 }
 121:
            zuuluu = oscard.favoritesSectionNumber;
            if(!(zuuluu !== report)) { _fun00020_ip = 293; continue _fun00019 }
 134:
            zuuluu = oscard.recentsSectionNumber;
            if(!(zuuluu !== report)) { _fun00020_ip = 293; continue _fun00019 }
 147:
            zuuluu = oscard.voiceChannelsSectionNumber;
            if(!(zuuluu !== report)) { _fun00020_ip = 198; continue _fun00019 }
 157:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 32;
            zuuluu = verify[zuuluu];
            option = option.bind(tangon)(zuuluu);
            zuuluu = option.isNamedCategorySection;
            option = zuuluu.bind(option)(report);
            zuuluu = 0;
            if(!option) { _fun00020_ip = 196; continue _fun00019 }
 193:
            zuuluu = golfie;
 196:
            return zuuluu;
 198:
            zuuluu = _closure1_slot27;
            zuuluu = zuuluu.bind(tangon)(oscard, report);
            oscard = zuuluu.render;
            report = zuuluu.lastShownChannelActive;
            zuuluu = golfie;
            if(!oscard) { _fun00020_ip = 291; continue _fun00019 }
 226:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            oscard = 34;
            oscard = verify[oscard];
            oscard = option.bind(tangon)(oscard);
            oscard = oscard.SMALL_BUTTON_HEIGHT;
            oscard = golfie + oscard;
            golfie = _closure1_slot24;
            if(report) { _fun00020_ip = 276; continue _fun00019 }
 263:
            report = golfie.showAllVoiceChannelsButtonLastShownChannelInactive;
            report = report.marginTop;
            _fun00020_ip = 287; continue _fun00019;
 276:
            golfie = golfie.showAllVoiceChannelsButtonLastShownChannelActive;
            report = golfie.marginTop;
 287:
            zuuluu = oscard + report;
 291:
            return zuuluu;
 293:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 29;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.DIVIDER_HEIGHT;
            return michal;
 321:
            return entity;
        }
    };
    zuuluu['getChannelListSectionFooterSize'] = tangon;
    tangon = function(argFoo) { // Original name: renderChannelListItem
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            michal = entity.guildChannels;
            tangon = entity.section;
            zuuluu = entity.row;
            yankee = entity.selectedChannelId;
            offset = entity.guild;
            oscard = _closure1_slot0;
            entity = _closure1_slot2;
            option = 31;
            entity = entity[option];
            report = undefined;
            entity = oscard.bind(report)(entity);
            entity = entity.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(entity !== tangon)) { _fun00022_ip = 1672; continue _fun00021 }
 69:
            oscard = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[option];
            entity = oscard.bind(report)(entity);
            entity = entity.SECTION_INDEX_GUILD_ACTIONS;
            if(!(entity !== tangon)) { _fun00022_ip = 908; continue _fun00021 }
 99:
            entity = {};
            entity['guildChannels'] = michal;
            entity['section'] = tangon;
            entity['row'] = zuuluu;
            entity['selectedChannelId'] = yankee;
            entity['guild'] = offset;
            tangon = entity.guildChannels;
            option = entity.section;
            oscard = entity.row;
            backup = entity.selectedChannelId;
            romeon = entity.guild;
            entity = tangon.getChannelFromSectionRow;
            verify = entity.bind(tangon)(option, oscard);
            oscard = null;
            foxtra = oscard == verify;
            entity = null;
            if(foxtra) { _fun00022_ip = 906; continue _fun00021 }
 178:
            foxtra = verify.channel;
            verify = foxtra.record;
            kiloes = verify.id;
            kiloes = kiloes === backup;
            result = _closure1_slot6;
            output = result.has;
            sizing = verify.type;
            sizing = output.bind(result)(sizing);
            oscard = null;
            if(!sizing) { _fun00022_ip = 227; continue _fun00021 }
 222:
            oscard = verify.type;
 227:
            sizing = verify.type;
            if(!(oscard !== sizing)) { _fun00022_ip = 781; continue _fun00021 }
 239:
            output = _closure1_slot0;
            oscard = _closure1_slot2;
            result = 36;
            oscard = oscard[result];
            oscard = output.bind(report)(oscard);
            oscard = oscard.ChannelTypes;
            oscard = oscard.GUILD_VOICE;
            if(!(oscard !== sizing)) { _fun00022_ip = 724; continue _fun00021 }
 278:
            output = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[result];
            oscard = output.bind(report)(oscard);
            oscard = oscard.ChannelTypes;
            oscard = oscard.GUILD_STAGE_VOICE;
            if(!(oscard !== sizing)) { _fun00022_ip = 678; continue _fun00021 }
 314:
            output = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[result];
            oscard = output.bind(report)(oscard);
            oscard = oscard.ChannelTypes;
            oscard = oscard.DM;
            if(!(oscard !== sizing)) { _fun00022_ip = 632; continue _fun00021 }
 350:
            output = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[result];
            oscard = output.bind(report)(oscard);
            oscard = oscard.ChannelTypes;
            oscard = oscard.GROUP_DM;
            if(!(oscard !== sizing)) { _fun00022_ip = 632; continue _fun00021 }
 386:
            oscard = tangon.voiceChannelsSectionNumber;
            if(!(option === oscard)) { _fun00022_ip = 412; continue _fun00021 }
 396:
            oscard = verify.isCategory;
            oscard = oscard.bind(verify)();
            if(oscard) { _fun00022_ip = 575; continue _fun00021 }
 412:
            option = tangon.id;
            oscard = _closure1_slot18;
            if(!(option !== oscard)) { _fun00022_ip = 438; continue _fun00021 }
 425:
            oscard = tangon.id;
            tangon = _closure1_slot16;
            if(!(oscard === tangon)) { _fun00022_ip = 532; continue _fun00021 }
 438:
            option = _closure1_slot7;
            oscard = option.has;
            tangon = verify.type;
            tangon = oscard.bind(option)(tangon);
            if(!tangon) { _fun00022_ip = 532; continue _fun00021 }
 460:
            option = _closure1_slot21;
            oscard = _closure1_slot1;
            sizing = _closure1_slot2;
            tangon = 35;
            tangon = sizing[tangon];
            oscard = oscard.bind(report)(tangon);
            tangon = {};
            tangon['channel'] = verify;
            tangon['selected'] = kiloes;
            sizing = foxtra.isMuted;
            tangon['muted'] = sizing;
            sizing = foxtra.subtitle;
            tangon['subtitle'] = sizing;
            sizing = false;
            tangon['isRulesChannel'] = sizing;
            tangon = option.bind(report)(oscard, tangon);
            _fun00022_ip = 573; continue _fun00021;
 532:
            sizing = _closure1_slot21;
            option = _closure1_slot1;
            output = _closure1_slot2;
            oscard = 40;
            oscard = output[oscard];
            option = option.bind(report)(oscard);
            oscard = {};
            oscard['channel'] = verify;
            oscard['selected'] = kiloes;
            tangon = sizing.bind(report)(option, oscard);
 573:
            _fun00022_ip = 624; continue _fun00021;
 575:
            sizing = _closure1_slot21;
            option = _closure1_slot0;
            output = _closure1_slot2;
            oscard = 20;
            oscard = output[oscard];
            oscard = option.bind(report)(oscard);
            option = oscard.CategoryChannel;
            oscard = {};
            oscard['channel'] = verify;
            output = true;
            oscard['withMarginTop'] = output;
            tangon = sizing.bind(report)(option, oscard);
 624:
            entity = tangon;
            _fun00022_ip = 906; continue _fun00021;
 632:
            option = _closure1_slot21;
            oscard = _closure1_slot1;
            sizing = _closure1_slot2;
            tangon = 39;
            tangon = sizing[tangon];
            oscard = oscard.bind(report)(tangon);
            tangon = {};
            tangon['channel'] = verify;
            tangon['selected'] = kiloes;
            entity = option.bind(report)(oscard, tangon);
            _fun00022_ip = 906; continue _fun00021;
 678:
            option = _closure1_slot21;
            oscard = _closure1_slot1;
            sizing = _closure1_slot2;
            tangon = 38;
            tangon = sizing[tangon];
            oscard = oscard.bind(report)(tangon);
            tangon = {};
            tangon['channel'] = verify;
            tangon['selected'] = kiloes;
            entity = option.bind(report)(oscard, tangon);
            _fun00022_ip = 906; continue _fun00021;
 724:
            option = _closure1_slot21;
            oscard = _closure1_slot1;
            sizing = _closure1_slot2;
            tangon = 37;
            tangon = sizing[tangon];
            oscard = oscard.bind(report)(tangon);
            tangon = {};
            tangon['channel'] = verify;
            tangon['selected'] = kiloes;
            sizing = foxtra.subtitle;
            tangon['subtitle'] = sizing;
            entity = option.bind(report)(oscard, tangon);
            _fun00022_ip = 906; continue _fun00021;
 781:
            option = _closure1_slot21;
            oscard = _closure1_slot1;
            sizing = _closure1_slot2;
            tangon = 35;
            tangon = sizing[tangon];
            oscard = oscard.bind(report)(tangon);
            tangon = {};
            tangon['channel'] = verify;
            tangon['selected'] = kiloes;
            kiloes = foxtra.isMuted;
            tangon['muted'] = kiloes;
            kiloes = foxtra.subtitle;
            tangon['subtitle'] = kiloes;
            romeon = romeon.rulesChannelId;
            verify = verify.id;
            verify = romeon === verify;
            tangon['isRulesChannel'] = verify;
            romeon = option.bind(report)(oscard, tangon);
            option = _closure1_slot22;
            oscard = _closure1_slot23;
            tangon = {};
            verify = new Array(2);
            verify[0] = romeon;
            romeon = _closure1_slot25;
            romeon = romeon.bind(report)(foxtra, backup);
            verify[1] = romeon;
            tangon['children'] = verify;
            entity = option.bind(report)(oscard, tangon);
 906:
            return entity;
 908:
            entity = michal.getGuildActionSection;
            tangon = entity.bind(michal)();
            entity = tangon.getRow;
            option = entity.bind(tangon)(zuuluu);
            tangon = null;
            oscard = tangon == option;
            entity = null;
            if(oscard) { _fun00022_ip = 1670; continue _fun00021 }
 943:
            oscard = _closure1_slot20;
            oscard = oscard.GUILD_ROLE_SUBSCRIPTIONS;
            if(!(oscard !== option)) { _fun00022_ip = 1615; continue _fun00021 }
 960:
            oscard = _closure1_slot20;
            oscard = oscard.GUILD_HOME;
            if(!(oscard !== option)) { _fun00022_ip = 1558; continue _fun00021 }
 977:
            oscard = _closure1_slot20;
            oscard = oscard.CHANNELS_AND_ROLES;
            if(!(oscard !== option)) { _fun00022_ip = 1478; continue _fun00021 }
 994:
            oscard = _closure1_slot20;
            oscard = oscard.GUILD_DIRECTORY;
            if(!(oscard !== option)) { _fun00022_ip = 1397; continue _fun00021 }
 1011:
            oscard = _closure1_slot20;
            oscard = oscard.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            if(!(oscard !== option)) { _fun00022_ip = 1255; continue _fun00021 }
 1028:
            oscard = _closure1_slot20;
            oscard = oscard.GUILD_HUB_HEADER_OPTIONS;
            if(!(oscard !== option)) { _fun00022_ip = 1214; continue _fun00021 }
 1045:
            oscard = _closure1_slot20;
            oscard = oscard.GUILD_SCHEDULED_EVENTS;
            entity = null;
            if(!(oscard !== option)) { _fun00022_ip = 1670; continue _fun00021 }
 1064:
            oscard = _closure1_slot20;
            oscard = oscard.GUILD_MEMBER_APPLICATIONS;
            entity = null;
            if(!(oscard !== option)) { _fun00022_ip = 1670; continue _fun00021 }
 1083:
            oscard = _closure1_slot20;
            oscard = oscard.GUILD_MOD_DASH_MEMBER_SAFETY;
            entity = null;
            if(!(oscard !== option)) { _fun00022_ip = 1670; continue _fun00021 }
 1102:
            oscard = _closure1_slot20;
            oscard = oscard.GUILD_FAVORITES;
            entity = null;
            if(!(oscard !== option)) { _fun00022_ip = 1670; continue _fun00021 }
 1121:
            oscard = _closure1_slot20;
            oscard = oscard.GUILD_CHANNEL_LIST_OPT_IN_NOTICE;
            entity = null;
            if(!(oscard !== option)) { _fun00022_ip = 1670; continue _fun00021 }
 1140:
            oscard = _closure1_slot20;
            oscard = oscard.GUILD_SHOP;
            entity = null;
            if(!(oscard !== option)) { _fun00022_ip = 1670; continue _fun00021 }
 1159:
            oscard = _closure1_slot20;
            oscard = oscard.BROWSE_CHANNELS;
            entity = null;
            if(!(oscard !== option)) { _fun00022_ip = 1670; continue _fun00021 }
 1178:
            oscard = _closure1_slot20;
            oscard = oscard.GUILD_PREMIUM_PROGRESS_BAR;
            entity = null;
            if(!(oscard !== option)) { _fun00022_ip = 1670; continue _fun00021 }
 1197:
            oscard = _closure1_slot20;
            oscard = oscard.GUILD_BOOSTS;
            entity = null;
            _fun00022_ip = 1670; continue _fun00021;
 1214:
            option = _closure1_slot21;
            oscard = _closure1_slot1;
            verify = _closure1_slot2;
            tangon = 22;
            tangon = verify[tangon];
            oscard = oscard.bind(report)(tangon);
            tangon = {};
            tangon['guild'] = offset;
            entity = option.bind(report)(oscard, tangon);
            _fun00022_ip = 1670; continue _fun00021;
 1255:
            option = _closure1_slot22;
            oscard = _closure1_slot4;
            tangon = {};
            romeon = _closure1_slot21;
            verify = {};
            foxtra = _closure1_slot24;
            foxtra = foxtra.nonChannelContainer;
            verify['style'] = foxtra;
            sizing = _closure1_slot21;
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            foxtra = 18;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(report)(foxtra);
            backup = foxtra.NewMemberActionsProgress;
            foxtra = {};
            output = offset.id;
            foxtra['guildId'] = output;
            foxtra = sizing.bind(report)(backup, foxtra);
            verify['children'] = foxtra;
            romeon = romeon.bind(report)(oscard, verify);
            verify = new Array(2);
            verify[0] = romeon;
            backup = _closure1_slot21;
            foxtra = _closure1_slot1;
            romeon = 29;
            romeon = kiloes[romeon];
            foxtra = foxtra.bind(report)(romeon);
            romeon = {};
            romeon = backup.bind(report)(foxtra, romeon);
            verify[1] = romeon;
            tangon['children'] = verify;
            entity = option.bind(report)(oscard, tangon);
            _fun00022_ip = 1670; continue _fun00021;
 1397:
            option = _closure1_slot9;
            oscard = option.getDirectoryChannelIds;
            tangon = offset.id;
            oscard = oscard.bind(option)(tangon);
            tangon = 0;
            verify = oscard[tangon];
            option = _closure1_slot21;
            oscard = _closure1_slot1;
            romeon = _closure1_slot2;
            tangon = 27;
            tangon = romeon[tangon];
            oscard = oscard.bind(report)(tangon);
            tangon = {};
            romeon = offset.id;
            tangon['guildId'] = romeon;
            verify = yankee === verify;
            tangon['selected'] = verify;
            entity = option.bind(report)(oscard, tangon);
            _fun00022_ip = 1670; continue _fun00021;
 1478:
            option = _closure1_slot21;
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 26;
            tangon = verify[tangon];
            tangon = oscard.bind(report)(tangon);
            oscard = tangon.GuildRolesAndChannelsRow;
            tangon = {};
            tangon['guild'] = offset;
            verify = _closure1_slot17;
            verify = verify.CHANNEL_BROWSER;
            verify = yankee === verify;
            if(verify) { _fun00022_ip = 1545; continue _fun00021 }
 1531:
            romeon = _closure1_slot17;
            romeon = romeon.CUSTOMIZE_COMMUNITY;
            verify = yankee === romeon;
 1545:
            tangon['selected'] = verify;
            entity = option.bind(report)(oscard, tangon);
            _fun00022_ip = 1670; continue _fun00021;
 1558:
            option = _closure1_slot21;
            oscard = _closure1_slot1;
            verify = _closure1_slot2;
            tangon = 25;
            tangon = verify[tangon];
            oscard = oscard.bind(report)(tangon);
            tangon = {};
            tangon['guild'] = offset;
            verify = _closure1_slot17;
            verify = verify.GUILD_HOME;
            verify = yankee === verify;
            tangon['selected'] = verify;
            entity = option.bind(report)(oscard, tangon);
            _fun00022_ip = 1670; continue _fun00021;
 1615:
            option = _closure1_slot21;
            oscard = _closure1_slot1;
            verify = _closure1_slot2;
            tangon = 24;
            tangon = verify[tangon];
            oscard = oscard.bind(report)(tangon);
            tangon = {};
            tangon['guild'] = offset;
            verify = _closure1_slot17;
            verify = verify.ROLE_SUBSCRIPTIONS;
            verify = yankee === verify;
            tangon['selected'] = verify;
            entity = option.bind(report)(oscard, tangon);
 1670:
            return entity;
 1672:
            entity = michal.getChannelNoticeSection;
            michal = entity.bind(michal)();
            entity = michal.getRow;
            zuuluu = entity.bind(michal)(zuuluu);
            tangon = null;
            michal = tangon == zuuluu;
            entity = null;
            if(michal) { _fun00022_ip = 1999; continue _fun00021 }
 1707:
            michal = _closure1_slot19;
            michal = michal.SPACER;
            if(!(michal !== zuuluu)) { _fun00022_ip = 1969; continue _fun00021 }
 1724:
            michal = _closure1_slot19;
            michal = michal.GUILD_PROGRESS;
            if(!(michal !== zuuluu)) { _fun00022_ip = 1897; continue _fun00021 }
 1741:
            michal = _closure1_slot19;
            michal = michal.MFA_WARNING;
            if(!(michal !== zuuluu)) { _fun00022_ip = 1829; continue _fun00021 }
 1755:
            michal = _closure1_slot19;
            michal = michal.LIVE_CHANNEL_NOTICE;
            entity = null;
            if(!(michal === zuuluu)) { _fun00022_ip = 1999; continue _fun00021 }
 1774:
            tangon = _closure1_slot21;
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 13;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            oscard = _closure1_slot24;
            oscard = oscard.liveChannelNotice;
            michal['style'] = oscard;
            michal['guild'] = offset;
            entity = tangon.bind(report)(zuuluu, michal);
            _fun00022_ip = 1999; continue _fun00021;
 1829:
            tangon = _closure1_slot21;
            zuuluu = _closure1_slot4;
            michal = {};
            oscard = _closure1_slot24;
            oscard = oscard.nonChannelContainer;
            michal['style'] = oscard;
            verify = _closure1_slot21;
            option = _closure1_slot1;
            yankee = _closure1_slot2;
            oscard = 16;
            oscard = yankee[oscard];
            option = option.bind(report)(oscard);
            oscard = {};
            oscard = verify.bind(report)(option, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
            _fun00022_ip = 1999; continue _fun00021;
 1897:
            tangon = _closure1_slot21;
            zuuluu = _closure1_slot4;
            michal = {};
            oscard = _closure1_slot24;
            oscard = oscard.nonChannelContainer;
            michal['style'] = oscard;
            verify = _closure1_slot21;
            option = _closure1_slot1;
            yankee = _closure1_slot2;
            oscard = 17;
            oscard = yankee[oscard];
            option = option.bind(report)(oscard);
            oscard = {};
            oscard['guild'] = offset;
            oscard = verify.bind(report)(option, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
            _fun00022_ip = 1999; continue _fun00021;
 1969:
            tangon = _closure1_slot21;
            zuuluu = _closure1_slot4;
            michal = {};
            oscard = {};
            golfie = _closure1_slot15;
            oscard['height'] = golfie;
            michal['style'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 1999:
            return entity;
        }
    };
    zuuluu['renderChannelListItem'] = tangon;
    tangon = function(argFoo) { // Original name: getChannelListItemSize
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildChannels;
            backup = entity.section;
            golfie = entity.row;
            report = entity.fontScale;
            michal = entity.voiceStates;
            zuuluu = entity.liveChannelNoticeHeight;
            yankee = entity.listViewportHeight;
            option = _closure1_slot0;
            entity = _closure1_slot2;
            verify = 31;
            entity = entity[verify];
            oscard = undefined;
            entity = option.bind(oscard)(entity);
            entity = entity.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(entity !== backup)) { _fun00024_ip = 1194; continue _fun00023 }
 82:
            option = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[verify];
            entity = option.bind(oscard)(entity);
            entity = entity.SECTION_INDEX_GUILD_ACTIONS;
            if(!(entity !== backup)) { _fun00024_ip = 847; continue _fun00023 }
 112:
            entity = _closure1_slot13;
            verify = entity.bind(oscard)(report);
            entity = tangon.getChannelFromSectionRow;
            option = entity.bind(tangon)(backup, golfie);
            foxtra = null;
            offset = foxtra == option;
            kiloes = 0;
            entity = 0;
            if(offset) { _fun00024_ip = 845; continue _fun00023 }
 149:
            option = option.channel;
            offset = option.record;
            output = _closure1_slot6;
            sizing = output.has;
            romeon = offset.type;
            sizing = sizing.bind(output)(romeon);
            romeon = null;
            if(!sizing) { _fun00024_ip = 189; continue _fun00023 }
 184:
            romeon = offset.type;
 189:
            sizing = offset.type;
            if(!(romeon !== sizing)) { _fun00024_ip = 831; continue _fun00023 }
 201:
            output = _closure1_slot0;
            romeon = _closure1_slot2;
            echoed = 36;
            romeon = romeon[echoed];
            romeon = output.bind(oscard)(romeon);
            romeon = romeon.ChannelTypes;
            romeon = romeon.GUILD_VOICE;
            if(!(romeon !== sizing)) { _fun00024_ip = 461; continue _fun00023 }
 240:
            output = _closure1_slot0;
            romeon = _closure1_slot2;
            romeon = romeon[echoed];
            romeon = output.bind(oscard)(romeon);
            romeon = romeon.ChannelTypes;
            romeon = romeon.GUILD_STAGE_VOICE;
            if(!(romeon !== sizing)) { _fun00024_ip = 461; continue _fun00023 }
 276:
            output = _closure1_slot0;
            romeon = _closure1_slot2;
            romeon = romeon[echoed];
            romeon = output.bind(oscard)(romeon);
            romeon = romeon.ChannelTypes;
            romeon = romeon.DM;
            entity = verify;
            if(!(romeon !== sizing)) { _fun00024_ip = 845; continue _fun00023 }
 315:
            output = _closure1_slot0;
            romeon = _closure1_slot2;
            romeon = romeon[echoed];
            romeon = output.bind(oscard)(romeon);
            romeon = romeon.ChannelTypes;
            romeon = romeon.GROUP_DM;
            entity = verify;
            if(!(romeon !== sizing)) { _fun00024_ip = 845; continue _fun00023 }
 354:
            romeon = tangon.voiceChannelsSectionNumber;
            if(!(backup === romeon)) { _fun00024_ip = 377; continue _fun00023 }
 364:
            romeon = offset.isCategory;
            romeon = romeon.bind(offset)();
            if(romeon) { _fun00024_ip = 436; continue _fun00023 }
 377:
            backup = tangon.id;
            romeon = _closure1_slot18;
            backup = backup !== romeon;
            if(!backup) { _fun00024_ip = 406; continue _fun00023 }
 393:
            sizing = tangon.id;
            romeon = _closure1_slot16;
            backup = sizing !== romeon;
 406:
            romeon = verify;
            if(backup) { _fun00024_ip = 453; continue _fun00023 }
 412:
            output = _closure1_slot7;
            sizing = output.has;
            backup = offset.type;
            backup = sizing.bind(output)(backup);
            romeon = verify;
            _fun00024_ip = 453; continue _fun00023;
 436:
            backup = _closure1_slot12;
            sizing = backup.bind(oscard)(report);
            backup = _closure1_slot11;
            romeon = sizing + backup;
 453:
            entity = romeon;
            _fun00024_ip = 845; continue _fun00023;
 461:
            romeon = option.subtitle;
            foxtra = foxtra != romeon;
            romeon = 0;
            if(!foxtra) { _fun00024_ip = 485; continue _fun00023 }
 476:
            foxtra = _closure1_slot14;
            romeon = foxtra.bind(oscard)(report);
 485:
            sizing = _closure1_slot0;
            foxtra = _closure1_slot2;
            backup = 41;
            backup = foxtra[backup];
            output = sizing.bind(oscard)(backup);
            backup = output.getVoiceUserHeight;
            result = backup.bind(output)(report);
            backup = offset.type;
            foxtra = foxtra[echoed];
            foxtra = sizing.bind(oscard)(foxtra);
            foxtra = foxtra.ChannelTypes;
            foxtra = foxtra.GUILD_STAGE_VOICE;
            if(!(backup !== foxtra)) { _fun00024_ip = 568; continue _fun00023 }
 546:
            sizing = _closure1_slot10;
            backup = sizing.countVoiceStatesForChannel;
            foxtra = offset.id;
            backup = backup.bind(sizing)(foxtra);
            _fun00024_ip = 621; continue _fun00023;
 568:
            update = _closure1_slot5;
            output = update.getParticipantCount;
            sizing = offset.id;
            source = _closure1_slot0;
            ctrled = _closure1_slot2;
            foxtra = 42;
            foxtra = ctrled[foxtra];
            foxtra = source.bind(oscard)(foxtra);
            foxtra = foxtra.StageChannelParticipantNamedIndex;
            foxtra = foxtra.SPEAKER;
            backup = output.bind(update)(sizing, foxtra);
 621:
            output = offset.type;
            sizing = _closure1_slot0;
            foxtra = _closure1_slot2;
            foxtra = foxtra[echoed];
            foxtra = sizing.bind(oscard)(foxtra);
            foxtra = foxtra.ChannelTypes;
            sizing = foxtra.GUILD_STAGE_VOICE;
            foxtra = 0;
            if(!(output === sizing)) { _fun00024_ip = 754; continue _fun00023 }
 661:
            echoed = _closure1_slot5;
            output = echoed.getParticipantCount;
            sizing = offset.id;
            update = _closure1_slot0;
            source = _closure1_slot2;
            offset = 42;
            offset = source[offset];
            offset = update.bind(oscard)(offset);
            offset = offset.StageChannelParticipantNamedIndex;
            offset = offset.AUDIENCE;
            offset = output.bind(echoed)(sizing, offset);
            offset = offset > kiloes;
            foxtra = 0;
            if(!offset) { _fun00024_ip = 754; continue _fun00023 }
 723:
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            offset = 43;
            offset = output[offset];
            sizing = sizing.bind(oscard)(offset);
            offset = sizing.getAudienceItemHeight;
            foxtra = offset.bind(sizing)(report);
 754:
            offset = verify;
            if(!(backup > kiloes)) { _fun00024_ip = 826; continue _fun00023 }
 761:
            echoed = verify + romeon;
            kiloes = _closure1_slot0;
            sizing = _closure1_slot2;
            romeon = 37;
            output = sizing[romeon];
            output = kiloes.bind(oscard)(output);
            output = output.VOICE_USERS_MARGIN_TOP;
            output = echoed + output;
            backup = result * backup;
            backup = output + backup;
            romeon = sizing[romeon];
            romeon = kiloes.bind(oscard)(romeon);
            romeon = romeon.VOICE_USERS_MARGIN_BOTTOM;
            romeon = backup + romeon;
            offset = romeon + foxtra;
 826:
            entity = offset;
            _fun00024_ip = 845; continue _fun00023;
 831:
            option = option.threadCount;
            option = option * verify;
            entity = verify + option;
 845:
            return entity;
 847:
            entity = tangon.getGuildActionSection;
            option = entity.bind(tangon)();
            entity = option.getRow;
            offset = entity.bind(option)(golfie);
            entity = null;
            verify = entity == offset;
            entity = 0;
            if(verify) { _fun00024_ip = 1192; continue _fun00023 }
 882:
            verify = _closure1_slot13;
            romeon = verify.bind(oscard)(report);
            verify = _closure1_slot20;
            verify = verify.GUILD_ROLE_SUBSCRIPTIONS;
            entity = romeon;
            if(!(verify !== offset)) { _fun00024_ip = 1192; continue _fun00023 }
 911:
            verify = _closure1_slot20;
            verify = verify.GUILD_HOME;
            entity = romeon;
            if(!(verify !== offset)) { _fun00024_ip = 1192; continue _fun00023 }
 931:
            verify = _closure1_slot20;
            verify = verify.CHANNELS_AND_ROLES;
            entity = romeon;
            if(!(verify !== offset)) { _fun00024_ip = 1192; continue _fun00023 }
 951:
            verify = _closure1_slot20;
            verify = verify.GUILD_DIRECTORY;
            entity = romeon;
            if(!(verify !== offset)) { _fun00024_ip = 1192; continue _fun00023 }
 971:
            verify = _closure1_slot20;
            verify = verify.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            if(!(verify !== offset)) { _fun00024_ip = 1159; continue _fun00023 }
 988:
            verify = _closure1_slot20;
            verify = verify.GUILD_HUB_HEADER_OPTIONS;
            entity = yankee;
            if(!(verify !== offset)) { _fun00024_ip = 1192; continue _fun00023 }
 1008:
            verify = _closure1_slot20;
            verify = verify.GUILD_SCHEDULED_EVENTS;
            entity = 0;
            if(!(verify !== offset)) { _fun00024_ip = 1192; continue _fun00023 }
 1027:
            verify = _closure1_slot20;
            verify = verify.GUILD_MEMBER_APPLICATIONS;
            entity = 0;
            if(!(verify !== offset)) { _fun00024_ip = 1192; continue _fun00023 }
 1046:
            verify = _closure1_slot20;
            verify = verify.GUILD_MOD_DASH_MEMBER_SAFETY;
            entity = 0;
            if(!(verify !== offset)) { _fun00024_ip = 1192; continue _fun00023 }
 1065:
            verify = _closure1_slot20;
            verify = verify.GUILD_FAVORITES;
            entity = 0;
            if(!(verify !== offset)) { _fun00024_ip = 1192; continue _fun00023 }
 1081:
            verify = _closure1_slot20;
            verify = verify.GUILD_CHANNEL_LIST_OPT_IN_NOTICE;
            entity = 0;
            if(!(verify !== offset)) { _fun00024_ip = 1192; continue _fun00023 }
 1097:
            verify = _closure1_slot20;
            verify = verify.GUILD_SHOP;
            entity = 0;
            if(!(verify !== offset)) { _fun00024_ip = 1192; continue _fun00023 }
 1113:
            verify = _closure1_slot20;
            verify = verify.BROWSE_CHANNELS;
            entity = 0;
            if(!(verify !== offset)) { _fun00024_ip = 1192; continue _fun00023 }
 1129:
            verify = _closure1_slot20;
            verify = verify.GUILD_PREMIUM_PROGRESS_BAR;
            entity = 0;
            if(!(verify !== offset)) { _fun00024_ip = 1192; continue _fun00023 }
 1145:
            verify = _closure1_slot20;
            verify = verify.GUILD_BOOSTS;
            entity = 0;
            _fun00024_ip = 1192; continue _fun00023;
 1159:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            option = 29;
            option = offset[option];
            option = verify.bind(oscard)(option);
            verify = option.DIVIDER_HEIGHT;
            option = 48;
            entity = option + verify;
 1192:
            return entity;
 1194:
            entity = tangon.getChannelNoticeSection;
            tangon = entity.bind(tangon)();
            entity = tangon.getRow;
            golfie = entity.bind(tangon)(golfie);
            entity = null;
            tangon = entity == golfie;
            entity = 0;
            if(tangon) { _fun00024_ip = 1362; continue _fun00023 }
 1229:
            tangon = _closure1_slot19;
            tangon = tangon.SPACER;
            if(!(tangon !== golfie)) { _fun00024_ip = 1358; continue _fun00023 }
 1243:
            tangon = _closure1_slot19;
            tangon = tangon.GUILD_PROGRESS;
            if(!(tangon !== golfie)) { _fun00024_ip = 1325; continue _fun00023 }
 1257:
            tangon = _closure1_slot19;
            tangon = tangon.MFA_WARNING;
            if(!(tangon !== golfie)) { _fun00024_ip = 1292; continue _fun00023 }
 1271:
            tangon = _closure1_slot19;
            tangon = tangon.LIVE_CHANNEL_NOTICE;
            entity = 0;
            if(!(tangon === golfie)) { _fun00024_ip = 1362; continue _fun00023 }
 1287:
            entity = zuuluu;
            _fun00024_ip = 1362; continue _fun00023;
 1292:
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 16;
            zuuluu = golfie[zuuluu];
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.getScaledGuildMFAWarningHeight;
            entity = zuuluu.bind(tangon)(report);
            _fun00024_ip = 1362; continue _fun00023;
 1325:
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 17;
            zuuluu = golfie[zuuluu];
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.getScaledGuildProgressButtonHeight;
            entity = zuuluu.bind(tangon)(report);
            _fun00024_ip = 1362; continue _fun00023;
 1358:
            entity = _closure1_slot15;
 1362:
            return entity;
        }
    };
    zuuluu['getChannelListItemSize'] = tangon;
    michal = function(argFoo) { // Original name: calculateVoiceSummary
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            offset = entity.guildChannels;
            option = entity.section;
            yankee = entity.optInChannelsEnabled;
            report = entity.voiceStates;
            golfie = entity.selectedChannelId;
            oscard = entity.selectedVoiceChannelId;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 32;
            entity = tangon[entity];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.isVoiceChannelsSection;
            entity = entity.bind(zuuluu)(option, offset);
            if(entity) { _fun00026_ip = 112; continue _fun00025 }
 78:
            zuuluu = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 31;
            entity = verify[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.SECTION_INDEX_FIRST_NAMED_CATEGORY;
            if(!(option < entity)) { _fun00026_ip = 112; continue _fun00025 }
 108:
            entity = null;
            return entity;
 112:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            verify = 44;
            entity = entity[verify];
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.getSectionFooterConfig;
            entity = entity.bind(zuuluu)(offset, yankee, option);
            zuuluu = entity.canHaveVoiceSummary;
            entity = null;
            if(zuuluu) { _fun00026_ip = 158; continue _fun00025 }
 156:
            return entity;
 158:
            zuuluu = offset.getNamedCategoryFromSection;
            option = zuuluu.bind(offset)(option);
            if(!(entity != option)) { _fun00026_ip = 240; continue _fun00025 }
 173:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[verify];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.getSectionFooterActiveVoiceChannels;
            michal = {};
            michal['category'] = option;
            michal['selectedChannelId'] = golfie;
            michal['selectedVoiceChannelId'] = oscard;
            michal['voiceStates'] = report;
            zuuluu = zuuluu.bind(tangon)(michal);
            report = zuuluu.length;
            tangon = 0;
            michal = null;
            if(!(tangon !== report)) { _fun00026_ip = 238; continue _fun00025 }
 235:
            michal = zuuluu;
 238:
            return michal;
 240:
            return entity;
        }
    };
    zuuluu['calculateVoiceSummary'] = michal;
    return entity;
})();