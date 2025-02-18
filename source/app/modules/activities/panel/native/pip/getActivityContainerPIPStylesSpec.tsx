// app/modules/activities/panel/native/pip/getActivityContainerPIPStylesSpec.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    verify = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = oscard;
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
    tangon = report.bind(entity)(tangon);
    offset = tangon.OrientationLockState;
    var _closure1_slot2 = offset;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.LANDSCAPE_ACTIVITY_ASPECT_RATIO;
    var _closure1_slot3 = option;
    tangon = {};
    golfie = 'function getActivityContainerPipStylesSpec_getActivityContainerPIPStylesSpecTsx1({pipWidth:pipWidth,pipHeight:pipHeight,pipOrientationLockState:pipOrientationLockState,isLandscape:isLandscape}){const{OrientationLockState,LANDSCAPE_ACTIVITY_ASPECT_RATIO,roundToNearestPixel}=this.__closure;const nonNullPipOrientationLockState=pipOrientationLockState!==null&&pipOrientationLockState!==void 0?pipOrientationLockState:OrientationLockState.UNLOCKED;const shouldUsePortraitAspectRatio=nonNullPipOrientationLockState===OrientationLockState.PORTRAIT||nonNullPipOrientationLockState===OrientationLockState.UNLOCKED&&!isLandscape;let width=pipWidth;let height=pipHeight;let shouldHorizontallyCenter=false;let shouldVerticallyCenter=false;let marginLeft=0;let marginTop=0;if(shouldUsePortraitAspectRatio){width=pipWidth;height=width*LANDSCAPE_ACTIVITY_ASPECT_RATIO;shouldVerticallyCenter=true;marginTop=roundToNearestPixel(height/2)*-1;}else{height=pipHeight;width=height*LANDSCAPE_ACTIVITY_ASPECT_RATIO;shouldHorizontallyCenter=true;marginLeft=roundToNearestPixel(width/2)*-1;}return{width:width,height:height,shouldHorizontallyCenter:shouldHorizontallyCenter,shouldVerticallyCenter:shouldVerticallyCenter,marginLeft:marginLeft,marginTop:marginTop};}';
    tangon['code'] = golfie;
    michal = function(argFoo) { // Original name: t
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            romeon = entity.pipWidth;
            oscard = entity.pipHeight;
            tangon = entity.pipOrientationLockState;
            michal = entity.isLandscape;
            entity = null;
            if(!(entity == tangon)) { _fun00002_ip = 46; continue _fun00001 }
 33:
            entity = _closure1_slot2;
            tangon = entity.UNLOCKED;
 46:
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu.PORTRAIT;
            if(!(tangon !== zuuluu)) { _fun00002_ip = 137; continue _fun00001 }
 63:
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu.UNLOCKED;
            if(!(tangon === zuuluu)) { _fun00002_ip = 80; continue _fun00001 }
 77:
            if(!michal) { _fun00002_ip = 137; continue _fun00001 }
 80:
            michal = _closure1_slot3;
            golfie = oscard * michal;
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            tangon = undefined;
            zuuluu = report.bind(tangon)(zuuluu);
            michal = golfie / michal;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = -1;
            zuuluu = michal * zuuluu;
            report = true;
            tangon = false;
            michal = 0;
            _fun00002_ip = 198; continue _fun00001;
 137:
            option = _closure1_slot3;
            yankee = romeon * option;
            offset = _closure1_slot0;
            option = _closure1_slot1;
            entity = 2;
            option = option[entity];
            verify = undefined;
            option = offset.bind(verify)(option);
            entity = yankee / entity;
            option = option.bind(verify)(entity);
            entity = -1;
            michal = entity * option;
            report = false;
            tangon = true;
            zuuluu = 0;
            golfie = romeon;
            oscard = yankee;
 198:
            entity = {};
            entity['width'] = golfie;
            entity['height'] = oscard;
            entity['shouldHorizontallyCenter'] = report;
            entity['shouldVerticallyCenter'] = tangon;
            entity['marginLeft'] = zuuluu;
            entity['marginTop'] = michal;
            return entity;
        }
    };
    golfie = {};
    golfie['OrientationLockState'] = offset;
    golfie['LANDSCAPE_ACTIVITY_ASPECT_RATIO'] = option;
    option = 2;
    option = oscard[option];
    option = verify.bind(entity)(option);
    golfie['roundToNearestPixel'] = option;
    michal['__closure'] = golfie;
    golfie = 7141745103186.0;
    michal['__workletHash'] = golfie;
    michal['__initData'] = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/panel/native/pip/getActivityContainerPIPStylesSpec.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();