// app/modules/video_calls/native/components/PopoutMenu.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    foxtra = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtra;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: PopoutMenuRow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            foxtra = michal.icon;
            offset = michal.text;
            verify = michal.onClick;
            var _closure2_slot0 = verify;
            option = michal.onClose;
            var _closure2_slot1 = option;
            michal = _closure1_slot10;
            tangon = undefined;
            oscard = michal.bind(tangon)();
            report = _closure1_slot4;
            zuuluu = report.useCallback;
            michal = new Array(2);
            michal[0] = verify;
            michal[1] = option;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot0;
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00004_ip = 23; continue _fun00003 }
 13:
                    tangon = _closure2_slot0;
                    michal = undefined;
                    michal = tangon.bind(michal)();
 23:
                    michal = _closure2_slot1;
                    if(!(zuuluu != michal)) { _fun00004_ip = 41; continue _fun00003 }
 31:
                    michal = _closure2_slot1;
                    entity = undefined;
                    entity = michal.bind(entity)();
 41:
                    entity = undefined;
                    return entity;
                }
            };
            report = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot7;
            michal = _closure1_slot1;
            option = _closure1_slot2;
            entity = 7;
            entity = option[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            option = null;
            verify = option != foxtra;
            if(!verify) { _fun00002_ip = 151; continue _fun00001 }
 115:
            romeon = _closure1_slot7;
            yankee = _closure1_slot1;
            backup = _closure1_slot2;
            verify = 8;
            verify = backup[verify];
            yankee = yankee.bind(tangon)(verify);
            verify = {};
            verify['source'] = foxtra;
            option = romeon.bind(tangon)(yankee, verify);
 151:
            entity['leading'] = option;
            verify = _closure1_slot7;
            option = _closure1_slot0;
            yankee = _closure1_slot2;
            golfie = 9;
            golfie = yankee[golfie];
            golfie = option.bind(tangon)(golfie);
            option = golfie.FormLabel;
            golfie = {};
            yankee = oscard.popoutMenuRowLabel;
            golfie['style'] = yankee;
            golfie['text'] = offset;
            golfie = verify.bind(tangon)(option, golfie);
            entity['label'] = golfie;
            oscard = oscard.popoutMenuRow;
            entity['style'] = oscard;
            entity['onPress'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    yankee = 1;
    golfie = oscard[yankee];
    tangon = argCor;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.jsx;
    var _closure1_slot7 = option;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.jsxs;
    var _closure1_slot8 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Fragment;
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {};
    romeon = 'absolute';
    offset['position'] = romeon;
    romeon = 6;
    backup = oscard[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_TERTIARY;
    offset['backgroundColor'] = backup;
    romeon = oscard[romeon];
    romeon = foxtra.bind(entity)(romeon);
    romeon = romeon.radii;
    romeon = romeon.sm;
    offset['borderRadius'] = romeon;
    tangon['container'] = offset;
    offset = {};
    offset['flex'] = yankee;
    tangon['popoutMenuRow'] = offset;
    offset = {};
    yankee = '100%';
    offset['width'] = yankee;
    tangon['popoutMenuRowLabel'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot10 = tangon;
    tangon = {};
    option = "function PopoutMenuTsx1(){const{withTiming,animateIn,STANDARD_EASING,ANIMATION_DURATION,runOnJS,handleClose,EXTRA_PADDING}=this.__closure;return{opacity:withTiming(animateIn?1:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION},'respect-motion-settings',function(finished){if(finished){runOnJS(handleClose)();}}),transform:[{translateY:withTiming(animateIn?-EXTRA_PADDING:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION})}]};}";
    tangon['code'] = option;
    var _closure1_slot11 = tangon;
    tangon = {};
    option = 'function PopoutMenuTsx2(finished){const{runOnJS,handleClose}=this.__closure;if(finished){runOnJS(handleClose)();}}';
    tangon['code'] = option;
    var _closure1_slot12 = tangon;
    tangon = {};
    option = 'function PopoutMenuTsx3(){const{runOnJS,_setClose}=this.__closure;runOnJS(_setClose)(true);}';
    tangon['code'] = option;
    var _closure1_slot13 = tangon;
    tangon = {};
    option = 'function PopoutMenuTsx4(){const{runOnJS,handleLongPress}=this.__closure;runOnJS(handleLongPress)();}';
    tangon['code'] = option;
    var _closure1_slot14 = tangon;
    tangon = golfie.forwardRef;
    michal = function(argFoo, argBar) { // Original name: PopoutMenu
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.disabled;
            sizing = zuuluu.title;
            config = zuuluu.trigger;
            backup = zuuluu.rows;
            result = zuuluu.style;
            entity = zuuluu.onOpen;
            var _closure2_slot0 = entity;
            zuuluu = zuuluu.onClose;
            var _closure2_slot1 = zuuluu;
            report = undefined;
            var _closure2_slot17 = report;
            var _closure2_slot18 = report;
            var _closure2_slot19 = report;
            var _closure2_slot20 = report;
            tangon = _closure1_slot10;
            yankee = tangon.bind(report)();
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 10;
            tangon = option[tangon];
            verify = oscard.bind(report)(tangon);
            golfie = verify.useStateFromStoresArray;
            tangon = _closure1_slot6;
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = function() {
                zuuluu = _closure1_slot6;
                entity = zuuluu.getWidth;
                michal = entity.bind(zuuluu)();
                entity = new Array(2);
                entity[0] = michal;
                michal = zuuluu.getHeight;
                michal = michal.bind(zuuluu)();
                entity[1] = michal;
                return entity;
            };
            tangon = golfie.bind(verify)(oscard, tangon);
            papara = _closure1_slot3;
            ctrled = 2;
            tangon = papara.bind(report)(tangon, ctrled);
            oscard = 0;
            vacuum = tangon[oscard];
            var _closure2_slot2 = vacuum;
            update = 1;
            sequen = tangon[update];
            var _closure2_slot3 = sequen;
            golfie = _closure1_slot1;
            tangon = 11;
            tangon = option[tangon];
            tangon = golfie.bind(report)(tangon);
            tangon = tangon.bind(report)();
            cntext = tangon.bottom;
            var _closure2_slot4 = cntext;
            golfie = _closure1_slot4;
            tangon = golfie.useState;
            tangon = tangon.bind(golfie)(oscard);
            golfie = papara.bind(report)(tangon, ctrled);
            tangon = golfie[oscard];
            golfie = golfie[update];
            var _closure2_slot5 = golfie;
            verify = _closure1_slot4;
            option = verify.useState;
            output = false;
            option = option.bind(verify)(output);
            option = papara.bind(report)(option, ctrled);
            verify = option[oscard];
            var _closure2_slot6 = verify;
            offset = option[update];
            var _closure2_slot7 = offset;
            foxtra = _closure1_slot4;
            option = foxtra.useState;
            option = option.bind(foxtra)(output);
            foxtra = papara.bind(report)(option, ctrled);
            option = foxtra[oscard];
            var _closure2_slot8 = option;
            foxtra = foxtra[update];
            var _closure2_slot9 = foxtra;
            echoed = _closure1_slot4;
            output = echoed.useRef;
            foxtra = null;
            record = output.bind(echoed)(foxtra);
            var _closure2_slot10 = record;
            echoed = _closure1_slot4;
            output = echoed.useRef;
            source = output.bind(echoed)(foxtra);
            var _closure2_slot11 = source;
            target = _closure1_slot4;
            echoed = target.useState;
            output = {'top': 0, 'left': 0, 'width': 0, 'height': 0};
            output = echoed.bind(target)(output);
            echoed = papara.bind(report)(output, ctrled);
            output = echoed[oscard];
            var _closure2_slot12 = output;
            echoed = echoed[update];
            var _closure2_slot13 = echoed;
            status = _closure1_slot4;
            target = status.useState;
            echoed = {'width': 0, 'height': 0};
            echoed = target.bind(status)(echoed);
            echoed = papara.bind(report)(echoed, ctrled);
            papara = echoed[oscard];
            var _closure2_slot14 = papara;
            echoed = echoed[update];
            var _closure2_slot15 = echoed;
            target = _closure1_slot4;
            ctrled = target.useEffect;
            update = new Array(1);
            update[0] = option;
            echoed = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot8;
                    if(!michal) { _fun00008_ip = 40; continue _fun00007 }
 12:
                    zuuluu = _closure2_slot10;
                    report = null;
                    oscard = report == zuuluu;
                    zuuluu = undefined;
                    if(oscard) { _fun00008_ip = 36; continue _fun00007 }
 27:
                    oscard = _closure2_slot10;
                    zuuluu = oscard.current;
 36:
                    michal = report != zuuluu;
 40:
                    if(!michal) { _fun00008_ip = 113; continue _fun00007 }
 43:
                    michal = _closure2_slot10;
                    oscard = null;
                    michal = oscard == michal;
                    zuuluu = undefined;
                    report = undefined;
                    if(michal) { _fun00008_ip = 76; continue _fun00007 }
 60:
                    tangon = _closure2_slot10;
                    tangon = tangon.current;
                    michal = oscard == tangon;
                    report = tangon;
 76:
                    if(michal) { _fun00008_ip = 95; continue _fun00007 }
 79:
                    tangon = report.measureInWindow;
                    michal = function(argFoo, argBar, argBaz, argCor) {
                        zuuluu = _closure2_slot13;
                        michal = {};
                        entity = global;
                        oscard = entity.Math;
                        report = oscard.max;
                        tangon = argBar;
                        entity = 0;
                        entity = report.bind(oscard)(tangon, entity);
                        michal['top'] = entity;
                        entity = argFoo;
                        michal['left'] = entity;
                        entity = argBaz;
                        michal['width'] = entity;
                        entity = argCor;
                        michal['height'] = entity;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    michal = tangon.bind(report)(michal);
 95:
                    michal = global;
                    michal = michal.setTimeout;
                    entity = function() {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            entity = _closure2_slot11;
                            report = null;
                            michal = report == entity;
                            entity = undefined;
                            tangon = undefined;
                            if(michal) { _fun00010_ip = 36; continue _fun00009 }
 20:
                            zuuluu = _closure2_slot11;
                            zuuluu = zuuluu.current;
                            michal = report == zuuluu;
                            tangon = zuuluu;
 36:
                            if(michal) { _fun00010_ip = 57; continue _fun00009 }
 39:
                            zuuluu = tangon.measureInWindow;
                            michal = function(argFoo, argBar, argBaz, argCor) {
                                zuuluu = _closure2_slot15;
                                michal = {};
                                entity = argBaz;
                                michal['width'] = entity;
                                entity = argCor;
                                michal['height'] = entity;
                                entity = undefined;
                                michal = zuuluu.bind(entity)(michal);
                                return entity;
                            };
                            michal = zuuluu.bind(tangon)(michal);
 57:
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
 113:
                    entity = undefined;
                    return entity;
                }
            };
            echoed = ctrled.bind(target)(echoed, update);
            ctrled = _closure1_slot4;
            update = ctrled.useMemo;
            echoed = new Array(5);
            echoed[0] = papara;
            echoed[1] = cntext;
            echoed[2] = sequen;
            echoed[3] = vacuum;
            echoed[4] = output;
            output = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = _closure2_slot14;
                    zuuluu = michal.height;
                    zuuluu = -zuuluu;
                    tangon = _closure2_slot12;
                    report = tangon.top;
                    tangon = tangon.height;
                    tangon = report + tangon;
                    michal = michal.height;
                    michal = tangon + michal;
                    tangon = 8;
                    report = michal + tangon;
                    michal = _closure2_slot4;
                    report = report + michal;
                    michal = _closure2_slot3;
                    if(!(report < michal)) { _fun00012_ip = 81; continue _fun00011 }
 65:
                    michal = _closure2_slot12;
                    report = michal.height;
                    michal = 16;
                    zuuluu = report + michal;
 81:
                    michal = _closure2_slot12;
                    report = michal.left;
                    michal = _closure2_slot14;
                    michal = michal.width;
                    michal = report + michal;
                    tangon = michal + tangon;
                    michal = _closure2_slot2;
                    tangon = tangon > michal;
                    michal = 0;
                    if(!tangon) { _fun00012_ip = 142; continue _fun00011 }
 120:
                    tangon = _closure2_slot12;
                    tangon = tangon.width;
                    entity = _closure2_slot14;
                    entity = entity.width;
                    michal = tangon - entity;
 142:
                    entity = {};
                    entity['top'] = zuuluu;
                    entity['left'] = michal;
                    return entity;
                }
            };
            output = update.bind(ctrled)(output, echoed);
            echoed = output.top;
            update = output.left;
            sequen = _closure1_slot4;
            vacuum = sequen.useImperativeHandle;
            ctrled = new Array(1);
            ctrled[0] = offset;
            output = argBar;
            offset = function() {
                entity = {};
                michal = function() { // Original name: close
                    zuuluu = _closure2_slot7;
                    entity = undefined;
                    michal = true;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity['close'] = michal;
                return entity;
            };
            offset = vacuum.bind(sequen)(output, offset, ctrled);
            ctrled = _closure1_slot4;
            output = ctrled.useMemo;
            offset = new Array(1);
            offset[0] = golfie;
            golfie = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 12;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.debounce;
                michal = function(argFoo) {
                    zuuluu = _closure2_slot5;
                    entity = undefined;
                    michal = argFoo;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity = 16;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            golfie = output.bind(ctrled)(golfie, offset);
            var _closure2_slot16 = golfie;
            vacuum = tangon > oscard;
            if(!vacuum) { _fun00006_ip = 590; continue _fun00005 }
 587:
            vacuum = !verify;
 590:
            _closure2_slot17 = vacuum;
            golfie = _closure1_slot4;
            oscard = golfie.useCallback;
            tangon = new Array(2);
            tangon[0] = verify;
            tangon[1] = zuuluu;
            zuuluu = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = _closure2_slot6;
                    if(!michal) { _fun00014_ip = 31; continue _fun00013 }
 10:
                    michal = _closure2_slot1;
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)();
                    michal = _closure2_slot9;
                    entity = false;
                    entity = michal.bind(zuuluu)(entity);
 31:
                    entity = undefined;
                    return entity;
                }
            };
            verify = oscard.bind(golfie)(zuuluu, tangon);
            _closure2_slot18 = verify;
            output = _closure1_slot0;
            offset = _closure1_slot2;
            ctrled = 13;
            zuuluu = offset[ctrled];
            oscard = output.bind(report)(zuuluu);
            tangon = oscard.useAnimatedStyle;
            zuuluu = function() { // Original name: ue
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = {};
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    verify = 14;
                    michal = michal[verify];
                    offset = undefined;
                    sizing = zuuluu.bind(offset)(michal);
                    kiloes = sizing.withTiming;
                    zuuluu = _closure2_slot17;
                    backup = 0;
                    if(!zuuluu) { _fun00016_ip = 47; continue _fun00015 }
 44:
                    backup = 1;
 47:
                    foxtra = {};
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    yankee = 15;
                    zuuluu = tangon[yankee];
                    zuuluu = report.bind(offset)(zuuluu);
                    zuuluu = zuuluu.STANDARD_EASING;
                    foxtra['easing'] = zuuluu;
                    golfie = 250;
                    foxtra['duration'] = golfie;
                    romeon = function(argFoo) { // Original name: n
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            entity = argFoo;
                            if(!entity) { _fun00018_ip = 52; continue _fun00017 }
 6:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 13;
                            entity = michal[entity];
                            michal = undefined;
                            tangon = zuuluu.bind(michal)(entity);
                            zuuluu = tangon.runOnJS;
                            entity = _closure2_slot18;
                            entity = zuuluu.bind(tangon)(entity);
                            entity = entity.bind(michal)();
 52:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zuuluu = {};
                    output = 13;
                    output = tangon[output];
                    output = report.bind(offset)(output);
                    output = output.runOnJS;
                    zuuluu['runOnJS'] = output;
                    output = _closure2_slot18;
                    zuuluu['handleClose'] = output;
                    romeon['__closure'] = zuuluu;
                    zuuluu = 7805688342878.0;
                    romeon['__workletHash'] = zuuluu;
                    zuuluu = _closure1_slot12;
                    romeon['__initData'] = zuuluu;
                    echoed = 'respect-motion-settings';
                    ctrled = sizing;
                    source = backup;
                    update = foxtra;
                    result = romeon;
                    zuuluu = ctrled[kiloes](source, update, echoed, result, output);
                    entity['opacity'] = zuuluu;
                    zuuluu = {};
                    tangon = tangon[verify];
                    report = report.bind(offset)(tangon);
                    tangon = report.withTiming;
                    michal = _closure2_slot17;
                    oscard = 0;
                    if(!michal) { _fun00016_ip = 215; continue _fun00015 }
 209:
                    oscard = -8;
 215:
                    michal = {};
                    verify = _closure1_slot0;
                    option = _closure1_slot2;
                    option = option[yankee];
                    option = verify.bind(offset)(option);
                    option = option.STANDARD_EASING;
                    michal['easing'] = option;
                    michal['duration'] = golfie;
                    michal = tangon.bind(report)(oscard, michal);
                    zuuluu['translateY'] = michal;
                    michal = new Array(1);
                    michal[0] = zuuluu;
                    entity['transform'] = michal;
                    return entity;
                }
            };
            golfie = {};
            sequen = 14;
            sequen = offset[sequen];
            sequen = output.bind(report)(sequen);
            sequen = sequen.withTiming;
            golfie['withTiming'] = sequen;
            golfie['animateIn'] = vacuum;
            vacuum = 15;
            vacuum = offset[vacuum];
            vacuum = output.bind(report)(vacuum);
            vacuum = vacuum.STANDARD_EASING;
            golfie['STANDARD_EASING'] = vacuum;
            vacuum = 250;
            golfie['ANIMATION_DURATION'] = vacuum;
            offset = offset[ctrled];
            offset = output.bind(report)(offset);
            offset = offset.runOnJS;
            golfie['runOnJS'] = offset;
            golfie['handleClose'] = verify;
            verify = 8;
            golfie['EXTRA_PADDING'] = verify;
            zuuluu['__closure'] = golfie;
            golfie = 2727321893876.0;
            zuuluu['__workletHash'] = golfie;
            golfie = _closure1_slot11;
            zuuluu['__initData'] = golfie;
            output = tangon.bind(oscard)(zuuluu);
            golfie = _closure1_slot4;
            oscard = golfie.useCallback;
            tangon = function() {
                zuuluu = _closure2_slot7;
                michal = undefined;
                entity = true;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            zuuluu = new Array(0);
            zuuluu = oscard.bind(golfie)(tangon, zuuluu);
            _closure2_slot19 = zuuluu;
            oscard = _closure1_slot4;
            tangon = oscard.useCallback;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                tangon = _closure2_slot7;
                entity = undefined;
                zuuluu = false;
                zuuluu = tangon.bind(entity)(zuuluu);
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                zuuluu = 16;
                zuuluu = report[zuuluu];
                report = tangon.bind(entity)(zuuluu);
                tangon = report.trigger;
                zuuluu = 'impactHeavy';
                zuuluu = tangon.bind(report)(zuuluu);
                tangon = _closure2_slot9;
                zuuluu = true;
                zuuluu = tangon.bind(entity)(zuuluu);
                michal = _closure2_slot0;
                michal = michal.bind(entity)();
                return entity;
            };
            entity = tangon.bind(oscard)(entity, zuuluu);
            _closure2_slot20 = entity;
            oscard = _closure1_slot4;
            tangon = oscard.useMemo;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                michal = 17;
                michal = offset[michal];
                option = undefined;
                michal = verify.bind(option)(michal);
                zuuluu = michal.Gesture;
                michal = zuuluu.LongPress;
                report = michal.bind(zuuluu)();
                zuuluu = report.onBegin;
                michal = function() { // Original name: t
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 13;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.runOnJS;
                    michal = _closure2_slot7;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = true;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                yankee = {};
                golfie = 13;
                oscard = offset[golfie];
                oscard = verify.bind(option)(oscard);
                oscard = oscard.runOnJS;
                yankee['runOnJS'] = oscard;
                romeon = _closure2_slot7;
                yankee['_setClose'] = romeon;
                michal['__closure'] = yankee;
                yankee = 293965298945.0;
                michal['__workletHash'] = yankee;
                yankee = _closure1_slot13;
                michal['__initData'] = yankee;
                zuuluu = zuuluu.bind(report)(michal);
                michal = zuuluu.onStart;
                entity = function() { // Original name: n
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 13;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.runOnJS;
                    michal = _closure2_slot20;
                    michal = zuuluu.bind(tangon)(michal);
                    michal = michal.bind(entity)();
                    return entity;
                };
                report = {};
                golfie = offset[golfie];
                golfie = verify.bind(option)(golfie);
                golfie = golfie.runOnJS;
                report['runOnJS'] = golfie;
                oscard = _closure2_slot20;
                report['handleLongPress'] = oscard;
                entity['__closure'] = report;
                report = 4560686489392.0;
                entity['__workletHash'] = report;
                tangon = _closure1_slot14;
                entity['__initData'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            offset = tangon.bind(oscard)(entity, zuuluu);
            entity = config;
            if(michal) { _fun00006_ip = 1198; continue _fun00005 }
 889:
            tangon = _closure1_slot8;
            zuuluu = _closure1_slot9;
            michal = {};
            verify = _closure1_slot7;
            golfie = _closure1_slot0;
            vacuum = _closure1_slot2;
            oscard = 17;
            oscard = vacuum[oscard];
            oscard = golfie.bind(report)(oscard);
            golfie = oscard.GestureDetector;
            oscard = {};
            oscard['gesture'] = offset;
            sequen = _closure1_slot7;
            vacuum = _closure1_slot5;
            offset = {};
            offset['ref'] = record;
            offset['children'] = config;
            offset = sequen.bind(report)(vacuum, offset);
            oscard['children'] = offset;
            golfie = verify.bind(report)(golfie, oscard);
            oscard = new Array(2);
            oscard[0] = golfie;
            golfie = null;
            if(!option) { _fun00006_ip = 1184; continue _fun00005 }
 986:
            offset = _closure1_slot8;
            verify = _closure1_slot1;
            option = _closure1_slot2;
            option = option[ctrled];
            option = verify.bind(report)(option);
            verify = option.View;
            option = {};
            option['ref'] = source;
            source = yankee.container;
            yankee = new Array(4);
            yankee[0] = source;
            yankee[1] = result;
            result = {};
            result['left'] = update;
            result['top'] = echoed;
            yankee[2] = result;
            yankee[3] = output;
            option['style'] = yankee;
            yankee = function(argFoo) { // Original name: onLayout
                zuuluu = _closure2_slot16;
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.layout;
                michal = entity.height;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            option['onLayout'] = yankee;
            yankee = foxtra != sizing;
            output = null;
            if(!yankee) { _fun00006_ip = 1096; continue _fun00005 }
 1076:
            echoed = _closure1_slot7;
            result = _closure1_slot15;
            yankee = {};
            yankee['text'] = sizing;
            output = echoed.bind(report)(result, yankee);
 1096:
            yankee = new Array(3);
            yankee[0] = output;
            sizing = foxtra != sizing;
            foxtra = null;
            if(!sizing) { _fun00006_ip = 1151; continue _fun00005 }
 1113:
            output = _closure1_slot7;
            sizing = _closure1_slot0;
            result = _closure1_slot2;
            kiloes = 9;
            kiloes = result[kiloes];
            kiloes = sizing.bind(report)(kiloes);
            sizing = kiloes.FormDivider;
            kiloes = {};
            foxtra = output.bind(report)(sizing, kiloes);
 1151:
            yankee[1] = foxtra;
            foxtra = backup.map;
            romeon = function(argFoo, argBar) {
                report = _closure1_slot7;
                tangon = _closure1_slot15;
                zuuluu = {};
                golfie = argFoo;
                option = zuuluu;
                entity = copyDataProperties(option, golfie);
                michal = _closure2_slot19;
                entity = 'onClose';
                zuuluu[entity] = michal;
                michal = undefined;
                entity = argBar;
                entity = report.bind(michal)(tangon, zuuluu, entity);
                return entity;
            };
            romeon = foxtra.bind(backup)(romeon);
            yankee[2] = romeon;
            option['children'] = yankee;
            golfie = offset.bind(report)(verify, option);
 1184:
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 1198:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 18;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/video_calls/native/components/PopoutMenu.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();