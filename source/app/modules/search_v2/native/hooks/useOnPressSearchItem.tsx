// app/modules/search_v2/native/hooks/useOnPressSearchItem.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    entity = function(argFoo, argBar) { // Original name: addSearchHistoryItem
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            zuuluu = argBar;
            var _closure2_slot1 = zuuluu;
            tangon = michal.type;
            zuuluu = _closure1_slot15;
            zuuluu = zuuluu.DMS;
            if(!(zuuluu !== tangon)) { _fun00002_ip = 52; continue _fun00001 }
 38:
            zuuluu = _closure1_slot15;
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
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: addCurrentSearchQueryToSearchHistory
        tangon = argFoo;
        zuuluu = _closure1_slot6;
        michal = zuuluu.getState;
        entity = function(argFoo) {
            zuuluu = argFoo;
            entity = {};
            michal = zuuluu.getTextInputValue;
            michal = michal.bind(zuuluu)();
            entity['text'] = michal;
            michal = zuuluu.getTags;
            michal = michal.bind(zuuluu)();
            entity['tags'] = michal;
            return entity;
        };
        michal = michal.bind(zuuluu)(tangon, entity);
        entity = michal.tags;
        report = michal.text;
        zuuluu = _closure1_slot17;
        michal = {};
        oscard = _closure1_slot8;
        oscard = oscard.TEXT;
        michal['type'] = oscard;
        michal['text'] = report;
        michal['tags'] = entity;
        entity = undefined;
        michal = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    var _closure1_slot18 = entity;
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
            zuuluu = _closure1_slot14;
 53:
            oscard['guildId'] = zuuluu;
            zuuluu = argBaz;
            oscard['searchContext'] = zuuluu;
            if(!(entity == michal)) { _fun00004_ip = 96; continue _fun00003 }
 69:
            michal = tangon.navigate;
            entity = _closure1_slot11;
            entity = entity.SEARCH_CHAT_PREVIEW;
            entity = michal.bind(tangon)(entity, oscard);
            _fun00004_ip = 167; continue _fun00003;
 96:
            zuuluu = tangon.navigate;
            michal = {};
            entity = _closure1_slot11;
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
                michal = _closure1_slot13;
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
    var _closure1_slot19 = entity;
    report = function(argFoo, argBar) { // Original name: getMediaViewerSources
        report = argFoo;
        entity = argBar;
        var _closure2_slot0 = entity;
        zuuluu = new Array(0);
        var _closure2_slot1 = zuuluu;
        entity = 0;
        var _closure2_slot2 = entity;
        var _closure2_slot3 = entity;
        tangon = report.forEach;
        entity = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = argFoo;
                zuuluu = tangon.type;
                michal = _closure1_slot7;
                michal = michal.ATTACHMENT;
                michal = zuuluu === michal;
                if(michal) { _fun00006_ip = 47; continue _fun00005 }
 28:
                report = tangon.type;
                zuuluu = _closure1_slot7;
                zuuluu = zuuluu.EMBED;
                michal = report === zuuluu;
 47:
                if(!michal) { _fun00006_ip = 793; continue _fun00005 }
 53:
                zuuluu = tangon.type;
                michal = _closure1_slot7;
                michal = michal.EMBED;
                if(!(zuuluu !== michal)) { _fun00006_ip = 264; continue _fun00005 }
 75:
                zuuluu = tangon.attachment;
                oscard = zuuluu.proxy_url;
                verify = null;
                if(!(verify == oscard)) { _fun00006_ip = 98; continue _fun00005 }
 93:
                oscard = zuuluu.url;
 98:
                golfie = _closure1_slot1;
                report = _closure1_slot2;
                michal = 21;
                michal = report[michal];
                report = undefined;
                option = golfie.bind(report)(michal);
                michal = zuuluu.width;
                golfie = verify != michal;
                if(!golfie) { _fun00006_ip = 141; continue _fun00005 }
 132:
                michal = zuuluu.height;
                golfie = verify != michal;
 141:
                michal = '[useOnPressSearchItem] Attachment dimensions should not be null.';
                michal = option.bind(report)(golfie, michal);
                michal = {};
                michal['uri'] = oscard;
                michal['sourceURI'] = oscard;
                golfie = zuuluu.width;
                michal['width'] = golfie;
                golfie = zuuluu.height;
                michal['height'] = golfie;
                option = _closure1_slot0;
                verify = _closure1_slot2;
                golfie = 22;
                golfie = verify[golfie];
                verify = option.bind(report)(golfie);
                option = verify.isVideoFile;
                golfie = zuuluu.filename;
                golfie = option.bind(verify)(golfie);
                report = undefined;
                if(!golfie) { _fun00006_ip = 228; continue _fun00005 }
 225:
                report = oscard;
 228:
                michal['videoURI'] = report;
                report = false;
                michal['isGIFV'] = report;
                report = 'attachment';
                michal['accessoryType'] = report;
                zuuluu = zuuluu.id;
                michal['attachmentId'] = zuuluu;
                _fun00006_ip = 473; continue _fun00005;
 264:
                zuuluu = tangon.embed;
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                report = 20;
                oscard = option[report];
                report = undefined;
                golfie = golfie.bind(report)(oscard);
                oscard = golfie.getEmbedImage;
                verify = oscard.bind(golfie)(zuuluu);
                golfie = _closure1_slot1;
                oscard = 21;
                oscard = option[oscard];
                offset = golfie.bind(report)(oscard);
                option = null;
                golfie = option != verify;
                oscard = '[useOnPressSearchItem] Embed image should not be null.';
                oscard = offset.bind(report)(golfie, oscard);
                yankee = zuuluu.video;
                oscard = zuuluu.type;
                offset = verify.proxyURL;
                if(!(option == offset)) { _fun00006_ip = 363; continue _fun00005 }
 358:
                offset = verify.url;
 363:
                zuuluu = option == yankee;
                golfie = undefined;
                if(zuuluu) { _fun00006_ip = 378; continue _fun00005 }
 372:
                golfie = yankee.proxyURL;
 378:
                if(!(option == golfie)) { _fun00006_ip = 399; continue _fun00005 }
 382:
                romeon = option == yankee;
                zuuluu = undefined;
                if(romeon) { _fun00006_ip = 396; continue _fun00005 }
 391:
                zuuluu = yankee.url;
 396:
                golfie = zuuluu;
 399:
                zuuluu = {};
                zuuluu['uri'] = offset;
                zuuluu['sourceURI'] = golfie;
                offset = verify.width;
                zuuluu['width'] = offset;
                verify = verify.height;
                zuuluu['height'] = verify;
                option = option != golfie;
                report = undefined;
                if(!option) { _fun00006_ip = 441; continue _fun00005 }
 438:
                report = golfie;
 441:
                zuuluu['videoURI'] = report;
                report = 'gifv';
                report = report === oscard;
                zuuluu['isGIFV'] = report;
                report = 'embed';
                zuuluu['accessoryType'] = report;
                michal = zuuluu;
 473:
                sizing = michal.uri;
                romeon = michal.sourceURI;
                yankee = michal.width;
                offset = michal.height;
                kiloes = michal.videoURI;
                foxtra = michal.isGIFV;
                verify = michal.accessoryType;
                option = michal.attachmentId;
                oscard = _closure2_slot1;
                report = oscard.push;
                golfie = {};
                zuuluu = _closure1_slot0;
                backup = _closure1_slot2;
                entity = 23;
                entity = backup[entity];
                backup = undefined;
                result = zuuluu.bind(backup)(entity);
                output = result.getMobileOptimizedSrc;
                zuuluu = null;
                echoed = zuuluu != kiloes;
                entity = undefined;
                if(!echoed) { _fun00006_ip = 578; continue _fun00005 }
 572:
                entity = 'png';
 578:
                sequen = result;
                vacuum = sizing;
                ctrled = yankee;
                source = offset;
                update = entity;
                entity = sequen[output](vacuum, ctrled, source, update, echoed);
                golfie['uri'] = entity;
                entity = tangon.messageId;
                golfie['messageId'] = entity;
                entity = tangon.channelId;
                golfie['channelId'] = entity;
                entity = tangon.mediaIndex;
                golfie['mediaIndex'] = entity;
                golfie['sourceURI'] = romeon;
                golfie['width'] = yankee;
                golfie['height'] = offset;
                golfie['accessoryType'] = verify;
                golfie['attachmentId'] = option;
                entity = new Array(2);
                entity[0] = golfie;
                golfie = {};
                golfie['uri'] = sizing;
                sizing = tangon.messageId;
                golfie['messageId'] = sizing;
                sizing = tangon.channelId;
                golfie['channelId'] = sizing;
                sizing = tangon.mediaIndex;
                golfie['mediaIndex'] = sizing;
                sizing = zuuluu != kiloes;
                backup = undefined;
                if(!sizing) { _fun00006_ip = 710; continue _fun00005 }
 707:
                backup = kiloes;
 710:
                golfie['videoURI'] = backup;
                golfie['isGIFV'] = foxtra;
                golfie['sourceURI'] = romeon;
                golfie['width'] = yankee;
                golfie['height'] = offset;
                golfie['accessoryType'] = verify;
                golfie['attachmentId'] = option;
                entity[1] = golfie;
                entity = report.bind(oscard)(entity);
                entity = _closure2_slot0;
                entity = zuuluu != entity;
                if(!entity) { _fun00006_ip = 771; continue _fun00005 }
 763:
                zuuluu = _closure2_slot0;
                entity = tangon === zuuluu;
 771:
                if(!entity) { _fun00006_ip = 782; continue _fun00005 }
 774:
                entity = _closure2_slot2;
                _closure2_slot3 = entity;
 782:
                entity = _closure2_slot2;
                entity = entity + 1;
                _closure2_slot2 = entity;
 793:
                entity = undefined;
                return entity;
            }
        };
        entity = tangon.bind(report)(entity);
        entity = {};
        entity['sources'] = zuuluu;
        michal = _closure2_slot3;
        entity['initialIndex'] = michal;
        return entity;
    };
    var _closure1_slot20 = report;
    tangon = function() { // Original name: handleVoiceOrStageChannelConnectPress
        entity = undefined;
        tangon = _closure1_slot22;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot21 = tangon;
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
                    zuuluu = 25;
                    oscard = michal[zuuluu];
                    zuuluu = undefined;
                    oscard = golfie.bind(zuuluu)(oscard);
                    if(tangon) { _fun00008_ip = 102; continue _fun00007 }
 51:
                    tangon = 29;
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
                    tangon = 28;
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
        _closure1_slot22 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    offset = option[oscard];
    oscard = argCor;
    oscard = oscard.bind(entity)(offset);
    var _closure1_slot4 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.SearchMediaTypes;
    var _closure1_slot7 = verify;
    verify = oscard.SearchHistoryItemTypes;
    var _closure1_slot8 = verify;
    oscard = oscard.SearchQueryTagTypes;
    var _closure1_slot9 = oscard;
    oscard = 5;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.SearchFilterAddLocations;
    var _closure1_slot10 = oscard;
    oscard = 6;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.SearchNavigatorScreens;
    var _closure1_slot11 = oscard;
    oscard = 7;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.Routes;
    var _closure1_slot12 = verify;
    verify = oscard.ComponentActions;
    var _closure1_slot13 = verify;
    verify = oscard.ME;
    var _closure1_slot14 = verify;
    oscard = oscard.SearchTypes;
    var _closure1_slot15 = oscard;
    oscard = 8;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.StaticChannelRoute;
    var _closure1_slot16 = oscard;
    oscard = 35;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/search_v2/native/hooks/useOnPressSearchItem.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo) { // Original name: useOnPressSearchLink
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
                tangon = _closure1_slot18;
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
    zuuluu['useOnPressSearchLink'] = oscard;
    oscard = function(argFoo) { // Original name: useOnPressMessageItem
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
                report = _closure1_slot18;
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
                    oscard = _closure1_slot19;
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
    zuuluu['useOnPressMessageItem'] = oscard;
    zuuluu['getMediaViewerSources'] = report;
    report = function(argFoo) { // Original name: useOnPressMediaItem
        michal = argFoo;
        offset = michal.searchContext;
        var _closure2_slot0 = offset;
        golfie = michal.mediaResults;
        var _closure2_slot1 = golfie;
        oscard = michal.onEndReached;
        var _closure2_slot2 = oscard;
        report = michal.onEndReachedThreshold;
        var _closure2_slot3 = report;
        yankee = _closure1_slot0;
        romeon = _closure1_slot2;
        zuuluu = 16;
        zuuluu = romeon[zuuluu];
        option = undefined;
        tangon = yankee.bind(option)(zuuluu);
        zuuluu = tangon.useNavigation;
        verify = zuuluu.bind(tangon)();
        var _closure2_slot4 = verify;
        tangon = _closure1_slot4;
        zuuluu = tangon.useContext;
        michal = 17;
        michal = romeon[michal];
        michal = yankee.bind(option)(michal);
        michal = michal.SwipeForMemberListContext;
        option = zuuluu.bind(tangon)(michal);
        var _closure2_slot5 = option;
        zuuluu = tangon.useCallback;
        michal = new Array(6);
        michal[0] = offset;
        michal[1] = verify;
        michal[2] = option;
        michal[3] = golfie;
        michal[4] = oscard;
        michal[5] = report;
        entity = function(argFoo, argBar) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = argFoo;
                var _closure3_slot0 = tangon;
                entity = argBar;
                var _closure3_slot1 = entity;
                oscard = _closure1_slot18;
                report = _closure2_slot0;
                entity = undefined;
                report = oscard.bind(entity)(report);
                oscard = tangon.type;
                report = _closure1_slot7;
                report = report.SOUND;
                if(!(report !== oscard)) { _fun00014_ip = 141; continue _fun00013 }
 56:
                report = _closure1_slot7;
                report = report.ATTACHMENT;
                if(!(report !== oscard)) { _fun00014_ip = 84; continue _fun00013 }
 70:
                report = _closure1_slot7;
                report = report.EMBED;
                if(!(report === oscard)) { _fun00014_ip = 139; continue _fun00013 }
 84:
                golfie = _closure1_slot0;
                report = _closure1_slot2;
                oscard = 25;
                oscard = report[oscard];
                golfie = golfie.bind(entity)(oscard);
                oscard = 24;
                oscard = report[oscard];
                report = report.paths;
                golfie = golfie.bind(entity)(oscard, report);
                oscard = golfie.then;
                report = function(argFoo) {
                    entity = argFoo;
                    tangon = entity.openMediaModal;
                    golfie = _closure1_slot20;
                    oscard = _closure2_slot1;
                    zuuluu = _closure3_slot0;
                    entity = undefined;
                    oscard = golfie.bind(entity)(oscard, zuuluu);
                    zuuluu = {};
                    golfie = oscard.sources;
                    zuuluu['initialSources'] = golfie;
                    oscard = oscard.initialIndex;
                    zuuluu['initialIndex'] = oscard;
                    oscard = 'Search';
                    zuuluu['analyticsSource'] = oscard;
                    oscard = true;
                    zuuluu['disableRemix'] = oscard;
                    oscard = _closure2_slot2;
                    zuuluu['onEndReached'] = oscard;
                    report = _closure2_slot3;
                    zuuluu['onEndReachedThreshold'] = report;
                    michal = _closure3_slot1;
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
                    oscard = _closure1_slot19;
                    offset = _closure2_slot4;
                    verify = _closure3_slot2;
                    option = _closure2_slot0;
                    golfie = _closure2_slot5;
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
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                option = argFoo;
                var _closure3_slot0 = option;
                golfie = _closure1_slot17;
                oscard = _closure2_slot0;
                report = {};
                entity = _closure1_slot8;
                entity = entity.GROUP_DM;
                report['type'] = entity;
                report['channelId'] = option;
                entity = undefined;
                report = golfie.bind(entity)(oscard, report);
                report = _closure2_slot1;
                tangon = report.getParent;
                report = tangon.bind(report)();
                tangon = null;
                if(!(tangon != report)) { _fun00016_ip = 81; continue _fun00015 }
 71:
                tangon = report.goBack;
                tangon = tangon.bind(report)();
 81:
                oscard = _closure1_slot1;
                report = _closure1_slot2;
                tangon = 26;
                tangon = report[tangon];
                golfie = oscard.bind(entity)(tangon);
                oscard = golfie.preload;
                tangon = _closure1_slot14;
                tangon = oscard.bind(golfie)(tangon, option);
                tangon = _closure1_slot0;
                zuuluu = 9;
                zuuluu = report[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.performKeyboardAwareNavigation;
                michal = function() {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 27;
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
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = argBar;
                var _closure3_slot0 = entity;
                option = _closure1_slot17;
                golfie = _closure2_slot0;
                oscard = {};
                report = _closure1_slot8;
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
                if(!(tangon != oscard)) { _fun00018_ip = 84; continue _fun00017 }
 74:
                tangon = oscard.goBack;
                tangon = tangon.bind(oscard)();
 84:
                golfie = _closure1_slot1;
                oscard = _closure1_slot2;
                tangon = 26;
                tangon = oscard[tangon];
                option = golfie.bind(report)(tangon);
                golfie = option.preload;
                tangon = _closure1_slot14;
                tangon = golfie.bind(option)(tangon, entity);
                tangon = _closure1_slot0;
                zuuluu = 9;
                zuuluu = oscard[zuuluu];
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.performKeyboardAwareNavigation;
                michal = function() {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 27;
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
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                report = _closure1_slot5;
                michal = report.getChannel;
                entity = argFoo;
                report = michal.bind(report)(entity);
                var _closure3_slot0 = report;
                entity = null;
                if(!(entity != report)) { _fun00020_ip = 157; continue _fun00019 }
 35:
                option = _closure1_slot17;
                golfie = _closure2_slot0;
                oscard = {};
                michal = _closure1_slot8;
                michal = michal.GUILD_TEXT_CHANNEL;
                oscard['type'] = michal;
                michal = report.id;
                oscard['channelId'] = michal;
                michal = undefined;
                oscard = option.bind(michal)(golfie, oscard);
                option = _closure1_slot1;
                oscard = _closure1_slot2;
                golfie = 26;
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
                    entity = 27;
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
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            StartGenerator();
                            report = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00022_ip = 269; continue _fun00021 }
 15:
                            var _closure6_slot0 = report;
                            oscard = _closure1_slot0;
                            golfie = _closure1_slot2;
                            zuuluu = 30;
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
                            if(!(option != oscard)) { _fun00022_ip = 116; continue _fun00021 }
 82:
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            option = 31;
                            option = offset[option];
                            verify = verify.bind(golfie)(option);
                            option = verify.shouldShowMembershipVerificationGate;
                            option = option.bind(verify)(oscard);
                            if(option) { _fun00022_ip = 196; continue _fun00021 }
 116:
                            if(zuuluu) { _fun00022_ip = 132; continue _fun00021 }
 119:
                            zuuluu = _closure1_slot21;
                            zuuluu = zuuluu.bind(golfie)(report);
                            zuuluu = undefined;
                            _fun00022_ip = 194; continue _fun00021;
 132:
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            option = 33;
                            option = offset[option];
                            verify = verify.bind(golfie)(option);
                            option = verify.transitionTo;
                            romeon = _closure1_slot12;
                            yankee = romeon.CHANNEL;
                            offset = report.guild_id;
                            report = _closure1_slot16;
                            report = report.ROLE_SUBSCRIPTIONS;
                            report = yankee.bind(romeon)(offset, report);
                            zuuluu = option.bind(verify)(report);
 194:
                            _fun00022_ip = 263; continue _fun00021;
 196:
                            option = _closure1_slot0;
                            michal = _closure1_slot2;
                            report = 25;
                            report = michal[report];
                            option = option.bind(golfie)(report);
                            report = 32;
                            report = michal[report];
                            michal = michal.paths;
                            michal = option.bind(golfie)(report, michal);
                            SaveGenerator(address=238);
 236:
                            return michal;
 238:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(report) { _fun00022_ip = 266; continue _fun00021 }
 244:
                            report = michal.openMemberVerificationModal;
                            tangon = function() {
                                zuuluu = _closure1_slot21;
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
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                report = _closure1_slot5;
                michal = report.getChannel;
                entity = argFoo;
                michal = michal.bind(report)(entity);
                var _closure3_slot0 = michal;
                entity = null;
                if(!(entity != michal)) { _fun00024_ip = 144; continue _fun00023 }
 32:
                option = _closure1_slot17;
                golfie = _closure2_slot0;
                oscard = {};
                verify = _closure1_slot8;
                verify = verify.GUILD_VOICE_CHANNEL;
                oscard['type'] = verify;
                michal = michal.id;
                oscard['channelId'] = michal;
                michal = undefined;
                oscard = option.bind(michal)(golfie, oscard);
                oscard = _closure2_slot1;
                report = oscard.getParent;
                oscard = report.bind(oscard)();
                if(!(entity != oscard)) { _fun00024_ip = 104; continue _fun00023 }
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
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                entity = argFoo;
                tangon = argBar;
                var _closure3_slot0 = entity;
                var _closure3_slot1 = tangon;
                golfie = _closure1_slot17;
                oscard = _closure2_slot0;
                report = {};
                option = _closure1_slot8;
                option = option.TEXT;
                report['type'] = option;
                report['text'] = entity;
                report['tags'] = tangon;
                entity = undefined;
                report = golfie.bind(entity)(oscard, report);
                option = _closure1_slot6;
                golfie = option.setState;
                report = function(argFoo) {
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        zuuluu = argFoo;
                        tangon = _closure3_slot1;
                        michal = null;
                        if(!(michal != tangon)) { _fun00028_ip = 31; continue _fun00027 }
 16:
                        tangon = zuuluu.setTags;
                        michal = _closure3_slot1;
                        michal = tangon.bind(zuuluu)(michal);
 31:
                        michal = zuuluu.setTextInputValue;
                        entity = _closure3_slot0;
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    }
                };
                report = golfie.bind(option)(oscard, report);
                report = _closure1_slot1;
                golfie = _closure1_slot2;
                zuuluu = 10;
                zuuluu = golfie[zuuluu];
                report = report.bind(entity)(zuuluu);
                zuuluu = report.fetchInitialMessages;
                zuuluu = zuuluu.bind(report)(oscard);
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00026_ip = 140; continue _fun00025 }
 123:
                zuuluu = tangon.forEach;
                michal = function(argFoo) {
                    _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                        report = argFoo;
                        michal = report.type;
                        entity = _closure1_slot9;
                        entity = entity.COMPLETE;
                        if(!(michal === entity)) { _fun00030_ip = 97; continue _fun00029 }
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
                        tangon = _closure1_slot10;
                        tangon = tangon.SEARCH_HISTORY;
                        entity['location'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
 97:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
 140:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useOnPressSearchHistoryText'] = michal;
    return entity;
})();