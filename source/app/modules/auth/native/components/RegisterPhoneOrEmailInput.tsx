// app/modules/auth/native/components/RegisterPhoneOrEmailInput.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.setRegistrationErrors;
    var _closure1_slot5 = golfie;
    tangon = tangon.useRegistrationUIStore;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot7 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/auth/native/components/RegisterPhoneOrEmailInput.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: RegisterPhoneOrEmailInput
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            result = entity.loginPhone;
            var _closure2_slot0 = result;
            echoed = entity.loginEmail;
            var _closure2_slot1 = echoed;
            update = entity.setLoginPhone;
            var _closure2_slot2 = update;
            offset = entity.setLoginEmail;
            var _closure2_slot3 = offset;
            verify = entity.inputMode;
            var _closure2_slot4 = verify;
            foxtra = entity.onSubmit;
            oscard = entity.inputError;
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            tangon = 4;
            report = entity[tangon];
            tangon = undefined;
            option = michal.bind(tangon)(report);
            report = option.useNavigation;
            option = report.bind(option)();
            var _closure2_slot5 = option;
            romeon = _closure1_slot3;
            yankee = romeon.useRef;
            report = null;
            output = yankee.bind(romeon)(report);
            var _closure2_slot6 = output;
            yankee = 5;
            yankee = entity[yankee];
            sizing = michal.bind(tangon)(yankee);
            kiloes = sizing.useStateFromStores;
            yankee = _closure1_slot4;
            backup = new Array(1);
            backup[0] = yankee;
            yankee = function() {
                michal = _closure1_slot4;
                entity = michal.getCountryCode;
                entity = entity.bind(michal)();
                return entity;
            };
            sizing = kiloes.bind(sizing)(backup, yankee);
            kiloes = sizing.code;
            backup = _closure1_slot6;
            yankee = function(argFoo) {
                entity = argFoo;
                entity = entity.errors;
                return entity;
            };
            yankee = backup.bind(tangon)(yankee);
            var _closure2_slot7 = yankee;
            source = romeon.useCallback;
            backup = new Array(1);
            backup[0] = yankee;
            yankee = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    zuuluu = _closure2_slot7;
                    tangon = zuuluu[entity];
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00004_ip = 51; continue _fun00003 }
 20:
                    zuuluu = {};
                    report = _closure2_slot7;
                    oscard = zuuluu;
                    michal = copyDataProperties(oscard, report);
                    entity = delete zuuluu[entity];
                    michal = _closure1_slot5;
                    entity = undefined;
                    entity = michal.bind(entity)(zuuluu);
 51:
                    entity = undefined;
                    return entity;
                }
            };
            source = source.bind(romeon)(yankee, backup);
            var _closure2_slot8 = source;
            backup = romeon.useCallback;
            yankee = new Array(4);
            yankee[0] = verify;
            yankee[1] = source;
            yankee[2] = update;
            yankee[3] = offset;
            offset = function(argFoo, argBar) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = argFoo;
                    report = _closure2_slot4;
                    oscard = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 6;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    zuuluu = oscard.bind(entity)(zuuluu);
                    zuuluu = zuuluu.PhoneOrEmailSelectorForceMode;
                    zuuluu = zuuluu.PHONE;
                    if(!(report !== zuuluu)) { _fun00006_ip = 75; continue _fun00005 }
 51:
                    report = _closure2_slot8;
                    zuuluu = 'email';
                    zuuluu = report.bind(entity)(zuuluu);
                    zuuluu = _closure2_slot3;
                    zuuluu = zuuluu.bind(entity)(tangon);
                    _fun00006_ip = 101; continue _fun00005;
 75:
                    report = _closure2_slot8;
                    zuuluu = 'phone';
                    zuuluu = report.bind(entity)(zuuluu);
                    zuuluu = _closure2_slot2;
                    michal = argBar;
                    michal = zuuluu.bind(entity)(tangon, michal);
 101:
                    return entity;
                }
            };
            backup = backup.bind(romeon)(offset, yankee);
            yankee = romeon.useCallback;
            offset = new Array(1);
            offset[0] = option;
            option = function() {
                tangon = _closure2_slot5;
                zuuluu = tangon.push;
                report = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 7;
                michal = michal[entity];
                entity = undefined;
                michal = report.bind(entity)(michal);
                michal = michal.AuthStates;
                michal = michal.COUNTRY_SELECT;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            yankee = yankee.bind(romeon)(option, offset);
            option = romeon.useRef;
            option = option.bind(romeon)(verify);
            var _closure2_slot9 = option;
            offset = romeon.useLayoutEffect;
            option = new Array(3);
            option[0] = verify;
            option[1] = echoed;
            option[2] = result;
            zuuluu = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot9;
                    zuuluu = michal.current;
                    michal = _closure2_slot4;
                    if(!(zuuluu !== michal)) { _fun00008_ip = 137; continue _fun00007 }
 20:
                    michal = _closure2_slot9;
                    zuuluu = _closure2_slot4;
                    michal['current'] = zuuluu;
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 6;
                    tangon = tangon[michal];
                    michal = undefined;
                    michal = report.bind(michal)(tangon);
                    michal = michal.PhoneOrEmailSelectorForceMode;
                    michal = michal.PHONE;
                    if(!(zuuluu !== michal)) { _fun00008_ip = 107; continue _fun00007 }
 75:
                    michal = _closure2_slot6;
                    tangon = michal.current;
                    michal = null;
                    if(!(michal != tangon)) { _fun00008_ip = 137; continue _fun00007 }
 90:
                    zuuluu = tangon.setText;
                    michal = _closure2_slot1;
                    michal = zuuluu.bind(tangon)(michal);
                    _fun00008_ip = 137; continue _fun00007;
 107:
                    michal = _closure2_slot6;
                    zuuluu = michal.current;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00008_ip = 137; continue _fun00007 }
 122:
                    michal = zuuluu.setText;
                    entity = _closure2_slot0;
                    entity = michal.bind(zuuluu)(entity);
 137:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = offset.bind(romeon)(zuuluu, option);
            offset = 6;
            entity = entity[offset];
            entity = michal.bind(tangon)(entity);
            entity = entity.PhoneOrEmailSelectorForceMode;
            entity = entity.PHONE;
            if(!(verify !== entity)) { _fun00002_ip = 421; continue _fun00001 }
 364:
            option = _closure1_slot0;
            romeon = _closure1_slot2;
            entity = 8;
            michal = romeon[entity];
            michal = option.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = romeon[entity];
            entity = option.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.dI4d4e;
            romeon = michal.bind(zuuluu)(entity);
            _fun00002_ip = 476; continue _fun00001;
 421:
            option = _closure1_slot0;
            result = _closure1_slot2;
            entity = 8;
            michal = result[entity];
            michal = option.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = result[entity];
            entity = option.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.eJnn09;
            romeon = michal.bind(zuuluu)(entity);
 476:
            zuuluu = _closure1_slot7;
            michal = _closure1_slot1;
            option = _closure1_slot2;
            entity = 9;
            entity = option[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['ref'] = output;
            sizing = sizing.alpha2;
            entity['alpha2'] = sizing;
            entity['countryCode'] = kiloes;
            entity['onChange'] = backup;
            entity['onSubmitEditing'] = foxtra;
            entity['placeholder'] = romeon;
            foxtra = 'next';
            entity['returnKeyType'] = foxtra;
            foxtra = 'none';
            entity['autoCapitalize'] = foxtra;
            entity['label'] = romeon;
            entity['errorMessage'] = oscard;
            entity['onPressCountrySelector'] = yankee;
            entity['forceMode'] = verify;
            yankee = _closure1_slot0;
            option = option[offset];
            option = yankee.bind(tangon)(option);
            option = option.PhoneOrEmailSelectorForceMode;
            yankee = option.PHONE;
            option = 'email';
            if(!(verify === yankee)) { _fun00002_ip = 611; continue _fun00001 }
 607:
            option = 'tel';
 611:
            entity['autoComplete'] = option;
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[offset];
            golfie = option.bind(tangon)(golfie);
            golfie = golfie.PhoneOrEmailSelectorForceMode;
            option = golfie.PHONE;
            golfie = 'email-address';
            if(!(verify === option)) { _fun00002_ip = 661; continue _fun00001 }
 655:
            golfie = 'number-pad';
 661:
            entity['keyboardType'] = golfie;
            golfie = true;
            entity['isClearable'] = golfie;
            entity['autoFocus'] = golfie;
            oscard = report != oscard;
            report = undefined;
            if(!oscard) { _fun00002_ip = 691; continue _fun00001 }
 687:
            report = 'error';
 691:
            entity['status'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['RegisterPhoneOrEmailInput'] = michal;
    return entity;
})();