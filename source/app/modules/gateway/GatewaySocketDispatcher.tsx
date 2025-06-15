// app/modules/gateway/GatewaySocketDispatcher.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
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
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot15;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot15;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
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
                    _fun00004_ip = 67; continue _fun00003;
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
 343:
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
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _shouldYieldToBrowser
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = argFoo;
            zuuluu = argBar;
            option = argBaz;
            entity = null;
            if(!(entity != option)) { _fun00008_ip = 130; continue _fun00007 }
 15:
            tangon = oscard[zuuluu];
            michal = oscard.length;
            report = 1;
            michal = michal - report;
            golfie = zuuluu < michal;
            verify = null;
            if(!golfie) { _fun00008_ip = 48; continue _fun00007 }
 40:
            report = zuuluu + report;
            verify = oscard[report];
 48:
            oscard = entity == option;
            offset = undefined;
            if(oscard) { _fun00008_ip = 67; continue _fun00007 }
 57:
            oscard = option.timeRemaining;
            offset = oscard.bind(option)();
 67:
            yankee = entity != offset;
            golfie = 0;
            oscard = 0;
            if(!yankee) { _fun00008_ip = 81; continue _fun00007 }
 78:
            oscard = offset;
 81:
            tangon = tangon.type;
            offset = entity == verify;
            report = undefined;
            if(offset) { _fun00008_ip = 100; continue _fun00007 }
 95:
            report = verify.type;
 100:
            entity = entity != option;
            if(!entity) { _fun00008_ip = 111; continue _fun00007 }
 107:
            entity = oscard <= golfie;
 111:
            if(!entity) { _fun00008_ip = 121; continue _fun00007 }
 114:
            tangon = tangon === report;
            entity = !tangon;
 121:
            if(!entity) { _fun00008_ip = 128; continue _fun00007 }
 124:
            entity = zuuluu !== michal;
 128:
            return entity;
 130:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    tangon = global;
    verify = tangon.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    offset = 0;
    golfie = oscard[offset];
    entity = undefined;
    golfie = yankee.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    verify = 1;
    golfie = oscard[verify];
    golfie = yankee.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    option = 2;
    golfie = oscard[option];
    golfie = yankee.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    golfie = 3;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.DISPATCHER_IDEAL_TIME_LIMIT_MS;
    var _closure1_slot6 = golfie;
    golfie = 4;
    golfie = oscard[golfie];
    romeon = yankee.bind(entity)(golfie);
    golfie = romeon.prototype;
    yankee = Object.create(golfie, {constructor: {value: romeon}});
    kiloes = 'GatewaySocket';
    sizing = yankee;
    golfie = new sizing[romeon](kiloes, backup);
    golfie = golfie instanceof Object ? golfie : yankee;
    var _closure1_slot7 = golfie;
    romeon = tangon.Set;
    golfie = romeon.prototype;
    yankee = Object.create(golfie, {constructor: {value: romeon}});
    kiloes = ['INITIAL_GUILD', 'READY'];
    sizing = yankee;
    golfie = new sizing[romeon](kiloes, backup);
    golfie = golfie instanceof Object ? golfie : yankee;
    var _closure1_slot8 = golfie;
    romeon = tangon.Set;
    golfie = romeon.prototype;
    yankee = Object.create(golfie, {constructor: {value: romeon}});
    kiloes = ['READY', 'INITIAL_GUILD'];
    sizing = yankee;
    golfie = new sizing[romeon](kiloes, backup);
    golfie = golfie instanceof Object ? golfie : yankee;
    var _closure1_slot9 = golfie;
    romeon = tangon.Set;
    golfie = romeon.prototype;
    yankee = Object.create(golfie, {constructor: {value: romeon}});
    kiloes = ['READY', 'READY_SUPPLEMENTAL', 'RESUMED'];
    sizing = yankee;
    golfie = new sizing[romeon](kiloes, backup);
    golfie = golfie instanceof Object ? golfie : yankee;
    var _closure1_slot10 = golfie;
    yankee = tangon.Set;
    tangon = yankee.prototype;
    golfie = Object.create(tangon, {constructor: {value: yankee}});
    kiloes = ['READY', 'INITIAL_GUILD', 'READY_SUPPLEMENTAL', 'RESUMED', 'VOICE_CHANNEL_SELECT', 'VOICE_STATE_UPDATE', 'VOICE_SERVER_UPDATE', 'RTC_CONNECTION_STATE', 'RTC_CONNECTION_VIDEO', 'RTC_CONNECTION_CLIENT_CONNECT', 'RTC_CONNECTION_PING', 'MEDIA_SESSION_JOINED', 'MEDIA_ENGINE_PERMISSION', 'SESSIONS_REPLACE'];
    sizing = golfie;
    tangon = new sizing[yankee](kiloes, backup);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot11 = tangon;
    tangon = {};
    tangon['NotStarted'] = offset;
    golfie = 'NotStarted';
    tangon[offset] = golfie;
    tangon['Loading'] = verify;
    golfie = 'Loading';
    tangon[verify] = golfie;
    tangon['Loaded'] = option;
    golfie = 'Loaded';
    tangon[option] = golfie;
    var _closure1_slot12 = tangon;
    tangon = {};
    var _closure1_slot13 = tangon;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo) { // Original name: GatewaySocketDispatcher
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            oscard = _closure1_slot3;
            report = _closure2_slot0;
            entity = undefined;
            report = oscard.bind(entity)(zuuluu, report);
            report = argFoo;
            zuuluu['socket'] = report;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 5;
            tangon = oscard[tangon];
            golfie = report.bind(entity)(tangon);
            tangon = golfie.createDispatcherWorkScheduler;
            tangon = tangon.bind(golfie)();
            zuuluu['scheduler'] = tangon;
            tangon = new Array(0);
            zuuluu['queue'] = tangon;
            tangon = true;
            zuuluu['paused'] = tangon;
            tangon = 6;
            tangon = oscard[tangon];
            report = report.bind(entity)(tangon);
            tangon = report.createResumeAnalytics;
            tangon = tangon.bind(report)();
            zuuluu['resumeAnalytics'] = tangon;
            tangon = null;
            zuuluu['getDispatchHandler'] = tangon;
            michal = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure3_slot0;
                    entity = entity.paused;
                    if(entity) { _fun00010_ip = 378; continue _fun00009 }
 19:
                    michal = global;
                    tangon = michal.performance;
                    entity = tangon.now;
                    tangon = entity.bind(tangon)();
                    entity = _closure3_slot0;
                    entity = entity.queue;
                    entity = entity.length;
                    option = 0;
                    entity = option < entity;
                    oscard = 0;
                    if(!entity) { _fun00010_ip = 166; continue _fun00009 }
 62:
                    entity = _closure3_slot0;
                    entity = entity.queue;
                    entity = entity[option];
                    report = entity.status;
                    entity = _closure1_slot12;
                    entity = entity.Loaded;
                    golfie = 0;
                    oscard = 0;
                    if(!(report === entity)) { _fun00010_ip = 166; continue _fun00009 }
 102:
                    offset = golfie + 1;
                    entity = _closure3_slot0;
                    entity = entity.queue;
                    entity = entity.length;
                    oscard = offset;
                    if(!(offset < entity)) { _fun00010_ip = 166; continue _fun00009 }
 127:
                    entity = _closure3_slot0;
                    entity = entity.queue;
                    entity = entity[offset];
                    report = entity.status;
                    entity = _closure1_slot12;
                    entity = entity.Loaded;
                    golfie = offset;
                    oscard = golfie;
                    if(report === entity) { _fun00010_ip = 102; continue _fun00009 }
 166:
                    if(!(option !== oscard)) { _fun00010_ip = 374; continue _fun00009 }
 173:
                    golfie = _closure3_slot0;
                    report = golfie.queue;
                    entity = report.splice;
                    report = entity.bind(report)(option, oscard);
                    oscard = golfie.dispatchMultiple;
                    entity = argFoo;
                    entity = oscard.bind(golfie)(report, entity);
                    if(!entity) { _fun00010_ip = 279; continue _fun00009 }
 213:
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.scheduler;
                    golfie = zuuluu.telemetry;
                    oscard = golfie.timeEnd;
                    verify = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 7;
                    option = option[zuuluu];
                    zuuluu = undefined;
                    zuuluu = verify.bind(zuuluu)(option);
                    zuuluu = zuuluu.WorkSchedulerTelemetryTiming;
                    zuuluu = zuuluu.TIME_TO_QUEUE_EMPTY;
                    zuuluu = oscard.bind(golfie)(zuuluu);
 279:
                    oscard = michal.performance;
                    zuuluu = oscard.now;
                    zuuluu = zuuluu.bind(oscard)();
                    verify = zuuluu - tangon;
                    tangon = _closure1_slot6;
                    tangon = verify > tangon;
                    if(!tangon) { _fun00010_ip = 315; continue _fun00009 }
 312:
                    tangon = !entity;
 315:
                    if(!tangon) { _fun00010_ip = 372; continue _fun00009 }
 318:
                    tangon = _closure1_slot7;
                    zuuluu = tangon.log;
                    backup = report.length;
                    michal = michal.HermesInternal;
                    golfie = michal.concat;
                    kiloes = 'Dispatched ';
                    foxtra = ' messages in ';
                    yankee = 'ms';
                    romeon = verify;
                    michal = kiloes[golfie](backup, foxtra, romeon, yankee, offset);
                    michal = zuuluu.bind(tangon)(michal);
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
            zuuluu['flush'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'hasStuffToDispatchNow';
        entity['key'] = michal;
        michal = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = this;
                entity = michal.queue;
                entity = entity.length;
                zuuluu = 0;
                entity = entity > zuuluu;
                if(!entity) { _fun00012_ip = 55; continue _fun00011 }
 23:
                michal = michal.queue;
                michal = michal[zuuluu];
                zuuluu = michal.status;
                michal = _closure1_slot12;
                michal = michal.Loaded;
                entity = zuuluu === michal;
 55:
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(14);
        michal[0] = entity;
        entity = {};
        oscard = 'processFirstQueuedDispatch';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                golfie = argFoo;
                zuuluu = this;
                michal = new Array(0);
                entity = zuuluu.queue;
                entity = entity.length;
                oscard = 0;
                if(!(entity > oscard)) { _fun00014_ip = 191; continue _fun00013 }
 30:
                tangon = golfie.has;
                entity = zuuluu.queue;
                entity = entity[oscard];
                entity = entity.type;
                entity = tangon.bind(golfie)(entity);
                if(!entity) { _fun00014_ip = 191; continue _fun00013 }
 61:
                entity = zuuluu.queue;
                entity = entity[oscard];
                tangon = entity.status;
                entity = _closure1_slot12;
                entity = entity.Loaded;
                if(!(tangon === entity)) { _fun00014_ip = 191; continue _fun00013 }
 93:
                tangon = michal.push;
                option = zuuluu.queue;
                entity = option.shift;
                entity = entity.bind(option)();
                entity = tangon.bind(michal)(entity);
                entity = zuuluu.queue;
                entity = entity.length;
                if(!(entity > oscard)) { _fun00014_ip = 191; continue _fun00013 }
 134:
                tangon = golfie.has;
                entity = zuuluu.queue;
                entity = entity[oscard];
                entity = entity.type;
                entity = tangon.bind(golfie)(entity);
                if(!entity) { _fun00014_ip = 191; continue _fun00013 }
 162:
                entity = zuuluu.queue;
                entity = entity[oscard];
                tangon = entity.status;
                entity = _closure1_slot12;
                entity = entity.Loaded;
                if(tangon === entity) { _fun00014_ip = 93; continue _fun00013 }
 191:
                entity = zuuluu.dispatchMultiple;
                entity = entity.bind(zuuluu)(michal);
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'unpauseDispatchQueue';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                zuuluu = this;
                entity = false;
                zuuluu['paused'] = entity;
                tangon = _closure1_slot14;
                michal = zuuluu.queue;
                entity = undefined;
                report = tangon.bind(entity)(michal);
                tangon = report.bind(entity)();
                michal = tangon.done;
                if(michal) { _fun00016_ip = 74; continue _fun00015 }
 43:
                oscard = tangon.value;
                michal = zuuluu.maybePreload;
                michal = michal.bind(zuuluu)(oscard);
                oscard = report.bind(entity)();
                michal = oscard.done;
                tangon = oscard;
                if(!michal) { _fun00016_ip = 43; continue _fun00015 }
 74:
                michal = zuuluu.flush;
                michal = michal.bind(zuuluu)();
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'receiveDispatch';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zuuluu = argBar;
                michal = this;
                tangon = michal.getDispatchHandler;
                entity = null;
                if(!(entity != tangon)) { _fun00018_ip = 111; continue _fun00017 }
 18:
                tangon = {};
                report = argFoo;
                tangon['data'] = report;
                tangon['type'] = zuuluu;
                report = argBaz;
                tangon['compressionAnalytics'] = report;
                report = _closure1_slot12;
                report = report.NotStarted;
                tangon['status'] = report;
                tangon['preloadPromise'] = entity;
                tangon['preloadedData'] = entity;
                report = michal.queue;
                entity = report.push;
                entity = entity.bind(report)(tangon);
                entity = michal.maybePreload;
                entity = entity.bind(michal)(tangon);
                if(entity) { _fun00018_ip = 107; continue _fun00017 }
 96:
                entity = michal.scheduleFlush;
                entity = entity.bind(michal)(zuuluu);
 107:
                entity = undefined;
                return entity;
 111:
                entity = global;
                zuuluu = entity.Error;
                michal = undefined;
                entity = 'getDispatchHandler needs to be passed in first!';
                entity = zuuluu.bind(michal)(entity);
                throw entity;
            }
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'maybePreload';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zuuluu = argFoo;
                report = this;
                var _closure3_slot0 = report;
                var _closure3_slot1 = zuuluu;
                michal = report.paused;
                if(!michal) { _fun00020_ip = 54; continue _fun00019 }
 25:
                oscard = _closure1_slot8;
                tangon = oscard.has;
                michal = zuuluu.type;
                michal = tangon.bind(oscard)(michal);
                if(michal) { _fun00020_ip = 54; continue _fun00019 }
 50:
                michal = false;
                return michal;
 54:
                tangon = zuuluu.status;
                michal = _closure1_slot12;
                michal = michal.NotStarted;
                if(!(tangon === michal)) { _fun00020_ip = 161; continue _fun00019 }
 76:
                tangon = report.getDispatchHandler;
                michal = zuuluu.type;
                option = tangon.bind(report)(michal);
                michal = null;
                report = michal == option;
                tangon = undefined;
                if(report) { _fun00020_ip = 119; continue _fun00019 }
 103:
                golfie = option.preload;
                report = zuuluu.data;
                tangon = golfie.bind(option)(report);
 119:
                if(!(michal != tangon)) { _fun00020_ip = 135; continue _fun00019 }
 123:
                report = _closure1_slot12;
                report = report.Loading;
                _fun00020_ip = 145; continue _fun00019;
 135:
                oscard = _closure1_slot12;
                report = oscard.Loaded;
 145:
                zuuluu['status'] = report;
                zuuluu['preloadPromise'] = tangon;
                if(!(michal == tangon)) { _fun00020_ip = 165; continue _fun00019 }
 161:
                michal = false;
                return michal;
 165:
                zuuluu = tangon.then;
                michal = function(argFoo) {
                    entity = _closure3_slot1;
                    zuuluu = argFoo;
                    entity['preloadedData'] = zuuluu;
                    zuuluu = _closure1_slot12;
                    zuuluu = zuuluu.Loaded;
                    entity['status'] = zuuluu;
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.scheduleFlush;
                    entity = entity.type;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.catch;
                entity = function(argFoo) {
                    entity = _closure3_slot0;
                    zuuluu = entity.socket;
                    michal = zuuluu.resetSocketOnDispatchError;
                    entity = {};
                    report = argFoo;
                    entity['error'] = report;
                    tangon = _closure3_slot1;
                    tangon = tangon.type;
                    entity['action'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                entity = true;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'scheduleFlush';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                tangon = argFoo;
                entity = this;
                michal = entity.paused;
                if(michal) { _fun00022_ip = 130; continue _fun00021 }
 15:
                report = _closure1_slot9;
                zuuluu = report.has;
                zuuluu = zuuluu.bind(report)(tangon);
                report = entity.scheduler;
                if(zuuluu) { _fun00022_ip = 75; continue _fun00021 }
 41:
                zuuluu = report.hasWorkScheduled;
                if(zuuluu) { _fun00022_ip = 95; continue _fun00021 }
 50:
                golfie = entity.scheduler;
                oscard = golfie.requestWorkTimeout;
                zuuluu = entity.flush;
                zuuluu = oscard.bind(golfie)(zuuluu);
                _fun00022_ip = 95; continue _fun00021;
 75:
                zuuluu = report.clearWorkTimeout;
                zuuluu = zuuluu.bind(report)();
                zuuluu = entity.flush;
                zuuluu = zuuluu.bind(entity)();
 95:
                zuuluu = _closure1_slot11;
                michal = zuuluu.has;
                michal = michal.bind(zuuluu)(tangon);
                if(!michal) { _fun00022_ip = 130; continue _fun00021 }
 112:
                michal = entity.scheduler;
                entity = michal.markCriticalWorkScheduled;
                entity = entity.bind(michal)();
 130:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'getDispatchTimings';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = _closure1_slot13;
            return entity;
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'getSchedulerTelemetry';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            entity = entity.scheduler;
            entity = entity.telemetry;
            return entity;
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'getIsSchedulerBackgrounded';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            entity = entity.scheduler;
            entity = entity.isBackgrounded;
            return entity;
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'toggleRequestIdleCallback';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = entity.scheduler;
            michal = zuuluu.toggleRequestIdleCallback;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[9] = entity;
        entity = {};
        oscard = 'getIsRequestIdleCallbackEnabled';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            entity = entity.scheduler;
            entity = entity.isRequestIdleCallbackEnabled;
            return entity;
        };
        entity['value'] = oscard;
        michal[10] = entity;
        entity = {};
        oscard = 'dispatchMultiple';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                michal = argFoo;
                entity = this;
                var _closure3_slot0 = entity;
                report = michal;
                var _closure3_slot1 = michal;
                zuuluu = argBar;
                var _closure3_slot2 = zuuluu;
                michal = michal.length;
                option = 0;
                if(!(option !== michal)) { _fun00024_ip = 483; continue _fun00023 }
 40:
                michal = 'none';
                var _closure3_slot3 = michal;
                michal = false;
                var _closure3_slot4 = michal;
                zuuluu = entity.scheduler;
                yankee = zuuluu.telemetry;
                golfie = yankee.measure;
                romeon = _closure1_slot0;
                oscard = _closure1_slot2;
                offset = 7;
                oscard = oscard[offset];
                verify = undefined;
                oscard = romeon.bind(verify)(oscard);
                oscard = oscard.WorkSchedulerTelemetryMeasurement;
                oscard = oscard.COUNT_INITIAL_DISPATCHS_LENGTH;
                report = report.length;
                report = golfie.bind(yankee)(oscard, report);
 120: // try_start_0
                report = new Array(0);
                var _closure3_slot5 = report;
                report = entity.socket;
                oscard = report.connectionState;
                golfie = _closure1_slot1;
                yankee = _closure1_slot2;
                report = 8;
                report = yankee[report];
                report = golfie.bind(verify)(report);
                report = report.RESUMING;
                if(!(oscard === report)) { _fun00024_ip = 210; continue _fun00023 }
 170:
                oscard = _closure1_slot1;
                golfie = _closure1_slot2;
                report = 9;
                report = golfie[report];
                report = oscard.bind(verify)(report);
                golfie = report.Emitter;
                oscard = golfie.pause;
                report = 150;
                report = oscard.bind(golfie)(report);
 210:
                var _closure3_slot6 = option;
                oscard = _closure1_slot1;
                report = _closure1_slot2;
                golfie = 9;
                report = report[golfie];
                report = oscard.bind(verify)(report);
                yankee = report.Emitter;
                oscard = yankee.batched;
                report = function() {
                    _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                        entity = _closure3_slot1;
                        entity = entity.length;
                        oscard = 0;
                        tangon = oscard < entity;
                        entity = undefined;
                        romeon = 2;
                        verify = 1;
                        yankee = global;
                        report = null;
                        offset = 0;
                        if(!tangon) { _fun00026_ip = 405; continue _fun00025 }
 41:
                        tangon = _closure3_slot1;
                        golfie = tangon[offset];
                        tangon = golfie.type;
                        _closure3_slot3 = tangon;
                        option = _closure3_slot4;
                        tangon = offset;
                        if(option) { _fun00026_ip = 87; continue _fun00025 }
 68:
                        kiloes = _closure1_slot10;
                        backup = kiloes.has;
                        foxtra = golfie.type;
                        option = backup.bind(kiloes)(foxtra);
 87:
                        _closure3_slot4 = option;
                        foxtra = yankee.performance;
                        option = foxtra.now;
                        foxtra = option.bind(foxtra)();
                        backup = _closure3_slot0;
                        option = backup.dispatchOne;
                        option = option.bind(backup)(golfie);
                        backup = yankee.performance;
                        option = backup.now;
                        option = option.bind(backup)();
                        option = option - foxtra;
                        _closure3_slot6 = option;
                        foxtra = golfie.type;
                        kiloes = _closure3_slot6;
                        golfie = _closure1_slot13;
                        option = golfie[foxtra];
                        if(!(report == option)) { _fun00026_ip = 177; continue _fun00025 }
 167:
                        option = [0, 0];
 177:
                        golfie = _closure1_slot5;
                        option = golfie.bind(entity)(option, romeon);
                        golfie = option[oscard];
                        backup = option[verify];
                        option = _closure1_slot13;
                        golfie = golfie * backup;
                        kiloes = golfie + kiloes;
                        golfie = backup + verify;
                        kiloes = kiloes / golfie;
                        golfie = new Array(2);
                        golfie[0] = kiloes;
                        backup = backup + verify;
                        golfie[1] = backup;
                        option[foxtra] = golfie;
                        foxtra = _closure1_slot16;
                        option = _closure3_slot1;
                        golfie = _closure3_slot2;
                        golfie = foxtra.bind(entity)(option, tangon, golfie);
                        option = _closure3_slot1;
                        if(golfie) { _fun00026_ip = 281; continue _fun00025 }
 261:
                        offset = tangon + 1;
                        golfie = option.length;
                        if(offset < golfie) { _fun00026_ip = 41; continue _fun00025 }
 276:
                        _fun00026_ip = 405; continue _fun00025;
 281:
                        golfie = option.slice;
                        tangon = tangon + verify;
                        tangon = golfie.bind(option)(tangon);
                        _closure3_slot5 = tangon;
                        tangon = _closure3_slot2;
                        tangon = report != tangon;
                        if(!tangon) { _fun00026_ip = 328; continue _fun00025 }
 310:
                        golfie = _closure3_slot2;
                        report = golfie.timeRemaining;
                        report = report.bind(golfie)();
                        tangon = report <= oscard;
 328:
                        if(!tangon) { _fun00026_ip = 405; continue _fun00025 }
 331:
                        tangon = _closure3_slot0;
                        tangon = tangon.scheduler;
                        oscard = tangon.telemetry;
                        report = oscard.timeTrack;
                        golfie = _closure1_slot0;
                        option = _closure1_slot2;
                        tangon = 7;
                        tangon = option[tangon];
                        tangon = golfie.bind(entity)(tangon);
                        tangon = tangon.WorkSchedulerTelemetryTiming;
                        tangon = tangon.TIME_OVER_DEADLINE;
                        zuuluu = _closure3_slot2;
                        zuuluu = zuuluu.timeSinceExpiration;
                        zuuluu = report.bind(oscard)(tangon, zuuluu);
 405:
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot2;
                        michal = 10;
                        michal = tangon[michal];
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.flush;
                        michal = michal.bind(zuuluu)();
                        return entity;
                    }
                };
                report = oscard.bind(yankee)(report);
                report = _closure3_slot4;
                if(!report) { _fun00024_ip = 296; continue _fun00023 }
 263:
                oscard = _closure1_slot1;
                report = _closure1_slot2;
                report = report[golfie];
                report = oscard.bind(verify)(report);
                oscard = report.Emitter;
                report = oscard.resume;
                report = report.bind(oscard)();
 296:
                report = _closure3_slot5;
                report = report.length;
                if(!(!(report > option))) { _fun00024_ip = 314; continue _fun00023 }
 309: // try_end0
                _fun00024_ip = 479; continue _fun00023;
 314: // try_start_1
                report = entity.scheduler;
                golfie = report.telemetry;
                oscard = golfie.measure;
                report = _closure1_slot0;
                zuuluu = _closure1_slot2;
                zuuluu = zuuluu[offset];
                zuuluu = report.bind(verify)(zuuluu);
                zuuluu = zuuluu.WorkSchedulerTelemetryMeasurement;
                report = zuuluu.COUNT_DISPATCHES_LEFT_AFTER_YIELD;
                zuuluu = _closure3_slot5;
                zuuluu = zuuluu.length;
                zuuluu = oscard.bind(golfie)(report, zuuluu);
                oscard = entity.queue;
                report = oscard.unshift;
                backup = _closure3_slot5;
                zuuluu = new Array(0);
                kiloes = zuuluu;
                foxtra = 0;
                golfie = arraySpread(kiloes, backup, foxtra);
                kiloes = report;
                backup = zuuluu;
                foxtra = oscard;
                zuuluu = apply(kiloes, backup, foxtra);
                golfie = entity.scheduler;
                oscard = golfie.requestWorkTimeout;
                report = entity.flush;
                zuuluu = true;
                zuuluu = oscard.bind(golfie)(report, zuuluu);
 444: // try_end1
                return michal;
 446: // catch_target0 // catch_target1
                CatchBlockStart(arg_register=4);
                zuuluu = entity.socket;
                michal = zuuluu.resetSocketOnDispatchError;
                entity = {};
                entity['error'] = report;
                tangon = _closure3_slot3;
                entity['action'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 479:
                entity = true;
                return entity;
 483:
                entity = true;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[11] = entity;
        entity = {};
        oscard = 'dispatchOne';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                entity = argFoo;
                zuuluu = this;
                romeon = entity.data;
                backup = entity.type;
                yankee = entity.compressionAnalytics;
                foxtra = entity.preloadedData;
                michal = global;
                tangon = michal.performance;
                entity = tangon.now;
                report = entity.bind(tangon)();
                entity = zuuluu.socket;
                golfie = entity.connectionState;
                verify = _closure1_slot1;
                entity = _closure1_slot2;
                option = 8;
                oscard = entity[option];
                entity = undefined;
                oscard = verify.bind(entity)(oscard);
                oscard = oscard.RESUMING;
                if(!(golfie === oscard)) { _fun00028_ip = 230; continue _fun00027 }
 95:
                oscard = zuuluu.resumeAnalytics;
                oscard = oscard.lastUpdateTime;
                verify = report - oscard;
                oscard = zuuluu.resumeAnalytics;
                golfie = oscard.numEvents;
                oscard = 0;
                if(!(oscard !== golfie)) { _fun00028_ip = 159; continue _fun00027 }
 129:
                oscard = zuuluu.resumeAnalytics;
                oscard = oscard.largestWaitTime;
                if(!(verify > oscard)) { _fun00028_ip = 171; continue _fun00027 }
 145:
                oscard = zuuluu.resumeAnalytics;
                oscard['largestWaitTime'] = verify;
                _fun00028_ip = 171; continue _fun00027;
 159:
                oscard = zuuluu.resumeAnalytics;
                oscard['initialWaitTime'] = verify;
 171:
                golfie = zuuluu.resumeAnalytics;
                oscard = golfie.totalWaitTime;
                oscard = oscard + verify;
                golfie['totalWaitTime'] = oscard;
                oscard = zuuluu.resumeAnalytics;
                oscard['lastUpdateTime'] = report;
                golfie = zuuluu.resumeAnalytics;
                verify = golfie.numEvents;
                oscard = 1;
                oscard = verify + oscard;
                golfie['numEvents'] = oscard;
 230:
                golfie = _closure1_slot1;
                verify = _closure1_slot2;
                oscard = 10;
                oscard = verify[oscard];
                golfie = golfie.bind(entity)(oscard);
                oscard = golfie.flush;
                oscard = oscard.bind(golfie)(backup, romeon);
                oscard = 'READY';
                if(!(oscard !== backup)) { _fun00028_ip = 429; continue _fun00027 }
 273:
                oscard = 'RESUMED';
                if(!(oscard !== backup)) { _fun00028_ip = 318; continue _fun00027 }
 281:
                oscard = zuuluu.getDispatchHandler;
                golfie = oscard.bind(zuuluu)(backup);
                oscard = null;
                if(!(oscard != golfie)) { _fun00028_ip = 537; continue _fun00027 }
 301:
                oscard = golfie.dispatch;
                oscard = oscard.bind(golfie)(romeon, backup, foxtra);
                _fun00028_ip = 537; continue _fun00027;
 318:
                oscard = zuuluu.getDispatchHandler;
                golfie = oscard.bind(zuuluu)(backup);
                oscard = null;
                if(!(oscard != golfie)) { _fun00028_ip = 347; continue _fun00027 }
 335:
                oscard = golfie.dispatch;
                oscard = oscard.bind(golfie)(romeon, backup, foxtra);
 347:
                golfie = _closure1_slot0;
                verify = _closure1_slot2;
                oscard = 6;
                offset = verify[oscard];
                sizing = golfie.bind(entity)(offset);
                kiloes = sizing.logResumeAnalytics;
                offset = zuuluu.resumeAnalytics;
                offset = kiloes.bind(sizing)(offset);
                kiloes = zuuluu.socket;
                offset = kiloes.handleResumeDispatched;
                offset = offset.bind(kiloes)();
                oscard = verify[oscard];
                golfie = golfie.bind(entity)(oscard);
                oscard = golfie.createResumeAnalytics;
                oscard = oscard.bind(golfie)();
                zuuluu['resumeAnalytics'] = oscard;
                _fun00028_ip = 537; continue _fun00027;
 429:
                golfie = _closure1_slot0;
                oscard = _closure1_slot2;
                verify = 6;
                oscard = oscard[verify];
                golfie = golfie.bind(entity)(oscard);
                oscard = golfie.getReadyPayloadByteSizeAnalytics;
                offset = oscard.bind(golfie)(romeon);
                oscard = zuuluu.getDispatchHandler;
                golfie = oscard.bind(zuuluu)(backup);
                oscard = null;
                if(!(oscard != golfie)) { _fun00028_ip = 489; continue _fun00027 }
 477:
                oscard = golfie.dispatch;
                oscard = oscard.bind(golfie)(romeon, backup, foxtra);
 489:
                golfie = _closure1_slot0;
                oscard = _closure1_slot2;
                oscard = oscard[verify];
                verify = golfie.bind(entity)(oscard);
                golfie = verify.logReadyPayloadReceived;
                source = zuuluu.socket;
                ctrled = verify;
                update = romeon;
                echoed = report;
                result = yankee;
                output = offset;
                oscard = ctrled[golfie](source, update, echoed, result, output, sizing);
 537:
                oscard = zuuluu.socket;
                oscard = oscard.connectionState;
                golfie = _closure1_slot1;
                tangon = _closure1_slot2;
                tangon = tangon[option];
                tangon = golfie.bind(entity)(tangon);
                tangon = tangon.RESUMING;
                if(!(oscard === tangon)) { _fun00028_ip = 617; continue _fun00027 }
 576:
                zuuluu = zuuluu.resumeAnalytics;
                tangon = zuuluu.dispatchTime;
                oscard = michal.performance;
                michal = oscard.now;
                michal = michal.bind(oscard)();
                michal = michal - report;
                michal = tangon + michal;
                zuuluu['dispatchTime'] = michal;
 617:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[12] = entity;
        entity = {};
        oscard = 'clear';
        entity['key'] = oscard;
        report = function() { // Original name: value
            entity = this;
            michal = false;
            entity['paused'] = michal;
            michal = entity.queue;
            entity = 0;
            michal['length'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        michal[13] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/gateway/GatewaySocketDispatcher.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();