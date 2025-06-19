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
    michal = michal.SearchTypes;
    var _closure1_slot4 = michal;
    michal = {};
    golfie = function(argFoo) { // Original name: fetchMessages
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            option = michal.searchContext;
            var _closure2_slot0 = option;
            foxtra = michal.searchTabs;
            golfie = michal.searchQueryString;
            var _closure2_slot1 = golfie;
            kiloes = michal.pagination;
            backup = michal.trackExactTotalHits;
            sizing = michal.getLimit;
            tangon = michal.onFetchStart;
            michal = michal.onFetchSuccess;
            var _closure2_slot2 = michal;
            zuuluu = undefined;
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
            oscard = michal.bind(oscard)(verify);
            verify = _closure1_slot0;
            michal = 2;
            michal = offset[michal];
            verify = verify.bind(zuuluu)(michal);
            michal = verify.getGuildIdFromSearchContext;
            yankee = michal.bind(verify)(option);
            var _closure2_slot3 = yankee;
            michal = null;
            if(!(michal != yankee)) { _fun00002_ip = 191; continue _fun00001 }
 162:
            offset = _closure1_slot2;
            verify = _closure1_slot3;
            verify = verify[romeon];
            offset = offset.bind(zuuluu)(verify);
            verify = offset.setIncludeNSFW;
            verify = verify.bind(offset)(oscard, yankee);
 191:
            offset = _closure1_slot1;
            yankee = _closure1_slot3;
            report = 3;
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
                zuuluu = _closure1_slot0;
                michal = _closure1_slot3;
                entity = 2;
                michal = michal[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.getSearchTabFetchId;
                zuuluu = _closure2_slot0;
                michal = _closure2_slot1;
                entity = argFoo;
                entity = tangon.bind(report)(zuuluu, entity, michal);
                return entity;
            };
            romeon = romeon.bind(foxtra)(verify);
            _closure2_slot4 = romeon;
            verify = 4;
            verify = yankee[verify];
            yankee = offset.bind(zuuluu)(verify);
            offset = yankee.dispatch;
            verify = {};
            foxtra = 'SEARCH_MESSAGES_START';
            verify['type'] = foxtra;
            verify['ids'] = romeon;
            verify = offset.bind(yankee)(verify);
            if(!(michal != tangon)) { _fun00002_ip = 342; continue _fun00001 }
 320:
            michal = {};
            michal['searchContext'] = option;
            michal['searchQueryString'] = golfie;
            michal['searchQuery'] = oscard;
            michal = tangon.bind(zuuluu)(michal);
 342:
            tangon = report.fetch;
            zuuluu = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
                    entity = 4;
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
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            zuuluu = argFoo;
                            entity = zuuluu[Symbol.iterator];
                            zuuluu = entity().next;
                            tangon = zuuluu().value;
                            michal = entity;
                            option = undefined;
                            michal = michal === option;
                            golfie = undefined;
                            if(michal) { _fun00006_ip = 27; continue _fun00005 }
 24:
                            golfie = tangon;
 27:
                            tangon = undefined;
                            if(michal) { _fun00006_ip = 57; continue _fun00005 }
 32:
                            report = zuuluu().value;
                            zuuluu = entity;
                            zuuluu = zuuluu === option;
                            tangon = undefined;
                            michal = zuuluu;
                            if(zuuluu) { _fun00006_ip = 57; continue _fun00005 }
 51:
                            tangon = report;
                            michal = zuuluu;
 57:
                            if(michal) { _fun00006_ip = 63; continue _fun00005 }
 60:
                            entity.return();
 63:
                            michal = _closure1_slot0;
                            zuuluu = _closure1_slot3;
                            entity = 2;
                            entity = zuuluu[entity];
                            oscard = michal.bind(option)(entity);
                            zuuluu = oscard.getSearchTabFetchId;
                            michal = _closure2_slot0;
                            entity = _closure2_slot1;
                            michal = zuuluu.bind(oscard)(michal, golfie, entity);
                            oscard = tangon.cursor;
                            entity = {};
                            entity['id'] = michal;
                            zuuluu = _closure3_slot0;
                            zuuluu = zuuluu.analytics_id;
                            entity['analyticsId'] = zuuluu;
                            zuuluu = tangon.total_results;
                            entity['totalResults'] = zuuluu;
                            zuuluu = null;
                            if(!(zuuluu != oscard)) { _fun00006_ip = 193; continue _fun00005 }
 157:
                            golfie = _closure1_slot1;
                            verify = _closure1_slot3;
                            report = 5;
                            report = verify[report];
                            golfie = golfie.bind(option)(report);
                            report = golfie.isEmpty;
                            golfie = report.bind(golfie)(oscard);
                            report = null;
                            if(golfie) { _fun00006_ip = 196; continue _fun00005 }
 193:
                            report = oscard;
 196:
                            entity['cursor'] = report;
                            report = tangon.messages;
                            entity['messages'] = report;
                            report = tangon.channels;
                            if(!(zuuluu == report)) { _fun00006_ip = 226; continue _fun00005 }
 222:
                            report = new Array(0);
 226:
                            entity['channels'] = report;
                            report = tangon.threads;
                            if(!(zuuluu == report)) { _fun00006_ip = 245; continue _fun00005 }
 241:
                            report = new Array(0);
 245:
                            entity['threads'] = report;
                            report = tangon.members;
                            if(!(zuuluu == report)) { _fun00006_ip = 264; continue _fun00005 }
 260:
                            report = new Array(0);
 264:
                            tangon = report.map;
                            zuuluu = function(argFoo) {
                                michal = _closure1_slot1;
                                zuuluu = _closure1_slot3;
                                entity = 6;
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
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            tangon = argFoo;
                            michal = tangon[Symbol.iterator];
                            tangon = michal().next;
                            entity = tangon().value;
                            zuuluu = michal;
                            entity = undefined;
                            zuuluu = zuuluu === entity;
                            golfie = undefined;
                            if(zuuluu) { _fun00008_ip = 49; continue _fun00007 }
 24:
                            report = tangon().value;
                            tangon = michal;
                            tangon = tangon === entity;
                            golfie = undefined;
                            zuuluu = tangon;
                            if(tangon) { _fun00008_ip = 49; continue _fun00007 }
 43:
                            golfie = report;
                            zuuluu = tangon;
 49:
                            if(zuuluu) { _fun00008_ip = 55; continue _fun00007 }
 52:
                            michal.return();
 55:
                            zuuluu = _closure1_slot1;
                            verify = _closure1_slot3;
                            michal = 4;
                            michal = verify[michal];
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.dispatch;
                            michal = {};
                            oscard = 'SEARCH_FINISH';
                            michal['type'] = oscard;
                            oscard = _closure1_slot0;
                            report = 2;
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
                            if(!(oscard == option)) { _fun00008_ip = 223; continue _fun00007 }
 219:
                            option = new Array(0);
 223:
                            michal['threads'] = option;
                            option = golfie.members;
                            if(!(oscard == option)) { _fun00008_ip = 242; continue _fun00007 }
 238:
                            option = new Array(0);
 242:
                            golfie = option.map;
                            oscard = function(argFoo) {
                                michal = _closure1_slot1;
                                zuuluu = _closure1_slot3;
                                entity = 6;
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
                    if(!(michal != zuuluu)) { _fun00004_ip = 168; continue _fun00003 }
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
                entity = 4;
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
                entity = 4;
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
        entity = 4;
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
    golfie = function() { // Original name: clearSearch
        zuuluu = _closure1_slot1;
        michal = _closure1_slot3;
        entity = 4;
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
    michal['clearSearch'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: addSearchHistoryItem
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            oscard = argFoo;
            zuuluu = oscard.type;
            michal = _closure1_slot4;
            michal = michal.DMS;
            if(!(zuuluu !== michal)) { _fun00010_ip = 44; continue _fun00009 }
 25:
            zuuluu = oscard.type;
            michal = _closure1_slot4;
            michal = michal.GUILD;
            if(!(zuuluu === michal)) { _fun00010_ip = 126; continue _fun00009 }
 44:
            tangon = _closure1_slot0;
            report = _closure1_slot3;
            michal = 2;
            michal = report[michal];
            zuuluu = undefined;
            tangon = tangon.bind(zuuluu)(michal);
            michal = tangon.getSearchContextId;
            tangon = michal.bind(tangon)(oscard);
            michal = _closure1_slot1;
            entity = 4;
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
        entity = 2;
        zuuluu = tangon[entity];
        entity = undefined;
        oscard = report.bind(entity)(zuuluu);
        report = oscard.getSearchContextId;
        zuuluu = argFoo;
        report = report.bind(oscard)(zuuluu);
        zuuluu = _closure1_slot1;
        michal = 4;
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
        entity = 2;
        zuuluu = tangon[entity];
        entity = undefined;
        oscard = report.bind(entity)(zuuluu);
        report = oscard.getSearchContextId;
        zuuluu = argFoo;
        report = report.bind(oscard)(zuuluu);
        zuuluu = _closure1_slot1;
        michal = 4;
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
        entity = 2;
        zuuluu = tangon[entity];
        entity = undefined;
        oscard = report.bind(entity)(zuuluu);
        report = oscard.getBackwardCompatibilitySearchId;
        zuuluu = argFoo;
        report = report.bind(oscard)(zuuluu);
        zuuluu = _closure1_slot1;
        michal = 4;
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
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/SearchActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();