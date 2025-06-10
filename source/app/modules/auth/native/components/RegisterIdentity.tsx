// app/modules/auth/native/components/RegisterIdentity.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: RegisterIdentityBase
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            vacuum = entity.inputMode;
            var _closure2_slot0 = vacuum;
            michal = entity.setInputMode;
            var _closure2_slot1 = michal;
            output = entity.headerText;
            source = entity.controlComponent;
            foxtra = entity.subheader;
            tangon = undefined;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            var _closure2_slot9 = tangon;
            var _closure2_slot10 = tangon;
            var _closure2_slot11 = tangon;
            var _closure2_slot12 = tangon;
            yankee = function() { // Original name: handleSubmit
                entity = undefined;
                tangon = _closure2_slot13;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            entity = function() { // Original name: _handleSubmit
                tangon = undefined;
                entity = undefined;
                zuuluu = _closure1_slot3;
                michal = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(zuuluu) { _fun00004_ip = 1196; continue _fun00003 }
 12:
                            option = undefined;
                            foxtra = undefined;
                            var _closure5_slot0 = option;
                            verify = undefined;
                            golfie = undefined;
                            report = _closure1_slot9;
                            zuuluu = {};
                            zuuluu = report.bind(option)(zuuluu);
                            oscard = _closure2_slot0;
                            offset = _closure1_slot0;
                            yankee = _closure1_slot2;
                            report = 21;
                            report = yankee[report];
                            report = offset.bind(option)(report);
                            report = report.PhoneOrEmailSelectorForceMode;
                            report = report.EMAIL;
                            if(!(oscard !== report)) { _fun00004_ip = 880; continue _fun00003 }
 84:
                            report = _closure2_slot7;
                            oscard = report.current;
                            report = _closure2_slot8;
                            offset = oscard + report;
                            foxtra = offset;
                            _closure5_slot0 = offset;
                            oscard = _closure1_slot10;
                            report = {};
                            report['email'] = option;
                            report['phone'] = offset;
                            report = oscard.bind(option)(report);
                            oscard = _closure2_slot12;
                            report = {};
                            offset = _closure1_slot12;
                            offset = offset.ACCOUNT_IDENTITY;
                            report['step'] = offset;
                            offset = _closure1_slot13;
                            offset = offset.SUBMITTED;
                            report['actionType'] = offset;
                            report = oscard.bind(option)(report);
                            oscard = _closure2_slot11;
                            report = true;
                            report = oscard.bind(option)(report);
 181: // try_start_0
                            oscard = _closure1_slot0;
                            offset = _closure1_slot2;
                            report = 25;
                            report = offset[report];
                            offset = oscard.bind(option)(report);
                            oscard = offset.registerPhone;
                            report = {};
                            yankee = foxtra;
                            report['phone'] = yankee;
                            report = oscard.bind(offset)(report);
                            SaveGenerator(address=226);
 224:
                            return report;
 226:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(oscard) { _fun00004_ip = 503; continue _fun00003 }
 235:
                            offset = _closure2_slot12;
                            oscard = {};
                            yankee = _closure1_slot12;
                            yankee = yankee.ACCOUNT_IDENTITY;
                            oscard['step'] = yankee;
                            yankee = _closure1_slot12;
                            yankee = yankee.PHONE_VERIFICATION;
                            oscard['toStep'] = yankee;
                            yankee = _closure1_slot13;
                            yankee = yankee.SUCCESS;
                            oscard['actionType'] = yankee;
                            oscard = offset.bind(option)(oscard);
 291: // try_end0
                            romeon = _closure2_slot4;
                            yankee = romeon.push;
                            kiloes = _closure1_slot0;
                            result = _closure1_slot2;
                            oscard = 24;
                            oscard = result[oscard];
                            oscard = kiloes.bind(option)(oscard);
                            oscard = oscard.AuthStates;
                            offset = oscard.VERIFY_PHONE;
                            oscard = {};
                            backup = 15;
                            sizing = result[backup];
                            sizing = kiloes.bind(option)(sizing);
                            echoed = sizing.intl;
                            output = echoed.string;
                            sizing = result[backup];
                            sizing = kiloes.bind(option)(sizing);
                            sizing = sizing.t;
                            sizing = sizing.h7hdQk;
                            sizing = output.bind(echoed)(sizing);
                            oscard['title'] = sizing;
                            sizing = result[backup];
                            sizing = kiloes.bind(option)(sizing);
                            output = sizing.intl;
                            sizing = output.formatToPlainString;
                            backup = result[backup];
                            backup = kiloes.bind(option)(backup);
                            backup = backup.t;
                            kiloes = backup.e5WzVV;
                            backup = {};
                            backup['phone'] = foxtra;
                            backup = sizing.bind(output)(kiloes, backup);
                            oscard['description'] = backup;
                            oscard['phone'] = foxtra;
                            foxtra = function(argFoo) { // Original name: onPhoneTokenReceived
                                tangon = _closure1_slot10;
                                michal = {};
                                entity = undefined;
                                michal['email'] = entity;
                                report = _closure5_slot0;
                                michal['phone'] = report;
                                report = argFoo;
                                michal['phoneToken'] = report;
                                michal = tangon.bind(entity)(michal);
                                report = _closure2_slot12;
                                tangon = {};
                                oscard = _closure1_slot12;
                                oscard = oscard.PHONE_VERIFICATION;
                                tangon['step'] = oscard;
                                oscard = _closure1_slot12;
                                oscard = oscard.ACCOUNT_DISPLAY_NAME;
                                tangon['toStep'] = oscard;
                                oscard = _closure1_slot13;
                                oscard = oscard.SUCCESS;
                                tangon['actionType'] = oscard;
                                tangon = report.bind(entity)(tangon);
                                oscard = _closure1_slot0;
                                golfie = _closure1_slot2;
                                zuuluu = 23;
                                zuuluu = golfie[zuuluu];
                                report = oscard.bind(entity)(zuuluu);
                                tangon = report.getNextAuthState;
                                zuuluu = 24;
                                zuuluu = golfie[zuuluu];
                                zuuluu = oscard.bind(entity)(zuuluu);
                                zuuluu = zuuluu.AuthStates;
                                zuuluu = zuuluu.REGISTER_IDENTITY;
                                tangon = tangon.bind(report)(zuuluu);
                                zuuluu = _closure2_slot4;
                                michal = zuuluu.replace;
                                michal = michal.bind(zuuluu)(tangon);
                                return entity;
                            };
                            oscard['onPhoneTokenReceived'] = foxtra;
                            foxtra = function() { // Original name: onBail
                                tangon = _closure2_slot9;
                                entity = undefined;
                                zuuluu = '';
                                zuuluu = tangon.bind(entity)(zuuluu);
                                tangon = _closure2_slot1;
                                report = _closure1_slot0;
                                oscard = _closure1_slot2;
                                zuuluu = 21;
                                zuuluu = oscard[zuuluu];
                                zuuluu = report.bind(entity)(zuuluu);
                                zuuluu = zuuluu.PhoneOrEmailSelectorForceMode;
                                zuuluu = zuuluu.EMAIL;
                                zuuluu = tangon.bind(entity)(zuuluu);
                                zuuluu = _closure2_slot4;
                                michal = zuuluu.pop;
                                michal = michal.bind(zuuluu)();
                                return entity;
                            };
                            oscard['onBail'] = foxtra;
                            foxtra = _closure2_slot2;
                            oscard['streamlineErrorsCTAsEnabled'] = foxtra;
                            oscard = yankee.bind(romeon)(offset, oscard);
                            offset = _closure2_slot11;
                            oscard = false;
                            oscard = offset.bind(option)(oscard);
                            return option;
 503:
                            return report;
 506: // catch_target0
                            CatchBlockStart(arg_register=9);
                            oscard = _closure2_slot11;
                            report = false;
                            report = oscard.bind(option)(report);
                            oscard = _closure1_slot0;
                            yankee = _closure1_slot2;
                            report = 26;
                            report = yankee[report];
                            oscard = oscard.bind(option)(report);
                            report = oscard.getAuthenticationErrorsFromAPIError;
                            offset = report.bind(oscard)(offset);
                            verify = offset;
                            report = _closure1_slot9;
                            report = report.bind(option)(offset);
                            report = global;
                            oscard = report.Object;
                            report = oscard.keys;
                            oscard = report.bind(oscard)(offset);
                            report = oscard.filter;
                            michal = function(argFoo) {
                                zuuluu = ['phone'];
                                michal = zuuluu.includes;
                                entity = argFoo;
                                entity = michal.bind(zuuluu)(entity);
                                return entity;
                            };
                            michal = report.bind(oscard)(michal);
                            golfie = michal;
                            michal = michal.length;
                            yankee = 0;
                            if(!(michal > yankee)) { _fun00004_ip = 629; continue _fun00003 }
 611:
                            michal = verify;
                            report = michal.error_code;
                            michal = null;
                            if(!(michal == report)) { _fun00004_ip = 764; continue _fun00003 }
 629:
                            oscard = verify;
                            oscard = oscard.error_code;
                            offset = null;
                            oscard = offset != oscard;
                            report = oscard;
                            if(!oscard) { _fun00004_ip = 662; continue _fun00003 }
 650:
                            oscard = verify;
                            oscard = oscard.message;
                            report = offset != oscard;
 662:
                            michal = report;
                            if(!report) { _fun00004_ip = 762; continue _fun00003 }
 668:
                            oscard = _closure2_slot12;
                            report = {};
                            offset = _closure1_slot12;
                            offset = offset.ACCOUNT_IDENTITY;
                            report['step'] = offset;
                            offset = _closure1_slot13;
                            offset = offset.RESPONSE_ERROR;
                            report['actionType'] = offset;
                            romeon = _closure1_slot0;
                            foxtra = _closure1_slot2;
                            offset = 27;
                            offset = foxtra[offset];
                            foxtra = romeon.bind(option)(offset);
                            romeon = foxtra.getCommonErrorDetails;
                            offset = verify;
                            offset = offset.error_code;
                            romeon = romeon.bind(foxtra)(offset);
                            offset = new Array(1);
                            offset[0] = romeon;
                            report['details'] = offset;
                            michal = oscard.bind(option)(report);
 762:
                            _fun00004_ip = 875; continue _fun00003;
 764:
                            oscard = _closure2_slot12;
                            report = {};
                            offset = _closure1_slot12;
                            offset = offset.ACCOUNT_IDENTITY;
                            report['step'] = offset;
                            offset = _closure1_slot13;
                            offset = offset.RESPONSE_ERROR;
                            report['actionType'] = offset;
                            source = golfie;
                            golfie = new Array(1);
                            ctrled = golfie;
                            update = 0;
                            offset = arraySpread(ctrled, source, update);
                            romeon = _closure1_slot0;
                            foxtra = _closure1_slot2;
                            yankee = 27;
                            yankee = foxtra[yankee];
                            romeon = romeon.bind(option)(yankee);
                            yankee = romeon.getCommonErrorDetails;
                            verify = verify.error_code;
                            verify = yankee.bind(romeon)(verify);
                            golfie[offset] = verify;
                            verify = 1;
                            verify = offset + verify;
                            report['details'] = golfie;
                            michal = oscard.bind(option)(report);
 875:
                            michal = undefined;
                            return michal;
 880:
                            oscard = _closure2_slot10;
                            report = _closure1_slot10;
                            michal = {};
                            michal['email'] = oscard;
                            michal['phoneToken'] = option;
                            michal = report.bind(option)(michal);
                            report = _closure2_slot12;
                            michal = {};
                            golfie = _closure1_slot12;
                            golfie = golfie.ACCOUNT_IDENTITY;
                            michal['step'] = golfie;
                            golfie = _closure1_slot13;
                            golfie = golfie.SUBMITTED;
                            michal['actionType'] = golfie;
                            michal = report.bind(option)(michal);
                            michal = _closure2_slot3;
                            if(!michal) { _fun00004_ip = 1126; continue _fun00003 }
 956:
                            report = _closure1_slot1;
                            golfie = _closure1_slot2;
                            michal = 22;
                            michal = golfie[michal];
                            report = report.bind(option)(michal);
                            michal = report.isEmail;
                            michal = michal.bind(report)(oscard);
                            if(michal) { _fun00004_ip = 1126; continue _fun00003 }
 993:
                            report = _closure1_slot9;
                            michal = {};
                            offset = _closure1_slot0;
                            yankee = _closure1_slot2;
                            oscard = 15;
                            golfie = yankee[oscard];
                            golfie = offset.bind(option)(golfie);
                            verify = golfie.intl;
                            golfie = verify.string;
                            oscard = yankee[oscard];
                            oscard = offset.bind(option)(oscard);
                            oscard = oscard.t;
                            oscard = oscard.nr0MVV;
                            oscard = golfie.bind(verify)(oscard);
                            michal['email'] = oscard;
                            michal = report.bind(option)(michal);
                            report = _closure2_slot12;
                            michal = {};
                            oscard = _closure1_slot12;
                            oscard = oscard.ACCOUNT_IDENTITY;
                            michal['step'] = oscard;
                            oscard = _closure1_slot13;
                            oscard = oscard.INPUT_ERROR;
                            michal['actionType'] = oscard;
                            oscard = ['email'];
                            michal['details'] = oscard;
                            michal = report.bind(option)(michal);
                            michal = undefined;
                            _fun00004_ip = 1193; continue _fun00003;
 1126:
                            report = _closure1_slot0;
                            verify = _closure1_slot2;
                            tangon = 23;
                            tangon = verify[tangon];
                            golfie = report.bind(option)(tangon);
                            oscard = golfie.handleNextOrSubmitRegistration;
                            tangon = 24;
                            tangon = verify[tangon];
                            tangon = report.bind(option)(tangon);
                            tangon = tangon.AuthStates;
                            report = tangon.REGISTER_IDENTITY;
                            tangon = _closure2_slot4;
                            zuuluu = _closure2_slot12;
                            zuuluu = oscard.bind(golfie)(report, tangon, zuuluu);
                            michal = undefined;
 1193:
                            return michal;
 1196:
                            return entity;
                        }
                    };
                    return entity;
                };
                tangon = zuuluu.bind(tangon)(michal);
                _closure2_slot13 = tangon;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            var _closure2_slot13 = entity;
            verify = _closure1_slot1;
            entity = _closure1_slot2;
            michal = 10;
            michal = entity[michal];
            zuuluu = verify.bind(tangon)(michal);
            michal = {};
            oscard = 'RegisterIdentity';
            michal['location'] = oscard;
            michal = zuuluu.bind(tangon)(michal);
            oscard = michal.streamlineErrorsCTAsEnabled;
            _closure2_slot2 = oscard;
            romeon = michal.showFieldErrorsEnabled;
            _closure2_slot3 = romeon;
            michal = _closure1_slot18;
            record = michal.bind(tangon)();
            michal = _closure1_slot0;
            zuuluu = 11;
            zuuluu = entity[zuuluu];
            option = michal.bind(tangon)(zuuluu);
            zuuluu = option.useNavigation;
            zuuluu = zuuluu.bind(option)();
            _closure2_slot4 = zuuluu;
            option = _closure1_slot11;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.errors;
                return entity;
            };
            zuuluu = option.bind(tangon)(zuuluu);
            var _closure2_slot5 = zuuluu;
            option = 12;
            option = entity[option];
            kiloes = michal.bind(tangon)(option);
            backup = kiloes.useStateFromStores;
            option = _closure1_slot8;
            offset = new Array(1);
            offset[0] = option;
            option = function() {
                michal = _closure1_slot8;
                entity = michal.getAuthenticationConsentRequired;
                entity = entity.bind(michal)();
                return entity;
            };
            option = backup.bind(kiloes)(offset, option);
            var _closure2_slot6 = option;
            backup = _closure1_slot5;
            offset = backup.useRef;
            sizing = '';
            offset = offset.bind(backup)(sizing);
            _closure2_slot7 = offset;
            backup = _closure1_slot5;
            offset = backup.useState;
            backup = offset.bind(backup)(sizing);
            offset = _closure1_slot4;
            echoed = 2;
            backup = offset.bind(tangon)(backup, echoed);
            offset = 0;
            limora = backup[offset];
            _closure2_slot8 = limora;
            kiloes = 1;
            backup = backup[kiloes];
            _closure2_slot9 = backup;
            result = _closure1_slot5;
            backup = result.useState;
            result = backup.bind(result)(sizing);
            backup = _closure1_slot4;
            backup = backup.bind(tangon)(result, echoed);
            sierra = backup[offset];
            _closure2_slot10 = sierra;
            target = backup[kiloes];
            ctrled = _closure1_slot5;
            update = ctrled.useCallback;
            result = function(argFoo, argBar) {
                tangon = _closure2_slot9;
                entity = undefined;
                zuuluu = argFoo;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = _closure2_slot7;
                michal = argBar;
                zuuluu['current'] = michal;
                return entity;
            };
            backup = new Array(0);
            status = update.bind(ctrled)(result, backup);
            update = _closure1_slot5;
            result = update.useState;
            backup = false;
            result = result.bind(update)(backup);
            backup = _closure1_slot4;
            backup = backup.bind(tangon)(result, echoed);
            offset = backup[offset];
            backup = backup[kiloes];
            _closure2_slot11 = backup;
            result = _closure1_slot5;
            kiloes = result.useContext;
            backup = 13;
            backup = entity[backup];
            backup = michal.bind(tangon)(backup);
            backup = backup.TrackRegistrationContext;
            backup = kiloes.bind(result)(backup);
            _closure2_slot12 = backup;
            backup = 14;
            kiloes = entity[backup];
            echoed = michal.bind(tangon)(kiloes);
            result = echoed.useIsMobileMarketingEmailOptInExperimentEnabled;
            backup = entity[backup];
            backup = michal.bind(tangon)(backup);
            backup = backup.MobileMarketingEmailOptInScreens;
            kiloes = backup.ACCOUNT_IDENTITY;
            backup = 'AuthScreens';
            ctrled = result.bind(echoed)(backup, kiloes);
            echoed = _closure1_slot5;
            result = echoed.useMemo;
            backup = zuuluu.error_code;
            kiloes = new Array(3);
            kiloes[0] = backup;
            backup = zuuluu.message;
            kiloes[1] = backup;
            kiloes[2] = oscard;
            backup = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot5;
                    tangon = michal.error_code;
                    zuuluu = _closure1_slot14;
                    zuuluu = zuuluu.PHONE_CARRIER_TYPE_NOT_MOBILE;
                    if(!(tangon !== zuuluu)) { _fun00006_ip = 221; continue _fun00005 }
 33:
                    zuuluu = _closure2_slot5;
                    tangon = zuuluu.error_code;
                    zuuluu = _closure1_slot14;
                    zuuluu = zuuluu.INVALID_PHONE_NUMBER;
                    if(!(tangon !== zuuluu)) { _fun00006_ip = 221; continue _fun00005 }
 60:
                    zuuluu = _closure2_slot2;
                    if(!zuuluu) { _fun00006_ip = 91; continue _fun00005 }
 67:
                    zuuluu = _closure2_slot5;
                    tangon = zuuluu.error_code;
                    zuuluu = _closure1_slot14;
                    zuuluu = zuuluu.PHONE_ALREADY_CLAIMED_GENERIC;
                    if(!(tangon !== zuuluu)) { _fun00006_ip = 102; continue _fun00005 }
 91:
                    entity = _closure2_slot5;
                    entity = entity.message;
                    _fun00006_ip = 219; continue _fun00005;
 102:
                    oscard = _closure1_slot16;
                    option = _closure1_slot0;
                    yankee = _closure1_slot2;
                    zuuluu = 16;
                    zuuluu = yankee[zuuluu];
                    report = undefined;
                    zuuluu = option.bind(report)(zuuluu);
                    tangon = zuuluu.TextWithIOSLinkWorkaround;
                    zuuluu = {};
                    golfie = 'text-xs/medium';
                    zuuluu['variant'] = golfie;
                    golfie = 15;
                    verify = yankee[golfie];
                    verify = option.bind(report)(verify);
                    offset = verify.intl;
                    verify = offset.format;
                    golfie = yankee[golfie];
                    golfie = option.bind(report)(golfie);
                    golfie = golfie.t;
                    option = golfie.kj8xiI;
                    golfie = {};
                    yankee = 'https://dis.gd/phone-errors';
                    golfie['phoneURL'] = yankee;
                    golfie = verify.bind(offset)(option, golfie);
                    zuuluu['children'] = golfie;
                    entity = oscard.bind(report)(tangon, zuuluu);
 219:
                    _fun00006_ip = 280; continue _fun00005;
 221:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 15;
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
 280:
                    return entity;
                }
            };
            config = result.bind(echoed)(backup, kiloes);
            backup = 17;
            backup = entity[backup];
            backup = verify.bind(tangon)(backup);
            backup = backup.bind(tangon)();
            result = _closure1_slot5;
            kiloes = result.useEffect;
            backup = new Array(1);
            backup[0] = option;
            option = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot6;
                    entity = null;
                    if(!(entity == michal)) { _fun00008_ip = 48; continue _fun00007 }
 13:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 18;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    entity = michal.getLocationMetadata;
                    entity = entity.bind(michal)();
 48:
                    entity = undefined;
                    return entity;
                }
            };
            option = kiloes.bind(result)(option, backup);
            option = 19;
            option = entity[option];
            option = verify.bind(tangon)(option);
            option = option.bind(tangon)();
            option = 20;
            option = entity[option];
            option = verify.bind(tangon)(option);
            report = function() {
                zuuluu = _closure2_slot12;
                michal = {};
                tangon = _closure1_slot12;
                tangon = tangon.ACCOUNT_IDENTITY;
                michal['step'] = tangon;
                entity = _closure1_slot13;
                entity = entity.VIEWED;
                michal['actionType'] = entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            report = option.bind(tangon)(report);
            cntext = 21;
            entity = entity[cntext];
            entity = michal.bind(tangon)(entity);
            entity = entity.PhoneOrEmailSelectorForceMode;
            entity = entity.PHONE;
            kiloes = sierra;
            if(!(vacuum === entity)) { _fun00002_ip = 688; continue _fun00001 }
 685:
            kiloes = limora;
 688:
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[cntext];
            entity = michal.bind(tangon)(entity);
            entity = entity.PhoneOrEmailSelectorForceMode;
            entity = entity.PHONE;
            if(!(vacuum !== entity)) { _fun00002_ip = 753; continue _fun00001 }
 721:
            michal = _closure1_slot1;
            report = _closure1_slot2;
            entity = 28;
            entity = report[entity];
            michal = michal.bind(tangon)(entity);
            entity = 'email';
            backup = michal.bind(tangon)(entity, zuuluu);
            _fun00002_ip = 783; continue _fun00001;
 753:
            michal = _closure1_slot1;
            report = _closure1_slot2;
            entity = 28;
            entity = report[entity];
            michal = michal.bind(tangon)(entity);
            entity = 'phone';
            backup = michal.bind(tangon)(entity, zuuluu);
 783:
            zuuluu = _closure1_slot17;
            option = _closure1_slot1;
            result = _closure1_slot2;
            entity = 29;
            entity = result[entity];
            michal = option.bind(tangon)(entity);
            entity = {};
            report = record.page;
            entity['style'] = report;
            verify = _closure1_slot16;
            report = 30;
            report = result[report];
            option = option.bind(tangon)(report);
            report = {};
            report['headerText'] = output;
            report['subHeader'] = foxtra;
            echoed = _closure1_slot17;
            result = _closure1_slot7;
            output = {};
            foxtra = record.container;
            output['style'] = foxtra;
            foxtra = record.scrollContent;
            output['contentContainerStyle'] = foxtra;
            foxtra = 'handled';
            output['keyboardShouldPersistTaps'] = foxtra;
            foxtra = null;
            sequen = null;
            if(!oscard) { _fun00002_ip = 944; continue _fun00001 }
 893:
            update = foxtra != config;
            sequen = null;
            if(!update) { _fun00002_ip = 944; continue _fun00001 }
 902:
            sequen = null;
            if(!(sizing !== config)) { _fun00002_ip = 944; continue _fun00001 }
 908:
            whisks = _closure1_slot16;
            papara = _closure1_slot1;
            equals = _closure1_slot2;
            update = 31;
            update = equals[update];
            papara = papara.bind(tangon)(update);
            update = {};
            update['children'] = config;
            sequen = whisks.bind(tangon)(papara, update);
 944:
            update = new Array(7);
            update[0] = sequen;
            update[1] = source;
            papara = _closure1_slot16;
            sequen = _closure1_slot0;
            whisks = _closure1_slot2;
            source = 32;
            source = whisks[source];
            source = sequen.bind(tangon)(source);
            sequen = source.RegisterPhoneOrEmailInput;
            source = {};
            source['loginPhone'] = limora;
            source['loginEmail'] = sierra;
            source['setLoginPhone'] = status;
            source['setLoginEmail'] = target;
            source['inputMode'] = vacuum;
            source['streamlineErrorsCTAsEnabled'] = oscard;
            source['showFieldErrorsEnabled'] = romeon;
            source['onSubmit'] = yankee;
            source = papara.bind(tangon)(sequen, source);
            update[2] = source;
            source = !ctrled;
            if(!source) { _fun00002_ip = 1047; continue _fun00001 }
 1044:
            source = !oscard;
 1047:
            if(!source) { _fun00002_ip = 1164; continue _fun00001 }
 1050:
            target = _closure1_slot16;
            papara = _closure1_slot6;
            sequen = {};
            sierra = foxtra != backup;
            status = undefined;
            if(!sierra) { _fun00002_ip = 1075; continue _fun00001 }
 1069:
            status = record.privacyNoticeWithError;
 1075:
            sequen['style'] = status;
            sierra = _closure1_slot0;
            equals = _closure1_slot2;
            status = 15;
            limora = equals[status];
            limora = sierra.bind(tangon)(limora);
            whisks = limora.intl;
            limora = whisks.format;
            status = equals[status];
            status = sierra.bind(tangon)(status);
            status = status.t;
            sierra = status.PGffT0;
            status = {};
            equals = _closure1_slot15;
            equals = equals.PRIVACY;
            status['privacyURL'] = equals;
            status = limora.bind(whisks)(sierra, status);
            sequen['children'] = status;
            source = target.bind(tangon)(papara, sequen);
 1164:
            update[3] = source;
            sequen = _closure1_slot0;
            source = _closure1_slot2;
            source = source[cntext];
            source = sequen.bind(tangon)(source);
            source = source.PhoneOrEmailSelectorForceMode;
            source = source.EMAIL;
            source = vacuum === source;
            if(!source) { _fun00002_ip = 1207; continue _fun00001 }
 1204:
            source = ctrled;
 1207:
            if(!source) { _fun00002_ip = 1242; continue _fun00001 }
 1210:
            sequen = _closure1_slot16;
            vacuum = _closure1_slot1;
            cntext = _closure1_slot2;
            ctrled = 33;
            ctrled = cntext[ctrled];
            vacuum = vacuum.bind(tangon)(ctrled);
            ctrled = {};
            source = sequen.bind(tangon)(vacuum, ctrled);
 1242:
            update[4] = source;
            source = !oscard;
            if(!source) { _fun00002_ip = 1422; continue _fun00001 }
 1255:
            sequen = _closure1_slot16;
            vacuum = _closure1_slot6;
            ctrled = {};
            cntext = record.button;
            ctrled['style'] = cntext;
            target = _closure1_slot16;
            whisks = _closure1_slot0;
            equals = _closure1_slot2;
            cntext = 34;
            cntext = equals[cntext];
            cntext = whisks.bind(tangon)(cntext);
            papara = cntext.Button;
            cntext = {};
            cntext['loading'] = offset;
            status = 'lg';
            cntext['size'] = status;
            status = 15;
            sierra = equals[status];
            sierra = whisks.bind(tangon)(sierra);
            limora = sierra.intl;
            sierra = limora.string;
            status = equals[status];
            status = whisks.bind(tangon)(status);
            status = status.t;
            status = status.PDTjLC;
            status = sierra.bind(limora)(status);
            cntext['text'] = status;
            cntext['onPress'] = yankee;
            status = foxtra == kiloes;
            if(status) { _fun00002_ip = 1386; continue _fun00001 }
 1382:
            status = sizing === kiloes;
 1386:
            if(status) { _fun00002_ip = 1402; continue _fun00001 }
 1389:
            sierra = romeon;
            if(!romeon) { _fun00002_ip = 1399; continue _fun00001 }
 1395:
            sierra = foxtra != backup;
 1399:
            status = sierra;
 1402:
            cntext['disabled'] = status;
            cntext = target.bind(tangon)(papara, cntext);
            ctrled['children'] = cntext;
            source = sequen.bind(tangon)(vacuum, ctrled);
 1422:
            update[5] = source;
            source = null;
            if(oscard) { _fun00002_ip = 1492; continue _fun00001 }
 1431:
            ctrled = foxtra == config;
            source = null;
            if(ctrled) { _fun00002_ip = 1492; continue _fun00001 }
 1440:
            source = null;
            if(!(sizing !== config)) { _fun00002_ip = 1492; continue _fun00001 }
 1446:
            sequen = _closure1_slot16;
            vacuum = _closure1_slot1;
            cntext = _closure1_slot2;
            ctrled = 35;
            ctrled = cntext[ctrled];
            vacuum = vacuum.bind(tangon)(ctrled);
            ctrled = {};
            record = record.errors;
            ctrled['style'] = record;
            ctrled['children'] = config;
            source = sequen.bind(tangon)(vacuum, ctrled);
 1492:
            update[6] = source;
            output['children'] = update;
            output = echoed.bind(tangon)(result, output);
            report['children'] = output;
            option = verify.bind(tangon)(option, report);
            report = new Array(2);
            report[0] = option;
            if(!oscard) { _fun00002_ip = 1596; continue _fun00001 }
 1527:
            verify = _closure1_slot16;
            option = _closure1_slot1;
            output = _closure1_slot2;
            golfie = 36;
            golfie = output[golfie];
            option = option.bind(tangon)(golfie);
            golfie = {};
            golfie['onPress'] = yankee;
            yankee = foxtra == kiloes;
            if(yankee) { _fun00002_ip = 1568; continue _fun00001 }
 1564:
            yankee = sizing === kiloes;
 1568:
            if(yankee) { _fun00002_ip = 1581; continue _fun00001 }
 1571:
            if(!romeon) { _fun00002_ip = 1578; continue _fun00001 }
 1574:
            romeon = foxtra != backup;
 1578:
            yankee = romeon;
 1581:
            golfie['disabled'] = yankee;
            golfie['loading'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 1596:
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: RegisterIdentityTabs
        michal = _closure1_slot18;
        tangon = undefined;
        romeon = michal.bind(tangon)();
        report = _closure1_slot5;
        zuuluu = report.useState;
        option = _closure1_slot0;
        verify = _closure1_slot2;
        michal = 21;
        michal = verify[michal];
        michal = option.bind(tangon)(michal);
        michal = michal.PhoneOrEmailSelectorForceMode;
        michal = michal.PHONE;
        report = zuuluu.bind(report)(michal);
        zuuluu = _closure1_slot4;
        michal = 2;
        zuuluu = zuuluu.bind(tangon)(report, michal);
        michal = 0;
        golfie = zuuluu[michal];
        michal = 1;
        michal = zuuluu[michal];
        var _closure2_slot0 = michal;
        report = 15;
        zuuluu = verify[report];
        zuuluu = option.bind(tangon)(zuuluu);
        offset = zuuluu.intl;
        oscard = offset.string;
        zuuluu = verify[report];
        zuuluu = option.bind(tangon)(zuuluu);
        zuuluu = zuuluu.t;
        zuuluu = zuuluu.dEYpSk;
        zuuluu = oscard.bind(offset)(zuuluu);
        backup = new Array(2);
        backup[0] = zuuluu;
        zuuluu = verify[report];
        zuuluu = option.bind(tangon)(zuuluu);
        offset = zuuluu.intl;
        oscard = offset.string;
        zuuluu = verify[report];
        zuuluu = option.bind(tangon)(zuuluu);
        zuuluu = zuuluu.t;
        zuuluu = zuuluu.w/qqKC;
        zuuluu = oscard.bind(offset)(zuuluu);
        backup[1] = zuuluu;
        offset = _closure1_slot5;
        oscard = offset.useCallback;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = _closure2_slot0;
                michal = 0;
                entity = argFoo;
                if(!(michal !== entity)) { _fun00010_ip = 55; continue _fun00009 }
 16:
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 21;
                michal = michal[entity];
                entity = undefined;
                entity = tangon.bind(entity)(michal);
                entity = entity.PhoneOrEmailSelectorForceMode;
                michal = entity.EMAIL;
                _fun00010_ip = 92; continue _fun00009;
 55:
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 21;
                tangon = tangon[entity];
                entity = undefined;
                entity = report.bind(entity)(tangon);
                entity = entity.PhoneOrEmailSelectorForceMode;
                michal = entity.PHONE;
 92:
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            }
        };
        offset = oscard.bind(offset)(michal, zuuluu);
        michal = 37;
        michal = verify[michal];
        oscard = option.bind(tangon)(michal);
        zuuluu = oscard.useSegmentedControlState;
        michal = {'pageWidth': 0, 'defaultIndex': 0};
        michal['onSetActiveIndex'] = offset;
        foxtra = backup.map;
        offset = function(argFoo) {
            michal = argFoo;
            entity = {};
            entity['id'] = michal;
            entity['label'] = michal;
            michal = null;
            entity['page'] = michal;
            return entity;
        };
        offset = foxtra.bind(backup)(offset);
        michal['items'] = offset;
        backup = zuuluu.bind(oscard)(michal);
        var _closure2_slot1 = backup;
        oscard = _closure1_slot5;
        zuuluu = oscard.useCallback;
        michal = new Array(1);
        michal[0] = backup;
        entity = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = _closure2_slot1;
                tangon = report.setActiveIndex;
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 21;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                michal = michal.PhoneOrEmailSelectorForceMode;
                oscard = michal.PHONE;
                zuuluu = 1;
                michal = argFoo;
                if(!(michal === oscard)) { _fun00012_ip = 62; continue _fun00011 }
 60:
                zuuluu = 0;
 62:
                michal = false;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            }
        };
        oscard = zuuluu.bind(oscard)(entity, michal);
        zuuluu = _closure1_slot16;
        michal = _closure1_slot19;
        entity = {};
        entity['inputMode'] = golfie;
        entity['setInputMode'] = oscard;
        offset = _closure1_slot16;
        golfie = _closure1_slot6;
        oscard = {};
        romeon = romeon.segmentedControl;
        oscard['style'] = romeon;
        foxtra = _closure1_slot16;
        yankee = 38;
        yankee = verify[yankee];
        yankee = option.bind(tangon)(yankee);
        romeon = yankee.SegmentedControl;
        yankee = {};
        yankee['state'] = backup;
        backup = 'handled';
        yankee['keyboardShouldPersistTaps'] = backup;
        yankee = foxtra.bind(tangon)(romeon, yankee);
        oscard['children'] = yankee;
        oscard = offset.bind(tangon)(golfie, oscard);
        entity['controlComponent'] = oscard;
        oscard = verify[report];
        oscard = option.bind(tangon)(oscard);
        golfie = oscard.intl;
        oscard = golfie.string;
        report = verify[report];
        report = option.bind(tangon)(report);
        report = report.t;
        report = report.WEdDgo;
        report = oscard.bind(golfie)(report);
        entity['headerText'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: RegisterIdentityToggle
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argFoo;
            tangon = michal.initialMode;
            zuuluu = _closure1_slot5;
            michal = zuuluu.useState;
            report = michal.bind(zuuluu)(tangon);
            zuuluu = _closure1_slot4;
            tangon = undefined;
            michal = 2;
            zuuluu = zuuluu.bind(tangon)(report, michal);
            michal = 0;
            verify = zuuluu[michal];
            var _closure2_slot0 = verify;
            michal = 1;
            report = zuuluu[michal];
            var _closure2_slot1 = report;
            oscard = _closure1_slot5;
            zuuluu = oscard.useCallback;
            michal = new Array(1);
            michal[0] = verify;
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    report = _closure2_slot0;
                    golfie = _closure1_slot0;
                    entity = _closure1_slot2;
                    oscard = 21;
                    michal = entity[oscard];
                    entity = undefined;
                    michal = golfie.bind(entity)(michal);
                    michal = michal.PhoneOrEmailSelectorForceMode;
                    michal = michal.PHONE;
                    if(!(report !== michal)) { _fun00016_ip = 83; continue _fun00015 }
 52:
                    report = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[oscard];
                    michal = report.bind(entity)(michal);
                    michal = michal.PhoneOrEmailSelectorForceMode;
                    michal = michal.PHONE;
                    _fun00016_ip = 112; continue _fun00015;
 83:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    tangon = tangon[oscard];
                    tangon = report.bind(entity)(tangon);
                    tangon = tangon.PhoneOrEmailSelectorForceMode;
                    michal = tangon.EMAIL;
 112:
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            offset = zuuluu.bind(oscard)(entity, michal);
            zuuluu = _closure1_slot16;
            michal = _closure1_slot19;
            entity = {};
            entity['inputMode'] = verify;
            entity['setInputMode'] = report;
            golfie = _closure1_slot16;
            kiloes = _closure1_slot0;
            backup = _closure1_slot2;
            report = 39;
            report = backup[report];
            report = kiloes.bind(tangon)(report);
            oscard = report.PressableOpacity;
            report = {};
            report['onPress'] = offset;
            offset = 'button';
            report['accessibilityRole'] = offset;
            foxtra = _closure1_slot16;
            offset = 40;
            offset = backup[offset];
            offset = kiloes.bind(tangon)(offset);
            yankee = offset.Text;
            offset = {'variant': 'text-sm/medium', 'color': 'text-brand'};
            romeon = 21;
            backup = backup[romeon];
            backup = kiloes.bind(tangon)(backup);
            backup = backup.PhoneOrEmailSelectorForceMode;
            backup = backup.PHONE;
            if(!(verify !== backup)) { _fun00014_ip = 280; continue _fun00013 }
 221:
            output = _closure1_slot0;
            result = _closure1_slot2;
            backup = 15;
            kiloes = result[backup];
            kiloes = output.bind(tangon)(kiloes);
            sizing = kiloes.intl;
            kiloes = sizing.string;
            backup = result[backup];
            backup = output.bind(tangon)(backup);
            backup = backup.t;
            backup = backup.lnOfAg;
            backup = kiloes.bind(sizing)(backup);
            _fun00014_ip = 337; continue _fun00013;
 280:
            result = _closure1_slot0;
            echoed = _closure1_slot2;
            kiloes = 15;
            sizing = echoed[kiloes];
            sizing = result.bind(tangon)(sizing);
            output = sizing.intl;
            sizing = output.string;
            kiloes = echoed[kiloes];
            kiloes = result.bind(tangon)(kiloes);
            kiloes = kiloes.t;
            kiloes = kiloes.qLzvmp;
            backup = sizing.bind(output)(kiloes);
 337:
            offset['children'] = backup;
            offset = foxtra.bind(tangon)(yankee, offset);
            report['children'] = offset;
            report = golfie.bind(tangon)(oscard, report);
            entity['subheader'] = report;
            yankee = _closure1_slot0;
            report = _closure1_slot2;
            offset = 15;
            oscard = report[offset];
            oscard = yankee.bind(tangon)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            report = report[romeon];
            report = yankee.bind(tangon)(report);
            report = report.PhoneOrEmailSelectorForceMode;
            report = report.PHONE;
            if(!(verify !== report)) { _fun00014_ip = 449; continue _fun00013 }
 417:
            verify = _closure1_slot0;
            report = _closure1_slot2;
            report = report[offset];
            report = verify.bind(tangon)(report);
            report = report.t;
            report = report.ZLRYGR;
            _fun00014_ip = 479; continue _fun00013;
 449:
            verify = _closure1_slot0;
            option = _closure1_slot2;
            option = option[offset];
            option = verify.bind(tangon)(option);
            option = option.t;
            report = option.j2MWLi;
 479:
            report = oscard.bind(golfie)(report);
            entity['headerText'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
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
    romeon = 1;
    tangon = oscard[romeon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.View;
    var _closure1_slot6 = option;
    tangon = tangon.ScrollView;
    var _closure1_slot7 = tangon;
    offset = 4;
    tangon = oscard[offset];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.setRegistrationErrors;
    var _closure1_slot9 = golfie;
    golfie = tangon.updateRegistrationOptions;
    var _closure1_slot10 = golfie;
    tangon = tangon.useRegistrationUIStore;
    var _closure1_slot11 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.RegisterTransitionSteps;
    var _closure1_slot12 = golfie;
    tangon = tangon.RegistrationTransitionActionTypes;
    var _closure1_slot13 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AbortCodes;
    var _closure1_slot14 = golfie;
    tangon = tangon.MarketingURLs;
    var _closure1_slot15 = tangon;
    yankee = 8;
    tangon = oscard[yankee];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot16 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot17 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'paddingTop': 24, 'flex': 1};
    tangon['container'] = verify;
    verify = {};
    verify['flex'] = romeon;
    tangon['page'] = verify;
    verify = {};
    verify['marginTop'] = yankee;
    tangon['privacyNoticeWithError'] = verify;
    verify = {'width': '100%', 'marginTop': 16};
    tangon['button'] = verify;
    verify = {};
    verify['marginTop'] = offset;
    tangon['errors'] = verify;
    verify = {'paddingRight': 16, 'marginTop': 16};
    tangon['marketingOptInCheckbox'] = verify;
    verify = {'height': 45, 'marginBottom': 24};
    tangon['segmentedControl'] = verify;
    verify = {};
    offset = 128;
    verify['paddingBottom'] = offset;
    tangon['scrollContent'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot18 = tangon;
    tangon = 42;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/auth/native/components/RegisterIdentity.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: RegisterIdentity
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            michal = _closure1_slot11;
            tangon = undefined;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.registrationVariant;
                return entity;
            };
            michal = michal.bind(tangon)(entity);
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            oscard = 41;
            entity = entity[oscard];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.ExperimentVariants;
            entity = entity.EMAIL_PHONE_TOGGLE;
            if(!(entity !== michal)) { _fun00018_ip = 165; continue _fun00017 }
 59:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[oscard];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.ExperimentVariants;
            entity = entity.EMAIL_PHONE_TOGGLE_EMAIL_FIRST;
            if(!(entity !== michal)) { _fun00018_ip = 110; continue _fun00017 }
 92:
            zuuluu = _closure1_slot16;
            michal = _closure1_slot20;
            entity = {};
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 110:
            zuuluu = _closure1_slot16;
            michal = _closure1_slot21;
            entity = {};
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 21;
            oscard = option[oscard];
            oscard = golfie.bind(tangon)(oscard);
            oscard = oscard.PhoneOrEmailSelectorForceMode;
            oscard = oscard.EMAIL;
            entity['initialMode'] = oscard;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 165:
            zuuluu = _closure1_slot16;
            michal = _closure1_slot21;
            entity = {};
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 21;
            report = golfie[report];
            report = oscard.bind(tangon)(report);
            report = report.PhoneOrEmailSelectorForceMode;
            report = report.PHONE;
            entity['initialMode'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['RegisterIdentity'] = michal;
    return entity;
})();