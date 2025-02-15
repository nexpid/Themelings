// app/modules/interaction_components/content_inventory_entry/utils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.MessageEmbedFlags;
    var _closure1_slot2 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/interaction_components/content_inventory_entry/utils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: isContentInventoryFallbackEmbed
        _fun69171: for(var _fun69171_ip = 0; ; ) switch(_fun69171_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 1;
            entity = tango[entity];
            tango = undefined;
            oscar = zulu.bind(tango)(entity);
            report = oscar.hasFlag;
            entity = argFoo;
            entity = entity.flags;
            zulu = null;
            golf = zulu != entity;
            zulu = 0;
            if(!golf) { _fun69171_ip = 53; continue _fun69171 }
 50:
            zulu = entity;
 53:
            entity = _closure1_slot2;
            entity = entity.IS_CONTENT_INVENTORY_ENTRY;
            entity = report.bind(oscar)(zulu, entity);
            if(!entity) { _fun69171_ip = 107; continue _fun69171 }
 72:
            zulu = _closure1_slot0;
            report = _closure1_slot1;
            mike = 2;
            mike = report[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.isContentInventoryEmbedEnabled;
            mike = 'isContentInventoryFallbackEmbed';
            entity = zulu.bind(tango)(mike);
 107:
            return entity;
        }
    };
    zulu['isContentInventoryFallbackEmbed'] = mike;
    return entity;
})();