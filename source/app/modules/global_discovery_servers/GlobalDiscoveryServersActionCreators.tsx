// app/modules/global_discovery_servers/GlobalDiscoveryServersActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    tango = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
    entity = function() { // Original name: _fetchSearchResults
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun118067: for(var _fun118067_ip = 0; ; ) switch(_fun118067_ip) {
 0:
                    StartGenerator();
                    vacuum = argFoo;
                    zulu = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun118067_ip = 768; continue _fun118067 }
 18:
                    verify = vacuum;
                    mike = undefined;
                    options = undefined;
                    golf = undefined;
                    control = undefined;
                    source = undefined;
                    tango = undefined;
                    foxtrot = undefined;
                    kilo = undefined;
                    backup = undefined;
                    romeo = undefined;
                    sizing = undefined;
                    var _closure4_slot0 = mike;
                    update = zulu.categoryId;
                    options = update;
                    echo = zulu.languageCode;
                    golf = echo;
                    control = zulu.offset;
                    source = zulu.limit;
                    tango = zulu.withCounts;
                    output = _closure1_slot1;
                    offset = _closure1_slot3;
                    report = 3;
                    offset = offset[report];
                    result = output.bind(mike)(offset);
                    output = result.dispatch;
                    offset = {};
                    sequence = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START';
                    offset['type'] = sequence;
                    offset['query'] = vacuum;
                    offset['categoryId'] = update;
                    offset['languageCode'] = echo;
                    offset = output.bind(result)(offset);
 142: // try_start_0
                    output = _closure1_slot0;
                    result = _closure1_slot3;
                    offset = 4;
                    offset = result[offset];
                    offset = output.bind(mike)(offset);
                    echo = offset.HTTP;
                    result = echo.get;
                    offset = {};
                    output = _closure1_slot6;
                    output = output.GUILD_DISCOVERY_SEARCH;
                    offset['url'] = output;
                    update = {};
                    output = verify;
                    update['query'] = output;
                    config = options;
                    sequence = _closure1_slot5;
                    output = null;
                    vacuum = null;
                    if(!(config !== sequence)) { _fun118067_ip = 215; continue _fun118067 }
 212:
                    vacuum = options;
 215:
                    update['category_id'] = vacuum;
                    update['offset'] = control;
                    update['limit'] = source;
                    source = golf;
                    update['language_code'] = source;
                    source = tango;
                    update['with_counts'] = source;
                    offset['query'] = update;
                    update = true;
                    offset['oldFormErrors'] = update;
                    update = false;
                    offset['rejectWithError'] = update;
                    offset = result.bind(echo)(offset);
                    SaveGenerator(address=274);
 272:
                    return offset;
 274:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=17);
                    if(result) { _fun118067_ip = 542; continue _fun118067 }
 283:
                    foxtrot = offset;
                    result = offset.body;
                    update = result.guilds;
                    echo = update.map;
                    source = _closure1_slot0;
                    control = _closure1_slot3;
                    result = 5;
                    result = control[result];
                    result = source.bind(mike)(result);
                    result = result.fromDiscoverableGuildSearchResult;
                    kilo = echo.bind(update)(result);
                    result = offset.body;
                    backup = result.total_count;
                    result = tango;
                    if(!result) { _fun118067_ip = 465; continue _fun118067 }
 350:
                    result = new Array(0);
                    sizing = result;
                    _closure4_slot0 = result;
                    foxtrot = foxtrot.body;
                    foxtrot = foxtrot.categories;
                    romeo = foxtrot;
                    if(!(output != foxtrot)) { _fun118067_ip = 416; continue _fun118067 }
 379:
                    result = romeo;
                    output = result.slice;
                    foxtrot = _closure1_slot7;
                    romeo = 0;
                    foxtrot = output.bind(result)(romeo, foxtrot);
                    romeo = foxtrot.forEach;
                    yankee = function(argFoo) {
                        entity = argFoo;
                        oscar = entity.id;
                        report = entity.count;
                        tango = _closure4_slot0;
                        zulu = tango.push;
                        entity = global;
                        mike = entity.Number;
                        entity = undefined;
                        oscar = mike.bind(entity)(oscar);
                        mike = new Array(2);
                        mike[0] = oscar;
                        mike[1] = report;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    yankee = romeo.bind(foxtrot)(yankee);
 416:
                    romeo = _closure1_slot1;
                    yankee = _closure1_slot3;
                    yankee = yankee[report];
                    foxtrot = romeo.bind(mike)(yankee);
                    romeo = foxtrot.dispatch;
                    yankee = {};
                    output = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS';
                    yankee['type'] = output;
                    output = verify;
                    yankee['query'] = output;
                    yankee['categoryCounts'] = sizing;
                    yankee = romeo.bind(foxtrot)(yankee);
 465:
                    romeo = _closure1_slot1;
                    yankee = _closure1_slot3;
                    yankee = yankee[report];
                    foxtrot = romeo.bind(mike)(yankee);
                    romeo = foxtrot.dispatch;
                    yankee = {};
                    sizing = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS';
                    yankee['type'] = sizing;
                    sizing = verify;
                    yankee['query'] = sizing;
                    sizing = options;
                    yankee['categoryId'] = sizing;
                    sizing = golf;
                    yankee['languageCode'] = sizing;
                    yankee['guilds'] = kilo;
                    yankee['total'] = backup;
                    yankee = romeo.bind(foxtrot)(yankee);
 537: // try_end0
                    _fun118067_ip = 765; continue _fun118067;
 542:
                    return offset;
 545: // catch_target0
                    CatchBlockStart(arg_register=12);
                    oscar = foxtrot;
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot3;
                    offset = 6;
                    offset = romeo[offset];
                    offset = yankee.bind(mike)(offset);
                    offset = offset.APIError;
                    yankee = offset.prototype;
                    yankee = Object.create(yankee, {constructor: {value: offset}});
                    papa = yankee;
                    context = foxtrot;
                    offset = new papa[offset](context, record);
                    foxtrot = offset instanceof Object ? offset : yankee;
                    yankee = _closure1_slot2;
                    offset = 7;
                    offset = romeo[offset];
                    romeo = yankee.bind(mike)(offset);
                    yankee = romeo.trackSearchFailed;
                    offset = {};
                    backup = options;
                    offset['categoryId'] = backup;
                    offset['error'] = foxtrot;
                    foxtrot = false;
                    offset['willRequestRetry'] = foxtrot;
                    offset['isRequestRetry'] = foxtrot;
                    offset = yankee.bind(romeo)(offset);
                    if(!tango) { _fun118067_ip = 708; continue _fun118067 }
 655:
                    offset = _closure1_slot1;
                    tango = _closure1_slot3;
                    tango = tango[report];
                    yankee = offset.bind(mike)(tango);
                    offset = yankee.dispatch;
                    tango = {};
                    romeo = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS';
                    tango['type'] = romeo;
                    romeo = verify;
                    tango['query'] = romeo;
                    romeo = new Array(0);
                    tango['categoryCounts'] = romeo;
                    tango = offset.bind(yankee)(tango);
 708:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot3;
                    zulu = zulu[report];
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    offset = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE';
                    zulu['type'] = offset;
                    zulu['query'] = verify;
                    zulu['categoryId'] = options;
                    zulu['languageCode'] = golf;
                    zulu['error'] = oscar;
                    zulu = tango.bind(report)(zulu);
 765:
                    return mike;
 768:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot8 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.DISCOVERY_ALL_CATEGORIES_ID;
    var _closure1_slot5 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.Endpoints;
    var _closure1_slot6 = mike;
    tango = 8;
    var _closure1_slot7 = tango;
    mike = {};
    options = function() { // Original name: fetchSearchResults
        entity = undefined;
        tango = _closure1_slot8;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    mike['fetchSearchResults'] = options;
    options = function(argFoo) { // Original name: clearSearchResults
        _fun118070: for(var _fun118070_ip = 0; ; ) switch(_fun118070_ip) {
 0:
            golf = argFoo;
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR';
            mike['type'] = report;
            oscar = null;
            options = oscar == golf;
            report = undefined;
            if(options) { _fun118070_ip = 60; continue _fun118070 }
 54:
            report = golf.ignoreQueries;
 60:
            if(!(oscar == report)) { _fun118070_ip = 68; continue _fun118070 }
 64:
            report = new Array(0);
 68:
            mike['ignoreQueries'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['clearSearchResults'] = options;
    golf = function() { // Original name: resetSearchLayout
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['resetSearchLayout'] = golf;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/global_discovery_servers/GlobalDiscoveryServersActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();