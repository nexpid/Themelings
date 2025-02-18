// app/modules/app_launcher/hooks/useFilterAndSortToOnlyFrecentCommands.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argBaz;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_launcher/hooks/useFilterAndSortToOnlyFrecentCommands.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useFilterAndSortToOnlyFrecentCommands
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            offset = zuuluu.context;
            michal = zuuluu.commands;
            var _closure2_slot0 = michal;
            report = zuuluu.limit;
            option = undefined;
            if(!(report === option)) { _fun00002_ip = 37; continue _fun00001 }
 32:
            report = michal.length;
 37:
            var _closure2_slot1 = report;
            var _closure2_slot2 = option;
            var _closure2_slot3 = option;
            var _closure2_slot4 = option;
            golfie = _closure1_slot0;
            verify = _closure1_slot1;
            tangon = 2;
            tangon = verify[tangon];
            oscard = golfie.bind(option)(tangon);
            tangon = oscard.useCommandContext;
            oscard = tangon.bind(oscard)(offset);
            _closure2_slot2 = oscard;
            tangon = 3;
            tangon = verify[tangon];
            golfie = golfie.bind(option)(tangon);
            tangon = golfie.useTopCommands;
            option = tangon.bind(golfie)(oscard);
            _closure2_slot3 = option;
            tangon = _closure1_slot2;
            golfie = tangon.useMemo;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                tangon = _closure2_slot0;
                zuuluu = tangon.reduce;
                michal = function(argFoo, argBar) {
                    entity = argFoo;
                    zuuluu = argBar;
                    michal = zuuluu.id;
                    entity[michal] = zuuluu;
                    return entity;
                };
                entity = {};
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            golfie = golfie.bind(tangon)(michal, zuuluu);
            _closure2_slot4 = golfie;
            zuuluu = tangon.useMemo;
            michal = new Array(4);
            michal[0] = option;
            michal[1] = golfie;
            michal[2] = oscard;
            michal[3] = report;
            entity = function() {
                report = _closure2_slot3;
                tangon = report.map;
                zuuluu = function(argFoo) {
                    michal = _closure2_slot4;
                    entity = argFoo;
                    entity = michal[entity];
                    return entity;
                };
                report = tangon.bind(report)(zuuluu);
                tangon = report.filter;
                zuuluu = function(argFoo) {
                    michal = null;
                    entity = argFoo;
                    entity = michal != entity;
                    return entity;
                };
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.sort;
                michal = function(argFoo, argBar) {
                    report = _closure1_slot3;
                    tangon = report.getScoreWithoutLoadingLatest;
                    zuuluu = _closure2_slot2;
                    michal = argFoo;
                    michal = tangon.bind(report)(zuuluu, michal);
                    tangon = report.getScoreWithoutLoadingLatest;
                    zuuluu = _closure2_slot2;
                    entity = argBar;
                    entity = tangon.bind(report)(zuuluu, entity);
                    entity = entity - michal;
                    return entity;
                };
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = tangon.slice;
                michal = _closure2_slot1;
                entity = 0;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();