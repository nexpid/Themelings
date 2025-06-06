// app/modules/search_v2/native/components/tabs/pages/messages/BaseMessagesScreen.tsx
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
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SearchResultAnalyticsEntityTypes;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot7 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/tabs/pages/messages/BaseMessagesScreen.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: BaseMessagesScreen
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            foxtra = michal.data;
            var _closure2_slot0 = foxtra;
            oscard = michal.searchContext;
            var _closure2_slot1 = oscard;
            result = michal.tab;
            var _closure2_slot2 = result;
            ctrled = michal.isFocused;
            var _closure2_slot3 = ctrled;
            zuuluu = michal.isFirstPageLoading;
            entity = michal.isNextPageLoading;
            romeon = michal.estimatedItemSize;
            backup = michal.contentContainerStyle;
            verify = michal.ItemSeparatorComponent;
            option = michal.numColumns;
            report = undefined;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            var _closure2_slot8 = report;
            var _closure2_slot9 = report;
            var _closure2_slot10 = report;
            if(zuuluu) { _fun00002_ip = 116; continue _fun00001 }
 113:
            zuuluu = entity;
 116:
            _closure2_slot4 = zuuluu;
            golfie = _closure1_slot5;
            tangon = golfie.useState;
            entity = function(argFoo) {
                michal = argFoo;
                entity = michal.getSearchResultsQuery;
                entity = entity.bind(michal)();
                return entity;
            };
            golfie = tangon.bind(golfie)(oscard, entity);
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            entity = 5;
            entity = output[entity];
            tangon = sizing.bind(report)(entity);
            entity = tangon.getSearchTabFetchId;
            entity = entity.bind(tangon)(oscard, result, golfie);
            _closure2_slot5 = entity;
            golfie = 7;
            entity = output[golfie];
            echoed = sizing.bind(report)(entity);
            kiloes = echoed.useStateFromStores;
            entity = _closure1_slot4;
            yankee = new Array(1);
            yankee[0] = entity;
            tangon = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.getIsIndexing;
                entity = _closure2_slot5;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = kiloes.bind(echoed)(yankee, tangon);
            golfie = output[golfie];
            kiloes = sizing.bind(report)(golfie);
            yankee = kiloes.useStateFromStoresObject;
            golfie = new Array(1);
            golfie[0] = entity;
            entity = function() {
                entity = {};
                tangon = _closure1_slot4;
                report = tangon.getIsHistoricalIndexing;
                zuuluu = _closure2_slot5;
                zuuluu = report.bind(tangon)(zuuluu);
                entity['isHistoricalIndexing'] = zuuluu;
                zuuluu = tangon.getDocumentsIndexed;
                michal = _closure2_slot5;
                michal = zuuluu.bind(tangon)(michal);
                entity['documentsIndexed'] = michal;
                return entity;
            };
            entity = yankee.bind(kiloes)(golfie, entity);
            echoed = entity.isHistoricalIndexing;
            _closure2_slot6 = echoed;
            update = entity.documentsIndexed;
            _closure2_slot7 = update;
            entity = 8;
            entity = output[entity];
            yankee = sizing.bind(report)(entity);
            golfie = yankee.useMessageSearchErrorScreen;
            entity = {};
            entity['searchContext'] = oscard;
            entity['tab'] = result;
            yankee = golfie.bind(yankee)(entity);
            entity = yankee.canShowErrorScreen;
            golfie = yankee.errorScreenText;
            vacuum = yankee.canShowErrorToast;
            _closure2_slot8 = vacuum;
            kiloes = yankee.showErrorToast;
            _closure2_slot9 = kiloes;
            yankee = 9;
            yankee = output[yankee];
            sizing = sizing.bind(report)(yankee);
            yankee = sizing.useSearchFetchPendingManager;
            sizing = yankee.bind(sizing)(oscard);
            _closure2_slot10 = sizing;
            output = _closure1_slot3;
            sequen = output.useCallback;
            yankee = foxtra.length;
            source = new Array(6);
            source[0] = yankee;
            source[1] = zuuluu;
            source[2] = ctrled;
            source[3] = sizing;
            source[4] = result;
            source[5] = oscard;
            yankee = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot0;
                    zuuluu = michal.length;
                    michal = 0;
                    if(!(michal !== zuuluu)) { _fun00004_ip = 117; continue _fun00003 }
 18:
                    michal = _closure2_slot4;
                    if(michal) { _fun00004_ip = 99; continue _fun00003 }
 25:
                    michal = _closure2_slot3;
                    if(michal) { _fun00004_ip = 52; continue _fun00003 }
 32:
                    tangon = _closure2_slot10;
                    zuuluu = tangon.add;
                    michal = _closure2_slot2;
                    michal = zuuluu.bind(tangon)(michal);
                    _fun00004_ip = 117; continue _fun00003;
 52:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 10;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.fetchNextMessages;
                    zuuluu = _closure2_slot1;
                    michal = _closure2_slot2;
                    michal = tangon.bind(report)(zuuluu, michal);
                    _fun00004_ip = 117; continue _fun00003;
 99:
                    zuuluu = _closure2_slot10;
                    michal = zuuluu.add;
                    entity = _closure2_slot2;
                    entity = michal.bind(zuuluu)(entity);
 117:
                    entity = undefined;
                    return entity;
                }
            };
            yankee = sequen.bind(output)(yankee, source);
            sequen = output.useEffect;
            source = new Array(5);
            source[0] = ctrled;
            source[1] = zuuluu;
            source[2] = oscard;
            source[3] = sizing;
            source[4] = result;
            sizing = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot3;
                    if(michal) { _fun00006_ip = 27; continue _fun00005 }
 10:
                    zuuluu = _closure2_slot3;
                    if(!zuuluu) { _fun00006_ip = 24; continue _fun00005 }
 17:
                    tangon = _closure2_slot4;
                    zuuluu = !tangon;
 24:
                    michal = zuuluu;
 27:
                    if(!michal) { _fun00006_ip = 54; continue _fun00005 }
 30:
                    tangon = _closure2_slot10;
                    zuuluu = tangon.flush;
                    michal = _closure2_slot1;
                    entity = _closure2_slot2;
                    entity = zuuluu.bind(tangon)(michal, entity);
 54:
                    entity = undefined;
                    return entity;
                }
            };
            sizing = sequen.bind(output)(sizing, source);
            source = output.useEffect;
            sizing = new Array(5);
            sizing[0] = vacuum;
            vacuum = foxtra.length;
            sizing[1] = vacuum;
            sizing[2] = ctrled;
            sizing[3] = zuuluu;
            sizing[4] = kiloes;
            kiloes = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot4;
                    michal = !michal;
                    if(!michal) { _fun00008_ip = 17; continue _fun00007 }
 13:
                    michal = _closure2_slot8;
 17:
                    if(!michal) { _fun00008_ip = 24; continue _fun00007 }
 20:
                    michal = _closure2_slot3;
 24:
                    if(!michal) { _fun00008_ip = 42; continue _fun00007 }
 27:
                    zuuluu = _closure2_slot0;
                    tangon = zuuluu.length;
                    zuuluu = 0;
                    michal = tangon > zuuluu;
 42:
                    if(!michal) { _fun00008_ip = 55; continue _fun00007 }
 45:
                    michal = _closure2_slot9;
                    entity = undefined;
                    entity = michal.bind(entity)();
 55:
                    entity = undefined;
                    return entity;
                }
            };
            kiloes = source.bind(output)(kiloes, sizing);
            sizing = output.useMemo;
            kiloes = new Array(4);
            kiloes[0] = update;
            kiloes[1] = echoed;
            kiloes[2] = oscard;
            kiloes[3] = result;
            offset = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot6;
                    zuuluu = null;
                    entity = null;
                    if(!michal) { _fun00010_ip = 106; continue _fun00009 }
 14:
                    michal = _closure2_slot7;
                    michal = zuuluu != michal;
                    entity = null;
                    if(!michal) { _fun00010_ip = 106; continue _fun00009 }
 27:
                    tangon = _closure2_slot7;
                    michal = 0;
                    michal = tangon > michal;
                    entity = null;
                    if(!michal) { _fun00010_ip = 106; continue _fun00009 }
 42:
                    report = _closure1_slot7;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 11;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    golfie = _closure2_slot1;
                    michal['searchContext'] = golfie;
                    golfie = _closure2_slot7;
                    michal['documentsIndexed'] = golfie;
                    oscard = _closure2_slot2;
                    michal['tab'] = oscard;
                    entity = report.bind(tangon)(zuuluu, michal);
 106:
                    return entity;
                }
            };
            offset = sizing.bind(output)(offset, kiloes);
            if(tangon) { _fun00002_ip = 685; continue _fun00001 }
 562:
            if(zuuluu) { _fun00002_ip = 617; continue _fun00001 }
 565:
            if(!entity) { _fun00002_ip = 617; continue _fun00001 }
 568:
            zuuluu = foxtra.length;
            entity = 0;
            if(!(entity === zuuluu)) { _fun00002_ip = 617; continue _fun00001 }
 579:
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot1;
            kiloes = _closure1_slot2;
            entity = 13;
            entity = kiloes[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = {};
            entity['text'] = golfie;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00002_ip = 683; continue _fun00001;
 617:
            golfie = _closure1_slot7;
            tangon = _closure1_slot1;
            kiloes = _closure1_slot2;
            zuuluu = 14;
            zuuluu = kiloes[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = {};
            zuuluu['contentContainerStyle'] = backup;
            zuuluu['data'] = foxtra;
            zuuluu['estimatedItemSize'] = romeon;
            zuuluu['onEndReached'] = yankee;
            zuuluu['ListHeaderComponent'] = offset;
            zuuluu['ItemSeparatorComponent'] = verify;
            zuuluu['numColumns'] = option;
            entity = golfie.bind(report)(tangon, zuuluu);
 683:
            _fun00002_ip = 722; continue _fun00001;
 685:
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 12;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal['searchContext'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 722:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: trackMessageItemPress
        entity = argFoo;
        offset = entity.searchContext;
        verify = entity.channelId;
        golfie = entity.messageId;
        oscard = entity.index;
        romeon = entity.tab;
        zuuluu = _closure1_slot5;
        michal = zuuluu.getState;
        entity = function(argFoo) {
            michal = argFoo;
            entity = michal.getSearchResultsQuery;
            entity = entity.bind(michal)();
            return entity;
        };
        yankee = michal.bind(zuuluu)(offset, entity);
        zuuluu = _closure1_slot0;
        tangon = _closure1_slot2;
        entity = 5;
        michal = tangon[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        michal = report.getSearchTabFetchId;
        yankee = michal.bind(report)(offset, romeon, yankee);
        report = _closure1_slot4;
        michal = report.getTotalCount;
        report = michal.bind(report)(yankee);
        michal = 6;
        michal = tangon[michal];
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.trackSearchResultClicked;
        michal = {};
        michal['searchContext'] = offset;
        michal['channelId'] = verify;
        option = _closure1_slot6;
        option = option.MESSAGE;
        michal['entityType'] = option;
        michal['entityId'] = golfie;
        michal['index'] = oscard;
        michal['totalSearchResults'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['trackMessageItemPress'] = michal;
    return entity;
})();