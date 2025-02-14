// app/design/components/AccessibilityView/useAccessibilityViewIsModalToggle.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    zulu = argFred;
    report = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = report;
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
    var _closure1_slot2 = tango;
    tango = 2;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/AccessibilityView/useAccessibilityViewIsModalToggle.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useAccessibilityViewIsModalToggle
        _fun47900: for(var _fun47900_ip = 0; ; ) switch(_fun47900_ip) {
 0:
            zulu = argFoo;
            golf = zulu.accessibilityViewIsModal;
            entity = undefined;
            if(!(golf === entity)) { _fun47900_ip = 19; continue _fun47900 }
 17:
            golf = false;
 19:
            var _closure2_slot0 = golf;
            zulu = zulu.nativeID;
            var _closure2_slot1 = zulu;
            var _closure2_slot2 = entity;
            var _closure2_slot3 = entity;
            report = _closure1_slot2;
            tango = report.useRef;
            tango = tango.bind(report)(entity);
            _closure2_slot2 = tango;
            oscar = report.useCallback;
            tango = new Array(2);
            tango[0] = golf;
            tango[1] = zulu;
            zulu = function() {
                _fun47901: for(var _fun47901_ip = 0; ; ) switch(_fun47901_ip) {
 0:
                    mike = arguments[0];
                    entity = undefined;
                    if(!(mike === entity)) { _fun47901_ip = 16; continue _fun47901 }
 9:
                    mike = _closure2_slot0;
 16:
                    if(mike) { _fun47901_ip = 96; continue _fun47901 }
 22:
                    mike = _closure2_slot2;
                    oscar = mike.current;
                    mike = null;
                    if(!(mike != oscar)) { _fun47901_ip = 181; continue _fun47901 }
 40:
                    mike = _closure2_slot2;
                    mike['current'] = entity;
                    tango = _closure1_slot0;
                    report = _closure1_slot1;
                    mike = 1;
                    mike = report[mike];
                    report = tango.bind(entity)(mike);
                    tango = report.disableAccessibilityFocusLock;
                    mike = new Array(1);
                    mike[0] = oscar;
                    mike = tango.bind(report)(mike);
                    _fun47901_ip = 181; continue _fun47901;
 96:
                    tango = _closure2_slot1;
                    mike = null;
                    if(!(mike != tango)) { _fun47901_ip = 183; continue _fun47901 }
 106:
                    mike = _closure2_slot2;
                    tango = mike.current;
                    mike = _closure2_slot1;
                    if(!(tango !== mike)) { _fun47901_ip = 181; continue _fun47901 }
 123:
                    mike = _closure2_slot2;
                    report = _closure2_slot1;
                    mike['current'] = report;
                    zulu = _closure1_slot0;
                    tango = _closure1_slot1;
                    mike = 1;
                    mike = tango[mike];
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.enableAccessibilityFocusLock;
                    mike = new Array(1);
                    mike[0] = report;
                    mike = zulu.bind(tango)(mike);
 181:
                    return entity;
 183:
                    entity = global;
                    zulu = entity.Error;
                    entity = zulu.prototype;
                    mike = Object.create(entity, {constructor: {value: zulu}});
                    golf = 'Must have a unique nativeID when accessibilityViewIsModal is enabled.';
                    options = mike;
                    entity = new options[zulu](golf, oscar);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                }
            };
            oscar = oscar.bind(report)(zulu, tango);
            _closure2_slot3 = oscar;
            tango = report.useEffect;
            zulu = new Array(1);
            zulu[0] = oscar;
            mike = function() {
                mike = _closure2_slot3;
                entity = undefined;
                entity = mike.bind(entity)();
                entity = function() {
                    zulu = _closure2_slot3;
                    entity = undefined;
                    mike = false;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                return entity;
            };
            mike = tango.bind(report)(mike, zulu);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();