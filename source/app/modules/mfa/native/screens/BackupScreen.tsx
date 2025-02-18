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
        entity = argFoo;
        golfie = entity.mfaChallenge;
        oscard = entity.finish;
        var _closure2_slot0 = oscard;
        report = _closure1_slot5;
        michal = report.useState;
        entity = false;
        entity = michal.bind(report)(entity);
        yankee = _closure1_slot4;
        tangon = undefined;
        option = 2;
        entity = yankee.bind(tangon)(entity, option);
        zuuluu = 0;
        backup = entity[zuuluu];
        michal = 1;
        entity = entity[michal];
        var _closure2_slot1 = entity;
        offset = report.useState;
        entity = '';
        entity = offset.bind(report)(entity);
        entity = yankee.bind(tangon)(entity, option);
        offset = entity[zuuluu];
        var _closure2_slot2 = offset;
        entity = entity[michal];
        var _closure2_slot3 = entity;
        entity = report.useState;
        entity = entity.bind(report)(tangon);
        entity = yankee.bind(tangon)(entity, option);
        output = entity[zuuluu];
        entity = entity[michal];
        var _closure2_slot4 = entity;
        zuuluu = report.useCallback;
        entity = function() {
            tangon = _closure1_slot3;
            zuuluu = undefined;
            michal = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        StartGenerator();
                        report = argFoo;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00004_ip = 217; continue _fun00003 }
 13:
                        option = report;
                        michal = undefined;
                        oscard = undefined;
                        verify = undefined;
                        golfie = _closure2_slot3;
                        golfie = golfie.bind(michal)(report);
                        golfie = report.length;
                        offset = _closure1_slot0;
                        yankee = _closure1_slot2;
                        report = 4;
                        report = yankee[report];
                        report = offset.bind(michal)(report);
                        report = report.BACKUP_CODE_MIN_LENGTH;
                        if(!(golfie !== report)) { _fun00004_ip = 86; continue _fun00003 }
 72:
                        report = _closure2_slot4;
                        report = report.bind(michal)(michal);
                        _fun00004_ip = 214; continue _fun00003;
 86:
                        golfie = _closure2_slot1;
                        report = true;
                        report = golfie.bind(michal)(report);
 97: // try_start_0
                        golfie = _closure2_slot0;
                        report = {};
                        offset = 'backup';
                        report['mfaType'] = offset;
                        report['data'] = option;
                        report = golfie.bind(michal)(report);
                        SaveGenerator(address=125);
 123:
                        return report;
 125:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                        if(golfie) { _fun00004_ip = 133; continue _fun00003 }
 131: // try_end0
                        _fun00004_ip = 203; continue _fun00003;
 133:
                        return report;
 136: // catch_target0
                        CatchBlockStart(arg_register=6);
                        tangon = golfie;
                        report = _closure2_slot4;
                        option = null;
                        offset = option == golfie;
                        golfie = undefined;
                        if(offset) { _fun00004_ip = 181; continue _fun00003 }
 156:
                        offset = tangon;
                        offset = offset.body;
                        verify = offset;
                        offset = option == offset;
                        golfie = undefined;
                        if(offset) { _fun00004_ip = 181; continue _fun00003 }
 176:
                        golfie = verify.message;
 181:
                        oscard = golfie;
                        if(!(option == golfie)) { _fun00004_ip = 195; continue _fun00003 }
 188:
                        tangon = tangon.message;
                        _fun00004_ip = 198; continue _fun00003;
 195:
                        tangon = oscard;
 198:
                        tangon = report.bind(michal)(tangon);
 203:
                        tangon = _closure2_slot1;
                        zuuluu = false;
                        zuuluu = tangon.bind(michal)(zuuluu);
 214:
                        return michal;
 217:
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
        result = zuuluu.bind(report)(michal, entity);
        var _closure2_slot5 = result;
        zuuluu = _closure1_slot6;
        option = _closure1_slot1;
        romeon = _closure1_slot2;
        entity = 5;
        entity = romeon[entity];
        michal = option.bind(tangon)(entity);
        entity = {};
        yankee = _closure1_slot0;
        kiloes = 6;
        report = romeon[kiloes];
        report = yankee.bind(tangon)(report);
        echoed = report.intl;
        sizing = echoed.string;
        report = romeon[kiloes];
        report = yankee.bind(tangon)(report);
        report = report.t;
        report = report.B2T1HB;
        report = sizing.bind(echoed)(report);
        entity['headerText'] = report;
        report = 7;
        report = romeon[report];
        sizing = option.bind(tangon)(report);
        report = {};
        echoed = romeon[kiloes];
        echoed = yankee.bind(tangon)(echoed);
        source = echoed.intl;
        update = source.string;
        echoed = romeon[kiloes];
        echoed = yankee.bind(tangon)(echoed);
        echoed = echoed.t;
        echoed = echoed.C/ZAw8;
        echoed = update.bind(source)(echoed);
        report['label'] = echoed;
        echoed = romeon[kiloes];
        echoed = yankee.bind(tangon)(echoed);
        source = echoed.intl;
        update = source.string;
        echoed = romeon[kiloes];
        echoed = yankee.bind(tangon)(echoed);
        echoed = echoed.t;
        echoed = echoed.fZSi1N;
        echoed = update.bind(source)(echoed);
        report['placeholder'] = echoed;
        verify = _closure1_slot7;
        report['isValidClipboardCode'] = verify;
        verify = 4;
        echoed = romeon[verify];
        echoed = yankee.bind(tangon)(echoed);
        echoed = echoed.BACKUP_CODE_MAX_LENGTH;
        report['maxLength'] = echoed;
        report['onChangeCode'] = result;
        report['error'] = output;
        report = zuuluu.bind(tangon)(sizing, report);
        entity['input'] = report;
        report = 8;
        report = romeon[report];
        option = option.bind(tangon)(report);
        report = {};
        sizing = 'primary';
        report['variant'] = sizing;
        sizing = romeon[kiloes];
        sizing = yankee.bind(tangon)(sizing);
        output = sizing.intl;
        sizing = output.string;
        kiloes = romeon[kiloes];
        kiloes = yankee.bind(tangon)(kiloes);
        kiloes = kiloes.t;
        kiloes = kiloes.geKm7u;
        kiloes = sizing.bind(output)(kiloes);
        report['text'] = kiloes;
        report['loading'] = backup;
        foxtra = function() { // Original name: onPress
            zuuluu = _closure2_slot5;
            michal = _closure2_slot2;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        report['onPress'] = foxtra;
        offset = offset.length;
        verify = romeon[verify];
        verify = yankee.bind(tangon)(verify);
        verify = verify.BACKUP_CODE_MIN_LENGTH;
        verify = offset < verify;
        report['disabled'] = verify;
        report = zuuluu.bind(tangon)(option, report);
        entity['submit'] = report;
        report = {};
        report['mfaChallenge'] = golfie;
        report['finish'] = oscard;
        entity['screenProps'] = report;
        report = 'backup';
        entity['mfaMethod'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();