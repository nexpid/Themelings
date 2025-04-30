// app/modules/mfa/native/screens/BackupScreen.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: isValidClipboardCode
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            tangon = zuuluu.length;
            golfie = _closure1_slot0;
            entity = _closure1_slot2;
            oscard = 4;
            entity = entity[oscard];
            report = undefined;
            entity = golfie.bind(report)(entity);
            entity = entity.BACKUP_CODE_MIN_LENGTH;
            entity = tangon >= entity;
            if(!entity) { _fun00002_ip = 78; continue _fun00001 }
 46:
            zuuluu = zuuluu.length;
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = tangon.bind(report)(michal);
            michal = michal.BACKUP_CODE_MAX_LENGTH;
            entity = zuuluu <= michal;
 78:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
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
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/mfa/native/screens/BackupScreen.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: BackupScreen
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            golfie = entity.mfaChallenge;
            oscard = entity.finish;
            var _closure2_slot0 = oscard;
            report = _closure1_slot5;
            entity = report.useState;
            backup = false;
            entity = entity.bind(report)(backup);
            foxtra = _closure1_slot4;
            tangon = undefined;
            option = 2;
            entity = foxtra.bind(tangon)(entity, option);
            zuuluu = 0;
            offset = entity[zuuluu];
            michal = 1;
            entity = entity[michal];
            var _closure2_slot1 = entity;
            verify = report.useState;
            entity = '';
            entity = verify.bind(report)(entity);
            entity = foxtra.bind(tangon)(entity, option);
            romeon = entity[zuuluu];
            var _closure2_slot2 = romeon;
            entity = entity[michal];
            var _closure2_slot3 = entity;
            entity = report.useState;
            entity = entity.bind(report)(tangon);
            entity = foxtra.bind(tangon)(entity, option);
            verify = entity[zuuluu];
            entity = entity[michal];
            var _closure2_slot4 = entity;
            entity = report.useState;
            entity = entity.bind(report)(backup);
            entity = foxtra.bind(tangon)(entity, option);
            foxtra = entity[zuuluu];
            entity = entity[michal];
            var _closure2_slot5 = entity;
            zuuluu = report.useCallback;
            entity = function() {
                tangon = _closure1_slot3;
                zuuluu = undefined;
                michal = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            StartGenerator();
                            report = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00006_ip = 226; continue _fun00005 }
 13:
                            offset = report;
                            michal = undefined;
                            oscard = undefined;
                            verify = undefined;
                            golfie = _closure2_slot3;
                            golfie = golfie.bind(michal)(report);
                            golfie = report.length;
                            option = _closure1_slot0;
                            yankee = _closure1_slot2;
                            report = 4;
                            report = yankee[report];
                            report = option.bind(michal)(report);
                            report = report.BACKUP_CODE_MIN_LENGTH;
                            if(!(golfie !== report)) { _fun00006_ip = 86; continue _fun00005 }
 72:
                            report = _closure2_slot4;
                            report = report.bind(michal)(michal);
                            _fun00006_ip = 223; continue _fun00005;
 86:
                            report = _closure2_slot1;
                            option = true;
                            report = report.bind(michal)(option);
 97: // try_start_0
                            golfie = _closure2_slot0;
                            report = {};
                            yankee = 'backup';
                            report['mfaType'] = yankee;
                            report['data'] = offset;
                            report = golfie.bind(michal)(report);
                            SaveGenerator(address=125);
 123:
                            return report;
 125:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                            if(golfie) { _fun00006_ip = 142; continue _fun00005 }
 131:
                            golfie = _closure2_slot5;
                            golfie = golfie.bind(michal)(option);
 140: // try_end0
                            _fun00006_ip = 212; continue _fun00005;
 142:
                            return report;
 145: // catch_target0
                            CatchBlockStart(arg_register=6);
                            tangon = golfie;
                            report = _closure2_slot4;
                            option = null;
                            offset = option == golfie;
                            golfie = undefined;
                            if(offset) { _fun00006_ip = 190; continue _fun00005 }
 165:
                            offset = tangon;
                            offset = offset.body;
                            verify = offset;
                            offset = option == offset;
                            golfie = undefined;
                            if(offset) { _fun00006_ip = 190; continue _fun00005 }
 185:
                            golfie = verify.message;
 190:
                            oscard = golfie;
                            if(!(option == golfie)) { _fun00006_ip = 204; continue _fun00005 }
 197:
                            tangon = tangon.message;
                            _fun00006_ip = 207; continue _fun00005;
 204:
                            tangon = oscard;
 207:
                            tangon = report.bind(michal)(tangon);
 212:
                            tangon = _closure2_slot1;
                            zuuluu = false;
                            zuuluu = tangon.bind(michal)(zuuluu);
 223:
                            return michal;
 226:
                            return entity;
                        }
                    };
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    entity = undefined;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                return entity;
            };
            michal = entity.bind(tangon)();
            entity = new Array(1);
            entity[0] = oscard;
            sizing = zuuluu.bind(report)(michal, entity);
            var _closure2_slot6 = sizing;
            zuuluu = _closure1_slot6;
            option = _closure1_slot1;
            output = _closure1_slot2;
            entity = 5;
            entity = output[entity];
            michal = option.bind(tangon)(entity);
            entity = {};
            result = _closure1_slot0;
            update = 6;
            report = output[update];
            report = result.bind(tangon)(report);
            echoed = report.intl;
            backup = echoed.string;
            report = output[update];
            report = result.bind(tangon)(report);
            report = report.t;
            report = report.B2T1HB;
            report = backup.bind(echoed)(report);
            entity['headerText'] = report;
            report = 7;
            report = output[report];
            option = option.bind(tangon)(report);
            report = {};
            backup = output[update];
            backup = result.bind(tangon)(backup);
            source = backup.intl;
            echoed = source.string;
            backup = output[update];
            backup = result.bind(tangon)(backup);
            backup = backup.t;
            backup = backup.C/ZAw8;
            backup = echoed.bind(source)(backup);
            report['label'] = backup;
            backup = output[update];
            backup = result.bind(tangon)(backup);
            source = backup.intl;
            echoed = source.string;
            backup = output[update];
            backup = result.bind(tangon)(backup);
            backup = backup.t;
            backup = backup.fZSi1N;
            backup = echoed.bind(source)(backup);
            report['placeholder'] = backup;
            backup = _closure1_slot7;
            report['isValidClipboardCode'] = backup;
            backup = 4;
            output = output[backup];
            output = result.bind(tangon)(output);
            output = output.BACKUP_CODE_MAX_LENGTH;
            report['maxLength'] = output;
            report['onChangeCode'] = sizing;
            report['error'] = verify;
            verify = offset;
            if(offset) { _fun00004_ip = 447; continue _fun00003 }
 444:
            verify = foxtra;
 447:
            report['isDisabled'] = verify;
            report = zuuluu.bind(tangon)(option, report);
            entity['input'] = report;
            verify = _closure1_slot6;
            option = _closure1_slot1;
            sizing = _closure1_slot2;
            report = 8;
            report = sizing[report];
            option = option.bind(tangon)(report);
            report = {};
            output = 'primary';
            report['variant'] = output;
            echoed = _closure1_slot0;
            output = sizing[update];
            output = echoed.bind(tangon)(output);
            result = output.intl;
            output = result.string;
            sizing = sizing[update];
            sizing = echoed.bind(tangon)(sizing);
            sizing = sizing.t;
            sizing = sizing.geKm7u;
            sizing = output.bind(result)(sizing);
            report['text'] = sizing;
            sizing = offset;
            if(offset) { _fun00004_ip = 558; continue _fun00003 }
 555:
            sizing = foxtra;
 558:
            report['loading'] = sizing;
            kiloes = function() { // Original name: onPress
                zuuluu = _closure2_slot6;
                michal = _closure2_slot2;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            report['onPress'] = kiloes;
            if(offset) { _fun00004_ip = 580; continue _fun00003 }
 577:
            offset = foxtra;
 580:
            if(offset) { _fun00004_ip = 615; continue _fun00003 }
 583:
            romeon = romeon.length;
            foxtra = _closure1_slot0;
            yankee = _closure1_slot2;
            yankee = yankee[backup];
            yankee = foxtra.bind(tangon)(yankee);
            yankee = yankee.BACKUP_CODE_MIN_LENGTH;
            offset = romeon < yankee;
 615:
            report['disabled'] = offset;
            report = verify.bind(tangon)(option, report);
            entity['submit'] = report;
            report = {};
            report['mfaChallenge'] = golfie;
            report['finish'] = oscard;
            entity['screenProps'] = report;
            report = 'backup';
            entity['mfaMethod'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();