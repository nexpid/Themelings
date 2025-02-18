// app/design/components/Tooltip/native/useTooltipPosition.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    zuuluu = argFre;
    report = argPlu;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    oscard = report[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot0 = tangon;
    tangon = 1;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/Tooltip/native/useTooltipPosition.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz, argCor) { // Original name: useTooltipPosition
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = argFoo;
            oscard = argBar;
            golfie = argBaz;
            verify = argCor;
            report = arguments[4];
            var _closure2_slot0 = option;
            var _closure2_slot1 = oscard;
            var _closure2_slot2 = golfie;
            var _closure2_slot3 = verify;
            michal = undefined;
            if(!(report === michal)) { _fun00002_ip = 41; continue _fun00001 }
 39:
            report = 0;
 41:
            var _closure2_slot4 = report;
            tangon = _closure1_slot0;
            zuuluu = tangon.useMemo;
            michal = new Array(5);
            michal[0] = verify;
            michal[1] = option;
            michal[2] = golfie;
            michal[3] = oscard;
            michal[4] = report;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot0;
                    michal = null;
                    if(!(michal != entity)) { _fun00004_ip = 211; continue _fun00003 }
 16:
                    entity = _closure2_slot1;
                    if(!(michal != entity)) { _fun00004_ip = 211; continue _fun00003 }
 27:
                    entity = _closure2_slot0;
                    oscard = entity.height;
                    verify = entity.width;
                    entity = _closure2_slot1;
                    golfie = entity.x;
                    offset = entity.y;
                    option = entity.width;
                    zuuluu = _closure2_slot2;
                    entity = zuuluu.x;
                    report = zuuluu.y;
                    michal = zuuluu.width;
                    zuuluu = zuuluu.height;
                    report = report - offset;
                    golfie = entity - golfie;
                    entity = 2;
                    michal = michal / entity;
                    michal = golfie + michal;
                    entity = verify / entity;
                    golfie = michal - entity;
                    entity = 12;
                    if(!(!(golfie < entity))) { _fun00004_ip = 146; continue _fun00003 }
 118:
                    yankee = golfie + verify;
                    offset = option - entity;
                    michal = 0;
                    if(!(yankee > offset)) { _fun00004_ip = 150; continue _fun00003 }
 132:
                    option = option - golfie;
                    option = option - verify;
                    michal = option - entity;
                    _fun00004_ip = 150; continue _fun00003;
 146:
                    michal = entity - golfie;
 150:
                    entity = {};
                    golfie = golfie + michal;
                    entity['tooltipX'] = golfie;
                    option = _closure2_slot3;
                    golfie = 'top';
                    if(!(golfie !== option)) { _fun00004_ip = 187; continue _fun00003 }
 173:
                    golfie = report + zuuluu;
                    zuuluu = _closure2_slot4;
                    zuuluu = golfie + zuuluu;
                    _fun00004_ip = 199; continue _fun00003;
 187:
                    report = report - oscard;
                    tangon = _closure2_slot4;
                    zuuluu = report - tangon;
 199:
                    entity['tooltipY'] = zuuluu;
                    entity['adjustmentX'] = michal;
                    return entity;
 211:
                    entity = {'tooltipX': 0, 'tooltipY': 0, 'adjustmentX': 0};
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();