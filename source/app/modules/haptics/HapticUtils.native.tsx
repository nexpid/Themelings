// app/modules/haptics/HapticUtils.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    report = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = report;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: getAndroidLightImpactEffect
        _fun44754: for(var _fun44754_ip = 0; ; ) switch(_fun44754_ip) {
 0:
            entity = global;
            zulu = entity.parseInt;
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 3;
            entity = mike[entity];
            mike = undefined;
            tango = tango.bind(mike)(entity);
            entity = tango.getSystemVersion;
            entity = entity.bind(tango)();
            mike = zulu.bind(mike)(entity);
            entity = 29;
            mike = mike < entity;
            entity = 'effectTick';
            if(!mike) { _fun44754_ip = 70; continue _fun44754 }
 64:
            entity = 'impactLight';
 70:
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 4;
    tango = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(tango);
    golf = options.fileFinishedImporting;
    tango = 'modules/haptics/HapticUtils.native.tsx';
    tango = golf.bind(options)(tango);
    tango = 0;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    zulu['HapticFeedbackTypes'] = tango;
    mike = function(argFoo) { // Original name: triggerHapticFeedback
        _fun44755: for(var _fun44755_ip = 0; ; ) switch(_fun44755_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot1;
            entity = _closure1_slot2;
            oscar = 0;
            mike = entity[oscar];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            mike = mike.IMPACT_LIGHT;
            if(!(mike !== zulu)) { _fun44755_ip = 608; continue _fun44755 }
 40:
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = tango.bind(entity)(mike);
            mike = mike.IMPACT_MEDIUM;
            if(!(mike !== zulu)) { _fun44755_ip = 533; continue _fun44755 }
 70:
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = tango.bind(entity)(mike);
            mike = mike.IMPACT_HEAVY;
            if(!(mike !== zulu)) { _fun44755_ip = 491; continue _fun44755 }
 100:
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = tango.bind(entity)(mike);
            mike = mike.NOTIFICATION_ERROR;
            if(!(mike !== zulu)) { _fun44755_ip = 449; continue _fun44755 }
 130:
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = tango.bind(entity)(mike);
            mike = mike.DRAG_AND_DROP_START;
            if(!(mike !== zulu)) { _fun44755_ip = 373; continue _fun44755 }
 160:
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = tango.bind(entity)(mike);
            mike = mike.DRAG_AND_DROP_END;
            if(!(mike !== zulu)) { _fun44755_ip = 295; continue _fun44755 }
 187:
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = tango.bind(entity)(mike);
            mike = mike.DRAG_AND_DROP_MOVE;
            if(!(mike === zulu)) { _fun44755_ip = 679; continue _fun44755 }
 217:
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 1;
            mike = golf[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.trigger;
            oscar = _closure1_slot0;
            mike = 2;
            mike = golf[mike];
            oscar = oscar.bind(entity)(mike);
            mike = oscar.isAndroid;
            oscar = mike.bind(oscar)();
            mike = 'impactMedium';
            if(!oscar) { _fun44755_ip = 285; continue _fun44755 }
 277:
            oscar = _closure1_slot3;
            mike = oscar.bind(entity)();
 285:
            mike = zulu.bind(tango)(mike);
            _fun44755_ip = 679; continue _fun44755;
 295:
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 1;
            mike = golf[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.trigger;
            oscar = _closure1_slot0;
            mike = 2;
            mike = golf[mike];
            oscar = oscar.bind(entity)(mike);
            mike = oscar.isAndroid;
            oscar = mike.bind(oscar)();
            mike = 'notificationSuccess';
            if(!oscar) { _fun44755_ip = 363; continue _fun44755 }
 355:
            oscar = _closure1_slot3;
            mike = oscar.bind(entity)();
 363:
            mike = zulu.bind(tango)(mike);
            _fun44755_ip = 679; continue _fun44755;
 373:
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 1;
            mike = golf[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.trigger;
            oscar = _closure1_slot0;
            mike = 2;
            mike = golf[mike];
            oscar = oscar.bind(entity)(mike);
            mike = oscar.isAndroid;
            oscar = mike.bind(oscar)();
            mike = 'impactHeavy';
            if(!oscar) { _fun44755_ip = 439; continue _fun44755 }
 433:
            mike = 'impactMedium';
 439:
            mike = zulu.bind(tango)(mike);
            _fun44755_ip = 679; continue _fun44755;
 449:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 1;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.trigger;
            mike = 'notificationError';
            mike = zulu.bind(tango)(mike);
            _fun44755_ip = 679; continue _fun44755;
 491:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 1;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.trigger;
            mike = 'impactHeavy';
            mike = zulu.bind(tango)(mike);
            _fun44755_ip = 679; continue _fun44755;
 533:
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 1;
            mike = golf[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.trigger;
            oscar = _closure1_slot0;
            mike = 2;
            mike = golf[mike];
            oscar = oscar.bind(entity)(mike);
            mike = oscar.isAndroid;
            oscar = mike.bind(oscar)();
            mike = 'impactMedium';
            if(!oscar) { _fun44755_ip = 601; continue _fun44755 }
 593:
            oscar = _closure1_slot3;
            mike = oscar.bind(entity)();
 601:
            mike = zulu.bind(tango)(mike);
            _fun44755_ip = 679; continue _fun44755;
 608:
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 1;
            mike = golf[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.trigger;
            oscar = _closure1_slot0;
            mike = 2;
            mike = golf[mike];
            oscar = oscar.bind(entity)(mike);
            mike = oscar.isAndroid;
            oscar = mike.bind(oscar)();
            mike = 'selection';
            if(!oscar) { _fun44755_ip = 674; continue _fun44755 }
 666:
            report = _closure1_slot3;
            mike = report.bind(entity)();
 674:
            mike = zulu.bind(tango)(mike);
 679:
            return entity;
        }
    };
    zulu['triggerHapticFeedback'] = mike;
    return entity;
})();