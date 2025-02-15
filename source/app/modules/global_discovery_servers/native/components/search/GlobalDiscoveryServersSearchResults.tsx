// app/modules/global_discovery_servers/native/components/search/GlobalDiscoveryServersSearchResults.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: GlobalDiscoveryServersSearchPage
        entity = argFoo;
        yankee = entity.categoryId;
        var _closure2_slot0 = yankee;
        foxtrot = entity.loadId;
        var _closure2_slot1 = foxtrot;
        oscar = entity.contentContainerStyle;
        report = _closure1_slot7;
        tango = report.useField;
        zulu = 'fetchedQuery';
        options = tango.bind(report)(zulu);
        var _closure2_slot2 = options;
        report = _closure1_slot7;
        tango = report.useField;
        zulu = 'languageCode';
        zulu = tango.bind(report)(zulu);
        var _closure2_slot3 = zulu;
        golf = _closure1_slot3;
        report = golf.useMemo;
        tango = new Array(3);
        tango[0] = options;
        tango[1] = yankee;
        tango[2] = zulu;
        zulu = function() {
            entity = {};
            zulu = _closure2_slot2;
            entity['query'] = zulu;
            zulu = _closure2_slot0;
            entity['categoryId'] = zulu;
            mike = _closure2_slot3;
            entity['languageCode'] = mike;
            return entity;
        };
        romeo = report.bind(golf)(zulu, tango);
        var _closure2_slot4 = romeo;
        report = _closure1_slot0;
        offset = _closure1_slot2;
        zulu = 9;
        golf = offset[zulu];
        tango = undefined;
        backup = report.bind(tango)(golf);
        verify = backup.useStateFromStores;
        golf = _closure1_slot6;
        options = new Array(1);
        options[0] = golf;
        golf = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure1_slot6;
                mike = zulu.getIsInitialFetchComplete;
                entity = _closure2_slot4;
                mike = mike.bind(zulu)(entity);
                entity = null;
                entity = entity != mike;
                if(!entity) { _fun00002_ip = 37; continue _fun00001 }
 34:
                entity = mike;
 37:
                return entity;
            }
        };
        verify = verify.bind(backup)(options, golf);
        golf = offset[zulu];
        kilo = report.bind(tango)(golf);
        backup = kilo.useStateFromStores;
        golf = _closure1_slot6;
        options = new Array(1);
        options[0] = golf;
        golf = function() {
            zulu = _closure1_slot6;
            mike = zulu.getErrorMessage;
            entity = _closure2_slot4;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        golf = backup.bind(kilo)(options, golf);
        zulu = offset[zulu];
        kilo = report.bind(tango)(zulu);
        backup = kilo.useStateFromStores;
        zulu = _closure1_slot6;
        options = new Array(1);
        options[0] = zulu;
        zulu = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tango = _closure1_slot6;
                zulu = tango.getGuildIds;
                entity = _closure2_slot4;
                entity = zulu.bind(tango)(entity);
                zulu = null;
                if(!(zulu == entity)) { _fun00004_ip = 35; continue _fun00003 }
 31:
                entity = _closure1_slot8;
 35:
                return entity;
            }
        };
        backup = backup.bind(kilo)(options, zulu);
        var _closure2_slot5 = backup;
        zulu = 10;
        zulu = offset[zulu];
        options = report.bind(tango)(zulu);
        report = options.useGuildCardPressHandler;
        zulu = {};
        zulu['loadId'] = foxtrot;
        zulu['categoryId'] = yankee;
        yankee = {};
        kilo = _closure1_slot9;
        kilo = kilo.GLOBAL_DISCOVERY;
        yankee['page'] = kilo;
        kilo = _closure1_slot10;
        kilo = kilo.DISCOVER_SEARCH;
        yankee['section'] = kilo;
        kilo = _closure1_slot11;
        kilo = kilo.CARD;
        yankee['object'] = kilo;
        zulu['analyticsLocation'] = yankee;
        zulu = report.bind(options)(zulu);
        var _closure2_slot6 = zulu;
        yankee = _closure1_slot3;
        options = yankee.useMemo;
        report = new Array(2);
        report[0] = backup;
        report[1] = zulu;
        zulu = function() {
            entity = new Array(0);
            var _closure3_slot0 = entity;
            tango = _closure2_slot5;
            zulu = tango.forEach;
            mike = function(argFoo, argBar) {
                report = argFoo;
                var _closure4_slot0 = report;
                entity = argBar;
                var _closure4_slot1 = entity;
                zulu = _closure3_slot0;
                mike = zulu.push;
                entity = {};
                options = _closure1_slot0;
                golf = _closure1_slot2;
                oscar = 11;
                golf = golf[oscar];
                oscar = undefined;
                oscar = options.bind(oscar)(golf);
                oscar = oscar.GlobalDiscoveryServerListItemTypes;
                oscar = oscar.CARD;
                entity['type'] = oscar;
                entity['guildId'] = report;
                tango = function() { // Original name: onPress
                    tango = _closure2_slot6;
                    zulu = _closure4_slot0;
                    mike = _closure4_slot1;
                    entity = undefined;
                    entity = tango.bind(entity)(zulu, mike);
                    return entity;
                };
                entity['onPress'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        options = options.bind(yankee)(zulu, report);
        yankee = _closure1_slot3;
        report = yankee.useCallback;
        zulu = new Array(2);
        zulu[0] = foxtrot;
        zulu[1] = romeo;
        mike = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = _closure1_slot6;
                mike = zulu.getIsFetching;
                entity = _closure2_slot4;
                entity = mike.bind(zulu)(entity);
                if(entity) { _fun00006_ip = 176; continue _fun00005 }
 31:
                zulu = _closure1_slot6;
                mike = zulu.getOffset;
                entity = _closure2_slot4;
                report = mike.bind(zulu)(entity);
                entity = null;
                if(!(entity != report)) { _fun00006_ip = 176; continue _fun00005 }
 56:
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.loadMoreCategoryResults;
                entity = {};
                oscar = _closure2_slot1;
                entity['loadId'] = oscar;
                entity['offset'] = report;
                golf = _closure1_slot7;
                oscar = golf.getField;
                report = 'fetchedQuery';
                report = oscar.bind(golf)(report);
                entity['query'] = report;
                golf = _closure1_slot7;
                oscar = golf.getField;
                report = 'categoryId';
                report = oscar.bind(golf)(report);
                entity['categoryId'] = report;
                oscar = _closure1_slot7;
                report = oscar.getField;
                tango = 'languageCode';
                tango = report.bind(oscar)(tango);
                entity['languageCode'] = tango;
                entity = mike.bind(zulu)(entity);
 176:
                entity = undefined;
                return entity;
            }
        };
        report = report.bind(yankee)(mike, zulu);
        zulu = _closure1_slot12;
        mike = _closure1_slot1;
        entity = 11;
        entity = offset[entity];
        mike = mike.bind(tango)(entity);
        entity = {};
        verify = !verify;
        entity['loading'] = verify;
        entity['items'] = options;
        entity['errorMessage'] = golf;
        entity['contentContainerStyle'] = oscar;
        oscar = 0.5;
        entity['onEndReachedThreshold'] = oscar;
        entity['onEndReached'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    offset = 1;
    tango = oscar[offset];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.EMPTY_GUILD_IDS;
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticsPages;
    var _closure1_slot9 = golf;
    golf = tango.AnalyticsSections;
    var _closure1_slot10 = golf;
    tango = tango.AnalyticsObjects;
    var _closure1_slot11 = tango;
    tango = 7;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot12 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsxs;
    var _closure1_slot13 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot14 = tango;
    tango = 8;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'flex': 0, 'minHeight': 32};
    tango['controls'] = verify;
    verify = {};
    verify['flex'] = offset;
    tango['page'] = verify;
    verify = {};
    verify['flex'] = offset;
    tango['pages'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot15 = tango;
    tango = 20;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/global_discovery_servers/native/components/search/GlobalDiscoveryServersSearchResults.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: GlobalDiscoveryServersSearchResults
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            yankee = mike.loadId;
            var _closure2_slot0 = yankee;
            romeo = mike.contentContainerStyle;
            var _closure2_slot1 = romeo;
            mike = _closure1_slot15;
            report = undefined;
            offset = mike.bind(report)();
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            tango = 9;
            tango = zulu[tango];
            verify = mike.bind(report)(tango);
            options = verify.useStateFromStores;
            tango = _closure1_slot5;
            golf = new Array(1);
            golf[0] = tango;
            tango = function() {
                mike = _closure1_slot5;
                entity = mike.getVisibleTabs;
                entity = entity.bind(mike)();
                return entity;
            };
            tango = options.bind(verify)(golf, tango);
            var _closure2_slot2 = tango;
            foxtrot = _closure1_slot3;
            verify = foxtrot.useMemo;
            options = new Array(1);
            options[0] = tango;
            golf = function() {
                zulu = _closure2_slot2;
                mike = zulu.map;
                entity = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        entity = argFoo;
                        mike = entity[Symbol.iterator];
                        entity = mike().next;
                        tango = entity().value;
                        zulu = mike;
                        entity = undefined;
                        zulu = zulu === entity;
                        if(zulu) { _fun00010_ip = 25; continue _fun00009 }
 22:
                        entity = tango;
 25:
                        if(zulu) { _fun00010_ip = 31; continue _fun00009 }
 28:
                        mike.return();
 31:
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            foxtrot = verify.bind(foxtrot)(golf, options);
            golf = 13;
            golf = zulu[golf];
            verify = mike.bind(report)(golf);
            options = verify.useServersSearchCategoryNamesById;
            golf = {};
            golf['categoryIds'] = foxtrot;
            foxtrot = options.bind(verify)(golf);
            var _closure2_slot3 = foxtrot;
            verify = _closure1_slot3;
            options = verify.useMemo;
            golf = new Array(4);
            golf[0] = foxtrot;
            golf[1] = romeo;
            golf[2] = yankee;
            golf[3] = tango;
            tango = function() {
                entity = new Array(0);
                var _closure3_slot0 = entity;
                tango = _closure2_slot2;
                zulu = tango.forEach;
                mike = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        tango = argFoo;
                        mike = tango[Symbol.iterator];
                        tango = mike().next;
                        report = tango().value;
                        zulu = mike;
                        entity = undefined;
                        zulu = zulu === entity;
                        verify = undefined;
                        if(zulu) { _fun00012_ip = 27; continue _fun00011 }
 24:
                        verify = report;
 27:
                        report = undefined;
                        if(zulu) { _fun00012_ip = 57; continue _fun00011 }
 32:
                        oscar = tango().value;
                        tango = mike;
                        tango = tango === entity;
                        report = undefined;
                        zulu = tango;
                        if(tango) { _fun00012_ip = 57; continue _fun00011 }
 51:
                        report = oscar;
                        zulu = tango;
 57:
                        if(zulu) { _fun00012_ip = 63; continue _fun00011 }
 60:
                        mike.return();
 63:
                        mike = 0;
                        if(!(mike !== report)) { _fun00012_ip = 186; continue _fun00011 }
 69:
                        mike = _closure2_slot3;
                        oscar = mike[verify];
                        mike = null;
                        if(!(mike != oscar)) { _fun00012_ip = 186; continue _fun00011 }
 86:
                        tango = _closure3_slot0;
                        zulu = tango.push;
                        mike = {};
                        mike['label'] = oscar;
                        mike['count'] = report;
                        report = global;
                        report = report.HermesInternal;
                        oscar = report.concat;
                        report = '';
                        report = oscar.bind(report)(verify);
                        mike['id'] = report;
                        golf = _closure1_slot12;
                        oscar = _closure1_slot16;
                        report = {};
                        report['categoryId'] = verify;
                        verify = _closure2_slot0;
                        report['loadId'] = verify;
                        options = _closure2_slot1;
                        report['contentContainerStyle'] = options;
                        report = golf.bind(entity)(oscar, report);
                        mike['page'] = report;
                        mike = zulu.bind(tango)(mike);
 186:
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            golf = options.bind(verify)(tango, golf);
            verify = _closure1_slot3;
            options = verify.useCallback;
            tango = new Array(1);
            tango[0] = yankee;
            entity = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    mike = argFoo;
                    entity = null;
                    if(!(entity != mike)) { _fun00014_ip = 149; continue _fun00013 }
 12:
                    entity = global;
                    entity = entity.Number;
                    zulu = undefined;
                    report = entity.bind(zulu)(mike);
                    oscar = _closure1_slot7;
                    mike = oscar.setState;
                    entity = {};
                    entity['categoryId'] = report;
                    entity = mike.bind(oscar)(entity);
                    mike = _closure1_slot1;
                    oscar = _closure1_slot2;
                    entity = 12;
                    entity = oscar[entity];
                    zulu = mike.bind(zulu)(entity);
                    mike = zulu.loadCategoryResults;
                    entity = {};
                    oscar = _closure2_slot0;
                    entity['loadId'] = oscar;
                    entity['categoryId'] = report;
                    golf = _closure1_slot7;
                    oscar = golf.getField;
                    report = 'fetchedQuery';
                    report = oscar.bind(golf)(report);
                    entity['query'] = report;
                    oscar = _closure1_slot7;
                    report = oscar.getField;
                    tango = 'languageCode';
                    tango = report.bind(oscar)(tango);
                    entity['languageCode'] = tango;
                    entity = mike.bind(zulu)(entity);
 149:
                    entity = undefined;
                    return entity;
                }
            };
            tango = options.bind(verify)(entity, tango);
            entity = 14;
            entity = zulu[entity];
            zulu = mike.bind(report)(entity);
            mike = zulu.useSearchSegmentedControlState;
            entity = {};
            entity['items'] = golf;
            entity['onSetActiveIndex'] = tango;
            entity = mike.bind(zulu)(entity);
            foxtrot = entity.segmentedControlState;
            entity = foxtrot.items;
            mike = entity.length;
            entity = 0;
            if(!(entity !== mike)) { _fun00008_ip = 489; continue _fun00007 }
 289:
            zulu = _closure1_slot13;
            mike = _closure1_slot14;
            entity = {};
            verify = _closure1_slot4;
            tango = {};
            golf = offset.controls;
            tango['style'] = golf;
            romeo = _closure1_slot12;
            yankee = _closure1_slot1;
            backup = _closure1_slot2;
            golf = 17;
            golf = backup[golf];
            options = yankee.bind(report)(golf);
            golf = {};
            golf['state'] = foxtrot;
            options = romeo.bind(report)(options, golf);
            golf = new Array(2);
            golf[0] = options;
            romeo = _closure1_slot12;
            options = 18;
            options = backup[options];
            yankee = yankee.bind(report)(options);
            options = {};
            options['state'] = foxtrot;
            options = romeo.bind(report)(yankee, options);
            golf[1] = options;
            tango['children'] = golf;
            golf = zulu.bind(report)(verify, tango);
            tango = new Array(2);
            tango[0] = golf;
            options = _closure1_slot12;
            golf = {};
            offset = offset.pages;
            golf['style'] = offset;
            romeo = _closure1_slot12;
            yankee = _closure1_slot0;
            offset = 19;
            offset = backup[offset];
            offset = yankee.bind(report)(offset);
            yankee = offset.SegmentedControlPages;
            offset = {};
            offset['state'] = foxtrot;
            offset = romeo.bind(report)(yankee, offset);
            golf['children'] = offset;
            golf = options.bind(report)(verify, golf);
            tango[1] = golf;
            entity['children'] = tango;
            entity = zulu.bind(report)(mike, entity);
            _fun00008_ip = 576; continue _fun00007;
 489:
            tango = _closure1_slot12;
            zulu = _closure1_slot1;
            offset = _closure1_slot2;
            mike = 15;
            mike = offset[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            verify = _closure1_slot0;
            oscar = 16;
            golf = offset[oscar];
            golf = verify.bind(report)(golf);
            options = golf.intl;
            golf = options.string;
            oscar = offset[oscar];
            oscar = verify.bind(report)(oscar);
            oscar = oscar.t;
            oscar = oscar.V6nAfH;
            oscar = golf.bind(options)(oscar);
            mike['text'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 576:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();