// app/modules/guild_verification/GuildVerificationUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.GuildFeatures;
    var _closure1_slot3 = golfie;
    tangon = tangon.Routes;
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_verification/GuildVerificationUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            golfie = tangon.features;
            zuuluu = null;
            report = zuuluu == golfie;
            entity = undefined;
            if(report) { _fun00002_ip = 43; continue _fun00001 }
 20:
            oscard = golfie.includes;
            report = _closure1_slot3;
            report = report.MEMBER_VERIFICATION_GATE_ENABLED;
            entity = oscard.bind(golfie)(report);
 43:
            if(!entity) { _fun00002_ip = 87; continue _fun00001 }
 46:
            report = tangon.features;
            zuuluu = zuuluu == report;
            michal = undefined;
            if(zuuluu) { _fun00002_ip = 84; continue _fun00001 }
 61:
            tangon = report.includes;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            michal = tangon.bind(report)(zuuluu);
 84:
            entity = michal;
 87:
            return entity;
        }
    };
    zuuluu['inviteGuildHasPendingMemberDisabledVerification'] = tangon;
    michal = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot2;
            michal = zuuluu.getRequest;
            michal = michal.bind(zuuluu)(report);
            zuuluu = null;
            if(!(zuuluu != michal)) { _fun00004_ip = 71; continue _fun00003 }
 27:
            zuuluu = michal.applicationStatus;
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 2;
            michal = tangon[michal];
            tangon = undefined;
            michal = oscard.bind(tangon)(michal);
            michal = michal.GuildJoinRequestApplicationStatuses;
            michal = michal.STARTED;
            if(!(zuuluu === michal)) { _fun00004_ip = 106; continue _fun00003 }
 71:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 4;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = oscard.bind(michal)(zuuluu);
            michal = zuuluu.openMemberVerificationModal;
            michal = michal.bind(zuuluu)(report);
            _fun00004_ip = 152; continue _fun00003;
 106:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 3;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.transitionTo;
            tangon = _closure1_slot4;
            entity = tangon.GUILD_MEMBER_VERIFICATION;
            entity = entity.bind(tangon)(report);
            entity = michal.bind(zuuluu)(entity);
 152:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['openVerificationModalOrTransitionToApplication'] = michal;
    return entity;
})();