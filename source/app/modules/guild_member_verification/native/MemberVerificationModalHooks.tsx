// app/modules/guild_member_verification/native/MemberVerificationModalHooks.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    offset = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    tangon = function() { // Original name: useUserVerificationState
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStoresObject;
        entity = _closure1_slot3;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure1_slot3;
                entity = michal.getCurrentUser;
                oscard = entity.bind(michal)();
                entity = {};
                report = _closure1_slot0;
                michal = _closure1_slot1;
                golfie = 4;
                michal = michal[golfie];
                tangon = undefined;
                michal = report.bind(tangon)(michal);
                michal = michal.UserVerificationFieldPlatforms;
                option = michal.EMAIL;
                michal = null;
                report = michal == oscard;
                verify = undefined;
                if(report) { _fun00002_ip = 69; continue _fun00001 }
 63:
                verify = oscard.verified;
 69:
                report = michal != verify;
                if(!report) { _fun00002_ip = 79; continue _fun00001 }
 76:
                report = verify;
 79:
                entity[option] = report;
                report = _closure1_slot0;
                zuuluu = _closure1_slot1;
                zuuluu = zuuluu[golfie];
                zuuluu = report.bind(tangon)(zuuluu);
                zuuluu = zuuluu.UserVerificationFieldPlatforms;
                zuuluu = zuuluu.PHONE;
                report = michal == oscard;
                tangon = undefined;
                if(report) { _fun00002_ip = 132; continue _fun00001 }
 122:
                report = oscard.isPhoneVerified;
                tangon = report.bind(oscard)();
 132:
                michal = michal != tangon;
                if(!michal) { _fun00002_ip = 142; continue _fun00001 }
 139:
                michal = tangon;
 142:
                entity[zuuluu] = michal;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot6 = tangon;
    michal = function(argFoo) { // Original name: useInitialVerification
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        michal = _closure1_slot4;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.getInitialVerificationState;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    var _closure1_slot7 = michal;
    entity = global;
    yankee = entity.Object;
    verify = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    verify = option[entity];
    oscard = argCor;
    entity = undefined;
    oscard = oscard.bind(entity)(verify);
    var _closure1_slot2 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = offset.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 2;
    verify = option[oscard];
    verify = offset.bind(entity)(verify);
    var _closure1_slot4 = verify;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.setInitialVerification;
    var _closure1_slot5 = oscard;
    oscard = 5;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/guild_member_verification/native/MemberVerificationModalHooks.tsx';
    oscard = golfie.bind(option)(oscard);
    report = function(argFoo) { // Original name: useSetInitialVerificationEffect
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        entity = {};
        tangon = _closure1_slot7;
        report = undefined;
        tangon = tangon.bind(report)(oscard);
        entity['initial'] = tangon;
        tangon = _closure1_slot6;
        tangon = tangon.bind(report)();
        entity['current'] = tangon;
        var _closure2_slot1 = entity;
        report = _closure1_slot2;
        zuuluu = report.useRef;
        zuuluu = zuuluu.bind(report)(entity);
        var _closure2_slot2 = zuuluu;
        tangon = report.useEffect;
        zuuluu = function() {
            michal = _closure2_slot2;
            entity = _closure2_slot1;
            michal['current'] = entity;
            entity = undefined;
            return entity;
        };
        zuuluu = tangon.bind(report)(zuuluu);
        tangon = report.useEffect;
        zuuluu = new Array(1);
        zuuluu[0] = oscard;
        michal = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = _closure2_slot2;
                michal = michal.current;
                tangon = michal.current;
                zuuluu = michal.initial;
                michal = null;
                if(!(michal == zuuluu)) { _fun00004_ip = 48; continue _fun00003 }
 29:
                zuuluu = _closure1_slot5;
                michal = _closure2_slot0;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal, tangon);
 48:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        entity = entity.initial;
        return entity;
    };
    zuuluu['useSetInitialVerificationEffect'] = report;
    zuuluu['useUserVerificationState'] = tangon;
    zuuluu['useInitialVerification'] = michal;
    return entity;
})();