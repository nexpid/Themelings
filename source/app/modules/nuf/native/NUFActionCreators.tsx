// app/modules/nuf/native/NUFActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _startContactSyncForDiscoverability
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun93826: for(var _fun93826_ip = 0; ; ) switch(_fun93826_ip) {
 0:
                    StartGenerator();
                    options = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun93826_ip = 260; continue _fun93826 }
 13:
                    tango = _closure1_slot9;
                    mike = tango.getCurrentUser;
                    oscar = mike.bind(tango)();
                    report = null;
                    golf = report == oscar;
                    tango = undefined;
                    mike = undefined;
                    if(golf) { _fun93826_ip = 48; continue _fun93826 }
 42:
                    mike = oscar.phone;
 48:
                    verify = _closure1_slot8;
                    golf = verify.getLocalAccount;
                    oscar = _closure1_slot14;
                    oscar = oscar.CONTACTS;
                    offset = golf.bind(verify)(oscar);
                    verify = _closure1_slot0;
                    golf = _closure1_slot2;
                    oscar = 20;
                    golf = golf[oscar];
                    verify = verify.bind(tango)(golf);
                    golf = verify.isContactSyncEnabled;
                    verify = golf.bind(verify)(offset);
                    if(!(report != mike)) { _fun93826_ip = 224; continue _fun93826 }
 108:
                    mike = _closure1_slot6;
                    mike = mike.bind(tango)(options);
                    report = _closure1_slot1;
                    golf = _closure1_slot2;
                    mike = 21;
                    mike = golf[mike];
                    golf = report.bind(tango)(mike);
                    report = golf.updateContactSyncEnabled;
                    mike = {};
                    mike['enabled'] = verify;
                    mike['name'] = options;
                    mike = report.bind(golf)(mike);
                    SaveGenerator(address=162);
 160:
                    return mike;
 162:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun93826_ip = 221; continue _fun93826 }
 168:
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[oscar];
                    golf = report.bind(tango)(zulu);
                    oscar = golf.uploadContacts;
                    report = '[]';
                    zulu = true;
                    zulu = oscar.bind(golf)(report, zulu);
                    SaveGenerator(address=209);
 207:
                    return zulu;
 209:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun93826_ip = 218; continue _fun93826 }
 215:
                    return tango;
 218:
                    return zulu;
 221:
                    return mike;
 224:
                    mike = global;
                    tango = mike.Error;
                    mike = tango.prototype;
                    zulu = Object.create(mike, {constructor: {value: tango}});
                    romeo = 'Cannot start contact sync without a phone number';
                    foxtrot = zulu;
                    mike = new foxtrot[tango](romeo, yankee);
                    mike = mike instanceof Object ? mike : zulu;
                    throw mike;
 260:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot16 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.setAllowEmail;
    var _closure1_slot4 = options;
    options = tango.setAllowSync;
    var _closure1_slot5 = options;
    options = tango.setName;
    var _closure1_slot6 = options;
    tango = tango.useContactSyncModalStore;
    var _closure1_slot7 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.NUF_DISCOVERABILITY_MODAL_KEY;
    var _closure1_slot10 = golf;
    golf = tango.NUF_VALUE_PROPS_MODAL_KEY;
    var _closure1_slot11 = golf;
    tango = tango.NUF_IN_APP_EDUCATION_KEY;
    var _closure1_slot12 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticEvents;
    var _closure1_slot13 = golf;
    tango = tango.PlatformTypes;
    var _closure1_slot14 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.IN_APP_GUILD_TEMPLATES_MODAL_KEY;
    var _closure1_slot15 = tango;
    tango = 22;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/nuf/native/NUFActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() {
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'ONBOARDING_START';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['startOnboarding'] = tango;
    tango = function(argFoo) {
        _fun93828: for(var _fun93828_ip = 0; ; ) switch(_fun93828_ip) {
 0:
            mike = argFoo;
            oscar = mike.skip;
            entity = undefined;
            if(!(oscar === entity)) { _fun93828_ip = 17; continue _fun93828 }
 15:
            oscar = false;
 17:
            report = mike.skipAttempt;
            if(!(report === entity)) { _fun93828_ip = 29; continue _fun93828 }
 27:
            report = false;
 29:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 7;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            golf = 'ONBOARDING_STEP';
            mike['type'] = golf;
            mike['skip'] = oscar;
            mike['skipAttempt'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['nextOnboardingStep'] = tango;
    tango = function() { // Original name: previousOnboardingStep
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {'type': 'ONBOARDING_STEP', 'back': true};
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['previousOnboardingStep'] = tango;
    tango = function(argFoo) { // Original name: transitionToNUFGuildTemplatesModal
        entity = argFoo;
        var _closure2_slot0 = entity;
        report = _closure1_slot1;
        tango = _closure1_slot2;
        entity = 8;
        tango = tango[entity];
        entity = undefined;
        oscar = report.bind(entity)(tango);
        report = oscar.pushLazy;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun93832: for(var _fun93832_ip = 0; ; ) switch(_fun93832_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun93832_ip = 91; continue _fun93832 }
 7:
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    zulu = 10;
                    zulu = mike[zulu];
                    report = undefined;
                    tango = tango.bind(report)(zulu);
                    zulu = 9;
                    zulu = mike[zulu];
                    mike = mike.paths;
                    mike = tango.bind(report)(zulu, mike);
                    SaveGenerator(address=54);
 52:
                    return mike;
 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun93832_ip = 88; continue _fun93832 }
 60:
                    zulu = mike.default;
                    tango = {};
                    report = _closure2_slot0;
                    tango['animation'] = report;
                    zulu['modalConfig'] = tango;
                    return zulu;
 88:
                    return mike;
 91:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(entity)(zulu);
        zulu = _closure1_slot15;
        mike = {};
        mike = report.bind(oscar)(tango, mike, zulu);
        return entity;
    };
    zulu['transitionToNUFGuildTemplatesModal'] = tango;
    tango = function(argFoo) { // Original name: transitionToHubEmailConnectionModal
        _fun93833: for(var _fun93833_ip = 0; ; ) switch(_fun93833_ip) {
 0:
            mike = arguments[1];
            entity = undefined;
            if(!(mike === entity)) { _fun93833_ip = 11; continue _fun93833 }
 9:
            mike = false;
 11:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 11;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.open;
            zulu = {};
            oscar = function(argFoo) { // Original name: onCloseExtra
                _fun93834: for(var _fun93834_ip = 0; ; ) switch(_fun93834_ip) {
 0:
                    mike = argFoo;
                    if(mike) { _fun93834_ip = 55; continue _fun93834 }
 9:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 7;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.dispatch;
                    mike = {};
                    report = 'ONBOARDING_STEP';
                    mike['type'] = report;
                    mike = zulu.bind(tango)(mike);
                    _fun93834_ip = 87; continue _fun93834;
 55:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 12;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    entity = mike.setNewUserFlowCompleted;
                    entity = entity.bind(mike)();
 87:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['onCloseExtra'] = oscar;
            zulu['displayStudentPrompt'] = mike;
            mike = argFoo;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['transitionToHubEmailConnectionModal'] = tango;
    tango = function() { // Original name: openDiscoverabilityModal
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 8;
        zulu = zulu[entity];
        entity = undefined;
        oscar = tango.bind(entity)(zulu);
        report = oscar.pushLazy;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun93837: for(var _fun93837_ip = 0; ; ) switch(_fun93837_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun93837_ip = 116; continue _fun93837 }
 7:
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    zulu = 10;
                    zulu = mike[zulu];
                    golf = undefined;
                    tango = tango.bind(golf)(zulu);
                    zulu = 13;
                    zulu = mike[zulu];
                    mike = mike.paths;
                    mike = tango.bind(golf)(zulu, mike);
                    SaveGenerator(address=54);
 52:
                    return mike;
 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun93837_ip = 113; continue _fun93837 }
 60:
                    zulu = mike.default;
                    tango = {};
                    oscar = _closure1_slot0;
                    options = _closure1_slot2;
                    report = 14;
                    report = options[report];
                    report = oscar.bind(golf)(report);
                    report = report.ModalAnimation;
                    report = report.SLIDE_IN_OUT;
                    tango['animation'] = report;
                    zulu['modalConfig'] = tango;
                    return zulu;
 113:
                    return mike;
 116:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(entity)(zulu);
        zulu = _closure1_slot10;
        mike = {};
        mike = report.bind(oscar)(tango, mike, zulu);
        return entity;
    };
    zulu['openDiscoverabilityModal'] = tango;
    tango = function() { // Original name: openInAppEducationActionSheet
        report = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 15;
        tango = zulu[entity];
        entity = undefined;
        oscar = report.bind(entity)(tango);
        report = oscar.openLazy;
        golf = _closure1_slot0;
        tango = 10;
        tango = zulu[tango];
        golf = golf.bind(entity)(tango);
        tango = 16;
        tango = zulu[tango];
        zulu = zulu.paths;
        tango = golf.bind(entity)(tango, zulu);
        zulu = _closure1_slot12;
        mike = {};
        mike = report.bind(oscar)(tango, zulu, mike);
        return entity;
    };
    zulu['openInAppEducationActionSheet'] = tango;
    tango = function(argFoo) { // Original name: closeDiscoverabilityModal
        zulu = _closure1_slot1;
        tango = _closure1_slot2;
        entity = 8;
        report = tango[entity];
        entity = undefined;
        oscar = zulu.bind(entity)(report);
        report = oscar.popWithKey;
        mike = _closure1_slot10;
        mike = report.bind(oscar)(mike);
        mike = 7;
        mike = tango[mike];
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'ONBOARDING_STEP';
        mike['type'] = report;
        report = argFoo;
        mike['skip'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['closeDiscoverabilityModal'] = tango;
    tango = function(argFoo) { // Original name: openValuePropsModal
        entity = argFoo;
        entity = entity.onComplete;
        var _closure2_slot0 = entity;
        report = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 8;
        tango = zulu[entity];
        entity = undefined;
        oscar = report.bind(entity)(tango);
        report = oscar.pushLazy;
        options = _closure1_slot0;
        tango = 10;
        tango = zulu[tango];
        options = options.bind(entity)(tango);
        tango = 17;
        tango = zulu[tango];
        zulu = zulu.paths;
        tango = options.bind(entity)(tango, zulu);
        zulu = {};
        golf = function(argFoo, argBar) { // Original name: onComplete
            tango = _closure1_slot1;
            report = _closure1_slot2;
            entity = 18;
            zulu = report[entity];
            entity = undefined;
            options = tango.bind(entity)(zulu);
            golf = options.track;
            zulu = _closure1_slot13;
            oscar = zulu.ONBOARDING_VALUE_PROPS_VIEWED;
            zulu = {};
            verify = argFoo;
            zulu['skip'] = verify;
            verify = argBar;
            zulu['props_viewed'] = verify;
            verify = 19;
            verify = report[verify];
            romeo = tango.bind(entity)(verify);
            yankee = romeo.getCurrentConfig;
            offset = {};
            verify = '485003_1';
            offset['location'] = verify;
            verify = {};
            foxtrot = false;
            verify['autoTrackExposure'] = foxtrot;
            verify = yankee.bind(romeo)(offset, verify);
            verify = verify.bucket;
            zulu['bucket'] = verify;
            zulu = golf.bind(options)(oscar, zulu);
            zulu = 8;
            zulu = report[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.popWithKey;
            mike = _closure1_slot11;
            mike = zulu.bind(tango)(mike);
            mike = _closure2_slot0;
            mike = mike.bind(entity)();
            return entity;
        };
        zulu['onComplete'] = golf;
        mike = _closure1_slot11;
        mike = report.bind(oscar)(tango, zulu, mike);
        return entity;
    };
    zulu['openValuePropsModal'] = tango;
    tango = function() { // Original name: startContactSyncForDiscoverability
        entity = undefined;
        tango = _closure1_slot16;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['startContactSyncForDiscoverability'] = tango;
    mike = function() { // Original name: toggleDiscoverabilityForUser
        _fun93843: for(var _fun93843_ip = 0; ; ) switch(_fun93843_ip) {
 0:
            mike = _closure1_slot9;
            entity = mike.getCurrentUser;
            mike = entity.bind(mike)();
            report = null;
            oscar = report == mike;
            entity = undefined;
            tango = undefined;
            if(oscar) { _fun93843_ip = 35; continue _fun93843 }
 29:
            tango = mike.phone;
 35:
            oscar = _closure1_slot7;
            mike = oscar.getState;
            oscar = mike.bind(oscar)();
            mike = oscar.allowPhone;
            oscar = oscar.allowEmail;
            if(mike) { _fun93843_ip = 67; continue _fun93843 }
 64:
            mike = oscar;
 67:
            if(!(report == tango)) { _fun93843_ip = 100; continue _fun93843 }
 71:
            report = _closure1_slot5;
            tango = false;
            tango = report.bind(entity)(tango);
            if(mike) { _fun93843_ip = 98; continue _fun93843 }
 85:
            report = _closure1_slot4;
            tango = true;
            tango = report.bind(entity)(tango);
            _fun93843_ip = 112; continue _fun93843;
 98:
            _fun93843_ip = 112; continue _fun93843;
 100:
            zulu = _closure1_slot5;
            mike = !mike;
            mike = zulu.bind(entity)(mike);
 112:
            return entity;
        }
    };
    zulu['toggleDiscoverabilityForUser'] = mike;
    return entity;
})();