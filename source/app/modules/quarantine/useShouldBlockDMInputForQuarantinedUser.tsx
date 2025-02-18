// app/modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx
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
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UserFlags;
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: _default
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            verify = argBar;
            var _closure2_slot0 = verify;
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 2;
            zuuluu = option[zuuluu];
            report = undefined;
            tangon = golfie.bind(report)(zuuluu);
            zuuluu = tangon.useShowConvoStarterInDM;
            tangon = zuuluu.bind(tangon)(verify);
            zuuluu = 3;
            zuuluu = option[zuuluu];
            option = golfie.bind(report)(zuuluu);
            golfie = option.useStateFromStores;
            zuuluu = _closure1_slot2;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = new Array(1);
            zuuluu[0] = verify;
            entity = function() {
                zuuluu = _closure1_slot2;
                michal = zuuluu.getMessages;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.length;
                entity = 0;
                entity = michal > entity;
                return entity;
            };
            zuuluu = golfie.bind(option)(report, entity, zuuluu);
            entity = null;
            entity = entity != oscard;
            if(!entity) { _fun00002_ip = 144; continue _fun00001 }
 108:
            report = oscard.hasFlag;
            michal = _closure1_slot3;
            michal = michal.QUARANTINED;
            michal = report.bind(oscard)(michal);
            if(!michal) { _fun00002_ip = 135; continue _fun00001 }
 132:
            michal = tangon;
 135:
            if(!michal) { _fun00002_ip = 141; continue _fun00001 }
 138:
            michal = !zuuluu;
 141:
            entity = michal;
 144:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();