// app/modules/applications/ApplicationFrecencyStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot13 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: trackApplicationUsage
        tangon = argFoo;
        michal = _closure1_slot11;
        report = michal.pendingUsages;
        zuuluu = report.push;
        michal = {};
        michal['key'] = tangon;
        oscard = global;
        golfie = oscard.Date;
        oscard = golfie.now;
        oscard = oscard.bind(golfie)();
        michal['timestamp'] = oscard;
        michal = zuuluu.bind(report)(michal);
        zuuluu = _closure1_slot12;
        michal = zuuluu.track;
        michal = michal.bind(zuuluu)(tangon);
        michal = _closure1_slot12;
        entity = michal.compute;
        entity = entity.bind(michal)();
        entity = undefined;
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: handleUserSettingsProtoStoreChange
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = _closure1_slot8;
            entity = entity.frecencyWithoutFetchingLatest;
            tangon = entity.applicationFrecency;
            zuuluu = null;
            report = zuuluu == tangon;
            entity = undefined;
            option = undefined;
            if(report) { _fun00004_ip = 38; continue _fun00003 }
 32:
            option = tangon.applications;
 38:
            if(!(zuuluu == option)) { _fun00004_ip = 44; continue _fun00003 }
 42:
            option = {};
 44:
            report = _closure1_slot12;
            tangon = report.overwriteHistory;
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 11;
            zuuluu = golfie[zuuluu];
            golfie = oscard.bind(entity)(zuuluu);
            oscard = golfie.mapValues;
            zuuluu = function(argFoo) {
                michal = argFoo;
                entity = {};
                oscard = entity;
                report = michal;
                zuuluu = copyDataProperties(oscard, report);
                tangon = michal.recentUses;
                zuuluu = tangon.map;
                michal = global;
                michal = michal.Number;
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = tangon.filter;
                michal = function(argFoo) {
                    michal = argFoo;
                    entity = 0;
                    entity = michal > entity;
                    return entity;
                };
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = 'recentUses';
                entity[michal] = zuuluu;
                return entity;
            };
            zuuluu = oscard.bind(golfie)(option, zuuluu);
            michal = _closure1_slot11;
            michal = michal.pendingUsages;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.FREQUENCY_ITEM_LIMIT;
    michal = 8;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.UserSettingsTypes;
    var _closure1_slot9 = michal;
    verify = 9;
    michal = oscard[verify];
    michal = report.bind(entity)(michal);
    michal = michal.ApplicationCommandType;
    offset = michal.CHAT;
    michal = new Array(2);
    michal[0] = offset;
    verify = oscard[verify];
    verify = report.bind(entity)(verify);
    verify = verify.ApplicationCommandType;
    verify = verify.PRIMARY_ENTRY_POINT;
    michal[1] = verify;
    var _closure1_slot10 = michal;
    michal = {};
    verify = new Array(0);
    michal['pendingUsages'] = verify;
    var _closure1_slot11 = michal;
    michal = 10;
    michal = oscard[michal];
    verify = golfie.bind(entity)(michal);
    michal = {};
    offset = function() { // Original name: computeBonus
        entity = 100;
        return entity;
    };
    michal['computeBonus'] = offset;
    offset = function(argFoo) { // Original name: computeWeight
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            oscard = argFoo;
            entity = 3;
            michal = oscard <= entity;
            entity = 100;
            if(michal) { _fun00006_ip = 80; continue _fun00005 }
 16:
            michal = 15;
            zuuluu = oscard <= michal;
            michal = 70;
            if(zuuluu) { _fun00006_ip = 77; continue _fun00005 }
 29:
            tangon = 30;
            report = oscard <= tangon;
            zuuluu = 50;
            if(report) { _fun00006_ip = 74; continue _fun00005 }
 42:
            report = 45;
            report = oscard <= report;
            if(report) { _fun00006_ip = 71; continue _fun00005 }
 52:
            report = 80;
            oscard = oscard <= report;
            report = 1;
            if(!oscard) { _fun00006_ip = 68; continue _fun00005 }
 65:
            report = 10;
 68:
            tangon = report;
 71:
            zuuluu = tangon;
 74:
            michal = zuuluu;
 77:
            entity = michal;
 80:
            return entity;
        }
    };
    michal['computeWeight'] = offset;
    offset = function(argFoo) { // Original name: lookupKey
        entity = argFoo;
        return entity;
    };
    michal['lookupKey'] = offset;
    offset = function() { // Original name: afterCompute
        entity = undefined;
        return entity;
    };
    michal['afterCompute'] = offset;
    michal['numFrequentlyItems'] = option;
    option = verify.prototype;
    option = Object.create(option, {constructor: {value: verify}});
    backup = option;
    foxtra = michal;
    michal = new backup[verify](foxtra, romeon);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot12 = michal;
    michal = 12;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.PersistedStore;
    michal = function(argFoo) {
        tangon = function() { // Original name: ApplicationFrecencyStore
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot2;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot5;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot4;
                entity = _closure1_slot13;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00008_ip = 69; continue _fun00007 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00008_ip = 105; continue _fun00007;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot5;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = argFoo;
                tangon = this;
                entity = null;
                if(!(entity != michal)) { _fun00010_ip = 19; continue _fun00009 }
 12:
                _closure1_slot11 = michal;
 19:
                zuuluu = tangon.waitFor;
                michal = _closure1_slot7;
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = tangon.syncWith;
                report = _closure1_slot8;
                michal = new Array(1);
                michal[0] = report;
                entity = _closure1_slot15;
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot11;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'hasPendingUsage';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot11;
            entity = entity.pendingUsages;
            michal = entity.length;
            entity = 0;
            entity = michal > entity;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getApplicationFrecencyWithoutLoadingLatest';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot12;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getScoreWithoutLoadingLatest';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = _closure1_slot12;
                michal = zuuluu.getScore;
                entity = argFoo;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                zuuluu = entity != michal;
                entity = 0;
                if(!zuuluu) { _fun00012_ip = 35; continue _fun00011 }
 32:
                entity = michal;
 35:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getTopApplicationsWithoutLoadingLatest';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot12;
            entity = entity.frequently;
            return entity;
        };
        report['value'] = oscard;
        entity[5] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'ApplicationFrecencyStore';
    option['displayName'] = michal;
    michal = 'ApplicationFrecency';
    option['persistKey'] = michal;
    michal = 13;
    michal = oscard[michal];
    foxtra = golfie.bind(entity)(michal);
    michal = {};
    verify = function(argFoo) { // Original name: handleApplicationCommandUsed
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.command;
            report = _closure1_slot10;
            michal = report.includes;
            entity = zuuluu.type;
            entity = michal.bind(report)(entity);
            michal = !entity;
            entity = !michal;
            if(michal) { _fun00014_ip = 102; continue _fun00013 }
 40:
            oscard = _closure1_slot7;
            report = oscard.getLaunchState;
            michal = zuuluu.applicationId;
            report = report.bind(oscard)(michal);
            michal = null;
            michal = michal == report;
            if(michal) { _fun00014_ip = 78; continue _fun00013 }
 69:
            report = report.isLaunching;
            michal = !report;
 78:
            if(!michal) { _fun00014_ip = 99; continue _fun00013 }
 81:
            report = _closure1_slot14;
            tangon = zuuluu.applicationId;
            zuuluu = undefined;
            tangon = report.bind(zuuluu)(tangon);
            michal = undefined;
 99:
            entity = michal;
 102:
            return entity;
        }
    };
    michal['APPLICATION_COMMAND_USED'] = verify;
    verify = function(argFoo) { // Original name: handleEmbeddedActivityOpen
        entity = argFoo;
        zuuluu = entity.applicationId;
        michal = _closure1_slot14;
        entity = undefined;
        michal = michal.bind(entity)(zuuluu);
        return entity;
    };
    michal['EMBEDDED_ACTIVITY_OPEN'] = verify;
    tangon = function(argFoo) { // Original name: handleUserSettingsProtoUpdate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            michal = entity.settings;
            tangon = michal.type;
            michal = entity.wasSaved;
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.FRECENCY_AND_FAVORITES_SETTINGS;
            if(!(tangon === zuuluu)) { _fun00016_ip = 58; continue _fun00015 }
 37:
            if(!michal) { _fun00016_ip = 58; continue _fun00015 }
 40:
            michal = _closure1_slot11;
            entity = new Array(0);
            michal['pendingUsages'] = entity;
            entity = undefined;
            return entity;
 58:
            entity = false;
            return entity;
        }
    };
    michal['USER_SETTINGS_PROTO_UPDATE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    backup = tangon;
    romeon = michal;
    michal = new backup[option](foxtra, romeon, yankee);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/applications/ApplicationFrecencyStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();