// app/actions/GIFPickerActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    verify = argBar;
    yankee = argBaz;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = offset;
    golf = function(argFoo) { // Original name: trackSearchStart
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            entity = null;
            if(!(entity == zulu)) { _fun00002_ip = 13; continue _fun00001 }
 9:
            oscar = {};
            _fun00002_ip = 26; continue _fun00001;
 13:
            entity = {};
            mike = 1;
            entity[zulu] = mike;
            oscar = entity;
 26:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 4;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.trackWithMetadata;
            mike = _closure1_slot5;
            zulu = mike.SEARCH_STARTED;
            mike = {};
            options = _closure1_slot7;
            options = options.GIF;
            mike['search_type'] = options;
            options = _closure1_slot4;
            golf = options.getAnalyticsID;
            golf = golf.bind(options)();
            mike['load_id'] = golf;
            golf = global;
            options = golf.Object;
            golf = options.keys;
            golf = golf.bind(options)(oscar);
            golf = golf.length;
            mike['num_modifiers'] = golf;
            mike['modifiers'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    var _closure1_slot13 = golf;
    oscar = function(argFoo, argBar) { // Original name: trackSearchResultViewed
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            golf = arguments[2];
            entity = undefined;
            if(!(golf === entity)) { _fun00004_ip = 14; continue _fun00003 }
 12:
            golf = {};
 14:
            tango = golf.startTime;
            zulu = null;
            oscar = Object.create(zulu);
            mike = 0;
            oscar['startTime'] = mike;
            backup = {};
            foxtrot = golf;
            romeo = oscar;
            offset = copyDataProperties(backup, foxtrot, romeo);
            yankee = {'offset': 0, 'limit': null};
            mike = report.length;
            yankee['totalResults'] = mike;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            oscar = 5;
            oscar = options[oscar];
            verify = golf.bind(entity)(oscar);
            options = verify.calculateAnalyticsMetadata;
            golf = _closure1_slot4;
            oscar = golf.getAnalyticsID;
            golf = oscar.bind(golf)();
            oscar = {};
            backup = oscar;
            foxtrot = yankee;
            yankee = copyDataProperties(backup, foxtrot);
            backup = oscar;
            foxtrot = offset;
            offset = copyDataProperties(backup, foxtrot);
            offset = report.length;
            report = 'results';
            oscar[report] = offset;
            report = argBar;
            golf = options.bind(verify)(golf, report, oscar);
            if(!(zulu != tango)) { _fun00004_ip = 189; continue _fun00003 }
 157:
            oscar = {};
            zulu = global;
            report = zulu.Date;
            zulu = report.now;
            zulu = zulu.bind(report)();
            zulu = zulu - tango;
            oscar['load_duration_ms'] = zulu;
            _fun00004_ip = 191; continue _fun00003;
 189:
            oscar = {};
 191:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 4;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.trackWithMetadata;
            mike = _closure1_slot5;
            zulu = mike.SEARCH_RESULT_VIEWED;
            mike = {};
            backup = mike;
            foxtrot = golf;
            golf = copyDataProperties(backup, foxtrot);
            backup = mike;
            foxtrot = oscar;
            oscar = copyDataProperties(backup, foxtrot);
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    var _closure1_slot14 = oscar;
    foxtrot = function(argFoo, argBar, argBaz) { // Original name: doSearchRequest
        verify = argFoo;
        tango = argBar;
        golf = argBaz;
        var _closure2_slot0 = verify;
        var _closure2_slot1 = tango;
        var _closure2_slot2 = golf;
        entity = global;
        zulu = entity.Date;
        entity = zulu.now;
        entity = entity.bind(zulu)();
        var _closure2_slot3 = entity;
        zulu = _closure1_slot13;
        entity = undefined;
        zulu = zulu.bind(entity)(tango);
        tango = _closure1_slot0;
        report = _closure1_slot2;
        zulu = 6;
        zulu = report[zulu];
        zulu = tango.bind(entity)(zulu);
        report = zulu.HTTP;
        tango = report.get;
        zulu = {};
        oscar = _closure1_slot6;
        oscar = oscar.GIFS_SEARCH;
        zulu['url'] = oscar;
        oscar = {};
        oscar['q'] = verify;
        offset = _closure1_slot4;
        verify = offset.getSelectedFormat;
        verify = verify.bind(offset)();
        oscar['media_format'] = verify;
        verify = 'tenor';
        oscar['provider'] = verify;
        options = _closure1_slot3;
        options = options.locale;
        oscar['locale'] = options;
        oscar['limit'] = golf;
        zulu['query'] = oscar;
        oscar = true;
        zulu['oldFormErrors'] = oscar;
        zulu['rejectWithError'] = oscar;
        report = tango.bind(report)(zulu);
        tango = report.then;
        zulu = function(argFoo) {
            entity = argFoo;
            report = entity.body;
            golf = _closure1_slot14;
            tango = _closure2_slot1;
            zulu = {};
            entity = _closure2_slot3;
            zulu['startTime'] = entity;
            entity = _closure2_slot2;
            zulu['limit'] = entity;
            entity = undefined;
            zulu = golf.bind(entity)(report, tango, zulu);
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 7;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            golf = 'GIF_PICKER_QUERY_SUCCESS';
            mike['type'] = golf;
            oscar = _closure2_slot0;
            mike['query'] = oscar;
            mike['items'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'GIF_PICKER_QUERY_FAILURE';
            entity['type'] = tango;
            tango = _closure2_slot0;
            entity['query'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    var _closure1_slot15 = foxtrot;
    report = function() { // Original name: resetSearch
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {'type': 'GIF_PICKER_QUERY', 'query': ''};
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot16 = report;
    tango = function(argFoo) { // Original name: gifUrlKey
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            entity = 10;
            entity = report[entity];
            oscar = undefined;
            tango = tango.bind(oscar)(entity);
            entity = tango.toURLSafe;
            report = entity.bind(tango)(mike);
            tango = null;
            entity = mike;
            if(!(tango != report)) { _fun00006_ip = 122; continue _fun00005 }
 48:
            options = _closure1_slot0;
            tango = _closure1_slot2;
            golf = 11;
            tango = tango[golf];
            options = options.bind(oscar)(tango);
            tango = options.isAttachmentUrl;
            tango = tango.bind(options)(report);
            if(!tango) { _fun00006_ip = 119; continue _fun00005 }
 82:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[golf];
            tango = tango.bind(oscar)(zulu);
            zulu = tango.removeSignedUrlParameters;
            tango = zulu.bind(tango)(report);
            zulu = tango.toString;
            mike = zulu.bind(tango)();
 119:
            entity = mike;
 122:
            return entity;
        }
    };
    var _closure1_slot17 = tango;
    entity = global;
    backup = entity.Object;
    romeo = backup.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = romeo.bind(backup)(zulu, entity, options);
    entity = 0;
    options = offset[entity];
    entity = undefined;
    options = yankee.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 1;
    options = offset[options];
    options = yankee.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 2;
    options = offset[options];
    options = verify.bind(entity)(options);
    romeo = options.AnalyticEvents;
    var _closure1_slot5 = romeo;
    romeo = options.Endpoints;
    var _closure1_slot6 = romeo;
    romeo = options.SearchTypes;
    var _closure1_slot7 = romeo;
    options = options.GIFPickerResultTypes;
    var _closure1_slot8 = options;
    options = 3;
    options = offset[options];
    options = verify.bind(entity)(options);
    romeo = options.MAX_FAVORITE_GIFS_SIZE;
    var _closure1_slot9 = romeo;
    options = options.UserSettingsDelay;
    var _closure1_slot10 = options;
    options = /-/g;
    var _closure1_slot11 = options;
    options = 8;
    options = offset[options];
    romeo = yankee.bind(entity)(options);
    yankee = romeo.debounce;
    options = 250;
    options = yankee.bind(romeo)(foxtrot, options);
    var _closure1_slot12 = options;
    options = 17;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'actions/GIFPickerActionCreators.tsx';
    options = verify.bind(offset)(options);
    zulu['trackSearchStart'] = golf;
    zulu['trackSearchResultViewed'] = oscar;
    oscar = function(argFoo, argBar) { // Original name: search
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            tango = argBar;
            oscar = arguments[2];
            zulu = arguments[3];
            entity = undefined;
            if(!(oscar === entity)) { _fun00008_ip = 20; continue _fun00007 }
 18:
            oscar = false;
 20:
            mike = '';
            if(!(mike !== report)) { _fun00008_ip = 106; continue _fun00007 }
 28:
            options = _closure1_slot1;
            verify = _closure1_slot2;
            golf = 7;
            golf = verify[golf];
            verify = options.bind(entity)(golf);
            options = verify.dispatch;
            golf = {};
            offset = 'GIF_PICKER_QUERY';
            golf['type'] = offset;
            golf['query'] = report;
            golf = options.bind(verify)(golf);
            if(oscar) { _fun00008_ip = 93; continue _fun00007 }
 80:
            oscar = _closure1_slot12;
            oscar = oscar.bind(entity)(report, tango, zulu);
            _fun00008_ip = 117; continue _fun00007;
 93:
            mike = _closure1_slot15;
            mike = mike.bind(entity)(report, tango, zulu);
            _fun00008_ip = 117; continue _fun00007;
 106:
            mike = _closure1_slot16;
            mike = mike.bind(entity)();
 117:
            return entity;
        }
    };
    zulu['search'] = oscar;
    oscar = function(argFoo) { // Original name: fetchSuggestions
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golf = argFoo;
            var _closure2_slot0 = golf;
            mike = '';
            mike = mike !== golf;
            if(!mike) { _fun00010_ip = 26; continue _fun00009 }
 20:
            zulu = null;
            mike = zulu != golf;
 26:
            if(!mike) { _fun00010_ip = 150; continue _fun00009 }
 29:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 6;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            tango = mike.HTTP;
            zulu = tango.get;
            mike = {};
            report = _closure1_slot6;
            report = report.GIFS_SUGGEST;
            mike['url'] = report;
            report = {'q': null, 'provider': 'tenor', 'limit': 5};
            report['q'] = golf;
            oscar = _closure1_slot3;
            oscar = oscar.locale;
            report['locale'] = oscar;
            mike['query'] = report;
            report = true;
            mike['oldFormErrors'] = report;
            mike['rejectWithError'] = report;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.then;
            entity = function(argFoo) {
                entity = argFoo;
                report = entity.body;
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 7;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                oscar = 'GIF_PICKER_SUGGESTIONS_SUCCESS';
                mike['type'] = oscar;
                oscar = _closure2_slot0;
                mike['query'] = oscar;
                mike['items'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
 150:
            entity = undefined;
            return entity;
        }
    };
    zulu['fetchSuggestions'] = oscar;
    zulu['resetSearch'] = report;
    report = function(argFoo) { // Original name: trackSelectGIF
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            yankee = entity.type;
            offset = entity.index;
            kilo = entity.offset;
            backup = entity.limit;
            foxtrot = entity.results;
            romeo = entity.totalResults;
            oscar = entity.query;
            golf = entity.gifId;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 5;
            mike = tango[entity];
            entity = undefined;
            verify = zulu.bind(entity)(mike);
            options = verify.calculateAnalyticsMetadata;
            zulu = _closure1_slot4;
            mike = zulu.getAnalyticsID;
            zulu = mike.bind(zulu)();
            mike = {};
            mike['offset'] = kilo;
            mike['limit'] = backup;
            mike['results'] = foxtrot;
            mike['totalResults'] = romeo;
            output = options.bind(verify)(zulu, yankee, mike);
            zulu = _closure1_slot1;
            mike = 4;
            mike = tango[mike];
            options = zulu.bind(entity)(mike);
            tango = options.trackWithMetadata;
            mike = _closure1_slot5;
            zulu = mike.SEARCH_RESULT_SELECTED;
            mike = {};
            result = mike;
            verify = copyDataProperties(result, output);
            verify = 'index_num';
            mike[verify] = offset;
            offset = 'GIF Picker';
            verify = 'source_object';
            mike[verify] = offset;
            verify = 'query';
            mike[verify] = oscar;
            mike = tango.bind(options)(zulu, mike);
            mike = null;
            if(!(mike != golf)) { _fun00012_ip = 290; continue _fun00011 }
 212:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 6;
            mike = tango[mike];
            mike = zulu.bind(entity)(mike);
            tango = mike.HTTP;
            zulu = tango.post;
            mike = {};
            report = _closure1_slot6;
            report = report.GIFS_SELECT;
            mike['url'] = report;
            report = {};
            report['id'] = golf;
            report['q'] = oscar;
            mike['body'] = report;
            report = true;
            mike['oldFormErrors'] = report;
            mike['rejectWithError'] = report;
            mike = zulu.bind(tango)(mike);
 290:
            return entity;
        }
    };
    zulu['trackSelectGIF'] = report;
    report = function() { // Original name: initializeSearch
        tango = _closure1_slot0;
        report = _closure1_slot2;
        entity = 9;
        zulu = report[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.v4;
        golf = zulu.bind(tango)();
        oscar = golf.replace;
        tango = _closure1_slot11;
        zulu = '';
        verify = oscar.bind(golf)(tango, zulu);
        var _closure2_slot0 = verify;
        tango = _closure1_slot1;
        zulu = 4;
        zulu = report[zulu];
        options = tango.bind(entity)(zulu);
        golf = options.trackWithMetadata;
        zulu = _closure1_slot5;
        oscar = zulu.SEARCH_OPENED;
        zulu = {};
        offset = _closure1_slot7;
        offset = offset.GIF;
        zulu['search_type'] = offset;
        zulu['load_id'] = verify;
        zulu = golf.bind(options)(oscar, zulu);
        zulu = 7;
        zulu = report[zulu];
        tango = tango.bind(entity)(zulu);
        zulu = tango.wait;
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'GIF_PICKER_INITIALIZE';
            mike['type'] = report;
            report = _closure2_slot0;
            mike['analyticsID'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['initializeSearch'] = report;
    report = function() { // Original name: fetchTrending
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        tango = mike.HTTP;
        zulu = tango.get;
        mike = {};
        report = _closure1_slot6;
        report = report.GIFS_TRENDING;
        mike['url'] = report;
        report = {};
        golf = 'tenor';
        report['provider'] = golf;
        golf = _closure1_slot3;
        golf = golf.locale;
        report['locale'] = golf;
        golf = _closure1_slot4;
        oscar = golf.getSelectedFormat;
        oscar = oscar.bind(golf)();
        report['media_format'] = oscar;
        mike['query'] = report;
        report = true;
        mike['oldFormErrors'] = report;
        mike['rejectWithError'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function(argFoo) {
            entity = argFoo;
            entity = entity.body;
            report = entity.categories;
            oscar = entity.gifs;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            golf = 'GIF_PICKER_TRENDING_FETCH_SUCCESS';
            mike['type'] = golf;
            mike['trendingCategories'] = report;
            report = 0;
            report = oscar[report];
            mike['trendingGIFPreview'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['fetchTrending'] = report;
    report = function(argFoo) { // Original name: fetchTrendingGIFs
        golf = argFoo;
        var _closure2_slot0 = golf;
        entity = global;
        zulu = entity.Date;
        entity = zulu.now;
        entity = entity.bind(zulu)();
        var _closure2_slot1 = entity;
        tango = _closure1_slot13;
        entity = _closure1_slot8;
        zulu = entity.TRENDING_GIFS;
        entity = undefined;
        zulu = tango.bind(entity)(zulu);
        tango = _closure1_slot0;
        report = _closure1_slot2;
        zulu = 6;
        zulu = report[zulu];
        zulu = tango.bind(entity)(zulu);
        report = zulu.HTTP;
        tango = report.get;
        zulu = {};
        oscar = _closure1_slot6;
        oscar = oscar.GIFS_TRENDING_GIFS;
        zulu['url'] = oscar;
        oscar = {};
        offset = _closure1_slot4;
        verify = offset.getSelectedFormat;
        verify = verify.bind(offset)();
        oscar['media_format'] = verify;
        verify = 'tenor';
        oscar['provider'] = verify;
        options = _closure1_slot3;
        options = options.locale;
        oscar['locale'] = options;
        oscar['limit'] = golf;
        zulu['query'] = oscar;
        oscar = true;
        zulu['oldFormErrors'] = oscar;
        zulu['rejectWithError'] = oscar;
        report = tango.bind(report)(zulu);
        tango = report.then;
        zulu = function(argFoo) {
            entity = argFoo;
            report = entity.body;
            oscar = _closure1_slot14;
            entity = _closure1_slot8;
            tango = entity.TRENDING_GIFS;
            zulu = {};
            golf = _closure2_slot1;
            zulu['startTime'] = golf;
            entity = _closure2_slot0;
            zulu['limit'] = entity;
            entity = undefined;
            zulu = oscar.bind(entity)(report, tango, zulu);
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 7;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'GIF_PICKER_QUERY_SUCCESS';
            mike['type'] = oscar;
            mike['items'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'GIF_PICKER_QUERY_FAILURE';
            mike['type'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['fetchTrendingGIFs'] = report;
    zulu['gifUrlKey'] = tango;
    tango = function(argFoo) { // Original name: addFavoriteGIF
        entity = argFoo;
        var _closure2_slot0 = entity;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        entity = 12;
        tango = tango[entity];
        entity = undefined;
        tango = report.bind(entity)(tango);
        oscar = tango.FrecencyUserSettingsActionCreators;
        report = oscar.updateAsync;
        zulu = _closure1_slot10;
        tango = zulu.INFREQUENT_USER_ACTION;
        zulu = 'favoriteGifs';
        mike = function(argFoo) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                mike = argFoo;
                zulu = _closure1_slot1;
                entity = _closure1_slot2;
                report = 8;
                entity = entity[report];
                options = undefined;
                oscar = zulu.bind(options)(entity);
                zulu = oscar.max;
                entity = global;
                verify = entity.Object;
                golf = verify.values;
                entity = mike.gifs;
                verify = golf.bind(verify)(entity);
                golf = verify.map;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.order;
                    return entity;
                };
                entity = golf.bind(verify)(entity);
                entity = zulu.bind(oscar)(entity);
                zulu = null;
                zulu = zulu != entity;
                verify = 0;
                if(!zulu) { _fun00014_ip = 95; continue _fun00013 }
 92:
                verify = entity;
 95:
                oscar = mike.gifs;
                zulu = _closure1_slot17;
                golf = _closure2_slot0;
                entity = golf.url;
                zulu = zulu.bind(options)(entity);
                entity = {};
                romeo = entity;
                yankee = golf;
                golf = copyDataProperties(romeo, yankee);
                golf = 1;
                verify = verify + golf;
                golf = 'order';
                entity[golf] = verify;
                oscar[zulu] = entity;
                zulu = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 13;
                entity = oscar[entity];
                entity = zulu.bind(options)(entity);
                zulu = entity.FavoriteGIFs;
                entity = zulu.toBinary;
                entity = entity.bind(zulu)(mike);
                zulu = entity.length;
                entity = _closure1_slot9;
                if(!(!(zulu > entity))) { _fun00014_ip = 302; continue _fun00013 }
 204:
                zulu = _closure1_slot1;
                entity = _closure1_slot2;
                entity = entity[report];
                report = zulu.bind(options)(entity);
                zulu = report.size;
                entity = mike.gifs;
                oscar = zulu.bind(report)(entity);
                entity = 2;
                if(!(oscar > entity)) { _fun00014_ip = 252; continue _fun00013 }
 244:
                entity = true;
                mike['hideTooltip'] = entity;
 252:
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 16;
                entity = zulu[entity];
                report = mike.bind(options)(entity);
                zulu = report.track;
                entity = _closure1_slot5;
                mike = entity.GIF_FAVORITED;
                entity = {};
                entity['total_num_favorited'] = oscar;
                entity = zulu.bind(report)(mike, entity);
                return options;
 302:
                mike = _closure1_slot1;
                verify = _closure1_slot2;
                entity = 14;
                entity = verify[entity];
                zulu = mike.bind(options)(entity);
                mike = zulu.show;
                entity = {};
                golf = _closure1_slot0;
                tango = 15;
                report = verify[tango];
                report = golf.bind(options)(report);
                offset = report.intl;
                oscar = offset.string;
                report = verify[tango];
                report = golf.bind(options)(report);
                report = report.t;
                report = report.+XYXtb;
                report = oscar.bind(offset)(report);
                entity['title'] = report;
                report = verify[tango];
                report = golf.bind(options)(report);
                oscar = report.intl;
                report = oscar.string;
                tango = verify[tango];
                tango = golf.bind(options)(tango);
                tango = tango.t;
                tango = tango.YSDH9v;
                tango = report.bind(oscar)(tango);
                entity['body'] = tango;
                entity = mike.bind(zulu)(entity);
                entity = false;
                return entity;
            }
        };
        mike = report.bind(oscar)(zulu, mike, tango);
        return entity;
    };
    zulu['addFavoriteGIF'] = tango;
    tango = function(argFoo) { // Original name: removeFavoriteGIF
        entity = argFoo;
        var _closure2_slot0 = entity;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        entity = 12;
        tango = tango[entity];
        entity = undefined;
        tango = report.bind(entity)(tango);
        oscar = tango.FrecencyUserSettingsActionCreators;
        report = oscar.updateAsync;
        zulu = _closure1_slot10;
        tango = zulu.INFREQUENT_USER_ACTION;
        zulu = 'favoriteGifs';
        mike = function(argFoo) {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                oscar = argFoo;
                zulu = _closure2_slot0;
                mike = oscar.gifs;
                zulu = zulu in mike;
                mike = oscar.gifs;
                if(zulu) { _fun00016_ip = 53; continue _fun00015 }
 29:
                report = _closure1_slot17;
                tango = _closure2_slot0;
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                zulu = delete mike[zulu];
                _fun00016_ip = 61; continue _fun00015;
 53:
                entity = _closure2_slot0;
                entity = delete mike[entity];
 61:
                options = _closure1_slot1;
                verify = _closure1_slot2;
                entity = 16;
                zulu = verify[entity];
                entity = undefined;
                report = options.bind(entity)(zulu);
                tango = report.track;
                mike = _closure1_slot5;
                zulu = mike.GIF_UNFAVORITED;
                mike = {};
                golf = 8;
                golf = verify[golf];
                options = options.bind(entity)(golf);
                golf = options.size;
                oscar = oscar.gifs;
                oscar = golf.bind(options)(oscar);
                mike['total_num_favorited'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            }
        };
        mike = report.bind(oscar)(zulu, mike, tango);
        return entity;
    };
    zulu['removeFavoriteGIF'] = tango;
    mike = function() { // Original name: fetchTrendingSearchTerms
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        tango = mike.HTTP;
        zulu = tango.get;
        mike = {};
        report = _closure1_slot6;
        report = report.GIFS_TRENDING_SEARCH;
        mike['url'] = report;
        report = {'provider': 'tenor', 'limit': 5};
        oscar = _closure1_slot3;
        oscar = oscar.locale;
        report['locale'] = oscar;
        mike['query'] = report;
        report = true;
        mike['oldFormErrors'] = report;
        mike['rejectWithError'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function(argFoo) {
            entity = argFoo;
            report = entity.body;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS';
            mike['type'] = oscar;
            mike['items'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['fetchTrendingSearchTerms'] = mike;
    return entity;
})();