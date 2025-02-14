// app/modules/clyde_ai/useClydeEnabled.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    offset = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    oscar = function(argFoo) { // Original name: useClydeExperiment
        _fun61801: for(var _fun61801_ip = 0; ; ) switch(_fun61801_ip) {
 0:
            zulu = argFoo;
            report = arguments[1];
            entity = arguments[2];
            tango = undefined;
            if(!(report === tango)) { _fun61801_ip = 17; continue _fun61801 }
 15:
            report = false;
 17:
            if(!(entity === tango)) { _fun61801_ip = 27; continue _fun61801 }
 21:
            entity = '1e9ccc_1';
 27:
            mike = null;
            golf = mike == zulu;
            oscar = undefined;
            if(golf) { _fun61801_ip = 43; continue _fun61801 }
 38:
            oscar = zulu.id;
 43:
            if(!(mike == oscar)) { _fun61801_ip = 54; continue _fun61801 }
 47:
            oscar = _closure1_slot6;
 54:
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 5;
            mike = golf[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.useExperiment;
            mike = {};
            mike['guildId'] = oscar;
            mike['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = report;
            entity = zulu.bind(tango)(mike, entity);
            entity = entity.experimentState;
            return entity;
        }
    };
    var _closure1_slot9 = oscar;
    report = function(argFoo, argBar, argBaz) { // Original name: checkClydeEnabled
        _fun61802: for(var _fun61802_ip = 0; ; ) switch(_fun61802_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = null;
            entity = argBar;
            if(!(mike != entity)) { _fun61802_ip = 97; continue _fun61802 }
 15:
            entity = mike != tango;
            if(!entity) { _fun61802_ip = 63; continue _fun61802 }
 22:
            golf = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 5;
            report = report[zulu];
            zulu = undefined;
            zulu = golf.bind(zulu)(report);
            zulu = zulu.ClydeExperimentState;
            zulu = zulu.None;
            entity = tango !== zulu;
 63:
            if(!entity) { _fun61802_ip = 95; continue _fun61802 }
 66:
            report = _closure1_slot5;
            tango = report.can;
            zulu = _closure1_slot7;
            zulu = zulu.USE_CLYDE_AI;
            entity = tango.bind(report)(zulu, oscar);
 95:
            _fun61802_ip = 194; continue _fun61802;
 97:
            zulu = mike == oscar;
            if(zulu) { _fun61802_ip = 117; continue _fun61802 }
 104:
            mike = oscar.isPrivate;
            mike = mike.bind(oscar)();
            zulu = !mike;
 117:
            mike = !zulu;
            if(zulu) { _fun61802_ip = 191; continue _fun61802 }
 123:
            report = oscar.hasFlag;
            zulu = _closure1_slot8;
            zulu = zulu.CLYDE_AI;
            zulu = report.bind(oscar)(zulu);
            report = !zulu;
            zulu = !report;
            if(!report) { _fun61802_ip = 188; continue _fun61802 }
 156:
            report = _closure1_slot4;
            tango = report.getGuildIds;
            oscar = tango.bind(report)();
            report = oscar.some;
            tango = function(argFoo) {
                zulu = _closure1_slot11;
                tango = _closure1_slot4;
                mike = tango.getGuild;
                entity = argFoo;
                mike = mike.bind(tango)(entity);
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            zulu = report.bind(oscar)(tango);
 188:
            mike = zulu;
 191:
            entity = mike;
 194:
            return entity;
        }
    };
    var _closure1_slot10 = report;
    tango = function(argFoo) { // Original name: getClydeExperimentEnabled
        _fun61804: for(var _fun61804_ip = 0; ; ) switch(_fun61804_ip) {
 0:
            report = arguments[1];
            tango = undefined;
            if(!(report === tango)) { _fun61804_ip = 11; continue _fun61804 }
 9:
            report = false;
 11:
            zulu = _closure1_slot12;
            mike = argFoo;
            mike = zulu.bind(tango)(mike, report);
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 5;
            entity = report[entity];
            entity = zulu.bind(tango)(entity);
            entity = entity.ClydeExperimentState;
            entity = entity.None;
            entity = mike !== entity;
            return entity;
        }
    };
    var _closure1_slot11 = tango;
    entity = function(argFoo) { // Original name: getClydeExperimentState
        _fun61805: for(var _fun61805_ip = 0; ; ) switch(_fun61805_ip) {
 0:
            entity = argFoo;
            report = arguments[1];
            tango = undefined;
            if(!(report === tango)) { _fun61805_ip = 14; continue _fun61805 }
 12:
            report = false;
 14:
            mike = null;
            if(!(mike != entity)) { _fun61805_ip = 91; continue _fun61805 }
 20:
            entity = entity.id;
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 5;
            mike = oscar[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.getCurrentConfig;
            mike = {};
            mike['guildId'] = entity;
            entity = '1e9ccc_4';
            mike['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = report;
            entity = zulu.bind(tango)(mike, entity);
            entity = entity.experimentState;
            return entity;
 91:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, golf);
    entity = 0;
    golf = verify[entity];
    entity = undefined;
    golf = options.bind(entity)(golf);
    golf = golf.useMemo;
    var _closure1_slot3 = golf;
    golf = 1;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 2;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = 3;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    offset = golf.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot6 = offset;
    golf = golf.Permissions;
    var _closure1_slot7 = golf;
    golf = 4;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    golf = golf.ChannelFlags;
    var _closure1_slot8 = golf;
    golf = 7;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/clyde_ai/useClydeEnabled.tsx';
    golf = options.bind(verify)(golf);
    zulu['useClydeExperiment'] = oscar;
    oscar = function(argFoo) { // Original name: useClydeExperimentEnabled
        _fun61806: for(var _fun61806_ip = 0; ; ) switch(_fun61806_ip) {
 0:
            report = arguments[1];
            tango = undefined;
            if(!(report === tango)) { _fun61806_ip = 11; continue _fun61806 }
 9:
            report = false;
 11:
            zulu = _closure1_slot9;
            mike = argFoo;
            mike = zulu.bind(tango)(mike, report);
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 5;
            entity = report[entity];
            entity = zulu.bind(tango)(entity);
            entity = entity.ClydeExperimentState;
            entity = entity.None;
            entity = mike !== entity;
            return entity;
        }
    };
    zulu['useClydeExperimentEnabled'] = oscar;
    oscar = function(argFoo) { // Original name: useClydeProfilesEnabled
        _fun61807: for(var _fun61807_ip = 0; ; ) switch(_fun61807_ip) {
 0:
            oscar = arguments[1];
            tango = undefined;
            if(!(oscar === tango)) { _fun61807_ip = 11; continue _fun61807 }
 9:
            oscar = false;
 11:
            report = _closure1_slot9;
            zulu = argFoo;
            mike = arguments[2];
            mike = report.bind(tango)(zulu, oscar, mike);
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 5;
            entity = report[entity];
            entity = zulu.bind(tango)(entity);
            entity = entity.ClydeExperimentState;
            entity = entity.ClydeProfiles;
            entity = mike === entity;
            return entity;
        }
    };
    zulu['useClydeProfilesEnabled'] = oscar;
    oscar = function(argFoo, argBar) { // Original name: useClydeEnabled
        _fun61808: for(var _fun61808_ip = 0; ; ) switch(_fun61808_ip) {
 0:
            report = argFoo;
            mike = arguments[2];
            tango = undefined;
            if(!(mike === tango)) { _fun61808_ip = 14; continue _fun61808 }
 12:
            mike = false;
 14:
            zulu = _closure1_slot10;
            entity = _closure1_slot9;
            mike = entity.bind(tango)(report, mike);
            entity = argBar;
            entity = zulu.bind(tango)(mike, report, entity);
            return entity;
        }
    };
    zulu['useClydeEnabled'] = oscar;
    oscar = function() { // Original name: useIsPartOfGuildWithCustomClydeProfilesEnabled
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 6;
        zulu = tango[zulu];
        tango = undefined;
        golf = report.bind(tango)(zulu);
        oscar = golf.useStateFromStoresArray;
        zulu = _closure1_slot4;
        report = new Array(1);
        report[0] = zulu;
        zulu = _closure1_slot4;
        zulu = zulu.getGuildIds;
        report = oscar.bind(golf)(report, zulu);
        var _closure2_slot0 = report;
        zulu = _closure1_slot3;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            zulu = _closure2_slot0;
            mike = zulu.some;
            entity = function(argFoo) {
                report = _closure1_slot12;
                tango = _closure1_slot4;
                zulu = tango.getGuild;
                mike = argFoo;
                zulu = zulu.bind(tango)(mike);
                tango = undefined;
                mike = false;
                mike = report.bind(tango)(zulu, mike);
                zulu = _closure1_slot0;
                report = _closure1_slot2;
                entity = 5;
                entity = report[entity];
                entity = zulu.bind(tango)(entity);
                entity = entity.ClydeExperimentState;
                entity = entity.ClydeProfiles;
                entity = mike === entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useIsPartOfGuildWithCustomClydeProfilesEnabled'] = oscar;
    zulu['checkClydeEnabled'] = report;
    report = function(argFoo, argBar) { // Original name: getClydeEnabled
        _fun61812: for(var _fun61812_ip = 0; ; ) switch(_fun61812_ip) {
 0:
            report = argFoo;
            options = arguments[2];
            tango = undefined;
            if(!(options === tango)) { _fun61812_ip = 14; continue _fun61812 }
 12:
            options = false;
 14:
            mike = null;
            zulu = mike == report;
            entity = undefined;
            if(zulu) { _fun61812_ip = 30; continue _fun61812 }
 25:
            entity = report.id;
 30:
            if(!(mike == entity)) { _fun61812_ip = 41; continue _fun61812 }
 34:
            entity = _closure1_slot6;
 41:
            zulu = _closure1_slot10;
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 5;
            mike = golf[mike];
            golf = oscar.bind(tango)(mike);
            oscar = golf.getCurrentConfig;
            mike = {};
            mike['guildId'] = entity;
            entity = '1e9ccc_2';
            mike['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = options;
            entity = oscar.bind(golf)(mike, entity);
            mike = entity.experimentState;
            entity = argBar;
            entity = zulu.bind(tango)(mike, report, entity);
            return entity;
        }
    };
    zulu['getClydeEnabled'] = report;
    report = function(argFoo) { // Original name: getClydeExperimentBucket
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.getCurrentConfig;
        mike = {};
        entity = argFoo;
        mike['guildId'] = entity;
        entity = '1e9ccc_3';
        mike['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.experimentState;
        return entity;
    };
    zulu['getClydeExperimentBucket'] = report;
    zulu['getClydeExperimentEnabled'] = tango;
    mike = function(argFoo) { // Original name: canUseCustomClydeProfiles
        _fun61814: for(var _fun61814_ip = 0; ; ) switch(_fun61814_ip) {
 0:
            report = arguments[1];
            tango = undefined;
            if(!(report === tango)) { _fun61814_ip = 11; continue _fun61814 }
 9:
            report = false;
 11:
            zulu = _closure1_slot12;
            mike = argFoo;
            mike = zulu.bind(tango)(mike, report);
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 5;
            entity = report[entity];
            entity = zulu.bind(tango)(entity);
            entity = entity.ClydeExperimentState;
            entity = entity.ClydeProfiles;
            entity = mike === entity;
            return entity;
        }
    };
    zulu['canUseCustomClydeProfiles'] = mike;
    return entity;
})();