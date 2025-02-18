// app/modules/safety_hub/SafetyHubActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = function() { // Original name: _getSafetyHubData
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 264; continue _fun00001 }
 12:
                    oscard = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 5;
                    report = report[zuuluu];
                    zuuluu = undefined;
                    golfie = oscard.bind(zuuluu)(report);
                    oscard = golfie.dispatch;
                    report = {};
                    option = 'SAFETY_HUB_FETCH_START';
                    report['type'] = option;
                    report = oscard.bind(golfie)(report);
                    oscard = _closure1_slot4;
                    report = oscard.getSuspendedUserToken;
                    verify = report.bind(oscard)();
                    report = null;
                    if(!(report == verify)) { _fun00002_ip = 91; continue _fun00001 }
 79:
                    oscard = _closure1_slot8;
                    option = oscard.SAFETY_HUB;
                    _fun00002_ip = 101; continue _fun00001;
 91:
                    oscard = _closure1_slot8;
                    option = oscard.SAFETY_HUB_SUSPENDED;
 101:
                    if(!(report == verify)) { _fun00002_ip = 154; continue _fun00001 }
 105:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    report = 6;
                    report = golfie[report];
                    report = oscard.bind(zuuluu)(report);
                    golfie = report.HTTP;
                    oscard = golfie.get;
                    report = {};
                    report['url'] = option;
                    offset = false;
                    report['rejectWithError'] = offset;
                    oscard = oscard.bind(golfie)(report);
                    _fun00002_ip = 213; continue _fun00001;
 154:
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 6;
                    tangon = golfie[tangon];
                    tangon = report.bind(zuuluu)(tangon);
                    golfie = tangon.HTTP;
                    report = golfie.post;
                    tangon = {};
                    tangon['url'] = option;
                    option = {};
                    option['token'] = verify;
                    tangon['body'] = option;
                    option = false;
                    tangon['rejectWithError'] = option;
                    oscard = report.bind(golfie)(tangon);
 213:
                    report = oscard.then;
                    tangon = function(argFoo) {
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            entity = argFoo;
                            entity = entity.body;
                            zuuluu = entity.classifications;
                            foxtra = entity.guild_classifications;
                            offset = entity.account_standing;
                            verify = entity.is_dsa_eligible;
                            option = entity.username;
                            golfie = entity.is_appeal_eligible;
                            report = entity.appeal_eligibility;
                            michal = zuuluu.map;
                            entity = function(argFoo) {
                                entity = argFoo;
                                zuuluu = _closure1_slot11;
                                michal = undefined;
                                michal = zuuluu.bind(michal)(entity);
                                return entity;
                            };
                            romeon = michal.bind(zuuluu)(entity);
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 5;
                            michal = michal[entity];
                            entity = undefined;
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.dispatch;
                            michal = {};
                            oscard = 'SAFETY_HUB_FETCH_SUCCESS';
                            michal['type'] = oscard;
                            yankee = romeon.concat;
                            oscard = null;
                            if(!(oscard == foxtra)) { _fun00004_ip = 129; continue _fun00003 }
 125:
                            foxtra = new Array(0);
 129:
                            yankee = yankee.bind(romeon)(foxtra);
                            michal['classifications'] = yankee;
                            michal['accountStanding'] = offset;
                            michal['isDsaEligible'] = verify;
                            michal['username'] = option;
                            michal['isAppealEligible'] = golfie;
                            if(!(oscard == report)) { _fun00004_ip = 166; continue _fun00003 }
 162:
                            report = new Array(0);
 166:
                            michal['appealEligibility'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        }
                    };
                    report = report.bind(oscard)(tangon);
                    tangon = report.catch;
                    michal = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            golfie = argFoo;
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 5;
                            michal = michal[entity];
                            entity = undefined;
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.dispatch;
                            michal = {};
                            report = 'SAFETY_HUB_FETCH_FAILURE';
                            michal['type'] = report;
                            report = null;
                            option = report == golfie;
                            oscard = undefined;
                            if(option) { _fun00006_ip = 75; continue _fun00005 }
 56:
                            golfie = golfie.body;
                            option = report == golfie;
                            oscard = undefined;
                            if(option) { _fun00006_ip = 75; continue _fun00005 }
 70:
                            oscard = golfie.message;
 75:
                            golfie = report != oscard;
                            report = 'Unknown error';
                            if(!golfie) { _fun00006_ip = 91; continue _fun00005 }
 88:
                            report = oscard;
 91:
                            michal['error'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        }
                    };
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=252);
 250:
                    return michal;
 252:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 261; continue _fun00001 }
 258:
                    return zuuluu;
 261:
                    return michal;
 264:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot9 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _getSafetyHubDataForClassification
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    option = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 276; continue _fun00007 }
 15:
                    var _closure4_slot0 = option;
                    oscard = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 5;
                    report = report[zuuluu];
                    zuuluu = undefined;
                    golfie = oscard.bind(zuuluu)(report);
                    oscard = golfie.dispatch;
                    report = {};
                    verify = 'SAFETY_HUB_FETCH_CLASSIFICATION_START';
                    report['type'] = verify;
                    report['classificationId'] = option;
                    report = oscard.bind(golfie)(report);
                    oscard = _closure1_slot4;
                    report = oscard.getSuspendedUserToken;
                    verify = report.bind(oscard)();
                    report = null;
                    if(!(report == verify)) { _fun00008_ip = 103; continue _fun00007 }
 91:
                    oscard = _closure1_slot8;
                    option = oscard.SAFETY_HUB;
                    _fun00008_ip = 113; continue _fun00007;
 103:
                    oscard = _closure1_slot8;
                    option = oscard.SAFETY_HUB_SUSPENDED;
 113:
                    if(!(report == verify)) { _fun00008_ip = 166; continue _fun00007 }
 117:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    report = 6;
                    report = golfie[report];
                    report = oscard.bind(zuuluu)(report);
                    golfie = report.HTTP;
                    oscard = golfie.get;
                    report = {};
                    report['url'] = option;
                    offset = false;
                    report['rejectWithError'] = offset;
                    oscard = oscard.bind(golfie)(report);
                    _fun00008_ip = 225; continue _fun00007;
 166:
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 6;
                    tangon = golfie[tangon];
                    tangon = report.bind(zuuluu)(tangon);
                    golfie = tangon.HTTP;
                    report = golfie.post;
                    tangon = {};
                    tangon['url'] = option;
                    option = {};
                    option['token'] = verify;
                    tangon['body'] = option;
                    option = false;
                    tangon['rejectWithError'] = option;
                    oscard = report.bind(golfie)(tangon);
 225:
                    report = oscard.then;
                    tangon = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            entity = argFoo;
                            entity = entity.body;
                            zuuluu = entity.classifications;
                            golfie = entity.account_standing;
                            oscard = entity.is_dsa_eligible;
                            report = entity.username;
                            tangon = entity.is_appeal_eligible;
                            michal = zuuluu.find;
                            entity = function(argFoo) {
                                entity = argFoo;
                                michal = entity.id;
                                entity = _closure4_slot0;
                                entity = michal === entity;
                                return entity;
                            };
                            option = michal.bind(zuuluu)(entity);
                            entity = null;
                            if(!(entity == option)) { _fun00010_ip = 125; continue _fun00009 }
 62:
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 5;
                            michal = michal[entity];
                            entity = undefined;
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.dispatch;
                            entity = {'type': 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE', 'error': 'Classification not found.'};
                            verify = _closure4_slot0;
                            entity['classificationId'] = verify;
                            entity = michal.bind(zuuluu)(entity);
                            _fun00010_ip = 205; continue _fun00009;
 125:
                            michal = _closure1_slot11;
                            zuuluu = undefined;
                            michal = michal.bind(zuuluu)(option);
                            michal = _closure1_slot1;
                            verify = _closure1_slot2;
                            entity = 5;
                            entity = verify[entity];
                            zuuluu = michal.bind(zuuluu)(entity);
                            michal = zuuluu.dispatch;
                            entity = {};
                            verify = 'SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS';
                            entity['type'] = verify;
                            entity['classification'] = option;
                            entity['accountStanding'] = golfie;
                            entity['isDsaEligible'] = oscard;
                            entity['username'] = report;
                            entity['isAppealEligible'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
 205:
                            entity = undefined;
                            return entity;
                        }
                    };
                    report = report.bind(oscard)(tangon);
                    tangon = report.catch;
                    michal = function(argFoo) {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            golfie = argFoo;
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 5;
                            michal = michal[entity];
                            entity = undefined;
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.dispatch;
                            michal = {};
                            report = 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE';
                            michal['type'] = report;
                            report = null;
                            option = report == golfie;
                            oscard = undefined;
                            if(option) { _fun00012_ip = 75; continue _fun00011 }
 56:
                            golfie = golfie.body;
                            option = report == golfie;
                            oscard = undefined;
                            if(option) { _fun00012_ip = 75; continue _fun00011 }
 70:
                            oscard = golfie.message;
 75:
                            golfie = report != oscard;
                            report = 'Unknown error';
                            if(!golfie) { _fun00012_ip = 91; continue _fun00011 }
 88:
                            report = oscard;
 91:
                            michal['error'] = report;
                            report = _closure4_slot0;
                            michal['classificationId'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        }
                    };
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=264);
 262:
                    return michal;
 264:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 273; continue _fun00007 }
 270:
                    return zuuluu;
 273:
                    return michal;
 276:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot10 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: _setClassificationFlaggedContent
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.flagged_content;
            entity = null;
            if(!(entity != zuuluu)) { _fun00014_ip = 132; continue _fun00013 }
 15:
            entity = michal.flagged_content;
            entity = entity.length;
            zuuluu = 0;
            if(!(entity > zuuluu)) { _fun00014_ip = 132; continue _fun00013 }
 32:
            entity = michal.flagged_content;
            zuuluu = entity[zuuluu];
            report = zuuluu.attachments;
            tangon = report.filter;
            entity = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = argFoo;
                    tangon = entity.filename;
                    zuuluu = _closure1_slot0;
                    entity = _closure1_slot2;
                    oscard = 7;
                    entity = entity[oscard];
                    report = undefined;
                    zuuluu = zuuluu.bind(report)(entity);
                    entity = zuuluu.isImageFile;
                    entity = entity.bind(zuuluu)(tangon);
                    if(entity) { _fun00016_ip = 76; continue _fun00015 }
 48:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[oscard];
                    zuuluu = zuuluu.bind(report)(michal);
                    michal = zuuluu.isVideoFile;
                    entity = michal.bind(zuuluu)(tangon);
 76:
                    return entity;
                }
            };
            entity = tangon.bind(report)(entity);
            zuuluu['attachments'] = entity;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 8;
            tangon = tangon[entity];
            entity = undefined;
            tangon = report.bind(entity)(tangon);
            entity = tangon.isFlaggedContentEmpty;
            entity = entity.bind(tangon)(zuuluu);
            if(entity) { _fun00014_ip = 122; continue _fun00013 }
 112:
            entity = new Array(1);
            entity[0] = zuuluu;
            _fun00014_ip = 126; continue _fun00013;
 122:
            entity = new Array(0);
 126:
            michal['flagged_content'] = entity;
 132:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _requestReview
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    StartGenerator();
                    golfie = argFoo;
                    yankee = argBar;
                    offset = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00018_ip = 318; continue _fun00017 }
 21:
                    var _closure4_slot0 = golfie;
                    report = _closure1_slot4;
                    tangon = report.getSuspendedUserToken;
                    verify = tangon.bind(report)();
                    tangon = null;
                    if(!(tangon == verify)) { _fun00018_ip = 65; continue _fun00017 }
 48:
                    oscard = _closure1_slot8;
                    report = oscard.SAFETY_HUB_REQUEST_REVIEW;
                    option = report.bind(oscard)(golfie);
                    _fun00018_ip = 80; continue _fun00017;
 65:
                    oscard = _closure1_slot8;
                    report = oscard.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW;
                    option = report.bind(oscard)(golfie);
 80:
                    if(!(tangon == verify)) { _fun00018_ip = 152; continue _fun00017 }
 84:
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    tangon = 6;
                    report = report[tangon];
                    tangon = undefined;
                    tangon = oscard.bind(tangon)(report);
                    oscard = tangon.HTTP;
                    report = oscard.put;
                    tangon = {};
                    tangon['url'] = option;
                    golfie = {};
                    golfie['signal'] = yankee;
                    golfie['user_input'] = offset;
                    tangon['body'] = golfie;
                    golfie = false;
                    tangon['rejectWithError'] = golfie;
                    oscard = report.bind(oscard)(tangon);
                    _fun00018_ip = 223; continue _fun00017;
 152:
                    golfie = _closure1_slot0;
                    report = _closure1_slot2;
                    tangon = 6;
                    report = report[tangon];
                    tangon = undefined;
                    tangon = golfie.bind(tangon)(report);
                    golfie = tangon.HTTP;
                    report = golfie.put;
                    tangon = {};
                    tangon['url'] = option;
                    option = {};
                    option['signal'] = yankee;
                    option['user_input'] = offset;
                    option['token'] = verify;
                    tangon['body'] = option;
                    option = false;
                    tangon['rejectWithError'] = option;
                    oscard = report.bind(golfie)(tangon);
 223:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    zuuluu = 5;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    golfie = report.bind(zuuluu)(tangon);
                    report = golfie.dispatch;
                    tangon = {};
                    option = 'SAFETY_HUB_REQUEST_REVIEW_START';
                    tangon['type'] = option;
                    tangon = report.bind(golfie)(tangon);
                    report = oscard.then;
                    tangon = function() {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 5;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.dispatch;
                        michal = {};
                        report = 'SAFETY_HUB_REQUEST_REVIEW_SUCCESS';
                        michal['type'] = report;
                        report = _closure4_slot0;
                        michal['classificationId'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    report = report.bind(oscard)(tangon);
                    tangon = report.catch;
                    michal = function(argFoo) {
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            entity = argFoo;
                            zuuluu = _closure1_slot1;
                            tangon = _closure1_slot2;
                            michal = 5;
                            michal = tangon[michal];
                            verify = undefined;
                            tangon = zuuluu.bind(verify)(michal);
                            zuuluu = tangon.dispatch;
                            michal = {};
                            report = 'SAFETY_HUB_REQUEST_REVIEW_FAILURE';
                            michal['type'] = report;
                            report = null;
                            golfie = report == entity;
                            oscard = undefined;
                            if(golfie) { _fun00020_ip = 75; continue _fun00019 }
 56:
                            golfie = entity.body;
                            option = report == golfie;
                            oscard = undefined;
                            if(option) { _fun00020_ip = 75; continue _fun00019 }
 70:
                            oscard = golfie.message;
 75:
                            golfie = report != oscard;
                            report = 'Unknown error';
                            if(!golfie) { _fun00020_ip = 91; continue _fun00019 }
 88:
                            report = oscard;
 91:
                            michal['error'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            throw entity;
                        }
                    };
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=306);
 304:
                    return michal;
 306:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00018_ip = 315; continue _fun00017 }
 312:
                    return zuuluu;
 315:
                    return michal;
 318:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot12 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _requestSuspendedUserAgeVerification
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00022_ip = 189; continue _fun00021 }
 12:
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 5;
                    report = oscard[zuuluu];
                    zuuluu = undefined;
                    option = golfie.bind(zuuluu)(report);
                    golfie = option.dispatch;
                    report = {};
                    verify = 'SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START';
                    report['type'] = verify;
                    report = golfie.bind(option)(report);
                    golfie = _closure1_slot4;
                    report = golfie.getSuspendedUserToken;
                    option = report.bind(golfie)();
                    report = _closure1_slot8;
                    golfie = report.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION;
                    report = _closure1_slot0;
                    tangon = 6;
                    tangon = oscard[tangon];
                    tangon = report.bind(zuuluu)(tangon);
                    oscard = tangon.HTTP;
                    report = oscard.post;
                    tangon = {};
                    tangon['url'] = golfie;
                    golfie = {};
                    golfie['token'] = option;
                    tangon['body'] = golfie;
                    golfie = false;
                    tangon['rejectWithError'] = golfie;
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.then;
                    tangon = function(argFoo) {
                        entity = argFoo;
                        entity = entity.body;
                        oscard = entity.verification_request_id;
                        report = entity.verification_webview_url;
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 5;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.dispatch;
                        michal = {};
                        golfie = 'SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS';
                        michal['type'] = golfie;
                        michal['verificationRequestId'] = oscard;
                        michal['verificationWebviewUrl'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    report = report.bind(oscard)(tangon);
                    tangon = report.catch;
                    michal = function(argFoo) {
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            golfie = argFoo;
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 5;
                            michal = michal[entity];
                            entity = undefined;
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.dispatch;
                            michal = {};
                            report = 'SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE';
                            michal['type'] = report;
                            report = null;
                            option = report == golfie;
                            oscard = undefined;
                            if(option) { _fun00024_ip = 75; continue _fun00023 }
 56:
                            golfie = golfie.body;
                            option = report == golfie;
                            oscard = undefined;
                            if(option) { _fun00024_ip = 75; continue _fun00023 }
 70:
                            oscard = golfie.message;
 75:
                            golfie = report != oscard;
                            report = 'Unknown error';
                            if(!golfie) { _fun00024_ip = 91; continue _fun00023 }
 88:
                            report = oscard;
 91:
                            michal['error'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        }
                    };
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=177);
 175:
                    return michal;
 177:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00022_ip = 186; continue _fun00021 }
 183:
                    return zuuluu;
 186:
                    return michal;
 189:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot13 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot13 = entity;
    michal = function() { // Original name: checkSuspendedUserAgeVerification
        entity = undefined;
        tangon = _closure1_slot15;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot14 = michal;
    entity = function() { // Original name: _checkSuspendedUserAgeVerification
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00026_ip = 213; continue _fun00025 }
 12:
                    zuuluu = undefined;
                    var _closure4_slot0 = zuuluu;
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    report = 5;
                    report = oscard[report];
                    option = golfie.bind(zuuluu)(report);
                    golfie = option.dispatch;
                    report = {};
                    verify = 'SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START';
                    report['type'] = verify;
                    report = golfie.bind(option)(report);
                    golfie = _closure1_slot4;
                    report = golfie.getSuspendedUserToken;
                    option = report.bind(golfie)();
                    golfie = _closure1_slot5;
                    report = golfie.getAgeCheckAttempts;
                    report = report.bind(golfie)();
                    _closure4_slot0 = report;
                    report = _closure1_slot8;
                    golfie = report.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION;
                    report = _closure1_slot0;
                    tangon = 6;
                    tangon = oscard[tangon];
                    tangon = report.bind(zuuluu)(tangon);
                    oscard = tangon.HTTP;
                    report = oscard.post;
                    tangon = {};
                    tangon['url'] = golfie;
                    golfie = {};
                    golfie['token'] = option;
                    tangon['body'] = golfie;
                    golfie = false;
                    tangon['rejectWithError'] = golfie;
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.then;
                    tangon = function(argFoo) {
                        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                            entity = argFoo;
                            entity = entity.body;
                            report = entity.success;
                            entity = !report;
                            if(!entity) { _fun00028_ip = 38; continue _fun00027 }
 20:
                            zuuluu = _closure4_slot0;
                            michal = _closure1_slot7;
                            entity = zuuluu < michal;
 38:
                            if(!entity) { _fun00028_ip = 73; continue _fun00027 }
 41:
                            entity = global;
                            tangon = entity.setTimeout;
                            zuuluu = _closure1_slot6;
                            michal = undefined;
                            entity = function() {
                                michal = _closure1_slot14;
                                entity = undefined;
                                entity = michal.bind(entity)();
                                return entity;
                            };
                            entity = tangon.bind(michal)(entity, zuuluu);
 73:
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 5;
                            michal = michal[entity];
                            entity = undefined;
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.dispatch;
                            michal = {};
                            oscard = 'SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS';
                            michal['type'] = oscard;
                            michal['success'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        }
                    };
                    report = report.bind(oscard)(tangon);
                    tangon = report.catch;
                    michal = function(argFoo) {
                        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                            golfie = argFoo;
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 5;
                            michal = michal[entity];
                            entity = undefined;
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.dispatch;
                            michal = {};
                            report = 'SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE';
                            michal['type'] = report;
                            report = null;
                            option = report == golfie;
                            oscard = undefined;
                            if(option) { _fun00030_ip = 75; continue _fun00029 }
 56:
                            golfie = golfie.body;
                            option = report == golfie;
                            oscard = undefined;
                            if(option) { _fun00030_ip = 75; continue _fun00029 }
 70:
                            oscard = golfie.message;
 75:
                            golfie = report != oscard;
                            report = 'Unknown error';
                            if(!golfie) { _fun00030_ip = 91; continue _fun00029 }
 88:
                            report = oscard;
 91:
                            michal['error'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        }
                    };
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=201);
 199:
                    return michal;
 201:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00026_ip = 210; continue _fun00025 }
 207:
                    return zuuluu;
 210:
                    return michal;
 213:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot15 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.AGE_CHECK_POLL_INTERVAL_MS;
    var _closure1_slot6 = option;
    report = report.AGE_CHECK_MAX_POLL_ATTEMPTS;
    var _closure1_slot7 = report;
    report = 4;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.Endpoints;
    var _closure1_slot8 = report;
    report = 9;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/safety_hub/SafetyHubActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: getSafetyHubData
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['getSafetyHubData'] = report;
    report = function() { // Original name: getSafetyHubDataForClassification
        entity = undefined;
        tangon = _closure1_slot10;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['getSafetyHubDataForClassification'] = report;
    report = function() { // Original name: requestReview
        entity = undefined;
        tangon = _closure1_slot12;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['requestReview'] = report;
    tangon = function() { // Original name: requestSuspendedUserAgeVerification
        entity = undefined;
        tangon = _closure1_slot13;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['requestSuspendedUserAgeVerification'] = tangon;
    zuuluu['checkSuspendedUserAgeVerification'] = michal;
    return entity;
})();