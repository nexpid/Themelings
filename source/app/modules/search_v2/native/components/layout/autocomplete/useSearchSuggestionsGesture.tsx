// app/modules/search_v2/native/components/layout/autocomplete/useSearchSuggestionsGesture.tsx
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
    tango = tango.subscribeTextInputValue;
    var _closure1_slot4 = tango;
    tango = {};
    golf = 'function inBoundingBox_useSearchSuggestionsGestureTsx1(e,coordinates,safeAreaTop){const touch=e.allTouches[0];if(touch==null)return false;return coordinates.left<touch.absoluteX&&touch.absoluteX<coordinates.right&&coordinates.top<touch.absoluteY+safeAreaTop&&touch.absoluteY+safeAreaTop<coordinates.bottom;}';
    tango['code'] = golf;
    var _closure1_slot5 = tango;
    tango = function() {
        entity = function(argFoo, argBar, argBaz) { // Original name: inBoundingBox
            _fun112656: for(var _fun112656_ip = 0; ; ) switch(_fun112656_ip) {
 0:
                zulu = argBar;
                report = argBaz;
                entity = argFoo;
                mike = entity.allTouches;
                entity = 0;
                tango = mike[entity];
                entity = null;
                entity = entity != tango;
                if(!entity) { _fun112656_ip = 110; continue _fun112656 }
 30:
                oscar = zulu.left;
                mike = tango.absoluteX;
                mike = oscar < mike;
                if(!mike) { _fun112656_ip = 63; continue _fun112656 }
 48:
                golf = tango.absoluteX;
                oscar = zulu.right;
                mike = golf < oscar;
 63:
                if(!mike) { _fun112656_ip = 85; continue _fun112656 }
 66:
                golf = zulu.top;
                oscar = tango.absoluteY;
                oscar = oscar + report;
                mike = golf < oscar;
 85:
                if(!mike) { _fun112656_ip = 107; continue _fun112656 }
 88:
                tango = tango.absoluteY;
                tango = tango + report;
                zulu = zulu.bottom;
                mike = tango < zulu;
 107:
                entity = mike;
 110:
                return entity;
            }
        };
        mike = {};
        entity['__closure'] = mike;
        mike = 14606221606756.0;
        entity['__workletHash'] = mike;
        mike = _closure1_slot5;
        entity['__initData'] = mike;
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot6 = tango;
    tango = {};
    golf = 'function useSearchSuggestionsGestureTsx2(e){const{coordinates,inBoundingBox,safeAreaTop,dismissed}=this.__closure;const _coordinates=coordinates.get();if(_coordinates==null||inBoundingBox(e,_coordinates,safeAreaTop))return;dismissed.set(true);}';
    tango['code'] = golf;
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/components/layout/autocomplete/useSearchSuggestionsGesture.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useSearchSuggestionsGesture
        _fun112657: for(var _fun112657_ip = 0; ; ) switch(_fun112657_ip) {
 0:
            romeo = argFoo;
            var _closure2_slot0 = romeo;
            golf = _closure1_slot0;
            verify = _closure1_slot2;
            mike = 2;
            zulu = verify[mike];
            oscar = undefined;
            options = golf.bind(oscar)(zulu);
            report = options.useSharedValue;
            zulu = false;
            options = report.bind(options)(zulu);
            var _closure2_slot1 = options;
            mike = verify[mike];
            report = golf.bind(oscar)(mike);
            zulu = report.useSharedValue;
            mike = null;
            mike = zulu.bind(report)(mike);
            var _closure2_slot2 = mike;
            yankee = _closure1_slot3;
            offset = yankee.useCallback;
            report = new Array(1);
            report[0] = options;
            zulu = function(argFoo, argBar) {
                _fun112658: for(var _fun112658_ip = 0; ; ) switch(_fun112658_ip) {
 0:
                    mike = argFoo;
                    entity = argBar;
                    if(!(mike !== entity)) { _fun112658_ip = 29; continue _fun112658 }
 10:
                    zulu = _closure2_slot1;
                    mike = zulu.set;
                    entity = false;
                    entity = mike.bind(zulu)(entity);
 29:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = offset.bind(yankee)(zulu, report);
            var _closure2_slot3 = zulu;
            offset = yankee.useEffect;
            report = new Array(3);
            report[0] = options;
            report[1] = romeo;
            report[2] = zulu;
            zulu = function() {
                tango = _closure1_slot4;
                zulu = _closure2_slot0;
                mike = _closure2_slot3;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            zulu = offset.bind(yankee)(zulu, report);
            report = _closure1_slot1;
            zulu = 3;
            zulu = verify[zulu];
            zulu = report.bind(oscar)(zulu);
            zulu = zulu.bind(oscar)();
            report = zulu.top;
            zulu = 4;
            zulu = verify[zulu];
            oscar = golf.bind(oscar)(zulu);
            zulu = oscar.isAndroid;
            oscar = zulu.bind(oscar)();
            zulu = 0;
            if(!oscar) { _fun112657_ip = 197; continue _fun112657 }
 194:
            zulu = report;
 197:
            var _closure2_slot4 = zulu;
            tango = _closure1_slot3;
            oscar = tango.useMemo;
            report = new Array(3);
            report[0] = mike;
            report[1] = zulu;
            report[2] = options;
            zulu = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 5;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                mike = entity.Gesture;
                entity = mike.Tap;
                zulu = entity.bind(mike)();
                mike = zulu.onTouchesDown;
                entity = function(argFoo) { // Original name: e
                    _fun112661: for(var _fun112661_ip = 0; ; ) switch(_fun112661_ip) {
 0:
                        zulu = _closure2_slot2;
                        mike = zulu.get;
                        golf = mike.bind(zulu)();
                        mike = null;
                        mike = mike == golf;
                        if(mike) { _fun112661_ip = 48; continue _fun112661 }
 25:
                        oscar = _closure1_slot6;
                        report = _closure2_slot4;
                        tango = undefined;
                        zulu = argFoo;
                        mike = oscar.bind(tango)(zulu, golf, report);
 48:
                        if(mike) { _fun112661_ip = 67; continue _fun112661 }
 51:
                        zulu = _closure2_slot1;
                        mike = zulu.set;
                        entity = true;
                        entity = mike.bind(zulu)(entity);
 67:
                        entity = undefined;
                        return entity;
                    }
                };
                report = {};
                golf = _closure2_slot2;
                report['coordinates'] = golf;
                golf = _closure1_slot6;
                report['inBoundingBox'] = golf;
                golf = _closure2_slot4;
                report['safeAreaTop'] = golf;
                oscar = _closure2_slot1;
                report['dismissed'] = oscar;
                entity['__closure'] = report;
                report = 10071170709243.0;
                entity['__workletHash'] = report;
                tango = _closure1_slot7;
                entity['__initData'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = oscar.bind(tango)(zulu, report);
            var _closure2_slot5 = oscar;
            report = tango.useCallback;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function(argFoo) {
                zulu = _closure2_slot2;
                mike = zulu.set;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            report = report.bind(tango)(mike, zulu);
            var _closure2_slot6 = report;
            golf = tango.useCallback;
            zulu = new Array(1);
            zulu[0] = options;
            mike = function() {
                zulu = _closure2_slot1;
                mike = zulu.set;
                entity = true;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            golf = golf.bind(tango)(mike, zulu);
            var _closure2_slot7 = golf;
            zulu = tango.useMemo;
            mike = new Array(4);
            mike[0] = options;
            mike[1] = golf;
            mike[2] = oscar;
            mike[3] = report;
            entity = function() {
                entity = {};
                zulu = _closure2_slot5;
                entity['gesture'] = zulu;
                zulu = _closure2_slot1;
                entity['dismissed'] = zulu;
                zulu = _closure2_slot6;
                entity['onLayoutMeasure'] = zulu;
                mike = _closure2_slot7;
                entity['setDismissed'] = mike;
                return entity;
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['useSearchSuggestionsGesture'] = mike;
    return entity;
})();