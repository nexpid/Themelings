// app/modules/activities/panel/native/pip/usePIPAvoidanceSpecs.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = {};
    oscard = 'function usePIPAvoidanceSpecsTsx1(){const{keyboardHeight,safeArea,screenName}=this.__closure;return{keyboardHeight:keyboardHeight.get(),safeAreaBottom:safeArea.bottom,imeInsetsBottom:safeArea.imeInsetsBottom,screenName:screenName.get()};}';
    entity['code'] = oscard;
    var _closure1_slot3 = entity;
    entity = {};
    oscard = 'function usePIPAvoidanceSpecsTsx2(props,previous){const{cheapWorkletShallowEqual,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{keyboardHeight:keyboardHeight,safeAreaBottom:safeAreaBottom,imeInsetsBottom:imeInsetsBottom,screenName:screenName}=props;const screenBottomOffset=getPIPBottomOffsetForPIPMode(screenName);const{adjustedScreenBottomOffset:adjustedScreenBottomOffset,bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,imeInsetsBottom:imeInsetsBottom,safeAreaBottom:safeAreaBottom,keyboardHeight:keyboardHeight});updateSharedValueIfChanged(pipAvoidanceSpecs,{top:0,bottom:Math.max(bottomOffset,adjustedScreenBottomOffset)});}';
    entity['code'] = oscard;
    var _closure1_slot4 = entity;
    entity = 7;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/panel/native/pip/usePIPAvoidanceSpecs.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: usePIPAvoidanceSpecs
        foxtra = argFoo;
        var _closure2_slot0 = foxtra;
        romeon = _closure1_slot0;
        yankee = _closure1_slot2;
        zuuluu = 0;
        entity = yankee[zuuluu];
        offset = undefined;
        report = romeon.bind(offset)(entity);
        tangon = report.useSharedValue;
        entity = {'top': 0, 'bottom': 0};
        entity = tangon.bind(report)(entity);
        var _closure2_slot1 = entity;
        verify = _closure1_slot1;
        tangon = 1;
        tangon = yankee[tangon];
        tangon = verify.bind(offset)(tangon);
        backup = tangon.bind(offset)();
        var _closure2_slot2 = backup;
        tangon = 2;
        tangon = yankee[tangon];
        tangon = verify.bind(offset)(tangon);
        option = tangon.bind(offset)();
        var _closure2_slot3 = option;
        zuuluu = yankee[zuuluu];
        report = romeon.bind(offset)(zuuluu);
        tangon = report.useAnimatedReaction;
        zuuluu = function() { // Original name: f
            entity = {};
            tangon = _closure2_slot2;
            zuuluu = tangon.get;
            zuuluu = zuuluu.bind(tangon)();
            entity['keyboardHeight'] = zuuluu;
            zuuluu = _closure2_slot0;
            tangon = zuuluu.bottom;
            entity['safeAreaBottom'] = tangon;
            zuuluu = zuuluu.imeInsetsBottom;
            entity['imeInsetsBottom'] = zuuluu;
            zuuluu = _closure2_slot3;
            michal = zuuluu.get;
            michal = michal.bind(zuuluu)();
            entity['screenName'] = michal;
            return entity;
        };
        golfie = {};
        golfie['keyboardHeight'] = backup;
        golfie['safeArea'] = foxtra;
        golfie['screenName'] = option;
        zuuluu['__closure'] = golfie;
        golfie = 3347413314738.0;
        zuuluu['__workletHash'] = golfie;
        golfie = _closure1_slot3;
        zuuluu['__initData'] = golfie;
        michal = function(argFoo, argBar) { // Original name: n
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = argFoo;
                golfie = argBar;
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 3;
                tangon = tangon[entity];
                entity = undefined;
                oscard = report.bind(entity)(tangon);
                report = oscard.cheapWorkletShallowEqual;
                tangon = null;
                option = tangon != golfie;
                tangon = undefined;
                if(!option) { _fun00002_ip = 51; continue _fun00001 }
 48:
                tangon = golfie;
 51:
                tangon = report.bind(oscard)(zuuluu, tangon);
                if(tangon) { _fun00002_ip = 219; continue _fun00001 }
 63:
                oscard = zuuluu.keyboardHeight;
                golfie = zuuluu.safeAreaBottom;
                option = zuuluu.imeInsetsBottom;
                report = zuuluu.screenName;
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 4;
                michal = tangon[michal];
                michal = zuuluu.bind(entity)(michal);
                verify = michal.bind(entity)(report);
                michal = 5;
                michal = tangon[michal];
                report = zuuluu.bind(entity)(michal);
                michal = {};
                michal['screenBottomOffset'] = verify;
                michal['imeInsetsBottom'] = option;
                michal['safeAreaBottom'] = golfie;
                michal['keyboardHeight'] = oscard;
                michal = report.bind(entity)(michal);
                option = michal.adjustedScreenBottomOffset;
                golfie = michal.bottomOffset;
                michal = 6;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = _closure2_slot1;
                michal = {};
                report = 0;
                michal['top'] = report;
                report = global;
                oscard = report.Math;
                report = oscard.max;
                report = report.bind(oscard)(golfie, option);
                michal['bottom'] = report;
                michal = tangon.bind(entity)(zuuluu, michal);
 219:
                return entity;
            }
        };
        golfie = {};
        option = 3;
        option = yankee[option];
        option = romeon.bind(offset)(option);
        option = option.cheapWorkletShallowEqual;
        golfie['cheapWorkletShallowEqual'] = option;
        option = 4;
        option = yankee[option];
        option = verify.bind(offset)(option);
        golfie['getPIPBottomOffsetForPIPMode'] = option;
        option = 5;
        option = yankee[option];
        option = verify.bind(offset)(option);
        golfie['getAdjustedBottomOffsets'] = option;
        option = 6;
        option = yankee[option];
        option = verify.bind(offset)(option);
        golfie['updateSharedValueIfChanged'] = option;
        golfie['pipAvoidanceSpecs'] = entity;
        michal['__closure'] = golfie;
        golfie = 15497444455440.0;
        michal['__workletHash'] = golfie;
        oscard = _closure1_slot4;
        michal['__initData'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();