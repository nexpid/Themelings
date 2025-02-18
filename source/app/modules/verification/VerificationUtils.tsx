// app/modules/verification/VerificationUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    golfie = michal.UserRequiredActions;
    var _closure1_slot3 = golfie;
    michal = michal.VerificationTypes;
    var _closure1_slot4 = michal;
    offset = michal.CAPTCHA;
    foxtra = michal.EMAIL;
    backup = michal.PHONE;
    romeon = michal.REVERIFY_EMAIL;
    yankee = michal.REVERIFY_PHONE;
    michal = {};
    verify = golfie.REQUIRE_VERIFIED_EMAIL;
    option = new Array(1);
    option[0] = foxtra;
    michal[verify] = option;
    verify = golfie.REQUIRE_VERIFIED_PHONE;
    option = new Array(1);
    option[0] = backup;
    michal[verify] = option;
    verify = golfie.REQUIRE_REVERIFIED_EMAIL;
    option = new Array(1);
    option[0] = romeon;
    michal[verify] = option;
    verify = golfie.REQUIRE_REVERIFIED_PHONE;
    option = new Array(1);
    option[0] = yankee;
    michal[verify] = option;
    verify = golfie.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE;
    option = new Array(2);
    option[0] = foxtra;
    option[1] = backup;
    michal[verify] = option;
    verify = golfie.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE;
    option = new Array(2);
    option[0] = backup;
    option[1] = romeon;
    michal[verify] = option;
    verify = golfie.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE;
    option = new Array(2);
    option[0] = foxtra;
    option[1] = yankee;
    michal[verify] = option;
    verify = golfie.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE;
    option = new Array(2);
    option[0] = romeon;
    option[1] = yankee;
    michal[verify] = option;
    verify = golfie.REQUIRE_CAPTCHA;
    option = new Array(1);
    option[0] = offset;
    michal[verify] = option;
    option = golfie.AGREEMENTS;
    golfie = new Array(0);
    michal[option] = golfie;
    var _closure1_slot5 = michal;
    michal = {};
    golfie = function(argFoo, argBar) { // Original name: isPhoneReverification
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            tangon = argBar;
            entity = undefined;
            entity = entity !== zuuluu;
            if(!entity) { _fun00002_ip = 25; continue _fun00001 }
 15:
            michal = zuuluu.isPhoneVerified;
            entity = michal.bind(zuuluu)();
 25:
            if(!entity) { _fun00002_ip = 82; continue _fun00001 }
 28:
            michal = _closure1_slot3;
            michal = michal.REQUIRE_REVERIFIED_PHONE;
            michal = tangon === michal;
            if(michal) { _fun00002_ip = 62; continue _fun00001 }
 48:
            report = _closure1_slot3;
            report = report.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE;
            michal = tangon === report;
 62:
            if(michal) { _fun00002_ip = 79; continue _fun00001 }
 65:
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE;
            michal = tangon === zuuluu;
 79:
            entity = michal;
 82:
            return entity;
        }
    };
    michal['isPhoneReverification'] = golfie;
    golfie = function(argFoo) { // Original name: isEmailReverification
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            entity = _closure1_slot3;
            entity = entity.REQUIRE_REVERIFIED_EMAIL;
            entity = zuuluu === entity;
            if(entity) { _fun00004_ip = 37; continue _fun00003 }
 23:
            tangon = _closure1_slot3;
            tangon = tangon.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE;
            entity = zuuluu === tangon;
 37:
            if(entity) { _fun00004_ip = 54; continue _fun00003 }
 40:
            michal = _closure1_slot3;
            michal = michal.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE;
            entity = zuuluu === michal;
 54:
            return entity;
        }
    };
    michal['isEmailReverification'] = golfie;
    golfie = function(argFoo) { // Original name: getVerificationTypes
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            entity = null;
            if(!(entity != michal)) { _fun00006_ip = 33; continue _fun00005 }
 9:
            zuuluu = 'symbol';
            entity = typeof michal;
            if(!(zuuluu !== entity)) { _fun00006_ip = 33; continue _fun00005 }
 20:
            entity = _closure1_slot5;
            entity = entity[michal];
            _fun00006_ip = 37; continue _fun00005;
 33:
            entity = new Array(0);
 37:
            return entity;
        }
    };
    michal['getVerificationTypes'] = golfie;
    golfie = function(argFoo) { // Original name: getButtonTitle
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot4;
            michal = michal.EMAIL;
            if(!(michal !== zuuluu)) { _fun00008_ip = 315; continue _fun00007 }
 23:
            michal = _closure1_slot4;
            michal = michal.PHONE;
            if(!(michal !== zuuluu)) { _fun00008_ip = 254; continue _fun00007 }
 40:
            michal = _closure1_slot4;
            michal = michal.REVERIFY_EMAIL;
            if(!(michal !== zuuluu)) { _fun00008_ip = 193; continue _fun00007 }
 57:
            michal = _closure1_slot4;
            michal = michal.REVERIFY_PHONE;
            if(!(michal !== zuuluu)) { _fun00008_ip = 132; continue _fun00007 }
 71:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 1;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.oF6+W1;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 132:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 1;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.of2129;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 193:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 1;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.nmdPFR;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 254:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 1;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.mjJecn;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 315:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 1;
            michal = oscard[entity];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.1MPz29;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    michal['getButtonTitle'] = golfie;
    tangon = function(argFoo, argBar) { // Original name: areVerificationTypesEqual
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.isEqual;
        michal = argFoo;
        entity = argBar;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['areVerificationTypesEqual'] = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/verification/VerificationUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();