// app/modules/webauthn/native/WebAuthnUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    verify = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _promptForRegisterCredential
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    golfie = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 142; continue _fun00001 }
 13:
                    oscard = undefined;
                    if(!(golfie === oscard)) { _fun00002_ip = 38; continue _fun00001 }
 19:
                    michal = _closure1_slot4;
                    michal = michal.DCDSecurityKeyManager;
                    golfie = michal.register;
 38:
                    SaveGenerator(address=42);
 40:
                    return oscard;
 42:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 139; continue _fun00001 }
 48:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(oscard)(zuuluu);
                    zuuluu = tangon.startRegisterWebAuthnCredential;
                    zuuluu = zuuluu.bind(tangon)();
                    SaveGenerator(address=85);
 83:
                    return zuuluu;
 85:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 136; continue _fun00001 }
 91:
                    option = zuuluu.ticket;
                    tangon = zuuluu.challenge;
                    report = {};
                    report['ticket'] = option;
                    tangon = golfie.bind(oscard)(tangon);
                    SaveGenerator(address=119);
 117:
                    return tangon;
 119:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscard) { _fun00002_ip = 133; continue _fun00001 }
 125:
                    report['credential'] = tangon;
                    return report;
 133:
                    return tangon;
 136:
                    return zuuluu;
 139:
                    return michal;
 142:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot7 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
    tangon = function(argFoo) { // Original name: registerSecurityKey
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            report = arguments[1];
            zuuluu = undefined;
            if(!(report === zuuluu)) { _fun00004_ip = 33; continue _fun00003 }
 14:
            tangon = _closure1_slot4;
            tangon = tangon.DCDSecurityKeyManager;
            report = tangon.register;
 33:
            var _closure2_slot0 = zuuluu;
            var _closure2_slot1 = zuuluu;
            tangon = michal.onRegisterSuccess;
            golfie = michal.setError;
            _closure2_slot0 = golfie;
            oscard = michal.setRegistering;
            _closure2_slot1 = oscard;
            if(!(zuuluu !== golfie)) { _fun00004_ip = 80; continue _fun00003 }
 71:
            michal = '';
            michal = golfie.bind(zuuluu)(michal);
 80:
            michal = true;
            michal = oscard.bind(zuuluu)(michal);
            michal = function() { // Original name: promptForRegisterCredential
                entity = undefined;
                tangon = _closure1_slot7;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            zuuluu = michal.bind(zuuluu)(report);
            michal = zuuluu.then;
            tangon = michal.bind(zuuluu)(tangon);
            zuuluu = tangon.catch;
            michal = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    zuuluu = _closure2_slot0;
                    tangon = undefined;
                    if(!(tangon !== zuuluu)) { _fun00006_ip = 85; continue _fun00005 }
 16:
                    zuuluu = _closure2_slot0;
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    michal = 6;
                    report = option[michal];
                    report = golfie.bind(tangon)(report);
                    oscard = report.intl;
                    report = oscard.string;
                    michal = option[michal];
                    michal = golfie.bind(tangon)(michal);
                    michal = michal.t;
                    michal = michal.xSCvBQ;
                    michal = report.bind(oscard)(michal);
                    michal = zuuluu.bind(tangon)(michal);
                    throw entity;
 85:
                    throw entity;
                }
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.finally;
            entity = function() {
                zuuluu = _closure2_slot1;
                michal = undefined;
                entity = false;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    entity = function(argFoo) { // Original name: mutateAndroidRegisterChallengeForDiscoverable
        michal = argFoo;
        var _closure2_slot0 = michal;
        entity = function(argFoo) {
            entity = global;
            tangon = entity.JSON;
            zuuluu = tangon.parse;
            michal = argFoo;
            tangon = zuuluu.bind(tangon)(michal);
            michal = tangon.publicKey;
            zuuluu = michal.authenticatorSelection;
            michal = 'required';
            zuuluu['residentKey'] = michal;
            zuuluu = _closure2_slot0;
            michal = entity.JSON;
            entity = michal.stringify;
            michal = entity.bind(michal)(tangon);
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        return entity;
    };
    var _closure1_slot9 = entity;
    option = function(argFoo) { // Original name: registerAndroidCredentialManagerPasskey
        tangon = _closure1_slot8;
        michal = _closure1_slot9;
        entity = _closure1_slot4;
        entity = entity.DCDSecurityKeyManager;
        entity = entity.registerPasskey;
        zuuluu = undefined;
        michal = michal.bind(zuuluu)(entity);
        entity = argFoo;
        entity = tangon.bind(zuuluu)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = option;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = verify.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    verify = oscard[michal];
    michal = argCor;
    michal = michal.bind(entity)(verify);
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.NativeModules;
    var _closure1_slot4 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.WebAuthnScreens;
    var _closure1_slot5 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.jsx;
    var _closure1_slot6 = michal;
    michal = {};
    offset = function() { // Original name: get hasAndroidPasskeySupport
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 7;
            entity = zuuluu[entity];
            oscard = undefined;
            michal = michal.bind(oscard)(entity);
            entity = michal.isAndroid;
            entity = entity.bind(michal)();
            if(!entity) { _fun00008_ip = 81; continue _fun00007 }
 37:
            michal = _closure1_slot4;
            zuuluu = null;
            report = zuuluu == michal;
            michal = undefined;
            if(report) { _fun00008_ip = 77; continue _fun00007 }
 52:
            tangon = _closure1_slot4;
            tangon = tangon.DCDSecurityKeyManager;
            report = zuuluu == tangon;
            michal = undefined;
            if(report) { _fun00008_ip = 77; continue _fun00007 }
 71:
            michal = tangon.registerPasskey;
 77:
            entity = zuuluu != michal;
 81:
            return entity;
        }
    };
    verify = 'hasAndroidPasskeySupport';
    Object.defineProperty(michal, verify, {get: offset, set: entity, enumerable: true});
    verify = function(argFoo) { // Original name: getScreens
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            golfie = entity.isModal;
            entity = {};
            michal = _closure1_slot5;
            oscard = michal.MODAL_UPSELL;
            zuuluu = {};
            option = '';
            zuuluu['title'] = option;
            option = function() { // Original name: render
                tangon = _closure1_slot6;
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 8;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = {};
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            zuuluu['render'] = option;
            entity[oscard] = zuuluu;
            zuuluu = michal.INIT;
            michal = {};
            romeon = _closure1_slot0;
            oscard = _closure1_slot2;
            verify = 6;
            offset = oscard[verify];
            option = undefined;
            offset = romeon.bind(option)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            oscard = oscard[verify];
            oscard = romeon.bind(option)(oscard);
            oscard = oscard.t;
            oscard = oscard.0N1s8/;
            oscard = offset.bind(yankee)(oscard);
            michal['title'] = oscard;
            oscard = function() { // Original name: render
                tangon = _closure1_slot6;
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 9;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = {};
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            michal['render'] = oscard;
            oscard = undefined;
            if(!golfie) { _fun00010_ip = 194; continue _fun00009 }
 141:
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 10;
            offset = backup[offset];
            romeon = yankee.bind(option)(offset);
            yankee = romeon.getHeaderCloseButton;
            foxtra = _closure1_slot1;
            offset = 11;
            offset = backup[offset];
            offset = foxtra.bind(option)(offset);
            offset = offset.closePasskeyUpsellModal;
            oscard = yankee.bind(romeon)(offset);
 194:
            michal['headerLeft'] = oscard;
            entity[zuuluu] = michal;
            michal = _closure1_slot5;
            offset = michal.EDIT;
            zuuluu = {};
            oscard = function(argFoo) { // Original name: render
                tangon = _closure1_slot6;
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 12;
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
            zuuluu['render'] = oscard;
            romeon = _closure1_slot0;
            oscard = _closure1_slot2;
            yankee = oscard[verify];
            yankee = romeon.bind(option)(yankee);
            backup = yankee.intl;
            foxtra = backup.string;
            yankee = oscard[verify];
            yankee = romeon.bind(option)(yankee);
            yankee = yankee.t;
            yankee = yankee.UBBwwM;
            yankee = foxtra.bind(backup)(yankee);
            zuuluu['title'] = yankee;
            entity[offset] = zuuluu;
            offset = michal.REGISTER;
            zuuluu = {};
            yankee = function() { // Original name: render
                tangon = _closure1_slot6;
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 13;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = {};
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            zuuluu['render'] = yankee;
            yankee = oscard[verify];
            yankee = romeon.bind(option)(yankee);
            backup = yankee.intl;
            foxtra = backup.string;
            yankee = oscard[verify];
            yankee = romeon.bind(option)(yankee);
            yankee = yankee.t;
            yankee = yankee.vrOCCg;
            yankee = foxtra.bind(backup)(yankee);
            zuuluu['title'] = yankee;
            entity[offset] = zuuluu;
            zuuluu = michal.NAME;
            michal = {};
            offset = function(argFoo) { // Original name: render
                tangon = _closure1_slot6;
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 14;
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
            michal['render'] = offset;
            offset = oscard[verify];
            offset = romeon.bind(option)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            oscard = oscard[verify];
            oscard = romeon.bind(option)(oscard);
            oscard = oscard.t;
            oscard = oscard.cY/IOj;
            oscard = offset.bind(yankee)(oscard);
            michal['title'] = oscard;
            oscard = undefined;
            if(!golfie) { _fun00010_ip = 494; continue _fun00009 }
 441:
            offset = _closure1_slot0;
            foxtra = _closure1_slot2;
            golfie = 10;
            golfie = foxtra[golfie];
            yankee = offset.bind(option)(golfie);
            offset = yankee.getHeaderCloseButton;
            romeon = _closure1_slot1;
            golfie = 11;
            golfie = foxtra[golfie];
            golfie = romeon.bind(option)(golfie);
            golfie = golfie.closePasskeyUpsellModal;
            oscard = offset.bind(yankee)(golfie);
 494:
            michal['headerLeft'] = oscard;
            entity[zuuluu] = michal;
            michal = _closure1_slot5;
            zuuluu = michal.SUCCESS;
            michal = {};
            report = function() { // Original name: render
                tangon = _closure1_slot6;
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 15;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = {};
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            michal['render'] = report;
            golfie = _closure1_slot0;
            tangon = _closure1_slot2;
            report = tangon[verify];
            report = golfie.bind(option)(report);
            oscard = report.intl;
            report = oscard.string;
            tangon = tangon[verify];
            tangon = golfie.bind(option)(tangon);
            tangon = tangon.t;
            tangon = tangon.Awk3Gx;
            tangon = report.bind(oscard)(tangon);
            michal['title'] = tangon;
            entity[zuuluu] = michal;
            return entity;
        }
    };
    michal['getScreens'] = verify;
    michal['registerAndroidCredentialManagerPasskey'] = option;
    option = function(argFoo) { // Original name: registerAndroidDevicePasskey
        tangon = _closure1_slot8;
        michal = _closure1_slot9;
        entity = _closure1_slot4;
        entity = entity.DCDSecurityKeyManager;
        entity = entity.register;
        zuuluu = undefined;
        michal = michal.bind(zuuluu)(entity);
        entity = argFoo;
        entity = tangon.bind(zuuluu)(entity, michal);
        return entity;
    };
    michal['registerAndroidDevicePasskey'] = option;
    golfie = function(argFoo) { // Original name: registerPasskey
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 7;
            entity = zuuluu[entity];
            zuuluu = undefined;
            report = report.bind(zuuluu)(entity);
            entity = report.isAndroid;
            entity = entity.bind(report)();
            if(entity) { _fun00012_ip = 51; continue _fun00011 }
 40:
            entity = _closure1_slot8;
            entity = entity.bind(zuuluu)(tangon);
            _fun00012_ip = 60; continue _fun00011;
 51:
            michal = _closure1_slot10;
            entity = michal.bind(zuuluu)(tangon);
 60:
            return entity;
        }
    };
    michal['registerPasskey'] = golfie;
    michal['registerSecurityKey'] = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/webauthn/native/WebAuthnUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();