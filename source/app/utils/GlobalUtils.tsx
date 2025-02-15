// app/utils/GlobalUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    tango = argPlugh;
    entity = 0;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'utils/GlobalUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: assertNever
        entity = global;
        zulu = entity.Error;
        entity = entity.HermesInternal;
        tango = entity.concat;
        mike = 'Unhandled value: ';
        entity = argFoo;
        report = tango.bind(mike)(entity);
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        oscar = mike;
        entity = new oscar[zulu](report, tango);
        entity = entity instanceof Object ? entity : mike;
        throw entity;
    };
    zulu['assertNever'] = tango;
    tango = function(argFoo) { // Original name: isNotNullish
        mike = null;
        entity = argFoo;
        entity = mike != entity;
        return entity;
    };
    zulu['isNotNullish'] = tango;
    tango = function(argFoo, argBar) { // Original name: areSetsEqual
        _fun37441: for(var _fun37441_ip = 0; ; ) switch(_fun37441_ip) {
 0:
            oscar = argFoo;
            tango = argBar;
            var _closure2_slot0 = tango;
            mike = oscar.size;
            entity = tango.size;
            entity = mike === entity;
            if(!entity) { _fun37441_ip = 92; continue _fun37441 }
 29:
            mike = oscar.size;
            report = 0;
            mike = report === mike;
            if(!mike) { _fun37441_ip = 52; continue _fun37441 }
 43:
            tango = tango.size;
            mike = report === tango;
 52:
            if(mike) { _fun37441_ip = 89; continue _fun37441 }
 55:
            tango = global;
            report = tango.Array;
            tango = report.from;
            report = tango.bind(report)(oscar);
            tango = report.every;
            zulu = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.has;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = tango.bind(report)(zulu);
 89:
            entity = mike;
 92:
            return entity;
        }
    };
    zulu['areSetsEqual'] = tango;
    mike = function(argFoo, argBar) { // Original name: isIn
        zulu = argBar;
        mike = zulu.includes;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['isIn'] = mike;
    return entity;
})();