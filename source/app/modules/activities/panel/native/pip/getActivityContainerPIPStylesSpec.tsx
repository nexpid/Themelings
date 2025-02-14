// app/modules/activities/panel/native/pip/getActivityContainerPIPStylesSpec.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    verify = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    offset = tango.OrientationLockState;
    var _closure1_slot2 = offset;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.LANDSCAPE_ACTIVITY_ASPECT_RATIO;
    var _closure1_slot3 = options;
    tango = {};
    golf = 'function getActivityContainerPipStylesSpec_getActivityContainerPIPStylesSpecTsx1({pipWidth:pipWidth,pipHeight:pipHeight,pipOrientationLockState:pipOrientationLockState,isLandscape:isLandscape}){const{OrientationLockState,LANDSCAPE_ACTIVITY_ASPECT_RATIO,roundToNearestPixel}=this.__closure;const nonNullPipOrientationLockState=pipOrientationLockState!==null&&pipOrientationLockState!==void 0?pipOrientationLockState:OrientationLockState.UNLOCKED;const shouldUsePortraitAspectRatio=nonNullPipOrientationLockState===OrientationLockState.PORTRAIT||nonNullPipOrientationLockState===OrientationLockState.UNLOCKED&&!isLandscape;let width=pipWidth;let height=pipHeight;let shouldHorizontallyCenter=false;let shouldVerticallyCenter=false;let marginLeft=0;let marginTop=0;if(shouldUsePortraitAspectRatio){width=pipWidth;height=width*LANDSCAPE_ACTIVITY_ASPECT_RATIO;shouldVerticallyCenter=true;marginTop=roundToNearestPixel(height/2)*-1;}else{height=pipHeight;width=height*LANDSCAPE_ACTIVITY_ASPECT_RATIO;shouldHorizontallyCenter=true;marginLeft=roundToNearestPixel(width/2)*-1;}return{width:width,height:height,shouldHorizontallyCenter:shouldHorizontallyCenter,shouldVerticallyCenter:shouldVerticallyCenter,marginLeft:marginLeft,marginTop:marginTop};}';
    tango['code'] = golf;
    mike = function(argFoo) { // Original name: t
        _fun121357: for(var _fun121357_ip = 0; ; ) switch(_fun121357_ip) {
 0:
            entity = argFoo;
            romeo = entity.pipWidth;
            oscar = entity.pipHeight;
            tango = entity.pipOrientationLockState;
            mike = entity.isLandscape;
            entity = null;
            if(!(entity == tango)) { _fun121357_ip = 46; continue _fun121357 }
 33:
            entity = _closure1_slot2;
            tango = entity.UNLOCKED;
 46:
            zulu = _closure1_slot2;
            zulu = zulu.PORTRAIT;
            if(!(tango !== zulu)) { _fun121357_ip = 137; continue _fun121357 }
 63:
            zulu = _closure1_slot2;
            zulu = zulu.UNLOCKED;
            if(!(tango === zulu)) { _fun121357_ip = 80; continue _fun121357 }
 77:
            if(!mike) { _fun121357_ip = 137; continue _fun121357 }
 80:
            mike = _closure1_slot3;
            golf = oscar * mike;
            report = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 2;
            zulu = zulu[mike];
            tango = undefined;
            zulu = report.bind(tango)(zulu);
            mike = golf / mike;
            zulu = zulu.bind(tango)(mike);
            mike = -1;
            zulu = mike * zulu;
            report = true;
            tango = false;
            mike = 0;
            _fun121357_ip = 198; continue _fun121357;
 137:
            options = _closure1_slot3;
            yankee = romeo * options;
            offset = _closure1_slot0;
            options = _closure1_slot1;
            entity = 2;
            options = options[entity];
            verify = undefined;
            options = offset.bind(verify)(options);
            entity = yankee / entity;
            options = options.bind(verify)(entity);
            entity = -1;
            mike = entity * options;
            report = false;
            tango = true;
            zulu = 0;
            golf = romeo;
            oscar = yankee;
 198:
            entity = {};
            entity['width'] = golf;
            entity['height'] = oscar;
            entity['shouldHorizontallyCenter'] = report;
            entity['shouldVerticallyCenter'] = tango;
            entity['marginLeft'] = zulu;
            entity['marginTop'] = mike;
            return entity;
        }
    };
    golf = {};
    golf['OrientationLockState'] = offset;
    golf['LANDSCAPE_ACTIVITY_ASPECT_RATIO'] = options;
    options = 2;
    options = oscar[options];
    options = verify.bind(entity)(options);
    golf['roundToNearestPixel'] = options;
    mike['__closure'] = golf;
    golf = 7141745103186.0;
    mike['__workletHash'] = golf;
    mike['__initData'] = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/panel/native/pip/getActivityContainerPIPStylesSpec.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();