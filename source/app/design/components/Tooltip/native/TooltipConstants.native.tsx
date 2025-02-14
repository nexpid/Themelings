// app/design/components/Tooltip/native/TooltipConstants.native.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = {'overshootClamping': true, 'damping': 35, 'stiffness': 450, 'mass': 0.5, 'restDisplacementThreshold': 0.001};
    var _closure1_slot2 = entity;
    entity = {};
    oscar = "function TooltipConstantsNativeTsx1(visible,cleanUp){const{withSpring,translateY,TOOLTIP_SPRING}=this.__closure;return{transform:[{translateY:withSpring(visible===1?0:translateY,TOOLTIP_SPRING,'respect-motion-settings',cleanUp)}],opacity:withSpring(visible,TOOLTIP_SPRING,'respect-motion-settings',cleanUp)};}";
    entity['code'] = oscar;
    var _closure1_slot3 = entity;
    entity = 1;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/Tooltip/native/TooltipConstants.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: tooltipEnterExitAnimation
        _fun77586: for(var _fun77586_ip = 0; ; ) switch(_fun77586_ip) {
 0:
            tango = -8;
            zulu = 'top';
            mike = argFoo;
            if(!(zulu === mike)) { _fun77586_ip = 22; continue _fun77586 }
 19:
            tango = 8;
 22:
            var _closure2_slot0 = tango;
            entity = function(argFoo, argBar) { // Original name: o
                _fun77587: for(var _fun77587_ip = 0; ; ) switch(_fun77587_ip) {
 0:
                    golf = argFoo;
                    oscar = argBar;
                    entity = {};
                    offset = {};
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    verify = 0;
                    zulu = zulu[verify];
                    options = undefined;
                    romeo = tango.bind(options)(zulu);
                    yankee = romeo.withSpring;
                    tango = 1;
                    zulu = 0;
                    if(!(tango !== golf)) { _fun77587_ip = 55; continue _fun77587 }
 48:
                    zulu = _closure2_slot0;
 55:
                    report = _closure1_slot2;
                    tango = 'respect-motion-settings';
                    output = romeo;
                    sizing = zulu;
                    kilo = report;
                    backup = tango;
                    foxtrot = oscar;
                    zulu = output[yankee](sizing, kilo, backup, foxtrot, romeo);
                    offset['translateY'] = zulu;
                    zulu = new Array(1);
                    zulu[0] = offset;
                    entity['transform'] = zulu;
                    zulu = _closure1_slot0;
                    mike = _closure1_slot1;
                    mike = mike[verify];
                    zulu = zulu.bind(options)(mike);
                    mike = zulu.withSpring;
                    output = zulu;
                    sizing = golf;
                    kilo = report;
                    foxtrot = oscar;
                    mike = output[mike](sizing, kilo, backup, foxtrot, romeo);
                    entity['opacity'] = mike;
                    return entity;
                }
            };
            zulu = {};
            golf = _closure1_slot0;
            oscar = _closure1_slot1;
            report = 0;
            oscar = oscar[report];
            report = undefined;
            report = golf.bind(report)(oscar);
            report = report.withSpring;
            zulu['withSpring'] = report;
            zulu['translateY'] = tango;
            tango = _closure1_slot2;
            zulu['TOOLTIP_SPRING'] = tango;
            entity['__closure'] = zulu;
            zulu = 7727487832145.0;
            entity['__workletHash'] = zulu;
            mike = _closure1_slot3;
            entity['__initData'] = mike;
            return entity;
        }
    };
    zulu['tooltipEnterExitAnimation'] = mike;
    return entity;
})();