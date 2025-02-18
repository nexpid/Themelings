// app/modules/guild_member_verification/MemberVerificationRolloutExperiment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    yankee = true;
    tangon['value'] = yankee;
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
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.GuildFeatures;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    option = oscard.bind(entity)(tangon);
    report = option.createExperiment;
    tangon = {'kind': 'guild', 'id': '2024-11_member_verification_rollout', 'label': 'Member verification rollout'};
    verify = {};
    offset = false;
    verify['enabled'] = offset;
    tangon['defaultConfig'] = verify;
    offset = {'id': 1, 'label': 'enabled'};
    verify = {};
    verify['enabled'] = yankee;
    offset['config'] = verify;
    verify = new Array(1);
    verify[0] = offset;
    tangon['treatments'] = verify;
    tangon = report.bind(option)(tangon);
    var _closure1_slot5 = tangon;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_member_verification/MemberVerificationRolloutExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['MemberVerificationRolloutExperiment'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useMemberVerificationRolloutEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 4;
            report = report[zuuluu];
            zuuluu = undefined;
            golfie = oscard.bind(zuuluu)(report);
            oscard = golfie.useStateFromStores;
            option = _closure1_slot3;
            report = new Array(2);
            report[0] = option;
            option = _closure1_slot2;
            report[1] = option;
            tangon = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot0;
                    zuuluu = null;
                    michal = zuuluu != michal;
                    golfie = null;
                    if(!michal) { _fun00004_ip = 40; continue _fun00003 }
 18:
                    report = _closure1_slot3;
                    tangon = report.getJoinRequestGuild;
                    michal = _closure2_slot0;
                    golfie = tangon.bind(report)(michal);
 40:
                    michal = _closure2_slot0;
                    michal = zuuluu != michal;
                    tangon = null;
                    if(!michal) { _fun00004_ip = 75; continue _fun00003 }
 53:
                    report = _closure1_slot2;
                    michal = report.getInviteKeyForGuildId;
                    entity = _closure2_slot0;
                    tangon = michal.bind(report)(entity);
 75:
                    entity = zuuluu != tangon;
                    report = null;
                    if(!entity) { _fun00004_ip = 119; continue _fun00003 }
 84:
                    michal = _closure1_slot2;
                    entity = michal.getInvite;
                    michal = entity.bind(michal)(tangon);
                    tangon = zuuluu == michal;
                    entity = undefined;
                    if(tangon) { _fun00004_ip = 116; continue _fun00003 }
 111:
                    entity = michal.guild;
 116:
                    report = entity;
 119:
                    michal = zuuluu == golfie;
                    entity = undefined;
                    if(michal) { _fun00004_ip = 152; continue _fun00003 }
 128:
                    oscard = golfie.hasFeature;
                    michal = _closure1_slot4;
                    michal = michal.MEMBER_VERIFICATION_ROLLOUT_TEST;
                    entity = oscard.bind(golfie)(michal);
 152:
                    if(entity) { _fun00004_ip = 205; continue _fun00003 }
 155:
                    oscard = zuuluu == report;
                    michal = undefined;
                    if(oscard) { _fun00004_ip = 202; continue _fun00003 }
 164:
                    report = report.features;
                    zuuluu = zuuluu == report;
                    michal = undefined;
                    if(zuuluu) { _fun00004_ip = 202; continue _fun00003 }
 179:
                    tangon = report.includes;
                    zuuluu = _closure1_slot4;
                    zuuluu = zuuluu.MEMBER_VERIFICATION_ROLLOUT_TEST;
                    michal = tangon.bind(report)(zuuluu);
 202:
                    entity = michal;
 205:
                    return entity;
                }
            };
            tangon = oscard.bind(golfie)(report, tangon);
            oscard = _closure1_slot5;
            report = oscard.useExperiment;
            michal = {};
            michal['guildId'] = entity;
            entity = argBar;
            michal['location'] = entity;
            entity = {};
            golfie = true;
            entity['autoTrackExposure'] = golfie;
            entity = report.bind(oscard)(michal, entity);
            michal = entity.enabled;
            entity = global;
            entity = entity.Boolean;
            if(michal) { _fun00002_ip = 127; continue _fun00001 }
 124:
            michal = tangon;
 127:
            entity = entity.bind(zuuluu)(michal);
            return entity;
        }
    };
    zuuluu['useMemberVerificationRolloutEnabled'] = tangon;
    michal = function(argFoo, argBar) { // Original name: getMemberVerificationRolloutEnabled
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            report = null;
            entity = report != tangon;
            option = null;
            if(!entity) { _fun00006_ip = 32; continue _fun00005 }
 14:
            michal = _closure1_slot3;
            entity = michal.getJoinRequestGuild;
            option = entity.bind(michal)(tangon);
 32:
            entity = report != tangon;
            zuuluu = null;
            if(!entity) { _fun00006_ip = 59; continue _fun00005 }
 41:
            michal = _closure1_slot2;
            entity = michal.getInviteKeyForGuildId;
            zuuluu = entity.bind(michal)(tangon);
 59:
            entity = report != zuuluu;
            oscard = null;
            if(!entity) { _fun00006_ip = 103; continue _fun00005 }
 68:
            michal = _closure1_slot2;
            entity = michal.getInvite;
            michal = entity.bind(michal)(zuuluu);
            zuuluu = report == michal;
            entity = undefined;
            if(zuuluu) { _fun00006_ip = 100; continue _fun00005 }
 95:
            entity = michal.guild;
 100:
            oscard = entity;
 103:
            entity = report == option;
            zuuluu = undefined;
            michal = undefined;
            if(entity) { _fun00006_ip = 138; continue _fun00005 }
 114:
            golfie = option.hasFeature;
            entity = _closure1_slot4;
            entity = entity.MEMBER_VERIFICATION_ROLLOUT_TEST;
            michal = golfie.bind(option)(entity);
 138:
            if(michal) { _fun00006_ip = 191; continue _fun00005 }
 141:
            golfie = report == oscard;
            entity = undefined;
            if(golfie) { _fun00006_ip = 188; continue _fun00005 }
 150:
            golfie = oscard.features;
            report = report == golfie;
            entity = undefined;
            if(report) { _fun00006_ip = 188; continue _fun00005 }
 165:
            oscard = golfie.includes;
            report = _closure1_slot4;
            report = report.MEMBER_VERIFICATION_ROLLOUT_TEST;
            entity = oscard.bind(golfie)(report);
 188:
            michal = entity;
 191:
            entity = global;
            entity = entity.Boolean;
            if(michal) { _fun00006_ip = 248; continue _fun00005 }
 202:
            golfie = _closure1_slot5;
            oscard = golfie.getCurrentConfig;
            report = {};
            report['guildId'] = tangon;
            tangon = argBar;
            report['location'] = tangon;
            tangon = {};
            option = true;
            tangon['autoTrackExposure'] = option;
            tangon = oscard.bind(golfie)(report, tangon);
            michal = tangon.enabled;
 248:
            entity = entity.bind(zuuluu)(michal);
            return entity;
        }
    };
    zuuluu['getMemberVerificationRolloutEnabled'] = michal;
    return entity;
})();