// app/modules/debug/DebugUploadManager.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golf;
    entity = function() { // Original name: _uploadDebugLogFiles
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun87124: for(var _fun87124_ip = 0; ; ) switch(_fun87124_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun87124_ip = 92; continue _fun87124 }
 7:
                    report = _closure1_slot13;
                    tango = undefined;
                    mike = argFoo;
                    mike = report.bind(tango)(mike);
                    SaveGenerator(address=28);
 26:
                    return mike;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun87124_ip = 89; continue _fun87124 }
 34:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot3;
                    report = 5;
                    report = golf[report];
                    golf = oscar.bind(tango)(report);
                    oscar = golf.uploadRtcLogFiles;
                    report = _closure1_slot8;
                    zulu = argBar;
                    zulu = oscar.bind(golf)(report, zulu);
                    SaveGenerator(address=77);
 75:
                    return zulu;
 77:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun87124_ip = 86; continue _fun87124 }
 83:
                    return tango;
 86:
                    return zulu;
 89:
                    return mike;
 92:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot12 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot12 = entity;
    mike = function() { // Original name: uploadAppLogFiles
        entity = undefined;
        tango = _closure1_slot14;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot13 = mike;
    entity = function() { // Original name: _uploadAppLogFiles
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun87128: for(var _fun87128_ip = 0; ; ) switch(_fun87128_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun87128_ip = 941; continue _fun87128 }
 12:
                    zulu = argFoo;
                    mike = undefined;
                    offset = undefined;
                    verify = undefined;
                    options = undefined;
                    tango = undefined;
 25: // try_start_0 // try_start_3
                    golf = _closure1_slot2;
                    yankee = _closure1_slot3;
                    oscar = 6;
                    oscar = yankee[oscar];
                    golf = golf.bind(mike)(oscar);
                    oscar = golf.stringify;
                    offset = oscar.bind(golf)();
 58: // try_end0
                    _fun87128_ip = 86; continue _fun87128;
 60: // catch_target0
                    CatchBlockStart(arg_register=10);
                    oscar = global;
                    oscar = oscar.HermesInternal;
                    golf = oscar.concat;
                    oscar = 'Logs failed: ';
                    offset = golf.bind(oscar)(yankee);
 86: // try_start_1
                    oscar = _closure1_slot10;
                    golf = null;
                    romeo = golf == oscar;
                    oscar = undefined;
                    if(romeo) { _fun87128_ip = 114; continue _fun87128 }
 104:
                    yankee = _closure1_slot10;
                    oscar = yankee.getSystemLog;
 114:
                    oscar = golf != oscar;
                    golf = '';
                    if(!oscar) { _fun87128_ip = 173; continue _fun87128 }
 125:
                    oscar = global;
                    romeo = oscar.Promise;
                    oscar = romeo.prototype;
                    yankee = Object.create(oscar, {constructor: {value: romeo}});
                    quebec = function(argFoo) {
                        zulu = _closure1_slot10;
                        mike = zulu.getSystemLog;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    variable36 = yankee;
                    oscar = new variable36[romeo](quebec, equality);
                    oscar = oscar instanceof Object ? oscar : yankee;
                    SaveGenerator(address=164);
 162:
                    return oscar;
 164:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=10);
                    golf = oscar;
                    if(yankee) { _fun87128_ip = 178; continue _fun87128 }
 173:
                    verify = golf;
 176: // try_end1
                    _fun87128_ip = 207; continue _fun87128;
 178: // try_end3
                    return oscar;
 181: // try_start_4 // catch_target1
                    CatchBlockStart(arg_register=10);
                    oscar = global;
                    oscar = oscar.HermesInternal;
                    golf = oscar.concat;
                    oscar = 'System Logs failed ';
                    verify = golf.bind(oscar)(yankee);
 207: // try_start_2
                    golf = _closure1_slot1;
                    yankee = _closure1_slot3;
                    oscar = 7;
                    oscar = yankee[oscar];
                    oscar = golf.bind(mike)(oscar);
                    golf = oscar.bind(mike)();
                    oscar = golf.then;
                    report = function(argFoo) {
                        mike = _closure1_slot1;
                        zulu = _closure1_slot3;
                        entity = 8;
                        entity = zulu[entity];
                        tango = undefined;
                        zulu = mike.bind(tango)(entity);
                        mike = argFoo;
                        entity = true;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    report = oscar.bind(golf)(report);
                    SaveGenerator(address=255);
 253:
                    return report;
 255:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscar) { _fun87128_ip = 266; continue _fun87128 }
 261:
                    options = report;
 264: // try_end2
                    _fun87128_ip = 295; continue _fun87128;
 266: // try_end4
                    return report;
 269: // try_start_5 // catch_target2
                    CatchBlockStart(arg_register=6);
                    report = global;
                    report = report.HermesInternal;
                    oscar = report.concat;
                    report = 'Push logs failed: ';
                    options = oscar.bind(report)(golf);
 295:
                    report = offset;
                    oscar = report.length;
                    report = verify;
                    report = report.length;
                    oscar = oscar + report;
                    report = options;
                    report = report.length;
                    oscar = oscar + report;
                    tango = oscar;
                    report = _closure1_slot7;
                    if(!(oscar > report)) { _fun87128_ip = 505; continue _fun87128 }
 344:
                    report = _closure1_slot7;
                    report = report / tango;
                    tango = 1;
                    backup = tango - report;
                    yankee = offset;
                    oscar = yankee.slice;
                    romeo = yankee.length;
                    tango = global;
                    kilo = tango.Math;
                    foxtrot = kilo.floor;
                    report = yankee.length;
                    report = report * backup;
                    report = foxtrot.bind(kilo)(report);
                    report = romeo - report;
                    offset = oscar.bind(yankee)(report);
                    yankee = verify;
                    oscar = yankee.slice;
                    romeo = yankee.length;
                    kilo = tango.Math;
                    foxtrot = kilo.floor;
                    report = yankee.length;
                    report = report * backup;
                    report = foxtrot.bind(kilo)(report);
                    report = romeo - report;
                    verify = oscar.bind(yankee)(report);
                    oscar = options;
                    report = oscar.slice;
                    yankee = oscar.length;
                    foxtrot = tango.Math;
                    romeo = foxtrot.floor;
                    tango = oscar.length;
                    tango = tango * backup;
                    tango = romeo.bind(foxtrot)(tango);
                    tango = yankee - tango;
                    options = report.bind(oscar)(tango);
 505:
                    tango = _closure1_slot11;
                    oscar = null;
                    report = oscar == tango;
                    tango = undefined;
                    if(report) { _fun87128_ip = 530; continue _fun87128 }
 520:
                    report = _closure1_slot11;
                    tango = report.AppOpenedTimestamp;
 530:
                    tango = oscar != tango;
                    oscar = null;
                    if(!tango) { _fun87128_ip = 549; continue _fun87128 }
 539:
                    tango = _closure1_slot11;
                    oscar = tango.AppOpenedTimestamp;
 549:
                    backup = _closure1_slot1;
                    report = _closure1_slot3;
                    tango = 9;
                    tango = report[tango];
                    tango = backup.bind(mike)(tango);
                    source = tango.bind(mike)(oscar);
                    tango = _closure1_slot0;
                    oscar = 10;
                    oscar = report[oscar];
                    yankee = tango.bind(mike)(oscar);
                    oscar = yankee.serializeComponentRenderAverages;
                    update = oscar.bind(yankee)();
                    oscar = global;
                    foxtrot = oscar.JSON;
                    romeo = foxtrot.stringify;
                    yankee = 11;
                    yankee = report[yankee];
                    yankee = backup.bind(mike)(yankee);
                    yankee = yankee.bind(mike)();
                    backup = 2;
                    sierra = romeo.bind(foxtrot)(yankee, mike, backup);
                    foxtrot = oscar.JSON;
                    romeo = foxtrot.stringify;
                    kilo = _closure1_slot5;
                    yankee = kilo.getDebugInfo;
                    yankee = yankee.bind(kilo)();
                    target = romeo.bind(foxtrot)(yankee, mike, backup);
                    context = offset;
                    config = verify;
                    vacuum = options;
                    oscar = oscar.HermesInternal;
                    backup = oscar.concat;
                    foxtrot = '\n    ';
                    equality = '\n\n    ';
                    lima = '\n\n    Metadata:\n    ';
                    status = '\n\n    ChannelStore:\n    ';
                    papa = '\n\n    Logs:\n    ';
                    record = '\n\n    System logs:\n    ';
                    sequence = '\n\n    Push Notifications:\n    ';
                    variable36 = foxtrot;
                    quebec = source;
                    whiskey = update;
                    control = foxtrot;
                    oscar = variable36[backup](quebec, equality, whiskey, lima, sierra, status, target, papa, context, record, config, sequence, vacuum, control, source);
                    verify = _closure1_slot2;
                    options = 6;
                    options = report[options];
                    verify = verify.bind(mike)(options);
                    options = verify.clear;
                    options = options.bind(verify)();
                    verify = _closure1_slot6;
                    options = verify.DEBUG_LOG;
                    golf = zulu;
                    zulu = 'discord_app_logs';
                    golf = options.bind(verify)(golf, zulu);
                    zulu = 12;
                    zulu = report[zulu];
                    zulu = tango.bind(mike)(zulu);
                    report = zulu.HTTP;
                    tango = report.post;
                    zulu = {'url': null, 'body': null, 'retries': 3, 'headers': null, 'oldFormErrors': true, 'rejectWithError': false};
                    zulu['url'] = golf;
                    zulu['body'] = oscar;
                    oscar = {};
                    golf = 'text/plain';
                    oscar['Content-Type'] = golf;
                    zulu['headers'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    SaveGenerator(address=879);
 877:
                    return zulu;
 879:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun87128_ip = 887; continue _fun87128 }
 885: // try_end5
                    _fun87128_ip = 938; continue _fun87128;
 887:
                    return zulu;
 890: // catch_target3 // catch_target4 // catch_target5
                    CatchBlockStart(arg_register=2);
                    report = _closure1_slot9;
                    tango = report.error;
                    golf = zulu.message;
                    zulu = global;
                    zulu = zulu.HermesInternal;
                    oscar = zulu.concat;
                    zulu = 'uploadAppLogFiles: upload app log files error ';
                    zulu = oscar.bind(zulu)(golf);
                    zulu = tango.bind(report)(zulu);
 938:
                    return mike;
 941:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot14 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
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
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Endpoints;
    var _closure1_slot6 = report;
    report = 9437184;
    var _closure1_slot7 = report;
    report = 14680064;
    var _closure1_slot8 = report;
    report = 3;
    report = golf[report];
    verify = options.bind(entity)(report);
    report = verify.prototype;
    options = Object.create(report, {constructor: {value: verify}});
    foxtrot = 'DebugUploadManager';
    backup = options;
    report = new backup[verify](foxtrot, romeo);
    report = report instanceof Object ? report : options;
    var _closure1_slot9 = report;
    report = 4;
    options = golf[report];
    options = oscar.bind(entity)(options);
    options = options.NativeModules;
    options = options.CrashReportingManager;
    var _closure1_slot10 = options;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.NativeModules;
    report = report.TTIManager;
    var _closure1_slot11 = report;
    report = 13;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/debug/DebugUploadManager.tsx';
    report = oscar.bind(golf)(report);
    tango = function() { // Original name: uploadDebugLogFiles
        entity = undefined;
        tango = _closure1_slot12;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['uploadDebugLogFiles'] = tango;
    zulu['uploadAppLogFiles'] = mike;
    return entity;
})();