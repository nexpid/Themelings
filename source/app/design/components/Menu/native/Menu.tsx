// app/design/components/Menu/native/Menu.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    foxtrot = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = foxtrot;
    var _closure1_slot2 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot3 = tango;
    backup = 1;
    report = golf[backup];
    tango = argCorge;
    options = tango.bind(entity)(report);
    var _closure1_slot4 = options;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    romeo = tango.StyleSheet;
    report = tango.Dimensions;
    var _closure1_slot5 = report;
    tango = tango.ScrollView;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = golf[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.NOOP;
    var _closure1_slot8 = tango;
    report = 5;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot9 = report;
    report = {'mass': 1, 'stiffness': 300, 'damping': 25, 'restSpeedThreshold': 0.01, 'restDisplacementThreshold': 0.01};
    var _closure1_slot10 = report;
    report = {};
    verify = 250;
    report['duration'] = verify;
    verify = 6;
    verify = golf[verify];
    verify = oscar.bind(entity)(verify);
    verify = verify.STANDARD_EASING;
    report['easing'] = verify;
    var _closure1_slot11 = report;
    report = 7;
    report = golf[report];
    offset = oscar.bind(entity)(report);
    verify = offset.createStyles;
    report = {};
    yankee = {};
    sizing = romeo.absoluteFillObject;
    output = yankee;
    romeo = copyDataProperties(output, sizing);
    romeo = 'zIndex';
    yankee[romeo] = backup;
    report['backdrop'] = yankee;
    yankee = {};
    romeo = 'absolute';
    yankee['position'] = romeo;
    romeo = 8;
    backup = golf[romeo];
    backup = foxtrot.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_FLOATING;
    yankee['backgroundColor'] = backup;
    romeo = golf[romeo];
    romeo = foxtrot.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.sm;
    yankee['borderRadius'] = romeo;
    romeo = 220;
    yankee['width'] = romeo;
    report['menu'] = yankee;
    report = verify.bind(offset)(report);
    var _closure1_slot12 = report;
    report = {};
    report['menuClose'] = tango;
    report['menuDismiss'] = tango;
    tango = options.createContext;
    tango = tango.bind(options)(report);
    var _closure1_slot13 = tango;
    report = {};
    options = 'function measureButtonRef_MenuTsx1(ref,setDimensions){const{measure,runOnJS}=this.__closure;const measurements=measure(ref);if(measurements==null)return;runOnJS(setDimensions)(measurements);}';
    report['code'] = options;
    var _closure1_slot14 = report;
    report = function() {
        entity = function(argFoo, argBar) { // Original name: measureButtonRef
            _fun47929: for(var _fun47929_ip = 0; ; ) switch(_fun47929_ip) {
 0:
                tango = _closure1_slot0;
                entity = _closure1_slot2;
                report = 9;
                zulu = entity[report];
                entity = undefined;
                oscar = tango.bind(entity)(zulu);
                tango = oscar.measure;
                zulu = argFoo;
                zulu = tango.bind(oscar)(zulu);
                tango = null;
                if(!(tango != zulu)) { _fun47929_ip = 80; continue _fun47929 }
 45:
                tango = _closure1_slot0;
                mike = _closure1_slot2;
                mike = mike[report];
                report = tango.bind(entity)(mike);
                tango = report.runOnJS;
                mike = argBar;
                mike = tango.bind(report)(mike);
                mike = mike.bind(entity)(zulu);
 80:
                return entity;
            }
        };
        zulu = {};
        oscar = _closure1_slot0;
        golf = _closure1_slot2;
        tango = 9;
        options = golf[tango];
        report = undefined;
        options = oscar.bind(report)(options);
        options = options.measure;
        zulu['measure'] = options;
        tango = golf[tango];
        tango = oscar.bind(report)(tango);
        tango = tango.runOnJS;
        zulu['runOnJS'] = tango;
        entity['__closure'] = zulu;
        zulu = 15651320687527.0;
        entity['__workletHash'] = zulu;
        mike = _closure1_slot14;
        entity['__initData'] = mike;
        return entity;
    };
    report = report.bind(entity)();
    var _closure1_slot15 = report;
    report = {};
    options = 'function MenuTsx2(){const{runOnJS,openMenuCallback}=this.__closure;return runOnJS(openMenuCallback)();}';
    report['code'] = options;
    var _closure1_slot16 = report;
    report = {};
    options = 'function MenuTsx3(){const{runOnJS,closeMenuCallback}=this.__closure;return runOnJS(closeMenuCallback)();}';
    report['code'] = options;
    var _closure1_slot17 = report;
    report = {};
    options = "function MenuTsx4(){const{visible,useReducedMotion,interpolate,dirX,size,offsetAnimated,dirY}=this.__closure;var _offsetAnimated,_offsetAnimated$get,_offsetAnimated2,_offsetAnimated$get2;return{opacity:visible.get(),transform:useReducedMotion?[]:[{translateX:interpolate(visible.get(),[0,1],[(dirX==='left'?-1:1)*size.get().width/4,((_offsetAnimated=offsetAnimated)===null||_offsetAnimated===void 0||(_offsetAnimated=_offsetAnimated.get())===null||_offsetAnimated===void 0?void 0:_offsetAnimated.x)!=null?(_offsetAnimated$get=offsetAnimated.get())===null||_offsetAnimated$get===void 0?void 0:_offsetAnimated$get.x:0])},{translateY:interpolate(visible.get(),[0,1],[(dirY==='top'?-1:1)*size.get().height/4,((_offsetAnimated2=offsetAnimated)===null||_offsetAnimated2===void 0||(_offsetAnimated2=_offsetAnimated2.get())===null||_offsetAnimated2===void 0?void 0:_offsetAnimated2.y)!=null?(_offsetAnimated$get2=offsetAnimated.get())===null||_offsetAnimated$get2===void 0?void 0:_offsetAnimated$get2.y:0])},{scale:visible.get()/2+0.5}]};}";
    report['code'] = options;
    var _closure1_slot18 = report;
    report = 21;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'design/components/Menu/native/Menu.tsx';
    report = oscar.bind(golf)(report);
    report = 10;
    zulu['MENU_OFFSET'] = report;
    zulu['MenuContext'] = tango;
    mike = function(argFoo) { // Original name: Menu
        _fun47930: for(var _fun47930_ip = 0; ; ) switch(_fun47930_ip) {
 0:
            mike = argFoo;
            foxtrot = mike.toggleButtonRef;
            var _closure2_slot0 = foxtrot;
            oscar = mike.onClose;
            entity = mike.position;
            tango = undefined;
            if(!(entity === tango)) { _fun47930_ip = 36; continue _fun47930 }
 32:
            entity = 'right';
 36:
            lima = mike.align;
            if(!(lima === tango)) { _fun47930_ip = 50; continue _fun47930 }
 46:
            lima = 'start';
 50:
            offset = mike.offset;
            result = mike.offsetAnimated;
            var _closure2_slot1 = result;
            options = mike.style;
            backup = mike.children;
            var _closure2_slot2 = tango;
            var _closure2_slot3 = tango;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            var _closure2_slot7 = tango;
            var _closure2_slot8 = tango;
            var _closure2_slot9 = tango;
            var _closure2_slot10 = tango;
            var _closure2_slot11 = tango;
            var _closure2_slot12 = tango;
            mike = _closure1_slot12;
            golf = mike.bind(tango)();
            sizing = _closure1_slot0;
            kilo = _closure1_slot2;
            context = 10;
            mike = kilo[context];
            verify = sizing.bind(tango)(mike);
            report = verify.useStateFromStoresObject;
            mike = _closure1_slot7;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                entity = {};
                mike = _closure1_slot7;
                zulu = mike.keyboardHeight;
                entity['keyboardHeight'] = zulu;
                mike = mike.keyboardOpen;
                entity['keyboardOpen'] = mike;
                return entity;
            };
            mike = report.bind(verify)(zulu, mike);
            whiskey = mike.keyboardHeight;
            verify = mike.keyboardOpen;
            config = _closure1_slot4;
            zulu = config.useContext;
            mike = 11;
            mike = kilo[mike];
            mike = sizing.bind(tango)(mike);
            mike = mike.AccessibilityPreferencesContext;
            mike = zulu.bind(config)(mike);
            mike = mike.reducedMotion;
            source = mike.enabled;
            _closure2_slot2 = source;
            zulu = _closure1_slot1;
            update = 12;
            mike = kilo[update];
            mike = zulu.bind(tango)(mike);
            sequence = mike.bind(tango)();
            report = _closure1_slot5;
            zulu = report.get;
            mike = 'window';
            papa = zulu.bind(report)(mike);
            mike = config.useRef;
            control = null;
            mike = mike.bind(config)(control);
            _closure2_slot3 = mike;
            mike = config.useState;
            report = mike.bind(config)(control);
            zulu = _closure1_slot3;
            mike = 2;
            output = zulu.bind(tango)(report, mike);
            report = 0;
            variable36 = output[report];
            _closure2_slot4 = variable36;
            zulu = 1;
            output = output[zulu];
            _closure2_slot5 = output;
            output = 9;
            echo = kilo[output];
            vacuum = sizing.bind(tango)(echo);
            echo = vacuum.useSharedValue;
            vacuum = echo.bind(vacuum)(report);
            _closure2_slot6 = vacuum;
            kilo = kilo[output];
            echo = sizing.bind(tango)(kilo);
            sizing = echo.useSharedValue;
            kilo = {'width': 0, 'height': 0};
            echo = sizing.bind(echo)(kilo);
            _closure2_slot7 = echo;
            sizing = config.useLayoutEffect;
            kilo = new Array(2);
            kilo[0] = foxtrot;
            kilo[1] = variable36;
            foxtrot = function() {
                _fun47932: for(var _fun47932_ip = 0; ; ) switch(_fun47932_ip) {
 0:
                    entity = _closure2_slot0;
                    report = null;
                    tango = report == entity;
                    entity = undefined;
                    zulu = undefined;
                    if(tango) { _fun47932_ip = 29; continue _fun47932 }
 20:
                    tango = _closure2_slot0;
                    zulu = tango.current;
 29:
                    zulu = report != zulu;
                    if(!zulu) { _fun47932_ip = 44; continue _fun47932 }
 36:
                    tango = _closure2_slot4;
                    zulu = report == tango;
 44:
                    if(!zulu) { _fun47932_ip = 99; continue _fun47932 }
 47:
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 9;
                    tango = oscar[tango];
                    report = report.bind(entity)(tango);
                    tango = report.runOnUI;
                    zulu = _closure1_slot15;
                    tango = tango.bind(report)(zulu);
                    zulu = _closure2_slot0;
                    mike = _closure2_slot5;
                    mike = tango.bind(entity)(zulu, mike);
 99:
                    return entity;
                }
            };
            foxtrot = sizing.bind(config)(foxtrot, kilo);
            foxtrot = function() { // Original name: openMenuCallback
                _fun47933: for(var _fun47933_ip = 0; ; ) switch(_fun47933_ip) {
 0:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 13;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.isAndroid;
                    zulu = zulu.bind(tango)();
                    if(!zulu) { _fun47933_ip = 121; continue _fun47933 }
 37:
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    zulu = 14;
                    zulu = verify[zulu];
                    zulu = options.bind(entity)(zulu);
                    report = zulu.AccessibilityAnnouncer;
                    tango = report.announce;
                    zulu = 15;
                    oscar = verify[zulu];
                    oscar = options.bind(entity)(oscar);
                    golf = oscar.intl;
                    oscar = golf.string;
                    zulu = verify[zulu];
                    zulu = options.bind(entity)(zulu);
                    zulu = zulu.t;
                    zulu = zulu.ZqK0uL;
                    zulu = oscar.bind(golf)(zulu);
                    zulu = tango.bind(report)(zulu);
 121:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 16;
                    mike = tango[mike];
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.setAccessibilityFocus;
                    mike = {};
                    report = _closure2_slot3;
                    mike['ref'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            _closure2_slot8 = foxtrot;
            if(!(control == oscar)) { _fun47930_ip = 443; continue _fun47930 }
 439:
            oscar = _closure1_slot8;
 443:
            _closure2_slot9 = oscar;
            sizing = function() { // Original name: handleClose
                tango = _closure2_slot6;
                zulu = tango.set;
                romeo = _closure1_slot0;
                foxtrot = _closure1_slot2;
                entity = 17;
                report = foxtrot[entity];
                entity = undefined;
                verify = romeo.bind(entity)(report);
                options = verify.withTiming;
                sizing = _closure1_slot11;
                oscar = function() { // Original name: t
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 9;
                    entity = mike[entity];
                    mike = undefined;
                    tango = zulu.bind(mike)(entity);
                    zulu = tango.runOnJS;
                    entity = _closure2_slot9;
                    entity = zulu.bind(tango)(entity);
                    entity = entity.bind(mike)();
                    return entity;
                };
                report = {};
                yankee = 9;
                yankee = foxtrot[yankee];
                yankee = romeo.bind(entity)(yankee);
                yankee = yankee.runOnJS;
                report['runOnJS'] = yankee;
                offset = _closure2_slot9;
                report['closeMenuCallback'] = offset;
                oscar['__closure'] = report;
                report = 5879184549724.0;
                oscar['__workletHash'] = report;
                mike = _closure1_slot17;
                oscar['__initData'] = mike;
                output = 0;
                kilo = 'respect-motion-settings';
                result = verify;
                backup = oscar;
                mike = result[options](output, sizing, kilo, backup, foxtrot);
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            _closure2_slot10 = sizing;
            kilo = function() { // Original name: handleDismiss
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 16;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.setAccessibilityFocus;
                zulu = {};
                oscar = _closure2_slot0;
                zulu['ref'] = oscar;
                zulu = tango.bind(report)(zulu);
                mike = _closure2_slot10;
                mike = mike.bind(entity)();
                return entity;
            };
            record = _closure1_slot0;
            target = _closure1_slot2;
            oscar = 18;
            foxtrot = target[oscar];
            config = record.bind(tango)(foxtrot);
            foxtrot = config.generateBoxShadowStyle;
            oscar = target[oscar];
            oscar = record.bind(tango)(oscar);
            oscar = oscar.EIGHT_DP_ELEVATION_SHADOW_PARAMS;
            foxtrot = foxtrot.bind(config)(oscar);
            target = 'left';
            oscar = target === entity;
            if(oscar) { _fun47930_ip = 530; continue _fun47930 }
 518:
            sierra = 'row';
            config = 'right';
            if(!(config === entity)) { _fun47930_ip = 534; continue _fun47930 }
 530:
            sierra = 'column';
 534:
            if(!(control != variable36)) { _fun47930_ip = 655; continue _fun47930 }
 538:
            status = variable36.pageX;
            record = variable36.pageY;
            equality = 'right';
            config = 0;
            if(!(equality === entity)) { _fun47930_ip = 565; continue _fun47930 }
 560:
            config = variable36.width;
 565:
            equality = status + config;
            status = 'bottom';
            config = 0;
            if(!(status === entity)) { _fun47930_ip = 584; continue _fun47930 }
 579:
            config = variable36.height;
 584:
            quebec = record + config;
            record = 'end';
            status = equality;
            config = quebec;
            if(!(record === lima)) { _fun47930_ip = 643; continue _fun47930 }
 602:
            variable37 = 'row';
            record = 0;
            if(!(variable37 === sierra)) { _fun47930_ip = 617; continue _fun47930 }
 612:
            record = variable36.width;
 617:
            equality = equality + record;
            variable37 = 'column';
            record = 0;
            if(!(variable37 === sierra)) { _fun47930_ip = 636; continue _fun47930 }
 631:
            record = variable36.height;
 636:
            config = quebec + record;
            status = equality;
 643:
            record = {};
            record['x'] = status;
            record['y'] = config;
            _fun47930_ip = 665; continue _fun47930;
 655:
            record = {'x': 0, 'y': 0};
 665:
            status = _closure1_slot0;
            equality = _closure1_slot2;
            config = 13;
            config = equality[config];
            status = status.bind(tango)(config);
            config = status.isAndroid;
            config = config.bind(status)();
            equality = papa.height;
            if(config) { _fun47930_ip = 707; continue _fun47930 }
 702:
            config = equality;
            _fun47930_ip = 733; continue _fun47930;
 707:
            status = sequence.top;
            status = equality + status;
            if(verify) { _fun47930_ip = 726; continue _fun47930 }
 719:
            verify = sequence.bottom;
            _fun47930_ip = 729; continue _fun47930;
 726:
            verify = -whiskey;
 729:
            config = status + verify;
 733:
            verify = 'top';
            if(!(verify !== entity)) { _fun47930_ip = 763; continue _fun47930 }
 741:
            status = 'column';
            entity = verify;
            if(!(status === sierra)) { _fun47930_ip = 767; continue _fun47930 }
 752:
            status = 'end';
            entity = verify;
            if(!(status === lima)) { _fun47930_ip = 767; continue _fun47930 }
 763:
            entity = 'bottom';
 767:
            if(oscar) { _fun47930_ip = 792; continue _fun47930 }
 770:
            status = 'row';
            oscar = target;
            if(!(status === sierra)) { _fun47930_ip = 796; continue _fun47930 }
 781:
            status = 'end';
            oscar = target;
            if(!(status === lima)) { _fun47930_ip = 796; continue _fun47930 }
 792:
            oscar = 'right';
 796:
            if(!(target !== oscar)) { _fun47930_ip = 816; continue _fun47930 }
 800:
            target = papa.width;
            papa = record.x;
            target = target - papa;
            _fun47930_ip = 821; continue _fun47930;
 816:
            target = record.x;
 821:
            verify = verify === entity;
            record = record.y;
            if(verify) { _fun47930_ip = 839; continue _fun47930 }
 833:
            papa = config - record;
            _fun47930_ip = 842; continue _fun47930;
 839:
            papa = record;
 842:
            if(!(control == offset)) { _fun47930_ip = 882; continue _fun47930 }
 846:
            record = 'column';
            control = 0;
            if(!(record === sierra)) { _fun47930_ip = 859; continue _fun47930 }
 856:
            control = context;
 859:
            record = target + control;
            status = 'row';
            control = 0;
            if(!(status === sierra)) { _fun47930_ip = 876; continue _fun47930 }
 873:
            control = context;
 876:
            control = papa + control;
            _fun47930_ip = 900; continue _fun47930;
 882:
            context = offset.x;
            record = target + context;
            offset = offset.y;
            control = papa + offset;
 900:
            offset = {};
            offset[oscar] = record;
            offset[entity] = control;
            control = config - control;
            if(verify) { _fun47930_ip = 926; continue _fun47930 }
 919:
            verify = sequence.top;
            _fun47930_ip = 931; continue _fun47930;
 926:
            verify = sequence.bottom;
 931:
            verify = control - verify;
            update = verify - update;
            verify = 'maxHeight';
            offset[verify] = update;
            verify = new Array(3);
            verify[0] = offset;
            verify[1] = oscar;
            verify[2] = entity;
            oscar = _closure1_slot3;
            entity = 3;
            entity = oscar.bind(tango)(verify, entity);
            offset = entity[report];
            update = entity[zulu];
            _closure2_slot11 = update;
            verify = entity[mike];
            _closure2_slot12 = verify;
            control = _closure1_slot0;
            report = _closure1_slot2;
            entity = report[output];
            zulu = control.bind(tango)(entity);
            mike = zulu.useAnimatedStyle;
            entity = function() { // Original name: W
                _fun47937: for(var _fun47937_ip = 0; ; ) switch(_fun47937_ip) {
 0:
                    entity = {};
                    zulu = _closure2_slot6;
                    mike = zulu.get;
                    mike = mike.bind(zulu)();
                    entity['opacity'] = mike;
                    mike = _closure2_slot2;
                    if(mike) { _fun47937_ip = 500; continue _fun47937 }
 32:
                    zulu = {};
                    report = _closure1_slot0;
                    mike = _closure1_slot2;
                    options = 9;
                    mike = mike[options];
                    offset = undefined;
                    kilo = report.bind(offset)(mike);
                    backup = kilo.interpolate;
                    report = _closure2_slot6;
                    mike = report.get;
                    verify = mike.bind(report)();
                    golf = _closure2_slot11;
                    yankee = 1;
                    mike = 'left';
                    report = yankee;
                    if(!(mike === golf)) { _fun47937_ip = 102; continue _fun47937 }
 96:
                    report = -1;
 102:
                    golf = _closure2_slot7;
                    mike = golf.get;
                    mike = mike.bind(golf)();
                    mike = mike.width;
                    mike = report * mike;
                    golf = new Array(2);
                    foxtrot = 4;
                    mike = mike / foxtrot;
                    golf[0] = mike;
                    mike = _closure2_slot1;
                    romeo = null;
                    report = romeo == mike;
                    mike = undefined;
                    if(report) { _fun47937_ip = 181; continue _fun47937 }
 154:
                    sizing = _closure2_slot1;
                    report = sizing.get;
                    report = report.bind(sizing)();
                    sizing = romeo == report;
                    mike = undefined;
                    if(sizing) { _fun47937_ip = 181; continue _fun47937 }
 176:
                    mike = report.x;
 181:
                    sizing = romeo != mike;
                    mike = 0;
                    if(!sizing) { _fun47937_ip = 220; continue _fun47937 }
 190:
                    output = _closure2_slot1;
                    sizing = output.get;
                    output = sizing.bind(output)();
                    result = romeo == output;
                    sizing = undefined;
                    if(result) { _fun47937_ip = 217; continue _fun47937 }
 212:
                    sizing = output.x;
 217:
                    mike = sizing;
 220:
                    golf[1] = mike;
                    mike = [0, 1];
                    mike = backup.bind(kilo)(verify, mike, golf);
                    zulu['translateX'] = mike;
                    mike = new Array(3);
                    mike[0] = zulu;
                    zulu = {};
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    oscar = oscar[options];
                    verify = golf.bind(offset)(oscar);
                    options = verify.interpolate;
                    golf = _closure2_slot6;
                    oscar = golf.get;
                    golf = oscar.bind(golf)();
                    backup = _closure2_slot12;
                    oscar = 'top';
                    if(!(oscar === backup)) { _fun47937_ip = 310; continue _fun47937 }
 304:
                    yankee = -1;
 310:
                    backup = _closure2_slot7;
                    oscar = backup.get;
                    oscar = oscar.bind(backup)();
                    oscar = oscar.height;
                    yankee = yankee * oscar;
                    oscar = new Array(2);
                    yankee = yankee / foxtrot;
                    oscar[0] = yankee;
                    yankee = _closure2_slot1;
                    foxtrot = romeo == yankee;
                    yankee = undefined;
                    if(foxtrot) { _fun47937_ip = 384; continue _fun47937 }
 357:
                    backup = _closure2_slot1;
                    foxtrot = backup.get;
                    foxtrot = foxtrot.bind(backup)();
                    backup = romeo == foxtrot;
                    yankee = undefined;
                    if(backup) { _fun47937_ip = 384; continue _fun47937 }
 379:
                    yankee = foxtrot.y;
 384:
                    yankee = romeo != yankee;
                    report = 0;
                    if(!yankee) { _fun47937_ip = 423; continue _fun47937 }
 393:
                    foxtrot = _closure2_slot1;
                    yankee = foxtrot.get;
                    yankee = yankee.bind(foxtrot)();
                    romeo = romeo == yankee;
                    offset = undefined;
                    if(romeo) { _fun47937_ip = 420; continue _fun47937 }
 415:
                    offset = yankee.y;
 420:
                    report = offset;
 423:
                    oscar[1] = report;
                    report = [0, 1];
                    report = options.bind(verify)(golf, report, oscar);
                    zulu['translateY'] = report;
                    mike[1] = zulu;
                    zulu = {};
                    report = _closure2_slot6;
                    tango = report.get;
                    report = tango.bind(report)();
                    tango = 2;
                    report = report / tango;
                    tango = 0.5;
                    tango = report + tango;
                    zulu['scale'] = tango;
                    mike[2] = zulu;
                    _fun47937_ip = 504; continue _fun47937;
 500:
                    mike = new Array(0);
 504:
                    entity['transform'] = mike;
                    return entity;
                }
            };
            oscar = {};
            oscar['visible'] = vacuum;
            oscar['useReducedMotion'] = source;
            source = report[output];
            source = control.bind(tango)(source);
            source = source.interpolate;
            oscar['interpolate'] = source;
            oscar['dirX'] = update;
            oscar['size'] = echo;
            oscar['offsetAnimated'] = result;
            oscar['dirY'] = verify;
            entity['__closure'] = oscar;
            oscar = 7884133597410.0;
            entity['__workletHash'] = oscar;
            oscar = _closure1_slot18;
            entity['__initData'] = oscar;
            verify = mike.bind(zulu)(entity);
            zulu = _closure1_slot9;
            oscar = _closure1_slot1;
            entity = 19;
            entity = report[entity];
            mike = oscar.bind(tango)(entity);
            entity = {'style': null, 'accessibilityViewIsModal': true, 'importantForAccessibility': 'yes'};
            echo = golf.backdrop;
            result = new Array(1);
            result[0] = echo;
            entity['style'] = result;
            entity['onTouchDown'] = kilo;
            entity['onAccessibilityEscape'] = kilo;
            report = report[output];
            report = oscar.bind(tango)(report);
            oscar = report.View;
            report = {};
            output = 'list';
            report['accessibilityRole'] = output;
            output = golf.menu;
            golf = new Array(5);
            golf[0] = output;
            golf[1] = foxtrot;
            golf[2] = offset;
            golf[3] = verify;
            golf[4] = options;
            report['style'] = golf;
            golf = function(argFoo) { // Original name: onLayout
                tango = argFoo;
                zulu = _closure2_slot7;
                mike = zulu.set;
                entity = {};
                report = tango.nativeEvent;
                report = report.layout;
                report = report.width;
                entity['width'] = report;
                tango = tango.nativeEvent;
                tango = tango.layout;
                tango = tango.height;
                entity['height'] = tango;
                entity = mike.bind(zulu)(entity);
                tango = _closure2_slot6;
                zulu = tango.set;
                romeo = _closure1_slot0;
                foxtrot = _closure1_slot2;
                entity = 20;
                report = foxtrot[entity];
                entity = undefined;
                verify = romeo.bind(entity)(report);
                options = verify.withSpring;
                sizing = _closure1_slot10;
                oscar = function() { // Original name: n
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 9;
                    entity = mike[entity];
                    mike = undefined;
                    tango = zulu.bind(mike)(entity);
                    zulu = tango.runOnJS;
                    entity = _closure2_slot8;
                    entity = zulu.bind(tango)(entity);
                    entity = entity.bind(mike)();
                    return entity;
                };
                report = {};
                yankee = 9;
                yankee = foxtrot[yankee];
                yankee = romeo.bind(entity)(yankee);
                yankee = yankee.runOnJS;
                report['runOnJS'] = yankee;
                offset = _closure2_slot8;
                report['openMenuCallback'] = offset;
                oscar['__closure'] = report;
                report = 14966618105405.0;
                oscar['__workletHash'] = report;
                mike = _closure1_slot16;
                oscar['__initData'] = mike;
                output = 1;
                kilo = 'respect-motion-settings';
                result = verify;
                backup = oscar;
                mike = result[options](output, sizing, kilo, backup, foxtrot);
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            report['onLayout'] = golf;
            options = _closure1_slot6;
            golf = {};
            verify = _closure1_slot13;
            offset = verify.Provider;
            verify = {};
            foxtrot = {};
            foxtrot['menuClose'] = sizing;
            foxtrot['menuDismiss'] = kilo;
            verify['value'] = foxtrot;
            romeo = _closure1_slot4;
            foxtrot = romeo.Children;
            romeo = foxtrot.map;
            yankee = function(argFoo, argBar) {
                _fun47940: for(var _fun47940_ip = 0; ; ) switch(_fun47940_ip) {
 0:
                    report = argFoo;
                    zulu = 0;
                    mike = argBar;
                    entity = report;
                    if(!(zulu === mike)) { _fun47940_ip = 68; continue _fun47940 }
 15:
                    tango = _closure1_slot4;
                    zulu = tango.isValidElement;
                    zulu = zulu.bind(tango)(report);
                    entity = report;
                    if(!zulu) { _fun47940_ip = 68; continue _fun47940 }
 39:
                    tango = _closure1_slot4;
                    zulu = tango.cloneElement;
                    mike = {};
                    oscar = _closure2_slot3;
                    mike['ref'] = oscar;
                    entity = zulu.bind(tango)(report, mike);
 68:
                    return entity;
                }
            };
            yankee = romeo.bind(foxtrot)(backup, yankee);
            verify['children'] = yankee;
            verify = zulu.bind(tango)(offset, verify);
            golf['children'] = verify;
            golf = zulu.bind(tango)(options, golf);
            report['children'] = golf;
            report = zulu.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['Menu'] = mike;
    return entity;
})();