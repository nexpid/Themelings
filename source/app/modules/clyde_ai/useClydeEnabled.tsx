// app/modules/clyde_ai/useClydeEnabled.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    offset = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    oscard = function(argFoo) { // Original name: useClydeExperiment
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            report = arguments[1];
            entity = arguments[2];
            tangon = undefined;
            if(!(report === tangon)) { _fun00002_ip = 17; continue _fun00001 }
 15:
            report = false;
 17:
            if(!(entity === tangon)) { _fun00002_ip = 27; continue _fun00001 }
 21:
            entity = '1e9ccc_1';
 27:
            michal = null;
            golfie = michal == zuuluu;
            oscard = undefined;
            if(golfie) { _fun00002_ip = 43; continue _fun00001 }
 38:
            oscard = zuuluu.id;
 43:
            if(!(michal == oscard)) { _fun00002_ip = 54; continue _fun00001 }
 47:
            oscard = _closure1_slot6;
 54:
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 5;
            michal = golfie[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.useExperiment;
            michal = {};
            michal['guildId'] = oscard;
            michal['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = entity.experimentState;
            return entity;
        }
    };
    var _closure1_slot9 = oscard;
    report = function(argFoo, argBar, argBaz) { // Original name: checkClydeEnabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = null;
            entity = argBar;
            if(!(michal != entity)) { _fun00004_ip = 97; continue _fun00003 }
 15:
            entity = michal != tangon;
            if(!entity) { _fun00004_ip = 63; continue _fun00003 }
 22:
            golfie = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 5;
            report = report[zuuluu];
            zuuluu = undefined;
            zuuluu = golfie.bind(zuuluu)(report);
            zuuluu = zuuluu.ClydeExperimentState;
            zuuluu = zuuluu.None;
            entity = tangon !== zuuluu;
 63:
            if(!entity) { _fun00004_ip = 95; continue _fun00003 }
 66:
            report = _closure1_slot5;
            tangon = report.can;
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.USE_CLYDE_AI;
            entity = tangon.bind(report)(zuuluu, oscard);
 95:
            _fun00004_ip = 194; continue _fun00003;
 97:
            zuuluu = michal == oscard;
            if(zuuluu) { _fun00004_ip = 117; continue _fun00003 }
 104:
            michal = oscard.isPrivate;
            michal = michal.bind(oscard)();
            zuuluu = !michal;
 117:
            michal = !zuuluu;
            if(zuuluu) { _fun00004_ip = 191; continue _fun00003 }
 123:
            report = oscard.hasFlag;
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.CLYDE_AI;
            zuuluu = report.bind(oscard)(zuuluu);
            report = !zuuluu;
            zuuluu = !report;
            if(!report) { _fun00004_ip = 188; continue _fun00003 }
 156:
            report = _closure1_slot4;
            tangon = report.getGuildIds;
            oscard = tangon.bind(report)();
            report = oscard.some;
            tangon = function(argFoo) {
                zuuluu = _closure1_slot11;
                tangon = _closure1_slot4;
                michal = tangon.getGuild;
                entity = argFoo;
                michal = michal.bind(tangon)(entity);
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            zuuluu = report.bind(oscard)(tangon);
 188:
            michal = zuuluu;
 191:
            entity = michal;
 194:
            return entity;
        }
    };
    var _closure1_slot10 = report;
    tangon = function(argFoo) { // Original name: getClydeExperimentEnabled
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = arguments[1];
            tangon = undefined;
            if(!(report === tangon)) { _fun00006_ip = 11; continue _fun00005 }
 9:
            report = false;
 11:
            zuuluu = _closure1_slot12;
            michal = argFoo;
            michal = zuuluu.bind(tangon)(michal, report);
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 5;
            entity = report[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.ClydeExperimentState;
            entity = entity.None;
            entity = michal !== entity;
            return entity;
        }
    };
    var _closure1_slot11 = tangon;
    entity = function(argFoo) { // Original name: getClydeExperimentState
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            report = arguments[1];
            tangon = undefined;
            if(!(report === tangon)) { _fun00008_ip = 14; continue _fun00007 }
 12:
            report = false;
 14:
            michal = null;
            if(!(michal != entity)) { _fun00008_ip = 91; continue _fun00007 }
 20:
            entity = entity.id;
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 5;
            michal = oscard[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.getCurrentConfig;
            michal = {};
            michal['guildId'] = entity;
            entity = '1e9ccc_4';
            michal['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = entity.experimentState;
            return entity;
 91:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, golfie);
    entity = 0;
    golfie = verify[entity];
    entity = undefined;
    golfie = option.bind(entity)(golfie);
    golfie = golfie.useMemo;
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 2;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    golfie = 3;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    offset = golfie.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot6 = offset;
    golfie = golfie.Permissions;
    var _closure1_slot7 = golfie;
    golfie = 4;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.ChannelFlags;
    var _closure1_slot8 = golfie;
    golfie = 7;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/clyde_ai/useClydeEnabled.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['useClydeExperiment'] = oscard;
    oscard = function(argFoo) { // Original name: useClydeExperimentEnabled
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = arguments[1];
            tangon = undefined;
            if(!(report === tangon)) { _fun00010_ip = 11; continue _fun00009 }
 9:
            report = false;
 11:
            zuuluu = _closure1_slot9;
            michal = argFoo;
            michal = zuuluu.bind(tangon)(michal, report);
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 5;
            entity = report[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.ClydeExperimentState;
            entity = entity.None;
            entity = michal !== entity;
            return entity;
        }
    };
    zuuluu['useClydeExperimentEnabled'] = oscard;
    oscard = function(argFoo) { // Original name: useClydeProfilesEnabled
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            oscard = arguments[1];
            tangon = undefined;
            if(!(oscard === tangon)) { _fun00012_ip = 11; continue _fun00011 }
 9:
            oscard = false;
 11:
            report = _closure1_slot9;
            zuuluu = argFoo;
            michal = arguments[2];
            michal = report.bind(tangon)(zuuluu, oscard, michal);
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 5;
            entity = report[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.ClydeExperimentState;
            entity = entity.ClydeProfiles;
            entity = michal === entity;
            return entity;
        }
    };
    zuuluu['useClydeProfilesEnabled'] = oscard;
    oscard = function(argFoo, argBar) { // Original name: useClydeEnabled
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = argFoo;
            michal = arguments[2];
            tangon = undefined;
            if(!(michal === tangon)) { _fun00014_ip = 14; continue _fun00013 }
 12:
            michal = false;
 14:
            zuuluu = _closure1_slot10;
            entity = _closure1_slot9;
            michal = entity.bind(tangon)(report, michal);
            entity = argBar;
            entity = zuuluu.bind(tangon)(michal, report, entity);
            return entity;
        }
    };
    zuuluu['useClydeEnabled'] = oscard;
    oscard = function() { // Original name: useIsPartOfGuildWithCustomClydeProfilesEnabled
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 6;
        zuuluu = tangon[zuuluu];
        tangon = undefined;
        golfie = report.bind(tangon)(zuuluu);
        oscard = golfie.useStateFromStoresArray;
        zuuluu = _closure1_slot4;
        report = new Array(1);
        report[0] = zuuluu;
        zuuluu = _closure1_slot4;
        zuuluu = zuuluu.getGuildIds;
        report = oscard.bind(golfie)(report, zuuluu);
        var _closure2_slot0 = report;
        zuuluu = _closure1_slot3;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            zuuluu = _closure2_slot0;
            michal = zuuluu.some;
            entity = function(argFoo) {
                report = _closure1_slot12;
                tangon = _closure1_slot4;
                zuuluu = tangon.getGuild;
                michal = argFoo;
                zuuluu = zuuluu.bind(tangon)(michal);
                tangon = undefined;
                michal = false;
                michal = report.bind(tangon)(zuuluu, michal);
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                entity = 5;
                entity = report[entity];
                entity = zuuluu.bind(tangon)(entity);
                entity = entity.ClydeExperimentState;
                entity = entity.ClydeProfiles;
                entity = michal === entity;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useIsPartOfGuildWithCustomClydeProfilesEnabled'] = oscard;
    zuuluu['checkClydeEnabled'] = report;
    report = function(argFoo, argBar) { // Original name: getClydeEnabled
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            report = argFoo;
            option = arguments[2];
            tangon = undefined;
            if(!(option === tangon)) { _fun00016_ip = 14; continue _fun00015 }
 12:
            option = false;
 14:
            michal = null;
            zuuluu = michal == report;
            entity = undefined;
            if(zuuluu) { _fun00016_ip = 30; continue _fun00015 }
 25:
            entity = report.id;
 30:
            if(!(michal == entity)) { _fun00016_ip = 41; continue _fun00015 }
 34:
            entity = _closure1_slot6;
 41:
            zuuluu = _closure1_slot10;
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 5;
            michal = golfie[michal];
            golfie = oscard.bind(tangon)(michal);
            oscard = golfie.getCurrentConfig;
            michal = {};
            michal['guildId'] = entity;
            entity = '1e9ccc_2';
            michal['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = option;
            entity = oscard.bind(golfie)(michal, entity);
            michal = entity.experimentState;
            entity = argBar;
            entity = zuuluu.bind(tangon)(michal, report, entity);
            return entity;
        }
    };
    zuuluu['getClydeEnabled'] = report;
    report = function(argFoo) { // Original name: getClydeExperimentBucket
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.getCurrentConfig;
        michal = {};
        entity = argFoo;
        michal['guildId'] = entity;
        entity = '1e9ccc_3';
        michal['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = entity.experimentState;
        return entity;
    };
    zuuluu['getClydeExperimentBucket'] = report;
    zuuluu['getClydeExperimentEnabled'] = tangon;
    michal = function(argFoo) { // Original name: canUseCustomClydeProfiles
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            report = arguments[1];
            tangon = undefined;
            if(!(report === tangon)) { _fun00018_ip = 11; continue _fun00017 }
 9:
            report = false;
 11:
            zuuluu = _closure1_slot12;
            michal = argFoo;
            michal = zuuluu.bind(tangon)(michal, report);
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 5;
            entity = report[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.ClydeExperimentState;
            entity = entity.ClydeProfiles;
            entity = michal === entity;
            return entity;
        }
    };
    zuuluu['canUseCustomClydeProfiles'] = michal;
    return entity;
})();