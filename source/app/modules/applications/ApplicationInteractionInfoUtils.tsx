// app/modules/applications/ApplicationInteractionInfoUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 1;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/applications/ApplicationInteractionInfoUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: canViewInteractionInfo
        entity = argFoo;
        michal = entity.interactionMetadata;
        entity = null;
        entity = entity != michal;
        return entity;
    };
    zuuluu['canViewInteractionInfo'] = tangon;
    michal = function(argFoo) { // Original name: isPrimaryEntryPointCommandMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            entity = tangon.interactionMetadata;
            zuuluu = null;
            michal = zuuluu == entity;
            report = undefined;
            golfie = undefined;
            if(michal) { _fun00002_ip = 27; continue _fun00001 }
 22:
            golfie = entity.type;
 27:
            option = _closure1_slot0;
            entity = _closure1_slot1;
            oscard = 0;
            entity = entity[oscard];
            entity = option.bind(report)(entity);
            entity = entity.InteractionTypes;
            entity = entity.APPLICATION_COMMAND;
            entity = golfie === entity;
            if(!entity) { _fun00002_ip = 122; continue _fun00001 }
 68:
            tangon = tangon.interactionMetadata;
            golfie = zuuluu == tangon;
            zuuluu = undefined;
            if(golfie) { _fun00002_ip = 89; continue _fun00001 }
 83:
            zuuluu = tangon.command_type;
 89:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[oscard];
            michal = tangon.bind(report)(michal);
            michal = michal.ApplicationCommandType;
            michal = michal.PRIMARY_ENTRY_POINT;
            entity = zuuluu === michal;
 122:
            return entity;
        }
    };
    zuuluu['isPrimaryEntryPointCommandMessage'] = michal;
    return entity;
})();