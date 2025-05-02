// app/modules/search/Tracking.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar) { // Original name: withSearchContext
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            entity = null;
            michal = entity != report;
            oscard = null;
            if(!michal) { _fun00002_ip = 28; continue _fun00001 }
 14:
            zuuluu = _closure1_slot3;
            michal = undefined;
            oscard = zuuluu.bind(michal)(report);
 28:
            michal = _closure1_slot5;
            michal = michal.DMS;
            if(!(oscard !== michal)) { _fun00002_ip = 160; continue _fun00001 }
 45:
            michal = _closure1_slot5;
            michal = michal.FAVORITES;
            if(!(oscard !== michal)) { _fun00002_ip = 139; continue _fun00001 }
 59:
            michal = _closure1_slot5;
            michal = michal.GUILD;
            if(!(oscard !== michal)) { _fun00002_ip = 114; continue _fun00001 }
 73:
            michal = _closure1_slot5;
            michal = michal.CHANNEL;
            tangon = null;
            if(!(oscard === michal)) { _fun00002_ip = 112; continue _fun00001 }
 89:
            michal = {};
            oscard = _closure1_slot5;
            oscard = oscard.CHANNEL;
            michal['type'] = oscard;
            michal['channelId'] = report;
            tangon = michal;
 112:
            _fun00002_ip = 137; continue _fun00001;
 114:
            michal = {};
            oscard = _closure1_slot5;
            oscard = oscard.GUILD;
            michal['type'] = oscard;
            michal['guildId'] = report;
            tangon = michal;
 137:
            _fun00002_ip = 158; continue _fun00001;
 139:
            michal = {};
            report = _closure1_slot5;
            report = report.FAVORITES;
            michal['type'] = report;
            tangon = michal;
 158:
            _fun00002_ip = 179; continue _fun00001;
 160:
            michal = {};
            zuuluu = _closure1_slot5;
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
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: getSearchSessionAnalyticsId
        tangon = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        entity = function(argFoo) {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
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
    var _closure1_slot8 = entity;
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
    var _closure1_slot2 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.getSearchType;
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.AnalyticEvents;
    var _closure1_slot4 = option;
    tangon = tangon.SearchTypes;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SearchTabs;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    tangon = option.prototype;
    foxtra = Object.create(tangon, {constructor: {value: option}});
    romeon = 'SearchTracking';
    tangon = new foxtra[option](romeon, yankee);
    tangon = 7;
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
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot4;
        zuuluu = michal.SEARCH_RESULT_VIEWED;
        michal = {};
        michal['search_type'] = source;
        michal['search_id'] = update;
        michal['prev_search_id'] = echoed;
        output = _closure1_slot8;
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
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.track;
        michal = _closure1_slot4;
        zuuluu = michal.SEARCH_RESULT_SELECTED;
        michal = {};
        michal['search_type'] = output;
        michal['search_id'] = sizing;
        backup = _closure1_slot8;
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
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot4;
        zuuluu = michal.SEARCH_RESULT_SORT_CHANGED;
        michal = {};
        michal['search_id'] = offset;
        option = _closure1_slot8;
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
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.trackWithMetadata;
        michal = _closure1_slot4;
        zuuluu = michal.SEARCH_RESULT_EMPTY;
        michal = {};
        michal['search_id'] = verify;
        golfie = _closure1_slot8;
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
            zuuluu = _closure1_slot7;
            entity = undefined;
            michal = function(argFoo) {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                entity = 4;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.initialize;
                michal = _closure1_slot6;
                zuuluu = michal.MESSAGES;
                michal = argFoo;
                michal = tangon.bind(report)(michal, zuuluu);
                return entity;
            };
            michal = zuuluu.bind(entity)(option, michal);
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 5;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot4;
            zuuluu = michal.SEARCH_OPENED;
            michal = {};
            verify = null;
            offset = verify != option;
            if(!offset) { _fun00004_ip = 101; continue _fun00003 }
 86:
            yankee = _closure1_slot2;
            offset = yankee.getAnalyticsId;
            verify = offset.bind(yankee)(option);
 101:
            michal['search_id'] = verify;
            golfie = _closure1_slot8;
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
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 5;
            zuuluu = zuuluu[entity];
            entity = undefined;
            golfie = report.bind(entity)(zuuluu);
            oscard = golfie.trackWithMetadata;
            zuuluu = _closure1_slot4;
            report = zuuluu.SEARCH_CLOSED;
            zuuluu = {};
            verify = null;
            offset = verify != tangon;
            if(!offset) { _fun00006_ip = 82; continue _fun00005 }
 67:
            yankee = _closure1_slot2;
            offset = yankee.getAnalyticsId;
            verify = offset.bind(yankee)(tangon);
 82:
            zuuluu['search_id'] = verify;
            verify = _closure1_slot8;
            verify = verify.bind(entity)(tangon);
            zuuluu['search_session_id'] = verify;
            zuuluu['search_type'] = option;
            zuuluu = oscard.bind(golfie)(report, zuuluu);
            zuuluu = _closure1_slot7;
            michal = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
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
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot4;
            zuuluu = michal.SEARCH_INPUT_CLEARED;
            michal = {};
            verify = null;
            offset = verify != option;
            if(!offset) { _fun00008_ip = 82; continue _fun00007 }
 67:
            yankee = _closure1_slot2;
            offset = yankee.getAnalyticsId;
            verify = offset.bind(yankee)(option);
 82:
            michal['search_id'] = verify;
            golfie = _closure1_slot8;
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
            michal = argFoo;
            option = michal.searchType;
            offset = michal.searchId;
            tangon = michal.query;
            var _closure2_slot0 = tangon;
            michal = global;
            zuuluu = michal.Object;
            michal = zuuluu.keys;
            golfie = michal.bind(zuuluu)(tangon);
            zuuluu = golfie.reduce;
            michal = function(argFoo, argBar) {
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
            entity = {};
            oscard = zuuluu.bind(golfie)(michal, entity);
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot4;
            zuuluu = michal.SEARCH_STARTED;
            michal = {};
            yankee = null;
            romeon = yankee != offset;
            if(!romeon) { _fun00010_ip = 132; continue _fun00009 }
 117:
            foxtra = _closure1_slot2;
            romeon = foxtra.getAnalyticsId;
            yankee = romeon.bind(foxtra)(offset);
 132:
            michal['search_id'] = yankee;
            verify = _closure1_slot8;
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