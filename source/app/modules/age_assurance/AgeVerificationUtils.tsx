// app/modules/age_assurance/AgeVerificationUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    verify = argBar;
    report = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = report;
    var _closure1_slot2 = offset;
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
            entity = 6;
            entity = report[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.AgeVerificationStatusUkAndAusOnly;
            entity = entity.VERIFIED_ADULT;
            entity = michal !== entity;
            return entity;
        }
    };
    var _closure1_slot11 = golfie;
    oscard = function() { // Original name: useShouldShowTiggerPawtect
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 7;
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
            entity = 6;
            entity = report[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.AgeVerificationStatusUkAndAusOnly;
            entity = entity.VERIFIED_ADULT;
            entity = michal !== entity;
            return entity;
        }
    };
    var _closure1_slot12 = oscard;
    entity = function(argFoo, argBar) { // Original name: isAgeVerificationMessageWithRetryCta
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = _closure1_slot6;
            tangon = report.getMessage;
            zuuluu = argFoo;
            entity = argBar;
            zuuluu = tangon.bind(report)(zuuluu, entity);
            entity = null;
            if(!(entity != zuuluu)) { _fun00006_ip = 200; continue _fun00005 }
 34:
            tangon = zuuluu.embeds;
            if(!(entity != tangon)) { _fun00006_ip = 200; continue _fun00005 }
 47:
            tangon = zuuluu.embeds;
            report = tangon.length;
            tangon = 0;
            if(!(tangon !== report)) { _fun00006_ip = 200; continue _fun00005 }
 67:
            report = zuuluu.embeds;
            report = report[tangon];
            report = report.fields;
            if(!(entity != report)) { _fun00006_ip = 200; continue _fun00005 }
 87:
            report = zuuluu.embeds;
            report = report[tangon];
            oscard = report.type;
            report = _closure1_slot8;
            report = report.AGE_VERIFICATION_SYSTEM_NOTIFICATION;
            if(!(oscard === report)) { _fun00006_ip = 200; continue _fun00005 }
 116:
            zuuluu = zuuluu.embeds;
            zuuluu = zuuluu[tangon];
            report = zuuluu.fields;
            tangon = report.find;
            zuuluu = function(argFoo) {
                entity = argFoo;
                michal = entity.rawName;
                entity = _closure1_slot9;
                entity = entity.CTAS;
                entity = michal === entity;
                return entity;
            };
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = entity == zuuluu;
            entity = undefined;
            if(tangon) { _fun00006_ip = 198; continue _fun00005 }
 158:
            report = zuuluu.rawValue;
            tangon = report.split;
            zuuluu = ',';
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.includes;
            michal = _closure1_slot10;
            michal = michal.RETRY;
            entity = zuuluu.bind(tangon)(michal);
 198:
            return entity;
 200:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    yankee = entity.Object;
    option = yankee.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(yankee)(zuuluu, entity, tangon);
    entity = 0;
    tangon = offset[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = offset[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    option = offset[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = offset[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = offset[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = offset[tangon];
    tangon = verify.bind(entity)(tangon);
    tangon = tangon.MessageEmbedTypes;
    var _closure1_slot8 = tangon;
    report = {};
    tangon = 'ctas';
    report['CTAS'] = tangon;
    var _closure1_slot9 = report;
    tangon = {};
    option = 'retry';
    tangon['RETRY'] = option;
    var _closure1_slot10 = tangon;
    option = 10;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/age_assurance/AgeVerificationUtils.tsx';
    option = verify.bind(offset)(option);
    zuuluu['shouldShowTiggerPawtect'] = golfie;
    zuuluu['useShouldShowTiggerPawtect'] = oscard;
    oscard = function() { // Original name: isVerifiedTeen
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot7;
            michal = zuuluu.getCurrentUser;
            zuuluu = michal.bind(zuuluu)();
            michal = null;
            report = michal == zuuluu;
            tangon = undefined;
            michal = undefined;
            if(report) { _fun00008_ip = 35; continue _fun00007 }
 29:
            michal = zuuluu.ageVerificationStatus;
 35:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 6;
            entity = report[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.AgeVerificationStatusUkAndAusOnly;
            entity = entity.VERIFIED_TEEN;
            entity = michal === entity;
            return entity;
        }
    };
    zuuluu['isVerifiedTeen'] = oscard;
    oscard = function() { // Original name: useIsVerifiedTeen
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 7;
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
            if(report) { _fun00010_ip = 72; continue _fun00009 }
 66:
            michal = zuuluu.ageVerificationStatus;
 72:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 6;
            entity = report[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.AgeVerificationStatusUkAndAusOnly;
            entity = entity.VERIFIED_TEEN;
            entity = michal === entity;
            return entity;
        }
    };
    zuuluu['useIsVerifiedTeen'] = oscard;
    zuuluu['AgeVerificationSystemNotificationEmbedKeys'] = report;
    zuuluu['AgeVerificationSystemNotificationCtaTypes'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: shouldRenderAgeVerificationRetryCta
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = _closure1_slot11;
            report = undefined;
            entity = entity.bind(report)();
            if(!entity) { _fun00012_ip = 32; continue _fun00011 }
 16:
            tangon = _closure1_slot13;
            zuuluu = argFoo;
            michal = argBar;
            entity = tangon.bind(report)(zuuluu, michal);
 32:
            return entity;
        }
    };
    zuuluu['shouldRenderAgeVerificationRetryCta'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useRenderAgeVerificationRetryCta
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = _closure1_slot12;
            report = undefined;
            entity = entity.bind(report)();
            if(!entity) { _fun00014_ip = 32; continue _fun00013 }
 16:
            tangon = _closure1_slot13;
            zuuluu = argFoo;
            michal = argBar;
            entity = tangon.bind(report)(zuuluu, michal);
 32:
            return entity;
        }
    };
    zuuluu['useRenderAgeVerificationRetryCta'] = tangon;
    tangon = function() { // Original name: isAgeVerified
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zuuluu = _closure1_slot7;
            michal = zuuluu.getCurrentUser;
            zuuluu = michal.bind(zuuluu)();
            michal = null;
            report = michal == zuuluu;
            tangon = undefined;
            michal = undefined;
            if(report) { _fun00016_ip = 35; continue _fun00015 }
 29:
            michal = zuuluu.ageVerificationStatus;
 35:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 6;
            entity = report[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.AgeVerificationStatusUkAndAusOnly;
            entity = entity.UNVERIFIED;
            entity = michal !== entity;
            return entity;
        }
    };
    zuuluu['isAgeVerified'] = tangon;
    tangon = function() { // Original name: useIsAgeVerified
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 7;
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
            if(report) { _fun00018_ip = 72; continue _fun00017 }
 66:
            michal = zuuluu.ageVerificationStatus;
 72:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 6;
            entity = report[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.AgeVerificationStatusUkAndAusOnly;
            entity = entity.UNVERIFIED;
            entity = michal !== entity;
            return entity;
        }
    };
    zuuluu['useIsAgeVerified'] = tangon;
    michal = function(argFoo) { // Original name: useInitiateAgeVerification
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot5;
        tangon = report.useState;
        entity = false;
        option = tangon.bind(report)(entity);
        tangon = _closure1_slot4;
        golfie = undefined;
        entity = 2;
        option = tangon.bind(golfie)(option, entity);
        entity = 0;
        tangon = option[entity];
        entity = 1;
        entity = option[entity];
        var _closure2_slot1 = entity;
        entity = {};
        entity['loading'] = tangon;
        tangon = report.useCallback;
        zuuluu = _closure1_slot3;
        michal = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00020_ip = 169; continue _fun00019 }
 10:
                    tangon = _closure2_slot1;
                    report = undefined;
                    michal = true;
                    michal = tangon.bind(report)(michal);
 26: // try_start_0 // try_start_1
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 8;
                    michal = golfie[michal];
                    oscard = oscard.bind(report)(michal);
                    michal = oscard.initiateVerification;
                    michal = michal.bind(oscard)();
                    SaveGenerator(address=63);
 61:
                    return michal;
 63:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscard) { _fun00020_ip = 124; continue _fun00019 }
 69:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 9;
                    tangon = golfie[tangon];
                    golfie = oscard.bind(report)(tangon);
                    oscard = golfie.showAgeVerification;
                    tangon = {};
                    option = michal.verification_webview_url;
                    tangon['webviewUrl'] = option;
                    option = _closure2_slot0;
                    tangon['onComplete'] = option;
                    tangon = oscard.bind(golfie)(tangon);
 122: // try_end0
                    _fun00020_ip = 140; continue _fun00019;
 124: // try_end1
                    oscard = _closure2_slot1;
                    tangon = false;
                    tangon = oscard.bind(report)(tangon);
                    return michal;
 138: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=1);
 140: // try_end2
                    tangon = _closure2_slot1;
                    michal = false;
                    michal = tangon.bind(report)(michal);
                    return report;
 154: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    tangon = _closure2_slot1;
                    zuuluu = false;
                    zuuluu = tangon.bind(report)(zuuluu);
                    throw michal;
 169:
                    return entity;
                }
            };
            return entity;
        };
        zuuluu = zuuluu.bind(golfie)(michal);
        michal = new Array(1);
        michal[0] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        entity['initiateAgeVerification'] = michal;
        return entity;
    };
    zuuluu['useInitiateAgeVerification'] = michal;
    return entity;
})();