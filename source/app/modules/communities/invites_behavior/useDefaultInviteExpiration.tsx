// app/modules/communities/invites_behavior/useDefaultInviteExpiration.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    michal = function(argFoo) { // Original name: getDefaultInviteExpiration
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            golfie = entity.guild;
            michal = entity.experimentConfig;
            entity = null;
            if(!(entity == michal)) { _fun00002_ip = 98; continue _fun00001 }
 20:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 2;
            zuuluu = report[zuuluu];
            oscard = undefined;
            zuuluu = tangon.bind(oscard)(zuuluu);
            report = zuuluu.CommunityEndlessInvitesExperiment;
            tangon = report.getCurrentConfig;
            zuuluu = {};
            verify = entity == golfie;
            if(verify) { _fun00002_ip = 71; continue _fun00001 }
 66:
            oscard = golfie.id;
 71:
            if(!(entity == oscard)) { _fun00002_ip = 79; continue _fun00001 }
 75:
            oscard = _closure1_slot4;
 79:
            zuuluu['guildId'] = oscard;
            oscard = '6798be_1';
            zuuluu['location'] = oscard;
            michal = tangon.bind(report)(zuuluu);
 98:
            michal = michal.defaultInvitesToNeverExpire;
            report = entity == golfie;
            tangon = undefined;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 139; continue _fun00001 }
 115:
            oscard = golfie.hasFeature;
            report = _closure1_slot5;
            report = report.HUB;
            zuuluu = oscard.bind(golfie)(report);
 139:
            report = true;
            if(!(report !== zuuluu)) { _fun00002_ip = 189; continue _fun00001 }
 145:
            entity = entity == golfie;
            zuuluu = undefined;
            if(entity) { _fun00002_ip = 178; continue _fun00001 }
 154:
            oscard = golfie.hasFeature;
            entity = _closure1_slot5;
            entity = entity.COMMUNITY;
            zuuluu = oscard.bind(golfie)(entity);
 178:
            entity = undefined;
            if(!(report === zuuluu)) { _fun00002_ip = 223; continue _fun00001 }
 184:
            entity = undefined;
            if(!michal) { _fun00002_ip = 223; continue _fun00001 }
 189:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 3;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.INVITE_OPTIONS_FOREVER;
            entity = michal.value;
 223:
            return entity;
        }
    };
    var _closure1_slot6 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot4 = option;
    report = report.GuildFeatures;
    var _closure1_slot5 = report;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/communities/invites_behavior/useDefaultInviteExpiration.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: useDefaultInviteExpiration
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.guildId;
            var _closure2_slot0 = zuuluu;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 2;
            entity = tangon[entity];
            tangon = undefined;
            entity = report.bind(tangon)(entity);
            option = entity.CommunityEndlessInvitesExperiment;
            golfie = option.useExperiment;
            report = {};
            entity = null;
            verify = zuuluu;
            if(!(entity == verify)) { _fun00004_ip = 66; continue _fun00003 }
 62:
            verify = _closure1_slot4;
 66:
            report['guildId'] = verify;
            verify = '6798be_2';
            report['location'] = verify;
            report = golfie.bind(option)(report);
            option = _closure1_slot0;
            verify = _closure1_slot2;
            golfie = 4;
            golfie = verify[golfie];
            verify = option.bind(tangon)(golfie);
            option = verify.useStateFromStores;
            offset = _closure1_slot3;
            golfie = new Array(1);
            golfie[0] = offset;
            oscard = function() {
                zuuluu = _closure1_slot3;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = option.bind(verify)(golfie, oscard);
            entity = entity != zuuluu;
            if(!entity) { _fun00004_ip = 162; continue _fun00003 }
 142:
            zuuluu = _closure1_slot6;
            michal = {};
            michal['guild'] = oscard;
            michal['experimentConfig'] = report;
            entity = zuuluu.bind(tangon)(michal);
 162:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['getDefaultInviteExpiration'] = michal;
    return entity;
})();