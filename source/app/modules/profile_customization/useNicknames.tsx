// app/modules/profile_customization/useNicknames.tsx
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
    tangon = 'modules/profile_customization/useNicknames.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useNicknames
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 1;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        michal = _closure1_slot2;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = null;
                zuuluu = entity == zuuluu;
                entity = '';
                if(zuuluu) { _fun00002_ip = 58; continue _fun00001 }
 20:
                tangon = _closure1_slot2;
                zuuluu = tangon.getNicknames;
                michal = _closure2_slot0;
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = tangon.join;
                michal = ', ';
                entity = zuuluu.bind(tangon)(michal);
 58:
                return entity;
            }
        };
        zuuluu = tangon.bind(report)(zuuluu, entity, michal);
        entity = {};
        entity['nicknames'] = zuuluu;
        michal = zuuluu.trim;
        zuuluu = michal.bind(zuuluu)();
        michal = '';
        michal = michal !== zuuluu;
        entity['canShowNicknames'] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();