// app/modules/system_dm/UrgentSystemDMManagerBase.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = argCorge;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot14;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun00002_ip = 86; continue _fun00001;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
            _closure1_slot14 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: maybeShowUrgentMessageModal
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = _closure1_slot9;
            entity = zulu.getCurrentUser;
            report = entity.bind(zulu)();
            entity = null;
            if(!(entity != report)) { _fun00006_ip = 94; continue _fun00005 }
 22:
            zulu = _closure1_slot8;
            entity = zulu.getChannelId;
            entity = entity.bind(zulu)();
            oscar = _closure1_slot7;
            tango = oscar.getDMFromUserId;
            zulu = _closure1_slot10;
            zulu = tango.bind(oscar)(zulu);
            tango = report.hasUrgentMessages;
            tango = tango.bind(report)();
            if(!tango) { _fun00006_ip = 98; continue _fun00005 }
 68:
            if(!(zulu !== entity)) { _fun00006_ip = 98; continue _fun00005 }
 72:
            zulu = _closure1_slot12;
            if(zulu) { _fun00006_ip = 94; continue _fun00005 }
 79:
            zulu = true;
            _closure1_slot12 = zulu;
            tango = argFoo;
            zulu = undefined;
            zulu = tango.bind(zulu)();
 94:
            zulu = undefined;
            return zulu;
 98:
            zulu = _closure1_slot16;
            mike = {};
            mike['channelId'] = entity;
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: maybeClearUrgentMessage
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zulu = entity.channelId;
            tango = _closure1_slot9;
            mike = tango.getCurrentUser;
            report = mike.bind(tango)();
            oscar = _closure1_slot7;
            tango = oscar.getDMFromUserId;
            mike = _closure1_slot10;
            mike = tango.bind(oscar)(mike);
            zulu = zulu === mike;
            mike = null;
            mike = mike != report;
            if(!mike) { _fun00008_ip = 66; continue _fun00007 }
 56:
            tango = report.hasUrgentMessages;
            mike = tango.bind(report)();
 66:
            if(!mike) { _fun00008_ip = 72; continue _fun00007 }
 69:
            mike = zulu;
 72:
            if(!mike) { _fun00008_ip = 125; continue _fun00007 }
 75:
            tango = false;
            _closure1_slot12 = tango;
            report = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 10;
            zulu = zulu[mike];
            mike = undefined;
            zulu = report.bind(mike)(zulu);
            mike = zulu.setFlag;
            entity = _closure1_slot11;
            entity = entity.HAS_UNREAD_URGENT_MESSAGES;
            entity = mike.bind(zulu)(entity, tango);
 125:
            entity = undefined;
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
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SYSTEM_USER;
    var _closure1_slot10 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.UserFlags;
    var _closure1_slot11 = tango;
    tango = false;
    var _closure1_slot12 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: UrgentSystemDMManagerBase
            oscar = this;
            entity = _closure1_slot3;
            report = _closure2_slot0;
            mike = undefined;
            entity = entity.bind(mike)(oscar, report);
            entity = _closure1_slot13;
            entity = entity.bind(mike)(oscar, report);
            var _closure3_slot0 = entity;
            mike = argFoo;
            entity['handleShowUrgentMessageAlert'] = mike;
            mike = {};
            report = function() { // Original name: POST_CONNECTION_OPEN
                zulu = _closure1_slot15;
                entity = _closure3_slot0;
                mike = entity.handleShowUrgentMessageAlert;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike['POST_CONNECTION_OPEN'] = report;
            tango = function() { // Original name: MESSAGE_CREATE
                zulu = _closure1_slot15;
                entity = _closure3_slot0;
                mike = entity.handleShowUrgentMessageAlert;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike['MESSAGE_CREATE'] = tango;
            zulu = _closure1_slot16;
            mike['CHANNEL_SELECT'] = zulu;
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
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/system_dm/UrgentSystemDMManagerBase.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();