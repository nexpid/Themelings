// app/modules/search_v2/native/components/tabs/pages/MessagesScreen.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = function(argFoo, argBar) { // Original name: useSearchMessages
        offset = argFoo;
        zuuluu = _closure1_slot6;
        report = undefined;
        verify = zuuluu.bind(report)(offset);
        tangon = _closure1_slot0;
        oscard = _closure1_slot2;
        zuuluu = 6;
        zuuluu = oscard[zuuluu];
        option = tangon.bind(report)(zuuluu);
        golfie = option.getSearchTabFetchId;
        zuuluu = argBar;
        zuuluu = golfie.bind(option)(offset, zuuluu, verify);
        var _closure2_slot0 = zuuluu;
        zuuluu = 7;
        zuuluu = oscard[zuuluu];
        tangon = tangon.bind(report)(zuuluu);
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
    var _closure1_slot25 = entity;
    entity = function(argFoo) { // Original name: HistoricalIndexingHeader
        michal = argFoo;
        verify = michal.searchContext;
        var _closure2_slot0 = verify;
        offset = michal.documentsIndexed;
        var _closure2_slot1 = offset;
        michal = michal.tab;
        var _closure2_slot2 = michal;
        zuuluu = _closure1_slot24;
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
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure2_slot2;
                zuuluu = _closure1_slot17;
                zuuluu = zuuluu.MESSAGES;
                if(!(tangon !== zuuluu)) { _fun00002_ip = 44; continue _fun00001 }
 24:
                tangon = _closure2_slot2;
                entity = _closure1_slot17;
                zuuluu = entity.PINS;
                entity = undefined;
                if(!(tangon === zuuluu)) { _fun00002_ip = 54; continue _fun00001 }
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
            entity = 9;
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
        zuuluu = _closure1_slot20;
        verify = _closure1_slot0;
        foxtra = _closure1_slot2;
        entity = 10;
        entity = foxtra[entity];
        entity = verify.bind(tangon)(entity);
        michal = entity.Card;
        entity = {'variant': 'primary', 'border': 'subtle'};
        option = oscard.header;
        oscard = new Array(2);
        oscard[0] = option;
        oscard[1] = golfie;
        entity['style'] = oscard;
        golfie = _closure1_slot20;
        report = 11;
        report = foxtra[report];
        report = verify.bind(tangon)(report);
        oscard = report.Text;
        report = {'variant': 'heading-sm/normal', 'color': 'interactive-normal'};
        option = 12;
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
    var _closure1_slot26 = entity;
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
            entity = 9;
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
        michal = 6;
        michal = oscard[michal];
        tangon = undefined;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.getIndexingErrorText;
        report = michal.bind(zuuluu)(report);
        zuuluu = _closure1_slot20;
        michal = _closure1_slot1;
        entity = 13;
        entity = oscard[entity];
        michal = michal.bind(tangon)(entity);
        entity = {};
        entity['text'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot27 = entity;
    tangon = function(argFoo) { // Original name: MessageContentScreen
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            result = entity.data;
            var _closure2_slot0 = result;
            oscard = entity.searchContext;
            var _closure2_slot1 = oscard;
            yankee = entity.tab;
            var _closure2_slot2 = yankee;
            record = entity.isFocused;
            var _closure2_slot3 = record;
            output = entity.estimatedItemSize;
            echoed = entity.contentContainerStyle;
            foxtra = entity.ItemSeparatorComponent;
            romeon = entity.numColumns;
            michal = {};
            michal['searchContext'] = oscard;
            michal['tab'] = yankee;
            entity = function(argFoo) { // Original name: useIsIndexing
                michal = argFoo;
                offset = michal.searchContext;
                verify = michal.tab;
                zuuluu = _closure1_slot6;
                report = undefined;
                option = zuuluu.bind(report)(offset);
                tangon = _closure1_slot0;
                oscard = _closure1_slot2;
                zuuluu = 6;
                zuuluu = oscard[zuuluu];
                golfie = tangon.bind(report)(zuuluu);
                zuuluu = golfie.getSearchTabFetchId;
                zuuluu = zuuluu.bind(golfie)(offset, verify, option);
                var _closure3_slot0 = zuuluu;
                zuuluu = 7;
                zuuluu = oscard[zuuluu];
                tangon = tangon.bind(report)(zuuluu);
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
            report = undefined;
            tangon = entity.bind(report)(michal);
            michal = {};
            michal['searchContext'] = oscard;
            michal['tab'] = yankee;
            entity = function(argFoo) { // Original name: useIsHistoricalIndexing
                michal = argFoo;
                offset = michal.searchContext;
                verify = michal.tab;
                zuuluu = _closure1_slot6;
                report = undefined;
                option = zuuluu.bind(report)(offset);
                tangon = _closure1_slot0;
                oscard = _closure1_slot2;
                zuuluu = 6;
                zuuluu = oscard[zuuluu];
                golfie = tangon.bind(report)(zuuluu);
                zuuluu = golfie.getSearchTabFetchId;
                zuuluu = zuuluu.bind(golfie)(offset, verify, option);
                var _closure3_slot0 = zuuluu;
                zuuluu = 7;
                zuuluu = oscard[zuuluu];
                tangon = tangon.bind(report)(zuuluu);
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
            entity = entity.bind(report)(michal);
            backup = entity.isHistoricalIndexing;
            var _closure2_slot4 = backup;
            sequen = entity.documentsIndexed;
            var _closure2_slot5 = sequen;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            option = 14;
            entity = offset[option];
            golfie = verify.bind(report)(entity);
            zuuluu = golfie.useMessageScreenLoadingState;
            entity = {};
            entity['searchContext'] = oscard;
            entity['tab'] = yankee;
            entity = zuuluu.bind(golfie)(entity);
            zuuluu = entity.isLoading;
            var _closure2_slot6 = zuuluu;
            source = entity.isFirstPageLoading;
            kiloes = entity.isNextPageLoading;
            entity = 15;
            entity = offset[entity];
            sizing = verify.bind(report)(entity);
            golfie = sizing.useMessageSearchErrorScreen;
            entity = {};
            entity['searchContext'] = oscard;
            entity['tab'] = yankee;
            sizing = golfie.bind(sizing)(entity);
            entity = sizing.canShowErrorScreen;
            golfie = sizing.errorScreenText;
            cntext = sizing.canShowErrorToast;
            var _closure2_slot7 = cntext;
            config = sizing.showErrorToast;
            var _closure2_slot8 = config;
            vacuum = _closure1_slot3;
            ctrled = vacuum.useMemo;
            sizing = new Array(4);
            sizing[0] = sequen;
            sizing[1] = backup;
            sizing[2] = oscard;
            sizing[3] = yankee;
            backup = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot4;
                    tangon = null;
                    entity = null;
                    if(!zuuluu) { _fun00006_ip = 90; continue _fun00005 }
 14:
                    zuuluu = _closure2_slot5;
                    zuuluu = tangon != zuuluu;
                    entity = null;
                    if(!zuuluu) { _fun00006_ip = 90; continue _fun00005 }
 27:
                    report = _closure2_slot5;
                    zuuluu = 0;
                    zuuluu = report > zuuluu;
                    entity = null;
                    if(!zuuluu) { _fun00006_ip = 90; continue _fun00005 }
 42:
                    report = _closure1_slot20;
                    tangon = _closure1_slot26;
                    zuuluu = {};
                    oscard = _closure2_slot1;
                    zuuluu['searchContext'] = oscard;
                    oscard = _closure2_slot5;
                    zuuluu['documentsIndexed'] = oscard;
                    michal = _closure2_slot2;
                    zuuluu['tab'] = michal;
                    michal = undefined;
                    entity = report.bind(michal)(tangon, zuuluu);
 90:
                    return entity;
                }
            };
            backup = ctrled.bind(vacuum)(backup, sizing);
            sequen = _closure1_slot3;
            vacuum = sequen.useCallback;
            sizing = result.length;
            ctrled = new Array(4);
            ctrled[0] = sizing;
            ctrled[1] = yankee;
            ctrled[2] = record;
            ctrled[3] = oscard;
            sizing = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot0;
                    zuuluu = michal.length;
                    michal = 0;
                    if(!(michal !== zuuluu)) { _fun00008_ip = 103; continue _fun00007 }
 18:
                    michal = _closure2_slot3;
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    if(michal) { _fun00008_ip = 69; continue _fun00007 }
 36:
                    michal = 16;
                    report = zuuluu[michal];
                    michal = undefined;
                    oscard = tangon.bind(michal)(report);
                    report = oscard.addDeferredFetch;
                    michal = _closure2_slot2;
                    michal = report.bind(oscard)(michal);
                    _fun00008_ip = 103; continue _fun00007;
 69:
                    michal = 17;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.fetchNextMessages;
                    michal = _closure2_slot1;
                    entity = _closure2_slot2;
                    entity = zuuluu.bind(tangon)(michal, entity);
 103:
                    entity = undefined;
                    return entity;
                }
            };
            sizing = vacuum.bind(sequen)(sizing, ctrled);
            papara = _closure1_slot3;
            sequen = papara.useEffect;
            vacuum = new Array(3);
            vacuum[0] = record;
            vacuum[1] = oscard;
            vacuum[2] = yankee;
            ctrled = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot3;
                    if(!michal) { _fun00010_ip = 52; continue _fun00009 }
 10:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    zuuluu = 16;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.hasDeferredFetch;
                    zuuluu = _closure2_slot2;
                    michal = tangon.bind(report)(zuuluu);
 52:
                    if(!michal) { _fun00010_ip = 125; continue _fun00009 }
 55:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    michal = 16;
                    michal = oscard[michal];
                    zuuluu = undefined;
                    golfie = report.bind(zuuluu)(michal);
                    michal = golfie.removeDeferredFetch;
                    tangon = _closure2_slot2;
                    michal = michal.bind(golfie)(tangon);
                    michal = 17;
                    michal = oscard[michal];
                    zuuluu = report.bind(zuuluu)(michal);
                    michal = zuuluu.fetchNextMessages;
                    entity = _closure2_slot1;
                    entity = michal.bind(zuuluu)(entity, tangon);
 125:
                    entity = undefined;
                    return entity;
                }
            };
            ctrled = sequen.bind(papara)(ctrled, vacuum);
            sequen = _closure1_slot3;
            vacuum = sequen.useEffect;
            ctrled = new Array(5);
            ctrled[0] = cntext;
            cntext = result.length;
            ctrled[1] = cntext;
            ctrled[2] = record;
            ctrled[3] = zuuluu;
            ctrled[4] = config;
            update = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = _closure2_slot6;
                    michal = !michal;
                    if(!michal) { _fun00012_ip = 17; continue _fun00011 }
 13:
                    michal = _closure2_slot7;
 17:
                    if(!michal) { _fun00012_ip = 24; continue _fun00011 }
 20:
                    michal = _closure2_slot3;
 24:
                    if(!michal) { _fun00012_ip = 42; continue _fun00011 }
 27:
                    zuuluu = _closure2_slot0;
                    tangon = zuuluu.length;
                    zuuluu = 0;
                    michal = tangon > zuuluu;
 42:
                    if(!michal) { _fun00012_ip = 55; continue _fun00011 }
 45:
                    michal = _closure2_slot8;
                    entity = undefined;
                    entity = michal.bind(entity)();
 55:
                    entity = undefined;
                    return entity;
                }
            };
            update = vacuum.bind(sequen)(update, ctrled);
            option = offset[option];
            offset = verify.bind(report)(option);
            verify = offset.useIsPlaceholderVisible;
            option = {};
            option['searchContext'] = oscard;
            option['data'] = result;
            update = verify.bind(offset)(option);
            if(tangon) { _fun00004_ip = 741; continue _fun00003 }
 488:
            if(zuuluu) { _fun00004_ip = 546; continue _fun00003 }
 491:
            if(!entity) { _fun00004_ip = 546; continue _fun00003 }
 494:
            zuuluu = result.length;
            entity = 0;
            if(!(entity === zuuluu)) { _fun00004_ip = 546; continue _fun00003 }
 505:
            tangon = _closure1_slot20;
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            entity = 13;
            entity = option[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = {};
            entity['text'] = golfie;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00004_ip = 739; continue _fun00003;
 546:
            golfie = _closure1_slot22;
            tangon = _closure1_slot21;
            zuuluu = {};
            offset = _closure1_slot20;
            verify = _closure1_slot1;
            ctrled = _closure1_slot2;
            option = 18;
            option = ctrled[option];
            verify = verify.bind(report)(option);
            option = {};
            option['tab'] = yankee;
            yankee = update;
            if(yankee) { _fun00004_ip = 596; continue _fun00003 }
 593:
            yankee = source;
 596:
            option['visible'] = yankee;
            verify = offset.bind(report)(verify, option);
            option = new Array(2);
            option[0] = verify;
            yankee = _closure1_slot20;
            offset = _closure1_slot1;
            ctrled = _closure1_slot2;
            verify = 19;
            verify = ctrled[verify];
            offset = offset.bind(report)(verify);
            verify = {};
            update = !update;
            if(!update) { _fun00004_ip = 650; continue _fun00003 }
 647:
            update = !source;
 650:
            verify['visible'] = update;
            verify['contentContainerStyle'] = echoed;
            verify['data'] = result;
            verify['estimatedItemSize'] = output;
            verify['onEndReached'] = sizing;
            verify['ListHeaderComponent'] = backup;
            backup = null;
            if(!kiloes) { _fun00004_ip = 704; continue _fun00003 }
 684:
            sizing = _closure1_slot1;
            output = _closure1_slot2;
            kiloes = 20;
            kiloes = output[kiloes];
            backup = sizing.bind(report)(kiloes);
 704:
            verify['ListFooterComponent'] = backup;
            verify['ItemSeparatorComponent'] = foxtra;
            verify['numColumns'] = romeon;
            verify = yankee.bind(report)(offset, verify);
            option[1] = verify;
            zuuluu['children'] = option;
            entity = golfie.bind(report)(tangon, zuuluu);
 739:
            _fun00004_ip = 762; continue _fun00003;
 741:
            tangon = _closure1_slot20;
            zuuluu = _closure1_slot27;
            michal = {};
            michal['searchContext'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 762:
            return entity;
        }
    };
    var _closure1_slot28 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    verify = golfie[entity];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.useSearchResultsQuery;
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.CARD_ESTIMATED_ITEM_SIZE;
    var _closure1_slot7 = option;
    option = report.EMPTY_MEDIA_RESULTS;
    var _closure1_slot8 = option;
    option = report.MEDIA_NUM_COLUMNS;
    var _closure1_slot9 = option;
    option = report.MESSAGE_ESTIMATED_ITEM_SIZE;
    var _closure1_slot10 = option;
    option = report.SEARCH_FILTERS_BY_TAB;
    var _closure1_slot11 = option;
    option = report.SearchFilter;
    var _closure1_slot12 = option;
    option = report.SearchListItemTypes;
    var _closure1_slot13 = option;
    option = report.MEDIA_ITEM_GAP_WIDTH;
    var _closure1_slot14 = option;
    option = report.FILES_OR_LINKS_NUM_COLUMNS;
    var _closure1_slot15 = option;
    option = report.FILES_OR_LINKS_GAP_WIDTH;
    var _closure1_slot16 = option;
    romeon = report.SEARCH_LIST_HORIZONTAL_PADDING;
    option = report.SearchTabs;
    var _closure1_slot17 = option;
    yankee = report.SEARCH_ROW_TAP_STATE_PADDING;
    option = report.SEARCH_MESSAGES_DEFAULT_LINE_CLAMP;
    var _closure1_slot18 = option;
    report = report.SEARCH_PINNED_MESSAGES_LINE_CLAMP;
    var _closure1_slot19 = report;
    report = 5;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.jsx;
    var _closure1_slot20 = option;
    option = report.Fragment;
    var _closure1_slot21 = option;
    report = report.jsxs;
    var _closure1_slot22 = report;
    report = new Array(0);
    var _closure1_slot23 = report;
    report = 8;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    option = verify.createStyles;
    report = {};
    offset = {};
    foxtra = 16;
    offset['marginBottom'] = foxtra;
    report['header'] = offset;
    offset = {};
    offset['marginHorizontal'] = romeon;
    offset['marginTop'] = yankee;
    report['headerMessages'] = offset;
    report = option.bind(verify)(report);
    var _closure1_slot24 = report;
    report = 27;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/search_v2/native/components/tabs/pages/MessagesScreen.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['MessageContentScreen'] = tangon;
    tangon = function(argFoo) { // Original name: MessagesScreen
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argFoo;
            yankee = michal.searchContext;
            var _closure2_slot0 = yankee;
            offset = michal.tab;
            verify = michal.isFocused;
            tangon = undefined;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            michal = _closure1_slot25;
            golfie = michal.bind(tangon)(yankee, offset);
            var _closure2_slot1 = golfie;
            michal = _closure1_slot6;
            michal = michal.bind(tangon)(yankee);
            var _closure2_slot2 = michal;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 21;
            zuuluu = oscard[zuuluu];
            oscard = report.bind(tangon)(zuuluu);
            report = oscard.useOnPressSearchItem;
            zuuluu = {};
            zuuluu['searchContext'] = yankee;
            zuuluu = report.bind(oscard)(zuuluu);
            var _closure2_slot3 = zuuluu;
            romeon = _closure1_slot3;
            oscard = romeon.useCallback;
            report = new Array(2);
            report[0] = zuuluu;
            report[1] = yankee;
            zuuluu = function(argFoo, argBar) {
                tangon = argFoo;
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 9;
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
            foxtra = oscard.bind(romeon)(zuuluu, report);
            var _closure2_slot4 = foxtra;
            oscard = _closure1_slot3;
            report = oscard.useRef;
            zuuluu = {};
            zuuluu = report.bind(oscard)(zuuluu);
            var _closure2_slot5 = zuuluu;
            zuuluu = _closure1_slot11;
            report = zuuluu[offset];
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu.Pins;
            if(!(report !== zuuluu)) { _fun00014_ip = 195; continue _fun00013 }
 189:
            romeon = _closure1_slot18;
            _fun00014_ip = 199; continue _fun00013;
 195:
            romeon = _closure1_slot19;
 199:
            _closure2_slot6 = romeon;
            oscard = _closure1_slot3;
            report = oscard.useMemo;
            zuuluu = new Array(2);
            zuuluu[0] = romeon;
            zuuluu[1] = michal;
            michal = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 22;
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
            oscard = report.bind(oscard)(michal, zuuluu);
            _closure2_slot7 = oscard;
            report = _closure1_slot3;
            zuuluu = report.useMemo;
            michal = new Array(4);
            michal[0] = foxtra;
            michal[1] = romeon;
            michal[2] = golfie;
            michal[3] = oscard;
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00016_ip = 38; continue _fun00015 }
 13:
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.map;
                    entity = function(argFoo) {
                        entity = {};
                        michal = _closure1_slot13;
                        michal = michal.MESSAGE;
                        entity['type'] = michal;
                        michal = {};
                        oscard = _closure2_slot7;
                        report = oscard.truncateMessage;
                        tangon = argFoo;
                        tangon = report.bind(oscard)(tangon);
                        michal['message'] = tangon;
                        tangon = _closure2_slot4;
                        michal['onPress'] = tangon;
                        tangon = _closure2_slot6;
                        michal['lineClamp'] = tangon;
                        zuuluu = _closure2_slot5;
                        michal['messageSizeCacheRef'] = zuuluu;
                        entity['props'] = michal;
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    _fun00016_ip = 45; continue _fun00015;
 38:
                    entity = _closure1_slot23;
 45:
                    return entity;
                }
            };
            romeon = zuuluu.bind(report)(entity, michal);
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 23;
            entity = golfie[entity];
            michal = oscard.bind(tangon)(entity);
            entity = michal.useContentContainerStyles;
            report = entity.bind(michal)();
            zuuluu = _closure1_slot20;
            michal = _closure1_slot28;
            entity = {};
            entity['data'] = romeon;
            entity['searchContext'] = yankee;
            entity['tab'] = offset;
            entity['isFocused'] = verify;
            option = _closure1_slot10;
            entity['estimatedItemSize'] = option;
            report = report.messagesContentContainer;
            entity['contentContainerStyle'] = report;
            report = 24;
            report = golfie[report];
            report = oscard.bind(tangon)(report);
            report = report.MessageVerticalSeparator;
            entity['ItemSeparatorComponent'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['MessagesScreen'] = tangon;
    tangon = function(argFoo) { // Original name: LinksScreen
        michal = argFoo;
        yankee = michal.searchContext;
        var _closure2_slot0 = yankee;
        offset = michal.tab;
        verify = michal.isFocused;
        golfie = _closure1_slot0;
        option = _closure1_slot2;
        michal = 23;
        michal = option[michal];
        tangon = undefined;
        zuuluu = golfie.bind(tangon)(michal);
        michal = zuuluu.useContentContainerStyles;
        oscard = michal.bind(zuuluu)();
        michal = _closure1_slot25;
        foxtra = michal.bind(tangon)(yankee, offset);
        var _closure2_slot1 = foxtra;
        michal = 25;
        michal = option[michal];
        zuuluu = golfie.bind(tangon)(michal);
        michal = zuuluu.useFileOrLinkImageDimensions;
        backup = michal.bind(zuuluu)();
        var _closure2_slot2 = backup;
        michal = 21;
        zuuluu = option[michal];
        kiloes = golfie.bind(tangon)(zuuluu);
        romeon = kiloes.useOnPressSearchItem;
        zuuluu = {};
        zuuluu['searchContext'] = yankee;
        zuuluu = romeon.bind(kiloes)(zuuluu);
        var _closure2_slot3 = zuuluu;
        michal = option[michal];
        romeon = golfie.bind(tangon)(michal);
        michal = romeon.useOnPressSearchLink;
        michal = michal.bind(romeon)(yankee);
        var _closure2_slot4 = michal;
        sizing = _closure1_slot3;
        kiloes = sizing.useCallback;
        romeon = new Array(2);
        romeon[0] = zuuluu;
        romeon[1] = yankee;
        zuuluu = function(argFoo, argBar) {
            tangon = argFoo;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 9;
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
        kiloes = kiloes.bind(sizing)(zuuluu, romeon);
        var _closure2_slot5 = kiloes;
        sizing = _closure1_slot3;
        romeon = sizing.useCallback;
        zuuluu = new Array(2);
        zuuluu[0] = michal;
        zuuluu[1] = yankee;
        michal = function(argFoo, argBar, argBaz) {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 9;
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
        sizing = romeon.bind(sizing)(michal, zuuluu);
        var _closure2_slot6 = sizing;
        romeon = _closure1_slot3;
        zuuluu = romeon.useMemo;
        michal = new Array(4);
        michal[0] = sizing;
        michal[1] = kiloes;
        michal[2] = backup;
        michal[3] = foxtra;
        entity = function() {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zuuluu = new Array(0);
                var _closure3_slot0 = zuuluu;
                report = _closure2_slot1;
                tangon = null;
                if(!(tangon != report)) { _fun00018_ip = 44; continue _fun00017 }
 23:
                report = _closure2_slot1;
                tangon = report.forEach;
                michal = function(argFoo) {
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.push;
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 6;
                    tangon = tangon[entity];
                    entity = undefined;
                    report = report.bind(entity)(tangon);
                    tangon = report.getLinks;
                    entity = argFoo;
                    golfie = tangon.bind(report)(entity);
                    entity = new Array(0);
                    oscard = 0;
                    option = entity;
                    tangon = arraySpread(option, golfie, oscard);
                    option = michal;
                    golfie = entity;
                    oscard = zuuluu;
                    entity = apply(option, golfie, oscard);
                    return entity;
                };
                michal = tangon.bind(report)(michal);
 44:
                michal = zuuluu.map;
                entity = function(argFoo, argBar) {
                    entity = {};
                    michal = _closure1_slot13;
                    michal = michal.LINK;
                    entity['type'] = michal;
                    michal = {};
                    zuuluu = argFoo;
                    michal['data'] = zuuluu;
                    tangon = _closure2_slot5;
                    michal['onPress'] = tangon;
                    tangon = _closure2_slot6;
                    michal['onPressSearchLink'] = tangon;
                    zuuluu = _closure2_slot2;
                    michal['imageStyle'] = zuuluu;
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 6;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.getGridItemSpacingStyles;
                    zuuluu = {};
                    golfie = argBar;
                    zuuluu['itemIndex'] = golfie;
                    golfie = _closure1_slot16;
                    zuuluu['spacing'] = golfie;
                    oscard = _closure1_slot15;
                    zuuluu['numColumns'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    michal['containerStyle'] = zuuluu;
                    entity['props'] = michal;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        romeon = zuuluu.bind(romeon)(entity, michal);
        zuuluu = _closure1_slot20;
        michal = _closure1_slot28;
        entity = {};
        entity['data'] = romeon;
        entity['searchContext'] = yankee;
        entity['tab'] = offset;
        entity['isFocused'] = verify;
        verify = _closure1_slot7;
        entity['estimatedItemSize'] = verify;
        oscard = oscard.filesOrLinksContentContainer;
        entity['contentContainerStyle'] = oscard;
        oscard = 24;
        oscard = option[oscard];
        oscard = golfie.bind(tangon)(oscard);
        oscard = oscard.CardVerticalSeparator;
        entity['ItemSeparatorComponent'] = oscard;
        report = _closure1_slot15;
        entity['numColumns'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['LinksScreen'] = tangon;
    tangon = function(argFoo) { // Original name: FilesScreen
        michal = argFoo;
        yankee = michal.searchContext;
        var _closure2_slot0 = yankee;
        offset = michal.tab;
        verify = michal.isFocused;
        golfie = _closure1_slot0;
        option = _closure1_slot2;
        michal = 23;
        michal = option[michal];
        tangon = undefined;
        zuuluu = golfie.bind(tangon)(michal);
        michal = zuuluu.useContentContainerStyles;
        oscard = michal.bind(zuuluu)();
        michal = _closure1_slot25;
        foxtra = michal.bind(tangon)(yankee, offset);
        var _closure2_slot1 = foxtra;
        michal = 25;
        michal = option[michal];
        zuuluu = golfie.bind(tangon)(michal);
        michal = zuuluu.useFileOrLinkImageDimensions;
        backup = michal.bind(zuuluu)();
        var _closure2_slot2 = backup;
        michal = 21;
        michal = option[michal];
        romeon = golfie.bind(tangon)(michal);
        zuuluu = romeon.useOnPressSearchItem;
        michal = {};
        michal['searchContext'] = yankee;
        michal = zuuluu.bind(romeon)(michal);
        var _closure2_slot3 = michal;
        kiloes = _closure1_slot3;
        romeon = kiloes.useCallback;
        zuuluu = new Array(2);
        zuuluu[0] = michal;
        zuuluu[1] = yankee;
        michal = function(argFoo, argBar) {
            tangon = argFoo;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 9;
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
        kiloes = romeon.bind(kiloes)(michal, zuuluu);
        var _closure2_slot4 = kiloes;
        romeon = _closure1_slot3;
        zuuluu = romeon.useMemo;
        michal = new Array(3);
        michal[0] = kiloes;
        michal[1] = backup;
        michal[2] = foxtra;
        entity = function() {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zuuluu = new Array(0);
                var _closure3_slot0 = zuuluu;
                report = _closure2_slot1;
                tangon = null;
                if(!(tangon != report)) { _fun00020_ip = 44; continue _fun00019 }
 23:
                report = _closure2_slot1;
                tangon = report.forEach;
                michal = function(argFoo) {
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.push;
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 6;
                    tangon = tangon[entity];
                    entity = undefined;
                    report = report.bind(entity)(tangon);
                    tangon = report.getFiles;
                    entity = argFoo;
                    golfie = tangon.bind(report)(entity);
                    entity = new Array(0);
                    oscard = 0;
                    option = entity;
                    tangon = arraySpread(option, golfie, oscard);
                    option = michal;
                    golfie = entity;
                    oscard = zuuluu;
                    entity = apply(option, golfie, oscard);
                    return entity;
                };
                michal = tangon.bind(report)(michal);
 44:
                michal = zuuluu.map;
                entity = function(argFoo, argBar) {
                    entity = {};
                    michal = _closure1_slot13;
                    michal = michal.FILE;
                    entity['type'] = michal;
                    michal = {};
                    zuuluu = argFoo;
                    michal['data'] = zuuluu;
                    tangon = _closure2_slot4;
                    michal['onPress'] = tangon;
                    zuuluu = _closure2_slot2;
                    michal['imageStyle'] = zuuluu;
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 6;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.getGridItemSpacingStyles;
                    zuuluu = {};
                    golfie = argBar;
                    zuuluu['itemIndex'] = golfie;
                    golfie = _closure1_slot16;
                    zuuluu['spacing'] = golfie;
                    oscard = _closure1_slot15;
                    zuuluu['numColumns'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    michal['containerStyle'] = zuuluu;
                    entity['props'] = michal;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        romeon = zuuluu.bind(romeon)(entity, michal);
        zuuluu = _closure1_slot20;
        michal = _closure1_slot28;
        entity = {};
        entity['data'] = romeon;
        entity['searchContext'] = yankee;
        entity['tab'] = offset;
        entity['isFocused'] = verify;
        verify = _closure1_slot7;
        entity['estimatedItemSize'] = verify;
        oscard = oscard.filesOrLinksContentContainer;
        entity['contentContainerStyle'] = oscard;
        oscard = 24;
        oscard = option[oscard];
        oscard = golfie.bind(tangon)(oscard);
        oscard = oscard.CardVerticalSeparator;
        entity['ItemSeparatorComponent'] = oscard;
        report = _closure1_slot15;
        entity['numColumns'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['FilesScreen'] = tangon;
    michal = function(argFoo) { // Original name: MediaScreen
        michal = argFoo;
        romeon = michal.searchContext;
        var _closure2_slot0 = romeon;
        yankee = michal.tab;
        offset = michal.isFocused;
        golfie = _closure1_slot0;
        option = _closure1_slot2;
        michal = 23;
        michal = option[michal];
        tangon = undefined;
        zuuluu = golfie.bind(tangon)(michal);
        michal = zuuluu.useContentContainerStyles;
        oscard = michal.bind(zuuluu)();
        zuuluu = _closure1_slot1;
        michal = 26;
        michal = option[michal];
        michal = zuuluu.bind(tangon)(michal);
        verify = michal.bind(tangon)();
        var _closure2_slot1 = verify;
        michal = _closure1_slot25;
        michal = michal.bind(tangon)(romeon, yankee);
        var _closure2_slot2 = michal;
        backup = _closure1_slot3;
        foxtra = backup.useMemo;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                zuuluu = _closure2_slot2;
                entity = null;
                if(!(entity != zuuluu)) { _fun00022_ip = 28; continue _fun00021 }
 13:
                entity = _closure2_slot2;
                zuuluu = entity.length;
                entity = 0;
                if(!(!(zuuluu > entity))) { _fun00022_ip = 37; continue _fun00021 }
 28:
                entity = _closure1_slot8;
                _fun00022_ip = 61; continue _fun00021;
 37:
                tangon = _closure2_slot2;
                zuuluu = tangon.flatMap;
                michal = function(argFoo) {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 6;
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
        backup = foxtra.bind(backup)(michal, zuuluu);
        var _closure2_slot3 = backup;
        michal = 21;
        michal = option[michal];
        foxtra = golfie.bind(tangon)(michal);
        zuuluu = foxtra.useOnPressMediaItem;
        michal = {};
        michal['searchContext'] = romeon;
        michal['mediaResults'] = backup;
        michal = zuuluu.bind(foxtra)(michal);
        var _closure2_slot4 = michal;
        kiloes = _closure1_slot3;
        foxtra = kiloes.useCallback;
        zuuluu = new Array(2);
        zuuluu[0] = michal;
        zuuluu[1] = romeon;
        michal = function(argFoo, argBar) {
            tangon = argFoo;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 9;
            michal = michal[entity];
            entity = undefined;
            oscard = zuuluu.bind(entity)(michal);
            report = oscard.trackSearchResultClicked;
            zuuluu = {};
            golfie = _closure2_slot0;
            zuuluu['searchContext'] = golfie;
            golfie = tangon.channelId;
            zuuluu['channelId'] = golfie;
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = _closure2_slot4;
            michal = argBar;
            michal = zuuluu.bind(entity)(tangon, michal);
            return entity;
        };
        kiloes = foxtra.bind(kiloes)(michal, zuuluu);
        var _closure2_slot5 = kiloes;
        foxtra = _closure1_slot3;
        zuuluu = foxtra.useMemo;
        michal = new Array(3);
        michal[0] = kiloes;
        michal[1] = backup;
        michal[2] = verify;
        entity = function() {
            zuuluu = _closure2_slot3;
            michal = zuuluu.map;
            entity = function(argFoo, argBar) {
                entity = {};
                michal = _closure1_slot13;
                michal = michal.MEDIA;
                entity['type'] = michal;
                michal = {};
                zuuluu = argFoo;
                michal['media'] = zuuluu;
                zuuluu = _closure2_slot1;
                michal['size'] = zuuluu;
                zuuluu = _closure2_slot5;
                michal['onPress'] = zuuluu;
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 6;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                report = report.bind(zuuluu)(tangon);
                tangon = report.getMediaGridItemStyles;
                zuuluu = {};
                option = argBar;
                zuuluu['itemIndex'] = option;
                golfie = _closure2_slot3;
                golfie = golfie.length;
                zuuluu['numItems'] = golfie;
                golfie = _closure1_slot9;
                zuuluu['numColumns'] = golfie;
                golfie = _closure1_slot14;
                oscard = 2;
                oscard = golfie - oscard;
                zuuluu['spacing'] = oscard;
                zuuluu = tangon.bind(report)(zuuluu);
                michal['containerStyle'] = zuuluu;
                entity['props'] = michal;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        foxtra = zuuluu.bind(foxtra)(entity, michal);
        zuuluu = _closure1_slot20;
        michal = _closure1_slot28;
        entity = {};
        entity['data'] = foxtra;
        entity['searchContext'] = romeon;
        entity['tab'] = yankee;
        entity['isFocused'] = offset;
        entity['estimatedItemSize'] = verify;
        oscard = oscard.mediaContentContainer;
        entity['contentContainerStyle'] = oscard;
        oscard = 24;
        oscard = option[oscard];
        oscard = golfie.bind(tangon)(oscard);
        oscard = oscard.MediaVerticalSeparator;
        entity['ItemSeparatorComponent'] = oscard;
        report = _closure1_slot9;
        entity['numColumns'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['MediaScreen'] = michal;
    return entity;
})();