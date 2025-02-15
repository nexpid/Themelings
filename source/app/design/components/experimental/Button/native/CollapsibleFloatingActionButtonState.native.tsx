// app/design/components/experimental/Button/native/CollapsibleFloatingActionButtonState.native.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = tango;
    tango = {};
    golf = 'function CollapsibleFloatingActionButtonStateNativeTsx1({nativeEvent:nativeEvent}){const{initialScrollStart,previousOffset,MINIMUM_SCROLL_DISTANCE_TO_CLOSE,collapseText,SCROLL_OFFSET_THRESHOLD}=this.__closure;if(nativeEvent==null)return;const{contentOffset:{y:currentOffset},contentSize:{height:contentHeight},layoutMeasurement:{height:layoutHeight}}=nativeEvent;if(currentOffset<initialScrollStart)return;const contentHeightAsOffset=currentOffset+layoutHeight;if(contentHeightAsOffset>contentHeight)return;const offsetChanged=currentOffset-previousOffset.get();if(currentOffset<MINIMUM_SCROLL_DISTANCE_TO_CLOSE){collapseText.set(0);}else{if(Math.abs(offsetChanged)>SCROLL_OFFSET_THRESHOLD){collapseText.set(offsetChanged<0?0:1);}}previousOffset.set(currentOffset);}';
    tango['code'] = golf;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/experimental/Button/native/CollapsibleFloatingActionButtonState.native.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: useCollapsibleFloatingActionButtonState
        entity = {};
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 1;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useSharedValue;
        mike = 0;
        mike = zulu.bind(tango)(mike);
        entity['collapseText'] = mike;
        return entity;
    };
    zulu['useCollapsibleFloatingActionButtonState'] = tango;
    mike = function(argFoo) { // Original name: useCollapsibleFloatingActionButtonScroll
        _fun76266: for(var _fun76266_ip = 0; ; ) switch(_fun76266_ip) {
 0:
            golf = arguments[1];
            entity = argFoo;
            report = entity.collapseText;
            var _closure2_slot0 = report;
            oscar = undefined;
            if(!(golf === oscar)) { _fun76266_ip = 26; continue _fun76266 }
 24:
            golf = 0;
 26:
            var _closure2_slot1 = golf;
            var _closure2_slot2 = oscar;
            tango = _closure1_slot0;
            options = _closure1_slot1;
            zulu = 1;
            zulu = options[zulu];
            tango = tango.bind(oscar)(zulu);
            zulu = tango.useSharedValue;
            oscar = zulu.bind(tango)(golf);
            _closure2_slot2 = oscar;
            tango = _closure1_slot2;
            zulu = tango.useCallback;
            mike = function(argFoo) { // Original name: s
                _fun76267: for(var _fun76267_ip = 0; ; ) switch(_fun76267_ip) {
 0:
                    entity = argFoo;
                    entity = entity.nativeEvent;
                    mike = null;
                    if(!(mike != entity)) { _fun76267_ip = 173; continue _fun76267 }
 17:
                    mike = entity.contentOffset;
                    zulu = mike.y;
                    mike = entity.contentSize;
                    tango = mike.height;
                    entity = entity.layoutMeasurement;
                    mike = entity.height;
                    report = _closure2_slot1;
                    if(!(!(zulu < report))) { _fun76267_ip = 173; continue _fun76267 }
 61:
                    mike = zulu + mike;
                    if(!(!(mike > tango))) { _fun76267_ip = 173; continue _fun76267 }
 69:
                    tango = _closure2_slot2;
                    mike = tango.get;
                    mike = mike.bind(tango)();
                    golf = zulu - mike;
                    tango = 10;
                    if(!(!(zulu < tango))) { _fun76267_ip = 143; continue _fun76267 }
 93:
                    mike = global;
                    report = mike.Math;
                    mike = report.abs;
                    mike = mike.bind(report)(golf);
                    if(!(mike > tango)) { _fun76267_ip = 159; continue _fun76267 }
 116:
                    report = _closure2_slot0;
                    tango = report.set;
                    mike = 1;
                    oscar = 0;
                    if(!(golf < oscar)) { _fun76267_ip = 136; continue _fun76267 }
 134:
                    mike = 0;
 136:
                    mike = tango.bind(report)(mike);
                    _fun76267_ip = 159; continue _fun76267;
 143:
                    report = _closure2_slot0;
                    tango = report.set;
                    mike = 0;
                    mike = tango.bind(report)(mike);
 159:
                    mike = _closure2_slot2;
                    entity = mike.set;
                    entity = entity.bind(mike)(zulu);
 173:
                    entity = undefined;
                    return entity;
                }
            };
            options = {};
            options['initialScrollStart'] = golf;
            options['previousOffset'] = oscar;
            verify = 10;
            options['MINIMUM_SCROLL_DISTANCE_TO_CLOSE'] = verify;
            options['collapseText'] = report;
            options['SCROLL_OFFSET_THRESHOLD'] = verify;
            mike['__closure'] = options;
            options = 10435259247914.0;
            mike['__workletHash'] = options;
            entity = _closure1_slot3;
            mike['__initData'] = entity;
            entity = new Array(3);
            entity[0] = golf;
            entity[1] = oscar;
            entity[2] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['useCollapsibleFloatingActionButtonScroll'] = mike;
    return entity;
})();