// app/modules/application_directory/ApplicationDirectoryActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    verify = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _getEmbedApplication
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    yankee = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 481; continue _fun00001 }
 15:
                    oscar = yankee;
                    mike = undefined;
                    tango = undefined;
                    offset = undefined;
                    var _closure4_slot0 = mike;
                    verify = undefined;
                    var _closure4_slot1 = mike;
                    zulu = global;
                    report = zulu.Date;
                    zulu = report.now;
                    tango = zulu.bind(report)();
                    options = _closure1_slot23;
                    report = options.get;
                    report = report.bind(options)(yankee);
                    options = null;
                    options = options != report;
                    yankee = 0;
                    if(!options) { _fun00002_ip = 82; continue _fun00001 }
 79:
                    yankee = report;
 82:
                    romeo = _closure1_slot6;
                    options = romeo.getApplicationFetchState;
                    report = oscar;
                    options = options.bind(romeo)(report);
                    report = _closure1_slot7;
                    report = report.FETCHING;
                    if(!(options !== report)) { _fun00002_ip = 478; continue _fun00001 }
 117:
                    romeo = _closure1_slot6;
                    options = romeo.isInvalidApplication;
                    report = oscar;
                    report = options.bind(romeo)(report);
                    if(report) { _fun00002_ip = 478; continue _fun00001 }
 141:
                    options = tango;
                    report = _closure1_slot22;
                    report = yankee + report;
                    if(!(!(options < report))) { _fun00002_ip = 478; continue _fun00001 }
 159:
                    options = _closure1_slot23;
                    report = options.set;
                    backup = oscar;
                    tango = report.bind(options)(backup, tango);
                    options = _closure1_slot1;
                    yankee = _closure1_slot2;
                    report = 11;
                    tango = yankee[report];
                    foxtrot = options.bind(mike)(tango);
                    romeo = foxtrot.dispatch;
                    tango = {};
                    kilo = 'APPLICATION_DIRECTORY_FETCH_APPLICATION';
                    tango['type'] = kilo;
                    tango['applicationId'] = backup;
                    tango = romeo.bind(foxtrot)(tango);
                    tango = 12;
                    tango = yankee[tango];
                    romeo = options.bind(mike)(tango);
                    output = _closure1_slot18;
                    sizing = _closure1_slot19;
                    options = romeo.prototype;
                    options = Object.create(options, {constructor: {value: romeo}});
                    result = options;
                    tango = new result[romeo](output, sizing, kilo);
                    tango = tango instanceof Object ? tango : options;
                    offset = tango;
                    _closure4_slot0 = tango;
                    tango = function(argFoo, argBar) { // Original name: interceptResponse
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            entity = argBar;
                            var _closure5_slot0 = entity;
                            entity = argFoo;
                            zulu = entity.status;
                            entity = 429;
                            entity = entity === zulu;
                            if(!entity) { _fun00004_ip = 54; continue _fun00003 }
 30:
                            zulu = _closure4_slot0;
                            tango = zulu.fails;
                            zulu = _closure1_slot20;
                            entity = tango < zulu;
 54:
                            if(!entity) { _fun00004_ip = 82; continue _fun00003 }
 57:
                            tango = _closure4_slot0;
                            zulu = tango.fail;
                            mike = function() {
                                zulu = _closure5_slot0;
                                mike = _closure4_slot1;
                                entity = undefined;
                                mike = zulu.bind(entity)(entity, mike);
                                return entity;
                            };
                            mike = zulu.bind(tango)(mike);
                            entity = true;
 82:
                            return entity;
                        }
                    };
                    verify = tango;
                    _closure4_slot1 = tango;
 282: // try_start_0
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    tango = 13;
                    tango = options[tango];
                    tango = golf.bind(mike)(tango);
                    options = tango.HTTP;
                    golf = options.get;
                    tango = {};
                    foxtrot = _closure1_slot17;
                    romeo = foxtrot.APPLICATION_DIRECTORY_EMBED_APPLICATION;
                    yankee = oscar;
                    yankee = romeo.bind(foxtrot)(yankee);
                    tango['url'] = yankee;
                    tango['backoff'] = offset;
                    offset = _closure1_slot20;
                    tango['retries'] = offset;
                    tango['interceptResponse'] = verify;
                    verify = false;
                    tango['rejectWithError'] = verify;
                    tango = golf.bind(options)(tango);
                    SaveGenerator(address=370);
 368:
                    return tango;
 370:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golf) { _fun00002_ip = 426; continue _fun00001 }
 376:
                    offset = tango.body;
                    options = _closure1_slot1;
                    golf = _closure1_slot2;
                    golf = golf[report];
                    verify = options.bind(mike)(golf);
                    options = verify.dispatch;
                    golf = {};
                    yankee = 'APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS';
                    golf['type'] = yankee;
                    golf['application'] = offset;
                    golf = options.bind(verify)(golf);
 424: // try_end0
                    _fun00002_ip = 478; continue _fun00001;
 426:
                    return tango;
 429: // catch_target0
                    CatchBlockStart(arg_register=3);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[report];
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {'type': 'APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE', 'applicationId': null, 'isInvalidApplication': true};
                    zulu['applicationId'] = oscar;
                    zulu = tango.bind(report)(zulu);
 478:
                    return mike;
 481:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot24 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: _getApplication
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    report = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00006_ip = 414; continue _fun00005 }
 13:
                    golf = argFoo;
                    zulu = undefined;
                    if(!(report === zulu)) { _fun00006_ip = 24; continue _fun00005 }
 22:
                    report = {};
 24:
                    yankee = undefined;
                    SaveGenerator(address=30);
 28:
                    return zulu;
 30:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00006_ip = 411; continue _fun00005 }
 39:
                    tango = global;
                    oscar = tango.Date;
                    tango = oscar.now;
                    verify = tango.bind(oscar)();
                    options = _closure1_slot6;
                    oscar = options.getApplicationFetchState;
                    romeo = golf;
                    options = oscar.bind(options)(romeo);
                    offset = _closure1_slot6;
                    oscar = offset.getApplicationLastFetchTime;
                    offset = oscar.bind(offset)(romeo);
                    oscar = report.dontRefetchMs;
                    yankee = report.noCache;
                    romeo = null;
                    report = romeo != offset;
                    if(!report) { _fun00006_ip = 131; continue _fun00005 }
 115:
                    if(!(romeo == oscar)) { _fun00006_ip = 123; continue _fun00005 }
 119:
                    oscar = _closure1_slot22;
 123:
                    oscar = offset + oscar;
                    report = oscar > verify;
 131:
                    oscar = _closure1_slot7;
                    oscar = oscar.FETCHING;
                    if(!(options !== oscar)) { _fun00006_ip = 408; continue _fun00005 }
 148:
                    if(report) { _fun00006_ip = 408; continue _fun00005 }
 154:
                    options = _closure1_slot1;
                    report = _closure1_slot2;
                    oscar = 11;
                    report = report[oscar];
                    verify = options.bind(zulu)(report);
                    options = verify.dispatch;
                    report = {};
                    offset = 'APPLICATION_DIRECTORY_FETCH_APPLICATION';
                    report['type'] = offset;
                    offset = golf;
                    report['applicationId'] = offset;
                    report = options.bind(verify)(report);
 203: // try_start_0
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 13;
                    report = verify[report];
                    report = options.bind(zulu)(report);
                    verify = report.HTTP;
                    options = verify.get;
                    report = {};
                    foxtrot = _closure1_slot17;
                    romeo = foxtrot.APPLICATION_DIRECTORY_APPLICATION;
                    offset = golf;
                    offset = romeo.bind(foxtrot)(offset);
                    report['url'] = offset;
                    offset = {};
                    romeo = _closure1_slot5;
                    romeo = romeo.locale;
                    offset['locale'] = romeo;
                    offset['nocache'] = yankee;
                    report['query'] = offset;
                    offset = true;
                    report['rejectWithError'] = offset;
                    report = options.bind(verify)(report);
                    SaveGenerator(address=300);
 298:
                    return report;
 300:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(options) { _fun00006_ip = 356; continue _fun00005 }
 306:
                    verify = _closure1_slot1;
                    options = _closure1_slot2;
                    options = options[oscar];
                    offset = verify.bind(zulu)(options);
                    verify = offset.dispatch;
                    options = {};
                    yankee = 'APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS';
                    options['type'] = yankee;
                    yankee = report.body;
                    options['application'] = yankee;
                    options = verify.bind(offset)(options);
 354: // try_end0
                    _fun00006_ip = 408; continue _fun00005;
 356:
                    return report;
 359: // catch_target0
                    CatchBlockStart(arg_register=4);
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    tango = tango[oscar];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {'type': 'APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE', 'applicationId': null, 'isInvalidApplication': true};
                    tango['applicationId'] = golf;
                    tango = report.bind(oscar)(tango);
 408:
                    return zulu;
 411:
                    return mike;
 414:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot25 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: _getCategories
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00008_ip = 217; continue _fun00007 }
 10:
                    mike = global;
                    zulu = mike.Date;
                    mike = zulu.now;
                    tango = mike.bind(zulu)();
                    report = _closure1_slot8;
                    mike = report.getLastFetchTimeMs;
                    report = mike.bind(report)();
                    mike = null;
                    if(!(mike != report)) { _fun00008_ip = 65; continue _fun00007 }
 50:
                    mike = _closure1_slot22;
                    mike = report + mike;
                    if(!(!(mike > tango))) { _fun00008_ip = 212; continue _fun00007 }
 65:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 13;
                    mike = report[mike];
                    report = undefined;
                    mike = tango.bind(report)(mike);
                    oscar = mike.HTTP;
                    tango = oscar.get;
                    mike = {};
                    golf = _closure1_slot17;
                    golf = golf.APPLICATION_DIRECTORY_CATEGORIES;
                    mike['url'] = golf;
                    golf = {};
                    options = _closure1_slot5;
                    options = options.locale;
                    golf['locale'] = options;
                    mike['query'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = tango.bind(oscar)(mike);
                    SaveGenerator(address=149);
 147:
                    return mike;
 149:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00008_ip = 209; continue _fun00007 }
 155:
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 11;
                    zulu = oscar[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS';
                    zulu['type'] = oscar;
                    oscar = mike.body;
                    zulu['categories'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    _fun00008_ip = 212; continue _fun00007;
 209:
                    return mike;
 212:
                    mike = undefined;
                    return mike;
 217:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot26 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: _getSimilarApplications
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00010_ip = 532; continue _fun00009 }
 13:
                    verify = mike.applicationId;
                    options = mike.guildId;
                    tango = mike.options;
                    zulu = undefined;
                    golf = undefined;
                    SaveGenerator(address=36);
 34:
                    return zulu;
 36:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00010_ip = 529; continue _fun00009 }
 45:
                    report = null;
                    if(!(report == tango)) { _fun00010_ip = 53; continue _fun00009 }
 51:
                    tango = {};
 53:
                    golf = tango.page;
                    tango = global;
                    oscar = tango.Date;
                    tango = oscar.now;
                    oscar = tango.bind(oscar)();
                    romeo = _closure1_slot13;
                    yankee = romeo.getFetchState;
                    offset = {};
                    kilo = verify;
                    offset['applicationId'] = kilo;
                    backup = options;
                    offset['guildId'] = backup;
                    romeo = yankee.bind(romeo)(offset);
                    foxtrot = _closure1_slot13;
                    yankee = foxtrot.getSimilarApplications;
                    offset = {};
                    offset['applicationId'] = kilo;
                    offset['guildId'] = backup;
                    offset = yankee.bind(foxtrot)(offset);
                    if(!(report == offset)) { _fun00010_ip = 141; continue _fun00009 }
 139:
                    offset = {};
 141:
                    offset = offset.lastFetchTimeMs;
                    yankee = _closure1_slot14;
                    yankee = yankee.FETCHING;
                    if(!(romeo !== yankee)) { _fun00010_ip = 526; continue _fun00009 }
 164:
                    if(!(report != offset)) { _fun00010_ip = 183; continue _fun00009 }
 168:
                    report = _closure1_slot22;
                    report = offset + report;
                    if(!(!(report > oscar))) { _fun00010_ip = 526; continue _fun00009 }
 183:
                    offset = _closure1_slot1;
                    report = _closure1_slot2;
                    oscar = 11;
                    report = report[oscar];
                    yankee = offset.bind(zulu)(report);
                    offset = yankee.dispatch;
                    report = {};
                    romeo = 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS';
                    report['type'] = romeo;
                    romeo = verify;
                    report['applicationId'] = romeo;
                    romeo = options;
                    report['guildId'] = romeo;
                    romeo = golf;
                    report['page'] = romeo;
                    report = offset.bind(yankee)(report);
 247: // try_start_0
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    report = 13;
                    report = yankee[report];
                    report = offset.bind(zulu)(report);
                    yankee = report.HTTP;
                    offset = yankee.get;
                    report = {};
                    backup = _closure1_slot17;
                    foxtrot = backup.APPLICATION_DIRECTORY_SIMILAR;
                    romeo = verify;
                    romeo = foxtrot.bind(backup)(romeo);
                    report['url'] = romeo;
                    romeo = {};
                    foxtrot = options;
                    romeo['guild_id'] = foxtrot;
                    foxtrot = golf;
                    romeo['page'] = foxtrot;
                    foxtrot = _closure1_slot5;
                    foxtrot = foxtrot.locale;
                    romeo['locale'] = foxtrot;
                    report['query'] = romeo;
                    romeo = true;
                    report['rejectWithError'] = romeo;
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
                    offset = offset[oscar];
                    romeo = yankee.bind(zulu)(offset);
                    yankee = romeo.dispatch;
                    offset = {};
                    foxtrot = 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS';
                    offset['type'] = foxtrot;
                    foxtrot = verify;
                    offset['applicationId'] = foxtrot;
                    foxtrot = options;
                    offset['guildId'] = foxtrot;
                    foxtrot = report.body;
                    foxtrot = foxtrot.applications;
                    offset['similarApplications'] = foxtrot;
                    foxtrot = report.body;
                    foxtrot = foxtrot.load_id;
                    offset['loadId'] = foxtrot;
                    foxtrot = golf;
                    offset['page'] = foxtrot;
                    foxtrot = report.body;
                    foxtrot = foxtrot.num_pages;
                    offset['totalPages'] = foxtrot;
                    offset = yankee.bind(romeo)(offset);
 467: // try_end0
                    _fun00010_ip = 526; continue _fun00009;
 469:
                    return report;
 472: // catch_target0
                    CatchBlockStart(arg_register=4);
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    tango = tango[oscar];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    offset = 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE';
                    tango['type'] = offset;
                    tango['applicationId'] = verify;
                    tango['guildId'] = options;
                    tango['page'] = golf;
                    tango = report.bind(oscar)(tango);
 526:
                    return zulu;
 529:
                    return mike;
 532:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot27 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function() { // Original name: _search
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00012_ip = 1022; continue _fun00011 }
 13:
                    output = mike.query;
                    sizing = mike.guildId;
                    tango = mike.options;
                    echo = mike.onSuccessCallback;
                    zulu = undefined;
                    kilo = undefined;
                    backup = undefined;
                    foxtrot = undefined;
                    romeo = undefined;
                    yankee = undefined;
                    offset = undefined;
                    verify = undefined;
                    options = undefined;
                    golf = undefined;
                    result = undefined;
                    SaveGenerator(address=62);
 60:
                    return zulu;
 62:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00012_ip = 1019; continue _fun00011 }
 71:
                    source = null;
                    if(!(source == tango)) { _fun00012_ip = 79; continue _fun00011 }
 77:
                    tango = {};
 79:
                    kilo = tango.page;
                    backup = tango.pageSize;
                    foxtrot = tango.categoryId;
                    romeo = tango.integrationType;
                    yankee = tango.minUserInstallCommandCount;
                    offset = tango.excludeAppsWithCustomInstallUrl;
                    verify = tango.excludeNonEmbeddedApps;
                    options = tango.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand;
                    tango = tango.source;
                    if(!(zulu === tango)) { _fun00012_ip = 171; continue _fun00011 }
 136:
                    oscar = _closure1_slot0;
                    update = _closure1_slot2;
                    report = 14;
                    report = update[report];
                    report = oscar.bind(zulu)(report);
                    report = report.SearchAppsRequestSource;
                    tango = report.APP_DIRECTORY;
 171:
                    golf = tango;
                    tango = global;
                    report = tango.Date;
                    tango = report.now;
                    oscar = tango.bind(report)();
                    control = _closure1_slot11;
                    update = control.getFetchState;
                    report = {};
                    target = output;
                    report['query'] = target;
                    papa = sizing;
                    report['guildId'] = papa;
                    context = kilo;
                    report['page'] = context;
                    record = backup;
                    report['pageSize'] = record;
                    config = foxtrot;
                    report['categoryId'] = config;
                    sequence = romeo;
                    report['integrationType'] = sequence;
                    control = update.bind(control)(report);
                    vacuum = _closure1_slot11;
                    update = vacuum.getSearchResults;
                    report = {};
                    report['query'] = target;
                    report['guildId'] = papa;
                    report['page'] = context;
                    report['pageSize'] = record;
                    report['categoryId'] = config;
                    report['integrationType'] = sequence;
                    report = update.bind(vacuum)(report);
                    if(!(source == report)) { _fun00012_ip = 308; continue _fun00011 }
 306:
                    report = {};
 308:
                    update = report.lastFetchTimeMs;
                    report = _closure1_slot12;
                    report = report.FETCHING;
                    if(!(control !== report)) { _fun00012_ip = 1016; continue _fun00011 }
 331:
                    if(!(source != update)) { _fun00012_ip = 350; continue _fun00011 }
 335:
                    report = _closure1_slot22;
                    report = update + report;
                    if(!(!(report > oscar))) { _fun00012_ip = 1016; continue _fun00011 }
 350:
                    update = _closure1_slot1;
                    report = _closure1_slot2;
                    oscar = 11;
                    report = report[oscar];
                    control = update.bind(zulu)(report);
                    update = control.dispatch;
                    report = {};
                    vacuum = 'APPLICATION_DIRECTORY_FETCH_SEARCH';
                    report['type'] = vacuum;
                    vacuum = output;
                    report['query'] = vacuum;
                    vacuum = sizing;
                    report['guildId'] = vacuum;
                    vacuum = kilo;
                    report['page'] = vacuum;
                    vacuum = backup;
                    report['pageSize'] = vacuum;
                    vacuum = foxtrot;
                    report['categoryId'] = vacuum;
                    vacuum = romeo;
                    report['integrationType'] = vacuum;
                    vacuum = yankee;
                    report['minUserInstallCommandCount'] = vacuum;
                    vacuum = offset;
                    report['excludeAppsWithCustomInstallUrl'] = vacuum;
                    vacuum = verify;
                    report['excludeNonEmbeddedApps'] = vacuum;
                    vacuum = options;
                    report['excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand'] = vacuum;
                    vacuum = golf;
                    report['source'] = vacuum;
                    report = update.bind(control)(report);
 477: // try_start_0
                    update = _closure1_slot0;
                    control = _closure1_slot2;
                    report = 13;
                    report = control[report];
                    report = update.bind(zulu)(report);
                    control = report.HTTP;
                    update = control.get;
                    report = {};
                    vacuum = _closure1_slot17;
                    vacuum = vacuum.APPLICATION_DIRECTORY_SEARCH;
                    report['url'] = vacuum;
                    vacuum = {};
                    sequence = output;
                    vacuum['query'] = sequence;
                    sequence = sizing;
                    vacuum['guild_id'] = sequence;
                    sequence = kilo;
                    vacuum['page'] = sequence;
                    sequence = backup;
                    vacuum['page_size'] = sequence;
                    sequence = foxtrot;
                    vacuum['category_id'] = sequence;
                    sequence = _closure1_slot5;
                    sequence = sequence.locale;
                    vacuum['locale'] = sequence;
                    sequence = romeo;
                    vacuum['integration_type'] = sequence;
                    sequence = yankee;
                    vacuum['min_user_install_command_count'] = sequence;
                    sequence = offset;
                    vacuum['exclude_apps_with_custom_install_url'] = sequence;
                    sequence = verify;
                    vacuum['exclude_non_embedded_apps'] = sequence;
                    sequence = options;
                    vacuum['exclude_embedded_apps_without_primary_entry_point_app_command'] = sequence;
                    sequence = golf;
                    vacuum['source'] = sequence;
                    report['query'] = vacuum;
                    vacuum = true;
                    report['rejectWithError'] = vacuum;
                    report = update.bind(control)(report);
                    SaveGenerator(address=654);
 652:
                    return report;
 654:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=19);
                    if(update) { _fun00012_ip = 920; continue _fun00011 }
 663:
                    result = report;
                    control = _closure1_slot1;
                    update = _closure1_slot2;
                    update = update[oscar];
                    vacuum = control.bind(zulu)(update);
                    control = vacuum.dispatch;
                    update = {};
                    sequence = 'APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS';
                    update['type'] = sequence;
                    sequence = output;
                    update['query'] = sequence;
                    sequence = sizing;
                    update['guildId'] = sequence;
                    sequence = kilo;
                    update['page'] = sequence;
                    sequence = backup;
                    update['pageSize'] = sequence;
                    sequence = foxtrot;
                    update['categoryId'] = sequence;
                    sequence = romeo;
                    update['integrationType'] = sequence;
                    sequence = {};
                    config = report.body;
                    config = config.results;
                    sequence['results'] = config;
                    config = report.body;
                    config = config.counts_by_category;
                    sequence['countsByCategory'] = config;
                    config = report.body;
                    config = config.result_count;
                    sequence['totalCount'] = config;
                    config = report.body;
                    config = config.num_pages;
                    sequence['totalPages'] = config;
                    config = report.body;
                    config = config.type;
                    sequence['type'] = config;
                    config = report.body;
                    config = config.load_id;
                    sequence['loadId'] = config;
                    update['result'] = sequence;
                    sequence = yankee;
                    update['minUserInstallCommandCount'] = sequence;
                    sequence = offset;
                    update['excludeAppsWithCustomInstallUrl'] = sequence;
                    sequence = verify;
                    update['excludeNonEmbeddedApps'] = sequence;
                    sequence = options;
                    update['excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand'] = sequence;
                    sequence = golf;
                    update['source'] = sequence;
                    update = control.bind(vacuum)(update);
                    update = echo;
                    if(!(source != update)) { _fun00012_ip = 918; continue _fun00011 }
 902:
                    result = result.body;
                    result = result.result_count;
                    result = echo.bind(zulu)(result);
 918: // try_end0
                    _fun00012_ip = 1016; continue _fun00011;
 920:
                    return report;
 923: // catch_target0
                    CatchBlockStart(arg_register=4);
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    tango = tango[oscar];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    result = 'APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE';
                    tango['type'] = result;
                    tango['query'] = output;
                    tango['guildId'] = sizing;
                    tango['page'] = kilo;
                    tango['pageSize'] = backup;
                    tango['categoryId'] = foxtrot;
                    tango['integrationType'] = romeo;
                    tango['minUserInstallCommandCount'] = yankee;
                    tango['excludeAppsWithCustomInstallUrl'] = offset;
                    tango['excludeNonEmbeddedApps'] = verify;
                    tango['excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand'] = options;
                    tango['source'] = golf;
                    tango = report.bind(oscar)(tango);
 1016:
                    return zulu;
 1019:
                    return mike;
 1022:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot28 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: _fetchCollections
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    mike = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00014_ip = 742; continue _fun00013 }
 13:
                    zulu = undefined;
                    if(!(mike === zulu)) { _fun00014_ip = 21; continue _fun00013 }
 19:
                    mike = {};
 21:
                    report = mike.surface;
                    if(!(report === zulu)) { _fun00014_ip = 66; continue _fun00013 }
 31:
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    oscar = 17;
                    oscar = offset[oscar];
                    oscar = verify.bind(zulu)(oscar);
                    oscar = oscar.ApplicationCollectionSurface;
                    report = oscar.APPLICATION_DIRECTORY;
 66:
                    options = report;
                    mike = mike.activeState;
                    if(!(mike === zulu)) { _fun00014_ip = 114; continue _fun00013 }
 79:
                    oscar = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 18;
                    report = verify[report];
                    report = oscar.bind(zulu)(report);
                    report = report.ApplicationCollectionActiveState;
                    mike = report.ACTIVE;
 114:
                    golf = mike;
                    romeo = undefined;
                    SaveGenerator(address=123);
 121:
                    return zulu;
 123:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00014_ip = 739; continue _fun00013 }
 132:
                    verify = _closure1_slot4;
                    oscar = verify.get;
                    report = 'disable_app_collections_cache';
                    report = oscar.bind(verify)(report);
                    oscar = global;
                    verify = oscar.Date;
                    oscar = verify.now;
                    oscar = oscar.bind(verify)();
                    yankee = _closure1_slot9;
                    offset = yankee.getFetchState;
                    verify = {};
                    kilo = options;
                    verify['surface'] = kilo;
                    backup = golf;
                    verify['activeState'] = backup;
                    yankee = offset.bind(yankee)(verify);
                    foxtrot = _closure1_slot9;
                    offset = foxtrot.getLastFetchTimeMs;
                    verify = {};
                    verify['surface'] = kilo;
                    verify['activeState'] = backup;
                    verify = offset.bind(foxtrot)(verify);
                    offset = _closure1_slot10;
                    offset = offset.FETCHING;
                    if(!(yankee !== offset)) { _fun00014_ip = 736; continue _fun00013 }
 249:
                    report = !report;
                    if(!report) { _fun00014_ip = 294; continue _fun00013 }
 255:
                    yankee = golf;
                    foxtrot = _closure1_slot0;
                    backup = _closure1_slot2;
                    offset = 18;
                    offset = backup[offset];
                    offset = foxtrot.bind(zulu)(offset);
                    offset = offset.ApplicationCollectionActiveState;
                    offset = offset.ACTIVE;
                    report = yankee === offset;
 294:
                    romeo = report;
                    if(!report) { _fun00014_ip = 321; continue _fun00013 }
 300:
                    report = null;
                    if(!(report != verify)) { _fun00014_ip = 321; continue _fun00013 }
 306:
                    report = _closure1_slot22;
                    report = verify + report;
                    if(!(!(report > oscar))) { _fun00014_ip = 736; continue _fun00013 }
 321:
                    verify = _closure1_slot1;
                    report = _closure1_slot2;
                    oscar = 11;
                    report = report[oscar];
                    offset = verify.bind(zulu)(report);
                    verify = offset.dispatch;
                    report = {};
                    yankee = 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS';
                    report['type'] = yankee;
                    yankee = options;
                    report['surface'] = yankee;
                    yankee = golf;
                    report['activeState'] = yankee;
                    report = verify.bind(offset)(report);
 379: // try_start_0
                    kilo = _closure1_slot0;
                    backup = _closure1_slot2;
                    report = 13;
                    report = backup[report];
                    report = kilo.bind(zulu)(report);
                    offset = report.HTTP;
                    verify = offset.get;
                    report = {};
                    yankee = _closure1_slot17;
                    yankee = yankee.APPLICATION_DIRECTORY_COLLECTIONS;
                    report['url'] = yankee;
                    yankee = {};
                    foxtrot = options;
                    yankee['surface'] = foxtrot;
                    foxtrot = golf;
                    yankee['active_state'] = foxtrot;
                    foxtrot = 15;
                    backup = backup[foxtrot];
                    kilo = kilo.bind(zulu)(backup);
                    backup = kilo.isAndroid;
                    backup = backup.bind(kilo)();
                    kilo = _closure1_slot0;
                    sizing = _closure1_slot2;
                    if(backup) { _fun00014_ip = 541; continue _fun00013 }
 477:
                    foxtrot = sizing[foxtrot];
                    backup = kilo.bind(zulu)(foxtrot);
                    foxtrot = backup.isIOS;
                    foxtrot = foxtrot.bind(backup)();
                    output = _closure1_slot0;
                    result = _closure1_slot2;
                    backup = 16;
                    backup = result[backup];
                    backup = output.bind(zulu)(backup);
                    backup = backup.ApplicationCollectionPlatforms;
                    if(foxtrot) { _fun00014_ip = 533; continue _fun00013 }
 525:
                    foxtrot = backup.WEB;
                    _fun00014_ip = 539; continue _fun00013;
 533:
                    foxtrot = backup.IOS;
 539:
                    _fun00014_ip = 565; continue _fun00013;
 541:
                    backup = 16;
                    backup = sizing[backup];
                    backup = kilo.bind(zulu)(backup);
                    backup = backup.ApplicationCollectionPlatforms;
                    foxtrot = backup.ANDROID;
 565:
                    yankee['platform'] = foxtrot;
                    foxtrot = _closure1_slot5;
                    foxtrot = foxtrot.locale;
                    yankee['locale'] = foxtrot;
                    yankee['cache'] = romeo;
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
                    verify = verify[oscar];
                    yankee = offset.bind(zulu)(verify);
                    offset = yankee.dispatch;
                    verify = {};
                    romeo = 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS';
                    verify['type'] = romeo;
                    romeo = report.body;
                    verify['collections'] = romeo;
                    romeo = options;
                    verify['surface'] = romeo;
                    romeo = golf;
                    verify['activeState'] = romeo;
                    verify = offset.bind(yankee)(verify);
 680: // try_end0
                    _fun00014_ip = 736; continue _fun00013;
 682:
                    return report;
 685: // catch_target0
                    CatchBlockStart(arg_register=4);
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    tango = tango[oscar];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    verify = 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE';
                    tango['type'] = verify;
                    tango['surface'] = options;
                    tango['activeState'] = golf;
                    tango = report.bind(oscar)(tango);
 736:
                    return zulu;
 739:
                    return mike;
 742:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot29 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function() { // Original name: _fetchIntegrationApplicationIdsForMyGuilds
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00016_ip = 409; continue _fun00015 }
 10:
                    mike = undefined;
                    options = undefined;
                    zulu = global;
                    tango = zulu.Date;
                    zulu = tango.now;
                    report = zulu.bind(tango)();
                    oscar = _closure1_slot15;
                    tango = oscar.getFetchState;
                    offset = tango.bind(oscar)();
                    oscar = _closure1_slot15;
                    tango = oscar.getLastFetchTimeMs;
                    golf = tango.bind(oscar)();
                    oscar = _closure1_slot15;
                    tango = oscar.getNextFetchRetryTimeMs;
                    tango = tango.bind(oscar)();
                    oscar = _closure1_slot16;
                    oscar = oscar.FETCHING;
                    if(!(offset !== oscar)) { _fun00016_ip = 406; continue _fun00015 }
 95:
                    offset = null;
                    if(!(offset != golf)) { _fun00016_ip = 116; continue _fun00015 }
 101:
                    oscar = _closure1_slot21;
                    oscar = golf + oscar;
                    if(!(!(oscar > report))) { _fun00016_ip = 406; continue _fun00015 }
 116:
                    if(!(offset != tango)) { _fun00016_ip = 127; continue _fun00015 }
 120:
                    if(!(!(report < tango))) { _fun00016_ip = 406; continue _fun00015 }
 127:
                    oscar = _closure1_slot1;
                    tango = _closure1_slot2;
                    report = 11;
                    tango = tango[report];
                    golf = oscar.bind(mike)(tango);
                    oscar = golf.dispatch;
                    tango = {};
                    yankee = 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS';
                    tango['type'] = yankee;
                    tango = oscar.bind(golf)(tango);
 169: // try_start_0
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    tango = 13;
                    tango = golf[tango];
                    tango = oscar.bind(mike)(tango);
                    golf = tango.HTTP;
                    oscar = golf.get;
                    tango = {};
                    yankee = _closure1_slot17;
                    yankee = yankee.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS;
                    tango['url'] = yankee;
                    yankee = false;
                    tango['rejectWithError'] = yankee;
                    tango = oscar.bind(golf)(tango);
                    SaveGenerator(address=230);
 228:
                    return tango;
 230:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscar) { _fun00016_ip = 287; continue _fun00015 }
 236:
                    golf = _closure1_slot1;
                    oscar = _closure1_slot2;
                    oscar = oscar[report];
                    yankee = golf.bind(mike)(oscar);
                    golf = yankee.dispatch;
                    oscar = {};
                    romeo = 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS';
                    oscar['type'] = romeo;
                    romeo = tango.body;
                    oscar['guildIdToApplicationIds'] = romeo;
                    oscar = golf.bind(yankee)(oscar);
 285: // try_end0
                    _fun00016_ip = 406; continue _fun00015;
 287:
                    return tango;
 290: // catch_target0
                    CatchBlockStart(arg_register=3);
                    verify = tango;
                    tango = offset == tango;
                    yankee = undefined;
                    if(tango) { _fun00016_ip = 312; continue _fun00015 }
 304:
                    tango = verify;
                    yankee = tango.status;
 312:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[report];
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE';
                    zulu['type'] = oscar;
                    golf = 429;
                    oscar = undefined;
                    if(!(golf === yankee)) { _fun00016_ip = 396; continue _fun00015 }
 358:
                    golf = verify;
                    yankee = offset == golf;
                    golf = undefined;
                    if(yankee) { _fun00016_ip = 393; continue _fun00015 }
 370:
                    verify = verify.body;
                    options = verify;
                    verify = offset == verify;
                    golf = undefined;
                    if(verify) { _fun00016_ip = 393; continue _fun00015 }
 387:
                    golf = options.retry_after;
 393:
                    oscar = golf;
 396:
                    zulu['retryAfterSeconds'] = oscar;
                    zulu = tango.bind(report)(zulu);
 406:
                    return mike;
 409:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot30 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot30 = entity;
    tango = global;
    offset = tango.Object;
    options = offset.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(offset)(zulu, entity, golf);
    entity = 0;
    golf = oscar[entity];
    entity = undefined;
    golf = verify.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 1;
    golf = oscar[golf];
    golf = verify.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 2;
    golf = oscar[golf];
    golf = verify.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = 3;
    golf = oscar[golf];
    golf = verify.bind(entity)(golf);
    golf = 4;
    options = oscar[golf];
    options = verify.bind(entity)(options);
    var _closure1_slot6 = options;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.FetchState;
    var _closure1_slot7 = golf;
    golf = 5;
    golf = oscar[golf];
    golf = verify.bind(entity)(golf);
    var _closure1_slot8 = golf;
    golf = 6;
    options = oscar[golf];
    options = verify.bind(entity)(options);
    var _closure1_slot9 = options;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.FetchState;
    var _closure1_slot10 = golf;
    golf = 7;
    options = oscar[golf];
    options = verify.bind(entity)(options);
    var _closure1_slot11 = options;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.FetchState;
    var _closure1_slot12 = golf;
    golf = 8;
    options = oscar[golf];
    options = verify.bind(entity)(options);
    var _closure1_slot13 = options;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.FetchState;
    var _closure1_slot14 = golf;
    golf = 9;
    options = oscar[golf];
    options = verify.bind(entity)(options);
    var _closure1_slot15 = options;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.FetchState;
    var _closure1_slot16 = golf;
    golf = 10;
    options = oscar[golf];
    options = report.bind(entity)(options);
    options = options.Endpoints;
    var _closure1_slot17 = options;
    options = 1000;
    var _closure1_slot18 = options;
    options = 5000;
    var _closure1_slot19 = options;
    var _closure1_slot20 = golf;
    golf = 86400000;
    var _closure1_slot21 = golf;
    golf = 600000;
    var _closure1_slot22 = golf;
    tango = tango.Map;
    golf = tango.prototype;
    golf = Object.create(golf, {constructor: {value: tango}});
    backup = golf;
    tango = new backup[tango](foxtrot);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot23 = tango;
    tango = 19;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/application_directory/ApplicationDirectoryActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: getEmbedApplication
        entity = undefined;
        tango = _closure1_slot24;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['getEmbedApplication'] = tango;
    tango = function() { // Original name: getApplication
        entity = undefined;
        tango = _closure1_slot25;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['getApplication'] = tango;
    tango = function() { // Original name: getCategories
        entity = undefined;
        tango = _closure1_slot26;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['getCategories'] = tango;
    tango = function() { // Original name: getSimilarApplications
        entity = undefined;
        tango = _closure1_slot27;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['getSimilarApplications'] = tango;
    tango = function() { // Original name: search
        entity = undefined;
        tango = _closure1_slot28;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['search'] = tango;
    tango = function() { // Original name: fetchCollections
        entity = undefined;
        tango = _closure1_slot29;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchCollections'] = tango;
    mike = function() { // Original name: fetchIntegrationApplicationIdsForMyGuilds
        entity = undefined;
        tango = _closure1_slot30;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchIntegrationApplicationIdsForMyGuilds'] = mike;
    return entity;
})();