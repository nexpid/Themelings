// app/modules/soundboard/useCustomJoinSound.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = function(argFoo, argBar) { // Original name: _getCustomJoinSound
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argBar;
            entity = argFoo;
            michal = oscard[entity];
            report = null;
            zuuluu = report == michal;
            tangon = undefined;
            if(zuuluu) { _fun00002_ip = 27; continue _fun00001 }
 21:
            tangon = michal.joinSound;
 27:
            michal = _closure1_slot3;
            michal = oscard[michal];
            golfie = report == michal;
            oscard = undefined;
            if(golfie) { _fun00002_ip = 53; continue _fun00001 }
 47:
            oscard = michal.joinSound;
 53:
            if(!(report != tangon)) { _fun00002_ip = 60; continue _fun00001 }
 57:
            oscard = tangon;
 60:
            michal = report != oscard;
            entity = undefined;
            if(!michal) { _fun00002_ip = 119; continue _fun00001 }
 69:
            michal = {};
            verify = michal;
            option = oscard;
            oscard = copyDataProperties(verify, option);
            if(!(report == tangon)) { _fun00002_ip = 97; continue _fun00001 }
 85:
            tangon = _closure1_slot4;
            tangon = tangon.GLOBAL;
            _fun00002_ip = 107; continue _fun00001;
 97:
            zuuluu = _closure1_slot4;
            tangon = zuuluu.GUILD;
 107:
            zuuluu = 'type';
            michal[zuuluu] = tangon;
            entity = michal;
 119:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    verify = 0;
    report = golfie[verify];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot2 = tangon;
    option = 1;
    tangon = golfie[option];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID;
    var _closure1_slot3 = tangon;
    tangon = {};
    tangon['GLOBAL'] = verify;
    report = 'GLOBAL';
    tangon[verify] = report;
    tangon['GUILD'] = option;
    report = 'GUILD';
    tangon[option] = report;
    var _closure1_slot4 = tangon;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/soundboard/useCustomJoinSound.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['CustomSoundType'] = tangon;
    tangon = function(argFoo) { // Original name: useCustomJoinSound
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 2;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot2;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = _closure1_slot2;
                michal = michal.settings;
                report = michal.guilds;
                michal = null;
                oscard = michal == report;
                tangon = undefined;
                zuuluu = undefined;
                if(oscard) { _fun00004_ip = 38; continue _fun00003 }
 32:
                zuuluu = report.guilds;
 38:
                if(!(michal == zuuluu)) { _fun00004_ip = 44; continue _fun00003 }
 42:
                zuuluu = {};
 44:
                michal = _closure1_slot5;
                entity = _closure2_slot0;
                entity = michal.bind(tangon)(entity, zuuluu);
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useCustomJoinSound'] = tangon;
    michal = function(argFoo) { // Original name: getCustomJoinSound
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot5;
            entity = _closure1_slot2;
            entity = entity.settings;
            report = entity.guilds;
            entity = null;
            oscard = entity == report;
            zuuluu = undefined;
            michal = undefined;
            if(oscard) { _fun00006_ip = 42; continue _fun00005 }
 36:
            michal = report.guilds;
 42:
            if(!(entity == michal)) { _fun00006_ip = 48; continue _fun00005 }
 46:
            michal = {};
 48:
            entity = argFoo;
            entity = tangon.bind(zuuluu)(entity, michal);
            return entity;
        }
    };
    zuuluu['getCustomJoinSound'] = michal;
    return entity;
})();