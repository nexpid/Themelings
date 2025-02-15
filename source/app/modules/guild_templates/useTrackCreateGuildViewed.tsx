// app/modules/guild_templates/useTrackCreateGuildViewed.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
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
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildTemplateStates;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_templates/useTrackCreateGuildViewed.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useTrackCreateGuildViewed
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot2;
        tango = zulu.useRef;
        mike = new Array(0);
        mike = tango.bind(zulu)(mike);
        var _closure2_slot1 = mike;
        mike = zulu.useEffect;
        entity = function() {
            _fun91562: for(var _fun91562_ip = 0; ; ) switch(_fun91562_ip) {
 0:
                zulu = _closure2_slot0;
                mike = null;
                mike = mike != zulu;
                if(!mike) { _fun91562_ip = 42; continue _fun91562 }
 16:
                zulu = _closure2_slot0;
                tango = zulu.state;
                zulu = _closure1_slot3;
                zulu = zulu.RESOLVING;
                mike = tango !== zulu;
 42:
                if(!mike) { _fun91562_ip = 196; continue _fun91562 }
 48:
                mike = _closure2_slot1;
                tango = mike.current;
                zulu = tango.includes;
                mike = _closure2_slot0;
                mike = mike.code;
                mike = zulu.bind(tango)(mike);
                if(mike) { _fun91562_ip = 196; continue _fun91562 }
 79:
                mike = _closure2_slot1;
                zulu = mike.current;
                mike = zulu.push;
                report = _closure2_slot0;
                entity = report.code;
                entity = mike.bind(zulu)(entity);
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 3;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.track;
                entity = _closure1_slot4;
                mike = entity.CREATE_GUILD_VIEWED;
                entity = {};
                oscar = report.code;
                entity['guild_template_code'] = oscar;
                oscar = report.name;
                entity['guild_template_name'] = oscar;
                oscar = report.description;
                entity['guild_template_description'] = oscar;
                report = report.sourceGuildId;
                entity['guild_template_guild_id'] = report;
                entity = zulu.bind(tango)(mike, entity);
 196:
                entity = undefined;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();