// app/modules/auth/native/components/utils/handleRegisterErrorRedirection.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    tangon = global;
    verify = tangon.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 0;
    golfie = oscard[entity];
    entity = undefined;
    golfie = report.bind(entity)(golfie);
    option = golfie.RegisterTransitionSteps;
    var _closure1_slot3 = option;
    golfie = golfie.RegistrationTransitionActionTypes;
    var _closure1_slot4 = golfie;
    golfie = 1;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.AbortCodes;
    var _closure1_slot5 = golfie;
    verify = tangon.Set;
    golfie = verify.prototype;
    option = Object.create(golfie, {constructor: {value: verify}});
    romeon = ['email', 'phoneToken'];
    foxtra = option;
    golfie = new foxtra[verify](romeon, yankee);
    golfie = golfie instanceof Object ? golfie : option;
    var _closure1_slot6 = golfie;
    verify = tangon.Set;
    golfie = verify.prototype;
    option = Object.create(golfie, {constructor: {value: verify}});
    romeon = ['global_name'];
    foxtra = option;
    golfie = new foxtra[verify](romeon, yankee);
    golfie = golfie instanceof Object ? golfie : option;
    var _closure1_slot7 = golfie;
    option = tangon.Set;
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    romeon = ['username', 'password'];
    foxtra = golfie;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/auth/native/components/utils/handleRegisterErrorRedirection.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz, argCor) { // Original name: handleRegisterErrorRedirection
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            verify = argBaz;
            golfie = _closure1_slot1;
            oscard = _closure1_slot2;
            report = 2;
            oscard = oscard[report];
            report = undefined;
            golfie = golfie.bind(report)(oscard);
            oscard = 'date_of_birth';
            oscard = golfie.bind(report)(oscard, verify);
            romeon = null;
            if(!(romeon == oscard)) { _fun00002_ip = 769; continue _fun00001 }
 55:
            oscard = global;
            option = oscard.Number;
            golfie = verify.code;
            option = option.bind(report)(golfie);
            golfie = _closure1_slot5;
            golfie = golfie.UNDER_MINIMUM_AGE;
            if(!(option !== golfie)) { _fun00002_ip = 769; continue _fun00001 }
 90:
            option = oscard.Object;
            golfie = option.keys;
            offset = golfie.bind(option)(verify);
            option = offset.filter;
            golfie = function(argFoo) {
                zuuluu = _closure1_slot6;
                michal = zuuluu.has;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            option = option.bind(offset)(golfie);
            offset = option.length;
            golfie = 0;
            if(!(!(offset > golfie))) { _fun00002_ip = 623; continue _fun00001 }
 137:
            yankee = oscard.Object;
            offset = yankee.keys;
            foxtra = offset.bind(yankee)(verify);
            yankee = foxtra.filter;
            offset = function(argFoo) {
                zuuluu = _closure1_slot7;
                michal = zuuluu.has;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            offset = yankee.bind(foxtra)(offset);
            yankee = offset.length;
            if(!(!(yankee > golfie))) { _fun00002_ip = 477; continue _fun00001 }
 182:
            yankee = oscard.Object;
            oscard = yankee.keys;
            yankee = oscard.bind(yankee)(verify);
            oscard = yankee.filter;
            michal = function(argFoo) {
                zuuluu = _closure1_slot8;
                michal = zuuluu.has;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            yankee = oscard.bind(yankee)(michal);
            michal = yankee.length;
            if(!(!(michal > golfie))) { _fun00002_ip = 331; continue _fun00001 }
 224:
            michal = verify.error_code;
            michal = romeon != michal;
            if(!michal) { _fun00002_ip = 246; continue _fun00001 }
 237:
            oscard = verify.message;
            michal = romeon != oscard;
 246:
            if(!michal) { _fun00002_ip = 329; continue _fun00001 }
 249:
            michal = {};
            oscard = argCor;
            michal['step'] = oscard;
            oscard = _closure1_slot4;
            oscard = oscard.RESPONSE_ERROR;
            michal['actionType'] = oscard;
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            oscard = 4;
            oscard = foxtra[oscard];
            foxtra = romeon.bind(report)(oscard);
            romeon = foxtra.getCommonErrorDetails;
            oscard = verify.error_code;
            romeon = romeon.bind(foxtra)(oscard);
            oscard = new Array(1);
            oscard[0] = romeon;
            michal['details'] = oscard;
            michal = zuuluu.bind(report)(michal);
 329:
            return report;
 331:
            michal = {};
            oscard = _closure1_slot3;
            oscard = oscard.ACCOUNT_INFORMATION;
            michal['step'] = oscard;
            oscard = _closure1_slot4;
            oscard = oscard.RESPONSE_ERROR;
            michal['actionType'] = oscard;
            oscard = new Array(1);
            echoed = oscard;
            result = yankee;
            output = 0;
            backup = arraySpread(echoed, result, output);
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            foxtra = 4;
            foxtra = romeon[foxtra];
            sizing = yankee.bind(report)(foxtra);
            kiloes = sizing.getCommonErrorDetails;
            foxtra = verify.error_code;
            foxtra = kiloes.bind(sizing)(foxtra);
            oscard[backup] = foxtra;
            foxtra = 1;
            foxtra = backup + foxtra;
            michal['details'] = oscard;
            michal = zuuluu.bind(report)(michal);
            oscard = tangon.navigate;
            michal = 3;
            michal = romeon[michal];
            michal = yankee.bind(report)(michal);
            michal = michal.AuthStates;
            michal = michal.REGISTER_ACCOUNT_INFORMATION;
            michal = oscard.bind(tangon)(michal);
            michal = undefined;
            return michal;
 477:
            michal = {};
            oscard = _closure1_slot3;
            oscard = oscard.ACCOUNT_DISPLAY_NAME;
            michal['step'] = oscard;
            oscard = _closure1_slot4;
            oscard = oscard.RESPONSE_ERROR;
            michal['actionType'] = oscard;
            oscard = new Array(1);
            echoed = oscard;
            result = offset;
            output = 0;
            foxtra = arraySpread(echoed, result, output);
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            romeon = 4;
            romeon = yankee[romeon];
            kiloes = offset.bind(report)(romeon);
            backup = kiloes.getCommonErrorDetails;
            romeon = verify.error_code;
            romeon = backup.bind(kiloes)(romeon);
            oscard[foxtra] = romeon;
            romeon = 1;
            romeon = foxtra + romeon;
            michal['details'] = oscard;
            michal = zuuluu.bind(report)(michal);
            oscard = tangon.navigate;
            michal = 3;
            michal = yankee[michal];
            michal = offset.bind(report)(michal);
            michal = michal.AuthStates;
            michal = michal.REGISTER_DISPLAY_NAME;
            michal = oscard.bind(tangon)(michal);
            michal = undefined;
            return michal;
 623:
            michal = {};
            oscard = _closure1_slot3;
            oscard = oscard.ACCOUNT_IDENTITY;
            michal['step'] = oscard;
            oscard = _closure1_slot4;
            oscard = oscard.RESPONSE_ERROR;
            michal['actionType'] = oscard;
            oscard = new Array(1);
            echoed = oscard;
            result = option;
            output = 0;
            offset = arraySpread(echoed, result, output);
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            yankee = 4;
            yankee = option[yankee];
            romeon = golfie.bind(report)(yankee);
            yankee = romeon.getCommonErrorDetails;
            verify = verify.error_code;
            verify = yankee.bind(romeon)(verify);
            oscard[offset] = verify;
            verify = 1;
            verify = offset + verify;
            michal['details'] = oscard;
            michal = zuuluu.bind(report)(michal);
            oscard = tangon.navigate;
            michal = 3;
            michal = option[michal];
            michal = golfie.bind(report)(michal);
            michal = michal.AuthStates;
            michal = michal.REGISTER_IDENTITY;
            michal = oscard.bind(tangon)(michal);
            michal = undefined;
            return michal;
 769:
            michal = {};
            oscard = _closure1_slot3;
            oscard = oscard.AGE_GATE_UNDERAGE;
            michal['step'] = oscard;
            oscard = _closure1_slot4;
            oscard = oscard.VIEWED;
            michal['actionType'] = oscard;
            michal = zuuluu.bind(report)(michal);
            zuuluu = tangon.push;
            michal = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 3;
            entity = oscard[entity];
            entity = michal.bind(report)(entity);
            entity = entity.AuthStates;
            michal = entity.AGE_GATE_UNDERAGE;
            entity = {'fromRegister': true, 'disableSwipe': true};
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();