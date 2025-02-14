// app/modules/guild_onboarding/DefaultChannelUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argCorge;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: getDefaultPermissionsForChannel
        _fun60227: for(var _fun60227_ip = 0; ; ) switch(_fun60227_ip) {
 0:
            entity = argFoo;
            mike = null;
            if(!(mike != entity)) { _fun60227_ip = 40; continue _fun60227 }
 9:
            zulu = _closure1_slot5;
            tango = zulu.GUILD_VOCAL;
            zulu = tango.has;
            entity = entity.type;
            entity = zulu.bind(tango)(entity);
            if(entity) { _fun60227_ip = 55; continue _fun60227 }
 40:
            entity = _closure1_slot6;
            entity = entity.VIEW_CHANNEL;
            _fun60227_ip = 109; continue _fun60227;
 55:
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 3;
            tango = tango[zulu];
            zulu = undefined;
            report = report.bind(zulu)(tango);
            tango = report.combine;
            zulu = _closure1_slot6;
            zulu = zulu.VIEW_CHANNEL;
            mike = _closure1_slot6;
            mike = mike.CONNECT;
            entity = tango.bind(report)(zulu, mike);
 109:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
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
    tango = report.bind(entity)(tango);
    golf = tango.ChannelTypesSets;
    var _closure1_slot5 = golf;
    tango = tango.Permissions;
    var _closure1_slot6 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_onboarding/DefaultChannelUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: useCanChannelBeDefault
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 4;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        oscar = _closure1_slot3;
        mike = new Array(2);
        mike[0] = oscar;
        report = _closure1_slot4;
        mike[1] = report;
        entity = function() {
            _fun60229: for(var _fun60229_ip = 0; ; ) switch(_fun60229_ip) {
 0:
                tango = _closure1_slot4;
                zulu = tango.getChannel;
                options = _closure2_slot1;
                report = zulu.bind(tango)(options);
                zulu = _closure1_slot7;
                oscar = undefined;
                tango = zulu.bind(oscar)(report);
                golf = _closure1_slot3;
                zulu = golf.isChannelGated;
                entity = _closure2_slot0;
                entity = zulu.bind(golf)(entity, options);
                if(entity) { _fun60229_ip = 90; continue _fun60229 }
 58:
                zulu = _closure1_slot1;
                golf = _closure1_slot2;
                mike = 5;
                mike = golf[mike];
                zulu = zulu.bind(oscar)(mike);
                mike = zulu.canEveryoneRole;
                entity = mike.bind(zulu)(tango, report);
 90:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useCanChannelBeDefault'] = tango;
    mike = function(argFoo, argBar) { // Original name: canChannelBeDefault
        _fun60230: for(var _fun60230_ip = 0; ; ) switch(_fun60230_ip) {
 0:
            golf = argBar;
            zulu = _closure1_slot7;
            tango = _closure1_slot4;
            entity = tango.getChannel;
            entity = entity.bind(tango)(golf);
            oscar = undefined;
            report = zulu.bind(oscar)(entity);
            tango = _closure1_slot3;
            zulu = tango.isChannelGated;
            entity = argFoo;
            entity = zulu.bind(tango)(entity, golf);
            if(entity) { _fun60230_ip = 99; continue _fun60230 }
 53:
            tango = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 5;
            zulu = options[zulu];
            tango = tango.bind(oscar)(zulu);
            zulu = tango.canEveryoneRole;
            oscar = _closure1_slot4;
            mike = oscar.getChannel;
            mike = mike.bind(oscar)(golf);
            entity = zulu.bind(tango)(report, mike);
 99:
            return entity;
        }
    };
    zulu['canChannelBeDefault'] = mike;
    return entity;
})();