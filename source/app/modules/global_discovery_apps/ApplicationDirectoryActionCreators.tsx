// app/modules/global_discovery_apps/ApplicationDirectoryActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    verify = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _getEmbedApplication
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    yankee = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 486; continue _fun00001 }
 15:
                    oscard = yankee;
                    michal = undefined;
                    tangon = undefined;
                    offset = undefined;
                    var _closure4_slot0 = michal;
                    verify = undefined;
                    var _closure4_slot1 = michal;
                    zuuluu = global;
                    report = zuuluu.Date;
                    zuuluu = report.now;
                    tangon = zuuluu.bind(report)();
                    option = _closure1_slot19;
                    report = option.get;
                    report = report.bind(option)(yankee);
                    option = null;
                    option = option != report;
                    yankee = 0;
                    if(!option) { _fun00002_ip = 82; continue _fun00001 }
 79:
                    yankee = report;
 82:
                    romeon = _closure1_slot6;
                    option = romeon.getApplicationFetchState;
                    report = oscard;
                    option = option.bind(romeon)(report);
                    report = _closure1_slot7;
                    report = report.FETCHING;
                    if(!(option !== report)) { _fun00002_ip = 483; continue _fun00001 }
 117:
                    romeon = _closure1_slot6;
                    option = romeon.isInvalidApplication;
                    report = oscard;
                    report = option.bind(romeon)(report);
                    if(report) { _fun00002_ip = 483; continue _fun00001 }
 141:
                    option = tangon;
                    report = _closure1_slot18;
                    report = yankee + report;
                    if(!(!(option < report))) { _fun00002_ip = 483; continue _fun00001 }
 159:
                    option = _closure1_slot19;
                    report = option.set;
                    backup = oscard;
                    tangon = report.bind(option)(backup, tangon);
                    option = _closure1_slot1;
                    yankee = _closure1_slot2;
                    report = 11;
                    tangon = yankee[report];
                    foxtra = option.bind(michal)(tangon);
                    romeon = foxtra.dispatch;
                    tangon = {};
                    kiloes = 'APPLICATION_DIRECTORY_FETCH_APPLICATION';
                    tangon['type'] = kiloes;
                    tangon['applicationId'] = backup;
                    tangon = romeon.bind(foxtra)(tangon);
                    tangon = 12;
                    tangon = yankee[tangon];
                    romeon = option.bind(michal)(tangon);
                    tangon = romeon.prototype;
                    option = Object.create(tangon, {constructor: {value: romeon}});
                    output = 1000;
                    sizing = 5000;
                    result = option;
                    tangon = new result[romeon](output, sizing, kiloes);
                    tangon = tangon instanceof Object ? tangon : option;
                    offset = tangon;
                    _closure4_slot0 = tangon;
                    tangon = function(argFoo, argBar) { // Original name: interceptResponse
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            entity = argBar;
                            var _closure5_slot0 = entity;
                            entity = argFoo;
                            zuuluu = entity.status;
                            entity = 429;
                            entity = entity === zuuluu;
                            if(!entity) { _fun00004_ip = 50; continue _fun00003 }
 30:
                            zuuluu = _closure4_slot0;
                            tangon = zuuluu.fails;
                            zuuluu = 10;
                            entity = tangon < zuuluu;
 50:
                            if(!entity) { _fun00004_ip = 80; continue _fun00003 }
 53:
                            tangon = _closure4_slot0;
                            zuuluu = tangon.fail;
                            michal = function() {
                                zuuluu = _closure5_slot0;
                                michal = _closure4_slot1;
                                entity = undefined;
                                michal = zuuluu.bind(entity)(entity, michal);
                                return entity;
                            };
                            michal = zuuluu.bind(tangon)(michal);
                            entity = true;
 80:
                            return entity;
                        }
                    };
                    verify = tangon;
                    _closure4_slot1 = tangon;
 288: // try_start_0
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    tangon = 13;
                    tangon = option[tangon];
                    tangon = golfie.bind(michal)(tangon);
                    option = tangon.HTTP;
                    golfie = option.get;
                    tangon = {};
                    foxtra = _closure1_slot17;
                    romeon = foxtra.APPLICATION_DIRECTORY_EMBED_APPLICATION;
                    yankee = oscard;
                    yankee = romeon.bind(foxtra)(yankee);
                    tangon['url'] = yankee;
                    tangon['backoff'] = offset;
                    offset = 10;
                    tangon['retries'] = offset;
                    tangon['interceptResponse'] = verify;
                    verify = false;
                    tangon['rejectWithError'] = verify;
                    tangon = golfie.bind(option)(tangon);
                    SaveGenerator(address=375);
 373:
                    return tangon;
 375:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 431; continue _fun00001 }
 381:
                    offset = tangon.body;
                    option = _closure1_slot1;
                    golfie = _closure1_slot2;
                    golfie = golfie[report];
                    verify = option.bind(michal)(golfie);
                    option = verify.dispatch;
                    golfie = {};
                    yankee = 'APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS';
                    golfie['type'] = yankee;
                    golfie['application'] = offset;
                    golfie = option.bind(verify)(golfie);
 429: // try_end0
                    _fun00002_ip = 483; continue _fun00001;
 431:
                    return tangon;
 434: // catch_target0
                    CatchBlockStart(arg_register=3);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[report];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {'type': 'APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE', 'applicationId': null, 'isInvalidApplication': true};
                    zuuluu['applicationId'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 483:
                    return michal;
 486:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot20 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: _getApplication
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    report = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 414; continue _fun00005 }
 13:
                    golfie = argFoo;
                    zuuluu = undefined;
                    if(!(report === zuuluu)) { _fun00006_ip = 24; continue _fun00005 }
 22:
                    report = {};
 24:
                    yankee = undefined;
                    SaveGenerator(address=30);
 28:
                    return zuuluu;
 30:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00006_ip = 411; continue _fun00005 }
 39:
                    tangon = global;
                    oscard = tangon.Date;
                    tangon = oscard.now;
                    verify = tangon.bind(oscard)();
                    option = _closure1_slot6;
                    oscard = option.getApplicationFetchState;
                    romeon = golfie;
                    option = oscard.bind(option)(romeon);
                    offset = _closure1_slot6;
                    oscard = offset.getApplicationLastFetchTime;
                    offset = oscard.bind(offset)(romeon);
                    oscard = report.dontRefetchMs;
                    yankee = report.noCache;
                    romeon = null;
                    report = romeon != offset;
                    if(!report) { _fun00006_ip = 131; continue _fun00005 }
 115:
                    if(!(romeon == oscard)) { _fun00006_ip = 123; continue _fun00005 }
 119:
                    oscard = _closure1_slot18;
 123:
                    oscard = offset + oscard;
                    report = oscard > verify;
 131:
                    oscard = _closure1_slot7;
                    oscard = oscard.FETCHING;
                    if(!(option !== oscard)) { _fun00006_ip = 408; continue _fun00005 }
 148:
                    if(report) { _fun00006_ip = 408; continue _fun00005 }
 154:
                    option = _closure1_slot1;
                    report = _closure1_slot2;
                    oscard = 11;
                    report = report[oscard];
                    verify = option.bind(zuuluu)(report);
                    option = verify.dispatch;
                    report = {};
                    offset = 'APPLICATION_DIRECTORY_FETCH_APPLICATION';
                    report['type'] = offset;
                    offset = golfie;
                    report['applicationId'] = offset;
                    report = option.bind(verify)(report);
 203: // try_start_0
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 13;
                    report = verify[report];
                    report = option.bind(zuuluu)(report);
                    verify = report.HTTP;
                    option = verify.get;
                    report = {};
                    foxtra = _closure1_slot17;
                    romeon = foxtra.APPLICATION_DIRECTORY_APPLICATION;
                    offset = golfie;
                    offset = romeon.bind(foxtra)(offset);
                    report['url'] = offset;
                    offset = {};
                    romeon = _closure1_slot5;
                    romeon = romeon.locale;
                    offset['locale'] = romeon;
                    offset['nocache'] = yankee;
                    report['query'] = offset;
                    offset = true;
                    report['rejectWithError'] = offset;
                    report = option.bind(verify)(report);
                    SaveGenerator(address=300);
 298:
                    return report;
 300:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(option) { _fun00006_ip = 356; continue _fun00005 }
 306:
                    verify = _closure1_slot1;
                    option = _closure1_slot2;
                    option = option[oscard];
                    offset = verify.bind(zuuluu)(option);
                    verify = offset.dispatch;
                    option = {};
                    yankee = 'APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS';
                    option['type'] = yankee;
                    yankee = report.body;
                    option['application'] = yankee;
                    option = verify.bind(offset)(option);
 354: // try_end0
                    _fun00006_ip = 408; continue _fun00005;
 356:
                    return report;
 359: // catch_target0
                    CatchBlockStart(arg_register=4);
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[oscard];
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {'type': 'APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE', 'applicationId': null, 'isInvalidApplication': true};
                    tangon['applicationId'] = golfie;
                    tangon = report.bind(oscard)(tangon);
 408:
                    return zuuluu;
 411:
                    return michal;
 414:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot21 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function() { // Original name: _getCategories
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 217; continue _fun00007 }
 10:
                    michal = global;
                    zuuluu = michal.Date;
                    michal = zuuluu.now;
                    tangon = michal.bind(zuuluu)();
                    report = _closure1_slot8;
                    michal = report.getLastFetchTimeMs;
                    report = michal.bind(report)();
                    michal = null;
                    if(!(michal != report)) { _fun00008_ip = 65; continue _fun00007 }
 50:
                    michal = _closure1_slot18;
                    michal = report + michal;
                    if(!(!(michal > tangon))) { _fun00008_ip = 212; continue _fun00007 }
 65:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 13;
                    michal = report[michal];
                    report = undefined;
                    michal = tangon.bind(report)(michal);
                    oscard = michal.HTTP;
                    tangon = oscard.get;
                    michal = {};
                    golfie = _closure1_slot17;
                    golfie = golfie.APPLICATION_DIRECTORY_CATEGORIES;
                    michal['url'] = golfie;
                    golfie = {};
                    option = _closure1_slot5;
                    option = option.locale;
                    golfie['locale'] = option;
                    michal['query'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = tangon.bind(oscard)(michal);
                    SaveGenerator(address=149);
 147:
                    return michal;
 149:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 209; continue _fun00007 }
 155:
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 11;
                    zuuluu = oscard[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS';
                    zuuluu['type'] = oscard;
                    oscard = michal.body;
                    zuuluu['categories'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    _fun00008_ip = 212; continue _fun00007;
 209:
                    return michal;
 212:
                    michal = undefined;
                    return michal;
 217:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot22 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function() { // Original name: _getSimilarApplications
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00010_ip = 532; continue _fun00009 }
 13:
                    verify = michal.applicationId;
                    option = michal.guildId;
                    tangon = michal.options;
                    zuuluu = undefined;
                    golfie = undefined;
                    SaveGenerator(address=36);
 34:
                    return zuuluu;
 36:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00010_ip = 529; continue _fun00009 }
 45:
                    report = null;
                    if(!(report == tangon)) { _fun00010_ip = 53; continue _fun00009 }
 51:
                    tangon = {};
 53:
                    golfie = tangon.page;
                    tangon = global;
                    oscard = tangon.Date;
                    tangon = oscard.now;
                    oscard = tangon.bind(oscard)();
                    romeon = _closure1_slot13;
                    yankee = romeon.getFetchState;
                    offset = {};
                    kiloes = verify;
                    offset['applicationId'] = kiloes;
                    backup = option;
                    offset['guildId'] = backup;
                    romeon = yankee.bind(romeon)(offset);
                    foxtra = _closure1_slot13;
                    yankee = foxtra.getSimilarApplications;
                    offset = {};
                    offset['applicationId'] = kiloes;
                    offset['guildId'] = backup;
                    offset = yankee.bind(foxtra)(offset);
                    if(!(report == offset)) { _fun00010_ip = 141; continue _fun00009 }
 139:
                    offset = {};
 141:
                    offset = offset.lastFetchTimeMs;
                    yankee = _closure1_slot14;
                    yankee = yankee.FETCHING;
                    if(!(romeon !== yankee)) { _fun00010_ip = 526; continue _fun00009 }
 164:
                    if(!(report != offset)) { _fun00010_ip = 183; continue _fun00009 }
 168:
                    report = _closure1_slot18;
                    report = offset + report;
                    if(!(!(report > oscard))) { _fun00010_ip = 526; continue _fun00009 }
 183:
                    offset = _closure1_slot1;
                    report = _closure1_slot2;
                    oscard = 11;
                    report = report[oscard];
                    yankee = offset.bind(zuuluu)(report);
                    offset = yankee.dispatch;
                    report = {};
                    romeon = 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS';
                    report['type'] = romeon;
                    romeon = verify;
                    report['applicationId'] = romeon;
                    romeon = option;
                    report['guildId'] = romeon;
                    romeon = golfie;
                    report['page'] = romeon;
                    report = offset.bind(yankee)(report);
 247: // try_start_0
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    report = 13;
                    report = yankee[report];
                    report = offset.bind(zuuluu)(report);
                    yankee = report.HTTP;
                    offset = yankee.get;
                    report = {};
                    backup = _closure1_slot17;
                    foxtra = backup.APPLICATION_DIRECTORY_SIMILAR;
                    romeon = verify;
                    romeon = foxtra.bind(backup)(romeon);
                    report['url'] = romeon;
                    romeon = {};
                    foxtra = option;
                    romeon['guild_id'] = foxtra;
                    foxtra = golfie;
                    romeon['page'] = foxtra;
                    foxtra = _closure1_slot5;
                    foxtra = foxtra.locale;
                    romeon['locale'] = foxtra;
                    report['query'] = romeon;
                    romeon = true;
                    report['rejectWithError'] = romeon;
                    report = offset.bind(yankee)(report);
                    SaveGenerator(address=352);
 350:
                    return report;
 352:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                    if(offset) { _fun00010_ip = 469; continue _fun00009 }
 358:
                    yankee = _closure1_slot1;
                    offset = _closure1_slot2;
                    offset = offset[oscard];
                    romeon = yankee.bind(zuuluu)(offset);
                    yankee = romeon.dispatch;
                    offset = {};
                    foxtra = 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS';
                    offset['type'] = foxtra;
                    foxtra = verify;
                    offset['applicationId'] = foxtra;
                    foxtra = option;
                    offset['guildId'] = foxtra;
                    foxtra = report.body;
                    foxtra = foxtra.applications;
                    offset['similarApplications'] = foxtra;
                    foxtra = report.body;
                    foxtra = foxtra.load_id;
                    offset['loadId'] = foxtra;
                    foxtra = golfie;
                    offset['page'] = foxtra;
                    foxtra = report.body;
                    foxtra = foxtra.num_pages;
                    offset['totalPages'] = foxtra;
                    offset = yankee.bind(romeon)(offset);
 467: // try_end0
                    _fun00010_ip = 526; continue _fun00009;
 469:
                    return report;
 472: // catch_target0
                    CatchBlockStart(arg_register=4);
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[oscard];
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    offset = 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE';
                    tangon['type'] = offset;
                    tangon['applicationId'] = verify;
                    tangon['guildId'] = option;
                    tangon['page'] = golfie;
                    tangon = report.bind(oscard)(tangon);
 526:
                    return zuuluu;
 529:
                    return michal;
 532:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot23 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: _search
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00012_ip = 1022; continue _fun00011 }
 13:
                    output = michal.query;
                    sizing = michal.guildId;
                    tangon = michal.options;
                    echoed = michal.onSuccessCallback;
                    zuuluu = undefined;
                    kiloes = undefined;
                    backup = undefined;
                    foxtra = undefined;
                    romeon = undefined;
                    yankee = undefined;
                    offset = undefined;
                    verify = undefined;
                    option = undefined;
                    golfie = undefined;
                    result = undefined;
                    SaveGenerator(address=62);
 60:
                    return zuuluu;
 62:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00012_ip = 1019; continue _fun00011 }
 71:
                    source = null;
                    if(!(source == tangon)) { _fun00012_ip = 79; continue _fun00011 }
 77:
                    tangon = {};
 79:
                    kiloes = tangon.page;
                    backup = tangon.pageSize;
                    foxtra = tangon.categoryId;
                    romeon = tangon.integrationType;
                    yankee = tangon.minUserInstallCommandCount;
                    offset = tangon.excludeAppsWithCustomInstallUrl;
                    verify = tangon.excludeNonEmbeddedApps;
                    option = tangon.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand;
                    tangon = tangon.source;
                    if(!(zuuluu === tangon)) { _fun00012_ip = 171; continue _fun00011 }
 136:
                    oscard = _closure1_slot0;
                    update = _closure1_slot2;
                    report = 14;
                    report = update[report];
                    report = oscard.bind(zuuluu)(report);
                    report = report.SearchAppsRequestSource;
                    tangon = report.APP_DIRECTORY;
 171:
                    golfie = tangon;
                    tangon = global;
                    report = tangon.Date;
                    tangon = report.now;
                    oscard = tangon.bind(report)();
                    ctrled = _closure1_slot11;
                    update = ctrled.getFetchState;
                    report = {};
                    target = output;
                    report['query'] = target;
                    papara = sizing;
                    report['guildId'] = papara;
                    cntext = kiloes;
                    report['page'] = cntext;
                    record = backup;
                    report['pageSize'] = record;
                    config = foxtra;
                    report['categoryId'] = config;
                    sequen = romeon;
                    report['integrationType'] = sequen;
                    ctrled = update.bind(ctrled)(report);
                    vacuum = _closure1_slot11;
                    update = vacuum.getSearchResults;
                    report = {};
                    report['query'] = target;
                    report['guildId'] = papara;
                    report['page'] = cntext;
                    report['pageSize'] = record;
                    report['categoryId'] = config;
                    report['integrationType'] = sequen;
                    report = update.bind(vacuum)(report);
                    if(!(source == report)) { _fun00012_ip = 308; continue _fun00011 }
 306:
                    report = {};
 308:
                    update = report.lastFetchTimeMs;
                    report = _closure1_slot12;
                    report = report.FETCHING;
                    if(!(ctrled !== report)) { _fun00012_ip = 1016; continue _fun00011 }
 331:
                    if(!(source != update)) { _fun00012_ip = 350; continue _fun00011 }
 335:
                    report = _closure1_slot18;
                    report = update + report;
                    if(!(!(report > oscard))) { _fun00012_ip = 1016; continue _fun00011 }
 350:
                    update = _closure1_slot1;
                    report = _closure1_slot2;
                    oscard = 11;
                    report = report[oscard];
                    ctrled = update.bind(zuuluu)(report);
                    update = ctrled.dispatch;
                    report = {};
                    vacuum = 'APPLICATION_DIRECTORY_FETCH_SEARCH';
                    report['type'] = vacuum;
                    vacuum = output;
                    report['query'] = vacuum;
                    vacuum = sizing;
                    report['guildId'] = vacuum;
                    vacuum = kiloes;
                    report['page'] = vacuum;
                    vacuum = backup;
                    report['pageSize'] = vacuum;
                    vacuum = foxtra;
                    report['categoryId'] = vacuum;
                    vacuum = romeon;
                    report['integrationType'] = vacuum;
                    vacuum = yankee;
                    report['minUserInstallCommandCount'] = vacuum;
                    vacuum = offset;
                    report['excludeAppsWithCustomInstallUrl'] = vacuum;
                    vacuum = verify;
                    report['excludeNonEmbeddedApps'] = vacuum;
                    vacuum = option;
                    report['excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand'] = vacuum;
                    vacuum = golfie;
                    report['source'] = vacuum;
                    report = update.bind(ctrled)(report);
 477: // try_start_0
                    update = _closure1_slot0;
                    ctrled = _closure1_slot2;
                    report = 13;
                    report = ctrled[report];
                    report = update.bind(zuuluu)(report);
                    ctrled = report.HTTP;
                    update = ctrled.get;
                    report = {};
                    vacuum = _closure1_slot17;
                    vacuum = vacuum.APPLICATION_DIRECTORY_SEARCH;
                    report['url'] = vacuum;
                    vacuum = {};
                    sequen = output;
                    vacuum['query'] = sequen;
                    sequen = sizing;
                    vacuum['guild_id'] = sequen;
                    sequen = kiloes;
                    vacuum['page'] = sequen;
                    sequen = backup;
                    vacuum['page_size'] = sequen;
                    sequen = foxtra;
                    vacuum['category_id'] = sequen;
                    sequen = _closure1_slot5;
                    sequen = sequen.locale;
                    vacuum['locale'] = sequen;
                    sequen = romeon;
                    vacuum['integration_type'] = sequen;
                    sequen = yankee;
                    vacuum['min_user_install_command_count'] = sequen;
                    sequen = offset;
                    vacuum['exclude_apps_with_custom_install_url'] = sequen;
                    sequen = verify;
                    vacuum['exclude_non_embedded_apps'] = sequen;
                    sequen = option;
                    vacuum['exclude_embedded_apps_without_primary_entry_point_app_command'] = sequen;
                    sequen = golfie;
                    vacuum['source'] = sequen;
                    report['query'] = vacuum;
                    vacuum = true;
                    report['rejectWithError'] = vacuum;
                    report = update.bind(ctrled)(report);
                    SaveGenerator(address=654);
 652:
                    return report;
 654:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=19);
                    if(update) { _fun00012_ip = 920; continue _fun00011 }
 663:
                    result = report;
                    ctrled = _closure1_slot1;
                    update = _closure1_slot2;
                    update = update[oscard];
                    vacuum = ctrled.bind(zuuluu)(update);
                    ctrled = vacuum.dispatch;
                    update = {};
                    sequen = 'APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS';
                    update['type'] = sequen;
                    sequen = output;
                    update['query'] = sequen;
                    sequen = sizing;
                    update['guildId'] = sequen;
                    sequen = kiloes;
                    update['page'] = sequen;
                    sequen = backup;
                    update['pageSize'] = sequen;
                    sequen = foxtra;
                    update['categoryId'] = sequen;
                    sequen = romeon;
                    update['integrationType'] = sequen;
                    sequen = {};
                    config = report.body;
                    config = config.results;
                    sequen['results'] = config;
                    config = report.body;
                    config = config.counts_by_category;
                    sequen['countsByCategory'] = config;
                    config = report.body;
                    config = config.result_count;
                    sequen['totalCount'] = config;
                    config = report.body;
                    config = config.num_pages;
                    sequen['totalPages'] = config;
                    config = report.body;
                    config = config.type;
                    sequen['type'] = config;
                    config = report.body;
                    config = config.load_id;
                    sequen['loadId'] = config;
                    update['result'] = sequen;
                    sequen = yankee;
                    update['minUserInstallCommandCount'] = sequen;
                    sequen = offset;
                    update['excludeAppsWithCustomInstallUrl'] = sequen;
                    sequen = verify;
                    update['excludeNonEmbeddedApps'] = sequen;
                    sequen = option;
                    update['excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand'] = sequen;
                    sequen = golfie;
                    update['source'] = sequen;
                    update = ctrled.bind(vacuum)(update);
                    update = echoed;
                    if(!(source != update)) { _fun00012_ip = 918; continue _fun00011 }
 902:
                    result = result.body;
                    result = result.result_count;
                    result = echoed.bind(zuuluu)(result);
 918: // try_end0
                    _fun00012_ip = 1016; continue _fun00011;
 920:
                    return report;
 923: // catch_target0
                    CatchBlockStart(arg_register=4);
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[oscard];
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    result = 'APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE';
                    tangon['type'] = result;
                    tangon['query'] = output;
                    tangon['guildId'] = sizing;
                    tangon['page'] = kiloes;
                    tangon['pageSize'] = backup;
                    tangon['categoryId'] = foxtra;
                    tangon['integrationType'] = romeon;
                    tangon['minUserInstallCommandCount'] = yankee;
                    tangon['excludeAppsWithCustomInstallUrl'] = offset;
                    tangon['excludeNonEmbeddedApps'] = verify;
                    tangon['excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand'] = option;
                    tangon['source'] = golfie;
                    tangon = report.bind(oscard)(tangon);
 1016:
                    return zuuluu;
 1019:
                    return michal;
 1022:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot24 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: _fetchCollections
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    michal = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00014_ip = 742; continue _fun00013 }
 13:
                    zuuluu = undefined;
                    if(!(michal === zuuluu)) { _fun00014_ip = 21; continue _fun00013 }
 19:
                    michal = {};
 21:
                    report = michal.surface;
                    if(!(report === zuuluu)) { _fun00014_ip = 66; continue _fun00013 }
 31:
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    oscard = 17;
                    oscard = offset[oscard];
                    oscard = verify.bind(zuuluu)(oscard);
                    oscard = oscard.ApplicationCollectionSurface;
                    report = oscard.APPLICATION_DIRECTORY;
 66:
                    option = report;
                    michal = michal.activeState;
                    if(!(michal === zuuluu)) { _fun00014_ip = 114; continue _fun00013 }
 79:
                    oscard = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 18;
                    report = verify[report];
                    report = oscard.bind(zuuluu)(report);
                    report = report.ApplicationCollectionActiveState;
                    michal = report.ACTIVE;
 114:
                    golfie = michal;
                    romeon = undefined;
                    SaveGenerator(address=123);
 121:
                    return zuuluu;
 123:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00014_ip = 739; continue _fun00013 }
 132:
                    verify = _closure1_slot4;
                    oscard = verify.get;
                    report = 'disable_app_collections_cache';
                    report = oscard.bind(verify)(report);
                    oscard = global;
                    verify = oscard.Date;
                    oscard = verify.now;
                    oscard = oscard.bind(verify)();
                    yankee = _closure1_slot9;
                    offset = yankee.getFetchState;
                    verify = {};
                    kiloes = option;
                    verify['surface'] = kiloes;
                    backup = golfie;
                    verify['activeState'] = backup;
                    yankee = offset.bind(yankee)(verify);
                    foxtra = _closure1_slot9;
                    offset = foxtra.getLastFetchTimeMs;
                    verify = {};
                    verify['surface'] = kiloes;
                    verify['activeState'] = backup;
                    verify = offset.bind(foxtra)(verify);
                    offset = _closure1_slot10;
                    offset = offset.FETCHING;
                    if(!(yankee !== offset)) { _fun00014_ip = 736; continue _fun00013 }
 249:
                    report = !report;
                    if(!report) { _fun00014_ip = 294; continue _fun00013 }
 255:
                    yankee = golfie;
                    foxtra = _closure1_slot0;
                    backup = _closure1_slot2;
                    offset = 18;
                    offset = backup[offset];
                    offset = foxtra.bind(zuuluu)(offset);
                    offset = offset.ApplicationCollectionActiveState;
                    offset = offset.ACTIVE;
                    report = yankee === offset;
 294:
                    romeon = report;
                    if(!report) { _fun00014_ip = 321; continue _fun00013 }
 300:
                    report = null;
                    if(!(report != verify)) { _fun00014_ip = 321; continue _fun00013 }
 306:
                    report = _closure1_slot18;
                    report = verify + report;
                    if(!(!(report > oscard))) { _fun00014_ip = 736; continue _fun00013 }
 321:
                    verify = _closure1_slot1;
                    report = _closure1_slot2;
                    oscard = 11;
                    report = report[oscard];
                    offset = verify.bind(zuuluu)(report);
                    verify = offset.dispatch;
                    report = {};
                    yankee = 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS';
                    report['type'] = yankee;
                    yankee = option;
                    report['surface'] = yankee;
                    yankee = golfie;
                    report['activeState'] = yankee;
                    report = verify.bind(offset)(report);
 379: // try_start_0
                    kiloes = _closure1_slot0;
                    backup = _closure1_slot2;
                    report = 13;
                    report = backup[report];
                    report = kiloes.bind(zuuluu)(report);
                    offset = report.HTTP;
                    verify = offset.get;
                    report = {};
                    yankee = _closure1_slot17;
                    yankee = yankee.APPLICATION_DIRECTORY_COLLECTIONS;
                    report['url'] = yankee;
                    yankee = {};
                    foxtra = option;
                    yankee['surface'] = foxtra;
                    foxtra = golfie;
                    yankee['active_state'] = foxtra;
                    foxtra = 15;
                    backup = backup[foxtra];
                    kiloes = kiloes.bind(zuuluu)(backup);
                    backup = kiloes.isAndroid;
                    backup = backup.bind(kiloes)();
                    kiloes = _closure1_slot0;
                    sizing = _closure1_slot2;
                    if(backup) { _fun00014_ip = 541; continue _fun00013 }
 477:
                    foxtra = sizing[foxtra];
                    backup = kiloes.bind(zuuluu)(foxtra);
                    foxtra = backup.isIOS;
                    foxtra = foxtra.bind(backup)();
                    output = _closure1_slot0;
                    result = _closure1_slot2;
                    backup = 16;
                    backup = result[backup];
                    backup = output.bind(zuuluu)(backup);
                    backup = backup.ApplicationCollectionPlatforms;
                    if(foxtra) { _fun00014_ip = 533; continue _fun00013 }
 525:
                    foxtra = backup.WEB;
                    _fun00014_ip = 539; continue _fun00013;
 533:
                    foxtra = backup.IOS;
 539:
                    _fun00014_ip = 565; continue _fun00013;
 541:
                    backup = 16;
                    backup = sizing[backup];
                    backup = kiloes.bind(zuuluu)(backup);
                    backup = backup.ApplicationCollectionPlatforms;
                    foxtra = backup.ANDROID;
 565:
                    yankee['platform'] = foxtra;
                    foxtra = _closure1_slot5;
                    foxtra = foxtra.locale;
                    yankee['locale'] = foxtra;
                    yankee['cache'] = romeon;
                    report['query'] = yankee;
                    yankee = true;
                    report['rejectWithError'] = yankee;
                    report = verify.bind(offset)(report);
                    SaveGenerator(address=609);
 607:
                    return report;
 609:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(verify) { _fun00014_ip = 682; continue _fun00013 }
 615:
                    offset = _closure1_slot1;
                    verify = _closure1_slot2;
                    verify = verify[oscard];
                    yankee = offset.bind(zuuluu)(verify);
                    offset = yankee.dispatch;
                    verify = {};
                    romeon = 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS';
                    verify['type'] = romeon;
                    romeon = report.body;
                    verify['collections'] = romeon;
                    romeon = option;
                    verify['surface'] = romeon;
                    romeon = golfie;
                    verify['activeState'] = romeon;
                    verify = offset.bind(yankee)(verify);
 680: // try_end0
                    _fun00014_ip = 736; continue _fun00013;
 682:
                    return report;
 685: // catch_target0
                    CatchBlockStart(arg_register=4);
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[oscard];
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    verify = 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE';
                    tangon['type'] = verify;
                    tangon['surface'] = option;
                    tangon['activeState'] = golfie;
                    tangon = report.bind(oscard)(tangon);
 736:
                    return zuuluu;
 739:
                    return michal;
 742:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot25 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: _fetchIntegrationApplicationIdsForMyGuilds
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00016_ip = 411; continue _fun00015 }
 10:
                    michal = undefined;
                    option = undefined;
                    zuuluu = global;
                    tangon = zuuluu.Date;
                    zuuluu = tangon.now;
                    report = zuuluu.bind(tangon)();
                    oscard = _closure1_slot15;
                    tangon = oscard.getFetchState;
                    offset = tangon.bind(oscard)();
                    oscard = _closure1_slot15;
                    tangon = oscard.getLastFetchTimeMs;
                    golfie = tangon.bind(oscard)();
                    oscard = _closure1_slot15;
                    tangon = oscard.getNextFetchRetryTimeMs;
                    tangon = tangon.bind(oscard)();
                    oscard = _closure1_slot16;
                    oscard = oscard.FETCHING;
                    if(!(offset !== oscard)) { _fun00016_ip = 408; continue _fun00015 }
 95:
                    offset = null;
                    if(!(offset != golfie)) { _fun00016_ip = 118; continue _fun00015 }
 101:
                    oscard = 86400000;
                    oscard = golfie + oscard;
                    if(!(!(oscard > report))) { _fun00016_ip = 408; continue _fun00015 }
 118:
                    if(!(offset != tangon)) { _fun00016_ip = 129; continue _fun00015 }
 122:
                    if(!(!(report < tangon))) { _fun00016_ip = 408; continue _fun00015 }
 129:
                    oscard = _closure1_slot1;
                    tangon = _closure1_slot2;
                    report = 11;
                    tangon = tangon[report];
                    golfie = oscard.bind(michal)(tangon);
                    oscard = golfie.dispatch;
                    tangon = {};
                    yankee = 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS';
                    tangon['type'] = yankee;
                    tangon = oscard.bind(golfie)(tangon);
 171: // try_start_0
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 13;
                    tangon = golfie[tangon];
                    tangon = oscard.bind(michal)(tangon);
                    golfie = tangon.HTTP;
                    oscard = golfie.get;
                    tangon = {};
                    yankee = _closure1_slot17;
                    yankee = yankee.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS;
                    tangon['url'] = yankee;
                    yankee = false;
                    tangon['rejectWithError'] = yankee;
                    tangon = oscard.bind(golfie)(tangon);
                    SaveGenerator(address=232);
 230:
                    return tangon;
 232:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscard) { _fun00016_ip = 289; continue _fun00015 }
 238:
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    oscard = oscard[report];
                    yankee = golfie.bind(michal)(oscard);
                    golfie = yankee.dispatch;
                    oscard = {};
                    romeon = 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS';
                    oscard['type'] = romeon;
                    romeon = tangon.body;
                    oscard['guildIdToApplicationIds'] = romeon;
                    oscard = golfie.bind(yankee)(oscard);
 287: // try_end0
                    _fun00016_ip = 408; continue _fun00015;
 289:
                    return tangon;
 292: // catch_target0
                    CatchBlockStart(arg_register=3);
                    verify = tangon;
                    tangon = offset == tangon;
                    yankee = undefined;
                    if(tangon) { _fun00016_ip = 314; continue _fun00015 }
 306:
                    tangon = verify;
                    yankee = tangon.status;
 314:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[report];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE';
                    zuuluu['type'] = oscard;
                    golfie = 429;
                    oscard = undefined;
                    if(!(golfie === yankee)) { _fun00016_ip = 398; continue _fun00015 }
 360:
                    golfie = verify;
                    yankee = offset == golfie;
                    golfie = undefined;
                    if(yankee) { _fun00016_ip = 395; continue _fun00015 }
 372:
                    verify = verify.body;
                    option = verify;
                    verify = offset == verify;
                    golfie = undefined;
                    if(verify) { _fun00016_ip = 395; continue _fun00015 }
 389:
                    golfie = option.retry_after;
 395:
                    oscard = golfie;
 398:
                    zuuluu['retryAfterSeconds'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 408:
                    return michal;
 411:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot26 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot26 = entity;
    tangon = global;
    offset = tangon.Object;
    option = offset.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(offset)(zuuluu, entity, golfie);
    entity = 0;
    golfie = oscard[entity];
    entity = undefined;
    golfie = verify.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = oscard[golfie];
    golfie = verify.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 2;
    golfie = oscard[golfie];
    golfie = verify.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    golfie = 3;
    golfie = oscard[golfie];
    golfie = verify.bind(entity)(golfie);
    golfie = 4;
    option = oscard[golfie];
    option = verify.bind(entity)(option);
    var _closure1_slot6 = option;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.FetchState;
    var _closure1_slot7 = golfie;
    golfie = 5;
    golfie = oscard[golfie];
    golfie = verify.bind(entity)(golfie);
    var _closure1_slot8 = golfie;
    golfie = 6;
    option = oscard[golfie];
    option = verify.bind(entity)(option);
    var _closure1_slot9 = option;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.FetchState;
    var _closure1_slot10 = golfie;
    golfie = 7;
    option = oscard[golfie];
    option = verify.bind(entity)(option);
    var _closure1_slot11 = option;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.FetchState;
    var _closure1_slot12 = golfie;
    golfie = 8;
    option = oscard[golfie];
    option = verify.bind(entity)(option);
    var _closure1_slot13 = option;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.FetchState;
    var _closure1_slot14 = golfie;
    golfie = 9;
    option = oscard[golfie];
    option = verify.bind(entity)(option);
    var _closure1_slot15 = option;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.FetchState;
    var _closure1_slot16 = golfie;
    golfie = 10;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.Endpoints;
    var _closure1_slot17 = golfie;
    golfie = 600000;
    var _closure1_slot18 = golfie;
    tangon = tangon.Map;
    golfie = tangon.prototype;
    golfie = Object.create(golfie, {constructor: {value: tangon}});
    backup = golfie;
    tangon = new backup[tangon](foxtra);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot19 = tangon;
    tangon = 19;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/global_discovery_apps/ApplicationDirectoryActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: getEmbedApplication
        entity = undefined;
        tangon = _closure1_slot20;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['getEmbedApplication'] = tangon;
    tangon = function() { // Original name: getApplication
        entity = undefined;
        tangon = _closure1_slot21;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['getApplication'] = tangon;
    tangon = function() { // Original name: getCategories
        entity = undefined;
        tangon = _closure1_slot22;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['getCategories'] = tangon;
    tangon = function() { // Original name: getSimilarApplications
        entity = undefined;
        tangon = _closure1_slot23;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['getSimilarApplications'] = tangon;
    tangon = function() { // Original name: search
        entity = undefined;
        tangon = _closure1_slot24;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['search'] = tangon;
    tangon = function() { // Original name: fetchCollections
        entity = undefined;
        tangon = _closure1_slot25;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchCollections'] = tangon;
    michal = function() { // Original name: fetchIntegrationApplicationIdsForMyGuilds
        entity = undefined;
        tangon = _closure1_slot26;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchIntegrationApplicationIdsForMyGuilds'] = michal;
    return entity;
})();