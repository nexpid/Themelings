// app/modules/search_v2/native/hooks/useOnPressSearchItem.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = function(argFoo, argBar) { // Original name: addSearchHistoryItem
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            zuuluu = argBar;
            var _closure2_slot1 = zuuluu;
            tangon = michal.type;
            zuuluu = _closure1_slot18;
            zuuluu = zuuluu.DMS;
            if(!(zuuluu !== tangon)) { _fun00002_ip = 52; continue _fun00001 }
 38:
            zuuluu = _closure1_slot18;
            zuuluu = zuuluu.GUILD;
            if(!(zuuluu === tangon)) { _fun00002_ip = 92; continue _fun00001 }
 52:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 9;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = tangon.bind(michal)(zuuluu);
            michal = zuuluu.delayUntilNavigationComplete;
            entity = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 10;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.addSearchHistoryItem;
                michal = _closure2_slot0;
                entity = _closure2_slot1;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
 92:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: addCurrentSearchQueryToSearchHistory
        tangon = argFoo;
        michal = _closure1_slot7;
        entity = undefined;
        oscard = michal.bind(entity)(tangon);
        michal = _closure1_slot6;
        report = michal.bind(entity)(tangon);
        zuuluu = _closure1_slot20;
        michal = {};
        golfie = _closure1_slot10;
        golfie = golfie.TEXT;
        michal['type'] = golfie;
        michal['text'] = oscard;
        michal['tags'] = report;
        michal = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: navigateToSearchPreview
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            michal = argCor;
            var _closure2_slot0 = zuuluu;
            var _closure2_slot1 = michal;
            oscard = {};
            entity = zuuluu.id;
            oscard['channelId'] = entity;
            entity = zuuluu.getGuildId;
            zuuluu = entity.bind(zuuluu)();
            entity = null;
            if(!(entity == zuuluu)) { _fun00004_ip = 53; continue _fun00003 }
 46:
            zuuluu = _closure1_slot17;
 53:
            oscard['guildId'] = zuuluu;
            zuuluu = argBaz;
            oscard['searchContext'] = zuuluu;
            if(!(entity == michal)) { _fun00004_ip = 96; continue _fun00003 }
 69:
            michal = tangon.navigate;
            entity = _closure1_slot13;
            entity = entity.SEARCH_CHAT_PREVIEW;
            entity = michal.bind(tangon)(entity, oscard);
            _fun00004_ip = 167; continue _fun00003;
 96:
            zuuluu = tangon.navigate;
            michal = {};
            entity = _closure1_slot13;
            entity = entity.SEARCH_CHAT_PREVIEW;
            michal['screen'] = entity;
            entity = {};
            verify = entity;
            option = oscard;
            oscard = copyDataProperties(verify, option);
            oscard = function() { // Original name: onBeforeJumpToMessage
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 19;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                report = zuuluu.ComponentDispatch;
                tangon = report.dispatch;
                michal = _closure1_slot16;
                zuuluu = michal.HIDE_CHANNEL_DETAILS;
                michal = {};
                golfie = _closure2_slot0;
                golfie = golfie.id;
                michal['channelId'] = golfie;
                oscard = _closure2_slot1;
                oscard = oscard.screenIndex;
                michal['screenIndex'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            report = 'onBeforeJumpToMessage';
            entity[report] = oscard;
            michal['params'] = entity;
            entity = 'sidebar';
            entity = zuuluu.bind(tangon)(entity, michal);
 167:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: isValidMediaViewerItem
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            tangon = zuuluu.type;
            entity = _closure1_slot11;
            entity = entity.ATTACHMENT;
            entity = tangon === entity;
            if(entity) { _fun00006_ip = 47; continue _fun00005 }
 28:
            zuuluu = zuuluu.type;
            michal = _closure1_slot11;
            michal = michal.EMBED;
            entity = zuuluu === michal;
 47:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    tangon = function() { // Original name: handleVoiceOrStageChannelConnectPress
        entity = undefined;
        tangon = _closure1_slot25;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot24 = tangon;
    entity = function() { // Original name: _handleVoiceOrStageChannelConnectPress
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 147; continue _fun00007 }
 13:
                    michal = report.isGuildStageVoice;
                    tangon = michal.bind(report)();
                    golfie = _closure1_slot0;
                    michal = _closure1_slot2;
                    zuuluu = 23;
                    oscard = michal[zuuluu];
                    zuuluu = undefined;
                    oscard = golfie.bind(zuuluu)(oscard);
                    if(tangon) { _fun00008_ip = 102; continue _fun00007 }
 51:
                    tangon = 28;
                    golfie = michal[tangon];
                    tangon = michal.paths;
                    tangon = oscard.bind(zuuluu)(golfie, tangon);
                    SaveGenerator(address=73);
 71:
                    return tangon;
 73:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golfie) { _fun00008_ip = 99; continue _fun00007 }
 79:
                    option = tangon.openGuildVoiceModal;
                    golfie = 'Channel List';
                    golfie = option.bind(zuuluu)(report, golfie);
                    _fun00008_ip = 141; continue _fun00007;
 99:
                    return tangon;
 102:
                    tangon = 27;
                    tangon = michal[tangon];
                    michal = michal.paths;
                    michal = oscard.bind(zuuluu)(tangon, michal);
                    SaveGenerator(address=124);
 122:
                    return michal;
 124:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 144; continue _fun00007 }
 130:
                    tangon = michal.connectAndOpen;
                    tangon = tangon.bind(zuuluu)(report);
 141:
                    return zuuluu;
 144:
                    return michal;
 147:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot25 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
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
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    verify = golfie[report];
    report = argCor;
    report = report.bind(entity)(verify);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.getSearchTags;
    var _closure1_slot6 = option;
    option = report.getTextInputValue;
    var _closure1_slot7 = option;
    option = report.setSearchTags;
    var _closure1_slot8 = option;
    report = report.setTextInputValue;
    var _closure1_slot9 = report;
    report = 4;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.SearchHistoryItemTypes;
    var _closure1_slot10 = option;
    option = report.SearchMediaTypes;
    var _closure1_slot11 = option;
    report = report.SearchQueryTagTypes;
    var _closure1_slot12 = report;
    report = 5;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.SearchNavigatorScreens;
    var _closure1_slot13 = report;
    report = 6;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.SearchFilterAddLocations;
    var _closure1_slot14 = report;
    report = 7;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.Routes;
    var _closure1_slot15 = option;
    option = report.ComponentActions;
    var _closure1_slot16 = option;
    option = report.ME;
    var _closure1_slot17 = option;
    report = report.SearchTypes;
    var _closure1_slot18 = report;
    report = 8;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.StaticChannelRoute;
    var _closure1_slot19 = report;
    report = 35;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/search_v2/native/hooks/useOnPressSearchItem.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: useOnPressSearchLink
        report = argFoo;
        var _closure2_slot0 = report;
        tangon = _closure1_slot4;
        zuuluu = tangon.useCallback;
        michal = new Array(1);
        michal[0] = report;
        entity = function(argFoo, argBar) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = argBar;
                var _closure3_slot0 = entity;
                tangon = _closure1_slot21;
                zuuluu = _closure2_slot0;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                oscard = _closure1_slot1;
                tangon = _closure1_slot2;
                zuuluu = 11;
                tangon = tangon[zuuluu];
                golfie = oscard.bind(entity)(tangon);
                oscard = golfie.safeParseWithQuery;
                tangon = argFoo;
                golfie = oscard.bind(golfie)(tangon);
                oscard = null;
                if(!(oscard != golfie)) { _fun00010_ip = 90; continue _fun00009 }
 70:
                tangon = golfie.protocol;
                if(!(oscard != tangon)) { _fun00010_ip = 90; continue _fun00009 }
 80:
                tangon = golfie.hostname;
                if(!(oscard == tangon)) { _fun00010_ip = 170; continue _fun00009 }
 90:
                yankee = _closure1_slot0;
                romeon = _closure1_slot2;
                tangon = 12;
                tangon = romeon[tangon];
                option = yankee.bind(entity)(tangon);
                oscard = option.presentFailedToast;
                tangon = 13;
                verify = romeon[tangon];
                verify = yankee.bind(entity)(verify);
                offset = verify.intl;
                verify = offset.string;
                tangon = romeon[tangon];
                tangon = yankee.bind(entity)(tangon);
                tangon = tangon.t;
                tangon = tangon.XiqzAg;
                tangon = verify.bind(offset)(tangon);
                tangon = oscard.bind(option)(tangon);
                _fun00010_ip = 259; continue _fun00009;
 170:
                oscard = _closure1_slot1;
                tangon = _closure1_slot2;
                zuuluu = tangon[zuuluu];
                oscard = oscard.bind(entity)(zuuluu);
                zuuluu = oscard.format;
                oscard = zuuluu.bind(oscard)(golfie);
                var _closure3_slot1 = oscard;
                zuuluu = _closure1_slot0;
                michal = 14;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.handleClick;
                michal = {};
                michal['href'] = oscard;
                oscard = function() { // Original name: onConfirm
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 15;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.openURL;
                    entity = _closure3_slot1;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                michal['onConfirm'] = oscard;
                report = function() { // Original name: trusted
                    entity = _closure3_slot0;
                    return entity;
                };
                michal['trusted'] = report;
                michal = zuuluu.bind(tangon)(michal);
 259:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useOnPressSearchLink'] = report;
    report = function(argFoo) { // Original name: useOnPressSearchItem
        michal = argFoo;
        oscard = michal.searchContext;
        var _closure2_slot0 = oscard;
        option = _closure1_slot0;
        verify = _closure1_slot2;
        zuuluu = 16;
        zuuluu = verify[zuuluu];
        report = undefined;
        tangon = option.bind(report)(zuuluu);
        zuuluu = tangon.useNavigation;
        golfie = zuuluu.bind(tangon)();
        var _closure2_slot1 = golfie;
        tangon = _closure1_slot4;
        zuuluu = tangon.useContext;
        michal = 17;
        michal = verify[michal];
        michal = option.bind(report)(michal);
        michal = michal.SwipeForMemberListContext;
        report = zuuluu.bind(tangon)(michal);
        var _closure2_slot2 = report;
        zuuluu = tangon.useCallback;
        michal = new Array(3);
        michal[0] = golfie;
        michal[1] = oscard;
        michal[2] = report;
        entity = function(argFoo, argBar) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                option = argFoo;
                tangon = _closure1_slot5;
                zuuluu = tangon.getChannel;
                tangon = zuuluu.bind(tangon)(option);
                var _closure3_slot0 = tangon;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00012_ip = 119; continue _fun00011 }
 32:
                report = _closure1_slot21;
                zuuluu = _closure2_slot0;
                tangon = undefined;
                zuuluu = report.bind(tangon)(zuuluu);
                oscard = _closure1_slot1;
                report = _closure1_slot2;
                zuuluu = 18;
                zuuluu = report[zuuluu];
                golfie = oscard.bind(tangon)(zuuluu);
                oscard = golfie.fetchMessages;
                zuuluu = argBar;
                zuuluu = oscard.bind(golfie)(option, zuuluu);
                zuuluu = _closure1_slot0;
                michal = 9;
                michal = report[michal];
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.performKeyboardAwareNavigation;
                entity = function() {
                    oscard = _closure1_slot22;
                    offset = _closure2_slot1;
                    verify = _closure3_slot0;
                    option = _closure2_slot0;
                    golfie = _closure2_slot2;
                    entity = undefined;
                    yankee = undefined;
                    michal = yankee[oscard](offset, verify, option, golfie, oscard);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
 119:
                entity = undefined;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useOnPressSearchItem'] = report;
    report = function(argFoo) { // Original name: useOnPressMediaItem
        michal = argFoo;
        oscard = michal.searchContext;
        var _closure2_slot0 = oscard;
        michal = michal.mediaResults;
        var _closure2_slot1 = michal;
        verify = _closure1_slot0;
        offset = _closure1_slot2;
        tangon = 16;
        tangon = offset[tangon];
        option = undefined;
        report = verify.bind(option)(tangon);
        tangon = report.useNavigation;
        golfie = tangon.bind(report)();
        var _closure2_slot2 = golfie;
        tangon = _closure1_slot4;
        report = tangon.useContext;
        zuuluu = 17;
        zuuluu = offset[zuuluu];
        zuuluu = verify.bind(option)(zuuluu);
        zuuluu = zuuluu.SwipeForMemberListContext;
        report = report.bind(tangon)(zuuluu);
        var _closure2_slot3 = report;
        zuuluu = tangon.useRef;
        zuuluu = zuuluu.bind(tangon)(michal);
        var _closure2_slot4 = zuuluu;
        option = tangon.useEffect;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            michal = _closure2_slot4;
            entity = _closure2_slot1;
            michal['current'] = entity;
            entity = undefined;
            return entity;
        };
        michal = option.bind(tangon)(michal, zuuluu);
        zuuluu = tangon.useCallback;
        michal = new Array(3);
        michal[0] = golfie;
        michal[1] = oscard;
        michal[2] = report;
        entity = function(argFoo, argBar) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = argFoo;
                var _closure3_slot0 = tangon;
                entity = argBar;
                var _closure3_slot1 = entity;
                oscard = _closure1_slot21;
                report = _closure2_slot0;
                entity = undefined;
                report = oscard.bind(entity)(report);
                oscard = tangon.type;
                report = _closure1_slot11;
                report = report.SOUND;
                if(!(report !== oscard)) { _fun00014_ip = 141; continue _fun00013 }
 56:
                report = _closure1_slot11;
                report = report.ATTACHMENT;
                if(!(report !== oscard)) { _fun00014_ip = 84; continue _fun00013 }
 70:
                report = _closure1_slot11;
                report = report.EMBED;
                if(!(report === oscard)) { _fun00014_ip = 139; continue _fun00013 }
 84:
                golfie = _closure1_slot0;
                report = _closure1_slot2;
                oscard = 23;
                oscard = report[oscard];
                golfie = golfie.bind(entity)(oscard);
                oscard = 22;
                oscard = report[oscard];
                report = report.paths;
                golfie = golfie.bind(entity)(oscard, report);
                oscard = golfie.then;
                report = function(argFoo) {
                    michal = argFoo;
                    tangon = michal.openMediaModal;
                    michal = _closure2_slot4;
                    report = michal.current;
                    zuuluu = report.filter;
                    michal = _closure1_slot23;
                    report = zuuluu.bind(report)(michal);
                    zuuluu = {};
                    oscard = report.map;
                    michal = function(argFoo) {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            romeon = argFoo;
                            zuuluu = romeon.type;
                            michal = _closure1_slot11;
                            michal = michal.EMBED;
                            if(!(zuuluu !== michal)) { _fun00016_ip = 216; continue _fun00015 }
 28:
                            zuuluu = romeon.attachment;
                            report = zuuluu.proxy_url;
                            option = null;
                            if(!(option == report)) { _fun00016_ip = 51; continue _fun00015 }
 46:
                            report = zuuluu.url;
 51:
                            oscard = _closure1_slot1;
                            tangon = _closure1_slot2;
                            michal = 20;
                            michal = tangon[michal];
                            tangon = undefined;
                            golfie = oscard.bind(tangon)(michal);
                            michal = zuuluu.width;
                            oscard = option != michal;
                            if(!oscard) { _fun00016_ip = 94; continue _fun00015 }
 85:
                            michal = zuuluu.height;
                            oscard = option != michal;
 94:
                            michal = '[useOnPressSearchItem] Attachment dimensions should not be null.';
                            michal = golfie.bind(tangon)(oscard, michal);
                            michal = {};
                            michal['uri'] = report;
                            michal['sourceURI'] = report;
                            oscard = zuuluu.width;
                            michal['width'] = oscard;
                            oscard = zuuluu.height;
                            michal['height'] = oscard;
                            golfie = _closure1_slot0;
                            option = _closure1_slot2;
                            oscard = 21;
                            oscard = option[oscard];
                            option = golfie.bind(tangon)(oscard);
                            golfie = option.isVideoFile;
                            oscard = zuuluu.filename;
                            oscard = golfie.bind(option)(oscard);
                            tangon = undefined;
                            if(!oscard) { _fun00016_ip = 180; continue _fun00015 }
 177:
                            tangon = report;
 180:
                            michal['videoURI'] = tangon;
                            tangon = false;
                            michal['isGIFV'] = tangon;
                            tangon = 'attachment';
                            michal['accessoryType'] = tangon;
                            zuuluu = zuuluu.id;
                            michal['attachmentId'] = zuuluu;
                            _fun00016_ip = 424; continue _fun00015;
 216:
                            zuuluu = romeon.embed;
                            oscard = _closure1_slot0;
                            golfie = _closure1_slot2;
                            tangon = 9;
                            report = golfie[tangon];
                            tangon = undefined;
                            oscard = oscard.bind(tangon)(report);
                            report = oscard.getEmbedImage;
                            option = report.bind(oscard)(zuuluu);
                            oscard = _closure1_slot1;
                            report = 20;
                            report = golfie[report];
                            verify = oscard.bind(tangon)(report);
                            golfie = null;
                            oscard = golfie != option;
                            report = '[useOnPressSearchItem] Embed image should not be null.';
                            report = verify.bind(tangon)(oscard, report);
                            offset = zuuluu.video;
                            report = zuuluu.type;
                            verify = option.proxyURL;
                            if(!(golfie == verify)) { _fun00016_ip = 315; continue _fun00015 }
 310:
                            verify = option.url;
 315:
                            zuuluu = golfie == offset;
                            oscard = undefined;
                            if(zuuluu) { _fun00016_ip = 330; continue _fun00015 }
 324:
                            oscard = offset.proxyURL;
 330:
                            if(!(golfie == oscard)) { _fun00016_ip = 351; continue _fun00015 }
 334:
                            yankee = golfie == offset;
                            zuuluu = undefined;
                            if(yankee) { _fun00016_ip = 348; continue _fun00015 }
 343:
                            zuuluu = offset.url;
 348:
                            oscard = zuuluu;
 351:
                            zuuluu = {};
                            zuuluu['uri'] = verify;
                            zuuluu['sourceURI'] = oscard;
                            verify = option.width;
                            zuuluu['width'] = verify;
                            option = option.height;
                            zuuluu['height'] = option;
                            golfie = golfie != oscard;
                            tangon = undefined;
                            if(!golfie) { _fun00016_ip = 392; continue _fun00015 }
 389:
                            tangon = oscard;
 392:
                            zuuluu['videoURI'] = tangon;
                            tangon = 'gifv';
                            tangon = tangon === report;
                            zuuluu['isGIFV'] = tangon;
                            tangon = 'embed';
                            zuuluu['accessoryType'] = tangon;
                            michal = zuuluu;
 424:
                            foxtra = michal.uri;
                            golfie = michal.sourceURI;
                            oscard = michal.width;
                            report = michal.height;
                            offset = michal.videoURI;
                            option = michal.isGIFV;
                            tangon = michal.accessoryType;
                            zuuluu = michal.attachmentId;
                            michal = null;
                            yankee = michal != offset;
                            michal = {};
                            backup = _closure1_slot0;
                            verify = _closure1_slot2;
                            entity = 24;
                            entity = verify[entity];
                            verify = undefined;
                            kiloes = backup.bind(verify)(entity);
                            backup = kiloes.getMobileOptimizedSrc;
                            entity = undefined;
                            if(!yankee) { _fun00016_ip = 516; continue _fun00015 }
 510:
                            entity = 'png';
 516:
                            source = kiloes;
                            update = foxtra;
                            echoed = oscard;
                            result = report;
                            output = entity;
                            entity = source[backup](update, echoed, result, output, sizing);
                            michal['uri'] = entity;
                            entity = romeon.messageId;
                            michal['messageId'] = entity;
                            entity = romeon.channelId;
                            michal['channelId'] = entity;
                            entity = romeon.mediaIndex;
                            michal['mediaIndex'] = entity;
                            michal['sourceURI'] = golfie;
                            michal['width'] = oscard;
                            michal['height'] = report;
                            michal['accessoryType'] = tangon;
                            michal['attachmentId'] = zuuluu;
                            entity = new Array(2);
                            entity[0] = michal;
                            michal = {};
                            michal['uri'] = foxtra;
                            foxtra = romeon.messageId;
                            michal['messageId'] = foxtra;
                            foxtra = romeon.channelId;
                            michal['channelId'] = foxtra;
                            romeon = romeon.mediaIndex;
                            michal['mediaIndex'] = romeon;
                            verify = undefined;
                            if(!yankee) { _fun00016_ip = 642; continue _fun00015 }
 639:
                            verify = offset;
 642:
                            michal['videoURI'] = verify;
                            michal['isGIFV'] = option;
                            michal['sourceURI'] = golfie;
                            michal['width'] = oscard;
                            michal['height'] = report;
                            michal['accessoryType'] = tangon;
                            michal['attachmentId'] = zuuluu;
                            entity[1] = michal;
                            return entity;
                        }
                    };
                    michal = oscard.bind(report)(michal);
                    zuuluu['initialSources'] = michal;
                    michal = report.findIndex;
                    entity = function(argFoo) {
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            zuuluu = argFoo;
                            tangon = zuuluu.messageId;
                            entity = _closure3_slot0;
                            entity = entity.messageId;
                            entity = tangon === entity;
                            if(!entity) { _fun00018_ip = 47; continue _fun00017 }
 27:
                            zuuluu = zuuluu.mediaIndex;
                            michal = _closure3_slot0;
                            michal = michal.mediaIndex;
                            entity = zuuluu === michal;
 47:
                            return entity;
                        }
                    };
                    entity = michal.bind(report)(entity);
                    zuuluu['initialIndex'] = entity;
                    entity = 'Search';
                    zuuluu['analyticsSource'] = entity;
                    entity = true;
                    zuuluu['disableRemix'] = entity;
                    michal = _closure3_slot1;
                    entity = undefined;
                    michal = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                };
                report = oscard.bind(golfie)(report);
 139:
                return entity;
 141:
                golfie = _closure1_slot5;
                oscard = golfie.getChannel;
                report = tangon.channelId;
                oscard = oscard.bind(golfie)(report);
                var _closure3_slot2 = oscard;
                report = null;
                if(!(report != oscard)) { _fun00014_ip = 250; continue _fun00013 }
 170:
                golfie = _closure1_slot1;
                report = _closure1_slot2;
                oscard = 18;
                oscard = report[oscard];
                option = golfie.bind(entity)(oscard);
                golfie = option.fetchMessages;
                oscard = tangon.channelId;
                tangon = tangon.messageId;
                tangon = golfie.bind(option)(oscard, tangon);
                tangon = _closure1_slot0;
                zuuluu = 9;
                zuuluu = report[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.performKeyboardAwareNavigation;
                michal = function() {
                    oscard = _closure1_slot22;
                    offset = _closure2_slot2;
                    verify = _closure3_slot2;
                    option = _closure2_slot0;
                    golfie = _closure2_slot3;
                    entity = undefined;
                    yankee = undefined;
                    michal = yankee[oscard](offset, verify, option, golfie, oscard);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                michal = undefined;
                return michal;
 250:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useOnPressMediaItem'] = report;
    report = function(argFoo) { // Original name: useOnPressGroupDMItem
        michal = argFoo;
        report = michal.searchContext;
        var _closure2_slot0 = report;
        oscard = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 16;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = oscard.bind(zuuluu)(tangon);
        zuuluu = tangon.useNavigation;
        oscard = zuuluu.bind(tangon)();
        var _closure2_slot1 = oscard;
        tangon = _closure1_slot4;
        zuuluu = tangon.useCallback;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function(argFoo) {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                option = argFoo;
                var _closure3_slot0 = option;
                golfie = _closure1_slot20;
                oscard = _closure2_slot0;
                report = {};
                entity = _closure1_slot10;
                entity = entity.GROUP_DM;
                report['type'] = entity;
                report['channelId'] = option;
                entity = undefined;
                report = golfie.bind(entity)(oscard, report);
                report = _closure2_slot1;
                tangon = report.getParent;
                report = tangon.bind(report)();
                tangon = null;
                if(!(tangon != report)) { _fun00020_ip = 81; continue _fun00019 }
 71:
                tangon = report.goBack;
                tangon = tangon.bind(report)();
 81:
                oscard = _closure1_slot1;
                report = _closure1_slot2;
                tangon = 25;
                tangon = report[tangon];
                golfie = oscard.bind(entity)(tangon);
                oscard = golfie.preload;
                tangon = _closure1_slot17;
                tangon = oscard.bind(golfie)(tangon, option);
                tangon = _closure1_slot0;
                zuuluu = 9;
                zuuluu = report[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.performKeyboardAwareNavigation;
                michal = function() {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 26;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.transitionToChannel;
                    michal = _closure3_slot0;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useOnPressGroupDMItem'] = report;
    report = function(argFoo) { // Original name: useOnPressDMItem
        michal = argFoo;
        report = michal.searchContext;
        var _closure2_slot0 = report;
        oscard = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 16;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = oscard.bind(zuuluu)(tangon);
        zuuluu = tangon.useNavigation;
        oscard = zuuluu.bind(tangon)();
        var _closure2_slot1 = oscard;
        tangon = _closure1_slot4;
        zuuluu = tangon.useCallback;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function(argFoo, argBar) {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = argBar;
                var _closure3_slot0 = entity;
                option = _closure1_slot20;
                golfie = _closure2_slot0;
                oscard = {};
                report = _closure1_slot10;
                report = report.DM;
                oscard['type'] = report;
                report = argFoo;
                oscard['userId'] = report;
                report = undefined;
                oscard = option.bind(report)(golfie, oscard);
                oscard = _closure2_slot1;
                tangon = oscard.getParent;
                oscard = tangon.bind(oscard)();
                tangon = null;
                if(!(tangon != oscard)) { _fun00022_ip = 84; continue _fun00021 }
 74:
                tangon = oscard.goBack;
                tangon = tangon.bind(oscard)();
 84:
                golfie = _closure1_slot1;
                oscard = _closure1_slot2;
                tangon = 25;
                tangon = oscard[tangon];
                option = golfie.bind(report)(tangon);
                golfie = option.preload;
                tangon = _closure1_slot17;
                tangon = golfie.bind(option)(tangon, entity);
                tangon = _closure1_slot0;
                zuuluu = 9;
                zuuluu = oscard[zuuluu];
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.performKeyboardAwareNavigation;
                michal = function() {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 26;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.transitionToChannel;
                    michal = _closure3_slot0;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useOnPressDMItem'] = report;
    report = function(argFoo) { // Original name: useOnPressGuildTextChannel
        michal = argFoo;
        report = michal.searchContext;
        var _closure2_slot0 = report;
        tangon = _closure1_slot4;
        zuuluu = tangon.useCallback;
        michal = new Array(1);
        michal[0] = report;
        entity = function(argFoo) {
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                report = _closure1_slot5;
                michal = report.getChannel;
                entity = argFoo;
                report = michal.bind(report)(entity);
                var _closure3_slot0 = report;
                entity = null;
                if(!(entity != report)) { _fun00024_ip = 157; continue _fun00023 }
 35:
                option = _closure1_slot20;
                golfie = _closure2_slot0;
                oscard = {};
                michal = _closure1_slot10;
                michal = michal.GUILD_TEXT_CHANNEL;
                oscard['type'] = michal;
                michal = report.id;
                oscard['channelId'] = michal;
                michal = undefined;
                oscard = option.bind(michal)(golfie, oscard);
                option = _closure1_slot1;
                oscard = _closure1_slot2;
                golfie = 25;
                golfie = oscard[golfie];
                verify = option.bind(michal)(golfie);
                option = verify.preload;
                golfie = report.guild_id;
                report = report.id;
                report = option.bind(verify)(golfie, report);
                report = _closure1_slot0;
                tangon = 9;
                tangon = oscard[tangon];
                report = report.bind(michal)(tangon);
                tangon = report.performKeyboardAwareNavigation;
                zuuluu = function() {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 26;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.transitionToChannel;
                    entity = _closure3_slot0;
                    entity = entity.id;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                zuuluu = tangon.bind(report)(zuuluu);
                return michal;
 157:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useOnPressGuildTextChannel'] = report;
    zuuluu['handleVoiceOrStageChannelConnectPress'] = tangon;
    tangon = function(argFoo) { // Original name: useOnPressGuildVoiceChannel
        michal = argFoo;
        report = michal.searchContext;
        var _closure2_slot0 = report;
        oscard = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 16;
        zuuluu = tangon[zuuluu];
        tangon = undefined;
        oscard = oscard.bind(tangon)(zuuluu);
        zuuluu = oscard.useNavigation;
        golfie = zuuluu.bind(oscard)();
        var _closure2_slot1 = golfie;
        zuuluu = function() { // Original name: useVoiceChannelOnPressHandler
            tangon = _closure1_slot4;
            zuuluu = tangon.useCallback;
            michal = function() {
                tangon = _closure1_slot3;
                zuuluu = undefined;
                michal = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                            StartGenerator();
                            report = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00026_ip = 269; continue _fun00025 }
 15:
                            var _closure6_slot0 = report;
                            oscard = _closure1_slot0;
                            golfie = _closure1_slot2;
                            zuuluu = 29;
                            zuuluu = golfie[zuuluu];
                            golfie = undefined;
                            option = oscard.bind(golfie)(zuuluu);
                            oscard = option.getChannelRoleSubscriptionStatus;
                            zuuluu = report.id;
                            zuuluu = oscard.bind(option)(zuuluu);
                            zuuluu = zuuluu.needSubscriptionToAccess;
                            oscard = report.getGuildId;
                            oscard = oscard.bind(report)();
                            option = null;
                            if(!(option != oscard)) { _fun00026_ip = 116; continue _fun00025 }
 82:
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            option = 30;
                            option = offset[option];
                            verify = verify.bind(golfie)(option);
                            option = verify.shouldShowMembershipVerificationGate;
                            option = option.bind(verify)(oscard);
                            if(option) { _fun00026_ip = 196; continue _fun00025 }
 116:
                            if(zuuluu) { _fun00026_ip = 132; continue _fun00025 }
 119:
                            zuuluu = _closure1_slot24;
                            zuuluu = zuuluu.bind(golfie)(report);
                            zuuluu = undefined;
                            _fun00026_ip = 194; continue _fun00025;
 132:
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            option = 32;
                            option = offset[option];
                            verify = verify.bind(golfie)(option);
                            option = verify.transitionTo;
                            romeon = _closure1_slot15;
                            yankee = romeon.CHANNEL;
                            offset = report.guild_id;
                            report = _closure1_slot19;
                            report = report.ROLE_SUBSCRIPTIONS;
                            report = yankee.bind(romeon)(offset, report);
                            zuuluu = option.bind(verify)(report);
 194:
                            _fun00026_ip = 263; continue _fun00025;
 196:
                            option = _closure1_slot0;
                            michal = _closure1_slot2;
                            report = 23;
                            report = michal[report];
                            option = option.bind(golfie)(report);
                            report = 31;
                            report = michal[report];
                            michal = michal.paths;
                            michal = option.bind(golfie)(report, michal);
                            SaveGenerator(address=238);
 236:
                            return michal;
 238:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(report) { _fun00026_ip = 266; continue _fun00025 }
 244:
                            report = michal.openMemberVerificationModal;
                            tangon = function() {
                                zuuluu = _closure1_slot24;
                                michal = _closure6_slot0;
                                entity = undefined;
                                entity = zuuluu.bind(entity)(michal);
                                return entity;
                            };
                            zuuluu = report.bind(golfie)(oscard, tangon);
 263:
                            return zuuluu;
 266:
                            return michal;
 269:
                            return entity;
                        }
                    };
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal);
                var _closure4_slot0 = michal;
                entity = function() {
                    entity = undefined;
                    tangon = _closure4_slot0;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                return entity;
            };
            entity = undefined;
            michal = michal.bind(entity)();
            entity = new Array(0);
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        oscard = zuuluu.bind(tangon)();
        var _closure2_slot2 = oscard;
        tangon = _closure1_slot4;
        zuuluu = tangon.useCallback;
        michal = new Array(3);
        michal[0] = golfie;
        michal[1] = oscard;
        michal[2] = report;
        entity = function(argFoo) {
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                report = _closure1_slot5;
                michal = report.getChannel;
                entity = argFoo;
                michal = michal.bind(report)(entity);
                var _closure3_slot0 = michal;
                entity = null;
                if(!(entity != michal)) { _fun00028_ip = 144; continue _fun00027 }
 32:
                option = _closure1_slot20;
                golfie = _closure2_slot0;
                oscard = {};
                verify = _closure1_slot10;
                verify = verify.GUILD_VOICE_CHANNEL;
                oscard['type'] = verify;
                michal = michal.id;
                oscard['channelId'] = michal;
                michal = undefined;
                oscard = option.bind(michal)(golfie, oscard);
                oscard = _closure2_slot1;
                report = oscard.getParent;
                oscard = report.bind(oscard)();
                if(!(entity != oscard)) { _fun00028_ip = 104; continue _fun00027 }
 94:
                report = oscard.goBack;
                report = report.bind(oscard)();
 104:
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                tangon = 9;
                tangon = oscard[tangon];
                report = report.bind(michal)(tangon);
                tangon = report.performKeyboardAwareNavigation;
                zuuluu = function() {
                    zuuluu = _closure2_slot2;
                    michal = _closure3_slot0;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                zuuluu = tangon.bind(report)(zuuluu);
                return michal;
 144:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useOnPressGuildVoiceChannel'] = tangon;
    michal = function(argFoo) { // Original name: useOnPressSearchHistoryText
        michal = argFoo;
        report = michal.searchContext;
        var _closure2_slot0 = report;
        tangon = _closure1_slot4;
        zuuluu = tangon.useCallback;
        michal = new Array(1);
        michal[0] = report;
        entity = function(argFoo, argBar) {
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                entity = argFoo;
                tangon = argBar;
                var _closure3_slot0 = entity;
                var _closure3_slot1 = tangon;
                golfie = _closure1_slot20;
                oscard = _closure2_slot0;
                report = {};
                option = _closure1_slot10;
                option = option.TEXT;
                report['type'] = option;
                report['text'] = entity;
                report['tags'] = tangon;
                entity = undefined;
                report = golfie.bind(entity)(oscard, report);
                option = _closure1_slot0;
                golfie = _closure1_slot2;
                report = 33;
                report = golfie[report];
                verify = option.bind(entity)(report);
                option = verify.batchUpdates;
                report = function() {
                    _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                        zuuluu = _closure3_slot1;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00032_ip = 39; continue _fun00031 }
 13:
                        report = _closure1_slot8;
                        tangon = _closure2_slot0;
                        zuuluu = _closure3_slot1;
                        michal = undefined;
                        michal = report.bind(michal)(tangon, zuuluu);
 39:
                        tangon = _closure1_slot9;
                        zuuluu = _closure2_slot0;
                        michal = _closure3_slot0;
                        entity = undefined;
                        michal = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    }
                };
                report = option.bind(verify)(report);
                report = _closure1_slot1;
                zuuluu = 10;
                zuuluu = golfie[zuuluu];
                report = report.bind(entity)(zuuluu);
                zuuluu = report.fetchInitialMessages;
                zuuluu = zuuluu.bind(report)(oscard);
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00030_ip = 151; continue _fun00029 }
 134:
                zuuluu = tangon.forEach;
                michal = function(argFoo) {
                    _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                        report = argFoo;
                        michal = report.type;
                        entity = _closure1_slot12;
                        entity = entity.COMPLETE;
                        if(!(michal === entity)) { _fun00034_ip = 97; continue _fun00033 }
 25:
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 34;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.trackSearchFilterAdd;
                        entity = {};
                        oscard = _closure2_slot0;
                        entity['searchContext'] = oscard;
                        report = report.searchTokenType;
                        entity['searchTokenType'] = report;
                        tangon = _closure1_slot14;
                        tangon = tangon.SEARCH_HISTORY;
                        entity['location'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
 97:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
 151:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useOnPressSearchHistoryText'] = michal;
    return entity;
})();