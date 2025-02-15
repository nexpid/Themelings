// app/modules/guild_member_verification/canReviewGuildMemberApplications.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.GuildFeatures;
    var _closure1_slot4 = golf;
    tango = tango.Permissions;
    var _closure1_slot5 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_member_verification/canReviewGuildMemberApplications.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: canReviewGuildMemberApplications
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = _closure1_slot2;
            mike = tango.getGuild;
            entity = argFoo;
            oscar = mike.bind(tango)(entity);
            entity = null;
            entity = entity != oscar;
            if(!entity) { _fun00002_ip = 82; continue _fun00001 }
 29:
            tango = oscar.hasFeature;
            mike = _closure1_slot4;
            mike = mike.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            mike = tango.bind(oscar)(mike);
            if(!mike) { _fun00002_ip = 79; continue _fun00001 }
 53:
            report = _closure1_slot3;
            tango = report.can;
            zulu = _closure1_slot5;
            zulu = zulu.KICK_MEMBERS;
            mike = tango.bind(report)(zulu, oscar);
 79:
            entity = mike;
 82:
            return entity;
        }
    };
    zulu['canReviewGuildMemberApplications'] = tango;
    mike = function(argFoo) { // Original name: useCanReviewGuildMemberApplications
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 3;
            zulu = report[zulu];
            report = undefined;
            oscar = tango.bind(report)(zulu);
            tango = oscar.useStateFromStores;
            golf = _closure1_slot2;
            zulu = new Array(1);
            zulu[0] = golf;
            entity = function() {
                zulu = _closure1_slot2;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = tango.bind(oscar)(zulu, entity);
            oscar = _closure1_slot3;
            zulu = oscar.can;
            entity = _closure1_slot5;
            entity = entity.KICK_MEMBERS;
            zulu = zulu.bind(oscar)(entity, tango);
            if(zulu) { _fun00004_ip = 119; continue _fun00003 }
 93:
            golf = _closure1_slot3;
            oscar = golf.can;
            entity = _closure1_slot5;
            entity = entity.MANAGE_GUILD;
            zulu = oscar.bind(golf)(entity, tango);
 119:
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun00004_ip = 149; continue _fun00003 }
 128:
            golf = tango.hasFeature;
            oscar = _closure1_slot4;
            oscar = oscar.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            entity = golf.bind(tango)(oscar);
 149:
            if(!entity) { _fun00004_ip = 155; continue _fun00003 }
 152:
            entity = zulu;
 155:
            if(!entity) { _fun00004_ip = 189; continue _fun00003 }
 158:
            zulu = _closure1_slot0;
            oscar = _closure1_slot1;
            mike = 4;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.guildHasVerificationGate;
            entity = mike.bind(zulu)(tango);
 189:
            return entity;
        }
    };
    zulu['useCanReviewGuildMemberApplications'] = mike;
    return entity;
})();