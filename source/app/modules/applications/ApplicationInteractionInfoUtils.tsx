// app/modules/applications/ApplicationInteractionInfoUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 1;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/applications/ApplicationInteractionInfoUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: canViewInteractionInfo
        entity = argFoo;
        mike = entity.interactionMetadata;
        entity = null;
        entity = entity != mike;
        return entity;
    };
    zulu['canViewInteractionInfo'] = tango;
    mike = function(argFoo) { // Original name: isPrimaryEntryPointCommandMessage
        _fun71725: for(var _fun71725_ip = 0; ; ) switch(_fun71725_ip) {
 0:
            tango = argFoo;
            entity = tango.interactionMetadata;
            zulu = null;
            mike = zulu == entity;
            report = undefined;
            golf = undefined;
            if(mike) { _fun71725_ip = 27; continue _fun71725 }
 22:
            golf = entity.type;
 27:
            options = _closure1_slot0;
            entity = _closure1_slot1;
            oscar = 0;
            entity = entity[oscar];
            entity = options.bind(report)(entity);
            entity = entity.InteractionTypes;
            entity = entity.APPLICATION_COMMAND;
            entity = golf === entity;
            if(!entity) { _fun71725_ip = 122; continue _fun71725 }
 68:
            tango = tango.interactionMetadata;
            golf = zulu == tango;
            zulu = undefined;
            if(golf) { _fun71725_ip = 89; continue _fun71725 }
 83:
            zulu = tango.command_type;
 89:
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            mike = mike[oscar];
            mike = tango.bind(report)(mike);
            mike = mike.ApplicationCommandType;
            mike = mike.PRIMARY_ENTRY_POINT;
            entity = zulu === mike;
 122:
            return entity;
        }
    };
    zulu['isPrimaryEntryPointCommandMessage'] = mike;
    return entity;
})();