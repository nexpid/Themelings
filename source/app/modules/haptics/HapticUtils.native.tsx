// app/modules/haptics/HapticUtils.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    report = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = report;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: getAndroidLightImpactEffect
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = global;
            zuuluu = entity.parseInt;
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 3;
            entity = michal[entity];
            michal = undefined;
            tangon = tangon.bind(michal)(entity);
            entity = tangon.getSystemVersion;
            entity = entity.bind(tangon)();
            michal = zuuluu.bind(michal)(entity);
            entity = 29;
            michal = michal < entity;
            entity = 'effectTick';
            if(!michal) { _fun00002_ip = 70; continue _fun00001 }
 64:
            entity = 'impactLight';
 70:
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 4;
    tangon = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(tangon);
    golfie = option.fileFinishedImporting;
    tangon = 'modules/haptics/HapticUtils.native.tsx';
    tangon = golfie.bind(option)(tangon);
    tangon = 0;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    zuuluu['HapticFeedbackTypes'] = tangon;
    michal = function(argFoo) { // Original name: triggerHapticFeedback
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot1;
            entity = _closure1_slot2;
            oscard = 0;
            michal = entity[oscard];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            michal = michal.IMPACT_LIGHT;
            if(!(michal !== zuuluu)) { _fun00004_ip = 608; continue _fun00003 }
 40:
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = tangon.bind(entity)(michal);
            michal = michal.IMPACT_MEDIUM;
            if(!(michal !== zuuluu)) { _fun00004_ip = 533; continue _fun00003 }
 70:
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = tangon.bind(entity)(michal);
            michal = michal.IMPACT_HEAVY;
            if(!(michal !== zuuluu)) { _fun00004_ip = 491; continue _fun00003 }
 100:
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = tangon.bind(entity)(michal);
            michal = michal.NOTIFICATION_ERROR;
            if(!(michal !== zuuluu)) { _fun00004_ip = 449; continue _fun00003 }
 130:
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = tangon.bind(entity)(michal);
            michal = michal.DRAG_AND_DROP_START;
            if(!(michal !== zuuluu)) { _fun00004_ip = 373; continue _fun00003 }
 160:
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = tangon.bind(entity)(michal);
            michal = michal.DRAG_AND_DROP_END;
            if(!(michal !== zuuluu)) { _fun00004_ip = 295; continue _fun00003 }
 187:
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = tangon.bind(entity)(michal);
            michal = michal.DRAG_AND_DROP_MOVE;
            if(!(michal === zuuluu)) { _fun00004_ip = 679; continue _fun00003 }
 217:
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 1;
            michal = golfie[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.trigger;
            oscard = _closure1_slot0;
            michal = 2;
            michal = golfie[michal];
            oscard = oscard.bind(entity)(michal);
            michal = oscard.isAndroid;
            oscard = michal.bind(oscard)();
            michal = 'impactMedium';
            if(!oscard) { _fun00004_ip = 285; continue _fun00003 }
 277:
            oscard = _closure1_slot3;
            michal = oscard.bind(entity)();
 285:
            michal = zuuluu.bind(tangon)(michal);
            _fun00004_ip = 679; continue _fun00003;
 295:
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 1;
            michal = golfie[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.trigger;
            oscard = _closure1_slot0;
            michal = 2;
            michal = golfie[michal];
            oscard = oscard.bind(entity)(michal);
            michal = oscard.isAndroid;
            oscard = michal.bind(oscard)();
            michal = 'notificationSuccess';
            if(!oscard) { _fun00004_ip = 363; continue _fun00003 }
 355:
            oscard = _closure1_slot3;
            michal = oscard.bind(entity)();
 363:
            michal = zuuluu.bind(tangon)(michal);
            _fun00004_ip = 679; continue _fun00003;
 373:
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 1;
            michal = golfie[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.trigger;
            oscard = _closure1_slot0;
            michal = 2;
            michal = golfie[michal];
            oscard = oscard.bind(entity)(michal);
            michal = oscard.isAndroid;
            oscard = michal.bind(oscard)();
            michal = 'impactHeavy';
            if(!oscard) { _fun00004_ip = 439; continue _fun00003 }
 433:
            michal = 'impactMedium';
 439:
            michal = zuuluu.bind(tangon)(michal);
            _fun00004_ip = 679; continue _fun00003;
 449:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 1;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.trigger;
            michal = 'notificationError';
            michal = zuuluu.bind(tangon)(michal);
            _fun00004_ip = 679; continue _fun00003;
 491:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 1;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.trigger;
            michal = 'impactHeavy';
            michal = zuuluu.bind(tangon)(michal);
            _fun00004_ip = 679; continue _fun00003;
 533:
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 1;
            michal = golfie[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.trigger;
            oscard = _closure1_slot0;
            michal = 2;
            michal = golfie[michal];
            oscard = oscard.bind(entity)(michal);
            michal = oscard.isAndroid;
            oscard = michal.bind(oscard)();
            michal = 'impactMedium';
            if(!oscard) { _fun00004_ip = 601; continue _fun00003 }
 593:
            oscard = _closure1_slot3;
            michal = oscard.bind(entity)();
 601:
            michal = zuuluu.bind(tangon)(michal);
            _fun00004_ip = 679; continue _fun00003;
 608:
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 1;
            michal = golfie[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.trigger;
            oscard = _closure1_slot0;
            michal = 2;
            michal = golfie[michal];
            oscard = oscard.bind(entity)(michal);
            michal = oscard.isAndroid;
            oscard = michal.bind(oscard)();
            michal = 'selection';
            if(!oscard) { _fun00004_ip = 674; continue _fun00003 }
 666:
            report = _closure1_slot3;
            michal = report.bind(entity)();
 674:
            michal = zuuluu.bind(tangon)(michal);
 679:
            return entity;
        }
    };
    zuuluu['triggerHapticFeedback'] = michal;
    return entity;
})();