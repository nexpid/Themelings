// app/utils/web/DesktopNativeUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    _fun62176: for(var _fun62176_ip = 0; ; ) switch(_fun62176_ip) {
 0:
        verify = argBar;
        golf = argBaz;
        zulu = argFred;
        offset = argPlugh;
        var _closure1_slot0 = verify;
        var _closure1_slot1 = golf;
        var _closure1_slot2 = offset;
        entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
            _fun62177: for(var _fun62177_ip = 0; ; ) switch(_fun62177_ip) {
 0:
                zulu = argFoo;
                var _closure2_slot0 = zulu;
                report = global;
                mike = report.Symbol;
                tango = 'undefined';
                mike = typeof mike;
                mike = tango !== mike;
                if(!mike) { _fun62177_ip = 46; continue _fun62177 }
 30:
                tango = report.Symbol;
                tango = tango.iterator;
                mike = zulu[tango];
 46:
                if(mike) { _fun62177_ip = 55; continue _fun62177 }
 49:
                mike = zulu.@@iterator;
 55:
                if(mike) { _fun62177_ip = 343; continue _fun62177 }
 61:
                oscar = report.Array;
                tango = oscar.isArray;
                oscar = tango.bind(oscar)(zulu);
                tango = mike;
                if(oscar) { _fun62177_ip = 323; continue _fun62177 }
 86:
                options = undefined;
                oscar = undefined;
                if(!zulu) { _fun62177_ip = 283; continue _fun62177 }
 96:
                verify = 'string';
                golf = typeof zulu;
                if(!(verify !== golf)) { _fun62177_ip = 270; continue _fun62177 }
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
                if(!golf) { _fun62177_ip = 163; continue _fun62177 }
 158:
                golf = zulu.constructor;
 163:
                offset = verify;
                if(!golf) { _fun62177_ip = 179; continue _fun62177 }
 169:
                golf = zulu.constructor;
                offset = golf.name;
 179:
                golf = 'Map';
                if(!(golf !== offset)) { _fun62177_ip = 249; continue _fun62177 }
 187:
                golf = 'Set';
                if(!(golf !== offset)) { _fun62177_ip = 249; continue _fun62177 }
 195:
                golf = 'Arguments';
                if(!(golf !== offset)) { _fun62177_ip = 234; continue _fun62177 }
 205:
                verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                golf = verify.test;
                verify = golf.bind(verify)(offset);
                golf = undefined;
                if(!verify) { _fun62177_ip = 247; continue _fun62177 }
 234:
                verify = _closure1_slot15;
                golf = verify.bind(options)(zulu, options);
 247:
                _fun62177_ip = 265; continue _fun62177;
 249:
                offset = report.Array;
                verify = offset.from;
                golf = verify.bind(offset)(zulu);
 265:
                oscar = golf;
                _fun62177_ip = 283; continue _fun62177;
 270:
                golf = _closure1_slot15;
                oscar = golf.bind(options)(zulu, options);
 283:
                tango = oscar;
                if(tango) { _fun62177_ip = 323; continue _fun62177 }
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
                if(!tango) { _fun62177_ip = 330; continue _fun62177 }
 326:
                _closure2_slot0 = tango;
 330:
                tango = 0;
                var _closure2_slot1 = tango;
                entity = function() {
                    _fun62178: for(var _fun62178_ip = 0; ; ) switch(_fun62178_ip) {
 0:
                        mike = _closure2_slot1;
                        entity = _closure2_slot0;
                        entity = entity.length;
                        if(!(!(mike >= entity))) { _fun62178_ip = 56; continue _fun62178 }
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
                        _fun62178_ip = 67; continue _fun62178;
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
        var _closure1_slot14 = entity;
        entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
            _fun62179: for(var _fun62179_ip = 0; ; ) switch(_fun62179_ip) {
 0:
                tango = argFoo;
                entity = null;
                zulu = undefined;
                entity = entity == zulu;
                if(entity) { _fun62179_ip = 23; continue _fun62179 }
 14:
                mike = tango.length;
                entity = zulu > mike;
 23:
                mike = undefined;
                if(!entity) { _fun62179_ip = 33; continue _fun62179 }
 28:
                mike = tango.length;
 33:
                entity = global;
                entity = entity.Array;
                entity = entity.bind(zulu)(mike);
                zulu = 0;
                report = zulu < mike;
                if(!report) { _fun62179_ip = 70; continue _fun62179 }
 55:
                report = tango[zulu];
                entity[zulu] = report;
                zulu = zulu + 1;
                if(zulu < mike) { _fun62179_ip = 55; continue _fun62179 }
 70:
                return entity;
            }
        };
        var _closure1_slot15 = entity;
        oscar = function() { // Original name: getFileData
            entity = undefined;
            tango = _closure1_slot17;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        var _closure1_slot16 = oscar;
        entity = function() { // Original name: _getFileData
            report = undefined;
            entity = undefined;
            tango = _closure1_slot4;
            zulu = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun62183: for(var _fun62183_ip = 0; ; ) switch(_fun62183_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun62183_ip = 189; continue _fun62183 }
 10:
                        mike = global;
                        zulu = mike.fetch;
                        oscar = mike.Request;
                        mike = oscar.prototype;
                        tango = Object.create(mike, {constructor: {value: oscar}});
                        offset = argFoo;
                        verify = {'method': 'GET', 'mode': 'cors'};
                        yankee = tango;
                        mike = new yankee[oscar](offset, verify, options);
                        mike = mike instanceof Object ? mike : tango;
                        golf = undefined;
                        mike = zulu.bind(golf)(mike);
                        SaveGenerator(address=72);
 70:
                        return mike;
 72:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zulu) { _fun62183_ip = 186; continue _fun62183 }
 78:
                        report = _closure1_slot1;
                        zulu = _closure1_slot2;
                        oscar = 3;
                        zulu = zulu[oscar];
                        options = report.bind(golf)(zulu);
                        report = mike.status;
                        zulu = 200;
                        report = zulu === report;
                        zulu = 'Data fetch unsuccessful';
                        zulu = options.bind(golf)(report, zulu);
                        zulu = mike.arrayBuffer;
                        zulu = zulu.bind(mike)();
                        SaveGenerator(address=139);
 137:
                        return zulu;
 139:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(report) { _fun62183_ip = 183; continue _fun62183 }
 145:
                        report = _closure1_slot1;
                        tango = _closure1_slot2;
                        tango = tango[oscar];
                        oscar = report.bind(golf)(tango);
                        tango = null;
                        report = tango != zulu;
                        tango = 'Data is null';
                        tango = oscar.bind(golf)(report, tango);
                        return zulu;
 183:
                        return zulu;
 186:
                        return mike;
 189:
                        return entity;
                    }
                };
                return entity;
            };
            tango = tango.bind(report)(zulu);
            _closure1_slot17 = tango;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        var _closure1_slot17 = entity;
        report = function(argFoo) { // Original name: getImageData
            zulu = _closure1_slot16;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        var _closure1_slot18 = report;
        entity = function(argFoo) { // Original name: normalizeRunningGame
            _fun62185: for(var _fun62185_ip = 0; ; ) switch(_fun62185_ip) {
 0:
                mike = argFoo;
                entity = {};
                golf = _closure1_slot11;
                options = mike.id;
                tango = null;
                verify = tango != options;
                oscar = '';
                report = oscar;
                if(!verify) { _fun62185_ip = 36; continue _fun62185 }
 33:
                report = options;
 36:
                report = golf[report];
                entity['id'] = report;
                report = global;
                verify = report.parseInt;
                report = mike.id;
                golf = tango != report;
                options = oscar;
                if(!golf) { _fun62185_ip = 70; continue _fun62185 }
 67:
                options = report;
 70:
                report = undefined;
                golf = 10;
                golf = verify.bind(report)(options, golf);
                entity['nativeProcessObserverId'] = golf;
                golf = mike.gameName;
                if(!(tango == golf)) { _fun62185_ip = 101; continue _fun62185 }
 96:
                golf = mike.name;
 101:
                entity['name'] = golf;
                golf = mike.name;
                options = tango != golf;
                if(!options) { _fun62185_ip = 120; continue _fun62185 }
 117:
                oscar = golf;
 120:
                entity['processName'] = oscar;
                oscar = mike.hidden;
                entity['hidden'] = oscar;
                oscar = mike.elevated;
                entity['elevated'] = oscar;
                golf = mike.sandboxed;
                oscar = tango != golf;
                if(!oscar) { _fun62185_ip = 163; continue _fun62185 }
 160:
                oscar = golf;
 163:
                entity['sandboxed'] = oscar;
                oscar = mike.lastFocused;
                entity['lastFocused'] = oscar;
                oscar = mike.exePath;
                entity['exePath'] = oscar;
                oscar = mike.exeName;
                entity['exeName'] = oscar;
                oscar = mike.cmdLine;
                entity['cmdLine'] = oscar;
                oscar = mike.distributor;
                entity['distributor'] = oscar;
                oscar = mike.sku;
                entity['sku'] = oscar;
                oscar = mike.pid;
                entity['pid'] = oscar;
                oscar = mike.pidPath;
                if(!(tango == oscar)) { _fun62185_ip = 259; continue _fun62185 }
 255:
                oscar = new Array(0);
 259:
                entity['pidPath'] = oscar;
                golf = mike.windowHandle;
                options = tango != golf;
                oscar = null;
                if(!options) { _fun62185_ip = 282; continue _fun62185 }
 279:
                oscar = golf;
 282:
                entity['windowHandle'] = oscar;
                mike = mike.fullscreenType;
                if(!(tango == mike)) { _fun62185_ip = 329; continue _fun62185 }
 297:
                tango = _closure1_slot0;
                oscar = _closure1_slot2;
                zulu = 4;
                zulu = oscar[zulu];
                zulu = tango.bind(report)(zulu);
                zulu = zulu.RunningProcessFullscreenType;
                mike = zulu.UNKNOWN;
 329:
                entity['fullscreenType'] = mike;
                return entity;
            }
        };
        var _closure1_slot19 = entity;
        mike = global;
        romeo = mike.Object;
        yankee = romeo.defineProperty;
        tango = {};
        entity = true;
        tango['value'] = entity;
        entity = '__esModule';
        entity = yankee.bind(romeo)(zulu, entity, tango);
        romeo = 0;
        tango = offset[romeo];
        entity = undefined;
        tango = golf.bind(entity)(tango);
        var _closure1_slot3 = tango;
        yankee = 1;
        tango = offset[yankee];
        tango = golf.bind(entity)(tango);
        var _closure1_slot4 = tango;
        golf = 2;
        tango = offset[golf];
        tango = verify.bind(entity)(tango);
        tango = tango.NativeFeatures;
        var _closure1_slot5 = tango;
        tango = mike.window;
        foxtrot = tango.DiscordNative;
        var _closure1_slot6 = foxtrot;
        tango = ['jpg', 'jpeg', 'png'];
        var _closure1_slot7 = tango;
        backup = null;
        var _closure1_slot8 = backup;
        var _closure1_slot9 = backup;
        var _closure1_slot10 = backup;
        tango = {};
        var _closure1_slot11 = tango;
        if(!(backup != foxtrot)) { _fun62176_ip = 355; continue _fun62176 }
 224:
        kilo = foxtrot.remoteApp;
        tango = kilo.getVersion;
        sizing = tango.bind(kilo)();
        kilo = sizing.split;
        tango = '.';
        sizing = kilo.bind(sizing)(tango);
        kilo = sizing.map;
        tango = function(argFoo) {
            entity = global;
            zulu = entity.parseInt;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        tango = kilo.bind(sizing)(tango);
        _closure1_slot8 = tango;
        tango = foxtrot.remoteApp;
        tango = tango.getModuleVersions;
        kilo = backup == tango;
        tango = undefined;
        if(kilo) { _fun62176_ip = 310; continue _fun62176 }
 294:
        sizing = foxtrot.remoteApp;
        kilo = sizing.getModuleVersions;
        tango = kilo.bind(sizing)();
 310:
        _closure1_slot10 = tango;
        tango = foxtrot.remoteApp;
        tango = tango.getBuildNumber;
        backup = backup == tango;
        tango = undefined;
        if(backup) { _fun62176_ip = 351; continue _fun62176 }
 335:
        backup = foxtrot.remoteApp;
        foxtrot = backup.getBuildNumber;
        tango = foxtrot.bind(backup)();
 351:
        _closure1_slot9 = tango;
 355:
        foxtrot = mike.Set;
        mike = foxtrot.prototype;
        update = Object.create(mike, {constructor: {value: foxtrot}});
        echo = ['discord_erlpack', 'discord_game_utils', 'discord_rpc', 'discord_spellcheck', 'discord_utils', 'discord_voice'];
        mike = new update[foxtrot](echo, result);
        mike = false;
        var _closure1_slot12 = mike;
        mike = 'lastImageSaveDirectory';
        var _closure1_slot13 = mike;
        tango = {};
        tango['Camera'] = romeo;
        mike = 'Camera';
        tango[romeo] = mike;
        tango['Microphone'] = yankee;
        mike = 'Microphone';
        tango[yankee] = mike;
        tango['Photo'] = golf;
        mike = 'Photo';
        tango[golf] = mike;
        golf = 3;
        tango['InputMonitoring'] = golf;
        mike = 'InputMonitoring';
        tango[golf] = mike;
        golf = 4;
        tango['ScreenRecording'] = golf;
        mike = 'ScreenRecording';
        tango[golf] = mike;
        mike = {};
        golf = 'VIDEO';
        mike['VIDEO'] = golf;
        golf = 'MUTE';
        mike['MUTE'] = golf;
        golf = 'DEAFEN';
        mike['DEAFEN'] = golf;
        golf = 'DISCONNECT';
        mike['DISCONNECT'] = golf;
        golf = {};
        yankee = function(argFoo) { // Original name: requireModule
            entity = _closure1_slot6;
            zulu = entity.nativeModules;
            mike = zulu.requireModule;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        golf['requireModule'] = yankee;
        yankee = function(argFoo) { // Original name: ensureModule
            _fun62188: for(var _fun62188_ip = 0; ; ) switch(_fun62188_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                entity = entity.isPlatformEmbedded;
                if(entity) { _fun62188_ip = 87; continue _fun62188 }
 34:
                entity = global;
                tango = entity.Promise;
                zulu = tango.reject;
                oscar = entity.Error;
                entity = oscar.prototype;
                report = Object.create(entity, {constructor: {value: oscar}});
                golf = 'not embedded';
                options = report;
                entity = new options[oscar](golf, oscar);
                entity = entity instanceof Object ? entity : report;
                entity = zulu.bind(tango)(entity);
                _fun62188_ip = 111; continue _fun62188;
 87:
                mike = _closure1_slot6;
                tango = mike.nativeModules;
                zulu = tango.ensureModule;
                mike = argFoo;
                entity = zulu.bind(tango)(mike);
 111:
                return entity;
            }
        };
        golf['ensureModule'] = yankee;
        romeo = function() { // Original name: get canBootstrapNewUpdater
            _fun62189: for(var _fun62189_ip = 0; ; ) switch(_fun62189_ip) {
 0:
                entity = _closure1_slot6;
                entity = entity.nativeModules;
                entity = entity.canBootstrapNewUpdater;
                if(entity) { _fun62189_ip = 26; continue _fun62189 }
 24:
                entity = false;
 26:
                return entity;
            }
        };
        yankee = 'canBootstrapNewUpdater';
        Object.defineProperty(golf, yankee, {get: romeo, set: entity, enumerable: true});
        yankee = function() { // Original name: getCrashReporterMetadata
            entity = _closure1_slot6;
            mike = entity.crashReporter;
            entity = mike.getMetadata;
            entity = entity.bind(mike)();
            return entity;
        };
        golf['getCrashReporterMetadata'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: getSetting
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = argBar;
            var _closure2_slot1 = mike;
            zulu = _closure1_slot4;
            mike = undefined;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun62193: for(var _fun62193_ip = 0; ; ) switch(_fun62193_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun62193_ip = 58; continue _fun62193 }
 7:
                        mike = _closure1_slot6;
                        report = mike.settings;
                        tango = report.get;
                        zulu = _closure2_slot0;
                        mike = _closure2_slot1;
                        mike = tango.bind(report)(zulu, mike);
                        SaveGenerator(address=46);
 44:
                        return mike;
 46:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zulu) { _fun62193_ip = 55; continue _fun62193 }
 52:
                        return mike;
 55:
                        return mike;
 58:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        };
        golf['getSetting'] = yankee;
        yankee = function() { // Original name: beforeUnload
            _fun62194: for(var _fun62194_ip = 0; ; ) switch(_fun62194_ip) {
 0:
                options = this;
                entity = undefined;
                mike = undefined;
                report = undefined;
                zulu = undefined;
 11: // try_start_0
                oscar = options.requireModule;
                tango = 'discord_overlay2';
                zulu = oscar.bind(options)(tango);
 28: // try_end0
                _fun62194_ip = 32; continue _fun62194;
 30: // catch_target0
                CatchBlockStart(arg_register=3);
 32:
                oscar = zulu;
                tango = oscar;
                if(!oscar) { _fun62194_ip = 50; continue _fun62194 }
 41:
                oscar = zulu;
                tango = oscar.reset;
 50:
                if(!tango) { _fun62194_ip = 66; continue _fun62194 }
 53:
                oscar = zulu;
                tango = oscar.reset;
                tango = tango.bind(oscar)();
 66:
                golf = zulu;
                oscar = golf;
                if(!golf) { _fun62194_ip = 84; continue _fun62194 }
 75:
                golf = zulu;
                oscar = golf.disconnectAllProcesses;
 84:
                tango = oscar;
                if(!oscar) { _fun62194_ip = 99; continue _fun62194 }
 90:
                oscar = zulu;
                tango = oscar.destroyHostProcess;
 99:
                if(!tango) { _fun62194_ip = 125; continue _fun62194 }
 102:
                tango = zulu;
                zulu = tango.disconnectAllProcesses;
                zulu = zulu.bind(tango)();
                zulu = tango.destroyHostProcess;
                zulu = zulu.bind(tango)();
 125:
                zulu = _closure1_slot6;
                tango = zulu.remotePowerMonitor;
                zulu = tango.removeAllListeners;
                zulu = zulu.bind(tango)();
                golf = global;
                verify = golf.window;
                verify = verify.location;
                verify = verify.origin;
                golf = golf.window;
                golf = golf.GLOBAL_ENV;
                golf = golf.MIGRATION_SOURCE_ORIGIN;
                golf = verify === golf;
                tango = golf;
                if(!golf) { _fun62194_ip = 255; continue _fun62194 }
 195:
                yankee = _closure1_slot0;
                romeo = _closure1_slot2;
                golf = 6;
                golf = romeo[golf];
                golf = yankee.bind(entity)(golf);
                offset = golf.Storage;
                verify = offset.get;
                golf = 7;
                golf = romeo[golf];
                golf = yankee.bind(entity)(golf);
                golf = golf.DOMAIN_MIGRATION_SUCCESS_KEY;
                verify = verify.bind(offset)(golf);
                golf = true;
                tango = golf !== verify;
 255:
                zulu = tango;
                if(!tango) { _fun62194_ip = 282; continue _fun62194 }
 261:
                golf = options.supportsFeature;
                tango = _closure1_slot5;
                tango = tango.USER_DATA_CACHE;
                zulu = golf.bind(options)(tango);
 282:
                if(!zulu) { _fun62194_ip = 346; continue _fun62194 }
 285:
                zulu = _closure1_slot6;
                golf = zulu.userDataCache;
                tango = golf.cacheUserData;
                options = _closure1_slot0;
                verify = _closure1_slot2;
                zulu = 6;
                zulu = verify[zulu];
                zulu = options.bind(entity)(zulu);
                options = zulu.Storage;
                zulu = options.stringify;
                zulu = zulu.bind(options)();
                zulu = tango.bind(golf)(zulu);
 346:
                tango = _closure1_slot6;
                golf = null;
                tango = golf == tango;
                zulu = tango;
                if(tango) { _fun62194_ip = 378; continue _fun62194 }
 362:
                tango = _closure1_slot6;
                tango = tango.window;
                mike = tango;
                zulu = golf == tango;
 378:
                if(zulu) { _fun62194_ip = 440; continue _fun62194 }
 381:
                tango = mike;
                zulu = tango.close;
                mike = _closure1_slot6;
                options = golf == mike;
                mike = undefined;
                if(options) { _fun62194_ip = 435; continue _fun62194 }
 403:
                oscar = _closure1_slot6;
                oscar = oscar.globalOverlay;
                report = oscar;
                oscar = golf == oscar;
                mike = undefined;
                if(oscar) { _fun62194_ip = 435; continue _fun62194 }
 427:
                mike = report.WINDOW_KEY;
 435:
                mike = zulu.bind(tango)(mike);
 440:
                return entity;
            }
        };
        golf['beforeUnload'] = yankee;
        yankee = function(argFoo, argBar, argBaz, argCorge) { // Original name: inputEventRegister
            _fun62195: for(var _fun62195_ip = 0; ; ) switch(_fun62195_ip) {
 0:
                report = argBar;
                zulu = this;
                entity = global;
                tango = entity.Array;
                mike = tango.isArray;
                mike = mike.bind(tango)(report);
                tango = report;
                if(mike) { _fun62195_ip = 40; continue _fun62195 }
 30:
                mike = report.toJS;
                tango = mike.bind(report)();
 40:
                mike = zulu.getDiscordUtils;
                golf = mike.bind(zulu)();
                oscar = golf.inputEventRegister;
                zulu = entity.parseInt;
                entity = undefined;
                mike = argFoo;
                report = zulu.bind(entity)(mike);
                zulu = tango.map;
                mike = function(argFoo) {
                    _fun62196: for(var _fun62196_ip = 0; ; ) switch(_fun62196_ip) {
 0:
                        oscar = argFoo;
                        entity = oscar[Symbol.iterator];
                        oscar = entity().next;
                        zulu = oscar().value;
                        mike = entity;
                        options = undefined;
                        mike = mike === options;
                        report = undefined;
                        if(mike) { _fun62196_ip = 27; continue _fun62196 }
 24:
                        report = zulu;
 27:
                        tango = undefined;
                        if(mike) { _fun62196_ip = 57; continue _fun62196 }
 32:
                        golf = oscar().value;
                        zulu = entity;
                        zulu = zulu === options;
                        tango = undefined;
                        mike = zulu;
                        if(zulu) { _fun62196_ip = 57; continue _fun62196 }
 51:
                        tango = golf;
                        mike = zulu;
 57:
                        zulu = undefined;
                        if(mike) { _fun62196_ip = 87; continue _fun62196 }
 62:
                        golf = oscar().value;
                        oscar = entity;
                        oscar = oscar === options;
                        zulu = undefined;
                        mike = oscar;
                        if(oscar) { _fun62196_ip = 87; continue _fun62196 }
 81:
                        zulu = golf;
                        mike = oscar;
 87:
                        if(mike) { _fun62196_ip = 93; continue _fun62196 }
 90:
                        entity.return();
 93:
                        mike = 'string';
                        entity = typeof zulu;
                        if(!(mike !== entity)) { _fun62196_ip = 118; continue _fun62196 }
 104:
                        entity = new Array(2);
                        entity[0] = report;
                        entity[1] = tango;
                        _fun62196_ip = 137; continue _fun62196;
 118:
                        mike = new Array(3);
                        mike[0] = report;
                        mike[1] = tango;
                        mike[2] = zulu;
                        entity = mike;
 137:
                        return entity;
                    }
                };
                offset = zulu.bind(tango)(mike);
                verify = argBaz;
                options = argCorge;
                romeo = golf;
                yankee = report;
                mike = romeo[oscar](yankee, offset, verify, options, golf);
                return entity;
            }
        };
        golf['inputEventRegister'] = yankee;
        yankee = function(argFoo) { // Original name: inputEventUnregister
            mike = this;
            entity = mike.getDiscordUtils;
            tango = entity.bind(mike)();
            zulu = tango.inputEventUnregister;
            entity = global;
            report = entity.parseInt;
            entity = undefined;
            mike = argFoo;
            mike = report.bind(entity)(mike);
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        golf['inputEventUnregister'] = yankee;
        yankee = function(argFoo) { // Original name: setOnInputEventCallback
            _fun62198: for(var _fun62198_ip = 0; ; ) switch(_fun62198_ip) {
 0:
                zulu = this;
                tango = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 5;
                mike = mike[entity];
                entity = undefined;
                mike = tango.bind(entity)(mike);
                mike = mike.isPlatformEmbedded;
                if(!mike) { _fun62198_ip = 63; continue _fun62198 }
 37:
                mike = zulu.getDiscordUtils;
                tango = mike.bind(zulu)();
                zulu = tango.inputWatchAll;
                mike = argFoo;
                mike = zulu.bind(tango)(mike);
 63:
                return entity;
            }
        };
        golf['setOnInputEventCallback'] = yankee;
        yankee = function(argFoo) { // Original name: setFocused
            mike = this;
            entity = mike.getDiscordUtils;
            zulu = entity.bind(mike)();
            mike = zulu.inputSetFocused;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        golf['setFocused'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: setObservedGamesCallback
            _fun62200: for(var _fun62200_ip = 0; ; ) switch(_fun62200_ip) {
 0:
                tango = this;
                mike = argFoo;
                zulu = argBar;
                var _closure2_slot0 = zulu;
 15: // try_start_0
                zulu = {};
                _closure1_slot11 = zulu;
                zulu = 0;
                var _closure2_slot1 = zulu;
                zulu = tango.getDiscordUtils;
                tango = zulu.bind(tango)();
                zulu = tango.setObservedGamesCallback;
                oscar = mike;
                report = oscar.map;
                mike = function(argFoo) {
                    _fun62201: for(var _fun62201_ip = 0; ; ) switch(_fun62201_ip) {
 0:
                        mike = argFoo;
                        zulu = _closure2_slot1;
                        zulu = zulu + 1;
                        _closure2_slot1 = zulu;
                        tango = mike.id;
                        entity = null;
                        if(!(entity != tango)) { _fun62201_ip = 44; continue _fun62201 }
 28:
                        tango = _closure1_slot11;
                        entity = mike.id;
                        tango[zulu] = entity;
 44:
                        entity = {};
                        oscar = entity;
                        report = mike;
                        tango = copyDataProperties(oscar, report);
                        tango = mike.cmdLine;
                        mike = 'cmdline';
                        entity[mike] = tango;
                        mike = 'id';
                        entity[mike] = zulu;
                        return entity;
                    }
                };
                mike = report.bind(oscar)(mike);
                entity = function(argFoo) {
                    tango = argFoo;
                    zulu = _closure2_slot0;
                    mike = tango.map;
                    entity = _closure1_slot19;
                    mike = mike.bind(tango)(entity);
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                entity = zulu.bind(tango)(mike, entity);
 75: // try_end0
                _fun62200_ip = 79; continue _fun62200;
 77: // catch_target0
                CatchBlockStart(arg_register=0);
 79:
                entity = undefined;
                return entity;
            }
        };
        golf['setObservedGamesCallback'] = yankee;
        yankee = function(argFoo) { // Original name: setCandidateGamesCallback
            zulu = this;
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = zulu.getDiscordUtils;
            zulu = mike.bind(zulu)();
            mike = zulu.setCandidateGamesCallback;
            entity = function(argFoo) {
                tango = argFoo;
                zulu = _closure2_slot0;
                mike = tango.map;
                entity = _closure1_slot19;
                mike = mike.bind(tango)(entity);
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        golf['setCandidateGamesCallback'] = yankee;
        yankee = function() { // Original name: clearCandidateGamesCallback
            mike = this;
            entity = mike.getDiscordUtils;
            mike = entity.bind(mike)();
            entity = mike.clearCandidateGamesCallback;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        golf['clearCandidateGamesCallback'] = yankee;
        yankee = function(argFoo) { // Original name: setGameCandidateOverrides
            report = argFoo;
            mike = this;
            entity = mike.getDiscordUtils;
            zulu = entity.bind(mike)();
            mike = zulu.setGameCandidateOverrides;
            tango = report.map;
            entity = function(argFoo) {
                mike = argFoo;
                entity = {};
                oscar = entity;
                report = mike;
                zulu = copyDataProperties(oscar, report);
                tango = mike.id;
                zulu = 'gameId';
                entity[zulu] = tango;
                zulu = mike.name;
                mike = 'gameName';
                entity[mike] = zulu;
                return entity;
            };
            entity = tango.bind(report)(entity);
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        golf['setGameCandidateOverrides'] = yankee;
        yankee = function(argFoo, argBar, argBaz) { // Original name: setObserverDebugCallback
            zulu = this;
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = zulu.getDiscordUtils;
            report = mike.bind(zulu)();
            tango = report.setObserverDebugCallback;
            zulu = function(argFoo) {
                zulu = _closure2_slot0;
                mike = undefined;
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            mike = argBar;
            entity = argBaz;
            entity = tango.bind(report)(zulu, mike, entity);
            entity = undefined;
            return entity;
        };
        golf['setObserverDebugCallback'] = yankee;
        yankee = function() { // Original name: clearObserverDebugCallback
            mike = this;
            entity = mike.getDiscordUtils;
            oscar = entity.bind(mike)();
            report = oscar.setObserverDebugCallback;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            mike = mike.GameDetectionDebugLevel;
            tango = mike.NONE;
            zulu = null;
            mike = 0;
            mike = report.bind(oscar)(zulu, tango, mike);
            return entity;
        };
        golf['clearObserverDebugCallback'] = yankee;
        yankee = function() { // Original name: shouldDisplayNotifications
            mike = this;
            entity = mike.getDiscordUtils;
            mike = entity.bind(mike)();
            entity = mike.shouldDisplayNotifications;
            entity = entity.bind(mike)();
            return entity;
        };
        golf['shouldDisplayNotifications'] = yankee;
        yankee = function() { // Original name: getVoiceEngine
            _fun62212: for(var _fun62212_ip = 0; ; ) switch(_fun62212_ip) {
 0:
                tango = this;
                zulu = tango.requireModule;
                entity = 'discord_voice';
                entity = zulu.bind(tango)(entity);
                var _closure2_slot0 = entity;
                tango = _closure1_slot12;
                if(tango) { _fun62212_ip = 74; continue _fun62212 }
 36:
                oscar = _closure1_slot0;
                report = _closure1_slot2;
                tango = 9;
                report = report[tango];
                tango = undefined;
                report = oscar.bind(tango)(report);
                tango = report.setNativeLogFn;
                mike = function(argFoo, argBar, argBaz) {
                    tango = _closure2_slot0;
                    zulu = tango.consoleLog;
                    entity = global;
                    entity = entity.HermesInternal;
                    golf = entity.concat;
                    oscar = '[';
                    report = argFoo;
                    mike = '] ';
                    entity = argBaz;
                    mike = golf.bind(oscar)(report, mike, entity);
                    entity = argBar;
                    entity = zulu.bind(tango)(entity, mike);
                    entity = undefined;
                    return entity;
                };
                mike = tango.bind(report)(mike);
 74:
                mike = true;
                _closure1_slot12 = mike;
                return entity;
            }
        };
        golf['getVoiceEngine'] = yankee;
        yankee = function() { // Original name: getDiscordUtils
            _fun62214: for(var _fun62214_ip = 0; ; ) switch(_fun62214_ip) {
 0:
                zulu = this;
                entity = _closure1_slot12;
                if(entity) { _fun62214_ip = 27; continue _fun62214 }
 13: // try_start_0
                entity = zulu.getVoiceEngine;
                entity = entity.bind(zulu)();
 23: // try_end0
                _fun62214_ip = 27; continue _fun62214;
 25: // catch_target0
                CatchBlockStart(arg_register=0);
 27:
                mike = zulu.requireModule;
                entity = 'discord_utils';
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        golf['getDiscordUtils'] = yankee;
        yankee = function() { // Original name: isSystemDarkMode
            _fun62215: for(var _fun62215_ip = 0; ; ) switch(_fun62215_ip) {
 0:
                tango = this;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 5;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = mike.isWindows;
                entity = entity.bind(mike)();
                mike = !entity;
                entity = !mike;
                if(mike) { _fun62215_ip = 97; continue _fun62215 }
 47:
                mike = tango.getDiscordUtils;
                oscar = mike.bind(tango)();
                report = oscar.isSystemDarkMode;
                mike = null;
                tango = mike == report;
                zulu = undefined;
                if(tango) { _fun62215_ip = 84; continue _fun62215 }
 74:
                tango = report.call;
                zulu = tango.bind(report)(oscar);
 84:
                mike = mike == zulu;
                if(mike) { _fun62215_ip = 94; continue _fun62215 }
 91:
                mike = zulu;
 94:
                entity = mike;
 97:
                return entity;
            }
        };
        golf['isSystemDarkMode'] = yankee;
        yankee = function() { // Original name: getVoiceFilters
            zulu = this;
            mike = zulu.requireModule;
            entity = 'discord_voice_filters';
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        golf['getVoiceFilters'] = yankee;
        yankee = function() { // Original name: getGameUtils
            zulu = this;
            mike = zulu.requireModule;
            entity = 'discord_game_utils';
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        golf['getGameUtils'] = yankee;
        yankee = function() { // Original name: getCloudSync
            zulu = this;
            mike = zulu.requireModule;
            entity = 'discord_cloudsync';
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        golf['getCloudSync'] = yankee;
        yankee = function() { // Original name: getDispatch
            zulu = this;
            mike = zulu.requireModule;
            entity = 'discord_dispatch';
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        golf['getDispatch'] = yankee;
        yankee = function(argFoo) { // Original name: setBadge
            _fun62220: for(var _fun62220_ip = 0; ; ) switch(_fun62220_ip) {
 0:
                oscar = argFoo;
                report = this;
                tango = _closure1_slot0;
                entity = _closure1_slot2;
                golf = 5;
                zulu = entity[golf];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.getPlatformName;
                tango = zulu.bind(tango)();
                zulu = 'darwin';
                if(!(zulu !== tango)) { _fun62220_ip = 186; continue _fun62220 }
 54:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                zulu = zulu[golf];
                tango = tango.bind(entity)(zulu);
                zulu = tango.getPlatformName;
                tango = zulu.bind(tango)();
                zulu = 'win32';
                if(!(zulu !== tango)) { _fun62220_ip = 166; continue _fun62220 }
 91:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                zulu = zulu[golf];
                tango = tango.bind(entity)(zulu);
                zulu = tango.getPlatformName;
                tango = zulu.bind(tango)();
                zulu = 'linux';
                if(!(zulu === tango)) { _fun62220_ip = 261; continue _fun62220 }
 129:
                zulu = _closure1_slot6;
                golf = zulu.remoteApp;
                tango = golf.setBadgeCount;
                zulu = 0;
                options = oscar >= zulu;
                if(!options) { _fun62220_ip = 159; continue _fun62220 }
 156:
                zulu = oscar;
 159:
                zulu = tango.bind(golf)(zulu);
                _fun62220_ip = 261; continue _fun62220;
 166:
                tango = report.send;
                zulu = 'APP_BADGE_SET';
                zulu = tango.bind(report)(zulu, oscar);
                _fun62220_ip = 261; continue _fun62220;
 186:
                tango = '•';
                zulu = -1;
                if(!(zulu !== oscar)) { _fun62220_ip = 234; continue _fun62220 }
 200:
                zulu = 0;
                zulu = oscar > zulu;
                report = '';
                tango = report;
                if(!zulu) { _fun62220_ip = 234; continue _fun62220 }
 216:
                zulu = global;
                zulu = zulu.HermesInternal;
                zulu = zulu.concat;
                tango = zulu.bind(report)(oscar);
 234:
                mike = _closure1_slot6;
                mike = mike.remoteApp;
                zulu = mike.dock;
                mike = zulu.setBadge;
                mike = mike.bind(zulu)(tango);
 261:
                return entity;
            }
        };
        golf['setBadge'] = yankee;
        yankee = function(argFoo) { // Original name: setSystemTrayIcon
            _fun62221: for(var _fun62221_ip = 0; ; ) switch(_fun62221_ip) {
 0:
                report = this;
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 5;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                mike = mike.isPlatformEmbedded;
                if(!mike) { _fun62221_ip = 58; continue _fun62221 }
 37:
                tango = report.send;
                zulu = 'SYSTEM_TRAY_SET_ICON';
                mike = argFoo;
                mike = tango.bind(report)(zulu, mike);
 58:
                return entity;
            }
        };
        golf['setSystemTrayIcon'] = yankee;
        yankee = function(argFoo) { // Original name: setThumbarButtons
            _fun62222: for(var _fun62222_ip = 0; ; ) switch(_fun62222_ip) {
 0:
                zulu = this;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 5;
                tango = tango[entity];
                entity = undefined;
                tango = report.bind(entity)(tango);
                tango = tango.isPlatformEmbedded;
                if(!tango) { _fun62222_ip = 96; continue _fun62222 }
 37:
                mike = _closure1_slot6;
                report = mike.thumbar;
                oscar = null;
                mike = oscar == report;
                if(mike) { _fun62222_ip = 68; continue _fun62222 }
 58:
                tango = report.setThumbarButtons;
                mike = oscar == tango;
 68:
                if(mike) { _fun62222_ip = 96; continue _fun62222 }
 71:
                tango = report.setThumbarButtons;
                mike = zulu.isSystemDarkMode;
                zulu = mike.bind(zulu)();
                mike = argFoo;
                mike = tango.bind(report)(mike, zulu);
 96:
                return entity;
            }
        };
        golf['setThumbarButtons'] = yankee;
        yankee = function(argFoo) { // Original name: bounceDock
            _fun62223: for(var _fun62223_ip = 0; ; ) switch(_fun62223_ip) {
 0:
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 5;
                tango = tango[zulu];
                zulu = undefined;
                tango = report.bind(zulu)(tango);
                tango = tango.isPlatformEmbedded;
                if(!tango) { _fun62223_ip = 62; continue _fun62223 }
 36:
                tango = _closure1_slot6;
                tango = tango.remoteApp;
                var _closure2_slot0 = tango;
                oscar = tango.dock;
                report = null;
                if(!(report == oscar)) { _fun62223_ip = 64; continue _fun62223 }
 62:
                return zulu;
 64:
                oscar = tango.dock;
                report = oscar.bounce;
                tango = argFoo;
                tango = report.bind(oscar)(tango);
                var _closure2_slot1 = tango;
                mike = _closure1_slot4;
                entity = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun62225: for(var _fun62225_ip = 0; ; ) switch(_fun62225_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun62225_ip = 55; continue _fun62225 }
 7:
                            mike = _closure2_slot1;
                            SaveGenerator(address=18);
 16:
                            return mike;
 18:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(tango) { _fun62225_ip = 52; continue _fun62225 }
 24:
                            zulu = _closure2_slot0;
                            tango = zulu.dock;
                            zulu = tango.cancelBounce;
                            zulu = zulu.bind(tango)(mike);
                            zulu = undefined;
                            return zulu;
 52:
                            return mike;
 55:
                            return entity;
                        }
                    };
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        golf['bounceDock'] = yankee;
        yankee = function(argFoo) { // Original name: setSystemTrayApplications
            _fun62226: for(var _fun62226_ip = 0; ; ) switch(_fun62226_ip) {
 0:
                report = this;
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 5;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                mike = mike.isPlatformEmbedded;
                if(!mike) { _fun62226_ip = 58; continue _fun62226 }
 37:
                tango = report.send;
                zulu = 'SYSTEM_TRAY_SET_APPLICATIONS';
                mike = argFoo;
                mike = tango.bind(report)(zulu, mike);
 58:
                return entity;
            }
        };
        golf['setSystemTrayApplications'] = yankee;
        romeo = function() { // Original name: get architecture
            _fun62227: for(var _fun62227_ip = 0; ; ) switch(_fun62227_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                zulu = entity.isPlatformEmbedded;
                entity = '';
                if(!zulu) { _fun62227_ip = 54; continue _fun62227 }
 38:
                mike = _closure1_slot6;
                mike = mike.process;
                entity = mike.arch;
 54:
                return entity;
            }
        };
        yankee = 'architecture';
        Object.defineProperty(golf, yankee, {get: romeo, set: entity, enumerable: true});
        romeo = function() { // Original name: get releaseChannel
            _fun62228: for(var _fun62228_ip = 0; ; ) switch(_fun62228_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 5;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                mike = mike.isPlatformEmbedded;
                if(mike) { _fun62228_ip = 40; continue _fun62228 }
 34:
                mike = '';
                return mike;
 40:
                entity = _closure1_slot6;
                mike = entity.remoteApp;
                entity = mike.getReleaseChannel;
                mike = entity.bind(mike)();
                entity = null;
                zulu = entity != mike;
                entity = '';
                if(!zulu) { _fun62228_ip = 76; continue _fun62228 }
 73:
                entity = mike;
 76:
                return entity;
            }
        };
        yankee = 'releaseChannel';
        Object.defineProperty(golf, yankee, {get: romeo, set: entity, enumerable: true});
        romeo = function() { // Original name: get version
            entity = _closure1_slot8;
            return entity;
        };
        yankee = 'version';
        Object.defineProperty(golf, yankee, {get: romeo, set: entity, enumerable: true});
        romeo = function() { // Original name: get buildNumber
            entity = _closure1_slot9;
            return entity;
        };
        yankee = 'buildNumber';
        Object.defineProperty(golf, yankee, {get: romeo, set: entity, enumerable: true});
        romeo = function() { // Original name: get moduleVersions
            entity = _closure1_slot10;
            return entity;
        };
        yankee = 'moduleVersions';
        Object.defineProperty(golf, yankee, {get: romeo, set: entity, enumerable: true});
        romeo = function() { // Original name: get parsedOSRelease
            _fun62232: for(var _fun62232_ip = 0; ; ) switch(_fun62232_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                entity = entity.isPlatformEmbedded;
                if(entity) { _fun62232_ip = 40; continue _fun62232 }
 34:
                entity = new Array(0);
                _fun62232_ip = 87; continue _fun62232;
 40:
                mike = _closure1_slot6;
                mike = mike.os;
                tango = mike.release;
                zulu = tango.split;
                mike = '.';
                tango = zulu.bind(tango)(mike);
                zulu = tango.map;
                mike = function(argFoo) {
                    entity = global;
                    tango = entity.parseInt;
                    zulu = undefined;
                    mike = argFoo;
                    entity = 10;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                };
                entity = zulu.bind(tango)(mike);
 87:
                return entity;
            }
        };
        yankee = 'parsedOSRelease';
        Object.defineProperty(golf, yankee, {get: romeo, set: entity, enumerable: true});
        yankee = function(argFoo) { // Original name: copy
            _fun62234: for(var _fun62234_ip = 0; ; ) switch(_fun62234_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                zulu = zulu.isPlatformEmbedded;
                if(!zulu) { _fun62234_ip = 58; continue _fun62234 }
 34:
                mike = _closure1_slot6;
                tango = mike.clipboard;
                zulu = tango.copy;
                mike = argFoo;
                mike = zulu.bind(tango)(mike);
 58:
                return entity;
            }
        };
        golf['copy'] = yankee;
        yankee = function(argFoo) { // Original name: copyImage
            mike = argFoo;
            var _closure2_slot0 = mike;
            zulu = _closure1_slot4;
            mike = undefined;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun62237: for(var _fun62237_ip = 0; ; ) switch(_fun62237_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun62237_ip = 193; continue _fun62237 }
 10:
                        tango = _closure1_slot1;
                        oscar = _closure1_slot2;
                        mike = 3;
                        golf = oscar[mike];
                        zulu = undefined;
                        verify = tango.bind(zulu)(golf);
                        options = _closure1_slot0;
                        golf = 5;
                        golf = oscar[golf];
                        golf = options.bind(zulu)(golf);
                        options = golf.isPlatformEmbedded;
                        golf = 'Copy image method called outside native app';
                        golf = verify.bind(zulu)(options, golf);
                        mike = oscar[mike];
                        oscar = tango.bind(zulu)(mike);
                        mike = _closure1_slot6;
                        mike = mike.clipboard;
                        mike = mike.copyImage;
                        tango = 'function';
                        mike = typeof mike;
                        tango = tango === mike;
                        mike = 'Copy image not supported';
                        mike = oscar.bind(zulu)(tango, mike);
                        oscar = _closure1_slot18;
                        mike = _closure2_slot0;
                        mike = oscar.bind(zulu)(mike);
                        SaveGenerator(address=137);
 135:
                        return mike;
 137:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(oscar) { _fun62237_ip = 190; continue _fun62237 }
 143:
                        report = _closure1_slot6;
                        golf = report.clipboard;
                        oscar = golf.copyImage;
                        report = global;
                        options = report.Buffer;
                        report = options.from;
                        report = report.bind(options)(mike);
                        tango = _closure2_slot0;
                        tango = oscar.bind(golf)(report, tango);
                        return zulu;
 190:
                        return mike;
 193:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        };
        golf['copyImage'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: copyImageBlob
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = argBar;
            var _closure2_slot1 = mike;
            zulu = _closure1_slot4;
            mike = undefined;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun62240: for(var _fun62240_ip = 0; ; ) switch(_fun62240_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun62240_ip = 89; continue _fun62240 }
 7:
                        tango = _closure2_slot0;
                        mike = tango.arrayBuffer;
                        mike = mike.bind(tango)();
                        SaveGenerator(address=28);
 26:
                        return mike;
 28:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun62240_ip = 86; continue _fun62240 }
 34:
                        tango = _closure1_slot6;
                        oscar = tango.clipboard;
                        report = oscar.copyImage;
                        tango = global;
                        golf = tango.Buffer;
                        tango = golf.from;
                        tango = tango.bind(golf)(mike);
                        zulu = _closure2_slot1;
                        zulu = report.bind(oscar)(tango, zulu);
                        zulu = undefined;
                        return zulu;
 86:
                        return mike;
 89:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        };
        golf['copyImageBlob'] = yankee;
        yankee = function(argFoo) { // Original name: saveImage
            mike = argFoo;
            var _closure2_slot0 = mike;
            zulu = _closure1_slot4;
            mike = undefined;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun62243: for(var _fun62243_ip = 0; ; ) switch(_fun62243_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun62243_ip = 329; continue _fun62243 }
 10:
                        zulu = _closure1_slot1;
                        oscar = _closure1_slot2;
                        mike = 3;
                        mike = oscar[mike];
                        tango = undefined;
                        options = zulu.bind(tango)(mike);
                        golf = _closure1_slot0;
                        mike = 5;
                        mike = oscar[mike];
                        mike = golf.bind(tango)(mike);
                        golf = mike.isPlatformEmbedded;
                        mike = 'Save image method called outside native app';
                        mike = options.bind(tango)(golf, mike);
                        mike = 10;
                        mike = oscar[mike];
                        golf = zulu.bind(tango)(mike);
                        oscar = golf.toURLSafe;
                        zulu = _closure2_slot0;
                        zulu = oscar.bind(golf)(zulu);
                        oscar = null;
                        if(!(oscar != zulu)) { _fun62243_ip = 320; continue _fun62243 }
 108:
                        options = zulu.pathname;
                        golf = options.split;
                        zulu = '/';
                        golf = golf.bind(options)(zulu);
                        zulu = golf.pop;
                        zulu = zulu.bind(golf)();
                        golf = oscar != zulu;
                        yankee = 'unknown';
                        if(!golf) { _fun62243_ip = 152; continue _fun62243 }
 149:
                        yankee = zulu;
 152:
                        golf = _closure1_slot0;
                        zulu = _closure1_slot2;
                        options = 6;
                        zulu = zulu[options];
                        zulu = golf.bind(tango)(zulu);
                        verify = zulu.Storage;
                        golf = verify.get;
                        zulu = _closure1_slot13;
                        romeo = golf.bind(verify)(zulu);
                        zulu = _closure1_slot18;
                        mike = _closure2_slot0;
                        mike = zulu.bind(tango)(mike);
                        SaveGenerator(address=209);
 207:
                        return mike;
 209:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zulu) { _fun62243_ip = 326; continue _fun62243 }
 215:
                        zulu = global;
                        golf = zulu.Buffer;
                        zulu = golf.from;
                        offset = zulu.bind(golf)(mike);
                        zulu = _closure1_slot6;
                        verify = zulu.fileManager;
                        golf = verify.saveWithDialog;
                        foxtrot = oscar != romeo;
                        zulu = undefined;
                        if(!foxtrot) { _fun62243_ip = 261; continue _fun62243 }
 258:
                        zulu = romeo;
 261:
                        zulu = golf.bind(verify)(offset, yankee, zulu);
                        SaveGenerator(address=272);
 270:
                        return zulu;
 272:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                        if(golf) { _fun62243_ip = 323; continue _fun62243 }
 278:
                        if(!(oscar != zulu)) { _fun62243_ip = 320; continue _fun62243 }
 282:
                        golf = _closure1_slot0;
                        oscar = _closure1_slot2;
                        oscar = oscar[options];
                        oscar = golf.bind(tango)(oscar);
                        golf = oscar.Storage;
                        oscar = golf.set;
                        report = _closure1_slot13;
                        report = oscar.bind(golf)(report, zulu);
 320:
                        return tango;
 323:
                        return zulu;
 326:
                        return mike;
 329:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        };
        golf['saveImage'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: saveFile
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = argBar;
            var _closure2_slot1 = mike;
            zulu = _closure1_slot4;
            mike = undefined;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun62246: for(var _fun62246_ip = 0; ; ) switch(_fun62246_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun62246_ip = 238; continue _fun62246 }
 10:
                        zulu = _closure1_slot1;
                        report = _closure1_slot2;
                        mike = 3;
                        mike = report[mike];
                        oscar = undefined;
                        options = zulu.bind(oscar)(mike);
                        golf = _closure1_slot0;
                        mike = 5;
                        mike = report[mike];
                        mike = golf.bind(oscar)(mike);
                        golf = mike.isPlatformEmbedded;
                        mike = 'Save file method called outside native app';
                        mike = options.bind(oscar)(golf, mike);
                        mike = 10;
                        mike = report[mike];
                        golf = zulu.bind(oscar)(mike);
                        report = golf.toURLSafe;
                        mike = _closure2_slot0;
                        report = report.bind(golf)(mike);
                        mike = null;
                        if(!(mike != report)) { _fun62246_ip = 235; continue _fun62246 }
 108:
                        golf = _closure2_slot1;
                        if(!(mike == golf)) { _fun62246_ip = 148; continue _fun62246 }
 116:
                        options = report.pathname;
                        golf = options.split;
                        report = '/';
                        golf = golf.bind(options)(report);
                        report = golf.pop;
                        report = report.bind(golf)();
                        _fun62246_ip = 152; continue _fun62246;
 148:
                        report = _closure2_slot1;
 152:
                        options = mike != report;
                        golf = 'unknown';
                        if(!options) { _fun62246_ip = 166; continue _fun62246 }
 163:
                        golf = report;
 166:
                        report = _closure1_slot16;
                        zulu = _closure2_slot0;
                        zulu = report.bind(oscar)(zulu);
                        SaveGenerator(address=183);
 181:
                        return zulu;
 183:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(report) { _fun62246_ip = 232; continue _fun62246 }
 189:
                        report = global;
                        oscar = report.Buffer;
                        report = oscar.from;
                        oscar = report.bind(oscar)(zulu);
                        tango = _closure1_slot6;
                        report = tango.fileManager;
                        tango = report.saveWithDialog;
                        tango = tango.bind(report)(oscar, golf);
                        return tango;
 232:
                        return zulu;
 235:
                        return mike;
 238:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        };
        golf['saveFile'] = yankee;
        yankee = function(argFoo, argBar, argBaz) { // Original name: downloadVoiceFilterFile
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = argBar;
            var _closure2_slot1 = mike;
            mike = argBaz;
            var _closure2_slot2 = mike;
            zulu = _closure1_slot4;
            mike = undefined;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun62249: for(var _fun62249_ip = 0; ; ) switch(_fun62249_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun62249_ip = 158; continue _fun62249 }
 10:
                        report = _closure1_slot1;
                        oscar = _closure1_slot2;
                        mike = 3;
                        mike = oscar[mike];
                        zulu = undefined;
                        options = report.bind(zulu)(mike);
                        golf = _closure1_slot0;
                        mike = 5;
                        mike = oscar[mike];
                        mike = golf.bind(zulu)(mike);
                        golf = mike.isPlatformEmbedded;
                        mike = 'Download voice filter file method called outside native app';
                        mike = options.bind(zulu)(golf, mike);
                        mike = 10;
                        mike = oscar[mike];
                        golf = report.bind(zulu)(mike);
                        oscar = golf.toURLSafe;
                        report = _closure2_slot0;
                        oscar = oscar.bind(golf)(report);
                        report = null;
                        if(!(report != oscar)) { _fun62249_ip = 152; continue _fun62249 }
 105:
                        tango = _closure1_slot6;
                        golf = tango.fileManager;
                        oscar = golf.maybeDownloadVoiceFilterFile;
                        report = _closure2_slot0;
                        tango = _closure2_slot1;
                        mike = _closure2_slot2;
                        mike = oscar.bind(golf)(report, tango, mike);
                        SaveGenerator(address=146);
 144:
                        return mike;
 146:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun62249_ip = 155; continue _fun62249 }
 152:
                        return zulu;
 155:
                        return mike;
 158:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        };
        golf['downloadVoiceFilterFile'] = yankee;
        yankee = function() { // Original name: stopVoiceFilterDownloads
            entity = _closure1_slot6;
            mike = entity.fileManager;
            entity = mike.stopVoiceFilterDownloads;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        golf['stopVoiceFilterDownloads'] = yankee;
        yankee = function() { // Original name: canCopyImage
            _fun62251: for(var _fun62251_ip = 0; ; ) switch(_fun62251_ip) {
 0:
                oscar = arguments[0];
                zulu = undefined;
                if(!(oscar === zulu)) { _fun62251_ip = 11; continue _fun62251 }
 9:
                oscar = undefined;
 11:
                mike = null;
                if(!(mike != oscar)) { _fun62251_ip = 141; continue _fun62251 }
 20:
                report = _closure1_slot1;
                golf = _closure1_slot2;
                tango = 10;
                tango = golf[tango];
                report = report.bind(zulu)(tango);
                tango = report.toURLSafe;
                tango = tango.bind(report)(oscar);
                report = mike == tango;
                oscar = undefined;
                if(report) { _fun62251_ip = 69; continue _fun62251 }
 63:
                oscar = tango.pathname;
 69:
                if(!(mike != oscar)) { _fun62251_ip = 173; continue _fun62251 }
 73:
                report = oscar.split;
                tango = '.';
                report = report.bind(oscar)(tango);
                tango = report.pop;
                report = tango.bind(report)();
                tango = mike == report;
                zulu = undefined;
                if(tango) { _fun62251_ip = 116; continue _fun62251 }
 106:
                tango = report.toLowerCase;
                zulu = tango.bind(report)();
 116:
                if(!(mike != zulu)) { _fun62251_ip = 141; continue _fun62251 }
 120:
                mike = _closure1_slot7;
                entity = mike.includes;
                entity = entity.bind(mike)(zulu);
                if(entity) { _fun62251_ip = 141; continue _fun62251 }
 137:
                entity = false;
                return entity;
 141:
                entity = _closure1_slot6;
                entity = entity.clipboard;
                entity = entity.copyImage;
                mike = 'function';
                entity = typeof entity;
                entity = mike === entity;
                return entity;
 173:
                entity = false;
                return entity;
            }
        };
        golf['canCopyImage'] = yankee;
        yankee = function() { // Original name: cut
            _fun62252: for(var _fun62252_ip = 0; ; ) switch(_fun62252_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                zulu = zulu.isPlatformEmbedded;
                if(!zulu) { _fun62252_ip = 54; continue _fun62252 }
 34:
                mike = _closure1_slot6;
                zulu = mike.clipboard;
                mike = zulu.cut;
                mike = mike.bind(zulu)();
 54:
                return entity;
            }
        };
        golf['cut'] = yankee;
        yankee = function() { // Original name: paste
            _fun62253: for(var _fun62253_ip = 0; ; ) switch(_fun62253_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                zulu = zulu.isPlatformEmbedded;
                if(!zulu) { _fun62253_ip = 54; continue _fun62253 }
 34:
                mike = _closure1_slot6;
                zulu = mike.clipboard;
                mike = zulu.paste;
                mike = mike.bind(zulu)();
 54:
                return entity;
            }
        };
        golf['paste'] = yankee;
        yankee = function() { // Original name: readClipboard
            _fun62254: for(var _fun62254_ip = 0; ; ) switch(_fun62254_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                zulu = entity.isPlatformEmbedded;
                entity = '';
                if(!zulu) { _fun62254_ip = 58; continue _fun62254 }
 38:
                mike = _closure1_slot6;
                zulu = mike.clipboard;
                mike = zulu.read;
                entity = mike.bind(zulu)();
 58:
                return entity;
            }
        };
        golf['readClipboard'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: on
            entity = _closure1_slot6;
            tango = entity.ipc;
            zulu = tango.on;
            mike = argFoo;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        golf['on'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: invoke
            report = 1;
            verify = report;
            options = copyRestArgs(verify);
            entity = _closure1_slot6;
            zulu = entity.ipc;
            mike = zulu.invoke;
            entity = new Array(1);
            oscar = argFoo;
            entity[0] = oscar;
            verify = entity;
            golf = report;
            tango = arraySpread(verify, options, golf);
            verify = mike;
            options = entity;
            golf = zulu;
            entity = apply(verify, options, golf);
            return entity;
        };
        golf['invoke'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: send
            report = 1;
            verify = report;
            options = copyRestArgs(verify);
            entity = _closure1_slot6;
            zulu = entity.ipc;
            mike = zulu.send;
            entity = new Array(1);
            oscar = argFoo;
            entity[0] = oscar;
            verify = entity;
            golf = report;
            tango = arraySpread(verify, options, golf);
            verify = mike;
            options = entity;
            golf = zulu;
            entity = apply(verify, options, golf);
            entity = undefined;
            return entity;
        };
        golf['send'] = yankee;
        yankee = function(argFoo) { // Original name: flashFrame
            entity = _closure1_slot6;
            zulu = entity.window;
            mike = zulu.flashFrame;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        golf['flashFrame'] = yankee;
        yankee = function(argFoo) { // Original name: webAuthnRegister
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = _closure1_slot6;
            tango = mike.nativeModules;
            zulu = tango.ensureModule;
            mike = 'discord_webauthn';
            zulu = zulu.bind(tango)(mike);
            mike = zulu.then;
            entity = function() {
                entity = _closure1_slot6;
                zulu = entity.webAuthn;
                mike = zulu.webAuthnRegister;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        golf['webAuthnRegister'] = yankee;
        yankee = function(argFoo) { // Original name: webAuthnAuthenticate
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = _closure1_slot6;
            tango = mike.nativeModules;
            zulu = tango.ensureModule;
            mike = 'discord_webauthn';
            zulu = zulu.bind(tango)(mike);
            mike = zulu.then;
            entity = function() {
                entity = _closure1_slot6;
                zulu = entity.webAuthn;
                mike = zulu.webAuthnAuthenticate;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        golf['webAuthnAuthenticate'] = yankee;
        yankee = function(argFoo) { // Original name: minimize
            entity = _closure1_slot6;
            zulu = entity.window;
            mike = zulu.minimize;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        golf['minimize'] = yankee;
        yankee = function(argFoo) { // Original name: restore
            entity = _closure1_slot6;
            zulu = entity.window;
            mike = zulu.restore;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        golf['restore'] = yankee;
        yankee = function(argFoo) { // Original name: maximize
            entity = _closure1_slot6;
            zulu = entity.window;
            mike = zulu.maximize;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        golf['maximize'] = yankee;
        yankee = function(argFoo) { // Original name: focus
            _fun62266: for(var _fun62266_ip = 0; ; ) switch(_fun62266_ip) {
 0:
                report = arguments[1];
                tango = this;
                entity = undefined;
                if(!(report === entity)) { _fun62266_ip = 14; continue _fun62266 }
 12:
                report = false;
 14:
                mike = report;
                if(!mike) { _fun62266_ip = 53; continue _fun62266 }
 20:
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                zulu = 5;
                zulu = golf[zulu];
                oscar = oscar.bind(entity)(zulu);
                zulu = oscar.isWindows;
                mike = zulu.bind(oscar)();
 53:
                if(!mike) { _fun62266_ip = 69; continue _fun62266 }
 56:
                zulu = tango.minimize;
                mike = null;
                mike = zulu.bind(tango)(mike);
 69:
                mike = _closure1_slot6;
                tango = mike.window;
                zulu = tango.focus;
                mike = argFoo;
                mike = zulu.bind(tango)(report, mike);
                return entity;
            }
        };
        golf['focus'] = yankee;
        yankee = function() { // Original name: blur
            _fun62267: for(var _fun62267_ip = 0; ; ) switch(_fun62267_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                zulu = zulu.isPlatformEmbedded;
                if(!zulu) { _fun62267_ip = 55; continue _fun62267 }
 34:
                zulu = _closure1_slot6;
                zulu = zulu.window;
                tango = zulu.blur;
                zulu = null;
                if(!(zulu == tango)) { _fun62267_ip = 75; continue _fun62267 }
 55:
                zulu = global;
                tango = zulu.window;
                zulu = tango.blur;
                zulu = zulu.bind(tango)();
                _fun62267_ip = 94; continue _fun62267;
 75:
                mike = _closure1_slot6;
                zulu = mike.window;
                mike = zulu.blur;
                mike = mike.bind(zulu)();
 94:
                return entity;
            }
        };
        golf['blur'] = yankee;
        yankee = function(argFoo) { // Original name: fullscreen
            entity = _closure1_slot6;
            zulu = entity.window;
            mike = zulu.fullscreen;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        golf['fullscreen'] = yankee;
        yankee = function(argFoo) { // Original name: close
            entity = _closure1_slot6;
            zulu = entity.window;
            mike = zulu.close;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        golf['close'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: setAlwaysOnTop
            _fun62270: for(var _fun62270_ip = 0; ; ) switch(_fun62270_ip) {
 0:
                mike = _closure1_slot6;
                mike = mike.window;
                mike = mike.setAlwaysOnTop;
                zulu = 'function';
                mike = typeof mike;
                if(!(zulu === mike)) { _fun62270_ip = 56; continue _fun62270 }
 29:
                entity = _closure1_slot6;
                tango = entity.window;
                zulu = tango.setAlwaysOnTop;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
 56:
                entity = undefined;
                return entity;
            }
        };
        golf['setAlwaysOnTop'] = yankee;
        yankee = function(argFoo) { // Original name: isAlwaysOnTop
            mike = argFoo;
            var _closure2_slot0 = mike;
            zulu = _closure1_slot4;
            mike = undefined;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun62273: for(var _fun62273_ip = 0; ; ) switch(_fun62273_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun62273_ip = 84; continue _fun62273 }
 7:
                        zulu = _closure1_slot6;
                        zulu = zulu.window;
                        tango = zulu.isAlwaysOnTop;
                        report = 'function';
                        tango = typeof tango;
                        zulu = false;
                        if(!(report === tango)) { _fun62273_ip = 78; continue _fun62273 }
 38:
                        mike = _closure1_slot6;
                        report = mike.window;
                        tango = report.isAlwaysOnTop;
                        mike = _closure2_slot0;
                        mike = tango.bind(report)(mike);
                        SaveGenerator(address=69);
 67:
                        return mike;
 69:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        zulu = mike;
                        if(tango) { _fun62273_ip = 81; continue _fun62273 }
 78:
                        return zulu;
 81:
                        return mike;
 84:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        };
        golf['isAlwaysOnTop'] = yankee;
        yankee = function(argFoo) { // Original name: showInactive
            _fun62274: for(var _fun62274_ip = 0; ; ) switch(_fun62274_ip) {
 0:
                mike = _closure1_slot6;
                mike = mike.window;
                mike = mike.showInactive;
                zulu = 'function';
                mike = typeof mike;
                if(!(zulu === mike)) { _fun62274_ip = 52; continue _fun62274 }
 29:
                entity = _closure1_slot6;
                zulu = entity.window;
                mike = zulu.showInactive;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
 52:
                entity = undefined;
                return entity;
            }
        };
        golf['showInactive'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: setMinimumSize
            _fun62275: for(var _fun62275_ip = 0; ; ) switch(_fun62275_ip) {
 0:
                entity = _closure1_slot6;
                tango = null;
                mike = tango == entity;
                entity = undefined;
                report = undefined;
                if(mike) { _fun62275_ip = 36; continue _fun62275 }
 20:
                zulu = _closure1_slot6;
                zulu = zulu.window;
                mike = tango == zulu;
                report = zulu;
 36:
                if(mike) { _fun62275_ip = 49; continue _fun62275 }
 39:
                zulu = report.setMinimumSize;
                mike = tango == zulu;
 49:
                if(mike) { _fun62275_ip = 70; continue _fun62275 }
 52:
                tango = report.setMinimumSize;
                zulu = argFoo;
                mike = argBar;
                mike = tango.bind(report)(zulu, mike);
 70:
                return entity;
            }
        };
        golf['setMinimumSize'] = yankee;
        yankee = function() { // Original name: purgeMemory
            _fun62276: for(var _fun62276_ip = 0; ; ) switch(_fun62276_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                zulu = zulu.isPlatformEmbedded;
                if(!zulu) { _fun62276_ip = 54; continue _fun62276 }
 34:
                mike = _closure1_slot6;
                zulu = mike.processUtils;
                mike = zulu.purgeMemory;
                mike = mike.bind(zulu)();
 54:
                return entity;
            }
        };
        golf['purgeMemory'] = yankee;
        yankee = function(argFoo) { // Original name: updateCrashReporter
            entity = _closure1_slot6;
            zulu = entity.crashReporter;
            mike = zulu.updateCrashReporter;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        golf['updateCrashReporter'] = yankee;
        yankee = function(argFoo) { // Original name: triggerJSException
            entity = _closure1_slot6;
            zulu = entity.crashReporter;
            mike = zulu.triggerJSException;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        golf['triggerJSException'] = yankee;
        yankee = function() { // Original name: flushDNSCache
            _fun62279: for(var _fun62279_ip = 0; ; ) switch(_fun62279_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                zulu = zulu.isPlatformEmbedded;
                if(!zulu) { _fun62279_ip = 54; continue _fun62279 }
 34:
                mike = _closure1_slot6;
                zulu = mike.processUtils;
                mike = zulu.flushDNSCache;
                mike = mike.bind(zulu)();
 54:
                return entity;
            }
        };
        golf['flushDNSCache'] = yankee;
        yankee = function(argFoo) { // Original name: supportsFeature
            entity = _closure1_slot6;
            zulu = entity.features;
            mike = zulu.supports;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        golf['supportsFeature'] = yankee;
        yankee = function() { // Original name: getEnableHardwareAcceleration
            _fun62281: for(var _fun62281_ip = 0; ; ) switch(_fun62281_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                entity = entity.isPlatformEmbedded;
                entity = !entity;
                if(entity) { _fun62281_ip = 57; continue _fun62281 }
 37:
                mike = _closure1_slot6;
                zulu = mike.gpuSettings;
                mike = zulu.getEnableHardwareAcceleration;
                entity = mike.bind(zulu)();
 57:
                return entity;
            }
        };
        golf['getEnableHardwareAcceleration'] = yankee;
        yankee = function(argFoo) { // Original name: setEnableHardwareAcceleration
            entity = _closure1_slot6;
            zulu = entity.gpuSettings;
            mike = zulu.setEnableHardwareAcceleration;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        golf['setEnableHardwareAcceleration'] = yankee;
        yankee = function(argFoo) { // Original name: setChromiumSwitches
            entity = _closure1_slot6;
            zulu = entity.gpuSettings;
            mike = zulu.setChromiumSwitches;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        golf['setChromiumSwitches'] = yankee;
        yankee = function() { // Original name: getGPUDriverVersions
            _fun62284: for(var _fun62284_ip = 0; ; ) switch(_fun62284_ip) {
 0:
                zulu = this;
                tango = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 5;
                mike = mike[entity];
                entity = undefined;
                mike = tango.bind(entity)(mike);
                entity = mike.isWindows;
                entity = entity.bind(mike)();
                if(!entity) { _fun62284_ip = 63; continue _fun62284 }
 41:
                entity = zulu.getDiscordUtils;
                entity = entity.bind(zulu)();
                mike = entity.getGPUDriverVersions;
                entity = null;
                if(!(entity == mike)) { _fun62284_ip = 103; continue _fun62284 }
 63:
                entity = global;
                tango = entity.Promise;
                mike = tango.resolve;
                oscar = entity.Object;
                report = oscar.freeze;
                entity = {};
                entity = report.bind(oscar)(entity);
                entity = mike.bind(tango)(entity);
                _fun62284_ip = 123; continue _fun62284;
 103:
                mike = zulu.getDiscordUtils;
                zulu = mike.bind(zulu)();
                mike = zulu.getGPUDriverVersions;
                entity = mike.bind(zulu)();
 123:
                return entity;
            }
        };
        golf['getGPUDriverVersions'] = yankee;
        yankee = function(argFoo) { // Original name: setZoomFactor
            _fun62285: for(var _fun62285_ip = 0; ; ) switch(_fun62285_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                entity = entity.isPlatformEmbedded;
                zulu = !entity;
                entity = !zulu;
                if(zulu) { _fun62285_ip = 65; continue _fun62285 }
 40:
                mike = _closure1_slot6;
                tango = mike.window;
                zulu = tango.setZoomFactor;
                mike = argFoo;
                mike = zulu.bind(tango)(mike);
                entity = true;
 65:
                return entity;
            }
        };
        golf['setZoomFactor'] = yankee;
        yankee = function(argFoo) { // Original name: setBackgroundThrottling
            _fun62286: for(var _fun62286_ip = 0; ; ) switch(_fun62286_ip) {
 0:
                zulu = argFoo;
                mike = _closure1_slot6;
                mike = mike.window;
                tango = mike.setBackgroundThrottling;
                mike = null;
                if(!(mike == tango)) { _fun62286_ip = 57; continue _fun62286 }
 27:
                mike = _closure1_slot6;
                mike = mike.window;
                tango = mike.webContents;
                mike = tango.setBackgroundThrottling;
                mike = mike.bind(tango)(zulu);
                _fun62286_ip = 77; continue _fun62286;
 57:
                entity = _closure1_slot6;
                mike = entity.window;
                entity = mike.setBackgroundThrottling;
                entity = entity.bind(mike)(zulu);
 77:
                entity = undefined;
                return entity;
            }
        };
        golf['setBackgroundThrottling'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: setFocusable
            _fun62287: for(var _fun62287_ip = 0; ; ) switch(_fun62287_ip) {
 0:
                mike = _closure1_slot6;
                mike = mike.window;
                mike = mike.setFocusable;
                zulu = 'function';
                mike = typeof mike;
                if(!(zulu === mike)) { _fun62287_ip = 56; continue _fun62287 }
 29:
                entity = _closure1_slot6;
                tango = entity.window;
                zulu = tango.setFocusable;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
 56:
                entity = undefined;
                return entity;
            }
        };
        golf['setFocusable'] = yankee;
        yankee = function() { // Original name: pauseFrameEvictor
            _fun62288: for(var _fun62288_ip = 0; ; ) switch(_fun62288_ip) {
 0:
                mike = _closure1_slot6;
                mike = mike.app;
                zulu = mike.pauseFrameEvictor;
                mike = null;
                if(!(mike != zulu)) { _fun62288_ip = 45; continue _fun62288 }
 25:
                entity = _closure1_slot6;
                mike = entity.app;
                entity = mike.pauseFrameEvictor;
                entity = entity.bind(mike)();
 45:
                entity = undefined;
                return entity;
            }
        };
        golf['pauseFrameEvictor'] = yankee;
        yankee = function() { // Original name: unpauseFrameEvictor
            _fun62289: for(var _fun62289_ip = 0; ; ) switch(_fun62289_ip) {
 0:
                mike = _closure1_slot6;
                mike = mike.app;
                zulu = mike.pauseFrameEvictor;
                mike = null;
                if(!(mike != zulu)) { _fun62289_ip = 45; continue _fun62289 }
 25:
                entity = _closure1_slot6;
                mike = entity.app;
                entity = mike.pauseFrameEvictor;
                entity = entity.bind(mike)();
 45:
                entity = undefined;
                return entity;
            }
        };
        golf['unpauseFrameEvictor'] = yankee;
        yankee = function(argFoo) { // Original name: getPidFromDesktopSource
            _fun62290: for(var _fun62290_ip = 0; ; ) switch(_fun62290_ip) {
 0:
                golf = argFoo;
                mike = this;
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.isDesktop;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun62290_ip = 226; continue _fun62290 }
 47:
                zulu = mike.getDiscordUtils;
                zulu = zulu.bind(mike)();
                zulu = zulu.getPidFromWindowHandle;
                tango = null;
                if(!(tango != zulu)) { _fun62290_ip = 226; continue _fun62290 }
 72:
                zulu = tango == golf;
                report = undefined;
                if(zulu) { _fun62290_ip = 95; continue _fun62290 }
 81:
                oscar = golf.split;
                zulu = ':';
                report = oscar.bind(golf)(zulu);
 95:
                zulu = tango == report;
                golf = undefined;
                if(zulu) { _fun62290_ip = 110; continue _fun62290 }
 104:
                zulu = 0;
                golf = report[zulu];
 110:
                zulu = 'window';
                if(!(zulu !== golf)) { _fun62290_ip = 153; continue _fun62290 }
 118:
                oscar = golf.startsWith;
                zulu = 'screen';
                zulu = oscar.bind(golf)(zulu);
                if(zulu) { _fun62290_ip = 148; continue _fun62290 }
 136:
                oscar = 'prepicked';
                zulu = null;
                if(!(oscar === golf)) { _fun62290_ip = 151; continue _fun62290 }
 148:
                zulu = 1;
 151:
                return zulu;
 153:
                zulu = tango == report;
                entity = undefined;
                if(zulu) { _fun62290_ip = 169; continue _fun62290 }
 162:
                zulu = 1;
                entity = report[zulu];
 169:
                report = tango != entity;
                zulu = '';
                if(!report) { _fun62290_ip = 183; continue _fun62290 }
 180:
                zulu = entity;
 183:
                entity = mike.getDiscordUtils;
                mike = entity.bind(mike)();
                entity = mike.getPidFromWindowHandle;
                mike = entity.bind(mike)(zulu);
                zulu = tango == mike;
                entity = null;
                if(zulu) { _fun62290_ip = 224; continue _fun62290 }
 213:
                zulu = 0;
                entity = null;
                if(!(zulu !== mike)) { _fun62290_ip = 224; continue _fun62290 }
 221:
                entity = mike;
 224:
                return entity;
 226:
                entity = null;
                return entity;
            }
        };
        golf['getPidFromDesktopSource'] = yankee;
        yankee = function(argFoo) { // Original name: getDesktopSourceFromPid
            _fun62291: for(var _fun62291_ip = 0; ; ) switch(_fun62291_ip) {
 0:
                zulu = argFoo;
                mike = this;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 5;
                tango = tango[entity];
                entity = undefined;
                tango = report.bind(entity)(tango);
                entity = tango.isWindows;
                entity = entity.bind(tango)();
                if(!entity) { _fun62291_ip = 153; continue _fun62291 }
 44:
                entity = mike.getDiscordUtils;
                entity = entity.bind(mike)();
                entity = entity.getWindowHandleFromPid;
                report = null;
                if(!(report != entity)) { _fun62291_ip = 153; continue _fun62291 }
 66:
                if(!(report != zulu)) { _fun62291_ip = 153; continue _fun62291 }
 70:
                entity = mike.getDiscordUtils;
                mike = entity.bind(mike)();
                entity = mike.getWindowHandleFromPid;
                mike = entity.bind(mike)(zulu);
                zulu = report == mike;
                entity = null;
                if(zulu) { _fun62291_ip = 151; continue _fun62291 }
 100:
                tango = mike.length;
                zulu = 0;
                entity = null;
                if(!(zulu !== tango)) { _fun62291_ip = 151; continue _fun62291 }
 113:
                tango = ['window'];
                tango[1] = mike;
                mike = '0';
                tango[2] = mike;
                zulu = tango.join;
                mike = ':';
                entity = zulu.bind(tango)(mike);
 151:
                return entity;
 153:
                entity = null;
                return entity;
            }
        };
        golf['getDesktopSourceFromPid'] = yankee;
        yankee = function(argFoo) { // Original name: generateSessionFromPid
            mike = this;
            entity = mike.getDiscordUtils;
            zulu = entity.bind(mike)();
            mike = zulu.generateSessionFromPid;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        golf['generateSessionFromPid'] = yankee;
        yankee = function(argFoo) { // Original name: getAudioPid
            _fun62293: for(var _fun62293_ip = 0; ; ) switch(_fun62293_ip) {
 0:
                tango = argFoo;
                zulu = this;
                entity = zulu.getDiscordUtils;
                entity = entity.bind(zulu)();
                report = entity.getAudioPid;
                mike = null;
                entity = tango;
                if(!(mike != report)) { _fun62293_ip = 59; continue _fun62293 }
 31:
                entity = tango;
                if(!(mike != entity)) { _fun62293_ip = 59; continue _fun62293 }
 38:
                mike = zulu.getDiscordUtils;
                zulu = mike.bind(zulu)();
                mike = zulu.getAudioPid;
                entity = mike.bind(zulu)(tango);
 59:
                return entity;
            }
        };
        golf['getAudioPid'] = yankee;
        yankee = function(argFoo) { // Original name: setForegroundProcess
            _fun62294: for(var _fun62294_ip = 0; ; ) switch(_fun62294_ip) {
 0:
                mike = this;
                entity = mike.getDiscordUtils;
                entity = entity.bind(mike)();
                tango = entity.setForegroundProcess;
                entity = null;
                entity = entity != tango;
                if(!entity) { _fun62294_ip = 38; continue _fun62294 }
 28:
                zulu = undefined;
                mike = argFoo;
                entity = tango.bind(zulu)(mike);
 38:
                return entity;
            }
        };
        golf['setForegroundProcess'] = yankee;
        yankee = function() { // Original name: getDiscordMemoryUsage
            _fun62295: for(var _fun62295_ip = 0; ; ) switch(_fun62295_ip) {
 0:
                mike = this;
                entity = mike.getDiscordUtils;
                entity = entity.bind(mike)();
                zulu = entity.getDiscordMemoryUsage;
                entity = null;
                mike = entity != zulu;
                if(!mike) { _fun62295_ip = 34; continue _fun62295 }
 28:
                mike = undefined;
                entity = zulu.bind(mike)();
 34:
                return entity;
            }
        };
        golf['getDiscordMemoryUsage'] = yankee;
        yankee = function() { // Original name: getDiscordMemoryUsageElectronRenderer
            _fun62296: for(var _fun62296_ip = 0; ; ) switch(_fun62296_ip) {
 0:
                mike = this;
                entity = mike.getDiscordUtils;
                entity = entity.bind(mike)();
                zulu = entity.getDiscordMemoryUsageElectronRenderer;
                entity = null;
                tango = entity == zulu;
                mike = undefined;
                entity = undefined;
                if(tango) { _fun62296_ip = 36; continue _fun62296 }
 32:
                entity = zulu.bind(mike)();
 36:
                return entity;
            }
        };
        golf['getDiscordMemoryUsageElectronRenderer'] = yankee;
        yankee = function(argFoo) { // Original name: showOpenDialog
            entity = _closure1_slot6;
            zulu = entity.fileManager;
            mike = zulu.showOpenDialog;
            entity = {};
            tango = argFoo;
            entity['properties'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        golf['showOpenDialog'] = yankee;
        yankee = function() { // Original name: flushStorageData
            _fun62298: for(var _fun62298_ip = 0; ; ) switch(_fun62298_ip) {
 0:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 5;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.isPlatformEmbedded;
                mike = global;
                tango = mike.Promise;
                if(entity) { _fun62298_ip = 54; continue _fun62298 }
 42:
                entity = tango.resolve;
                entity = entity.bind(tango)();
                _fun62298_ip = 81; continue _fun62298;
 54:
                mike = tango.prototype;
                zulu = Object.create(mike, {constructor: {value: tango}});
                report = function(argFoo, argBar) {
                    _fun62299: for(var _fun62299_ip = 0; ; ) switch(_fun62299_ip) {
 0:
                        tango = argFoo;
                        var _closure3_slot0 = tango;
                        mike = argBar;
                        var _closure3_slot1 = mike;
                        zulu = _closure1_slot6;
                        zulu = zulu.processUtils;
                        report = zulu.flushStorageData;
                        zulu = null;
                        if(!(zulu == report)) { _fun62299_ip = 49; continue _fun62299 }
 41:
                        zulu = undefined;
                        zulu = tango.bind(zulu)();
                        _fun62299_ip = 75; continue _fun62299;
 49:
                        mike = _closure1_slot6;
                        zulu = mike.processUtils;
                        mike = zulu.flushStorageData;
                        entity = function(argFoo) {
                            _fun62300: for(var _fun62300_ip = 0; ; ) switch(_fun62300_ip) {
 0:
                                report = argFoo;
                                entity = null;
                                if(!(entity == report)) { _fun62300_ip = 24; continue _fun62300 }
 9:
                                mike = _closure3_slot0;
                                entity = undefined;
                                entity = mike.bind(entity)();
                                _fun62300_ip = 69; continue _fun62300;
 24:
                                tango = _closure3_slot1;
                                mike = global;
                                mike = mike.Error;
                                zulu = mike.prototype;
                                zulu = Object.create(zulu, {constructor: {value: mike}});
                                golf = zulu;
                                oscar = report;
                                mike = new golf[mike](oscar, report);
                                zulu = mike instanceof Object ? mike : zulu;
                                mike = undefined;
                                entity = tango.bind(mike)(zulu);
 69:
                                return entity;
                            }
                        };
                        entity = mike.bind(zulu)(entity);
 75:
                        entity = undefined;
                        return entity;
                    }
                };
                oscar = zulu;
                mike = new oscar[tango](report, tango);
                entity = mike instanceof Object ? mike : zulu;
 81:
                return entity;
            }
        };
        golf['flushStorageData'] = yankee;
        yankee = function() { // Original name: flushCookies
            _fun62301: for(var _fun62301_ip = 0; ; ) switch(_fun62301_ip) {
 0:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 5;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.isPlatformEmbedded;
                mike = global;
                tango = mike.Promise;
                if(entity) { _fun62301_ip = 54; continue _fun62301 }
 42:
                entity = tango.resolve;
                entity = entity.bind(tango)();
                _fun62301_ip = 81; continue _fun62301;
 54:
                mike = tango.prototype;
                zulu = Object.create(mike, {constructor: {value: tango}});
                report = function(argFoo, argBar) {
                    _fun62302: for(var _fun62302_ip = 0; ; ) switch(_fun62302_ip) {
 0:
                        tango = argFoo;
                        var _closure3_slot0 = tango;
                        mike = argBar;
                        var _closure3_slot1 = mike;
                        zulu = _closure1_slot6;
                        zulu = zulu.processUtils;
                        report = zulu.flushCookies;
                        zulu = null;
                        if(!(zulu == report)) { _fun62302_ip = 49; continue _fun62302 }
 41:
                        zulu = undefined;
                        zulu = tango.bind(zulu)();
                        _fun62302_ip = 75; continue _fun62302;
 49:
                        mike = _closure1_slot6;
                        zulu = mike.processUtils;
                        mike = zulu.flushCookies;
                        entity = function(argFoo) {
                            _fun62303: for(var _fun62303_ip = 0; ; ) switch(_fun62303_ip) {
 0:
                                report = argFoo;
                                entity = null;
                                if(!(entity == report)) { _fun62303_ip = 24; continue _fun62303 }
 9:
                                mike = _closure3_slot0;
                                entity = undefined;
                                entity = mike.bind(entity)();
                                _fun62303_ip = 69; continue _fun62303;
 24:
                                tango = _closure3_slot1;
                                mike = global;
                                mike = mike.Error;
                                zulu = mike.prototype;
                                zulu = Object.create(zulu, {constructor: {value: mike}});
                                golf = zulu;
                                oscar = report;
                                mike = new golf[mike](oscar, report);
                                zulu = mike instanceof Object ? mike : zulu;
                                mike = undefined;
                                entity = tango.bind(mike)(zulu);
 69:
                                return entity;
                            }
                        };
                        entity = mike.bind(zulu)(entity);
 75:
                        entity = undefined;
                        return entity;
                    }
                };
                oscar = zulu;
                mike = new oscar[tango](report, tango);
                entity = mike instanceof Object ? mike : zulu;
 81:
                return entity;
            }
        };
        golf['flushCookies'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: setCrashInformation
            _fun62304: for(var _fun62304_ip = 0; ; ) switch(_fun62304_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                zulu = zulu.isPlatformEmbedded;
                if(!zulu) { _fun62304_ip = 78; continue _fun62304 }
 34:
                tango = _closure1_slot6;
                report = null;
                oscar = report == tango;
                tango = undefined;
                if(oscar) { _fun62304_ip = 74; continue _fun62304 }
 49:
                oscar = _closure1_slot6;
                oscar = oscar.processUtils;
                golf = report == oscar;
                tango = undefined;
                if(golf) { _fun62304_ip = 74; continue _fun62304 }
 68:
                tango = oscar.setCrashInformation;
 74:
                zulu = report != tango;
 78:
                if(!zulu) { _fun62304_ip = 109; continue _fun62304 }
 81:
                mike = _closure1_slot6;
                report = mike.processUtils;
                tango = report.setCrashInformation;
                zulu = argFoo;
                mike = argBar;
                mike = tango.bind(report)(zulu, mike);
 109:
                return entity;
            }
        };
        golf['setCrashInformation'] = yankee;
        yankee = function() { // Original name: blockDisplaySleep
            _fun62305: for(var _fun62305_ip = 0; ; ) switch(_fun62305_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                zulu = entity.isPlatformEmbedded;
                tango = null;
                entity = null;
                if(!zulu) { _fun62305_ip = 77; continue _fun62305 }
 38:
                zulu = _closure1_slot6;
                zulu = zulu.powerSaveBlocker;
                zulu = tango != zulu;
                entity = null;
                if(!zulu) { _fun62305_ip = 77; continue _fun62305 }
 57:
                mike = _closure1_slot6;
                zulu = mike.powerSaveBlocker;
                mike = zulu.blockDisplaySleep;
                entity = mike.bind(zulu)();
 77:
                return entity;
            }
        };
        golf['blockDisplaySleep'] = yankee;
        yankee = function(argFoo) { // Original name: unblockDisplaySleep
            _fun62306: for(var _fun62306_ip = 0; ; ) switch(_fun62306_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                zulu = zulu.isPlatformEmbedded;
                if(!zulu) { _fun62306_ip = 50; continue _fun62306 }
 34:
                tango = _closure1_slot6;
                report = tango.powerSaveBlocker;
                tango = null;
                zulu = tango != report;
 50:
                if(!zulu) { _fun62306_ip = 77; continue _fun62306 }
 53:
                mike = _closure1_slot6;
                tango = mike.powerSaveBlocker;
                zulu = tango.unblockDisplaySleep;
                mike = argFoo;
                mike = zulu.bind(tango)(mike);
 77:
                return entity;
            }
        };
        golf['unblockDisplaySleep'] = yankee;
        yankee = function() { // Original name: cleanupDisplaySleep
            _fun62307: for(var _fun62307_ip = 0; ; ) switch(_fun62307_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                zulu = zulu.isPlatformEmbedded;
                if(!zulu) { _fun62307_ip = 50; continue _fun62307 }
 34:
                tango = _closure1_slot6;
                report = tango.powerSaveBlocker;
                tango = null;
                zulu = tango != report;
 50:
                if(!zulu) { _fun62307_ip = 73; continue _fun62307 }
 53:
                mike = _closure1_slot6;
                zulu = mike.powerSaveBlocker;
                mike = zulu.cleanupDisplaySleep;
                mike = mike.bind(zulu)();
 73:
                return entity;
            }
        };
        golf['cleanupDisplaySleep'] = yankee;
        yankee = function() { // Original name: relaunch
            _fun62308: for(var _fun62308_ip = 0; ; ) switch(_fun62308_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                zulu = zulu.isPlatformEmbedded;
                if(!zulu) { _fun62308_ip = 56; continue _fun62308 }
 34:
                tango = _closure1_slot6;
                tango = tango.remoteApp;
                report = tango.relaunch;
                tango = null;
                zulu = tango != report;
 56:
                if(!zulu) { _fun62308_ip = 79; continue _fun62308 }
 59:
                mike = _closure1_slot6;
                zulu = mike.remoteApp;
                mike = zulu.relaunch;
                mike = mike.bind(zulu)();
 79:
                return entity;
            }
        };
        golf['relaunch'] = yankee;
        yankee = function(argFoo, argBar, argBaz) { // Original name: makeChunkedRequest
            _fun62309: for(var _fun62309_ip = 0; ; ) switch(_fun62309_ip) {
 0:
                options = argBar;
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                entity = 11;
                entity = golf[entity];
                report = undefined;
                tango = oscar.bind(report)(entity);
                entity = tango.getAPIBaseURL;
                yankee = entity.bind(tango)();
                entity = global;
                tango = entity.HermesInternal;
                offset = tango.concat;
                verify = '';
                tango = argFoo;
                tango = offset.bind(verify)(yankee, tango);
                var _closure2_slot0 = tango;
                tango = 5;
                tango = golf[tango];
                tango = oscar.bind(report)(tango);
                tango = tango.isPlatformEmbedded;
                if(tango) { _fun62309_ip = 142; continue _fun62309 }
 91:
                oscar = entity.Promise;
                report = oscar.reject;
                verify = entity.Error;
                tango = verify.prototype;
                golf = Object.create(tango, {constructor: {value: verify}});
                foxtrot = 'Not embedded!';
                backup = golf;
                tango = new backup[verify](foxtrot, romeo);
                tango = tango instanceof Object ? tango : golf;
                tango = report.bind(oscar)(tango);
                return tango;
 142:
                zulu = _closure1_slot6;
                tango = zulu.http;
                zulu = null;
                if(!(zulu != tango)) { _fun62309_ip = 405; continue _fun62309 }
 161:
                zulu = {'maxBps': 8000, 'chunkInterval': 50, 'contentType': 'application/json'};
                oscar = 'application/json';
                romeo = argBaz;
                foxtrot = zulu;
                tango = copyDataProperties(foxtrot, romeo);
                tango = zulu.method;
                var _closure2_slot1 = tango;
                tango = zulu.maxBps;
                report = zulu.token;
                var _closure2_slot2 = report;
                report = zulu.chunkInterval;
                var _closure2_slot3 = report;
                zulu = zulu.contentType;
                var _closure2_slot4 = zulu;
                golf = options;
                if(!(oscar === zulu)) { _fun62309_ip = 259; continue _fun62309 }
 242:
                oscar = entity.JSON;
                zulu = oscar.stringify;
                golf = zulu.bind(oscar)(options);
 259:
                zulu = 1000;
                zulu = report / zulu;
                oscar = tango * zulu;
                report = entity.Math;
                tango = report.ceil;
                zulu = golf.length;
                zulu = zulu / oscar;
                report = tango.bind(report)(zulu);
                zulu = entity.Array;
                tango = zulu.prototype;
                tango = Object.create(tango, {constructor: {value: zulu}});
                backup = tango;
                foxtrot = report;
                zulu = new backup[zulu](foxtrot, romeo);
                tango = zulu instanceof Object ? zulu : tango;
                var _closure2_slot5 = tango;
                zulu = 0;
                options = zulu < report;
                if(!options) { _fun62309_ip = 372; continue _fun62309 }
 341:
                offset = zulu * oscar;
                verify = golf.substring;
                options = offset + oscar;
                options = verify.bind(golf)(offset, options);
                tango[zulu] = options;
                zulu = zulu + 1;
                if(zulu < report) { _fun62309_ip = 341; continue _fun62309 }
 372:
                tango = entity.Promise;
                zulu = tango.prototype;
                zulu = Object.create(zulu, {constructor: {value: tango}});
                foxtrot = function(argFoo, argBar) {
                    _fun62310: for(var _fun62310_ip = 0; ; ) switch(_fun62310_ip) {
 0:
                        mike = argFoo;
                        var _closure3_slot0 = mike;
                        mike = argBar;
                        var _closure3_slot1 = mike;
                        zulu = _closure1_slot6;
                        tango = zulu.http;
                        zulu = null;
                        if(!(zulu != tango)) { _fun62310_ip = 115; continue _fun62310 }
 35:
                        mike = _closure1_slot6;
                        oscar = mike.http;
                        report = oscar.makeChunkedRequest;
                        romeo = _closure2_slot0;
                        yankee = _closure2_slot5;
                        mike = {};
                        options = _closure2_slot1;
                        mike['method'] = options;
                        options = _closure2_slot3;
                        mike['chunkInterval'] = options;
                        options = _closure2_slot4;
                        mike['contentType'] = options;
                        golf = _closure2_slot2;
                        mike['token'] = golf;
                        verify = function(argFoo, argBar) {
                            _fun62311: for(var _fun62311_ip = 0; ; ) switch(_fun62311_ip) {
 0:
                                tango = argFoo;
                                mike = argBar;
                                entity = null;
                                if(!(entity == tango)) { _fun62311_ip = 94; continue _fun62311 }
 12:
                                zulu = mike.status;
                                entity = 400;
                                if(!(!(zulu >= entity))) { _fun62311_ip = 45; continue _fun62311 }
 27:
                                zulu = _closure3_slot0;
                                entity = undefined;
                                entity = zulu.bind(entity)(mike);
                                entity = undefined;
                                _fun62311_ip = 92; continue _fun62311;
 45:
                                report = _closure3_slot1;
                                zulu = global;
                                oscar = zulu.Error;
                                golf = mike.body;
                                zulu = oscar.prototype;
                                zulu = Object.create(zulu, {constructor: {value: oscar}});
                                options = zulu;
                                mike = new options[oscar](golf, oscar);
                                zulu = mike instanceof Object ? mike : zulu;
                                mike = undefined;
                                entity = report.bind(mike)(zulu);
 92:
                                _fun62311_ip = 108; continue _fun62311;
 94:
                                zulu = _closure3_slot1;
                                mike = undefined;
                                entity = zulu.bind(mike)(tango);
 108:
                                return entity;
                            }
                        };
                        foxtrot = oscar;
                        offset = mike;
                        entity = foxtrot[report](romeo, yankee, offset, verify, options);
 115:
                        entity = undefined;
                        return entity;
                    }
                };
                backup = zulu;
                mike = new backup[tango](foxtrot, romeo);
                mike = mike instanceof Object ? mike : zulu;
                return mike;
 405:
                zulu = entity.Promise;
                mike = zulu.reject;
                report = entity.Error;
                entity = report.prototype;
                tango = Object.create(entity, {constructor: {value: report}});
                foxtrot = 'HTTP module not available';
                backup = tango;
                entity = new backup[report](foxtrot, romeo);
                entity = entity instanceof Object ? entity : tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        golf['makeChunkedRequest'] = yankee;
        yankee = function(argFoo) { // Original name: submitLiveCrashReport
            _fun62312: for(var _fun62312_ip = 0; ; ) switch(_fun62312_ip) {
 0:
                mike = this;
                zulu = _closure1_slot0;
                report = _closure1_slot2;
                entity = 5;
                entity = report[entity];
                report = undefined;
                zulu = zulu.bind(report)(entity);
                entity = zulu.isWindows;
                entity = entity.bind(zulu)();
                if(!entity) { _fun62312_ip = 154; continue _fun62312 }
 41:
                entity = mike.getDiscordUtils;
                entity = entity.bind(mike)();
                entity = entity.submitLiveCrashReport;
                zulu = null;
                if(!(zulu != entity)) { _fun62312_ip = 154; continue _fun62312 }
 63:
                entity = mike.getCrashReporterMetadata;
                entity = entity.bind(mike)();
                tango = _closure1_slot6;
                oscar = tango.app;
                tango = oscar.getReleaseChannel;
                tango = tango.bind(oscar)();
                zulu = zulu == entity;
                report = undefined;
                if(zulu) { _fun62312_ip = 108; continue _fun62312 }
 102:
                report = entity.sentry;
 108:
                entity = mike.getDiscordUtils;
                zulu = entity.bind(mike)();
                mike = zulu.submitLiveCrashReport;
                entity = {};
                options = entity;
                golf = report;
                report = copyDataProperties(options, golf);
                golf = argFoo;
                options = entity;
                report = copyDataProperties(options, golf);
                entity = mike.bind(zulu)(tango, entity);
                return entity;
 154:
                entity = global;
                mike = entity.Promise;
                entity = mike.resolve;
                entity = entity.bind(mike)();
                return entity;
            }
        };
        golf['submitLiveCrashReport'] = yankee;
        yankee = function(argFoo) { // Original name: crash
            _fun62313: for(var _fun62313_ip = 0; ; ) switch(_fun62313_ip) {
 0:
                mike = this;
                entity = mike.getDiscordUtils;
                entity = entity.bind(mike)();
                tango = entity.crash;
                entity = null;
                entity = entity != tango;
                if(!entity) { _fun62313_ip = 40; continue _fun62313 }
 28:
                zulu = undefined;
                mike = argFoo;
                mike = tango.bind(zulu)(mike);
                entity = true;
 40:
                return entity;
            }
        };
        golf['crash'] = yankee;
        yankee = function(argFoo) { // Original name: setApplicationBackgroundColor
            entity = _closure1_slot6;
            tango = entity.ipc;
            zulu = tango.send;
            mike = 'SETTINGS_UPDATE_BACKGROUND_COLOR';
            entity = argFoo;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        golf['setApplicationBackgroundColor'] = yankee;
        yankee = function() { // Original name: initializeExitHook
            _fun62315: for(var _fun62315_ip = 0; ; ) switch(_fun62315_ip) {
 0:
                mike = this;
                entity = mike.getDiscordUtils;
                entity = entity.bind(mike)();
                mike = entity.initializeExitHook;
                entity = null;
                if(!(entity != mike)) { _fun62315_ip = 31; continue _fun62315 }
 25:
                entity = undefined;
                entity = mike.bind(entity)();
 31:
                entity = undefined;
                return entity;
            }
        };
        golf['initializeExitHook'] = yankee;
        yankee = function() { // Original name: initializeWERHandler
            _fun62316: for(var _fun62316_ip = 0; ; ) switch(_fun62316_ip) {
 0:
                mike = this;
                entity = mike.getDiscordUtils;
                entity = entity.bind(mike)();
                mike = entity.initializeWERHandler;
                entity = null;
                if(!(entity != mike)) { _fun62316_ip = 31; continue _fun62316 }
 25:
                entity = undefined;
                entity = mike.bind(entity)();
 31:
                entity = undefined;
                return entity;
            }
        };
        golf['initializeWERHandler'] = yankee;
        yankee = function(argFoo) { // Original name: asyncify
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = global;
            zulu = mike.Promise;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            tango = function(argFoo) {
                zulu = _closure2_slot0;
                entity = undefined;
                mike = argFoo;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        golf['asyncify'] = yankee;
        yankee = function() { // Original name: IsGameDisplayModeUpdateSupported
            mike = this;
            entity = mike.getDiscordUtils;
            entity = entity.bind(mike)();
            mike = entity.gameDisplayModeUpdate;
            entity = null;
            entity = entity != mike;
            return entity;
        };
        golf['IsGameDisplayModeUpdateSupported'] = yankee;
        yankee = function(argFoo) { // Original name: GameDisplayModeUpdate
            _fun62320: for(var _fun62320_ip = 0; ; ) switch(_fun62320_ip) {
 0:
                tango = argFoo;
                mike = this;
                entity = mike.getDiscordUtils;
                entity = entity.bind(mike)();
                zulu = entity.gameDisplayModeUpdate;
                mike = null;
                entity = mike != zulu;
                if(!entity) { _fun62320_ip = 35; continue _fun62320 }
 31:
                entity = mike != tango;
 35:
                if(!entity) { _fun62320_ip = 45; continue _fun62320 }
 38:
                mike = undefined;
                entity = zulu.bind(mike)(tango);
 45:
                return entity;
            }
        };
        golf['GameDisplayModeUpdate'] = yankee;
        yankee = function(argFoo) { // Original name: GameDisplayModeIsGameSupported
            _fun62321: for(var _fun62321_ip = 0; ; ) switch(_fun62321_ip) {
 0:
                tango = argFoo;
                mike = this;
                entity = mike.getDiscordUtils;
                entity = entity.bind(mike)();
                zulu = entity.gameDisplayModeIsSupported;
                mike = null;
                entity = mike != zulu;
                if(!entity) { _fun62321_ip = 37; continue _fun62321 }
 33:
                entity = mike != tango;
 37:
                if(!entity) { _fun62321_ip = 47; continue _fun62321 }
 40:
                mike = undefined;
                entity = zulu.bind(mike)(tango);
 47:
                return entity;
            }
        };
        golf['GameDisplayModeIsGameSupported'] = yankee;
        yankee = function(argFoo, argBar, argBaz) { // Original name: GetWindowFullscreenTypeByPid
            _fun62322: for(var _fun62322_ip = 0; ; ) switch(_fun62322_ip) {
 0:
                golf = argFoo;
                oscar = argBar;
                entity = argBaz;
                zulu = this;
                mike = zulu.getDiscordUtils;
                mike = mike.bind(zulu)();
                report = mike.getWindowFullscreenTypeByPid;
                mike = null;
                tango = 0;
                zulu = null;
                if(!(tango !== golf)) { _fun62322_ip = 66; continue _fun62322 }
 40:
                tango = mike != report;
                zulu = null;
                if(!tango) { _fun62322_ip = 66; continue _fun62322 }
 49:
                tango = mike != oscar;
                zulu = null;
                if(!tango) { _fun62322_ip = 66; continue _fun62322 }
 58:
                tango = undefined;
                zulu = report.bind(tango)(golf, oscar);
 66:
                tango = -1;
                if(!(tango === zulu)) { _fun62322_ip = 78; continue _fun62322 }
 76:
                zulu = null;
 78:
                if(!(mike != zulu)) { _fun62322_ip = 85; continue _fun62322 }
 82:
                entity = zulu;
 85:
                if(!(mike == entity)) { _fun62322_ip = 126; continue _fun62322 }
 89:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 4;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                mike = mike.RunningProcessFullscreenType;
                entity = mike.UNKNOWN;
 126:
                return entity;
            }
        };
        golf['GetWindowFullscreenTypeByPid'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: GetWindowFullscreenTypeExtraByPid
            _fun62323: for(var _fun62323_ip = 0; ; ) switch(_fun62323_ip) {
 0:
                tango = argBar;
                mike = this;
                entity = mike.getDiscordUtils;
                entity = entity.bind(mike)();
                zulu = entity.getWindowFullscreenTypeExtraByPid;
                entity = null;
                if(!(entity != zulu)) { _fun62323_ip = 47; continue _fun62323 }
 30:
                if(!(entity != tango)) { _fun62323_ip = 47; continue _fun62323 }
 34:
                mike = undefined;
                entity = argFoo;
                entity = zulu.bind(mike)(entity, tango);
                _fun62323_ip = 96; continue _fun62323;
 47:
                mike = {};
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 4;
                tango = tango[zulu];
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                zulu = zulu.QueryUserNotificationState;
                zulu = zulu.QUNS_UNKNOWN;
                mike['quns'] = zulu;
                entity = mike;
 96:
                return entity;
            }
        };
        golf['GetWindowFullscreenTypeExtraByPid'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: SetGPUBoostEnabledByPid
            _fun62324: for(var _fun62324_ip = 0; ; ) switch(_fun62324_ip) {
 0:
                mike = this;
                entity = mike.getDiscordUtils;
                entity = entity.bind(mike)();
                report = entity.setGPUBoostEnabledByPid;
                entity = null;
                entity = entity != report;
                if(!entity) { _fun62324_ip = 44; continue _fun62324 }
 30:
                tango = undefined;
                zulu = argFoo;
                mike = argBar;
                entity = report.bind(tango)(zulu, mike);
 44:
                return entity;
            }
        };
        golf['SetGPUBoostEnabledByPid'] = yankee;
        yankee = function() { // Original name: IsHardwareAcceleratedGPUSchedulingEnabled
            _fun62325: for(var _fun62325_ip = 0; ; ) switch(_fun62325_ip) {
 0:
                mike = this;
                entity = mike.getDiscordUtils;
                entity = entity.bind(mike)();
                zulu = entity.isHardwareAcceleratedGPUSchedulingEnabled;
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun62325_ip = 36; continue _fun62325 }
 30:
                mike = undefined;
                entity = zulu.bind(mike)();
 36:
                return entity;
            }
        };
        golf['IsHardwareAcceleratedGPUSchedulingEnabled'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: isModuleVersionAtLeast
            _fun62326: for(var _fun62326_ip = 0; ; ) switch(_fun62326_ip) {
 0:
                entity = argBar;
                tango = this;
                report = _closure1_slot8;
                mike = null;
                if(!(mike == report)) { _fun62326_ip = 29; continue _fun62326 }
 19:
                report = [0, 0, 0];
 29:
                zulu = new Array(0);
                options = 0;
                backup = zulu;
                foxtrot = report;
                romeo = 0;
                report = arraySpread(backup, foxtrot, romeo);
                oscar = zulu.push;
                yankee = tango.moduleVersions;
                report = mike == yankee;
                golf = undefined;
                offset = undefined;
                if(report) { _fun62326_ip = 78; continue _fun62326 }
 71:
                report = argFoo;
                offset = yankee[report];
 78:
                yankee = mike != offset;
                report = 0;
                if(!yankee) { _fun62326_ip = 90; continue _fun62326 }
 87:
                report = offset;
 90:
                report = oscar.bind(zulu)(report);
                tango = tango.releaseChannel;
                oscar = entity[tango];
                if(!(mike == oscar)) { _fun62326_ip = 115; continue _fun62326 }
 109:
                oscar = entity.stable;
 115:
                mike = _closure1_slot14;
                entity = zulu.entries;
                entity = entity.bind(zulu)();
                report = mike.bind(golf)(entity);
                mike = report.bind(golf)();
                entity = mike.done;
                tango = 2;
                zulu = 1;
                if(entity) { _fun62326_ip = 216; continue _fun62326 }
 152:
                offset = mike.value;
                entity = _closure1_slot3;
                offset = entity.bind(golf)(offset, tango);
                entity = offset[options];
                offset = offset[zulu];
                yankee = oscar[entity];
                if(!(!(offset > yankee))) { _fun62326_ip = 212; continue _fun62326 }
 183:
                entity = oscar[entity];
                if(!(!(offset < entity))) { _fun62326_ip = 208; continue _fun62326 }
 191:
                offset = report.bind(golf)();
                entity = offset.done;
                mike = offset;
                if(entity) { _fun62326_ip = 216; continue _fun62326 }
 206:
                _fun62326_ip = 152; continue _fun62326;
 208:
                entity = false;
                return entity;
 212:
                entity = true;
                return entity;
 216:
                entity = true;
                return entity;
            }
        };
        golf['isModuleVersionAtLeast'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: fetchRiotGamesLiveClientData
            _fun62327: for(var _fun62327_ip = 0; ; ) switch(_fun62327_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                entity = entity.isPlatformEmbedded;
                if(entity) { _fun62327_ip = 87; continue _fun62327 }
 34:
                entity = global;
                tango = entity.Promise;
                zulu = tango.reject;
                oscar = entity.Error;
                entity = oscar.prototype;
                report = Object.create(entity, {constructor: {value: oscar}});
                verify = 'Not embedded!';
                offset = report;
                entity = new offset[oscar](verify, options);
                entity = entity instanceof Object ? entity : report;
                entity = zulu.bind(tango)(entity);
                _fun62327_ip = 189; continue _fun62327;
 87:
                zulu = _closure1_slot6;
                tango = zulu.riotGames;
                zulu = null;
                if(!(zulu != tango)) { _fun62327_ip = 135; continue _fun62327 }
 103:
                mike = _closure1_slot6;
                report = mike.riotGames;
                tango = report.fetchLiveClientData;
                zulu = argFoo;
                mike = argBar;
                mike = tango.bind(report)(zulu, mike);
                _fun62327_ip = 186; continue _fun62327;
 135:
                zulu = global;
                report = zulu.Promise;
                tango = report.reject;
                golf = zulu.Error;
                zulu = golf.prototype;
                oscar = Object.create(zulu, {constructor: {value: golf}});
                verify = 'Riot Games module not available';
                offset = oscar;
                zulu = new offset[golf](verify, options);
                zulu = zulu instanceof Object ? zulu : oscar;
                mike = tango.bind(report)(zulu);
 186:
                entity = mike;
 189:
                return entity;
            }
        };
        golf['fetchRiotGamesLiveClientData'] = yankee;
        yankee = function() { // Original name: appViewed
            _fun62328: for(var _fun62328_ip = 0; ; ) switch(_fun62328_ip) {
 0:
                tango = this;
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 5;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.isDesktop;
                mike = mike.bind(zulu)();
                if(!mike) { _fun62328_ip = 58; continue _fun62328 }
 41:
                zulu = tango.send;
                mike = 'APP_VIEWED';
                mike = zulu.bind(tango)(mike);
 58:
                return entity;
            }
        };
        golf['appViewed'] = yankee;
        options = function() { // Original name: appLoaded
            _fun62329: for(var _fun62329_ip = 0; ; ) switch(_fun62329_ip) {
 0:
                tango = this;
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 5;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.isDesktop;
                mike = mike.bind(zulu)();
                if(!mike) { _fun62329_ip = 62; continue _fun62329 }
 41: // try_start_0
                zulu = tango.send;
                mike = 'APP_LOADED';
                mike = zulu.bind(tango)(mike);
 58: // try_end0
                _fun62329_ip = 62; continue _fun62329;
 60: // catch_target0
                CatchBlockStart(arg_register=1);
 62:
                return entity;
            }
        };
        golf['appLoaded'] = options;
        options = 12;
        options = offset[options];
        offset = verify.bind(entity)(options);
        verify = offset.fileFinishedImporting;
        options = 'utils/web/DesktopNativeUtils.tsx';
        options = verify.bind(offset)(options);
        zulu['default'] = golf;
        zulu['getFileData'] = oscar;
        zulu['getImageData'] = report;
        zulu['NativePermissionRequestType'] = tango;
        zulu['ThumbarButtonName'] = mike;
        return entity;
    }
})();