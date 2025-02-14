// app/modules/channel_list_v2/native/renderRedesignChannelListItem.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    verify = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: renderThreads
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = argBar;
        var _closure2_slot1 = zulu;
        zulu = mike.threadIds;
        mike = zulu.map;
        entity = function(argFoo, argBar) {
            _fun115629: for(var _fun115629_ip = 0; ; ) switch(_fun115629_ip) {
 0:
                oscar = argFoo;
                zulu = _closure1_slot8;
                entity = zulu.getChannel;
                verify = entity.bind(zulu)(oscar);
                entity = null;
                zulu = entity == verify;
                if(zulu) { _fun115629_ip = 128; continue _fun115629 }
 29:
                report = _closure1_slot21;
                tango = _closure1_slot4;
                zulu = {};
                options = _closure1_slot1;
                golf = _closure1_slot2;
                mike = 28;
                golf = golf[mike];
                mike = undefined;
                options = options.bind(mike)(golf);
                golf = {};
                golf['channel'] = verify;
                golf['threadId'] = oscar;
                verify = argBar;
                golf['threadIndex'] = verify;
                offset = _closure2_slot0;
                offset = offset.threadCount;
                golf['threadCount'] = offset;
                verify = _closure2_slot1;
                verify = verify === oscar;
                golf['selected'] = verify;
                golf = report.bind(mike)(options, golf);
                zulu['children'] = golf;
                entity = report.bind(mike)(tango, zulu, oscar);
 128:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo) { // Original name: calculateVoiceChannelHeaderInfo
        _fun115630: for(var _fun115630_ip = 0; ; ) switch(_fun115630_ip) {
 0:
            zulu = argFoo;
            mike = zulu.getCategoryFromSection;
            entity = zulu.voiceChannelsSectionNumber;
            tango = mike.bind(zulu)(entity);
            entity = null;
            report = entity == tango;
            if(report) { _fun115630_ip = 39; continue _fun115630 }
 29:
            entity = tango.isEmpty;
            report = entity.bind(tango)();
 39:
            zulu = false;
            mike = false;
            if(report) { _fun115630_ip = 64; continue _fun115630 }
 46:
            tango = tango.isCollapsed;
            entity = false;
            if(!tango) { _fun115630_ip = 59; continue _fun115630 }
 57:
            entity = true;
 59:
            zulu = true;
            mike = entity;
 64:
            entity = {};
            entity['showDivider'] = zulu;
            entity['isCollapsed'] = mike;
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo, argBar) { // Original name: calculateVoiceChannelButtonInfo
        _fun115631: for(var _fun115631_ip = 0; ; ) switch(_fun115631_ip) {
 0:
            zulu = argFoo;
            mike = zulu.getCategoryFromSection;
            entity = argBar;
            mike = mike.bind(zulu)(entity);
            entity = null;
            if(!(entity != mike)) { _fun115631_ip = 57; continue _fun115631 }
 23:
            entity = mike.getHiddenChannelIds;
            entity = entity.bind(mike)();
            entity = entity.length;
            zulu = 0;
            if(!(!(entity > zulu))) { _fun115631_ip = 73; continue _fun115631 }
 44:
            entity = mike.isEmpty;
            entity = entity.bind(mike)();
            if(!entity) { _fun115631_ip = 73; continue _fun115631 }
 57:
            entity = {'render': false, 'lastShownChannelActive': false};
            return entity;
 73:
            entity = mike.getShownChannelIds;
            entity = entity.bind(mike)();
            tango = entity.length;
            entity = mike.getShownChannelIds;
            mike = entity.bind(mike)();
            entity = 1;
            entity = tango - entity;
            report = mike[entity];
            entity = {};
            mike = true;
            entity['render'] = mike;
            tango = _closure1_slot10;
            mike = tango.countVoiceStatesForChannel;
            mike = mike.bind(tango)(report);
            mike = mike > zulu;
            entity['lastShownChannelActive'] = mike;
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.THREADED_CHANNEL_TYPES;
    var _closure1_slot6 = golf;
    tango = tango.THREAD_CHANNEL_TYPES;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.CATEGORY_MARGIN_TOP;
    var _closure1_slot11 = golf;
    golf = tango.getScaledCategoryRowHeight;
    var _closure1_slot12 = golf;
    golf = tango.getScaledChannelRowHeight;
    var _closure1_slot13 = golf;
    golf = tango.getScaledChannelSubtitleHeight;
    var _closure1_slot14 = golf;
    tango = tango.STICKY_HEADER_MARGIN_BOTTOM;
    var _closure1_slot15 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.FAVORITES;
    var _closure1_slot16 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.StaticChannelRoute;
    var _closure1_slot17 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.FAVORITES_RAW_GUILD_ID;
    var _closure1_slot18 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.ChannelListChannelNoticeRow;
    var _closure1_slot19 = golf;
    tango = tango.ChannelListGuildActionRow;
    var _closure1_slot20 = tango;
    tango = 12;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot21 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsxs;
    var _closure1_slot22 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot23 = tango;
    tango = {};
    golf = {};
    offset = 16;
    golf['marginHorizontal'] = offset;
    tango['nonChannelContainer'] = golf;
    golf = {};
    options = 13;
    yankee = oscar[options];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.LIVE_CHANNEL_NOTICE_MARGIN_TOP;
    golf['marginTop'] = yankee;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM;
    golf['marginBottom'] = options;
    golf['marginHorizontal'] = offset;
    tango['liveChannelNotice'] = golf;
    golf = {};
    golf['marginHorizontal'] = offset;
    options = 14;
    yankee = oscar[options];
    yankee = verify.bind(entity)(yankee);
    yankee = yankee.spacing;
    yankee = yankee.PX_16;
    golf['marginTop'] = yankee;
    tango['showAllVoiceChannelsButtonLastShownChannelActive'] = golf;
    golf = {};
    golf['marginHorizontal'] = offset;
    options = oscar[options];
    options = verify.bind(entity)(options);
    options = options.spacing;
    options = options.PX_8;
    golf['marginTop'] = options;
    tango['showAllVoiceChannelsButtonLastShownChannelInactive'] = golf;
    var _closure1_slot24 = tango;
    tango = 45;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel_list_v2/native/renderRedesignChannelListItem.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useRenderChannelListItem
        mike = argFoo;
        golf = mike.recentlyActiveSectionEnabled;
        var _closure2_slot0 = golf;
        oscar = mike.guildChannels;
        var _closure2_slot1 = oscar;
        options = mike.guild;
        var _closure2_slot2 = options;
        report = mike.listRef;
        var _closure2_slot3 = report;
        tango = _closure1_slot3;
        zulu = tango.useCallback;
        mike = new Array(5);
        mike[0] = options;
        mike[1] = golf;
        golf = oscar.voiceChannelsSectionNumber;
        mike[2] = golf;
        oscar = oscar.id;
        mike[3] = oscar;
        mike[4] = report;
        entity = function(argFoo) {
            _fun115633: for(var _fun115633_ip = 0; ; ) switch(_fun115633_ip) {
 0:
                entity = argFoo;
                verify = entity.item;
                zulu = verify.kind;
                entity = 'newPanelsListHeader';
                if(!(entity !== zulu)) { _fun115633_ip = 2083; continue _fun115633 }
 26:
                entity = 'liveChannelNotice';
                if(!(entity !== zulu)) { _fun115633_ip = 1977; continue _fun115633 }
 37:
                entity = 'mfaWarning';
                if(!(entity !== zulu)) { _fun115633_ip = 1907; continue _fun115633 }
 50:
                entity = 'guildProgress';
                if(!(entity !== zulu)) { _fun115633_ip = 1823; continue _fun115633 }
 63:
                entity = 'newMemberActions';
                if(!(entity !== zulu)) { _fun115633_ip = 1728; continue _fun115633 }
 74:
                entity = 'showAllVoiceChannelsButton';
                if(!(entity !== zulu)) { _fun115633_ip = 1602; continue _fun115633 }
 87:
                entity = 'sectionHeaderRecentlyVisited';
                if(!(entity !== zulu)) { _fun115633_ip = 1497; continue _fun115633 }
 100:
                entity = 'sectionHeaderFavorites';
                if(!(entity !== zulu)) { _fun115633_ip = 1392; continue _fun115633 }
 113:
                entity = 'sectionHeaderRecents';
                if(!(entity !== zulu)) { _fun115633_ip = 1256; continue _fun115633 }
 126:
                entity = 'sectionHeaderCategory';
                if(!(entity !== zulu)) { _fun115633_ip = 1182; continue _fun115633 }
 139:
                entity = 'sectionHeaderVoiceChannels';
                if(!(entity !== zulu)) { _fun115633_ip = 1091; continue _fun115633 }
 152:
                mike = _closure1_slot20;
                mike = mike.GUILD_HUB_HEADER_OPTIONS;
                if(!(mike !== zulu)) { _fun115633_ip = 1037; continue _fun115633 }
 172:
                mike = _closure1_slot20;
                mike = mike.GUILD_SCHEDULED_EVENTS;
                if(!(mike !== zulu)) { _fun115633_ip = 990; continue _fun115633 }
 189:
                mike = _closure1_slot20;
                mike = mike.GUILD_ROLE_SUBSCRIPTIONS;
                if(!(mike !== zulu)) { _fun115633_ip = 932; continue _fun115633 }
 206:
                mike = _closure1_slot20;
                mike = mike.GUILD_HOME;
                if(!(mike !== zulu)) { _fun115633_ip = 874; continue _fun115633 }
 223:
                mike = _closure1_slot20;
                mike = mike.CHANNELS_AND_ROLES;
                if(!(mike !== zulu)) { _fun115633_ip = 810; continue _fun115633 }
 240:
                mike = _closure1_slot20;
                mike = mike.GUILD_DIRECTORY;
                if(!(mike !== zulu)) { _fun115633_ip = 747; continue _fun115633 }
 257:
                mike = 'channel';
                if(!(mike !== zulu)) { _fun115633_ip = 521; continue _fun115633 }
 268:
                mike = 'thread';
                if(!(mike !== zulu)) { _fun115633_ip = 408; continue _fun115633 }
 279:
                mike = 'sectionFooterSeparator';
                if(!(mike !== zulu)) { _fun115633_ip = 372; continue _fun115633 }
 289:
                mike = 'sectionFooterVoice';
                if(!(mike !== zulu)) { _fun115633_ip = 303; continue _fun115633 }
 299:
                mike = null;
                return mike;
 303:
                report = _closure1_slot21;
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 20;
                mike = tango[mike];
                tango = undefined;
                mike = zulu.bind(tango)(mike);
                zulu = mike.RedesignVoiceUserSummary;
                mike = {};
                oscar = _closure2_slot2;
                oscar = oscar.id;
                mike['guildId'] = oscar;
                oscar = verify.activeVoiceChannels;
                mike['channels'] = oscar;
                mike = report.bind(tango)(zulu, mike);
                return mike;
 372:
                report = _closure1_slot21;
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 29;
                mike = tango[mike];
                tango = undefined;
                zulu = zulu.bind(tango)(mike);
                mike = {};
                mike = report.bind(tango)(zulu, mike);
                return mike;
 408:
                tango = _closure1_slot8;
                zulu = tango.getChannel;
                mike = verify.threadId;
                golf = zulu.bind(tango)(mike);
                mike = null;
                zulu = mike == golf;
                if(zulu) { _fun115633_ip = 519; continue _fun115633 }
 437:
                oscar = _closure1_slot21;
                tango = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 28;
                zulu = report[zulu];
                report = undefined;
                tango = tango.bind(report)(zulu);
                zulu = {};
                zulu['channel'] = golf;
                golf = verify.threadId;
                zulu['threadId'] = golf;
                golf = verify.threadIndex;
                zulu['threadIndex'] = golf;
                golf = verify.threadCount;
                zulu['threadCount'] = golf;
                golf = verify.selected;
                zulu['selected'] = golf;
                mike = oscar.bind(report)(tango, zulu);
 519:
                return mike;
 521:
                zulu = verify.channel;
                mike = zulu.isCategory;
                mike = mike.bind(zulu)();
                if(!mike) { _fun115633_ip = 564; continue _fun115633 }
 539:
                zulu = verify.section;
                mike = _closure2_slot1;
                mike = mike.voiceChannelsSectionNumber;
                if(!(zulu !== mike)) { _fun115633_ip = 689; continue _fun115633 }
 564:
                tango = _closure1_slot21;
                zulu = _closure1_slot0;
                report = _closure1_slot2;
                mike = 20;
                mike = report[mike];
                oscar = undefined;
                mike = zulu.bind(oscar)(mike);
                zulu = mike.RedesignChannelItem;
                mike = {};
                mike['item'] = verify;
                report = _closure2_slot2;
                mike['guild'] = report;
                golf = tango.bind(oscar)(zulu, mike);
                zulu = verify.needsJumpAndHighlight;
                mike = golf;
                if(!zulu) { _fun115633_ip = 687; continue _fun115633 }
 631:
                report = _closure1_slot21;
                tango = _closure1_slot0;
                options = _closure1_slot2;
                zulu = 15;
                zulu = options[zulu];
                zulu = tango.bind(oscar)(zulu);
                tango = zulu.ChannelHighlight;
                zulu = {};
                options = verify.channel;
                options = options.id;
                zulu['channelId'] = options;
                zulu['children'] = golf;
                mike = report.bind(oscar)(tango, zulu);
 687:
                return mike;
 689:
                report = _closure1_slot21;
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 20;
                mike = tango[mike];
                tango = undefined;
                mike = zulu.bind(tango)(mike);
                zulu = mike.CategoryChannel;
                mike = {};
                oscar = verify.channel;
                mike['channel'] = oscar;
                oscar = true;
                mike['withMarginTop'] = oscar;
                mike = report.bind(tango)(zulu, mike);
                return mike;
 747:
                report = _closure1_slot21;
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 27;
                mike = tango[mike];
                tango = undefined;
                zulu = zulu.bind(tango)(mike);
                mike = {};
                oscar = _closure2_slot2;
                oscar = oscar.id;
                mike['guildId'] = oscar;
                oscar = verify.selected;
                mike['selected'] = oscar;
                mike = report.bind(tango)(zulu, mike);
                return mike;
 810:
                report = _closure1_slot21;
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 26;
                mike = tango[mike];
                tango = undefined;
                mike = zulu.bind(tango)(mike);
                zulu = mike.GuildRolesAndChannelsRow;
                mike = {};
                oscar = _closure2_slot2;
                mike['guild'] = oscar;
                oscar = verify.selected;
                mike['selected'] = oscar;
                mike = report.bind(tango)(zulu, mike);
                return mike;
 874:
                report = _closure1_slot21;
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 25;
                mike = tango[mike];
                tango = undefined;
                zulu = zulu.bind(tango)(mike);
                mike = {};
                oscar = _closure2_slot2;
                mike['guild'] = oscar;
                oscar = verify.selected;
                mike['selected'] = oscar;
                mike = report.bind(tango)(zulu, mike);
                return mike;
 932:
                report = _closure1_slot21;
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 24;
                mike = tango[mike];
                tango = undefined;
                zulu = zulu.bind(tango)(mike);
                mike = {};
                oscar = _closure2_slot2;
                mike['guild'] = oscar;
                oscar = verify.selected;
                mike['selected'] = oscar;
                mike = report.bind(tango)(zulu, mike);
                return mike;
 990:
                report = _closure1_slot21;
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 23;
                mike = tango[mike];
                tango = undefined;
                zulu = zulu.bind(tango)(mike);
                mike = {};
                oscar = _closure2_slot2;
                mike['guild'] = oscar;
                mike = report.bind(tango)(zulu, mike);
                return mike;
 1037:
                tango = _closure1_slot21;
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 22;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                report = _closure2_slot2;
                entity['guild'] = report;
                report = true;
                entity['flashList'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
 1091:
                options = _closure1_slot0;
                offset = _closure1_slot2;
                entity = 20;
                entity = offset[entity];
                golf = undefined;
                zulu = options.bind(golf)(entity);
                mike = zulu.renderCategoryItem;
                entity = {};
                tango = 21;
                report = offset[tango];
                report = options.bind(golf)(report);
                oscar = report.intl;
                report = oscar.string;
                tango = offset[tango];
                tango = options.bind(golf)(tango);
                tango = tango.t;
                tango = tango.V/u9Dw;
                tango = report.bind(oscar)(tango);
                entity['name'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
 1182:
                tango = _closure1_slot21;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 20;
                entity = zulu[entity];
                zulu = undefined;
                entity = mike.bind(zulu)(entity);
                mike = entity.CategoryChannel;
                entity = {};
                report = verify.category;
                report = report.record;
                entity['channel'] = report;
                report = verify.isFirstCategory;
                report = !report;
                entity['withMarginTop'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
 1256:
                entity = _closure2_slot0;
                report = _closure1_slot21;
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 20;
                mike = tango[mike];
                tango = undefined;
                mike = zulu.bind(tango)(mike);
                if(entity) { _fun115633_ip = 1349; continue _fun115633 }
 1295:
                zulu = mike.SuggestedCategory;
                entity = {};
                golf = _closure2_slot1;
                golf = golf.id;
                entity['guildId'] = golf;
                golf = verify.channelIds;
                entity['channelIds'] = golf;
                golf = verify.isFirstCategory;
                golf = !golf;
                entity['withMarginTop'] = golf;
                entity = report.bind(tango)(zulu, entity);
                _fun115633_ip = 1390; continue _fun115633;
 1349:
                zulu = mike.RecentlyActiveCategory;
                mike = {};
                oscar = _closure2_slot1;
                oscar = oscar.id;
                mike['guildId'] = oscar;
                oscar = verify.isFirstCategory;
                oscar = !oscar;
                mike['withMarginTop'] = oscar;
                entity = report.bind(tango)(zulu, mike);
 1390:
                return entity;
 1392:
                options = _closure1_slot0;
                offset = _closure1_slot2;
                entity = 20;
                entity = offset[entity];
                golf = undefined;
                zulu = options.bind(golf)(entity);
                mike = zulu.renderCategoryItem;
                entity = {};
                tango = 21;
                report = offset[tango];
                report = options.bind(golf)(report);
                oscar = report.intl;
                report = oscar.string;
                tango = offset[tango];
                tango = options.bind(golf)(tango);
                tango = tango.t;
                tango = tango.k8fFjo;
                tango = report.bind(oscar)(tango);
                entity['name'] = tango;
                tango = verify.isFirstCategory;
                tango = !tango;
                entity['withMarginTop'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
 1497:
                options = _closure1_slot0;
                offset = _closure1_slot2;
                entity = 20;
                entity = offset[entity];
                golf = undefined;
                zulu = options.bind(golf)(entity);
                mike = zulu.renderCategoryItem;
                entity = {};
                tango = 21;
                report = offset[tango];
                report = options.bind(golf)(report);
                oscar = report.intl;
                report = oscar.string;
                tango = offset[tango];
                tango = options.bind(golf)(tango);
                tango = tango.t;
                tango = tango.pd7oXF;
                tango = report.bind(oscar)(tango);
                entity['name'] = tango;
                tango = verify.isFirstCategory;
                tango = !tango;
                entity['withMarginTop'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
 1602:
                tango = _closure1_slot21;
                zulu = _closure1_slot4;
                mike = {};
                report = {};
                golf = 16;
                report['marginHorizontal'] = golf;
                options = verify.isLastShownChannelActive;
                oscar = 8;
                if(!options) { _fun115633_ip = 1640; continue _fun115633 }
 1637:
                oscar = golf;
 1640:
                report['marginTop'] = oscar;
                mike['style'] = report;
                golf = _closure1_slot21;
                oscar = _closure1_slot1;
                report = _closure1_slot2;
                entity = 19;
                report = report[entity];
                entity = undefined;
                oscar = oscar.bind(entity)(report);
                report = {};
                offset = _closure2_slot2;
                offset = offset.id;
                report['guildId'] = offset;
                verify = verify.index;
                report['index'] = verify;
                options = _closure2_slot3;
                report['listRef'] = options;
                report = golf.bind(entity)(oscar, report);
                mike['children'] = report;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
 1728:
                tango = _closure1_slot21;
                zulu = _closure1_slot4;
                mike = {};
                report = {};
                oscar = 16;
                report['marginHorizontal'] = oscar;
                mike['style'] = report;
                golf = _closure1_slot21;
                oscar = _closure1_slot0;
                report = _closure1_slot2;
                entity = 18;
                report = report[entity];
                entity = undefined;
                report = oscar.bind(entity)(report);
                oscar = report.NewMemberActionsProgress;
                report = {};
                options = _closure2_slot2;
                options = options.id;
                report['guildId'] = options;
                report = golf.bind(entity)(oscar, report);
                mike['children'] = report;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
 1823:
                tango = _closure1_slot21;
                zulu = _closure1_slot4;
                mike = {};
                report = {};
                oscar = 16;
                report['marginHorizontal'] = oscar;
                mike['style'] = report;
                golf = _closure1_slot21;
                oscar = _closure1_slot1;
                report = _closure1_slot2;
                entity = 17;
                report = report[entity];
                entity = undefined;
                oscar = oscar.bind(entity)(report);
                report = {};
                options = _closure2_slot2;
                report['guild'] = options;
                report = golf.bind(entity)(oscar, report);
                mike['children'] = report;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
 1907:
                tango = _closure1_slot21;
                zulu = _closure1_slot4;
                mike = {};
                oscar = {};
                report = 16;
                oscar['marginHorizontal'] = report;
                mike['style'] = oscar;
                golf = _closure1_slot21;
                oscar = _closure1_slot1;
                entity = _closure1_slot2;
                report = entity[report];
                entity = undefined;
                oscar = oscar.bind(entity)(report);
                report = {};
                report = golf.bind(entity)(oscar, report);
                mike['children'] = report;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
 1977:
                tango = _closure1_slot21;
                mike = _closure1_slot1;
                options = _closure1_slot2;
                oscar = 13;
                entity = options[oscar];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                report = {};
                golf = _closure1_slot0;
                verify = options[oscar];
                verify = golf.bind(zulu)(verify);
                verify = verify.LIVE_CHANNEL_NOTICE_MARGIN_TOP;
                report['marginTop'] = verify;
                oscar = options[oscar];
                oscar = golf.bind(zulu)(oscar);
                oscar = oscar.LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM;
                report['marginBottom'] = oscar;
                oscar = 16;
                report['marginHorizontal'] = oscar;
                entity['style'] = report;
                report = _closure2_slot2;
                entity['guild'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
 2083:
                tango = _closure1_slot21;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 15;
                entity = zulu[entity];
                zulu = undefined;
                entity = mike.bind(zulu)(entity);
                mike = entity.GuildSearchAndInvite;
                entity = {};
                report = _closure2_slot2;
                entity['guild'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useRenderChannelListItem'] = tango;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: getFastListRecyclerKey
        _fun115634: for(var _fun115634_ip = 0; ; ) switch(_fun115634_ip) {
 0:
            mike = argFoo;
            report = argBar;
            options = argBaz;
            oscar = argCorge;
            golf = _closure1_slot0;
            entity = _closure1_slot2;
            verify = 30;
            zulu = entity[verify];
            entity = undefined;
            zulu = golf.bind(entity)(zulu);
            zulu = zulu.FastListItemTypes;
            zulu = zulu.ITEM;
            if(!(report !== zulu)) { _fun115634_ip = 125; continue _fun115634 }
 53:
            golf = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[verify];
            zulu = golf.bind(entity)(zulu);
            zulu = zulu.FastListItemTypes;
            zulu = zulu.SECTION;
            if(!(report !== zulu)) { _fun115634_ip = 88; continue _fun115634 }
 86:
            return entity;
 88:
            verify = mike.id;
            zulu = global;
            zulu = zulu.HermesInternal;
            golf = zulu.concat;
            report = '';
            zulu = ':SECTION:';
            zulu = golf.bind(report)(verify, zulu, options);
            return zulu;
 125:
            zulu = null;
            if(!(zulu != oscar)) { _fun115634_ip = 329; continue _fun115634 }
 134:
            verify = _closure1_slot0;
            report = _closure1_slot2;
            golf = 31;
            report = report[golf];
            report = verify.bind(entity)(report);
            report = report.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(report !== options)) { _fun115634_ip = 256; continue _fun115634 }
 164:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            tango = tango[golf];
            tango = report.bind(entity)(tango);
            tango = tango.SECTION_INDEX_GUILD_ACTIONS;
            if(!(tango !== options)) { _fun115634_ip = 233; continue _fun115634 }
 191:
            tango = mike.getChannelFromSectionRow;
            tango = tango.bind(mike)(options, oscar);
            report = zulu == tango;
            golf = undefined;
            if(report) { _fun115634_ip = 231; continue _fun115634 }
 212:
            tango = tango.channel;
            report = zulu == tango;
            golf = undefined;
            if(report) { _fun115634_ip = 231; continue _fun115634 }
 226:
            golf = tango.id;
 231:
            _fun115634_ip = 277; continue _fun115634;
 233:
            tango = mike.getGuildActionSection;
            report = tango.bind(mike)();
            tango = report.getRow;
            golf = tango.bind(report)(oscar);
            _fun115634_ip = 277; continue _fun115634;
 256:
            tango = mike.getChannelNoticeSection;
            report = tango.bind(mike)();
            tango = report.getRow;
            golf = tango.bind(report)(oscar);
 277:
            if(!(zulu != golf)) { _fun115634_ip = 327; continue _fun115634 }
 281:
            backup = mike.id;
            mike = global;
            mike = mike.HermesInternal;
            report = mike.concat;
            kilo = '';
            foxtrot = ':SECTION:';
            yankee = ':ITEM:';
            romeo = options;
            offset = golf;
            mike = kilo[report](backup, foxtrot, romeo, yankee, offset, verify);
            return mike;
 327:
            return entity;
 329:
            return entity;
        }
    };
    zulu['getFastListRecyclerKey'] = tango;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: renderChannelListSectionHeader
        _fun115635: for(var _fun115635_ip = 0; ; ) switch(_fun115635_ip) {
 0:
            golf = argFoo;
            verify = argBar;
            tango = argCorge;
            entity = golf.favoritesSectionNumber;
            if(!(entity !== verify)) { _fun115635_ip = 489; continue _fun115635 }
 22:
            entity = golf.recentsSectionNumber;
            if(!(entity !== verify)) { _fun115635_ip = 349; continue _fun115635 }
 35:
            entity = golf.voiceChannelsSectionNumber;
            if(!(entity !== verify)) { _fun115635_ip = 163; continue _fun115635 }
 45:
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 32;
            entity = report[entity];
            oscar = undefined;
            zulu = zulu.bind(oscar)(entity);
            entity = zulu.isNamedCategorySection;
            zulu = entity.bind(zulu)(verify);
            entity = null;
            if(zulu) { _fun115635_ip = 88; continue _fun115635 }
 86:
            return entity;
 88:
            zulu = golf.getNamedCategoryFromSection;
            options = zulu.bind(golf)(verify);
            zulu = entity == options;
            entity = null;
            if(zulu) { _fun115635_ip = 161; continue _fun115635 }
 108:
            report = _closure1_slot21;
            zulu = _closure1_slot0;
            offset = _closure1_slot2;
            mike = 20;
            mike = offset[mike];
            mike = zulu.bind(oscar)(mike);
            zulu = mike.CategoryChannel;
            mike = {};
            options = options.record;
            mike['channel'] = options;
            mike['withMarginTop'] = tango;
            entity = report.bind(oscar)(zulu, mike);
 161:
            return entity;
 163:
            entity = _closure1_slot26;
            report = undefined;
            entity = entity.bind(report)(golf);
            oscar = entity.showDivider;
            yankee = entity.isCollapsed;
            zulu = _closure1_slot22;
            mike = _closure1_slot4;
            entity = {};
            romeo = null;
            if(!oscar) { _fun115635_ip = 236; continue _fun115635 }
 204:
            backup = _closure1_slot21;
            foxtrot = _closure1_slot1;
            kilo = _closure1_slot2;
            oscar = 29;
            oscar = kilo[oscar];
            foxtrot = foxtrot.bind(report)(oscar);
            oscar = {};
            romeo = backup.bind(report)(foxtrot, oscar);
 236:
            oscar = new Array(2);
            oscar[0] = romeo;
            options = null;
            if(!yankee) { _fun115635_ip = 333; continue _fun115635 }
 249:
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            offset = 20;
            offset = output[offset];
            romeo = sizing.bind(report)(offset);
            yankee = romeo.renderCategoryItem;
            offset = {};
            foxtrot = 21;
            backup = output[foxtrot];
            backup = sizing.bind(report)(backup);
            kilo = backup.intl;
            backup = kilo.string;
            foxtrot = output[foxtrot];
            foxtrot = sizing.bind(report)(foxtrot);
            foxtrot = foxtrot.t;
            foxtrot = foxtrot.V/u9Dw;
            foxtrot = backup.bind(kilo)(foxtrot);
            offset['name'] = foxtrot;
            options = yankee.bind(romeo)(offset);
 333:
            oscar[1] = options;
            entity['children'] = oscar;
            entity = zulu.bind(report)(mike, entity);
            return entity;
 349:
            oscar = _closure1_slot21;
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 20;
            entity = zulu[entity];
            report = undefined;
            mike = mike.bind(report)(entity);
            entity = argBaz;
            if(entity) { _fun115635_ip = 459; continue _fun115635 }
 384:
            zulu = mike.SuggestedCategory;
            entity = {};
            options = golf.id;
            entity['guildId'] = options;
            options = golf.getCategoryFromSection;
            yankee = options.bind(golf)(verify);
            verify = null;
            offset = verify == yankee;
            options = undefined;
            if(offset) { _fun115635_ip = 433; continue _fun115635 }
 423:
            offset = yankee.getShownChannelAndThreadIds;
            options = offset.bind(yankee)();
 433:
            if(!(verify == options)) { _fun115635_ip = 441; continue _fun115635 }
 437:
            options = new Array(0);
 441:
            entity['channelIds'] = options;
            entity['withMarginTop'] = tango;
            entity = oscar.bind(report)(zulu, entity);
            _fun115635_ip = 487; continue _fun115635;
 459:
            zulu = mike.RecentlyActiveCategory;
            mike = {};
            golf = golf.id;
            mike['guildId'] = golf;
            mike['withMarginTop'] = tango;
            entity = oscar.bind(report)(zulu, mike);
 487:
            return entity;
 489:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 20;
            entity = offset[entity];
            options = undefined;
            zulu = verify.bind(options)(entity);
            mike = zulu.renderCategoryItem;
            entity = {};
            report = 21;
            oscar = offset[report];
            oscar = verify.bind(options)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            report = offset[report];
            report = verify.bind(options)(report);
            report = report.t;
            report = report.k8fFjo;
            report = oscar.bind(golf)(report);
            entity['name'] = report;
            entity['withMarginTop'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['renderChannelListSectionHeader'] = tango;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: getChannelListSectionHeaderSize
        _fun115636: for(var _fun115636_ip = 0; ; ) switch(_fun115636_ip) {
 0:
            report = argFoo;
            verify = argBar;
            mike = _closure1_slot12;
            options = undefined;
            entity = argBaz;
            mike = mike.bind(options)(entity);
            oscar = 0;
            tango = argCorge;
            entity = 0;
            if(!tango) { _fun115636_ip = 37; continue _fun115636 }
 33:
            entity = _closure1_slot11;
 37:
            tango = report.favoritesSectionNumber;
            if(!(tango !== verify)) { _fun115636_ip = 208; continue _fun115636 }
 50:
            tango = report.recentsSectionNumber;
            if(!(tango !== verify)) { _fun115636_ip = 208; continue _fun115636 }
 63:
            tango = report.voiceChannelsSectionNumber;
            if(!(tango !== verify)) { _fun115636_ip = 140; continue _fun115636 }
 73:
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 32;
            tango = offset[tango];
            golf = golf.bind(options)(tango);
            tango = golf.isNamedCategorySection;
            golf = tango.bind(golf)(verify);
            tango = 0;
            if(!golf) { _fun115636_ip = 138; continue _fun115636 }
 109:
            golf = report.getNamedCategoryFromSection;
            verify = golf.bind(report)(verify);
            golf = null;
            verify = golf == verify;
            golf = 0;
            if(verify) { _fun115636_ip = 135; continue _fun115636 }
 131:
            golf = mike + entity;
 135:
            tango = golf;
 138:
            return tango;
 140:
            tango = _closure1_slot26;
            tango = tango.bind(options)(report);
            golf = tango.showDivider;
            report = tango.isCollapsed;
            tango = 0;
            if(!golf) { _fun115636_ip = 196; continue _fun115636 }
 166:
            golf = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 29;
            zulu = verify[zulu];
            zulu = golf.bind(options)(zulu);
            zulu = zulu.DIVIDER_HEIGHT;
            tango = oscar + zulu;
 196:
            zulu = tango;
            if(!report) { _fun115636_ip = 206; continue _fun115636 }
 202:
            zulu = tango + mike;
 206:
            return zulu;
 208:
            entity = mike + entity;
            return entity;
        }
    };
    zulu['getChannelListSectionHeaderSize'] = tango;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: renderChannelListSectionFooter
        _fun115637: for(var _fun115637_ip = 0; ; ) switch(_fun115637_ip) {
 0:
            kilo = argFoo;
            backup = argBar;
            oscar = argCorge;
            entity = null;
            mike = entity != oscar;
            options = null;
            if(!mike) { _fun115637_ip = 77; continue _fun115637 }
 20:
            report = _closure1_slot21;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 20;
            mike = tango[mike];
            tango = undefined;
            mike = zulu.bind(tango)(mike);
            zulu = mike.RedesignVoiceUserSummary;
            mike = {};
            golf = kilo.id;
            mike['guildId'] = golf;
            mike['channels'] = oscar;
            options = report.bind(tango)(zulu, mike);
 77:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            oscar = 31;
            zulu = zulu[oscar];
            report = undefined;
            zulu = tango.bind(report)(zulu);
            zulu = zulu.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(zulu !== backup)) { _fun115637_ip = 419; continue _fun115637 }
 115:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = tango.bind(report)(zulu);
            zulu = zulu.SECTION_INDEX_GUILD_ACTIONS;
            if(!(zulu !== backup)) { _fun115637_ip = 419; continue _fun115637 }
 145:
            zulu = kilo.favoritesSectionNumber;
            if(!(zulu !== backup)) { _fun115637_ip = 385; continue _fun115637 }
 158:
            zulu = kilo.recentsSectionNumber;
            if(!(zulu !== backup)) { _fun115637_ip = 385; continue _fun115637 }
 171:
            zulu = kilo.voiceChannelsSectionNumber;
            if(!(zulu === backup)) { _fun115637_ip = 206; continue _fun115637 }
 181:
            zulu = _closure1_slot27;
            tango = zulu.bind(report)(kilo, backup);
            zulu = tango.render;
            yankee = tango.lastShownChannelActive;
            if(zulu) { _fun115637_ip = 247; continue _fun115637 }
 206:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 32;
            zulu = oscar[zulu];
            tango = tango.bind(report)(zulu);
            zulu = tango.isNamedCategorySection;
            tango = zulu.bind(tango)(backup);
            zulu = null;
            if(!tango) { _fun115637_ip = 245; continue _fun115637 }
 242:
            zulu = options;
 245:
            return zulu;
 247:
            oscar = _closure1_slot22;
            tango = _closure1_slot4;
            zulu = {};
            golf = new Array(2);
            golf[0] = options;
            offset = _closure1_slot21;
            verify = _closure1_slot4;
            options = {};
            romeo = _closure1_slot24;
            if(yankee) { _fun115637_ip = 290; continue _fun115637 }
 282:
            yankee = romeo.showAllVoiceChannelsButtonLastShownChannelInactive;
            _fun115637_ip = 296; continue _fun115637;
 290:
            yankee = romeo.showAllVoiceChannelsButtonLastShownChannelActive;
 296:
            options['style'] = yankee;
            foxtrot = _closure1_slot21;
            romeo = _closure1_slot0;
            sizing = _closure1_slot2;
            yankee = 19;
            yankee = sizing[yankee];
            yankee = romeo.bind(report)(yankee);
            romeo = yankee.ShowAllVoiceChannelsButtonFastList;
            yankee = {};
            kilo = kilo.id;
            yankee['guildId'] = kilo;
            yankee['section'] = backup;
            backup = argBaz;
            yankee['listRef'] = backup;
            yankee = foxtrot.bind(report)(romeo, yankee);
            options['children'] = yankee;
            options = offset.bind(report)(verify, options);
            golf[1] = options;
            zulu['children'] = golf;
            zulu = oscar.bind(report)(tango, zulu);
            return zulu;
 385:
            tango = _closure1_slot21;
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 29;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            mike = tango.bind(report)(zulu, mike);
            return mike;
 419:
            return entity;
        }
    };
    zulu['renderChannelListSectionFooter'] = tango;
    tango = function(argFoo, argBar) { // Original name: getChannelListSectionHasFooterDivider
        _fun115638: for(var _fun115638_ip = 0; ; ) switch(_fun115638_ip) {
 0:
            entity = argFoo;
            zulu = argBar;
            golf = _closure1_slot0;
            tango = _closure1_slot2;
            oscar = 31;
            tango = tango[oscar];
            report = undefined;
            tango = golf.bind(report)(tango);
            tango = tango.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(tango !== zulu)) { _fun115638_ip = 102; continue _fun115638 }
 41:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = tango.bind(report)(mike);
            mike = mike.SECTION_INDEX_GUILD_ACTIONS;
            if(!(mike !== zulu)) { _fun115638_ip = 102; continue _fun115638 }
 68:
            mike = entity.favoritesSectionNumber;
            if(!(mike !== zulu)) { _fun115638_ip = 98; continue _fun115638 }
 78:
            mike = entity.recentsSectionNumber;
            if(!(mike !== zulu)) { _fun115638_ip = 98; continue _fun115638 }
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
    zulu['getChannelListSectionHasFooterDivider'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: getChannelListSectionFooterSize
        _fun115639: for(var _fun115639_ip = 0; ; ) switch(_fun115639_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            mike = null;
            entity = argBaz;
            mike = mike != entity;
            entity = 0;
            golf = 0;
            if(!mike) { _fun115639_ip = 53; continue _fun115639 }
 22:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 33;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            golf = mike.VOICE_USER_SUMMARY_HEIGHT;
 53:
            options = _closure1_slot0;
            zulu = _closure1_slot2;
            verify = 31;
            zulu = zulu[verify];
            tango = undefined;
            zulu = options.bind(tango)(zulu);
            zulu = zulu.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(zulu !== report)) { _fun115639_ip = 321; continue _fun115639 }
 91:
            options = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[verify];
            zulu = options.bind(tango)(zulu);
            zulu = zulu.SECTION_INDEX_GUILD_ACTIONS;
            if(!(zulu !== report)) { _fun115639_ip = 321; continue _fun115639 }
 121:
            zulu = oscar.favoritesSectionNumber;
            if(!(zulu !== report)) { _fun115639_ip = 293; continue _fun115639 }
 134:
            zulu = oscar.recentsSectionNumber;
            if(!(zulu !== report)) { _fun115639_ip = 293; continue _fun115639 }
 147:
            zulu = oscar.voiceChannelsSectionNumber;
            if(!(zulu !== report)) { _fun115639_ip = 198; continue _fun115639 }
 157:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 32;
            zulu = verify[zulu];
            options = options.bind(tango)(zulu);
            zulu = options.isNamedCategorySection;
            options = zulu.bind(options)(report);
            zulu = 0;
            if(!options) { _fun115639_ip = 196; continue _fun115639 }
 193:
            zulu = golf;
 196:
            return zulu;
 198:
            zulu = _closure1_slot27;
            zulu = zulu.bind(tango)(oscar, report);
            oscar = zulu.render;
            report = zulu.lastShownChannelActive;
            zulu = golf;
            if(!oscar) { _fun115639_ip = 291; continue _fun115639 }
 226:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            oscar = 34;
            oscar = verify[oscar];
            oscar = options.bind(tango)(oscar);
            oscar = oscar.SMALL_BUTTON_HEIGHT;
            oscar = golf + oscar;
            golf = _closure1_slot24;
            if(report) { _fun115639_ip = 276; continue _fun115639 }
 263:
            report = golf.showAllVoiceChannelsButtonLastShownChannelInactive;
            report = report.marginTop;
            _fun115639_ip = 287; continue _fun115639;
 276:
            golf = golf.showAllVoiceChannelsButtonLastShownChannelActive;
            report = golf.marginTop;
 287:
            zulu = oscar + report;
 291:
            return zulu;
 293:
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 29;
            mike = report[mike];
            mike = zulu.bind(tango)(mike);
            mike = mike.DIVIDER_HEIGHT;
            return mike;
 321:
            return entity;
        }
    };
    zulu['getChannelListSectionFooterSize'] = tango;
    tango = function(argFoo) { // Original name: renderChannelListItem
        _fun115640: for(var _fun115640_ip = 0; ; ) switch(_fun115640_ip) {
 0:
            entity = argFoo;
            mike = entity.guildChannels;
            tango = entity.section;
            zulu = entity.row;
            yankee = entity.selectedChannelId;
            offset = entity.guild;
            oscar = _closure1_slot0;
            entity = _closure1_slot2;
            options = 31;
            entity = entity[options];
            report = undefined;
            entity = oscar.bind(report)(entity);
            entity = entity.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(entity !== tango)) { _fun115640_ip = 1672; continue _fun115640 }
 69:
            oscar = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[options];
            entity = oscar.bind(report)(entity);
            entity = entity.SECTION_INDEX_GUILD_ACTIONS;
            if(!(entity !== tango)) { _fun115640_ip = 908; continue _fun115640 }
 99:
            entity = {};
            entity['guildChannels'] = mike;
            entity['section'] = tango;
            entity['row'] = zulu;
            entity['selectedChannelId'] = yankee;
            entity['guild'] = offset;
            tango = entity.guildChannels;
            options = entity.section;
            oscar = entity.row;
            backup = entity.selectedChannelId;
            romeo = entity.guild;
            entity = tango.getChannelFromSectionRow;
            verify = entity.bind(tango)(options, oscar);
            oscar = null;
            foxtrot = oscar == verify;
            entity = null;
            if(foxtrot) { _fun115640_ip = 906; continue _fun115640 }
 178:
            foxtrot = verify.channel;
            verify = foxtrot.record;
            kilo = verify.id;
            kilo = kilo === backup;
            result = _closure1_slot6;
            output = result.has;
            sizing = verify.type;
            sizing = output.bind(result)(sizing);
            oscar = null;
            if(!sizing) { _fun115640_ip = 227; continue _fun115640 }
 222:
            oscar = verify.type;
 227:
            sizing = verify.type;
            if(!(oscar !== sizing)) { _fun115640_ip = 781; continue _fun115640 }
 239:
            output = _closure1_slot0;
            oscar = _closure1_slot2;
            result = 36;
            oscar = oscar[result];
            oscar = output.bind(report)(oscar);
            oscar = oscar.ChannelTypes;
            oscar = oscar.GUILD_VOICE;
            if(!(oscar !== sizing)) { _fun115640_ip = 724; continue _fun115640 }
 278:
            output = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[result];
            oscar = output.bind(report)(oscar);
            oscar = oscar.ChannelTypes;
            oscar = oscar.GUILD_STAGE_VOICE;
            if(!(oscar !== sizing)) { _fun115640_ip = 678; continue _fun115640 }
 314:
            output = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[result];
            oscar = output.bind(report)(oscar);
            oscar = oscar.ChannelTypes;
            oscar = oscar.DM;
            if(!(oscar !== sizing)) { _fun115640_ip = 632; continue _fun115640 }
 350:
            output = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[result];
            oscar = output.bind(report)(oscar);
            oscar = oscar.ChannelTypes;
            oscar = oscar.GROUP_DM;
            if(!(oscar !== sizing)) { _fun115640_ip = 632; continue _fun115640 }
 386:
            oscar = tango.voiceChannelsSectionNumber;
            if(!(options === oscar)) { _fun115640_ip = 412; continue _fun115640 }
 396:
            oscar = verify.isCategory;
            oscar = oscar.bind(verify)();
            if(oscar) { _fun115640_ip = 575; continue _fun115640 }
 412:
            options = tango.id;
            oscar = _closure1_slot18;
            if(!(options !== oscar)) { _fun115640_ip = 438; continue _fun115640 }
 425:
            oscar = tango.id;
            tango = _closure1_slot16;
            if(!(oscar === tango)) { _fun115640_ip = 532; continue _fun115640 }
 438:
            options = _closure1_slot7;
            oscar = options.has;
            tango = verify.type;
            tango = oscar.bind(options)(tango);
            if(!tango) { _fun115640_ip = 532; continue _fun115640 }
 460:
            options = _closure1_slot21;
            oscar = _closure1_slot1;
            sizing = _closure1_slot2;
            tango = 35;
            tango = sizing[tango];
            oscar = oscar.bind(report)(tango);
            tango = {};
            tango['channel'] = verify;
            tango['selected'] = kilo;
            sizing = foxtrot.isMuted;
            tango['muted'] = sizing;
            sizing = foxtrot.subtitle;
            tango['subtitle'] = sizing;
            sizing = false;
            tango['isRulesChannel'] = sizing;
            tango = options.bind(report)(oscar, tango);
            _fun115640_ip = 573; continue _fun115640;
 532:
            sizing = _closure1_slot21;
            options = _closure1_slot1;
            output = _closure1_slot2;
            oscar = 40;
            oscar = output[oscar];
            options = options.bind(report)(oscar);
            oscar = {};
            oscar['channel'] = verify;
            oscar['selected'] = kilo;
            tango = sizing.bind(report)(options, oscar);
 573:
            _fun115640_ip = 624; continue _fun115640;
 575:
            sizing = _closure1_slot21;
            options = _closure1_slot0;
            output = _closure1_slot2;
            oscar = 20;
            oscar = output[oscar];
            oscar = options.bind(report)(oscar);
            options = oscar.CategoryChannel;
            oscar = {};
            oscar['channel'] = verify;
            output = true;
            oscar['withMarginTop'] = output;
            tango = sizing.bind(report)(options, oscar);
 624:
            entity = tango;
            _fun115640_ip = 906; continue _fun115640;
 632:
            options = _closure1_slot21;
            oscar = _closure1_slot1;
            sizing = _closure1_slot2;
            tango = 39;
            tango = sizing[tango];
            oscar = oscar.bind(report)(tango);
            tango = {};
            tango['channel'] = verify;
            tango['selected'] = kilo;
            entity = options.bind(report)(oscar, tango);
            _fun115640_ip = 906; continue _fun115640;
 678:
            options = _closure1_slot21;
            oscar = _closure1_slot1;
            sizing = _closure1_slot2;
            tango = 38;
            tango = sizing[tango];
            oscar = oscar.bind(report)(tango);
            tango = {};
            tango['channel'] = verify;
            tango['selected'] = kilo;
            entity = options.bind(report)(oscar, tango);
            _fun115640_ip = 906; continue _fun115640;
 724:
            options = _closure1_slot21;
            oscar = _closure1_slot1;
            sizing = _closure1_slot2;
            tango = 37;
            tango = sizing[tango];
            oscar = oscar.bind(report)(tango);
            tango = {};
            tango['channel'] = verify;
            tango['selected'] = kilo;
            sizing = foxtrot.subtitle;
            tango['subtitle'] = sizing;
            entity = options.bind(report)(oscar, tango);
            _fun115640_ip = 906; continue _fun115640;
 781:
            options = _closure1_slot21;
            oscar = _closure1_slot1;
            sizing = _closure1_slot2;
            tango = 35;
            tango = sizing[tango];
            oscar = oscar.bind(report)(tango);
            tango = {};
            tango['channel'] = verify;
            tango['selected'] = kilo;
            kilo = foxtrot.isMuted;
            tango['muted'] = kilo;
            kilo = foxtrot.subtitle;
            tango['subtitle'] = kilo;
            romeo = romeo.rulesChannelId;
            verify = verify.id;
            verify = romeo === verify;
            tango['isRulesChannel'] = verify;
            romeo = options.bind(report)(oscar, tango);
            options = _closure1_slot22;
            oscar = _closure1_slot23;
            tango = {};
            verify = new Array(2);
            verify[0] = romeo;
            romeo = _closure1_slot25;
            romeo = romeo.bind(report)(foxtrot, backup);
            verify[1] = romeo;
            tango['children'] = verify;
            entity = options.bind(report)(oscar, tango);
 906:
            return entity;
 908:
            entity = mike.getGuildActionSection;
            tango = entity.bind(mike)();
            entity = tango.getRow;
            options = entity.bind(tango)(zulu);
            tango = null;
            oscar = tango == options;
            entity = null;
            if(oscar) { _fun115640_ip = 1670; continue _fun115640 }
 943:
            oscar = _closure1_slot20;
            oscar = oscar.GUILD_ROLE_SUBSCRIPTIONS;
            if(!(oscar !== options)) { _fun115640_ip = 1615; continue _fun115640 }
 960:
            oscar = _closure1_slot20;
            oscar = oscar.GUILD_HOME;
            if(!(oscar !== options)) { _fun115640_ip = 1558; continue _fun115640 }
 977:
            oscar = _closure1_slot20;
            oscar = oscar.CHANNELS_AND_ROLES;
            if(!(oscar !== options)) { _fun115640_ip = 1478; continue _fun115640 }
 994:
            oscar = _closure1_slot20;
            oscar = oscar.GUILD_DIRECTORY;
            if(!(oscar !== options)) { _fun115640_ip = 1397; continue _fun115640 }
 1011:
            oscar = _closure1_slot20;
            oscar = oscar.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            if(!(oscar !== options)) { _fun115640_ip = 1255; continue _fun115640 }
 1028:
            oscar = _closure1_slot20;
            oscar = oscar.GUILD_HUB_HEADER_OPTIONS;
            if(!(oscar !== options)) { _fun115640_ip = 1214; continue _fun115640 }
 1045:
            oscar = _closure1_slot20;
            oscar = oscar.GUILD_SCHEDULED_EVENTS;
            entity = null;
            if(!(oscar !== options)) { _fun115640_ip = 1670; continue _fun115640 }
 1064:
            oscar = _closure1_slot20;
            oscar = oscar.GUILD_MEMBER_APPLICATIONS;
            entity = null;
            if(!(oscar !== options)) { _fun115640_ip = 1670; continue _fun115640 }
 1083:
            oscar = _closure1_slot20;
            oscar = oscar.GUILD_MOD_DASH_MEMBER_SAFETY;
            entity = null;
            if(!(oscar !== options)) { _fun115640_ip = 1670; continue _fun115640 }
 1102:
            oscar = _closure1_slot20;
            oscar = oscar.GUILD_FAVORITES;
            entity = null;
            if(!(oscar !== options)) { _fun115640_ip = 1670; continue _fun115640 }
 1121:
            oscar = _closure1_slot20;
            oscar = oscar.GUILD_CHANNEL_LIST_OPT_IN_NOTICE;
            entity = null;
            if(!(oscar !== options)) { _fun115640_ip = 1670; continue _fun115640 }
 1140:
            oscar = _closure1_slot20;
            oscar = oscar.GUILD_SHOP;
            entity = null;
            if(!(oscar !== options)) { _fun115640_ip = 1670; continue _fun115640 }
 1159:
            oscar = _closure1_slot20;
            oscar = oscar.BROWSE_CHANNELS;
            entity = null;
            if(!(oscar !== options)) { _fun115640_ip = 1670; continue _fun115640 }
 1178:
            oscar = _closure1_slot20;
            oscar = oscar.GUILD_PREMIUM_PROGRESS_BAR;
            entity = null;
            if(!(oscar !== options)) { _fun115640_ip = 1670; continue _fun115640 }
 1197:
            oscar = _closure1_slot20;
            oscar = oscar.GUILD_BOOSTS;
            entity = null;
            _fun115640_ip = 1670; continue _fun115640;
 1214:
            options = _closure1_slot21;
            oscar = _closure1_slot1;
            verify = _closure1_slot2;
            tango = 22;
            tango = verify[tango];
            oscar = oscar.bind(report)(tango);
            tango = {};
            tango['guild'] = offset;
            entity = options.bind(report)(oscar, tango);
            _fun115640_ip = 1670; continue _fun115640;
 1255:
            options = _closure1_slot22;
            oscar = _closure1_slot4;
            tango = {};
            romeo = _closure1_slot21;
            verify = {};
            foxtrot = _closure1_slot24;
            foxtrot = foxtrot.nonChannelContainer;
            verify['style'] = foxtrot;
            sizing = _closure1_slot21;
            backup = _closure1_slot0;
            kilo = _closure1_slot2;
            foxtrot = 18;
            foxtrot = kilo[foxtrot];
            foxtrot = backup.bind(report)(foxtrot);
            backup = foxtrot.NewMemberActionsProgress;
            foxtrot = {};
            output = offset.id;
            foxtrot['guildId'] = output;
            foxtrot = sizing.bind(report)(backup, foxtrot);
            verify['children'] = foxtrot;
            romeo = romeo.bind(report)(oscar, verify);
            verify = new Array(2);
            verify[0] = romeo;
            backup = _closure1_slot21;
            foxtrot = _closure1_slot1;
            romeo = 29;
            romeo = kilo[romeo];
            foxtrot = foxtrot.bind(report)(romeo);
            romeo = {};
            romeo = backup.bind(report)(foxtrot, romeo);
            verify[1] = romeo;
            tango['children'] = verify;
            entity = options.bind(report)(oscar, tango);
            _fun115640_ip = 1670; continue _fun115640;
 1397:
            options = _closure1_slot9;
            oscar = options.getDirectoryChannelIds;
            tango = offset.id;
            oscar = oscar.bind(options)(tango);
            tango = 0;
            verify = oscar[tango];
            options = _closure1_slot21;
            oscar = _closure1_slot1;
            romeo = _closure1_slot2;
            tango = 27;
            tango = romeo[tango];
            oscar = oscar.bind(report)(tango);
            tango = {};
            romeo = offset.id;
            tango['guildId'] = romeo;
            verify = yankee === verify;
            tango['selected'] = verify;
            entity = options.bind(report)(oscar, tango);
            _fun115640_ip = 1670; continue _fun115640;
 1478:
            options = _closure1_slot21;
            oscar = _closure1_slot0;
            verify = _closure1_slot2;
            tango = 26;
            tango = verify[tango];
            tango = oscar.bind(report)(tango);
            oscar = tango.GuildRolesAndChannelsRow;
            tango = {};
            tango['guild'] = offset;
            verify = _closure1_slot17;
            verify = verify.CHANNEL_BROWSER;
            verify = yankee === verify;
            if(verify) { _fun115640_ip = 1545; continue _fun115640 }
 1531:
            romeo = _closure1_slot17;
            romeo = romeo.CUSTOMIZE_COMMUNITY;
            verify = yankee === romeo;
 1545:
            tango['selected'] = verify;
            entity = options.bind(report)(oscar, tango);
            _fun115640_ip = 1670; continue _fun115640;
 1558:
            options = _closure1_slot21;
            oscar = _closure1_slot1;
            verify = _closure1_slot2;
            tango = 25;
            tango = verify[tango];
            oscar = oscar.bind(report)(tango);
            tango = {};
            tango['guild'] = offset;
            verify = _closure1_slot17;
            verify = verify.GUILD_HOME;
            verify = yankee === verify;
            tango['selected'] = verify;
            entity = options.bind(report)(oscar, tango);
            _fun115640_ip = 1670; continue _fun115640;
 1615:
            options = _closure1_slot21;
            oscar = _closure1_slot1;
            verify = _closure1_slot2;
            tango = 24;
            tango = verify[tango];
            oscar = oscar.bind(report)(tango);
            tango = {};
            tango['guild'] = offset;
            verify = _closure1_slot17;
            verify = verify.ROLE_SUBSCRIPTIONS;
            verify = yankee === verify;
            tango['selected'] = verify;
            entity = options.bind(report)(oscar, tango);
 1670:
            return entity;
 1672:
            entity = mike.getChannelNoticeSection;
            mike = entity.bind(mike)();
            entity = mike.getRow;
            zulu = entity.bind(mike)(zulu);
            tango = null;
            mike = tango == zulu;
            entity = null;
            if(mike) { _fun115640_ip = 1999; continue _fun115640 }
 1707:
            mike = _closure1_slot19;
            mike = mike.SPACER;
            if(!(mike !== zulu)) { _fun115640_ip = 1969; continue _fun115640 }
 1724:
            mike = _closure1_slot19;
            mike = mike.GUILD_PROGRESS;
            if(!(mike !== zulu)) { _fun115640_ip = 1897; continue _fun115640 }
 1741:
            mike = _closure1_slot19;
            mike = mike.MFA_WARNING;
            if(!(mike !== zulu)) { _fun115640_ip = 1829; continue _fun115640 }
 1755:
            mike = _closure1_slot19;
            mike = mike.LIVE_CHANNEL_NOTICE;
            entity = null;
            if(!(mike === zulu)) { _fun115640_ip = 1999; continue _fun115640 }
 1774:
            tango = _closure1_slot21;
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 13;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            oscar = _closure1_slot24;
            oscar = oscar.liveChannelNotice;
            mike['style'] = oscar;
            mike['guild'] = offset;
            entity = tango.bind(report)(zulu, mike);
            _fun115640_ip = 1999; continue _fun115640;
 1829:
            tango = _closure1_slot21;
            zulu = _closure1_slot4;
            mike = {};
            oscar = _closure1_slot24;
            oscar = oscar.nonChannelContainer;
            mike['style'] = oscar;
            verify = _closure1_slot21;
            options = _closure1_slot1;
            yankee = _closure1_slot2;
            oscar = 16;
            oscar = yankee[oscar];
            options = options.bind(report)(oscar);
            oscar = {};
            oscar = verify.bind(report)(options, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
            _fun115640_ip = 1999; continue _fun115640;
 1897:
            tango = _closure1_slot21;
            zulu = _closure1_slot4;
            mike = {};
            oscar = _closure1_slot24;
            oscar = oscar.nonChannelContainer;
            mike['style'] = oscar;
            verify = _closure1_slot21;
            options = _closure1_slot1;
            yankee = _closure1_slot2;
            oscar = 17;
            oscar = yankee[oscar];
            options = options.bind(report)(oscar);
            oscar = {};
            oscar['guild'] = offset;
            oscar = verify.bind(report)(options, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
            _fun115640_ip = 1999; continue _fun115640;
 1969:
            tango = _closure1_slot21;
            zulu = _closure1_slot4;
            mike = {};
            oscar = {};
            golf = _closure1_slot15;
            oscar['height'] = golf;
            mike['style'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 1999:
            return entity;
        }
    };
    zulu['renderChannelListItem'] = tango;
    tango = function(argFoo) { // Original name: getChannelListItemSize
        _fun115641: for(var _fun115641_ip = 0; ; ) switch(_fun115641_ip) {
 0:
            entity = argFoo;
            tango = entity.guildChannels;
            backup = entity.section;
            golf = entity.row;
            report = entity.fontScale;
            mike = entity.voiceStates;
            zulu = entity.liveChannelNoticeHeight;
            yankee = entity.listViewportHeight;
            options = _closure1_slot0;
            entity = _closure1_slot2;
            verify = 31;
            entity = entity[verify];
            oscar = undefined;
            entity = options.bind(oscar)(entity);
            entity = entity.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(entity !== backup)) { _fun115641_ip = 1194; continue _fun115641 }
 82:
            options = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[verify];
            entity = options.bind(oscar)(entity);
            entity = entity.SECTION_INDEX_GUILD_ACTIONS;
            if(!(entity !== backup)) { _fun115641_ip = 847; continue _fun115641 }
 112:
            entity = _closure1_slot13;
            verify = entity.bind(oscar)(report);
            entity = tango.getChannelFromSectionRow;
            options = entity.bind(tango)(backup, golf);
            foxtrot = null;
            offset = foxtrot == options;
            kilo = 0;
            entity = 0;
            if(offset) { _fun115641_ip = 845; continue _fun115641 }
 149:
            options = options.channel;
            offset = options.record;
            output = _closure1_slot6;
            sizing = output.has;
            romeo = offset.type;
            sizing = sizing.bind(output)(romeo);
            romeo = null;
            if(!sizing) { _fun115641_ip = 189; continue _fun115641 }
 184:
            romeo = offset.type;
 189:
            sizing = offset.type;
            if(!(romeo !== sizing)) { _fun115641_ip = 831; continue _fun115641 }
 201:
            output = _closure1_slot0;
            romeo = _closure1_slot2;
            echo = 36;
            romeo = romeo[echo];
            romeo = output.bind(oscar)(romeo);
            romeo = romeo.ChannelTypes;
            romeo = romeo.GUILD_VOICE;
            if(!(romeo !== sizing)) { _fun115641_ip = 461; continue _fun115641 }
 240:
            output = _closure1_slot0;
            romeo = _closure1_slot2;
            romeo = romeo[echo];
            romeo = output.bind(oscar)(romeo);
            romeo = romeo.ChannelTypes;
            romeo = romeo.GUILD_STAGE_VOICE;
            if(!(romeo !== sizing)) { _fun115641_ip = 461; continue _fun115641 }
 276:
            output = _closure1_slot0;
            romeo = _closure1_slot2;
            romeo = romeo[echo];
            romeo = output.bind(oscar)(romeo);
            romeo = romeo.ChannelTypes;
            romeo = romeo.DM;
            entity = verify;
            if(!(romeo !== sizing)) { _fun115641_ip = 845; continue _fun115641 }
 315:
            output = _closure1_slot0;
            romeo = _closure1_slot2;
            romeo = romeo[echo];
            romeo = output.bind(oscar)(romeo);
            romeo = romeo.ChannelTypes;
            romeo = romeo.GROUP_DM;
            entity = verify;
            if(!(romeo !== sizing)) { _fun115641_ip = 845; continue _fun115641 }
 354:
            romeo = tango.voiceChannelsSectionNumber;
            if(!(backup === romeo)) { _fun115641_ip = 377; continue _fun115641 }
 364:
            romeo = offset.isCategory;
            romeo = romeo.bind(offset)();
            if(romeo) { _fun115641_ip = 436; continue _fun115641 }
 377:
            backup = tango.id;
            romeo = _closure1_slot18;
            backup = backup !== romeo;
            if(!backup) { _fun115641_ip = 406; continue _fun115641 }
 393:
            sizing = tango.id;
            romeo = _closure1_slot16;
            backup = sizing !== romeo;
 406:
            romeo = verify;
            if(backup) { _fun115641_ip = 453; continue _fun115641 }
 412:
            output = _closure1_slot7;
            sizing = output.has;
            backup = offset.type;
            backup = sizing.bind(output)(backup);
            romeo = verify;
            _fun115641_ip = 453; continue _fun115641;
 436:
            backup = _closure1_slot12;
            sizing = backup.bind(oscar)(report);
            backup = _closure1_slot11;
            romeo = sizing + backup;
 453:
            entity = romeo;
            _fun115641_ip = 845; continue _fun115641;
 461:
            romeo = options.subtitle;
            foxtrot = foxtrot != romeo;
            romeo = 0;
            if(!foxtrot) { _fun115641_ip = 485; continue _fun115641 }
 476:
            foxtrot = _closure1_slot14;
            romeo = foxtrot.bind(oscar)(report);
 485:
            sizing = _closure1_slot0;
            foxtrot = _closure1_slot2;
            backup = 41;
            backup = foxtrot[backup];
            output = sizing.bind(oscar)(backup);
            backup = output.getVoiceUserHeight;
            result = backup.bind(output)(report);
            backup = offset.type;
            foxtrot = foxtrot[echo];
            foxtrot = sizing.bind(oscar)(foxtrot);
            foxtrot = foxtrot.ChannelTypes;
            foxtrot = foxtrot.GUILD_STAGE_VOICE;
            if(!(backup !== foxtrot)) { _fun115641_ip = 568; continue _fun115641 }
 546:
            sizing = _closure1_slot10;
            backup = sizing.countVoiceStatesForChannel;
            foxtrot = offset.id;
            backup = backup.bind(sizing)(foxtrot);
            _fun115641_ip = 621; continue _fun115641;
 568:
            update = _closure1_slot5;
            output = update.getParticipantCount;
            sizing = offset.id;
            source = _closure1_slot0;
            control = _closure1_slot2;
            foxtrot = 42;
            foxtrot = control[foxtrot];
            foxtrot = source.bind(oscar)(foxtrot);
            foxtrot = foxtrot.StageChannelParticipantNamedIndex;
            foxtrot = foxtrot.SPEAKER;
            backup = output.bind(update)(sizing, foxtrot);
 621:
            output = offset.type;
            sizing = _closure1_slot0;
            foxtrot = _closure1_slot2;
            foxtrot = foxtrot[echo];
            foxtrot = sizing.bind(oscar)(foxtrot);
            foxtrot = foxtrot.ChannelTypes;
            sizing = foxtrot.GUILD_STAGE_VOICE;
            foxtrot = 0;
            if(!(output === sizing)) { _fun115641_ip = 754; continue _fun115641 }
 661:
            echo = _closure1_slot5;
            output = echo.getParticipantCount;
            sizing = offset.id;
            update = _closure1_slot0;
            source = _closure1_slot2;
            offset = 42;
            offset = source[offset];
            offset = update.bind(oscar)(offset);
            offset = offset.StageChannelParticipantNamedIndex;
            offset = offset.AUDIENCE;
            offset = output.bind(echo)(sizing, offset);
            offset = offset > kilo;
            foxtrot = 0;
            if(!offset) { _fun115641_ip = 754; continue _fun115641 }
 723:
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            offset = 43;
            offset = output[offset];
            sizing = sizing.bind(oscar)(offset);
            offset = sizing.getAudienceItemHeight;
            foxtrot = offset.bind(sizing)(report);
 754:
            offset = verify;
            if(!(backup > kilo)) { _fun115641_ip = 826; continue _fun115641 }
 761:
            echo = verify + romeo;
            kilo = _closure1_slot0;
            sizing = _closure1_slot2;
            romeo = 37;
            output = sizing[romeo];
            output = kilo.bind(oscar)(output);
            output = output.VOICE_USERS_MARGIN_TOP;
            output = echo + output;
            backup = result * backup;
            backup = output + backup;
            romeo = sizing[romeo];
            romeo = kilo.bind(oscar)(romeo);
            romeo = romeo.VOICE_USERS_MARGIN_BOTTOM;
            romeo = backup + romeo;
            offset = romeo + foxtrot;
 826:
            entity = offset;
            _fun115641_ip = 845; continue _fun115641;
 831:
            options = options.threadCount;
            options = options * verify;
            entity = verify + options;
 845:
            return entity;
 847:
            entity = tango.getGuildActionSection;
            options = entity.bind(tango)();
            entity = options.getRow;
            offset = entity.bind(options)(golf);
            entity = null;
            verify = entity == offset;
            entity = 0;
            if(verify) { _fun115641_ip = 1192; continue _fun115641 }
 882:
            verify = _closure1_slot13;
            romeo = verify.bind(oscar)(report);
            verify = _closure1_slot20;
            verify = verify.GUILD_ROLE_SUBSCRIPTIONS;
            entity = romeo;
            if(!(verify !== offset)) { _fun115641_ip = 1192; continue _fun115641 }
 911:
            verify = _closure1_slot20;
            verify = verify.GUILD_HOME;
            entity = romeo;
            if(!(verify !== offset)) { _fun115641_ip = 1192; continue _fun115641 }
 931:
            verify = _closure1_slot20;
            verify = verify.CHANNELS_AND_ROLES;
            entity = romeo;
            if(!(verify !== offset)) { _fun115641_ip = 1192; continue _fun115641 }
 951:
            verify = _closure1_slot20;
            verify = verify.GUILD_DIRECTORY;
            entity = romeo;
            if(!(verify !== offset)) { _fun115641_ip = 1192; continue _fun115641 }
 971:
            verify = _closure1_slot20;
            verify = verify.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
            if(!(verify !== offset)) { _fun115641_ip = 1159; continue _fun115641 }
 988:
            verify = _closure1_slot20;
            verify = verify.GUILD_HUB_HEADER_OPTIONS;
            entity = yankee;
            if(!(verify !== offset)) { _fun115641_ip = 1192; continue _fun115641 }
 1008:
            verify = _closure1_slot20;
            verify = verify.GUILD_SCHEDULED_EVENTS;
            entity = 0;
            if(!(verify !== offset)) { _fun115641_ip = 1192; continue _fun115641 }
 1027:
            verify = _closure1_slot20;
            verify = verify.GUILD_MEMBER_APPLICATIONS;
            entity = 0;
            if(!(verify !== offset)) { _fun115641_ip = 1192; continue _fun115641 }
 1046:
            verify = _closure1_slot20;
            verify = verify.GUILD_MOD_DASH_MEMBER_SAFETY;
            entity = 0;
            if(!(verify !== offset)) { _fun115641_ip = 1192; continue _fun115641 }
 1065:
            verify = _closure1_slot20;
            verify = verify.GUILD_FAVORITES;
            entity = 0;
            if(!(verify !== offset)) { _fun115641_ip = 1192; continue _fun115641 }
 1081:
            verify = _closure1_slot20;
            verify = verify.GUILD_CHANNEL_LIST_OPT_IN_NOTICE;
            entity = 0;
            if(!(verify !== offset)) { _fun115641_ip = 1192; continue _fun115641 }
 1097:
            verify = _closure1_slot20;
            verify = verify.GUILD_SHOP;
            entity = 0;
            if(!(verify !== offset)) { _fun115641_ip = 1192; continue _fun115641 }
 1113:
            verify = _closure1_slot20;
            verify = verify.BROWSE_CHANNELS;
            entity = 0;
            if(!(verify !== offset)) { _fun115641_ip = 1192; continue _fun115641 }
 1129:
            verify = _closure1_slot20;
            verify = verify.GUILD_PREMIUM_PROGRESS_BAR;
            entity = 0;
            if(!(verify !== offset)) { _fun115641_ip = 1192; continue _fun115641 }
 1145:
            verify = _closure1_slot20;
            verify = verify.GUILD_BOOSTS;
            entity = 0;
            _fun115641_ip = 1192; continue _fun115641;
 1159:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            options = 29;
            options = offset[options];
            options = verify.bind(oscar)(options);
            verify = options.DIVIDER_HEIGHT;
            options = 48;
            entity = options + verify;
 1192:
            return entity;
 1194:
            entity = tango.getChannelNoticeSection;
            tango = entity.bind(tango)();
            entity = tango.getRow;
            golf = entity.bind(tango)(golf);
            entity = null;
            tango = entity == golf;
            entity = 0;
            if(tango) { _fun115641_ip = 1362; continue _fun115641 }
 1229:
            tango = _closure1_slot19;
            tango = tango.SPACER;
            if(!(tango !== golf)) { _fun115641_ip = 1358; continue _fun115641 }
 1243:
            tango = _closure1_slot19;
            tango = tango.GUILD_PROGRESS;
            if(!(tango !== golf)) { _fun115641_ip = 1325; continue _fun115641 }
 1257:
            tango = _closure1_slot19;
            tango = tango.MFA_WARNING;
            if(!(tango !== golf)) { _fun115641_ip = 1292; continue _fun115641 }
 1271:
            tango = _closure1_slot19;
            tango = tango.LIVE_CHANNEL_NOTICE;
            entity = 0;
            if(!(tango === golf)) { _fun115641_ip = 1362; continue _fun115641 }
 1287:
            entity = zulu;
            _fun115641_ip = 1362; continue _fun115641;
 1292:
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 16;
            zulu = golf[zulu];
            tango = tango.bind(oscar)(zulu);
            zulu = tango.getScaledGuildMFAWarningHeight;
            entity = zulu.bind(tango)(report);
            _fun115641_ip = 1362; continue _fun115641;
 1325:
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 17;
            zulu = golf[zulu];
            tango = tango.bind(oscar)(zulu);
            zulu = tango.getScaledGuildProgressButtonHeight;
            entity = zulu.bind(tango)(report);
            _fun115641_ip = 1362; continue _fun115641;
 1358:
            entity = _closure1_slot15;
 1362:
            return entity;
        }
    };
    zulu['getChannelListItemSize'] = tango;
    mike = function(argFoo) { // Original name: calculateVoiceSummary
        _fun115642: for(var _fun115642_ip = 0; ; ) switch(_fun115642_ip) {
 0:
            entity = argFoo;
            offset = entity.guildChannels;
            options = entity.section;
            yankee = entity.optInChannelsEnabled;
            report = entity.voiceStates;
            golf = entity.selectedChannelId;
            oscar = entity.selectedVoiceChannelId;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 32;
            entity = tango[entity];
            tango = undefined;
            zulu = zulu.bind(tango)(entity);
            entity = zulu.isVoiceChannelsSection;
            entity = entity.bind(zulu)(options, offset);
            if(entity) { _fun115642_ip = 112; continue _fun115642 }
 78:
            zulu = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 31;
            entity = verify[entity];
            entity = zulu.bind(tango)(entity);
            entity = entity.SECTION_INDEX_FIRST_NAMED_CATEGORY;
            if(!(options < entity)) { _fun115642_ip = 112; continue _fun115642 }
 108:
            entity = null;
            return entity;
 112:
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            verify = 44;
            entity = entity[verify];
            zulu = zulu.bind(tango)(entity);
            entity = zulu.getSectionFooterConfig;
            entity = entity.bind(zulu)(offset, yankee, options);
            zulu = entity.canHaveVoiceSummary;
            entity = null;
            if(zulu) { _fun115642_ip = 158; continue _fun115642 }
 156:
            return entity;
 158:
            zulu = offset.getNamedCategoryFromSection;
            options = zulu.bind(offset)(options);
            if(!(entity != options)) { _fun115642_ip = 240; continue _fun115642 }
 173:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[verify];
            tango = zulu.bind(tango)(mike);
            zulu = tango.getSectionFooterActiveVoiceChannels;
            mike = {};
            mike['category'] = options;
            mike['selectedChannelId'] = golf;
            mike['selectedVoiceChannelId'] = oscar;
            mike['voiceStates'] = report;
            zulu = zulu.bind(tango)(mike);
            report = zulu.length;
            tango = 0;
            mike = null;
            if(!(tango !== report)) { _fun115642_ip = 238; continue _fun115642 }
 235:
            mike = zulu;
 238:
            return mike;
 240:
            return entity;
        }
    };
    zulu['calculateVoiceSummary'] = mike;
    return entity;
})();