// app/modules/guild_settings_picker/useFilteredGuilds.tsx
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
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_settings_picker/useFilteredGuilds.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useFilteredGuilds
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.isGuildIncluded;
            var _closure2_slot0 = verify;
            tangon = entity.selectedGuildId;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            entity = 4;
            zuuluu = option[entity];
            michal = undefined;
            romeon = golfie.bind(michal)(zuuluu);
            yankee = romeon.useStateFromStores;
            zuuluu = _closure1_slot5;
            offset = new Array(1);
            offset[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot5;
                entity = michal.getFlattenedGuildIds;
                entity = entity.bind(michal)();
                return entity;
            };
            yankee = yankee.bind(romeon)(offset, zuuluu);
            var _closure2_slot1 = yankee;
            zuuluu = option[entity];
            foxtra = golfie.bind(michal)(zuuluu);
            romeon = foxtra.useStateFromStores;
            zuuluu = _closure1_slot4;
            offset = new Array(1);
            offset[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot4;
                entity = michal.getGuilds;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = romeon.bind(foxtra)(offset, zuuluu);
            var _closure2_slot2 = zuuluu;
            entity = option[entity];
            offset = golfie.bind(michal)(entity);
            option = offset.useStateFromStores;
            entity = _closure1_slot6;
            golfie = new Array(1);
            golfie[0] = entity;
            entity = function() {
                michal = _closure1_slot6;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            offset = option.bind(offset)(golfie, entity);
            var _closure2_slot3 = offset;
            entity = {};
            option = _closure1_slot3;
            golfie = option.useMemo;
            oscard = new Array(4);
            oscard[0] = yankee;
            oscard[1] = zuuluu;
            oscard[2] = offset;
            oscard[3] = verify;
            report = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot3;
                    tangon = null;
                    if(!(tangon != zuuluu)) { _fun00004_ip = 69; continue _fun00003 }
 15:
                    zuuluu = _closure2_slot0;
                    if(!(tangon != zuuluu)) { _fun00004_ip = 46; continue _fun00003 }
 23:
                    report = _closure2_slot1;
                    tangon = report.filter;
                    zuuluu = function(argFoo) {
                        zuuluu = _closure2_slot2;
                        michal = argFoo;
                        tangon = zuuluu[michal];
                        report = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        michal = 5;
                        michal = zuuluu[michal];
                        zuuluu = undefined;
                        oscard = report.bind(zuuluu)(michal);
                        michal = null;
                        report = michal != tangon;
                        michal = 'guild should not be null';
                        michal = oscard.bind(zuuluu)(report, michal);
                        michal = _closure2_slot0;
                        entity = _closure2_slot3;
                        entity = michal.bind(zuuluu)(tangon, entity);
                        return entity;
                    };
                    zuuluu = tangon.bind(report)(zuuluu);
                    _fun00004_ip = 50; continue _fun00003;
 46:
                    zuuluu = _closure2_slot1;
 50:
                    michal = zuuluu.map;
                    entity = function(argFoo) {
                        michal = _closure2_slot2;
                        entity = argFoo;
                        michal = michal[entity];
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot2;
                        entity = 5;
                        entity = tangon[entity];
                        report = undefined;
                        tangon = zuuluu.bind(report)(entity);
                        entity = null;
                        zuuluu = entity != michal;
                        entity = 'guild should not be null';
                        entity = tangon.bind(report)(zuuluu, entity);
                        entity = {};
                        zuuluu = michal.name;
                        entity['label'] = zuuluu;
                        michal = michal.id;
                        entity['value'] = michal;
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    _fun00004_ip = 73; continue _fun00003;
 69:
                    entity = new Array(0);
 73:
                    return entity;
                }
            };
            report = golfie.bind(option)(report, oscard);
            entity['options'] = report;
            report = null;
            report = report == tangon;
            if(report) { _fun00002_ip = 227; continue _fun00001 }
 223:
            michal = zuuluu[tangon];
 227:
            entity['selectedGuild'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();