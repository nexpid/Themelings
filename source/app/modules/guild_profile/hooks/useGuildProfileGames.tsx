// app/modules/guild_profile/hooks/useGuildProfileGames.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golfie;
    michal = function(argFoo) { // Original name: useAllGuildProfileGames
        tangon = _closure1_slot1;
        report = _closure1_slot2;
        zuuluu = 1;
        zuuluu = report[zuuluu];
        report = undefined;
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = argFoo;
        zuuluu = zuuluu.gameApplicationIds;
        report = tangon.bind(report)(zuuluu);
        var _closure2_slot0 = report;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            zuuluu = _closure2_slot0;
            michal = zuuluu.filter;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 2;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.isNotNullish;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot4 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot3 = report;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_profile/hooks/useGuildProfileGames.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: useGuildProfileGames
        oscard = argFoo;
        entity = oscard.gameActivity;
        var _closure2_slot0 = entity;
        report = _closure1_slot4;
        tangon = undefined;
        golfie = report.bind(tangon)(oscard);
        var _closure2_slot1 = golfie;
        oscard = _closure1_slot3;
        report = oscard.useMemo;
        tangon = new Array(2);
        tangon[0] = golfie;
        tangon[1] = entity;
        entity = function() {
            tangon = _closure2_slot0;
            zuuluu = function(argFoo) { // Original name: gameActivitySorter
                michal = argFoo;
                var _closure4_slot0 = michal;
                entity = function(argFoo, argBar) {
                    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                        michal = _closure4_slot0;
                        entity = argFoo;
                        entity = entity.id;
                        entity = michal[entity];
                        michal = null;
                        zuuluu = michal == entity;
                        oscard = undefined;
                        if(zuuluu) { _fun00002_ip = 36; continue _fun00001 }
 30:
                        oscard = entity.score;
 36:
                        golfie = michal != oscard;
                        zuuluu = 0;
                        if(!golfie) { _fun00002_ip = 48; continue _fun00001 }
 45:
                        zuuluu = oscard;
 48:
                        oscard = _closure4_slot0;
                        report = argBar;
                        report = report.id;
                        report = oscard[report];
                        oscard = michal == report;
                        tangon = undefined;
                        if(oscard) { _fun00002_ip = 79; continue _fun00001 }
 73:
                        tangon = report.score;
 79:
                        report = michal != tangon;
                        michal = 0;
                        if(!report) { _fun00002_ip = 91; continue _fun00001 }
 88:
                        michal = tangon;
 91:
                        entity = 0;
                        if(!(zuuluu !== michal)) { _fun00002_ip = 101; continue _fun00001 }
 97:
                        entity = michal - zuuluu;
 101:
                        return entity;
                    }
                };
                return entity;
            };
            michal = undefined;
            zuuluu = zuuluu.bind(michal)(tangon);
            entity = _closure2_slot1;
            michal = entity.sort;
            michal = michal.bind(entity)(zuuluu);
            return entity;
        };
        oscard = report.bind(oscard)(entity, tangon);
        var _closure2_slot2 = oscard;
        entity = {};
        option = _closure1_slot3;
        golfie = option.useMemo;
        report = new Array(1);
        report[0] = oscard;
        tangon = function() {
            tangon = _closure2_slot2;
            zuuluu = tangon.slice;
            michal = 0;
            entity = 5;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        tangon = golfie.bind(option)(tangon, report);
        entity['gamesToDisplay'] = tangon;
        option = _closure1_slot3;
        golfie = option.useMemo;
        report = new Array(1);
        report[0] = oscard;
        tangon = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = _closure2_slot2;
                entity = 5;
                michal = michal[entity];
                entity = null;
                zuuluu = entity != michal;
                if(!zuuluu) { _fun00004_ip = 26; continue _fun00003 }
 23:
                entity = michal;
 26:
                return entity;
            }
        };
        tangon = golfie.bind(option)(tangon, report);
        entity['lastGameToDisplay'] = tangon;
        report = _closure1_slot3;
        tangon = report.useMemo;
        zuuluu = new Array(1);
        zuuluu[0] = oscard;
        michal = function() {
            zuuluu = _closure2_slot2;
            michal = zuuluu.slice;
            entity = 5;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = tangon.bind(report)(michal, zuuluu);
        entity['remainingGames'] = michal;
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['useAllGuildProfileGames'] = michal;
    return entity;
})();