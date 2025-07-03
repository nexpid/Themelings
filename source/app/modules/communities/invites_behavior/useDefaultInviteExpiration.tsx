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
            tangon = entity.guild;
            michal = entity.experimentConfig;
            entity = null;
            if(!(entity == michal)) { _fun00002_ip = 98; continue _fun00001 }
 20:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 2;
            zuuluu = oscard[zuuluu];
            golfie = undefined;
            zuuluu = report.bind(golfie)(zuuluu);
            oscard = zuuluu.CommunityEndlessInvitesExperiment;
            report = oscard.getCurrentConfig;
            zuuluu = {};
            verify = entity == tangon;
            if(verify) { _fun00002_ip = 71; continue _fun00001 }
 66:
            golfie = tangon.id;
 71:
            if(!(entity == golfie)) { _fun00002_ip = 79; continue _fun00001 }
 75:
            golfie = _closure1_slot4;
 79:
            zuuluu['guildId'] = golfie;
            golfie = '6798be_1';
            zuuluu['location'] = golfie;
            michal = report.bind(oscard)(zuuluu);
 98:
            michal = michal.defaultInvitesToNeverExpire;
            if(!(entity != tangon)) { _fun00002_ip = 140; continue _fun00001 }
 108:
            oscard = tangon.features;
            report = oscard.has;
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.HUB;
            zuuluu = report.bind(oscard)(zuuluu);
            if(zuuluu) { _fun00002_ip = 188; continue _fun00001 }
 140:
            report = entity != tangon;
            entity = undefined;
            if(!report) { _fun00002_ip = 224; continue _fun00001 }
 149:
            oscard = tangon.features;
            report = oscard.has;
            tangon = _closure1_slot5;
            tangon = tangon.COMMUNITY;
            tangon = report.bind(oscard)(tangon);
            entity = undefined;
            if(!tangon) { _fun00002_ip = 224; continue _fun00001 }
 183:
            entity = undefined;
            if(!michal) { _fun00002_ip = 224; continue _fun00001 }
 188:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 3;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            michal = michal.INVITE_OPTIONS_FOREVER;
            entity = michal.value;
 224:
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
            if(!entity) { _fun00004_ip = 160; continue _fun00003 }
 140:
            zuuluu = _closure1_slot6;
            michal = {};
            michal['guild'] = oscard;
            michal['experimentConfig'] = report;
            entity = zuuluu.bind(tangon)(michal);
 160:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['getDefaultInviteExpiration'] = michal;
    return entity;
})();