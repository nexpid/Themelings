// app/modules/app_launcher/native/hooks/useBottomSheetFlashListBottomViewabilityInset.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.useWindowDimensions;
    var _closure1_slot4 = tango;
    tango = {};
    golf = 'function useBottomSheetFlashListBottomViewabilityInsetTsx1(){const{animatedSheetPosition}=this.__closure;return animatedSheetPosition.get();}';
    tango['code'] = golf;
    var _closure1_slot5 = tango;
    tango = {};
    golf = 'function useBottomSheetFlashListBottomViewabilityInsetTsx2(sheetPosition){const{distanceBetweenExpandedScreenTopAndSheetTop,runOnJS,handleBottomViewabilityInsetDebounced}=this.__closure;const bottomViewabilityInset=(sheetPosition!==null&&sheetPosition!==void 0?sheetPosition:0)-distanceBetweenExpandedScreenTopAndSheetTop;runOnJS(handleBottomViewabilityInsetDebounced)(bottomViewabilityInset);}';
    tango['code'] = golf;
    var _closure1_slot6 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_launcher/native/hooks/useBottomSheetFlashListBottomViewabilityInset.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useBottomSheetFlashListBottomViewabilityInset
        mike = _closure1_slot4;
        romeo = undefined;
        mike = mike.bind(romeo)();
        options = _closure1_slot3;
        tango = options.useContext;
        yankee = _closure1_slot0;
        foxtrot = _closure1_slot2;
        zulu = 2;
        zulu = foxtrot[zulu];
        zulu = yankee.bind(romeo)(zulu);
        zulu = zulu.PortalKeyboardContext;
        zulu = tango.bind(options)(zulu);
        kilo = zulu.animatedSheetPosition;
        var _closure2_slot0 = kilo;
        zulu = 3;
        zulu = foxtrot[zulu];
        tango = yankee.bind(romeo)(zulu);
        zulu = tango.useKeyboardActionSheetHeight;
        zulu = zulu.bind(tango)();
        tango = zulu.maximum;
        report = options.useRef;
        zulu = null;
        zulu = report.bind(options)(zulu);
        var _closure2_slot1 = zulu;
        mike = mike.height;
        backup = mike - tango;
        var _closure2_slot2 = backup;
        tango = options.useRef;
        mike = 9999;
        mike = tango.bind(options)(mike);
        var _closure2_slot3 = mike;
        oscar = options.useMemo;
        report = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 4;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.debounce;
            mike = function(argFoo) {
                _fun118796: for(var _fun118796_ip = 0; ; ) switch(_fun118796_ip) {
 0:
                    zulu = _closure2_slot3;
                    mike = argFoo;
                    zulu['current'] = mike;
                    entity = _closure2_slot1;
                    mike = entity.current;
                    entity = null;
                    if(!(entity != mike)) { _fun118796_ip = 41; continue _fun118796 }
 31:
                    entity = mike.updateViewableItems;
                    entity = entity.bind(mike)();
 41:
                    entity = undefined;
                    return entity;
                }
            };
            entity = 200;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        tango = new Array(0);
        verify = oscar.bind(options)(report, tango);
        var _closure2_slot4 = verify;
        offset = 5;
        tango = foxtrot[offset];
        oscar = yankee.bind(romeo)(tango);
        report = oscar.useAnimatedReaction;
        tango = function() { // Original name: l
            mike = _closure2_slot0;
            entity = mike.get;
            entity = entity.bind(mike)();
            return entity;
        };
        options = {};
        options['animatedSheetPosition'] = kilo;
        tango['__closure'] = options;
        options = 2571962450604.0;
        tango['__workletHash'] = options;
        options = _closure1_slot5;
        tango['__initData'] = options;
        entity = function(argFoo) { // Original name: u
            _fun118798: for(var _fun118798_ip = 0; ; ) switch(_fun118798_ip) {
 0:
                entity = argFoo;
                mike = null;
                mike = mike != entity;
                zulu = 0;
                if(!mike) { _fun118798_ip = 17; continue _fun118798 }
 14:
                zulu = entity;
 17:
                entity = _closure2_slot2;
                zulu = zulu - entity;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 5;
                tango = tango[entity];
                entity = undefined;
                report = report.bind(entity)(tango);
                tango = report.runOnJS;
                mike = _closure2_slot4;
                mike = tango.bind(report)(mike);
                mike = mike.bind(entity)(zulu);
                return entity;
            }
        };
        options = {};
        options['distanceBetweenExpandedScreenTopAndSheetTop'] = backup;
        offset = foxtrot[offset];
        offset = yankee.bind(romeo)(offset);
        offset = offset.runOnJS;
        options['runOnJS'] = offset;
        options['handleBottomViewabilityInsetDebounced'] = verify;
        entity['__closure'] = options;
        options = 3079648175865.0;
        entity['__workletHash'] = options;
        golf = _closure1_slot6;
        entity['__initData'] = golf;
        entity = report.bind(oscar)(tango, entity);
        entity = {};
        entity['flashListRef'] = zulu;
        entity['bottomVisibilityInsetRef'] = mike;
        return entity;
    };
    zulu['useBottomSheetFlashListBottomViewabilityInset'] = mike;
    return entity;
})();