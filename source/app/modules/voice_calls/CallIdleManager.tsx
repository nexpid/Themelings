// app/modules/voice_calls/CallIdleManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun123209: for(var _fun123209_ip = 0; ; ) switch(_fun123209_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot13;
            entity = entity.bind(zulu)();
            if(entity) { _fun123209_ip = 51; continue _fun123209 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun123209_ip = 92; continue _fun123209;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun123209_ip = 71; continue _fun123209 }
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
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun123210: for(var _fun123210_ip = 0; ; ) switch(_fun123210_ip) {
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
            _fun123210_ip = 76; continue _fun123210;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot13 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: isIdle
        _fun123213: for(var _fun123213_ip = 0; ; ) switch(_fun123213_ip) {
 0:
            mike = _closure1_slot10;
            entity = mike.getCurrentClientVoiceChannelId;
            report = null;
            golf = entity.bind(mike)(report);
            if(!(report != golf)) { _fun123213_ip = 140; continue _fun123213 }
 24:
            mike = _closure1_slot9;
            entity = mike.getChannel;
            mike = entity.bind(mike)(golf);
            zulu = report == mike;
            if(zulu) { _fun123213_ip = 58; continue _fun123213 }
 45:
            entity = mike.isPrivate;
            entity = entity.bind(mike)();
            zulu = !entity;
 58:
            entity = !zulu;
            if(zulu) { _fun123213_ip = 138; continue _fun123213 }
 64:
            mike = mike.recipients;
            mike = mike.length;
            oscar = 1;
            zulu = mike > oscar;
            mike = !zulu;
            if(zulu) { _fun123213_ip = 135; continue _fun123213 }
 88:
            options = _closure1_slot11;
            zulu = options.countVoiceStatesForChannel;
            zulu = zulu.bind(options)(golf);
            oscar = zulu > oscar;
            zulu = !oscar;
            if(oscar) { _fun123213_ip = 132; continue _fun123213 }
 113:
            oscar = _closure1_slot8;
            tango = oscar.getSelfEmbeddedActivityForChannel;
            tango = tango.bind(oscar)(golf);
            zulu = report == tango;
 132:
            mike = zulu;
 135:
            entity = mike;
 138:
            return entity;
 140:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: disconnect
        _fun123214: for(var _fun123214_ip = 0; ; ) switch(_fun123214_ip) {
 0:
            zulu = _closure1_slot14;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(!zulu) { _fun123214_ip = 157; continue _fun123214 }
 19:
            report = _closure1_slot10;
            zulu = report.getCurrentClientVoiceChannelId;
            tango = null;
            options = zulu.bind(report)(tango);
            if(!(tango != options)) { _fun123214_ip = 157; continue _fun123214 }
 40:
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            oscar = 9;
            oscar = report[oscar];
            golf = zulu.bind(entity)(oscar);
            oscar = golf.sendBotMessage;
            verify = _closure1_slot0;
            mike = 10;
            offset = report[mike];
            offset = verify.bind(entity)(offset);
            yankee = offset.intl;
            offset = yankee.formatToPlainString;
            mike = report[mike];
            mike = verify.bind(entity)(mike);
            mike = mike.t;
            verify = mike.XYof5O;
            mike = {};
            romeo = 3;
            mike['number'] = romeo;
            mike = offset.bind(yankee)(verify, mike);
            mike = oscar.bind(golf)(options, mike);
            mike = 11;
            mike = report[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.selectVoiceChannel;
            mike = mike.bind(zulu)(tango);
 157:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 13;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: CallIdleManager
            golf = this;
            romeo = 0;
            options = copyRestArgs(romeo);
            entity = _closure1_slot4;
            oscar = _closure2_slot0;
            report = undefined;
            entity = entity.bind(report)(golf, oscar);
            tango = _closure1_slot12;
            entity = new Array(0);
            romeo = entity;
            yankee = options;
            offset = 0;
            options = arraySpread(romeo, yankee, offset);
            entity = tango.bind(report)(golf, oscar, entity);
            var _closure3_slot0 = entity;
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 12;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            zulu = zulu.Timeout;
            tango = zulu.prototype;
            tango = Object.create(tango, {constructor: {value: zulu}});
            foxtrot = tango;
            zulu = new foxtrot[zulu](romeo);
            zulu = zulu instanceof Object ? zulu : tango;
            entity['idleTimeout'] = zulu;
            zulu = function() {
                entity = _closure3_slot0;
                mike = entity.idleTimeout;
                entity = mike.stop;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            entity['handleConnectionClosed'] = zulu;
            zulu = function() {
                _fun123218: for(var _fun123218_ip = 0; ; ) switch(_fun123218_ip) {
 0:
                    zulu = _closure1_slot14;
                    entity = undefined;
                    zulu = zulu.bind(entity)();
                    if(!zulu) { _fun123218_ip = 53; continue _fun123218 }
 16:
                    zulu = _closure3_slot0;
                    oscar = zulu.idleTimeout;
                    report = oscar.start;
                    tango = _closure1_slot15;
                    zulu = 180000;
                    mike = true;
                    mike = report.bind(oscar)(zulu, tango, mike);
 53:
                    return entity;
                }
            };
            entity['handleEmbeddedActivityDisconnect'] = zulu;
            mike = function() {
                _fun123219: for(var _fun123219_ip = 0; ; ) switch(_fun123219_ip) {
 0:
                    zulu = _closure1_slot14;
                    entity = undefined;
                    zulu = zulu.bind(entity)();
                    tango = _closure3_slot0;
                    oscar = tango.idleTimeout;
                    if(zulu) { _fun123219_ip = 41; continue _fun123219 }
 29:
                    zulu = oscar.stop;
                    zulu = zulu.bind(oscar)();
                    _fun123219_ip = 65; continue _fun123219;
 41:
                    report = oscar.start;
                    tango = _closure1_slot15;
                    zulu = 180000;
                    mike = false;
                    mike = report.bind(oscar)(zulu, tango, mike);
 65:
                    return entity;
                }
            };
            entity['handleVoiceStateUpdates'] = mike;
            mike = {};
            zulu = entity.handleVoiceStateUpdates;
            mike['VOICE_STATE_UPDATES'] = zulu;
            zulu = entity.handleConnectionClosed;
            mike['CONNECTION_CLOSED'] = zulu;
            zulu = entity.handleEmbeddedActivityDisconnect;
            mike['EMBEDDED_ACTIVITY_CLOSE'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot7;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot3;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_calls/CallIdleManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();