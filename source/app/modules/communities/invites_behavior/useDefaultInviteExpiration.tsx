// app/modules/communities/invites_behavior/useDefaultInviteExpiration.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    mike = function(argFoo) { // Original name: getDefaultInviteExpiration
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            golf = entity.guild;
            mike = entity.experimentConfig;
            entity = null;
            if(!(entity == mike)) { _fun00002_ip = 98; continue _fun00001 }
 20:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 2;
            zulu = report[zulu];
            oscar = undefined;
            zulu = tango.bind(oscar)(zulu);
            report = zulu.CommunityEndlessInvitesExperiment;
            tango = report.getCurrentConfig;
            zulu = {};
            verify = entity == golf;
            if(verify) { _fun00002_ip = 71; continue _fun00001 }
 66:
            oscar = golf.id;
 71:
            if(!(entity == oscar)) { _fun00002_ip = 79; continue _fun00001 }
 75:
            oscar = _closure1_slot4;
 79:
            zulu['guildId'] = oscar;
            oscar = '6798be_1';
            zulu['location'] = oscar;
            mike = tango.bind(report)(zulu);
 98:
            mike = mike.defaultInvitesToNeverExpire;
            report = entity == golf;
            tango = undefined;
            zulu = undefined;
            if(report) { _fun00002_ip = 139; continue _fun00001 }
 115:
            oscar = golf.hasFeature;
            report = _closure1_slot5;
            report = report.HUB;
            zulu = oscar.bind(golf)(report);
 139:
            report = true;
            if(!(report !== zulu)) { _fun00002_ip = 189; continue _fun00001 }
 145:
            entity = entity == golf;
            zulu = undefined;
            if(entity) { _fun00002_ip = 178; continue _fun00001 }
 154:
            oscar = golf.hasFeature;
            entity = _closure1_slot5;
            entity = entity.COMMUNITY;
            zulu = oscar.bind(golf)(entity);
 178:
            entity = undefined;
            if(!(report === zulu)) { _fun00002_ip = 223; continue _fun00001 }
 184:
            entity = undefined;
            if(!mike) { _fun00002_ip = 223; continue _fun00001 }
 189:
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 3;
            mike = report[mike];
            mike = zulu.bind(tango)(mike);
            mike = mike.INVITE_OPTIONS_FOREVER;
            entity = mike.value;
 223:
            return entity;
        }
    };
    var _closure1_slot6 = mike;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot4 = options;
    report = report.GuildFeatures;
    var _closure1_slot5 = report;
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/communities/invites_behavior/useDefaultInviteExpiration.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: useDefaultInviteExpiration
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            var _closure2_slot0 = zulu;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 2;
            entity = tango[entity];
            tango = undefined;
            entity = report.bind(tango)(entity);
            options = entity.CommunityEndlessInvitesExperiment;
            golf = options.useExperiment;
            report = {};
            entity = null;
            verify = zulu;
            if(!(entity == verify)) { _fun00004_ip = 66; continue _fun00003 }
 62:
            verify = _closure1_slot4;
 66:
            report['guildId'] = verify;
            verify = '6798be_2';
            report['location'] = verify;
            report = golf.bind(options)(report);
            options = _closure1_slot0;
            verify = _closure1_slot2;
            golf = 4;
            golf = verify[golf];
            verify = options.bind(tango)(golf);
            options = verify.useStateFromStores;
            offset = _closure1_slot3;
            golf = new Array(1);
            golf[0] = offset;
            oscar = function() {
                zulu = _closure1_slot3;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = options.bind(verify)(golf, oscar);
            entity = entity != zulu;
            if(!entity) { _fun00004_ip = 162; continue _fun00003 }
 142:
            zulu = _closure1_slot6;
            mike = {};
            mike['guild'] = oscar;
            mike['experimentConfig'] = report;
            entity = zulu.bind(tango)(mike);
 162:
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['getDefaultInviteExpiration'] = mike;
    return entity;
})();