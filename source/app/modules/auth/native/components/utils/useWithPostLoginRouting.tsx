// app/modules/auth/native/components/utils/useWithPostLoginRouting.tsx
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.LoginStates;
    var _closure1_slot7 = golfie;
    tangon = tangon.AuthStates;
    var _closure1_slot8 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/auth/native/components/utils/useWithPostLoginRouting.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useWithPostLoginRouting
        verify = argFoo;
        option = argBar;
        var _closure2_slot0 = verify;
        var _closure2_slot1 = option;
        report = _closure1_slot5;
        entity = report.useState;
        golfie = entity.bind(report)();
        oscard = _closure1_slot4;
        entity = undefined;
        tangon = 2;
        golfie = oscard.bind(entity)(golfie, tangon);
        tangon = 0;
        oscard = golfie[tangon];
        var _closure2_slot2 = oscard;
        tangon = 1;
        tangon = golfie[tangon];
        var _closure2_slot3 = tangon;
        golfie = _closure1_slot0;
        offset = _closure1_slot2;
        tangon = 5;
        tangon = offset[tangon];
        offset = golfie.bind(entity)(tangon);
        golfie = offset.useStateFromStoresObject;
        zuuluu = _closure1_slot6;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            entity = {};
            zuuluu = _closure1_slot6;
            michal = zuuluu.getLoginStatus;
            michal = michal.bind(zuuluu)();
            entity['loginStatus'] = michal;
            return entity;
        };
        zuuluu = golfie.bind(offset)(tangon, zuuluu);
        golfie = zuuluu.loginStatus;
        var _closure2_slot4 = golfie;
        tangon = report.useEffect;
        zuuluu = new Array(4);
        zuuluu[0] = verify;
        zuuluu[1] = option;
        zuuluu[2] = golfie;
        zuuluu[3] = oscard;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot2;
                michal = _closure1_slot7;
                michal = michal.LOGGING_IN;
                if(!(zuuluu !== michal)) { _fun00002_ip = 64; continue _fun00001 }
 26:
                zuuluu = _closure2_slot2;
                michal = _closure1_slot7;
                michal = michal.FORGOT_PASSWORD;
                if(!(zuuluu !== michal)) { _fun00002_ip = 64; continue _fun00001 }
 44:
                tangon = _closure2_slot3;
                zuuluu = _closure2_slot4;
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                _fun00002_ip = 708; continue _fun00001;
 64:
                zuuluu = _closure2_slot4;
                michal = _closure1_slot7;
                michal = michal.MFA_STEP;
                if(!(michal !== zuuluu)) { _fun00002_ip = 198; continue _fun00001 }
 82:
                michal = _closure1_slot7;
                michal = michal.ACCOUNT_SCHEDULED_FOR_DELETION;
                if(!(michal !== zuuluu)) { _fun00002_ip = 160; continue _fun00001 }
 96:
                michal = _closure1_slot7;
                michal = michal.ACCOUNT_DISABLED;
                if(!(michal !== zuuluu)) { _fun00002_ip = 160; continue _fun00001 }
 110:
                michal = _closure1_slot7;
                michal = michal.LOGIN_AGE_GATE;
                if(!(michal === zuuluu)) { _fun00002_ip = 222; continue _fun00001 }
 124:
                report = _closure2_slot0;
                tangon = report.push;
                michal = _closure1_slot8;
                zuuluu = michal.AGE_GATE_UNDERAGE;
                michal = {};
                golfie = true;
                michal['existingUser'] = golfie;
                michal = tangon.bind(report)(zuuluu, michal);
                _fun00002_ip = 222; continue _fun00001;
 160:
                report = _closure2_slot0;
                tangon = report.push;
                michal = _closure1_slot8;
                zuuluu = michal.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED;
                michal = {};
                golfie = _closure2_slot1;
                michal['handleLogin'] = golfie;
                michal = tangon.bind(report)(zuuluu, michal);
                _fun00002_ip = 222; continue _fun00001;
 198:
                tangon = _closure2_slot0;
                zuuluu = tangon.push;
                michal = _closure1_slot8;
                michal = michal.MFA;
                michal = zuuluu.bind(tangon)(michal);
 222:
                zuuluu = _closure2_slot4;
                michal = _closure1_slot7;
                michal = michal.PASSWORD_RECOVERY_PHONE_VERIFICATION;
                if(!(michal !== zuuluu)) { _fun00002_ip = 504; continue _fun00001 }
 243:
                michal = _closure1_slot7;
                michal = michal.PHONE_IP_AUTHORIZATION;
                if(!(michal === zuuluu)) { _fun00002_ip = 693; continue _fun00001 }
 260:
                verify = _closure1_slot6;
                michal = verify.getCredentials;
                michal = michal.bind(verify)();
                zuuluu = michal.login;
                var _closure3_slot0 = zuuluu;
                michal = michal.password;
                var _closure3_slot1 = michal;
                report = _closure2_slot0;
                tangon = report.push;
                michal = _closure1_slot8;
                zuuluu = michal.VERIFY_PHONE;
                michal = {};
                foxtra = _closure1_slot0;
                backup = _closure1_slot2;
                golfie = 6;
                yankee = backup[golfie];
                offset = undefined;
                yankee = foxtra.bind(offset)(yankee);
                kiloes = yankee.intl;
                romeon = kiloes.string;
                yankee = backup[golfie];
                yankee = foxtra.bind(offset)(yankee);
                yankee = yankee.t;
                yankee = yankee.w55Ocn;
                yankee = romeon.bind(kiloes)(yankee);
                michal['title'] = yankee;
                yankee = backup[golfie];
                yankee = foxtra.bind(offset)(yankee);
                romeon = yankee.intl;
                yankee = romeon.string;
                golfie = backup[golfie];
                golfie = foxtra.bind(offset)(golfie);
                golfie = golfie.t;
                golfie = golfie.0/ALaG;
                golfie = yankee.bind(romeon)(golfie);
                michal['description'] = golfie;
                golfie = verify.getCredentials;
                golfie = golfie.bind(verify)();
                golfie = golfie.login;
                michal['phone'] = golfie;
                verify = _closure1_slot3;
                golfie = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00004_ip = 145; continue _fun00003 }
 10:
                            tangon = _closure1_slot1;
                            zuuluu = _closure1_slot2;
                            michal = 8;
                            michal = zuuluu[michal];
                            zuuluu = undefined;
                            report = tangon.bind(zuuluu)(michal);
                            tangon = report.authorizeIPAddress;
                            michal = argFoo;
                            michal = tangon.bind(report)(michal);
                            SaveGenerator(address=53);
 51:
                            return michal;
 53:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(tangon) { _fun00004_ip = 142; continue _fun00003 }
 59:
                            oscard = _closure2_slot0;
                            report = oscard.getState;
                            report = report.bind(oscard)();
                            golfie = report.routes;
                            oscard = golfie.findIndex;
                            report = function(argFoo) {
                                entity = argFoo;
                                michal = entity.name;
                                entity = _closure1_slot8;
                                entity = entity.LOGIN;
                                entity = michal === entity;
                                return entity;
                            };
                            oscard = oscard.bind(golfie)(report);
                            report = 0;
                            if(!(!(oscard >= report))) { _fun00004_ip = 124; continue _fun00003 }
 108:
                            golfie = _closure2_slot0;
                            report = golfie.pop;
                            report = report.bind(golfie)();
                            _fun00004_ip = 139; continue _fun00003;
 124:
                            report = _closure2_slot0;
                            tangon = report.pop;
                            tangon = tangon.bind(report)(oscard);
 139:
                            return zuuluu;
 142:
                            return michal;
 145:
                            return entity;
                        }
                    };
                    return entity;
                };
                golfie = verify.bind(offset)(golfie);
                var _closure3_slot2 = golfie;
                golfie = function() {
                    entity = undefined;
                    tangon = _closure3_slot2;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                michal['onPhoneTokenReceived'] = golfie;
                golfie = function(argFoo) { // Original name: onClose
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = argFoo;
                        if(entity) { _fun00006_ip = 43; continue _fun00005 }
 6:
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 8;
                        michal = michal[entity];
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        entity = michal.loginReset;
                        entity = entity.bind(michal)();
                        _fun00006_ip = 97; continue _fun00005;
 43:
                        zuuluu = _closure3_slot1;
                        michal = null;
                        michal = michal != zuuluu;
                        if(!michal) { _fun00006_ip = 71; continue _fun00005 }
 59:
                        tangon = _closure3_slot1;
                        zuuluu = '';
                        michal = zuuluu !== tangon;
 71:
                        if(!michal) { _fun00006_ip = 97; continue _fun00005 }
 74:
                        tangon = _closure2_slot1;
                        zuuluu = _closure3_slot0;
                        michal = _closure3_slot1;
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu, michal);
 97:
                        entity = undefined;
                        return entity;
                    }
                };
                michal['onClose'] = golfie;
                michal = tangon.bind(report)(zuuluu, michal);
                _fun00002_ip = 693; continue _fun00001;
 504:
                zuuluu = _closure1_slot6;
                michal = zuuluu.getCredentials;
                michal = michal.bind(zuuluu)();
                golfie = michal.login;
                report = _closure2_slot0;
                tangon = report.replace;
                michal = _closure1_slot8;
                zuuluu = michal.VERIFY_PHONE;
                michal = {};
                romeon = _closure1_slot0;
                foxtra = _closure1_slot2;
                option = 6;
                verify = foxtra[option];
                yankee = undefined;
                verify = romeon.bind(yankee)(verify);
                backup = verify.intl;
                offset = backup.string;
                verify = foxtra[option];
                verify = romeon.bind(yankee)(verify);
                verify = verify.t;
                verify = verify.+xqy3d;
                verify = offset.bind(backup)(verify);
                michal['title'] = verify;
                verify = foxtra[option];
                verify = romeon.bind(yankee)(verify);
                offset = verify.intl;
                verify = offset.string;
                option = foxtra[option];
                option = romeon.bind(yankee)(option);
                option = option.t;
                option = option.myKyqq;
                option = verify.bind(offset)(option);
                michal['description'] = option;
                michal['phone'] = golfie;
                golfie = function(argFoo) { // Original name: onPhoneTokenReceived
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 7;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = argFoo;
                    oscard = tangon.bind(entity)(zuuluu);
                    report = _closure2_slot0;
                    tangon = report.replace;
                    michal = _closure1_slot8;
                    zuuluu = michal.EXTERNAL_LINK;
                    michal = {};
                    michal['externalURL'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                };
                michal['onPhoneTokenReceived'] = golfie;
                oscard = function() { // Original name: onClose
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 8;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.loginReset;
                    michal = michal.bind(zuuluu)();
                    return entity;
                };
                michal['onClose'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
 693:
                zuuluu = _closure2_slot3;
                michal = _closure2_slot4;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
 708:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();