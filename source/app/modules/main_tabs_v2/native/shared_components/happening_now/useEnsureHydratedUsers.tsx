// app/modules/main_tabs_v2/native/shared_components/happening_now/useEnsureHydratedUsers.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/shared_components/happening_now/useEnsureHydratedUsers.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useEnsureHydratedUsers
        option = argFoo;
        golfie = argBar;
        var _closure2_slot0 = option;
        var _closure2_slot1 = golfie;
        oscard = _closure1_slot2;
        report = oscard.useMemo;
        tangon = new Array(2);
        tangon[0] = option;
        tangon[1] = golfie;
        zuuluu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot1;
                zuuluu = entity.length;
                entity = 0;
                if(!(entity !== zuuluu)) { _fun00002_ip = 35; continue _fun00001 }
 18:
                entity = {};
                zuuluu = _closure2_slot0;
                michal = _closure2_slot1;
                entity[zuuluu] = michal;
                _fun00002_ip = 37; continue _fun00001;
 35:
                entity = {};
 37:
                return entity;
            }
        };
        tangon = report.bind(oscard)(zuuluu, tangon);
        report = oscard.useEffect;
        zuuluu = new Array(2);
        zuuluu[0] = option;
        zuuluu[1] = golfie;
        michal = function() {
            zuuluu = _closure2_slot1;
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = _closure1_slot4;
                    michal = zuuluu.getUser;
                    zuuluu = michal.bind(zuuluu)(tangon);
                    michal = null;
                    if(!(michal == zuuluu)) { _fun00004_ip = 50; continue _fun00003 }
 27:
                    zuuluu = _closure1_slot3;
                    michal = zuuluu.requestMember;
                    entity = _closure2_slot0;
                    entity = michal.bind(zuuluu)(entity, tangon);
 50:
                    entity = undefined;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = report.bind(oscard)(michal, zuuluu);
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.useSubscribeGuildMembers;
        michal = michal.bind(zuuluu)(tangon);
        return entity;
    };
    zuuluu['useEnsureHydratedUsers'] = michal;
    return entity;
})();