// app/stores/GameStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        golf = argBaz;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = report;
        var _closure1_slot1 = oscar;
        entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tango = argFoo;
                oscar = argBaz;
                mike = _closure1_slot5;
                zulu = undefined;
                entity = argBar;
                verify = mike.bind(zulu)(entity);
                mike = _closure1_slot4;
                entity = _closure1_slot17;
                entity = entity.bind(zulu)();
                if(entity) { _fun00004_ip = 51; continue _fun00003 }
 38:
                entity = verify.apply;
                entity = entity.bind(verify)(tango, oscar);
                _fun00004_ip = 92; continue _fun00003;
 51:
                golf = global;
                options = golf.Reflect;
                golf = options.construct;
                if(oscar) { _fun00004_ip = 71; continue _fun00003 }
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
        var _closure1_slot16 = entity;
        entity = function() { // Original name: _isNativeReflectConstruct
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
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
 70: // try_end0
                _fun00006_ip = 74; continue _fun00005;
 72: // catch_target0
                CatchBlockStart(arg_register=1);
 74:
                mike = function() { // Original name: _isNativeReflectConstruct
                    entity = _closure2_slot0;
                    entity = !entity;
                    entity = !entity;
                    return entity;
                };
                _closure1_slot17 = mike;
                entity = undefined;
                entity = mike.bind(entity)();
                return entity;
            }
        };
        var _closure1_slot17 = entity;
        entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = argFoo;
                var _closure2_slot0 = zulu;
                report = global;
                mike = report.Symbol;
                tango = 'undefined';
                mike = typeof mike;
                mike = tango !== mike;
                if(!mike) { _fun00008_ip = 46; continue _fun00007 }
 30:
                tango = report.Symbol;
                tango = tango.iterator;
                mike = zulu[tango];
 46:
                if(mike) { _fun00008_ip = 55; continue _fun00007 }
 49:
                mike = zulu.@@iterator;
 55:
                if(mike) { _fun00008_ip = 343; continue _fun00007 }
 61:
                oscar = report.Array;
                tango = oscar.isArray;
                oscar = tango.bind(oscar)(zulu);
                tango = mike;
                if(oscar) { _fun00008_ip = 323; continue _fun00007 }
 86:
                options = undefined;
                oscar = undefined;
                if(!zulu) { _fun00008_ip = 283; continue _fun00007 }
 96:
                verify = 'string';
                golf = typeof zulu;
                if(!(verify !== golf)) { _fun00008_ip = 270; continue _fun00007 }
 110:
                golf = {};
                verify = golf.toString;
                golf = verify.call;
                yankee = golf.bind(verify)(zulu);
                offset = yankee.slice;
                verify = 8;
                golf = -1;
                verify = offset.bind(yankee)(verify, golf);
                golf = 'Object';
                golf = golf === verify;
                if(!golf) { _fun00008_ip = 163; continue _fun00007 }
 158:
                golf = zulu.constructor;
 163:
                offset = verify;
                if(!golf) { _fun00008_ip = 179; continue _fun00007 }
 169:
                golf = zulu.constructor;
                offset = golf.name;
 179:
                golf = 'Map';
                if(!(golf !== offset)) { _fun00008_ip = 249; continue _fun00007 }
 187:
                golf = 'Set';
                if(!(golf !== offset)) { _fun00008_ip = 249; continue _fun00007 }
 195:
                golf = 'Arguments';
                if(!(golf !== offset)) { _fun00008_ip = 234; continue _fun00007 }
 205:
                verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                golf = verify.test;
                verify = golf.bind(verify)(offset);
                golf = undefined;
                if(!verify) { _fun00008_ip = 247; continue _fun00007 }
 234:
                verify = _closure1_slot19;
                golf = verify.bind(options)(zulu, options);
 247:
                _fun00008_ip = 265; continue _fun00007;
 249:
                offset = report.Array;
                verify = offset.from;
                golf = verify.bind(offset)(zulu);
 265:
                oscar = golf;
                _fun00008_ip = 283; continue _fun00007;
 270:
                golf = _closure1_slot19;
                oscar = golf.bind(options)(zulu, options);
 283:
                tango = oscar;
                if(tango) { _fun00008_ip = 323; continue _fun00007 }
 289:
                golf = report.TypeError;
                report = golf.prototype;
                oscar = Object.create(report, {constructor: {value: golf}});
                foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                backup = oscar;
                report = new backup[golf](foxtrot, romeo);
                report = report instanceof Object ? report : oscar;
                throw report;
 323:
                if(!tango) { _fun00008_ip = 330; continue _fun00007 }
 326:
                _closure2_slot0 = tango;
 330:
                tango = 0;
                var _closure2_slot1 = tango;
                entity = function() {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        mike = _closure2_slot1;
                        entity = _closure2_slot0;
                        entity = entity.length;
                        if(!(!(mike >= entity))) { _fun00010_ip = 56; continue _fun00009 }
 20:
                        entity = {};
                        mike = false;
                        entity['done'] = mike;
                        zulu = _closure2_slot0;
                        mike = _closure2_slot1;
                        mike = parseFloat(mike);
                        tango = mike + 1;
                        _closure2_slot1 = tango;
                        mike = zulu[mike];
                        entity['value'] = mike;
                        _fun00010_ip = 67; continue _fun00009;
 56:
                        mike = {};
                        zulu = true;
                        mike['done'] = zulu;
                        entity = mike;
 67:
                        return entity;
                    }
                };
                return entity;
 343:
                entity = mike.call;
                zulu = entity.bind(mike)(zulu);
                mike = zulu.next;
                entity = mike.bind;
                entity = entity.bind(mike)(zulu);
                return entity;
            }
        };
        var _closure1_slot18 = entity;
        entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tango = argFoo;
                entity = null;
                zulu = undefined;
                entity = entity == zulu;
                if(entity) { _fun00012_ip = 23; continue _fun00011 }
 14:
                mike = tango.length;
                entity = zulu > mike;
 23:
                mike = undefined;
                if(!entity) { _fun00012_ip = 33; continue _fun00011 }
 28:
                mike = tango.length;
 33:
                entity = global;
                entity = entity.Array;
                entity = entity.bind(zulu)(mike);
                zulu = 0;
                report = zulu < mike;
                if(!report) { _fun00012_ip = 70; continue _fun00011 }
 55:
                report = tango[zulu];
                entity[zulu] = report;
                zulu = zulu + 1;
                if(zulu < mike) { _fun00012_ip = 55; continue _fun00011 }
 70:
                return entity;
            }
        };
        var _closure1_slot19 = entity;
        entity = function(argFoo) { // Original name: convertApplicationRecordToDetectableApplication
            mike = argFoo;
            entity = {};
            zulu = mike.id;
            entity['id'] = zulu;
            zulu = mike.name;
            entity['name'] = zulu;
            zulu = mike.executables;
            entity['executables'] = zulu;
            zulu = mike.overlayWarn;
            entity['overlayWarn'] = zulu;
            zulu = mike.overlayCompatibilityHook;
            entity['overlayCompatibilityHook'] = zulu;
            zulu = mike.overlay;
            entity['overlay'] = zulu;
            zulu = mike.hook;
            entity['hook'] = zulu;
            zulu = mike.aliases;
            entity['aliases'] = zulu;
            mike = mike.supportsOutOfProcessOverlay;
            entity['supportsOutOfProcessOverlay'] = mike;
            return entity;
        };
        var _closure1_slot20 = entity;
        entity = function(argFoo) { // Original name: addDetectableGame
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                mike = argFoo;
                entity = _closure1_slot7;
                entity = mike instanceof entity;
                report = mike;
                if(!entity) { _fun00014_ip = 31; continue _fun00013 }
 20:
                zulu = _closure1_slot20;
                entity = undefined;
                report = zulu.bind(entity)(mike);
 31:
                tango = _closure1_slot9;
                zulu = tango.set;
                entity = mike.id;
                entity = zulu.bind(tango)(entity, report);
                zulu = _closure1_slot10;
                tango = mike.name;
                entity = tango.toLowerCase;
                entity = entity.bind(tango)();
                zulu[entity] = report;
                tango = _closure1_slot18;
                zulu = mike.aliases;
                entity = undefined;
                golf = tango.bind(entity)(zulu);
                tango = golf.bind(entity)();
                zulu = tango.done;
                if(zulu) { _fun00014_ip = 141; continue _fun00013 }
 103:
                verify = tango.value;
                options = _closure1_slot10;
                zulu = verify.toLowerCase;
                zulu = zulu.bind(verify)();
                options[zulu] = report;
                options = golf.bind(entity)();
                zulu = options.done;
                tango = options;
                if(!zulu) { _fun00014_ip = 103; continue _fun00013 }
 141:
                tango = _closure1_slot0;
                golf = _closure1_slot1;
                zulu = 8;
                zulu = golf[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.isDesktop;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun00014_ip = 234; continue _fun00013 }
 174:
                zulu = _closure1_slot18;
                mike = mike.executables;
                tango = zulu.bind(entity)(mike);
                zulu = tango.bind(entity)();
                mike = zulu.done;
                if(mike) { _fun00014_ip = 234; continue _fun00013 }
 201:
                mike = zulu.value;
                golf = _closure1_slot11;
                mike = mike.name;
                golf[mike] = report;
                golf = tango.bind(entity)();
                mike = golf.done;
                zulu = golf;
                if(!mike) { _fun00014_ip = 201; continue _fun00013 }
 234:
                return entity;
            }
        };
        var _closure1_slot21 = entity;
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
        var _closure1_slot2 = mike;
        mike = 1;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        var _closure1_slot3 = mike;
        mike = 2;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        var _closure1_slot4 = mike;
        mike = 3;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        var _closure1_slot5 = mike;
        mike = 4;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        var _closure1_slot6 = mike;
        mike = 5;
        options = oscar[mike];
        options = golf.bind(entity)(options);
        var _closure1_slot7 = options;
        mike = oscar[mike];
        mike = report.bind(entity)(mike);
        mike = mike.createExecutable;
        var _closure1_slot8 = mike;
        mike = 6;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        options = mike.prototype;
        options = Object.create(options, {constructor: {value: mike}});
        foxtrot = options;
        mike = new foxtrot[mike](romeo);
        mike = mike instanceof Object ? mike : options;
        var _closure1_slot9 = mike;
        mike = {};
        var _closure1_slot10 = mike;
        mike = {};
        var _closure1_slot11 = mike;
        mike = 7;
        mike = oscar[mike];
        mike = report.bind(entity)(mike);
        verify = mike.Storage;
        options = verify.get;
        mike = 'GameStoreReportedGames';
        options = options.bind(verify)(mike);
        mike = null;
        if(!(mike == options)) { _fun00002_ip = 314; continue _fun00001 }
 312:
        options = {};
 314:
        var _closure1_slot12 = options;
        options = '';
        var _closure1_slot13 = options;
        var _closure1_slot14 = entity;
        var _closure1_slot15 = mike;
        mike = 10;
        mike = oscar[mike];
        mike = golf.bind(entity)(mike);
        options = mike.PersistedStore;
        mike = function(argFoo) {
            tango = function() { // Original name: GameStore
                report = this;
                tango = undefined;
                entity = undefined;
                oscar = _closure1_slot2;
                zulu = _closure2_slot0;
                oscar = oscar.bind(tango)(report, zulu);
                mike = _closure1_slot16;
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
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    mike = argFoo;
                    entity = null;
                    if(!(entity != mike)) { _fun00016_ip = 59; continue _fun00015 }
 9:
                    zulu = mike.detectableGamesEtag;
                    if(!(entity != zulu)) { _fun00016_ip = 32; continue _fun00015 }
 19:
                    tango = mike.detectableGamesEtag;
                    _closure1_slot13 = tango;
 32:
                    zulu = mike.detectableGames;
                    if(!(entity != zulu)) { _fun00016_ip = 59; continue _fun00015 }
 42:
                    mike = zulu.forEach;
                    entity = function(argFoo) {
                        zulu = _closure1_slot21;
                        entity = undefined;
                        mike = argFoo;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
 59:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = entity;
            entity = new Array(13);
            entity[0] = report;
            report = {};
            golf = 'getState';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    tango = _closure1_slot0;
                    mike = _closure1_slot1;
                    entity = 8;
                    mike = mike[entity];
                    entity = undefined;
                    mike = tango.bind(entity)(mike);
                    entity = mike.isDesktop;
                    entity = entity.bind(mike)();
                    mike = {};
                    if(entity) { _fun00018_ip = 63; continue _fun00017 }
 40:
                    entity = '';
                    mike['detectableGamesEtag'] = entity;
                    entity = new Array(0);
                    mike['detectableGames'] = entity;
                    entity = mike;
                    _fun00018_ip = 93; continue _fun00017;
 63:
                    tango = _closure1_slot13;
                    mike['detectableGamesEtag'] = tango;
                    tango = _closure1_slot9;
                    zulu = tango.values;
                    zulu = zulu.bind(tango)();
                    mike['detectableGames'] = zulu;
                    entity = mike;
 93:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[1] = report;
            report = {};
            golf = 'games';
            report['key'] = golf;
            golf = function() { // Original name: get
                mike = _closure1_slot9;
                entity = mike.values;
                entity = entity.bind(mike)();
                return entity;
            };
            report['get'] = golf;
            entity[2] = report;
            report = {};
            golf = 'getDetectableGame';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                zulu = _closure1_slot9;
                mike = zulu.get;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report['value'] = golf;
            entity[3] = report;
            report = {};
            golf = 'getGameByName';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zulu = argFoo;
                    entity = null;
                    if(!(entity != zulu)) { _fun00020_ip = 71; continue _fun00019 }
 9:
                    mike = zulu.toLowerCase;
                    tango = mike.bind(zulu)();
                    mike = global;
                    mike = mike.Object;
                    mike = mike.prototype;
                    oscar = mike.hasOwnProperty;
                    report = oscar.call;
                    mike = _closure1_slot10;
                    report = report.bind(oscar)(mike, tango);
                    mike = null;
                    if(!report) { _fun00020_ip = 69; continue _fun00019 }
 61:
                    zulu = _closure1_slot10;
                    mike = zulu[tango];
 69:
                    return mike;
 71:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[4] = report;
            report = {};
            golf = 'isGameInDatabase';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zulu = argFoo;
                    tango = this;
                    mike = tango.getGameByName;
                    entity = zulu.name;
                    mike = mike.bind(tango)(entity);
                    entity = null;
                    entity = entity != mike;
                    if(entity) { _fun00022_ip = 75; continue _fun00021 }
 31:
                    tango = zulu.nativeProcessObserverId;
                    mike = undefined;
                    mike = mike !== tango;
                    if(!mike) { _fun00022_ip = 72; continue _fun00021 }
 46:
                    tango = zulu.nativeProcessObserverId;
                    zulu = 2147483648.0;
                    tango = zulu & tango;
                    zulu = 0;
                    mike = zulu === tango;
 72:
                    entity = mike;
 75:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[5] = report;
            report = {};
            golf = 'fetching';
            report['key'] = golf;
            golf = function() { // Original name: get
                mike = _closure1_slot14;
                entity = true;
                entity = entity === mike;
                return entity;
            };
            report['get'] = golf;
            entity[6] = report;
            report = {};
            golf = 'detectableGamesEtag';
            report['key'] = golf;
            golf = function() { // Original name: get
                entity = _closure1_slot13;
                return entity;
            };
            report['get'] = golf;
            entity[7] = report;
            report = {};
            golf = 'lastFetched';
            report['key'] = golf;
            golf = function() { // Original name: get
                entity = _closure1_slot15;
                return entity;
            };
            report['get'] = golf;
            entity[8] = report;
            report = {};
            golf = 'getGameByExecutable';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                mike = _closure1_slot11;
                entity = argFoo;
                entity = mike[entity];
                return entity;
            };
            report['value'] = golf;
            entity[9] = report;
            report = {};
            golf = 'getGameByGameData';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    mike = argFoo;
                    golf = this;
                    zulu = mike.exePath;
                    entity = null;
                    if(!(entity != zulu)) { _fun00024_ip = 235; continue _fun00023 }
 21:
                    tango = mike.exePath;
                    zulu = tango.split;
                    oscar = '/';
                    tango = zulu.bind(tango)(oscar);
                    zulu = tango.pop;
                    report = zulu.bind(tango)();
                    tango = mike.exePath;
                    zulu = tango.split;
                    options = zulu.bind(tango)(oscar);
                    tango = options.slice;
                    zulu = -2;
                    tango = tango.bind(options)(zulu);
                    zulu = tango.join;
                    oscar = zulu.bind(tango)(oscar);
                    zulu = mike.name;
                    tango = entity != zulu;
                    zulu = undefined;
                    if(!tango) { _fun00024_ip = 198; continue _fun00023 }
 107:
                    tango = golf.getGameByName;
                    mike = mike.name;
                    mike = tango.bind(golf)(mike);
                    if(!(entity != mike)) { _fun00024_ip = 137; continue _fun00023 }
 127:
                    tango = mike.executables;
                    if(!(entity == tango)) { _fun00024_ip = 146; continue _fun00023 }
 137:
                    zulu = mike;
                    if(!(entity != zulu)) { _fun00024_ip = 198; continue _fun00023 }
 144:
                    return entity;
 146:
                    verify = mike.executables;
                    options = verify.map;
                    tango = function(argFoo) {
                        entity = argFoo;
                        entity = entity.name;
                        return entity;
                    };
                    options = options.bind(verify)(tango);
                    tango = options.includes;
                    tango = tango.bind(options)(report);
                    if(tango) { _fun00024_ip = 233; continue _fun00023 }
 182:
                    tango = options.includes;
                    tango = tango.bind(options)(oscar);
                    zulu = mike;
                    if(tango) { _fun00024_ip = 233; continue _fun00023 }
 198:
                    tango = golf.getGameByExecutable;
                    tango = tango.bind(golf)(report);
                    if(!(entity == tango)) { _fun00024_ip = 224; continue _fun00023 }
 213:
                    report = golf.getGameByExecutable;
                    tango = report.bind(golf)(oscar);
 224:
                    if(!(entity != tango)) { _fun00024_ip = 231; continue _fun00023 }
 228:
                    zulu = tango;
 231:
                    return zulu;
 233:
                    return mike;
 235:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[10] = report;
            report = {};
            golf = 'shouldReport';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    report = argFoo;
                    mike = this;
                    entity = mike.getGameByName;
                    entity = entity.bind(mike)(report);
                    zulu = null;
                    mike = zulu != entity;
                    entity = _closure1_slot12;
                    entity = entity[report];
                    zulu = zulu != entity;
                    oscar = _closure1_slot0;
                    report = _closure1_slot1;
                    entity = 9;
                    report = report[entity];
                    entity = undefined;
                    entity = oscar.bind(entity)(report);
                    report = entity.ShowCurrentGame;
                    entity = report.getSetting;
                    entity = entity.bind(report)();
                    if(!entity) { _fun00026_ip = 86; continue _fun00025 }
 79:
                    tango = _closure1_slot14;
                    entity = !tango;
 86:
                    if(!entity) { _fun00026_ip = 98; continue _fun00025 }
 89:
                    if(mike) { _fun00026_ip = 95; continue _fun00025 }
 92:
                    mike = zulu;
 95:
                    entity = !mike;
 98:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[11] = report;
            report = {};
            golf = 'markGameReported';
            report['key'] = golf;
            oscar = function(argFoo) { // Original name: value
                tango = _closure1_slot12;
                zulu = true;
                entity = argFoo;
                tango[entity] = zulu;
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                entity = 7;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                report = zulu.Storage;
                tango = report.set;
                zulu = _closure1_slot12;
                mike = 'GameStoreReportedGames';
                mike = tango.bind(report)(mike, zulu);
                return entity;
            };
            report['value'] = oscar;
            entity[12] = report;
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        };
        options = mike.bind(entity)(options);
        mike = 'GameStore';
        options['displayName'] = mike;
        options['persistKey'] = mike;
        mike = new Array(2);
        verify = function(argFoo) {
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                zulu = argFoo;
                tango = null;
                if(!(tango == zulu)) { _fun00028_ip = 31; continue _fun00027 }
 9:
                entity = {};
                mike = '';
                entity['detectableGamesEtag'] = mike;
                mike = new Array(0);
                entity['detectableGames'] = mike;
                _fun00028_ip = 92; continue _fun00027;
 31:
                mike = {};
                report = zulu.detectableGamesEtag;
                mike['detectableGamesEtag'] = report;
                golf = zulu.detectableGames;
                report = tango == golf;
                zulu = undefined;
                if(report) { _fun00028_ip = 76; continue _fun00027 }
 59:
                oscar = golf.map;
                report = function(argFoo) {
                    zulu = _closure1_slot20;
                    tango = _closure1_slot7;
                    entity = tango.prototype;
                    mike = Object.create(entity, {constructor: {value: tango}});
                    report = argFoo;
                    oscar = mike;
                    entity = new oscar[tango](report, tango);
                    mike = entity instanceof Object ? entity : mike;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                zulu = oscar.bind(golf)(report);
 76:
                if(!(tango == zulu)) { _fun00028_ip = 84; continue _fun00027 }
 80:
                zulu = new Array(0);
 84:
                mike['detectableGames'] = zulu;
                entity = mike;
 92:
                return entity;
            }
        };
        mike[0] = verify;
        verify = function(argFoo) {
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                entity = argFoo;
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 8;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.isDesktop;
                mike = mike.bind(zulu)();
                if(mike) { _fun00030_ip = 64; continue _fun00029 }
 41:
                mike = {};
                zulu = '';
                mike['detectableGamesEtag'] = zulu;
                zulu = new Array(0);
                mike['detectableGames'] = zulu;
                entity = mike;
 64:
                return entity;
            }
        };
        mike[1] = verify;
        options['migrations'] = mike;
        mike = 11;
        mike = oscar[mike];
        romeo = golf.bind(entity)(mike);
        mike = {};
        verify = function(argFoo) { // Original name: handleOverlayInitialize
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                entity = argFoo;
                zulu = entity.detectableApplications;
                mike = _closure1_slot18;
                entity = undefined;
                tango = mike.bind(entity)(zulu);
                zulu = tango.bind(entity)();
                mike = zulu.done;
                if(mike) { _fun00032_ip = 66; continue _fun00031 }
 37:
                oscar = _closure1_slot21;
                mike = zulu.value;
                mike = oscar.bind(entity)(mike);
                oscar = tango.bind(entity)();
                mike = oscar.done;
                zulu = oscar;
                if(!mike) { _fun00032_ip = 37; continue _fun00031 }
 66:
                return entity;
            }
        };
        mike['OVERLAY_INITIALIZE'] = verify;
        verify = function() { // Original name: handleApplicationsFetch
            entity = true;
            _closure1_slot14 = entity;
            entity = undefined;
            return entity;
        };
        mike['GAMES_DATABASE_FETCH'] = verify;
        verify = function() { // Original name: handleApplicationsFetchFail
            entity = false;
            _closure1_slot14 = entity;
            entity = undefined;
            return entity;
        };
        mike['GAMES_DATABASE_FETCH_FAIL'] = verify;
        tango = function(argFoo) { // Original name: handleDetectableGamesUpdated
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                entity = argFoo;
                tango = entity.games;
                mike = entity.etag;
                oscar = null;
                entity = oscar != mike;
                if(!entity) { _fun00034_ip = 37; continue _fun00033 }
 26:
                zulu = _closure1_slot13;
                entity = zulu !== mike;
 37:
                if(!entity) { _fun00034_ip = 47; continue _fun00033 }
 40:
                _closure1_slot13 = mike;
 47:
                mike = _closure1_slot18;
                entity = undefined;
                report = mike.bind(entity)(tango);
                tango = report.bind(entity)();
                mike = tango.done;
                if(mike) { _fun00034_ip = 290; continue _fun00033 }
 76:
                options = tango.value;
                golf = _closure1_slot21;
                mike = {};
                verify = options.id;
                mike['id'] = verify;
                verify = options.name;
                mike['name'] = verify;
                yankee = options.executables;
                if(!(oscar == yankee)) { _fun00034_ip = 119; continue _fun00033 }
 115:
                yankee = new Array(0);
 119:
                offset = yankee.map;
                verify = _closure1_slot8;
                verify = offset.bind(yankee)(verify);
                mike['executables'] = verify;
                offset = options.overlay;
                verify = oscar != offset;
                if(!verify) { _fun00034_ip = 154; continue _fun00033 }
 151:
                verify = offset;
 154:
                mike['overlay'] = verify;
                offset = options.overlay_warn;
                verify = oscar != offset;
                if(!verify) { _fun00034_ip = 175; continue _fun00033 }
 172:
                verify = offset;
 175:
                mike['overlayWarn'] = verify;
                offset = options.overlay_compatibility_hook;
                verify = oscar != offset;
                if(!verify) { _fun00034_ip = 196; continue _fun00033 }
 193:
                verify = offset;
 196:
                mike['overlayCompatibilityHook'] = verify;
                offset = options.hook;
                verify = oscar == offset;
                if(verify) { _fun00034_ip = 217; continue _fun00033 }
 214:
                verify = offset;
 217:
                mike['hook'] = verify;
                verify = options.aliases;
                if(!(oscar == verify)) { _fun00034_ip = 236; continue _fun00033 }
 232:
                verify = new Array(0);
 236:
                mike['aliases'] = verify;
                offset = _closure1_slot7;
                verify = offset.supportsOutOfProcessOverlay;
                options = options.overlay_methods;
                options = verify.bind(offset)(options);
                mike['supportsOutOfProcessOverlay'] = options;
                mike = golf.bind(entity)(mike);
                golf = report.bind(entity)();
                mike = golf.done;
                tango = golf;
                if(!mike) { _fun00034_ip = 76; continue _fun00033 }
 290:
                _closure1_slot14 = entity;
                mike = global;
                tango = mike.Date;
                mike = tango.now;
                mike = mike.bind(tango)();
                _closure1_slot15 = mike;
                return entity;
            }
        };
        mike['GAMES_DATABASE_UPDATE'] = tango;
        tango = options.prototype;
        tango = Object.create(tango, {constructor: {value: options}});
        foxtrot = tango;
        yankee = mike;
        mike = new foxtrot[options](romeo, yankee, offset);
        mike = mike instanceof Object ? mike : tango;
        tango = 12;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'stores/GameStore.tsx';
        tango = report.bind(oscar)(tango);
        zulu['default'] = mike;
        return entity;
    }
})();