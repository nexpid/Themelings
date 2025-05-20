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
                    if(zuuluu) { _fun00004_ip = 1013; continue _fun00003 }
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
                    backup = new Array(4);
                    backup[0] = zuuluu;
                    tangon = {};
                    zuuluu = 'priority';
                    tangon['name'] = zuuluu;
                    foxtra = michal.priority;
                    romeon = global;
                    zuuluu = romeon.HermesInternal;
                    oscard = zuuluu.concat;
                    zuuluu = '';
                    oscard = oscard.bind(zuuluu)(foxtra);
                    tangon['value'] = oscard;
                    backup[1] = tangon;
                    tangon = {};
                    oscard = 'override_platform_information';
                    tangon['name'] = oscard;
                    foxtra = yankee.overridePlatformInformation;
                    oscard = romeon.HermesInternal;
                    oscard = oscard.concat;
                    oscard = oscard.bind(zuuluu)(foxtra);
                    tangon['value'] = oscard;
                    backup[2] = tangon;
                    tangon = {};
                    oscard = 'theme';
                    tangon['name'] = oscard;
                    foxtra = _closure1_slot4;
                    foxtra = foxtra.theme;
                    tangon['value'] = foxtra;
                    backup[3] = tangon;
                    report = backup;
                    foxtra = backup.push;
                    tangon = {};
                    kiloes = 'design_id';
                    tangon['name'] = kiloes;
                    sizing = _closure1_slot0;
                    output = _closure1_slot2;
                    kiloes = 5;
                    kiloes = output[kiloes];
                    kiloes = sizing.bind(offset)(kiloes);
                    kiloes = kiloes.DesignIds;
                    sizing = kiloes.DESIGN_TABS_IA;
                    kiloes = romeon.HermesInternal;
                    kiloes = kiloes.concat;
                    kiloes = kiloes.bind(zuuluu)(sizing);
                    tangon['value'] = kiloes;
                    tangon = foxtra.bind(backup)(tangon);
                    michal = michal.description;
                    if(!(zuuluu !== michal)) { _fun00004_ip = 293; continue _fun00003 }
 258:
                    foxtra = report;
                    tangon = foxtra.push;
                    michal = {};
                    backup = 'description';
                    michal['name'] = backup;
                    backup = option;
                    backup = backup.description;
                    michal['value'] = backup;
                    michal = tangon.bind(foxtra)(michal);
 293:
                    michal = option;
                    michal = michal.url;
                    if(!(zuuluu !== michal)) { _fun00004_ip = 342; continue _fun00003 }
 305:
                    foxtra = report;
                    tangon = foxtra.push;
                    michal = {};
                    backup = 'external_url';
                    michal['name'] = backup;
                    backup = option;
                    backup = backup.url;
                    michal['value'] = backup;
                    michal = tangon.bind(foxtra)(michal);
 342:
                    michal = option;
                    tangon = michal.buildOverride;
                    michal = null;
                    if(!(michal != tangon)) { _fun00004_ip = 395; continue _fun00003 }
 357:
                    backup = report;
                    foxtra = backup.push;
                    tangon = {};
                    kiloes = 'build_override';
                    tangon['name'] = kiloes;
                    kiloes = option;
                    kiloes = kiloes.buildOverride;
                    tangon['value'] = kiloes;
                    tangon = foxtra.bind(backup)(tangon);
 395:
                    tangon = option;
                    foxtra = tangon.feature;
                    backup = michal == foxtra;
                    tangon = undefined;
                    if(backup) { _fun00004_ip = 419; continue _fun00003 }
 413:
                    tangon = foxtra.asana_inbox_id;
 419:
                    golfie = tangon;
                    tangon = michal != tangon;
                    if(!tangon) { _fun00004_ip = 436; continue _fun00003 }
 429:
                    foxtra = golfie;
                    tangon = zuuluu !== foxtra;
 436:
                    if(!tangon) { _fun00004_ip = 485; continue _fun00003 }
 439:
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
 485:
                    tangon = option;
                    tangon = tangon.feature;
                    backup = michal == tangon;
                    foxtra = undefined;
                    if(backup) { _fun00004_ip = 508; continue _fun00003 }
 503:
                    foxtra = tangon.name;
 508:
                    michal = michal != foxtra;
                    if(!michal) { _fun00004_ip = 519; continue _fun00003 }
 515:
                    michal = zuuluu !== foxtra;
 519:
                    if(!michal) { _fun00004_ip = 549; continue _fun00003 }
 522:
                    tangon = report;
                    zuuluu = tangon.push;
                    michal = {};
                    backup = 'feature_name';
                    michal['name'] = backup;
                    michal['value'] = foxtra;
                    michal = zuuluu.bind(tangon)(michal);
 549:
                    michal = yankee.overridePlatformInformation;
                    if(!michal) { _fun00004_ip = 792; continue _fun00003 }
 561:
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
 792:
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot2;
                    michal = 6;
                    michal = romeon[michal];
                    tangon = yankee.bind(offset)(michal);
                    zuuluu = tangon.uploadDebugLogFiles;
                    michal = 7;
                    michal = romeon[michal];
                    yankee = yankee.bind(offset)(michal);
                    michal = yankee.isIOS;
                    michal = michal.bind(yankee)();
                    yankee = _closure1_slot5;
                    if(michal) { _fun00004_ip = 855; continue _fun00003 }
 847:
                    michal = yankee.ANDROID_APP;
                    _fun00004_ip = 861; continue _fun00003;
 855:
                    michal = yankee.IOS_APP;
 861:
                    michal = zuuluu.bind(tangon)(michal);
 866: // try_start_0
                    zuuluu = _closure1_slot1;
                    yankee = _closure1_slot2;
                    michal = 8;
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
                    oscard = 9;
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
                    SaveGenerator(address=996);
 994:
                    return michal;
 996:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 1005; continue _fun00003 }
 1002: // try_end0
                    return michal;
 1005:
                    return michal;
 1008: // catch_target0
                    CatchBlockStart(arg_register=1);
                    return michal;
 1013:
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
    tangon = 10;
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