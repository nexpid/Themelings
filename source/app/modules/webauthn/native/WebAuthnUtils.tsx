// app/modules/webauthn/native/WebAuthnUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    verify = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _promptForRegisterCredential
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    golf = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 142; continue _fun00001 }
 13:
                    oscar = undefined;
                    if(!(golf === oscar)) { _fun00002_ip = 38; continue _fun00001 }
 19:
                    mike = _closure1_slot4;
                    mike = mike.DCDSecurityKeyManager;
                    golf = mike.register;
 38:
                    SaveGenerator(address=42);
 40:
                    return oscar;
 42:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00002_ip = 139; continue _fun00001 }
 48:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 5;
                    zulu = report[zulu];
                    tango = tango.bind(oscar)(zulu);
                    zulu = tango.startRegisterWebAuthnCredential;
                    zulu = zulu.bind(tango)();
                    SaveGenerator(address=85);
 83:
                    return zulu;
 85:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun00002_ip = 136; continue _fun00001 }
 91:
                    options = zulu.ticket;
                    tango = zulu.challenge;
                    report = {};
                    report['ticket'] = options;
                    tango = golf.bind(oscar)(tango);
                    SaveGenerator(address=119);
 117:
                    return tango;
 119:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscar) { _fun00002_ip = 133; continue _fun00001 }
 125:
                    report['credential'] = tango;
                    return report;
 133:
                    return tango;
 136:
                    return zulu;
 139:
                    return mike;
 142:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot7 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot7 = entity;
    tango = function(argFoo) { // Original name: registerSecurityKey
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            report = arguments[1];
            zulu = undefined;
            if(!(report === zulu)) { _fun00004_ip = 33; continue _fun00003 }
 14:
            tango = _closure1_slot4;
            tango = tango.DCDSecurityKeyManager;
            report = tango.register;
 33:
            var _closure2_slot0 = zulu;
            var _closure2_slot1 = zulu;
            tango = mike.onRegisterSuccess;
            golf = mike.setError;
            _closure2_slot0 = golf;
            oscar = mike.setRegistering;
            _closure2_slot1 = oscar;
            if(!(zulu !== golf)) { _fun00004_ip = 80; continue _fun00003 }
 71:
            mike = '';
            mike = golf.bind(zulu)(mike);
 80:
            mike = true;
            mike = oscar.bind(zulu)(mike);
            mike = function() { // Original name: promptForRegisterCredential
                entity = undefined;
                tango = _closure1_slot7;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            zulu = mike.bind(zulu)(report);
            mike = zulu.then;
            tango = mike.bind(zulu)(tango);
            zulu = tango.catch;
            mike = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    zulu = _closure2_slot0;
                    tango = undefined;
                    if(!(tango !== zulu)) { _fun00006_ip = 85; continue _fun00005 }
 16:
                    zulu = _closure2_slot0;
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    mike = 6;
                    report = options[mike];
                    report = golf.bind(tango)(report);
                    oscar = report.intl;
                    report = oscar.string;
                    mike = options[mike];
                    mike = golf.bind(tango)(mike);
                    mike = mike.t;
                    mike = mike.xSCvBQ;
                    mike = report.bind(oscar)(mike);
                    mike = zulu.bind(tango)(mike);
                    throw entity;
 85:
                    throw entity;
                }
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.finally;
            entity = function() {
                zulu = _closure2_slot1;
                mike = undefined;
                entity = false;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot8 = tango;
    entity = function(argFoo) { // Original name: mutateAndroidRegisterChallengeForDiscoverable
        mike = argFoo;
        var _closure2_slot0 = mike;
        entity = function(argFoo) {
            entity = global;
            tango = entity.JSON;
            zulu = tango.parse;
            mike = argFoo;
            tango = zulu.bind(tango)(mike);
            mike = tango.publicKey;
            zulu = mike.authenticatorSelection;
            mike = 'required';
            zulu['residentKey'] = mike;
            zulu = _closure2_slot0;
            mike = entity.JSON;
            entity = mike.stringify;
            mike = entity.bind(mike)(tango);
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        return entity;
    };
    var _closure1_slot9 = entity;
    options = function(argFoo) { // Original name: registerAndroidCredentialManagerPasskey
        tango = _closure1_slot8;
        mike = _closure1_slot9;
        entity = _closure1_slot4;
        entity = entity.DCDSecurityKeyManager;
        entity = entity.registerPasskey;
        zulu = undefined;
        mike = mike.bind(zulu)(entity);
        entity = argFoo;
        entity = tango.bind(zulu)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = options;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = verify.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    verify = oscar[mike];
    mike = argCorge;
    mike = mike.bind(entity)(verify);
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.NativeModules;
    var _closure1_slot4 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.WebAuthnScreens;
    var _closure1_slot5 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.jsx;
    var _closure1_slot6 = mike;
    mike = {};
    offset = function() { // Original name: get hasAndroidPasskeySupport
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 7;
            entity = zulu[entity];
            oscar = undefined;
            mike = mike.bind(oscar)(entity);
            entity = mike.isAndroid;
            entity = entity.bind(mike)();
            if(!entity) { _fun00008_ip = 81; continue _fun00007 }
 37:
            mike = _closure1_slot4;
            zulu = null;
            report = zulu == mike;
            mike = undefined;
            if(report) { _fun00008_ip = 77; continue _fun00007 }
 52:
            tango = _closure1_slot4;
            tango = tango.DCDSecurityKeyManager;
            report = zulu == tango;
            mike = undefined;
            if(report) { _fun00008_ip = 77; continue _fun00007 }
 71:
            mike = tango.registerPasskey;
 77:
            entity = zulu != mike;
 81:
            return entity;
        }
    };
    verify = 'hasAndroidPasskeySupport';
    Object.defineProperty(mike, verify, {get: offset, set: entity, enumerable: true});
    verify = function(argFoo) { // Original name: getScreens
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            golf = entity.isModal;
            entity = {};
            mike = _closure1_slot5;
            oscar = mike.MODAL_UPSELL;
            zulu = {};
            options = '';
            zulu['title'] = options;
            options = function() { // Original name: render
                tango = _closure1_slot6;
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 8;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            zulu['render'] = options;
            entity[oscar] = zulu;
            zulu = mike.INIT;
            mike = {};
            romeo = _closure1_slot0;
            oscar = _closure1_slot2;
            verify = 6;
            offset = oscar[verify];
            options = undefined;
            offset = romeo.bind(options)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            oscar = oscar[verify];
            oscar = romeo.bind(options)(oscar);
            oscar = oscar.t;
            oscar = oscar.0N1s8/;
            oscar = offset.bind(yankee)(oscar);
            mike['title'] = oscar;
            oscar = function() { // Original name: render
                tango = _closure1_slot6;
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 9;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            mike['render'] = oscar;
            oscar = undefined;
            if(!golf) { _fun00010_ip = 194; continue _fun00009 }
 141:
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 10;
            offset = backup[offset];
            romeo = yankee.bind(options)(offset);
            yankee = romeo.getHeaderCloseButton;
            foxtrot = _closure1_slot1;
            offset = 11;
            offset = backup[offset];
            offset = foxtrot.bind(options)(offset);
            offset = offset.closePasskeyUpsellModal;
            oscar = yankee.bind(romeo)(offset);
 194:
            mike['headerLeft'] = oscar;
            entity[zulu] = mike;
            mike = _closure1_slot5;
            offset = mike.EDIT;
            zulu = {};
            oscar = function(argFoo) { // Original name: render
                tango = _closure1_slot6;
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 12;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                oscar = argFoo;
                golf = entity;
                report = copyDataProperties(golf, oscar);
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            zulu['render'] = oscar;
            romeo = _closure1_slot0;
            oscar = _closure1_slot2;
            yankee = oscar[verify];
            yankee = romeo.bind(options)(yankee);
            backup = yankee.intl;
            foxtrot = backup.string;
            yankee = oscar[verify];
            yankee = romeo.bind(options)(yankee);
            yankee = yankee.t;
            yankee = yankee.UBBwwM;
            yankee = foxtrot.bind(backup)(yankee);
            zulu['title'] = yankee;
            entity[offset] = zulu;
            offset = mike.REGISTER;
            zulu = {};
            yankee = function() { // Original name: render
                tango = _closure1_slot6;
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 13;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            zulu['render'] = yankee;
            yankee = oscar[verify];
            yankee = romeo.bind(options)(yankee);
            backup = yankee.intl;
            foxtrot = backup.string;
            yankee = oscar[verify];
            yankee = romeo.bind(options)(yankee);
            yankee = yankee.t;
            yankee = yankee.vrOCCg;
            yankee = foxtrot.bind(backup)(yankee);
            zulu['title'] = yankee;
            entity[offset] = zulu;
            zulu = mike.NAME;
            mike = {};
            offset = function(argFoo) { // Original name: render
                tango = _closure1_slot6;
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 14;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                oscar = argFoo;
                golf = entity;
                report = copyDataProperties(golf, oscar);
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            mike['render'] = offset;
            offset = oscar[verify];
            offset = romeo.bind(options)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            oscar = oscar[verify];
            oscar = romeo.bind(options)(oscar);
            oscar = oscar.t;
            oscar = oscar.cY/IOj;
            oscar = offset.bind(yankee)(oscar);
            mike['title'] = oscar;
            oscar = undefined;
            if(!golf) { _fun00010_ip = 494; continue _fun00009 }
 441:
            offset = _closure1_slot0;
            foxtrot = _closure1_slot2;
            golf = 10;
            golf = foxtrot[golf];
            yankee = offset.bind(options)(golf);
            offset = yankee.getHeaderCloseButton;
            romeo = _closure1_slot1;
            golf = 11;
            golf = foxtrot[golf];
            golf = romeo.bind(options)(golf);
            golf = golf.closePasskeyUpsellModal;
            oscar = offset.bind(yankee)(golf);
 494:
            mike['headerLeft'] = oscar;
            entity[zulu] = mike;
            mike = _closure1_slot5;
            zulu = mike.SUCCESS;
            mike = {};
            report = function() { // Original name: render
                tango = _closure1_slot6;
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 15;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            mike['render'] = report;
            golf = _closure1_slot0;
            tango = _closure1_slot2;
            report = tango[verify];
            report = golf.bind(options)(report);
            oscar = report.intl;
            report = oscar.string;
            tango = tango[verify];
            tango = golf.bind(options)(tango);
            tango = tango.t;
            tango = tango.Awk3Gx;
            tango = report.bind(oscar)(tango);
            mike['title'] = tango;
            entity[zulu] = mike;
            return entity;
        }
    };
    mike['getScreens'] = verify;
    mike['registerAndroidCredentialManagerPasskey'] = options;
    options = function(argFoo) { // Original name: registerAndroidDevicePasskey
        tango = _closure1_slot8;
        mike = _closure1_slot9;
        entity = _closure1_slot4;
        entity = entity.DCDSecurityKeyManager;
        entity = entity.register;
        zulu = undefined;
        mike = mike.bind(zulu)(entity);
        entity = argFoo;
        entity = tango.bind(zulu)(entity, mike);
        return entity;
    };
    mike['registerAndroidDevicePasskey'] = options;
    golf = function(argFoo) { // Original name: registerPasskey
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 7;
            entity = zulu[entity];
            zulu = undefined;
            report = report.bind(zulu)(entity);
            entity = report.isAndroid;
            entity = entity.bind(report)();
            if(entity) { _fun00012_ip = 51; continue _fun00011 }
 40:
            entity = _closure1_slot8;
            entity = entity.bind(zulu)(tango);
            _fun00012_ip = 60; continue _fun00011;
 51:
            mike = _closure1_slot10;
            entity = mike.bind(zulu)(tango);
 60:
            return entity;
        }
    };
    mike['registerPasskey'] = golf;
    mike['registerSecurityKey'] = tango;
    tango = 16;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/webauthn/native/WebAuthnUtils.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();