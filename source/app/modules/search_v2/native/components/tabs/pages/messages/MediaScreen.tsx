// app/modules/search_v2/native/components/tabs/pages/messages/MediaScreen.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.SearchListItemTypes;
    var _closure1_slot6 = option;
    option = tangon.MEDIA_NUM_COLUMNS;
    var _closure1_slot7 = option;
    option = tangon.EMPTY_MEDIA_RESULTS;
    var _closure1_slot8 = option;
    tangon = tangon.MEDIA_ITEM_GAP_WIDTH;
    var _closure1_slot9 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MEDIA_MODAL_KEY;
    var _closure1_slot10 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot11 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: MediaScreen
        entity = argFoo;
        kiloes = entity.searchContext;
        var _closure2_slot0 = kiloes;
        backup = entity.tab;
        var _closure2_slot1 = backup;
        foxtra = entity.isFocused;
        report = entity.onViewableItemsChanged;
        offset = _closure1_slot0;
        yankee = _closure1_slot2;
        michal = 6;
        michal = yankee[michal];
        tangon = undefined;
        oscard = offset.bind(tangon)(michal);
        michal = oscard.useContentContainerStyles;
        verify = michal.bind(oscard)();
        michal = _closure1_slot1;
        oscard = 7;
        oscard = yankee[oscard];
        oscard = michal.bind(tangon)(oscard);
        romeon = oscard.bind(tangon)();
        var _closure2_slot2 = romeon;
        oscard = 8;
        oscard = yankee[oscard];
        golfie = offset.bind(tangon)(oscard);
        oscard = golfie.useSearchMessages;
        sizing = oscard.bind(golfie)(kiloes, backup);
        var _closure2_slot3 = sizing;
        oscard = 9;
        oscard = yankee[oscard];
        output = offset.bind(tangon)(oscard);
        golfie = output.useSearchMessagesLoadingState;
        oscard = {};
        oscard['searchContext'] = kiloes;
        oscard['tab'] = backup;
        oscard['placeholderHeight'] = romeon;
        option = _closure1_slot7;
        oscard['numColumns'] = option;
        output = golfie.bind(output)(oscard);
        golfie = output.isFirstPageLoading;
        oscard = output.isNextPageLoading;
        echoed = output.placeholderCount;
        var _closure2_slot4 = echoed;
        result = _closure1_slot3;
        source = result.useMemo;
        update = new Array(1);
        update[0] = sizing;
        output = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot3;
                entity = null;
                if(!(entity != zuuluu)) { _fun00002_ip = 28; continue _fun00001 }
 13:
                entity = _closure2_slot3;
                zuuluu = entity.length;
                entity = 0;
                if(!(!(zuuluu > entity))) { _fun00002_ip = 37; continue _fun00001 }
 28:
                entity = _closure1_slot8;
                _fun00002_ip = 61; continue _fun00001;
 37:
                tangon = _closure2_slot3;
                zuuluu = tangon.flatMap;
                michal = function(argFoo) {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 10;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.getMedia;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal);
 61:
                return entity;
            }
        };
        update = source.bind(result)(output, update);
        var _closure2_slot5 = update;
        ctrled = result.useCallback;
        source = new Array(2);
        source[0] = kiloes;
        source[1] = backup;
        output = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 11;
            michal = michal[entity];
            entity = undefined;
            oscard = zuuluu.bind(entity)(michal);
            report = oscard.fetchNextMessages;
            tangon = _closure2_slot0;
            zuuluu = _closure2_slot1;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 12;
                    tangon = tangon[entity];
                    entity = undefined;
                    oscard = report.bind(entity)(tangon);
                    report = oscard.isModalOpen;
                    tangon = _closure1_slot10;
                    tangon = report.bind(oscard)(tangon);
                    if(!tangon) { _fun00004_ip = 199; continue _fun00003 }
 48:
                    golfie = _closure1_slot5;
                    oscard = golfie.getState;
                    option = _closure2_slot0;
                    report = function(argFoo) {
                        michal = argFoo;
                        entity = michal.getSearchResultsQuery;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    golfie = oscard.bind(golfie)(option, report);
                    oscard = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 10;
                    report = verify[report];
                    oscard = oscard.bind(entity)(report);
                    report = oscard.getSearchTabFetchId;
                    tangon = _closure2_slot1;
                    oscard = report.bind(oscard)(option, tangon, golfie);
                    report = _closure1_slot4;
                    tangon = report.getMessages;
                    oscard = tangon.bind(report)(oscard);
                    report = new Array(0);
                    var _closure4_slot0 = report;
                    tangon = null;
                    if(!(tangon != oscard)) { _fun00004_ip = 161; continue _fun00003 }
 144:
                    tangon = oscard.forEach;
                    zuuluu = function(argFoo) {
                        zuuluu = _closure1_slot0;
                        report = _closure1_slot2;
                        entity = 10;
                        michal = report[entity];
                        entity = undefined;
                        oscard = zuuluu.bind(entity)(michal);
                        tangon = oscard.getMedia;
                        michal = argFoo;
                        tangon = tangon.bind(oscard)(michal);
                        michal = 13;
                        michal = report[michal];
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.getMediaViewerSources;
                        michal = michal.bind(zuuluu)(tangon);
                        tangon = michal.sources;
                        zuuluu = tangon.forEach;
                        michal = function(argFoo) {
                            zuuluu = _closure4_slot0;
                            michal = zuuluu.push;
                            entity = argFoo;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    zuuluu = tangon.bind(oscard)(zuuluu);
 161:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 14;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.setMediaViewerSources;
                    michal = {};
                    michal['sources'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 199:
                    return entity;
                }
            };
            michal = report.bind(oscard)(tangon, zuuluu, michal);
            return entity;
        };
        vacuum = ctrled.bind(result)(output, source);
        output = 13;
        output = yankee[output];
        ctrled = offset.bind(tangon)(output);
        source = ctrled.useOnPressMediaItem;
        output = {};
        output['searchContext'] = kiloes;
        output['mediaResults'] = update;
        output['onEndReached'] = vacuum;
        vacuum = 500;
        output['onEndReachedThreshold'] = vacuum;
        ctrled = source.bind(ctrled)(output);
        var _closure2_slot6 = ctrled;
        source = result.useCallback;
        output = new Array(4);
        output[0] = ctrled;
        output[1] = kiloes;
        output[2] = backup;
        output[3] = sizing;
        sizing = function(argFoo, argBar) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                report = entity.media;
                var _closure3_slot0 = report;
                tangon = entity.originView;
                oscard = _closure2_slot3;
                entity = null;
                oscard = entity == oscard;
                entity = undefined;
                option = undefined;
                if(oscard) { _fun00006_ip = 63; continue _fun00005 }
 41:
                golfie = _closure2_slot3;
                oscard = golfie.find;
                michal = function(argFoo) {
                    entity = argFoo;
                    michal = entity.id;
                    entity = _closure3_slot0;
                    entity = entity.messageId;
                    entity = michal === entity;
                    return entity;
                };
                option = oscard.bind(golfie)(michal);
 63:
                golfie = _closure1_slot0;
                verify = _closure1_slot2;
                oscard = 15;
                oscard = verify[oscard];
                golfie = golfie.bind(entity)(oscard);
                oscard = golfie.shouldAgeVerifyForSearchMedia;
                oscard = oscard.bind(golfie)(report, option);
                if(oscard) { _fun00006_ip = 189; continue _fun00005 }
 101:
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                oscard = 18;
                oscard = option[oscard];
                option = golfie.bind(entity)(oscard);
                golfie = option.trackMessageItemPress;
                oscard = {};
                verify = _closure2_slot0;
                oscard['searchContext'] = verify;
                verify = report.channelId;
                oscard['channelId'] = verify;
                verify = report.messageId;
                oscard['messageId'] = verify;
                verify = argBar;
                oscard['index'] = verify;
                verify = _closure2_slot1;
                oscard['tab'] = verify;
                oscard = golfie.bind(option)(oscard);
                zuuluu = _closure2_slot6;
                zuuluu = zuuluu.bind(entity)(report, tangon);
                _fun00006_ip = 248; continue _fun00005;
 189:
                tangon = _closure1_slot1;
                oscard = _closure1_slot2;
                zuuluu = 16;
                zuuluu = oscard[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.showAgeVerificationGetStartedModal;
                report = _closure1_slot0;
                michal = 17;
                michal = oscard[michal];
                michal = report.bind(entity)(michal);
                michal = michal.AgeVerificationModalEntryPoint;
                michal = michal.SEARCH_MEDIA_PREVIEW;
                michal = zuuluu.bind(tangon)(michal);
 248:
                return entity;
            }
        };
        source = source.bind(result)(sizing, output);
        var _closure2_slot7 = source;
        output = result.useMemo;
        sizing = new Array(4);
        sizing[0] = source;
        sizing[1] = update;
        sizing[2] = romeon;
        sizing[3] = echoed;
        zuuluu = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = new Array(0);
                var _closure3_slot0 = entity;
                tangon = _closure2_slot5;
                zuuluu = tangon.forEach;
                michal = function(argFoo, argBar) {
                    yankee = argBar;
                    var _closure4_slot0 = yankee;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.push;
                    michal = {};
                    report = _closure1_slot6;
                    report = report.MEDIA;
                    michal['type'] = report;
                    report = {};
                    oscard = argFoo;
                    report['media'] = oscard;
                    oscard = _closure2_slot2;
                    report['size'] = oscard;
                    entity = function(argFoo) { // Original name: onPress
                        tangon = _closure2_slot7;
                        zuuluu = _closure4_slot0;
                        michal = undefined;
                        entity = argFoo;
                        entity = tangon.bind(michal)(entity, zuuluu);
                        return entity;
                    };
                    report['onPress'] = entity;
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot2;
                    entity = 11;
                    oscard = oscard[entity];
                    entity = undefined;
                    option = golfie.bind(entity)(oscard);
                    golfie = option.getMediaGridItemStyles;
                    oscard = {};
                    oscard['itemIndex'] = yankee;
                    offset = _closure2_slot5;
                    offset = offset.length;
                    oscard['numItems'] = offset;
                    offset = _closure1_slot7;
                    oscard['numColumns'] = offset;
                    offset = _closure1_slot9;
                    verify = 2;
                    verify = offset - verify;
                    oscard['spacing'] = verify;
                    oscard = golfie.bind(option)(oscard);
                    report['containerStyle'] = oscard;
                    michal['props'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                michal = _closure2_slot4;
                offset = 0;
                if(!(michal > offset)) { _fun00008_ip = 292; continue _fun00007 }
 47:
                verify = entity.length;
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 19;
                michal = tangon[michal];
                golfie = undefined;
                tangon = zuuluu.bind(golfie)(michal);
                zuuluu = tangon.getAdjustedPlaceholderCount;
                michal = {};
                report = _closure1_slot7;
                michal['numColumns'] = report;
                michal['numResults'] = verify;
                report = _closure2_slot4;
                michal['placeholderCount'] = report;
                oscard = zuuluu.bind(tangon)(michal);
                romeon = offset < oscard;
                report = global;
                tangon = 'media-placeholder-';
                zuuluu = 11;
                michal = 2;
                offset = 0;
                if(!romeon) { _fun00008_ip = 292; continue _fun00007 }
 139:
                foxtra = entity.push;
                romeon = {};
                backup = _closure1_slot6;
                backup = backup.MEDIA_PLACEHOLDER;
                romeon['type'] = backup;
                kiloes = verify + offset;
                backup = report.HermesInternal;
                backup = backup.concat;
                backup = backup.bind(tangon)(kiloes);
                romeon['key'] = backup;
                backup = {};
                kiloes = _closure2_slot2;
                backup['size'] = kiloes;
                sizing = _closure1_slot0;
                kiloes = _closure1_slot2;
                kiloes = kiloes[zuuluu];
                output = sizing.bind(golfie)(kiloes);
                sizing = output.getMediaGridItemStyles;
                kiloes = {};
                result = verify + offset;
                kiloes['itemIndex'] = result;
                result = _closure2_slot5;
                result = result.length;
                kiloes['numItems'] = result;
                result = _closure1_slot7;
                kiloes['numColumns'] = result;
                result = _closure1_slot9;
                result = result - michal;
                kiloes['spacing'] = result;
                kiloes = sizing.bind(output)(kiloes);
                backup['containerStyle'] = kiloes;
                romeon['props'] = backup;
                romeon = foxtra.bind(entity)(romeon);
                offset = offset + 1;
                if(offset < oscard) { _fun00008_ip = 139; continue _fun00007 }
 292:
                return entity;
            }
        };
        sizing = output.bind(result)(zuuluu, sizing);
        zuuluu = _closure1_slot11;
        entity = 18;
        entity = yankee[entity];
        michal = michal.bind(tangon)(entity);
        entity = {};
        entity['data'] = sizing;
        entity['searchContext'] = kiloes;
        entity['tab'] = backup;
        entity['isFocused'] = foxtra;
        entity['estimatedItemSize'] = romeon;
        verify = verify.mediaContentContainer;
        entity['contentContainerStyle'] = verify;
        verify = 20;
        verify = yankee[verify];
        verify = offset.bind(tangon)(verify);
        verify = verify.MediaVerticalSeparator;
        entity['ItemSeparatorComponent'] = verify;
        entity['numColumns'] = option;
        entity['isFirstPageLoading'] = golfie;
        entity['isNextPageLoading'] = oscard;
        entity['onViewableItemsChanged'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 21;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/tabs/pages/messages/MediaScreen.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();