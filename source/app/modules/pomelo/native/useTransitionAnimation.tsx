// app/modules/pomelo/native/useTransitionAnimation.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, mike);
    options = 0;
    report = golf[options];
    mike = argCorge;
    entity = undefined;
    mike = mike.bind(entity)(report);
    var _closure1_slot2 = mike;
    mike = {};
    mike['UP'] = options;
    report = 'UP';
    mike[options] = report;
    options = 1;
    mike['DOWN'] = options;
    report = 'DOWN';
    mike[options] = report;
    var _closure1_slot3 = mike;
    report = {};
    options = 'function useTransitionAnimationTsx1(){const{offset}=this.__closure;return{transform:[{translateY:offset.get()*2}],opacity:1-Math.abs(offset.get())};}';
    report['code'] = options;
    var _closure1_slot4 = report;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/pomelo/native/useTransitionAnimation.tsx';
    report = oscar.bind(golf)(report);
    tango = function() { // Original name: useTransitionAnimation
        golf = _closure1_slot0;
        options = _closure1_slot1;
        tango = 1;
        entity = options[tango];
        report = undefined;
        verify = golf.bind(report)(entity);
        oscar = verify.useSharedValue;
        entity = 0;
        oscar = oscar.bind(verify)(entity);
        var _closure2_slot0 = oscar;
        entity = {};
        tango = options[tango];
        golf = golf.bind(report)(tango);
        report = golf.useAnimatedStyle;
        tango = function() { // Original name: o
            entity = {};
            zulu = {};
            report = _closure2_slot0;
            mike = report.get;
            tango = mike.bind(report)();
            mike = 2;
            mike = mike * tango;
            zulu['translateY'] = mike;
            mike = new Array(1);
            mike[0] = zulu;
            entity['transform'] = mike;
            mike = global;
            tango = mike.Math;
            zulu = tango.abs;
            mike = report.get;
            mike = mike.bind(report)();
            zulu = zulu.bind(tango)(mike);
            mike = 1;
            mike = mike - zulu;
            entity['opacity'] = mike;
            return entity;
        };
        options = {};
        options['offset'] = oscar;
        tango['__closure'] = options;
        options = 13853245220103.0;
        tango['__workletHash'] = options;
        options = _closure1_slot4;
        tango['__initData'] = options;
        tango = report.bind(golf)(tango);
        entity['animatedStyles'] = tango;
        report = _closure1_slot2;
        tango = report.useCallback;
        zulu = new Array(1);
        zulu[0] = oscar;
        mike = function(argFoo) {
            _fun94379: for(var _fun94379_ip = 0; ; ) switch(_fun94379_ip) {
 0:
                report = _closure2_slot0;
                tango = report.set;
                zulu = _closure1_slot3;
                golf = zulu.UP;
                zulu = -1;
                oscar = argFoo;
                if(!(oscar === golf)) { _fun94379_ip = 41; continue _fun94379 }
 38:
                zulu = 1;
 41:
                zulu = tango.bind(report)(zulu);
                tango = _closure2_slot0;
                zulu = tango.set;
                report = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 2;
                mike = mike[entity];
                entity = undefined;
                golf = report.bind(entity)(mike);
                oscar = golf.withTiming;
                report = {};
                mike = 300;
                report['duration'] = mike;
                mike = 0;
                mike = oscar.bind(golf)(mike, report);
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        entity['transition'] = mike;
        return entity;
    };
    zulu['default'] = tango;
    zulu['Direction'] = mike;
    return entity;
})();