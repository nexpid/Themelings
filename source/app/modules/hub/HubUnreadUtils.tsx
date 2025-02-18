// app/modules/hub/HubUnreadUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/hub/HubUnreadUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useHubUnreadCount
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 2;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        golfie = _closure1_slot3;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        michal = _closure1_slot4;
        zuuluu[1] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure2_slot0;
                golfie = null;
                if(!(golfie != michal)) { _fun00002_ip = 174; continue _fun00001 }
 18:
                oscard = _closure1_slot4;
                report = oscard.ackMessageId;
                zuuluu = _closure2_slot0;
                zuuluu = zuuluu.id;
                zuuluu = report.bind(oscard)(zuuluu);
                var _closure3_slot0 = zuuluu;
                if(!(golfie != zuuluu)) { _fun00002_ip = 170; continue _fun00001 }
 53:
                zuuluu = global;
                oscard = zuuluu.Object;
                report = oscard.values;
                verify = _closure1_slot3;
                option = verify.getDirectoryEntries;
                tangon = _closure2_slot0;
                tangon = tangon.id;
                tangon = option.bind(verify)(tangon);
                if(!(golfie == tangon)) { _fun00002_ip = 96; continue _fun00001 }
 94:
                tangon = {};
 96:
                report = report.bind(oscard)(tangon);
                tangon = report.filter;
                entity = function(argFoo) {
                    entity = global;
                    zuuluu = entity.Date;
                    entity = argFoo;
                    report = entity.createdAt;
                    michal = zuuluu.prototype;
                    michal = Object.create(michal, {constructor: {value: zuuluu}});
                    oscard = michal;
                    entity = new oscard[zuuluu](report, tangon);
                    michal = entity instanceof Object ? entity : michal;
                    entity = michal.getTime;
                    michal = entity.bind(michal)();
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 3;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.extractTimestamp;
                    entity = _closure3_slot0;
                    entity = zuuluu.bind(tangon)(entity);
                    entity = michal > entity;
                    return entity;
                };
                entity = tangon.bind(report)(entity);
                tangon = zuuluu.Math;
                zuuluu = tangon.min;
                oscard = _closure1_slot0;
                report = _closure1_slot2;
                michal = 4;
                report = report[michal];
                michal = undefined;
                michal = oscard.bind(michal)(report);
                michal = michal.MAX_CATEGORY_SERVERS;
                entity = entity.length;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
 170:
                entity = 0;
                return entity;
 174:
                entity = 0;
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useHubUnreadCount'] = michal;
    return entity;
})();