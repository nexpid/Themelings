// app/modules/experiments/ExperimentStore.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        oscar = argBar;
        offset = argBaz;
        zulu = argFred;
        golf = argPlugh;
        var _closure1_slot0 = oscar;
        var _closure1_slot1 = offset;
        var _closure1_slot2 = golf;
        entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tango = argFoo;
                oscar = argBaz;
                mike = _closure1_slot6;
                zulu = undefined;
                entity = argBar;
                verify = mike.bind(zulu)(entity);
                mike = _closure1_slot5;
                entity = _closure1_slot37;
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
                report = _closure1_slot6;
                report = report.bind(zulu)(tango);
                report = report.constructor;
                entity = golf.bind(options)(verify, oscar, report);
 92:
                entity = mike.bind(zulu)(tango, entity);
                return entity;
            }
        };
        var _closure1_slot36 = entity;
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
                _closure1_slot37 = mike;
                entity = undefined;
                entity = mike.bind(entity)();
                return entity;
            }
        };
        var _closure1_slot37 = entity;
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
                verify = _closure1_slot39;
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
                golf = _closure1_slot39;
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
        var _closure1_slot38 = entity;
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
        var _closure1_slot39 = entity;
        entity = function(argFoo) { // Original name: getHash
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zulu = argFoo;
                entity = _closure1_slot33;
                entity = entity[zulu];
                report = undefined;
                if(!(report !== entity)) { _fun00014_ip = 22; continue _fun00013 }
 20:
                return entity;
 22:
                tango = _closure1_slot1;
                oscar = _closure1_slot2;
                entity = 11;
                entity = oscar[entity];
                tango = tango.bind(report)(entity);
                entity = tango.v3;
                entity = entity.bind(tango)(zulu);
                mike = _closure1_slot33;
                mike[zulu] = entity;
                return entity;
            }
        };
        var _closure1_slot40 = entity;
        entity = function(argFoo, argBar) { // Original name: isTriggerDebuggingEnabled
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = argFoo;
                if(entity) { _fun00016_ip = 26; continue _fun00015 }
 6:
                tango = _closure1_slot34;
                zulu = tango.includes;
                mike = argBar;
                entity = zulu.bind(tango)(mike);
 26:
                return entity;
            }
        };
        var _closure1_slot41 = entity;
        entity = function(argFoo) { // Original name: userCanUseExperiments
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                mike = argFoo;
                entity = mike.flags;
                zulu = null;
                tango = zulu != entity;
                report = 0;
                if(!tango) { _fun00018_ip = 22; continue _fun00017 }
 19:
                report = entity;
 22:
                tango = _closure1_slot15;
                tango = tango.STAFF;
                tango = report & tango;
                entity = _closure1_slot15;
                entity = entity.STAFF;
                entity = tango === entity;
                if(entity) { _fun00018_ip = 66; continue _fun00017 }
 56:
                mike = mike.personal_connection_id;
                entity = zulu != mike;
 66:
                return entity;
            }
        };
        var _closure1_slot42 = entity;
        entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: getTrackExposureExperimentKey
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                entity = argBar;
                oscar = argBaz;
                zulu = argCorge;
                verify = entity.type;
                mike = global;
                tango = mike.HermesInternal;
                options = tango.concat;
                golf = '';
                report = '|';
                tango = argFoo;
                tango = options.bind(golf)(verify, report, tango);
                golf = entity.triggerDebuggingEnabled;
                if(!golf) { _fun00020_ip = 60; continue _fun00019 }
 54:
                options = undefined;
                golf = options !== oscar;
 60:
                if(!golf) { _fun00020_ip = 74; continue _fun00019 }
 63:
                verify = oscar.length;
                options = 0;
                golf = verify > options;
 74:
                offset = entity.type;
                verify = _closure1_slot11;
                verify = verify.USER;
                if(!(offset !== verify)) { _fun00020_ip = 215; continue _fun00019 }
 96:
                verify = entity.type;
                options = _closure1_slot11;
                options = options.GUILD;
                if(!(verify !== options)) { _fun00020_ip = 143; continue _fun00019 }
 115:
                options = mike.Error;
                verify = options.prototype;
                verify = Object.create(verify, {constructor: {value: options}});
                backup = verify;
                options = new backup[options](foxtrot);
                options = options instanceof Object ? options : verify;
                throw options;
 143:
                options = entity.guildId;
                entity = mike.HermesInternal;
                entity = entity.concat;
                entity = entity.bind(report)(options);
                verify = tango + entity;
                entity = verify;
                if(!golf) { _fun00020_ip = 213; continue _fun00019 }
 174:
                options = mike.HermesInternal;
                options = options.concat;
                options = options.bind(report)(oscar);
                offset = verify + options;
                options = offset;
                if(!zulu) { _fun00020_ip = 210; continue _fun00019 }
 200:
                verify = '|triggerDebugging';
                options = offset + verify;
 210:
                entity = options;
 213:
                return entity;
 215:
                entity = tango;
                if(!golf) { _fun00020_ip = 260; continue _fun00019 }
 221:
                mike = mike.HermesInternal;
                mike = mike.concat;
                mike = mike.bind(report)(oscar);
                tango = tango + mike;
                mike = tango;
                if(!zulu) { _fun00020_ip = 257; continue _fun00019 }
 247:
                zulu = '|triggerDebugging';
                mike = tango + zulu;
 257:
                entity = mike;
 260:
                return entity;
            }
        };
        var _closure1_slot43 = entity;
        entity = function(argFoo) { // Original name: getTrackExposureExperimentHash
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = argFoo;
                tango = entity.type;
                zulu = _closure1_slot11;
                zulu = zulu.USER;
                if(!(tango !== zulu)) { _fun00022_ip = 135; continue _fun00021 }
 25:
                tango = entity.type;
                zulu = _closure1_slot11;
                zulu = zulu.GUILD;
                if(!(tango !== zulu)) { _fun00022_ip = 74; continue _fun00021 }
 44:
                zulu = global;
                zulu = zulu.Error;
                tango = zulu.prototype;
                tango = Object.create(tango, {constructor: {value: zulu}});
                kilo = tango;
                zulu = new kilo[zulu](backup);
                zulu = zulu instanceof Object ? zulu : tango;
                throw zulu;
 74:
                report = _closure1_slot40;
                backup = entity.bucket;
                romeo = entity.revision;
                offset = entity.guildId;
                zulu = global;
                zulu = zulu.HermesInternal;
                oscar = zulu.concat;
                kilo = '';
                zulu = '|';
                foxtrot = zulu;
                yankee = zulu;
                tango = kilo[oscar](backup, foxtrot, romeo, yankee, offset, verify);
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                return zulu;
 135:
                zulu = _closure1_slot40;
                oscar = entity.bucket;
                report = entity.revision;
                entity = global;
                entity = entity.HermesInternal;
                tango = entity.concat;
                mike = '';
                entity = '|';
                mike = tango.bind(mike)(oscar, entity, report);
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            }
        };
        var _closure1_slot44 = entity;
        entity = function(argFoo, argBar) { // Original name: _hasExperimentTrackedExposure
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                zulu = _closure1_slot23;
                entity = argFoo;
                zulu = zulu[entity];
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun00024_ip = 79; continue _fun00023 }
 23:
                tango = global;
                report = tango.Date;
                tango = report.now;
                report = tango.bind(report)();
                tango = zulu.time;
                tango = report - tango;
                mike = _closure1_slot35;
                tango = tango > mike;
                mike = !tango;
                if(tango) { _fun00024_ip = 76; continue _fun00023 }
 64:
                tango = zulu.hash;
                zulu = argBar;
                mike = tango === zulu;
 76:
                entity = mike;
 79:
                return entity;
            }
        };
        var _closure1_slot45 = entity;
        entity = function(argFoo) { // Original name: trackExposure
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                entity = argFoo;
                offset = entity.experimentId;
                verify = entity.descriptor;
                options = entity.location;
                backup = entity.location_stack;
                yankee = entity.context;
                kilo = entity.fingerprint;
                foxtrot = entity.excluded;
                romeo = entity.exposureType;
                tango = verify.assignmentSource;
                entity = 'override';
                if(!(entity !== tango)) { _fun00026_ip = 1119; continue _fun00025 }
 66:
                entity = 'ready_payload';
                if(!(entity !== tango)) { _fun00026_ip = 121; continue _fun00025 }
 76:
                mike = 'logged_out_api';
                zulu = true;
                if(!(mike === tango)) { _fun00026_ip = 152; continue _fun00025 }
 88:
                tango = verify.fingerprint;
                report = _closure1_slot9;
                mike = report.getFingerprint;
                mike = mike.bind(report)();
                zulu = false;
                if(!(tango !== mike)) { _fun00026_ip = 152; continue _fun00025 }
 117:
                zulu = true;
                _fun00026_ip = 152; continue _fun00025;
 121:
                mike = verify.sessionId;
                tango = _closure1_slot9;
                entity = tango.getSessionId;
                entity = entity.bind(tango)();
                zulu = false;
                if(!(mike !== entity)) { _fun00026_ip = 152; continue _fun00025 }
 150:
                zulu = true;
 152:
                entity = verify.override;
                if(entity) { _fun00026_ip = 1115; continue _fun00025 }
 164:
                entity = _closure1_slot12;
                entity = entity.AUTO_FALLBACK;
                oscar = romeo === entity;
                if(!oscar) { _fun00026_ip = 196; continue _fun00025 }
 184:
                entity = verify.triggerDebuggingEnabled;
                entity = !entity;
                oscar = !entity;
 196:
                tango = _closure1_slot43;
                entity = undefined;
                config = undefined;
                sequence = offset;
                vacuum = verify;
                control = options;
                source = oscar;
                report = config[tango](sequence, vacuum, control, source, update);
                tango = _closure1_slot44;
                tango = tango.bind(entity)(verify);
                golf = zulu;
                if(!golf) { _fun00026_ip = 253; continue _fun00025 }
 235:
                output = _closure1_slot24;
                sizing = output.get;
                sizing = sizing.bind(output)(report);
                golf = sizing === tango;
 253:
                if(golf) { _fun00026_ip = 1111; continue _fun00025 }
 259:
                golf = _closure1_slot45;
                golf = golf.bind(entity)(report, tango);
                if(golf) { _fun00026_ip = 1107; continue _fun00025 }
 275:
                sizing = verify.type;
                golf = _closure1_slot11;
                golf = golf.USER;
                if(!(sizing !== golf)) { _fun00026_ip = 654; continue _fun00025 }
 297:
                sizing = verify.type;
                golf = _closure1_slot11;
                golf = golf.GUILD;
                if(!(sizing === golf)) { _fun00026_ip = 1005; continue _fun00025 }
 319:
                golf = _closure1_slot13;
                if(oscar) { _fun00026_ip = 334; continue _fun00025 }
 326:
                echo = golf.EXPERIMENT_GUILD_TRIGGERED;
                _fun00026_ip = 340; continue _fun00025;
 334:
                echo = golf.EXPERIMENT_GUILD_TRIGGERED_FALLBACK;
 340:
                golf = {};
                golf['name'] = offset;
                sizing = verify.revision;
                golf['revision'] = sizing;
                sizing = verify.bucket;
                golf['bucket'] = sizing;
                sizing = verify.guildId;
                golf['guild_id'] = sizing;
                golf['location'] = options;
                golf['location_stack'] = backup;
                sizing = verify.hashResult;
                golf['hash_result'] = sizing;
                golf['excluded'] = foxtrot;
                golf['exposure_type'] = romeo;
                sizing = verify.assignmentSource;
                golf['assignment_source'] = sizing;
                sizing = verify.sessionId;
                golf['assignment_session_id'] = sizing;
                sizing = verify.loadedFromCache;
                golf['assignment_loaded_from_cache'] = sizing;
                if(zulu) { _fun00026_ip = 494; continue _fun00025 }
 443:
                output = _closure1_slot1;
                result = _closure1_slot2;
                sizing = 12;
                sizing = result[sizing];
                result = output.bind(entity)(sizing);
                output = result.track;
                sizing = {};
                update = true;
                sizing['flush'] = update;
                sizing['fingerprint'] = kilo;
                sizing = output.bind(result)(echo, golf, sizing);
                _fun00026_ip = 1005; continue _fun00025;
 494:
                echo = {};
                sequence = echo;
                vacuum = golf;
                golf = copyDataProperties(sequence, vacuum);
                sizing = verify.fingerprint;
                golf = 'assignment_fingerprint';
                echo[golf] = sizing;
                sizing = _closure1_slot9;
                golf = sizing.getSessionId;
                sizing = golf.bind(sizing)();
                golf = 'current_session_id';
                echo[golf] = sizing;
                sizing = _closure1_slot9;
                golf = sizing.getFingerprint;
                sizing = golf.bind(sizing)();
                golf = 'current_fingerprint';
                echo[golf] = sizing;
                golf = _closure1_slot26;
                sizing = golf.source;
                golf = 'current_source';
                echo[golf] = sizing;
                sizing = _closure1_slot1;
                output = _closure1_slot2;
                golf = 12;
                golf = output[golf];
                result = sizing.bind(entity)(golf);
                output = result.track;
                golf = _closure1_slot13;
                sizing = golf.EXPERIMENT_GUILD_TRIGGERED_IGNORED;
                golf = {};
                update = false;
                golf['flush'] = update;
                golf['fingerprint'] = kilo;
                golf = output.bind(result)(sizing, echo, golf);
                _fun00026_ip = 1005; continue _fun00025;
 654:
                golf = {};
                golf['name'] = offset;
                sizing = verify.revision;
                golf['revision'] = sizing;
                sizing = verify.population;
                golf['population'] = sizing;
                sizing = verify.bucket;
                golf['bucket'] = sizing;
                golf['location'] = options;
                golf['location_stack'] = backup;
                backup = verify.hashResult;
                golf['hash_result'] = backup;
                golf['excluded'] = foxtrot;
                golf['exposure_type'] = romeo;
                romeo = verify.assignmentSource;
                golf['assignment_source'] = romeo;
                romeo = verify.sessionId;
                golf['assignment_session_id'] = romeo;
                romeo = verify.loadedFromCache;
                golf['assignment_loaded_from_cache'] = romeo;
                romeo = null;
                if(!(romeo != yankee)) { _fun00026_ip = 775; continue _fun00025 }
 762:
                yankee = yankee.guildId;
                golf['context_guild_id'] = yankee;
 775:
                yankee = _closure1_slot13;
                if(oscar) { _fun00026_ip = 790; continue _fun00025 }
 782:
                backup = yankee.EXPERIMENT_USER_TRIGGERED;
                _fun00026_ip = 796; continue _fun00025;
 790:
                backup = yankee.EXPERIMENT_USER_TRIGGERED_FALLBACK;
 796:
                if(zulu) { _fun00026_ip = 850; continue _fun00025 }
 799:
                romeo = _closure1_slot1;
                foxtrot = _closure1_slot2;
                yankee = 12;
                yankee = foxtrot[yankee];
                foxtrot = romeo.bind(entity)(yankee);
                romeo = foxtrot.track;
                yankee = {};
                sizing = true;
                yankee['flush'] = sizing;
                yankee['fingerprint'] = kilo;
                yankee = romeo.bind(foxtrot)(backup, golf, yankee);
                _fun00026_ip = 1005; continue _fun00025;
 850:
                backup = {};
                sequence = backup;
                vacuum = golf;
                golf = copyDataProperties(sequence, vacuum);
                yankee = verify.fingerprint;
                golf = 'assignment_fingerprint';
                backup[golf] = yankee;
                yankee = _closure1_slot9;
                golf = yankee.getSessionId;
                yankee = golf.bind(yankee)();
                golf = 'current_session_id';
                backup[golf] = yankee;
                yankee = _closure1_slot9;
                golf = yankee.getFingerprint;
                yankee = golf.bind(yankee)();
                golf = 'current_fingerprint';
                backup[golf] = yankee;
                golf = _closure1_slot26;
                yankee = golf.source;
                golf = 'current_source';
                backup[golf] = yankee;
                yankee = _closure1_slot1;
                romeo = _closure1_slot2;
                golf = 12;
                golf = romeo[golf];
                foxtrot = yankee.bind(entity)(golf);
                romeo = foxtrot.track;
                golf = _closure1_slot13;
                yankee = golf.EXPERIMENT_USER_TRIGGERED_IGNORED;
                golf = {};
                sizing = false;
                golf['flush'] = sizing;
                golf['fingerprint'] = kilo;
                golf = romeo.bind(foxtrot)(yankee, backup, golf);
 1005:
                if(zulu) { _fun00026_ip = 1090; continue _fun00025 }
 1008:
                golf = _closure1_slot23;
                zulu = _closure1_slot43;
                config = undefined;
                sequence = offset;
                vacuum = verify;
                control = options;
                source = oscar;
                oscar = config[zulu](sequence, vacuum, control, source, update);
                zulu = {};
                options = global;
                offset = options.Date;
                options = offset.now;
                options = options.bind(offset)();
                zulu['time'] = options;
                options = _closure1_slot44;
                options = options.bind(entity)(verify);
                zulu['hash'] = options;
                golf[oscar] = zulu;
                oscar = _closure1_slot60;
                zulu = _closure1_slot23;
                zulu = oscar.bind(entity)(zulu);
                _fun00026_ip = 1105; continue _fun00025;
 1090:
                zulu = _closure1_slot24;
                mike = zulu.set;
                mike = mike.bind(zulu)(report, tango);
 1105:
                return entity;
 1107:
                entity = false;
                return entity;
 1111:
                entity = false;
                return entity;
 1115:
                entity = false;
                return entity;
 1119:
                entity = false;
                return entity;
            }
        };
        var _closure1_slot46 = entity;
        entity = function(argFoo) { // Original name: _loadGuildFilter
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                report = argFoo;
                entity = report[Symbol.iterator];
                report = entity().next;
                tango = report().value;
                mike = entity;
                oscar = undefined;
                zulu = mike === oscar;
                mike = undefined;
                if(zulu) { _fun00028_ip = 27; continue _fun00027 }
 24:
                mike = tango;
 27:
                tango = undefined;
                if(zulu) { _fun00028_ip = 57; continue _fun00027 }
 32:
                golf = report().value;
                report = entity;
                report = report === oscar;
                tango = undefined;
                zulu = report;
                if(report) { _fun00028_ip = 57; continue _fun00027 }
 51:
                tango = golf;
                zulu = report;
 57:
                if(zulu) { _fun00028_ip = 63; continue _fun00027 }
 60:
                entity.return();
 63:
                report = _closure1_slot0;
                entity = _closure1_slot2;
                golf = 13;
                entity = entity[golf];
                entity = report.bind(oscar)(entity);
                entity = entity.GUILD_FILTERS;
                report = entity[mike];
                entity = null;
                report = entity != report;
                if(!report) { _fun00028_ip = 137; continue _fun00027 }
 105:
                report = _closure1_slot0;
                zulu = _closure1_slot2;
                zulu = zulu[golf];
                zulu = report.bind(oscar)(zulu);
                zulu = zulu.GUILD_FILTERS;
                mike = zulu[mike];
                entity = mike.bind(zulu)(tango);
 137:
                return entity;
            }
        };
        var _closure1_slot47 = entity;
        entity = function(argFoo) { // Original name: _loadOverrides
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                zulu = argFoo;
                entity = {};
                mike = null;
                if(!(mike != zulu)) { _fun00030_ip = 115; continue _fun00029 }
 11:
                mike = _closure1_slot38;
                report = undefined;
                tango = mike.bind(report)(zulu);
                zulu = tango.bind(report)();
                mike = zulu.done;
                if(mike) { _fun00030_ip = 113; continue _fun00029 }
 37:
                mike = zulu.value;
                verify = mike.b;
                golf = _closure1_slot38;
                mike = mike.k;
                options = golf.bind(report)(mike);
                golf = options.bind(report)();
                mike = golf.done;
                if(mike) { _fun00030_ip = 98; continue _fun00029 }
 74:
                mike = golf.value;
                entity[mike] = verify;
                offset = options.bind(report)();
                mike = offset.done;
                golf = offset;
                if(!mike) { _fun00030_ip = 74; continue _fun00029 }
 98:
                golf = tango.bind(report)();
                mike = golf.done;
                zulu = golf;
                if(!mike) { _fun00030_ip = 37; continue _fun00029 }
 113:
                return entity;
 115:
                return entity;
            }
        };
        var _closure1_slot48 = entity;
        entity = function(argFoo) { // Original name: _loadPopulation
            report = _closure1_slot8;
            tango = undefined;
            mike = argFoo;
            entity = 2;
            mike = report.bind(tango)(mike, entity);
            entity = 0;
            oscar = mike[entity];
            entity = 1;
            mike = mike[entity];
            entity = {};
            report = oscar.map;
            tango = function(argFoo) {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    report = argFoo;
                    entity = report[Symbol.iterator];
                    report = entity().next;
                    tango = report().value;
                    mike = entity;
                    golf = undefined;
                    zulu = mike === golf;
                    mike = undefined;
                    if(zulu) { _fun00032_ip = 27; continue _fun00031 }
 24:
                    mike = tango;
 27:
                    tango = undefined;
                    if(zulu) { _fun00032_ip = 57; continue _fun00031 }
 32:
                    oscar = report().value;
                    report = entity;
                    report = report === golf;
                    tango = undefined;
                    zulu = report;
                    if(report) { _fun00032_ip = 57; continue _fun00031 }
 51:
                    tango = oscar;
                    zulu = report;
 57:
                    if(zulu) { _fun00032_ip = 63; continue _fun00031 }
 60:
                    entity.return();
 63:
                    entity = {};
                    entity['bucket'] = mike;
                    zulu = tango.map;
                    mike = function(argFoo) {
                        entity = argFoo;
                        zulu = entity.s;
                        mike = entity.e;
                        entity = {};
                        entity['start'] = zulu;
                        entity['end'] = mike;
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    entity['positions'] = mike;
                    return entity;
                }
            };
            tango = report.bind(oscar)(tango);
            entity['buckets'] = tango;
            tango = mike.map;
            zulu = _closure1_slot47;
            zulu = tango.bind(mike)(zulu);
            entity['filters'] = zulu;
            entity['rawFilterData'] = mike;
            return entity;
        };
        var _closure1_slot49 = entity;
        entity = function(argFoo) { // Original name: handleLoadedExperiments
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                entity = argFoo;
                tango = _closure1_slot32;
                mike = !tango;
                if(tango) { _fun00034_ip = 29; continue _fun00033 }
 16:
                report = entity.type;
                tango = 'CONNECTION_OPEN';
                mike = tango === report;
 29:
                if(!mike) { _fun00034_ip = 48; continue _fun00033 }
 32:
                oscar = _closure1_slot42;
                report = entity.user;
                tango = undefined;
                mike = oscar.bind(tango)(report);
 48:
                if(!mike) { _fun00034_ip = 57; continue _fun00033 }
 51:
                mike = true;
                _closure1_slot32 = mike;
 57:
                tango = entity.type;
                mike = 'EXPERIMENTS_FETCH_SUCCESS';
                mike = mike === tango;
                if(!mike) { _fun00034_ip = 77; continue _fun00033 }
 73:
                mike = _closure1_slot22;
 77:
                if(!mike) { _fun00034_ip = 99; continue _fun00033 }
 80:
                tango = _closure1_slot26;
                report = tango.source;
                tango = 'ready_payload';
                mike = tango === report;
 99:
                if(!mike) { _fun00034_ip = 208; continue _fun00033 }
 102:
                report = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 12;
                tango = tango[mike];
                mike = undefined;
                oscar = report.bind(mike)(tango);
                report = oscar.track;
                mike = _closure1_slot13;
                tango = mike.EXPERIMENT_FETCH_IGNORED;
                mike = {};
                golf = entity.fingerprint;
                mike['fingerprint'] = golf;
                golf = _closure1_slot26;
                golf = golf.source;
                mike['current_snapshot_source'] = golf;
                golf = _closure1_slot26;
                golf = golf.sessionId;
                mike['current_snapshot_session_id'] = golf;
                golf = _closure1_slot26;
                golf = golf.fingerprint;
                mike['current_snapshot_fingerprint'] = golf;
                mike = report.bind(oscar)(tango, mike);
 208:
                mike = {};
                _closure1_slot27 = mike;
                mike = {};
                _closure1_slot28 = mike;
                mike = {};
                _closure1_slot29 = mike;
                mike = entity.type;
                report = 'CONNECTION_OPEN';
                tango = report === mike;
                if(tango) { _fun00034_ip = 254; continue _fun00033 }
 242:
                oscar = entity.fingerprint;
                mike = null;
                tango = mike == oscar;
 254:
                if(tango) { _fun00034_ip = 281; continue _fun00033 }
 257:
                oscar = entity.fingerprint;
                golf = _closure1_slot9;
                mike = golf.getFingerprint;
                mike = mike.bind(golf)();
                tango = oscar === mike;
 281:
                options = entity.experiments;
                golf = entity.guildExperiments;
                mike = entity.type;
                oscar = 'logged_out_api';
                if(!(report === mike)) { _fun00034_ip = 314; continue _fun00033 }
 308:
                oscar = 'ready_payload';
 314:
                mike = 'sessionId';
                mike = mike in entity;
                if(mike) { _fun00034_ip = 357; continue _fun00033 }
 325:
                report = _closure1_slot9;
                mike = report.getSessionId;
                report = mike.bind(report)();
                mike = null;
                verify = mike != report;
                mike = '';
                if(!verify) { _fun00034_ip = 355; continue _fun00033 }
 352:
                mike = report;
 355:
                _fun00034_ip = 363; continue _fun00033;
 357:
                mike = entity.sessionId;
 363:
                report = _closure1_slot9;
                entity = report.getFingerprint;
                entity = entity.bind(report)();
                if(!tango) { _fun00034_ip = 430; continue _fun00033 }
 380:
                report = _closure1_slot51;
                tango = {};
                tango['rawUserExperiments'] = options;
                options = null;
                if(!(options == golf)) { _fun00034_ip = 401; continue _fun00033 }
 397:
                golf = new Array(0);
 401:
                tango['rawGuildExperiments'] = golf;
                tango['source'] = oscar;
                tango['sessionId'] = mike;
                tango['fingerprint'] = entity;
                mike = undefined;
                entity = false;
                entity = report.bind(mike)(tango, entity);
 430:
                tango = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 14;
                mike = mike[entity];
                entity = undefined;
                mike = tango.bind(entity)(mike);
                tango = mike.CTPDeltaVanillaExperiment;
                mike = tango.trackExposure;
                mike = mike.bind(tango)();
                mike = true;
                _closure1_slot22 = mike;
                return entity;
            }
        };
        var _closure1_slot50 = entity;
        entity = function(argFoo) { // Original name: processRawExperiments
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                entity = argFoo;
                zulu = arguments[1];
                golf = entity.rawUserExperiments;
                tango = entity.rawGuildExperiments;
                verify = entity.source;
                var _closure2_slot0 = verify;
                options = entity.sessionId;
                var _closure2_slot1 = options;
                report = entity.fingerprint;
                var _closure2_slot2 = report;
                entity = undefined;
                if(!(zulu === entity)) { _fun00036_ip = 57; continue _fun00035 }
 55:
                zulu = false;
 57:
                var _closure2_slot3 = zulu;
                oscar = {};
                oscar['rawUserExperiments'] = golf;
                zulu = null;
                offset = tango;
                if(!(zulu == offset)) { _fun00036_ip = 81; continue _fun00035 }
 77:
                offset = new Array(0);
 81:
                oscar['rawGuildExperiments'] = offset;
                oscar['source'] = verify;
                oscar['sessionId'] = options;
                oscar['fingerprint'] = report;
                _closure1_slot26 = oscar;
                oscar = golf.forEach;
                report = function(argFoo) {
                    _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                        oscar = argFoo;
                        mike = oscar[Symbol.iterator];
                        oscar = mike().next;
                        report = oscar().value;
                        zulu = mike;
                        entity = undefined;
                        zulu = zulu === entity;
                        tango = undefined;
                        if(zulu) { _fun00038_ip = 27; continue _fun00037 }
 24:
                        tango = report;
 27:
                        romeo = undefined;
                        if(zulu) { _fun00038_ip = 57; continue _fun00037 }
 32:
                        golf = oscar().value;
                        report = mike;
                        report = report === entity;
                        romeo = undefined;
                        zulu = report;
                        if(report) { _fun00038_ip = 57; continue _fun00037 }
 51:
                        romeo = golf;
                        zulu = report;
 57:
                        report = undefined;
                        if(zulu) { _fun00038_ip = 87; continue _fun00037 }
 62:
                        options = oscar().value;
                        golf = mike;
                        golf = golf === entity;
                        report = undefined;
                        zulu = golf;
                        if(golf) { _fun00038_ip = 87; continue _fun00037 }
 81:
                        report = options;
                        zulu = golf;
 87:
                        offset = undefined;
                        if(zulu) { _fun00038_ip = 117; continue _fun00037 }
 92:
                        options = oscar().value;
                        golf = mike;
                        golf = golf === entity;
                        offset = undefined;
                        zulu = golf;
                        if(golf) { _fun00038_ip = 117; continue _fun00037 }
 111:
                        offset = options;
                        zulu = golf;
 117:
                        yankee = undefined;
                        if(zulu) { _fun00038_ip = 147; continue _fun00037 }
 122:
                        options = oscar().value;
                        golf = mike;
                        golf = golf === entity;
                        yankee = undefined;
                        zulu = golf;
                        if(golf) { _fun00038_ip = 147; continue _fun00037 }
 141:
                        yankee = options;
                        zulu = golf;
 147:
                        verify = undefined;
                        if(zulu) { _fun00038_ip = 177; continue _fun00037 }
 152:
                        options = oscar().value;
                        golf = mike;
                        golf = golf === entity;
                        verify = undefined;
                        zulu = golf;
                        if(golf) { _fun00038_ip = 177; continue _fun00037 }
 171:
                        verify = options;
                        zulu = golf;
 177:
                        options = undefined;
                        if(zulu) { _fun00038_ip = 207; continue _fun00037 }
 182:
                        foxtrot = oscar().value;
                        golf = mike;
                        golf = golf === entity;
                        options = undefined;
                        zulu = golf;
                        if(golf) { _fun00038_ip = 207; continue _fun00037 }
 201:
                        options = foxtrot;
                        zulu = golf;
 207:
                        golf = undefined;
                        if(zulu) { _fun00038_ip = 237; continue _fun00037 }
 212:
                        foxtrot = oscar().value;
                        oscar = mike;
                        oscar = oscar === entity;
                        golf = undefined;
                        zulu = oscar;
                        if(oscar) { _fun00038_ip = 237; continue _fun00037 }
 231:
                        golf = foxtrot;
                        zulu = oscar;
 237:
                        if(zulu) { _fun00038_ip = 243; continue _fun00037 }
 240:
                        mike.return();
 243:
                        zulu = _closure1_slot27;
                        mike = {};
                        foxtrot = 'user';
                        mike['type'] = foxtrot;
                        mike['revision'] = romeo;
                        mike['population'] = yankee;
                        mike['bucket'] = report;
                        report = 0;
                        report = report === offset;
                        mike['override'] = report;
                        report = null;
                        offset = report != verify;
                        report = -1;
                        if(!offset) { _fun00038_ip = 304; continue _fun00037 }
 301:
                        report = verify;
 304:
                        mike['hashResult'] = report;
                        report = 1;
                        options = report === options;
                        mike['aaMode'] = options;
                        oscar = _closure1_slot41;
                        report = report === golf;
                        report = oscar.bind(entity)(report, tango);
                        mike['triggerDebuggingEnabled'] = report;
                        oscar = _closure2_slot0;
                        mike['assignmentSource'] = oscar;
                        oscar = _closure2_slot1;
                        mike['sessionId'] = oscar;
                        oscar = _closure2_slot3;
                        mike['loadedFromCache'] = oscar;
                        report = _closure2_slot2;
                        mike['fingerprint'] = report;
                        zulu[tango] = mike;
                        return entity;
                    }
                };
                report = oscar.bind(golf)(report);
                if(!(zulu != tango)) { _fun00036_ip = 141; continue _fun00035 }
 126:
                zulu = tango.forEach;
                mike = function(argFoo) {
                    _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                        oscar = argFoo;
                        mike = oscar[Symbol.iterator];
                        oscar = mike().next;
                        report = oscar().value;
                        zulu = mike;
                        entity = undefined;
                        zulu = zulu === entity;
                        tango = undefined;
                        if(zulu) { _fun00040_ip = 27; continue _fun00039 }
 24:
                        tango = report;
 27:
                        romeo = undefined;
                        if(zulu) { _fun00040_ip = 57; continue _fun00039 }
 32:
                        golf = oscar().value;
                        report = mike;
                        report = report === entity;
                        romeo = undefined;
                        zulu = report;
                        if(report) { _fun00040_ip = 57; continue _fun00039 }
 51:
                        romeo = golf;
                        zulu = report;
 57:
                        report = undefined;
                        if(zulu) { _fun00040_ip = 87; continue _fun00039 }
 62:
                        options = oscar().value;
                        golf = mike;
                        golf = golf === entity;
                        report = undefined;
                        zulu = golf;
                        if(golf) { _fun00040_ip = 87; continue _fun00039 }
 81:
                        report = options;
                        zulu = golf;
 87:
                        backup = undefined;
                        if(zulu) { _fun00040_ip = 117; continue _fun00039 }
 92:
                        options = oscar().value;
                        golf = mike;
                        golf = golf === entity;
                        backup = undefined;
                        zulu = golf;
                        if(golf) { _fun00040_ip = 117; continue _fun00039 }
 111:
                        backup = options;
                        zulu = golf;
 117:
                        offset = undefined;
                        if(zulu) { _fun00040_ip = 147; continue _fun00039 }
 122:
                        options = oscar().value;
                        golf = mike;
                        golf = golf === entity;
                        offset = undefined;
                        zulu = golf;
                        if(golf) { _fun00040_ip = 147; continue _fun00039 }
 141:
                        offset = options;
                        zulu = golf;
 147:
                        foxtrot = undefined;
                        if(zulu) { _fun00040_ip = 177; continue _fun00039 }
 152:
                        options = oscar().value;
                        golf = mike;
                        golf = golf === entity;
                        foxtrot = undefined;
                        zulu = golf;
                        if(golf) { _fun00040_ip = 177; continue _fun00039 }
 171:
                        foxtrot = options;
                        zulu = golf;
 177:
                        yankee = undefined;
                        if(zulu) { _fun00040_ip = 207; continue _fun00039 }
 182:
                        options = oscar().value;
                        golf = mike;
                        golf = golf === entity;
                        yankee = undefined;
                        zulu = golf;
                        if(golf) { _fun00040_ip = 207; continue _fun00039 }
 201:
                        yankee = options;
                        zulu = golf;
 207:
                        verify = undefined;
                        if(zulu) { _fun00040_ip = 237; continue _fun00039 }
 212:
                        options = oscar().value;
                        golf = mike;
                        golf = golf === entity;
                        verify = undefined;
                        zulu = golf;
                        if(golf) { _fun00040_ip = 237; continue _fun00039 }
 231:
                        verify = options;
                        zulu = golf;
 237:
                        options = undefined;
                        if(zulu) { _fun00040_ip = 267; continue _fun00039 }
 242:
                        kilo = oscar().value;
                        golf = mike;
                        golf = golf === entity;
                        options = undefined;
                        zulu = golf;
                        if(golf) { _fun00040_ip = 267; continue _fun00039 }
 261:
                        options = kilo;
                        zulu = golf;
 267:
                        golf = undefined;
                        if(zulu) { _fun00040_ip = 297; continue _fun00039 }
 272:
                        kilo = oscar().value;
                        oscar = mike;
                        oscar = oscar === entity;
                        golf = undefined;
                        zulu = oscar;
                        if(oscar) { _fun00040_ip = 297; continue _fun00039 }
 291:
                        golf = kilo;
                        zulu = oscar;
 297:
                        if(zulu) { _fun00040_ip = 303; continue _fun00039 }
 300:
                        mike.return();
 303:
                        zulu = _closure1_slot28;
                        mike = {};
                        mike['hashKey'] = romeo;
                        mike['revision'] = report;
                        romeo = backup.map;
                        report = _closure1_slot49;
                        report = romeo.bind(backup)(report);
                        mike['populations'] = report;
                        report = _closure1_slot48;
                        report = report.bind(entity)(offset);
                        mike['overrides'] = report;
                        report = null;
                        if(!(report == foxtrot)) { _fun00040_ip = 365; continue _fun00039 }
 361:
                        foxtrot = new Array(0);
 365:
                        romeo = foxtrot.map;
                        offset = function(argFoo) {
                            zulu = argFoo;
                            mike = zulu.map;
                            entity = _closure1_slot49;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        offset = romeo.bind(foxtrot)(offset);
                        mike['overridesFormatted'] = offset;
                        romeo = report != yankee;
                        offset = null;
                        if(!romeo) { _fun00040_ip = 399; continue _fun00039 }
 396:
                        offset = yankee;
 399:
                        mike['holdoutName'] = offset;
                        offset = report != verify;
                        report = null;
                        if(!offset) { _fun00040_ip = 416; continue _fun00039 }
 413:
                        report = verify;
 416:
                        mike['holdoutBucket'] = report;
                        report = 1;
                        options = report === options;
                        mike['aaMode'] = options;
                        oscar = _closure1_slot41;
                        report = report === golf;
                        report = oscar.bind(entity)(report, tango);
                        mike['triggerDebuggingEnabled'] = report;
                        oscar = _closure2_slot0;
                        mike['assignmentSource'] = oscar;
                        oscar = _closure2_slot1;
                        mike['sessionId'] = oscar;
                        oscar = _closure2_slot3;
                        mike['loadedFromCache'] = oscar;
                        report = _closure2_slot2;
                        mike['fingerprint'] = report;
                        zulu[tango] = mike;
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
 141:
                return entity;
            }
        };
        var _closure1_slot51 = entity;
        entity = function(argFoo, argBar, argBaz) { // Original name: computeGuildExperimentBucketFromPopulationsOrNull
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                backup = argFoo;
                entity = argBaz;
                var _closure2_slot0 = entity;
                tango = _closure1_slot38;
                foxtrot = undefined;
                entity = argBar;
                romeo = tango.bind(foxtrot)(entity);
                report = romeo.bind(foxtrot)();
                tango = report.done;
                entity = null;
                verify = report;
                options = undefined;
                golf = undefined;
                oscar = undefined;
                if(tango) { _fun00042_ip = 257; continue _fun00041 }
 55:
                tango = verify.value;
                report = tango.buckets;
                output = tango.filters;
                sizing = entity != output;
                tango = true;
                kilo = oscar;
                if(!sizing) { _fun00042_ip = 173; continue _fun00041 }
 84:
                sizing = _closure1_slot38;
                result = sizing.bind(foxtrot)(output);
                echo = result.bind(foxtrot)();
                sizing = echo.done;
                output = echo;
                tango = true;
                options = output;
                golf = result;
                kilo = oscar;
                if(sizing) { _fun00042_ip = 173; continue _fun00041 }
 119:
                echo = output.value;
                if(!(entity != echo)) { _fun00042_ip = 147; continue _fun00041 }
 128:
                sizing = echo.bind(foxtrot)(backup);
                tango = false;
                options = output;
                golf = result;
                kilo = echo;
                if(!sizing) { _fun00042_ip = 173; continue _fun00041 }
 147:
                update = result.bind(foxtrot)();
                sizing = update.done;
                output = update;
                tango = true;
                options = output;
                golf = result;
                kilo = echo;
                if(!sizing) { _fun00042_ip = 119; continue _fun00041 }
 173:
                if(tango) { _fun00042_ip = 199; continue _fun00041 }
 176:
                sizing = romeo.bind(foxtrot)();
                tango = sizing.done;
                verify = sizing;
                oscar = kilo;
                if(tango) { _fun00042_ip = 257; continue _fun00041 }
 194:
                _fun00042_ip = 55; continue _fun00041;
 199:
                tango = report.find;
                zulu = function(argFoo) {
                    entity = argFoo;
                    zulu = entity.positions;
                    mike = zulu.some;
                    entity = function(argFoo) {
                        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                            entity = argFoo;
                            tango = entity.start;
                            zulu = entity.end;
                            entity = _closure2_slot0;
                            entity = entity >= tango;
                            if(!entity) { _fun00044_ip = 35; continue _fun00043 }
 27:
                            mike = _closure2_slot0;
                            entity = mike < zulu;
 35:
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                tango = tango.bind(report)(zulu);
                if(!(entity == tango)) { _fun00042_ip = 230; continue _fun00041 }
 218:
                zulu = _closure1_slot10;
                zulu = zulu.CONTROL;
                _fun00042_ip = 236; continue _fun00041;
 230:
                zulu = tango.bucket;
 236:
                mike = _closure1_slot10;
                tango = mike.NOT_ELIGIBLE;
                mike = null;
                if(!(zulu !== tango)) { _fun00042_ip = 255; continue _fun00041 }
 252:
                mike = zulu;
 255:
                return mike;
 257:
                return entity;
            }
        };
        var _closure1_slot52 = entity;
        entity = function(argFoo, argBar) { // Original name: computeGuildExperimentDescriptor
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                golf = argFoo;
                foxtrot = argBar;
                entity = _closure1_slot40;
                romeo = undefined;
                tango = entity.bind(romeo)(foxtrot);
                zulu = _closure1_slot28;
                mike = global;
                entity = mike.HermesInternal;
                entity = entity.concat;
                kilo = '';
                entity = entity.bind(kilo)(tango);
                zulu = zulu[entity];
                entity = null;
                if(!(entity != zulu)) { _fun00046_ip = 634; continue _fun00045 }
 59:
                oscar = zulu.revision;
                verify = zulu.aaMode;
                tango = zulu.overrides;
                report = tango[golf];
                tango = zulu.triggerDebuggingEnabled;
                if(!(entity == report)) { _fun00046_ip = 560; continue _fun00045 }
 94:
                offset = _closure1_slot40;
                yankee = zulu.hashKey;
                backup = foxtrot;
                if(!(entity != yankee)) { _fun00046_ip = 114; continue _fun00045 }
 111:
                backup = yankee;
 114:
                mike = mike.HermesInternal;
                yankee = mike.concat;
                mike = ':';
                mike = yankee.bind(kilo)(backup, mike, golf);
                offset = offset.bind(romeo)(mike);
                mike = 10000;
                offset = offset % mike;
                yankee = _closure1_slot38;
                mike = zulu.overridesFormatted;
                if(!(entity == mike)) { _fun00046_ip = 169; continue _fun00045 }
 165:
                mike = new Array(0);
 169:
                kilo = yankee.bind(romeo)(mike);
                yankee = kilo.bind(romeo)();
                mike = yankee.done;
                backup = yankee;
                if(mike) { _fun00046_ip = 317; continue _fun00045 }
 192:
                yankee = _closure1_slot52;
                mike = backup.value;
                yankee = yankee.bind(romeo)(golf, mike, offset);
                if(!(entity === yankee)) { _fun00046_ip = 229; continue _fun00045 }
 212:
                sizing = kilo.bind(romeo)();
                mike = sizing.done;
                backup = sizing;
                if(mike) { _fun00046_ip = 317; continue _fun00045 }
 227:
                _fun00046_ip = 192; continue _fun00045;
 229:
                mike = {};
                backup = _closure1_slot11;
                backup = backup.GUILD;
                mike['type'] = backup;
                mike['guildId'] = golf;
                backup = zulu.revision;
                mike['revision'] = backup;
                mike['bucket'] = yankee;
                yankee = true;
                mike['override'] = yankee;
                mike['hashResult'] = offset;
                mike['triggerDebuggingEnabled'] = tango;
                yankee = zulu.assignmentSource;
                mike['assignmentSource'] = yankee;
                yankee = zulu.sessionId;
                mike['sessionId'] = yankee;
                yankee = zulu.loadedFromCache;
                mike['loadedFromCache'] = yankee;
                return mike;
 317:
                yankee = _closure1_slot52;
                mike = zulu.populations;
                yankee = yankee.bind(romeo)(golf, mike, offset);
                if(!(entity != yankee)) { _fun00046_ip = 558; continue _fun00045 }
 341:
                mike = zulu.holdoutName;
                if(!(entity != mike)) { _fun00046_ip = 470; continue _fun00045 }
 351:
                mike = zulu.holdoutBucket;
                if(!(entity != mike)) { _fun00046_ip = 470; continue _fun00045 }
 361:
                mike = zulu.holdoutName;
                if(!(mike !== foxtrot)) { _fun00046_ip = 470; continue _fun00045 }
 371:
                foxtrot = _closure1_slot53;
                mike = zulu.holdoutName;
                mike = foxtrot.bind(romeo)(golf, mike);
                backup = entity == mike;
                foxtrot = undefined;
                if(backup) { _fun00046_ip = 402; continue _fun00045 }
 396:
                foxtrot = mike.bucket;
 402:
                if(!(entity != foxtrot)) { _fun00046_ip = 470; continue _fun00045 }
 406:
                backup = mike.override;
                foxtrot = true;
                if(!(foxtrot !== backup)) { _fun00046_ip = 445; continue _fun00045 }
 418:
                backup = _closure1_slot46;
                foxtrot = {};
                kilo = zulu.holdoutName;
                foxtrot['experimentId'] = kilo;
                foxtrot['descriptor'] = mike;
                foxtrot = backup.bind(romeo)(foxtrot);
 445:
                foxtrot = entity == mike;
                romeo = undefined;
                if(foxtrot) { _fun00046_ip = 460; continue _fun00045 }
 454:
                romeo = mike.bucket;
 460:
                mike = zulu.holdoutBucket;
                if(!(romeo !== mike)) { _fun00046_ip = 556; continue _fun00045 }
 470:
                mike = {};
                romeo = _closure1_slot11;
                romeo = romeo.GUILD;
                mike['type'] = romeo;
                mike['guildId'] = golf;
                romeo = zulu.revision;
                mike['revision'] = romeo;
                mike['bucket'] = yankee;
                mike['hashResult'] = offset;
                mike['aaMode'] = verify;
                mike['triggerDebuggingEnabled'] = tango;
                verify = zulu.assignmentSource;
                mike['assignmentSource'] = verify;
                verify = zulu.sessionId;
                mike['sessionId'] = verify;
                zulu = zulu.loadedFromCache;
                mike['loadedFromCache'] = zulu;
                return mike;
 556:
                return entity;
 558:
                return entity;
 560:
                mike = _closure1_slot10;
                zulu = mike.NOT_ELIGIBLE;
                mike = null;
                if(!(report !== zulu)) { _fun00046_ip = 632; continue _fun00045 }
 576:
                zulu = {};
                options = _closure1_slot11;
                options = options.GUILD;
                zulu['type'] = options;
                zulu['guildId'] = golf;
                zulu['revision'] = oscar;
                zulu['bucket'] = report;
                report = true;
                zulu['override'] = report;
                report = -1;
                zulu['hashResult'] = report;
                zulu['triggerDebuggingEnabled'] = tango;
                mike = zulu;
 632:
                return mike;
 634:
                return entity;
            }
        };
        var _closure1_slot53 = entity;
        entity = function(argFoo) { // Original name: processGuildExperimentPopulationFromCache
            _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                kilo = argFoo;
                entity = {};
                foxtrot = kilo;
                verify = undefined;
                golf = null;
                oscar = undefined;
                report = undefined;
                for(offset in foxtrot)
 30:
                {
 42:
                    mike = offset;
                    source = kilo[mike];
                    zulu = {};
                    control = zulu;
                    tango = copyDataProperties(control, source);
                    entity[mike] = zulu;
                    tango = _closure1_slot38;
                    zulu = entity[mike];
                    zulu = zulu.populations;
                    sizing = tango.bind(verify)(zulu);
                    tango = sizing.bind(verify)();
                    zulu = tango.done;
                    if(zulu) { _fun00048_ip = 139; continue _fun00047 }
 93:
                    output = tango.value;
                    echo = output.rawFilterData;
                    result = echo.map;
                    zulu = _closure1_slot47;
                    zulu = result.bind(echo)(zulu);
                    output['filters'] = zulu;
                    output = sizing.bind(verify)();
                    zulu = output.done;
                    tango = output;
                    if(!zulu) { _fun00048_ip = 93; continue _fun00047 }
 139:
                    zulu = _closure1_slot38;
                    mike = entity[mike];
                    mike = mike.overridesFormatted;
                    if(!(golf == mike)) { _fun00048_ip = 161; continue _fun00047 }
 157:
                    mike = new Array(0);
 161:
                    tango = zulu.bind(verify)(mike);
                    zulu = tango.bind(verify)();
                    mike = zulu.done;
                    if(mike) { _fun00048_ip = 30; continue _fun00047 }
 181:
                    sizing = _closure1_slot38;
                    mike = zulu.value;
                    output = sizing.bind(verify)(mike);
                    result = output.bind(verify)();
                    mike = result.done;
                    sizing = result;
                    oscar = sizing;
                    if(mike) { _fun00048_ip = 262; continue _fun00047 }
 213:
                    result = sizing.value;
                    update = result.rawFilterData;
                    echo = update.map;
                    mike = _closure1_slot47;
                    mike = echo.bind(update)(mike);
                    result['filters'] = mike;
                    result = output.bind(verify)();
                    mike = result.done;
                    sizing = result;
                    oscar = sizing;
                    if(!mike) { _fun00048_ip = 213; continue _fun00047 }
 262:
                    sizing = tango.bind(verify)();
                    mike = sizing.done;
                    report = output;
                    zulu = sizing;
                    if(mike) { _fun00048_ip = 30; continue _fun00047 }
 283:
                    _fun00048_ip = 181; continue _fun00047;
                }
 285:
                return entity;
            }
        };
        var _closure1_slot54 = entity;
        entity = function(argFoo) { // Original name: handleOverlayInitialize
            _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                mike = argFoo;
                entity = mike.serializedExperimentStore;
                oscar = mike.user;
                tango = _closure1_slot32;
                mike = !tango;
                if(tango) { _fun00050_ip = 40; continue _fun00049 }
 29:
                report = _closure1_slot42;
                tango = undefined;
                mike = report.bind(tango)(oscar);
 40:
                if(!mike) { _fun00050_ip = 49; continue _fun00049 }
 43:
                mike = true;
                _closure1_slot32 = mike;
 49:
                mike = entity.hasLoadedExperiments;
                _closure1_slot22 = mike;
                mike = entity.trackedExposureExperiments;
                _closure1_slot23 = mike;
                mike = entity.loadedUserExperiments;
                _closure1_slot27 = mike;
                mike = entity.userExperimentOverrides;
                _closure1_slot30 = mike;
                mike = entity.guildExperimentOverrides;
                _closure1_slot31 = mike;
                mike = {};
                golf = _closure1_slot26;
                options = mike;
                tango = copyDataProperties(options, golf);
                report = entity.assignmentSource;
                tango = 'source';
                mike[tango] = report;
                report = entity.assignmentSessionId;
                tango = 'sessionId';
                mike[tango] = report;
                report = entity.assignmentFingerprint;
                tango = 'fingerprint';
                mike[tango] = report;
                _closure1_slot26 = mike;
                tango = _closure1_slot54;
                mike = entity.loadedGuildExperiments;
                entity = undefined;
                mike = tango.bind(entity)(mike);
                _closure1_slot28 = mike;
                mike = {};
                _closure1_slot29 = mike;
                return entity;
            }
        };
        var _closure1_slot55 = entity;
        entity = function() { // Original name: handleFetchFailure
            entity = true;
            _closure1_slot22 = entity;
            entity = undefined;
            return entity;
        };
        var _closure1_slot56 = entity;
        entity = function(argFoo) { // Original name: handleLogout
            _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                entity = argFoo;
                mike = entity.isSwitchingAccount;
                oscar = _closure1_slot0;
                entity = _closure1_slot2;
                report = 15;
                tango = entity[report];
                entity = undefined;
                tango = oscar.bind(entity)(tango);
                golf = tango.Storage;
                oscar = golf.remove;
                tango = _closure1_slot16;
                tango = oscar.bind(golf)(tango);
                if(mike) { _fun00052_ip = 168; continue _fun00051 }
 58:
                tango = _closure1_slot0;
                mike = _closure1_slot2;
                oscar = mike[report];
                oscar = tango.bind(entity)(oscar);
                options = oscar.Storage;
                golf = options.remove;
                oscar = _closure1_slot17;
                oscar = golf.bind(options)(oscar);
                oscar = mike[report];
                oscar = tango.bind(entity)(oscar);
                options = oscar.Storage;
                golf = options.remove;
                oscar = _closure1_slot18;
                oscar = golf.bind(options)(oscar);
                mike = mike[report];
                mike = tango.bind(entity)(mike);
                report = mike.Storage;
                tango = report.remove;
                mike = _closure1_slot19;
                mike = tango.bind(report)(mike);
                mike = {};
                _closure1_slot30 = mike;
                mike = {};
                _closure1_slot31 = mike;
 168:
                mike = {};
                _closure1_slot27 = mike;
                mike = {};
                verify = _closure1_slot26;
                offset = mike;
                tango = copyDataProperties(offset, verify);
                report = new Array(0);
                tango = 'rawUserExperiments';
                mike[tango] = report;
                _closure1_slot26 = mike;
                mike = {};
                _closure1_slot23 = mike;
                mike = false;
                _closure1_slot22 = mike;
                return entity;
            }
        };
        var _closure1_slot57 = entity;
        entity = function() { // Original name: handleLogin
            entity = false;
            _closure1_slot22 = entity;
            entity = {};
            _closure1_slot23 = entity;
            entity = {};
            _closure1_slot28 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 15;
            zulu = zulu[entity];
            entity = undefined;
            zulu = tango.bind(entity)(zulu);
            tango = zulu.Storage;
            zulu = tango.remove;
            mike = _closure1_slot16;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        var _closure1_slot58 = entity;
        entity = function() { // Original name: saveExperimentOverrides
            _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0: // try_start_0
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 15;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                tango = mike.Storage;
                zulu = tango.set;
                mike = _closure1_slot18;
                entity = _closure1_slot30;
                entity = zulu.bind(tango)(mike, entity);
 50: // try_end0
                _fun00054_ip = 131; continue _fun00053;
 52: // catch_target0
                CatchBlockStart(arg_register=4);
                tango = _closure1_slot21;
                zulu = tango.error;
                mike = 'Error saving user experiment overrides, unsaved data will be lost';
                mike = zulu.bind(tango)(mike, report);
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 12;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.track;
                entity = _closure1_slot13;
                mike = entity.EXPERIMENT_SAVE_EXPOSURE_FAILED;
                entity = {'module': 'discord_app', 'call': 'ExperimentStore.saveExperimentOverrides'};
                entity = zulu.bind(tango)(mike, entity);
 131: // try_start_1
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 15;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                tango = mike.Storage;
                zulu = tango.set;
                mike = _closure1_slot19;
                entity = _closure1_slot31;
                entity = zulu.bind(tango)(mike, entity);
 181: // try_end1
                _fun00054_ip = 262; continue _fun00053;
 183: // catch_target1
                CatchBlockStart(arg_register=4);
                tango = _closure1_slot21;
                zulu = tango.error;
                mike = 'Error saving guild experiment overrides, unsaved data will be lost';
                mike = zulu.bind(tango)(mike, report);
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 12;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.track;
                entity = _closure1_slot13;
                mike = entity.EXPERIMENT_SAVE_EXPOSURE_FAILED;
                entity = {'module': 'discord_app', 'call': 'ExperimentStore.saveExperimentOverrides'};
                entity = zulu.bind(tango)(mike, entity);
 262:
                entity = undefined;
                return entity;
            }
        };
        var _closure1_slot59 = entity;
        entity = function(argFoo) { // Original name: saveTrackedExposureExperiments
            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                report = argFoo;
 3: // try_start_0
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 15;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                tango = entity.Storage;
                zulu = tango.set;
                mike = _closure1_slot16;
                entity = {};
                oscar = _closure1_slot20;
                entity['v'] = oscar;
                entity['e'] = report;
                entity = zulu.bind(tango)(mike, entity);
 63: // try_end0
                _fun00056_ip = 144; continue _fun00055;
 65: // catch_target0
                CatchBlockStart(arg_register=4);
                tango = _closure1_slot21;
                zulu = tango.error;
                mike = 'Error saving tracked exposure experiments, unsaved data will be lost';
                mike = zulu.bind(tango)(mike, report);
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 12;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.track;
                entity = _closure1_slot13;
                mike = entity.EXPERIMENT_SAVE_EXPOSURE_FAILED;
                entity = {'module': 'discord_app', 'call': 'ExperimentStore.saveTrackedExposureExperiments'};
                entity = zulu.bind(tango)(mike, entity);
 144:
                entity = undefined;
                return entity;
            }
        };
        var _closure1_slot60 = entity;
        entity = function(argFoo) { // Original name: handleExperimentOverrideBucket
            _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                entity = argFoo;
                zulu = entity.experimentId;
                golf = entity.experimentBucket;
                options = entity.experimentType;
                entity = entity.skipCleanup;
                oscar = null;
                if(!(oscar == options)) { _fun00058_ip = 63; continue _fun00057 }
 35:
                mike = _closure1_slot25;
                tango = mike[zulu];
                report = oscar == tango;
                mike = undefined;
                if(report) { _fun00058_ip = 60; continue _fun00057 }
 55:
                mike = tango.type;
 60:
                options = mike;
 63:
                if(!(oscar != options)) { _fun00058_ip = 362; continue _fun00057 }
 70:
                if(!(oscar != golf)) { _fun00058_ip = 184; continue _fun00057 }
 74:
                mike = 'user';
                if(!(mike !== options)) { _fun00058_ip = 135; continue _fun00057 }
 82:
                tango = {};
                backup = _closure1_slot31;
                kilo = tango;
                report = copyDataProperties(kilo, backup);
                report = {};
                report['type'] = options;
                verify = 1;
                report['revision'] = verify;
                report['bucket'] = golf;
                verify = true;
                report['override'] = verify;
                tango[zulu] = report;
                _closure1_slot31 = tango;
                _fun00058_ip = 229; continue _fun00057;
 135:
                tango = {};
                backup = _closure1_slot30;
                kilo = tango;
                report = copyDataProperties(kilo, backup);
                report = {'type': null, 'revision': 1, 'population': 0, 'bucket': null, 'override': true};
                report['type'] = options;
                report['bucket'] = golf;
                tango[zulu] = report;
                _closure1_slot30 = tango;
                _fun00058_ip = 229; continue _fun00057;
 184:
                mike = {};
                backup = _closure1_slot30;
                kilo = mike;
                report = copyDataProperties(kilo, backup);
                _closure1_slot30 = mike;
                mike = delete mike[zulu];
                mike = {};
                backup = _closure1_slot31;
                kilo = mike;
                report = copyDataProperties(kilo, backup);
                _closure1_slot31 = mike;
                mike = delete mike[zulu];
 229:
                if(entity) { _fun00058_ip = 347; continue _fun00057 }
 232:
                entity = _closure1_slot30;
                tango = new Array(2);
                tango[0] = entity;
                entity = _closure1_slot31;
                tango[1] = entity;
                entity = tango.length;
                zulu = 0;
                entity = zulu < entity;
                mike = undefined;
                if(!entity) { _fun00058_ip = 347; continue _fun00057 }
 271:
                entity = tango[zulu];
                offset = entity;
                entity = mike;
                mike = entity;
                for(golf in offset)
 292:
                {
                    mike = entity;
 304:
                    romeo = golf;
                    foxtrot = _closure1_slot25;
                    foxtrot = foxtrot[romeo];
                    entity = romeo;
                    if(oscar != foxtrot) { _fun00058_ip = 292; continue _fun00057 }
 322:
                    foxtrot = _closure1_slot30;
                    foxtrot = delete foxtrot[romeo];
                    entity = romeo;
                    _fun00058_ip = 292; continue _fun00057;
                }
 335:
                zulu = zulu + 1;
                entity = tango.length;
                if(zulu < entity) { _fun00058_ip = 271; continue _fun00057 }
 347:
                mike = _closure1_slot59;
                entity = undefined;
                mike = mike.bind(entity)();
                return entity;
 362:
                entity = false;
                return entity;
            }
        };
        var _closure1_slot61 = entity;
        entity = function(argFoo) { // Original name: handleGuildChange
            _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                entity = argFoo;
                yankee = entity.guild;
                verify = _closure1_slot29;
                tango = ':';
                entity = undefined;
                zulu = 1;
                mike = 0;
                for(report in verify)
 34:
                {
 43:
                    foxtrot = report;
                    romeo = foxtrot.split;
                    backup = romeo.bind(foxtrot)(tango);
                    romeo = _closure1_slot8;
                    romeo = romeo.bind(entity)(backup, zulu);
                    backup = romeo[mike];
                    romeo = yankee.id;
                    if(romeo !== backup) { _fun00060_ip = 34; continue _fun00059 }
 79:
                    romeo = _closure1_slot29;
                    romeo = delete romeo[foxtrot];
                    _fun00060_ip = 34; continue _fun00059;
                }
 89:
                return entity;
            }
        };
        var _closure1_slot62 = entity;
        tango = global;
        verify = tango.Object;
        options = verify.defineProperty;
        report = {};
        yankee = true;
        report['value'] = yankee;
        entity = '__esModule';
        entity = options.bind(verify)(zulu, entity, report);
        entity = 0;
        report = golf[entity];
        entity = undefined;
        report = offset.bind(entity)(report);
        var _closure1_slot3 = report;
        report = 1;
        options = golf[report];
        options = offset.bind(entity)(options);
        var _closure1_slot4 = options;
        options = 2;
        options = golf[options];
        options = offset.bind(entity)(options);
        var _closure1_slot5 = options;
        options = 3;
        options = golf[options];
        options = offset.bind(entity)(options);
        var _closure1_slot6 = options;
        options = 4;
        options = golf[options];
        options = offset.bind(entity)(options);
        var _closure1_slot7 = options;
        options = 5;
        options = golf[options];
        options = offset.bind(entity)(options);
        var _closure1_slot8 = options;
        options = 6;
        options = golf[options];
        options = offset.bind(entity)(options);
        var _closure1_slot9 = options;
        options = 7;
        options = golf[options];
        verify = offset.bind(entity)(options);
        options = 8;
        options = golf[options];
        options = oscar.bind(entity)(options);
        romeo = options.ExperimentBuckets;
        var _closure1_slot10 = romeo;
        romeo = options.ExperimentTypes;
        var _closure1_slot11 = romeo;
        romeo = options.ExposureTypes;
        var _closure1_slot12 = romeo;
        romeo = options.TriggerDebuggingAAExperiments;
        options = 9;
        options = golf[options];
        options = oscar.bind(entity)(options);
        foxtrot = options.AnalyticEvents;
        var _closure1_slot13 = foxtrot;
        foxtrot = options.EMPTY_STRING_SNOWFLAKE_ID;
        var _closure1_slot14 = foxtrot;
        options = options.UserFlags;
        var _closure1_slot15 = options;
        options = 'scientist:triggered';
        var _closure1_slot16 = options;
        options = 'exerimentOverrides';
        var _closure1_slot17 = options;
        options = 'userExperimentOverrides';
        var _closure1_slot18 = options;
        options = 'guildExperimentOverrides';
        var _closure1_slot19 = options;
        var _closure1_slot20 = report;
        options = 10;
        options = golf[options];
        offset = offset.bind(entity)(options);
        options = offset.prototype;
        foxtrot = Object.create(options, {constructor: {value: offset}});
        options = 'ExperimentStore';
        output = foxtrot;
        sizing = options;
        offset = new output[offset](sizing, kilo);
        offset = offset instanceof Object ? offset : foxtrot;
        var _closure1_slot21 = offset;
        offset = false;
        var _closure1_slot22 = offset;
        offset = {};
        var _closure1_slot23 = offset;
        offset = tango.Map;
        foxtrot = offset.prototype;
        foxtrot = Object.create(foxtrot, {constructor: {value: offset}});
        output = foxtrot;
        offset = new output[offset](sizing);
        offset = offset instanceof Object ? offset : foxtrot;
        var _closure1_slot24 = offset;
        offset = {};
        var _closure1_slot25 = offset;
        offset = {};
        foxtrot = new Array(0);
        offset['rawUserExperiments'] = foxtrot;
        foxtrot = new Array(0);
        offset['rawGuildExperiments'] = foxtrot;
        var _closure1_slot26 = offset;
        offset = {};
        var _closure1_slot27 = offset;
        offset = {};
        var _closure1_slot28 = offset;
        offset = {};
        var _closure1_slot29 = offset;
        offset = {};
        var _closure1_slot30 = offset;
        offset = {};
        var _closure1_slot31 = offset;
        offset = tango.window;
        offset = offset.GLOBAL_ENV;
        foxtrot = offset.RELEASE_CHANNEL;
        offset = 'staging';
        offset = offset === foxtrot;
        if(offset) { _fun00002_ip = 735; continue _fun00001 }
 733:
        offset = true;
 735:
        var _closure1_slot32 = offset;
        offset = {};
        var _closure1_slot33 = offset;
        yankee = romeo.map;
        offset = function(argFoo) {
            zulu = _closure1_slot40;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        offset = yankee.bind(romeo)(offset);
        var _closure1_slot34 = offset;
        offset = 604800000;
        var _closure1_slot35 = offset;
        offset = tango.Date;
        tango = offset.now;
        tango = tango.bind(offset)();
        tango = function(argFoo) {
            tango = function() { // Original name: ExperimentStore
                oscar = this;
                entity = _closure1_slot3;
                report = _closure2_slot0;
                tango = undefined;
                entity = entity.bind(tango)(oscar, report);
                zulu = _closure1_slot36;
                golf = {};
                entity = _closure1_slot57;
                golf['LOGOUT'] = entity;
                entity = _closure1_slot58;
                golf['LOGIN_SUCCESS'] = entity;
                entity = _closure1_slot50;
                golf['CONNECTION_OPEN'] = entity;
                golf['EXPERIMENTS_FETCH_SUCCESS'] = entity;
                entity = _closure1_slot55;
                golf['OVERLAY_INITIALIZE'] = entity;
                entity = _closure1_slot56;
                golf['EXPERIMENTS_FETCH_FAILURE'] = entity;
                entity = _closure1_slot61;
                golf['EXPERIMENT_OVERRIDE_BUCKET'] = entity;
                entity = _closure1_slot62;
                golf['GUILD_CREATE'] = entity;
                golf['GUILD_UPDATE'] = entity;
                entity = new Array(2);
                entity[0] = golf;
                options = _closure1_slot0;
                verify = _closure1_slot2;
                golf = 18;
                golf = verify[golf];
                golf = options.bind(tango)(golf);
                golf = golf.DispatchBand;
                golf = golf.Early;
                entity[1] = golf;
                entity = zulu.bind(tango)(oscar, report, entity);
                mike = _closure1_slot46;
                entity['trackExposure'] = mike;
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
                _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                    zulu = this;
                    report = _closure1_slot0;
                    entity = _closure1_slot2;
                    oscar = 15;
                    tango = entity[oscar];
                    entity = undefined;
                    tango = report.bind(entity)(tango);
                    golf = tango.Storage;
                    report = golf.get;
                    tango = _closure1_slot16;
                    tango = report.bind(golf)(tango);
                    yankee = null;
                    if(!(yankee != tango)) { _fun00062_ip = 169; continue _fun00061 }
 54:
                    golf = tango.v;
                    report = _closure1_slot20;
                    if(!(golf === report)) { _fun00062_ip = 169; continue _fun00061 }
 67:
                    report = tango.e;
                    tango = global;
                    golf = tango.Date;
                    tango = golf.now;
                    kilo = tango.bind(golf)();
                    foxtrot = report;
                    tango = false;
                    golf = false;
                    for(verify in foxtrot)
 104:
                    {
                        golf = tango;
 116:
                        sizing = verify;
                        output = report[sizing];
                        output = output.time;
                        result = kilo - output;
                        output = _closure1_slot35;
                        if(!(result > output)) { _fun00062_ip = 104; continue _fun00061 }
 141:
                        sizing = delete report[sizing];
                        tango = true;
                        _fun00062_ip = 104; continue _fun00061;
                    }
 149:
                    tango = report;
                    if(!golf) { _fun00062_ip = 171; continue _fun00061 }
 155:
                    golf = _closure1_slot60;
                    golf = golf.bind(entity)(report);
                    tango = report;
                    _fun00062_ip = 171; continue _fun00061;
 169:
                    tango = {};
 171:
                    _closure1_slot23 = tango;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    tango = tango[oscar];
                    tango = report.bind(entity)(tango);
                    golf = tango.Storage;
                    report = golf.get;
                    tango = _closure1_slot17;
                    tango = report.bind(golf)(tango);
                    if(!(yankee == tango)) { _fun00062_ip = 218; continue _fun00061 }
 216:
                    tango = {};
 218:
                    offset = new Array(3);
                    offset[0] = tango;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    tango = tango[oscar];
                    tango = report.bind(entity)(tango);
                    golf = tango.Storage;
                    report = golf.get;
                    tango = _closure1_slot18;
                    tango = report.bind(golf)(tango);
                    if(!(yankee == tango)) { _fun00062_ip = 269; continue _fun00061 }
 267:
                    tango = {};
 269:
                    offset[1] = tango;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    tango = tango[oscar];
                    tango = report.bind(entity)(tango);
                    oscar = tango.Storage;
                    report = oscar.get;
                    tango = _closure1_slot19;
                    tango = report.bind(oscar)(tango);
                    if(!(yankee == tango)) { _fun00062_ip = 316; continue _fun00061 }
 314:
                    tango = {};
 316:
                    offset[2] = tango;
                    tango = {};
                    _closure1_slot30 = tango;
                    tango = {};
                    _closure1_slot31 = tango;
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 16;
                    tango = oscar[tango];
                    oscar = report.bind(entity)(tango);
                    report = oscar.isEmpty;
                    verify = 0;
                    tango = offset[verify];
                    tango = report.bind(oscar)(tango);
                    options = !tango;
                    report = offset.length;
                    report = verify < report;
                    romeo = true;
                    golf = undefined;
                    oscar = undefined;
                    tango = options;
                    if(!report) { _fun00062_ip = 638; continue _fun00061 }
 396:
                    source = offset[verify];
                    echo = source;
                    kilo = options;
                    backup = golf;
                    report = oscar;
                    foxtrot = kilo;
                    golf = backup;
                    oscar = report;
                    for(sizing in echo)
 432:
                    {
                        sequence = kilo;
                        golf = backup;
                        oscar = report;
                        foxtrot = sequence;
 456:
                        vacuum = sizing;
                        control = source[vacuum];
                        if(!(yankee != control)) { _fun00062_ip = 600; continue _fun00061 }
 470:
                        record = control.type;
                        config = _closure1_slot11;
                        config = config.USER;
                        if(!(record !== config)) { _fun00062_ip = 508; continue _fun00061 }
 489:
                        record = control.type;
                        config = _closure1_slot11;
                        config = config.GUILD;
                        if(!(record === config)) { _fun00062_ip = 600; continue _fun00061 }
 508:
                        config = control.bucket;
                        if(!(yankee != config)) { _fun00062_ip = 600; continue _fun00061 }
 518:
                        config = control.override;
                        if(!(romeo === config)) { _fun00062_ip = 600; continue _fun00061 }
 528:
                        config = control.fromCookie;
                        if(config) { _fun00062_ip = 600; continue _fun00061 }
 537:
                        record = control.type;
                        config = _closure1_slot11;
                        config = config.USER;
                        if(!(record !== config)) { _fun00062_ip = 578; continue _fun00061 }
 556:
                        config = _closure1_slot31;
                        config[vacuum] = control;
                        kilo = sequence;
                        backup = vacuum;
                        report = control;
                        _fun00062_ip = 432; continue _fun00061;
 578:
                        config = _closure1_slot30;
                        config[vacuum] = control;
                        kilo = sequence;
                        backup = vacuum;
                        report = control;
                        _fun00062_ip = 432; continue _fun00061;
 600:
                        sequence = delete source[vacuum];
                        kilo = true;
                        backup = vacuum;
                        report = control;
                        _fun00062_ip = 432; continue _fun00061;
                    }
 617:
                    verify = verify + 1;
                    report = offset.length;
                    options = foxtrot;
                    tango = options;
                    if(verify < report) { _fun00062_ip = 396; continue _fun00061 }
 638:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    report = 17;
                    report = golf[report];
                    oscar = oscar.bind(entity)(report);
                    report = oscar.getBuildOverrideExperiments;
                    yankee = report.bind(oscar)();
                    verify = yankee;
                    report = tango;
                    tango = report;
                    for(oscar in verify)
 685:
                    {
                        tango = report;
 697:
                        kilo = oscar;
                        backup = _closure1_slot30;
                        foxtrot = {'type': null, 'revision': 1, 'population': 0, 'override': true, 'fromCookie': true, 'assignmentSource': 'override'};
                        sizing = _closure1_slot11;
                        sizing = sizing.USER;
                        foxtrot['type'] = sizing;
                        sizing = yankee[kilo];
                        foxtrot['bucket'] = sizing;
                        backup[kilo] = foxtrot;
                        backup = _closure1_slot31;
                        foxtrot = {'type': null, 'revision': 1, 'override': true, 'fromCookie': true, 'assignmentSource': 'override'};
                        sizing = _closure1_slot11;
                        sizing = sizing.GUILD;
                        foxtrot['type'] = sizing;
                        sizing = yankee[kilo];
                        foxtrot['bucket'] = sizing;
                        backup[kilo] = foxtrot;
                        report = true;
                        _fun00062_ip = 685; continue _fun00061;
                    }
 790:
                    if(!tango) { _fun00062_ip = 801; continue _fun00061 }
 793:
                    tango = _closure1_slot59;
                    tango = tango.bind(entity)();
 801:
                    tango = zulu.waitFor;
                    mike = _closure1_slot9;
                    mike = tango.bind(zulu)(mike);
                    mike = zulu.loadCache;
                    mike = mike.bind(zulu)();
                    return entity;
                }
            };
            report['value'] = entity;
            entity = new Array(20);
            entity[0] = report;
            report = {};
            golf = 'loadCache';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
                    tango = this;
                    zulu = tango.readSnapshot;
                    mike = _closure2_slot0;
                    mike = mike.LATEST_SNAPSHOT_VERSION;
                    zulu = zulu.bind(tango)(mike);
                    mike = null;
                    if(!(mike != zulu)) { _fun00064_ip = 171; continue _fun00063 }
 38:
                    mike = 'loadedUserExperiments';
                    tango = mike in zulu;
                    if(tango) { _fun00064_ip = 68; continue _fun00063 }
 52:
                    oscar = _closure1_slot51;
                    report = undefined;
                    tango = true;
                    tango = oscar.bind(report)(zulu, tango);
                    _fun00064_ip = 171; continue _fun00063;
 68:
                    tango = zulu.loadedUserExperiments;
                    _closure1_slot27 = tango;
                    report = _closure1_slot54;
                    tango = zulu.loadedGuildExperiments;
                    zulu = undefined;
                    zulu = report.bind(zulu)(tango);
                    _closure1_slot28 = zulu;
                    zulu = global;
                    oscar = zulu.Object;
                    report = oscar.values;
                    tango = _closure1_slot27;
                    oscar = report.bind(oscar)(tango);
                    report = oscar.forEach;
                    tango = function(argFoo) {
                        entity = true;
                        mike = argFoo;
                        mike['loadedFromCache'] = entity;
                        return entity;
                    };
                    tango = report.bind(oscar)(tango);
                    tango = zulu.Object;
                    zulu = tango.values;
                    mike = _closure1_slot28;
                    zulu = zulu.bind(tango)(mike);
                    mike = zulu.forEach;
                    entity = function(argFoo) {
                        entity = true;
                        mike = argFoo;
                        mike['loadedFromCache'] = entity;
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
 171:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[1] = report;
            report = {};
            golf = 'takeSnapshot';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = {};
                mike = _closure2_slot0;
                mike = mike.LATEST_SNAPSHOT_VERSION;
                entity['version'] = mike;
                mike = {};
                tango = _closure1_slot26;
                report = mike;
                zulu = copyDataProperties(report, tango);
                entity['data'] = mike;
                return entity;
            };
            report['value'] = golf;
            entity[2] = report;
            report = {};
            golf = 'hasLoadedExperiments';
            report['key'] = golf;
            golf = function() { // Original name: get
                entity = _closure1_slot22;
                return entity;
            };
            report['get'] = golf;
            entity[3] = report;
            report = {};
            golf = 'hasRegisteredExperiment';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                mike = _closure1_slot25;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                entity = entity != mike;
                return entity;
            };
            report['value'] = golf;
            entity[4] = report;
            report = {};
            golf = 'getUserExperimentDescriptor';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                    report = argFoo;
                    entity = _closure1_slot32;
                    if(!entity) { _fun00066_ip = 27; continue _fun00065 }
 13:
                    entity = _closure1_slot30;
                    entity = entity[report];
                    zulu = null;
                    if(!(zulu == entity)) { _fun00066_ip = 70; continue _fun00065 }
 27:
                    tango = _closure1_slot40;
                    zulu = undefined;
                    report = tango.bind(zulu)(report);
                    zulu = _closure1_slot27;
                    mike = global;
                    mike = mike.HermesInternal;
                    tango = mike.concat;
                    mike = '';
                    mike = tango.bind(mike)(report);
                    mike = zulu[mike];
                    return mike;
 70:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[5] = report;
            report = {};
            golf = 'getGuildExperimentDescriptor';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
                    golf = argFoo;
                    oscar = argBar;
                    zulu = null;
                    if(!(zulu == oscar)) { _fun00068_ip = 19; continue _fun00067 }
 12:
                    oscar = _closure1_slot14;
 19:
                    entity = _closure1_slot31;
                    entity = entity[golf];
                    tango = _closure1_slot32;
                    if(!tango) { _fun00068_ip = 41; continue _fun00067 }
 37:
                    if(!(zulu == entity)) { _fun00068_ip = 112; continue _fun00067 }
 41:
                    zulu = global;
                    zulu = zulu.HermesInternal;
                    report = zulu.concat;
                    tango = '';
                    zulu = ':';
                    zulu = report.bind(tango)(oscar, zulu, golf);
                    tango = _closure1_slot29;
                    tango = zulu in tango;
                    if(tango) { _fun00068_ip = 102; continue _fun00067 }
 80:
                    report = _closure1_slot53;
                    tango = undefined;
                    tango = report.bind(tango)(oscar, golf);
                    report = _closure1_slot29;
                    report[zulu] = tango;
                    return tango;
 102:
                    mike = _closure1_slot29;
                    mike = mike[zulu];
                    return mike;
 112:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[6] = report;
            report = {};
            golf = 'getUserExperimentBucket';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                    zulu = this;
                    mike = zulu.getUserExperimentDescriptor;
                    entity = argFoo;
                    mike = mike.bind(zulu)(entity);
                    entity = null;
                    if(!(entity == mike)) { _fun00070_ip = 38; continue _fun00069 }
 23:
                    entity = _closure1_slot10;
                    entity = entity.NOT_ELIGIBLE;
                    _fun00070_ip = 44; continue _fun00069;
 38:
                    entity = mike.bucket;
 44:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[7] = report;
            report = {};
            golf = 'getGuildExperimentBucket';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
                    tango = this;
                    zulu = tango.getGuildExperimentDescriptor;
                    mike = argFoo;
                    entity = argBar;
                    mike = zulu.bind(tango)(mike, entity);
                    entity = null;
                    if(!(entity == mike)) { _fun00072_ip = 42; continue _fun00071 }
 27:
                    entity = _closure1_slot10;
                    entity = entity.NOT_ELIGIBLE;
                    _fun00072_ip = 48; continue _fun00071;
 42:
                    entity = mike.bucket;
 48:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[8] = report;
            report = {};
            golf = 'getAllUserExperimentDescriptors';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = _closure1_slot27;
                return entity;
            };
            report['value'] = golf;
            entity[9] = report;
            report = {};
            golf = 'getGuildExperiments';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = _closure1_slot28;
                return entity;
            };
            report['value'] = golf;
            entity[10] = report;
            report = {};
            golf = 'getLoadedUserExperiment';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                mike = _closure1_slot27;
                tango = _closure1_slot40;
                zulu = undefined;
                entity = argFoo;
                entity = tango.bind(zulu)(entity);
                entity = mike[entity];
                return entity;
            };
            report['value'] = golf;
            entity[11] = report;
            report = {};
            golf = 'getLoadedGuildExperiment';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                mike = _closure1_slot28;
                tango = _closure1_slot40;
                zulu = undefined;
                entity = argFoo;
                entity = tango.bind(zulu)(entity);
                entity = mike[entity];
                return entity;
            };
            report['value'] = golf;
            entity[12] = report;
            report = {};
            golf = 'getRecentExposures';
            report['key'] = golf;
            golf = function(argFoo, argBar) { // Original name: value
                mike = global;
                zulu = mike.HermesInternal;
                golf = zulu.concat;
                romeo = '';
                yankee = argFoo;
                tango = '|';
                verify = argBar;
                offset = tango;
                options = tango;
                zulu = romeo[golf](yankee, offset, verify, options, golf);
                var _closure3_slot0 = zulu;
                tango = mike.Object;
                zulu = tango.entries;
                mike = _closure1_slot23;
                tango = zulu.bind(tango)(mike);
                zulu = tango.filter;
                mike = function(argFoo) {
                    _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
                        mike = argFoo;
                        entity = mike[Symbol.iterator];
                        mike = entity().next;
                        tango = mike().value;
                        mike = entity;
                        zulu = undefined;
                        mike = mike === zulu;
                        if(mike) { _fun00074_ip = 25; continue _fun00073 }
 22:
                        zulu = tango;
 25:
                        if(mike) { _fun00074_ip = 31; continue _fun00073 }
 28:
                        entity.return();
 31:
                        mike = zulu.startsWith;
                        entity = _closure3_slot0;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    }
                };
                zulu = zulu.bind(tango)(mike);
                mike = zulu.map;
                entity = function(argFoo) {
                    _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
                        golf = argFoo;
                        mike = golf[Symbol.iterator];
                        golf = mike().next;
                        verify = undefined;
                        zulu = undefined;
                        oscar = undefined;
                        options = golf().value;
                        offset = mike;
                        offset = offset === verify;
                        zulu = offset;
                        if(offset) { _fun00076_ip = 32; continue _fun00075 }
 29:
                        oscar = options;
 32:
                        tango = oscar;
                        oscar = undefined;
                        options = zulu;
                        if(options) { _fun00076_ip = 63; continue _fun00075 }
 43:
                        golf = golf().value;
                        options = mike;
                        options = options === verify;
                        zulu = options;
                        if(options) { _fun00076_ip = 63; continue _fun00075 }
 60:
                        oscar = golf;
 63: // try_start_0
                        report = oscar.time;
 69: // try_end0
                        oscar = zulu;
                        if(oscar) { _fun00076_ip = 78; continue _fun00075 }
 75:
                        mike.return();
 78:
                        options = tango;
                        golf = options.replace;
                        oscar = _closure3_slot0;
                        tango = '';
                        oscar = golf.bind(options)(oscar, tango);
                        tango = new Array(2);
                        tango[0] = oscar;
                        tango[1] = report;
                        return tango;
 117: // catch_target0
                        CatchBlockStart(arg_register=0);
                        _fun00076_ip = 123; continue _fun00075;
 121:
                        CatchBlockStart(arg_register=0);
 123:
                        if(zulu) { _fun00076_ip = 129; continue _fun00075 }
 126:
                        mike.return();
 129:
                        throw entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report['value'] = golf;
            entity[13] = report;
            report = {};
            golf = 'getRegisteredExperiments';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = _closure1_slot25;
                return entity;
            };
            report['value'] = golf;
            entity[14] = report;
            report = {};
            golf = 'getAllExperimentOverrideDescriptors';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
                    entity = _closure1_slot32;
                    mike = {};
                    if(entity) { _fun00078_ip = 17; continue _fun00077 }
 12:
                    entity = mike;
                    _fun00078_ip = 42; continue _fun00077;
 17:
                    report = _closure1_slot30;
                    oscar = mike;
                    tango = copyDataProperties(oscar, report);
                    report = _closure1_slot31;
                    oscar = mike;
                    zulu = copyDataProperties(oscar, report);
                    entity = mike;
 42:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[15] = report;
            report = {};
            golf = 'getExperimentOverrideDescriptor';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
                    tango = argFoo;
                    mike = _closure1_slot32;
                    report = null;
                    entity = null;
                    if(!mike) { _fun00080_ip = 40; continue _fun00079 }
 17:
                    mike = _closure1_slot30;
                    mike = mike[tango];
                    if(!(report == mike)) { _fun00080_ip = 37; continue _fun00079 }
 29:
                    zulu = _closure1_slot31;
                    mike = zulu[tango];
 37:
                    entity = mike;
 40:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[16] = report;
            report = {};
            golf = 'getAllExperimentAssignments';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00081: for(var _fun00082_ip = 0; ; ) switch(_fun00082_ip) {
 0:
                    entity = {};
                    verify = {};
                    var _closure3_slot0 = verify;
                    golf = global;
                    yankee = golf.Object;
                    offset = yankee.keys;
                    golf = _closure1_slot25;
                    offset = offset.bind(yankee)(golf);
                    golf = offset.forEach;
                    mike = function(argFoo) {
                        tango = argFoo;
                        zulu = _closure3_slot0;
                        report = _closure1_slot40;
                        entity = global;
                        entity = entity.HermesInternal;
                        mike = entity.concat;
                        entity = '';
                        mike = mike.bind(entity)(tango);
                        entity = undefined;
                        mike = report.bind(entity)(mike);
                        zulu[mike] = tango;
                        return entity;
                    };
                    mike = golf.bind(offset)(mike);
                    report = _closure1_slot27;
                    golf = null;
                    for(mike in report)
 64:
                    {
 73:
                        romeo = mike;
                        yankee = verify[romeo];
                        if(golf == yankee) { _fun00082_ip = 64; continue _fun00081 }
 84:
                        offset = _closure1_slot27;
                        offset = offset[romeo];
                        offset = offset.bucket;
                        entity[yankee] = offset;
                        _fun00082_ip = 64; continue _fun00081;
                    }
 104:
                    report = _closure1_slot29;
                    for(mike in report)
 116:
                    {
 125:
                        offset = mike;
                        verify = _closure1_slot29;
                        verify = verify[offset];
                        if(golf == verify) { _fun00082_ip = 116; continue _fun00081 }
 140:
                        verify = verify.bucket;
                        entity[offset] = verify;
                        _fun00082_ip = 116; continue _fun00081;
                    }
 152:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[17] = report;
            report = {};
            golf = 'getSerializedState';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun00083: for(var _fun00084_ip = 0; ; ) switch(_fun00084_ip) {
 0:
                    zulu = {};
                    yankee = _closure1_slot28;
                    golf = global;
                    oscar = undefined;
                    for(options in yankee)
 21:
                    {
 30:
                        entity = options;
                        foxtrot = golf.JSON;
                        report = foxtrot.parse;
                        kilo = golf.JSON;
                        backup = kilo.stringify;
                        tango = _closure1_slot28;
                        tango = tango[entity];
                        tango = backup.bind(kilo)(tango);
                        tango = report.bind(foxtrot)(tango);
                        zulu[entity] = tango;
                        tango = _closure1_slot38;
                        entity = zulu[entity];
                        entity = entity.populations;
                        report = tango.bind(oscar)(entity);
                        tango = report.bind(oscar)();
                        entity = tango.done;
                        if(entity) { _fun00084_ip = 21; continue _fun00083 }
 110:
                        foxtrot = tango.value;
                        entity = new Array(0);
                        foxtrot['filters'] = entity;
                        foxtrot = report.bind(oscar)();
                        entity = foxtrot.done;
                        tango = foxtrot;
                        if(entity) { _fun00084_ip = 21; continue _fun00083 }
 140:
                        _fun00084_ip = 110; continue _fun00083;
                    }
 142:
                    entity = {};
                    tango = _closure1_slot22;
                    entity['hasLoadedExperiments'] = tango;
                    tango = _closure1_slot23;
                    entity['trackedExposureExperiments'] = tango;
                    tango = _closure1_slot27;
                    entity['loadedUserExperiments'] = tango;
                    entity['loadedGuildExperiments'] = zulu;
                    zulu = _closure1_slot30;
                    entity['userExperimentOverrides'] = zulu;
                    zulu = _closure1_slot31;
                    entity['guildExperimentOverrides'] = zulu;
                    zulu = _closure1_slot26;
                    zulu = zulu.source;
                    entity['assignmentSource'] = zulu;
                    zulu = _closure1_slot26;
                    zulu = zulu.sessionId;
                    entity['assignmentSessionId'] = zulu;
                    mike = _closure1_slot26;
                    mike = mike.fingerprint;
                    entity['assignmentFingerprint'] = mike;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[18] = report;
            report = {};
            golf = 'hasExperimentTrackedExposure';
            report['key'] = golf;
            oscar = function(argFoo, argBar, argBaz, argCorge) { // Original name: value
                report = argBar;
                tango = _closure1_slot45;
                options = _closure1_slot43;
                zulu = undefined;
                romeo = argFoo;
                offset = argBaz;
                verify = argCorge;
                foxtrot = undefined;
                yankee = report;
                mike = foxtrot[options](romeo, yankee, offset, verify, options);
                entity = _closure1_slot44;
                entity = entity.bind(zulu)(report);
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            report['value'] = oscar;
            entity[19] = report;
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        };
        tango = tango.bind(entity)(verify);
        tango['displayName'] = options;
        tango['LATEST_SNAPSHOT_VERSION'] = report;
        report = tango.prototype;
        report = Object.create(report, {constructor: {value: tango}});
        output = report;
        tango = new output[tango](sizing);
        tango = tango instanceof Object ? tango : report;
        report = 19;
        report = golf[report];
        golf = oscar.bind(entity)(report);
        oscar = golf.fileFinishedImporting;
        report = 'modules/experiments/ExperimentStore.tsx';
        report = oscar.bind(golf)(report);
        zulu['default'] = tango;
        mike = function(argFoo) { // Original name: registerExperiment
            entity = argFoo;
            zulu = entity.experimentId;
            options = entity.experimentType;
            golf = entity.title;
            oscar = entity.description;
            report = entity.buckets;
            tango = entity.commonTriggerPoint;
            mike = _closure1_slot25;
            entity = {};
            entity['type'] = options;
            entity['title'] = golf;
            entity['description'] = oscar;
            entity['buckets'] = report;
            entity['commonTriggerPoint'] = tango;
            mike[zulu] = entity;
            entity = undefined;
            return entity;
        };
        zulu['registerExperiment'] = mike;
        return entity;
    }
})();