// app/design/components/experimental/Button/native/CollapsibleFloatingActionButtonState.native.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = {};
    golfie = 'function CollapsibleFloatingActionButtonStateNativeTsx1({nativeEvent:nativeEvent}){const{initialScrollStart,previousOffset,MINIMUM_SCROLL_DISTANCE_TO_CLOSE,collapseText,SCROLL_OFFSET_THRESHOLD}=this.__closure;if(nativeEvent==null)return;const{contentOffset:{y:currentOffset},contentSize:{height:contentHeight},layoutMeasurement:{height:layoutHeight}}=nativeEvent;if(currentOffset<initialScrollStart)return;const contentHeightAsOffset=currentOffset+layoutHeight;if(contentHeightAsOffset>contentHeight)return;const offsetChanged=currentOffset-previousOffset.get();if(currentOffset<MINIMUM_SCROLL_DISTANCE_TO_CLOSE){collapseText.set(0);}else{if(Math.abs(offsetChanged)>SCROLL_OFFSET_THRESHOLD){collapseText.set(offsetChanged<0?0:1);}}previousOffset.set(currentOffset);}';
    tangon['code'] = golfie;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/experimental/Button/native/CollapsibleFloatingActionButtonState.native.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: useCollapsibleFloatingActionButtonState
        entity = {};
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 1;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useSharedValue;
        michal = 0;
        michal = zuuluu.bind(tangon)(michal);
        entity['collapseText'] = michal;
        return entity;
    };
    zuuluu['useCollapsibleFloatingActionButtonState'] = tangon;
    michal = function(argFoo) { // Original name: useCollapsibleFloatingActionButtonScroll
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = arguments[1];
            entity = argFoo;
            report = entity.collapseText;
            var _closure2_slot0 = report;
            oscard = undefined;
            if(!(golfie === oscard)) { _fun00002_ip = 26; continue _fun00001 }
 24:
            golfie = 0;
 26:
            var _closure2_slot1 = golfie;
            var _closure2_slot2 = oscard;
            tangon = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 1;
            zuuluu = option[zuuluu];
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.useSharedValue;
            oscard = zuuluu.bind(tangon)(golfie);
            _closure2_slot2 = oscard;
            tangon = _closure1_slot2;
            zuuluu = tangon.useCallback;
            michal = function(argFoo) { // Original name: s
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    entity = entity.nativeEvent;
                    michal = null;
                    if(!(michal != entity)) { _fun00004_ip = 173; continue _fun00003 }
 17:
                    michal = entity.contentOffset;
                    zuuluu = michal.y;
                    michal = entity.contentSize;
                    tangon = michal.height;
                    entity = entity.layoutMeasurement;
                    michal = entity.height;
                    report = _closure2_slot1;
                    if(!(!(zuuluu < report))) { _fun00004_ip = 173; continue _fun00003 }
 61:
                    michal = zuuluu + michal;
                    if(!(!(michal > tangon))) { _fun00004_ip = 173; continue _fun00003 }
 69:
                    tangon = _closure2_slot2;
                    michal = tangon.get;
                    michal = michal.bind(tangon)();
                    golfie = zuuluu - michal;
                    tangon = 10;
                    if(!(!(zuuluu < tangon))) { _fun00004_ip = 143; continue _fun00003 }
 93:
                    michal = global;
                    report = michal.Math;
                    michal = report.abs;
                    michal = michal.bind(report)(golfie);
                    if(!(michal > tangon)) { _fun00004_ip = 159; continue _fun00003 }
 116:
                    report = _closure2_slot0;
                    tangon = report.set;
                    michal = 1;
                    oscard = 0;
                    if(!(golfie < oscard)) { _fun00004_ip = 136; continue _fun00003 }
 134:
                    michal = 0;
 136:
                    michal = tangon.bind(report)(michal);
                    _fun00004_ip = 159; continue _fun00003;
 143:
                    report = _closure2_slot0;
                    tangon = report.set;
                    michal = 0;
                    michal = tangon.bind(report)(michal);
 159:
                    michal = _closure2_slot2;
                    entity = michal.set;
                    entity = entity.bind(michal)(zuuluu);
 173:
                    entity = undefined;
                    return entity;
                }
            };
            option = {};
            option['initialScrollStart'] = golfie;
            option['previousOffset'] = oscard;
            verify = 10;
            option['MINIMUM_SCROLL_DISTANCE_TO_CLOSE'] = verify;
            option['collapseText'] = report;
            option['SCROLL_OFFSET_THRESHOLD'] = verify;
            michal['__closure'] = option;
            option = 10435259247914.0;
            michal['__workletHash'] = option;
            entity = _closure1_slot3;
            michal['__initData'] = entity;
            entity = new Array(3);
            entity[0] = golfie;
            entity[1] = oscard;
            entity[2] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['useCollapsibleFloatingActionButtonScroll'] = michal;
    return entity;
})();