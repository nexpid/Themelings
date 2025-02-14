// app/stores/FrecencyStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun79070: for(var _fun79070_ip = 0; ; ) switch(_fun79070_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot19;
            entity = entity.bind(zulu)();
            if(entity) { _fun79070_ip = 51; continue _fun79070 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun79070_ip = 92; continue _fun79070;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun79070_ip = 71; continue _fun79070 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun79071: for(var _fun79071_ip = 0; ; ) switch(_fun79071_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun79071_ip = 76; continue _fun79071;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot19 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    offset = function(argFoo) { // Original name: handleChannelSelect
        _fun79074: for(var _fun79074_ip = 0; ; ) switch(_fun79074_ip) {
 0:
            entity = argFoo;
            oscar = entity.guildId;
            options = entity.channelId;
            tango = _closure1_slot15;
            mike = false;
            if(!(options !== tango)) { _fun79074_ip = 137; continue _fun79074 }
 26:
            tango = null;
            golf = tango != options;
            report = null;
            if(!golf) { _fun79074_ip = 40; continue _fun79074 }
 37:
            report = options;
 40:
            _closure1_slot15 = report;
            tango = tango != options;
            if(!tango) { _fun79074_ip = 65; continue _fun79074 }
 51:
            golf = _closure1_slot12;
            report = golf.test;
            tango = report.bind(golf)(options);
 65:
            entity = false;
            if(!tango) { _fun79074_ip = 134; continue _fun79074 }
 70:
            report = _closure1_slot14;
            tango = report.track;
            tango = tango.bind(report)(options);
            tango = _closure1_slot17;
            golf = tango.pendingUsages;
            report = golf.push;
            tango = {};
            tango['key'] = options;
            options = global;
            verify = options.Date;
            options = verify.now;
            options = options.bind(verify)();
            tango['timestamp'] = options;
            tango = report.bind(golf)(tango);
            entity = true;
 134:
            mike = entity;
 137:
            tango = _closure1_slot16;
            entity = mike;
            if(!(oscar !== tango)) { _fun79074_ip = 257; continue _fun79074 }
 148:
            tango = null;
            golf = tango != oscar;
            report = null;
            if(!golf) { _fun79074_ip = 162; continue _fun79074 }
 159:
            report = oscar;
 162:
            _closure1_slot16 = report;
            tango = tango != oscar;
            if(!tango) { _fun79074_ip = 187; continue _fun79074 }
 173:
            golf = _closure1_slot12;
            report = golf.test;
            tango = report.bind(golf)(oscar);
 187:
            if(!tango) { _fun79074_ip = 254; continue _fun79074 }
 190:
            report = _closure1_slot14;
            tango = report.track;
            tango = tango.bind(report)(oscar);
            zulu = _closure1_slot17;
            report = zulu.pendingUsages;
            tango = report.push;
            zulu = {};
            zulu['key'] = oscar;
            oscar = global;
            golf = oscar.Date;
            oscar = golf.now;
            oscar = oscar.bind(golf)();
            zulu['timestamp'] = oscar;
            zulu = tango.bind(report)(zulu);
            mike = true;
 254:
            entity = mike;
 257:
            return entity;
        }
    };
    entity = function() { // Original name: initFrecency
        _fun79075: for(var _fun79075_ip = 0; ; ) switch(_fun79075_ip) {
 0:
            entity = _closure1_slot7;
            entity = entity.frecencyWithoutFetchingLatest;
            tango = entity.guildAndChannelFrecency;
            zulu = null;
            report = zulu == tango;
            entity = undefined;
            options = undefined;
            if(report) { _fun79075_ip = 38; continue _fun79075 }
 32:
            options = tango.guildAndChannels;
 38:
            if(!(zulu != options)) { _fun79075_ip = 111; continue _fun79075 }
 42:
            report = _closure1_slot14;
            tango = report.overwriteHistory;
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            zulu = 13;
            zulu = golf[zulu];
            golf = oscar.bind(entity)(zulu);
            oscar = golf.mapValues;
            zulu = function(argFoo) {
                mike = argFoo;
                entity = {};
                oscar = entity;
                report = mike;
                zulu = copyDataProperties(oscar, report);
                tango = mike.recentUses;
                zulu = tango.map;
                mike = global;
                mike = mike.Number;
                tango = zulu.bind(tango)(mike);
                zulu = tango.filter;
                mike = function(argFoo) {
                    mike = argFoo;
                    entity = 0;
                    entity = mike > entity;
                    return entity;
                };
                zulu = zulu.bind(tango)(mike);
                mike = 'recentUses';
                entity[mike] = zulu;
                return entity;
            };
            zulu = oscar.bind(golf)(options, zulu);
            mike = _closure1_slot17;
            mike = mike.pendingUsages;
            mike = tango.bind(report)(zulu, mike);
            return entity;
 111:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = global;
    verify = entity.Object;
    tango = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 4;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 5;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 6;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 7;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 8;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 9;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot11 = mike;
    verify = 10;
    mike = golf[verify];
    mike = oscar.bind(entity)(mike);
    mike = mike.ID_REGEX;
    var _closure1_slot12 = mike;
    mike = 11;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.UserSettingsTypes;
    var _closure1_slot13 = mike;
    mike = 12;
    mike = golf[mike];
    yankee = options.bind(entity)(mike);
    tango = {};
    mike = function() { // Original name: computeBonus
        entity = 100;
        return entity;
    };
    tango['computeBonus'] = mike;
    mike = function(argFoo) { // Original name: computeWeight
        _fun79079: for(var _fun79079_ip = 0; ; ) switch(_fun79079_ip) {
 0:
            tango = argFoo;
            entity = 100;
            mike = 0;
            if(!(mike !== tango)) { _fun79079_ip = 88; continue _fun79079 }
 12:
            zulu = 1;
            if(!(tango >= zulu)) { _fun79079_ip = 32; continue _fun79079 }
 19:
            mike = 2;
            mike = tango < mike;
            entity = 70;
            if(mike) { _fun79079_ip = 88; continue _fun79079 }
 32:
            mike = 2;
            if(!(tango >= mike)) { _fun79079_ip = 52; continue _fun79079 }
 39:
            mike = 4;
            mike = tango < mike;
            entity = 50;
            if(mike) { _fun79079_ip = 88; continue _fun79079 }
 52:
            mike = 4;
            if(!(tango >= mike)) { _fun79079_ip = 72; continue _fun79079 }
 59:
            mike = 7;
            mike = tango < mike;
            entity = 30;
            if(mike) { _fun79079_ip = 88; continue _fun79079 }
 72:
            mike = 7;
            mike = tango >= mike;
            entity = zulu;
            if(!mike) { _fun79079_ip = 88; continue _fun79079 }
 85:
            entity = 10;
 88:
            return entity;
        }
    };
    tango['computeWeight'] = mike;
    mike = function(argFoo) { // Original name: lookupKey
        _fun79080: for(var _fun79080_ip = 0; ; ) switch(_fun79080_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot9;
            entity = zulu.getGuild;
            entity = entity.bind(zulu)(report);
            zulu = null;
            if(!(zulu == entity)) { _fun79080_ip = 40; continue _fun79080 }
 26:
            oscar = _closure1_slot8;
            tango = oscar.getChannel;
            entity = tango.bind(oscar)(report);
 40:
            if(!(zulu == entity)) { _fun79080_ip = 69; continue _fun79080 }
 44:
            tango = _closure1_slot8;
            zulu = tango.getChannel;
            mike = tango.getDMFromUserId;
            mike = mike.bind(tango)(report);
            entity = zulu.bind(tango)(mike);
 69:
            return entity;
        }
    };
    tango['lookupKey'] = mike;
    mike = function() { // Original name: afterCompute
        entity = undefined;
        return entity;
    };
    tango['afterCompute'] = mike;
    mike = 100;
    tango['numFrequentlyItems'] = mike;
    tango['maxSamples'] = verify;
    verify = yankee.prototype;
    verify = Object.create(verify, {constructor: {value: yankee}});
    sizing = verify;
    kilo = tango;
    tango = new sizing[yankee](kilo, backup);
    tango = tango instanceof Object ? tango : verify;
    var _closure1_slot14 = tango;
    tango = null;
    var _closure1_slot15 = tango;
    var _closure1_slot16 = tango;
    tango = {};
    verify = new Array(0);
    tango['pendingUsages'] = verify;
    var _closure1_slot17 = tango;
    tango = 14;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    verify = tango.PersistedStore;
    tango = function(argFoo) {
        tango = function() { // Original name: FrecencyStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot18;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun79084: for(var _fun79084_ip = 0; ; ) switch(_fun79084_ip) {
 0:
                mike = argFoo;
                tango = this;
                oscar = tango.waitFor;
                report = _closure1_slot11;
                zulu = _closure1_slot10;
                zulu = oscar.bind(tango)(report, zulu);
                zulu = null;
                if(!(zulu != mike)) { _fun79084_ip = 70; continue _fun79084 }
 35:
                oscar = mike.pendingUsages;
                report = oscar.filter;
                zulu = function(argFoo) {
                    _fun79085: for(var _fun79085_ip = 0; ; ) switch(_fun79085_ip) {
 0:
                        mike = argFoo;
                        entity = null;
                        entity = entity != mike;
                        if(!entity) { _fun79085_ip = 34; continue _fun79085 }
 12:
                        tango = _closure1_slot12;
                        zulu = tango.test;
                        mike = mike.key;
                        entity = zulu.bind(tango)(mike);
 34:
                        return entity;
                    }
                };
                zulu = report.bind(oscar)(zulu);
                mike['pendingUsages'] = zulu;
                _closure1_slot17 = mike;
 70:
                zulu = tango.syncWith;
                report = _closure1_slot7;
                mike = new Array(1);
                mike[0] = report;
                entity = _closure1_slot20;
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(9);
        entity[0] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot17;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'hasPendingUsage';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot17;
            entity = entity.pendingUsages;
            mike = entity.length;
            entity = 0;
            entity = mike > entity;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'frecencyWithoutFetchingLatest';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot14;
            return entity;
        };
        report['get'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getFrequentlyWithoutFetchingLatest';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot14;
            entity = entity.frequently;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getScoreWithoutFetchingLatest';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun79090: for(var _fun79090_ip = 0; ; ) switch(_fun79090_ip) {
 0:
                zulu = _closure1_slot14;
                mike = zulu.getFrecency;
                entity = argFoo;
                mike = mike.bind(zulu)(entity);
                entity = null;
                zulu = entity != mike;
                entity = 0;
                if(!zulu) { _fun79090_ip = 37; continue _fun79090 }
 34:
                entity = mike;
 37:
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getScoreForDMWithoutFetchingLatest';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun79091: for(var _fun79091_ip = 0; ; ) switch(_fun79091_ip) {
 0:
                tango = this;
                zulu = _closure1_slot8;
                mike = zulu.getDMFromUserId;
                entity = argFoo;
                zulu = mike.bind(zulu)(entity);
                entity = null;
                mike = entity != zulu;
                entity = 0;
                if(!mike) { _fun79091_ip = 46; continue _fun79091 }
 35:
                mike = tango.getScoreWithoutFetchingLatest;
                entity = mike.bind(tango)(zulu);
 46:
                return entity;
            }
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'getMaxScore';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = 1000;
            return entity;
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'getBonusScore';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = 100;
            return entity;
        };
        report['value'] = oscar;
        entity[8] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    verify = tango.bind(entity)(verify);
    tango = 'FrecencyStore';
    verify['displayName'] = tango;
    verify['persistKey'] = tango;
    tango = 15;
    tango = golf[tango];
    kilo = options.bind(entity)(tango);
    tango = {};
    tango['CHANNEL_SELECT'] = offset;
    tango['VOICE_CHANNEL_SELECT'] = offset;
    report = function(argFoo) { // Original name: handleUserSettingsProtoUpdate
        _fun79094: for(var _fun79094_ip = 0; ; ) switch(_fun79094_ip) {
 0:
            entity = argFoo;
            mike = entity.settings;
            tango = mike.type;
            entity = entity.wasSaved;
            zulu = _closure1_slot13;
            zulu = zulu.FRECENCY_AND_FAVORITES_SETTINGS;
            zulu = tango !== zulu;
            if(zulu) { _fun79094_ip = 43; continue _fun79094 }
 40:
            zulu = !entity;
 43:
            entity = !zulu;
            if(zulu) { _fun79094_ip = 65; continue _fun79094 }
 49:
            zulu = _closure1_slot17;
            mike = new Array(0);
            zulu['pendingUsages'] = mike;
            entity = true;
 65:
            return entity;
        }
    };
    tango['USER_SETTINGS_PROTO_UPDATE'] = report;
    report = verify.prototype;
    report = Object.create(report, {constructor: {value: verify}});
    sizing = report;
    backup = tango;
    tango = new sizing[verify](kilo, backup, foxtrot);
    tango = tango instanceof Object ? tango : report;
    report = 16;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'stores/FrecencyStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['MAX_NUM_SELECTED_ITEMS'] = mike;
    return entity;
})();