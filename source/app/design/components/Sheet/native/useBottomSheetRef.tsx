// app/design/components/Sheet/native/useBottomSheetRef.tsx
export default (function(_, argBar, __, argCorge, ___, argFred, argPlugh) {
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
    tango = 'design/components/Sheet/native/useBottomSheetRef.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useBottomSheetRef
        report = _closure1_slot0;
        zulu = report.useRef;
        mike = null;
        zulu = zulu.bind(report)(mike);
        var _closure2_slot0 = zulu;
        tango = report.useCallback;
        mike = new Array(1);
        mike[0] = zulu;
        entity = function() {
            _fun63966: for(var _fun63966_ip = 0; ; ) switch(_fun63966_ip) {
 0:
                entity = _closure2_slot0;
                mike = entity.current;
                entity = null;
                if(!(entity != mike)) { _fun63966_ip = 28; continue _fun63966 }
 18:
                entity = mike.closeActionSheet;
                entity = entity.bind(mike)();
 28:
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(entity, mike);
        entity = {};
        entity['bottomSheetRef'] = zulu;
        entity['bottomSheetClose'] = mike;
        return entity;
    };
    zulu['useBottomSheetRef'] = mike;
    return entity;
})();