// app/modules/search_v2/native/SearchActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    offset = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = offset;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golfie;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: fetchBulk
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            verify = argBar;
            tangon = argBaz;
            var _closure2_slot0 = report;
            var _closure2_slot1 = tangon;
            golfie = _closure1_slot0;
            entity = _closure1_slot3;
            option = 4;
            oscard = entity[option];
            entity = undefined;
            offset = golfie.bind(entity)(oscard);
            golfie = offset.getSearchTabFetchId;
            oscard = 0;
            oscard = verify[oscard];
            offset = golfie.bind(offset)(report, oscard, tangon);
            golfie = _closure1_slot4;
            oscard = golfie.getIsFetching;
            oscard = oscard.bind(golfie)(offset);
            if(oscard) { _fun00002_ip = 436; continue _fun00001 }
 84:
            yankee = _closure1_slot2;
            oscard = _closure1_slot3;
            offset = 5;
            golfie = oscard[offset];
            romeon = yankee.bind(entity)(golfie);
            golfie = romeon.tokenizeQuery;
            romeon = golfie.bind(romeon)(tangon);
            golfie = oscard[offset];
            yankee = yankee.bind(entity)(golfie);
            golfie = yankee.getSearchQueryFromTokens;
            romeon = golfie.bind(yankee)(romeon);
            golfie = _closure1_slot0;
            oscard = oscard[option];
            golfie = golfie.bind(entity)(oscard);
            oscard = golfie.getGuildIdFromSearchContext;
            option = oscard.bind(golfie)(report);
            var _closure2_slot2 = option;
            oscard = null;
            if(!(oscard != option)) { _fun00002_ip = 198; continue _fun00001 }
 169:
            golfie = _closure1_slot2;
            oscard = _closure1_slot3;
            oscard = oscard[offset];
            golfie = golfie.bind(entity)(oscard);
            oscard = golfie.setIncludeNSFW;
            oscard = oscard.bind(golfie)(romeon, option);
 198:
            offset = _closure1_slot1;
            yankee = _closure1_slot3;
            oscard = 6;
            oscard = yankee[oscard];
            option = offset.bind(entity)(oscard);
            golfie = option.getSearchTabFetcher;
            foxtra = argCor;
            result = option;
            output = report;
            sizing = romeon;
            kiloes = tangon;
            backup = verify;
            oscard = result[golfie](output, sizing, kiloes, backup, foxtra, romeon);
            golfie = _closure1_slot5;
            golfie = golfie.bind(entity)(report);
            option = 7;
            option = yankee[option];
            offset = offset.bind(entity)(option);
            option = offset.incrementSearchCount;
            option = option.bind(offset)(report, golfie);
            if(!golfie) { _fun00002_ip = 324; continue _fun00001 }
 286:
            option = _closure1_slot0;
            offset = _closure1_slot3;
            golfie = 8;
            golfie = offset[golfie];
            offset = option.bind(entity)(golfie);
            option = offset.trackSearchFiltersApplied;
            golfie = {};
            golfie['searchContext'] = report;
            golfie = option.bind(offset)(golfie);
 324:
            option = verify.map;
            golfie = function(argFoo) {
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
            offset = option.bind(verify)(golfie);
            var _closure2_slot3 = offset;
            option = _closure1_slot1;
            verify = _closure1_slot3;
            golfie = 9;
            golfie = verify[golfie];
            verify = option.bind(entity)(golfie);
            option = verify.dispatch;
            golfie = {};
            yankee = 'SEARCH_MESSAGES_START';
            golfie['type'] = yankee;
            golfie['ids'] = offset;
            golfie = option.bind(verify)(golfie);
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.bind(entity)(report, tangon);
            report = oscard.fetch;
            tangon = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    entity = entity.body;
                    var _closure3_slot0 = entity;
                    michal = global;
                    tangon = michal.Object;
                    michal = tangon.entries;
                    entity = entity.tabs;
                    oscard = michal.bind(tangon)(entity);
                    report = _closure1_slot1;
                    tangon = _closure1_slot3;
                    entity = 9;
                    tangon = tangon[entity];
                    entity = undefined;
                    option = report.bind(entity)(tangon);
                    golfie = option.dispatch;
                    tangon = {};
                    report = 'SEARCH_MESSAGES_SUCCESS';
                    tangon['type'] = report;
                    verify = _closure2_slot2;
                    tangon['guildId'] = verify;
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
                    tangon['data'] = verify;
                    tangon = golfie.bind(option)(tangon);
                    golfie = oscard.forEach;
                    tangon = function(argFoo) {
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
                    tangon = golfie.bind(oscard)(tangon);
                    tangon = oscard.every;
                    zuuluu = function(argFoo) {
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
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    if(!zuuluu) { _fun00004_ip = 196; continue _fun00003 }
 154:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot3;
                    michal = 8;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.trackSearchResultEmpty;
                    michal = {};
                    report = _closure2_slot0;
                    michal['searchContext'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 196:
                    return entity;
                }
            };
            zuuluu = function() {
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
                report = _closure2_slot3;
                michal['ids'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = function(argFoo) {
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
                report = _closure2_slot3;
                michal['ids'] = report;
                report = argFoo;
                michal['error'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = report.bind(oscard)(tangon, zuuluu, michal);
 436:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: _getLimit
        entity = global;
        tangon = entity.Math;
        zuuluu = tangon.min;
        michal = _closure1_slot9;
        entity = argFoo;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: getInitialFetchLimit
        zuuluu = _closure1_slot16;
        michal = _closure1_slot12;
        entity = argFoo;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: getNextFetchLimit
        zuuluu = _closure1_slot16;
        michal = _closure1_slot12;
        entity = argFoo;
        michal = michal[entity];
        entity = 2;
        michal = entity * michal;
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot18 = entity;
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
    var _closure1_slot19 = option;
    michal = function(argFoo) { // Original name: fetchInitialMessages
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            oscard = argFoo;
            zuuluu = oscard.type;
            michal = _closure1_slot14;
            michal = michal.THREAD;
            if(!(zuuluu !== michal)) { _fun00012_ip = 165; continue _fun00011 }
 28:
            michal = _closure1_slot19;
            report = undefined;
            michal = michal.bind(report)();
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot3;
            michal = 6;
            michal = tangon[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.cancelInFlightRequests;
            michal = michal.bind(zuuluu)(oscard);
            michal = _closure1_slot7;
            tangon = michal.bind(report)(oscard);
            michal = _closure1_slot6;
            michal = michal.bind(report)(oscard);
            if(michal) { _fun00012_ip = 96; continue _fun00011 }
 90:
            zuuluu = _closure1_slot10;
            _fun00012_ip = 142; continue _fun00011;
 96:
            golfie = oscard.type;
            michal = _closure1_slot14;
            michal = michal.GUILD_CHANNEL;
            if(!(michal !== golfie)) { _fun00012_ip = 135; continue _fun00011 }
 115:
            michal = _closure1_slot14;
            michal = michal.CHANNEL;
            if(!(michal !== golfie)) { _fun00012_ip = 135; continue _fun00011 }
 129:
            michal = _closure1_slot13;
            _fun00012_ip = 139; continue _fun00011;
 135:
            michal = _closure1_slot11;
 139:
            zuuluu = michal;
 142:
            michal = _closure1_slot15;
            option = _closure1_slot17;
            romeon = undefined;
            yankee = oscard;
            offset = zuuluu;
            verify = tangon;
            entity = romeon[michal](yankee, offset, verify, option, golfie);
 165:
            entity = undefined;
            return entity;
        }
    };
    romeon = function(argFoo) { // Original name: syncAutocomplete
        option = argFoo;
        zuuluu = _closure1_slot0;
        golfie = _closure1_slot3;
        entity = 4;
        michal = golfie[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        michal = report.getBackwardCompatibilitySearchId;
        oscard = michal.bind(report)(option);
        report = _closure1_slot7;
        michal = true;
        michal = report.bind(entity)(option, michal);
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
    tangon = oscard.bind(entity)(tangon);
    verify = tangon.getHasUserAddedSearchTags;
    var _closure1_slot5 = verify;
    verify = tangon.getIsInitialSearchQuery;
    var _closure1_slot6 = verify;
    verify = tangon.getSearchQueryString;
    var _closure1_slot7 = verify;
    tangon = tangon.setSearchResultsQuery;
    var _closure1_slot8 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    verify = tangon.MAX_SEARCH_RESULTS_LIMIT;
    var _closure1_slot9 = verify;
    verify = tangon.MESSAGE_SEARCH_RESULT_TABS;
    var _closure1_slot10 = verify;
    verify = tangon.CHANNEL_SEARCH_INITIAL_MESSAGE_TABS;
    var _closure1_slot11 = verify;
    verify = tangon.SEARCH_TABS_TO_SEARCH_QUERY_LIMITS;
    var _closure1_slot12 = verify;
    tangon = tangon.SEARCH_INITIAL_MESSAGE_TABS;
    var _closure1_slot13 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.SearchTypes;
    var _closure1_slot14 = tangon;
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
    foxtra = function(argFoo, argBar) { // Original name: fetchNextMessages
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            oscard = argFoo;
            golfie = argBar;
            zuuluu = _closure1_slot7;
            entity = undefined;
            report = zuuluu.bind(entity)(oscard);
            tangon = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 4;
            zuuluu = option[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.getSearchTabFetchId;
            verify = zuuluu.bind(tangon)(oscard, golfie, report);
            tangon = _closure1_slot4;
            zuuluu = tangon.getHasNextPage;
            zuuluu = zuuluu.bind(tangon)(verify);
            option = _closure1_slot4;
            tangon = option.getIsInitialFetchComplete;
            tangon = tangon.bind(option)(verify);
            if(!zuuluu) { _fun00014_ip = 91; continue _fun00013 }
 88:
            zuuluu = tangon;
 91:
            if(!zuuluu) { _fun00014_ip = 125; continue _fun00013 }
 94:
            tangon = _closure1_slot15;
            zuuluu = new Array(1);
            zuuluu[0] = golfie;
            offset = _closure1_slot18;
            backup = undefined;
            foxtra = oscard;
            romeon = zuuluu;
            yankee = report;
            michal = backup[tangon](foxtra, romeon, yankee, offset, verify);
 125:
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
            michal = _closure1_slot14;
            michal = michal.DMS;
            if(!(zuuluu !== michal)) { _fun00016_ip = 44; continue _fun00015 }
 25:
            zuuluu = oscard.type;
            michal = _closure1_slot14;
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
    report = 'modules/search_v2/native/SearchActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['fetchInitialMessages'] = michal;
    return entity;
})();