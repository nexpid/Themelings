// app/modules/search/Tracking.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: withSearchContext
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            entity = null;
            michal = entity != report;
            oscard = null;
            if(!michal) { _fun00002_ip = 28; continue _fun00001 }
 14:
            zuuluu = _closure1_slot4;
            michal = undefined;
            oscard = zuuluu.bind(michal)(report);
 28:
            michal = _closure1_slot7;
            michal = michal.DMS;
            if(!(oscard !== michal)) { _fun00002_ip = 160; continue _fun00001 }
 45:
            michal = _closure1_slot7;
            michal = michal.FAVORITES;
            if(!(oscard !== michal)) { _fun00002_ip = 139; continue _fun00001 }
 59:
            michal = _closure1_slot7;
            michal = michal.GUILD;
            if(!(oscard !== michal)) { _fun00002_ip = 114; continue _fun00001 }
 73:
            michal = _closure1_slot7;
            michal = michal.CHANNEL;
            tangon = null;
            if(!(oscard === michal)) { _fun00002_ip = 112; continue _fun00001 }
 89:
            michal = {};
            oscard = _closure1_slot7;
            oscard = oscard.CHANNEL;
            michal['type'] = oscard;
            michal['channelId'] = report;
            tangon = michal;
 112:
            _fun00002_ip = 137; continue _fun00001;
 114:
            michal = {};
            oscard = _closure1_slot7;
            oscard = oscard.GUILD;
            michal['type'] = oscard;
            michal['guildId'] = report;
            tangon = michal;
 137:
            _fun00002_ip = 158; continue _fun00001;
 139:
            michal = {};
            report = _closure1_slot7;
            report = report.FAVORITES;
            michal['type'] = report;
            tangon = michal;
 158:
            _fun00002_ip = 179; continue _fun00001;
 160:
            michal = {};
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.DMS;
            michal['type'] = zuuluu;
            tangon = michal;
 179:
            michal = entity != tangon;
            entity = null;
            if(!michal) { _fun00002_ip = 198; continue _fun00001 }
 188:
            zuuluu = argBar;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 198:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: getSearchSessionAnalyticsId
        tangon = _closure1_slot9;
        zuuluu = undefined;
        michal = argFoo;
        entity = function(argFoo) {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 4;
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
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    tangon = 0;
    option = oscard[tangon];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.getSearchType;
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.AnalyticEvents;
    var _closure1_slot5 = option;
    option = tangon.SearchTokenTypes;
    var _closure1_slot6 = option;
    tangon = tangon.SearchTypes;
    var _closure1_slot7 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SearchTabs;
    var _closure1_slot8 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    tangon = option.prototype;
    foxtra = Object.create(tangon, {constructor: {value: option}});
    romeon = 'SearchTracking';
    tangon = new foxtra[option](romeon, yankee);
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search/Tracking.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: trackSearchResultViewed
        entity = argFoo;
        source = entity.searchType;
        result = entity.searchId;
        update = entity.searchAnalyticsId;
        echoed = entity.prevSearchAnalyticsId;
        sizing = entity.isError;
        kiloes = entity.limit;
        backup = entity.offset;
        foxtra = entity.page;
        romeon = entity.totalResults;
        yankee = entity.pageResults;
        offset = entity.isIndexing;
        verify = entity.pageNumMessages;
        option = entity.pageNumLinks;
        golfie = entity.pageNumEmbeds;
        oscard = entity.pageNumAttachments;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot5;
        zuuluu = michal.SEARCH_RESULT_VIEWED;
        michal = {};
        michal['search_type'] = source;
        michal['search_id'] = update;
        michal['prev_search_id'] = echoed;
        output = _closure1_slot10;
        output = output.bind(entity)(result);
        michal['search_session_id'] = output;
        michal['is_error'] = sizing;
        michal['limit'] = kiloes;
        michal['offset'] = backup;
        michal['page'] = foxtra;
        michal['total_results'] = romeon;
        michal['page_results'] = yankee;
        michal['is_indexing'] = offset;
        michal['page_num_messages'] = verify;
        michal['page_num_links'] = option;
        michal['page_num_embeds'] = golfie;
        michal['page_num_attach'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSearchResultViewed'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchResultSelected
        entity = argFoo;
        output = entity.searchType;
        kiloes = entity.searchId;
        sizing = entity.searchAnalyticsId;
        foxtra = entity.guildId;
        romeon = entity.channelId;
        yankee = entity.pageResults;
        offset = entity.totalResults;
        verify = entity.page;
        option = entity.limit;
        golfie = entity.offset;
        oscard = entity.index;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.track;
        michal = _closure1_slot5;
        zuuluu = michal.SEARCH_RESULT_SELECTED;
        michal = {};
        michal['search_type'] = output;
        michal['search_id'] = sizing;
        backup = _closure1_slot10;
        backup = backup.bind(entity)(kiloes);
        michal['search_session_id'] = backup;
        michal['guild_id'] = foxtra;
        michal['channel_id'] = romeon;
        michal['page_results'] = yankee;
        michal['total_results'] = offset;
        michal['page'] = verify;
        michal['limit'] = option;
        michal['offset'] = golfie;
        michal['index_num'] = oscard;
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
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot5;
        zuuluu = michal.SEARCH_RESULT_SORT_CHANGED;
        michal = {};
        michal['search_id'] = offset;
        option = _closure1_slot10;
        option = option.bind(entity)(verify);
        michal['search_session_id'] = option;
        michal['search_type'] = golfie;
        michal['new_sort_type'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSearchResultSortChanged'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchResultEmpty
        entity = argFoo;
        oscard = entity.searchType;
        option = entity.searchId;
        verify = entity.searchAnalyticsId;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot5;
        zuuluu = michal.SEARCH_RESULT_EMPTY;
        michal = {};
        michal['search_id'] = verify;
        golfie = _closure1_slot10;
        golfie = golfie.bind(entity)(option);
        michal['search_session_id'] = golfie;
        michal['search_type'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackSearchResultEmpty'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchOpened
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            oscard = entity.searchType;
            option = entity.searchId;
            zuuluu = _closure1_slot9;
            entity = undefined;
            michal = function(argFoo) {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 4;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.initialize;
                michal = _closure1_slot8;
                zuuluu = michal.MESSAGES;
                michal = argFoo;
                michal = tangon.bind(report)(michal, zuuluu);
                return entity;
            };
            michal = zuuluu.bind(entity)(option, michal);
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 5;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot5;
            zuuluu = michal.SEARCH_OPENED;
            michal = {};
            verify = null;
            offset = verify != option;
            if(!offset) { _fun00004_ip = 101; continue _fun00003 }
 86:
            yankee = _closure1_slot3;
            offset = yankee.getAnalyticsId;
            verify = offset.bind(yankee)(option);
 101:
            michal['search_id'] = verify;
            golfie = _closure1_slot10;
            golfie = golfie.bind(entity)(option);
            michal['search_session_id'] = golfie;
            michal['search_type'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackSearchOpened'] = tangon;
    tangon = function(argFoo) { // Original name: trackSearchClosed
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            tangon = entity.searchId;
            option = entity.searchType;
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 5;
            zuuluu = zuuluu[entity];
            entity = undefined;
            golfie = report.bind(entity)(zuuluu);
            oscard = golfie.trackWithMetadata;
            zuuluu = _closure1_slot5;
            report = zuuluu.SEARCH_CLOSED;
            zuuluu = {};
            verify = null;
            offset = verify != tangon;
            if(!offset) { _fun00006_ip = 82; continue _fun00005 }
 67:
            yankee = _closure1_slot3;
            offset = yankee.getAnalyticsId;
            verify = offset.bind(yankee)(tangon);
 82:
            zuuluu['search_id'] = verify;
            verify = _closure1_slot10;
            verify = verify.bind(entity)(tangon);
            zuuluu['search_session_id'] = verify;
            zuuluu['search_type'] = option;
            zuuluu = oscard.bind(golfie)(report, zuuluu);
            zuuluu = _closure1_slot9;
            michal = function(argFoo) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 4;
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
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            oscard = entity.searchType;
            option = entity.searchId;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot5;
            zuuluu = michal.SEARCH_INPUT_CLEARED;
            michal = {};
            verify = null;
            offset = verify != option;
            if(!offset) { _fun00008_ip = 82; continue _fun00007 }
 67:
            yankee = _closure1_slot3;
            offset = yankee.getAnalyticsId;
            verify = offset.bind(yankee)(option);
 82:
            michal['search_id'] = verify;
            golfie = _closure1_slot10;
            golfie = golfie.bind(entity)(option);
            michal['search_session_id'] = golfie;
            michal['search_type'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackSearchInputCleared'] = tangon;
    michal = function(argFoo) { // Original name: trackSearchStarted
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            option = entity.searchType;
            offset = entity.searchId;
            output = entity.query;
            var _closure2_slot0 = output;
            tangon = entity.queryString;
            entity = undefined;
            var _closure2_slot1 = entity;
            var _closure2_slot2 = entity;
            var _closure2_slot3 = entity;
            var _closure2_slot4 = entity;
            var _closure2_slot5 = entity;
            var _closure2_slot6 = entity;
            var _closure2_slot7 = entity;
            var _closure2_slot8 = entity;
            michal = global;
            zuuluu = michal.Object;
            michal = zuuluu.keys;
            golfie = michal.bind(zuuluu)(output);
            report = golfie.reduce;
            zuuluu = function(argFoo, argBar) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
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
                    if(!report) { _fun00012_ip = 46; continue _fun00011 }
 41:
                    michal = tangon.length;
 46:
                    entity[zuuluu] = michal;
                    return entity;
                }
            };
            michal = {};
            oscard = report.bind(golfie)(zuuluu, michal);
            yankee = null;
            if(!(yankee == tangon)) { _fun00010_ip = 117; continue _fun00009 }
 111:
            report = new Array(0);
            _fun00010_ip = 151; continue _fun00009;
 117:
            zuuluu = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 7;
            michal = verify[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.tokenizeQuery;
            report = michal.bind(zuuluu)(tangon);
 151:
            michal = 0;
            _closure2_slot1 = michal;
            _closure2_slot2 = michal;
            _closure2_slot3 = michal;
            _closure2_slot4 = michal;
            _closure2_slot5 = michal;
            _closure2_slot6 = michal;
            _closure2_slot7 = michal;
            _closure2_slot8 = michal;
            tangon = report.forEach;
            zuuluu = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = argFoo;
                    tangon = michal.type;
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.ANSWER_IN;
                    if(!(tangon !== zuuluu)) { _fun00014_ip = 285; continue _fun00013 }
 28:
                    tangon = michal.type;
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.ANSWER_USERNAME_FROM;
                    if(!(tangon !== zuuluu)) { _fun00014_ip = 269; continue _fun00013 }
 50:
                    tangon = michal.type;
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.ANSWER_USERNAME_MENTIONS;
                    if(!(tangon !== zuuluu)) { _fun00014_ip = 253; continue _fun00013 }
 72:
                    tangon = michal.type;
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.ANSWER_HAS;
                    if(!(tangon !== zuuluu)) { _fun00014_ip = 237; continue _fun00013 }
 94:
                    tangon = michal.type;
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.ANSWER_BEFORE;
                    if(!(tangon !== zuuluu)) { _fun00014_ip = 221; continue _fun00013 }
 113:
                    tangon = michal.type;
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.ANSWER_ON;
                    if(!(tangon !== zuuluu)) { _fun00014_ip = 205; continue _fun00013 }
 132:
                    tangon = michal.type;
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.ANSWER_AFTER;
                    if(!(tangon !== zuuluu)) { _fun00014_ip = 189; continue _fun00013 }
 151:
                    michal = michal.type;
                    entity = _closure1_slot6;
                    entity = entity.ANSWER_PINNED;
                    if(!(michal === entity)) { _fun00014_ip = 299; continue _fun00013 }
 173:
                    entity = _closure2_slot8;
                    entity = entity + 1;
                    _closure2_slot8 = entity;
                    _fun00014_ip = 299; continue _fun00013;
 189:
                    entity = _closure2_slot7;
                    entity = entity + 1;
                    _closure2_slot7 = entity;
                    _fun00014_ip = 299; continue _fun00013;
 205:
                    entity = _closure2_slot6;
                    entity = entity + 1;
                    _closure2_slot6 = entity;
                    _fun00014_ip = 299; continue _fun00013;
 221:
                    entity = _closure2_slot5;
                    entity = entity + 1;
                    _closure2_slot5 = entity;
                    _fun00014_ip = 299; continue _fun00013;
 237:
                    entity = _closure2_slot4;
                    entity = entity + 1;
                    _closure2_slot4 = entity;
                    _fun00014_ip = 299; continue _fun00013;
 253:
                    entity = _closure2_slot3;
                    entity = entity + 1;
                    _closure2_slot3 = entity;
                    _fun00014_ip = 299; continue _fun00013;
 269:
                    entity = _closure2_slot2;
                    entity = entity + 1;
                    _closure2_slot2 = entity;
                    _fun00014_ip = 299; continue _fun00013;
 285:
                    entity = _closure2_slot1;
                    entity = entity + 1;
                    _closure2_slot1 = entity;
 299:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = tangon.bind(report)(zuuluu);
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            tangon = 5;
            zuuluu = zuuluu[tangon];
            foxtra = report.bind(entity)(zuuluu);
            romeon = foxtra.trackWithMetadata;
            zuuluu = _closure1_slot5;
            report = zuuluu.MESSAGES_SEARCH_STARTED;
            zuuluu = {};
            sizing = yankee != offset;
            kiloes = null;
            if(!sizing) { _fun00010_ip = 267; continue _fun00009 }
 252:
            result = _closure1_slot3;
            sizing = result.getAnalyticsId;
            kiloes = sizing.bind(result)(offset);
 267:
            zuuluu['search_id'] = kiloes;
            kiloes = _closure1_slot10;
            kiloes = kiloes.bind(entity)(offset);
            zuuluu['search_session_id'] = kiloes;
            zuuluu['search_type'] = option;
            sizing = output.content;
            result = yankee == sizing;
            kiloes = undefined;
            if(result) { _fun00010_ip = 310; continue _fun00009 }
 305:
            kiloes = sizing.length;
 310:
            sizing = yankee != kiloes;
            michal = 0;
            if(!sizing) { _fun00010_ip = 322; continue _fun00009 }
 319:
            michal = kiloes;
 322:
            zuuluu['search_query_content_length'] = michal;
            sizing = _closure1_slot0;
            michal = _closure1_slot2;
            kiloes = 8;
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
            michal = _closure1_slot5;
            zuuluu = michal.SEARCH_STARTED;
            michal = {};
            romeon = yankee != offset;
            yankee = null;
            if(!romeon) { _fun00010_ip = 516; continue _fun00009 }
 501:
            foxtra = _closure1_slot3;
            romeon = foxtra.getAnalyticsId;
            yankee = romeon.bind(foxtra)(offset);
 516:
            michal['search_id'] = yankee;
            verify = _closure1_slot10;
            verify = verify.bind(entity)(offset);
            michal['search_session_id'] = verify;
            michal['search_type'] = option;
            golfie = golfie.length;
            michal['num_modifiers'] = golfie;
            michal['modifiers'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackSearchStarted'] = michal;
    return entity;
})();