// app/modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx
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
    golfie = michal.MEMBER_VERIFICATION_TYPE;
    var _closure1_slot3 = golfie;
    michal = michal.IN_APP_MEMBER_VERIFICATION_MODAL_KEY;
    var _closure1_slot4 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.AnalyticEvents;
    var _closure1_slot5 = michal;
    michal = {};
    golfie = function(argFoo, argBar) { // Original name: openMemberVerificationModal
        golfie = argFoo;
        report = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 3;
        tangon = zuuluu[entity];
        entity = undefined;
        oscard = report.bind(entity)(tangon);
        tangon = oscard.fetchVerificationForm;
        tangon = tangon.bind(oscard)(golfie);
        tangon = 2;
        tangon = zuuluu[tangon];
        verify = report.bind(entity)(tangon);
        option = verify.track;
        tangon = _closure1_slot5;
        oscard = tangon.OPEN_MODAL;
        tangon = {};
        offset = _closure1_slot3;
        tangon['type'] = offset;
        tangon['guild_id'] = golfie;
        tangon = option.bind(verify)(oscard, tangon);
        tangon = 4;
        tangon = zuuluu[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.pushLazy;
        option = _closure1_slot0;
        tangon = 6;
        tangon = zuuluu[tangon];
        option = option.bind(entity)(tangon);
        tangon = 5;
        tangon = zuuluu[tangon];
        zuuluu = zuuluu.paths;
        tangon = option.bind(entity)(tangon, zuuluu);
        zuuluu = {};
        zuuluu['guildId'] = golfie;
        golfie = argBar;
        zuuluu['onClose'] = golfie;
        michal = _closure1_slot4;
        michal = report.bind(oscard)(tangon, zuuluu, michal);
        return entity;
    };
    michal['openMemberVerificationModal'] = golfie;
    tangon = function() { // Original name: closeMemberVerificationModal
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = arguments[0];
            entity = undefined;
            if(!(michal === entity)) { _fun00002_ip = 11; continue _fun00001 }
 9:
            michal = false;
 11:
            if(michal) { _fun00002_ip = 68; continue _fun00001 }
 14:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 2;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.track;
            michal = _closure1_slot5;
            zuuluu = michal.MODAL_DISMISSED;
            michal = {};
            oscard = _closure1_slot3;
            michal['type'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
 68:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 4;
            zuuluu = report[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.popWithKey;
            michal = _closure1_slot4;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal['closeMemberVerificationModal'] = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();