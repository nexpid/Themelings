// app/modules/mfa/native/screens/WebAuthnScreen.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    backup = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = backup;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: AndroidAuthRadioGroup
        entity = argFoo;
        oscar = entity.authenticatorSelection;
        mike = entity.setAuthenticator;
        var _closure2_slot0 = mike;
        report = entity.inProgress;
        mike = _closure1_slot6;
        tango = undefined;
        verify = mike.bind(tango)();
        mike = {};
        zulu = _closure1_slot7;
        zulu = zulu.ANDROID_PASSKEY;
        mike['value'] = zulu;
        foxtrot = _closure1_slot0;
        offset = _closure1_slot2;
        zulu = 6;
        options = offset[zulu];
        options = foxtrot.bind(tango)(options);
        romeo = options.intl;
        yankee = romeo.string;
        options = offset[zulu];
        options = foxtrot.bind(tango)(options);
        options = options.t;
        options = options.PVVXRE;
        options = yankee.bind(romeo)(options);
        mike['name'] = options;
        options = new Array(2);
        options[0] = mike;
        mike = {};
        yankee = _closure1_slot7;
        yankee = yankee.AUTHENTICATE;
        mike['value'] = yankee;
        yankee = offset[zulu];
        yankee = foxtrot.bind(tango)(yankee);
        romeo = yankee.intl;
        yankee = romeo.string;
        zulu = offset[zulu];
        zulu = foxtrot.bind(tango)(zulu);
        zulu = zulu.t;
        zulu = zulu.TKop3d;
        zulu = yankee.bind(romeo)(zulu);
        mike['name'] = zulu;
        options[1] = mike;
        zulu = _closure1_slot5;
        mike = _closure1_slot1;
        entity = 7;
        entity = offset[entity];
        mike = mike.bind(tango)(entity);
        entity = {};
        verify = verify.radioItem;
        entity['style'] = verify;
        entity['options'] = options;
        golf = function(argFoo) { // Original name: onChange
            entity = argFoo;
            zulu = entity.value;
            mike = _closure2_slot0;
            entity = undefined;
            entity = mike.bind(entity)(zulu);
            return entity;
        };
        entity['onChange'] = golf;
        entity['value'] = oscar;
        entity['disabled'] = report;
        report = true;
        entity['withSpacing'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, mike);
    offset = 0;
    mike = golf[offset];
    entity = undefined;
    mike = backup.bind(entity)(mike);
    var _closure1_slot3 = mike;
    verify = 1;
    report = golf[verify];
    mike = argCorge;
    mike = mike.bind(entity)(report);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    options = mike.NativeModules;
    mike = 3;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.jsx;
    var _closure1_slot5 = mike;
    mike = 4;
    mike = golf[mike];
    yankee = oscar.bind(entity)(mike);
    report = yankee.createStyles;
    mike = {};
    romeo = {};
    foxtrot = 5;
    kilo = golf[foxtrot];
    kilo = backup.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.BACKGROUND_SECONDARY;
    romeo['backgroundColor'] = kilo;
    foxtrot = golf[foxtrot];
    foxtrot = backup.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.md;
    romeo['borderRadius'] = foxtrot;
    mike['radioItem'] = romeo;
    mike = report.bind(yankee)(mike);
    var _closure1_slot6 = mike;
    mike = {};
    mike['AUTHENTICATE'] = offset;
    report = 'AUTHENTICATE';
    mike[offset] = report;
    mike['ANDROID_PASSKEY'] = verify;
    report = 'ANDROID_PASSKEY';
    mike[verify] = report;
    var _closure1_slot7 = mike;
    report = {};
    offset = mike.AUTHENTICATE;
    verify = options.DCDSecurityKeyManager;
    verify = verify.authenticate;
    report[offset] = verify;
    verify = mike.ANDROID_PASSKEY;
    options = options.DCDSecurityKeyManager;
    options = options.authenticatePasskey;
    report[verify] = options;
    var _closure1_slot8 = report;
    report = 13;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/mfa/native/screens/WebAuthnScreen.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: WebAuthnScreen
        _fun98623: for(var _fun98623_ip = 0; ; ) switch(_fun98623_ip) {
 0:
            mike = argFoo;
            options = mike.mfaChallenge;
            golf = mike.finish;
            var _closure2_slot0 = golf;
            tango = undefined;
            var _closure2_slot3 = tango;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            foxtrot = _closure1_slot4;
            zulu = foxtrot.useState;
            mike = false;
            mike = zulu.bind(foxtrot)(mike);
            report = _closure1_slot3;
            yankee = 2;
            mike = report.bind(tango)(mike, yankee);
            oscar = 0;
            romeo = mike[oscar];
            zulu = 1;
            mike = mike[zulu];
            var _closure2_slot1 = mike;
            mike = foxtrot.useState;
            mike = mike.bind(foxtrot)(tango);
            mike = report.bind(tango)(mike, yankee);
            report = mike[oscar];
            mike = mike[zulu];
            var _closure2_slot2 = mike;
            verify = foxtrot.useState;
            kilo = _closure1_slot0;
            mike = _closure1_slot2;
            offset = 8;
            mike = mike[offset];
            kilo = kilo.bind(tango)(mike);
            mike = kilo.isAndroid;
            mike = mike.bind(kilo)();
            kilo = _closure1_slot7;
            if(mike) { _fun98623_ip = 161; continue _fun98623 }
 153:
            mike = kilo.AUTHENTICATE;
            _fun98623_ip = 167; continue _fun98623;
 161:
            mike = kilo.ANDROID_PASSKEY;
 167:
            verify = verify.bind(foxtrot)(mike);
            mike = _closure1_slot3;
            mike = mike.bind(tango)(verify, yankee);
            sizing = mike[oscar];
            _closure2_slot3 = sizing;
            kilo = mike[zulu];
            oscar = options.methods;
            zulu = oscar.find;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                entity = 'webauthn';
                entity = entity === mike;
                return entity;
            };
            mike = zulu.bind(oscar)(mike);
            verify = mike.challenge;
            _closure2_slot4 = verify;
            oscar = _closure1_slot4;
            yankee = oscar.useMemo;
            zulu = new Array(1);
            zulu[0] = sizing;
            mike = function() {
                mike = _closure1_slot8;
                entity = _closure2_slot3;
                entity = mike[entity];
                return entity;
            };
            yankee = yankee.bind(oscar)(mike, zulu);
            _closure2_slot5 = yankee;
            zulu = oscar.useCallback;
            mike = new Array(3);
            mike[0] = yankee;
            mike[1] = verify;
            mike[2] = golf;
            entity = function() {
                tango = _closure2_slot2;
                entity = undefined;
                tango = tango.bind(entity)(entity);
                report = _closure2_slot1;
                tango = true;
                tango = report.bind(entity)(tango);
                tango = _closure2_slot5;
                zulu = _closure2_slot4;
                report = tango.bind(entity)(zulu);
                tango = report.then;
                zulu = function(argFoo) {
                    zulu = _closure2_slot0;
                    mike = {};
                    entity = 'webauthn';
                    mike['mfaType'] = entity;
                    entity = argFoo;
                    mike['data'] = entity;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                report = tango.bind(report)(zulu);
                tango = report.catch;
                zulu = function(argFoo) {
                    _fun98628: for(var _fun98628_ip = 0; ; ) switch(_fun98628_ip) {
 0:
                        tango = argFoo;
                        report = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 9;
                        zulu = zulu[entity];
                        entity = undefined;
                        zulu = report.bind(entity)(zulu);
                        zulu = zulu.HTTPResponseError;
                        report = tango instanceof zulu;
                        zulu = _closure2_slot2;
                        if(report) { _fun98628_ip = 60; continue _fun98628 }
 48:
                        tango = tango.message;
                        tango = zulu.bind(entity)(tango);
                        _fun98628_ip = 120; continue _fun98628;
 60:
                        oscar = _closure1_slot0;
                        golf = _closure1_slot2;
                        mike = 6;
                        tango = golf[mike];
                        tango = oscar.bind(entity)(tango);
                        report = tango.intl;
                        tango = report.string;
                        mike = golf[mike];
                        mike = oscar.bind(entity)(mike);
                        mike = mike.t;
                        mike = mike.xSCvBQ;
                        mike = tango.bind(report)(mike);
                        mike = zulu.bind(entity)(mike);
 120:
                        return entity;
                    }
                };
                tango = tango.bind(report)(zulu);
                zulu = tango.finally;
                mike = function() {
                    zulu = _closure2_slot1;
                    mike = undefined;
                    entity = false;
                    entity = zulu.bind(mike)(entity);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            yankee = zulu.bind(oscar)(entity, mike);
            zulu = _closure1_slot5;
            mike = _closure1_slot1;
            oscar = _closure1_slot2;
            entity = 10;
            entity = oscar[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            verify = _closure1_slot0;
            output = 6;
            foxtrot = oscar[output];
            foxtrot = verify.bind(tango)(foxtrot);
            echo = foxtrot.intl;
            result = echo.string;
            foxtrot = oscar[output];
            foxtrot = verify.bind(tango)(foxtrot);
            foxtrot = foxtrot.t;
            foxtrot = foxtrot.saHocH;
            foxtrot = result.bind(echo)(foxtrot);
            entity['headerText'] = foxtrot;
            foxtrot = oscar[output];
            foxtrot = verify.bind(tango)(foxtrot);
            echo = foxtrot.intl;
            result = echo.string;
            foxtrot = oscar[output];
            foxtrot = verify.bind(tango)(foxtrot);
            foxtrot = foxtrot.t;
            foxtrot = foxtrot.YpMrqK;
            foxtrot = result.bind(echo)(foxtrot);
            entity['subtitle'] = foxtrot;
            echo = _closure1_slot5;
            foxtrot = 11;
            foxtrot = oscar[foxtrot];
            foxtrot = verify.bind(tango)(foxtrot);
            result = foxtrot.KeyImage;
            foxtrot = {};
            foxtrot = echo.bind(tango)(result, foxtrot);
            entity['headerImage'] = foxtrot;
            oscar = oscar[offset];
            verify = verify.bind(tango)(oscar);
            oscar = verify.isAndroid;
            oscar = oscar.bind(verify)();
            if(!oscar) { _fun98623_ip = 513; continue _fun98623 }
 482:
            foxtrot = _closure1_slot5;
            offset = _closure1_slot9;
            verify = {};
            verify['authenticatorSelection'] = sizing;
            verify['setAuthenticator'] = kilo;
            verify['inProgress'] = romeo;
            oscar = foxtrot.bind(tango)(offset, verify);
 513:
            entity['content'] = oscar;
            offset = _closure1_slot5;
            verify = _closure1_slot1;
            foxtrot = _closure1_slot2;
            oscar = 12;
            oscar = foxtrot[oscar];
            verify = verify.bind(tango)(oscar);
            oscar = {};
            kilo = 'primary';
            oscar['variant'] = kilo;
            sizing = _closure1_slot0;
            backup = foxtrot[output];
            backup = sizing.bind(tango)(backup);
            kilo = backup.intl;
            backup = kilo.string;
            foxtrot = foxtrot[output];
            foxtrot = sizing.bind(tango)(foxtrot);
            foxtrot = foxtrot.t;
            foxtrot = foxtrot.Xr3Ekp;
            foxtrot = backup.bind(kilo)(foxtrot);
            oscar['text'] = foxtrot;
            oscar['loading'] = romeo;
            oscar['onPress'] = yankee;
            oscar = offset.bind(tango)(verify, oscar);
            entity['submit'] = oscar;
            oscar = {};
            oscar['mfaChallenge'] = options;
            oscar['finish'] = golf;
            entity['screenProps'] = oscar;
            oscar = 'webauthn';
            entity['mfaMethod'] = oscar;
            entity['error'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['AuthenticatorOption'] = mike;
    return entity;
})();