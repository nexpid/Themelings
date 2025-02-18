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
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_verification/GuildVerificationUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 2;
            entity = zuuluu[entity];
            zuuluu = undefined;
            golfie = michal.bind(zuuluu)(entity);
            report = golfie.getMemberVerificationRolloutEnabled;
            michal = oscard.id;
            entity = 'invite';
            entity = report.bind(golfie)(michal, entity);
            verify = oscard.features;
            report = null;
            golfie = report == verify;
            if(entity) { _fun00002_ip = 130; continue _fun00001 }
 64:
            entity = undefined;
            if(golfie) { _fun00002_ip = 89; continue _fun00001 }
 69:
            option = verify.includes;
            michal = _closure1_slot3;
            michal = michal.MEMBER_VERIFICATION_GATE_ENABLED;
            entity = option.bind(verify)(michal);
 89:
            if(!entity) { _fun00002_ip = 128; continue _fun00001 }
 92:
            yankee = oscard.features;
            michal = report != yankee;
            if(!michal) { _fun00002_ip = 125; continue _fun00001 }
 105:
            offset = yankee.includes;
            option = _closure1_slot3;
            option = option.PREVIEW_ENABLED;
            michal = offset.bind(yankee)(option);
 125:
            entity = !michal;
 128:
            _fun00002_ip = 199; continue _fun00001;
 130:
            michal = undefined;
            if(golfie) { _fun00002_ip = 155; continue _fun00001 }
 135:
            option = verify.includes;
            golfie = _closure1_slot3;
            golfie = golfie.MEMBER_VERIFICATION_GATE_ENABLED;
            michal = option.bind(verify)(golfie);
 155:
            if(!michal) { _fun00002_ip = 196; continue _fun00001 }
 158:
            oscard = oscard.features;
            report = report == oscard;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 193; continue _fun00001 }
 173:
            report = oscard.includes;
            tangon = _closure1_slot3;
            tangon = tangon.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            zuuluu = report.bind(oscard)(tangon);
 193:
            michal = zuuluu;
 196:
            entity = michal;
 199:
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
            michal = 3;
            michal = tangon[michal];
            tangon = undefined;
            michal = oscard.bind(tangon)(michal);
            michal = michal.GuildJoinRequestApplicationStatuses;
            michal = michal.STARTED;
            if(!(zuuluu === michal)) { _fun00004_ip = 106; continue _fun00003 }
 71:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 5;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = oscard.bind(michal)(zuuluu);
            michal = zuuluu.openMemberVerificationModal;
            michal = michal.bind(zuuluu)(report);
            _fun00004_ip = 152; continue _fun00003;
 106:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 4;
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