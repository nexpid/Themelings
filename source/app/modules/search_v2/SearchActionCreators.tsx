// app/modules/search_v2/SearchActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    oscard = argBar;
    offset = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = offset;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golfie;
    entity = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: fetchBulk
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            option = argBar;
            romeon = argBaz;
            var _closure2_slot0 = oscard;
            var _closure2_slot1 = romeon;
            michal = argGra;
            var _closure2_slot2 = michal;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot3;
            report = 4;
            zuuluu = zuuluu[report];
            golfie = undefined;
            verify = tangon.bind(golfie)(zuuluu);
            tangon = verify.getSearchTabFetchId;
            zuuluu = 0;
            zuuluu = option[zuuluu];
            verify = tangon.bind(verify)(oscard, zuuluu, romeon);
            tangon = _closure1_slot4;
            zuuluu = tangon.getIsFetching;
            zuuluu = zuuluu.bind(tangon)(verify);
            if(zuuluu) { _fun00002_ip = 474; continue _fun00001 }
 91:
            offset = _closure1_slot2;
            zuuluu = _closure1_slot3;
            verify = 5;
            tangon = zuuluu[verify];
            yankee = offset.bind(golfie)(tangon);
            tangon = yankee.tokenizeQuery;
            yankee = tangon.bind(yankee)(romeon);
            tangon = zuuluu[verify];
            offset = offset.bind(golfie)(tangon);
            tangon = offset.getSearchQueryFromTokens;
            yankee = tangon.bind(offset)(yankee);
            tangon = _closure1_slot0;
            zuuluu = zuuluu[report];
            tangon = tangon.bind(golfie)(zuuluu);
            zuuluu = tangon.getGuildIdFromSearchContext;
            report = zuuluu.bind(tangon)(oscard);
            var _closure2_slot3 = report;
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00002_ip = 205; continue _fun00001 }
 176:
            tangon = _closure1_slot2;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[verify];
            tangon = tangon.bind(golfie)(zuuluu);
            zuuluu = tangon.setIncludeNSFW;
            zuuluu = zuuluu.bind(tangon)(yankee, report);
 205:
            verify = _closure1_slot1;
            offset = _closure1_slot3;
            zuuluu = 6;
            zuuluu = offset[zuuluu];
            report = verify.bind(golfie)(zuuluu);
            tangon = report.getSearchTabFetcher;
            foxtra = argCor;
            result = report;
            output = oscard;
            sizing = yankee;
            kiloes = romeon;
            backup = option;
            report = result[tangon](output, sizing, kiloes, backup, foxtra, romeon);
            yankee = _closure1_slot5;
            tangon = yankee.getState;
            zuuluu = function(argFoo) {
                michal = argFoo;
                entity = michal.hasUserAddedTags;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = tangon.bind(yankee)(oscard, zuuluu);
            tangon = 7;
            tangon = offset[tangon];
            verify = verify.bind(golfie)(tangon);
            tangon = verify.incrementSearchCount;
            tangon = tangon.bind(verify)(oscard, zuuluu);
            if(!zuuluu) { _fun00002_ip = 345; continue _fun00001 }
 307:
            tangon = _closure1_slot0;
            verify = _closure1_slot3;
            zuuluu = 8;
            zuuluu = verify[zuuluu];
            verify = tangon.bind(golfie)(zuuluu);
            tangon = verify.trackSearchFiltersApplied;
            zuuluu = {};
            zuuluu['searchContext'] = oscard;
            zuuluu = tangon.bind(verify)(zuuluu);
 345:
            tangon = option.map;
            zuuluu = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot3;
                entity = 4;
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
            option = tangon.bind(option)(zuuluu);
            var _closure2_slot4 = option;
            tangon = _closure1_slot1;
            verify = _closure1_slot3;
            zuuluu = 9;
            zuuluu = verify[zuuluu];
            golfie = tangon.bind(golfie)(zuuluu);
            tangon = golfie.dispatch;
            zuuluu = {};
            verify = 'SEARCH_MESSAGES_START';
            zuuluu['type'] = verify;
            zuuluu['ids'] = option;
            zuuluu = tangon.bind(golfie)(zuuluu);
            tangon = _closure1_slot5;
            zuuluu = tangon.setState;
            michal = function(argFoo) {
                zuuluu = argFoo;
                michal = zuuluu.setSearchResultsQuery;
                entity = _closure2_slot1;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(oscard, michal);
            tangon = report.fetch;
            zuuluu = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    entity = entity.body;
                    var _closure3_slot0 = entity;
                    michal = global;
                    zuuluu = michal.Object;
                    michal = zuuluu.entries;
                    entity = entity.tabs;
                    oscard = michal.bind(zuuluu)(entity);
                    report = _closure1_slot1;
                    michal = _closure1_slot3;
                    entity = 9;
                    michal = michal[entity];
                    entity = undefined;
                    option = report.bind(entity)(michal);
                    golfie = option.dispatch;
                    report = {};
                    michal = 'SEARCH_MESSAGES_SUCCESS';
                    report['type'] = michal;
                    verify = _closure2_slot3;
                    report['guildId'] = verify;
                    offset = oscard.map;
                    verify = function(argFoo) {
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
                            entity = 4;
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
                            report = 10;
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
                                entity = 11;
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
                    verify = offset.bind(oscard)(verify);
                    report['data'] = verify;
                    report = golfie.bind(option)(report);
                    golfie = oscard.forEach;
                    report = function(argFoo) {
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
                            michal = 9;
                            michal = verify[michal];
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.dispatch;
                            michal = {};
                            oscard = 'SEARCH_FINISH';
                            michal['type'] = oscard;
                            oscard = _closure1_slot0;
                            report = 4;
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
                                entity = 11;
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
                    report = golfie.bind(oscard)(report);
                    report = oscard.every;
                    tangon = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            tangon = argFoo;
                            entity = tangon[Symbol.iterator];
                            tangon = entity().next;
                            michal = tangon().value;
                            michal = entity;
                            oscard = undefined;
                            zuuluu = michal === oscard;
                            michal = undefined;
                            if(zuuluu) { _fun00010_ip = 49; continue _fun00009 }
 24:
                            report = tangon().value;
                            tangon = entity;
                            tangon = tangon === oscard;
                            michal = undefined;
                            zuuluu = tangon;
                            if(tangon) { _fun00010_ip = 49; continue _fun00009 }
 43:
                            michal = report;
                            zuuluu = tangon;
 49:
                            if(zuuluu) { _fun00010_ip = 55; continue _fun00009 }
 52:
                            entity.return();
 55:
                            zuuluu = michal.total_results;
                            entity = 0;
                            entity = entity === zuuluu;
                            if(entity) { _fun00010_ip = 82; continue _fun00009 }
 70:
                            zuuluu = michal.total_results;
                            michal = null;
                            entity = michal == zuuluu;
 82:
                            return entity;
                        }
                    };
                    tangon = report.bind(oscard)(tangon);
                    if(!tangon) { _fun00004_ip = 196; continue _fun00003 }
 154:
                    tangon = _closure1_slot0;
                    report = _closure1_slot3;
                    zuuluu = 8;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.trackSearchResultEmpty;
                    zuuluu = {};
                    oscard = _closure2_slot0;
                    zuuluu['searchContext'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 196:
                    tangon = _closure2_slot2;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00004_ip = 214; continue _fun00003 }
 206:
                    michal = _closure2_slot2;
                    michal = michal.bind(entity)();
 214:
                    return entity;
                }
            };
            michal = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot3;
                entity = 9;
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
                entity = 9;
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
 474:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: _getLimit
        entity = global;
        tangon = entity.Math;
        zuuluu = tangon.min;
        michal = _closure1_slot6;
        entity = argFoo;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: getInitialFetchLimit
        zuuluu = _closure1_slot13;
        michal = _closure1_slot9;
        entity = argFoo;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: getNextFetchLimit
        zuuluu = _closure1_slot13;
        michal = _closure1_slot9;
        entity = argFoo;
        michal = michal[entity];
        entity = 2;
        michal = entity * michal;
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot15 = entity;
    option = function() { // Original name: clearSearch
        zuuluu = _closure1_slot1;
        michal = _closure1_slot3;
        entity = 9;
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
    var _closure1_slot16 = option;
    michal = function(argFoo) { // Original name: fetchInitialMessages
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            oscard = argFoo;
            tangon = oscard.type;
            zuuluu = _closure1_slot11;
            zuuluu = zuuluu.THREAD;
            if(!(tangon !== zuuluu)) { _fun00012_ip = 229; continue _fun00011 }
 30:
            zuuluu = _closure1_slot16;
            report = undefined;
            zuuluu = zuuluu.bind(report)();
            tangon = _closure1_slot1;
            golfie = _closure1_slot3;
            zuuluu = 6;
            zuuluu = golfie[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.cancelInFlightRequests;
            zuuluu = zuuluu.bind(tangon)(oscard);
            tangon = _closure1_slot0;
            zuuluu = 8;
            zuuluu = golfie[zuuluu];
            golfie = tangon.bind(report)(zuuluu);
            tangon = golfie.trackSearchStarted;
            zuuluu = {};
            zuuluu['searchContext'] = oscard;
            zuuluu = tangon.bind(golfie)(zuuluu);
            golfie = _closure1_slot5;
            tangon = golfie.getState;
            zuuluu = function(argFoo) {
                michal = argFoo;
                entity = michal.getQueryString;
                entity = entity.bind(michal)();
                return entity;
            };
            tangon = tangon.bind(golfie)(oscard, zuuluu);
            golfie = _closure1_slot5;
            zuuluu = golfie.getState;
            michal = function(argFoo) {
                michal = argFoo;
                entity = michal.isInitialSearchQuery;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = zuuluu.bind(golfie)(oscard, michal);
            if(michal) { _fun00012_ip = 160; continue _fun00011 }
 154:
            zuuluu = _closure1_slot7;
            _fun00012_ip = 206; continue _fun00011;
 160:
            golfie = oscard.type;
            michal = _closure1_slot11;
            michal = michal.GUILD_CHANNEL;
            if(!(michal !== golfie)) { _fun00012_ip = 199; continue _fun00011 }
 179:
            michal = _closure1_slot11;
            michal = michal.CHANNEL;
            if(!(michal !== golfie)) { _fun00012_ip = 199; continue _fun00011 }
 193:
            michal = _closure1_slot10;
            _fun00012_ip = 203; continue _fun00011;
 199:
            michal = _closure1_slot8;
 203:
            zuuluu = michal;
 206:
            michal = _closure1_slot12;
            verify = _closure1_slot14;
            foxtra = undefined;
            romeon = oscard;
            yankee = zuuluu;
            offset = tangon;
            entity = foxtra[michal](romeon, yankee, offset, verify, option);
 229:
            entity = undefined;
            return entity;
        }
    };
    romeon = function(argFoo) { // Original name: syncAutocomplete
        verify = argFoo;
        zuuluu = _closure1_slot0;
        golfie = _closure1_slot3;
        entity = 4;
        michal = golfie[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        michal = report.getBackwardCompatibilitySearchId;
        oscard = michal.bind(report)(verify);
        option = _closure1_slot5;
        report = option.getState;
        michal = function(argFoo) {
            zuuluu = argFoo;
            michal = zuuluu.getQueryString;
            entity = true;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = report.bind(option)(verify, michal);
        option = _closure1_slot2;
        tangon = 5;
        report = golfie[tangon];
        verify = option.bind(entity)(report);
        report = verify.tokenizeQuery;
        report = report.bind(verify)(michal);
        tangon = golfie[tangon];
        verify = option.bind(entity)(tangon);
        option = verify.getSelectionScope;
        tangon = michal.length;
        offset = 1;
        tangon = tangon - offset;
        michal = michal.length;
        michal = michal - offset;
        tangon = option.bind(verify)(report, tangon, michal);
        michal = 12;
        michal = golfie[michal];
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.updateAutocompleteQuery;
        michal = michal.bind(zuuluu)(oscard, report, tangon);
        return entity;
    };
    entity = global;
    yankee = entity.Object;
    verify = yankee.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(yankee)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = offset.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = offset.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    verify = tangon.MAX_SEARCH_RESULTS_LIMIT;
    var _closure1_slot6 = verify;
    verify = tangon.MESSAGE_SEARCH_RESULT_TABS;
    var _closure1_slot7 = verify;
    verify = tangon.CHANNEL_SEARCH_INITIAL_MESSAGE_TABS;
    var _closure1_slot8 = verify;
    verify = tangon.SEARCH_TABS_TO_SEARCH_QUERY_LIMITS;
    var _closure1_slot9 = verify;
    tangon = tangon.SEARCH_INITIAL_MESSAGE_TABS;
    var _closure1_slot10 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.SearchTypes;
    var _closure1_slot11 = tangon;
    tangon = {};
    verify = function() { // Original name: clearSearchRecentMessages
        zuuluu = _closure1_slot1;
        michal = _closure1_slot3;
        entity = 9;
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
    tangon['clearSearchRecentMessages'] = verify;
    tangon['fetchInitialMessages'] = michal;
    verify = 10;
    yankee = golfie[verify];
    backup = offset.bind(entity)(yankee);
    foxtra = backup.debounce;
    yankee = 500;
    foxtra = foxtra.bind(backup)(michal, yankee);
    tangon['fetchInitialMessagesDebounced'] = foxtra;
    foxtra = function(argFoo, argBar, argBaz) { // Original name: fetchNextMessages
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            option = argFoo;
            zuuluu = argBar;
            report = _closure1_slot5;
            tangon = report.getState;
            entity = function(argFoo) {
                michal = argFoo;
                entity = michal.getQueryString;
                entity = entity.bind(michal)();
                return entity;
            };
            golfie = tangon.bind(report)(option, entity);
            tangon = _closure1_slot0;
            report = _closure1_slot3;
            entity = 4;
            entity = report[entity];
            oscard = undefined;
            tangon = tangon.bind(oscard)(entity);
            entity = tangon.getSearchTabFetchId;
            verify = entity.bind(tangon)(option, zuuluu, golfie);
            tangon = _closure1_slot4;
            entity = tangon.getHasNextPage;
            tangon = entity.bind(tangon)(verify);
            report = _closure1_slot4;
            entity = report.getIsInitialFetchComplete;
            entity = entity.bind(report)(verify);
            tangon = !tangon;
            if(tangon) { _fun00014_ip = 110; continue _fun00013 }
 107:
            tangon = !entity;
 110:
            entity = !tangon;
            if(tangon) { _fun00014_ip = 150; continue _fun00013 }
 116:
            report = _closure1_slot12;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            yankee = _closure1_slot15;
            offset = argBaz;
            kiloes = undefined;
            backup = option;
            foxtra = tangon;
            romeon = golfie;
            entity = kiloes[report](backup, foxtra, romeon, yankee, offset, verify);
 150:
            return entity;
        }
    };
    tangon['fetchNextMessages'] = foxtra;
    tangon['syncAutocomplete'] = romeon;
    verify = golfie[verify];
    offset = offset.bind(entity)(verify);
    verify = offset.debounce;
    verify = verify.bind(offset)(romeon, yankee);
    tangon['syncAutocompleteDebounced'] = verify;
    tangon['clearSearch'] = option;
    option = function(argFoo, argBar) { // Original name: addSearchHistoryItem
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            oscard = argFoo;
            zuuluu = oscard.type;
            michal = _closure1_slot11;
            michal = michal.DMS;
            if(!(zuuluu !== michal)) { _fun00016_ip = 44; continue _fun00015 }
 25:
            zuuluu = oscard.type;
            michal = _closure1_slot11;
            michal = michal.GUILD;
            if(!(zuuluu === michal)) { _fun00016_ip = 126; continue _fun00015 }
 44:
            tangon = _closure1_slot0;
            report = _closure1_slot3;
            michal = 4;
            michal = report[michal];
            zuuluu = undefined;
            tangon = tangon.bind(zuuluu)(michal);
            michal = tangon.getSearchContextId;
            tangon = michal.bind(tangon)(oscard);
            michal = _closure1_slot1;
            entity = 9;
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
    tangon['addSearchHistoryItem'] = option;
    option = function(argFoo, argBar) { // Original name: removeSearchHistoryItem
        report = _closure1_slot0;
        tangon = _closure1_slot3;
        entity = 4;
        zuuluu = tangon[entity];
        entity = undefined;
        oscard = report.bind(entity)(zuuluu);
        report = oscard.getSearchContextId;
        zuuluu = argFoo;
        report = report.bind(oscard)(zuuluu);
        zuuluu = _closure1_slot1;
        michal = 9;
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
    tangon['removeSearchHistoryItem'] = option;
    option = function(argFoo) { // Original name: clearSearchHistory
        report = _closure1_slot0;
        tangon = _closure1_slot3;
        entity = 4;
        zuuluu = tangon[entity];
        entity = undefined;
        oscard = report.bind(entity)(zuuluu);
        report = oscard.getSearchContextId;
        zuuluu = argFoo;
        report = report.bind(oscard)(zuuluu);
        zuuluu = _closure1_slot1;
        michal = 9;
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
    tangon['clearSearchHistory'] = option;
    report = function(argFoo) { // Original name: openSearchScreen
        report = _closure1_slot0;
        tangon = _closure1_slot3;
        entity = 4;
        zuuluu = tangon[entity];
        entity = undefined;
        oscard = report.bind(entity)(zuuluu);
        report = oscard.getBackwardCompatibilitySearchId;
        zuuluu = argFoo;
        report = report.bind(oscard)(zuuluu);
        zuuluu = _closure1_slot1;
        michal = 9;
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
    tangon['openSearchScreen'] = report;
    report = 13;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/search_v2/SearchActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['fetchInitialMessages'] = michal;
    return entity;
})();