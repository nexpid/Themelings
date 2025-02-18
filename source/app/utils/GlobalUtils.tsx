// app/utils/GlobalUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'utils/GlobalUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: assertNever
        entity = global;
        zuuluu = entity.Error;
        entity = entity.HermesInternal;
        tangon = entity.concat;
        michal = 'Unhandled value: ';
        entity = argFoo;
        report = tangon.bind(michal)(entity);
        michal = zuuluu.prototype;
        michal = Object.create(michal, {constructor: {value: zuuluu}});
        oscard = michal;
        entity = new oscard[zuuluu](report, tangon);
        entity = entity instanceof Object ? entity : michal;
        throw entity;
    };
    zuuluu['assertNever'] = tangon;
    tangon = function(argFoo) { // Original name: isNotNullish
        michal = null;
        entity = argFoo;
        entity = michal != entity;
        return entity;
    };
    zuuluu['isNotNullish'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: areSetsEqual
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            tangon = argBar;
            var _closure2_slot0 = tangon;
            michal = oscard.size;
            entity = tangon.size;
            entity = michal === entity;
            if(!entity) { _fun00002_ip = 92; continue _fun00001 }
 29:
            michal = oscard.size;
            report = 0;
            michal = report === michal;
            if(!michal) { _fun00002_ip = 52; continue _fun00001 }
 43:
            tangon = tangon.size;
            michal = report === tangon;
 52:
            if(michal) { _fun00002_ip = 89; continue _fun00001 }
 55:
            tangon = global;
            report = tangon.Array;
            tangon = report.from;
            report = tangon.bind(report)(oscard);
            tangon = report.every;
            zuuluu = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.has;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = tangon.bind(report)(zuuluu);
 89:
            entity = michal;
 92:
            return entity;
        }
    };
    zuuluu['areSetsEqual'] = tangon;
    michal = function(argFoo, argBar) { // Original name: isIn
        zuuluu = argBar;
        michal = zuuluu.includes;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['isIn'] = michal;
    return entity;
})();