// app/design/components/Sticky/native/StickyHeader.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    mike = function(argFoo) { // Original name: useStickyHeaderStyles
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golf = argFoo;
            oscar = arguments[1];
            var _closure2_slot0 = golf;
            verify = undefined;
            if(!(oscar === verify)) { _fun00002_ip = 20; continue _fun00001 }
 18:
            oscar = true;
 20:
            var _closure2_slot1 = oscar;
            var _closure2_slot2 = verify;
            report = _closure1_slot3;
            zulu = report.useContext;
            options = _closure1_slot0;
            offset = _closure1_slot2;
            mike = 5;
            mike = offset[mike];
            mike = options.bind(verify)(mike);
            mike = mike.AccessibilityPreferencesContext;
            mike = zulu.bind(report)(mike);
            mike = mike.reducedMotion;
            yankee = mike.enabled;
            _closure2_slot2 = yankee;
            mike = 2;
            mike = offset[mike];
            zulu = options.bind(verify)(mike);
            mike = zulu.useAnimatedStyle;
            entity = function() { // Original name: l
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot2;
                    mike = {};
                    report = _closure2_slot0;
                    zulu = report.get;
                    zulu = zulu.bind(report)();
                    golf = 0;
                    report = zulu > golf;
                    zulu = 'relative';
                    if(entity) { _fun00004_ip = 163; continue _fun00003 }
 38:
                    entity = zulu;
                    if(!report) { _fun00004_ip = 48; continue _fun00003 }
 44:
                    entity = 'absolute';
 48:
                    mike['position'] = entity;
                    oscar = {};
                    offset = _closure1_slot0;
                    verify = _closure1_slot2;
                    options = 6;
                    verify = verify[options];
                    options = undefined;
                    yankee = offset.bind(options)(verify);
                    offset = yankee.withTiming;
                    options = _closure2_slot1;
                    verify = 0;
                    if(options) { _fun00004_ip = 109; continue _fun00003 }
 93:
                    romeo = _closure2_slot0;
                    options = romeo.get;
                    options = options.bind(romeo)();
                    verify = -options;
 109:
                    options = {};
                    romeo = _closure1_slot6;
                    options['duration'] = romeo;
                    entity = _closure1_slot5;
                    options['easing'] = entity;
                    entity = 'animate-always';
                    entity = offset.bind(yankee)(verify, options, entity);
                    oscar['translateY'] = entity;
                    entity = new Array(1);
                    entity[0] = oscar;
                    mike['transform'] = entity;
                    entity = mike;
                    _fun00004_ip = 255; continue _fun00003;
 163:
                    if(!report) { _fun00004_ip = 170; continue _fun00003 }
 166:
                    zulu = 'absolute';
 170:
                    mike['position'] = zulu;
                    options = _closure1_slot0;
                    oscar = _closure1_slot2;
                    report = 6;
                    oscar = oscar[report];
                    report = undefined;
                    oscar = options.bind(report)(oscar);
                    report = oscar.withTiming;
                    tango = _closure2_slot1;
                    golf = 0;
                    if(!tango) { _fun00004_ip = 216; continue _fun00003 }
 213:
                    golf = 1;
 216:
                    tango = {};
                    options = _closure1_slot6;
                    tango['duration'] = options;
                    zulu = _closure1_slot5;
                    tango['easing'] = zulu;
                    zulu = 'animate-always';
                    zulu = report.bind(oscar)(golf, tango, zulu);
                    mike['opacity'] = zulu;
                    entity = mike;
 255:
                    return entity;
                }
            };
            report = {};
            report['useReducedMotion'] = yankee;
            report['headerHeight'] = golf;
            golf = 6;
            golf = offset[golf];
            golf = options.bind(verify)(golf);
            golf = golf.withTiming;
            report['withTiming'] = golf;
            report['show'] = oscar;
            oscar = _closure1_slot6;
            report['SHOW_DURATION'] = oscar;
            oscar = _closure1_slot5;
            report['SHOW_EASING'] = oscar;
            entity['__closure'] = report;
            report = 10390349288548.0;
            entity['__workletHash'] = report;
            tango = _closure1_slot8;
            entity['__initData'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot9 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    romeo = 0;
    options = golf[romeo];
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot3 = report;
    yankee = 1;
    report = golf[yankee];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    offset = report.Easing;
    verify = offset.bezier;
    sizing = 0.4;
    backup = 0.2;
    output = offset;
    kilo = 0;
    foxtrot = yankee;
    report = output[verify](sizing, kilo, backup, foxtrot, romeo);
    var _closure1_slot5 = report;
    report = 300;
    var _closure1_slot6 = report;
    report = 3;
    report = golf[report];
    verify = oscar.bind(entity)(report);
    options = verify.createStyles;
    report = {};
    offset = {'zIndex': 1, 'width': '100%', 'top': 0};
    report['container'] = offset;
    report = options.bind(verify)(report);
    var _closure1_slot7 = report;
    report = {};
    options = "function StickyHeaderNativeTsx1(){const{useReducedMotion,headerHeight,withTiming,show,SHOW_DURATION,SHOW_EASING}=this.__closure;return useReducedMotion?{position:headerHeight.get()>0?'absolute':'relative',opacity:withTiming(show?1:0,{duration:SHOW_DURATION,easing:SHOW_EASING},'animate-always')}:{position:headerHeight.get()>0?'absolute':'relative',transform:[{translateY:withTiming(show?0:-headerHeight.get(),{duration:SHOW_DURATION,easing:SHOW_EASING},'animate-always')}]};}";
    report['code'] = options;
    var _closure1_slot8 = report;
    report = 7;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'design/components/Sticky/native/StickyHeader.native.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: StickyHeader
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            golf = entity.show;
            tango = undefined;
            if(!(golf === tango)) { _fun00006_ip = 19; continue _fun00005 }
 17:
            golf = true;
 19:
            var _closure2_slot0 = golf;
            report = entity.children;
            var _closure2_slot1 = tango;
            var _closure2_slot2 = tango;
            var _closure2_slot3 = tango;
            zulu = _closure1_slot7;
            options = zulu.bind(tango)();
            verify = _closure1_slot3;
            oscar = verify.useContext;
            yankee = _closure1_slot0;
            offset = _closure1_slot2;
            zulu = 4;
            zulu = offset[zulu];
            zulu = yankee.bind(tango)(zulu);
            zulu = zulu.StickyContext;
            oscar = oscar.bind(verify)(zulu);
            zulu = oscar.headerHeight;
            romeo = oscar.setHeaderHeight;
            _closure2_slot1 = romeo;
            oscar = oscar.setShowHeader;
            _closure2_slot2 = oscar;
            foxtrot = _closure1_slot3;
            yankee = foxtrot.useRef;
            verify = -1;
            verify = yankee.bind(foxtrot)(verify);
            _closure2_slot3 = verify;
            foxtrot = _closure1_slot3;
            yankee = foxtrot.useEffect;
            verify = new Array(2);
            verify[0] = golf;
            verify[1] = oscar;
            oscar = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = _closure2_slot0;
                    if(zulu) { _fun00008_ip = 29; continue _fun00007 }
 12:
                    report = _closure2_slot2;
                    tango = _closure2_slot0;
                    zulu = undefined;
                    zulu = report.bind(zulu)(tango);
                    _fun00008_ip = 69; continue _fun00007;
 29:
                    zulu = _closure2_slot3;
                    mike = global;
                    oscar = mike.setTimeout;
                    report = _closure1_slot6;
                    tango = undefined;
                    mike = function() {
                        zulu = _closure2_slot2;
                        mike = _closure2_slot0;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        return entity;
                    };
                    mike = oscar.bind(tango)(mike, report);
                    zulu['current'] = mike;
 69:
                    entity = function() {
                        entity = global;
                        zulu = entity.clearTimeout;
                        entity = _closure2_slot3;
                        mike = entity.current;
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    return entity;
                }
            };
            oscar = yankee.bind(foxtrot)(oscar, verify);
            yankee = _closure1_slot3;
            verify = yankee.useCallback;
            oscar = new Array(1);
            oscar[0] = romeo;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.layout;
                zulu = entity.height;
                mike = _closure2_slot1;
                entity = undefined;
                mike = mike.bind(entity)(zulu);
                return entity;
            };
            oscar = verify.bind(yankee)(mike, oscar);
            mike = _closure1_slot9;
            verify = mike.bind(tango)(zulu, golf);
            zulu = _closure1_slot4;
            mike = _closure1_slot1;
            entity = 2;
            entity = offset[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.View;
            entity = {};
            offset = options.container;
            options = new Array(2);
            options[0] = offset;
            options[1] = verify;
            entity['style'] = options;
            entity['onLayout'] = oscar;
            oscar = !golf;
            entity['accessibilityElementsHidden'] = oscar;
            oscar = 'no-hide-descendants';
            if(!golf) { _fun00006_ip = 290; continue _fun00005 }
 286:
            oscar = 'auto';
 290:
            entity['importantForAccessibility'] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['StickyHeader'] = tango;
    zulu['useStickyHeaderStyles'] = mike;
    return entity;
})();