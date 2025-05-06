// app/modules/interaction_components/StringSelectActionComponentUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
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
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/interaction_components/StringSelectActionComponentUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: getInitialStringSelectOptions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            golfie = _closure1_slot2;
            oscard = golfie.getInteractionComponentState;
            report = zuuluu.id;
            michal = argBar;
            michal = oscard.bind(golfie)(michal, report);
            report = null;
            oscard = report == michal;
            golfie = undefined;
            report = undefined;
            if(oscard) { _fun00002_ip = 50; continue _fun00001 }
 45:
            report = michal.type;
 50:
            oscard = _closure1_slot0;
            option = _closure1_slot1;
            tangon = 1;
            tangon = option[tangon];
            tangon = oscard.bind(golfie)(tangon);
            tangon = tangon.ComponentType;
            tangon = tangon.STRING_SELECT;
            if(!(report !== tangon)) { _fun00002_ip = 127; continue _fun00001 }
 86:
            report = zuuluu.options;
            tangon = report.filter;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.default;
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.value;
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity);
            _fun00002_ip = 132; continue _fun00001;
 127:
            entity = michal.values;
 132:
            return entity;
        }
    };
    zuuluu['getInitialStringSelectOptions'] = michal;
    return entity;
})();