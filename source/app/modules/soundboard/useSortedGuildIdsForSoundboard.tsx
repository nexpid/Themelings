// app/modules/soundboard/useSortedGuildIdsForSoundboard.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot8 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/soundboard/useSortedGuildIdsForSoundboard.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useSortedGuildIdsForSoundboard
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            option = argBar;
            var _closure2_slot0 = tangon;
            var _closure2_slot1 = option;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            offset = 6;
            zuuluu = zuuluu[offset];
            report = undefined;
            verify = oscard.bind(report)(zuuluu);
            golfie = verify.useStateFromStores;
            zuuluu = _closure1_slot6;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot6;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            verify = golfie.bind(verify)(oscard, zuuluu);
            var _closure2_slot2 = verify;
            zuuluu = null;
            oscard = zuuluu == tangon;
            golfie = undefined;
            if(oscard) { _fun00002_ip = 91; continue _fun00001 }
 86:
            golfie = tangon.guild_id;
 91:
            if(!(zuuluu == golfie)) { _fun00002_ip = 99; continue _fun00001 }
 95:
            golfie = _closure1_slot7;
 99:
            var _closure2_slot3 = golfie;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            oscard = zuuluu[offset];
            foxtra = tangon.bind(report)(oscard);
            romeon = foxtra.useStateFromStores;
            oscard = _closure1_slot5;
            yankee = new Array(1);
            yankee[0] = oscard;
            oscard = function() {
                michal = _closure1_slot5;
                entity = michal.getFlattenedGuildIds;
                entity = entity.bind(michal)();
                return entity;
            };
            oscard = romeon.bind(foxtra)(yankee, oscard);
            var _closure2_slot4 = oscard;
            zuuluu = zuuluu[offset];
            offset = tangon.bind(report)(zuuluu);
            report = offset.useStateFromStores;
            zuuluu = _closure1_slot4;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot0;
                    tangon = null;
                    entity = tangon == entity;
                    if(entity) { _fun00004_ip = 29; continue _fun00003 }
 16:
                    zuuluu = _closure2_slot0;
                    zuuluu = zuuluu.guild_id;
                    entity = tangon == zuuluu;
 29:
                    if(entity) { _fun00004_ip = 65; continue _fun00003 }
 32:
                    report = _closure1_slot4;
                    tangon = report.can;
                    zuuluu = _closure1_slot8;
                    zuuluu = zuuluu.USE_EXTERNAL_SOUNDS;
                    michal = _closure2_slot0;
                    entity = tangon.bind(report)(zuuluu, michal);
 65:
                    return entity;
                }
            };
            report = report.bind(offset)(tangon, zuuluu);
            var _closure2_slot5 = report;
            tangon = _closure1_slot3;
            zuuluu = tangon.useMemo;
            michal = new Array(5);
            michal[0] = verify;
            michal[1] = option;
            michal[2] = golfie;
            michal[3] = oscard;
            michal[4] = report;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 7;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.canUseSoundboardEverywhere;
                    entity = _closure2_slot2;
                    entity = zuuluu.bind(tangon)(entity);
                    if(entity) { _fun00006_ip = 53; continue _fun00005 }
 46:
                    entity = _closure2_slot1;
                    if(entity) { _fun00006_ip = 60; continue _fun00005 }
 53:
                    entity = _closure2_slot5;
                    if(entity) { _fun00006_ip = 74; continue _fun00005 }
 60:
                    zuuluu = _closure2_slot3;
                    entity = new Array(1);
                    entity[0] = zuuluu;
                    return entity;
 74:
                    zuuluu = _closure2_slot3;
                    entity = '';
                    zuuluu = entity !== zuuluu;
                    oscard = _closure2_slot4;
                    if(zuuluu) { _fun00006_ip = 98; continue _fun00005 }
 93:
                    entity = oscard;
                    _fun00006_ip = 117; continue _fun00005;
 98:
                    report = oscard.filter;
                    tangon = function(argFoo) {
                        michal = _closure2_slot3;
                        entity = argFoo;
                        entity = entity !== michal;
                        return entity;
                    };
                    entity = report.bind(oscard)(tangon);
 117:
                    if(!zuuluu) { _fun00006_ip = 135; continue _fun00005 }
 120:
                    zuuluu = entity.unshift;
                    michal = _closure2_slot3;
                    michal = zuuluu.bind(entity)(michal);
 135:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['useSortedGuildIdsForSoundboard'] = michal;
    return entity;
})();