// app/modules/search_v2/SearchQueryStore.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: defaultStatesAreEqual
        michal = argFoo;
        entity = argBar;
        entity = michal === entity;
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar) { // Original name: getSearchQueryStringFromParts
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            oscard = argBar;
            michal = arguments[2];
            entity = undefined;
            if(!(michal === entity)) { _fun00002_ip = 17; continue _fun00001 }
 15:
            michal = false;
 17:
            entity = zuuluu.getQueryString;
            report = entity.bind(zuuluu)(michal);
            zuuluu = report.length;
            michal = 0;
            entity = oscard;
            if(!(michal !== zuuluu)) { _fun00002_ip = 72; continue _fun00001 }
 44:
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = '';
            michal = ' ';
            entity = tangon.bind(zuuluu)(report, michal, oscard);
 72:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: createSearchQueryState
        entity = {};
        zuuluu = _closure1_slot4;
        entity['textInputValue'] = zuuluu;
        zuuluu = false;
        entity['textInputChangedFromInput'] = zuuluu;
        zuuluu = _closure1_slot4;
        entity['querySearchResults'] = zuuluu;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        michal = tangon.prototype;
        zuuluu = Object.create(michal, {constructor: {value: tangon}});
        report = argFoo;
        oscard = zuuluu;
        michal = new oscard[tangon](report, tangon);
        michal = michal instanceof Object ? michal : zuuluu;
        entity['tagsManager'] = michal;
        michal = 0;
        entity['tagsVersion'] = michal;
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: getState
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 4;
            michal = zuuluu[michal];
            zuuluu = undefined;
            report = report.bind(zuuluu)(michal);
            michal = report.getSearchContextId;
            oscard = michal.bind(report)(tangon);
            golfie = _closure1_slot6;
            report = golfie.getState;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.states;
                return entity;
            };
            report = report.bind(golfie)(michal);
            michal = report.get;
            michal = michal.bind(report)(oscard);
            report = null;
            if(!(report == michal)) { _fun00004_ip = 88; continue _fun00003 }
 79:
            entity = _closure1_slot9;
            michal = entity.bind(zuuluu)(tangon);
 88:
            entity = argBar;
            entity = entity.bind(zuuluu)(michal);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: useState
        golfie = argFoo;
        oscard = argBar;
        var _closure2_slot0 = golfie;
        var _closure2_slot1 = oscard;
        report = _closure1_slot3;
        tangon = report.useCallback;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        zuuluu[1] = oscard;
        michal = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                oscard = entity.states;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 4;
                entity = zuuluu[entity];
                zuuluu = undefined;
                golfie = michal.bind(zuuluu)(entity);
                report = golfie.getSearchContextId;
                michal = _closure2_slot0;
                report = report.bind(golfie)(michal);
                michal = oscard.get;
                michal = michal.bind(oscard)(report);
                report = null;
                if(!(report == michal)) { _fun00006_ip = 81; continue _fun00005 }
 68:
                report = _closure1_slot9;
                tangon = _closure2_slot0;
                michal = report.bind(zuuluu)(tangon);
 81:
                entity = _closure2_slot1;
                entity = entity.bind(zuuluu)(michal);
                return entity;
            }
        };
        tangon = tangon.bind(report)(michal, zuuluu);
        zuuluu = _closure1_slot6;
        michal = zuuluu.useState;
        entity = _closure1_slot7;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: upsertState
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            option = argFoo;
            tangon = _closure1_slot6;
            zuuluu = tangon.getState;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.states;
                return entity;
            };
            golfie = zuuluu.bind(tangon)(entity);
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 4;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.getSearchContextId;
            oscard = zuuluu.bind(tangon)(option);
            tangon = {};
            zuuluu = golfie.get;
            zuuluu = zuuluu.bind(golfie)(oscard);
            report = null;
            if(!(report == zuuluu)) { _fun00008_ip = 90; continue _fun00007 }
 81:
            report = _closure1_slot9;
            zuuluu = report.bind(entity)(option);
 90:
            offset = tangon;
            verify = zuuluu;
            zuuluu = copyDataProperties(offset, verify);
            verify = argBar;
            offset = tangon;
            zuuluu = copyDataProperties(offset, verify);
            zuuluu = global;
            zuuluu = zuuluu.Map;
            report = zuuluu.prototype;
            report = Object.create(report, {constructor: {value: zuuluu}});
            yankee = report;
            offset = golfie;
            zuuluu = new yankee[zuuluu](offset, verify);
            report = zuuluu instanceof Object ? zuuluu : report;
            zuuluu = report.set;
            zuuluu = zuuluu.bind(report)(oscard, tangon);
            tangon = _closure1_slot6;
            zuuluu = tangon.setState;
            michal = {};
            michal['states'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: isInitialSearchQuerySelector
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            michal = entity.textInputValue;
            zuuluu = entity.tagsManager;
            entity = michal.trim;
            entity = entity.bind(michal)();
            michal = entity.length;
            entity = 0;
            entity = entity === michal;
            if(!entity) { _fun00010_ip = 52; continue _fun00009 }
 39:
            michal = zuuluu.hasUserAddedTags;
            michal = michal.bind(zuuluu)();
            entity = !michal;
 52:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.createZustandStore;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.EMPTY_SEARCH_QUERY_STRING;
    var _closure1_slot4 = tangon;
    tangon = {};
    tangon['textInputValue'] = entity;
    option = false;
    tangon['textInputChangedFromInput'] = option;
    var _closure1_slot5 = tangon;
    tangon = function() {
        entity = {};
        michal = global;
        michal = michal.Map;
        zuuluu = michal.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
        tangon = zuuluu;
        michal = new tangon[michal](zuuluu);
        michal = michal instanceof Object ? michal : zuuluu;
        entity['states'] = michal;
        return entity;
    };
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/SearchQueryStore.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getSearchQueryString
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = arguments[1];
            tangon = undefined;
            if(!(michal === tangon)) { _fun00012_ip = 13; continue _fun00011 }
 11:
            michal = false;
 13:
            var _closure2_slot0 = michal;
            zuuluu = _closure1_slot10;
            michal = argFoo;
            entity = function(argFoo) {
                entity = argFoo;
                report = entity.tagsManager;
                tangon = entity.textInputValue;
                zuuluu = _closure1_slot8;
                michal = _closure2_slot0;
                entity = undefined;
                entity = zuuluu.bind(entity)(report, tangon, michal);
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['getSearchQueryString'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: setTextInputValue
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = arguments[2];
            entity = undefined;
            if(!(michal === entity)) { _fun00014_ip = 11; continue _fun00013 }
 9:
            michal = false;
 11:
            tangon = _closure1_slot12;
            zuuluu = {};
            report = argBar;
            zuuluu['textInputValue'] = report;
            zuuluu['textInputChangedFromInput'] = michal;
            michal = argFoo;
            michal = tangon.bind(entity)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['setTextInputValue'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: subscribeTextInputValue
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        report = _closure1_slot6;
        tangon = report.subscribe;
        zuuluu = {};
        golfie = _closure1_slot0;
        oscard = _closure1_slot2;
        michal = 5;
        oscard = oscard[michal];
        michal = undefined;
        michal = golfie.bind(michal)(oscard);
        michal = michal.shallow;
        zuuluu['equalityFn'] = michal;
        michal = argBaz;
        zuuluu['fireImmediately'] = michal;
        michal = function(argFoo) {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 4;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.getSearchContextId;
                michal = _closure2_slot0;
                tangon = zuuluu.bind(tangon)(michal);
                michal = argFoo;
                zuuluu = michal.states;
                michal = zuuluu.get;
                michal = michal.bind(zuuluu)(tangon);
                zuuluu = null;
                if(!(zuuluu == michal)) { _fun00016_ip = 72; continue _fun00015 }
 68:
                michal = _closure1_slot5;
 72:
                entity = {};
                zuuluu = michal.textInputValue;
                entity['textInputValue'] = zuuluu;
                michal = michal.textInputChangedFromInput;
                entity['textInputChangedFromInput'] = michal;
                return entity;
            }
        };
        entity = function(argFoo, argBar) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = argFoo;
                report = entity.textInputValue;
                tangon = entity.textInputChangedFromInput;
                entity = argBar;
                zuuluu = entity.textInputValue;
                entity = null;
                if(!(entity != report)) { _fun00018_ip = 46; continue _fun00017 }
 30:
                michal = _closure2_slot1;
                entity = undefined;
                entity = michal.bind(entity)(report, zuuluu, tangon);
 46:
                entity = undefined;
                return entity;
            }
        };
        entity = tangon.bind(report)(michal, entity, zuuluu);
        return entity;
    };
    zuuluu['subscribeTextInputValue'] = tangon;
    tangon = function(argFoo) { // Original name: getTextInputValue
        tangon = _closure1_slot10;
        zuuluu = undefined;
        michal = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.textInputValue;
            return entity;
        };
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['getTextInputValue'] = tangon;
    tangon = function(argFoo) { // Original name: useSearchResultsQuery
        tangon = _closure1_slot11;
        zuuluu = undefined;
        michal = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.querySearchResults;
            return entity;
        };
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['useSearchResultsQuery'] = tangon;
    tangon = function(argFoo) { // Original name: getSearchResultsQuery
        tangon = _closure1_slot10;
        zuuluu = undefined;
        michal = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.querySearchResults;
            return entity;
        };
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['getSearchResultsQuery'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: setSearchResultsQuery
        tangon = _closure1_slot12;
        zuuluu = {};
        entity = argBar;
        zuuluu['querySearchResults'] = entity;
        entity = undefined;
        michal = argFoo;
        michal = tangon.bind(entity)(michal, zuuluu);
        return entity;
    };
    zuuluu['setSearchResultsQuery'] = tangon;
    tangon = function(argFoo) { // Original name: useIsTextInputValueEmpty
        tangon = _closure1_slot11;
        zuuluu = undefined;
        michal = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            michal = entity.textInputValue;
            entity = michal.trim;
            entity = entity.bind(michal)();
            michal = entity.length;
            entity = 0;
            entity = entity === michal;
            return entity;
        };
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['useIsTextInputValueEmpty'] = tangon;
    tangon = function(argFoo) { // Original name: getIsInitialSearchQuery
        tangon = _closure1_slot10;
        zuuluu = _closure1_slot13;
        michal = undefined;
        entity = argFoo;
        entity = tangon.bind(michal)(entity, zuuluu);
        return entity;
    };
    zuuluu['getIsInitialSearchQuery'] = tangon;
    tangon = function(argFoo) { // Original name: useIsInitialSearchQuery
        tangon = _closure1_slot11;
        zuuluu = _closure1_slot13;
        michal = undefined;
        entity = argFoo;
        entity = tangon.bind(michal)(entity, zuuluu);
        return entity;
    };
    zuuluu['useIsInitialSearchQuery'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: subscribeSearchTabsLayout
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        report = _closure1_slot6;
        tangon = report.subscribe;
        zuuluu = {};
        golfie = _closure1_slot0;
        oscard = _closure1_slot2;
        michal = 5;
        oscard = oscard[michal];
        michal = undefined;
        michal = golfie.bind(michal)(oscard);
        michal = michal.shallow;
        zuuluu['equalityFn'] = michal;
        michal = true;
        zuuluu['fireImmediately'] = michal;
        michal = function(argFoo) {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 4;
                entity = zuuluu[entity];
                offset = undefined;
                zuuluu = michal.bind(offset)(entity);
                michal = zuuluu.getSearchContextId;
                entity = _closure2_slot0;
                zuuluu = michal.bind(zuuluu)(entity);
                entity = argFoo;
                michal = entity.states;
                entity = michal.get;
                verify = entity.bind(michal)(zuuluu);
                entity = null;
                if(!(entity != verify)) { _fun00020_ip = 163; continue _fun00019 }
 68:
                zuuluu = verify.textInputValue;
                report = verify.tagsManager;
                oscard = verify.querySearchResults;
                tangon = verify.tagsVersion;
                michal = _closure1_slot8;
                golfie = michal.bind(offset)(report, zuuluu);
                michal = report.getPrefixTag;
                michal = michal.bind(report)();
                zuuluu = entity != michal;
                michal = {};
                option = _closure1_slot13;
                option = option.bind(offset)(verify);
                michal['isInitialSearchQuery'] = option;
                golfie = oscard !== golfie;
                michal['isPendingSearchResults'] = golfie;
                michal['searchResultsQuery'] = oscard;
                michal['tagsManager'] = report;
                michal['tagsVersion'] = tangon;
                michal['isAutocompleteVisible'] = zuuluu;
                return michal;
 163:
                return entity;
            }
        };
        entity = function(argFoo) {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                zuuluu = argFoo;
                entity = null;
                if(!(entity != zuuluu)) { _fun00022_ip = 23; continue _fun00021 }
 9:
                michal = _closure2_slot1;
                entity = undefined;
                entity = michal.bind(entity)(zuuluu);
 23:
                entity = undefined;
                return entity;
            }
        };
        entity = tangon.bind(report)(michal, entity, zuuluu);
        return entity;
    };
    zuuluu['subscribeSearchTabsLayout'] = tangon;
    tangon = function(argFoo) { // Original name: getHasUserAddedSearchTags
        tangon = _closure1_slot10;
        zuuluu = undefined;
        michal = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            michal = entity.tagsManager;
            entity = michal.hasUserAddedTags;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['getHasUserAddedSearchTags'] = tangon;
    tangon = function(argFoo) { // Original name: useSearchTags
        tangon = _closure1_slot11;
        zuuluu = undefined;
        michal = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            michal = entity.tagsManager;
            entity = michal.get;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['useSearchTags'] = tangon;
    tangon = function(argFoo) { // Original name: getSearchTags
        tangon = _closure1_slot10;
        zuuluu = undefined;
        michal = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            michal = entity.tagsManager;
            entity = michal.get;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['getSearchTags'] = tangon;
    tangon = function(argFoo) { // Original name: useIsAutocompleteVisible
        tangon = _closure1_slot11;
        zuuluu = undefined;
        michal = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            michal = entity.tagsManager;
            entity = michal.getPrefixTag;
            michal = entity.bind(michal)();
            entity = null;
            entity = entity != michal;
            return entity;
        };
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['useIsAutocompleteVisible'] = tangon;
    tangon = function(argFoo) { // Original name: getIsAutocompleteVisible
        tangon = _closure1_slot10;
        zuuluu = undefined;
        michal = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            michal = entity.tagsManager;
            entity = michal.getPrefixTag;
            michal = entity.bind(michal)();
            entity = null;
            entity = entity != michal;
            return entity;
        };
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['getIsAutocompleteVisible'] = tangon;
    tangon = function(argFoo) { // Original name: getSearchFilterPrefixTag
        tangon = _closure1_slot10;
        zuuluu = undefined;
        michal = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            michal = entity.tagsManager;
            entity = michal.getPrefixTag;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['getSearchFilterPrefixTag'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: setSearchTags
        tangon = argFoo;
        report = _closure1_slot10;
        entity = undefined;
        zuuluu = function(argFoo) {
            entity = argFoo;
            entity = entity.tagsManager;
            return entity;
        };
        report = report.bind(entity)(tangon, zuuluu);
        oscard = report.set;
        zuuluu = argBar;
        zuuluu = oscard.bind(report)(zuuluu);
        zuuluu = _closure1_slot12;
        michal = {};
        michal['tagsManager'] = report;
        report = report.version;
        michal['tagsVersion'] = report;
        michal = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    zuuluu['setSearchTags'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: addSearchTag
        tangon = argFoo;
        report = _closure1_slot10;
        entity = undefined;
        zuuluu = function(argFoo) {
            entity = argFoo;
            entity = entity.tagsManager;
            return entity;
        };
        report = report.bind(entity)(tangon, zuuluu);
        oscard = report.add;
        zuuluu = argBar;
        zuuluu = oscard.bind(report)(zuuluu);
        zuuluu = _closure1_slot12;
        michal = {};
        michal['tagsManager'] = report;
        report = report.version;
        michal['tagsVersion'] = report;
        michal = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    zuuluu['addSearchTag'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: removeSearchTag
        tangon = argFoo;
        report = _closure1_slot10;
        entity = undefined;
        zuuluu = function(argFoo) {
            entity = argFoo;
            entity = entity.tagsManager;
            return entity;
        };
        report = report.bind(entity)(tangon, zuuluu);
        oscard = report.removeAtIndex;
        zuuluu = argBar;
        zuuluu = oscard.bind(report)(zuuluu);
        zuuluu = _closure1_slot12;
        michal = {};
        michal['tagsManager'] = report;
        report = report.version;
        michal['tagsVersion'] = report;
        michal = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    zuuluu['removeSearchTag'] = tangon;
    tangon = function(argFoo) { // Original name: removeIncompleteSearchTags
        tangon = argFoo;
        report = _closure1_slot10;
        entity = undefined;
        zuuluu = function(argFoo) {
            entity = argFoo;
            entity = entity.tagsManager;
            return entity;
        };
        report = report.bind(entity)(tangon, zuuluu);
        zuuluu = report.removeAnyPrefixTags;
        zuuluu = zuuluu.bind(report)();
        zuuluu = _closure1_slot12;
        michal = {};
        michal['tagsManager'] = report;
        report = report.version;
        michal['tagsVersion'] = report;
        michal = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    zuuluu['removeIncompleteSearchTags'] = tangon;
    tangon = function(argFoo) { // Original name: resetSearchQueryState
        tangon = argFoo;
        zuuluu = _closure1_slot10;
        entity = undefined;
        michal = function(argFoo) {
            entity = argFoo;
            entity = entity.tagsManager;
            return entity;
        };
        oscard = zuuluu.bind(entity)(tangon, michal);
        michal = oscard.reset;
        michal = michal.bind(oscard)();
        zuuluu = _closure1_slot12;
        michal = {};
        michal['tagsManager'] = oscard;
        oscard = oscard.version;
        michal['tagsVersion'] = oscard;
        report = _closure1_slot4;
        michal['textInputValue'] = report;
        michal = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    zuuluu['resetSearchQueryState'] = tangon;
    tangon = function(argFoo) { // Original name: deleteSearchQueryState
        zuuluu = function(argFoo) { // Original name: deleteState
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                tangon = _closure1_slot6;
                zuuluu = tangon.getState;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.states;
                    return entity;
                };
                oscard = zuuluu.bind(tangon)(entity);
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 4;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.getSearchContextId;
                zuuluu = argFoo;
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = oscard.has;
                zuuluu = zuuluu.bind(oscard)(tangon);
                if(!zuuluu) { _fun00024_ip = 139; continue _fun00023 }
 76:
                zuuluu = global;
                zuuluu = zuuluu.Map;
                report = zuuluu.prototype;
                report = Object.create(report, {constructor: {value: zuuluu}});
                option = report;
                golfie = oscard;
                zuuluu = new option[zuuluu](golfie, oscard);
                report = zuuluu instanceof Object ? zuuluu : report;
                zuuluu = report.delete;
                zuuluu = zuuluu.bind(report)(tangon);
                tangon = _closure1_slot6;
                zuuluu = tangon.setState;
                michal = {};
                michal['states'] = report;
                michal = zuuluu.bind(tangon)(michal);
 139:
                return entity;
            }
        };
        entity = undefined;
        michal = argFoo;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['deleteSearchQueryState'] = tangon;
    tangon = function(argFoo) { // Original name: useSearchTagsChannelIds
        tangon = _closure1_slot11;
        zuuluu = undefined;
        michal = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            michal = entity.tagsManager;
            entity = michal.getChannelIds;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['useSearchTagsChannelIds'] = tangon;
    tangon = function(argFoo) { // Original name: getSearchTagsChannelIds
        tangon = _closure1_slot10;
        zuuluu = undefined;
        michal = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            michal = entity.tagsManager;
            entity = michal.getChannelIds;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['getSearchTagsChannelIds'] = tangon;
    michal = function(argFoo, argBar) { // Original name: getSearchTagsUserIds
        michal = argBar;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot10;
        zuuluu = undefined;
        michal = argFoo;
        entity = function(argFoo) {
            entity = argFoo;
            zuuluu = entity.tagsManager;
            michal = zuuluu.getUserIds;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['getSearchTagsUserIds'] = michal;
    return entity;
})();