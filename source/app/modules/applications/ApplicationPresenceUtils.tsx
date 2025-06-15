// app/modules/applications/ApplicationPresenceUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot0 = tangon;
    tangon = 1;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/applications/ApplicationPresenceUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: shouldDisableUserPresenceInChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            tangon = _closure1_slot0;
            zuuluu = tangon.getChannel;
            entity = argBar;
            tangon = zuuluu.bind(tangon)(entity);
            zuuluu = null;
            entity = zuuluu != tangon;
            if(!entity) { _fun00002_ip = 44; continue _fun00001 }
 38:
            entity = report.bot;
 44:
            if(!entity) { _fun00002_ip = 57; continue _fun00001 }
 47:
            report = tangon.isPrivate;
            entity = report.bind(tangon)();
 57:
            if(!entity) { _fun00002_ip = 86; continue _fun00001 }
 60:
            report = tangon.rawRecipients;
            tangon = report.find;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal === entity;
                return entity;
            };
            michal = tangon.bind(report)(michal);
            entity = zuuluu == michal;
 86:
            return entity;
        }
    };
    zuuluu['shouldDisableUserPresenceInChannel'] = michal;
    return entity;
})();