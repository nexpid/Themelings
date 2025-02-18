// app/modules/activities/panel/native/ActivityPanelPIPView.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    foxtra = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtra;
    var _closure1_slot2 = oscard;
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
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ActivityLayoutMode;
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    yankee = tangon.ACTIVITY_PIP_SIZE;
    var _closure1_slot10 = yankee;
    option = tangon.ActivityPanelModes;
    var _closure1_slot11 = option;
    option = tangon.ACTIVITY_LAYOUT_PHYSICS_GESTURE;
    var _closure1_slot12 = option;
    option = tangon.ACTIVITY_LAYOUT_PHYSICS_DEFAULT;
    var _closure1_slot13 = option;
    tangon = tangon.LANDSCAPE_IFRAME_HORIZONTAL_MARGIN;
    var _closure1_slot14 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
    var _closure1_slot15 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ThemeTypes;
    var _closure1_slot16 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PIP_WINDOW_OFFSET;
    var _closure1_slot17 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot18 = tangon;
    tangon = {};
    option = 300;
    tangon['duration'] = option;
    var _closure1_slot19 = tangon;
    tangon = 12;
    option = oscard[tangon];
    verify = report.bind(entity)(option);
    option = verify.generateBoxShadowStyle;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS;
    backup = option.bind(verify)(tangon);
    tangon = 13;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {};
    romeon = 14;
    kiloes = oscard[romeon];
    kiloes = foxtra.bind(entity)(kiloes);
    kiloes = kiloes.radii;
    kiloes = kiloes.lg;
    offset['borderRadius'] = kiloes;
    result = offset;
    output = yankee;
    kiloes = copyDataProperties(result, output);
    result = offset;
    output = backup;
    backup = copyDataProperties(result, output);
    tangon['wrapper'] = offset;
    offset = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'overflow': 'hidden'};
    backup = oscard[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.lg;
    offset['borderRadius'] = backup;
    romeon = oscard[romeon];
    romeon = foxtra.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BG_BASE_PRIMARY;
    offset['backgroundColor'] = romeon;
    result = offset;
    output = yankee;
    yankee = copyDataProperties(result, output);
    tangon['mask'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot20 = tangon;
    tangon = {};
    option = "function ActivityPanelPIPViewTsx1(){const{pipState,getClampedPIPPosition,ACTIVITY_PIP_SIZE,windowDimensions,safeArea,pipAvoidanceSpecs,wrapperOffset,disableHorizontalSafeAreas,shown,reduceMotion,PIP_WINDOW_OFFSET,transitionState,TransitionStates,runOnJS,transitionCleanUp,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const{x:pipX,y:pipY}=pipState.get();let{x:x,y:y}=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:ACTIVITY_PIP_SIZE.width,height:ACTIVITY_PIP_SIZE.height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:wrapperOffset.get().gestureActive?wrapperOffset.get():undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});if(!shown.get()&&!reduceMotion){if(pipX<0.5&&pipX>=0){x=-(ACTIVITY_PIP_SIZE.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET));}else{x=windowDimensions.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET);}}const transitionComplete=function(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}};return{opacity:reduceMotion?withTiming(shown.get()?1:0,REDUCED_MOTION_TIMING,'animate-always',transitionComplete):1,transform:[{translateY:withSpring(y,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always')},{translateX:withSpring(x,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',!reduceMotion?transitionComplete:undefined)}]};}";
    tangon['code'] = option;
    var _closure1_slot21 = tangon;
    tangon = {};
    option = 'function ActivityPanelPIPViewTsx2(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}';
    tangon['code'] = option;
    var _closure1_slot22 = tangon;
    tangon = {};
    option = 'function ActivityPanelPIPViewTsx3(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PANEL);}';
    tangon['code'] = option;
    var _closure1_slot23 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            config = michal.transitionState;
            var _closure2_slot0 = config;
            sequen = michal.transitionCleanUp;
            var _closure2_slot1 = sequen;
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
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            report = 15;
            oscard = zuuluu[report];
            verify = tangon.bind(backup)(oscard);
            option = verify.useStateFromStores;
            oscard = _closure1_slot5;
            golfie = new Array(1);
            golfie[0] = oscard;
            oscard = function() {
                entity = _closure1_slot5;
                entity = entity.useReducedMotion;
                return entity;
            };
            record = option.bind(verify)(golfie, oscard);
            var _closure2_slot2 = record;
            oscard = _closure1_slot20;
            oscard = oscard.bind(backup)();
            var _closure2_slot3 = oscard;
            offset = _closure1_slot1;
            golfie = 16;
            golfie = zuuluu[golfie];
            golfie = offset.bind(backup)(golfie);
            status = golfie.bind(backup)();
            var _closure2_slot4 = status;
            golfie = 17;
            golfie = zuuluu[golfie];
            golfie = offset.bind(backup)(golfie);
            golfie = golfie.bind(backup)();
            var _closure2_slot5 = golfie;
            romeon = _closure1_slot3;
            verify = romeon.useContext;
            option = 18;
            option = zuuluu[option];
            option = offset.bind(backup)(option);
            option = verify.bind(romeon)(option);
            kiloes = option.wrapperOffset;
            var _closure2_slot6 = kiloes;
            ctrled = option.setMode;
            var _closure2_slot7 = ctrled;
            sizing = option.pipState;
            var _closure2_slot8 = sizing;
            target = option.pipAvoidanceSpecs;
            var _closure2_slot9 = target;
            output = option.wrapperDimensions;
            option = 19;
            option = zuuluu[option];
            verify = tangon.bind(backup)(option);
            option = verify.useLockedWebView;
            option = option.bind(verify)(config);
            cntext = option.shown;
            var _closure2_slot10 = cntext;
            verify = option.renderWebView;
            yankee = romeon.useEffect;
            offset = new Array(1);
            offset[0] = kiloes;
            option = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 20;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = _closure2_slot6;
                michal = {};
                report = false;
                michal['gestureActive'] = report;
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            option = yankee.bind(romeon)(option, offset);
            zuuluu = zuuluu[report];
            offset = tangon.bind(backup)(zuuluu);
            option = offset.useStateFromStoresObject;
            zuuluu = _closure1_slot8;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure1_slot8;
                    entity = michal.getConnectedActivityChannelId;
                    golfie = entity.bind(michal)();
                    entity = {};
                    entity['channelId'] = golfie;
                    tangon = null;
                    oscard = tangon != golfie;
                    michal = undefined;
                    if(!oscard) { _fun00004_ip = 61; continue _fun00003 }
 34:
                    oscard = _closure1_slot8;
                    zuuluu = oscard.getSelfEmbeddedActivityForChannel;
                    zuuluu = zuuluu.bind(oscard)(golfie);
                    tangon = tangon != zuuluu;
                    michal = undefined;
                    if(!tangon) { _fun00004_ip = 61; continue _fun00003 }
 58:
                    michal = zuuluu;
 61:
                    entity['activity'] = michal;
                    return entity;
                }
            };
            zuuluu = option.bind(offset)(tangon, zuuluu);
            tangon = zuuluu.channelId;
            var _closure2_slot11 = tangon;
            romeon = zuuluu.activity;
            zuuluu = null;
            offset = zuuluu == romeon;
            option = undefined;
            if(offset) { _fun00002_ip = 389; continue _fun00001 }
 384:
            option = romeon.applicationId;
 389:
            _closure2_slot12 = option;
            result = _closure1_slot0;
            echoed = _closure1_slot2;
            option = echoed[report];
            foxtra = result.bind(backup)(option);
            yankee = foxtra.useStateFromStores;
            option = _closure1_slot8;
            offset = new Array(1);
            offset[0] = option;
            option = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot12;
                    entity = null;
                    zuuluu = entity == zuuluu;
                    entity = undefined;
                    if(zuuluu) { _fun00006_ip = 40; continue _fun00005 }
 18:
                    tangon = _closure1_slot8;
                    zuuluu = tangon.getPipOrientationLockStateForApp;
                    michal = _closure2_slot12;
                    entity = zuuluu.bind(tangon)(michal);
 40:
                    return entity;
                }
            };
            update = yankee.bind(foxtra)(offset, option);
            report = echoed[report];
            yankee = result.bind(backup)(report);
            offset = yankee.useStateFromStores;
            report = _closure1_slot7;
            option = new Array(1);
            option[0] = report;
            report = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getChannel;
                entity = _closure2_slot11;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            offset = offset.bind(yankee)(option, report);
            _closure2_slot13 = offset;
            option = _closure1_slot6;
            report = function(argFoo) {
                michal = argFoo;
                entity = michal.shouldDisableSafeAreas;
                entity = entity.bind(michal)();
                return entity;
            };
            papara = option.bind(backup)(report);
            _closure2_slot14 = papara;
            vacuum = 21;
            report = echoed[vacuum];
            yankee = result.bind(backup)(report);
            option = yankee.useAnimatedStyle;
            report = function() { // Original name: W
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot8;
                    entity = michal.get;
                    entity = entity.bind(michal)();
                    michal = entity.x;
                    oscard = entity.y;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 22;
                    entity = tangon[entity];
                    tangon = undefined;
                    report = zuuluu.bind(tangon)(entity);
                    zuuluu = report.getClampedPIPPosition;
                    entity = {};
                    entity['pipX'] = michal;
                    entity['pipY'] = oscard;
                    oscard = _closure1_slot10;
                    golfie = oscard.width;
                    entity['width'] = golfie;
                    oscard = oscard.height;
                    entity['height'] = oscard;
                    oscard = _closure2_slot4;
                    entity['windowDimensions'] = oscard;
                    oscard = _closure2_slot5;
                    entity['safeArea'] = oscard;
                    golfie = _closure2_slot9;
                    oscard = golfie.get;
                    oscard = oscard.bind(golfie)();
                    oscard = oscard.bottom;
                    entity['bottomAvoidanceRegion'] = oscard;
                    oscard = golfie.get;
                    oscard = oscard.bind(golfie)();
                    oscard = oscard.top;
                    entity['topAvoidanceRegion'] = oscard;
                    golfie = _closure2_slot6;
                    oscard = golfie.get;
                    oscard = oscard.bind(golfie)();
                    golfie = oscard.gestureActive;
                    oscard = undefined;
                    if(!golfie) { _fun00008_ip = 188; continue _fun00007 }
 175:
                    option = _closure2_slot6;
                    golfie = option.get;
                    oscard = golfie.bind(option)();
 188:
                    entity['positionOffset'] = oscard;
                    oscard = _closure2_slot14;
                    entity['disableHorizontalSafeAreas'] = oscard;
                    entity = zuuluu.bind(report)(entity);
                    verify = entity.x;
                    foxtra = entity.y;
                    zuuluu = _closure2_slot10;
                    entity = zuuluu.get;
                    entity = entity.bind(zuuluu)();
                    if(entity) { _fun00008_ip = 237; continue _fun00007 }
 233:
                    entity = _closure2_slot2;
 237:
                    if(entity) { _fun00008_ip = 358; continue _fun00007 }
 240:
                    entity = 0.5;
                    if(!(michal < entity)) { _fun00008_ip = 260; continue _fun00007 }
 254:
                    entity = 0;
                    if(!(!(michal >= entity))) { _fun00008_ip = 307; continue _fun00007 }
 260:
                    entity = _closure2_slot4;
                    michal = entity.width;
                    entity = global;
                    oscard = entity.Math;
                    report = oscard.max;
                    entity = _closure2_slot5;
                    zuuluu = entity.right;
                    entity = _closure1_slot17;
                    entity = report.bind(oscard)(zuuluu, entity);
                    entity = michal + entity;
                    _fun00008_ip = 355; continue _fun00007;
 307:
                    michal = _closure1_slot10;
                    zuuluu = michal.width;
                    michal = global;
                    golfie = michal.Math;
                    oscard = golfie.max;
                    michal = _closure2_slot5;
                    report = michal.right;
                    michal = _closure1_slot17;
                    michal = oscard.bind(golfie)(report, michal);
                    michal = zuuluu + michal;
                    entity = -michal;
 355:
                    verify = entity;
 358:
                    entity = function() {
                        entity = function() { // Original name: ActivityPanelPIPViewTsx2
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                michal = arguments[0];
                                entity = undefined;
                                if(!(michal === entity)) { _fun00010_ip = 11; continue _fun00009 }
 9:
                                michal = false;
 11:
                                if(!michal) { _fun00010_ip = 60; continue _fun00009 }
 14:
                                tangon = _closure2_slot0;
                                report = _closure1_slot0;
                                oscard = _closure1_slot2;
                                zuuluu = 23;
                                zuuluu = oscard[zuuluu];
                                zuuluu = report.bind(entity)(zuuluu);
                                zuuluu = zuuluu.TransitionStates;
                                zuuluu = zuuluu.YEETED;
                                michal = tangon === zuuluu;
 60:
                                if(!michal) { _fun00010_ip = 107; continue _fun00009 }
 63:
                                zuuluu = _closure1_slot0;
                                tangon = _closure1_slot2;
                                michal = 21;
                                michal = tangon[michal];
                                tangon = zuuluu.bind(entity)(michal);
                                zuuluu = tangon.runOnJS;
                                michal = _closure2_slot1;
                                michal = zuuluu.bind(tangon)(michal);
                                michal = michal.bind(entity)();
 107:
                                return entity;
                            }
                        };
                        zuuluu = {};
                        michal = _closure2_slot0;
                        zuuluu['transitionState'] = michal;
                        golfie = _closure1_slot0;
                        option = _closure1_slot2;
                        report = 23;
                        report = option[report];
                        oscard = undefined;
                        report = golfie.bind(oscard)(report);
                        report = report.TransitionStates;
                        zuuluu['TransitionStates'] = report;
                        report = 21;
                        report = option[report];
                        report = golfie.bind(oscard)(report);
                        report = report.runOnJS;
                        zuuluu['runOnJS'] = report;
                        tangon = _closure2_slot1;
                        zuuluu['transitionCleanUp'] = tangon;
                        entity['__closure'] = zuuluu;
                        zuuluu = 5141562491372.0;
                        entity['__workletHash'] = zuuluu;
                        michal = _closure1_slot22;
                        entity['__initData'] = michal;
                        return entity;
                    };
                    offset = entity.bind(tangon)();
                    entity = {};
                    report = _closure2_slot2;
                    zuuluu = 1;
                    michal = zuuluu;
                    if(!report) { _fun00008_ip = 455; continue _fun00007 }
 386:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    report = 24;
                    report = golfie[report];
                    option = oscard.bind(tangon)(report);
                    golfie = option.withTiming;
                    oscard = _closure2_slot10;
                    report = oscard.get;
                    report = report.bind(oscard)();
                    oscard = 0;
                    if(!report) { _fun00008_ip = 432; continue _fun00007 }
 429:
                    oscard = zuuluu;
 432:
                    sizing = _closure1_slot19;
                    kiloes = 'animate-always';
                    result = option;
                    output = oscard;
                    backup = offset;
                    michal = result[golfie](output, sizing, kiloes, backup, foxtra);
 455:
                    entity['opacity'] = michal;
                    zuuluu = {};
                    report = _closure1_slot0;
                    michal = _closure1_slot2;
                    golfie = 25;
                    michal = michal[golfie];
                    oscard = report.bind(tangon)(michal);
                    report = oscard.withSpring;
                    option = _closure2_slot6;
                    michal = option.get;
                    michal = michal.bind(option)();
                    michal = michal.gestureActive;
                    if(michal) { _fun00008_ip = 514; continue _fun00007 }
 508:
                    michal = _closure1_slot13;
                    _fun00008_ip = 518; continue _fun00007;
 514:
                    michal = _closure1_slot12;
 518:
                    option = 'animate-always';
                    michal = report.bind(oscard)(foxtra, michal, option);
                    zuuluu['translateY'] = michal;
                    michal = new Array(2);
                    michal[0] = zuuluu;
                    zuuluu = {};
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[golfie];
                    golfie = oscard.bind(tangon)(report);
                    oscard = golfie.withSpring;
                    foxtra = _closure2_slot6;
                    report = foxtra.get;
                    report = report.bind(foxtra)();
                    report = report.gestureActive;
                    if(report) { _fun00008_ip = 596; continue _fun00007 }
 590:
                    report = _closure1_slot13;
                    _fun00008_ip = 600; continue _fun00007;
 596:
                    report = _closure1_slot12;
 600:
                    yankee = _closure2_slot2;
                    tangon = undefined;
                    if(yankee) { _fun00008_ip = 612; continue _fun00007 }
 609:
                    tangon = offset;
 612:
                    result = golfie;
                    output = verify;
                    sizing = report;
                    kiloes = option;
                    backup = tangon;
                    tangon = result[oscard](output, sizing, kiloes, backup, foxtra);
                    zuuluu['translateX'] = tangon;
                    michal[1] = zuuluu;
                    entity['transform'] = michal;
                    return entity;
                }
            };
            foxtra = {};
            foxtra['pipState'] = sizing;
            source = 22;
            source = echoed[source];
            source = result.bind(backup)(source);
            source = source.getClampedPIPPosition;
            foxtra['getClampedPIPPosition'] = source;
            source = _closure1_slot10;
            foxtra['ACTIVITY_PIP_SIZE'] = source;
            foxtra['windowDimensions'] = status;
            foxtra['safeArea'] = golfie;
            foxtra['pipAvoidanceSpecs'] = target;
            foxtra['wrapperOffset'] = kiloes;
            foxtra['disableHorizontalSafeAreas'] = papara;
            foxtra['shown'] = cntext;
            foxtra['reduceMotion'] = record;
            record = _closure1_slot17;
            foxtra['PIP_WINDOW_OFFSET'] = record;
            foxtra['transitionState'] = config;
            config = 23;
            config = echoed[config];
            config = result.bind(backup)(config);
            config = config.TransitionStates;
            foxtra['TransitionStates'] = config;
            config = echoed[vacuum];
            config = result.bind(backup)(config);
            config = config.runOnJS;
            foxtra['runOnJS'] = config;
            foxtra['transitionCleanUp'] = sequen;
            sequen = 24;
            sequen = echoed[sequen];
            sequen = result.bind(backup)(sequen);
            sequen = sequen.withTiming;
            foxtra['withTiming'] = sequen;
            sequen = _closure1_slot19;
            foxtra['REDUCED_MOTION_TIMING'] = sequen;
            sequen = 25;
            sequen = echoed[sequen];
            sequen = result.bind(backup)(sequen);
            sequen = sequen.withSpring;
            foxtra['withSpring'] = sequen;
            sequen = _closure1_slot12;
            foxtra['ACTIVITY_LAYOUT_PHYSICS_GESTURE'] = sequen;
            sequen = _closure1_slot13;
            foxtra['ACTIVITY_LAYOUT_PHYSICS_DEFAULT'] = sequen;
            report['__closure'] = foxtra;
            foxtra = 8039199265160.0;
            report['__workletHash'] = foxtra;
            foxtra = _closure1_slot21;
            report['__initData'] = foxtra;
            report = option.bind(yankee)(report);
            _closure2_slot15 = report;
            foxtra = _closure1_slot1;
            option = 26;
            option = echoed[option];
            yankee = foxtra.bind(backup)(option);
            option = {};
            sequen = source.width;
            option['pipWidth'] = sequen;
            source = source.height;
            option['pipHeight'] = source;
            option['pipOrientationLockState'] = update;
            output = output.isLandscape;
            option['isLandscape'] = output;
            option = yankee.bind(backup)(option);
            update = option.width;
            _closure2_slot16 = update;
            option = option.height;
            _closure2_slot17 = option;
            source = _closure1_slot3;
            output = source.useMemo;
            yankee = new Array(2);
            yankee[0] = update;
            yankee[1] = option;
            option = function() {
                entity = {};
                zuuluu = _closure2_slot16;
                entity['width'] = zuuluu;
                michal = _closure2_slot17;
                entity['height'] = michal;
                michal = 'none';
                entity['pointerEvents'] = michal;
                return entity;
            };
            yankee = output.bind(source)(option, yankee);
            _closure2_slot18 = yankee;
            output = source.useMemo;
            golfie = golfie.right;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = {};
                    michal = {};
                    zuuluu = false;
                    michal['disable'] = zuuluu;
                    zuuluu = global;
                    oscard = zuuluu.Math;
                    report = oscard.max;
                    tangon = _closure1_slot14;
                    golfie = _closure2_slot5;
                    zuuluu = null;
                    verify = zuuluu == golfie;
                    golfie = undefined;
                    if(verify) { _fun00012_ip = 58; continue _fun00011 }
 49:
                    option = _closure2_slot5;
                    golfie = option.right;
 58:
                    option = zuuluu != golfie;
                    zuuluu = 0;
                    if(!option) { _fun00012_ip = 70; continue _fun00011 }
 67:
                    zuuluu = golfie;
 70:
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
                    michal['override'] = zuuluu;
                    entity['right'] = michal;
                    return entity;
                }
            };
            golfie = output.bind(source)(golfie, option);
            _closure2_slot19 = golfie;
            update = source.useCallback;
            output = function() { // Original name: k
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 21;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.runOnJS;
                zuuluu = _closure2_slot7;
                zuuluu = tangon.bind(report)(zuuluu);
                michal = _closure1_slot11;
                michal = michal.PANEL;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            option = {};
            vacuum = echoed[vacuum];
            vacuum = result.bind(backup)(vacuum);
            vacuum = vacuum.runOnJS;
            option['runOnJS'] = vacuum;
            option['setMode'] = ctrled;
            vacuum = _closure1_slot11;
            option['ActivityPanelModes'] = vacuum;
            output['__closure'] = option;
            option = 2951177166574.0;
            output['__workletHash'] = option;
            option = _closure1_slot23;
            output['__initData'] = option;
            option = new Array(1);
            option[0] = ctrled;
            update = update.bind(source)(output, option);
            output = 27;
            option = echoed[output];
            foxtra = foxtra.bind(backup)(option);
            option = {};
            source = true;
            option['panGestureEnabled'] = source;
            option['onTapGestureStart'] = update;
            output = echoed[output];
            output = result.bind(backup)(output);
            output = output.MorphablePanelModes;
            output = output.PIP;
            option['mode'] = output;
            option['pipState'] = sizing;
            option['wrapperOffset'] = kiloes;
            kiloes = false;
            option['disableHorizontalSafeAreas'] = kiloes;
            option = foxtra.bind(backup)(option);
            _closure2_slot20 = option;
            verify = !verify;
            if(verify) { _fun00002_ip = 1101; continue _fun00001 }
 1097:
            verify = zuuluu == romeon;
 1101:
            if(verify) { _fun00002_ip = 1108; continue _fun00001 }
 1104:
            verify = zuuluu == offset;
 1108:
            if(verify) { _fun00002_ip = 1115; continue _fun00001 }
 1111:
            verify = zuuluu == tangon;
 1115:
            _closure2_slot21 = verify;
            tangon = _closure1_slot3;
            zuuluu = tangon.useMemo;
            michal = new Array(8);
            michal[0] = yankee;
            michal[1] = offset;
            michal[2] = verify;
            michal[3] = option;
            michal[4] = golfie;
            golfie = oscard.mask;
            michal[5] = golfie;
            oscard = oscard.wrapper;
            michal[6] = oscard;
            michal[7] = report;
            entity = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    tangon = _closure1_slot18;
                    oscard = _closure1_slot0;
                    verify = _closure1_slot2;
                    entity = 28;
                    entity = verify[entity];
                    zuuluu = undefined;
                    entity = oscard.bind(zuuluu)(entity);
                    michal = entity.ThemeContextProvider;
                    entity = {};
                    report = _closure1_slot16;
                    report = report.DARK;
                    entity['theme'] = report;
                    report = 29;
                    report = verify[report];
                    report = oscard.bind(zuuluu)(report);
                    oscard = report.GestureDetector;
                    report = {};
                    golfie = _closure2_slot20;
                    report['gesture'] = golfie;
                    option = _closure1_slot1;
                    golfie = 21;
                    golfie = verify[golfie];
                    golfie = option.bind(zuuluu)(golfie);
                    option = golfie.View;
                    golfie = {};
                    yankee = _closure2_slot3;
                    offset = yankee.wrapper;
                    verify = new Array(2);
                    verify[0] = offset;
                    offset = _closure2_slot15;
                    verify[1] = offset;
                    golfie['style'] = verify;
                    offset = _closure1_slot4;
                    verify = {};
                    yankee = yankee.mask;
                    verify['style'] = yankee;
                    romeon = _closure2_slot21;
                    yankee = !romeon;
                    if(romeon) { _fun00014_ip = 260; continue _fun00013 }
 163:
                    backup = _closure1_slot18;
                    foxtra = _closure1_slot4;
                    romeon = {};
                    kiloes = _closure2_slot18;
                    romeon['style'] = kiloes;
                    sizing = _closure1_slot1;
                    echoed = _closure1_slot2;
                    kiloes = 30;
                    kiloes = echoed[kiloes];
                    sizing = sizing.bind(zuuluu)(kiloes);
                    kiloes = {};
                    echoed = _closure2_slot13;
                    kiloes['channel'] = echoed;
                    echoed = _closure1_slot9;
                    echoed = echoed.PIP;
                    kiloes['layoutMode'] = echoed;
                    result = _closure1_slot15;
                    kiloes['portraitSafeAreasConfig'] = result;
                    output = _closure2_slot19;
                    kiloes['landscapeSafeAreasConfig'] = output;
                    kiloes = backup.bind(zuuluu)(sizing, kiloes);
                    romeon['children'] = kiloes;
                    yankee = backup.bind(zuuluu)(foxtra, romeon);
 260:
                    verify['children'] = yankee;
                    verify = tangon.bind(zuuluu)(offset, verify);
                    golfie['children'] = verify;
                    golfie = tangon.bind(zuuluu)(option, golfie);
                    report['children'] = golfie;
                    report = tangon.bind(zuuluu)(oscard, report);
                    entity['children'] = report;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 31;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/panel/native/ActivityPanelPIPView.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();