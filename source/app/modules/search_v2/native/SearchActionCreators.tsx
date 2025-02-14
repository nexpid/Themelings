// app/modules/search_v2/native/SearchActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    offset = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = offset;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golf;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: fetchBulk
        _fun112421: for(var _fun112421_ip = 0; ; ) switch(_fun112421_ip) {
 0:
            report = argFoo;
            verify = argBar;
            tango = argBaz;
            var _closure2_slot0 = report;
            var _closure2_slot1 = tango;
            golf = _closure1_slot0;
            entity = _closure1_slot3;
            options = 4;
            oscar = entity[options];
            entity = undefined;
            offset = golf.bind(entity)(oscar);
            golf = offset.getSearchTabFetchId;
            oscar = 0;
            oscar = verify[oscar];
            offset = golf.bind(offset)(report, oscar, tango);
            golf = _closure1_slot4;
            oscar = golf.getIsFetching;
            oscar = oscar.bind(golf)(offset);
            if(oscar) { _fun112421_ip = 436; continue _fun112421 }
 84:
            yankee = _closure1_slot2;
            oscar = _closure1_slot3;
            offset = 5;
            golf = oscar[offset];
            romeo = yankee.bind(entity)(golf);
            golf = romeo.tokenizeQuery;
            romeo = golf.bind(romeo)(tango);
            golf = oscar[offset];
            yankee = yankee.bind(entity)(golf);
            golf = yankee.getSearchQueryFromTokens;
            romeo = golf.bind(yankee)(romeo);
            golf = _closure1_slot0;
            oscar = oscar[options];
            golf = golf.bind(entity)(oscar);
            oscar = golf.getGuildIdFromSearchContext;
            options = oscar.bind(golf)(report);
            var _closure2_slot2 = options;
            oscar = null;
            if(!(oscar != options)) { _fun112421_ip = 198; continue _fun112421 }
 169:
            golf = _closure1_slot2;
            oscar = _closure1_slot3;
            oscar = oscar[offset];
            golf = golf.bind(entity)(oscar);
            oscar = golf.setIncludeNSFW;
            oscar = oscar.bind(golf)(romeo, options);
 198:
            offset = _closure1_slot1;
            yankee = _closure1_slot3;
            oscar = 6;
            oscar = yankee[oscar];
            options = offset.bind(entity)(oscar);
            golf = options.getSearchTabFetcher;
            foxtrot = argCorge;
            result = options;
            output = report;
            sizing = romeo;
            kilo = tango;
            backup = verify;
            oscar = result[golf](output, sizing, kilo, backup, foxtrot, romeo);
            golf = _closure1_slot5;
            golf = golf.bind(entity)(report);
            options = 7;
            options = yankee[options];
            offset = offset.bind(entity)(options);
            options = offset.incrementSearchCount;
            options = options.bind(offset)(report, golf);
            if(!golf) { _fun112421_ip = 324; continue _fun112421 }
 286:
            options = _closure1_slot0;
            offset = _closure1_slot3;
            golf = 8;
            golf = offset[golf];
            offset = options.bind(entity)(golf);
            options = offset.trackSearchFiltersApplied;
            golf = {};
            golf['searchContext'] = report;
            golf = options.bind(offset)(golf);
 324:
            options = verify.map;
            golf = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot3;
                entity = 4;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.getSearchTabFetchId;
                zulu = _closure2_slot0;
                mike = _closure2_slot1;
                entity = argFoo;
                entity = tango.bind(report)(zulu, entity, mike);
                return entity;
            };
            offset = options.bind(verify)(golf);
            var _closure2_slot3 = offset;
            options = _closure1_slot1;
            verify = _closure1_slot3;
            golf = 9;
            golf = verify[golf];
            verify = options.bind(entity)(golf);
            options = verify.dispatch;
            golf = {};
            yankee = 'SEARCH_MESSAGES_START';
            golf['type'] = yankee;
            golf['ids'] = offset;
            golf = options.bind(verify)(golf);
            zulu = _closure1_slot8;
            zulu = zulu.bind(entity)(report, tango);
            report = oscar.fetch;
            tango = function(argFoo) {
                _fun112423: for(var _fun112423_ip = 0; ; ) switch(_fun112423_ip) {
 0:
                    entity = argFoo;
                    entity = entity.body;
                    var _closure3_slot0 = entity;
                    mike = global;
                    tango = mike.Object;
                    mike = tango.entries;
                    entity = entity.tabs;
                    oscar = mike.bind(tango)(entity);
                    report = _closure1_slot1;
                    tango = _closure1_slot3;
                    entity = 9;
                    tango = tango[entity];
                    entity = undefined;
                    options = report.bind(entity)(tango);
                    golf = options.dispatch;
                    tango = {};
                    report = 'SEARCH_MESSAGES_SUCCESS';
                    tango['type'] = report;
                    verify = _closure2_slot2;
                    tango['guildId'] = verify;
                    offset = oscar.map;
                    verify = function(argFoo) {
                        _fun112424: for(var _fun112424_ip = 0; ; ) switch(_fun112424_ip) {
 0:
                            zulu = argFoo;
                            entity = zulu[Symbol.iterator];
                            zulu = entity().next;
                            tango = zulu().value;
                            mike = entity;
                            options = undefined;
                            mike = mike === options;
                            golf = undefined;
                            if(mike) { _fun112424_ip = 27; continue _fun112424 }
 24:
                            golf = tango;
 27:
                            tango = undefined;
                            if(mike) { _fun112424_ip = 57; continue _fun112424 }
 32:
                            report = zulu().value;
                            zulu = entity;
                            zulu = zulu === options;
                            tango = undefined;
                            mike = zulu;
                            if(zulu) { _fun112424_ip = 57; continue _fun112424 }
 51:
                            tango = report;
                            mike = zulu;
 57:
                            if(mike) { _fun112424_ip = 63; continue _fun112424 }
 60:
                            entity.return();
 63:
                            mike = _closure1_slot0;
                            zulu = _closure1_slot3;
                            entity = 4;
                            entity = zulu[entity];
                            oscar = mike.bind(options)(entity);
                            zulu = oscar.getSearchTabFetchId;
                            mike = _closure2_slot0;
                            entity = _closure2_slot1;
                            mike = zulu.bind(oscar)(mike, golf, entity);
                            oscar = tango.cursor;
                            entity = {};
                            entity['id'] = mike;
                            zulu = _closure3_slot0;
                            zulu = zulu.analytics_id;
                            entity['analyticsId'] = zulu;
                            zulu = tango.total_results;
                            entity['totalResults'] = zulu;
                            zulu = null;
                            if(!(zulu != oscar)) { _fun112424_ip = 193; continue _fun112424 }
 157:
                            golf = _closure1_slot1;
                            verify = _closure1_slot3;
                            report = 10;
                            report = verify[report];
                            golf = golf.bind(options)(report);
                            report = golf.isEmpty;
                            golf = report.bind(golf)(oscar);
                            report = null;
                            if(golf) { _fun112424_ip = 196; continue _fun112424 }
 193:
                            report = oscar;
 196:
                            entity['cursor'] = report;
                            report = tango.messages;
                            entity['messages'] = report;
                            report = tango.channels;
                            if(!(zulu == report)) { _fun112424_ip = 226; continue _fun112424 }
 222:
                            report = new Array(0);
 226:
                            entity['channels'] = report;
                            report = tango.threads;
                            if(!(zulu == report)) { _fun112424_ip = 245; continue _fun112424 }
 241:
                            report = new Array(0);
 245:
                            entity['threads'] = report;
                            report = tango.members;
                            if(!(zulu == report)) { _fun112424_ip = 264; continue _fun112424 }
 260:
                            report = new Array(0);
 264:
                            tango = report.map;
                            zulu = function(argFoo) {
                                mike = _closure1_slot1;
                                zulu = _closure1_slot3;
                                entity = 11;
                                entity = zulu[entity];
                                zulu = undefined;
                                mike = mike.bind(zulu)(entity);
                                entity = argFoo;
                                entity = mike.bind(zulu)(entity);
                                return entity;
                            };
                            zulu = tango.bind(report)(zulu);
                            entity['members'] = zulu;
                            mike = _closure3_slot0;
                            zulu = mike.doing_deep_historical_index;
                            entity['doingHistoricalIndex'] = zulu;
                            mike = mike.documents_indexed;
                            entity['documentsIndexed'] = mike;
                            return entity;
                        }
                    };
                    verify = offset.bind(oscar)(verify);
                    tango['data'] = verify;
                    tango = golf.bind(options)(tango);
                    golf = oscar.forEach;
                    tango = function(argFoo) {
                        _fun112426: for(var _fun112426_ip = 0; ; ) switch(_fun112426_ip) {
 0:
                            tango = argFoo;
                            mike = tango[Symbol.iterator];
                            tango = mike().next;
                            entity = tango().value;
                            zulu = mike;
                            entity = undefined;
                            zulu = zulu === entity;
                            golf = undefined;
                            if(zulu) { _fun112426_ip = 49; continue _fun112426 }
 24:
                            report = tango().value;
                            tango = mike;
                            tango = tango === entity;
                            golf = undefined;
                            zulu = tango;
                            if(tango) { _fun112426_ip = 49; continue _fun112426 }
 43:
                            golf = report;
                            zulu = tango;
 49:
                            if(zulu) { _fun112426_ip = 55; continue _fun112426 }
 52:
                            mike.return();
 55:
                            zulu = _closure1_slot1;
                            verify = _closure1_slot3;
                            mike = 9;
                            mike = verify[mike];
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.dispatch;
                            mike = {};
                            oscar = 'SEARCH_FINISH';
                            mike['type'] = oscar;
                            oscar = _closure1_slot0;
                            report = 4;
                            options = verify[report];
                            yankee = oscar.bind(entity)(options);
                            offset = yankee.getBackwardCompatibilitySearchId;
                            options = _closure2_slot0;
                            offset = offset.bind(yankee)(options);
                            mike['searchId'] = offset;
                            report = verify[report];
                            oscar = oscar.bind(entity)(report);
                            report = oscar.getGuildIdFromSearchContext;
                            report = report.bind(oscar)(options);
                            mike['guildId'] = report;
                            oscar = _closure3_slot0;
                            oscar = oscar.analytics_id;
                            mike['analyticsId'] = oscar;
                            oscar = golf.total_results;
                            mike['totalResults'] = oscar;
                            oscar = golf.channels;
                            mike['channels'] = oscar;
                            oscar = golf.messages;
                            mike['messages'] = oscar;
                            options = golf.threads;
                            oscar = null;
                            if(!(oscar == options)) { _fun112426_ip = 223; continue _fun112426 }
 219:
                            options = new Array(0);
 223:
                            mike['threads'] = options;
                            options = golf.members;
                            if(!(oscar == options)) { _fun112426_ip = 242; continue _fun112426 }
 238:
                            options = new Array(0);
 242:
                            golf = options.map;
                            oscar = function(argFoo) {
                                mike = _closure1_slot1;
                                zulu = _closure1_slot3;
                                entity = 11;
                                entity = zulu[entity];
                                zulu = undefined;
                                mike = mike.bind(zulu)(entity);
                                entity = argFoo;
                                entity = mike.bind(zulu)(entity);
                                return entity;
                            };
                            oscar = golf.bind(options)(oscar);
                            mike['members'] = oscar;
                            oscar = false;
                            mike['hasError'] = oscar;
                            report = _closure3_slot0;
                            oscar = report.doing_deep_historical_index;
                            mike['doingHistoricalIndex'] = oscar;
                            report = report.documents_indexed;
                            mike['documentsIndexed'] = report;
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        }
                    };
                    tango = golf.bind(oscar)(tango);
                    tango = oscar.every;
                    zulu = function(argFoo) {
                        _fun112428: for(var _fun112428_ip = 0; ; ) switch(_fun112428_ip) {
 0:
                            tango = argFoo;
                            entity = tango[Symbol.iterator];
                            tango = entity().next;
                            mike = tango().value;
                            mike = entity;
                            oscar = undefined;
                            zulu = mike === oscar;
                            mike = undefined;
                            if(zulu) { _fun112428_ip = 49; continue _fun112428 }
 24:
                            report = tango().value;
                            tango = entity;
                            tango = tango === oscar;
                            mike = undefined;
                            zulu = tango;
                            if(tango) { _fun112428_ip = 49; continue _fun112428 }
 43:
                            mike = report;
                            zulu = tango;
 49:
                            if(zulu) { _fun112428_ip = 55; continue _fun112428 }
 52:
                            entity.return();
 55:
                            zulu = mike.total_results;
                            entity = 0;
                            entity = entity === zulu;
                            if(entity) { _fun112428_ip = 82; continue _fun112428 }
 70:
                            zulu = mike.total_results;
                            mike = null;
                            entity = mike == zulu;
 82:
                            return entity;
                        }
                    };
                    zulu = tango.bind(oscar)(zulu);
                    if(!zulu) { _fun112423_ip = 196; continue _fun112423 }
 154:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot3;
                    mike = 8;
                    mike = tango[mike];
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.trackSearchResultEmpty;
                    mike = {};
                    report = _closure2_slot0;
                    mike['searchContext'] = report;
                    mike = zulu.bind(tango)(mike);
 196:
                    return entity;
                }
            };
            zulu = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot3;
                entity = 9;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'SEARCH_MESSAGES_INDEXING';
                mike['type'] = report;
                report = _closure2_slot3;
                mike['ids'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = function(argFoo) {
                zulu = _closure1_slot1;
                mike = _closure1_slot3;
                entity = 9;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'SEARCH_MESSAGES_FAILURE';
                mike['type'] = report;
                report = _closure2_slot3;
                mike['ids'] = report;
                report = argFoo;
                mike['error'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = report.bind(oscar)(tango, zulu, mike);
 436:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: _getLimit
        entity = global;
        tango = entity.Math;
        zulu = tango.min;
        mike = _closure1_slot9;
        entity = argFoo;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: getInitialFetchLimit
        zulu = _closure1_slot16;
        mike = _closure1_slot12;
        entity = argFoo;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: getNextFetchLimit
        zulu = _closure1_slot16;
        mike = _closure1_slot12;
        entity = argFoo;
        mike = mike[entity];
        entity = 2;
        mike = entity * mike;
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    var _closure1_slot18 = entity;
    options = function() { // Original name: clearSearch
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 9;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'SEARCH_MESSAGES_CLEAR_ALL';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot19 = options;
    mike = function(argFoo) { // Original name: fetchInitialMessages
        _fun112435: for(var _fun112435_ip = 0; ; ) switch(_fun112435_ip) {
 0:
            oscar = argFoo;
            zulu = oscar.type;
            mike = _closure1_slot14;
            mike = mike.THREAD;
            if(!(zulu !== mike)) { _fun112435_ip = 165; continue _fun112435 }
 28:
            mike = _closure1_slot19;
            report = undefined;
            mike = mike.bind(report)();
            zulu = _closure1_slot1;
            tango = _closure1_slot3;
            mike = 6;
            mike = tango[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.cancelInFlightRequests;
            mike = mike.bind(zulu)(oscar);
            mike = _closure1_slot7;
            tango = mike.bind(report)(oscar);
            mike = _closure1_slot6;
            mike = mike.bind(report)(oscar);
            if(mike) { _fun112435_ip = 96; continue _fun112435 }
 90:
            zulu = _closure1_slot10;
            _fun112435_ip = 142; continue _fun112435;
 96:
            golf = oscar.type;
            mike = _closure1_slot14;
            mike = mike.GUILD_CHANNEL;
            if(!(mike !== golf)) { _fun112435_ip = 135; continue _fun112435 }
 115:
            mike = _closure1_slot14;
            mike = mike.CHANNEL;
            if(!(mike !== golf)) { _fun112435_ip = 135; continue _fun112435 }
 129:
            mike = _closure1_slot13;
            _fun112435_ip = 139; continue _fun112435;
 135:
            mike = _closure1_slot11;
 139:
            zulu = mike;
 142:
            mike = _closure1_slot15;
            options = _closure1_slot17;
            romeo = undefined;
            yankee = oscar;
            offset = zulu;
            verify = tango;
            entity = romeo[mike](yankee, offset, verify, options, golf);
 165:
            entity = undefined;
            return entity;
        }
    };
    romeo = function(argFoo) { // Original name: syncAutocomplete
        options = argFoo;
        zulu = _closure1_slot0;
        golf = _closure1_slot3;
        entity = 4;
        mike = golf[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        mike = report.getBackwardCompatibilitySearchId;
        oscar = mike.bind(report)(options);
        report = _closure1_slot7;
        mike = true;
        mike = report.bind(entity)(options, mike);
        options = _closure1_slot2;
        tango = 5;
        report = golf[tango];
        verify = options.bind(entity)(report);
        report = verify.tokenizeQuery;
        report = report.bind(verify)(mike);
        tango = golf[tango];
        verify = options.bind(entity)(tango);
        options = verify.getSelectionScope;
        tango = mike.length;
        offset = 1;
        tango = tango - offset;
        mike = mike.length;
        mike = mike - offset;
        tango = options.bind(verify)(report, tango, mike);
        mike = 12;
        mike = golf[mike];
        zulu = zulu.bind(entity)(mike);
        mike = zulu.updateAutocompleteQuery;
        mike = mike.bind(zulu)(oscar, report, tango);
        return entity;
    };
    entity = global;
    yankee = entity.Object;
    verify = yankee.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(yankee)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = offset.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    verify = tango.getHasUserAddedSearchTags;
    var _closure1_slot5 = verify;
    verify = tango.getIsInitialSearchQuery;
    var _closure1_slot6 = verify;
    verify = tango.getSearchQueryString;
    var _closure1_slot7 = verify;
    tango = tango.setSearchResultsQuery;
    var _closure1_slot8 = tango;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    verify = tango.MAX_SEARCH_RESULTS_LIMIT;
    var _closure1_slot9 = verify;
    verify = tango.MESSAGE_SEARCH_RESULT_TABS;
    var _closure1_slot10 = verify;
    verify = tango.CHANNEL_SEARCH_INITIAL_MESSAGE_TABS;
    var _closure1_slot11 = verify;
    verify = tango.SEARCH_TABS_TO_SEARCH_QUERY_LIMITS;
    var _closure1_slot12 = verify;
    tango = tango.SEARCH_INITIAL_MESSAGE_TABS;
    var _closure1_slot13 = tango;
    tango = 3;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.SearchTypes;
    var _closure1_slot14 = tango;
    tango = {};
    verify = function() { // Original name: clearSearchRecentMessages
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 9;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'SEARCH_RECENT_MESSAGES_CLEAR';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['clearSearchRecentMessages'] = verify;
    tango['fetchInitialMessages'] = mike;
    verify = 10;
    yankee = golf[verify];
    backup = offset.bind(entity)(yankee);
    foxtrot = backup.debounce;
    yankee = 500;
    foxtrot = foxtrot.bind(backup)(mike, yankee);
    tango['fetchInitialMessagesDebounced'] = foxtrot;
    foxtrot = function(argFoo, argBar) { // Original name: fetchNextMessages
        _fun112438: for(var _fun112438_ip = 0; ; ) switch(_fun112438_ip) {
 0:
            oscar = argFoo;
            golf = argBar;
            zulu = _closure1_slot7;
            entity = undefined;
            report = zulu.bind(entity)(oscar);
            tango = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 4;
            zulu = options[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.getSearchTabFetchId;
            verify = zulu.bind(tango)(oscar, golf, report);
            tango = _closure1_slot4;
            zulu = tango.getHasNextPage;
            zulu = zulu.bind(tango)(verify);
            options = _closure1_slot4;
            tango = options.getIsInitialFetchComplete;
            tango = tango.bind(options)(verify);
            if(!zulu) { _fun112438_ip = 91; continue _fun112438 }
 88:
            zulu = tango;
 91:
            if(!zulu) { _fun112438_ip = 125; continue _fun112438 }
 94:
            tango = _closure1_slot15;
            zulu = new Array(1);
            zulu[0] = golf;
            offset = _closure1_slot18;
            backup = undefined;
            foxtrot = oscar;
            romeo = zulu;
            yankee = report;
            mike = backup[tango](foxtrot, romeo, yankee, offset, verify);
 125:
            return entity;
        }
    };
    tango['fetchNextMessages'] = foxtrot;
    tango['syncAutocomplete'] = romeo;
    verify = golf[verify];
    offset = offset.bind(entity)(verify);
    verify = offset.debounce;
    verify = verify.bind(offset)(romeo, yankee);
    tango['syncAutocompleteDebounced'] = verify;
    tango['clearSearch'] = options;
    options = function(argFoo, argBar) { // Original name: addSearchHistoryItem
        _fun112439: for(var _fun112439_ip = 0; ; ) switch(_fun112439_ip) {
 0:
            oscar = argFoo;
            zulu = oscar.type;
            mike = _closure1_slot14;
            mike = mike.DMS;
            if(!(zulu !== mike)) { _fun112439_ip = 44; continue _fun112439 }
 25:
            zulu = oscar.type;
            mike = _closure1_slot14;
            mike = mike.GUILD;
            if(!(zulu === mike)) { _fun112439_ip = 126; continue _fun112439 }
 44:
            tango = _closure1_slot0;
            report = _closure1_slot3;
            mike = 4;
            mike = report[mike];
            zulu = undefined;
            tango = tango.bind(zulu)(mike);
            mike = tango.getSearchContextId;
            tango = mike.bind(tango)(oscar);
            mike = _closure1_slot1;
            entity = 9;
            entity = report[entity];
            zulu = mike.bind(zulu)(entity);
            mike = zulu.dispatch;
            entity = {};
            report = 'SEARCH_HISTORY_ADD_ITEM';
            entity['type'] = report;
            entity['id'] = tango;
            tango = argBar;
            entity['item'] = tango;
            entity = mike.bind(zulu)(entity);
 126:
            entity = undefined;
            return entity;
        }
    };
    tango['addSearchHistoryItem'] = options;
    options = function(argFoo, argBar) { // Original name: removeSearchHistoryItem
        report = _closure1_slot0;
        tango = _closure1_slot3;
        entity = 4;
        zulu = tango[entity];
        entity = undefined;
        oscar = report.bind(entity)(zulu);
        report = oscar.getSearchContextId;
        zulu = argFoo;
        report = report.bind(oscar)(zulu);
        zulu = _closure1_slot1;
        mike = 9;
        mike = tango[mike];
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        oscar = 'SEARCH_HISTORY_REMOVE_ITEM';
        mike['type'] = oscar;
        mike['id'] = report;
        report = argBar;
        mike['item'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['removeSearchHistoryItem'] = options;
    options = function(argFoo) { // Original name: clearSearchHistory
        report = _closure1_slot0;
        tango = _closure1_slot3;
        entity = 4;
        zulu = tango[entity];
        entity = undefined;
        oscar = report.bind(entity)(zulu);
        report = oscar.getSearchContextId;
        zulu = argFoo;
        report = report.bind(oscar)(zulu);
        zulu = _closure1_slot1;
        mike = 9;
        mike = tango[mike];
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        oscar = 'SEARCH_HISTORY_CLEAR_ITEMS';
        mike['type'] = oscar;
        mike['id'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['clearSearchHistory'] = options;
    report = function(argFoo) { // Original name: openSearchScreen
        report = _closure1_slot0;
        tango = _closure1_slot3;
        entity = 4;
        zulu = tango[entity];
        entity = undefined;
        oscar = report.bind(entity)(zulu);
        report = oscar.getBackwardCompatibilitySearchId;
        zulu = argFoo;
        report = report.bind(oscar)(zulu);
        zulu = _closure1_slot1;
        mike = 9;
        mike = tango[mike];
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        oscar = 'SEARCH_SCREEN_OPEN';
        mike['type'] = oscar;
        mike['searchId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['openSearchScreen'] = report;
    report = 13;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/search_v2/native/SearchActionCreators.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['fetchInitialMessages'] = mike;
    return entity;
})();