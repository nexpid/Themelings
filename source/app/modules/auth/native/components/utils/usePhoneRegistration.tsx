// app/modules/auth/native/components/utils/usePhoneRegistration.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.setRegistrationErrors;
    var _closure1_slot5 = golfie;
    golfie = tangon.updateRegistrationOptions;
    var _closure1_slot6 = golfie;
    tangon = tangon.useRegistrationUIStore;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.authStateToRegisterTransitionStep;
    var _closure1_slot8 = golfie;
    golfie = tangon.RegisterTransitionSteps;
    var _closure1_slot9 = golfie;
    tangon = tangon.RegistrationTransitionActionTypes;
    var _closure1_slot10 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AbortCodes;
    var _closure1_slot11 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot12 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/auth/native/components/utils/usePhoneRegistration.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: usePhoneRegistration
        yankee = argFoo;
        offset = argBar;
        var _closure2_slot0 = yankee;
        var _closure2_slot1 = offset;
        oscard = _closure1_slot0;
        verify = _closure1_slot1;
        michal = 7;
        tangon = verify[michal];
        michal = undefined;
        report = oscard.bind(michal)(tangon);
        tangon = report.useNavigation;
        option = tangon.bind(report)();
        var _closure2_slot2 = option;
        golfie = _closure1_slot4;
        report = golfie.useContext;
        tangon = 8;
        tangon = verify[tangon];
        tangon = oscard.bind(michal)(tangon);
        tangon = tangon.TrackRegistrationContext;
        verify = report.bind(golfie)(tangon);
        var _closure2_slot3 = verify;
        tangon = golfie.useRef;
        report = '';
        tangon = tangon.bind(golfie)(report);
        var _closure2_slot4 = tangon;
        tangon = golfie.useState;
        oscard = tangon.bind(golfie)(report);
        report = _closure1_slot3;
        tangon = 2;
        oscard = report.bind(michal)(oscard, tangon);
        tangon = 0;
        report = oscard[tangon];
        var _closure2_slot5 = report;
        tangon = 1;
        tangon = oscard[tangon];
        var _closure2_slot6 = tangon;
        romeon = golfie.useCallback;
        oscard = function(argFoo, argBar) {
            tangon = _closure2_slot6;
            entity = undefined;
            zuuluu = argFoo;
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = _closure2_slot4;
            michal = argBar;
            zuuluu['current'] = michal;
            return entity;
        };
        tangon = new Array(0);
        tangon = romeon.bind(golfie)(oscard, tangon);
        oscard = _closure1_slot7;
        zuuluu = function(argFoo) {
            entity = argFoo;
            entity = entity.errors;
            return entity;
        };
        zuuluu = oscard.bind(michal)(zuuluu);
        var _closure2_slot7 = zuuluu;
        romeon = golfie.useMemo;
        oscard = new Array(2);
        oscard[0] = zuuluu;
        oscard[1] = offset;
        zuuluu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot7;
                tangon = entity.error_code;
                entity = _closure1_slot11;
                entity = entity.PHONE_CARRIER_TYPE_NOT_MOBILE;
                if(!(tangon !== entity)) { _fun00002_ip = 217; continue _fun00001 }
 33:
                entity = _closure2_slot7;
                tangon = entity.error_code;
                entity = _closure1_slot11;
                entity = entity.INVALID_PHONE_NUMBER;
                if(!(tangon !== entity)) { _fun00002_ip = 217; continue _fun00001 }
 60:
                tangon = _closure2_slot1;
                oscard = undefined;
                entity = undefined;
                if(!tangon) { _fun00002_ip = 215; continue _fun00001 }
 74:
                zuuluu = _closure2_slot7;
                tangon = zuuluu.error_code;
                zuuluu = _closure1_slot11;
                zuuluu = zuuluu.PHONE_ALREADY_CLAIMED_GENERIC;
                entity = undefined;
                if(!(tangon === zuuluu)) { _fun00002_ip = 215; continue _fun00001 }
 100:
                report = _closure1_slot12;
                option = _closure1_slot0;
                yankee = _closure1_slot1;
                zuuluu = 10;
                zuuluu = yankee[zuuluu];
                zuuluu = option.bind(oscard)(zuuluu);
                tangon = zuuluu.TextWithIOSLinkWorkaround;
                zuuluu = {};
                golfie = 'text-xs/medium';
                zuuluu['variant'] = golfie;
                golfie = 9;
                verify = yankee[golfie];
                verify = option.bind(oscard)(verify);
                offset = verify.intl;
                verify = offset.format;
                golfie = yankee[golfie];
                golfie = option.bind(oscard)(golfie);
                golfie = golfie.t;
                option = golfie.kj8xiI;
                golfie = {};
                yankee = 'https://dis.gd/phone-errors';
                golfie['phoneURL'] = yankee;
                golfie = verify.bind(offset)(option, golfie);
                zuuluu['children'] = golfie;
                entity = report.bind(oscard)(tangon, zuuluu);
 215:
                _fun00002_ip = 276; continue _fun00001;
 217:
                oscard = _closure1_slot0;
                golfie = _closure1_slot1;
                michal = 9;
                zuuluu = golfie[michal];
                report = undefined;
                zuuluu = oscard.bind(report)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.string;
                michal = golfie[michal];
                michal = oscard.bind(report)(michal);
                michal = michal.t;
                michal = michal.F8UYVV;
                entity = zuuluu.bind(tangon)(michal);
 276:
                return entity;
            }
        };
        zuuluu = romeon.bind(golfie)(zuuluu, oscard);
        oscard = golfie.useCallback;
        entity = function() {
            tangon = _closure1_slot2;
            zuuluu = undefined;
            michal = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zuuluu) { _fun00004_ip = 759; continue _fun00003 }
 12:
                        zuuluu = argFoo;
                        var _closure5_slot0 = zuuluu;
                        report = undefined;
                        backup = undefined;
                        var _closure5_slot1 = report;
                        option = undefined;
                        golfie = undefined;
                        oscard = undefined;
                        tangon = _closure2_slot4;
                        verify = tangon.current;
                        tangon = _closure2_slot5;
                        yankee = verify + tangon;
                        backup = yankee;
                        _closure5_slot1 = yankee;
                        offset = _closure1_slot6;
                        tangon = {};
                        tangon['email'] = report;
                        tangon['phone'] = yankee;
                        tangon = offset.bind(report)(tangon);
                        offset = _closure1_slot8;
                        tangon = _closure2_slot0;
                        option = offset.bind(report)(tangon);
 97: // try_start_0
                        offset = _closure1_slot0;
                        yankee = _closure1_slot1;
                        tangon = 11;
                        tangon = yankee[tangon];
                        yankee = offset.bind(report)(tangon);
                        offset = yankee.registerPhone;
                        tangon = {};
                        romeon = backup;
                        tangon['phone'] = romeon;
                        tangon = offset.bind(yankee)(tangon);
                        SaveGenerator(address=142);
 140:
                        return tangon;
 142:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                        if(offset) { _fun00004_ip = 410; continue _fun00003 }
 151:
                        yankee = _closure2_slot3;
                        offset = {};
                        romeon = option;
                        offset['step'] = romeon;
                        romeon = _closure1_slot9;
                        romeon = romeon.PHONE_VERIFICATION;
                        offset['toStep'] = romeon;
                        romeon = _closure1_slot10;
                        romeon = romeon.SUCCESS;
                        offset['actionType'] = romeon;
                        offset = yankee.bind(report)(offset);
 200: // try_end0
                        foxtra = _closure2_slot2;
                        romeon = foxtra.push;
                        sizing = _closure1_slot0;
                        echoed = _closure1_slot1;
                        offset = 14;
                        offset = echoed[offset];
                        offset = sizing.bind(report)(offset);
                        offset = offset.AuthStates;
                        yankee = offset.VERIFY_PHONE;
                        offset = {};
                        kiloes = 9;
                        output = echoed[kiloes];
                        output = sizing.bind(report)(output);
                        update = output.intl;
                        result = update.string;
                        output = echoed[kiloes];
                        output = sizing.bind(report)(output);
                        output = output.t;
                        output = output.h7hdQk;
                        output = result.bind(update)(output);
                        offset['title'] = output;
                        output = echoed[kiloes];
                        output = sizing.bind(report)(output);
                        result = output.intl;
                        output = result.formatToPlainString;
                        kiloes = echoed[kiloes];
                        kiloes = sizing.bind(report)(kiloes);
                        kiloes = kiloes.t;
                        sizing = kiloes.e5WzVV;
                        kiloes = {};
                        kiloes['phone'] = backup;
                        kiloes = output.bind(result)(sizing, kiloes);
                        offset['description'] = kiloes;
                        offset['phone'] = backup;
                        backup = _closure2_slot0;
                        offset['sourceState'] = backup;
                        backup = function(argFoo) { // Original name: onPhoneTokenReceived
                            zuuluu = _closure1_slot6;
                            michal = {};
                            entity = undefined;
                            michal['email'] = entity;
                            tangon = _closure5_slot1;
                            michal['phone'] = tangon;
                            tangon = argFoo;
                            michal['phoneToken'] = tangon;
                            michal = zuuluu.bind(entity)(michal);
                            option = _closure2_slot3;
                            golfie = {};
                            zuuluu = _closure1_slot9;
                            zuuluu = zuuluu.PHONE_VERIFICATION;
                            golfie['step'] = zuuluu;
                            tangon = _closure1_slot0;
                            oscard = _closure1_slot1;
                            zuuluu = 15;
                            report = oscard[zuuluu];
                            yankee = tangon.bind(entity)(report);
                            offset = yankee.getNextRegistrationTransitionStep;
                            report = _closure2_slot0;
                            offset = offset.bind(yankee)(report);
                            golfie['toStep'] = offset;
                            verify = _closure1_slot10;
                            verify = verify.SUCCESS;
                            golfie['actionType'] = verify;
                            golfie = option.bind(entity)(golfie);
                            zuuluu = oscard[zuuluu];
                            tangon = tangon.bind(entity)(zuuluu);
                            zuuluu = tangon.getNextAuthState;
                            tangon = zuuluu.bind(tangon)(report);
                            zuuluu = _closure2_slot2;
                            michal = zuuluu.replace;
                            michal = michal.bind(zuuluu)(tangon);
                            return entity;
                        };
                        offset['onPhoneTokenReceived'] = backup;
                        backup = function() { // Original name: onBail
                            tangon = _closure2_slot6;
                            entity = undefined;
                            zuuluu = '';
                            zuuluu = tangon.bind(entity)(zuuluu);
                            zuuluu = _closure2_slot2;
                            michal = zuuluu.pop;
                            michal = michal.bind(zuuluu)();
                            michal = _closure5_slot0;
                            michal = michal.bind(entity)();
                            return entity;
                        };
                        offset['onBail'] = backup;
                        backup = _closure2_slot1;
                        offset['streamlineErrorsCTAsEnabled'] = backup;
                        offset = romeon.bind(foxtra)(yankee, offset);
                        return report;
 410:
                        return tangon;
 413: // catch_target0
                        CatchBlockStart(arg_register=10);
                        offset = _closure1_slot0;
                        romeon = _closure1_slot1;
                        tangon = 12;
                        tangon = romeon[tangon];
                        offset = offset.bind(report)(tangon);
                        tangon = offset.getAuthenticationErrorsFromAPIError;
                        yankee = tangon.bind(offset)(yankee);
                        golfie = yankee;
                        tangon = _closure1_slot5;
                        tangon = tangon.bind(report)(yankee);
                        tangon = global;
                        offset = tangon.Object;
                        tangon = offset.keys;
                        offset = tangon.bind(offset)(yankee);
                        tangon = offset.filter;
                        michal = function(argFoo) {
                            zuuluu = ['phone'];
                            michal = zuuluu.includes;
                            entity = argFoo;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        michal = tangon.bind(offset)(michal);
                        oscard = michal;
                        michal = michal.length;
                        offset = 0;
                        if(!(michal > offset)) { _fun00004_ip = 525; continue _fun00003 }
 507:
                        michal = golfie;
                        tangon = michal.error_code;
                        michal = null;
                        if(!(michal == tangon)) { _fun00004_ip = 653; continue _fun00003 }
 525:
                        yankee = golfie;
                        yankee = yankee.error_code;
                        romeon = null;
                        yankee = romeon != yankee;
                        tangon = yankee;
                        if(!yankee) { _fun00004_ip = 558; continue _fun00003 }
 546:
                        yankee = golfie;
                        yankee = yankee.message;
                        tangon = romeon != yankee;
 558:
                        michal = tangon;
                        if(!tangon) { _fun00004_ip = 651; continue _fun00003 }
 564:
                        yankee = _closure2_slot3;
                        tangon = {};
                        romeon = option;
                        tangon['step'] = romeon;
                        romeon = _closure1_slot10;
                        romeon = romeon.RESPONSE_ERROR;
                        tangon['actionType'] = romeon;
                        foxtra = _closure1_slot0;
                        backup = _closure1_slot1;
                        romeon = 13;
                        romeon = backup[romeon];
                        backup = foxtra.bind(report)(romeon);
                        foxtra = backup.getCommonErrorDetails;
                        romeon = golfie;
                        romeon = romeon.error_code;
                        foxtra = foxtra.bind(backup)(romeon);
                        romeon = new Array(1);
                        romeon[0] = foxtra;
                        tangon['details'] = romeon;
                        michal = yankee.bind(report)(tangon);
 651:
                        _fun00004_ip = 754; continue _fun00003;
 653:
                        tangon = _closure2_slot3;
                        zuuluu = {};
                        zuuluu['step'] = option;
                        option = _closure1_slot10;
                        option = option.RESPONSE_ERROR;
                        zuuluu['actionType'] = option;
                        ctrled = oscard;
                        oscard = new Array(1);
                        vacuum = oscard;
                        source = 0;
                        option = arraySpread(vacuum, ctrled, source);
                        offset = _closure1_slot0;
                        yankee = _closure1_slot1;
                        verify = 13;
                        verify = yankee[verify];
                        offset = offset.bind(report)(verify);
                        verify = offset.getCommonErrorDetails;
                        golfie = golfie.error_code;
                        golfie = verify.bind(offset)(golfie);
                        oscard[option] = golfie;
                        golfie = 1;
                        golfie = option + golfie;
                        zuuluu['details'] = oscard;
                        michal = tangon.bind(report)(zuuluu);
 754:
                        michal = undefined;
                        return michal;
 759:
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
        michal = entity.bind(michal)();
        entity = new Array(5);
        entity[0] = yankee;
        entity[1] = report;
        entity[2] = offset;
        entity[3] = verify;
        entity[4] = option;
        michal = oscard.bind(golfie)(michal, entity);
        entity = {};
        entity['loginPhone'] = report;
        entity['updateLoginPhone'] = tangon;
        entity['phoneErrorMessage'] = zuuluu;
        entity['registerAndVerifyPhone'] = michal;
        return entity;
    };
    zuuluu['usePhoneRegistration'] = michal;
    return entity;
})();