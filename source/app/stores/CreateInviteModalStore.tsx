// app/stores/CreateInviteModalStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun86257: for(var _fun86257_ip = 0; ; ) switch(_fun86257_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot23;
            entity = entity.bind(zulu)();
            if(entity) { _fun86257_ip = 51; continue _fun86257 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun86257_ip = 92; continue _fun86257;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun86257_ip = 71; continue _fun86257 }
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
    var _closure1_slot22 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun86258: for(var _fun86258_ip = 0; ; ) switch(_fun86258_ip) {
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
            _fun86258_ip = 76; continue _fun86258;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot23 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo, argBar) { // Original name: updateWithLatestInvite
        _fun86261: for(var _fun86261_ip = 0; ; ) switch(_fun86261_ip) {
 0:
            verify = argFoo;
            entity = argBar;
            oscar = entity.targetType;
            report = entity.targetUserId;
            tango = entity.targetApplicationId;
            mike = _closure1_slot8;
            entity = mike.getChannel;
            yankee = entity.bind(mike)(verify);
            offset = _closure1_slot9;
            golf = offset.getGuild;
            options = null;
            romeo = options == yankee;
            entity = undefined;
            mike = undefined;
            if(romeo) { _fun86261_ip = 68; continue _fun86261 }
 63:
            mike = yankee.guild_id;
 68:
            yankee = golf.bind(offset)(mike);
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            mike = 10;
            mike = offset[mike];
            offset = golf.bind(entity)(mike);
            golf = offset.getDefaultInviteExpiration;
            mike = {};
            mike['guild'] = yankee;
            golf = golf.bind(offset)(mike);
            if(!(options == golf)) { _fun86261_ip = 118; continue _fun86261 }
 114:
            golf = _closure1_slot18;
 118:
            yankee = _closure1_slot10;
            offset = yankee.getInvite;
            mike = {};
            mike['targetType'] = oscar;
            mike['targetUserId'] = report;
            mike['targetApplicationId'] = tango;
            mike = offset.bind(yankee)(verify, mike);
            var _closure1_slot14 = mike;
            mike = {};
            mike['channelId'] = verify;
            verify = _closure1_slot14;
            if(!(options != verify)) { _fun86261_ip = 179; continue _fun86261 }
 169:
            verify = _closure1_slot14;
            golf = verify.maxAge;
 179:
            mike['maxAge'] = golf;
            golf = _closure1_slot14;
            if(!(options == golf)) { _fun86261_ip = 198; continue _fun86261 }
 192:
            golf = _closure1_slot19;
            _fun86261_ip = 208; continue _fun86261;
 198:
            verify = _closure1_slot14;
            golf = verify.maxUses;
 208:
            mike['maxUses'] = golf;
            golf = _closure1_slot14;
            golf = options != golf;
            if(!golf) { _fun86261_ip = 234; continue _fun86261 }
 224:
            verify = _closure1_slot14;
            golf = verify.temporary;
 234:
            mike['temporary'] = golf;
            golf = _closure1_slot14;
            options = options != golf;
            golf = 0;
            if(!options) { _fun86261_ip = 261; continue _fun86261 }
 252:
            options = _closure1_slot14;
            golf = options.flags;
 261:
            mike['flags'] = golf;
            mike['targetType'] = oscar;
            mike['targetUserId'] = report;
            mike['targetApplicationId'] = tango;
            var _closure1_slot15 = mike;
            var _closure1_slot16 = mike;
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo) { // Original name: init
        _fun86262: for(var _fun86262_ip = 0; ; ) switch(_fun86262_ip) {
 0:
            mike = argFoo;
            entity = mike.guildId;
            var _closure1_slot12 = entity;
            entity = null;
            var _closure1_slot13 = entity;
            tango = mike.targetType;
            report = entity != tango;
            oscar = null;
            if(!report) { _fun86262_ip = 39; continue _fun86262 }
 36:
            oscar = tango;
 39:
            tango = mike.targetUserId;
            golf = entity != tango;
            report = null;
            if(!golf) { _fun86262_ip = 57; continue _fun86262 }
 54:
            report = tango;
 57:
            tango = mike.targetApplicationId;
            golf = entity != tango;
            entity = null;
            if(!golf) { _fun86262_ip = 75; continue _fun86262 }
 72:
            entity = tango;
 75:
            tango = _closure1_slot24;
            zulu = mike.channelId;
            mike = {};
            mike['targetType'] = oscar;
            mike['targetUserId'] = report;
            mike['targetApplicationId'] = entity;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.FormStates;
    var _closure1_slot11 = mike;
    options = 9;
    verify = oscar[options];
    verify = golf.bind(entity)(verify);
    verify = verify.INVITE_OPTIONS_7_DAYS;
    verify = verify.value;
    var _closure1_slot18 = verify;
    options = oscar[options];
    options = golf.bind(entity)(options);
    options = options.INVITE_OPTIONS_UNLIMITED;
    options = options.value;
    var _closure1_slot19 = options;
    mike = mike.CLOSED;
    var _closure1_slot20 = mike;
    mike = false;
    var _closure1_slot21 = mike;
    mike = 12;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: CreateInviteModalStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot22;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'init';
        report['key'] = entity;
        entity = function() { // Original name: value
            zulu = this;
            mike = zulu.waitFor;
            entity = _closure1_slot10;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(10);
        entity[0] = report;
        report = {};
        golf = 'isOpen';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = _closure1_slot20;
            entity = _closure1_slot11;
            entity = entity.CLOSED;
            entity = mike !== entity;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'isSubmitting';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot21;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getGuildId';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot12;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getError';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot13;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getInvite';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot14;
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getInviteSettings';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot15;
            return entity;
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'getPendingSettings';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot16;
            return entity;
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'getProps';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = {};
            return entity;
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'onClose';
        report['key'] = golf;
        oscar = function() { // Original name: get
            entity = _closure1_slot17;
            return entity;
        };
        report['get'] = oscar;
        entity[9] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'CreateInviteModalStore';
    options['displayName'] = mike;
    mike = 13;
    mike = oscar[mike];
    romeo = golf.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handleInit
        zulu = _closure1_slot25;
        entity = undefined;
        mike = argFoo;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    mike['CREATE_INVITE_MODAL_INIT'] = verify;
    verify = function(argFoo) { // Original name: handleModalOpen
        _fun86276: for(var _fun86276_ip = 0; ; ) switch(_fun86276_ip) {
 0:
            zulu = argFoo;
            entity = _closure1_slot11;
            entity = entity.OPEN;
            _closure1_slot20 = entity;
            report = zulu.onClose;
            entity = null;
            oscar = entity != report;
            entity = undefined;
            tango = undefined;
            if(!oscar) { _fun86276_ip = 42; continue _fun86276 }
 39:
            tango = report;
 42:
            var _closure1_slot17 = tango;
            mike = _closure1_slot25;
            mike = mike.bind(entity)(zulu);
            return entity;
        }
    };
    mike['CREATE_INVITE_MODAL_OPEN'] = verify;
    verify = function(argFoo) { // Original name: handleUpdateSettings
        _fun86277: for(var _fun86277_ip = 0; ; ) switch(_fun86277_ip) {
 0:
            entity = argFoo;
            zulu = entity.settings;
            tango = _closure1_slot16;
            entity = null;
            if(!(entity != tango)) { _fun86277_ip = 49; continue _fun86277 }
 22:
            entity = {};
            report = _closure1_slot16;
            oscar = entity;
            tango = copyDataProperties(oscar, report);
            oscar = entity;
            report = zulu;
            zulu = copyDataProperties(oscar, report);
            _closure1_slot16 = entity;
 49:
            entity = undefined;
            return entity;
        }
    };
    mike['CREATE_INVITE_MODAL_UPDATE_SETTINGS'] = verify;
    verify = function() { // Original name: handleResetSettings
        entity = _closure1_slot15;
        _closure1_slot16 = entity;
        entity = undefined;
        return entity;
    };
    mike['CREATE_INVITE_MODAL_RESET_SETTINGS'] = verify;
    verify = function() { // Original name: handleGenerateInvite
        entity = _closure1_slot16;
        _closure1_slot15 = entity;
        entity = true;
        _closure1_slot21 = entity;
        entity = undefined;
        return entity;
    };
    mike['CREATE_INVITE_MODAL_GENERATE_INVITE'] = verify;
    verify = function(argFoo) { // Original name: handleGenerateInviteSuccess
        entity = argFoo;
        tango = entity.channelId;
        report = null;
        _closure1_slot13 = report;
        entity = false;
        _closure1_slot21 = entity;
        oscar = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 11;
        zulu = zulu[entity];
        entity = undefined;
        oscar = oscar.bind(entity)(zulu);
        zulu = _closure1_slot15;
        report = report != zulu;
        zulu = 'No invite settings for generated invite';
        zulu = oscar.bind(entity)(report, zulu);
        report = _closure1_slot15;
        zulu = _closure1_slot24;
        mike = {};
        oscar = report.targetType;
        mike['targetType'] = oscar;
        oscar = report.targetUserId;
        mike['targetUserId'] = oscar;
        report = report.targetApplicationId;
        mike['targetApplicationId'] = report;
        mike = zulu.bind(entity)(tango, mike);
        return entity;
    };
    mike['CREATE_INVITE_MODAL_GENERATE_INVITE_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleGenerateInviteFailure
        entity = null;
        _closure1_slot14 = entity;
        entity = false;
        _closure1_slot21 = entity;
        entity = argFoo;
        entity = entity.message;
        _closure1_slot13 = entity;
        entity = undefined;
        return entity;
    };
    mike['CREATE_INVITE_MODAL_GENERATE_INVITE_FAILURE'] = verify;
    tango = function() { // Original name: handleModalClose
        entity = _closure1_slot11;
        entity = entity.CLOSED;
        _closure1_slot20 = entity;
        entity = undefined;
        _closure1_slot17 = entity;
        return entity;
    };
    mike['CREATE_INVITE_MODAL_CLOSE'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[options](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/CreateInviteModalStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();