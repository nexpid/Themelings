// app/design/components/RoleDot/native/RoleColorUtils.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.processColor;
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/RoleDot/native/RoleColorUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useMemoizedProcessedGradientRoleColors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            var _closure2_slot0 = oscard;
            tangon = _closure1_slot0;
            zuuluu = tangon.useMemo;
            golfie = null;
            michal = golfie == oscard;
            option = undefined;
            if(michal) { _fun00002_ip = 38; continue _fun00001 }
 32:
            option = oscard.primaryColor;
 38:
            michal = new Array(3);
            michal[0] = option;
            verify = golfie == oscard;
            option = undefined;
            if(verify) { _fun00002_ip = 61; continue _fun00001 }
 55:
            option = oscard.secondaryColor;
 61:
            michal[1] = option;
            golfie = golfie == oscard;
            report = undefined;
            if(golfie) { _fun00002_ip = 80; continue _fun00001 }
 74:
            report = oscard.tertiaryColor;
 80:
            michal[2] = report;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot0;
                    oscard = null;
                    tangon = oscard == michal;
                    report = undefined;
                    if(tangon) { _fun00004_ip = 30; continue _fun00003 }
 20:
                    tangon = _closure2_slot0;
                    report = tangon.primaryColor;
 30:
                    tangon = new Array(3);
                    tangon[0] = report;
                    report = _closure2_slot0;
                    golfie = oscard == report;
                    report = undefined;
                    if(golfie) { _fun00004_ip = 61; continue _fun00003 }
 51:
                    golfie = _closure2_slot0;
                    report = golfie.secondaryColor;
 61:
                    tangon[1] = report;
                    report = _closure2_slot0;
                    report = oscard == report;
                    michal = undefined;
                    if(report) { _fun00004_ip = 88; continue _fun00003 }
 78:
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.tertiaryColor;
 88:
                    tangon[2] = michal;
                    zuuluu = tangon.filter;
                    michal = function(argFoo) {
                        michal = null;
                        entity = argFoo;
                        entity = michal != entity;
                        return entity;
                    };
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = zuuluu.map;
                    entity = function(argFoo) {
                        zuuluu = _closure1_slot1;
                        michal = undefined;
                        entity = argFoo;
                        entity = zuuluu.bind(michal)(entity);
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['useMemoizedProcessedGradientRoleColors'] = michal;
    return entity;
})();