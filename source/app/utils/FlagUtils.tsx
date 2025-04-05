// app/utils/FlagUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    oscard = function(argFoo, argBar) { // Original name: hasFlag
        michal = argBar;
        entity = argFoo;
        entity = entity & michal;
        entity = entity === michal;
        return entity;
    };
    var _closure1_slot0 = oscard;
    report = function(argFoo, argBar) { // Original name: addFlag
        michal = argFoo;
        entity = argBar;
        entity = michal | entity;
        return entity;
    };
    var _closure1_slot1 = report;
    tangon = function(argFoo, argBar) { // Original name: removeFlag
        entity = argBar;
        michal = ~entity;
        entity = argFoo;
        entity = entity & michal;
        return entity;
    };
    var _closure1_slot2 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    golfie = argPlu;
    entity = 0;
    option = golfie[entity];
    golfie = argBar;
    entity = undefined;
    verify = golfie.bind(entity)(option);
    option = verify.fileFinishedImporting;
    golfie = 'utils/FlagUtils.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['hasFlag'] = oscard;
    oscard = function(argFoo, argBar) { // Original name: hasAnyFlag
        michal = argFoo;
        entity = argBar;
        entity = michal & entity;
        entity = !entity;
        entity = !entity;
        return entity;
    };
    zuuluu['hasAnyFlag'] = oscard;
    zuuluu['addFlag'] = report;
    zuuluu['removeFlag'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: removeFlags
        oscard = 1;
        tangon = copyRestArgs(oscard);
        zuuluu = tangon.reduce;
        michal = function(argFoo, argBar) {
            tangon = _closure1_slot2;
            zuuluu = undefined;
            michal = argFoo;
            entity = argBar;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        entity = argFoo;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['removeFlags'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: setFlag
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            entity = argBaz;
            if(entity) { _fun00002_ip = 29; continue _fun00001 }
 15:
            zuuluu = _closure1_slot2;
            entity = undefined;
            entity = zuuluu.bind(entity)(report, tangon);
            _fun00002_ip = 41; continue _fun00001;
 29:
            zuuluu = _closure1_slot1;
            michal = undefined;
            entity = zuuluu.bind(michal)(report, tangon);
 41:
            return entity;
        }
    };
    zuuluu['setFlag'] = tangon;
    michal = function(argFoo, argBar) { // Original name: toggleFlag
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            entity = _closure1_slot0;
            zuuluu = undefined;
            entity = entity.bind(zuuluu)(report, tangon);
            if(entity) { _fun00004_ip = 36; continue _fun00003 }
 24:
            entity = _closure1_slot1;
            entity = entity.bind(zuuluu)(report, tangon);
            _fun00004_ip = 46; continue _fun00003;
 36:
            michal = _closure1_slot2;
            entity = michal.bind(zuuluu)(report, tangon);
 46:
            return entity;
        }
    };
    zuuluu['toggleFlag'] = michal;
    return entity;
})();