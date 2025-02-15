// app/modules/oauth2/convertor.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    zulu = argFred;
    tango = argPlugh;
    entity = argCorge;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tango;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, report);
    entity = 1;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/oauth2/convertor.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: convertOAuth2Authorization
        _fun73799: for(var _fun73799_ip = 0; ; ) switch(_fun73799_ip) {
 0:
            zulu = argFoo;
            tango = zulu.guilds;
            mike = null;
            entity = zulu;
            if(!(mike != tango)) { _fun73799_ip = 67; continue _fun73799 }
 18:
            mike = {};
            golf = mike;
            oscar = zulu;
            tango = copyDataProperties(golf, oscar);
            report = zulu.guilds;
            tango = report.map;
            zulu = function(argFoo) {
                mike = argFoo;
                entity = {};
                golf = entity;
                oscar = mike;
                zulu = copyDataProperties(golf, oscar);
                report = _closure1_slot0;
                tango = _closure1_slot1;
                zulu = 0;
                tango = tango[zulu];
                zulu = undefined;
                tango = report.bind(zulu)(tango);
                zulu = tango.deserialize;
                mike = mike.permissions;
                zulu = zulu.bind(tango)(mike);
                mike = 'permissions';
                entity[mike] = zulu;
                return entity;
            };
            tango = tango.bind(report)(zulu);
            zulu = 'guilds';
            mike[zulu] = tango;
            entity = mike;
 67:
            return entity;
        }
    };
    zulu['convertOAuth2Authorization'] = mike;
    return entity;
})();