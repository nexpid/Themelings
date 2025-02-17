// app/modules/voice_calls/native/VoiceNotificationManager.android.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot4;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot3;
            entity = _closure1_slot16;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot4;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot16 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot16 = entity;
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
    tango = 9;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = function() {
        tango = _closure1_slot7;
        zulu = function() { // Original name: VoiceNotificationManager
            zulu = this;
            var _closure3_slot0 = zulu;
            report = _closure1_slot6;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            tango = 9000;
            zulu['voiceServiceHandlerId'] = tango;
            tango = null;
            zulu['connectionState'] = tango;
            tango = false;
            zulu['selfMute'] = tango;
            zulu['deafened'] = tango;
            zulu['isStreaming'] = tango;
            tango = function() {
                mike = _closure1_slot13;
                entity = mike.getChannelId;
                backup = entity.bind(mike)();
                entity = mike.getState;
                foxtrot = entity.bind(mike)();
                oscar = _closure3_slot0;
                report = oscar.handleUpdate;
                romeo = oscar.selfMute;
                yankee = oscar.deafened;
                offset = oscar.embeddedActivity;
                verify = oscar.isStreaming;
                kilo = oscar;
                entity = kilo[report](backup, foxtrot, romeo, yankee, offset, verify, options);
                entity = undefined;
                return entity;
            };
            zulu['handleVoiceStateChange'] = tango;
            tango = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure1_slot12;
                    mike = zulu.isSelfMute;
                    options = mike.bind(zulu)();
                    if(options) { _fun00006_ip = 34; continue _fun00005 }
 20:
                    zulu = _closure1_slot12;
                    mike = zulu.isSelfMutedTemporarily;
                    options = mike.bind(zulu)();
 34:
                    zulu = _closure1_slot12;
                    mike = zulu.isSelfDeaf;
                    golf = mike.bind(zulu)();
                    if(golf) { _fun00006_ip = 65; continue _fun00005 }
 51:
                    mike = _closure1_slot12;
                    entity = mike.isDeaf;
                    golf = entity.bind(mike)();
 65:
                    oscar = _closure3_slot0;
                    report = oscar.handleUpdate;
                    backup = oscar.channelId;
                    foxtrot = oscar.connectionState;
                    offset = oscar.embeddedActivity;
                    verify = oscar.isStreaming;
                    kilo = oscar;
                    romeo = options;
                    yankee = golf;
                    entity = kilo[report](backup, foxtrot, romeo, yankee, offset, verify, options);
                    entity = undefined;
                    return entity;
                }
            };
            zulu['handleMediaEngineStateChange'] = tango;
            tango = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure3_slot0;
                    zulu = mike.channelId;
                    mike = null;
                    if(!(mike != zulu)) { _fun00008_ip = 87; continue _fun00007 }
 18:
                    zulu = _closure1_slot8;
                    mike = zulu.getSelfEmbeddedActivityForChannel;
                    options = _closure3_slot0;
                    entity = options.channelId;
                    offset = mike.bind(zulu)(entity);
                    oscar = options.handleUpdate;
                    backup = options.channelId;
                    foxtrot = options.connectionState;
                    romeo = options.selfMute;
                    yankee = options.deafened;
                    verify = options.isStreaming;
                    kilo = options;
                    entity = kilo[oscar](backup, foxtrot, romeo, yankee, offset, verify, options);
 87:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['handleEmbeddedActivityStateChange'] = tango;
            tango = function() {
                mike = _closure1_slot10;
                entity = mike.getCurrentUserActiveStream;
                mike = entity.bind(mike)();
                entity = null;
                verify = entity != mike;
                golf = _closure3_slot0;
                oscar = golf.handleUpdate;
                backup = golf.channelId;
                foxtrot = golf.connectionState;
                romeo = golf.selfMute;
                yankee = golf.deafened;
                offset = golf.embeddedActivity;
                kilo = golf;
                entity = kilo[oscar](backup, foxtrot, romeo, yankee, offset, verify, options);
                entity = undefined;
                return entity;
            };
            zulu['handleApplicationStreamStateChange'] = tango;
            tango = function(argFoo, argBar, argBaz, argCorge, argGrault, argFred) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    offset = argFoo;
                    options = argBar;
                    romeo = argBaz;
                    yankee = argCorge;
                    verify = argGrault;
                    golf = argFred;
                    mike = _closure3_slot0;
                    mike = mike.channelId;
                    if(!(mike === offset)) { _fun00010_ip = 139; continue _fun00009 }
 34:
                    mike = _closure3_slot0;
                    mike = mike.connectionState;
                    if(!(mike === options)) { _fun00010_ip = 139; continue _fun00009 }
 48:
                    mike = _closure3_slot0;
                    mike = mike.selfMute;
                    if(!(mike === romeo)) { _fun00010_ip = 139; continue _fun00009 }
 62:
                    mike = _closure3_slot0;
                    mike = mike.deafened;
                    if(!(mike === yankee)) { _fun00010_ip = 139; continue _fun00009 }
 76:
                    mike = _closure3_slot0;
                    report = mike.embeddedActivity;
                    tango = null;
                    oscar = tango == report;
                    mike = undefined;
                    if(oscar) { _fun00010_ip = 103; continue _fun00009 }
 97:
                    mike = report.launchId;
 103:
                    tango = tango == verify;
                    zulu = undefined;
                    if(tango) { _fun00010_ip = 118; continue _fun00009 }
 112:
                    zulu = verify.launchId;
 118:
                    if(!(mike === zulu)) { _fun00010_ip = 139; continue _fun00009 }
 122:
                    mike = _closure3_slot0;
                    mike = mike.isStreaming;
                    if(!(mike !== golf)) { _fun00010_ip = 1055; continue _fun00009 }
 139:
                    zulu = null;
                    if(!(zulu != options)) { _fun00010_ip = 1055; continue _fun00009 }
 148:
                    mike = _closure3_slot0;
                    mike = mike.channelId;
                    if(!(mike !== offset)) { _fun00010_ip = 171; continue _fun00009 }
 161:
                    mike = _closure3_slot0;
                    mike['channelId'] = offset;
 171:
                    mike = _closure3_slot0;
                    mike = mike.connectionState;
                    if(!(mike !== options)) { _fun00010_ip = 195; continue _fun00009 }
 185:
                    mike = _closure3_slot0;
                    mike['connectionState'] = options;
 195:
                    mike = _closure3_slot0;
                    mike = mike.selfMute;
                    if(!(mike !== romeo)) { _fun00010_ip = 219; continue _fun00009 }
 209:
                    mike = _closure3_slot0;
                    mike['selfMute'] = romeo;
 219:
                    mike = _closure3_slot0;
                    mike = mike.deafened;
                    if(!(mike !== yankee)) { _fun00010_ip = 243; continue _fun00009 }
 233:
                    mike = _closure3_slot0;
                    mike['deafened'] = yankee;
 243:
                    mike = _closure3_slot0;
                    mike = mike.embeddedActivity;
                    oscar = zulu == mike;
                    report = undefined;
                    tango = undefined;
                    if(oscar) { _fun00010_ip = 270; continue _fun00009 }
 264:
                    tango = mike.launchId;
 270:
                    oscar = zulu == verify;
                    mike = undefined;
                    if(oscar) { _fun00010_ip = 285; continue _fun00009 }
 279:
                    mike = verify.launchId;
 285:
                    if(!(tango !== mike)) { _fun00010_ip = 299; continue _fun00009 }
 289:
                    mike = _closure3_slot0;
                    mike['embeddedActivity'] = verify;
 299:
                    mike = _closure3_slot0;
                    mike = mike.isStreaming;
                    if(!(mike !== golf)) { _fun00010_ip = 323; continue _fun00009 }
 313:
                    mike = _closure3_slot0;
                    mike['isStreaming'] = golf;
 323:
                    oscar = _closure1_slot11;
                    tango = oscar.getChannel;
                    backup = tango.bind(oscar)(offset);
                    oscar = _closure1_slot1;
                    offset = _closure1_slot2;
                    tango = 11;
                    tango = offset[tango];
                    oscar = oscar.bind(report)(tango);
                    tango = oscar.getStatus;
                    tango = tango.bind(oscar)(options);
                    update = tango.connectionStatusText;
                    tango = zulu != verify;
                    kilo = '';
                    foxtrot = kilo;
                    if(!tango) { _fun00010_ip = 483; continue _fun00009 }
 391:
                    options = _closure1_slot9;
                    oscar = options.getApplication;
                    offset = zulu == verify;
                    tango = undefined;
                    if(offset) { _fun00010_ip = 415; continue _fun00009 }
 410:
                    tango = verify.applicationId;
 415:
                    options = oscar.bind(options)(tango);
                    oscar = _closure1_slot1;
                    verify = _closure1_slot2;
                    tango = 12;
                    tango = verify[tango];
                    oscar = oscar.bind(report)(tango);
                    verify = zulu == options;
                    tango = undefined;
                    if(verify) { _fun00010_ip = 454; continue _fun00009 }
 449:
                    tango = options.name;
 454:
                    options = oscar.bind(report)(tango);
                    tango = global;
                    tango = tango.HermesInternal;
                    oscar = tango.concat;
                    tango = ' - ';
                    foxtrot = oscar.bind(tango)(options);
 483:
                    oscar = zulu != backup;
                    tango = null;
                    if(!oscar) { _fun00010_ip = 966; continue _fun00009 }
 495:
                    oscar = {};
                    output = _closure1_slot0;
                    options = _closure1_slot2;
                    result = 13;
                    verify = options[result];
                    verify = output.bind(report)(verify);
                    echo = verify.intl;
                    sizing = echo.formatToPlainString;
                    verify = options[result];
                    verify = output.bind(report)(verify);
                    verify = verify.t;
                    offset = verify.aUT3+P;
                    verify = {};
                    verify['callState'] = update;
                    verify = sizing.bind(echo)(offset, verify);
                    oscar['title'] = verify;
                    offset = backup.name;
                    verify = global;
                    verify = verify.HermesInternal;
                    verify = verify.concat;
                    verify = verify.bind(kilo)(offset, foxtrot);
                    oscar['content'] = verify;
                    offset = 14;
                    verify = options[offset];
                    verify = output.bind(report)(verify);
                    verify = verify.ServiceNotificationPriority;
                    verify = verify.HIGH;
                    oscar['priority'] = verify;
                    kilo = _closure3_slot0;
                    foxtrot = kilo.createAction;
                    verify = 'SelectChannel';
                    verify = foxtrot.bind(kilo)(backup, verify, report);
                    oscar['contentAction'] = verify;
                    foxtrot = kilo.createAction;
                    verify = options[result];
                    verify = output.bind(report)(verify);
                    sizing = verify.intl;
                    verify = sizing.string;
                    options = options[result];
                    options = output.bind(report)(options);
                    options = options.t;
                    options = options.6vrfgo;
                    verify = verify.bind(sizing)(options);
                    options = 'Disconnect';
                    verify = foxtrot.bind(kilo)(backup, options, verify);
                    options = new Array(3);
                    options[0] = verify;
                    foxtrot = kilo.createAction;
                    echo = _closure1_slot0;
                    verify = _closure1_slot2;
                    sizing = verify[result];
                    sizing = echo.bind(report)(sizing);
                    output = sizing.intl;
                    sizing = output.string;
                    verify = verify[result];
                    verify = echo.bind(report)(verify);
                    verify = verify.t;
                    if(romeo) { _fun00010_ip = 787; continue _fun00009 }
 774:
                    romeo = verify.w4m94+;
                    romeo = sizing.bind(output)(romeo);
                    _fun00010_ip = 798; continue _fun00009;
 787:
                    verify = verify.YqAjX1;
                    romeo = sizing.bind(output)(verify);
 798:
                    verify = 'ToggleSelfMute';
                    verify = foxtrot.bind(kilo)(backup, verify, romeo);
                    options[1] = verify;
                    foxtrot = _closure3_slot0;
                    romeo = foxtrot.createAction;
                    output = _closure1_slot0;
                    verify = _closure1_slot2;
                    kilo = verify[result];
                    kilo = output.bind(report)(kilo);
                    sizing = kilo.intl;
                    kilo = sizing.string;
                    verify = verify[result];
                    verify = output.bind(report)(verify);
                    verify = verify.t;
                    if(yankee) { _fun00010_ip = 882; continue _fun00009 }
 869:
                    yankee = verify.wjcRFR;
                    yankee = kilo.bind(sizing)(yankee);
                    _fun00010_ip = 895; continue _fun00009;
 882:
                    verify = verify.2US87+;
                    yankee = kilo.bind(sizing)(verify);
 895:
                    verify = 'ToggleDeafen';
                    verify = romeo.bind(foxtrot)(backup, verify, yankee);
                    options[2] = verify;
                    oscar['auxiliaryActions'] = options;
                    verify = _closure1_slot0;
                    options = _closure1_slot2;
                    options = options[offset];
                    options = verify.bind(report)(options);
                    options = options.ServiceNotificationType;
                    if(golf) { _fun00010_ip = 953; continue _fun00009 }
 945:
                    golf = options.VOICE_CALL;
                    _fun00010_ip = 959; continue _fun00009;
 953:
                    golf = options.SCREEN_SHARE;
 959:
                    oscar['type'] = golf;
                    tango = oscar;
 966:
                    if(!(zulu == tango)) { _fun00010_ip = 1013; continue _fun00009 }
 970:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 15;
                    zulu = golf[zulu];
                    golf = oscar.bind(report)(zulu);
                    oscar = golf.removeServiceHandler;
                    zulu = _closure3_slot0;
                    zulu = zulu.voiceServiceHandlerId;
                    zulu = oscar.bind(golf)(zulu);
                    _fun00010_ip = 1055; continue _fun00009;
 1013:
                    zulu = _closure1_slot1;
                    oscar = _closure1_slot2;
                    mike = 15;
                    mike = oscar[mike];
                    zulu = zulu.bind(report)(mike);
                    mike = zulu.updateServiceHandler;
                    entity = _closure3_slot0;
                    entity = entity.voiceServiceHandlerId;
                    entity = mike.bind(zulu)(entity, tango);
 1055:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['handleUpdate'] = tango;
            mike = function(argFoo, argBar, argBaz) {
                zulu = argFoo;
                mike = argBar;
                entity = {};
                oscar = zulu.id;
                tango = global;
                tango = tango.HermesInternal;
                report = tango.concat;
                tango = '';
                tango = report.bind(tango)(mike, oscar);
                entity['tag'] = tango;
                entity['taskName'] = mike;
                mike = argBaz;
                entity['title'] = mike;
                mike = {};
                zulu = zulu.id;
                mike['channelId'] = zulu;
                entity['data'] = mike;
                return entity;
            };
            zulu['createAction'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'initialize';
        entity['key'] = mike;
        mike = function() { // Original name: value
            entity = this;
            report = _closure1_slot13;
            tango = report.addChangeListener;
            zulu = entity.handleVoiceStateChange;
            zulu = tango.bind(report)(zulu);
            report = _closure1_slot12;
            tango = report.addChangeListener;
            zulu = entity.handleMediaEngineStateChange;
            zulu = tango.bind(report)(zulu);
            report = _closure1_slot8;
            tango = report.addChangeListener;
            zulu = entity.handleEmbeddedActivityStateChange;
            zulu = tango.bind(report)(zulu);
            zulu = _closure1_slot10;
            mike = zulu.addChangeListener;
            entity = entity.handleApplicationStreamStateChange;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(2);
        mike[0] = entity;
        entity = {};
        oscar = 'terminate';
        entity['key'] = oscar;
        report = function() { // Original name: value
            entity = this;
            report = _closure1_slot13;
            tango = report.removeChangeListener;
            zulu = entity.handleVoiceStateChange;
            zulu = tango.bind(report)(zulu);
            zulu = _closure1_slot12;
            mike = zulu.removeChangeListener;
            entity = entity.handleMediaEngineStateChange;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        mike[1] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    options = tango.prototype;
    options = Object.create(options, {constructor: {value: tango}});
    foxtrot = options;
    tango = new foxtrot[tango](romeo);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot14 = tango;
    tango = 16;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function() { // Original name: VoiceNotificationLifecycleManager
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot6;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot15;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot5;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot7;
        report = {};
        entity = '_initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            mike = _closure1_slot14;
            entity = mike.initialize;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = '_terminate';
        report['key'] = golf;
        oscar = function() { // Original name: value
            mike = _closure1_slot14;
            entity = mike.terminate;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 17;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_calls/native/VoiceNotificationManager.android.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();