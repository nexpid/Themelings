// app/modules/safety_hub/SafetyHubActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function() { // Original name: _getSafetyHubData
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00002_ip = 264; continue _fun00001 }
 12:
                    oscar = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 5;
                    report = report[zulu];
                    zulu = undefined;
                    golf = oscar.bind(zulu)(report);
                    oscar = golf.dispatch;
                    report = {};
                    options = 'SAFETY_HUB_FETCH_START';
                    report['type'] = options;
                    report = oscar.bind(golf)(report);
                    oscar = _closure1_slot4;
                    report = oscar.getSuspendedUserToken;
                    verify = report.bind(oscar)();
                    report = null;
                    if(!(report == verify)) { _fun00002_ip = 91; continue _fun00001 }
 79:
                    oscar = _closure1_slot8;
                    options = oscar.SAFETY_HUB;
                    _fun00002_ip = 101; continue _fun00001;
 91:
                    oscar = _closure1_slot8;
                    options = oscar.SAFETY_HUB_SUSPENDED;
 101:
                    if(!(report == verify)) { _fun00002_ip = 154; continue _fun00001 }
 105:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    report = 6;
                    report = golf[report];
                    report = oscar.bind(zulu)(report);
                    golf = report.HTTP;
                    oscar = golf.get;
                    report = {};
                    report['url'] = options;
                    offset = false;
                    report['rejectWithError'] = offset;
                    oscar = oscar.bind(golf)(report);
                    _fun00002_ip = 213; continue _fun00001;
 154:
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    tango = 6;
                    tango = golf[tango];
                    tango = report.bind(zulu)(tango);
                    golf = tango.HTTP;
                    report = golf.post;
                    tango = {};
                    tango['url'] = options;
                    options = {};
                    options['token'] = verify;
                    tango['body'] = options;
                    options = false;
                    tango['rejectWithError'] = options;
                    oscar = report.bind(golf)(tango);
 213:
                    report = oscar.then;
                    tango = function(argFoo) {
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            entity = argFoo;
                            entity = entity.body;
                            zulu = entity.classifications;
                            foxtrot = entity.guild_classifications;
                            offset = entity.account_standing;
                            verify = entity.is_dsa_eligible;
                            options = entity.username;
                            golf = entity.is_appeal_eligible;
                            report = entity.appeal_eligibility;
                            mike = zulu.map;
                            entity = function(argFoo) {
                                entity = argFoo;
                                zulu = _closure1_slot11;
                                mike = undefined;
                                mike = zulu.bind(mike)(entity);
                                return entity;
                            };
                            romeo = mike.bind(zulu)(entity);
                            zulu = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 5;
                            mike = mike[entity];
                            entity = undefined;
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.dispatch;
                            mike = {};
                            oscar = 'SAFETY_HUB_FETCH_SUCCESS';
                            mike['type'] = oscar;
                            yankee = romeo.concat;
                            oscar = null;
                            if(!(oscar == foxtrot)) { _fun00004_ip = 129; continue _fun00003 }
 125:
                            foxtrot = new Array(0);
 129:
                            yankee = yankee.bind(romeo)(foxtrot);
                            mike['classifications'] = yankee;
                            mike['accountStanding'] = offset;
                            mike['isDsaEligible'] = verify;
                            mike['username'] = options;
                            mike['isAppealEligible'] = golf;
                            if(!(oscar == report)) { _fun00004_ip = 166; continue _fun00003 }
 162:
                            report = new Array(0);
 166:
                            mike['appealEligibility'] = report;
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        }
                    };
                    report = report.bind(oscar)(tango);
                    tango = report.catch;
                    mike = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            golf = argFoo;
                            zulu = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 5;
                            mike = mike[entity];
                            entity = undefined;
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.dispatch;
                            mike = {};
                            report = 'SAFETY_HUB_FETCH_FAILURE';
                            mike['type'] = report;
                            report = null;
                            options = report == golf;
                            oscar = undefined;
                            if(options) { _fun00006_ip = 75; continue _fun00005 }
 56:
                            golf = golf.body;
                            options = report == golf;
                            oscar = undefined;
                            if(options) { _fun00006_ip = 75; continue _fun00005 }
 70:
                            oscar = golf.message;
 75:
                            golf = report != oscar;
                            report = 'Unknown error';
                            if(!golf) { _fun00006_ip = 91; continue _fun00005 }
 88:
                            report = oscar;
 91:
                            mike['error'] = report;
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        }
                    };
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=252);
 250:
                    return mike;
 252:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00002_ip = 261; continue _fun00001 }
 258:
                    return zulu;
 261:
                    return mike;
 264:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot9 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _getSafetyHubDataForClassification
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    options = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00008_ip = 276; continue _fun00007 }
 15:
                    var _closure4_slot0 = options;
                    oscar = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 5;
                    report = report[zulu];
                    zulu = undefined;
                    golf = oscar.bind(zulu)(report);
                    oscar = golf.dispatch;
                    report = {};
                    verify = 'SAFETY_HUB_FETCH_CLASSIFICATION_START';
                    report['type'] = verify;
                    report['classificationId'] = options;
                    report = oscar.bind(golf)(report);
                    oscar = _closure1_slot4;
                    report = oscar.getSuspendedUserToken;
                    verify = report.bind(oscar)();
                    report = null;
                    if(!(report == verify)) { _fun00008_ip = 103; continue _fun00007 }
 91:
                    oscar = _closure1_slot8;
                    options = oscar.SAFETY_HUB;
                    _fun00008_ip = 113; continue _fun00007;
 103:
                    oscar = _closure1_slot8;
                    options = oscar.SAFETY_HUB_SUSPENDED;
 113:
                    if(!(report == verify)) { _fun00008_ip = 166; continue _fun00007 }
 117:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    report = 6;
                    report = golf[report];
                    report = oscar.bind(zulu)(report);
                    golf = report.HTTP;
                    oscar = golf.get;
                    report = {};
                    report['url'] = options;
                    offset = false;
                    report['rejectWithError'] = offset;
                    oscar = oscar.bind(golf)(report);
                    _fun00008_ip = 225; continue _fun00007;
 166:
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    tango = 6;
                    tango = golf[tango];
                    tango = report.bind(zulu)(tango);
                    golf = tango.HTTP;
                    report = golf.post;
                    tango = {};
                    tango['url'] = options;
                    options = {};
                    options['token'] = verify;
                    tango['body'] = options;
                    options = false;
                    tango['rejectWithError'] = options;
                    oscar = report.bind(golf)(tango);
 225:
                    report = oscar.then;
                    tango = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            entity = argFoo;
                            entity = entity.body;
                            zulu = entity.classifications;
                            golf = entity.account_standing;
                            oscar = entity.is_dsa_eligible;
                            report = entity.username;
                            tango = entity.is_appeal_eligible;
                            mike = zulu.find;
                            entity = function(argFoo) {
                                entity = argFoo;
                                mike = entity.id;
                                entity = _closure4_slot0;
                                entity = mike === entity;
                                return entity;
                            };
                            options = mike.bind(zulu)(entity);
                            entity = null;
                            if(!(entity == options)) { _fun00010_ip = 125; continue _fun00009 }
 62:
                            zulu = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 5;
                            mike = mike[entity];
                            entity = undefined;
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.dispatch;
                            entity = {'type': 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE', 'error': 'Classification not found.'};
                            verify = _closure4_slot0;
                            entity['classificationId'] = verify;
                            entity = mike.bind(zulu)(entity);
                            _fun00010_ip = 205; continue _fun00009;
 125:
                            mike = _closure1_slot11;
                            zulu = undefined;
                            mike = mike.bind(zulu)(options);
                            mike = _closure1_slot1;
                            verify = _closure1_slot2;
                            entity = 5;
                            entity = verify[entity];
                            zulu = mike.bind(zulu)(entity);
                            mike = zulu.dispatch;
                            entity = {};
                            verify = 'SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS';
                            entity['type'] = verify;
                            entity['classification'] = options;
                            entity['accountStanding'] = golf;
                            entity['isDsaEligible'] = oscar;
                            entity['username'] = report;
                            entity['isAppealEligible'] = tango;
                            entity = mike.bind(zulu)(entity);
 205:
                            entity = undefined;
                            return entity;
                        }
                    };
                    report = report.bind(oscar)(tango);
                    tango = report.catch;
                    mike = function(argFoo) {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            golf = argFoo;
                            zulu = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 5;
                            mike = mike[entity];
                            entity = undefined;
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.dispatch;
                            mike = {};
                            report = 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE';
                            mike['type'] = report;
                            report = null;
                            options = report == golf;
                            oscar = undefined;
                            if(options) { _fun00012_ip = 75; continue _fun00011 }
 56:
                            golf = golf.body;
                            options = report == golf;
                            oscar = undefined;
                            if(options) { _fun00012_ip = 75; continue _fun00011 }
 70:
                            oscar = golf.message;
 75:
                            golf = report != oscar;
                            report = 'Unknown error';
                            if(!golf) { _fun00012_ip = 91; continue _fun00011 }
 88:
                            report = oscar;
 91:
                            mike['error'] = report;
                            report = _closure4_slot0;
                            mike['classificationId'] = report;
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        }
                    };
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=264);
 262:
                    return mike;
 264:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00008_ip = 273; continue _fun00007 }
 270:
                    return zulu;
 273:
                    return mike;
 276:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot10 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: _setClassificationFlaggedContent
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            mike = argFoo;
            zulu = mike.flagged_content;
            entity = null;
            if(!(entity != zulu)) { _fun00014_ip = 132; continue _fun00013 }
 15:
            entity = mike.flagged_content;
            entity = entity.length;
            zulu = 0;
            if(!(entity > zulu)) { _fun00014_ip = 132; continue _fun00013 }
 32:
            entity = mike.flagged_content;
            zulu = entity[zulu];
            report = zulu.attachments;
            tango = report.filter;
            entity = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = argFoo;
                    tango = entity.filename;
                    zulu = _closure1_slot0;
                    entity = _closure1_slot2;
                    oscar = 7;
                    entity = entity[oscar];
                    report = undefined;
                    zulu = zulu.bind(report)(entity);
                    entity = zulu.isImageFile;
                    entity = entity.bind(zulu)(tango);
                    if(entity) { _fun00016_ip = 76; continue _fun00015 }
 48:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[oscar];
                    zulu = zulu.bind(report)(mike);
                    mike = zulu.isVideoFile;
                    entity = mike.bind(zulu)(tango);
 76:
                    return entity;
                }
            };
            entity = tango.bind(report)(entity);
            zulu['attachments'] = entity;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 8;
            tango = tango[entity];
            entity = undefined;
            tango = report.bind(entity)(tango);
            entity = tango.isFlaggedContentEmpty;
            entity = entity.bind(tango)(zulu);
            if(entity) { _fun00014_ip = 122; continue _fun00013 }
 112:
            entity = new Array(1);
            entity[0] = zulu;
            _fun00014_ip = 126; continue _fun00013;
 122:
            entity = new Array(0);
 126:
            mike['flagged_content'] = entity;
 132:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _requestReview
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    StartGenerator();
                    golf = argFoo;
                    yankee = argBar;
                    offset = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00018_ip = 318; continue _fun00017 }
 21:
                    var _closure4_slot0 = golf;
                    report = _closure1_slot4;
                    tango = report.getSuspendedUserToken;
                    verify = tango.bind(report)();
                    tango = null;
                    if(!(tango == verify)) { _fun00018_ip = 65; continue _fun00017 }
 48:
                    oscar = _closure1_slot8;
                    report = oscar.SAFETY_HUB_REQUEST_REVIEW;
                    options = report.bind(oscar)(golf);
                    _fun00018_ip = 80; continue _fun00017;
 65:
                    oscar = _closure1_slot8;
                    report = oscar.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW;
                    options = report.bind(oscar)(golf);
 80:
                    if(!(tango == verify)) { _fun00018_ip = 152; continue _fun00017 }
 84:
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    tango = 6;
                    report = report[tango];
                    tango = undefined;
                    tango = oscar.bind(tango)(report);
                    oscar = tango.HTTP;
                    report = oscar.put;
                    tango = {};
                    tango['url'] = options;
                    golf = {};
                    golf['signal'] = yankee;
                    golf['user_input'] = offset;
                    tango['body'] = golf;
                    golf = false;
                    tango['rejectWithError'] = golf;
                    oscar = report.bind(oscar)(tango);
                    _fun00018_ip = 223; continue _fun00017;
 152:
                    golf = _closure1_slot0;
                    report = _closure1_slot2;
                    tango = 6;
                    report = report[tango];
                    tango = undefined;
                    tango = golf.bind(tango)(report);
                    golf = tango.HTTP;
                    report = golf.put;
                    tango = {};
                    tango['url'] = options;
                    options = {};
                    options['signal'] = yankee;
                    options['user_input'] = offset;
                    options['token'] = verify;
                    tango['body'] = options;
                    options = false;
                    tango['rejectWithError'] = options;
                    oscar = report.bind(golf)(tango);
 223:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 5;
                    tango = tango[zulu];
                    zulu = undefined;
                    golf = report.bind(zulu)(tango);
                    report = golf.dispatch;
                    tango = {};
                    options = 'SAFETY_HUB_REQUEST_REVIEW_START';
                    tango['type'] = options;
                    tango = report.bind(golf)(tango);
                    report = oscar.then;
                    tango = function() {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 5;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.dispatch;
                        mike = {};
                        report = 'SAFETY_HUB_REQUEST_REVIEW_SUCCESS';
                        mike['type'] = report;
                        report = _closure4_slot0;
                        mike['classificationId'] = report;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    report = report.bind(oscar)(tango);
                    tango = report.catch;
                    mike = function(argFoo) {
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            entity = argFoo;
                            zulu = _closure1_slot1;
                            tango = _closure1_slot2;
                            mike = 5;
                            mike = tango[mike];
                            verify = undefined;
                            tango = zulu.bind(verify)(mike);
                            zulu = tango.dispatch;
                            mike = {};
                            report = 'SAFETY_HUB_REQUEST_REVIEW_FAILURE';
                            mike['type'] = report;
                            report = null;
                            golf = report == entity;
                            oscar = undefined;
                            if(golf) { _fun00020_ip = 75; continue _fun00019 }
 56:
                            golf = entity.body;
                            options = report == golf;
                            oscar = undefined;
                            if(options) { _fun00020_ip = 75; continue _fun00019 }
 70:
                            oscar = golf.message;
 75:
                            golf = report != oscar;
                            report = 'Unknown error';
                            if(!golf) { _fun00020_ip = 91; continue _fun00019 }
 88:
                            report = oscar;
 91:
                            mike['error'] = report;
                            mike = zulu.bind(tango)(mike);
                            throw entity;
                        }
                    };
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=306);
 304:
                    return mike;
 306:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00018_ip = 315; continue _fun00017 }
 312:
                    return zulu;
 315:
                    return mike;
 318:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot12 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _requestSuspendedUserAgeVerification
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00022_ip = 189; continue _fun00021 }
 12:
                    golf = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 5;
                    report = oscar[zulu];
                    zulu = undefined;
                    options = golf.bind(zulu)(report);
                    golf = options.dispatch;
                    report = {};
                    verify = 'SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START';
                    report['type'] = verify;
                    report = golf.bind(options)(report);
                    golf = _closure1_slot4;
                    report = golf.getSuspendedUserToken;
                    options = report.bind(golf)();
                    report = _closure1_slot8;
                    golf = report.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION;
                    report = _closure1_slot0;
                    tango = 6;
                    tango = oscar[tango];
                    tango = report.bind(zulu)(tango);
                    oscar = tango.HTTP;
                    report = oscar.post;
                    tango = {};
                    tango['url'] = golf;
                    golf = {};
                    golf['token'] = options;
                    tango['body'] = golf;
                    golf = false;
                    tango['rejectWithError'] = golf;
                    oscar = report.bind(oscar)(tango);
                    report = oscar.then;
                    tango = function(argFoo) {
                        entity = argFoo;
                        entity = entity.body;
                        oscar = entity.verification_request_id;
                        report = entity.verification_webview_url;
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 5;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.dispatch;
                        mike = {};
                        golf = 'SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS';
                        mike['type'] = golf;
                        mike['verificationRequestId'] = oscar;
                        mike['verificationWebviewUrl'] = report;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    report = report.bind(oscar)(tango);
                    tango = report.catch;
                    mike = function(argFoo) {
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            golf = argFoo;
                            zulu = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 5;
                            mike = mike[entity];
                            entity = undefined;
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.dispatch;
                            mike = {};
                            report = 'SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE';
                            mike['type'] = report;
                            report = null;
                            options = report == golf;
                            oscar = undefined;
                            if(options) { _fun00024_ip = 75; continue _fun00023 }
 56:
                            golf = golf.body;
                            options = report == golf;
                            oscar = undefined;
                            if(options) { _fun00024_ip = 75; continue _fun00023 }
 70:
                            oscar = golf.message;
 75:
                            golf = report != oscar;
                            report = 'Unknown error';
                            if(!golf) { _fun00024_ip = 91; continue _fun00023 }
 88:
                            report = oscar;
 91:
                            mike['error'] = report;
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        }
                    };
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=177);
 175:
                    return mike;
 177:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00022_ip = 186; continue _fun00021 }
 183:
                    return zulu;
 186:
                    return mike;
 189:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot13 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot13 = entity;
    mike = function() { // Original name: checkSuspendedUserAgeVerification
        entity = undefined;
        tango = _closure1_slot15;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot14 = mike;
    entity = function() { // Original name: _checkSuspendedUserAgeVerification
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00026_ip = 213; continue _fun00025 }
 12:
                    zulu = undefined;
                    var _closure4_slot0 = zulu;
                    golf = _closure1_slot1;
                    oscar = _closure1_slot2;
                    report = 5;
                    report = oscar[report];
                    options = golf.bind(zulu)(report);
                    golf = options.dispatch;
                    report = {};
                    verify = 'SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START';
                    report['type'] = verify;
                    report = golf.bind(options)(report);
                    golf = _closure1_slot4;
                    report = golf.getSuspendedUserToken;
                    options = report.bind(golf)();
                    golf = _closure1_slot5;
                    report = golf.getAgeCheckAttempts;
                    report = report.bind(golf)();
                    _closure4_slot0 = report;
                    report = _closure1_slot8;
                    golf = report.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION;
                    report = _closure1_slot0;
                    tango = 6;
                    tango = oscar[tango];
                    tango = report.bind(zulu)(tango);
                    oscar = tango.HTTP;
                    report = oscar.post;
                    tango = {};
                    tango['url'] = golf;
                    golf = {};
                    golf['token'] = options;
                    tango['body'] = golf;
                    golf = false;
                    tango['rejectWithError'] = golf;
                    oscar = report.bind(oscar)(tango);
                    report = oscar.then;
                    tango = function(argFoo) {
                        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                            entity = argFoo;
                            entity = entity.body;
                            report = entity.success;
                            entity = !report;
                            if(!entity) { _fun00028_ip = 38; continue _fun00027 }
 20:
                            zulu = _closure4_slot0;
                            mike = _closure1_slot7;
                            entity = zulu < mike;
 38:
                            if(!entity) { _fun00028_ip = 73; continue _fun00027 }
 41:
                            entity = global;
                            tango = entity.setTimeout;
                            zulu = _closure1_slot6;
                            mike = undefined;
                            entity = function() {
                                mike = _closure1_slot14;
                                entity = undefined;
                                entity = mike.bind(entity)();
                                return entity;
                            };
                            entity = tango.bind(mike)(entity, zulu);
 73:
                            zulu = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 5;
                            mike = mike[entity];
                            entity = undefined;
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.dispatch;
                            mike = {};
                            oscar = 'SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS';
                            mike['type'] = oscar;
                            mike['success'] = report;
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        }
                    };
                    report = report.bind(oscar)(tango);
                    tango = report.catch;
                    mike = function(argFoo) {
                        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                            golf = argFoo;
                            zulu = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 5;
                            mike = mike[entity];
                            entity = undefined;
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.dispatch;
                            mike = {};
                            report = 'SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE';
                            mike['type'] = report;
                            report = null;
                            options = report == golf;
                            oscar = undefined;
                            if(options) { _fun00030_ip = 75; continue _fun00029 }
 56:
                            golf = golf.body;
                            options = report == golf;
                            oscar = undefined;
                            if(options) { _fun00030_ip = 75; continue _fun00029 }
 70:
                            oscar = golf.message;
 75:
                            golf = report != oscar;
                            report = 'Unknown error';
                            if(!golf) { _fun00030_ip = 91; continue _fun00029 }
 88:
                            report = oscar;
 91:
                            mike['error'] = report;
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        }
                    };
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=201);
 199:
                    return mike;
 201:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00026_ip = 210; continue _fun00025 }
 207:
                    return zulu;
 210:
                    return mike;
 213:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot15 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
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
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.AGE_CHECK_POLL_INTERVAL_MS;
    var _closure1_slot6 = options;
    report = report.AGE_CHECK_MAX_POLL_ATTEMPTS;
    var _closure1_slot7 = report;
    report = 4;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Endpoints;
    var _closure1_slot8 = report;
    report = 9;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/safety_hub/SafetyHubActionCreators.tsx';
    report = oscar.bind(golf)(report);
    report = function() { // Original name: getSafetyHubData
        entity = undefined;
        tango = _closure1_slot9;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['getSafetyHubData'] = report;
    report = function() { // Original name: getSafetyHubDataForClassification
        entity = undefined;
        tango = _closure1_slot10;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['getSafetyHubDataForClassification'] = report;
    report = function() { // Original name: requestReview
        entity = undefined;
        tango = _closure1_slot12;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['requestReview'] = report;
    tango = function() { // Original name: requestSuspendedUserAgeVerification
        entity = undefined;
        tango = _closure1_slot13;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['requestSuspendedUserAgeVerification'] = tango;
    zulu['checkSuspendedUserAgeVerification'] = mike;
    return entity;
})();