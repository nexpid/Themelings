// app/design/components/Coachmark/native/AnimatedCoachmark.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.StyleSheet;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = function(argFoo, argBar) { // Original name: renderTooltipItem
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = argFoo;
            offset = argBar;
            tangon = _closure1_slot6;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 4;
            entity = zuuluu[entity];
            zuuluu = undefined;
            entity = michal.bind(zuuluu)(entity);
            michal = entity.View;
            entity = {};
            report = new Array(2);
            report[0] = offset;
            golfie = _closure1_slot5;
            golfie = golfie.absoluteFill;
            report[1] = golfie;
            entity['style'] = report;
            report = 'box-none';
            entity['pointerEvents'] = report;
            report = null;
            golfie = report != verify;
            if(!golfie) { _fun00002_ip = 147; continue _fun00001 }
 88:
            option = _closure1_slot6;
            golfie = _closure1_slot0;
            yankee = _closure1_slot2;
            oscard = 5;
            oscard = yankee[oscard];
            oscard = golfie.bind(zuuluu)(oscard);
            golfie = oscard.CoachmarkContainer;
            oscard = {};
            foxtra = oscard;
            romeon = verify;
            verify = copyDataProperties(foxtra, romeon);
            verify = 'enterExitAnimatedStyles';
            oscard[verify] = offset;
            report = option.bind(zuuluu)(golfie, oscard);
 147:
            entity['children'] = report;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/Coachmark/native/AnimatedCoachmark.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            romeon = report.visible;
            var _closure2_slot0 = romeon;
            michal = null;
            tangon = Object.create(michal);
            michal = 0;
            tangon['visible'] = michal;
            sizing = {};
            kiloes = report;
            backup = tangon;
            option = copyDataProperties(sizing, kiloes, backup);
            yankee = _closure1_slot4;
            golfie = yankee.useContext;
            zuuluu = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 6;
            oscard = offset[tangon];
            tangon = undefined;
            oscard = zuuluu.bind(tangon)(oscard);
            oscard = oscard.AccessibilityPreferencesContext;
            oscard = golfie.bind(yankee)(oscard);
            oscard = oscard.reducedMotion;
            golfie = oscard.enabled;
            oscard = yankee.useState;
            foxtra = oscard.bind(yankee)(romeon);
            verify = _closure1_slot3;
            oscard = 2;
            oscard = verify.bind(tangon)(foxtra, oscard);
            verify = oscard[michal];
            michal = 1;
            michal = oscard[michal];
            var _closure2_slot1 = michal;
            michal = 7;
            michal = offset[michal];
            oscard = zuuluu.bind(tangon)(michal);
            zuuluu = oscard.tooltipEnterExitAnimation;
            michal = option.position;
            oscard = zuuluu.bind(oscard)(michal);
            zuuluu = yankee.useEffect;
            michal = new Array(1);
            michal[0] = romeon;
            entity = function() {
                zuuluu = _closure2_slot1;
                michal = _closure2_slot0;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = zuuluu.bind(yankee)(entity, michal);
            zuuluu = _closure1_slot6;
            michal = _closure1_slot1;
            entity = 8;
            entity = offset[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['useReducedMotion'] = golfie;
            golfie = undefined;
            if(!verify) { _fun00004_ip = 221; continue _fun00003 }
 218:
            golfie = option;
 221:
            entity['item'] = golfie;
            entity['entering'] = oscard;
            entity['exiting'] = oscard;
            report = _closure1_slot7;
            entity['renderItem'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['AnimatedCoachmark'] = michal;
    return entity;
})();