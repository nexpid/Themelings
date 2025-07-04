// app/components_native/chat/MessagesHooks.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.findNodeHandle;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.updateShouldShowJumpToPresentButton;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ChannelTypes;
    var _closure1_slot8 = golfie;
    golfie = tangon.GuildFeatures;
    var _closure1_slot9 = golfie;
    tangon = tangon.MessageFlags;
    var _closure1_slot10 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'components_native/chat/MessagesHooks.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useMessageAuthorActivities
        zuuluu = argFoo;
        var _closure2_slot0 = zuuluu;
        oscard = _closure1_slot4;
        report = oscard.useMemo;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            entity = {};
            var _closure3_slot0 = entity;
            tangon = _closure2_slot0;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    entity = argFoo;
                    michal = entity.author;
                    zuuluu = null;
                    michal = zuuluu != michal;
                    if(!michal) { _fun00002_ip = 28; continue _fun00001 }
 18:
                    tangon = entity.activity;
                    michal = zuuluu != tangon;
 28:
                    if(!michal) { _fun00002_ip = 53; continue _fun00001 }
 31:
                    michal = _closure3_slot0;
                    entity = entity.author;
                    entity = entity.id;
                    michal[entity] = zuuluu;
 53:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        oscard = report.bind(oscard)(zuuluu, tangon);
        var _closure2_slot1 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 6;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStoresObject;
        michal = _closure1_slot7;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.mapValues;
            michal = _closure2_slot1;
            entity = function(argFoo, argBar) {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getPrimaryActivity;
                entity = argBar;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useMessageAuthorActivities'] = tangon;
    tangon = function(argFoo) { // Original name: useFetchMessageApplications
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot4;
        report = tangon.useMemo;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            entity = global;
            zuuluu = entity.Set;
            tangon = zuuluu.prototype;
            tangon = Object.create(tangon, {constructor: {value: zuuluu}});
            golfie = tangon;
            zuuluu = new golfie[zuuluu](oscard);
            zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
            var _closure3_slot0 = zuuluu;
            report = _closure2_slot0;
            tangon = report.forEach;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    michal = entity.applicationId;
                    tangon = null;
                    michal = tangon != michal;
                    if(!michal) { _fun00004_ip = 26; continue _fun00003 }
 17:
                    zuuluu = entity.application;
                    michal = tangon == zuuluu;
 26:
                    if(!michal) { _fun00004_ip = 51; continue _fun00003 }
 29:
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.add;
                    entity = entity.applicationId;
                    entity = michal.bind(zuuluu)(entity);
 51:
                    entity = undefined;
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal);
            michal = entity.Array;
            entity = michal.from;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        };
        report = report.bind(tangon)(michal, zuuluu);
        var _closure2_slot1 = report;
        zuuluu = tangon.useRef;
        michal = new Array(0);
        michal = zuuluu.bind(tangon)(michal);
        var _closure2_slot2 = michal;
        zuuluu = tangon.useEffect;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 8;
                michal = michal[entity];
                entity = undefined;
                golfie = zuuluu.bind(entity)(michal);
                oscard = golfie.areArraysShallowEqual;
                report = _closure2_slot1;
                zuuluu = _closure2_slot2;
                zuuluu = zuuluu.current;
                zuuluu = oscard.bind(golfie)(report, zuuluu);
                if(zuuluu) { _fun00006_ip = 172; continue _fun00005 }
 56:
                report = _closure1_slot1;
                offset = _closure1_slot2;
                zuuluu = 9;
                zuuluu = offset[zuuluu];
                golfie = report.bind(entity)(zuuluu);
                oscard = golfie.fetchApplications;
                zuuluu = 7;
                zuuluu = offset[zuuluu];
                report = report.bind(entity)(zuuluu);
                zuuluu = _closure2_slot1;
                option = report.bind(entity)(zuuluu);
                report = option.filter;
                verify = _closure1_slot0;
                tangon = 10;
                tangon = offset[tangon];
                tangon = verify.bind(entity)(tangon);
                tangon = tangon.isNotNullish;
                report = report.bind(option)(tangon);
                tangon = report.uniq;
                report = tangon.bind(report)();
                tangon = report.value;
                report = tangon.bind(report)();
                tangon = false;
                tangon = oscard.bind(golfie)(report, tangon);
                michal = _closure2_slot2;
                michal['current'] = zuuluu;
 172:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        entity = undefined;
        return entity;
    };
    zuuluu['useFetchMessageApplications'] = tangon;
    tangon = function(argFoo) { // Original name: useShouldTrackAnnouncementMessageViews
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            report = entity.guild;
            offset = entity.channel;
            var _closure2_slot0 = offset;
            golfie = entity.messages;
            var _closure2_slot1 = golfie;
            option = entity.isMessagesReady;
            var _closure2_slot2 = option;
            zuuluu = undefined;
            var _closure2_slot3 = zuuluu;
            tangon = null;
            oscard = tangon == report;
            entity = undefined;
            if(oscard) { _fun00008_ip = 94; continue _fun00007 }
 56:
            verify = report.features;
            report = tangon == verify;
            entity = undefined;
            if(report) { _fun00008_ip = 94; continue _fun00007 }
 71:
            oscard = verify.has;
            report = _closure1_slot9;
            report = report.COMMUNITY;
            entity = oscard.bind(verify)(report);
 94:
            verify = tangon != entity;
            if(!verify) { _fun00008_ip = 104; continue _fun00007 }
 101:
            verify = entity;
 104:
            _closure2_slot3 = verify;
            oscard = _closure1_slot4;
            report = oscard.useMemo;
            yankee = offset.type;
            tangon = new Array(5);
            tangon[0] = yankee;
            offset = offset.guild_id;
            tangon[1] = offset;
            tangon[2] = verify;
            tangon[3] = option;
            tangon[4] = golfie;
            michal = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot0;
                    michal = entity.type;
                    entity = _closure1_slot8;
                    entity = entity.GUILD_ANNOUNCEMENT;
                    entity = michal === entity;
                    if(!entity) { _fun00010_ip = 36; continue _fun00009 }
 32:
                    entity = _closure2_slot3;
 36:
                    michal = _closure2_slot2;
                    if(!michal) { _fun00010_ip = 67; continue _fun00009 }
 43:
                    report = _closure2_slot1;
                    tangon = report.some;
                    zuuluu = function(argFoo) {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            report = argFoo;
                            entity = report.messageReference;
                            zuuluu = null;
                            entity = zuuluu != entity;
                            if(!entity) { _fun00012_ip = 28; continue _fun00011 }
 18:
                            michal = report.webhookId;
                            entity = zuuluu != michal;
 28:
                            if(!entity) { _fun00012_ip = 55; continue _fun00011 }
 31:
                            tangon = report.hasFlag;
                            michal = _closure1_slot10;
                            michal = michal.IS_CROSSPOST;
                            entity = tangon.bind(report)(michal);
 55:
                            if(!entity) { _fun00012_ip = 74; continue _fun00011 }
 58:
                            michal = _closure2_slot0;
                            michal = michal.guild_id;
                            entity = zuuluu != michal;
 74:
                            return entity;
                        }
                    };
                    michal = tangon.bind(report)(zuuluu);
 67:
                    if(entity) { _fun00010_ip = 73; continue _fun00009 }
 70:
                    entity = michal;
 73:
                    return entity;
                }
            };
            report = report.bind(oscard)(michal, tangon);
            michal = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 11;
            entity = tangon[entity];
            tangon = michal.bind(zuuluu)(entity);
            zuuluu = tangon.useExperiment;
            michal = {};
            entity = '41de6d_1';
            michal['location'] = entity;
            entity = {};
            report = !report;
            entity['disable'] = report;
            report = true;
            entity['autoTrackExposure'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = entity.enabled;
            return entity;
        }
    };
    zuuluu['useShouldTrackAnnouncementMessageViews'] = tangon;
    tangon = function(argFoo) { // Original name: useMessagesLifecycle
        michal = argFoo;
        zuuluu = michal.messages;
        var _closure2_slot0 = zuuluu;
        zuuluu = michal.isMessagesReady;
        var _closure2_slot1 = zuuluu;
        zuuluu = michal.oldestUnreadMessageId;
        var _closure2_slot2 = zuuluu;
        oscard = michal.channelId;
        var _closure2_slot3 = oscard;
        zuuluu = michal.customHandlers;
        var _closure2_slot4 = zuuluu;
        report = michal.screenIndex;
        var _closure2_slot5 = report;
        zuuluu = michal.updateRows;
        var _closure2_slot6 = zuuluu;
        zuuluu = michal.scrollToMessageId;
        var _closure2_slot7 = zuuluu;
        zuuluu = michal.findMessageIndex;
        var _closure2_slot8 = zuuluu;
        michal = michal.chatRef;
        var _closure2_slot9 = michal;
        tangon = _closure1_slot4;
        golfie = tangon.useEffect;
        zuuluu = function() {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = _closure1_slot0;
                entity = _closure1_slot2;
                oscard = 12;
                zuuluu = entity[oscard];
                entity = undefined;
                option = tangon.bind(entity)(zuuluu);
                golfie = option.maybeRescrollToMessageId;
                tangon = _closure2_slot4;
                zuuluu = null;
                zuuluu = zuuluu == tangon;
                report = undefined;
                if(zuuluu) { _fun00014_ip = 59; continue _fun00013 }
 49:
                zuuluu = _closure2_slot4;
                report = zuuluu.rescrollToMessegeId;
 59:
                tangon = {};
                zuuluu = _closure2_slot9;
                tangon['chatRef'] = zuuluu;
                zuuluu = _closure2_slot8;
                tangon['findMessageIndex'] = zuuluu;
                yankee = _closure2_slot6;
                tangon['updateRows'] = yankee;
                zuuluu = false;
                tangon['updateRowsEnabled'] = zuuluu;
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                verify = 13;
                verify = michal[verify];
                verify = zuuluu.bind(entity)(verify);
                verify = verify.JumpTypes;
                verify = verify.INSTANT;
                tangon['jumpType'] = verify;
                tangon = golfie.bind(option)(report, tangon);
                tangon = michal[oscard];
                verify = zuuluu.bind(entity)(tangon);
                option = verify.syncMessageDisplay;
                golfie = {};
                report = _closure2_slot0;
                golfie['messages'] = report;
                tangon = _closure2_slot1;
                golfie['isMessagesReady'] = tangon;
                tangon = _closure2_slot2;
                golfie['oldestUnreadMessageId'] = tangon;
                tangon = _closure2_slot3;
                golfie['channelId'] = tangon;
                golfie['updateRows'] = yankee;
                offset = _closure2_slot7;
                golfie['scrollToMessageId'] = offset;
                golfie = option.bind(verify)(golfie);
                michal = michal[oscard];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.recordTimings;
                michal = michal.bind(zuuluu)(tangon, report);
                return entity;
            }
        };
        michal = new Array(0);
        michal = golfie.bind(tangon)(zuuluu, michal);
        zuuluu = tangon.useEffect;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            entity = function() {
                report = _closure1_slot6;
                tangon = _closure2_slot3;
                zuuluu = _closure2_slot5;
                entity = undefined;
                michal = false;
                michal = report.bind(entity)(tangon, zuuluu, michal);
                return entity;
            };
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        entity = undefined;
        return entity;
    };
    zuuluu['useMessagesLifecycle'] = tangon;
    tangon = function() { // Original name: useScrollState
        report = _closure1_slot4;
        tangon = report.useState;
        zuuluu = {'animated': false, 'hasHandledScroll': false, 'isAtBottom': false, 'isNearBottom': false, 'isNearTop': false, 'decelerating': false, 'dragging': false, 'hasMoreMessagesAfterForLastUpdate': false, '_loaded': false};
        oscard = tangon.bind(report)(zuuluu);
        tangon = _closure1_slot3;
        zuuluu = undefined;
        entity = 2;
        tangon = tangon.bind(zuuluu)(oscard, entity);
        entity = 0;
        zuuluu = tangon[entity];
        entity = 1;
        entity = tangon[entity];
        var _closure2_slot0 = entity;
        entity = new Array(2);
        entity[0] = zuuluu;
        tangon = report.useCallback;
        zuuluu = function(argFoo) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            zuuluu = _closure2_slot0;
            entity = undefined;
            michal = function(argFoo) {
                entity = {};
                zuuluu = argFoo;
                tangon = entity;
                michal = copyDataProperties(tangon, zuuluu);
                zuuluu = _closure3_slot0;
                tangon = entity;
                michal = copyDataProperties(tangon, zuuluu);
                return entity;
            };
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        michal = new Array(0);
        michal = tangon.bind(report)(zuuluu, michal);
        entity[1] = michal;
        return entity;
    };
    zuuluu['useScrollState'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useChatUpdatesQueue
        oscard = argFoo;
        entity = argBar;
        var _closure2_slot0 = oscard;
        var _closure2_slot1 = entity;
        report = _closure1_slot4;
        tangon = report.useMemo;
        zuuluu = new Array(2);
        zuuluu[0] = oscard;
        zuuluu[1] = entity;
        entity = function() {
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 14;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            tangon = michal.ChatUpdatesQueue;
            michal = tangon.prototype;
            michal = Object.create(michal, {constructor: {value: tangon}});
            oscard = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot0;
                    zuuluu = entity.current;
                    entity = null;
                    if(!(entity !== zuuluu)) { _fun00016_ip = 41; continue _fun00015 }
 18:
                    tangon = _closure1_slot5;
                    michal = _closure2_slot0;
                    zuuluu = michal.current;
                    michal = undefined;
                    entity = tangon.bind(michal)(zuuluu);
 41:
                    return entity;
                }
            };
            report = function(argFoo) {
                zuuluu = _closure2_slot1;
                entity = undefined;
                michal = argFoo;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            golfie = michal;
            entity = new golfie[tangon](oscard, report, tangon);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        entity = tangon.bind(report)(entity, zuuluu);
        var _closure2_slot2 = entity;
        tangon = report.useEffect;
        zuuluu = new Array(1);
        zuuluu[0] = entity;
        michal = function() {
            entity = function() {
                michal = _closure2_slot2;
                entity = michal.cleanup;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            return entity;
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['useChatUpdatesQueue'] = tangon;
    michal = function() { // Original name: useMessagesState
        offset = _closure1_slot4;
        entity = offset.useState;
        verify = false;
        entity = entity.bind(offset)(verify);
        option = _closure1_slot3;
        golfie = undefined;
        zuuluu = 2;
        entity = option.bind(golfie)(entity, zuuluu);
        report = 0;
        oscard = entity[report];
        tangon = 1;
        michal = entity[tangon];
        entity = offset.useState;
        entity = entity.bind(offset)(verify);
        zuuluu = option.bind(golfie)(entity, zuuluu);
        entity = {};
        entity['shouldForceRender'] = oscard;
        report = zuuluu[report];
        entity['hasJumpedToOriginalPost'] = report;
        zuuluu = zuuluu[tangon];
        entity['setHasJumpedToOriginalPost'] = zuuluu;
        entity['setShouldForceRender'] = michal;
        return entity;
    };
    zuuluu['useMessagesState'] = michal;
    return entity;
})();