// app/modules/video_calls/native/VoiceCallOverlayUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = golf;
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
    tango = oscar.bind(entity)(tango);
    verify = tango.MIN_MARGIN_BETWEEN_OVERLAYS;
    var _closure1_slot2 = verify;
    yankee = tango.VoiceCallOverlayType;
    var _closure1_slot3 = yankee;
    tango = {};
    report = 'function VoiceCallOverlayUtilsTsx1(rectA,rectB,minMarginBetweenOverlays){if(rectA==null||rectA.x==null||rectA.y==null||rectA.width==null||rectA.height==null||rectB==null||rectB.x==null||rectB.y==null||rectB.width==null||rectB.height==null){return false;}const minAx=rectA.x-minMarginBetweenOverlays;const maxAx=rectA.x+rectA.width+minMarginBetweenOverlays;const minAy=rectA.y-minMarginBetweenOverlays;const maxAy=rectA.y+rectA.height+minMarginBetweenOverlays;const minBx=rectB.x;const maxBx=rectB.x+rectB.width;const minBy=rectB.y;const maxBy=rectB.y+rectB.height;const aLeftOfB=maxAx<minBx;const aRightOfB=minAx>maxBx;const aBelowB=minAy>maxBy;const aAboveB=maxAy<minBy;return!(aLeftOfB||aRightOfB||aAboveB||aBelowB);}';
    tango['code'] = report;
    offset = function(argFoo, argBar, argBaz) { // Original name: t
        _fun75033: for(var _fun75033_ip = 0; ; ) switch(_fun75033_ip) {
 0:
            entity = argFoo;
            mike = argBar;
            tango = argBaz;
            report = null;
            if(!(report != entity)) { _fun75033_ip = 243; continue _fun75033 }
 18:
            zulu = entity.x;
            if(!(report != zulu)) { _fun75033_ip = 243; continue _fun75033 }
 30:
            zulu = entity.y;
            if(!(report != zulu)) { _fun75033_ip = 243; continue _fun75033 }
 42:
            zulu = entity.width;
            if(!(report != zulu)) { _fun75033_ip = 243; continue _fun75033 }
 54:
            zulu = entity.height;
            if(!(report != zulu)) { _fun75033_ip = 243; continue _fun75033 }
 66:
            if(!(report != mike)) { _fun75033_ip = 243; continue _fun75033 }
 73:
            zulu = mike.x;
            if(!(report != zulu)) { _fun75033_ip = 243; continue _fun75033 }
 85:
            zulu = mike.y;
            if(!(report != zulu)) { _fun75033_ip = 243; continue _fun75033 }
 97:
            zulu = mike.width;
            if(!(report != zulu)) { _fun75033_ip = 243; continue _fun75033 }
 109:
            zulu = mike.height;
            if(!(report != zulu)) { _fun75033_ip = 243; continue _fun75033 }
 121:
            zulu = entity.x;
            golf = zulu - tango;
            report = entity.x;
            zulu = entity.width;
            zulu = report + zulu;
            options = zulu + tango;
            zulu = entity.y;
            zulu = zulu - tango;
            report = entity.y;
            entity = entity.height;
            entity = report + entity;
            report = entity + tango;
            entity = mike.x;
            oscar = mike.x;
            tango = mike.width;
            oscar = oscar + tango;
            tango = mike.y;
            verify = mike.y;
            mike = mike.height;
            mike = verify + mike;
            entity = options < entity;
            if(entity) { _fun75033_ip = 224; continue _fun75033 }
 220:
            entity = golf > oscar;
 224:
            if(entity) { _fun75033_ip = 231; continue _fun75033 }
 227:
            entity = report < tango;
 231:
            if(entity) { _fun75033_ip = 238; continue _fun75033 }
 234:
            entity = zulu > mike;
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
    offset['__initData'] = tango;
    var _closure1_slot4 = offset;
    report = {};
    tango = 'function VoiceCallOverlayUtilsTsx2(voiceCallOverlayLayoutStates,voiceCallOverlayType,targetRectangle){const{VoiceCallOverlayType,doRectanglesIntersectWorklet,MIN_MARGIN_BETWEEN_OVERLAYS}=this.__closure;switch(voiceCallOverlayType){case VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON:{if(!voiceCallOverlayLayoutStates[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE].isVisible){return false;}const doRectanglesIntersect=doRectanglesIntersectWorklet(targetRectangle,voiceCallOverlayLayoutStates[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE],MIN_MARGIN_BETWEEN_OVERLAYS);if(doRectanglesIntersect){return true;}break;}case VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE:{if(!voiceCallOverlayLayoutStates[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON].isVisible){return false;}const doRectanglesIntersect=doRectanglesIntersectWorklet(targetRectangle,voiceCallOverlayLayoutStates[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON],MIN_MARGIN_BETWEEN_OVERLAYS);if(doRectanglesIntersect){return true;}break;}}return false;}';
    report['code'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: l
        _fun75034: for(var _fun75034_ip = 0; ; ) switch(_fun75034_ip) {
 0:
            zulu = argFoo;
            tango = argBar;
            report = argBaz;
            mike = _closure1_slot3;
            mike = mike.VOICE_CONTROLS_TOGGLE_BUTTON;
            if(!(mike !== tango)) { _fun75034_ip = 108; continue _fun75034 }
 26:
            mike = _closure1_slot3;
            mike = mike.CAMERA_PREVIEW_PICTURE_IN_PICTURE;
            if(!(mike === tango)) { _fun75034_ip = 169; continue _fun75034 }
 43:
            mike = _closure1_slot3;
            mike = mike.VOICE_CONTROLS_TOGGLE_BUTTON;
            mike = zulu[mike];
            mike = mike.isVisible;
            if(mike) { _fun75034_ip = 70; continue _fun75034 }
 66:
            mike = false;
            return mike;
 70:
            golf = _closure1_slot4;
            mike = _closure1_slot3;
            mike = mike.VOICE_CONTROLS_TOGGLE_BUTTON;
            oscar = zulu[mike];
            tango = _closure1_slot2;
            mike = undefined;
            mike = golf.bind(mike)(report, oscar, tango);
            if(!mike) { _fun75034_ip = 169; continue _fun75034 }
 104:
            mike = true;
            return mike;
 108:
            mike = _closure1_slot3;
            mike = mike.CAMERA_PREVIEW_PICTURE_IN_PICTURE;
            mike = zulu[mike];
            mike = mike.isVisible;
            if(mike) { _fun75034_ip = 135; continue _fun75034 }
 131:
            mike = false;
            return mike;
 135:
            tango = _closure1_slot4;
            mike = _closure1_slot3;
            mike = mike.CAMERA_PREVIEW_PICTURE_IN_PICTURE;
            zulu = zulu[mike];
            mike = _closure1_slot2;
            entity = undefined;
            entity = tango.bind(entity)(report, zulu, mike);
            if(entity) { _fun75034_ip = 173; continue _fun75034 }
 169:
            entity = false;
            return entity;
 173:
            entity = true;
            return entity;
        }
    };
    options = {};
    options['VoiceCallOverlayType'] = yankee;
    options['doRectanglesIntersectWorklet'] = offset;
    options['MIN_MARGIN_BETWEEN_OVERLAYS'] = verify;
    tango['__closure'] = options;
    options = 10902657864288.0;
    tango['__workletHash'] = options;
    tango['__initData'] = report;
    report = 2;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/video_calls/native/VoiceCallOverlayUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['doesTargetPositionIntersectOtherOverlaysWorklet'] = tango;
    tango = function(argFoo, argBar) { // Original name: updateVoiceCallOverlayLayoutState
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'VOICE_CALL_OVERLAY_LAYOUT_STATE_UPDATE';
        mike['type'] = report;
        report = argFoo;
        mike['voiceCallOverlayType'] = report;
        report = argBar;
        mike['voiceCallOverlayLayoutState'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['updateVoiceCallOverlayLayoutState'] = tango;
    mike = function(argFoo) { // Original name: setPipEnabledWhileFocusedOnActivityOrStream
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'VOICE_CALL_SET_PIP_ENABLED_FOR_ACTIVITY_OR_STREAM';
        mike['type'] = report;
        report = argFoo;
        mike['pipEnabledWhileFocusedOnActivityOrStream'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setPipEnabledWhileFocusedOnActivityOrStream'] = mike;
    return entity;
})();