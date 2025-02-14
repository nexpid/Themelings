// app/modules/custom_status/utils/getClearAfterDuration.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.ClearAfterValues;
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/custom_status/utils/getClearAfterDuration.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: getClearAfterDuration
        _fun77842: for(var _fun77842_ip = 0; ; ) switch(_fun77842_ip) {
 0:
            entity = argFoo;
            zulu = _closure1_slot2;
            zulu = zulu.TODAY;
            if(!(entity !== zulu)) { _fun77842_ip = 67; continue _fun77842 }
 20:
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 1;
            mike = tango[mike];
            report = undefined;
            tango = zulu.bind(report)(mike);
            zulu = 'number';
            mike = typeof entity;
            zulu = zulu === mike;
            mike = 'Invalid custom status clear timeout';
            mike = tango.bind(report)(zulu, mike);
            return entity;
 67:
            entity = global;
            mike = entity.Date;
            zulu = mike.prototype;
            zulu = Object.create(zulu, {constructor: {value: mike}});
            offset = zulu;
            mike = new offset[mike](verify);
            zulu = mike instanceof Object ? mike : zulu;
            oscar = entity.Date;
            entity = zulu.getFullYear;
            verify = entity.bind(zulu)();
            entity = zulu.getMonth;
            options = entity.bind(zulu)();
            entity = zulu.getDate;
            mike = entity.bind(zulu)();
            entity = 1;
            golf = mike + entity;
            mike = oscar.prototype;
            mike = Object.create(mike, {constructor: {value: oscar}});
            offset = mike;
            entity = new offset[oscar](verify, options, golf, oscar);
            mike = entity instanceof Object ? entity : mike;
            entity = mike.getTime;
            mike = entity.bind(mike)();
            entity = zulu.getTime;
            entity = entity.bind(zulu)();
            entity = mike - entity;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();