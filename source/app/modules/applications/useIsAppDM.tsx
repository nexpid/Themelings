// app/modules/applications/useIsAppDM.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/applications/useIsAppDM.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useIsAppDM
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 2;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        oscard = _closure1_slot2;
        michal = new Array(2);
        michal[0] = oscard;
        report = _closure1_slot3;
        michal[1] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot2;
                michal = tangon.getChannel;
                entity = _closure2_slot0;
                golfie = michal.bind(tangon)(entity);
                tangon = null;
                entity = tangon == golfie;
                report = undefined;
                if(entity) { _fun00002_ip = 45; continue _fun00001 }
 35:
                entity = golfie.isDM;
                report = entity.bind(golfie)();
 45:
                entity = true;
                if(!(entity === report)) { _fun00002_ip = 97; continue _fun00001 }
 51:
                oscard = _closure1_slot3;
                report = oscard.getUser;
                zuuluu = golfie.getRecipientId;
                zuuluu = zuuluu.bind(golfie)();
                zuuluu = report.bind(oscard)(zuuluu);
                tangon = tangon == zuuluu;
                michal = undefined;
                if(tangon) { _fun00002_ip = 91; continue _fun00001 }
 85:
                michal = zuuluu.bot;
 91:
                entity = entity === michal;
                return entity;
 97:
                entity = false;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useIsAppDM'] = michal;
    return entity;
})();