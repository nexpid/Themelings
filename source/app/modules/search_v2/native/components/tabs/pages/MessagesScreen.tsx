// app/modules/search_v2/native/components/tabs/pages/MessagesScreen.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: useSearchMessages
        offset = argFoo;
        zulu = _closure1_slot6;
        report = undefined;
        verify = zulu.bind(report)(offset);
        tango = _closure1_slot0;
        oscar = _closure1_slot2;
        zulu = 6;
        zulu = oscar[zulu];
        options = tango.bind(report)(zulu);
        golf = options.getSearchTabFetchId;
        zulu = argBar;
        zulu = golf.bind(options)(offset, zulu, verify);
        var _closure2_slot0 = zulu;
        zulu = 7;
        zulu = oscar[zulu];
        tango = tango.bind(report)(zulu);
        zulu = tango.useStateFromStores;
        report = _closure1_slot5;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            zulu = _closure1_slot5;
            mike = zulu.getMessages;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo) { // Original name: HistoricalIndexingHeader
        mike = argFoo;
        verify = mike.searchContext;
        var _closure2_slot0 = verify;
        offset = mike.documentsIndexed;
        var _closure2_slot1 = offset;
        mike = mike.tab;
        var _closure2_slot2 = mike;
        zulu = _closure1_slot24;
        tango = undefined;
        oscar = zulu.bind(tango)();
        var _closure2_slot3 = oscar;
        yankee = _closure1_slot3;
        options = yankee.useMemo;
        golf = new Array(1);
        golf[0] = offset;
        zulu = function() {
            entity = global;
            zulu = entity.Number;
            mike = _closure2_slot1;
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.toLocaleString;
            entity = _closure1_slot4;
            entity = entity.locale;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        romeo = options.bind(yankee)(zulu, golf);
        options = _closure1_slot3;
        golf = options.useMemo;
        yankee = oscar.headerMessages;
        zulu = new Array(2);
        zulu[0] = yankee;
        zulu[1] = mike;
        mike = function() {
            _fun113804: for(var _fun113804_ip = 0; ; ) switch(_fun113804_ip) {
 0:
                tango = _closure2_slot2;
                zulu = _closure1_slot17;
                zulu = zulu.MESSAGES;
                if(!(tango !== zulu)) { _fun113804_ip = 44; continue _fun113804 }
 24:
                tango = _closure2_slot2;
                entity = _closure1_slot17;
                zulu = entity.PINS;
                entity = undefined;
                if(!(tango === zulu)) { _fun113804_ip = 54; continue _fun113804 }
 44:
                mike = _closure2_slot3;
                entity = mike.headerMessages;
 54:
                return entity;
            }
        };
        golf = golf.bind(options)(mike, zulu);
        options = _closure1_slot3;
        zulu = options.useEffect;
        mike = new Array(2);
        mike[0] = offset;
        mike[1] = verify;
        entity = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.trackSearchIndexing;
            mike = {};
            oscar = _closure2_slot0;
            mike['searchContext'] = oscar;
            oscar = true;
            mike['isHistoricalIndexing'] = oscar;
            report = _closure2_slot1;
            mike['documentsIndexed'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = zulu.bind(options)(entity, mike);
        zulu = _closure1_slot20;
        verify = _closure1_slot0;
        foxtrot = _closure1_slot2;
        entity = 10;
        entity = foxtrot[entity];
        entity = verify.bind(tango)(entity);
        mike = entity.Card;
        entity = {'variant': 'primary', 'border': 'subtle'};
        options = oscar.header;
        oscar = new Array(2);
        oscar[0] = options;
        oscar[1] = golf;
        entity['style'] = oscar;
        golf = _closure1_slot20;
        report = 11;
        report = foxtrot[report];
        report = verify.bind(tango)(report);
        oscar = report.Text;
        report = {'variant': 'heading-sm/normal', 'color': 'interactive-normal'};
        options = 12;
        offset = foxtrot[options];
        offset = verify.bind(tango)(offset);
        yankee = offset.intl;
        offset = yankee.format;
        options = foxtrot[options];
        options = verify.bind(tango)(options);
        options = options.t;
        verify = options.4Y3O+P;
        options = {};
        options['count'] = romeo;
        options = offset.bind(yankee)(verify, options);
        report['children'] = options;
        report = golf.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo) { // Original name: SearchIndexingScreen
        entity = argFoo;
        report = entity.searchContext;
        var _closure2_slot0 = report;
        oscar = _closure1_slot3;
        tango = oscar.useEffect;
        zulu = new Array(1);
        zulu[0] = report;
        mike = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.trackSearchIndexing;
            mike = {};
            report = _closure2_slot0;
            mike['searchContext'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = tango.bind(oscar)(mike, zulu);
        zulu = _closure1_slot0;
        oscar = _closure1_slot2;
        mike = 6;
        mike = oscar[mike];
        tango = undefined;
        zulu = zulu.bind(tango)(mike);
        mike = zulu.getIndexingErrorText;
        report = mike.bind(zulu)(report);
        zulu = _closure1_slot20;
        mike = _closure1_slot1;
        entity = 13;
        entity = oscar[entity];
        mike = mike.bind(tango)(entity);
        entity = {};
        entity['text'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot27 = entity;
    tango = function(argFoo) { // Original name: MessageContentScreen
        _fun113808: for(var _fun113808_ip = 0; ; ) switch(_fun113808_ip) {
 0:
            entity = argFoo;
            result = entity.data;
            var _closure2_slot0 = result;
            oscar = entity.searchContext;
            var _closure2_slot1 = oscar;
            yankee = entity.tab;
            var _closure2_slot2 = yankee;
            record = entity.isFocused;
            var _closure2_slot3 = record;
            output = entity.estimatedItemSize;
            echo = entity.contentContainerStyle;
            foxtrot = entity.ItemSeparatorComponent;
            romeo = entity.numColumns;
            mike = {};
            mike['searchContext'] = oscar;
            mike['tab'] = yankee;
            entity = function(argFoo) { // Original name: useIsIndexing
                mike = argFoo;
                offset = mike.searchContext;
                verify = mike.tab;
                zulu = _closure1_slot6;
                report = undefined;
                options = zulu.bind(report)(offset);
                tango = _closure1_slot0;
                oscar = _closure1_slot2;
                zulu = 6;
                zulu = oscar[zulu];
                golf = tango.bind(report)(zulu);
                zulu = golf.getSearchTabFetchId;
                zulu = zulu.bind(golf)(offset, verify, options);
                var _closure3_slot0 = zulu;
                zulu = 7;
                zulu = oscar[zulu];
                tango = tango.bind(report)(zulu);
                zulu = tango.useStateFromStores;
                report = _closure1_slot5;
                mike = new Array(1);
                mike[0] = report;
                entity = function() {
                    zulu = _closure1_slot5;
                    mike = zulu.getIsIndexing;
                    entity = _closure3_slot0;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            report = undefined;
            tango = entity.bind(report)(mike);
            mike = {};
            mike['searchContext'] = oscar;
            mike['tab'] = yankee;
            entity = function(argFoo) { // Original name: useIsHistoricalIndexing
                mike = argFoo;
                offset = mike.searchContext;
                verify = mike.tab;
                zulu = _closure1_slot6;
                report = undefined;
                options = zulu.bind(report)(offset);
                tango = _closure1_slot0;
                oscar = _closure1_slot2;
                zulu = 6;
                zulu = oscar[zulu];
                golf = tango.bind(report)(zulu);
                zulu = golf.getSearchTabFetchId;
                zulu = zulu.bind(golf)(offset, verify, options);
                var _closure3_slot0 = zulu;
                zulu = 7;
                zulu = oscar[zulu];
                tango = tango.bind(report)(zulu);
                zulu = tango.useStateFromStoresObject;
                report = _closure1_slot5;
                mike = new Array(1);
                mike[0] = report;
                entity = function() {
                    entity = {};
                    report = _closure1_slot5;
                    zulu = report.getIsHistoricalIndexing;
                    tango = _closure3_slot0;
                    zulu = zulu.bind(report)(tango);
                    entity['isHistoricalIndexing'] = zulu;
                    zulu = _closure1_slot5;
                    mike = zulu.getDocumentsIndexed;
                    mike = mike.bind(zulu)(tango);
                    entity['documentsIndexed'] = mike;
                    return entity;
                };
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity = entity.bind(report)(mike);
            backup = entity.isHistoricalIndexing;
            var _closure2_slot4 = backup;
            sequence = entity.documentsIndexed;
            var _closure2_slot5 = sequence;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            options = 14;
            entity = offset[options];
            golf = verify.bind(report)(entity);
            zulu = golf.useMessageScreenLoadingState;
            entity = {};
            entity['searchContext'] = oscar;
            entity['tab'] = yankee;
            entity = zulu.bind(golf)(entity);
            zulu = entity.isLoading;
            var _closure2_slot6 = zulu;
            source = entity.isFirstPageLoading;
            kilo = entity.isNextPageLoading;
            entity = 15;
            entity = offset[entity];
            sizing = verify.bind(report)(entity);
            golf = sizing.useMessageSearchErrorScreen;
            entity = {};
            entity['searchContext'] = oscar;
            entity['tab'] = yankee;
            sizing = golf.bind(sizing)(entity);
            entity = sizing.canShowErrorScreen;
            golf = sizing.errorScreenText;
            context = sizing.canShowErrorToast;
            var _closure2_slot7 = context;
            config = sizing.showErrorToast;
            var _closure2_slot8 = config;
            vacuum = _closure1_slot3;
            control = vacuum.useMemo;
            sizing = new Array(4);
            sizing[0] = sequence;
            sizing[1] = backup;
            sizing[2] = oscar;
            sizing[3] = yankee;
            backup = function() {
                _fun113813: for(var _fun113813_ip = 0; ; ) switch(_fun113813_ip) {
 0:
                    zulu = _closure2_slot4;
                    tango = null;
                    entity = null;
                    if(!zulu) { _fun113813_ip = 90; continue _fun113813 }
 14:
                    zulu = _closure2_slot5;
                    zulu = tango != zulu;
                    entity = null;
                    if(!zulu) { _fun113813_ip = 90; continue _fun113813 }
 27:
                    report = _closure2_slot5;
                    zulu = 0;
                    zulu = report > zulu;
                    entity = null;
                    if(!zulu) { _fun113813_ip = 90; continue _fun113813 }
 42:
                    report = _closure1_slot20;
                    tango = _closure1_slot26;
                    zulu = {};
                    oscar = _closure2_slot1;
                    zulu['searchContext'] = oscar;
                    oscar = _closure2_slot5;
                    zulu['documentsIndexed'] = oscar;
                    mike = _closure2_slot2;
                    zulu['tab'] = mike;
                    mike = undefined;
                    entity = report.bind(mike)(tango, zulu);
 90:
                    return entity;
                }
            };
            backup = control.bind(vacuum)(backup, sizing);
            sequence = _closure1_slot3;
            vacuum = sequence.useCallback;
            sizing = result.length;
            control = new Array(4);
            control[0] = sizing;
            control[1] = yankee;
            control[2] = record;
            control[3] = oscar;
            sizing = function() {
                _fun113814: for(var _fun113814_ip = 0; ; ) switch(_fun113814_ip) {
 0:
                    mike = _closure2_slot0;
                    zulu = mike.length;
                    mike = 0;
                    if(!(mike !== zulu)) { _fun113814_ip = 103; continue _fun113814 }
 18:
                    mike = _closure2_slot3;
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    if(mike) { _fun113814_ip = 69; continue _fun113814 }
 36:
                    mike = 16;
                    report = zulu[mike];
                    mike = undefined;
                    oscar = tango.bind(mike)(report);
                    report = oscar.addDeferredFetch;
                    mike = _closure2_slot2;
                    mike = report.bind(oscar)(mike);
                    _fun113814_ip = 103; continue _fun113814;
 69:
                    mike = 17;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.fetchNextMessages;
                    mike = _closure2_slot1;
                    entity = _closure2_slot2;
                    entity = zulu.bind(tango)(mike, entity);
 103:
                    entity = undefined;
                    return entity;
                }
            };
            sizing = vacuum.bind(sequence)(sizing, control);
            papa = _closure1_slot3;
            sequence = papa.useEffect;
            vacuum = new Array(3);
            vacuum[0] = record;
            vacuum[1] = oscar;
            vacuum[2] = yankee;
            control = function() {
                _fun113815: for(var _fun113815_ip = 0; ; ) switch(_fun113815_ip) {
 0:
                    mike = _closure2_slot3;
                    if(!mike) { _fun113815_ip = 52; continue _fun113815 }
 10:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 16;
                    tango = tango[zulu];
                    zulu = undefined;
                    report = report.bind(zulu)(tango);
                    tango = report.hasDeferredFetch;
                    zulu = _closure2_slot2;
                    mike = tango.bind(report)(zulu);
 52:
                    if(!mike) { _fun113815_ip = 125; continue _fun113815 }
 55:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    mike = 16;
                    mike = oscar[mike];
                    zulu = undefined;
                    golf = report.bind(zulu)(mike);
                    mike = golf.removeDeferredFetch;
                    tango = _closure2_slot2;
                    mike = mike.bind(golf)(tango);
                    mike = 17;
                    mike = oscar[mike];
                    zulu = report.bind(zulu)(mike);
                    mike = zulu.fetchNextMessages;
                    entity = _closure2_slot1;
                    entity = mike.bind(zulu)(entity, tango);
 125:
                    entity = undefined;
                    return entity;
                }
            };
            control = sequence.bind(papa)(control, vacuum);
            sequence = _closure1_slot3;
            vacuum = sequence.useEffect;
            control = new Array(5);
            control[0] = context;
            context = result.length;
            control[1] = context;
            control[2] = record;
            control[3] = zulu;
            control[4] = config;
            update = function() {
                _fun113816: for(var _fun113816_ip = 0; ; ) switch(_fun113816_ip) {
 0:
                    mike = _closure2_slot6;
                    mike = !mike;
                    if(!mike) { _fun113816_ip = 17; continue _fun113816 }
 13:
                    mike = _closure2_slot7;
 17:
                    if(!mike) { _fun113816_ip = 24; continue _fun113816 }
 20:
                    mike = _closure2_slot3;
 24:
                    if(!mike) { _fun113816_ip = 42; continue _fun113816 }
 27:
                    zulu = _closure2_slot0;
                    tango = zulu.length;
                    zulu = 0;
                    mike = tango > zulu;
 42:
                    if(!mike) { _fun113816_ip = 55; continue _fun113816 }
 45:
                    mike = _closure2_slot8;
                    entity = undefined;
                    entity = mike.bind(entity)();
 55:
                    entity = undefined;
                    return entity;
                }
            };
            update = vacuum.bind(sequence)(update, control);
            options = offset[options];
            offset = verify.bind(report)(options);
            verify = offset.useIsPlaceholderVisible;
            options = {};
            options['searchContext'] = oscar;
            options['data'] = result;
            update = verify.bind(offset)(options);
            if(tango) { _fun113808_ip = 741; continue _fun113808 }
 488:
            if(zulu) { _fun113808_ip = 546; continue _fun113808 }
 491:
            if(!entity) { _fun113808_ip = 546; continue _fun113808 }
 494:
            zulu = result.length;
            entity = 0;
            if(!(entity === zulu)) { _fun113808_ip = 546; continue _fun113808 }
 505:
            tango = _closure1_slot20;
            zulu = _closure1_slot1;
            options = _closure1_slot2;
            entity = 13;
            entity = options[entity];
            zulu = zulu.bind(report)(entity);
            entity = {};
            entity['text'] = golf;
            entity = tango.bind(report)(zulu, entity);
            _fun113808_ip = 739; continue _fun113808;
 546:
            golf = _closure1_slot22;
            tango = _closure1_slot21;
            zulu = {};
            offset = _closure1_slot20;
            verify = _closure1_slot1;
            control = _closure1_slot2;
            options = 18;
            options = control[options];
            verify = verify.bind(report)(options);
            options = {};
            options['tab'] = yankee;
            yankee = update;
            if(yankee) { _fun113808_ip = 596; continue _fun113808 }
 593:
            yankee = source;
 596:
            options['visible'] = yankee;
            verify = offset.bind(report)(verify, options);
            options = new Array(2);
            options[0] = verify;
            yankee = _closure1_slot20;
            offset = _closure1_slot1;
            control = _closure1_slot2;
            verify = 19;
            verify = control[verify];
            offset = offset.bind(report)(verify);
            verify = {};
            update = !update;
            if(!update) { _fun113808_ip = 650; continue _fun113808 }
 647:
            update = !source;
 650:
            verify['visible'] = update;
            verify['contentContainerStyle'] = echo;
            verify['data'] = result;
            verify['estimatedItemSize'] = output;
            verify['onEndReached'] = sizing;
            verify['ListHeaderComponent'] = backup;
            backup = null;
            if(!kilo) { _fun113808_ip = 704; continue _fun113808 }
 684:
            sizing = _closure1_slot1;
            output = _closure1_slot2;
            kilo = 20;
            kilo = output[kilo];
            backup = sizing.bind(report)(kilo);
 704:
            verify['ListFooterComponent'] = backup;
            verify['ItemSeparatorComponent'] = foxtrot;
            verify['numColumns'] = romeo;
            verify = yankee.bind(report)(offset, verify);
            options[1] = verify;
            zulu['children'] = options;
            entity = golf.bind(report)(tango, zulu);
 739:
            _fun113808_ip = 762; continue _fun113808;
 741:
            tango = _closure1_slot20;
            zulu = _closure1_slot27;
            mike = {};
            mike['searchContext'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 762:
            return entity;
        }
    };
    var _closure1_slot28 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    verify = golf[entity];
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.useSearchResultsQuery;
    var _closure1_slot6 = report;
    report = 4;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.CARD_ESTIMATED_ITEM_SIZE;
    var _closure1_slot7 = options;
    options = report.EMPTY_MEDIA_RESULTS;
    var _closure1_slot8 = options;
    options = report.MEDIA_NUM_COLUMNS;
    var _closure1_slot9 = options;
    options = report.MESSAGE_ESTIMATED_ITEM_SIZE;
    var _closure1_slot10 = options;
    options = report.SEARCH_FILTERS_BY_TAB;
    var _closure1_slot11 = options;
    options = report.SearchFilter;
    var _closure1_slot12 = options;
    options = report.SearchListItemTypes;
    var _closure1_slot13 = options;
    options = report.MEDIA_ITEM_GAP_WIDTH;
    var _closure1_slot14 = options;
    options = report.FILES_OR_LINKS_NUM_COLUMNS;
    var _closure1_slot15 = options;
    options = report.FILES_OR_LINKS_GAP_WIDTH;
    var _closure1_slot16 = options;
    romeo = report.SEARCH_LIST_HORIZONTAL_PADDING;
    options = report.SearchTabs;
    var _closure1_slot17 = options;
    yankee = report.SEARCH_ROW_TAP_STATE_PADDING;
    options = report.SEARCH_MESSAGES_DEFAULT_LINE_CLAMP;
    var _closure1_slot18 = options;
    report = report.SEARCH_PINNED_MESSAGES_LINE_CLAMP;
    var _closure1_slot19 = report;
    report = 5;
    options = golf[report];
    options = oscar.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot20 = options;
    options = golf[report];
    options = oscar.bind(entity)(options);
    options = options.Fragment;
    var _closure1_slot21 = options;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.jsxs;
    var _closure1_slot22 = report;
    report = new Array(0);
    var _closure1_slot23 = report;
    report = 8;
    report = golf[report];
    verify = oscar.bind(entity)(report);
    options = verify.createStyles;
    report = {};
    offset = {};
    foxtrot = 16;
    offset['marginBottom'] = foxtrot;
    report['header'] = offset;
    offset = {};
    offset['marginHorizontal'] = romeo;
    offset['marginTop'] = yankee;
    report['headerMessages'] = offset;
    report = options.bind(verify)(report);
    var _closure1_slot24 = report;
    report = 27;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/search_v2/native/components/tabs/pages/MessagesScreen.tsx';
    report = oscar.bind(golf)(report);
    zulu['MessageContentScreen'] = tango;
    tango = function(argFoo) { // Original name: MessagesScreen
        _fun113817: for(var _fun113817_ip = 0; ; ) switch(_fun113817_ip) {
 0:
            mike = argFoo;
            yankee = mike.searchContext;
            var _closure2_slot0 = yankee;
            offset = mike.tab;
            verify = mike.isFocused;
            tango = undefined;
            var _closure2_slot6 = tango;
            var _closure2_slot7 = tango;
            mike = _closure1_slot25;
            golf = mike.bind(tango)(yankee, offset);
            var _closure2_slot1 = golf;
            mike = _closure1_slot6;
            mike = mike.bind(tango)(yankee);
            var _closure2_slot2 = mike;
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 21;
            zulu = oscar[zulu];
            oscar = report.bind(tango)(zulu);
            report = oscar.useOnPressSearchItem;
            zulu = {};
            zulu['searchContext'] = yankee;
            zulu = report.bind(oscar)(zulu);
            var _closure2_slot3 = zulu;
            romeo = _closure1_slot3;
            oscar = romeo.useCallback;
            report = new Array(2);
            report[0] = zulu;
            report[1] = yankee;
            zulu = function(argFoo, argBar) {
                tango = argFoo;
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 9;
                mike = mike[entity];
                entity = undefined;
                oscar = zulu.bind(entity)(mike);
                report = oscar.trackSearchResultClicked;
                zulu = {};
                golf = _closure2_slot0;
                zulu['searchContext'] = golf;
                zulu['channelId'] = tango;
                zulu = report.bind(oscar)(zulu);
                zulu = _closure2_slot3;
                mike = argBar;
                mike = zulu.bind(entity)(tango, mike);
                return entity;
            };
            foxtrot = oscar.bind(romeo)(zulu, report);
            var _closure2_slot4 = foxtrot;
            oscar = _closure1_slot3;
            report = oscar.useRef;
            zulu = {};
            zulu = report.bind(oscar)(zulu);
            var _closure2_slot5 = zulu;
            zulu = _closure1_slot11;
            report = zulu[offset];
            zulu = _closure1_slot12;
            zulu = zulu.Pins;
            if(!(report !== zulu)) { _fun113817_ip = 195; continue _fun113817 }
 189:
            romeo = _closure1_slot18;
            _fun113817_ip = 199; continue _fun113817;
 195:
            romeo = _closure1_slot19;
 199:
            _closure2_slot6 = romeo;
            oscar = _closure1_slot3;
            report = oscar.useMemo;
            zulu = new Array(2);
            zulu[0] = romeo;
            zulu[1] = mike;
            mike = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 22;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                oscar = _closure2_slot2;
                report = _closure2_slot6;
                mike = tango.prototype;
                mike = Object.create(mike, {constructor: {value: tango}});
                golf = mike;
                entity = new golf[tango](oscar, report, tango);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            };
            oscar = report.bind(oscar)(mike, zulu);
            _closure2_slot7 = oscar;
            report = _closure1_slot3;
            zulu = report.useMemo;
            mike = new Array(4);
            mike[0] = foxtrot;
            mike[1] = romeo;
            mike[2] = golf;
            mike[3] = oscar;
            entity = function() {
                _fun113820: for(var _fun113820_ip = 0; ; ) switch(_fun113820_ip) {
 0:
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike != zulu)) { _fun113820_ip = 38; continue _fun113820 }
 13:
                    zulu = _closure2_slot1;
                    mike = zulu.map;
                    entity = function(argFoo) {
                        entity = {};
                        mike = _closure1_slot13;
                        mike = mike.MESSAGE;
                        entity['type'] = mike;
                        mike = {};
                        oscar = _closure2_slot7;
                        report = oscar.truncateMessage;
                        tango = argFoo;
                        tango = report.bind(oscar)(tango);
                        mike['message'] = tango;
                        tango = _closure2_slot4;
                        mike['onPress'] = tango;
                        tango = _closure2_slot6;
                        mike['lineClamp'] = tango;
                        zulu = _closure2_slot5;
                        mike['messageSizeCacheRef'] = zulu;
                        entity['props'] = mike;
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    _fun113820_ip = 45; continue _fun113820;
 38:
                    entity = _closure1_slot23;
 45:
                    return entity;
                }
            };
            romeo = zulu.bind(report)(entity, mike);
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 23;
            entity = golf[entity];
            mike = oscar.bind(tango)(entity);
            entity = mike.useContentContainerStyles;
            report = entity.bind(mike)();
            zulu = _closure1_slot20;
            mike = _closure1_slot28;
            entity = {};
            entity['data'] = romeo;
            entity['searchContext'] = yankee;
            entity['tab'] = offset;
            entity['isFocused'] = verify;
            options = _closure1_slot10;
            entity['estimatedItemSize'] = options;
            report = report.messagesContentContainer;
            entity['contentContainerStyle'] = report;
            report = 24;
            report = golf[report];
            report = oscar.bind(tango)(report);
            report = report.MessageVerticalSeparator;
            entity['ItemSeparatorComponent'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['MessagesScreen'] = tango;
    tango = function(argFoo) { // Original name: LinksScreen
        mike = argFoo;
        yankee = mike.searchContext;
        var _closure2_slot0 = yankee;
        offset = mike.tab;
        verify = mike.isFocused;
        golf = _closure1_slot0;
        options = _closure1_slot2;
        mike = 23;
        mike = options[mike];
        tango = undefined;
        zulu = golf.bind(tango)(mike);
        mike = zulu.useContentContainerStyles;
        oscar = mike.bind(zulu)();
        mike = _closure1_slot25;
        foxtrot = mike.bind(tango)(yankee, offset);
        var _closure2_slot1 = foxtrot;
        mike = 25;
        mike = options[mike];
        zulu = golf.bind(tango)(mike);
        mike = zulu.useFileOrLinkImageDimensions;
        backup = mike.bind(zulu)();
        var _closure2_slot2 = backup;
        mike = 21;
        zulu = options[mike];
        kilo = golf.bind(tango)(zulu);
        romeo = kilo.useOnPressSearchItem;
        zulu = {};
        zulu['searchContext'] = yankee;
        zulu = romeo.bind(kilo)(zulu);
        var _closure2_slot3 = zulu;
        mike = options[mike];
        romeo = golf.bind(tango)(mike);
        mike = romeo.useOnPressSearchLink;
        mike = mike.bind(romeo)(yankee);
        var _closure2_slot4 = mike;
        sizing = _closure1_slot3;
        kilo = sizing.useCallback;
        romeo = new Array(2);
        romeo[0] = zulu;
        romeo[1] = yankee;
        zulu = function(argFoo, argBar) {
            tango = argFoo;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            oscar = zulu.bind(entity)(mike);
            report = oscar.trackSearchResultClicked;
            zulu = {};
            golf = _closure2_slot0;
            zulu['searchContext'] = golf;
            zulu['channelId'] = tango;
            zulu = report.bind(oscar)(zulu);
            zulu = _closure2_slot3;
            mike = argBar;
            mike = zulu.bind(entity)(tango, mike);
            return entity;
        };
        kilo = kilo.bind(sizing)(zulu, romeo);
        var _closure2_slot5 = kilo;
        sizing = _closure1_slot3;
        romeo = sizing.useCallback;
        zulu = new Array(2);
        zulu[0] = mike;
        zulu[1] = yankee;
        mike = function(argFoo, argBar, argBaz) {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.trackSearchResultClicked;
            zulu = {};
            oscar = _closure2_slot0;
            zulu['searchContext'] = oscar;
            oscar = argBaz;
            zulu['channelId'] = oscar;
            zulu = tango.bind(report)(zulu);
            tango = _closure2_slot4;
            zulu = argFoo;
            mike = argBar;
            mike = tango.bind(entity)(zulu, mike);
            return entity;
        };
        sizing = romeo.bind(sizing)(mike, zulu);
        var _closure2_slot6 = sizing;
        romeo = _closure1_slot3;
        zulu = romeo.useMemo;
        mike = new Array(4);
        mike[0] = sizing;
        mike[1] = kilo;
        mike[2] = backup;
        mike[3] = foxtrot;
        entity = function() {
            _fun113825: for(var _fun113825_ip = 0; ; ) switch(_fun113825_ip) {
 0:
                zulu = new Array(0);
                var _closure3_slot0 = zulu;
                report = _closure2_slot1;
                tango = null;
                if(!(tango != report)) { _fun113825_ip = 44; continue _fun113825 }
 23:
                report = _closure2_slot1;
                tango = report.forEach;
                mike = function(argFoo) {
                    zulu = _closure3_slot0;
                    mike = zulu.push;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 6;
                    tango = tango[entity];
                    entity = undefined;
                    report = report.bind(entity)(tango);
                    tango = report.getLinks;
                    entity = argFoo;
                    golf = tango.bind(report)(entity);
                    entity = new Array(0);
                    oscar = 0;
                    options = entity;
                    tango = arraySpread(options, golf, oscar);
                    options = mike;
                    golf = entity;
                    oscar = zulu;
                    entity = apply(options, golf, oscar);
                    return entity;
                };
                mike = tango.bind(report)(mike);
 44:
                mike = zulu.map;
                entity = function(argFoo, argBar) {
                    entity = {};
                    mike = _closure1_slot13;
                    mike = mike.LINK;
                    entity['type'] = mike;
                    mike = {};
                    zulu = argFoo;
                    mike['data'] = zulu;
                    tango = _closure2_slot5;
                    mike['onPress'] = tango;
                    tango = _closure2_slot6;
                    mike['onPressSearchLink'] = tango;
                    zulu = _closure2_slot2;
                    mike['imageStyle'] = zulu;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 6;
                    tango = tango[zulu];
                    zulu = undefined;
                    report = report.bind(zulu)(tango);
                    tango = report.getGridItemSpacingStyles;
                    zulu = {};
                    golf = argBar;
                    zulu['itemIndex'] = golf;
                    golf = _closure1_slot16;
                    zulu['spacing'] = golf;
                    oscar = _closure1_slot15;
                    zulu['numColumns'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    mike['containerStyle'] = zulu;
                    entity['props'] = mike;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        romeo = zulu.bind(romeo)(entity, mike);
        zulu = _closure1_slot20;
        mike = _closure1_slot28;
        entity = {};
        entity['data'] = romeo;
        entity['searchContext'] = yankee;
        entity['tab'] = offset;
        entity['isFocused'] = verify;
        verify = _closure1_slot7;
        entity['estimatedItemSize'] = verify;
        oscar = oscar.filesOrLinksContentContainer;
        entity['contentContainerStyle'] = oscar;
        oscar = 24;
        oscar = options[oscar];
        oscar = golf.bind(tango)(oscar);
        oscar = oscar.CardVerticalSeparator;
        entity['ItemSeparatorComponent'] = oscar;
        report = _closure1_slot15;
        entity['numColumns'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['LinksScreen'] = tango;
    tango = function(argFoo) { // Original name: FilesScreen
        mike = argFoo;
        yankee = mike.searchContext;
        var _closure2_slot0 = yankee;
        offset = mike.tab;
        verify = mike.isFocused;
        golf = _closure1_slot0;
        options = _closure1_slot2;
        mike = 23;
        mike = options[mike];
        tango = undefined;
        zulu = golf.bind(tango)(mike);
        mike = zulu.useContentContainerStyles;
        oscar = mike.bind(zulu)();
        mike = _closure1_slot25;
        foxtrot = mike.bind(tango)(yankee, offset);
        var _closure2_slot1 = foxtrot;
        mike = 25;
        mike = options[mike];
        zulu = golf.bind(tango)(mike);
        mike = zulu.useFileOrLinkImageDimensions;
        backup = mike.bind(zulu)();
        var _closure2_slot2 = backup;
        mike = 21;
        mike = options[mike];
        romeo = golf.bind(tango)(mike);
        zulu = romeo.useOnPressSearchItem;
        mike = {};
        mike['searchContext'] = yankee;
        mike = zulu.bind(romeo)(mike);
        var _closure2_slot3 = mike;
        kilo = _closure1_slot3;
        romeo = kilo.useCallback;
        zulu = new Array(2);
        zulu[0] = mike;
        zulu[1] = yankee;
        mike = function(argFoo, argBar) {
            tango = argFoo;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            oscar = zulu.bind(entity)(mike);
            report = oscar.trackSearchResultClicked;
            zulu = {};
            golf = _closure2_slot0;
            zulu['searchContext'] = golf;
            zulu['channelId'] = tango;
            zulu = report.bind(oscar)(zulu);
            zulu = _closure2_slot3;
            mike = argBar;
            mike = zulu.bind(entity)(tango, mike);
            return entity;
        };
        kilo = romeo.bind(kilo)(mike, zulu);
        var _closure2_slot4 = kilo;
        romeo = _closure1_slot3;
        zulu = romeo.useMemo;
        mike = new Array(3);
        mike[0] = kilo;
        mike[1] = backup;
        mike[2] = foxtrot;
        entity = function() {
            _fun113830: for(var _fun113830_ip = 0; ; ) switch(_fun113830_ip) {
 0:
                zulu = new Array(0);
                var _closure3_slot0 = zulu;
                report = _closure2_slot1;
                tango = null;
                if(!(tango != report)) { _fun113830_ip = 44; continue _fun113830 }
 23:
                report = _closure2_slot1;
                tango = report.forEach;
                mike = function(argFoo) {
                    zulu = _closure3_slot0;
                    mike = zulu.push;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 6;
                    tango = tango[entity];
                    entity = undefined;
                    report = report.bind(entity)(tango);
                    tango = report.getFiles;
                    entity = argFoo;
                    golf = tango.bind(report)(entity);
                    entity = new Array(0);
                    oscar = 0;
                    options = entity;
                    tango = arraySpread(options, golf, oscar);
                    options = mike;
                    golf = entity;
                    oscar = zulu;
                    entity = apply(options, golf, oscar);
                    return entity;
                };
                mike = tango.bind(report)(mike);
 44:
                mike = zulu.map;
                entity = function(argFoo, argBar) {
                    entity = {};
                    mike = _closure1_slot13;
                    mike = mike.FILE;
                    entity['type'] = mike;
                    mike = {};
                    zulu = argFoo;
                    mike['data'] = zulu;
                    tango = _closure2_slot4;
                    mike['onPress'] = tango;
                    zulu = _closure2_slot2;
                    mike['imageStyle'] = zulu;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 6;
                    tango = tango[zulu];
                    zulu = undefined;
                    report = report.bind(zulu)(tango);
                    tango = report.getGridItemSpacingStyles;
                    zulu = {};
                    golf = argBar;
                    zulu['itemIndex'] = golf;
                    golf = _closure1_slot16;
                    zulu['spacing'] = golf;
                    oscar = _closure1_slot15;
                    zulu['numColumns'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    mike['containerStyle'] = zulu;
                    entity['props'] = mike;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        romeo = zulu.bind(romeo)(entity, mike);
        zulu = _closure1_slot20;
        mike = _closure1_slot28;
        entity = {};
        entity['data'] = romeo;
        entity['searchContext'] = yankee;
        entity['tab'] = offset;
        entity['isFocused'] = verify;
        verify = _closure1_slot7;
        entity['estimatedItemSize'] = verify;
        oscar = oscar.filesOrLinksContentContainer;
        entity['contentContainerStyle'] = oscar;
        oscar = 24;
        oscar = options[oscar];
        oscar = golf.bind(tango)(oscar);
        oscar = oscar.CardVerticalSeparator;
        entity['ItemSeparatorComponent'] = oscar;
        report = _closure1_slot15;
        entity['numColumns'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['FilesScreen'] = tango;
    mike = function(argFoo) { // Original name: MediaScreen
        mike = argFoo;
        romeo = mike.searchContext;
        var _closure2_slot0 = romeo;
        yankee = mike.tab;
        offset = mike.isFocused;
        golf = _closure1_slot0;
        options = _closure1_slot2;
        mike = 23;
        mike = options[mike];
        tango = undefined;
        zulu = golf.bind(tango)(mike);
        mike = zulu.useContentContainerStyles;
        oscar = mike.bind(zulu)();
        zulu = _closure1_slot1;
        mike = 26;
        mike = options[mike];
        mike = zulu.bind(tango)(mike);
        verify = mike.bind(tango)();
        var _closure2_slot1 = verify;
        mike = _closure1_slot25;
        mike = mike.bind(tango)(romeo, yankee);
        var _closure2_slot2 = mike;
        backup = _closure1_slot3;
        foxtrot = backup.useMemo;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            _fun113834: for(var _fun113834_ip = 0; ; ) switch(_fun113834_ip) {
 0:
                zulu = _closure2_slot2;
                entity = null;
                if(!(entity != zulu)) { _fun113834_ip = 28; continue _fun113834 }
 13:
                entity = _closure2_slot2;
                zulu = entity.length;
                entity = 0;
                if(!(!(zulu > entity))) { _fun113834_ip = 37; continue _fun113834 }
 28:
                entity = _closure1_slot8;
                _fun113834_ip = 61; continue _fun113834;
 37:
                tango = _closure2_slot2;
                zulu = tango.flatMap;
                mike = function(argFoo) {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 6;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.getMedia;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = zulu.bind(tango)(mike);
 61:
                return entity;
            }
        };
        backup = foxtrot.bind(backup)(mike, zulu);
        var _closure2_slot3 = backup;
        mike = 21;
        mike = options[mike];
        foxtrot = golf.bind(tango)(mike);
        zulu = foxtrot.useOnPressMediaItem;
        mike = {};
        mike['searchContext'] = romeo;
        mike['mediaResults'] = backup;
        mike = zulu.bind(foxtrot)(mike);
        var _closure2_slot4 = mike;
        kilo = _closure1_slot3;
        foxtrot = kilo.useCallback;
        zulu = new Array(2);
        zulu[0] = mike;
        zulu[1] = romeo;
        mike = function(argFoo, argBar) {
            tango = argFoo;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            oscar = zulu.bind(entity)(mike);
            report = oscar.trackSearchResultClicked;
            zulu = {};
            golf = _closure2_slot0;
            zulu['searchContext'] = golf;
            golf = tango.channelId;
            zulu['channelId'] = golf;
            zulu = report.bind(oscar)(zulu);
            zulu = _closure2_slot4;
            mike = argBar;
            mike = zulu.bind(entity)(tango, mike);
            return entity;
        };
        kilo = foxtrot.bind(kilo)(mike, zulu);
        var _closure2_slot5 = kilo;
        foxtrot = _closure1_slot3;
        zulu = foxtrot.useMemo;
        mike = new Array(3);
        mike[0] = kilo;
        mike[1] = backup;
        mike[2] = verify;
        entity = function() {
            zulu = _closure2_slot3;
            mike = zulu.map;
            entity = function(argFoo, argBar) {
                entity = {};
                mike = _closure1_slot13;
                mike = mike.MEDIA;
                entity['type'] = mike;
                mike = {};
                zulu = argFoo;
                mike['media'] = zulu;
                zulu = _closure2_slot1;
                mike['size'] = zulu;
                zulu = _closure2_slot5;
                mike['onPress'] = zulu;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 6;
                tango = tango[zulu];
                zulu = undefined;
                report = report.bind(zulu)(tango);
                tango = report.getMediaGridItemStyles;
                zulu = {};
                options = argBar;
                zulu['itemIndex'] = options;
                golf = _closure2_slot3;
                golf = golf.length;
                zulu['numItems'] = golf;
                golf = _closure1_slot9;
                zulu['numColumns'] = golf;
                golf = _closure1_slot14;
                oscar = 2;
                oscar = golf - oscar;
                zulu['spacing'] = oscar;
                zulu = tango.bind(report)(zulu);
                mike['containerStyle'] = zulu;
                entity['props'] = mike;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        foxtrot = zulu.bind(foxtrot)(entity, mike);
        zulu = _closure1_slot20;
        mike = _closure1_slot28;
        entity = {};
        entity['data'] = foxtrot;
        entity['searchContext'] = romeo;
        entity['tab'] = yankee;
        entity['isFocused'] = offset;
        entity['estimatedItemSize'] = verify;
        oscar = oscar.mediaContentContainer;
        entity['contentContainerStyle'] = oscar;
        oscar = 24;
        oscar = options[oscar];
        oscar = golf.bind(tango)(oscar);
        oscar = oscar.MediaVerticalSeparator;
        entity['ItemSeparatorComponent'] = oscar;
        report = _closure1_slot9;
        entity['numColumns'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['MediaScreen'] = mike;
    return entity;
})();