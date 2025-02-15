// app/modules/guild_onboarding_home/hasPendingMemberAction.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    entity = argCorge;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildFeatures;
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildMemberFlags;
    var _closure1_slot9 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_onboarding_home/hasPendingMemberAction.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: hasPendingMemberAction
        _fun105763: for(var _fun105763_ip = 0; ; ) switch(_fun105763_ip) {
 0:
            zulu = _closure1_slot5;
            mike = zulu.getGuild;
            entity = argFoo;
            zulu = mike.bind(zulu)(entity);
            report = _closure1_slot3;
            mike = report.getChannel;
            entity = argBar;
            mike = mike.bind(report)(entity);
            oscar = null;
            entity = oscar != zulu;
            if(!entity) { _fun105763_ip = 50; continue _fun105763 }
 46:
            entity = oscar != mike;
 50:
            if(!entity) { _fun105763_ip = 80; continue _fun105763 }
 53:
            options = _closure1_slot0;
            golf = _closure1_slot2;
            report = 7;
            report = golf[report];
            golf = undefined;
            report = options.bind(golf)(report);
            entity = report.bind(golf)(zulu);
 80:
            if(!entity) { _fun105763_ip = 104; continue _fun105763 }
 83:
            golf = zulu.hasFeature;
            report = _closure1_slot8;
            report = report.GUILD_SERVER_GUIDE;
            entity = golf.bind(zulu)(report);
 104:
            if(!entity) { _fun105763_ip = 198; continue _fun105763 }
 107:
            options = _closure1_slot1;
            golf = _closure1_slot2;
            report = 8;
            golf = golf[report];
            report = undefined;
            options = options.bind(report)(golf);
            golf = options.hasFlag;
            yankee = _closure1_slot4;
            offset = yankee.getSelfMember;
            verify = zulu.id;
            verify = offset.bind(yankee)(verify);
            offset = oscar == verify;
            if(offset) { _fun105763_ip = 167; continue _fun105763 }
 162:
            report = verify.flags;
 167:
            verify = oscar != report;
            oscar = 0;
            if(!verify) { _fun105763_ip = 179; continue _fun105763 }
 176:
            oscar = report;
 179:
            report = _closure1_slot9;
            report = report.COMPLETED_HOME_ACTIONS;
            report = golf.bind(options)(oscar, report);
            entity = !report;
 198:
            if(!entity) { _fun105763_ip = 229; continue _fun105763 }
 201:
            options = _closure1_slot6;
            golf = options.hasMemberAction;
            oscar = zulu.id;
            report = mike.id;
            entity = golf.bind(options)(oscar, report);
 229:
            if(!entity) { _fun105763_ip = 263; continue _fun105763 }
 232:
            report = _closure1_slot7;
            tango = report.hasCompletedActionForChannel;
            zulu = zulu.id;
            mike = mike.id;
            mike = tango.bind(report)(zulu, mike);
            entity = !mike;
 263:
            return entity;
        }
    };
    zulu['hasPendingMemberAction'] = mike;
    return entity;
})();