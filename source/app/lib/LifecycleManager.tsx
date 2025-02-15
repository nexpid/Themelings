// app/lib/LifecycleManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot1 = tango;
    mike = function() {
        tango = _closure1_slot1;
        zulu = function() { // Original name: LifecycleManager
            zulu = this;
            tango = _closure1_slot0;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = false;
            zulu['isInitialized'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'initialize';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = this;
                options = 0;
                tango = copyRestArgs(options);
                entity = zulu.isInitialized;
                if(entity) { _fun00002_ip = 61; continue _fun00001 }
 18:
                entity = true;
                zulu['isInitialized'] = entity;
                mike = zulu._initialize;
                entity = new Array(0);
                options = entity;
                golf = tango;
                oscar = 0;
                tango = arraySpread(options, golf, oscar);
                options = mike;
                golf = entity;
                oscar = zulu;
                entity = apply(options, golf, oscar);
 61:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(2);
        mike[0] = entity;
        entity = {};
        oscar = 'terminate';
        entity['key'] = oscar;
        report = function() { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                mike = this;
                entity = mike.isInitialized;
                if(!entity) { _fun00004_ip = 30; continue _fun00003 }
 12:
                entity = false;
                mike['isInitialized'] = entity;
                entity = mike._terminate;
                entity = entity.bind(mike)();
 30:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        mike[1] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 2;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'lib/LifecycleManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();