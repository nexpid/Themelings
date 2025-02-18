// app/modules/video_calls/native/VoiceCallOverlayUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    verify = tangon.MIN_MARGIN_BETWEEN_OVERLAYS;
    var _closure1_slot2 = verify;
    yankee = tangon.VoiceCallOverlayType;
    var _closure1_slot3 = yankee;
    tangon = {};
    report = 'function VoiceCallOverlayUtilsTsx1(rectA,rectB,minMarginBetweenOverlays){if(rectA==null||rectA.x==null||rectA.y==null||rectA.width==null||rectA.height==null||rectB==null||rectB.x==null||rectB.y==null||rectB.width==null||rectB.height==null){return false;}const minAx=rectA.x-minMarginBetweenOverlays;const maxAx=rectA.x+rectA.width+minMarginBetweenOverlays;const minAy=rectA.y-minMarginBetweenOverlays;const maxAy=rectA.y+rectA.height+minMarginBetweenOverlays;const minBx=rectB.x;const maxBx=rectB.x+rectB.width;const minBy=rectB.y;const maxBy=rectB.y+rectB.height;const aLeftOfB=maxAx<minBx;const aRightOfB=minAx>maxBx;const aBelowB=minAy>maxBy;const aAboveB=maxAy<minBy;return!(aLeftOfB||aRightOfB||aAboveB||aBelowB);}';
    tangon['code'] = report;
    offset = function(argFoo, argBar, argBaz) { // Original name: t
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = argBar;
            tangon = argBaz;
            report = null;
            if(!(report != entity)) { _fun00002_ip = 243; continue _fun00001 }
 18:
            zuuluu = entity.x;
            if(!(report != zuuluu)) { _fun00002_ip = 243; continue _fun00001 }
 30:
            zuuluu = entity.y;
            if(!(report != zuuluu)) { _fun00002_ip = 243; continue _fun00001 }
 42:
            zuuluu = entity.width;
            if(!(report != zuuluu)) { _fun00002_ip = 243; continue _fun00001 }
 54:
            zuuluu = entity.height;
            if(!(report != zuuluu)) { _fun00002_ip = 243; continue _fun00001 }
 66:
            if(!(report != michal)) { _fun00002_ip = 243; continue _fun00001 }
 73:
            zuuluu = michal.x;
            if(!(report != zuuluu)) { _fun00002_ip = 243; continue _fun00001 }
 85:
            zuuluu = michal.y;
            if(!(report != zuuluu)) { _fun00002_ip = 243; continue _fun00001 }
 97:
            zuuluu = michal.width;
            if(!(report != zuuluu)) { _fun00002_ip = 243; continue _fun00001 }
 109:
            zuuluu = michal.height;
            if(!(report != zuuluu)) { _fun00002_ip = 243; continue _fun00001 }
 121:
            zuuluu = entity.x;
            golfie = zuuluu - tangon;
            report = entity.x;
            zuuluu = entity.width;
            zuuluu = report + zuuluu;
            option = zuuluu + tangon;
            zuuluu = entity.y;
            zuuluu = zuuluu - tangon;
            report = entity.y;
            entity = entity.height;
            entity = report + entity;
            report = entity + tangon;
            entity = michal.x;
            oscard = michal.x;
            tangon = michal.width;
            oscard = oscard + tangon;
            tangon = michal.y;
            verify = michal.y;
            michal = michal.height;
            michal = verify + michal;
            entity = option < entity;
            if(entity) { _fun00002_ip = 224; continue _fun00001 }
 220:
            entity = golfie > oscard;
 224:
            if(entity) { _fun00002_ip = 231; continue _fun00001 }
 227:
            entity = report < tangon;
 231:
            if(entity) { _fun00002_ip = 238; continue _fun00001 }
 234:
            entity = zuuluu > michal;
 238:
            entity = !entity;
            return entity;
 243:
            entity = false;
            return entity;
        }
    };
    report = {};
    offset['__closure'] = report;
    report = 16149528537623.0;
    offset['__workletHash'] = report;
    offset['__initData'] = tangon;
    var _closure1_slot4 = offset;
    report = {};
    tangon = 'function VoiceCallOverlayUtilsTsx2(voiceCallOverlayLayoutStates,voiceCallOverlayType,targetRectangle){const{VoiceCallOverlayType,doRectanglesIntersectWorklet,MIN_MARGIN_BETWEEN_OVERLAYS}=this.__closure;switch(voiceCallOverlayType){case VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON:{if(!voiceCallOverlayLayoutStates[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE].isVisible){return false;}const doRectanglesIntersect=doRectanglesIntersectWorklet(targetRectangle,voiceCallOverlayLayoutStates[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE],MIN_MARGIN_BETWEEN_OVERLAYS);if(doRectanglesIntersect){return true;}break;}case VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE:{if(!voiceCallOverlayLayoutStates[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON].isVisible){return false;}const doRectanglesIntersect=doRectanglesIntersectWorklet(targetRectangle,voiceCallOverlayLayoutStates[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON],MIN_MARGIN_BETWEEN_OVERLAYS);if(doRectanglesIntersect){return true;}break;}}return false;}';
    report['code'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: l
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            tangon = argBar;
            report = argBaz;
            michal = _closure1_slot3;
            michal = michal.VOICE_CONTROLS_TOGGLE_BUTTON;
            if(!(michal !== tangon)) { _fun00004_ip = 108; continue _fun00003 }
 26:
            michal = _closure1_slot3;
            michal = michal.CAMERA_PREVIEW_PICTURE_IN_PICTURE;
            if(!(michal === tangon)) { _fun00004_ip = 169; continue _fun00003 }
 43:
            michal = _closure1_slot3;
            michal = michal.VOICE_CONTROLS_TOGGLE_BUTTON;
            michal = zuuluu[michal];
            michal = michal.isVisible;
            if(michal) { _fun00004_ip = 70; continue _fun00003 }
 66:
            michal = false;
            return michal;
 70:
            golfie = _closure1_slot4;
            michal = _closure1_slot3;
            michal = michal.VOICE_CONTROLS_TOGGLE_BUTTON;
            oscard = zuuluu[michal];
            tangon = _closure1_slot2;
            michal = undefined;
            michal = golfie.bind(michal)(report, oscard, tangon);
            if(!michal) { _fun00004_ip = 169; continue _fun00003 }
 104:
            michal = true;
            return michal;
 108:
            michal = _closure1_slot3;
            michal = michal.CAMERA_PREVIEW_PICTURE_IN_PICTURE;
            michal = zuuluu[michal];
            michal = michal.isVisible;
            if(michal) { _fun00004_ip = 135; continue _fun00003 }
 131:
            michal = false;
            return michal;
 135:
            tangon = _closure1_slot4;
            michal = _closure1_slot3;
            michal = michal.CAMERA_PREVIEW_PICTURE_IN_PICTURE;
            zuuluu = zuuluu[michal];
            michal = _closure1_slot2;
            entity = undefined;
            entity = tangon.bind(entity)(report, zuuluu, michal);
            if(entity) { _fun00004_ip = 173; continue _fun00003 }
 169:
            entity = false;
            return entity;
 173:
            entity = true;
            return entity;
        }
    };
    option = {};
    option['VoiceCallOverlayType'] = yankee;
    option['doRectanglesIntersectWorklet'] = offset;
    option['MIN_MARGIN_BETWEEN_OVERLAYS'] = verify;
    tangon['__closure'] = option;
    option = 10902657864288.0;
    tangon['__workletHash'] = option;
    tangon['__initData'] = report;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/video_calls/native/VoiceCallOverlayUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['doesTargetPositionIntersectOtherOverlaysWorklet'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: updateVoiceCallOverlayLayoutState
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'VOICE_CALL_OVERLAY_LAYOUT_STATE_UPDATE';
        michal['type'] = report;
        report = argFoo;
        michal['voiceCallOverlayType'] = report;
        report = argBar;
        michal['voiceCallOverlayLayoutState'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateVoiceCallOverlayLayoutState'] = tangon;
    michal = function(argFoo) { // Original name: setPipEnabledWhileFocusedOnActivityOrStream
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'VOICE_CALL_SET_PIP_ENABLED_FOR_ACTIVITY_OR_STREAM';
        michal['type'] = report;
        report = argFoo;
        michal['pipEnabledWhileFocusedOnActivityOrStream'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setPipEnabledWhileFocusedOnActivityOrStream'] = michal;
    return entity;
})();