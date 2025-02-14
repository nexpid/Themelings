// app/modules/dismissible_content/TaskRunner.tsx
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
        zulu = function() { // Original name: TaskRunner
            zulu = this;
            tango = _closure1_slot0;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = null;
            zulu['timeoutId'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'schedule';
        entity['key'] = mike;
        mike = function(argFoo, argBar) { // Original name: value
            zulu = this;
            var _closure3_slot0 = zulu;
            entity = argFoo;
            var _closure3_slot1 = entity;
            entity = zulu.unschedule;
            entity = entity.bind(zulu)();
            entity = global;
            report = entity.setTimeout;
            entity = undefined;
            tango = function() {
                zulu = _closure3_slot0;
                mike = null;
                zulu['timeoutId'] = mike;
                mike = _closure3_slot1;
                entity = undefined;
                mike = mike.bind(entity)();
                return entity;
            };
            mike = argBar;
            mike = report.bind(entity)(tango, mike);
            zulu['timeoutId'] = mike;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        oscar = 'unschedule';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun38263: for(var _fun38263_ip = 0; ; ) switch(_fun38263_ip) {
 0:
                mike = this;
                entity = mike.scheduled;
                entity = entity.bind(mike)();
                if(!entity) { _fun38263_ip = 45; continue _fun38263 }
 16:
                entity = global;
                tango = entity.clearTimeout;
                zulu = mike.timeoutId;
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                entity = null;
                mike['timeoutId'] = entity;
 45:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'scheduled';
        entity['key'] = oscar;
        report = function() { // Original name: value
            entity = this;
            mike = entity.timeoutId;
            entity = null;
            entity = entity !== mike;
            return entity;
        };
        entity['value'] = report;
        mike[2] = entity;
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
    tango = 'modules/dismissible_content/TaskRunner.tsx';
    tango = report.bind(oscar)(tango);
    zulu['TaskRunner'] = mike;
    return entity;
})();