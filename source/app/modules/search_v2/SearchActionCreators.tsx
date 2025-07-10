// app/modules/search_v2/SearchActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    golfie = michal.SearchModes;
    var _closure1_slot4 = golfie;
    michal = michal.SearchTypes;
    var _closure1_slot5 = michal;
    michal = {};
    golfie = function(argFoo) { // Original name: fetchMessages
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            option = michal.searchContext;
            var _closure2_slot0 = option;
            foxtra = michal.searchTabs;
            golfie = michal.searchQueryString;
            kiloes = michal.pagination;
            backup = michal.trackExactTotalHits;
            zuuluu = michal.getId;
            var _closure2_slot1 = zuuluu;
            sizing = michal.getLimit;
            tangon = michal.onFetchStart;
            zuuluu = michal.onFetchSuccess;
            var _closure2_slot2 = zuuluu;
            output = michal.searchMode;
            zuuluu = undefined;
            if(!(output === zuuluu)) { _fun00002_ip = 98; continue _fun00001 }
 85:
            michal = _closure1_slot4;
            output = michal.NEWEST;
 98:
            var _closure2_slot3 = zuuluu;
            var _closure2_slot4 = zuuluu;
            oscard = _closure1_slot2;
            offset = _closure1_slot3;
            romeon = 1;
            michal = offset[romeon];
            verify = oscard.bind(zuuluu)(michal);
            michal = verify.tokenizeQuery;
            verify = michal.bind(verify)(golfie);
            michal = offset[romeon];
            oscard = oscard.bind(zuuluu)(michal);
            michal = oscard.getSearchQueryFromTokens;
            yankee = michal.bind(oscard)(verify);
            michal = function(argFoo) { // Original name: fixSearchQueryPinned
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    entity = global;
                    tangon = entity.Array;
                    zuuluu = tangon.isArray;
                    entity = michal.pinned;
                    entity = zuuluu.bind(tangon)(entity);
                    if(!entity) { _fun00004_ip = 62; continue _fun00003 }
 30:
                    tangon = michal.pinned;
                    zuuluu = tangon.some;
                    entity = function(argFoo) {
                        michal = true;
                        entity = argFoo;
                        entity = michal === entity;
                        return entity;
                    };
                    entity = zuuluu.bind(tangon)(entity);
                    michal['pinned'] = entity;
 62:
                    entity = undefined;
                    return entity;
                }
            };
            michal = michal.bind(zuuluu)(yankee);
            verify = _closure1_slot0;
            michal = 2;
            michal = offset[michal];
            oscard = verify.bind(zuuluu)(michal);
            michal = oscard.searchModeToSearchQueryParams;
            michal = michal.bind(oscard)(output);
            oscard = {};
            update = oscard;
            echoed = yankee;
            yankee = copyDataProperties(update, echoed);
            update = oscard;
            echoed = michal;
            michal = copyDataProperties(update, echoed);
            michal = 3;
            michal = offset[michal];
            verify = verify.bind(zuuluu)(michal);
            michal = verify.getGuildIdFromSearchContext;
            yankee = michal.bind(verify)(option);
            _closure2_slot3 = yankee;
            michal = null;
            if(!(michal != yankee)) { _fun00002_ip = 283; continue _fun00001 }
 254:
            offset = _closure1_slot2;
            verify = _closure1_slot3;
            verify = verify[romeon];
            offset = offset.bind(zuuluu)(verify);
            verify = offset.setIncludeNSFW;
            verify = verify.bind(offset)(oscard, yankee);
 283:
            offset = _closure1_slot1;
            yankee = _closure1_slot3;
            report = 4;
            report = yankee[report];
            romeon = offset.bind(zuuluu)(report);
            verify = romeon.getSearchTabFetcher;
            report = {};
            report['searchContext'] = option;
            report['searchQuery'] = oscard;
            report['searchTabs'] = foxtra;
            report['getLimit'] = sizing;
            report['pagination'] = kiloes;
            report['trackExactTotalHits'] = backup;
            report = verify.bind(romeon)(report);
            romeon = foxtra.map;
            verify = function(argFoo) {
                zuuluu = _closure2_slot1;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            romeon = romeon.bind(foxtra)(verify);
            _closure2_slot4 = romeon;
            verify = 5;
            verify = yankee[verify];
            yankee = offset.bind(zuuluu)(verify);
            offset = yankee.dispatch;
            verify = {};
            foxtra = 'SEARCH_MESSAGES_START';
            verify['type'] = foxtra;
            verify['ids'] = romeon;
            verify = offset.bind(yankee)(verify);
            if(!(michal != tangon)) { _fun00002_ip = 434; continue _fun00001 }
 412:
            michal = {};
            michal['searchContext'] = option;
            michal['searchQueryString'] = golfie;
            michal['searchQuery'] = oscard;
            michal = tangon.bind(zuuluu)(michal);
 434:
            tangon = report.fetch;
            zuuluu = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    entity = entity.body;
                    var _closure3_slot0 = entity;
                    zuuluu = global;
                    tangon = zuuluu.Object;
                    zuuluu = tangon.entries;
                    entity = entity.tabs;
                    tangon = zuuluu.bind(tangon)(entity);
                    report = _closure1_slot1;
                    zuuluu = _closure1_slot3;
                    entity = 5;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    golfie = report.bind(entity)(zuuluu);
                    oscard = golfie.dispatch;
                    zuuluu = {};
                    report = 'SEARCH_MESSAGES_SUCCESS';
                    zuuluu['type'] = report;
                    option = _closure2_slot3;
                    zuuluu['guildId'] = option;
                    verify = tangon.map;
                    option = function(argFoo) {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            report = argFoo;
                            entity = report[Symbol.iterator];
                            report = entity().next;
                            tangon = report().value;
                            michal = entity;
                            option = undefined;
                            zuuluu = michal === option;
                            michal = undefined;
                            if(zuuluu) { _fun00008_ip = 27; continue _fun00007 }
 24:
                            michal = tangon;
 27:
                            tangon = undefined;
                            if(zuuluu) { _fun00008_ip = 57; continue _fun00007 }
 32:
                            oscard = report().value;
                            report = entity;
                            report = report === option;
                            tangon = undefined;
                            zuuluu = report;
                            if(report) { _fun00008_ip = 57; continue _fun00007 }
 51:
                            tangon = oscard;
                            zuuluu = report;
 57:
                            if(zuuluu) { _fun00008_ip = 63; continue _fun00007 }
 60:
                            entity.return();
 63:
                            entity = _closure2_slot1;
                            michal = entity.bind(option)(michal);
                            oscard = tangon.cursor;
                            entity = {};
                            entity['id'] = michal;
                            zuuluu = _closure3_slot0;
                            zuuluu = zuuluu.analytics_id;
                            entity['analyticsId'] = zuuluu;
                            zuuluu = tangon.total_results;
                            entity['totalResults'] = zuuluu;
                            zuuluu = null;
                            if(!(zuuluu != oscard)) { _fun00008_ip = 161; continue _fun00007 }
 122:
                            golfie = _closure1_slot1;
                            verify = _closure1_slot3;
                            report = 6;
                            report = verify[report];
                            golfie = golfie.bind(option)(report);
                            report = golfie.isEmpty;
                            golfie = report.bind(golfie)(oscard);
                            report = null;
                            if(golfie) { _fun00008_ip = 164; continue _fun00007 }
 161:
                            report = oscard;
 164:
                            entity['cursor'] = report;
                            report = tangon.messages;
                            entity['messages'] = report;
                            report = tangon.channels;
                            if(!(zuuluu == report)) { _fun00008_ip = 194; continue _fun00007 }
 190:
                            report = new Array(0);
 194:
                            entity['channels'] = report;
                            report = tangon.threads;
                            if(!(zuuluu == report)) { _fun00008_ip = 213; continue _fun00007 }
 209:
                            report = new Array(0);
 213:
                            entity['threads'] = report;
                            report = tangon.members;
                            if(!(zuuluu == report)) { _fun00008_ip = 232; continue _fun00007 }
 228:
                            report = new Array(0);
 232:
                            tangon = report.map;
                            zuuluu = function(argFoo) {
                                michal = _closure1_slot1;
                                zuuluu = _closure1_slot3;
                                entity = 7;
                                entity = zuuluu[entity];
                                zuuluu = undefined;
                                michal = michal.bind(zuuluu)(entity);
                                entity = argFoo;
                                entity = michal.bind(zuuluu)(entity);
                                return entity;
                            };
                            zuuluu = tangon.bind(report)(zuuluu);
                            entity['members'] = zuuluu;
                            michal = _closure3_slot0;
                            zuuluu = michal.doing_deep_historical_index;
                            entity['doingHistoricalIndex'] = zuuluu;
                            michal = michal.documents_indexed;
                            entity['documentsIndexed'] = michal;
                            return entity;
                        }
                    };
                    option = verify.bind(tangon)(option);
                    zuuluu['data'] = option;
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    zuuluu = tangon.forEach;
                    michal = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            tangon = argFoo;
                            michal = tangon[Symbol.iterator];
                            tangon = michal().next;
                            entity = tangon().value;
                            zuuluu = michal;
                            entity = undefined;
                            zuuluu = zuuluu === entity;
                            golfie = undefined;
                            if(zuuluu) { _fun00010_ip = 49; continue _fun00009 }
 24:
                            report = tangon().value;
                            tangon = michal;
                            tangon = tangon === entity;
                            golfie = undefined;
                            zuuluu = tangon;
                            if(tangon) { _fun00010_ip = 49; continue _fun00009 }
 43:
                            golfie = report;
                            zuuluu = tangon;
 49:
                            if(zuuluu) { _fun00010_ip = 55; continue _fun00009 }
 52:
                            michal.return();
 55:
                            zuuluu = _closure1_slot1;
                            verify = _closure1_slot3;
                            michal = 5;
                            michal = verify[michal];
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.dispatch;
                            michal = {};
                            oscard = 'SEARCH_FINISH';
                            michal['type'] = oscard;
                            oscard = _closure1_slot0;
                            report = 3;
                            option = verify[report];
                            yankee = oscard.bind(entity)(option);
                            offset = yankee.getBackwardCompatibilitySearchId;
                            option = _closure2_slot0;
                            offset = offset.bind(yankee)(option);
                            michal['searchId'] = offset;
                            report = verify[report];
                            oscard = oscard.bind(entity)(report);
                            report = oscard.getGuildIdFromSearchContext;
                            report = report.bind(oscard)(option);
                            michal['guildId'] = report;
                            oscard = _closure3_slot0;
                            oscard = oscard.analytics_id;
                            michal['analyticsId'] = oscard;
                            oscard = golfie.total_results;
                            michal['totalResults'] = oscard;
                            oscard = golfie.channels;
                            michal['channels'] = oscard;
                            oscard = golfie.messages;
                            michal['messages'] = oscard;
                            option = golfie.threads;
                            oscard = null;
                            if(!(oscard == option)) { _fun00010_ip = 223; continue _fun00009 }
 219:
                            option = new Array(0);
 223:
                            michal['threads'] = option;
                            option = golfie.members;
                            if(!(oscard == option)) { _fun00010_ip = 242; continue _fun00009 }
 238:
                            option = new Array(0);
 242:
                            golfie = option.map;
                            oscard = function(argFoo) {
                                michal = _closure1_slot1;
                                zuuluu = _closure1_slot3;
                                entity = 7;
                                entity = zuuluu[entity];
                                zuuluu = undefined;
                                michal = michal.bind(zuuluu)(entity);
                                entity = argFoo;
                                entity = michal.bind(zuuluu)(entity);
                                return entity;
                            };
                            oscard = golfie.bind(option)(oscard);
                            michal['members'] = oscard;
                            oscard = false;
                            michal['hasError'] = oscard;
                            report = _closure3_slot0;
                            oscard = report.doing_deep_historical_index;
                            michal['doingHistoricalIndex'] = oscard;
                            report = report.documents_indexed;
                            michal['documentsIndexed'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = _closure2_slot2;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00006_ip = 168; continue _fun00005 }
 143:
                    zuuluu = _closure2_slot2;
                    michal = {};
                    report = _closure2_slot0;
                    michal['searchContext'] = report;
                    michal['tabEntries'] = tangon;
                    michal = zuuluu.bind(entity)(michal);
 168:
                    return entity;
                }
            };
            michal = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot3;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'SEARCH_MESSAGES_INDEXING';
                michal['type'] = report;
                report = _closure2_slot4;
                michal['ids'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = function(argFoo) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot3;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'SEARCH_MESSAGES_FAILURE';
                michal['type'] = report;
                report = _closure2_slot4;
                michal['ids'] = report;
                report = argFoo;
                michal['error'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = tangon.bind(report)(zuuluu, michal, entity);
            entity = true;
            return entity;
        }
    };
    michal['fetchMessages'] = golfie;
    golfie = function() { // Original name: clearSearchRecentMessages
        zuuluu = _closure1_slot1;
        michal = _closure1_slot3;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'SEARCH_RECENT_MESSAGES_CLEAR';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['clearSearchRecentMessages'] = golfie;
    golfie = function() { // Original name: clearAllSearchStates
        zuuluu = _closure1_slot1;
        michal = _closure1_slot3;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'SEARCH_MESSAGES_CLEAR_ALL';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['clearAllSearchStates'] = golfie;
    golfie = function(argFoo) { // Original name: clearSearchState
        zuuluu = _closure1_slot1;
        michal = _closure1_slot3;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'SEARCH_MESSAGES_CLEAR';
        michal['type'] = report;
        report = argFoo;
        michal['id'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['clearSearchState'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: addSearchHistoryItem
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            oscard = argFoo;
            zuuluu = oscard.type;
            michal = _closure1_slot5;
            michal = michal.DMS;
            if(!(zuuluu !== michal)) { _fun00012_ip = 44; continue _fun00011 }
 25:
            zuuluu = oscard.type;
            michal = _closure1_slot5;
            michal = michal.GUILD;
            if(!(zuuluu === michal)) { _fun00012_ip = 126; continue _fun00011 }
 44:
            tangon = _closure1_slot0;
            report = _closure1_slot3;
            michal = 3;
            michal = report[michal];
            zuuluu = undefined;
            tangon = tangon.bind(zuuluu)(michal);
            michal = tangon.getSearchContextId;
            tangon = michal.bind(tangon)(oscard);
            michal = _closure1_slot1;
            entity = 5;
            entity = report[entity];
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.dispatch;
            entity = {};
            report = 'SEARCH_HISTORY_ADD_ITEM';
            entity['type'] = report;
            entity['id'] = tangon;
            tangon = argBar;
            entity['item'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 126:
            entity = undefined;
            return entity;
        }
    };
    michal['addSearchHistoryItem'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: removeSearchHistoryItem
        report = _closure1_slot0;
        tangon = _closure1_slot3;
        entity = 3;
        zuuluu = tangon[entity];
        entity = undefined;
        oscard = report.bind(entity)(zuuluu);
        report = oscard.getSearchContextId;
        zuuluu = argFoo;
        report = report.bind(oscard)(zuuluu);
        zuuluu = _closure1_slot1;
        michal = 5;
        michal = tangon[michal];
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        oscard = 'SEARCH_HISTORY_REMOVE_ITEM';
        michal['type'] = oscard;
        michal['id'] = report;
        report = argBar;
        michal['item'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['removeSearchHistoryItem'] = golfie;
    golfie = function(argFoo) { // Original name: clearSearchHistory
        report = _closure1_slot0;
        tangon = _closure1_slot3;
        entity = 3;
        zuuluu = tangon[entity];
        entity = undefined;
        oscard = report.bind(entity)(zuuluu);
        report = oscard.getSearchContextId;
        zuuluu = argFoo;
        report = report.bind(oscard)(zuuluu);
        zuuluu = _closure1_slot1;
        michal = 5;
        michal = tangon[michal];
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        oscard = 'SEARCH_HISTORY_CLEAR_ITEMS';
        michal['type'] = oscard;
        michal['id'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['clearSearchHistory'] = golfie;
    tangon = function(argFoo) { // Original name: openSearchScreen
        report = _closure1_slot0;
        tangon = _closure1_slot3;
        entity = 3;
        zuuluu = tangon[entity];
        entity = undefined;
        oscard = report.bind(entity)(zuuluu);
        report = oscard.getBackwardCompatibilitySearchId;
        zuuluu = argFoo;
        report = report.bind(oscard)(zuuluu);
        zuuluu = _closure1_slot1;
        michal = 5;
        michal = tangon[michal];
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        oscard = 'SEARCH_SCREEN_OPEN';
        michal['type'] = oscard;
        michal['searchId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['openSearchScreen'] = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/SearchActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();