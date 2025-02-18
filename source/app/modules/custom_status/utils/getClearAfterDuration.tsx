// app/modules/custom_status/utils/getClearAfterDuration.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ClearAfterValues;
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/custom_status/utils/getClearAfterDuration.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getClearAfterDuration
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu.TODAY;
            if(!(entity !== zuuluu)) { _fun00002_ip = 67; continue _fun00001 }
 20:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 1;
            michal = tangon[michal];
            report = undefined;
            tangon = zuuluu.bind(report)(michal);
            zuuluu = 'number';
            michal = typeof entity;
            zuuluu = zuuluu === michal;
            michal = 'Invalid custom status clear timeout';
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
 67:
            entity = global;
            michal = entity.Date;
            zuuluu = michal.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
            offset = zuuluu;
            michal = new offset[michal](verify);
            zuuluu = michal instanceof Object ? michal : zuuluu;
            oscard = entity.Date;
            entity = zuuluu.getFullYear;
            verify = entity.bind(zuuluu)();
            entity = zuuluu.getMonth;
            option = entity.bind(zuuluu)();
            entity = zuuluu.getDate;
            michal = entity.bind(zuuluu)();
            entity = 1;
            golfie = michal + entity;
            michal = oscard.prototype;
            michal = Object.create(michal, {constructor: {value: oscard}});
            offset = michal;
            entity = new offset[oscard](verify, option, golfie, oscard);
            michal = entity instanceof Object ? entity : michal;
            entity = michal.getTime;
            michal = entity.bind(michal)();
            entity = zuuluu.getTime;
            entity = entity.bind(zuuluu)();
            entity = michal - entity;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();