// app/utils/native/RunAfterInteractionsUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    mike = function(argFoo) { // Original name: runAfterInteractions
        _fun65293: for(var _fun65293_ip = 0; ; ) switch(_fun65293_ip) {
 0:
            report = arguments[1];
            entity = argFoo;
            var _closure2_slot0 = entity;
            tango = undefined;
            if(!(report === tango)) { _fun65293_ip = 24; continue _fun65293 }
 18:
            report = 2000;
 24:
            var _closure2_slot1 = tango;
            var _closure2_slot2 = tango;
            golf = _closure1_slot2;
            oscar = golf.runAfterInteractions;
            zulu = function() {
                zulu = _closure2_slot2;
                mike = zulu.cancel;
                mike = mike.bind(zulu)();
                mike = _closure2_slot0;
                entity = undefined;
                mike = mike.bind(entity)();
                return entity;
            };
            zulu = oscar.bind(golf)(zulu);
            _closure2_slot1 = zulu;
            zulu = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 1;
            entity = oscar[entity];
            entity = zulu.bind(tango)(entity);
            tango = entity.DelayedCall;
            entity = tango.prototype;
            zulu = Object.create(entity, {constructor: {value: tango}});
            options = function() {
                zulu = _closure2_slot1;
                mike = zulu.cancel;
                mike = mike.bind(zulu)();
                mike = _closure2_slot0;
                entity = undefined;
                mike = mike.bind(entity)();
                return entity;
            };
            offset = zulu;
            verify = report;
            entity = new offset[tango](verify, options, golf);
            zulu = entity instanceof Object ? entity : zulu;
            _closure2_slot2 = zulu;
            entity = zulu.delay;
            entity = entity.bind(zulu)();
            entity = {};
            mike = function() { // Original name: cancel
                zulu = _closure2_slot2;
                mike = zulu.cancel;
                mike = mike.bind(zulu)();
                mike = _closure2_slot1;
                entity = mike.cancel;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            entity['cancel'] = mike;
            return entity;
        }
    };
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    tango = tango.InteractionManager;
    var _closure1_slot2 = tango;
    tango = {};
    tango['runAfterInteractions'] = mike;
    report = 2;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'utils/native/RunAfterInteractionsUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['runAfterInteractions'] = mike;
    return entity;
})();