// discord_common/js/packages/flux/Dispatcher.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscard;
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
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 342; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
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
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot10;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot10;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
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
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
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
 342:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: setDisplayName
        michal = argBar;
        entity = argFoo;
        entity['displayName'] = michal;
        entity = undefined;
        return entity;
    };
    var _closure1_slot11 = entity;
    michal = global;
    offset = michal.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    option = michal.Set;
    michal = option.prototype;
    tangon = Object.create(michal, {constructor: {value: option}});
    foxtra = ['APP_STATE_UPDATE', 'CLEAR_CACHES', 'CONNECTION_CLOSED', 'CONNECTION_OPEN', 'CONNECTION_RESUMED', 'LOGIN_SUCCESS', 'LOGIN', 'LOGOUT', 'MESSAGE_SEND_FAILED', 'PUSH_NOTIFICATION_CLICK', 'RESET_SOCKET', 'SESSION_START', 'UPLOAD_FAIL', 'WRITE_CACHES'];
    backup = tangon;
    michal = new backup[option](foxtra, romeon);
    michal = michal instanceof Object ? michal : tangon;
    var _closure1_slot6 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.Logger;
    michal = option.prototype;
    tangon = Object.create(michal, {constructor: {value: option}});
    foxtra = 'Flux';
    backup = tangon;
    michal = new backup[option](foxtra, romeon);
    michal = michal instanceof Object ? michal : tangon;
    var _closure1_slot7 = michal;
    michal = function() {
        tangon = _closure1_slot5;
        zuuluu = function() { // Original name: Dispatcher
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                oscard = arguments[0];
                zuuluu = arguments[1];
                michal = this;
                entity = undefined;
                if(!(oscard === entity)) { _fun00008_ip = 17; continue _fun00007 }
 15:
                oscard = 0;
 17:
                golfie = _closure1_slot4;
                report = _closure2_slot0;
                report = golfie.bind(entity)(michal, report);
                report = new Array(0);
                michal['_interceptors'] = report;
                report = {};
                michal['_subscriptions'] = report;
                report = new Array(0);
                michal['_waitQueue'] = report;
                report = false;
                michal['_processingWaitQueue'] = report;
                report = null;
                michal['_currentDispatchActionType'] = report;
                golfie = _closure1_slot8;
                option = golfie.prototype;
                option = Object.create(option, {constructor: {value: golfie}});
                yankee = option;
                golfie = new yankee[golfie](offset);
                golfie = golfie instanceof Object ? golfie : option;
                michal['_actionHandlers'] = golfie;
                michal['_sentryUtils'] = entity;
                golfie = {};
                michal['functionCache'] = golfie;
                michal['_defaultBand'] = oscard;
                oscard = arguments[2];
                michal['_sentryUtils'] = oscard;
                if(!(report == zuuluu)) { _fun00008_ip = 190; continue _fun00007 }
 144:
                report = _closure1_slot0;
                oscard = _closure1_slot3;
                tangon = 3;
                tangon = oscard[tangon];
                tangon = report.bind(entity)(tangon);
                tangon = tangon.ActionLogger;
                report = tangon.prototype;
                report = Object.create(report, {constructor: {value: tangon}});
                yankee = report;
                tangon = new yankee[tangon](offset);
                zuuluu = tangon instanceof Object ? tangon : report;
 190:
                michal['actionLogger'] = zuuluu;
                report = michal.actionLogger;
                tangon = report.on;
                zuuluu = 'trace';
                michal = function(argFoo, argBar, argBaz) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        oscard = argBaz;
                        report = _closure1_slot1;
                        entity = _closure1_slot3;
                        tangon = 4;
                        zuuluu = entity[tangon];
                        entity = undefined;
                        zuuluu = report.bind(entity)(zuuluu);
                        zuuluu = zuuluu.isTracing;
                        if(!zuuluu) { _fun00010_ip = 44; continue _fun00009 }
 37:
                        report = 10;
                        zuuluu = oscard >= report;
 44:
                        if(!zuuluu) { _fun00010_ip = 86; continue _fun00009 }
 47:
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot3;
                        michal = michal[tangon];
                        report = zuuluu.bind(entity)(michal);
                        tangon = report.mark;
                        zuuluu = '🦥';
                        michal = argBar;
                        michal = tangon.bind(report)(zuuluu, michal, oscard);
 86:
                        return entity;
                    }
                };
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'isDispatching';
        entity['key'] = michal;
        michal = function() { // Original name: value
            entity = this;
            michal = entity._currentDispatchActionType;
            entity = null;
            entity = entity != michal;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(13);
        michal[0] = entity;
        entity = {};
        oscard = 'dispatch';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            michal = this;
            var _closure3_slot0 = michal;
            michal = argFoo;
            var _closure3_slot1 = michal;
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            tangon = function(argFoo, argBar) {
                michal = argFoo;
                var _closure4_slot0 = michal;
                michal = argBar;
                var _closure4_slot1 = michal;
                michal = _closure3_slot0;
                tangon = michal._waitQueue;
                zuuluu = tangon.push;
                entity = function() {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0: // try_start_0
                        michal = _closure3_slot0;
                        zuuluu = michal.functionCache;
                        michal = _closure3_slot1;
                        michal = michal.type;
                        zuuluu = zuuluu[michal];
                        michal = null;
                        if(!(michal == zuuluu)) { _fun00012_ip = 107; continue _fun00011 }
 32:
                        zuuluu = _closure3_slot0;
                        oscard = zuuluu.functionCache;
                        michal = _closure3_slot1;
                        report = michal.type;
                        tangon = function(argFoo) {
                            zuuluu = _closure3_slot0;
                            michal = zuuluu._dispatchWithDevtools;
                            entity = argFoo;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        oscard[report] = tangon;
                        report = _closure1_slot11;
                        tangon = zuuluu.functionCache;
                        zuuluu = michal.type;
                        tangon = tangon[zuuluu];
                        zuuluu = michal.type;
                        michal = 'dispatch_';
                        zuuluu = michal + zuuluu;
                        michal = undefined;
                        michal = report.bind(michal)(tangon, zuuluu);
 107:
                        michal = _closure3_slot0;
                        zuuluu = michal.functionCache;
                        michal = _closure3_slot1;
                        entity = michal.type;
                        entity = zuuluu[entity];
                        entity = entity.bind(zuuluu)(michal);
                        michal = _closure4_slot0;
                        entity = undefined;
                        entity = michal.bind(entity)();
 148: // try_end0
                        _fun00012_ip = 166; continue _fun00011;
 150: // catch_target0
                        CatchBlockStart(arg_register=2);
                        michal = _closure4_slot1;
                        entity = undefined;
                        entity = michal.bind(entity)(zuuluu);
 166:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(entity);
                entity = michal.flushWaitQueue;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'flushWaitQueue';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = this;
                entity = undefined;
                offset = undefined;
                michal = undefined;
                golfie = undefined;
                tangon = zuuluu._processingWaitQueue;
                if(tangon) { _fun00014_ip = 394; continue _fun00013 }
 23: // try_start_0
                oscard = true;
                zuuluu['_processingWaitQueue'] = oscard;
                option = _closure1_slot1;
                report = _closure1_slot3;
                verify = 5;
                report = report[verify];
                report = option.bind(entity)(report);
                report['isDispatching'] = oscard;
                option = 0;
                offset = 0;
                report = zuuluu._waitQueue;
                report = report.length;
                oscard = 100;
                if(!(report > option)) { _fun00014_ip = 190; continue _fun00013 }
 82:
                report = offset;
                report = report + 1;
                offset = report;
                if(!(!(report > oscard))) { _fun00014_ip = 226; continue _fun00013 }
 98:
                report = zuuluu._waitQueue;
                report = report.length;
                if(!(report > option)) { _fun00014_ip = 148; continue _fun00013 }
 113:
                yankee = zuuluu._waitQueue;
                report = yankee.shift;
                report = report.bind(yankee)();
                report = report.bind(entity)();
                report = zuuluu._waitQueue;
                report = report.length;
                if(report > option) { _fun00014_ip = 113; continue _fun00013 }
 148:
                yankee = _closure1_slot1;
                report = _closure1_slot3;
                report = report[verify];
                yankee = yankee.bind(entity)(report);
                report = yankee.emit;
                report = report.bind(yankee)();
                report = zuuluu._waitQueue;
                report = report.length;
                if(report > option) { _fun00014_ip = 82; continue _fun00013 }
 190: // try_end0
                oscard = false;
                zuuluu['_processingWaitQueue'] = oscard;
                option = _closure1_slot1;
                report = _closure1_slot3;
                report = report[verify];
                report = option.bind(entity)(report);
                report['isDispatching'] = oscard;
                _fun00014_ip = 394; continue _fun00013;
 226: // try_start_1
                oscard = _closure1_slot2;
                option = _closure1_slot3;
                report = 6;
                report = option[report];
                oscard = oscard.bind(entity)(report);
                report = oscard.serialize;
                option = report.bind(oscard)();
                golfie = option;
                oscard = _closure1_slot7;
                report = oscard.error;
                tangon = 'LastFewActions';
                tangon = report.bind(oscard)(tangon, option);
                report = zuuluu._sentryUtils;
                michal = report;
                tangon = null;
                if(!(tangon != report)) { _fun00014_ip = 332; continue _fun00013 }
 295:
                report = michal;
                tangon = report.addBreadcrumb;
                michal = {};
                oscard = 'Dispatcher: Dispatch loop detected';
                michal['message'] = oscard;
                oscard = {};
                oscard['lastFewActions'] = golfie;
                michal['data'] = oscard;
                michal = tangon.bind(report)(michal);
 332:
                michal = global;
                tangon = michal.Error;
                michal = 'Dispatch loop detected, aborting';
                michal = tangon.bind(entity)(michal);
                throw michal;
 353: // try_end1 // catch_target0 // catch_target1
                CatchBlockStart(arg_register=1);
                tangon = false;
                zuuluu['_processingWaitQueue'] = tangon;
                report = _closure1_slot1;
                oscard = _closure1_slot3;
                zuuluu = 5;
                zuuluu = oscard[zuuluu];
                zuuluu = report.bind(entity)(zuuluu);
                zuuluu['isDispatching'] = tangon;
                throw michal;
 394:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = '_dispatchWithDevtools';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            zuuluu = this;
            michal = zuuluu._dispatchWithLogging;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = '_dispatchWithLogging';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                oscard = argFoo;
                golfie = this;
                var _closure3_slot0 = golfie;
                michal = oscard;
                var _closure3_slot1 = oscard;
                verify = _closure1_slot1;
                offset = _closure1_slot3;
                option = 7;
                zuuluu = offset[option];
                entity = undefined;
                foxtra = verify.bind(entity)(zuuluu);
                yankee = golfie._currentDispatchActionType;
                zuuluu = null;
                romeon = zuuluu == yankee;
                output = oscard.type;
                sizing = golfie._currentDispatchActionType;
                zuuluu = global;
                yankee = zuuluu.HermesInternal;
                kiloes = yankee.concat;
                backup = 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch. Action: ';
                yankee = ' Already dispatching: ';
                yankee = kiloes.bind(backup)(output, yankee, sizing);
                yankee = foxtra.bind(entity)(romeon, yankee);
                option = offset[option];
                offset = verify.bind(entity)(option);
                verify = oscard.type;
                option = 'Dispatch.dispatch(...) called without an action type';
                option = offset.bind(entity)(verify, option);
                verify = _closure1_slot6;
                option = verify.has;
                oscard = oscard.type;
                oscard = option.bind(verify)(oscard);
                if(!oscard) { _fun00016_ip = 198; continue _fun00015 }
 153:
                verify = _closure1_slot7;
                option = verify.log;
                oscard = michal;
                yankee = oscard.type;
                oscard = zuuluu.HermesInternal;
                offset = oscard.concat;
                oscard = 'Dispatching ';
                oscard = offset.bind(oscard)(yankee);
                oscard = option.bind(verify)(oscard);
 198:
                verify = _closure1_slot0;
                yankee = _closure1_slot3;
                oscard = 8;
                option = yankee[oscard];
                romeon = verify.bind(entity)(option);
                offset = romeon.mark;
                verify = michal;
                option = verify.type;
                option = offset.bind(romeon)(option);
                offset = _closure1_slot2;
                option = 6;
                option = yankee[option];
                yankee = offset.bind(entity)(option);
                offset = yankee.add;
                option = verify.type;
                option = offset.bind(yankee)(option);
                option = golfie.actionLogger;
                golfie = option.log;
                report = function(argFoo) {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        michal = argFoo;
 3: // try_start_0
                        report = _closure3_slot0;
                        tangon = _closure3_slot1;
                        zuuluu = tangon.type;
                        report['_currentDispatchActionType'] = zuuluu;
                        zuuluu = report._dispatch;
                        michal = zuuluu.bind(report)(tangon, michal);
 37: // try_end0
                        michal = _closure3_slot0;
                        entity = null;
                        michal['_currentDispatchActionType'] = entity;
                        entity = undefined;
                        return entity;
 53: // catch_target0
                        CatchBlockStart(arg_register=0);
                        zuuluu = _closure3_slot0;
                        michal = null;
                        zuuluu['_currentDispatchActionType'] = michal;
                        throw entity;
                    }
                };
                report = golfie.bind(option)(verify, report);
                option = report.totalTime;
                golfie = 100;
                if(!(option > golfie)) { _fun00016_ip = 364; continue _fun00015 }
 304:
                option = _closure1_slot7;
                golfie = option.verbose;
                verify = michal;
                source = verify.type;
                echoed = report.totalTime;
                report = zuuluu.HermesInternal;
                yankee = report.concat;
                ctrled = 'Slow dispatch on ';
                update = ': ';
                result = 'ms';
                report = ctrled[yankee](source, update, echoed, result, output);
                report = golfie.bind(option)(report);
 364: // try_start_0
                report = _closure1_slot0;
                tangon = _closure1_slot3;
                tangon = tangon[oscard];
                report = report.bind(entity)(tangon);
                tangon = report.measure;
                option = michal.type;
                zuuluu = zuuluu.HermesInternal;
                golfie = zuuluu.concat;
                oscard = 'DISPATCH[';
                zuuluu = ']';
                zuuluu = golfie.bind(oscard)(option, zuuluu);
                michal = michal.type;
                michal = tangon.bind(report)(zuuluu, michal);
 430: // try_end0
                _fun00016_ip = 434; continue _fun00015;
 432: // catch_target0
                CatchBlockStart(arg_register=1);
 434:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = '_dispatch';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zuuluu = argFoo;
                tangon = argBar;
                report = this;
                var _closure3_slot0 = zuuluu;
                var _closure3_slot1 = tangon;
                golfie = _closure1_slot9;
                oscard = report._interceptors;
                entity = undefined;
                option = golfie.bind(entity)(oscard);
                golfie = option.bind(entity)();
                oscard = golfie.done;
                if(oscard) { _fun00020_ip = 85; continue _fun00019 }
 51:
                oscard = golfie.value;
                oscard = oscard.bind(entity)(zuuluu);
                if(oscard) { _fun00020_ip = 81; continue _fun00019 }
 64:
                verify = option.bind(entity)();
                oscard = verify.done;
                golfie = verify;
                if(oscard) { _fun00020_ip = 85; continue _fun00019 }
 79:
                _fun00020_ip = 51; continue _fun00019;
 81:
                oscard = false;
                return oscard;
 85:
                golfie = report._actionHandlers;
                oscard = golfie.getOrderedActionHandlers;
                oscard = oscard.bind(golfie)(zuuluu);
                var _closure3_slot2 = oscard;
                option = function() { // Original name: _loop
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        zuuluu = _closure3_slot2;
                        entity = _closure3_slot3;
                        entity = zuuluu[entity];
                        oscard = entity.name;
                        zuuluu = entity.actionHandler;
                        var _closure4_slot0 = zuuluu;
                        zuuluu = entity.storeDidChange;
                        report = _closure3_slot1;
                        entity = undefined;
                        tangon = function() {
                            zuuluu = _closure4_slot0;
                            michal = _closure3_slot0;
                            entity = undefined;
                            entity = zuuluu.bind(entity)(michal);
                            return entity;
                        };
                        report = report.bind(entity)(oscard, tangon);
                        tangon = false;
                        if(!(tangon !== report)) { _fun00022_ip = 70; continue _fun00021 }
 61:
                        michal = _closure3_slot0;
                        michal = zuuluu.bind(entity)(michal);
 70:
                        return entity;
                    }
                };
                golfie = 0;
                var _closure3_slot3 = golfie;
                oscard = oscard.length;
                verify = golfie < oscard;
                if(!verify) { _fun00020_ip = 144; continue _fun00019 }
 129:
                verify = option.bind(entity)();
                golfie = golfie + 1;
                _closure3_slot3 = golfie;
                if(golfie < oscard) { _fun00020_ip = 129; continue _fun00019 }
 144:
                report = report._subscriptions;
                zuuluu = zuuluu.type;
                report = report[zuuluu];
                var _closure3_slot4 = report;
                zuuluu = null;
                if(!(zuuluu != report)) { _fun00020_ip = 186; continue _fun00019 }
 169:
                zuuluu = '__subscriptions';
                michal = function() {
                    zuuluu = _closure3_slot4;
                    michal = zuuluu.forEach;
                    entity = function(argFoo) {
                        zuuluu = _closure3_slot0;
                        michal = argFoo;
                        entity = undefined;
                        entity = michal.bind(entity)(zuuluu);
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                michal = tangon.bind(entity)(zuuluu, michal);
 186:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'addInterceptor';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: addInterceptor
            entity = this;
            zuuluu = entity._interceptors;
            michal = zuuluu.push;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'wait';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: wait
            michal = this;
            tangon = michal._waitQueue;
            zuuluu = tangon.push;
            entity = argFoo;
            entity = zuuluu.bind(tangon)(entity);
            entity = michal.flushWaitQueue;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'subscribe';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: subscribe
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                tangon = argFoo;
                entity = this;
                michal = entity._subscriptions;
                zuuluu = michal[tangon];
                michal = null;
                if(!(michal == zuuluu)) { _fun00024_ip = 63; continue _fun00023 }
 22:
                michal = entity._subscriptions;
                entity = global;
                entity = entity.Set;
                report = entity.prototype;
                report = Object.create(report, {constructor: {value: entity}});
                golfie = report;
                entity = new golfie[entity](oscard);
                entity = entity instanceof Object ? entity : report;
                michal[tangon] = entity;
                zuuluu = entity;
 63:
                michal = zuuluu.add;
                entity = argBar;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'unsubscribe';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: unsubscribe
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                michal = argFoo;
                entity = this;
                zuuluu = entity._subscriptions;
                zuuluu = zuuluu[michal];
                tangon = null;
                if(!(tangon != zuuluu)) { _fun00026_ip = 56; continue _fun00025 }
 22:
                report = zuuluu.delete;
                tangon = argBar;
                tangon = report.bind(zuuluu)(tangon);
                tangon = zuuluu.size;
                zuuluu = 0;
                if(!(zuuluu === tangon)) { _fun00026_ip = 56; continue _fun00025 }
 46:
                entity = entity._subscriptions;
                entity = delete entity[michal];
 56:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[9] = entity;
        entity = {};
        oscard = 'register';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: register
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                golfie = argCor;
                entity = this;
                oscard = entity._actionHandlers;
                report = oscard.register;
                michal = null;
                if(!(michal == golfie)) { _fun00028_ip = 30; continue _fun00027 }
 24:
                golfie = entity._defaultBand;
 30:
                romeon = argFoo;
                yankee = argBar;
                offset = argBaz;
                option = argGra;
                foxtra = oscard;
                verify = golfie;
                entity = foxtra[report](romeon, yankee, offset, verify, option, golfie);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[10] = entity;
        entity = {};
        oscard = 'createToken';
        entity['key'] = oscard;
        oscard = function() { // Original name: createToken
            entity = this;
            michal = entity._actionHandlers;
            entity = michal.createToken;
            entity = entity.bind(michal)();
            return entity;
        };
        entity['value'] = oscard;
        michal[11] = entity;
        entity = {};
        oscard = 'addDependencies';
        entity['key'] = oscard;
        report = function(argFoo, argBar) { // Original name: addDependencies
            entity = this;
            tangon = entity._actionHandlers;
            zuuluu = tangon.addDependencies;
            michal = argFoo;
            entity = argBar;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        michal[12] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = function() {
        tangon = _closure1_slot5;
        zuuluu = function() { // Original name: ActionHandlersGraph
            zuuluu = this;
            report = _closure1_slot4;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            tangon = {};
            zuuluu['_orderedActionHandlers'] = tangon;
            tangon = null;
            zuuluu['_orderedCallbackTokens'] = tangon;
            tangon = 1;
            zuuluu['_lastID'] = tangon;
            tangon = _closure1_slot0;
            report = _closure1_slot3;
            michal = 9;
            michal = report[michal];
            michal = tangon.bind(entity)(michal);
            michal = michal.DepGraph;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            option = tangon;
            michal = new option[michal](golfie);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['_dependencyGraph'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'getOrderedActionHandlers';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: getOrderedActionHandlers
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                michal = argFoo;
                tangon = this;
                zuuluu = tangon._orderedActionHandlers;
                entity = michal.type;
                entity = zuuluu[entity];
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00030_ip = 43; continue _fun00029 }
 27:
                zuuluu = tangon._computeOrderedActionHandlers;
                michal = michal.type;
                entity = zuuluu.bind(tangon)(michal);
 43:
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(10);
        michal[0] = entity;
        entity = {};
        oscard = 'register';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz, argCor) { // Original name: register
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                option = argFoo;
                michal = argBar;
                tangon = argCor;
                entity = arguments[4];
                zuuluu = this;
                var _closure3_slot0 = option;
                var _closure3_slot1 = michal;
                romeon = undefined;
                if(!(entity === romeon)) { _fun00032_ip = 41; continue _fun00031 }
 31:
                report = zuuluu.createToken;
                entity = report.bind(zuuluu)();
 41:
                var _closure3_slot2 = romeon;
                var _closure3_slot3 = romeon;
                oscard = _closure1_slot1;
                golfie = _closure1_slot3;
                report = 7;
                report = golfie[report];
                golfie = oscard.bind(romeon)(report);
                report = 0;
                oscard = tangon >= report;
                if(!oscard) { _fun00032_ip = 100; continue _fun00031 }
 81:
                report = global;
                verify = report.Number;
                report = verify.isInteger;
                oscard = report.bind(verify)(tangon);
 100:
                report = 'band must be a non-negative integer.';
                report = golfie.bind(romeon)(oscard, report);
                golfie = {};
                _closure3_slot2 = golfie;
                yankee = function() { // Original name: _loop2
                    tangon = _closure3_slot1;
                    zuuluu = _closure3_slot3;
                    zuuluu = tangon[zuuluu];
                    var _closure4_slot0 = zuuluu;
                    tangon = function(argFoo) { // Original name: wrapper
                        zuuluu = _closure4_slot0;
                        michal = undefined;
                        entity = argFoo;
                        entity = zuuluu.bind(michal)(entity);
                        return entity;
                    };
                    report = _closure1_slot11;
                    option = _closure3_slot0;
                    golfie = _closure3_slot3;
                    entity = global;
                    entity = entity.HermesInternal;
                    oscard = entity.concat;
                    zuuluu = '';
                    entity = '_';
                    zuuluu = oscard.bind(zuuluu)(option, entity, golfie);
                    entity = undefined;
                    zuuluu = report.bind(entity)(tangon, zuuluu);
                    zuuluu = _closure3_slot2;
                    michal = _closure3_slot3;
                    zuuluu[michal] = tangon;
                    return entity;
                };
                verify = michal;
                for(michal in verify)
 134:
                {
 143:
                    backup = michal;
                    _closure3_slot3 = backup;
                    backup = yankee.bind(romeon)();
                    _fun00032_ip = 134; continue _fun00031;
                }
 156:
                oscard = zuuluu._dependencyGraph;
                report = oscard.addNode;
                michal = {};
                michal['name'] = option;
                michal['band'] = tangon;
                michal['actionHandler'] = golfie;
                golfie = argBaz;
                michal['storeDidChange'] = golfie;
                michal = report.bind(oscard)(entity, michal);
                michal = zuuluu._addToBand;
                michal = michal.bind(zuuluu)(entity, tangon);
                michal = zuuluu._invalidateCaches;
                michal = michal.bind(zuuluu)();
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'createToken';
        entity['key'] = oscard;
        oscard = function() { // Original name: createToken
            zuuluu = this;
            entity = zuuluu._lastID;
            michal = parseFloat(entity);
            entity = michal + 1;
            zuuluu['_lastID'] = entity;
            entity = 'ID_';
            entity = entity + michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'addDependencies';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: addDependencies
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                oscard = argFoo;
                tangon = argBar;
                zuuluu = this;
                entity = zuuluu._validateDependencies;
                entity = entity.bind(zuuluu)(oscard, tangon);
                michal = _closure1_slot9;
                entity = undefined;
                report = michal.bind(entity)(tangon);
                tangon = report.bind(entity)();
                michal = tangon.done;
                if(michal) { _fun00034_ip = 85; continue _fun00033 }
 47:
                option = tangon.value;
                golfie = zuuluu._dependencyGraph;
                michal = golfie.addDependency;
                michal = michal.bind(golfie)(oscard, option);
                golfie = report.bind(entity)();
                michal = golfie.done;
                tangon = golfie;
                if(!michal) { _fun00034_ip = 47; continue _fun00033 }
 85:
                michal = zuuluu._invalidateCaches;
                michal = michal.bind(zuuluu)();
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = '_validateDependencies';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: _validateDependencies
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = '_invalidateCaches';
        entity['key'] = oscard;
        oscard = function() { // Original name: _invalidateCaches
            michal = this;
            entity = null;
            michal['_orderedCallbackTokens'] = entity;
            entity = {};
            michal['_orderedActionHandlers'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = '_bandToken';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: _bandToken
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                golfie = argFoo;
                oscard = this;
                entity = global;
                entity = entity.HermesInternal;
                michal = entity.concat;
                entity = 'band.';
                entity = michal.bind(entity)(golfie);
                zuuluu = oscard._dependencyGraph;
                michal = zuuluu.hasNode;
                michal = michal.bind(zuuluu)(entity);
                if(michal) { _fun00036_ip = 140; continue _fun00035 }
 50:
                tangon = oscard._dependencyGraph;
                zuuluu = tangon.addNode;
                michal = {};
                michal['name'] = entity;
                michal['band'] = golfie;
                report = {};
                michal['actionHandler'] = report;
                report = function() { // Original name: storeDidChange
                    entity = undefined;
                    return entity;
                };
                michal['storeDidChange'] = report;
                michal = zuuluu.bind(tangon)(entity, michal);
                michal = 0;
                if(!(golfie > michal)) { _fun00036_ip = 140; continue _fun00035 }
 104:
                tangon = oscard._dependencyGraph;
                zuuluu = tangon.addDependency;
                report = oscard._bandToken;
                michal = 1;
                michal = golfie - michal;
                michal = report.bind(oscard)(michal);
                michal = zuuluu.bind(tangon)(entity, michal);
 140:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = '_addToBand';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: _addToBand
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                tangon = argFoo;
                golfie = argBar;
                oscard = this;
                zuuluu = oscard._dependencyGraph;
                michal = zuuluu.addDependency;
                entity = oscard._bandToken;
                entity = entity.bind(oscard)(golfie);
                entity = michal.bind(zuuluu)(entity, tangon);
                entity = 0;
                if(!(golfie > entity)) { _fun00038_ip = 80; continue _fun00037 }
 44:
                zuuluu = oscard._dependencyGraph;
                michal = zuuluu.addDependency;
                report = oscard._bandToken;
                entity = 1;
                entity = golfie - entity;
                entity = report.bind(oscard)(entity);
                entity = michal.bind(zuuluu)(tangon, entity);
 80:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = '_computeOrderedActionHandlers';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: _computeOrderedActionHandlers
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                zuuluu = argFoo;
                michal = this;
                golfie = michal._orderedCallbackTokens;
                oscard = null;
                if(!(oscard == golfie)) { _fun00040_ip = 28; continue _fun00039 }
 18:
                entity = michal._computeOrderedCallbackTokens;
                golfie = entity.bind(michal)();
 28:
                entity = new Array(0);
                report = golfie.length;
                tangon = 0;
                option = tangon < report;
                if(!option) { _fun00040_ip = 125; continue _fun00039 }
 46:
                offset = michal._dependencyGraph;
                verify = offset.getNodeData;
                option = golfie[tangon];
                verify = verify.bind(offset)(option);
                romeon = verify.name;
                option = verify.actionHandler;
                offset = verify.storeDidChange;
                yankee = option[zuuluu];
                if(!(oscard != yankee)) { _fun00040_ip = 118; continue _fun00039 }
 92:
                verify = entity.push;
                option = {};
                option['name'] = romeon;
                option['actionHandler'] = yankee;
                option['storeDidChange'] = offset;
                option = verify.bind(entity)(option);
 118:
                tangon = tangon + 1;
                if(tangon < report) { _fun00040_ip = 46; continue _fun00039 }
 125:
                michal = michal._orderedActionHandlers;
                michal[zuuluu] = entity;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = '_computeOrderedCallbackTokens';
        entity['key'] = oscard;
        report = function() { // Original name: _computeOrderedCallbackTokens
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                tangon = this;
                var _closure3_slot0 = tangon;
 9: // try_start_0
                report = tangon._dependencyGraph;
                zuuluu = report.overallOrder;
                zuuluu = zuuluu.bind(report)();
                tangon['_orderedCallbackTokens'] = zuuluu;
 31: // try_end0
                return zuuluu;
 33: // catch_target0
                CatchBlockStart(arg_register=2);
                michal = zuuluu;
                tangon = zuuluu.cyclePath;
                zuuluu = null;
                if(!(zuuluu == tangon)) { _fun00042_ip = 55; continue _fun00041 }
 50:
                zuuluu = michal;
                throw zuuluu;
 55:
                zuuluu = michal.cyclePath;
                michal = zuuluu.map;
                entity = function(argFoo) {
                    oscard = argFoo;
                    entity = _closure3_slot0;
                    michal = entity._dependencyGraph;
                    entity = michal.getNodeData;
                    entity = entity.bind(michal)(oscard);
                    offset = entity.name;
                    entity = global;
                    entity = entity.HermesInternal;
                    tangon = entity.concat;
                    yankee = '';
                    verify = '(';
                    golfie = ')';
                    option = oscard;
                    entity = yankee[tangon](offset, verify, option, golfie, oscard);
                    return entity;
                };
                report = michal.bind(zuuluu)(entity);
                entity = global;
                zuuluu = entity.Error;
                tangon = report.join;
                michal = ' -> ';
                tangon = tangon.bind(report)(michal);
                entity = entity.HermesInternal;
                michal = entity.concat;
                entity = 'Dependency Cycle Found: ';
                oscard = michal.bind(entity)(tangon);
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                golfie = michal;
                entity = new golfie[zuuluu](oscard, report);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        entity['value'] = report;
        michal[9] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot8 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/flux/Dispatcher.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['Dispatcher'] = michal;
    return entity;
})();