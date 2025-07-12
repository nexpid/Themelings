// app/modules/bug_reporter/BugReportUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _fetchBugReportConfig
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 90; continue _fun00001 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 3;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.HTTP;
                    zuuluu = tangon.get;
                    michal = {};
                    report = _closure1_slot6;
                    report = report.BUG_REPORTS;
                    michal['url'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=73);
 71:
                    return michal;
 73:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 87; continue _fun00001 }
 79:
                    zuuluu = michal.body;
                    return zuuluu;
 87:
                    return michal;
 90:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot7 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _submitReport
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    yankee = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 940; continue _fun00003 }
 16:
                    option = michal;
                    verify = argBaz;
                    offset = undefined;
                    report = undefined;
                    golfie = undefined;
                    zuuluu = {};
                    tangon = 'name';
                    zuuluu['name'] = tangon;
                    tangon = michal.name;
                    zuuluu['value'] = tangon;
                    tangon = new Array(4);
                    tangon[0] = zuuluu;
                    oscard = {};
                    zuuluu = 'priority';
                    oscard['name'] = zuuluu;
                    backup = michal.priority;
                    romeon = global;
                    zuuluu = romeon.HermesInternal;
                    foxtra = zuuluu.concat;
                    zuuluu = '';
                    foxtra = foxtra.bind(zuuluu)(backup);
                    oscard['value'] = foxtra;
                    tangon[1] = oscard;
                    oscard = {};
                    foxtra = 'override_platform_information';
                    oscard['name'] = foxtra;
                    backup = yankee.overridePlatformInformation;
                    foxtra = romeon.HermesInternal;
                    foxtra = foxtra.concat;
                    foxtra = foxtra.bind(zuuluu)(backup);
                    oscard['value'] = foxtra;
                    tangon[2] = oscard;
                    foxtra = {};
                    oscard = 'theme';
                    foxtra['name'] = oscard;
                    backup = _closure1_slot4;
                    backup = backup.theme;
                    foxtra['value'] = backup;
                    tangon[3] = foxtra;
                    report = tangon;
                    michal = michal.description;
                    if(!(zuuluu !== michal)) { _fun00004_ip = 220; continue _fun00003 }
 185:
                    foxtra = report;
                    tangon = foxtra.push;
                    michal = {};
                    backup = 'description';
                    michal['name'] = backup;
                    backup = option;
                    backup = backup.description;
                    michal['value'] = backup;
                    michal = tangon.bind(foxtra)(michal);
 220:
                    michal = option;
                    michal = michal.url;
                    if(!(zuuluu !== michal)) { _fun00004_ip = 269; continue _fun00003 }
 232:
                    foxtra = report;
                    tangon = foxtra.push;
                    michal = {};
                    backup = 'external_url';
                    michal['name'] = backup;
                    backup = option;
                    backup = backup.url;
                    michal['value'] = backup;
                    michal = tangon.bind(foxtra)(michal);
 269:
                    michal = option;
                    tangon = michal.buildOverride;
                    michal = null;
                    if(!(michal != tangon)) { _fun00004_ip = 322; continue _fun00003 }
 284:
                    backup = report;
                    foxtra = backup.push;
                    tangon = {};
                    kiloes = 'build_override';
                    tangon['name'] = kiloes;
                    kiloes = option;
                    kiloes = kiloes.buildOverride;
                    tangon['value'] = kiloes;
                    tangon = foxtra.bind(backup)(tangon);
 322:
                    tangon = option;
                    foxtra = tangon.feature;
                    backup = michal == foxtra;
                    tangon = undefined;
                    if(backup) { _fun00004_ip = 346; continue _fun00003 }
 340:
                    tangon = foxtra.asana_inbox_id;
 346:
                    golfie = tangon;
                    tangon = michal != tangon;
                    if(!tangon) { _fun00004_ip = 363; continue _fun00003 }
 356:
                    foxtra = golfie;
                    tangon = zuuluu !== foxtra;
 363:
                    if(!tangon) { _fun00004_ip = 412; continue _fun00003 }
 366:
                    backup = report;
                    foxtra = backup.push;
                    tangon = {};
                    kiloes = 'asana_inbox_id';
                    tangon['name'] = kiloes;
                    sizing = golfie;
                    kiloes = romeon.HermesInternal;
                    kiloes = kiloes.concat;
                    kiloes = kiloes.bind(zuuluu)(sizing);
                    tangon['value'] = kiloes;
                    tangon = foxtra.bind(backup)(tangon);
 412:
                    tangon = option;
                    tangon = tangon.feature;
                    backup = michal == tangon;
                    foxtra = undefined;
                    if(backup) { _fun00004_ip = 435; continue _fun00003 }
 430:
                    foxtra = tangon.name;
 435:
                    michal = michal != foxtra;
                    if(!michal) { _fun00004_ip = 446; continue _fun00003 }
 442:
                    michal = zuuluu !== foxtra;
 446:
                    if(!michal) { _fun00004_ip = 476; continue _fun00003 }
 449:
                    tangon = report;
                    zuuluu = tangon.push;
                    michal = {};
                    backup = 'feature_name';
                    michal['name'] = backup;
                    michal['value'] = foxtra;
                    michal = zuuluu.bind(tangon)(michal);
 476:
                    michal = yankee.overridePlatformInformation;
                    if(!michal) { _fun00004_ip = 719; continue _fun00003 }
 488:
                    tangon = report;
                    zuuluu = tangon.push;
                    michal = {};
                    foxtra = 'device';
                    michal['name'] = foxtra;
                    foxtra = yankee.device;
                    michal['value'] = foxtra;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.push;
                    michal = {};
                    foxtra = 'os';
                    michal['name'] = foxtra;
                    foxtra = yankee.operatingSystem;
                    michal['value'] = foxtra;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.push;
                    michal = {};
                    foxtra = 'os_version';
                    michal['name'] = foxtra;
                    foxtra = yankee.operatingSystemVersion;
                    michal['value'] = foxtra;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.push;
                    michal = {};
                    foxtra = 'client_version';
                    michal['name'] = foxtra;
                    foxtra = yankee.clientVersion;
                    michal['value'] = foxtra;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.push;
                    michal = {};
                    foxtra = 'client_build_number';
                    michal['name'] = foxtra;
                    foxtra = yankee.clientBuildNumber;
                    michal['value'] = foxtra;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.push;
                    michal = {};
                    foxtra = 'release_channel';
                    michal['name'] = foxtra;
                    romeon = romeon.window;
                    romeon = romeon.GLOBAL_ENV;
                    romeon = romeon.RELEASE_CHANNEL;
                    michal['value'] = romeon;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.push;
                    michal = {};
                    romeon = 'locale';
                    michal['name'] = romeon;
                    yankee = yankee.locale;
                    michal['value'] = yankee;
                    michal = zuuluu.bind(tangon)(michal);
 719:
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot2;
                    michal = 5;
                    michal = romeon[michal];
                    tangon = yankee.bind(offset)(michal);
                    zuuluu = tangon.uploadDebugLogFiles;
                    michal = 6;
                    michal = romeon[michal];
                    yankee = yankee.bind(offset)(michal);
                    michal = yankee.isIOS;
                    michal = michal.bind(yankee)();
                    yankee = _closure1_slot5;
                    if(michal) { _fun00004_ip = 782; continue _fun00003 }
 774:
                    michal = yankee.ANDROID_APP;
                    _fun00004_ip = 788; continue _fun00003;
 782:
                    michal = yankee.IOS_APP;
 788:
                    michal = zuuluu.bind(tangon)(michal);
 793: // try_start_0
                    zuuluu = _closure1_slot1;
                    yankee = _closure1_slot2;
                    michal = 7;
                    michal = yankee[michal];
                    tangon = zuuluu.bind(offset)(michal);
                    zuuluu = tangon.post;
                    michal = {};
                    romeon = _closure1_slot6;
                    romeon = romeon.BUG_REPORTS;
                    michal['url'] = romeon;
                    michal['attachments'] = verify;
                    michal['fields'] = report;
                    report = {};
                    verify = _closure1_slot0;
                    oscard = 8;
                    oscard = yankee[oscard];
                    oscard = verify.bind(offset)(oscard);
                    oscard = oscard.NetworkActionNames;
                    oscard = oscard.BUG_REPORT_SUBMIT;
                    report['event'] = oscard;
                    oscard = {};
                    option = option.priority;
                    oscard['priority'] = option;
                    oscard['asana_inbox_id'] = golfie;
                    report['properties'] = oscard;
                    michal['trackedActionData'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=923);
 921:
                    return michal;
 923:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 932; continue _fun00003 }
 929: // try_end0
                    return michal;
 932:
                    return michal;
 935: // catch_target0
                    CatchBlockStart(arg_register=1);
                    return michal;
 940:
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
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.DebugLogCategory;
    var _closure1_slot5 = golfie;
    tangon = tangon.Endpoints;
    var _closure1_slot6 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/bug_reporter/BugReportUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: fetchBugReportConfig
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchBugReportConfig'] = tangon;
    tangon = function(argFoo) { // Original name: getFeatureId
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            report = entity == tangon;
            michal = undefined;
            if(report) { _fun00006_ip = 19; continue _fun00005 }
 14:
            michal = tangon.name;
 19:
            if(!(entity == michal)) { _fun00006_ip = 41; continue _fun00005 }
 23:
            report = entity == tangon;
            zuuluu = undefined;
            if(report) { _fun00006_ip = 38; continue _fun00005 }
 32:
            zuuluu = tangon.squad;
 38:
            michal = '' + zuuluu;
 41:
            zuuluu = entity != michal;
            entity = '';
            if(!zuuluu) { _fun00006_ip = 55; continue _fun00005 }
 52:
            entity = michal;
 55:
            return entity;
        }
    };
    zuuluu['getFeatureId'] = tangon;
    tangon = function() { // Original name: getPriorities
        michal = {};
        golfie = _closure1_slot0;
        option = _closure1_slot2;
        zuuluu = 4;
        entity = option[zuuluu];
        tangon = undefined;
        entity = golfie.bind(tangon)(entity);
        oscard = entity.intl;
        report = oscard.string;
        entity = option[zuuluu];
        entity = golfie.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.VwIij4;
        entity = report.bind(oscard)(entity);
        michal['title'] = entity;
        entity = option[zuuluu];
        entity = golfie.bind(tangon)(entity);
        verify = entity.intl;
        oscard = verify.format;
        entity = option[zuuluu];
        entity = golfie.bind(tangon)(entity);
        entity = entity.t;
        report = entity.DOP8yc;
        entity = {};
        entity = oscard.bind(verify)(report, entity);
        michal['description'] = entity;
        entity = '801497159479722084';
        michal['emoji'] = entity;
        entity = 0;
        michal['value'] = entity;
        entity = new Array(4);
        entity[0] = michal;
        michal = {};
        report = option[zuuluu];
        report = golfie.bind(tangon)(report);
        verify = report.intl;
        oscard = verify.string;
        report = option[zuuluu];
        report = golfie.bind(tangon)(report);
        report = report.t;
        report = report.rYfJoq;
        report = oscard.bind(verify)(report);
        michal['title'] = report;
        report = option[zuuluu];
        report = golfie.bind(tangon)(report);
        offset = report.intl;
        verify = offset.format;
        report = option[zuuluu];
        report = golfie.bind(tangon)(report);
        report = report.t;
        oscard = report.+LEfDA;
        report = {};
        report = verify.bind(offset)(oscard, report);
        michal['description'] = report;
        report = '410336837563973632';
        michal['emoji'] = report;
        report = 1;
        michal['value'] = report;
        entity[1] = michal;
        michal = {};
        report = option[zuuluu];
        report = golfie.bind(tangon)(report);
        verify = report.intl;
        oscard = verify.string;
        report = option[zuuluu];
        report = golfie.bind(tangon)(report);
        report = report.t;
        report = report.Ia0skZ;
        report = oscard.bind(verify)(report);
        michal['title'] = report;
        report = option[zuuluu];
        report = golfie.bind(tangon)(report);
        offset = report.intl;
        verify = offset.format;
        report = option[zuuluu];
        report = golfie.bind(tangon)(report);
        report = report.t;
        oscard = report.D4rbgY;
        report = {};
        report = verify.bind(offset)(oscard, report);
        michal['description'] = report;
        report = '841420679643529296';
        michal['emoji'] = report;
        report = 2;
        michal['value'] = report;
        entity[2] = michal;
        michal = {};
        report = option[zuuluu];
        report = golfie.bind(tangon)(report);
        verify = report.intl;
        oscard = verify.string;
        report = option[zuuluu];
        report = golfie.bind(tangon)(report);
        report = report.t;
        report = report.KGsyFx;
        report = oscard.bind(verify)(report);
        michal['title'] = report;
        report = option[zuuluu];
        report = golfie.bind(tangon)(report);
        oscard = report.intl;
        report = oscard.format;
        zuuluu = option[zuuluu];
        zuuluu = golfie.bind(tangon)(zuuluu);
        zuuluu = zuuluu.t;
        tangon = zuuluu.Kmg64O;
        zuuluu = {};
        zuuluu = report.bind(oscard)(tangon, zuuluu);
        michal['description'] = zuuluu;
        zuuluu = '827645852352512021';
        michal['emoji'] = zuuluu;
        zuuluu = 3;
        michal['value'] = zuuluu;
        entity[3] = michal;
        return entity;
    };
    zuuluu['getPriorities'] = tangon;
    michal = function() { // Original name: submitReport
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['submitReport'] = michal;
    return entity;
})();