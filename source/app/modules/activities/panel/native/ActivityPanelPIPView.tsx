// app/modules/activities/panel/native/ActivityPanelPIPView.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    foxtrot = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtrot;
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
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ActivityLayoutMode;
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    yankee = tango.ACTIVITY_PIP_SIZE;
    var _closure1_slot10 = yankee;
    options = tango.ActivityPanelModes;
    var _closure1_slot11 = options;
    options = tango.ACTIVITY_LAYOUT_PHYSICS_GESTURE;
    var _closure1_slot12 = options;
    options = tango.ACTIVITY_LAYOUT_PHYSICS_DEFAULT;
    var _closure1_slot13 = options;
    tango = tango.LANDSCAPE_IFRAME_HORIZONTAL_MARGIN;
    var _closure1_slot14 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
    var _closure1_slot15 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ThemeTypes;
    var _closure1_slot16 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PIP_WINDOW_OFFSET;
    var _closure1_slot17 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot18 = tango;
    tango = {};
    options = 300;
    tango['duration'] = options;
    var _closure1_slot19 = tango;
    tango = 12;
    options = oscar[tango];
    verify = report.bind(entity)(options);
    options = verify.generateBoxShadowStyle;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS;
    backup = options.bind(verify)(tango);
    tango = 13;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    romeo = 14;
    kilo = oscar[romeo];
    kilo = foxtrot.bind(entity)(kilo);
    kilo = kilo.radii;
    kilo = kilo.lg;
    offset['borderRadius'] = kilo;
    result = offset;
    output = yankee;
    kilo = copyDataProperties(result, output);
    result = offset;
    output = backup;
    backup = copyDataProperties(result, output);
    tango['wrapper'] = offset;
    offset = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'overflow': 'hidden'};
    backup = oscar[romeo];
    backup = foxtrot.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.lg;
    offset['borderRadius'] = backup;
    romeo = oscar[romeo];
    romeo = foxtrot.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BG_BASE_PRIMARY;
    offset['backgroundColor'] = romeo;
    result = offset;
    output = yankee;
    yankee = copyDataProperties(result, output);
    tango['mask'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot20 = tango;
    tango = {};
    options = "function ActivityPanelPIPViewTsx1(){const{pipState,getClampedPIPPosition,ACTIVITY_PIP_SIZE,windowDimensions,safeArea,pipAvoidanceSpecs,wrapperOffset,disableHorizontalSafeAreas,shown,reduceMotion,PIP_WINDOW_OFFSET,transitionState,TransitionStates,runOnJS,transitionCleanUp,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const{x:pipX,y:pipY}=pipState.get();let{x:x,y:y}=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:ACTIVITY_PIP_SIZE.width,height:ACTIVITY_PIP_SIZE.height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:wrapperOffset.get().gestureActive?wrapperOffset.get():undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});if(!shown.get()&&!reduceMotion){if(pipX<0.5&&pipX>=0){x=-(ACTIVITY_PIP_SIZE.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET));}else{x=windowDimensions.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET);}}const transitionComplete=function(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}};return{opacity:reduceMotion?withTiming(shown.get()?1:0,REDUCED_MOTION_TIMING,'animate-always',transitionComplete):1,transform:[{translateY:withSpring(y,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always')},{translateX:withSpring(x,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',!reduceMotion?transitionComplete:undefined)}]};}";
    tango['code'] = options;
    var _closure1_slot21 = tango;
    tango = {};
    options = 'function ActivityPanelPIPViewTsx2(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}';
    tango['code'] = options;
    var _closure1_slot22 = tango;
    tango = {};
    options = 'function ActivityPanelPIPViewTsx3(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PANEL);}';
    tango['code'] = options;
    var _closure1_slot23 = tango;
    tango = golf.memo;
    mike = function(argFoo) {
        _fun121334: for(var _fun121334_ip = 0; ; ) switch(_fun121334_ip) {
 0:
            mike = argFoo;
            config = mike.transitionState;
            var _closure2_slot0 = config;
            sequence = mike.transitionCleanUp;
            var _closure2_slot1 = sequence;
            backup = undefined;
            var _closure2_slot12 = backup;
            var _closure2_slot13 = backup;
            var _closure2_slot14 = backup;
            var _closure2_slot15 = backup;
            var _closure2_slot16 = backup;
            var _closure2_slot17 = backup;
            var _closure2_slot18 = backup;
            var _closure2_slot19 = backup;
            var _closure2_slot20 = backup;
            var _closure2_slot21 = backup;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            report = 15;
            oscar = zulu[report];
            verify = tango.bind(backup)(oscar);
            options = verify.useStateFromStores;
            oscar = _closure1_slot5;
            golf = new Array(1);
            golf[0] = oscar;
            oscar = function() {
                entity = _closure1_slot5;
                entity = entity.useReducedMotion;
                return entity;
            };
            record = options.bind(verify)(golf, oscar);
            var _closure2_slot2 = record;
            oscar = _closure1_slot20;
            oscar = oscar.bind(backup)();
            var _closure2_slot3 = oscar;
            offset = _closure1_slot1;
            golf = 16;
            golf = zulu[golf];
            golf = offset.bind(backup)(golf);
            status = golf.bind(backup)();
            var _closure2_slot4 = status;
            golf = 17;
            golf = zulu[golf];
            golf = offset.bind(backup)(golf);
            golf = golf.bind(backup)();
            var _closure2_slot5 = golf;
            romeo = _closure1_slot3;
            verify = romeo.useContext;
            options = 18;
            options = zulu[options];
            options = offset.bind(backup)(options);
            options = verify.bind(romeo)(options);
            kilo = options.wrapperOffset;
            var _closure2_slot6 = kilo;
            control = options.setMode;
            var _closure2_slot7 = control;
            sizing = options.pipState;
            var _closure2_slot8 = sizing;
            target = options.pipAvoidanceSpecs;
            var _closure2_slot9 = target;
            output = options.wrapperDimensions;
            options = 19;
            options = zulu[options];
            verify = tango.bind(backup)(options);
            options = verify.useLockedWebView;
            options = options.bind(verify)(config);
            context = options.shown;
            var _closure2_slot10 = context;
            verify = options.renderWebView;
            yankee = romeo.useEffect;
            offset = new Array(1);
            offset[0] = kilo;
            options = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 20;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = _closure2_slot6;
                mike = {};
                report = false;
                mike['gestureActive'] = report;
                mike = tango.bind(entity)(zulu, mike);
                return entity;
            };
            options = yankee.bind(romeo)(options, offset);
            zulu = zulu[report];
            offset = tango.bind(backup)(zulu);
            options = offset.useStateFromStoresObject;
            zulu = _closure1_slot8;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                _fun121337: for(var _fun121337_ip = 0; ; ) switch(_fun121337_ip) {
 0:
                    mike = _closure1_slot8;
                    entity = mike.getConnectedActivityChannelId;
                    golf = entity.bind(mike)();
                    entity = {};
                    entity['channelId'] = golf;
                    tango = null;
                    oscar = tango != golf;
                    mike = undefined;
                    if(!oscar) { _fun121337_ip = 61; continue _fun121337 }
 34:
                    oscar = _closure1_slot8;
                    zulu = oscar.getSelfEmbeddedActivityForChannel;
                    zulu = zulu.bind(oscar)(golf);
                    tango = tango != zulu;
                    mike = undefined;
                    if(!tango) { _fun121337_ip = 61; continue _fun121337 }
 58:
                    mike = zulu;
 61:
                    entity['activity'] = mike;
                    return entity;
                }
            };
            zulu = options.bind(offset)(tango, zulu);
            tango = zulu.channelId;
            var _closure2_slot11 = tango;
            romeo = zulu.activity;
            zulu = null;
            offset = zulu == romeo;
            options = undefined;
            if(offset) { _fun121334_ip = 389; continue _fun121334 }
 384:
            options = romeo.applicationId;
 389:
            _closure2_slot12 = options;
            result = _closure1_slot0;
            echo = _closure1_slot2;
            options = echo[report];
            foxtrot = result.bind(backup)(options);
            yankee = foxtrot.useStateFromStores;
            options = _closure1_slot8;
            offset = new Array(1);
            offset[0] = options;
            options = function() {
                _fun121338: for(var _fun121338_ip = 0; ; ) switch(_fun121338_ip) {
 0:
                    zulu = _closure2_slot12;
                    entity = null;
                    zulu = entity == zulu;
                    entity = undefined;
                    if(zulu) { _fun121338_ip = 40; continue _fun121338 }
 18:
                    tango = _closure1_slot8;
                    zulu = tango.getPipOrientationLockStateForApp;
                    mike = _closure2_slot12;
                    entity = zulu.bind(tango)(mike);
 40:
                    return entity;
                }
            };
            update = yankee.bind(foxtrot)(offset, options);
            report = echo[report];
            yankee = result.bind(backup)(report);
            offset = yankee.useStateFromStores;
            report = _closure1_slot7;
            options = new Array(1);
            options[0] = report;
            report = function() {
                zulu = _closure1_slot7;
                mike = zulu.getChannel;
                entity = _closure2_slot11;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            offset = offset.bind(yankee)(options, report);
            _closure2_slot13 = offset;
            options = _closure1_slot6;
            report = function(argFoo) {
                mike = argFoo;
                entity = mike.shouldDisableSafeAreas;
                entity = entity.bind(mike)();
                return entity;
            };
            papa = options.bind(backup)(report);
            _closure2_slot14 = papa;
            vacuum = 21;
            report = echo[vacuum];
            yankee = result.bind(backup)(report);
            options = yankee.useAnimatedStyle;
            report = function() { // Original name: W
                _fun121341: for(var _fun121341_ip = 0; ; ) switch(_fun121341_ip) {
 0:
                    mike = _closure2_slot8;
                    entity = mike.get;
                    entity = entity.bind(mike)();
                    mike = entity.x;
                    oscar = entity.y;
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 22;
                    entity = tango[entity];
                    tango = undefined;
                    report = zulu.bind(tango)(entity);
                    zulu = report.getClampedPIPPosition;
                    entity = {};
                    entity['pipX'] = mike;
                    entity['pipY'] = oscar;
                    oscar = _closure1_slot10;
                    golf = oscar.width;
                    entity['width'] = golf;
                    oscar = oscar.height;
                    entity['height'] = oscar;
                    oscar = _closure2_slot4;
                    entity['windowDimensions'] = oscar;
                    oscar = _closure2_slot5;
                    entity['safeArea'] = oscar;
                    golf = _closure2_slot9;
                    oscar = golf.get;
                    oscar = oscar.bind(golf)();
                    oscar = oscar.bottom;
                    entity['bottomAvoidanceRegion'] = oscar;
                    oscar = golf.get;
                    oscar = oscar.bind(golf)();
                    oscar = oscar.top;
                    entity['topAvoidanceRegion'] = oscar;
                    golf = _closure2_slot6;
                    oscar = golf.get;
                    oscar = oscar.bind(golf)();
                    golf = oscar.gestureActive;
                    oscar = undefined;
                    if(!golf) { _fun121341_ip = 188; continue _fun121341 }
 175:
                    options = _closure2_slot6;
                    golf = options.get;
                    oscar = golf.bind(options)();
 188:
                    entity['positionOffset'] = oscar;
                    oscar = _closure2_slot14;
                    entity['disableHorizontalSafeAreas'] = oscar;
                    entity = zulu.bind(report)(entity);
                    verify = entity.x;
                    foxtrot = entity.y;
                    zulu = _closure2_slot10;
                    entity = zulu.get;
                    entity = entity.bind(zulu)();
                    if(entity) { _fun121341_ip = 237; continue _fun121341 }
 233:
                    entity = _closure2_slot2;
 237:
                    if(entity) { _fun121341_ip = 358; continue _fun121341 }
 240:
                    entity = 0.5;
                    if(!(mike < entity)) { _fun121341_ip = 260; continue _fun121341 }
 254:
                    entity = 0;
                    if(!(!(mike >= entity))) { _fun121341_ip = 307; continue _fun121341 }
 260:
                    entity = _closure2_slot4;
                    mike = entity.width;
                    entity = global;
                    oscar = entity.Math;
                    report = oscar.max;
                    entity = _closure2_slot5;
                    zulu = entity.right;
                    entity = _closure1_slot17;
                    entity = report.bind(oscar)(zulu, entity);
                    entity = mike + entity;
                    _fun121341_ip = 355; continue _fun121341;
 307:
                    mike = _closure1_slot10;
                    zulu = mike.width;
                    mike = global;
                    golf = mike.Math;
                    oscar = golf.max;
                    mike = _closure2_slot5;
                    report = mike.right;
                    mike = _closure1_slot17;
                    mike = oscar.bind(golf)(report, mike);
                    mike = zulu + mike;
                    entity = -mike;
 355:
                    verify = entity;
 358:
                    entity = function() {
                        entity = function() { // Original name: ActivityPanelPIPViewTsx2
                            _fun121343: for(var _fun121343_ip = 0; ; ) switch(_fun121343_ip) {
 0:
                                mike = arguments[0];
                                entity = undefined;
                                if(!(mike === entity)) { _fun121343_ip = 11; continue _fun121343 }
 9:
                                mike = false;
 11:
                                if(!mike) { _fun121343_ip = 60; continue _fun121343 }
 14:
                                tango = _closure2_slot0;
                                report = _closure1_slot0;
                                oscar = _closure1_slot2;
                                zulu = 23;
                                zulu = oscar[zulu];
                                zulu = report.bind(entity)(zulu);
                                zulu = zulu.TransitionStates;
                                zulu = zulu.YEETED;
                                mike = tango === zulu;
 60:
                                if(!mike) { _fun121343_ip = 107; continue _fun121343 }
 63:
                                zulu = _closure1_slot0;
                                tango = _closure1_slot2;
                                mike = 21;
                                mike = tango[mike];
                                tango = zulu.bind(entity)(mike);
                                zulu = tango.runOnJS;
                                mike = _closure2_slot1;
                                mike = zulu.bind(tango)(mike);
                                mike = mike.bind(entity)();
 107:
                                return entity;
                            }
                        };
                        zulu = {};
                        mike = _closure2_slot0;
                        zulu['transitionState'] = mike;
                        golf = _closure1_slot0;
                        options = _closure1_slot2;
                        report = 23;
                        report = options[report];
                        oscar = undefined;
                        report = golf.bind(oscar)(report);
                        report = report.TransitionStates;
                        zulu['TransitionStates'] = report;
                        report = 21;
                        report = options[report];
                        report = golf.bind(oscar)(report);
                        report = report.runOnJS;
                        zulu['runOnJS'] = report;
                        tango = _closure2_slot1;
                        zulu['transitionCleanUp'] = tango;
                        entity['__closure'] = zulu;
                        zulu = 5141562491372.0;
                        entity['__workletHash'] = zulu;
                        mike = _closure1_slot22;
                        entity['__initData'] = mike;
                        return entity;
                    };
                    offset = entity.bind(tango)();
                    entity = {};
                    report = _closure2_slot2;
                    zulu = 1;
                    mike = zulu;
                    if(!report) { _fun121341_ip = 455; continue _fun121341 }
 386:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    report = 24;
                    report = golf[report];
                    options = oscar.bind(tango)(report);
                    golf = options.withTiming;
                    oscar = _closure2_slot10;
                    report = oscar.get;
                    report = report.bind(oscar)();
                    oscar = 0;
                    if(!report) { _fun121341_ip = 432; continue _fun121341 }
 429:
                    oscar = zulu;
 432:
                    sizing = _closure1_slot19;
                    kilo = 'animate-always';
                    result = options;
                    output = oscar;
                    backup = offset;
                    mike = result[golf](output, sizing, kilo, backup, foxtrot);
 455:
                    entity['opacity'] = mike;
                    zulu = {};
                    report = _closure1_slot0;
                    mike = _closure1_slot2;
                    golf = 25;
                    mike = mike[golf];
                    oscar = report.bind(tango)(mike);
                    report = oscar.withSpring;
                    options = _closure2_slot6;
                    mike = options.get;
                    mike = mike.bind(options)();
                    mike = mike.gestureActive;
                    if(mike) { _fun121341_ip = 514; continue _fun121341 }
 508:
                    mike = _closure1_slot13;
                    _fun121341_ip = 518; continue _fun121341;
 514:
                    mike = _closure1_slot12;
 518:
                    options = 'animate-always';
                    mike = report.bind(oscar)(foxtrot, mike, options);
                    zulu['translateY'] = mike;
                    mike = new Array(2);
                    mike[0] = zulu;
                    zulu = {};
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[golf];
                    golf = oscar.bind(tango)(report);
                    oscar = golf.withSpring;
                    foxtrot = _closure2_slot6;
                    report = foxtrot.get;
                    report = report.bind(foxtrot)();
                    report = report.gestureActive;
                    if(report) { _fun121341_ip = 596; continue _fun121341 }
 590:
                    report = _closure1_slot13;
                    _fun121341_ip = 600; continue _fun121341;
 596:
                    report = _closure1_slot12;
 600:
                    yankee = _closure2_slot2;
                    tango = undefined;
                    if(yankee) { _fun121341_ip = 612; continue _fun121341 }
 609:
                    tango = offset;
 612:
                    result = golf;
                    output = verify;
                    sizing = report;
                    kilo = options;
                    backup = tango;
                    tango = result[oscar](output, sizing, kilo, backup, foxtrot);
                    zulu['translateX'] = tango;
                    mike[1] = zulu;
                    entity['transform'] = mike;
                    return entity;
                }
            };
            foxtrot = {};
            foxtrot['pipState'] = sizing;
            source = 22;
            source = echo[source];
            source = result.bind(backup)(source);
            source = source.getClampedPIPPosition;
            foxtrot['getClampedPIPPosition'] = source;
            source = _closure1_slot10;
            foxtrot['ACTIVITY_PIP_SIZE'] = source;
            foxtrot['windowDimensions'] = status;
            foxtrot['safeArea'] = golf;
            foxtrot['pipAvoidanceSpecs'] = target;
            foxtrot['wrapperOffset'] = kilo;
            foxtrot['disableHorizontalSafeAreas'] = papa;
            foxtrot['shown'] = context;
            foxtrot['reduceMotion'] = record;
            record = _closure1_slot17;
            foxtrot['PIP_WINDOW_OFFSET'] = record;
            foxtrot['transitionState'] = config;
            config = 23;
            config = echo[config];
            config = result.bind(backup)(config);
            config = config.TransitionStates;
            foxtrot['TransitionStates'] = config;
            config = echo[vacuum];
            config = result.bind(backup)(config);
            config = config.runOnJS;
            foxtrot['runOnJS'] = config;
            foxtrot['transitionCleanUp'] = sequence;
            sequence = 24;
            sequence = echo[sequence];
            sequence = result.bind(backup)(sequence);
            sequence = sequence.withTiming;
            foxtrot['withTiming'] = sequence;
            sequence = _closure1_slot19;
            foxtrot['REDUCED_MOTION_TIMING'] = sequence;
            sequence = 25;
            sequence = echo[sequence];
            sequence = result.bind(backup)(sequence);
            sequence = sequence.withSpring;
            foxtrot['withSpring'] = sequence;
            sequence = _closure1_slot12;
            foxtrot['ACTIVITY_LAYOUT_PHYSICS_GESTURE'] = sequence;
            sequence = _closure1_slot13;
            foxtrot['ACTIVITY_LAYOUT_PHYSICS_DEFAULT'] = sequence;
            report['__closure'] = foxtrot;
            foxtrot = 8039199265160.0;
            report['__workletHash'] = foxtrot;
            foxtrot = _closure1_slot21;
            report['__initData'] = foxtrot;
            report = options.bind(yankee)(report);
            _closure2_slot15 = report;
            foxtrot = _closure1_slot1;
            options = 26;
            options = echo[options];
            yankee = foxtrot.bind(backup)(options);
            options = {};
            sequence = source.width;
            options['pipWidth'] = sequence;
            source = source.height;
            options['pipHeight'] = source;
            options['pipOrientationLockState'] = update;
            output = output.isLandscape;
            options['isLandscape'] = output;
            options = yankee.bind(backup)(options);
            update = options.width;
            _closure2_slot16 = update;
            options = options.height;
            _closure2_slot17 = options;
            source = _closure1_slot3;
            output = source.useMemo;
            yankee = new Array(2);
            yankee[0] = update;
            yankee[1] = options;
            options = function() {
                entity = {};
                zulu = _closure2_slot16;
                entity['width'] = zulu;
                mike = _closure2_slot17;
                entity['height'] = mike;
                mike = 'none';
                entity['pointerEvents'] = mike;
                return entity;
            };
            yankee = output.bind(source)(options, yankee);
            _closure2_slot18 = yankee;
            output = source.useMemo;
            golf = golf.right;
            options = new Array(1);
            options[0] = golf;
            golf = function() {
                _fun121345: for(var _fun121345_ip = 0; ; ) switch(_fun121345_ip) {
 0:
                    entity = {};
                    mike = {};
                    zulu = false;
                    mike['disable'] = zulu;
                    zulu = global;
                    oscar = zulu.Math;
                    report = oscar.max;
                    tango = _closure1_slot14;
                    golf = _closure2_slot5;
                    zulu = null;
                    verify = zulu == golf;
                    golf = undefined;
                    if(verify) { _fun121345_ip = 58; continue _fun121345 }
 49:
                    options = _closure2_slot5;
                    golf = options.right;
 58:
                    options = zulu != golf;
                    zulu = 0;
                    if(!options) { _fun121345_ip = 70; continue _fun121345 }
 67:
                    zulu = golf;
 70:
                    zulu = report.bind(oscar)(tango, zulu);
                    mike['override'] = zulu;
                    entity['right'] = mike;
                    return entity;
                }
            };
            golf = output.bind(source)(golf, options);
            _closure2_slot19 = golf;
            update = source.useCallback;
            output = function() { // Original name: k
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 21;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.runOnJS;
                zulu = _closure2_slot7;
                zulu = tango.bind(report)(zulu);
                mike = _closure1_slot11;
                mike = mike.PANEL;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            options = {};
            vacuum = echo[vacuum];
            vacuum = result.bind(backup)(vacuum);
            vacuum = vacuum.runOnJS;
            options['runOnJS'] = vacuum;
            options['setMode'] = control;
            vacuum = _closure1_slot11;
            options['ActivityPanelModes'] = vacuum;
            output['__closure'] = options;
            options = 2951177166574.0;
            output['__workletHash'] = options;
            options = _closure1_slot23;
            output['__initData'] = options;
            options = new Array(1);
            options[0] = control;
            update = update.bind(source)(output, options);
            output = 27;
            options = echo[output];
            foxtrot = foxtrot.bind(backup)(options);
            options = {};
            source = true;
            options['panGestureEnabled'] = source;
            options['onTapGestureStart'] = update;
            output = echo[output];
            output = result.bind(backup)(output);
            output = output.MorphablePanelModes;
            output = output.PIP;
            options['mode'] = output;
            options['pipState'] = sizing;
            options['wrapperOffset'] = kilo;
            kilo = false;
            options['disableHorizontalSafeAreas'] = kilo;
            options = foxtrot.bind(backup)(options);
            _closure2_slot20 = options;
            verify = !verify;
            if(verify) { _fun121334_ip = 1101; continue _fun121334 }
 1097:
            verify = zulu == romeo;
 1101:
            if(verify) { _fun121334_ip = 1108; continue _fun121334 }
 1104:
            verify = zulu == offset;
 1108:
            if(verify) { _fun121334_ip = 1115; continue _fun121334 }
 1111:
            verify = zulu == tango;
 1115:
            _closure2_slot21 = verify;
            tango = _closure1_slot3;
            zulu = tango.useMemo;
            mike = new Array(8);
            mike[0] = yankee;
            mike[1] = offset;
            mike[2] = verify;
            mike[3] = options;
            mike[4] = golf;
            golf = oscar.mask;
            mike[5] = golf;
            oscar = oscar.wrapper;
            mike[6] = oscar;
            mike[7] = report;
            entity = function() {
                _fun121347: for(var _fun121347_ip = 0; ; ) switch(_fun121347_ip) {
 0:
                    tango = _closure1_slot18;
                    oscar = _closure1_slot0;
                    verify = _closure1_slot2;
                    entity = 28;
                    entity = verify[entity];
                    zulu = undefined;
                    entity = oscar.bind(zulu)(entity);
                    mike = entity.ThemeContextProvider;
                    entity = {};
                    report = _closure1_slot16;
                    report = report.DARK;
                    entity['theme'] = report;
                    report = 29;
                    report = verify[report];
                    report = oscar.bind(zulu)(report);
                    oscar = report.GestureDetector;
                    report = {};
                    golf = _closure2_slot20;
                    report['gesture'] = golf;
                    options = _closure1_slot1;
                    golf = 21;
                    golf = verify[golf];
                    golf = options.bind(zulu)(golf);
                    options = golf.View;
                    golf = {};
                    yankee = _closure2_slot3;
                    offset = yankee.wrapper;
                    verify = new Array(2);
                    verify[0] = offset;
                    offset = _closure2_slot15;
                    verify[1] = offset;
                    golf['style'] = verify;
                    offset = _closure1_slot4;
                    verify = {};
                    yankee = yankee.mask;
                    verify['style'] = yankee;
                    romeo = _closure2_slot21;
                    yankee = !romeo;
                    if(romeo) { _fun121347_ip = 260; continue _fun121347 }
 163:
                    backup = _closure1_slot18;
                    foxtrot = _closure1_slot4;
                    romeo = {};
                    kilo = _closure2_slot18;
                    romeo['style'] = kilo;
                    sizing = _closure1_slot1;
                    echo = _closure1_slot2;
                    kilo = 30;
                    kilo = echo[kilo];
                    sizing = sizing.bind(zulu)(kilo);
                    kilo = {};
                    echo = _closure2_slot13;
                    kilo['channel'] = echo;
                    echo = _closure1_slot9;
                    echo = echo.PIP;
                    kilo['layoutMode'] = echo;
                    result = _closure1_slot15;
                    kilo['portraitSafeAreasConfig'] = result;
                    output = _closure2_slot19;
                    kilo['landscapeSafeAreasConfig'] = output;
                    kilo = backup.bind(zulu)(sizing, kilo);
                    romeo['children'] = kilo;
                    yankee = backup.bind(zulu)(foxtrot, romeo);
 260:
                    verify['children'] = yankee;
                    verify = tango.bind(zulu)(offset, verify);
                    golf['children'] = verify;
                    golf = tango.bind(zulu)(options, golf);
                    report['children'] = golf;
                    report = tango.bind(zulu)(oscar, report);
                    entity['children'] = report;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 31;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/panel/native/ActivityPanelPIPView.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();