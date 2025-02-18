// app/modules/guild_member_verification/canReviewGuildMemberApplications.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.GuildFeatures;
    var _closure1_slot4 = golfie;
    tangon = tangon.Permissions;
    var _closure1_slot5 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_member_verification/canReviewGuildMemberApplications.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: canReviewGuildMemberApplications
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot2;
            michal = tangon.getGuild;
            entity = argFoo;
            oscard = michal.bind(tangon)(entity);
            entity = null;
            entity = entity != oscard;
            if(!entity) { _fun00002_ip = 82; continue _fun00001 }
 29:
            tangon = oscard.hasFeature;
            michal = _closure1_slot4;
            michal = michal.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            michal = tangon.bind(oscard)(michal);
            if(!michal) { _fun00002_ip = 79; continue _fun00001 }
 53:
            report = _closure1_slot3;
            tangon = report.can;
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.KICK_MEMBERS;
            michal = tangon.bind(report)(zuuluu, oscard);
 79:
            entity = michal;
 82:
            return entity;
        }
    };
    zuuluu['canReviewGuildMemberApplications'] = tangon;
    michal = function(argFoo) { // Original name: useCanReviewGuildMemberApplications
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 3;
            zuuluu = report[zuuluu];
            report = undefined;
            oscard = tangon.bind(report)(zuuluu);
            tangon = oscard.useStateFromStores;
            golfie = _closure1_slot2;
            zuuluu = new Array(1);
            zuuluu[0] = golfie;
            entity = function() {
                zuuluu = _closure1_slot2;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = tangon.bind(oscard)(zuuluu, entity);
            oscard = _closure1_slot3;
            zuuluu = oscard.can;
            entity = _closure1_slot5;
            entity = entity.KICK_MEMBERS;
            zuuluu = zuuluu.bind(oscard)(entity, tangon);
            if(zuuluu) { _fun00004_ip = 117; continue _fun00003 }
 91:
            golfie = _closure1_slot3;
            oscard = golfie.can;
            entity = _closure1_slot5;
            entity = entity.MANAGE_GUILD;
            zuuluu = oscard.bind(golfie)(entity, tangon);
 117:
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00004_ip = 147; continue _fun00003 }
 126:
            golfie = tangon.hasFeature;
            oscard = _closure1_slot4;
            oscard = oscard.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            entity = golfie.bind(tangon)(oscard);
 147:
            if(!entity) { _fun00004_ip = 153; continue _fun00003 }
 150:
            entity = zuuluu;
 153:
            if(!entity) { _fun00004_ip = 187; continue _fun00003 }
 156:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 4;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.guildHasVerificationGate;
            entity = michal.bind(zuuluu)(tangon);
 187:
            return entity;
        }
    };
    zuuluu['useCanReviewGuildMemberApplications'] = michal;
    return entity;
})();