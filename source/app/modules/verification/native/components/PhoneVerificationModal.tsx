// app/modules/verification/native/components/PhoneVerificationModal.tsx
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
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.VerificationModalScenes;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PHONE_VERIFICATION_MODAL_KEY;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/verification/native/components/PhoneVerificationModal.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: PhoneVerificationModal
        foxtra = argFoo;
        tangon = _closure1_slot6;
        option = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 12;
        entity = verify[entity];
        zuuluu = undefined;
        entity = option.bind(zuuluu)(entity);
        michal = entity.Navigator;
        entity = {};
        var _closure2_slot0 = foxtra;
        oscard = {};
        report = _closure1_slot4;
        offset = report.ADD_PHONE;
        golfie = {};
        romeon = 5;
        backup = verify[romeon];
        kiloes = option.bind(zuuluu)(backup);
        backup = kiloes.getHeaderNoTitle;
        backup = backup.bind(kiloes)();
        golfie['headerTitle'] = backup;
        backup = verify[romeon];
        kiloes = option.bind(zuuluu)(backup);
        backup = kiloes.getHeaderCloseButton;
        foxtra = foxtra.onClose;
        foxtra = backup.bind(kiloes)(foxtra);
        golfie['headerLeft'] = foxtra;
        foxtra = function(argFoo, argBar) { // Original name: render
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                golfie = argFoo;
                var _closure3_slot0 = golfie;
                entity = argBar;
                var _closure3_slot1 = entity;
                tangon = _closure1_slot6;
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 6;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = {};
                yankee = entity;
                offset = golfie;
                oscard = copyDataProperties(yankee, offset);
                oscard = null;
                verify = oscard == golfie;
                option = undefined;
                if(verify) { _fun00002_ip = 74; continue _fun00001 }
 68:
                option = golfie.reason;
 74:
                if(!(oscard == option)) { _fun00002_ip = 91; continue _fun00001 }
 78:
                golfie = _closure2_slot0;
                option = golfie.reason;
 91:
                golfie = 'reason';
                entity[golfie] = option;
                option = function(argFoo) { // Original name: onComplete
                    tangon = _closure3_slot1;
                    zuuluu = tangon.push;
                    entity = _closure1_slot4;
                    michal = entity.VERIFY_PHONE;
                    entity = {};
                    report = argFoo;
                    entity['phone'] = report;
                    report = function(argFoo) { // Original name: onVerified
                        entity = argFoo;
                        var _closure5_slot0 = entity;
                        tangon = _closure3_slot1;
                        zuuluu = tangon.push;
                        entity = _closure1_slot4;
                        michal = entity.VERIFY_PASSWORD;
                        entity = {};
                        oscard = true;
                        entity['hideUnverifiedBanner'] = oscard;
                        oscard = function(argFoo) { // Original name: onSubmit
                            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                                zuuluu = _closure1_slot1;
                                michal = _closure1_slot2;
                                entity = 7;
                                entity = michal[entity];
                                michal = undefined;
                                report = zuuluu.bind(michal)(entity);
                                tangon = report.addPhone;
                                zuuluu = _closure5_slot0;
                                golfie = _closure3_slot0;
                                entity = null;
                                golfie = entity == golfie;
                                if(golfie) { _fun00004_ip = 64; continue _fun00003 }
 54:
                                oscard = _closure3_slot0;
                                michal = oscard.reason;
 64:
                                if(!(entity == michal)) { _fun00004_ip = 81; continue _fun00003 }
 68:
                                entity = _closure2_slot0;
                                michal = entity.reason;
 81:
                                entity = argFoo;
                                entity = tangon.bind(report)(zuuluu, entity, michal);
                                return entity;
                            }
                        };
                        entity['onSubmit'] = oscard;
                        report = function() { // Original name: onSuccess
                            tangon = _closure1_slot1;
                            zuuluu = _closure1_slot2;
                            entity = 8;
                            zuuluu = zuuluu[entity];
                            entity = undefined;
                            tangon = tangon.bind(entity)(zuuluu);
                            zuuluu = tangon.popWithKey;
                            michal = _closure1_slot5;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        };
                        entity['onSuccess'] = report;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        entity = undefined;
                        return entity;
                    };
                    entity['onVerified'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                golfie = 'onComplete';
                entity[golfie] = option;
                golfie = _closure2_slot0;
                golfie = golfie.allowDeletePhone;
                oscard = null;
                if(!golfie) { _fun00002_ip = 137; continue _fun00001 }
 132:
                oscard = function() {
                    tangon = _closure3_slot1;
                    zuuluu = tangon.push;
                    entity = _closure1_slot4;
                    michal = entity.VERIFY_PASSWORD;
                    entity = {};
                    oscard = true;
                    entity['hideUnverifiedBanner'] = oscard;
                    oscard = function(argFoo) { // Original name: onSubmit
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 7;
                            entity = michal[entity];
                            michal = undefined;
                            tangon = zuuluu.bind(michal)(entity);
                            zuuluu = tangon.removePhone;
                            oscard = _closure3_slot0;
                            entity = null;
                            oscard = entity == oscard;
                            if(oscard) { _fun00006_ip = 57; continue _fun00005 }
 47:
                            report = _closure3_slot0;
                            michal = report.reason;
 57:
                            if(!(entity == michal)) { _fun00006_ip = 74; continue _fun00005 }
 61:
                            entity = _closure2_slot0;
                            michal = entity.reason;
 74:
                            entity = argFoo;
                            entity = zuuluu.bind(tangon)(entity, michal);
                            return entity;
                        }
                    };
                    entity['onSubmit'] = oscard;
                    report = function() { // Original name: onSuccess
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 8;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.pop;
                        michal = michal.bind(zuuluu)();
                        return entity;
                    };
                    entity['onSuccess'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    entity = undefined;
                    return entity;
                };
 137:
                report = 'onDeletePhone';
                entity[report] = oscard;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            }
        };
        golfie['render'] = foxtra;
        oscard[offset] = golfie;
        offset = report.VERIFY_PHONE;
        golfie = {};
        foxtra = verify[romeon];
        backup = option.bind(zuuluu)(foxtra);
        foxtra = backup.getHeaderNoTitle;
        foxtra = foxtra.bind(backup)();
        golfie['headerTitle'] = foxtra;
        foxtra = 9;
        foxtra = verify[foxtra];
        foxtra = option.bind(zuuluu)(foxtra);
        foxtra = foxtra.ImpressionNames;
        foxtra = foxtra.USER_VERIFY_PHONE;
        golfie['impressionName'] = foxtra;
        foxtra = function(argFoo, argBar) { // Original name: render
            entity = argBar;
            var _closure3_slot0 = entity;
            tangon = _closure1_slot6;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 10;
            entity = zuuluu[entity];
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            entity = {};
            option = argFoo;
            verify = entity;
            oscard = copyDataProperties(verify, option);
            golfie = true;
            oscard = 'disableKeyboardAvoidingView';
            entity[oscard] = golfie;
            oscard = function(argFoo) { // Original name: onVerified
                entity = argFoo;
                var _closure4_slot0 = entity;
                report = _closure3_slot0;
                tangon = report.push;
                michal = _closure1_slot4;
                zuuluu = michal.VERIFY_PASSWORD;
                michal = {};
                golfie = true;
                michal['hideUnverifiedBanner'] = golfie;
                option = _closure1_slot3;
                entity = undefined;
                golfie = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(zuuluu) { _fun00008_ip = 92; continue _fun00007 }
 7:
                            michal = argFoo;
 10: // try_start_0
                            report = _closure1_slot1;
                            tangon = _closure1_slot2;
                            zuuluu = 7;
                            tangon = tangon[zuuluu];
                            zuuluu = undefined;
                            oscard = report.bind(zuuluu)(tangon);
                            report = oscard.addPhone;
                            tangon = _closure4_slot0;
                            zuuluu = michal;
                            michal = _closure2_slot0;
                            michal = michal.reason;
                            michal = report.bind(oscard)(tangon, zuuluu, michal);
                            SaveGenerator(address=75);
 73:
                            return michal;
 75:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(zuuluu) { _fun00008_ip = 84; continue _fun00007 }
 81: // try_end0
                            return michal;
 84:
                            return michal;
 87: // catch_target0
                            CatchBlockStart(arg_register=1);
                            return michal;
 92:
                            return entity;
                        }
                    };
                    return entity;
                };
                golfie = option.bind(entity)(golfie);
                var _closure4_slot1 = golfie;
                golfie = function() {
                    entity = undefined;
                    tangon = _closure4_slot1;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                michal['onSubmit'] = golfie;
                oscard = function() { // Original name: onSuccess
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 8;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.popWithKey;
                    michal = _closure1_slot5;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal['onSuccess'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            report = 'onVerified';
            entity[report] = oscard;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        golfie['render'] = foxtra;
        oscard[offset] = golfie;
        offset = report.VERIFY_PASSWORD;
        golfie = {};
        romeon = verify[romeon];
        foxtra = option.bind(zuuluu)(romeon);
        romeon = foxtra.getHeaderNoTitle;
        romeon = romeon.bind(foxtra)();
        golfie['headerTitle'] = romeon;
        yankee = function(argFoo) { // Original name: render
            tangon = _closure1_slot6;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 11;
            entity = zuuluu[entity];
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            entity = {};
            oscard = argFoo;
            golfie = entity;
            report = copyDataProperties(golfie, oscard);
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        golfie['render'] = yankee;
        oscard[offset] = golfie;
        entity['screens'] = oscard;
        report = report.ADD_PHONE;
        entity['initialRouteName'] = report;
        report = 13;
        oscard = verify[report];
        oscard = option.bind(zuuluu)(oscard);
        golfie = oscard.intl;
        oscard = golfie.string;
        report = verify[report];
        report = option.bind(zuuluu)(report);
        report = report.t;
        report = report.13/7kZ;
        report = oscard.bind(golfie)(report);
        entity['headerBackTitle'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();