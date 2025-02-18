// app/modules/fastest_list/props/useFastestListPropsScrollReporting.native.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = {};
    oscard = 'function useFastestListPropsScrollReportingNativeTsx1(event){const{scrollPosition,horizontal}=this.__closure;if(scrollPosition!=null){scrollPosition.set(horizontal?event.contentOffset.x:event.contentOffset.y);}}';
    entity['code'] = oscard;
    var _closure1_slot2 = entity;
    entity = 1;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/fastest_list/props/useFastestListPropsScrollReporting.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useFastestListPropsScrollReporting
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            verify = argBar;
            var _closure2_slot0 = verify;
            michal = zuuluu.scrollReporting;
            report = undefined;
            entity = 'animatedScrollPosition';
            offset = undefined;
            if(!(entity === michal)) { _fun00002_ip = 38; continue _fun00001 }
 32:
            offset = zuuluu.scrollPosition;
 38:
            var _closure2_slot1 = offset;
            tangon = _closure1_slot0;
            option = _closure1_slot1;
            michal = 0;
            michal = option[michal];
            report = tangon.bind(report)(michal);
            tangon = report.useAnimatedScrollHandler;
            michal = {};
            oscard = function(argFoo) { // Original name: n
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00004_ip = 55; continue _fun00003 }
 13:
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.set;
                    entity = _closure2_slot0;
                    tangon = argFoo;
                    tangon = tangon.contentOffset;
                    if(entity) { _fun00004_ip = 45; continue _fun00003 }
 38:
                    entity = tangon.y;
                    _fun00004_ip = 50; continue _fun00003;
 45:
                    entity = tangon.x;
 50:
                    entity = michal.bind(zuuluu)(entity);
 55:
                    entity = undefined;
                    return entity;
                }
            };
            option = {};
            option['scrollPosition'] = offset;
            option['horizontal'] = verify;
            oscard['__closure'] = option;
            option = 14196294214838.0;
            oscard['__workletHash'] = option;
            golfie = _closure1_slot2;
            oscard['__initData'] = golfie;
            michal['onScroll'] = oscard;
            michal = tangon.bind(report)(michal);
            tangon = zuuluu.scrollReporting;
            if(!(entity !== tangon)) { _fun00002_ip = 203; continue _fun00001 }
 141:
            entity = 'animatedCallbacks';
            if(!(entity !== tangon)) { _fun00002_ip = 188; continue _fun00001 }
 151:
            entity = {};
            tangon = zuuluu.onScroll;
            entity['onScroll'] = tangon;
            tangon = zuuluu.onScrollBeginDrag;
            entity['onScrollBeginDrag'] = tangon;
            tangon = zuuluu.onScrollEndDrag;
            entity['onScrollEndDrag'] = tangon;
            return entity;
 188:
            entity = {};
            zuuluu = zuuluu.scrollHandlerAnimated;
            entity['onScroll'] = zuuluu;
            return entity;
 203:
            entity = {};
            entity['onScroll'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();