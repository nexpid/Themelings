// app/modules/search_v2/native/components/tabs/pages/MessagesScreen.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: getAdjustedPlaceholderCount
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tangon = entity.numColumns;
            michal = entity.numResults;
            zuuluu = entity.placeholderCount;
            entity = 0;
            if(!(entity !== zuuluu)) { _fun00002_ip = 39; continue _fun00001 }
 27:
            michal = michal % tangon;
            michal = tangon - michal;
            entity = zuuluu + michal;
 39:
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo, argBar) { // Original name: useSearchMessages
        offset = argFoo;
        report = _closure1_slot6;
        tangon = report.useState;
        zuuluu = function(argFoo) {
            michal = argFoo;
            entity = michal.getSearchResultsQuery;
            entity = entity.bind(michal)();
            return entity;
        };
        verify = tangon.bind(report)(offset, zuuluu);
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        zuuluu = 7;
        zuuluu = oscard[zuuluu];
        tangon = undefined;
        option = report.bind(tangon)(zuuluu);
        golfie = option.getSearchTabFetchId;
        zuuluu = argBar;
        zuuluu = golfie.bind(option)(offset, zuuluu, verify);
        var _closure2_slot0 = zuuluu;
        zuuluu = 8;
        zuuluu = oscard[zuuluu];
        tangon = report.bind(tangon)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot5;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            zuuluu = _closure1_slot5;
            michal = zuuluu.getMessages;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo) { // Original name: useMessagesLoadingState
        michal = argFoo;
        verify = michal.searchContext;
        var _closure2_slot0 = verify;
        zuuluu = michal.tab;
        var _closure2_slot1 = zuuluu;
        yankee = michal.placeholderHeight;
        offset = michal.numColumns;
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        zuuluu = 9;
        zuuluu = oscard[zuuluu];
        tangon = undefined;
        option = report.bind(tangon)(zuuluu);
        golfie = option.useFullscreenPlaceholderCount;
        zuuluu = {};
        zuuluu['placeholderHeight'] = yankee;
        zuuluu['numColumns'] = offset;
        zuuluu = golfie.bind(option)(zuuluu);
        var _closure2_slot2 = zuuluu;
        zuuluu = 10;
        zuuluu = oscard[zuuluu];
        option = report.bind(tangon)(zuuluu);
        golfie = option.useIsSearchImprovedLoadingStatesExperimentEnabled;
        zuuluu = {};
        offset = 'useMessagesLoadingState';
        zuuluu['location'] = offset;
        zuuluu = golfie.bind(option)(zuuluu);
        var _closure2_slot3 = zuuluu;
        option = _closure1_slot6;
        golfie = option.useState;
        zuuluu = function(argFoo) {
            michal = argFoo;
            entity = michal.getSearchResultsQuery;
            entity = entity.bind(michal)();
            return entity;
        };
        zuuluu = golfie.bind(option)(verify, zuuluu);
        var _closure2_slot4 = zuuluu;
        zuuluu = 8;
        zuuluu = oscard[zuuluu];
        tangon = report.bind(tangon)(zuuluu);
        zuuluu = tangon.useStateFromStoresObject;
        report = _closure1_slot5;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 7;
                zuuluu = zuuluu[michal];
                michal = undefined;
                golfie = tangon.bind(michal)(zuuluu);
                oscard = golfie.getSearchTabFetchId;
                report = _closure2_slot0;
                tangon = _closure2_slot1;
                zuuluu = _closure2_slot4;
                oscard = oscard.bind(golfie)(report, tangon, zuuluu);
                tangon = _closure1_slot5;
                zuuluu = tangon.getIsInitialFetchComplete;
                tangon = zuuluu.bind(tangon)(oscard);
                report = _closure1_slot5;
                zuuluu = report.getIsFetching;
                zuuluu = zuuluu.bind(report)(oscard);
                oscard = !tangon;
                tangon = !oscard;
                if(oscard) { _fun00004_ip = 95; continue _fun00003 }
 92:
                tangon = zuuluu;
 95:
                zuuluu = global;
                golfie = zuuluu.Math;
                report = golfie.max;
                zuuluu = _closure2_slot2;
                option = _closure1_slot7;
                entity = _closure2_slot1;
                entity = option[entity];
                zuuluu = report.bind(golfie)(zuuluu, entity);
                entity = {};
                entity['isFirstPageLoading'] = oscard;
                entity['isNextPageLoading'] = tangon;
                golfie = _closure2_slot3;
                michal = 0;
                if(!golfie) { _fun00004_ip = 162; continue _fun00003 }
 151:
                if(oscard) { _fun00004_ip = 159; continue _fun00003 }
 154:
                michal = 0;
                if(!tangon) { _fun00004_ip = 162; continue _fun00003 }
 159:
                michal = zuuluu;
 162:
                entity['placeholderCount'] = michal;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: HistoricalIndexingHeader
        michal = argFoo;
        verify = michal.searchContext;
        var _closure2_slot0 = verify;
        offset = michal.documentsIndexed;
        var _closure2_slot1 = offset;
        michal = michal.tab;
        var _closure2_slot2 = michal;
        zuuluu = _closure1_slot26;
        tangon = undefined;
        oscard = zuuluu.bind(tangon)();
        var _closure2_slot3 = oscard;
        yankee = _closure1_slot3;
        option = yankee.useMemo;
        golfie = new Array(1);
        golfie[0] = offset;
        zuuluu = function() {
            entity = global;
            zuuluu = entity.Number;
            michal = _closure2_slot1;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.toLocaleString;
            entity = _closure1_slot4;
            entity = entity.locale;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        romeon = option.bind(yankee)(zuuluu, golfie);
        option = _closure1_slot3;
        golfie = option.useMemo;
        yankee = oscard.headerMessages;
        zuuluu = new Array(2);
        zuuluu[0] = yankee;
        zuuluu[1] = michal;
        michal = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = _closure2_slot2;
                zuuluu = _closure1_slot8;
                zuuluu = zuuluu.MESSAGES;
                if(!(tangon !== zuuluu)) { _fun00006_ip = 44; continue _fun00005 }
 24:
                tangon = _closure2_slot2;
                entity = _closure1_slot8;
                zuuluu = entity.PINS;
                entity = undefined;
                if(!(tangon === zuuluu)) { _fun00006_ip = 54; continue _fun00005 }
 44:
                michal = _closure2_slot3;
                entity = michal.headerMessages;
 54:
                return entity;
            }
        };
        golfie = golfie.bind(option)(michal, zuuluu);
        option = _closure1_slot3;
        zuuluu = option.useEffect;
        michal = new Array(2);
        michal[0] = offset;
        michal[1] = verify;
        entity = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 12;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.trackSearchIndexing;
            michal = {};
            oscard = _closure2_slot0;
            michal['searchContext'] = oscard;
            oscard = true;
            michal['isHistoricalIndexing'] = oscard;
            report = _closure2_slot1;
            michal['documentsIndexed'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = zuuluu.bind(option)(entity, michal);
        zuuluu = _closure1_slot23;
        verify = _closure1_slot0;
        foxtra = _closure1_slot2;
        entity = 13;
        entity = foxtra[entity];
        entity = verify.bind(tangon)(entity);
        michal = entity.Card;
        entity = {'variant': 'primary', 'border': 'subtle'};
        option = oscard.header;
        oscard = new Array(2);
        oscard[0] = option;
        oscard[1] = golfie;
        entity['style'] = oscard;
        golfie = _closure1_slot23;
        report = 14;
        report = foxtra[report];
        report = verify.bind(tangon)(report);
        oscard = report.Text;
        report = {'variant': 'heading-sm/normal', 'color': 'interactive-normal'};
        option = 15;
        offset = foxtra[option];
        offset = verify.bind(tangon)(offset);
        yankee = offset.intl;
        offset = yankee.format;
        option = foxtra[option];
        option = verify.bind(tangon)(option);
        option = option.t;
        verify = option.4Y3O+P;
        option = {};
        option['count'] = romeon;
        option = offset.bind(yankee)(verify, option);
        report['children'] = option;
        report = golfie.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot30 = entity;
    entity = function(argFoo) { // Original name: SearchIndexingScreen
        entity = argFoo;
        report = entity.searchContext;
        var _closure2_slot0 = report;
        oscard = _closure1_slot3;
        tangon = oscard.useEffect;
        zuuluu = new Array(1);
        zuuluu[0] = report;
        michal = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 12;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.trackSearchIndexing;
            michal = {};
            report = _closure2_slot0;
            michal['searchContext'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal = tangon.bind(oscard)(michal, zuuluu);
        zuuluu = _closure1_slot0;
        oscard = _closure1_slot2;
        michal = 7;
        michal = oscard[michal];
        tangon = undefined;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.getIndexingErrorText;
        report = michal.bind(zuuluu)(report);
        zuuluu = _closure1_slot23;
        michal = _closure1_slot1;
        entity = 16;
        entity = oscard[entity];
        michal = michal.bind(tangon)(entity);
        entity = {};
        entity['text'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot31 = entity;
    entity = function(argFoo) { // Original name: MessageContentScreen
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            echoed = entity.data;
            var _closure2_slot0 = echoed;
            oscard = entity.searchContext;
            var _closure2_slot1 = oscard;
            source = entity.tab;
            var _closure2_slot2 = source;
            record = entity.isFocused;
            var _closure2_slot3 = record;
            vacuum = entity.isFirstPageLoading;
            kiloes = entity.isNextPageLoading;
            result = entity.estimatedItemSize;
            update = entity.contentContainerStyle;
            foxtra = entity.ItemSeparatorComponent;
            romeon = entity.numColumns;
            report = undefined;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            var _closure2_slot8 = report;
            var _closure2_slot9 = report;
            var _closure2_slot10 = report;
            zuuluu = vacuum;
            if(vacuum) { _fun00008_ip = 119; continue _fun00007 }
 116:
            zuuluu = kiloes;
 119:
            _closure2_slot4 = zuuluu;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 10;
            entity = offset[entity];
            golfie = verify.bind(report)(entity);
            tangon = golfie.useIsSearchImprovedLoadingStatesExperimentEnabled;
            entity = {};
            yankee = 'MessagesScreen';
            entity['location'] = yankee;
            output = tangon.bind(golfie)(entity);
            _closure2_slot5 = output;
            tangon = {};
            tangon['searchContext'] = oscard;
            tangon['tab'] = source;
            entity = function(argFoo) { // Original name: useIsIndexing
                michal = argFoo;
                offset = michal.searchContext;
                verify = michal.tab;
                report = _closure1_slot6;
                tangon = report.useState;
                zuuluu = function(argFoo) {
                    michal = argFoo;
                    entity = michal.getSearchResultsQuery;
                    entity = entity.bind(michal)();
                    return entity;
                };
                option = tangon.bind(report)(offset, zuuluu);
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                zuuluu = 7;
                zuuluu = oscard[zuuluu];
                tangon = undefined;
                golfie = report.bind(tangon)(zuuluu);
                zuuluu = golfie.getSearchTabFetchId;
                zuuluu = zuuluu.bind(golfie)(offset, verify, option);
                var _closure3_slot0 = zuuluu;
                zuuluu = 8;
                zuuluu = oscard[zuuluu];
                tangon = report.bind(tangon)(zuuluu);
                zuuluu = tangon.useStateFromStores;
                report = _closure1_slot5;
                michal = new Array(1);
                michal[0] = report;
                entity = function() {
                    zuuluu = _closure1_slot5;
                    michal = zuuluu.getIsIndexing;
                    entity = _closure3_slot0;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            tangon = entity.bind(report)(tangon);
            golfie = {};
            golfie['searchContext'] = oscard;
            golfie['tab'] = source;
            entity = function(argFoo) { // Original name: useIsHistoricalIndexing
                michal = argFoo;
                offset = michal.searchContext;
                verify = michal.tab;
                report = _closure1_slot6;
                tangon = report.useState;
                zuuluu = function(argFoo) {
                    michal = argFoo;
                    entity = michal.getSearchResultsQuery;
                    entity = entity.bind(michal)();
                    return entity;
                };
                option = tangon.bind(report)(offset, zuuluu);
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                zuuluu = 7;
                zuuluu = oscard[zuuluu];
                tangon = undefined;
                golfie = report.bind(tangon)(zuuluu);
                zuuluu = golfie.getSearchTabFetchId;
                zuuluu = zuuluu.bind(golfie)(offset, verify, option);
                var _closure3_slot0 = zuuluu;
                zuuluu = 8;
                zuuluu = oscard[zuuluu];
                tangon = report.bind(tangon)(zuuluu);
                zuuluu = tangon.useStateFromStoresObject;
                report = _closure1_slot5;
                michal = new Array(1);
                michal[0] = report;
                entity = function() {
                    entity = {};
                    report = _closure1_slot5;
                    zuuluu = report.getIsHistoricalIndexing;
                    tangon = _closure3_slot0;
                    zuuluu = zuuluu.bind(report)(tangon);
                    entity['isHistoricalIndexing'] = zuuluu;
                    zuuluu = _closure1_slot5;
                    michal = zuuluu.getDocumentsIndexed;
                    michal = michal.bind(zuuluu)(tangon);
                    entity['documentsIndexed'] = michal;
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = entity.bind(report)(golfie);
            backup = entity.isHistoricalIndexing;
            _closure2_slot6 = backup;
            papara = entity.documentsIndexed;
            _closure2_slot7 = papara;
            entity = 17;
            entity = offset[entity];
            yankee = verify.bind(report)(entity);
            golfie = yankee.useMessageSearchErrorScreen;
            entity = {};
            entity['searchContext'] = oscard;
            entity['tab'] = source;
            yankee = golfie.bind(yankee)(entity);
            entity = yankee.canShowErrorScreen;
            golfie = yankee.errorScreenText;
            cntext = yankee.canShowErrorToast;
            _closure2_slot8 = cntext;
            config = yankee.showErrorToast;
            _closure2_slot9 = config;
            yankee = 18;
            yankee = offset[yankee];
            sizing = verify.bind(report)(yankee);
            yankee = sizing.useSearchFetchPendingManager;
            yankee = yankee.bind(sizing)(oscard);
            _closure2_slot10 = yankee;
            sequen = _closure1_slot3;
            ctrled = sequen.useMemo;
            sizing = new Array(4);
            sizing[0] = papara;
            sizing[1] = backup;
            sizing[2] = oscard;
            sizing[3] = source;
            backup = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure2_slot6;
                    tangon = null;
                    entity = null;
                    if(!zuuluu) { _fun00010_ip = 90; continue _fun00009 }
 14:
                    zuuluu = _closure2_slot7;
                    zuuluu = tangon != zuuluu;
                    entity = null;
                    if(!zuuluu) { _fun00010_ip = 90; continue _fun00009 }
 27:
                    report = _closure2_slot7;
                    zuuluu = 0;
                    zuuluu = report > zuuluu;
                    entity = null;
                    if(!zuuluu) { _fun00010_ip = 90; continue _fun00009 }
 42:
                    report = _closure1_slot23;
                    tangon = _closure1_slot30;
                    zuuluu = {};
                    oscard = _closure2_slot1;
                    zuuluu['searchContext'] = oscard;
                    oscard = _closure2_slot7;
                    zuuluu['documentsIndexed'] = oscard;
                    michal = _closure2_slot2;
                    zuuluu['tab'] = michal;
                    michal = undefined;
                    entity = report.bind(michal)(tangon, zuuluu);
 90:
                    return entity;
                }
            };
            backup = ctrled.bind(sequen)(backup, sizing);
            papara = _closure1_slot3;
            sequen = papara.useCallback;
            sizing = echoed.length;
            ctrled = new Array(7);
            ctrled[0] = sizing;
            ctrled[1] = output;
            ctrled[2] = zuuluu;
            ctrled[3] = record;
            ctrled[4] = yankee;
            ctrled[5] = source;
            ctrled[6] = oscard;
            sizing = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = _closure2_slot0;
                    zuuluu = michal.length;
                    michal = 0;
                    if(!(michal !== zuuluu)) { _fun00012_ip = 124; continue _fun00011 }
 18:
                    michal = _closure2_slot5;
                    if(!michal) { _fun00012_ip = 32; continue _fun00011 }
 25:
                    michal = _closure2_slot4;
                    if(michal) { _fun00012_ip = 106; continue _fun00011 }
 32:
                    michal = _closure2_slot3;
                    if(michal) { _fun00012_ip = 59; continue _fun00011 }
 39:
                    tangon = _closure2_slot10;
                    zuuluu = tangon.add;
                    michal = _closure2_slot2;
                    michal = zuuluu.bind(tangon)(michal);
                    _fun00012_ip = 124; continue _fun00011;
 59:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 19;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.fetchNextMessages;
                    zuuluu = _closure2_slot1;
                    michal = _closure2_slot2;
                    michal = tangon.bind(report)(zuuluu, michal);
                    _fun00012_ip = 124; continue _fun00011;
 106:
                    zuuluu = _closure2_slot10;
                    michal = zuuluu.add;
                    entity = _closure2_slot2;
                    entity = michal.bind(zuuluu)(entity);
 124:
                    entity = undefined;
                    return entity;
                }
            };
            sizing = sequen.bind(papara)(sizing, ctrled);
            papara = _closure1_slot3;
            sequen = papara.useEffect;
            ctrled = new Array(6);
            ctrled[0] = record;
            ctrled[1] = output;
            ctrled[2] = zuuluu;
            ctrled[3] = oscard;
            ctrled[4] = yankee;
            ctrled[5] = source;
            yankee = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = _closure2_slot3;
                    if(michal) { _fun00014_ip = 34; continue _fun00013 }
 10:
                    zuuluu = _closure2_slot3;
                    if(!zuuluu) { _fun00014_ip = 21; continue _fun00013 }
 17:
                    zuuluu = _closure2_slot5;
 21:
                    if(!zuuluu) { _fun00014_ip = 31; continue _fun00013 }
 24:
                    tangon = _closure2_slot4;
                    zuuluu = !tangon;
 31:
                    michal = zuuluu;
 34:
                    if(!michal) { _fun00014_ip = 61; continue _fun00013 }
 37:
                    tangon = _closure2_slot10;
                    zuuluu = tangon.flush;
                    michal = _closure2_slot1;
                    entity = _closure2_slot2;
                    entity = zuuluu.bind(tangon)(michal, entity);
 61:
                    entity = undefined;
                    return entity;
                }
            };
            yankee = sequen.bind(papara)(yankee, ctrled);
            sequen = _closure1_slot3;
            ctrled = sequen.useEffect;
            yankee = new Array(5);
            yankee[0] = cntext;
            cntext = echoed.length;
            yankee[1] = cntext;
            yankee[2] = record;
            yankee[3] = zuuluu;
            yankee[4] = config;
            option = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = _closure2_slot4;
                    michal = !michal;
                    if(!michal) { _fun00016_ip = 17; continue _fun00015 }
 13:
                    michal = _closure2_slot8;
 17:
                    if(!michal) { _fun00016_ip = 24; continue _fun00015 }
 20:
                    michal = _closure2_slot3;
 24:
                    if(!michal) { _fun00016_ip = 42; continue _fun00015 }
 27:
                    zuuluu = _closure2_slot0;
                    tangon = zuuluu.length;
                    zuuluu = 0;
                    michal = tangon > zuuluu;
 42:
                    if(!michal) { _fun00016_ip = 55; continue _fun00015 }
 45:
                    michal = _closure2_slot9;
                    entity = undefined;
                    entity = michal.bind(entity)();
 55:
                    entity = undefined;
                    return entity;
                }
            };
            option = ctrled.bind(sequen)(option, yankee);
            option = 20;
            option = offset[option];
            offset = verify.bind(report)(option);
            verify = offset.useIsPlaceholderVisible;
            option = {};
            option['searchContext'] = oscard;
            option['data'] = echoed;
            ctrled = verify.bind(offset)(option);
            if(tangon) { _fun00008_ip = 851; continue _fun00007 }
 575:
            if(zuuluu) { _fun00008_ip = 633; continue _fun00007 }
 578:
            if(!entity) { _fun00008_ip = 633; continue _fun00007 }
 581:
            zuuluu = echoed.length;
            entity = 0;
            if(!(entity === zuuluu)) { _fun00008_ip = 633; continue _fun00007 }
 592:
            tangon = _closure1_slot23;
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            entity = 16;
            entity = option[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = {};
            entity['text'] = golfie;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00008_ip = 849; continue _fun00007;
 633:
            golfie = _closure1_slot25;
            tangon = _closure1_slot24;
            zuuluu = {};
            verify = !output;
            if(!verify) { _fun00008_ip = 700; continue _fun00007 }
 649:
            yankee = _closure1_slot23;
            offset = _closure1_slot1;
            sequen = _closure1_slot2;
            option = 21;
            option = sequen[option];
            offset = offset.bind(report)(option);
            option = {};
            option['tab'] = source;
            source = ctrled;
            if(source) { _fun00008_ip = 689; continue _fun00007 }
 686:
            source = vacuum;
 689:
            option['visible'] = source;
            verify = yankee.bind(report)(offset, option);
 700:
            option = new Array(2);
            option[0] = verify;
            yankee = _closure1_slot23;
            offset = _closure1_slot1;
            source = _closure1_slot2;
            verify = 22;
            verify = source[verify];
            offset = offset.bind(report)(verify);
            verify = {};
            sequen = !output;
            source = !sequen;
            if(!sequen) { _fun00008_ip = 755; continue _fun00007 }
 743:
            ctrled = !ctrled;
            if(!ctrled) { _fun00008_ip = 752; continue _fun00007 }
 749:
            ctrled = !vacuum;
 752:
            source = ctrled;
 755:
            verify['visible'] = source;
            verify['contentContainerStyle'] = update;
            verify['data'] = echoed;
            verify['estimatedItemSize'] = result;
            verify['onEndReached'] = sizing;
            verify['ListHeaderComponent'] = backup;
            backup = null;
            if(output) { _fun00008_ip = 814; continue _fun00007 }
 789:
            backup = null;
            if(!kiloes) { _fun00008_ip = 814; continue _fun00007 }
 794:
            sizing = _closure1_slot1;
            output = _closure1_slot2;
            kiloes = 23;
            kiloes = output[kiloes];
            backup = sizing.bind(report)(kiloes);
 814:
            verify['ListFooterComponent'] = backup;
            verify['ItemSeparatorComponent'] = foxtra;
            verify['numColumns'] = romeon;
            verify = yankee.bind(report)(offset, verify);
            option[1] = verify;
            zuuluu['children'] = option;
            entity = golfie.bind(report)(tangon, zuuluu);
 849:
            _fun00008_ip = 872; continue _fun00007;
 851:
            tangon = _closure1_slot23;
            zuuluu = _closure1_slot31;
            michal = {};
            michal['searchContext'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 872:
            return entity;
        }
    };
    var _closure1_slot32 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.SEARCH_TABS_TO_SEARCH_QUERY_LIMITS;
    var _closure1_slot7 = golfie;
    yankee = tangon.SEARCH_LIST_HORIZONTAL_PADDING;
    offset = tangon.SEARCH_ROW_TAP_STATE_PADDING;
    golfie = tangon.SearchTabs;
    var _closure1_slot8 = golfie;
    golfie = tangon.SEARCH_FILTERS_BY_TAB;
    var _closure1_slot9 = golfie;
    golfie = tangon.SearchFilter;
    var _closure1_slot10 = golfie;
    golfie = tangon.SEARCH_PINNED_MESSAGES_LINE_CLAMP;
    var _closure1_slot11 = golfie;
    golfie = tangon.SEARCH_MESSAGES_DEFAULT_LINE_CLAMP;
    var _closure1_slot12 = golfie;
    golfie = tangon.MESSAGE_PLACEHOLDER_ITEM_SIZE;
    var _closure1_slot13 = golfie;
    golfie = tangon.SearchListItemTypes;
    var _closure1_slot14 = golfie;
    golfie = tangon.MESSAGE_ESTIMATED_ITEM_SIZE;
    var _closure1_slot15 = golfie;
    golfie = tangon.CARD_ESTIMATED_ITEM_SIZE;
    var _closure1_slot16 = golfie;
    golfie = tangon.FILES_OR_LINKS_NUM_COLUMNS;
    var _closure1_slot17 = golfie;
    golfie = tangon.FILES_OR_LINKS_GAP_WIDTH;
    var _closure1_slot18 = golfie;
    golfie = tangon.MEDIA_NUM_COLUMNS;
    var _closure1_slot19 = golfie;
    golfie = tangon.EMPTY_MEDIA_RESULTS;
    var _closure1_slot20 = golfie;
    tangon = tangon.MEDIA_ITEM_GAP_WIDTH;
    var _closure1_slot21 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MEDIA_MODAL_KEY;
    var _closure1_slot22 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot23 = golfie;
    golfie = tangon.Fragment;
    var _closure1_slot24 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot25 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    romeon = 16;
    verify['marginBottom'] = romeon;
    tangon['header'] = verify;
    verify = {};
    verify['marginHorizontal'] = yankee;
    verify['marginTop'] = offset;
    tangon['headerMessages'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot26 = tangon;
    tangon = 37;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/tabs/pages/MessagesScreen.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: MessagesScreen
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            michal = argFoo;
            foxtra = michal.searchContext;
            var _closure2_slot0 = foxtra;
            romeon = michal.tab;
            yankee = michal.isFocused;
            tangon = undefined;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            michal = _closure1_slot28;
            backup = michal.bind(tangon)(foxtra, romeon);
            var _closure2_slot1 = backup;
            report = _closure1_slot6;
            zuuluu = report.useState;
            michal = function(argFoo) {
                michal = argFoo;
                entity = michal.getSearchResultsQuery;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = zuuluu.bind(report)(foxtra, michal);
            var _closure2_slot2 = michal;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 24;
            zuuluu = oscard[zuuluu];
            oscard = report.bind(tangon)(zuuluu);
            report = oscard.useOnPressSearchItem;
            zuuluu = {};
            zuuluu['searchContext'] = foxtra;
            zuuluu = report.bind(oscard)(zuuluu);
            var _closure2_slot3 = zuuluu;
            golfie = _closure1_slot3;
            oscard = golfie.useCallback;
            report = new Array(2);
            report[0] = zuuluu;
            report[1] = foxtra;
            zuuluu = function(argFoo, argBar) {
                tangon = argFoo;
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 12;
                michal = michal[entity];
                entity = undefined;
                oscard = zuuluu.bind(entity)(michal);
                report = oscard.trackSearchResultClicked;
                zuuluu = {};
                golfie = _closure2_slot0;
                zuuluu['searchContext'] = golfie;
                zuuluu['channelId'] = tangon;
                zuuluu = report.bind(oscard)(zuuluu);
                zuuluu = _closure2_slot3;
                michal = argBar;
                michal = zuuluu.bind(entity)(tangon, michal);
                return entity;
            };
            sizing = oscard.bind(golfie)(zuuluu, report);
            var _closure2_slot4 = sizing;
            oscard = _closure1_slot3;
            report = oscard.useRef;
            zuuluu = {};
            zuuluu = report.bind(oscard)(zuuluu);
            var _closure2_slot5 = zuuluu;
            zuuluu = _closure1_slot9;
            report = zuuluu[romeon];
            zuuluu = _closure1_slot10;
            zuuluu = zuuluu.Pins;
            if(!(report !== zuuluu)) { _fun00018_ip = 212; continue _fun00017 }
 206:
            kiloes = _closure1_slot12;
            _fun00018_ip = 216; continue _fun00017;
 212:
            kiloes = _closure1_slot11;
 216:
            _closure2_slot6 = kiloes;
            oscard = _closure1_slot3;
            report = oscard.useMemo;
            zuuluu = new Array(2);
            zuuluu[0] = kiloes;
            zuuluu[1] = michal;
            michal = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 25;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                oscard = _closure2_slot2;
                report = _closure2_slot6;
                michal = tangon.prototype;
                michal = Object.create(michal, {constructor: {value: tangon}});
                golfie = michal;
                entity = new golfie[tangon](oscard, report, tangon);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            };
            verify = report.bind(oscard)(michal, zuuluu);
            _closure2_slot7 = verify;
            zuuluu = _closure1_slot29;
            michal = {};
            michal['searchContext'] = foxtra;
            michal['tab'] = romeon;
            report = _closure1_slot13;
            michal['placeholderHeight'] = report;
            report = 1;
            michal['numColumns'] = report;
            michal = zuuluu.bind(tangon)(michal);
            option = michal.placeholderCount;
            _closure2_slot8 = option;
            oscard = michal.isFirstPageLoading;
            report = michal.isNextPageLoading;
            golfie = _closure1_slot3;
            zuuluu = golfie.useMemo;
            michal = new Array(5);
            michal[0] = sizing;
            michal[1] = kiloes;
            michal[2] = backup;
            michal[3] = verify;
            michal[4] = option;
            entity = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = new Array(0);
                    var _closure3_slot0 = entity;
                    report = _closure2_slot1;
                    tangon = null;
                    if(!(tangon != report)) { _fun00020_ip = 44; continue _fun00019 }
 23:
                    report = _closure2_slot1;
                    tangon = report.forEach;
                    zuuluu = function(argFoo) {
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.push;
                        entity = {};
                        tangon = _closure1_slot14;
                        tangon = tangon.MESSAGE;
                        entity['type'] = tangon;
                        tangon = {};
                        option = _closure2_slot7;
                        golfie = option.parse;
                        oscard = argFoo;
                        oscard = golfie.bind(option)(oscard);
                        tangon['message'] = oscard;
                        oscard = _closure2_slot4;
                        tangon['onPress'] = oscard;
                        oscard = _closure2_slot6;
                        tangon['lineClamp'] = oscard;
                        report = _closure2_slot5;
                        tangon['messageSizeCacheRef'] = report;
                        entity['props'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    zuuluu = tangon.bind(report)(zuuluu);
 44:
                    tangon = _closure1_slot27;
                    zuuluu = {};
                    report = 1;
                    zuuluu['numColumns'] = report;
                    report = entity.length;
                    zuuluu['numResults'] = report;
                    michal = _closure2_slot8;
                    zuuluu['placeholderCount'] = michal;
                    michal = undefined;
                    report = tangon.bind(michal)(zuuluu);
                    zuuluu = global;
                    michal = 'message-placeholder-';
                    tangon = 0;
                    if(!(tangon < report)) { _fun00020_ip = 154; continue _fun00019 }
 101:
                    option = entity.push;
                    golfie = {};
                    verify = _closure1_slot14;
                    verify = verify.MESSAGE_PLACEHOLDER;
                    golfie['type'] = verify;
                    verify = zuuluu.HermesInternal;
                    verify = verify.concat;
                    verify = verify.bind(michal)(tangon);
                    golfie['key'] = verify;
                    golfie = option.bind(entity)(golfie);
                    tangon = tangon + 1;
                    if(tangon < report) { _fun00020_ip = 101; continue _fun00019 }
 154:
                    return entity;
                }
            };
            backup = zuuluu.bind(golfie)(entity, michal);
            option = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 26;
            entity = verify[entity];
            michal = option.bind(tangon)(entity);
            entity = michal.useContentContainerStyles;
            golfie = entity.bind(michal)();
            zuuluu = _closure1_slot23;
            michal = _closure1_slot32;
            entity = {};
            entity['data'] = backup;
            entity['searchContext'] = foxtra;
            entity['tab'] = romeon;
            entity['isFocused'] = yankee;
            offset = _closure1_slot15;
            entity['estimatedItemSize'] = offset;
            golfie = golfie.messagesContentContainer;
            entity['contentContainerStyle'] = golfie;
            golfie = 27;
            golfie = verify[golfie];
            golfie = option.bind(tangon)(golfie);
            golfie = golfie.MessageVerticalSeparator;
            entity['ItemSeparatorComponent'] = golfie;
            entity['isFirstPageLoading'] = oscard;
            entity['isNextPageLoading'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['MessagesScreen'] = tangon;
    tangon = function(argFoo) { // Original name: LinksScreen
        entity = argFoo;
        backup = entity.searchContext;
        var _closure2_slot0 = backup;
        foxtra = entity.tab;
        romeon = entity.isFocused;
        verify = _closure1_slot0;
        offset = _closure1_slot2;
        zuuluu = 26;
        zuuluu = offset[zuuluu];
        tangon = undefined;
        report = verify.bind(tangon)(zuuluu);
        zuuluu = report.useContentContainerStyles;
        option = zuuluu.bind(report)();
        zuuluu = _closure1_slot28;
        result = zuuluu.bind(tangon)(backup, foxtra);
        var _closure2_slot1 = result;
        zuuluu = 28;
        zuuluu = offset[zuuluu];
        report = verify.bind(tangon)(zuuluu);
        zuuluu = report.useFileOrLinkImageDimensions;
        echoed = zuuluu.bind(report)();
        var _closure2_slot2 = echoed;
        zuuluu = 24;
        report = offset[zuuluu];
        golfie = verify.bind(tangon)(report);
        oscard = golfie.useOnPressSearchItem;
        report = {};
        report['searchContext'] = backup;
        kiloes = oscard.bind(golfie)(report);
        var _closure2_slot3 = kiloes;
        zuuluu = offset[zuuluu];
        report = verify.bind(tangon)(zuuluu);
        zuuluu = report.useOnPressSearchLink;
        zuuluu = zuuluu.bind(report)(backup);
        var _closure2_slot4 = zuuluu;
        oscard = _closure1_slot29;
        report = {};
        report['searchContext'] = backup;
        report['tab'] = foxtra;
        yankee = _closure1_slot16;
        report['placeholderHeight'] = yankee;
        golfie = _closure1_slot17;
        report['numColumns'] = golfie;
        sizing = oscard.bind(tangon)(report);
        oscard = sizing.isFirstPageLoading;
        report = sizing.isNextPageLoading;
        output = sizing.placeholderCount;
        var _closure2_slot5 = output;
        source = _closure1_slot3;
        update = source.useCallback;
        sizing = new Array(2);
        sizing[0] = kiloes;
        sizing[1] = backup;
        kiloes = function(argFoo, argBar) {
            tangon = argFoo;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 12;
            michal = michal[entity];
            entity = undefined;
            oscard = zuuluu.bind(entity)(michal);
            report = oscard.trackSearchResultClicked;
            zuuluu = {};
            golfie = _closure2_slot0;
            zuuluu['searchContext'] = golfie;
            zuuluu['channelId'] = tangon;
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = _closure2_slot3;
            michal = argBar;
            michal = zuuluu.bind(entity)(tangon, michal);
            return entity;
        };
        update = update.bind(source)(kiloes, sizing);
        var _closure2_slot6 = update;
        source = _closure1_slot3;
        sizing = source.useCallback;
        kiloes = new Array(2);
        kiloes[0] = zuuluu;
        kiloes[1] = backup;
        zuuluu = function(argFoo, argBar, argBaz) {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 12;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.trackSearchResultClicked;
            zuuluu = {};
            oscard = _closure2_slot0;
            zuuluu['searchContext'] = oscard;
            oscard = argBaz;
            zuuluu['channelId'] = oscard;
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = _closure2_slot4;
            zuuluu = argFoo;
            michal = argBar;
            michal = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        source = sizing.bind(source)(zuuluu, kiloes);
        var _closure2_slot7 = source;
        sizing = _closure1_slot3;
        kiloes = sizing.useMemo;
        zuuluu = new Array(5);
        zuuluu[0] = source;
        zuuluu[1] = update;
        zuuluu[2] = echoed;
        zuuluu[3] = result;
        zuuluu[4] = output;
        michal = function() {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = new Array(0);
                var _closure3_slot0 = entity;
                offset = 0;
                var _closure3_slot1 = offset;
                zuuluu = _closure2_slot1;
                michal = null;
                if(!(michal != zuuluu)) { _fun00022_ip = 50; continue _fun00021 }
 29:
                tangon = _closure2_slot1;
                zuuluu = tangon.forEach;
                michal = function(argFoo) {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 7;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.getLinks;
                    michal = argFoo;
                    tangon = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.forEach;
                    michal = function(argFoo) {
                        report = _closure3_slot0;
                        tangon = report.push;
                        michal = {};
                        entity = _closure1_slot14;
                        entity = entity.LINK;
                        michal['type'] = entity;
                        oscard = {};
                        entity = argFoo;
                        oscard['data'] = entity;
                        golfie = _closure2_slot6;
                        oscard['onPress'] = golfie;
                        golfie = _closure2_slot7;
                        oscard['onPressSearchLink'] = golfie;
                        entity = _closure2_slot2;
                        oscard['imageStyle'] = entity;
                        option = _closure1_slot0;
                        golfie = _closure1_slot2;
                        entity = 29;
                        golfie = golfie[entity];
                        entity = undefined;
                        verify = option.bind(entity)(golfie);
                        option = verify.getGridItemSpacingStyles;
                        golfie = {};
                        yankee = _closure3_slot1;
                        golfie['itemIndex'] = yankee;
                        yankee = _closure1_slot18;
                        golfie['spacing'] = yankee;
                        offset = _closure1_slot17;
                        golfie['numColumns'] = offset;
                        golfie = option.bind(verify)(golfie);
                        oscard['containerStyle'] = golfie;
                        michal['props'] = oscard;
                        michal = tangon.bind(report)(michal);
                        michal = _closure3_slot1;
                        michal = michal + 1;
                        _closure3_slot1 = michal;
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
 50:
                michal = _closure2_slot5;
                if(!(michal > offset)) { _fun00022_ip = 272; continue _fun00021 }
 61:
                option = entity.length;
                zuuluu = _closure1_slot27;
                michal = {};
                tangon = _closure1_slot17;
                michal['numColumns'] = tangon;
                michal['numResults'] = option;
                tangon = _closure2_slot5;
                michal['placeholderCount'] = tangon;
                oscard = undefined;
                report = zuuluu.bind(oscard)(michal);
                tangon = global;
                zuuluu = 'file-or-link-placeholder-';
                michal = 29;
                offset = 0;
                if(!(offset < report)) { _fun00022_ip = 272; continue _fun00021 }
 125:
                foxtra = entity.push;
                romeon = {};
                backup = _closure1_slot14;
                backup = backup.FILE_OR_LINK_PLACEHOLDER;
                romeon['type'] = backup;
                kiloes = _closure3_slot1;
                backup = tangon.HermesInternal;
                backup = backup.concat;
                backup = backup.bind(zuuluu)(kiloes);
                romeon['key'] = backup;
                backup = {};
                kiloes = _closure2_slot2;
                backup['imageStyle'] = kiloes;
                sizing = _closure1_slot0;
                kiloes = _closure1_slot2;
                kiloes = kiloes[michal];
                output = sizing.bind(oscard)(kiloes);
                sizing = output.getGridItemSpacingStyles;
                kiloes = {};
                result = option + offset;
                kiloes['itemIndex'] = result;
                result = _closure1_slot18;
                kiloes['spacing'] = result;
                result = _closure1_slot17;
                kiloes['numColumns'] = result;
                kiloes = sizing.bind(output)(kiloes);
                backup['containerStyle'] = kiloes;
                romeon['props'] = backup;
                romeon = foxtra.bind(entity)(romeon);
                romeon = _closure3_slot1;
                romeon = romeon + 1;
                _closure3_slot1 = romeon;
                offset = offset + 1;
                if(offset < report) { _fun00022_ip = 125; continue _fun00021 }
 272:
                return entity;
            }
        };
        kiloes = kiloes.bind(sizing)(michal, zuuluu);
        zuuluu = _closure1_slot23;
        michal = _closure1_slot32;
        entity = {};
        entity['data'] = kiloes;
        entity['searchContext'] = backup;
        entity['tab'] = foxtra;
        entity['isFocused'] = romeon;
        entity['estimatedItemSize'] = yankee;
        option = option.filesOrLinksContentContainer;
        entity['contentContainerStyle'] = option;
        option = 27;
        option = offset[option];
        option = verify.bind(tangon)(option);
        option = option.CardVerticalSeparator;
        entity['ItemSeparatorComponent'] = option;
        entity['numColumns'] = golfie;
        entity['isFirstPageLoading'] = oscard;
        entity['isNextPageLoading'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['LinksScreen'] = tangon;
    tangon = function(argFoo) { // Original name: FilesScreen
        entity = argFoo;
        backup = entity.searchContext;
        var _closure2_slot0 = backup;
        foxtra = entity.tab;
        romeon = entity.isFocused;
        verify = _closure1_slot0;
        offset = _closure1_slot2;
        zuuluu = 26;
        zuuluu = offset[zuuluu];
        tangon = undefined;
        report = verify.bind(tangon)(zuuluu);
        zuuluu = report.useContentContainerStyles;
        option = zuuluu.bind(report)();
        zuuluu = _closure1_slot28;
        result = zuuluu.bind(tangon)(backup, foxtra);
        var _closure2_slot1 = result;
        zuuluu = 28;
        zuuluu = offset[zuuluu];
        report = verify.bind(tangon)(zuuluu);
        zuuluu = report.useFileOrLinkImageDimensions;
        echoed = zuuluu.bind(report)();
        var _closure2_slot2 = echoed;
        zuuluu = 24;
        zuuluu = offset[zuuluu];
        oscard = verify.bind(tangon)(zuuluu);
        report = oscard.useOnPressSearchItem;
        zuuluu = {};
        zuuluu['searchContext'] = backup;
        zuuluu = report.bind(oscard)(zuuluu);
        var _closure2_slot3 = zuuluu;
        golfie = _closure1_slot3;
        oscard = golfie.useCallback;
        report = new Array(2);
        report[0] = zuuluu;
        report[1] = backup;
        zuuluu = function(argFoo, argBar) {
            tangon = argFoo;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 12;
            michal = michal[entity];
            entity = undefined;
            oscard = zuuluu.bind(entity)(michal);
            report = oscard.trackSearchResultClicked;
            zuuluu = {};
            golfie = _closure2_slot0;
            zuuluu['searchContext'] = golfie;
            zuuluu['channelId'] = tangon;
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = _closure2_slot3;
            michal = argBar;
            michal = zuuluu.bind(entity)(tangon, michal);
            return entity;
        };
        update = oscard.bind(golfie)(zuuluu, report);
        var _closure2_slot4 = update;
        report = _closure1_slot29;
        zuuluu = {};
        zuuluu['searchContext'] = backup;
        zuuluu['tab'] = foxtra;
        yankee = _closure1_slot16;
        zuuluu['placeholderHeight'] = yankee;
        golfie = _closure1_slot17;
        zuuluu['numColumns'] = golfie;
        zuuluu = report.bind(tangon)(zuuluu);
        oscard = zuuluu.isFirstPageLoading;
        report = zuuluu.isNextPageLoading;
        output = zuuluu.placeholderCount;
        var _closure2_slot5 = output;
        sizing = _closure1_slot3;
        kiloes = sizing.useMemo;
        zuuluu = new Array(4);
        zuuluu[0] = update;
        zuuluu[1] = echoed;
        zuuluu[2] = result;
        zuuluu[3] = output;
        michal = function() {
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                entity = new Array(0);
                var _closure3_slot0 = entity;
                offset = 0;
                var _closure3_slot1 = offset;
                zuuluu = _closure2_slot1;
                michal = null;
                if(!(michal != zuuluu)) { _fun00024_ip = 50; continue _fun00023 }
 29:
                tangon = _closure2_slot1;
                zuuluu = tangon.forEach;
                michal = function(argFoo) {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 7;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.getFiles;
                    michal = argFoo;
                    tangon = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.forEach;
                    michal = function(argFoo) {
                        report = _closure3_slot0;
                        tangon = report.push;
                        michal = {};
                        entity = _closure1_slot14;
                        entity = entity.FILE;
                        michal['type'] = entity;
                        oscard = {};
                        entity = argFoo;
                        oscard['data'] = entity;
                        golfie = _closure2_slot4;
                        oscard['onPress'] = golfie;
                        entity = _closure2_slot2;
                        oscard['imageStyle'] = entity;
                        option = _closure1_slot0;
                        golfie = _closure1_slot2;
                        entity = 29;
                        golfie = golfie[entity];
                        entity = undefined;
                        verify = option.bind(entity)(golfie);
                        option = verify.getGridItemSpacingStyles;
                        golfie = {};
                        yankee = _closure3_slot1;
                        golfie['itemIndex'] = yankee;
                        yankee = _closure1_slot18;
                        golfie['spacing'] = yankee;
                        offset = _closure1_slot17;
                        golfie['numColumns'] = offset;
                        golfie = option.bind(verify)(golfie);
                        oscard['containerStyle'] = golfie;
                        michal['props'] = oscard;
                        michal = tangon.bind(report)(michal);
                        michal = _closure3_slot1;
                        michal = michal + 1;
                        _closure3_slot1 = michal;
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
 50:
                michal = _closure2_slot5;
                if(!(michal > offset)) { _fun00024_ip = 272; continue _fun00023 }
 61:
                option = entity.length;
                zuuluu = _closure1_slot27;
                michal = {};
                tangon = _closure1_slot17;
                michal['numColumns'] = tangon;
                michal['numResults'] = option;
                tangon = _closure2_slot5;
                michal['placeholderCount'] = tangon;
                oscard = undefined;
                report = zuuluu.bind(oscard)(michal);
                tangon = global;
                zuuluu = 'file-or-link-placeholder-';
                michal = 29;
                offset = 0;
                if(!(offset < report)) { _fun00024_ip = 272; continue _fun00023 }
 125:
                foxtra = entity.push;
                romeon = {};
                backup = _closure1_slot14;
                backup = backup.FILE_OR_LINK_PLACEHOLDER;
                romeon['type'] = backup;
                kiloes = _closure3_slot1;
                backup = tangon.HermesInternal;
                backup = backup.concat;
                backup = backup.bind(zuuluu)(kiloes);
                romeon['key'] = backup;
                backup = {};
                kiloes = _closure2_slot2;
                backup['imageStyle'] = kiloes;
                sizing = _closure1_slot0;
                kiloes = _closure1_slot2;
                kiloes = kiloes[michal];
                output = sizing.bind(oscard)(kiloes);
                sizing = output.getGridItemSpacingStyles;
                kiloes = {};
                result = option + offset;
                kiloes['itemIndex'] = result;
                result = _closure1_slot18;
                kiloes['spacing'] = result;
                result = _closure1_slot17;
                kiloes['numColumns'] = result;
                kiloes = sizing.bind(output)(kiloes);
                backup['containerStyle'] = kiloes;
                romeon['props'] = backup;
                romeon = foxtra.bind(entity)(romeon);
                romeon = _closure3_slot1;
                romeon = romeon + 1;
                _closure3_slot1 = romeon;
                offset = offset + 1;
                if(offset < report) { _fun00024_ip = 125; continue _fun00023 }
 272:
                return entity;
            }
        };
        kiloes = kiloes.bind(sizing)(michal, zuuluu);
        zuuluu = _closure1_slot23;
        michal = _closure1_slot32;
        entity = {};
        entity['data'] = kiloes;
        entity['searchContext'] = backup;
        entity['tab'] = foxtra;
        entity['isFocused'] = romeon;
        entity['estimatedItemSize'] = yankee;
        option = option.filesOrLinksContentContainer;
        entity['contentContainerStyle'] = option;
        option = 27;
        option = offset[option];
        option = verify.bind(tangon)(option);
        option = option.CardVerticalSeparator;
        entity['ItemSeparatorComponent'] = option;
        entity['numColumns'] = golfie;
        entity['isFirstPageLoading'] = oscard;
        entity['isNextPageLoading'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['FilesScreen'] = tangon;
    michal = function(argFoo) { // Original name: MediaScreen
        entity = argFoo;
        backup = entity.searchContext;
        var _closure2_slot0 = backup;
        foxtra = entity.tab;
        var _closure2_slot1 = foxtra;
        romeon = entity.isFocused;
        verify = _closure1_slot0;
        offset = _closure1_slot2;
        zuuluu = 26;
        zuuluu = offset[zuuluu];
        tangon = undefined;
        report = verify.bind(tangon)(zuuluu);
        zuuluu = report.useContentContainerStyles;
        option = zuuluu.bind(report)();
        report = _closure1_slot1;
        zuuluu = 30;
        zuuluu = offset[zuuluu];
        zuuluu = report.bind(tangon)(zuuluu);
        yankee = zuuluu.bind(tangon)();
        var _closure2_slot2 = yankee;
        zuuluu = _closure1_slot28;
        update = zuuluu.bind(tangon)(backup, foxtra);
        var _closure2_slot3 = update;
        report = _closure1_slot29;
        zuuluu = {};
        zuuluu['searchContext'] = backup;
        zuuluu['tab'] = foxtra;
        zuuluu['placeholderHeight'] = yankee;
        golfie = _closure1_slot19;
        zuuluu['numColumns'] = golfie;
        zuuluu = report.bind(tangon)(zuuluu);
        oscard = zuuluu.isFirstPageLoading;
        report = zuuluu.isNextPageLoading;
        output = zuuluu.placeholderCount;
        var _closure2_slot4 = output;
        result = _closure1_slot3;
        sizing = result.useMemo;
        kiloes = new Array(1);
        kiloes[0] = update;
        zuuluu = function() {
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                zuuluu = _closure2_slot3;
                entity = null;
                if(!(entity != zuuluu)) { _fun00026_ip = 28; continue _fun00025 }
 13:
                entity = _closure2_slot3;
                zuuluu = entity.length;
                entity = 0;
                if(!(!(zuuluu > entity))) { _fun00026_ip = 37; continue _fun00025 }
 28:
                entity = _closure1_slot20;
                _fun00026_ip = 61; continue _fun00025;
 37:
                tangon = _closure2_slot3;
                zuuluu = tangon.flatMap;
                michal = function(argFoo) {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 7;
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
        result = sizing.bind(result)(zuuluu, kiloes);
        var _closure2_slot5 = result;
        zuuluu = 31;
        zuuluu = offset[zuuluu];
        sizing = verify.bind(tangon)(zuuluu);
        kiloes = sizing.useIsSearchMediaViewerScrollExperimentEnabled;
        zuuluu = {};
        echoed = 'MessagesScreen';
        zuuluu['location'] = echoed;
        zuuluu = kiloes.bind(sizing)(zuuluu);
        var _closure2_slot6 = zuuluu;
        echoed = _closure1_slot3;
        sizing = echoed.useCallback;
        kiloes = new Array(3);
        kiloes[0] = backup;
        kiloes[1] = foxtra;
        kiloes[2] = zuuluu;
        zuuluu = function() {
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                michal = _closure2_slot6;
                if(!michal) { _fun00028_ip = 65; continue _fun00027 }
 10:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 19;
                zuuluu = zuuluu[michal];
                michal = undefined;
                report = tangon.bind(michal)(zuuluu);
                tangon = report.fetchNextMessages;
                zuuluu = _closure2_slot0;
                michal = _closure2_slot1;
                entity = function() {
                    _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                        report = _closure1_slot0;
                        tangon = _closure1_slot2;
                        entity = 32;
                        tangon = tangon[entity];
                        entity = undefined;
                        oscard = report.bind(entity)(tangon);
                        report = oscard.isModalOpen;
                        tangon = _closure1_slot22;
                        tangon = report.bind(oscard)(tangon);
                        if(!tangon) { _fun00030_ip = 199; continue _fun00029 }
 48:
                        golfie = _closure1_slot6;
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
                        report = 7;
                        report = verify[report];
                        oscard = oscard.bind(entity)(report);
                        report = oscard.getSearchTabFetchId;
                        tangon = _closure2_slot1;
                        oscard = report.bind(oscard)(option, tangon, golfie);
                        report = _closure1_slot5;
                        tangon = report.getMessages;
                        oscard = tangon.bind(report)(oscard);
                        report = new Array(0);
                        var _closure4_slot0 = report;
                        tangon = null;
                        if(!(tangon != oscard)) { _fun00030_ip = 161; continue _fun00029 }
 144:
                        tangon = oscard.forEach;
                        zuuluu = function(argFoo) {
                            zuuluu = _closure1_slot0;
                            report = _closure1_slot2;
                            entity = 7;
                            michal = report[entity];
                            entity = undefined;
                            oscard = zuuluu.bind(entity)(michal);
                            tangon = oscard.getMedia;
                            michal = argFoo;
                            tangon = tangon.bind(oscard)(michal);
                            michal = 24;
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
                        michal = 33;
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
                entity = tangon.bind(report)(zuuluu, michal, entity);
 65:
                entity = undefined;
                return entity;
            }
        };
        echoed = sizing.bind(echoed)(zuuluu, kiloes);
        zuuluu = 24;
        zuuluu = offset[zuuluu];
        sizing = verify.bind(tangon)(zuuluu);
        kiloes = sizing.useOnPressMediaItem;
        zuuluu = {};
        zuuluu['searchContext'] = backup;
        zuuluu['mediaResults'] = result;
        zuuluu['onEndReached'] = echoed;
        echoed = 500;
        zuuluu['onEndReachedThreshold'] = echoed;
        zuuluu = kiloes.bind(sizing)(zuuluu);
        var _closure2_slot7 = zuuluu;
        echoed = _closure1_slot3;
        sizing = echoed.useCallback;
        kiloes = new Array(3);
        kiloes[0] = update;
        kiloes[1] = zuuluu;
        kiloes[2] = backup;
        zuuluu = function(argFoo, argBar) {
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                report = argFoo;
                var _closure3_slot0 = report;
                tangon = _closure2_slot3;
                entity = null;
                tangon = entity == tangon;
                entity = undefined;
                golfie = undefined;
                if(tangon) { _fun00032_ip = 50; continue _fun00031 }
 29:
                oscard = _closure2_slot3;
                tangon = oscard.find;
                michal = function(argFoo) {
                    entity = argFoo;
                    michal = entity.id;
                    entity = _closure3_slot0;
                    entity = entity.messageId;
                    entity = michal === entity;
                    return entity;
                };
                golfie = tangon.bind(oscard)(michal);
 50:
                oscard = _closure1_slot0;
                option = _closure1_slot2;
                tangon = 34;
                tangon = option[tangon];
                oscard = oscard.bind(entity)(tangon);
                tangon = oscard.shouldAgeVerifyForSearchMedia;
                tangon = tangon.bind(oscard)(report, golfie);
                if(tangon) { _fun00032_ip = 154; continue _fun00031 }
 88:
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                tangon = 12;
                tangon = golfie[tangon];
                golfie = oscard.bind(entity)(tangon);
                oscard = golfie.trackSearchResultClicked;
                tangon = {};
                option = _closure2_slot0;
                tangon['searchContext'] = option;
                option = report.channelId;
                tangon['channelId'] = option;
                tangon = oscard.bind(golfie)(tangon);
                tangon = _closure2_slot7;
                zuuluu = argBar;
                zuuluu = tangon.bind(entity)(report, zuuluu);
                _fun00032_ip = 213; continue _fun00031;
 154:
                tangon = _closure1_slot1;
                oscard = _closure1_slot2;
                zuuluu = 35;
                zuuluu = oscard[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.showAgeVerificationGetStartedModal;
                report = _closure1_slot0;
                michal = 36;
                michal = oscard[michal];
                michal = report.bind(entity)(michal);
                michal = michal.AgeVerificationModalEntryPoint;
                michal = michal.SEARCH_MEDIA_PREVIEW;
                michal = zuuluu.bind(tangon)(michal);
 213:
                return entity;
            }
        };
        echoed = sizing.bind(echoed)(zuuluu, kiloes);
        var _closure2_slot8 = echoed;
        sizing = _closure1_slot3;
        kiloes = sizing.useMemo;
        zuuluu = new Array(4);
        zuuluu[0] = echoed;
        zuuluu[1] = result;
        zuuluu[2] = yankee;
        zuuluu[3] = output;
        michal = function() {
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                entity = new Array(0);
                var _closure3_slot0 = entity;
                tangon = _closure2_slot5;
                zuuluu = tangon.forEach;
                michal = function(argFoo, argBar) {
                    tangon = _closure3_slot0;
                    zuuluu = tangon.push;
                    michal = {};
                    entity = _closure1_slot14;
                    entity = entity.MEDIA;
                    michal['type'] = entity;
                    report = {};
                    entity = argFoo;
                    report['media'] = entity;
                    entity = _closure2_slot2;
                    report['size'] = entity;
                    entity = _closure2_slot8;
                    report['onPress'] = entity;
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot2;
                    entity = 29;
                    oscard = oscard[entity];
                    entity = undefined;
                    option = golfie.bind(entity)(oscard);
                    golfie = option.getMediaGridItemStyles;
                    oscard = {};
                    yankee = argBar;
                    oscard['itemIndex'] = yankee;
                    offset = _closure2_slot5;
                    offset = offset.length;
                    oscard['numItems'] = offset;
                    offset = _closure1_slot19;
                    oscard['numColumns'] = offset;
                    offset = _closure1_slot21;
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
                if(!(michal > offset)) { _fun00034_ip = 267; continue _fun00033 }
 47:
                verify = entity.length;
                zuuluu = _closure1_slot27;
                michal = {};
                tangon = _closure1_slot19;
                michal['numColumns'] = tangon;
                michal['numResults'] = verify;
                tangon = _closure2_slot4;
                michal['placeholderCount'] = tangon;
                golfie = undefined;
                oscard = zuuluu.bind(golfie)(michal);
                report = global;
                tangon = 'media-placeholder-';
                zuuluu = 29;
                michal = 2;
                offset = 0;
                if(!(offset < oscard)) { _fun00034_ip = 267; continue _fun00033 }
 114:
                foxtra = entity.push;
                romeon = {};
                backup = _closure1_slot14;
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
                result = _closure1_slot19;
                kiloes['numColumns'] = result;
                result = _closure1_slot21;
                result = result - michal;
                kiloes['spacing'] = result;
                kiloes = sizing.bind(output)(kiloes);
                backup['containerStyle'] = kiloes;
                romeon['props'] = backup;
                romeon = foxtra.bind(entity)(romeon);
                offset = offset + 1;
                if(offset < oscard) { _fun00034_ip = 114; continue _fun00033 }
 267:
                return entity;
            }
        };
        kiloes = kiloes.bind(sizing)(michal, zuuluu);
        zuuluu = _closure1_slot23;
        michal = _closure1_slot32;
        entity = {};
        entity['data'] = kiloes;
        entity['searchContext'] = backup;
        entity['tab'] = foxtra;
        entity['isFocused'] = romeon;
        entity['estimatedItemSize'] = yankee;
        option = option.mediaContentContainer;
        entity['contentContainerStyle'] = option;
        option = 27;
        option = offset[option];
        option = verify.bind(tangon)(option);
        option = option.MediaVerticalSeparator;
        entity['ItemSeparatorComponent'] = option;
        entity['numColumns'] = golfie;
        entity['isFirstPageLoading'] = oscard;
        entity['isNextPageLoading'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['MediaScreen'] = michal;
    return entity;
})();