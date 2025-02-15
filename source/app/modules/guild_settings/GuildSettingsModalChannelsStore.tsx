// app/modules/guild_settings/GuildSettingsModalChannelsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot27;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot27 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo, argBar) { // Original name: sortCategoryList
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            zulu = entity.position;
            report = entity.type;
            entity = argBar;
            entity = entity.channel;
            mike = entity.position;
            golf = entity.type;
            if(!(report !== golf)) { _fun00006_ip = 118; continue _fun00005 }
 40:
            tango = _closure1_slot9;
            oscar = undefined;
            tango = tango.bind(oscar)(report);
            if(!tango) { _fun00006_ip = 69; continue _fun00005 }
 57:
            tango = _closure1_slot9;
            tango = tango.bind(oscar)(golf);
            if(tango) { _fun00006_ip = 118; continue _fun00005 }
 69:
            tango = _closure1_slot10;
            tango = tango.bind(oscar)(report);
            if(!tango) { _fun00006_ip = 93; continue _fun00005 }
 81:
            tango = _closure1_slot10;
            tango = tango.bind(oscar)(golf);
            if(tango) { _fun00006_ip = 118; continue _fun00005 }
 93:
            entity = _closure1_slot15;
            tango = entity.GUILD_TEXT;
            entity = 1;
            if(!(report === tango)) { _fun00006_ip = 116; continue _fun00005 }
 110:
            entity = -1;
 116:
            _fun00006_ip = 122; continue _fun00005;
 118:
            entity = zulu - mike;
 122:
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo, argBar) { // Original name: setIndex
        mike = argBar;
        entity = argFoo;
        entity['index'] = mike;
        entity = undefined;
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function() { // Original name: buildSortedChannels
        zulu = {};
        mike = new Array(0);
        zulu['_categories'] = mike;
        mike = new Array(0);
        zulu['null'] = mike;
        _closure1_slot19 = zulu;
        zulu = global;
        report = zulu.Object;
        tango = report.keys;
        zulu = _closure1_slot23;
        report = tango.bind(report)(zulu);
        tango = report.forEach;
        zulu = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = _closure1_slot23;
                entity = argFoo;
                entity = zulu[entity];
                tango = null;
                if(!(tango != entity)) { _fun00008_ip = 218; continue _fun00007 }
 23:
                zulu = _closure1_slot19;
                if(!(tango != zulu)) { _fun00008_ip = 218; continue _fun00007 }
 34:
                report = entity.type;
                zulu = _closure1_slot15;
                zulu = zulu.GUILD_CATEGORY;
                if(!(report !== zulu)) { _fun00008_ip = 148; continue _fun00007 }
 53:
                zulu = global;
                oscar = zulu.String;
                zulu = entity.parent_id;
                golf = tango != zulu;
                report = 'null';
                if(!golf) { _fun00008_ip = 81; continue _fun00007 }
 78:
                report = zulu;
 81:
                zulu = undefined;
                report = oscar.bind(zulu)(report);
                zulu = _closure1_slot19;
                zulu = zulu[report];
                if(!(tango == zulu)) { _fun00008_ip = 112; continue _fun00007 }
 100:
                oscar = _closure1_slot19;
                zulu = new Array(0);
                oscar[report] = zulu;
 112:
                zulu = _closure1_slot19;
                oscar = zulu[report];
                report = oscar.push;
                zulu = {};
                zulu['channel'] = entity;
                golf = -1;
                zulu['index'] = golf;
                zulu = report.bind(oscar)(zulu);
                _fun00008_ip = 218; continue _fun00007;
 148:
                zulu = _closure1_slot19;
                oscar = zulu._categories;
                report = oscar.push;
                zulu = {};
                zulu['channel'] = entity;
                golf = -1;
                zulu['index'] = golf;
                zulu = report.bind(oscar)(zulu);
                report = _closure1_slot19;
                zulu = entity.id;
                zulu = report[zulu];
                if(!(tango == zulu)) { _fun00008_ip = 218; continue _fun00007 }
 201:
                zulu = _closure1_slot19;
                mike = entity.id;
                entity = new Array(0);
                zulu[mike] = entity;
 218:
                entity = undefined;
                return entity;
            }
        };
        zulu = tango.bind(report)(zulu);
        zulu = _closure1_slot19;
        report = zulu._categories;
        tango = report.sort;
        zulu = _closure1_slot28;
        zulu = tango.bind(report)(zulu);
        zulu = _closure1_slot19;
        tango = zulu._categories;
        zulu = tango.forEach;
        entity = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = argFoo;
                zulu = entity.channel;
                tango = _closure1_slot19;
                mike = null;
                if(!(mike != tango)) { _fun00010_ip = 57; continue _fun00009 }
 21:
                if(!(mike != zulu)) { _fun00010_ip = 57; continue _fun00009 }
 25:
                tango = _closure1_slot19;
                zulu = zulu.id;
                zulu = tango[zulu];
                if(!(mike != zulu)) { _fun00010_ip = 57; continue _fun00009 }
 42:
                mike = zulu.sort;
                entity = _closure1_slot28;
                entity = mike.bind(zulu)(entity);
 57:
                entity = undefined;
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity);
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 10;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        zulu = _closure1_slot19;
        tango = zulu._categories;
        zulu = _closure1_slot19;
        report = report.bind(entity)(tango, zulu);
        tango = report.forEach;
        zulu = _closure1_slot29;
        zulu = tango.bind(report)(zulu);
        mike = _closure1_slot32;
        mike = mike.bind(entity)();
        return entity;
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: rebuildChannels
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = _closure1_slot13;
            tango = report.getChannels;
            zulu = _closure1_slot17;
            tango = tango.bind(report)(zulu);
            zulu = _closure1_slot20;
            if(!(tango !== zulu)) { _fun00012_ip = 135; continue _fun00011 }
 32:
            _closure1_slot20 = tango;
            zulu = {};
            _closure1_slot23 = zulu;
            zulu = _closure1_slot11;
            oscar = tango[zulu];
            report = oscar.forEach;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.channel;
                zulu = _closure1_slot23;
                mike = entity.id;
                zulu[mike] = entity;
                return entity;
            };
            zulu = report.bind(oscar)(zulu);
            zulu = _closure1_slot12;
            oscar = tango[zulu];
            report = oscar.forEach;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.channel;
                zulu = _closure1_slot23;
                mike = entity.id;
                zulu[mike] = entity;
                return entity;
            };
            zulu = report.bind(oscar)(zulu);
            zulu = _closure1_slot15;
            zulu = zulu.GUILD_CATEGORY;
            tango = tango[zulu];
            zulu = tango.forEach;
            mike = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.channel;
                    mike = zulu.id;
                    entity = 'null';
                    entity = entity === mike;
                    if(entity) { _fun00014_ip = 53; continue _fun00013 }
 24:
                    report = _closure1_slot14;
                    tango = report.can;
                    mike = _closure1_slot16;
                    mike = mike.VIEW_CHANNEL;
                    entity = tango.bind(report)(mike, zulu);
 53:
                    if(!entity) { _fun00014_ip = 72; continue _fun00013 }
 56:
                    mike = _closure1_slot23;
                    entity = zulu.id;
                    mike[entity] = zulu;
 72:
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            mike = _closure1_slot30;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
 135:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function() { // Original name: setupSortLists
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tango = _closure1_slot19;
            zulu = null;
            if(!(zulu != tango)) { _fun00016_ip = 90; continue _fun00015 }
 15:
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 10;
            zulu = report[zulu];
            golf = undefined;
            oscar = tango.bind(golf)(zulu);
            zulu = _closure1_slot19;
            report = zulu._categories;
            tango = _closure1_slot19;
            zulu = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.channel;
                    mike = zulu.type;
                    entity = _closure1_slot15;
                    entity = entity.GUILD_CATEGORY;
                    entity = mike === entity;
                    if(entity) { _fun00018_ip = 68; continue _fun00017 }
 33:
                    report = _closure1_slot21;
                    mike = null;
                    mike = mike != report;
                    if(!mike) { _fun00018_ip = 65; continue _fun00017 }
 46:
                    report = _closure1_slot21;
                    tango = report.has;
                    zulu = zulu.type;
                    mike = tango.bind(report)(zulu);
 65:
                    entity = mike;
 68:
                    return entity;
                }
            };
            tango = oscar.bind(golf)(report, tango, zulu);
            _closure1_slot22 = tango;
            zulu = tango.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.channel;
                entity = entity.id;
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            _closure1_slot18 = entity;
 90:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    entity = ['lock_permissions', 'id'];
    var _closure1_slot2 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.isGuildSelectableChannelType;
    var _closure1_slot9 = options;
    mike = mike.isGuildVocalChannelType;
    var _closure1_slot10 = mike;
    mike = 7;
    options = oscar[mike];
    options = report.bind(entity)(options);
    verify = options.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot11 = verify;
    options = options.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot12 = options;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot13 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot14 = mike;
    mike = 9;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.ChannelTypes;
    var _closure1_slot15 = options;
    mike = mike.Permissions;
    var _closure1_slot16 = mike;
    mike = null;
    var _closure1_slot17 = mike;
    var _closure1_slot18 = mike;
    var _closure1_slot19 = mike;
    var _closure1_slot20 = mike;
    var _closure1_slot21 = mike;
    var _closure1_slot22 = mike;
    mike = {};
    var _closure1_slot23 = mike;
    mike = 11;
    mike = oscar[mike];
    offset = golf.bind(entity)(mike);
    verify = offset.debounce;
    options = function() {
        zulu = _closure1_slot31;
        entity = undefined;
        zulu = zulu.bind(entity)();
        zulu = _closure1_slot25;
        mike = zulu.emitChange;
        mike = mike.bind(zulu)();
        return entity;
    };
    mike = 500;
    mike = verify.bind(offset)(options, mike);
    var _closure1_slot24 = mike;
    mike = 12;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: GuildSettingsModalChannelsStoreClass
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot26;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tango = this;
            zulu = tango.waitFor;
            mike = _closure1_slot13;
            mike = zulu.bind(tango)(mike);
            zulu = tango.syncWith;
            entity = _closure1_slot13;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                mike = _closure1_slot24;
                entity = undefined;
                entity = mike.bind(entity)();
                entity = false;
                return entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golf = 'initGuild';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = argFoo;
            _closure1_slot17 = mike;
            mike = _closure1_slot31;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'channels';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot19;
            return entity;
        };
        report['get'] = golf;
        entity[2] = report;
        report = {};
        golf = 'order';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot18;
            return entity;
        };
        report['get'] = golf;
        entity[3] = report;
        report = {};
        golf = 'sortingType';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot21;
            return entity;
        };
        report['get'] = golf;
        entity[4] = report;
        report = {};
        golf = 'channelList';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot22;
            return entity;
        };
        report['get'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getLocalChannel';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            mike = _closure1_slot23;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = oscar;
        entity[6] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    verify = mike.bind(entity)(options);
    mike = 'GuildSettingsModalChannelsStore';
    verify['displayName'] = mike;
    mike = 13;
    mike = oscar[mike];
    foxtrot = golf.bind(entity)(mike);
    mike = {};
    golf = function() { // Original name: handleTerminate
        entity = null;
        _closure1_slot17 = entity;
        _closure1_slot18 = entity;
        _closure1_slot19 = entity;
        _closure1_slot21 = entity;
        _closure1_slot22 = entity;
        _closure1_slot20 = entity;
        entity = undefined;
        return entity;
    };
    mike['GUILD_SETTINGS_MODAL_CHANNELS_TERMINATE'] = golf;
    golf = function(argFoo) { // Original name: handleStartReorder
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            tango = entity.sortingType;
            zulu = _closure1_slot19;
            mike = null;
            if(!(mike != zulu)) { _fun00020_ip = 69; continue _fun00019 }
 22:
            mike = global;
            mike = mike.Set;
            zulu = mike.prototype;
            zulu = Object.create(zulu, {constructor: {value: mike}});
            oscar = zulu;
            report = tango;
            mike = new oscar[mike](report, tango);
            mike = mike instanceof Object ? mike : zulu;
            _closure1_slot21 = mike;
            mike = _closure1_slot32;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
 69:
            entity = false;
            return entity;
        }
    };
    mike['GUILD_SETTINGS_MODAL_CHANNELS_START_REORDER'] = golf;
    golf = function() { // Original name: handleStopReorder
        mike = null;
        _closure1_slot21 = mike;
        mike = _closure1_slot32;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['GUILD_SETTINGS_MODAL_CHANNELS_STOP_REORDER'] = golf;
    golf = function(argFoo) { // Original name: handleLocalSortChange
        entity = argFoo;
        zulu = entity.updates;
        mike = zulu.forEach;
        entity = function(argFoo) {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = argFoo;
                zulu = _closure1_slot23;
                mike = entity.id;
                zulu = zulu[mike];
                mike = null;
                if(!(mike != zulu)) { _fun00022_ip = 89; continue _fun00021 }
 25:
                mike = entity.lock_permissions;
                mike = entity.id;
                report = _closure1_slot8;
                zulu = _closure1_slot2;
                mike = undefined;
                report = report.bind(mike)(entity, zulu);
                zulu = _closure1_slot23;
                mike = entity.id;
                tango = _closure1_slot23;
                entity = entity.id;
                tango = tango[entity];
                entity = tango.merge;
                entity = entity.bind(tango)(report);
                zulu[mike] = entity;
 89:
                entity = undefined;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        mike = _closure1_slot30;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['GUILD_SETTINGS_MODAL_LOCAL_SORT_CHANGE'] = golf;
    golf = verify.prototype;
    golf = Object.create(golf, {constructor: {value: verify}});
    backup = golf;
    romeo = mike;
    mike = new backup[verify](foxtrot, romeo, yankee);
    mike = mike instanceof Object ? mike : golf;
    var _closure1_slot25 = mike;
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_settings/GuildSettingsModalChannelsStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();