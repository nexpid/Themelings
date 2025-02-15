// app/modules/debug/serializeAppStartLogs.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = tango;
    entity = function(argFoo) { // Original name: getDisplayName
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            zulu = mike.tag;
            entity = null;
            if(!(entity != zulu)) { _fun00002_ip = 54; continue _fun00001 }
 14:
            oscar = mike.label;
            report = mike.tag;
            entity = global;
            entity = entity.HermesInternal;
            tango = entity.concat;
            zulu = '';
            entity = ' ';
            entity = tango.bind(zulu)(oscar, entity, report);
            _fun00002_ip = 59; continue _fun00001;
 54:
            entity = mike.label;
 59:
            mike = entity.includes;
            report = '_START';
            mike = mike.bind(entity)(report);
            tango = entity;
            entity = tango;
            if(!mike) { _fun00002_ip = 109; continue _fun00001 }
 84:
            zulu = tango.replace;
            mike = '';
            zulu = zulu.bind(tango)(report, mike);
            mike = 'Start ';
            entity = mike + zulu;
 109:
            mike = entity.includes;
            report = '_END';
            mike = mike.bind(entity)(report);
            tango = entity;
            entity = tango;
            if(!mike) { _fun00002_ip = 159; continue _fun00001 }
 134:
            zulu = tango.replace;
            mike = '';
            zulu = zulu.bind(tango)(report, mike);
            mike = 'Finish ';
            entity = mike + zulu;
 159:
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 3;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/debug/serializeAppStartLogs.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: serializeAppStartLogs
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = arguments[1];
            mike = arguments[2];
            tango = argFoo;
            var _closure2_slot0 = tango;
            tango = undefined;
            if(!(zulu === tango)) { _fun00004_ip = 23; continue _fun00003 }
 21:
            zulu = true;
 23:
            var _closure2_slot1 = zulu;
            if(!(mike === tango)) { _fun00004_ip = 33; continue _fun00003 }
 31:
            mike = true;
 33:
            var _closure2_slot2 = mike;
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 0;
            mike = report[mike];
            mike = zulu.bind(tango)(mike);
            zulu = mike.logGroups;
            mike = zulu.map;
            entity = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = argFoo;
                    report = mike.index;
                    zulu = mike.timestamp;
                    yankee = mike.logs;
                    offset = mike.nativeLogs;
                    oscar = mike.serverTrace;
                    mike = 0;
                    tango = zulu;
                    if(!(mike === report)) { _fun00006_ip = 115; continue _fun00005 }
 43:
                    options = _closure1_slot1;
                    golf = _closure1_slot2;
                    mike = 1;
                    golf = golf[mike];
                    mike = undefined;
                    verify = options.bind(mike)(golf);
                    options = verify.find;
                    golf = function(argFoo) {
                        entity = argFoo;
                        zulu = entity.log;
                        mike = zulu.indexOf;
                        entity = 'Logger loaded';
                        mike = mike.bind(zulu)(entity);
                        entity = 0;
                        entity = mike >= entity;
                        return entity;
                    };
                    options = options.bind(verify)(yankee, golf);
                    golf = null;
                    verify = golf == options;
                    if(verify) { _fun00006_ip = 101; continue _fun00005 }
 95:
                    mike = options.timestamp;
 101:
                    if(!(golf == mike)) { _fun00006_ip = 112; continue _fun00005 }
 105:
                    mike = _closure2_slot0;
 112:
                    tango = mike;
 115:
                    backup = _closure2_slot1;
                    foxtrot = _closure2_slot2;
                    mike = function(argFoo, argBar, argBaz, argCorge) { // Original name: joinLogs
                        zulu = argFoo;
                        report = argBar;
                        mike = argBaz;
                        var _closure4_slot1 = mike;
                        mike = argCorge;
                        var _closure4_slot2 = mike;
                        mike = zulu.slice;
                        zulu = mike.bind(zulu)();
                        var _closure4_slot0 = zulu;
                        mike = global;
                        oscar = mike.Set;
                        tango = report.map;
                        mike = _closure1_slot3;
                        golf = tango.bind(report)(mike);
                        tango = oscar.prototype;
                        tango = Object.create(tango, {constructor: {value: oscar}});
                        options = tango;
                        mike = new options[oscar](golf, oscar);
                        mike = mike instanceof Object ? mike : tango;
                        var _closure4_slot3 = mike;
                        mike = '';
                        var _closure4_slot4 = mike;
                        mike = new Array(0);
                        var _closure4_slot5 = mike;
                        tango = report.forEach;
                        mike = function(argFoo) {
                            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                golf = argFoo;
                                mike = _closure1_slot3;
                                entity = undefined;
                                oscar = mike.bind(entity)(golf);
                                yankee = _closure4_slot1;
                                if(yankee) { _fun00008_ip = 38; continue _fun00007 }
 27:
                                zulu = golf.autoGenerated;
                                yankee = !zulu;
 38:
                                zulu = oscar.startsWith;
                                backup = 'Start ';
                                zulu = zulu.bind(oscar)(backup);
                                if(!zulu) { _fun00008_ip = 77; continue _fun00007 }
 58:
                                report = oscar.includes;
                                tango = 'RUN_JS_BUNDLE';
                                tango = report.bind(oscar)(tango);
                                zulu = !tango;
 77:
                                if(!zulu) { _fun00008_ip = 111; continue _fun00007 }
 80:
                                options = _closure4_slot3;
                                report = options.has;
                                verify = oscar.replace;
                                tango = 'Finish ';
                                tango = verify.bind(oscar)(backup, tango);
                                zulu = report.bind(options)(tango);
 111:
                                tango = oscar.startsWith;
                                foxtrot = 'Finish ';
                                tango = tango.bind(oscar)(foxtrot);
                                options = 0;
                                verify = 0;
                                report = yankee;
                                if(!tango) { _fun00008_ip = 330; continue _fun00007 }
 141:
                                offset = oscar.includes;
                                tango = 'RUN_JS_BUNDLE';
                                tango = offset.bind(oscar)(tango);
                                verify = 0;
                                report = yankee;
                                if(tango) { _fun00008_ip = 330; continue _fun00007 }
 168:
                                romeo = _closure4_slot3;
                                offset = romeo.has;
                                tango = oscar.replace;
                                tango = tango.bind(oscar)(foxtrot, backup);
                                tango = offset.bind(romeo)(tango);
                                verify = 0;
                                report = yankee;
                                if(!tango) { _fun00008_ip = 330; continue _fun00007 }
 204:
                                romeo = _closure4_slot4;
                                offset = romeo.substring;
                                tango = 2;
                                tango = offset.bind(romeo)(tango);
                                _closure4_slot4 = tango;
                                offset = _closure4_slot5;
                                tango = offset.pop;
                                romeo = tango.bind(offset)();
                                tango = null;
                                tango = tango != romeo;
                                verify = 0;
                                report = yankee;
                                if(!tango) { _fun00008_ip = 330; continue _fun00007 }
 254:
                                offset = golf.timestamp;
                                tango = romeo.timestamp;
                                offset = offset - tango;
                                tango = yankee;
                                if(yankee) { _fun00008_ip = 306; continue _fun00007 }
 276:
                                yankee = 5;
                                yankee = offset > yankee;
                                if(!yankee) { _fun00008_ip = 303; continue _fun00007 }
 286:
                                foxtrot = function(argFoo) { // Original name: isSuperNoisyLog
                                    mike = argFoo;
                                    var _closure6_slot0 = mike;
                                    zulu = ['GET_CONSTANTS', 'CONVERT_CONSTANTS'];
                                    mike = zulu.some;
                                    entity = function(argFoo) {
                                        zulu = _closure6_slot0;
                                        mike = zulu.includes;
                                        entity = argFoo;
                                        entity = mike.bind(zulu)(entity);
                                        return entity;
                                    };
                                    entity = mike.bind(zulu)(entity);
                                    return entity;
                                };
                                foxtrot = foxtrot.bind(entity)(oscar);
                                yankee = !foxtrot;
 303:
                                tango = yankee;
 306:
                                yankee = romeo.shouldKeep;
                                if(yankee) { _fun00008_ip = 318; continue _fun00007 }
 315:
                                yankee = tango;
 318:
                                romeo['shouldKeep'] = yankee;
                                verify = offset;
                                report = tango;
 330:
                                tango = {};
                                offset = '☕';
                                tango['emoji'] = offset;
                                golf = golf.timestamp;
                                tango['timestamp'] = golf;
                                golf = undefined;
                                if(!(verify > options)) { _fun00008_ip = 363; continue _fun00007 }
 360:
                                golf = verify;
 363:
                                tango['delta'] = golf;
                                golf = _closure4_slot4;
                                tango['prefix'] = golf;
                                tango['log'] = oscar;
                                tango['shouldKeep'] = report;
                                golf = _closure4_slot0;
                                report = golf.length;
                                report = options < report;
                                offset = null;
                                verify = 0;
                                oscar = 0;
                                if(!report) { _fun00008_ip = 451; continue _fun00007 }
 409:
                                report = golf[verify];
                                yankee = report.timestamp;
                                if(!(offset != yankee)) { _fun00008_ip = 436; continue _fun00007 }
 423:
                                report = tango.timestamp;
                                oscar = verify;
                                if(!(!(yankee > report))) { _fun00008_ip = 451; continue _fun00007 }
 436:
                                verify = verify + 1;
                                report = golf.length;
                                oscar = verify;
                                if(oscar < report) { _fun00008_ip = 409; continue _fun00007 }
 451:
                                report = golf.splice;
                                report = report.bind(golf)(oscar, options, tango);
                                if(!zulu) { _fun00008_ip = 499; continue _fun00007 }
 467:
                                report = _closure4_slot4;
                                zulu = '| ';
                                zulu = report + zulu;
                                _closure4_slot4 = zulu;
                                zulu = _closure4_slot5;
                                mike = zulu.push;
                                mike = mike.bind(zulu)(tango);
 499:
                                return entity;
                            }
                        };
                        mike = tango.bind(report)(mike);
                        mike = false;
                        var _closure4_slot6 = mike;
                        mike = zulu.filter;
                        entity = function(argFoo) {
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                tango = argFoo;
                                entity = _closure4_slot6;
                                entity = !entity;
                                if(entity) { _fun00010_ip = 41; continue _fun00009 }
 16:
                                oscar = tango.log;
                                report = oscar.includes;
                                mike = '↪';
                                mike = report.bind(oscar)(mike);
                                entity = !mike;
 41:
                                if(!entity) { _fun00010_ip = 92; continue _fun00009 }
 44:
                                mike = _closure4_slot2;
                                mike = !mike;
                                if(!mike) { _fun00010_ip = 70; continue _fun00009 }
 54:
                                oscar = tango.emoji;
                                report = '🎨';
                                mike = report === oscar;
 70:
                                if(mike) { _fun00010_ip = 85; continue _fun00009 }
 73:
                                report = tango.shouldKeep;
                                tango = false;
                                mike = tango === report;
 85:
                                _closure4_slot6 = mike;
                                entity = !mike;
 92:
                                return entity;
                            }
                        };
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    golf = undefined;
                    output = undefined;
                    sizing = yankee;
                    kilo = offset;
                    mike = output[mike](sizing, kilo, backup, foxtrot, romeo);
                    entity = function(argFoo, argBar) { // Original name: serializeLogGroup
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            yankee = argFoo;
                            mike = argBar;
                            var _closure4_slot0 = mike;
                            golf = new Array(0);
                            zulu = yankee.length;
                            mike = 0;
                            tango = mike < zulu;
                            offset = 'Finish ';
                            zulu = '';
                            options = 'Start ';
                            verify = 1;
                            oscar = null;
                            report = 0;
                            if(!tango) { _fun00012_ip = 159; continue _fun00011 }
 53:
                            romeo = yankee[report];
                            tango = report + verify;
                            foxtrot = yankee[tango];
                            if(!(oscar != foxtrot)) { _fun00012_ip = 96; continue _fun00011 }
 69:
                            backup = foxtrot.log;
                            kilo = romeo.log;
                            tango = kilo.replace;
                            tango = tango.bind(kilo)(options, offset);
                            if(!(backup !== tango)) { _fun00012_ip = 111; continue _fun00011 }
 96:
                            tango = golf.push;
                            tango = tango.bind(golf)(romeo);
                            tango = report;
                            _fun00012_ip = 147; continue _fun00011;
 111:
                            backup = foxtrot.log;
                            romeo = backup.replace;
                            romeo = romeo.bind(backup)(offset, zulu);
                            foxtrot['log'] = romeo;
                            romeo = golf.push;
                            romeo = romeo.bind(golf)(foxtrot);
                            tango = report + 1;
 147:
                            report = tango + 1;
                            tango = yankee.length;
                            if(report < tango) { _fun00012_ip = 53; continue _fun00011 }
 159:
                            report = golf.map;
                            tango = function(argFoo) {
                                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                    mike = argFoo;
                                    entity = {};
                                    zulu = mike.timestamp;
                                    tango = null;
                                    report = tango == zulu;
                                    golf = '';
                                    zulu = golf;
                                    if(report) { _fun00014_ip = 68; continue _fun00013 }
 27:
                                    oscar = mike.timestamp;
                                    report = _closure4_slot0;
                                    oscar = oscar - report;
                                    report = 1000;
                                    options = oscar / report;
                                    oscar = options.toFixed;
                                    report = 3;
                                    zulu = oscar.bind(options)(report);
 68:
                                    entity['totalTime'] = zulu;
                                    zulu = mike.delta;
                                    tango = tango == zulu;
                                    zulu = golf;
                                    if(tango) { _fun00014_ip = 126; continue _fun00013 }
 89:
                                    tango = global;
                                    oscar = tango.String;
                                    options = tango.Math;
                                    report = options.round;
                                    tango = mike.delta;
                                    report = report.bind(options)(tango);
                                    tango = undefined;
                                    zulu = oscar.bind(tango)(report);
 126:
                                    entity['deltaTime'] = zulu;
                                    zulu = mike.emoji;
                                    tango = zulu.length;
                                    zulu = 0;
                                    zulu = tango > zulu;
                                    oscar = golf;
                                    if(!zulu) { _fun00014_ip = 183; continue _fun00013 }
 154:
                                    report = mike.emoji;
                                    zulu = global;
                                    zulu = zulu.HermesInternal;
                                    tango = zulu.concat;
                                    zulu = ' ';
                                    oscar = tango.bind(golf)(report, zulu);
 183:
                                    yankee = mike.prefix;
                                    offset = mike.log;
                                    mike = global;
                                    mike = mike.HermesInternal;
                                    zulu = mike.concat;
                                    verify = '\n';
                                    foxtrot = golf;
                                    romeo = oscar;
                                    mike = foxtrot[zulu](romeo, yankee, offset, verify, options);
                                    entity['log'] = mike;
                                    return entity;
                                }
                            };
                            tango = report.bind(golf)(tango);
                            offset = _closure1_slot1;
                            golf = _closure1_slot2;
                            golf = golf[verify];
                            options = undefined;
                            yankee = offset.bind(options)(golf);
                            offset = yankee.max;
                            romeo = tango.map;
                            golf = function(argFoo) {
                                entity = argFoo;
                                entity = entity.totalTime;
                                entity = entity.length;
                                return entity;
                            };
                            golf = romeo.bind(tango)(golf);
                            offset = offset.bind(yankee)(golf);
                            yankee = oscar != offset;
                            golf = 0;
                            if(!yankee) { _fun00012_ip = 237; continue _fun00011 }
 234:
                            golf = offset;
 237:
                            var _closure4_slot1 = golf;
                            golf = _closure1_slot1;
                            report = _closure1_slot2;
                            report = report[verify];
                            options = golf.bind(options)(report);
                            golf = options.max;
                            verify = tango.map;
                            report = function(argFoo) {
                                entity = argFoo;
                                entity = entity.deltaTime;
                                entity = entity.length;
                                return entity;
                            };
                            report = verify.bind(tango)(report);
                            report = golf.bind(options)(report);
                            oscar = oscar != report;
                            mike = 0;
                            if(!oscar) { _fun00012_ip = 297; continue _fun00011 }
 294:
                            mike = report;
 297:
                            var _closure4_slot2 = mike;
                            mike = tango.map;
                            entity = function(argFoo) {
                                entity = argFoo;
                                yankee = entity.totalTime;
                                tango = entity.deltaTime;
                                romeo = entity.log;
                                golf = _closure1_slot1;
                                options = _closure1_slot2;
                                mike = 1;
                                entity = options[mike];
                                zulu = undefined;
                                offset = golf.bind(zulu)(entity);
                                verify = offset.padStart;
                                report = _closure4_slot1;
                                report = verify.bind(offset)(yankee, report);
                                mike = options[mike];
                                zulu = golf.bind(zulu)(mike);
                                mike = zulu.padStart;
                                entity = _closure4_slot2;
                                backup = mike.bind(zulu)(tango, entity);
                                entity = global;
                                entity = entity.HermesInternal;
                                zulu = entity.concat;
                                output = '';
                                entity = ' ';
                                sizing = report;
                                kilo = entity;
                                foxtrot = entity;
                                entity = output[zulu](sizing, kilo, backup, foxtrot, romeo, yankee);
                                return entity;
                            };
                            mike = mike.bind(tango)(entity);
                            entity = mike.join;
                            entity = entity.bind(mike)(zulu);
                            return entity;
                        }
                    };
                    romeo = entity.bind(golf)(mike, tango);
                    tango = 1;
                    offset = report + tango;
                    mike = _closure1_slot0;
                    options = _closure1_slot2;
                    entity = 2;
                    entity = options[entity];
                    mike = mike.bind(golf)(entity);
                    entity = mike.getTimestampString;
                    backup = entity.bind(mike)(zulu);
                    mike = global;
                    entity = mike.HermesInternal;
                    options = entity.concat;
                    output = 'Trace #';
                    kilo = ' started ';
                    foxtrot = '\n';
                    sizing = offset;
                    zulu = output[options](sizing, kilo, backup, foxtrot, romeo, yankee);
                    golf = null;
                    entity = zulu;
                    if(!(golf != oscar)) { _fun00006_ip = 277; continue _fun00005 }
 246:
                    report = report + tango;
                    mike = mike.HermesInternal;
                    tango = mike.concat;
                    mike = '\n Server trace for trace #';
                    mike = tango.bind(mike)(report, oscar);
                    entity = zulu + mike;
 277:
                    return entity;
                }
            };
            zulu = mike.bind(zulu)(entity);
            mike = zulu.join;
            entity = '\n\n';
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();