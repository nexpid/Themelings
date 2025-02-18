// app/design/components/Sheet/native/useBottomSheetRef.tsx
export default (function(_, argBar, __, argCor, ___, argFre, argPlu) {
    zuuluu = argFre;
    report = argPlu;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    oscard = report[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot0 = tangon;
    tangon = 1;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/Sheet/native/useBottomSheetRef.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useBottomSheetRef
        report = _closure1_slot0;
        zuuluu = report.useRef;
        michal = null;
        zuuluu = zuuluu.bind(report)(michal);
        var _closure2_slot0 = zuuluu;
        tangon = report.useCallback;
        michal = new Array(1);
        michal[0] = zuuluu;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot0;
                michal = entity.current;
                entity = null;
                if(!(entity != michal)) { _fun00002_ip = 28; continue _fun00001 }
 18:
                entity = michal.closeActionSheet;
                entity = entity.bind(michal)();
 28:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(entity, michal);
        entity = {};
        entity['bottomSheetRef'] = zuuluu;
        entity['bottomSheetClose'] = michal;
        return entity;
    };
    zuuluu['useBottomSheetRef'] = michal;
    return entity;
})();