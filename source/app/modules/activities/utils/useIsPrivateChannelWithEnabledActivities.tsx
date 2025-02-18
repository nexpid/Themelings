// app/modules/activities/utils/useIsPrivateChannelWithEnabledActivities.tsx
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
    tangon = 'modules/activities/utils/useIsPrivateChannelWithEnabledActivities.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useIsPrivateChannelWithEnabledActivities
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 1;
            tangon = tangon[michal];
            michal = undefined;
            report = report.bind(michal)(tangon);
            tangon = report.useStateFromStores;
            oscard = _closure1_slot2;
            zuuluu = new Array(1);
            zuuluu[0] = oscard;
            entity = function() {
                zuuluu = _closure1_slot2;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu, entity);
            entity = null;
            zuuluu = entity == tangon;
            if(zuuluu) { _fun00002_ip = 81; continue _fun00001 }
 71:
            zuuluu = tangon.isPrivate;
            michal = zuuluu.bind(tangon)();
 81:
            entity = entity != michal;
            if(!entity) { _fun00002_ip = 91; continue _fun00001 }
 88:
            entity = michal;
 91:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: isPrivateChannelWithEnabledActivities
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            entity = null;
            if(!(entity != tangon)) { _fun00004_ip = 57; continue _fun00003 }
 9:
            zuuluu = _closure1_slot2;
            michal = zuuluu.getChannel;
            tangon = michal.bind(zuuluu)(tangon);
            zuuluu = entity == tangon;
            michal = undefined;
            if(zuuluu) { _fun00004_ip = 45; continue _fun00003 }
 35:
            zuuluu = tangon.isPrivate;
            michal = zuuluu.bind(tangon)();
 45:
            entity = entity != michal;
            if(!entity) { _fun00004_ip = 55; continue _fun00003 }
 52:
            entity = michal;
 55:
            return entity;
 57:
            entity = false;
            return entity;
        }
    };
    zuuluu['isPrivateChannelWithEnabledActivities'] = michal;
    return entity;
})();