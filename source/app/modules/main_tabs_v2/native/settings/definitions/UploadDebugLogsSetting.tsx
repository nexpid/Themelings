// app/modules/main_tabs_v2/native/settings/definitions/UploadDebugLogsSetting.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _handleUploadDebugLogSettingPress
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tango) { _fun00002_ip = 405; continue _fun00001 }
 12:
                    tango = undefined;
                    mike = undefined;
                    report = function() { // Original name: onUploadDebugLogsRequestStart
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 6;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.batchUpdates;
                        mike = function() {
                            zulu = _closure1_slot7;
                            mike = zulu.setState;
                            entity = {'isDisabled': true, 'isUploading': true};
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    report = report.bind(tango)();
                    oscar = _closure1_slot0;
                    options = _closure1_slot2;
                    report = 7;
                    report = options[report];
                    oscar = oscar.bind(tango)(report);
                    report = oscar.isIOS;
                    report = report.bind(oscar)();
                    oscar = _closure1_slot5;
                    if(report) { _fun00002_ip = 75; continue _fun00001 }
 67:
                    report = oscar.ANDROID_APP;
                    _fun00002_ip = 81; continue _fun00001;
 75:
                    report = oscar.IOS_APP;
 81:
                    mike = report;
 84: // try_start_0 // try_start_1
                    oscar = _closure1_slot0;
                    options = _closure1_slot2;
                    report = 8;
                    report = options[report];
                    oscar = oscar.bind(tango)(report);
                    report = oscar.uploadDebugLogFiles;
                    mike = report.bind(oscar)(mike);
                    SaveGenerator(address=119);
 117:
                    return mike;
 119:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 246; continue _fun00001 }
 125:
                    offset = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    report = 9;
                    report = foxtrot[report];
                    options = offset.bind(tango)(report);
                    oscar = options.open;
                    report = {};
                    verify = 'USER_SETTINGS_CACHES_CLEARED';
                    report['key'] = verify;
                    verify = 10;
                    verify = foxtrot[verify];
                    verify = offset.bind(tango)(verify);
                    report['icon'] = verify;
                    romeo = _closure1_slot0;
                    verify = 11;
                    offset = foxtrot[verify];
                    offset = romeo.bind(tango)(offset);
                    yankee = offset.intl;
                    offset = yankee.string;
                    verify = foxtrot[verify];
                    verify = romeo.bind(tango)(verify);
                    verify = verify.t;
                    verify = verify.BvyxEx;
                    verify = offset.bind(yankee)(verify);
                    report['content'] = verify;
                    report = oscar.bind(options)(report);
 241: // try_end0
                    _fun00002_ip = 376; continue _fun00001;
 246: // try_end1
                    report = function() { // Original name: onUploadDebugLogsRequestFinish
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 6;
                        zulu = zulu[entity];
                        entity = undefined;
                        report = tango.bind(entity)(zulu);
                        tango = report.batchUpdates;
                        zulu = function() {
                            zulu = _closure1_slot7;
                            mike = zulu.setState;
                            entity = {'isDisabled': true, 'isUploading': false};
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        zulu = tango.bind(report)(zulu);
                        zulu = global;
                        tango = zulu.setTimeout;
                        zulu = function() {
                            zulu = _closure1_slot0;
                            mike = _closure1_slot2;
                            entity = 6;
                            mike = mike[entity];
                            entity = undefined;
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.batchUpdates;
                            entity = function() {
                                zulu = _closure1_slot7;
                                mike = zulu.setState;
                                entity = {};
                                tango = false;
                                entity['isDisabled'] = tango;
                                entity = mike.bind(zulu)(entity);
                                return entity;
                            };
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        mike = 5000;
                        mike = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
                    report = report.bind(tango)();
                    return mike;
 260: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=1);
                    verify = _closure1_slot1;
                    yankee = _closure1_slot2;
                    mike = 9;
                    mike = yankee[mike];
                    oscar = verify.bind(tango)(mike);
                    report = oscar.open;
                    mike = {};
                    options = 'USER_SETTINGS_CACHES_CLEARED';
                    mike['key'] = options;
                    options = 10;
                    options = yankee[options];
                    options = verify.bind(tango)(options);
                    mike['icon'] = options;
                    offset = _closure1_slot0;
                    golf = 11;
                    options = yankee[golf];
                    options = offset.bind(tango)(options);
                    verify = options.intl;
                    options = verify.string;
                    golf = yankee[golf];
                    golf = offset.bind(tango)(golf);
                    golf = golf.t;
                    golf = golf.VzHcSk;
                    golf = options.bind(verify)(golf);
                    mike['content'] = golf;
                    mike = report.bind(oscar)(mike);
 376: // try_end2
                    mike = function() { // Original name: onUploadDebugLogsRequestFinish
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 6;
                        zulu = zulu[entity];
                        entity = undefined;
                        report = tango.bind(entity)(zulu);
                        tango = report.batchUpdates;
                        zulu = function() {
                            zulu = _closure1_slot7;
                            mike = zulu.setState;
                            entity = {'isDisabled': true, 'isUploading': false};
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        zulu = tango.bind(report)(zulu);
                        zulu = global;
                        tango = zulu.setTimeout;
                        zulu = function() {
                            zulu = _closure1_slot0;
                            mike = _closure1_slot2;
                            entity = 6;
                            mike = mike[entity];
                            entity = undefined;
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.batchUpdates;
                            entity = function() {
                                zulu = _closure1_slot7;
                                mike = zulu.setState;
                                entity = {};
                                tango = false;
                                entity['isDisabled'] = tango;
                                entity = mike.bind(zulu)(entity);
                                return entity;
                            };
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        mike = 5000;
                        mike = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
                    mike = mike.bind(tango)();
                    return tango;
 390: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    zulu = function() { // Original name: onUploadDebugLogsRequestFinish
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 6;
                        zulu = zulu[entity];
                        entity = undefined;
                        report = tango.bind(entity)(zulu);
                        tango = report.batchUpdates;
                        zulu = function() {
                            zulu = _closure1_slot7;
                            mike = zulu.setState;
                            entity = {'isDisabled': true, 'isUploading': false};
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        zulu = tango.bind(report)(zulu);
                        zulu = global;
                        tango = zulu.setTimeout;
                        zulu = function() {
                            zulu = _closure1_slot0;
                            mike = _closure1_slot2;
                            entity = 6;
                            mike = mike[entity];
                            entity = undefined;
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.batchUpdates;
                            entity = function() {
                                zulu = _closure1_slot7;
                                mike = zulu.setState;
                                entity = {};
                                tango = false;
                                entity['isDisabled'] = tango;
                                entity = mike.bind(zulu)(entity);
                                return entity;
                            };
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        mike = 5000;
                        mike = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
                    zulu = zulu.bind(tango)();
                    throw mike;
 405:
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
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.ActivityIndicator;
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.RendererType;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.DebugLogCategory;
    var _closure1_slot5 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.jsx;
    var _closure1_slot6 = mike;
    mike = 5;
    mike = oscar[mike];
    verify = report.bind(entity)(mike);
    options = verify.create;
    mike = function() {
        entity = {'isDisabled': false, 'isUploading': false};
        return entity;
    };
    mike = options.bind(verify)(mike);
    var _closure1_slot7 = mike;
    mike = {};
    golf = golf.PRESSABLE;
    mike['type'] = golf;
    golf = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 11;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.aY1OHx;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = golf;
    golf = null;
    mike['parent'] = golf;
    golf = 12;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.CircleInformationIcon;
    mike['IconComponent'] = golf;
    golf = function() { // Original name: handleUploadDebugLogSettingPress
        entity = undefined;
        tango = _closure1_slot8;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    mike['onPress'] = golf;
    golf = function() { // Original name: useUploadDebugLogsTrailing
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = _closure1_slot7;
            report = undefined;
            entity = entity.bind(report)();
            zulu = entity.isUploading;
            entity = null;
            if(!zulu) { _fun00004_ip = 40; continue _fun00003 }
 24:
            tango = _closure1_slot6;
            zulu = _closure1_slot4;
            mike = {};
            entity = tango.bind(report)(zulu, mike);
 40:
            return entity;
        }
    };
    mike['useTrailing'] = golf;
    tango = function() { // Original name: useIsUploadDebugLogsDisabled
        mike = _closure1_slot7;
        entity = undefined;
        entity = mike.bind(entity)();
        entity = entity.isDisabled;
        return entity;
    };
    mike['useIsDisabled'] = tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/UploadDebugLogsSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();