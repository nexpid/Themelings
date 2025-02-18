// app/modules/guild_settings/GuildSettingsModalChannelsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot27;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot27 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo, argBar) { // Original name: sortCategoryList
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            zuuluu = entity.position;
            report = entity.type;
            entity = argBar;
            entity = entity.channel;
            michal = entity.position;
            golfie = entity.type;
            if(!(report !== golfie)) { _fun00006_ip = 118; continue _fun00005 }
 40:
            tangon = _closure1_slot9;
            oscard = undefined;
            tangon = tangon.bind(oscard)(report);
            if(!tangon) { _fun00006_ip = 69; continue _fun00005 }
 57:
            tangon = _closure1_slot9;
            tangon = tangon.bind(oscard)(golfie);
            if(tangon) { _fun00006_ip = 118; continue _fun00005 }
 69:
            tangon = _closure1_slot10;
            tangon = tangon.bind(oscard)(report);
            if(!tangon) { _fun00006_ip = 93; continue _fun00005 }
 81:
            tangon = _closure1_slot10;
            tangon = tangon.bind(oscard)(golfie);
            if(tangon) { _fun00006_ip = 118; continue _fun00005 }
 93:
            entity = _closure1_slot15;
            tangon = entity.GUILD_TEXT;
            entity = 1;
            if(!(report === tangon)) { _fun00006_ip = 116; continue _fun00005 }
 110:
            entity = -1;
 116:
            _fun00006_ip = 122; continue _fun00005;
 118:
            entity = zuuluu - michal;
 122:
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo, argBar) { // Original name: setIndex
        michal = argBar;
        entity = argFoo;
        entity['index'] = michal;
        entity = undefined;
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function() { // Original name: buildSortedChannels
        zuuluu = {};
        michal = new Array(0);
        zuuluu['_categories'] = michal;
        michal = new Array(0);
        zuuluu['null'] = michal;
        _closure1_slot19 = zuuluu;
        zuuluu = global;
        report = zuuluu.Object;
        tangon = report.keys;
        zuuluu = _closure1_slot23;
        report = tangon.bind(report)(zuuluu);
        tangon = report.forEach;
        zuuluu = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = _closure1_slot23;
                entity = argFoo;
                entity = zuuluu[entity];
                tangon = null;
                if(!(tangon != entity)) { _fun00008_ip = 218; continue _fun00007 }
 23:
                zuuluu = _closure1_slot19;
                if(!(tangon != zuuluu)) { _fun00008_ip = 218; continue _fun00007 }
 34:
                report = entity.type;
                zuuluu = _closure1_slot15;
                zuuluu = zuuluu.GUILD_CATEGORY;
                if(!(report !== zuuluu)) { _fun00008_ip = 148; continue _fun00007 }
 53:
                zuuluu = global;
                oscard = zuuluu.String;
                zuuluu = entity.parent_id;
                golfie = tangon != zuuluu;
                report = 'null';
                if(!golfie) { _fun00008_ip = 81; continue _fun00007 }
 78:
                report = zuuluu;
 81:
                zuuluu = undefined;
                report = oscard.bind(zuuluu)(report);
                zuuluu = _closure1_slot19;
                zuuluu = zuuluu[report];
                if(!(tangon == zuuluu)) { _fun00008_ip = 112; continue _fun00007 }
 100:
                oscard = _closure1_slot19;
                zuuluu = new Array(0);
                oscard[report] = zuuluu;
 112:
                zuuluu = _closure1_slot19;
                oscard = zuuluu[report];
                report = oscard.push;
                zuuluu = {};
                zuuluu['channel'] = entity;
                golfie = -1;
                zuuluu['index'] = golfie;
                zuuluu = report.bind(oscard)(zuuluu);
                _fun00008_ip = 218; continue _fun00007;
 148:
                zuuluu = _closure1_slot19;
                oscard = zuuluu._categories;
                report = oscard.push;
                zuuluu = {};
                zuuluu['channel'] = entity;
                golfie = -1;
                zuuluu['index'] = golfie;
                zuuluu = report.bind(oscard)(zuuluu);
                report = _closure1_slot19;
                zuuluu = entity.id;
                zuuluu = report[zuuluu];
                if(!(tangon == zuuluu)) { _fun00008_ip = 218; continue _fun00007 }
 201:
                zuuluu = _closure1_slot19;
                michal = entity.id;
                entity = new Array(0);
                zuuluu[michal] = entity;
 218:
                entity = undefined;
                return entity;
            }
        };
        zuuluu = tangon.bind(report)(zuuluu);
        zuuluu = _closure1_slot19;
        report = zuuluu._categories;
        tangon = report.sort;
        zuuluu = _closure1_slot28;
        zuuluu = tangon.bind(report)(zuuluu);
        zuuluu = _closure1_slot19;
        tangon = zuuluu._categories;
        zuuluu = tangon.forEach;
        entity = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.channel;
                tangon = _closure1_slot19;
                michal = null;
                if(!(michal != tangon)) { _fun00010_ip = 57; continue _fun00009 }
 21:
                if(!(michal != zuuluu)) { _fun00010_ip = 57; continue _fun00009 }
 25:
                tangon = _closure1_slot19;
                zuuluu = zuuluu.id;
                zuuluu = tangon[zuuluu];
                if(!(michal != zuuluu)) { _fun00010_ip = 57; continue _fun00009 }
 42:
                michal = zuuluu.sort;
                entity = _closure1_slot28;
                entity = michal.bind(zuuluu)(entity);
 57:
                entity = undefined;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity);
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 10;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        zuuluu = _closure1_slot19;
        tangon = zuuluu._categories;
        zuuluu = _closure1_slot19;
        report = report.bind(entity)(tangon, zuuluu);
        tangon = report.forEach;
        zuuluu = _closure1_slot29;
        zuuluu = tangon.bind(report)(zuuluu);
        michal = _closure1_slot32;
        michal = michal.bind(entity)();
        return entity;
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: rebuildChannels
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = _closure1_slot13;
            tangon = report.getChannels;
            zuuluu = _closure1_slot17;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = _closure1_slot20;
            if(!(tangon !== zuuluu)) { _fun00012_ip = 135; continue _fun00011 }
 32:
            _closure1_slot20 = tangon;
            zuuluu = {};
            _closure1_slot23 = zuuluu;
            zuuluu = _closure1_slot11;
            oscard = tangon[zuuluu];
            report = oscard.forEach;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.channel;
                zuuluu = _closure1_slot23;
                michal = entity.id;
                zuuluu[michal] = entity;
                return entity;
            };
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = _closure1_slot12;
            oscard = tangon[zuuluu];
            report = oscard.forEach;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.channel;
                zuuluu = _closure1_slot23;
                michal = entity.id;
                zuuluu[michal] = entity;
                return entity;
            };
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = _closure1_slot15;
            zuuluu = zuuluu.GUILD_CATEGORY;
            tangon = tangon[zuuluu];
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.channel;
                    michal = zuuluu.id;
                    entity = 'null';
                    entity = entity === michal;
                    if(entity) { _fun00014_ip = 53; continue _fun00013 }
 24:
                    report = _closure1_slot14;
                    tangon = report.can;
                    michal = _closure1_slot16;
                    michal = michal.VIEW_CHANNEL;
                    entity = tangon.bind(report)(michal, zuuluu);
 53:
                    if(!entity) { _fun00014_ip = 72; continue _fun00013 }
 56:
                    michal = _closure1_slot23;
                    entity = zuuluu.id;
                    michal[entity] = zuuluu;
 72:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            michal = _closure1_slot30;
            entity = undefined;
            michal = michal.bind(entity)();
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
            tangon = _closure1_slot19;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00016_ip = 90; continue _fun00015 }
 15:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 10;
            zuuluu = report[zuuluu];
            golfie = undefined;
            oscard = tangon.bind(golfie)(zuuluu);
            zuuluu = _closure1_slot19;
            report = zuuluu._categories;
            tangon = _closure1_slot19;
            zuuluu = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.channel;
                    michal = zuuluu.type;
                    entity = _closure1_slot15;
                    entity = entity.GUILD_CATEGORY;
                    entity = michal === entity;
                    if(entity) { _fun00018_ip = 68; continue _fun00017 }
 33:
                    report = _closure1_slot21;
                    michal = null;
                    michal = michal != report;
                    if(!michal) { _fun00018_ip = 65; continue _fun00017 }
 46:
                    report = _closure1_slot21;
                    tangon = report.has;
                    zuuluu = zuuluu.type;
                    michal = tangon.bind(report)(zuuluu);
 65:
                    entity = michal;
 68:
                    return entity;
                }
            };
            tangon = oscard.bind(golfie)(report, tangon, zuuluu);
            _closure1_slot22 = tangon;
            zuuluu = tangon.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.channel;
                entity = entity.id;
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity);
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
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.isGuildSelectableChannelType;
    var _closure1_slot9 = option;
    michal = michal.isGuildVocalChannelType;
    var _closure1_slot10 = michal;
    michal = 7;
    option = oscard[michal];
    option = report.bind(entity)(option);
    verify = option.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot11 = verify;
    option = option.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot12 = option;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot13 = michal;
    michal = 8;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot14 = michal;
    michal = 9;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.ChannelTypes;
    var _closure1_slot15 = option;
    michal = michal.Permissions;
    var _closure1_slot16 = michal;
    michal = null;
    var _closure1_slot17 = michal;
    var _closure1_slot18 = michal;
    var _closure1_slot19 = michal;
    var _closure1_slot20 = michal;
    var _closure1_slot21 = michal;
    var _closure1_slot22 = michal;
    michal = {};
    var _closure1_slot23 = michal;
    michal = 11;
    michal = oscard[michal];
    offset = golfie.bind(entity)(michal);
    verify = offset.debounce;
    option = function() {
        zuuluu = _closure1_slot31;
        entity = undefined;
        zuuluu = zuuluu.bind(entity)();
        zuuluu = _closure1_slot25;
        michal = zuuluu.emitChange;
        michal = michal.bind(zuuluu)();
        return entity;
    };
    michal = 500;
    michal = verify.bind(offset)(option, michal);
    var _closure1_slot24 = michal;
    michal = 12;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: GuildSettingsModalChannelsStoreClass
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot3;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot26;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tangon = this;
            zuuluu = tangon.waitFor;
            michal = _closure1_slot13;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.syncWith;
            entity = _closure1_slot13;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                michal = _closure1_slot24;
                entity = undefined;
                entity = michal.bind(entity)();
                entity = false;
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golfie = 'initGuild';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = argFoo;
            _closure1_slot17 = michal;
            michal = _closure1_slot31;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'channels';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot19;
            return entity;
        };
        report['get'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'order';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot18;
            return entity;
        };
        report['get'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'sortingType';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot21;
            return entity;
        };
        report['get'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'channelList';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot22;
            return entity;
        };
        report['get'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getLocalChannel';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            michal = _closure1_slot23;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = oscard;
        entity[6] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    verify = michal.bind(entity)(option);
    michal = 'GuildSettingsModalChannelsStore';
    verify['displayName'] = michal;
    michal = 13;
    michal = oscard[michal];
    foxtra = golfie.bind(entity)(michal);
    michal = {};
    golfie = function() { // Original name: handleTerminate
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
    michal['GUILD_SETTINGS_MODAL_CHANNELS_TERMINATE'] = golfie;
    golfie = function(argFoo) { // Original name: handleStartReorder
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            tangon = entity.sortingType;
            zuuluu = _closure1_slot19;
            michal = null;
            if(!(michal != zuuluu)) { _fun00020_ip = 69; continue _fun00019 }
 22:
            michal = global;
            michal = michal.Set;
            zuuluu = michal.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
            oscard = zuuluu;
            report = tangon;
            michal = new oscard[michal](report, tangon);
            michal = michal instanceof Object ? michal : zuuluu;
            _closure1_slot21 = michal;
            michal = _closure1_slot32;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
 69:
            entity = false;
            return entity;
        }
    };
    michal['GUILD_SETTINGS_MODAL_CHANNELS_START_REORDER'] = golfie;
    golfie = function() { // Original name: handleStopReorder
        michal = null;
        _closure1_slot21 = michal;
        michal = _closure1_slot32;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['GUILD_SETTINGS_MODAL_CHANNELS_STOP_REORDER'] = golfie;
    golfie = function(argFoo) { // Original name: handleLocalSortChange
        entity = argFoo;
        zuuluu = entity.updates;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = argFoo;
                zuuluu = _closure1_slot23;
                michal = entity.id;
                zuuluu = zuuluu[michal];
                michal = null;
                if(!(michal != zuuluu)) { _fun00022_ip = 89; continue _fun00021 }
 25:
                michal = entity.lock_permissions;
                michal = entity.id;
                report = _closure1_slot8;
                zuuluu = _closure1_slot2;
                michal = undefined;
                report = report.bind(michal)(entity, zuuluu);
                zuuluu = _closure1_slot23;
                michal = entity.id;
                tangon = _closure1_slot23;
                entity = entity.id;
                tangon = tangon[entity];
                entity = tangon.merge;
                entity = entity.bind(tangon)(report);
                zuuluu[michal] = entity;
 89:
                entity = undefined;
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        michal = _closure1_slot30;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['GUILD_SETTINGS_MODAL_LOCAL_SORT_CHANGE'] = golfie;
    golfie = verify.prototype;
    golfie = Object.create(golfie, {constructor: {value: verify}});
    backup = golfie;
    romeon = michal;
    michal = new backup[verify](foxtra, romeon, yankee);
    michal = michal instanceof Object ? michal : golfie;
    var _closure1_slot25 = michal;
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_settings/GuildSettingsModalChannelsStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();