// app/modules/debug/DebugUploadManager.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golfie;
    entity = function() { // Original name: _uploadDebugLogFiles
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 92; continue _fun00001 }
 7:
                    report = _closure1_slot13;
                    tangon = undefined;
                    michal = argFoo;
                    michal = report.bind(tangon)(michal);
                    SaveGenerator(address=28);
 26:
                    return michal;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 89; continue _fun00001 }
 34:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot3;
                    report = 5;
                    report = golfie[report];
                    golfie = oscard.bind(tangon)(report);
                    oscard = golfie.uploadRtcLogFiles;
                    report = _closure1_slot8;
                    zuuluu = argBar;
                    zuuluu = oscard.bind(golfie)(report, zuuluu);
                    SaveGenerator(address=77);
 75:
                    return zuuluu;
 77:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 86; continue _fun00001 }
 83:
                    return tangon;
 86:
                    return zuuluu;
 89:
                    return michal;
 92:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot12 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot12 = entity;
    michal = function() { // Original name: uploadAppLogFiles
        entity = undefined;
        tangon = _closure1_slot14;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot13 = michal;
    entity = function() { // Original name: _uploadAppLogFiles
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 939; continue _fun00003 }
 12:
                    zuuluu = argFoo;
                    michal = undefined;
                    offset = undefined;
                    verify = undefined;
                    option = undefined;
                    tangon = undefined;
 25: // try_start_0 // try_start_3
                    golfie = _closure1_slot2;
                    yankee = _closure1_slot3;
                    oscard = 6;
                    oscard = yankee[oscard];
                    golfie = golfie.bind(michal)(oscard);
                    oscard = golfie.stringify;
                    offset = oscard.bind(golfie)();
 58: // try_end0
                    _fun00004_ip = 86; continue _fun00003;
 60: // catch_target0
                    CatchBlockStart(arg_register=10);
                    oscard = global;
                    oscard = oscard.HermesInternal;
                    golfie = oscard.concat;
                    oscard = 'Logs failed: ';
                    offset = golfie.bind(oscard)(yankee);
 86: // try_start_1
                    oscard = _closure1_slot10;
                    golfie = null;
                    romeon = golfie == oscard;
                    oscard = undefined;
                    if(romeon) { _fun00004_ip = 114; continue _fun00003 }
 104:
                    yankee = _closure1_slot10;
                    oscard = yankee.getSystemLog;
 114:
                    oscard = golfie != oscard;
                    golfie = '';
                    if(!oscard) { _fun00004_ip = 173; continue _fun00003 }
 125:
                    oscard = global;
                    romeon = oscard.Promise;
                    oscard = romeon.prototype;
                    yankee = Object.create(oscard, {constructor: {value: romeon}});
                    quebec = function(argFoo) {
                        zuuluu = _closure1_slot10;
                        michal = zuuluu.getSystemLog;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    variable36 = yankee;
                    oscard = new variable36[romeon](quebec, equals);
                    oscard = oscard instanceof Object ? oscard : yankee;
                    SaveGenerator(address=164);
 162:
                    return oscard;
 164:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=10);
                    golfie = oscard;
                    if(yankee) { _fun00004_ip = 178; continue _fun00003 }
 173:
                    verify = golfie;
 176: // try_end1
                    _fun00004_ip = 207; continue _fun00003;
 178: // try_end3
                    return oscard;
 181: // try_start_4 // catch_target1
                    CatchBlockStart(arg_register=10);
                    oscard = global;
                    oscard = oscard.HermesInternal;
                    golfie = oscard.concat;
                    oscard = 'System Logs failed ';
                    verify = golfie.bind(oscard)(yankee);
 207: // try_start_2
                    golfie = _closure1_slot1;
                    yankee = _closure1_slot3;
                    oscard = 7;
                    oscard = yankee[oscard];
                    oscard = golfie.bind(michal)(oscard);
                    golfie = oscard.bind(michal)();
                    oscard = golfie.then;
                    report = function(argFoo) {
                        michal = _closure1_slot1;
                        zuuluu = _closure1_slot3;
                        entity = 8;
                        entity = zuuluu[entity];
                        tangon = undefined;
                        zuuluu = michal.bind(tangon)(entity);
                        michal = argFoo;
                        entity = true;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    report = oscard.bind(golfie)(report);
                    SaveGenerator(address=255);
 253:
                    return report;
 255:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscard) { _fun00004_ip = 266; continue _fun00003 }
 261:
                    option = report;
 264: // try_end2
                    _fun00004_ip = 295; continue _fun00003;
 266: // try_end4
                    return report;
 269: // try_start_5 // catch_target2
                    CatchBlockStart(arg_register=6);
                    report = global;
                    report = report.HermesInternal;
                    oscard = report.concat;
                    report = 'Push logs failed: ';
                    option = oscard.bind(report)(golfie);
 295:
                    report = offset;
                    oscard = report.length;
                    report = verify;
                    report = report.length;
                    oscard = oscard + report;
                    report = option;
                    report = report.length;
                    oscard = oscard + report;
                    tangon = oscard;
                    report = _closure1_slot7;
                    if(!(oscard > report)) { _fun00004_ip = 505; continue _fun00003 }
 344:
                    report = _closure1_slot7;
                    report = report / tangon;
                    tangon = 1;
                    backup = tangon - report;
                    yankee = offset;
                    oscard = yankee.slice;
                    romeon = yankee.length;
                    tangon = global;
                    kiloes = tangon.Math;
                    foxtra = kiloes.floor;
                    report = yankee.length;
                    report = report * backup;
                    report = foxtra.bind(kiloes)(report);
                    report = romeon - report;
                    offset = oscard.bind(yankee)(report);
                    yankee = verify;
                    oscard = yankee.slice;
                    romeon = yankee.length;
                    kiloes = tangon.Math;
                    foxtra = kiloes.floor;
                    report = yankee.length;
                    report = report * backup;
                    report = foxtra.bind(kiloes)(report);
                    report = romeon - report;
                    verify = oscard.bind(yankee)(report);
                    oscard = option;
                    report = oscard.slice;
                    yankee = oscard.length;
                    foxtra = tangon.Math;
                    romeon = foxtra.floor;
                    tangon = oscard.length;
                    tangon = tangon * backup;
                    tangon = romeon.bind(foxtra)(tangon);
                    tangon = yankee - tangon;
                    option = report.bind(oscard)(tangon);
 505:
                    tangon = _closure1_slot11;
                    oscard = null;
                    report = oscard == tangon;
                    tangon = undefined;
                    if(report) { _fun00004_ip = 530; continue _fun00003 }
 520:
                    report = _closure1_slot11;
                    tangon = report.AppOpenedTimestamp;
 530:
                    tangon = oscard != tangon;
                    oscard = null;
                    if(!tangon) { _fun00004_ip = 549; continue _fun00003 }
 539:
                    tangon = _closure1_slot11;
                    oscard = tangon.AppOpenedTimestamp;
 549:
                    backup = _closure1_slot1;
                    report = _closure1_slot3;
                    tangon = 9;
                    tangon = report[tangon];
                    tangon = backup.bind(michal)(tangon);
                    source = tangon.bind(michal)(oscard);
                    tangon = _closure1_slot0;
                    oscard = 10;
                    oscard = report[oscard];
                    yankee = tangon.bind(michal)(oscard);
                    oscard = yankee.serializeComponentRenderAverages;
                    update = oscard.bind(yankee)();
                    oscard = global;
                    foxtra = oscard.JSON;
                    romeon = foxtra.stringify;
                    yankee = 11;
                    yankee = report[yankee];
                    yankee = backup.bind(michal)(yankee);
                    yankee = yankee.bind(michal)();
                    backup = 2;
                    sierra = romeon.bind(foxtra)(yankee, michal, backup);
                    foxtra = oscard.JSON;
                    romeon = foxtra.stringify;
                    kiloes = _closure1_slot5;
                    yankee = kiloes.getDebugInfo;
                    yankee = yankee.bind(kiloes)();
                    target = romeon.bind(foxtra)(yankee, michal, backup);
                    cntext = offset;
                    config = verify;
                    vacuum = option;
                    oscard = oscard.HermesInternal;
                    backup = oscard.concat;
                    foxtra = '\n    ';
                    equals = '\n\n    ';
                    limora = '\n\n    Metadata:\n    ';
                    status = '\n\n    ChannelStore:\n    ';
                    papara = '\n\n    Logs:\n    ';
                    record = '\n\n    System logs:\n    ';
                    sequen = '\n\n    Push Notifications:\n    ';
                    variable36 = foxtra;
                    quebec = source;
                    whisks = update;
                    ctrled = foxtra;
                    oscard = variable36[backup](quebec, equals, whisks, limora, sierra, status, target, papara, cntext, record, config, sequen, vacuum, ctrled, source);
                    verify = _closure1_slot2;
                    option = 6;
                    option = report[option];
                    verify = verify.bind(michal)(option);
                    option = verify.clear;
                    option = option.bind(verify)();
                    verify = _closure1_slot6;
                    option = verify.DEBUG_LOG;
                    golfie = zuuluu;
                    zuuluu = 'discord_app_logs';
                    golfie = option.bind(verify)(golfie, zuuluu);
                    zuuluu = 12;
                    zuuluu = report[zuuluu];
                    zuuluu = tangon.bind(michal)(zuuluu);
                    report = zuuluu.HTTP;
                    tangon = report.post;
                    zuuluu = {'url': null, 'body': null, 'retries': 3, 'headers': null, 'oldFormErrors': true, 'rejectWithError': false};
                    zuuluu['url'] = golfie;
                    zuuluu['body'] = oscard;
                    oscard = {};
                    golfie = 'text/plain';
                    oscard['Content-Type'] = golfie;
                    zuuluu['headers'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    SaveGenerator(address=877);
 875:
                    return zuuluu;
 877:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 885; continue _fun00003 }
 883: // try_end5
                    _fun00004_ip = 936; continue _fun00003;
 885:
                    return zuuluu;
 888: // catch_target3 // catch_target4 // catch_target5
                    CatchBlockStart(arg_register=2);
                    report = _closure1_slot9;
                    tangon = report.error;
                    golfie = zuuluu.message;
                    zuuluu = global;
                    zuuluu = zuuluu.HermesInternal;
                    oscard = zuuluu.concat;
                    zuuluu = 'uploadAppLogFiles: upload app log files error ';
                    zuuluu = oscard.bind(zuuluu)(golfie);
                    zuuluu = tangon.bind(report)(zuuluu);
 936:
                    return michal;
 939:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot14 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.Endpoints;
    var _closure1_slot6 = report;
    report = 9437184;
    var _closure1_slot7 = report;
    report = 14680064;
    var _closure1_slot8 = report;
    report = 3;
    report = golfie[report];
    verify = option.bind(entity)(report);
    report = verify.prototype;
    option = Object.create(report, {constructor: {value: verify}});
    foxtra = 'DebugUploadManager';
    backup = option;
    report = new backup[verify](foxtra, romeon);
    report = report instanceof Object ? report : option;
    var _closure1_slot9 = report;
    report = 4;
    option = golfie[report];
    option = oscard.bind(entity)(option);
    option = option.NativeModules;
    option = option.CrashReportingManager;
    var _closure1_slot10 = option;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.NativeModules;
    report = report.TTIManager;
    var _closure1_slot11 = report;
    report = 13;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/debug/DebugUploadManager.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function() { // Original name: uploadDebugLogFiles
        entity = undefined;
        tangon = _closure1_slot12;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['uploadDebugLogFiles'] = tangon;
    zuuluu['uploadAppLogFiles'] = michal;
    return entity;
})();