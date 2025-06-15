// app/modules/contact_sync/native/ContactSyncManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
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
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot16 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 7;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 8;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    option = tangon.setStoredContacts;
    var _closure1_slot10 = option;
    option = tangon.deleteStoredContacts;
    var _closure1_slot11 = option;
    tangon = tangon.useContactSyncStore;
    var _closure1_slot12 = tangon;
    tangon = 9;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.ContactPermissions;
    var _closure1_slot13 = tangon;
    tangon = 10;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.PlatformTypes;
    var _closure1_slot14 = tangon;
    tangon = function() {
        tangon = _closure1_slot7;
        zuuluu = undefined;
        michal = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 360; continue _fun00003 }
 10:
                    michal = undefined;
                    golfie = undefined;
                    oscard = undefined;
                    yankee = undefined;
                    tangon = undefined;
                    report = undefined;
                    verify = _closure1_slot0;
                    option = _closure1_slot1;
                    offset = 11;
                    option = option[offset];
                    option = verify.bind(michal)(option);
                    foxtra = option.Storage;
                    option = foxtra.get;
                    verify = 'LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY';
                    romeon = 0;
                    foxtra = option.bind(foxtra)(verify, romeon);
                    option = null;
                    backup = option != foxtra;
                    if(!backup) { _fun00004_ip = 82; continue _fun00003 }
 79:
                    romeon = foxtra;
 82:
                    golfie = romeon;
                    romeon = global;
                    foxtra = romeon.Date;
                    romeon = foxtra.now;
                    oscard = romeon.bind(foxtra)();
 102: // try_start_0
                    romeon = golfie;
                    golfie = 86400000;
                    romeon = romeon + golfie;
                    golfie = oscard;
                    if(!(romeon <= golfie)) { _fun00004_ip = 336; continue _fun00003 }
 125:
                    romeon = _closure1_slot9;
                    golfie = romeon.getCurrentUser;
                    golfie = golfie.bind(romeon)();
                    yankee = golfie;
                    romeon = option == golfie;
                    golfie = undefined;
                    if(romeon) { _fun00004_ip = 156; continue _fun00003 }
 150:
                    golfie = yankee.phone;
 156:
                    tangon = golfie;
                    if(!(option != golfie)) { _fun00004_ip = 344; continue _fun00003 }
 166:
                    romeon = _closure1_slot0;
                    golfie = _closure1_slot1;
                    yankee = 12;
                    golfie = golfie[yankee];
                    foxtra = romeon.bind(michal)(golfie);
                    romeon = foxtra.getContacts;
                    golfie = tangon;
                    backup = _closure1_slot12;
                    tangon = backup.getState;
                    tangon = tangon.bind(backup)();
                    tangon = tangon.storedContacts;
                    tangon = romeon.bind(foxtra)(golfie, tangon);
                    SaveGenerator(address=225);
 223:
                    return tangon;
 225:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golfie) { _fun00004_ip = 341; continue _fun00003 }
 231:
                    foxtra = tangon.names;
                    golfie = tangon.payload;
                    report = golfie;
                    romeon = _closure1_slot10;
                    romeon = romeon.bind(michal)(foxtra);
                    if(!(option != golfie)) { _fun00004_ip = 302; continue _fun00003 }
 258:
                    option = _closure1_slot0;
                    golfie = _closure1_slot1;
                    golfie = golfie[yankee];
                    yankee = option.bind(michal)(golfie);
                    option = yankee.uploadContacts;
                    golfie = report;
                    report = true;
                    report = option.bind(yankee)(golfie, report);
                    SaveGenerator(address=296);
 294:
                    return report;
 296:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golfie) { _fun00004_ip = 338; continue _fun00003 }
 302:
                    option = _closure1_slot0;
                    golfie = _closure1_slot1;
                    golfie = golfie[offset];
                    golfie = option.bind(michal)(golfie);
                    option = golfie.Storage;
                    golfie = option.set;
                    oscard = golfie.bind(option)(verify, oscard);
 336: // try_end0
                    _fun00004_ip = 357; continue _fun00003;
 338:
                    return report;
 341:
                    return tangon;
 344:
                    return michal;
 347: // catch_target0
                    CatchBlockStart(arg_register=3);
                    zuuluu = _closure1_slot11;
                    zuuluu = zuuluu.bind(michal)();
 357:
                    return michal;
 360:
                    return entity;
                }
            };
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot15 = tangon;
    tangon = 14;
    tangon = golfie[tangon];
    report = report.bind(entity)(tangon);
    tangon = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: ContactSyncLifecycleManager
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                report = this;
                foxtra = 0;
                entity = copyRestArgs(foxtra);
                option = _closure1_slot3;
                zuuluu = _closure2_slot0;
                tangon = undefined;
                option = option.bind(tangon)(report, zuuluu);
                offset = new Array(0);
                foxtra = offset;
                romeon = entity;
                yankee = 0;
                entity = arraySpread(foxtra, romeon, yankee);
                entity = _closure1_slot5;
                verify = entity.bind(tangon)(zuuluu);
                zuuluu = _closure1_slot4;
                entity = _closure1_slot16;
                entity = entity.bind(tangon)();
                if(entity) { _fun00006_ip = 86; continue _fun00005 }
 73:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00006_ip = 120; continue _fun00005;
 86:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot5;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 120:
                entity = zuuluu.bind(tangon)(report, entity);
                var _closure3_slot0 = entity;
                zuuluu = {};
                tangon = function() { // Original name: POST_CONNECTION_OPEN
                    michal = _closure3_slot0;
                    entity = michal.handleConnectionOpen;
                    entity = entity.bind(michal)();
                    return entity;
                };
                zuuluu['POST_CONNECTION_OPEN'] = tangon;
                entity['actions'] = zuuluu;
                michal = function() {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        zuuluu = _closure1_slot9;
                        michal = zuuluu.getCurrentUser;
                        zuuluu = michal.bind(zuuluu)();
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00008_ip = 127; continue _fun00007 }
 22:
                        tangon = _closure1_slot8;
                        zuuluu = tangon.getLocalAccount;
                        michal = _closure1_slot14;
                        michal = michal.CONTACTS;
                        oscard = zuuluu.bind(tangon)(michal);
                        report = _closure1_slot0;
                        michal = _closure1_slot1;
                        tangon = 12;
                        michal = michal[tangon];
                        zuuluu = undefined;
                        report = report.bind(zuuluu)(michal);
                        michal = report.isContactSyncEnabled;
                        michal = michal.bind(report)(oscard);
                        if(!michal) { _fun00008_ip = 127; continue _fun00007 }
 83:
                        michal = _closure1_slot0;
                        entity = _closure1_slot1;
                        entity = entity[tangon];
                        michal = michal.bind(zuuluu)(entity);
                        entity = michal.checkContactPermissions;
                        zuuluu = entity.bind(michal)();
                        michal = zuuluu.then;
                        entity = function(argFoo) {
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                michal = _closure1_slot13;
                                zuuluu = michal.AUTHORIZED;
                                michal = argFoo;
                                if(!(michal === zuuluu)) { _fun00010_ip = 60; continue _fun00009 }
 20:
                                zuuluu = _closure1_slot0;
                                michal = _closure1_slot1;
                                entity = 13;
                                michal = michal[entity];
                                entity = undefined;
                                zuuluu = zuuluu.bind(entity)(michal);
                                michal = zuuluu.runAfterInteractions;
                                entity = function() {
                                    michal = _closure1_slot15;
                                    entity = undefined;
                                    entity = michal.bind(entity)();
                                    return entity;
                                };
                                entity = michal.bind(zuuluu)(entity);
 60:
                                entity = undefined;
                                return entity;
                            }
                        };
                        entity = michal.bind(zuuluu)(entity);
 127:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleConnectionOpen'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot6;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot2;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    tangon = tangon.bind(entity)(report);
    report = tangon.prototype;
    report = Object.create(report, {constructor: {value: tangon}});
    foxtra = report;
    tangon = new foxtra[tangon](romeon);
    tangon = tangon instanceof Object ? tangon : report;
    report = 15;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/contact_sync/native/ContactSyncManager.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    tangon = 'LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY';
    zuuluu['LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY'] = tangon;
    michal = function() { // Original name: removeLastUserContactsUpload
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 11;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        tangon = michal.Storage;
        zuuluu = tangon.remove;
        michal = 'LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY';
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['removeLastUserContactsUpload'] = michal;
    return entity;
})();