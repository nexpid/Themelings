// app/modules/rpc/helpers/validateScope.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
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
    tango = tango.RPC_SCOPE_CONFIG;
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/helpers/validateScope.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: validateScope
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            mike = argBar;
            var _closure2_slot0 = zulu;
            entity = null;
            if(!(entity != mike)) { _fun00002_ip = 188; continue _fun00001 }
 21:
            tango = typeof mike;
            entity = 'string';
            if(!(entity !== tango)) { _fun00002_ip = 176; continue _fun00001 }
 35:
            entity = 'object';
            if(!(entity === tango)) { _fun00002_ip = 172; continue _fun00001 }
 46:
            entity = _closure1_slot0;
            tango = entity.ANY;
            verify = mike[tango];
            entity = entity.ALL;
            golf = mike[entity];
            tango = global;
            oscar = tango.Array;
            entity = oscar.isArray;
            entity = entity.bind(oscar)(verify);
            oscar = !entity;
            if(oscar) { _fun00002_ip = 118; continue _fun00001 }
 97:
            options = verify.some;
            entity = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.includes;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = options.bind(verify)(entity);
            oscar = !entity;
 118:
            entity = !oscar;
            if(!oscar) { _fun00002_ip = 170; continue _fun00001 }
 124:
            oscar = tango.Array;
            tango = oscar.isArray;
            tango = tango.bind(oscar)(golf);
            tango = !tango;
            if(tango) { _fun00002_ip = 167; continue _fun00001 }
 146:
            oscar = golf.every;
            report = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.includes;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report = oscar.bind(golf)(report);
            tango = !report;
 167:
            entity = !tango;
 170:
            return entity;
 172:
            entity = false;
            return entity;
 176:
            entity = zulu.includes;
            entity = entity.bind(zulu)(mike);
            return entity;
 188:
            entity = true;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();