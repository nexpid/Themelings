// app/modules/gateway/GatewaySocketDispatcher.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
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
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot15;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot15;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
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
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
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
                    _fun00004_ip = 67; continue _fun00003;
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
 345:
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
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _shouldYieldToBrowser
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscar = argFoo;
            zulu = argBar;
            options = argBaz;
            entity = null;
            if(!(entity != options)) { _fun00008_ip = 130; continue _fun00007 }
 15:
            tango = oscar[zulu];
            mike = oscar.length;
            report = 1;
            mike = mike - report;
            golf = zulu < mike;
            verify = null;
            if(!golf) { _fun00008_ip = 48; continue _fun00007 }
 40:
            report = zulu + report;
            verify = oscar[report];
 48:
            oscar = entity == options;
            offset = undefined;
            if(oscar) { _fun00008_ip = 67; continue _fun00007 }
 57:
            oscar = options.timeRemaining;
            offset = oscar.bind(options)();
 67:
            yankee = entity != offset;
            golf = 0;
            oscar = 0;
            if(!yankee) { _fun00008_ip = 81; continue _fun00007 }
 78:
            oscar = offset;
 81:
            tango = tango.type;
            offset = entity == verify;
            report = undefined;
            if(offset) { _fun00008_ip = 100; continue _fun00007 }
 95:
            report = verify.type;
 100:
            entity = entity != options;
            if(!entity) { _fun00008_ip = 111; continue _fun00007 }
 107:
            entity = oscar <= golf;
 111:
            if(!entity) { _fun00008_ip = 121; continue _fun00007 }
 114:
            tango = tango === report;
            entity = !tango;
 121:
            if(!entity) { _fun00008_ip = 128; continue _fun00007 }
 124:
            entity = zulu !== mike;
 128:
            return entity;
 130:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    tango = global;
    verify = tango.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    offset = 0;
    golf = oscar[offset];
    entity = undefined;
    golf = yankee.bind(entity)(golf);
    var _closure1_slot3 = golf;
    verify = 1;
    golf = oscar[verify];
    golf = yankee.bind(entity)(golf);
    var _closure1_slot4 = golf;
    options = 2;
    golf = oscar[options];
    golf = yankee.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = 3;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.DISPATCHER_IDEAL_TIME_LIMIT_MS;
    var _closure1_slot6 = golf;
    golf = 4;
    golf = oscar[golf];
    romeo = yankee.bind(entity)(golf);
    golf = romeo.prototype;
    yankee = Object.create(golf, {constructor: {value: romeo}});
    kilo = 'GatewaySocket';
    sizing = yankee;
    golf = new sizing[romeo](kilo, backup);
    golf = golf instanceof Object ? golf : yankee;
    var _closure1_slot7 = golf;
    romeo = tango.Set;
    golf = romeo.prototype;
    yankee = Object.create(golf, {constructor: {value: romeo}});
    kilo = ['INITIAL_GUILD', 'READY'];
    sizing = yankee;
    golf = new sizing[romeo](kilo, backup);
    golf = golf instanceof Object ? golf : yankee;
    var _closure1_slot8 = golf;
    romeo = tango.Set;
    golf = romeo.prototype;
    yankee = Object.create(golf, {constructor: {value: romeo}});
    kilo = ['READY', 'INITIAL_GUILD'];
    sizing = yankee;
    golf = new sizing[romeo](kilo, backup);
    golf = golf instanceof Object ? golf : yankee;
    var _closure1_slot9 = golf;
    romeo = tango.Set;
    golf = romeo.prototype;
    yankee = Object.create(golf, {constructor: {value: romeo}});
    kilo = ['READY', 'READY_SUPPLEMENTAL', 'RESUMED'];
    sizing = yankee;
    golf = new sizing[romeo](kilo, backup);
    golf = golf instanceof Object ? golf : yankee;
    var _closure1_slot10 = golf;
    yankee = tango.Set;
    tango = yankee.prototype;
    golf = Object.create(tango, {constructor: {value: yankee}});
    kilo = ['READY', 'INITIAL_GUILD', 'READY_SUPPLEMENTAL', 'RESUMED', 'VOICE_CHANNEL_SELECT', 'VOICE_STATE_UPDATE', 'VOICE_SERVER_UPDATE', 'RTC_CONNECTION_STATE', 'RTC_CONNECTION_VIDEO', 'RTC_CONNECTION_CLIENT_CONNECT', 'RTC_CONNECTION_PING', 'MEDIA_SESSION_JOINED', 'MEDIA_ENGINE_PERMISSION', 'SESSIONS_REPLACE'];
    sizing = golf;
    tango = new sizing[yankee](kilo, backup);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot11 = tango;
    tango = {};
    tango['NotStarted'] = offset;
    golf = 'NotStarted';
    tango[offset] = golf;
    tango['Loading'] = verify;
    golf = 'Loading';
    tango[verify] = golf;
    tango['Loaded'] = options;
    golf = 'Loaded';
    tango[options] = golf;
    var _closure1_slot12 = tango;
    tango = {};
    var _closure1_slot13 = tango;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo) { // Original name: GatewaySocketDispatcher
            zulu = this;
            var _closure3_slot0 = zulu;
            oscar = _closure1_slot3;
            report = _closure2_slot0;
            entity = undefined;
            report = oscar.bind(entity)(zulu, report);
            report = argFoo;
            zulu['socket'] = report;
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            tango = 5;
            tango = oscar[tango];
            golf = report.bind(entity)(tango);
            tango = golf.createDispatcherWorkScheduler;
            tango = tango.bind(golf)();
            zulu['scheduler'] = tango;
            tango = new Array(0);
            zulu['queue'] = tango;
            tango = true;
            zulu['paused'] = tango;
            tango = 6;
            tango = oscar[tango];
            report = report.bind(entity)(tango);
            tango = report.createResumeAnalytics;
            tango = tango.bind(report)();
            zulu['resumeAnalytics'] = tango;
            tango = null;
            zulu['getDispatchHandler'] = tango;
            mike = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure3_slot0;
                    entity = entity.paused;
                    if(entity) { _fun00010_ip = 378; continue _fun00009 }
 19:
                    mike = global;
                    tango = mike.performance;
                    entity = tango.now;
                    tango = entity.bind(tango)();
                    entity = _closure3_slot0;
                    entity = entity.queue;
                    entity = entity.length;
                    options = 0;
                    entity = options < entity;
                    oscar = 0;
                    if(!entity) { _fun00010_ip = 166; continue _fun00009 }
 62:
                    entity = _closure3_slot0;
                    entity = entity.queue;
                    entity = entity[options];
                    report = entity.status;
                    entity = _closure1_slot12;
                    entity = entity.Loaded;
                    golf = 0;
                    oscar = 0;
                    if(!(report === entity)) { _fun00010_ip = 166; continue _fun00009 }
 102:
                    offset = golf + 1;
                    entity = _closure3_slot0;
                    entity = entity.queue;
                    entity = entity.length;
                    oscar = offset;
                    if(!(offset < entity)) { _fun00010_ip = 166; continue _fun00009 }
 127:
                    entity = _closure3_slot0;
                    entity = entity.queue;
                    entity = entity[offset];
                    report = entity.status;
                    entity = _closure1_slot12;
                    entity = entity.Loaded;
                    golf = offset;
                    oscar = golf;
                    if(report === entity) { _fun00010_ip = 102; continue _fun00009 }
 166:
                    if(!(options !== oscar)) { _fun00010_ip = 374; continue _fun00009 }
 173:
                    golf = _closure3_slot0;
                    report = golf.queue;
                    entity = report.splice;
                    report = entity.bind(report)(options, oscar);
                    oscar = golf.dispatchMultiple;
                    entity = argFoo;
                    entity = oscar.bind(golf)(report, entity);
                    if(!entity) { _fun00010_ip = 279; continue _fun00009 }
 213:
                    zulu = _closure3_slot0;
                    zulu = zulu.scheduler;
                    golf = zulu.telemetry;
                    oscar = golf.timeEnd;
                    verify = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 7;
                    options = options[zulu];
                    zulu = undefined;
                    zulu = verify.bind(zulu)(options);
                    zulu = zulu.WorkSchedulerTelemetryTiming;
                    zulu = zulu.TIME_TO_QUEUE_EMPTY;
                    zulu = oscar.bind(golf)(zulu);
 279:
                    oscar = mike.performance;
                    zulu = oscar.now;
                    zulu = zulu.bind(oscar)();
                    verify = zulu - tango;
                    tango = _closure1_slot6;
                    tango = verify > tango;
                    if(!tango) { _fun00010_ip = 315; continue _fun00009 }
 312:
                    tango = !entity;
 315:
                    if(!tango) { _fun00010_ip = 372; continue _fun00009 }
 318:
                    tango = _closure1_slot7;
                    zulu = tango.log;
                    backup = report.length;
                    mike = mike.HermesInternal;
                    golf = mike.concat;
                    kilo = 'Dispatched ';
                    foxtrot = ' messages in ';
                    yankee = 'ms';
                    romeo = verify;
                    mike = kilo[golf](backup, foxtrot, romeo, yankee, offset);
                    mike = zulu.bind(tango)(mike);
 372:
                    return entity;
 374:
                    entity = true;
                    return entity;
 378:
                    entity = true;
                    return entity;
                }
            };
            zulu['flush'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'hasStuffToDispatchNow';
        entity['key'] = mike;
        mike = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                mike = this;
                entity = mike.queue;
                entity = entity.length;
                zulu = 0;
                entity = entity > zulu;
                if(!entity) { _fun00012_ip = 55; continue _fun00011 }
 23:
                mike = mike.queue;
                mike = mike[zulu];
                zulu = mike.status;
                mike = _closure1_slot12;
                mike = mike.Loaded;
                entity = zulu === mike;
 55:
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(14);
        mike[0] = entity;
        entity = {};
        oscar = 'processFirstQueuedDispatch';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                golf = argFoo;
                zulu = this;
                mike = new Array(0);
                entity = zulu.queue;
                entity = entity.length;
                oscar = 0;
                if(!(entity > oscar)) { _fun00014_ip = 191; continue _fun00013 }
 30:
                tango = golf.has;
                entity = zulu.queue;
                entity = entity[oscar];
                entity = entity.type;
                entity = tango.bind(golf)(entity);
                if(!entity) { _fun00014_ip = 191; continue _fun00013 }
 61:
                entity = zulu.queue;
                entity = entity[oscar];
                tango = entity.status;
                entity = _closure1_slot12;
                entity = entity.Loaded;
                if(!(tango === entity)) { _fun00014_ip = 191; continue _fun00013 }
 93:
                tango = mike.push;
                options = zulu.queue;
                entity = options.shift;
                entity = entity.bind(options)();
                entity = tango.bind(mike)(entity);
                entity = zulu.queue;
                entity = entity.length;
                if(!(entity > oscar)) { _fun00014_ip = 191; continue _fun00013 }
 134:
                tango = golf.has;
                entity = zulu.queue;
                entity = entity[oscar];
                entity = entity.type;
                entity = tango.bind(golf)(entity);
                if(!entity) { _fun00014_ip = 191; continue _fun00013 }
 162:
                entity = zulu.queue;
                entity = entity[oscar];
                tango = entity.status;
                entity = _closure1_slot12;
                entity = entity.Loaded;
                if(tango === entity) { _fun00014_ip = 93; continue _fun00013 }
 191:
                entity = zulu.dispatchMultiple;
                entity = entity.bind(zulu)(mike);
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'unpauseDispatchQueue';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                zulu = this;
                entity = false;
                zulu['paused'] = entity;
                tango = _closure1_slot14;
                mike = zulu.queue;
                entity = undefined;
                report = tango.bind(entity)(mike);
                tango = report.bind(entity)();
                mike = tango.done;
                if(mike) { _fun00016_ip = 74; continue _fun00015 }
 43:
                oscar = tango.value;
                mike = zulu.maybePreload;
                mike = mike.bind(zulu)(oscar);
                oscar = report.bind(entity)();
                mike = oscar.done;
                tango = oscar;
                if(!mike) { _fun00016_ip = 43; continue _fun00015 }
 74:
                mike = zulu.flush;
                mike = mike.bind(zulu)();
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'receiveDispatch';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zulu = argBar;
                mike = this;
                tango = mike.getDispatchHandler;
                entity = null;
                if(!(entity != tango)) { _fun00018_ip = 111; continue _fun00017 }
 18:
                tango = {};
                report = argFoo;
                tango['data'] = report;
                tango['type'] = zulu;
                report = argBaz;
                tango['compressionAnalytics'] = report;
                report = _closure1_slot12;
                report = report.NotStarted;
                tango['status'] = report;
                tango['preloadPromise'] = entity;
                tango['preloadedData'] = entity;
                report = mike.queue;
                entity = report.push;
                entity = entity.bind(report)(tango);
                entity = mike.maybePreload;
                entity = entity.bind(mike)(tango);
                if(entity) { _fun00018_ip = 107; continue _fun00017 }
 96:
                entity = mike.scheduleFlush;
                entity = entity.bind(mike)(zulu);
 107:
                entity = undefined;
                return entity;
 111:
                entity = global;
                zulu = entity.Error;
                mike = undefined;
                entity = 'getDispatchHandler needs to be passed in first!';
                entity = zulu.bind(mike)(entity);
                throw entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'maybePreload';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zulu = argFoo;
                report = this;
                var _closure3_slot0 = report;
                var _closure3_slot1 = zulu;
                mike = report.paused;
                if(!mike) { _fun00020_ip = 54; continue _fun00019 }
 25:
                oscar = _closure1_slot8;
                tango = oscar.has;
                mike = zulu.type;
                mike = tango.bind(oscar)(mike);
                if(mike) { _fun00020_ip = 54; continue _fun00019 }
 50:
                mike = false;
                return mike;
 54:
                tango = zulu.status;
                mike = _closure1_slot12;
                mike = mike.NotStarted;
                if(!(tango === mike)) { _fun00020_ip = 161; continue _fun00019 }
 76:
                tango = report.getDispatchHandler;
                mike = zulu.type;
                options = tango.bind(report)(mike);
                mike = null;
                report = mike == options;
                tango = undefined;
                if(report) { _fun00020_ip = 119; continue _fun00019 }
 103:
                golf = options.preload;
                report = zulu.data;
                tango = golf.bind(options)(report);
 119:
                if(!(mike != tango)) { _fun00020_ip = 135; continue _fun00019 }
 123:
                report = _closure1_slot12;
                report = report.Loading;
                _fun00020_ip = 145; continue _fun00019;
 135:
                oscar = _closure1_slot12;
                report = oscar.Loaded;
 145:
                zulu['status'] = report;
                zulu['preloadPromise'] = tango;
                if(!(mike == tango)) { _fun00020_ip = 165; continue _fun00019 }
 161:
                mike = false;
                return mike;
 165:
                zulu = tango.then;
                mike = function(argFoo) {
                    entity = _closure3_slot1;
                    zulu = argFoo;
                    entity['preloadedData'] = zulu;
                    zulu = _closure1_slot12;
                    zulu = zulu.Loaded;
                    entity['status'] = zulu;
                    zulu = _closure3_slot0;
                    mike = zulu.scheduleFlush;
                    entity = entity.type;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                zulu = zulu.bind(tango)(mike);
                mike = zulu.catch;
                entity = function(argFoo) {
                    entity = _closure3_slot0;
                    zulu = entity.socket;
                    mike = zulu.resetSocketOnDispatchError;
                    entity = {};
                    report = argFoo;
                    entity['error'] = report;
                    tango = _closure3_slot1;
                    tango = tango.type;
                    entity['action'] = tango;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                entity = true;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'scheduleFlush';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                tango = argFoo;
                entity = this;
                mike = entity.paused;
                if(mike) { _fun00022_ip = 130; continue _fun00021 }
 15:
                report = _closure1_slot9;
                zulu = report.has;
                zulu = zulu.bind(report)(tango);
                report = entity.scheduler;
                if(zulu) { _fun00022_ip = 75; continue _fun00021 }
 41:
                zulu = report.hasWorkScheduled;
                if(zulu) { _fun00022_ip = 95; continue _fun00021 }
 50:
                golf = entity.scheduler;
                oscar = golf.requestWorkTimeout;
                zulu = entity.flush;
                zulu = oscar.bind(golf)(zulu);
                _fun00022_ip = 95; continue _fun00021;
 75:
                zulu = report.clearWorkTimeout;
                zulu = zulu.bind(report)();
                zulu = entity.flush;
                zulu = zulu.bind(entity)();
 95:
                zulu = _closure1_slot11;
                mike = zulu.has;
                mike = mike.bind(zulu)(tango);
                if(!mike) { _fun00022_ip = 130; continue _fun00021 }
 112:
                mike = entity.scheduler;
                entity = mike.markCriticalWorkScheduled;
                entity = entity.bind(mike)();
 130:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'getDispatchTimings';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = _closure1_slot13;
            return entity;
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'getSchedulerTelemetry';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            entity = entity.scheduler;
            entity = entity.telemetry;
            return entity;
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'getIsSchedulerBackgrounded';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            entity = entity.scheduler;
            entity = entity.isBackgrounded;
            return entity;
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'toggleRequestIdleCallback';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.scheduler;
            mike = zulu.toggleRequestIdleCallback;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'getIsRequestIdleCallbackEnabled';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            entity = entity.scheduler;
            entity = entity.isRequestIdleCallbackEnabled;
            return entity;
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'dispatchMultiple';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                mike = argFoo;
                entity = this;
                var _closure3_slot0 = entity;
                report = mike;
                var _closure3_slot1 = mike;
                zulu = argBar;
                var _closure3_slot2 = zulu;
                mike = mike.length;
                options = 0;
                if(!(options !== mike)) { _fun00024_ip = 485; continue _fun00023 }
 40:
                mike = 'none';
                var _closure3_slot3 = mike;
                mike = false;
                var _closure3_slot4 = mike;
                zulu = entity.scheduler;
                yankee = zulu.telemetry;
                golf = yankee.measure;
                romeo = _closure1_slot0;
                oscar = _closure1_slot2;
                offset = 7;
                oscar = oscar[offset];
                verify = undefined;
                oscar = romeo.bind(verify)(oscar);
                oscar = oscar.WorkSchedulerTelemetryMeasurement;
                oscar = oscar.COUNT_INITIAL_DISPATCHS_LENGTH;
                report = report.length;
                report = golf.bind(yankee)(oscar, report);
 120: // try_start_0
                report = new Array(0);
                var _closure3_slot5 = report;
                report = entity.socket;
                oscar = report.connectionState;
                golf = _closure1_slot1;
                yankee = _closure1_slot2;
                report = 8;
                report = yankee[report];
                report = golf.bind(verify)(report);
                report = report.RESUMING;
                if(!(oscar === report)) { _fun00024_ip = 210; continue _fun00023 }
 170:
                oscar = _closure1_slot1;
                golf = _closure1_slot2;
                report = 9;
                report = golf[report];
                report = oscar.bind(verify)(report);
                golf = report.Emitter;
                oscar = golf.pause;
                report = 150;
                report = oscar.bind(golf)(report);
 210:
                var _closure3_slot6 = options;
                oscar = _closure1_slot1;
                report = _closure1_slot2;
                golf = 9;
                report = report[golf];
                report = oscar.bind(verify)(report);
                yankee = report.Emitter;
                oscar = yankee.batched;
                report = function() {
                    _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                        entity = _closure3_slot1;
                        entity = entity.length;
                        oscar = 0;
                        tango = oscar < entity;
                        entity = undefined;
                        romeo = 2;
                        verify = 1;
                        yankee = global;
                        report = null;
                        offset = 0;
                        if(!tango) { _fun00026_ip = 405; continue _fun00025 }
 41:
                        tango = _closure3_slot1;
                        golf = tango[offset];
                        tango = golf.type;
                        _closure3_slot3 = tango;
                        options = _closure3_slot4;
                        tango = offset;
                        if(options) { _fun00026_ip = 87; continue _fun00025 }
 68:
                        kilo = _closure1_slot10;
                        backup = kilo.has;
                        foxtrot = golf.type;
                        options = backup.bind(kilo)(foxtrot);
 87:
                        _closure3_slot4 = options;
                        foxtrot = yankee.performance;
                        options = foxtrot.now;
                        foxtrot = options.bind(foxtrot)();
                        backup = _closure3_slot0;
                        options = backup.dispatchOne;
                        options = options.bind(backup)(golf);
                        backup = yankee.performance;
                        options = backup.now;
                        options = options.bind(backup)();
                        options = options - foxtrot;
                        _closure3_slot6 = options;
                        foxtrot = golf.type;
                        kilo = _closure3_slot6;
                        golf = _closure1_slot13;
                        options = golf[foxtrot];
                        if(!(report == options)) { _fun00026_ip = 177; continue _fun00025 }
 167:
                        options = [0, 0];
 177:
                        golf = _closure1_slot5;
                        options = golf.bind(entity)(options, romeo);
                        golf = options[oscar];
                        backup = options[verify];
                        options = _closure1_slot13;
                        golf = golf * backup;
                        kilo = golf + kilo;
                        golf = backup + verify;
                        kilo = kilo / golf;
                        golf = new Array(2);
                        golf[0] = kilo;
                        backup = backup + verify;
                        golf[1] = backup;
                        options[foxtrot] = golf;
                        foxtrot = _closure1_slot16;
                        options = _closure3_slot1;
                        golf = _closure3_slot2;
                        golf = foxtrot.bind(entity)(options, tango, golf);
                        options = _closure3_slot1;
                        if(golf) { _fun00026_ip = 281; continue _fun00025 }
 261:
                        offset = tango + 1;
                        golf = options.length;
                        if(offset < golf) { _fun00026_ip = 41; continue _fun00025 }
 276:
                        _fun00026_ip = 405; continue _fun00025;
 281:
                        golf = options.slice;
                        tango = tango + verify;
                        tango = golf.bind(options)(tango);
                        _closure3_slot5 = tango;
                        tango = _closure3_slot2;
                        tango = report != tango;
                        if(!tango) { _fun00026_ip = 328; continue _fun00025 }
 310:
                        golf = _closure3_slot2;
                        report = golf.timeRemaining;
                        report = report.bind(golf)();
                        tango = report <= oscar;
 328:
                        if(!tango) { _fun00026_ip = 405; continue _fun00025 }
 331:
                        tango = _closure3_slot0;
                        tango = tango.scheduler;
                        oscar = tango.telemetry;
                        report = oscar.timeTrack;
                        golf = _closure1_slot0;
                        options = _closure1_slot2;
                        tango = 7;
                        tango = options[tango];
                        tango = golf.bind(entity)(tango);
                        tango = tango.WorkSchedulerTelemetryTiming;
                        tango = tango.TIME_OVER_DEADLINE;
                        zulu = _closure3_slot2;
                        zulu = zulu.timeSinceExpiration;
                        zulu = report.bind(oscar)(tango, zulu);
 405:
                        zulu = _closure1_slot1;
                        tango = _closure1_slot2;
                        mike = 10;
                        mike = tango[mike];
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.flush;
                        mike = mike.bind(zulu)();
                        return entity;
                    }
                };
                report = oscar.bind(yankee)(report);
                report = _closure3_slot4;
                if(!report) { _fun00024_ip = 298; continue _fun00023 }
 265:
                oscar = _closure1_slot1;
                report = _closure1_slot2;
                report = report[golf];
                report = oscar.bind(verify)(report);
                oscar = report.Emitter;
                report = oscar.resume;
                report = report.bind(oscar)();
 298:
                report = _closure3_slot5;
                report = report.length;
                if(!(!(report > options))) { _fun00024_ip = 316; continue _fun00023 }
 311: // try_end0
                _fun00024_ip = 481; continue _fun00023;
 316: // try_start_1
                report = entity.scheduler;
                golf = report.telemetry;
                oscar = golf.measure;
                report = _closure1_slot0;
                zulu = _closure1_slot2;
                zulu = zulu[offset];
                zulu = report.bind(verify)(zulu);
                zulu = zulu.WorkSchedulerTelemetryMeasurement;
                report = zulu.COUNT_DISPATCHES_LEFT_AFTER_YIELD;
                zulu = _closure3_slot5;
                zulu = zulu.length;
                zulu = oscar.bind(golf)(report, zulu);
                oscar = entity.queue;
                report = oscar.unshift;
                backup = _closure3_slot5;
                zulu = new Array(0);
                kilo = zulu;
                foxtrot = 0;
                golf = arraySpread(kilo, backup, foxtrot);
                kilo = report;
                backup = zulu;
                foxtrot = oscar;
                zulu = apply(kilo, backup, foxtrot);
                golf = entity.scheduler;
                oscar = golf.requestWorkTimeout;
                report = entity.flush;
                zulu = true;
                zulu = oscar.bind(golf)(report, zulu);
 446: // try_end1
                return mike;
 448: // catch_target0 // catch_target1
                CatchBlockStart(arg_register=4);
                zulu = entity.socket;
                mike = zulu.resetSocketOnDispatchError;
                entity = {};
                entity['error'] = report;
                tango = _closure3_slot3;
                entity['action'] = tango;
                entity = mike.bind(zulu)(entity);
 481:
                entity = true;
                return entity;
 485:
                entity = true;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[11] = entity;
        entity = {};
        oscar = 'dispatchOne';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                entity = argFoo;
                zulu = this;
                romeo = entity.data;
                backup = entity.type;
                yankee = entity.compressionAnalytics;
                foxtrot = entity.preloadedData;
                mike = global;
                tango = mike.performance;
                entity = tango.now;
                report = entity.bind(tango)();
                entity = zulu.socket;
                golf = entity.connectionState;
                verify = _closure1_slot1;
                entity = _closure1_slot2;
                options = 8;
                oscar = entity[options];
                entity = undefined;
                oscar = verify.bind(entity)(oscar);
                oscar = oscar.RESUMING;
                if(!(golf === oscar)) { _fun00028_ip = 230; continue _fun00027 }
 95:
                oscar = zulu.resumeAnalytics;
                oscar = oscar.lastUpdateTime;
                verify = report - oscar;
                oscar = zulu.resumeAnalytics;
                golf = oscar.numEvents;
                oscar = 0;
                if(!(oscar !== golf)) { _fun00028_ip = 159; continue _fun00027 }
 129:
                oscar = zulu.resumeAnalytics;
                oscar = oscar.largestWaitTime;
                if(!(verify > oscar)) { _fun00028_ip = 171; continue _fun00027 }
 145:
                oscar = zulu.resumeAnalytics;
                oscar['largestWaitTime'] = verify;
                _fun00028_ip = 171; continue _fun00027;
 159:
                oscar = zulu.resumeAnalytics;
                oscar['initialWaitTime'] = verify;
 171:
                golf = zulu.resumeAnalytics;
                oscar = golf.totalWaitTime;
                oscar = oscar + verify;
                golf['totalWaitTime'] = oscar;
                oscar = zulu.resumeAnalytics;
                oscar['lastUpdateTime'] = report;
                golf = zulu.resumeAnalytics;
                verify = golf.numEvents;
                oscar = 1;
                oscar = verify + oscar;
                golf['numEvents'] = oscar;
 230:
                golf = _closure1_slot1;
                verify = _closure1_slot2;
                oscar = 10;
                oscar = verify[oscar];
                golf = golf.bind(entity)(oscar);
                oscar = golf.flush;
                oscar = oscar.bind(golf)(backup, romeo);
                oscar = 'READY';
                if(!(oscar !== backup)) { _fun00028_ip = 429; continue _fun00027 }
 273:
                oscar = 'RESUMED';
                if(!(oscar !== backup)) { _fun00028_ip = 318; continue _fun00027 }
 281:
                oscar = zulu.getDispatchHandler;
                golf = oscar.bind(zulu)(backup);
                oscar = null;
                if(!(oscar != golf)) { _fun00028_ip = 537; continue _fun00027 }
 301:
                oscar = golf.dispatch;
                oscar = oscar.bind(golf)(romeo, backup, foxtrot);
                _fun00028_ip = 537; continue _fun00027;
 318:
                oscar = zulu.getDispatchHandler;
                golf = oscar.bind(zulu)(backup);
                oscar = null;
                if(!(oscar != golf)) { _fun00028_ip = 347; continue _fun00027 }
 335:
                oscar = golf.dispatch;
                oscar = oscar.bind(golf)(romeo, backup, foxtrot);
 347:
                golf = _closure1_slot0;
                verify = _closure1_slot2;
                oscar = 6;
                offset = verify[oscar];
                sizing = golf.bind(entity)(offset);
                kilo = sizing.logResumeAnalytics;
                offset = zulu.resumeAnalytics;
                offset = kilo.bind(sizing)(offset);
                oscar = verify[oscar];
                golf = golf.bind(entity)(oscar);
                oscar = golf.createResumeAnalytics;
                oscar = oscar.bind(golf)();
                zulu['resumeAnalytics'] = oscar;
                golf = zulu.socket;
                oscar = golf.handleResumeDispatched;
                oscar = oscar.bind(golf)();
                _fun00028_ip = 537; continue _fun00027;
 429:
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                verify = 6;
                oscar = oscar[verify];
                golf = golf.bind(entity)(oscar);
                oscar = golf.getReadyPayloadByteSizeAnalytics;
                offset = oscar.bind(golf)(romeo);
                oscar = zulu.getDispatchHandler;
                golf = oscar.bind(zulu)(backup);
                oscar = null;
                if(!(oscar != golf)) { _fun00028_ip = 489; continue _fun00027 }
 477:
                oscar = golf.dispatch;
                oscar = oscar.bind(golf)(romeo, backup, foxtrot);
 489:
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                oscar = oscar[verify];
                verify = golf.bind(entity)(oscar);
                golf = verify.logReadyPayloadReceived;
                source = zulu.socket;
                control = verify;
                update = romeo;
                echo = report;
                result = yankee;
                output = offset;
                oscar = control[golf](source, update, echo, result, output, sizing);
 537:
                oscar = zulu.socket;
                oscar = oscar.connectionState;
                golf = _closure1_slot1;
                tango = _closure1_slot2;
                tango = tango[options];
                tango = golf.bind(entity)(tango);
                tango = tango.RESUMING;
                if(!(oscar === tango)) { _fun00028_ip = 617; continue _fun00027 }
 576:
                zulu = zulu.resumeAnalytics;
                tango = zulu.dispatchTime;
                oscar = mike.performance;
                mike = oscar.now;
                mike = mike.bind(oscar)();
                mike = mike - report;
                mike = tango + mike;
                zulu['dispatchTime'] = mike;
 617:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[12] = entity;
        entity = {};
        oscar = 'clear';
        entity['key'] = oscar;
        report = function() { // Original name: value
            entity = this;
            mike = false;
            entity['paused'] = mike;
            mike = entity.queue;
            entity = 0;
            mike['length'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        mike[13] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/gateway/GatewaySocketDispatcher.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();