// app/modules/media_viewer/native/components/MediaViewer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: stateForScreen
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            report = tangon / zuuluu;
            oscard = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            golfie = oscard.bind(entity)(michal);
            oscard = golfie.flattenSource;
            michal = argBaz;
            entity = true;
            michal = oscard.bind(golfie)(michal, entity);
            oscard = michal.width;
            entity = michal.height;
            entity = oscard / entity;
            oscard = michal.width;
            if(!(oscard < tangon)) { _fun00002_ip = 87; continue _fun00001 }
 75:
            oscard = michal.height;
            if(!(!(oscard < zuuluu))) { _fun00002_ip = 255; continue _fun00001 }
 87:
            if(!(!(entity > report))) { _fun00002_ip = 173; continue _fun00001 }
 91:
            oscard = michal.height;
            yankee = zuuluu / oscard;
            oscard = {};
            option = 1;
            golfie = option / yankee;
            golfie = golfie + option;
            oscard['maximumZoomScale'] = golfie;
            golfie = global;
            offset = golfie.Math;
            verify = offset.ceil;
            option = michal.width;
            option = option * yankee;
            option = verify.bind(offset)(option);
            oscard['width'] = option;
            option = golfie.Math;
            golfie = option.ceil;
            golfie = golfie.bind(option)(zuuluu);
            oscard['height'] = golfie;
            return oscard;
 173:
            oscard = michal.width;
            offset = tangon / oscard;
            oscard = {};
            option = 1;
            golfie = option / offset;
            golfie = golfie + option;
            oscard['maximumZoomScale'] = golfie;
            golfie = global;
            verify = golfie.Math;
            option = verify.ceil;
            option = option.bind(verify)(tangon);
            oscard['width'] = option;
            verify = golfie.Math;
            option = verify.ceil;
            golfie = michal.height;
            golfie = golfie * offset;
            golfie = option.bind(verify)(golfie);
            oscard['height'] = golfie;
            return oscard;
 255:
            if(!(!(entity > report))) { _fun00002_ip = 270; continue _fun00001 }
 259:
            entity = michal.height;
            zuuluu = entity / zuuluu;
            _fun00002_ip = 279; continue _fun00001;
 270:
            entity = michal.width;
            zuuluu = entity / tangon;
 279:
            entity = 1.01;
            report = zuuluu / entity;
            entity = global;
            tangon = entity.Math;
            zuuluu = tangon.min;
            entity = 0.5;
            report = zuuluu.bind(tangon)(entity, report);
            entity = {};
            tangon = 1;
            oscard = 0;
            zuuluu = tangon;
            if(!(oscard !== report)) { _fun00002_ip = 340; continue _fun00001 }
 336:
            zuuluu = tangon / report;
 340:
            entity['maximumZoomScale'] = zuuluu;
            zuuluu = michal.width;
            entity['width'] = zuuluu;
            michal = michal.height;
            entity['height'] = michal;
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    entity = function(argFoo) { // Original name: AnimatedMediaPresenter
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            result = tangon.source;
            report = tangon.origin;
            romeon = tangon.renderMedia;
            offset = tangon.windowWidth;
            var _closure2_slot0 = offset;
            verify = tangon.windowHeight;
            var _closure2_slot1 = verify;
            golfie = tangon.sourceWidth;
            var _closure2_slot2 = golfie;
            oscard = tangon.sourceHeight;
            var _closure2_slot3 = oscard;
            source = tangon.entranceAnimationDriver;
            var _closure2_slot4 = source;
            zuuluu = {'source': 0, 'origin': 0, 'renderMedia': 0, 'windowWidth': 0, 'windowHeight': 0, 'sourceWidth': 0, 'sourceHeight': 0, 'entranceAnimationDriver': 0};
            status = null;
            sierra = zuuluu;
            michal = silentSetPrototypeOf(sierra, status);
            sizing = 0;
            sierra = {};
            status = tangon;
            target = zuuluu;
            update = copyDataProperties(sierra, status, target);
            tangon = undefined;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            var _closure2_slot9 = tangon;
            zuuluu = _closure1_slot0;
            yankee = _closure1_slot2;
            michal = 11;
            michal = yankee[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.useEntranceAnimation;
            zuuluu = michal.bind(zuuluu)(source);
            michal = zuuluu.loads;
            output = zuuluu.handleLoad;
            kiloes = zuuluu.handleError;
            sequen = zuuluu.handleLoadStart;
            yankee = new Array(0);
            echoed = global;
            foxtra = echoed.Array;
            zuuluu = foxtra.isArray;
            zuuluu = zuuluu.bind(foxtra)(result);
            if(zuuluu) { _fun00004_ip = 352; continue _fun00003 }
 217:
            foxtra = yankee.push;
            zuuluu = {};
            sierra = zuuluu;
            status = update;
            backup = copyDataProperties(sierra, status);
            record = update.index;
            config = result.uri;
            backup = echoed.HermesInternal;
            vacuum = backup.concat;
            ctrled = '0:';
            backup = ':';
            ctrled = vacuum.bind(ctrled)(record, backup, config);
            backup = 'key';
            zuuluu[backup] = ctrled;
            backup = 'onLoadStart';
            zuuluu[backup] = sequen;
            backup = 'onLoad';
            zuuluu[backup] = output;
            backup = 'onError';
            zuuluu[backup] = kiloes;
            backup = 'source';
            zuuluu[backup] = result;
            backup = _closure1_slot12;
            ctrled = backup.platformStyles;
            backup = 'style';
            zuuluu[backup] = ctrled;
            zuuluu = romeon.bind(tangon)(zuuluu);
            zuuluu = foxtra.bind(yankee)(zuuluu);
            _fun00004_ip = 679; continue _fun00003;
 352:
            backup = 1;
            foxtra = michal <= backup;
            if(!foxtra) { _fun00004_ip = 503; continue _fun00003 }
 365:
            ctrled = yankee.push;
            zuuluu = {};
            sierra = zuuluu;
            status = update;
            vacuum = copyDataProperties(sierra, status);
            papara = update.index;
            vacuum = result[sizing];
            cntext = vacuum.uri;
            vacuum = echoed.HermesInternal;
            record = vacuum.concat;
            config = '0:';
            vacuum = ':';
            config = record.bind(config)(papara, vacuum, cntext);
            vacuum = 'key';
            zuuluu[vacuum] = config;
            vacuum = 'onLoadStart';
            zuuluu[vacuum] = sequen;
            vacuum = 'onLoad';
            zuuluu[vacuum] = output;
            vacuum = 'onError';
            zuuluu[vacuum] = kiloes;
            sequen = result[sizing];
            vacuum = 'source';
            zuuluu[vacuum] = sequen;
            vacuum = _closure1_slot12;
            sequen = vacuum.platformStyles;
            vacuum = 'style';
            zuuluu[vacuum] = sequen;
            zuuluu = romeon.bind(tangon)(zuuluu);
            zuuluu = ctrled.bind(yankee)(zuuluu);
 503:
            if(!(michal >= backup)) { _fun00004_ip = 679; continue _fun00003 }
 510:
            zuuluu = yankee.push;
            michal = {};
            sierra = michal;
            status = update;
            ctrled = copyDataProperties(sierra, status);
            sequen = update.index;
            update = result[sizing];
            vacuum = update.uri;
            echoed = echoed.HermesInternal;
            ctrled = echoed.concat;
            update = '1:';
            echoed = ':';
            update = ctrled.bind(update)(sequen, echoed, vacuum);
            echoed = 'key';
            michal[echoed] = update;
            result = result[backup];
            backup = 'source';
            michal[backup] = result;
            backup = _closure1_slot12;
            result = backup.platformStyles;
            backup = 'style';
            michal[backup] = result;
            backup = 'onLoad';
            michal[backup] = output;
            backup = 'onError';
            michal[backup] = kiloes;
            backup = 'auto';
            if(!foxtra) { _fun00004_ip = 640; continue _fun00003 }
 636:
            backup = 'none';
 640:
            foxtra = 'pointerEvents';
            michal[foxtra] = backup;
            foxtra = 'fadeDuration';
            michal[foxtra] = sizing;
            backup = false;
            foxtra = 'fade';
            michal[foxtra] = backup;
            michal = romeon.bind(tangon)(michal);
            michal = zuuluu.bind(yankee)(michal);
 679:
            michal = golfie / oscard;
            romeon = report.width;
            zuuluu = report.height;
            romeon = romeon / zuuluu;
            zuuluu = _closure1_slot11;
            sizing = 0;
            if(!zuuluu) { _fun00004_ip = 732; continue _fun00003 }
 706:
            foxtra = report.height;
            zuuluu = 2;
            foxtra = foxtra / zuuluu;
            zuuluu = 5.75;
            sizing = foxtra - zuuluu;
 732:
            foxtra = report.x;
            zuuluu = report.width;
            zuuluu = golfie - zuuluu;
            update = 2;
            zuuluu = zuuluu / update;
            foxtra = foxtra - zuuluu;
            zuuluu = offset - golfie;
            zuuluu = zuuluu / update;
            kiloes = foxtra - zuuluu;
            _closure2_slot6 = kiloes;
            zuuluu = report.height;
            zuuluu = oscard - zuuluu;
            zuuluu = zuuluu / update;
            foxtra = verify - oscard;
            backup = foxtra / update;
            foxtra = report.y;
            zuuluu = zuuluu - sizing;
            zuuluu = foxtra - zuuluu;
            sizing = zuuluu - backup;
            _closure2_slot7 = sizing;
            _closure2_slot8 = golfie;
            _closure2_slot9 = oscard;
            foxtra = report.resizeMode;
            zuuluu = 'cover';
            if(!(zuuluu !== foxtra)) { _fun00004_ip = 872; continue _fun00003 }
 837:
            zuuluu = 1;
            if(!(michal > romeon)) { _fun00004_ip = 847; continue _fun00003 }
 844:
            zuuluu = michal;
 847:
            michal = report.width;
            michal = michal / golfie;
            foxtra = michal * zuuluu;
            _closure2_slot5 = foxtra;
            output = golfie;
            result = oscard;
            _fun00004_ip = 946; continue _fun00003;
 872:
            zuuluu = report.width;
            _closure2_slot8 = zuuluu;
            michal = report.height;
            _closure2_slot9 = michal;
            echoed = report.x;
            romeon = offset - golfie;
            romeon = romeon / update;
            romeon = echoed - romeon;
            _closure2_slot6 = romeon;
            report = report.y;
            report = report - backup;
            _closure2_slot7 = report;
            backup = 1;
            _closure2_slot5 = backup;
            foxtra = backup;
            kiloes = romeon;
            sizing = report;
            output = zuuluu;
            result = michal;
 946:
            update = _closure1_slot0;
            backup = _closure1_slot2;
            echoed = 6;
            michal = backup[echoed];
            report = update.bind(tangon)(michal);
            zuuluu = report.useAnimatedStyle;
            michal = function() { // Original name: j
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot4;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    var _closure3_slot0 = michal;
                    oscard = function(argFoo, argBar) { // Original name: interpolateProxy
                        zuuluu = _closure1_slot0;
                        golfie = _closure1_slot2;
                        entity = 6;
                        tangon = golfie[entity];
                        michal = undefined;
                        oscard = zuuluu.bind(michal)(tangon);
                        report = oscard.interpolate;
                        tangon = _closure3_slot0;
                        entity = golfie[entity];
                        entity = zuuluu.bind(michal)(entity);
                        entity = entity.Extrapolation;
                        option = entity.CLAMP;
                        offset = argFoo;
                        verify = argBar;
                        romeon = oscard;
                        yankee = tangon;
                        entity = romeon[report](yankee, offset, verify, option, golfie);
                        return entity;
                    };
                    entity = {};
                    report = _closure1_slot11;
                    michal = 1;
                    zuuluu = michal;
                    if(!report) { _fun00006_ip = 75; continue _fun00005 }
 47:
                    option = undefined;
                    golfie = [0.05, 0.1];
                    report = [0, 1];
                    zuuluu = oscard.bind(option)(golfie, report);
 75:
                    entity['opacity'] = zuuluu;
                    zuuluu = _closure2_slot9;
                    golfie = new Array(2);
                    golfie[0] = zuuluu;
                    zuuluu = _closure2_slot3;
                    golfie[1] = zuuluu;
                    report = undefined;
                    zuuluu = [0, 1];
                    zuuluu = oscard.bind(report)(zuuluu, golfie);
                    entity['height'] = zuuluu;
                    zuuluu = _closure2_slot8;
                    golfie = new Array(2);
                    golfie[0] = zuuluu;
                    zuuluu = _closure2_slot2;
                    golfie[1] = zuuluu;
                    zuuluu = [0, 1];
                    zuuluu = oscard.bind(report)(zuuluu, golfie);
                    entity['width'] = zuuluu;
                    zuuluu = _closure2_slot7;
                    option = new Array(2);
                    option[0] = zuuluu;
                    zuuluu = 0;
                    option[1] = zuuluu;
                    golfie = [0, 1];
                    golfie = oscard.bind(report)(golfie, option);
                    entity['top'] = golfie;
                    option = _closure2_slot6;
                    golfie = new Array(2);
                    golfie[0] = option;
                    golfie[1] = zuuluu;
                    zuuluu = [0, 1];
                    zuuluu = oscard.bind(report)(zuuluu, golfie);
                    entity['left'] = zuuluu;
                    golfie = [0, 0.25];
                    zuuluu = [16, 0];
                    zuuluu = oscard.bind(report)(golfie, zuuluu);
                    entity['borderRadius'] = zuuluu;
                    zuuluu = {};
                    golfie = _closure2_slot5;
                    tangon = new Array(2);
                    tangon[0] = golfie;
                    tangon[1] = michal;
                    michal = [0, 1];
                    michal = oscard.bind(report)(michal, tangon);
                    zuuluu['scale'] = michal;
                    michal = new Array(1);
                    michal[0] = zuuluu;
                    entity['transform'] = michal;
                    return entity;
                }
            };
            romeon = {};
            romeon['entranceAnimationDriver'] = source;
            source = backup[echoed];
            source = update.bind(tangon)(source);
            source = source.interpolate;
            romeon['interpolate'] = source;
            echoed = backup[echoed];
            echoed = update.bind(tangon)(echoed);
            echoed = echoed.Extrapolation;
            romeon['Extrapolation'] = echoed;
            echoed = _closure1_slot11;
            romeon['IS_ANDROID'] = echoed;
            romeon['startHeight'] = result;
            romeon['sourceHeight'] = oscard;
            romeon['startWidth'] = output;
            romeon['sourceWidth'] = golfie;
            romeon['startTranslateY'] = sizing;
            romeon['startTranslateX'] = kiloes;
            romeon['startScale'] = foxtra;
            michal['__closure'] = romeon;
            romeon = 8129401104668.0;
            michal['__workletHash'] = romeon;
            romeon = _closure1_slot20;
            michal['__initData'] = romeon;
            foxtra = zuuluu.bind(report)(michal);
            report = _closure1_slot4;
            zuuluu = report.useMemo;
            michal = new Array(4);
            michal[0] = offset;
            michal[1] = verify;
            michal[2] = golfie;
            michal[3] = oscard;
            entity = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.create;
                entity = {};
                tangon = {};
                oscard = _closure2_slot0;
                tangon['width'] = oscard;
                oscard = _closure2_slot1;
                tangon['height'] = oscard;
                oscard = 'center';
                tangon['alignItems'] = oscard;
                tangon['justifyContent'] = oscard;
                entity['container'] = tangon;
                tangon = {};
                oscard = _closure2_slot2;
                tangon['width'] = oscard;
                report = _closure2_slot3;
                tangon['height'] = report;
                entity['child'] = tangon;
                tangon = {'position': 'relative', 'overflow': 'hidden', 'opacity': 1};
                entity['presenter'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            romeon = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot5;
            entity = {};
            report = false;
            entity['collapsable'] = report;
            report = romeon.container;
            entity['style'] = report;
            golfie = _closure1_slot9;
            oscard = _closure1_slot5;
            report = {};
            verify = romeon.child;
            report['style'] = verify;
            offset = _closure1_slot9;
            verify = _closure1_slot1;
            option = 12;
            option = backup[option];
            verify = verify.bind(tangon)(option);
            option = {};
            backup = romeon.presenter;
            romeon = new Array(2);
            romeon[0] = backup;
            romeon[1] = foxtra;
            option['style'] = romeon;
            option['children'] = yankee;
            option = offset.bind(tangon)(verify, option);
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot33 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.View;
    var _closure1_slot5 = option;
    option = tangon.StyleSheet;
    var _closure1_slot6 = option;
    option = tangon.ScrollView;
    var _closure1_slot7 = option;
    tangon = tangon.PixelRatio;
    var _closure1_slot8 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.jsx;
    var _closure1_slot9 = option;
    tangon = tangon.jsxs;
    var _closure1_slot10 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    tangon = option.isAndroid;
    tangon = tangon.bind(option)();
    var _closure1_slot11 = tangon;
    tangon = {};
    option = {'position': 'absolute', 'width': '100%', 'height': '100%'};
    tangon['platformStyles'] = option;
    var _closure1_slot12 = tangon;
    tangon = {'damping': 15, 'mass': 1, 'stiffness': 250, 'overshootClamping': true, 'restSpeedThreshold': 0.001, 'restDisplacementThreshold': 0.001};
    var _closure1_slot13 = tangon;
    tangon = {};
    option = "function MediaViewerTsx1(){const{isClosing,velocity,closePosition,translatePos,withSpring,SPRING_CONFIG,runOnJS,handleClose}=this.__closure;isClosing.set(true);const toValue=velocity.get()<0?-closePosition:closePosition;translatePos.set(withSpring(toValue,{velocity:velocity.get(),...SPRING_CONFIG},'respect-motion-settings',function(){runOnJS(handleClose)();}));}";
    tangon['code'] = option;
    var _closure1_slot14 = tangon;
    tangon = {};
    option = 'function MediaViewerTsx2(){const{runOnJS,handleClose}=this.__closure;runOnJS(handleClose)();}';
    tangon['code'] = option;
    var _closure1_slot15 = tangon;
    tangon = {};
    option = 'function MediaViewerTsx3(){const{isInteracting,velocity,swipeVelocityThreshold,dismiss,translatePos,withSpring,SPRING_CONFIG}=this.__closure;isInteracting.set(false);const willClose=Math.abs(velocity.get())>swipeVelocityThreshold;if(willClose){dismiss();}else if(translatePos.get()!==0){translatePos.set(withSpring(0,{velocity:velocity.get(),...SPRING_CONFIG}));}}';
    tangon['code'] = option;
    var _closure1_slot16 = tangon;
    tangon = {};
    option = 'function MediaViewerTsx4(_,manager){const{enabled}=this.__closure;if(!enabled.get()){manager.fail();}}';
    tangon['code'] = option;
    var _closure1_slot17 = tangon;
    tangon = {};
    option = 'function MediaViewerTsx5({velocityY:velocityY,translationY:translationY}){const{translatePos,start,velocity}=this.__closure;translatePos.set(translationY+start.get().y);velocity.set(velocityY);}';
    tangon['code'] = option;
    var _closure1_slot18 = tangon;
    tangon = {};
    option = 'function MediaViewerTsx6(){const{start,translatePos,isInteracting}=this.__closure;start.set({x:0,y:translatePos.get()});isInteracting.set(true);}';
    tangon['code'] = option;
    var _closure1_slot19 = tangon;
    tangon = {};
    option = 'function MediaViewerTsx7(){const{entranceAnimationDriver,interpolate,Extrapolation,IS_ANDROID,startHeight,sourceHeight,startWidth,sourceWidth,startTranslateY,startTranslateX,startScale}=this.__closure;const entranceValue=entranceAnimationDriver.get();const interpolateProxy=function(from,to){return interpolate(entranceValue,from,to,Extrapolation.CLAMP);};return{opacity:IS_ANDROID?interpolateProxy([0.05,0.1],[0,1]):1,height:interpolateProxy([0,1],[startHeight,sourceHeight]),width:interpolateProxy([0,1],[startWidth,sourceWidth]),top:interpolateProxy([0,1],[startTranslateY,0]),left:interpolateProxy([0,1],[startTranslateX,0]),borderRadius:interpolateProxy([0,0.25],[16,0]),transform:[{scale:interpolateProxy([0,1],[startScale,1])}]};}';
    tangon['code'] = option;
    var _closure1_slot20 = tangon;
    tangon = {};
    option = 'function MediaViewerTsx8(){const{overlayEnabled}=this.__closure;return overlayEnabled.get();}';
    tangon['code'] = option;
    var _closure1_slot21 = tangon;
    tangon = {};
    option = 'function MediaViewerTsx9(overlayEnabled){const{autoHideEnabled,runOnJS,queueHideOverlay}=this.__closure;if(autoHideEnabled&&overlayEnabled){runOnJS(queueHideOverlay)();}}';
    tangon['code'] = option;
    var _closure1_slot22 = tangon;
    option = golfie.memo;
    tangon = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            output = argFoo;
            sequen = output.source;
            tangon = output.index;
            var _closure2_slot0 = tangon;
            romeon = output.windowWidth;
            yankee = output.windowHeight;
            ctrled = output.panGestureConfig;
            var _closure2_slot1 = ctrled;
            record = output.panGesture;
            var _closure2_slot2 = record;
            limora = output.onLongPress;
            var _closure2_slot3 = limora;
            source = output.zoomed;
            var _closure2_slot4 = source;
            entity = output.useItemVisible;
            zuuluu = _closure1_slot32;
            report = undefined;
            zuuluu = zuuluu.bind(report)(romeon, yankee, sequen);
            update = zuuluu.width;
            echoed = zuuluu.height;
            option = zuuluu.maximumZoomScale;
            oscard = _closure1_slot4;
            zuuluu = oscard.useRef;
            golfie = null;
            foxtra = zuuluu.bind(oscard)(golfie);
            var _closure2_slot5 = foxtra;
            oscard = _closure1_slot4;
            zuuluu = oscard.useRef;
            offset = zuuluu.bind(oscard)(golfie);
            var _closure2_slot6 = offset;
            oscard = _closure1_slot4;
            zuuluu = oscard.useState;
            vacuum = false;
            golfie = zuuluu.bind(oscard)(vacuum);
            oscard = _closure1_slot3;
            zuuluu = 2;
            zuuluu = oscard.bind(report)(golfie, zuuluu);
            oscard = 0;
            backup = zuuluu[oscard];
            verify = 1;
            zuuluu = zuuluu[verify];
            var _closure2_slot7 = zuuluu;
            kiloes = _closure1_slot4;
            golfie = kiloes.useEffect;
            oscard = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 13;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.dismissKeyboard;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            zuuluu = new Array(0);
            zuuluu = golfie.bind(kiloes)(oscard, zuuluu);
            kiloes = _closure1_slot4;
            golfie = kiloes.useCallback;
            oscard = function(argFoo, argBar) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    verify = argFoo;
                    golfie = argBar;
                    michal = _closure2_slot5;
                    michal = michal.current;
                    zuuluu = null;
                    if(!(zuuluu == michal)) { _fun00010_ip = 132; continue _fun00009 }
 24:
                    michal = _closure2_slot6;
                    michal = michal.current;
                    if(!(zuuluu !== michal)) { _fun00010_ip = 259; continue _fun00009 }
 40:
                    tangon = _closure1_slot8;
                    zuuluu = tangon.get;
                    zuuluu = zuuluu.bind(tangon)();
                    offset = verify * zuuluu;
                    option = golfie * zuuluu;
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 15;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    oscard = tangon.bind(michal)(zuuluu);
                    report = oscard.zoomTo;
                    michal = _closure2_slot6;
                    tangon = michal.current;
                    michal = 2;
                    zuuluu = offset / michal;
                    zuuluu = zuuluu - offset;
                    michal = option / michal;
                    michal = michal - option;
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    _fun00010_ip = 259; continue _fun00009;
 132:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 14;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.getWindowDimensions;
                    michal = michal.bind(zuuluu)();
                    zuuluu = michal.width;
                    oscard = 2;
                    report = zuuluu / oscard;
                    michal = michal.height;
                    tangon = michal / oscard;
                    entity = _closure2_slot5;
                    michal = entity.current;
                    entity = michal.getScrollResponder;
                    zuuluu = entity.bind(michal)();
                    michal = zuuluu.scrollResponderZoomTo;
                    entity = {};
                    option = report / oscard;
                    option = verify - option;
                    entity['x'] = option;
                    oscard = tangon / oscard;
                    oscard = golfie - oscard;
                    entity['y'] = oscard;
                    entity['width'] = report;
                    entity['height'] = tangon;
                    tangon = true;
                    entity['animated'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 259:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = new Array(0);
            status = golfie.bind(kiloes)(oscard, zuuluu);
            var _closure2_slot8 = status;
            kiloes = _closure1_slot4;
            golfie = kiloes.useCallback;
            oscard = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    report = arguments[0];
                    entity = undefined;
                    if(!(report === entity)) { _fun00012_ip = 11; continue _fun00011 }
 9:
                    report = true;
 11:
                    zuuluu = _closure2_slot5;
                    zuuluu = zuuluu.current;
                    tangon = null;
                    if(!(tangon == zuuluu)) { _fun00012_ip = 90; continue _fun00011 }
 29:
                    zuuluu = _closure2_slot6;
                    zuuluu = zuuluu.current;
                    if(!(tangon !== zuuluu)) { _fun00012_ip = 186; continue _fun00011 }
 45:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 15;
                    zuuluu = oscard[zuuluu];
                    oscard = tangon.bind(entity)(zuuluu);
                    tangon = oscard.unzoom;
                    zuuluu = _closure2_slot6;
                    zuuluu = zuuluu.current;
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    _fun00012_ip = 186; continue _fun00011;
 90:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 14;
                    zuuluu = oscard[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.getWindowDimensions;
                    zuuluu = zuuluu.bind(tangon)();
                    golfie = zuuluu.width;
                    oscard = zuuluu.height;
                    michal = _closure2_slot5;
                    zuuluu = michal.current;
                    michal = zuuluu.getScrollResponder;
                    tangon = michal.bind(zuuluu)();
                    zuuluu = tangon.scrollResponderZoomTo;
                    michal = {'x': 0, 'y': 0};
                    michal['width'] = golfie;
                    michal['height'] = oscard;
                    michal['animated'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 186:
                    return entity;
                }
            };
            zuuluu = new Array(0);
            config = golfie.bind(kiloes)(oscard, zuuluu);
            var _closure2_slot9 = config;
            kiloes = _closure1_slot4;
            golfie = kiloes.useCallback;
            oscard = new Array(2);
            oscard[0] = source;
            oscard[1] = ctrled;
            zuuluu = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argFoo;
                    entity = entity.nativeEvent;
                    michal = entity.zoomScale;
                    entity = 1;
                    tangon = michal > entity;
                    zuuluu = _closure2_slot4;
                    entity = zuuluu.set;
                    entity = entity.bind(zuuluu)(tangon);
                    entity = _closure2_slot1;
                    zuuluu = entity.isInteracting;
                    entity = zuuluu.set;
                    entity = entity.bind(zuuluu)(tangon);
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 11;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    zuuluu = report.bind(entity)(zuuluu);
                    report = zuuluu.useEntranceAnimationState;
                    zuuluu = report.getState;
                    zuuluu = zuuluu.bind(report)();
                    zuuluu = zuuluu.isComplete;
                    if(!zuuluu) { _fun00014_ip = 111; continue _fun00013 }
 108:
                    zuuluu = !tangon;
 111:
                    if(!zuuluu) { _fun00014_ip = 154; continue _fun00013 }
 114:
                    zuuluu = _closure2_slot7;
                    michal = true;
                    michal = zuuluu.bind(entity)(michal);
                    michal = global;
                    tangon = michal.setTimeout;
                    zuuluu = function() {
                        zuuluu = _closure2_slot7;
                        entity = undefined;
                        michal = false;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    michal = 500;
                    michal = tangon.bind(entity)(zuuluu, michal);
 154:
                    return entity;
                }
            };
            golfie = golfie.bind(kiloes)(zuuluu, oscard);
            zuuluu = _closure1_slot0;
            kiloes = _closure1_slot2;
            oscard = 5;
            oscard = kiloes[oscard];
            result = zuuluu.bind(report)(oscard);
            oscard = result.flattenSource;
            oscard = oscard.bind(result)(sequen);
            cntext = oscard.obscure;
            var _closure2_slot10 = cntext;
            sequen = oscard.channelId;
            oscard = 16;
            oscard = kiloes[oscard];
            oscard = zuuluu.bind(report)(oscard);
            papara = oscard.MediaViewerSourcesStore;
            result = papara.useField;
            oscard = 'spoilerIndexes';
            oscard = result.bind(papara)(oscard);
            var _closure2_slot11 = oscard;
            target = _closure1_slot4;
            papara = target.useMemo;
            result = new Array(2);
            result[0] = tangon;
            result[1] = oscard;
            oscard = function() {
                zuuluu = _closure2_slot11;
                michal = zuuluu.has;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            result = papara.bind(target)(oscard, result);
            var _closure2_slot12 = result;
            papara = _closure1_slot1;
            oscard = 17;
            oscard = kiloes[oscard];
            oscard = papara.bind(report)(oscard);
            oscard = oscard.bind(report)(sequen);
            var _closure2_slot13 = oscard;
            sierra = _closure1_slot4;
            target = sierra.useCallback;
            sequen = new Array(4);
            sequen[0] = result;
            sequen[1] = tangon;
            sequen[2] = limora;
            sequen[3] = oscard;
            oscard = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = _closure2_slot12;
                    if(michal) { _fun00016_ip = 42; continue _fun00015 }
 10:
                    michal = _closure2_slot13;
                    if(michal) { _fun00016_ip = 27; continue _fun00015 }
 17:
                    tangon = _closure2_slot3;
                    zuuluu = null;
                    michal = zuuluu == tangon;
 27:
                    if(michal) { _fun00016_ip = 82; continue _fun00015 }
 30:
                    zuuluu = _closure2_slot3;
                    michal = undefined;
                    michal = zuuluu.bind(michal)();
                    _fun00016_ip = 82; continue _fun00015;
 42:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 16;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.removeSpoiler;
                    entity = _closure2_slot0;
                    entity = michal.bind(zuuluu)(entity);
 82:
                    entity = undefined;
                    return entity;
                }
            };
            target = target.bind(sierra)(oscard, sequen);
            var _closure2_slot14 = target;
            sierra = _closure1_slot4;
            sequen = sierra.useRef;
            oscard = -1;
            oscard = sequen.bind(sierra)(oscard);
            var _closure2_slot15 = oscard;
            limora = _closure1_slot4;
            sierra = limora.useCallback;
            sequen = new Array(2);
            sequen[0] = source;
            sequen[1] = ctrled;
            oscard = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = _closure2_slot4;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    if(michal) { _fun00018_ip = 57; continue _fun00017 }
 19:
                    entity = _closure2_slot1;
                    zuuluu = entity.overlayEnabled;
                    michal = zuuluu.set;
                    tangon = entity.overlayEnabled;
                    entity = tangon.get;
                    entity = entity.bind(tangon)();
                    entity = !entity;
                    entity = michal.bind(zuuluu)(entity);
 57:
                    entity = undefined;
                    return entity;
                }
            };
            oscard = sierra.bind(limora)(oscard, sequen);
            var _closure2_slot16 = oscard;
            sequen = 18;
            sequen = kiloes[sequen];
            limora = papara.bind(report)(sequen);
            sierra = limora.useExperiment;
            papara = {};
            sequen = 'MediaViewerItem';
            papara['location'] = sequen;
            sequen = {};
            sequen['autoTrackExposure'] = vacuum;
            sequen = sierra.bind(limora)(papara, sequen);
            quebec = sequen.enabled;
            var _closure2_slot17 = quebec;
            sequen = sequen.timeout;
            var _closure2_slot18 = sequen;
            limora = _closure1_slot4;
            sierra = limora.useCallback;
            papara = new Array(2);
            papara[0] = ctrled;
            papara[1] = sequen;
            sequen = function() {
                tangon = global;
                oscard = tangon.clearTimeout;
                zuuluu = _closure2_slot15;
                report = zuuluu.current;
                entity = undefined;
                report = oscard.bind(entity)(report);
                report = tangon.setTimeout;
                tangon = _closure2_slot18;
                michal = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 18;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.trackExposure;
                    michal = {};
                    report = 'MediaViewerItem';
                    michal['location'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    michal = _closure2_slot1;
                    tangon = michal.overlayEnabled;
                    zuuluu = tangon.set;
                    michal = false;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal = report.bind(entity)(michal, tangon);
                zuuluu['current'] = michal;
                return entity;
            };
            whisks = sierra.bind(limora)(sequen, papara);
            var _closure2_slot19 = whisks;
            limora = ctrled.overlayEnabled;
            var _closure2_slot20 = limora;
            equals = 6;
            ctrled = kiloes[equals];
            sierra = zuuluu.bind(report)(ctrled);
            papara = sierra.useAnimatedReaction;
            sequen = function() { // Original name: A
                michal = _closure2_slot20;
                entity = michal.get;
                entity = entity.bind(michal)();
                return entity;
            };
            ctrled = {};
            ctrled['overlayEnabled'] = limora;
            sequen['__closure'] = ctrled;
            ctrled = 8243836315055.0;
            sequen['__workletHash'] = ctrled;
            ctrled = _closure1_slot21;
            sequen['__initData'] = ctrled;
            ctrled = function(argFoo) { // Original name: G
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zuuluu = argFoo;
                    michal = _closure2_slot17;
                    if(!michal) { _fun00020_ip = 16; continue _fun00019 }
 13:
                    michal = zuuluu;
 16:
                    if(!michal) { _fun00020_ip = 62; continue _fun00019 }
 19:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 6;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.runOnJS;
                    entity = _closure2_slot19;
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.bind(michal)();
 62:
                    entity = undefined;
                    return entity;
                }
            };
            limora = {};
            limora['autoHideEnabled'] = quebec;
            equals = kiloes[equals];
            equals = zuuluu.bind(report)(equals);
            equals = equals.runOnJS;
            limora['runOnJS'] = equals;
            limora['queueHideOverlay'] = whisks;
            ctrled['__closure'] = limora;
            limora = 16867283648917.0;
            ctrled['__workletHash'] = limora;
            limora = _closure1_slot22;
            ctrled['__initData'] = limora;
            ctrled = papara.bind(sierra)(sequen, ctrled);
            sierra = _closure1_slot4;
            papara = sierra.useEffect;
            sequen = function() {
                entity = function() {
                    entity = global;
                    zuuluu = entity.clearTimeout;
                    entity = _closure2_slot15;
                    michal = entity.current;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                return entity;
            };
            ctrled = new Array(0);
            ctrled = papara.bind(sierra)(sequen, ctrled);
            papara = _closure1_slot4;
            sequen = papara.useCallback;
            ctrled = new Array(3);
            ctrled[0] = config;
            ctrled[1] = status;
            ctrled[2] = source;
            source = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    entity = argFoo;
                    report = entity.absoluteX;
                    tangon = entity.absoluteY;
                    zuuluu = _closure2_slot4;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    if(michal) { _fun00022_ip = 64; continue _fun00021 }
 34:
                    zuuluu = _closure2_slot4;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    if(michal) { _fun00022_ip = 77; continue _fun00021 }
 50:
                    zuuluu = _closure2_slot8;
                    michal = undefined;
                    michal = zuuluu.bind(michal)(report, tangon);
                    _fun00022_ip = 77; continue _fun00021;
 64:
                    zuuluu = _closure2_slot9;
                    michal = undefined;
                    entity = false;
                    entity = zuuluu.bind(michal)(entity);
 77:
                    entity = undefined;
                    return entity;
                }
            };
            status = sequen.bind(papara)(source, ctrled);
            var _closure2_slot21 = status;
            papara = _closure1_slot4;
            sequen = papara.useCallback;
            ctrled = new Array(1);
            ctrled[0] = tangon;
            source = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 16;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.removeSpoiler;
                michal = _closure2_slot0;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            papara = sequen.bind(papara)(source, ctrled);
            var _closure2_slot22 = papara;
            sequen = _closure1_slot4;
            ctrled = sequen.useMemo;
            source = new Array(7);
            source[0] = status;
            source[1] = target;
            source[2] = papara;
            source[3] = result;
            source[4] = cntext;
            source[5] = record;
            source[6] = oscard;
            oscard = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    option = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    golfie = 10;
                    entity = zuuluu[golfie];
                    oscard = undefined;
                    entity = option.bind(oscard)(entity);
                    tangon = entity.Gesture;
                    entity = tangon.Tap;
                    tangon = entity.bind(tangon)();
                    entity = tangon.runOnJS;
                    verify = true;
                    offset = entity.bind(tangon)(verify);
                    report = offset.enabled;
                    tangon = _closure2_slot12;
                    tangon = !tangon;
                    offset = report.bind(offset)(tangon);
                    report = offset.numberOfTaps;
                    tangon = 2;
                    report = report.bind(offset)(tangon);
                    tangon = report.maxDistance;
                    romeon = 4;
                    zuuluu = zuuluu[romeon];
                    option = option.bind(oscard)(zuuluu);
                    zuuluu = option.isAndroid;
                    option = zuuluu.bind(option)();
                    zuuluu = golfie;
                    if(!option) { _fun00024_ip = 123; continue _fun00023 }
 120:
                    zuuluu = 20;
 123:
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.onStart;
                    zuuluu = _closure2_slot21;
                    yankee = tangon.bind(report)(zuuluu);
                    offset = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    tangon = zuuluu[golfie];
                    tangon = offset.bind(oscard)(tangon);
                    report = tangon.Gesture;
                    tangon = report.Tap;
                    report = tangon.bind(report)();
                    tangon = report.runOnJS;
                    option = tangon.bind(report)(verify);
                    report = option.enabled;
                    tangon = _closure2_slot12;
                    tangon = !tangon;
                    option = report.bind(option)(tangon);
                    tangon = option.numberOfTaps;
                    report = 1;
                    option = tangon.bind(option)(report);
                    tangon = option.maxDistance;
                    zuuluu = zuuluu[romeon];
                    offset = offset.bind(oscard)(zuuluu);
                    zuuluu = offset.isAndroid;
                    offset = zuuluu.bind(offset)();
                    zuuluu = golfie;
                    if(!offset) { _fun00024_ip = 250; continue _fun00023 }
 247:
                    zuuluu = 20;
 250:
                    option = tangon.bind(option)(zuuluu);
                    tangon = option.onStart;
                    zuuluu = _closure2_slot16;
                    offset = tangon.bind(option)(zuuluu);
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    tangon = zuuluu.Gesture;
                    zuuluu = tangon.Tap;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = tangon.runOnJS;
                    option = zuuluu.bind(tangon)(verify);
                    tangon = option.enabled;
                    zuuluu = _closure2_slot12;
                    if(!zuuluu) { _fun00024_ip = 332; continue _fun00023 }
 325:
                    foxtra = _closure2_slot10;
                    zuuluu = !foxtra;
 332:
                    tangon = tangon.bind(option)(zuuluu);
                    zuuluu = tangon.numberOfTaps;
                    report = zuuluu.bind(tangon)(report);
                    tangon = report.maxDistance;
                    option = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[romeon];
                    option = option.bind(oscard)(zuuluu);
                    zuuluu = option.isAndroid;
                    option = zuuluu.bind(option)();
                    zuuluu = golfie;
                    if(!option) { _fun00024_ip = 389; continue _fun00023 }
 386:
                    zuuluu = 20;
 389:
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.onStart;
                    zuuluu = _closure2_slot22;
                    option = tangon.bind(report)(zuuluu);
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    tangon = michal[golfie];
                    tangon = zuuluu.bind(oscard)(tangon);
                    report = tangon.Gesture;
                    tangon = report.Exclusive;
                    report = tangon.bind(report)(option, yankee, offset);
                    tangon = michal[golfie];
                    tangon = zuuluu.bind(oscard)(tangon);
                    option = tangon.Gesture;
                    tangon = option.LongPress;
                    option = tangon.bind(option)();
                    tangon = option.runOnJS;
                    verify = tangon.bind(option)(verify);
                    option = verify.enabled;
                    tangon = _closure2_slot12;
                    tangon = !tangon;
                    verify = option.bind(verify)(tangon);
                    option = verify.onStart;
                    tangon = _closure2_slot14;
                    tangon = option.bind(verify)(tangon);
                    michal = michal[golfie];
                    michal = zuuluu.bind(oscard)(michal);
                    zuuluu = michal.Gesture;
                    michal = zuuluu.Simultaneous;
                    entity = _closure2_slot2;
                    entity = michal.bind(zuuluu)(report, tangon, entity);
                    return entity;
                }
            };
            oscard = ctrled.bind(sequen)(oscard, source);
            ctrled = _closure1_slot4;
            source = ctrled.useRef;
            source = source.bind(ctrled)(vacuum);
            var _closure2_slot23 = source;
            sequen = _closure1_slot4;
            vacuum = sequen.useEffect;
            ctrled = new Array(3);
            ctrled[0] = config;
            ctrled[1] = romeon;
            ctrled[2] = yankee;
            source = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    zuuluu = _closure2_slot23;
                    zuuluu = zuuluu.current;
                    if(zuuluu) { _fun00026_ip = 33; continue _fun00025 }
 17:
                    tangon = _closure2_slot23;
                    zuuluu = true;
                    tangon['current'] = zuuluu;
                    zuuluu = undefined;
                    return zuuluu;
 33:
                    zuuluu = global;
                    report = zuuluu.setTimeout;
                    tangon = _closure2_slot9;
                    zuuluu = undefined;
                    michal = 0;
                    michal = report.bind(zuuluu)(tangon, michal);
                    var _closure3_slot0 = michal;
                    entity = function() {
                        entity = global;
                        zuuluu = entity.clearTimeout;
                        michal = _closure3_slot0;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    return entity;
                }
            };
            source = vacuum.bind(sequen)(source, ctrled);
            source = 19;
            source = kiloes[source];
            ctrled = zuuluu.bind(report)(source);
            source = ctrled.useOrientation;
            sequen = source.bind(ctrled)();
            vacuum = _closure1_slot4;
            ctrled = vacuum.useEffect;
            source = new Array(2);
            source[0] = config;
            source[1] = sequen;
            sizing = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    michal = _closure2_slot23;
                    michal = michal.current;
                    if(!michal) { _fun00028_ip = 28; continue _fun00027 }
 15:
                    zuuluu = _closure2_slot9;
                    michal = undefined;
                    entity = false;
                    entity = zuuluu.bind(michal)(entity);
 28:
                    entity = undefined;
                    return entity;
                }
            };
            sizing = ctrled.bind(vacuum)(sizing, source);
            source = entity.bind(report)(tangon);
            tangon = _closure1_slot9;
            entity = 10;
            entity = kiloes[entity];
            entity = zuuluu.bind(report)(entity);
            zuuluu = entity.GestureDetector;
            entity = {};
            entity['gesture'] = oscard;
            sizing = _closure1_slot9;
            kiloes = _closure1_slot33;
            oscard = {};
            variable38 = oscard;
            variable37 = output;
            output = copyDataProperties(variable38, variable37);
            output = 'visible';
            oscard[output] = source;
            output = 'sourceWidth';
            oscard[output] = update;
            output = 'sourceHeight';
            oscard[output] = echoed;
            output = 'maximumZoomScale';
            oscard[output] = option;
            output = 'hasSpoiler';
            oscard[output] = result;
            oscard = sizing.bind(report)(kiloes, oscard);
            entity['children'] = oscard;
            oscard = tangon.bind(report)(zuuluu, entity);
            entity = _closure1_slot11;
            tangon = _closure1_slot9;
            if(entity) { _fun00008_ip = 1295; continue _fun00007 }
 1216:
            zuuluu = _closure1_slot7;
            entity = {'ref': null, 'style': null, 'automaticallyAdjustContentInsets': false, 'showsHorizontalScrollIndicator': false, 'showsVerticalScrollIndicator': false, 'minimumZoomScale': 1, 'maximumZoomScale': null, 'centerContent': true, 'scrollEventThrottle': 16};
            entity['ref'] = foxtra;
            foxtra = {};
            foxtra['width'] = romeon;
            foxtra['height'] = yankee;
            entity['style'] = foxtra;
            entity['maximumZoomScale'] = option;
            entity['onScroll'] = golfie;
            foxtra = 'auto';
            if(!backup) { _fun00008_ip = 1278; continue _fun00007 }
 1274:
            foxtra = 'none';
 1278:
            entity['pointerEvents'] = foxtra;
            entity['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00008_ip = 1360; continue _fun00007;
 1295:
            zuuluu = _closure1_slot1;
            foxtra = _closure1_slot2;
            michal = 15;
            michal = foxtra[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal['ref'] = offset;
            offset = {};
            offset['width'] = romeon;
            offset['height'] = yankee;
            michal['style'] = offset;
            michal['minimumZoomScale'] = verify;
            michal['maximumZoomScale'] = option;
            michal['onZoomChanged'] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 1360:
            return entity;
        }
    };
    tangon = option.bind(golfie)(tangon);
    var _closure1_slot23 = tangon;
    tangon = {};
    option = 'function MediaViewerTsx10(){const{zoomed,pinching}=this.__closure;return!zoomed.get()&&!pinching.get();}';
    tangon['code'] = option;
    var _closure1_slot24 = tangon;
    tangon = {};
    option = 'function MediaViewerTsx11(){const{scrollEnabled}=this.__closure;return{scrollEnabled:scrollEnabled.get()};}';
    tangon['code'] = option;
    var _closure1_slot25 = tangon;
    option = golfie.memo;
    tangon = function(argFoo) {
        config = argFoo;
        var _closure2_slot0 = config;
        verify = config.windowWidth;
        vacuum = config.initialIndex;
        var _closure2_slot1 = vacuum;
        report = config.panGestureConfig;
        zuuluu = config.syncer;
        sequen = zuuluu.zoomed;
        var _closure2_slot2 = sequen;
        michal = zuuluu.useViewerProps;
        output = zuuluu.sources;
        var _closure2_slot3 = output;
        kiloes = zuuluu.index;
        tangon = undefined;
        michal = michal.bind(tangon)();
        echoed = michal.ref;
        yankee = michal.onScroll;
        option = michal.onContentSizeChange;
        ctrled = michal.useItemVisible;
        var _closure2_slot4 = ctrled;
        oscard = _closure1_slot0;
        update = _closure1_slot2;
        michal = 6;
        zuuluu = update[michal];
        golfie = oscard.bind(tangon)(zuuluu);
        zuuluu = golfie.useSharedValue;
        foxtra = false;
        zuuluu = zuuluu.bind(golfie)(foxtra);
        var _closure2_slot5 = zuuluu;
        golfie = update[michal];
        romeon = oscard.bind(tangon)(golfie);
        offset = romeon.useDerivedValue;
        golfie = function() { // Original name: o
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                zuuluu = _closure2_slot2;
                entity = zuuluu.get;
                entity = entity.bind(zuuluu)();
                entity = !entity;
                if(!entity) { _fun00030_ip = 38; continue _fun00029 }
 22:
                zuuluu = _closure2_slot5;
                michal = zuuluu.get;
                michal = michal.bind(zuuluu)();
                entity = !michal;
 38:
                return entity;
            }
        };
        backup = {};
        backup['zoomed'] = sequen;
        backup['pinching'] = zuuluu;
        golfie['__closure'] = backup;
        backup = 4332438940835.0;
        golfie['__workletHash'] = backup;
        backup = _closure1_slot24;
        golfie['__initData'] = backup;
        offset = offset.bind(romeon)(golfie);
        var _closure2_slot6 = offset;
        sizing = _closure1_slot4;
        backup = sizing.useCallback;
        romeon = new Array(1);
        romeon[0] = zuuluu;
        golfie = function(argFoo) {
            entity = argFoo;
            entity = entity.nativeEvent;
            entity = entity.touches;
            zuuluu = _closure2_slot5;
            michal = zuuluu.set;
            tangon = entity.length;
            entity = 2;
            entity = entity === tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        sizing = backup.bind(sizing)(golfie, romeon);
        backup = _closure1_slot4;
        romeon = backup.useCallback;
        golfie = new Array(1);
        golfie[0] = zuuluu;
        zuuluu = function() {
            zuuluu = _closure2_slot5;
            michal = zuuluu.set;
            entity = false;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        backup = romeon.bind(backup)(zuuluu, golfie);
        zuuluu = function(argFoo, argBar) { // Original name: usePanGesture
            michal = argFoo;
            yankee = argBar;
            option = michal.swipeVelocityThreshold;
            var _closure3_slot0 = option;
            zuuluu = michal.velocity;
            var _closure3_slot1 = zuuluu;
            offset = michal.isInteracting;
            var _closure3_slot2 = offset;
            golfie = michal.translatePos;
            var _closure3_slot3 = golfie;
            verify = michal.start;
            var _closure3_slot4 = verify;
            romeon = michal.dismiss;
            var _closure3_slot5 = romeon;
            var _closure3_slot6 = yankee;
            oscard = _closure1_slot4;
            report = oscard.useCallback;
            tangon = new Array(7);
            tangon[0] = romeon;
            tangon[1] = yankee;
            tangon[2] = offset;
            tangon[3] = verify;
            tangon[4] = option;
            tangon[5] = golfie;
            tangon[6] = zuuluu;
            zuuluu = function() {
                option = _closure1_slot0;
                verify = _closure1_slot2;
                oscard = 10;
                michal = verify[oscard];
                golfie = undefined;
                michal = option.bind(golfie)(michal);
                zuuluu = michal.Gesture;
                michal = zuuluu.Pan;
                report = michal.bind(zuuluu)();
                zuuluu = report.maxPointers;
                michal = 1;
                report = zuuluu.bind(report)(michal);
                zuuluu = report.activeOffsetY;
                michal = new Array(2);
                offset = -10;
                michal[0] = offset;
                michal[1] = oscard;
                report = zuuluu.bind(report)(michal);
                zuuluu = report.failOffsetX;
                michal = new Array(2);
                michal[0] = offset;
                michal[1] = oscard;
                report = zuuluu.bind(report)(michal);
                zuuluu = report.onStart;
                michal = function() { // Original name: w
                    tangon = _closure3_slot4;
                    zuuluu = tangon.set;
                    michal = {};
                    report = 0;
                    michal['x'] = report;
                    oscard = _closure3_slot3;
                    report = oscard.get;
                    report = report.bind(oscard)();
                    michal['y'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = _closure3_slot2;
                    michal = zuuluu.set;
                    entity = true;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                foxtra = {};
                yankee = _closure3_slot4;
                foxtra['start'] = yankee;
                oscard = _closure3_slot3;
                foxtra['translatePos'] = oscard;
                romeon = _closure3_slot2;
                foxtra['isInteracting'] = romeon;
                michal['__closure'] = foxtra;
                foxtra = 16957201145085.0;
                michal['__workletHash'] = foxtra;
                foxtra = _closure1_slot19;
                michal['__initData'] = foxtra;
                report = zuuluu.bind(report)(michal);
                zuuluu = report.onUpdate;
                michal = function(argFoo) { // Original name: S
                    entity = argFoo;
                    zuuluu = entity.velocityY;
                    oscard = entity.translationY;
                    report = _closure3_slot3;
                    tangon = report.set;
                    golfie = _closure3_slot4;
                    michal = golfie.get;
                    michal = michal.bind(golfie)();
                    michal = michal.y;
                    michal = oscard + michal;
                    michal = tangon.bind(report)(michal);
                    michal = _closure3_slot1;
                    entity = michal.set;
                    entity = entity.bind(michal)(zuuluu);
                    entity = undefined;
                    return entity;
                };
                foxtra = {};
                foxtra['translatePos'] = oscard;
                foxtra['start'] = yankee;
                yankee = _closure3_slot1;
                foxtra['velocity'] = yankee;
                michal['__closure'] = foxtra;
                foxtra = 7060732261689.0;
                michal['__workletHash'] = foxtra;
                foxtra = _closure1_slot18;
                michal['__initData'] = foxtra;
                report = zuuluu.bind(report)(michal);
                zuuluu = report.onTouchesDown;
                michal = function(argFoo, argBar) { // Original name: _
                    _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                        michal = argBar;
                        zuuluu = _closure3_slot6;
                        entity = zuuluu.get;
                        entity = entity.bind(zuuluu)();
                        if(entity) { _fun00032_ip = 32; continue _fun00031 }
 22:
                        entity = michal.fail;
                        entity = entity.bind(michal)();
 32:
                        entity = undefined;
                        return entity;
                    }
                };
                foxtra = {};
                backup = _closure3_slot6;
                foxtra['enabled'] = backup;
                michal['__closure'] = foxtra;
                foxtra = 12049065463102.0;
                michal['__workletHash'] = foxtra;
                foxtra = _closure1_slot17;
                michal['__initData'] = foxtra;
                zuuluu = zuuluu.bind(report)(michal);
                michal = zuuluu.onEnd;
                entity = function() { // Original name: n
                    _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                        tangon = _closure3_slot2;
                        zuuluu = tangon.set;
                        michal = false;
                        michal = zuuluu.bind(tangon)(michal);
                        michal = global;
                        tangon = michal.Math;
                        zuuluu = tangon.abs;
                        report = _closure3_slot1;
                        michal = report.get;
                        michal = michal.bind(report)();
                        zuuluu = zuuluu.bind(tangon)(michal);
                        michal = _closure3_slot0;
                        if(!(!(zuuluu > michal))) { _fun00034_ip = 161; continue _fun00033 }
 59:
                        zuuluu = _closure3_slot3;
                        michal = zuuluu.get;
                        michal = michal.bind(zuuluu)();
                        golfie = 0;
                        if(!(golfie !== michal)) { _fun00034_ip = 171; continue _fun00033 }
 78:
                        tangon = _closure3_slot3;
                        zuuluu = tangon.set;
                        oscard = _closure1_slot0;
                        report = _closure1_slot2;
                        michal = 9;
                        report = report[michal];
                        michal = undefined;
                        oscard = oscard.bind(michal)(report);
                        report = oscard.withSpring;
                        michal = {};
                        offset = _closure3_slot1;
                        verify = offset.get;
                        verify = verify.bind(offset)();
                        michal['velocity'] = verify;
                        yankee = _closure1_slot13;
                        romeon = michal;
                        option = copyDataProperties(romeon, yankee);
                        michal = report.bind(oscard)(golfie, michal);
                        michal = zuuluu.bind(tangon)(michal);
                        _fun00034_ip = 171; continue _fun00033;
 161:
                        michal = _closure3_slot5;
                        entity = undefined;
                        entity = michal.bind(entity)();
 171:
                        entity = undefined;
                        return entity;
                    }
                };
                report = {};
                report['isInteracting'] = romeon;
                report['velocity'] = yankee;
                yankee = _closure3_slot0;
                report['swipeVelocityThreshold'] = yankee;
                offset = _closure3_slot5;
                report['dismiss'] = offset;
                report['translatePos'] = oscard;
                oscard = 9;
                oscard = verify[oscard];
                oscard = option.bind(golfie)(oscard);
                oscard = oscard.withSpring;
                report['withSpring'] = oscard;
                oscard = _closure1_slot13;
                report['SPRING_CONFIG'] = oscard;
                entity['__closure'] = report;
                report = 14151490519751.0;
                entity['__workletHash'] = report;
                tangon = _closure1_slot16;
                entity['__initData'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report = report.bind(oscard)(zuuluu, tangon);
            var _closure3_slot7 = report;
            tangon = _closure1_slot4;
            zuuluu = tangon.useMemo;
            michal = new Array(1);
            michal[0] = report;
            entity = function() {
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 10;
                michal = michal[entity];
                entity = undefined;
                entity = tangon.bind(entity)(michal);
                michal = entity.Gesture;
                entity = michal.Native;
                michal = entity.bind(michal)();
                var _closure4_slot0 = michal;
                entity = new Array(0);
                var _closure4_slot1 = entity;
                entity = {};
                zuuluu = function(argFoo) { // Original name: panGestureGenerator
                    _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                        michal = argFoo;
                        zuuluu = _closure4_slot1;
                        tangon = zuuluu[michal];
                        zuuluu = null;
                        if(!(zuuluu == tangon)) { _fun00036_ip = 64; continue _fun00035 }
 20:
                        tangon = _closure3_slot7;
                        zuuluu = undefined;
                        oscard = tangon.bind(zuuluu)();
                        zuuluu = _closure4_slot1;
                        report = oscard.blocksExternalGesture;
                        tangon = _closure4_slot0;
                        tangon = report.bind(oscard)(tangon);
                        zuuluu[michal] = tangon;
                        zuuluu = zuuluu[michal];
                        return zuuluu;
 64:
                        entity = _closure4_slot1;
                        entity = entity[michal];
                        return entity;
                    }
                };
                entity['panGestureGenerator'] = zuuluu;
                entity['nativeGesture'] = michal;
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report = zuuluu.bind(tangon)(report, offset);
        zuuluu = report.panGestureGenerator;
        var _closure2_slot7 = zuuluu;
        report = report.nativeGesture;
        source = _closure1_slot4;
        romeon = source.useCallback;
        golfie = new Array(6);
        golfie[0] = config;
        golfie[1] = output;
        golfie[2] = sequen;
        golfie[3] = vacuum;
        golfie[4] = ctrled;
        golfie[5] = zuuluu;
        zuuluu = function(argFoo, argBar) {
            golfie = argBar;
            tangon = _closure1_slot9;
            zuuluu = _closure1_slot23;
            michal = {};
            option = _closure2_slot0;
            verify = michal;
            entity = copyDataProperties(verify, option);
            entity = _closure2_slot3;
            oscard = entity[golfie];
            entity = 'source';
            michal[entity] = oscard;
            entity = 'index';
            michal[entity] = golfie;
            oscard = _closure2_slot1;
            entity = 'initialIndex';
            michal[entity] = oscard;
            oscard = _closure2_slot2;
            entity = 'zoomed';
            michal[entity] = oscard;
            oscard = _closure2_slot7;
            entity = undefined;
            golfie = oscard.bind(entity)(golfie);
            oscard = 'panGesture';
            michal[oscard] = golfie;
            oscard = _closure2_slot4;
            report = 'useItemVisible';
            michal[report] = oscard;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        romeon = romeon.bind(source)(zuuluu, golfie);
        michal = update[michal];
        zuuluu = oscard.bind(tangon)(michal);
        michal = zuuluu.useAnimatedProps;
        entity = function() { // Original name: s
            entity = {};
            zuuluu = _closure2_slot6;
            michal = zuuluu.get;
            michal = michal.bind(zuuluu)();
            entity['scrollEnabled'] = michal;
            return entity;
        };
        golfie = {};
        golfie['scrollEnabled'] = offset;
        entity['__closure'] = golfie;
        golfie = 16018174702883.0;
        entity['__workletHash'] = golfie;
        golfie = _closure1_slot25;
        entity['__initData'] = golfie;
        offset = michal.bind(zuuluu)(entity);
        zuuluu = _closure1_slot9;
        entity = 10;
        entity = update[entity];
        entity = oscard.bind(tangon)(entity);
        michal = entity.GestureDetector;
        entity = {};
        entity['gesture'] = report;
        golfie = _closure1_slot9;
        report = 20;
        report = update[report];
        report = oscard.bind(tangon)(report);
        oscard = report.AnimatedFastList;
        report = {};
        report['ref'] = echoed;
        result = _closure1_slot6;
        result = result.absoluteFill;
        report['style'] = result;
        result = output.length;
        output = new Array(1);
        output[0] = result;
        report['sections'] = output;
        report['onTouchStart'] = sizing;
        report['onTouchEnd'] = backup;
        report['onTouchCancel'] = backup;
        backup = kiloes.get;
        backup = backup.bind(kiloes)();
        report['initialScrollItem'] = backup;
        report['automaticallyAdjustContentInsets'] = foxtra;
        report['showsVerticalScrollIndicator'] = foxtra;
        report['showsHorizontalScrollIndicator'] = foxtra;
        report['itemSize'] = verify;
        report['renderItem'] = romeon;
        report['onContentSizeChange'] = option;
        option = true;
        report['pagingEnabled'] = option;
        report['onScroll'] = yankee;
        yankee = 16;
        report['scrollEventThrottle'] = yankee;
        report['animatedProps'] = offset;
        report['disableLegacyGestureHandling'] = option;
        report['chunkBase'] = verify;
        report['horizontal'] = option;
        report = golfie.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    tangon = option.bind(golfie)(tangon);
    var _closure1_slot26 = tangon;
    tangon = {};
    option = "function MediaViewerTsx12(){const{absoluteFillObject,windowHeight,entranceAnimationDriver,interpolate,translatePos,closePosition}=this.__closure;return{...absoluteFillObject,height:windowHeight,backgroundColor:'black',opacity:Math.min(entranceAnimationDriver.get(),interpolate(translatePos.get(),[-closePosition,0,closePosition],[0,1,0]))};}";
    tangon['code'] = option;
    var _closure1_slot27 = tangon;
    tangon = {};
    option = "function MediaViewerTsx13(){const{isClosing,isOrientationSettling,overlayEnabled,isInteracting,withTiming,Easing,runOnJS,setShowHeader}=this.__closure;return{opacity:isClosing.get()||isOrientationSettling?0:overlayEnabled.get()&&!isInteracting.get()?withTiming(1,{easing:Easing.linear,duration:150}):withTiming(0,{easing:Easing.linear,duration:75},'respect-motion-settings',function(){runOnJS(setShowHeader)(false);})};}";
    tangon['code'] = option;
    var _closure1_slot28 = tangon;
    tangon = {};
    option = 'function MediaViewerTsx14(){const{runOnJS,setShowHeader}=this.__closure;runOnJS(setShowHeader)(false);}';
    tangon['code'] = option;
    var _closure1_slot29 = tangon;
    tangon = {};
    option = 'function MediaViewerTsx15(){const{overlayEnabled,isInteracting,runOnJS,setShowHeader}=this.__closure;if(overlayEnabled.get()&&!isInteracting.get()){runOnJS(setShowHeader)(true);}}';
    tangon['code'] = option;
    var _closure1_slot30 = tangon;
    tangon = {};
    option = "function MediaViewerTsx16(){const{absoluteFillObject,translatePos,hideMediaDuringOrientationChange,withTiming,Easing}=this.__closure;return{...absoluteFillObject,alignItems:'center',justifyContent:'center',transform:[{translateY:translatePos.get()}],opacity:hideMediaDuringOrientationChange?0:withTiming(1,{easing:Easing.linear,duration:75})};}";
    tangon['code'] = option;
    var _closure1_slot31 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: MediaViewer
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            romeon = argFoo;
            foxtra = _closure1_slot1;
            offset = _closure1_slot2;
            golfie = 21;
            entity = offset[golfie];
            tangon = undefined;
            zuuluu = foxtra.bind(tangon)(entity);
            entity = 22;
            entity = offset[entity];
            entity = foxtra.bind(tangon)(entity);
            oscard = entity.MEDIA_VIEWER;
            entity = new Array(1);
            entity[0] = oscard;
            entity = zuuluu.bind(tangon)(entity);
            oscard = entity.analyticsLocations;
            option = _closure1_slot4;
            zuuluu = option.useState;
            entity = true;
            zuuluu = zuuluu.bind(option)(entity);
            entity = _closure1_slot3;
            result = 2;
            entity = entity.bind(tangon)(zuuluu, result);
            verify = 0;
            backup = entity[verify];
            output = 1;
            whisks = entity[output];
            var _closure2_slot0 = whisks;
            yankee = romeon.swipeVelocityThreshold;
            option = romeon.onClose;
            zuuluu = romeon.syncer;
            entity = 14;
            entity = offset[entity];
            entity = foxtra.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            papara = entity.width;
            target = entity.height;
            var _closure2_slot1 = target;
            foxtra = _closure1_slot32;
            kiloes = zuuluu.sources;
            entity = romeon.initialIndex;
            entity = kiloes[entity];
            entity = foxtra.bind(tangon)(papara, target, entity);
            entity = entity.height;
            entity = target + entity;
            variable36 = entity / result;
            var _closure2_slot2 = variable36;
            foxtra = _closure1_slot0;
            ctrled = 6;
            entity = offset[ctrled];
            kiloes = foxtra.bind(tangon)(entity);
            entity = kiloes.useSharedValue;
            status = entity.bind(kiloes)(verify);
            var _closure2_slot3 = status;
            entity = 19;
            kiloes = offset[entity];
            sizing = foxtra.bind(tangon)(kiloes);
            kiloes = sizing.useOrientationSettling;
            source = kiloes.bind(sizing)();
            var _closure2_slot4 = source;
            offset = offset[ctrled];
            foxtra = foxtra.bind(tangon)(offset);
            offset = foxtra.useAnimatedRef;
            sequen = offset.bind(foxtra)();
            var _closure2_slot5 = sequen;
            kiloes = zuuluu.sources;
            sizing = zuuluu.index;
            zuuluu = zuuluu.sources;
            zuuluu = zuuluu.length;
            foxtra = zuuluu > output;
            var _closure2_slot6 = foxtra;
            echoed = _closure1_slot4;
            offset = echoed.useState;
            zuuluu = source;
            if(!zuuluu) { _fun00038_ip = 332; continue _fun00037 }
 329:
            zuuluu = foxtra;
 332:
            zuuluu = offset.bind(echoed)(zuuluu);
            offset = _closure1_slot3;
            zuuluu = offset.bind(tangon)(zuuluu, result);
            record = zuuluu[verify];
            var _closure2_slot7 = record;
            zuuluu = zuuluu[output];
            var _closure2_slot8 = zuuluu;
            update = _closure1_slot4;
            echoed = update.useEffect;
            result = new Array(2);
            result[0] = source;
            result[1] = foxtra;
            zuuluu = function() {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    zuuluu = _closure2_slot8;
                    michal = _closure2_slot4;
                    if(!michal) { _fun00040_ip = 18; continue _fun00039 }
 14:
                    michal = _closure2_slot6;
 18:
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            zuuluu = echoed.bind(update)(zuuluu, result);
            zuuluu = function(argFoo, argBar, argBaz) { // Original name: usePanGestureConfig
                kiloes = argFoo;
                option = argBar;
                zuuluu = argBaz;
                var _closure3_slot0 = kiloes;
                var _closure3_slot1 = option;
                var _closure3_slot2 = zuuluu;
                result = _closure1_slot0;
                echoed = _closure1_slot2;
                sizing = 6;
                tangon = echoed[sizing];
                output = undefined;
                report = result.bind(output)(tangon);
                tangon = report.useSharedValue;
                oscard = false;
                yankee = tangon.bind(report)(oscard);
                var _closure3_slot3 = yankee;
                tangon = echoed[sizing];
                report = result.bind(output)(tangon);
                tangon = report.useSharedValue;
                offset = tangon.bind(report)(oscard);
                var _closure3_slot4 = offset;
                tangon = echoed[sizing];
                report = result.bind(output)(tangon);
                tangon = report.useSharedValue;
                oscard = 0;
                verify = tangon.bind(report)(oscard);
                var _closure3_slot5 = verify;
                tangon = echoed[sizing];
                report = result.bind(output)(tangon);
                tangon = report.useSharedValue;
                romeon = tangon.bind(report)(oscard);
                var _closure3_slot6 = romeon;
                tangon = echoed[sizing];
                oscard = result.bind(output)(tangon);
                report = oscard.useSharedValue;
                tangon = {'y': 0, 'x': 0};
                oscard = report.bind(oscard)(tangon);
                var _closure3_slot7 = oscard;
                tangon = echoed[sizing];
                golfie = result.bind(output)(tangon);
                report = golfie.useSharedValue;
                tangon = true;
                report = report.bind(golfie)(tangon);
                var _closure3_slot8 = report;
                foxtra = _closure1_slot4;
                golfie = foxtra.useCallback;
                tangon = new Array(1);
                tangon[0] = zuuluu;
                zuuluu = function() {
                    _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 7;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.tryPauseCurrentVideo;
                        zuuluu = zuuluu.bind(tangon)();
                        report = _closure3_slot2;
                        tangon = null;
                        if(!(tangon != report)) { _fun00042_ip = 56; continue _fun00041 }
 48:
                        zuuluu = _closure3_slot2;
                        zuuluu = zuuluu.bind(entity)();
 56:
                        zuuluu = _closure1_slot0;
                        tangon = _closure1_slot2;
                        michal = 8;
                        michal = tangon[michal];
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.endMediaViewerSession;
                        michal = michal.bind(zuuluu)();
                        return entity;
                    }
                };
                backup = golfie.bind(foxtra)(zuuluu, tangon);
                var _closure3_slot9 = backup;
                foxtra = _closure1_slot4;
                golfie = foxtra.useCallback;
                tangon = function() { // Original name: l
                    _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                        zuuluu = _closure3_slot3;
                        michal = zuuluu.set;
                        entity = true;
                        entity = michal.bind(zuuluu)(entity);
                        michal = _closure3_slot6;
                        entity = michal.get;
                        michal = entity.bind(michal)();
                        entity = 0;
                        if(!(!(michal < entity))) { _fun00044_ip = 44; continue _fun00043 }
 38:
                        verify = _closure3_slot0;
                        _fun00044_ip = 51; continue _fun00043;
 44:
                        entity = _closure3_slot0;
                        verify = -entity;
 51:
                        tangon = _closure3_slot5;
                        zuuluu = tangon.set;
                        foxtra = _closure1_slot0;
                        backup = _closure1_slot2;
                        entity = 9;
                        report = backup[entity];
                        entity = undefined;
                        option = foxtra.bind(entity)(report);
                        golfie = option.withSpring;
                        oscard = {};
                        offset = _closure3_slot6;
                        report = offset.get;
                        report = report.bind(offset)();
                        oscard['velocity'] = report;
                        output = _closure1_slot13;
                        result = oscard;
                        report = copyDataProperties(result, output);
                        report = function() { // Original name: n
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 6;
                            michal = michal[entity];
                            entity = undefined;
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.runOnJS;
                            michal = _closure3_slot9;
                            michal = zuuluu.bind(tangon)(michal);
                            michal = michal.bind(entity)();
                            return entity;
                        };
                        offset = {};
                        romeon = 6;
                        romeon = backup[romeon];
                        romeon = foxtra.bind(entity)(romeon);
                        romeon = romeon.runOnJS;
                        offset['runOnJS'] = romeon;
                        yankee = _closure3_slot9;
                        offset['handleClose'] = yankee;
                        report['__closure'] = offset;
                        offset = 1456146983962.0;
                        report['__workletHash'] = offset;
                        michal = _closure1_slot15;
                        report['__initData'] = michal;
                        sizing = 'respect-motion-settings';
                        echoed = option;
                        result = verify;
                        output = oscard;
                        kiloes = report;
                        michal = echoed[golfie](result, output, sizing, kiloes, backup);
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    }
                };
                zuuluu = {};
                zuuluu['isClosing'] = yankee;
                zuuluu['velocity'] = romeon;
                zuuluu['closePosition'] = kiloes;
                zuuluu['translatePos'] = verify;
                update = 9;
                update = echoed[update];
                update = result.bind(output)(update);
                update = update.withSpring;
                zuuluu['withSpring'] = update;
                update = _closure1_slot13;
                zuuluu['SPRING_CONFIG'] = update;
                sizing = echoed[sizing];
                sizing = result.bind(output)(sizing);
                sizing = sizing.runOnJS;
                zuuluu['runOnJS'] = sizing;
                zuuluu['handleClose'] = backup;
                tangon['__closure'] = zuuluu;
                zuuluu = 15859110208332.0;
                tangon['__workletHash'] = zuuluu;
                zuuluu = _closure1_slot14;
                tangon['__initData'] = zuuluu;
                zuuluu = new Array(5);
                zuuluu[0] = kiloes;
                zuuluu[1] = backup;
                zuuluu[2] = yankee;
                zuuluu[3] = verify;
                zuuluu[4] = romeon;
                golfie = golfie.bind(foxtra)(tangon, zuuluu);
                var _closure3_slot10 = golfie;
                tangon = _closure1_slot4;
                zuuluu = tangon.useMemo;
                michal = new Array(8);
                michal[0] = romeon;
                michal[1] = yankee;
                michal[2] = offset;
                michal[3] = verify;
                michal[4] = option;
                michal[5] = golfie;
                michal[6] = oscard;
                michal[7] = report;
                entity = function() {
                    entity = {};
                    zuuluu = _closure3_slot6;
                    entity['velocity'] = zuuluu;
                    zuuluu = _closure3_slot3;
                    entity['isClosing'] = zuuluu;
                    zuuluu = _closure3_slot4;
                    entity['isInteracting'] = zuuluu;
                    zuuluu = _closure3_slot8;
                    entity['overlayEnabled'] = zuuluu;
                    zuuluu = _closure3_slot5;
                    entity['translatePos'] = zuuluu;
                    zuuluu = _closure3_slot1;
                    entity['swipeVelocityThreshold'] = zuuluu;
                    zuuluu = _closure3_slot10;
                    entity['dismiss'] = zuuluu;
                    michal = _closure3_slot7;
                    entity['start'] = michal;
                    return entity;
                };
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            cntext = zuuluu.bind(tangon)(variable36, yankee, option);
            echoed = cntext.dismiss;
            sierra = cntext.translatePos;
            var _closure2_slot9 = sierra;
            vacuum = cntext.isClosing;
            var _closure2_slot10 = vacuum;
            equals = cntext.isInteracting;
            var _closure2_slot11 = equals;
            result = cntext.overlayEnabled;
            var _closure2_slot12 = result;
            zuuluu = _closure1_slot6;
            limora = zuuluu.absoluteFillObject;
            var _closure2_slot13 = limora;
            zuuluu = _closure1_slot0;
            yankee = _closure1_slot2;
            option = yankee[ctrled];
            config = zuuluu.bind(tangon)(option);
            update = config.useAnimatedStyle;
            option = function() { // Original name: $
                entity = {};
                romeon = _closure2_slot13;
                foxtra = entity;
                zuuluu = copyDataProperties(foxtra, romeon);
                tangon = _closure2_slot1;
                zuuluu = 'height';
                entity[zuuluu] = tangon;
                tangon = 'black';
                zuuluu = 'backgroundColor';
                entity[zuuluu] = tangon;
                zuuluu = global;
                report = zuuluu.Math;
                tangon = report.min;
                oscard = _closure2_slot3;
                zuuluu = oscard.get;
                zuuluu = zuuluu.bind(oscard)();
                option = _closure1_slot0;
                golfie = _closure1_slot2;
                oscard = 6;
                golfie = golfie[oscard];
                oscard = undefined;
                verify = option.bind(oscard)(golfie);
                option = verify.interpolate;
                golfie = _closure2_slot9;
                oscard = golfie.get;
                golfie = oscard.bind(golfie)();
                michal = _closure2_slot2;
                offset = -michal;
                oscard = new Array(3);
                oscard[0] = offset;
                offset = 0;
                oscard[1] = offset;
                oscard[2] = michal;
                michal = [0, 1, 0];
                michal = option.bind(verify)(golfie, oscard, michal);
                zuuluu = tangon.bind(report)(zuuluu, michal);
                michal = 'opacity';
                entity[michal] = zuuluu;
                return entity;
            };
            quebec = {};
            quebec['absoluteFillObject'] = limora;
            quebec['windowHeight'] = target;
            quebec['entranceAnimationDriver'] = status;
            variable37 = yankee[ctrled];
            variable37 = zuuluu.bind(tangon)(variable37);
            variable37 = variable37.interpolate;
            quebec['interpolate'] = variable37;
            quebec['translatePos'] = sierra;
            quebec['closePosition'] = variable36;
            option['__closure'] = quebec;
            quebec = 9386609924598.0;
            option['__workletHash'] = quebec;
            quebec = _closure1_slot27;
            option['__initData'] = quebec;
            config = update.bind(config)(option);
            quebec = _closure1_slot4;
            update = quebec.useState;
            option = {};
            variable36 = _closure1_slot6;
            variable39 = variable36.absoluteFillObject;
            variable40 = option;
            variable36 = copyDataProperties(variable40, variable39);
            variable37 = 'transparent';
            variable36 = 'backgroundColor';
            option[variable36] = variable37;
            option = update.bind(quebec)(option);
            option = offset.bind(tangon)(option, output);
            update = option[verify];
            option = yankee[ctrled];
            offset = zuuluu.bind(tangon)(option);
            verify = offset.useAnimatedStyle;
            option = function() { // Original name: X
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    entity = {};
                    zuuluu = _closure2_slot10;
                    michal = zuuluu.get;
                    zuuluu = michal.bind(zuuluu)();
                    michal = 0;
                    if(zuuluu) { _fun00046_ip = 314; continue _fun00045 }
 26:
                    zuuluu = _closure2_slot4;
                    michal = 0;
                    if(zuuluu) { _fun00046_ip = 314; continue _fun00045 }
 38:
                    tangon = _closure2_slot12;
                    zuuluu = tangon.get;
                    zuuluu = zuuluu.bind(tangon)();
                    if(!zuuluu) { _fun00046_ip = 152; continue _fun00045 }
 54:
                    tangon = _closure2_slot11;
                    zuuluu = tangon.get;
                    zuuluu = zuuluu.bind(tangon)();
                    if(zuuluu) { _fun00046_ip = 152; continue _fun00045 }
 70:
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    zuuluu = 23;
                    zuuluu = offset[zuuluu];
                    golfie = undefined;
                    oscard = option.bind(golfie)(zuuluu);
                    report = oscard.withTiming;
                    tangon = {};
                    zuuluu = 6;
                    zuuluu = offset[zuuluu];
                    zuuluu = option.bind(golfie)(zuuluu);
                    zuuluu = zuuluu.Easing;
                    zuuluu = zuuluu.linear;
                    tangon['easing'] = zuuluu;
                    zuuluu = 150;
                    tangon['duration'] = zuuluu;
                    zuuluu = 1;
                    zuuluu = report.bind(oscard)(zuuluu, tangon);
                    _fun00046_ip = 311; continue _fun00045;
 152:
                    backup = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    report = 23;
                    report = kiloes[report];
                    foxtra = undefined;
                    option = backup.bind(foxtra)(report);
                    golfie = option.withTiming;
                    oscard = {};
                    romeon = 6;
                    report = kiloes[romeon];
                    report = backup.bind(foxtra)(report);
                    report = report.Easing;
                    report = report.linear;
                    oscard['easing'] = report;
                    report = 75;
                    oscard['duration'] = report;
                    report = function() { // Original name: t
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 6;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.runOnJS;
                        michal = _closure2_slot0;
                        zuuluu = zuuluu.bind(tangon)(michal);
                        michal = false;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    offset = {};
                    romeon = kiloes[romeon];
                    romeon = backup.bind(foxtra)(romeon);
                    romeon = romeon.runOnJS;
                    offset['runOnJS'] = romeon;
                    yankee = _closure2_slot0;
                    offset['setShowHeader'] = yankee;
                    report['__closure'] = offset;
                    offset = 17296819087216.0;
                    report['__workletHash'] = offset;
                    tangon = _closure1_slot29;
                    report['__initData'] = tangon;
                    output = 'respect-motion-settings';
                    update = option;
                    echoed = 0;
                    result = oscard;
                    sizing = report;
                    zuuluu = update[golfie](echoed, result, output, sizing, kiloes);
 311:
                    michal = zuuluu;
 314:
                    entity['opacity'] = michal;
                    return entity;
                }
            };
            output = {};
            output['isClosing'] = vacuum;
            output['isOrientationSettling'] = source;
            output['overlayEnabled'] = result;
            output['isInteracting'] = equals;
            vacuum = 23;
            source = yankee[vacuum];
            source = zuuluu.bind(tangon)(source);
            source = source.withTiming;
            output['withTiming'] = source;
            source = yankee[ctrled];
            source = zuuluu.bind(tangon)(source);
            source = source.Easing;
            output['Easing'] = source;
            source = yankee[ctrled];
            source = zuuluu.bind(tangon)(source);
            source = source.runOnJS;
            output['runOnJS'] = source;
            output['setShowHeader'] = whisks;
            option['__closure'] = output;
            output = 5516819508737.0;
            option['__workletHash'] = output;
            output = _closure1_slot28;
            option['__initData'] = output;
            output = verify.bind(offset)(option);
            option = yankee[ctrled];
            offset = zuuluu.bind(tangon)(option);
            verify = offset.useDerivedValue;
            option = function() { // Original name: q
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    zuuluu = _closure2_slot12;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    if(!michal) { _fun00048_ip = 35; continue _fun00047 }
 19:
                    tangon = _closure2_slot11;
                    zuuluu = tangon.get;
                    zuuluu = zuuluu.bind(tangon)();
                    michal = !zuuluu;
 35:
                    if(!michal) { _fun00048_ip = 84; continue _fun00047 }
 38:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 6;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    tangon = tangon.bind(zuuluu)(michal);
                    michal = tangon.runOnJS;
                    entity = _closure2_slot0;
                    michal = michal.bind(tangon)(entity);
                    entity = true;
                    entity = michal.bind(zuuluu)(entity);
 84:
                    entity = undefined;
                    return entity;
                }
            };
            source = {};
            source['overlayEnabled'] = result;
            source['isInteracting'] = equals;
            equals = yankee[ctrled];
            equals = zuuluu.bind(tangon)(equals);
            equals = equals.runOnJS;
            source['runOnJS'] = equals;
            source['setShowHeader'] = whisks;
            option['__closure'] = source;
            source = 15971851636339.0;
            option['__workletHash'] = source;
            source = _closure1_slot30;
            option['__initData'] = source;
            option = verify.bind(offset)(option);
            option = yankee[ctrled];
            offset = zuuluu.bind(tangon)(option);
            verify = offset.useAnimatedStyle;
            option = function() { // Original name: se
                _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                    entity = {};
                    offset = _closure2_slot13;
                    yankee = entity;
                    zuuluu = copyDataProperties(yankee, offset);
                    tangon = 'center';
                    zuuluu = 'alignItems';
                    entity[zuuluu] = tangon;
                    zuuluu = 'justifyContent';
                    entity[zuuluu] = tangon;
                    zuuluu = {};
                    report = _closure2_slot9;
                    tangon = report.get;
                    tangon = tangon.bind(report)();
                    zuuluu['translateY'] = tangon;
                    tangon = new Array(1);
                    tangon[0] = zuuluu;
                    zuuluu = 'transform';
                    entity[zuuluu] = tangon;
                    michal = _closure2_slot7;
                    zuuluu = 0;
                    if(michal) { _fun00050_ip = 161; continue _fun00049 }
 84:
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    michal = 23;
                    michal = verify[michal];
                    golfie = undefined;
                    oscard = option.bind(golfie)(michal);
                    report = oscard.withTiming;
                    tangon = {};
                    michal = 6;
                    michal = verify[michal];
                    michal = option.bind(golfie)(michal);
                    michal = michal.Easing;
                    michal = michal.linear;
                    tangon['easing'] = michal;
                    michal = 75;
                    tangon['duration'] = michal;
                    michal = 1;
                    zuuluu = report.bind(oscard)(michal, tangon);
 161:
                    michal = 'opacity';
                    entity[michal] = zuuluu;
                    return entity;
                }
            };
            source = {};
            source['absoluteFillObject'] = limora;
            source['translatePos'] = sierra;
            source['hideMediaDuringOrientationChange'] = record;
            vacuum = yankee[vacuum];
            vacuum = zuuluu.bind(tangon)(vacuum);
            vacuum = vacuum.withTiming;
            source['withTiming'] = vacuum;
            ctrled = yankee[ctrled];
            ctrled = zuuluu.bind(tangon)(ctrled);
            ctrled = ctrled.Easing;
            source['Easing'] = ctrled;
            option['__closure'] = source;
            source = 1652153907583.0;
            option['__workletHash'] = source;
            source = _closure1_slot31;
            option['__initData'] = source;
            vacuum = verify.bind(offset)(option);
            offset = _closure1_slot4;
            verify = offset.useCallback;
            option = new Array(2);
            option[0] = foxtra;
            option[1] = sequen;
            report = function(argFoo, argBar) {
                _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                    michal = _closure2_slot6;
                    if(!michal) { _fun00052_ip = 25; continue _fun00051 }
 10:
                    zuuluu = _closure2_slot5;
                    tangon = zuuluu.current;
                    zuuluu = null;
                    michal = zuuluu != tangon;
 25:
                    if(!michal) { _fun00052_ip = 61; continue _fun00051 }
 28:
                    zuuluu = _closure2_slot8;
                    entity = argFoo;
                    tangon = entity.orientation;
                    entity = argBar;
                    entity = entity.orientation;
                    michal = undefined;
                    entity = tangon !== entity;
                    entity = zuuluu.bind(michal)(entity);
 61:
                    michal = _closure1_slot11;
                    if(!michal) { _fun00052_ip = 103; continue _fun00051 }
 71:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 7;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    entity = michal.unpauseCurrentVideoIfNeeded;
                    entity = entity.bind(michal)();
 103:
                    entity = undefined;
                    return entity;
                }
            };
            report = verify.bind(offset)(report, option);
            entity = yankee[entity];
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.useOrientationListener;
            entity = entity.bind(zuuluu)(report);
            option = _closure1_slot10;
            report = _closure1_slot5;
            zuuluu = {};
            entity = _closure1_slot6;
            entity = entity.absoluteFill;
            zuuluu['style'] = entity;
            zuuluu['onAccessibilityEscape'] = echoed;
            foxtra = _closure1_slot9;
            offset = _closure1_slot1;
            entity = 24;
            entity = yankee[entity];
            verify = offset.bind(tangon)(entity);
            entity = {};
            source = 'light-content';
            entity['barStyle'] = source;
            source = !backup;
            entity['hidden'] = source;
            entity = foxtra.bind(tangon)(verify, entity);
            verify = new Array(6);
            verify[0] = entity;
            ctrled = _closure1_slot9;
            entity = 12;
            foxtra = yankee[entity];
            source = offset.bind(tangon)(foxtra);
            foxtra = {};
            foxtra['style'] = config;
            foxtra = ctrled.bind(tangon)(source, foxtra);
            verify[1] = foxtra;
            ctrled = _closure1_slot9;
            foxtra = yankee[entity];
            source = offset.bind(tangon)(foxtra);
            foxtra = {};
            foxtra['ref'] = sequen;
            foxtra['style'] = vacuum;
            config = _closure1_slot9;
            sequen = _closure1_slot26;
            vacuum = {};
            variable40 = vacuum;
            variable39 = romeon;
            record = copyDataProperties(variable40, variable39);
            record = 'entranceAnimationDriver';
            vacuum[record] = status;
            record = 'windowHeight';
            vacuum[record] = target;
            record = 'windowWidth';
            vacuum[record] = papara;
            record = 'panGestureConfig';
            vacuum[record] = cntext;
            vacuum = config.bind(tangon)(sequen, vacuum);
            foxtra['children'] = vacuum;
            foxtra = ctrled.bind(tangon)(source, foxtra);
            verify[2] = foxtra;
            foxtra = _closure1_slot9;
            entity = yankee[entity];
            yankee = offset.bind(tangon)(entity);
            entity = {};
            offset = new Array(2);
            offset[0] = update;
            offset[1] = output;
            entity['style'] = offset;
            offset = 'none';
            if(!backup) { _fun00038_ip = 1311; continue _fun00037 }
 1305:
            offset = 'box-none';
 1311:
            entity['pointerEvents'] = offset;
            backup = romeon.renderOverlay;
            offset = null;
            output = offset == backup;
            backup = undefined;
            if(output) { _fun00038_ip = 1345; continue _fun00037 }
 1333:
            output = romeon.renderOverlay;
            backup = output.bind(romeon)(echoed, result);
 1345:
            entity['children'] = backup;
            entity = foxtra.bind(tangon)(yankee, entity);
            verify[3] = entity;
            entity = romeon.renderRemixingView;
            offset = offset == entity;
            entity = undefined;
            if(offset) { _fun00038_ip = 1429; continue _fun00037 }
 1374:
            yankee = romeon.renderRemixingView;
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 5;
            offset = backup[offset];
            backup = foxtra.bind(tangon)(offset);
            foxtra = backup.flattenSource;
            offset = sizing.get;
            offset = offset.bind(sizing)();
            offset = kiloes[offset];
            offset = foxtra.bind(backup)(offset);
            entity = yankee.bind(romeon)(offset);
 1429:
            verify[4] = entity;
            romeon = _closure1_slot9;
            yankee = _closure1_slot1;
            entity = _closure1_slot2;
            offset = 25;
            offset = entity[offset];
            yankee = yankee.bind(tangon)(offset);
            offset = {};
            offset = romeon.bind(tangon)(yankee, offset);
            verify[5] = offset;
            zuuluu['children'] = verify;
            report = option.bind(tangon)(report, zuuluu);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot0;
            entity = entity[golfie];
            entity = michal.bind(tangon)(entity);
            michal = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 26;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media_viewer/native/components/MediaViewer.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();