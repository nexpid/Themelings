// discord_common/js/packages/type-utils/TypeUtils.tsx
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
    tangon = '../discord_common/js/packages/type-utils/TypeUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: exact
        entity = argFoo;
        return entity;
    };
    zuuluu['exact'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: hasOwnProperty
        zuuluu = argFoo;
        michal = zuuluu.hasOwnProperty;
        entity = argBar;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['hasOwnProperty'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: dangerouslyCast
        entity = global;
        tangon = entity.Object;
        zuuluu = tangon.setPrototypeOf;
        entity = argBar;
        michal = entity.prototype;
        entity = argFoo;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['dangerouslyCast'] = tangon;
    tangon = function(argFoo) { // Original name: assertUnreachable
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = arguments[1];
            entity = undefined;
            if(!(michal === entity)) { _fun00002_ip = 11; continue _fun00001 }
 9:
            michal = {};
 11:
            michal = michal.andFail;
            if(!(michal === entity)) { _fun00002_ip = 23; continue _fun00001 }
 21:
            michal = true;
 23:
            if(michal) { _fun00002_ip = 28; continue _fun00001 }
 26:
            return entity;
 28:
            entity = global;
            entity = entity.Error;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            tangon = michal;
            entity = new tangon[entity](zuuluu);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    zuuluu['assertUnreachable'] = tangon;
    michal = function(argFoo) { // Original name: arrayIsNotEmpty
        entity = argFoo;
        michal = entity.length;
        entity = 0;
        entity = michal > entity;
        return entity;
    };
    zuuluu['arrayIsNotEmpty'] = michal;
    return entity;
})();