// app/modules/guild_member_verification/MemberVerificationRolloutExperiment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    yankee = true;
    tango['value'] = yankee;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.GuildFeatures;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = golf[tango];
    options = oscar.bind(entity)(tango);
    report = options.createExperiment;
    tango = {'kind': 'guild', 'id': '2024-11_member_verification_rollout', 'label': 'Member verification rollout'};
    verify = {};
    offset = false;
    verify['enabled'] = offset;
    tango['defaultConfig'] = verify;
    offset = {'id': 1, 'label': 'enabled'};
    verify = {};
    verify['enabled'] = yankee;
    offset['config'] = verify;
    verify = new Array(1);
    verify[0] = offset;
    tango['treatments'] = verify;
    tango = report.bind(options)(tango);
    var _closure1_slot5 = tango;
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_member_verification/MemberVerificationRolloutExperiment.tsx';
    report = oscar.bind(golf)(report);
    zulu['MemberVerificationRolloutExperiment'] = tango;
    tango = function(argFoo, argBar) { // Original name: useMemberVerificationRolloutEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 4;
            report = report[zulu];
            zulu = undefined;
            golf = oscar.bind(zulu)(report);
            oscar = golf.useStateFromStores;
            options = _closure1_slot3;
            report = new Array(2);
            report[0] = options;
            options = _closure1_slot2;
            report[1] = options;
            tango = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot0;
                    zulu = null;
                    mike = zulu != mike;
                    golf = null;
                    if(!mike) { _fun00004_ip = 40; continue _fun00003 }
 18:
                    report = _closure1_slot3;
                    tango = report.getJoinRequestGuild;
                    mike = _closure2_slot0;
                    golf = tango.bind(report)(mike);
 40:
                    mike = _closure2_slot0;
                    mike = zulu != mike;
                    tango = null;
                    if(!mike) { _fun00004_ip = 75; continue _fun00003 }
 53:
                    report = _closure1_slot2;
                    mike = report.getInviteKeyForGuildId;
                    entity = _closure2_slot0;
                    tango = mike.bind(report)(entity);
 75:
                    entity = zulu != tango;
                    report = null;
                    if(!entity) { _fun00004_ip = 119; continue _fun00003 }
 84:
                    mike = _closure1_slot2;
                    entity = mike.getInvite;
                    mike = entity.bind(mike)(tango);
                    tango = zulu == mike;
                    entity = undefined;
                    if(tango) { _fun00004_ip = 116; continue _fun00003 }
 111:
                    entity = mike.guild;
 116:
                    report = entity;
 119:
                    mike = zulu == golf;
                    entity = undefined;
                    if(mike) { _fun00004_ip = 152; continue _fun00003 }
 128:
                    oscar = golf.hasFeature;
                    mike = _closure1_slot4;
                    mike = mike.MEMBER_VERIFICATION_ROLLOUT_TEST;
                    entity = oscar.bind(golf)(mike);
 152:
                    if(entity) { _fun00004_ip = 205; continue _fun00003 }
 155:
                    oscar = zulu == report;
                    mike = undefined;
                    if(oscar) { _fun00004_ip = 202; continue _fun00003 }
 164:
                    report = report.features;
                    zulu = zulu == report;
                    mike = undefined;
                    if(zulu) { _fun00004_ip = 202; continue _fun00003 }
 179:
                    tango = report.includes;
                    zulu = _closure1_slot4;
                    zulu = zulu.MEMBER_VERIFICATION_ROLLOUT_TEST;
                    mike = tango.bind(report)(zulu);
 202:
                    entity = mike;
 205:
                    return entity;
                }
            };
            tango = oscar.bind(golf)(report, tango);
            oscar = _closure1_slot5;
            report = oscar.useExperiment;
            mike = {};
            mike['guildId'] = entity;
            entity = argBar;
            mike['location'] = entity;
            entity = {};
            golf = true;
            entity['autoTrackExposure'] = golf;
            entity = report.bind(oscar)(mike, entity);
            mike = entity.enabled;
            entity = global;
            entity = entity.Boolean;
            if(mike) { _fun00002_ip = 127; continue _fun00001 }
 124:
            mike = tango;
 127:
            entity = entity.bind(zulu)(mike);
            return entity;
        }
    };
    zulu['useMemberVerificationRolloutEnabled'] = tango;
    mike = function(argFoo, argBar) { // Original name: getMemberVerificationRolloutEnabled
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            report = null;
            entity = report != tango;
            options = null;
            if(!entity) { _fun00006_ip = 32; continue _fun00005 }
 14:
            mike = _closure1_slot3;
            entity = mike.getJoinRequestGuild;
            options = entity.bind(mike)(tango);
 32:
            entity = report != tango;
            zulu = null;
            if(!entity) { _fun00006_ip = 59; continue _fun00005 }
 41:
            mike = _closure1_slot2;
            entity = mike.getInviteKeyForGuildId;
            zulu = entity.bind(mike)(tango);
 59:
            entity = report != zulu;
            oscar = null;
            if(!entity) { _fun00006_ip = 103; continue _fun00005 }
 68:
            mike = _closure1_slot2;
            entity = mike.getInvite;
            mike = entity.bind(mike)(zulu);
            zulu = report == mike;
            entity = undefined;
            if(zulu) { _fun00006_ip = 100; continue _fun00005 }
 95:
            entity = mike.guild;
 100:
            oscar = entity;
 103:
            entity = report == options;
            zulu = undefined;
            mike = undefined;
            if(entity) { _fun00006_ip = 138; continue _fun00005 }
 114:
            golf = options.hasFeature;
            entity = _closure1_slot4;
            entity = entity.MEMBER_VERIFICATION_ROLLOUT_TEST;
            mike = golf.bind(options)(entity);
 138:
            if(mike) { _fun00006_ip = 191; continue _fun00005 }
 141:
            golf = report == oscar;
            entity = undefined;
            if(golf) { _fun00006_ip = 188; continue _fun00005 }
 150:
            golf = oscar.features;
            report = report == golf;
            entity = undefined;
            if(report) { _fun00006_ip = 188; continue _fun00005 }
 165:
            oscar = golf.includes;
            report = _closure1_slot4;
            report = report.MEMBER_VERIFICATION_ROLLOUT_TEST;
            entity = oscar.bind(golf)(report);
 188:
            mike = entity;
 191:
            entity = global;
            entity = entity.Boolean;
            if(mike) { _fun00006_ip = 248; continue _fun00005 }
 202:
            golf = _closure1_slot5;
            oscar = golf.getCurrentConfig;
            report = {};
            report['guildId'] = tango;
            tango = argBar;
            report['location'] = tango;
            tango = {};
            options = true;
            tango['autoTrackExposure'] = options;
            tango = oscar.bind(golf)(report, tango);
            mike = tango.enabled;
 248:
            entity = entity.bind(zulu)(mike);
            return entity;
        }
    };
    zulu['getMemberVerificationRolloutEnabled'] = mike;
    return entity;
})();