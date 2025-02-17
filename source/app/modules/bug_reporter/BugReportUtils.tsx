// app/modules/bug_reporter/BugReportUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _fetchBugReportConfig
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 90; continue _fun00001 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 3;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.get;
                    mike = {};
                    report = _closure1_slot6;
                    report = report.BUG_REPORTS;
                    mike['url'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=73);
 71:
                    return mike;
 73:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00002_ip = 87; continue _fun00001 }
 79:
                    zulu = mike.body;
                    return zulu;
 87:
                    return mike;
 90:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot7 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _submitReport
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    yankee = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00004_ip = 1013; continue _fun00003 }
 16:
                    options = mike;
                    verify = argBaz;
                    offset = undefined;
                    report = undefined;
                    golf = undefined;
                    zulu = {};
                    tango = 'name';
                    zulu['name'] = tango;
                    tango = mike.name;
                    zulu['value'] = tango;
                    backup = new Array(4);
                    backup[0] = zulu;
                    tango = {};
                    zulu = 'priority';
                    tango['name'] = zulu;
                    foxtrot = mike.priority;
                    romeo = global;
                    zulu = romeo.HermesInternal;
                    oscar = zulu.concat;
                    zulu = '';
                    oscar = oscar.bind(zulu)(foxtrot);
                    tango['value'] = oscar;
                    backup[1] = tango;
                    tango = {};
                    oscar = 'override_platform_information';
                    tango['name'] = oscar;
                    foxtrot = yankee.overridePlatformInformation;
                    oscar = romeo.HermesInternal;
                    oscar = oscar.concat;
                    oscar = oscar.bind(zulu)(foxtrot);
                    tango['value'] = oscar;
                    backup[2] = tango;
                    tango = {};
                    oscar = 'theme';
                    tango['name'] = oscar;
                    foxtrot = _closure1_slot4;
                    foxtrot = foxtrot.theme;
                    tango['value'] = foxtrot;
                    backup[3] = tango;
                    report = backup;
                    foxtrot = backup.push;
                    tango = {};
                    kilo = 'design_id';
                    tango['name'] = kilo;
                    sizing = _closure1_slot0;
                    output = _closure1_slot2;
                    kilo = 5;
                    kilo = output[kilo];
                    kilo = sizing.bind(offset)(kilo);
                    kilo = kilo.DesignIds;
                    sizing = kilo.DESIGN_TABS_IA;
                    kilo = romeo.HermesInternal;
                    kilo = kilo.concat;
                    kilo = kilo.bind(zulu)(sizing);
                    tango['value'] = kilo;
                    tango = foxtrot.bind(backup)(tango);
                    mike = mike.description;
                    if(!(zulu !== mike)) { _fun00004_ip = 293; continue _fun00003 }
 258:
                    foxtrot = report;
                    tango = foxtrot.push;
                    mike = {};
                    backup = 'description';
                    mike['name'] = backup;
                    backup = options;
                    backup = backup.description;
                    mike['value'] = backup;
                    mike = tango.bind(foxtrot)(mike);
 293:
                    mike = options;
                    mike = mike.url;
                    if(!(zulu !== mike)) { _fun00004_ip = 342; continue _fun00003 }
 305:
                    foxtrot = report;
                    tango = foxtrot.push;
                    mike = {};
                    backup = 'external_url';
                    mike['name'] = backup;
                    backup = options;
                    backup = backup.url;
                    mike['value'] = backup;
                    mike = tango.bind(foxtrot)(mike);
 342:
                    mike = options;
                    tango = mike.buildOverride;
                    mike = null;
                    if(!(mike != tango)) { _fun00004_ip = 395; continue _fun00003 }
 357:
                    backup = report;
                    foxtrot = backup.push;
                    tango = {};
                    kilo = 'build_override';
                    tango['name'] = kilo;
                    kilo = options;
                    kilo = kilo.buildOverride;
                    tango['value'] = kilo;
                    tango = foxtrot.bind(backup)(tango);
 395:
                    tango = options;
                    foxtrot = tango.feature;
                    backup = mike == foxtrot;
                    tango = undefined;
                    if(backup) { _fun00004_ip = 419; continue _fun00003 }
 413:
                    tango = foxtrot.asana_inbox_id;
 419:
                    golf = tango;
                    tango = mike != tango;
                    if(!tango) { _fun00004_ip = 436; continue _fun00003 }
 429:
                    foxtrot = golf;
                    tango = zulu !== foxtrot;
 436:
                    if(!tango) { _fun00004_ip = 485; continue _fun00003 }
 439:
                    backup = report;
                    foxtrot = backup.push;
                    tango = {};
                    kilo = 'asana_inbox_id';
                    tango['name'] = kilo;
                    sizing = golf;
                    kilo = romeo.HermesInternal;
                    kilo = kilo.concat;
                    kilo = kilo.bind(zulu)(sizing);
                    tango['value'] = kilo;
                    tango = foxtrot.bind(backup)(tango);
 485:
                    tango = options;
                    tango = tango.feature;
                    backup = mike == tango;
                    foxtrot = undefined;
                    if(backup) { _fun00004_ip = 508; continue _fun00003 }
 503:
                    foxtrot = tango.name;
 508:
                    mike = mike != foxtrot;
                    if(!mike) { _fun00004_ip = 519; continue _fun00003 }
 515:
                    mike = zulu !== foxtrot;
 519:
                    if(!mike) { _fun00004_ip = 549; continue _fun00003 }
 522:
                    tango = report;
                    zulu = tango.push;
                    mike = {};
                    backup = 'feature_name';
                    mike['name'] = backup;
                    mike['value'] = foxtrot;
                    mike = zulu.bind(tango)(mike);
 549:
                    mike = yankee.overridePlatformInformation;
                    if(!mike) { _fun00004_ip = 792; continue _fun00003 }
 561:
                    tango = report;
                    zulu = tango.push;
                    mike = {};
                    foxtrot = 'device';
                    mike['name'] = foxtrot;
                    foxtrot = yankee.device;
                    mike['value'] = foxtrot;
                    mike = zulu.bind(tango)(mike);
                    zulu = tango.push;
                    mike = {};
                    foxtrot = 'os';
                    mike['name'] = foxtrot;
                    foxtrot = yankee.operatingSystem;
                    mike['value'] = foxtrot;
                    mike = zulu.bind(tango)(mike);
                    zulu = tango.push;
                    mike = {};
                    foxtrot = 'os_version';
                    mike['name'] = foxtrot;
                    foxtrot = yankee.operatingSystemVersion;
                    mike['value'] = foxtrot;
                    mike = zulu.bind(tango)(mike);
                    zulu = tango.push;
                    mike = {};
                    foxtrot = 'client_version';
                    mike['name'] = foxtrot;
                    foxtrot = yankee.clientVersion;
                    mike['value'] = foxtrot;
                    mike = zulu.bind(tango)(mike);
                    zulu = tango.push;
                    mike = {};
                    foxtrot = 'client_build_number';
                    mike['name'] = foxtrot;
                    foxtrot = yankee.clientBuildNumber;
                    mike['value'] = foxtrot;
                    mike = zulu.bind(tango)(mike);
                    zulu = tango.push;
                    mike = {};
                    foxtrot = 'release_channel';
                    mike['name'] = foxtrot;
                    romeo = romeo.window;
                    romeo = romeo.GLOBAL_ENV;
                    romeo = romeo.RELEASE_CHANNEL;
                    mike['value'] = romeo;
                    mike = zulu.bind(tango)(mike);
                    zulu = tango.push;
                    mike = {};
                    romeo = 'locale';
                    mike['name'] = romeo;
                    yankee = yankee.locale;
                    mike['value'] = yankee;
                    mike = zulu.bind(tango)(mike);
 792:
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot2;
                    mike = 6;
                    mike = romeo[mike];
                    tango = yankee.bind(offset)(mike);
                    zulu = tango.uploadDebugLogFiles;
                    mike = 7;
                    mike = romeo[mike];
                    yankee = yankee.bind(offset)(mike);
                    mike = yankee.isIOS;
                    mike = mike.bind(yankee)();
                    yankee = _closure1_slot5;
                    if(mike) { _fun00004_ip = 855; continue _fun00003 }
 847:
                    mike = yankee.ANDROID_APP;
                    _fun00004_ip = 861; continue _fun00003;
 855:
                    mike = yankee.IOS_APP;
 861:
                    mike = zulu.bind(tango)(mike);
 866: // try_start_0
                    zulu = _closure1_slot1;
                    yankee = _closure1_slot2;
                    mike = 8;
                    mike = yankee[mike];
                    tango = zulu.bind(offset)(mike);
                    zulu = tango.post;
                    mike = {};
                    romeo = _closure1_slot6;
                    romeo = romeo.BUG_REPORTS;
                    mike['url'] = romeo;
                    mike['attachments'] = verify;
                    mike['fields'] = report;
                    report = {};
                    verify = _closure1_slot0;
                    oscar = 9;
                    oscar = yankee[oscar];
                    oscar = verify.bind(offset)(oscar);
                    oscar = oscar.NetworkActionNames;
                    oscar = oscar.BUG_REPORT_SUBMIT;
                    report['event'] = oscar;
                    oscar = {};
                    options = options.priority;
                    oscar['priority'] = options;
                    oscar['asana_inbox_id'] = golf;
                    report['properties'] = oscar;
                    mike['trackedActionData'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=996);
 994:
                    return mike;
 996:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00004_ip = 1005; continue _fun00003 }
 1002: // try_end0
                    return mike;
 1005:
                    return mike;
 1008: // catch_target0
                    CatchBlockStart(arg_register=1);
                    return mike;
 1013:
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
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.DebugLogCategory;
    var _closure1_slot5 = golf;
    tango = tango.Endpoints;
    var _closure1_slot6 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/bug_reporter/BugReportUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: fetchBugReportConfig
        entity = undefined;
        tango = _closure1_slot7;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchBugReportConfig'] = tango;
    tango = function(argFoo) { // Original name: getFeatureId
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            report = entity == tango;
            mike = undefined;
            if(report) { _fun00006_ip = 19; continue _fun00005 }
 14:
            mike = tango.name;
 19:
            if(!(entity == mike)) { _fun00006_ip = 41; continue _fun00005 }
 23:
            report = entity == tango;
            zulu = undefined;
            if(report) { _fun00006_ip = 38; continue _fun00005 }
 32:
            zulu = tango.squad;
 38:
            mike = '' + zulu;
 41:
            zulu = entity != mike;
            entity = '';
            if(!zulu) { _fun00006_ip = 55; continue _fun00005 }
 52:
            entity = mike;
 55:
            return entity;
        }
    };
    zulu['getFeatureId'] = tango;
    tango = function() { // Original name: getPriorities
        mike = {};
        golf = _closure1_slot0;
        options = _closure1_slot2;
        zulu = 4;
        entity = options[zulu];
        tango = undefined;
        entity = golf.bind(tango)(entity);
        oscar = entity.intl;
        report = oscar.string;
        entity = options[zulu];
        entity = golf.bind(tango)(entity);
        entity = entity.t;
        entity = entity.VwIij4;
        entity = report.bind(oscar)(entity);
        mike['title'] = entity;
        entity = options[zulu];
        entity = golf.bind(tango)(entity);
        verify = entity.intl;
        oscar = verify.format;
        entity = options[zulu];
        entity = golf.bind(tango)(entity);
        entity = entity.t;
        report = entity.DOP8yc;
        entity = {};
        entity = oscar.bind(verify)(report, entity);
        mike['description'] = entity;
        entity = '801497159479722084';
        mike['emoji'] = entity;
        entity = 0;
        mike['value'] = entity;
        entity = new Array(4);
        entity[0] = mike;
        mike = {};
        report = options[zulu];
        report = golf.bind(tango)(report);
        verify = report.intl;
        oscar = verify.string;
        report = options[zulu];
        report = golf.bind(tango)(report);
        report = report.t;
        report = report.rYfJoq;
        report = oscar.bind(verify)(report);
        mike['title'] = report;
        report = options[zulu];
        report = golf.bind(tango)(report);
        offset = report.intl;
        verify = offset.format;
        report = options[zulu];
        report = golf.bind(tango)(report);
        report = report.t;
        oscar = report.+LEfDA;
        report = {};
        report = verify.bind(offset)(oscar, report);
        mike['description'] = report;
        report = '410336837563973632';
        mike['emoji'] = report;
        report = 1;
        mike['value'] = report;
        entity[1] = mike;
        mike = {};
        report = options[zulu];
        report = golf.bind(tango)(report);
        verify = report.intl;
        oscar = verify.string;
        report = options[zulu];
        report = golf.bind(tango)(report);
        report = report.t;
        report = report.Ia0skZ;
        report = oscar.bind(verify)(report);
        mike['title'] = report;
        report = options[zulu];
        report = golf.bind(tango)(report);
        offset = report.intl;
        verify = offset.format;
        report = options[zulu];
        report = golf.bind(tango)(report);
        report = report.t;
        oscar = report.D4rbgY;
        report = {};
        report = verify.bind(offset)(oscar, report);
        mike['description'] = report;
        report = '841420679643529296';
        mike['emoji'] = report;
        report = 2;
        mike['value'] = report;
        entity[2] = mike;
        mike = {};
        report = options[zulu];
        report = golf.bind(tango)(report);
        verify = report.intl;
        oscar = verify.string;
        report = options[zulu];
        report = golf.bind(tango)(report);
        report = report.t;
        report = report.KGsyFx;
        report = oscar.bind(verify)(report);
        mike['title'] = report;
        report = options[zulu];
        report = golf.bind(tango)(report);
        oscar = report.intl;
        report = oscar.format;
        zulu = options[zulu];
        zulu = golf.bind(tango)(zulu);
        zulu = zulu.t;
        tango = zulu.Kmg64O;
        zulu = {};
        zulu = report.bind(oscar)(tango, zulu);
        mike['description'] = zulu;
        zulu = '827645852352512021';
        mike['emoji'] = zulu;
        zulu = 3;
        mike['value'] = zulu;
        entity[3] = mike;
        return entity;
    };
    zulu['getPriorities'] = tango;
    mike = function() { // Original name: submitReport
        entity = undefined;
        tango = _closure1_slot8;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['submitReport'] = mike;
    return entity;
})();