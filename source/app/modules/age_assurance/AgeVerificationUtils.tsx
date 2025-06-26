// app/modules/age_assurance/AgeVerificationUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    option = argBar;
    report = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = report;
    var _closure1_slot2 = verify;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    tangon = verify[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = verify[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    oscard = verify[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = verify[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = verify[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = verify[tangon];
    tangon = option.bind(entity)(tangon);
    tangon = tangon.FULLSCREEN_AGE_VERIFICATION_ENTRY_POINTS;
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = verify[tangon];
    tangon = option.bind(entity)(tangon);
    tangon = tangon.MessageEmbedTypes;
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = verify[tangon];
    tangon = option.bind(entity)(tangon);
    tangon = tangon.SafetyToastType;
    var _closure1_slot10 = tangon;
    oscard = {};
    tangon = 'ctas';
    oscard['CTAS'] = tangon;
    tangon = 'content_type';
    oscard['CONTENT_TYPE'] = tangon;
    var _closure1_slot11 = oscard;
    report = {};
    tangon = 'retry';
    report['RETRY'] = tangon;
    var _closure1_slot12 = report;
    tangon = {};
    golfie = 'verified_adult';
    tangon['VERIFIED_ADULT'] = golfie;
    golfie = 'verified_teen';
    tangon['VERIFIED_TEEN'] = golfie;
    golfie = 'error';
    tangon['ERROR'] = golfie;
    golfie = 15;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/age_assurance/AgeVerificationUtils.tsx';
    golfie = option.bind(verify)(golfie);
    golfie = function() { // Original name: shouldShowTiggerPawtect
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot7;
            michal = zuuluu.getCurrentUser;
            zuuluu = michal.bind(zuuluu)();
            michal = null;
            report = michal == zuuluu;
            tangon = undefined;
            michal = undefined;
            if(report) { _fun00002_ip = 35; continue _fun00001 }
 29:
            michal = zuuluu.ageVerificationStatus;
 35:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 8;
            entity = report[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.AgeVerificationStatusUkAndAusOnly;
            entity = entity.VERIFIED_ADULT;
            entity = michal !== entity;
            return entity;
        }
    };
    zuuluu['shouldShowTiggerPawtect'] = golfie;
    golfie = function() { // Original name: useShouldShowTiggerPawtect
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 9;
            michal = tangon[michal];
            tangon = undefined;
            oscard = zuuluu.bind(tangon)(michal);
            report = oscard.useStateFromStores;
            michal = _closure1_slot7;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                michal = _closure1_slot7;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = report.bind(oscard)(zuuluu, michal);
            michal = null;
            report = michal == zuuluu;
            michal = undefined;
            if(report) { _fun00004_ip = 72; continue _fun00003 }
 66:
            michal = zuuluu.ageVerificationStatus;
 72:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 8;
            entity = report[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.AgeVerificationStatusUkAndAusOnly;
            entity = entity.VERIFIED_ADULT;
            entity = michal !== entity;
            return entity;
        }
    };
    zuuluu['useShouldShowTiggerPawtect'] = golfie;
    golfie = function() { // Original name: isVerifiedTeen
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot7;
            michal = zuuluu.getCurrentUser;
            zuuluu = michal.bind(zuuluu)();
            michal = null;
            report = michal == zuuluu;
            tangon = undefined;
            michal = undefined;
            if(report) { _fun00006_ip = 35; continue _fun00005 }
 29:
            michal = zuuluu.ageVerificationStatus;
 35:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 8;
            entity = report[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.AgeVerificationStatusUkAndAusOnly;
            entity = entity.VERIFIED_TEEN;
            entity = michal === entity;
            return entity;
        }
    };
    zuuluu['isVerifiedTeen'] = golfie;
    golfie = function() { // Original name: useIsVerifiedTeen
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 9;
            michal = tangon[michal];
            tangon = undefined;
            oscard = zuuluu.bind(tangon)(michal);
            report = oscard.useStateFromStores;
            michal = _closure1_slot7;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                michal = _closure1_slot7;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = report.bind(oscard)(zuuluu, michal);
            michal = null;
            report = michal == zuuluu;
            michal = undefined;
            if(report) { _fun00008_ip = 72; continue _fun00007 }
 66:
            michal = zuuluu.ageVerificationStatus;
 72:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 8;
            entity = report[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.AgeVerificationStatusUkAndAusOnly;
            entity = entity.VERIFIED_TEEN;
            entity = michal === entity;
            return entity;
        }
    };
    zuuluu['useIsVerifiedTeen'] = golfie;
    golfie = function() { // Original name: isVerifiedAdult
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = _closure1_slot7;
            michal = zuuluu.getCurrentUser;
            zuuluu = michal.bind(zuuluu)();
            michal = null;
            report = michal == zuuluu;
            tangon = undefined;
            michal = undefined;
            if(report) { _fun00010_ip = 35; continue _fun00009 }
 29:
            michal = zuuluu.ageVerificationStatus;
 35:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 8;
            entity = report[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.AgeVerificationStatusUkAndAusOnly;
            entity = entity.VERIFIED_ADULT;
            entity = michal === entity;
            return entity;
        }
    };
    zuuluu['isVerifiedAdult'] = golfie;
    golfie = function() { // Original name: useIsVerifiedAdult
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 9;
            michal = tangon[michal];
            tangon = undefined;
            oscard = zuuluu.bind(tangon)(michal);
            report = oscard.useStateFromStores;
            michal = _closure1_slot7;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                michal = _closure1_slot7;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = report.bind(oscard)(zuuluu, michal);
            michal = null;
            report = michal == zuuluu;
            michal = undefined;
            if(report) { _fun00012_ip = 72; continue _fun00011 }
 66:
            michal = zuuluu.ageVerificationStatus;
 72:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 8;
            entity = report[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.AgeVerificationStatusUkAndAusOnly;
            entity = entity.VERIFIED_ADULT;
            entity = michal === entity;
            return entity;
        }
    };
    zuuluu['useIsVerifiedAdult'] = golfie;
    zuuluu['AgeVerificationSystemNotificationEmbedKeys'] = oscard;
    zuuluu['AgeVerificationSystemNotificationCtaTypes'] = report;
    zuuluu['AgeVerificationSystemNotificationContentType'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: isAgeVerificationMessageWithRetryCta
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = _closure1_slot6;
            tangon = report.getMessage;
            zuuluu = argFoo;
            entity = argBar;
            zuuluu = tangon.bind(report)(zuuluu, entity);
            entity = null;
            if(!(entity != zuuluu)) { _fun00014_ip = 200; continue _fun00013 }
 34:
            tangon = zuuluu.embeds;
            if(!(entity != tangon)) { _fun00014_ip = 200; continue _fun00013 }
 47:
            tangon = zuuluu.embeds;
            report = tangon.length;
            tangon = 0;
            if(!(tangon !== report)) { _fun00014_ip = 200; continue _fun00013 }
 67:
            report = zuuluu.embeds;
            report = report[tangon];
            report = report.fields;
            if(!(entity != report)) { _fun00014_ip = 200; continue _fun00013 }
 87:
            report = zuuluu.embeds;
            report = report[tangon];
            oscard = report.type;
            report = _closure1_slot9;
            report = report.AGE_VERIFICATION_SYSTEM_NOTIFICATION;
            if(!(oscard === report)) { _fun00014_ip = 200; continue _fun00013 }
 116:
            zuuluu = zuuluu.embeds;
            zuuluu = zuuluu[tangon];
            report = zuuluu.fields;
            tangon = report.find;
            zuuluu = function(argFoo) {
                entity = argFoo;
                michal = entity.rawName;
                entity = _closure1_slot11;
                entity = entity.CTAS;
                entity = michal === entity;
                return entity;
            };
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = entity == zuuluu;
            entity = undefined;
            if(tangon) { _fun00014_ip = 198; continue _fun00013 }
 158:
            report = zuuluu.rawValue;
            tangon = report.split;
            zuuluu = ',';
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.includes;
            michal = _closure1_slot12;
            michal = michal.RETRY;
            entity = zuuluu.bind(tangon)(michal);
 198:
            return entity;
 200:
            entity = false;
            return entity;
        }
    };
    zuuluu['isAgeVerificationMessageWithRetryCta'] = tangon;
    tangon = function() { // Original name: isAgeVerified
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zuuluu = _closure1_slot7;
            entity = zuuluu.getCurrentUser;
            tangon = entity.bind(zuuluu)();
            zuuluu = null;
            entity = zuuluu == tangon;
            report = undefined;
            golfie = undefined;
            if(entity) { _fun00016_ip = 35; continue _fun00015 }
 29:
            golfie = tangon.ageVerificationStatus;
 35:
            option = _closure1_slot0;
            entity = _closure1_slot2;
            oscard = 8;
            entity = entity[oscard];
            entity = option.bind(report)(entity);
            entity = entity.AgeVerificationStatusUkAndAusOnly;
            entity = entity.UNVERIFIED;
            entity = golfie !== entity;
            if(!entity) { _fun00016_ip = 122; continue _fun00015 }
 74:
            golfie = zuuluu == tangon;
            zuuluu = undefined;
            if(golfie) { _fun00016_ip = 89; continue _fun00015 }
 83:
            zuuluu = tangon.ageVerificationStatus;
 89:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = tangon.bind(report)(michal);
            michal = michal.AgeVerificationStatusUkAndAusOnly;
            michal = michal.CLIENT_ONLY_PENDING;
            entity = zuuluu !== michal;
 122:
            return entity;
        }
    };
    zuuluu['isAgeVerified'] = tangon;
    tangon = function() { // Original name: useIsAgeVerified
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 9;
            entity = tangon[entity];
            report = undefined;
            oscard = zuuluu.bind(report)(entity);
            tangon = oscard.useStateFromStores;
            entity = _closure1_slot7;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                michal = _closure1_slot7;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            tangon = tangon.bind(oscard)(zuuluu, entity);
            zuuluu = null;
            entity = zuuluu == tangon;
            golfie = undefined;
            if(entity) { _fun00018_ip = 72; continue _fun00017 }
 66:
            golfie = tangon.ageVerificationStatus;
 72:
            option = _closure1_slot0;
            entity = _closure1_slot2;
            oscard = 8;
            entity = entity[oscard];
            entity = option.bind(report)(entity);
            entity = entity.AgeVerificationStatusUkAndAusOnly;
            entity = entity.UNVERIFIED;
            entity = golfie !== entity;
            if(!entity) { _fun00018_ip = 159; continue _fun00017 }
 111:
            golfie = zuuluu == tangon;
            zuuluu = undefined;
            if(golfie) { _fun00018_ip = 126; continue _fun00017 }
 120:
            zuuluu = tangon.ageVerificationStatus;
 126:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = tangon.bind(report)(michal);
            michal = michal.AgeVerificationStatusUkAndAusOnly;
            michal = michal.CLIENT_ONLY_PENDING;
            entity = zuuluu !== michal;
 159:
            return entity;
        }
    };
    zuuluu['useIsAgeVerified'] = tangon;
    tangon = function(argFoo) { // Original name: useInitiateAgeVerification
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            golfie = argFoo;
            var _closure2_slot0 = golfie;
            option = _closure1_slot5;
            zuuluu = option.useState;
            michal = false;
            oscard = zuuluu.bind(option)(michal);
            tangon = _closure1_slot4;
            michal = undefined;
            zuuluu = 2;
            oscard = tangon.bind(michal)(oscard, zuuluu);
            zuuluu = 0;
            zuuluu = oscard[zuuluu];
            tangon = 1;
            tangon = oscard[tangon];
            var _closure2_slot1 = tangon;
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 9;
            tangon = verify[tangon];
            offset = oscard.bind(michal)(tangon);
            verify = offset.useStateFromStores;
            tangon = _closure1_slot7;
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = function() {
                michal = _closure1_slot7;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            verify = verify.bind(offset)(oscard, tangon);
            oscard = option.useRef;
            tangon = null;
            offset = tangon == verify;
            tangon = undefined;
            if(offset) { _fun00020_ip = 130; continue _fun00019 }
 124:
            tangon = verify.ageVerificationStatus;
 130:
            tangon = oscard.bind(option)(tangon);
            tangon = tangon.current;
            var _closure2_slot2 = tangon;
            report = _closure1_slot5;
            option = report.useCallback;
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 10;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'CLOSE_AGE_VERIFICATION_MODAL';
                michal['type'] = report;
                report = _closure2_slot2;
                michal['status'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            oscard = option.bind(report)(tangon, oscard);
            var _closure2_slot3 = oscard;
            tangon = report.useCallback;
            entity = function() {
                tangon = _closure1_slot3;
                zuuluu = undefined;
                michal = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00022_ip = 285; continue _fun00021 }
 10:
                            option = argFoo;
                            tangon = _closure2_slot1;
                            report = undefined;
                            michal = true;
                            michal = tangon.bind(report)(michal);
 29: // try_start_0 // try_start_1
                            oscard = _closure1_slot1;
                            golfie = _closure1_slot2;
                            michal = 10;
                            michal = golfie[michal];
                            verify = oscard.bind(report)(michal);
                            oscard = verify.dispatch;
                            michal = {};
                            offset = 'INITIATE_AGE_VERIFICATION';
                            michal['type'] = offset;
                            michal = oscard.bind(verify)(michal);
                            oscard = _closure1_slot0;
                            michal = 11;
                            michal = golfie[michal];
                            oscard = oscard.bind(report)(michal);
                            michal = oscard.initiateVerification;
                            michal = michal.bind(oscard)();
                            SaveGenerator(address=104);
 102:
                            return michal;
 104:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(oscard) { _fun00022_ip = 188; continue _fun00021 }
 110:
                            oscard = _closure1_slot1;
                            golfie = _closure1_slot2;
                            tangon = 12;
                            tangon = golfie[tangon];
                            golfie = oscard.bind(report)(tangon);
                            oscard = golfie.showAgeVerification;
                            tangon = {};
                            verify = michal.verification_webview_url;
                            tangon['webviewUrl'] = verify;
                            verify = _closure2_slot0;
                            tangon['onComplete'] = verify;
                            verify = _closure2_slot3;
                            tangon['onClose'] = verify;
                            verify = _closure2_slot3;
                            tangon['onCancel'] = verify;
                            tangon['entryPoint'] = option;
                            tangon = oscard.bind(golfie)(tangon);
 186: // try_end0
                            _fun00022_ip = 256; continue _fun00021;
 188: // try_end1
                            oscard = _closure2_slot1;
                            tangon = false;
                            tangon = oscard.bind(report)(tangon);
                            return michal;
 202: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=1);
                            oscard = _closure1_slot1;
                            golfie = _closure1_slot2;
                            tangon = 13;
                            tangon = golfie[tangon];
                            oscard = oscard.bind(report)(tangon);
                            tangon = oscard.showFailedToast;
                            michal = _closure1_slot10;
                            michal = michal.TIGGER_PAWTECT_ERROR;
                            michal = tangon.bind(oscard)(michal);
                            michal = _closure2_slot3;
                            michal = michal.bind(report)();
 256: // try_end2
                            tangon = _closure2_slot1;
                            michal = false;
                            michal = tangon.bind(report)(michal);
                            return report;
 270: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=1);
                            tangon = _closure2_slot1;
                            zuuluu = false;
                            zuuluu = tangon.bind(report)(zuuluu);
                            throw michal;
 285:
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
            entity = new Array(2);
            entity[0] = golfie;
            entity[1] = oscard;
            michal = tangon.bind(report)(michal, entity);
            entity = {};
            entity['loading'] = zuuluu;
            entity['initiateAgeVerification'] = michal;
            return entity;
        }
    };
    zuuluu['useInitiateAgeVerification'] = tangon;
    tangon = function(argFoo) { // Original name: useWatchAgeVerificationStatusChange
        option = argFoo;
        var _closure2_slot0 = option;
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 9;
        tangon = oscard[entity];
        entity = undefined;
        verify = report.bind(entity)(tangon);
        golfie = verify.useStateFromStores;
        tangon = _closure1_slot7;
        report = new Array(1);
        report[0] = tangon;
        tangon = function() {
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                michal = _closure1_slot7;
                entity = michal.getCurrentUser;
                michal = entity.bind(michal)();
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00024_ip = 33; continue _fun00023 }
 27:
                entity = michal.ageVerificationStatus;
 33:
                return entity;
            }
        };
        golfie = golfie.bind(verify)(report, tangon);
        var _closure2_slot1 = golfie;
        report = _closure1_slot1;
        tangon = 14;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        oscard = tangon.bind(entity)(golfie);
        var _closure2_slot2 = oscard;
        report = _closure1_slot5;
        tangon = report.useEffect;
        zuuluu = new Array(3);
        zuuluu[0] = option;
        zuuluu[1] = golfie;
        zuuluu[2] = oscard;
        michal = function() {
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                michal = _closure2_slot2;
                tangon = null;
                michal = tangon != michal;
                if(!michal) { _fun00026_ip = 24; continue _fun00025 }
 16:
                zuuluu = _closure2_slot1;
                michal = tangon != zuuluu;
 24:
                if(!michal) { _fun00026_ip = 39; continue _fun00025 }
 27:
                tangon = _closure2_slot2;
                zuuluu = _closure2_slot1;
                michal = tangon !== zuuluu;
 39:
                if(!michal) { _fun00026_ip = 52; continue _fun00025 }
 42:
                michal = _closure2_slot0;
                entity = undefined;
                entity = michal.bind(entity)();
 52:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['useWatchAgeVerificationStatusChange'] = tangon;
    michal = function(argFoo) { // Original name: isFullscreenAgeVerificationEntryPoint
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            tangon = argFoo;
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00028_ip = 29; continue _fun00027 }
 12:
            zuuluu = _closure1_slot8;
            michal = zuuluu.has;
            entity = michal.bind(zuuluu)(tangon);
 29:
            return entity;
        }
    };
    zuuluu['isFullscreenAgeVerificationEntryPoint'] = michal;
    return entity;
})();