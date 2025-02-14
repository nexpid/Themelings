// app/modules/search_v2/native/hooks/useOnPressSearchItem.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: addSearchHistoryItem
        _fun113212: for(var _fun113212_ip = 0; ; ) switch(_fun113212_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            zulu = argBar;
            var _closure2_slot1 = zulu;
            tango = mike.type;
            zulu = _closure1_slot18;
            zulu = zulu.DMS;
            if(!(zulu !== tango)) { _fun113212_ip = 52; continue _fun113212 }
 38:
            zulu = _closure1_slot18;
            zulu = zulu.GUILD;
            if(!(zulu === tango)) { _fun113212_ip = 92; continue _fun113212 }
 52:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 9;
            zulu = zulu[mike];
            mike = undefined;
            zulu = tango.bind(mike)(zulu);
            mike = zulu.delayUntilNavigationComplete;
            entity = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.addSearchHistoryItem;
                mike = _closure2_slot0;
                entity = _closure2_slot1;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
 92:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: addCurrentSearchQueryToSearchHistory
        tango = argFoo;
        mike = _closure1_slot7;
        entity = undefined;
        oscar = mike.bind(entity)(tango);
        mike = _closure1_slot6;
        report = mike.bind(entity)(tango);
        zulu = _closure1_slot20;
        mike = {};
        golf = _closure1_slot10;
        golf = golf.TEXT;
        mike['type'] = golf;
        mike['text'] = oscar;
        mike['tags'] = report;
        mike = zulu.bind(entity)(tango, mike);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: navigateToSearchPreview
        _fun113215: for(var _fun113215_ip = 0; ; ) switch(_fun113215_ip) {
 0:
            tango = argFoo;
            zulu = argBar;
            mike = argCorge;
            var _closure2_slot0 = zulu;
            var _closure2_slot1 = mike;
            oscar = {};
            entity = zulu.id;
            oscar['channelId'] = entity;
            entity = zulu.getGuildId;
            zulu = entity.bind(zulu)();
            entity = null;
            if(!(entity == zulu)) { _fun113215_ip = 53; continue _fun113215 }
 46:
            zulu = _closure1_slot17;
 53:
            oscar['guildId'] = zulu;
            zulu = argBaz;
            oscar['searchContext'] = zulu;
            if(!(entity == mike)) { _fun113215_ip = 96; continue _fun113215 }
 69:
            mike = tango.navigate;
            entity = _closure1_slot13;
            entity = entity.SEARCH_CHAT_PREVIEW;
            entity = mike.bind(tango)(entity, oscar);
            _fun113215_ip = 167; continue _fun113215;
 96:
            zulu = tango.navigate;
            mike = {};
            entity = _closure1_slot13;
            entity = entity.SEARCH_CHAT_PREVIEW;
            mike['screen'] = entity;
            entity = {};
            verify = entity;
            options = oscar;
            oscar = copyDataProperties(verify, options);
            oscar = function() { // Original name: onBeforeJumpToMessage
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 19;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                report = zulu.ComponentDispatch;
                tango = report.dispatch;
                mike = _closure1_slot16;
                zulu = mike.HIDE_CHANNEL_DETAILS;
                mike = {};
                golf = _closure2_slot0;
                golf = golf.id;
                mike['channelId'] = golf;
                oscar = _closure2_slot1;
                oscar = oscar.screenIndex;
                mike['screenIndex'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            report = 'onBeforeJumpToMessage';
            entity[report] = oscar;
            mike['params'] = entity;
            entity = 'sidebar';
            entity = zulu.bind(tango)(entity, mike);
 167:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: isValidMediaViewerItem
        _fun113217: for(var _fun113217_ip = 0; ; ) switch(_fun113217_ip) {
 0:
            zulu = argFoo;
            tango = zulu.type;
            entity = _closure1_slot11;
            entity = entity.ATTACHMENT;
            entity = tango === entity;
            if(entity) { _fun113217_ip = 47; continue _fun113217 }
 28:
            zulu = zulu.type;
            mike = _closure1_slot11;
            mike = mike.EMBED;
            entity = zulu === mike;
 47:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    tango = function() { // Original name: handleVoiceOrStageChannelConnectPress
        entity = undefined;
        tango = _closure1_slot25;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot24 = tango;
    entity = function() { // Original name: _handleVoiceOrStageChannelConnectPress
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun113221: for(var _fun113221_ip = 0; ; ) switch(_fun113221_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun113221_ip = 147; continue _fun113221 }
 13:
                    mike = report.isGuildStageVoice;
                    tango = mike.bind(report)();
                    golf = _closure1_slot0;
                    mike = _closure1_slot2;
                    zulu = 23;
                    oscar = mike[zulu];
                    zulu = undefined;
                    oscar = golf.bind(zulu)(oscar);
                    if(tango) { _fun113221_ip = 102; continue _fun113221 }
 51:
                    tango = 28;
                    golf = mike[tango];
                    tango = mike.paths;
                    tango = oscar.bind(zulu)(golf, tango);
                    SaveGenerator(address=73);
 71:
                    return tango;
 73:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golf) { _fun113221_ip = 99; continue _fun113221 }
 79:
                    options = tango.openGuildVoiceModal;
                    golf = 'Channel List';
                    golf = options.bind(zulu)(report, golf);
                    _fun113221_ip = 141; continue _fun113221;
 99:
                    return tango;
 102:
                    tango = 27;
                    tango = mike[tango];
                    mike = mike.paths;
                    mike = oscar.bind(zulu)(tango, mike);
                    SaveGenerator(address=124);
 122:
                    return mike;
 124:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun113221_ip = 144; continue _fun113221 }
 130:
                    tango = mike.connectAndOpen;
                    tango = tango.bind(zulu)(report);
 141:
                    return zulu;
 144:
                    return mike;
 147:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot25 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    verify = golf[report];
    report = argCorge;
    report = report.bind(entity)(verify);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.getSearchTags;
    var _closure1_slot6 = options;
    options = report.getTextInputValue;
    var _closure1_slot7 = options;
    options = report.setSearchTags;
    var _closure1_slot8 = options;
    report = report.setTextInputValue;
    var _closure1_slot9 = report;
    report = 4;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.SearchHistoryItemTypes;
    var _closure1_slot10 = options;
    options = report.SearchMediaTypes;
    var _closure1_slot11 = options;
    report = report.SearchQueryTagTypes;
    var _closure1_slot12 = report;
    report = 5;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.SearchNavigatorScreens;
    var _closure1_slot13 = report;
    report = 6;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.SearchFilterAddLocations;
    var _closure1_slot14 = report;
    report = 7;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.Routes;
    var _closure1_slot15 = options;
    options = report.ComponentActions;
    var _closure1_slot16 = options;
    options = report.ME;
    var _closure1_slot17 = options;
    report = report.SearchTypes;
    var _closure1_slot18 = report;
    report = 8;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.StaticChannelRoute;
    var _closure1_slot19 = report;
    report = 35;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/search_v2/native/hooks/useOnPressSearchItem.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: useOnPressSearchLink
        report = argFoo;
        var _closure2_slot0 = report;
        tango = _closure1_slot4;
        zulu = tango.useCallback;
        mike = new Array(1);
        mike[0] = report;
        entity = function(argFoo, argBar) {
            _fun113223: for(var _fun113223_ip = 0; ; ) switch(_fun113223_ip) {
 0:
                entity = argBar;
                var _closure3_slot0 = entity;
                tango = _closure1_slot21;
                zulu = _closure2_slot0;
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                oscar = _closure1_slot1;
                tango = _closure1_slot2;
                zulu = 11;
                tango = tango[zulu];
                golf = oscar.bind(entity)(tango);
                oscar = golf.safeParseWithQuery;
                tango = argFoo;
                golf = oscar.bind(golf)(tango);
                oscar = null;
                if(!(oscar != golf)) { _fun113223_ip = 90; continue _fun113223 }
 70:
                tango = golf.protocol;
                if(!(oscar != tango)) { _fun113223_ip = 90; continue _fun113223 }
 80:
                tango = golf.hostname;
                if(!(oscar == tango)) { _fun113223_ip = 170; continue _fun113223 }
 90:
                yankee = _closure1_slot0;
                romeo = _closure1_slot2;
                tango = 12;
                tango = romeo[tango];
                options = yankee.bind(entity)(tango);
                oscar = options.presentFailedToast;
                tango = 13;
                verify = romeo[tango];
                verify = yankee.bind(entity)(verify);
                offset = verify.intl;
                verify = offset.string;
                tango = romeo[tango];
                tango = yankee.bind(entity)(tango);
                tango = tango.t;
                tango = tango.XiqzAg;
                tango = verify.bind(offset)(tango);
                tango = oscar.bind(options)(tango);
                _fun113223_ip = 259; continue _fun113223;
 170:
                oscar = _closure1_slot1;
                tango = _closure1_slot2;
                zulu = tango[zulu];
                oscar = oscar.bind(entity)(zulu);
                zulu = oscar.format;
                oscar = zulu.bind(oscar)(golf);
                var _closure3_slot1 = oscar;
                zulu = _closure1_slot0;
                mike = 14;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.handleClick;
                mike = {};
                mike['href'] = oscar;
                oscar = function() { // Original name: onConfirm
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 15;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.openURL;
                    entity = _closure3_slot1;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                mike['onConfirm'] = oscar;
                report = function() { // Original name: trusted
                    entity = _closure3_slot0;
                    return entity;
                };
                mike['trusted'] = report;
                mike = zulu.bind(tango)(mike);
 259:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useOnPressSearchLink'] = report;
    report = function(argFoo) { // Original name: useOnPressSearchItem
        mike = argFoo;
        oscar = mike.searchContext;
        var _closure2_slot0 = oscar;
        options = _closure1_slot0;
        verify = _closure1_slot2;
        zulu = 16;
        zulu = verify[zulu];
        report = undefined;
        tango = options.bind(report)(zulu);
        zulu = tango.useNavigation;
        golf = zulu.bind(tango)();
        var _closure2_slot1 = golf;
        tango = _closure1_slot4;
        zulu = tango.useContext;
        mike = 17;
        mike = verify[mike];
        mike = options.bind(report)(mike);
        mike = mike.SwipeForMemberListContext;
        report = zulu.bind(tango)(mike);
        var _closure2_slot2 = report;
        zulu = tango.useCallback;
        mike = new Array(3);
        mike[0] = golf;
        mike[1] = oscar;
        mike[2] = report;
        entity = function(argFoo, argBar) {
            _fun113227: for(var _fun113227_ip = 0; ; ) switch(_fun113227_ip) {
 0:
                options = argFoo;
                tango = _closure1_slot5;
                zulu = tango.getChannel;
                tango = zulu.bind(tango)(options);
                var _closure3_slot0 = tango;
                zulu = null;
                if(!(zulu != tango)) { _fun113227_ip = 119; continue _fun113227 }
 32:
                report = _closure1_slot21;
                zulu = _closure2_slot0;
                tango = undefined;
                zulu = report.bind(tango)(zulu);
                oscar = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 18;
                zulu = report[zulu];
                golf = oscar.bind(tango)(zulu);
                oscar = golf.fetchMessages;
                zulu = argBar;
                zulu = oscar.bind(golf)(options, zulu);
                zulu = _closure1_slot0;
                mike = 9;
                mike = report[mike];
                zulu = zulu.bind(tango)(mike);
                mike = zulu.performKeyboardAwareNavigation;
                entity = function() {
                    oscar = _closure1_slot22;
                    offset = _closure2_slot1;
                    verify = _closure3_slot0;
                    options = _closure2_slot0;
                    golf = _closure2_slot2;
                    entity = undefined;
                    yankee = undefined;
                    mike = yankee[oscar](offset, verify, options, golf, oscar);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
 119:
                entity = undefined;
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useOnPressSearchItem'] = report;
    report = function(argFoo) { // Original name: useOnPressMediaItem
        mike = argFoo;
        oscar = mike.searchContext;
        var _closure2_slot0 = oscar;
        mike = mike.mediaResults;
        var _closure2_slot1 = mike;
        verify = _closure1_slot0;
        offset = _closure1_slot2;
        tango = 16;
        tango = offset[tango];
        options = undefined;
        report = verify.bind(options)(tango);
        tango = report.useNavigation;
        golf = tango.bind(report)();
        var _closure2_slot2 = golf;
        tango = _closure1_slot4;
        report = tango.useContext;
        zulu = 17;
        zulu = offset[zulu];
        zulu = verify.bind(options)(zulu);
        zulu = zulu.SwipeForMemberListContext;
        report = report.bind(tango)(zulu);
        var _closure2_slot3 = report;
        zulu = tango.useRef;
        zulu = zulu.bind(tango)(mike);
        var _closure2_slot4 = zulu;
        options = tango.useEffect;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            mike = _closure2_slot4;
            entity = _closure2_slot1;
            mike['current'] = entity;
            entity = undefined;
            return entity;
        };
        mike = options.bind(tango)(mike, zulu);
        zulu = tango.useCallback;
        mike = new Array(3);
        mike[0] = golf;
        mike[1] = oscar;
        mike[2] = report;
        entity = function(argFoo, argBar) {
            _fun113231: for(var _fun113231_ip = 0; ; ) switch(_fun113231_ip) {
 0:
                tango = argFoo;
                var _closure3_slot0 = tango;
                entity = argBar;
                var _closure3_slot1 = entity;
                oscar = _closure1_slot21;
                report = _closure2_slot0;
                entity = undefined;
                report = oscar.bind(entity)(report);
                oscar = tango.type;
                report = _closure1_slot11;
                report = report.SOUND;
                if(!(report !== oscar)) { _fun113231_ip = 141; continue _fun113231 }
 56:
                report = _closure1_slot11;
                report = report.ATTACHMENT;
                if(!(report !== oscar)) { _fun113231_ip = 84; continue _fun113231 }
 70:
                report = _closure1_slot11;
                report = report.EMBED;
                if(!(report === oscar)) { _fun113231_ip = 139; continue _fun113231 }
 84:
                golf = _closure1_slot0;
                report = _closure1_slot2;
                oscar = 23;
                oscar = report[oscar];
                golf = golf.bind(entity)(oscar);
                oscar = 22;
                oscar = report[oscar];
                report = report.paths;
                golf = golf.bind(entity)(oscar, report);
                oscar = golf.then;
                report = function(argFoo) {
                    mike = argFoo;
                    tango = mike.openMediaModal;
                    mike = _closure2_slot4;
                    report = mike.current;
                    zulu = report.filter;
                    mike = _closure1_slot23;
                    report = zulu.bind(report)(mike);
                    zulu = {};
                    oscar = report.map;
                    mike = function(argFoo) {
                        _fun113234: for(var _fun113234_ip = 0; ; ) switch(_fun113234_ip) {
 0:
                            romeo = argFoo;
                            zulu = romeo.type;
                            mike = _closure1_slot11;
                            mike = mike.EMBED;
                            if(!(zulu !== mike)) { _fun113234_ip = 216; continue _fun113234 }
 28:
                            zulu = romeo.attachment;
                            report = zulu.proxy_url;
                            options = null;
                            if(!(options == report)) { _fun113234_ip = 51; continue _fun113234 }
 46:
                            report = zulu.url;
 51:
                            oscar = _closure1_slot1;
                            tango = _closure1_slot2;
                            mike = 20;
                            mike = tango[mike];
                            tango = undefined;
                            golf = oscar.bind(tango)(mike);
                            mike = zulu.width;
                            oscar = options != mike;
                            if(!oscar) { _fun113234_ip = 94; continue _fun113234 }
 85:
                            mike = zulu.height;
                            oscar = options != mike;
 94:
                            mike = '[useOnPressSearchItem] Attachment dimensions should not be null.';
                            mike = golf.bind(tango)(oscar, mike);
                            mike = {};
                            mike['uri'] = report;
                            mike['sourceURI'] = report;
                            oscar = zulu.width;
                            mike['width'] = oscar;
                            oscar = zulu.height;
                            mike['height'] = oscar;
                            golf = _closure1_slot0;
                            options = _closure1_slot2;
                            oscar = 21;
                            oscar = options[oscar];
                            options = golf.bind(tango)(oscar);
                            golf = options.isVideoFile;
                            oscar = zulu.filename;
                            oscar = golf.bind(options)(oscar);
                            tango = undefined;
                            if(!oscar) { _fun113234_ip = 180; continue _fun113234 }
 177:
                            tango = report;
 180:
                            mike['videoURI'] = tango;
                            tango = false;
                            mike['isGIFV'] = tango;
                            tango = 'attachment';
                            mike['accessoryType'] = tango;
                            zulu = zulu.id;
                            mike['attachmentId'] = zulu;
                            _fun113234_ip = 424; continue _fun113234;
 216:
                            zulu = romeo.embed;
                            oscar = _closure1_slot0;
                            golf = _closure1_slot2;
                            tango = 9;
                            report = golf[tango];
                            tango = undefined;
                            oscar = oscar.bind(tango)(report);
                            report = oscar.getEmbedImage;
                            options = report.bind(oscar)(zulu);
                            oscar = _closure1_slot1;
                            report = 20;
                            report = golf[report];
                            verify = oscar.bind(tango)(report);
                            golf = null;
                            oscar = golf != options;
                            report = '[useOnPressSearchItem] Embed image should not be null.';
                            report = verify.bind(tango)(oscar, report);
                            offset = zulu.video;
                            report = zulu.type;
                            verify = options.proxyURL;
                            if(!(golf == verify)) { _fun113234_ip = 315; continue _fun113234 }
 310:
                            verify = options.url;
 315:
                            zulu = golf == offset;
                            oscar = undefined;
                            if(zulu) { _fun113234_ip = 330; continue _fun113234 }
 324:
                            oscar = offset.proxyURL;
 330:
                            if(!(golf == oscar)) { _fun113234_ip = 351; continue _fun113234 }
 334:
                            yankee = golf == offset;
                            zulu = undefined;
                            if(yankee) { _fun113234_ip = 348; continue _fun113234 }
 343:
                            zulu = offset.url;
 348:
                            oscar = zulu;
 351:
                            zulu = {};
                            zulu['uri'] = verify;
                            zulu['sourceURI'] = oscar;
                            verify = options.width;
                            zulu['width'] = verify;
                            options = options.height;
                            zulu['height'] = options;
                            golf = golf != oscar;
                            tango = undefined;
                            if(!golf) { _fun113234_ip = 392; continue _fun113234 }
 389:
                            tango = oscar;
 392:
                            zulu['videoURI'] = tango;
                            tango = 'gifv';
                            tango = tango === report;
                            zulu['isGIFV'] = tango;
                            tango = 'embed';
                            zulu['accessoryType'] = tango;
                            mike = zulu;
 424:
                            foxtrot = mike.uri;
                            golf = mike.sourceURI;
                            oscar = mike.width;
                            report = mike.height;
                            offset = mike.videoURI;
                            options = mike.isGIFV;
                            tango = mike.accessoryType;
                            zulu = mike.attachmentId;
                            mike = null;
                            yankee = mike != offset;
                            mike = {};
                            backup = _closure1_slot0;
                            verify = _closure1_slot2;
                            entity = 24;
                            entity = verify[entity];
                            verify = undefined;
                            kilo = backup.bind(verify)(entity);
                            backup = kilo.getMobileOptimizedSrc;
                            entity = undefined;
                            if(!yankee) { _fun113234_ip = 516; continue _fun113234 }
 510:
                            entity = 'png';
 516:
                            source = kilo;
                            update = foxtrot;
                            echo = oscar;
                            result = report;
                            output = entity;
                            entity = source[backup](update, echo, result, output, sizing);
                            mike['uri'] = entity;
                            entity = romeo.messageId;
                            mike['messageId'] = entity;
                            entity = romeo.channelId;
                            mike['channelId'] = entity;
                            entity = romeo.mediaIndex;
                            mike['mediaIndex'] = entity;
                            mike['sourceURI'] = golf;
                            mike['width'] = oscar;
                            mike['height'] = report;
                            mike['accessoryType'] = tango;
                            mike['attachmentId'] = zulu;
                            entity = new Array(2);
                            entity[0] = mike;
                            mike = {};
                            mike['uri'] = foxtrot;
                            foxtrot = romeo.messageId;
                            mike['messageId'] = foxtrot;
                            foxtrot = romeo.channelId;
                            mike['channelId'] = foxtrot;
                            romeo = romeo.mediaIndex;
                            mike['mediaIndex'] = romeo;
                            verify = undefined;
                            if(!yankee) { _fun113234_ip = 642; continue _fun113234 }
 639:
                            verify = offset;
 642:
                            mike['videoURI'] = verify;
                            mike['isGIFV'] = options;
                            mike['sourceURI'] = golf;
                            mike['width'] = oscar;
                            mike['height'] = report;
                            mike['accessoryType'] = tango;
                            mike['attachmentId'] = zulu;
                            entity[1] = mike;
                            return entity;
                        }
                    };
                    mike = oscar.bind(report)(mike);
                    zulu['initialSources'] = mike;
                    mike = report.findIndex;
                    entity = function(argFoo) {
                        _fun113235: for(var _fun113235_ip = 0; ; ) switch(_fun113235_ip) {
 0:
                            zulu = argFoo;
                            tango = zulu.messageId;
                            entity = _closure3_slot0;
                            entity = entity.messageId;
                            entity = tango === entity;
                            if(!entity) { _fun113235_ip = 47; continue _fun113235 }
 27:
                            zulu = zulu.mediaIndex;
                            mike = _closure3_slot0;
                            mike = mike.mediaIndex;
                            entity = zulu === mike;
 47:
                            return entity;
                        }
                    };
                    entity = mike.bind(report)(entity);
                    zulu['initialIndex'] = entity;
                    entity = 'Search';
                    zulu['analyticsSource'] = entity;
                    entity = true;
                    zulu['disableRemix'] = entity;
                    mike = _closure3_slot1;
                    entity = undefined;
                    mike = tango.bind(entity)(zulu, mike);
                    return entity;
                };
                report = oscar.bind(golf)(report);
 139:
                return entity;
 141:
                golf = _closure1_slot5;
                oscar = golf.getChannel;
                report = tango.channelId;
                oscar = oscar.bind(golf)(report);
                var _closure3_slot2 = oscar;
                report = null;
                if(!(report != oscar)) { _fun113231_ip = 250; continue _fun113231 }
 170:
                golf = _closure1_slot1;
                report = _closure1_slot2;
                oscar = 18;
                oscar = report[oscar];
                options = golf.bind(entity)(oscar);
                golf = options.fetchMessages;
                oscar = tango.channelId;
                tango = tango.messageId;
                tango = golf.bind(options)(oscar, tango);
                tango = _closure1_slot0;
                zulu = 9;
                zulu = report[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.performKeyboardAwareNavigation;
                mike = function() {
                    oscar = _closure1_slot22;
                    offset = _closure2_slot2;
                    verify = _closure3_slot2;
                    options = _closure2_slot0;
                    golf = _closure2_slot3;
                    entity = undefined;
                    yankee = undefined;
                    mike = yankee[oscar](offset, verify, options, golf, oscar);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                mike = undefined;
                return mike;
 250:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useOnPressMediaItem'] = report;
    report = function(argFoo) { // Original name: useOnPressGroupDMItem
        mike = argFoo;
        report = mike.searchContext;
        var _closure2_slot0 = report;
        oscar = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 16;
        tango = tango[zulu];
        zulu = undefined;
        tango = oscar.bind(zulu)(tango);
        zulu = tango.useNavigation;
        oscar = zulu.bind(tango)();
        var _closure2_slot1 = oscar;
        tango = _closure1_slot4;
        zulu = tango.useCallback;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function(argFoo) {
            _fun113237: for(var _fun113237_ip = 0; ; ) switch(_fun113237_ip) {
 0:
                options = argFoo;
                var _closure3_slot0 = options;
                golf = _closure1_slot20;
                oscar = _closure2_slot0;
                report = {};
                entity = _closure1_slot10;
                entity = entity.GROUP_DM;
                report['type'] = entity;
                report['channelId'] = options;
                entity = undefined;
                report = golf.bind(entity)(oscar, report);
                report = _closure2_slot1;
                tango = report.getParent;
                report = tango.bind(report)();
                tango = null;
                if(!(tango != report)) { _fun113237_ip = 81; continue _fun113237 }
 71:
                tango = report.goBack;
                tango = tango.bind(report)();
 81:
                oscar = _closure1_slot1;
                report = _closure1_slot2;
                tango = 25;
                tango = report[tango];
                golf = oscar.bind(entity)(tango);
                oscar = golf.preload;
                tango = _closure1_slot17;
                tango = oscar.bind(golf)(tango, options);
                tango = _closure1_slot0;
                zulu = 9;
                zulu = report[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.performKeyboardAwareNavigation;
                mike = function() {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 26;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.transitionToChannel;
                    mike = _closure3_slot0;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useOnPressGroupDMItem'] = report;
    report = function(argFoo) { // Original name: useOnPressDMItem
        mike = argFoo;
        report = mike.searchContext;
        var _closure2_slot0 = report;
        oscar = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 16;
        tango = tango[zulu];
        zulu = undefined;
        tango = oscar.bind(zulu)(tango);
        zulu = tango.useNavigation;
        oscar = zulu.bind(tango)();
        var _closure2_slot1 = oscar;
        tango = _closure1_slot4;
        zulu = tango.useCallback;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function(argFoo, argBar) {
            _fun113240: for(var _fun113240_ip = 0; ; ) switch(_fun113240_ip) {
 0:
                entity = argBar;
                var _closure3_slot0 = entity;
                options = _closure1_slot20;
                golf = _closure2_slot0;
                oscar = {};
                report = _closure1_slot10;
                report = report.DM;
                oscar['type'] = report;
                report = argFoo;
                oscar['userId'] = report;
                report = undefined;
                oscar = options.bind(report)(golf, oscar);
                oscar = _closure2_slot1;
                tango = oscar.getParent;
                oscar = tango.bind(oscar)();
                tango = null;
                if(!(tango != oscar)) { _fun113240_ip = 84; continue _fun113240 }
 74:
                tango = oscar.goBack;
                tango = tango.bind(oscar)();
 84:
                golf = _closure1_slot1;
                oscar = _closure1_slot2;
                tango = 25;
                tango = oscar[tango];
                options = golf.bind(report)(tango);
                golf = options.preload;
                tango = _closure1_slot17;
                tango = golf.bind(options)(tango, entity);
                tango = _closure1_slot0;
                zulu = 9;
                zulu = oscar[zulu];
                tango = tango.bind(report)(zulu);
                zulu = tango.performKeyboardAwareNavigation;
                mike = function() {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 26;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.transitionToChannel;
                    mike = _closure3_slot0;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useOnPressDMItem'] = report;
    report = function(argFoo) { // Original name: useOnPressGuildTextChannel
        mike = argFoo;
        report = mike.searchContext;
        var _closure2_slot0 = report;
        tango = _closure1_slot4;
        zulu = tango.useCallback;
        mike = new Array(1);
        mike[0] = report;
        entity = function(argFoo) {
            _fun113243: for(var _fun113243_ip = 0; ; ) switch(_fun113243_ip) {
 0:
                report = _closure1_slot5;
                mike = report.getChannel;
                entity = argFoo;
                report = mike.bind(report)(entity);
                var _closure3_slot0 = report;
                entity = null;
                if(!(entity != report)) { _fun113243_ip = 157; continue _fun113243 }
 35:
                options = _closure1_slot20;
                golf = _closure2_slot0;
                oscar = {};
                mike = _closure1_slot10;
                mike = mike.GUILD_TEXT_CHANNEL;
                oscar['type'] = mike;
                mike = report.id;
                oscar['channelId'] = mike;
                mike = undefined;
                oscar = options.bind(mike)(golf, oscar);
                options = _closure1_slot1;
                oscar = _closure1_slot2;
                golf = 25;
                golf = oscar[golf];
                verify = options.bind(mike)(golf);
                options = verify.preload;
                golf = report.guild_id;
                report = report.id;
                report = options.bind(verify)(golf, report);
                report = _closure1_slot0;
                tango = 9;
                tango = oscar[tango];
                report = report.bind(mike)(tango);
                tango = report.performKeyboardAwareNavigation;
                zulu = function() {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 26;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.transitionToChannel;
                    entity = _closure3_slot0;
                    entity = entity.id;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                zulu = tango.bind(report)(zulu);
                return mike;
 157:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useOnPressGuildTextChannel'] = report;
    zulu['handleVoiceOrStageChannelConnectPress'] = tango;
    tango = function(argFoo) { // Original name: useOnPressGuildVoiceChannel
        mike = argFoo;
        report = mike.searchContext;
        var _closure2_slot0 = report;
        oscar = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 16;
        zulu = tango[zulu];
        tango = undefined;
        oscar = oscar.bind(tango)(zulu);
        zulu = oscar.useNavigation;
        golf = zulu.bind(oscar)();
        var _closure2_slot1 = golf;
        zulu = function() { // Original name: useVoiceChannelOnPressHandler
            tango = _closure1_slot4;
            zulu = tango.useCallback;
            mike = function() {
                tango = _closure1_slot3;
                zulu = undefined;
                mike = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun113249: for(var _fun113249_ip = 0; ; ) switch(_fun113249_ip) {
 0:
                            StartGenerator();
                            report = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun113249_ip = 269; continue _fun113249 }
 15:
                            var _closure6_slot0 = report;
                            oscar = _closure1_slot0;
                            golf = _closure1_slot2;
                            zulu = 29;
                            zulu = golf[zulu];
                            golf = undefined;
                            options = oscar.bind(golf)(zulu);
                            oscar = options.getChannelRoleSubscriptionStatus;
                            zulu = report.id;
                            zulu = oscar.bind(options)(zulu);
                            zulu = zulu.needSubscriptionToAccess;
                            oscar = report.getGuildId;
                            oscar = oscar.bind(report)();
                            options = null;
                            if(!(options != oscar)) { _fun113249_ip = 116; continue _fun113249 }
 82:
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            options = 30;
                            options = offset[options];
                            verify = verify.bind(golf)(options);
                            options = verify.shouldShowMembershipVerificationGate;
                            options = options.bind(verify)(oscar);
                            if(options) { _fun113249_ip = 196; continue _fun113249 }
 116:
                            if(zulu) { _fun113249_ip = 132; continue _fun113249 }
 119:
                            zulu = _closure1_slot24;
                            zulu = zulu.bind(golf)(report);
                            zulu = undefined;
                            _fun113249_ip = 194; continue _fun113249;
 132:
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            options = 32;
                            options = offset[options];
                            verify = verify.bind(golf)(options);
                            options = verify.transitionTo;
                            romeo = _closure1_slot15;
                            yankee = romeo.CHANNEL;
                            offset = report.guild_id;
                            report = _closure1_slot19;
                            report = report.ROLE_SUBSCRIPTIONS;
                            report = yankee.bind(romeo)(offset, report);
                            zulu = options.bind(verify)(report);
 194:
                            _fun113249_ip = 263; continue _fun113249;
 196:
                            options = _closure1_slot0;
                            mike = _closure1_slot2;
                            report = 23;
                            report = mike[report];
                            options = options.bind(golf)(report);
                            report = 31;
                            report = mike[report];
                            mike = mike.paths;
                            mike = options.bind(golf)(report, mike);
                            SaveGenerator(address=238);
 236:
                            return mike;
 238:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(report) { _fun113249_ip = 266; continue _fun113249 }
 244:
                            report = mike.openMemberVerificationModal;
                            tango = function() {
                                zulu = _closure1_slot24;
                                mike = _closure6_slot0;
                                entity = undefined;
                                entity = zulu.bind(entity)(mike);
                                return entity;
                            };
                            zulu = report.bind(golf)(oscar, tango);
 263:
                            return zulu;
 266:
                            return mike;
 269:
                            return entity;
                        }
                    };
                    return entity;
                };
                mike = tango.bind(zulu)(mike);
                var _closure4_slot0 = mike;
                entity = function() {
                    entity = undefined;
                    tango = _closure4_slot0;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                return entity;
            };
            entity = undefined;
            mike = mike.bind(entity)();
            entity = new Array(0);
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        oscar = zulu.bind(tango)();
        var _closure2_slot2 = oscar;
        tango = _closure1_slot4;
        zulu = tango.useCallback;
        mike = new Array(3);
        mike[0] = golf;
        mike[1] = oscar;
        mike[2] = report;
        entity = function(argFoo) {
            _fun113252: for(var _fun113252_ip = 0; ; ) switch(_fun113252_ip) {
 0:
                report = _closure1_slot5;
                mike = report.getChannel;
                entity = argFoo;
                mike = mike.bind(report)(entity);
                var _closure3_slot0 = mike;
                entity = null;
                if(!(entity != mike)) { _fun113252_ip = 144; continue _fun113252 }
 32:
                options = _closure1_slot20;
                golf = _closure2_slot0;
                oscar = {};
                verify = _closure1_slot10;
                verify = verify.GUILD_VOICE_CHANNEL;
                oscar['type'] = verify;
                mike = mike.id;
                oscar['channelId'] = mike;
                mike = undefined;
                oscar = options.bind(mike)(golf, oscar);
                oscar = _closure2_slot1;
                report = oscar.getParent;
                oscar = report.bind(oscar)();
                if(!(entity != oscar)) { _fun113252_ip = 104; continue _fun113252 }
 94:
                report = oscar.goBack;
                report = report.bind(oscar)();
 104:
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                tango = 9;
                tango = oscar[tango];
                report = report.bind(mike)(tango);
                tango = report.performKeyboardAwareNavigation;
                zulu = function() {
                    zulu = _closure2_slot2;
                    mike = _closure3_slot0;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                zulu = tango.bind(report)(zulu);
                return mike;
 144:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useOnPressGuildVoiceChannel'] = tango;
    mike = function(argFoo) { // Original name: useOnPressSearchHistoryText
        mike = argFoo;
        report = mike.searchContext;
        var _closure2_slot0 = report;
        tango = _closure1_slot4;
        zulu = tango.useCallback;
        mike = new Array(1);
        mike[0] = report;
        entity = function(argFoo, argBar) {
            _fun113255: for(var _fun113255_ip = 0; ; ) switch(_fun113255_ip) {
 0:
                entity = argFoo;
                tango = argBar;
                var _closure3_slot0 = entity;
                var _closure3_slot1 = tango;
                golf = _closure1_slot20;
                oscar = _closure2_slot0;
                report = {};
                options = _closure1_slot10;
                options = options.TEXT;
                report['type'] = options;
                report['text'] = entity;
                report['tags'] = tango;
                entity = undefined;
                report = golf.bind(entity)(oscar, report);
                options = _closure1_slot0;
                golf = _closure1_slot2;
                report = 33;
                report = golf[report];
                verify = options.bind(entity)(report);
                options = verify.batchUpdates;
                report = function() {
                    _fun113256: for(var _fun113256_ip = 0; ; ) switch(_fun113256_ip) {
 0:
                        zulu = _closure3_slot1;
                        mike = null;
                        if(!(mike != zulu)) { _fun113256_ip = 39; continue _fun113256 }
 13:
                        report = _closure1_slot8;
                        tango = _closure2_slot0;
                        zulu = _closure3_slot1;
                        mike = undefined;
                        mike = report.bind(mike)(tango, zulu);
 39:
                        tango = _closure1_slot9;
                        zulu = _closure2_slot0;
                        mike = _closure3_slot0;
                        entity = undefined;
                        mike = tango.bind(entity)(zulu, mike);
                        return entity;
                    }
                };
                report = options.bind(verify)(report);
                report = _closure1_slot1;
                zulu = 10;
                zulu = golf[zulu];
                report = report.bind(entity)(zulu);
                zulu = report.fetchInitialMessages;
                zulu = zulu.bind(report)(oscar);
                zulu = null;
                if(!(zulu != tango)) { _fun113255_ip = 151; continue _fun113255 }
 134:
                zulu = tango.forEach;
                mike = function(argFoo) {
                    _fun113257: for(var _fun113257_ip = 0; ; ) switch(_fun113257_ip) {
 0:
                        report = argFoo;
                        mike = report.type;
                        entity = _closure1_slot12;
                        entity = entity.COMPLETE;
                        if(!(mike === entity)) { _fun113257_ip = 97; continue _fun113257 }
 25:
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 34;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.trackSearchFilterAdd;
                        entity = {};
                        oscar = _closure2_slot0;
                        entity['searchContext'] = oscar;
                        report = report.searchTokenType;
                        entity['searchTokenType'] = report;
                        tango = _closure1_slot14;
                        tango = tango.SEARCH_HISTORY;
                        entity['location'] = tango;
                        entity = mike.bind(zulu)(entity);
 97:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
 151:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useOnPressSearchHistoryText'] = mike;
    return entity;
})();