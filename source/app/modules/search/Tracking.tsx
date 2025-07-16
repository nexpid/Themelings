// app/modules/search/Tracking.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    offset = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: withSearchContext
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            entity = null;
            michal = entity != report;
            oscard = null;
            if(!michal) { _fun00002_ip = 50; continue _fun00001 }
 14:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 4;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = tangon.bind(michal)(zuuluu);
            michal = zuuluu.getSearchType;
            oscard = michal.bind(zuuluu)(report);
 50:
            michal = _closure1_slot7;
            michal = michal.DMS;
            if(!(oscard !== michal)) { _fun00002_ip = 182; continue _fun00001 }
 67:
            michal = _closure1_slot7;
            michal = michal.FAVORITES;
            if(!(oscard !== michal)) { _fun00002_ip = 161; continue _fun00001 }
 81:
            michal = _closure1_slot7;
            michal = michal.GUILD;
            if(!(oscard !== michal)) { _fun00002_ip = 136; continue _fun00001 }
 95:
            michal = _closure1_slot7;
            michal = michal.CHANNEL;
            tangon = null;
            if(!(oscard === michal)) { _fun00002_ip = 134; continue _fun00001 }
 111:
            michal = {};
            oscard = _closure1_slot7;
            oscard = oscard.CHANNEL;
            michal['type'] = oscard;
            michal['channelId'] = report;
            tangon = michal;
 134:
            _fun00002_ip = 159; continue _fun00001;
 136:
            michal = {};
            oscard = _closure1_slot7;
            oscard = oscard.GUILD;
            michal['type'] = oscard;
            michal['guildId'] = report;
            tangon = michal;
 159:
            _fun00002_ip = 180; continue _fun00001;
 161:
            michal = {};
            report = _closure1_slot7;
            report = report.FAVORITES;
            michal['type'] = report;
            tangon = michal;
 180:
            _fun00002_ip = 201; continue _fun00001;
 182:
            michal = {};
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.DMS;
            michal['type'] = zuuluu;
            tangon = michal;
 201:
            michal = entity != tangon;
            entity = null;
            if(!michal) { _fun00002_ip = 220; continue _fun00001 }
 210:
            zuuluu = argBar;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 220:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: getSearchSessionAnalyticsId
        tangon = _closure1_slot11;
        zuuluu = undefined;
        michal = argFoo;
        entity = function(argFoo) {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.getSessionId;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: getSearchQueryId
        tangon = _closure1_slot11;
        zuuluu = undefined;
        michal = argFoo;
        entity = function(argFoo) {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.getQueryId;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: getSearchQueryLength
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = entity == tangon;
            michal = undefined;
            if(zuuluu) { _fun00004_ip = 38; continue _fun00003 }
 14:
            zuuluu = tangon.trim;
            zuuluu = zuuluu.bind(tangon)();
            tangon = entity == zuuluu;
            michal = undefined;
            if(tangon) { _fun00004_ip = 38; continue _fun00003 }
 33:
            michal = zuuluu.length;
 38:
            zuuluu = entity != michal;
            entity = 0;
            if(!zuuluu) { _fun00004_ip = 50; continue _fun00003 }
 47:
            entity = michal;
 50:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: getSearchQueryContentLength
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            tangon = entity == zuuluu;
            michal = undefined;
            if(tangon) { _fun00006_ip = 52; continue _fun00005 }
 14:
            tangon = zuuluu.content;
            zuuluu = entity == tangon;
            michal = undefined;
            if(zuuluu) { _fun00006_ip = 52; continue _fun00005 }
 28:
            zuuluu = tangon.trim;
            zuuluu = zuuluu.bind(tangon)();
            tangon = entity == zuuluu;
            michal = undefined;
            if(tangon) { _fun00006_ip = 52; continue _fun00005 }
 47:
            michal = zuuluu.length;
 52:
            zuuluu = entity != michal;
            entity = 0;
            if(!zuuluu) { _fun00006_ip = 64; continue _fun00005 }
 61:
            entity = michal;
 64:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    tangon = global;
    verify = tangon.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 0;
    golfie = oscard[entity];
    entity = undefined;
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = oscard[golfie];
    option = report.bind(entity)(golfie);
    golfie = option.AnalyticEvents;
    var _closure1_slot4 = golfie;
    golfie = option.SearchAutocompleteGroups;
    var _closure1_slot5 = golfie;
    verify = option.SearchTokenTypes;
    var _closure1_slot6 = verify;
    option = option.SearchTypes;
    var _closure1_slot7 = option;
    option = 2;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.SearchTabs;
    var _closure1_slot8 = option;
    option = 3;
    option = oscard[option];
    yankee = offset.bind(entity)(option);
    option = yankee.prototype;
    output = Object.create(option, {constructor: {value: yankee}});
    sizing = 'SearchTracking';
    option = new output[yankee](sizing, kiloes);
    offset = tangon.Map;
    option = verify.ANSWER_IN;
    yankee = new Array(2);
    yankee[0] = option;
    romeon = 'in';
    yankee[1] = romeon;
    option = new Array(16);
    option[0] = yankee;
    foxtra = verify.FILTER_IN;
    yankee = new Array(2);
    yankee[0] = foxtra;
    yankee[1] = romeon;
    option[1] = yankee;
    romeon = verify.ANSWER_USERNAME_FROM;
    yankee = new Array(2);
    yankee[0] = romeon;
    romeon = 'from';
    yankee[1] = romeon;
    option[2] = yankee;
    foxtra = verify.FILTER_FROM;
    yankee = new Array(2);
    yankee[0] = foxtra;
    yankee[1] = romeon;
    option[3] = yankee;
    romeon = verify.ANSWER_USERNAME_MENTIONS;
    yankee = new Array(2);
    yankee[0] = romeon;
    romeon = 'mentions';
    yankee[1] = romeon;
    option[4] = yankee;
    foxtra = verify.FILTER_MENTIONS;
    yankee = new Array(2);
    yankee[0] = foxtra;
    yankee[1] = romeon;
    option[5] = yankee;
    romeon = verify.ANSWER_HAS;
    yankee = new Array(2);
    yankee[0] = romeon;
    romeon = 'has';
    yankee[1] = romeon;
    option[6] = yankee;
    foxtra = verify.FILTER_HAS;
    yankee = new Array(2);
    yankee[0] = foxtra;
    yankee[1] = romeon;
    option[7] = yankee;
    romeon = verify.ANSWER_BEFORE;
    yankee = new Array(2);
    yankee[0] = romeon;
    romeon = 'before';
    yankee[1] = romeon;
    option[8] = yankee;
    foxtra = verify.FILTER_BEFORE;
    yankee = new Array(2);
    yankee[0] = foxtra;
    yankee[1] = romeon;
    option[9] = yankee;
    romeon = verify.ANSWER_ON;
    yankee = new Array(2);
    yankee[0] = romeon;
    romeon = 'during';
    yankee[1] = romeon;
    option[10] = yankee;
    foxtra = verify.FILTER_ON;
    yankee = new Array(2);
    yankee[0] = foxtra;
    yankee[1] = romeon;
    option[11] = yankee;
    romeon = verify.ANSWER_AFTER;
    yankee = new Array(2);
    yankee[0] = romeon;
    romeon = 'after';
    yankee[1] = romeon;
    option[12] = yankee;
    foxtra = verify.FILTER_AFTER;
    yankee = new Array(2);
    yankee[0] = foxtra;
    yankee[1] = romeon;
    option[13] = yankee;
    yankee = verify.ANSWER_PINNED;
    romeon = new Array(2);
    romeon[0] = yankee;
    yankee = 'pinned';
    romeon[1] = yankee;
    option[14] = romeon;
    romeon = verify.FILTER_PINNED;
    verify = new Array(2);
    verify[0] = romeon;
    verify[1] = yankee;
    option[15] = verify;
    verify = offset.prototype;
    verify = Object.create(verify, {constructor: {value: offset}});
    output = verify;
    sizing = option;
    option = new output[offset](sizing, kiloes);
    option = option instanceof Object ? option : verify;
    var _closure1_slot9 = option;
    option = tangon.Map;
    tangon = golfie.HISTORY;
    verify = new Array(2);
    verify[0] = tangon;
    tangon = 'history';
    verify[1] = tangon;
    tangon = new Array(3);
    tangon[0] = verify;
    offset = golfie.DATES;
    verify = new Array(2);
    verify[0] = offset;
    offset = 'dates';
    verify[1] = offset;
    tangon[1] = verify;
    verify = golfie.SEARCH_OPTIONS;
    golfie = new Array(2);
    golfie[0] = verify;
    verify = 'search_options';
    golfie[1] = verify;
    tangon[2] = golfie;
    golfie = option.prototype;
    golfie = Object.create(golfie, {constructor: {value: option}});
    output = golfie;
    sizing = tangon;
    tangon = new output[option](sizing, kiloes);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot10 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search/Tracking.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: trackSearchResultViewed
        entity = argFoo;
        vacuum = entity.searchType;
        source = entity.searchId;
        ctrled = entity.searchAnalyticsId;
        update = entity.prevSearchAnalyticsId;
        echoed = entity.isError;
        result = entity.limit;
        output = entity.offset;
        sizing = entity.page;
        kiloes = entity.totalResults;
        backup = entity.pageResults;
        foxtra = entity.isIndexing;
        romeon = entity.pageNumMessages;
        yankee = entity.pageNumLinks;
        offset = entity.pageNumEmbeds;
        option = entity.pageNumAttachments;
        verify = entity.searchQueryString;
        golfie = entity.searchQuery;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot4;
        zuuluu = michal.SEARCH_RESULT_VIEWED;
        michal = {};
        michal['search_type'] = vacuum;
        michal['search_id'] = ctrled;
        michal['prev_search_id'] = update;
        update = _closure1_slot12;
        update = update.bind(entity)(source);
        michal['search_session_id'] = update;
        update = _closure1_slot13;
        update = update.bind(entity)(source);
        michal['search_query_id'] = update;
        michal['is_error'] = echoed;
        michal['limit'] = result;
        michal['offset'] = output;
        michal['page'] = sizing;
        michal['total_results'] = kiloes;
        michal['page_results'] = backup;
        michal['is_indexing'] = foxtra;
        michal['page_num_messages'] = romeon;
        michal['page_num_links'] = yankee;
        michal['page_num_embeds'] = offset;
        michal['page_num_attach'] = option;
        option = _closure1_slot14;
        option = option.bind(entity)(verify);
        michal['search_query_length'] = option;
        oscard = _closure1_slot15;
        oscard = oscard.bind(entity)(golfie);
        michal['search_query_content_length'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSearchResultViewed'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchResultSelected
        entity = argFoo;
        echoed = entity.searchType;
        result = entity.searchId;
        output = entity.searchAnalyticsId;
        sizing = entity.guildId;
        kiloes = entity.channelId;
        backup = entity.pageResults;
        foxtra = entity.totalResults;
        romeon = entity.page;
        yankee = entity.limit;
        offset = entity.offset;
        option = entity.index;
        verify = entity.searchQueryString;
        golfie = entity.searchQuery;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.track;
        michal = _closure1_slot4;
        zuuluu = michal.SEARCH_RESULT_SELECTED;
        michal = {};
        michal['search_type'] = echoed;
        michal['search_id'] = output;
        output = _closure1_slot12;
        output = output.bind(entity)(result);
        michal['search_session_id'] = output;
        output = _closure1_slot13;
        output = output.bind(entity)(result);
        michal['search_query_id'] = output;
        michal['guild_id'] = sizing;
        michal['channel_id'] = kiloes;
        michal['page_results'] = backup;
        michal['total_results'] = foxtra;
        michal['page'] = romeon;
        michal['limit'] = yankee;
        michal['offset'] = offset;
        michal['index_num'] = option;
        option = _closure1_slot14;
        option = option.bind(entity)(verify);
        michal['search_query_length'] = option;
        oscard = _closure1_slot15;
        oscard = oscard.bind(entity)(golfie);
        michal['search_query_content_length'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSearchResultSelected'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchResultSortChanged
        entity = argFoo;
        golfie = entity.searchType;
        verify = entity.searchId;
        offset = entity.searchAnalyticsId;
        oscard = entity.mode;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot4;
        zuuluu = michal.SEARCH_RESULT_SORT_CHANGED;
        michal = {};
        michal['search_id'] = offset;
        offset = _closure1_slot12;
        offset = offset.bind(entity)(verify);
        michal['search_session_id'] = offset;
        option = _closure1_slot13;
        option = option.bind(entity)(verify);
        michal['search_query_id'] = option;
        michal['search_type'] = golfie;
        michal['new_sort_type'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSearchResultSortChanged'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchResultEmpty
        entity = argFoo;
        option = entity.searchType;
        yankee = entity.searchId;
        offset = entity.searchAnalyticsId;
        verify = entity.searchQueryString;
        golfie = entity.searchQuery;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot4;
        zuuluu = michal.SEARCH_RESULT_EMPTY;
        michal = {};
        michal['search_id'] = offset;
        offset = _closure1_slot12;
        offset = offset.bind(entity)(yankee);
        michal['search_session_id'] = offset;
        offset = _closure1_slot13;
        offset = offset.bind(entity)(yankee);
        michal['search_query_id'] = offset;
        michal['search_type'] = option;
        option = _closure1_slot14;
        option = option.bind(entity)(verify);
        michal['search_query_length'] = option;
        oscard = _closure1_slot15;
        oscard = oscard.bind(entity)(golfie);
        michal['search_query_content_length'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSearchResultEmpty'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchOpened
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            oscard = entity.searchType;
            option = entity.searchId;
            zuuluu = _closure1_slot11;
            entity = undefined;
            michal = function(argFoo) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.initialize;
                michal = {};
                oscard = argFoo;
                michal['searchContext'] = oscard;
                report = _closure1_slot8;
                report = report.MESSAGES;
                michal['initialTab'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = zuuluu.bind(entity)(option, michal);
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 6;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot4;
            zuuluu = michal.SEARCH_OPENED;
            michal = {};
            verify = null;
            offset = verify != option;
            if(!offset) { _fun00008_ip = 101; continue _fun00007 }
 86:
            yankee = _closure1_slot3;
            offset = yankee.getAnalyticsId;
            verify = offset.bind(yankee)(option);
 101:
            michal['search_id'] = verify;
            golfie = _closure1_slot12;
            golfie = golfie.bind(entity)(option);
            michal['search_session_id'] = golfie;
            michal['search_type'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackSearchOpened'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchClosed
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            tangon = entity.searchId;
            option = entity.searchType;
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 6;
            zuuluu = zuuluu[entity];
            entity = undefined;
            golfie = report.bind(entity)(zuuluu);
            oscard = golfie.trackWithMetadata;
            zuuluu = _closure1_slot4;
            report = zuuluu.SEARCH_CLOSED;
            zuuluu = {};
            verify = null;
            offset = verify != tangon;
            if(!offset) { _fun00010_ip = 82; continue _fun00009 }
 67:
            yankee = _closure1_slot3;
            offset = yankee.getAnalyticsId;
            verify = offset.bind(yankee)(tangon);
 82:
            zuuluu['search_id'] = verify;
            verify = _closure1_slot12;
            verify = verify.bind(entity)(tangon);
            zuuluu['search_session_id'] = verify;
            verify = _closure1_slot13;
            verify = verify.bind(entity)(tangon);
            zuuluu['search_query_id'] = verify;
            zuuluu['search_type'] = option;
            zuuluu = oscard.bind(golfie)(report, zuuluu);
            zuuluu = _closure1_slot11;
            michal = function(argFoo) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.terminate;
                michal = argFoo;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = zuuluu.bind(entity)(tangon, michal);
            return entity;
        }
    };
    zuuluu['trackSearchClosed'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchInputCleared
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            oscard = entity.searchType;
            option = entity.searchId;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot4;
            zuuluu = michal.SEARCH_INPUT_CLEARED;
            michal = {};
            verify = null;
            offset = verify != option;
            if(!offset) { _fun00012_ip = 82; continue _fun00011 }
 67:
            yankee = _closure1_slot3;
            offset = yankee.getAnalyticsId;
            verify = offset.bind(yankee)(option);
 82:
            michal['search_id'] = verify;
            verify = _closure1_slot12;
            verify = verify.bind(entity)(option);
            michal['search_session_id'] = verify;
            golfie = _closure1_slot13;
            golfie = golfie.bind(entity)(option);
            michal['search_query_id'] = golfie;
            michal['search_type'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackSearchInputCleared'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchStarted
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            option = entity.searchType;
            offset = entity.searchId;
            output = entity.query;
            var _closure2_slot0 = output;
            kiloes = entity.queryString;
            entity = undefined;
            var _closure2_slot1 = entity;
            var _closure2_slot2 = entity;
            var _closure2_slot3 = entity;
            var _closure2_slot4 = entity;
            var _closure2_slot5 = entity;
            var _closure2_slot6 = entity;
            var _closure2_slot7 = entity;
            var _closure2_slot8 = entity;
            zuuluu = _closure1_slot11;
            michal = function(argFoo) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.refreshQueryId;
                michal = argFoo;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = zuuluu.bind(entity)(offset, michal);
            michal = global;
            zuuluu = michal.Object;
            michal = zuuluu.keys;
            golfie = michal.bind(zuuluu)(output);
            tangon = golfie.reduce;
            zuuluu = function(argFoo, argBar) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = argFoo;
                    zuuluu = argBar;
                    michal = _closure2_slot0;
                    tangon = michal[zuuluu];
                    michal = global;
                    report = michal.Array;
                    michal = report.isArray;
                    report = michal.bind(report)(tangon);
                    michal = 1;
                    if(!report) { _fun00016_ip = 46; continue _fun00015 }
 41:
                    michal = tangon.length;
 46:
                    entity[zuuluu] = michal;
                    return entity;
                }
            };
            michal = {};
            oscard = tangon.bind(golfie)(zuuluu, michal);
            yankee = null;
            if(!(yankee == kiloes)) { _fun00014_ip = 137; continue _fun00013 }
 131:
            tangon = new Array(0);
            _fun00014_ip = 168; continue _fun00013;
 137:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 8;
            michal = report[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.tokenizeQuery;
            tangon = michal.bind(zuuluu)(kiloes);
 168:
            michal = 0;
            _closure2_slot1 = michal;
            _closure2_slot2 = michal;
            _closure2_slot3 = michal;
            _closure2_slot4 = michal;
            _closure2_slot5 = michal;
            _closure2_slot6 = michal;
            _closure2_slot7 = michal;
            _closure2_slot8 = michal;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = argFoo;
                    tangon = michal.type;
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.ANSWER_IN;
                    if(!(tangon !== zuuluu)) { _fun00018_ip = 285; continue _fun00017 }
 28:
                    tangon = michal.type;
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.ANSWER_USERNAME_FROM;
                    if(!(tangon !== zuuluu)) { _fun00018_ip = 269; continue _fun00017 }
 50:
                    tangon = michal.type;
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.ANSWER_USERNAME_MENTIONS;
                    if(!(tangon !== zuuluu)) { _fun00018_ip = 253; continue _fun00017 }
 72:
                    tangon = michal.type;
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.ANSWER_HAS;
                    if(!(tangon !== zuuluu)) { _fun00018_ip = 237; continue _fun00017 }
 94:
                    tangon = michal.type;
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.ANSWER_BEFORE;
                    if(!(tangon !== zuuluu)) { _fun00018_ip = 221; continue _fun00017 }
 113:
                    tangon = michal.type;
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.ANSWER_ON;
                    if(!(tangon !== zuuluu)) { _fun00018_ip = 205; continue _fun00017 }
 132:
                    tangon = michal.type;
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.ANSWER_AFTER;
                    if(!(tangon !== zuuluu)) { _fun00018_ip = 189; continue _fun00017 }
 151:
                    michal = michal.type;
                    entity = _closure1_slot6;
                    entity = entity.ANSWER_PINNED;
                    if(!(michal === entity)) { _fun00018_ip = 299; continue _fun00017 }
 173:
                    entity = _closure2_slot8;
                    entity = entity + 1;
                    _closure2_slot8 = entity;
                    _fun00018_ip = 299; continue _fun00017;
 189:
                    entity = _closure2_slot7;
                    entity = entity + 1;
                    _closure2_slot7 = entity;
                    _fun00018_ip = 299; continue _fun00017;
 205:
                    entity = _closure2_slot6;
                    entity = entity + 1;
                    _closure2_slot6 = entity;
                    _fun00018_ip = 299; continue _fun00017;
 221:
                    entity = _closure2_slot5;
                    entity = entity + 1;
                    _closure2_slot5 = entity;
                    _fun00018_ip = 299; continue _fun00017;
 237:
                    entity = _closure2_slot4;
                    entity = entity + 1;
                    _closure2_slot4 = entity;
                    _fun00018_ip = 299; continue _fun00017;
 253:
                    entity = _closure2_slot3;
                    entity = entity + 1;
                    _closure2_slot3 = entity;
                    _fun00018_ip = 299; continue _fun00017;
 269:
                    entity = _closure2_slot2;
                    entity = entity + 1;
                    _closure2_slot2 = entity;
                    _fun00018_ip = 299; continue _fun00017;
 285:
                    entity = _closure2_slot1;
                    entity = entity + 1;
                    _closure2_slot1 = entity;
 299:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            michal = _closure1_slot13;
            michal = michal.bind(entity)(offset);
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            tangon = 6;
            zuuluu = zuuluu[tangon];
            foxtra = report.bind(entity)(zuuluu);
            romeon = foxtra.trackWithMetadata;
            zuuluu = _closure1_slot4;
            report = zuuluu.MESSAGES_SEARCH_STARTED;
            zuuluu = {};
            result = yankee != offset;
            sizing = null;
            if(!result) { _fun00014_ip = 290; continue _fun00013 }
 275:
            echoed = _closure1_slot3;
            result = echoed.getAnalyticsId;
            sizing = result.bind(echoed)(offset);
 290:
            zuuluu['search_id'] = sizing;
            sizing = _closure1_slot12;
            sizing = sizing.bind(entity)(offset);
            zuuluu['search_session_id'] = sizing;
            zuuluu['search_query_id'] = michal;
            zuuluu['search_type'] = option;
            michal = _closure1_slot14;
            michal = michal.bind(entity)(kiloes);
            zuuluu['search_query_length'] = michal;
            michal = _closure1_slot15;
            michal = michal.bind(entity)(output);
            zuuluu['search_query_content_length'] = michal;
            sizing = _closure1_slot0;
            michal = _closure1_slot2;
            kiloes = 9;
            kiloes = michal[kiloes];
            sizing = sizing.bind(entity)(kiloes);
            kiloes = sizing.searchQueryParamsToSearchMode;
            kiloes = kiloes.bind(sizing)(output);
            zuuluu['sort_type'] = kiloes;
            kiloes = _closure2_slot1;
            zuuluu['filter_in_count'] = kiloes;
            kiloes = _closure2_slot2;
            zuuluu['filter_from_count'] = kiloes;
            kiloes = _closure2_slot3;
            zuuluu['filter_mentions_count'] = kiloes;
            kiloes = _closure2_slot4;
            zuuluu['filter_has_count'] = kiloes;
            kiloes = _closure2_slot5;
            zuuluu['filter_before_count'] = kiloes;
            kiloes = _closure2_slot6;
            zuuluu['filter_during_count'] = kiloes;
            kiloes = _closure2_slot7;
            zuuluu['filter_after_count'] = kiloes;
            backup = _closure2_slot8;
            zuuluu['filter_pinned_count'] = backup;
            zuuluu = romeon.bind(foxtra)(report, zuuluu);
            zuuluu = _closure1_slot1;
            michal = michal[tangon];
            report = zuuluu.bind(entity)(michal);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot4;
            zuuluu = michal.SEARCH_STARTED;
            michal = {};
            romeon = yankee != offset;
            yankee = null;
            if(!romeon) { _fun00014_ip = 534; continue _fun00013 }
 519:
            foxtra = _closure1_slot3;
            romeon = foxtra.getAnalyticsId;
            yankee = romeon.bind(foxtra)(offset);
 534:
            michal['search_id'] = yankee;
            yankee = _closure1_slot12;
            yankee = yankee.bind(entity)(offset);
            michal['search_session_id'] = yankee;
            verify = _closure1_slot13;
            verify = verify.bind(entity)(offset);
            michal['search_query_id'] = verify;
            michal['search_type'] = option;
            golfie = golfie.length;
            michal['num_modifiers'] = golfie;
            michal['modifiers'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackSearchStarted'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchResultsFeedbackModalViewed
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            verify = entity.rating;
            golfie = entity.searchId;
            option = entity.searchType;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot4;
            zuuluu = michal.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED;
            michal = {};
            michal['rating'] = verify;
            verify = null;
            offset = verify != golfie;
            if(!offset) { _fun00020_ip = 93; continue _fun00019 }
 78:
            yankee = _closure1_slot3;
            offset = yankee.getAnalyticsId;
            verify = offset.bind(yankee)(golfie);
 93:
            michal['search_id'] = verify;
            michal['search_type'] = option;
            option = _closure1_slot12;
            option = option.bind(entity)(golfie);
            michal['search_session_id'] = option;
            oscard = _closure1_slot13;
            oscard = oscard.bind(entity)(golfie);
            michal['search_query_id'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackSearchResultsFeedbackModalViewed'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchResultsFeedbackEntrypointViewed
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            golfie = entity.searchId;
            option = entity.searchType;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot4;
            zuuluu = michal.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED;
            michal = {};
            verify = null;
            offset = verify != golfie;
            if(!offset) { _fun00022_ip = 82; continue _fun00021 }
 67:
            yankee = _closure1_slot3;
            offset = yankee.getAnalyticsId;
            verify = offset.bind(yankee)(golfie);
 82:
            michal['search_id'] = verify;
            michal['search_type'] = option;
            option = _closure1_slot12;
            option = option.bind(entity)(golfie);
            michal['search_session_id'] = option;
            oscard = _closure1_slot13;
            oscard = oscard.bind(entity)(golfie);
            michal['search_query_id'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackSearchResultsFeedbackEntrypointViewed'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchResultsFeedbackSubmitted
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            offset = entity.rating;
            romeon = entity.searchId;
            foxtra = entity.searchType;
            verify = entity.unsatisfiedQuestionOption;
            option = entity.unsatisfiedQuestionText;
            golfie = entity.describeSearchQuestionOption;
            oscard = entity.describeSearchQuestionText;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot4;
            zuuluu = michal.SEARCH_RESULTS_FEEDBACK_SUBMITTED;
            michal = {};
            backup = null;
            kiloes = backup != romeon;
            if(!kiloes) { _fun00024_ip = 120; continue _fun00023 }
 105:
            sizing = _closure1_slot3;
            kiloes = sizing.getAnalyticsId;
            backup = kiloes.bind(sizing)(romeon);
 120:
            michal['search_id'] = backup;
            michal['search_type'] = foxtra;
            foxtra = _closure1_slot12;
            foxtra = foxtra.bind(entity)(romeon);
            michal['search_session_id'] = foxtra;
            yankee = _closure1_slot13;
            yankee = yankee.bind(entity)(romeon);
            michal['search_query_id'] = yankee;
            michal['rating'] = offset;
            michal['unsatisfied_question_option'] = verify;
            michal['unsatisfied_question_text'] = option;
            michal['describe_search_question_option'] = golfie;
            michal['describe_search_question_text'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackSearchResultsFeedbackSubmitted'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchMessagesChannelPrefill
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            option = entity.searchType;
            golfie = entity.searchId;
            zuuluu = _closure1_slot11;
            entity = undefined;
            michal = function(argFoo) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.initialize;
                michal = {};
                oscard = argFoo;
                michal['searchContext'] = oscard;
                report = _closure1_slot8;
                report = report.MESSAGES;
                michal['initialTab'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = zuuluu.bind(entity)(golfie, michal);
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 6;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot4;
            zuuluu = michal.SEARCH_MESSAGES_CHANNEL_PREFILL;
            michal = {};
            michal['search_type'] = option;
            option = null;
            verify = option != golfie;
            if(!verify) { _fun00026_ip = 106; continue _fun00025 }
 91:
            offset = _closure1_slot3;
            verify = offset.getAnalyticsId;
            option = verify.bind(offset)(golfie);
 106:
            michal['search_id'] = option;
            oscard = _closure1_slot12;
            oscard = oscard.bind(entity)(golfie);
            michal['search_session_id'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackSearchMessagesChannelPrefill'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchHistoryClick
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            entity = argFoo;
            verify = entity.searchId;
            golfie = entity.searchHistoryIndex;
            oscard = entity.searchHistoryTotalResults;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 4;
            michal = tangon[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.getSearchType;
            offset = michal.bind(zuuluu)(verify);
            zuuluu = _closure1_slot1;
            michal = 6;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot4;
            zuuluu = michal.SEARCH_HISTORY_CLICKED;
            michal = {};
            yankee = null;
            romeon = yankee != verify;
            if(!romeon) { _fun00028_ip = 119; continue _fun00027 }
 104:
            foxtra = _closure1_slot3;
            romeon = foxtra.getAnalyticsId;
            yankee = romeon.bind(foxtra)(verify);
 119:
            michal['search_id'] = yankee;
            michal['search_type'] = offset;
            option = _closure1_slot12;
            option = option.bind(entity)(verify);
            michal['search_session_id'] = option;
            michal['search_history_index'] = golfie;
            michal['search_history_total_results'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackSearchHistoryClick'] = tangon;
    michal = function(argFoo) { // Original name: trackSearchResultAutocompleteClicked
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            entity = argFoo;
            output = entity.searchId;
            backup = entity.searchQuery;
            sizing = entity.searchQueryString;
            romeon = entity.searchAutocompleteResultIndex;
            yankee = entity.searchAutocompleteTotalResults;
            tangon = entity.searchTokenType;
            report = entity.searchAutocompleteGroup;
            option = entity.isSearchFilterPrefix;
            golfie = entity.isSearchFilterAnswer;
            oscard = entity.isSearchFilterComplete;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 4;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.getSearchType;
            kiloes = michal.bind(zuuluu)(output);
            michal = _closure1_slot5;
            michal = michal.HISTORY;
            zuuluu = _closure1_slot9;
            michal = zuuluu.get;
            offset = michal.bind(zuuluu)(report);
            result = null;
            if(!(result == offset)) { _fun00030_ip = 155; continue _fun00029 }
 141:
            zuuluu = _closure1_slot10;
            michal = zuuluu.get;
            offset = michal.bind(zuuluu)(report);
 155:
            michal = result != tangon;
            verify = null;
            if(!michal) { _fun00030_ip = 178; continue _fun00029 }
 164:
            zuuluu = _closure1_slot9;
            michal = zuuluu.get;
            verify = michal.bind(zuuluu)(tangon);
 178:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 6;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot4;
            zuuluu = michal.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED;
            michal = {};
            echoed = result != output;
            result = null;
            if(!echoed) { _fun00030_ip = 240; continue _fun00029 }
 225:
            update = _closure1_slot3;
            echoed = update.getAnalyticsId;
            result = echoed.bind(update)(output);
 240:
            michal['search_id'] = result;
            michal['search_type'] = kiloes;
            kiloes = _closure1_slot12;
            kiloes = kiloes.bind(entity)(output);
            michal['search_session_id'] = kiloes;
            kiloes = _closure1_slot13;
            kiloes = kiloes.bind(entity)(output);
            michal['search_query_id'] = kiloes;
            kiloes = _closure1_slot14;
            kiloes = kiloes.bind(entity)(sizing);
            michal['search_query_length'] = kiloes;
            foxtra = _closure1_slot15;
            foxtra = foxtra.bind(entity)(backup);
            michal['search_query_content_length'] = foxtra;
            michal['search_autocomplete_result_index'] = romeon;
            michal['search_autocomplete_total_results'] = yankee;
            michal['search_autocomplete_group'] = offset;
            michal['search_autocomplete_filter_type'] = verify;
            michal['is_search_filter_prefix'] = option;
            michal['is_search_filter_answer'] = golfie;
            michal['is_search_filter_complete'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackSearchResultAutocompleteClicked'] = michal;
    return entity;
})();