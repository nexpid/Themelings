// app/modules/self_mod/ChannelSafetyWarningsManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun123297: for(var _fun123297_ip = 0; ; ) switch(_fun123297_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot10;
            entity = entity.bind(zulu)();
            if(entity) { _fun123297_ip = 51; continue _fun123297 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun123297_ip = 92; continue _fun123297;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun123297_ip = 71; continue _fun123297 }
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
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun123298: for(var _fun123298_ip = 0; ; ) switch(_fun123298_ip) {
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
            _fun123298_ip = 76; continue _fun123298;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: handleChannelSelect
        _fun123301: for(var _fun123301_ip = 0; ; ) switch(_fun123301_ip) {
 0:
            entity = argFoo;
            report = entity.channelId;
            entity = null;
            if(!(entity != report)) { _fun123301_ip = 258; continue _fun123301 }
 17:
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            zulu = 7;
            zulu = tango[zulu];
            tango = undefined;
            golf = oscar.bind(tango)(zulu);
            oscar = golf.isEligibleForInappropriateConversationWarning;
            zulu = {};
            options = 'channel_select';
            zulu['location'] = options;
            zulu = oscar.bind(golf)(zulu);
            if(zulu) { _fun123301_ip = 72; continue _fun123301 }
 68:
            zulu = false;
            return zulu;
 72:
            oscar = _closure1_slot0;
            zulu = _closure1_slot1;
            options = 8;
            zulu = zulu[options];
            oscar = oscar.bind(tango)(zulu);
            zulu = oscar.getSafetyAlertsSettingOrDefault;
            zulu = zulu.bind(oscar)();
            if(zulu) { _fun123301_ip = 109; continue _fun123301 }
 105:
            zulu = false;
            return zulu;
 109:
            oscar = _closure1_slot7;
            zulu = oscar.getChannel;
            golf = zulu.bind(oscar)(report);
            if(!(entity != golf)) { _fun123301_ip = 254; continue _fun123301 }
 130:
            zulu = golf.isDM;
            zulu = zulu.bind(golf)();
            if(!zulu) { _fun123301_ip = 254; continue _fun123301 }
 143:
            oscar = _closure1_slot0;
            zulu = _closure1_slot1;
            zulu = zulu[options];
            oscar = oscar.bind(tango)(zulu);
            zulu = oscar.getInappropriateConversationTakeoverForChannel;
            oscar = zulu.bind(oscar)(report);
            entity = entity != oscar;
            if(!entity) { _fun123301_ip = 252; continue _fun123301 }
 178:
            zulu = _closure1_slot0;
            options = _closure1_slot1;
            mike = 9;
            mike = options[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.showTakeoverModal;
            mike = {};
            options = oscar.id;
            mike['warningId'] = options;
            oscar = oscar.type;
            mike['warningType'] = oscar;
            oscar = golf.getRecipientId;
            oscar = oscar.bind(golf)();
            mike['senderId'] = oscar;
            mike['channelId'] = report;
            mike = zulu.bind(tango)(mike);
            entity = true;
 252:
            return entity;
 254:
            entity = false;
            return entity;
 258:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: handleChannelUpdates
        _fun123302: for(var _fun123302_ip = 0; ; ) switch(_fun123302_ip) {
 0:
            entity = argFoo;
            oscar = entity.channels;
            tango = undefined;
            var _closure2_slot0 = tango;
            report = _closure1_slot0;
            golf = _closure1_slot1;
            entity = 7;
            entity = golf[entity];
            golf = report.bind(tango)(entity);
            report = golf.isEligibleForInappropriateConversationWarning;
            entity = {};
            options = 'channel_updates';
            entity['location'] = options;
            entity = report.bind(golf)(entity);
            if(entity) { _fun123302_ip = 68; continue _fun123302 }
 64:
            entity = false;
            return entity;
 68:
            report = _closure1_slot0;
            entity = _closure1_slot1;
            golf = 8;
            entity = entity[golf];
            report = report.bind(tango)(entity);
            entity = report.getSafetyAlertsSettingOrDefault;
            entity = entity.bind(report)();
            if(entity) { _fun123302_ip = 105; continue _fun123302 }
 101:
            entity = false;
            return entity;
 105:
            report = _closure1_slot8;
            entity = report.getCurrentlySelectedChannelId;
            report = entity.bind(report)();
            _closure2_slot0 = report;
            entity = null;
            if(!(entity != report)) { _fun123302_ip = 300; continue _fun123302 }
 132:
            report = oscar.find;
            zulu = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            report = report.bind(oscar)(zulu);
            if(!(entity != report)) { _fun123302_ip = 296; continue _fun123302 }
 156:
            oscar = _closure1_slot0;
            zulu = _closure1_slot1;
            zulu = zulu[golf];
            golf = oscar.bind(tango)(zulu);
            oscar = golf.getInappropriateConversationTakeoverForChannel;
            zulu = report.id;
            oscar = oscar.bind(golf)(zulu);
            zulu = entity == oscar;
            if(zulu) { _fun123302_ip = 209; continue _fun123302 }
 196:
            entity = report.isDM;
            entity = entity.bind(report)();
            zulu = !entity;
 209:
            entity = !zulu;
            if(zulu) { _fun123302_ip = 294; continue _fun123302 }
 215:
            zulu = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 9;
            mike = golf[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.showTakeoverModal;
            mike = {};
            golf = oscar.id;
            mike['warningId'] = golf;
            oscar = oscar.type;
            mike['warningType'] = oscar;
            oscar = report.getRecipientId;
            oscar = oscar.bind(report)();
            mike['senderId'] = oscar;
            report = report.id;
            mike['channelId'] = report;
            mike = zulu.bind(tango)(mike);
            entity = true;
 294:
            return entity;
 296:
            entity = false;
            return entity;
 300:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot12 = entity;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: ChannelSafetyWarningsManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            entity = _closure1_slot3;
            report = _closure2_slot0;
            tango = undefined;
            entity = entity.bind(tango)(oscar, report);
            mike = _closure1_slot9;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = mike.bind(tango)(oscar, report, entity);
            mike = {};
            tango = _closure1_slot11;
            mike['CHANNEL_SELECT'] = tango;
            zulu = _closure1_slot12;
            mike['CHANNEL_UPDATES'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot6;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot2;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/self_mod/ChannelSafetyWarningsManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();