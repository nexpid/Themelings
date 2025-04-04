// app/utils/web/DesktopNativeUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        verify = argBar;
        golfie = argBaz;
        zuuluu = argFre;
        offset = argPlu;
        var _closure1_slot0 = verify;
        var _closure1_slot1 = golfie;
        var _closure1_slot2 = offset;
        entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = argFoo;
                var _closure2_slot0 = zuuluu;
                report = global;
                michal = report.Symbol;
                tangon = 'undefined';
                michal = typeof michal;
                michal = tangon !== michal;
                if(!michal) { _fun00004_ip = 45; continue _fun00003 }
 30:
                tangon = report.Symbol;
                tangon = tangon.iterator;
                michal = zuuluu[tangon];
 45:
                if(michal) { _fun00004_ip = 54; continue _fun00003 }
 48:
                michal = zuuluu.@@iterator;
 54:
                if(michal) { _fun00004_ip = 342; continue _fun00003 }
 60:
                oscard = report.Array;
                tangon = oscard.isArray;
                oscard = tangon.bind(oscard)(zuuluu);
                tangon = michal;
                if(oscard) { _fun00004_ip = 322; continue _fun00003 }
 85:
                option = undefined;
                oscard = undefined;
                if(!zuuluu) { _fun00004_ip = 282; continue _fun00003 }
 95:
                verify = 'string';
                golfie = typeof zuuluu;
                if(!(verify !== golfie)) { _fun00004_ip = 269; continue _fun00003 }
 109:
                golfie = {};
                verify = golfie.toString;
                golfie = verify.call;
                yankee = golfie.bind(verify)(zuuluu);
                offset = yankee.slice;
                verify = 8;
                golfie = -1;
                verify = offset.bind(yankee)(verify, golfie);
                golfie = 'Object';
                golfie = golfie === verify;
                if(!golfie) { _fun00004_ip = 162; continue _fun00003 }
 157:
                golfie = zuuluu.constructor;
 162:
                offset = verify;
                if(!golfie) { _fun00004_ip = 178; continue _fun00003 }
 168:
                golfie = zuuluu.constructor;
                offset = golfie.name;
 178:
                golfie = 'Map';
                if(!(golfie !== offset)) { _fun00004_ip = 248; continue _fun00003 }
 186:
                golfie = 'Set';
                if(!(golfie !== offset)) { _fun00004_ip = 248; continue _fun00003 }
 194:
                golfie = 'Arguments';
                if(!(golfie !== offset)) { _fun00004_ip = 233; continue _fun00003 }
 204:
                verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                golfie = verify.test;
                verify = golfie.bind(verify)(offset);
                golfie = undefined;
                if(!verify) { _fun00004_ip = 246; continue _fun00003 }
 233:
                verify = _closure1_slot15;
                golfie = verify.bind(option)(zuuluu, option);
 246:
                _fun00004_ip = 264; continue _fun00003;
 248:
                offset = report.Array;
                verify = offset.from;
                golfie = verify.bind(offset)(zuuluu);
 264:
                oscard = golfie;
                _fun00004_ip = 282; continue _fun00003;
 269:
                golfie = _closure1_slot15;
                oscard = golfie.bind(option)(zuuluu, option);
 282:
                tangon = oscard;
                if(tangon) { _fun00004_ip = 322; continue _fun00003 }
 288:
                golfie = report.TypeError;
                report = golfie.prototype;
                oscard = Object.create(report, {constructor: {value: golfie}});
                foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                backup = oscard;
                report = new backup[golfie](foxtra, romeon);
                report = report instanceof Object ? report : oscard;
                throw report;
 322:
                if(!tangon) { _fun00004_ip = 329; continue _fun00003 }
 325:
                _closure2_slot0 = tangon;
 329:
                tangon = 0;
                var _closure2_slot1 = tangon;
                entity = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        michal = _closure2_slot1;
                        entity = _closure2_slot0;
                        entity = entity.length;
                        if(!(!(michal >= entity))) { _fun00006_ip = 56; continue _fun00005 }
 20:
                        entity = {};
                        michal = false;
                        entity['done'] = michal;
                        zuuluu = _closure2_slot0;
                        michal = _closure2_slot1;
                        michal = parseFloat(michal);
                        tangon = michal + 1;
                        _closure2_slot1 = tangon;
                        michal = zuuluu[michal];
                        entity['value'] = michal;
                        _fun00006_ip = 67; continue _fun00005;
 56:
                        michal = {};
                        zuuluu = true;
                        michal['done'] = zuuluu;
                        entity = michal;
 67:
                        return entity;
                    }
                };
                return entity;
 342:
                entity = michal.call;
                zuuluu = entity.bind(michal)(zuuluu);
                michal = zuuluu.next;
                entity = michal.bind;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            }
        };
        var _closure1_slot14 = entity;
        entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = argFoo;
                entity = null;
                zuuluu = undefined;
                entity = entity == zuuluu;
                if(entity) { _fun00008_ip = 23; continue _fun00007 }
 14:
                michal = tangon.length;
                entity = zuuluu > michal;
 23:
                michal = undefined;
                if(!entity) { _fun00008_ip = 33; continue _fun00007 }
 28:
                michal = tangon.length;
 33:
                entity = global;
                entity = entity.Array;
                entity = entity.bind(zuuluu)(michal);
                zuuluu = 0;
                report = zuuluu < michal;
                if(!report) { _fun00008_ip = 70; continue _fun00007 }
 55:
                report = tangon[zuuluu];
                entity[zuuluu] = report;
                zuuluu = zuuluu + 1;
                if(zuuluu < michal) { _fun00008_ip = 55; continue _fun00007 }
 70:
                return entity;
            }
        };
        var _closure1_slot15 = entity;
        oscard = function() { // Original name: getFileData
            entity = undefined;
            tangon = _closure1_slot17;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        var _closure1_slot16 = oscard;
        entity = function() { // Original name: _getFileData
            report = undefined;
            entity = undefined;
            tangon = _closure1_slot4;
            zuuluu = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00010_ip = 189; continue _fun00009 }
 10:
                        michal = global;
                        zuuluu = michal.fetch;
                        oscard = michal.Request;
                        michal = oscard.prototype;
                        tangon = Object.create(michal, {constructor: {value: oscard}});
                        offset = argFoo;
                        verify = {'method': 'GET', 'mode': 'cors'};
                        yankee = tangon;
                        michal = new yankee[oscard](offset, verify, option);
                        michal = michal instanceof Object ? michal : tangon;
                        golfie = undefined;
                        michal = zuuluu.bind(golfie)(michal);
                        SaveGenerator(address=72);
 70:
                        return michal;
 72:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zuuluu) { _fun00010_ip = 186; continue _fun00009 }
 78:
                        report = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        oscard = 3;
                        zuuluu = zuuluu[oscard];
                        option = report.bind(golfie)(zuuluu);
                        report = michal.status;
                        zuuluu = 200;
                        report = zuuluu === report;
                        zuuluu = 'Data fetch unsuccessful';
                        zuuluu = option.bind(golfie)(report, zuuluu);
                        zuuluu = michal.arrayBuffer;
                        zuuluu = zuuluu.bind(michal)();
                        SaveGenerator(address=139);
 137:
                        return zuuluu;
 139:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(report) { _fun00010_ip = 183; continue _fun00009 }
 145:
                        report = _closure1_slot1;
                        tangon = _closure1_slot2;
                        tangon = tangon[oscard];
                        oscard = report.bind(golfie)(tangon);
                        tangon = null;
                        report = tangon != zuuluu;
                        tangon = 'Data is null';
                        tangon = oscard.bind(golfie)(report, tangon);
                        return zuuluu;
 183:
                        return zuuluu;
 186:
                        return michal;
 189:
                        return entity;
                    }
                };
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            _closure1_slot17 = tangon;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        var _closure1_slot17 = entity;
        report = function(argFoo) { // Original name: getImageData
            zuuluu = _closure1_slot16;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        var _closure1_slot18 = report;
        entity = function(argFoo) { // Original name: normalizeRunningGame
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = argFoo;
                entity = {};
                golfie = _closure1_slot11;
                option = zuuluu.id;
                michal = null;
                verify = michal != option;
                tangon = '';
                oscard = tangon;
                if(!verify) { _fun00012_ip = 36; continue _fun00011 }
 33:
                oscard = option;
 36:
                oscard = golfie[oscard];
                entity['id'] = oscard;
                oscard = global;
                verify = oscard.parseInt;
                oscard = zuuluu.id;
                golfie = michal != oscard;
                option = tangon;
                if(!golfie) { _fun00012_ip = 70; continue _fun00011 }
 67:
                option = oscard;
 70:
                golfie = undefined;
                oscard = 10;
                oscard = verify.bind(golfie)(option, oscard);
                entity['nativeProcessObserverId'] = oscard;
                oscard = zuuluu.gameName;
                if(!(michal == oscard)) { _fun00012_ip = 101; continue _fun00011 }
 96:
                oscard = zuuluu.name;
 101:
                entity['name'] = oscard;
                oscard = zuuluu.name;
                option = michal != oscard;
                if(!option) { _fun00012_ip = 120; continue _fun00011 }
 117:
                tangon = oscard;
 120:
                entity['processName'] = tangon;
                tangon = zuuluu.hidden;
                entity['hidden'] = tangon;
                tangon = zuuluu.elevated;
                entity['elevated'] = tangon;
                oscard = zuuluu.sandboxed;
                tangon = michal != oscard;
                if(!tangon) { _fun00012_ip = 163; continue _fun00011 }
 160:
                tangon = oscard;
 163:
                entity['sandboxed'] = tangon;
                tangon = zuuluu.lastFocused;
                entity['lastFocused'] = tangon;
                tangon = zuuluu.exePath;
                entity['exePath'] = tangon;
                tangon = zuuluu.exeName;
                entity['exeName'] = tangon;
                tangon = zuuluu.cmdLine;
                entity['cmdLine'] = tangon;
                tangon = zuuluu.distributor;
                entity['distributor'] = tangon;
                tangon = zuuluu.sku;
                entity['sku'] = tangon;
                tangon = zuuluu.pid;
                entity['pid'] = tangon;
                tangon = zuuluu.pidPath;
                if(!(michal == tangon)) { _fun00012_ip = 259; continue _fun00011 }
 255:
                tangon = new Array(0);
 259:
                entity['pidPath'] = tangon;
                oscard = zuuluu.windowHandle;
                option = michal != oscard;
                tangon = null;
                if(!option) { _fun00012_ip = 282; continue _fun00011 }
 279:
                tangon = oscard;
 282:
                entity['windowHandle'] = tangon;
                tangon = zuuluu.fullscreenType;
                if(!(michal == tangon)) { _fun00012_ip = 329; continue _fun00011 }
 297:
                oscard = _closure1_slot0;
                option = _closure1_slot2;
                report = 4;
                report = option[report];
                report = oscard.bind(golfie)(report);
                report = report.RunningProcessFullscreenType;
                tangon = report.UNKNOWN;
 329:
                entity['fullscreenType'] = tangon;
                zuuluu = zuuluu.isLauncher;
                michal = michal != zuuluu;
                if(!michal) { _fun00012_ip = 350; continue _fun00011 }
 347:
                michal = zuuluu;
 350:
                entity['isLauncher'] = michal;
                return entity;
            }
        };
        var _closure1_slot19 = entity;
        michal = global;
        romeon = michal.Object;
        yankee = romeon.defineProperty;
        tangon = {};
        entity = true;
        tangon['value'] = entity;
        entity = '__esModule';
        entity = yankee.bind(romeon)(zuuluu, entity, tangon);
        romeon = 0;
        tangon = offset[romeon];
        entity = undefined;
        tangon = golfie.bind(entity)(tangon);
        var _closure1_slot3 = tangon;
        yankee = 1;
        tangon = offset[yankee];
        tangon = golfie.bind(entity)(tangon);
        var _closure1_slot4 = tangon;
        golfie = 2;
        tangon = offset[golfie];
        tangon = verify.bind(entity)(tangon);
        tangon = tangon.NativeFeatures;
        var _closure1_slot5 = tangon;
        tangon = michal.window;
        foxtra = tangon.DiscordNative;
        var _closure1_slot6 = foxtra;
        tangon = ['jpg', 'jpeg', 'png'];
        var _closure1_slot7 = tangon;
        backup = null;
        var _closure1_slot8 = backup;
        var _closure1_slot9 = backup;
        var _closure1_slot10 = backup;
        tangon = {};
        var _closure1_slot11 = tangon;
        if(!(backup != foxtra)) { _fun00002_ip = 355; continue _fun00001 }
 224:
        kiloes = foxtra.remoteApp;
        tangon = kiloes.getVersion;
        sizing = tangon.bind(kiloes)();
        kiloes = sizing.split;
        tangon = '.';
        sizing = kiloes.bind(sizing)(tangon);
        kiloes = sizing.map;
        tangon = function(argFoo) {
            entity = global;
            zuuluu = entity.parseInt;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        tangon = kiloes.bind(sizing)(tangon);
        _closure1_slot8 = tangon;
        tangon = foxtra.remoteApp;
        tangon = tangon.getModuleVersions;
        kiloes = backup == tangon;
        tangon = undefined;
        if(kiloes) { _fun00002_ip = 310; continue _fun00001 }
 294:
        sizing = foxtra.remoteApp;
        kiloes = sizing.getModuleVersions;
        tangon = kiloes.bind(sizing)();
 310:
        _closure1_slot10 = tangon;
        tangon = foxtra.remoteApp;
        tangon = tangon.getBuildNumber;
        backup = backup == tangon;
        tangon = undefined;
        if(backup) { _fun00002_ip = 351; continue _fun00001 }
 335:
        backup = foxtra.remoteApp;
        foxtra = backup.getBuildNumber;
        tangon = foxtra.bind(backup)();
 351:
        _closure1_slot9 = tangon;
 355:
        foxtra = michal.Set;
        michal = foxtra.prototype;
        update = Object.create(michal, {constructor: {value: foxtra}});
        echoed = ['discord_erlpack', 'discord_game_utils', 'discord_rpc', 'discord_spellcheck', 'discord_utils', 'discord_voice'];
        michal = new update[foxtra](echoed, result);
        michal = false;
        var _closure1_slot12 = michal;
        michal = 'lastImageSaveDirectory';
        var _closure1_slot13 = michal;
        tangon = {};
        tangon['Camera'] = romeon;
        michal = 'Camera';
        tangon[romeon] = michal;
        tangon['Microphone'] = yankee;
        michal = 'Microphone';
        tangon[yankee] = michal;
        tangon['Photo'] = golfie;
        michal = 'Photo';
        tangon[golfie] = michal;
        golfie = 3;
        tangon['InputMonitoring'] = golfie;
        michal = 'InputMonitoring';
        tangon[golfie] = michal;
        golfie = 4;
        tangon['ScreenRecording'] = golfie;
        michal = 'ScreenRecording';
        tangon[golfie] = michal;
        michal = {};
        golfie = 'VIDEO';
        michal['VIDEO'] = golfie;
        golfie = 'MUTE';
        michal['MUTE'] = golfie;
        golfie = 'DEAFEN';
        michal['DEAFEN'] = golfie;
        golfie = 'DISCONNECT';
        michal['DISCONNECT'] = golfie;
        golfie = {};
        yankee = function(argFoo) { // Original name: requireModule
            entity = _closure1_slot6;
            zuuluu = entity.nativeModules;
            michal = zuuluu.requireModule;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        golfie['requireModule'] = yankee;
        yankee = function(argFoo) { // Original name: ensureModule
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                entity = entity.isPlatformEmbedded;
                if(entity) { _fun00014_ip = 87; continue _fun00013 }
 34:
                entity = global;
                tangon = entity.Promise;
                zuuluu = tangon.reject;
                oscard = entity.Error;
                entity = oscard.prototype;
                report = Object.create(entity, {constructor: {value: oscard}});
                golfie = 'not embedded';
                option = report;
                entity = new option[oscard](golfie, oscard);
                entity = entity instanceof Object ? entity : report;
                entity = zuuluu.bind(tangon)(entity);
                _fun00014_ip = 111; continue _fun00013;
 87:
                michal = _closure1_slot6;
                tangon = michal.nativeModules;
                zuuluu = tangon.ensureModule;
                michal = argFoo;
                entity = zuuluu.bind(tangon)(michal);
 111:
                return entity;
            }
        };
        golfie['ensureModule'] = yankee;
        romeon = function() { // Original name: get canBootstrapNewUpdater
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = _closure1_slot6;
                entity = entity.nativeModules;
                entity = entity.canBootstrapNewUpdater;
                if(entity) { _fun00016_ip = 26; continue _fun00015 }
 24:
                entity = false;
 26:
                return entity;
            }
        };
        yankee = 'canBootstrapNewUpdater';
        Object.defineProperty(golfie, yankee, {get: romeon, set: entity, enumerable: true});
        yankee = function() { // Original name: getCrashReporterMetadata
            entity = _closure1_slot6;
            michal = entity.crashReporter;
            entity = michal.getMetadata;
            entity = entity.bind(michal)();
            return entity;
        };
        golfie['getCrashReporterMetadata'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: getSetting
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = argBar;
            var _closure2_slot1 = michal;
            zuuluu = _closure1_slot4;
            michal = undefined;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00018_ip = 58; continue _fun00017 }
 7:
                        michal = _closure1_slot6;
                        report = michal.settings;
                        tangon = report.get;
                        zuuluu = _closure2_slot0;
                        michal = _closure2_slot1;
                        michal = tangon.bind(report)(zuuluu, michal);
                        SaveGenerator(address=46);
 44:
                        return michal;
 46:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zuuluu) { _fun00018_ip = 55; continue _fun00017 }
 52:
                        return michal;
 55:
                        return michal;
 58:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        };
        golfie['getSetting'] = yankee;
        yankee = function() { // Original name: beforeUnload
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                option = this;
                entity = undefined;
                michal = undefined;
                report = undefined;
                zuuluu = undefined;
 11: // try_start_0
                oscard = option.requireModule;
                tangon = 'discord_overlay2';
                zuuluu = oscard.bind(option)(tangon);
 28: // try_end0
                _fun00020_ip = 32; continue _fun00019;
 30: // catch_target0
                CatchBlockStart(arg_register=3);
 32:
                oscard = zuuluu;
                tangon = oscard;
                if(!oscard) { _fun00020_ip = 50; continue _fun00019 }
 41:
                oscard = zuuluu;
                tangon = oscard.reset;
 50:
                if(!tangon) { _fun00020_ip = 66; continue _fun00019 }
 53:
                oscard = zuuluu;
                tangon = oscard.reset;
                tangon = tangon.bind(oscard)();
 66:
                golfie = zuuluu;
                oscard = golfie;
                if(!golfie) { _fun00020_ip = 84; continue _fun00019 }
 75:
                golfie = zuuluu;
                oscard = golfie.disconnectAllProcesses;
 84:
                tangon = oscard;
                if(!oscard) { _fun00020_ip = 99; continue _fun00019 }
 90:
                oscard = zuuluu;
                tangon = oscard.destroyHostProcess;
 99:
                if(!tangon) { _fun00020_ip = 125; continue _fun00019 }
 102:
                tangon = zuuluu;
                zuuluu = tangon.disconnectAllProcesses;
                zuuluu = zuuluu.bind(tangon)();
                zuuluu = tangon.destroyHostProcess;
                zuuluu = zuuluu.bind(tangon)();
 125:
                zuuluu = _closure1_slot6;
                tangon = zuuluu.remotePowerMonitor;
                zuuluu = tangon.removeAllListeners;
                zuuluu = zuuluu.bind(tangon)();
                golfie = global;
                verify = golfie.window;
                verify = verify.location;
                verify = verify.origin;
                golfie = golfie.window;
                golfie = golfie.GLOBAL_ENV;
                golfie = golfie.MIGRATION_SOURCE_ORIGIN;
                golfie = verify === golfie;
                tangon = golfie;
                if(!golfie) { _fun00020_ip = 255; continue _fun00019 }
 195:
                yankee = _closure1_slot0;
                romeon = _closure1_slot2;
                golfie = 6;
                golfie = romeon[golfie];
                golfie = yankee.bind(entity)(golfie);
                offset = golfie.Storage;
                verify = offset.get;
                golfie = 7;
                golfie = romeon[golfie];
                golfie = yankee.bind(entity)(golfie);
                golfie = golfie.DOMAIN_MIGRATION_SUCCESS_KEY;
                verify = verify.bind(offset)(golfie);
                golfie = true;
                tangon = golfie !== verify;
 255:
                zuuluu = tangon;
                if(!tangon) { _fun00020_ip = 282; continue _fun00019 }
 261:
                golfie = option.supportsFeature;
                tangon = _closure1_slot5;
                tangon = tangon.USER_DATA_CACHE;
                zuuluu = golfie.bind(option)(tangon);
 282:
                if(!zuuluu) { _fun00020_ip = 346; continue _fun00019 }
 285:
                zuuluu = _closure1_slot6;
                golfie = zuuluu.userDataCache;
                tangon = golfie.cacheUserData;
                option = _closure1_slot0;
                verify = _closure1_slot2;
                zuuluu = 6;
                zuuluu = verify[zuuluu];
                zuuluu = option.bind(entity)(zuuluu);
                option = zuuluu.Storage;
                zuuluu = option.stringify;
                zuuluu = zuuluu.bind(option)();
                zuuluu = tangon.bind(golfie)(zuuluu);
 346:
                tangon = _closure1_slot6;
                golfie = null;
                tangon = golfie == tangon;
                zuuluu = tangon;
                if(tangon) { _fun00020_ip = 378; continue _fun00019 }
 362:
                tangon = _closure1_slot6;
                tangon = tangon.window;
                michal = tangon;
                zuuluu = golfie == tangon;
 378:
                if(zuuluu) { _fun00020_ip = 440; continue _fun00019 }
 381:
                tangon = michal;
                zuuluu = tangon.close;
                michal = _closure1_slot6;
                option = golfie == michal;
                michal = undefined;
                if(option) { _fun00020_ip = 435; continue _fun00019 }
 403:
                oscard = _closure1_slot6;
                oscard = oscard.globalOverlay;
                report = oscard;
                oscard = golfie == oscard;
                michal = undefined;
                if(oscard) { _fun00020_ip = 435; continue _fun00019 }
 427:
                michal = report.WINDOW_KEY;
 435:
                michal = zuuluu.bind(tangon)(michal);
 440:
                return entity;
            }
        };
        golfie['beforeUnload'] = yankee;
        yankee = function(argFoo, argBar, argBaz, argCor) { // Original name: inputEventRegister
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                report = argBar;
                zuuluu = this;
                entity = global;
                tangon = entity.Array;
                michal = tangon.isArray;
                michal = michal.bind(tangon)(report);
                tangon = report;
                if(michal) { _fun00022_ip = 40; continue _fun00021 }
 30:
                michal = report.toJS;
                tangon = michal.bind(report)();
 40:
                michal = zuuluu.getDiscordUtils;
                golfie = michal.bind(zuuluu)();
                oscard = golfie.inputEventRegister;
                zuuluu = entity.parseInt;
                entity = undefined;
                michal = argFoo;
                report = zuuluu.bind(entity)(michal);
                zuuluu = tangon.map;
                michal = function(argFoo) {
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        oscard = argFoo;
                        entity = oscard[Symbol.iterator];
                        oscard = entity().next;
                        zuuluu = oscard().value;
                        michal = entity;
                        option = undefined;
                        michal = michal === option;
                        report = undefined;
                        if(michal) { _fun00024_ip = 27; continue _fun00023 }
 24:
                        report = zuuluu;
 27:
                        tangon = undefined;
                        if(michal) { _fun00024_ip = 57; continue _fun00023 }
 32:
                        golfie = oscard().value;
                        zuuluu = entity;
                        zuuluu = zuuluu === option;
                        tangon = undefined;
                        michal = zuuluu;
                        if(zuuluu) { _fun00024_ip = 57; continue _fun00023 }
 51:
                        tangon = golfie;
                        michal = zuuluu;
 57:
                        zuuluu = undefined;
                        if(michal) { _fun00024_ip = 87; continue _fun00023 }
 62:
                        golfie = oscard().value;
                        oscard = entity;
                        oscard = oscard === option;
                        zuuluu = undefined;
                        michal = oscard;
                        if(oscard) { _fun00024_ip = 87; continue _fun00023 }
 81:
                        zuuluu = golfie;
                        michal = oscard;
 87:
                        if(michal) { _fun00024_ip = 93; continue _fun00023 }
 90:
                        entity.return();
 93:
                        michal = 'string';
                        entity = typeof zuuluu;
                        if(!(michal !== entity)) { _fun00024_ip = 118; continue _fun00023 }
 104:
                        entity = new Array(2);
                        entity[0] = report;
                        entity[1] = tangon;
                        _fun00024_ip = 137; continue _fun00023;
 118:
                        michal = new Array(3);
                        michal[0] = report;
                        michal[1] = tangon;
                        michal[2] = zuuluu;
                        entity = michal;
 137:
                        return entity;
                    }
                };
                offset = zuuluu.bind(tangon)(michal);
                verify = argBaz;
                option = argCor;
                romeon = golfie;
                yankee = report;
                michal = romeon[oscard](yankee, offset, verify, option, golfie);
                return entity;
            }
        };
        golfie['inputEventRegister'] = yankee;
        yankee = function(argFoo) { // Original name: inputEventUnregister
            michal = this;
            entity = michal.getDiscordUtils;
            tangon = entity.bind(michal)();
            zuuluu = tangon.inputEventUnregister;
            entity = global;
            report = entity.parseInt;
            entity = undefined;
            michal = argFoo;
            michal = report.bind(entity)(michal);
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        golfie['inputEventUnregister'] = yankee;
        yankee = function(argFoo) { // Original name: setOnInputEventCallback
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                zuuluu = this;
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                michal = tangon.bind(entity)(michal);
                michal = michal.isPlatformEmbedded;
                if(!michal) { _fun00026_ip = 63; continue _fun00025 }
 37:
                michal = zuuluu.getDiscordUtils;
                tangon = michal.bind(zuuluu)();
                zuuluu = tangon.inputWatchAll;
                michal = argFoo;
                michal = zuuluu.bind(tangon)(michal);
 63:
                return entity;
            }
        };
        golfie['setOnInputEventCallback'] = yankee;
        yankee = function(argFoo) { // Original name: setFocused
            michal = this;
            entity = michal.getDiscordUtils;
            zuuluu = entity.bind(michal)();
            michal = zuuluu.inputSetFocused;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        golfie['setFocused'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: setObservedGamesCallback
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                tangon = this;
                michal = argFoo;
                zuuluu = argBar;
                var _closure2_slot0 = zuuluu;
 15: // try_start_0
                zuuluu = {};
                _closure1_slot11 = zuuluu;
                zuuluu = 0;
                var _closure2_slot1 = zuuluu;
                zuuluu = tangon.getDiscordUtils;
                tangon = zuuluu.bind(tangon)();
                zuuluu = tangon.setObservedGamesCallback;
                oscard = michal;
                report = oscard.map;
                michal = function(argFoo) {
                    _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                        michal = argFoo;
                        zuuluu = _closure2_slot1;
                        zuuluu = zuuluu + 1;
                        _closure2_slot1 = zuuluu;
                        tangon = michal.id;
                        entity = null;
                        if(!(entity != tangon)) { _fun00030_ip = 44; continue _fun00029 }
 28:
                        tangon = _closure1_slot11;
                        entity = michal.id;
                        tangon[zuuluu] = entity;
 44:
                        entity = {};
                        oscard = entity;
                        report = michal;
                        tangon = copyDataProperties(oscard, report);
                        tangon = michal.cmdLine;
                        michal = 'cmdline';
                        entity[michal] = tangon;
                        michal = 'id';
                        entity[michal] = zuuluu;
                        return entity;
                    }
                };
                michal = report.bind(oscard)(michal);
                entity = function(argFoo) {
                    tangon = argFoo;
                    zuuluu = _closure2_slot0;
                    michal = tangon.map;
                    entity = _closure1_slot19;
                    michal = michal.bind(tangon)(entity);
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal, entity);
 75: // try_end0
                _fun00028_ip = 79; continue _fun00027;
 77: // catch_target0
                CatchBlockStart(arg_register=0);
 79:
                entity = undefined;
                return entity;
            }
        };
        golfie['setObservedGamesCallback'] = yankee;
        yankee = function(argFoo) { // Original name: setCandidateGamesCallback
            zuuluu = this;
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = zuuluu.getDiscordUtils;
            zuuluu = michal.bind(zuuluu)();
            michal = zuuluu.setCandidateGamesCallback;
            entity = function(argFoo) {
                tangon = argFoo;
                zuuluu = _closure2_slot0;
                michal = tangon.map;
                entity = _closure1_slot19;
                michal = michal.bind(tangon)(entity);
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        golfie['setCandidateGamesCallback'] = yankee;
        yankee = function() { // Original name: clearCandidateGamesCallback
            michal = this;
            entity = michal.getDiscordUtils;
            michal = entity.bind(michal)();
            entity = michal.clearCandidateGamesCallback;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        golfie['clearCandidateGamesCallback'] = yankee;
        yankee = function(argFoo) { // Original name: setGameCandidateOverrides
            report = argFoo;
            michal = this;
            entity = michal.getDiscordUtils;
            zuuluu = entity.bind(michal)();
            michal = zuuluu.setGameCandidateOverrides;
            tangon = report.map;
            entity = function(argFoo) {
                michal = argFoo;
                entity = {};
                oscard = entity;
                report = michal;
                zuuluu = copyDataProperties(oscard, report);
                tangon = michal.id;
                zuuluu = 'gameId';
                entity[zuuluu] = tangon;
                zuuluu = michal.name;
                michal = 'gameName';
                entity[michal] = zuuluu;
                return entity;
            };
            entity = tangon.bind(report)(entity);
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        golfie['setGameCandidateOverrides'] = yankee;
        yankee = function(argFoo, argBar, argBaz) { // Original name: setObserverDebugCallback
            zuuluu = this;
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = zuuluu.getDiscordUtils;
            report = michal.bind(zuuluu)();
            tangon = report.setObserverDebugCallback;
            zuuluu = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            michal = argBar;
            entity = argBaz;
            entity = tangon.bind(report)(zuuluu, michal, entity);
            entity = undefined;
            return entity;
        };
        golfie['setObserverDebugCallback'] = yankee;
        yankee = function() { // Original name: clearObserverDebugCallback
            michal = this;
            entity = michal.getDiscordUtils;
            oscard = entity.bind(michal)();
            report = oscard.setObserverDebugCallback;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            michal = michal.GameDetectionDebugLevel;
            tangon = michal.NONE;
            zuuluu = null;
            michal = 0;
            michal = report.bind(oscard)(zuuluu, tangon, michal);
            return entity;
        };
        golfie['clearObserverDebugCallback'] = yankee;
        yankee = function() { // Original name: shouldDisplayNotifications
            michal = this;
            entity = michal.getDiscordUtils;
            michal = entity.bind(michal)();
            entity = michal.shouldDisplayNotifications;
            entity = entity.bind(michal)();
            return entity;
        };
        golfie['shouldDisplayNotifications'] = yankee;
        yankee = function() { // Original name: getVoiceEngine
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                tangon = this;
                zuuluu = tangon.requireModule;
                entity = 'discord_voice';
                entity = zuuluu.bind(tangon)(entity);
                var _closure2_slot0 = entity;
                tangon = _closure1_slot12;
                if(tangon) { _fun00032_ip = 74; continue _fun00031 }
 36:
                oscard = _closure1_slot0;
                report = _closure1_slot2;
                tangon = 9;
                report = report[tangon];
                tangon = undefined;
                report = oscard.bind(tangon)(report);
                tangon = report.setNativeLogFn;
                michal = function(argFoo, argBar, argBaz) {
                    tangon = _closure2_slot0;
                    zuuluu = tangon.consoleLog;
                    entity = global;
                    entity = entity.HermesInternal;
                    golfie = entity.concat;
                    oscard = '[';
                    report = argFoo;
                    michal = '] ';
                    entity = argBaz;
                    michal = golfie.bind(oscard)(report, michal, entity);
                    entity = argBar;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    entity = undefined;
                    return entity;
                };
                michal = tangon.bind(report)(michal);
 74:
                michal = true;
                _closure1_slot12 = michal;
                return entity;
            }
        };
        golfie['getVoiceEngine'] = yankee;
        yankee = function() { // Original name: getDiscordUtils
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                zuuluu = this;
                entity = _closure1_slot12;
                if(entity) { _fun00034_ip = 27; continue _fun00033 }
 13: // try_start_0
                entity = zuuluu.getVoiceEngine;
                entity = entity.bind(zuuluu)();
 23: // try_end0
                _fun00034_ip = 27; continue _fun00033;
 25: // catch_target0
                CatchBlockStart(arg_register=0);
 27:
                michal = zuuluu.requireModule;
                entity = 'discord_utils';
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        golfie['getDiscordUtils'] = yankee;
        yankee = function() { // Original name: isSystemDarkMode
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                tangon = this;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 5;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = michal.isWindows;
                entity = entity.bind(michal)();
                michal = !entity;
                entity = !michal;
                if(michal) { _fun00036_ip = 97; continue _fun00035 }
 47:
                michal = tangon.getDiscordUtils;
                oscard = michal.bind(tangon)();
                report = oscard.isSystemDarkMode;
                michal = null;
                tangon = michal == report;
                zuuluu = undefined;
                if(tangon) { _fun00036_ip = 84; continue _fun00035 }
 74:
                tangon = report.call;
                zuuluu = tangon.bind(report)(oscard);
 84:
                michal = michal == zuuluu;
                if(michal) { _fun00036_ip = 94; continue _fun00035 }
 91:
                michal = zuuluu;
 94:
                entity = michal;
 97:
                return entity;
            }
        };
        golfie['isSystemDarkMode'] = yankee;
        yankee = function() { // Original name: getVoiceFilters
            zuuluu = this;
            michal = zuuluu.requireModule;
            entity = 'discord_voice_filters';
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        golfie['getVoiceFilters'] = yankee;
        yankee = function() { // Original name: getGameUtils
            zuuluu = this;
            michal = zuuluu.requireModule;
            entity = 'discord_game_utils';
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        golfie['getGameUtils'] = yankee;
        yankee = function() { // Original name: getCloudSync
            zuuluu = this;
            michal = zuuluu.requireModule;
            entity = 'discord_cloudsync';
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        golfie['getCloudSync'] = yankee;
        yankee = function() { // Original name: getDispatch
            zuuluu = this;
            michal = zuuluu.requireModule;
            entity = 'discord_dispatch';
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        golfie['getDispatch'] = yankee;
        yankee = function(argFoo) { // Original name: setBadge
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                oscard = argFoo;
                report = this;
                tangon = _closure1_slot0;
                entity = _closure1_slot2;
                golfie = 5;
                zuuluu = entity[golfie];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.getPlatformName;
                tangon = zuuluu.bind(tangon)();
                zuuluu = 'darwin';
                if(!(zuuluu !== tangon)) { _fun00038_ip = 186; continue _fun00037 }
 54:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                zuuluu = zuuluu[golfie];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.getPlatformName;
                tangon = zuuluu.bind(tangon)();
                zuuluu = 'win32';
                if(!(zuuluu !== tangon)) { _fun00038_ip = 166; continue _fun00037 }
 91:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                zuuluu = zuuluu[golfie];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.getPlatformName;
                tangon = zuuluu.bind(tangon)();
                zuuluu = 'linux';
                if(!(zuuluu === tangon)) { _fun00038_ip = 261; continue _fun00037 }
 129:
                zuuluu = _closure1_slot6;
                golfie = zuuluu.remoteApp;
                tangon = golfie.setBadgeCount;
                zuuluu = 0;
                option = oscard >= zuuluu;
                if(!option) { _fun00038_ip = 159; continue _fun00037 }
 156:
                zuuluu = oscard;
 159:
                zuuluu = tangon.bind(golfie)(zuuluu);
                _fun00038_ip = 261; continue _fun00037;
 166:
                tangon = report.send;
                zuuluu = 'APP_BADGE_SET';
                zuuluu = tangon.bind(report)(zuuluu, oscard);
                _fun00038_ip = 261; continue _fun00037;
 186:
                tangon = '•';
                zuuluu = -1;
                if(!(zuuluu !== oscard)) { _fun00038_ip = 234; continue _fun00037 }
 200:
                zuuluu = 0;
                zuuluu = oscard > zuuluu;
                report = '';
                tangon = report;
                if(!zuuluu) { _fun00038_ip = 234; continue _fun00037 }
 216:
                zuuluu = global;
                zuuluu = zuuluu.HermesInternal;
                zuuluu = zuuluu.concat;
                tangon = zuuluu.bind(report)(oscard);
 234:
                michal = _closure1_slot6;
                michal = michal.remoteApp;
                zuuluu = michal.dock;
                michal = zuuluu.setBadge;
                michal = michal.bind(zuuluu)(tangon);
 261:
                return entity;
            }
        };
        golfie['setBadge'] = yankee;
        yankee = function(argFoo) { // Original name: setSystemTrayIcon
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                report = this;
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                michal = michal.isPlatformEmbedded;
                if(!michal) { _fun00040_ip = 58; continue _fun00039 }
 37:
                tangon = report.send;
                zuuluu = 'SYSTEM_TRAY_SET_ICON';
                michal = argFoo;
                michal = tangon.bind(report)(zuuluu, michal);
 58:
                return entity;
            }
        };
        golfie['setSystemTrayIcon'] = yankee;
        yankee = function(argFoo) { // Original name: setThumbarButtons
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                zuuluu = this;
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 5;
                tangon = tangon[entity];
                entity = undefined;
                tangon = report.bind(entity)(tangon);
                tangon = tangon.isPlatformEmbedded;
                if(!tangon) { _fun00042_ip = 96; continue _fun00041 }
 37:
                michal = _closure1_slot6;
                report = michal.thumbar;
                oscard = null;
                michal = oscard == report;
                if(michal) { _fun00042_ip = 68; continue _fun00041 }
 58:
                tangon = report.setThumbarButtons;
                michal = oscard == tangon;
 68:
                if(michal) { _fun00042_ip = 96; continue _fun00041 }
 71:
                tangon = report.setThumbarButtons;
                michal = zuuluu.isSystemDarkMode;
                zuuluu = michal.bind(zuuluu)();
                michal = argFoo;
                michal = tangon.bind(report)(michal, zuuluu);
 96:
                return entity;
            }
        };
        golfie['setThumbarButtons'] = yankee;
        yankee = function(argFoo) { // Original name: bounceDock
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 5;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                tangon = report.bind(zuuluu)(tangon);
                tangon = tangon.isPlatformEmbedded;
                if(!tangon) { _fun00044_ip = 62; continue _fun00043 }
 36:
                tangon = _closure1_slot6;
                tangon = tangon.remoteApp;
                var _closure2_slot0 = tangon;
                oscard = tangon.dock;
                report = null;
                if(!(report == oscard)) { _fun00044_ip = 64; continue _fun00043 }
 62:
                return zuuluu;
 64:
                oscard = tangon.dock;
                report = oscard.bounce;
                tangon = argFoo;
                tangon = report.bind(oscard)(tangon);
                var _closure2_slot1 = tangon;
                michal = _closure1_slot4;
                entity = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00046_ip = 55; continue _fun00045 }
 7:
                            michal = _closure2_slot1;
                            SaveGenerator(address=18);
 16:
                            return michal;
 18:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(tangon) { _fun00046_ip = 52; continue _fun00045 }
 24:
                            zuuluu = _closure2_slot0;
                            tangon = zuuluu.dock;
                            zuuluu = tangon.cancelBounce;
                            zuuluu = zuuluu.bind(tangon)(michal);
                            zuuluu = undefined;
                            return zuuluu;
 52:
                            return michal;
 55:
                            return entity;
                        }
                    };
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        golfie['bounceDock'] = yankee;
        yankee = function(argFoo) { // Original name: setSystemTrayApplications
            _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                report = this;
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                michal = michal.isPlatformEmbedded;
                if(!michal) { _fun00048_ip = 58; continue _fun00047 }
 37:
                tangon = report.send;
                zuuluu = 'SYSTEM_TRAY_SET_APPLICATIONS';
                michal = argFoo;
                michal = tangon.bind(report)(zuuluu, michal);
 58:
                return entity;
            }
        };
        golfie['setSystemTrayApplications'] = yankee;
        romeon = function() { // Original name: get architecture
            _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                zuuluu = entity.isPlatformEmbedded;
                entity = '';
                if(!zuuluu) { _fun00050_ip = 54; continue _fun00049 }
 38:
                michal = _closure1_slot6;
                michal = michal.process;
                entity = michal.arch;
 54:
                return entity;
            }
        };
        yankee = 'architecture';
        Object.defineProperty(golfie, yankee, {get: romeon, set: entity, enumerable: true});
        romeon = function() { // Original name: get releaseChannel
            _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 5;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                michal = michal.isPlatformEmbedded;
                if(michal) { _fun00052_ip = 40; continue _fun00051 }
 34:
                michal = '';
                return michal;
 40:
                entity = _closure1_slot6;
                michal = entity.remoteApp;
                entity = michal.getReleaseChannel;
                michal = entity.bind(michal)();
                entity = null;
                zuuluu = entity != michal;
                entity = '';
                if(!zuuluu) { _fun00052_ip = 76; continue _fun00051 }
 73:
                entity = michal;
 76:
                return entity;
            }
        };
        yankee = 'releaseChannel';
        Object.defineProperty(golfie, yankee, {get: romeon, set: entity, enumerable: true});
        romeon = function() { // Original name: get version
            entity = _closure1_slot8;
            return entity;
        };
        yankee = 'version';
        Object.defineProperty(golfie, yankee, {get: romeon, set: entity, enumerable: true});
        romeon = function() { // Original name: get buildNumber
            entity = _closure1_slot9;
            return entity;
        };
        yankee = 'buildNumber';
        Object.defineProperty(golfie, yankee, {get: romeon, set: entity, enumerable: true});
        romeon = function() { // Original name: get moduleVersions
            entity = _closure1_slot10;
            return entity;
        };
        yankee = 'moduleVersions';
        Object.defineProperty(golfie, yankee, {get: romeon, set: entity, enumerable: true});
        romeon = function() { // Original name: get parsedOSRelease
            _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                entity = entity.isPlatformEmbedded;
                if(entity) { _fun00054_ip = 40; continue _fun00053 }
 34:
                entity = new Array(0);
                _fun00054_ip = 87; continue _fun00053;
 40:
                michal = _closure1_slot6;
                michal = michal.os;
                tangon = michal.release;
                zuuluu = tangon.split;
                michal = '.';
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = tangon.map;
                michal = function(argFoo) {
                    entity = global;
                    tangon = entity.parseInt;
                    zuuluu = undefined;
                    michal = argFoo;
                    entity = 10;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal);
 87:
                return entity;
            }
        };
        yankee = 'parsedOSRelease';
        Object.defineProperty(golfie, yankee, {get: romeon, set: entity, enumerable: true});
        yankee = function(argFoo) { // Original name: copy
            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = zuuluu.isPlatformEmbedded;
                if(!zuuluu) { _fun00056_ip = 58; continue _fun00055 }
 34:
                michal = _closure1_slot6;
                tangon = michal.clipboard;
                zuuluu = tangon.copy;
                michal = argFoo;
                michal = zuuluu.bind(tangon)(michal);
 58:
                return entity;
            }
        };
        golfie['copy'] = yankee;
        yankee = function(argFoo) { // Original name: copyImage
            michal = argFoo;
            var _closure2_slot0 = michal;
            zuuluu = _closure1_slot4;
            michal = undefined;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00058_ip = 193; continue _fun00057 }
 10:
                        tangon = _closure1_slot1;
                        oscard = _closure1_slot2;
                        michal = 3;
                        golfie = oscard[michal];
                        zuuluu = undefined;
                        verify = tangon.bind(zuuluu)(golfie);
                        option = _closure1_slot0;
                        golfie = 5;
                        golfie = oscard[golfie];
                        golfie = option.bind(zuuluu)(golfie);
                        option = golfie.isPlatformEmbedded;
                        golfie = 'Copy image method called outside native app';
                        golfie = verify.bind(zuuluu)(option, golfie);
                        michal = oscard[michal];
                        oscard = tangon.bind(zuuluu)(michal);
                        michal = _closure1_slot6;
                        michal = michal.clipboard;
                        michal = michal.copyImage;
                        tangon = 'function';
                        michal = typeof michal;
                        tangon = tangon === michal;
                        michal = 'Copy image not supported';
                        michal = oscard.bind(zuuluu)(tangon, michal);
                        oscard = _closure1_slot18;
                        michal = _closure2_slot0;
                        michal = oscard.bind(zuuluu)(michal);
                        SaveGenerator(address=137);
 135:
                        return michal;
 137:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(oscard) { _fun00058_ip = 190; continue _fun00057 }
 143:
                        report = _closure1_slot6;
                        golfie = report.clipboard;
                        oscard = golfie.copyImage;
                        report = global;
                        option = report.Buffer;
                        report = option.from;
                        report = report.bind(option)(michal);
                        tangon = _closure2_slot0;
                        tangon = oscard.bind(golfie)(report, tangon);
                        return zuuluu;
 190:
                        return michal;
 193:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        };
        golfie['copyImage'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: copyImageBlob
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = argBar;
            var _closure2_slot1 = michal;
            zuuluu = _closure1_slot4;
            michal = undefined;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00060_ip = 89; continue _fun00059 }
 7:
                        tangon = _closure2_slot0;
                        michal = tangon.arrayBuffer;
                        michal = michal.bind(tangon)();
                        SaveGenerator(address=28);
 26:
                        return michal;
 28:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tangon) { _fun00060_ip = 86; continue _fun00059 }
 34:
                        tangon = _closure1_slot6;
                        oscard = tangon.clipboard;
                        report = oscard.copyImage;
                        tangon = global;
                        golfie = tangon.Buffer;
                        tangon = golfie.from;
                        tangon = tangon.bind(golfie)(michal);
                        zuuluu = _closure2_slot1;
                        zuuluu = report.bind(oscard)(tangon, zuuluu);
                        zuuluu = undefined;
                        return zuuluu;
 86:
                        return michal;
 89:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        };
        golfie['copyImageBlob'] = yankee;
        yankee = function(argFoo) { // Original name: saveImage
            michal = argFoo;
            var _closure2_slot0 = michal;
            zuuluu = _closure1_slot4;
            michal = undefined;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00062_ip = 329; continue _fun00061 }
 10:
                        zuuluu = _closure1_slot1;
                        oscard = _closure1_slot2;
                        michal = 3;
                        michal = oscard[michal];
                        tangon = undefined;
                        option = zuuluu.bind(tangon)(michal);
                        golfie = _closure1_slot0;
                        michal = 5;
                        michal = oscard[michal];
                        michal = golfie.bind(tangon)(michal);
                        golfie = michal.isPlatformEmbedded;
                        michal = 'Save image method called outside native app';
                        michal = option.bind(tangon)(golfie, michal);
                        michal = 10;
                        michal = oscard[michal];
                        golfie = zuuluu.bind(tangon)(michal);
                        oscard = golfie.toURLSafe;
                        zuuluu = _closure2_slot0;
                        zuuluu = oscard.bind(golfie)(zuuluu);
                        oscard = null;
                        if(!(oscard != zuuluu)) { _fun00062_ip = 320; continue _fun00061 }
 108:
                        option = zuuluu.pathname;
                        golfie = option.split;
                        zuuluu = '/';
                        golfie = golfie.bind(option)(zuuluu);
                        zuuluu = golfie.pop;
                        zuuluu = zuuluu.bind(golfie)();
                        golfie = oscard != zuuluu;
                        yankee = 'unknown';
                        if(!golfie) { _fun00062_ip = 152; continue _fun00061 }
 149:
                        yankee = zuuluu;
 152:
                        golfie = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        option = 6;
                        zuuluu = zuuluu[option];
                        zuuluu = golfie.bind(tangon)(zuuluu);
                        verify = zuuluu.Storage;
                        golfie = verify.get;
                        zuuluu = _closure1_slot13;
                        romeon = golfie.bind(verify)(zuuluu);
                        zuuluu = _closure1_slot18;
                        michal = _closure2_slot0;
                        michal = zuuluu.bind(tangon)(michal);
                        SaveGenerator(address=209);
 207:
                        return michal;
 209:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zuuluu) { _fun00062_ip = 326; continue _fun00061 }
 215:
                        zuuluu = global;
                        golfie = zuuluu.Buffer;
                        zuuluu = golfie.from;
                        offset = zuuluu.bind(golfie)(michal);
                        zuuluu = _closure1_slot6;
                        verify = zuuluu.fileManager;
                        golfie = verify.saveWithDialog;
                        foxtra = oscard != romeon;
                        zuuluu = undefined;
                        if(!foxtra) { _fun00062_ip = 261; continue _fun00061 }
 258:
                        zuuluu = romeon;
 261:
                        zuuluu = golfie.bind(verify)(offset, yankee, zuuluu);
                        SaveGenerator(address=272);
 270:
                        return zuuluu;
 272:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                        if(golfie) { _fun00062_ip = 323; continue _fun00061 }
 278:
                        if(!(oscard != zuuluu)) { _fun00062_ip = 320; continue _fun00061 }
 282:
                        golfie = _closure1_slot0;
                        oscard = _closure1_slot2;
                        oscard = oscard[option];
                        oscard = golfie.bind(tangon)(oscard);
                        golfie = oscard.Storage;
                        oscard = golfie.set;
                        report = _closure1_slot13;
                        report = oscard.bind(golfie)(report, zuuluu);
 320:
                        return tangon;
 323:
                        return zuuluu;
 326:
                        return michal;
 329:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        };
        golfie['saveImage'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: saveFile
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = argBar;
            var _closure2_slot1 = michal;
            zuuluu = _closure1_slot4;
            michal = undefined;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00064_ip = 238; continue _fun00063 }
 10:
                        zuuluu = _closure1_slot1;
                        report = _closure1_slot2;
                        michal = 3;
                        michal = report[michal];
                        oscard = undefined;
                        option = zuuluu.bind(oscard)(michal);
                        golfie = _closure1_slot0;
                        michal = 5;
                        michal = report[michal];
                        michal = golfie.bind(oscard)(michal);
                        golfie = michal.isPlatformEmbedded;
                        michal = 'Save file method called outside native app';
                        michal = option.bind(oscard)(golfie, michal);
                        michal = 10;
                        michal = report[michal];
                        golfie = zuuluu.bind(oscard)(michal);
                        report = golfie.toURLSafe;
                        michal = _closure2_slot0;
                        report = report.bind(golfie)(michal);
                        michal = null;
                        if(!(michal != report)) { _fun00064_ip = 235; continue _fun00063 }
 108:
                        golfie = _closure2_slot1;
                        if(!(michal == golfie)) { _fun00064_ip = 148; continue _fun00063 }
 116:
                        option = report.pathname;
                        golfie = option.split;
                        report = '/';
                        golfie = golfie.bind(option)(report);
                        report = golfie.pop;
                        report = report.bind(golfie)();
                        _fun00064_ip = 152; continue _fun00063;
 148:
                        report = _closure2_slot1;
 152:
                        option = michal != report;
                        golfie = 'unknown';
                        if(!option) { _fun00064_ip = 166; continue _fun00063 }
 163:
                        golfie = report;
 166:
                        report = _closure1_slot16;
                        zuuluu = _closure2_slot0;
                        zuuluu = report.bind(oscard)(zuuluu);
                        SaveGenerator(address=183);
 181:
                        return zuuluu;
 183:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(report) { _fun00064_ip = 232; continue _fun00063 }
 189:
                        report = global;
                        oscard = report.Buffer;
                        report = oscard.from;
                        oscard = report.bind(oscard)(zuuluu);
                        tangon = _closure1_slot6;
                        report = tangon.fileManager;
                        tangon = report.saveWithDialog;
                        tangon = tangon.bind(report)(oscard, golfie);
                        return tangon;
 232:
                        return zuuluu;
 235:
                        return michal;
 238:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        };
        golfie['saveFile'] = yankee;
        yankee = function(argFoo, argBar, argBaz) { // Original name: downloadVoiceFilterFile
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = argBar;
            var _closure2_slot1 = michal;
            michal = argBaz;
            var _closure2_slot2 = michal;
            zuuluu = _closure1_slot4;
            michal = undefined;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00066_ip = 169; continue _fun00065 }
 10:
                        report = _closure1_slot1;
                        verify = _closure1_slot2;
                        tangon = 3;
                        michal = verify[tangon];
                        option = undefined;
                        golfie = report.bind(option)(michal);
                        oscard = _closure1_slot0;
                        michal = 5;
                        michal = verify[michal];
                        michal = oscard.bind(option)(michal);
                        oscard = michal.isPlatformEmbedded;
                        michal = 'Download voice filter file method called outside native app';
                        michal = golfie.bind(option)(oscard, michal);
                        michal = 10;
                        michal = verify[michal];
                        offset = report.bind(option)(michal);
                        golfie = offset.toURLSafe;
                        oscard = _closure2_slot0;
                        golfie = golfie.bind(offset)(oscard);
                        tangon = verify[tangon];
                        report = report.bind(option)(tangon);
                        tangon = 'Could not download voice filter, fileSrc was not a valid path';
                        tangon = report.bind(option)(golfie, tangon);
                        zuuluu = _closure1_slot6;
                        report = zuuluu.fileManager;
                        tangon = report.maybeDownloadVoiceFilterFile;
                        zuuluu = _closure2_slot1;
                        michal = _closure2_slot2;
                        michal = tangon.bind(report)(oscard, zuuluu, michal);
                        SaveGenerator(address=157);
 155:
                        return michal;
 157:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zuuluu) { _fun00066_ip = 166; continue _fun00065 }
 163:
                        return michal;
 166:
                        return michal;
 169:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        };
        golfie['downloadVoiceFilterFile'] = yankee;
        yankee = function() { // Original name: stopVoiceFilterDownloads
            entity = _closure1_slot6;
            michal = entity.fileManager;
            entity = michal.stopVoiceFilterDownloads;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        golfie['stopVoiceFilterDownloads'] = yankee;
        yankee = function() { // Original name: canCopyImage
            _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
                oscard = arguments[0];
                zuuluu = undefined;
                if(!(oscard === zuuluu)) { _fun00068_ip = 11; continue _fun00067 }
 9:
                oscard = undefined;
 11:
                michal = null;
                if(!(michal != oscard)) { _fun00068_ip = 141; continue _fun00067 }
 20:
                report = _closure1_slot1;
                golfie = _closure1_slot2;
                tangon = 10;
                tangon = golfie[tangon];
                report = report.bind(zuuluu)(tangon);
                tangon = report.toURLSafe;
                tangon = tangon.bind(report)(oscard);
                report = michal == tangon;
                oscard = undefined;
                if(report) { _fun00068_ip = 69; continue _fun00067 }
 63:
                oscard = tangon.pathname;
 69:
                if(!(michal != oscard)) { _fun00068_ip = 173; continue _fun00067 }
 73:
                report = oscard.split;
                tangon = '.';
                report = report.bind(oscard)(tangon);
                tangon = report.pop;
                report = tangon.bind(report)();
                tangon = michal == report;
                zuuluu = undefined;
                if(tangon) { _fun00068_ip = 116; continue _fun00067 }
 106:
                tangon = report.toLowerCase;
                zuuluu = tangon.bind(report)();
 116:
                if(!(michal != zuuluu)) { _fun00068_ip = 141; continue _fun00067 }
 120:
                michal = _closure1_slot7;
                entity = michal.includes;
                entity = entity.bind(michal)(zuuluu);
                if(entity) { _fun00068_ip = 141; continue _fun00067 }
 137:
                entity = false;
                return entity;
 141:
                entity = _closure1_slot6;
                entity = entity.clipboard;
                entity = entity.copyImage;
                michal = 'function';
                entity = typeof entity;
                entity = michal === entity;
                return entity;
 173:
                entity = false;
                return entity;
            }
        };
        golfie['canCopyImage'] = yankee;
        yankee = function() { // Original name: cut
            _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = zuuluu.isPlatformEmbedded;
                if(!zuuluu) { _fun00070_ip = 54; continue _fun00069 }
 34:
                michal = _closure1_slot6;
                zuuluu = michal.clipboard;
                michal = zuuluu.cut;
                michal = michal.bind(zuuluu)();
 54:
                return entity;
            }
        };
        golfie['cut'] = yankee;
        yankee = function() { // Original name: paste
            _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = zuuluu.isPlatformEmbedded;
                if(!zuuluu) { _fun00072_ip = 54; continue _fun00071 }
 34:
                michal = _closure1_slot6;
                zuuluu = michal.clipboard;
                michal = zuuluu.paste;
                michal = michal.bind(zuuluu)();
 54:
                return entity;
            }
        };
        golfie['paste'] = yankee;
        yankee = function() { // Original name: readClipboard
            _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                zuuluu = entity.isPlatformEmbedded;
                entity = '';
                if(!zuuluu) { _fun00074_ip = 58; continue _fun00073 }
 38:
                michal = _closure1_slot6;
                zuuluu = michal.clipboard;
                michal = zuuluu.read;
                entity = michal.bind(zuuluu)();
 58:
                return entity;
            }
        };
        golfie['readClipboard'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: on
            entity = _closure1_slot6;
            tangon = entity.ipc;
            zuuluu = tangon.on;
            michal = argFoo;
            entity = argBar;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        golfie['on'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: invoke
            report = 1;
            verify = report;
            option = copyRestArgs(verify);
            entity = _closure1_slot6;
            zuuluu = entity.ipc;
            michal = zuuluu.invoke;
            entity = new Array(1);
            oscard = argFoo;
            entity[0] = oscard;
            verify = entity;
            golfie = report;
            tangon = arraySpread(verify, option, golfie);
            verify = michal;
            option = entity;
            golfie = zuuluu;
            entity = apply(verify, option, golfie);
            return entity;
        };
        golfie['invoke'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: send
            report = 1;
            verify = report;
            option = copyRestArgs(verify);
            entity = _closure1_slot6;
            zuuluu = entity.ipc;
            michal = zuuluu.send;
            entity = new Array(1);
            oscard = argFoo;
            entity[0] = oscard;
            verify = entity;
            golfie = report;
            tangon = arraySpread(verify, option, golfie);
            verify = michal;
            option = entity;
            golfie = zuuluu;
            entity = apply(verify, option, golfie);
            entity = undefined;
            return entity;
        };
        golfie['send'] = yankee;
        yankee = function(argFoo) { // Original name: flashFrame
            entity = _closure1_slot6;
            zuuluu = entity.window;
            michal = zuuluu.flashFrame;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        golfie['flashFrame'] = yankee;
        yankee = function(argFoo) { // Original name: webAuthnRegister
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = _closure1_slot6;
            tangon = michal.nativeModules;
            zuuluu = tangon.ensureModule;
            michal = 'discord_webauthn';
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.then;
            entity = function() {
                entity = _closure1_slot6;
                zuuluu = entity.webAuthn;
                michal = zuuluu.webAuthnRegister;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        golfie['webAuthnRegister'] = yankee;
        yankee = function(argFoo) { // Original name: webAuthnAuthenticate
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = _closure1_slot6;
            tangon = michal.nativeModules;
            zuuluu = tangon.ensureModule;
            michal = 'discord_webauthn';
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.then;
            entity = function() {
                entity = _closure1_slot6;
                zuuluu = entity.webAuthn;
                michal = zuuluu.webAuthnAuthenticate;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        golfie['webAuthnAuthenticate'] = yankee;
        yankee = function(argFoo) { // Original name: minimize
            entity = _closure1_slot6;
            zuuluu = entity.window;
            michal = zuuluu.minimize;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        golfie['minimize'] = yankee;
        yankee = function(argFoo) { // Original name: restore
            entity = _closure1_slot6;
            zuuluu = entity.window;
            michal = zuuluu.restore;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        golfie['restore'] = yankee;
        yankee = function(argFoo) { // Original name: maximize
            entity = _closure1_slot6;
            zuuluu = entity.window;
            michal = zuuluu.maximize;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        golfie['maximize'] = yankee;
        yankee = function(argFoo) { // Original name: focus
            _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
                report = arguments[1];
                tangon = this;
                entity = undefined;
                if(!(report === entity)) { _fun00076_ip = 14; continue _fun00075 }
 12:
                report = false;
 14:
                michal = report;
                if(!michal) { _fun00076_ip = 53; continue _fun00075 }
 20:
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                zuuluu = 5;
                zuuluu = golfie[zuuluu];
                oscard = oscard.bind(entity)(zuuluu);
                zuuluu = oscard.isWindows;
                michal = zuuluu.bind(oscard)();
 53:
                if(!michal) { _fun00076_ip = 69; continue _fun00075 }
 56:
                zuuluu = tangon.minimize;
                michal = null;
                michal = zuuluu.bind(tangon)(michal);
 69:
                michal = _closure1_slot6;
                tangon = michal.window;
                zuuluu = tangon.focus;
                michal = argFoo;
                michal = zuuluu.bind(tangon)(report, michal);
                return entity;
            }
        };
        golfie['focus'] = yankee;
        yankee = function() { // Original name: blur
            _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = zuuluu.isPlatformEmbedded;
                if(!zuuluu) { _fun00078_ip = 55; continue _fun00077 }
 34:
                zuuluu = _closure1_slot6;
                zuuluu = zuuluu.window;
                tangon = zuuluu.blur;
                zuuluu = null;
                if(!(zuuluu == tangon)) { _fun00078_ip = 75; continue _fun00077 }
 55:
                zuuluu = global;
                tangon = zuuluu.window;
                zuuluu = tangon.blur;
                zuuluu = zuuluu.bind(tangon)();
                _fun00078_ip = 94; continue _fun00077;
 75:
                michal = _closure1_slot6;
                zuuluu = michal.window;
                michal = zuuluu.blur;
                michal = michal.bind(zuuluu)();
 94:
                return entity;
            }
        };
        golfie['blur'] = yankee;
        yankee = function(argFoo) { // Original name: fullscreen
            entity = _closure1_slot6;
            zuuluu = entity.window;
            michal = zuuluu.fullscreen;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        golfie['fullscreen'] = yankee;
        yankee = function(argFoo) { // Original name: close
            entity = _closure1_slot6;
            zuuluu = entity.window;
            michal = zuuluu.close;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        golfie['close'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: setAlwaysOnTop
            _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
                michal = _closure1_slot6;
                michal = michal.window;
                michal = michal.setAlwaysOnTop;
                zuuluu = 'function';
                michal = typeof michal;
                if(!(zuuluu === michal)) { _fun00080_ip = 56; continue _fun00079 }
 29:
                entity = _closure1_slot6;
                tangon = entity.window;
                zuuluu = tangon.setAlwaysOnTop;
                michal = argFoo;
                entity = argBar;
                entity = zuuluu.bind(tangon)(michal, entity);
 56:
                entity = undefined;
                return entity;
            }
        };
        golfie['setAlwaysOnTop'] = yankee;
        yankee = function(argFoo) { // Original name: isAlwaysOnTop
            michal = argFoo;
            var _closure2_slot0 = michal;
            zuuluu = _closure1_slot4;
            michal = undefined;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00081: for(var _fun00082_ip = 0; ; ) switch(_fun00082_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00082_ip = 84; continue _fun00081 }
 7:
                        zuuluu = _closure1_slot6;
                        zuuluu = zuuluu.window;
                        tangon = zuuluu.isAlwaysOnTop;
                        report = 'function';
                        tangon = typeof tangon;
                        zuuluu = false;
                        if(!(report === tangon)) { _fun00082_ip = 78; continue _fun00081 }
 38:
                        michal = _closure1_slot6;
                        report = michal.window;
                        tangon = report.isAlwaysOnTop;
                        michal = _closure2_slot0;
                        michal = tangon.bind(report)(michal);
                        SaveGenerator(address=69);
 67:
                        return michal;
 69:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        zuuluu = michal;
                        if(tangon) { _fun00082_ip = 81; continue _fun00081 }
 78:
                        return zuuluu;
 81:
                        return michal;
 84:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        };
        golfie['isAlwaysOnTop'] = yankee;
        yankee = function(argFoo) { // Original name: showInactive
            _fun00083: for(var _fun00084_ip = 0; ; ) switch(_fun00084_ip) {
 0:
                michal = _closure1_slot6;
                michal = michal.window;
                michal = michal.showInactive;
                zuuluu = 'function';
                michal = typeof michal;
                if(!(zuuluu === michal)) { _fun00084_ip = 52; continue _fun00083 }
 29:
                entity = _closure1_slot6;
                zuuluu = entity.window;
                michal = zuuluu.showInactive;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
 52:
                entity = undefined;
                return entity;
            }
        };
        golfie['showInactive'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: setMinimumSize
            _fun00085: for(var _fun00086_ip = 0; ; ) switch(_fun00086_ip) {
 0:
                entity = _closure1_slot6;
                tangon = null;
                michal = tangon == entity;
                entity = undefined;
                report = undefined;
                if(michal) { _fun00086_ip = 36; continue _fun00085 }
 20:
                zuuluu = _closure1_slot6;
                zuuluu = zuuluu.window;
                michal = tangon == zuuluu;
                report = zuuluu;
 36:
                if(michal) { _fun00086_ip = 49; continue _fun00085 }
 39:
                zuuluu = report.setMinimumSize;
                michal = tangon == zuuluu;
 49:
                if(michal) { _fun00086_ip = 70; continue _fun00085 }
 52:
                tangon = report.setMinimumSize;
                zuuluu = argFoo;
                michal = argBar;
                michal = tangon.bind(report)(zuuluu, michal);
 70:
                return entity;
            }
        };
        golfie['setMinimumSize'] = yankee;
        yankee = function() { // Original name: purgeMemory
            _fun00087: for(var _fun00088_ip = 0; ; ) switch(_fun00088_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = zuuluu.isPlatformEmbedded;
                if(!zuuluu) { _fun00088_ip = 54; continue _fun00087 }
 34:
                michal = _closure1_slot6;
                zuuluu = michal.processUtils;
                michal = zuuluu.purgeMemory;
                michal = michal.bind(zuuluu)();
 54:
                return entity;
            }
        };
        golfie['purgeMemory'] = yankee;
        yankee = function(argFoo) { // Original name: updateCrashReporter
            entity = _closure1_slot6;
            zuuluu = entity.crashReporter;
            michal = zuuluu.updateCrashReporter;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        golfie['updateCrashReporter'] = yankee;
        yankee = function(argFoo) { // Original name: triggerJSException
            entity = _closure1_slot6;
            zuuluu = entity.crashReporter;
            michal = zuuluu.triggerJSException;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        golfie['triggerJSException'] = yankee;
        yankee = function() { // Original name: flushDNSCache
            _fun00089: for(var _fun00090_ip = 0; ; ) switch(_fun00090_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = zuuluu.isPlatformEmbedded;
                if(!zuuluu) { _fun00090_ip = 54; continue _fun00089 }
 34:
                michal = _closure1_slot6;
                zuuluu = michal.processUtils;
                michal = zuuluu.flushDNSCache;
                michal = michal.bind(zuuluu)();
 54:
                return entity;
            }
        };
        golfie['flushDNSCache'] = yankee;
        yankee = function(argFoo) { // Original name: supportsFeature
            entity = _closure1_slot6;
            zuuluu = entity.features;
            michal = zuuluu.supports;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        golfie['supportsFeature'] = yankee;
        yankee = function() { // Original name: getEnableHardwareAcceleration
            _fun00091: for(var _fun00092_ip = 0; ; ) switch(_fun00092_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                entity = entity.isPlatformEmbedded;
                entity = !entity;
                if(entity) { _fun00092_ip = 57; continue _fun00091 }
 37:
                michal = _closure1_slot6;
                zuuluu = michal.gpuSettings;
                michal = zuuluu.getEnableHardwareAcceleration;
                entity = michal.bind(zuuluu)();
 57:
                return entity;
            }
        };
        golfie['getEnableHardwareAcceleration'] = yankee;
        yankee = function(argFoo) { // Original name: setEnableHardwareAcceleration
            entity = _closure1_slot6;
            zuuluu = entity.gpuSettings;
            michal = zuuluu.setEnableHardwareAcceleration;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        golfie['setEnableHardwareAcceleration'] = yankee;
        yankee = function(argFoo) { // Original name: setChromiumSwitches
            entity = _closure1_slot6;
            zuuluu = entity.gpuSettings;
            michal = zuuluu.setChromiumSwitches;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        golfie['setChromiumSwitches'] = yankee;
        yankee = function() { // Original name: getGPUDriverVersions
            _fun00093: for(var _fun00094_ip = 0; ; ) switch(_fun00094_ip) {
 0:
                zuuluu = this;
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                michal = tangon.bind(entity)(michal);
                entity = michal.isWindows;
                entity = entity.bind(michal)();
                if(!entity) { _fun00094_ip = 63; continue _fun00093 }
 41:
                entity = zuuluu.getDiscordUtils;
                entity = entity.bind(zuuluu)();
                michal = entity.getGPUDriverVersions;
                entity = null;
                if(!(entity == michal)) { _fun00094_ip = 103; continue _fun00093 }
 63:
                entity = global;
                tangon = entity.Promise;
                michal = tangon.resolve;
                oscard = entity.Object;
                report = oscard.freeze;
                entity = {};
                entity = report.bind(oscard)(entity);
                entity = michal.bind(tangon)(entity);
                _fun00094_ip = 123; continue _fun00093;
 103:
                michal = zuuluu.getDiscordUtils;
                zuuluu = michal.bind(zuuluu)();
                michal = zuuluu.getGPUDriverVersions;
                entity = michal.bind(zuuluu)();
 123:
                return entity;
            }
        };
        golfie['getGPUDriverVersions'] = yankee;
        yankee = function(argFoo) { // Original name: setZoomFactor
            _fun00095: for(var _fun00096_ip = 0; ; ) switch(_fun00096_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                entity = entity.isPlatformEmbedded;
                zuuluu = !entity;
                entity = !zuuluu;
                if(zuuluu) { _fun00096_ip = 65; continue _fun00095 }
 40:
                michal = _closure1_slot6;
                tangon = michal.window;
                zuuluu = tangon.setZoomFactor;
                michal = argFoo;
                michal = zuuluu.bind(tangon)(michal);
                entity = true;
 65:
                return entity;
            }
        };
        golfie['setZoomFactor'] = yankee;
        yankee = function(argFoo) { // Original name: setBackgroundThrottling
            _fun00097: for(var _fun00098_ip = 0; ; ) switch(_fun00098_ip) {
 0:
                zuuluu = argFoo;
                michal = _closure1_slot6;
                michal = michal.window;
                tangon = michal.setBackgroundThrottling;
                michal = null;
                if(!(michal == tangon)) { _fun00098_ip = 57; continue _fun00097 }
 27:
                michal = _closure1_slot6;
                michal = michal.window;
                tangon = michal.webContents;
                michal = tangon.setBackgroundThrottling;
                michal = michal.bind(tangon)(zuuluu);
                _fun00098_ip = 77; continue _fun00097;
 57:
                entity = _closure1_slot6;
                michal = entity.window;
                entity = michal.setBackgroundThrottling;
                entity = entity.bind(michal)(zuuluu);
 77:
                entity = undefined;
                return entity;
            }
        };
        golfie['setBackgroundThrottling'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: setFocusable
            _fun00099: for(var _fun00100_ip = 0; ; ) switch(_fun00100_ip) {
 0:
                michal = _closure1_slot6;
                michal = michal.window;
                michal = michal.setFocusable;
                zuuluu = 'function';
                michal = typeof michal;
                if(!(zuuluu === michal)) { _fun00100_ip = 56; continue _fun00099 }
 29:
                entity = _closure1_slot6;
                tangon = entity.window;
                zuuluu = tangon.setFocusable;
                michal = argFoo;
                entity = argBar;
                entity = zuuluu.bind(tangon)(michal, entity);
 56:
                entity = undefined;
                return entity;
            }
        };
        golfie['setFocusable'] = yankee;
        yankee = function() { // Original name: pauseFrameEvictor
            _fun00101: for(var _fun00102_ip = 0; ; ) switch(_fun00102_ip) {
 0:
                michal = _closure1_slot6;
                michal = michal.app;
                zuuluu = michal.pauseFrameEvictor;
                michal = null;
                if(!(michal != zuuluu)) { _fun00102_ip = 45; continue _fun00101 }
 25:
                entity = _closure1_slot6;
                michal = entity.app;
                entity = michal.pauseFrameEvictor;
                entity = entity.bind(michal)();
 45:
                entity = undefined;
                return entity;
            }
        };
        golfie['pauseFrameEvictor'] = yankee;
        yankee = function() { // Original name: unpauseFrameEvictor
            _fun00103: for(var _fun00104_ip = 0; ; ) switch(_fun00104_ip) {
 0:
                michal = _closure1_slot6;
                michal = michal.app;
                zuuluu = michal.pauseFrameEvictor;
                michal = null;
                if(!(michal != zuuluu)) { _fun00104_ip = 45; continue _fun00103 }
 25:
                entity = _closure1_slot6;
                michal = entity.app;
                entity = michal.pauseFrameEvictor;
                entity = entity.bind(michal)();
 45:
                entity = undefined;
                return entity;
            }
        };
        golfie['unpauseFrameEvictor'] = yankee;
        yankee = function(argFoo) { // Original name: getPidFromDesktopSource
            _fun00105: for(var _fun00106_ip = 0; ; ) switch(_fun00106_ip) {
 0:
                golfie = argFoo;
                michal = this;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.isDesktop;
                zuuluu = zuuluu.bind(tangon)();
                if(!zuuluu) { _fun00106_ip = 226; continue _fun00105 }
 47:
                zuuluu = michal.getDiscordUtils;
                zuuluu = zuuluu.bind(michal)();
                zuuluu = zuuluu.getPidFromWindowHandle;
                tangon = null;
                if(!(tangon != zuuluu)) { _fun00106_ip = 226; continue _fun00105 }
 72:
                zuuluu = tangon == golfie;
                report = undefined;
                if(zuuluu) { _fun00106_ip = 95; continue _fun00105 }
 81:
                oscard = golfie.split;
                zuuluu = ':';
                report = oscard.bind(golfie)(zuuluu);
 95:
                zuuluu = tangon == report;
                golfie = undefined;
                if(zuuluu) { _fun00106_ip = 110; continue _fun00105 }
 104:
                zuuluu = 0;
                golfie = report[zuuluu];
 110:
                zuuluu = 'window';
                if(!(zuuluu !== golfie)) { _fun00106_ip = 153; continue _fun00105 }
 118:
                oscard = golfie.startsWith;
                zuuluu = 'screen';
                zuuluu = oscard.bind(golfie)(zuuluu);
                if(zuuluu) { _fun00106_ip = 148; continue _fun00105 }
 136:
                oscard = 'prepicked';
                zuuluu = null;
                if(!(oscard === golfie)) { _fun00106_ip = 151; continue _fun00105 }
 148:
                zuuluu = 1;
 151:
                return zuuluu;
 153:
                zuuluu = tangon == report;
                entity = undefined;
                if(zuuluu) { _fun00106_ip = 169; continue _fun00105 }
 162:
                zuuluu = 1;
                entity = report[zuuluu];
 169:
                report = tangon != entity;
                zuuluu = '';
                if(!report) { _fun00106_ip = 183; continue _fun00105 }
 180:
                zuuluu = entity;
 183:
                entity = michal.getDiscordUtils;
                michal = entity.bind(michal)();
                entity = michal.getPidFromWindowHandle;
                michal = entity.bind(michal)(zuuluu);
                zuuluu = tangon == michal;
                entity = null;
                if(zuuluu) { _fun00106_ip = 224; continue _fun00105 }
 213:
                zuuluu = 0;
                entity = null;
                if(!(zuuluu !== michal)) { _fun00106_ip = 224; continue _fun00105 }
 221:
                entity = michal;
 224:
                return entity;
 226:
                entity = null;
                return entity;
            }
        };
        golfie['getPidFromDesktopSource'] = yankee;
        yankee = function(argFoo) { // Original name: getDesktopSourceFromPid
            _fun00107: for(var _fun00108_ip = 0; ; ) switch(_fun00108_ip) {
 0:
                zuuluu = argFoo;
                michal = this;
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 5;
                tangon = tangon[entity];
                entity = undefined;
                tangon = report.bind(entity)(tangon);
                entity = tangon.isWindows;
                entity = entity.bind(tangon)();
                if(!entity) { _fun00108_ip = 153; continue _fun00107 }
 44:
                entity = michal.getDiscordUtils;
                entity = entity.bind(michal)();
                entity = entity.getWindowHandleFromPid;
                report = null;
                if(!(report != entity)) { _fun00108_ip = 153; continue _fun00107 }
 66:
                if(!(report != zuuluu)) { _fun00108_ip = 153; continue _fun00107 }
 70:
                entity = michal.getDiscordUtils;
                michal = entity.bind(michal)();
                entity = michal.getWindowHandleFromPid;
                michal = entity.bind(michal)(zuuluu);
                zuuluu = report == michal;
                entity = null;
                if(zuuluu) { _fun00108_ip = 151; continue _fun00107 }
 100:
                tangon = michal.length;
                zuuluu = 0;
                entity = null;
                if(!(zuuluu !== tangon)) { _fun00108_ip = 151; continue _fun00107 }
 113:
                tangon = ['window'];
                tangon[1] = michal;
                michal = '0';
                tangon[2] = michal;
                zuuluu = tangon.join;
                michal = ':';
                entity = zuuluu.bind(tangon)(michal);
 151:
                return entity;
 153:
                entity = null;
                return entity;
            }
        };
        golfie['getDesktopSourceFromPid'] = yankee;
        yankee = function(argFoo) { // Original name: generateSessionFromPid
            michal = this;
            entity = michal.getDiscordUtils;
            zuuluu = entity.bind(michal)();
            michal = zuuluu.generateSessionFromPid;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        golfie['generateSessionFromPid'] = yankee;
        yankee = function(argFoo) { // Original name: getAudioPid
            _fun00109: for(var _fun00110_ip = 0; ; ) switch(_fun00110_ip) {
 0:
                tangon = argFoo;
                zuuluu = this;
                entity = zuuluu.getDiscordUtils;
                entity = entity.bind(zuuluu)();
                report = entity.getAudioPid;
                michal = null;
                entity = tangon;
                if(!(michal != report)) { _fun00110_ip = 59; continue _fun00109 }
 31:
                entity = tangon;
                if(!(michal != entity)) { _fun00110_ip = 59; continue _fun00109 }
 38:
                michal = zuuluu.getDiscordUtils;
                zuuluu = michal.bind(zuuluu)();
                michal = zuuluu.getAudioPid;
                entity = michal.bind(zuuluu)(tangon);
 59:
                return entity;
            }
        };
        golfie['getAudioPid'] = yankee;
        yankee = function(argFoo) { // Original name: setForegroundProcess
            _fun00111: for(var _fun00112_ip = 0; ; ) switch(_fun00112_ip) {
 0:
                michal = this;
                entity = michal.getDiscordUtils;
                entity = entity.bind(michal)();
                tangon = entity.setForegroundProcess;
                entity = null;
                entity = entity != tangon;
                if(!entity) { _fun00112_ip = 38; continue _fun00111 }
 28:
                zuuluu = undefined;
                michal = argFoo;
                entity = tangon.bind(zuuluu)(michal);
 38:
                return entity;
            }
        };
        golfie['setForegroundProcess'] = yankee;
        yankee = function() { // Original name: getDiscordMemoryUsage
            _fun00113: for(var _fun00114_ip = 0; ; ) switch(_fun00114_ip) {
 0:
                michal = this;
                entity = michal.getDiscordUtils;
                entity = entity.bind(michal)();
                zuuluu = entity.getDiscordMemoryUsage;
                entity = null;
                michal = entity != zuuluu;
                if(!michal) { _fun00114_ip = 34; continue _fun00113 }
 28:
                michal = undefined;
                entity = zuuluu.bind(michal)();
 34:
                return entity;
            }
        };
        golfie['getDiscordMemoryUsage'] = yankee;
        yankee = function() { // Original name: getDiscordMemoryUsageElectronRenderer
            _fun00115: for(var _fun00116_ip = 0; ; ) switch(_fun00116_ip) {
 0:
                michal = this;
                entity = michal.getDiscordUtils;
                entity = entity.bind(michal)();
                zuuluu = entity.getDiscordMemoryUsageElectronRenderer;
                entity = null;
                tangon = entity == zuuluu;
                michal = undefined;
                entity = undefined;
                if(tangon) { _fun00116_ip = 36; continue _fun00115 }
 32:
                entity = zuuluu.bind(michal)();
 36:
                return entity;
            }
        };
        golfie['getDiscordMemoryUsageElectronRenderer'] = yankee;
        yankee = function() { // Original name: getDiscordMemoryUsageElectronProcessTypeDetails
            _fun00117: for(var _fun00118_ip = 0; ; ) switch(_fun00118_ip) {
 0:
                michal = this;
                entity = michal.getDiscordUtils;
                entity = entity.bind(michal)();
                zuuluu = entity.getDiscordMemoryUsageElectronProcessTypeDetails;
                entity = null;
                tangon = entity == zuuluu;
                michal = undefined;
                entity = undefined;
                if(tangon) { _fun00118_ip = 36; continue _fun00117 }
 32:
                entity = zuuluu.bind(michal)();
 36:
                return entity;
            }
        };
        golfie['getDiscordMemoryUsageElectronProcessTypeDetails'] = yankee;
        yankee = function(argFoo) { // Original name: showOpenDialog
            entity = _closure1_slot6;
            zuuluu = entity.fileManager;
            michal = zuuluu.showOpenDialog;
            entity = {};
            tangon = argFoo;
            entity['properties'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        golfie['showOpenDialog'] = yankee;
        yankee = function() { // Original name: flushStorageData
            _fun00119: for(var _fun00120_ip = 0; ; ) switch(_fun00120_ip) {
 0:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                entity = entity.isPlatformEmbedded;
                michal = global;
                tangon = michal.Promise;
                if(entity) { _fun00120_ip = 54; continue _fun00119 }
 42:
                entity = tangon.resolve;
                entity = entity.bind(tangon)();
                _fun00120_ip = 81; continue _fun00119;
 54:
                michal = tangon.prototype;
                zuuluu = Object.create(michal, {constructor: {value: tangon}});
                report = function(argFoo, argBar) {
                    _fun00121: for(var _fun00122_ip = 0; ; ) switch(_fun00122_ip) {
 0:
                        tangon = argFoo;
                        var _closure3_slot0 = tangon;
                        michal = argBar;
                        var _closure3_slot1 = michal;
                        zuuluu = _closure1_slot6;
                        zuuluu = zuuluu.processUtils;
                        report = zuuluu.flushStorageData;
                        zuuluu = null;
                        if(!(zuuluu == report)) { _fun00122_ip = 49; continue _fun00121 }
 41:
                        zuuluu = undefined;
                        zuuluu = tangon.bind(zuuluu)();
                        _fun00122_ip = 75; continue _fun00121;
 49:
                        michal = _closure1_slot6;
                        zuuluu = michal.processUtils;
                        michal = zuuluu.flushStorageData;
                        entity = function(argFoo) {
                            _fun00123: for(var _fun00124_ip = 0; ; ) switch(_fun00124_ip) {
 0:
                                report = argFoo;
                                entity = null;
                                if(!(entity == report)) { _fun00124_ip = 24; continue _fun00123 }
 9:
                                michal = _closure3_slot0;
                                entity = undefined;
                                entity = michal.bind(entity)();
                                _fun00124_ip = 69; continue _fun00123;
 24:
                                tangon = _closure3_slot1;
                                michal = global;
                                michal = michal.Error;
                                zuuluu = michal.prototype;
                                zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                                golfie = zuuluu;
                                oscard = report;
                                michal = new golfie[michal](oscard, report);
                                zuuluu = michal instanceof Object ? michal : zuuluu;
                                michal = undefined;
                                entity = tangon.bind(michal)(zuuluu);
 69:
                                return entity;
                            }
                        };
                        entity = michal.bind(zuuluu)(entity);
 75:
                        entity = undefined;
                        return entity;
                    }
                };
                oscard = zuuluu;
                michal = new oscard[tangon](report, tangon);
                entity = michal instanceof Object ? michal : zuuluu;
 81:
                return entity;
            }
        };
        golfie['flushStorageData'] = yankee;
        yankee = function() { // Original name: flushCookies
            _fun00125: for(var _fun00126_ip = 0; ; ) switch(_fun00126_ip) {
 0:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                entity = entity.isPlatformEmbedded;
                michal = global;
                tangon = michal.Promise;
                if(entity) { _fun00126_ip = 54; continue _fun00125 }
 42:
                entity = tangon.resolve;
                entity = entity.bind(tangon)();
                _fun00126_ip = 81; continue _fun00125;
 54:
                michal = tangon.prototype;
                zuuluu = Object.create(michal, {constructor: {value: tangon}});
                report = function(argFoo, argBar) {
                    _fun00127: for(var _fun00128_ip = 0; ; ) switch(_fun00128_ip) {
 0:
                        tangon = argFoo;
                        var _closure3_slot0 = tangon;
                        michal = argBar;
                        var _closure3_slot1 = michal;
                        zuuluu = _closure1_slot6;
                        zuuluu = zuuluu.processUtils;
                        report = zuuluu.flushCookies;
                        zuuluu = null;
                        if(!(zuuluu == report)) { _fun00128_ip = 49; continue _fun00127 }
 41:
                        zuuluu = undefined;
                        zuuluu = tangon.bind(zuuluu)();
                        _fun00128_ip = 75; continue _fun00127;
 49:
                        michal = _closure1_slot6;
                        zuuluu = michal.processUtils;
                        michal = zuuluu.flushCookies;
                        entity = function(argFoo) {
                            _fun00129: for(var _fun00130_ip = 0; ; ) switch(_fun00130_ip) {
 0:
                                report = argFoo;
                                entity = null;
                                if(!(entity == report)) { _fun00130_ip = 24; continue _fun00129 }
 9:
                                michal = _closure3_slot0;
                                entity = undefined;
                                entity = michal.bind(entity)();
                                _fun00130_ip = 69; continue _fun00129;
 24:
                                tangon = _closure3_slot1;
                                michal = global;
                                michal = michal.Error;
                                zuuluu = michal.prototype;
                                zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                                golfie = zuuluu;
                                oscard = report;
                                michal = new golfie[michal](oscard, report);
                                zuuluu = michal instanceof Object ? michal : zuuluu;
                                michal = undefined;
                                entity = tangon.bind(michal)(zuuluu);
 69:
                                return entity;
                            }
                        };
                        entity = michal.bind(zuuluu)(entity);
 75:
                        entity = undefined;
                        return entity;
                    }
                };
                oscard = zuuluu;
                michal = new oscard[tangon](report, tangon);
                entity = michal instanceof Object ? michal : zuuluu;
 81:
                return entity;
            }
        };
        golfie['flushCookies'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: setCrashInformation
            _fun00131: for(var _fun00132_ip = 0; ; ) switch(_fun00132_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = zuuluu.isPlatformEmbedded;
                if(!zuuluu) { _fun00132_ip = 78; continue _fun00131 }
 34:
                tangon = _closure1_slot6;
                report = null;
                oscard = report == tangon;
                tangon = undefined;
                if(oscard) { _fun00132_ip = 74; continue _fun00131 }
 49:
                oscard = _closure1_slot6;
                oscard = oscard.processUtils;
                golfie = report == oscard;
                tangon = undefined;
                if(golfie) { _fun00132_ip = 74; continue _fun00131 }
 68:
                tangon = oscard.setCrashInformation;
 74:
                zuuluu = report != tangon;
 78:
                if(!zuuluu) { _fun00132_ip = 109; continue _fun00131 }
 81:
                michal = _closure1_slot6;
                report = michal.processUtils;
                tangon = report.setCrashInformation;
                zuuluu = argFoo;
                michal = argBar;
                michal = tangon.bind(report)(zuuluu, michal);
 109:
                return entity;
            }
        };
        golfie['setCrashInformation'] = yankee;
        yankee = function() { // Original name: blockDisplaySleep
            _fun00133: for(var _fun00134_ip = 0; ; ) switch(_fun00134_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                zuuluu = entity.isPlatformEmbedded;
                tangon = null;
                entity = null;
                if(!zuuluu) { _fun00134_ip = 77; continue _fun00133 }
 38:
                zuuluu = _closure1_slot6;
                zuuluu = zuuluu.powerSaveBlocker;
                zuuluu = tangon != zuuluu;
                entity = null;
                if(!zuuluu) { _fun00134_ip = 77; continue _fun00133 }
 57:
                michal = _closure1_slot6;
                zuuluu = michal.powerSaveBlocker;
                michal = zuuluu.blockDisplaySleep;
                entity = michal.bind(zuuluu)();
 77:
                return entity;
            }
        };
        golfie['blockDisplaySleep'] = yankee;
        yankee = function(argFoo) { // Original name: unblockDisplaySleep
            _fun00135: for(var _fun00136_ip = 0; ; ) switch(_fun00136_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = zuuluu.isPlatformEmbedded;
                if(!zuuluu) { _fun00136_ip = 50; continue _fun00135 }
 34:
                tangon = _closure1_slot6;
                report = tangon.powerSaveBlocker;
                tangon = null;
                zuuluu = tangon != report;
 50:
                if(!zuuluu) { _fun00136_ip = 77; continue _fun00135 }
 53:
                michal = _closure1_slot6;
                tangon = michal.powerSaveBlocker;
                zuuluu = tangon.unblockDisplaySleep;
                michal = argFoo;
                michal = zuuluu.bind(tangon)(michal);
 77:
                return entity;
            }
        };
        golfie['unblockDisplaySleep'] = yankee;
        yankee = function() { // Original name: cleanupDisplaySleep
            _fun00137: for(var _fun00138_ip = 0; ; ) switch(_fun00138_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = zuuluu.isPlatformEmbedded;
                if(!zuuluu) { _fun00138_ip = 50; continue _fun00137 }
 34:
                tangon = _closure1_slot6;
                report = tangon.powerSaveBlocker;
                tangon = null;
                zuuluu = tangon != report;
 50:
                if(!zuuluu) { _fun00138_ip = 73; continue _fun00137 }
 53:
                michal = _closure1_slot6;
                zuuluu = michal.powerSaveBlocker;
                michal = zuuluu.cleanupDisplaySleep;
                michal = michal.bind(zuuluu)();
 73:
                return entity;
            }
        };
        golfie['cleanupDisplaySleep'] = yankee;
        yankee = function() { // Original name: relaunch
            _fun00139: for(var _fun00140_ip = 0; ; ) switch(_fun00140_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = zuuluu.isPlatformEmbedded;
                if(!zuuluu) { _fun00140_ip = 56; continue _fun00139 }
 34:
                tangon = _closure1_slot6;
                tangon = tangon.remoteApp;
                report = tangon.relaunch;
                tangon = null;
                zuuluu = tangon != report;
 56:
                if(!zuuluu) { _fun00140_ip = 79; continue _fun00139 }
 59:
                michal = _closure1_slot6;
                zuuluu = michal.remoteApp;
                michal = zuuluu.relaunch;
                michal = michal.bind(zuuluu)();
 79:
                return entity;
            }
        };
        golfie['relaunch'] = yankee;
        yankee = function(argFoo, argBar, argBaz) { // Original name: makeChunkedRequest
            _fun00141: for(var _fun00142_ip = 0; ; ) switch(_fun00142_ip) {
 0:
                option = argBar;
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                entity = 11;
                entity = golfie[entity];
                report = undefined;
                tangon = oscard.bind(report)(entity);
                entity = tangon.getAPIBaseURL;
                yankee = entity.bind(tangon)();
                entity = global;
                tangon = entity.HermesInternal;
                offset = tangon.concat;
                verify = '';
                tangon = argFoo;
                tangon = offset.bind(verify)(yankee, tangon);
                var _closure2_slot0 = tangon;
                tangon = 5;
                tangon = golfie[tangon];
                tangon = oscard.bind(report)(tangon);
                tangon = tangon.isPlatformEmbedded;
                if(tangon) { _fun00142_ip = 142; continue _fun00141 }
 91:
                oscard = entity.Promise;
                report = oscard.reject;
                verify = entity.Error;
                tangon = verify.prototype;
                golfie = Object.create(tangon, {constructor: {value: verify}});
                foxtra = 'Not embedded!';
                backup = golfie;
                tangon = new backup[verify](foxtra, romeon);
                tangon = tangon instanceof Object ? tangon : golfie;
                tangon = report.bind(oscard)(tangon);
                return tangon;
 142:
                zuuluu = _closure1_slot6;
                tangon = zuuluu.http;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00142_ip = 405; continue _fun00141 }
 161:
                zuuluu = {'maxBps': 8000, 'chunkInterval': 50, 'contentType': 'application/json'};
                oscard = 'application/json';
                romeon = argBaz;
                foxtra = zuuluu;
                tangon = copyDataProperties(foxtra, romeon);
                tangon = zuuluu.method;
                var _closure2_slot1 = tangon;
                tangon = zuuluu.maxBps;
                report = zuuluu.token;
                var _closure2_slot2 = report;
                report = zuuluu.chunkInterval;
                var _closure2_slot3 = report;
                zuuluu = zuuluu.contentType;
                var _closure2_slot4 = zuuluu;
                golfie = option;
                if(!(oscard === zuuluu)) { _fun00142_ip = 259; continue _fun00141 }
 242:
                oscard = entity.JSON;
                zuuluu = oscard.stringify;
                golfie = zuuluu.bind(oscard)(option);
 259:
                zuuluu = 1000;
                zuuluu = report / zuuluu;
                oscard = tangon * zuuluu;
                report = entity.Math;
                tangon = report.ceil;
                zuuluu = golfie.length;
                zuuluu = zuuluu / oscard;
                report = tangon.bind(report)(zuuluu);
                zuuluu = entity.Array;
                tangon = zuuluu.prototype;
                tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                backup = tangon;
                foxtra = report;
                zuuluu = new backup[zuuluu](foxtra, romeon);
                tangon = zuuluu instanceof Object ? zuuluu : tangon;
                var _closure2_slot5 = tangon;
                zuuluu = 0;
                option = zuuluu < report;
                if(!option) { _fun00142_ip = 372; continue _fun00141 }
 341:
                offset = zuuluu * oscard;
                verify = golfie.substring;
                option = offset + oscard;
                option = verify.bind(golfie)(offset, option);
                tangon[zuuluu] = option;
                zuuluu = zuuluu + 1;
                if(zuuluu < report) { _fun00142_ip = 341; continue _fun00141 }
 372:
                tangon = entity.Promise;
                zuuluu = tangon.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                foxtra = function(argFoo, argBar) {
                    _fun00143: for(var _fun00144_ip = 0; ; ) switch(_fun00144_ip) {
 0:
                        michal = argFoo;
                        var _closure3_slot0 = michal;
                        michal = argBar;
                        var _closure3_slot1 = michal;
                        zuuluu = _closure1_slot6;
                        tangon = zuuluu.http;
                        zuuluu = null;
                        if(!(zuuluu != tangon)) { _fun00144_ip = 115; continue _fun00143 }
 35:
                        michal = _closure1_slot6;
                        oscard = michal.http;
                        report = oscard.makeChunkedRequest;
                        romeon = _closure2_slot0;
                        yankee = _closure2_slot5;
                        michal = {};
                        option = _closure2_slot1;
                        michal['method'] = option;
                        option = _closure2_slot3;
                        michal['chunkInterval'] = option;
                        option = _closure2_slot4;
                        michal['contentType'] = option;
                        golfie = _closure2_slot2;
                        michal['token'] = golfie;
                        verify = function(argFoo, argBar) {
                            _fun00145: for(var _fun00146_ip = 0; ; ) switch(_fun00146_ip) {
 0:
                                tangon = argFoo;
                                michal = argBar;
                                entity = null;
                                if(!(entity == tangon)) { _fun00146_ip = 94; continue _fun00145 }
 12:
                                zuuluu = michal.status;
                                entity = 400;
                                if(!(!(zuuluu >= entity))) { _fun00146_ip = 45; continue _fun00145 }
 27:
                                zuuluu = _closure3_slot0;
                                entity = undefined;
                                entity = zuuluu.bind(entity)(michal);
                                entity = undefined;
                                _fun00146_ip = 92; continue _fun00145;
 45:
                                report = _closure3_slot1;
                                zuuluu = global;
                                oscard = zuuluu.Error;
                                golfie = michal.body;
                                zuuluu = oscard.prototype;
                                zuuluu = Object.create(zuuluu, {constructor: {value: oscard}});
                                option = zuuluu;
                                michal = new option[oscard](golfie, oscard);
                                zuuluu = michal instanceof Object ? michal : zuuluu;
                                michal = undefined;
                                entity = report.bind(michal)(zuuluu);
 92:
                                _fun00146_ip = 108; continue _fun00145;
 94:
                                zuuluu = _closure3_slot1;
                                michal = undefined;
                                entity = zuuluu.bind(michal)(tangon);
 108:
                                return entity;
                            }
                        };
                        foxtra = oscard;
                        offset = michal;
                        entity = foxtra[report](romeon, yankee, offset, verify, option);
 115:
                        entity = undefined;
                        return entity;
                    }
                };
                backup = zuuluu;
                michal = new backup[tangon](foxtra, romeon);
                michal = michal instanceof Object ? michal : zuuluu;
                return michal;
 405:
                zuuluu = entity.Promise;
                michal = zuuluu.reject;
                report = entity.Error;
                entity = report.prototype;
                tangon = Object.create(entity, {constructor: {value: report}});
                foxtra = 'HTTP module not available';
                backup = tangon;
                entity = new backup[report](foxtra, romeon);
                entity = entity instanceof Object ? entity : tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        golfie['makeChunkedRequest'] = yankee;
        yankee = function(argFoo) { // Original name: submitLiveCrashReport
            _fun00147: for(var _fun00148_ip = 0; ; ) switch(_fun00148_ip) {
 0:
                michal = this;
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                entity = 5;
                entity = report[entity];
                report = undefined;
                zuuluu = zuuluu.bind(report)(entity);
                entity = zuuluu.isWindows;
                entity = entity.bind(zuuluu)();
                if(!entity) { _fun00148_ip = 154; continue _fun00147 }
 41:
                entity = michal.getDiscordUtils;
                entity = entity.bind(michal)();
                entity = entity.submitLiveCrashReport;
                zuuluu = null;
                if(!(zuuluu != entity)) { _fun00148_ip = 154; continue _fun00147 }
 63:
                entity = michal.getCrashReporterMetadata;
                entity = entity.bind(michal)();
                tangon = _closure1_slot6;
                oscard = tangon.app;
                tangon = oscard.getReleaseChannel;
                tangon = tangon.bind(oscard)();
                zuuluu = zuuluu == entity;
                report = undefined;
                if(zuuluu) { _fun00148_ip = 108; continue _fun00147 }
 102:
                report = entity.sentry;
 108:
                entity = michal.getDiscordUtils;
                zuuluu = entity.bind(michal)();
                michal = zuuluu.submitLiveCrashReport;
                entity = {};
                option = entity;
                golfie = report;
                report = copyDataProperties(option, golfie);
                golfie = argFoo;
                option = entity;
                report = copyDataProperties(option, golfie);
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
 154:
                entity = global;
                michal = entity.Promise;
                entity = michal.resolve;
                entity = entity.bind(michal)();
                return entity;
            }
        };
        golfie['submitLiveCrashReport'] = yankee;
        yankee = function(argFoo) { // Original name: crash
            _fun00149: for(var _fun00150_ip = 0; ; ) switch(_fun00150_ip) {
 0:
                michal = this;
                entity = michal.getDiscordUtils;
                entity = entity.bind(michal)();
                tangon = entity.crash;
                entity = null;
                entity = entity != tangon;
                if(!entity) { _fun00150_ip = 40; continue _fun00149 }
 28:
                zuuluu = undefined;
                michal = argFoo;
                michal = tangon.bind(zuuluu)(michal);
                entity = true;
 40:
                return entity;
            }
        };
        golfie['crash'] = yankee;
        yankee = function(argFoo) { // Original name: setApplicationBackgroundColor
            entity = _closure1_slot6;
            tangon = entity.ipc;
            zuuluu = tangon.send;
            michal = 'SETTINGS_UPDATE_BACKGROUND_COLOR';
            entity = argFoo;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        golfie['setApplicationBackgroundColor'] = yankee;
        yankee = function() { // Original name: initializeExitHook
            _fun00151: for(var _fun00152_ip = 0; ; ) switch(_fun00152_ip) {
 0:
                michal = this;
                entity = michal.getDiscordUtils;
                entity = entity.bind(michal)();
                michal = entity.initializeExitHook;
                entity = null;
                if(!(entity != michal)) { _fun00152_ip = 31; continue _fun00151 }
 25:
                entity = undefined;
                entity = michal.bind(entity)();
 31:
                entity = undefined;
                return entity;
            }
        };
        golfie['initializeExitHook'] = yankee;
        yankee = function() { // Original name: initializeWERHandler
            _fun00153: for(var _fun00154_ip = 0; ; ) switch(_fun00154_ip) {
 0:
                michal = this;
                entity = michal.getDiscordUtils;
                entity = entity.bind(michal)();
                michal = entity.initializeWERHandler;
                entity = null;
                if(!(entity != michal)) { _fun00154_ip = 31; continue _fun00153 }
 25:
                entity = undefined;
                entity = michal.bind(entity)();
 31:
                entity = undefined;
                return entity;
            }
        };
        golfie['initializeWERHandler'] = yankee;
        yankee = function(argFoo) { // Original name: asyncify
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            tangon = function(argFoo) {
                zuuluu = _closure2_slot0;
                entity = undefined;
                michal = argFoo;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        golfie['asyncify'] = yankee;
        yankee = function() { // Original name: IsGameDisplayModeUpdateSupported
            michal = this;
            entity = michal.getDiscordUtils;
            entity = entity.bind(michal)();
            michal = entity.gameDisplayModeUpdate;
            entity = null;
            entity = entity != michal;
            return entity;
        };
        golfie['IsGameDisplayModeUpdateSupported'] = yankee;
        yankee = function(argFoo) { // Original name: GameDisplayModeUpdate
            _fun00155: for(var _fun00156_ip = 0; ; ) switch(_fun00156_ip) {
 0:
                tangon = argFoo;
                michal = this;
                entity = michal.getDiscordUtils;
                entity = entity.bind(michal)();
                zuuluu = entity.gameDisplayModeUpdate;
                michal = null;
                entity = michal != zuuluu;
                if(!entity) { _fun00156_ip = 35; continue _fun00155 }
 31:
                entity = michal != tangon;
 35:
                if(!entity) { _fun00156_ip = 45; continue _fun00155 }
 38:
                michal = undefined;
                entity = zuuluu.bind(michal)(tangon);
 45:
                return entity;
            }
        };
        golfie['GameDisplayModeUpdate'] = yankee;
        yankee = function(argFoo) { // Original name: GameDisplayModeIsGameSupported
            _fun00157: for(var _fun00158_ip = 0; ; ) switch(_fun00158_ip) {
 0:
                tangon = argFoo;
                michal = this;
                entity = michal.getDiscordUtils;
                entity = entity.bind(michal)();
                zuuluu = entity.gameDisplayModeIsSupported;
                michal = null;
                entity = michal != zuuluu;
                if(!entity) { _fun00158_ip = 37; continue _fun00157 }
 33:
                entity = michal != tangon;
 37:
                if(!entity) { _fun00158_ip = 47; continue _fun00157 }
 40:
                michal = undefined;
                entity = zuuluu.bind(michal)(tangon);
 47:
                return entity;
            }
        };
        golfie['GameDisplayModeIsGameSupported'] = yankee;
        yankee = function(argFoo, argBar, argBaz) { // Original name: GetWindowFullscreenTypeByPid
            _fun00159: for(var _fun00160_ip = 0; ; ) switch(_fun00160_ip) {
 0:
                golfie = argFoo;
                oscard = argBar;
                entity = argBaz;
                zuuluu = this;
                michal = zuuluu.getDiscordUtils;
                michal = michal.bind(zuuluu)();
                report = michal.getWindowFullscreenTypeByPid;
                michal = null;
                tangon = 0;
                zuuluu = null;
                if(!(tangon !== golfie)) { _fun00160_ip = 66; continue _fun00159 }
 40:
                tangon = michal != report;
                zuuluu = null;
                if(!tangon) { _fun00160_ip = 66; continue _fun00159 }
 49:
                tangon = michal != oscard;
                zuuluu = null;
                if(!tangon) { _fun00160_ip = 66; continue _fun00159 }
 58:
                tangon = undefined;
                zuuluu = report.bind(tangon)(golfie, oscard);
 66:
                tangon = -1;
                if(!(tangon === zuuluu)) { _fun00160_ip = 78; continue _fun00159 }
 76:
                zuuluu = null;
 78:
                if(!(michal != zuuluu)) { _fun00160_ip = 85; continue _fun00159 }
 82:
                entity = zuuluu;
 85:
                if(!(michal == entity)) { _fun00160_ip = 126; continue _fun00159 }
 89:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 4;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                michal = michal.RunningProcessFullscreenType;
                entity = michal.UNKNOWN;
 126:
                return entity;
            }
        };
        golfie['GetWindowFullscreenTypeByPid'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: GetWindowFullscreenTypeExtraByPid
            _fun00161: for(var _fun00162_ip = 0; ; ) switch(_fun00162_ip) {
 0:
                tangon = argBar;
                michal = this;
                entity = michal.getDiscordUtils;
                entity = entity.bind(michal)();
                zuuluu = entity.getWindowFullscreenTypeExtraByPid;
                entity = null;
                if(!(entity != zuuluu)) { _fun00162_ip = 47; continue _fun00161 }
 30:
                if(!(entity != tangon)) { _fun00162_ip = 47; continue _fun00161 }
 34:
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity, tangon);
                _fun00162_ip = 96; continue _fun00161;
 47:
                michal = {};
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 4;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                zuuluu = zuuluu.QueryUserNotificationState;
                zuuluu = zuuluu.QUNS_UNKNOWN;
                michal['quns'] = zuuluu;
                entity = michal;
 96:
                return entity;
            }
        };
        golfie['GetWindowFullscreenTypeExtraByPid'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: SetGPUBoostEnabledByPid
            _fun00163: for(var _fun00164_ip = 0; ; ) switch(_fun00164_ip) {
 0:
                michal = this;
                entity = michal.getDiscordUtils;
                entity = entity.bind(michal)();
                report = entity.setGPUBoostEnabledByPid;
                entity = null;
                entity = entity != report;
                if(!entity) { _fun00164_ip = 44; continue _fun00163 }
 30:
                tangon = undefined;
                zuuluu = argFoo;
                michal = argBar;
                entity = report.bind(tangon)(zuuluu, michal);
 44:
                return entity;
            }
        };
        golfie['SetGPUBoostEnabledByPid'] = yankee;
        yankee = function() { // Original name: IsHardwareAcceleratedGPUSchedulingEnabled
            _fun00165: for(var _fun00166_ip = 0; ; ) switch(_fun00166_ip) {
 0:
                michal = this;
                entity = michal.getDiscordUtils;
                entity = entity.bind(michal)();
                zuuluu = entity.isHardwareAcceleratedGPUSchedulingEnabled;
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00166_ip = 36; continue _fun00165 }
 30:
                michal = undefined;
                entity = zuuluu.bind(michal)();
 36:
                return entity;
            }
        };
        golfie['IsHardwareAcceleratedGPUSchedulingEnabled'] = yankee;
        yankee = function(argFoo) { // Original name: AcquireGlobalLock
            _fun00167: for(var _fun00168_ip = 0; ; ) switch(_fun00168_ip) {
 0:
                michal = this;
                entity = michal.getDiscordUtils;
                entity = entity.bind(michal)();
                zuuluu = entity.acquireGlobalLock;
                entity = null;
                if(!(entity == zuuluu)) { _fun00168_ip = 31; continue _fun00167 }
 27:
                entity = undefined;
                return entity;
 31:
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            }
        };
        golfie['AcquireGlobalLock'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: isModuleVersionAtLeast
            _fun00169: for(var _fun00170_ip = 0; ; ) switch(_fun00170_ip) {
 0:
                entity = argBar;
                tangon = this;
                report = _closure1_slot8;
                michal = null;
                if(!(michal == report)) { _fun00170_ip = 29; continue _fun00169 }
 19:
                report = [0, 0, 0];
 29:
                zuuluu = new Array(0);
                option = 0;
                backup = zuuluu;
                foxtra = report;
                romeon = 0;
                report = arraySpread(backup, foxtra, romeon);
                oscard = zuuluu.push;
                yankee = tangon.moduleVersions;
                report = michal == yankee;
                golfie = undefined;
                offset = undefined;
                if(report) { _fun00170_ip = 78; continue _fun00169 }
 71:
                report = argFoo;
                offset = yankee[report];
 78:
                yankee = michal != offset;
                report = 0;
                if(!yankee) { _fun00170_ip = 90; continue _fun00169 }
 87:
                report = offset;
 90:
                report = oscard.bind(zuuluu)(report);
                tangon = tangon.releaseChannel;
                oscard = entity[tangon];
                if(!(michal == oscard)) { _fun00170_ip = 115; continue _fun00169 }
 109:
                oscard = entity.stable;
 115:
                michal = _closure1_slot14;
                entity = zuuluu.entries;
                entity = entity.bind(zuuluu)();
                report = michal.bind(golfie)(entity);
                michal = report.bind(golfie)();
                entity = michal.done;
                tangon = 2;
                zuuluu = 1;
                if(entity) { _fun00170_ip = 216; continue _fun00169 }
 152:
                offset = michal.value;
                entity = _closure1_slot3;
                offset = entity.bind(golfie)(offset, tangon);
                entity = offset[option];
                offset = offset[zuuluu];
                yankee = oscard[entity];
                if(!(!(offset > yankee))) { _fun00170_ip = 212; continue _fun00169 }
 183:
                entity = oscard[entity];
                if(!(!(offset < entity))) { _fun00170_ip = 208; continue _fun00169 }
 191:
                offset = report.bind(golfie)();
                entity = offset.done;
                michal = offset;
                if(entity) { _fun00170_ip = 216; continue _fun00169 }
 206:
                _fun00170_ip = 152; continue _fun00169;
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
        golfie['isModuleVersionAtLeast'] = yankee;
        yankee = function(argFoo, argBar) { // Original name: fetchRiotGamesLiveClientData
            _fun00171: for(var _fun00172_ip = 0; ; ) switch(_fun00172_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                entity = entity.isPlatformEmbedded;
                if(entity) { _fun00172_ip = 87; continue _fun00171 }
 34:
                entity = global;
                tangon = entity.Promise;
                zuuluu = tangon.reject;
                oscard = entity.Error;
                entity = oscard.prototype;
                report = Object.create(entity, {constructor: {value: oscard}});
                verify = 'Not embedded!';
                offset = report;
                entity = new offset[oscard](verify, option);
                entity = entity instanceof Object ? entity : report;
                entity = zuuluu.bind(tangon)(entity);
                _fun00172_ip = 189; continue _fun00171;
 87:
                zuuluu = _closure1_slot6;
                tangon = zuuluu.riotGames;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00172_ip = 135; continue _fun00171 }
 103:
                michal = _closure1_slot6;
                report = michal.riotGames;
                tangon = report.fetchLiveClientData;
                zuuluu = argFoo;
                michal = argBar;
                michal = tangon.bind(report)(zuuluu, michal);
                _fun00172_ip = 186; continue _fun00171;
 135:
                zuuluu = global;
                report = zuuluu.Promise;
                tangon = report.reject;
                golfie = zuuluu.Error;
                zuuluu = golfie.prototype;
                oscard = Object.create(zuuluu, {constructor: {value: golfie}});
                verify = 'Riot Games module not available';
                offset = oscard;
                zuuluu = new offset[golfie](verify, option);
                zuuluu = zuuluu instanceof Object ? zuuluu : oscard;
                michal = tangon.bind(report)(zuuluu);
 186:
                entity = michal;
 189:
                return entity;
            }
        };
        golfie['fetchRiotGamesLiveClientData'] = yankee;
        yankee = function() { // Original name: appViewed
            _fun00173: for(var _fun00174_ip = 0; ; ) switch(_fun00174_ip) {
 0:
                tangon = this;
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.isDesktop;
                michal = michal.bind(zuuluu)();
                if(!michal) { _fun00174_ip = 58; continue _fun00173 }
 41:
                zuuluu = tangon.send;
                michal = 'APP_VIEWED';
                michal = zuuluu.bind(tangon)(michal);
 58:
                return entity;
            }
        };
        golfie['appViewed'] = yankee;
        option = function() { // Original name: appLoaded
            _fun00175: for(var _fun00176_ip = 0; ; ) switch(_fun00176_ip) {
 0:
                tangon = this;
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.isDesktop;
                michal = michal.bind(zuuluu)();
                if(!michal) { _fun00176_ip = 62; continue _fun00175 }
 41: // try_start_0
                zuuluu = tangon.send;
                michal = 'APP_LOADED';
                michal = zuuluu.bind(tangon)(michal);
 58: // try_end0
                _fun00176_ip = 62; continue _fun00175;
 60: // catch_target0
                CatchBlockStart(arg_register=1);
 62:
                return entity;
            }
        };
        golfie['appLoaded'] = option;
        option = 12;
        option = offset[option];
        offset = verify.bind(entity)(option);
        verify = offset.fileFinishedImporting;
        option = 'utils/web/DesktopNativeUtils.tsx';
        option = verify.bind(offset)(option);
        zuuluu['default'] = golfie;
        zuuluu['getFileData'] = oscard;
        zuuluu['getImageData'] = report;
        zuuluu['NativePermissionRequestType'] = tangon;
        zuuluu['ThumbarButtonName'] = michal;
        return entity;
    }
})();