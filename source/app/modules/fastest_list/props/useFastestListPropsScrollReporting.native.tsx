// app/modules/fastest_list/props/useFastestListPropsScrollReporting.native.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = {};
    oscar = 'function useFastestListPropsScrollReportingNativeTsx1(event){const{scrollPosition,horizontal}=this.__closure;if(scrollPosition!=null){scrollPosition.set(horizontal?event.contentOffset.x:event.contentOffset.y);}}';
    entity['code'] = oscar;
    var _closure1_slot2 = entity;
    entity = 1;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/fastest_list/props/useFastestListPropsScrollReporting.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useFastestListPropsScrollReporting
        _fun78581: for(var _fun78581_ip = 0; ; ) switch(_fun78581_ip) {
 0:
            zulu = argFoo;
            verify = argBar;
            var _closure2_slot0 = verify;
            mike = zulu.scrollReporting;
            report = undefined;
            entity = 'animatedScrollPosition';
            offset = undefined;
            if(!(entity === mike)) { _fun78581_ip = 38; continue _fun78581 }
 32:
            offset = zulu.scrollPosition;
 38:
            var _closure2_slot1 = offset;
            tango = _closure1_slot0;
            options = _closure1_slot1;
            mike = 0;
            mike = options[mike];
            report = tango.bind(report)(mike);
            tango = report.useAnimatedScrollHandler;
            mike = {};
            oscar = function(argFoo) { // Original name: n
                _fun78582: for(var _fun78582_ip = 0; ; ) switch(_fun78582_ip) {
 0:
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike != zulu)) { _fun78582_ip = 55; continue _fun78582 }
 13:
                    zulu = _closure2_slot1;
                    mike = zulu.set;
                    entity = _closure2_slot0;
                    tango = argFoo;
                    tango = tango.contentOffset;
                    if(entity) { _fun78582_ip = 45; continue _fun78582 }
 38:
                    entity = tango.y;
                    _fun78582_ip = 50; continue _fun78582;
 45:
                    entity = tango.x;
 50:
                    entity = mike.bind(zulu)(entity);
 55:
                    entity = undefined;
                    return entity;
                }
            };
            options = {};
            options['scrollPosition'] = offset;
            options['horizontal'] = verify;
            oscar['__closure'] = options;
            options = 14196294214838.0;
            oscar['__workletHash'] = options;
            golf = _closure1_slot2;
            oscar['__initData'] = golf;
            mike['onScroll'] = oscar;
            mike = tango.bind(report)(mike);
            tango = zulu.scrollReporting;
            if(!(entity !== tango)) { _fun78581_ip = 205; continue _fun78581 }
 143:
            entity = 'animatedCallbacks';
            if(!(entity !== tango)) { _fun78581_ip = 190; continue _fun78581 }
 153:
            entity = {};
            tango = zulu.onScroll;
            entity['onScroll'] = tango;
            tango = zulu.onScrollBeginDrag;
            entity['onScrollBeginDrag'] = tango;
            tango = zulu.onScrollEndDrag;
            entity['onScrollEndDrag'] = tango;
            return entity;
 190:
            entity = {};
            zulu = zulu.scrollHandlerAnimated;
            entity['onScroll'] = zulu;
            return entity;
 205:
            entity = {};
            entity['onScroll'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();