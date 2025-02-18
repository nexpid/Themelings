// app/design/components/Tooltip/native/TooltipConstants.native.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = {'overshootClamping': true, 'damping': 35, 'stiffness': 450, 'mass': 0.5, 'restDisplacementThreshold': 0.001};
    var _closure1_slot2 = entity;
    entity = {};
    oscard = "function TooltipConstantsNativeTsx1(visible,cleanUp){const{withSpring,translateY,TOOLTIP_SPRING}=this.__closure;return{transform:[{translateY:withSpring(visible===1?0:translateY,TOOLTIP_SPRING,'respect-motion-settings',cleanUp)}],opacity:withSpring(visible,TOOLTIP_SPRING,'respect-motion-settings',cleanUp)};}";
    entity['code'] = oscard;
    var _closure1_slot3 = entity;
    entity = 1;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/Tooltip/native/TooltipConstants.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: tooltipEnterExitAnimation
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = -8;
            zuuluu = 'top';
            michal = argFoo;
            if(!(zuuluu === michal)) { _fun00002_ip = 22; continue _fun00001 }
 19:
            tangon = 8;
 22:
            var _closure2_slot0 = tangon;
            entity = function(argFoo, argBar) { // Original name: o
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    golfie = argFoo;
                    oscard = argBar;
                    entity = {};
                    offset = {};
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    verify = 0;
                    zuuluu = zuuluu[verify];
                    option = undefined;
                    romeon = tangon.bind(option)(zuuluu);
                    yankee = romeon.withSpring;
                    tangon = 1;
                    zuuluu = 0;
                    if(!(tangon !== golfie)) { _fun00004_ip = 55; continue _fun00003 }
 48:
                    zuuluu = _closure2_slot0;
 55:
                    report = _closure1_slot2;
                    tangon = 'respect-motion-settings';
                    output = romeon;
                    sizing = zuuluu;
                    kiloes = report;
                    backup = tangon;
                    foxtra = oscard;
                    zuuluu = output[yankee](sizing, kiloes, backup, foxtra, romeon);
                    offset['translateY'] = zuuluu;
                    zuuluu = new Array(1);
                    zuuluu[0] = offset;
                    entity['transform'] = zuuluu;
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot1;
                    michal = michal[verify];
                    zuuluu = zuuluu.bind(option)(michal);
                    michal = zuuluu.withSpring;
                    output = zuuluu;
                    sizing = golfie;
                    kiloes = report;
                    foxtra = oscard;
                    michal = output[michal](sizing, kiloes, backup, foxtra, romeon);
                    entity['opacity'] = michal;
                    return entity;
                }
            };
            zuuluu = {};
            golfie = _closure1_slot0;
            oscard = _closure1_slot1;
            report = 0;
            oscard = oscard[report];
            report = undefined;
            report = golfie.bind(report)(oscard);
            report = report.withSpring;
            zuuluu['withSpring'] = report;
            zuuluu['translateY'] = tangon;
            tangon = _closure1_slot2;
            zuuluu['TOOLTIP_SPRING'] = tangon;
            entity['__closure'] = zuuluu;
            zuuluu = 7727487832145.0;
            entity['__workletHash'] = zuuluu;
            michal = _closure1_slot3;
            entity['__initData'] = michal;
            return entity;
        }
    };
    zuuluu['tooltipEnterExitAnimation'] = michal;
    return entity;
})();