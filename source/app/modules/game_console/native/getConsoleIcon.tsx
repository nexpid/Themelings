// app/modules/game_console/native/getConsoleIcon.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    verify = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = verify;
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
    option = tangon.PlatformTypes;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.VoicePlatforms;
    var _closure1_slot2 = tangon;
    tangon = {};
    offset = option.XBOX;
    golfie = 2;
    golfie = oscard[golfie];
    golfie = verify.bind(entity)(golfie);
    tangon[offset] = golfie;
    yankee = option.PLAYSTATION;
    golfie = 3;
    offset = oscard[golfie];
    offset = verify.bind(entity)(offset);
    tangon[yankee] = offset;
    option = option.PLAYSTATION_STAGING;
    golfie = oscard[golfie];
    golfie = verify.bind(entity)(golfie);
    tangon[option] = golfie;
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/game_console/native/getConsoleIcon.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getConsoleIcon
        michal = _closure1_slot3;
        entity = argFoo;
        entity = michal[entity];
        return entity;
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: getConsoleIconForVoicePlatform
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            entity = _closure1_slot2;
            entity = entity.XBOX;
            if(!(tangon !== entity)) { _fun00002_ip = 60; continue _fun00001 }
 20:
            entity = _closure1_slot2;
            zuuluu = entity.PLAYSTATION;
            entity = null;
            if(!(tangon === zuuluu)) { _fun00002_ip = 58; continue _fun00001 }
 36:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 3;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            entity = report.bind(zuuluu)(tangon);
 58:
            _fun00002_ip = 82; continue _fun00001;
 60:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            entity = tangon.bind(michal)(zuuluu);
 82:
            return entity;
        }
    };
    zuuluu['getConsoleIconForVoicePlatform'] = michal;
    return entity;
})();