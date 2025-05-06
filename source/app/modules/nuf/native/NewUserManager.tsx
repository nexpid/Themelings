// app/modules/nuf/native/NewUserManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot17 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot17 = entity;
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
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NewUserTypes;
    var _closure1_slot13 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PlatformTypes;
    var _closure1_slot14 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.HUBS_IN_ONBOARDING_COUNTRIES;
    var _closure1_slot15 = tangon;
    verify = {};
    tangon = 'Registration';
    verify['REGISTRATION'] = tangon;
    tangon = 'Value Props';
    verify['VALUE_PROPS'] = tangon;
    tangon = 'Add Avatar';
    verify['ADD_AVATAR'] = tangon;
    tangon = 'Contact Sync';
    verify['CONTACT_SYNC'] = tangon;
    tangon = 'Guild Template';
    verify['GUILD_TEMPLATE'] = tangon;
    tangon = 'Student Hub';
    verify['STUDENT_HUB'] = tangon;
    tangon = 'New User Intent';
    verify['NEW_USER_INTENT'] = tangon;
    tangon = 'Accept Invite';
    verify['ACCEPT_INVITE'] = tangon;
    tangon = 'Discoverability';
    verify['DISCOVERABILITY'] = tangon;
    tangon = 'In App Education';
    verify['IN_APP_EDUCATION'] = tangon;
    offset = {};
    tangon = verify.ADD_AVATAR;
    offset['key'] = tangon;
    tangon = function() { // Original name: shouldShowStep
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = _closure1_slot11;
            entity = michal.getCurrentUser;
            zuuluu = entity.bind(michal)();
            michal = null;
            tangon = michal == zuuluu;
            entity = undefined;
            if(tangon) { _fun00004_ip = 33; continue _fun00003 }
 27:
            entity = zuuluu.avatar;
 33:
            entity = michal == entity;
            return entity;
        }
    };
    offset['shouldShowStep'] = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.openAddAvatarModal;
    offset['transitionToStep'] = tangon;
    option = {};
    tangon = verify.CONTACT_SYNC;
    option['key'] = tangon;
    tangon = function() { // Original name: shouldShowStep
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot10;
            zuuluu = tangon.getLocalAccount;
            entity = _closure1_slot14;
            entity = entity.CONTACTS;
            tangon = zuuluu.bind(tangon)(entity);
            zuuluu = null;
            entity = zuuluu == tangon;
            if(entity) { _fun00006_ip = 46; continue _fun00005 }
 37:
            tangon = tangon.friendSync;
            entity = !tangon;
 46:
            if(!entity) { _fun00006_ip = 81; continue _fun00005 }
 49:
            tangon = _closure1_slot11;
            michal = tangon.getCurrentUser;
            tangon = michal.bind(tangon)();
            report = zuuluu == tangon;
            michal = undefined;
            if(report) { _fun00006_ip = 77; continue _fun00005 }
 71:
            michal = tangon.phone;
 77:
            entity = zuuluu != michal;
 81:
            return entity;
        }
    };
    option['shouldShowStep'] = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.openContactSyncModalOnboarding;
    option['transitionToStep'] = tangon;
    tangon = new Array(7);
    tangon[0] = offset;
    offset = {};
    yankee = verify.DISCOVERABILITY;
    offset['key'] = yankee;
    yankee = function() { // Original name: shouldShowStep
        zuuluu = _closure1_slot10;
        michal = zuuluu.getLocalAccount;
        entity = _closure1_slot14;
        entity = entity.CONTACTS;
        michal = michal.bind(zuuluu)(entity);
        entity = null;
        entity = entity == michal;
        return entity;
    };
    offset['shouldShowStep'] = yankee;
    yankee = 15;
    yankee = oscard[yankee];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.openDiscoverabilityModal;
    offset['transitionToStep'] = yankee;
    tangon[1] = offset;
    tangon[2] = option;
    option = {};
    offset = verify.STUDENT_HUB;
    option['key'] = offset;
    offset = function() { // Original name: shouldShowStep
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot12;
            michal = zuuluu.getType;
            zuuluu = michal.bind(zuuluu)();
            michal = _closure1_slot13;
            michal = michal.ORGANIC_REGISTERED;
            if(!(zuuluu === michal)) { _fun00008_ip = 78; continue _fun00007 }
 31:
            zuuluu = _closure1_slot9;
            michal = zuuluu.getCountryCode;
            tangon = michal.bind(zuuluu)();
            zuuluu = _closure1_slot15;
            michal = zuuluu.includes;
            entity = null;
            report = entity == tangon;
            entity = undefined;
            if(report) { _fun00008_ip = 71; continue _fun00007 }
 65:
            entity = tangon.alpha2;
 71:
            entity = michal.bind(zuuluu)(entity);
            return entity;
 78:
            entity = false;
            return entity;
        }
    };
    option['shouldShowStep'] = offset;
    offset = function() { // Original name: transitionToStep
        zuuluu = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 15;
        michal = oscard[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.transitionToHubEmailConnectionModal;
        michal = 16;
        michal = oscard[michal];
        michal = zuuluu.bind(entity)(michal);
        michal = michal.ModalAnimation;
        zuuluu = michal.SLIDE_IN;
        michal = true;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    option['transitionToStep'] = offset;
    tangon[3] = option;
    option = {};
    offset = verify.GUILD_TEMPLATE;
    option['key'] = offset;
    offset = function() { // Original name: shouldShowStep
        zuuluu = _closure1_slot12;
        michal = zuuluu.getType;
        michal = michal.bind(zuuluu)();
        entity = _closure1_slot13;
        entity = entity.ORGANIC_REGISTERED;
        entity = michal === entity;
        return entity;
    };
    option['shouldShowStep'] = offset;
    offset = function() { // Original name: transitionToStep
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 15;
        entity = oscard[entity];
        tangon = undefined;
        zuuluu = report.bind(tangon)(entity);
        michal = zuuluu.transitionToNUFGuildTemplatesModal;
        entity = 16;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.ModalAnimation;
        entity = entity.SLIDE_IN;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    option['transitionToStep'] = offset;
    tangon[4] = option;
    option = {};
    offset = verify.ACCEPT_INVITE;
    option['key'] = offset;
    offset = 17;
    offset = oscard[offset];
    offset = report.bind(entity)(offset);
    offset = offset.hasDeferredInvite;
    option['shouldShowStep'] = offset;
    offset = function() { // Original name: transitionToStep
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 18;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'DEFERRED_INVITE_SHOW';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    option['transitionToStep'] = offset;
    tangon[5] = option;
    option = {};
    verify = verify.IN_APP_EDUCATION;
    option['key'] = verify;
    verify = function() { // Original name: shouldShowStep
        zuuluu = _closure1_slot0;
        tangon = _closure1_slot2;
        entity = 19;
        report = tangon[entity];
        michal = undefined;
        report = zuuluu.bind(michal)(report);
        golfie = report.IOSInAppEducationExperiment;
        oscard = golfie.trackExposure;
        report = {};
        option = 'NUF';
        report['location'] = option;
        report = oscard.bind(golfie)(report);
        entity = tangon[entity];
        entity = zuuluu.bind(michal)(entity);
        tangon = entity.IOSInAppEducationExperiment;
        zuuluu = tangon.getCurrentConfig;
        michal = {};
        entity = '900c10_3';
        michal['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = entity.enabled;
        return entity;
    };
    option['shouldShowStep'] = verify;
    verify = function() { // Original name: transitionToStep
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 15;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.openInAppEducationActionSheet;
        michal = michal.bind(zuuluu)();
        return entity;
    };
    option['transitionToStep'] = verify;
    tangon[6] = option;
    var _closure1_slot16 = tangon;
    tangon = 22;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: NewUserManager
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = this;
                foxtra = 0;
                entity = copyRestArgs(foxtra);
                option = _closure1_slot5;
                tangon = _closure2_slot0;
                zuuluu = undefined;
                option = option.bind(zuuluu)(report, tangon);
                offset = new Array(0);
                foxtra = offset;
                romeon = entity;
                yankee = 0;
                entity = arraySpread(foxtra, romeon, yankee);
                entity = _closure1_slot7;
                verify = entity.bind(zuuluu)(tangon);
                tangon = _closure1_slot6;
                entity = _closure1_slot17;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00010_ip = 86; continue _fun00009 }
 73:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00010_ip = 120; continue _fun00009;
 86:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot7;
                oscard = oscard.bind(zuuluu)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 120:
                entity = tangon.bind(zuuluu)(report, entity);
                var _closure3_slot0 = entity;
                tangon = -1;
                entity['_onboardingStepIndex'] = tangon;
                tangon = null;
                entity['_lastStep'] = tangon;
                tangon = {};
                report = function(argFoo) { // Original name: ONBOARDING_STEP
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleOnboardingStep;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                tangon['ONBOARDING_STEP'] = report;
                entity['actions'] = tangon;
                michal = function() {
                    tangon = _closure1_slot3;
                    zuuluu = undefined;
                    michal = function* (argFoo) {
                        entity = function* (argFoo) { // Original name: ?anon_0_
                            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                                StartGenerator();
                                michal = argFoo;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(zuuluu) { _fun00012_ip = 553; continue _fun00011 }
 13:
                                output = michal.skip;
                                tangon = undefined;
                                if(!(output === tangon)) { _fun00012_ip = 27; continue _fun00011 }
 25:
                                output = false;
 27:
                                report = michal.skipAttempt;
                                if(!(report === tangon)) { _fun00012_ip = 39; continue _fun00011 }
 37:
                                report = false;
 39:
                                oscard = michal.back;
                                if(!(oscard === tangon)) { _fun00012_ip = 51; continue _fun00011 }
 49:
                                oscard = false;
 51:
                                SaveGenerator(address=55);
 53:
                                return tangon;
 55:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(zuuluu) { _fun00012_ip = 550; continue _fun00011 }
 64:
                                golfie = _closure3_slot0;
                                option = golfie._onboardingStepIndex;
                                golfie = _closure3_slot0;
                                if(oscard) { _fun00012_ip = 400; continue _fun00011 }
 87:
                                verify = golfie._onboardingStepIndex;
                                oscard = 1;
                                oscard = verify + oscard;
                                golfie['_onboardingStepIndex'] = oscard;
                                offset = golfie._onboardingStepIndex;
                                oscard = _closure1_slot16;
                                oscard = oscard.length;
                                if(!(!(offset >= oscard))) { _fun00012_ip = 317; continue _fun00011 }
 131:
                                offset = _closure1_slot16;
                                oscard = _closure3_slot0;
                                oscard = oscard._onboardingStepIndex;
                                offset = offset[oscard];
                                sizing = offset.key;
                                oscard = offset.shouldShowStep;
                                offset = offset.transitionToStep;
                                oscard = oscard.bind(tangon)();
                                SaveGenerator(address=174);
 172:
                                return oscard;
 174:
                                ResumeGenerator(result_out_reg=5, return_bool_out_reg=10);
                                if(yankee) { _fun00012_ip = 314; continue _fun00011 }
 183:
                                if(oscard) { _fun00012_ip = 210; continue _fun00011 }
 186:
                                foxtra = _closure3_slot0;
                                romeon = foxtra.handleOnboardingStep;
                                yankee = {};
                                yankee['skip'] = output;
                                yankee = romeon.bind(foxtra)(yankee);
                                _fun00012_ip = 311; continue _fun00011;
 210:
                                romeon = _closure1_slot0;
                                foxtra = _closure1_slot2;
                                yankee = 20;
                                yankee = foxtra[yankee];
                                kiloes = romeon.bind(tangon)(yankee);
                                backup = kiloes.trackNUFStep;
                                romeon = _closure3_slot0;
                                foxtra = romeon._lastStep;
                                yankee = {};
                                yankee['skip'] = output;
                                yankee['skip_attempt'] = report;
                                yankee = backup.bind(kiloes)(foxtra, sizing, yankee);
                                yankee = _closure1_slot16;
                                backup = yankee[option];
                                yankee = null;
                                kiloes = yankee == backup;
                                foxtra = undefined;
                                if(kiloes) { _fun00012_ip = 289; continue _fun00011 }
 284:
                                foxtra = backup.key;
 289:
                                backup = yankee != foxtra;
                                yankee = null;
                                if(!backup) { _fun00012_ip = 301; continue _fun00011 }
 298:
                                yankee = foxtra;
 301:
                                romeon['_lastStep'] = yankee;
                                offset = offset.bind(tangon)();
 311:
                                return tangon;
 314:
                                return oscard;
 317:
                                oscard = _closure1_slot0;
                                verify = _closure1_slot2;
                                offset = 20;
                                offset = verify[offset];
                                foxtra = oscard.bind(tangon)(offset);
                                romeon = foxtra.trackNUFStep;
                                offset = _closure3_slot0;
                                yankee = offset._lastStep;
                                offset = {};
                                offset['skip_attempt'] = report;
                                report = 'NUF Complete';
                                report = romeon.bind(foxtra)(yankee, report, offset);
                                report = 21;
                                report = verify[report];
                                oscard = oscard.bind(tangon)(report);
                                report = oscard.setNewUserFlowCompleted;
                                report = report.bind(oscard)();
                                report = undefined;
                                return report;
 400:
                                report = _closure1_slot16;
                                verify = report[option];
                                report = null;
                                offset = report == verify;
                                option = undefined;
                                if(offset) { _fun00012_ip = 427; continue _fun00011 }
 422:
                                option = verify.key;
 427:
                                verify = report != option;
                                report = null;
                                if(!verify) { _fun00012_ip = 439; continue _fun00011 }
 436:
                                report = option;
 439:
                                golfie['_lastStep'] = report;
                                report = _closure3_slot0;
                                golfie = report._onboardingStepIndex;
                                zuuluu = 1;
                                zuuluu = golfie - zuuluu;
                                report['_onboardingStepIndex'] = zuuluu;
                                golfie = _closure1_slot16;
                                zuuluu = report._onboardingStepIndex;
                                zuuluu = golfie[zuuluu];
                                verify = zuuluu.key;
                                zuuluu = zuuluu.transitionToStep;
                                golfie = _closure1_slot0;
                                option = _closure1_slot2;
                                oscard = 20;
                                oscard = option[oscard];
                                option = golfie.bind(tangon)(oscard);
                                golfie = option.trackNUFStep;
                                oscard = report._lastStep;
                                report = {};
                                offset = true;
                                report['back'] = offset;
                                report = golfie.bind(option)(oscard, verify, report);
                                zuuluu = zuuluu.bind(tangon)();
                                zuuluu = undefined;
                                return zuuluu;
 550:
                                return michal;
 553:
                                return entity;
                            }
                        };
                        michal = entity.next;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    michal = tangon.bind(zuuluu)(michal);
                    var _closure4_slot0 = michal;
                    entity = function() {
                        entity = undefined;
                        tangon = _closure4_slot0;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    return entity;
                };
                michal = michal.bind(zuuluu)();
                entity['handleOnboardingStep'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot8;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot4;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    kiloes = tangon;
    michal = new kiloes[michal](backup);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 23;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/nuf/native/NewUserManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();