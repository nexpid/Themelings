// app/modules/mfa/native/screens/TotpScreen.tsx
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
            tangon = argFoo;
            michal = tangon.length;
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 4;
            zuuluu = zuuluu[entity];
            entity = undefined;
            entity = report.bind(entity)(zuuluu);
            entity = entity.TOTP_CODE_LENGTH;
            entity = michal === entity;
            if(!entity) { _fun00002_ip = 70; continue _fun00001 }
 46:
            zuuluu = /^\d+$/;
            michal = zuuluu.test;
            entity = michal.bind(zuuluu)(tangon);
 70:
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
    tangon = 'modules/mfa/native/screens/TotpScreen.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: TotpScreen
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
                        if(michal) { _fun00004_ip = 215; continue _fun00003 }
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
                        report = report.TOTP_CODE_LENGTH;
                        if(!(golfie === report)) { _fun00004_ip = 212; continue _fun00003 }
 75:
                        report = _closure2_slot4;
                        report = report.bind(michal)(michal);
                        golfie = _closure2_slot1;
                        report = true;
                        report = golfie.bind(michal)(report);
 95: // try_start_0
                        golfie = _closure2_slot0;
                        report = {};
                        offset = 'totp';
                        report['mfaType'] = offset;
                        report['data'] = option;
                        report = golfie.bind(michal)(report);
                        SaveGenerator(address=123);
 121:
                        return report;
 123:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                        if(golfie) { _fun00004_ip = 131; continue _fun00003 }
 129: // try_end0
                        _fun00004_ip = 201; continue _fun00003;
 131:
                        return report;
 134: // catch_target0
                        CatchBlockStart(arg_register=6);
                        tangon = golfie;
                        report = _closure2_slot4;
                        option = null;
                        offset = option == golfie;
                        golfie = undefined;
                        if(offset) { _fun00004_ip = 179; continue _fun00003 }
 154:
                        offset = tangon;
                        offset = offset.body;
                        verify = offset;
                        offset = option == offset;
                        golfie = undefined;
                        if(offset) { _fun00004_ip = 179; continue _fun00003 }
 174:
                        golfie = verify.message;
 179:
                        oscard = golfie;
                        if(!(option == golfie)) { _fun00004_ip = 193; continue _fun00003 }
 186:
                        tangon = tangon.message;
                        _fun00004_ip = 196; continue _fun00003;
 193:
                        tangon = oscard;
 196:
                        tangon = report.bind(michal)(tangon);
 201:
                        tangon = _closure2_slot1;
                        zuuluu = false;
                        zuuluu = tangon.bind(michal)(zuuluu);
 212:
                        return michal;
 215:
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
        report = report.uc00u7;
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
        echoed = echoed.HZPBOT;
        echoed = update.bind(source)(echoed);
        report['label'] = echoed;
        echoed = romeon[kiloes];
        echoed = yankee.bind(tangon)(echoed);
        source = echoed.intl;
        update = source.string;
        echoed = romeon[kiloes];
        echoed = yankee.bind(tangon)(echoed);
        echoed = echoed.t;
        echoed = echoed.tARzgo;
        echoed = update.bind(source)(echoed);
        report['placeholder'] = echoed;
        verify = _closure1_slot7;
        report['isValidClipboardCode'] = verify;
        verify = 4;
        echoed = romeon[verify];
        echoed = yankee.bind(tangon)(echoed);
        echoed = echoed.TOTP_CODE_LENGTH;
        report['maxLength'] = echoed;
        report['onChangeCode'] = result;
        report['error'] = output;
        output = 'oneTimeCode';
        report['textContentType'] = output;
        output = 'one-time-code';
        report['autoComplete'] = output;
        output = 'number-pad';
        report['keyboardType'] = output;
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
        verify = verify.TOTP_CODE_LENGTH;
        verify = offset !== verify;
        report['disabled'] = verify;
        report = zuuluu.bind(tangon)(option, report);
        entity['submit'] = report;
        report = {};
        report['mfaChallenge'] = golfie;
        report['finish'] = oscard;
        entity['screenProps'] = report;
        report = 'totp';
        entity['mfaMethod'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();