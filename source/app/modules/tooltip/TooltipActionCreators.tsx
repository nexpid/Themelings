// app/modules/tooltip/TooltipActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    tangon = argPlu;
    michal = argBaz;
    var _closure1_slot0 = michal;
    var _closure1_slot1 = tangon;
    michal = global;
    golfie = michal.Object;
    oscard = golfie.defineProperty;
    report = {};
    michal = true;
    report['value'] = michal;
    michal = '__esModule';
    michal = oscard.bind(golfie)(zuuluu, michal, report);
    michal = {};
    report = function(argFoo) { // Original name: acknowledgeTooltip
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'TOOLTIP_ACKNOWLEDGE';
        michal['type'] = report;
        report = argFoo;
        michal['tooltip'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['acknowledgeTooltip'] = report;
    entity = function(argFoo) { // Original name: attemptToShowTooltip
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun00002_ip = 11; continue _fun00001 }
 9:
            report = false;
 11:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 0;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'TOOLTIP_SHOW_ATTEMPT';
            michal['type'] = oscard;
            oscard = argFoo;
            michal['tooltip'] = oscard;
            michal['ignoreMaxShownLimit'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal['attemptToShowTooltip'] = entity;
    entity = 1;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/tooltip/TooltipActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();