// app/modules/guilds_bar/usePendingFolderGuildIds.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function() { // Original name: getPendingFolderGuildIds
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = arguments[0];
            michal = undefined;
            if(!(zuuluu === michal)) { _fun00002_ip = 37; continue _fun00001 }
 11:
            oscard = _closure1_slot2;
            tangon = new Array(2);
            tangon[0] = oscard;
            report = _closure1_slot3;
            tangon[1] = report;
            zuuluu = tangon;
 37:
            golfie = zuuluu;
            report = golfie[Symbol.iterator];
            golfie = report().next;
            tangon = golfie().value;
            zuuluu = report;
            oscard = zuuluu === michal;
            zuuluu = undefined;
            if(oscard) { _fun00002_ip = 62; continue _fun00001 }
 59:
            zuuluu = tangon;
 62:
            tangon = undefined;
            if(oscard) { _fun00002_ip = 92; continue _fun00001 }
 67:
            option = golfie().value;
            golfie = report;
            golfie = golfie === michal;
            tangon = undefined;
            oscard = golfie;
            if(golfie) { _fun00002_ip = 92; continue _fun00001 }
 86:
            tangon = option;
            oscard = golfie;
 92:
            if(oscard) { _fun00002_ip = 98; continue _fun00001 }
 95:
            report.return();
 98:
            var _closure2_slot0 = michal;
            michal = zuuluu.computeGuildIds;
            zuuluu = michal.bind(zuuluu)();
            michal = tangon.getGuilds;
            michal = michal.bind(tangon)();
            _closure2_slot0 = michal;
            michal = zuuluu.filter;
            entity = function(argFoo) {
                michal = _closure2_slot0;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                entity = entity == michal;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot4 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guilds_bar/usePendingFolderGuildIds.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function() { // Original name: usePendingFolderGuildIds
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 2;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStoresArray;
        report = _closure1_slot2;
        michal = new Array(2);
        michal[0] = report;
        entity = _closure1_slot3;
        michal[1] = entity;
        entity = function() {
            zuuluu = _closure1_slot4;
            tangon = _closure1_slot2;
            michal = new Array(2);
            michal[0] = tangon;
            entity = _closure1_slot3;
            michal[1] = entity;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['getPendingFolderGuildIds'] = michal;
    return entity;
})();