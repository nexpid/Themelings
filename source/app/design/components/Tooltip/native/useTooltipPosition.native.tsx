// app/design/components/Tooltip/native/useTooltipPosition.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    zulu = argFred;
    report = argPlugh;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, tango);
    entity = 0;
    oscar = report[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(oscar);
    var _closure1_slot0 = tango;
    tango = 1;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/Tooltip/native/useTooltipPosition.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz, argCorge) { // Original name: useTooltipPosition
        _fun77593: for(var _fun77593_ip = 0; ; ) switch(_fun77593_ip) {
 0:
            options = argFoo;
            oscar = argBar;
            golf = argBaz;
            verify = argCorge;
            report = arguments[4];
            var _closure2_slot0 = options;
            var _closure2_slot1 = oscar;
            var _closure2_slot2 = golf;
            var _closure2_slot3 = verify;
            mike = undefined;
            if(!(report === mike)) { _fun77593_ip = 41; continue _fun77593 }
 39:
            report = 0;
 41:
            var _closure2_slot4 = report;
            tango = _closure1_slot0;
            zulu = tango.useMemo;
            mike = new Array(5);
            mike[0] = verify;
            mike[1] = options;
            mike[2] = golf;
            mike[3] = oscar;
            mike[4] = report;
            entity = function() {
                _fun77594: for(var _fun77594_ip = 0; ; ) switch(_fun77594_ip) {
 0:
                    entity = _closure2_slot0;
                    mike = null;
                    if(!(mike != entity)) { _fun77594_ip = 211; continue _fun77594 }
 16:
                    entity = _closure2_slot1;
                    if(!(mike != entity)) { _fun77594_ip = 211; continue _fun77594 }
 27:
                    entity = _closure2_slot0;
                    oscar = entity.height;
                    verify = entity.width;
                    entity = _closure2_slot1;
                    golf = entity.x;
                    offset = entity.y;
                    options = entity.width;
                    zulu = _closure2_slot2;
                    entity = zulu.x;
                    report = zulu.y;
                    mike = zulu.width;
                    zulu = zulu.height;
                    report = report - offset;
                    golf = entity - golf;
                    entity = 2;
                    mike = mike / entity;
                    mike = golf + mike;
                    entity = verify / entity;
                    golf = mike - entity;
                    entity = 12;
                    if(!(!(golf < entity))) { _fun77594_ip = 146; continue _fun77594 }
 118:
                    yankee = golf + verify;
                    offset = options - entity;
                    mike = 0;
                    if(!(yankee > offset)) { _fun77594_ip = 150; continue _fun77594 }
 132:
                    options = options - golf;
                    options = options - verify;
                    mike = options - entity;
                    _fun77594_ip = 150; continue _fun77594;
 146:
                    mike = entity - golf;
 150:
                    entity = {};
                    golf = golf + mike;
                    entity['tooltipX'] = golf;
                    options = _closure2_slot3;
                    golf = 'top';
                    if(!(golf !== options)) { _fun77594_ip = 187; continue _fun77594 }
 173:
                    golf = report + zulu;
                    zulu = _closure2_slot4;
                    zulu = golf + zulu;
                    _fun77594_ip = 199; continue _fun77594;
 187:
                    report = report - oscar;
                    tango = _closure2_slot4;
                    zulu = report - tango;
 199:
                    entity['tooltipY'] = zulu;
                    entity['adjustmentX'] = mike;
                    return entity;
 211:
                    entity = {'tooltipX': 0, 'tooltipY': 0, 'adjustmentX': 0};
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();