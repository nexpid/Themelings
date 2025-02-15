// app/modules/nuf_channels/native/useCanSeeNUFChannelsForGuild.tsx
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildFeatures;
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildMemberFlags;
    var _closure1_slot6 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/nuf_channels/native/useCanSeeNUFChannelsForGuild.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useCanSeeNUFChannelsForGuild
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 5;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        golf = _closure1_slot4;
        zulu = new Array(3);
        zulu[0] = golf;
        golf = _closure1_slot3;
        zulu[1] = golf;
        mike = _closure1_slot2;
        zulu[2] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            _fun116021: for(var _fun116021_ip = 0; ; ) switch(_fun116021_ip) {
 0:
                zulu = _closure1_slot4;
                entity = zulu.getCurrentUser;
                report = entity.bind(zulu)();
                zulu = null;
                if(!(zulu != report)) { _fun116021_ip = 305; continue _fun116021 }
 25:
                tango = _closure1_slot0;
                oscar = _closure1_slot1;
                entity = 6;
                entity = oscar[entity];
                golf = undefined;
                tango = tango.bind(golf)(entity);
                entity = tango.isNewUser;
                entity = entity.bind(tango)(report);
                if(!entity) { _fun116021_ip = 305; continue _fun116021 }
 64:
                oscar = _closure1_slot3;
                report = oscar.getGuild;
                tango = _closure2_slot0;
                report = report.bind(oscar)(tango);
                if(!(zulu != report)) { _fun116021_ip = 301; continue _fun116021 }
 92:
                oscar = report.hasFeature;
                tango = _closure1_slot5;
                tango = tango.HUB;
                oscar = oscar.bind(report)(tango);
                tango = true;
                if(!(tango !== oscar)) { _fun116021_ip = 301; continue _fun116021 }
 122:
                oscar = _closure1_slot2;
                tango = oscar.getSelfMember;
                entity = _closure2_slot0;
                oscar = tango.bind(oscar)(entity);
                tango = report.hasFeature;
                entity = _closure1_slot5;
                entity = entity.GUILD_ONBOARDING;
                entity = tango.bind(report)(entity);
                if(!entity) { _fun116021_ip = 169; continue _fun116021 }
 165:
                entity = zulu != oscar;
 169:
                if(!entity) { _fun116021_ip = 231; continue _fun116021 }
 172:
                report = _closure1_slot0;
                options = _closure1_slot1;
                tango = 7;
                tango = options[tango];
                verify = report.bind(golf)(tango);
                options = verify.hasFlag;
                tango = oscar.flags;
                offset = zulu != tango;
                report = 0;
                if(!offset) { _fun116021_ip = 215; continue _fun116021 }
 212:
                report = tango;
 215:
                tango = _closure1_slot6;
                tango = tango.STARTED_ONBOARDING;
                entity = options.bind(verify)(report, tango);
 231:
                if(!entity) { _fun116021_ip = 296; continue _fun116021 }
 234:
                report = _closure1_slot0;
                options = _closure1_slot1;
                tango = 7;
                tango = options[tango];
                report = report.bind(golf)(tango);
                tango = report.hasFlag;
                oscar = oscar.flags;
                golf = zulu != oscar;
                zulu = 0;
                if(!golf) { _fun116021_ip = 277; continue _fun116021 }
 274:
                zulu = oscar;
 277:
                mike = _closure1_slot6;
                mike = mike.COMPLETED_ONBOARDING;
                mike = tango.bind(report)(zulu, mike);
                entity = !mike;
 296:
                entity = !entity;
                return entity;
 301:
                entity = false;
                return entity;
 305:
                entity = false;
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useCanSeeNUFChannelsForGuild'] = mike;
    return entity;
})();