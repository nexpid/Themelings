// app/modules/main_tabs_v2/native/settings/definitions/UploadDebugLogsSetting.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _handleUploadDebugLogSettingPress
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 405; continue _fun00001 }
 12:
                    tangon = undefined;
                    michal = undefined;
                    report = function() { // Original name: onUploadDebugLogsRequestStart
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 6;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.batchUpdates;
                        michal = function() {
                            zuuluu = _closure1_slot7;
                            michal = zuuluu.setState;
                            entity = {'isDisabled': true, 'isUploading': true};
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    report = report.bind(tangon)();
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    report = 7;
                    report = option[report];
                    oscard = oscard.bind(tangon)(report);
                    report = oscard.isIOS;
                    report = report.bind(oscard)();
                    oscard = _closure1_slot5;
                    if(report) { _fun00002_ip = 75; continue _fun00001 }
 67:
                    report = oscard.ANDROID_APP;
                    _fun00002_ip = 81; continue _fun00001;
 75:
                    report = oscard.IOS_APP;
 81:
                    michal = report;
 84: // try_start_0 // try_start_1
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    report = 8;
                    report = option[report];
                    oscard = oscard.bind(tangon)(report);
                    report = oscard.uploadDebugLogFiles;
                    michal = report.bind(oscard)(michal);
                    SaveGenerator(address=119);
 117:
                    return michal;
 119:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 246; continue _fun00001 }
 125:
                    offset = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    report = 9;
                    report = foxtra[report];
                    option = offset.bind(tangon)(report);
                    oscard = option.open;
                    report = {};
                    verify = 'USER_SETTINGS_CACHES_CLEARED';
                    report['key'] = verify;
                    verify = 10;
                    verify = foxtra[verify];
                    verify = offset.bind(tangon)(verify);
                    report['icon'] = verify;
                    romeon = _closure1_slot0;
                    verify = 11;
                    offset = foxtra[verify];
                    offset = romeon.bind(tangon)(offset);
                    yankee = offset.intl;
                    offset = yankee.string;
                    verify = foxtra[verify];
                    verify = romeon.bind(tangon)(verify);
                    verify = verify.t;
                    verify = verify.BvyxEx;
                    verify = offset.bind(yankee)(verify);
                    report['content'] = verify;
                    report = oscard.bind(option)(report);
 241: // try_end0
                    _fun00002_ip = 376; continue _fun00001;
 246: // try_end1
                    report = function() { // Original name: onUploadDebugLogsRequestFinish
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 6;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.batchUpdates;
                        zuuluu = function() {
                            zuuluu = _closure1_slot7;
                            michal = zuuluu.setState;
                            entity = {'isDisabled': true, 'isUploading': false};
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        zuuluu = tangon.bind(report)(zuuluu);
                        zuuluu = global;
                        tangon = zuuluu.setTimeout;
                        zuuluu = function() {
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 6;
                            michal = michal[entity];
                            entity = undefined;
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.batchUpdates;
                            entity = function() {
                                zuuluu = _closure1_slot7;
                                michal = zuuluu.setState;
                                entity = {};
                                tangon = false;
                                entity['isDisabled'] = tangon;
                                entity = michal.bind(zuuluu)(entity);
                                return entity;
                            };
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        michal = 5000;
                        michal = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
                    report = report.bind(tangon)();
                    return michal;
 260: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=1);
                    verify = _closure1_slot1;
                    yankee = _closure1_slot2;
                    michal = 9;
                    michal = yankee[michal];
                    oscard = verify.bind(tangon)(michal);
                    report = oscard.open;
                    michal = {};
                    option = 'USER_SETTINGS_CACHES_CLEARED';
                    michal['key'] = option;
                    option = 10;
                    option = yankee[option];
                    option = verify.bind(tangon)(option);
                    michal['icon'] = option;
                    offset = _closure1_slot0;
                    golfie = 11;
                    option = yankee[golfie];
                    option = offset.bind(tangon)(option);
                    verify = option.intl;
                    option = verify.string;
                    golfie = yankee[golfie];
                    golfie = offset.bind(tangon)(golfie);
                    golfie = golfie.t;
                    golfie = golfie.VzHcSk;
                    golfie = option.bind(verify)(golfie);
                    michal['content'] = golfie;
                    michal = report.bind(oscard)(michal);
 376: // try_end2
                    michal = function() { // Original name: onUploadDebugLogsRequestFinish
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 6;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.batchUpdates;
                        zuuluu = function() {
                            zuuluu = _closure1_slot7;
                            michal = zuuluu.setState;
                            entity = {'isDisabled': true, 'isUploading': false};
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        zuuluu = tangon.bind(report)(zuuluu);
                        zuuluu = global;
                        tangon = zuuluu.setTimeout;
                        zuuluu = function() {
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 6;
                            michal = michal[entity];
                            entity = undefined;
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.batchUpdates;
                            entity = function() {
                                zuuluu = _closure1_slot7;
                                michal = zuuluu.setState;
                                entity = {};
                                tangon = false;
                                entity['isDisabled'] = tangon;
                                entity = michal.bind(zuuluu)(entity);
                                return entity;
                            };
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        michal = 5000;
                        michal = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
                    michal = michal.bind(tangon)();
                    return tangon;
 390: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    zuuluu = function() { // Original name: onUploadDebugLogsRequestFinish
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 6;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.batchUpdates;
                        zuuluu = function() {
                            zuuluu = _closure1_slot7;
                            michal = zuuluu.setState;
                            entity = {'isDisabled': true, 'isUploading': false};
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        zuuluu = tangon.bind(report)(zuuluu);
                        zuuluu = global;
                        tangon = zuuluu.setTimeout;
                        zuuluu = function() {
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 6;
                            michal = michal[entity];
                            entity = undefined;
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.batchUpdates;
                            entity = function() {
                                zuuluu = _closure1_slot7;
                                michal = zuuluu.setState;
                                entity = {};
                                tangon = false;
                                entity['isDisabled'] = tangon;
                                entity = michal.bind(zuuluu)(entity);
                                return entity;
                            };
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        michal = 5000;
                        michal = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
                    zuuluu = zuuluu.bind(tangon)();
                    throw michal;
 405:
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
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.ActivityIndicator;
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.RendererType;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.DebugLogCategory;
    var _closure1_slot5 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.jsx;
    var _closure1_slot6 = michal;
    michal = 5;
    michal = oscard[michal];
    verify = report.bind(entity)(michal);
    option = verify.create;
    michal = function() {
        entity = {'isDisabled': false, 'isUploading': false};
        return entity;
    };
    michal = option.bind(verify)(michal);
    var _closure1_slot7 = michal;
    michal = {};
    golfie = golfie.PRESSABLE;
    michal['type'] = golfie;
    golfie = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 11;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.aY1OHx;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = golfie;
    golfie = null;
    michal['parent'] = golfie;
    golfie = 12;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.CircleInformationIcon;
    michal['IconComponent'] = golfie;
    golfie = function() { // Original name: handleUploadDebugLogSettingPress
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    michal['onPress'] = golfie;
    golfie = function() { // Original name: useUploadDebugLogsTrailing
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = _closure1_slot7;
            report = undefined;
            entity = entity.bind(report)();
            zuuluu = entity.isUploading;
            entity = null;
            if(!zuuluu) { _fun00004_ip = 40; continue _fun00003 }
 24:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot4;
            michal = {};
            entity = tangon.bind(report)(zuuluu, michal);
 40:
            return entity;
        }
    };
    michal['useTrailing'] = golfie;
    tangon = function() { // Original name: useIsUploadDebugLogsDisabled
        michal = _closure1_slot7;
        entity = undefined;
        entity = michal.bind(entity)();
        entity = entity.isDisabled;
        return entity;
    };
    michal['useIsDisabled'] = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/UploadDebugLogsSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();