// app/modules/verification/VerificationUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    golf = mike.UserRequiredActions;
    var _closure1_slot3 = golf;
    mike = mike.VerificationTypes;
    var _closure1_slot4 = mike;
    offset = mike.CAPTCHA;
    foxtrot = mike.EMAIL;
    backup = mike.PHONE;
    romeo = mike.REVERIFY_EMAIL;
    yankee = mike.REVERIFY_PHONE;
    mike = {};
    verify = golf.REQUIRE_VERIFIED_EMAIL;
    options = new Array(1);
    options[0] = foxtrot;
    mike[verify] = options;
    verify = golf.REQUIRE_VERIFIED_PHONE;
    options = new Array(1);
    options[0] = backup;
    mike[verify] = options;
    verify = golf.REQUIRE_REVERIFIED_EMAIL;
    options = new Array(1);
    options[0] = romeo;
    mike[verify] = options;
    verify = golf.REQUIRE_REVERIFIED_PHONE;
    options = new Array(1);
    options[0] = yankee;
    mike[verify] = options;
    verify = golf.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE;
    options = new Array(2);
    options[0] = foxtrot;
    options[1] = backup;
    mike[verify] = options;
    verify = golf.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE;
    options = new Array(2);
    options[0] = backup;
    options[1] = romeo;
    mike[verify] = options;
    verify = golf.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE;
    options = new Array(2);
    options[0] = foxtrot;
    options[1] = yankee;
    mike[verify] = options;
    verify = golf.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE;
    options = new Array(2);
    options[0] = romeo;
    options[1] = yankee;
    mike[verify] = options;
    verify = golf.REQUIRE_CAPTCHA;
    options = new Array(1);
    options[0] = offset;
    mike[verify] = options;
    options = golf.AGREEMENTS;
    golf = new Array(0);
    mike[options] = golf;
    var _closure1_slot5 = mike;
    mike = {};
    golf = function(argFoo, argBar) { // Original name: isPhoneReverification
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            tango = argBar;
            entity = undefined;
            entity = entity !== zulu;
            if(!entity) { _fun00002_ip = 25; continue _fun00001 }
 15:
            mike = zulu.isPhoneVerified;
            entity = mike.bind(zulu)();
 25:
            if(!entity) { _fun00002_ip = 82; continue _fun00001 }
 28:
            mike = _closure1_slot3;
            mike = mike.REQUIRE_REVERIFIED_PHONE;
            mike = tango === mike;
            if(mike) { _fun00002_ip = 62; continue _fun00001 }
 48:
            report = _closure1_slot3;
            report = report.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE;
            mike = tango === report;
 62:
            if(mike) { _fun00002_ip = 79; continue _fun00001 }
 65:
            zulu = _closure1_slot3;
            zulu = zulu.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE;
            mike = tango === zulu;
 79:
            entity = mike;
 82:
            return entity;
        }
    };
    mike['isPhoneReverification'] = golf;
    golf = function(argFoo) { // Original name: isEmailReverification
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argFoo;
            entity = _closure1_slot3;
            entity = entity.REQUIRE_REVERIFIED_EMAIL;
            entity = zulu === entity;
            if(entity) { _fun00004_ip = 37; continue _fun00003 }
 23:
            tango = _closure1_slot3;
            tango = tango.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE;
            entity = zulu === tango;
 37:
            if(entity) { _fun00004_ip = 54; continue _fun00003 }
 40:
            mike = _closure1_slot3;
            mike = mike.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE;
            entity = zulu === mike;
 54:
            return entity;
        }
    };
    mike['isEmailReverification'] = golf;
    golf = function(argFoo) { // Original name: getVerificationTypes
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            entity = null;
            if(!(entity != mike)) { _fun00006_ip = 33; continue _fun00005 }
 9:
            zulu = 'symbol';
            entity = typeof mike;
            if(!(zulu !== entity)) { _fun00006_ip = 33; continue _fun00005 }
 20:
            entity = _closure1_slot5;
            entity = entity[mike];
            _fun00006_ip = 37; continue _fun00005;
 33:
            entity = new Array(0);
 37:
            return entity;
        }
    };
    mike['getVerificationTypes'] = golf;
    golf = function(argFoo) { // Original name: getButtonTitle
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = argFoo;
            mike = _closure1_slot4;
            mike = mike.EMAIL;
            if(!(mike !== zulu)) { _fun00008_ip = 315; continue _fun00007 }
 23:
            mike = _closure1_slot4;
            mike = mike.PHONE;
            if(!(mike !== zulu)) { _fun00008_ip = 254; continue _fun00007 }
 40:
            mike = _closure1_slot4;
            mike = mike.REVERIFY_EMAIL;
            if(!(mike !== zulu)) { _fun00008_ip = 193; continue _fun00007 }
 57:
            mike = _closure1_slot4;
            mike = mike.REVERIFY_PHONE;
            if(!(mike !== zulu)) { _fun00008_ip = 132; continue _fun00007 }
 71:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 1;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.oF6+W1;
            mike = zulu.bind(tango)(mike);
            return mike;
 132:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 1;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.of2129;
            mike = zulu.bind(tango)(mike);
            return mike;
 193:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 1;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.nmdPFR;
            mike = zulu.bind(tango)(mike);
            return mike;
 254:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 1;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.mjJecn;
            mike = zulu.bind(tango)(mike);
            return mike;
 315:
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 1;
            mike = oscar[entity];
            tango = undefined;
            mike = report.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            entity = entity.t;
            entity = entity.1MPz29;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    mike['getButtonTitle'] = golf;
    tango = function(argFoo, argBar) { // Original name: areVerificationTypesEqual
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.isEqual;
        mike = argFoo;
        entity = argBar;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['areVerificationTypesEqual'] = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/verification/VerificationUtils.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();