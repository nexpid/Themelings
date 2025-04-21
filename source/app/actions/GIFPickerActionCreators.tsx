// app/actions/GIFPickerActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    verify = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = offset;
    golfie = function(argFoo) { // Original name: trackSearchStart
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity == zuuluu)) { _fun00002_ip = 13; continue _fun00001 }
 9:
            oscard = {};
            _fun00002_ip = 26; continue _fun00001;
 13:
            entity = {};
            michal = 1;
            entity[zuuluu] = michal;
            oscard = entity;
 26:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 4;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot5;
            zuuluu = michal.SEARCH_STARTED;
            michal = {};
            option = _closure1_slot7;
            option = option.GIF;
            michal['search_type'] = option;
            option = _closure1_slot4;
            golfie = option.getAnalyticsID;
            golfie = golfie.bind(option)();
            michal['load_id'] = golfie;
            golfie = global;
            option = golfie.Object;
            golfie = option.keys;
            golfie = golfie.bind(option)(oscard);
            golfie = golfie.length;
            michal['num_modifiers'] = golfie;
            michal['modifiers'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot13 = golfie;
    oscard = function(argFoo, argBar) { // Original name: trackSearchResultViewed
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            golfie = arguments[2];
            entity = undefined;
            if(!(golfie === entity)) { _fun00004_ip = 14; continue _fun00003 }
 12:
            golfie = {};
 14:
            tangon = golfie.startTime;
            zuuluu = null;
            oscard = Object.create(zuuluu);
            michal = 0;
            oscard['startTime'] = michal;
            backup = {};
            foxtra = golfie;
            romeon = oscard;
            offset = copyDataProperties(backup, foxtra, romeon);
            yankee = {'offset': 0, 'limit': null};
            michal = report.length;
            yankee['totalResults'] = michal;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 5;
            oscard = option[oscard];
            verify = golfie.bind(entity)(oscard);
            option = verify.calculateAnalyticsMetadata;
            golfie = _closure1_slot4;
            oscard = golfie.getAnalyticsID;
            golfie = oscard.bind(golfie)();
            oscard = {};
            backup = oscard;
            foxtra = yankee;
            yankee = copyDataProperties(backup, foxtra);
            backup = oscard;
            foxtra = offset;
            offset = copyDataProperties(backup, foxtra);
            offset = report.length;
            report = 'results';
            oscard[report] = offset;
            report = argBar;
            golfie = option.bind(verify)(golfie, report, oscard);
            if(!(zuuluu != tangon)) { _fun00004_ip = 193; continue _fun00003 }
 161:
            oscard = {};
            zuuluu = global;
            report = zuuluu.Date;
            zuuluu = report.now;
            zuuluu = zuuluu.bind(report)();
            zuuluu = zuuluu - tangon;
            oscard['load_duration_ms'] = zuuluu;
            _fun00004_ip = 195; continue _fun00003;
 193:
            oscard = {};
 195:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 4;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot5;
            zuuluu = michal.SEARCH_RESULT_VIEWED;
            michal = {};
            backup = michal;
            foxtra = golfie;
            golfie = copyDataProperties(backup, foxtra);
            backup = michal;
            foxtra = oscard;
            oscard = copyDataProperties(backup, foxtra);
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot14 = oscard;
    foxtra = function(argFoo, argBar, argBaz) { // Original name: doSearchRequest
        verify = argFoo;
        tangon = argBar;
        golfie = argBaz;
        var _closure2_slot0 = verify;
        var _closure2_slot1 = tangon;
        var _closure2_slot2 = golfie;
        entity = global;
        zuuluu = entity.Date;
        entity = zuuluu.now;
        entity = entity.bind(zuuluu)();
        var _closure2_slot3 = entity;
        zuuluu = _closure1_slot13;
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(tangon);
        tangon = _closure1_slot0;
        report = _closure1_slot2;
        zuuluu = 6;
        zuuluu = report[zuuluu];
        zuuluu = tangon.bind(entity)(zuuluu);
        report = zuuluu.HTTP;
        tangon = report.get;
        zuuluu = {};
        oscard = _closure1_slot6;
        oscard = oscard.GIFS_SEARCH;
        zuuluu['url'] = oscard;
        oscard = {};
        oscard['q'] = verify;
        offset = _closure1_slot4;
        verify = offset.getSelectedFormat;
        verify = verify.bind(offset)();
        oscard['media_format'] = verify;
        verify = 'tenor';
        oscard['provider'] = verify;
        option = _closure1_slot3;
        option = option.locale;
        oscard['locale'] = option;
        oscard['limit'] = golfie;
        zuuluu['query'] = oscard;
        oscard = true;
        zuuluu['oldFormErrors'] = oscard;
        zuuluu['rejectWithError'] = oscard;
        report = tangon.bind(report)(zuuluu);
        tangon = report.then;
        zuuluu = function(argFoo) {
            entity = argFoo;
            report = entity.body;
            golfie = _closure1_slot14;
            tangon = _closure2_slot1;
            zuuluu = {};
            entity = _closure2_slot3;
            zuuluu['startTime'] = entity;
            entity = _closure2_slot2;
            zuuluu['limit'] = entity;
            entity = undefined;
            zuuluu = golfie.bind(entity)(report, tangon, zuuluu);
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 7;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            golfie = 'GIF_PICKER_QUERY_SUCCESS';
            michal['type'] = golfie;
            oscard = _closure2_slot0;
            michal['query'] = oscard;
            michal['items'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            tangon = 'GIF_PICKER_QUERY_FAILURE';
            entity['type'] = tangon;
            tangon = _closure2_slot0;
            entity['query'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot15 = foxtra;
    report = function() { // Original name: resetSearch
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {'type': 'GIF_PICKER_QUERY', 'query': ''};
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot16 = report;
    tangon = function(argFoo) { // Original name: gifUrlKey
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            entity = 10;
            entity = report[entity];
            oscard = undefined;
            tangon = tangon.bind(oscard)(entity);
            entity = tangon.toURLSafe;
            report = entity.bind(tangon)(michal);
            tangon = null;
            entity = michal;
            if(!(tangon != report)) { _fun00006_ip = 122; continue _fun00005 }
 48:
            option = _closure1_slot0;
            tangon = _closure1_slot2;
            golfie = 11;
            tangon = tangon[golfie];
            option = option.bind(oscard)(tangon);
            tangon = option.isAttachmentUrl;
            tangon = tangon.bind(option)(report);
            if(!tangon) { _fun00006_ip = 119; continue _fun00005 }
 82:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.removeSignedUrlParameters;
            tangon = zuuluu.bind(tangon)(report);
            zuuluu = tangon.toString;
            michal = zuuluu.bind(tangon)();
 119:
            entity = michal;
 122:
            return entity;
        }
    };
    var _closure1_slot17 = tangon;
    entity = global;
    backup = entity.Object;
    romeon = backup.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = romeon.bind(backup)(zuuluu, entity, option);
    entity = 0;
    option = offset[entity];
    entity = undefined;
    option = yankee.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 1;
    option = offset[option];
    option = yankee.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 2;
    option = offset[option];
    option = verify.bind(entity)(option);
    romeon = option.AnalyticEvents;
    var _closure1_slot5 = romeon;
    romeon = option.Endpoints;
    var _closure1_slot6 = romeon;
    romeon = option.SearchTypes;
    var _closure1_slot7 = romeon;
    option = option.GIFPickerResultTypes;
    var _closure1_slot8 = option;
    option = 3;
    option = offset[option];
    option = verify.bind(entity)(option);
    romeon = option.MAX_FAVORITE_GIFS_SIZE;
    var _closure1_slot9 = romeon;
    option = option.UserSettingsDelay;
    var _closure1_slot10 = option;
    option = /-/g;
    var _closure1_slot11 = option;
    option = 8;
    option = offset[option];
    romeon = yankee.bind(entity)(option);
    yankee = romeon.debounce;
    option = 250;
    option = yankee.bind(romeon)(foxtra, option);
    var _closure1_slot12 = option;
    option = 17;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'actions/GIFPickerActionCreators.tsx';
    option = verify.bind(offset)(option);
    zuuluu['trackSearchStart'] = golfie;
    zuuluu['trackSearchResultViewed'] = oscard;
    oscard = function(argFoo, argBar) { // Original name: search
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            oscard = arguments[2];
            zuuluu = arguments[3];
            entity = undefined;
            if(!(oscard === entity)) { _fun00008_ip = 20; continue _fun00007 }
 18:
            oscard = false;
 20:
            michal = '';
            if(!(michal !== report)) { _fun00008_ip = 106; continue _fun00007 }
 28:
            option = _closure1_slot1;
            verify = _closure1_slot2;
            golfie = 7;
            golfie = verify[golfie];
            verify = option.bind(entity)(golfie);
            option = verify.dispatch;
            golfie = {};
            offset = 'GIF_PICKER_QUERY';
            golfie['type'] = offset;
            golfie['query'] = report;
            golfie = option.bind(verify)(golfie);
            if(oscard) { _fun00008_ip = 93; continue _fun00007 }
 80:
            oscard = _closure1_slot12;
            oscard = oscard.bind(entity)(report, tangon, zuuluu);
            _fun00008_ip = 117; continue _fun00007;
 93:
            michal = _closure1_slot15;
            michal = michal.bind(entity)(report, tangon, zuuluu);
            _fun00008_ip = 117; continue _fun00007;
 106:
            michal = _closure1_slot16;
            michal = michal.bind(entity)();
 117:
            return entity;
        }
    };
    zuuluu['search'] = oscard;
    oscard = function(argFoo) { // Original name: fetchSuggestions
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golfie = argFoo;
            var _closure2_slot0 = golfie;
            michal = '';
            michal = michal !== golfie;
            if(!michal) { _fun00010_ip = 26; continue _fun00009 }
 20:
            zuuluu = null;
            michal = zuuluu != golfie;
 26:
            if(!michal) { _fun00010_ip = 155; continue _fun00009 }
 32:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 6;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            tangon = michal.HTTP;
            zuuluu = tangon.get;
            michal = {};
            report = _closure1_slot6;
            report = report.GIFS_SUGGEST;
            michal['url'] = report;
            report = {'q': null, 'provider': 'tenor', 'limit': 5};
            report['q'] = golfie;
            oscard = _closure1_slot3;
            oscard = oscard.locale;
            report['locale'] = oscard;
            michal['query'] = report;
            report = true;
            michal['oldFormErrors'] = report;
            michal['rejectWithError'] = report;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.then;
            entity = function(argFoo) {
                entity = argFoo;
                report = entity.body;
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 7;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                oscard = 'GIF_PICKER_SUGGESTIONS_SUCCESS';
                michal['type'] = oscard;
                oscard = _closure2_slot0;
                michal['query'] = oscard;
                michal['items'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
 155:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['fetchSuggestions'] = oscard;
    zuuluu['resetSearch'] = report;
    report = function(argFoo) { // Original name: trackSelectGIF
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            yankee = entity.type;
            offset = entity.index;
            kiloes = entity.offset;
            backup = entity.limit;
            foxtra = entity.results;
            romeon = entity.totalResults;
            oscard = entity.query;
            golfie = entity.gifId;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 5;
            michal = tangon[entity];
            entity = undefined;
            verify = zuuluu.bind(entity)(michal);
            option = verify.calculateAnalyticsMetadata;
            zuuluu = _closure1_slot4;
            michal = zuuluu.getAnalyticsID;
            zuuluu = michal.bind(zuuluu)();
            michal = {};
            michal['offset'] = kiloes;
            michal['limit'] = backup;
            michal['results'] = foxtra;
            michal['totalResults'] = romeon;
            output = option.bind(verify)(zuuluu, yankee, michal);
            zuuluu = _closure1_slot1;
            michal = 4;
            michal = tangon[michal];
            option = zuuluu.bind(entity)(michal);
            tangon = option.trackWithMetadata;
            michal = _closure1_slot5;
            zuuluu = michal.SEARCH_RESULT_SELECTED;
            michal = {};
            result = michal;
            verify = copyDataProperties(result, output);
            verify = 'index_num';
            michal[verify] = offset;
            offset = 'GIF Picker';
            verify = 'source_object';
            michal[verify] = offset;
            verify = 'query';
            michal[verify] = oscard;
            michal = tangon.bind(option)(zuuluu, michal);
            michal = null;
            if(!(michal != golfie)) { _fun00012_ip = 290; continue _fun00011 }
 212:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 6;
            michal = tangon[michal];
            michal = zuuluu.bind(entity)(michal);
            tangon = michal.HTTP;
            zuuluu = tangon.post;
            michal = {};
            report = _closure1_slot6;
            report = report.GIFS_SELECT;
            michal['url'] = report;
            report = {};
            report['id'] = golfie;
            report['q'] = oscard;
            michal['body'] = report;
            report = true;
            michal['oldFormErrors'] = report;
            michal['rejectWithError'] = report;
            michal = zuuluu.bind(tangon)(michal);
 290:
            return entity;
        }
    };
    zuuluu['trackSelectGIF'] = report;
    report = function() { // Original name: initializeSearch
        tangon = _closure1_slot0;
        report = _closure1_slot2;
        entity = 9;
        zuuluu = report[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.v4;
        golfie = zuuluu.bind(tangon)();
        oscard = golfie.replace;
        tangon = _closure1_slot11;
        zuuluu = '';
        verify = oscard.bind(golfie)(tangon, zuuluu);
        var _closure2_slot0 = verify;
        tangon = _closure1_slot1;
        zuuluu = 4;
        zuuluu = report[zuuluu];
        option = tangon.bind(entity)(zuuluu);
        golfie = option.trackWithMetadata;
        zuuluu = _closure1_slot5;
        oscard = zuuluu.SEARCH_OPENED;
        zuuluu = {};
        offset = _closure1_slot7;
        offset = offset.GIF;
        zuuluu['search_type'] = offset;
        zuuluu['load_id'] = verify;
        zuuluu = golfie.bind(option)(oscard, zuuluu);
        zuuluu = 7;
        zuuluu = report[zuuluu];
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.wait;
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'GIF_PICKER_INITIALIZE';
            michal['type'] = report;
            report = _closure2_slot0;
            michal['analyticsID'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['initializeSearch'] = report;
    report = function() { // Original name: fetchTrending
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        tangon = michal.HTTP;
        zuuluu = tangon.get;
        michal = {};
        report = _closure1_slot6;
        report = report.GIFS_TRENDING;
        michal['url'] = report;
        report = {};
        golfie = 'tenor';
        report['provider'] = golfie;
        golfie = _closure1_slot3;
        golfie = golfie.locale;
        report['locale'] = golfie;
        golfie = _closure1_slot4;
        oscard = golfie.getSelectedFormat;
        oscard = oscard.bind(golfie)();
        report['media_format'] = oscard;
        michal['query'] = report;
        report = true;
        michal['oldFormErrors'] = report;
        michal['rejectWithError'] = report;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.then;
        michal = function(argFoo) {
            entity = argFoo;
            entity = entity.body;
            report = entity.categories;
            oscard = entity.gifs;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            golfie = 'GIF_PICKER_TRENDING_FETCH_SUCCESS';
            michal['type'] = golfie;
            michal['trendingCategories'] = report;
            report = 0;
            report = oscard[report];
            michal['trendingGIFPreview'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['fetchTrending'] = report;
    report = function(argFoo) { // Original name: fetchTrendingGIFs
        golfie = argFoo;
        var _closure2_slot0 = golfie;
        entity = global;
        zuuluu = entity.Date;
        entity = zuuluu.now;
        entity = entity.bind(zuuluu)();
        var _closure2_slot1 = entity;
        tangon = _closure1_slot13;
        entity = _closure1_slot8;
        zuuluu = entity.TRENDING_GIFS;
        entity = undefined;
        zuuluu = tangon.bind(entity)(zuuluu);
        tangon = _closure1_slot0;
        report = _closure1_slot2;
        zuuluu = 6;
        zuuluu = report[zuuluu];
        zuuluu = tangon.bind(entity)(zuuluu);
        report = zuuluu.HTTP;
        tangon = report.get;
        zuuluu = {};
        oscard = _closure1_slot6;
        oscard = oscard.GIFS_TRENDING_GIFS;
        zuuluu['url'] = oscard;
        oscard = {};
        offset = _closure1_slot4;
        verify = offset.getSelectedFormat;
        verify = verify.bind(offset)();
        oscard['media_format'] = verify;
        verify = 'tenor';
        oscard['provider'] = verify;
        option = _closure1_slot3;
        option = option.locale;
        oscard['locale'] = option;
        oscard['limit'] = golfie;
        zuuluu['query'] = oscard;
        oscard = true;
        zuuluu['oldFormErrors'] = oscard;
        zuuluu['rejectWithError'] = oscard;
        report = tangon.bind(report)(zuuluu);
        tangon = report.then;
        zuuluu = function(argFoo) {
            entity = argFoo;
            report = entity.body;
            oscard = _closure1_slot14;
            entity = _closure1_slot8;
            tangon = entity.TRENDING_GIFS;
            zuuluu = {};
            golfie = _closure2_slot1;
            zuuluu['startTime'] = golfie;
            entity = _closure2_slot0;
            zuuluu['limit'] = entity;
            entity = undefined;
            zuuluu = oscard.bind(entity)(report, tangon, zuuluu);
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 7;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'GIF_PICKER_QUERY_SUCCESS';
            michal['type'] = oscard;
            michal['items'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'GIF_PICKER_QUERY_FAILURE';
            michal['type'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['fetchTrendingGIFs'] = report;
    zuuluu['gifUrlKey'] = tangon;
    tangon = function(argFoo) { // Original name: addFavoriteGIF
        entity = argFoo;
        var _closure2_slot0 = entity;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        entity = 12;
        tangon = tangon[entity];
        entity = undefined;
        tangon = report.bind(entity)(tangon);
        oscard = tangon.FrecencyUserSettingsActionCreators;
        report = oscard.updateAsync;
        zuuluu = _closure1_slot10;
        tangon = zuuluu.INFREQUENT_USER_ACTION;
        zuuluu = 'favoriteGifs';
        michal = function(argFoo) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = argFoo;
                zuuluu = _closure1_slot1;
                entity = _closure1_slot2;
                report = 8;
                entity = entity[report];
                option = undefined;
                oscard = zuuluu.bind(option)(entity);
                zuuluu = oscard.max;
                entity = global;
                verify = entity.Object;
                golfie = verify.values;
                entity = michal.gifs;
                verify = golfie.bind(verify)(entity);
                golfie = verify.map;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.order;
                    return entity;
                };
                entity = golfie.bind(verify)(entity);
                entity = zuuluu.bind(oscard)(entity);
                zuuluu = null;
                zuuluu = zuuluu != entity;
                verify = 0;
                if(!zuuluu) { _fun00014_ip = 95; continue _fun00013 }
 92:
                verify = entity;
 95:
                oscard = michal.gifs;
                zuuluu = _closure1_slot17;
                golfie = _closure2_slot0;
                entity = golfie.url;
                zuuluu = zuuluu.bind(option)(entity);
                entity = {};
                romeon = entity;
                yankee = golfie;
                golfie = copyDataProperties(romeon, yankee);
                golfie = 1;
                verify = verify + golfie;
                golfie = 'order';
                entity[golfie] = verify;
                oscard[zuuluu] = entity;
                zuuluu = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 13;
                entity = oscard[entity];
                entity = zuuluu.bind(option)(entity);
                zuuluu = entity.FavoriteGIFs;
                entity = zuuluu.toBinary;
                entity = entity.bind(zuuluu)(michal);
                zuuluu = entity.length;
                entity = _closure1_slot9;
                if(!(!(zuuluu > entity))) { _fun00014_ip = 302; continue _fun00013 }
 204:
                zuuluu = _closure1_slot1;
                entity = _closure1_slot2;
                entity = entity[report];
                report = zuuluu.bind(option)(entity);
                zuuluu = report.size;
                entity = michal.gifs;
                oscard = zuuluu.bind(report)(entity);
                entity = 2;
                if(!(oscard > entity)) { _fun00014_ip = 252; continue _fun00013 }
 244:
                entity = true;
                michal['hideTooltip'] = entity;
 252:
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 16;
                entity = zuuluu[entity];
                report = michal.bind(option)(entity);
                zuuluu = report.track;
                entity = _closure1_slot5;
                michal = entity.GIF_FAVORITED;
                entity = {};
                entity['total_num_favorited'] = oscard;
                entity = zuuluu.bind(report)(michal, entity);
                return option;
 302:
                michal = _closure1_slot1;
                verify = _closure1_slot2;
                entity = 14;
                entity = verify[entity];
                zuuluu = michal.bind(option)(entity);
                michal = zuuluu.show;
                entity = {};
                golfie = _closure1_slot0;
                tangon = 15;
                report = verify[tangon];
                report = golfie.bind(option)(report);
                offset = report.intl;
                oscard = offset.string;
                report = verify[tangon];
                report = golfie.bind(option)(report);
                report = report.t;
                report = report.+XYXtb;
                report = oscard.bind(offset)(report);
                entity['title'] = report;
                report = verify[tangon];
                report = golfie.bind(option)(report);
                oscard = report.intl;
                report = oscard.string;
                tangon = verify[tangon];
                tangon = golfie.bind(option)(tangon);
                tangon = tangon.t;
                tangon = tangon.YSDH9v;
                tangon = report.bind(oscard)(tangon);
                entity['body'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                entity = false;
                return entity;
            }
        };
        michal = report.bind(oscard)(zuuluu, michal, tangon);
        return entity;
    };
    zuuluu['addFavoriteGIF'] = tangon;
    tangon = function(argFoo) { // Original name: removeFavoriteGIF
        entity = argFoo;
        var _closure2_slot0 = entity;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        entity = 12;
        tangon = tangon[entity];
        entity = undefined;
        tangon = report.bind(entity)(tangon);
        oscard = tangon.FrecencyUserSettingsActionCreators;
        report = oscard.updateAsync;
        zuuluu = _closure1_slot10;
        tangon = zuuluu.INFREQUENT_USER_ACTION;
        zuuluu = 'favoriteGifs';
        michal = function(argFoo) {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                oscard = argFoo;
                zuuluu = _closure2_slot0;
                michal = oscard.gifs;
                zuuluu = zuuluu in michal;
                michal = oscard.gifs;
                if(zuuluu) { _fun00016_ip = 53; continue _fun00015 }
 29:
                report = _closure1_slot17;
                tangon = _closure2_slot0;
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                zuuluu = delete michal[zuuluu];
                _fun00016_ip = 61; continue _fun00015;
 53:
                entity = _closure2_slot0;
                entity = delete michal[entity];
 61:
                option = _closure1_slot1;
                verify = _closure1_slot2;
                entity = 16;
                zuuluu = verify[entity];
                entity = undefined;
                report = option.bind(entity)(zuuluu);
                tangon = report.track;
                michal = _closure1_slot5;
                zuuluu = michal.GIF_UNFAVORITED;
                michal = {};
                golfie = 8;
                golfie = verify[golfie];
                option = option.bind(entity)(golfie);
                golfie = option.size;
                oscard = oscard.gifs;
                oscard = golfie.bind(option)(oscard);
                michal['total_num_favorited'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            }
        };
        michal = report.bind(oscard)(zuuluu, michal, tangon);
        return entity;
    };
    zuuluu['removeFavoriteGIF'] = tangon;
    michal = function() { // Original name: fetchTrendingSearchTerms
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        tangon = michal.HTTP;
        zuuluu = tangon.get;
        michal = {};
        report = _closure1_slot6;
        report = report.GIFS_TRENDING_SEARCH;
        michal['url'] = report;
        report = {'provider': 'tenor', 'limit': 5};
        oscard = _closure1_slot3;
        oscard = oscard.locale;
        report['locale'] = oscard;
        michal['query'] = report;
        report = true;
        michal['oldFormErrors'] = report;
        michal['rejectWithError'] = report;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.then;
        michal = function(argFoo) {
            entity = argFoo;
            report = entity.body;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS';
            michal['type'] = oscard;
            michal['items'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['fetchTrendingSearchTerms'] = michal;
    return entity;
})();