// app/modules/global_discovery_servers/GlobalDiscoveryServersActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscard;
    entity = function() { // Original name: _fetchSearchResults
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    vacuum = argFoo;
                    zuuluu = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 768; continue _fun00001 }
 18:
                    verify = vacuum;
                    michal = undefined;
                    option = undefined;
                    golfie = undefined;
                    ctrled = undefined;
                    source = undefined;
                    tangon = undefined;
                    foxtra = undefined;
                    kiloes = undefined;
                    backup = undefined;
                    romeon = undefined;
                    sizing = undefined;
                    var _closure4_slot0 = michal;
                    update = zuuluu.categoryId;
                    option = update;
                    echoed = zuuluu.languageCode;
                    golfie = echoed;
                    ctrled = zuuluu.offset;
                    source = zuuluu.limit;
                    tangon = zuuluu.withCounts;
                    output = _closure1_slot1;
                    offset = _closure1_slot3;
                    report = 3;
                    offset = offset[report];
                    result = output.bind(michal)(offset);
                    output = result.dispatch;
                    offset = {};
                    sequen = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START';
                    offset['type'] = sequen;
                    offset['query'] = vacuum;
                    offset['categoryId'] = update;
                    offset['languageCode'] = echoed;
                    offset = output.bind(result)(offset);
 142: // try_start_0
                    output = _closure1_slot0;
                    result = _closure1_slot3;
                    offset = 4;
                    offset = result[offset];
                    offset = output.bind(michal)(offset);
                    echoed = offset.HTTP;
                    result = echoed.get;
                    offset = {};
                    output = _closure1_slot6;
                    output = output.GUILD_DISCOVERY_SEARCH;
                    offset['url'] = output;
                    update = {};
                    output = verify;
                    update['query'] = output;
                    config = option;
                    sequen = _closure1_slot5;
                    output = null;
                    vacuum = null;
                    if(!(config !== sequen)) { _fun00002_ip = 215; continue _fun00001 }
 212:
                    vacuum = option;
 215:
                    update['category_id'] = vacuum;
                    update['offset'] = ctrled;
                    update['limit'] = source;
                    source = golfie;
                    update['language_code'] = source;
                    source = tangon;
                    update['with_counts'] = source;
                    offset['query'] = update;
                    update = true;
                    offset['oldFormErrors'] = update;
                    update = false;
                    offset['rejectWithError'] = update;
                    offset = result.bind(echoed)(offset);
                    SaveGenerator(address=274);
 272:
                    return offset;
 274:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=17);
                    if(result) { _fun00002_ip = 542; continue _fun00001 }
 283:
                    foxtra = offset;
                    result = offset.body;
                    update = result.guilds;
                    echoed = update.map;
                    source = _closure1_slot0;
                    ctrled = _closure1_slot3;
                    result = 5;
                    result = ctrled[result];
                    result = source.bind(michal)(result);
                    result = result.fromDiscoverableGuildSearchResult;
                    kiloes = echoed.bind(update)(result);
                    result = offset.body;
                    backup = result.total_count;
                    result = tangon;
                    if(!result) { _fun00002_ip = 465; continue _fun00001 }
 350:
                    result = new Array(0);
                    sizing = result;
                    _closure4_slot0 = result;
                    foxtra = foxtra.body;
                    foxtra = foxtra.categories;
                    romeon = foxtra;
                    if(!(output != foxtra)) { _fun00002_ip = 416; continue _fun00001 }
 379:
                    result = romeon;
                    output = result.slice;
                    foxtra = _closure1_slot7;
                    romeon = 0;
                    foxtra = output.bind(result)(romeon, foxtra);
                    romeon = foxtra.forEach;
                    yankee = function(argFoo) {
                        entity = argFoo;
                        oscard = entity.id;
                        report = entity.count;
                        tangon = _closure4_slot0;
                        zuuluu = tangon.push;
                        entity = global;
                        michal = entity.Number;
                        entity = undefined;
                        oscard = michal.bind(entity)(oscard);
                        michal = new Array(2);
                        michal[0] = oscard;
                        michal[1] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    yankee = romeon.bind(foxtra)(yankee);
 416:
                    romeon = _closure1_slot1;
                    yankee = _closure1_slot3;
                    yankee = yankee[report];
                    foxtra = romeon.bind(michal)(yankee);
                    romeon = foxtra.dispatch;
                    yankee = {};
                    output = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS';
                    yankee['type'] = output;
                    output = verify;
                    yankee['query'] = output;
                    yankee['categoryCounts'] = sizing;
                    yankee = romeon.bind(foxtra)(yankee);
 465:
                    romeon = _closure1_slot1;
                    yankee = _closure1_slot3;
                    yankee = yankee[report];
                    foxtra = romeon.bind(michal)(yankee);
                    romeon = foxtra.dispatch;
                    yankee = {};
                    sizing = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS';
                    yankee['type'] = sizing;
                    sizing = verify;
                    yankee['query'] = sizing;
                    sizing = option;
                    yankee['categoryId'] = sizing;
                    sizing = golfie;
                    yankee['languageCode'] = sizing;
                    yankee['guilds'] = kiloes;
                    yankee['total'] = backup;
                    yankee = romeon.bind(foxtra)(yankee);
 537: // try_end0
                    _fun00002_ip = 765; continue _fun00001;
 542:
                    return offset;
 545: // catch_target0
                    CatchBlockStart(arg_register=12);
                    oscard = foxtra;
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot3;
                    offset = 6;
                    offset = romeon[offset];
                    offset = yankee.bind(michal)(offset);
                    offset = offset.APIError;
                    yankee = offset.prototype;
                    yankee = Object.create(yankee, {constructor: {value: offset}});
                    papara = yankee;
                    cntext = foxtra;
                    offset = new papara[offset](cntext, record);
                    foxtra = offset instanceof Object ? offset : yankee;
                    yankee = _closure1_slot2;
                    offset = 7;
                    offset = romeon[offset];
                    romeon = yankee.bind(michal)(offset);
                    yankee = romeon.trackSearchFailed;
                    offset = {};
                    backup = option;
                    offset['categoryId'] = backup;
                    offset['error'] = foxtra;
                    foxtra = false;
                    offset['willRequestRetry'] = foxtra;
                    offset['isRequestRetry'] = foxtra;
                    offset = yankee.bind(romeon)(offset);
                    if(!tangon) { _fun00002_ip = 708; continue _fun00001 }
 655:
                    offset = _closure1_slot1;
                    tangon = _closure1_slot3;
                    tangon = tangon[report];
                    yankee = offset.bind(michal)(tangon);
                    offset = yankee.dispatch;
                    tangon = {};
                    romeon = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS';
                    tangon['type'] = romeon;
                    romeon = verify;
                    tangon['query'] = romeon;
                    romeon = new Array(0);
                    tangon['categoryCounts'] = romeon;
                    tangon = offset.bind(yankee)(tangon);
 708:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot3;
                    zuuluu = zuuluu[report];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    offset = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE';
                    zuuluu['type'] = offset;
                    zuuluu['query'] = verify;
                    zuuluu['categoryId'] = option;
                    zuuluu['languageCode'] = golfie;
                    zuuluu['error'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 765:
                    return michal;
 768:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot8 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = tangon.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.DISCOVERY_ALL_CATEGORIES_ID;
    var _closure1_slot5 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.Endpoints;
    var _closure1_slot6 = michal;
    tangon = 8;
    var _closure1_slot7 = tangon;
    michal = {};
    option = function() { // Original name: fetchSearchResults
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    michal['fetchSearchResults'] = option;
    option = function(argFoo) { // Original name: clearSearchResults
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golfie = argFoo;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot3;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR';
            michal['type'] = report;
            oscard = null;
            option = oscard == golfie;
            report = undefined;
            if(option) { _fun00004_ip = 60; continue _fun00003 }
 54:
            report = golfie.ignoreQueries;
 60:
            if(!(oscard == report)) { _fun00004_ip = 68; continue _fun00003 }
 64:
            report = new Array(0);
 68:
            michal['ignoreQueries'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal['clearSearchResults'] = option;
    golfie = function() { // Original name: resetSearchLayout
        zuuluu = _closure1_slot1;
        michal = _closure1_slot3;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['resetSearchLayout'] = golfie;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/global_discovery_servers/GlobalDiscoveryServersActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();