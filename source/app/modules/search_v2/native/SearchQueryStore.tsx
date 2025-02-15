// app/modules/search_v2/native/SearchQueryStore.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: defaultStatesAreEqual
        mike = argFoo;
        entity = argBar;
        entity = mike === entity;
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar) { // Original name: getSearchQueryStringFromParts
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            oscar = argBar;
            mike = arguments[2];
            entity = undefined;
            if(!(mike === entity)) { _fun00002_ip = 17; continue _fun00001 }
 15:
            mike = false;
 17:
            entity = zulu.getQueryString;
            report = entity.bind(zulu)(mike);
            zulu = report.length;
            mike = 0;
            entity = oscar;
            if(!(mike !== zulu)) { _fun00002_ip = 72; continue _fun00001 }
 44:
            mike = global;
            mike = mike.HermesInternal;
            tango = mike.concat;
            zulu = '';
            mike = ' ';
            entity = tango.bind(zulu)(report, mike, oscar);
 72:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: createSearchQueryState
        entity = {};
        zulu = _closure1_slot4;
        entity['textInputValue'] = zulu;
        zulu = false;
        entity['textInputChangedFromInput'] = zulu;
        zulu = _closure1_slot4;
        entity['querySearchResults'] = zulu;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        mike = 3;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        mike = tango.prototype;
        zulu = Object.create(mike, {constructor: {value: tango}});
        report = argFoo;
        oscar = zulu;
        mike = new oscar[tango](report, tango);
        mike = mike instanceof Object ? mike : zulu;
        entity['tagsManager'] = mike;
        mike = 0;
        entity['tagsVersion'] = mike;
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: getState
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 4;
            mike = zulu[mike];
            zulu = undefined;
            report = report.bind(zulu)(mike);
            mike = report.getSearchContextId;
            oscar = mike.bind(report)(tango);
            golf = _closure1_slot6;
            report = golf.getState;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.states;
                return entity;
            };
            report = report.bind(golf)(mike);
            mike = report.get;
            mike = mike.bind(report)(oscar);
            report = null;
            if(!(report == mike)) { _fun00004_ip = 88; continue _fun00003 }
 79:
            entity = _closure1_slot9;
            mike = entity.bind(zulu)(tango);
 88:
            entity = argBar;
            entity = entity.bind(zulu)(mike);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: useState
        golf = argFoo;
        oscar = argBar;
        var _closure2_slot0 = golf;
        var _closure2_slot1 = oscar;
        report = _closure1_slot3;
        tango = report.useCallback;
        zulu = new Array(2);
        zulu[0] = golf;
        zulu[1] = oscar;
        mike = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                oscar = entity.states;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 4;
                entity = zulu[entity];
                zulu = undefined;
                golf = mike.bind(zulu)(entity);
                report = golf.getSearchContextId;
                mike = _closure2_slot0;
                report = report.bind(golf)(mike);
                mike = oscar.get;
                mike = mike.bind(oscar)(report);
                report = null;
                if(!(report == mike)) { _fun00006_ip = 81; continue _fun00005 }
 68:
                report = _closure1_slot9;
                tango = _closure2_slot0;
                mike = report.bind(zulu)(tango);
 81:
                entity = _closure2_slot1;
                entity = entity.bind(zulu)(mike);
                return entity;
            }
        };
        tango = tango.bind(report)(mike, zulu);
        zulu = _closure1_slot6;
        mike = zulu.useState;
        entity = _closure1_slot7;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: upsertState
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            options = argFoo;
            tango = _closure1_slot6;
            zulu = tango.getState;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.states;
                return entity;
            };
            golf = zulu.bind(tango)(entity);
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 4;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.getSearchContextId;
            oscar = zulu.bind(tango)(options);
            tango = {};
            zulu = golf.get;
            zulu = zulu.bind(golf)(oscar);
            report = null;
            if(!(report == zulu)) { _fun00008_ip = 90; continue _fun00007 }
 81:
            report = _closure1_slot9;
            zulu = report.bind(entity)(options);
 90:
            offset = tango;
            verify = zulu;
            zulu = copyDataProperties(offset, verify);
            verify = argBar;
            offset = tango;
            zulu = copyDataProperties(offset, verify);
            zulu = global;
            zulu = zulu.Map;
            report = zulu.prototype;
            report = Object.create(report, {constructor: {value: zulu}});
            yankee = report;
            offset = golf;
            zulu = new yankee[zulu](offset, verify);
            report = zulu instanceof Object ? zulu : report;
            zulu = report.set;
            zulu = zulu.bind(report)(oscar, tango);
            tango = _closure1_slot6;
            zulu = tango.setState;
            mike = {};
            mike['states'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: isInitialSearchQuerySelector
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            mike = entity.textInputValue;
            zulu = entity.tagsManager;
            entity = mike.trim;
            entity = entity.bind(mike)();
            mike = entity.length;
            entity = 0;
            entity = entity === mike;
            if(!entity) { _fun00010_ip = 52; continue _fun00009 }
 39:
            mike = zulu.hasUserAddedTags;
            mike = mike.bind(zulu)();
            entity = !mike;
 52:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.createZustandStore;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.EMPTY_SEARCH_QUERY_STRING;
    var _closure1_slot4 = tango;
    tango = {};
    tango['textInputValue'] = entity;
    options = false;
    tango['textInputChangedFromInput'] = options;
    var _closure1_slot5 = tango;
    tango = function() {
        entity = {};
        mike = global;
        mike = mike.Map;
        zulu = mike.prototype;
        zulu = Object.create(zulu, {constructor: {value: mike}});
        tango = zulu;
        mike = new tango[mike](zulu);
        mike = mike instanceof Object ? mike : zulu;
        entity['states'] = mike;
        return entity;
    };
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/SearchQueryStore.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getSearchQueryString
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = arguments[1];
            tango = undefined;
            if(!(mike === tango)) { _fun00012_ip = 13; continue _fun00011 }
 11:
            mike = false;
 13:
            var _closure2_slot0 = mike;
            zulu = _closure1_slot10;
            mike = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                report = entity.tagsManager;
                tango = entity.textInputValue;
                zulu = _closure1_slot8;
                mike = _closure2_slot0;
                entity = undefined;
                entity = zulu.bind(entity)(report, tango, mike);
                return entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['getSearchQueryString'] = tango;
    tango = function(argFoo, argBar) { // Original name: setTextInputValue
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            mike = arguments[2];
            entity = undefined;
            if(!(mike === entity)) { _fun00014_ip = 11; continue _fun00013 }
 9:
            mike = false;
 11:
            tango = _closure1_slot12;
            zulu = {};
            report = argBar;
            zulu['textInputValue'] = report;
            zulu['textInputChangedFromInput'] = mike;
            mike = argFoo;
            mike = tango.bind(entity)(mike, zulu);
            return entity;
        }
    };
    zulu['setTextInputValue'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: subscribeTextInputValue
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        report = _closure1_slot6;
        tango = report.subscribe;
        zulu = {};
        golf = _closure1_slot0;
        oscar = _closure1_slot2;
        mike = 5;
        oscar = oscar[mike];
        mike = undefined;
        mike = golf.bind(mike)(oscar);
        mike = mike.shallow;
        zulu['equalityFn'] = mike;
        mike = argBaz;
        zulu['fireImmediately'] = mike;
        mike = function(argFoo) {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 4;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.getSearchContextId;
                mike = _closure2_slot0;
                tango = zulu.bind(tango)(mike);
                mike = argFoo;
                zulu = mike.states;
                mike = zulu.get;
                mike = mike.bind(zulu)(tango);
                zulu = null;
                if(!(zulu == mike)) { _fun00016_ip = 72; continue _fun00015 }
 68:
                mike = _closure1_slot5;
 72:
                entity = {};
                zulu = mike.textInputValue;
                entity['textInputValue'] = zulu;
                mike = mike.textInputChangedFromInput;
                entity['textInputChangedFromInput'] = mike;
                return entity;
            }
        };
        entity = function(argFoo, argBar) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = argFoo;
                report = entity.textInputValue;
                tango = entity.textInputChangedFromInput;
                entity = argBar;
                zulu = entity.textInputValue;
                entity = null;
                if(!(entity != report)) { _fun00018_ip = 46; continue _fun00017 }
 30:
                mike = _closure2_slot1;
                entity = undefined;
                entity = mike.bind(entity)(report, zulu, tango);
 46:
                entity = undefined;
                return entity;
            }
        };
        entity = tango.bind(report)(mike, entity, zulu);
        return entity;
    };
    zulu['subscribeTextInputValue'] = tango;
    tango = function(argFoo) { // Original name: getTextInputValue
        tango = _closure1_slot10;
        zulu = undefined;
        mike = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.textInputValue;
            return entity;
        };
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['getTextInputValue'] = tango;
    tango = function(argFoo) { // Original name: useSearchResultsQuery
        tango = _closure1_slot11;
        zulu = undefined;
        mike = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.querySearchResults;
            return entity;
        };
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['useSearchResultsQuery'] = tango;
    tango = function(argFoo) { // Original name: getSearchResultsQuery
        tango = _closure1_slot10;
        zulu = undefined;
        mike = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.querySearchResults;
            return entity;
        };
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['getSearchResultsQuery'] = tango;
    tango = function(argFoo, argBar) { // Original name: setSearchResultsQuery
        tango = _closure1_slot12;
        zulu = {};
        entity = argBar;
        zulu['querySearchResults'] = entity;
        entity = undefined;
        mike = argFoo;
        mike = tango.bind(entity)(mike, zulu);
        return entity;
    };
    zulu['setSearchResultsQuery'] = tango;
    tango = function(argFoo) { // Original name: useIsTextInputValueEmpty
        tango = _closure1_slot11;
        zulu = undefined;
        mike = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            mike = entity.textInputValue;
            entity = mike.trim;
            entity = entity.bind(mike)();
            mike = entity.length;
            entity = 0;
            entity = entity === mike;
            return entity;
        };
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['useIsTextInputValueEmpty'] = tango;
    tango = function(argFoo) { // Original name: getIsInitialSearchQuery
        tango = _closure1_slot10;
        zulu = _closure1_slot13;
        mike = undefined;
        entity = argFoo;
        entity = tango.bind(mike)(entity, zulu);
        return entity;
    };
    zulu['getIsInitialSearchQuery'] = tango;
    tango = function(argFoo) { // Original name: useIsInitialSearchQuery
        tango = _closure1_slot11;
        zulu = _closure1_slot13;
        mike = undefined;
        entity = argFoo;
        entity = tango.bind(mike)(entity, zulu);
        return entity;
    };
    zulu['useIsInitialSearchQuery'] = tango;
    tango = function(argFoo, argBar) { // Original name: subscribeSearchTabsLayout
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        report = _closure1_slot6;
        tango = report.subscribe;
        zulu = {};
        golf = _closure1_slot0;
        oscar = _closure1_slot2;
        mike = 5;
        oscar = oscar[mike];
        mike = undefined;
        mike = golf.bind(mike)(oscar);
        mike = mike.shallow;
        zulu['equalityFn'] = mike;
        mike = true;
        zulu['fireImmediately'] = mike;
        mike = function(argFoo) {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 4;
                entity = zulu[entity];
                golf = undefined;
                zulu = mike.bind(golf)(entity);
                mike = zulu.getSearchContextId;
                entity = _closure2_slot0;
                zulu = mike.bind(zulu)(entity);
                entity = argFoo;
                mike = entity.states;
                entity = mike.get;
                oscar = entity.bind(mike)(zulu);
                entity = null;
                if(!(entity != oscar)) { _fun00020_ip = 123; continue _fun00019 }
 68:
                options = oscar.tagsManager;
                zulu = oscar.textInputValue;
                tango = oscar.querySearchResults;
                mike = _closure1_slot8;
                zulu = mike.bind(golf)(options, zulu);
                mike = {};
                report = _closure1_slot13;
                report = report.bind(golf)(oscar);
                mike['isInitialSearchQuery'] = report;
                zulu = tango !== zulu;
                mike['isPendingSearchResults'] = zulu;
                return mike;
 123:
                return entity;
            }
        };
        entity = function(argFoo) {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                zulu = argFoo;
                entity = null;
                if(!(entity != zulu)) { _fun00022_ip = 23; continue _fun00021 }
 9:
                mike = _closure2_slot1;
                entity = undefined;
                entity = mike.bind(entity)(zulu);
 23:
                entity = undefined;
                return entity;
            }
        };
        entity = tango.bind(report)(mike, entity, zulu);
        return entity;
    };
    zulu['subscribeSearchTabsLayout'] = tango;
    tango = function(argFoo) { // Original name: getHasUserAddedSearchTags
        tango = _closure1_slot10;
        zulu = undefined;
        mike = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            mike = entity.tagsManager;
            entity = mike.hasUserAddedTags;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['getHasUserAddedSearchTags'] = tango;
    tango = function(argFoo) { // Original name: useHasUserAddedSearchTags
        tango = _closure1_slot11;
        zulu = undefined;
        mike = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            mike = entity.tagsManager;
            entity = mike.hasUserAddedTags;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['useHasUserAddedSearchTags'] = tango;
    tango = function(argFoo) { // Original name: useSearchTags
        tango = _closure1_slot11;
        zulu = undefined;
        mike = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            mike = entity.tagsManager;
            entity = mike.get;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['useSearchTags'] = tango;
    tango = function(argFoo) { // Original name: getSearchTags
        tango = _closure1_slot10;
        zulu = undefined;
        mike = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            mike = entity.tagsManager;
            entity = mike.get;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['getSearchTags'] = tango;
    tango = function(argFoo) { // Original name: useIsAutocompleteVisible
        tango = _closure1_slot11;
        zulu = undefined;
        mike = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            mike = entity.tagsManager;
            entity = mike.getPrefixTag;
            mike = entity.bind(mike)();
            entity = null;
            entity = entity != mike;
            return entity;
        };
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['useIsAutocompleteVisible'] = tango;
    tango = function(argFoo) { // Original name: getIsAutocompleteVisible
        tango = _closure1_slot10;
        zulu = undefined;
        mike = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            mike = entity.tagsManager;
            entity = mike.getPrefixTag;
            mike = entity.bind(mike)();
            entity = null;
            entity = entity != mike;
            return entity;
        };
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['getIsAutocompleteVisible'] = tango;
    tango = function(argFoo) { // Original name: getSearchFilterPrefixTag
        tango = _closure1_slot10;
        zulu = undefined;
        mike = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            mike = entity.tagsManager;
            entity = mike.getPrefixTag;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['getSearchFilterPrefixTag'] = tango;
    tango = function(argFoo, argBar) { // Original name: setSearchTags
        tango = argFoo;
        report = _closure1_slot10;
        entity = undefined;
        zulu = function(argFoo) {
            entity = argFoo;
            entity = entity.tagsManager;
            return entity;
        };
        report = report.bind(entity)(tango, zulu);
        oscar = report.set;
        zulu = argBar;
        zulu = oscar.bind(report)(zulu);
        zulu = _closure1_slot12;
        mike = {};
        mike['tagsManager'] = report;
        report = report.version;
        mike['tagsVersion'] = report;
        mike = zulu.bind(entity)(tango, mike);
        return entity;
    };
    zulu['setSearchTags'] = tango;
    tango = function(argFoo, argBar) { // Original name: addSearchTag
        tango = argFoo;
        report = _closure1_slot10;
        entity = undefined;
        zulu = function(argFoo) {
            entity = argFoo;
            entity = entity.tagsManager;
            return entity;
        };
        report = report.bind(entity)(tango, zulu);
        oscar = report.add;
        zulu = argBar;
        zulu = oscar.bind(report)(zulu);
        zulu = _closure1_slot12;
        mike = {};
        mike['tagsManager'] = report;
        report = report.version;
        mike['tagsVersion'] = report;
        mike = zulu.bind(entity)(tango, mike);
        return entity;
    };
    zulu['addSearchTag'] = tango;
    tango = function(argFoo, argBar) { // Original name: removeSearchTag
        tango = argFoo;
        report = _closure1_slot10;
        entity = undefined;
        zulu = function(argFoo) {
            entity = argFoo;
            entity = entity.tagsManager;
            return entity;
        };
        report = report.bind(entity)(tango, zulu);
        oscar = report.removeAtIndex;
        zulu = argBar;
        zulu = oscar.bind(report)(zulu);
        zulu = _closure1_slot12;
        mike = {};
        mike['tagsManager'] = report;
        report = report.version;
        mike['tagsVersion'] = report;
        mike = zulu.bind(entity)(tango, mike);
        return entity;
    };
    zulu['removeSearchTag'] = tango;
    tango = function(argFoo) { // Original name: removeIncompleteSearchTags
        tango = argFoo;
        report = _closure1_slot10;
        entity = undefined;
        zulu = function(argFoo) {
            entity = argFoo;
            entity = entity.tagsManager;
            return entity;
        };
        report = report.bind(entity)(tango, zulu);
        zulu = report.removeAnyPrefixTags;
        zulu = zulu.bind(report)();
        zulu = _closure1_slot12;
        mike = {};
        mike['tagsManager'] = report;
        report = report.version;
        mike['tagsVersion'] = report;
        mike = zulu.bind(entity)(tango, mike);
        return entity;
    };
    zulu['removeIncompleteSearchTags'] = tango;
    tango = function(argFoo) { // Original name: resetSearchQueryState
        tango = argFoo;
        zulu = _closure1_slot10;
        entity = undefined;
        mike = function(argFoo) {
            entity = argFoo;
            entity = entity.tagsManager;
            return entity;
        };
        oscar = zulu.bind(entity)(tango, mike);
        mike = oscar.reset;
        mike = mike.bind(oscar)();
        zulu = _closure1_slot12;
        mike = {};
        mike['tagsManager'] = oscar;
        oscar = oscar.version;
        mike['tagsVersion'] = oscar;
        report = _closure1_slot4;
        mike['textInputValue'] = report;
        mike = zulu.bind(entity)(tango, mike);
        return entity;
    };
    zulu['resetSearchQueryState'] = tango;
    tango = function(argFoo) { // Original name: deleteSearchQueryState
        zulu = function(argFoo) { // Original name: deleteState
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                tango = _closure1_slot6;
                zulu = tango.getState;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.states;
                    return entity;
                };
                oscar = zulu.bind(tango)(entity);
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 4;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.getSearchContextId;
                zulu = argFoo;
                tango = tango.bind(report)(zulu);
                zulu = oscar.has;
                zulu = zulu.bind(oscar)(tango);
                if(!zulu) { _fun00024_ip = 139; continue _fun00023 }
 76:
                zulu = global;
                zulu = zulu.Map;
                report = zulu.prototype;
                report = Object.create(report, {constructor: {value: zulu}});
                options = report;
                golf = oscar;
                zulu = new options[zulu](golf, oscar);
                report = zulu instanceof Object ? zulu : report;
                zulu = report.delete;
                zulu = zulu.bind(report)(tango);
                tango = _closure1_slot6;
                zulu = tango.setState;
                mike = {};
                mike['states'] = report;
                mike = zulu.bind(tango)(mike);
 139:
                return entity;
            }
        };
        entity = undefined;
        mike = argFoo;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['deleteSearchQueryState'] = tango;
    tango = function(argFoo) { // Original name: useSearchTagsChannelIds
        tango = _closure1_slot11;
        zulu = undefined;
        mike = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            mike = entity.tagsManager;
            entity = mike.getChannelIds;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['useSearchTagsChannelIds'] = tango;
    tango = function(argFoo) { // Original name: getSearchTagsChannelIds
        tango = _closure1_slot10;
        zulu = undefined;
        mike = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            mike = entity.tagsManager;
            entity = mike.getChannelIds;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['getSearchTagsChannelIds'] = tango;
    tango = function(argFoo, argBar) { // Original name: getSearchTagsUserIds
        mike = argBar;
        var _closure2_slot0 = mike;
        tango = _closure1_slot10;
        zulu = undefined;
        mike = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            zulu = entity.tagsManager;
            mike = zulu.getUserIds;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['getSearchTagsUserIds'] = tango;
    tango = function(argFoo) { // Original name: getIsEmptySearchTags
        tango = _closure1_slot10;
        zulu = undefined;
        mike = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            mike = entity.tagsManager;
            entity = mike.isEmpty;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['getIsEmptySearchTags'] = tango;
    mike = function(argFoo) { // Original name: useIsEmptySearchTags
        tango = _closure1_slot11;
        zulu = undefined;
        mike = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            mike = entity.tagsManager;
            entity = mike.isEmpty;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['useIsEmptySearchTags'] = mike;
    return entity;
})();